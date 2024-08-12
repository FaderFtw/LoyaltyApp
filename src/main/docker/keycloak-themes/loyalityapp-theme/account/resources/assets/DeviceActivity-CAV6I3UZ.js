import { jsx as e, jsxs as i } from 'react/jsx-runtime';
import { useState as v } from 'react';
import { c as D, u as T, l as M, r as N, a as V, S as z, T as P, B as G, s as w, G as H, b as m } from './main-RBOOfBld.js';
import { g as E, d as C } from './methods-DAviXuS2.js';
import { P as j } from './Page-d76ZI0ER.js';
import { f } from './formatDate-BJoMyDEn.js';
import { S as B, a as I } from './SplitItem-ClyXcZVM.js';
import { D as W, a as $, b as F } from './DataListItemRow-yfWD8Q-p.js';
import { D as K, a as R, b as o, c as a, d as l } from './DescriptionListTerm-wtJg4W5p.js';
import { L as q } from './Label-BwnA8IgW.js';
import 'react-dom';
const J = {
    name: 'DesktopIcon',
    height: 512,
    width: 576,
    svgPath:
      'M528 0H48C21.5 0 0 21.5 0 48v320c0 26.5 21.5 48 48 48h192l-16 48h-72c-13.3 0-24 10.7-24 24s10.7 24 24 24h272c13.3 0 24-10.7 24-24s-10.7-24-24-24h-72l-16-48h192c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zm-16 352H64V64h448v288z',
    yOffset: 0,
    xOffset: 0,
  },
  Q = D(J),
  U = {
    name: 'MobileAltIcon',
    height: 512,
    width: 320,
    svgPath:
      'M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32zm112-108c0 6.6-5.4 12-12 12H60c-6.6 0-12-5.4-12-12V60c0-6.6 5.4-12 12-12h200c6.6 0 12 5.4 12 12v312z',
    yOffset: 0,
    xOffset: 0,
  },
  X = D(U),
  Y = {
    name: 'SyncAltIcon',
    height: 512,
    width: 512,
    svgPath:
      'M370.72 133.28C339.458 104.008 298.888 87.962 255.848 88c-77.458.068-144.328 53.178-162.791 126.85-1.344 5.363-6.122 9.15-11.651 9.15H24.103c-7.498 0-13.194-6.807-11.807-14.176C33.933 94.924 134.813 8 256 8c66.448 0 126.791 26.136 171.315 68.685L463.03 40.97C478.149 25.851 504 36.559 504 57.941V192c0 13.255-10.745 24-24 24H345.941c-21.382 0-32.09-25.851-16.971-40.971l41.75-41.749zM32 296h134.059c21.382 0 32.09 25.851 16.971 40.971l-41.75 41.75c31.262 29.273 71.835 45.319 114.876 45.28 77.418-.07 144.315-53.144 162.787-126.849 1.344-5.363 6.122-9.15 11.651-9.15h57.304c7.498 0 13.194 6.807 11.807 14.176C478.067 417.076 377.187 504 256 504c-66.448 0-126.791-26.136-171.315-68.685L48.97 471.03C33.851 486.149 8 475.441 8 454.059V320c0-13.255 10.745-24 24-24z',
    yOffset: 0,
    xOffset: 0,
  },
  Z = D(Y),
  he = () => {
    const { t: n } = T(),
      d = M(),
      { addAlert: S, addError: L } = N(),
      [h, O] = v(),
      [u, x] = v(0),
      b = () => x(u + 1);
    V(
      s => E({ signal: s, context: d }),
      s => {
        let t = s[0];
        const r = s.findIndex(p => p.current);
        (t = s.splice(r, 1)[0]), s.unshift(t);
        const g = t.sessions.findIndex(p => p.current),
          c = t.sessions.splice(g, 1)[0];
        t.sessions.unshift(c), O(s);
      },
      [u],
    );
    const y = async () => {
        await C(d), d.keycloak.logout();
      },
      A = async (s, t) => {
        try {
          await C(d, s.id), S(n('signedOutSession', { browser: s.browser, os: t.os })), b();
        } catch (r) {
          L(n('errorSignOutMessage', { error: r }).toString());
        }
      },
      k = s => {
        let t = '';
        return (
          s.forEach((r, g) => {
            let c;
            r.clientName !== '' ? (c = n(r.clientName)) : (c = r.clientId), (t += c), s.length > g + 1 && (t += ', ');
          }),
          t
        );
      };
    return h
      ? i(j, {
          title: n('deviceActivity'),
          description: n('signedInDevicesExplanation'),
          children: [
            i(B, {
              hasGutter: !0,
              className: 'pf-v5-u-mb-lg',
              children: [
                e(I, { isFilled: !0, children: e(P, { headingLevel: 'h2', size: 'xl', children: n('signedInDevices') }) }),
                i(I, {
                  children: [
                    e(G, { id: 'refresh-page', variant: 'link', onClick: () => b(), icon: e(Z, {}), children: n('refreshPage') }),
                    (h.length > 1 || h[0].sessions.length > 1) &&
                      e(w, {
                        buttonTitle: n('signOutAllDevices'),
                        modalTitle: n('signOutAllDevices'),
                        continueLabel: n('confirm'),
                        cancelLabel: n('cancel'),
                        onContinue: () => y(),
                        children: n('signOutAllDevicesWarning'),
                      }),
                  ],
                }),
              ],
            }),
            e(W, {
              className: 'signed-in-device-list',
              'aria-label': n('signedInDevices'),
              children: e($, {
                'aria-labelledby': `sessions-${u}`,
                children: h.map(s =>
                  s.sessions.map((t, r) =>
                    e(
                      F,
                      {
                        'data-testid': `row-${r}`,
                        children: e(K, {
                          'aria-label': 'device-sessions-content',
                          className: 'pf-v5-u-flex-grow-1',
                          children: i(H, {
                            hasGutter: !0,
                            children: [
                              e(m, { span: 1, rowSpan: 2, children: s.mobile ? e(X, {}) : e(Q, {}) }),
                              i(m, {
                                sm: 8,
                                md: 9,
                                span: 10,
                                children: [
                                  i('span', {
                                    className: 'pf-v5-u-mr-md session-title',
                                    children: [
                                      s.os.toLowerCase().includes('unknown') ? n('unknownOperatingSystem') : s.os,
                                      ' ',
                                      !s.osVersion.toLowerCase().includes('unknown') && s.osVersion,
                                      ' ',
                                      '/ ',
                                      t.browser,
                                    ],
                                  }),
                                  t.current && e(q, { color: 'green', children: n('currentSession') }),
                                ],
                              }),
                              e(m, {
                                className: 'pf-v5-u-text-align-right',
                                sm: 3,
                                md: 2,
                                span: 1,
                                children:
                                  !t.current &&
                                  e(w, {
                                    buttonTitle: n('signOut'),
                                    modalTitle: n('signOut'),
                                    continueLabel: n('confirm'),
                                    cancelLabel: n('cancel'),
                                    buttonVariant: 'secondary',
                                    onContinue: () => A(t, s),
                                    children: n('signOutWarning'),
                                  }),
                              }),
                              e(m, {
                                span: 11,
                                children: i(R, {
                                  className: 'signed-in-device-grid',
                                  columnModifier: { sm: '2Col', lg: '3Col' },
                                  cols: 5,
                                  rows: 1,
                                  children: [
                                    i(o, { children: [e(a, { children: n('ipAddress') }), e(l, { children: t.ipAddress })] }),
                                    i(o, {
                                      children: [
                                        e(a, { children: n('lastAccessedOn') }),
                                        e(l, { children: f(new Date(t.lastAccess * 1e3)) }),
                                      ],
                                    }),
                                    i(o, { children: [e(a, { children: n('clients') }), e(l, { children: k(t.clients) })] }),
                                    i(o, {
                                      children: [e(a, { children: n('started') }), e(l, { children: f(new Date(t.started * 1e3)) })],
                                    }),
                                    i(o, {
                                      children: [e(a, { children: n('expires') }), e(l, { children: f(new Date(t.expires * 1e3)) })],
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      },
                      s.id,
                    ),
                  ),
                ),
              }),
            }),
          ],
        })
      : e(z, {});
  };
export { he as DeviceActivity, he as default };
//# sourceMappingURL=DeviceActivity-CAV6I3UZ.js.map
