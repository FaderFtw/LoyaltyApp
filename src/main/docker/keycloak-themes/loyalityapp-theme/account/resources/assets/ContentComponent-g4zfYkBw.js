import { jsx as e } from 'react/jsx-runtime';
import { useState as c, useMemo as u, lazy as l, Suspense as p } from 'react';
import { l as a, aM as f, a as h, aL as d, S as C, aN as P } from './main-RBOOfBld.js';
import 'react-dom';
function i(o, n) {
  for (const t of o) {
    if ('path' in t && t.path.endsWith(n) && 'modulePath' in t) return t.modulePath;
    if ('children' in t) return i(t.children, n);
  }
}
const b = () => {
    const o = a(),
      [n, t] = c(),
      { componentId: r } = f();
    h(m => P({ signal: m, context: o }), t);
    const s = u(() => i(n || [], r), [n, r]);
    return s && e(S, { modulePath: s });
  },
  S = ({ modulePath: o }) => {
    const { environment: n } = a(),
      t = l(() => import(d(n.resourceUrl, o)));
    return e(p, { fallback: e(C, {}), children: e(t, {}) });
  };
export { b as ContentComponent, b as default };
//# sourceMappingURL=ContentComponent-g4zfYkBw.js.map
