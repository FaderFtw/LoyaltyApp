import { _ as c, d as e, i as d } from './main-RBOOfBld.js';
import * as l from 'react';
import { s, a as p, b } from './DataListItemRow-yfWD8Q-p.js';
import { jsx as i } from 'react/jsx-runtime';
import { D as L, a as f } from './DataListItemCells-DP77jxpd.js';
const y = a => {
  var { children: t, className: r, visibility: o, id: D, 'aria-label': v, 'aria-labelledby': A, isPlainButtonAction: m } = a,
    n = c(a, ['children', 'className', 'visibility', 'id', 'aria-label', 'aria-labelledby', 'isPlainButtonAction']);
  return l.createElement(
    'div',
    Object.assign({ className: e(s.dataListItemAction, d(o, s), r) }, n),
    m ? l.createElement('div', { className: e(s.dataListAction) }, t) : t,
  );
};
y.displayName = 'DataListAction';
const E = ({ message: a, ...t }) =>
  i(p, {
    className: 'pf-v5-u-align-items-center pf-p-b-0',
    children: i(b, { children: i(L, { dataListCells: [i(f, { ...t, children: a }, '0')] }) }),
  });
export { y as D, E };
//# sourceMappingURL=EmptyRow-uhl6wfxp.js.map
