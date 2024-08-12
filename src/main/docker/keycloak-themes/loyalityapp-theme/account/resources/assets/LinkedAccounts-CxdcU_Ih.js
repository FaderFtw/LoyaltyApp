import { jsx as i, jsxs as a } from 'react/jsx-runtime';
import * as S from 'react';
import { useState as L, useMemo as g } from 'react';
import { u as $, l as O, a as F } from './methods-DAviXuS2.js';
import { D as M, E as N } from './EmptyRow-uhl6wfxp.js';
import { P as U } from './Page-d76ZI0ER.js';
import { _ as D, d as P, c as w, u as z, l as E, r as j, m as R, B as y, I as A, a as G, T as I } from './main-RBOOfBld.js';
import { a as T, b as _, D as b } from './DataListItemRow-yfWD8Q-p.js';
import { D as B, a as f } from './DataListItemCells-DP77jxpd.js';
import { S as u, a as h } from './SplitItem-ClyXcZVM.js';
import { L as K } from './Label-BwnA8IgW.js';
import 'react-dom';
const k = { modifiers: { fill: 'pf-m-fill', gutter: 'pf-m-gutter' }, stack: 'pf-v5-l-stack', stackItem: 'pf-v5-l-stack__item' },
  C = e => {
    var { hasGutter: t = !1, className: n = '', children: s = null, component: r = 'div' } = e,
      o = D(e, ['hasGutter', 'className', 'children', 'component']);
    const c = r;
    return S.createElement(c, Object.assign({}, o, { className: P(k.stack, t && k.modifiers.gutter, n) }), s);
  };
C.displayName = 'Stack';
const v = e => {
  var { isFilled: t = !1, className: n = '', children: s = null } = e,
    r = D(e, ['isFilled', 'className', 'children']);
  return S.createElement('div', Object.assign({}, r, { className: P(k.stackItem, t && k.modifiers.fill, n) }), s);
};
v.displayName = 'StackItem';
const q = {
    name: 'LinkIcon',
    height: 512,
    width: 512,
    svgPath:
      'M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z',
    yOffset: 0,
    xOffset: 0,
  },
  H = w(q),
  J = {
    name: 'UnlinkIcon',
    height: 512,
    width: 512,
    svgPath:
      'M304.083 405.907c4.686 4.686 4.686 12.284 0 16.971l-44.674 44.674c-59.263 59.262-155.693 59.266-214.961 0-59.264-59.265-59.264-155.696 0-214.96l44.675-44.675c4.686-4.686 12.284-4.686 16.971 0l39.598 39.598c4.686 4.686 4.686 12.284 0 16.971l-44.675 44.674c-28.072 28.073-28.072 73.75 0 101.823 28.072 28.072 73.75 28.073 101.824 0l44.674-44.674c4.686-4.686 12.284-4.686 16.971 0l39.597 39.598zm-56.568-260.216c4.686 4.686 12.284 4.686 16.971 0l44.674-44.674c28.072-28.075 73.75-28.073 101.824 0 28.072 28.073 28.072 73.75 0 101.823l-44.675 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.598 39.598c4.686 4.686 12.284 4.686 16.971 0l44.675-44.675c59.265-59.265 59.265-155.695 0-214.96-59.266-59.264-155.695-59.264-214.961 0l-44.674 44.674c-4.686 4.686-4.686 12.284 0 16.971l39.597 39.598zm234.828 359.28l22.627-22.627c9.373-9.373 9.373-24.569 0-33.941L63.598 7.029c-9.373-9.373-24.569-9.373-33.941 0L7.029 29.657c-9.373 9.373-9.373 24.569 0 33.941l441.373 441.373c9.373 9.372 24.569 9.372 33.941 0z',
    yOffset: 0,
    xOffset: 0,
  },
  Q = w(J),
  x = ({ account: e, isLinked: t = !1, refresh: n }) => {
    const { t: s } = z(),
      r = E(),
      { addAlert: o, addError: c } = j(),
      m = async l => {
        try {
          await $(r, l), o(s('unLinkSuccess')), n();
        } catch (d) {
          c(s('unLinkError', { error: d }).toString());
        }
      },
      p = async l => {
        try {
          const { accountLinkUri: d } = await O(r, l);
          location.href = d;
        } catch (d) {
          c(s('linkError', { error: d }).toString());
        }
      };
    return i(
      T,
      {
        id: `${e.providerAlias}-idp`,
        'aria-label': s('linkedAccounts'),
        children: a(
          _,
          {
            'data-testid': `linked-accounts/${e.providerName}`,
            children: [
              i(B, {
                dataListCells: [
                  i(
                    f,
                    {
                      children: a(u, {
                        children: [
                          i(h, { className: 'pf-v5-u-mr-sm', children: i(R, { icon: e.providerName }) }),
                          i(h, {
                            className: 'pf-v5-u-my-xs',
                            isFilled: !0,
                            children: i('span', { id: `${e.providerAlias}-idp-name`, children: e.displayName }),
                          }),
                        ],
                      }),
                    },
                    'idp',
                  ),
                  i(
                    f,
                    {
                      children: i(u, {
                        children: i(h, {
                          className: 'pf-v5-u-my-xs',
                          isFilled: !0,
                          children: i('span', {
                            id: `${e.providerAlias}-idp-label`,
                            children: i(K, { color: e.social ? 'blue' : 'green', children: s(e.social ? 'socialLogin' : 'systemDefined') }),
                          }),
                        }),
                      }),
                    },
                    'label',
                  ),
                  i(
                    f,
                    {
                      width: 5,
                      children: i(u, {
                        children: i(h, {
                          className: 'pf-v5-u-my-xs',
                          isFilled: !0,
                          children: i('span', { id: `${e.providerAlias}-idp-username`, children: e.linkedUsername }),
                        }),
                      }),
                    },
                    'username',
                  ),
                ],
              }),
              a(M, {
                'aria-labelledby': s('link'),
                'aria-label': s('unLink'),
                id: 'setPasswordAction',
                children: [
                  t &&
                    a(y, {
                      id: `${e.providerAlias}-idp-unlink`,
                      variant: 'link',
                      onClick: () => m(e),
                      children: [i(A, { size: 'sm', children: i(Q, {}) }), ' ', s('unLink')],
                    }),
                  !t &&
                    a(y, {
                      id: `${e.providerAlias}-idp-link`,
                      variant: 'link',
                      onClick: () => p(e),
                      children: [i(A, { size: 'sm', children: i(H, {}) }), ' ', s('link')],
                    }),
                ],
              }),
            ],
          },
          e.providerName,
        ),
      },
      e.providerName,
    );
  },
  te = () => {
    const { t: e } = z(),
      t = E(),
      [n, s] = L([]),
      [r, o] = L(1),
      c = () => o(r + 1);
    G(l => F({ signal: l, context: t }), s, [r]);
    const m = g(() => n.filter(l => l.connected), [n]),
      p = g(() => n.filter(l => !l.connected), [n]);
    return i(U, {
      title: e('linkedAccounts'),
      description: e('linkedAccountsIntroMessage'),
      children: a(C, {
        hasGutter: !0,
        children: [
          a(v, {
            children: [
              i(I, { headingLevel: 'h2', className: 'pf-v5-u-mb-lg', size: 'xl', children: e('linkedLoginProviders') }),
              i(b, {
                id: 'linked-idps',
                'aria-label': e('linkedLoginProviders'),
                children:
                  m.length > 0
                    ? m.map(l => i(x, { account: l, isLinked: !0, refresh: c }, l.providerName))
                    : i(N, { message: e('linkedEmpty') }),
              }),
            ],
          }),
          a(v, {
            children: [
              i(I, { headingLevel: 'h2', className: 'pf-v5-u-mt-xl pf-v5-u-mb-lg', size: 'xl', children: e('unlinkedLoginProviders') }),
              i(b, {
                id: 'unlinked-idps',
                'aria-label': e('unlinkedLoginProviders'),
                children:
                  p.length > 0 ? p.map(l => i(x, { account: l, refresh: c }, l.providerName)) : i(N, { message: e('unlinkedEmpty') }),
              }),
            ],
          }),
        ],
      }),
    });
  };
export { te as LinkedAccounts, te as default };
//# sourceMappingURL=LinkedAccounts-CxdcU_Ih.js.map
