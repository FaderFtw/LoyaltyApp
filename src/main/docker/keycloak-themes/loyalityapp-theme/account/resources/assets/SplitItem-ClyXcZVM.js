import { _ as p, d as r } from './main-RBOOfBld.js';
import * as m from 'react';
const e = {
    modifiers: { wrap: 'pf-m-wrap', fill: 'pf-m-fill', gutter: 'pf-m-gutter' },
    split: 'pf-v5-l-split',
    splitItem: 'pf-v5-l-split__item',
  },
  f = s => {
    var { hasGutter: l = !1, isWrappable: t = !1, className: i = '', children: a = null, component: c = 'div' } = s,
      n = p(s, ['hasGutter', 'isWrappable', 'className', 'children', 'component']);
    const o = c;
    return m.createElement(o, Object.assign({}, n, { className: r(e.split, l && e.modifiers.gutter, t && e.modifiers.wrap, i) }), a);
  };
f.displayName = 'Split';
const d = s => {
  var { isFilled: l = !1, className: t = '', children: i = null } = s,
    a = p(s, ['isFilled', 'className', 'children']);
  return m.createElement('div', Object.assign({}, a, { className: r(e.splitItem, l && e.modifiers.fill, t) }), i);
};
d.displayName = 'SplitItem';
export { f as S, d as a };
//# sourceMappingURL=SplitItem-ClyXcZVM.js.map
