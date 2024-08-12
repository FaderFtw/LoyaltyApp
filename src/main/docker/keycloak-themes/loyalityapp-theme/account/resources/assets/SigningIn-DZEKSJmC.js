import { jsx as t, jsxs as d, Fragment as g } from 'react/jsx-runtime';
import { useState as v } from 'react';
import { u as x, l as D, a as b, S as C, P as N, T as h, B as o, D as L, M as $, E as w, h as S } from './main-RBOOfBld.js';
import { b as I } from './methods-DAviXuS2.js';
import { E as k, D as A } from './EmptyRow-uhl6wfxp.js';
import { P as M } from './Page-d76ZI0ER.js';
import { f as P } from './formatDate-BJoMyDEn.js';
import { T } from './Trans-DIHQCYwZ.js';
import { S as E, a as u } from './SplitItem-ClyXcZVM.js';
import { D as O, a as R, b as U } from './DataListItemRow-yfWD8Q-p.js';
import { D as W, a as f } from './DataListItemCells-DP77jxpd.js';
import 'react-dom';
const j = ({ title: a, onClick: r, testid: n }) => {
    const [l, c] = v(!1);
    return d(g, {
      children: [
        t(L, {
          popperProps: { position: 'right' },
          onOpenChange: p => c(p),
          toggle: p =>
            t($, {
              className: 'pf-v5-u-display-none-on-lg',
              ref: p,
              variant: 'plain',
              onClick: () => c(!l),
              isExpanded: l,
              children: t(w, {}),
            }),
          isOpen: l,
          children: t(S, { onClick: r, children: a }, '1'),
        }),
        t(o, {
          variant: 'link',
          onClick: r,
          className: 'pf-v5-u-display-none pf-v5-u-display-inline-flex-on-lg',
          'data-testid': n,
          children: a,
        }),
      ],
    });
  },
  Y = () => {
    const { t: a } = x(),
      r = D(),
      { login: n } = r.keycloak,
      [l, c] = v();
    b(i => I({ signal: i, context: r }), c, []);
    const p = i => {
      const e = i.credential,
        m = [
          t(
            f,
            {
              'data-testrole': 'label',
              className: 'pf-v5-u-max-width',
              style: { '--pf-v5-u-max-width--MaxWidth': '300px' },
              children: e.userLabel || a(e.type),
            },
            'title',
          ),
        ];
      return (
        e.createdDate &&
          m.push(
            t(
              f,
              {
                'data-testrole': 'created-at',
                children: d(T, {
                  i18nKey: 'credentialCreatedAt',
                  children: [t('strong', { className: 'pf-v5-u-mr-md' }), { date: P(new Date(e.createdDate)) }],
                }),
              },
              'created' + e.id,
            ),
          ),
        m
      );
    };
    if (!l) return t(C, {});
    const y = [...new Set(l.map(i => i.category))];
    return t(M, {
      title: a('signingIn'),
      description: a('signingInDescription'),
      children: y.map(i =>
        d(
          N,
          {
            variant: 'light',
            className: 'pf-v5-u-px-0',
            children: [
              t(h, { headingLevel: 'h2', size: 'xl', id: `${i}-categ-title`, children: a(i) }),
              l
                .filter(e => e.category == i)
                .map(e =>
                  d(g, {
                    children: [
                      d(E, {
                        className: 'pf-v5-u-mt-lg pf-v5-u-mb-lg',
                        children: [
                          d(u, {
                            children: [
                              t(h, {
                                headingLevel: 'h3',
                                size: 'md',
                                className: 'pf-v5-u-mb-md',
                                'data-testid': `${e.type}/help`,
                                children: t('span', {
                                  className: 'cred-title pf-v5-u-display-block',
                                  'data-testid': `${e.type}/title`,
                                  children: a(e.displayName),
                                }),
                              }),
                              t('span', { 'data-testid': `${e.type}/help-text`, children: a(e.helptext) }),
                            ],
                          }),
                          e.createAction &&
                            t(u, {
                              isFilled: !0,
                              children: t('div', {
                                className: 'pf-v5-u-float-right',
                                children: t(j, {
                                  onClick: () => n({ action: e.createAction }),
                                  title: a('setUpNew', { name: a(`${e.type}-display-name`) }),
                                  testid: `${e.type}/create`,
                                }),
                              }),
                            }),
                        ],
                      }),
                      d(O, {
                        'aria-label': 'credential list',
                        className: 'pf-v5-u-mb-xl',
                        'data-testid': `${e.type}/credential-list`,
                        children: [
                          e.userCredentialMetadatas.length === 0 &&
                            t(k, { message: a('notSetUp', { name: a(e.displayName) }), 'data-testid': `${e.type}/not-set-up` }),
                          e.userCredentialMetadatas.map(s =>
                            t(
                              R,
                              {
                                children: t(U, {
                                  id: `cred-${s.credential.id}`,
                                  children: t(W, {
                                    className: 'pf-v5-u-py-0',
                                    dataListCells: [
                                      ...p(s),
                                      t(
                                        A,
                                        {
                                          id: `action-${s.credential.id}`,
                                          'aria-label': a('updateCredAriaLabel'),
                                          'aria-labelledby': `cred-${s.credential.id}`,
                                          children: e.removeable
                                            ? t(o, {
                                                variant: 'danger',
                                                'data-testrole': 'remove',
                                                onClick: () => {
                                                  n({ action: 'delete_credential:' + s.credential.id });
                                                },
                                                children: a('delete'),
                                              })
                                            : t(o, {
                                                variant: 'secondary',
                                                onClick: () => {
                                                  e.updateAction && n({ action: e.updateAction });
                                                },
                                                'data-testrole': 'update',
                                                children: a('update'),
                                              }),
                                        },
                                        'action',
                                      ),
                                    ],
                                  }),
                                }),
                              },
                              s.credential.id,
                            ),
                          ),
                        ],
                      }),
                    ],
                  }),
                ),
            ],
          },
          i,
        ),
      ),
    });
  };
export { Y as SigningIn, Y as default };
//# sourceMappingURL=SigningIn-DZEKSJmC.js.map
