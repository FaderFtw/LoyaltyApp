import { createElement as T, isValidElement as H, Fragment as z, cloneElement as J, Children as M, useContext as G } from 'react';
import { as as U, aF as X, aG as Y, aH as D, aI as I, aJ as Z } from './main-RBOOfBld.js';
var q = {
  area: !0,
  base: !0,
  br: !0,
  col: !0,
  embed: !0,
  hr: !0,
  img: !0,
  input: !0,
  link: !0,
  meta: !0,
  param: !0,
  source: !0,
  track: !0,
  wbr: !0,
};
const Q = U(q);
var _ = /\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;
function B(e) {
  var t = { type: 'tag', name: '', voidElement: !1, attrs: {}, children: [] },
    n = e.match(/<\/?([^\s]+?)[/\s>]/);
  if (n && ((t.name = n[1]), (Q[n[1]] || e.charAt(e.length - 2) === '/') && (t.voidElement = !0), t.name.startsWith('!--'))) {
    var o = e.indexOf('-->');
    return { type: 'comment', comment: o !== -1 ? e.slice(4, o) : '' };
  }
  for (var f = new RegExp(_), s = null; (s = f.exec(e)) !== null; )
    if (s[0].trim())
      if (s[1]) {
        var l = s[1].trim(),
          p = [l, ''];
        l.indexOf('=') > -1 && (p = l.split('=')), (t.attrs[p[0]] = p[1]), f.lastIndex--;
      } else s[2] && (t.attrs[s[2]] = s[3].trim().substring(1, s[3].length - 1));
  return t;
}
var R = /<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,
  ee = /^\s*$/,
  te = Object.create(null);
function L(e, t) {
  switch (t.type) {
    case 'text':
      return e + t.content;
    case 'tag':
      return (
        (e +=
          '<' +
          t.name +
          (t.attrs
            ? (function (n) {
                var o = [];
                for (var f in n) o.push(f + '="' + n[f] + '"');
                return o.length ? ' ' + o.join(' ') : '';
              })(t.attrs)
            : '') +
          (t.voidElement ? '/>' : '>')),
        t.voidElement ? e : e + t.children.reduce(L, '') + '</' + t.name + '>'
      );
    case 'comment':
      return e + '<!--' + t.comment + '-->';
  }
}
var ne = {
  parse: function (e, t) {
    t || (t = {}), t.components || (t.components = te);
    var n,
      o = [],
      f = [],
      s = -1,
      l = !1;
    if (e.indexOf('<') !== 0) {
      var p = e.indexOf('<');
      o.push({ type: 'text', content: p === -1 ? e : e.substring(0, p) });
    }
    return (
      e.replace(R, function (m, u) {
        if (l) {
          if (m !== '</' + n.name + '>') return;
          l = !1;
        }
        var v,
          j = m.charAt(1) !== '/',
          k = m.startsWith('<!--'),
          b = u + m.length,
          x = e.charAt(b);
        if (k) {
          var y = B(m);
          return s < 0 ? (o.push(y), o) : ((v = f[s]).children.push(y), o);
        }
        if (
          (j &&
            (s++,
            (n = B(m)).type === 'tag' && t.components[n.name] && ((n.type = 'component'), (l = !0)),
            n.voidElement || l || !x || x === '<' || n.children.push({ type: 'text', content: e.slice(b, e.indexOf('<', b)) }),
            s === 0 && o.push(n),
            (v = f[s - 1]) && v.children.push(n),
            (f[s] = n)),
          (!j || n.voidElement) &&
            (s > -1 && (n.voidElement || n.name === m.slice(2, -1)) && (s--, (n = s === -1 ? o : f[s])), !l && x !== '<' && x))
        ) {
          v = s === -1 ? o : f[s].children;
          var c = e.indexOf('<', b),
            i = e.slice(b, c === -1 ? void 0 : c);
          ee.test(i) && (i = ' '), ((c > -1 && s + v.length >= 0) || i !== ' ') && v.push({ type: 'text', content: i });
        }
      }),
      o
    );
  },
  stringify: function (e) {
    return e.reduce(function (t, n) {
      return t + L('', n);
    }, '');
  },
};
function S(e, t) {
  if (!e) return !1;
  const n = e.props ? e.props.children : e.children;
  return t ? n.length > 0 : !!n;
}
function V(e) {
  if (!e) return [];
  const t = e.props ? e.props.children : e.children;
  return e.props && e.props.i18nIsDynamicList ? P(t) : t;
}
function se(e) {
  return Object.prototype.toString.call(e) !== '[object Array]' ? !1 : e.every(t => H(t));
}
function P(e) {
  return Array.isArray(e) ? e : [e];
}
function re(e, t) {
  const n = { ...t };
  return (n.props = Object.assign(e.props, t.props)), n;
}
function W(e, t) {
  if (!e) return '';
  let n = '';
  const o = P(e),
    f = t.transSupportBasicHtmlNodes && t.transKeepBasicHtmlNodesFor ? t.transKeepBasicHtmlNodesFor : [];
  return (
    o.forEach((s, l) => {
      if (typeof s == 'string') n += `${s}`;
      else if (H(s)) {
        const p = Object.keys(s.props).length,
          m = f.indexOf(s.type) > -1,
          u = s.props.children;
        if (!u && m && p === 0) n += `<${s.type}/>`;
        else if (!u && (!m || p !== 0)) n += `<${l}></${l}>`;
        else if (s.props.i18nIsDynamicList) n += `<${l}></${l}>`;
        else if (m && p === 1 && typeof u == 'string') n += `<${s.type}>${u}</${s.type}>`;
        else {
          const v = W(u, t);
          n += `<${l}>${v}</${l}>`;
        }
      } else if (s === null) D('Trans: the passed in value is invalid - seems you passed in a null child.');
      else if (typeof s == 'object') {
        const { format: p, ...m } = s,
          u = Object.keys(m);
        if (u.length === 1) {
          const v = p ? `${u[0]}, ${p}` : u[0];
          n += `{{${v}}}`;
        } else
          D(
            'react-i18next: the passed in object contained more than one variable - the object should look like {{ value, format }} where format is optional.',
            s,
          );
      } else
        D(
          'Trans: the passed in value is invalid - seems you passed in a variable like {number} - please pass in variables for interpolation as full objects like {{number}}.',
          s,
        );
    }),
    n
  );
}
function ae(e, t, n, o, f, s) {
  if (t === '') return [];
  const l = o.transKeepBasicHtmlNodesFor || [],
    p = t && new RegExp(l.map(c => `<${c}`).join('|')).test(t);
  if (!e && !p && !s) return [t];
  const m = {};
  function u(c) {
    P(c).forEach(a => {
      typeof a != 'string' && (S(a) ? u(V(a)) : typeof a == 'object' && !H(a) && Object.assign(m, a));
    });
  }
  u(e);
  const v = ne.parse(`<0>${t}</0>`),
    j = { ...m, ...f };
  function k(c, i, a) {
    const g = V(c),
      O = x(g, i.children, a);
    return (se(g) && O.length === 0) || (c.props && c.props.i18nIsDynamicList) ? g : O;
  }
  function b(c, i, a, g, O) {
    c.dummy
      ? ((c.children = i), a.push(J(c, { key: g }, O ? void 0 : i)))
      : a.push(
          ...M.map([c], h => {
            const r = { ...h.props };
            return delete r.i18nIsDynamicList, T(h.type, { ...r, key: g, ref: h.ref }, O ? null : i);
          }),
        );
  }
  function x(c, i, a) {
    const g = P(c);
    return P(i).reduce((h, r, C) => {
      const N =
        r.children && r.children[0] && r.children[0].content && n.services.interpolator.interpolate(r.children[0].content, j, n.language);
      if (r.type === 'tag') {
        let E = g[parseInt(r.name, 10)];
        a.length === 1 && !E && (E = a[0][r.name]), E || (E = {});
        const d = Object.keys(r.attrs).length !== 0 ? re({ props: r.attrs }, E) : E,
          F = H(d),
          A = F && S(r, !0) && !r.voidElement,
          w = p && typeof d == 'object' && d.dummy && !F,
          K = typeof e == 'object' && e !== null && Object.hasOwnProperty.call(e, r.name);
        if (typeof d == 'string') {
          const $ = n.services.interpolator.interpolate(d, j, n.language);
          h.push($);
        } else if (S(d) || A) {
          const $ = k(d, r, a);
          b(d, $, h, C);
        } else if (w) {
          const $ = x(g, r.children, a);
          b(d, $, h, C);
        } else if (Number.isNaN(parseFloat(r.name)))
          if (K) {
            const $ = k(d, r, a);
            b(d, $, h, C, r.voidElement);
          } else if (o.transSupportBasicHtmlNodes && l.indexOf(r.name) > -1)
            if (r.voidElement) h.push(T(r.name, { key: `${r.name}-${C}` }));
            else {
              const $ = x(g, r.children, a);
              h.push(T(r.name, { key: `${r.name}-${C}` }, $));
            }
          else if (r.voidElement) h.push(`<${r.name} />`);
          else {
            const $ = x(g, r.children, a);
            h.push(`<${r.name}>${$}</${r.name}>`);
          }
        else if (typeof d == 'object' && !F) {
          const $ = r.children[0] ? N : null;
          $ && h.push($);
        } else b(d, N, h, C, r.children.length !== 1 || !N);
      } else if (r.type === 'text') {
        const E = o.transWrapTextNodes,
          d = s
            ? o.unescape(n.services.interpolator.interpolate(r.content, j, n.language))
            : n.services.interpolator.interpolate(r.content, j, n.language);
        E ? h.push(T(E, { key: `${r.name}-${C}` }, d)) : h.push(d);
      }
      return h;
    }, []);
  }
  const y = x([{ dummy: !0, children: e || [] }], v, P(e || []));
  return V(y[0]);
}
function oe(e) {
  let {
    children: t,
    count: n,
    parent: o,
    i18nKey: f,
    context: s,
    tOptions: l = {},
    values: p,
    defaults: m,
    components: u,
    ns: v,
    i18n: j,
    t: k,
    shouldUnescape: b,
    ...x
  } = e;
  const y = j || I();
  if (!y) return X('You will need to pass in an i18next instance by using i18nextReactModule'), t;
  const c = k || y.t.bind(y) || (A => A),
    i = { ...Y(), ...(y.options && y.options.react) };
  let a = v || c.ns || (y.options && y.options.defaultNS);
  a = typeof a == 'string' ? [a] : a || ['translation'];
  const g = W(t, i),
    O = m || g || i.transEmptyNodeValue || f,
    { hashTransKey: h } = i,
    r = f || (h ? h(g || O) : g || O);
  y.options &&
    y.options.interpolation &&
    y.options.interpolation.defaultVariables &&
    (p =
      p && Object.keys(p).length > 0
        ? { ...p, ...y.options.interpolation.defaultVariables }
        : { ...y.options.interpolation.defaultVariables });
  const C = p || n !== void 0 || !t ? l.interpolation : { interpolation: { ...l.interpolation, prefix: '#$?', suffix: '?$#' } },
    N = { ...l, context: s || l.context, count: n, ...p, ...C, defaultValue: O, ns: a },
    E = r ? c(r, N) : O;
  u &&
    Object.keys(u).forEach(A => {
      const w = u[A];
      if (typeof w.type == 'function' || !w.props || !w.props.children || (E.indexOf(`${A}/>`) < 0 && E.indexOf(`${A} />`) < 0)) return;
      function K() {
        return T(z, null, w);
      }
      u[A] = T(K);
    });
  const d = ae(u || t, E, y, i, N, b),
    F = o !== void 0 ? o : i.defaultTransParent;
  return F ? T(F, x, d) : d;
}
function pe(e) {
  let {
    children: t,
    count: n,
    parent: o,
    i18nKey: f,
    context: s,
    tOptions: l = {},
    values: p,
    defaults: m,
    components: u,
    ns: v,
    i18n: j,
    t: k,
    shouldUnescape: b,
    ...x
  } = e;
  const { i18n: y, defaultNS: c } = G(Z) || {},
    i = j || y || I(),
    a = k || (i && i.t.bind(i));
  return oe({
    children: t,
    count: n,
    parent: o,
    i18nKey: f,
    context: s,
    tOptions: l,
    values: p,
    defaults: m,
    components: u,
    ns: v || (a && a.ns) || c || (i && i.options && i.options.defaultNS),
    i18n: i,
    t: k,
    shouldUnescape: b,
    ...x,
  });
}
export { pe as T };
//# sourceMappingURL=Trans-DIHQCYwZ.js.map
