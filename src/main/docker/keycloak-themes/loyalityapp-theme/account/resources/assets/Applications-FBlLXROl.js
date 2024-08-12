import { jsx as t, jsxs as n, Fragment as E } from 'react/jsx-runtime';
import * as m from 'react';
import { useState as b } from 'react';
import {
  _ as T,
  d as I,
  B as U,
  j as $,
  A as M,
  c as P,
  u as k,
  l as O,
  r as S,
  a as G,
  S as j,
  k as R,
  C as Z,
  G as B,
  b as D,
  s as V,
} from './main-RBOOfBld.js';
import { c as _, e as q } from './methods-DAviXuS2.js';
import { P as F } from './Page-d76ZI0ER.js';
import { f as H } from './formatDate-BJoMyDEn.js';
import { s as p, D as K, a as y, b as A } from './DataListItemRow-yfWD8Q-p.js';
import { D as N, a as d } from './DataListItemCells-DP77jxpd.js';
import { D as z, a as J, b as r, c as l, d as a } from './DescriptionListTerm-wtJg4W5p.js';
import 'react-dom';
const v = s => {
  var {
      className: h = '',
      isExpanded: g = !1,
      'aria-controls': f = '',
      'aria-label': c = 'Details',
      rowid: C = '',
      id: o,
      buttonProps: L,
    } = s,
    u = T(s, ['className', 'isExpanded', 'aria-controls', 'aria-label', 'rowid', 'id', 'buttonProps']);
  return m.createElement(
    'div',
    Object.assign({ className: I(p.dataListItemControl, h) }, u),
    m.createElement(
      'div',
      { className: I(p.dataListToggle) },
      m.createElement(
        U,
        Object.assign(
          {
            id: o,
            variant: $.plain,
            'aria-controls': f !== '' && f,
            'aria-label': c,
            'aria-labelledby': c !== 'Details' ? null : `${C} ${o}`,
            'aria-expanded': g,
          },
          L,
        ),
        m.createElement('div', { className: I(p.dataListToggleIcon) }, m.createElement(M, null)),
      ),
    ),
  );
};
v.displayName = 'DataListToggle';
const Q = {
    name: 'InfoAltIcon',
    height: 1024,
    width: 1024,
    svgPath:
      'M592,369 L592,289 C592.013862,284.755109 590.320137,280.682962 587.3,277.7 C584.338831,274.647672 580.252355,272.947987 576,273 L464,273 C459.755109,272.986138 455.682962,274.679863 452.7,277.7 C449.647672,280.661169 447.947987,284.747645 447.99884,289 L447.99884,369 C447.986138,373.244891 449.679863,377.317038 452.7,380.3 C455.661169,383.352328 459.747645,385.052013 464,385 L576,385 C580.244891,385.013862 584.317038,383.320137 587.3,380.3 C590.359349,377.343612 592.060354,373.253963 592,369 Z M592,705 L592,465 C592,456.163444 584.836556,449 576,449 L432,449 C423.163444,449 416,456.163444 416,465 L416,497 C416,505.836556 423.163444,513 432,513 L448,513 L448,705 L416,705 C407.163444,705 400,712.163444 400,721 L400,753 C400,761.836556 407.163444,769 416,769 L624,769 C632.836556,769 640,761.836556 640,753 L640,721 C640,712.163444 632.836556,705 624,705 L592,705 Z M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 Z M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0 Z',
    yOffset: 0,
    xOffset: 0,
  },
  W = P(Q),
  ce = () => {
    const { t: s } = k(),
      h = O(),
      { addAlert: g, addError: f } = S(),
      [c, C] = b(),
      [o, L] = b(1),
      u = () => L(o + 1);
    G(
      e => _({ signal: e, context: h }),
      e => C(e.map(i => ({ ...i, open: !1 }))),
      [o],
    );
    const w = e => {
        C([...c.map(i => (i.clientId === e ? { ...i, open: !i.open } : i))]);
      },
      x = async e => {
        try {
          await q(h, e), u(), g(s('removeConsentSuccess'));
        } catch (i) {
          f(s('removeConsentError', { error: i }).toString());
        }
      };
    return c
      ? t(F, {
          title: s('application'),
          description: s('applicationsIntroMessage'),
          children: n(K, {
            id: 'applications-list',
            'aria-label': s('application'),
            children: [
              t(y, {
                id: 'applications-list-header',
                'aria-labelledby': 'Columns names',
                children: n(A, {
                  children: [
                    t('span', {
                      style: { visibility: 'hidden', height: 55 },
                      children: t(v, { id: 'applications-list-header-invisible-toggle', 'aria-controls': 'applications-list-content' }),
                    }),
                    t(N, {
                      dataListCells: [
                        t(
                          d,
                          { width: 2, className: 'pf-v5-u-pt-md', children: t('strong', { children: s('name') }) },
                          'applications-list-client-id-header',
                        ),
                        t(
                          d,
                          { width: 2, className: 'pf-v5-u-pt-md', children: t('strong', { children: s('applicationType') }) },
                          'applications-list-app-type-header',
                        ),
                        t(
                          d,
                          { width: 2, className: 'pf-v5-u-pt-md', children: t('strong', { children: s('status') }) },
                          'applications-list-status',
                        ),
                      ],
                    }),
                  ],
                }),
              }),
              c.map(e =>
                n(
                  y,
                  {
                    'aria-labelledby': 'applications-list',
                    'data-testid': 'applications-list-item',
                    isExpanded: e.open,
                    children: [
                      n(A, {
                        className: 'pf-v5-u-align-items-center',
                        children: [
                          t(v, {
                            onClick: () => w(e.clientId),
                            isExpanded: e.open,
                            id: `toggle-${e.clientId}`,
                            'aria-controls': `content-${e.clientId}`,
                          }),
                          t(N, {
                            className: 'pf-v5-u-align-items-center',
                            dataListCells: [
                              n(
                                d,
                                {
                                  width: 2,
                                  children: [
                                    e.effectiveUrl &&
                                      n(U, {
                                        className: 'pf-v5-u-pl-0 title-case',
                                        component: 'a',
                                        variant: 'link',
                                        onClick: () => window.open(e.effectiveUrl),
                                        children: [e.clientName || e.clientId, ' ', t(R, {})],
                                      }),
                                    !e.effectiveUrl && t('span', { children: e.clientName || e.clientId }),
                                  ],
                                },
                                `client${e.clientId}`,
                              ),
                              n(
                                d,
                                {
                                  width: 2,
                                  children: [
                                    e.userConsentRequired ? s('thirdPartyApp') : s('internalApp'),
                                    e.offlineAccess ? ', ' + s('offlineAccess') : '',
                                  ],
                                },
                                `internal${e.clientId}`,
                              ),
                              t(d, { width: 2, children: e.inUse ? s('inUse') : s('notInUse') }, `status${e.clientId}`),
                            ],
                          }),
                        ],
                      }),
                      n(z, {
                        id: `content-${e.clientId}`,
                        className: 'pf-v5-u-pl-4xl',
                        'aria-label': s('applicationDetails', { clientId: e.clientId }),
                        isHidden: !e.open,
                        children: [
                          n(J, {
                            children: [
                              n(r, { children: [t(l, { children: s('client') }), t(a, { children: e.clientId })] }),
                              e.description &&
                                n(r, { children: [t(l, { children: s('description') }), t(a, { children: e.description })] }),
                              e.effectiveUrl &&
                                n(r, { children: [t(l, { children: 'URL' }), t(a, { children: e.effectiveUrl.split('"') })] }),
                              e.consent &&
                                n(E, {
                                  children: [
                                    n(r, {
                                      children: [
                                        t(l, { children: s('hasAccessTo') }),
                                        e.consent.grantedScopes.map(i => n(a, { children: [t(Z, {}), ' ', s(i.name)] }, `scope${i.id}`)),
                                      ],
                                    }),
                                    e.tosUri && n(r, { children: [t(l, { children: s('termsOfService') }), t(a, { children: e.tosUri })] }),
                                    e.policyUri &&
                                      n(r, { children: [t(l, { children: s('privacyPolicy') }), t(a, { children: e.policyUri })] }),
                                    e.logoUri &&
                                      n(r, { children: [t(l, { children: s('logo') }), t(a, { children: t('img', { src: e.logoUri }) })] }),
                                    n(r, {
                                      children: [
                                        t(l, { children: s('accessGrantedOn') }),
                                        t(a, { children: H(new Date(e.consent.createdDate)) }),
                                      ],
                                    }),
                                  ],
                                }),
                            ],
                          }),
                          (e.consent || e.offlineAccess) &&
                            n(B, {
                              hasGutter: !0,
                              children: [
                                t('hr', {}),
                                t(D, {
                                  children: t(V, {
                                    buttonTitle: s('removeAccess'),
                                    modalTitle: s('removeAccess'),
                                    continueLabel: s('confirm'),
                                    cancelLabel: s('cancel'),
                                    buttonVariant: 'secondary',
                                    onContinue: () => x(e.clientId),
                                    children: s('removeModalMessage', { name: e.clientId }),
                                  }),
                                }),
                                n(D, { children: [t(W, {}), ' ', s('infoMessage')] }),
                              ],
                            }),
                        ],
                      }),
                    ],
                  },
                  e.clientId,
                ),
              ),
            ],
          }),
        })
      : t(j, {});
  };
export { ce as Applications, ce as default };
//# sourceMappingURL=Applications-FBlLXROl.js.map
