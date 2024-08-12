import { r as t, p as d } from './Page-d76ZI0ER.js';
import { aL as i } from './main-RBOOfBld.js';
function p(e) {
  const s = e.headers.get('link');
  if (!s) throw new Error('Attempted to parse links, but no header was found.');
  return s.split(/,\s*</).reduce((n, a) => {
    const o = a.match(/<?([^>]*)>(.*)/);
    if (!o) return {};
    const c = o[1],
      u = o[2].match(/\s*(.+)\s*=\s*"?([^"]+)"?/);
    if (u) {
      const l = {};
      for (const [m, f] of new URL(c).searchParams.entries()) l[m] = f;
      n[u[2]] = l;
    }
    return n;
  }, {});
}
const y = async ({ signal: e, context: s }, r, n = !1) => {
    const a = await t(`/resources${n ? '/shared-with-me?' : '?'}`, s, { searchParams: n ? r : void 0, signal: e });
    let o;
    try {
      o = p(a);
    } catch {
      o = {};
    }
    return { data: h(await a.json()), links: o };
  },
  v = async ({ signal: e, context: s }, r) => {
    const n = await t(`/resources/${r}/permissions`, s, { signal: e });
    return d(n);
  },
  P = (e, s, r, n) => t(`/resources/${s}/permissions`, e, { method: 'PUT', body: [{ username: r, scopes: n }] }),
  R = (e, s, r) => t(`/resources/${s}/permissions`, e, { method: 'PUT', body: r });
function h(e) {
  if (!e) throw new Error('Could not fetch');
  return e;
}
async function U(e) {
  const s = await t(
    i('/realms/', e.environment.realm, '/.well-known/openid-credential-issuer'),
    e,
    {},
    new URL(i(e.environment.serverBaseUrl, '/realms/', e.environment.realm, '/.well-known/openid-credential-issuer')),
  );
  return d(s);
}
async function b(e, s, r) {
  return (
    await t(
      '/protocol/oid4vc/credential-offer-uri',
      e,
      { searchParams: { credential_configuration_id: s.id, type: 'qr-code', width: '500', height: '500' } },
      new URL(i(r.credential_issuer + '/protocol/oid4vc/credential-offer-uri')),
    )
  ).blob();
}
export { P as a, y as b, v as f, U as g, b as r, R as u };
//# sourceMappingURL=api-DMOwmKI_.js.map
