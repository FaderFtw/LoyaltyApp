import { jsx as l, jsxs as Q } from 'react/jsx-runtime';
import { _ as I, d as m, l as k, u as q, a as D, P as F, aO as M, aP as z, aQ as B, aR as T, M as $ } from './main-RBOOfBld.js';
import * as f from 'react';
import { useState as h, useMemo as P, useEffect as G } from 'react';
import { r as U, g as H } from './api-DMOwmKI_.js';
import { P as J } from './Page-d76ZI0ER.js';
import 'react-dom';
const O = { actionList: 'pf-v5-c-action-list', actionListGroup: 'pf-v5-c-action-list__group', modifiers: { icons: 'pf-m-icons' } },
  j = e => {
    var { children: t, isIconList: n, className: i = '' } = e,
      a = I(e, ['children', 'isIconList', 'className']);
    return f.createElement('div', Object.assign({ className: m(O.actionList, n && O.modifiers.icons, i) }, a), t);
  };
j.displayName = 'ActionList';
const E = e => {
  var { children: t, className: n = '' } = e,
    i = I(e, ['children', 'className']);
  return f.createElement('div', Object.assign({ className: m(`${O.actionList}__item`, n) }, i), t);
};
E.displayName = 'ActionListItem';
const s = {
  list: 'pf-v5-c-list',
  listItem: 'pf-v5-c-list__item',
  listItemIcon: 'pf-v5-c-list__item-icon',
  modifiers: { iconLg: 'pf-m-icon-lg', plain: 'pf-m-plain', inline: 'pf-m-inline', bordered: 'pf-m-bordered' },
};
var S;
(function (e) {
  (e.number = '1'), (e.lowercaseLetter = 'a'), (e.uppercaseLetter = 'A'), (e.lowercaseRomanNumber = 'i'), (e.uppercaseRomanNumber = 'I');
})(S || (S = {}));
var _;
(function (e) {
  e.inline = 'inline';
})(_ || (_ = {}));
var b;
(function (e) {
  (e.ol = 'ol'), (e.ul = 'ul');
})(b || (b = {}));
const R = e => {
  var {
      className: t = '',
      children: n = null,
      variant: i = null,
      isBordered: a = !1,
      isPlain: c = !1,
      iconSize: o = 'default',
      type: u = S.number,
      ref: d = null,
      component: N = b.ul,
    } = e,
    v = I(e, ['className', 'children', 'variant', 'isBordered', 'isPlain', 'iconSize', 'type', 'ref', 'component']);
  return N === b.ol
    ? f.createElement(
        'ol',
        Object.assign({ ref: d, type: u }, c && { role: 'list' }, v, {
          className: m(
            s.list,
            i && s.modifiers[i],
            a && s.modifiers.bordered,
            c && s.modifiers.plain,
            o && o === 'large' && s.modifiers.iconLg,
            t,
          ),
        }),
        n,
      )
    : f.createElement(
        'ul',
        Object.assign({ ref: d }, c && { role: 'list' }, v, {
          className: m(
            s.list,
            i && s.modifiers[i],
            a && s.modifiers.bordered,
            c && s.modifiers.plain,
            o && o === 'large' && s.modifiers.iconLg,
            t,
          ),
        }),
        n,
      );
};
R.displayName = 'List';
const y = e => {
  var { icon: t = null, children: n = null } = e,
    i = I(e, ['icon', 'children']);
  return f.createElement(
    'li',
    Object.assign({ className: m(t && s.listItem) }, i),
    t && f.createElement('span', { className: m(s.listItemIcon) }, t),
    n,
  );
};
y.displayName = 'ListItem';
const ie = () => {
  const e = k(),
    { t } = q(),
    n = t('verifiableCredentialsSelectionDefault'),
    [i, a] = h(n),
    [c, o] = h(''),
    [u, d] = h(!1),
    [N, v] = h(!1),
    [p, A] = h();
  D(() => H(e), A);
  const L = P(() => (typeof p < 'u' ? p.credential_configurations_supported : {}), [p]),
    V = P(() => (typeof L < 'u' ? Array.from(Object.keys(L)) : []), [L]);
  G(() => {
    n !== i &&
      p !== void 0 &&
      U(e, L[i], p).then(r => {
        const g = new FileReader();
        g.readAsDataURL(r),
          (g.onloadend = function () {
            const C = g.result;
            typeof C == 'string' && (o(C), v(!0), d(!1));
          });
      });
  }, [i]);
  const w = () => {
      d(!u);
    },
    x = r => l($, { ref: r, onClick: w, isExpanded: u, 'data-testid': 'menu-toggle', children: i });
  return l(J, {
    title: t('verifiableCredentialsTitle'),
    description: t('verifiableCredentialsDescription'),
    children: l(F, {
      isFilled: !0,
      variant: M.light,
      children: Q(R, {
        isPlain: !0,
        children: [
          l(y, {
            children: l(z, {
              'data-testid': 'credential-select',
              onOpenChange: r => d(r),
              onSelect: (r, g) => a(g),
              isOpen: u,
              selected: i,
              toggle: x,
              shouldFocusToggleOnSelect: !0,
              children: l(B, { children: V.map(r => l(T, { value: r, 'data-testid': r, children: r }, r)) }),
            }),
          }),
          l(y, {
            children: l(j, {
              children: N && l(E, { children: l('img', { width: '500', height: '500', src: c, 'data-testid': 'qr-code' }) }),
            }),
          }),
        ],
      }),
    }),
  });
};
export { ie as Oid4Vci, ie as default };
//# sourceMappingURL=Oid4Vci-CbqPV2zq.js.map
