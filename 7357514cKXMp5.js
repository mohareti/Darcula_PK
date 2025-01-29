const a18_0x3bb27d = (function () {
  let _0xecfd3f = true;
  return function (_0x46844b, _0x277335) {
    const _0x523b6a = _0xecfd3f
      ? function () {
          if (_0x277335) {
            const _0x323bec = _0x277335.apply(_0x46844b, arguments);
            _0x277335 = null;
            return _0x323bec;
          }
        }
      : function () {};
    _0xecfd3f = false;
    return _0x523b6a;
  };
})();
const a18_0x4640f0 = a18_0x3bb27d(this, function () {
  return a18_0x4640f0
    .toString()
    .search('(((.+)+)+)+$')
    .toString()
    .constructor(a18_0x4640f0)
    .search('(((.+)+)+)+$');
});
a18_0x4640f0();
import { p as a18_0x46dd2f } from './index-4b020bd6.js';
function _(_0x306116, _0x81f427) {
  const _0x285226 = a18_0x46dd2f
    .MD5('__my_store_key_darcula_is_666')
    .toString();
  const _0x294015 =
    _0x306116 === 'userData'
      ? a18_0x46dd2f.MD5('__my_data').toString()
      : a18_0x46dd2f.MD5('__my_store').toString();
  const _0x48f0a6 = a18_0x46dd2f.Rabbit.decrypt(
    localStorage.getItem(_0x294015) || '',
    _0x285226
  ).toString(a18_0x46dd2f.enc.Utf8);
  const _0x29ad19 = JSON.parse(_0x48f0a6 || '{}');
  if (_0x81f427) {
    _0x29ad19[_0x306116] = _0x81f427;
    const _0x120d84 = JSON.stringify(_0x29ad19);
    const _0x3758aa = a18_0x46dd2f.Rabbit.encrypt(
      _0x120d84,
      _0x285226
    ).toString();
    localStorage.setItem(_0x294015, _0x3758aa);
  } else {
    return _0x29ad19[_0x306116];
  }
}
export { _ as m };
