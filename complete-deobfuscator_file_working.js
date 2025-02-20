const fs = require('fs');
const path = require('path');
const prettier = require('prettier');
const { execSync } = require('child_process');

class AdvancedDeobfuscator {
    constructor(inputPath) {
        this.inputPath = inputPath;
        this.stages = [];
        this.backups = [];
    }

    // Get all JS files from directory
    getJsFiles() {
        try {
            if (!fs.existsSync(this.inputPath)) {
                throw new Error(`Directory not found: ${this.inputPath}`);
            }

            const files = fs.readdirSync(this.inputPath);
            const jsFiles = files.filter(file => 
                file.endsWith('.js') && 
                !file.includes('Deobs') && 
                !file.includes('deobfuscator') &&
                fs.statSync(path.join(this.inputPath, file)).isFile()
            );

            console.log(`Found ${jsFiles.length} JavaScript files`);
            return jsFiles;
        } catch (error) {
            console.error('Error getting JS files:', error);
            return [];
        }
    }

    // Generate output filename
    getOutputFilename(inputFile) {
        const parsedPath = path.parse(inputFile);
        return path.join(
            parsedPath.dir,
            `${parsedPath.name}Deobs${parsedPath.ext}`
        );
    }

    // Backup file
    async backupFile(filePath) {
        try {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            const backupPath = `${filePath}.${timestamp}.backup`;
            fs.copyFileSync(filePath, backupPath);
            this.backups.push(backupPath);
            return backupPath;
        } catch (error) {
            console.error(`Error backing up file ${filePath}:`, error);
            return null;
        }
    }

    // Run deobfuscator
    async runDeobfuscator(inputFile) {
        try {
            console.log(`Running deobfuscator on ${inputFile}...`);
            const tempOutput = `${inputFile}.temp.js`;
            execSync(`obfuscator-io-deobfuscator "${inputFile}" -o "${tempOutput}"`);
            return tempOutput;
        } catch (error) {
            console.error('Error running deobfuscator:', error);
            return inputFile;
        }
    }

    // Custom deobfuscation
    async customDeobfuscate(code) {
        try {
            // Remove string array transformations
            code = code.replace(/var _0x[a-f0-9]+ = \[([^\]]+)\];/g, (match, contents) => {
                try {
                    const strings = eval(`[${contents}]`);
                    return `/* Deobfuscated string array */\nconst strings = ${JSON.stringify(strings, null, 2)};`;
                } catch {
                    return match;
                }
            });

            // Resolve string array references
            code = code.replace(/_0x[a-f0-9]+\((['"]?\d+['"]?)\)/g, (match, index) => {
                try {
                    const idx = eval(index);
                    const strings = this.extractStringArray(code);
                    if (strings && strings[idx]) {
                        return `"${strings[idx]}"`;
                    }
                } catch {}
                return match;
            });

            // Remove dead code
            code = code.replace(/if\s*\(false\)\s*{[\s\S]+?}/g, '');
            code = code.replace(/if\s*\(!\s*1\s*\)\s*{[\s\S]+?}/g, '');
            code = code.replace(/function\s+([a-zA-Z_$][\w$]*)\s*\(\)\s*{\s*}/g, '');
            code = code.replace(/console\s*\.\s*clear\s*\(\s*\)\s*;?/g, '');

            return code;
        } catch (error) {
            console.error('Error in custom deobfuscation:', error);
            return code;
        }
    }

    // Format code
    async formatCode(code) {
        try {
            return prettier.format(code, {
                parser: 'babel',
                semi: true,
                singleQuote: true,
                trailingComma: 'es5',
                bracketSpacing: true,
                arrowParens: 'avoid',
            });
        } catch (error) {
            console.log('Prettier formatting failed, using basic formatting...');
            return this.basicFormatting(code);
        }
    }

    // Basic formatting
    basicFormatting(code) {
        try {
            // Basic indentation
            code = code.replace(/^/gm, '  ');
            
            // Format switch-case
            code = code.replace(/switch\s*\((.*?)\)\s*{/g, 'switch ($1) {');
            code = code.replace(/case\s+(.*?):/g, '  case $1:');
            code = code.replace(/default:/g, '  default:');
            
            // Format brackets and semicolons
            code = code.replace(/{\s*/g, '{\n');
            code = code.replace(/}\s*/g, '}\n');
            code = code.replace(/;\s*/g, ';\n');
            
            // Clean up empty lines
            code = code.replace(/\n\s*\n/g, '\n\n');
            
            return code;
        } catch (error) {
            console.error('Basic formatting failed:', error);
            return code;
        }
    }

    // Extract string array
    extractStringArray(code) {
        try {
            const match = code.match(/var _0x[a-f0-9]+ = \[([^\]]+)\];/);
            if (match) {
                return eval(`[${match[1]}]`);
            }
        } catch {}
        return null;
    }

    // Process single file
    async processFile(filePath) {
        console.log(`Processing file: ${filePath}`);
        
        try {
            // Backup
            await this.backupFile(filePath);
            
            // Deobfuscate
            const tempFile = await this.runDeobfuscator(filePath);
            
            // Read and process
            let code = fs.readFileSync(tempFile, 'utf8');
            code = await this.customDeobfuscate(code);
            code = await this.formatCode(code);
            
            // Save result
            const outputFile = this.getOutputFilename(filePath);
            fs.writeFileSync(outputFile, code);
            
            // Cleanup
            if (tempFile !== filePath && fs.existsSync(tempFile)) {
                fs.unlinkSync(tempFile);
            }
            
            console.log(`Successfully processed: ${filePath}`);
            return true;
        } catch (error) {
            console.error(`Error processing ${filePath}:`, error);
            return false;
        }
    }

    // Main process
    async deobfuscate() {
        console.log('Starting deobfuscation process...');
        
        try {
            const jsFiles = this.getJsFiles();
            
            if (jsFiles.length === 0) {
                console.log('No JavaScript files found to process.');
                return;
            }

            const results = {
                successful: [],
                failed: []
            };

            for (const file of jsFiles) {
                const fullPath = path.join(this.inputPath, file);
                const success = await this.processFile(fullPath);
                
                if (success) {
                    results.successful.push(file);
                } else {
                    results.failed.push(file);
                }
            }

            // Print summary
            console.log('\nDeobfuscation Summary:');
            console.log(`Successfully processed: ${results.successful.length} files`);
            console.log(`Failed to process: ${results.failed.length} files`);
            
            if (results.failed.length > 0) {
                console.log('\nFailed files:');
                results.failed.forEach(file => console.log(`- ${file}`));
            }
        } catch (error) {
            console.error('Error during deobfuscation:', error);
            throw error;
        }
    }
}

// Example usage
const deobfuscator = new AdvancedDeobfuscator('/Users/mohareti/Downloads/js/js');
deobfuscator.deobfuscate().catch(console.error);
