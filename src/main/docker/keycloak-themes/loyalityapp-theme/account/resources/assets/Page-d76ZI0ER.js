import { aL as g, P as i, aS as u, T as w, az as l } from './main-RBOOfBld.js';
import { jsxs as c, Fragment as y, jsx as s } from 'react/jsx-runtime';
const E = e => typeof e == 'object' && e !== null,
  f = 'content-type',
  h = 'application/json';
class T extends Error {}
async function J(e) {
  const r = e.headers.get(f);
  if (!(r ? r.includes(h) : !1)) throw new Error(`Expected response to have a JSON content type, got '${r}' instead.`);
  const n = await m(e);
  if (!e.ok) throw new T(N(n));
  return n;
}
async function m(e) {
  try {
    return await e.json();
  } catch (r) {
    throw new Error('Unable to parse response as valid JSON.', { cause: r });
  }
}
function N(e) {
  if (!E(e)) throw new Error('Unable to retrieve error message from response.');
  const r = ['error_description', 'errorMessage', 'error'];
  for (const t of r) {
    const n = e[t];
    if (typeof n == 'string') return n;
  }
  throw new Error('Unable to retrieve error message from response, no matching key found.');
}
async function O(e, { signal: r, getAccessToken: t, method: n, searchParams: o, body: a } = {}) {
  return (
    o && Object.entries(o).forEach(([p, d]) => e.searchParams.set(p, d)),
    fetch(e, { signal: r, method: n, body: a ? JSON.stringify(a) : void 0, headers: { [f]: h, authorization: `Bearer ${await t?.()}` } })
  );
}
async function P(e, { environment: r, keycloak: t }, n = {}, o) {
  return typeof o > 'u' && (o = S(r, e)), O(o, { ...n, getAccessToken: v(t) });
}
const S = (e, r) => new URL(g(e.serverBaseUrl, 'realms', e.realm, 'account', r)),
  v = e =>
    async function () {
      try {
        await e.updateToken(5);
      } catch {
        await e.login();
      }
      return e.token;
    },
  _ = ({ title: e, description: r, children: t }) =>
    c(y, {
      children: [
        s(i, {
          variant: 'light',
          children: c(u, {
            children: [s(w, { headingLevel: 'h1', 'data-testid': 'page-heading', children: e }), s(l, { component: 'p', children: r })],
          }),
        }),
        s(i, { variant: 'light', children: t }),
      ],
    });
export { _ as P, J as p, P as r };
//# sourceMappingURL=Page-d76ZI0ER.js.map
