import {
  s as a35_0x322168,
  u as a35_0x278e1e,
  x as a35_0x318996,
  r as a35_0x2ade0b,
  n as a35_0x5bbd01,
  y as a35_0x13e8c2,
  d as a35_0x3c1601,
  z as a35_0x222820,
  A as a35_0x244537,
  a as a35_0x1944d1,
  w as a35_0x78c5a,
} from './index-4b020bd6.js'; /*!
 * vue-router v4.1.6
 * (c) 2022 Eduardo San Martin Morote
 * @license MIT
 */
const G = typeof window < 'u';
function nt(_0x16b480) {
  return _0x16b480.__esModule || _0x16b480[Symbol.toStringTag] === 'Module';
}
const k = Object.assign;
function ae(_0x277a40, _0x414062) {
  const _0x2a439f = {};
  for (const _0x12ffe2 in _0x414062) {
    const _0x2f11b2 = _0x414062[_0x12ffe2];
    _0x2a439f[_0x12ffe2] = N(_0x2f11b2)
      ? _0x2f11b2.map(_0x277a40)
      : _0x277a40(_0x2f11b2);
  }
  return _0x2a439f;
}
const W = () => {};
const N = Array.isArray;
const rt = /\/$/;
const st = _0x43fa75 => _0x43fa75.replace(rt, '');
function le(_0x119ef3, _0x10ce76, _0x28ec45 = '/') {
  let _0x2a171e;
  let _0x2c7f10 = {};
  let _0x35f7f3 = '';
  let _0x24d951 = '';
  const _0xcaaeee = _0x10ce76.indexOf('#');
  let _0x16fd27 = _0x10ce76.indexOf('?');
  if (_0xcaaeee < _0x16fd27 && _0xcaaeee >= 0x0) {
    _0x16fd27 = -0x1;
  }
  if (_0x16fd27 > -0x1) {
    _0x2a171e = _0x10ce76.slice(0x0, _0x16fd27);
    _0x35f7f3 = _0x10ce76.slice(
      _0x16fd27 + 0x1,
      _0xcaaeee > -0x1 ? _0xcaaeee : _0x10ce76.length
    );
    _0x2c7f10 = _0x119ef3(_0x35f7f3);
  }
  if (_0xcaaeee > -0x1) {
    _0x2a171e = _0x2a171e || _0x10ce76.slice(0x0, _0xcaaeee);
    _0x24d951 = _0x10ce76.slice(_0xcaaeee, _0x10ce76.length);
  }
  _0x2a171e = at(_0x2a171e != null ? _0x2a171e : _0x10ce76, _0x28ec45);
  return {
    fullPath: _0x2a171e + (_0x35f7f3 && '?') + _0x35f7f3 + _0x24d951,
    path: _0x2a171e,
    query: _0x2c7f10,
    hash: _0x24d951,
  };
}
function ot(_0x16537e, _0x38aa1e) {
  const _0x1fbf36 = _0x38aa1e.query ? _0x16537e(_0x38aa1e.query) : '';
  return (
    _0x38aa1e.path + (_0x1fbf36 && '?') + _0x1fbf36 + (_0x38aa1e.hash || '')
  );
}
function ct(_0x3f836c, _0x2e0c36, _0x461b08) {
  const _0x54f636 = _0x2e0c36.matched.length - 0x1;
  const _0x289bfe = _0x461b08.matched.length - 0x1;
  return (
    _0x54f636 > -0x1 &&
    _0x54f636 === _0x289bfe &&
    (_0x2e0c36.matched[_0x54f636].aliasOf || _0x2e0c36.matched[_0x54f636]) ===
      (_0x461b08.matched[_0x289bfe].aliasOf || _0x461b08.matched[_0x289bfe]) &&
    qe(_0x2e0c36.params, _0x461b08.params) &&
    _0x3f836c(_0x2e0c36.query) === _0x3f836c(_0x461b08.query) &&
    _0x2e0c36.hash === _0x461b08.hash
  );
}
function K(_0x40665b, _0x1e0bdd) {
  return (_0x40665b.aliasOf || _0x40665b) === (_0x1e0bdd.aliasOf || _0x1e0bdd);
}
function qe(_0x125759, _0x1ad913) {
  if (Object.keys(_0x125759).length !== Object.keys(_0x1ad913).length) {
    return false;
  }
  for (const _0xb71612 in _0x125759)
    if (
      !(N(_0x125759[_0xb71612])
        ? Se(_0x125759[_0xb71612], _0x1ad913[_0xb71612])
        : N(_0x1ad913[_0xb71612])
          ? Se(_0x1ad913[_0xb71612], _0x125759[_0xb71612])
          : _0x125759[_0xb71612] === _0x1ad913[_0xb71612])
    ) {
      return false;
    }
  return true;
}
function it(_0x34eecb, _0x4adcee) {
  return N(_0x34eecb)
    ? Se(_0x34eecb, _0x4adcee)
    : N(_0x4adcee)
      ? Se(_0x4adcee, _0x34eecb)
      : _0x34eecb === _0x4adcee;
}
function Se(_0x47d5c2, _0x513b73) {
  return N(_0x513b73)
    ? _0x47d5c2.length === _0x513b73.length &&
        _0x47d5c2.every(
          (_0x2bb226, _0x1e2df1) => _0x2bb226 === _0x513b73[_0x1e2df1]
        )
    : _0x47d5c2.length === 0x1 && _0x47d5c2[0x0] === _0x513b73;
}
function at(_0x359643, _0x3dd2a5) {
  if (_0x359643.startsWith('/')) {
    return _0x359643;
  }
  if (!_0x359643) {
    return _0x3dd2a5;
  }
  const _0x3997a6 = _0x3dd2a5.split('/');
  const _0x40258b = _0x359643.split('/');
  let _0x127cfb = _0x3997a6.length - 0x1;
  let _0x472a85;
  let _0x5782ed;
  for (_0x472a85 = 0x0; _0x472a85 < _0x40258b.length; _0x472a85++) {
    _0x5782ed = _0x40258b[_0x472a85];
    if (_0x5782ed !== '.') {
      if (_0x5782ed === '..') {
        if (_0x127cfb > 0x1) {
          _0x127cfb--;
        }
      } else {
        break;
      }
    }
  }
  return (
    _0x3997a6.slice(0x0, _0x127cfb).join('/') +
    '/' +
    _0x40258b
      .slice(_0x472a85 - (_0x472a85 === _0x40258b.length ? 0x1 : 0x0))
      .join('/')
  );
}
var Y;
(function (_0x4485c7) {
  _0x4485c7.pop = 'pop';
  _0x4485c7.push = 'push';
})(Y || (Y = {}));
var Z;
(function (_0x40d978) {
  const _0x124947 = (function () {
    let _0x1fdbfa = true;
    return function (_0x33d789, _0xde5ad5) {
      const _0x53731d = _0x1fdbfa
        ? function () {
            if (_0xde5ad5) {
              const _0x3ad203 = _0xde5ad5.apply(_0x33d789, arguments);
              _0xde5ad5 = null;
              return _0x3ad203;
            }
          }
        : function () {};
      _0x1fdbfa = false;
      return _0x53731d;
    };
  })();
  const _0x336856 = _0x124947(this, function () {
    return _0x336856
      .toString()
      .search('(((.+)+)+)+$')
      .toString()
      .constructor(_0x336856)
      .search('(((.+)+)+)+$');
  });
  _0x336856();
  _0x40d978.back = 'back';
  _0x40d978.forward = 'forward';
  _0x40d978.unknown = '';
})(Z || (Z = {}));
function lt(_0x526516) {
  if (!_0x526516) {
    if (G) {
      const _0x50b6b9 = document.querySelector('base');
      _0x526516 = (_0x50b6b9 && _0x50b6b9.getAttribute('href')) || '/';
      _0x526516 = _0x526516.replace(/^\w+:\/\/[^\/]+/, '');
    } else {
      _0x526516 = '/';
    }
  }
  if (_0x526516[0x0] !== '/' && _0x526516[0x0] !== '#') {
    _0x526516 = '/' + _0x526516;
  }
  return _0x526516.replace(rt, '');
}
const ut = /^[^#]+#/;
function ft(_0x50440c, _0x44b7c1) {
  return _0x50440c.replace(ut, '#') + _0x44b7c1;
}
function ht(_0xad4ca0, _0x14cc8a) {
  const _0x3ec877 = document.documentElement.getBoundingClientRect();
  const _0x3773f7 = _0xad4ca0.getBoundingClientRect();
  return {
    behavior: _0x14cc8a.behavior,
    left: _0x3773f7.left - _0x3ec877.left - (_0x14cc8a.left || 0x0),
    top: _0x3773f7.top - _0x3ec877.top - (_0x14cc8a.top || 0x0),
  };
}
const dt = () => ({
  left: window.pageXOffset,
  top: window.pageYOffset,
});
function pt(_0x5c05b2) {
  let _0x5dfc54;
  if ('el' in _0x5c05b2) {
    const _0x5c7005 = _0x5c05b2.el;
    const _0x31901f = typeof _0x5c7005 == 'string' && _0x5c7005.startsWith('#');
    const _0x2e9b14 =
      typeof _0x5c7005 == 'string'
        ? _0x31901f
          ? document.getElementById(_0x5c7005.slice(0x1))
          : document.querySelector(_0x5c7005)
        : _0x5c7005;
    if (!_0x2e9b14) {
      return;
    }
    _0x5dfc54 = ht(_0x2e9b14, _0x5c05b2);
  } else {
    _0x5dfc54 = _0x5c05b2;
  }
  if ('scrollBehavior' in document.documentElement.style) {
    window.scrollTo(_0x5dfc54);
  } else {
    window.scrollTo(
      _0x5dfc54.left != null ? _0x5dfc54.left : window.pageXOffset,
      _0x5dfc54.top != null ? _0x5dfc54.top : window.pageYOffset
    );
  }
}
function ke(_0x469aa0, _0x422f0b) {
  return (
    (history.state ? history.state.position - _0x422f0b : -0x1) + _0x469aa0
  );
}
const he = new Map();
function mt(_0x394a0c, _0x466417) {
  he.set(_0x394a0c, _0x466417);
}
function gt(_0x538f63) {
  const _0x15152b = he.get(_0x538f63);
  he['delete'](_0x538f63);
  return _0x15152b;
}
function nn(_0xe475bc = '') {
  let _0x5bd542 = [];
  let _0x2f209f = [''];
  let _0x4ad9f1 = 0x0;
  _0xe475bc = lt(_0xe475bc);
  function _0xc2bd7a(_0x17ba00) {
    _0x4ad9f1++;
    if (!(_0x4ad9f1 === _0x2f209f.length)) {
      _0x2f209f.splice(_0x4ad9f1);
    }
    _0x2f209f.push(_0x17ba00);
  }
  function _0x292528(
    _0x32c69b,
    _0x1e868b,
    { direction: _0x5f3423, delta: _0x231002 }
  ) {
    const _0x12c1fc = {
      direction: _0x5f3423,
      delta: _0x231002,
      type: Y.pop,
    };
    for (const _0x3ad32c of _0x5bd542)
      _0x3ad32c(_0x32c69b, _0x1e868b, _0x12c1fc);
  }
  const _0x209107 = {
    location: '',
    state: {},
    base: _0xe475bc,
    createHref: ft.bind(null, _0xe475bc),
    replace(_0x7184ee) {
      _0x2f209f.splice(_0x4ad9f1--, 0x1);
      _0xc2bd7a(_0x7184ee);
    },
    push(_0x58b854, _0x250b3b) {
      _0xc2bd7a(_0x58b854);
    },
    listen(_0x1bb53a) {
      _0x5bd542.push(_0x1bb53a);
      return () => {
        const _0x20fb5a = _0x5bd542.indexOf(_0x1bb53a);
        if (_0x20fb5a > -0x1) {
          _0x5bd542.splice(_0x20fb5a, 0x1);
        }
      };
    },
    destroy() {
      _0x5bd542 = [];
      _0x2f209f = [''];
      _0x4ad9f1 = 0x0;
    },
    go(_0x38d0cc, _0x2e7328 = true) {
      const _0x531bac = this.location;
      const _0x68bb63 = _0x38d0cc < 0x0 ? Z.back : Z.forward;
      _0x4ad9f1 = Math.max(
        0x0,
        Math.min(_0x4ad9f1 + _0x38d0cc, _0x2f209f.length - 0x1)
      );
      if (_0x2e7328) {
        _0x292528(this.location, _0x531bac, {
          direction: _0x68bb63,
          delta: _0x38d0cc,
        });
      }
    },
  };
  Object.defineProperty(_0x209107, 'location', {
    enumerable: true,
    get: () => _0x2f209f[_0x4ad9f1],
  });
  return _0x209107;
}
function yt(_0x59fcbd) {
  return (
    typeof _0x59fcbd == 'string' || (_0x59fcbd && typeof _0x59fcbd == 'object')
  );
}
function Ge(_0x46878c) {
  return typeof _0x46878c == 'string' || typeof _0x46878c == 'symbol';
}
const j = {
  path: '/',
  name: undefined,
  params: {},
  query: {},
  hash: '',
  fullPath: '/',
  matched: [],
  meta: {},
  redirectedFrom: undefined,
};
const Ke = Symbol('');
var Ce;
(function (_0x4393b3) {
  _0x4393b3[(_0x4393b3.aborted = 0x4)] = 'aborted';
  _0x4393b3[(_0x4393b3.cancelled = 0x8)] = 'cancelled';
  _0x4393b3[(_0x4393b3.duplicated = 0x10)] = 'duplicated';
})(Ce || (Ce = {}));
function L(_0x583e5a, _0x4075c5) {
  return k(
    new Error(),
    {
      type: _0x583e5a,
      [Ke]: true,
    },
    _0x4075c5
  );
}
function I(_0x228bef, _0xcbac85) {
  return (
    _0x228bef instanceof Error &&
    Ke in _0x228bef &&
    (_0xcbac85 == null || !!(_0x228bef.type & _0xcbac85))
  );
}
const Rt = {
  sensitive: false,
  strict: false,
  start: true,
  end: true,
};
const vt = /[.+*?^${}()[\]/\\]/g;
function Et(_0x122dbd, _0x2aae79) {
  const _0x40b0ce = k({}, Rt, _0x2aae79);
  const _0x18dd33 = [];
  let _0x506aaf = _0x40b0ce.start ? '^' : '';
  const _0x3a2dc7 = [];
  for (const _0x315c3e of _0x122dbd) {
    const _0x5a4834 = _0x315c3e.length ? [] : [0x5a];
    if (_0x40b0ce.strict && !_0x315c3e.length) {
      _0x506aaf += '/';
    }
    for (let _0x2ccc5f = 0x0; _0x2ccc5f < _0x315c3e.length; _0x2ccc5f++) {
      const _0x884b71 = _0x315c3e[_0x2ccc5f];
      let _0x2f6486 = 0x28 + (_0x40b0ce.sensitive ? 0.25 : 0x0);
      if (_0x884b71.type === 0x0) {
        if (!_0x2ccc5f) {
          _0x506aaf += '/';
        }
        _0x506aaf += _0x884b71.value.replace(vt, '\\$&');
        _0x2f6486 += 0x28;
      } else {
        if (_0x884b71.type === 0x1) {
          const {
            value: _0x44e11f,
            repeatable: _0x15f0de,
            optional: _0x2768f8,
            regexp: _0x8fe1ac,
          } = _0x884b71;
          _0x3a2dc7.push({
            name: _0x44e11f,
            repeatable: _0x15f0de,
            optional: _0x2768f8,
          });
          const _0x45a0e0 = _0x8fe1ac || '[^/]+?';
          if (_0x45a0e0 !== '[^/]+?') {
            _0x2f6486 += 0xa;
            try {
              new RegExp('(' + _0x45a0e0 + ')');
            } catch (_0x4f8d01) {
              throw new Error(
                'Invalid custom RegExp for param "' +
                  _0x44e11f +
                  '" (' +
                  _0x45a0e0 +
                  '): ' +
                  _0x4f8d01.message
              );
            }
          }
          let _0x26540a = _0x15f0de
            ? '((?:' + _0x45a0e0 + ')(?:/(?:' + _0x45a0e0 + '))*)'
            : '(' + _0x45a0e0 + ')';
          if (!_0x2ccc5f) {
            _0x26540a =
              _0x2768f8 && _0x315c3e.length < 0x2
                ? '(?:/' + _0x26540a + ')'
                : '/' + _0x26540a;
          }
          if (_0x2768f8) {
            _0x26540a += '?';
          }
          _0x506aaf += _0x26540a;
          _0x2f6486 += 0x14;
          if (_0x2768f8) {
            _0x2f6486 += -0x8;
          }
          if (_0x15f0de) {
            _0x2f6486 += -0x14;
          }
          if (_0x45a0e0 === '.*') {
            _0x2f6486 += -0x32;
          }
        }
      }
      _0x5a4834.push(_0x2f6486);
    }
    _0x18dd33.push(_0x5a4834);
  }
  if (_0x40b0ce.strict && _0x40b0ce.end) {
    const _0x16461f = _0x18dd33.length - 0x1;
    _0x18dd33[_0x16461f][_0x18dd33[_0x16461f].length - 0x1] +=
      0.7000000000000001;
  }
  if (!_0x40b0ce.strict) {
    _0x506aaf += '/?';
  }
  if (_0x40b0ce.end) {
    _0x506aaf += '$';
  } else if (_0x40b0ce.strict) {
    _0x506aaf += '(?:/|$)';
  }
  const _0x5e5a66 = new RegExp(_0x506aaf, _0x40b0ce.sensitive ? '' : 'i');
  function _0x180177(_0x374ff5) {
    const _0x1a38ae = _0x374ff5.match(_0x5e5a66);
    const _0x4d90f1 = {};
    if (!_0x1a38ae) {
      return null;
    }
    for (let _0x4594f1 = 0x1; _0x4594f1 < _0x1a38ae.length; _0x4594f1++) {
      const _0x33b786 = _0x1a38ae[_0x4594f1] || '';
      const _0x23c78e = _0x3a2dc7[_0x4594f1 - 0x1];
      _0x4d90f1[_0x23c78e.name] =
        _0x33b786 && _0x23c78e.repeatable ? _0x33b786.split('/') : _0x33b786;
    }
    return _0x4d90f1;
  }
  function _0x5ae71b(_0x2b3fe6) {
    let _0x4e0a91 = '';
    let _0x247e23 = false;
    for (const _0x3753f8 of _0x122dbd) {
      if (!_0x247e23 || !_0x4e0a91.endsWith('/')) {
        _0x4e0a91 += '/';
      }
      _0x247e23 = false;
      for (const _0x82d90a of _0x3753f8)
        if (_0x82d90a.type === 0x0) {
          _0x4e0a91 += _0x82d90a.value;
        } else {
          if (_0x82d90a.type === 0x1) {
            const {
              value: _0x2e40e1,
              repeatable: _0x3a2fab,
              optional: _0x42681d,
            } = _0x82d90a;
            const _0x5e31fc =
              _0x2e40e1 in _0x2b3fe6 ? _0x2b3fe6[_0x2e40e1] : '';
            if (N(_0x5e31fc) && !_0x3a2fab) {
              throw new Error(
                'Provided param "' +
                  _0x2e40e1 +
                  '" is an array but it is not repeatable (* or + modifiers)'
              );
            }
            const _0x4b0385 = N(_0x5e31fc) ? _0x5e31fc.join('/') : _0x5e31fc;
            if (!_0x4b0385) {
              if (_0x42681d) {
                if (_0x3753f8.length < 0x2) {
                  if (_0x4e0a91.endsWith('/')) {
                    _0x4e0a91 = _0x4e0a91.slice(0x0, -0x1);
                  } else {
                    _0x247e23 = true;
                  }
                }
              } else {
                throw new Error('Missing required param "' + _0x2e40e1 + '"');
              }
            }
            _0x4e0a91 += _0x4b0385;
          }
        }
    }
    return _0x4e0a91 || '/';
  }
  return {
    re: _0x5e5a66,
    score: _0x18dd33,
    keys: _0x3a2dc7,
    parse: _0x180177,
    stringify: _0x5ae71b,
  };
}
function Pt(_0x60acd, _0x358d4c) {
  let _0x4a2a03 = 0x0;
  for (; _0x4a2a03 < _0x60acd.length && _0x4a2a03 < _0x358d4c.length; ) {
    const _0xc42368 = _0x358d4c[_0x4a2a03] - _0x60acd[_0x4a2a03];
    if (_0xc42368) {
      return _0xc42368;
    }
    _0x4a2a03++;
  }
  return _0x60acd.length < _0x358d4c.length
    ? _0x60acd.length === 0x1 && _0x60acd[0x0] === 80
      ? -0x1
      : 0x1
    : _0x60acd.length > _0x358d4c.length
      ? _0x358d4c.length === 0x1 && _0x358d4c[0x0] === 80
        ? 0x1
        : -0x1
      : 0x0;
}
function bt(_0x27272c, _0x336ede) {
  let _0x3e200e = 0x0;
  const _0x6bbae4 = _0x27272c.score;
  const _0x142881 = _0x336ede.score;
  for (; _0x3e200e < _0x6bbae4.length && _0x3e200e < _0x142881.length; ) {
    const _0x2e46a1 = Pt(_0x6bbae4[_0x3e200e], _0x142881[_0x3e200e]);
    if (_0x2e46a1) {
      return _0x2e46a1;
    }
    _0x3e200e++;
  }
  if (Math.abs(_0x142881.length - _0x6bbae4.length) === 0x1) {
    if (we(_0x6bbae4)) {
      return 0x1;
    }
    if (we(_0x142881)) {
      return -0x1;
    }
  }
  return _0x142881.length - _0x6bbae4.length;
}
function we(_0x27f749) {
  const _0x3f1844 = _0x27f749[_0x27f749.length - 0x1];
  return _0x27f749.length > 0x0 && _0x3f1844[_0x3f1844.length - 0x1] < 0x0;
}
const St = {
  type: 0x0,
  value: '',
};
const kt = /[a-zA-Z0-9_]/;
function Ct(_0x27bf51) {
  if (!_0x27bf51) {
    return [[]];
  }
  if (_0x27bf51 === '/') {
    return [[St]];
  }
  if (!_0x27bf51.startsWith('/')) {
    throw new Error('Invalid path "' + _0x27bf51 + '"');
  }
  function _0x42607f(_0x192064) {
    throw new Error(
      'ERR (' + _0x228e7e + ')/"' + _0x449472 + '": ' + _0x192064
    );
  }
  let _0x228e7e = 0x0;
  let _0x5cf003 = _0x228e7e;
  const _0x36508c = [];
  let _0x48a8e2;
  function _0x21b495() {
    if (_0x48a8e2) {
      _0x36508c.push(_0x48a8e2);
    }
    _0x48a8e2 = [];
  }
  let _0x49dd2e = 0x0;
  let _0x4cd5bf;
  let _0x449472 = '';
  let _0x45c1c0 = '';
  function _0x1903bd() {
    if (_0x449472) {
      if (_0x228e7e === 0x0) {
        _0x48a8e2.push({
          type: 0x0,
          value: _0x449472,
        });
      } else if (_0x228e7e === 0x1 || _0x228e7e === 0x2 || _0x228e7e === 0x3) {
        if (
          _0x48a8e2.length > 0x1 &&
          (_0x4cd5bf === '*' || _0x4cd5bf === '+')
        ) {
          _0x42607f(
            'A repeatable param (' +
              _0x449472 +
              ") must be alone in its segment. eg: '/:ids+."
          );
        }
        _0x48a8e2.push({
          type: 0x1,
          value: _0x449472,
          regexp: _0x45c1c0,
          repeatable: _0x4cd5bf === '*' || _0x4cd5bf === '+',
          optional: _0x4cd5bf === '*' || _0x4cd5bf === '?',
        });
      } else {
        _0x42607f('Invalid state to consume buffer');
      }
      _0x449472 = '';
    }
  }
  function _0x22e689() {
    _0x449472 += _0x4cd5bf;
  }
  for (; _0x49dd2e < _0x27bf51.length; ) {
    _0x4cd5bf = _0x27bf51[_0x49dd2e++];
    if (_0x4cd5bf === '\\' && _0x228e7e !== 0x2) {
      _0x5cf003 = _0x228e7e;
      _0x228e7e = 0x4;
      continue;
    }
    switch (_0x228e7e) {
      case 0x0:
        if (_0x4cd5bf === '/') {
          if (_0x449472) {
            _0x1903bd();
          }
          _0x21b495();
        } else if (_0x4cd5bf === ':') {
          _0x1903bd();
          _0x228e7e = 0x1;
        } else {
          _0x22e689();
        }
        break;
      case 0x4:
        _0x22e689();
        _0x228e7e = _0x5cf003;
        break;
      case 0x1:
        if (_0x4cd5bf === '(') {
          _0x228e7e = 0x2;
        } else if (kt.test(_0x4cd5bf)) {
          _0x22e689();
        } else {
          _0x1903bd();
          _0x228e7e = 0x0;
          if (_0x4cd5bf !== '*' && _0x4cd5bf !== '?' && _0x4cd5bf !== '+') {
            _0x49dd2e--;
          }
        }
        break;
      case 0x2:
        if (_0x4cd5bf === ')') {
          if (_0x45c1c0[_0x45c1c0.length - 0x1] == '\\') {
            _0x45c1c0 = _0x45c1c0.slice(0x0, -0x1) + _0x4cd5bf;
          } else {
            _0x228e7e = 0x3;
          }
        } else {
          _0x45c1c0 += _0x4cd5bf;
        }
        break;
      case 0x3:
        _0x1903bd();
        _0x228e7e = 0x0;
        if (_0x4cd5bf !== '*' && _0x4cd5bf !== '?' && _0x4cd5bf !== '+') {
          _0x49dd2e--;
        }
        _0x45c1c0 = '';
        break;
      default:
        _0x42607f('Unknown state');
        break;
    }
  }
  if (_0x228e7e === 0x2) {
    _0x42607f('Unfinished custom RegExp for param "' + _0x449472 + '"');
  }
  _0x1903bd();
  _0x21b495();
  return _0x36508c;
}
function At(_0x5dfbe2, _0x3f814d, _0x2db31c) {
  const _0x37dfc3 = Et(Ct(_0x5dfbe2.path), _0x2db31c);
  const _0x5146da = k(_0x37dfc3, {
    record: _0x5dfbe2,
    parent: _0x3f814d,
    children: [],
    alias: [],
  });
  if (_0x3f814d && !_0x5146da.record.aliasOf == !_0x3f814d.record.aliasOf) {
    _0x3f814d.children.push(_0x5146da);
  }
  return _0x5146da;
}
function wt(_0x3e1d5, _0x337d93) {
  const _0x34d152 = [];
  const _0x18a874 = new Map();
  _0x337d93 = xe(
    {
      strict: false,
      end: true,
      sensitive: false,
    },
    _0x337d93
  );
  function _0x17766d(_0x5af0eb) {
    return _0x18a874.get(_0x5af0eb);
  }
  function _0x55a59e(_0x9cb3ec, _0x4bc877, _0x3c8796) {
    const _0x5862f8 = !_0x3c8796;
    const _0x228216 = {
      path: _0x9cb3ec.path,
      redirect: _0x9cb3ec.redirect,
      name: _0x9cb3ec.name,
      meta: _0x9cb3ec.meta || {},
      aliasOf: undefined,
      beforeEnter: _0x9cb3ec.beforeEnter,
      props: Ot(_0x9cb3ec),
      children: _0x9cb3ec.children || [],
      instances: {},
      leaveGuards: new Set(),
      updateGuards: new Set(),
      enterCallbacks: {},
      components:
        'components' in _0x9cb3ec
          ? _0x9cb3ec.components || null
          : _0x9cb3ec.component && {
              default: _0x9cb3ec.component,
            },
    };
    _0x228216.aliasOf = _0x3c8796 && _0x3c8796.record;
    const _0x588719 = xe(_0x337d93, _0x9cb3ec);
    const _0x4836cb = [_0x228216];
    if ('alias' in _0x9cb3ec) {
      const _0x4a5517 =
        typeof _0x9cb3ec.alias == 'string'
          ? [_0x9cb3ec.alias]
          : _0x9cb3ec.alias;
      for (const _0x37218c of _0x4a5517)
        _0x4836cb.push(
          k({}, _0x228216, {
            components: _0x3c8796
              ? _0x3c8796.record.components
              : _0x228216.components,
            path: _0x37218c,
            aliasOf: _0x3c8796 ? _0x3c8796.record : _0x228216,
          })
        );
    }
    let _0x1e39bb;
    let _0x4572d1;
    for (const _0x292b97 of _0x4836cb) {
      const { path: _0x67ec6f } = _0x292b97;
      if (_0x4bc877 && _0x67ec6f[0x0] !== '/') {
        const _0x3a8e7f = _0x4bc877.record.path;
        const _0x4a33c2 = _0x3a8e7f[_0x3a8e7f.length - 0x1] === '/' ? '' : '/';
        _0x292b97.path =
          _0x4bc877.record.path + (_0x67ec6f && _0x4a33c2 + _0x67ec6f);
      }
      _0x1e39bb = At(_0x292b97, _0x4bc877, _0x588719);
      if (_0x3c8796) {
        _0x3c8796.alias.push(_0x1e39bb);
      } else {
        _0x4572d1 = _0x4572d1 || _0x1e39bb;
        if (_0x4572d1 !== _0x1e39bb) {
          _0x4572d1.alias.push(_0x1e39bb);
        }
        if (_0x5862f8 && _0x9cb3ec.name && !Oe(_0x1e39bb)) {
          _0x1c2dd4(_0x9cb3ec.name);
        }
      }
      if (_0x228216.children) {
        const _0x82b804 = _0x228216.children;
        for (let _0x8d395b = 0x0; _0x8d395b < _0x82b804.length; _0x8d395b++) {
          _0x55a59e(
            _0x82b804[_0x8d395b],
            _0x1e39bb,
            _0x3c8796 && _0x3c8796.children[_0x8d395b]
          );
        }
      }
      _0x3c8796 = _0x3c8796 || _0x1e39bb;
      if (
        (_0x1e39bb.record.components &&
          Object.keys(_0x1e39bb.record.components).length) ||
        _0x1e39bb.record.name ||
        _0x1e39bb.record.redirect
      ) {
        _0x346eff(_0x1e39bb);
      }
    }
    return _0x4572d1
      ? () => {
          _0x1c2dd4(_0x4572d1);
        }
      : W;
  }
  function _0x1c2dd4(_0x2d53a4) {
    if (typeof _0x2d53a4 == 'string' || typeof _0x2d53a4 == 'symbol') {
      const _0x1ca034 = _0x18a874.get(_0x2d53a4);
      if (_0x1ca034) {
        _0x18a874['delete'](_0x2d53a4);
        _0x34d152.splice(_0x34d152.indexOf(_0x1ca034), 0x1);
        _0x1ca034.children.forEach(_0x1c2dd4);
        _0x1ca034.alias.forEach(_0x1c2dd4);
      }
    } else {
      const _0x1bba9e = _0x34d152.indexOf(_0x2d53a4);
      if (_0x1bba9e > -0x1) {
        _0x34d152.splice(_0x1bba9e, 0x1);
        if (_0x2d53a4.record.name) {
          _0x18a874['delete'](_0x2d53a4.record.name);
        }
        _0x2d53a4.children.forEach(_0x1c2dd4);
        _0x2d53a4.alias.forEach(_0x1c2dd4);
      }
    }
  }
  function _0x115d29() {
    return _0x34d152;
  }
  function _0x346eff(_0x555f7d) {
    let _0x39fced = 0x0;
    for (
      ;
      _0x39fced < _0x34d152.length &&
      bt(_0x555f7d, _0x34d152[_0x39fced]) >= 0x0 &&
      (_0x555f7d.record.path !== _0x34d152[_0x39fced].record.path ||
        !Le(_0x555f7d, _0x34d152[_0x39fced]));

    ) {
      _0x39fced++;
    }
    _0x34d152.splice(_0x39fced, 0x0, _0x555f7d);
    if (_0x555f7d.record.name && !Oe(_0x555f7d)) {
      _0x18a874.set(_0x555f7d.record.name, _0x555f7d);
    }
  }
  function _0x4d9546(_0xdf509c, _0x19c8b0) {
    let _0x1efe5b;
    let _0x47201e = {};
    let _0x1ff30d;
    let _0x2631ae;
    if ('name' in _0xdf509c && _0xdf509c.name) {
      _0x1efe5b = _0x18a874.get(_0xdf509c.name);
      if (!_0x1efe5b) {
        throw k(
          new Error(),
          {
            type: 0x1,
            [Ke]: true,
          },
          {
            location: _0xdf509c,
          }
        );
      }
      _0x2631ae = _0x1efe5b.record.name;
      _0x47201e = k(
        _e(
          _0x19c8b0.params,
          _0x1efe5b.keys
            .filter(_0x4626d5 => !_0x4626d5.optional)
            .map(_0x8c2d1b => _0x8c2d1b.name)
        ),
        _0xdf509c.params &&
          _e(
            _0xdf509c.params,
            _0x1efe5b.keys.map(_0x357728 => _0x357728.name)
          )
      );
      _0x1ff30d = _0x1efe5b.stringify(_0x47201e);
    } else {
      if ('path' in _0xdf509c) {
        _0x1ff30d = _0xdf509c.path;
        _0x1efe5b = _0x34d152.find(_0x2e9caf => _0x2e9caf.re.test(_0x1ff30d));
        if (_0x1efe5b) {
          _0x47201e = _0x1efe5b.parse(_0x1ff30d);
          _0x2631ae = _0x1efe5b.record.name;
        }
      } else {
        _0x1efe5b = _0x19c8b0.name
          ? _0x18a874.get(_0x19c8b0.name)
          : _0x34d152.find(_0x1f8f45 => _0x1f8f45.re.test(_0x19c8b0.path));
        if (!_0x1efe5b) {
          throw k(
            new Error(),
            {
              type: 0x1,
              [Ke]: true,
            },
            {
              location: _0xdf509c,
              currentLocation: _0x19c8b0,
            }
          );
        }
        _0x2631ae = _0x1efe5b.record.name;
        _0x47201e = k({}, _0x19c8b0.params, _0xdf509c.params);
        _0x1ff30d = _0x1efe5b.stringify(_0x47201e);
      }
    }
    const _0x531229 = [];
    let _0x40bc0e = _0x1efe5b;
    for (; _0x40bc0e; ) {
      _0x531229.unshift(_0x40bc0e.record);
      _0x40bc0e = _0x40bc0e.parent;
    }
    return {
      name: _0x2631ae,
      path: _0x1ff30d,
      params: _0x47201e,
      matched: _0x531229,
      meta: xt(_0x531229),
    };
  }
  _0x3e1d5.forEach(_0x4986 => _0x55a59e(_0x4986));
  return {
    addRoute: _0x55a59e,
    resolve: _0x4d9546,
    removeRoute: _0x1c2dd4,
    getRoutes: _0x115d29,
    getRecordMatcher: _0x17766d,
  };
}
function _e(_0x3743f1, _0x4d1d09) {
  const _0x49945c = {};
  for (const _0x17197b of _0x4d1d09)
    if (_0x17197b in _0x3743f1) {
      _0x49945c[_0x17197b] = _0x3743f1[_0x17197b];
    }
  return _0x49945c;
}
function _t(_0x5e57a0) {
  return {
    path: _0x5e57a0.path,
    redirect: _0x5e57a0.redirect,
    name: _0x5e57a0.name,
    meta: _0x5e57a0.meta || {},
    aliasOf: undefined,
    beforeEnter: _0x5e57a0.beforeEnter,
    props: Ot(_0x5e57a0),
    children: _0x5e57a0.children || [],
    instances: {},
    leaveGuards: new Set(),
    updateGuards: new Set(),
    enterCallbacks: {},
    components:
      'components' in _0x5e57a0
        ? _0x5e57a0.components || null
        : _0x5e57a0.component && {
            default: _0x5e57a0.component,
          },
  };
}
function Ot(_0x588f0d) {
  const _0x1a03eb = {};
  const _0x3ce976 = _0x588f0d.props || false;
  if ('component' in _0x588f0d) {
    _0x1a03eb['default'] = _0x3ce976;
  } else {
    for (const _0x690a8d in _0x588f0d.components)
      _0x1a03eb[_0x690a8d] =
        typeof _0x3ce976 == 'boolean' ? _0x3ce976 : _0x3ce976[_0x690a8d];
  }
  return _0x1a03eb;
}
function Oe(_0x2f75bc) {
  for (; _0x2f75bc; ) {
    if (_0x2f75bc.record.aliasOf) {
      return true;
    }
    _0x2f75bc = _0x2f75bc.parent;
  }
  return false;
}
function xt(_0x448165) {
  return _0x448165.reduce(
    (_0x4cc577, _0x3e1f64) => k(_0x4cc577, _0x3e1f64.meta),
    {}
  );
}
function xe(_0x172124, _0x397732) {
  const _0x58d5ec = {};
  for (const _0x12faed in _0x172124)
    _0x58d5ec[_0x12faed] =
      _0x12faed in _0x397732 ? _0x397732[_0x12faed] : _0x172124[_0x12faed];
  return _0x58d5ec;
}
function Le(_0x532571, _0x3883a4) {
  return _0x3883a4.children.some(
    _0xe814cf => _0xe814cf === _0x532571 || Le(_0x532571, _0xe814cf)
  );
}
const Ve = /#/g;
const Mt = /&/g;
const Tt = /\//g;
const Nt = /=/g;
const $t = /\?/g;
const De = /\+/g;
const It = /%5B/g;
const jt = /%5D/g;
const Ue = /%5E/g;
const Bt = /%60/g;
const Qe = /%7B/g;
const zt = /%7C/g;
const Fe = /%7D/g;
const Ht = /%20/g;
function me(_0x4b1c3b) {
  return encodeURI('' + _0x4b1c3b)
    .replace(zt, '|')
    .replace(It, '[')
    .replace(jt, ']');
}
function qt(_0x592718) {
  return encodeURI('' + _0x592718)
    .replace(zt, '|')
    .replace(It, '[')
    .replace(jt, ']')
    .replace(Qe, '{')
    .replace(Fe, '}')
    .replace(Ue, '^');
}
function de(_0x1335d0) {
  return encodeURI('' + _0x1335d0)
    .replace(zt, '|')
    .replace(It, '[')
    .replace(jt, ']')
    .replace(De, '%2B')
    .replace(Ht, '+')
    .replace(Ve, '%23')
    .replace(Mt, '%26')
    .replace(Bt, '`')
    .replace(Qe, '{')
    .replace(Fe, '}')
    .replace(Ue, '^');
}
function Gt(_0x2f0079) {
  return encodeURI('' + _0x2f0079)
    .replace(zt, '|')
    .replace(It, '[')
    .replace(jt, ']')
    .replace(De, '%2B')
    .replace(Ht, '+')
    .replace(Ve, '%23')
    .replace(Mt, '%26')
    .replace(Bt, '`')
    .replace(Qe, '{')
    .replace(Fe, '}')
    .replace(Ue, '^')
    .replace(Nt, '%3D');
}
function Kt(_0xb4ae84) {
  return encodeURI('' + _0xb4ae84)
    .replace(zt, '|')
    .replace(It, '[')
    .replace(jt, ']')
    .replace(Ve, '%23')
    .replace($t, '%3F');
}
function Lt(_0x1b2e15) {
  return _0x1b2e15 == null
    ? ''
    : encodeURI('' + _0x1b2e15)
        .replace(zt, '|')
        .replace(It, '[')
        .replace(jt, ']')
        .replace(Ve, '%23')
        .replace($t, '%3F')
        .replace(Tt, '%2F');
}
function J(_0x38547c) {
  try {
    return decodeURIComponent('' + _0x38547c);
  } catch (_0x20d396) {}
  return '' + _0x38547c;
}
function Vt(_0x257b3d) {
  const _0xe6a65c = {};
  if (_0x257b3d === '' || _0x257b3d === '?') {
    return _0xe6a65c;
  }
  const _0x4b70e4 = (
    _0x257b3d[0x0] === '?' ? _0x257b3d.slice(0x1) : _0x257b3d
  ).split('&');
  for (let _0x47dcb5 = 0x0; _0x47dcb5 < _0x4b70e4.length; ++_0x47dcb5) {
    const _0x271e25 = _0x4b70e4[_0x47dcb5].replace(De, ' ');
    const _0x402d89 = _0x271e25.indexOf('=');
    const _0x533ef5 = J(
      _0x402d89 < 0x0 ? _0x271e25 : _0x271e25.slice(0x0, _0x402d89)
    );
    const _0x16168b =
      _0x402d89 < 0x0 ? null : J(_0x271e25.slice(_0x402d89 + 0x1));
    if (_0x533ef5 in _0xe6a65c) {
      let _0x4349a1 = _0xe6a65c[_0x533ef5];
      if (!N(_0x4349a1)) {
        _0x4349a1 = _0xe6a65c[_0x533ef5] = [_0x4349a1];
      }
      _0x4349a1.push(_0x16168b);
    } else {
      _0xe6a65c[_0x533ef5] = _0x16168b;
    }
  }
  return _0xe6a65c;
}
function Me(_0x195300) {
  let _0x4a1f79 = '';
  for (let _0x2f9bfa in _0x195300) {
    const _0x3b0181 = _0x195300[_0x2f9bfa];
    _0x2f9bfa = encodeURI('' + _0x2f9bfa)
      .replace(zt, '|')
      .replace(It, '[')
      .replace(jt, ']')
      .replace(De, '%2B')
      .replace(Ht, '+')
      .replace(Ve, '%23')
      .replace(Mt, '%26')
      .replace(Bt, '`')
      .replace(Qe, '{')
      .replace(Fe, '}')
      .replace(Ue, '^')
      .replace(Nt, '%3D');
    if (_0x3b0181 == null) {
      if (_0x3b0181 !== undefined) {
        _0x4a1f79 += (_0x4a1f79.length ? '&' : '') + _0x2f9bfa;
      }
      continue;
    }
    (N(_0x3b0181)
      ? _0x3b0181.map(
          _0xcdc9fa =>
            _0xcdc9fa &&
            encodeURI('' + _0xcdc9fa)
              .replace(zt, '|')
              .replace(It, '[')
              .replace(jt, ']')
              .replace(De, '%2B')
              .replace(Ht, '+')
              .replace(Ve, '%23')
              .replace(Mt, '%26')
              .replace(Bt, '`')
              .replace(Qe, '{')
              .replace(Fe, '}')
              .replace(Ue, '^')
        )
      : [
          _0x3b0181 &&
            encodeURI('' + _0x3b0181)
              .replace(zt, '|')
              .replace(It, '[')
              .replace(jt, ']')
              .replace(De, '%2B')
              .replace(Ht, '+')
              .replace(Ve, '%23')
              .replace(Mt, '%26')
              .replace(Bt, '`')
              .replace(Qe, '{')
              .replace(Fe, '}')
              .replace(Ue, '^'),
        ]
    ).forEach(_0x467f66 => {
      if (_0x467f66 !== undefined) {
        _0x4a1f79 += (_0x4a1f79.length ? '&' : '') + _0x2f9bfa;
        if (_0x467f66 != null) {
          _0x4a1f79 += '=' + _0x467f66;
        }
      }
    });
  }
  return _0x4a1f79;
}
function Dt(_0x1916c7) {
  const _0x4f2c15 = {};
  for (const _0x28dac2 in _0x1916c7) {
    const _0xf7747a = _0x1916c7[_0x28dac2];
    if (_0xf7747a !== undefined) {
      _0x4f2c15[_0x28dac2] = N(_0xf7747a)
        ? _0xf7747a.map(_0x55c9de =>
            _0x55c9de == null ? null : '' + _0x55c9de
          )
        : _0xf7747a == null
          ? _0xf7747a
          : '' + _0xf7747a;
    }
  }
  return _0x4f2c15;
}
const Ut = Symbol('');
const Te = Symbol('');
const ee = Symbol('');
const ge = Symbol('');
const pe = Symbol('');
function Q() {
  let _0x515d27 = [];
  function _0x4de9cc(_0x5f3cc5) {
    _0x515d27.push(_0x5f3cc5);
    return () => {
      const _0x57f989 = _0x515d27.indexOf(_0x5f3cc5);
      if (_0x57f989 > -0x1) {
        _0x515d27.splice(_0x57f989, 0x1);
      }
    };
  }
  function _0x3b8bea() {
    _0x515d27 = [];
  }
  return {
    add: _0x4de9cc,
    list: () => _0x515d27,
    reset: _0x3b8bea,
  };
}
function B(_0x2b872c, _0x40690f, _0x28e21f, _0x23b5c5, _0x3b0584) {
  const _0x36f5c6 =
    _0x23b5c5 &&
    (_0x23b5c5.enterCallbacks[_0x3b0584] =
      _0x23b5c5.enterCallbacks[_0x3b0584] || []);
  return () =>
    new Promise((_0x2d5d30, _0x5d7f35) => {
      const _0x4e9913 = _0x58d1c9 => {
        if (_0x58d1c9 === false) {
          _0x5d7f35(
            k(
              new Error(),
              {
                type: 0x4,
                [Ke]: true,
              },
              {
                from: _0x28e21f,
                to: _0x40690f,
              }
            )
          );
        } else if (_0x58d1c9 instanceof Error) {
          _0x5d7f35(_0x58d1c9);
        } else if (
          typeof _0x58d1c9 == 'string' ||
          (_0x58d1c9 && typeof _0x58d1c9 == 'object')
        ) {
          _0x5d7f35(
            k(
              new Error(),
              {
                type: 0x2,
                [Ke]: true,
              },
              {
                from: _0x40690f,
                to: _0x58d1c9,
              }
            )
          );
        } else {
          if (
            _0x36f5c6 &&
            _0x23b5c5.enterCallbacks[_0x3b0584] === _0x36f5c6 &&
            typeof _0x58d1c9 == 'function'
          ) {
            _0x36f5c6.push(_0x58d1c9);
          }
          _0x2d5d30();
        }
      };
      const _0x173d41 = _0x2b872c.call(
        _0x23b5c5 && _0x23b5c5.instances[_0x3b0584],
        _0x40690f,
        _0x28e21f,
        _0x4e9913
      );
      let _0x277a49 = Promise.resolve(_0x173d41);
      if (_0x2b872c.length < 0x3) {
        _0x277a49 = _0x277a49.then(_0x4e9913);
      }
      _0x277a49['catch'](_0x14a366 => _0x5d7f35(_0x14a366));
    });
}
function fe(_0x5105c6, _0x930493, _0x3081e8, _0x463b9a) {
  const _0x43b463 = [];
  for (const _0x3398f3 of _0x5105c6)
    for (const _0x314855 in _0x3398f3.components) {
      let _0x2a3e7c = _0x3398f3.components[_0x314855];
      if (
        !(_0x930493 !== 'beforeRouteEnter' && !_0x3398f3.instances[_0x314855])
      ) {
        if (
          typeof _0x2a3e7c == 'object' ||
          'displayName' in _0x2a3e7c ||
          'props' in _0x2a3e7c ||
          '__vccOpts' in _0x2a3e7c
        ) {
          const _0x5cb76b = (_0x2a3e7c.__vccOpts || _0x2a3e7c)[_0x930493];
          if (_0x5cb76b) {
            _0x43b463.push(
              B(_0x5cb76b, _0x3081e8, _0x463b9a, _0x3398f3, _0x314855)
            );
          }
        } else {
          let _0x47a11a = _0x2a3e7c();
          _0x43b463.push(() =>
            _0x47a11a.then(_0x9b31fd => {
              if (!_0x9b31fd) {
                return Promise.reject(
                  new Error(
                    'Couldn\'t resolve component "' +
                      _0x314855 +
                      '" at "' +
                      _0x3398f3.path +
                      '"'
                  )
                );
              }
              const _0x4672cf =
                _0x9b31fd.__esModule ||
                _0x9b31fd[Symbol.toStringTag] === 'Module'
                  ? _0x9b31fd['default']
                  : _0x9b31fd;
              _0x3398f3.components[_0x314855] = _0x4672cf;
              const _0x2e3e51 = (_0x4672cf.__vccOpts || _0x4672cf)[_0x930493];
              return (
                _0x2e3e51 &&
                B(_0x2e3e51, _0x3081e8, _0x463b9a, _0x3398f3, _0x314855)()
              );
            })
          );
        }
      }
    }
  return _0x43b463;
}
function Qt(_0x271b11) {
  return (
    typeof _0x271b11 == 'object' ||
    'displayName' in _0x271b11 ||
    'props' in _0x271b11 ||
    '__vccOpts' in _0x271b11
  );
}
function Ne(_0x4ddb11) {
  const _0x76077d = a35_0x13e8c2(ee);
  const _0x3fd6d6 = a35_0x13e8c2(ge);
  const _0x4195cb = a35_0x318996(() =>
    _0x76077d.resolve(a35_0x278e1e(_0x4ddb11.to))
  );
  const _0x8a357c = a35_0x318996(() => {
    const { matched: _0x31c6b0 } = _0x4195cb.value;
    const { length: _0x38f9f8 } = _0x31c6b0;
    const _0x5b87bf = _0x31c6b0[_0x38f9f8 - 0x1];
    const _0x15a1f0 = _0x3fd6d6.matched;
    if (!_0x5b87bf || !_0x15a1f0.length) {
      return -0x1;
    }
    const _0x4c9aad = _0x15a1f0.findIndex(K.bind(null, _0x5b87bf));
    if (_0x4c9aad > -0x1) {
      return _0x4c9aad;
    }
    const _0x908040 = _0x31c6b0[_0x38f9f8 - 0x2]
      ? _0x31c6b0[_0x38f9f8 - 0x2].aliasOf
        ? _0x31c6b0[_0x38f9f8 - 0x2].aliasOf.path
        : _0x31c6b0[_0x38f9f8 - 0x2].path
      : '';
    return _0x38f9f8 > 0x1 &&
      (_0x5b87bf
        ? _0x5b87bf.aliasOf
          ? _0x5b87bf.aliasOf.path
          : _0x5b87bf.path
        : '') === _0x908040 &&
      _0x15a1f0[_0x15a1f0.length - 0x1].path !== _0x908040
      ? _0x15a1f0.findIndex(K.bind(null, _0x31c6b0[_0x38f9f8 - 0x2]))
      : _0x4c9aad;
  });
  const _0x5e299d = a35_0x318996(
    () => _0x8a357c.value > -0x1 && Xt(_0x3fd6d6.params, _0x4195cb.value.params)
  );
  const _0x26e943 = a35_0x318996(
    () =>
      _0x8a357c.value > -0x1 &&
      _0x8a357c.value === _0x3fd6d6.matched.length - 0x1 &&
      qe(_0x3fd6d6.params, _0x4195cb.value.params)
  );
  function _0x572fe8(_0x39c09c = {}) {
    return Yt(_0x39c09c)
      ? _0x76077d[a35_0x278e1e(_0x4ddb11.replace) ? 'replace' : 'push'](
          a35_0x278e1e(_0x4ddb11.to)
        )['catch'](W)
      : Promise.resolve();
  }
  return {
    route: _0x4195cb,
    href: a35_0x318996(() => _0x4195cb.value.href),
    isActive: _0x5e299d,
    isExactActive: _0x26e943,
    navigate: _0x572fe8,
  };
}
const Ft = a35_0x3c1601({
  name: 'RouterLink',
  compatConfig: {
    MODE: 0x3,
  },
  props: {
    to: {
      type: [String, Object],
      required: true,
    },
    replace: Boolean,
    activeClass: String,
    exactActiveClass: String,
    custom: Boolean,
    ariaCurrentValue: {
      type: String,
      default: 'page',
    },
  },
  useLink: Ne,
  setup(_0x454297, { slots: _0x12b757 }) {
    const _0x4d5348 = a35_0x2ade0b(Ne(_0x454297));
    const { options: _0x448736 } = a35_0x13e8c2(ee);
    const _0x1a7859 = a35_0x318996(() => ({
      [_0x454297.activeClass != null
        ? _0x454297.activeClass
        : _0x448736.linkActiveClass != null
          ? _0x448736.linkActiveClass
          : 'router-link-active']: _0x4d5348.isActive,
      [_0x454297.exactActiveClass != null
        ? _0x454297.exactActiveClass
        : _0x448736.linkExactActiveClass != null
          ? _0x448736.linkExactActiveClass
          : 'router-link-exact-active']: _0x4d5348.isExactActive,
    }));
    return () => {
      const _0x18fcc3 = _0x12b757['default'] && _0x12b757['default'](_0x4d5348);
      return _0x454297.custom
        ? _0x18fcc3
        : a35_0x222820(
            'a',
            {
              'aria-current': _0x4d5348.isExactActive
                ? _0x454297.ariaCurrentValue
                : null,
              href: _0x4d5348.href,
              onClick: _0x4d5348.navigate,
              class: _0x1a7859.value,
            },
            _0x18fcc3
          );
    };
  },
});
function Yt(_0x16a196) {
  if (
    !(
      _0x16a196.metaKey ||
      _0x16a196.altKey ||
      _0x16a196.ctrlKey ||
      _0x16a196.shiftKey
    ) &&
    !_0x16a196.defaultPrevented &&
    !(_0x16a196.button !== undefined && _0x16a196.button !== 0x0)
  ) {
    if (_0x16a196.currentTarget && _0x16a196.currentTarget.getAttribute) {
      const _0x2dd7a5 = _0x16a196.currentTarget.getAttribute('target');
      if (/\b_blank\b/i.test(_0x2dd7a5)) {
        return;
      }
    }
    if (_0x16a196.preventDefault) {
      _0x16a196.preventDefault();
    }
    return true;
  }
}
function Xt(_0x2adb16, _0x59697f) {
  for (const _0x53f9c1 in _0x59697f) {
    const _0x39dce8 = _0x59697f[_0x53f9c1];
    const _0x459ea3 = _0x2adb16[_0x53f9c1];
    if (typeof _0x39dce8 == 'string') {
      if (_0x39dce8 !== _0x459ea3) {
        return false;
      }
    } else {
      if (
        !N(_0x459ea3) ||
        _0x459ea3.length !== _0x39dce8.length ||
        _0x39dce8.some(
          (_0x3d4dfd, _0x3c13c7) => _0x3d4dfd !== _0x459ea3[_0x3c13c7]
        )
      ) {
        return false;
      }
    }
  }
  return true;
}
function $e(_0x323aa1) {
  return _0x323aa1
    ? _0x323aa1.aliasOf
      ? _0x323aa1.aliasOf.path
      : _0x323aa1.path
    : '';
}
const Ie = (_0x10ad7f, _0x49c46f, _0x5a016f) =>
  _0x10ad7f != null ? _0x10ad7f : _0x49c46f != null ? _0x49c46f : _0x5a016f;
const Zt = a35_0x3c1601({
  name: 'RouterView',
  inheritAttrs: false,
  props: {
    name: {
      type: String,
      default: 'default',
    },
    route: Object,
  },
  compatConfig: {
    MODE: 0x3,
  },
  setup(_0x301bad, { attrs: _0x21f4bd, slots: _0x174d2e }) {
    const _0x3da6f9 = a35_0x13e8c2(pe);
    const _0xba84e5 = a35_0x318996(() => _0x301bad.route || _0x3da6f9.value);
    const _0x303cc3 = a35_0x13e8c2(Te, 0x0);
    const _0x42cd33 = a35_0x318996(() => {
      let _0x3f9949 = a35_0x278e1e(_0x303cc3);
      const { matched: _0x23c012 } = _0xba84e5.value;
      let _0x5c3abe;
      for (; (_0x5c3abe = _0x23c012[_0x3f9949]) && !_0x5c3abe.components; ) {
        _0x3f9949++;
      }
      return _0x3f9949;
    });
    const _0x3f6eb7 = a35_0x318996(
      () => _0xba84e5.value.matched[_0x42cd33.value]
    );
    a35_0x244537(
      Te,
      a35_0x318996(() => _0x42cd33.value + 0x1)
    );
    a35_0x244537(Ut, _0x3f6eb7);
    a35_0x244537(pe, _0xba84e5);
    const _0x1cdad7 = a35_0x1944d1();
    a35_0x78c5a(
      () => [_0x1cdad7.value, _0x3f6eb7.value, _0x301bad.name],
      ([_0x3dc47a, _0x4c1ec9, _0x59a647], [_0x3c4c8, _0x7a5f9f, _0x140ad6]) => {
        if (_0x4c1ec9) {
          _0x4c1ec9.instances[_0x59a647] = _0x3dc47a;
          if (
            _0x7a5f9f &&
            _0x7a5f9f !== _0x4c1ec9 &&
            _0x3dc47a &&
            _0x3dc47a === _0x3c4c8
          ) {
            if (!_0x4c1ec9.leaveGuards.size) {
              _0x4c1ec9.leaveGuards = _0x7a5f9f.leaveGuards;
            }
            if (!_0x4c1ec9.updateGuards.size) {
              _0x4c1ec9.updateGuards = _0x7a5f9f.updateGuards;
            }
          }
        }
        if (
          _0x3dc47a &&
          _0x4c1ec9 &&
          (!_0x7a5f9f ||
            !(
              (_0x4c1ec9.aliasOf || _0x4c1ec9) ===
              (_0x7a5f9f.aliasOf || _0x7a5f9f)
            ) ||
            !_0x3c4c8)
        ) {
          (_0x4c1ec9.enterCallbacks[_0x59a647] || []).forEach(_0x2c91f6 =>
            _0x2c91f6(_0x3dc47a)
          );
        }
      },
      {
        flush: 'post',
      }
    );
    return () => {
      const _0x12629e = _0xba84e5.value;
      const _0x5a9cd0 = _0x301bad.name;
      const _0x18b339 = _0x3f6eb7.value;
      const _0x5cca62 = _0x18b339 && _0x18b339.components[_0x5a9cd0];
      if (!_0x5cca62) {
        return je(_0x174d2e['default'], {
          Component: _0x5cca62,
          route: _0x12629e,
        });
      }
      const _0x4c9972 = _0x18b339.props[_0x5a9cd0];
      const _0x5cf790 = _0x4c9972
        ? _0x4c9972 === true
          ? _0x12629e.params
          : typeof _0x4c9972 == 'function'
            ? _0x4c9972(_0x12629e)
            : _0x4c9972
        : null;
      const _0x30326c = a35_0x222820(
        _0x5cca62,
        k({}, _0x5cf790, _0x21f4bd, {
          onVnodeUnmounted: _0x535039 => {
            if (_0x535039.component.isUnmounted) {
              _0x18b339.instances[_0x5a9cd0] = null;
            }
          },
          ref: _0x1cdad7,
        })
      );
      return (
        je(_0x174d2e['default'], {
          Component: _0x30326c,
          route: _0x12629e,
        }) || _0x30326c
      );
    };
  },
});
function je(_0xbb1223, _0x875556) {
  if (!_0xbb1223) {
    return null;
  }
  const _0x353144 = _0xbb1223(_0x875556);
  return _0x353144.length === 0x1 ? _0x353144[0x0] : _0x353144;
}
function rn(_0x3fd636) {
  const _0x3f31f4 = wt(_0x3fd636.routes, _0x3fd636);
  const _0x375ebd = _0x3fd636.parseQuery || Vt;
  const _0x337c4d = _0x3fd636.stringifyQuery || Me;
  const _0x3f0f0d = _0x3fd636.history;
  const _0x3bdeaa = Q();
  const _0x391b28 = Q();
  const _0x34c4a0 = Q();
  const _0x39650c = a35_0x322168(j);
  let _0x226f73 = j;
  if (G && _0x3fd636.scrollBehavior && 'scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }
  const _0x7c9d3f = ae.bind(null, _0x413b30 => '' + _0x413b30);
  const _0x9c023a = ae.bind(null, Lt);
  const _0x40a29a = ae.bind(null, J);
  function _0x5dcdb2(_0x47de4b, _0x556a25) {
    let _0x247a65;
    let _0x1fbc3;
    if (typeof _0x47de4b == 'string' || typeof _0x47de4b == 'symbol') {
      _0x247a65 = _0x3f31f4.getRecordMatcher(_0x47de4b);
      _0x1fbc3 = _0x556a25;
    } else {
      _0x1fbc3 = _0x47de4b;
    }
    return _0x3f31f4.addRoute(_0x1fbc3, _0x247a65);
  }
  function _0x4f0ff4(_0x59e4bf) {
    const _0x4e09f9 = _0x3f31f4.getRecordMatcher(_0x59e4bf);
    if (_0x4e09f9) {
      _0x3f31f4.removeRoute(_0x4e09f9);
    }
  }
  function _0x1c8da() {
    return _0x3f31f4.getRoutes().map(_0x3ac936 => _0x3ac936.record);
  }
  function _0x72647a(_0x45f5b7) {
    return !!_0x3f31f4.getRecordMatcher(_0x45f5b7);
  }
  function _0x66599a(_0x381b41, _0x1be950) {
    _0x1be950 = k({}, _0x1be950 || _0x39650c.value);
    if (typeof _0x381b41 == 'string') {
      const _0x50457e = le(_0x375ebd, _0x381b41, _0x1be950.path);
      const _0x1dfb7a = _0x3f31f4.resolve(
        {
          path: _0x50457e.path,
        },
        _0x1be950
      );
      const _0xad1205 = _0x3f0f0d.createHref(_0x50457e.fullPath);
      return k(_0x50457e, _0x1dfb7a, {
        params: _0x40a29a(_0x1dfb7a.params),
        hash: J(_0x50457e.hash),
        redirectedFrom: undefined,
        href: _0xad1205,
      });
    }
    let _0x168de3;
    if ('path' in _0x381b41) {
      _0x168de3 = k({}, _0x381b41, {
        path: le(_0x375ebd, _0x381b41.path, _0x1be950.path).path,
      });
    } else {
      const _0x394ed8 = k({}, _0x381b41.params);
      for (const _0x17e15f in _0x394ed8)
        if (_0x394ed8[_0x17e15f] == null) {
          delete _0x394ed8[_0x17e15f];
        }
      _0x168de3 = k({}, _0x381b41, {
        params: _0x9c023a(_0x381b41.params),
      });
      _0x1be950.params = _0x9c023a(_0x1be950.params);
    }
    const _0x114118 = _0x3f31f4.resolve(_0x168de3, _0x1be950);
    const _0x51b938 = _0x381b41.hash || '';
    _0x114118.params = _0x7c9d3f(_0x40a29a(_0x114118.params));
    const _0x247e4b = ot(
      _0x337c4d,
      k({}, _0x381b41, {
        hash: encodeURI('' + _0x51b938)
          .replace(zt, '|')
          .replace(It, '[')
          .replace(jt, ']')
          .replace(Qe, '{')
          .replace(Fe, '}')
          .replace(Ue, '^'),
        path: _0x114118.path,
      })
    );
    const _0x2c133c = _0x3f0f0d.createHref(_0x247e4b);
    return k(
      {
        fullPath: _0x247e4b,
        hash: _0x51b938,
        query: _0x337c4d === Me ? Dt(_0x381b41.query) : _0x381b41.query || {},
      },
      _0x114118,
      {
        redirectedFrom: undefined,
        href: _0x2c133c,
      }
    );
  }
  function _0x432778(_0x4e90ca, _0x15a276) {
    if (_0x226f73 !== _0x4e90ca) {
      return k(
        new Error(),
        {
          type: 0x8,
          [Ke]: true,
        },
        {
          from: _0x15a276,
          to: _0x4e90ca,
        }
      );
    }
  }
  function _0xd23769(_0x2d8738) {
    return _0x31aecd(_0x2d8738);
  }
  function _0x3994b8(_0x5edb94) {
    return _0x31aecd(
      k(
        typeof _0x5edb94 == 'string'
          ? le(_0x375ebd, _0x5edb94, _0x39650c.value.path)
          : k({}, _0x5edb94),
        {
          replace: true,
        }
      )
    );
  }
  function _0x4db48e(_0x1958a7) {
    const _0x25f628 = _0x1958a7.matched[_0x1958a7.matched.length - 0x1];
    if (_0x25f628 && _0x25f628.redirect) {
      const { redirect: _0x3cf63f } = _0x25f628;
      let _0x174286 =
        typeof _0x3cf63f == 'function' ? _0x3cf63f(_0x1958a7) : _0x3cf63f;
      if (typeof _0x174286 == 'string') {
        _0x174286 =
          _0x174286.includes('?') || _0x174286.includes('#')
            ? (_0x174286 =
                typeof _0x174286 == 'string'
                  ? le(_0x375ebd, _0x174286, _0x39650c.value.path)
                  : k({}, _0x174286))
            : {
                path: _0x174286,
              };
        _0x174286.params = {};
      }
      return k(
        {
          query: _0x1958a7.query,
          hash: _0x1958a7.hash,
          params: 'path' in _0x174286 ? {} : _0x1958a7.params,
        },
        _0x174286
      );
    }
  }
  function _0x31aecd(_0x47b3e2, _0x32d955) {
    const _0x53808f = (_0x226f73 = _0x66599a(_0x47b3e2));
    const _0x3933f0 = _0x39650c.value;
    const _0x3523f6 = _0x47b3e2.state;
    const _0x3e9f76 = _0x47b3e2.force;
    const _0x525061 = _0x47b3e2.replace === true;
    const _0x2cfe3f = _0x4db48e(_0x53808f);
    if (_0x2cfe3f) {
      return _0x31aecd(
        k(
          typeof _0x2cfe3f == 'string'
            ? le(_0x375ebd, _0x2cfe3f, _0x39650c.value.path)
            : k({}, _0x2cfe3f),
          {
            state:
              typeof _0x2cfe3f == 'object'
                ? k({}, _0x3523f6, _0x2cfe3f.state)
                : _0x3523f6,
            force: _0x3e9f76,
            replace: _0x525061,
          }
        ),
        _0x32d955 || _0x53808f
      );
    }
    _0x53808f.redirectedFrom = _0x32d955;
    let _0x430248;
    if (!_0x3e9f76 && ct(_0x337c4d, _0x3933f0, _0x53808f)) {
      _0x430248 = k(
        new Error(),
        {
          type: 0x10,
          [Ke]: true,
        },
        {
          to: _0x53808f,
          from: _0x3933f0,
        }
      );
      _0x3475c1(_0x3933f0, _0x3933f0, true, false);
    }
    return (
      _0x430248 ? Promise.resolve(_0x430248) : _0x312cbe(_0x53808f, _0x3933f0)
    )
      ['catch'](_0x5bc3e8 =>
        _0x5bc3e8 instanceof Error &&
        Ke in _0x5bc3e8 &&
        (true || !!(_0x5bc3e8.type & undefined))
          ? _0x5bc3e8 instanceof Error &&
            Ke in _0x5bc3e8 &&
            (false || !!(_0x5bc3e8.type & 0x2))
            ? _0x5bc3e8
            : _0x8e107(_0x5bc3e8)
          : _0x561e40(_0x5bc3e8, _0x53808f, _0x3933f0)
      )
      .then(_0x46155c => {
        if (_0x46155c) {
          if (
            _0x46155c instanceof Error &&
            Ke in _0x46155c &&
            (false || !!(_0x46155c.type & 0x2))
          ) {
            return _0x31aecd(
              k(
                {
                  replace: _0x525061,
                },
                typeof _0x46155c.to == 'string'
                  ? le(_0x375ebd, _0x46155c.to, _0x39650c.value.path)
                  : k({}, _0x46155c.to),
                {
                  state:
                    typeof _0x46155c.to == 'object'
                      ? k({}, _0x3523f6, _0x46155c.to.state)
                      : _0x3523f6,
                  force: _0x3e9f76,
                }
              ),
              _0x32d955 || _0x53808f
            );
          }
        } else {
          _0x46155c = _0x55fa47(
            _0x53808f,
            _0x3933f0,
            true,
            _0x525061,
            _0x3523f6
          );
        }
        _0x11c3ee(_0x53808f, _0x3933f0, _0x46155c);
        return _0x46155c;
      });
  }
  function _0x58e267(_0x181e3d, _0x5da01c) {
    const _0x1fad2b = _0x432778(_0x181e3d, _0x5da01c);
    return _0x1fad2b ? Promise.reject(_0x1fad2b) : Promise.resolve();
  }
  function _0x312cbe(_0x4937bc, _0x2f7066) {
    let _0x5e83ae;
    const [_0x34e7a5, _0x2d654d, _0x105e7e] = en(_0x4937bc, _0x2f7066);
    _0x5e83ae = fe(
      _0x34e7a5.reverse(),
      'beforeRouteLeave',
      _0x4937bc,
      _0x2f7066
    );
    for (const _0xb766e9 of _0x34e7a5)
      _0xb766e9.leaveGuards.forEach(_0x361a64 => {
        _0x5e83ae.push(B(_0x361a64, _0x4937bc, _0x2f7066));
      });
    const _0x43f77d = _0x58e267.bind(null, _0x4937bc, _0x2f7066);
    _0x5e83ae.push(_0x43f77d);
    return q(_0x5e83ae)
      .then(() => {
        _0x5e83ae = [];
        for (const _0x544510 of _0x3bdeaa.list())
          _0x5e83ae.push(B(_0x544510, _0x4937bc, _0x2f7066));
        _0x5e83ae.push(_0x43f77d);
        return q(_0x5e83ae);
      })
      .then(() => {
        _0x5e83ae = fe(_0x2d654d, 'beforeRouteUpdate', _0x4937bc, _0x2f7066);
        for (const _0x44d7ea of _0x2d654d)
          _0x44d7ea.updateGuards.forEach(_0x3bacd4 => {
            _0x5e83ae.push(B(_0x3bacd4, _0x4937bc, _0x2f7066));
          });
        _0x5e83ae.push(_0x43f77d);
        return q(_0x5e83ae);
      })
      .then(() => {
        _0x5e83ae = [];
        for (const _0x3c6491 of _0x4937bc.matched)
          if (_0x3c6491.beforeEnter && !_0x2f7066.matched.includes(_0x3c6491)) {
            if (N(_0x3c6491.beforeEnter)) {
              for (const _0xfd848e of _0x3c6491.beforeEnter)
                _0x5e83ae.push(B(_0xfd848e, _0x4937bc, _0x2f7066));
            } else {
              _0x5e83ae.push(B(_0x3c6491.beforeEnter, _0x4937bc, _0x2f7066));
            }
          }
        _0x5e83ae.push(_0x43f77d);
        return q(_0x5e83ae);
      })
      .then(
        () => (
          _0x4937bc.matched.forEach(
            _0x3d5426 => (_0x3d5426.enterCallbacks = {})
          ),
          (_0x5e83ae = fe(_0x105e7e, 'beforeRouteEnter', _0x4937bc, _0x2f7066)),
          _0x5e83ae.push(_0x43f77d),
          q(_0x5e83ae)
        )
      )
      .then(() => {
        _0x5e83ae = [];
        for (const _0x3732e3 of _0x391b28.list())
          _0x5e83ae.push(B(_0x3732e3, _0x4937bc, _0x2f7066));
        _0x5e83ae.push(_0x43f77d);
        return q(_0x5e83ae);
      })
      ['catch'](_0x2553dd =>
        _0x2553dd instanceof Error &&
        Ke in _0x2553dd &&
        (false || !!(_0x2553dd.type & 0x8))
          ? _0x2553dd
          : Promise.reject(_0x2553dd)
      );
  }
  function _0x11c3ee(_0x4e8e19, _0x44b0a7, _0x43eff7) {
    for (const _0x2cc047 of _0x34c4a0.list())
      _0x2cc047(_0x4e8e19, _0x44b0a7, _0x43eff7);
  }
  function _0x55fa47(_0x42c605, _0x423206, _0x41a508, _0x206d64, _0x39c09b) {
    const _0x33bd92 = _0x432778(_0x42c605, _0x423206);
    if (_0x33bd92) {
      return _0x33bd92;
    }
    const _0x17d2d8 = _0x423206 === j;
    const _0x5c620f = G ? history.state : {};
    if (_0x41a508) {
      if (_0x206d64 || _0x17d2d8) {
        _0x3f0f0d.replace(
          _0x42c605.fullPath,
          k(
            {
              scroll: _0x17d2d8 && _0x5c620f && _0x5c620f.scroll,
            },
            _0x39c09b
          )
        );
      } else {
        _0x3f0f0d.push(_0x42c605.fullPath, _0x39c09b);
      }
    }
    _0x39650c.value = _0x42c605;
    _0x3475c1(_0x42c605, _0x423206, _0x41a508, _0x17d2d8);
    _0x8e107();
  }
  let _0x121b9a;
  function _0x5076e0() {
    if (!_0x121b9a) {
      _0x121b9a = _0x3f0f0d.listen((_0xe25e58, _0x121202, _0x38cbd1) => {
        const _0x2d15b6 = _0x66599a(_0xe25e58);
        const _0x2122d3 = _0x4db48e(_0x2d15b6);
        if (_0x2122d3) {
          _0x31aecd(
            k(_0x2122d3, {
              replace: true,
            }),
            _0x2d15b6
          )['catch'](W);
          return;
        }
        _0x226f73 = _0x2d15b6;
        const _0x181c65 = _0x39650c.value;
        if (G) {
          mt(
            (history.state ? history.state.position - _0x38cbd1.delta : -0x1) +
              _0x181c65.fullPath,
            {
              left: window.pageXOffset,
              top: window.pageYOffset,
            }
          );
        }
        _0x312cbe(_0x2d15b6, _0x181c65)
          ['catch'](_0x3520ac =>
            _0x3520ac instanceof Error &&
            Ke in _0x3520ac &&
            (false || !!(_0x3520ac.type & 0xc))
              ? _0x3520ac
              : _0x3520ac instanceof Error &&
                  Ke in _0x3520ac &&
                  (false || !!(_0x3520ac.type & 0x2))
                ? (_0x31aecd(_0x3520ac.to, _0x2d15b6)
                    .then(_0x105394 => {
                      if (
                        _0x105394 instanceof Error &&
                        Ke in _0x105394 &&
                        (false || !!(_0x105394.type & 0x14)) &&
                        !_0x38cbd1.delta &&
                        _0x38cbd1.type === Y.pop
                      ) {
                        _0x3f0f0d.go(-0x1, false);
                      }
                    })
                    ['catch'](W),
                  Promise.reject())
                : (_0x38cbd1.delta && _0x3f0f0d.go(-_0x38cbd1.delta, false),
                  _0x561e40(_0x3520ac, _0x2d15b6, _0x181c65))
          )
          .then(_0x17724d => {
            _0x17724d = _0x17724d || _0x55fa47(_0x2d15b6, _0x181c65, false);
            if (_0x17724d) {
              if (
                _0x38cbd1.delta &&
                !(
                  _0x17724d instanceof Error &&
                  Ke in _0x17724d &&
                  (false || !!(_0x17724d.type & 0x8))
                )
              ) {
                _0x3f0f0d.go(-_0x38cbd1.delta, false);
              } else if (
                _0x38cbd1.type === Y.pop &&
                _0x17724d instanceof Error &&
                Ke in _0x17724d &&
                (false || !!(_0x17724d.type & 0x14))
              ) {
                _0x3f0f0d.go(-0x1, false);
              }
            }
            _0x11c3ee(_0x2d15b6, _0x181c65, _0x17724d);
          })
          ['catch'](W);
      });
    }
  }
  let _0x58de4c = Q();
  let _0x46ff55 = Q();
  let _0xb6440;
  function _0x561e40(_0x410bd0, _0xe9ce24, _0x5691c9) {
    _0x8e107(_0x410bd0);
    const _0x39d5bc = _0x46ff55.list();
    if (_0x39d5bc.length) {
      _0x39d5bc.forEach(_0x349469 =>
        _0x349469(_0x410bd0, _0xe9ce24, _0x5691c9)
      );
    } else {
      console.error(_0x410bd0);
    }
    return Promise.reject(_0x410bd0);
  }
  function _0x4f25af() {
    return _0xb6440 && _0x39650c.value !== j
      ? Promise.resolve()
      : new Promise((_0x3d12f1, _0x5ee948) => {
          _0x58de4c.add([_0x3d12f1, _0x5ee948]);
        });
  }
  function _0x8e107(_0x909224) {
    if (!_0xb6440) {
      _0xb6440 = !_0x909224;
      _0x5076e0();
      _0x58de4c
        .list()
        .forEach(([_0x357e22, _0x22e79b]) =>
          _0x909224 ? _0x22e79b(_0x909224) : _0x357e22()
        );
      _0x58de4c.reset();
    }
    return _0x909224;
  }
  function _0x3475c1(_0x1ace04, _0x266adc, _0x140bfa, _0x30dbd8) {
    const { scrollBehavior: _0xa2b1e } = _0x3fd636;
    if (!G || !_0xa2b1e) {
      return Promise.resolve();
    }
    const _0x18662a =
      (!_0x140bfa &&
        gt(
          (history.state ? history.state.position - 0x0 : -0x1) +
            _0x1ace04.fullPath
        )) ||
      ((_0x30dbd8 || !_0x140bfa) && history.state && history.state.scroll) ||
      null;
    return a35_0x5bbd01()
      .then(() => _0xa2b1e(_0x1ace04, _0x266adc, _0x18662a))
      .then(_0x5e2925 => _0x5e2925 && pt(_0x5e2925))
      ['catch'](_0x2d3bb1 => _0x561e40(_0x2d3bb1, _0x1ace04, _0x266adc));
  }
  const _0x2243ef = _0x3d60c3 => _0x3f0f0d.go(_0x3d60c3);
  let _0x40d1a4;
  const _0xfb8145 = new Set();
  const _0x3bba5e = {
    currentRoute: _0x39650c,
    listening: true,
    addRoute: _0x5dcdb2,
    removeRoute: _0x4f0ff4,
    hasRoute: _0x72647a,
    getRoutes: _0x1c8da,
    resolve: _0x66599a,
    options: _0x3fd636,
    push: _0xd23769,
    replace: _0x3994b8,
    go: _0x2243ef,
    back: () => _0x3f0f0d.go(-0x1),
    forward: () => _0x3f0f0d.go(0x1),
    beforeEach: _0x3bdeaa.add,
    beforeResolve: _0x391b28.add,
    afterEach: _0x34c4a0.add,
    onError: _0x46ff55.add,
    isReady: _0x4f25af,
    install(_0x7a9399) {
      const _0xf989d2 = this;
      _0x7a9399.component('RouterLink', Ft);
      _0x7a9399.component('RouterView', Zt);
      _0x7a9399.config.globalProperties.$router = _0xf989d2;
      Object.defineProperty(_0x7a9399.config.globalProperties, '$route', {
        enumerable: true,
        get: () => a35_0x278e1e(_0x39650c),
      });
      if (G && !_0x40d1a4 && _0x39650c.value === j) {
        _0x40d1a4 = true;
        _0x31aecd(_0x3f0f0d.location)['catch'](_0x374fe7 => {});
      }
      const _0x5dd3a5 = {};
      for (const _0x6fd21e in j)
        _0x5dd3a5[_0x6fd21e] = a35_0x318996(() => _0x39650c.value[_0x6fd21e]);
      _0x7a9399.provide(ee, _0xf989d2);
      _0x7a9399.provide(ge, a35_0x2ade0b(_0x5dd3a5));
      _0x7a9399.provide(pe, _0x39650c);
      const _0x37b8c4 = _0x7a9399.unmount;
      _0xfb8145.add(_0x7a9399);
      _0x7a9399.unmount = function () {
        _0xfb8145['delete'](_0x7a9399);
        if (_0xfb8145.size < 0x1) {
          _0x226f73 = j;
          if (_0x121b9a) {
            _0x121b9a();
          }
          _0x121b9a = null;
          _0x39650c.value = j;
          _0x40d1a4 = false;
          _0xb6440 = false;
        }
        _0x37b8c4();
      };
    },
  };
  return _0x3bba5e;
}
function q(_0x2c0b0e) {
  return _0x2c0b0e.reduce(
    (_0x368e30, _0x362052) => _0x368e30.then(() => _0x362052()),
    Promise.resolve()
  );
}
function en(_0x131900, _0x5c8ac2) {
  const _0x532fc3 = [];
  const _0x29e833 = [];
  const _0x2732f8 = [];
  const _0x331bc1 = Math.max(
    _0x5c8ac2.matched.length,
    _0x131900.matched.length
  );
  for (let _0x463810 = 0x0; _0x463810 < _0x331bc1; _0x463810++) {
    const _0x29c760 = _0x5c8ac2.matched[_0x463810];
    if (_0x29c760) {
      if (
        _0x131900.matched.find(
          _0x487dca =>
            (_0x487dca.aliasOf || _0x487dca) ===
            (_0x29c760.aliasOf || _0x29c760)
        )
      ) {
        _0x29e833.push(_0x29c760);
      } else {
        _0x532fc3.push(_0x29c760);
      }
    }
    const _0x2d72d1 = _0x131900.matched[_0x463810];
    if (_0x2d72d1) {
      if (
        !_0x5c8ac2.matched.find(
          _0x558a78 =>
            (_0x558a78.aliasOf || _0x558a78) ===
            (_0x2d72d1.aliasOf || _0x2d72d1)
        )
      ) {
        _0x2732f8.push(_0x2d72d1);
      }
    }
  }
  return [_0x532fc3, _0x29e833, _0x2732f8];
}
function sn() {
  return a35_0x13e8c2(ee);
}
function on() {
  return a35_0x13e8c2(ge);
}
export { sn as a, nn as b, rn as c, on as u };
