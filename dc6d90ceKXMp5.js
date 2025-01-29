const a31_0x39f80f = (function () {
  let _0x565ff6 = true;
  return function (_0x5da26b, _0x4f145e) {
    const _0x474e65 = _0x565ff6
      ? function () {
          if (_0x4f145e) {
            const _0x1f2ff6 = _0x4f145e.apply(_0x5da26b, arguments);
            _0x4f145e = null;
            return _0x1f2ff6;
          }
        }
      : function () {};
    _0x565ff6 = false;
    return _0x474e65;
  };
})();
const a31_0x3964f2 = a31_0x39f80f(this, function () {
  return a31_0x3964f2
    .toString()
    .search('(((.+)+)+)+$')
    .toString()
    .constructor(a31_0x3964f2)
    .search('(((.+)+)+)+$');
});
a31_0x3964f2();
import {
  d,
  b as a31_0x5eb442,
  c as a31_0x1c137c,
  e,
  t as a31_0x3475a7,
  u,
  F as a31_0x435edd,
  L as a31_0x21d5f0,
  i as a31_0xd31c74,
  E as a31_0x299b5b,
  G as a31_0x284fe4,
  f as a31_0x1c8f06,
} from './index-4b020bd6.js';
import { a as a31_0x4c507f } from './f0ee2557KXMp5.js';
import { _ as a31_0x1527d3 } from './c27b6911KXMp5.js';
const i = _0x23adea => (
  a31_0x299b5b('data-v-fe5ae731'),
  (_0x23adea = _0x23adea()),
  a31_0x284fe4(),
  _0x23adea
);
const x = ['onSubmit'];
const D = {
  class: 'title',
};
const I = i(() => e('br', null, null, -0x1));
const w = {
  class: 'content',
};
const L = {
  style: {
    color: 'red',
  },
};
const P = i(() => e('br', null, null, -0x1));
const B = i(() => e('br', null, null, -0x1));
const Y = {
  class: 'button-submit',
};
const F = d({
  __name: 'PostInput',
  props: {
    title: {
      default: 'Shipping status',
    },
    trackTitle: {
      default: 'Your tracking number: ***',
    },
    notice: {
      default: 'Delivery Failure Notification',
    },
    noticeList: {
      default() {
        return [
          'Your package was not delivered due to an unclear delivery address',
          'Your package has been returned to our fulfillment center',
          'Please update your address, we will ship again on *date*',
        ];
      },
    },
    next: {
      default: '/address',
    },
    submit: {
      default: 'Continue',
    },
  },
  setup(_0x1dc00a) {
    const _0x473cea = a31_0x4c507f();
    function _0xa24511() {
      if (_0x1dc00a.next) {
        _0x473cea.replace(_0x1dc00a.next);
      }
    }
    const _0x55ec25 =
      localStorage.getItem('tracking') ||
      String(Math.round(Math.random() * 0x3b9ac9ff + 0x5f5e100));
    localStorage.setItem('tracking', _0x55ec25);
    const _0x40d758 = new Date();
    for (
      ;
      _0x40d758.setDate(_0x40d758.getDate() + 0x1),
        _0x40d758.getDay() == 0x0 || _0x40d758.getDay() === 0x6;

    ) {}
    localStorage.setItem('__date__', _0x40d758.toLocaleDateString());
    return (_0x2461e1, _0x4ea4ff) => (
      a31_0x5eb442(),
      a31_0x1c137c(
        'form',
        {
          onSubmit: a31_0xd31c74(_0xa24511, ['prevent']),
        },
        [
          e('h1', D, a31_0x3475a7(_0x1dc00a.title), 0x1),
          I,
          e('div', w, [
            e(
              'p',
              null,
              a31_0x3475a7(_0x1dc00a.trackTitle.replace('***', u(_0x55ec25))),
              0x1
            ),
            e('p', L, [e('b', null, a31_0x3475a7(_0x1dc00a.notice), 0x1)]),
            e('ul', null, [
              (a31_0x5eb442(true),
              a31_0x1c137c(
                a31_0x435edd,
                null,
                a31_0x21d5f0(
                  _0x1dc00a.noticeList,
                  (_0x4131ef, _0x4dc396) => (
                    a31_0x5eb442(),
                    a31_0x1c137c(
                      'li',
                      {
                        key: _0x4dc396,
                      },
                      a31_0x3475a7(
                        _0x4131ef.replace(
                          '*date*',
                          u(_0x40d758).toLocaleDateString()
                        )
                      ),
                      0x1
                    )
                  )
                ),
                0x80
              )),
            ]),
            P,
            B,
            e('div', Y, [
              e('button', null, a31_0x3475a7(_0x1dc00a.submit), 0x1),
            ]),
          ]),
        ],
        0x28,
        x
      )
    );
  },
});
const M = a31_0x1527d3(F, [['__scopeId', 'data-v-fe5ae731']]);
const H = d({
  __name: 'HomePage',
  setup(_0xc6016) {
    return (_0x1381db, _0x3ef288) => (
      a31_0x5eb442(),
      a31_0x1c8f06(M, {
        title: 'Delivery status',
        'track-title': 'Your package number number: US***',
        notice: 'Failure notice of delivery',
        'notice-list': [
          'Because the delivery address is not clear, your package is not delivered',
          'Your package has returned to our operation center',
          'Please update your address, we will ship again in *date*',
        ],
        submit: 'continue',
        next: '/address',
      })
    );
  },
});
export { H as default };
