import { aL as a } from './main-RBOOfBld.js';
import { r as t, p as o } from './Page-d76ZI0ER.js';
async function u({ signal: s, context: e }) {
  const n = await t('/?userProfileMetadata=true', e, { signal: s });
  return o(n);
}
async function p({ signal: s, context: e }) {
  const n = await t('/supportedLocales', e, { signal: s });
  return o(n);
}
async function d(s, e) {
  const n = await t('/', s, { body: e, method: 'POST' });
  if (!n.ok) {
    const { errors: r } = await n.json();
    throw r;
  }
}
async function f(s, { signal: e, context: n }) {
  const r = await t(`/resources/${s}/permissions/requests`, n, { signal: e });
  return o(r);
}
async function l({ signal: s, context: e }) {
  const n = await t('/sessions/devices', e, { signal: s });
  return o(n);
}
async function m({ signal: s, context: e }) {
  const n = await t('/applications', e, { signal: s });
  return o(n);
}
async function y(s, e) {
  return t(`/applications/${e}/consent`, s, { method: 'DELETE' });
}
async function w(s, e) {
  return t(`/sessions${e ? `/${e}` : ''}`, s, { method: 'DELETE' });
}
async function v({ signal: s, context: e }) {
  const n = await t('/credentials', e, { signal: s });
  return o(n);
}
async function g({ signal: s, context: e }) {
  const n = await t('/linked-accounts', e, { signal: s });
  return o(n);
}
async function E(s, e) {
  const n = await t('/linked-accounts/' + e.providerName, s, { method: 'DELETE' });
  if (!n.ok) return o(n);
}
async function h(s, e) {
  const n = encodeURIComponent(a(s.environment.serverBaseUrl, 'realms', s.environment.realm, 'account')),
    r = await t('/linked-accounts/' + e.providerName, s, { searchParams: { providerId: e.providerName, redirectUri: n } });
  return o(r);
}
async function k({ signal: s, context: e }) {
  const n = await t('/groups', e, { signal: s });
  return o(n);
}
export { g as a, v as b, m as c, w as d, y as e, k as f, l as g, u as h, p as i, f as j, h as l, d as s, E as u };
//# sourceMappingURL=methods-DAviXuS2.js.map
