import { _ as o, d } from './main-RBOOfBld.js';
import * as m from 'react';
import { s } from './DataListItemRow-yfWD8Q-p.js';
const p = a => {
  var {
      children: i = null,
      className: e = '',
      width: t = 1,
      isFilled: l = !0,
      alignRight: n = !1,
      isIcon: c = !1,
      wrapModifier: r = null,
    } = a,
    f = o(a, ['children', 'className', 'width', 'isFilled', 'alignRight', 'isIcon', 'wrapModifier']);
  return m.createElement(
    'div',
    Object.assign(
      {
        className: d(
          s.dataListCell,
          t > 1 && s.modifiers[`flex_${t}`],
          !l && s.modifiers.noFill,
          n && s.modifiers.alignRight,
          c && s.modifiers.icon,
          e,
          r && s.modifiers[r],
        ),
      },
      f,
    ),
    i,
  );
};
p.displayName = 'DataListCell';
const g = a => {
  var { className: i = '', dataListCells: e, rowid: t = '' } = a,
    l = o(a, ['className', 'dataListCells', 'rowid']);
  return m.createElement('div', Object.assign({ className: d(s.dataListItemContent, i) }, l), e);
};
g.displayName = 'DataListItemCells';
export { g as D, p as a };
//# sourceMappingURL=DataListItemCells-DP77jxpd.js.map
