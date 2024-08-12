import { _ as c, d as r, aK as s } from './main-RBOOfBld.js';
import * as i from 'react';
const f = e => {
  var { children: t = null, className: m = '' } = e,
    o = c(e, ['children', 'className']);
  const n = r(s.formGroup, s.modifiers.action, m),
    a = i.createElement('div', { className: r(s.formActions) }, t);
  return i.createElement('div', Object.assign({}, o, { className: n }), i.createElement('div', { className: r(s.formGroupControl) }, a));
};
f.displayName = 'ActionGroup';
const h = { name: '--pf-v5-c-form--m-limit-width--MaxWidth', value: '55rem', var: 'var(--pf-v5-c-form--m-limit-width--MaxWidth)' },
  p = e => {
    var { children: t = null, className: m = '', isHorizontal: o = !1, isWidthLimited: n = !1, maxWidth: a = '', innerRef: d } = e,
      l = c(e, ['children', 'className', 'isHorizontal', 'isWidthLimited', 'maxWidth', 'innerRef']);
    return i.createElement(
      'form',
      Object.assign({ noValidate: !0 }, a && { style: Object.assign({ [h.name]: a }, l.style) }, l, {
        className: r(s.form, o && s.modifiers.horizontal, (n || a) && s.modifiers.limitWidth, m),
        ref: d,
      }),
      t,
    );
  },
  u = i.forwardRef((e, t) => i.createElement(p, Object.assign({ innerRef: t }, e)));
u.displayName = 'Form';
export { f as A, u as F };
//# sourceMappingURL=Form-Br_aXRv6.js.map
