const __vite__fileDeps = [
    './SplitItem-CHt8naZV.css',
    './DataListItemRow-ZUMFKqGA.css',
    './DescriptionListTerm-CmoB2Pr4.css',
    './Label-Dyz48rfc.css',
    './LinkedAccounts-BI_vPGkI.css',
    './PersonalInfo-cN5yF_Ay.css',
    './Resources-dbz0FMu8.css',
    './Oid4Vci-iE3qNc7s.css',
  ],
  __vite__mapDeps = i => i.map(i => __vite__fileDeps[i]);
import { jsx as M, jsxs as We, Fragment as wi } from 'react/jsx-runtime';
import * as c from 'react';
import pe, {
  createContext as Ci,
  useContext as Oi,
  useState as ze,
  useRef as qt,
  useEffect as Tt,
  useCallback as $o,
  forwardRef as wc,
  useImperativeHandle as of,
  useMemo as Pt,
  Fragment as Cc,
  useId as sf,
  Children as Oc,
  Suspense as _c,
  lazy as ln,
  StrictMode as lf,
} from 'react';
import * as _i from 'react-dom';
import cf from 'react-dom';
function df(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != 'string' && !Array.isArray(r)) {
      for (const a in r)
        if (a !== 'default' && !(a in e)) {
          const i = Object.getOwnPropertyDescriptor(r, a);
          i && Object.defineProperty(e, a, i.get ? i : { enumerable: !0, get: () => r[a] });
        }
    }
  }
  return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' }));
}
var dr = typeof globalThis < 'u' ? globalThis : typeof window < 'u' ? window : typeof global < 'u' ? global : typeof self < 'u' ? self : {};
function Ec(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, 'default') ? e.default : e;
}
function uf(e) {
  if (e.__esModule) return e;
  var t = e.default;
  if (typeof t == 'function') {
    var n = function r() {
      return this instanceof r ? Reflect.construct(t, arguments, this.constructor) : t.apply(this, arguments);
    };
    n.prototype = t.prototype;
  } else n = {};
  return (
    Object.defineProperty(n, '__esModule', { value: !0 }),
    Object.keys(e).forEach(function (r) {
      var a = Object.getOwnPropertyDescriptor(e, r);
      Object.defineProperty(
        n,
        r,
        a.get
          ? a
          : {
              enumerable: !0,
              get: function () {
                return e[r];
              },
            },
      );
    }),
    n
  );
}
var Sc,
  Us = cf;
(Sc = Us.createRoot), Us.hydrateRoot;
/**
 * @remix-run/router v1.16.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ge() {
  return (
    (Ge = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Ge.apply(this, arguments)
  );
}
var Ye;
(function (e) {
  (e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE');
})(Ye || (Ye = {}));
const Vs = 'popstate';
function ff(e) {
  e === void 0 && (e = {});
  function t(r, a) {
    let { pathname: i, search: o, hash: s } = r.location;
    return ra('', { pathname: i, search: o, hash: s }, (a.state && a.state.usr) || null, (a.state && a.state.key) || 'default');
  }
  function n(r, a) {
    return typeof a == 'string' ? a : Dn(a);
  }
  return mf(t, n, null, e);
}
function Se(e, t) {
  if (e === !1 || e === null || typeof e > 'u') throw new Error(t);
}
function mr(e, t) {
  if (!e) {
    typeof console < 'u' && console.warn(t);
    try {
      throw new Error(t);
    } catch {}
  }
}
function pf() {
  return Math.random().toString(36).substr(2, 8);
}
function Hs(e, t) {
  return { usr: e.state, key: e.key, idx: t };
}
function ra(e, t, n, r) {
  return (
    n === void 0 && (n = null),
    Ge({ pathname: typeof e == 'string' ? e : e.pathname, search: '', hash: '' }, typeof t == 'string' ? Ln(t) : t, {
      state: n,
      key: (t && t.key) || r || pf(),
    })
  );
}
function Dn(e) {
  let { pathname: t = '/', search: n = '', hash: r = '' } = e;
  return n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n), r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r), t;
}
function Ln(e) {
  let t = {};
  if (e) {
    let n = e.indexOf('#');
    n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
    let r = e.indexOf('?');
    r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
  }
  return t;
}
function mf(e, t, n, r) {
  r === void 0 && (r = {});
  let { window: a = document.defaultView, v5Compat: i = !1 } = r,
    o = a.history,
    s = Ye.Pop,
    l = null,
    u = d();
  u == null && ((u = 0), o.replaceState(Ge({}, o.state, { idx: u }), ''));
  function d() {
    return (o.state || { idx: null }).idx;
  }
  function p() {
    s = Ye.Pop;
    let w = d(),
      T = w == null ? null : w - u;
    (u = w), l && l({ action: s, location: v.location, delta: T });
  }
  function f(w, T) {
    s = Ye.Push;
    let N = ra(v.location, w, T);
    u = d() + 1;
    let B = Hs(N, u),
      A = v.createHref(N);
    try {
      o.pushState(B, '', A);
    } catch (L) {
      if (L instanceof DOMException && L.name === 'DataCloneError') throw L;
      a.location.assign(A);
    }
    i && l && l({ action: s, location: v.location, delta: 1 });
  }
  function h(w, T) {
    s = Ye.Replace;
    let N = ra(v.location, w, T);
    u = d();
    let B = Hs(N, u),
      A = v.createHref(N);
    o.replaceState(B, '', A), i && l && l({ action: s, location: v.location, delta: 0 });
  }
  function b(w) {
    let T = a.location.origin !== 'null' ? a.location.origin : a.location.href,
      N = typeof w == 'string' ? w : Dn(w);
    return (N = N.replace(/ $/, '%20')), Se(T, 'No window.location.(origin|href) available to create URL for href: ' + N), new URL(N, T);
  }
  let v = {
    get action() {
      return s;
    },
    get location() {
      return e(a, o);
    },
    listen(w) {
      if (l) throw new Error('A history only accepts one active listener');
      return (
        a.addEventListener(Vs, p),
        (l = w),
        () => {
          a.removeEventListener(Vs, p), (l = null);
        }
      );
    },
    createHref(w) {
      return t(a, w);
    },
    createURL: b,
    encodeLocation(w) {
      let T = b(w);
      return { pathname: T.pathname, search: T.search, hash: T.hash };
    },
    push: f,
    replace: h,
    go(w) {
      return o.go(w);
    },
  };
  return v;
}
var $e;
(function (e) {
  (e.data = 'data'), (e.deferred = 'deferred'), (e.redirect = 'redirect'), (e.error = 'error');
})($e || ($e = {}));
const hf = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children']);
function gf(e) {
  return e.index === !0;
}
function vo(e, t, n, r) {
  return (
    n === void 0 && (n = []),
    r === void 0 && (r = {}),
    e.map((a, i) => {
      let o = [...n, i],
        s = typeof a.id == 'string' ? a.id : o.join('-');
      if (
        (Se(a.index !== !0 || !a.children, 'Cannot specify children on an index route'),
        Se(!r[s], 'Found a route id collision on id "' + s + `".  Route id's must be globally unique within Data Router usages`),
        gf(a))
      ) {
        let l = Ge({}, a, t(a), { id: s });
        return (r[s] = l), l;
      } else {
        let l = Ge({}, a, t(a), { id: s, children: void 0 });
        return (r[s] = l), a.children && (l.children = vo(a.children, t, o, r)), l;
      }
    })
  );
}
function sr(e, t, n) {
  n === void 0 && (n = '/');
  let r = typeof t == 'string' ? Ln(t) : t,
    a = ha(r.pathname || '/', n);
  if (a == null) return null;
  let i = kc(e);
  bf(i);
  let o = null;
  for (let s = 0; o == null && s < i.length; ++s) {
    let l = If(a);
    o = kf(i[s], l);
  }
  return o;
}
function vf(e, t) {
  let { route: n, pathname: r, params: a } = e;
  return { id: n.id, pathname: r, params: a, data: t[n.id], handle: n.handle };
}
function kc(e, t, n, r) {
  t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '');
  let a = (i, o, s) => {
    let l = { relativePath: s === void 0 ? i.path || '' : s, caseSensitive: i.caseSensitive === !0, childrenIndex: o, route: i };
    l.relativePath.startsWith('/') &&
      (Se(
        l.relativePath.startsWith(r),
        'Absolute route path "' +
          l.relativePath +
          '" nested under path ' +
          ('"' + r + '" is not valid. An absolute child route path ') +
          'must start with the combined path of all its parent routes.',
      ),
      (l.relativePath = l.relativePath.slice(r.length)));
    let u = rn([r, l.relativePath]),
      d = n.concat(l);
    i.children &&
      i.children.length > 0 &&
      (Se(i.index !== !0, 'Index routes must not have child routes. Please remove ' + ('all child routes from route path "' + u + '".')),
      kc(i.children, t, d, u)),
      !(i.path == null && !i.index) && t.push({ path: u, score: Ef(u, i.index), routesMeta: d });
  };
  return (
    e.forEach((i, o) => {
      var s;
      if (i.path === '' || !((s = i.path) != null && s.includes('?'))) a(i, o);
      else for (let l of Lc(i.path)) a(i, o, l);
    }),
    t
  );
}
function Lc(e) {
  let t = e.split('/');
  if (t.length === 0) return [];
  let [n, ...r] = t,
    a = n.endsWith('?'),
    i = n.replace(/\?$/, '');
  if (r.length === 0) return a ? [i, ''] : [i];
  let o = Lc(r.join('/')),
    s = [];
  return s.push(...o.map(l => (l === '' ? i : [i, l].join('/')))), a && s.push(...o), s.map(l => (e.startsWith('/') && l === '' ? '/' : l));
}
function bf(e) {
  e.sort((t, n) =>
    t.score !== n.score
      ? n.score - t.score
      : Sf(
          t.routesMeta.map(r => r.childrenIndex),
          n.routesMeta.map(r => r.childrenIndex),
        ),
  );
}
const yf = /^:[\w-]+$/,
  xf = 3,
  wf = 2,
  Cf = 1,
  Of = 10,
  _f = -2,
  $s = e => e === '*';
function Ef(e, t) {
  let n = e.split('/'),
    r = n.length;
  return n.some($s) && (r += _f), t && (r += wf), n.filter(a => !$s(a)).reduce((a, i) => a + (yf.test(i) ? xf : i === '' ? Cf : Of), r);
}
function Sf(e, t) {
  return e.length === t.length && e.slice(0, -1).every((r, a) => r === t[a]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function kf(e, t) {
  let { routesMeta: n } = e,
    r = {},
    a = '/',
    i = [];
  for (let o = 0; o < n.length; ++o) {
    let s = n[o],
      l = o === n.length - 1,
      u = a === '/' ? t : t.slice(a.length) || '/',
      d = Ic({ path: s.relativePath, caseSensitive: s.caseSensitive, end: l }, u);
    if (!d) return null;
    Object.assign(r, d.params);
    let p = s.route;
    i.push({ params: r, pathname: rn([a, d.pathname]), pathnameBase: Tf(rn([a, d.pathnameBase])), route: p }),
      d.pathnameBase !== '/' && (a = rn([a, d.pathnameBase]));
  }
  return i;
}
function Ic(e, t) {
  typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = Lf(e.path, e.caseSensitive, e.end),
    a = t.match(n);
  if (!a) return null;
  let i = a[0],
    o = i.replace(/(.)\/+$/, '$1'),
    s = a.slice(1);
  return {
    params: r.reduce((u, d, p) => {
      let { paramName: f, isOptional: h } = d;
      if (f === '*') {
        let v = s[p] || '';
        o = i.slice(0, i.length - v.length).replace(/(.)\/+$/, '$1');
      }
      const b = s[p];
      return h && !b ? (u[f] = void 0) : (u[f] = (b || '').replace(/%2F/g, '/')), u;
    }, {}),
    pathname: i,
    pathnameBase: o,
    pattern: e,
  };
}
function Lf(e, t, n) {
  t === void 0 && (t = !1),
    n === void 0 && (n = !0),
    mr(
      e === '*' || !e.endsWith('*') || e.endsWith('/*'),
      'Route path "' +
        e +
        '" will be treated as if it were ' +
        ('"' + e.replace(/\*$/, '/*') + '" because the `*` character must ') +
        'always follow a `/` in the pattern. To get rid of this warning, ' +
        ('please change the route path to "' + e.replace(/\*$/, '/*') + '".'),
    );
  let r = [],
    a =
      '^' +
      e
        .replace(/\/*\*?$/, '')
        .replace(/^\/*/, '/')
        .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
        .replace(/\/:([\w-]+)(\?)?/g, (o, s, l) => (r.push({ paramName: s, isOptional: l != null }), l ? '/?([^\\/]+)?' : '/([^\\/]+)'));
  return (
    e.endsWith('*')
      ? (r.push({ paramName: '*' }), (a += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
      : n
        ? (a += '\\/*$')
        : e !== '' && e !== '/' && (a += '(?:(?=\\/|$))'),
    [new RegExp(a, t ? void 0 : 'i'), r]
  );
}
function If(e) {
  try {
    return e
      .split('/')
      .map(t => decodeURIComponent(t).replace(/\//g, '%2F'))
      .join('/');
  } catch (t) {
    return (
      mr(
        !1,
        'The URL path "' +
          e +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ('encoding (' + t + ').'),
      ),
      e
    );
  }
}
function ha(e, t) {
  if (t === '/') return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith('/') ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== '/' ? null : e.slice(n) || '/';
}
function Rf(e, t) {
  t === void 0 && (t = '/');
  let { pathname: n, search: r = '', hash: a = '' } = typeof e == 'string' ? Ln(e) : e;
  return { pathname: n ? (n.startsWith('/') ? n : Nf(n, t)) : t, search: Pf(r), hash: Af(a) };
}
function Nf(e, t) {
  let n = t.replace(/\/+$/, '').split('/');
  return (
    e.split('/').forEach(a => {
      a === '..' ? n.length > 1 && n.pop() : a !== '.' && n.push(a);
    }),
    n.length > 1 ? n.join('/') : '/'
  );
}
function Vi(e, t, n, r) {
  return (
    "Cannot include a '" +
    e +
    "' character in a manually specified " +
    ('`to.' + t + '` field [' + JSON.stringify(r) + '].  Please separate it out to the ') +
    ('`to.' + n + '` field. Alternatively you may provide the full path as ') +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Rc(e) {
  return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function zo(e, t) {
  let n = Rc(e);
  return t ? n.map((r, a) => (a === e.length - 1 ? r.pathname : r.pathnameBase)) : n.map(r => r.pathnameBase);
}
function Wo(e, t, n, r) {
  r === void 0 && (r = !1);
  let a;
  typeof e == 'string'
    ? (a = Ln(e))
    : ((a = Ge({}, e)),
      Se(!a.pathname || !a.pathname.includes('?'), Vi('?', 'pathname', 'search', a)),
      Se(!a.pathname || !a.pathname.includes('#'), Vi('#', 'pathname', 'hash', a)),
      Se(!a.search || !a.search.includes('#'), Vi('#', 'search', 'hash', a)));
  let i = e === '' || a.pathname === '',
    o = i ? '/' : a.pathname,
    s;
  if (o == null) s = n;
  else {
    let p = t.length - 1;
    if (!r && o.startsWith('..')) {
      let f = o.split('/');
      for (; f[0] === '..'; ) f.shift(), (p -= 1);
      a.pathname = f.join('/');
    }
    s = p >= 0 ? t[p] : '/';
  }
  let l = Rf(a, s),
    u = o && o !== '/' && o.endsWith('/'),
    d = (i || o === '.') && n.endsWith('/');
  return !l.pathname.endsWith('/') && (u || d) && (l.pathname += '/'), l;
}
const rn = e => e.join('/').replace(/\/\/+/g, '/'),
  Tf = e => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
  Pf = e => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
  Af = e => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e);
class Go {
  constructor(t, n, r, a) {
    a === void 0 && (a = !1),
      (this.status = t),
      (this.statusText = n || ''),
      (this.internal = a),
      r instanceof Error ? ((this.data = r.toString()), (this.error = r)) : (this.data = r);
  }
}
function Ei(e) {
  return e != null && typeof e.status == 'number' && typeof e.statusText == 'string' && typeof e.internal == 'boolean' && 'data' in e;
}
const Nc = ['post', 'put', 'patch', 'delete'],
  Ff = new Set(Nc),
  Mf = ['get', ...Nc],
  Df = new Set(Mf),
  jf = new Set([301, 302, 303, 307, 308]),
  Bf = new Set([307, 308]),
  Hi = {
    state: 'idle',
    location: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  Uf = {
    state: 'idle',
    data: void 0,
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
  },
  jr = { state: 'unblocked', proceed: void 0, reset: void 0, location: void 0 },
  qo = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Vf = e => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
  Tc = 'remix-router-transitions';
function Hf(e) {
  const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
    n = typeof t < 'u' && typeof t.document < 'u' && typeof t.document.createElement < 'u',
    r = !n;
  Se(e.routes.length > 0, 'You must provide a non-empty routes array to createRouter');
  let a;
  if (e.mapRouteProperties) a = e.mapRouteProperties;
  else if (e.detectErrorBoundary) {
    let j = e.detectErrorBoundary;
    a = W => ({ hasErrorBoundary: j(W) });
  } else a = Vf;
  let i = {},
    o = vo(e.routes, a, void 0, i),
    s,
    l = e.basename || '/',
    u = e.unstable_dataStrategy || Gf,
    d = Ge(
      {
        v7_fetcherPersist: !1,
        v7_normalizeFormMethod: !1,
        v7_partialHydration: !1,
        v7_prependBasename: !1,
        v7_relativeSplatPath: !1,
        unstable_skipActionErrorRevalidation: !1,
      },
      e.future,
    ),
    p = null,
    f = new Set(),
    h = null,
    b = null,
    v = null,
    w = e.hydrationData != null,
    T = sr(o, e.history.location, l),
    N = null;
  if (T == null) {
    let j = Ct(404, { pathname: e.history.location.pathname }),
      { matches: W, route: X } = Zs(o);
    (T = W), (N = { [X.id]: j });
  }
  let B,
    A = T.some(j => j.route.lazy),
    L = T.some(j => j.route.loader);
  if (A) B = !1;
  else if (!L) B = !0;
  else if (d.v7_partialHydration) {
    let j = e.hydrationData ? e.hydrationData.loaderData : null,
      W = e.hydrationData ? e.hydrationData.errors : null,
      X = oe =>
        oe.route.loader
          ? typeof oe.route.loader == 'function' && oe.route.loader.hydrate === !0
            ? !1
            : (j && j[oe.route.id] !== void 0) || (W && W[oe.route.id] !== void 0)
          : !0;
    if (W) {
      let oe = T.findIndex(fe => W[fe.route.id] !== void 0);
      B = T.slice(0, oe + 1).every(X);
    } else B = T.every(X);
  } else B = e.hydrationData != null;
  let g,
    m = {
      historyAction: e.history.action,
      location: e.history.location,
      matches: T,
      initialized: B,
      navigation: Hi,
      restoreScrollPosition: e.hydrationData != null ? !1 : null,
      preventScrollReset: !1,
      revalidation: 'idle',
      loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
      actionData: (e.hydrationData && e.hydrationData.actionData) || null,
      errors: (e.hydrationData && e.hydrationData.errors) || N,
      fetchers: new Map(),
      blockers: new Map(),
    },
    S = Ye.Pop,
    E = !1,
    k,
    y = !1,
    _ = new Map(),
    O = null,
    U = !1,
    x = !1,
    D = [],
    G = [],
    z = new Map(),
    K = 0,
    ne = -1,
    C = new Map(),
    P = new Set(),
    H = new Map(),
    q = new Map(),
    $ = new Set(),
    Y = new Map(),
    J = new Map(),
    Q = !1;
  function re() {
    if (
      ((p = e.history.listen(j => {
        let { action: W, location: X, delta: oe } = j;
        if (Q) {
          Q = !1;
          return;
        }
        mr(
          J.size === 0 || oe != null,
          'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.',
        );
        let fe = fn({ currentLocation: m.location, nextLocation: X, historyAction: W });
        if (fe && oe != null) {
          (Q = !0),
            e.history.go(oe * -1),
            Bt(fe, {
              state: 'blocked',
              location: X,
              proceed() {
                Bt(fe, { state: 'proceeding', proceed: void 0, reset: void 0, location: X }), e.history.go(oe);
              },
              reset() {
                let Oe = new Map(m.blockers);
                Oe.set(fe, jr), de({ blockers: Oe });
              },
            });
          return;
        }
        return Te(W, X);
      })),
      n)
    ) {
      ap(t, _);
      let j = () => ip(t, _);
      t.addEventListener('pagehide', j), (O = () => t.removeEventListener('pagehide', j));
    }
    return m.initialized || Te(Ye.Pop, m.location, { initialHydration: !0 }), g;
  }
  function te() {
    p && p(), O && O(), f.clear(), k && k.abort(), m.fetchers.forEach((j, W) => ht(W)), m.blockers.forEach((j, W) => Lt(W));
  }
  function se(j) {
    return f.add(j), () => f.delete(j);
  }
  function de(j, W) {
    W === void 0 && (W = {}), (m = Ge({}, m, j));
    let X = [],
      oe = [];
    d.v7_fetcherPersist &&
      m.fetchers.forEach((fe, Oe) => {
        fe.state === 'idle' && ($.has(Oe) ? oe.push(Oe) : X.push(Oe));
      }),
      [...f].forEach(fe =>
        fe(m, { deletedFetchers: oe, unstable_viewTransitionOpts: W.viewTransitionOpts, unstable_flushSync: W.flushSync === !0 }),
      ),
      d.v7_fetcherPersist && (X.forEach(fe => m.fetchers.delete(fe)), oe.forEach(fe => ht(fe)));
  }
  function Le(j, W, X) {
    var oe, fe;
    let { flushSync: Oe } = X === void 0 ? {} : X,
      ve =
        m.actionData != null &&
        m.navigation.formMethod != null &&
        It(m.navigation.formMethod) &&
        m.navigation.state === 'loading' &&
        ((oe = j.state) == null ? void 0 : oe._isRedirect) !== !0,
      me;
    W.actionData ? (Object.keys(W.actionData).length > 0 ? (me = W.actionData) : (me = null)) : ve ? (me = m.actionData) : (me = null);
    let _e = W.loaderData ? Ys(m.loaderData, W.loaderData, W.matches || [], W.errors) : m.loaderData,
      Ce = m.blockers;
    Ce.size > 0 && ((Ce = new Map(Ce)), Ce.forEach((xe, Ve) => Ce.set(Ve, jr)));
    let it =
      E === !0 ||
      (m.navigation.formMethod != null && It(m.navigation.formMethod) && ((fe = j.state) == null ? void 0 : fe._isRedirect) !== !0);
    s && ((o = s), (s = void 0)),
      U || S === Ye.Pop || (S === Ye.Push ? e.history.push(j, j.state) : S === Ye.Replace && e.history.replace(j, j.state));
    let ot;
    if (S === Ye.Pop) {
      let xe = _.get(m.location.pathname);
      xe && xe.has(j.pathname)
        ? (ot = { currentLocation: m.location, nextLocation: j })
        : _.has(j.pathname) && (ot = { currentLocation: j, nextLocation: m.location });
    } else if (y) {
      let xe = _.get(m.location.pathname);
      xe ? xe.add(j.pathname) : ((xe = new Set([j.pathname])), _.set(m.location.pathname, xe)),
        (ot = { currentLocation: m.location, nextLocation: j });
    }
    de(
      Ge({}, W, {
        actionData: me,
        loaderData: _e,
        historyAction: S,
        location: j,
        initialized: !0,
        navigation: Hi,
        revalidation: 'idle',
        restoreScrollPosition: Be(j, W.matches || m.matches),
        preventScrollReset: it,
        blockers: Ce,
      }),
      { viewTransitionOpts: ot, flushSync: Oe === !0 },
    ),
      (S = Ye.Pop),
      (E = !1),
      (y = !1),
      (U = !1),
      (x = !1),
      (D = []),
      (G = []);
  }
  async function je(j, W) {
    if (typeof j == 'number') {
      e.history.go(j);
      return;
    }
    let X = bo(m.location, m.matches, l, d.v7_prependBasename, j, d.v7_relativeSplatPath, W?.fromRouteId, W?.relative),
      { path: oe, submission: fe, error: Oe } = zs(d.v7_normalizeFormMethod, !1, X, W),
      ve = m.location,
      me = ra(m.location, oe, W && W.state);
    me = Ge({}, me, e.history.encodeLocation(me));
    let _e = W && W.replace != null ? W.replace : void 0,
      Ce = Ye.Push;
    _e === !0
      ? (Ce = Ye.Replace)
      : _e === !1 || (fe != null && It(fe.formMethod) && fe.formAction === m.location.pathname + m.location.search && (Ce = Ye.Replace));
    let it = W && 'preventScrollReset' in W ? W.preventScrollReset === !0 : void 0,
      ot = (W && W.unstable_flushSync) === !0,
      xe = fn({ currentLocation: ve, nextLocation: me, historyAction: Ce });
    if (xe) {
      Bt(xe, {
        state: 'blocked',
        location: me,
        proceed() {
          Bt(xe, { state: 'proceeding', proceed: void 0, reset: void 0, location: me }), je(j, W);
        },
        reset() {
          let Ve = new Map(m.blockers);
          Ve.set(xe, jr), de({ blockers: Ve });
        },
      });
      return;
    }
    return await Te(Ce, me, {
      submission: fe,
      pendingError: Oe,
      preventScrollReset: it,
      replace: W && W.replace,
      enableViewTransition: W && W.unstable_viewTransition,
      flushSync: ot,
    });
  }
  function Me() {
    if ((le(), de({ revalidation: 'loading' }), m.navigation.state !== 'submitting')) {
      if (m.navigation.state === 'idle') {
        Te(m.historyAction, m.location, { startUninterruptedRevalidation: !0 });
        return;
      }
      Te(S || m.historyAction, m.navigation.location, { overrideNavigation: m.navigation });
    }
  }
  async function Te(j, W, X) {
    k && k.abort(),
      (k = null),
      (S = j),
      (U = (X && X.startUninterruptedRevalidation) === !0),
      we(m.location, m.matches),
      (E = (X && X.preventScrollReset) === !0),
      (y = (X && X.enableViewTransition) === !0);
    let oe = s || o,
      fe = X && X.overrideNavigation,
      Oe = sr(oe, W, l),
      ve = (X && X.flushSync) === !0;
    if (!Oe) {
      let xe = Ct(404, { pathname: W.pathname }),
        { matches: Ve, route: tt } = Zs(oe);
      Xn(), Le(W, { matches: Ve, loaderData: {}, errors: { [tt.id]: xe } }, { flushSync: ve });
      return;
    }
    if (m.initialized && !x && Qf(m.location, W) && !(X && X.submission && It(X.submission.formMethod))) {
      Le(W, { matches: Oe }, { flushSync: ve });
      return;
    }
    k = new AbortController();
    let me = Zn(e.history, W, k.signal, X && X.submission),
      _e;
    if (X && X.pendingError) _e = [Jr(Oe).route.id, { type: $e.error, error: X.pendingError }];
    else if (X && X.submission && It(X.submission.formMethod)) {
      let xe = await Xe(me, W, X.submission, Oe, { replace: X.replace, flushSync: ve });
      if (xe.shortCircuited) return;
      (_e = xe.pendingActionResult), (fe = $i(W, X.submission)), (ve = !1), (me = Zn(e.history, me.url, me.signal));
    }
    let {
      shortCircuited: Ce,
      loaderData: it,
      errors: ot,
    } = await I(me, W, Oe, fe, X && X.submission, X && X.fetcherSubmission, X && X.replace, X && X.initialHydration === !0, ve, _e);
    Ce || ((k = null), Le(W, Ge({ matches: Oe }, Qs(_e), { loaderData: it, errors: ot })));
  }
  async function Xe(j, W, X, oe, fe) {
    fe === void 0 && (fe = {}), le();
    let Oe = np(W, X);
    de({ navigation: Oe }, { flushSync: fe.flushSync === !0 });
    let ve,
      me = xo(oe, W);
    if (!me.route.action && !me.route.lazy)
      ve = { type: $e.error, error: Ct(405, { method: j.method, pathname: W.pathname, routeId: me.route.id }) };
    else if (((ve = (await Z('action', j, [me], oe))[0]), j.signal.aborted)) return { shortCircuited: !0 };
    if (Fn(ve)) {
      let _e;
      return (
        fe && fe.replace != null
          ? (_e = fe.replace)
          : (_e = Ks(ve.response.headers.get('Location'), new URL(j.url), l) === m.location.pathname + m.location.search),
        await ae(j, ve, { submission: X, replace: _e }),
        { shortCircuited: !0 }
      );
    }
    if (An(ve)) throw Ct(400, { type: 'defer-action' });
    if (Ot(ve)) {
      let _e = Jr(oe, me.route.id);
      return (fe && fe.replace) !== !0 && (S = Ye.Push), { pendingActionResult: [_e.route.id, ve] };
    }
    return { pendingActionResult: [me.route.id, ve] };
  }
  async function I(j, W, X, oe, fe, Oe, ve, me, _e, Ce) {
    let it = oe || $i(W, fe),
      ot = fe || Oe || nl(it),
      xe = s || o,
      [Ve, tt] = Ws(
        e.history,
        m,
        X,
        ot,
        W,
        d.v7_partialHydration && me === !0,
        d.unstable_skipActionErrorRevalidation,
        x,
        D,
        G,
        $,
        H,
        P,
        xe,
        l,
        Ce,
      );
    if (
      (Xn(Re => !(X && X.some(ut => ut.route.id === Re)) || (Ve && Ve.some(ut => ut.route.id === Re))),
      (ne = ++K),
      Ve.length === 0 && tt.length === 0)
    ) {
      let Re = Ue();
      return (
        Le(
          W,
          Ge(
            { matches: X, loaderData: {}, errors: Ce && Ot(Ce[1]) ? { [Ce[0]]: Ce[1].error } : null },
            Qs(Ce),
            Re ? { fetchers: new Map(m.fetchers) } : {},
          ),
          { flushSync: _e },
        ),
        { shortCircuited: !0 }
      );
    }
    if (!U && (!d.v7_partialHydration || !me)) {
      tt.forEach(ut => {
        let wt = m.fetchers.get(ut.key),
          st = Br(void 0, wt ? wt.data : void 0);
        m.fetchers.set(ut.key, st);
      });
      let Re;
      Ce && !Ot(Ce[1])
        ? (Re = { [Ce[0]]: Ce[1].data })
        : m.actionData && (Object.keys(m.actionData).length === 0 ? (Re = null) : (Re = m.actionData)),
        de(Ge({ navigation: it }, Re !== void 0 ? { actionData: Re } : {}, tt.length > 0 ? { fetchers: new Map(m.fetchers) } : {}), {
          flushSync: _e,
        });
    }
    tt.forEach(Re => {
      z.has(Re.key) && ge(Re.key), Re.controller && z.set(Re.key, Re.controller);
    });
    let Mr = () => tt.forEach(Re => ge(Re.key));
    k && k.signal.addEventListener('abort', Mr);
    let { loaderResults: pn, fetcherResults: Jn } = await ue(m.matches, X, Ve, tt, j);
    if (j.signal.aborted) return { shortCircuited: !0 };
    k && k.signal.removeEventListener('abort', Mr), tt.forEach(Re => z.delete(Re.key));
    let Yn = el([...pn, ...Jn]);
    if (Yn) {
      if (Yn.idx >= Ve.length) {
        let Re = tt[Yn.idx - Ve.length].key;
        P.add(Re);
      }
      return await ae(j, Yn.result, { replace: ve }), { shortCircuited: !0 };
    }
    let { loaderData: Qn, errors: Ut } = Js(m, X, Ve, pn, Ce, tt, Jn, Y);
    Y.forEach((Re, ut) => {
      Re.subscribe(wt => {
        (wt || Re.done) && Y.delete(ut);
      });
    }),
      d.v7_partialHydration &&
        me &&
        m.errors &&
        Object.entries(m.errors)
          .filter(Re => {
            let [ut] = Re;
            return !Ve.some(wt => wt.route.id === ut);
          })
          .forEach(Re => {
            let [ut, wt] = Re;
            Ut = Object.assign(Ut || {}, { [ut]: wt });
          });
    let Ia = Ue(),
      Ra = dt(ne),
      Na = Ia || Ra || tt.length > 0;
    return Ge({ loaderData: Qn, errors: Ut }, Na ? { fetchers: new Map(m.fetchers) } : {});
  }
  function F(j, W, X, oe) {
    if (r)
      throw new Error(
        "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.",
      );
    z.has(j) && ge(j);
    let fe = (oe && oe.unstable_flushSync) === !0,
      Oe = s || o,
      ve = bo(m.location, m.matches, l, d.v7_prependBasename, X, d.v7_relativeSplatPath, W, oe?.relative),
      me = sr(Oe, ve, l);
    if (!me) {
      Ee(j, W, Ct(404, { pathname: ve }), { flushSync: fe });
      return;
    }
    let { path: _e, submission: Ce, error: it } = zs(d.v7_normalizeFormMethod, !0, ve, oe);
    if (it) {
      Ee(j, W, it, { flushSync: fe });
      return;
    }
    let ot = xo(me, _e);
    if (((E = (oe && oe.preventScrollReset) === !0), Ce && It(Ce.formMethod))) {
      V(j, W, _e, ot, me, fe, Ce);
      return;
    }
    H.set(j, { routeId: W, path: _e }), ee(j, W, _e, ot, me, fe, Ce);
  }
  async function V(j, W, X, oe, fe, Oe, ve) {
    if ((le(), H.delete(j), !oe.route.action && !oe.route.lazy)) {
      let st = Ct(405, { method: ve.formMethod, pathname: X, routeId: W });
      Ee(j, W, st, { flushSync: Oe });
      return;
    }
    let me = m.fetchers.get(j);
    be(j, rp(ve, me), { flushSync: Oe });
    let _e = new AbortController(),
      Ce = Zn(e.history, X, _e.signal, ve);
    z.set(j, _e);
    let it = K,
      xe = (await Z('action', Ce, [oe], fe))[0];
    if (Ce.signal.aborted) {
      z.get(j) === _e && z.delete(j);
      return;
    }
    if (d.v7_fetcherPersist && $.has(j)) {
      if (Fn(xe) || Ot(xe)) {
        be(j, bn(void 0));
        return;
      }
    } else {
      if (Fn(xe))
        if ((z.delete(j), ne > it)) {
          be(j, bn(void 0));
          return;
        } else return P.add(j), be(j, Br(ve)), ae(Ce, xe, { fetcherSubmission: ve });
      if (Ot(xe)) {
        Ee(j, W, xe.error);
        return;
      }
    }
    if (An(xe)) throw Ct(400, { type: 'defer-action' });
    let Ve = m.navigation.location || m.location,
      tt = Zn(e.history, Ve, _e.signal),
      Mr = s || o,
      pn = m.navigation.state !== 'idle' ? sr(Mr, m.navigation.location, l) : m.matches;
    Se(pn, "Didn't find any matches after fetcher action");
    let Jn = ++K;
    C.set(j, Jn);
    let Yn = Br(ve, xe.data);
    m.fetchers.set(j, Yn);
    let [Qn, Ut] = Ws(e.history, m, pn, ve, Ve, !1, d.unstable_skipActionErrorRevalidation, x, D, G, $, H, P, Mr, l, [oe.route.id, xe]);
    Ut.filter(st => st.key !== j).forEach(st => {
      let Dr = st.key,
        Bs = m.fetchers.get(Dr),
        af = Br(void 0, Bs ? Bs.data : void 0);
      m.fetchers.set(Dr, af), z.has(Dr) && ge(Dr), st.controller && z.set(Dr, st.controller);
    }),
      de({ fetchers: new Map(m.fetchers) });
    let Ia = () => Ut.forEach(st => ge(st.key));
    _e.signal.addEventListener('abort', Ia);
    let { loaderResults: Ra, fetcherResults: Na } = await ue(m.matches, pn, Qn, Ut, tt);
    if (_e.signal.aborted) return;
    _e.signal.removeEventListener('abort', Ia), C.delete(j), z.delete(j), Ut.forEach(st => z.delete(st.key));
    let Re = el([...Ra, ...Na]);
    if (Re) {
      if (Re.idx >= Qn.length) {
        let st = Ut[Re.idx - Qn.length].key;
        P.add(st);
      }
      return ae(tt, Re.result);
    }
    let { loaderData: ut, errors: wt } = Js(m, m.matches, Qn, Ra, void 0, Ut, Na, Y);
    if (m.fetchers.has(j)) {
      let st = bn(xe.data);
      m.fetchers.set(j, st);
    }
    dt(Jn),
      m.navigation.state === 'loading' && Jn > ne
        ? (Se(S, 'Expected pending action'),
          k && k.abort(),
          Le(m.navigation.location, { matches: pn, loaderData: ut, errors: wt, fetchers: new Map(m.fetchers) }))
        : (de({ errors: wt, loaderData: Ys(m.loaderData, ut, pn, wt), fetchers: new Map(m.fetchers) }), (x = !1));
  }
  async function ee(j, W, X, oe, fe, Oe, ve) {
    let me = m.fetchers.get(j);
    be(j, Br(ve, me ? me.data : void 0), { flushSync: Oe });
    let _e = new AbortController(),
      Ce = Zn(e.history, X, _e.signal);
    z.set(j, _e);
    let it = K,
      xe = (await Z('loader', Ce, [oe], fe))[0];
    if ((An(xe) && (xe = (await Mc(xe, Ce.signal, !0)) || xe), z.get(j) === _e && z.delete(j), !Ce.signal.aborted)) {
      if ($.has(j)) {
        be(j, bn(void 0));
        return;
      }
      if (Fn(xe))
        if (ne > it) {
          be(j, bn(void 0));
          return;
        } else {
          P.add(j), await ae(Ce, xe);
          return;
        }
      if (Ot(xe)) {
        Ee(j, W, xe.error);
        return;
      }
      Se(!An(xe), 'Unhandled fetcher deferred data'), be(j, bn(xe.data));
    }
  }
  async function ae(j, W, X) {
    let { submission: oe, fetcherSubmission: fe, replace: Oe } = X === void 0 ? {} : X;
    W.response.headers.has('X-Remix-Revalidate') && (x = !0);
    let ve = W.response.headers.get('Location');
    Se(ve, 'Expected a Location header on the redirect Response'), (ve = Ks(ve, new URL(j.url), l));
    let me = ra(m.location, ve, { _isRedirect: !0 });
    if (n) {
      let Ve = !1;
      if (W.response.headers.has('X-Remix-Reload-Document')) Ve = !0;
      else if (qo.test(ve)) {
        const tt = e.history.createURL(ve);
        Ve = tt.origin !== t.location.origin || ha(tt.pathname, l) == null;
      }
      if (Ve) {
        Oe ? t.location.replace(ve) : t.location.assign(ve);
        return;
      }
    }
    k = null;
    let _e = Oe === !0 ? Ye.Replace : Ye.Push,
      { formMethod: Ce, formAction: it, formEncType: ot } = m.navigation;
    !oe && !fe && Ce && it && ot && (oe = nl(m.navigation));
    let xe = oe || fe;
    if (Bf.has(W.response.status) && xe && It(xe.formMethod))
      await Te(_e, me, { submission: Ge({}, xe, { formAction: ve }), preventScrollReset: E });
    else {
      let Ve = $i(me, oe);
      await Te(_e, me, { overrideNavigation: Ve, fetcherSubmission: fe, preventScrollReset: E });
    }
  }
  async function Z(j, W, X, oe) {
    try {
      let fe = await qf(u, j, W, X, oe, i, a);
      return await Promise.all(
        fe.map((Oe, ve) => {
          if (Zf(Oe)) {
            let me = Oe.result;
            return { type: $e.redirect, response: Jf(me, W, X[ve].route.id, oe, l, d.v7_relativeSplatPath) };
          }
          return Xf(Oe);
        }),
      );
    } catch (fe) {
      return X.map(() => ({ type: $e.error, error: fe }));
    }
  }
  async function ue(j, W, X, oe, fe) {
    let [Oe, ...ve] = await Promise.all([
      X.length ? Z('loader', fe, X, W) : [],
      ...oe.map(me => {
        if (me.matches && me.match && me.controller) {
          let _e = Zn(e.history, me.path, me.controller.signal);
          return Z('loader', _e, [me.match], me.matches).then(Ce => Ce[0]);
        } else return Promise.resolve({ type: $e.error, error: Ct(404, { pathname: me.path }) });
      }),
    ]);
    return (
      await Promise.all([
        tl(
          j,
          X,
          Oe,
          Oe.map(() => fe.signal),
          !1,
          m.loaderData,
        ),
        tl(
          j,
          oe.map(me => me.match),
          ve,
          oe.map(me => (me.controller ? me.controller.signal : null)),
          !0,
        ),
      ]),
      { loaderResults: Oe, fetcherResults: ve }
    );
  }
  function le() {
    (x = !0),
      D.push(...Xn()),
      H.forEach((j, W) => {
        z.has(W) && (G.push(W), ge(W));
      });
  }
  function be(j, W, X) {
    X === void 0 && (X = {}), m.fetchers.set(j, W), de({ fetchers: new Map(m.fetchers) }, { flushSync: (X && X.flushSync) === !0 });
  }
  function Ee(j, W, X, oe) {
    oe === void 0 && (oe = {});
    let fe = Jr(m.matches, W);
    ht(j), de({ errors: { [fe.route.id]: X }, fetchers: new Map(m.fetchers) }, { flushSync: (oe && oe.flushSync) === !0 });
  }
  function et(j) {
    return d.v7_fetcherPersist && (q.set(j, (q.get(j) || 0) + 1), $.has(j) && $.delete(j)), m.fetchers.get(j) || Uf;
  }
  function ht(j) {
    let W = m.fetchers.get(j);
    z.has(j) && !(W && W.state === 'loading' && C.has(j)) && ge(j),
      H.delete(j),
      C.delete(j),
      P.delete(j),
      $.delete(j),
      m.fetchers.delete(j);
  }
  function jt(j) {
    if (d.v7_fetcherPersist) {
      let W = (q.get(j) || 0) - 1;
      W <= 0 ? (q.delete(j), $.add(j)) : q.set(j, W);
    } else ht(j);
    de({ fetchers: new Map(m.fetchers) });
  }
  function ge(j) {
    let W = z.get(j);
    Se(W, 'Expected fetch controller: ' + j), W.abort(), z.delete(j);
  }
  function Ie(j) {
    for (let W of j) {
      let X = et(W),
        oe = bn(X.data);
      m.fetchers.set(W, oe);
    }
  }
  function Ue() {
    let j = [],
      W = !1;
    for (let X of P) {
      let oe = m.fetchers.get(X);
      Se(oe, 'Expected fetcher: ' + X), oe.state === 'loading' && (P.delete(X), j.push(X), (W = !0));
    }
    return Ie(j), W;
  }
  function dt(j) {
    let W = [];
    for (let [X, oe] of C)
      if (oe < j) {
        let fe = m.fetchers.get(X);
        Se(fe, 'Expected fetcher: ' + X), fe.state === 'loading' && (ge(X), C.delete(X), W.push(X));
      }
    return Ie(W), W.length > 0;
  }
  function kt(j, W) {
    let X = m.blockers.get(j) || jr;
    return J.get(j) !== W && J.set(j, W), X;
  }
  function Lt(j) {
    m.blockers.delete(j), J.delete(j);
  }
  function Bt(j, W) {
    let X = m.blockers.get(j) || jr;
    Se(
      (X.state === 'unblocked' && W.state === 'blocked') ||
        (X.state === 'blocked' && W.state === 'blocked') ||
        (X.state === 'blocked' && W.state === 'proceeding') ||
        (X.state === 'blocked' && W.state === 'unblocked') ||
        (X.state === 'proceeding' && W.state === 'unblocked'),
      'Invalid blocker state transition: ' + X.state + ' -> ' + W.state,
    );
    let oe = new Map(m.blockers);
    oe.set(j, W), de({ blockers: oe });
  }
  function fn(j) {
    let { currentLocation: W, nextLocation: X, historyAction: oe } = j;
    if (J.size === 0) return;
    J.size > 1 && mr(!1, 'A router only supports one blocker at a time');
    let fe = Array.from(J.entries()),
      [Oe, ve] = fe[fe.length - 1],
      me = m.blockers.get(Oe);
    if (!(me && me.state === 'proceeding') && ve({ currentLocation: W, nextLocation: X, historyAction: oe })) return Oe;
  }
  function Xn(j) {
    let W = [];
    return (
      Y.forEach((X, oe) => {
        (!j || j(oe)) && (X.cancel(), W.push(oe), Y.delete(oe));
      }),
      W
    );
  }
  function ka(j, W, X) {
    if (((h = j), (v = W), (b = X || null), !w && m.navigation === Hi)) {
      w = !0;
      let oe = Be(m.location, m.matches);
      oe != null && de({ restoreScrollPosition: oe });
    }
    return () => {
      (h = null), (v = null), (b = null);
    };
  }
  function La(j, W) {
    return (
      (b &&
        b(
          j,
          W.map(oe => vf(oe, m.loaderData)),
        )) ||
      j.key
    );
  }
  function we(j, W) {
    if (h && v) {
      let X = La(j, W);
      h[X] = v();
    }
  }
  function Be(j, W) {
    if (h) {
      let X = La(j, W),
        oe = h[X];
      if (typeof oe == 'number') return oe;
    }
    return null;
  }
  function Qt(j) {
    (i = {}), (s = vo(j, a, void 0, i));
  }
  return (
    (g = {
      get basename() {
        return l;
      },
      get future() {
        return d;
      },
      get state() {
        return m;
      },
      get routes() {
        return o;
      },
      get window() {
        return t;
      },
      initialize: re,
      subscribe: se,
      enableScrollRestoration: ka,
      navigate: je,
      fetch: F,
      revalidate: Me,
      createHref: j => e.history.createHref(j),
      encodeLocation: j => e.history.encodeLocation(j),
      getFetcher: et,
      deleteFetcher: jt,
      dispose: te,
      getBlocker: kt,
      deleteBlocker: Lt,
      _internalFetchControllers: z,
      _internalActiveDeferreds: Y,
      _internalSetRoutes: Qt,
    }),
    g
  );
}
function $f(e) {
  return e != null && (('formData' in e && e.formData != null) || ('body' in e && e.body !== void 0));
}
function bo(e, t, n, r, a, i, o, s) {
  let l, u;
  if (o) {
    l = [];
    for (let p of t)
      if ((l.push(p), p.route.id === o)) {
        u = p;
        break;
      }
  } else (l = t), (u = t[t.length - 1]);
  let d = Wo(a || '.', zo(l, i), ha(e.pathname, n) || e.pathname, s === 'path');
  return (
    a == null && ((d.search = e.search), (d.hash = e.hash)),
    (a == null || a === '' || a === '.') &&
      u &&
      u.route.index &&
      !Ko(d.search) &&
      (d.search = d.search ? d.search.replace(/^\?/, '?index&') : '?index'),
    r && n !== '/' && (d.pathname = d.pathname === '/' ? n : rn([n, d.pathname])),
    Dn(d)
  );
}
function zs(e, t, n, r) {
  if (!r || !$f(r)) return { path: n };
  if (r.formMethod && !tp(r.formMethod)) return { path: n, error: Ct(405, { method: r.formMethod }) };
  let a = () => ({ path: n, error: Ct(400, { type: 'invalid-body' }) }),
    i = r.formMethod || 'get',
    o = e ? i.toUpperCase() : i.toLowerCase(),
    s = Ac(n);
  if (r.body !== void 0) {
    if (r.formEncType === 'text/plain') {
      if (!It(o)) return a();
      let f =
        typeof r.body == 'string'
          ? r.body
          : r.body instanceof FormData || r.body instanceof URLSearchParams
            ? Array.from(r.body.entries()).reduce((h, b) => {
                let [v, w] = b;
                return (
                  '' +
                  h +
                  v +
                  '=' +
                  w +
                  `
`
                );
              }, '')
            : String(r.body);
      return { path: n, submission: { formMethod: o, formAction: s, formEncType: r.formEncType, formData: void 0, json: void 0, text: f } };
    } else if (r.formEncType === 'application/json') {
      if (!It(o)) return a();
      try {
        let f = typeof r.body == 'string' ? JSON.parse(r.body) : r.body;
        return {
          path: n,
          submission: { formMethod: o, formAction: s, formEncType: r.formEncType, formData: void 0, json: f, text: void 0 },
        };
      } catch {
        return a();
      }
    }
  }
  Se(typeof FormData == 'function', 'FormData is not available in this environment');
  let l, u;
  if (r.formData) (l = yo(r.formData)), (u = r.formData);
  else if (r.body instanceof FormData) (l = yo(r.body)), (u = r.body);
  else if (r.body instanceof URLSearchParams) (l = r.body), (u = Xs(l));
  else if (r.body == null) (l = new URLSearchParams()), (u = new FormData());
  else
    try {
      (l = new URLSearchParams(r.body)), (u = Xs(l));
    } catch {
      return a();
    }
  let d = {
    formMethod: o,
    formAction: s,
    formEncType: (r && r.formEncType) || 'application/x-www-form-urlencoded',
    formData: u,
    json: void 0,
    text: void 0,
  };
  if (It(d.formMethod)) return { path: n, submission: d };
  let p = Ln(n);
  return t && p.search && Ko(p.search) && l.append('index', ''), (p.search = '?' + l), { path: Dn(p), submission: d };
}
function zf(e, t) {
  let n = e;
  if (t) {
    let r = e.findIndex(a => a.route.id === t);
    r >= 0 && (n = e.slice(0, r));
  }
  return n;
}
function Ws(e, t, n, r, a, i, o, s, l, u, d, p, f, h, b, v) {
  let w = v ? (Ot(v[1]) ? v[1].error : v[1].data) : void 0,
    T = e.createURL(t.location),
    N = e.createURL(a),
    B = v && Ot(v[1]) ? v[0] : void 0,
    A = B ? zf(n, B) : n,
    L = v ? v[1].statusCode : void 0,
    g = o && L && L >= 400,
    m = A.filter((E, k) => {
      let { route: y } = E;
      if (y.lazy) return !0;
      if (y.loader == null) return !1;
      if (i)
        return typeof y.loader != 'function' || y.loader.hydrate
          ? !0
          : t.loaderData[y.id] === void 0 && (!t.errors || t.errors[y.id] === void 0);
      if (Wf(t.loaderData, t.matches[k], E) || l.some(U => U === E.route.id)) return !0;
      let _ = t.matches[k],
        O = E;
      return Gs(
        E,
        Ge({ currentUrl: T, currentParams: _.params, nextUrl: N, nextParams: O.params }, r, {
          actionResult: w,
          unstable_actionStatus: L,
          defaultShouldRevalidate: g ? !1 : s || T.pathname + T.search === N.pathname + N.search || T.search !== N.search || Pc(_, O),
        }),
      );
    }),
    S = [];
  return (
    p.forEach((E, k) => {
      if (i || !n.some(x => x.route.id === E.routeId) || d.has(k)) return;
      let y = sr(h, E.path, b);
      if (!y) {
        S.push({ key: k, routeId: E.routeId, path: E.path, matches: null, match: null, controller: null });
        return;
      }
      let _ = t.fetchers.get(k),
        O = xo(y, E.path),
        U = !1;
      f.has(k)
        ? (U = !1)
        : u.includes(k)
          ? (U = !0)
          : _ && _.state !== 'idle' && _.data === void 0
            ? (U = s)
            : (U = Gs(
                O,
                Ge(
                  { currentUrl: T, currentParams: t.matches[t.matches.length - 1].params, nextUrl: N, nextParams: n[n.length - 1].params },
                  r,
                  { actionResult: w, unstable_actionStatus: L, defaultShouldRevalidate: g ? !1 : s },
                ),
              )),
        U && S.push({ key: k, routeId: E.routeId, path: E.path, matches: y, match: O, controller: new AbortController() });
    }),
    [m, S]
  );
}
function Wf(e, t, n) {
  let r = !t || n.route.id !== t.route.id,
    a = e[n.route.id] === void 0;
  return r || a;
}
function Pc(e, t) {
  let n = e.route.path;
  return e.pathname !== t.pathname || (n != null && n.endsWith('*') && e.params['*'] !== t.params['*']);
}
function Gs(e, t) {
  if (e.route.shouldRevalidate) {
    let n = e.route.shouldRevalidate(t);
    if (typeof n == 'boolean') return n;
  }
  return t.defaultShouldRevalidate;
}
async function qs(e, t, n) {
  if (!e.lazy) return;
  let r = await e.lazy();
  if (!e.lazy) return;
  let a = n[e.id];
  Se(a, 'No route found in manifest');
  let i = {};
  for (let o in r) {
    let l = a[o] !== void 0 && o !== 'hasErrorBoundary';
    mr(
      !l,
      'Route "' +
        a.id +
        '" has a static property "' +
        o +
        '" defined but its lazy function is also returning a value for this property. ' +
        ('The lazy route property "' + o + '" will be ignored.'),
    ),
      !l && !hf.has(o) && (i[o] = r[o]);
  }
  Object.assign(a, i), Object.assign(a, Ge({}, t(a), { lazy: void 0 }));
}
function Gf(e) {
  return Promise.all(e.matches.map(t => t.resolve()));
}
async function qf(e, t, n, r, a, i, o, s) {
  let l = r.reduce((p, f) => p.add(f.route.id), new Set()),
    u = new Set(),
    d = await e({
      matches: a.map(p => {
        let f = l.has(p.route.id);
        return Ge({}, p, {
          shouldLoad: f,
          resolve: b => (u.add(p.route.id), f ? Kf(t, n, p, i, o, b, s) : Promise.resolve({ type: $e.data, result: void 0 })),
        });
      }),
      request: n,
      params: a[0].params,
      context: s,
    });
  return (
    a.forEach(p =>
      Se(
        u.has(p.route.id),
        '`match.resolve()` was not called for route id "' +
          p.route.id +
          '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.',
      ),
    ),
    d.filter((p, f) => l.has(a[f].route.id))
  );
}
async function Kf(e, t, n, r, a, i, o) {
  let s,
    l,
    u = d => {
      let p,
        f = new Promise((v, w) => (p = w));
      (l = () => p()), t.signal.addEventListener('abort', l);
      let h = v =>
          typeof d != 'function'
            ? Promise.reject(
                new Error(
                  'You cannot call the handler for a route which defines a boolean ' + ('"' + e + '" [routeId: ' + n.route.id + ']'),
                ),
              )
            : d({ request: t, params: n.params, context: o }, ...(v !== void 0 ? [v] : [])),
        b;
      return (
        i
          ? (b = i(v => h(v)))
          : (b = (async () => {
              try {
                return { type: 'data', result: await h() };
              } catch (v) {
                return { type: 'error', result: v };
              }
            })()),
        Promise.race([b, f])
      );
    };
  try {
    let d = n.route[e];
    if (n.route.lazy)
      if (d) {
        let p,
          [f] = await Promise.all([
            u(d).catch(h => {
              p = h;
            }),
            qs(n.route, a, r),
          ]);
        if (p !== void 0) throw p;
        s = f;
      } else if ((await qs(n.route, a, r), (d = n.route[e]), d)) s = await u(d);
      else if (e === 'action') {
        let p = new URL(t.url),
          f = p.pathname + p.search;
        throw Ct(405, { method: t.method, pathname: f, routeId: n.route.id });
      } else return { type: $e.data, result: void 0 };
    else if (d) s = await u(d);
    else {
      let p = new URL(t.url),
        f = p.pathname + p.search;
      throw Ct(404, { pathname: f });
    }
    Se(
      s.result !== void 0,
      'You defined ' +
        (e === 'action' ? 'an action' : 'a loader') +
        ' for route ' +
        ('"' + n.route.id + '" but didn\'t return anything from your `' + e + '` ') +
        'function. Please return a value or `null`.',
    );
  } catch (d) {
    return { type: $e.error, result: d };
  } finally {
    l && t.signal.removeEventListener('abort', l);
  }
  return s;
}
async function Xf(e) {
  let { result: t, type: n, status: r } = e;
  if (Fc(t)) {
    let o;
    try {
      let s = t.headers.get('Content-Type');
      s && /\bapplication\/json\b/.test(s) ? (t.body == null ? (o = null) : (o = await t.json())) : (o = await t.text());
    } catch (s) {
      return { type: $e.error, error: s };
    }
    return n === $e.error
      ? { type: $e.error, error: new Go(t.status, t.statusText, o), statusCode: t.status, headers: t.headers }
      : { type: $e.data, data: o, statusCode: t.status, headers: t.headers };
  }
  if (n === $e.error) return { type: $e.error, error: t, statusCode: Ei(t) ? t.status : r };
  if (ep(t)) {
    var a, i;
    return {
      type: $e.deferred,
      deferredData: t,
      statusCode: (a = t.init) == null ? void 0 : a.status,
      headers: ((i = t.init) == null ? void 0 : i.headers) && new Headers(t.init.headers),
    };
  }
  return { type: $e.data, data: t, statusCode: r };
}
function Jf(e, t, n, r, a, i) {
  let o = e.headers.get('Location');
  if ((Se(o, 'Redirects returned/thrown from loaders/actions must have a Location header'), !qo.test(o))) {
    let s = r.slice(0, r.findIndex(l => l.route.id === n) + 1);
    (o = bo(new URL(t.url), s, a, !0, o, i)), e.headers.set('Location', o);
  }
  return e;
}
function Ks(e, t, n) {
  if (qo.test(e)) {
    let r = e,
      a = r.startsWith('//') ? new URL(t.protocol + r) : new URL(r),
      i = ha(a.pathname, n) != null;
    if (a.origin === t.origin && i) return a.pathname + a.search + a.hash;
  }
  return e;
}
function Zn(e, t, n, r) {
  let a = e.createURL(Ac(t)).toString(),
    i = { signal: n };
  if (r && It(r.formMethod)) {
    let { formMethod: o, formEncType: s } = r;
    (i.method = o.toUpperCase()),
      s === 'application/json'
        ? ((i.headers = new Headers({ 'Content-Type': s })), (i.body = JSON.stringify(r.json)))
        : s === 'text/plain'
          ? (i.body = r.text)
          : s === 'application/x-www-form-urlencoded' && r.formData
            ? (i.body = yo(r.formData))
            : (i.body = r.formData);
  }
  return new Request(a, i);
}
function yo(e) {
  let t = new URLSearchParams();
  for (let [n, r] of e.entries()) t.append(n, typeof r == 'string' ? r : r.name);
  return t;
}
function Xs(e) {
  let t = new FormData();
  for (let [n, r] of e.entries()) t.append(n, r);
  return t;
}
function Yf(e, t, n, r, a, i) {
  let o = {},
    s = null,
    l,
    u = !1,
    d = {},
    p = r && Ot(r[1]) ? r[1].error : void 0;
  return (
    n.forEach((f, h) => {
      let b = t[h].route.id;
      if ((Se(!Fn(f), 'Cannot handle redirect results in processLoaderData'), Ot(f))) {
        let v = f.error;
        p !== void 0 && ((v = p), (p = void 0)), (s = s || {});
        {
          let w = Jr(e, b);
          s[w.route.id] == null && (s[w.route.id] = v);
        }
        (o[b] = void 0), u || ((u = !0), (l = Ei(f.error) ? f.error.status : 500)), f.headers && (d[b] = f.headers);
      } else
        An(f)
          ? (a.set(b, f.deferredData),
            (o[b] = f.deferredData.data),
            f.statusCode != null && f.statusCode !== 200 && !u && (l = f.statusCode),
            f.headers && (d[b] = f.headers))
          : ((o[b] = f.data), f.statusCode && f.statusCode !== 200 && !u && (l = f.statusCode), f.headers && (d[b] = f.headers));
    }),
    p !== void 0 && r && ((s = { [r[0]]: p }), (o[r[0]] = void 0)),
    { loaderData: o, errors: s, statusCode: l || 200, loaderHeaders: d }
  );
}
function Js(e, t, n, r, a, i, o, s) {
  let { loaderData: l, errors: u } = Yf(t, n, r, a, s);
  for (let d = 0; d < i.length; d++) {
    let { key: p, match: f, controller: h } = i[d];
    Se(o !== void 0 && o[d] !== void 0, 'Did not find corresponding fetcher result');
    let b = o[d];
    if (!(h && h.signal.aborted))
      if (Ot(b)) {
        let v = Jr(e.matches, f?.route.id);
        (u && u[v.route.id]) || (u = Ge({}, u, { [v.route.id]: b.error })), e.fetchers.delete(p);
      } else if (Fn(b)) Se(!1, 'Unhandled fetcher revalidation redirect');
      else if (An(b)) Se(!1, 'Unhandled fetcher deferred data');
      else {
        let v = bn(b.data);
        e.fetchers.set(p, v);
      }
  }
  return { loaderData: l, errors: u };
}
function Ys(e, t, n, r) {
  let a = Ge({}, t);
  for (let i of n) {
    let o = i.route.id;
    if (
      (t.hasOwnProperty(o) ? t[o] !== void 0 && (a[o] = t[o]) : e[o] !== void 0 && i.route.loader && (a[o] = e[o]),
      r && r.hasOwnProperty(o))
    )
      break;
  }
  return a;
}
function Qs(e) {
  return e ? (Ot(e[1]) ? { actionData: {} } : { actionData: { [e[0]]: e[1].data } }) : {};
}
function Jr(e, t) {
  return (t ? e.slice(0, e.findIndex(r => r.route.id === t) + 1) : [...e]).reverse().find(r => r.route.hasErrorBoundary === !0) || e[0];
}
function Zs(e) {
  let t = e.length === 1 ? e[0] : e.find(n => n.index || !n.path || n.path === '/') || { id: '__shim-error-route__' };
  return { matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }], route: t };
}
function Ct(e, t) {
  let { pathname: n, routeId: r, method: a, type: i } = t === void 0 ? {} : t,
    o = 'Unknown Server Error',
    s = 'Unknown @remix-run/router error';
  return (
    e === 400
      ? ((o = 'Bad Request'),
        a && n && r
          ? (s =
              'You made a ' +
              a +
              ' request to "' +
              n +
              '" but ' +
              ('did not provide a `loader` for route "' + r + '", ') +
              'so there is no way to handle the request.')
          : i === 'defer-action'
            ? (s = 'defer() is not supported in actions')
            : i === 'invalid-body' && (s = 'Unable to encode submission body'))
      : e === 403
        ? ((o = 'Forbidden'), (s = 'Route "' + r + '" does not match URL "' + n + '"'))
        : e === 404
          ? ((o = 'Not Found'), (s = 'No route matches URL "' + n + '"'))
          : e === 405 &&
            ((o = 'Method Not Allowed'),
            a && n && r
              ? (s =
                  'You made a ' +
                  a.toUpperCase() +
                  ' request to "' +
                  n +
                  '" but ' +
                  ('did not provide an `action` for route "' + r + '", ') +
                  'so there is no way to handle the request.')
              : a && (s = 'Invalid request method "' + a.toUpperCase() + '"')),
    new Go(e || 500, o, new Error(s), !0)
  );
}
function el(e) {
  for (let t = e.length - 1; t >= 0; t--) {
    let n = e[t];
    if (Fn(n)) return { result: n, idx: t };
  }
}
function Ac(e) {
  let t = typeof e == 'string' ? Ln(e) : e;
  return Dn(Ge({}, t, { hash: '' }));
}
function Qf(e, t) {
  return e.pathname !== t.pathname || e.search !== t.search ? !1 : e.hash === '' ? t.hash !== '' : e.hash === t.hash ? !0 : t.hash !== '';
}
function Zf(e) {
  return Fc(e.result) && jf.has(e.result.status);
}
function An(e) {
  return e.type === $e.deferred;
}
function Ot(e) {
  return e.type === $e.error;
}
function Fn(e) {
  return (e && e.type) === $e.redirect;
}
function ep(e) {
  let t = e;
  return (
    t &&
    typeof t == 'object' &&
    typeof t.data == 'object' &&
    typeof t.subscribe == 'function' &&
    typeof t.cancel == 'function' &&
    typeof t.resolveData == 'function'
  );
}
function Fc(e) {
  return e != null && typeof e.status == 'number' && typeof e.statusText == 'string' && typeof e.headers == 'object' && typeof e.body < 'u';
}
function tp(e) {
  return Df.has(e.toLowerCase());
}
function It(e) {
  return Ff.has(e.toLowerCase());
}
async function tl(e, t, n, r, a, i) {
  for (let o = 0; o < n.length; o++) {
    let s = n[o],
      l = t[o];
    if (!l) continue;
    let u = e.find(p => p.route.id === l.route.id),
      d = u != null && !Pc(u, l) && (i && i[l.route.id]) !== void 0;
    if (An(s) && (a || d)) {
      let p = r[o];
      Se(p, 'Expected an AbortSignal for revalidating fetcher deferred result'),
        await Mc(s, p, a).then(f => {
          f && (n[o] = f || n[o]);
        });
    }
  }
}
async function Mc(e, t, n) {
  if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
    if (n)
      try {
        return { type: $e.data, data: e.deferredData.unwrappedData };
      } catch (a) {
        return { type: $e.error, error: a };
      }
    return { type: $e.data, data: e.deferredData.data };
  }
}
function Ko(e) {
  return new URLSearchParams(e).getAll('index').some(t => t === '');
}
function xo(e, t) {
  let n = typeof t == 'string' ? Ln(t).search : t.search;
  if (e[e.length - 1].route.index && Ko(n || '')) return e[e.length - 1];
  let r = Rc(e);
  return r[r.length - 1];
}
function nl(e) {
  let { formMethod: t, formAction: n, formEncType: r, text: a, formData: i, json: o } = e;
  if (!(!t || !n || !r)) {
    if (a != null) return { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: void 0, text: a };
    if (i != null) return { formMethod: t, formAction: n, formEncType: r, formData: i, json: void 0, text: void 0 };
    if (o !== void 0) return { formMethod: t, formAction: n, formEncType: r, formData: void 0, json: o, text: void 0 };
  }
}
function $i(e, t) {
  return t
    ? {
        state: 'loading',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
      }
    : {
        state: 'loading',
        location: e,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
      };
}
function np(e, t) {
  return {
    state: 'submitting',
    location: e,
    formMethod: t.formMethod,
    formAction: t.formAction,
    formEncType: t.formEncType,
    formData: t.formData,
    json: t.json,
    text: t.text,
  };
}
function Br(e, t) {
  return e
    ? {
        state: 'loading',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t,
      }
    : {
        state: 'loading',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: t,
      };
}
function rp(e, t) {
  return {
    state: 'submitting',
    formMethod: e.formMethod,
    formAction: e.formAction,
    formEncType: e.formEncType,
    formData: e.formData,
    json: e.json,
    text: e.text,
    data: t ? t.data : void 0,
  };
}
function bn(e) {
  return {
    state: 'idle',
    formMethod: void 0,
    formAction: void 0,
    formEncType: void 0,
    formData: void 0,
    json: void 0,
    text: void 0,
    data: e,
  };
}
function ap(e, t) {
  try {
    let n = e.sessionStorage.getItem(Tc);
    if (n) {
      let r = JSON.parse(n);
      for (let [a, i] of Object.entries(r || {})) i && Array.isArray(i) && t.set(a, new Set(i || []));
    }
  } catch {}
}
function ip(e, t) {
  if (t.size > 0) {
    let n = {};
    for (let [r, a] of t) n[r] = [...a];
    try {
      e.sessionStorage.setItem(Tc, JSON.stringify(n));
    } catch (r) {
      mr(!1, 'Failed to save applied view transitions in sessionStorage (' + r + ').');
    }
  }
}
/**
 * React Router v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function qa() {
  return (
    (qa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    qa.apply(this, arguments)
  );
}
const Si = c.createContext(null),
  Dc = c.createContext(null),
  Or = c.createContext(null),
  Xo = c.createContext(null),
  cn = c.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  jc = c.createContext(null);
function Bc(e, t) {
  let { relative: n } = {};
  ga() || Se(!1);
  let { basename: r, navigator: a } = c.useContext(Or),
    { hash: i, pathname: o, search: s } = Vc(e, { relative: n }),
    l = o;
  return r !== '/' && (l = o === '/' ? r : rn([r, o])), a.createHref({ pathname: l, search: s, hash: i });
}
function ga() {
  return c.useContext(Xo) != null;
}
function va() {
  return ga() || Se(!1), c.useContext(Xo).location;
}
function Uc(e) {
  c.useContext(Or).static || c.useLayoutEffect(e);
}
function op() {
  let { isDataRoute: e } = c.useContext(cn);
  return e ? yp() : sp();
}
function sp() {
  ga() || Se(!1);
  let e = c.useContext(Si),
    { basename: t, future: n, navigator: r } = c.useContext(Or),
    { matches: a } = c.useContext(cn),
    { pathname: i } = va(),
    o = JSON.stringify(zo(a, n.v7_relativeSplatPath)),
    s = c.useRef(!1);
  return (
    Uc(() => {
      s.current = !0;
    }),
    c.useCallback(
      function (u, d) {
        if ((d === void 0 && (d = {}), !s.current)) return;
        if (typeof u == 'number') {
          r.go(u);
          return;
        }
        let p = Wo(u, JSON.parse(o), i, d.relative === 'path');
        e == null && t !== '/' && (p.pathname = p.pathname === '/' ? t : rn([t, p.pathname])),
          (d.replace ? r.replace : r.push)(p, d.state, d);
      },
      [t, r, o, i, e],
    )
  );
}
const lp = c.createContext(null);
function cp(e) {
  let t = c.useContext(cn).outlet;
  return t && c.createElement(lp.Provider, { value: e }, t);
}
function Y1() {
  let { matches: e } = c.useContext(cn),
    t = e[e.length - 1];
  return t ? t.params : {};
}
function Vc(e, t) {
  let { relative: n } = t === void 0 ? {} : t,
    { future: r } = c.useContext(Or),
    { matches: a } = c.useContext(cn),
    { pathname: i } = va(),
    o = JSON.stringify(zo(a, r.v7_relativeSplatPath));
  return c.useMemo(() => Wo(e, JSON.parse(o), i, n === 'path'), [e, o, i, n]);
}
function dp(e, t, n, r) {
  ga() || Se(!1);
  let { navigator: a } = c.useContext(Or),
    { matches: i } = c.useContext(cn),
    o = i[i.length - 1],
    s = o ? o.params : {};
  o && o.pathname;
  let l = o ? o.pathnameBase : '/';
  o && o.route;
  let u = va(),
    d;
  d = u;
  let p = d.pathname || '/',
    f = p;
  if (l !== '/') {
    let v = l.replace(/^\//, '').split('/');
    f = '/' + p.replace(/^\//, '').split('/').slice(v.length).join('/');
  }
  let h = sr(e, { pathname: f });
  return hp(
    h &&
      h.map(v =>
        Object.assign({}, v, {
          params: Object.assign({}, s, v.params),
          pathname: rn([l, a.encodeLocation ? a.encodeLocation(v.pathname).pathname : v.pathname]),
          pathnameBase: v.pathnameBase === '/' ? l : rn([l, a.encodeLocation ? a.encodeLocation(v.pathnameBase).pathname : v.pathnameBase]),
        }),
      ),
    i,
    n,
    r,
  );
}
function up() {
  let e = zc(),
    t = Ei(e) ? e.status + ' ' + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    a = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' };
  return c.createElement(
    c.Fragment,
    null,
    c.createElement('h2', null, 'Unexpected Application Error!'),
    c.createElement('h3', { style: { fontStyle: 'italic' } }, t),
    n ? c.createElement('pre', { style: a }, n) : null,
    null,
  );
}
const fp = c.createElement(up, null);
class pp extends c.Component {
  constructor(t) {
    super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
  }
  static getDerivedStateFromError(t) {
    return { error: t };
  }
  static getDerivedStateFromProps(t, n) {
    return n.location !== t.location || (n.revalidation !== 'idle' && t.revalidation === 'idle')
      ? { error: t.error, location: t.location, revalidation: t.revalidation }
      : { error: t.error !== void 0 ? t.error : n.error, location: n.location, revalidation: t.revalidation || n.revalidation };
  }
  componentDidCatch(t, n) {
    console.error('React Router caught the following error during render', t, n);
  }
  render() {
    return this.state.error !== void 0
      ? c.createElement(
          cn.Provider,
          { value: this.props.routeContext },
          c.createElement(jc.Provider, { value: this.state.error, children: this.props.component }),
        )
      : this.props.children;
  }
}
function mp(e) {
  let { routeContext: t, match: n, children: r } = e,
    a = c.useContext(Si);
  return (
    a &&
      a.static &&
      a.staticContext &&
      (n.route.errorElement || n.route.ErrorBoundary) &&
      (a.staticContext._deepestRenderedBoundaryId = n.route.id),
    c.createElement(cn.Provider, { value: t }, r)
  );
}
function hp(e, t, n, r) {
  var a;
  if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
    var i;
    if ((i = n) != null && i.errors) e = n.matches;
    else return null;
  }
  let o = e,
    s = (a = n) == null ? void 0 : a.errors;
  if (s != null) {
    let d = o.findIndex(p => p.route.id && s?.[p.route.id] !== void 0);
    d >= 0 || Se(!1), (o = o.slice(0, Math.min(o.length, d + 1)));
  }
  let l = !1,
    u = -1;
  if (n && r && r.v7_partialHydration)
    for (let d = 0; d < o.length; d++) {
      let p = o[d];
      if (((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (u = d), p.route.id)) {
        let { loaderData: f, errors: h } = n,
          b = p.route.loader && f[p.route.id] === void 0 && (!h || h[p.route.id] === void 0);
        if (p.route.lazy || b) {
          (l = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((d, p, f) => {
    let h,
      b = !1,
      v = null,
      w = null;
    n &&
      ((h = s && p.route.id ? s[p.route.id] : void 0),
      (v = p.route.errorElement || fp),
      l && (u < 0 && f === 0 ? ((b = !0), (w = null)) : u === f && ((b = !0), (w = p.route.hydrateFallbackElement || null))));
    let T = t.concat(o.slice(0, f + 1)),
      N = () => {
        let B;
        return (
          h
            ? (B = v)
            : b
              ? (B = w)
              : p.route.Component
                ? (B = c.createElement(p.route.Component, null))
                : p.route.element
                  ? (B = p.route.element)
                  : (B = d),
          c.createElement(mp, { match: p, routeContext: { outlet: d, matches: T, isDataRoute: n != null }, children: B })
        );
      };
    return n && (p.route.ErrorBoundary || p.route.errorElement || f === 0)
      ? c.createElement(pp, {
          location: n.location,
          revalidation: n.revalidation,
          component: v,
          error: h,
          children: N(),
          routeContext: { outlet: null, matches: T, isDataRoute: !0 },
        })
      : N();
  }, null);
}
var Hc = (function (e) {
    return (e.UseBlocker = 'useBlocker'), (e.UseRevalidator = 'useRevalidator'), (e.UseNavigateStable = 'useNavigate'), e;
  })(Hc || {}),
  Ka = (function (e) {
    return (
      (e.UseBlocker = 'useBlocker'),
      (e.UseLoaderData = 'useLoaderData'),
      (e.UseActionData = 'useActionData'),
      (e.UseRouteError = 'useRouteError'),
      (e.UseNavigation = 'useNavigation'),
      (e.UseRouteLoaderData = 'useRouteLoaderData'),
      (e.UseMatches = 'useMatches'),
      (e.UseRevalidator = 'useRevalidator'),
      (e.UseNavigateStable = 'useNavigate'),
      (e.UseRouteId = 'useRouteId'),
      e
    );
  })(Ka || {});
function gp(e) {
  let t = c.useContext(Si);
  return t || Se(!1), t;
}
function vp(e) {
  let t = c.useContext(Dc);
  return t || Se(!1), t;
}
function bp(e) {
  let t = c.useContext(cn);
  return t || Se(!1), t;
}
function $c(e) {
  let t = bp(),
    n = t.matches[t.matches.length - 1];
  return n.route.id || Se(!1), n.route.id;
}
function zc() {
  var e;
  let t = c.useContext(jc),
    n = vp(Ka.UseRouteError),
    r = $c(Ka.UseRouteError);
  return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function yp() {
  let { router: e } = gp(Hc.UseNavigateStable),
    t = $c(Ka.UseNavigateStable),
    n = c.useRef(!1);
  return (
    Uc(() => {
      n.current = !0;
    }),
    c.useCallback(
      function (a, i) {
        i === void 0 && (i = {}), n.current && (typeof a == 'number' ? e.navigate(a) : e.navigate(a, qa({ fromRouteId: t }, i)));
      },
      [e, t],
    )
  );
}
function xp(e) {
  return cp(e.context);
}
function wp(e) {
  let { basename: t = '/', children: n = null, location: r, navigationType: a = Ye.Pop, navigator: i, static: o = !1, future: s } = e;
  ga() && Se(!1);
  let l = t.replace(/^\/*/, '/'),
    u = c.useMemo(() => ({ basename: l, navigator: i, static: o, future: qa({ v7_relativeSplatPath: !1 }, s) }), [l, s, i, o]);
  typeof r == 'string' && (r = Ln(r));
  let { pathname: d = '/', search: p = '', hash: f = '', state: h = null, key: b = 'default' } = r,
    v = c.useMemo(() => {
      let w = ha(d, l);
      return w == null ? null : { location: { pathname: w, search: p, hash: f, state: h, key: b }, navigationType: a };
    }, [l, d, p, f, h, b, a]);
  return v == null ? null : c.createElement(Or.Provider, { value: u }, c.createElement(Xo.Provider, { children: n, value: v }));
}
new Promise(() => {});
function Cp(e) {
  let t = { hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null };
  return (
    e.Component && Object.assign(t, { element: c.createElement(e.Component), Component: void 0 }),
    e.HydrateFallback && Object.assign(t, { hydrateFallbackElement: c.createElement(e.HydrateFallback), HydrateFallback: void 0 }),
    e.ErrorBoundary && Object.assign(t, { errorElement: c.createElement(e.ErrorBoundary), ErrorBoundary: void 0 }),
    t
  );
}
/**
 * React Router DOM v6.23.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Xa() {
  return (
    (Xa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Xa.apply(this, arguments)
  );
}
function Op(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function _p(e, t) {
  return e.button === 0 && (!t || t === '_self') && !Op(e);
}
const Ep = '6';
try {
  window.__reactRouterVersion = Ep;
} catch {}
function Sp(e, t) {
  return Hf({
    basename: void 0,
    future: Xa({}, void 0, { v7_prependBasename: !0 }),
    history: ff({ window: void 0 }),
    hydrationData: kp(),
    routes: e,
    mapRouteProperties: Cp,
    unstable_dataStrategy: void 0,
    window: void 0,
  }).initialize();
}
function kp() {
  var e;
  let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData;
  return t && t.errors && (t = Xa({}, t, { errors: Lp(t.errors) })), t;
}
function Lp(e) {
  if (!e) return null;
  let t = Object.entries(e),
    n = {};
  for (let [r, a] of t)
    if (a && a.__type === 'RouteErrorResponse') n[r] = new Go(a.status, a.statusText, a.data, a.internal === !0);
    else if (a && a.__type === 'Error') {
      if (a.__subType) {
        let i = window[a.__subType];
        if (typeof i == 'function')
          try {
            let o = new i(a.message);
            (o.stack = ''), (n[r] = o);
          } catch {}
      }
      if (n[r] == null) {
        let i = new Error(a.message);
        (i.stack = ''), (n[r] = i);
      }
    } else n[r] = a;
  return n;
}
const Ip = c.createContext({ isTransitioning: !1 }),
  Rp = c.createContext(new Map()),
  Np = 'startTransition',
  rl = c[Np],
  Tp = 'flushSync',
  al = _i[Tp];
function Pp(e) {
  rl ? rl(e) : e();
}
function Ur(e) {
  al ? al(e) : e();
}
class Ap {
  constructor() {
    (this.status = 'pending'),
      (this.promise = new Promise((t, n) => {
        (this.resolve = r => {
          this.status === 'pending' && ((this.status = 'resolved'), t(r));
        }),
          (this.reject = r => {
            this.status === 'pending' && ((this.status = 'rejected'), n(r));
          });
      }));
  }
}
function Fp(e) {
  let { fallbackElement: t, router: n, future: r } = e,
    [a, i] = c.useState(n.state),
    [o, s] = c.useState(),
    [l, u] = c.useState({ isTransitioning: !1 }),
    [d, p] = c.useState(),
    [f, h] = c.useState(),
    [b, v] = c.useState(),
    w = c.useRef(new Map()),
    { v7_startTransition: T } = r || {},
    N = c.useCallback(
      m => {
        T ? Pp(m) : m();
      },
      [T],
    ),
    B = c.useCallback(
      (m, S) => {
        let { deletedFetchers: E, unstable_flushSync: k, unstable_viewTransitionOpts: y } = S;
        E.forEach(O => w.current.delete(O)),
          m.fetchers.forEach((O, U) => {
            O.data !== void 0 && w.current.set(U, O.data);
          });
        let _ = n.window == null || n.window.document == null || typeof n.window.document.startViewTransition != 'function';
        if (!y || _) {
          k ? Ur(() => i(m)) : N(() => i(m));
          return;
        }
        if (k) {
          Ur(() => {
            f && (d && d.resolve(), f.skipTransition()),
              u({ isTransitioning: !0, flushSync: !0, currentLocation: y.currentLocation, nextLocation: y.nextLocation });
          });
          let O = n.window.document.startViewTransition(() => {
            Ur(() => i(m));
          });
          O.finished.finally(() => {
            Ur(() => {
              p(void 0), h(void 0), s(void 0), u({ isTransitioning: !1 });
            });
          }),
            Ur(() => h(O));
          return;
        }
        f
          ? (d && d.resolve(), f.skipTransition(), v({ state: m, currentLocation: y.currentLocation, nextLocation: y.nextLocation }))
          : (s(m), u({ isTransitioning: !0, flushSync: !1, currentLocation: y.currentLocation, nextLocation: y.nextLocation }));
      },
      [n.window, f, d, w, N],
    );
  c.useLayoutEffect(() => n.subscribe(B), [n, B]),
    c.useEffect(() => {
      l.isTransitioning && !l.flushSync && p(new Ap());
    }, [l]),
    c.useEffect(() => {
      if (d && o && n.window) {
        let m = o,
          S = d.promise,
          E = n.window.document.startViewTransition(async () => {
            N(() => i(m)), await S;
          });
        E.finished.finally(() => {
          p(void 0), h(void 0), s(void 0), u({ isTransitioning: !1 });
        }),
          h(E);
      }
    }, [N, o, d, n.window]),
    c.useEffect(() => {
      d && o && a.location.key === o.location.key && d.resolve();
    }, [d, f, a.location, o]),
    c.useEffect(() => {
      !l.isTransitioning &&
        b &&
        (s(b.state),
        u({ isTransitioning: !0, flushSync: !1, currentLocation: b.currentLocation, nextLocation: b.nextLocation }),
        v(void 0));
    }, [l.isTransitioning, b]),
    c.useEffect(() => {}, []);
  let A = c.useMemo(
      () => ({
        createHref: n.createHref,
        encodeLocation: n.encodeLocation,
        go: m => n.navigate(m),
        push: (m, S, E) => n.navigate(m, { state: S, preventScrollReset: E?.preventScrollReset }),
        replace: (m, S, E) => n.navigate(m, { replace: !0, state: S, preventScrollReset: E?.preventScrollReset }),
      }),
      [n],
    ),
    L = n.basename || '/',
    g = c.useMemo(() => ({ router: n, navigator: A, static: !1, basename: L }), [n, A, L]);
  return c.createElement(
    c.Fragment,
    null,
    c.createElement(
      Si.Provider,
      { value: g },
      c.createElement(
        Dc.Provider,
        { value: a },
        c.createElement(
          Rp.Provider,
          { value: w.current },
          c.createElement(
            Ip.Provider,
            { value: l },
            c.createElement(
              wp,
              {
                basename: L,
                location: a.location,
                navigationType: a.historyAction,
                navigator: A,
                future: { v7_relativeSplatPath: n.future.v7_relativeSplatPath },
              },
              a.initialized || n.future.v7_partialHydration ? c.createElement(Mp, { routes: n.routes, future: n.future, state: a }) : t,
            ),
          ),
        ),
      ),
    ),
    null,
  );
}
function Mp(e) {
  let { routes: t, future: n, state: r } = e;
  return dp(t, void 0, r, n);
}
var il;
(function (e) {
  (e.UseScrollRestoration = 'useScrollRestoration'),
    (e.UseSubmit = 'useSubmit'),
    (e.UseSubmitFetcher = 'useSubmitFetcher'),
    (e.UseFetcher = 'useFetcher'),
    (e.useViewTransitionState = 'useViewTransitionState');
})(il || (il = {}));
var ol;
(function (e) {
  (e.UseFetcher = 'useFetcher'), (e.UseFetchers = 'useFetchers'), (e.UseScrollRestoration = 'useScrollRestoration');
})(ol || (ol = {}));
function Dp(e, t) {
  let { target: n, replace: r, state: a, preventScrollReset: i, relative: o, unstable_viewTransition: s } = {},
    l = op(),
    u = va(),
    d = Vc(e, { relative: o });
  return c.useCallback(
    p => {
      if (_p(p, n)) {
        p.preventDefault();
        let f = r !== void 0 ? r : Dn(u) === Dn(d);
        l(e, { replace: f, state: a, preventScrollReset: i, relative: o, unstable_viewTransition: s });
      }
    },
    [u, l, d, r, a, n, e, i, o, s],
  );
}
const jp = {
  type: 'logger',
  log(e) {
    this.output('log', e);
  },
  warn(e) {
    this.output('warn', e);
  },
  error(e) {
    this.output('error', e);
  },
  output(e, t) {
    console && console[e] && console[e].apply(console, t);
  },
};
class Ja {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    this.init(t, n);
  }
  init(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.prefix = n.prefix || 'i18next:'), (this.logger = t || jp), (this.options = n), (this.debug = n.debug);
  }
  log() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return this.forward(n, 'log', '', !0);
  }
  warn() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return this.forward(n, 'warn', '', !0);
  }
  error() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return this.forward(n, 'error', '');
  }
  deprecate() {
    for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++) n[r] = arguments[r];
    return this.forward(n, 'warn', 'WARNING DEPRECATED: ', !0);
  }
  forward(t, n, r, a) {
    return a && !this.debug ? null : (typeof t[0] == 'string' && (t[0] = `${r}${this.prefix} ${t[0]}`), this.logger[n](t));
  }
  create(t) {
    return new Ja(this.logger, { prefix: `${this.prefix}:${t}:`, ...this.options });
  }
  clone(t) {
    return (t = t || this.options), (t.prefix = t.prefix || this.prefix), new Ja(this.logger, t);
  }
}
var zt = new Ja();
class ki {
  constructor() {
    this.observers = {};
  }
  on(t, n) {
    return (
      t.split(' ').forEach(r => {
        this.observers[r] || (this.observers[r] = new Map());
        const a = this.observers[r].get(n) || 0;
        this.observers[r].set(n, a + 1);
      }),
      this
    );
  }
  off(t, n) {
    if (this.observers[t]) {
      if (!n) {
        delete this.observers[t];
        return;
      }
      this.observers[t].delete(n);
    }
  }
  emit(t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
    this.observers[t] &&
      Array.from(this.observers[t].entries()).forEach(o => {
        let [s, l] = o;
        for (let u = 0; u < l; u++) s(...r);
      }),
      this.observers['*'] &&
        Array.from(this.observers['*'].entries()).forEach(o => {
          let [s, l] = o;
          for (let u = 0; u < l; u++) s.apply(s, [t, ...r]);
        });
  }
}
function Vr() {
  let e, t;
  const n = new Promise((r, a) => {
    (e = r), (t = a);
  });
  return (n.resolve = e), (n.reject = t), n;
}
function sl(e) {
  return e == null ? '' : '' + e;
}
function Bp(e, t, n) {
  e.forEach(r => {
    t[r] && (n[r] = t[r]);
  });
}
const Up = /###/g;
function Yr(e, t, n) {
  function r(s) {
    return s && s.indexOf('###') > -1 ? s.replace(Up, '.') : s;
  }
  function a() {
    return !e || typeof e == 'string';
  }
  const i = typeof t != 'string' ? t : t.split('.');
  let o = 0;
  for (; o < i.length - 1; ) {
    if (a()) return {};
    const s = r(i[o]);
    !e[s] && n && (e[s] = new n()), Object.prototype.hasOwnProperty.call(e, s) ? (e = e[s]) : (e = {}), ++o;
  }
  return a() ? {} : { obj: e, k: r(i[o]) };
}
function ll(e, t, n) {
  const { obj: r, k: a } = Yr(e, t, Object);
  if (r !== void 0 || t.length === 1) {
    r[a] = n;
    return;
  }
  let i = t[t.length - 1],
    o = t.slice(0, t.length - 1),
    s = Yr(e, o, Object);
  for (; s.obj === void 0 && o.length; )
    (i = `${o[o.length - 1]}.${i}`),
      (o = o.slice(0, o.length - 1)),
      (s = Yr(e, o, Object)),
      s && s.obj && typeof s.obj[`${s.k}.${i}`] < 'u' && (s.obj = void 0);
  s.obj[`${s.k}.${i}`] = n;
}
function Vp(e, t, n, r) {
  const { obj: a, k: i } = Yr(e, t, Object);
  (a[i] = a[i] || []), a[i].push(n);
}
function Ya(e, t) {
  const { obj: n, k: r } = Yr(e, t);
  if (n) return n[r];
}
function Hp(e, t, n) {
  const r = Ya(e, n);
  return r !== void 0 ? r : Ya(t, n);
}
function Wc(e, t, n) {
  for (const r in t)
    r !== '__proto__' &&
      r !== 'constructor' &&
      (r in e
        ? typeof e[r] == 'string' || e[r] instanceof String || typeof t[r] == 'string' || t[r] instanceof String
          ? n && (e[r] = t[r])
          : Wc(e[r], t[r], n)
        : (e[r] = t[r]));
  return e;
}
function er(e) {
  return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, '\\$&');
}
var $p = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;' };
function zp(e) {
  return typeof e == 'string' ? e.replace(/[&<>"'\/]/g, t => $p[t]) : e;
}
class Wp {
  constructor(t) {
    (this.capacity = t), (this.regExpMap = new Map()), (this.regExpQueue = []);
  }
  getRegExp(t) {
    const n = this.regExpMap.get(t);
    if (n !== void 0) return n;
    const r = new RegExp(t);
    return (
      this.regExpQueue.length === this.capacity && this.regExpMap.delete(this.regExpQueue.shift()),
      this.regExpMap.set(t, r),
      this.regExpQueue.push(t),
      r
    );
  }
}
const Gp = [' ', ',', '?', '!', ';'],
  qp = new Wp(20);
function Kp(e, t, n) {
  (t = t || ''), (n = n || '');
  const r = Gp.filter(o => t.indexOf(o) < 0 && n.indexOf(o) < 0);
  if (r.length === 0) return !0;
  const a = qp.getRegExp(`(${r.map(o => (o === '?' ? '\\?' : o)).join('|')})`);
  let i = !a.test(e);
  if (!i) {
    const o = e.indexOf(n);
    o > 0 && !a.test(e.substring(0, o)) && (i = !0);
  }
  return i;
}
function wo(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '.';
  if (!e) return;
  if (e[t]) return e[t];
  const r = t.split(n);
  let a = e;
  for (let i = 0; i < r.length; ) {
    if (!a || typeof a != 'object') return;
    let o,
      s = '';
    for (let l = i; l < r.length; ++l)
      if ((l !== i && (s += n), (s += r[l]), (o = a[s]), o !== void 0)) {
        if (['string', 'number', 'boolean'].indexOf(typeof o) > -1 && l < r.length - 1) continue;
        i += l - i + 1;
        break;
      }
    a = o;
  }
  return a;
}
function Qa(e) {
  return e && e.indexOf('_') > 0 ? e.replace('_', '-') : e;
}
class cl extends ki {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { ns: ['translation'], defaultNS: 'translation' };
    super(),
      (this.data = t || {}),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      this.options.ignoreJSONStructure === void 0 && (this.options.ignoreJSONStructure = !0);
  }
  addNamespaces(t) {
    this.options.ns.indexOf(t) < 0 && this.options.ns.push(t);
  }
  removeNamespaces(t) {
    const n = this.options.ns.indexOf(t);
    n > -1 && this.options.ns.splice(n, 1);
  }
  getResource(t, n, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    const i = a.keySeparator !== void 0 ? a.keySeparator : this.options.keySeparator,
      o = a.ignoreJSONStructure !== void 0 ? a.ignoreJSONStructure : this.options.ignoreJSONStructure;
    let s;
    t.indexOf('.') > -1
      ? (s = t.split('.'))
      : ((s = [t, n]), r && (Array.isArray(r) ? s.push(...r) : typeof r == 'string' && i ? s.push(...r.split(i)) : s.push(r)));
    const l = Ya(this.data, s);
    return (
      !l && !n && !r && t.indexOf('.') > -1 && ((t = s[0]), (n = s[1]), (r = s.slice(2).join('.'))),
      l || !o || typeof r != 'string' ? l : wo(this.data && this.data[t] && this.data[t][n], r, i)
    );
  }
  addResource(t, n, r, a) {
    let i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : { silent: !1 };
    const o = i.keySeparator !== void 0 ? i.keySeparator : this.options.keySeparator;
    let s = [t, n];
    r && (s = s.concat(o ? r.split(o) : r)),
      t.indexOf('.') > -1 && ((s = t.split('.')), (a = n), (n = s[1])),
      this.addNamespaces(n),
      ll(this.data, s, a),
      i.silent || this.emit('added', t, n, r, a);
  }
  addResources(t, n, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : { silent: !1 };
    for (const i in r) (typeof r[i] == 'string' || Array.isArray(r[i])) && this.addResource(t, n, i, r[i], { silent: !0 });
    a.silent || this.emit('added', t, n, r);
  }
  addResourceBundle(t, n, r, a, i) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : { silent: !1, skipCopy: !1 },
      s = [t, n];
    t.indexOf('.') > -1 && ((s = t.split('.')), (a = r), (r = n), (n = s[1])), this.addNamespaces(n);
    let l = Ya(this.data, s) || {};
    o.skipCopy || (r = JSON.parse(JSON.stringify(r))),
      a ? Wc(l, r, i) : (l = { ...l, ...r }),
      ll(this.data, s, l),
      o.silent || this.emit('added', t, n, r);
  }
  removeResourceBundle(t, n) {
    this.hasResourceBundle(t, n) && delete this.data[t][n], this.removeNamespaces(n), this.emit('removed', t, n);
  }
  hasResourceBundle(t, n) {
    return this.getResource(t, n) !== void 0;
  }
  getResourceBundle(t, n) {
    return (
      n || (n = this.options.defaultNS), this.options.compatibilityAPI === 'v1' ? { ...this.getResource(t, n) } : this.getResource(t, n)
    );
  }
  getDataByLanguage(t) {
    return this.data[t];
  }
  hasLanguageSomeTranslations(t) {
    const n = this.getDataByLanguage(t);
    return !!((n && Object.keys(n)) || []).find(a => n[a] && Object.keys(n[a]).length > 0);
  }
  toJSON() {
    return this.data;
  }
}
var Gc = {
  processors: {},
  addPostProcessor(e) {
    this.processors[e.name] = e;
  },
  handle(e, t, n, r, a) {
    return (
      e.forEach(i => {
        this.processors[i] && (t = this.processors[i].process(t, n, r, a));
      }),
      t
    );
  },
};
const dl = {};
class Za extends ki {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    super(),
      Bp(['resourceStore', 'languageUtils', 'pluralResolver', 'interpolator', 'backendConnector', 'i18nFormat', 'utils'], t, this),
      (this.options = n),
      this.options.keySeparator === void 0 && (this.options.keySeparator = '.'),
      (this.logger = zt.create('translator'));
  }
  changeLanguage(t) {
    t && (this.language = t);
  }
  exists(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} };
    if (t == null) return !1;
    const r = this.resolve(t, n);
    return r && r.res !== void 0;
  }
  extractFromKey(t, n) {
    let r = n.nsSeparator !== void 0 ? n.nsSeparator : this.options.nsSeparator;
    r === void 0 && (r = ':');
    const a = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator;
    let i = n.ns || this.options.defaultNS || [];
    const o = r && t.indexOf(r) > -1,
      s =
        !this.options.userDefinedKeySeparator && !n.keySeparator && !this.options.userDefinedNsSeparator && !n.nsSeparator && !Kp(t, r, a);
    if (o && !s) {
      const l = t.match(this.interpolator.nestingRegexp);
      if (l && l.length > 0) return { key: t, namespaces: i };
      const u = t.split(r);
      (r !== a || (r === a && this.options.ns.indexOf(u[0]) > -1)) && (i = u.shift()), (t = u.join(a));
    }
    return typeof i == 'string' && (i = [i]), { key: t, namespaces: i };
  }
  translate(t, n, r) {
    if (
      (typeof n != 'object' &&
        this.options.overloadTranslationOptionHandler &&
        (n = this.options.overloadTranslationOptionHandler(arguments)),
      typeof n == 'object' && (n = { ...n }),
      n || (n = {}),
      t == null)
    )
      return '';
    Array.isArray(t) || (t = [String(t)]);
    const a = n.returnDetails !== void 0 ? n.returnDetails : this.options.returnDetails,
      i = n.keySeparator !== void 0 ? n.keySeparator : this.options.keySeparator,
      { key: o, namespaces: s } = this.extractFromKey(t[t.length - 1], n),
      l = s[s.length - 1],
      u = n.lng || this.language,
      d = n.appendNamespaceToCIMode || this.options.appendNamespaceToCIMode;
    if (u && u.toLowerCase() === 'cimode') {
      if (d) {
        const A = n.nsSeparator || this.options.nsSeparator;
        return a
          ? { res: `${l}${A}${o}`, usedKey: o, exactUsedKey: o, usedLng: u, usedNS: l, usedParams: this.getUsedParamsDetails(n) }
          : `${l}${A}${o}`;
      }
      return a ? { res: o, usedKey: o, exactUsedKey: o, usedLng: u, usedNS: l, usedParams: this.getUsedParamsDetails(n) } : o;
    }
    const p = this.resolve(t, n);
    let f = p && p.res;
    const h = (p && p.usedKey) || o,
      b = (p && p.exactUsedKey) || o,
      v = Object.prototype.toString.apply(f),
      w = ['[object Number]', '[object Function]', '[object RegExp]'],
      T = n.joinArrays !== void 0 ? n.joinArrays : this.options.joinArrays,
      N = !this.i18nFormat || this.i18nFormat.handleAsObject;
    if (
      N &&
      f &&
      typeof f != 'string' &&
      typeof f != 'boolean' &&
      typeof f != 'number' &&
      w.indexOf(v) < 0 &&
      !(typeof T == 'string' && Array.isArray(f))
    ) {
      if (!n.returnObjects && !this.options.returnObjects) {
        this.options.returnedObjectHandler || this.logger.warn('accessing an object - but returnObjects options is not enabled!');
        const A = this.options.returnedObjectHandler
          ? this.options.returnedObjectHandler(h, f, { ...n, ns: s })
          : `key '${o} (${this.language})' returned an object instead of string.`;
        return a ? ((p.res = A), (p.usedParams = this.getUsedParamsDetails(n)), p) : A;
      }
      if (i) {
        const A = Array.isArray(f),
          L = A ? [] : {},
          g = A ? b : h;
        for (const m in f)
          if (Object.prototype.hasOwnProperty.call(f, m)) {
            const S = `${g}${i}${m}`;
            (L[m] = this.translate(S, { ...n, joinArrays: !1, ns: s })), L[m] === S && (L[m] = f[m]);
          }
        f = L;
      }
    } else if (N && typeof T == 'string' && Array.isArray(f)) (f = f.join(T)), f && (f = this.extendTranslation(f, t, n, r));
    else {
      let A = !1,
        L = !1;
      const g = n.count !== void 0 && typeof n.count != 'string',
        m = Za.hasDefaultValue(n),
        S = g ? this.pluralResolver.getSuffix(u, n.count, n) : '',
        E = n.ordinal && g ? this.pluralResolver.getSuffix(u, n.count, { ordinal: !1 }) : '',
        k = g && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(),
        y = (k && n[`defaultValue${this.options.pluralSeparator}zero`]) || n[`defaultValue${S}`] || n[`defaultValue${E}`] || n.defaultValue;
      !this.isValidLookup(f) && m && ((A = !0), (f = y)), this.isValidLookup(f) || ((L = !0), (f = o));
      const O = (n.missingKeyNoValueFallbackToKey || this.options.missingKeyNoValueFallbackToKey) && L ? void 0 : f,
        U = m && y !== f && this.options.updateMissing;
      if (L || A || U) {
        if ((this.logger.log(U ? 'updateKey' : 'missingKey', u, l, o, U ? y : f), i)) {
          const z = this.resolve(o, { ...n, keySeparator: !1 });
          z &&
            z.res &&
            this.logger.warn(
              'Seems the loaded translations were in flat JSON format instead of nested. Either set keySeparator: false on init or make sure your translations are published in nested format.',
            );
        }
        let x = [];
        const D = this.languageUtils.getFallbackCodes(this.options.fallbackLng, n.lng || this.language);
        if (this.options.saveMissingTo === 'fallback' && D && D[0]) for (let z = 0; z < D.length; z++) x.push(D[z]);
        else
          this.options.saveMissingTo === 'all'
            ? (x = this.languageUtils.toResolveHierarchy(n.lng || this.language))
            : x.push(n.lng || this.language);
        const G = (z, K, ne) => {
          const C = m && ne !== f ? ne : O;
          this.options.missingKeyHandler
            ? this.options.missingKeyHandler(z, l, K, C, U, n)
            : this.backendConnector && this.backendConnector.saveMissing && this.backendConnector.saveMissing(z, l, K, C, U, n),
            this.emit('missingKey', z, l, K, f);
        };
        this.options.saveMissing &&
          (this.options.saveMissingPlurals && g
            ? x.forEach(z => {
                const K = this.pluralResolver.getSuffixes(z, n);
                k &&
                  n[`defaultValue${this.options.pluralSeparator}zero`] &&
                  K.indexOf(`${this.options.pluralSeparator}zero`) < 0 &&
                  K.push(`${this.options.pluralSeparator}zero`),
                  K.forEach(ne => {
                    G([z], o + ne, n[`defaultValue${ne}`] || y);
                  });
              })
            : G(x, o, y));
      }
      (f = this.extendTranslation(f, t, n, p, r)),
        L && f === o && this.options.appendNamespaceToMissingKey && (f = `${l}:${o}`),
        (L || A) &&
          this.options.parseMissingKeyHandler &&
          (this.options.compatibilityAPI !== 'v1'
            ? (f = this.options.parseMissingKeyHandler(this.options.appendNamespaceToMissingKey ? `${l}:${o}` : o, A ? f : void 0))
            : (f = this.options.parseMissingKeyHandler(f)));
    }
    return a ? ((p.res = f), (p.usedParams = this.getUsedParamsDetails(n)), p) : f;
  }
  extendTranslation(t, n, r, a, i) {
    var o = this;
    if (this.i18nFormat && this.i18nFormat.parse)
      t = this.i18nFormat.parse(
        t,
        { ...this.options.interpolation.defaultVariables, ...r },
        r.lng || this.language || a.usedLng,
        a.usedNS,
        a.usedKey,
        { resolved: a },
      );
    else if (!r.skipInterpolation) {
      r.interpolation && this.interpolator.init({ ...r, interpolation: { ...this.options.interpolation, ...r.interpolation } });
      const u =
        typeof t == 'string' &&
        (r && r.interpolation && r.interpolation.skipOnVariables !== void 0
          ? r.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables);
      let d;
      if (u) {
        const f = t.match(this.interpolator.nestingRegexp);
        d = f && f.length;
      }
      let p = r.replace && typeof r.replace != 'string' ? r.replace : r;
      if (
        (this.options.interpolation.defaultVariables && (p = { ...this.options.interpolation.defaultVariables, ...p }),
        (t = this.interpolator.interpolate(t, p, r.lng || this.language, r)),
        u)
      ) {
        const f = t.match(this.interpolator.nestingRegexp),
          h = f && f.length;
        d < h && (r.nest = !1);
      }
      !r.lng && this.options.compatibilityAPI !== 'v1' && a && a.res && (r.lng = a.usedLng),
        r.nest !== !1 &&
          (t = this.interpolator.nest(
            t,
            function () {
              for (var f = arguments.length, h = new Array(f), b = 0; b < f; b++) h[b] = arguments[b];
              return i && i[0] === h[0] && !r.context
                ? (o.logger.warn(`It seems you are nesting recursively key: ${h[0]} in key: ${n[0]}`), null)
                : o.translate(...h, n);
            },
            r,
          )),
        r.interpolation && this.interpolator.reset();
    }
    const s = r.postProcess || this.options.postProcess,
      l = typeof s == 'string' ? [s] : s;
    return (
      t != null &&
        l &&
        l.length &&
        r.applyPostProcessor !== !1 &&
        (t = Gc.handle(
          l,
          t,
          n,
          this.options && this.options.postProcessPassResolved
            ? { i18nResolved: { ...a, usedParams: this.getUsedParamsDetails(r) }, ...r }
            : r,
          this,
        )),
      t
    );
  }
  resolve(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r,
      a,
      i,
      o,
      s;
    return (
      typeof t == 'string' && (t = [t]),
      t.forEach(l => {
        if (this.isValidLookup(r)) return;
        const u = this.extractFromKey(l, n),
          d = u.key;
        a = d;
        let p = u.namespaces;
        this.options.fallbackNS && (p = p.concat(this.options.fallbackNS));
        const f = n.count !== void 0 && typeof n.count != 'string',
          h = f && !n.ordinal && n.count === 0 && this.pluralResolver.shouldUseIntlApi(),
          b = n.context !== void 0 && (typeof n.context == 'string' || typeof n.context == 'number') && n.context !== '',
          v = n.lngs ? n.lngs : this.languageUtils.toResolveHierarchy(n.lng || this.language, n.fallbackLng);
        p.forEach(w => {
          this.isValidLookup(r) ||
            ((s = w),
            !dl[`${v[0]}-${w}`] &&
              this.utils &&
              this.utils.hasLoadedNamespace &&
              !this.utils.hasLoadedNamespace(s) &&
              ((dl[`${v[0]}-${w}`] = !0),
              this.logger.warn(
                `key "${a}" for languages "${v.join(', ')}" won't get resolved as namespace "${s}" was not yet loaded`,
                'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
              )),
            v.forEach(T => {
              if (this.isValidLookup(r)) return;
              o = T;
              const N = [d];
              if (this.i18nFormat && this.i18nFormat.addLookupKeys) this.i18nFormat.addLookupKeys(N, d, T, w, n);
              else {
                let A;
                f && (A = this.pluralResolver.getSuffix(T, n.count, n));
                const L = `${this.options.pluralSeparator}zero`,
                  g = `${this.options.pluralSeparator}ordinal${this.options.pluralSeparator}`;
                if (
                  (f &&
                    (N.push(d + A),
                    n.ordinal && A.indexOf(g) === 0 && N.push(d + A.replace(g, this.options.pluralSeparator)),
                    h && N.push(d + L)),
                  b)
                ) {
                  const m = `${d}${this.options.contextSeparator}${n.context}`;
                  N.push(m),
                    f &&
                      (N.push(m + A),
                      n.ordinal && A.indexOf(g) === 0 && N.push(m + A.replace(g, this.options.pluralSeparator)),
                      h && N.push(m + L));
                }
              }
              let B;
              for (; (B = N.pop()); ) this.isValidLookup(r) || ((i = B), (r = this.getResource(T, w, B, n)));
            }));
        });
      }),
      { res: r, usedKey: a, exactUsedKey: i, usedLng: o, usedNS: s }
    );
  }
  isValidLookup(t) {
    return t !== void 0 && !(!this.options.returnNull && t === null) && !(!this.options.returnEmptyString && t === '');
  }
  getResource(t, n, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return this.i18nFormat && this.i18nFormat.getResource
      ? this.i18nFormat.getResource(t, n, r, a)
      : this.resourceStore.getResource(t, n, r, a);
  }
  getUsedParamsDetails() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    const n = [
        'defaultValue',
        'ordinal',
        'context',
        'replace',
        'lng',
        'lngs',
        'fallbackLng',
        'ns',
        'keySeparator',
        'nsSeparator',
        'returnObjects',
        'returnDetails',
        'joinArrays',
        'postProcess',
        'interpolation',
      ],
      r = t.replace && typeof t.replace != 'string';
    let a = r ? t.replace : t;
    if (
      (r && typeof t.count < 'u' && (a.count = t.count),
      this.options.interpolation.defaultVariables && (a = { ...this.options.interpolation.defaultVariables, ...a }),
      !r)
    ) {
      a = { ...a };
      for (const i of n) delete a[i];
    }
    return a;
  }
  static hasDefaultValue(t) {
    const n = 'defaultValue';
    for (const r in t) if (Object.prototype.hasOwnProperty.call(t, r) && n === r.substring(0, n.length) && t[r] !== void 0) return !0;
    return !1;
  }
}
function zi(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
class ul {
  constructor(t) {
    (this.options = t), (this.supportedLngs = this.options.supportedLngs || !1), (this.logger = zt.create('languageUtils'));
  }
  getScriptPartFromCode(t) {
    if (((t = Qa(t)), !t || t.indexOf('-') < 0)) return null;
    const n = t.split('-');
    return n.length === 2 || (n.pop(), n[n.length - 1].toLowerCase() === 'x') ? null : this.formatLanguageCode(n.join('-'));
  }
  getLanguagePartFromCode(t) {
    if (((t = Qa(t)), !t || t.indexOf('-') < 0)) return t;
    const n = t.split('-');
    return this.formatLanguageCode(n[0]);
  }
  formatLanguageCode(t) {
    if (typeof t == 'string' && t.indexOf('-') > -1) {
      const n = ['hans', 'hant', 'latn', 'cyrl', 'cans', 'mong', 'arab'];
      let r = t.split('-');
      return (
        this.options.lowerCaseLng
          ? (r = r.map(a => a.toLowerCase()))
          : r.length === 2
            ? ((r[0] = r[0].toLowerCase()),
              (r[1] = r[1].toUpperCase()),
              n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = zi(r[1].toLowerCase())))
            : r.length === 3 &&
              ((r[0] = r[0].toLowerCase()),
              r[1].length === 2 && (r[1] = r[1].toUpperCase()),
              r[0] !== 'sgn' && r[2].length === 2 && (r[2] = r[2].toUpperCase()),
              n.indexOf(r[1].toLowerCase()) > -1 && (r[1] = zi(r[1].toLowerCase())),
              n.indexOf(r[2].toLowerCase()) > -1 && (r[2] = zi(r[2].toLowerCase()))),
        r.join('-')
      );
    }
    return this.options.cleanCode || this.options.lowerCaseLng ? t.toLowerCase() : t;
  }
  isSupportedCode(t) {
    return (
      (this.options.load === 'languageOnly' || this.options.nonExplicitSupportedLngs) && (t = this.getLanguagePartFromCode(t)),
      !this.supportedLngs || !this.supportedLngs.length || this.supportedLngs.indexOf(t) > -1
    );
  }
  getBestMatchFromCodes(t) {
    if (!t) return null;
    let n;
    return (
      t.forEach(r => {
        if (n) return;
        const a = this.formatLanguageCode(r);
        (!this.options.supportedLngs || this.isSupportedCode(a)) && (n = a);
      }),
      !n &&
        this.options.supportedLngs &&
        t.forEach(r => {
          if (n) return;
          const a = this.getLanguagePartFromCode(r);
          if (this.isSupportedCode(a)) return (n = a);
          n = this.options.supportedLngs.find(i => {
            if (i === a) return i;
            if (
              !(i.indexOf('-') < 0 && a.indexOf('-') < 0) &&
              ((i.indexOf('-') > 0 && a.indexOf('-') < 0 && i.substring(0, i.indexOf('-')) === a) || (i.indexOf(a) === 0 && a.length > 1))
            )
              return i;
          });
        }),
      n || (n = this.getFallbackCodes(this.options.fallbackLng)[0]),
      n
    );
  }
  getFallbackCodes(t, n) {
    if (!t) return [];
    if ((typeof t == 'function' && (t = t(n)), typeof t == 'string' && (t = [t]), Array.isArray(t))) return t;
    if (!n) return t.default || [];
    let r = t[n];
    return (
      r || (r = t[this.getScriptPartFromCode(n)]),
      r || (r = t[this.formatLanguageCode(n)]),
      r || (r = t[this.getLanguagePartFromCode(n)]),
      r || (r = t.default),
      r || []
    );
  }
  toResolveHierarchy(t, n) {
    const r = this.getFallbackCodes(n || this.options.fallbackLng || [], t),
      a = [],
      i = o => {
        o && (this.isSupportedCode(o) ? a.push(o) : this.logger.warn(`rejecting language code not found in supportedLngs: ${o}`));
      };
    return (
      typeof t == 'string' && (t.indexOf('-') > -1 || t.indexOf('_') > -1)
        ? (this.options.load !== 'languageOnly' && i(this.formatLanguageCode(t)),
          this.options.load !== 'languageOnly' && this.options.load !== 'currentOnly' && i(this.getScriptPartFromCode(t)),
          this.options.load !== 'currentOnly' && i(this.getLanguagePartFromCode(t)))
        : typeof t == 'string' && i(this.formatLanguageCode(t)),
      r.forEach(o => {
        a.indexOf(o) < 0 && i(this.formatLanguageCode(o));
      }),
      a
    );
  }
}
let Xp = [
    {
      lngs: [
        'ach',
        'ak',
        'am',
        'arn',
        'br',
        'fil',
        'gun',
        'ln',
        'mfe',
        'mg',
        'mi',
        'oc',
        'pt',
        'pt-BR',
        'tg',
        'tl',
        'ti',
        'tr',
        'uz',
        'wa',
      ],
      nr: [1, 2],
      fc: 1,
    },
    {
      lngs: [
        'af',
        'an',
        'ast',
        'az',
        'bg',
        'bn',
        'ca',
        'da',
        'de',
        'dev',
        'el',
        'en',
        'eo',
        'es',
        'et',
        'eu',
        'fi',
        'fo',
        'fur',
        'fy',
        'gl',
        'gu',
        'ha',
        'hi',
        'hu',
        'hy',
        'ia',
        'it',
        'kk',
        'kn',
        'ku',
        'lb',
        'mai',
        'ml',
        'mn',
        'mr',
        'nah',
        'nap',
        'nb',
        'ne',
        'nl',
        'nn',
        'no',
        'nso',
        'pa',
        'pap',
        'pms',
        'ps',
        'pt-PT',
        'rm',
        'sco',
        'se',
        'si',
        'so',
        'son',
        'sq',
        'sv',
        'sw',
        'ta',
        'te',
        'tk',
        'ur',
        'yo',
      ],
      nr: [1, 2],
      fc: 2,
    },
    {
      lngs: [
        'ay',
        'bo',
        'cgg',
        'fa',
        'ht',
        'id',
        'ja',
        'jbo',
        'ka',
        'km',
        'ko',
        'ky',
        'lo',
        'ms',
        'sah',
        'su',
        'th',
        'tt',
        'ug',
        'vi',
        'wo',
        'zh',
      ],
      nr: [1],
      fc: 3,
    },
    { lngs: ['be', 'bs', 'cnr', 'dz', 'hr', 'ru', 'sr', 'uk'], nr: [1, 2, 5], fc: 4 },
    { lngs: ['ar'], nr: [0, 1, 2, 3, 11, 100], fc: 5 },
    { lngs: ['cs', 'sk'], nr: [1, 2, 5], fc: 6 },
    { lngs: ['csb', 'pl'], nr: [1, 2, 5], fc: 7 },
    { lngs: ['cy'], nr: [1, 2, 3, 8], fc: 8 },
    { lngs: ['fr'], nr: [1, 2], fc: 9 },
    { lngs: ['ga'], nr: [1, 2, 3, 7, 11], fc: 10 },
    { lngs: ['gd'], nr: [1, 2, 3, 20], fc: 11 },
    { lngs: ['is'], nr: [1, 2], fc: 12 },
    { lngs: ['jv'], nr: [0, 1], fc: 13 },
    { lngs: ['kw'], nr: [1, 2, 3, 4], fc: 14 },
    { lngs: ['lt'], nr: [1, 2, 10], fc: 15 },
    { lngs: ['lv'], nr: [1, 2, 0], fc: 16 },
    { lngs: ['mk'], nr: [1, 2], fc: 17 },
    { lngs: ['mnk'], nr: [0, 1, 2], fc: 18 },
    { lngs: ['mt'], nr: [1, 2, 11, 20], fc: 19 },
    { lngs: ['or'], nr: [2, 1], fc: 2 },
    { lngs: ['ro'], nr: [1, 2, 20], fc: 20 },
    { lngs: ['sl'], nr: [5, 1, 2, 3], fc: 21 },
    { lngs: ['he', 'iw'], nr: [1, 2, 20, 21], fc: 22 },
  ],
  Jp = {
    1: function (e) {
      return +(e > 1);
    },
    2: function (e) {
      return +(e != 1);
    },
    3: function (e) {
      return 0;
    },
    4: function (e) {
      return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
    },
    5: function (e) {
      return e == 0 ? 0 : e == 1 ? 1 : e == 2 ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5;
    },
    6: function (e) {
      return e == 1 ? 0 : e >= 2 && e <= 4 ? 1 : 2;
    },
    7: function (e) {
      return e == 1 ? 0 : e % 10 >= 2 && e % 10 <= 4 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
    },
    8: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e != 8 && e != 11 ? 2 : 3;
    },
    9: function (e) {
      return +(e >= 2);
    },
    10: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e < 7 ? 2 : e < 11 ? 3 : 4;
    },
    11: function (e) {
      return e == 1 || e == 11 ? 0 : e == 2 || e == 12 ? 1 : e > 2 && e < 20 ? 2 : 3;
    },
    12: function (e) {
      return +(e % 10 != 1 || e % 100 == 11);
    },
    13: function (e) {
      return +(e !== 0);
    },
    14: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : e == 3 ? 2 : 3;
    },
    15: function (e) {
      return e % 10 == 1 && e % 100 != 11 ? 0 : e % 10 >= 2 && (e % 100 < 10 || e % 100 >= 20) ? 1 : 2;
    },
    16: function (e) {
      return e % 10 == 1 && e % 100 != 11 ? 0 : e !== 0 ? 1 : 2;
    },
    17: function (e) {
      return e == 1 || (e % 10 == 1 && e % 100 != 11) ? 0 : 1;
    },
    18: function (e) {
      return e == 0 ? 0 : e == 1 ? 1 : 2;
    },
    19: function (e) {
      return e == 1 ? 0 : e == 0 || (e % 100 > 1 && e % 100 < 11) ? 1 : e % 100 > 10 && e % 100 < 20 ? 2 : 3;
    },
    20: function (e) {
      return e == 1 ? 0 : e == 0 || (e % 100 > 0 && e % 100 < 20) ? 1 : 2;
    },
    21: function (e) {
      return e % 100 == 1 ? 1 : e % 100 == 2 ? 2 : e % 100 == 3 || e % 100 == 4 ? 3 : 0;
    },
    22: function (e) {
      return e == 1 ? 0 : e == 2 ? 1 : (e < 0 || e > 10) && e % 10 == 0 ? 2 : 3;
    },
  };
const Yp = ['v1', 'v2', 'v3'],
  Qp = ['v4'],
  fl = { zero: 0, one: 1, two: 2, few: 3, many: 4, other: 5 };
function Zp() {
  const e = {};
  return (
    Xp.forEach(t => {
      t.lngs.forEach(n => {
        e[n] = { numbers: t.nr, plurals: Jp[t.fc] };
      });
    }),
    e
  );
}
class em {
  constructor(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    (this.languageUtils = t),
      (this.options = n),
      (this.logger = zt.create('pluralResolver')),
      (!this.options.compatibilityJSON || Qp.includes(this.options.compatibilityJSON)) &&
        (typeof Intl > 'u' || !Intl.PluralRules) &&
        ((this.options.compatibilityJSON = 'v3'),
        this.logger.error(
          'Your environment seems not to be Intl API compatible, use an Intl.PluralRules polyfill. Will fallback to the compatibilityJSON v3 format handling.',
        )),
      (this.rules = Zp());
  }
  addRule(t, n) {
    this.rules[t] = n;
  }
  getRule(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (this.shouldUseIntlApi())
      try {
        return new Intl.PluralRules(Qa(t === 'dev' ? 'en' : t), { type: n.ordinal ? 'ordinal' : 'cardinal' });
      } catch {
        return;
      }
    return this.rules[t] || this.rules[this.languageUtils.getLanguagePartFromCode(t)];
  }
  needsPlural(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return this.shouldUseIntlApi() ? r && r.resolvedOptions().pluralCategories.length > 1 : r && r.numbers.length > 1;
  }
  getPluralFormsOfKey(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    return this.getSuffixes(t, r).map(a => `${n}${a}`);
  }
  getSuffixes(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    const r = this.getRule(t, n);
    return r
      ? this.shouldUseIntlApi()
        ? r
            .resolvedOptions()
            .pluralCategories.sort((a, i) => fl[a] - fl[i])
            .map(a => `${this.options.prepend}${n.ordinal ? `ordinal${this.options.prepend}` : ''}${a}`)
        : r.numbers.map(a => this.getSuffix(t, a, n))
      : [];
  }
  getSuffix(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    const a = this.getRule(t, r);
    return a
      ? this.shouldUseIntlApi()
        ? `${this.options.prepend}${r.ordinal ? `ordinal${this.options.prepend}` : ''}${a.select(n)}`
        : this.getSuffixRetroCompatible(a, n)
      : (this.logger.warn(`no plural rule found for: ${t}`), '');
  }
  getSuffixRetroCompatible(t, n) {
    const r = t.noAbs ? t.plurals(n) : t.plurals(Math.abs(n));
    let a = t.numbers[r];
    this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1 && (a === 2 ? (a = 'plural') : a === 1 && (a = ''));
    const i = () => (this.options.prepend && a.toString() ? this.options.prepend + a.toString() : a.toString());
    return this.options.compatibilityJSON === 'v1'
      ? a === 1
        ? ''
        : typeof a == 'number'
          ? `_plural_${a.toString()}`
          : i()
      : this.options.compatibilityJSON === 'v2' || (this.options.simplifyPluralSuffix && t.numbers.length === 2 && t.numbers[0] === 1)
        ? i()
        : this.options.prepend && r.toString()
          ? this.options.prepend + r.toString()
          : r.toString();
  }
  shouldUseIntlApi() {
    return !Yp.includes(this.options.compatibilityJSON);
  }
}
function pl(e, t, n) {
  let r = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : '.',
    a = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : !0,
    i = Hp(e, t, n);
  return !i && a && typeof n == 'string' && ((i = wo(e, n, r)), i === void 0 && (i = wo(t, n, r))), i;
}
class tm {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = zt.create('interpolator')),
      (this.options = t),
      (this.format = (t.interpolation && t.interpolation.format) || (n => n)),
      this.init(t);
  }
  init() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    t.interpolation || (t.interpolation = { escapeValue: !0 });
    const {
      escape: n,
      escapeValue: r,
      useRawValueToEscape: a,
      prefix: i,
      prefixEscaped: o,
      suffix: s,
      suffixEscaped: l,
      formatSeparator: u,
      unescapeSuffix: d,
      unescapePrefix: p,
      nestingPrefix: f,
      nestingPrefixEscaped: h,
      nestingSuffix: b,
      nestingSuffixEscaped: v,
      nestingOptionsSeparator: w,
      maxReplaces: T,
      alwaysFormat: N,
    } = t.interpolation;
    (this.escape = n !== void 0 ? n : zp),
      (this.escapeValue = r !== void 0 ? r : !0),
      (this.useRawValueToEscape = a !== void 0 ? a : !1),
      (this.prefix = i ? er(i) : o || '{{'),
      (this.suffix = s ? er(s) : l || '}}'),
      (this.formatSeparator = u || ','),
      (this.unescapePrefix = d ? '' : p || '-'),
      (this.unescapeSuffix = this.unescapePrefix ? '' : d || ''),
      (this.nestingPrefix = f ? er(f) : h || er('$t(')),
      (this.nestingSuffix = b ? er(b) : v || er(')')),
      (this.nestingOptionsSeparator = w || ','),
      (this.maxReplaces = T || 1e3),
      (this.alwaysFormat = N !== void 0 ? N : !1),
      this.resetRegExp();
  }
  reset() {
    this.options && this.init(this.options);
  }
  resetRegExp() {
    const t = (n, r) => (n && n.source === r ? ((n.lastIndex = 0), n) : new RegExp(r, 'g'));
    (this.regexp = t(this.regexp, `${this.prefix}(.+?)${this.suffix}`)),
      (this.regexpUnescape = t(this.regexpUnescape, `${this.prefix}${this.unescapePrefix}(.+?)${this.unescapeSuffix}${this.suffix}`)),
      (this.nestingRegexp = t(this.nestingRegexp, `${this.nestingPrefix}(.+?)${this.nestingSuffix}`));
  }
  interpolate(t, n, r, a) {
    let i, o, s;
    const l = (this.options && this.options.interpolation && this.options.interpolation.defaultVariables) || {};
    function u(b) {
      return b.replace(/\$/g, '$$$$');
    }
    const d = b => {
      if (b.indexOf(this.formatSeparator) < 0) {
        const N = pl(n, l, b, this.options.keySeparator, this.options.ignoreJSONStructure);
        return this.alwaysFormat ? this.format(N, void 0, r, { ...a, ...n, interpolationkey: b }) : N;
      }
      const v = b.split(this.formatSeparator),
        w = v.shift().trim(),
        T = v.join(this.formatSeparator).trim();
      return this.format(pl(n, l, w, this.options.keySeparator, this.options.ignoreJSONStructure), T, r, {
        ...a,
        ...n,
        interpolationkey: w,
      });
    };
    this.resetRegExp();
    const p = (a && a.missingInterpolationHandler) || this.options.missingInterpolationHandler,
      f =
        a && a.interpolation && a.interpolation.skipOnVariables !== void 0
          ? a.interpolation.skipOnVariables
          : this.options.interpolation.skipOnVariables;
    return (
      [
        { regex: this.regexpUnescape, safeValue: b => u(b) },
        { regex: this.regexp, safeValue: b => (this.escapeValue ? u(this.escape(b)) : u(b)) },
      ].forEach(b => {
        for (s = 0; (i = b.regex.exec(t)); ) {
          const v = i[1].trim();
          if (((o = d(v)), o === void 0))
            if (typeof p == 'function') {
              const T = p(t, i, a);
              o = typeof T == 'string' ? T : '';
            } else if (a && Object.prototype.hasOwnProperty.call(a, v)) o = '';
            else if (f) {
              o = i[0];
              continue;
            } else this.logger.warn(`missed to pass in variable ${v} for interpolating ${t}`), (o = '');
          else typeof o != 'string' && !this.useRawValueToEscape && (o = sl(o));
          const w = b.safeValue(o);
          if (
            ((t = t.replace(i[0], w)),
            f ? ((b.regex.lastIndex += o.length), (b.regex.lastIndex -= i[0].length)) : (b.regex.lastIndex = 0),
            s++,
            s >= this.maxReplaces)
          )
            break;
        }
      }),
      t
    );
  }
  nest(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      a,
      i,
      o;
    function s(l, u) {
      const d = this.nestingOptionsSeparator;
      if (l.indexOf(d) < 0) return l;
      const p = l.split(new RegExp(`${d}[ ]*{`));
      let f = `{${p[1]}`;
      (l = p[0]), (f = this.interpolate(f, o));
      const h = f.match(/'/g),
        b = f.match(/"/g);
      ((h && h.length % 2 === 0 && !b) || b.length % 2 !== 0) && (f = f.replace(/'/g, '"'));
      try {
        (o = JSON.parse(f)), u && (o = { ...u, ...o });
      } catch (v) {
        return this.logger.warn(`failed parsing options string in nesting for key ${l}`, v), `${l}${d}${f}`;
      }
      return o.defaultValue && o.defaultValue.indexOf(this.prefix) > -1 && delete o.defaultValue, l;
    }
    for (; (a = this.nestingRegexp.exec(t)); ) {
      let l = [];
      (o = { ...r }), (o = o.replace && typeof o.replace != 'string' ? o.replace : o), (o.applyPostProcessor = !1), delete o.defaultValue;
      let u = !1;
      if (a[0].indexOf(this.formatSeparator) !== -1 && !/{.*}/.test(a[1])) {
        const d = a[1].split(this.formatSeparator).map(p => p.trim());
        (a[1] = d.shift()), (l = d), (u = !0);
      }
      if (((i = n(s.call(this, a[1].trim(), o), o)), i && a[0] === t && typeof i != 'string')) return i;
      typeof i != 'string' && (i = sl(i)),
        i || (this.logger.warn(`missed to resolve ${a[1]} for nesting ${t}`), (i = '')),
        u && (i = l.reduce((d, p) => this.format(d, p, r.lng, { ...r, interpolationkey: a[1].trim() }), i.trim())),
        (t = t.replace(a[0], i)),
        (this.regexp.lastIndex = 0);
    }
    return t;
  }
}
function nm(e) {
  let t = e.toLowerCase().trim();
  const n = {};
  if (e.indexOf('(') > -1) {
    const r = e.split('(');
    t = r[0].toLowerCase().trim();
    const a = r[1].substring(0, r[1].length - 1);
    t === 'currency' && a.indexOf(':') < 0
      ? n.currency || (n.currency = a.trim())
      : t === 'relativetime' && a.indexOf(':') < 0
        ? n.range || (n.range = a.trim())
        : a.split(';').forEach(o => {
            if (o) {
              const [s, ...l] = o.split(':'),
                u = l
                  .join(':')
                  .trim()
                  .replace(/^'+|'+$/g, ''),
                d = s.trim();
              n[d] || (n[d] = u), u === 'false' && (n[d] = !1), u === 'true' && (n[d] = !0), isNaN(u) || (n[d] = parseInt(u, 10));
            }
          });
  }
  return { formatName: t, formatOptions: n };
}
function tr(e) {
  const t = {};
  return function (r, a, i) {
    const o = a + JSON.stringify(i);
    let s = t[o];
    return s || ((s = e(Qa(a), i)), (t[o] = s)), s(r);
  };
}
class rm {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
    (this.logger = zt.create('formatter')),
      (this.options = t),
      (this.formats = {
        number: tr((n, r) => {
          const a = new Intl.NumberFormat(n, { ...r });
          return i => a.format(i);
        }),
        currency: tr((n, r) => {
          const a = new Intl.NumberFormat(n, { ...r, style: 'currency' });
          return i => a.format(i);
        }),
        datetime: tr((n, r) => {
          const a = new Intl.DateTimeFormat(n, { ...r });
          return i => a.format(i);
        }),
        relativetime: tr((n, r) => {
          const a = new Intl.RelativeTimeFormat(n, { ...r });
          return i => a.format(i, r.range || 'day');
        }),
        list: tr((n, r) => {
          const a = new Intl.ListFormat(n, { ...r });
          return i => a.format(i);
        }),
      }),
      this.init(t);
  }
  init(t) {
    const r = (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { interpolation: {} }).interpolation;
    this.formatSeparator = r.formatSeparator ? r.formatSeparator : r.formatSeparator || ',';
  }
  add(t, n) {
    this.formats[t.toLowerCase().trim()] = n;
  }
  addCached(t, n) {
    this.formats[t.toLowerCase().trim()] = tr(n);
  }
  format(t, n, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    return n.split(this.formatSeparator).reduce((s, l) => {
      const { formatName: u, formatOptions: d } = nm(l);
      if (this.formats[u]) {
        let p = s;
        try {
          const f = (a && a.formatParams && a.formatParams[a.interpolationkey]) || {},
            h = f.locale || f.lng || a.locale || a.lng || r;
          p = this.formats[u](s, h, { ...d, ...a, ...f });
        } catch (f) {
          this.logger.warn(f);
        }
        return p;
      } else this.logger.warn(`there was no format function for ${u}`);
      return s;
    }, t);
  }
}
function am(e, t) {
  e.pending[t] !== void 0 && (delete e.pending[t], e.pendingCount--);
}
class im extends ki {
  constructor(t, n, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
    super(),
      (this.backend = t),
      (this.store = n),
      (this.services = r),
      (this.languageUtils = r.languageUtils),
      (this.options = a),
      (this.logger = zt.create('backendConnector')),
      (this.waitingReads = []),
      (this.maxParallelReads = a.maxParallelReads || 10),
      (this.readingCalls = 0),
      (this.maxRetries = a.maxRetries >= 0 ? a.maxRetries : 5),
      (this.retryTimeout = a.retryTimeout >= 1 ? a.retryTimeout : 350),
      (this.state = {}),
      (this.queue = []),
      this.backend && this.backend.init && this.backend.init(r, a.backend, a);
  }
  queueLoad(t, n, r, a) {
    const i = {},
      o = {},
      s = {},
      l = {};
    return (
      t.forEach(u => {
        let d = !0;
        n.forEach(p => {
          const f = `${u}|${p}`;
          !r.reload && this.store.hasResourceBundle(u, p)
            ? (this.state[f] = 2)
            : this.state[f] < 0 ||
              (this.state[f] === 1
                ? o[f] === void 0 && (o[f] = !0)
                : ((this.state[f] = 1),
                  (d = !1),
                  o[f] === void 0 && (o[f] = !0),
                  i[f] === void 0 && (i[f] = !0),
                  l[p] === void 0 && (l[p] = !0)));
        }),
          d || (s[u] = !0);
      }),
      (Object.keys(i).length || Object.keys(o).length) &&
        this.queue.push({ pending: o, pendingCount: Object.keys(o).length, loaded: {}, errors: [], callback: a }),
      { toLoad: Object.keys(i), pending: Object.keys(o), toLoadLanguages: Object.keys(s), toLoadNamespaces: Object.keys(l) }
    );
  }
  loaded(t, n, r) {
    const a = t.split('|'),
      i = a[0],
      o = a[1];
    n && this.emit('failedLoading', i, o, n),
      r && this.store.addResourceBundle(i, o, r, void 0, void 0, { skipCopy: !0 }),
      (this.state[t] = n ? -1 : 2);
    const s = {};
    this.queue.forEach(l => {
      Vp(l.loaded, [i], o),
        am(l, t),
        n && l.errors.push(n),
        l.pendingCount === 0 &&
          !l.done &&
          (Object.keys(l.loaded).forEach(u => {
            s[u] || (s[u] = {});
            const d = l.loaded[u];
            d.length &&
              d.forEach(p => {
                s[u][p] === void 0 && (s[u][p] = !0);
              });
          }),
          (l.done = !0),
          l.errors.length ? l.callback(l.errors) : l.callback());
    }),
      this.emit('loaded', s),
      (this.queue = this.queue.filter(l => !l.done));
  }
  read(t, n, r) {
    let a = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 0,
      i = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : this.retryTimeout,
      o = arguments.length > 5 ? arguments[5] : void 0;
    if (!t.length) return o(null, {});
    if (this.readingCalls >= this.maxParallelReads) {
      this.waitingReads.push({ lng: t, ns: n, fcName: r, tried: a, wait: i, callback: o });
      return;
    }
    this.readingCalls++;
    const s = (u, d) => {
        if ((this.readingCalls--, this.waitingReads.length > 0)) {
          const p = this.waitingReads.shift();
          this.read(p.lng, p.ns, p.fcName, p.tried, p.wait, p.callback);
        }
        if (u && d && a < this.maxRetries) {
          setTimeout(() => {
            this.read.call(this, t, n, r, a + 1, i * 2, o);
          }, i);
          return;
        }
        o(u, d);
      },
      l = this.backend[r].bind(this.backend);
    if (l.length === 2) {
      try {
        const u = l(t, n);
        u && typeof u.then == 'function' ? u.then(d => s(null, d)).catch(s) : s(null, u);
      } catch (u) {
        s(u);
      }
      return;
    }
    return l(t, n, s);
  }
  prepareLoading(t, n) {
    let r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
      a = arguments.length > 3 ? arguments[3] : void 0;
    if (!this.backend) return this.logger.warn('No backend was added via i18next.use. Will not load resources.'), a && a();
    typeof t == 'string' && (t = this.languageUtils.toResolveHierarchy(t)), typeof n == 'string' && (n = [n]);
    const i = this.queueLoad(t, n, r, a);
    if (!i.toLoad.length) return i.pending.length || a(), null;
    i.toLoad.forEach(o => {
      this.loadOne(o);
    });
  }
  load(t, n, r) {
    this.prepareLoading(t, n, {}, r);
  }
  reload(t, n, r) {
    this.prepareLoading(t, n, { reload: !0 }, r);
  }
  loadOne(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '';
    const r = t.split('|'),
      a = r[0],
      i = r[1];
    this.read(a, i, 'read', void 0, void 0, (o, s) => {
      o && this.logger.warn(`${n}loading namespace ${i} for language ${a} failed`, o),
        !o && s && this.logger.log(`${n}loaded namespace ${i} for language ${a}`, s),
        this.loaded(t, o, s);
    });
  }
  saveMissing(t, n, r, a, i) {
    let o = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : {},
      s = arguments.length > 6 && arguments[6] !== void 0 ? arguments[6] : () => {};
    if (this.services.utils && this.services.utils.hasLoadedNamespace && !this.services.utils.hasLoadedNamespace(n)) {
      this.logger.warn(
        `did not save key "${r}" as the namespace "${n}" was not yet loaded`,
        'This means something IS WRONG in your setup. You access the t function before i18next.init / i18next.loadNamespace / i18next.changeLanguage was done. Wait for the callback or Promise to resolve before accessing it!!!',
      );
      return;
    }
    if (!(r == null || r === '')) {
      if (this.backend && this.backend.create) {
        const l = { ...o, isUpdate: i },
          u = this.backend.create.bind(this.backend);
        if (u.length < 6)
          try {
            let d;
            u.length === 5 ? (d = u(t, n, r, a, l)) : (d = u(t, n, r, a)),
              d && typeof d.then == 'function' ? d.then(p => s(null, p)).catch(s) : s(null, d);
          } catch (d) {
            s(d);
          }
        else u(t, n, r, a, s, l);
      }
      !t || !t[0] || this.store.addResource(t[0], n, r, a);
    }
  }
}
function ml() {
  return {
    debug: !1,
    initImmediate: !0,
    ns: ['translation'],
    defaultNS: ['translation'],
    fallbackLng: ['dev'],
    fallbackNS: !1,
    supportedLngs: !1,
    nonExplicitSupportedLngs: !1,
    load: 'all',
    preload: !1,
    simplifyPluralSuffix: !0,
    keySeparator: '.',
    nsSeparator: ':',
    pluralSeparator: '_',
    contextSeparator: '_',
    partialBundledLanguages: !1,
    saveMissing: !1,
    updateMissing: !1,
    saveMissingTo: 'fallback',
    saveMissingPlurals: !0,
    missingKeyHandler: !1,
    missingInterpolationHandler: !1,
    postProcess: !1,
    postProcessPassResolved: !1,
    returnNull: !1,
    returnEmptyString: !0,
    returnObjects: !1,
    joinArrays: !1,
    returnedObjectHandler: !1,
    parseMissingKeyHandler: !1,
    appendNamespaceToMissingKey: !1,
    appendNamespaceToCIMode: !1,
    overloadTranslationOptionHandler: function (t) {
      let n = {};
      if (
        (typeof t[1] == 'object' && (n = t[1]),
        typeof t[1] == 'string' && (n.defaultValue = t[1]),
        typeof t[2] == 'string' && (n.tDescription = t[2]),
        typeof t[2] == 'object' || typeof t[3] == 'object')
      ) {
        const r = t[3] || t[2];
        Object.keys(r).forEach(a => {
          n[a] = r[a];
        });
      }
      return n;
    },
    interpolation: {
      escapeValue: !0,
      format: e => e,
      prefix: '{{',
      suffix: '}}',
      formatSeparator: ',',
      unescapePrefix: '-',
      nestingPrefix: '$t(',
      nestingSuffix: ')',
      nestingOptionsSeparator: ',',
      maxReplaces: 1e3,
      skipOnVariables: !0,
    },
  };
}
function hl(e) {
  return (
    typeof e.ns == 'string' && (e.ns = [e.ns]),
    typeof e.fallbackLng == 'string' && (e.fallbackLng = [e.fallbackLng]),
    typeof e.fallbackNS == 'string' && (e.fallbackNS = [e.fallbackNS]),
    e.supportedLngs && e.supportedLngs.indexOf('cimode') < 0 && (e.supportedLngs = e.supportedLngs.concat(['cimode'])),
    e
  );
}
function Ta() {}
function om(e) {
  Object.getOwnPropertyNames(Object.getPrototypeOf(e)).forEach(n => {
    typeof e[n] == 'function' && (e[n] = e[n].bind(e));
  });
}
class aa extends ki {
  constructor() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    if (
      (super(),
      (this.options = hl(t)),
      (this.services = {}),
      (this.logger = zt),
      (this.modules = { external: [] }),
      om(this),
      n && !this.isInitialized && !t.isClone)
    ) {
      if (!this.options.initImmediate) return this.init(t, n), this;
      setTimeout(() => {
        this.init(t, n);
      }, 0);
    }
  }
  init() {
    var t = this;
    let n = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      r = arguments.length > 1 ? arguments[1] : void 0;
    (this.isInitializing = !0),
      typeof n == 'function' && ((r = n), (n = {})),
      !n.defaultNS &&
        n.defaultNS !== !1 &&
        n.ns &&
        (typeof n.ns == 'string' ? (n.defaultNS = n.ns) : n.ns.indexOf('translation') < 0 && (n.defaultNS = n.ns[0]));
    const a = ml();
    (this.options = { ...a, ...this.options, ...hl(n) }),
      this.options.compatibilityAPI !== 'v1' && (this.options.interpolation = { ...a.interpolation, ...this.options.interpolation }),
      n.keySeparator !== void 0 && (this.options.userDefinedKeySeparator = n.keySeparator),
      n.nsSeparator !== void 0 && (this.options.userDefinedNsSeparator = n.nsSeparator);
    function i(d) {
      return d ? (typeof d == 'function' ? new d() : d) : null;
    }
    if (!this.options.isClone) {
      this.modules.logger ? zt.init(i(this.modules.logger), this.options) : zt.init(null, this.options);
      let d;
      this.modules.formatter ? (d = this.modules.formatter) : typeof Intl < 'u' && (d = rm);
      const p = new ul(this.options);
      this.store = new cl(this.options.resources, this.options);
      const f = this.services;
      (f.logger = zt),
        (f.resourceStore = this.store),
        (f.languageUtils = p),
        (f.pluralResolver = new em(p, {
          prepend: this.options.pluralSeparator,
          compatibilityJSON: this.options.compatibilityJSON,
          simplifyPluralSuffix: this.options.simplifyPluralSuffix,
        })),
        d &&
          (!this.options.interpolation.format || this.options.interpolation.format === a.interpolation.format) &&
          ((f.formatter = i(d)),
          f.formatter.init(f, this.options),
          (this.options.interpolation.format = f.formatter.format.bind(f.formatter))),
        (f.interpolator = new tm(this.options)),
        (f.utils = { hasLoadedNamespace: this.hasLoadedNamespace.bind(this) }),
        (f.backendConnector = new im(i(this.modules.backend), f.resourceStore, f, this.options)),
        f.backendConnector.on('*', function (h) {
          for (var b = arguments.length, v = new Array(b > 1 ? b - 1 : 0), w = 1; w < b; w++) v[w - 1] = arguments[w];
          t.emit(h, ...v);
        }),
        this.modules.languageDetector &&
          ((f.languageDetector = i(this.modules.languageDetector)),
          f.languageDetector.init && f.languageDetector.init(f, this.options.detection, this.options)),
        this.modules.i18nFormat && ((f.i18nFormat = i(this.modules.i18nFormat)), f.i18nFormat.init && f.i18nFormat.init(this)),
        (this.translator = new Za(this.services, this.options)),
        this.translator.on('*', function (h) {
          for (var b = arguments.length, v = new Array(b > 1 ? b - 1 : 0), w = 1; w < b; w++) v[w - 1] = arguments[w];
          t.emit(h, ...v);
        }),
        this.modules.external.forEach(h => {
          h.init && h.init(this);
        });
    }
    if (
      ((this.format = this.options.interpolation.format),
      r || (r = Ta),
      this.options.fallbackLng && !this.services.languageDetector && !this.options.lng)
    ) {
      const d = this.services.languageUtils.getFallbackCodes(this.options.fallbackLng);
      d.length > 0 && d[0] !== 'dev' && (this.options.lng = d[0]);
    }
    !this.services.languageDetector && !this.options.lng && this.logger.warn('init: no languageDetector is used and no lng is defined'),
      ['getResource', 'hasResourceBundle', 'getResourceBundle', 'getDataByLanguage'].forEach(d => {
        this[d] = function () {
          return t.store[d](...arguments);
        };
      }),
      ['addResource', 'addResources', 'addResourceBundle', 'removeResourceBundle'].forEach(d => {
        this[d] = function () {
          return t.store[d](...arguments), t;
        };
      });
    const l = Vr(),
      u = () => {
        const d = (p, f) => {
          (this.isInitializing = !1),
            this.isInitialized &&
              !this.initializedStoreOnce &&
              this.logger.warn('init: i18next is already initialized. You should call init just once!'),
            (this.isInitialized = !0),
            this.options.isClone || this.logger.log('initialized', this.options),
            this.emit('initialized', this.options),
            l.resolve(f),
            r(p, f);
        };
        if (this.languages && this.options.compatibilityAPI !== 'v1' && !this.isInitialized) return d(null, this.t.bind(this));
        this.changeLanguage(this.options.lng, d);
      };
    return this.options.resources || !this.options.initImmediate ? u() : setTimeout(u, 0), l;
  }
  loadResources(t) {
    let r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ta;
    const a = typeof t == 'string' ? t : this.language;
    if ((typeof t == 'function' && (r = t), !this.options.resources || this.options.partialBundledLanguages)) {
      if (a && a.toLowerCase() === 'cimode' && (!this.options.preload || this.options.preload.length === 0)) return r();
      const i = [],
        o = s => {
          if (!s || s === 'cimode') return;
          this.services.languageUtils.toResolveHierarchy(s).forEach(u => {
            u !== 'cimode' && i.indexOf(u) < 0 && i.push(u);
          });
        };
      a ? o(a) : this.services.languageUtils.getFallbackCodes(this.options.fallbackLng).forEach(l => o(l)),
        this.options.preload && this.options.preload.forEach(s => o(s)),
        this.services.backendConnector.load(i, this.options.ns, s => {
          !s && !this.resolvedLanguage && this.language && this.setResolvedLanguage(this.language), r(s);
        });
    } else r(null);
  }
  reloadResources(t, n, r) {
    const a = Vr();
    return (
      t || (t = this.languages),
      n || (n = this.options.ns),
      r || (r = Ta),
      this.services.backendConnector.reload(t, n, i => {
        a.resolve(), r(i);
      }),
      a
    );
  }
  use(t) {
    if (!t) throw new Error('You are passing an undefined module! Please check the object you are passing to i18next.use()');
    if (!t.type) throw new Error('You are passing a wrong module! Please check the object you are passing to i18next.use()');
    return (
      t.type === 'backend' && (this.modules.backend = t),
      (t.type === 'logger' || (t.log && t.warn && t.error)) && (this.modules.logger = t),
      t.type === 'languageDetector' && (this.modules.languageDetector = t),
      t.type === 'i18nFormat' && (this.modules.i18nFormat = t),
      t.type === 'postProcessor' && Gc.addPostProcessor(t),
      t.type === 'formatter' && (this.modules.formatter = t),
      t.type === '3rdParty' && this.modules.external.push(t),
      this
    );
  }
  setResolvedLanguage(t) {
    if (!(!t || !this.languages) && !(['cimode', 'dev'].indexOf(t) > -1))
      for (let n = 0; n < this.languages.length; n++) {
        const r = this.languages[n];
        if (!(['cimode', 'dev'].indexOf(r) > -1) && this.store.hasLanguageSomeTranslations(r)) {
          this.resolvedLanguage = r;
          break;
        }
      }
  }
  changeLanguage(t, n) {
    var r = this;
    this.isLanguageChangingTo = t;
    const a = Vr();
    this.emit('languageChanging', t);
    const i = l => {
        (this.language = l),
          (this.languages = this.services.languageUtils.toResolveHierarchy(l)),
          (this.resolvedLanguage = void 0),
          this.setResolvedLanguage(l);
      },
      o = (l, u) => {
        u
          ? (i(u),
            this.translator.changeLanguage(u),
            (this.isLanguageChangingTo = void 0),
            this.emit('languageChanged', u),
            this.logger.log('languageChanged', u))
          : (this.isLanguageChangingTo = void 0),
          a.resolve(function () {
            return r.t(...arguments);
          }),
          n &&
            n(l, function () {
              return r.t(...arguments);
            });
      },
      s = l => {
        !t && !l && this.services.languageDetector && (l = []);
        const u = typeof l == 'string' ? l : this.services.languageUtils.getBestMatchFromCodes(l);
        u &&
          (this.language || i(u),
          this.translator.language || this.translator.changeLanguage(u),
          this.services.languageDetector &&
            this.services.languageDetector.cacheUserLanguage &&
            this.services.languageDetector.cacheUserLanguage(u)),
          this.loadResources(u, d => {
            o(d, u);
          });
      };
    return (
      !t && this.services.languageDetector && !this.services.languageDetector.async
        ? s(this.services.languageDetector.detect())
        : !t && this.services.languageDetector && this.services.languageDetector.async
          ? this.services.languageDetector.detect.length === 0
            ? this.services.languageDetector.detect().then(s)
            : this.services.languageDetector.detect(s)
          : s(t),
      a
    );
  }
  getFixedT(t, n, r) {
    var a = this;
    const i = function (o, s) {
      let l;
      if (typeof s != 'object') {
        for (var u = arguments.length, d = new Array(u > 2 ? u - 2 : 0), p = 2; p < u; p++) d[p - 2] = arguments[p];
        l = a.options.overloadTranslationOptionHandler([o, s].concat(d));
      } else l = { ...s };
      (l.lng = l.lng || i.lng), (l.lngs = l.lngs || i.lngs), (l.ns = l.ns || i.ns), (l.keyPrefix = l.keyPrefix || r || i.keyPrefix);
      const f = a.options.keySeparator || '.';
      let h;
      return (
        l.keyPrefix && Array.isArray(o) ? (h = o.map(b => `${l.keyPrefix}${f}${b}`)) : (h = l.keyPrefix ? `${l.keyPrefix}${f}${o}` : o),
        a.t(h, l)
      );
    };
    return typeof t == 'string' ? (i.lng = t) : (i.lngs = t), (i.ns = n), (i.keyPrefix = r), i;
  }
  t() {
    return this.translator && this.translator.translate(...arguments);
  }
  exists() {
    return this.translator && this.translator.exists(...arguments);
  }
  setDefaultNamespace(t) {
    this.options.defaultNS = t;
  }
  hasLoadedNamespace(t) {
    let n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
    if (!this.isInitialized) return this.logger.warn('hasLoadedNamespace: i18next was not initialized', this.languages), !1;
    if (!this.languages || !this.languages.length)
      return this.logger.warn('hasLoadedNamespace: i18n.languages were undefined or empty', this.languages), !1;
    const r = n.lng || this.resolvedLanguage || this.languages[0],
      a = this.options ? this.options.fallbackLng : !1,
      i = this.languages[this.languages.length - 1];
    if (r.toLowerCase() === 'cimode') return !0;
    const o = (s, l) => {
      const u = this.services.backendConnector.state[`${s}|${l}`];
      return u === -1 || u === 2;
    };
    if (n.precheck) {
      const s = n.precheck(this, o);
      if (s !== void 0) return s;
    }
    return !!(
      this.hasResourceBundle(r, t) ||
      !this.services.backendConnector.backend ||
      (this.options.resources && !this.options.partialBundledLanguages) ||
      (o(r, t) && (!a || o(i, t)))
    );
  }
  loadNamespaces(t, n) {
    const r = Vr();
    return this.options.ns
      ? (typeof t == 'string' && (t = [t]),
        t.forEach(a => {
          this.options.ns.indexOf(a) < 0 && this.options.ns.push(a);
        }),
        this.loadResources(a => {
          r.resolve(), n && n(a);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  loadLanguages(t, n) {
    const r = Vr();
    typeof t == 'string' && (t = [t]);
    const a = this.options.preload || [],
      i = t.filter(o => a.indexOf(o) < 0 && this.services.languageUtils.isSupportedCode(o));
    return i.length
      ? ((this.options.preload = a.concat(i)),
        this.loadResources(o => {
          r.resolve(), n && n(o);
        }),
        r)
      : (n && n(), Promise.resolve());
  }
  dir(t) {
    if ((t || (t = this.resolvedLanguage || (this.languages && this.languages.length > 0 ? this.languages[0] : this.language)), !t))
      return 'rtl';
    const n = [
        'ar',
        'shu',
        'sqr',
        'ssh',
        'xaa',
        'yhd',
        'yud',
        'aao',
        'abh',
        'abv',
        'acm',
        'acq',
        'acw',
        'acx',
        'acy',
        'adf',
        'ads',
        'aeb',
        'aec',
        'afb',
        'ajp',
        'apc',
        'apd',
        'arb',
        'arq',
        'ars',
        'ary',
        'arz',
        'auz',
        'avl',
        'ayh',
        'ayl',
        'ayn',
        'ayp',
        'bbz',
        'pga',
        'he',
        'iw',
        'ps',
        'pbt',
        'pbu',
        'pst',
        'prp',
        'prd',
        'ug',
        'ur',
        'ydd',
        'yds',
        'yih',
        'ji',
        'yi',
        'hbo',
        'men',
        'xmn',
        'fa',
        'jpr',
        'peo',
        'pes',
        'prs',
        'dv',
        'sam',
        'ckb',
      ],
      r = (this.services && this.services.languageUtils) || new ul(ml());
    return n.indexOf(r.getLanguagePartFromCode(t)) > -1 || t.toLowerCase().indexOf('-arab') > 1 ? 'rtl' : 'ltr';
  }
  static createInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 ? arguments[1] : void 0;
    return new aa(t, n);
  }
  cloneInstance() {
    let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Ta;
    const r = t.forkResourceStore;
    r && delete t.forkResourceStore;
    const a = { ...this.options, ...t, isClone: !0 },
      i = new aa(a);
    return (
      (t.debug !== void 0 || t.prefix !== void 0) && (i.logger = i.logger.clone(t)),
      ['store', 'services', 'language'].forEach(s => {
        i[s] = this[s];
      }),
      (i.services = { ...this.services }),
      (i.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }),
      r && ((i.store = new cl(this.store.data, a)), (i.services.resourceStore = i.store)),
      (i.translator = new Za(i.services, a)),
      i.translator.on('*', function (s) {
        for (var l = arguments.length, u = new Array(l > 1 ? l - 1 : 0), d = 1; d < l; d++) u[d - 1] = arguments[d];
        i.emit(s, ...u);
      }),
      i.init(a, n),
      (i.translator.options = a),
      (i.translator.backendConnector.services.utils = { hasLoadedNamespace: i.hasLoadedNamespace.bind(i) }),
      i
    );
  }
  toJSON() {
    return {
      options: this.options,
      store: this.store,
      language: this.language,
      languages: this.languages,
      resolvedLanguage: this.resolvedLanguage,
    };
  }
}
const mt = aa.createInstance();
mt.createInstance = aa.createInstance;
const sm = mt.createInstance;
mt.dir;
mt.init;
mt.loadResources;
mt.reloadResources;
mt.use;
mt.changeLanguage;
mt.getFixedT;
mt.t;
mt.exists;
mt.setDefaultNamespace;
mt.hasLoadedNamespace;
mt.loadNamespaces;
mt.loadLanguages;
function Co(e) {
  '@babel/helpers - typeof';
  return (
    (Co =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
          }),
    Co(e)
  );
}
function qc() {
  return typeof XMLHttpRequest == 'function' || (typeof XMLHttpRequest > 'u' ? 'undefined' : Co(XMLHttpRequest)) === 'object';
}
function lm(e) {
  return !!e && typeof e.then == 'function';
}
function cm(e) {
  return lm(e) ? e : Promise.resolve(e);
}
function dm(e) {
  throw new Error(
    'Could not dynamically require "' +
      e +
      '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.',
  );
}
var Oo = { exports: {} },
  Pa = { exports: {} },
  gl;
function um() {
  return (
    gl ||
      ((gl = 1),
      (function (e, t) {
        var n = (typeof globalThis < 'u' && globalThis) || (typeof self < 'u' && self) || (typeof dr < 'u' && dr),
          r = (function () {
            function i() {
              (this.fetch = !1), (this.DOMException = n.DOMException);
            }
            return (i.prototype = n), new i();
          })();
        (function (i) {
          (function (o) {
            var s = (typeof i < 'u' && i) || (typeof self < 'u' && self) || (typeof s < 'u' && s),
              l = {
                searchParams: 'URLSearchParams' in s,
                iterable: 'Symbol' in s && 'iterator' in Symbol,
                blob:
                  'FileReader' in s &&
                  'Blob' in s &&
                  (function () {
                    try {
                      return new Blob(), !0;
                    } catch {
                      return !1;
                    }
                  })(),
                formData: 'FormData' in s,
                arrayBuffer: 'ArrayBuffer' in s,
              };
            function u(x) {
              return x && DataView.prototype.isPrototypeOf(x);
            }
            if (l.arrayBuffer)
              var d = [
                  '[object Int8Array]',
                  '[object Uint8Array]',
                  '[object Uint8ClampedArray]',
                  '[object Int16Array]',
                  '[object Uint16Array]',
                  '[object Int32Array]',
                  '[object Uint32Array]',
                  '[object Float32Array]',
                  '[object Float64Array]',
                ],
                p =
                  ArrayBuffer.isView ||
                  function (x) {
                    return x && d.indexOf(Object.prototype.toString.call(x)) > -1;
                  };
            function f(x) {
              if ((typeof x != 'string' && (x = String(x)), /[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(x) || x === ''))
                throw new TypeError('Invalid character in header field name: "' + x + '"');
              return x.toLowerCase();
            }
            function h(x) {
              return typeof x != 'string' && (x = String(x)), x;
            }
            function b(x) {
              var D = {
                next: function () {
                  var G = x.shift();
                  return { done: G === void 0, value: G };
                },
              };
              return (
                l.iterable &&
                  (D[Symbol.iterator] = function () {
                    return D;
                  }),
                D
              );
            }
            function v(x) {
              (this.map = {}),
                x instanceof v
                  ? x.forEach(function (D, G) {
                      this.append(G, D);
                    }, this)
                  : Array.isArray(x)
                    ? x.forEach(function (D) {
                        this.append(D[0], D[1]);
                      }, this)
                    : x &&
                      Object.getOwnPropertyNames(x).forEach(function (D) {
                        this.append(D, x[D]);
                      }, this);
            }
            (v.prototype.append = function (x, D) {
              (x = f(x)), (D = h(D));
              var G = this.map[x];
              this.map[x] = G ? G + ', ' + D : D;
            }),
              (v.prototype.delete = function (x) {
                delete this.map[f(x)];
              }),
              (v.prototype.get = function (x) {
                return (x = f(x)), this.has(x) ? this.map[x] : null;
              }),
              (v.prototype.has = function (x) {
                return this.map.hasOwnProperty(f(x));
              }),
              (v.prototype.set = function (x, D) {
                this.map[f(x)] = h(D);
              }),
              (v.prototype.forEach = function (x, D) {
                for (var G in this.map) this.map.hasOwnProperty(G) && x.call(D, this.map[G], G, this);
              }),
              (v.prototype.keys = function () {
                var x = [];
                return (
                  this.forEach(function (D, G) {
                    x.push(G);
                  }),
                  b(x)
                );
              }),
              (v.prototype.values = function () {
                var x = [];
                return (
                  this.forEach(function (D) {
                    x.push(D);
                  }),
                  b(x)
                );
              }),
              (v.prototype.entries = function () {
                var x = [];
                return (
                  this.forEach(function (D, G) {
                    x.push([G, D]);
                  }),
                  b(x)
                );
              }),
              l.iterable && (v.prototype[Symbol.iterator] = v.prototype.entries);
            function w(x) {
              if (x.bodyUsed) return Promise.reject(new TypeError('Already read'));
              x.bodyUsed = !0;
            }
            function T(x) {
              return new Promise(function (D, G) {
                (x.onload = function () {
                  D(x.result);
                }),
                  (x.onerror = function () {
                    G(x.error);
                  });
              });
            }
            function N(x) {
              var D = new FileReader(),
                G = T(D);
              return D.readAsArrayBuffer(x), G;
            }
            function B(x) {
              var D = new FileReader(),
                G = T(D);
              return D.readAsText(x), G;
            }
            function A(x) {
              for (var D = new Uint8Array(x), G = new Array(D.length), z = 0; z < D.length; z++) G[z] = String.fromCharCode(D[z]);
              return G.join('');
            }
            function L(x) {
              if (x.slice) return x.slice(0);
              var D = new Uint8Array(x.byteLength);
              return D.set(new Uint8Array(x)), D.buffer;
            }
            function g() {
              return (
                (this.bodyUsed = !1),
                (this._initBody = function (x) {
                  (this.bodyUsed = this.bodyUsed),
                    (this._bodyInit = x),
                    x
                      ? typeof x == 'string'
                        ? (this._bodyText = x)
                        : l.blob && Blob.prototype.isPrototypeOf(x)
                          ? (this._bodyBlob = x)
                          : l.formData && FormData.prototype.isPrototypeOf(x)
                            ? (this._bodyFormData = x)
                            : l.searchParams && URLSearchParams.prototype.isPrototypeOf(x)
                              ? (this._bodyText = x.toString())
                              : l.arrayBuffer && l.blob && u(x)
                                ? ((this._bodyArrayBuffer = L(x.buffer)), (this._bodyInit = new Blob([this._bodyArrayBuffer])))
                                : l.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(x) || p(x))
                                  ? (this._bodyArrayBuffer = L(x))
                                  : (this._bodyText = x = Object.prototype.toString.call(x))
                      : (this._bodyText = ''),
                    this.headers.get('content-type') ||
                      (typeof x == 'string'
                        ? this.headers.set('content-type', 'text/plain;charset=UTF-8')
                        : this._bodyBlob && this._bodyBlob.type
                          ? this.headers.set('content-type', this._bodyBlob.type)
                          : l.searchParams &&
                            URLSearchParams.prototype.isPrototypeOf(x) &&
                            this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8'));
                }),
                l.blob &&
                  ((this.blob = function () {
                    var x = w(this);
                    if (x) return x;
                    if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                    if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                    if (this._bodyFormData) throw new Error('could not read FormData body as blob');
                    return Promise.resolve(new Blob([this._bodyText]));
                  }),
                  (this.arrayBuffer = function () {
                    if (this._bodyArrayBuffer) {
                      var x = w(this);
                      return (
                        x ||
                        (ArrayBuffer.isView(this._bodyArrayBuffer)
                          ? Promise.resolve(
                              this._bodyArrayBuffer.buffer.slice(
                                this._bodyArrayBuffer.byteOffset,
                                this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength,
                              ),
                            )
                          : Promise.resolve(this._bodyArrayBuffer))
                      );
                    } else return this.blob().then(N);
                  })),
                (this.text = function () {
                  var x = w(this);
                  if (x) return x;
                  if (this._bodyBlob) return B(this._bodyBlob);
                  if (this._bodyArrayBuffer) return Promise.resolve(A(this._bodyArrayBuffer));
                  if (this._bodyFormData) throw new Error('could not read FormData body as text');
                  return Promise.resolve(this._bodyText);
                }),
                l.formData &&
                  (this.formData = function () {
                    return this.text().then(k);
                  }),
                (this.json = function () {
                  return this.text().then(JSON.parse);
                }),
                this
              );
            }
            var m = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
            function S(x) {
              var D = x.toUpperCase();
              return m.indexOf(D) > -1 ? D : x;
            }
            function E(x, D) {
              if (!(this instanceof E))
                throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
              D = D || {};
              var G = D.body;
              if (x instanceof E) {
                if (x.bodyUsed) throw new TypeError('Already read');
                (this.url = x.url),
                  (this.credentials = x.credentials),
                  D.headers || (this.headers = new v(x.headers)),
                  (this.method = x.method),
                  (this.mode = x.mode),
                  (this.signal = x.signal),
                  !G && x._bodyInit != null && ((G = x._bodyInit), (x.bodyUsed = !0));
              } else this.url = String(x);
              if (
                ((this.credentials = D.credentials || this.credentials || 'same-origin'),
                (D.headers || !this.headers) && (this.headers = new v(D.headers)),
                (this.method = S(D.method || this.method || 'GET')),
                (this.mode = D.mode || this.mode || null),
                (this.signal = D.signal || this.signal),
                (this.referrer = null),
                (this.method === 'GET' || this.method === 'HEAD') && G)
              )
                throw new TypeError('Body not allowed for GET or HEAD requests');
              if (
                (this._initBody(G), (this.method === 'GET' || this.method === 'HEAD') && (D.cache === 'no-store' || D.cache === 'no-cache'))
              ) {
                var z = /([?&])_=[^&]*/;
                if (z.test(this.url)) this.url = this.url.replace(z, '$1_=' + new Date().getTime());
                else {
                  var K = /\?/;
                  this.url += (K.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
                }
              }
            }
            E.prototype.clone = function () {
              return new E(this, { body: this._bodyInit });
            };
            function k(x) {
              var D = new FormData();
              return (
                x
                  .trim()
                  .split('&')
                  .forEach(function (G) {
                    if (G) {
                      var z = G.split('='),
                        K = z.shift().replace(/\+/g, ' '),
                        ne = z.join('=').replace(/\+/g, ' ');
                      D.append(decodeURIComponent(K), decodeURIComponent(ne));
                    }
                  }),
                D
              );
            }
            function y(x) {
              var D = new v(),
                G = x.replace(/\r?\n[\t ]+/g, ' ');
              return (
                G.split('\r')
                  .map(function (z) {
                    return z.indexOf(`
`) === 0
                      ? z.substr(1, z.length)
                      : z;
                  })
                  .forEach(function (z) {
                    var K = z.split(':'),
                      ne = K.shift().trim();
                    if (ne) {
                      var C = K.join(':').trim();
                      D.append(ne, C);
                    }
                  }),
                D
              );
            }
            g.call(E.prototype);
            function _(x, D) {
              if (!(this instanceof _))
                throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.');
              D || (D = {}),
                (this.type = 'default'),
                (this.status = D.status === void 0 ? 200 : D.status),
                (this.ok = this.status >= 200 && this.status < 300),
                (this.statusText = D.statusText === void 0 ? '' : '' + D.statusText),
                (this.headers = new v(D.headers)),
                (this.url = D.url || ''),
                this._initBody(x);
            }
            g.call(_.prototype),
              (_.prototype.clone = function () {
                return new _(this._bodyInit, {
                  status: this.status,
                  statusText: this.statusText,
                  headers: new v(this.headers),
                  url: this.url,
                });
              }),
              (_.error = function () {
                var x = new _(null, { status: 0, statusText: '' });
                return (x.type = 'error'), x;
              });
            var O = [301, 302, 303, 307, 308];
            (_.redirect = function (x, D) {
              if (O.indexOf(D) === -1) throw new RangeError('Invalid status code');
              return new _(null, { status: D, headers: { location: x } });
            }),
              (o.DOMException = s.DOMException);
            try {
              new o.DOMException();
            } catch {
              (o.DOMException = function (D, G) {
                (this.message = D), (this.name = G);
                var z = Error(D);
                this.stack = z.stack;
              }),
                (o.DOMException.prototype = Object.create(Error.prototype)),
                (o.DOMException.prototype.constructor = o.DOMException);
            }
            function U(x, D) {
              return new Promise(function (G, z) {
                var K = new E(x, D);
                if (K.signal && K.signal.aborted) return z(new o.DOMException('Aborted', 'AbortError'));
                var ne = new XMLHttpRequest();
                function C() {
                  ne.abort();
                }
                (ne.onload = function () {
                  var H = { status: ne.status, statusText: ne.statusText, headers: y(ne.getAllResponseHeaders() || '') };
                  H.url = 'responseURL' in ne ? ne.responseURL : H.headers.get('X-Request-URL');
                  var q = 'response' in ne ? ne.response : ne.responseText;
                  setTimeout(function () {
                    G(new _(q, H));
                  }, 0);
                }),
                  (ne.onerror = function () {
                    setTimeout(function () {
                      z(new TypeError('Network request failed'));
                    }, 0);
                  }),
                  (ne.ontimeout = function () {
                    setTimeout(function () {
                      z(new TypeError('Network request failed'));
                    }, 0);
                  }),
                  (ne.onabort = function () {
                    setTimeout(function () {
                      z(new o.DOMException('Aborted', 'AbortError'));
                    }, 0);
                  });
                function P(H) {
                  try {
                    return H === '' && s.location.href ? s.location.href : H;
                  } catch {
                    return H;
                  }
                }
                ne.open(K.method, P(K.url), !0),
                  K.credentials === 'include' ? (ne.withCredentials = !0) : K.credentials === 'omit' && (ne.withCredentials = !1),
                  'responseType' in ne &&
                    (l.blob
                      ? (ne.responseType = 'blob')
                      : l.arrayBuffer &&
                        K.headers.get('Content-Type') &&
                        K.headers.get('Content-Type').indexOf('application/octet-stream') !== -1 &&
                        (ne.responseType = 'arraybuffer')),
                  D && typeof D.headers == 'object' && !(D.headers instanceof v)
                    ? Object.getOwnPropertyNames(D.headers).forEach(function (H) {
                        ne.setRequestHeader(H, h(D.headers[H]));
                      })
                    : K.headers.forEach(function (H, q) {
                        ne.setRequestHeader(q, H);
                      }),
                  K.signal &&
                    (K.signal.addEventListener('abort', C),
                    (ne.onreadystatechange = function () {
                      ne.readyState === 4 && K.signal.removeEventListener('abort', C);
                    })),
                  ne.send(typeof K._bodyInit > 'u' ? null : K._bodyInit);
              });
            }
            return (
              (U.polyfill = !0),
              s.fetch || ((s.fetch = U), (s.Headers = v), (s.Request = E), (s.Response = _)),
              (o.Headers = v),
              (o.Request = E),
              (o.Response = _),
              (o.fetch = U),
              o
            );
          })({});
        })(r),
          (r.fetch.ponyfill = !0),
          delete r.fetch.polyfill;
        var a = n.fetch ? n : r;
        (t = a.fetch),
          (t.default = a.fetch),
          (t.fetch = a.fetch),
          (t.Headers = a.Headers),
          (t.Request = a.Request),
          (t.Response = a.Response),
          (e.exports = t);
      })(Pa, Pa.exports)),
    Pa.exports
  );
}
(function (e, t) {
  var n;
  if (
    (typeof fetch == 'function' &&
      (typeof dr < 'u' && dr.fetch ? (n = dr.fetch) : typeof window < 'u' && window.fetch ? (n = window.fetch) : (n = fetch)),
    typeof dm < 'u' && typeof window > 'u')
  ) {
    var r = n || um();
    r.default && (r = r.default), (t.default = r), (e.exports = t.default);
  }
})(Oo, Oo.exports);
var Kc = Oo.exports;
const Xc = Ec(Kc),
  vl = df({ __proto__: null, default: Xc }, [Kc]);
function bl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function yl(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? bl(Object(n), !0).forEach(function (r) {
          fm(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : bl(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function fm(e, t, n) {
  return (t = pm(t)), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
function pm(e) {
  var t = mm(e, 'string');
  return jn(t) == 'symbol' ? t : t + '';
}
function mm(e, t) {
  if (jn(e) != 'object' || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (jn(r) != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function jn(e) {
  '@babel/helpers - typeof';
  return (
    (jn =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
          }),
    jn(e)
  );
}
var an;
typeof fetch == 'function' &&
  (typeof global < 'u' && global.fetch ? (an = global.fetch) : typeof window < 'u' && window.fetch ? (an = window.fetch) : (an = fetch));
var ia;
qc() &&
  (typeof global < 'u' && global.XMLHttpRequest
    ? (ia = global.XMLHttpRequest)
    : typeof window < 'u' && window.XMLHttpRequest && (ia = window.XMLHttpRequest));
var ei;
typeof ActiveXObject == 'function' &&
  (typeof global < 'u' && global.ActiveXObject
    ? (ei = global.ActiveXObject)
    : typeof window < 'u' && window.ActiveXObject && (ei = window.ActiveXObject));
!an && vl && !ia && !ei && (an = Xc || vl);
typeof an != 'function' && (an = void 0);
var _o = function (t, n) {
    if (n && jn(n) === 'object') {
      var r = '';
      for (var a in n) r += '&' + encodeURIComponent(a) + '=' + encodeURIComponent(n[a]);
      if (!r) return t;
      t = t + (t.indexOf('?') !== -1 ? '&' : '?') + r.slice(1);
    }
    return t;
  },
  xl = function (t, n, r, a) {
    var i = function (l) {
      if (!l.ok) return r(l.statusText || 'Error', { status: l.status });
      l.text()
        .then(function (u) {
          r(null, { status: l.status, data: u });
        })
        .catch(r);
    };
    if (a) {
      var o = a(t, n);
      if (o instanceof Promise) {
        o.then(i).catch(r);
        return;
      }
    }
    typeof fetch == 'function' ? fetch(t, n).then(i).catch(r) : an(t, n).then(i).catch(r);
  },
  wl = !1,
  hm = function (t, n, r, a) {
    t.queryStringParams && (n = _o(n, t.queryStringParams));
    var i = yl({}, typeof t.customHeaders == 'function' ? t.customHeaders() : t.customHeaders);
    typeof window > 'u' &&
      typeof global < 'u' &&
      typeof global.process < 'u' &&
      global.process.versions &&
      global.process.versions.node &&
      (i['User-Agent'] = 'i18next-http-backend (node/'
        .concat(global.process.version, '; ')
        .concat(global.process.platform, ' ')
        .concat(global.process.arch, ')')),
      r && (i['Content-Type'] = 'application/json');
    var o = typeof t.requestOptions == 'function' ? t.requestOptions(r) : t.requestOptions,
      s = yl({ method: r ? 'POST' : 'GET', body: r ? t.stringify(r) : void 0, headers: i }, wl ? {} : o),
      l = typeof t.alternateFetch == 'function' && t.alternateFetch.length >= 1 ? t.alternateFetch : void 0;
    try {
      xl(n, s, a, l);
    } catch (u) {
      if (!o || Object.keys(o).length === 0 || !u.message || u.message.indexOf('not implemented') < 0) return a(u);
      try {
        Object.keys(o).forEach(function (d) {
          delete s[d];
        }),
          xl(n, s, a, l),
          (wl = !0);
      } catch (d) {
        a(d);
      }
    }
  },
  gm = function (t, n, r, a) {
    r && jn(r) === 'object' && (r = _o('', r).slice(1)), t.queryStringParams && (n = _o(n, t.queryStringParams));
    try {
      var i;
      ia ? (i = new ia()) : (i = new ei('MSXML2.XMLHTTP.3.0')),
        i.open(r ? 'POST' : 'GET', n, 1),
        t.crossDomain || i.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
        (i.withCredentials = !!t.withCredentials),
        r && i.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
        i.overrideMimeType && i.overrideMimeType('application/json');
      var o = t.customHeaders;
      if (((o = typeof o == 'function' ? o() : o), o)) for (var s in o) i.setRequestHeader(s, o[s]);
      (i.onreadystatechange = function () {
        i.readyState > 3 && a(i.status >= 400 ? i.statusText : null, { status: i.status, data: i.responseText });
      }),
        i.send(r);
    } catch (l) {
      console && console.log(l);
    }
  },
  vm = function (t, n, r, a) {
    if ((typeof r == 'function' && ((a = r), (r = void 0)), (a = a || function () {}), an && n.indexOf('file:') !== 0))
      return hm(t, n, r, a);
    if (qc() || typeof ActiveXObject == 'function') return gm(t, n, r, a);
    a(new Error('No fetch and no xhr implementation found!'));
  };
function hr(e) {
  '@babel/helpers - typeof';
  return (
    (hr =
      typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t && typeof Symbol == 'function' && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
          }),
    hr(e)
  );
}
function Cl(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Wi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Cl(Object(n), !0).forEach(function (r) {
          Jc(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Cl(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function bm(e, t) {
  if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function');
}
function ym(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1), (r.configurable = !0), 'value' in r && (r.writable = !0), Object.defineProperty(e, Yc(r.key), r);
  }
}
function xm(e, t, n) {
  return t && ym(e.prototype, t), Object.defineProperty(e, 'prototype', { writable: !1 }), e;
}
function Jc(e, t, n) {
  return (t = Yc(t)), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
function Yc(e) {
  var t = wm(e, 'string');
  return hr(t) == 'symbol' ? t : t + '';
}
function wm(e, t) {
  if (hr(e) != 'object' || !e) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (hr(r) != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
var Cm = function () {
    return {
      loadPath: '/locales/{{lng}}/{{ns}}.json',
      addPath: '/locales/add/{{lng}}/{{ns}}',
      parse: function (n) {
        return JSON.parse(n);
      },
      stringify: JSON.stringify,
      parsePayload: function (n, r, a) {
        return Jc({}, r, a || '');
      },
      parseLoadPayload: function (n, r) {},
      request: vm,
      reloadInterval: typeof window < 'u' ? !1 : 60 * 60 * 1e3,
      customHeaders: {},
      queryStringParams: {},
      crossDomain: !1,
      withCredentials: !1,
      overrideMimeType: !1,
      requestOptions: { mode: 'cors', credentials: 'same-origin', cache: 'default' },
    };
  },
  Qc = (function () {
    function e(t) {
      var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
        r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
      bm(this, e), (this.services = t), (this.options = n), (this.allOptions = r), (this.type = 'backend'), this.init(t, n, r);
    }
    return xm(e, [
      {
        key: 'init',
        value: function (n) {
          var r = this,
            a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
            i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if (
            ((this.services = n),
            (this.options = Wi(Wi(Wi({}, Cm()), this.options || {}), a)),
            (this.allOptions = i),
            this.services && this.options.reloadInterval)
          ) {
            var o = setInterval(function () {
              return r.reload();
            }, this.options.reloadInterval);
            hr(o) === 'object' && typeof o.unref == 'function' && o.unref();
          }
        },
      },
      {
        key: 'readMulti',
        value: function (n, r, a) {
          this._readAny(n, n, r, r, a);
        },
      },
      {
        key: 'read',
        value: function (n, r, a) {
          this._readAny([n], n, [r], r, a);
        },
      },
      {
        key: '_readAny',
        value: function (n, r, a, i, o) {
          var s = this,
            l = this.options.loadPath;
          typeof this.options.loadPath == 'function' && (l = this.options.loadPath(n, a)),
            (l = cm(l)),
            l.then(function (u) {
              if (!u) return o(null, {});
              var d = s.services.interpolator.interpolate(u, { lng: n.join('+'), ns: a.join('+') });
              s.loadUrl(d, o, r, i);
            });
        },
      },
      {
        key: 'loadUrl',
        value: function (n, r, a, i) {
          var o = this,
            s = typeof a == 'string' ? [a] : a,
            l = typeof i == 'string' ? [i] : i,
            u = this.options.parseLoadPayload(s, l);
          this.options.request(this.options, n, u, function (d, p) {
            if (p && ((p.status >= 500 && p.status < 600) || !p.status)) return r('failed loading ' + n + '; status code: ' + p.status, !0);
            if (p && p.status >= 400 && p.status < 500) return r('failed loading ' + n + '; status code: ' + p.status, !1);
            if (!p && d && d.message && d.message.indexOf('Failed to fetch') > -1) return r('failed loading ' + n + ': ' + d.message, !0);
            if (d) return r(d, !1);
            var f, h;
            try {
              typeof p.data == 'string' ? (f = o.options.parse(p.data, a, i)) : (f = p.data);
            } catch {
              h = 'failed parsing ' + n + ' to json';
            }
            if (h) return r(h, !1);
            r(null, f);
          });
        },
      },
      {
        key: 'create',
        value: function (n, r, a, i, o) {
          var s = this;
          if (this.options.addPath) {
            typeof n == 'string' && (n = [n]);
            var l = this.options.parsePayload(r, a, i),
              u = 0,
              d = [],
              p = [];
            n.forEach(function (f) {
              var h = s.options.addPath;
              typeof s.options.addPath == 'function' && (h = s.options.addPath(f, r));
              var b = s.services.interpolator.interpolate(h, { lng: f, ns: r });
              s.options.request(s.options, b, l, function (v, w) {
                (u += 1), d.push(v), p.push(w), u === n.length && typeof o == 'function' && o(d, p);
              });
            });
          }
        },
      },
      {
        key: 'reload',
        value: function () {
          var n = this,
            r = this.services,
            a = r.backendConnector,
            i = r.languageUtils,
            o = r.logger,
            s = a.language;
          if (!(s && s.toLowerCase() === 'cimode')) {
            var l = [],
              u = function (p) {
                var f = i.toResolveHierarchy(p);
                f.forEach(function (h) {
                  l.indexOf(h) < 0 && l.push(h);
                });
              };
            u(s),
              this.allOptions.preload &&
                this.allOptions.preload.forEach(function (d) {
                  return u(d);
                }),
              l.forEach(function (d) {
                n.allOptions.ns.forEach(function (p) {
                  a.read(d, p, 'read', null, null, function (f, h) {
                    f && o.warn('loading namespace '.concat(p, ' for language ').concat(d, ' failed'), f),
                      !f && h && o.log('loaded namespace '.concat(p, ' for language ').concat(d), h),
                      a.loaded(''.concat(d, '|').concat(p), f, h);
                  });
                });
              });
          }
        },
      },
    ]);
  })();
Qc.type = 'backend';
function Om() {
  if (console && console.warn) {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
    typeof t[0] == 'string' && (t[0] = `react-i18next:: ${t[0]}`), console.warn(...t);
  }
}
const Ol = {};
function Eo() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
  (typeof t[0] == 'string' && Ol[t[0]]) || (typeof t[0] == 'string' && (Ol[t[0]] = new Date()), Om(...t));
}
const Zc = (e, t) => () => {
  if (e.isInitialized) t();
  else {
    const n = () => {
      setTimeout(() => {
        e.off('initialized', n);
      }, 0),
        t();
    };
    e.on('initialized', n);
  }
};
function _l(e, t, n) {
  e.loadNamespaces(t, Zc(e, n));
}
function El(e, t, n, r) {
  typeof n == 'string' && (n = [n]),
    n.forEach(a => {
      e.options.ns.indexOf(a) < 0 && e.options.ns.push(a);
    }),
    e.loadLanguages(t, Zc(e, r));
}
function _m(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  const r = t.languages[0],
    a = t.options ? t.options.fallbackLng : !1,
    i = t.languages[t.languages.length - 1];
  if (r.toLowerCase() === 'cimode') return !0;
  const o = (s, l) => {
    const u = t.services.backendConnector.state[`${s}|${l}`];
    return u === -1 || u === 2;
  };
  return n.bindI18n &&
    n.bindI18n.indexOf('languageChanging') > -1 &&
    t.services.backendConnector.backend &&
    t.isLanguageChangingTo &&
    !o(t.isLanguageChangingTo, e)
    ? !1
    : !!(
        t.hasResourceBundle(r, e) ||
        !t.services.backendConnector.backend ||
        (t.options.resources && !t.options.partialBundledLanguages) ||
        (o(r, e) && (!a || o(i, e)))
      );
}
function Em(e, t) {
  let n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  return !t.languages || !t.languages.length
    ? (Eo('i18n.languages were undefined or empty', t.languages), !0)
    : t.options.ignoreJSONStructure !== void 0
      ? t.hasLoadedNamespace(e, {
          lng: n.lng,
          precheck: (a, i) => {
            if (
              n.bindI18n &&
              n.bindI18n.indexOf('languageChanging') > -1 &&
              a.services.backendConnector.backend &&
              a.isLanguageChangingTo &&
              !i(a.isLanguageChangingTo, e)
            )
              return !1;
          },
        })
      : _m(e, t, n);
}
const Sm = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g,
  km = {
    '&amp;': '&',
    '&#38;': '&',
    '&lt;': '<',
    '&#60;': '<',
    '&gt;': '>',
    '&#62;': '>',
    '&apos;': "'",
    '&#39;': "'",
    '&quot;': '"',
    '&#34;': '"',
    '&nbsp;': ' ',
    '&#160;': ' ',
    '&copy;': '©',
    '&#169;': '©',
    '&reg;': '®',
    '&#174;': '®',
    '&hellip;': '…',
    '&#8230;': '…',
    '&#x2F;': '/',
    '&#47;': '/',
  },
  Lm = e => km[e],
  Im = e => e.replace(Sm, Lm);
let So = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: !0,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: !0,
  unescape: Im,
};
function Rm() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
  So = { ...So, ...e };
}
function Nm() {
  return So;
}
let ed;
function Tm(e) {
  ed = e;
}
function Pm() {
  return ed;
}
const Am = {
    type: '3rdParty',
    init(e) {
      Rm(e.options.react), Tm(e);
    },
  },
  Fm = Ci();
class Mm {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(t) {
    t.forEach(n => {
      this.usedNamespaces[n] || (this.usedNamespaces[n] = !0);
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const Dm = (e, t) => {
  const n = qt();
  return (
    Tt(() => {
      n.current = e;
    }, [e, t]),
    n.current
  );
};
function td(e, t, n, r) {
  return e.getFixedT(t, n, r);
}
function jm(e, t, n, r) {
  return $o(td(e, t, n, r), [e, t, n, r]);
}
function Wn(e) {
  let t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  const { i18n: n } = t,
    { i18n: r, defaultNS: a } = Oi(Fm) || {},
    i = n || r || Pm();
  if ((i && !i.reportNamespaces && (i.reportNamespaces = new Mm()), !i)) {
    Eo('You will need to pass in an i18next instance by using initReactI18next');
    const A = (g, m) =>
        typeof m == 'string'
          ? m
          : m && typeof m == 'object' && typeof m.defaultValue == 'string'
            ? m.defaultValue
            : Array.isArray(g)
              ? g[g.length - 1]
              : g,
      L = [A, {}, !1];
    return (L.t = A), (L.i18n = {}), (L.ready = !1), L;
  }
  i.options.react &&
    i.options.react.wait !== void 0 &&
    Eo('It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');
  const o = { ...Nm(), ...i.options.react, ...t },
    { useSuspense: s, keyPrefix: l } = o;
  let u = a || (i.options && i.options.defaultNS);
  (u = typeof u == 'string' ? [u] : u || ['translation']), i.reportNamespaces.addUsedNamespaces && i.reportNamespaces.addUsedNamespaces(u);
  const d = (i.isInitialized || i.initializedStoreOnce) && u.every(A => Em(A, i, o)),
    p = jm(i, t.lng || null, o.nsMode === 'fallback' ? u : u[0], l),
    f = () => p,
    h = () => td(i, t.lng || null, o.nsMode === 'fallback' ? u : u[0], l),
    [b, v] = ze(f);
  let w = u.join();
  t.lng && (w = `${t.lng}${w}`);
  const T = Dm(w),
    N = qt(!0);
  Tt(() => {
    const { bindI18n: A, bindI18nStore: L } = o;
    (N.current = !0),
      !d &&
        !s &&
        (t.lng
          ? El(i, t.lng, u, () => {
              N.current && v(h);
            })
          : _l(i, u, () => {
              N.current && v(h);
            })),
      d && T && T !== w && N.current && v(h);
    function g() {
      N.current && v(h);
    }
    return (
      A && i && i.on(A, g),
      L && i && i.store.on(L, g),
      () => {
        (N.current = !1), A && i && A.split(' ').forEach(m => i.off(m, g)), L && i && L.split(' ').forEach(m => i.store.off(m, g));
      }
    );
  }, [i, w]),
    Tt(() => {
      N.current && d && v(f);
    }, [i, l, d]);
  const B = [b, i, d];
  if (((B.t = b), (B.i18n = i), (B.ready = d), d || (!d && !s))) return B;
  throw new Promise(A => {
    t.lng ? El(i, t.lng, u, () => A()) : _l(i, u, () => A());
  });
}
function ie(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
function R(...e) {
  const t = [],
    n = {}.hasOwnProperty;
  return (
    e.filter(Boolean).forEach(r => {
      const a = typeof r;
      if (a === 'string' || a === 'number') t.push(r);
      else if (Array.isArray(r) && r.length) {
        const i = R(...r);
        i && t.push(i);
      } else if (a === 'object') for (const i in r) n.call(r, i) && r[i] && t.push(i);
    }),
    t.join(' ')
  );
}
const ko = { content: 'pf-v5-c-content', modifiers: { visited: 'pf-m-visited', plain: 'pf-m-plain' } },
  Sl = {
    modifiers: { '4xl': 'pf-m-4xl', '3xl': 'pf-m-3xl', '2xl': 'pf-m-2xl', xl: 'pf-m-xl', lg: 'pf-m-lg', md: 'pf-m-md' },
    title: 'pf-v5-c-title',
  },
  Bm = { name: '--pf-v5-global--breakpoint--sm', value: '576px', var: 'var(--pf-v5-global--breakpoint--sm)' },
  Um = { name: '--pf-v5-global--breakpoint--md', value: '768px', var: 'var(--pf-v5-global--breakpoint--md)' },
  Vm = { name: '--pf-v5-global--breakpoint--lg', value: '992px', var: 'var(--pf-v5-global--breakpoint--lg)' },
  nd = { name: '--pf-v5-global--breakpoint--xl', value: '1200px', var: 'var(--pf-v5-global--breakpoint--xl)' },
  Hm = { name: '--pf-v5-global--breakpoint--2xl', value: '1450px', var: 'var(--pf-v5-global--breakpoint--2xl)' },
  $m = { name: '--pf-v5-global--height-breakpoint--sm', value: '0', var: 'var(--pf-v5-global--height-breakpoint--sm)' },
  zm = { name: '--pf-v5-global--height-breakpoint--md', value: '40rem', var: 'var(--pf-v5-global--height-breakpoint--md)' },
  Wm = { name: '--pf-v5-global--height-breakpoint--lg', value: '48rem', var: 'var(--pf-v5-global--height-breakpoint--lg)' },
  Gm = { name: '--pf-v5-global--height-breakpoint--xl', value: '60rem', var: 'var(--pf-v5-global--height-breakpoint--xl)' },
  qm = { name: '--pf-v5-global--height-breakpoint--2xl', value: '80rem', var: 'var(--pf-v5-global--height-breakpoint--2xl)' };
var gr;
(function (e) {
  (e.success = 'success'), (e.error = 'error'), (e.warning = 'warning'), (e.default = 'default');
})(gr || (gr = {}));
const ti = {
    Tab: 'Tab',
    Space: ' ',
    Escape: 'Escape',
    Enter: 'Enter',
    ArrowUp: 'ArrowUp',
    ArrowDown: 'ArrowDown',
    ArrowLeft: 'ArrowLeft',
    ArrowRight: 'ArrowRight',
  },
  Hr = { sm: parseInt(Bm.value), md: parseInt(Um.value), lg: parseInt(Vm.value), xl: parseInt(nd.value), '2xl': parseInt(Hm.value) },
  $r = { sm: parseInt($m.value), md: parseInt(zm.value), lg: parseInt(Wm.value), xl: parseInt(Gm.value), '2xl': parseInt(qm.value) };
/*!
 * tabbable 6.2.0
 * @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
 */ var rd = [
    'input:not([inert])',
    'select:not([inert])',
    'textarea:not([inert])',
    'a[href]:not([inert])',
    'button:not([inert])',
    '[tabindex]:not(slot):not([inert])',
    'audio[controls]:not([inert])',
    'video[controls]:not([inert])',
    '[contenteditable]:not([contenteditable="false"]):not([inert])',
    'details>summary:first-of-type:not([inert])',
    'details:not([inert])',
  ],
  ni = rd.join(','),
  ad = typeof Element > 'u',
  Bn = ad ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector,
  ri =
    !ad && Element.prototype.getRootNode
      ? function (e) {
          var t;
          return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
        }
      : function (e) {
          return e?.ownerDocument;
        },
  ai = function e(t, n) {
    var r;
    n === void 0 && (n = !0);
    var a = t == null || (r = t.getAttribute) === null || r === void 0 ? void 0 : r.call(t, 'inert'),
      i = a === '' || a === 'true',
      o = i || (n && t && e(t.parentNode));
    return o;
  },
  Km = function (t) {
    var n,
      r = t == null || (n = t.getAttribute) === null || n === void 0 ? void 0 : n.call(t, 'contenteditable');
    return r === '' || r === 'true';
  },
  id = function (t, n, r) {
    if (ai(t)) return [];
    var a = Array.prototype.slice.apply(t.querySelectorAll(ni));
    return n && Bn.call(t, ni) && a.unshift(t), (a = a.filter(r)), a;
  },
  od = function e(t, n, r) {
    for (var a = [], i = Array.from(t); i.length; ) {
      var o = i.shift();
      if (!ai(o, !1))
        if (o.tagName === 'SLOT') {
          var s = o.assignedElements(),
            l = s.length ? s : o.children,
            u = e(l, !0, r);
          r.flatten ? a.push.apply(a, u) : a.push({ scopeParent: o, candidates: u });
        } else {
          var d = Bn.call(o, ni);
          d && r.filter(o) && (n || !t.includes(o)) && a.push(o);
          var p = o.shadowRoot || (typeof r.getShadowRoot == 'function' && r.getShadowRoot(o)),
            f = !ai(p, !1) && (!r.shadowRootFilter || r.shadowRootFilter(o));
          if (p && f) {
            var h = e(p === !0 ? o.children : p.children, !0, r);
            r.flatten ? a.push.apply(a, h) : a.push({ scopeParent: o, candidates: h });
          } else i.unshift.apply(i, o.children);
        }
    }
    return a;
  },
  sd = function (t) {
    return !isNaN(parseInt(t.getAttribute('tabindex'), 10));
  },
  Tn = function (t) {
    if (!t) throw new Error('No node provided');
    return t.tabIndex < 0 && (/^(AUDIO|VIDEO|DETAILS)$/.test(t.tagName) || Km(t)) && !sd(t) ? 0 : t.tabIndex;
  },
  Xm = function (t, n) {
    var r = Tn(t);
    return r < 0 && n && !sd(t) ? 0 : r;
  },
  Jm = function (t, n) {
    return t.tabIndex === n.tabIndex ? t.documentOrder - n.documentOrder : t.tabIndex - n.tabIndex;
  },
  ld = function (t) {
    return t.tagName === 'INPUT';
  },
  Ym = function (t) {
    return ld(t) && t.type === 'hidden';
  },
  Qm = function (t) {
    var n =
      t.tagName === 'DETAILS' &&
      Array.prototype.slice.apply(t.children).some(function (r) {
        return r.tagName === 'SUMMARY';
      });
    return n;
  },
  Zm = function (t, n) {
    for (var r = 0; r < t.length; r++) if (t[r].checked && t[r].form === n) return t[r];
  },
  eh = function (t) {
    if (!t.name) return !0;
    var n = t.form || ri(t),
      r = function (s) {
        return n.querySelectorAll('input[type="radio"][name="' + s + '"]');
      },
      a;
    if (typeof window < 'u' && typeof window.CSS < 'u' && typeof window.CSS.escape == 'function') a = r(window.CSS.escape(t.name));
    else
      try {
        a = r(t.name);
      } catch (o) {
        return (
          console.error(
            'Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s',
            o.message,
          ),
          !1
        );
      }
    var i = Zm(a, t.form);
    return !i || i === t;
  },
  th = function (t) {
    return ld(t) && t.type === 'radio';
  },
  nh = function (t) {
    return th(t) && !eh(t);
  },
  rh = function (t) {
    var n,
      r = t && ri(t),
      a = (n = r) === null || n === void 0 ? void 0 : n.host,
      i = !1;
    if (r && r !== t) {
      var o, s, l;
      for (
        i = !!(
          ((o = a) !== null && o !== void 0 && (s = o.ownerDocument) !== null && s !== void 0 && s.contains(a)) ||
          (t != null && (l = t.ownerDocument) !== null && l !== void 0 && l.contains(t))
        );
        !i && a;

      ) {
        var u, d, p;
        (r = ri(a)),
          (a = (u = r) === null || u === void 0 ? void 0 : u.host),
          (i = !!((d = a) !== null && d !== void 0 && (p = d.ownerDocument) !== null && p !== void 0 && p.contains(a)));
      }
    }
    return i;
  },
  kl = function (t) {
    var n = t.getBoundingClientRect(),
      r = n.width,
      a = n.height;
    return r === 0 && a === 0;
  },
  ah = function (t, n) {
    var r = n.displayCheck,
      a = n.getShadowRoot;
    if (getComputedStyle(t).visibility === 'hidden') return !0;
    var i = Bn.call(t, 'details>summary:first-of-type'),
      o = i ? t.parentElement : t;
    if (Bn.call(o, 'details:not([open]) *')) return !0;
    if (!r || r === 'full' || r === 'legacy-full') {
      if (typeof a == 'function') {
        for (var s = t; t; ) {
          var l = t.parentElement,
            u = ri(t);
          if (l && !l.shadowRoot && a(l) === !0) return kl(t);
          t.assignedSlot ? (t = t.assignedSlot) : !l && u !== t.ownerDocument ? (t = u.host) : (t = l);
        }
        t = s;
      }
      if (rh(t)) return !t.getClientRects().length;
      if (r !== 'legacy-full') return !0;
    } else if (r === 'non-zero-area') return kl(t);
    return !1;
  },
  ih = function (t) {
    if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(t.tagName))
      for (var n = t.parentElement; n; ) {
        if (n.tagName === 'FIELDSET' && n.disabled) {
          for (var r = 0; r < n.children.length; r++) {
            var a = n.children.item(r);
            if (a.tagName === 'LEGEND') return Bn.call(n, 'fieldset[disabled] *') ? !0 : !a.contains(t);
          }
          return !0;
        }
        n = n.parentElement;
      }
    return !1;
  },
  ii = function (t, n) {
    return !(n.disabled || ai(n) || Ym(n) || ah(n, t) || Qm(n) || ih(n));
  },
  Lo = function (t, n) {
    return !(nh(n) || Tn(n) < 0 || !ii(t, n));
  },
  oh = function (t) {
    var n = parseInt(t.getAttribute('tabindex'), 10);
    return !!(isNaN(n) || n >= 0);
  },
  sh = function e(t) {
    var n = [],
      r = [];
    return (
      t.forEach(function (a, i) {
        var o = !!a.scopeParent,
          s = o ? a.scopeParent : a,
          l = Xm(s, o),
          u = o ? e(a.candidates) : s;
        l === 0 ? (o ? n.push.apply(n, u) : n.push(s)) : r.push({ documentOrder: i, tabIndex: l, item: a, isScope: o, content: u });
      }),
      r
        .sort(Jm)
        .reduce(function (a, i) {
          return i.isScope ? a.push.apply(a, i.content) : a.push(i.content), a;
        }, [])
        .concat(n)
    );
  },
  lh = function (t, n) {
    n = n || {};
    var r;
    return (
      n.getShadowRoot
        ? (r = od([t], n.includeContainer, { filter: Lo.bind(null, n), flatten: !1, getShadowRoot: n.getShadowRoot, shadowRootFilter: oh }))
        : (r = id(t, n.includeContainer, Lo.bind(null, n))),
      sh(r)
    );
  },
  ch = function (t, n) {
    n = n || {};
    var r;
    return (
      n.getShadowRoot
        ? (r = od([t], n.includeContainer, { filter: ii.bind(null, n), flatten: !0, getShadowRoot: n.getShadowRoot }))
        : (r = id(t, n.includeContainer, ii.bind(null, n))),
      r
    );
  },
  nr = function (t, n) {
    if (((n = n || {}), !t)) throw new Error('No node provided');
    return Bn.call(t, ni) === !1 ? !1 : Lo(n, t);
  },
  dh = rd.concat('iframe').join(','),
  Gi = function (t, n) {
    if (((n = n || {}), !t)) throw new Error('No node provided');
    return Bn.call(t, dh) === !1 ? !1 : ii(n, t);
  };
/*!
 * focus-trap 7.5.2
 * @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
 */ function Ll(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function Il(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Ll(Object(n), !0).forEach(function (r) {
          uh(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ll(Object(n)).forEach(function (r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function uh(e, t, n) {
  return (t = ph(t)), t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n), e;
}
function fh(e, t) {
  if (typeof e != 'object' || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (typeof r != 'object') return r;
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function ph(e) {
  var t = fh(e, 'string');
  return typeof t == 'symbol' ? t : String(t);
}
var Rl = {
    activateTrap: function (t, n) {
      if (t.length > 0) {
        var r = t[t.length - 1];
        r !== n && r.pause();
      }
      var a = t.indexOf(n);
      a === -1 || t.splice(a, 1), t.push(n);
    },
    deactivateTrap: function (t, n) {
      var r = t.indexOf(n);
      r !== -1 && t.splice(r, 1), t.length > 0 && t[t.length - 1].unpause();
    },
  },
  mh = function (t) {
    return t.tagName && t.tagName.toLowerCase() === 'input' && typeof t.select == 'function';
  },
  hh = function (t) {
    return t?.key === 'Escape' || t?.key === 'Esc' || t?.keyCode === 27;
  },
  Qr = function (t) {
    return t?.key === 'Tab' || t?.keyCode === 9;
  },
  gh = function (t) {
    return Qr(t) && !t.shiftKey;
  },
  vh = function (t) {
    return Qr(t) && t.shiftKey;
  },
  Nl = function (t) {
    return setTimeout(t, 0);
  },
  Tl = function (t, n) {
    var r = -1;
    return (
      t.every(function (a, i) {
        return n(a) ? ((r = i), !1) : !0;
      }),
      r
    );
  },
  zr = function (t) {
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++) r[a - 1] = arguments[a];
    return typeof t == 'function' ? t.apply(void 0, r) : t;
  },
  Aa = function (t) {
    return t.target.shadowRoot && typeof t.composedPath == 'function' ? t.composedPath()[0] : t.target;
  },
  bh = [],
  yh = function (t, n) {
    var r = n?.document || document,
      a = n?.trapStack || bh,
      i = Il({ returnFocusOnDeactivate: !0, escapeDeactivates: !0, delayInitialFocus: !0, isKeyForward: gh, isKeyBackward: vh }, n),
      o = {
        containers: [],
        containerGroups: [],
        tabbableGroups: [],
        nodeFocusedBeforeActivation: null,
        mostRecentlyFocusedNode: null,
        active: !1,
        paused: !1,
        delayInitialFocusTimer: void 0,
        recentNavEvent: void 0,
      },
      s,
      l = function (y, _, O) {
        return y && y[_] !== void 0 ? y[_] : i[O || _];
      },
      u = function (y, _) {
        var O = typeof _?.composedPath == 'function' ? _.composedPath() : void 0;
        return o.containerGroups.findIndex(function (U) {
          var x = U.container,
            D = U.tabbableNodes;
          return (
            x.contains(y) ||
            O?.includes(x) ||
            D.find(function (G) {
              return G === y;
            })
          );
        });
      },
      d = function (y) {
        var _ = i[y];
        if (typeof _ == 'function') {
          for (var O = arguments.length, U = new Array(O > 1 ? O - 1 : 0), x = 1; x < O; x++) U[x - 1] = arguments[x];
          _ = _.apply(void 0, U);
        }
        if ((_ === !0 && (_ = void 0), !_)) {
          if (_ === void 0 || _ === !1) return _;
          throw new Error('`'.concat(y, '` was specified but was not a node, or did not return a node'));
        }
        var D = _;
        if (typeof _ == 'string' && ((D = r.querySelector(_)), !D)) throw new Error('`'.concat(y, '` as selector refers to no known node'));
        return D;
      },
      p = function () {
        var y = d('initialFocus');
        if (y === !1) return !1;
        if (y === void 0 || !Gi(y, i.tabbableOptions))
          if (u(r.activeElement) >= 0) y = r.activeElement;
          else {
            var _ = o.tabbableGroups[0],
              O = _ && _.firstTabbableNode;
            y = O || d('fallbackFocus');
          }
        if (!y) throw new Error('Your focus-trap needs to have at least one focusable element');
        return y;
      },
      f = function () {
        if (
          ((o.containerGroups = o.containers.map(function (y) {
            var _ = lh(y, i.tabbableOptions),
              O = ch(y, i.tabbableOptions),
              U = _.length > 0 ? _[0] : void 0,
              x = _.length > 0 ? _[_.length - 1] : void 0,
              D = O.find(function (K) {
                return nr(K);
              }),
              G = O.slice()
                .reverse()
                .find(function (K) {
                  return nr(K);
                }),
              z = !!_.find(function (K) {
                return Tn(K) > 0;
              });
            return {
              container: y,
              tabbableNodes: _,
              focusableNodes: O,
              posTabIndexesFound: z,
              firstTabbableNode: U,
              lastTabbableNode: x,
              firstDomTabbableNode: D,
              lastDomTabbableNode: G,
              nextTabbableNode: function (ne) {
                var C = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0,
                  P = _.indexOf(ne);
                return P < 0
                  ? C
                    ? O.slice(O.indexOf(ne) + 1).find(function (H) {
                        return nr(H);
                      })
                    : O.slice(0, O.indexOf(ne))
                        .reverse()
                        .find(function (H) {
                          return nr(H);
                        })
                  : _[P + (C ? 1 : -1)];
              },
            };
          })),
          (o.tabbableGroups = o.containerGroups.filter(function (y) {
            return y.tabbableNodes.length > 0;
          })),
          o.tabbableGroups.length <= 0 && !d('fallbackFocus'))
        )
          throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
        if (
          o.containerGroups.find(function (y) {
            return y.posTabIndexesFound;
          }) &&
          o.containerGroups.length > 1
        )
          throw new Error(
            "At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.",
          );
      },
      h = function k(y) {
        if (y !== !1 && y !== r.activeElement) {
          if (!y || !y.focus) {
            k(p());
            return;
          }
          y.focus({ preventScroll: !!i.preventScroll }), (o.mostRecentlyFocusedNode = y), mh(y) && y.select();
        }
      },
      b = function (y) {
        var _ = d('setReturnFocus', y);
        return _ || (_ === !1 ? !1 : y);
      },
      v = function (y) {
        var _ = y.target,
          O = y.event,
          U = y.isBackward,
          x = U === void 0 ? !1 : U;
        (_ = _ || Aa(O)), f();
        var D = null;
        if (o.tabbableGroups.length > 0) {
          var G = u(_, O),
            z = G >= 0 ? o.containerGroups[G] : void 0;
          if (G < 0) x ? (D = o.tabbableGroups[o.tabbableGroups.length - 1].lastTabbableNode) : (D = o.tabbableGroups[0].firstTabbableNode);
          else if (x) {
            var K = Tl(o.tabbableGroups, function ($) {
              var Y = $.firstTabbableNode;
              return _ === Y;
            });
            if (
              (K < 0 &&
                (z.container === _ || (Gi(_, i.tabbableOptions) && !nr(_, i.tabbableOptions) && !z.nextTabbableNode(_, !1))) &&
                (K = G),
              K >= 0)
            ) {
              var ne = K === 0 ? o.tabbableGroups.length - 1 : K - 1,
                C = o.tabbableGroups[ne];
              D = Tn(_) >= 0 ? C.lastTabbableNode : C.lastDomTabbableNode;
            } else Qr(O) || (D = z.nextTabbableNode(_, !1));
          } else {
            var P = Tl(o.tabbableGroups, function ($) {
              var Y = $.lastTabbableNode;
              return _ === Y;
            });
            if (
              (P < 0 && (z.container === _ || (Gi(_, i.tabbableOptions) && !nr(_, i.tabbableOptions) && !z.nextTabbableNode(_))) && (P = G),
              P >= 0)
            ) {
              var H = P === o.tabbableGroups.length - 1 ? 0 : P + 1,
                q = o.tabbableGroups[H];
              D = Tn(_) >= 0 ? q.firstTabbableNode : q.firstDomTabbableNode;
            } else Qr(O) || (D = z.nextTabbableNode(_));
          }
        } else D = d('fallbackFocus');
        return D;
      },
      w = function (y) {
        var _ = Aa(y);
        if (!(u(_, y) >= 0)) {
          if (zr(i.clickOutsideDeactivates, y)) {
            s.deactivate({ returnFocus: i.returnFocusOnDeactivate });
            return;
          }
          zr(i.allowOutsideClick, y) || y.preventDefault();
        }
      },
      T = function (y) {
        var _ = Aa(y),
          O = u(_, y) >= 0;
        if (O || _ instanceof Document) O && (o.mostRecentlyFocusedNode = _);
        else {
          y.stopImmediatePropagation();
          var U,
            x = !0;
          if (o.mostRecentlyFocusedNode)
            if (Tn(o.mostRecentlyFocusedNode) > 0) {
              var D = u(o.mostRecentlyFocusedNode),
                G = o.containerGroups[D].tabbableNodes;
              if (G.length > 0) {
                var z = G.findIndex(function (K) {
                  return K === o.mostRecentlyFocusedNode;
                });
                z >= 0 &&
                  (i.isKeyForward(o.recentNavEvent)
                    ? z + 1 < G.length && ((U = G[z + 1]), (x = !1))
                    : z - 1 >= 0 && ((U = G[z - 1]), (x = !1)));
              }
            } else
              o.containerGroups.some(function (K) {
                return K.tabbableNodes.some(function (ne) {
                  return Tn(ne) > 0;
                });
              }) || (x = !1);
          else x = !1;
          x && (U = v({ target: o.mostRecentlyFocusedNode, isBackward: i.isKeyBackward(o.recentNavEvent) })),
            h(U || o.mostRecentlyFocusedNode || p());
        }
        o.recentNavEvent = void 0;
      },
      N = function (y) {
        var _ = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
        o.recentNavEvent = y;
        var O = v({ event: y, isBackward: _ });
        O && (Qr(y) && y.preventDefault(), h(O));
      },
      B = function (y) {
        if (hh(y) && zr(i.escapeDeactivates, y) !== !1) {
          y.preventDefault(), s.deactivate();
          return;
        }
        (i.isKeyForward(y) || i.isKeyBackward(y)) && N(y, i.isKeyBackward(y));
      },
      A = function (y) {
        var _ = Aa(y);
        u(_, y) >= 0 ||
          zr(i.clickOutsideDeactivates, y) ||
          zr(i.allowOutsideClick, y) ||
          (y.preventDefault(), y.stopImmediatePropagation());
      },
      L = function () {
        if (o.active)
          return (
            Rl.activateTrap(a, s),
            (o.delayInitialFocusTimer = i.delayInitialFocus
              ? Nl(function () {
                  h(p());
                })
              : h(p())),
            r.addEventListener('focusin', T, !0),
            r.addEventListener('mousedown', w, { capture: !0, passive: !1 }),
            r.addEventListener('touchstart', w, { capture: !0, passive: !1 }),
            r.addEventListener('click', A, { capture: !0, passive: !1 }),
            r.addEventListener('keydown', B, { capture: !0, passive: !1 }),
            s
          );
      },
      g = function () {
        if (o.active)
          return (
            r.removeEventListener('focusin', T, !0),
            r.removeEventListener('mousedown', w, !0),
            r.removeEventListener('touchstart', w, !0),
            r.removeEventListener('click', A, !0),
            r.removeEventListener('keydown', B, !0),
            s
          );
      },
      m = function (y) {
        var _ = y.some(function (O) {
          var U = Array.from(O.removedNodes);
          return U.some(function (x) {
            return x === o.mostRecentlyFocusedNode;
          });
        });
        _ && h(p());
      },
      S = typeof window < 'u' && 'MutationObserver' in window ? new MutationObserver(m) : void 0,
      E = function () {
        S &&
          (S.disconnect(),
          o.active &&
            !o.paused &&
            o.containers.map(function (y) {
              S.observe(y, { subtree: !0, childList: !0 });
            }));
      };
    return (
      (s = {
        get active() {
          return o.active;
        },
        get paused() {
          return o.paused;
        },
        activate: function (y) {
          if (o.active) return this;
          var _ = l(y, 'onActivate'),
            O = l(y, 'onPostActivate'),
            U = l(y, 'checkCanFocusTrap');
          U || f(), (o.active = !0), (o.paused = !1), (o.nodeFocusedBeforeActivation = r.activeElement), _?.();
          var x = function () {
            U && f(), L(), E(), O?.();
          };
          return U ? (U(o.containers.concat()).then(x, x), this) : (x(), this);
        },
        deactivate: function (y) {
          if (!o.active) return this;
          var _ = Il({ onDeactivate: i.onDeactivate, onPostDeactivate: i.onPostDeactivate, checkCanReturnFocus: i.checkCanReturnFocus }, y);
          clearTimeout(o.delayInitialFocusTimer),
            (o.delayInitialFocusTimer = void 0),
            g(),
            (o.active = !1),
            (o.paused = !1),
            E(),
            Rl.deactivateTrap(a, s);
          var O = l(_, 'onDeactivate'),
            U = l(_, 'onPostDeactivate'),
            x = l(_, 'checkCanReturnFocus'),
            D = l(_, 'returnFocus', 'returnFocusOnDeactivate');
          O?.();
          var G = function () {
            Nl(function () {
              D && h(b(o.nodeFocusedBeforeActivation)), U?.();
            });
          };
          return D && x ? (x(b(o.nodeFocusedBeforeActivation)).then(G, G), this) : (G(), this);
        },
        pause: function (y) {
          if (o.paused || !o.active) return this;
          var _ = l(y, 'onPause'),
            O = l(y, 'onPostPause');
          return (o.paused = !0), _?.(), g(), E(), O?.(), this;
        },
        unpause: function (y) {
          if (!o.paused || !o.active) return this;
          var _ = l(y, 'onUnpause'),
            O = l(y, 'onPostUnpause');
          return (o.paused = !1), _?.(), f(), L(), E(), O?.(), this;
        },
        updateContainerElements: function (y) {
          var _ = [].concat(y).filter(Boolean);
          return (
            (o.containers = _.map(function (O) {
              return typeof O == 'string' ? r.querySelector(O) : O;
            })),
            o.active && f(),
            E(),
            this
          );
        },
      }),
      s.updateContainerElements(t),
      s
    );
  };
function xh(e) {
  const t = qt(e);
  (t.current = e),
    Tt(
      () => () => {
        t.current();
      },
      [],
    );
}
const Li = wc(function (t, n) {
  var { active: r = !0, paused: a = !1, focusTrapOptions: i = {}, preventScrollOnDeactivate: o = !1 } = t,
    s = ie(t, ['active', 'paused', 'focusTrapOptions', 'preventScrollOnDeactivate']);
  const l = qt(null);
  of(n, () => l.current);
  const u = qt(null);
  Tt(() => {
    const p = yh(l.current, Object.assign(Object.assign({}, i), { returnFocusOnDeactivate: !1 }));
    return (
      (u.current = p),
      () => {
        p.deactivate();
      }
    );
  }, []),
    Tt(() => {
      const p = u.current;
      r ? p?.activate() : p?.deactivate();
    }, [r]),
    Tt(() => {
      const p = u.current;
      a ? p?.pause() : p?.unpause();
    }, [a]);
  const d = qt(typeof document < 'u' ? document.activeElement : null);
  return (
    xh(() => {
      i.returnFocusOnDeactivate !== !1 && d.current instanceof HTMLElement && d.current.focus({ preventScroll: o });
    }),
    pe.createElement('div', Object.assign({ ref: l }, s))
  );
});
Li.displayName = 'FocusTrap';
function oi(e) {
  return e[0].toUpperCase() + e.substring(1);
}
function Jo(e = 'pf') {
  const t = new Date().getTime() + Math.random().toString(36).slice(2);
  return `${e}-${t}`;
}
function wh(e, t) {
  let n;
  return (...r) => {
    clearTimeout(n), (n = setTimeout(() => e.apply(this, r), t));
  };
}
function Fa(e, t, n, r = !1) {
  if (!e || !t) return !1;
  const a = e.getBoundingClientRect(),
    i = t.getBoundingClientRect(),
    o = Math.ceil(a.left),
    s = Math.floor(a.right),
    l = Math.ceil(i.left),
    u = Math.floor(i.right),
    d = l >= o && u <= s,
    p = !r && a.width < i.width && ((l < o && u > o) || (u > s && l < s));
  return d || p;
}
function Ch(e, t) {
  return e.replace(/\${(.*?)}/g, (n, r) => t[r] || '');
}
function Q1(e, t, n) {
  return n || (n = `${t}s`), `${e || 0} ${e === 1 ? t : n}`;
}
const si = (e, t) =>
    Object.entries(e || {}).reduce(
      (n, [r, a]) =>
        r === 'default' ? Object.assign(Object.assign({}, n), { [t]: a }) : Object.assign(Object.assign({}, n), { [`${t}-on-${r}`]: a }),
      {},
    ),
  _n = (e, t, n = '', r, a) => {
    if (!e) return '';
    if (r && !a) {
      if (r in e) return t.modifiers[qi(`${n}${e[r]}`)];
      const i = ['2xl', 'xl', 'lg', 'md', 'sm', 'default'],
        o = i.indexOf(r);
      for (let s = o; s < i.length; s++) if (i[s] in e) return t.modifiers[qi(`${n}${e[i[s]]}`)];
      return '';
    }
    return Object.entries(e || {})
      .map(([i, o]) => `${n}${o}${i !== 'default' ? `-on-${i}` : ''}${a && i !== 'default' ? '-height' : ''}`)
      .map(qi)
      .map(i => i.replace(/-?(\dxl)/gi, (o, s) => `_${s}`))
      .map(i => t.modifiers[i])
      .filter(Boolean)
      .join(' ');
  },
  cd = e =>
    e === null ? null : e >= $r['2xl'] ? '2xl' : e >= $r.xl ? 'xl' : e >= $r.lg ? 'lg' : e >= $r.md ? 'md' : e >= $r.sm ? 'sm' : 'default',
  dd = e =>
    e === null ? null : e >= Hr['2xl'] ? '2xl' : e >= Hr.xl ? 'xl' : e >= Hr.lg ? 'lg' : e >= Hr.md ? 'md' : e >= Hr.sm ? 'sm' : 'default',
  Oh = e => e.toUpperCase().replace('-', '').replace('_', ''),
  qi = e => e.replace(/([-_][a-z])/gi, Oh),
  bt = !!(typeof window < 'u' && window.document && window.document.createElement),
  Pl = (e, t) => {
    const n = getComputedStyle(t),
      r = () => {
        let o = '';
        const s = {
          '50%': 'ultra-condensed',
          '62.5%': 'extra-condensed',
          '75%': 'condensed',
          '87.5%': 'semi-condensed',
          '100%': 'normal',
          '112.5%': 'semi-expanded',
          '125%': 'expanded',
          '150%': 'extra-expanded',
          '200%': 'ultra-expanded',
        };
        let l;
        return (
          n.fontStretch in s ? (l = s[n.fontStretch]) : (l = 'normal'),
          (o =
            n.fontStyle + ' ' + n.fontVariant + ' ' + n.fontWeight + ' ' + l + ' ' + n.fontSize + '/' + n.lineHeight + ' ' + n.fontFamily),
          o
        );
      },
      i = document.createElement('canvas').getContext('2d');
    return (i.font = n.font || r()), i.measureText(e).width;
  },
  _h = e => {
    const t = getComputedStyle(e);
    let n = e.clientWidth,
      r = e.clientHeight;
    return (
      (r -= parseFloat(t.paddingTop) + parseFloat(t.paddingBottom)),
      (n -= parseFloat(t.paddingLeft) + parseFloat(t.paddingRight)),
      { height: r, width: n }
    );
  },
  Eh = (e, t) => {
    const n = _h(e).width;
    let r = t;
    if (Pl(t, e) > n) {
      for (; Pl(`...${r}`, e) > n; ) r = r.substring(1);
      e.value ? (e.value = `...${r}`) : (e.innerText = `...${r}`);
    } else e.value ? (e.value = t) : (e.innerText = t);
  },
  Ma = e => {
    e.forEach(t => {
      t.current && clearTimeout(t.current);
    });
  },
  ur = (e, t = 'ltr') => {
    if (!e) return t;
    const n = getComputedStyle(e).getPropertyValue('direction');
    return ['ltr', 'rtl'].includes(n) ? n : t;
  };
let Sh = 0;
function kh() {
  return typeof crypto < 'u' && crypto.randomUUID ? crypto.randomUUID() : Jo();
}
class Gn extends c.Component {
  constructor() {
    super(...arguments), (this.uniqueElement = this.props.isRandom ? kh() : Sh++), (this.id = `${this.props.prefix}${this.uniqueElement}`);
  }
  render() {
    return this.props.children(this.id);
  }
}
Gn.displayName = 'GenerateId';
Gn.defaultProps = { prefix: 'pf-random-id-', isRandom: !1 };
const ud = '*';
let Lh = 0;
const Al = 'OUIA-Generated-',
  Ki = {};
function At(e, t, n = !0) {
  return { 'data-ouia-component-type': `PF5/${e}`, 'data-ouia-safe': n, 'data-ouia-component-id': t };
}
const In = (e, t, n = !0, r) => ({ 'data-ouia-component-type': `PF5/${e}`, 'data-ouia-safe': n, 'data-ouia-component-id': Ih(e, t, r) }),
  Ih = (e, t, n) => {
    const r = Pt(() => Jt(e, n), [e, n]);
    return t ?? r;
  };
function Jt(e, t) {
  try {
    let n;
    return (
      typeof window < 'u' ? (n = `${window.location.href}-${e}-${t || ''}`) : (n = `${e}-${t || ''}`),
      Ki[n] || (Ki[n] = 0),
      `${Al}${e}-${t ? `${t}-` : ''}${++Ki[n]}`
    );
  } catch {
    return `${Al}${e}-${t ? `${t}-` : ''}${++Lh}`;
  }
}
function oa(e) {
  const t = e.getBoundingClientRect();
  return { width: t.width, height: t.height, top: t.top, right: t.right, bottom: t.bottom, left: t.left, x: t.left, y: t.top };
}
function Yt(e) {
  if (e.toString() !== '[object Window]') {
    const t = e.ownerDocument;
    return t ? t.defaultView : window;
  }
  return e;
}
function Yo(e) {
  const t = Yt(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function sa(e) {
  const t = Yt(e).Element;
  return e instanceof t || e instanceof Element;
}
function Xt(e) {
  const t = Yt(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function Rh(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function Nh(e) {
  return e === Yt(e) || !Xt(e) ? Yo(e) : Rh(e);
}
function Dt(e) {
  return e ? (e.nodeName || '').toLowerCase() : null;
}
function dn(e) {
  return (sa(e) ? e.ownerDocument : e.document).documentElement;
}
function Qo(e) {
  return oa(dn(e)).left + Yo(e).scrollLeft;
}
function on(e) {
  return Yt(e).getComputedStyle(e);
}
function Zo(e) {
  const { overflow: t, overflowX: n, overflowY: r } = on(e);
  return /auto|scroll|overlay|hidden/.test(t + r + n);
}
function Th(e, t, n = !1) {
  const r = dn(t),
    a = oa(e),
    i = Xt(t);
  let o = { scrollLeft: 0, scrollTop: 0 },
    s = { x: 0, y: 0 };
  return (
    (i || (!i && !n)) &&
      ((Dt(t) !== 'body' || Zo(r)) && (o = Nh(t)), Xt(t) ? ((s = oa(t)), (s.x += t.clientLeft), (s.y += t.clientTop)) : r && (s.x = Qo(r))),
    { x: a.left + o.scrollLeft - s.x, y: a.top + o.scrollTop - s.y, width: a.width, height: a.height }
  );
}
function es(e) {
  return { x: e.offsetLeft, y: e.offsetTop, width: e.offsetWidth, height: e.offsetHeight };
}
function Ii(e) {
  return Dt(e) === 'html' ? e : e.assignedSlot || e.parentNode || e.host || dn(e);
}
function fd(e) {
  return ['html', 'body', '#document'].indexOf(Dt(e)) >= 0 ? e.ownerDocument.body : Xt(e) && Zo(e) ? e : fd(Ii(e));
}
function Zr(e, t = []) {
  const n = fd(e),
    r = Dt(n) === 'body',
    a = Yt(n),
    i = r ? [a].concat(a.visualViewport || [], Zo(n) ? n : []) : n,
    o = t.concat(i);
  return r ? o : o.concat(Zr(Ii(i)));
}
function Ph(e) {
  return ['table', 'td', 'th'].indexOf(Dt(e)) >= 0;
}
function Fl(e) {
  if (!Xt(e) || on(e).position === 'fixed') return null;
  const t = e.offsetParent;
  if (t) {
    const n = dn(t);
    if (Dt(t) === 'body' && on(t).position === 'static' && on(n).position !== 'static') return n;
  }
  return t;
}
function Ah(e) {
  let t = Ii(e);
  for (; Xt(t) && ['html', 'body'].indexOf(Dt(t)) < 0; ) {
    const n = on(t);
    if (n.transform !== 'none' || n.perspective !== 'none' || (n.willChange && n.willChange !== 'auto')) return t;
    t = t.parentNode;
  }
  return null;
}
function ba(e) {
  const t = Yt(e);
  let n = Fl(e);
  for (; n && Ph(n) && on(n).position === 'static'; ) n = Fl(n);
  return n && Dt(n) === 'body' && on(n).position === 'static' ? t : n || Ah(e) || t;
}
const Et = 'top',
  Ft = 'bottom',
  Mt = 'right',
  St = 'left',
  ts = 'auto',
  ya = [Et, Ft, Mt, St],
  vr = 'start',
  ns = 'end',
  Fh = 'clippingParents',
  pd = 'viewport',
  Wr = 'popper',
  Mh = 'reference',
  Ml = ya.reduce((e, t) => e.concat([`${t}-${vr}`, `${t}-${ns}`]), []),
  md = [...ya, ts].reduce((e, t) => e.concat([t, `${t}-${vr}`, `${t}-${ns}`]), []),
  Dh = 'beforeRead',
  jh = 'read',
  Bh = 'afterRead',
  Uh = 'beforeMain',
  Vh = 'main',
  Hh = 'afterMain',
  $h = 'beforeWrite',
  zh = 'write',
  Wh = 'afterWrite',
  Gh = [Dh, jh, Bh, Uh, Vh, Hh, $h, zh, Wh];
function qh(e) {
  const t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(i => {
    t.set(i.name, i);
  });
  function a(i) {
    n.add(i.name),
      [...(i.requires || []), ...(i.requiresIfExists || [])].forEach(s => {
        if (!n.has(s)) {
          const l = t.get(s);
          l && a(l);
        }
      }),
      r.push(i);
  }
  return (
    e.forEach(i => {
      n.has(i.name) || a(i);
    }),
    r
  );
}
function Kh(e) {
  const t = qh(e);
  return Gh.reduce((n, r) => n.concat(t.filter(a => a.phase === r)), []);
}
function Xh(e) {
  let t;
  return () => (
    t ||
      (t = new Promise(n => {
        Promise.resolve().then(() => {
          (t = void 0), n(e());
        });
      })),
    t
  );
}
function Kt(e) {
  return e.split('-')[0];
}
function Jh(e) {
  const t = e.reduce((n, r) => {
    const a = n[r.name];
    return (
      (n[r.name] = a
        ? Object.assign(Object.assign(Object.assign({}, a), r), {
            options: Object.assign(Object.assign({}, a.options), r.options),
            data: Object.assign(Object.assign({}, a.data), r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(n => t[n]);
}
function Yh(e) {
  const t = Yt(e),
    n = dn(e),
    r = t.visualViewport;
  let a = n.clientWidth,
    i = n.clientHeight,
    o = 0,
    s = 0;
  return (
    r &&
      ((a = r.width),
      (i = r.height),
      /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || ((o = r.offsetLeft), (s = r.offsetTop))),
    { width: a, height: i, x: o + Qo(e), y: s }
  );
}
function Qh(e) {
  const t = dn(e),
    n = Yo(e),
    r = e.ownerDocument.body,
    a = Math.max(t.scrollWidth, t.clientWidth, r ? r.scrollWidth : 0, r ? r.clientWidth : 0),
    i = Math.max(t.scrollHeight, t.clientHeight, r ? r.scrollHeight : 0, r ? r.clientHeight : 0);
  let o = -n.scrollLeft + Qo(e);
  const s = -n.scrollTop;
  return on(r || t).direction === 'rtl' && (o += Math.max(t.clientWidth, r ? r.clientWidth : 0) - a), { width: a, height: i, x: o, y: s };
}
function hd(e, t) {
  const n = !!(t.getRootNode && t.getRootNode().host);
  if (e.contains(t)) return !0;
  if (n) {
    let r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Io(e) {
  return Object.assign(Object.assign({}, e), { left: e.x, top: e.y, right: e.x + e.width, bottom: e.y + e.height });
}
function Zh(e) {
  const t = oa(e);
  return (
    (t.top = t.top + e.clientTop),
    (t.left = t.left + e.clientLeft),
    (t.bottom = t.top + e.clientHeight),
    (t.right = t.left + e.clientWidth),
    (t.width = e.clientWidth),
    (t.height = e.clientHeight),
    (t.x = t.left),
    (t.y = t.top),
    t
  );
}
function Dl(e, t) {
  return t === pd ? Io(Yh(e)) : Xt(t) ? Zh(t) : Io(Qh(dn(e)));
}
function eg(e) {
  const t = Zr(Ii(e)),
    r = ['absolute', 'fixed'].indexOf(on(e).position) >= 0 && Xt(e) ? ba(e) : e;
  return sa(r) ? t.filter(a => sa(a) && hd(a, r) && Dt(a) !== 'body') : [];
}
function tg(e, t, n) {
  const a = [...(t === 'clippingParents' ? eg(e) : [].concat(t)), n],
    i = a[0],
    o = a.reduce(
      (s, l) => {
        const u = Dl(e, l);
        return (
          (s.top = Math.max(u.top, s.top)),
          (s.right = Math.min(u.right, s.right)),
          (s.bottom = Math.min(u.bottom, s.bottom)),
          (s.left = Math.max(u.left, s.left)),
          s
        );
      },
      Dl(e, i),
    );
  return (o.width = o.right - o.left), (o.height = o.bottom - o.top), (o.x = o.left), (o.y = o.top), o;
}
function la(e) {
  return e.split('-')[1];
}
function rs(e) {
  return ['top', 'bottom'].indexOf(e) >= 0 ? 'x' : 'y';
}
function gd({ reference: e, element: t, placement: n }) {
  const r = n ? Kt(n) : null,
    a = n ? la(n) : null,
    i = e.x + e.width / 2 - t.width / 2,
    o = e.y + e.height / 2 - t.height / 2;
  let s;
  switch (r) {
    case Et:
      s = { x: i, y: e.y - t.height };
      break;
    case Ft:
      s = { x: i, y: e.y + e.height };
      break;
    case Mt:
      s = { x: e.x + e.width, y: o };
      break;
    case St:
      s = { x: e.x - t.width, y: o };
      break;
    default:
      s = { x: e.x, y: e.y };
  }
  const l = r ? rs(r) : null;
  if (l != null) {
    const u = l === 'y' ? 'height' : 'width';
    switch (a) {
      case vr:
        s[l] = Math.floor(s[l]) - Math.floor(e[u] / 2 - t[u] / 2);
        break;
      case ns:
        s[l] = Math.floor(s[l]) + Math.ceil(e[u] / 2 - t[u] / 2);
        break;
    }
  }
  return s;
}
function vd() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function bd(e) {
  return Object.assign(Object.assign({}, vd()), e);
}
function yd(e, t) {
  return t.reduce((n, r) => ((n[r] = e), n), {});
}
function ca(e, t = {}) {
  const {
      placement: n = e.placement,
      boundary: r = Fh,
      rootBoundary: a = pd,
      elementContext: i = Wr,
      altBoundary: o = !1,
      padding: s = 0,
    } = t,
    l = bd(typeof s != 'number' ? s : yd(s, ya)),
    u = i === Wr ? Mh : Wr,
    d = e.elements.reference,
    p = e.rects.popper,
    f = e.elements[o ? u : i],
    h = tg(sa(f) ? f : f.contextElement || dn(e.elements.popper), r, a),
    b = oa(d),
    v = gd({ reference: b, element: p, strategy: 'absolute', placement: n }),
    w = Io(Object.assign(Object.assign({}, p), v)),
    T = i === Wr ? w : b,
    N = {
      top: h.top - T.top + l.top,
      bottom: T.bottom - h.bottom + l.bottom,
      left: h.left - T.left + l.left,
      right: T.right - h.right + l.right,
    },
    B = e.modifiersData.offset;
  if (i === Wr && B) {
    const A = B[n];
    Object.keys(N).forEach(L => {
      const g = [Mt, Ft].indexOf(L) >= 0 ? 1 : -1,
        m = [Et, Ft].indexOf(L) >= 0 ? 'y' : 'x';
      N[L] += A[m] * g;
    });
  }
  return N;
}
const jl = { placement: 'bottom', modifiers: [], strategy: 'absolute' };
function Bl(...e) {
  return !e.some(t => !(t && typeof t.getBoundingClientRect == 'function'));
}
function ng(e = {}) {
  const { defaultModifiers: t = [], defaultOptions: n = jl } = e;
  return function (a, i, o = n) {
    let s = {
        placement: 'bottom',
        orderedModifiers: [],
        options: Object.assign(Object.assign({}, jl), n),
        modifiersData: {},
        elements: { reference: a, popper: i },
        attributes: {},
        styles: {},
      },
      l = [],
      u = !1;
    const d = {
      state: s,
      setOptions(h) {
        f(),
          (s.options = Object.assign(Object.assign(Object.assign({}, n), s.options), h)),
          (s.scrollParents = { reference: sa(a) ? Zr(a) : a.contextElement ? Zr(a.contextElement) : [], popper: Zr(i) });
        const b = Kh(Jh([...t, ...s.options.modifiers]));
        return (s.orderedModifiers = b.filter(v => v.enabled)), p(), d.update();
      },
      forceUpdate() {
        if (u) return;
        const { reference: h, popper: b } = s.elements;
        if (Bl(h, b)) {
          (s.rects = { reference: Th(h, ba(b), s.options.strategy === 'fixed'), popper: es(b) }),
            (s.reset = !1),
            (s.placement = s.options.placement),
            s.orderedModifiers.forEach(v => (s.modifiersData[v.name] = Object.assign({}, v.data)));
          for (let v = 0; v < s.orderedModifiers.length; v++) {
            if (s.reset === !0) {
              (s.reset = !1), (v = -1);
              continue;
            }
            const { fn: w, options: T = {}, name: N } = s.orderedModifiers[v];
            typeof w == 'function' && (s = w({ state: s, options: T, name: N, instance: d }) || s);
          }
        }
      },
      update: Xh(
        () =>
          new Promise(h => {
            d.forceUpdate(), h(s);
          }),
      ),
      destroy() {
        f(), (u = !0);
      },
    };
    if (!Bl(a, i)) return d;
    d.setOptions(o).then(h => {
      !u && o.onFirstUpdate && o.onFirstUpdate(h);
    });
    function p() {
      s.orderedModifiers.forEach(({ name: h, options: b = {}, effect: v }) => {
        if (typeof v == 'function') {
          const w = v({ state: s, name: h, instance: d, options: b }),
            T = () => {};
          l.push(w || T);
        }
      });
    }
    function f() {
      l.forEach(h => h()), (l = []);
    }
    return d;
  };
}
const Da = { passive: !0 };
function rg({ state: e, instance: t, options: n }) {
  const { scroll: r = !0, resize: a = !0 } = n,
    i = Yt(e.elements.popper),
    o = [...e.scrollParents.reference, ...e.scrollParents.popper];
  return (
    r &&
      o.forEach(s => {
        s.addEventListener('scroll', t.update, Da);
      }),
    a && i.addEventListener('resize', t.update, Da),
    () => {
      r &&
        o.forEach(s => {
          s.removeEventListener('scroll', t.update, Da);
        }),
        a && i.removeEventListener('resize', t.update, Da);
    }
  );
}
const ag = { name: 'eventListeners', enabled: !0, phase: 'write', fn: () => {}, effect: rg, data: {} };
function ig({ state: e, name: t }) {
  e.modifiersData[t] = gd({ reference: e.rects.reference, element: e.rects.popper, strategy: 'absolute', placement: e.placement });
}
const og = { name: 'popperOffsets', enabled: !0, phase: 'read', fn: ig, data: {} },
  sg = { top: 'auto', right: 'auto', bottom: 'auto', left: 'auto' };
function lg({ x: e, y: t }) {
  const r = window.devicePixelRatio || 1;
  return { x: Math.round(e * r) / r || 0, y: Math.round(t * r) / r || 0 };
}
function Ul({ popper: e, popperRect: t, placement: n, offsets: r, position: a, gpuAcceleration: i, adaptive: o }) {
  let { x: s, y: l } = lg(r);
  const u = r.hasOwnProperty('x'),
    d = r.hasOwnProperty('y');
  let p = St,
    f = Et;
  const h = window;
  if (o) {
    let v = ba(e);
    v === Yt(e) && (v = dn(e)),
      n === Et && ((f = Ft), (l -= v.clientHeight - t.height), (l *= i ? 1 : -1)),
      n === St && ((p = Mt), (s -= v.clientWidth - t.width), (s *= i ? 1 : -1));
  }
  const b = Object.assign({ position: a }, o && sg);
  return i
    ? Object.assign(Object.assign({}, b), {
        [f]: d ? '0' : '',
        [p]: u ? '0' : '',
        transform: (h.devicePixelRatio || 1) < 2 ? `translate(${s}px, ${l}px)` : `translate3d(${s}px, ${l}px, 0)`,
      })
    : Object.assign(Object.assign({}, b), { [f]: d ? `${l}px` : '', [p]: u ? `${s}px` : '', transform: '' });
}
function cg({ state: e, options: t }) {
  const { gpuAcceleration: n = !0, adaptive: r = !0 } = t,
    a = { placement: Kt(e.placement), popper: e.elements.popper, popperRect: e.rects.popper, gpuAcceleration: n };
  e.modifiersData.popperOffsets != null &&
    (e.styles.popper = Object.assign(
      Object.assign({}, e.styles.popper),
      Ul(Object.assign(Object.assign({}, a), { offsets: e.modifiersData.popperOffsets, position: e.options.strategy, adaptive: r })),
    )),
    e.modifiersData.arrow != null &&
      (e.styles.arrow = Object.assign(
        Object.assign({}, e.styles.arrow),
        Ul(Object.assign(Object.assign({}, a), { offsets: e.modifiersData.arrow, position: 'absolute', adaptive: !1 })),
      )),
    (e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), { 'data-popper-placement': e.placement }));
}
const dg = { name: 'computeStyles', enabled: !0, phase: 'beforeWrite', fn: cg, data: {} };
function ug({ state: e }) {
  Object.keys(e.elements).forEach(t => {
    const n = e.styles[t] || {},
      r = e.attributes[t] || {},
      a = e.elements[t];
    !Xt(a) ||
      !Dt(a) ||
      (Object.assign(a.style, n),
      Object.keys(r).forEach(i => {
        const o = r[i];
        o === !1 ? a.removeAttribute(i) : a.setAttribute(i, o === !0 ? '' : o);
      }));
  });
}
function fg({ state: e }) {
  const t = { popper: { position: e.options.strategy, left: '0', top: '0', margin: '0' }, arrow: { position: 'absolute' }, reference: {} };
  return (
    Object.assign(e.elements.popper.style, t.popper),
    e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow),
    () => {
      Object.keys(e.elements).forEach(n => {
        const r = e.elements[n],
          a = e.attributes[n] || {},
          o = Object.keys(e.styles.hasOwnProperty(n) ? e.styles[n] : t[n]).reduce((s, l) => ((s[l] = ''), s), {});
        !Xt(r) ||
          !Dt(r) ||
          (Object.assign(r.style, o),
          Object.keys(a).forEach(s => {
            r.removeAttribute(s);
          }));
      });
    }
  );
}
const pg = { name: 'applyStyles', enabled: !0, phase: 'write', fn: ug, effect: fg, requires: ['computeStyles'] };
function mg(e, t, n) {
  const r = Kt(e),
    a = [St, Et].indexOf(r) >= 0 ? -1 : 1;
  let [i, o] = typeof n == 'function' ? n(Object.assign(Object.assign({}, t), { placement: e })) : n;
  return (i = i || 0), (o = (o || 0) * a), [St, Mt].indexOf(r) >= 0 ? { x: o, y: i } : { x: i, y: o };
}
function hg({ state: e, options: t, name: n }) {
  const { offset: r = [0, 0] } = t,
    a = md.reduce((s, l) => ((s[l] = mg(l, e.rects, r)), s), {}),
    { x: i, y: o } = a[e.placement];
  e.modifiersData.popperOffsets != null && ((e.modifiersData.popperOffsets.x += i), (e.modifiersData.popperOffsets.y += o)),
    (e.modifiersData[n] = a);
}
const gg = { name: 'offset', enabled: !0, phase: 'main', requires: ['popperOffsets'], fn: hg },
  vg = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
function Va(e) {
  return e.replace(/left|right|bottom|top/g, t => vg[t]);
}
const bg = { start: 'end', end: 'start' };
function Vl(e) {
  return e.replace(/start|end/g, t => bg[t]);
}
function yg(e, t = {}) {
  const { placement: n, boundary: r, rootBoundary: a, padding: i, flipVariations: o, allowedAutoPlacements: s = md } = t,
    l = la(n),
    u = l ? (o ? Ml : Ml.filter(f => la(f) === l)) : ya;
  let d = u.filter(f => s.indexOf(f) >= 0);
  d.length === 0 && (d = u);
  const p = d.reduce((f, h) => ((f[h] = ca(e, { placement: h, boundary: r, rootBoundary: a, padding: i })[Kt(h)]), f), {});
  return Object.keys(p).sort((f, h) => p[f] - p[h]);
}
function xg(e) {
  if (Kt(e) === ts) return [];
  const t = Va(e);
  return [Vl(e), t, Vl(t)];
}
function wg({ state: e, options: t, name: n }) {
  if (e.modifiersData[n]._skip) return;
  const {
      mainAxis: r = !0,
      altAxis: a = !0,
      fallbackPlacements: i,
      padding: o,
      boundary: s,
      rootBoundary: l,
      altBoundary: u,
      flipVariations: d = !0,
      allowedAutoPlacements: p,
    } = t,
    f = e.options.placement,
    b = Kt(f) === f,
    v = i || (b || !d ? [Va(f)] : xg(f)),
    w = [f, ...v].reduce(
      (g, m) =>
        g.concat(
          Kt(m) === ts ? yg(e, { placement: m, boundary: s, rootBoundary: l, padding: o, flipVariations: d, allowedAutoPlacements: p }) : m,
        ),
      [],
    ),
    T = e.rects.reference,
    N = e.rects.popper,
    B = new Map();
  let A = !0,
    L = w[0];
  for (let g = 0; g < w.length; g++) {
    const m = w[g],
      S = Kt(m),
      E = la(m) === vr,
      k = [Et, Ft].indexOf(S) >= 0,
      y = k ? 'width' : 'height',
      _ = ca(e, { placement: m, boundary: s, rootBoundary: l, altBoundary: u, padding: o });
    let O = k ? (E ? Mt : St) : E ? Ft : Et;
    T[y] > N[y] && (O = Va(O));
    const U = Va(O),
      x = [];
    if ((r && x.push(_[S] <= 0), a && x.push(_[O] <= 0, _[U] <= 0), x.every(D => D))) {
      (L = m), (A = !1);
      break;
    }
    B.set(m, x);
  }
  if (A) {
    const g = d ? 3 : 1;
    for (let m = g; m > 0; m--) {
      const S = w.find(E => {
        const k = B.get(E);
        if (k) return k.slice(0, m).every(y => y);
      });
      if (S) {
        L = S;
        break;
      }
    }
  }
  e.placement !== L && ((e.modifiersData[n]._skip = !0), (e.placement = L), (e.reset = !0));
}
const Cg = { name: 'flip', enabled: !0, phase: 'main', fn: wg, requiresIfExists: ['offset'], data: { _skip: !1 } };
function Og(e) {
  return e === 'x' ? 'y' : 'x';
}
function Ha(e, t, n) {
  return Math.max(e, Math.min(t, n));
}
function _g({ state: e, options: t, name: n }) {
  const {
      mainAxis: r = !0,
      altAxis: a = !1,
      boundary: i,
      rootBoundary: o,
      altBoundary: s,
      padding: l,
      tether: u = !0,
      tetherOffset: d = 0,
    } = t,
    p = ca(e, { boundary: i, rootBoundary: o, padding: l, altBoundary: s }),
    f = Kt(e.placement),
    h = la(e.placement),
    b = !h,
    v = rs(f),
    w = Og(v),
    T = e.modifiersData.popperOffsets,
    N = e.rects.reference,
    B = e.rects.popper,
    A = typeof d == 'function' ? d(Object.assign(Object.assign({}, e.rects), { placement: e.placement })) : d,
    L = { x: 0, y: 0 };
  if (T) {
    if (r) {
      const g = v === 'y' ? Et : St,
        m = v === 'y' ? Ft : Mt,
        S = v === 'y' ? 'height' : 'width',
        E = T[v],
        k = T[v] + p[g],
        y = T[v] - p[m],
        _ = u ? -B[S] / 2 : 0,
        O = h === vr ? N[S] : B[S],
        U = h === vr ? -B[S] : -N[S],
        x = e.elements.arrow,
        D = u && x ? es(x) : { width: 0, height: 0 },
        G = e.modifiersData['arrow#persistent'] ? e.modifiersData['arrow#persistent'].padding : vd(),
        z = G[g],
        K = G[m],
        ne = Ha(0, N[S], D[S]),
        C = b ? N[S] / 2 - _ - ne - z - A : O - ne - z - A,
        P = b ? -N[S] / 2 + _ + ne + K + A : U + ne + K + A,
        H = e.elements.arrow && ba(e.elements.arrow),
        q = H ? (v === 'y' ? H.clientTop || 0 : H.clientLeft || 0) : 0,
        $ = e.modifiersData.offset ? e.modifiersData.offset[e.placement][v] : 0,
        Y = T[v] + C - $ - q,
        J = T[v] + P - $,
        Q = Ha(u ? Math.min(k, Y) : k, E, u ? Math.max(y, J) : y);
      (T[v] = Q), (L[v] = Q - E);
    }
    if (a) {
      const g = v === 'x' ? Et : St,
        m = v === 'x' ? Ft : Mt,
        S = T[w],
        E = S + p[g],
        k = S - p[m],
        y = Ha(E, S, k);
      (T[w] = y), (L[w] = y - S);
    }
    e.modifiersData[n] = L;
  }
}
const Eg = { name: 'preventOverflow', enabled: !0, phase: 'main', fn: _g, requiresIfExists: ['offset'] };
function Sg({ state: e, name: t }) {
  const n = e.elements.arrow,
    r = e.modifiersData.popperOffsets,
    a = Kt(e.placement),
    i = rs(a),
    s = [St, Mt].indexOf(a) >= 0 ? 'height' : 'width';
  if (!n || !r) return;
  const l = e.modifiersData[`${t}#persistent`].padding,
    u = es(n),
    d = i === 'y' ? Et : St,
    p = i === 'y' ? Ft : Mt,
    f = e.rects.reference[s] + e.rects.reference[i] - r[i] - e.rects.popper[s],
    h = r[i] - e.rects.reference[i],
    b = ba(n),
    v = b ? (i === 'y' ? b.clientHeight || 0 : b.clientWidth || 0) : 0,
    w = f / 2 - h / 2,
    T = l[d],
    N = v - u[s] - l[p],
    B = v / 2 - u[s] / 2 + w,
    A = Ha(T, B, N),
    L = i;
  e.modifiersData[t] = { [L]: A, centerOffset: A - B };
}
function kg({ state: e, options: t, name: n }) {
  let { element: r = '[data-popper-arrow]', padding: a = 0 } = t;
  r != null &&
    ((typeof r == 'string' && ((r = e.elements.popper.querySelector(r)), !r)) ||
      (hd(e.elements.popper, r) &&
        ((e.elements.arrow = r), (e.modifiersData[`${n}#persistent`] = { padding: bd(typeof a != 'number' ? a : yd(a, ya)) }))));
}
const Lg = {
  name: 'arrow',
  enabled: !0,
  phase: 'main',
  fn: Sg,
  effect: kg,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow'],
};
function Hl(e, t, n = { x: 0, y: 0 }) {
  return { top: e.top - t.height - n.y, right: e.right - t.width + n.x, bottom: e.bottom - t.height + n.y, left: e.left - t.width - n.x };
}
function $l(e) {
  return [Et, Mt, Ft, St].some(t => e[t] >= 0);
}
function Ig({ state: e, name: t }) {
  const n = e.rects.reference,
    r = e.rects.popper,
    a = e.modifiersData.preventOverflow,
    i = ca(e, { elementContext: 'reference' }),
    o = ca(e, { altBoundary: !0 }),
    s = Hl(i, n),
    l = Hl(o, r, a),
    u = $l(s),
    d = $l(l);
  (e.modifiersData[t] = { referenceClippingOffsets: s, popperEscapeOffsets: l, isReferenceHidden: u, hasPopperEscaped: d }),
    (e.attributes.popper = Object.assign(Object.assign({}, e.attributes.popper), {
      'data-popper-reference-hidden': u,
      'data-popper-escaped': d,
    }));
}
const Rg = { name: 'hide', enabled: !0, phase: 'main', requiresIfExists: ['preventOverflow'], fn: Ig },
  Ng = [ag, og, dg, pg, gg, Cg, Eg, Lg, Rg],
  Tg = ng({ defaultModifiers: Ng }),
  li = bt ? c.useLayoutEffect : c.useEffect,
  Pg = (e, t) => JSON.stringify(e) === JSON.stringify(t),
  zl = e => e.reduce((t, [n, r]) => ((t[n] = r), t), {}),
  Ag = [],
  Fg = (e, t, n = {}) => {
    const r = c.useRef(null),
      a = {
        onFirstUpdate: n.onFirstUpdate,
        placement: n.placement || 'bottom',
        strategy: n.strategy || 'absolute',
        modifiers: n.modifiers || Ag,
      },
      [i, o] = c.useState({ styles: { popper: { position: a.strategy, left: '0', top: '0' } }, attributes: {} }),
      s = c.useMemo(
        () => ({
          name: 'updateState',
          enabled: !0,
          phase: 'write',
          fn: ({ state: d }) => {
            const p = Object.keys(d.elements);
            o({ styles: zl(p.map(f => [f, d.styles[f] || {}])), attributes: zl(p.map(f => [f, d.attributes[f]])) });
          },
          requires: ['computeStyles'],
        }),
        [],
      ),
      l = c.useMemo(() => {
        const d = {
          onFirstUpdate: a.onFirstUpdate,
          placement: a.placement,
          strategy: a.strategy,
          modifiers: [...a.modifiers, s, { name: 'applyStyles', enabled: !1 }],
        };
        return Pg(r.current, d) ? r.current || d : ((r.current = d), d);
      }, [a.onFirstUpdate, a.placement, a.strategy, a.modifiers, s]),
      u = c.useRef();
    return (
      li(() => {
        u && u.current && u.current.setOptions(l);
      }, [l]),
      li(() => {
        if (e == null || t == null) return;
        const p = (n.createPopper || Tg)(e, t, l);
        return (
          (u.current = p),
          () => {
            p.destroy(), (u.current = null);
          }
        );
      }, [e, t, n.createPopper]),
      {
        state: u.current ? u.current.state : null,
        styles: i.styles,
        attributes: i.attributes,
        update: u.current ? u.current.update : null,
        forceUpdate: u.current ? u.current.forceUpdate : null,
      }
    );
  },
  Mg = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom',
    'top-start': 'bottom-end',
    'top-end': 'bottom-start',
    'bottom-start': 'top-end',
    'bottom-end': 'top-start',
    'left-start': 'right-end',
    'left-end': 'right-start',
    'right-start': 'left-end',
    'right-end': 'left-start',
  },
  Dg = e =>
    e.replace(/left|right|bottom|top|top-start|top-end|bottom-start|bottom-end|right-start|right-end|left-start|left-end/g, t => Mg[t]),
  jg = e => `opacity ${e}ms cubic-bezier(.54, 1.5, .38, 1.11)`,
  _r = ({
    trigger: e,
    popper: t,
    direction: n = 'down',
    position: r = 'start',
    placement: a,
    width: i,
    minWidth: o = 'trigger',
    maxWidth: s,
    appendTo: l = 'inline',
    zIndex: u = 9999,
    isVisible: d = !0,
    positionModifiers: p,
    distance: f = 0,
    onMouseEnter: h,
    onMouseLeave: b,
    onFocus: v,
    onBlur: w,
    onDocumentClick: T,
    onTriggerClick: N,
    onTriggerEnter: B,
    onPopperClick: A,
    onPopperMouseEnter: L,
    onPopperMouseLeave: g,
    onDocumentKeyDown: m,
    enableFlip: S = !0,
    flipBehavior: E = 'flip',
    triggerRef: k,
    popperRef: y,
    animationDuration: _ = 0,
    entryDelay: O = 0,
    exitDelay: U = 0,
    onHidden: x = () => {},
    onHide: D = () => {},
    onMount: G = () => {},
    onShow: z = () => {},
    onShown: K = () => {},
    preventOverflow: ne = !1,
  }) => {
    var C;
    const [P, H] = c.useState(null),
      [q, $] = c.useState(null),
      [Y, J] = c.useState(null),
      [Q, re] = c.useState(null),
      [te, se] = c.useState(!1),
      [de, Le] = c.useState(0),
      [je, Me] = c.useState(d),
      Te = c.useRef(null),
      Xe = c.useRef(null),
      I = c.useRef(null),
      F = c.useRef(),
      V = q || P,
      ee = d || je,
      ae = (C = k?.current || P) === null || C === void 0 ? void 0 : C.parentElement,
      Z = ur(ae),
      ue = c.useMemo(() => {
        const we = { left: 'left', right: 'right', center: 'center' };
        return { ltr: Object.assign({ start: 'left', end: 'right' }, we), rtl: Object.assign({ start: 'right', end: 'left' }, we) }[Z][r];
      }, [r, Z]),
      le = c.useCallback(we => T(we, V, Y), [ee, P, q, Y, T]);
    c.useEffect(() => {
      se(!0), G();
    }, []),
      c.useEffect(
        () => () => {
          Ma([Te, I, Xe]);
        },
        [],
      ),
      c.useEffect(() => {
        k && (k.current ? $(k.current) : typeof k == 'function' && $(k()));
      }, [k, e]),
      c.useEffect(() => {
        y && (y.current ? J(y.current) : typeof y == 'function' && J(y()));
      }, [ee, y]),
      c.useEffect(() => {
        const we = new MutationObserver(() => {
          dt && dt();
        });
        return (
          Y && we.observe(Y, { attributes: !0, childList: !0, subtree: !0 }),
          () => {
            we.disconnect();
          }
        );
      }, [Y]);
    const be = (we, Be, Qt, j = !1) => {
        we && Be && Be.addEventListener(Qt, we, { capture: j });
      },
      Ee = (we, Be, Qt, j = !1) => {
        we && Be && Be.removeEventListener(Qt, we, { capture: j });
      };
    c.useEffect(
      () => (
        be(h, V, 'mouseenter'),
        be(b, V, 'mouseleave'),
        be(v, V, 'focus'),
        be(w, V, 'blur'),
        be(N, V, 'click'),
        be(B, V, 'keydown'),
        be(A, Y, 'click'),
        be(L, Y, 'mouseenter'),
        be(g, Y, 'mouseleave'),
        T && be(le, document, 'click', !0),
        be(m, document, 'keydown', !0),
        () => {
          Ee(h, V, 'mouseenter'),
            Ee(b, V, 'mouseleave'),
            Ee(v, V, 'focus'),
            Ee(w, V, 'blur'),
            Ee(N, V, 'click'),
            Ee(B, V, 'keydown'),
            Ee(A, Y, 'click'),
            Ee(L, Y, 'mouseenter'),
            Ee(g, Y, 'mouseleave'),
            T && Ee(le, document, 'click', !0),
            Ee(m, document, 'keydown', !0);
        }
      ),
      [P, Y, h, b, v, w, N, B, A, L, g, T, m, q],
    );
    const et = () => {
        if (a) return a;
        let we = n === 'up' ? 'top' : 'bottom';
        return ue !== 'center' && (we = `${we}-${ue === 'right' ? 'end' : 'start'}`), we;
      },
      ht = c.useMemo(et, [n, ue, a]),
      jt = c.useMemo(() => Dg(et()), [n, ue, a]),
      ge = c.useMemo(
        () => ({
          name: 'widthMods',
          enabled: i !== void 0 || o !== void 0 || s !== void 0,
          phase: 'beforeWrite',
          requires: ['computeStyles'],
          fn: ({ state: we }) => {
            const Be = we.rects.reference.width;
            i && (we.styles.popper.width = i === 'trigger' ? `${Be}px` : i),
              o && (we.styles.popper.minWidth = o === 'trigger' ? `${Be}px` : o),
              s && (we.styles.popper.maxWidth = s === 'trigger' ? `${Be}px` : s);
          },
          effect: ({ state: we }) => {
            const Be = we.elements.reference.offsetWidth;
            return (
              i && (we.elements.popper.style.width = i === 'trigger' ? `${Be}px` : i),
              o && (we.elements.popper.style.minWidth = o === 'trigger' ? `${Be}px` : o),
              s && (we.elements.popper.style.maxWidth = s === 'trigger' ? `${Be}px` : s),
              () => {}
            );
          },
        }),
        [i, o, s],
      ),
      {
        styles: Ie,
        attributes: Ue,
        update: dt,
        forceUpdate: kt,
      } = Fg(V, Y, {
        placement: ht,
        modifiers: [
          { name: 'offset', options: { offset: [0, f] } },
          { name: 'preventOverflow', enabled: ne },
          { name: 'hide', enabled: !0 },
          { name: 'flip', enabled: ht.startsWith('auto') || S, options: { fallbackPlacements: E === 'flip' ? [jt] : E } },
          ge,
        ],
      });
    c.useEffect(() => {
      var we, Be, Qt, j, W, X, oe;
      const fe =
        ((j =
          (Qt = (Be = (we = t?.props) === null || we === void 0 ? void 0 : we.children) === null || Be === void 0 ? void 0 : Be[1]) ===
            null || Qt === void 0
            ? void 0
            : Qt.props) === null || j === void 0
          ? void 0
          : j.children) ||
        ((oe = (X = (W = t?.props) === null || W === void 0 ? void 0 : W.children) === null || X === void 0 ? void 0 : X.props) === null ||
        oe === void 0
          ? void 0
          : oe.children);
      re(fe), fe && Q && fe !== Q && kt && kt();
    }, [t]),
      c.useEffect(() => {
        F.current < U &&
          (Ma([Te, I]),
          (I.current = setTimeout(() => {
            Te.current = setTimeout(() => {
              Me(!1);
            }, _);
          }, U))),
          (F.current = U);
      }, [U]);
    const Lt = () => {
        z(),
          Ma([Te, I]),
          (Xe.current = setTimeout(() => {
            Me(!0), Le(1), K();
          }, O));
      },
      Bt = () => {
        D(),
          Ma([Xe]),
          (I.current = setTimeout(() => {
            Le(0),
              (Te.current = setTimeout(() => {
                Me(!1), x();
              }, _));
          }, U));
      };
    c.useEffect(() => {
      d ? Lt() : Bt();
    }, [d]);
    const fn = () => {
        if (Ue && Ue.popper && Ue.popper['data-popper-placement']) {
          const we = Ue.popper['data-popper-placement'];
          return p[we];
        }
        return p.top;
      },
      Xn = Object.assign(
        {
          className: R(t.props && t.props.className, p && fn()),
          style: Object.assign(Object.assign(Object.assign({}, (t.props && t.props.style) || {}), Ie.popper), {
            zIndex: u,
            opacity: de,
            transition: jg(_),
          }),
        },
        Ue.popper,
      ),
      ka = () => {
        const we = c.cloneElement(t, Xn);
        return y ? we : c.createElement('div', { style: { display: 'contents' }, ref: Be => J(Be?.firstElementChild) }, we);
      },
      La = () => {
        if (l === 'inline') return ka();
        {
          const we = typeof l == 'function' ? l() : l;
          return _i.createPortal(ka(), we);
        }
      };
    return c.createElement(
      c.Fragment,
      null,
      !k && e && c.isValidElement(e) && c.createElement('div', { style: { display: 'contents' }, ref: we => H(we?.firstElementChild) }, e),
      k && e && c.isValidElement(e) && e,
      te && ee && La(),
    );
  };
_r.displayName = 'Popper';
const Bg = (
    e,
    t,
    n = u => document.activeElement.contains(u),
    r = u => u,
    a = ['A', 'BUTTON', 'INPUT'],
    i = !1,
    o = !1,
    s = !0,
    l = !0,
  ) => {
    const u = document.activeElement,
      d = e.key;
    let p = null;
    if (!i && ['ArrowUp', 'ArrowDown'].includes(d)) {
      e.preventDefault(), e.stopImmediatePropagation();
      let f = -1;
      t.forEach((h, b) => {
        if (n(h)) {
          let v = 0;
          for (; !p && v < t.length && v * -1 < t.length; )
            d === 'ArrowUp' ? v-- : v++, (f = b + v), f >= t.length && (f = 0), f < 0 && (f = t.length - 1), (p = r(t[f]));
        }
      });
    }
    if (!o && ['ArrowLeft', 'ArrowRight'].includes(d)) {
      e.preventDefault(), e.stopImmediatePropagation();
      let f = -1;
      t.forEach((h, b) => {
        if (n(h)) {
          const v = t[b].querySelectorAll(a.join(','));
          if (!v.length || l) {
            let w = u;
            for (; w; )
              if (((w = d === 'ArrowLeft' ? w.previousElementSibling : w.nextElementSibling), w && a.includes(w.tagName))) {
                p = w;
                break;
              }
          } else
            v.forEach((w, T) => {
              e.target === w && ((f = T + (d === 'ArrowLeft' ? -1 : 1)), f >= v.length && (f = 0), f < 0 && (f = v.length - 1), (p = v[f]));
            });
        }
      });
    }
    p && (s && ((u.tabIndex = -1), (p.tabIndex = 0)), p.focus());
  },
  Z1 = e => {
    e &&
      e.length > 0 &&
      (e.forEach(t => {
        t.tabIndex = -1;
      }),
      (e[0].tabIndex = 0));
  };
class as extends c.Component {
  constructor() {
    super(...arguments),
      (this.keyHandler = t => {
        const { isEventFromContainer: n } = this.props;
        if (n ? !n(t) : !this._isEventFromContainer(t)) return;
        const {
          isActiveElement: r,
          getFocusableElement: a,
          noVerticalArrowHandling: i,
          noHorizontalArrowHandling: o,
          noEnterHandling: s,
          noSpaceHandling: l,
          updateTabIndex: u,
          validSiblingTags: d,
          additionalKeyHandler: p,
          createNavigableElements: f,
          onlyTraverseSiblings: h,
        } = this.props;
        p && p(t);
        const b = f();
        if (!b) {
          console.warn(
            'No navigable elements have been passed to the KeyboardHandler. Keyboard navigation provided by this component will be ignored.',
          );
          return;
        }
        const v = t.key;
        s || (v === 'Enter' && (t.preventDefault(), t.stopImmediatePropagation(), document.activeElement.click())),
          l || (v === ' ' && (t.preventDefault(), t.stopImmediatePropagation(), document.activeElement.click())),
          Bg(t, b, r, a, d, i, o, u, h);
      }),
      (this._isEventFromContainer = t => {
        const { containerRef: n } = this.props;
        return n.current && n.current.contains(t.target);
      });
  }
  componentDidMount() {
    bt && window.addEventListener('keydown', this.keyHandler);
  }
  componentWillUnmount() {
    bt && window.removeEventListener('keydown', this.keyHandler);
  }
  render() {
    return null;
  }
}
as.displayName = 'KeyboardHandler';
as.defaultProps = {
  containerRef: null,
  createNavigableElements: () => null,
  isActiveElement: e => document.activeElement === e,
  getFocusableElement: e => e,
  validSiblingTags: ['BUTTON', 'A'],
  onlyTraverseSiblings: !0,
  updateTabIndex: !0,
  noHorizontalArrowHandling: !1,
  noVerticalArrowHandling: !1,
  noEnterHandling: !1,
  noSpaceHandling: !1,
};
const is = (e, t, n) => {
  let r;
  if (bt) {
    const { ResizeObserver: a } = window;
    if (e && a) {
      const i = new a(o => {
        n
          ? window.requestAnimationFrame(() => {
              Array.isArray(o) && o.length > 0 && t();
            })
          : Array.isArray(o) && o.length > 0 && t();
      });
      i.observe(e), (r = () => i.unobserve(e));
    } else window.addEventListener('resize', t), (r = () => window.removeEventListener('resize', t));
  }
  return () => {
    r && r();
  };
};
var Wl;
(function (e) {
  (e.md = 'md'), (e.lg = 'lg'), (e.xl = 'xl'), (e['2xl'] = '2xl'), (e['3xl'] = '3xl'), (e['4xl'] = '4xl');
})(Wl || (Wl = {}));
var Ro;
(function (e) {
  (e.h1 = '2xl'), (e.h2 = 'xl'), (e.h3 = 'lg'), (e.h4 = 'md'), (e.h5 = 'md'), (e.h6 = 'md');
})(Ro || (Ro = {}));
const os = e => {
  var { className: t = '', children: n = '', headingLevel: r, size: a = Ro[r], ouiaId: i, ouiaSafe: o = !0 } = e,
    s = ie(e, ['className', 'children', 'headingLevel', 'size', 'ouiaId', 'ouiaSafe']);
  const l = In(os.displayName, i, o);
  return c.createElement(r, Object.assign({}, l, s, { className: R(Sl.title, a && Sl.modifiers[a], t) }), n);
};
os.displayName = 'Title';
const nt = {
    badge: 'pf-v5-c-badge',
    button: 'pf-v5-c-button',
    buttonCount: 'pf-v5-c-button__count',
    buttonIcon: 'pf-v5-c-button__icon',
    buttonProgress: 'pf-v5-c-button__progress',
    modifiers: {
      active: 'pf-m-active',
      block: 'pf-m-block',
      small: 'pf-m-small',
      primary: 'pf-m-primary',
      displayLg: 'pf-m-display-lg',
      secondary: 'pf-m-secondary',
      tertiary: 'pf-m-tertiary',
      link: 'pf-m-link',
      unread: 'pf-m-unread',
      inline: 'pf-m-inline',
      danger: 'pf-m-danger',
      warning: 'pf-m-warning',
      control: 'pf-m-control',
      expanded: 'pf-m-expanded',
      plain: 'pf-m-plain',
      noPadding: 'pf-m-no-padding',
      disabled: 'pf-m-disabled',
      ariaDisabled: 'pf-m-aria-disabled',
      progress: 'pf-m-progress',
      inProgress: 'pf-m-in-progress',
      start: 'pf-m-start',
      end: 'pf-m-end',
    },
    spinner: 'pf-v5-c-spinner',
    themeDark: 'pf-v5-theme-dark',
  },
  ja = {
    modifiers: { inline: 'pf-m-inline', sm: 'pf-m-sm', md: 'pf-m-md', lg: 'pf-m-lg', xl: 'pf-m-xl' },
    spinner: 'pf-v5-c-spinner',
    spinnerPath: 'pf-v5-c-spinner__path',
  },
  Ug = { name: '--pf-v5-c-spinner--diameter', value: '0.875rem', var: 'var(--pf-v5-c-spinner--diameter)' };
var No;
(function (e) {
  (e.sm = 'sm'), (e.md = 'md'), (e.lg = 'lg'), (e.xl = 'xl');
})(No || (No = {}));
const Er = e => {
  var {
      className: t = '',
      size: n = 'xl',
      'aria-valuetext': r = 'Loading...',
      diameter: a,
      isInline: i = !1,
      'aria-label': o,
      'aria-labelledBy': s,
    } = e,
    l = ie(e, ['className', 'size', 'aria-valuetext', 'diameter', 'isInline', 'aria-label', 'aria-labelledBy']);
  return c.createElement(
    'svg',
    Object.assign(
      {
        className: R(ja.spinner, i ? ja.modifiers.inline : ja.modifiers[n], t),
        role: 'progressbar',
        'aria-valuetext': r,
        viewBox: '0 0 100 100',
      },
      a && { style: { [Ug.name]: a } },
      o && { 'aria-label': o },
      s && { 'aria-labelledBy': s },
      !o && !s && { 'aria-label': 'Contents' },
      l,
    ),
    c.createElement('circle', { className: ja.spinnerPath, cx: '50', cy: '50', r: '45', fill: 'none' }),
  );
};
Er.displayName = 'Spinner';
const Xi = { badge: 'pf-v5-c-badge', modifiers: { read: 'pf-m-read', unread: 'pf-m-unread' }, themeDark: 'pf-v5-theme-dark' },
  xd = e => {
    var { isRead: t = !1, className: n = '', children: r = '', screenReaderText: a } = e,
      i = ie(e, ['isRead', 'className', 'children', 'screenReaderText']);
    return c.createElement(
      'span',
      Object.assign({}, i, { className: R(Xi.badge, t ? Xi.modifiers.read : Xi.modifiers.unread, n) }),
      r,
      a && c.createElement('span', { className: 'pf-v5-screen-reader' }, a),
    );
  };
xd.displayName = 'Badge';
var ft;
(function (e) {
  (e.primary = 'primary'),
    (e.secondary = 'secondary'),
    (e.tertiary = 'tertiary'),
    (e.danger = 'danger'),
    (e.warning = 'warning'),
    (e.link = 'link'),
    (e.plain = 'plain'),
    (e.control = 'control');
})(ft || (ft = {}));
var To;
(function (e) {
  (e.button = 'button'), (e.submit = 'submit'), (e.reset = 'reset');
})(To || (To = {}));
var ea;
(function (e) {
  (e.default = 'default'), (e.sm = 'sm'), (e.lg = 'lg');
})(ea || (ea = {}));
const Vg = e => {
    var {
        children: t = null,
        className: n = '',
        component: r = 'button',
        isActive: a = !1,
        isBlock: i = !1,
        isDisabled: o = !1,
        isAriaDisabled: s = !1,
        isLoading: l = null,
        isDanger: u = !1,
        spinnerAriaValueText: d,
        spinnerAriaLabelledBy: p,
        spinnerAriaLabel: f,
        size: h = ea.default,
        inoperableEvents: b = ['onClick', 'onKeyPress'],
        isInline: v = !1,
        type: w = To.button,
        variant: T = ft.primary,
        iconPosition: N = 'start',
        'aria-label': B = null,
        icon: A = null,
        ouiaId: L,
        ouiaSafe: g = !0,
        tabIndex: m = null,
        innerRef: S,
        countOptions: E,
      } = e,
      k = ie(e, [
        'children',
        'className',
        'component',
        'isActive',
        'isBlock',
        'isDisabled',
        'isAriaDisabled',
        'isLoading',
        'isDanger',
        'spinnerAriaValueText',
        'spinnerAriaLabelledBy',
        'spinnerAriaLabel',
        'size',
        'inoperableEvents',
        'isInline',
        'type',
        'variant',
        'iconPosition',
        'aria-label',
        'icon',
        'ouiaId',
        'ouiaSafe',
        'tabIndex',
        'innerRef',
        'countOptions',
      ]);
    const y = In(Ke.displayName, L, g, T),
      _ = r,
      O = _ === 'button',
      U = v && _ === 'span',
      x = b.reduce(
        (G, z) =>
          Object.assign(Object.assign({}, G), {
            [z]: K => {
              K.preventDefault();
            },
          }),
        {},
      ),
      D = () => {
        if (o) return O ? null : -1;
        if (s) return null;
        if (U) return 0;
      };
    return c.createElement(
      _,
      Object.assign(
        {},
        k,
        s ? x : null,
        {
          'aria-disabled': o || s,
          'aria-label': B,
          className: R(
            nt.button,
            nt.modifiers[T],
            i && nt.modifiers.block,
            o && nt.modifiers.disabled,
            s && nt.modifiers.ariaDisabled,
            a && nt.modifiers.active,
            v && T === ft.link && nt.modifiers.inline,
            u && (T === ft.secondary || T === ft.link) && nt.modifiers.danger,
            l !== null && T !== ft.plain && nt.modifiers.progress,
            l && nt.modifiers.inProgress,
            h === ea.sm && nt.modifiers.small,
            h === ea.lg && nt.modifiers.displayLg,
            n,
          ),
          disabled: O ? o : null,
          tabIndex: m !== null ? m : D(),
          type: O || U ? w : null,
          role: U ? 'button' : null,
          ref: S,
        },
        y,
      ),
      l &&
        c.createElement(
          'span',
          { className: R(nt.buttonProgress) },
          c.createElement(Er, { size: No.md, isInline: v, 'aria-valuetext': d, 'aria-label': f, 'aria-labelledby': p }),
        ),
      T === ft.plain && t === null && A ? A : null,
      T !== ft.plain &&
        A &&
        (N === 'start' || N === 'left') &&
        c.createElement('span', { className: R(nt.buttonIcon, nt.modifiers.start) }, A),
      t,
      T !== ft.plain &&
        A &&
        (N === 'end' || N === 'right') &&
        c.createElement('span', { className: R(nt.buttonIcon, nt.modifiers.end) }, A),
      E && c.createElement('span', { className: R(nt.buttonCount, E.className) }, c.createElement(xd, { isRead: E.isRead }, E.count)),
    );
  },
  Ke = c.forwardRef((e, t) => c.createElement(Vg, Object.assign({ innerRef: t }, e)));
Ke.displayName = 'Button';
function Hg(e, t) {
  var n = {};
  for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
  if (e != null && typeof Object.getOwnPropertySymbols == 'function')
    for (var a = 0, r = Object.getOwnPropertySymbols(e); a < r.length; a++)
      t.indexOf(r[a]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[a]) && (n[r[a]] = e[r[a]]);
  return n;
}
let $g = 0;
function ke({ name: e, xOffset: t = 0, yOffset: n = 0, width: r, height: a, svgPath: i }) {
  var o;
  return (
    (o = class extends c.Component {
      constructor() {
        super(...arguments), (this.id = `icon-title-${$g++}`);
      }
      render() {
        const l = this.props,
          { title: u, className: d } = l,
          p = Hg(l, ['title', 'className']),
          f = d ? `pf-v5-svg ${d}` : 'pf-v5-svg',
          h = !!u,
          b = [t, n, r, a].join(' ');
        return c.createElement(
          'svg',
          Object.assign(
            {
              className: f,
              viewBox: b,
              fill: 'currentColor',
              'aria-labelledby': h ? this.id : null,
              'aria-hidden': h ? null : !0,
              role: 'img',
              width: '1em',
              height: '1em',
            },
            p,
          ),
          h && c.createElement('title', { id: this.id }, u),
          c.createElement('path', { d: i }),
        );
      }
    }),
    (o.displayName = e),
    o
  );
}
const zg = {
    name: 'TimesIcon',
    height: 512,
    width: 352,
    svgPath:
      'M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z',
    yOffset: 0,
    xOffset: 0,
  },
  Sr = ke(zg),
  ar = { backdrop: 'pf-v5-c-backdrop', backdropOpen: 'pf-v5-c-backdrop__open' },
  at = {
    button: 'pf-v5-c-button',
    modalBox: 'pf-v5-c-modal-box',
    modalBoxBody: 'pf-v5-c-modal-box__body',
    modalBoxClose: 'pf-v5-c-modal-box__close',
    modalBoxDescription: 'pf-v5-c-modal-box__description',
    modalBoxFooter: 'pf-v5-c-modal-box__footer',
    modalBoxHeader: 'pf-v5-c-modal-box__header',
    modalBoxHeaderMain: 'pf-v5-c-modal-box__header-main',
    modalBoxTitle: 'pf-v5-c-modal-box__title',
    modalBoxTitleIcon: 'pf-v5-c-modal-box__title-icon',
    modalBoxTitleText: 'pf-v5-c-modal-box__title-text',
    modifiers: {
      sm: 'pf-m-sm',
      md: 'pf-m-md',
      lg: 'pf-m-lg',
      alignTop: 'pf-m-align-top',
      danger: 'pf-m-danger',
      warning: 'pf-m-warning',
      success: 'pf-m-success',
      custom: 'pf-m-custom',
      info: 'pf-m-info',
      help: 'pf-m-help',
      icon: 'pf-m-icon',
    },
    themeDark: 'pf-v5-theme-dark',
  },
  Wg = { bullseye: 'pf-v5-l-bullseye' },
  wd = e => {
    var { children: t = null, className: n = '' } = e,
      r = ie(e, ['children', 'className']);
    return c.createElement('div', Object.assign({}, r, { className: R(ar.backdrop, n) }), t);
  };
wd.displayName = 'Backdrop';
const Cd = e => {
  var { children: t = null, className: n = '' } = e,
    r = ie(e, ['children', 'className']);
  return c.createElement('div', Object.assign({}, r, { className: R(at.modalBoxBody, n) }), t);
};
Cd.displayName = 'ModalBoxBody';
const ss = e => {
  var { className: t, onClose: n = () => {}, 'aria-label': r = 'Close', ouiaId: a } = e,
    i = ie(e, ['className', 'onClose', 'aria-label', 'ouiaId']);
  return c.createElement(
    'div',
    { className: R(at.modalBoxClose, t) },
    c.createElement(
      Ke,
      Object.assign({ variant: 'plain', onClick: o => n(o), 'aria-label': r }, a && { ouiaId: `${a}-${ss.displayName}` }, i),
      c.createElement(Sr, null),
    ),
  );
};
ss.displayName = 'ModalBoxCloseButton';
const Gg = { name: '--pf-v5-c-modal-box--m-align-top--spacer', value: '0.5rem', var: 'var(--pf-v5-c-modal-box--m-align-top--spacer)' },
  Od = e => {
    var {
        children: t,
        className: n = '',
        variant: r = 'default',
        position: a,
        positionOffset: i,
        'aria-labelledby': o,
        'aria-label': s = '',
        'aria-describedby': l,
        style: u,
      } = e,
      d = ie(e, [
        'children',
        'className',
        'variant',
        'position',
        'positionOffset',
        'aria-labelledby',
        'aria-label',
        'aria-describedby',
        'style',
      ]);
    return (
      i && ((u = u || {}), (u[Gg.name] = i)),
      c.createElement(
        'div',
        Object.assign({}, d, {
          role: 'dialog',
          'aria-label': s || null,
          'aria-labelledby': o || null,
          'aria-describedby': l,
          'aria-modal': 'true',
          className: R(
            at.modalBox,
            n,
            a === 'top' && at.modifiers.alignTop,
            r === 'large' && at.modifiers.lg,
            r === 'small' && at.modifiers.sm,
            r === 'medium' && at.modifiers.md,
          ),
          style: u,
        }),
        t,
      )
    );
  };
Od.displayName = 'ModalBox';
const Po = e => {
  var { children: t = null, className: n = '' } = e,
    r = ie(e, ['children', 'className']);
  return c.createElement('footer', Object.assign({}, r, { className: R(at.modalBoxFooter, n) }), t);
};
Po.displayName = 'ModalBoxFooter';
const _d = e => {
  var { children: t = null, className: n = '', id: r = '' } = e,
    a = ie(e, ['children', 'className', 'id']);
  return c.createElement('div', Object.assign({}, a, { id: r, className: R(at.modalBoxDescription, n) }), t);
};
_d.displayName = 'ModalBoxDescription';
const Ao = e => {
  var { children: t = null, className: n = '', help: r = null } = e,
    a = ie(e, ['children', 'className', 'help']);
  return c.createElement(
    'header',
    Object.assign({ className: R(at.modalBoxHeader, r && at.modifiers.help, n) }, a),
    r &&
      c.createElement(
        c.Fragment,
        null,
        c.createElement('div', { className: R(at.modalBoxHeaderMain) }, t),
        c.createElement('div', { className: `${at.modalBoxHeader}-help` }, r),
      ),
    !r && t,
  );
};
Ao.displayName = 'ModalBoxHeader';
const ct = {
    modifiers: {
      top: 'pf-m-top',
      topLeft: 'pf-m-top-left',
      topRight: 'pf-m-top-right',
      bottom: 'pf-m-bottom',
      bottomLeft: 'pf-m-bottom-left',
      bottomRight: 'pf-m-bottom-right',
      left: 'pf-m-left',
      leftTop: 'pf-m-left-top',
      leftBottom: 'pf-m-left-bottom',
      right: 'pf-m-right',
      rightTop: 'pf-m-right-top',
      rightBottom: 'pf-m-right-bottom',
      textAlignLeft: 'pf-m-text-align-left',
    },
    themeDark: 'pf-v5-theme-dark',
    tooltip: 'pf-v5-c-tooltip',
    tooltipArrow: 'pf-v5-c-tooltip__arrow',
    tooltipContent: 'pf-v5-c-tooltip__content',
  },
  Ed = e => {
    var { className: t, children: n, isLeftAligned: r } = e,
      a = ie(e, ['className', 'children', 'isLeftAligned']);
    return c.createElement('div', Object.assign({ className: R(ct.tooltipContent, r && ct.modifiers.textAlignLeft, t) }, a), n);
  };
Ed.displayName = 'TooltipContent';
const Sd = e => {
  var { className: t } = e,
    n = ie(e, ['className']);
  return c.createElement('div', Object.assign({ className: R(ct.tooltipArrow, t) }, n));
};
Sd.displayName = 'TooltipArrow';
const Gl = { name: '--pf-v5-c-tooltip--MaxWidth', value: '18.75rem', var: 'var(--pf-v5-c-tooltip--MaxWidth)' };
var ql;
(function (e) {
  (e.auto = 'auto'),
    (e.top = 'top'),
    (e.bottom = 'bottom'),
    (e.left = 'left'),
    (e.right = 'right'),
    (e.topStart = 'top-start'),
    (e.topEnd = 'top-end'),
    (e.bottomStart = 'bottom-start'),
    (e.bottomEnd = 'bottom-end'),
    (e.leftStart = 'left-start'),
    (e.leftEnd = 'left-end'),
    (e.rightStart = 'right-start'),
    (e.rightEnd = 'right-end');
})(ql || (ql = {}));
let qg = 1;
const kr = e => {
  var {
      content: t,
      position: n = 'top',
      trigger: r = 'mouseenter focus',
      isVisible: a = !1,
      isContentLeftAligned: i = !1,
      enableFlip: o = !0,
      className: s = '',
      entryDelay: l = 300,
      exitDelay: u = 300,
      appendTo: d = () => document.body,
      zIndex: p = 9999,
      minWidth: f,
      maxWidth: h = Gl.value,
      distance: b = 15,
      aria: v = 'describedby',
      flipBehavior: w = ['top', 'right', 'bottom', 'left', 'top', 'right', 'bottom'],
      id: T = `pf-tooltip-${qg++}`,
      children: N,
      animationDuration: B = 300,
      triggerRef: A,
      'aria-live': L = A ? 'polite' : 'off',
      onTooltipHidden: g = () => {},
    } = e,
    m = ie(e, [
      'content',
      'position',
      'trigger',
      'isVisible',
      'isContentLeftAligned',
      'enableFlip',
      'className',
      'entryDelay',
      'exitDelay',
      'appendTo',
      'zIndex',
      'minWidth',
      'maxWidth',
      'distance',
      'aria',
      'flipBehavior',
      'id',
      'children',
      'animationDuration',
      'triggerRef',
      'aria-live',
      'onTooltipHidden',
    ]);
  const S = r.includes('mouseenter'),
    E = r.includes('focus'),
    k = r.includes('click'),
    y = r === 'manual',
    [_, O] = c.useState(!1),
    U = c.createRef(),
    x = q => {
      y || (q.key === ti.Escape && _ && z());
    },
    D = q => {
      q.key === ti.Enter && (_ ? z() : G());
    };
  c.useEffect(() => {
    a ? G() : z();
  }, [a]);
  const G = () => {
      O(!0);
    },
    z = () => {
      O(!1);
    },
    K = {
      top: ct.modifiers.top,
      bottom: ct.modifiers.bottom,
      left: ct.modifiers.left,
      right: ct.modifiers.right,
      'top-start': ct.modifiers.topLeft,
      'top-end': ct.modifiers.topRight,
      'bottom-start': ct.modifiers.bottomLeft,
      'bottom-end': ct.modifiers.bottomRight,
      'left-start': ct.modifiers.leftTop,
      'left-end': ct.modifiers.leftBottom,
      'right-start': ct.modifiers.rightTop,
      'right-end': ct.modifiers.rightBottom,
    },
    ne = h !== Gl.value,
    C = c.createElement(
      'div',
      Object.assign({ 'aria-live': L, className: R(ct.tooltip, s), role: 'tooltip', id: T, style: { maxWidth: ne ? h : null }, ref: U }, m),
      c.createElement(Sd, null),
      c.createElement(Ed, { isLeftAligned: i }, t),
    ),
    P = (q, $) => {
      _ ? z() : q.target === $ && G();
    },
    H = () =>
      v === 'describedby' && N && N.props && !N.props['aria-describedby']
        ? c.cloneElement(N, { 'aria-describedby': T })
        : v === 'labelledby' && N.props && !N.props['aria-labelledby']
          ? c.cloneElement(N, { 'aria-labelledby': T })
          : N;
  return c.createElement(_r, {
    trigger: v !== 'none' && _ ? H() : N,
    triggerRef: A,
    popper: C,
    popperRef: U,
    minWidth: f !== void 0 ? f : 'revert',
    appendTo: d,
    isVisible: _,
    positionModifiers: K,
    distance: b,
    placement: n,
    onMouseEnter: S && G,
    onMouseLeave: S && z,
    onPopperMouseEnter: S && G,
    onPopperMouseLeave: S && z,
    onFocus: E && G,
    onBlur: E && z,
    onDocumentClick: k && P,
    onDocumentKeyDown: y ? null : x,
    onTriggerEnter: y ? null : D,
    enableFlip: o,
    zIndex: p,
    flipBehavior: w,
    animationDuration: B,
    entryDelay: l,
    exitDelay: u,
    onHidden: g,
  });
};
kr.displayName = 'Tooltip';
const Kg = {
    name: 'CheckCircleIcon',
    height: 512,
    width: 512,
    svgPath:
      'M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z',
    yOffset: 0,
    xOffset: 0,
  },
  xa = ke(Kg),
  Xg = {
    name: 'ExclamationCircleIcon',
    height: 512,
    width: 512,
    svgPath:
      'M504 256c0 136.997-111.043 248-248 248S8 392.997 8 256C8 119.083 119.043 8 256 8s248 111.083 248 248zm-248 50c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z',
    yOffset: 0,
    xOffset: 0,
  },
  Lr = ke(Xg),
  Jg = {
    name: 'ExclamationTriangleIcon',
    height: 512,
    width: 576,
    svgPath:
      'M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z',
    yOffset: 0,
    xOffset: 0,
  },
  wa = ke(Jg),
  Yg = {
    name: 'InfoCircleIcon',
    height: 512,
    width: 512,
    svgPath:
      'M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z',
    yOffset: 0,
    xOffset: 0,
  },
  kd = ke(Yg),
  Qg = {
    name: 'BellIcon',
    height: 1024,
    width: 896,
    svgPath:
      'M448,0 C465.333333,0 480.333333,6.33333333 493,19 C505.666667,31.6666667 512,46.6666667 512,64 L512,106 L514.23,106.45 C587.89,121.39 648.48,157.24 696,214 C744,271.333333 768,338.666667 768,416 C768,500 780,568.666667 804,622 C818.666667,652.666667 841.333333,684 872,716 C873.773676,718.829136 875.780658,721.505113 878,724 C890,737.333333 896,752.333333 896,769 C896,785.666667 890,800.333333 878,813 C866,825.666667 850.666667,832 832,832 L63.3,832 C44.9533333,831.84 29.8533333,825.506667 18,813 C6,800.333333 0,785.666667 0,769 C0,752.333333 6,737.333333 18,724 L24,716 L25.06,714.9 C55.1933333,683.28 77.5066667,652.313333 92,622 C116,568.666667 128,500 128,416 C128,338.666667 152,271.333333 200,214 C248,156.666667 309.333333,120.666667 384,106 L384,63.31 C384.166667,46.27 390.5,31.5 403,19 C415.666667,6.33333333 430.666667,0 448,0 Z M576,896 L576,897.08 C575.74,932.6 563.073333,962.573333 538,987 C512.666667,1011.66667 482.666667,1024 448,1024 C413.333333,1024 383.333333,1011.66667 358,987 C332.666667,962.333333 320,932 320,896 L576,896 Z',
    yOffset: 0,
    xOffset: 0,
  },
  Ld = ke(Qg),
  $a = e => ['success', 'danger', 'warning', 'info', 'custom'].includes(e),
  Id = e => {
    var { className: t = '', id: n, title: r, titleIconVariant: a, titleLabel: i = '' } = e,
      o = ie(e, ['className', 'id', 'title', 'titleIconVariant', 'titleLabel']);
    const [s, l] = c.useState(!1),
      u = c.useRef(null),
      d = i || ($a(a) ? `${oi(a)} alert:` : i),
      p = {
        success: c.createElement(xa, null),
        danger: c.createElement(Lr, null),
        warning: c.createElement(wa, null),
        info: c.createElement(kd, null),
        custom: c.createElement(Ld, null),
      },
      f = !$a(a) && a;
    li(() => {
      l(u.current && u.current.offsetWidth < u.current.scrollWidth);
    }, []);
    const h = c.createElement(
      'h1',
      Object.assign({ id: n, ref: u, className: R(at.modalBoxTitle, a && at.modifiers.icon, t) }, o),
      a && c.createElement('span', { className: R(at.modalBoxTitleIcon) }, $a(a) ? p[a] : c.createElement(f, null)),
      d && c.createElement('span', { className: 'pf-v5-screen-reader' }, d),
      c.createElement('span', { className: R(at.modalBoxTitleText) }, r),
    );
    return s ? c.createElement(kr, { content: r }, h) : h;
  };
Id.displayName = 'ModalBoxTitle';
const ls = e => {
  var {
      children: t,
      className: n = '',
      isOpen: r = !1,
      header: a = null,
      help: i = null,
      description: o = null,
      title: s = '',
      titleIconVariant: l = null,
      titleLabel: u = '',
      'aria-label': d = '',
      'aria-describedby': p,
      'aria-labelledby': f,
      bodyAriaLabel: h,
      bodyAriaRole: b,
      showClose: v = !0,
      footer: w = null,
      actions: T = [],
      onClose: N = () => {},
      variant: B = 'default',
      position: A,
      positionOffset: L,
      width: g,
      maxWidth: m,
      boxId: S,
      labelId: E,
      descriptorId: k,
      disableFocusTrap: y = !1,
      hasNoBodyWrapper: _ = !1,
      ouiaId: O,
      ouiaSafe: U = !0,
      elementToFocus: x,
    } = e,
    D = ie(e, [
      'children',
      'className',
      'isOpen',
      'header',
      'help',
      'description',
      'title',
      'titleIconVariant',
      'titleLabel',
      'aria-label',
      'aria-describedby',
      'aria-labelledby',
      'bodyAriaLabel',
      'bodyAriaRole',
      'showClose',
      'footer',
      'actions',
      'onClose',
      'variant',
      'position',
      'positionOffset',
      'width',
      'maxWidth',
      'boxId',
      'labelId',
      'descriptorId',
      'disableFocusTrap',
      'hasNoBodyWrapper',
      'ouiaId',
      'ouiaSafe',
      'elementToFocus',
    ]);
  if (!r) return null;
  const G = a
      ? c.createElement(Ao, { help: i }, a)
      : s &&
        c.createElement(
          Ao,
          { help: i },
          c.createElement(Id, { title: s, titleIconVariant: l, titleLabel: u, id: E }),
          o && c.createElement(_d, { id: k }, o),
        ),
    z = w ? c.createElement(Po, null, w) : T.length > 0 && c.createElement(Po, null, T),
    K = h ? 'region' : void 0,
    C = !o && !p ? k : void 0,
    P = _ ? t : c.createElement(Cd, Object.assign({ 'aria-label': h, role: b || K }, D, { id: C }), t),
    H = () => {
      if (f === null) return null;
      const $ = [];
      return (d && S) !== '' && $.push(d && S), f && $.push(f), s && $.push(E), $.join(' ');
    },
    q = c.createElement(
      Od,
      Object.assign(
        {
          id: S,
          className: R(n, $a(l) && at.modifiers[l]),
          variant: B,
          position: A,
          positionOffset: L,
          'aria-label': d,
          'aria-labelledby': H(),
          'aria-describedby': p || (_ ? null : k),
        },
        At(ls.displayName, O, U),
        {
          style: Object.assign(
            Object.assign({}, g && { '--pf-v5-c-modal-box--Width': typeof g != 'number' ? g : `${g}px` }),
            m && { '--pf-v5-c-modal-box--MaxWidth': typeof m != 'number' ? m : `${m}px` },
          ),
        },
      ),
      v && c.createElement(ss, { onClose: $ => N($), ouiaId: O }),
      G,
      P,
      z,
    );
  return c.createElement(
    wd,
    null,
    c.createElement(
      Li,
      {
        active: !y,
        focusTrapOptions: { clickOutsideDeactivates: !0, tabbableOptions: { displayCheck: 'none' }, initialFocus: x || void 0 },
        className: R(Wg.bullseye),
      },
      q,
    ),
  );
};
ls.displayName = 'ModalContent';
var ci;
(function (e) {
  (e.small = 'small'), (e.medium = 'medium'), (e.large = 'large'), (e.default = 'default');
})(ci || (ci = {}));
class sn extends c.Component {
  constructor(t) {
    super(t),
      (this.boxId = ''),
      (this.labelId = ''),
      (this.descriptorId = ''),
      (this.handleEscKeyClick = i => {
        var o, s;
        const { onEscapePress: l } = this.props;
        i.key === ti.Escape && this.props.isOpen && (l ? l(i) : (s = (o = this.props).onClose) === null || s === void 0 || s.call(o, i));
      }),
      (this.getElement = i => (typeof i == 'function' ? i() : i || document.body)),
      (this.toggleSiblingsFromScreenReaders = i => {
        const { appendTo: o } = this.props,
          l = this.getElement(o).children;
        for (const u of Array.from(l))
          u !== this.state.container && (i ? u.setAttribute('aria-hidden', '' + i) : u.removeAttribute('aria-hidden'));
      }),
      (this.isEmpty = i => i == null || i === '');
    const n = sn.currentId++,
      r = n + 1,
      a = n + 2;
    (this.boxId = t.id || `pf-modal-part-${n}`),
      (this.labelId = `pf-modal-part-${r}`),
      (this.descriptorId = `pf-modal-part-${a}`),
      (this.state = { container: void 0, ouiaStateId: Jt(sn.displayName, t.variant) });
  }
  componentDidMount() {
    const { appendTo: t, title: n, 'aria-label': r, 'aria-labelledby': a, hasNoBodyWrapper: i, header: o } = this.props,
      s = this.getElement(t),
      l = document.createElement('div');
    this.setState({ container: l }),
      s.appendChild(l),
      s.addEventListener('keydown', this.handleEscKeyClick, !1),
      this.props.isOpen ? s.classList.add(R(ar.backdropOpen)) : s.classList.remove(R(ar.backdropOpen)),
      this.isEmpty(n) &&
        this.isEmpty(r) &&
        this.isEmpty(a) &&
        console.error('Modal: Specify at least one of: title, aria-label, aria-labelledby.'),
      this.isEmpty(r) &&
        this.isEmpty(a) &&
        (i || o) &&
        console.error(
          'Modal: When using hasNoBodyWrapper or setting a custom header, ensure you assign an accessible name to the the modal container with aria-label or aria-labelledby.',
        );
  }
  componentDidUpdate() {
    const { appendTo: t } = this.props,
      n = this.getElement(t);
    this.props.isOpen
      ? (n.classList.add(R(ar.backdropOpen)), this.toggleSiblingsFromScreenReaders(!0))
      : (n.classList.remove(R(ar.backdropOpen)), this.toggleSiblingsFromScreenReaders(!1));
  }
  componentWillUnmount() {
    const { appendTo: t } = this.props,
      n = this.getElement(t);
    this.state.container && n.removeChild(this.state.container),
      n.removeEventListener('keydown', this.handleEscKeyClick, !1),
      n.classList.remove(R(ar.backdropOpen)),
      this.toggleSiblingsFromScreenReaders(!1);
  }
  render() {
    const t = this.props,
      {
        appendTo: n,
        onEscapePress: r,
        'aria-labelledby': a,
        'aria-label': i,
        'aria-describedby': o,
        bodyAriaLabel: s,
        bodyAriaRole: l,
        title: u,
        titleIconVariant: d,
        titleLabel: p,
        ouiaId: f,
        ouiaSafe: h,
        position: b,
        elementToFocus: v,
      } = t,
      w = ie(t, [
        'appendTo',
        'onEscapePress',
        'aria-labelledby',
        'aria-label',
        'aria-describedby',
        'bodyAriaLabel',
        'bodyAriaRole',
        'title',
        'titleIconVariant',
        'titleLabel',
        'ouiaId',
        'ouiaSafe',
        'position',
        'elementToFocus',
      ]),
      { container: T } = this.state;
    return !bt || !T
      ? null
      : _i.createPortal(
          c.createElement(
            ls,
            Object.assign({}, w, {
              boxId: this.boxId,
              labelId: this.labelId,
              descriptorId: this.descriptorId,
              title: u,
              titleIconVariant: d,
              titleLabel: p,
              'aria-label': i,
              'aria-describedby': o,
              'aria-labelledby': a,
              bodyAriaLabel: s,
              bodyAriaRole: l,
              ouiaId: f !== void 0 ? f : this.state.ouiaStateId,
              ouiaSafe: h,
              position: b,
              elementToFocus: v,
            }),
          ),
          T,
        );
  }
}
sn.displayName = 'Modal';
sn.currentId = 0;
sn.defaultProps = {
  className: '',
  isOpen: !1,
  title: '',
  titleIconVariant: null,
  titleLabel: '',
  'aria-label': '',
  showClose: !0,
  'aria-describedby': '',
  'aria-labelledby': '',
  id: void 0,
  actions: [],
  onClose: () => {},
  variant: 'default',
  hasNoBodyWrapper: !1,
  appendTo: () => document.body,
  ouiaSafe: !0,
  position: 'default',
};
const Zg = {
    name: 'AngleRightIcon',
    height: 512,
    width: 256,
    svgPath:
      'M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z',
    yOffset: 0,
    xOffset: 0,
  },
  qn = ke(Zg),
  gt = {
    alert: 'pf-v5-c-alert',
    alertAction: 'pf-v5-c-alert__action',
    alertActionGroup: 'pf-v5-c-alert__action-group',
    alertDescription: 'pf-v5-c-alert__description',
    alertIcon: 'pf-v5-c-alert__icon',
    alertTitle: 'pf-v5-c-alert__title',
    alertToggle: 'pf-v5-c-alert__toggle',
    alertToggleIcon: 'pf-v5-c-alert__toggle-icon',
    button: 'pf-v5-c-button',
    dirRtl: 'pf-v5-m-dir-rtl',
    modifiers: {
      custom: 'pf-m-custom',
      success: 'pf-m-success',
      danger: 'pf-m-danger',
      warning: 'pf-m-warning',
      info: 'pf-m-info',
      inline: 'pf-m-inline',
      plain: 'pf-m-plain',
      expandable: 'pf-m-expandable',
      expanded: 'pf-m-expanded',
      truncate: 'pf-m-truncate',
    },
    themeDark: 'pf-v5-theme-dark',
  },
  ev = { success: xa, danger: Lr, warning: wa, info: kd, custom: Ld },
  tv = e => {
    var { variant: t, customIcon: n, className: r = '' } = e,
      a = ie(e, ['variant', 'customIcon', 'className']);
    const i = ev[t];
    return i ? c.createElement('div', Object.assign({}, a, { className: R(gt.alertIcon, r) }), n || c.createElement(i, null)) : null;
  },
  di = c.createContext(null),
  nv = { name: '--pf-v5-c-alert__title--max-lines', value: '1', var: 'var(--pf-v5-c-alert__title--max-lines)' },
  Rd = e => {
    var { 'aria-label': t = '', variantLabel: n, onToggleExpand: r, isExpanded: a = !1 } = e,
      i = ie(e, ['aria-label', 'variantLabel', 'onToggleExpand', 'isExpanded']);
    const { title: o, variantLabel: s } = c.useContext(di);
    return c.createElement(
      Ke,
      Object.assign({ variant: ft.plain, onClick: r, 'aria-expanded': a, 'aria-label': t === '' ? `Toggle ${n || s} alert: ${o}` : t }, i),
      c.createElement('span', { className: R(gt.alertToggleIcon) }, c.createElement(qn, { 'aria-hidden': 'true' })),
    );
  };
Rd.displayName = 'AlertToggleExpandButton';
var fr;
(function (e) {
  (e.success = 'success'), (e.danger = 'danger'), (e.warning = 'warning'), (e.info = 'info'), (e.custom = 'custom');
})(fr || (fr = {}));
const cs = e => {
  var {
      variant: t = fr.custom,
      isInline: n = !1,
      isPlain: r = !1,
      isLiveRegion: a = !1,
      variantLabel: i = `${oi(t)} alert:`,
      actionClose: o,
      actionLinks: s,
      title: l,
      component: u = 'h4',
      children: d = '',
      className: p = '',
      ouiaId: f,
      ouiaSafe: h = !0,
      timeout: b = !1,
      timeoutAnimation: v = 3e3,
      onTimeout: w = () => {},
      truncateTitle: T = 0,
      tooltipPosition: N,
      customIcon: B,
      isExpandable: A = !1,
      toggleAriaLabel: L = `${oi(t)} alert details`,
      onMouseEnter: g = () => {},
      onMouseLeave: m = () => {},
      id: S,
    } = e,
    E = ie(e, [
      'variant',
      'isInline',
      'isPlain',
      'isLiveRegion',
      'variantLabel',
      'actionClose',
      'actionLinks',
      'title',
      'component',
      'children',
      'className',
      'ouiaId',
      'ouiaSafe',
      'timeout',
      'timeoutAnimation',
      'onTimeout',
      'truncateTitle',
      'tooltipPosition',
      'customIcon',
      'isExpandable',
      'toggleAriaLabel',
      'onMouseEnter',
      'onMouseLeave',
      'id',
    ]);
  const k = In(cs.displayName, f, h, t),
    y = c.createElement(c.Fragment, null, c.createElement('span', { className: 'pf-v5-screen-reader' }, i), l),
    _ = c.useRef(null),
    O = u,
    U = c.useRef(),
    [x, D] = ze(!1);
  c.useEffect(() => {
    if (!_.current || !T) return;
    _.current.style.setProperty(nv.name, T.toString());
    const de = _.current && _.current.offsetHeight < _.current.scrollHeight;
    x !== de && D(de);
  }, [_, T, x]);
  const [G, z] = ze(!1),
    [K, ne] = ze(!0),
    [C, P] = ze(),
    [H, q] = ze(),
    $ = G && K && !C && !H;
  c.useEffect(() => {
    const de = b === !0 ? 8e3 : Number(b);
    if (de > 0) {
      const Le = setTimeout(() => z(!0), de);
      return () => clearTimeout(Le);
    }
  }, [b]),
    c.useEffect(() => {
      const de = () => {
        U.current && (U.current.contains(document.activeElement) ? (q(!0), ne(!1)) : H && q(!1));
      };
      return document.addEventListener('focus', de, !0), () => document.removeEventListener('focus', de, !0);
    }, [H]),
    c.useEffect(() => {
      if (H === !1 || C === !1) {
        const de = setTimeout(() => ne(!0), v);
        return () => clearTimeout(de);
      }
    }, [H, C, v]),
    c.useEffect(() => {
      $ && w();
    }, [$, w]);
  const [Y, J] = ze(!1),
    Q = () => {
      J(!Y);
    },
    re = de => {
      P(!0), ne(!1), g(de);
    },
    te = de => {
      P(!1), m(de);
    };
  if ($) return null;
  const se = c.createElement(
    O,
    Object.assign({}, x && { tabIndex: 0 }, { ref: _, className: R(gt.alertTitle, T && gt.modifiers.truncate) }),
    y,
  );
  return c.createElement(
    'div',
    Object.assign(
      {
        ref: U,
        className: R(
          gt.alert,
          n && gt.modifiers.inline,
          r && gt.modifiers.plain,
          A && gt.modifiers.expandable,
          Y && gt.modifiers.expanded,
          gt.modifiers[t],
          p,
        ),
      },
      k,
      a && { 'aria-live': 'polite', 'aria-atomic': 'false' },
      { onMouseEnter: re, onMouseLeave: te, id: S },
      E,
    ),
    A &&
      c.createElement(
        di.Provider,
        { value: { title: l, variantLabel: i } },
        c.createElement(
          'div',
          { className: R(gt.alertToggle) },
          c.createElement(Rd, { isExpanded: Y, onToggleExpand: Q, 'aria-label': L }),
        ),
      ),
    c.createElement(tv, { variant: t, customIcon: B }),
    x ? c.createElement(kr, { content: y, position: N }, se) : se,
    o &&
      c.createElement(di.Provider, { value: { title: l, variantLabel: i } }, c.createElement('div', { className: R(gt.alertAction) }, o)),
    d && (!A || (A && Y)) && c.createElement('div', { className: R(gt.alertDescription) }, d),
    s && c.createElement('div', { className: R(gt.alertActionGroup) }, s),
  );
};
cs.displayName = 'Alert';
const Nd = e => {
  var { className: t, onClose: n = () => {}, 'aria-label': r = '', variantLabel: a } = e,
    i = ie(e, ['className', 'onClose', 'aria-label', 'variantLabel']);
  return c.createElement(di.Consumer, null, ({ title: o, variantLabel: s }) =>
    c.createElement(
      Ke,
      Object.assign({ variant: ft.plain, onClick: n, 'aria-label': r === '' ? `Close ${a || s} alert: ${o}` : r, className: t }, i),
      c.createElement(Sr, null),
    ),
  );
};
Nd.displayName = 'AlertActionCloseButton';
const Ji = {
    alertGroup: 'pf-v5-c-alert-group',
    alertGroupOverflowButton: 'pf-v5-c-alert-group__overflow-button',
    modifiers: { toast: 'pf-m-toast' },
  },
  Td = e => {
    var { className: t, children: n, isToast: r, isLiveRegion: a, onOverflowClick: i, overflowMessage: o } = e,
      s = ie(e, ['className', 'children', 'isToast', 'isLiveRegion', 'onOverflowClick', 'overflowMessage']);
    return c.createElement(
      'ul',
      Object.assign(
        {
          role: 'list',
          'aria-live': a ? 'polite' : null,
          'aria-atomic': a ? !1 : null,
          className: R(Ji.alertGroup, t, r ? Ji.modifiers.toast : ''),
        },
        s,
      ),
      c.Children.toArray(n).map((l, u) => {
        var d;
        return c.createElement('li', { key: ((d = l.props) === null || d === void 0 ? void 0 : d.id) || u }, l);
      }),
      o && c.createElement('li', null, c.createElement('button', { onClick: i, className: R(Ji.alertGroupOverflowButton) }, o)),
    );
  };
Td.displayName = 'AlertGroupInline';
class Pd extends c.Component {
  constructor() {
    super(...arguments), (this.state = { container: void 0 });
  }
  componentDidMount() {
    const t = document.createElement('div'),
      n = this.getTargetElement();
    this.setState({ container: t }), n.appendChild(t);
  }
  componentWillUnmount() {
    const t = this.getTargetElement();
    this.state.container && t.removeChild(this.state.container);
  }
  getTargetElement() {
    const t = this.props.appendTo;
    return typeof t == 'function' ? t() : t || document.body;
  }
  render() {
    const t = this.props,
      { className: n, children: r, isToast: a, isLiveRegion: i, onOverflowClick: o, overflowMessage: s, 'aria-label': l, appendTo: u } = t,
      d = ie(t, ['className', 'children', 'isToast', 'isLiveRegion', 'onOverflowClick', 'overflowMessage', 'aria-label', 'appendTo']),
      p = c.createElement(
        Td,
        Object.assign({ onOverflowClick: o, className: n, isToast: a, isLiveRegion: i, overflowMessage: s, 'aria-label': l }, d),
        r,
      );
    if (!this.props.isToast) return p;
    const f = this.state.container;
    return !bt || !f ? null : _i.createPortal(p, f);
  }
}
Pd.displayName = 'AlertGroup';
const yn = {
    avatar: 'pf-v5-c-avatar',
    modifiers: { light: 'pf-m-light', dark: 'pf-m-dark', sm: 'pf-m-sm', md: 'pf-m-md', lg: 'pf-m-lg', xl: 'pf-m-xl' },
  },
  Ad = e => {
    var { className: t = '', src: n = '', alt: r, border: a, size: i } = e,
      o = ie(e, ['className', 'src', 'alt', 'border', 'size']);
    return c.createElement(
      'img',
      Object.assign(
        {
          src: n,
          alt: r,
          className: R(yn.avatar, yn.modifiers[i], a === 'light' && yn.modifiers.light, a === 'dark' && yn.modifiers.dark, t),
        },
        o,
      ),
    );
  };
Ad.displayName = 'Avatar';
const Yi = { brand: 'pf-v5-c-brand', modifiers: { picture: 'pf-m-picture' } },
  rv = { name: '--pf-v5-c-brand--Height', value: 'auto', var: 'var(--pf-v5-c-brand--Height)' },
  av = { name: '--pf-v5-c-brand--Width', value: 'auto', var: 'var(--pf-v5-c-brand--Width)' },
  Fd = e => {
    var { className: t = '', src: n = '', alt: r, children: a, widths: i, heights: o, style: s } = e,
      l = ie(e, ['className', 'src', 'alt', 'children', 'widths', 'heights', 'style']);
    let u;
    return (
      i !== void 0 && (u = Object.assign({}, si(i, av.name))),
      o !== void 0 && (u = Object.assign(Object.assign({}, u), si(o, rv.name))),
      a !== void 0
        ? c.createElement(
            'picture',
            Object.assign({ className: R(Yi.brand, Yi.modifiers.picture, t), style: Object.assign(Object.assign({}, s), u) }, l),
            a,
            c.createElement('img', { src: n, alt: r }),
          )
        : c.createElement(
            'img',
            Object.assign({}, l, { className: R(Yi.brand, t), style: Object.assign(Object.assign({}, s), u), src: n, alt: r }),
          )
    );
  };
Fd.displayName = 'Brand';
const Qi = {
    breadcrumb: 'pf-v5-c-breadcrumb',
    breadcrumbDropdown: 'pf-v5-c-breadcrumb__dropdown',
    breadcrumbHeading: 'pf-v5-c-breadcrumb__heading',
    breadcrumbItem: 'pf-v5-c-breadcrumb__item',
    breadcrumbItemDivider: 'pf-v5-c-breadcrumb__item-divider',
    breadcrumbLink: 'pf-v5-c-breadcrumb__link',
    breadcrumbList: 'pf-v5-c-breadcrumb__list',
    dirRtl: 'pf-v5-m-dir-rtl',
    dropdownToggle: 'pf-v5-c-dropdown__toggle',
    modifiers: { current: 'pf-m-current' },
  },
  lt = {
    formControl: 'pf-v5-c-form-control',
    formControlIcon: 'pf-v5-c-form-control__icon',
    formControlToggleIcon: 'pf-v5-c-form-control__toggle-icon',
    formControlUtilities: 'pf-v5-c-form-control__utilities',
    modifiers: {
      readonly: 'pf-m-readonly',
      success: 'pf-m-success',
      warning: 'pf-m-warning',
      error: 'pf-m-error',
      plain: 'pf-m-plain',
      expanded: 'pf-m-expanded',
      disabled: 'pf-m-disabled',
      icon: 'pf-m-icon',
      placeholder: 'pf-m-placeholder',
      resizeVertical: 'pf-m-resize-vertical',
      resizeHorizontal: 'pf-m-resize-horizontal',
      resizeBoth: 'pf-m-resize-both',
      status: 'pf-m-status',
    },
    themeDark: 'pf-v5-theme-dark',
  },
  iv = { success: xa, error: Lr, warning: wa },
  Fo = e => {
    var { status: t, customIcon: n, className: r } = e,
      a = ie(e, ['status', 'customIcon', 'className']);
    const i = t && iv[t];
    return c.createElement(
      'span',
      Object.assign({ className: R(lt.formControlIcon, t && lt.modifiers.status, r) }, a),
      n || c.createElement(i, null),
    );
  };
var Mo;
(function (e) {
  (e.text = 'text'),
    (e.date = 'date'),
    (e.datetimeLocal = 'datetime-local'),
    (e.email = 'email'),
    (e.month = 'month'),
    (e.number = 'number'),
    (e.password = 'password'),
    (e.search = 'search'),
    (e.tel = 'tel'),
    (e.time = 'time'),
    (e.url = 'url');
})(Mo || (Mo = {}));
var Kl;
(function (e) {
  (e.default = 'default'), (e.plain = 'plain');
})(Kl || (Kl = {}));
class Ca extends c.Component {
  constructor(t) {
    super(t),
      (this.inputRef = c.createRef()),
      (this.observer = () => {}),
      (this.handleChange = n => {
        this.props.onChange && this.props.onChange(n, n.currentTarget.value);
      }),
      (this.handleResize = () => {
        const n = this.props.innerRef || this.inputRef;
        n && n.current && Eh(n.current, String(this.props.value));
      }),
      (this.restoreText = () => {
        const n = this.props.innerRef || this.inputRef;
        (n.current.value = String(this.props.value)), (n.current.scrollLeft = n.current.scrollWidth);
      }),
      (this.onFocus = n => {
        const { isLeftTruncated: r, isStartTruncated: a, onFocus: i } = this.props;
        (r || a) && this.restoreText(), i && i(n);
      }),
      (this.onBlur = n => {
        const { isLeftTruncated: r, isStartTruncated: a, onBlur: i } = this.props;
        (r || a) && this.handleResize(), i && i(n);
      }),
      (this.sanitizeInputValue = n => (typeof n == 'string' ? n.replace(/\n/g, ' ') : n)),
      !t.id &&
        !t['aria-label'] &&
        !t['aria-labelledby'] &&
        console.error('Text input:', 'Text input requires either an id or aria-label to be specified'),
      (this.state = { ouiaStateId: Jt(Ca.displayName) });
  }
  componentDidMount() {
    if (this.props.isLeftTruncated || this.props.isStartTruncated) {
      const t = this.props.innerRef || this.inputRef;
      (this.observer = is(t.current, this.handleResize, !0)), this.handleResize();
    }
  }
  componentWillUnmount() {
    (this.props.isLeftTruncated || this.props.isStartTruncated) && this.observer();
  }
  render() {
    const t = this.props,
      {
        innerRef: n,
        className: r,
        type: a,
        value: i,
        placeholder: o,
        validated: s,
        onChange: l,
        onFocus: u,
        onBlur: d,
        isLeftTruncated: p,
        isStartTruncated: f,
        isExpanded: h,
        expandedProps: b,
        readOnly: v,
        readOnlyVariant: w,
        isRequired: T,
        isDisabled: N,
        customIcon: B,
        ouiaId: A,
        ouiaSafe: L,
      } = t,
      g = ie(t, [
        'innerRef',
        'className',
        'type',
        'value',
        'placeholder',
        'validated',
        'onChange',
        'onFocus',
        'onBlur',
        'isLeftTruncated',
        'isStartTruncated',
        'isExpanded',
        'expandedProps',
        'readOnly',
        'readOnlyVariant',
        'isRequired',
        'isDisabled',
        'customIcon',
        'ouiaId',
        'ouiaSafe',
      ]),
      m = ['success', 'error', 'warning'].includes(s),
      S = b ? { 'aria-expanded': b?.isExpanded, 'aria-controls': b?.ariaControls, role: 'combobox' } : {};
    return c.createElement(
      'span',
      {
        className: R(
          lt.formControl,
          w && lt.modifiers.readonly,
          w === 'plain' && lt.modifiers.plain,
          N && lt.modifiers.disabled,
          (h || b?.isExpanded) && lt.modifiers.expanded,
          B && lt.modifiers.icon,
          m && lt.modifiers[s],
          r,
        ),
      },
      c.createElement(
        'input',
        Object.assign(
          {},
          g,
          {
            onFocus: this.onFocus,
            onBlur: this.onBlur,
            onChange: this.handleChange,
            type: a,
            value: this.sanitizeInputValue(i),
            'aria-invalid': g['aria-invalid'] ? g['aria-invalid'] : s === gr.error,
          },
          S,
          { required: T, disabled: N, readOnly: !!w || v, ref: n || this.inputRef, placeholder: o },
          At(Ir.displayName, A !== void 0 ? A : this.state.ouiaStateId, L),
        ),
      ),
      (B || m) &&
        c.createElement(
          'span',
          { className: R(lt.formControlUtilities) },
          B && c.createElement(Fo, { customIcon: B }),
          m && c.createElement(Fo, { status: s }),
        ),
    );
  }
}
Ca.displayName = 'TextInputBase';
Ca.defaultProps = {
  'aria-label': null,
  isRequired: !1,
  validated: 'default',
  isDisabled: !1,
  isExpanded: !1,
  type: Mo.text,
  isLeftTruncated: !1,
  isStartTruncated: !1,
  onChange: () => {},
  ouiaSafe: !0,
};
const Ir = c.forwardRef((e, t) => c.createElement(Ca, Object.assign({}, e, { innerRef: t })));
Ir.displayName = 'TextInput';
const ye = {
    breadcrumb: 'pf-v5-c-breadcrumb',
    check: 'pf-v5-c-check',
    dirRtl: 'pf-v5-m-dir-rtl',
    divider: 'pf-v5-c-divider',
    menu: 'pf-v5-c-menu',
    menuBreadcrumb: 'pf-v5-c-menu__breadcrumb',
    menuContent: 'pf-v5-c-menu__content',
    menuFooter: 'pf-v5-c-menu__footer',
    menuGroup: 'pf-v5-c-menu__group',
    menuGroupTitle: 'pf-v5-c-menu__group-title',
    menuHeader: 'pf-v5-c-menu__header',
    menuItem: 'pf-v5-c-menu__item',
    menuItemAction: 'pf-v5-c-menu__item-action',
    menuItemActionIcon: 'pf-v5-c-menu__item-action-icon',
    menuItemCheck: 'pf-v5-c-menu__item-check',
    menuItemDescription: 'pf-v5-c-menu__item-description',
    menuItemExternalIcon: 'pf-v5-c-menu__item-external-icon',
    menuItemIcon: 'pf-v5-c-menu__item-icon',
    menuItemMain: 'pf-v5-c-menu__item-main',
    menuItemSelectIcon: 'pf-v5-c-menu__item-select-icon',
    menuItemText: 'pf-v5-c-menu__item-text',
    menuItemToggleIcon: 'pf-v5-c-menu__item-toggle-icon',
    menuList: 'pf-v5-c-menu__list',
    menuListItem: 'pf-v5-c-menu__list-item',
    menuSearch: 'pf-v5-c-menu__search',
    modifiers: {
      hidden: 'pf-m-hidden',
      hiddenOnSm: 'pf-m-hidden-on-sm',
      visibleOnSm: 'pf-m-visible-on-sm',
      hiddenOnMd: 'pf-m-hidden-on-md',
      visibleOnMd: 'pf-m-visible-on-md',
      hiddenOnLg: 'pf-m-hidden-on-lg',
      visibleOnLg: 'pf-m-visible-on-lg',
      hiddenOnXl: 'pf-m-hidden-on-xl',
      visibleOnXl: 'pf-m-visible-on-xl',
      hiddenOn_2xl: 'pf-m-hidden-on-2xl',
      visibleOn_2xl: 'pf-m-visible-on-2xl',
      flyout: 'pf-m-flyout',
      top: 'pf-m-top',
      left: 'pf-m-left',
      drilldown: 'pf-m-drilldown',
      drilledIn: 'pf-m-drilled-in',
      currentPath: 'pf-m-current-path',
      static: 'pf-m-static',
      plain: 'pf-m-plain',
      scrollable: 'pf-m-scrollable',
      nav: 'pf-m-nav',
      focus: 'pf-m-focus',
      disabled: 'pf-m-disabled',
      ariaDisabled: 'pf-m-aria-disabled',
      load: 'pf-m-load',
      loading: 'pf-m-loading',
      danger: 'pf-m-danger',
      selected: 'pf-m-selected',
      favorite: 'pf-m-favorite',
      favorited: 'pf-m-favorited',
    },
    themeDark: 'pf-v5-theme-dark',
  },
  Xl = {
    badge: 'pf-v5-c-badge',
    check: 'pf-v5-c-check',
    divider: 'pf-v5-c-divider',
    dropdown: 'pf-v5-c-dropdown',
    dropdownGroup: 'pf-v5-c-dropdown__group',
    dropdownGroupTitle: 'pf-v5-c-dropdown__group-title',
    dropdownMenu: 'pf-v5-c-dropdown__menu',
    dropdownMenuItem: 'pf-v5-c-dropdown__menu-item',
    dropdownMenuItemDescription: 'pf-v5-c-dropdown__menu-item-description',
    dropdownMenuItemIcon: 'pf-v5-c-dropdown__menu-item-icon',
    dropdownMenuItemMain: 'pf-v5-c-dropdown__menu-item-main',
    dropdownToggle: 'pf-v5-c-dropdown__toggle',
    dropdownToggleButton: 'pf-v5-c-dropdown__toggle-button',
    dropdownToggleCheck: 'pf-v5-c-dropdown__toggle-check',
    dropdownToggleIcon: 'pf-v5-c-dropdown__toggle-icon',
    dropdownToggleImage: 'pf-v5-c-dropdown__toggle-image',
    dropdownToggleProgress: 'pf-v5-c-dropdown__toggle-progress',
    dropdownToggleText: 'pf-v5-c-dropdown__toggle-text',
    menu: 'pf-v5-c-menu',
    modifiers: {
      fullHeight: 'pf-m-full-height',
      expanded: 'pf-m-expanded',
      action: 'pf-m-action',
      disabled: 'pf-m-disabled',
      plain: 'pf-m-plain',
      text: 'pf-m-text',
      splitButton: 'pf-m-split-button',
      primary: 'pf-m-primary',
      inProgress: 'pf-m-in-progress',
      active: 'pf-m-active',
      secondary: 'pf-m-secondary',
      top: 'pf-m-top',
      static: 'pf-m-static',
      alignRight: 'pf-m-align-right',
      alignLeft: 'pf-m-align-left',
      alignRightOnSm: 'pf-m-align-right-on-sm',
      alignLeftOnSm: 'pf-m-align-left-on-sm',
      alignRightOnMd: 'pf-m-align-right-on-md',
      alignLeftOnMd: 'pf-m-align-left-on-md',
      alignRightOnLg: 'pf-m-align-right-on-lg',
      alignLeftOnLg: 'pf-m-align-left-on-lg',
      alignRightOnXl: 'pf-m-align-right-on-xl',
      alignLeftOnXl: 'pf-m-align-left-on-xl',
      alignRightOn_2xl: 'pf-m-align-right-on-2xl',
      alignLeftOn_2xl: 'pf-m-align-left-on-2xl',
      ariaDisabled: 'pf-m-aria-disabled',
      icon: 'pf-m-icon',
      description: 'pf-m-description',
    },
    spinner: 'pf-v5-c-spinner',
    themeDark: 'pf-v5-theme-dark',
  },
  Un = c.createContext({
    menuId: null,
    parentMenu: null,
    onActionClick: () => null,
    onSelect: () => null,
    activeItemId: null,
    selected: null,
    drilledInMenus: [],
    drilldownItemPath: [],
    onDrillIn: null,
    onDrillOut: null,
    onGetMenuHeight: () => null,
    flyoutRef: null,
    setFlyoutRef: () => null,
    disableHover: !1,
    role: 'menu',
  }),
  Md = c.createContext({ itemId: null, isDisabled: !1 });
class Ri extends c.Component {
  constructor(t) {
    super(t),
      (this.menuRef = c.createRef()),
      (this.activeMenu = null),
      (this.state = {
        ouiaStateId: Jt(da.displayName),
        transitionMoveTarget: null,
        flyoutRef: null,
        disableHover: !1,
        currentDrilldownMenuId: this.props.id,
      }),
      (this.handleDrilldownTransition = n => {
        const r = this.menuRef.current;
        if (
          !(
            !r ||
            (r !== n.target.closest(`.${ye.menu}`) &&
              !Array.from(r.getElementsByClassName(ye.menu)).includes(n.target.closest(`.${ye.menu}`)))
          )
        )
          if (this.state.transitionMoveTarget) this.state.transitionMoveTarget.focus(), this.setState({ transitionMoveTarget: null });
          else {
            const a = r.querySelector('#' + this.props.activeMenu) || r || null,
              i = a.getElementsByTagName('UL');
            if (i.length === 0) return;
            const o = Array.from(i[0].children);
            if (!this.state.currentDrilldownMenuId || a.id !== this.state.currentDrilldownMenuId)
              this.setState({ currentDrilldownMenuId: a.id });
            else return;
            const s = o.filter(l => !(l.classList.contains('pf-m-disabled') || l.classList.contains(ye.divider)))[0].firstChild;
            s.focus(), (s.tabIndex = 0);
          }
      }),
      (this.handleExtraKeys = n => {
        const r = this.props.containsDrilldown,
          a = document.activeElement;
        if (
          (n.target.closest(`.${ye.menu}`) !== this.activeMenu &&
            !n.target.classList.contains(Qi.breadcrumbLink) &&
            ((this.activeMenu = n.target.closest(`.${ye.menu}`)), this.setState({ disableHover: !0 })),
          n.target.tagName === 'INPUT')
        )
          return;
        const i = this.activeMenu,
          o = n.key,
          s = a.classList.contains(Qi.breadcrumbLink) || a.classList.contains(Xl.dropdownToggle);
        if (o === ' ' || o === 'Enter') {
          if ((n.preventDefault(), r && !s)) {
            if (a.closest('li').classList.contains('pf-m-current-path') && i.parentElement.tagName === 'LI')
              (a.tabIndex = -1),
                (i.parentElement.firstChild.tabIndex = 0),
                this.setState({ transitionMoveTarget: i.parentElement.firstChild });
            else if (a.nextElementSibling && a.nextElementSibling.classList.contains(ye.menu)) {
              const u = Array.from(a.nextElementSibling.getElementsByTagName('UL')[0].children).filter(
                d => !(d.classList.contains('pf-m-disabled') || d.classList.contains(ye.divider)),
              );
              (a.tabIndex = -1), (u[0].firstChild.tabIndex = 0), this.setState({ transitionMoveTarget: u[0].firstChild });
            }
          }
          document.activeElement.click();
        }
      }),
      (this.createNavigableElements = () =>
        this.props.containsDrilldown
          ? this.activeMenu
            ? Array.from(this.activeMenu.getElementsByTagName('UL')[0].children).filter(
                r => !(r.classList.contains('pf-m-disabled') || r.classList.contains(ye.divider)),
              )
            : []
          : this.menuRef.current
            ? Array.from(this.menuRef.current.getElementsByTagName('LI')).filter(
                r => !(r.classList.contains('pf-m-disabled') || r.classList.contains(ye.divider)),
              )
            : []),
      t.innerRef && (this.menuRef = t.innerRef);
  }
  allowTabFirstItem() {
    const t = this.menuRef.current;
    if (t) {
      const n = t.querySelector('ul button:not(:disabled), ul a:not(:disabled)');
      n && (n.tabIndex = 0);
    }
  }
  componentDidMount() {
    this.context && this.setState({ disableHover: this.context.disableHover }),
      bt && window.addEventListener('transitionend', this.props.isRootMenu ? this.handleDrilldownTransition : null),
      this.allowTabFirstItem();
  }
  componentWillUnmount() {
    bt && window.removeEventListener('transitionend', this.handleDrilldownTransition);
  }
  componentDidUpdate(t) {
    t.children !== this.props.children && this.allowTabFirstItem();
  }
  render() {
    const t = this.props,
      {
        id: n,
        children: r,
        className: a,
        onSelect: i,
        selected: o = null,
        onActionClick: s,
        ouiaId: l,
        ouiaSafe: u,
        containsFlyout: d,
        isNavFlyout: p,
        containsDrilldown: f,
        isMenuDrilledIn: h,
        isPlain: b,
        isScrollable: v,
        drilldownItemPath: w,
        drilledInMenus: T,
        onDrillIn: N,
        onDrillOut: B,
        onGetMenuHeight: A,
        parentMenu: L = null,
        activeItemId: g = null,
        innerRef: m,
        isRootMenu: S,
        activeMenu: E,
        role: k,
      } = t,
      y = ie(t, [
        'id',
        'children',
        'className',
        'onSelect',
        'selected',
        'onActionClick',
        'ouiaId',
        'ouiaSafe',
        'containsFlyout',
        'isNavFlyout',
        'containsDrilldown',
        'isMenuDrilledIn',
        'isPlain',
        'isScrollable',
        'drilldownItemPath',
        'drilledInMenus',
        'onDrillIn',
        'onDrillOut',
        'onGetMenuHeight',
        'parentMenu',
        'activeItemId',
        'innerRef',
        'isRootMenu',
        'activeMenu',
        'role',
      ]),
      _ = h || (T && T.includes(n)) || !1;
    return c.createElement(
      Un.Provider,
      {
        value: {
          menuId: n,
          parentMenu: L || n,
          onSelect: i,
          onActionClick: s,
          activeItemId: g,
          selected: o,
          drilledInMenus: T,
          drilldownItemPath: w,
          onDrillIn: N,
          onDrillOut: B,
          onGetMenuHeight: A,
          flyoutRef: this.state.flyoutRef,
          setFlyoutRef: O => this.setState({ flyoutRef: O }),
          disableHover: this.state.disableHover,
          role: k,
        },
      },
      S &&
        c.createElement(as, {
          containerRef: this.menuRef || null,
          additionalKeyHandler: this.handleExtraKeys,
          createNavigableElements: this.createNavigableElements,
          isActiveElement: O =>
            document.activeElement.closest('li') === O ||
            document.activeElement.parentElement === O ||
            document.activeElement.closest(`.${ye.menuSearch}`) === O ||
            (document.activeElement.closest('ol') && document.activeElement.closest('ol').firstChild === O),
          getFocusableElement: O => {
            var U, x;
            return (
              (O?.tagName === 'DIV' && O.querySelector('input')) ||
              (((U = O.firstChild) === null || U === void 0 ? void 0 : U.tagName) === 'LABEL' && O.querySelector('input')) ||
              (((x = O.firstChild) === null || x === void 0 ? void 0 : x.tagName) === 'DIV' && O.querySelector('a, button, input')) ||
              O.firstChild
            );
          },
          noHorizontalArrowHandling:
            document.activeElement &&
            (document.activeElement.classList.contains(Qi.breadcrumbLink) ||
              document.activeElement.classList.contains(Xl.dropdownToggle) ||
              document.activeElement.tagName === 'INPUT'),
          noEnterHandling: !0,
          noSpaceHandling: !0,
        }),
      c.createElement(
        'div',
        Object.assign(
          {
            id: n,
            className: R(
              ye.menu,
              b && ye.modifiers.plain,
              v && ye.modifiers.scrollable,
              d && ye.modifiers.flyout,
              p && ye.modifiers.nav,
              f && ye.modifiers.drilldown,
              _ && ye.modifiers.drilledIn,
              a,
            ),
            ref: this.menuRef,
          },
          At(da.displayName, l !== void 0 ? l : this.state.ouiaStateId, u),
          y,
        ),
        r,
      ),
    );
  }
}
Ri.displayName = 'Menu';
Ri.contextType = Un;
Ri.defaultProps = { ouiaSafe: !0, isRootMenu: !0, isPlain: !1, isScrollable: !1, role: 'menu' };
const da = c.forwardRef((e, t) => c.createElement(Ri, Object.assign({}, e, { innerRef: t })));
da.displayName = 'Menu';
const ov = { name: '--pf-v5-c-menu__content--Height', value: 'auto', var: 'var(--pf-v5-c-menu__content--Height)' },
  sv = { name: '--pf-v5-c-menu__content--MaxHeight', value: '18.75rem', var: 'var(--pf-v5-c-menu__content--MaxHeight)' },
  ds = c.forwardRef((e, t) => {
    const { getHeight: n, children: r, menuHeight: a, maxMenuHeight: i } = e,
      o = ie(e, ['getHeight', 'children', 'menuHeight', 'maxMenuHeight']),
      s = c.createRef(),
      l = (u, d, p) => {
        if (u) {
          let f = u.clientHeight,
            h = null,
            b = u.closest(`.${ye.menuList}`);
          for (; b !== null && b.nodeType === 1; ) b.classList.contains(ye.menuList) && (h = b), (b = b.parentElement);
          if (h) {
            const v = getComputedStyle(h),
              w =
                parseFloat(v.getPropertyValue('padding-top').replace(/px/g, '')) +
                parseFloat(v.getPropertyValue('padding-bottom').replace(/px/g, '')) +
                parseFloat(getComputedStyle(h.parentElement).getPropertyValue('border-bottom-width').replace(/px/g, ''));
            f = f + w;
          }
          p && p(d, f), n && n(f.toString());
        }
        return t || s;
      };
    return c.createElement(Un.Consumer, null, ({ menuId: u, onGetMenuHeight: d }) =>
      c.createElement(
        'div',
        Object.assign({}, o, {
          className: R(ye.menuContent, e.className),
          ref: p => l(p, u, d),
          style: Object.assign(Object.assign({}, a && { [ov.name]: a }), i && { [sv.name]: i }),
        }),
        r,
      ),
    );
  });
ds.displayName = 'MenuContent';
const Dd = e => {
  var { children: t, className: n = '' } = e,
    r = ie(e, ['children', 'className']);
  return c.createElement('div', Object.assign({}, r, { className: R(ye.menuFooter, n) }), t);
};
Dd.displayName = 'MenuFooter';
const lv = { name: '--pf-v5-c-menu--m-flyout__menu--top-offset', value: '0px', var: 'var(--pf-v5-c-menu--m-flyout__menu--top-offset)' },
  cv = {
    name: '--pf-v5-c-menu--m-flyout__menu--m-left--right-offset',
    value: '0px',
    var: 'var(--pf-v5-c-menu--m-flyout__menu--m-left--right-offset)',
  },
  dv = { name: '--pf-v5-c-menu--m-flyout__menu--left-offset', value: '0px', var: 'var(--pf-v5-c-menu--m-flyout__menu--left-offset)' },
  uv = {
    name: 'ExternalLinkAltIcon',
    height: 512,
    width: 512,
    svgPath:
      'M432,320H400a16,16,0,0,0-16,16V448H64V128H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V336A16,16,0,0,0,432,320ZM488,0h-128c-21.37,0-32.05,25.91-17,41l35.73,35.73L135,320.37a24,24,0,0,0,0,34L157.67,377a24,24,0,0,0,34,0L435.28,133.32,471,169c15,15,41,4.5,41-17V24A24,24,0,0,0,488,0Z',
    yOffset: 0,
    xOffset: 0,
  },
  fv = ke(uv),
  pv = {
    name: 'AngleLeftIcon',
    height: 512,
    width: 256,
    svgPath:
      'M31.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L127.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34z',
    yOffset: 0,
    xOffset: 0,
  },
  jd = ke(pv),
  mv = {
    name: 'CheckIcon',
    height: 512,
    width: 512,
    svgPath:
      'M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z',
    yOffset: 0,
    xOffset: 0,
  },
  hv = ke(mv),
  mn = {
    check: 'pf-v5-c-check',
    checkBody: 'pf-v5-c-check__body',
    checkDescription: 'pf-v5-c-check__description',
    checkInput: 'pf-v5-c-check__input',
    checkLabel: 'pf-v5-c-check__label',
    checkLabelRequired: 'pf-v5-c-check__label-required',
    modifiers: { standalone: 'pf-m-standalone', disabled: 'pf-m-disabled' },
  },
  Bd = () => {};
class En extends c.Component {
  constructor(t) {
    super(t),
      (this.handleChange = n => {
        this.props.onChange(n, n.currentTarget.checked);
      }),
      (this.state = { ouiaStateId: Jt(En.displayName) });
  }
  render() {
    const t = this.props,
      {
        'aria-label': n,
        className: r,
        inputClassName: a,
        onChange: i,
        isLabelWrapped: o,
        isLabelBeforeButton: s,
        isValid: l,
        isDisabled: u,
        isRequired: d,
        isChecked: p,
        label: f,
        checked: h,
        defaultChecked: b,
        description: v,
        body: w,
        ouiaId: T,
        ouiaSafe: N,
        component: B,
      } = t,
      A = ie(t, [
        'aria-label',
        'className',
        'inputClassName',
        'onChange',
        'isLabelWrapped',
        'isLabelBeforeButton',
        'isValid',
        'isDisabled',
        'isRequired',
        'isChecked',
        'label',
        'checked',
        'defaultChecked',
        'description',
        'body',
        'ouiaId',
        'ouiaSafe',
        'component',
      ]);
    A.id || console.error('Checkbox:', 'id is required to make input accessible');
    const L = {};
    ([!0, !1].includes(h) || p === !0) && (L.checked = h || p), i !== Bd && (L.checked = p), [!1, !0].includes(b) && (L.defaultChecked = b);
    const g = c.createElement(
        'input',
        Object.assign(
          {},
          A,
          {
            className: R(mn.checkInput, a),
            type: 'checkbox',
            onChange: this.handleChange,
            'aria-invalid': !l,
            'aria-label': n,
            disabled: u,
            required: d,
            ref: y => y && (y.indeterminate = p === null),
          },
          L,
          At(En.displayName, T !== void 0 ? T : this.state.ouiaStateId, N),
        ),
      ),
      m = (o && !B) || B === 'label',
      S = m ? 'span' : 'label',
      E = f
        ? c.createElement(
            S,
            { className: R(mn.checkLabel, u && mn.modifiers.disabled), htmlFor: m ? void 0 : A.id },
            f,
            d && c.createElement('span', { className: R(mn.checkLabelRequired), 'aria-hidden': 'true' }, ud),
          )
        : null,
      k = B ?? (m ? 'label' : 'div');
    return (
      (L.checked = L.checked === null ? !1 : L.checked),
      c.createElement(
        k,
        { className: R(mn.check, !f && mn.modifiers.standalone, r), htmlFor: m ? A.id : void 0 },
        s ? c.createElement(c.Fragment, null, E, g) : c.createElement(c.Fragment, null, g, E),
        v && c.createElement('span', { className: R(mn.checkDescription) }, v),
        w && c.createElement('span', { className: R(mn.checkBody) }, w),
      )
    );
  }
}
En.displayName = 'Checkbox';
En.defaultProps = {
  className: '',
  isLabelWrapped: !1,
  isValid: !0,
  isDisabled: !1,
  isRequired: !1,
  isChecked: !1,
  onChange: Bd,
  ouiaSafe: !0,
};
const gv = {
    name: 'StarIcon',
    height: 512,
    width: 576,
    svgPath:
      'M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z',
    yOffset: 0,
    xOffset: 0,
  },
  vv = ke(gv),
  bv = e => {
    var { className: t = '', icon: n, onClick: r, 'aria-label': a, isFavorited: i = null, isDisabled: o, actionId: s, innerRef: l } = e,
      u = ie(e, ['className', 'icon', 'onClick', 'aria-label', 'isFavorited', 'isDisabled', 'actionId', 'innerRef']);
    return c.createElement(Un.Consumer, null, ({ onActionClick: d }) =>
      c.createElement(Md.Consumer, null, ({ itemId: p, isDisabled: f }) => {
        const h = b => {
          r && r(b), d && d(b, p, s);
        };
        return c.createElement(
          'button',
          Object.assign(
            {
              className: R(ye.menuItemAction, i !== null && ye.modifiers.favorite, i && ye.modifiers.favorited, t),
              'aria-label': a,
              onClick: h,
            },
            (o === !0 || f === !0) && { disabled: !0 },
            { ref: l, tabIndex: -1 },
            u,
          ),
          c.createElement(
            'span',
            { className: R(ye.menuItemActionIcon) },
            n === 'favorites' || i !== null ? c.createElement(vv, { 'aria-hidden': !0 }) : n,
          ),
        );
      }),
    );
  },
  Ud = c.forwardRef((e, t) => c.createElement(bv, Object.assign({}, e, { innerRef: t })));
Ud.displayName = 'MenuItemAction';
const Jl = c.createContext({ direction: 'right' }),
  yv = e => {
    var {
        children: t,
        className: n,
        itemId: r = null,
        to: a,
        hasCheckbox: i = !1,
        isActive: o = null,
        isFavorited: s = null,
        isLoadButton: l = !1,
        isLoading: u = !1,
        flyoutMenu: d,
        direction: p,
        description: f = null,
        onClick: h = () => {},
        component: b = 'button',
        isDisabled: v = !1,
        isAriaDisabled: w = !1,
        isExternalLink: T = !1,
        isSelected: N = null,
        isFocused: B,
        isDanger: A = !1,
        icon: L,
        actions: g,
        onShowFlyout: m,
        drilldownMenu: S,
        isOnPath: E,
        innerRef: k,
        id: y,
        'aria-label': _,
        tooltipProps: O,
        rel: U,
        target: x,
        download: D,
      } = e,
      G = ie(e, [
        'children',
        'className',
        'itemId',
        'to',
        'hasCheckbox',
        'isActive',
        'isFavorited',
        'isLoadButton',
        'isLoading',
        'flyoutMenu',
        'direction',
        'description',
        'onClick',
        'component',
        'isDisabled',
        'isAriaDisabled',
        'isExternalLink',
        'isSelected',
        'isFocused',
        'isDanger',
        'icon',
        'actions',
        'onShowFlyout',
        'drilldownMenu',
        'isOnPath',
        'innerRef',
        'id',
        'aria-label',
        'tooltipProps',
        'rel',
        'target',
        'download',
      ]);
    const {
      menuId: z,
      parentMenu: K,
      onSelect: ne,
      onActionClick: C,
      activeItemId: P,
      selected: H,
      drilldownItemPath: q,
      onDrillIn: $,
      onDrillOut: Y,
      flyoutRef: J,
      setFlyoutRef: Q,
      disableHover: re,
      role: te,
    } = c.useContext(Un);
    let se = a ? 'a' : b;
    i && !a && (se = 'label');
    const [de, Le] = c.useState(null),
      je = c.useContext(Jl),
      [Me, Te] = c.useState(je.direction),
      Xe = c.useRef(),
      I = Xe === J,
      F = d !== void 0,
      V = ge => {
        !I && ge ? Q(Xe) : I && !ge && Q(null), m && ge && m();
      };
    li(() => {
      if (F && Xe.current && bt) {
        const ge = Xe.current.lastElementChild;
        if (ge && ge.classList.contains(ye.menu)) {
          const Ie = Xe.current.getClientRects()[0],
            Ue = ge.getClientRects()[0];
          if (Ie && Ue) {
            const dt = Ie.x - Ue.width,
              kt = window.innerWidth - Ie.x - Ie.width - Ue.width;
            let Lt = Me;
            kt < 0 && Lt !== 'left' ? (Te('left'), (Lt = 'left')) : dt < 0 && Lt !== 'right' && (Te('right'), (Lt = 'right'));
            let Bt = 0;
            dt < 0 && kt < 0 && (Bt = Lt === 'right' ? -kt : -dt),
              Lt === 'left'
                ? (ge.classList.add(ye.modifiers.left), ge.style.setProperty(cv.name, `-${Bt}px`))
                : ge.style.setProperty(dv.name, `-${Bt}px`);
            const fn = window.innerHeight - Ie.y - Ue.height;
            (window.innerHeight - Ue.height < 0 && fn < 0) || (fn < 0 && ge.style.setProperty(lv.name, `${fn}px`));
          }
        }
      }
    }, [I, d]),
      c.useEffect(() => {
        Te(je.direction);
      }, [je]),
      c.useEffect(() => {
        if (de)
          if (I) {
            const ge = de.nextElementSibling;
            Array.from(ge.getElementsByTagName('UL')[0].children)
              .filter(Ue => !(Ue.classList.contains('pf-m-disabled') || Ue.classList.contains(ye.divider)))[0]
              .firstChild.focus();
          } else de.focus();
      }, [I, de]);
    const ee = ge => {
        const Ie = ge.key,
          Ue = ge.target,
          dt = ge.type;
        (Ie === ' ' || Ie === 'Enter' || Ie === 'ArrowRight' || dt === 'click') &&
          (ge.stopPropagation(), ge.preventDefault(), I || (V(!0), Le(Ue))),
          (Ie === 'Escape' || Ie === 'ArrowLeft') && I && (ge.stopPropagation(), V(!1));
      },
      ae = (ge, Ie) => {
        w || (Ie && Ie(ge, r), h && h(ge));
      },
      Z = (E && E) || (q && q.includes(r)) || !1;
    let ue;
    p && (p === 'down' ? (ue = ge => $ && $(ge, z, typeof S == 'function' ? S().props.id : S.props.id, r)) : (ue = ge => Y && Y(ge, K, r)));
    let le = {};
    se === 'a'
      ? (le = { href: a, 'aria-disabled': v || w ? !0 : null, disabled: null, target: T ? '_blank' : x, rel: U, download: D })
      : se === 'button' && (le = { type: 'button', 'aria-disabled': w ? !0 : null }),
      E ? (le['aria-expanded'] = !0) : F && ((le['aria-haspopup'] = 'menu'), (le['aria-expanded'] = I));
    const be = () => (o !== null ? (o ? 'page' : null) : r !== null && P !== null ? r === P : null),
      Ee = () => (N !== null ? N : H !== null && r !== null ? (Array.isArray(H) && H.includes(r)) || r === H : !1),
      et = () => {
        re || (F ? V(!0) : Q(null));
      };
    c.useEffect(() => {
      if (B && Xe.current) {
        const ge = Xe.current,
          Ie = ge.parentElement;
        if (Ie) {
          const Ue = ge.offsetTop - Ie.offsetTop < Ie.scrollTop,
            dt = ge.offsetTop - Ie.offsetTop + ge.clientHeight;
          (Ue || dt) && ge.scrollIntoView({ behavior: 'auto', block: 'nearest' });
        }
      }
    }, [B]);
    const ht = te === 'listbox',
      jt = c.createElement(
        c.Fragment,
        null,
        c.createElement(Gn, null, ge =>
          c.createElement(
            se,
            Object.assign(
              { id: y, tabIndex: -1, className: R(ye.menuItem, Ee() && !i && ye.modifiers.selected, n), 'aria-current': be() },
              !i && { disabled: v, 'aria-label': _ },
              !i && !d && { role: ht ? 'option' : 'menuitem' },
              !i && !d && ht && { 'aria-selected': Ee() },
              { ref: k },
              !i && {
                onClick: Ie => {
                  w ? Ie.preventDefault() : (ae(Ie, ne), ue && ue(Ie), d && ee(Ie));
                },
              },
              i && { htmlFor: ge },
              le,
            ),
            c.createElement(
              'span',
              { className: R(ye.menuItemMain) },
              p === 'up' && c.createElement('span', { className: R(ye.menuItemToggleIcon) }, c.createElement(jd, { 'aria-hidden': !0 })),
              L && c.createElement('span', { className: R(ye.menuItemIcon) }, L),
              i &&
                c.createElement(
                  'span',
                  { className: R(ye.menuItemCheck) },
                  c.createElement(En, {
                    id: ge,
                    component: 'span',
                    isChecked: N || !1,
                    onChange: Ie => ae(Ie, ne),
                    isDisabled: v,
                    'aria-disabled': w,
                  }),
                ),
              c.createElement('span', { className: R(ye.menuItemText) }, t),
              T && c.createElement('span', { className: R(ye.menuItemExternalIcon) }, c.createElement(fv, { 'aria-hidden': !0 })),
              (d || p === 'down') &&
                c.createElement('span', { className: R(ye.menuItemToggleIcon) }, c.createElement(qn, { 'aria-hidden': !0 })),
              Ee() && c.createElement('span', { className: R(ye.menuItemSelectIcon) }, c.createElement(hv, { 'aria-hidden': !0 })),
            ),
            f && p !== 'up' && c.createElement('span', { className: R(ye.menuItemDescription) }, c.createElement('span', null, f)),
          ),
        ),
        I && c.createElement(Un.Provider, { value: { disableHover: re } }, c.createElement(Jl.Provider, { value: { direction: Me } }, d)),
        typeof S == 'function' ? S() : S,
        c.createElement(
          Md.Provider,
          { value: { itemId: r, isDisabled: v } },
          g,
          s !== null &&
            c.createElement(Ud, {
              icon: 'favorites',
              isFavorited: s,
              'aria-label': s ? 'starred' : 'not starred',
              onClick: ge => C(ge, r),
              tabIndex: -1,
              actionId: 'fav',
            }),
        ),
      );
    return c.createElement(
      'li',
      Object.assign(
        {
          className: R(
            ye.menuListItem,
            v && ye.modifiers.disabled,
            w && ye.modifiers.ariaDisabled,
            Z && ye.modifiers.currentPath,
            l && ye.modifiers.load,
            u && ye.modifiers.loading,
            B && ye.modifiers.focus,
            A && ye.modifiers.danger,
            n,
          ),
          onMouseOver: () => {
            w || et();
          },
        },
        d && !w && { onKeyDown: ee },
        { ref: Xe, role: i ? 'menuitem' : 'none' },
        i && { 'aria-label': _ },
        G,
      ),
      O ? c.createElement(kr, Object.assign({}, O), jt) : jt,
    );
  },
  us = c.forwardRef((e, t) => c.createElement(yv, Object.assign({}, e, { innerRef: t })));
us.displayName = 'MenuItem';
const fs = e => {
  var { children: t = null, className: n, isAriaMultiselectable: r = !1, 'aria-label': a } = e,
    i = ie(e, ['children', 'className', 'isAriaMultiselectable', 'aria-label']);
  const { role: o } = c.useContext(Un);
  return c.createElement(
    'ul',
    Object.assign({ role: o }, o === 'listbox' && { 'aria-multiselectable': r }, { className: R(ye.menuList, n), 'aria-label': a }, i),
    t,
  );
};
fs.displayName = 'MenuList';
const xv = e => {
    var {
        children: t,
        className: n,
        onSelect: r,
        isOpen: a,
        selected: i,
        toggle: o,
        shouldFocusToggleOnSelect: s = !1,
        onOpenChange: l,
        onOpenChangeKeys: u = ['Escape', 'Tab'],
        isPlain: d,
        innerRef: p,
        zIndex: f = 9999,
        role: h = 'listbox',
        popperProps: b,
        menuHeight: v,
        maxMenuHeight: w,
        isScrollable: T,
      } = e,
      N = ie(e, [
        'children',
        'className',
        'onSelect',
        'isOpen',
        'selected',
        'toggle',
        'shouldFocusToggleOnSelect',
        'onOpenChange',
        'onOpenChangeKeys',
        'isPlain',
        'innerRef',
        'zIndex',
        'role',
        'popperProps',
        'menuHeight',
        'maxMenuHeight',
        'isScrollable',
      ]);
    const B = pe.useRef(),
      A = pe.useRef(),
      L = p || B,
      g = typeof o == 'function' || (typeof o != 'function' && !o.toggleRef) ? A : o?.toggleRef;
    pe.useEffect(() => {
      const S = k => {
          var y, _, O;
          a &&
            l &&
            ((!((y = L.current) === null || y === void 0) && y.contains(k.target)) ||
              (!((_ = g.current) === null || _ === void 0) && _.contains(k.target))) &&
            u.includes(k.key) &&
            (k.preventDefault(), l(!1), (O = g.current) === null || O === void 0 || O.focus());
        },
        E = k => {
          var y, _, O;
          a &&
            !((y = g.current) === null || y === void 0) &&
            y.contains(k.target) &&
            setTimeout(() => {
              var U;
              const x =
                (U = L?.current) === null || U === void 0 ? void 0 : U.querySelector('li button:not(:disabled),li input:not(:disabled)');
              x && x.focus();
            }, 0),
            a &&
              l &&
              !(!((_ = g?.current) === null || _ === void 0) && _.contains(k.target)) &&
              a &&
              !(!((O = L.current) === null || O === void 0) && O.contains(k.target)) &&
              l(!1);
        };
      return (
        window.addEventListener('keydown', S),
        window.addEventListener('click', E),
        () => {
          window.removeEventListener('keydown', S), window.removeEventListener('click', E);
        }
      );
    }, [a, L, g, l, u]);
    const m = pe.createElement(
      da,
      Object.assign(
        {
          role: h,
          className: R(n),
          ref: L,
          onSelect: (S, E) => {
            r && r(S, E), s && g.current.focus();
          },
          isPlain: d,
          selected: i,
          isScrollable: T,
        },
        At(Vn.displayName, N.ouiaId !== void 0 ? N.ouiaId : Jt(Vn.displayName), N.ouiaSafe !== void 0 ? N.ouiaSafe : !0),
        N,
      ),
      pe.createElement(ds, { menuHeight: v, maxMenuHeight: w }, t),
    );
    return pe.createElement(
      _r,
      Object.assign(
        { trigger: typeof o == 'function' ? o(g) : o.toggleNode, triggerRef: g, popper: m, popperRef: L, isVisible: a, zIndex: f },
        b,
      ),
    );
  },
  Vn = pe.forwardRef((e, t) => pe.createElement(xv, Object.assign({ innerRef: t }, e)));
Vn.displayName = 'Select';
const Oa = e => {
  var { children: t, className: n, isAriaMultiselectable: r = !1 } = e,
    a = ie(e, ['children', 'className', 'isAriaMultiselectable']);
  return pe.createElement(fs, Object.assign({ isAriaMultiselectable: r, className: R(n) }, a), t);
};
Oa.displayName = 'SelectList';
const wv = e => {
    var { children: t, className: n, innerRef: r, value: a } = e,
      i = ie(e, ['children', 'className', 'innerRef', 'value']);
    return pe.createElement(us, Object.assign({ itemId: a, ref: r, className: R(n) }, i), t);
  },
  Ni = pe.forwardRef((e, t) => pe.createElement(wv, Object.assign({}, e, { innerRef: t })));
Ni.displayName = 'SelectOption';
const qe = {
    check: 'pf-v5-c-check',
    checkInput: 'pf-v5-c-check__input',
    menuToggle: 'pf-v5-c-menu-toggle',
    menuToggleButton: 'pf-v5-c-menu-toggle__button',
    menuToggleControls: 'pf-v5-c-menu-toggle__controls',
    menuToggleCount: 'pf-v5-c-menu-toggle__count',
    menuToggleIcon: 'pf-v5-c-menu-toggle__icon',
    menuToggleStatusIcon: 'pf-v5-c-menu-toggle__status-icon',
    menuToggleText: 'pf-v5-c-menu-toggle__text',
    menuToggleToggleIcon: 'pf-v5-c-menu-toggle__toggle-icon',
    modifiers: {
      primary: 'pf-m-primary',
      secondary: 'pf-m-secondary',
      expanded: 'pf-m-expanded',
      plain: 'pf-m-plain',
      text: 'pf-m-text',
      fullHeight: 'pf-m-full-height',
      disabled: 'pf-m-disabled',
      typeahead: 'pf-m-typeahead',
      splitButton: 'pf-m-split-button',
      action: 'pf-m-action',
      active: 'pf-m-active',
      fullWidth: 'pf-m-full-width',
      success: 'pf-m-success',
      warning: 'pf-m-warning',
      danger: 'pf-m-danger',
    },
    textInputGroup: 'pf-v5-c-text-input-group',
    themeDark: 'pf-v5-theme-dark',
  },
  Cv = {
    name: 'CaretDownIcon',
    height: 512,
    width: 320,
    svgPath: 'M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z',
    yOffset: 0,
    xOffset: 0,
  },
  Ov = ke(Cv);
var Cn;
(function (e) {
  (e.success = 'success'), (e.danger = 'danger'), (e.warning = 'warning');
})(Cn || (Cn = {}));
class Vd extends c.Component {
  constructor() {
    super(...arguments), (this.displayName = 'MenuToggleBase');
  }
  render() {
    const t = this.props,
      {
        children: n,
        className: r,
        icon: a,
        badge: i,
        isExpanded: o,
        isDisabled: s,
        isFullHeight: l,
        isFullWidth: u,
        splitButtonOptions: d,
        variant: p,
        status: f,
        statusIcon: h,
        innerRef: b,
        onClick: v,
        'aria-label': w,
      } = t,
      T = ie(t, [
        'children',
        'className',
        'icon',
        'badge',
        'isExpanded',
        'isDisabled',
        'isFullHeight',
        'isFullWidth',
        'splitButtonOptions',
        'variant',
        'status',
        'statusIcon',
        'innerRef',
        'onClick',
        'aria-label',
      ]),
      N = p === 'plain',
      B = p === 'plainText',
      A = p === 'typeahead';
    let L = h;
    if (!h)
      switch (f) {
        case Cn.success:
          L = c.createElement(xa, { 'aria-hidden': 'true' });
          break;
        case Cn.warning:
          L = c.createElement(wa, { 'aria-hidden': 'true' });
          break;
        case Cn.danger:
          L = c.createElement(Lr, { 'aria-hidden': 'true' });
          break;
      }
    const g = c.createElement(
        'span',
        { className: R(qe.menuToggleControls) },
        f !== void 0 && c.createElement('span', { className: R(qe.menuToggleStatusIcon) }, L),
        c.createElement('span', { className: R(qe.menuToggleToggleIcon) }, c.createElement(Ov, { 'aria-hidden': !0 })),
      ),
      m = c.createElement(
        c.Fragment,
        null,
        a && c.createElement('span', { className: R(qe.menuToggleIcon) }, a),
        A ? n : c.createElement('span', { className: R(qe.menuToggleText) }, n),
        c.isValidElement(i) && c.createElement('span', { className: R(qe.menuToggleCount) }, i),
        A
          ? c.createElement(
              'button',
              { type: 'button', className: R(qe.menuToggleButton), 'aria-expanded': o, onClick: v, 'aria-label': w || 'Menu toggle' },
              g,
            )
          : g,
      ),
      S = R(
        qe.menuToggle,
        o && qe.modifiers.expanded,
        p === 'primary' && qe.modifiers.primary,
        p === 'secondary' && qe.modifiers.secondary,
        f && qe.modifiers[f],
        (N || B) && qe.modifiers.plain,
        B && qe.modifiers.text,
        l && qe.modifiers.fullHeight,
        u && qe.modifiers.fullWidth,
        s && qe.modifiers.disabled,
        r,
      ),
      E = Object.assign(Object.assign({ children: N ? n : m }, s && { disabled: !0 }), T);
    return A
      ? c.createElement('div', Object.assign({ ref: b, className: R(S, qe.modifiers.typeahead) }, E))
      : d
        ? c.createElement(
            'div',
            { ref: b, className: R(S, qe.modifiers.splitButton, d?.variant === 'action' && qe.modifiers.action) },
            d?.items,
            c.createElement(
              'button',
              Object.assign(
                { className: R(qe.menuToggleButton), type: 'button', 'aria-expanded': o, 'aria-label': w, disabled: s, onClick: v },
                n && { style: { display: 'flex', paddingLeft: 'var(--pf-v5-global--spacer--sm)' } },
                T,
              ),
              n && c.createElement('span', { className: R(qe.menuToggleText) }, n),
              g,
            ),
          )
        : c.createElement(
            'button',
            Object.assign({ className: R(S), type: 'button', 'aria-label': w, 'aria-expanded': o, ref: b, disabled: s, onClick: v }, E),
          );
  }
}
Vd.defaultProps = { className: '', isExpanded: !1, isDisabled: !1, isFullWidth: !1, isFullHeight: !1 };
const Rr = c.forwardRef((e, t) => c.createElement(Vd, Object.assign({ innerRef: t }, e)));
Rr.displayName = 'MenuToggle';
const ir = {
    inputGroup: 'pf-v5-c-input-group',
    inputGroupItem: 'pf-v5-c-input-group__item',
    inputGroupText: 'pf-v5-c-input-group__text',
    modifiers: { box: 'pf-m-box', plain: 'pf-m-plain', disabled: 'pf-m-disabled', fill: 'pf-m-fill' },
    themeDark: 'pf-v5-theme-dark',
  },
  Hd = e => {
    var { className: t, children: n, innerRef: r } = e,
      a = ie(e, ['className', 'children', 'innerRef']);
    const i = c.useRef(null),
      o = r || i;
    return c.createElement('div', Object.assign({ ref: o, className: R(ir.inputGroup, t) }, a), n);
  };
Hd.displayName = 'InputGroupBase';
const Ti = c.forwardRef((e, t) => c.createElement(Hd, Object.assign({ innerRef: t }, e)));
Ti.displayName = 'InputGroup';
const ui = e => {
  var { className: t, children: n, isFill: r = !1, isBox: a = !1, isPlain: i, isDisabled: o } = e,
    s = ie(e, ['className', 'children', 'isFill', 'isBox', 'isPlain', 'isDisabled']);
  return c.createElement(
    'div',
    Object.assign(
      {
        className: R(
          ir.inputGroupItem,
          r && ir.modifiers.fill,
          a && ir.modifiers.box,
          i && ir.modifiers.plain,
          o && ir.modifiers.disabled,
          t,
        ),
      },
      s,
    ),
    n,
  );
};
ui.displayName = 'InputGroupItem';
const Pe = {
    card: 'pf-v5-c-card',
    cardActions: 'pf-v5-c-card__actions',
    cardBody: 'pf-v5-c-card__body',
    cardExpandableContent: 'pf-v5-c-card__expandable-content',
    cardFooter: 'pf-v5-c-card__footer',
    cardHeader: 'pf-v5-c-card__header',
    cardHeaderMain: 'pf-v5-c-card__header-main',
    cardHeaderToggle: 'pf-v5-c-card__header-toggle',
    cardHeaderToggleIcon: 'pf-v5-c-card__header-toggle-icon',
    cardSelectableActions: 'pf-v5-c-card__selectable-actions',
    cardSrInput: 'pf-v5-c-card__sr-input',
    cardTitle: 'pf-v5-c-card__title',
    cardTitleText: 'pf-v5-c-card__title-text',
    check: 'pf-v5-c-check',
    checkInput: 'pf-v5-c-check__input',
    checkLabel: 'pf-v5-c-check__label',
    dirRtl: 'pf-v5-m-dir-rtl',
    divider: 'pf-v5-c-divider',
    modifiers: {
      selectable: 'pf-m-selectable',
      clickable: 'pf-m-clickable',
      selected: 'pf-m-selected',
      current: 'pf-m-current',
      disabled: 'pf-m-disabled',
      hoverableRaised: 'pf-m-hoverable-raised',
      selectableRaised: 'pf-m-selectable-raised',
      nonSelectableRaised: 'pf-m-non-selectable-raised',
      selectedRaised: 'pf-m-selected-raised',
      compact: 'pf-m-compact',
      displayLg: 'pf-m-display-lg',
      flat: 'pf-m-flat',
      plain: 'pf-m-plain',
      rounded: 'pf-m-rounded',
      expanded: 'pf-m-expanded',
      fullHeight: 'pf-m-full-height',
      toggleRight: 'pf-m-toggle-right',
      noOffset: 'pf-m-no-offset',
      noFill: 'pf-m-no-fill',
    },
    radio: 'pf-v5-c-radio',
    radioInput: 'pf-v5-c-radio__input',
    radioLabel: 'pf-v5-c-radio__label',
    themeDark: 'pf-v5-theme-dark',
  },
  ps = c.createContext({
    cardId: '',
    registerTitleId: () => {},
    isExpanded: !1,
    isClickable: !1,
    isSelectable: !1,
    isSelected: !1,
    isClicked: !1,
    isDisabled: !1,
  }),
  ms = e => {
    var {
        children: t,
        id: n = '',
        className: r,
        component: a = 'div',
        isCompact: i = !1,
        isSelectable: o = !1,
        isClickable: s = !1,
        isDisabled: l = !1,
        isSelectableRaised: u = !1,
        isSelected: d = !1,
        isClicked: p = !1,
        isDisabledRaised: f = !1,
        isFlat: h = !1,
        isExpanded: b = !1,
        isRounded: v = !1,
        isLarge: w = !1,
        isFullHeight: T = !1,
        isPlain: N = !1,
        ouiaId: B,
        ouiaSafe: A = !0,
        hasSelectableInput: L = !1,
        selectableInputAriaLabel: g,
        onSelectableInputChange: m = () => {},
      } = e,
      S = ie(e, [
        'children',
        'id',
        'className',
        'component',
        'isCompact',
        'isSelectable',
        'isClickable',
        'isDisabled',
        'isSelectableRaised',
        'isSelected',
        'isClicked',
        'isDisabledRaised',
        'isFlat',
        'isExpanded',
        'isRounded',
        'isLarge',
        'isFullHeight',
        'isPlain',
        'ouiaId',
        'ouiaSafe',
        'hasSelectableInput',
        'selectableInputAriaLabel',
        'onSelectableInputChange',
      ]);
    const E = a,
      k = In(ms.displayName, B, A),
      [y, _] = c.useState(''),
      [O, U] = c.useState();
    i && w && (console.warn('Card: Cannot use isCompact with isLarge. Defaulting to isCompact'), (w = !1));
    const x = () =>
        f
          ? R(Pe.modifiers.nonSelectableRaised)
          : u
            ? R(Pe.modifiers.selectableRaised, d && Pe.modifiers.selectedRaised)
            : o && s
              ? R(Pe.modifiers.selectable, Pe.modifiers.clickable, (d || p) && Pe.modifiers.current)
              : o
                ? R(Pe.modifiers.selectable, d && Pe.modifiers.selected)
                : s
                  ? R(Pe.modifiers.clickable, p && Pe.modifiers.current)
                  : '',
      D = c.useRef(!1),
      G = z => {
        _(z), (D.current = !!z);
      };
    return (
      c.useEffect(() => {
        g
          ? U({ 'aria-label': g })
          : y
            ? U({ 'aria-labelledby': y })
            : L &&
              !D.current &&
              (U({}),
              console.warn('If no CardTitle component is passed as a child of Card the selectableInputAriaLabel prop must be passed'));
      }, [L, g, y]),
      c.createElement(
        ps.Provider,
        {
          value: {
            cardId: n,
            registerTitleId: G,
            isExpanded: b,
            isClickable: s,
            isSelectable: o,
            isSelected: d,
            isClicked: p,
            isDisabled: l,
            hasSelectableInput: L,
          },
        },
        L &&
          c.createElement(
            'input',
            Object.assign({ className: 'pf-v5-screen-reader', id: `${n}-input` }, O, {
              type: 'checkbox',
              checked: d,
              onChange: z => m(z, n),
              disabled: f,
              tabIndex: -1,
            }),
          ),
        c.createElement(
          E,
          Object.assign(
            {
              id: n,
              className: R(
                Pe.card,
                i && Pe.modifiers.compact,
                b && Pe.modifiers.expanded,
                h && Pe.modifiers.flat,
                v && Pe.modifiers.rounded,
                w && Pe.modifiers.displayLg,
                T && Pe.modifiers.fullHeight,
                N && Pe.modifiers.plain,
                x(),
                l && Pe.modifiers.disabled,
                r,
              ),
              tabIndex: u ? '0' : void 0,
            },
            S,
            k,
          ),
          t,
        ),
      )
    );
  };
ms.displayName = 'Card';
const $d = e => {
  var { children: t, className: n, component: r = 'div', isFilled: a = !0 } = e,
    i = ie(e, ['children', 'className', 'component', 'isFilled']);
  const o = r;
  return c.createElement(o, Object.assign({ className: R(Pe.cardBody, !a && Pe.modifiers.noFill, n) }, i), t);
};
$d.displayName = 'CardBody';
const zd = e => {
  var { children: t, className: n, component: r = 'div' } = e,
    a = ie(e, ['children', 'className', 'component']);
  const { cardId: i, registerTitleId: o } = c.useContext(ps),
    s = r,
    l = i ? `${i}-title` : '';
  return (
    c.useEffect(() => (o(l), () => o('')), [o, l]),
    c.createElement(
      'div',
      { className: R(Pe.cardTitle) },
      c.createElement(s, Object.assign({ className: R(Pe.cardTitleText, n), id: l || void 0 }, a), t),
    )
  );
};
zd.displayName = 'CardTitle';
const Wd = e => {
  var { children: t, className: n } = e,
    r = ie(e, ['children', 'className']);
  return c.createElement('div', Object.assign({ className: R(Pe.cardHeaderMain, n) }, r), t);
};
Wd.displayName = 'CardHeaderMain';
const Gd = e => {
  var { children: t, className: n, hasNoOffset: r = !1 } = e,
    a = ie(e, ['children', 'className', 'hasNoOffset']);
  return c.createElement('div', Object.assign({ className: R(Pe.cardActions, r && Pe.modifiers.noOffset, n) }, a), t);
};
Gd.displayName = 'CardActions';
const qd = e => {
  var { children: t, className: n } = e,
    r = ie(e, ['children', 'className']);
  return c.createElement('div', Object.assign({ className: R(Pe.cardSelectableActions, n) }, r), t);
};
qd.displayName = 'CardSelectableActions';
const Nn = {
  modifiers: { standalone: 'pf-m-standalone', disabled: 'pf-m-disabled' },
  radio: 'pf-v5-c-radio',
  radioBody: 'pf-v5-c-radio__body',
  radioDescription: 'pf-v5-c-radio__description',
  radioInput: 'pf-v5-c-radio__input',
  radioLabel: 'pf-v5-c-radio__label',
};
class Hn extends c.Component {
  constructor(t) {
    super(t),
      (this.handleChange = n => {
        this.props.onChange(n, n.currentTarget.checked);
      }),
      !t.label && !t['aria-label'] && console.error('Radio:', 'Radio requires an aria-label to be specified'),
      (this.state = { ouiaStateId: Jt(Hn.displayName) });
  }
  render() {
    const t = this.props,
      {
        'aria-label': n,
        checked: r,
        className: a,
        inputClassName: i,
        defaultChecked: o,
        isLabelWrapped: s,
        isLabelBeforeButton: l,
        isChecked: u,
        isDisabled: d,
        isValid: p,
        label: f,
        onChange: h,
        description: b,
        body: v,
        ouiaId: w,
        ouiaSafe: T = !0,
        component: N,
      } = t,
      B = ie(t, [
        'aria-label',
        'checked',
        'className',
        'inputClassName',
        'defaultChecked',
        'isLabelWrapped',
        'isLabelBeforeButton',
        'isChecked',
        'isDisabled',
        'isValid',
        'label',
        'onChange',
        'description',
        'body',
        'ouiaId',
        'ouiaSafe',
        'component',
      ]);
    B.id || console.error('Radio:', 'id is required to make input accessible');
    const A = c.createElement(
        'input',
        Object.assign(
          {},
          B,
          { className: R(Nn.radioInput, i), type: 'radio', onChange: this.handleChange, 'aria-invalid': !p, disabled: d, checked: r || u },
          r === void 0 && { defaultChecked: o },
          !f && { 'aria-label': n },
          At(Hn.displayName, w !== void 0 ? w : this.state.ouiaStateId, T),
        ),
      ),
      L = (s && !N) || N === 'label',
      g = L ? 'span' : 'label',
      m = f ? c.createElement(g, { className: R(Nn.radioLabel, d && Nn.modifiers.disabled), htmlFor: L ? void 0 : B.id }, f) : null,
      S = N ?? (L ? 'label' : 'div');
    return c.createElement(
      S,
      { className: R(Nn.radio, !f && Nn.modifiers.standalone, a), htmlFor: L ? B.id : void 0 },
      l ? c.createElement(c.Fragment, null, m, A) : c.createElement(c.Fragment, null, A, m),
      b && c.createElement('span', { className: R(Nn.radioDescription) }, b),
      v && c.createElement('span', { className: R(Nn.radioBody) }, v),
    );
  }
}
Hn.displayName = 'Radio';
Hn.defaultProps = { className: '', isDisabled: !1, isValid: !0, onChange: () => {} };
const Kd = e => {
  var {
      children: t,
      className: n,
      actions: r,
      selectableActions: a,
      id: i,
      onExpand: o,
      toggleButtonProps: s,
      isToggleRightAligned: l,
    } = e,
    u = ie(e, ['children', 'className', 'actions', 'selectableActions', 'id', 'onExpand', 'toggleButtonProps', 'isToggleRightAligned']);
  return c.createElement(
    ps.Consumer,
    null,
    ({ cardId: d, isClickable: p, isSelectable: f, isSelected: h, isClicked: b, isDisabled: v, hasSelectableInput: w }) => {
      const T = c.createElement(
          'div',
          { className: R(Pe.cardHeaderToggle) },
          c.createElement(
            Ke,
            Object.assign(
              {
                variant: 'plain',
                type: 'button',
                onClick: g => {
                  o(g, d);
                },
              },
              s,
            ),
            c.createElement('span', { className: R(Pe.cardHeaderToggleIcon) }, c.createElement(qn, { 'aria-hidden': 'true' })),
          ),
        ),
        N = (p && !f) || (f && !p),
        B = w;
      r?.actions &&
        N &&
        !B &&
        console.warn(
          `${p ? 'Clickable' : 'Selectable'} only cards should not contain any other actions. If you wish to include additional actions, use a clickable and selectable card.`,
        );
      const A = g => {
          a?.onClickAction ? a.onClickAction(g) : a?.to && window.open(a.to, a.isExternalLink ? '_blank' : '_self');
        },
        L = () => {
          var g;
          const m = {
              className: 'pf-m-standalone',
              inputClassName: p && !f && 'pf-v5-screen-reader',
              label: c.createElement(c.Fragment, null),
              'aria-label': a.selectableActionAriaLabel,
              'aria-labelledby': a.selectableActionAriaLabelledby,
              id: a.selectableActionId,
              name: a.name,
              isDisabled: v,
            },
            S = (g = a.isChecked) !== null && g !== void 0 ? g : h;
          return p && !f
            ? Object.assign(Object.assign({}, m), { onClick: A, isChecked: b })
            : f
              ? Object.assign(Object.assign({}, m), { onChange: a.onChange, isChecked: S })
              : m;
        };
      return c.createElement(
        'div',
        Object.assign({ className: R(Pe.cardHeader, l && Pe.modifiers.toggleRight, n), id: i }, u),
        o && !l && T,
        (r || (a && (p || f))) &&
          c.createElement(
            Gd,
            { className: r?.className, hasNoOffset: r?.hasNoOffset || a?.hasNoOffset },
            r?.actions,
            a &&
              (p || f) &&
              c.createElement(
                qd,
                { className: a?.className },
                a?.variant === 'single' || (p && !f)
                  ? c.createElement(Hn, Object.assign({}, L()))
                  : c.createElement(En, Object.assign({}, L())),
              ),
          ),
        t && c.createElement(Wd, null, t),
        o && l && T,
      );
    },
  );
};
Kd.displayName = 'CardHeader';
const hn = {
    badge: 'pf-v5-c-badge',
    button: 'pf-v5-c-button',
    chip: 'pf-v5-c-chip',
    chipActions: 'pf-v5-c-chip__actions',
    chipContent: 'pf-v5-c-chip__content',
    chipIcon: 'pf-v5-c-chip__icon',
    chipText: 'pf-v5-c-chip__text',
    modifiers: { overflow: 'pf-m-overflow', draggable: 'pf-m-draggable' },
    themeDark: 'pf-v5-theme-dark',
  },
  _v = { name: '--pf-v5-c-chip__text--MaxWidth', value: '16ch', var: 'var(--pf-v5-c-chip__text--MaxWidth)' };
class Sn extends c.Component {
  constructor(t) {
    super(t),
      (this.span = c.createRef()),
      (this.setChipStyle = () => ({ [_v.name]: this.props.textMaxWidth })),
      (this.renderOverflowChip = () => {
        const n = this.props,
          {
            badge: r,
            children: a,
            className: i,
            onClick: o,
            ouiaId: s,
            textMaxWidth: l,
            style: u,
            component: d,
            tooltipPosition: p,
            isOverflowChip: f,
            closeBtnAriaLabel: h,
            isReadOnly: b,
          } = n,
          v = ie(n, [
            'badge',
            'children',
            'className',
            'onClick',
            'ouiaId',
            'textMaxWidth',
            'style',
            'component',
            'tooltipPosition',
            'isOverflowChip',
            'closeBtnAriaLabel',
            'isReadOnly',
          ]),
          w = d;
        return c.createElement(
          w,
          Object.assign(
            { onClick: o },
            l && Object.assign({ style: this.setChipStyle() }, u),
            { className: R(hn.chip, hn.modifiers.overflow, i) },
            d === 'button' ? { type: 'button' } : {},
            At('OverflowChip', s !== void 0 ? s : this.state.ouiaStateId),
            v,
          ),
          c.createElement('span', { className: R(hn.chipContent) }, c.createElement('span', { className: R(hn.chipText) }, a), r && r),
        );
      }),
      (this.renderChip = n => {
        const { children: r, tooltipPosition: a } = this.props;
        return this.state.isTooltipVisible
          ? c.createElement(kr, { position: a, content: r }, this.renderInnerChip(n))
          : this.renderInnerChip(n);
      }),
      (this.state = { isTooltipVisible: !1, ouiaStateId: Jt(Sn.displayName) });
  }
  componentDidMount() {
    this.setState({ isTooltipVisible: !!(this.span.current && this.span.current.offsetWidth < this.span.current.scrollWidth) });
  }
  componentDidUpdate(t, n) {
    const r = !!(this.span.current && this.span.current.offsetWidth < this.span.current.scrollWidth);
    n.isTooltipVisible !== r && this.setState({ isTooltipVisible: r });
  }
  renderInnerChip(t) {
    const n = this.props,
      {
        badge: r,
        children: a,
        className: i,
        onClick: o,
        closeBtnAriaLabel: s,
        isReadOnly: l,
        isOverflowChip: u,
        tooltipPosition: d,
        id: p,
        component: f,
        ouiaId: h,
        textMaxWidth: b,
      } = n,
      v = ie(n, [
        'badge',
        'children',
        'className',
        'onClick',
        'closeBtnAriaLabel',
        'isReadOnly',
        'isOverflowChip',
        'tooltipPosition',
        'id',
        'component',
        'ouiaId',
        'textMaxWidth',
      ]),
      w = f;
    return c.createElement(
      w,
      Object.assign(
        {},
        b && { style: this.setChipStyle() },
        { className: R(hn.chip, i) },
        this.state.isTooltipVisible && { tabIndex: 0 },
        At(Sn.displayName, h !== void 0 ? h : this.state.ouiaStateId),
        v,
      ),
      c.createElement(
        'span',
        { className: R(hn.chipContent) },
        c.createElement('span', { ref: this.span, className: R(hn.chipText), id: t }, a),
        r && r,
      ),
      !l &&
        c.createElement(
          'span',
          { className: R(hn.chipActions) },
          c.createElement(
            Ke,
            { onClick: o, variant: 'plain', 'aria-label': s, id: `remove_${t}`, 'aria-labelledby': `remove_${t} ${t}`, ouiaId: h || s },
            c.createElement(Sr, { 'aria-hidden': 'true' }),
          ),
        ),
    );
  }
  render() {
    const { isOverflowChip: t } = this.props;
    return c.createElement(Gn, null, n => (t ? this.renderOverflowChip() : this.renderChip(this.props.id || n)));
  }
}
Sn.displayName = 'Chip';
Sn.defaultProps = {
  closeBtnAriaLabel: 'close',
  className: '',
  isOverflowChip: !1,
  isReadOnly: !1,
  tooltipPosition: 'top',
  onClick: e => {},
  component: 'div',
};
const Zt = {
    chipGroup: 'pf-v5-c-chip-group',
    chipGroupClose: 'pf-v5-c-chip-group__close',
    chipGroupLabel: 'pf-v5-c-chip-group__label',
    chipGroupList: 'pf-v5-c-chip-group__list',
    chipGroupListItem: 'pf-v5-c-chip-group__list-item',
    chipGroupMain: 'pf-v5-c-chip-group__main',
    modifiers: { category: 'pf-m-category' },
  },
  Ev = {
    name: 'TimesCircleIcon',
    height: 512,
    width: 512,
    svgPath:
      'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm121.6 313.1c4.7 4.7 4.7 12.3 0 17L338 377.6c-4.7 4.7-12.3 4.7-17 0L256 312l-65.1 65.6c-4.7 4.7-12.3 4.7-17 0L134.4 338c-4.7-4.7-4.7-12.3 0-17l65.6-65-65.6-65.1c-4.7-4.7-4.7-12.3 0-17l39.6-39.6c4.7-4.7 12.3-4.7 17 0l65 65.7 65.1-65.6c4.7-4.7 12.3-4.7 17 0l39.6 39.6c4.7 4.7 4.7 12.3 0 17L312 256l65.6 65.1z',
    yOffset: 0,
    xOffset: 0,
  },
  Sv = ke(Ev);
class Nr extends c.Component {
  constructor(t) {
    super(t),
      (this.headingRef = c.createRef()),
      (this.toggleCollapse = () => {
        this.setState(n => ({
          isOpen: !n.isOpen,
          isTooltipVisible: !!(this.headingRef.current && this.headingRef.current.offsetWidth < this.headingRef.current.scrollWidth),
        }));
      }),
      (this.state = { isOpen: this.props.defaultIsOpen, isTooltipVisible: !1 });
  }
  componentDidMount() {
    this.setState({
      isTooltipVisible: !!(this.headingRef.current && this.headingRef.current.offsetWidth < this.headingRef.current.scrollWidth),
    });
  }
  renderLabel(t) {
    const { categoryName: n, tooltipPosition: r } = this.props,
      { isTooltipVisible: a } = this.state;
    return a
      ? c.createElement(
          kr,
          { position: r, content: n },
          c.createElement(
            'span',
            { tabIndex: 0, ref: this.headingRef, className: R(Zt.chipGroupLabel) },
            c.createElement('span', { id: t }, n),
          ),
        )
      : c.createElement('span', { ref: this.headingRef, className: R(Zt.chipGroupLabel), id: t }, n);
  }
  render() {
    const t = this.props,
      {
        categoryName: n,
        children: r,
        className: a,
        isClosable: i,
        closeBtnAriaLabel: o,
        'aria-label': s,
        onClick: l,
        onOverflowChipClick: u,
        numChips: d,
        expandedText: p,
        collapsedText: f,
        ouiaId: h,
        defaultIsOpen: b,
        tooltipPosition: v,
      } = t,
      w = ie(t, [
        'categoryName',
        'children',
        'className',
        'isClosable',
        'closeBtnAriaLabel',
        'aria-label',
        'onClick',
        'onOverflowChipClick',
        'numChips',
        'expandedText',
        'collapsedText',
        'ouiaId',
        'defaultIsOpen',
        'tooltipPosition',
      ]),
      { isOpen: T } = this.state,
      N = c.Children.count(r),
      B = Ch(f, { remaining: c.Children.count(r) - d }),
      A = L => {
        const g = T ? c.Children.toArray(r) : c.Children.toArray(r).slice(0, d);
        return c.createElement(
          'div',
          Object.assign(
            { className: R(Zt.chipGroup, a, n && Zt.modifiers.category), role: 'group' },
            n && { 'aria-labelledby': L },
            !n && { 'aria-label': s },
            At(Nr.displayName, h),
          ),
          c.createElement(
            'div',
            { className: R(Zt.chipGroupMain) },
            n && this.renderLabel(L),
            c.createElement(
              'ul',
              Object.assign(
                { className: R(Zt.chipGroupList) },
                n && { 'aria-labelledby': L },
                !n && { 'aria-label': s },
                { role: 'list' },
                w,
              ),
              g.map((m, S) => c.createElement('li', { className: R(Zt.chipGroupListItem), key: S }, m)),
              N > d &&
                c.createElement(
                  'li',
                  { className: R(Zt.chipGroupListItem) },
                  c.createElement(
                    Sn,
                    {
                      isOverflowChip: !0,
                      onClick: m => {
                        this.toggleCollapse(), u(m);
                      },
                      component: 'button',
                    },
                    T ? p : B,
                  ),
                ),
            ),
          ),
          i &&
            c.createElement(
              'div',
              { className: R(Zt.chipGroupClose) },
              c.createElement(
                Ke,
                {
                  variant: 'plain',
                  'aria-label': o,
                  onClick: l,
                  id: `remove_group_${L}`,
                  'aria-labelledby': `remove_group_${L} ${L}`,
                  ouiaId: h || o,
                },
                c.createElement(Sv, { 'aria-hidden': 'true' }),
              ),
            ),
        );
      };
    return N === 0 ? null : c.createElement(Gn, null, L => A(this.props.id || L));
  }
}
Nr.displayName = 'ChipGroup';
Nr.defaultProps = {
  expandedText: 'Show Less',
  collapsedText: '${remaining} more',
  categoryName: '',
  defaultIsOpen: !1,
  numChips: 3,
  isClosable: !1,
  onClick: e => {},
  onOverflowChipClick: e => {},
  closeBtnAriaLabel: 'Close chip group',
  tooltipPosition: 'top',
  'aria-label': 'Chip group category',
};
const Ae = {
    modifiers: {
      noPadding: 'pf-m-no-padding',
      widthAuto: 'pf-m-width-auto',
      top: 'pf-m-top',
      topLeft: 'pf-m-top-left',
      topRight: 'pf-m-top-right',
      bottom: 'pf-m-bottom',
      bottomLeft: 'pf-m-bottom-left',
      bottomRight: 'pf-m-bottom-right',
      left: 'pf-m-left',
      leftTop: 'pf-m-left-top',
      leftBottom: 'pf-m-left-bottom',
      right: 'pf-m-right',
      rightTop: 'pf-m-right-top',
      rightBottom: 'pf-m-right-bottom',
      danger: 'pf-m-danger',
      warning: 'pf-m-warning',
      success: 'pf-m-success',
      custom: 'pf-m-custom',
      info: 'pf-m-info',
    },
    popover: 'pf-v5-c-popover',
    popoverArrow: 'pf-v5-c-popover__arrow',
    popoverBody: 'pf-v5-c-popover__body',
    popoverClose: 'pf-v5-c-popover__close',
    popoverContent: 'pf-v5-c-popover__content',
    popoverFooter: 'pf-v5-c-popover__footer',
    popoverHeader: 'pf-v5-c-popover__header',
    popoverTitle: 'pf-v5-c-popover__title',
    popoverTitleIcon: 'pf-v5-c-popover__title-icon',
    popoverTitleText: 'pf-v5-c-popover__title-text',
    themeDark: 'pf-v5-theme-dark',
  },
  kv = c.createContext({}),
  Xd = e => {
    var { className: t = null, children: n } = e,
      r = ie(e, ['className', 'children']);
    return c.createElement('div', Object.assign({ className: R(Ae.popoverContent, t) }, r), n);
  };
Xd.displayName = 'PopoverContent';
const Jd = e => {
  var { children: t, id: n, className: r } = e,
    a = ie(e, ['children', 'id', 'className']);
  return c.createElement('div', Object.assign({ className: R(Ae.popoverBody, r), id: n }, a), t);
};
Jd.displayName = 'PopoverBody';
const Yd = e => {
  var { children: t, className: n } = e,
    r = ie(e, ['children', 'className']);
  return c.createElement('span', Object.assign({ className: R(Ae.popoverTitleIcon, n) }, r), t);
};
Yd.displayName = 'PopoverHeaderIcon';
const Qd = e => {
  var { children: t, className: n, headingLevel: r } = e,
    a = ie(e, ['children', 'className', 'headingLevel']);
  const i = r;
  return c.createElement(i, Object.assign({ className: R(Ae.popoverTitleText, n) }, a), t);
};
Qd.displayName = 'PopoverHeaderText';
const Zd = e => {
  var {
      children: t,
      icon: n,
      className: r,
      titleHeadingLevel: a = 'h6',
      alertSeverityVariant: i,
      id: o,
      alertSeverityScreenReaderText: s,
    } = e,
    l = ie(e, ['children', 'icon', 'className', 'titleHeadingLevel', 'alertSeverityVariant', 'id', 'alertSeverityScreenReaderText']);
  return c.createElement(
    'header',
    Object.assign({ className: R(Ae.popoverHeader, r) }, l),
    c.createElement(
      'div',
      { className: R(Ae.popoverTitle), id: o },
      n && c.createElement(Yd, null, n),
      c.createElement(Qd, { headingLevel: a }, i && s && c.createElement('span', { className: 'pf-v5-screen-reader' }, s), t),
    ),
  );
};
Zd.displayName = 'PopoverHeader';
const eu = e => {
  var { children: t, className: n = '' } = e,
    r = ie(e, ['children', 'className']);
  return c.createElement('footer', Object.assign({ className: R(Ae.popoverFooter, n) }, r), t);
};
eu.displayName = 'PopoverFooter';
const tu = e => {
  var { onClose: t = () => {} } = e,
    n = ie(e, ['onClose']);
  return c.createElement(
    'div',
    { className: R(Ae.popoverClose) },
    c.createElement(
      Ke,
      Object.assign({ onClick: t, variant: 'plain', 'aria-label': !0 }, n, { style: { pointerEvents: 'auto' } }),
      c.createElement(Sr, null),
    ),
  );
};
tu.displayName = 'PopoverCloseButton';
const nu = e => {
  var { className: t = '' } = e,
    n = ie(e, ['className']);
  return c.createElement('div', Object.assign({ className: R(Ae.popoverArrow, t) }, n));
};
nu.displayName = 'PopoverArrow';
const Zi = { name: '--pf-v5-c-popover--MaxWidth', value: 'none', var: 'var(--pf-v5-c-popover--MaxWidth)' },
  eo = { name: '--pf-v5-c-popover--MinWidth', value: 'auto', var: 'var(--pf-v5-c-popover--MinWidth)' };
var Yl;
(function (e) {
  (e.auto = 'auto'),
    (e.top = 'top'),
    (e.bottom = 'bottom'),
    (e.left = 'left'),
    (e.right = 'right'),
    (e.topStart = 'top-start'),
    (e.topEnd = 'top-end'),
    (e.bottomStart = 'bottom-start'),
    (e.bottomEnd = 'bottom-end'),
    (e.leftStart = 'left-start'),
    (e.leftEnd = 'left-end'),
    (e.rightStart = 'right-start'),
    (e.rightEnd = 'right-end');
})(Yl || (Yl = {}));
const Lv = {
    custom: Ae.modifiers.custom,
    info: Ae.modifiers.info,
    success: Ae.modifiers.success,
    warning: Ae.modifiers.warning,
    danger: Ae.modifiers.danger,
  },
  ru = e => {
    var {
        children: t,
        position: n = 'top',
        enableFlip: r = !0,
        className: a = '',
        isVisible: i = null,
        shouldClose: o = () => null,
        shouldOpen: s = () => null,
        'aria-label': l = '',
        bodyContent: u,
        headerContent: d = null,
        headerComponent: p = 'h6',
        headerIcon: f = null,
        alertSeverityVariant: h,
        alertSeverityScreenReaderText: b,
        footerContent: v = null,
        appendTo: w = () => document.body,
        hideOnOutsideClick: T = !0,
        onHide: N = () => null,
        onHidden: B = () => null,
        onShow: A = () => null,
        onShown: L = () => null,
        onMount: g = () => null,
        zIndex: m = 9999,
        triggerAction: S = 'click',
        minWidth: E = eo && eo.value,
        maxWidth: k = Zi && Zi.value,
        closeBtnAriaLabel: y = 'Close',
        showClose: _ = !0,
        distance: O = 25,
        flipBehavior: U = [
          'top',
          'bottom',
          'left',
          'right',
          'top-start',
          'top-end',
          'bottom-start',
          'bottom-end',
          'left-start',
          'left-end',
          'right-start',
          'right-end',
        ],
        animationDuration: x = 300,
        id: D,
        withFocusTrap: G,
        triggerRef: z,
        hasNoPadding: K = !1,
        hasAutoWidth: ne = !1,
        elementToFocus: C,
      } = e,
      P = ie(e, [
        'children',
        'position',
        'enableFlip',
        'className',
        'isVisible',
        'shouldClose',
        'shouldOpen',
        'aria-label',
        'bodyContent',
        'headerContent',
        'headerComponent',
        'headerIcon',
        'alertSeverityVariant',
        'alertSeverityScreenReaderText',
        'footerContent',
        'appendTo',
        'hideOnOutsideClick',
        'onHide',
        'onHidden',
        'onShow',
        'onShown',
        'onMount',
        'zIndex',
        'triggerAction',
        'minWidth',
        'maxWidth',
        'closeBtnAriaLabel',
        'showClose',
        'distance',
        'flipBehavior',
        'animationDuration',
        'id',
        'withFocusTrap',
        'triggerRef',
        'hasNoPadding',
        'hasAutoWidth',
        'elementToFocus',
      ]);
    const H = D || Jo(),
      q = i !== null,
      [$, Y] = c.useState(!1),
      [J, Q] = c.useState(!!G),
      re = c.useRef(null);
    c.useEffect(() => {
      g();
    }, []),
      c.useEffect(() => {
        q && (i ? te(void 0, !0) : se());
      }, [i, q]);
    const te = (le, be) => {
        le && A(le), Y(!0), G !== !1 && be && Q(!0);
      },
      se = le => {
        le && N(le), Y(!1);
      },
      de = {
        top: Ae.modifiers.top,
        bottom: Ae.modifiers.bottom,
        left: Ae.modifiers.left,
        right: Ae.modifiers.right,
        'top-start': Ae.modifiers.topLeft,
        'top-end': Ae.modifiers.topRight,
        'bottom-start': Ae.modifiers.bottomLeft,
        'bottom-end': Ae.modifiers.bottomRight,
        'left-start': Ae.modifiers.leftTop,
        'left-end': Ae.modifiers.leftBottom,
        'right-start': Ae.modifiers.rightTop,
        'right-end': Ae.modifiers.rightBottom,
      },
      Le = E !== eo.value,
      je = k !== Zi.value,
      Me = le => {
        le.key === ti.Escape && $ && (q ? o(le, se) : se(le));
      },
      Te = (le, be, Ee) => {
        if (T && $) {
          const et = Ee && Ee.contains(le.target),
            ht = be && be.contains(le.target);
          if (et || ht) return;
          q ? o(le, se) : se(le);
        }
      },
      Xe = le => {
        q ? ($ ? o(le, se) : s(le, te)) : $ ? se(le) : te(le, !0);
      },
      I = () => {
        J && Q(!1);
      },
      F = le => {
        q ? s(le, te) : te(le, !1);
      },
      V = le => {
        q ? o(le, se) : se(le);
      },
      ee = le => {
        q ? s(le, te) : te(le, !1);
      },
      ae = le => {
        q ? o(le, se) : se(le);
      },
      Z = le => {
        le.stopPropagation(), q ? o(le, se) : se(le);
      },
      ue = c.createElement(
        Li,
        Object.assign(
          {
            ref: re,
            active: J,
            focusTrapOptions: {
              returnFocusOnDeactivate: G !== !1,
              clickOutsideDeactivates: !0,
              initialFocus: C || void 0,
              checkCanFocusTrap: le =>
                new Promise(be => {
                  const Ee = setInterval(() => {
                    le.every(et => getComputedStyle(et).visibility !== 'hidden') && (be(), clearInterval(Ee));
                  }, 10);
                }),
              tabbableOptions: { displayCheck: 'none' },
              fallbackFocus: () => {
                let le = null;
                return document && document.activeElement && (le = document.activeElement), le;
              },
            },
            preventScrollOnDeactivate: !0,
            className: R(Ae.popover, h && Lv[h], K && Ae.modifiers.noPadding, ne && Ae.modifiers.widthAuto, a),
            role: 'dialog',
            'aria-modal': 'true',
            'aria-label': d ? void 0 : l,
            'aria-labelledby': d ? `popover-${H}-header` : void 0,
            'aria-describedby': `popover-${H}-body`,
            onMouseDown: I,
            style: { minWidth: Le ? E : null, maxWidth: je ? k : null },
          },
          P,
        ),
        c.createElement(nu, null),
        c.createElement(
          Xd,
          null,
          _ && S === 'click' && c.createElement(tu, { onClose: Z, 'aria-label': y }),
          d &&
            c.createElement(
              Zd,
              {
                id: `popover-${H}-header`,
                icon: f,
                alertSeverityVariant: h,
                alertSeverityScreenReaderText: b || `${h} alert:`,
                titleHeadingLevel: p,
              },
              typeof d == 'function' ? d(se) : d,
            ),
          c.createElement(Jd, { id: `popover-${H}-body` }, typeof u == 'function' ? u(se) : u),
          v && c.createElement(eu, { id: `popover-${H}-footer` }, typeof v == 'function' ? v(se) : v),
        ),
      );
    return c.createElement(
      kv.Provider,
      { value: { headerComponent: p } },
      c.createElement(_r, {
        trigger: t,
        triggerRef: z,
        popper: ue,
        popperRef: re,
        minWidth: E,
        appendTo: w,
        isVisible: $,
        onMouseEnter: S === 'hover' && F,
        onMouseLeave: S === 'hover' && V,
        onPopperMouseEnter: S === 'hover' && F,
        onPopperMouseLeave: S === 'hover' && V,
        onFocus: S === 'hover' && ee,
        onBlur: S === 'hover' && ae,
        positionModifiers: de,
        distance: O,
        placement: n,
        onTriggerClick: S === 'click' && Xe,
        onDocumentClick: Te,
        onDocumentKeyDown: Me,
        enableFlip: r,
        zIndex: m,
        flipBehavior: U,
        animationDuration: x,
        onHidden: B,
        onShown: L,
        onHide: () => Q(!1),
      }),
    );
  };
ru.displayName = 'Popover';
const Ht = {
    helperText: 'pf-v5-c-helper-text',
    helperTextItem: 'pf-v5-c-helper-text__item',
    helperTextItemIcon: 'pf-v5-c-helper-text__item-icon',
    helperTextItemText: 'pf-v5-c-helper-text__item-text',
    modifiers: {
      hidden: 'pf-m-hidden',
      indeterminate: 'pf-m-indeterminate',
      warning: 'pf-m-warning',
      success: 'pf-m-success',
      error: 'pf-m-error',
      dynamic: 'pf-m-dynamic',
    },
    themeDark: 'pf-v5-theme-dark',
  },
  hs = e => {
    var { children: t, className: n, component: r = 'div', id: a, isLiveRegion: i = !1, 'aria-label': o } = e,
      s = ie(e, ['children', 'className', 'component', 'id', 'isLiveRegion', 'aria-label']);
    const l = r;
    return c.createElement(
      l,
      Object.assign(
        { id: a, className: R(Ht.helperText, n) },
        i && { 'aria-live': 'polite' },
        r === 'ul' && { role: 'list', 'aria-label': o },
        s,
      ),
      t,
    );
  };
hs.displayName = 'HelperText';
const Iv = {
    name: 'MinusIcon',
    height: 512,
    width: 448,
    svgPath: 'M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z',
    yOffset: 0,
    xOffset: 0,
  },
  Rv = ke(Iv),
  Nv = {
    default: '',
    indeterminate: Ht.modifiers.indeterminate,
    warning: Ht.modifiers.warning,
    success: Ht.modifiers.success,
    error: Ht.modifiers.error,
  },
  gs = e => {
    var {
        children: t,
        className: n,
        component: r = 'div',
        variant: a = 'default',
        icon: i,
        isDynamic: o = !1,
        hasIcon: s = o,
        id: l,
        screenReaderText: u = `${a} status`,
      } = e,
      d = ie(e, ['children', 'className', 'component', 'variant', 'icon', 'isDynamic', 'hasIcon', 'id', 'screenReaderText']);
    const p = r;
    return c.createElement(
      p,
      Object.assign({ className: R(Ht.helperTextItem, Nv[a], o && Ht.modifiers.dynamic, n), id: l }, d),
      i && c.createElement('span', { className: R(Ht.helperTextItemIcon), 'aria-hidden': !0 }, i),
      s &&
        !i &&
        c.createElement(
          'span',
          { className: R(Ht.helperTextItemIcon), 'aria-hidden': !0 },
          (a === 'default' || a === 'indeterminate') && c.createElement(Rv, null),
          a === 'warning' && c.createElement(wa, null),
          a === 'success' && c.createElement(xa, null),
          a === 'error' && c.createElement(Lr, null),
        ),
      c.createElement(
        'span',
        { className: R(Ht.helperTextItemText) },
        t,
        o && c.createElement('span', { className: 'pf-v5-screen-reader' }, ': ', u, ';'),
      ),
    );
  };
gs.displayName = 'HelperTextItem';
const He = {
  dirRtl: 'pf-v5-m-dir-rtl',
  drawer: 'pf-v5-c-drawer',
  drawerActions: 'pf-v5-c-drawer__actions',
  drawerBody: 'pf-v5-c-drawer__body',
  drawerClose: 'pf-v5-c-drawer__close',
  drawerContent: 'pf-v5-c-drawer__content',
  drawerHead: 'pf-v5-c-drawer__head',
  drawerMain: 'pf-v5-c-drawer__main',
  drawerPanel: 'pf-v5-c-drawer__panel',
  drawerPanelMain: 'pf-v5-c-drawer__panel-main',
  drawerSection: 'pf-v5-c-drawer__section',
  drawerSplitter: 'pf-v5-c-drawer__splitter',
  drawerSplitterHandle: 'pf-v5-c-drawer__splitter-handle',
  modifiers: {
    panelBottom: 'pf-m-panel-bottom',
    inline: 'pf-m-inline',
    noBorder: 'pf-m-no-border',
    resizable: 'pf-m-resizable',
    static: 'pf-m-static',
    panelLeft: 'pf-m-panel-left',
    expanded: 'pf-m-expanded',
    resizing: 'pf-m-resizing',
    noBackground: 'pf-m-no-background',
    light_200: 'pf-m-light-200',
    noPadding: 'pf-m-no-padding',
    padding: 'pf-m-padding',
    vertical: 'pf-m-vertical',
    width_25: 'pf-m-width-25',
    width_33: 'pf-m-width-33',
    width_50: 'pf-m-width-50',
    width_66: 'pf-m-width-66',
    width_75: 'pf-m-width-75',
    width_100: 'pf-m-width-100',
    width_25OnLg: 'pf-m-width-25-on-lg',
    width_33OnLg: 'pf-m-width-33-on-lg',
    width_50OnLg: 'pf-m-width-50-on-lg',
    width_66OnLg: 'pf-m-width-66-on-lg',
    width_75OnLg: 'pf-m-width-75-on-lg',
    width_100OnLg: 'pf-m-width-100-on-lg',
    width_25OnXl: 'pf-m-width-25-on-xl',
    width_33OnXl: 'pf-m-width-33-on-xl',
    width_50OnXl: 'pf-m-width-50-on-xl',
    width_66OnXl: 'pf-m-width-66-on-xl',
    width_75OnXl: 'pf-m-width-75-on-xl',
    width_100OnXl: 'pf-m-width-100-on-xl',
    width_25On_2xl: 'pf-m-width-25-on-2xl',
    width_33On_2xl: 'pf-m-width-33-on-2xl',
    width_50On_2xl: 'pf-m-width-50-on-2xl',
    width_66On_2xl: 'pf-m-width-66-on-2xl',
    width_75On_2xl: 'pf-m-width-75-on-2xl',
    width_100On_2xl: 'pf-m-width-100-on-2xl',
    inlineOnLg: 'pf-m-inline-on-lg',
    staticOnLg: 'pf-m-static-on-lg',
    inlineOnXl: 'pf-m-inline-on-xl',
    staticOnXl: 'pf-m-static-on-xl',
    inlineOn_2xl: 'pf-m-inline-on-2xl',
    staticOn_2xl: 'pf-m-static-on-2xl',
  },
  pageMain: 'pf-v5-c-page__main',
  themeDark: 'pf-v5-theme-dark',
};
var On;
(function (e) {
  (e.default = 'default'), (e.light200 = 'light-200'), (e.noBackground = 'no-background');
})(On || (On = {}));
const vs = c.createContext({
    isExpanded: !1,
    isStatic: !1,
    onExpand: () => {},
    position: 'end',
    drawerRef: null,
    drawerContentRef: null,
    isInline: !1,
  }),
  au = e => {
    var {
        className: t = '',
        children: n,
        isExpanded: r = !1,
        isInline: a = !1,
        isStatic: i = !1,
        position: o = 'end',
        onExpand: s = () => {},
      } = e,
      l = ie(e, ['className', 'children', 'isExpanded', 'isInline', 'isStatic', 'position', 'onExpand']);
    const u = c.useRef(),
      d = c.useRef();
    return c.createElement(
      vs.Provider,
      { value: { isExpanded: r, isStatic: i, onExpand: s, position: o, drawerRef: u, drawerContentRef: d, isInline: a } },
      c.createElement(
        'div',
        Object.assign(
          {
            className: R(
              He.drawer,
              r && He.modifiers.expanded,
              a && He.modifiers.inline,
              i && He.modifiers.static,
              (o === 'left' || o === 'start') && He.modifiers.panelLeft,
              o === 'bottom' && He.modifiers.panelBottom,
              t,
            ),
            ref: u,
          },
          l,
        ),
        n,
      ),
    );
  };
au.displayName = 'Drawer';
const iu = e => {
  var { className: t = '', children: n } = e,
    r = ie(e, ['className', 'children']);
  return c.createElement('div', Object.assign({ className: R(He.drawerMain, t) }, r), n);
};
iu.displayName = 'DrawerMain';
const ou = e => {
  var { className: t = '', children: n, panelContent: r, colorVariant: a = On.default } = e,
    i = ie(e, ['className', 'children', 'panelContent', 'colorVariant']);
  const { drawerContentRef: o } = c.useContext(vs);
  return c.createElement(
    iu,
    null,
    c.createElement(
      'div',
      Object.assign(
        {
          className: R(
            He.drawerContent,
            a === On.light200 && He.modifiers.light_200,
            a === On.noBackground && He.modifiers.noBackground,
            t,
          ),
          ref: o,
        },
        i,
      ),
      n,
    ),
    r,
  );
};
ou.displayName = 'DrawerContent';
const su = e => {
  var { className: t = '', children: n, hasPadding: r = !1 } = e,
    a = ie(e, ['className', 'children', 'hasPadding']);
  return c.createElement('div', Object.assign({ className: R(He.drawerBody, r && He.modifiers.padding, t) }, a), n);
};
su.displayName = 'DrawerContentBody';
const to = { name: '--pf-v5-c-drawer__panel--md--FlexBasis', value: '50%', var: 'var(--pf-v5-c-drawer__panel--md--FlexBasis)' },
  Tv = { name: '--pf-v5-c-drawer__panel--md--FlexBasis--min', value: '1.5rem', var: 'var(--pf-v5-c-drawer__panel--md--FlexBasis--min)' },
  Pv = { name: '--pf-v5-c-drawer__panel--md--FlexBasis--max', value: '100%', var: 'var(--pf-v5-c-drawer__panel--md--FlexBasis--max)' };
let gn = null,
  Gr = 0;
const lu = e => {
  var {
      className: t = '',
      id: n,
      children: r,
      hasNoBorder: a = !1,
      isResizable: i = !1,
      onResize: o,
      minSize: s,
      defaultSize: l,
      maxSize: u,
      increment: d = 5,
      resizeAriaLabel: p = 'Resize',
      widths: f,
      colorVariant: h = On.default,
      focusTrap: b,
    } = e,
    v = ie(e, [
      'className',
      'id',
      'children',
      'hasNoBorder',
      'isResizable',
      'onResize',
      'minSize',
      'defaultSize',
      'maxSize',
      'increment',
      'resizeAriaLabel',
      'widths',
      'colorVariant',
      'focusTrap',
    ]);
  const w = c.useRef(),
    T = c.useRef(),
    [N, B] = c.useState(0),
    { position: A, isExpanded: L, isStatic: g, onExpand: m, drawerRef: S, drawerContentRef: E, isInline: k } = c.useContext(vs),
    y = g ? !1 : !L,
    [_, O] = c.useState(!y),
    [U, x] = c.useState(!1),
    D = c.useRef(null);
  let G = 0,
    z,
    K,
    ne,
    C,
    P = !0;
  g &&
    b?.enabled &&
    console.warn(
      "DrawerPanelContent: The focusTrap.enabled prop cannot be true if the Drawer's isStatic prop is true. This will cause a permanent focus trap.",
    ),
    c.useEffect(() => {
      !g && L && O(L);
    }, [g, L]);
  const H = () => {
      let F, V;
      const ee = ur(w.current) === 'rtl';
      k && (A === 'end' || A === 'right')
        ? ee
          ? ((F = w.current.getBoundingClientRect().left - T.current.getBoundingClientRect().right),
            (V = S.current.getBoundingClientRect().left - S.current.getBoundingClientRect().right))
          : ((F = w.current.getBoundingClientRect().right - T.current.getBoundingClientRect().left),
            (V = S.current.getBoundingClientRect().right - S.current.getBoundingClientRect().left))
        : k && (A === 'start' || A === 'left')
          ? ee
            ? ((F = T.current.getBoundingClientRect().left - w.current.getBoundingClientRect().right),
              (V = S.current.getBoundingClientRect().left - S.current.getBoundingClientRect().right))
            : ((F = T.current.getBoundingClientRect().right - w.current.getBoundingClientRect().left),
              (V = S.current.getBoundingClientRect().right - S.current.getBoundingClientRect().left))
          : A === 'end' || A === 'right'
            ? ee
              ? ((F = E.current.getBoundingClientRect().left - T.current.getBoundingClientRect().right),
                (V = E.current.getBoundingClientRect().left - E.current.getBoundingClientRect().right))
              : ((F = E.current.getBoundingClientRect().right - T.current.getBoundingClientRect().left),
                (V = E.current.getBoundingClientRect().right - E.current.getBoundingClientRect().left))
            : A === 'start' || A === 'left'
              ? ee
                ? ((F = T.current.getBoundingClientRect().left - E.current.getBoundingClientRect().right),
                  (V = E.current.getBoundingClientRect().left - E.current.getBoundingClientRect().right))
                : ((F = T.current.getBoundingClientRect().right - E.current.getBoundingClientRect().left),
                  (V = E.current.getBoundingClientRect().right - E.current.getBoundingClientRect().left))
              : A === 'bottom' &&
                ((F = E.current.getBoundingClientRect().bottom - T.current.getBoundingClientRect().top),
                (V = E.current.getBoundingClientRect().bottom - E.current.getBoundingClientRect().top));
      const ae = (F / V) * 100;
      return Math.round((ae + Number.EPSILON) * 100) / 100;
    },
    q = F => {
      F.stopPropagation(),
        document.addEventListener('touchmove', Le, { passive: !1 }),
        document.addEventListener('touchend', de),
        (gn = !0);
    },
    $ = F => {
      F.stopPropagation(),
        F.preventDefault(),
        document.addEventListener('mousemove', se),
        document.addEventListener('mouseup', je),
        S.current.classList.add(R(He.modifiers.resizing)),
        (gn = !0),
        (P = !0);
    },
    Y = F => {
      const V = A === 'bottom' ? F.clientY : F.clientX;
      Q(F, V);
    },
    J = F => {
      F.preventDefault(), F.stopImmediatePropagation();
      const V = A === 'bottom' ? F.touches[0].clientY : F.touches[0].clientX;
      Q(F, V);
    },
    Q = (F, V) => {
      const ee = ur(w.current) === 'rtl';
      if ((F.stopPropagation(), !gn)) return;
      P &&
        ((z = w.current.getBoundingClientRect()),
        ee ? ((ne = z.right), (K = z.left)) : ((K = z.right), (ne = z.left)),
        (C = z.bottom),
        (P = !1));
      const ae = V;
      let Z = 0;
      A === 'end' || A === 'right'
        ? (Z = ee ? ae - K : K - ae)
        : A === 'start' || A === 'left'
          ? (Z = ee ? ne - ae : ae - ne)
          : (Z = C - ae),
        A === 'bottom' && (w.current.style.overflowAnchor = 'none'),
        w.current.style.setProperty(to.name, Z + 'px'),
        (G = Z),
        B(H());
    },
    re = F => {
      gn &&
        (S.current.classList.remove(R(He.modifiers.resizing)),
        (gn = !1),
        o && o(F, G, n),
        (P = !0),
        document.removeEventListener('mousemove', se),
        document.removeEventListener('mouseup', je));
    },
    te = F => {
      F.stopPropagation(),
        gn && ((gn = !1), o && o(F, G, n), document.removeEventListener('touchmove', Le), document.removeEventListener('touchend', de));
    },
    se = c.useCallback(Y, []),
    de = c.useCallback(te, []),
    Le = c.useCallback(J, []),
    je = c.useCallback(re, []),
    Me = F => {
      const V = ur(w.current) === 'rtl',
        ee = F.key;
      if (ee !== 'Escape' && ee !== 'Enter' && ee !== 'ArrowUp' && ee !== 'ArrowDown' && ee !== 'ArrowLeft' && ee !== 'ArrowRight') {
        gn && F.preventDefault();
        return;
      }
      F.preventDefault(), (ee === 'Escape' || ee === 'Enter') && o && o(F, G, n);
      const ae = w.current.getBoundingClientRect();
      Gr = A === 'bottom' ? ae.height : ae.width;
      let Z = 0;
      ee === 'ArrowRight'
        ? V
          ? (Z = A === 'left' || A === 'start' ? -d : d)
          : (Z = A === 'left' || A === 'start' ? d : -d)
        : ee === 'ArrowLeft'
          ? V
            ? (Z = A === 'left' || A === 'start' ? d : -d)
            : (Z = A === 'left' || A === 'start' ? -d : d)
          : ee === 'ArrowUp'
            ? (Z = d)
            : ee === 'ArrowDown' && (Z = -d),
        (Gr = Gr + Z),
        A === 'bottom' && (w.current.style.overflowAnchor = 'none'),
        w.current.style.setProperty(to.name, Gr + 'px'),
        (G = Gr),
        B(H());
    },
    Te = {};
  l && (Te[to.name] = l), s && (Te[Tv.name] = s), u && (Te[Pv.name] = u);
  const Xe = b?.enabled && !g,
    I = Xe ? Li : 'div';
  return c.createElement(Gn, { prefix: 'pf-drawer-panel-' }, F => {
    const V = {
      tabIndex: -1,
      'aria-modal': !0,
      role: 'dialog',
      active: U,
      'aria-labelledby': b?.['aria-labelledby'] || n || F,
      focusTrapOptions: {
        fallbackFocus: () => w.current,
        onActivate: () => {
          D.current !== document.activeElement && (D.current = document.activeElement);
        },
        onDeactivate: () => {
          D.current && D.current.focus && D.current.focus();
        },
        clickOutsideDeactivates: !0,
        returnFocusOnDeactivate: !1,
        initialFocus: b?.elementToFocusOnExpand || void 0,
        escapeDeactivates: !1,
      },
    };
    return c.createElement(
      I,
      Object.assign(
        {},
        Xe && V,
        {
          id: n || F,
          className: R(
            He.drawerPanel,
            i && He.modifiers.resizable,
            a && He.modifiers.noBorder,
            _n(f, He),
            h === On.light200 && He.modifiers.light_200,
            h === On.noBackground && He.modifiers.noBackground,
            t,
          ),
          onTransitionEnd: ee => {
            ee.target === w.current &&
              (!y && ee.nativeEvent.propertyName === 'transform' && m(ee),
              O(!y),
              Xe && ee.nativeEvent.propertyName === 'transform' && x(ae => !ae));
          },
          hidden: y,
        },
        (l || s || u) && { style: Te },
        v,
        { ref: w },
      ),
      _ &&
        c.createElement(
          c.Fragment,
          null,
          i &&
            c.createElement(
              c.Fragment,
              null,
              c.createElement(
                'div',
                {
                  className: R(He.drawerSplitter, A !== 'bottom' && He.modifiers.vertical),
                  role: 'separator',
                  tabIndex: 0,
                  'aria-orientation': A === 'bottom' ? 'horizontal' : 'vertical',
                  'aria-label': p,
                  'aria-valuenow': N,
                  'aria-valuemin': 0,
                  'aria-valuemax': 100,
                  'aria-controls': n || F,
                  onMouseDown: $,
                  onKeyDown: Me,
                  onTouchStart: q,
                  ref: T,
                },
                c.createElement('div', { className: R(He.drawerSplitterHandle), 'aria-hidden': !0 }),
              ),
              c.createElement('div', { className: R(He.drawerPanelMain) }, r),
            ),
          !i && r,
        ),
    );
  });
};
lu.displayName = 'DrawerPanelContent';
const Av = e => {
    var {
        children: t,
        className: n,
        onSelect: r,
        isOpen: a,
        toggle: i,
        shouldFocusToggleOnSelect: o = !1,
        onOpenChange: s,
        isPlain: l,
        isScrollable: u,
        innerRef: d,
        ouiaId: p,
        ouiaSafe: f = !0,
        zIndex: h = 9999,
        popperProps: b,
        onOpenChangeKeys: v = ['Escape', 'Tab'],
        menuHeight: w,
        maxMenuHeight: T,
      } = e,
      N = ie(e, [
        'children',
        'className',
        'onSelect',
        'isOpen',
        'toggle',
        'shouldFocusToggleOnSelect',
        'onOpenChange',
        'isPlain',
        'isScrollable',
        'innerRef',
        'ouiaId',
        'ouiaSafe',
        'zIndex',
        'popperProps',
        'onOpenChangeKeys',
        'menuHeight',
        'maxMenuHeight',
      ]);
    const B = pe.useRef(),
      A = pe.useRef(),
      L = In(bs.displayName, p, f),
      g = d || B,
      m = typeof i == 'function' || (typeof i != 'function' && !i.toggleRef) ? A : i?.toggleRef;
    pe.useEffect(() => {
      const k = _ => {
          var O, U, x;
          a &&
            s &&
            ((!((O = g.current) === null || O === void 0) && O.contains(_.target)) ||
              (!((U = m.current) === null || U === void 0) && U.contains(_.target))) &&
            v.includes(_.key) &&
            (s(!1), (x = m.current) === null || x === void 0 || x.focus());
        },
        y = _ => {
          var O, U, x;
          a &&
            !((O = m.current) === null || O === void 0) &&
            O.contains(_.target) &&
            setTimeout(() => {
              var D;
              const G =
                (D = g?.current) === null || D === void 0
                  ? void 0
                  : D.querySelector('li button:not(:disabled),li input:not(:disabled),li a:not([aria-disabled="true"])');
              G && G.focus();
            }, 0),
            a &&
              s &&
              !(!((U = m?.current) === null || U === void 0) && U.contains(_.target)) &&
              a &&
              !(!((x = g.current) === null || x === void 0) && x.contains(_.target)) &&
              s(!1);
        };
      return (
        window.addEventListener('keydown', k),
        window.addEventListener('click', y),
        () => {
          window.removeEventListener('keydown', k), window.removeEventListener('click', y);
        }
      );
    }, [a, g, m, s, v]);
    const S = T !== void 0 || w !== void 0 || u,
      E = pe.createElement(
        da,
        Object.assign(
          {
            className: R(n),
            ref: g,
            onSelect: (k, y) => {
              r && r(k, y), o && m.current.focus();
            },
            isPlain: l,
            isScrollable: S,
          },
          N,
          L,
        ),
        pe.createElement(ds, { menuHeight: w, maxMenuHeight: T }, t),
      );
    return pe.createElement(
      _r,
      Object.assign(
        { trigger: typeof i == 'function' ? i(m) : i.toggleNode, triggerRef: m, popper: E, popperRef: g, isVisible: a, zIndex: h },
        b,
      ),
    );
  },
  bs = pe.forwardRef((e, t) => pe.createElement(Av, Object.assign({ innerRef: t }, e)));
bs.displayName = 'Dropdown';
const Fv = e => {
    var {
        children: t,
        className: n,
        description: r,
        isDisabled: a,
        isAriaDisabled: i,
        value: o,
        onClick: s,
        ouiaId: l,
        ouiaSafe: u,
        innerRef: d,
        tooltipProps: p,
      } = e,
      f = ie(e, [
        'children',
        'className',
        'description',
        'isDisabled',
        'isAriaDisabled',
        'value',
        'onClick',
        'ouiaId',
        'ouiaSafe',
        'innerRef',
        'tooltipProps',
      ]);
    const h = In(fi.displayName, l, u);
    return pe.createElement(
      us,
      Object.assign(
        { className: R(n), description: r, isDisabled: a, isAriaDisabled: i, itemId: o, onClick: s, tooltipProps: p, ref: d },
        h,
        f,
      ),
      t,
    );
  },
  fi = pe.forwardRef((e, t) => pe.createElement(Fv, Object.assign({}, e, { innerRef: t })));
fi.displayName = 'DropdownItem';
const cu = e => {
  var { children: t, className: n } = e,
    r = ie(e, ['children', 'className']);
  return pe.createElement(fs, Object.assign({ className: R(n) }, r), t);
};
cu.displayName = 'DropdownList';
const en = {
    icon: 'pf-v5-c-icon',
    iconContent: 'pf-v5-c-icon__content',
    iconProgress: 'pf-v5-c-icon__progress',
    modifiers: {
      inline: 'pf-m-inline',
      sm: 'pf-m-sm',
      md: 'pf-m-md',
      lg: 'pf-m-lg',
      xl: 'pf-m-xl',
      inProgress: 'pf-m-in-progress',
      danger: 'pf-m-danger',
      warning: 'pf-m-warning',
      success: 'pf-m-success',
      info: 'pf-m-info',
      custom: 'pf-m-custom',
    },
    spinner: 'pf-v5-c-spinner',
  },
  pi = e => {
    var {
        children: t,
        className: n,
        progressIcon: r,
        size: a,
        iconSize: i,
        progressIconSize: o,
        status: s,
        isInline: l = !1,
        isInProgress: u = !1,
        defaultProgressArialabel: d = 'Loading...',
        shouldMirrorRTL: p = !1,
      } = e,
      f = ie(e, [
        'children',
        'className',
        'progressIcon',
        'size',
        'iconSize',
        'progressIconSize',
        'status',
        'isInline',
        'isInProgress',
        'defaultProgressArialabel',
        'shouldMirrorRTL',
      ]);
    const h = r ?? c.createElement(Er, { diameter: '1em', 'aria-label': d });
    return c.createElement(
      'span',
      Object.assign({ className: R(en.icon, l && en.modifiers.inline, u && en.modifiers.inProgress, en.modifiers[a], n) }, f),
      c.createElement('span', { className: R(en.iconContent, en.modifiers[i], en.modifiers[s], p && 'pf-v5-m-mirror-inline-rtl') }, t),
      u && c.createElement('span', { className: R(en.iconProgress, en.modifiers[o], n) }, h),
    );
  };
pi.displayName = 'Icon';
const yt = {
    dirRtl: 'pf-v5-m-dir-rtl',
    form: 'pf-v5-c-form',
    formActions: 'pf-v5-c-form__actions',
    formFieldGroup: 'pf-v5-c-form__field-group',
    formFieldGroupBody: 'pf-v5-c-form__field-group-body',
    formFieldGroupHeader: 'pf-v5-c-form__field-group-header',
    formFieldGroupHeaderActions: 'pf-v5-c-form__field-group-header-actions',
    formFieldGroupHeaderDescription: 'pf-v5-c-form__field-group-header-description',
    formFieldGroupHeaderMain: 'pf-v5-c-form__field-group-header-main',
    formFieldGroupHeaderTitle: 'pf-v5-c-form__field-group-header-title',
    formFieldGroupHeaderTitleText: 'pf-v5-c-form__field-group-header-title-text',
    formFieldGroupToggle: 'pf-v5-c-form__field-group-toggle',
    formFieldGroupToggleButton: 'pf-v5-c-form__field-group-toggle-button',
    formFieldGroupToggleIcon: 'pf-v5-c-form__field-group-toggle-icon',
    formFieldset: 'pf-v5-c-form__fieldset',
    formGroup: 'pf-v5-c-form__group',
    formGroupControl: 'pf-v5-c-form__group-control',
    formGroupLabel: 'pf-v5-c-form__group-label',
    formGroupLabelHelp: 'pf-v5-c-form__group-label-help',
    formGroupLabelInfo: 'pf-v5-c-form__group-label-info',
    formGroupLabelMain: 'pf-v5-c-form__group-label-main',
    formHelperText: 'pf-v5-c-form__helper-text',
    formHelperTextIcon: 'pf-v5-c-form__helper-text-icon',
    formLabel: 'pf-v5-c-form__label',
    formLabelRequired: 'pf-v5-c-form__label-required',
    formLabelText: 'pf-v5-c-form__label-text',
    formSection: 'pf-v5-c-form__section',
    formSectionTitle: 'pf-v5-c-form__section-title',
    modifiers: {
      horizontal: 'pf-m-horizontal',
      alignRight: 'pf-m-align-right',
      noPaddingTop: 'pf-m-no-padding-top',
      horizontalOnXs: 'pf-m-horizontal-on-xs',
      horizontalOnSm: 'pf-m-horizontal-on-sm',
      horizontalOnMd: 'pf-m-horizontal-on-md',
      horizontalOnLg: 'pf-m-horizontal-on-lg',
      horizontalOnXl: 'pf-m-horizontal-on-xl',
      horizontalOn_2xl: 'pf-m-horizontal-on-2xl',
      limitWidth: 'pf-m-limit-width',
      action: 'pf-m-action',
      info: 'pf-m-info',
      disabled: 'pf-m-disabled',
      inline: 'pf-m-inline',
      stack: 'pf-m-stack',
      error: 'pf-m-error',
      success: 'pf-m-success',
      warning: 'pf-m-warning',
      inactive: 'pf-m-inactive',
      hidden: 'pf-m-hidden',
      expanded: 'pf-m-expanded',
    },
    themeDark: 'pf-v5-theme-dark',
  },
  ys = e => {
    var {
        children: t = null,
        className: n = '',
        label: r,
        labelInfo: a,
        labelIcon: i,
        isRequired: o = !1,
        isInline: s = !1,
        hasNoPaddingTop: l = !1,
        isStack: u = !1,
        fieldId: d,
        role: p,
      } = e,
      f = ie(e, [
        'children',
        'className',
        'label',
        'labelInfo',
        'labelIcon',
        'isRequired',
        'isInline',
        'hasNoPaddingTop',
        'isStack',
        'fieldId',
        'role',
      ]);
    const h = p === 'group' || p === 'radiogroup',
      b = h ? 'span' : 'label',
      v = c.createElement(
        c.Fragment,
        null,
        c.createElement(
          b,
          Object.assign({ className: R(yt.formLabel) }, !h && { htmlFor: d }),
          c.createElement('span', { className: R(yt.formLabelText) }, r),
          o && c.createElement('span', { className: R(yt.formLabelRequired), 'aria-hidden': 'true' }, ' ', ud),
        ),
        ' ',
        c.isValidElement(i) && i,
      );
    return c.createElement(Gn, null, w =>
      c.createElement(
        'div',
        Object.assign({ className: R(yt.formGroup, n) }, p && { role: p }, h && { 'aria-labelledby': `${d || w}-legend` }, f),
        r &&
          c.createElement(
            'div',
            Object.assign(
              { className: R(yt.formGroupLabel, a && yt.modifiers.info, l && yt.modifiers.noPaddingTop) },
              h && { id: `${d || w}-legend` },
            ),
            a &&
              c.createElement(
                c.Fragment,
                null,
                c.createElement('div', { className: R(yt.formGroupLabelMain) }, v),
                c.createElement('div', { className: R(yt.formGroupLabelInfo) }, a),
              ),
            !a && v,
          ),
        c.createElement('div', { className: R(yt.formGroupControl, s && yt.modifiers.inline, u && yt.modifiers.stack) }, t),
      ),
    );
  };
ys.displayName = 'FormGroup';
const xs = e => {
  var { children: t = null, className: n = '' } = e,
    r = ie(e, ['children', 'className']);
  return c.createElement('div', Object.assign({ className: R(yt.formHelperText, n) }, r), t);
};
xs.displayName = 'FormHelperText';
const Rt = {
    button: 'pf-v5-c-button',
    chipGroupMain: 'pf-v5-c-chip-group__main',
    modifiers: { disabled: 'pf-m-disabled', plain: 'pf-m-plain', icon: 'pf-m-icon', hint: 'pf-m-hint' },
    textInputGroup: 'pf-v5-c-text-input-group',
    textInputGroupGroup: 'pf-v5-c-text-input-group__group',
    textInputGroupIcon: 'pf-v5-c-text-input-group__icon',
    textInputGroupMain: 'pf-v5-c-text-input-group__main',
    textInputGroupText: 'pf-v5-c-text-input-group__text',
    textInputGroupTextInput: 'pf-v5-c-text-input-group__text-input',
    textInputGroupUtilities: 'pf-v5-c-text-input-group__utilities',
    themeDark: 'pf-v5-theme-dark',
  },
  du = c.createContext({ isDisabled: !1 }),
  ws = e => {
    var { children: t, className: n, isDisabled: r, isPlain: a, innerRef: i } = e,
      o = ie(e, ['children', 'className', 'isDisabled', 'isPlain', 'innerRef']);
    const s = c.useRef(null),
      l = i || s;
    return c.createElement(
      du.Provider,
      { value: { isDisabled: r } },
      c.createElement(
        'div',
        Object.assign({ ref: l, className: R(Rt.textInputGroup, r && Rt.modifiers.disabled, a && Rt.modifiers.plain, n) }, o),
        t,
      ),
    );
  };
ws.displayName = 'TextInputGroup';
const Mv = e => {
    var {
        children: t,
        className: n,
        icon: r,
        type: a = 'text',
        hint: i,
        onChange: o = () => {},
        onFocus: s,
        onBlur: l,
        'aria-label': u = 'Type to filter',
        value: d,
        placeholder: p,
        innerRef: f,
        name: h,
        'aria-activedescendant': b,
        role: v,
        isExpanded: w,
        'aria-controls': T,
        inputId: N,
      } = e,
      B = ie(e, [
        'children',
        'className',
        'icon',
        'type',
        'hint',
        'onChange',
        'onFocus',
        'onBlur',
        'aria-label',
        'value',
        'placeholder',
        'innerRef',
        'name',
        'aria-activedescendant',
        'role',
        'isExpanded',
        'aria-controls',
        'inputId',
      ]);
    const { isDisabled: A } = c.useContext(du),
      L = c.useRef(null),
      g = f || L,
      m = S => {
        o(S, S.currentTarget.value);
      };
    return c.createElement(
      'div',
      Object.assign({ className: R(Rt.textInputGroupMain, r && Rt.modifiers.icon, n) }, B),
      t,
      c.createElement(
        'span',
        { className: R(Rt.textInputGroupText) },
        i &&
          c.createElement('input', {
            className: R(Rt.textInputGroupTextInput, Rt.modifiers.hint),
            type: 'text',
            disabled: !0,
            'aria-hidden': 'true',
            value: i,
            id: N,
          }),
        r && c.createElement('span', { className: R(Rt.textInputGroupIcon) }, r),
        c.createElement(
          'input',
          Object.assign(
            {
              ref: g,
              type: a,
              className: R(Rt.textInputGroupTextInput),
              'aria-label': u,
              disabled: A,
              onChange: m,
              onFocus: s,
              onBlur: l,
              value: d || '',
              placeholder: p,
              name: h,
              'aria-activedescendant': b,
              id: N,
            },
            v && { role: v },
            w !== void 0 && { 'aria-expanded': w },
            T && { 'aria-controls': T },
          ),
        ),
      ),
    );
  },
  Cs = c.forwardRef((e, t) => c.createElement(Mv, Object.assign({ innerRef: t }, e)));
Cs.displayName = 'TextInputGroupMain';
const Os = e => {
  var { children: t, className: n } = e,
    r = ie(e, ['children', 'className']);
  return c.createElement('div', Object.assign({ className: R(Rt.textInputGroupUtilities, n) }, r), t);
};
Os.displayName = 'TextInputGroupUtilities';
var Ql;
(function (e) {
  (e.horizontal = 'horizontal'), (e.vertical = 'vertical'), (e.both = 'both');
})(Ql || (Ql = {}));
var Zl;
(function (e) {
  (e.default = 'default'), (e.plain = 'plain');
})(Zl || (Zl = {}));
class _s extends c.Component {
  constructor(t) {
    super(t),
      (this.inputRef = c.createRef()),
      (this.setAutoHeight = n => {
        const r = n.parentElement;
        r.style.setProperty('height', 'inherit');
        const a = window.getComputedStyle(n),
          i =
            parseInt(a.getPropertyValue('border-top-width')) +
            parseInt(a.getPropertyValue('padding-top')) +
            n.scrollHeight +
            parseInt(a.getPropertyValue('padding-bottom')) +
            parseInt(a.getPropertyValue('border-bottom-width'));
        r.style.setProperty('height', `${i}px`);
      }),
      (this.handleChange = n => {
        const r = n.currentTarget;
        this.props.autoResize && bt && this.setAutoHeight(r), this.props.onChange && this.props.onChange(n, r.value);
      }),
      !t.id && !t['aria-label'] && console.error('TextArea: TextArea requires either an id or aria-label to be specified');
  }
  componentDidMount() {
    const t = this.props.innerRef || this.inputRef;
    if (this.props.autoResize && bt) {
      const n = t.current;
      this.setAutoHeight(n);
    }
  }
  render() {
    const t = this.props,
      {
        className: n,
        value: r,
        validated: a,
        isRequired: i,
        isDisabled: o,
        readOnlyVariant: s,
        resizeOrientation: l,
        innerRef: u,
        disabled: d,
        autoResize: p,
        onChange: f,
        onBlur: h,
        onFocus: b,
      } = t,
      v = ie(t, [
        'className',
        'value',
        'validated',
        'isRequired',
        'isDisabled',
        'readOnlyVariant',
        'resizeOrientation',
        'innerRef',
        'disabled',
        'autoResize',
        'onChange',
        'onBlur',
        'onFocus',
      ]),
      w = `resize${oi(l)}`,
      T = ['success', 'error', 'warning'].includes(a);
    return c.createElement(
      'span',
      {
        className: R(
          lt.formControl,
          s && lt.modifiers.readonly,
          s === 'plain' && lt.modifiers.plain,
          l && lt.modifiers[w],
          o && lt.modifiers.disabled,
          T && lt.modifiers[a],
          n,
        ),
      },
      c.createElement(
        'textarea',
        Object.assign(
          { onChange: this.handleChange, onFocus: b, onBlur: h },
          typeof this.props.defaultValue != 'string' && { value: r },
          { 'aria-invalid': a === gr.error, required: i, disabled: o || d, readOnly: !!s, ref: u || this.inputRef },
          v,
        ),
      ),
      T && c.createElement('span', { className: R(lt.formControlUtilities) }, c.createElement(Fo, { status: a })),
    );
  }
}
_s.displayName = 'TextArea';
_s.defaultProps = {
  innerRef: c.createRef(),
  className: '',
  isRequired: !1,
  isDisabled: !1,
  validated: 'default',
  resizeOrientation: 'both',
  'aria-label': null,
};
const uu = c.forwardRef((e, t) => c.createElement(_s, Object.assign({}, e, { innerRef: t })));
uu.displayName = 'TextArea';
const rt = {
    button: 'pf-v5-c-button',
    dirRtl: 'pf-v5-m-dir-rtl',
    jumpLinks: 'pf-v5-c-jump-links',
    jumpLinksItem: 'pf-v5-c-jump-links__item',
    jumpLinksLabel: 'pf-v5-c-jump-links__label',
    jumpLinksLink: 'pf-v5-c-jump-links__link',
    jumpLinksLinkText: 'pf-v5-c-jump-links__link-text',
    jumpLinksList: 'pf-v5-c-jump-links__list',
    jumpLinksMain: 'pf-v5-c-jump-links__main',
    jumpLinksToggle: 'pf-v5-c-jump-links__toggle',
    jumpLinksToggleIcon: 'pf-v5-c-jump-links__toggle-icon',
    jumpLinksToggleText: 'pf-v5-c-jump-links__toggle-text',
    modifiers: {
      center: 'pf-m-center',
      vertical: 'pf-m-vertical',
      expandable: 'pf-m-expandable',
      nonExpandable: 'pf-m-non-expandable',
      expandableOnSm: 'pf-m-expandable-on-sm',
      nonExpandableOnSm: 'pf-m-non-expandable-on-sm',
      expandableOnMd: 'pf-m-expandable-on-md',
      nonExpandableOnMd: 'pf-m-non-expandable-on-md',
      expandableOnLg: 'pf-m-expandable-on-lg',
      nonExpandableOnLg: 'pf-m-non-expandable-on-lg',
      expandableOnXl: 'pf-m-expandable-on-xl',
      nonExpandableOnXl: 'pf-m-non-expandable-on-xl',
      expandableOn_2xl: 'pf-m-expandable-on-2xl',
      nonExpandableOn_2xl: 'pf-m-non-expandable-on-2xl',
      expanded: 'pf-m-expanded',
      current: 'pf-m-current',
    },
  },
  Dv = {
    modifiers: {
      gutter: 'pf-m-gutter',
      panelRight: 'pf-m-panel-right',
      stack: 'pf-m-stack',
      split: 'pf-m-split',
      border: 'pf-m-border',
      padding: 'pf-m-padding',
      sticky: 'pf-m-sticky',
      static: 'pf-m-static',
      noBackground: 'pf-m-no-background',
      widthDefault: 'pf-m-width-default',
      width_25: 'pf-m-width-25',
      width_33: 'pf-m-width-33',
      width_50: 'pf-m-width-50',
      width_66: 'pf-m-width-66',
      width_75: 'pf-m-width-75',
      width_100: 'pf-m-width-100',
      widthDefaultOnSm: 'pf-m-width-default-on-sm',
      width_25OnSm: 'pf-m-width-25-on-sm',
      width_33OnSm: 'pf-m-width-33-on-sm',
      width_50OnSm: 'pf-m-width-50-on-sm',
      width_66OnSm: 'pf-m-width-66-on-sm',
      width_75OnSm: 'pf-m-width-75-on-sm',
      width_100OnSm: 'pf-m-width-100-on-sm',
      widthDefaultOnMd: 'pf-m-width-default-on-md',
      width_25OnMd: 'pf-m-width-25-on-md',
      width_33OnMd: 'pf-m-width-33-on-md',
      width_50OnMd: 'pf-m-width-50-on-md',
      width_66OnMd: 'pf-m-width-66-on-md',
      width_75OnMd: 'pf-m-width-75-on-md',
      width_100OnMd: 'pf-m-width-100-on-md',
      widthDefaultOnLg: 'pf-m-width-default-on-lg',
      width_25OnLg: 'pf-m-width-25-on-lg',
      width_33OnLg: 'pf-m-width-33-on-lg',
      width_50OnLg: 'pf-m-width-50-on-lg',
      width_66OnLg: 'pf-m-width-66-on-lg',
      width_75OnLg: 'pf-m-width-75-on-lg',
      width_100OnLg: 'pf-m-width-100-on-lg',
      widthDefaultOnXl: 'pf-m-width-default-on-xl',
      width_25OnXl: 'pf-m-width-25-on-xl',
      width_33OnXl: 'pf-m-width-33-on-xl',
      width_50OnXl: 'pf-m-width-50-on-xl',
      width_66OnXl: 'pf-m-width-66-on-xl',
      width_75OnXl: 'pf-m-width-75-on-xl',
      width_100OnXl: 'pf-m-width-100-on-xl',
      widthDefaultOn_2xl: 'pf-m-width-default-on-2xl',
      width_25On_2xl: 'pf-m-width-25-on-2xl',
      width_33On_2xl: 'pf-m-width-33-on-2xl',
      width_50On_2xl: 'pf-m-width-50-on-2xl',
      width_66On_2xl: 'pf-m-width-66-on-2xl',
      width_75On_2xl: 'pf-m-width-75-on-2xl',
      width_100On_2xl: 'pf-m-width-100-on-2xl',
    },
    sidebar: 'pf-v5-c-sidebar',
    sidebarContent: 'pf-v5-c-sidebar__content',
    sidebarMain: 'pf-v5-c-sidebar__main',
    sidebarPanel: 'pf-v5-c-sidebar__panel',
  },
  ua = e => {
    var { children: t, className: n } = e,
      r = ie(e, ['children', 'className']);
    return c.createElement('ul', Object.assign({ className: R(rt.jumpLinksList, n), role: 'list' }, r), t);
  };
ua.displayName = 'JumpLinksList';
const fa = e => {
  var { isActive: t, href: n, node: r, children: a, onClick: i, className: o } = e,
    s = ie(e, ['isActive', 'href', 'node', 'children', 'onClick', 'className']);
  const l = c.Children.toArray(a),
    u = l.filter(d => d.type === ua);
  return (
    (a = l.filter(d => d.type !== ua)),
    c.createElement(
      'li',
      Object.assign({ className: R(rt.jumpLinksItem, t && rt.modifiers.current, o) }, t && { 'aria-current': 'location' }, s),
      c.createElement(
        'a',
        { className: rt.jumpLinksLink, href: n, onClick: i },
        c.createElement('span', { className: rt.jumpLinksLinkText }, a),
      ),
      u,
    )
  );
};
fa.displayName = 'JumpLinksItem';
const jv = { name: '--pf-v5-c-jump-links__toggle--Display', value: 'none', var: 'var(--pf-v5-c-jump-links__toggle--Display)' },
  za = (e, t) => (
    c.Children.forEach(e, n => {
      if (bt && document.getElementById && document.querySelector && n.type === fa) {
        const r = n.props.node || n.props.href;
        typeof r == 'string'
          ? r.startsWith('#')
            ? t.push(document.getElementById(r.substr(1)))
            : t.push(document.querySelector(r))
          : r instanceof HTMLElement && t.push(r);
      }
      [c.Fragment, ua, fa].includes(n.type) && za(n.props.children, t);
    }),
    t
  );
function Bv(e) {
  return e && getComputedStyle(e).getPropertyValue(jv.name).includes('block');
}
const fu = e => {
  var {
      isCentered: t,
      isVertical: n,
      children: r,
      label: a,
      'aria-label': i = typeof a == 'string' ? a : null,
      scrollableRef: o,
      scrollableSelector: s,
      activeIndex: l = 0,
      offset: u = 0,
      expandable: d,
      isExpanded: p = !1,
      alwaysShowLabel: f = !0,
      toggleAriaLabel: h = 'Toggle jump links',
      className: b,
    } = e,
    v = ie(e, [
      'isCentered',
      'isVertical',
      'children',
      'label',
      'aria-label',
      'scrollableRef',
      'scrollableSelector',
      'activeIndex',
      'offset',
      'expandable',
      'isExpanded',
      'alwaysShowLabel',
      'toggleAriaLabel',
      'className',
    ]);
  const w = !!(o || s),
    [T, N] = c.useState(w ? za(r, []) : []),
    [B, A] = c.useState(l),
    [L, g] = c.useState(p),
    m = c.useRef(!1),
    S = c.useRef();
  let E;
  const k = () => {
      if (o) return o instanceof HTMLElement ? o : typeof o == 'function' ? o() : o.current;
      if (s) return document.querySelector(s);
    },
    y = c.useCallback(() => {
      if (!bt || !w || !(E instanceof HTMLElement)) return;
      if (m.current) {
        m.current = !1;
        return;
      }
      const U = Math.ceil(E.scrollTop + u);
      window.requestAnimationFrame(() => {
        let x = T;
        (x.every(z => !z?.offsetTop) || !x[0] || x.includes(null)) && ((x = za(r, [])), N(x));
        const G = x
          .map((z, K) => ({ y: z ? z.offsetTop : null, index: K }))
          .filter(({ y: z }) => z !== null)
          .sort((z, K) => K.y - z.y);
        for (const { y: z, index: K } of G) if (U >= z) return A(K);
      });
    }, [T, w, E, u]);
  c.useEffect(() => {
    if (((E = k()), E instanceof HTMLElement)) return E.addEventListener('scroll', y), () => E.removeEventListener('scroll', y);
  }, [E, y, k]),
    c.useEffect(() => {
      y();
    }, []);
  let _ = 0;
  const O = U =>
    w
      ? c.Children.map(U, x => {
          if (x.type === fa) {
            const { onClick: D, isActive: G } = x.props,
              z = _++,
              K = T[z];
            return c.cloneElement(x, {
              onClick(ne) {
                m.current = !0;
                let C;
                K || ((C = za(U, [])), N(C));
                const P = K || C[z];
                if (P) {
                  const H = k();
                  if (H instanceof HTMLElement) {
                    if (Bv(S.current)) {
                      S.current && S.current.classList.remove(rt.modifiers.expanded);
                      let q = S.current && S.current.parentElement;
                      for (; q && !q.classList.contains(Dv.modifiers.sticky); ) q = q.parentElement;
                      g(!1), q && (u += q.scrollHeight);
                    }
                    H.scrollTo(0, P.offsetTop - u);
                  }
                  P.focus(), window.history.pushState('', '', ne.currentTarget.href), ne.preventDefault(), A(z);
                }
                D && D(ne);
              },
              isActive: G || B === z,
              children: O(x.props.children),
            });
          } else {
            if (x.type === c.Fragment) return O(x.props.children);
            if (x.type === ua) return c.cloneElement(x, { children: O(x.props.children) });
          }
          return x;
        })
      : U;
  return c.createElement(
    'nav',
    Object.assign(
      {
        className: R(rt.jumpLinks, t && rt.modifiers.center, n && rt.modifiers.vertical, _n(d, rt), L && rt.modifiers.expanded, b),
        'aria-label': i,
        ref: S,
      },
      v,
    ),
    c.createElement(
      'div',
      { className: rt.jumpLinksMain },
      c.createElement(
        'div',
        { className: R(`${rt.jumpLinks}__header`) },
        d &&
          c.createElement(
            'div',
            { className: rt.jumpLinksToggle },
            c.createElement(
              Ke,
              { variant: 'plain', onClick: () => g(!L), 'aria-label': h, 'aria-expanded': L },
              c.createElement('span', { className: rt.jumpLinksToggleIcon }, c.createElement(qn, null)),
              a && c.createElement('span', { className: R(rt.jumpLinksToggleText) }, ' ', a, ' '),
            ),
          ),
        a && f && c.createElement('div', { className: R(rt.jumpLinksLabel) }, a),
      ),
      c.createElement('ul', { className: rt.jumpLinksList, role: 'list' }, O(r)),
    ),
  );
};
fu.displayName = 'JumpLinks';
const Uv = {
    name: 'EyeSlashIcon',
    height: 512,
    width: 640,
    svgPath:
      'M320 400c-75.85 0-137.25-58.71-142.9-133.11L72.2 185.82c-13.79 17.3-26.48 35.59-36.72 55.59a32.35 32.35 0 0 0 0 29.19C89.71 376.41 197.07 448 320 448c26.91 0 52.87-4 77.89-10.46L346 397.39a144.13 144.13 0 0 1-26 2.61zm313.82 58.1l-110.55-85.44a331.25 331.25 0 0 0 81.25-102.07 32.35 32.35 0 0 0 0-29.19C550.29 135.59 442.93 64 320 64a308.15 308.15 0 0 0-147.32 37.7L45.46 3.37A16 16 0 0 0 23 6.18L3.37 31.45A16 16 0 0 0 6.18 53.9l588.36 454.73a16 16 0 0 0 22.46-2.81l19.64-25.27a16 16 0 0 0-2.82-22.45zm-183.72-142l-39.3-30.38A94.75 94.75 0 0 0 416 256a94.76 94.76 0 0 0-121.31-92.21A47.65 47.65 0 0 1 304 192a46.64 46.64 0 0 1-1.54 10l-73.61-56.89A142.31 142.31 0 0 1 320 112a143.92 143.92 0 0 1 144 144c0 21.63-5.29 41.79-13.9 60.11z',
    yOffset: 0,
    xOffset: 0,
  },
  Vv = ke(Uv),
  Hv = {
    name: 'EyeIcon',
    height: 512,
    width: 576,
    svgPath:
      'M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z',
    yOffset: 0,
    xOffset: 0,
  },
  $v = ke(Hv),
  zv = {
    isManagedSidebar: !1,
    isSidebarOpen: !1,
    onSidebarToggle: () => null,
    width: null,
    height: null,
    getBreakpoint: dd,
    getVerticalBreakpoint: cd,
  },
  Tr = c.createContext(zv),
  Wv = Tr.Provider,
  pu = Tr.Consumer,
  Ne = {
    dirRtl: 'pf-v5-m-dir-rtl',
    divider: 'pf-v5-c-divider',
    menu: 'pf-v5-c-menu',
    menuContent: 'pf-v5-c-menu__content',
    menuItem: 'pf-v5-c-menu__item',
    menuItemToggleIcon: 'pf-v5-c-menu__item-toggle-icon',
    menuListItem: 'pf-v5-c-menu__list-item',
    modifiers: {
      flyout: 'pf-m-flyout',
      top: 'pf-m-top',
      left: 'pf-m-left',
      current: 'pf-m-current',
      drillUp: 'pf-m-drill-up',
      horizontal: 'pf-m-horizontal',
      tertiary: 'pf-m-tertiary',
      horizontalSubnav: 'pf-m-horizontal-subnav',
      light: 'pf-m-light',
      scrollable: 'pf-m-scrollable',
      overflowHidden: 'pf-m-overflow-hidden',
      expandable: 'pf-m-expandable',
      expanded: 'pf-m-expanded',
      drilldown: 'pf-m-drilldown',
      hover: 'pf-m-hover',
      start: 'pf-m-start',
    },
    nav: 'pf-v5-c-nav',
    navItem: 'pf-v5-c-nav__item',
    navLink: 'pf-v5-c-nav__link',
    navList: 'pf-v5-c-nav__list',
    navScrollButton: 'pf-v5-c-nav__scroll-button',
    navSection: 'pf-v5-c-nav__section',
    navSectionTitle: 'pf-v5-c-nav__section-title',
    navSubnav: 'pf-v5-c-nav__subnav',
    navToggle: 'pf-v5-c-nav__toggle',
    navToggleIcon: 'pf-v5-c-nav__toggle-icon',
    themeDark: 'pf-v5-theme-dark',
  },
  Gv = {},
  br = c.createContext(Gv);
class yr extends c.Component {
  constructor() {
    super(...arguments),
      (this.state = { isScrollable: !1, ouiaStateId: Jt(yr.displayName, this.props.variant), flyoutRef: null }),
      (this.navRef = c.createRef());
  }
  onSelect(t, n, r, a, i, o) {
    i && t.preventDefault(), this.props.onSelect(t, { groupId: n, itemId: r, to: a }), o && o(t, r, n, a);
  }
  onToggle(t, n, r) {
    this.props.onToggle(t, { groupId: n, isExpanded: r });
  }
  render() {
    const t = this.props,
      { 'aria-label': n, children: r, className: a, onSelect: i, onToggle: o, theme: s, ouiaId: l, ouiaSafe: u, variant: d } = t,
      p = ie(t, ['aria-label', 'children', 'className', 'onSelect', 'onToggle', 'theme', 'ouiaId', 'ouiaSafe', 'variant']),
      f = ['horizontal', 'tertiary'].includes(d);
    return c.createElement(
      br.Provider,
      {
        value: {
          onSelect: (h, b, v, w, T, N) => this.onSelect(h, b, v, w, T, N),
          onToggle: (h, b, v) => this.onToggle(h, b, v),
          updateIsScrollable: h => this.setState({ isScrollable: h }),
          isHorizontal: ['horizontal', 'tertiary', 'horizontal-subnav'].includes(d),
          flyoutRef: this.state.flyoutRef,
          setFlyoutRef: h => this.setState({ flyoutRef: h }),
          navRef: this.navRef,
        },
      },
      c.createElement(
        'nav',
        Object.assign(
          {
            className: R(
              Ne.nav,
              s === 'light' && Ne.modifiers.light,
              f && Ne.modifiers.horizontal,
              d === 'tertiary' && Ne.modifiers.tertiary,
              d === 'horizontal-subnav' && Ne.modifiers.horizontalSubnav,
              this.state.isScrollable && Ne.modifiers.scrollable,
              a,
            ),
            'aria-label': n || (['tertiary', 'horizontal-subnav'].includes(d) ? 'Local' : 'Global'),
            ref: this.navRef,
          },
          At(yr.displayName, l !== void 0 ? l : this.state.ouiaStateId, u),
          p,
        ),
        r,
      ),
    );
  }
}
yr.displayName = 'Nav';
yr.defaultProps = { onSelect: () => {}, onToggle: () => {}, theme: 'dark', ouiaSafe: !0 };
const he = {
    avatar: 'pf-v5-c-avatar',
    brand: 'pf-v5-c-brand',
    button: 'pf-v5-c-button',
    contextSelector: 'pf-v5-c-context-selector',
    dirRtl: 'pf-v5-m-dir-rtl',
    drawer: 'pf-v5-c-drawer',
    masthead: 'pf-v5-c-masthead',
    modifiers: {
      light: 'pf-m-light',
      menu: 'pf-m-menu',
      hidden: 'pf-m-hidden',
      hiddenOnSm: 'pf-m-hidden-on-sm',
      visibleOnSm: 'pf-m-visible-on-sm',
      hiddenOnMd: 'pf-m-hidden-on-md',
      visibleOnMd: 'pf-m-visible-on-md',
      hiddenOnLg: 'pf-m-hidden-on-lg',
      visibleOnLg: 'pf-m-visible-on-lg',
      hiddenOnXl: 'pf-m-hidden-on-xl',
      visibleOnXl: 'pf-m-visible-on-xl',
      hiddenOn_2xl: 'pf-m-hidden-on-2xl',
      visibleOn_2xl: 'pf-m-visible-on-2xl',
      read: 'pf-m-read',
      selected: 'pf-m-selected',
      unread: 'pf-m-unread',
      attention: 'pf-m-attention',
      expanded: 'pf-m-expanded',
      collapsed: 'pf-m-collapsed',
      pageInsets: 'pf-m-page-insets',
      insetNone: 'pf-m-inset-none',
      fill: 'pf-m-fill',
      noFill: 'pf-m-no-fill',
      limitWidth: 'pf-m-limit-width',
      alignCenter: 'pf-m-align-center',
      overflowScroll: 'pf-m-overflow-scroll',
      shadowBottom: 'pf-m-shadow-bottom',
      shadowTop: 'pf-m-shadow-top',
      stickyTop: 'pf-m-sticky-top',
      stickyBottom: 'pf-m-sticky-bottom',
      stickyTopOnSmHeight: 'pf-m-sticky-top-on-sm-height',
      stickyBottomOnSmHeight: 'pf-m-sticky-bottom-on-sm-height',
      stickyTopOnMdHeight: 'pf-m-sticky-top-on-md-height',
      stickyBottomOnMdHeight: 'pf-m-sticky-bottom-on-md-height',
      stickyTopOnLgHeight: 'pf-m-sticky-top-on-lg-height',
      stickyBottomOnLgHeight: 'pf-m-sticky-bottom-on-lg-height',
      stickyTopOnXlHeight: 'pf-m-sticky-top-on-xl-height',
      stickyBottomOnXlHeight: 'pf-m-sticky-bottom-on-xl-height',
      stickyTopOn_2xlHeight: 'pf-m-sticky-top-on-2xl-height',
      stickyBottomOn_2xlHeight: 'pf-m-sticky-bottom-on-2xl-height',
      light_100: 'pf-m-light-100',
      dark_100: 'pf-m-dark-100',
      dark_200: 'pf-m-dark-200',
      padding: 'pf-m-padding',
      noPadding: 'pf-m-no-padding',
      paddingOnSm: 'pf-m-padding-on-sm',
      noPaddingOnSm: 'pf-m-no-padding-on-sm',
      paddingOnMd: 'pf-m-padding-on-md',
      noPaddingOnMd: 'pf-m-no-padding-on-md',
      paddingOnLg: 'pf-m-padding-on-lg',
      noPaddingOnLg: 'pf-m-no-padding-on-lg',
      paddingOnXl: 'pf-m-padding-on-xl',
      noPaddingOnXl: 'pf-m-no-padding-on-xl',
      paddingOn_2xl: 'pf-m-padding-on-2xl',
      noPaddingOn_2xl: 'pf-m-no-padding-on-2xl',
      light_200: 'pf-m-light-200',
    },
    nav: 'pf-v5-c-nav',
    notificationBadge: 'pf-v5-c-notification-badge',
    page: 'pf-v5-c-page',
    pageDrawer: 'pf-v5-c-page__drawer',
    pageHeader: 'pf-v5-c-page__header',
    pageHeaderBrand: 'pf-v5-c-page__header-brand',
    pageHeaderBrandLink: 'pf-v5-c-page__header-brand-link',
    pageHeaderBrandToggle: 'pf-v5-c-page__header-brand-toggle',
    pageHeaderNav: 'pf-v5-c-page__header-nav',
    pageHeaderTools: 'pf-v5-c-page__header-tools',
    pageHeaderToolsGroup: 'pf-v5-c-page__header-tools-group',
    pageHeaderToolsItem: 'pf-v5-c-page__header-tools-item',
    pageMain: 'pf-v5-c-page__main',
    pageMainBody: 'pf-v5-c-page__main-body',
    pageMainBreadcrumb: 'pf-v5-c-page__main-breadcrumb',
    pageMainDrawer: 'pf-v5-c-page__main-drawer',
    pageMainGroup: 'pf-v5-c-page__main-group',
    pageMainNav: 'pf-v5-c-page__main-nav',
    pageMainSection: 'pf-v5-c-page__main-section',
    pageMainSubnav: 'pf-v5-c-page__main-subnav',
    pageMainTabs: 'pf-v5-c-page__main-tabs',
    pageMainWizard: 'pf-v5-c-page__main-wizard',
    pageSidebar: 'pf-v5-c-page__sidebar',
    pageSidebarBody: 'pf-v5-c-page__sidebar-body',
    themeDark: 'pf-v5-theme-dark',
  },
  qv = { isSidebarOpen: !0 },
  Pi = c.createContext(qv),
  mu = e => {
    var { className: t = '', children: n, isSidebarOpen: r = !0, theme: a = 'dark', id: i = 'page-sidebar' } = e,
      o = ie(e, ['className', 'children', 'isSidebarOpen', 'theme', 'id']);
    return c.createElement(pu, null, ({ isManagedSidebar: s, isSidebarOpen: l }) => {
      const u = s ? l : r;
      return c.createElement(
        'div',
        Object.assign(
          {
            id: i,
            className: R(he.pageSidebar, a === 'light' && he.modifiers.light, u && he.modifiers.expanded, !u && he.modifiers.collapsed, t),
            'aria-hidden': !u,
          },
          o,
        ),
        c.createElement(Pi.Provider, { value: { isSidebarOpen: u } }, n),
      );
    });
  };
mu.displayName = 'PageSidebar';
class Ai extends c.Component {
  constructor() {
    super(...arguments),
      (this.direction = 'ltr'),
      (this.state = { scrollViewAtStart: !1, scrollViewAtEnd: !1 }),
      (this.navList = c.createRef()),
      (this.observer = () => {}),
      (this.handleScrollButtons = () => {
        const t = this.navList.current;
        if (t) {
          const n = Fa(t, t.firstChild),
            r = Fa(t, t.lastChild);
          this.setState({ scrollViewAtStart: n, scrollViewAtEnd: r }), this.context.updateIsScrollable(!n || !r);
        }
      }),
      (this.scrollBack = () => {
        const t = this.navList.current;
        if (t) {
          const n = Array.from(t.children);
          let r, a;
          for (let i = 0; i < n.length && !r; i++) Fa(t, n[i]) && ((r = n[i]), (a = n[i - 1]));
          a && (this.direction === 'ltr' ? (t.scrollLeft -= a.scrollWidth) : (t.scrollLeft += a.scrollWidth)), this.handleScrollButtons();
        }
      }),
      (this.scrollForward = () => {
        const t = this.navList.current;
        if (t) {
          const n = Array.from(t.children);
          let r, a;
          for (let i = n.length - 1; i >= 0 && !r; i--) Fa(t, n[i]) && ((r = n[i]), (a = n[i + 1]));
          a && (this.direction === 'ltr' ? (t.scrollLeft += a.scrollWidth) : (t.scrollLeft -= a.scrollWidth)), this.handleScrollButtons();
        }
      });
  }
  componentDidMount() {
    (this.observer = is(this.navList.current, this.handleScrollButtons, !0)),
      (this.direction = ur(this.navList.current)),
      this.handleScrollButtons();
  }
  componentWillUnmount() {
    this.observer();
  }
  componentDidUpdate() {
    this.direction = ur(this.navList.current);
  }
  render() {
    const t = this.props,
      { children: n, className: r, ariaLeftScroll: a, ariaRightScroll: i, backScrollAriaLabel: o, forwardScrollAriaLabel: s } = t,
      l = ie(t, ['children', 'className', 'ariaLeftScroll', 'ariaRightScroll', 'backScrollAriaLabel', 'forwardScrollAriaLabel']),
      { scrollViewAtStart: u, scrollViewAtEnd: d } = this.state;
    return c.createElement(br.Consumer, null, ({ isHorizontal: p }) =>
      c.createElement(Pi.Consumer, null, ({ isSidebarOpen: f }) =>
        c.createElement(
          c.Fragment,
          null,
          p &&
            c.createElement(
              'button',
              { className: R(Ne.navScrollButton), 'aria-label': o || a, onClick: this.scrollBack, disabled: u, tabIndex: f ? null : -1 },
              c.createElement(jd, null),
            ),
          c.createElement(
            'ul',
            Object.assign({ ref: this.navList, className: R(Ne.navList, r), onScroll: this.handleScrollButtons, role: 'list' }, l),
            n,
          ),
          p &&
            c.createElement(
              'button',
              { className: R(Ne.navScrollButton), 'aria-label': s || i, onClick: this.scrollForward, disabled: d, tabIndex: f ? null : -1 },
              c.createElement(qn, null),
            ),
        ),
      ),
    );
  }
}
Ai.displayName = 'NavList';
Ai.contextType = br;
Ai.defaultProps = {
  ariaLeftScroll: 'Scroll left',
  backScrollAriaLabel: 'Scroll back',
  ariaRightScroll: 'Scroll right',
  forwardScrollAriaLabel: 'Scroll foward',
};
const Es = e => {
  var {
      children: t,
      styleChildren: n = !0,
      className: r,
      to: a,
      isActive: i = !1,
      groupId: o = null,
      itemId: s = null,
      preventDefault: l = !1,
      onClick: u,
      component: d = 'a',
      flyout: p,
      onShowFlyout: f,
      ouiaId: h,
      ouiaSafe: b,
      zIndex: v = 9999,
      hasNavLinkWrapper: w,
    } = e,
    T = ie(e, [
      'children',
      'styleChildren',
      'className',
      'to',
      'isActive',
      'groupId',
      'itemId',
      'preventDefault',
      'onClick',
      'component',
      'flyout',
      'onShowFlyout',
      'ouiaId',
      'ouiaSafe',
      'zIndex',
      'hasNavLinkWrapper',
    ]);
  const { flyoutRef: N, setFlyoutRef: B, navRef: A } = c.useContext(br),
    { isSidebarOpen: L } = c.useContext(Pi),
    [g, m] = c.useState(null),
    [S, E] = c.useState(!1),
    k = c.useRef(),
    y = k === N,
    _ = c.useRef(),
    O = p !== void 0,
    U = O ? 'button' : d;
  a && O && console.error('NavItem cannot have both "to" and "flyout" props.');
  const x = (re, te) => {
      (!y || te) && re ? B(k) : (y || te) && !re && B(null), f && re && f();
    },
    D = re => {
      const te = re.target.closest(`.${Ne.navItem}.pf-m-flyout`);
      O && !y ? x(!0) : N !== null && !te && B(null);
    },
    G = re => {
      re.target.closest('.pf-m-flyout') || (O ? x(!1, !0) : N !== null && B(null));
    },
    z = re => {
      var te, se;
      const de = re.key,
        Le = re.target;
      (de === ' ' || de === 'Enter' || de === 'ArrowRight') &&
        O &&
        !((te = k?.current) === null || te === void 0) &&
        te.contains(Le) &&
        (re.stopPropagation(), re.preventDefault(), y || (x(!0), m(Le))),
        (de === 'Escape' || de === 'ArrowLeft') &&
          ((se = _?.current) === null || se === void 0 ? void 0 : se.querySelectorAll(`.${Ne.menu}`).length) === 1 &&
          y &&
          (re.stopPropagation(), re.preventDefault(), x(!1));
    };
  c.useEffect(
    () => (
      O && window.addEventListener('click', G),
      () => {
        O && window.removeEventListener('click', G);
      }
    ),
    [],
  ),
    c.useEffect(() => {
      g &&
        (y
          ? Array.from(_.current.getElementsByTagName('UL')[0].children)
              .filter(te => !(te.classList.contains('pf-m-disabled') || te.classList.contains(Ne.divider)))[0]
              .firstChild.focus()
          : g.focus());
    }, [y, g]);
  const K = c.createElement(
      'span',
      { className: R(Ne.navToggle) },
      c.createElement('span', { className: R(Ne.navToggleIcon) }, c.createElement(qn, { 'aria-hidden': !0 })),
    ),
    ne = { 'aria-haspopup': 'menu', 'aria-expanded': y },
    C = L ? null : -1,
    P = re => {
      const te = l || !a;
      return c.createElement(
        U,
        Object.assign(
          {
            href: a,
            onClick: se => re.onSelect(se, o, s, a, te, u),
            className: R(Ne.navLink, i && Ne.modifiers.current, S && Ne.modifiers.hover, r),
            'aria-current': i ? 'page' : null,
            tabIndex: C,
          },
          O && Object.assign({}, ne),
          T,
        ),
        w ? c.createElement('span', { className: R(`${Ne.nav}__link-text`) }, t) : t,
        p && K,
      );
    },
    H = (re, te) =>
      c.cloneElement(
        te,
        Object.assign(
          Object.assign(
            { onClick: se => re.onSelect(se, o, s, a, l, u), 'aria-current': i ? 'page' : null },
            n && { className: R(Ne.navLink, i && Ne.modifiers.current, te.props && te.props.className) },
          ),
          { tabIndex: te.props.tabIndex || C, children: O ? c.createElement(c.Fragment, null, te.props.children, K) : te.props.children },
        ),
      ),
    q = In(Es.displayName, h, b),
    $ = () => {
      E(!0);
    },
    Y = () => {
      E(!1);
    },
    J = c.createElement(_r, {
      triggerRef: k,
      popper: c.createElement('div', { ref: _, onMouseEnter: $, onMouseLeave: Y }, p),
      popperRef: _,
      placement: 'right-start',
      isVisible: y,
      onDocumentKeyDown: z,
      zIndex: v,
      appendTo: A?.current,
    });
  return c.createElement(
    c.Fragment,
    null,
    c.createElement(
      'li',
      Object.assign({ onMouseOver: D, className: R(Ne.navItem, O && Ne.modifiers.flyout, r), ref: k }, q),
      c.createElement(br.Consumer, null, re => (c.isValidElement(t) ? H(re, t) : P(re))),
    ),
    p && J,
  );
};
Es.displayName = 'NavItem';
class xr extends c.Component {
  constructor() {
    super(...arguments),
      (this.id = this.props.id || Jo()),
      (this.state = { expandedState: this.props.isExpanded, ouiaStateId: Jt(xr.displayName) }),
      (this.onExpand = (t, n) => {
        const { expandedState: r } = this.state;
        if (this.props.onExpand) this.props.onExpand(t, !r);
        else {
          this.setState(i => ({ expandedState: !i.expandedState }));
          const { groupId: a } = this.props;
          n(t, a, !r);
        }
      });
  }
  componentDidMount() {
    this.setState({ expandedState: this.props.isExpanded });
  }
  componentDidUpdate(t) {
    this.props.isExpanded !== t.isExpanded && this.setState({ expandedState: this.props.isExpanded });
  }
  render() {
    const t = this.props,
      {
        title: n,
        srText: r,
        children: a,
        className: i,
        isActive: o,
        ouiaId: s,
        groupId: l,
        id: u,
        isExpanded: d,
        buttonProps: p,
        onExpand: f,
      } = t,
      h = ie(t, [
        'title',
        'srText',
        'children',
        'className',
        'isActive',
        'ouiaId',
        'groupId',
        'id',
        'isExpanded',
        'buttonProps',
        'onExpand',
      ]),
      { expandedState: b, ouiaStateId: v } = this.state;
    return c.createElement(br.Consumer, null, w =>
      c.createElement(
        'li',
        Object.assign(
          { className: R(Ne.navItem, Ne.modifiers.expandable, b && Ne.modifiers.expanded, o && Ne.modifiers.current, i) },
          At(xr.displayName, s !== void 0 ? s : v),
          h,
        ),
        c.createElement(Pi.Consumer, null, ({ isSidebarOpen: T }) =>
          c.createElement(
            'button',
            Object.assign(
              {
                className: R(Ne.navLink),
                id: r ? null : this.id,
                onClick: N => this.onExpand(N, w.onToggle),
                'aria-expanded': b,
                tabIndex: T ? null : -1,
              },
              p,
            ),
            typeof n != 'string' ? c.createElement('span', { className: R(`${Ne.nav}__link-text`) }, n) : n,
            c.createElement(
              'span',
              { className: R(Ne.navToggle) },
              c.createElement('span', { className: R(Ne.navToggleIcon) }, c.createElement(qn, { 'aria-hidden': 'true' })),
            ),
          ),
        ),
        c.createElement(
          'section',
          { className: R(Ne.navSubnav), 'aria-labelledby': this.id, hidden: b ? null : !0 },
          r && c.createElement('h2', { className: 'pf-v5-screen-reader', id: this.id }, r),
          c.createElement('ul', { className: R(Ne.navList), role: 'list' }, a),
        ),
      ),
    );
  }
}
xr.displayName = 'NavExpandable';
xr.defaultProps = { srText: '', isExpanded: !1, children: '', className: '', groupId: null, isActive: !1, id: '' };
const Ss = e => {
  var { children: t, className: n = '', isVisited: r = !1 } = e,
    a = ie(e, ['children', 'className', 'isVisited']);
  return c.createElement('div', Object.assign({}, a, { className: R(ko.content, r && ko.modifiers.visited, n) }), t);
};
Ss.displayName = 'TextContent';
var wr;
(function (e) {
  (e.h1 = 'h1'),
    (e.h2 = 'h2'),
    (e.h3 = 'h3'),
    (e.h4 = 'h4'),
    (e.h5 = 'h5'),
    (e.h6 = 'h6'),
    (e.p = 'p'),
    (e.a = 'a'),
    (e.small = 'small'),
    (e.blockquote = 'blockquote'),
    (e.pre = 'pre');
})(wr || (wr = {}));
const $n = e => {
  var { children: t = null, className: n = '', component: r = wr.p, isVisitedLink: a = !1, ouiaId: i, ouiaSafe: o = !0 } = e,
    s = ie(e, ['children', 'className', 'component', 'isVisitedLink', 'ouiaId', 'ouiaSafe']);
  const l = r,
    u = In($n.displayName, i, o);
  return c.createElement(
    l,
    Object.assign({}, u, s, { 'data-pf-content': !0, className: R(a && r === wr.a && ko.modifiers.visited, n) }),
    t,
  );
};
$n.displayName = 'Text';
const hu = e => {
  var {
      className: t = '',
      children: n,
      stickyOnBreakpoint: r,
      hasShadowTop: a = !1,
      hasShadowBottom: i = !1,
      hasOverflowScroll: o = !1,
      'aria-label': s,
    } = e,
    l = ie(e, ['className', 'children', 'stickyOnBreakpoint', 'hasShadowTop', 'hasShadowBottom', 'hasOverflowScroll', 'aria-label']);
  const { height: u, getVerticalBreakpoint: d } = c.useContext(Tr);
  return (
    c.useEffect(() => {
      o && !s && console.warn('PageGroup: An accessible aria-label is required when hasOverflowScroll is set to true.');
    }, [o, s]),
    c.createElement(
      'div',
      Object.assign(
        {},
        l,
        {
          className: R(
            he.pageMainGroup,
            _n(r, he, 'sticky-', d(u), !0),
            a && he.modifiers.shadowTop,
            i && he.modifiers.shadowBottom,
            o && he.modifiers.overflowScroll,
            t,
          ),
        },
        o && { tabIndex: 0, role: 'region', 'aria-label': s },
      ),
      n,
    )
  );
};
hu.displayName = 'PageGroup';
var ec;
(function (e) {
  (e.vertical = 'vertical'), (e.horizontal = 'horizontal');
})(ec || (ec = {}));
class _a extends c.Component {
  constructor(t) {
    super(t),
      (this.mainRef = c.createRef()),
      (this.pageRef = c.createRef()),
      (this.observer = () => {}),
      (this.getWindowWidth = () => (bt ? (this.pageRef.current ? this.pageRef.current.clientWidth : window.innerWidth) : 1200)),
      (this.isMobile = () => this.getWindowWidth() < Number.parseInt(nd.value, 10)),
      (this.resize = i => {
        var o;
        const { onPageResize: s } = this.props,
          l = this.isMobile();
        if (
          (s && s(i, { mobileView: l, windowSize: this.getWindowWidth() }),
          l !== this.state.mobileView && this.setState({ mobileView: l }),
          !((o = this.pageRef) === null || o === void 0) && o.current)
        ) {
          const u = this.pageRef.current.clientWidth,
            d = this.pageRef.current.clientHeight;
          this.state.width !== u && this.setState({ width: u }), this.state.height !== d && this.setState({ height: d });
        }
      }),
      (this.handleResize = wh(this.resize, 250)),
      (this.handleMainClick = () => {
        this.isMobile() && this.state.mobileIsSidebarOpen && this.mainRef.current && this.setState({ mobileIsSidebarOpen: !1 });
      }),
      (this.onSidebarToggleMobile = () => {
        this.setState(i => ({ mobileIsSidebarOpen: !i.mobileIsSidebarOpen }));
      }),
      (this.onSidebarToggleDesktop = () => {
        this.setState(i => ({ desktopIsSidebarOpen: !i.desktopIsSidebarOpen }));
      });
    const { isManagedSidebar: n, defaultManagedSidebarIsOpen: r } = t,
      a = n ? r : !0;
    this.state = { desktopIsSidebarOpen: a, mobileIsSidebarOpen: !1, mobileView: !1, width: null, height: null };
  }
  componentDidMount() {
    const { isManagedSidebar: t, onPageResize: n } = this.props;
    if (t || n) {
      this.observer = is(this.pageRef.current, this.handleResize);
      const r = this.mainRef.current;
      r && (r.addEventListener('mousedown', this.handleMainClick), r.addEventListener('touchstart', this.handleMainClick)), this.resize();
    }
  }
  componentWillUnmount() {
    const { isManagedSidebar: t, onPageResize: n } = this.props;
    if (t || n) {
      this.observer();
      const r = this.mainRef.current;
      r && (r.removeEventListener('mousedown', this.handleMainClick), r.removeEventListener('touchstart', this.handleMainClick));
    }
  }
  render() {
    const t = this.props,
      {
        breadcrumb: n,
        isBreadcrumbWidthLimited: r,
        className: a,
        children: i,
        header: o,
        sidebar: s,
        notificationDrawer: l,
        isNotificationDrawerExpanded: u,
        onNotificationDrawerExpand: d,
        isTertiaryNavWidthLimited: p,
        skipToContent: f,
        role: h,
        mainContainerId: b,
        isManagedSidebar: v,
        defaultManagedSidebarIsOpen: w,
        onPageResize: T,
        getBreakpoint: N,
        getVerticalBreakpoint: B,
        mainAriaLabel: A,
        mainTabIndex: L,
        mainComponent: g,
        tertiaryNav: m,
        isTertiaryNavGrouped: S,
        isBreadcrumbGrouped: E,
        additionalGroupedContent: k,
        groupProps: y,
        breadcrumbProps: _,
      } = t,
      O = ie(t, [
        'breadcrumb',
        'isBreadcrumbWidthLimited',
        'className',
        'children',
        'header',
        'sidebar',
        'notificationDrawer',
        'isNotificationDrawerExpanded',
        'onNotificationDrawerExpand',
        'isTertiaryNavWidthLimited',
        'skipToContent',
        'role',
        'mainContainerId',
        'isManagedSidebar',
        'defaultManagedSidebarIsOpen',
        'onPageResize',
        'getBreakpoint',
        'getVerticalBreakpoint',
        'mainAriaLabel',
        'mainTabIndex',
        'mainComponent',
        'tertiaryNav',
        'isTertiaryNavGrouped',
        'isBreadcrumbGrouped',
        'additionalGroupedContent',
        'groupProps',
        'breadcrumbProps',
      ]),
      { mobileView: U, mobileIsSidebarOpen: x, desktopIsSidebarOpen: D, width: G, height: z } = this.state,
      K = {
        isManagedSidebar: v,
        onSidebarToggle: U ? this.onSidebarToggleMobile : this.onSidebarToggleDesktop,
        isSidebarOpen: U ? x : D,
        width: G,
        height: z,
        getBreakpoint: N,
        getVerticalBreakpoint: B,
      };
    let ne = null;
    m && p
      ? (ne = c.createElement(
          'div',
          { className: R(he.pageMainNav, he.modifiers.limitWidth) },
          c.createElement('div', { className: R(he.pageMainBody) }, m),
        ))
      : m && (ne = c.createElement('div', { className: R(he.pageMainNav) }, m));
    const C = n
        ? c.createElement(
            'section',
            { className: R(he.pageMainBreadcrumb, r && he.modifiers.limitWidth, _n(_?.stickyOnBreakpoint, he, 'sticky-', B(z), !0)) },
            r ? c.createElement('div', { className: R(he.pageMainBody) }, n) : n,
          )
        : null,
      H = S || E || k ? c.createElement(hu, Object.assign({}, y), S && ne, E && C, k) : null,
      q = g,
      $ = c.createElement(
        q,
        { ref: this.mainRef, role: h, id: b, className: R(he.pageMain), tabIndex: L, 'aria-label': A },
        H,
        !S && ne,
        !E && C,
        i,
      ),
      Y = c.createElement(lu, null, l);
    return c.createElement(
      Wv,
      { value: K },
      c.createElement(
        'div',
        Object.assign({ ref: this.pageRef }, O, {
          className: R(
            he.page,
            G !== null && z !== null && 'pf-m-resize-observer',
            G !== null && `pf-m-breakpoint-${N(G)}`,
            z !== null && `pf-m-height-breakpoint-${B(z)}`,
            a,
          ),
        }),
        f,
        o,
        s,
        l &&
          c.createElement(
            'div',
            { className: R(he.pageDrawer) },
            c.createElement(
              au,
              { isExpanded: u, onExpand: J => d(J) },
              c.createElement(ou, { panelContent: Y }, c.createElement(su, null, $)),
            ),
          ),
        !l && $,
      ),
    );
  }
}
_a.displayName = 'Page';
_a.defaultProps = {
  isManagedSidebar: !1,
  isBreadcrumbWidthLimited: !1,
  defaultManagedSidebarIsOpen: !0,
  mainTabIndex: -1,
  isNotificationDrawerExpanded: !1,
  onNotificationDrawerExpand: () => null,
  mainComponent: 'main',
  getBreakpoint: dd,
  getVerticalBreakpoint: cd,
};
const gu = e => {
  var { children: t, className: n, usePageInsets: r, isFilled: a } = e,
    i = ie(e, ['children', 'className', 'usePageInsets', 'isFilled']);
  return c.createElement(
    'div',
    Object.assign(
      { className: R(he.pageSidebarBody, r && he.modifiers.pageInsets, a === !1 && he.modifiers.noFill, a === !0 && he.modifiers.fill, n) },
      i,
    ),
    t,
  );
};
gu.displayName = 'PageSidebarBody';
var lr;
(function (e) {
  (e.default = 'default'), (e.light = 'light'), (e.dark = 'dark'), (e.darker = 'darker');
})(lr || (lr = {}));
var nn;
(function (e) {
  (e.default = 'default'), (e.nav = 'nav'), (e.subNav = 'subnav'), (e.breadcrumb = 'breadcrumb'), (e.tabs = 'tabs'), (e.wizard = 'wizard');
})(nn || (nn = {}));
const Kv = {
    [nn.default]: he.pageMainSection,
    [nn.nav]: he.pageMainNav,
    [nn.subNav]: he.pageMainSubnav,
    [nn.breadcrumb]: he.pageMainBreadcrumb,
    [nn.tabs]: he.pageMainTabs,
    [nn.wizard]: he.pageMainWizard,
  },
  Xv = { [lr.default]: '', [lr.light]: he.modifiers.light, [lr.dark]: he.modifiers.dark_200, [lr.darker]: he.modifiers.dark_100 },
  vu = e => {
    var {
        className: t = '',
        children: n,
        variant: r = 'default',
        type: a = 'default',
        padding: i,
        isFilled: o,
        isWidthLimited: s = !1,
        isCenterAligned: l = !1,
        stickyOnBreakpoint: u,
        hasShadowTop: d = !1,
        hasShadowBottom: p = !1,
        hasOverflowScroll: f = !1,
        'aria-label': h,
        component: b = 'section',
      } = e,
      v = ie(e, [
        'className',
        'children',
        'variant',
        'type',
        'padding',
        'isFilled',
        'isWidthLimited',
        'isCenterAligned',
        'stickyOnBreakpoint',
        'hasShadowTop',
        'hasShadowBottom',
        'hasOverflowScroll',
        'aria-label',
        'component',
      ]);
    const { height: w, getVerticalBreakpoint: T } = c.useContext(Tr);
    c.useEffect(() => {
      f && !h && console.warn('PageSection: An accessible aria-label is required when hasOverflowScroll is set to true.');
    }, [f, h]);
    const N = b;
    return c.createElement(
      N,
      Object.assign(
        {},
        v,
        {
          className: R(
            Kv[a],
            _n(i, he),
            _n(u, he, 'sticky-', T(w), !0),
            Xv[r],
            o === !1 && he.modifiers.noFill,
            o === !0 && he.modifiers.fill,
            s && he.modifiers.limitWidth,
            s && l && a !== nn.subNav && he.modifiers.alignCenter,
            d && he.modifiers.shadowTop,
            p && he.modifiers.shadowBottom,
            f && he.modifiers.overflowScroll,
            t,
          ),
        },
        f && { tabIndex: 0 },
        { 'aria-label': h },
      ),
      s && c.createElement('div', { className: R(he.pageMainBody) }, n),
      !s && n,
    );
  };
vu.displayName = 'PageSection';
const Nt = {
  grid: 'pf-v5-l-grid',
  gridItem: 'pf-v5-l-grid__item',
  modifiers: {
    all_1Col: 'pf-m-all-1-col',
    all_2Col: 'pf-m-all-2-col',
    all_3Col: 'pf-m-all-3-col',
    all_4Col: 'pf-m-all-4-col',
    all_5Col: 'pf-m-all-5-col',
    all_6Col: 'pf-m-all-6-col',
    all_7Col: 'pf-m-all-7-col',
    all_8Col: 'pf-m-all-8-col',
    all_9Col: 'pf-m-all-9-col',
    all_10Col: 'pf-m-all-10-col',
    all_11Col: 'pf-m-all-11-col',
    all_12Col: 'pf-m-all-12-col',
    all_1ColOnSm: 'pf-m-all-1-col-on-sm',
    all_2ColOnSm: 'pf-m-all-2-col-on-sm',
    all_3ColOnSm: 'pf-m-all-3-col-on-sm',
    all_4ColOnSm: 'pf-m-all-4-col-on-sm',
    all_5ColOnSm: 'pf-m-all-5-col-on-sm',
    all_6ColOnSm: 'pf-m-all-6-col-on-sm',
    all_7ColOnSm: 'pf-m-all-7-col-on-sm',
    all_8ColOnSm: 'pf-m-all-8-col-on-sm',
    all_9ColOnSm: 'pf-m-all-9-col-on-sm',
    all_10ColOnSm: 'pf-m-all-10-col-on-sm',
    all_11ColOnSm: 'pf-m-all-11-col-on-sm',
    all_12ColOnSm: 'pf-m-all-12-col-on-sm',
    all_1ColOnMd: 'pf-m-all-1-col-on-md',
    all_2ColOnMd: 'pf-m-all-2-col-on-md',
    all_3ColOnMd: 'pf-m-all-3-col-on-md',
    all_4ColOnMd: 'pf-m-all-4-col-on-md',
    all_5ColOnMd: 'pf-m-all-5-col-on-md',
    all_6ColOnMd: 'pf-m-all-6-col-on-md',
    all_7ColOnMd: 'pf-m-all-7-col-on-md',
    all_8ColOnMd: 'pf-m-all-8-col-on-md',
    all_9ColOnMd: 'pf-m-all-9-col-on-md',
    all_10ColOnMd: 'pf-m-all-10-col-on-md',
    all_11ColOnMd: 'pf-m-all-11-col-on-md',
    all_12ColOnMd: 'pf-m-all-12-col-on-md',
    all_1ColOnLg: 'pf-m-all-1-col-on-lg',
    all_2ColOnLg: 'pf-m-all-2-col-on-lg',
    all_3ColOnLg: 'pf-m-all-3-col-on-lg',
    all_4ColOnLg: 'pf-m-all-4-col-on-lg',
    all_5ColOnLg: 'pf-m-all-5-col-on-lg',
    all_6ColOnLg: 'pf-m-all-6-col-on-lg',
    all_7ColOnLg: 'pf-m-all-7-col-on-lg',
    all_8ColOnLg: 'pf-m-all-8-col-on-lg',
    all_9ColOnLg: 'pf-m-all-9-col-on-lg',
    all_10ColOnLg: 'pf-m-all-10-col-on-lg',
    all_11ColOnLg: 'pf-m-all-11-col-on-lg',
    all_12ColOnLg: 'pf-m-all-12-col-on-lg',
    all_1ColOnXl: 'pf-m-all-1-col-on-xl',
    all_2ColOnXl: 'pf-m-all-2-col-on-xl',
    all_3ColOnXl: 'pf-m-all-3-col-on-xl',
    all_4ColOnXl: 'pf-m-all-4-col-on-xl',
    all_5ColOnXl: 'pf-m-all-5-col-on-xl',
    all_6ColOnXl: 'pf-m-all-6-col-on-xl',
    all_7ColOnXl: 'pf-m-all-7-col-on-xl',
    all_8ColOnXl: 'pf-m-all-8-col-on-xl',
    all_9ColOnXl: 'pf-m-all-9-col-on-xl',
    all_10ColOnXl: 'pf-m-all-10-col-on-xl',
    all_11ColOnXl: 'pf-m-all-11-col-on-xl',
    all_12ColOnXl: 'pf-m-all-12-col-on-xl',
    all_1ColOn_2xl: 'pf-m-all-1-col-on-2xl',
    all_2ColOn_2xl: 'pf-m-all-2-col-on-2xl',
    all_3ColOn_2xl: 'pf-m-all-3-col-on-2xl',
    all_4ColOn_2xl: 'pf-m-all-4-col-on-2xl',
    all_5ColOn_2xl: 'pf-m-all-5-col-on-2xl',
    all_6ColOn_2xl: 'pf-m-all-6-col-on-2xl',
    all_7ColOn_2xl: 'pf-m-all-7-col-on-2xl',
    all_8ColOn_2xl: 'pf-m-all-8-col-on-2xl',
    all_9ColOn_2xl: 'pf-m-all-9-col-on-2xl',
    all_10ColOn_2xl: 'pf-m-all-10-col-on-2xl',
    all_11ColOn_2xl: 'pf-m-all-11-col-on-2xl',
    all_12ColOn_2xl: 'pf-m-all-12-col-on-2xl',
    '1Col': 'pf-m-1-col',
    '2Col': 'pf-m-2-col',
    '3Col': 'pf-m-3-col',
    '4Col': 'pf-m-4-col',
    '5Col': 'pf-m-5-col',
    '6Col': 'pf-m-6-col',
    '7Col': 'pf-m-7-col',
    '8Col': 'pf-m-8-col',
    '9Col': 'pf-m-9-col',
    '10Col': 'pf-m-10-col',
    '11Col': 'pf-m-11-col',
    '12Col': 'pf-m-12-col',
    offset_1Col: 'pf-m-offset-1-col',
    offset_2Col: 'pf-m-offset-2-col',
    offset_3Col: 'pf-m-offset-3-col',
    offset_4Col: 'pf-m-offset-4-col',
    offset_5Col: 'pf-m-offset-5-col',
    offset_6Col: 'pf-m-offset-6-col',
    offset_7Col: 'pf-m-offset-7-col',
    offset_8Col: 'pf-m-offset-8-col',
    offset_9Col: 'pf-m-offset-9-col',
    offset_10Col: 'pf-m-offset-10-col',
    offset_11Col: 'pf-m-offset-11-col',
    offset_12Col: 'pf-m-offset-12-col',
    '1Row': 'pf-m-1-row',
    '2Row': 'pf-m-2-row',
    '3Row': 'pf-m-3-row',
    '4Row': 'pf-m-4-row',
    '5Row': 'pf-m-5-row',
    '6Row': 'pf-m-6-row',
    '7Row': 'pf-m-7-row',
    '8Row': 'pf-m-8-row',
    '9Row': 'pf-m-9-row',
    '10Row': 'pf-m-10-row',
    '11Row': 'pf-m-11-row',
    '12Row': 'pf-m-12-row',
    '1ColOnSm': 'pf-m-1-col-on-sm',
    '2ColOnSm': 'pf-m-2-col-on-sm',
    '3ColOnSm': 'pf-m-3-col-on-sm',
    '4ColOnSm': 'pf-m-4-col-on-sm',
    '5ColOnSm': 'pf-m-5-col-on-sm',
    '6ColOnSm': 'pf-m-6-col-on-sm',
    '7ColOnSm': 'pf-m-7-col-on-sm',
    '8ColOnSm': 'pf-m-8-col-on-sm',
    '9ColOnSm': 'pf-m-9-col-on-sm',
    '10ColOnSm': 'pf-m-10-col-on-sm',
    '11ColOnSm': 'pf-m-11-col-on-sm',
    '12ColOnSm': 'pf-m-12-col-on-sm',
    offset_1ColOnSm: 'pf-m-offset-1-col-on-sm',
    offset_2ColOnSm: 'pf-m-offset-2-col-on-sm',
    offset_3ColOnSm: 'pf-m-offset-3-col-on-sm',
    offset_4ColOnSm: 'pf-m-offset-4-col-on-sm',
    offset_5ColOnSm: 'pf-m-offset-5-col-on-sm',
    offset_6ColOnSm: 'pf-m-offset-6-col-on-sm',
    offset_7ColOnSm: 'pf-m-offset-7-col-on-sm',
    offset_8ColOnSm: 'pf-m-offset-8-col-on-sm',
    offset_9ColOnSm: 'pf-m-offset-9-col-on-sm',
    offset_10ColOnSm: 'pf-m-offset-10-col-on-sm',
    offset_11ColOnSm: 'pf-m-offset-11-col-on-sm',
    offset_12ColOnSm: 'pf-m-offset-12-col-on-sm',
    '1RowOnSm': 'pf-m-1-row-on-sm',
    '2RowOnSm': 'pf-m-2-row-on-sm',
    '3RowOnSm': 'pf-m-3-row-on-sm',
    '4RowOnSm': 'pf-m-4-row-on-sm',
    '5RowOnSm': 'pf-m-5-row-on-sm',
    '6RowOnSm': 'pf-m-6-row-on-sm',
    '7RowOnSm': 'pf-m-7-row-on-sm',
    '8RowOnSm': 'pf-m-8-row-on-sm',
    '9RowOnSm': 'pf-m-9-row-on-sm',
    '10RowOnSm': 'pf-m-10-row-on-sm',
    '11RowOnSm': 'pf-m-11-row-on-sm',
    '12RowOnSm': 'pf-m-12-row-on-sm',
    '1ColOnMd': 'pf-m-1-col-on-md',
    '2ColOnMd': 'pf-m-2-col-on-md',
    '3ColOnMd': 'pf-m-3-col-on-md',
    '4ColOnMd': 'pf-m-4-col-on-md',
    '5ColOnMd': 'pf-m-5-col-on-md',
    '6ColOnMd': 'pf-m-6-col-on-md',
    '7ColOnMd': 'pf-m-7-col-on-md',
    '8ColOnMd': 'pf-m-8-col-on-md',
    '9ColOnMd': 'pf-m-9-col-on-md',
    '10ColOnMd': 'pf-m-10-col-on-md',
    '11ColOnMd': 'pf-m-11-col-on-md',
    '12ColOnMd': 'pf-m-12-col-on-md',
    offset_1ColOnMd: 'pf-m-offset-1-col-on-md',
    offset_2ColOnMd: 'pf-m-offset-2-col-on-md',
    offset_3ColOnMd: 'pf-m-offset-3-col-on-md',
    offset_4ColOnMd: 'pf-m-offset-4-col-on-md',
    offset_5ColOnMd: 'pf-m-offset-5-col-on-md',
    offset_6ColOnMd: 'pf-m-offset-6-col-on-md',
    offset_7ColOnMd: 'pf-m-offset-7-col-on-md',
    offset_8ColOnMd: 'pf-m-offset-8-col-on-md',
    offset_9ColOnMd: 'pf-m-offset-9-col-on-md',
    offset_10ColOnMd: 'pf-m-offset-10-col-on-md',
    offset_11ColOnMd: 'pf-m-offset-11-col-on-md',
    offset_12ColOnMd: 'pf-m-offset-12-col-on-md',
    '1RowOnMd': 'pf-m-1-row-on-md',
    '2RowOnMd': 'pf-m-2-row-on-md',
    '3RowOnMd': 'pf-m-3-row-on-md',
    '4RowOnMd': 'pf-m-4-row-on-md',
    '5RowOnMd': 'pf-m-5-row-on-md',
    '6RowOnMd': 'pf-m-6-row-on-md',
    '7RowOnMd': 'pf-m-7-row-on-md',
    '8RowOnMd': 'pf-m-8-row-on-md',
    '9RowOnMd': 'pf-m-9-row-on-md',
    '10RowOnMd': 'pf-m-10-row-on-md',
    '11RowOnMd': 'pf-m-11-row-on-md',
    '12RowOnMd': 'pf-m-12-row-on-md',
    '1ColOnLg': 'pf-m-1-col-on-lg',
    '2ColOnLg': 'pf-m-2-col-on-lg',
    '3ColOnLg': 'pf-m-3-col-on-lg',
    '4ColOnLg': 'pf-m-4-col-on-lg',
    '5ColOnLg': 'pf-m-5-col-on-lg',
    '6ColOnLg': 'pf-m-6-col-on-lg',
    '7ColOnLg': 'pf-m-7-col-on-lg',
    '8ColOnLg': 'pf-m-8-col-on-lg',
    '9ColOnLg': 'pf-m-9-col-on-lg',
    '10ColOnLg': 'pf-m-10-col-on-lg',
    '11ColOnLg': 'pf-m-11-col-on-lg',
    '12ColOnLg': 'pf-m-12-col-on-lg',
    offset_1ColOnLg: 'pf-m-offset-1-col-on-lg',
    offset_2ColOnLg: 'pf-m-offset-2-col-on-lg',
    offset_3ColOnLg: 'pf-m-offset-3-col-on-lg',
    offset_4ColOnLg: 'pf-m-offset-4-col-on-lg',
    offset_5ColOnLg: 'pf-m-offset-5-col-on-lg',
    offset_6ColOnLg: 'pf-m-offset-6-col-on-lg',
    offset_7ColOnLg: 'pf-m-offset-7-col-on-lg',
    offset_8ColOnLg: 'pf-m-offset-8-col-on-lg',
    offset_9ColOnLg: 'pf-m-offset-9-col-on-lg',
    offset_10ColOnLg: 'pf-m-offset-10-col-on-lg',
    offset_11ColOnLg: 'pf-m-offset-11-col-on-lg',
    offset_12ColOnLg: 'pf-m-offset-12-col-on-lg',
    '1RowOnLg': 'pf-m-1-row-on-lg',
    '2RowOnLg': 'pf-m-2-row-on-lg',
    '3RowOnLg': 'pf-m-3-row-on-lg',
    '4RowOnLg': 'pf-m-4-row-on-lg',
    '5RowOnLg': 'pf-m-5-row-on-lg',
    '6RowOnLg': 'pf-m-6-row-on-lg',
    '7RowOnLg': 'pf-m-7-row-on-lg',
    '8RowOnLg': 'pf-m-8-row-on-lg',
    '9RowOnLg': 'pf-m-9-row-on-lg',
    '10RowOnLg': 'pf-m-10-row-on-lg',
    '11RowOnLg': 'pf-m-11-row-on-lg',
    '12RowOnLg': 'pf-m-12-row-on-lg',
    '1ColOnXl': 'pf-m-1-col-on-xl',
    '2ColOnXl': 'pf-m-2-col-on-xl',
    '3ColOnXl': 'pf-m-3-col-on-xl',
    '4ColOnXl': 'pf-m-4-col-on-xl',
    '5ColOnXl': 'pf-m-5-col-on-xl',
    '6ColOnXl': 'pf-m-6-col-on-xl',
    '7ColOnXl': 'pf-m-7-col-on-xl',
    '8ColOnXl': 'pf-m-8-col-on-xl',
    '9ColOnXl': 'pf-m-9-col-on-xl',
    '10ColOnXl': 'pf-m-10-col-on-xl',
    '11ColOnXl': 'pf-m-11-col-on-xl',
    '12ColOnXl': 'pf-m-12-col-on-xl',
    offset_1ColOnXl: 'pf-m-offset-1-col-on-xl',
    offset_2ColOnXl: 'pf-m-offset-2-col-on-xl',
    offset_3ColOnXl: 'pf-m-offset-3-col-on-xl',
    offset_4ColOnXl: 'pf-m-offset-4-col-on-xl',
    offset_5ColOnXl: 'pf-m-offset-5-col-on-xl',
    offset_6ColOnXl: 'pf-m-offset-6-col-on-xl',
    offset_7ColOnXl: 'pf-m-offset-7-col-on-xl',
    offset_8ColOnXl: 'pf-m-offset-8-col-on-xl',
    offset_9ColOnXl: 'pf-m-offset-9-col-on-xl',
    offset_10ColOnXl: 'pf-m-offset-10-col-on-xl',
    offset_11ColOnXl: 'pf-m-offset-11-col-on-xl',
    offset_12ColOnXl: 'pf-m-offset-12-col-on-xl',
    '1RowOnXl': 'pf-m-1-row-on-xl',
    '2RowOnXl': 'pf-m-2-row-on-xl',
    '3RowOnXl': 'pf-m-3-row-on-xl',
    '4RowOnXl': 'pf-m-4-row-on-xl',
    '5RowOnXl': 'pf-m-5-row-on-xl',
    '6RowOnXl': 'pf-m-6-row-on-xl',
    '7RowOnXl': 'pf-m-7-row-on-xl',
    '8RowOnXl': 'pf-m-8-row-on-xl',
    '9RowOnXl': 'pf-m-9-row-on-xl',
    '10RowOnXl': 'pf-m-10-row-on-xl',
    '11RowOnXl': 'pf-m-11-row-on-xl',
    '12RowOnXl': 'pf-m-12-row-on-xl',
    '1ColOn_2xl': 'pf-m-1-col-on-2xl',
    '2ColOn_2xl': 'pf-m-2-col-on-2xl',
    '3ColOn_2xl': 'pf-m-3-col-on-2xl',
    '4ColOn_2xl': 'pf-m-4-col-on-2xl',
    '5ColOn_2xl': 'pf-m-5-col-on-2xl',
    '6ColOn_2xl': 'pf-m-6-col-on-2xl',
    '7ColOn_2xl': 'pf-m-7-col-on-2xl',
    '8ColOn_2xl': 'pf-m-8-col-on-2xl',
    '9ColOn_2xl': 'pf-m-9-col-on-2xl',
    '10ColOn_2xl': 'pf-m-10-col-on-2xl',
    '11ColOn_2xl': 'pf-m-11-col-on-2xl',
    '12ColOn_2xl': 'pf-m-12-col-on-2xl',
    offset_1ColOn_2xl: 'pf-m-offset-1-col-on-2xl',
    offset_2ColOn_2xl: 'pf-m-offset-2-col-on-2xl',
    offset_3ColOn_2xl: 'pf-m-offset-3-col-on-2xl',
    offset_4ColOn_2xl: 'pf-m-offset-4-col-on-2xl',
    offset_5ColOn_2xl: 'pf-m-offset-5-col-on-2xl',
    offset_6ColOn_2xl: 'pf-m-offset-6-col-on-2xl',
    offset_7ColOn_2xl: 'pf-m-offset-7-col-on-2xl',
    offset_8ColOn_2xl: 'pf-m-offset-8-col-on-2xl',
    offset_9ColOn_2xl: 'pf-m-offset-9-col-on-2xl',
    offset_10ColOn_2xl: 'pf-m-offset-10-col-on-2xl',
    offset_11ColOn_2xl: 'pf-m-offset-11-col-on-2xl',
    offset_12ColOn_2xl: 'pf-m-offset-12-col-on-2xl',
    '1RowOn_2xl': 'pf-m-1-row-on-2xl',
    '2RowOn_2xl': 'pf-m-2-row-on-2xl',
    '3RowOn_2xl': 'pf-m-3-row-on-2xl',
    '4RowOn_2xl': 'pf-m-4-row-on-2xl',
    '5RowOn_2xl': 'pf-m-5-row-on-2xl',
    '6RowOn_2xl': 'pf-m-6-row-on-2xl',
    '7RowOn_2xl': 'pf-m-7-row-on-2xl',
    '8RowOn_2xl': 'pf-m-8-row-on-2xl',
    '9RowOn_2xl': 'pf-m-9-row-on-2xl',
    '10RowOn_2xl': 'pf-m-10-row-on-2xl',
    '11RowOn_2xl': 'pf-m-11-row-on-2xl',
    '12RowOn_2xl': 'pf-m-12-row-on-2xl',
    gutter: 'pf-m-gutter',
  },
};
var tc;
(function (e) {
  (e.xs = 'xs'), (e.sm = 'sm'), (e.md = 'md'), (e.lg = 'lg'), (e.xl = 'xl'), (e['2xl'] = '2xl'), (e['3xl'] = '3xl'), (e['4xl'] = '4xl');
})(tc || (tc = {}));
var mi;
(function (e) {
  (e.sm = 'Sm'), (e.md = 'Md'), (e.lg = 'Lg'), (e.xl = 'Xl'), (e.xl2 = '_2xl');
})(mi || (mi = {}));
const bu = { name: '--pf-v5-l-grid--item--Order', value: '0', var: 'var(--pf-v5-l-grid--item--Order)' },
  yu = e => {
    var { children: t = null, className: n = '', component: r = 'div', hasGutter: a, span: i = null, order: o, style: s } = e,
      l = ie(e, ['children', 'className', 'component', 'hasGutter', 'span', 'order', 'style']);
    const u = [Nt.grid, i && Nt.modifiers[`all_${i}Col`]],
      d = r;
    return (
      Object.entries(mi).forEach(([p, f]) => {
        const h = p,
          b = l[h];
        b && u.push(Nt.modifiers[`all_${b}ColOn${f}`]), delete l[h];
      }),
      c.createElement(
        d,
        Object.assign(
          { className: R(...u, a && Nt.modifiers.gutter, n), style: s || o ? Object.assign(Object.assign({}, s), si(o, bu.name)) : void 0 },
          l,
        ),
        t,
      )
    );
  };
yu.displayName = 'Grid';
const Do = e => {
  var {
      children: t = null,
      className: n = '',
      component: r = 'div',
      span: a = null,
      rowSpan: i = null,
      offset: o = null,
      order: s,
      style: l,
    } = e,
    u = ie(e, ['children', 'className', 'component', 'span', 'rowSpan', 'offset', 'order', 'style']);
  const d = [Nt.gridItem, a && Nt.modifiers[`${a}Col`], i && Nt.modifiers[`${i}Row`], o && Nt.modifiers[`offset_${o}Col`]],
    p = r;
  return (
    Object.entries(mi).forEach(([f, h]) => {
      const b = f,
        v = `${b}RowSpan`,
        w = `${b}Offset`,
        T = u[b],
        N = u[v],
        B = u[w];
      T && d.push(Nt.modifiers[`${T}ColOn${h}`]),
        N && d.push(Nt.modifiers[`${N}RowOn${h}`]),
        B && d.push(Nt.modifiers[`offset_${B}ColOn${h}`]),
        delete u[b],
        delete u[v],
        delete u[w];
    }),
    c.createElement(
      p,
      Object.assign({ className: R(...d, n), style: l || s ? Object.assign(Object.assign({}, l), si(s, bu.name)) : void 0 }, u),
      t,
    )
  );
};
Do.displayName = 'GridItem';
var xu = { exports: {} };
const Jv = {},
  Yv = Object.freeze(Object.defineProperty({ __proto__: null, default: Jv }, Symbol.toStringTag, { value: 'Module' })),
  nc = uf(Yv);
/**
 * [js-sha256]{@link https://github.com/emn178/js-sha256}
 *
 * @version 0.11.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2024
 * @license MIT
 */ (function (e) {
  (function () {
    var t = 'input is invalid type',
      n = typeof window == 'object',
      r = n ? window : {};
    r.JS_SHA256_NO_WINDOW && (n = !1);
    var a = !n && typeof self == 'object',
      i = !r.JS_SHA256_NO_NODE_JS && typeof process == 'object' && process.versions && process.versions.node;
    i ? (r = dr) : a && (r = self);
    var o = !r.JS_SHA256_NO_COMMON_JS && !0 && e.exports,
      s = !r.JS_SHA256_NO_ARRAY_BUFFER && typeof ArrayBuffer < 'u',
      l = '0123456789abcdef'.split(''),
      u = [-2147483648, 8388608, 32768, 128],
      d = [24, 16, 8, 0],
      p = [
        1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278,
        1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122,
        1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205,
        773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771,
        3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063,
        1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
      ],
      f = ['hex', 'array', 'digest', 'arrayBuffer'],
      h = [];
    (r.JS_SHA256_NO_NODE_JS || !Array.isArray) &&
      (Array.isArray = function (g) {
        return Object.prototype.toString.call(g) === '[object Array]';
      }),
      s &&
        (r.JS_SHA256_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
        (ArrayBuffer.isView = function (g) {
          return typeof g == 'object' && g.buffer && g.buffer.constructor === ArrayBuffer;
        });
    var b = function (g, m) {
        return function (S) {
          return new B(m, !0).update(S)[g]();
        };
      },
      v = function (g) {
        var m = b('hex', g);
        i && (m = w(m, g)),
          (m.create = function () {
            return new B(g);
          }),
          (m.update = function (k) {
            return m.create().update(k);
          });
        for (var S = 0; S < f.length; ++S) {
          var E = f[S];
          m[E] = b(E, g);
        }
        return m;
      },
      w = function (g, m) {
        var S = nc,
          E = nc.Buffer,
          k = m ? 'sha224' : 'sha256',
          y;
        E.from && !r.JS_SHA256_NO_BUFFER_FROM
          ? (y = E.from)
          : (y = function (O) {
              return new E(O);
            });
        var _ = function (O) {
          if (typeof O == 'string') return S.createHash(k).update(O, 'utf8').digest('hex');
          if (O == null) throw new Error(t);
          return (
            O.constructor === ArrayBuffer && (O = new Uint8Array(O)),
            Array.isArray(O) || ArrayBuffer.isView(O) || O.constructor === E ? S.createHash(k).update(y(O)).digest('hex') : g(O)
          );
        };
        return _;
      },
      T = function (g, m) {
        return function (S, E) {
          return new A(S, m, !0).update(E)[g]();
        };
      },
      N = function (g) {
        var m = T('hex', g);
        (m.create = function (k) {
          return new A(k, g);
        }),
          (m.update = function (k, y) {
            return m.create(k).update(y);
          });
        for (var S = 0; S < f.length; ++S) {
          var E = f[S];
          m[E] = T(E, g);
        }
        return m;
      };
    function B(g, m) {
      m
        ? ((h[0] =
            h[16] =
            h[1] =
            h[2] =
            h[3] =
            h[4] =
            h[5] =
            h[6] =
            h[7] =
            h[8] =
            h[9] =
            h[10] =
            h[11] =
            h[12] =
            h[13] =
            h[14] =
            h[15] =
              0),
          (this.blocks = h))
        : (this.blocks = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]),
        g
          ? ((this.h0 = 3238371032),
            (this.h1 = 914150663),
            (this.h2 = 812702999),
            (this.h3 = 4144912697),
            (this.h4 = 4290775857),
            (this.h5 = 1750603025),
            (this.h6 = 1694076839),
            (this.h7 = 3204075428))
          : ((this.h0 = 1779033703),
            (this.h1 = 3144134277),
            (this.h2 = 1013904242),
            (this.h3 = 2773480762),
            (this.h4 = 1359893119),
            (this.h5 = 2600822924),
            (this.h6 = 528734635),
            (this.h7 = 1541459225)),
        (this.block = this.start = this.bytes = this.hBytes = 0),
        (this.finalized = this.hashed = !1),
        (this.first = !0),
        (this.is224 = g);
    }
    (B.prototype.update = function (g) {
      if (!this.finalized) {
        var m,
          S = typeof g;
        if (S !== 'string') {
          if (S === 'object') {
            if (g === null) throw new Error(t);
            if (s && g.constructor === ArrayBuffer) g = new Uint8Array(g);
            else if (!Array.isArray(g) && (!s || !ArrayBuffer.isView(g))) throw new Error(t);
          } else throw new Error(t);
          m = !0;
        }
        for (var E, k = 0, y, _ = g.length, O = this.blocks; k < _; ) {
          if (
            (this.hashed &&
              ((this.hashed = !1),
              (O[0] = this.block),
              (this.block =
                O[16] =
                O[1] =
                O[2] =
                O[3] =
                O[4] =
                O[5] =
                O[6] =
                O[7] =
                O[8] =
                O[9] =
                O[10] =
                O[11] =
                O[12] =
                O[13] =
                O[14] =
                O[15] =
                  0)),
            m)
          )
            for (y = this.start; k < _ && y < 64; ++k) O[y >>> 2] |= g[k] << d[y++ & 3];
          else
            for (y = this.start; k < _ && y < 64; ++k)
              (E = g.charCodeAt(k)),
                E < 128
                  ? (O[y >>> 2] |= E << d[y++ & 3])
                  : E < 2048
                    ? ((O[y >>> 2] |= (192 | (E >>> 6)) << d[y++ & 3]), (O[y >>> 2] |= (128 | (E & 63)) << d[y++ & 3]))
                    : E < 55296 || E >= 57344
                      ? ((O[y >>> 2] |= (224 | (E >>> 12)) << d[y++ & 3]),
                        (O[y >>> 2] |= (128 | ((E >>> 6) & 63)) << d[y++ & 3]),
                        (O[y >>> 2] |= (128 | (E & 63)) << d[y++ & 3]))
                      : ((E = 65536 + (((E & 1023) << 10) | (g.charCodeAt(++k) & 1023))),
                        (O[y >>> 2] |= (240 | (E >>> 18)) << d[y++ & 3]),
                        (O[y >>> 2] |= (128 | ((E >>> 12) & 63)) << d[y++ & 3]),
                        (O[y >>> 2] |= (128 | ((E >>> 6) & 63)) << d[y++ & 3]),
                        (O[y >>> 2] |= (128 | (E & 63)) << d[y++ & 3]));
          (this.lastByteIndex = y),
            (this.bytes += y - this.start),
            y >= 64 ? ((this.block = O[16]), (this.start = y - 64), this.hash(), (this.hashed = !0)) : (this.start = y);
        }
        return this.bytes > 4294967295 && ((this.hBytes += (this.bytes / 4294967296) << 0), (this.bytes = this.bytes % 4294967296)), this;
      }
    }),
      (B.prototype.finalize = function () {
        if (!this.finalized) {
          this.finalized = !0;
          var g = this.blocks,
            m = this.lastByteIndex;
          (g[16] = this.block),
            (g[m >>> 2] |= u[m & 3]),
            (this.block = g[16]),
            m >= 56 &&
              (this.hashed || this.hash(),
              (g[0] = this.block),
              (g[16] = g[1] = g[2] = g[3] = g[4] = g[5] = g[6] = g[7] = g[8] = g[9] = g[10] = g[11] = g[12] = g[13] = g[14] = g[15] = 0)),
            (g[14] = (this.hBytes << 3) | (this.bytes >>> 29)),
            (g[15] = this.bytes << 3),
            this.hash();
        }
      }),
      (B.prototype.hash = function () {
        var g = this.h0,
          m = this.h1,
          S = this.h2,
          E = this.h3,
          k = this.h4,
          y = this.h5,
          _ = this.h6,
          O = this.h7,
          U = this.blocks,
          x,
          D,
          G,
          z,
          K,
          ne,
          C,
          P,
          H,
          q,
          $;
        for (x = 16; x < 64; ++x)
          (K = U[x - 15]),
            (D = ((K >>> 7) | (K << 25)) ^ ((K >>> 18) | (K << 14)) ^ (K >>> 3)),
            (K = U[x - 2]),
            (G = ((K >>> 17) | (K << 15)) ^ ((K >>> 19) | (K << 13)) ^ (K >>> 10)),
            (U[x] = (U[x - 16] + D + U[x - 7] + G) << 0);
        for ($ = m & S, x = 0; x < 64; x += 4)
          this.first
            ? (this.is224
                ? ((P = 300032), (K = U[0] - 1413257819), (O = (K - 150054599) << 0), (E = (K + 24177077) << 0))
                : ((P = 704751109), (K = U[0] - 210244248), (O = (K - 1521486534) << 0), (E = (K + 143694565) << 0)),
              (this.first = !1))
            : ((D = ((g >>> 2) | (g << 30)) ^ ((g >>> 13) | (g << 19)) ^ ((g >>> 22) | (g << 10))),
              (G = ((k >>> 6) | (k << 26)) ^ ((k >>> 11) | (k << 21)) ^ ((k >>> 25) | (k << 7))),
              (P = g & m),
              (z = P ^ (g & S) ^ $),
              (C = (k & y) ^ (~k & _)),
              (K = O + G + C + p[x] + U[x]),
              (ne = D + z),
              (O = (E + K) << 0),
              (E = (K + ne) << 0)),
            (D = ((E >>> 2) | (E << 30)) ^ ((E >>> 13) | (E << 19)) ^ ((E >>> 22) | (E << 10))),
            (G = ((O >>> 6) | (O << 26)) ^ ((O >>> 11) | (O << 21)) ^ ((O >>> 25) | (O << 7))),
            (H = E & g),
            (z = H ^ (E & m) ^ P),
            (C = (O & k) ^ (~O & y)),
            (K = _ + G + C + p[x + 1] + U[x + 1]),
            (ne = D + z),
            (_ = (S + K) << 0),
            (S = (K + ne) << 0),
            (D = ((S >>> 2) | (S << 30)) ^ ((S >>> 13) | (S << 19)) ^ ((S >>> 22) | (S << 10))),
            (G = ((_ >>> 6) | (_ << 26)) ^ ((_ >>> 11) | (_ << 21)) ^ ((_ >>> 25) | (_ << 7))),
            (q = S & E),
            (z = q ^ (S & g) ^ H),
            (C = (_ & O) ^ (~_ & k)),
            (K = y + G + C + p[x + 2] + U[x + 2]),
            (ne = D + z),
            (y = (m + K) << 0),
            (m = (K + ne) << 0),
            (D = ((m >>> 2) | (m << 30)) ^ ((m >>> 13) | (m << 19)) ^ ((m >>> 22) | (m << 10))),
            (G = ((y >>> 6) | (y << 26)) ^ ((y >>> 11) | (y << 21)) ^ ((y >>> 25) | (y << 7))),
            ($ = m & S),
            (z = $ ^ (m & E) ^ q),
            (C = (y & _) ^ (~y & O)),
            (K = k + G + C + p[x + 3] + U[x + 3]),
            (ne = D + z),
            (k = (g + K) << 0),
            (g = (K + ne) << 0),
            (this.chromeBugWorkAround = !0);
        (this.h0 = (this.h0 + g) << 0),
          (this.h1 = (this.h1 + m) << 0),
          (this.h2 = (this.h2 + S) << 0),
          (this.h3 = (this.h3 + E) << 0),
          (this.h4 = (this.h4 + k) << 0),
          (this.h5 = (this.h5 + y) << 0),
          (this.h6 = (this.h6 + _) << 0),
          (this.h7 = (this.h7 + O) << 0);
      }),
      (B.prototype.hex = function () {
        this.finalize();
        var g = this.h0,
          m = this.h1,
          S = this.h2,
          E = this.h3,
          k = this.h4,
          y = this.h5,
          _ = this.h6,
          O = this.h7,
          U =
            l[(g >>> 28) & 15] +
            l[(g >>> 24) & 15] +
            l[(g >>> 20) & 15] +
            l[(g >>> 16) & 15] +
            l[(g >>> 12) & 15] +
            l[(g >>> 8) & 15] +
            l[(g >>> 4) & 15] +
            l[g & 15] +
            l[(m >>> 28) & 15] +
            l[(m >>> 24) & 15] +
            l[(m >>> 20) & 15] +
            l[(m >>> 16) & 15] +
            l[(m >>> 12) & 15] +
            l[(m >>> 8) & 15] +
            l[(m >>> 4) & 15] +
            l[m & 15] +
            l[(S >>> 28) & 15] +
            l[(S >>> 24) & 15] +
            l[(S >>> 20) & 15] +
            l[(S >>> 16) & 15] +
            l[(S >>> 12) & 15] +
            l[(S >>> 8) & 15] +
            l[(S >>> 4) & 15] +
            l[S & 15] +
            l[(E >>> 28) & 15] +
            l[(E >>> 24) & 15] +
            l[(E >>> 20) & 15] +
            l[(E >>> 16) & 15] +
            l[(E >>> 12) & 15] +
            l[(E >>> 8) & 15] +
            l[(E >>> 4) & 15] +
            l[E & 15] +
            l[(k >>> 28) & 15] +
            l[(k >>> 24) & 15] +
            l[(k >>> 20) & 15] +
            l[(k >>> 16) & 15] +
            l[(k >>> 12) & 15] +
            l[(k >>> 8) & 15] +
            l[(k >>> 4) & 15] +
            l[k & 15] +
            l[(y >>> 28) & 15] +
            l[(y >>> 24) & 15] +
            l[(y >>> 20) & 15] +
            l[(y >>> 16) & 15] +
            l[(y >>> 12) & 15] +
            l[(y >>> 8) & 15] +
            l[(y >>> 4) & 15] +
            l[y & 15] +
            l[(_ >>> 28) & 15] +
            l[(_ >>> 24) & 15] +
            l[(_ >>> 20) & 15] +
            l[(_ >>> 16) & 15] +
            l[(_ >>> 12) & 15] +
            l[(_ >>> 8) & 15] +
            l[(_ >>> 4) & 15] +
            l[_ & 15];
        return (
          this.is224 ||
            (U +=
              l[(O >>> 28) & 15] +
              l[(O >>> 24) & 15] +
              l[(O >>> 20) & 15] +
              l[(O >>> 16) & 15] +
              l[(O >>> 12) & 15] +
              l[(O >>> 8) & 15] +
              l[(O >>> 4) & 15] +
              l[O & 15]),
          U
        );
      }),
      (B.prototype.toString = B.prototype.hex),
      (B.prototype.digest = function () {
        this.finalize();
        var g = this.h0,
          m = this.h1,
          S = this.h2,
          E = this.h3,
          k = this.h4,
          y = this.h5,
          _ = this.h6,
          O = this.h7,
          U = [
            (g >>> 24) & 255,
            (g >>> 16) & 255,
            (g >>> 8) & 255,
            g & 255,
            (m >>> 24) & 255,
            (m >>> 16) & 255,
            (m >>> 8) & 255,
            m & 255,
            (S >>> 24) & 255,
            (S >>> 16) & 255,
            (S >>> 8) & 255,
            S & 255,
            (E >>> 24) & 255,
            (E >>> 16) & 255,
            (E >>> 8) & 255,
            E & 255,
            (k >>> 24) & 255,
            (k >>> 16) & 255,
            (k >>> 8) & 255,
            k & 255,
            (y >>> 24) & 255,
            (y >>> 16) & 255,
            (y >>> 8) & 255,
            y & 255,
            (_ >>> 24) & 255,
            (_ >>> 16) & 255,
            (_ >>> 8) & 255,
            _ & 255,
          ];
        return this.is224 || U.push((O >>> 24) & 255, (O >>> 16) & 255, (O >>> 8) & 255, O & 255), U;
      }),
      (B.prototype.array = B.prototype.digest),
      (B.prototype.arrayBuffer = function () {
        this.finalize();
        var g = new ArrayBuffer(this.is224 ? 28 : 32),
          m = new DataView(g);
        return (
          m.setUint32(0, this.h0),
          m.setUint32(4, this.h1),
          m.setUint32(8, this.h2),
          m.setUint32(12, this.h3),
          m.setUint32(16, this.h4),
          m.setUint32(20, this.h5),
          m.setUint32(24, this.h6),
          this.is224 || m.setUint32(28, this.h7),
          g
        );
      });
    function A(g, m, S) {
      var E,
        k = typeof g;
      if (k === 'string') {
        var y = [],
          _ = g.length,
          O = 0,
          U;
        for (E = 0; E < _; ++E)
          (U = g.charCodeAt(E)),
            U < 128
              ? (y[O++] = U)
              : U < 2048
                ? ((y[O++] = 192 | (U >>> 6)), (y[O++] = 128 | (U & 63)))
                : U < 55296 || U >= 57344
                  ? ((y[O++] = 224 | (U >>> 12)), (y[O++] = 128 | ((U >>> 6) & 63)), (y[O++] = 128 | (U & 63)))
                  : ((U = 65536 + (((U & 1023) << 10) | (g.charCodeAt(++E) & 1023))),
                    (y[O++] = 240 | (U >>> 18)),
                    (y[O++] = 128 | ((U >>> 12) & 63)),
                    (y[O++] = 128 | ((U >>> 6) & 63)),
                    (y[O++] = 128 | (U & 63)));
        g = y;
      } else if (k === 'object') {
        if (g === null) throw new Error(t);
        if (s && g.constructor === ArrayBuffer) g = new Uint8Array(g);
        else if (!Array.isArray(g) && (!s || !ArrayBuffer.isView(g))) throw new Error(t);
      } else throw new Error(t);
      g.length > 64 && (g = new B(m, !0).update(g).array());
      var x = [],
        D = [];
      for (E = 0; E < 64; ++E) {
        var G = g[E] || 0;
        (x[E] = 92 ^ G), (D[E] = 54 ^ G);
      }
      B.call(this, m, S), this.update(D), (this.oKeyPad = x), (this.inner = !0), (this.sharedMemory = S);
    }
    (A.prototype = new B()),
      (A.prototype.finalize = function () {
        if ((B.prototype.finalize.call(this), this.inner)) {
          this.inner = !1;
          var g = this.array();
          B.call(this, this.is224, this.sharedMemory), this.update(this.oKeyPad), this.update(g), B.prototype.finalize.call(this);
        }
      });
    var L = v();
    (L.sha256 = L),
      (L.sha224 = v(!0)),
      (L.sha256.hmac = N()),
      (L.sha224.hmac = N(!0)),
      o ? (e.exports = L) : ((r.sha256 = L.sha256), (r.sha224 = L.sha224));
  })();
})(xu);
var Qv = xu.exports;
const Zv = Ec(Qv);
class Xr extends Error {}
Xr.prototype.name = 'InvalidTokenError';
function eb(e) {
  return decodeURIComponent(
    atob(e).replace(/(.)/g, (t, n) => {
      let r = n.charCodeAt(0).toString(16).toUpperCase();
      return r.length < 2 && (r = '0' + r), '%' + r;
    }),
  );
}
function tb(e) {
  let t = e.replace(/-/g, '+').replace(/_/g, '/');
  switch (t.length % 4) {
    case 0:
      break;
    case 2:
      t += '==';
      break;
    case 3:
      t += '=';
      break;
    default:
      throw new Error('base64 string is not of the correct length');
  }
  try {
    return eb(t);
  } catch {
    return atob(t);
  }
}
function no(e, t) {
  if (typeof e != 'string') throw new Xr('Invalid token specified: must be a string');
  t || (t = {});
  const n = t.header === !0 ? 0 : 1,
    r = e.split('.')[n];
  if (typeof r != 'string') throw new Xr(`Invalid token specified: missing part #${n + 1}`);
  let a;
  try {
    a = tb(r);
  } catch (i) {
    throw new Xr(`Invalid token specified: invalid base64 for part #${n + 1} (${i.message})`);
  }
  try {
    return JSON.parse(a);
  } catch (i) {
    throw new Xr(`Invalid token specified: invalid json for part #${n + 1} (${i.message})`);
  }
}
if (typeof Promise > 'u')
  throw Error('Keycloak requires an environment that supports Promises. Make sure that you include the appropriate polyfill.');
function wu(e) {
  if (!(this instanceof wu)) throw new Error("The 'Keycloak' constructor must be invoked with 'new'.");
  for (
    var t = this, n, r = [], a, i = { enable: !0, callbackList: [], interval: 5 }, o = document.getElementsByTagName('script'), s = 0;
    s < o.length;
    s++
  )
    (o[s].src.indexOf('keycloak.js') !== -1 || o[s].src.indexOf('keycloak.min.js') !== -1) &&
      o[s].src.indexOf('version=') !== -1 &&
      (t.iframeVersion = o[s].src.substring(o[s].src.indexOf('version=') + 8).split('&')[0]);
  var l = !0,
    u = ne(console.info),
    d = ne(console.warn);
  (t.init = function (C) {
    if (t.didInitialize) throw new Error("A 'Keycloak' instance can only be initialized once.");
    (t.didInitialize = !0), (t.authenticated = !1), (a = K());
    var P = ['default', 'cordova', 'cordova-native'];
    if (
      (C && P.indexOf(C.adapter) > -1
        ? (n = D(C.adapter))
        : C && typeof C.adapter == 'object'
          ? (n = C.adapter)
          : window.Cordova || window.cordova
            ? (n = D('cordova'))
            : (n = D()),
      C)
    ) {
      if (
        (typeof C.useNonce < 'u' && (l = C.useNonce),
        typeof C.checkLoginIframe < 'u' && (i.enable = C.checkLoginIframe),
        C.checkLoginIframeInterval && (i.interval = C.checkLoginIframeInterval),
        C.onLoad === 'login-required' && (t.loginRequired = !0),
        C.responseMode)
      )
        if (C.responseMode === 'query' || C.responseMode === 'fragment') t.responseMode = C.responseMode;
        else throw 'Invalid value for responseMode';
      if (C.flow) {
        switch (C.flow) {
          case 'standard':
            t.responseType = 'code';
            break;
          case 'implicit':
            t.responseType = 'id_token token';
            break;
          case 'hybrid':
            t.responseType = 'code id_token token';
            break;
          default:
            throw 'Invalid value for flow';
        }
        t.flow = C.flow;
      }
      if (
        (C.timeSkew != null && (t.timeSkew = C.timeSkew),
        C.redirectUri && (t.redirectUri = C.redirectUri),
        C.silentCheckSsoRedirectUri && (t.silentCheckSsoRedirectUri = C.silentCheckSsoRedirectUri),
        typeof C.silentCheckSsoFallback == 'boolean'
          ? (t.silentCheckSsoFallback = C.silentCheckSsoFallback)
          : (t.silentCheckSsoFallback = !0),
        typeof C.pkceMethod < 'u')
      ) {
        if (C.pkceMethod !== 'S256' && C.pkceMethod !== !1)
          throw new TypeError(`Invalid value for pkceMethod', expected 'S256' or false but got ${C.pkceMethod}.`);
        t.pkceMethod = C.pkceMethod;
      } else t.pkceMethod = 'S256';
      typeof C.enableLogging == 'boolean' ? (t.enableLogging = C.enableLogging) : (t.enableLogging = !1),
        C.logoutMethod === 'POST' ? (t.logoutMethod = 'POST') : (t.logoutMethod = 'GET'),
        typeof C.scope == 'string' && (t.scope = C.scope),
        typeof C.acrValues == 'string' && (t.acrValues = C.acrValues),
        typeof C.messageReceiveTimeout == 'number' && C.messageReceiveTimeout > 0
          ? (t.messageReceiveTimeout = C.messageReceiveTimeout)
          : (t.messageReceiveTimeout = 1e4);
    }
    t.responseMode || (t.responseMode = 'fragment'), t.responseType || ((t.responseType = 'code'), (t.flow = 'standard'));
    var H = k(),
      q = k();
    q.promise
      .then(function () {
        t.onReady && t.onReady(t.authenticated), H.setSuccess(t.authenticated);
      })
      .catch(function (re) {
        H.setError(re);
      });
    var $ = B();
    function Y() {
      var re = function (de) {
          de || (se.prompt = 'none'),
            C && C.locale && (se.locale = C.locale),
            t
              .login(se)
              .then(function () {
                q.setSuccess();
              })
              .catch(function (Le) {
                q.setError(Le);
              });
        },
        te = function () {
          var de = document.createElement('iframe'),
            Le = t.createLoginUrl({ prompt: 'none', redirectUri: t.silentCheckSsoRedirectUri });
          de.setAttribute('src', Le),
            de.setAttribute('sandbox', 'allow-storage-access-by-user-activation allow-scripts allow-same-origin'),
            de.setAttribute('title', 'keycloak-silent-check-sso'),
            (de.style.display = 'none'),
            document.body.appendChild(de);
          var je = function (Me) {
            if (!(Me.origin !== window.location.origin || de.contentWindow !== Me.source)) {
              var Te = m(Me.data);
              N(Te, q), document.body.removeChild(de), window.removeEventListener('message', je);
            }
          };
          window.addEventListener('message', je);
        },
        se = {};
      switch (C.onLoad) {
        case 'check-sso':
          i.enable
            ? _().then(function () {
                U()
                  .then(function (de) {
                    de ? q.setSuccess() : t.silentCheckSsoRedirectUri ? te() : re(!1);
                  })
                  .catch(function (de) {
                    q.setError(de);
                  });
              })
            : t.silentCheckSsoRedirectUri
              ? te()
              : re(!1);
          break;
        case 'login-required':
          re(!0);
          break;
        default:
          throw 'Invalid value for onLoad';
      }
    }
    function J() {
      var re = m(window.location.href);
      if ((re && window.history.replaceState(window.history.state, null, re.newUrl), re && re.valid))
        return _()
          .then(function () {
            N(re, q);
          })
          .catch(function (te) {
            q.setError(te);
          });
      C
        ? C.token && C.refreshToken
          ? (L(C.token, C.refreshToken, C.idToken),
            i.enable
              ? _().then(function () {
                  U()
                    .then(function (te) {
                      te ? (t.onAuthSuccess && t.onAuthSuccess(), q.setSuccess(), O()) : q.setSuccess();
                    })
                    .catch(function (te) {
                      q.setError(te);
                    });
                })
              : t
                  .updateToken(-1)
                  .then(function () {
                    t.onAuthSuccess && t.onAuthSuccess(), q.setSuccess();
                  })
                  .catch(function (te) {
                    t.onAuthError && t.onAuthError(), C.onLoad ? Y() : q.setError(te);
                  }))
          : C.onLoad
            ? Y()
            : q.setSuccess()
        : q.setSuccess();
    }
    function Q() {
      var re = k(),
        te = function () {
          (document.readyState === 'interactive' || document.readyState === 'complete') &&
            (document.removeEventListener('readystatechange', te), re.setSuccess());
        };
      return document.addEventListener('readystatechange', te), te(), re.promise;
    }
    return (
      $.then(function () {
        Q()
          .then(x)
          .then(J)
          .catch(function (re) {
            H.setError(re);
          });
      }),
      $.catch(function (re) {
        H.setError(re);
      }),
      H.promise
    );
  }),
    (t.login = function (C) {
      return n.login(C);
    });
  function p(C) {
    var P = null,
      H = window.crypto || window.msCrypto;
    if (H && H.getRandomValues && window.Uint8Array) return (P = new Uint8Array(C)), H.getRandomValues(P), P;
    P = new Array(C);
    for (var q = 0; q < P.length; q++) P[q] = Math.floor(256 * Math.random());
    return P;
  }
  function f(C) {
    return h(C, 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789');
  }
  function h(C, P) {
    for (var H = p(C), q = new Array(C), $ = 0; $ < C; $++) q[$] = P.charCodeAt(H[$] % P.length);
    return String.fromCharCode.apply(null, q);
  }
  function b(C, P) {
    if (C !== 'S256') throw new TypeError(`Invalid value for 'pkceMethod', expected 'S256' but got '${C}'.`);
    const H = new Uint8Array(Zv.arrayBuffer(P));
    return nb(H).replace(/\+/g, '-').replace(/\//g, '_').replace(/\=/g, '');
  }
  function v(C) {
    var P = { id_token: { acr: C } };
    return JSON.stringify(P);
  }
  (t.createLoginUrl = function (C) {
    var P = g(),
      H = g(),
      q = n.redirectUri(C),
      $ = { state: P, nonce: H, redirectUri: encodeURIComponent(q), loginOptions: C };
    C && C.prompt && ($.prompt = C.prompt);
    var Y;
    C && C.action == 'register' ? (Y = t.endpoints.register()) : (Y = t.endpoints.authorize());
    var J = (C && C.scope) || t.scope;
    J ? J.indexOf('openid') === -1 && (J = 'openid ' + J) : (J = 'openid');
    var Q =
      Y +
      '?client_id=' +
      encodeURIComponent(t.clientId) +
      '&redirect_uri=' +
      encodeURIComponent(q) +
      '&state=' +
      encodeURIComponent(P) +
      '&response_mode=' +
      encodeURIComponent(t.responseMode) +
      '&response_type=' +
      encodeURIComponent(t.responseType) +
      '&scope=' +
      encodeURIComponent(J);
    if (
      (l && (Q = Q + '&nonce=' + encodeURIComponent(H)),
      C && C.prompt && (Q += '&prompt=' + encodeURIComponent(C.prompt)),
      C && C.maxAge && (Q += '&max_age=' + encodeURIComponent(C.maxAge)),
      C && C.loginHint && (Q += '&login_hint=' + encodeURIComponent(C.loginHint)),
      C && C.idpHint && (Q += '&kc_idp_hint=' + encodeURIComponent(C.idpHint)),
      C && C.action && C.action != 'register' && (Q += '&kc_action=' + encodeURIComponent(C.action)),
      C && C.locale && (Q += '&ui_locales=' + encodeURIComponent(C.locale)),
      C && C.acr)
    ) {
      var re = v(C.acr);
      Q += '&claims=' + encodeURIComponent(re);
    }
    if ((((C && C.acrValues) || t.acrValues) && (Q += '&acr_values=' + encodeURIComponent(C.acrValues || t.acrValues)), t.pkceMethod)) {
      var te = f(96);
      $.pkceCodeVerifier = te;
      var se = b(t.pkceMethod, te);
      (Q += '&code_challenge=' + se), (Q += '&code_challenge_method=' + t.pkceMethod);
    }
    return a.add($), Q;
  }),
    (t.logout = function (C) {
      return n.logout(C);
    }),
    (t.createLogoutUrl = function (C) {
      if ((C?.logoutMethod ?? t.logoutMethod) === 'POST') return t.endpoints.logout();
      var H =
        t.endpoints.logout() +
        '?client_id=' +
        encodeURIComponent(t.clientId) +
        '&post_logout_redirect_uri=' +
        encodeURIComponent(n.redirectUri(C, !1));
      return t.idToken && (H += '&id_token_hint=' + encodeURIComponent(t.idToken)), H;
    }),
    (t.register = function (C) {
      return n.register(C);
    }),
    (t.createRegisterUrl = function (C) {
      return C || (C = {}), (C.action = 'register'), t.createLoginUrl(C);
    }),
    (t.createAccountUrl = function (C) {
      var P = w(),
        H = void 0;
      return (
        typeof P < 'u' &&
          (H = P + '/account?referrer=' + encodeURIComponent(t.clientId) + '&referrer_uri=' + encodeURIComponent(n.redirectUri(C))),
        H
      );
    }),
    (t.accountManagement = function () {
      return n.accountManagement();
    }),
    (t.hasRealmRole = function (C) {
      var P = t.realmAccess;
      return !!P && P.roles.indexOf(C) >= 0;
    }),
    (t.hasResourceRole = function (C, P) {
      if (!t.resourceAccess) return !1;
      var H = t.resourceAccess[P || t.clientId];
      return !!H && H.roles.indexOf(C) >= 0;
    }),
    (t.loadUserProfile = function () {
      var C = w() + '/account',
        P = new XMLHttpRequest();
      P.open('GET', C, !0), P.setRequestHeader('Accept', 'application/json'), P.setRequestHeader('Authorization', 'bearer ' + t.token);
      var H = k();
      return (
        (P.onreadystatechange = function () {
          P.readyState == 4 && (P.status == 200 ? ((t.profile = JSON.parse(P.responseText)), H.setSuccess(t.profile)) : H.setError());
        }),
        P.send(),
        H.promise
      );
    }),
    (t.loadUserInfo = function () {
      var C = t.endpoints.userinfo(),
        P = new XMLHttpRequest();
      P.open('GET', C, !0), P.setRequestHeader('Accept', 'application/json'), P.setRequestHeader('Authorization', 'bearer ' + t.token);
      var H = k();
      return (
        (P.onreadystatechange = function () {
          P.readyState == 4 && (P.status == 200 ? ((t.userInfo = JSON.parse(P.responseText)), H.setSuccess(t.userInfo)) : H.setError());
        }),
        P.send(),
        H.promise
      );
    }),
    (t.isTokenExpired = function (C) {
      if (!t.tokenParsed || (!t.refreshToken && t.flow != 'implicit')) throw 'Not authenticated';
      if (t.timeSkew == null) return u('[KEYCLOAK] Unable to determine if token is expired as timeskew is not set'), !0;
      var P = t.tokenParsed.exp - Math.ceil(new Date().getTime() / 1e3) + t.timeSkew;
      if (C) {
        if (isNaN(C)) throw 'Invalid minValidity';
        P -= C;
      }
      return P < 0;
    }),
    (t.updateToken = function (C) {
      var P = k();
      if (!t.refreshToken) return P.setError(), P.promise;
      C = C || 5;
      var H = function () {
        var $ = !1;
        if (
          (C == -1
            ? (($ = !0), u('[KEYCLOAK] Refreshing token: forced refresh'))
            : (!t.tokenParsed || t.isTokenExpired(C)) && (($ = !0), u('[KEYCLOAK] Refreshing token: token expired')),
          !$)
        )
          P.setSuccess(!1);
        else {
          var Y = 'grant_type=refresh_token&refresh_token=' + t.refreshToken,
            J = t.endpoints.token();
          if ((r.push(P), r.length == 1)) {
            var Q = new XMLHttpRequest();
            Q.open('POST', J, !0),
              Q.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
              (Q.withCredentials = !0),
              (Y += '&client_id=' + encodeURIComponent(t.clientId));
            var re = new Date().getTime();
            (Q.onreadystatechange = function () {
              if (Q.readyState == 4)
                if (Q.status == 200) {
                  u('[KEYCLOAK] Token refreshed'), (re = (re + new Date().getTime()) / 2);
                  var te = JSON.parse(Q.responseText);
                  L(te.access_token, te.refresh_token, te.id_token, re), t.onAuthRefreshSuccess && t.onAuthRefreshSuccess();
                  for (var se = r.pop(); se != null; se = r.pop()) se.setSuccess(!0);
                } else {
                  d('[KEYCLOAK] Failed to refresh token'),
                    Q.status == 400 && t.clearToken(),
                    t.onAuthRefreshError && t.onAuthRefreshError();
                  for (var se = r.pop(); se != null; se = r.pop()) se.setError(!0);
                }
            }),
              Q.send(Y);
          }
        }
      };
      if (i.enable) {
        var q = U();
        q.then(function () {
          H();
        }).catch(function ($) {
          P.setError($);
        });
      } else H();
      return P.promise;
    }),
    (t.clearToken = function () {
      t.token && (L(null, null, null), t.onAuthLogout && t.onAuthLogout(), t.loginRequired && t.login());
    });
  function w() {
    if (typeof t.authServerUrl < 'u')
      return t.authServerUrl.charAt(t.authServerUrl.length - 1) == '/'
        ? t.authServerUrl + 'realms/' + encodeURIComponent(t.realm)
        : t.authServerUrl + '/realms/' + encodeURIComponent(t.realm);
  }
  function T() {
    return window.location.origin
      ? window.location.origin
      : window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
  }
  function N(C, P) {
    var H = C.code,
      q = C.error,
      $ = C.prompt,
      Y = new Date().getTime();
    if ((C.kc_action_status && t.onActionUpdate && t.onActionUpdate(C.kc_action_status), q)) {
      if ($ != 'none')
        if (C.error_description && C.error_description === 'authentication_expired') t.login(C.loginOptions);
        else {
          var J = { error: q, error_description: C.error_description };
          t.onAuthError && t.onAuthError(J), P && P.setError(J);
        }
      else P && P.setSuccess();
      return;
    } else t.flow != 'standard' && (C.access_token || C.id_token) && se(C.access_token, null, C.id_token, !0);
    if (t.flow != 'implicit' && H) {
      var Q = 'code=' + H + '&grant_type=authorization_code',
        re = t.endpoints.token(),
        te = new XMLHttpRequest();
      te.open('POST', re, !0),
        te.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'),
        (Q += '&client_id=' + encodeURIComponent(t.clientId)),
        (Q += '&redirect_uri=' + C.redirectUri),
        C.pkceCodeVerifier && (Q += '&code_verifier=' + C.pkceCodeVerifier),
        (te.withCredentials = !0),
        (te.onreadystatechange = function () {
          if (te.readyState == 4)
            if (te.status == 200) {
              var de = JSON.parse(te.responseText);
              se(de.access_token, de.refresh_token, de.id_token, t.flow === 'standard'), O();
            } else t.onAuthError && t.onAuthError(), P && P.setError();
        }),
        te.send(Q);
    }
    function se(de, Le, je, Me) {
      (Y = (Y + new Date().getTime()) / 2),
        L(de, Le, je, Y),
        l && t.idTokenParsed && t.idTokenParsed.nonce != C.storedNonce
          ? (u('[KEYCLOAK] Invalid nonce, clearing token'), t.clearToken(), P && P.setError())
          : Me && (t.onAuthSuccess && t.onAuthSuccess(), P && P.setSuccess());
    }
  }
  function B(C) {
    var P = k(),
      H;
    e ? typeof e == 'string' && (H = e) : (H = 'keycloak.json');
    function q(te) {
      te
        ? (t.endpoints = {
            authorize: function () {
              return te.authorization_endpoint;
            },
            token: function () {
              return te.token_endpoint;
            },
            logout: function () {
              if (!te.end_session_endpoint) throw 'Not supported by the OIDC server';
              return te.end_session_endpoint;
            },
            checkSessionIframe: function () {
              if (!te.check_session_iframe) throw 'Not supported by the OIDC server';
              return te.check_session_iframe;
            },
            register: function () {
              throw 'Redirection to "Register user" page not supported in standard OIDC mode';
            },
            userinfo: function () {
              if (!te.userinfo_endpoint) throw 'Not supported by the OIDC server';
              return te.userinfo_endpoint;
            },
          })
        : (t.endpoints = {
            authorize: function () {
              return w() + '/protocol/openid-connect/auth';
            },
            token: function () {
              return w() + '/protocol/openid-connect/token';
            },
            logout: function () {
              return w() + '/protocol/openid-connect/logout';
            },
            checkSessionIframe: function () {
              var se = w() + '/protocol/openid-connect/login-status-iframe.html';
              return t.iframeVersion && (se = se + '?version=' + t.iframeVersion), se;
            },
            thirdPartyCookiesIframe: function () {
              var se = w() + '/protocol/openid-connect/3p-cookies/step1.html';
              return t.iframeVersion && (se = se + '?version=' + t.iframeVersion), se;
            },
            register: function () {
              return w() + '/protocol/openid-connect/registrations';
            },
            userinfo: function () {
              return w() + '/protocol/openid-connect/userinfo';
            },
          });
    }
    if (H) {
      var $ = new XMLHttpRequest();
      $.open('GET', H, !0),
        $.setRequestHeader('Accept', 'application/json'),
        ($.onreadystatechange = function () {
          if ($.readyState == 4)
            if ($.status == 200 || A($)) {
              var te = JSON.parse($.responseText);
              (t.authServerUrl = te['auth-server-url']), (t.realm = te.realm), (t.clientId = te.resource), q(null), P.setSuccess();
            } else P.setError();
        }),
        $.send();
    } else {
      if (!e.clientId) throw 'clientId missing';
      t.clientId = e.clientId;
      var Y = e.oidcProvider;
      if (Y)
        if (typeof Y == 'string') {
          var re;
          Y.charAt(Y.length - 1) == '/' ? (re = Y + '.well-known/openid-configuration') : (re = Y + '/.well-known/openid-configuration');
          var $ = new XMLHttpRequest();
          $.open('GET', re, !0),
            $.setRequestHeader('Accept', 'application/json'),
            ($.onreadystatechange = function () {
              if ($.readyState == 4)
                if ($.status == 200 || A($)) {
                  var se = JSON.parse($.responseText);
                  q(se), P.setSuccess();
                } else P.setError();
            }),
            $.send();
        } else q(Y), P.setSuccess();
      else {
        if (!e.url) {
          for (var J = document.getElementsByTagName('script'), Q = 0; Q < J.length; Q++)
            if (J[Q].src.match(/.*keycloak\.js/)) {
              e.url = J[Q].src.substr(0, J[Q].src.indexOf('/js/keycloak.js'));
              break;
            }
        }
        if (!e.realm) throw 'realm missing';
        (t.authServerUrl = e.url), (t.realm = e.realm), q(null), P.setSuccess();
      }
    }
    return P.promise;
  }
  function A(C) {
    return C.status == 0 && C.responseText && C.responseURL.startsWith('file:');
  }
  function L(C, P, H, q) {
    if (
      (t.tokenTimeoutHandle && (clearTimeout(t.tokenTimeoutHandle), (t.tokenTimeoutHandle = null)),
      P ? ((t.refreshToken = P), (t.refreshTokenParsed = no(P))) : (delete t.refreshToken, delete t.refreshTokenParsed),
      H ? ((t.idToken = H), (t.idTokenParsed = no(H))) : (delete t.idToken, delete t.idTokenParsed),
      C)
    ) {
      if (
        ((t.token = C),
        (t.tokenParsed = no(C)),
        (t.sessionId = t.tokenParsed.sid),
        (t.authenticated = !0),
        (t.subject = t.tokenParsed.sub),
        (t.realmAccess = t.tokenParsed.realm_access),
        (t.resourceAccess = t.tokenParsed.resource_access),
        q && (t.timeSkew = Math.floor(q / 1e3) - t.tokenParsed.iat),
        t.timeSkew != null &&
          (u('[KEYCLOAK] Estimated time difference between browser and server is ' + t.timeSkew + ' seconds'), t.onTokenExpired))
      ) {
        var $ = (t.tokenParsed.exp - new Date().getTime() / 1e3 + t.timeSkew) * 1e3;
        u('[KEYCLOAK] Token expires in ' + Math.round($ / 1e3) + ' s'),
          $ <= 0 ? t.onTokenExpired() : (t.tokenTimeoutHandle = setTimeout(t.onTokenExpired, $));
      }
    } else delete t.token, delete t.tokenParsed, delete t.subject, delete t.realmAccess, delete t.resourceAccess, (t.authenticated = !1);
  }
  function g() {
    var C = '0123456789abcdef',
      P = h(36, C).split('');
    (P[14] = '4'), (P[19] = C.substr((P[19] & 3) | 8, 1)), (P[8] = P[13] = P[18] = P[23] = '-');
    var H = P.join('');
    return H;
  }
  function m(C) {
    var P = S(C);
    if (P) {
      var H = a.get(P.state);
      return (
        H &&
          ((P.valid = !0),
          (P.redirectUri = H.redirectUri),
          (P.storedNonce = H.nonce),
          (P.prompt = H.prompt),
          (P.pkceCodeVerifier = H.pkceCodeVerifier),
          (P.loginOptions = H.loginOptions)),
        P
      );
    }
  }
  function S(C) {
    var P;
    switch (t.flow) {
      case 'standard':
        P = ['code', 'state', 'session_state', 'kc_action_status', 'iss'];
        break;
      case 'implicit':
        P = ['access_token', 'token_type', 'id_token', 'state', 'session_state', 'expires_in', 'kc_action_status', 'iss'];
        break;
      case 'hybrid':
        P = ['access_token', 'token_type', 'id_token', 'code', 'state', 'session_state', 'expires_in', 'kc_action_status', 'iss'];
        break;
    }
    P.push('error'), P.push('error_description'), P.push('error_uri');
    var H = C.indexOf('?'),
      q = C.indexOf('#'),
      $,
      Y;
    if (
      (t.responseMode === 'query' && H !== -1
        ? (($ = C.substring(0, H)),
          (Y = E(C.substring(H + 1, q !== -1 ? q : C.length), P)),
          Y.paramsString !== '' && ($ += '?' + Y.paramsString),
          q !== -1 && ($ += C.substring(q)))
        : t.responseMode === 'fragment' &&
          q !== -1 &&
          (($ = C.substring(0, q)), (Y = E(C.substring(q + 1), P)), Y.paramsString !== '' && ($ += '#' + Y.paramsString)),
      Y && Y.oauthParams)
    ) {
      if (t.flow === 'standard' || t.flow === 'hybrid') {
        if ((Y.oauthParams.code || Y.oauthParams.error) && Y.oauthParams.state) return (Y.oauthParams.newUrl = $), Y.oauthParams;
      } else if (t.flow === 'implicit' && (Y.oauthParams.access_token || Y.oauthParams.error) && Y.oauthParams.state)
        return (Y.oauthParams.newUrl = $), Y.oauthParams;
    }
  }
  function E(C, P) {
    for (var H = C.split('&'), q = { paramsString: '', oauthParams: {} }, $ = 0; $ < H.length; $++) {
      var Y = H[$].indexOf('='),
        J = H[$].slice(0, Y);
      P.indexOf(J) !== -1
        ? (q.oauthParams[J] = H[$].slice(Y + 1))
        : (q.paramsString !== '' && (q.paramsString += '&'), (q.paramsString += H[$]));
    }
    return q;
  }
  function k() {
    var C = {
      setSuccess: function (P) {
        C.resolve(P);
      },
      setError: function (P) {
        C.reject(P);
      },
    };
    return (
      (C.promise = new Promise(function (P, H) {
        (C.resolve = P), (C.reject = H);
      })),
      C
    );
  }
  function y(C, P, H) {
    var q = null,
      $ = new Promise(function (Y, J) {
        q = setTimeout(function () {
          J({ error: H });
        }, P);
      });
    return Promise.race([C, $]).finally(function () {
      clearTimeout(q);
    });
  }
  function _() {
    var C = k();
    if (!i.enable || i.iframe) return C.setSuccess(), C.promise;
    var P = document.createElement('iframe');
    (i.iframe = P),
      (P.onload = function () {
        var $ = t.endpoints.authorize();
        $.charAt(0) === '/' ? (i.iframeOrigin = T()) : (i.iframeOrigin = $.substring(0, $.indexOf('/', 8))), C.setSuccess();
      });
    var H = t.endpoints.checkSessionIframe();
    P.setAttribute('src', H),
      P.setAttribute('sandbox', 'allow-storage-access-by-user-activation allow-scripts allow-same-origin'),
      P.setAttribute('title', 'keycloak-session-iframe'),
      (P.style.display = 'none'),
      document.body.appendChild(P);
    var q = function ($) {
      if (
        !($.origin !== i.iframeOrigin || i.iframe.contentWindow !== $.source) &&
        ($.data == 'unchanged' || $.data == 'changed' || $.data == 'error')
      ) {
        $.data != 'unchanged' && t.clearToken();
        for (var Y = i.callbackList.splice(0, i.callbackList.length), J = Y.length - 1; J >= 0; --J) {
          var Q = Y[J];
          $.data == 'error' ? Q.setError() : Q.setSuccess($.data == 'unchanged');
        }
      }
    };
    return window.addEventListener('message', q, !1), C.promise;
  }
  function O() {
    i.enable &&
      t.token &&
      setTimeout(function () {
        U().then(function (C) {
          C && O();
        });
      }, i.interval * 1e3);
  }
  function U() {
    var C = k();
    if (i.iframe && i.iframeOrigin) {
      var P = t.clientId + ' ' + (t.sessionId ? t.sessionId : '');
      i.callbackList.push(C);
      var H = i.iframeOrigin;
      i.callbackList.length == 1 && i.iframe.contentWindow.postMessage(P, H);
    } else C.setSuccess();
    return C.promise;
  }
  function x() {
    var C = k();
    if (i.enable || t.silentCheckSsoRedirectUri) {
      var P = document.createElement('iframe');
      P.setAttribute('src', t.endpoints.thirdPartyCookiesIframe()),
        P.setAttribute('sandbox', 'allow-storage-access-by-user-activation allow-scripts allow-same-origin'),
        P.setAttribute('title', 'keycloak-3p-check-iframe'),
        (P.style.display = 'none'),
        document.body.appendChild(P);
      var H = function (q) {
        P.contentWindow === q.source &&
          ((q.data !== 'supported' && q.data !== 'unsupported') ||
            (q.data === 'unsupported' &&
              (d(`[KEYCLOAK] Your browser is blocking access to 3rd-party cookies, this means:

 - It is not possible to retrieve tokens without redirecting to the Keycloak server (a.k.a. no support for silent authentication).
 - It is not possible to automatically detect changes to the session status (such as the user logging out in another tab).

For more information see: https://www.keycloak.org/docs/latest/securing_apps/#_modern_browsers`),
              (i.enable = !1),
              t.silentCheckSsoFallback && (t.silentCheckSsoRedirectUri = !1)),
            document.body.removeChild(P),
            window.removeEventListener('message', H),
            C.setSuccess()));
      };
      window.addEventListener('message', H, !1);
    } else C.setSuccess();
    return y(C.promise, t.messageReceiveTimeout, 'Timeout when waiting for 3rd party check iframe message.');
  }
  function D(C) {
    if (!C || C == 'default')
      return {
        login: function (J) {
          return window.location.assign(t.createLoginUrl(J)), k().promise;
        },
        logout: async function (J) {
          if ((J?.logoutMethod ?? t.logoutMethod) === 'GET') {
            window.location.replace(t.createLogoutUrl(J));
            return;
          }
          const re = t.createLogoutUrl(J),
            te = await fetch(re, {
              method: 'POST',
              headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
              body: new URLSearchParams({
                id_token_hint: t.idToken,
                client_id: t.clientId,
                post_logout_redirect_uri: n.redirectUri(J, !1),
              }),
            });
          if (te.redirected) {
            window.location.href = te.url;
            return;
          }
          if (te.ok) {
            window.location.reload();
            return;
          }
          throw new Error('Logout failed, request returned an error code.');
        },
        register: function (J) {
          return window.location.assign(t.createRegisterUrl(J)), k().promise;
        },
        accountManagement: function () {
          var J = t.createAccountUrl();
          if (typeof J < 'u') window.location.href = J;
          else throw 'Not supported by the OIDC server';
          return k().promise;
        },
        redirectUri: function (J, Q) {
          return J && J.redirectUri ? J.redirectUri : t.redirectUri ? t.redirectUri : location.href;
        },
      };
    if (C == 'cordova') {
      i.enable = !1;
      var P = function (J, Q, re) {
          return window.cordova && window.cordova.InAppBrowser ? window.cordova.InAppBrowser.open(J, Q, re) : window.open(J, Q, re);
        },
        H = function (J) {
          return J && J.cordovaOptions
            ? Object.keys(J.cordovaOptions).reduce(function (Q, re) {
                return (Q[re] = J.cordovaOptions[re]), Q;
              }, {})
            : {};
        },
        q = function (J) {
          return Object.keys(J)
            .reduce(function (Q, re) {
              return Q.push(re + '=' + J[re]), Q;
            }, [])
            .join(',');
        },
        $ = function (J) {
          var Q = H(J);
          return (Q.location = 'no'), J && J.prompt == 'none' && (Q.hidden = 'yes'), q(Q);
        },
        Y = function () {
          return t.redirectUri || 'http://localhost';
        };
      return {
        login: function (J) {
          var Q = k(),
            re = $(J),
            te = t.createLoginUrl(J),
            se = P(te, '_blank', re),
            de = !1,
            Le = !1,
            je = function () {
              (Le = !0), se.close();
            };
          return (
            se.addEventListener('loadstart', function (Me) {
              if (Me.url.indexOf(Y()) == 0) {
                var Te = m(Me.url);
                N(Te, Q), je(), (de = !0);
              }
            }),
            se.addEventListener('loaderror', function (Me) {
              if (!de)
                if (Me.url.indexOf(Y()) == 0) {
                  var Te = m(Me.url);
                  N(Te, Q), je(), (de = !0);
                } else Q.setError(), je();
            }),
            se.addEventListener('exit', function (Me) {
              Le || Q.setError({ reason: 'closed_by_user' });
            }),
            Q.promise
          );
        },
        logout: function (J) {
          var Q = k(),
            re = t.createLogoutUrl(J),
            te = P(re, '_blank', 'location=no,hidden=yes,clearcache=yes'),
            se;
          return (
            te.addEventListener('loadstart', function (de) {
              de.url.indexOf(Y()) == 0 && te.close();
            }),
            te.addEventListener('loaderror', function (de) {
              de.url.indexOf(Y()) == 0 || (se = !0), te.close();
            }),
            te.addEventListener('exit', function (de) {
              se ? Q.setError() : (t.clearToken(), Q.setSuccess());
            }),
            Q.promise
          );
        },
        register: function (J) {
          var Q = k(),
            re = t.createRegisterUrl(),
            te = $(J),
            se = P(re, '_blank', te);
          return (
            se.addEventListener('loadstart', function (de) {
              if (de.url.indexOf(Y()) == 0) {
                se.close();
                var Le = m(de.url);
                N(Le, Q);
              }
            }),
            Q.promise
          );
        },
        accountManagement: function () {
          var J = t.createAccountUrl();
          if (typeof J < 'u') {
            var Q = P(J, '_blank', 'location=no');
            Q.addEventListener('loadstart', function (re) {
              re.url.indexOf(Y()) == 0 && Q.close();
            });
          } else throw 'Not supported by the OIDC server';
        },
        redirectUri: function (J) {
          return Y();
        },
      };
    }
    if (C == 'cordova-native')
      return (
        (i.enable = !1),
        {
          login: function (J) {
            var Q = k(),
              re = t.createLoginUrl(J);
            return (
              universalLinks.subscribe('keycloak', function (te) {
                universalLinks.unsubscribe('keycloak'), window.cordova.plugins.browsertab.close();
                var se = m(te.url);
                N(se, Q);
              }),
              window.cordova.plugins.browsertab.openUrl(re),
              Q.promise
            );
          },
          logout: function (J) {
            var Q = k(),
              re = t.createLogoutUrl(J);
            return (
              universalLinks.subscribe('keycloak', function (te) {
                universalLinks.unsubscribe('keycloak'), window.cordova.plugins.browsertab.close(), t.clearToken(), Q.setSuccess();
              }),
              window.cordova.plugins.browsertab.openUrl(re),
              Q.promise
            );
          },
          register: function (J) {
            var Q = k(),
              re = t.createRegisterUrl(J);
            return (
              universalLinks.subscribe('keycloak', function (te) {
                universalLinks.unsubscribe('keycloak'), window.cordova.plugins.browsertab.close();
                var se = m(te.url);
                N(se, Q);
              }),
              window.cordova.plugins.browsertab.openUrl(re),
              Q.promise
            );
          },
          accountManagement: function () {
            var J = t.createAccountUrl();
            if (typeof J < 'u') window.cordova.plugins.browsertab.openUrl(J);
            else throw 'Not supported by the OIDC server';
          },
          redirectUri: function (J) {
            return J && J.redirectUri ? J.redirectUri : t.redirectUri ? t.redirectUri : 'http://localhost';
          },
        }
      );
    throw 'invalid adapter type: ' + C;
  }
  var G = function () {
      if (!(this instanceof G)) return new G();
      localStorage.setItem('kc-test', 'test'), localStorage.removeItem('kc-test');
      var C = this;
      function P() {
        for (var H = new Date().getTime(), q = 0; q < localStorage.length; q++) {
          var $ = localStorage.key(q);
          if ($ && $.indexOf('kc-callback-') == 0) {
            var Y = localStorage.getItem($);
            if (Y)
              try {
                var J = JSON.parse(Y).expires;
                (!J || J < H) && localStorage.removeItem($);
              } catch {
                localStorage.removeItem($);
              }
          }
        }
      }
      (C.get = function (H) {
        if (H) {
          var q = 'kc-callback-' + H,
            $ = localStorage.getItem(q);
          return $ && (localStorage.removeItem(q), ($ = JSON.parse($))), P(), $;
        }
      }),
        (C.add = function (H) {
          P();
          var q = 'kc-callback-' + H.state;
          (H.expires = new Date().getTime() + 60 * 60 * 1e3), localStorage.setItem(q, JSON.stringify(H));
        });
    },
    z = function () {
      if (!(this instanceof z)) return new z();
      var C = this;
      (C.get = function ($) {
        if ($) {
          var Y = H('kc-callback-' + $);
          if ((q('kc-callback-' + $, '', P(-100)), Y)) return JSON.parse(Y);
        }
      }),
        (C.add = function ($) {
          q('kc-callback-' + $.state, JSON.stringify($), P(60));
        }),
        (C.removeItem = function ($) {
          q($, '', P(-100));
        });
      var P = function ($) {
          var Y = new Date();
          return Y.setTime(Y.getTime() + $ * 60 * 1e3), Y;
        },
        H = function ($) {
          for (var Y = $ + '=', J = document.cookie.split(';'), Q = 0; Q < J.length; Q++) {
            for (var re = J[Q]; re.charAt(0) == ' '; ) re = re.substring(1);
            if (re.indexOf(Y) == 0) return re.substring(Y.length, re.length);
          }
          return '';
        },
        q = function ($, Y, J) {
          var Q = $ + '=' + Y + '; expires=' + J.toUTCString() + '; ';
          document.cookie = Q;
        };
    };
  function K() {
    try {
      return new G();
    } catch {}
    return new z();
  }
  function ne(C) {
    return function () {
      t.enableLogging && C.apply(console, Array.prototype.slice.call(arguments));
    };
  }
}
function nb(e) {
  const t = String.fromCodePoint(...e);
  return btoa(t);
}
const rb = {
    name: 'BarsIcon',
    height: 512,
    width: 448,
    svgPath:
      'M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z',
    yOffset: 0,
    xOffset: 0,
  },
  ab = ke(rb),
  ib = {
    name: 'BitbucketIcon',
    height: 512,
    width: 512,
    svgPath:
      'M22.2 32A16 16 0 0 0 6 47.8a26.35 26.35 0 0 0 .2 2.8l67.9 412.1a21.77 21.77 0 0 0 21.3 18.2h325.7a16 16 0 0 0 16-13.4L505 50.7a16 16 0 0 0-13.2-18.3 24.58 24.58 0 0 0-2.8-.2L22.2 32zm285.9 297.8h-104l-28.1-147h157.3l-25.2 147z',
    yOffset: 0,
    xOffset: 0,
  },
  ob = ke(ib),
  sb = {
    name: 'CubeIcon',
    height: 512,
    width: 512,
    svgPath:
      'M239.1 6.3l-208 78c-18.7 7-31.1 25-31.1 45v225.1c0 18.2 10.3 34.8 26.5 42.9l208 104c13.5 6.8 29.4 6.8 42.9 0l208-104c16.3-8.1 26.5-24.8 26.5-42.9V129.3c0-20-12.4-37.9-31.1-44.9l-208-78C262 2.2 250 2.2 239.1 6.3zM256 68.4l192 72v1.1l-192 78-192-78v-1.1l192-72zm32 356V275.5l160-65v133.9l-160 80z',
    yOffset: 0,
    xOffset: 0,
  },
  lb = ke(sb),
  cb = {
    name: 'EllipsisVIcon',
    height: 512,
    width: 192,
    svgPath:
      'M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z',
    yOffset: 0,
    xOffset: 0,
  },
  db = ke(cb),
  ub = {
    name: 'ExternalLinkSquareAltIcon',
    height: 512,
    width: 448,
    svgPath:
      'M448 80v352c0 26.51-21.49 48-48 48H48c-26.51 0-48-21.49-48-48V80c0-26.51 21.49-48 48-48h352c26.51 0 48 21.49 48 48zm-88 16H248.029c-21.313 0-32.08 25.861-16.971 40.971l31.984 31.987L67.515 364.485c-4.686 4.686-4.686 12.284 0 16.971l31.029 31.029c4.687 4.686 12.285 4.686 16.971 0l195.526-195.526 31.988 31.991C358.058 263.977 384 253.425 384 231.979V120c0-13.255-10.745-24-24-24z',
    yOffset: 0,
    xOffset: 0,
  },
  fb = ke(ub),
  pb = {
    name: 'FacebookSquareIcon',
    height: 512,
    width: 448,
    svgPath:
      'M400 32H48A48 48 0 0 0 0 80v352a48 48 0 0 0 48 48h137.25V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.27c-30.81 0-40.42 19.12-40.42 38.73V256h68.78l-11 71.69h-57.78V480H400a48 48 0 0 0 48-48V80a48 48 0 0 0-48-48z',
    yOffset: 0,
    xOffset: 0,
  },
  mb = ke(pb),
  hb = {
    name: 'GithubIcon',
    height: 512,
    width: 496,
    svgPath:
      'M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z',
    yOffset: 0,
    xOffset: 0,
  },
  gb = ke(hb),
  vb = {
    name: 'GitlabIcon',
    height: 512,
    width: 512,
    svgPath:
      'M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z',
    yOffset: 0,
    xOffset: 0,
  },
  bb = ke(vb),
  yb = {
    name: 'GoogleIcon',
    height: 512,
    width: 488,
    svgPath:
      'M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z',
    yOffset: 0,
    xOffset: 0,
  },
  xb = ke(yb),
  wb = {
    name: 'HelpIcon',
    height: 1024,
    width: 1024,
    svgPath:
      'M521.3,576 C627.5,576 713.7,502 713.7,413.7 C713.7,325.4 627.6,253.6 521.3,253.6 C366,253.6 334.5,337.7 329.2,407.2 C329.2,414.3 335.2,416 343.5,416 L445,416 C450.5,416 458,415.5 460.8,406.5 C460.8,362.6 582.9,357.1 582.9,413.6 C582.9,441.9 556.2,470.9 521.3,473 C486.4,475.1 447.3,479.8 447.3,521.7 L447.3,553.8 C447.3,570.8 456.1,576 472,576 C487.9,576 521.3,576 521.3,576 M575.3,751.3 L575.3,655.3 C575.313862,651.055109 573.620137,646.982962 570.6,644 C567.638831,640.947672 563.552355,639.247987 559.3,639.29884 L463.3,639.29884 C459.055109,639.286138 454.982962,640.979863 452,644 C448.947672,646.961169 447.247987,651.047645 447.29884,655.3 L447.29884,751.3 C447.286138,755.544891 448.979863,759.617038 452,762.6 C454.961169,765.652328 459.047645,767.352013 463.3,767.30116 L559.3,767.30116 C563.544891,767.313862 567.617038,765.620137 570.6,762.6 C573.659349,759.643612 575.360354,755.553963 575.3,751.3 M512,896 C300.2,896 128,723.9 128,512 C128,300.3 300.2,128 512,128 C723.8,128 896,300.2 896,512 C896,723.8 723.7,896 512,896 M512.1,0 C229.7,0 0,229.8 0,512 C0,794.2 229.8,1024 512.1,1024 C794.4,1024 1024,794.3 1024,512 C1024,229.7 794.4,0 512.1,0',
    yOffset: 0,
    xOffset: 0,
  },
  rc = ke(wb),
  Cb = {
    name: 'InstagramIcon',
    height: 512,
    width: 448,
    svgPath:
      'M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z',
    yOffset: 0,
    xOffset: 0,
  },
  Ob = ke(Cb),
  _b = {
    name: 'LinkedinIcon',
    height: 512,
    width: 448,
    svgPath:
      'M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z',
    yOffset: 0,
    xOffset: 0,
  },
  Eb = ke(_b),
  Sb = {
    name: 'MicrosoftIcon',
    height: 512,
    width: 448,
    svgPath: 'M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z',
    yOffset: 0,
    xOffset: 0,
  },
  kb = ke(Sb),
  Lb = {
    name: 'MinusCircleIcon',
    height: 512,
    width: 512,
    svgPath:
      'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zM124 296c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h264c6.6 0 12 5.4 12 12v56c0 6.6-5.4 12-12 12H124z',
    yOffset: 0,
    xOffset: 0,
  },
  Ib = ke(Lb),
  Rb = {
    name: 'OpenshiftIcon',
    height: 100,
    width: 100,
    svgPath:
      'M145.7,45.3l-16.1,5.8c0.2,2.6,0.6,5.1,1.3,7.6l15.3-5.6C145.7,50.6,145.5,47.9,145.7,45.3M216.7,27.5c-1.1-2.3-2.4-4.5-3.9-6.6l-16.1,5.8c1.9,1.9,3.4,4.1,4.7,6.4L216.7,27.5zM181.4,23c3.3,1.6,6.2,3.7,8.7,6.2l16.1-5.8c-4.4-6.2-10.5-11.5-17.9-14.9c-22.9-10.7-50.3-0.7-61,22.2c-3.5,7.4-4.8,15.3-4.1,23l16.1-5.8c0.3-3.5,1.1-7,2.7-10.3C148.7,22.5,166.4,16,181.4,23M131.9,58.4l-15.3,5.6c1.4,5.6,3.8,10.8,7.2,15.5l16-5.8C135.8,69.4,133,64.1,131.9,58.4M198.5,52.3c-0.3,3.5-1.1,7-2.7,10.3C188.8,77.5,171,84,156.1,77c-3.3-1.6-6.3-3.7-8.7-6.2l-16,5.8c4.4,6.2,10.5,11.5,17.9,14.9c22.9,10.7,50.3,0.7,61-22.2c3.5-7.4,4.7-15.3,4.1-22.9L198.5,52.3zM202.4,32.7l-15.3,5.6c2.8,5.1,4.2,10.9,3.7,16.8l16-5.8C206.5,43.5,204.9,37.9,202.4,32.7',
    yOffset: 0,
    xOffset: 116,
  },
  Nb = ke(Rb),
  Tb = {
    name: 'PaypalIcon',
    height: 512,
    width: 384,
    svgPath:
      'M111.4 295.9c-3.5 19.2-17.4 108.7-21.5 134-.3 1.8-1 2.5-3 2.5H12.3c-7.6 0-13.1-6.6-12.1-13.9L58.8 46.6c1.5-9.6 10.1-16.9 20-16.9 152.3 0 165.1-3.7 204 11.4 60.1 23.3 65.6 79.5 44 140.3-21.5 62.6-72.5 89.5-140.1 90.3-43.4.7-69.5-7-75.3 24.2zM357.1 152c-1.8-1.3-2.5-1.8-3 1.3-2 11.4-5.1 22.5-8.8 33.6-39.9 113.8-150.5 103.9-204.5 103.9-6.1 0-10.1 3.3-10.9 9.4-22.6 140.4-27.1 169.7-27.1 169.7-1 7.1 3.5 12.9 10.6 12.9h63.5c8.6 0 15.7-6.3 17.4-14.9.7-5.4-1.1 6.1 14.4-91.3 4.6-22 14.3-19.7 29.3-19.7 71 0 126.4-28.8 142.9-112.3 6.5-34.8 4.6-71.4-23.8-92.6z',
    yOffset: 0,
    xOffset: 0,
  },
  Pb = ke(Tb),
  Ab = {
    name: 'PlusCircleIcon',
    height: 512,
    width: 512,
    svgPath:
      'M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z',
    yOffset: 0,
    xOffset: 0,
  },
  Fb = ke(Ab),
  Mb = {
    name: 'StackOverflowIcon',
    height: 512,
    width: 384,
    svgPath:
      'M290.7 311L95 269.7 86.8 309l195.7 41zm51-87L188.2 95.7l-25.5 30.8 153.5 128.3zm-31.2 39.7L129.2 179l-16.7 36.5L293.7 300zM262 32l-32 24 119.3 160.3 32-24zm20.5 328h-200v39.7h200zm39.7 80H42.7V320h-40v160h359.5V320h-40z',
    yOffset: 0,
    xOffset: 0,
  },
  Db = ke(Mb),
  jb = {
    name: 'TwitterIcon',
    height: 512,
    width: 512,
    svgPath:
      'M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z',
    yOffset: 0,
    xOffset: 0,
  },
  Bb = ke(jb);
var Ea = e => e.type === 'checkbox',
  cr = e => e instanceof Date,
  pt = e => e == null;
const Cu = e => typeof e == 'object';
var Ze = e => !pt(e) && !Array.isArray(e) && Cu(e) && !cr(e),
  Ou = e => (Ze(e) && e.target ? (Ea(e.target) ? e.target.checked : e.target.value) : e),
  Ub = e => e.substring(0, e.search(/\.\d+(\.|$)/)) || e,
  _u = (e, t) => e.has(Ub(t)),
  Vb = e => {
    const t = e.constructor && e.constructor.prototype;
    return Ze(t) && t.hasOwnProperty('isPrototypeOf');
  },
  ks = typeof window < 'u' && typeof window.HTMLElement < 'u' && typeof document < 'u';
function Qe(e) {
  let t;
  const n = Array.isArray(e);
  if (e instanceof Date) t = new Date(e);
  else if (e instanceof Set) t = new Set(e);
  else if (!(ks && (e instanceof Blob || e instanceof FileList)) && (n || Ze(e)))
    if (((t = n ? [] : {}), !n && !Vb(e))) t = e;
    else for (const r in e) e.hasOwnProperty(r) && (t[r] = Qe(e[r]));
  else return e;
  return t;
}
var Pr = e => (Array.isArray(e) ? e.filter(Boolean) : []),
  De = e => e === void 0,
  ce = (e, t, n) => {
    if (!t || !Ze(e)) return n;
    const r = Pr(t.split(/[,[\].]+?/)).reduce((a, i) => (pt(a) ? a : a[i]), e);
    return De(r) || r === e ? (De(e[t]) ? n : e[t]) : r;
  },
  $t = e => typeof e == 'boolean',
  Ls = e => /^\w*$/.test(e),
  Eu = e => Pr(e.replace(/["|']|\]/g, '').split(/\.|\[/)),
  Fe = (e, t, n) => {
    let r = -1;
    const a = Ls(t) ? [t] : Eu(t),
      i = a.length,
      o = i - 1;
    for (; ++r < i; ) {
      const s = a[r];
      let l = n;
      if (r !== o) {
        const u = e[s];
        l = Ze(u) || Array.isArray(u) ? u : isNaN(+a[r + 1]) ? {} : [];
      }
      if (s === '__proto__') return;
      (e[s] = l), (e = e[s]);
    }
    return e;
  };
const hi = { BLUR: 'blur', FOCUS_OUT: 'focusout', CHANGE: 'change' },
  _t = { onBlur: 'onBlur', onChange: 'onChange', onSubmit: 'onSubmit', onTouched: 'onTouched', all: 'all' },
  tn = {
    max: 'max',
    min: 'min',
    maxLength: 'maxLength',
    minLength: 'minLength',
    pattern: 'pattern',
    required: 'required',
    validate: 'validate',
  },
  Su = pe.createContext(null),
  Ar = () => pe.useContext(Su),
  Hb = e => {
    const { children: t, ...n } = e;
    return pe.createElement(Su.Provider, { value: n }, t);
  };
var ku = (e, t, n, r = !0) => {
    const a = { defaultValues: t._defaultValues };
    for (const i in e)
      Object.defineProperty(a, i, {
        get: () => {
          const o = i;
          return t._proxyFormState[o] !== _t.all && (t._proxyFormState[o] = !r || _t.all), n && (n[o] = !0), e[o];
        },
      });
    return a;
  },
  vt = e => Ze(e) && !Object.keys(e).length,
  Lu = (e, t, n, r) => {
    n(e);
    const { name: a, ...i } = e;
    return vt(i) || Object.keys(i).length >= Object.keys(t).length || Object.keys(i).find(o => t[o] === (!r || _t.all));
  },
  xt = e => (Array.isArray(e) ? e : [e]),
  Iu = (e, t, n) => !e || !t || e === t || xt(e).some(r => r && (n ? r === t : r.startsWith(t) || t.startsWith(r)));
function Fi(e) {
  const t = pe.useRef(e);
  (t.current = e),
    pe.useEffect(() => {
      const n = !e.disabled && t.current.subject && t.current.subject.subscribe({ next: t.current.next });
      return () => {
        n && n.unsubscribe();
      };
    }, [e.disabled]);
}
function $b(e) {
  const t = Ar(),
    { control: n = t.control, disabled: r, name: a, exact: i } = e || {},
    [o, s] = pe.useState(n._formState),
    l = pe.useRef(!0),
    u = pe.useRef({
      isDirty: !1,
      isLoading: !1,
      dirtyFields: !1,
      touchedFields: !1,
      validatingFields: !1,
      isValidating: !1,
      isValid: !1,
      errors: !1,
    }),
    d = pe.useRef(a);
  return (
    (d.current = a),
    Fi({
      disabled: r,
      next: p => l.current && Iu(d.current, p.name, i) && Lu(p, u.current, n._updateFormState) && s({ ...n._formState, ...p }),
      subject: n._subjects.state,
    }),
    pe.useEffect(
      () => (
        (l.current = !0),
        u.current.isValid && n._updateValid(!0),
        () => {
          l.current = !1;
        }
      ),
      [n],
    ),
    ku(o, n, u.current, !1)
  );
}
var Wt = e => typeof e == 'string',
  Ru = (e, t, n, r, a) =>
    Wt(e)
      ? (r && t.watch.add(e), ce(n, e, a))
      : Array.isArray(e)
        ? e.map(i => (r && t.watch.add(i), ce(n, i)))
        : (r && (t.watchAll = !0), n);
function Nu(e) {
  const t = Ar(),
    { control: n = t.control, name: r, defaultValue: a, disabled: i, exact: o } = e || {},
    s = pe.useRef(r);
  (s.current = r),
    Fi({
      disabled: i,
      subject: n._subjects.values,
      next: d => {
        Iu(s.current, d.name, o) && u(Qe(Ru(s.current, n._names, d.values || n._formValues, !1, a)));
      },
    });
  const [l, u] = pe.useState(n._getWatch(r, a));
  return pe.useEffect(() => n._removeUnmounted()), l;
}
function Tu(e) {
  const t = Ar(),
    { name: n, disabled: r, control: a = t.control, shouldUnregister: i } = e,
    o = _u(a._names.array, n),
    s = Nu({ control: a, name: n, defaultValue: ce(a._formValues, n, ce(a._defaultValues, n, e.defaultValue)), exact: !0 }),
    l = $b({ control: a, name: n }),
    u = pe.useRef(a.register(n, { ...e.rules, value: s, ...($t(e.disabled) ? { disabled: e.disabled } : {}) }));
  return (
    pe.useEffect(() => {
      const d = a._options.shouldUnregister || i,
        p = (f, h) => {
          const b = ce(a._fields, f);
          b && (b._f.mount = h);
        };
      if ((p(n, !0), d)) {
        const f = Qe(ce(a._options.defaultValues, n));
        Fe(a._defaultValues, n, f), De(ce(a._formValues, n)) && Fe(a._formValues, n, f);
      }
      return () => {
        (o ? d && !a._state.action : d) ? a.unregister(n) : p(n, !1);
      };
    }, [n, a, o, i]),
    pe.useEffect(() => {
      ce(a._fields, n) && a._updateDisabledField({ disabled: r, fields: a._fields, name: n, value: ce(a._fields, n)._f.value });
    }, [r, n, a]),
    {
      field: {
        name: n,
        value: s,
        ...($t(r) || l.disabled ? { disabled: l.disabled || r } : {}),
        onChange: pe.useCallback(d => u.current.onChange({ target: { value: Ou(d), name: n }, type: hi.CHANGE }), [n]),
        onBlur: pe.useCallback(() => u.current.onBlur({ target: { value: ce(a._formValues, n), name: n }, type: hi.BLUR }), [n, a]),
        ref: d => {
          const p = ce(a._fields, n);
          p &&
            d &&
            (p._f.ref = {
              focus: () => d.focus(),
              select: () => d.select(),
              setCustomValidity: f => d.setCustomValidity(f),
              reportValidity: () => d.reportValidity(),
            });
        },
      },
      formState: l,
      fieldState: Object.defineProperties(
        {},
        {
          invalid: { enumerable: !0, get: () => !!ce(l.errors, n) },
          isDirty: { enumerable: !0, get: () => !!ce(l.dirtyFields, n) },
          isTouched: { enumerable: !0, get: () => !!ce(l.touchedFields, n) },
          isValidating: { enumerable: !0, get: () => !!ce(l.validatingFields, n) },
          error: { enumerable: !0, get: () => ce(l.errors, n) },
        },
      ),
    }
  );
}
const Mi = e => e.render(Tu(e));
var zb = (e, t, n, r, a) => (t ? { ...n[e], types: { ...(n[e] && n[e].types ? n[e].types : {}), [r]: a || !0 } } : {}),
  vn = () => {
    const e = typeof performance > 'u' ? Date.now() : performance.now() * 1e3;
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, t => {
      const n = (Math.random() * 16 + e) % 16 | 0;
      return (t == 'x' ? n : (n & 3) | 8).toString(16);
    });
  },
  ro = (e, t, n = {}) => (n.shouldFocus || De(n.shouldFocus) ? n.focusName || `${e}.${De(n.focusIndex) ? t : n.focusIndex}.` : ''),
  ta = e => ({
    isOnSubmit: !e || e === _t.onSubmit,
    isOnBlur: e === _t.onBlur,
    isOnChange: e === _t.onChange,
    isOnAll: e === _t.all,
    isOnTouch: e === _t.onTouched,
  }),
  jo = (e, t, n) => !n && (t.watchAll || t.watch.has(e) || [...t.watch].some(r => e.startsWith(r) && /^\.\w+/.test(e.slice(r.length))));
const pr = (e, t, n, r) => {
  for (const a of n || Object.keys(e)) {
    const i = ce(e, a);
    if (i) {
      const { _f: o, ...s } = i;
      if (o) {
        if (o.refs && o.refs[0] && t(o.refs[0], a) && !r) break;
        if (o.ref && t(o.ref, o.name) && !r) break;
        pr(s, t);
      } else Ze(s) && pr(s, t);
    }
  }
};
var Pu = (e, t, n) => {
    const r = Pr(ce(e, n));
    return Fe(r, 'root', t[n]), Fe(e, n, r), e;
  },
  Is = e => e.type === 'file',
  xn = e => typeof e == 'function',
  gi = e => {
    if (!ks) return !1;
    const t = e ? e.ownerDocument : 0;
    return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
  },
  Wa = e => Wt(e),
  Rs = e => e.type === 'radio',
  vi = e => e instanceof RegExp;
const ac = { value: !1, isValid: !1 },
  ic = { value: !0, isValid: !0 };
var Au = e => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter(n => n && n.checked && !n.disabled).map(n => n.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled
      ? e[0].attributes && !De(e[0].attributes.value)
        ? De(e[0].value) || e[0].value === ''
          ? ic
          : { value: e[0].value, isValid: !0 }
        : ic
      : ac;
  }
  return ac;
};
const oc = { isValid: !1, value: null };
var Fu = e => (Array.isArray(e) ? e.reduce((t, n) => (n && n.checked && !n.disabled ? { isValid: !0, value: n.value } : t), oc) : oc);
function sc(e, t, n = 'validate') {
  if (Wa(e) || (Array.isArray(e) && e.every(Wa)) || ($t(e) && !e)) return { type: n, message: Wa(e) ? e : '', ref: t };
}
var rr = e => (Ze(e) && !vi(e) ? e : { value: e, message: '' }),
  Bo = async (e, t, n, r, a) => {
    const {
        ref: i,
        refs: o,
        required: s,
        maxLength: l,
        minLength: u,
        min: d,
        max: p,
        pattern: f,
        validate: h,
        name: b,
        valueAsNumber: v,
        mount: w,
        disabled: T,
      } = e._f,
      N = ce(t, b);
    if (!w || T) return {};
    const B = o ? o[0] : i,
      A = _ => {
        r && B.reportValidity && (B.setCustomValidity($t(_) ? '' : _ || ''), B.reportValidity());
      },
      L = {},
      g = Rs(i),
      m = Ea(i),
      S = g || m,
      E = ((v || Is(i)) && De(i.value) && De(N)) || (gi(i) && i.value === '') || N === '' || (Array.isArray(N) && !N.length),
      k = zb.bind(null, b, n, L),
      y = (_, O, U, x = tn.maxLength, D = tn.minLength) => {
        const G = _ ? O : U;
        L[b] = { type: _ ? x : D, message: G, ref: i, ...k(_ ? x : D, G) };
      };
    if (
      a ? !Array.isArray(N) || !N.length : s && ((!S && (E || pt(N))) || ($t(N) && !N) || (m && !Au(o).isValid) || (g && !Fu(o).isValid))
    ) {
      const { value: _, message: O } = Wa(s) ? { value: !!s, message: s } : rr(s);
      if (_ && ((L[b] = { type: tn.required, message: O, ref: B, ...k(tn.required, O) }), !n)) return A(O), L;
    }
    if (!E && (!pt(d) || !pt(p))) {
      let _, O;
      const U = rr(p),
        x = rr(d);
      if (!pt(N) && !isNaN(N)) {
        const D = i.valueAsNumber || (N && +N);
        pt(U.value) || (_ = D > U.value), pt(x.value) || (O = D < x.value);
      } else {
        const D = i.valueAsDate || new Date(N),
          G = ne => new Date(new Date().toDateString() + ' ' + ne),
          z = i.type == 'time',
          K = i.type == 'week';
        Wt(U.value) && N && (_ = z ? G(N) > G(U.value) : K ? N > U.value : D > new Date(U.value)),
          Wt(x.value) && N && (O = z ? G(N) < G(x.value) : K ? N < x.value : D < new Date(x.value));
      }
      if ((_ || O) && (y(!!_, U.message, x.message, tn.max, tn.min), !n)) return A(L[b].message), L;
    }
    if ((l || u) && !E && (Wt(N) || (a && Array.isArray(N)))) {
      const _ = rr(l),
        O = rr(u),
        U = !pt(_.value) && N.length > +_.value,
        x = !pt(O.value) && N.length < +O.value;
      if ((U || x) && (y(U, _.message, O.message), !n)) return A(L[b].message), L;
    }
    if (f && !E && Wt(N)) {
      const { value: _, message: O } = rr(f);
      if (vi(_) && !N.match(_) && ((L[b] = { type: tn.pattern, message: O, ref: i, ...k(tn.pattern, O) }), !n)) return A(O), L;
    }
    if (h) {
      if (xn(h)) {
        const _ = await h(N, t),
          O = sc(_, B);
        if (O && ((L[b] = { ...O, ...k(tn.validate, O.message) }), !n)) return A(O.message), L;
      } else if (Ze(h)) {
        let _ = {};
        for (const O in h) {
          if (!vt(_) && !n) break;
          const U = sc(await h[O](N, t), B, O);
          U && ((_ = { ...U, ...k(O, U.message) }), A(U.message), n && (L[b] = _));
        }
        if (!vt(_) && ((L[b] = { ref: B, ..._ }), !n)) return L;
      }
    }
    return A(!0), L;
  },
  ao = (e, t) => [...e, ...xt(t)],
  io = e => (Array.isArray(e) ? e.map(() => {}) : void 0);
function oo(e, t, n) {
  return [...e.slice(0, t), ...xt(n), ...e.slice(t)];
}
var so = (e, t, n) => (Array.isArray(e) ? (De(e[n]) && (e[n] = void 0), e.splice(n, 0, e.splice(t, 1)[0]), e) : []),
  lo = (e, t) => [...xt(t), ...xt(e)];
function Wb(e, t) {
  let n = 0;
  const r = [...e];
  for (const a of t) r.splice(a - n, 1), n++;
  return Pr(r).length ? r : [];
}
var co = (e, t) =>
    De(t)
      ? []
      : Wb(
          e,
          xt(t).sort((n, r) => n - r),
        ),
  uo = (e, t, n) => {
    [e[t], e[n]] = [e[n], e[t]];
  };
function Gb(e, t) {
  const n = t.slice(0, -1).length;
  let r = 0;
  for (; r < n; ) e = De(e) ? r++ : e[t[r++]];
  return e;
}
function qb(e) {
  for (const t in e) if (e.hasOwnProperty(t) && !De(e[t])) return !1;
  return !0;
}
function Je(e, t) {
  const n = Array.isArray(t) ? t : Ls(t) ? [t] : Eu(t),
    r = n.length === 1 ? e : Gb(e, n),
    a = n.length - 1,
    i = n[a];
  return r && delete r[i], a !== 0 && ((Ze(r) && vt(r)) || (Array.isArray(r) && qb(r))) && Je(e, n.slice(0, -1)), e;
}
var lc = (e, t, n) => ((e[t] = n), e);
function t2(e) {
  const t = Ar(),
    { control: n = t.control, name: r, keyName: a = 'id', shouldUnregister: i } = e,
    [o, s] = pe.useState(n._getFieldArray(r)),
    l = pe.useRef(n._getFieldArray(r).map(vn)),
    u = pe.useRef(o),
    d = pe.useRef(r),
    p = pe.useRef(!1);
  (d.current = r),
    (u.current = o),
    n._names.array.add(r),
    e.rules && n.register(r, e.rules),
    Fi({
      next: ({ values: L, name: g }) => {
        if (g === d.current || !g) {
          const m = ce(L, d.current);
          Array.isArray(m) && (s(m), (l.current = m.map(vn)));
        }
      },
      subject: n._subjects.array,
    });
  const f = pe.useCallback(
      L => {
        (p.current = !0), n._updateFieldArray(r, L);
      },
      [n, r],
    ),
    h = (L, g) => {
      const m = xt(Qe(L)),
        S = ao(n._getFieldArray(r), m);
      (n._names.focus = ro(r, S.length - 1, g)),
        (l.current = ao(l.current, m.map(vn))),
        f(S),
        s(S),
        n._updateFieldArray(r, S, ao, { argA: io(L) });
    },
    b = (L, g) => {
      const m = xt(Qe(L)),
        S = lo(n._getFieldArray(r), m);
      (n._names.focus = ro(r, 0, g)), (l.current = lo(l.current, m.map(vn))), f(S), s(S), n._updateFieldArray(r, S, lo, { argA: io(L) });
    },
    v = L => {
      const g = co(n._getFieldArray(r), L);
      (l.current = co(l.current, L)), f(g), s(g), n._updateFieldArray(r, g, co, { argA: L });
    },
    w = (L, g, m) => {
      const S = xt(Qe(g)),
        E = oo(n._getFieldArray(r), L, S);
      (n._names.focus = ro(r, L, m)),
        (l.current = oo(l.current, L, S.map(vn))),
        f(E),
        s(E),
        n._updateFieldArray(r, E, oo, { argA: L, argB: io(g) });
    },
    T = (L, g) => {
      const m = n._getFieldArray(r);
      uo(m, L, g), uo(l.current, L, g), f(m), s(m), n._updateFieldArray(r, m, uo, { argA: L, argB: g }, !1);
    },
    N = (L, g) => {
      const m = n._getFieldArray(r);
      so(m, L, g), so(l.current, L, g), f(m), s(m), n._updateFieldArray(r, m, so, { argA: L, argB: g }, !1);
    },
    B = (L, g) => {
      const m = Qe(g),
        S = lc(n._getFieldArray(r), L, m);
      (l.current = [...S].map((E, k) => (!E || k === L ? vn() : l.current[k]))),
        f(S),
        s([...S]),
        n._updateFieldArray(r, S, lc, { argA: L, argB: m }, !0, !1);
    },
    A = L => {
      const g = xt(Qe(L));
      (l.current = g.map(vn)), f([...g]), s([...g]), n._updateFieldArray(r, [...g], m => m, {}, !0, !1);
    };
  return (
    pe.useEffect(() => {
      if (
        ((n._state.action = !1),
        jo(r, n._names) && n._subjects.state.next({ ...n._formState }),
        p.current && (!ta(n._options.mode).isOnSubmit || n._formState.isSubmitted))
      )
        if (n._options.resolver)
          n._executeSchema([r]).then(L => {
            const g = ce(L.errors, r),
              m = ce(n._formState.errors, r);
            (m ? (!g && m.type) || (g && (m.type !== g.type || m.message !== g.message)) : g && g.type) &&
              (g ? Fe(n._formState.errors, r, g) : Je(n._formState.errors, r), n._subjects.state.next({ errors: n._formState.errors }));
          });
        else {
          const L = ce(n._fields, r);
          L &&
            L._f &&
            !(ta(n._options.reValidateMode).isOnSubmit && ta(n._options.mode).isOnSubmit) &&
            Bo(L, n._formValues, n._options.criteriaMode === _t.all, n._options.shouldUseNativeValidation, !0).then(
              g => !vt(g) && n._subjects.state.next({ errors: Pu(n._formState.errors, g, r) }),
            );
        }
      n._subjects.values.next({ name: r, values: { ...n._formValues } }),
        n._names.focus &&
          pr(n._fields, (L, g) => {
            if (n._names.focus && g.startsWith(n._names.focus) && L.focus) return L.focus(), 1;
          }),
        (n._names.focus = ''),
        n._updateValid(),
        (p.current = !1);
    }, [o, r, n]),
    pe.useEffect(
      () => (
        !ce(n._formValues, r) && n._updateFieldArray(r),
        () => {
          (n._options.shouldUnregister || i) && n.unregister(r);
        }
      ),
      [r, n, a, i],
    ),
    {
      swap: pe.useCallback(T, [f, r, n]),
      move: pe.useCallback(N, [f, r, n]),
      prepend: pe.useCallback(b, [f, r, n]),
      append: pe.useCallback(h, [f, r, n]),
      remove: pe.useCallback(v, [f, r, n]),
      insert: pe.useCallback(w, [f, r, n]),
      update: pe.useCallback(B, [f, r, n]),
      replace: pe.useCallback(A, [f, r, n]),
      fields: pe.useMemo(() => o.map((L, g) => ({ ...L, [a]: l.current[g] || vn() })), [o, a]),
    }
  );
}
var fo = () => {
    let e = [];
    return {
      get observers() {
        return e;
      },
      next: a => {
        for (const i of e) i.next && i.next(a);
      },
      subscribe: a => (
        e.push(a),
        {
          unsubscribe: () => {
            e = e.filter(i => i !== a);
          },
        }
      ),
      unsubscribe: () => {
        e = [];
      },
    };
  },
  bi = e => pt(e) || !Cu(e);
function Mn(e, t) {
  if (bi(e) || bi(t)) return e === t;
  if (cr(e) && cr(t)) return e.getTime() === t.getTime();
  const n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (const a of n) {
    const i = e[a];
    if (!r.includes(a)) return !1;
    if (a !== 'ref') {
      const o = t[a];
      if ((cr(i) && cr(o)) || (Ze(i) && Ze(o)) || (Array.isArray(i) && Array.isArray(o)) ? !Mn(i, o) : i !== o) return !1;
    }
  }
  return !0;
}
var Mu = e => e.type === 'select-multiple',
  Kb = e => Rs(e) || Ea(e),
  po = e => gi(e) && e.isConnected,
  Du = e => {
    for (const t in e) if (xn(e[t])) return !0;
    return !1;
  };
function yi(e, t = {}) {
  const n = Array.isArray(e);
  if (Ze(e) || n)
    for (const r in e)
      Array.isArray(e[r]) || (Ze(e[r]) && !Du(e[r])) ? ((t[r] = Array.isArray(e[r]) ? [] : {}), yi(e[r], t[r])) : pt(e[r]) || (t[r] = !0);
  return t;
}
function ju(e, t, n) {
  const r = Array.isArray(e);
  if (Ze(e) || r)
    for (const a in e)
      Array.isArray(e[a]) || (Ze(e[a]) && !Du(e[a]))
        ? De(t) || bi(n[a])
          ? (n[a] = Array.isArray(e[a]) ? yi(e[a], []) : { ...yi(e[a]) })
          : ju(e[a], pt(t) ? {} : t[a], n[a])
        : (n[a] = !Mn(e[a], t[a]));
  return n;
}
var Ba = (e, t) => ju(e, t, yi(t)),
  Bu = (e, { valueAsNumber: t, valueAsDate: n, setValueAs: r }) =>
    De(e) ? e : t ? (e === '' ? NaN : e && +e) : n && Wt(e) ? new Date(e) : r ? r(e) : e;
function mo(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every(n => n.disabled) : t.disabled))
    return Is(t)
      ? t.files
      : Rs(t)
        ? Fu(e.refs).value
        : Mu(t)
          ? [...t.selectedOptions].map(({ value: n }) => n)
          : Ea(t)
            ? Au(e.refs).value
            : Bu(De(t.value) ? e.ref.value : t.value, e);
}
var Xb = (e, t, n, r) => {
    const a = {};
    for (const i of e) {
      const o = ce(t, i);
      o && Fe(a, i, o._f);
    }
    return { criteriaMode: n, names: [...e], fields: a, shouldUseNativeValidation: r };
  },
  qr = e => (De(e) ? e : vi(e) ? e.source : Ze(e) ? (vi(e.value) ? e.value.source : e.value) : e),
  Jb = e => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function cc(e, t, n) {
  const r = ce(e, n);
  if (r || Ls(n)) return { error: r, name: n };
  const a = n.split('.');
  for (; a.length; ) {
    const i = a.join('.'),
      o = ce(t, i),
      s = ce(e, i);
    if (o && !Array.isArray(o) && n !== i) return { name: n };
    if (s && s.type) return { name: i, error: s };
    a.pop();
  }
  return { name: n };
}
var Yb = (e, t, n, r, a) =>
    a.isOnAll ? !1 : !n && a.isOnTouch ? !(t || e) : (n ? r.isOnBlur : a.isOnBlur) ? !e : (n ? r.isOnChange : a.isOnChange) ? e : !0,
  Qb = (e, t) => !Pr(ce(e, t)).length && Je(e, t);
const Zb = { mode: _t.onSubmit, reValidateMode: _t.onChange, shouldFocusError: !0 };
function ey(e = {}) {
  let t = { ...Zb, ...e },
    n = {
      submitCount: 0,
      isDirty: !1,
      isLoading: xn(t.defaultValues),
      isValidating: !1,
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      touchedFields: {},
      dirtyFields: {},
      validatingFields: {},
      errors: t.errors || {},
      disabled: t.disabled || !1,
    },
    r = {},
    a = Ze(t.defaultValues) || Ze(t.values) ? Qe(t.defaultValues || t.values) || {} : {},
    i = t.shouldUnregister ? {} : Qe(a),
    o = { action: !1, mount: !1, watch: !1 },
    s = { mount: new Set(), unMount: new Set(), array: new Set(), watch: new Set() },
    l,
    u = 0;
  const d = { isDirty: !1, dirtyFields: !1, validatingFields: !1, touchedFields: !1, isValidating: !1, isValid: !1, errors: !1 },
    p = { values: fo(), array: fo(), state: fo() },
    f = ta(t.mode),
    h = ta(t.reValidateMode),
    b = t.criteriaMode === _t.all,
    v = I => F => {
      clearTimeout(u), (u = setTimeout(I, F));
    },
    w = async I => {
      if (d.isValid || I) {
        const F = t.resolver ? vt((await S()).errors) : await k(r, !0);
        F !== n.isValid && p.state.next({ isValid: F });
      }
    },
    T = (I, F) => {
      (d.isValidating || d.validatingFields) &&
        ((I || Array.from(s.mount)).forEach(V => {
          V && (F ? Fe(n.validatingFields, V, F) : Je(n.validatingFields, V));
        }),
        p.state.next({ validatingFields: n.validatingFields, isValidating: !vt(n.validatingFields) }));
    },
    N = (I, F = [], V, ee, ae = !0, Z = !0) => {
      if (ee && V) {
        if (((o.action = !0), Z && Array.isArray(ce(r, I)))) {
          const ue = V(ce(r, I), ee.argA, ee.argB);
          ae && Fe(r, I, ue);
        }
        if (Z && Array.isArray(ce(n.errors, I))) {
          const ue = V(ce(n.errors, I), ee.argA, ee.argB);
          ae && Fe(n.errors, I, ue), Qb(n.errors, I);
        }
        if (d.touchedFields && Z && Array.isArray(ce(n.touchedFields, I))) {
          const ue = V(ce(n.touchedFields, I), ee.argA, ee.argB);
          ae && Fe(n.touchedFields, I, ue);
        }
        d.dirtyFields && (n.dirtyFields = Ba(a, i)),
          p.state.next({ name: I, isDirty: _(I, F), dirtyFields: n.dirtyFields, errors: n.errors, isValid: n.isValid });
      } else Fe(i, I, F);
    },
    B = (I, F) => {
      Fe(n.errors, I, F), p.state.next({ errors: n.errors });
    },
    A = I => {
      (n.errors = I), p.state.next({ errors: n.errors, isValid: !1 });
    },
    L = (I, F, V, ee) => {
      const ae = ce(r, I);
      if (ae) {
        const Z = ce(i, I, De(V) ? ce(a, I) : V);
        De(Z) || (ee && ee.defaultChecked) || F ? Fe(i, I, F ? Z : mo(ae._f)) : x(I, Z), o.mount && w();
      }
    },
    g = (I, F, V, ee, ae) => {
      let Z = !1,
        ue = !1;
      const le = { name: I },
        be = !!(ce(r, I) && ce(r, I)._f.disabled);
      if (!V || ee) {
        d.isDirty && ((ue = n.isDirty), (n.isDirty = le.isDirty = _()), (Z = ue !== le.isDirty));
        const Ee = be || Mn(ce(a, I), F);
        (ue = !!(!be && ce(n.dirtyFields, I))),
          Ee || be ? Je(n.dirtyFields, I) : Fe(n.dirtyFields, I, !0),
          (le.dirtyFields = n.dirtyFields),
          (Z = Z || (d.dirtyFields && ue !== !Ee));
      }
      if (V) {
        const Ee = ce(n.touchedFields, I);
        Ee || (Fe(n.touchedFields, I, V), (le.touchedFields = n.touchedFields), (Z = Z || (d.touchedFields && Ee !== V)));
      }
      return Z && ae && p.state.next(le), Z ? le : {};
    },
    m = (I, F, V, ee) => {
      const ae = ce(n.errors, I),
        Z = d.isValid && $t(F) && n.isValid !== F;
      if (
        (e.delayError && V
          ? ((l = v(() => B(I, V))), l(e.delayError))
          : (clearTimeout(u), (l = null), V ? Fe(n.errors, I, V) : Je(n.errors, I)),
        (V ? !Mn(ae, V) : ae) || !vt(ee) || Z)
      ) {
        const ue = { ...ee, ...(Z && $t(F) ? { isValid: F } : {}), errors: n.errors, name: I };
        (n = { ...n, ...ue }), p.state.next(ue);
      }
    },
    S = async I => {
      T(I, !0);
      const F = await t.resolver(i, t.context, Xb(I || s.mount, r, t.criteriaMode, t.shouldUseNativeValidation));
      return T(I), F;
    },
    E = async I => {
      const { errors: F } = await S(I);
      if (I)
        for (const V of I) {
          const ee = ce(F, V);
          ee ? Fe(n.errors, V, ee) : Je(n.errors, V);
        }
      else n.errors = F;
      return F;
    },
    k = async (I, F, V = { valid: !0 }) => {
      for (const ee in I) {
        const ae = I[ee];
        if (ae) {
          const { _f: Z, ...ue } = ae;
          if (Z) {
            const le = s.array.has(Z.name);
            T([ee], !0);
            const be = await Bo(ae, i, b, t.shouldUseNativeValidation && !F, le);
            if ((T([ee]), be[Z.name] && ((V.valid = !1), F))) break;
            !F && (ce(be, Z.name) ? (le ? Pu(n.errors, be, Z.name) : Fe(n.errors, Z.name, be[Z.name])) : Je(n.errors, Z.name));
          }
          ue && (await k(ue, F, V));
        }
      }
      return V.valid;
    },
    y = () => {
      for (const I of s.unMount) {
        const F = ce(r, I);
        F && (F._f.refs ? F._f.refs.every(V => !po(V)) : !po(F._f.ref)) && Y(I);
      }
      s.unMount = new Set();
    },
    _ = (I, F) => (I && F && Fe(i, I, F), !Mn(C(), a)),
    O = (I, F, V) => Ru(I, s, { ...(o.mount ? i : De(F) ? a : Wt(I) ? { [I]: F } : F) }, V, F),
    U = I => Pr(ce(o.mount ? i : a, I, e.shouldUnregister ? ce(a, I, []) : [])),
    x = (I, F, V = {}) => {
      const ee = ce(r, I);
      let ae = F;
      if (ee) {
        const Z = ee._f;
        Z &&
          (!Z.disabled && Fe(i, I, Bu(F, Z)),
          (ae = gi(Z.ref) && pt(F) ? '' : F),
          Mu(Z.ref)
            ? [...Z.ref.options].forEach(ue => (ue.selected = ae.includes(ue.value)))
            : Z.refs
              ? Ea(Z.ref)
                ? Z.refs.length > 1
                  ? Z.refs.forEach(
                      ue =>
                        (!ue.defaultChecked || !ue.disabled) &&
                        (ue.checked = Array.isArray(ae) ? !!ae.find(le => le === ue.value) : ae === ue.value),
                    )
                  : Z.refs[0] && (Z.refs[0].checked = !!ae)
                : Z.refs.forEach(ue => (ue.checked = ue.value === ae))
              : Is(Z.ref)
                ? (Z.ref.value = '')
                : ((Z.ref.value = ae), Z.ref.type || p.values.next({ name: I, values: { ...i } })));
      }
      (V.shouldDirty || V.shouldTouch) && g(I, ae, V.shouldTouch, V.shouldDirty, !0), V.shouldValidate && ne(I);
    },
    D = (I, F, V) => {
      for (const ee in F) {
        const ae = F[ee],
          Z = `${I}.${ee}`,
          ue = ce(r, Z);
        (s.array.has(I) || !bi(ae) || (ue && !ue._f)) && !cr(ae) ? D(Z, ae, V) : x(Z, ae, V);
      }
    },
    G = (I, F, V = {}) => {
      const ee = ce(r, I),
        ae = s.array.has(I),
        Z = Qe(F);
      Fe(i, I, Z),
        ae
          ? (p.array.next({ name: I, values: { ...i } }),
            (d.isDirty || d.dirtyFields) && V.shouldDirty && p.state.next({ name: I, dirtyFields: Ba(a, i), isDirty: _(I, Z) }))
          : ee && !ee._f && !pt(Z)
            ? D(I, Z, V)
            : x(I, Z, V),
        jo(I, s) && p.state.next({ ...n }),
        p.values.next({ name: o.mount ? I : void 0, values: { ...i } });
    },
    z = async I => {
      o.mount = !0;
      const F = I.target;
      let V = F.name,
        ee = !0;
      const ae = ce(r, V),
        Z = () => (F.type ? mo(ae._f) : Ou(I)),
        ue = le => {
          ee = Number.isNaN(le) || le === ce(i, V, le);
        };
      if (ae) {
        let le, be;
        const Ee = Z(),
          et = I.type === hi.BLUR || I.type === hi.FOCUS_OUT,
          ht = (!Jb(ae._f) && !t.resolver && !ce(n.errors, V) && !ae._f.deps) || Yb(et, ce(n.touchedFields, V), n.isSubmitted, h, f),
          jt = jo(V, s, et);
        Fe(i, V, Ee), et ? (ae._f.onBlur && ae._f.onBlur(I), l && l(0)) : ae._f.onChange && ae._f.onChange(I);
        const ge = g(V, Ee, et, !1),
          Ie = !vt(ge) || jt;
        if ((!et && p.values.next({ name: V, type: I.type, values: { ...i } }), ht))
          return d.isValid && w(), Ie && p.state.next({ name: V, ...(jt ? {} : ge) });
        if ((!et && jt && p.state.next({ ...n }), t.resolver)) {
          const { errors: Ue } = await S([V]);
          if ((ue(Ee), ee)) {
            const dt = cc(n.errors, r, V),
              kt = cc(Ue, r, dt.name || V);
            (le = kt.error), (V = kt.name), (be = vt(Ue));
          }
        } else
          T([V], !0),
            (le = (await Bo(ae, i, b, t.shouldUseNativeValidation))[V]),
            T([V]),
            ue(Ee),
            ee && (le ? (be = !1) : d.isValid && (be = await k(r, !0)));
        ee && (ae._f.deps && ne(ae._f.deps), m(V, be, le, ge));
      }
    },
    K = (I, F) => {
      if (ce(n.errors, F) && I.focus) return I.focus(), 1;
    },
    ne = async (I, F = {}) => {
      let V, ee;
      const ae = xt(I);
      if (t.resolver) {
        const Z = await E(De(I) ? I : ae);
        (V = vt(Z)), (ee = I ? !ae.some(ue => ce(Z, ue)) : V);
      } else
        I
          ? ((ee = (
              await Promise.all(
                ae.map(async Z => {
                  const ue = ce(r, Z);
                  return await k(ue && ue._f ? { [Z]: ue } : ue);
                }),
              )
            ).every(Boolean)),
            !(!ee && !n.isValid) && w())
          : (ee = V = await k(r));
      return (
        p.state.next({
          ...(!Wt(I) || (d.isValid && V !== n.isValid) ? {} : { name: I }),
          ...(t.resolver || !I ? { isValid: V } : {}),
          errors: n.errors,
        }),
        F.shouldFocus && !ee && pr(r, K, I ? ae : s.mount),
        ee
      );
    },
    C = I => {
      const F = { ...(o.mount ? i : a) };
      return De(I) ? F : Wt(I) ? ce(F, I) : I.map(V => ce(F, V));
    },
    P = (I, F) => ({
      invalid: !!ce((F || n).errors, I),
      isDirty: !!ce((F || n).dirtyFields, I),
      isTouched: !!ce((F || n).touchedFields, I),
      isValidating: !!ce((F || n).validatingFields, I),
      error: ce((F || n).errors, I),
    }),
    H = I => {
      I && xt(I).forEach(F => Je(n.errors, F)), p.state.next({ errors: I ? n.errors : {} });
    },
    q = (I, F, V) => {
      const ee = (ce(r, I, { _f: {} })._f || {}).ref,
        ae = ce(n.errors, I) || {},
        { ref: Z, message: ue, type: le, ...be } = ae;
      Fe(n.errors, I, { ...be, ...F, ref: ee }),
        p.state.next({ name: I, errors: n.errors, isValid: !1 }),
        V && V.shouldFocus && ee && ee.focus && ee.focus();
    },
    $ = (I, F) => (xn(I) ? p.values.subscribe({ next: V => I(O(void 0, F), V) }) : O(I, F, !0)),
    Y = (I, F = {}) => {
      for (const V of I ? xt(I) : s.mount)
        s.mount.delete(V),
          s.array.delete(V),
          F.keepValue || (Je(r, V), Je(i, V)),
          !F.keepError && Je(n.errors, V),
          !F.keepDirty && Je(n.dirtyFields, V),
          !F.keepTouched && Je(n.touchedFields, V),
          !F.keepIsValidating && Je(n.validatingFields, V),
          !t.shouldUnregister && !F.keepDefaultValue && Je(a, V);
      p.values.next({ values: { ...i } }), p.state.next({ ...n, ...(F.keepDirty ? { isDirty: _() } : {}) }), !F.keepIsValid && w();
    },
    J = ({ disabled: I, name: F, field: V, fields: ee, value: ae }) => {
      if (($t(I) && o.mount) || I) {
        const Z = I ? void 0 : De(ae) ? mo(V ? V._f : ce(ee, F)._f) : ae;
        Fe(i, F, Z), g(F, Z, !1, !1, !0);
      }
    },
    Q = (I, F = {}) => {
      let V = ce(r, I);
      const ee = $t(F.disabled);
      return (
        Fe(r, I, { ...(V || {}), _f: { ...(V && V._f ? V._f : { ref: { name: I } }), name: I, mount: !0, ...F } }),
        s.mount.add(I),
        V ? J({ field: V, disabled: F.disabled, name: I, value: F.value }) : L(I, !0, F.value),
        {
          ...(ee ? { disabled: F.disabled } : {}),
          ...(t.progressive
            ? {
                required: !!F.required,
                min: qr(F.min),
                max: qr(F.max),
                minLength: qr(F.minLength),
                maxLength: qr(F.maxLength),
                pattern: qr(F.pattern),
              }
            : {}),
          name: I,
          onChange: z,
          onBlur: z,
          ref: ae => {
            if (ae) {
              Q(I, F), (V = ce(r, I));
              const Z = (De(ae.value) && ae.querySelectorAll && ae.querySelectorAll('input,select,textarea')[0]) || ae,
                ue = Kb(Z),
                le = V._f.refs || [];
              if (ue ? le.find(be => be === Z) : Z === V._f.ref) return;
              Fe(r, I, {
                _f: {
                  ...V._f,
                  ...(ue
                    ? { refs: [...le.filter(po), Z, ...(Array.isArray(ce(a, I)) ? [{}] : [])], ref: { type: Z.type, name: I } }
                    : { ref: Z }),
                },
              }),
                L(I, !1, void 0, Z);
            } else
              (V = ce(r, I, {})),
                V._f && (V._f.mount = !1),
                (t.shouldUnregister || F.shouldUnregister) && !(_u(s.array, I) && o.action) && s.unMount.add(I);
          },
        }
      );
    },
    re = () => t.shouldFocusError && pr(r, K, s.mount),
    te = I => {
      $t(I) &&
        (p.state.next({ disabled: I }),
        pr(
          r,
          (F, V) => {
            const ee = ce(r, V);
            ee &&
              ((F.disabled = ee._f.disabled || I),
              Array.isArray(ee._f.refs) &&
                ee._f.refs.forEach(ae => {
                  ae.disabled = ee._f.disabled || I;
                }));
          },
          0,
          !1,
        ));
    },
    se = (I, F) => async V => {
      let ee;
      V && (V.preventDefault && V.preventDefault(), V.persist && V.persist());
      let ae = Qe(i);
      if ((p.state.next({ isSubmitting: !0 }), t.resolver)) {
        const { errors: Z, values: ue } = await S();
        (n.errors = Z), (ae = ue);
      } else await k(r);
      if ((Je(n.errors, 'root'), vt(n.errors))) {
        p.state.next({ errors: {} });
        try {
          await I(ae, V);
        } catch (Z) {
          ee = Z;
        }
      } else F && (await F({ ...n.errors }, V)), re(), setTimeout(re);
      if (
        (p.state.next({
          isSubmitted: !0,
          isSubmitting: !1,
          isSubmitSuccessful: vt(n.errors) && !ee,
          submitCount: n.submitCount + 1,
          errors: n.errors,
        }),
        ee)
      )
        throw ee;
    },
    de = (I, F = {}) => {
      ce(r, I) &&
        (De(F.defaultValue) ? G(I, Qe(ce(a, I))) : (G(I, F.defaultValue), Fe(a, I, Qe(F.defaultValue))),
        F.keepTouched || Je(n.touchedFields, I),
        F.keepDirty || (Je(n.dirtyFields, I), (n.isDirty = F.defaultValue ? _(I, Qe(ce(a, I))) : _())),
        F.keepError || (Je(n.errors, I), d.isValid && w()),
        p.state.next({ ...n }));
    },
    Le = (I, F = {}) => {
      const V = I ? Qe(I) : a,
        ee = Qe(V),
        ae = vt(I),
        Z = ae ? a : ee;
      if ((F.keepDefaultValues || (a = V), !F.keepValues)) {
        if (F.keepDirtyValues) for (const ue of s.mount) ce(n.dirtyFields, ue) ? Fe(Z, ue, ce(i, ue)) : G(ue, ce(Z, ue));
        else {
          if (ks && De(I))
            for (const ue of s.mount) {
              const le = ce(r, ue);
              if (le && le._f) {
                const be = Array.isArray(le._f.refs) ? le._f.refs[0] : le._f.ref;
                if (gi(be)) {
                  const Ee = be.closest('form');
                  if (Ee) {
                    Ee.reset();
                    break;
                  }
                }
              }
            }
          r = {};
        }
        (i = e.shouldUnregister ? (F.keepDefaultValues ? Qe(a) : {}) : Qe(Z)),
          p.array.next({ values: { ...Z } }),
          p.values.next({ values: { ...Z } });
      }
      (s = {
        mount: F.keepDirtyValues ? s.mount : new Set(),
        unMount: new Set(),
        array: new Set(),
        watch: new Set(),
        watchAll: !1,
        focus: '',
      }),
        (o.mount = !d.isValid || !!F.keepIsValid || !!F.keepDirtyValues),
        (o.watch = !!e.shouldUnregister),
        p.state.next({
          submitCount: F.keepSubmitCount ? n.submitCount : 0,
          isDirty: ae ? !1 : F.keepDirty ? n.isDirty : !!(F.keepDefaultValues && !Mn(I, a)),
          isSubmitted: F.keepIsSubmitted ? n.isSubmitted : !1,
          dirtyFields: ae
            ? []
            : F.keepDirtyValues
              ? F.keepDefaultValues && i
                ? Ba(a, i)
                : n.dirtyFields
              : F.keepDefaultValues && I
                ? Ba(a, I)
                : {},
          touchedFields: F.keepTouched ? n.touchedFields : {},
          errors: F.keepErrors ? n.errors : {},
          isSubmitSuccessful: F.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
          isSubmitting: !1,
        });
    },
    je = (I, F) => Le(xn(I) ? I(i) : I, F);
  return {
    control: {
      register: Q,
      unregister: Y,
      getFieldState: P,
      handleSubmit: se,
      setError: q,
      _executeSchema: S,
      _getWatch: O,
      _getDirty: _,
      _updateValid: w,
      _removeUnmounted: y,
      _updateFieldArray: N,
      _updateDisabledField: J,
      _getFieldArray: U,
      _reset: Le,
      _resetDefaultValues: () =>
        xn(t.defaultValues) &&
        t.defaultValues().then(I => {
          je(I, t.resetOptions), p.state.next({ isLoading: !1 });
        }),
      _updateFormState: I => {
        n = { ...n, ...I };
      },
      _disableForm: te,
      _subjects: p,
      _proxyFormState: d,
      _setErrors: A,
      get _fields() {
        return r;
      },
      get _formValues() {
        return i;
      },
      get _state() {
        return o;
      },
      set _state(I) {
        o = I;
      },
      get _defaultValues() {
        return a;
      },
      get _names() {
        return s;
      },
      set _names(I) {
        s = I;
      },
      get _formState() {
        return n;
      },
      set _formState(I) {
        n = I;
      },
      get _options() {
        return t;
      },
      set _options(I) {
        t = { ...t, ...I };
      },
    },
    trigger: ne,
    register: Q,
    handleSubmit: se,
    watch: $,
    setValue: G,
    getValues: C,
    reset: je,
    resetField: de,
    clearErrors: H,
    unregister: Y,
    setError: q,
    setFocus: (I, F = {}) => {
      const V = ce(r, I),
        ee = V && V._f;
      if (ee) {
        const ae = ee.refs ? ee.refs[0] : ee.ref;
        ae.focus && (ae.focus(), F.shouldSelect && ae.select());
      }
    },
    getFieldState: P,
  };
}
function n2(e = {}) {
  const t = pe.useRef(),
    n = pe.useRef(),
    [r, a] = pe.useState({
      isDirty: !1,
      isValidating: !1,
      isLoading: xn(e.defaultValues),
      isSubmitted: !1,
      isSubmitting: !1,
      isSubmitSuccessful: !1,
      isValid: !1,
      submitCount: 0,
      dirtyFields: {},
      touchedFields: {},
      validatingFields: {},
      errors: e.errors || {},
      disabled: e.disabled || !1,
      defaultValues: xn(e.defaultValues) ? void 0 : e.defaultValues,
    });
  t.current || (t.current = { ...ey(e), formState: r });
  const i = t.current.control;
  return (
    (i._options = e),
    Fi({
      subject: i._subjects.state,
      next: o => {
        Lu(o, i._proxyFormState, i._updateFormState, !0) && a({ ...i._formState });
      },
    }),
    pe.useEffect(() => i._disableForm(e.disabled), [i, e.disabled]),
    pe.useEffect(() => {
      if (i._proxyFormState.isDirty) {
        const o = i._getDirty();
        o !== r.isDirty && i._subjects.state.next({ isDirty: o });
      }
    }, [i, r.isDirty]),
    pe.useEffect(() => {
      e.values && !Mn(e.values, n.current)
        ? (i._reset(e.values, i._options.resetOptions), (n.current = e.values), a(o => ({ ...o })))
        : i._resetDefaultValues();
    }, [e.values, i]),
    pe.useEffect(() => {
      e.errors && i._setErrors(e.errors);
    }, [e.errors, i]),
    pe.useEffect(() => {
      i._state.mount || (i._updateValid(), (i._state.mount = !0)),
        i._state.watch && ((i._state.watch = !1), i._subjects.state.next({ ...i._formState })),
        i._removeUnmounted();
    }),
    pe.useEffect(() => {
      e.shouldUnregister && i._subjects.values.next({ values: i._getWatch() });
    }, [e.shouldUnregister, i]),
    (t.current.formState = ku(r, i)),
    t.current
  );
}
var ty = typeof global == 'object' && global && global.Object === Object && global,
  ny = typeof self == 'object' && self && self.Object === Object && self,
  Ns = ty || ny || Function('return this')(),
  Cr = Ns.Symbol,
  Uu = Object.prototype,
  ry = Uu.hasOwnProperty,
  ay = Uu.toString,
  Kr = Cr ? Cr.toStringTag : void 0;
function iy(e) {
  var t = ry.call(e, Kr),
    n = e[Kr];
  try {
    e[Kr] = void 0;
    var r = !0;
  } catch {}
  var a = ay.call(e);
  return r && (t ? (e[Kr] = n) : delete e[Kr]), a;
}
var oy = Object.prototype,
  sy = oy.toString;
function ly(e) {
  return sy.call(e);
}
var cy = '[object Null]',
  dy = '[object Undefined]',
  dc = Cr ? Cr.toStringTag : void 0;
function Vu(e) {
  return e == null ? (e === void 0 ? dy : cy) : dc && dc in Object(e) ? iy(e) : ly(e);
}
function uy(e) {
  return e != null && typeof e == 'object';
}
var fy = '[object Symbol]';
function Ts(e) {
  return typeof e == 'symbol' || (uy(e) && Vu(e) == fy);
}
function py(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; ) a[n] = t(e[n], n, e);
  return a;
}
var Ps = Array.isArray,
  my = 1 / 0,
  uc = Cr ? Cr.prototype : void 0,
  fc = uc ? uc.toString : void 0;
function Hu(e) {
  if (typeof e == 'string') return e;
  if (Ps(e)) return py(e, Hu) + '';
  if (Ts(e)) return fc ? fc.call(e) : '';
  var t = e + '';
  return t == '0' && 1 / e == -my ? '-0' : t;
}
function $u(e) {
  var t = typeof e;
  return e != null && (t == 'object' || t == 'function');
}
var hy = '[object AsyncFunction]',
  gy = '[object Function]',
  vy = '[object GeneratorFunction]',
  by = '[object Proxy]';
function yy(e) {
  if (!$u(e)) return !1;
  var t = Vu(e);
  return t == gy || t == vy || t == hy || t == by;
}
var ho = Ns['__core-js_shared__'],
  pc = (function () {
    var e = /[^.]+$/.exec((ho && ho.keys && ho.keys.IE_PROTO) || '');
    return e ? 'Symbol(src)_1.' + e : '';
  })();
function xy(e) {
  return !!pc && pc in e;
}
var wy = Function.prototype,
  Cy = wy.toString;
function Oy(e) {
  if (e != null) {
    try {
      return Cy.call(e);
    } catch {}
    try {
      return e + '';
    } catch {}
  }
  return '';
}
var _y = /[\\^$.*+?()[\]{}|]/g,
  Ey = /^\[object .+?Constructor\]$/,
  Sy = Function.prototype,
  ky = Object.prototype,
  Ly = Sy.toString,
  Iy = ky.hasOwnProperty,
  Ry = RegExp(
    '^' +
      Ly.call(Iy)
        .replace(_y, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$',
  );
function Ny(e) {
  if (!$u(e) || xy(e)) return !1;
  var t = yy(e) ? Ry : Ey;
  return t.test(Oy(e));
}
function Ty(e, t) {
  return e?.[t];
}
function zu(e, t) {
  var n = Ty(e, t);
  return Ny(n) ? n : void 0;
}
function Py(e, t) {
  return e === t || (e !== e && t !== t);
}
var Ay = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  Fy = /^\w*$/;
function My(e, t) {
  if (Ps(e)) return !1;
  var n = typeof e;
  return n == 'number' || n == 'symbol' || n == 'boolean' || e == null || Ts(e)
    ? !0
    : Fy.test(e) || !Ay.test(e) || (t != null && e in Object(t));
}
var pa = zu(Object, 'create');
function Dy() {
  (this.__data__ = pa ? pa(null) : {}), (this.size = 0);
}
function jy(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var By = '__lodash_hash_undefined__',
  Uy = Object.prototype,
  Vy = Uy.hasOwnProperty;
function Hy(e) {
  var t = this.__data__;
  if (pa) {
    var n = t[e];
    return n === By ? void 0 : n;
  }
  return Vy.call(t, e) ? t[e] : void 0;
}
var $y = Object.prototype,
  zy = $y.hasOwnProperty;
function Wy(e) {
  var t = this.__data__;
  return pa ? t[e] !== void 0 : zy.call(t, e);
}
var Gy = '__lodash_hash_undefined__';
function qy(e, t) {
  var n = this.__data__;
  return (this.size += this.has(e) ? 0 : 1), (n[e] = pa && t === void 0 ? Gy : t), this;
}
function zn(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
zn.prototype.clear = Dy;
zn.prototype.delete = jy;
zn.prototype.get = Hy;
zn.prototype.has = Wy;
zn.prototype.set = qy;
function Ky() {
  (this.__data__ = []), (this.size = 0);
}
function Di(e, t) {
  for (var n = e.length; n--; ) if (Py(e[n][0], t)) return n;
  return -1;
}
var Xy = Array.prototype,
  Jy = Xy.splice;
function Yy(e) {
  var t = this.__data__,
    n = Di(t, e);
  if (n < 0) return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Jy.call(t, n, 1), --this.size, !0;
}
function Qy(e) {
  var t = this.__data__,
    n = Di(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function Zy(e) {
  return Di(this.__data__, e) > -1;
}
function e0(e, t) {
  var n = this.__data__,
    r = Di(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
}
function Fr(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Fr.prototype.clear = Ky;
Fr.prototype.delete = Yy;
Fr.prototype.get = Qy;
Fr.prototype.has = Zy;
Fr.prototype.set = e0;
var t0 = zu(Ns, 'Map');
function n0() {
  (this.size = 0), (this.__data__ = { hash: new zn(), map: new (t0 || Fr)(), string: new zn() });
}
function r0(e) {
  var t = typeof e;
  return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean' ? e !== '__proto__' : e === null;
}
function ji(e, t) {
  var n = e.__data__;
  return r0(t) ? n[typeof t == 'string' ? 'string' : 'hash'] : n.map;
}
function a0(e) {
  var t = ji(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
function i0(e) {
  return ji(this, e).get(e);
}
function o0(e) {
  return ji(this, e).has(e);
}
function s0(e, t) {
  var n = ji(this, e),
    r = n.size;
  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
}
function Kn(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
Kn.prototype.clear = n0;
Kn.prototype.delete = a0;
Kn.prototype.get = i0;
Kn.prototype.has = o0;
Kn.prototype.set = s0;
var l0 = 'Expected a function';
function As(e, t) {
  if (typeof e != 'function' || (t != null && typeof t != 'function')) throw new TypeError(l0);
  var n = function () {
    var r = arguments,
      a = t ? t.apply(this, r) : r[0],
      i = n.cache;
    if (i.has(a)) return i.get(a);
    var o = e.apply(this, r);
    return (n.cache = i.set(a, o) || i), o;
  };
  return (n.cache = new (As.Cache || Kn)()), n;
}
As.Cache = Kn;
var c0 = 500;
function d0(e) {
  var t = As(e, function (r) {
      return n.size === c0 && n.clear(), r;
    }),
    n = t.cache;
  return t;
}
var u0 = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  f0 = /\\(\\)?/g,
  p0 = d0(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(''),
      e.replace(u0, function (n, r, a, i) {
        t.push(a ? i.replace(f0, '$1') : r || n);
      }),
      t
    );
  });
function m0(e) {
  return e == null ? '' : Hu(e);
}
function h0(e, t) {
  return Ps(e) ? e : My(e, t) ? [e] : p0(m0(e));
}
var g0 = 1 / 0;
function v0(e) {
  if (typeof e == 'string' || Ts(e)) return e;
  var t = e + '';
  return t == '0' && 1 / e == -g0 ? '-0' : t;
}
function b0(e, t) {
  t = h0(t, e);
  for (var n = 0, r = t.length; e != null && n < r; ) e = e[v0(t[n++])];
  return n && n == r ? e : void 0;
}
function ma(e, t, n) {
  var r = e == null ? void 0 : b0(e, t);
  return r === void 0 ? n : r;
}
const Wu = e => {
  var {
      className: t = '',
      logo: n = null,
      logoProps: r = null,
      logoComponent: a,
      headerTools: i = null,
      topNav: o = null,
      isNavOpen: s = !0,
      role: l = void 0,
      showNavToggle: u = !1,
      navToggleId: d = 'nav-toggle',
      onNavToggle: p = w => {},
      'aria-label': f = 'Global navigation',
      'aria-controls': h = null,
    } = e,
    b = ie(e, [
      'className',
      'logo',
      'logoProps',
      'logoComponent',
      'headerTools',
      'topNav',
      'isNavOpen',
      'role',
      'showNavToggle',
      'navToggleId',
      'onNavToggle',
      'aria-label',
      'aria-controls',
    ]);
  let v = a;
  return (
    a || (r?.href !== void 0 ? (v = 'a') : (v = 'span')),
    c.createElement(pu, null, ({ isManagedSidebar: w, onSidebarToggle: T, isSidebarOpen: N }) => {
      const B = w ? T : p,
        A = w ? N : s;
      return c.createElement(
        'header',
        Object.assign({ role: l, className: R(he.pageHeader, t) }, b),
        (u || n) &&
          c.createElement(
            'div',
            { className: R(he.pageHeaderBrand) },
            u &&
              c.createElement(
                'div',
                { className: R(he.pageHeaderBrandToggle) },
                c.createElement(
                  Ke,
                  { id: d, onClick: B, 'aria-label': f, 'aria-controls': h, 'aria-expanded': A ? 'true' : 'false', variant: ft.plain },
                  c.createElement(ab, null),
                ),
              ),
            n && c.createElement(v, Object.assign({ className: R(he.pageHeaderBrandLink) }, r), n),
          ),
        o && c.createElement('div', { className: R(he.pageHeaderNav) }, o),
        i,
      );
    })
  );
};
Wu.displayName = 'PageHeader';
const Gu = e => {
  var { children: t, className: n } = e,
    r = ie(e, ['children', 'className']);
  return c.createElement('div', Object.assign({ className: R(he.pageHeaderTools, n) }, r), t);
};
Gu.displayName = 'PageHeaderTools';
const qu = e => {
  var { children: t, className: n, visibility: r } = e,
    a = ie(e, ['children', 'className', 'visibility']);
  const { width: i, getBreakpoint: o } = c.useContext(Tr);
  return c.createElement('div', Object.assign({ className: R(he.pageHeaderToolsGroup, _n(r, he, '', o(i)), n) }, a), t);
};
qu.displayName = 'PageHeaderToolsGroup';
const Ga = e => {
  var { children: t, id: n, className: r, visibility: a, isSelected: i } = e,
    o = ie(e, ['children', 'id', 'className', 'visibility', 'isSelected']);
  const { width: s, getBreakpoint: l } = c.useContext(Tr);
  return c.createElement(
    'div',
    Object.assign({ className: R(he.pageHeaderToolsItem, i && he.modifiers.selected, _n(a, he, '', l(s)), r), id: n }, o),
    t,
  );
};
Ga.displayName = 'PageHeaderToolsItem';
const Ku = Ci(void 0),
  r2 = () => Oi(Ku),
  y0 = ({ children: e }) => {
    const [t, n] = ze([]),
      r = o => {
        n(s => s.filter(l => l.id !== o));
      },
      a = (o, s = fr.success, l) => {
        n([{ id: Math.random() * 100, message: o, variant: s, description: l }, ...t]);
      },
      i = o => {
        a(o, fr.danger);
      };
    return We(Ku.Provider, {
      value: { addAlert: a, addError: i },
      children: [
        M(Pd, {
          isToast: !0,
          'data-testid': 'alerts',
          children: t.map(({ id: o, variant: s, message: l, description: u }) =>
            M(
              cs,
              {
                isLiveRegion: !0,
                variant: fr[s],
                variantLabel: '',
                title: l,
                actionClose: M(Nd, { title: l, onClose: () => r(o) }),
                timeout: !0,
                onTimeout: () => r(o),
                children: u && M('p', { children: u }),
              },
              o,
            ),
          ),
        }),
        e,
      ],
    });
  },
  x0 = e => {
    const { t } = Wn(),
      n = e.error,
      r = w0(n);
    function a() {
      location.href = location.origin + location.pathname;
    }
    return M(_a, {
      children: M(sn, {
        variant: ci.small,
        title: t('somethingWentWrong'),
        titleIconVariant: 'danger',
        showClose: !1,
        isOpen: !0,
        actions: [M(Ke, { variant: 'primary', onClick: a, children: t('tryAgain') }, 'tryAgain')],
        children: We(Ss, {
          children: [M($n, { children: t('somethingWentWrongDescription') }), r && M($n, { component: wr.small, children: r })],
        }),
      }),
    });
  };
function w0(e) {
  return typeof e == 'string' ? e : e instanceof Error ? e.message : null;
}
function C0(e, t) {
  const n = Ci(t);
  return (n.displayName = e), n;
}
function O0(e) {
  return e != null;
}
function _0(e) {
  const t = Oi(e);
  if (O0(t)) return t;
  throw new Error(
    `No provider found for ${e.displayName ? `the '${e.displayName}'` : 'an unknown'} context, make sure it is included in your component hierarchy.`,
  );
}
function E0(e, t, n) {
  const [r, a] = ze(() => e.getItem(t) ?? n),
    i = $o(o => {
      a(o), e.setItem(t, o);
    }, []);
  return (
    Tt(() => {
      a(e.getItem(t) ?? n), window.addEventListener('storage', o);
      function o(s) {
        s.storageArea === e && (s.key === null || s.key === t) && a(s.newValue ?? n);
      }
      return () => window.removeEventListener('storage', o);
    }, [e, t]),
    [r, i]
  );
}
function S0(e, t, n) {
  const r = Pt(() => JSON.stringify(n), [n]),
    [a, i] = E0(e, t, r),
    o = Pt(() => JSON.parse(a), [a]),
    s = $o(l => i(JSON.stringify(l)), []);
  return [o, s];
}
const Xu = C0('HelpContext', void 0),
  k0 = () => _0(Xu),
  L0 = ({ children: e }) => {
    const [t, n] = S0(localStorage, 'helpEnabled', !0);
    function r() {
      n(!t);
    }
    return M(Xu.Provider, { value: { enabled: t, toggleHelp: r }, children: e });
  },
  I0 = () => Ci(void 0);
let Uo;
const Fs = () => {
    const e = Oi(Uo);
    if (!e) throw Error('no environment provider in the hierarchy make sure to add the provider');
    return e;
  },
  R0 = ({ environment: e, children: t }) => {
    Uo = I0();
    const n = qt(!1),
      [r, a] = ze(!1),
      [i, o] = ze(),
      s = Pt(() => {
        const l = new wu({ url: e.serverBaseUrl, realm: e.realm, clientId: e.clientId });
        return (l.onAuthLogout = () => l.login()), l;
      }, [e]);
    return (
      Tt(() => {
        n.current ||
          (s
            .init({ onLoad: 'check-sso', pkceMethod: 'S256', responseMode: 'query' })
            .then(() => a(!0))
            .catch(l => o(l)),
          (n.current = !0));
      }, [s]),
      i
        ? M(x0, { error: i })
        : r
          ? M(Uo.Provider, { value: { environment: e, keycloak: s }, children: M(y0, { children: M(L0, { children: t }) }) })
          : M(Er, {})
    );
  };
function N0() {
  const e = document.getElementById('environment')?.textContent;
  if (typeof e != 'string') throw new Error('Environment variables not found in the document.');
  try {
    return JSON.parse(e);
  } catch {
    throw new Error('Unable to parse environment variables as JSON.');
  }
}
const a2 = ({
    modalTitle: e,
    continueLabel: t,
    cancelLabel: n,
    buttonTitle: r,
    isDisabled: a,
    buttonVariant: i,
    buttonTestRole: o,
    onContinue: s,
    component: l = Ke,
    children: u,
    ...d
  }) => {
    const [p, f] = ze(!1);
    return We(wi, {
      children: [
        M(l, { variant: i, onClick: () => f(!0), isDisabled: a, 'data-testrole': o, children: r }),
        M(sn, {
          variant: 'small',
          ...d,
          title: e,
          isOpen: p,
          onClose: () => f(!1),
          actions: [
            M(
              Ke,
              {
                id: 'modal-confirm',
                variant: 'primary',
                onClick: () => {
                  f(!1), s();
                },
                children: t,
              },
              'confirm',
            ),
            M(Ke, { id: 'modal-cancel', variant: 'secondary', onClick: () => f(!1), children: n }, 'cancel'),
          ],
          children: u,
        }),
      ],
    });
  },
  Ju = ({ message: e, ...t }) => M(xs, { ...t, children: M(hs, { children: M(gs, { icon: M(Lr, {}), variant: 'error', children: e }) }) }),
  Yu = ({ helpText: e, fieldLabelId: t, noVerticalAlign: n = !0, unWrap: r = !1 }) => {
    const { enabled: a } = k0();
    return a
      ? M(ru, {
          bodyContent: e,
          children: We(wi, {
            children: [
              !r &&
                M('button', {
                  'data-testid': `help-label-${t}`,
                  'aria-label': t,
                  onClick: i => i.preventDefault(),
                  className: 'pf-v5-c-form__group-label-help',
                  children: M(pi, { isInline: n, children: M(rc, {}) }),
                }),
              r && M(pi, { isInline: n, children: M(rc, {}) }),
            ],
          }),
        })
      : null;
  },
  Ms = ({ name: e, label: t, labelIcon: n, error: r, children: a, ...i }) =>
    We(ys, {
      label: t || e,
      fieldId: e,
      labelIcon: n ? M(Yu, { helpText: n, fieldLabelId: e }) : void 0,
      ...i,
      children: [a, r && M(Ju, { 'data-testid': `${e}-helper`, message: r.message })],
    }),
  T0 = ({ hasReveal: e = !0, innerRef: t, ...n }) => {
    const { t: r } = Wn(),
      [a, i] = ze(!0);
    return We(Ti, {
      children: [
        M(ui, { isFill: !0, children: M(Ir, { ...n, type: a ? 'password' : 'text', ref: t }) }),
        e && M(Ke, { variant: 'control', 'aria-label': r('showPassword'), onClick: () => i(!a), children: a ? M($v, {}) : M(Vv, {}) }),
      ],
    });
  },
  P0 = wc((e, t) => M(T0, { ...e, innerRef: t }));
P0.displayName = 'PasswordInput';
const A0 = ({ id: e, name: t, label: n, options: r, controller: a, labelIcon: i, ...o }) => {
    const {
        control: s,
        formState: { errors: l },
      } = Ar(),
      [u, d] = ze(!1);
    return M(Ms, {
      name: t,
      label: n,
      isRequired: !!a.rules?.required,
      error: ma(l, t),
      labelIcon: i,
      children: M(Mi, {
        ...a,
        name: t,
        control: s,
        render: ({ field: { onChange: p, value: f } }) =>
          M(Vn, {
            ...o,
            onClick: () => d(!u),
            onOpenChange: () => d(!1),
            selected: na(r) ? r.filter(h => (Array.isArray(f) ? f.includes(h.key) : f === h.key)).map(h => h.value) : f,
            toggle: h =>
              M(Rr, {
                id: e || t.slice(t.lastIndexOf('.') + 1),
                ref: h,
                onClick: () => d(!u),
                isExpanded: u,
                isFullWidth: !0,
                status: ma(l, t) ? Cn.danger : void 0,
                'aria-label': 'toggle',
                children: na(r) ? r.find(b => b.key === (Array.isArray(f) ? f[0] : f))?.value : f,
              }),
            onSelect: (h, b) => {
              const v = b?.toString();
              p(Array.isArray(f) ? [v] : v), d(!1);
            },
            isOpen: u,
            children: M(Oa, { children: r.map(h => M(Ni, { value: Pn(h), children: Ds(h) ? h : h.value }, Pn(h))) }),
          }),
      }),
    });
  },
  Ua = e => (Ds(e) ? e : e.value),
  F0 = ({ id: e, name: t, label: n, options: r, controller: a, labelIcon: i, placeholderText: o, onFilter: s, variant: l, ...u }) => {
    const {
        control: d,
        formState: { errors: p },
      } = Ar(),
      [f, h] = ze(!1),
      [b, v] = ze(''),
      [w, T] = ze(0),
      N = qt(),
      B = r.filter(g => Ua(g).toLowerCase().startsWith(b.toLowerCase())),
      A = Pt(() => B.map((g, m) => M(Ni, { value: Pn(g), isFocused: w === m, children: Ua(g) }, Pn(g))), [w, B]),
      L = (g, m) => {
        const S = B[w];
        switch ((h(!0), g.key)) {
          case 'Enter': {
            g.preventDefault(),
              l !== or.typeaheadMulti ? v(Ua(S)) : v(''),
              m.onChange(Array.isArray(m.value) ? [...m.value, Pn(S)] : Pn(S)),
              h(!1),
              T(0);
            break;
          }
          case 'Tab':
          case 'Escape': {
            h(!1), m.onChange(void 0);
            break;
          }
          case 'Backspace': {
            l === or.typeahead && m.onChange('');
            break;
          }
          case 'ArrowUp':
          case 'ArrowDown': {
            g.preventDefault();
            let E = 0;
            g.key === 'ArrowUp' && (w === 0 ? (E = r.length - 1) : (E = w - 1)),
              g.key === 'ArrowDown' && (w === r.length - 1 ? (E = 0) : (E = w + 1)),
              T(E);
            break;
          }
        }
      };
    return M(Ms, {
      name: t,
      label: n,
      isRequired: !!a.rules?.required,
      error: ma(p, t),
      labelIcon: i,
      children: M(Mi, {
        ...a,
        name: t,
        control: d,
        render: ({ field: g }) =>
          M(Vn, {
            ...u,
            onClick: () => h(!f),
            onOpenChange: () => h(!1),
            selected: na(r)
              ? r.filter(m => (Array.isArray(g.value) ? g.value.includes(m.key) : g.value === m.key)).map(m => m.value)
              : g.value,
            toggle: m =>
              M(Rr, {
                ref: m,
                id: e || t.slice(t.lastIndexOf('.') + 1),
                variant: 'typeahead',
                onClick: () => h(!f),
                isExpanded: f,
                isFullWidth: !0,
                status: ma(p, t) ? Cn.danger : void 0,
                children: We(ws, {
                  isPlain: !0,
                  children: [
                    M(Cs, {
                      placeholder: o,
                      value:
                        l === or.typeahead && g.value
                          ? na(r)
                            ? r.find(S => S.key === (Array.isArray(g.value) ? g.value[0] : g.value))?.value
                            : g.value
                          : b,
                      onClick: () => h(!f),
                      onChange: (S, E) => {
                        v(E), s?.(E);
                      },
                      onKeyDown: S => L(S, g),
                      autoComplete: 'off',
                      innerRef: N,
                      role: 'combobox',
                      isExpanded: f,
                      'aria-controls': 'select-typeahead-listbox',
                      children:
                        l === or.typeaheadMulti &&
                        Array.isArray(g.value) &&
                        M(Nr, {
                          'aria-label': 'Current selections',
                          children: g.value.map((S, E) =>
                            M(
                              Sn,
                              {
                                onClick: k => {
                                  k.stopPropagation(), g.onChange(g.value.filter(y => y !== Pn(S)));
                                },
                                children: na(r) ? r.find(k => S === k.key)?.value : Ua(S),
                              },
                              E,
                            ),
                          ),
                        }),
                    }),
                    M(Os, {
                      children:
                        !!b &&
                        M(Ke, {
                          variant: 'plain',
                          onClick: () => {
                            g.onChange(void 0), v(''), N?.current?.focus();
                          },
                          'aria-label': 'Clear input value',
                          children: M(Sr, { 'aria-hidden': !0 }),
                        }),
                    }),
                  ],
                }),
              }),
            onSelect: (m, S) => {
              m?.stopPropagation();
              const E = S?.toString();
              l === or.typeaheadMulti && Array.isArray(g.value)
                ? g.value.includes(E)
                  ? g.onChange(g.value.filter(k => k !== E))
                  : g.onChange([...g.value, E])
                : (g.onChange(Array.isArray(g.value) ? [E] : E), h(!1));
            },
            isOpen: f,
            children: M(Oa, { children: A }),
          }),
      }),
    });
  };
var or = (e => ((e.single = 'single'), (e.typeahead = 'typeahead'), (e.typeaheadMulti = 'typeaheadMulti'), e))(or || {});
const na = e => typeof e[0] != 'string',
  Ds = e => typeof e == 'string',
  Pn = e => (Ds(e) ? e : e.key),
  M0 = ({ variant: e = 'single', ...t }) => (e === 'single' ? M(A0, { ...t }) : M(F0, { ...t, variant: e })),
  i2 = e => {
    const { labelIcon: t, ...n } = e,
      r = !!e.rules?.required,
      a = e.defaultValue ?? '',
      { field: i, fieldState: o } = Tu({ ...e, defaultValue: a });
    return We(Ms, {
      name: e.name,
      label: e.label,
      labelIcon: t,
      isRequired: r,
      error: o.error,
      children: [
        M(Ir, {
          isRequired: r,
          id: e.name,
          'data-testid': e.name,
          validated: o.error ? gr.error : gr.default,
          isDisabled: e.isDisabled,
          ...n,
          ...i,
        }),
        e.helperText && M(xs, { children: M(hs, { children: M(gs, { children: e.helperText }) }) }),
      ],
    });
  },
  D0 = uu,
  o2 = ({ icon: e }) => {
    const t = j0(e);
    return M(pi, { size: 'lg', children: M(t, { alt: e }) });
  };
function j0(e) {
  switch (e) {
    case 'github':
      return gb;
    case 'facebook':
      return mb;
    case 'gitlab':
      return bb;
    case 'google':
      return xb;
    case 'linkedin':
    case 'linkedin-openid-connect':
      return Eb;
    case 'openshift-v3':
    case 'openshift-v4':
      return Nb;
    case 'stackoverflow':
      return Db;
    case 'twitter':
      return Bb;
    case 'microsoft':
      return kb;
    case 'bitbucket':
      return ob;
    case 'instagram':
      return Ob;
    case 'paypal':
      return Pb;
    default:
      return lb;
  }
}
const B0 = '_title_180i0_2',
  U0 = { title: B0 },
  Qu = ({ id: e, title: t, headingLevel: n = 'h1', size: r = 'xl', ...a }) =>
    M(os, { headingLevel: n, size: r, className: U0.title, id: e, tabIndex: 0, ...a, children: t }),
  V0 = ({ title: e, children: t, scrollId: n, className: r }) => {
    const a = sf();
    return We(ms, {
      id: a,
      className: r,
      isFlat: !0,
      children: [
        M(Kd, { className: 'kc-form-panel__header', children: M(zd, { tabIndex: 0, children: M(Qu, { id: n, title: e }) }) }),
        M($d, { className: 'kc-form-panel__body', children: t }),
      ],
    });
  },
  H0 = e => {
    const { title: t, children: n, scrollId: r, ...a } = e;
    return M('section', {
      ...a,
      style: { marginTop: 'var(--pf-v5-global--spacer--lg)' },
      children: We(wi, { children: [M(Qu, { id: r, title: t }), n] }),
    });
  },
  $0 = '_panel_1cdve_1',
  z0 = '_sticky_1cdve_5',
  mc = { panel: $0, sticky: z0 },
  W0 = 'kc-main-content-page-container',
  hc = e => e.replace(/\s+/g, '-'),
  G0 = ({ label: e, sections: t, borders: n = !1, ...r }) => {
    const a = Pt(() => t.filter(({ isHidden: i }) => !i), [t]);
    return We(yu, {
      hasGutter: !0,
      ...r,
      children: [
        M(Do, {
          md: 8,
          sm: 12,
          children: a.map(({ title: i, panel: o }) => {
            const s = hc(i.toLowerCase());
            return M(
              Cc,
              {
                children: n
                  ? M(V0, { scrollId: s, title: i, className: mc.panel, children: o })
                  : M(H0, { scrollId: s, title: i, children: o }),
              },
              i,
            );
          }),
        }),
        M(Do, {
          md: 4,
          sm: 12,
          order: { default: '-1', md: '1' },
          children: M(vu, {
            className: mc.sticky,
            children: M(fu, {
              isVertical: !0,
              scrollableSelector: `#${W0}`,
              label: e,
              offset: 100,
              children: a.map(({ title: i }) => {
                const o = hc(i.toLowerCase());
                return M(fa, { href: `#${o}`, 'data-testid': `jump-link-${o}`, children: i }, i);
              }),
            }),
          }),
        }),
      ],
    });
  },
  q0 = e => {
    try {
      return new Intl.DisplayNames([e], { type: 'language' }).of(e);
    } catch {
      return e;
    }
  },
  K0 = ({ t: e, form: t, supportedLocales: n, currentLocale: r }) => {
    const a = Pt(
      () => n.map(i => ({ key: i, value: e(`locale_${i}`, q0(i) ?? i) })).sort((i, o) => i.value.localeCompare(o.value, r)),
      [n, r, e],
    );
    return a.length
      ? M(Hb, {
          ...t,
          children: M(M0, {
            'data-testid': 'locale-select',
            name: 'attributes.locale',
            label: e('selectALocale'),
            controller: { defaultValue: '' },
            options: a,
            variant: a.length >= 10 ? 'typeahead' : 'single',
          }),
        })
      : null;
  },
  Zu = e => e?.includes('${'),
  ef = e => e.substring(2, e.length - 1),
  kn = (e, t, n) => (Zu(t) ? e(ef(t)) : t) || n,
  Vo = (e, t) => kn(e, t.displayName, t.name),
  X0 = ['username', 'firstName', 'lastName', 'email'],
  tf = e => e && X0.includes(e),
  Rn = e => `${tf(e) ? '' : 'attributes.'}${e?.replaceAll('.', '🍺')}`,
  s2 = e => e.replaceAll('.', '🍺'),
  l2 = e => e.replaceAll('🍺', '.');
function c2(e, t, n) {
  (e.responseData.errors !== void 0 ? e.responseData.errors : [e.responseData]).forEach(r => {
    const a = Object.assign(
      {},
      r.params?.map(i => n(Zu(i.toString()) ? ef(i) : i)),
    );
    t(Rn(r.field), { message: n(r.errorMessage, { ...a, defaultValue: r.errorMessage || r.field }), type: 'server' });
  });
}
function Bi({ required: e, validators: t }) {
  return e || J0(t);
}
function J0(e) {
  return e && 'length' in e && 'min' in e.length && typeof e.length.min == 'number' ? e.length.min > 0 : !1;
}
const Sa = ({ t: e, form: t, attribute: n, renderer: r, children: a }) => {
    const i = kn(e, n.annotations?.inputHelperTextBefore),
      {
        formState: { errors: o },
      } = t,
      s = r?.(n),
      l = ma(o, Rn(n.name));
    return We(
      ys,
      {
        label: Vo(e, n) || '',
        fieldId: n.name,
        isRequired: Bi(n),
        labelIcon: i ? M(Yu, { helpText: i, fieldLabelId: n.name }) : void 0,
        children: [s ? We(Ti, { children: [a, s] }) : a, l && M(Ju, { 'data-testid': `${n.name}-helper`, message: l.message })],
      },
      n.name,
    );
  },
  Y0 = ({ t: e, form: t, attribute: n, renderer: r, ...a }) =>
    M(Sa, {
      t: e,
      form: t,
      attribute: n,
      renderer: r,
      children: M(Q0, {
        t: e,
        form: t,
        'aria-label': Vo(e, n),
        name: Rn(n.name),
        addButtonLabel: e('addMultivaluedLabel', { fieldLabel: Vo(e, n) }),
        ...a,
      }),
    }),
  Q0 = ({ t: e, name: t, inputType: n, form: r, addButtonLabel: a, isDisabled: i = !1, defaultValue: o, id: s, ...l }) => {
    const { register: u, setValue: d, control: p } = r,
      f = Nu({ name: t, control: p, defaultValue: o || '' }),
      h = Pt(() => (Array.isArray(f) && f.length !== 0 ? f : o || ['']), [f]),
      b = B => {
        T([...h.slice(0, B), ...h.slice(B + 1)]);
      },
      v = () => {
        T([...h, '']);
      },
      w = (B, A) => {
        T([...h.slice(0, B), A, ...h.slice(B + 1)]);
      },
      T = B => {
        const A = B.flatMap(L => L);
        d(t, A, { shouldDirty: !0 });
      },
      N = n.startsWith('html') ? n.substring(6) : 'text';
    return (
      Tt(() => {
        u(t);
      }, [u]),
      M('div', {
        id: s,
        children: h.map((B, A) =>
          We(
            Cc,
            {
              children: [
                We(Ti, {
                  children: [
                    M(ui, {
                      isFill: !0,
                      children: M(Ir, {
                        'data-testid': t + A,
                        onChange: (L, g) => w(A, g),
                        name: `${t}.${A}.value`,
                        value: B,
                        isDisabled: i,
                        type: N,
                        ...l,
                      }),
                    }),
                    M(ui, {
                      children: M(Ke, {
                        'data-testid': 'remove' + A,
                        variant: ft.link,
                        onClick: () => b(A),
                        tabIndex: -1,
                        'aria-label': e('remove'),
                        isDisabled: h.length === 1 || i,
                        children: M(Ib, {}),
                      }),
                    }),
                  ],
                }),
                A === h.length - 1 &&
                  We(Ke, {
                    variant: ft.link,
                    onClick: v,
                    tabIndex: -1,
                    'aria-label': e('add'),
                    'data-testid': 'addValue',
                    isDisabled: !B || i,
                    children: [M(Fb, {}), ' ', e(a || 'add')],
                  }),
              ],
            },
            A,
          ),
        ),
      })
    );
  },
  gc = e => {
    const { form: t, inputType: n, attribute: r } = e,
      a = Bi(r),
      i = n.startsWith('multiselect'),
      o = i ? En : Hn,
      s = r.validators?.options?.options || [],
      l = r.annotations?.inputOptionLabels || {};
    return M(Sa, {
      ...e,
      children: M(Mi, {
        name: Rn(r.name),
        control: t.control,
        defaultValue: '',
        render: ({ field: u }) =>
          M(wi, {
            children: s.map(d =>
              M(
                o,
                {
                  id: d,
                  'data-testid': d,
                  label: kn(e.t, l[d], d),
                  value: d,
                  isChecked: u.value.includes(d),
                  onChange: () => {
                    i ? (u.value.includes(d) ? u.onChange(u.value.filter(p => p !== d)) : u.onChange([...u.value, d])) : u.onChange([d]);
                  },
                  readOnly: r.readOnly,
                  isRequired: a,
                },
                d,
              ),
            ),
          }),
      }),
    });
  },
  Z0 = ({
    toggleId: e,
    onToggle: t,
    onSelect: n,
    selections: r,
    isOpen: a,
    menuAppendTo: i,
    direction: o,
    width: s,
    maxHeight: l,
    toggleIcon: u,
    className: d,
    children: p,
    ...f
  }) => {
    const [h, b] = ze(!1),
      v = qt(),
      w = () => {
        b(!h), t(!h);
      },
      T = () => (i === 'parent' && v.current?.parentElement) || 'inline',
      N = Oc.toArray(p);
    return M(Vn, {
      ref: v,
      maxMenuHeight: xi(l),
      isScrollable: !0,
      popperProps: { appendTo: T(), direction: o, width: xi(s) },
      ...f,
      onClick: w,
      onOpenChange: () => b(!1),
      selected: r,
      onSelect: (B, A) => {
        n?.(A || ''), w();
      },
      toggle: B =>
        M(Rr, {
          id: e,
          ref: B,
          className: d,
          onClick: w,
          isExpanded: a,
          'aria-label': f['aria-label'],
          icon: u,
          isFullWidth: !0,
          children: N.find(A => A.props.value === r)?.props.children || r || f['aria-label'],
        }),
      isOpen: a,
      children: M(Oa, { children: p }),
    });
  },
  e1 = ({
    toggleId: e,
    onSelect: t,
    onToggle: n,
    onFilter: r,
    variant: a,
    validated: i,
    placeholderText: o,
    maxHeight: s,
    width: l,
    toggleIcon: u,
    direction: d,
    selections: p,
    typeAheadAriaLabel: f,
    chipGroupComponent: h,
    chipGroupProps: b,
    footer: v,
    children: w,
    ...T
  }) => {
    const [N, B] = ze(''),
      [A, L] = ze(0),
      g = qt(),
      m = Oc.toArray(w),
      S = () => {
        n?.(!T.isOpen);
      },
      E = k => {
        const y = m[A];
        switch ((n?.(!0), k.key)) {
          case 'Enter': {
            k.preventDefault(), a !== wn.typeaheadMulti ? B(y.props.value) : B(''), t?.(y.props.value), n?.(!1), L(0);
            break;
          }
          case 'Escape': {
            n?.(!1);
            break;
          }
          case 'Backspace': {
            a === wn.typeahead && t?.('');
            break;
          }
          case 'ArrowUp':
          case 'ArrowDown': {
            k.preventDefault();
            let _ = 0;
            k.key === 'ArrowUp' && (A === 0 ? (_ = m.length - 1) : (_ = A - 1)),
              k.key === 'ArrowDown' && (A === m.length - 1 ? (_ = 0) : (_ = A + 1)),
              L(_);
            break;
          }
        }
      };
    return We(Vn, {
      ...T,
      onClick: S,
      onOpenChange: () => n?.(!1),
      onSelect: (k, y) => t?.(y || ''),
      maxMenuHeight: xi(s),
      popperProps: { direction: d, width: xi(l) },
      toggle: k =>
        M(Rr, {
          ref: k,
          id: e,
          variant: 'typeahead',
          onClick: () => n?.(!0),
          icon: u,
          isExpanded: T.isOpen,
          isFullWidth: !0,
          status: i === 'error' ? Cn.danger : void 0,
          children: We(ws, {
            isPlain: !0,
            children: [
              M(Cs, {
                placeholder: o,
                value: a === wn.typeahead && p ? p : N,
                onClick: S,
                onChange: (y, _) => {
                  B(_), r?.(_);
                },
                onKeyDown: y => E(y),
                autoComplete: 'off',
                innerRef: g,
                role: 'combobox',
                isExpanded: T.isOpen,
                'aria-controls': 'select-typeahead-listbox',
                'aria-label': f,
                children:
                  a === wn.typeaheadMulti &&
                  Array.isArray(p) &&
                  (h ||
                    M(Nr, {
                      ...b,
                      children: p.map((y, _) =>
                        M(
                          Sn,
                          {
                            onClick: O => {
                              O.stopPropagation(), t?.(y);
                            },
                            children: y,
                          },
                          _,
                        ),
                      ),
                    })),
              }),
              M(Os, {
                children:
                  !!N &&
                  M(Ke, {
                    variant: 'plain',
                    onClick: () => {
                      t?.(''), B(''), r?.(''), g?.current?.focus();
                    },
                    'aria-label': 'Clear input value',
                    children: M(Sr, { 'aria-hidden': !0 }),
                  }),
              }),
            ],
          }),
        }),
      children: [M(Oa, { children: w }), v && M(Dd, { children: v })],
    });
  };
var wn = (e => ((e.single = 'single'), (e.typeahead = 'typeahead'), (e.typeaheadMulti = 'typeaheadMulti'), e))(wn || {});
const xi = e => (typeof e == 'number' ? e + 'px' : e),
  t1 = ({ variant: e = 'single', ...t }) => (e === 'single' ? M(Z0, { ...t }) : M(e1, { ...t, variant: e })),
  vc = e => {
    const { t, form: n, inputType: r, attribute: a } = e,
      [i, o] = ze(!1),
      [s, l] = ze(''),
      u = r === 'multiselect',
      d = (v, w) => {
        u
          ? w.value.includes(v)
            ? w.onChange(w.value.filter(T => T !== v))
            : Array.isArray(w.value)
              ? w.onChange([...w.value, v])
              : w.onChange([v])
          : w.onChange(v === w.value ? '' : v);
      },
      p = a.validators?.options?.options || [],
      f = a.annotations?.inputOptionLabels || {},
      h = v => kn(e.t, f[v], v),
      b = v =>
        p.filter(w => h(w).toLowerCase().includes(s.toLowerCase())).map(w => M(Ni, { selected: v === w, value: w, children: h(w) }, w));
    return M(Sa, {
      ...e,
      children: M(Mi, {
        name: Rn(a.name),
        defaultValue: '',
        control: n.control,
        render: ({ field: v }) =>
          M(t1, {
            toggleId: a.name,
            onToggle: w => o(w),
            onClear: () => d('', v),
            onSelect: w => {
              const T = w.toString();
              d(T, v), Array.isArray(v.value) || o(!1);
            },
            selections: u && Array.isArray(v.value) ? v.value : h(v.value),
            variant: u ? wn.typeaheadMulti : p.length >= 10 ? wn.typeahead : wn.single,
            'aria-label': t('selectOne'),
            isOpen: i,
            isDisabled: a.readOnly,
            onFilter: w => (l(w), b(v.value)),
            children: b(v.value),
          }),
      }),
    });
  },
  n1 = e => {
    const { form: t, attribute: n } = e,
      r = Bi(n);
    return M(Sa, {
      ...e,
      children: M(D0, {
        id: n.name,
        'data-testid': n.name,
        ...t.register(Rn(n.name)),
        cols: n.annotations?.inputTypeCols,
        rows: n.annotations?.inputTypeRows,
        readOnly: n.readOnly,
        isRequired: r,
      }),
    });
  },
  Vt = e => {
    const { form: t, inputType: n, attribute: r } = e,
      a = Bi(r),
      i = n.startsWith('html') ? n.substring(6) : 'text';
    return M(Sa, {
      ...e,
      children: M(Ir, {
        id: r.name,
        'data-testid': r.name,
        type: i,
        placeholder: kn(e.t, r.annotations?.inputTypePlaceholder),
        readOnly: r.readOnly,
        isRequired: a,
        ...t.register(Rn(r.name)),
      }),
    });
  },
  Ho = {
    text: Vt,
    textarea: n1,
    select: vc,
    'select-radiobuttons': gc,
    multiselect: vc,
    'multiselect-checkboxes': gc,
    'html5-email': Vt,
    'html5-tel': Vt,
    'html5-url': Vt,
    'html5-number': Vt,
    'html5-range': Vt,
    'html5-datetime-local': Vt,
    'html5-date': Vt,
    'html5-month': Vt,
    'html5-time': Vt,
    'multi-input': Y0,
  },
  d2 = ({ t: e, form: t, userProfileMetadata: n, supportedLocales: r, currentLocale: a, hideReadOnly: i = !1, renderer: o }) => {
    const s = Pt(() => {
      if (!n.attributes) return [];
      const l = i ? n.attributes.filter(({ readOnly: u }) => !u) : n.attributes;
      return [{ name: void 0 }, ...(n.groups ?? [])].map(u => ({ group: u, attributes: l.filter(d => d.group === u.name) }));
    }, [i, n.groups, n.attributes]);
    return s.length === 0
      ? null
      : M(G0, {
          label: e('jumpToSection'),
          sections: s
            .filter(l => l.attributes.length > 0)
            .map(({ group: l, attributes: u }) => ({
              title: kn(e, l.displayHeader, l.name) || e('general'),
              panel: We('div', {
                className: 'pf-v5-c-form',
                children: [
                  l.displayDescription && M($n, { className: 'pf-v5-u-pb-lg', children: kn(e, l.displayDescription, '') }),
                  u.map(d => M(r1, { t: e, form: t, supportedLocales: r, currentLocale: a, renderer: o, attribute: d }, d.name)),
                ],
              }),
            })),
        });
  },
  r1 = ({ t: e, form: t, renderer: n, supportedLocales: r, currentLocale: a, attribute: i }) => {
    const o = t.watch(Rn(i.name)),
      s = Pt(() => i1(i), [i]),
      l = i.multivalued || (s1(o) && i.annotations?.inputType === void 0) ? Ho['multi-input'] : Ho[s];
    return i.name === 'locale'
      ? M(K0, { form: t, supportedLocales: r, currentLocale: a, t: e, attribute: i })
      : M(l, { t: e, form: t, inputType: s, attribute: i, renderer: n });
  },
  a1 = 'text';
function i1(e) {
  if (tf(e.name)) return 'text';
  const t = e.annotations?.inputType;
  return o1(t) ? t : a1;
}
const o1 = e => typeof e == 'string' && e in Ho,
  s1 = e => Array.isArray(e) && e.length > 1,
  l1 = ({ className: e = '', border: t, size: n = 'md' }) =>
    We('svg', {
      className: R(yn.avatar, yn.modifiers[n], t === 'light' && yn.modifiers.light, t === 'dark' && yn.modifiers.dark, e),
      enableBackground: 'new 0 0 36 36',
      version: '1.1',
      viewBox: '0 0 36 36',
      xmlns: 'http://www.w3.org/2000/svg',
      children: [
        M('circle', { style: { fillRule: 'evenodd', clipRule: 'evenodd', fill: '#FFFFFF' }, cx: '18', cy: '18.5', r: '18' }),
        M('defs', {
          children: M('filter', {
            id: 'b',
            x: '5.2',
            y: '7.2',
            width: '25.6',
            height: '53.6',
            filterUnits: 'userSpaceOnUse',
            children: M('feColorMatrix', { values: '1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 1 0' }),
          }),
        }),
        M('mask', {
          id: 'a',
          x: '5.2',
          y: '7.2',
          width: '25.6',
          height: '53.6',
          maskUnits: 'userSpaceOnUse',
          children: M('g', {
            style: { filter: 'url("#b")' },
            children: M('circle', { style: { fillRule: 'evenodd', clipRule: 'evenodd', fill: '#FFFFFF' }, cx: '18', cy: '18.5', r: '18' }),
          }),
        }),
        M('g', {
          style: { filter: 'url("#a")' },
          children: We('g', {
            transform: 'translate(5.04 6.88)',
            children: [
              M('path', {
                style: { fillRule: 'evenodd', clipRule: 'evenodd', fill: '#BBBBBB' },
                d: 'm22.6 18.1c-1.1-1.4-2.3-2.2-3.5-2.6s-1.8-0.6-6.3-0.6-6.1 0.7-6.1 0.7 0 0 0 0c-1.2 0.4-2.4 1.2-3.4 2.6-2.3 2.8-3.2 12.3-3.2 14.8 0 3.2 0.4 12.3 0.6 15.4 0 0-0.4 5.5 4 5.5l-0.3-6.3-0.4-3.5 0.2-0.9c0.9 0.4 3.6 1.2 8.6 1.2 5.3 0 8-0.9 8.8-1.3l0.2 1-0.2 3.6-0.3 6.3c3 0.1 3.7-3 3.8-4.4s0.6-12.6 0.6-16.5c0.1-2.6-0.8-12.1-3.1-15z',
              }),
              M('path', {
                style: { opacity: 0.1, fillRule: 'evenodd', clipRule: 'evenodd' },
                d: 'm22.5 26c-0.1-2.1-1.5-2.8-4.8-2.8l2.2 9.6s1.8-1.7 3-1.8c0 0-0.4-4.6-0.4-5z',
              }),
              M('path', {
                style: { fillRule: 'evenodd', clipRule: 'evenodd', fill: '#BBBBBB' },
                d: 'm12.7 13.2c-3.5 0-6.4-2.9-6.4-6.4s2.9-6.4 6.4-6.4 6.4 2.9 6.4 6.4-2.8 6.4-6.4 6.4z',
              }),
              M('path', {
                style: { opacity: 0.08, fillRule: 'evenodd', clipRule: 'evenodd', fill: '#231F20' },
                d: 'm9.4 6.8c0-3 2.1-5.5 4.9-6.3-0.5-0.1-1-0.2-1.6-0.2-3.5 0-6.4 2.9-6.4 6.4s2.9 6.4 6.4 6.4c0.6 0 1.1-0.1 1.6-0.2-2.8-0.6-4.9-3.1-4.9-6.1z',
              }),
              M('path', {
                style: { opacity: 0.1, fillRule: 'evenodd', clipRule: 'evenodd' },
                d: 'm8.3 22.4c-2 0.4-2.9 1.4-3.1 3.5l-0.6 18.6s1.7 0.7 3.6 0.9l0.1-23z',
              }),
            ],
          }),
        }),
      ],
    }),
  bc = ({ isKebab: e = !1, title: t, dropDownItems: n, ...r }) => {
    const [a, i] = ze(!1);
    return M(bs, {
      ...r,
      popperProps: { position: 'right' },
      toggle: o =>
        M(Rr, {
          'data-testid': `${r['data-testid']}-toggle`,
          ref: o,
          onClick: () => i(!a),
          isExpanded: a,
          variant: e ? 'plain' : 'default',
          children: e ? M(db, {}) : t,
        }),
      isOpen: a,
      children: M(cu, { children: n }),
    });
  };
function c1(e, t) {
  if (!e) return t('unknownUser');
  const n = e.given_name,
    r = e.family_name,
    a = e.preferred_username;
  return n && r ? t('fullName', { givenName: n, familyName: r }) : n || r || a || t('unknownUser');
}
const d1 = ({
    keycloak: e,
    brand: { href: t, ...n },
    avatar: r,
    features: { hasLogout: a = !0, hasManageAccount: i = !0, hasUsername: o = !0 } = {},
    kebabDropdownItems: s,
    dropdownItems: l = [],
    toolbarItems: u,
    ...d
  }) => {
    const { t: p } = Wn(),
      f = [];
    i && f.push(M(fi, { onClick: () => e.accountManagement(), children: p('manageAccount') }, 'manageAccount')),
      a && f.push(M(fi, { onClick: () => e.logout(), children: p('signOut') }, 'signOut'));
    const h = e.idTokenParsed?.picture;
    return M(Wu, {
      ...d,
      logo: M(Fd, { ...n }),
      logoProps: { href: t },
      headerTools: We(Gu, {
        children: [
          We(qu, {
            children: [
              M(Ga, {
                visibility: { md: 'hidden' },
                children: M(bc, { 'data-testid': 'options-kebab', isKebab: !0, dropDownItems: [...(s || l), f] }),
              }),
              M(Ga, { children: u }),
              M(Ga, {
                visibility: { default: 'hidden', md: 'visible' },
                children: M(bc, { 'data-testid': 'options', dropDownItems: [...l, f], title: o ? c1(e.idTokenParsed, p) : void 0 }),
              }),
            ],
          }),
          h || r?.src ? M(Ad, { src: h, alt: p('avatar'), ...r }) : M(l1, { ...r }),
        ],
      }),
    });
  },
  Gt = N0(),
  go = '/';
function js(...e) {
  return e
    .map((n, r) => {
      const a = r === 0,
        i = r === e.length - 1;
      return !a && n.startsWith(go) && (n = n.slice(1)), !i && n.endsWith(go) && (n = n.slice(0, -1)), n;
    }, [])
    .join(go);
}
const u1 = 'en',
  f1 = {
    type: 'languageDetector',
    detect() {
      return Gt.locale;
    },
  },
  Ui = sm({
    fallbackLng: u1,
    interpolation: { escapeValue: !1 },
    backend: {
      loadPath: js(Gt.serverBaseUrl, `resources/${Gt.realm}/account/{{lng}}`),
      parse: e => {
        const t = JSON.parse(e),
          n = {};
        return t.forEach(r => (n[r.key] = r.value)), n;
      },
    },
  });
Ui.use(Qc);
Ui.use(f1);
Ui.use(Am);
const p1 = (function () {
    const t = typeof document < 'u' && document.createElement('link').relList;
    return t && t.supports && t.supports('modulepreload') ? 'modulepreload' : 'preload';
  })(),
  m1 = function (e, t) {
    return new URL(e, t).href;
  },
  yc = {},
  un = function (t, n, r) {
    let a = Promise.resolve();
    if (n && n.length > 0) {
      const i = document.getElementsByTagName('link'),
        o = document.querySelector('meta[property=csp-nonce]'),
        s = o?.nonce || o?.getAttribute('nonce');
      a = Promise.all(
        n.map(l => {
          if (((l = m1(l, r)), l in yc)) return;
          yc[l] = !0;
          const u = l.endsWith('.css'),
            d = u ? '[rel="stylesheet"]' : '';
          if (!!r)
            for (let h = i.length - 1; h >= 0; h--) {
              const b = i[h];
              if (b.href === l && (!u || b.rel === 'stylesheet')) return;
            }
          else if (document.querySelector(`link[href="${l}"]${d}`)) return;
          const f = document.createElement('link');
          if (
            ((f.rel = u ? 'stylesheet' : p1),
            u || ((f.as = 'script'), (f.crossOrigin = '')),
            (f.href = l),
            s && f.setAttribute('nonce', s),
            document.head.appendChild(f),
            u)
          )
            return new Promise((h, b) => {
              f.addEventListener('load', h), f.addEventListener('error', () => b(new Error(`Unable to preload CSS for ${l}`)));
            });
        }),
      );
    }
    return a
      .then(() => t())
      .catch(i => {
        const o = new Event('vite:preloadError', { cancelable: !0 });
        if (((o.payload = i), window.dispatchEvent(o), !o.defaultPrevented)) throw i;
      });
  },
  h1 = e => {
    const { t } = Wn(),
      n = zc() ?? e.error,
      r = g1(n);
    function a() {
      location.href = location.origin + location.pathname;
    }
    return M(_a, {
      children: M(sn, {
        variant: ci.small,
        title: t('somethingWentWrong'),
        titleIconVariant: 'danger',
        showClose: !1,
        isOpen: !0,
        actions: [M(Ke, { variant: 'primary', onClick: a, children: t('tryAgain') }, 'tryAgain')],
        children: We(Ss, {
          children: [M($n, { children: t('somethingWentWrongDescription') }), r && M($n, { component: wr.small, children: r })],
        }),
      }),
    });
  };
function g1(e) {
  return typeof e == 'string' ? e : Ei(e) ? e.statusText : e instanceof Error ? e.message : null;
}
const v1 = '_brand_1gmge_1',
  b1 = { brand: v1 },
  y1 = () => {
    const { t: e } = Wn();
    return Gt.referrerUrl
      ? M(Ke, {
          'data-testid': 'referrer-link',
          component: 'a',
          href: Gt.referrerUrl.replace('_hash_', '#'),
          variant: 'link',
          icon: M(fb, {}),
          iconPosition: 'right',
          isInline: !0,
          children: e('backTo', { app: kn(e, Gt.referrerName, Gt.referrerUrl) }),
        })
      : null;
  },
  x1 = () => {
    const { environment: e, keycloak: t } = Fs(),
      { t: n } = Wn(),
      r = e.logo || 'logo.svg',
      a = e.logoUrl ? e.logoUrl : '/',
      i = Bc(a),
      o = a.startsWith('/') ? i : a;
    return M(d1, {
      'data-testid': 'page-header',
      keycloak: t,
      features: { hasManageAccount: !1 },
      showNavToggle: !0,
      brand: { href: o, src: js(e.resourceUrl, r), alt: n('logo'), className: b1.brand },
      toolbarItems: [M(y1, {}, 'link')],
    });
  };
async function w1(e) {
  return await (await fetch(js(e.context.environment.resourceUrl, '/content.json'), e)).json();
}
function C1(e, t, n = []) {
  Tt(() => {
    const r = new AbortController(),
      { signal: a } = r;
    async function i() {
      try {
        t(await e(a));
      } catch (o) {
        if (o instanceof Error && o.name === 'AbortError') return;
        throw o;
      }
    }
    return i(), () => r.abort();
  }, n);
}
const O1 = () => {
  const [e, t] = ze(),
    n = Fs();
  return (
    C1(r => w1({ signal: r, context: n }), t),
    M(mu, {
      children: M(gu, {
        children: M(yr, {
          children: M(Ai, {
            children: M(_c, {
              fallback: M(Er, {}),
              children: e?.filter(r => (r.isVisible ? n.environment.features[r.isVisible] : !0)).map(r => M(nf, { menuItem: r }, r.label)),
            }),
          }),
        }),
      }),
    })
  );
};
function nf({ menuItem: e }) {
  const { t } = Wn(),
    {
      environment: { features: n },
    } = Fs(),
    { pathname: r } = va(),
    a = Pt(() => rf(r, e), [r, e]);
  return 'path' in e
    ? M(_1, { to: e.path, isActive: a, children: t(e.label) })
    : M(xr, {
        'data-testid': e.label,
        title: t(e.label),
        isActive: a,
        isExpanded: a,
        children: e.children.filter(i => (i.isVisible ? n[i.isVisible] : !0)).map(i => M(nf, { menuItem: i }, i.label)),
      });
}
function rf(e, t) {
  return 'path' in t ? !!Ic(t.path, e) : t.children.some(n => rf(e, n));
}
const _1 = ({ to: e, isActive: t, children: n }) => {
    const r = `${new URL(Gt.baseUrl).pathname}${e}`,
      a = Bc(r),
      i = Dp(r);
    return M(Es, { 'data-testid': e, to: a, isActive: t, onClick: o => i(o), children: n });
  },
  E1 = () =>
    M(R0, {
      environment: Gt,
      children: M(_a, {
        header: M(x1, {}),
        sidebar: M(O1, {}),
        isManagedSidebar: !0,
        children: M(_c, { fallback: M(Er, {}), children: M(xp, {}) }),
      }),
    }),
  S1 = ln(() => un(() => import('./DeviceActivity-CAV6I3UZ.js'), __vite__mapDeps([0, 1, 2, 3]), import.meta.url)),
  k1 = ln(() => un(() => import('./LinkedAccounts-CxdcU_Ih.js'), __vite__mapDeps([1, 0, 3, 4]), import.meta.url)),
  L1 = ln(() => un(() => import('./SigningIn-DZEKSJmC.js'), __vite__mapDeps([1, 0]), import.meta.url)),
  I1 = ln(() => un(() => import('./Applications-FBlLXROl.js'), __vite__mapDeps([1, 2]), import.meta.url)),
  R1 = ln(() => un(() => import('./Groups-bMkmJYw8.js'), __vite__mapDeps([1]), import.meta.url)),
  N1 = ln(() => un(() => import('./PersonalInfo-DDTHd0d6.js'), __vite__mapDeps([5]), import.meta.url)),
  T1 = ln(() => un(() => import('./Resources-DBqWj7W5.js'), __vite__mapDeps([6]), import.meta.url)),
  P1 = ln(() => un(() => import('./ContentComponent-g4zfYkBw.js'), [], import.meta.url)),
  A1 = ln(() => un(() => import('./Oid4Vci-CbqPV2zq.js'), __vite__mapDeps([7]), import.meta.url)),
  F1 = { path: 'account-security/device-activity', element: M(S1, {}) },
  M1 = { path: 'account-security/linked-accounts', element: M(k1, {}) },
  D1 = { path: 'account-security/signing-in', element: M(L1, {}) },
  j1 = { path: 'applications', element: M(I1, {}) },
  B1 = { path: 'groups', element: M(R1, {}) },
  U1 = { path: 'resources', element: M(T1, {}) },
  V1 = { path: 'content/:componentId', element: M(P1, {}) },
  xc = { index: !0, element: M(N1, {}) },
  H1 = { path: 'oid4vci', element: M(A1, {}) },
  $1 = {
    path: decodeURIComponent(new URL(Gt.baseUrl).pathname),
    element: M(E1, {}),
    errorElement: M(h1, {}),
    children: [xc, F1, M1, D1, j1, B1, xc, U1, V1, H1],
  },
  z1 = [$1];
await Ui.init();
const W1 = document.getElementById('app'),
  G1 = Sc(W1),
  q1 = Sp(z1);
G1.render(M(lf, { children: M(Fp, { router: q1 }) }));
export {
  Hr as $,
  qn as A,
  Ke as B,
  hv as C,
  bs as D,
  db as E,
  c2 as F,
  yu as G,
  s2 as H,
  pi as I,
  ys as J,
  ti as K,
  Ir as L,
  Rr as M,
  Gn as N,
  Ti as O,
  vu as P,
  ui as Q,
  _r as R,
  Er as S,
  os as T,
  Ov as U,
  ws as V,
  Cs as W,
  Os as X,
  xd as Y,
  Rt as Z,
  ie as _,
  C1 as a,
  jd as a0,
  Q1 as a1,
  Ch as a2,
  da as a3,
  ds as a4,
  fs as a5,
  us as a6,
  In as a7,
  At as a8,
  Fa as a9,
  Sn as aA,
  Nu as aB,
  gr as aC,
  Nr as aD,
  Ju as aE,
  Eo as aF,
  Nm as aG,
  Om as aH,
  Pm as aI,
  Fm as aJ,
  yt as aK,
  js as aL,
  Y1 as aM,
  w1 as aN,
  lr as aO,
  Vn as aP,
  Oa as aQ,
  Ni as aR,
  Ss as aS,
  Jt as aa,
  bt as ab,
  ur as ac,
  nt as ad,
  Um as ae,
  Vm as af,
  nd as ag,
  Hm as ah,
  Tr as ai,
  qi as aj,
  cu as ak,
  rc as al,
  ru as am,
  mn as an,
  vv as ao,
  Z1 as ap,
  Bg as aq,
  dr as ar,
  Ec as as,
  t2 as at,
  sn as au,
  Hb as av,
  i2 as aw,
  M0 as ax,
  ci as ay,
  $n as az,
  Do as b,
  ke as c,
  R as d,
  Sr as e,
  li as f,
  kr as g,
  fi as h,
  _n as i,
  ft as j,
  fv as k,
  Fs as l,
  o2 as m,
  Ui as n,
  En as o,
  wh as p,
  is as q,
  r2 as r,
  a2 as s,
  Jo as t,
  Wn as u,
  n2 as v,
  d2 as w,
  fb as x,
  cs as y,
  l2 as z,
};
//# sourceMappingURL=main-RBOOfBld.js.map
