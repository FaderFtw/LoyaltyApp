import { jsx as v, jsxs as W, Fragment as et } from 'react/jsx-runtime';
import * as a from 'react';
import ee, { useEffect as qn, Fragment as hi, useState as ve } from 'react';
import {
  c as ne,
  _ as $,
  d as y,
  i as re,
  K as Zn,
  B as H,
  J as ke,
  L as ze,
  N as Vt,
  j as ue,
  e as Pt,
  O as tt,
  Q as be,
  R as Ht,
  U as bi,
  I as Jn,
  V as vi,
  W as xi,
  X as Oi,
  Y as Qn,
  Z as _i,
  $ as yi,
  p as Ei,
  q as dn,
  h as at,
  a0 as Yn,
  a1 as Ci,
  A as it,
  M as st,
  a2 as ea,
  a3 as ta,
  a4 as na,
  a5 as aa,
  a6 as ia,
  a7 as Wt,
  a8 as Ze,
  g as Se,
  a9 as We,
  aa as sa,
  ab as Ce,
  ac as pn,
  t as wi,
  ad as fn,
  ae as Si,
  af as Ti,
  ag as Ii,
  ah as Li,
  ai as pt,
  aj as la,
  D as Nt,
  E as kt,
  ak as At,
  al as mn,
  am as Pi,
  an as Ni,
  ao as ra,
  o as ki,
  ap as Ai,
  aq as $i,
  ar as Ye,
  as as Ri,
  u as Be,
  l as ft,
  r as mt,
  v as oa,
  at as ca,
  au as Xt,
  av as da,
  aw as Mi,
  ax as pa,
  ay as Bi,
  az as ji,
  aA as zt,
  aB as Di,
  aC as un,
  aD as fa,
  aE as Fi,
  a as Gi,
  S as Vi,
  k as Hi,
  s as gn,
} from './main-RBOOfBld.js';
import { u as ma, f as ua, a as ga, b as Wi } from './api-DMOwmKI_.js';
import { j as Xi } from './methods-DAviXuS2.js';
import { F as Kt, A as zi } from './Form-Br_aXRv6.js';
import { T as Ki } from './Trans-DIHQCYwZ.js';
import { P as Ui } from './Page-d76ZI0ER.js';
import 'react-dom';
const qi = {
    name: 'AngleUpIcon',
    height: 512,
    width: 320,
    svgPath:
      'M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z',
    yOffset: 0,
    xOffset: 0,
  },
  Zi = ne(qi),
  Ji = {
    name: 'GripVerticalIcon',
    height: 512,
    width: 320,
    svgPath:
      'M96 32H32C14.33 32 0 46.33 0 64v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160H32c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zM288 32h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32zm0 160h-64c-17.67 0-32 14.33-32 32v64c0 17.67 14.33 32 32 32h64c17.67 0 32-14.33 32-32v-64c0-17.67-14.33-32-32-32z',
    yOffset: 0,
    xOffset: 0,
  },
  Qi = ne(Ji),
  Tt = {
    divider: 'pf-v5-c-divider',
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
      vertical: 'pf-m-vertical',
      insetNone: 'pf-m-inset-none',
      insetXs: 'pf-m-inset-xs',
      insetSm: 'pf-m-inset-sm',
      insetMd: 'pf-m-inset-md',
      insetLg: 'pf-m-inset-lg',
      insetXl: 'pf-m-inset-xl',
      inset_2xl: 'pf-m-inset-2xl',
      inset_3xl: 'pf-m-inset-3xl',
      horizontalOnSm: 'pf-m-horizontal-on-sm',
      verticalOnSm: 'pf-m-vertical-on-sm',
      insetNoneOnSm: 'pf-m-inset-none-on-sm',
      insetXsOnSm: 'pf-m-inset-xs-on-sm',
      insetSmOnSm: 'pf-m-inset-sm-on-sm',
      insetMdOnSm: 'pf-m-inset-md-on-sm',
      insetLgOnSm: 'pf-m-inset-lg-on-sm',
      insetXlOnSm: 'pf-m-inset-xl-on-sm',
      inset_2xlOnSm: 'pf-m-inset-2xl-on-sm',
      inset_3xlOnSm: 'pf-m-inset-3xl-on-sm',
      horizontalOnMd: 'pf-m-horizontal-on-md',
      verticalOnMd: 'pf-m-vertical-on-md',
      insetNoneOnMd: 'pf-m-inset-none-on-md',
      insetXsOnMd: 'pf-m-inset-xs-on-md',
      insetSmOnMd: 'pf-m-inset-sm-on-md',
      insetMdOnMd: 'pf-m-inset-md-on-md',
      insetLgOnMd: 'pf-m-inset-lg-on-md',
      insetXlOnMd: 'pf-m-inset-xl-on-md',
      inset_2xlOnMd: 'pf-m-inset-2xl-on-md',
      inset_3xlOnMd: 'pf-m-inset-3xl-on-md',
      horizontalOnLg: 'pf-m-horizontal-on-lg',
      verticalOnLg: 'pf-m-vertical-on-lg',
      insetNoneOnLg: 'pf-m-inset-none-on-lg',
      insetXsOnLg: 'pf-m-inset-xs-on-lg',
      insetSmOnLg: 'pf-m-inset-sm-on-lg',
      insetMdOnLg: 'pf-m-inset-md-on-lg',
      insetLgOnLg: 'pf-m-inset-lg-on-lg',
      insetXlOnLg: 'pf-m-inset-xl-on-lg',
      inset_2xlOnLg: 'pf-m-inset-2xl-on-lg',
      inset_3xlOnLg: 'pf-m-inset-3xl-on-lg',
      horizontalOnXl: 'pf-m-horizontal-on-xl',
      verticalOnXl: 'pf-m-vertical-on-xl',
      insetNoneOnXl: 'pf-m-inset-none-on-xl',
      insetXsOnXl: 'pf-m-inset-xs-on-xl',
      insetSmOnXl: 'pf-m-inset-sm-on-xl',
      insetMdOnXl: 'pf-m-inset-md-on-xl',
      insetLgOnXl: 'pf-m-inset-lg-on-xl',
      insetXlOnXl: 'pf-m-inset-xl-on-xl',
      inset_2xlOnXl: 'pf-m-inset-2xl-on-xl',
      inset_3xlOnXl: 'pf-m-inset-3xl-on-xl',
      horizontalOn_2xl: 'pf-m-horizontal-on-2xl',
      verticalOn_2xl: 'pf-m-vertical-on-2xl',
      insetNoneOn_2xl: 'pf-m-inset-none-on-2xl',
      insetXsOn_2xl: 'pf-m-inset-xs-on-2xl',
      insetSmOn_2xl: 'pf-m-inset-sm-on-2xl',
      insetMdOn_2xl: 'pf-m-inset-md-on-2xl',
      insetLgOn_2xl: 'pf-m-inset-lg-on-2xl',
      insetXlOn_2xl: 'pf-m-inset-xl-on-2xl',
      inset_2xlOn_2xl: 'pf-m-inset-2xl-on-2xl',
      inset_3xlOn_2xl: 'pf-m-inset-3xl-on-2xl',
    },
  };
var $t;
(function (e) {
  (e.hr = 'hr'), (e.li = 'li'), (e.div = 'div');
})($t || ($t = {}));
const Ut = e => {
  var { className: t, component: n = $t.hr, inset: i, orientation: s } = e,
    l = $(e, ['className', 'component', 'inset', 'orientation']);
  const c = n;
  return a.createElement(c, Object.assign({ className: y(Tt.divider, re(i, Tt), re(s, Tt), t) }, n !== 'hr' && { role: 'separator' }, l));
};
Ut.displayName = 'Divider';
const Yi = {
    name: 'AngleDoubleLeftIcon',
    height: 512,
    width: 448,
    svgPath:
      'M223.7 239l136-136c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L319.9 256l96.4 96.4c9.4 9.4 9.4 24.6 0 33.9L393.7 409c-9.4 9.4-24.6 9.4-33.9 0l-136-136c-9.5-9.4-9.5-24.6-.1-34zm-192 34l136 136c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9L127.9 256l96.4-96.4c9.4-9.4 9.4-24.6 0-33.9L201.7 103c-9.4-9.4-24.6-9.4-33.9 0l-136 136c-9.5 9.4-9.5 24.6-.1 34z',
    yOffset: 0,
    xOffset: 0,
  },
  es = ne(Yi),
  ts = {
    name: 'AngleDoubleRightIcon',
    height: 512,
    width: 448,
    svgPath:
      'M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34zm192-34l-136-136c-9.4-9.4-24.6-9.4-33.9 0l-22.6 22.6c-9.4 9.4-9.4 24.6 0 33.9l96.4 96.4-96.4 96.4c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l136-136c9.4-9.2 9.4-24.4 0-33.8z',
    yOffset: 0,
    xOffset: 0,
  },
  ns = ne(ts),
  as = {
    name: 'AngleDownIcon',
    height: 512,
    width: 320,
    svgPath:
      'M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z',
    yOffset: 0,
    xOffset: 0,
  },
  qt = ne(as),
  is = {
    name: 'SearchIcon',
    height: 512,
    width: 512,
    svgPath:
      'M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z',
    yOffset: 0,
    xOffset: 0,
  },
  hn = ne(is),
  ss = {
    name: 'ArrowRightIcon',
    height: 512,
    width: 448,
    svgPath:
      'M190.5 66.9l22.2-22.2c9.4-9.4 24.6-9.4 33.9 0L441 239c9.4 9.4 9.4 24.6 0 33.9L246.6 467.3c-9.4 9.4-24.6 9.4-33.9 0l-22.2-22.2c-9.5-9.5-9.3-25 .4-34.3L311.4 296H24c-13.3 0-24-10.7-24-24v-32c0-13.3 10.7-24 24-24h287.4L190.9 101.2c-9.8-9.3-10-24.8-.4-34.3z',
    yOffset: 0,
    xOffset: 0,
  },
  ls = ne(ss),
  Ne = {
    modifiers: { bordered: 'pf-m-bordered', raised: 'pf-m-raised', scrollable: 'pf-m-scrollable' },
    panel: 'pf-v5-c-panel',
    panelFooter: 'pf-v5-c-panel__footer',
    panelHeader: 'pf-v5-c-panel__header',
    panelMain: 'pf-v5-c-panel__main',
    panelMainBody: 'pf-v5-c-panel__main-body',
    themeDark: 'pf-v5-theme-dark',
  },
  rs = e => {
    var { className: t, children: n, variant: i, isScrollable: s, innerRef: l } = e,
      c = $(e, ['className', 'children', 'variant', 'isScrollable', 'innerRef']);
    return a.createElement(
      'div',
      Object.assign(
        {
          className: y(
            Ne.panel,
            i === 'raised' && Ne.modifiers.raised,
            i === 'bordered' && Ne.modifiers.bordered,
            s && Ne.modifiers.scrollable,
            t,
          ),
          ref: l,
        },
        c,
      ),
      n,
    );
  },
  ha = a.forwardRef((e, t) => a.createElement(rs, Object.assign({ innerRef: t }, e)));
ha.displayName = 'Panel';
const os = { name: '--pf-v5-c-panel__main--MaxHeight', value: '18.75rem', var: 'var(--pf-v5-c-panel__main--MaxHeight)' },
  ba = e => {
    var { className: t, children: n, maxHeight: i } = e,
      s = $(e, ['className', 'children', 'maxHeight']);
    return a.createElement('div', Object.assign({ className: y(Ne.panelMain, t), style: { [os.name]: i } }, s), n);
  };
ba.displayName = 'PanelMain';
const va = e => {
  var { className: t, children: n } = e,
    i = $(e, ['className', 'children']);
  return a.createElement('div', Object.assign({ className: y(Ne.panelMainBody, t) }, i), n);
};
va.displayName = 'PanelMainBody';
const xa = ({
  className: e,
  parentRef: t,
  parentInputRef: n,
  value: i = '',
  attributes: s = [],
  formAdditionalItems: l,
  hasWordsAttrLabel: c = 'Has words',
  advancedSearchDelimiter: r,
  getAttrValueMap: d,
  onChange: o,
  onSearch: f,
  onClear: p,
  resetButtonLabel: u = 'Reset',
  submitSearchButtonLabel: b = 'Search',
  isSearchMenuOpen: g,
  onToggleAdvancedMenu: h,
}) => {
  const _ = a.useRef(null),
    [E, O] = a.useState(!1);
  a.useEffect(() => {
    s.length > 0 &&
      !r &&
      console.error(
        'AdvancedSearchMenu: An advancedSearchDelimiter prop is required when advanced search attributes are provided using the attributes prop',
      );
  }),
    a.useEffect(() => {
      g && _ && _.current ? (_.current.focus(), O(!0)) : !g && E && n && n.current && n.current.focus();
    }, [g]),
    a.useEffect(
      () => (
        document.addEventListener('mousedown', m),
        document.addEventListener('touchstart', m),
        document.addEventListener('keydown', C),
        function () {
          document.removeEventListener('mousedown', m),
            document.removeEventListener('touchstart', m),
            document.removeEventListener('keydown', C);
        }
      ),
    );
  const m = x => {
      const S = t && t.current.contains(x.target);
      g && !S && h(x);
    },
    C = x => {
      g && x.key === Zn.Escape && t && t.current.contains(x.target) && (h(x), n && n.current.focus());
    },
    w = x => {
      x.preventDefault(), f && f(x, i, d()), g && h(x);
    },
    P = (x, S, I) => {
      const L = d();
      L[x] = S;
      let B = '';
      Object.entries(L).forEach(([D, F]) => {
        if (F.trim() !== '') {
          const R = F.includes(' ') ? `'${F.replace(/(^'|'$)/g, '')}'` : F;
          D !== 'haswords' ? (B = `${B} ${D}${r}${R}`) : (B = `${B} ${R}`);
        }
      }),
        o && o(I, B.replace(/^\s+/g, ''));
    },
    k = x => {
      const S = d();
      return S.hasOwnProperty(x) ? S[x] : '';
    },
    N = () => {
      const x = [];
      return (
        s.forEach((S, I) => {
          const L = typeof S == 'string' ? S : S.display,
            B = typeof S == 'string' ? S : S.attr;
          I === 0
            ? x.push(
                a.createElement(
                  ke,
                  { label: L, fieldId: `${B}_${I}`, key: `${S}_${I}` },
                  a.createElement(ze, { ref: _, type: 'text', id: `${B}_${I}`, value: k(B), onChange: (D, F) => P(B, F, D) }),
                ),
              )
            : x.push(
                a.createElement(
                  ke,
                  { label: L, fieldId: `${B}_${I}`, key: `${S}_${I}` },
                  a.createElement(ze, { type: 'text', id: `${B}_${I}`, value: k(B), onChange: (D, F) => P(B, F, D) }),
                ),
              );
        }),
        x.push(
          a.createElement(Vt, { key: 'hasWords' }, S =>
            a.createElement(
              ke,
              { label: c, fieldId: S },
              a.createElement(ze, { type: 'text', id: S, value: k('haswords'), onChange: (I, L) => P('haswords', L, I) }),
            ),
          ),
        ),
        x
      );
    };
  return g
    ? a.createElement(
        ha,
        { variant: 'raised', className: y(e) },
        a.createElement(
          ba,
          null,
          a.createElement(
            va,
            null,
            a.createElement(
              Kt,
              null,
              N(),
              l || null,
              a.createElement(
                zi,
                null,
                a.createElement(H, { variant: 'primary', type: 'submit', onClick: w, isDisabled: !i }, b),
                !!p && a.createElement(H, { variant: 'link', type: 'reset', onClick: p }, u),
              ),
            ),
          ),
        ),
      )
    : null;
};
xa.displayName = 'SearchInput';
const Oa = e => {
  var {
      className: t,
      searchInputId: n,
      value: i = '',
      attributes: s = [],
      formAdditionalItems: l,
      hasWordsAttrLabel: c = 'Has words',
      advancedSearchDelimiter: r,
      placeholder: d,
      hint: o,
      onChange: f,
      onSearch: p,
      onClear: u,
      onToggleAdvancedSearch: b,
      isAdvancedSearchOpen: g,
      resultsCount: h,
      onNextClick: _,
      onPreviousClick: E,
      innerRef: O,
      expandableInput: m,
      'aria-label': C = 'Search input',
      resetButtonLabel: w = 'Reset',
      openMenuButtonAriaLabel: P = 'Open advanced search',
      previousNavigationButtonAriaLabel: k = 'Previous',
      isPreviousNavigationButtonDisabled: N = !1,
      isNextNavigationButtonDisabled: x = !1,
      nextNavigationButtonAriaLabel: S = 'Next',
      submitSearchButtonLabel: I = 'Search',
      isDisabled: L = !1,
      appendTo: B,
      zIndex: D = 9999,
      name: F,
      areUtilitiesDisplayed: R,
    } = e,
    X = $(e, [
      'className',
      'searchInputId',
      'value',
      'attributes',
      'formAdditionalItems',
      'hasWordsAttrLabel',
      'advancedSearchDelimiter',
      'placeholder',
      'hint',
      'onChange',
      'onSearch',
      'onClear',
      'onToggleAdvancedSearch',
      'isAdvancedSearchOpen',
      'resultsCount',
      'onNextClick',
      'onPreviousClick',
      'innerRef',
      'expandableInput',
      'aria-label',
      'resetButtonLabel',
      'openMenuButtonAriaLabel',
      'previousNavigationButtonAriaLabel',
      'isPreviousNavigationButtonDisabled',
      'isNextNavigationButtonDisabled',
      'nextNavigationButtonAriaLabel',
      'submitSearchButtonLabel',
      'isDisabled',
      'appendTo',
      'zIndex',
      'name',
      'areUtilitiesDisplayed',
    ]);
  const [M, z] = a.useState(!1),
    [V, J] = a.useState(i),
    Y = a.useRef(null),
    Z = a.useRef(null),
    Q = O || Z,
    ae = a.useRef(null),
    Oe = a.useRef(null),
    ge = a.useRef(null),
    [ie, _e] = a.useState(!1),
    { isExpanded: ce, onToggleExpand: me, toggleAriaLabel: ye } = m || {};
  a.useEffect(() => {
    var G, U;
    if (ie) ce ? (G = Q?.current) === null || G === void 0 || G.focus() : (U = ae?.current) === null || U === void 0 || U.focus();
    else return;
    _e(!1);
  }, [ie, ce, Q, ae]),
    a.useEffect(() => {
      J(i);
    }, [i]),
    a.useEffect(() => {
      s.length > 0 &&
        !r &&
        console.error('An advancedSearchDelimiter prop is required when advanced search attributes are provided using the attributes prop');
    }),
    a.useEffect(() => {
      z(g);
    }, [g]);
  const Le = (G, U) => {
      f && f(G, U), J(U);
    },
    se = G => {
      const U = !M;
      z(U), b && b(G, U);
    },
    he = G => {
      G.preventDefault(), p && p(G, i, de()), z(!1);
    },
    Qe = G => {
      let U;
      return G.match(/\\?.|^$/g).reduce(
        (pe, oe) => (
          oe === "'" || oe === '"'
            ? (U || (U = oe), oe === U && (pe.quote = !pe.quote))
            : !pe.quote && oe === ' '
              ? pe.a.push('')
              : (pe.a[pe.a.length - 1] += oe.replace(/\\(.)/, '$1')),
          pe
        ),
        { a: [''] },
      ).a;
    },
    de = () => {
      const G = {};
      return (
        Qe(V).map(pe => {
          const oe = pe.split(r);
          oe.length === 2
            ? (G[oe[0]] = oe[1].replace(/(^'|'$)/g, ''))
            : oe.length === 1 && (G.haswords = G.hasOwnProperty('haswords') ? `${G.haswords} ${oe[0]}` : oe[0]);
        }),
        G
      );
    },
    yt = G => {
      G.key === 'Enter' && he(G);
    },
    K = G => {
      u && u(G), Q && Q.current && Q.current.focus();
    },
    Pe = G => {
      J(''), me(G, ce), _e(!0);
    },
    mi = i && (h || (!!_ && !!E) || (!!u && !m)),
    Et = (G = {}) => {
      var U = $(G, []);
      return a.createElement(
        vi,
        Object.assign({ isDisabled: L }, U),
        a.createElement(xi, {
          hint: o,
          icon: a.createElement(hn, null),
          innerRef: Q,
          value: V,
          placeholder: d,
          'aria-label': C,
          onKeyDown: yt,
          onChange: Le,
          name: F,
          inputId: n,
        }),
        (mi || R) &&
          a.createElement(
            Oi,
            null,
            h && a.createElement(Qn, { isRead: !0 }, h),
            !!_ &&
              !!E &&
              a.createElement(
                'div',
                { className: _i.textInputGroupGroup },
                a.createElement(H, { variant: ue.plain, 'aria-label': k, isDisabled: L || N, onClick: E }, a.createElement(Zi, null)),
                a.createElement(H, { variant: ue.plain, 'aria-label': S, isDisabled: L || x, onClick: _ }, a.createElement(qt, null)),
              ),
            !!u && !m && a.createElement(H, { variant: ue.plain, isDisabled: L, 'aria-label': w, onClick: K }, a.createElement(Pt, null)),
          ),
      );
    },
    Ct = a.createElement(H, {
      variant: ue.plain,
      'aria-label': ye,
      'aria-expanded': ce,
      icon: ce ? a.createElement(Pt, null) : a.createElement(hn, null),
      onClick: Pe,
      ref: ae,
    }),
    ui = (G = {}) => {
      var U = $(G, []);
      return a.createElement(
        tt,
        Object.assign({}, U),
        a.createElement(be, { isFill: !0 }, Et(), ' '),
        a.createElement(be, { isPlain: !0 }, Ct),
      );
    },
    gi = (G = {}) => {
      var U = $(G, []);
      return m ? ui(Object.assign({}, U)) : Et(Object.assign({}, U));
    },
    wt = (G = {}) => {
      var U = $(G, []);
      return a.createElement(
        tt,
        Object.assign({ ref: Oe }, U),
        a.createElement(be, { isFill: !0 }, Et()),
        (s.length > 0 || b) &&
          a.createElement(
            be,
            { isPlain: !0 },
            a.createElement(
              H,
              { className: M && 'pf-m-expanded', variant: ue.control, 'aria-label': P, onClick: se, isDisabled: L, 'aria-expanded': M },
              a.createElement(bi, null),
            ),
          ),
        !!p &&
          a.createElement(
            be,
            null,
            a.createElement(
              H,
              { type: 'submit', variant: ue.control, 'aria-label': I, onClick: he, isDisabled: L },
              a.createElement(Jn, { shouldMirrorRTL: !0 }, a.createElement(ls, null)),
            ),
          ),
        m && a.createElement(be, null, Ct),
      );
    },
    St = Object.assign(Object.assign({}, X), { className: t && y(t), innerRef: Y });
  if (m && !ce) return a.createElement(tt, Object.assign({}, St), a.createElement(be, null, Ct));
  if (p || s.length > 0 || b) {
    if (s.length > 0) {
      const G = a.createElement(
          'div',
          { ref: ge },
          a.createElement(xa, {
            value: i,
            parentRef: Y,
            parentInputRef: Q,
            onSearch: p,
            onClear: u,
            onChange: f,
            onToggleAdvancedMenu: se,
            resetButtonLabel: w,
            submitSearchButtonLabel: I,
            attributes: s,
            formAdditionalItems: l,
            hasWordsAttrLabel: c,
            advancedSearchDelimiter: r,
            getAttrValueMap: de,
            isSearchMenuOpen: M,
          }),
        ),
        U = a.createElement(
          'div',
          Object.assign({ className: y(t), ref: Y }, X),
          a.createElement(Ht, {
            trigger: wt(),
            triggerRef: Oe,
            popper: G,
            popperRef: ge,
            isVisible: M,
            enableFlip: !0,
            appendTo: () => B || Y.current,
            zIndex: D,
          }),
        ),
        pe = a.createElement('div', Object.assign({ className: y(t), ref: Y }, X), wt(), G);
      return B !== 'inline' ? U : pe;
    }
    return wt(Object.assign({}, St));
  }
  return gi(St);
};
Oa.displayName = 'SearchInputBase';
const _a = a.forwardRef((e, t) => a.createElement(Oa, Object.assign({}, e, { innerRef: t })));
_a.displayName = 'SearchInput';
const we = {
    divider: 'pf-v5-c-divider',
    modifiers: { buttonGroup: 'pf-m-button-group', iconButtonGroup: 'pf-m-icon-button-group', vertical: 'pf-m-vertical' },
    overflowMenu: 'pf-v5-c-overflow-menu',
    overflowMenuContent: 'pf-v5-c-overflow-menu__content',
    overflowMenuControl: 'pf-v5-c-overflow-menu__control',
    overflowMenuGroup: 'pf-v5-c-overflow-menu__group',
    overflowMenuItem: 'pf-v5-c-overflow-menu__item',
  },
  Te = a.createContext({ isBelowBreakpoint: !1 });
class Zt extends a.Component {
  constructor(t) {
    super(t),
      (this.observer = () => {}),
      (this.handleResize = () => {
        const n = yi[this.props.breakpoint];
        if (!n) {
          console.error('OverflowMenu will not be visible without a valid breakpoint.');
          return;
        }
        const s = (this.state.breakpointRef ? this.state.breakpointRef.clientWidth : window.innerWidth) < n;
        this.state.isBelowBreakpoint !== s && this.setState({ isBelowBreakpoint: s });
      }),
      (this.handleResizeWithDelay = Ei(this.handleResize, 250)),
      (this.state = { isBelowBreakpoint: !1, breakpointRef: void 0 });
  }
  getBreakpointRef() {
    const { breakpointReference: t } = this.props;
    if (t.current) return t.current;
    if (typeof t == 'function') return t();
  }
  componentDidMount() {
    const t = this.props.breakpointReference ? this.getBreakpointRef() : void 0;
    this.setState({ breakpointRef: t }), (this.observer = dn(t, this.handleResizeWithDelay)), this.handleResize();
  }
  componentDidUpdate(t, n) {
    const i = this.props.breakpointReference ? this.getBreakpointRef() : void 0;
    n.breakpointRef !== i &&
      (this.observer(), this.setState({ breakpointRef: i }), (this.observer = dn(i, this.handleResizeWithDelay)), this.handleResize());
  }
  componentWillUnmount() {
    this.observer();
  }
  render() {
    const t = this.props,
      { className: n, breakpoint: i, children: s, breakpointReference: l } = t,
      c = $(t, ['className', 'breakpoint', 'children', 'breakpointReference']);
    return a.createElement(
      'div',
      Object.assign({}, c, { className: y(we.overflowMenu, n) }),
      a.createElement(Te.Provider, { value: { isBelowBreakpoint: this.state.isBelowBreakpoint } }, s),
    );
  }
}
Zt.displayName = 'OverflowMenu';
Zt.contextType = Te;
const ya = e => {
  var { className: t, children: n, hasAdditionalOptions: i } = e,
    s = $(e, ['className', 'children', 'hasAdditionalOptions']);
  return a.createElement(
    Te.Consumer,
    null,
    l => (l.isBelowBreakpoint || i) && a.createElement('div', Object.assign({ className: y(we.overflowMenuControl, t) }, s), ' ', n, ' '),
  );
};
ya.displayName = 'OverflowMenuControl';
const Ea = ({ className: e, children: t, isPersistent: n }) =>
  a.createElement(
    Te.Consumer,
    null,
    i => (!i.isBelowBreakpoint || n) && a.createElement('div', { className: y(we.overflowMenuContent, e) }, t),
  );
Ea.displayName = 'OverflowMenuContent';
const Ca = e => {
  var { className: t, children: n, isPersistent: i = !1, groupType: s } = e,
    l = $(e, ['className', 'children', 'isPersistent', 'groupType']);
  return a.createElement(
    Te.Consumer,
    null,
    c =>
      (i || !c.isBelowBreakpoint) &&
      a.createElement(
        'div',
        Object.assign(
          {
            className: y(we.overflowMenuGroup, s === 'button' && we.modifiers.buttonGroup, s === 'icon' && we.modifiers.iconButtonGroup, t),
          },
          l,
        ),
        n,
      ),
  );
};
Ca.displayName = 'OverflowMenuGroup';
const Rt = ({ className: e, children: t, isPersistent: n = !1 }) =>
  a.createElement(
    Te.Consumer,
    null,
    i => (n || !i.isBelowBreakpoint) && a.createElement('div', { className: y(we.overflowMenuItem, e) }, ' ', t, ' '),
  );
Rt.displayName = 'OverflowMenuItem';
const nt = e => {
  var { children: t, isShared: n = !1, itemId: i } = e,
    s = $(e, ['children', 'isShared', 'itemId']);
  return a.createElement(
    Te.Consumer,
    null,
    l => (!n || l.isBelowBreakpoint) && a.createElement(at, Object.assign({ component: 'button', value: i }, s), t),
  );
};
nt.displayName = 'OverflowMenuDropdownItem';
const Jt = ({ firstIndex: e = 0, lastIndex: t = 0, itemCount: n = 0, itemsTitle: i = 'items', ofWord: s = 'of' }) =>
  a.createElement(a.Fragment, null, a.createElement('b', null, e, ' - ', t), ' ', s, ' ', a.createElement('b', null, n), ' ', i);
Jt.displayName = 'ToggleTemplate';
const te = {
  button: 'pf-v5-c-button',
  dirRtl: 'pf-v5-m-dir-rtl',
  formControl: 'pf-v5-c-form-control',
  menuToggle: 'pf-v5-c-menu-toggle',
  modifiers: {
    bottom: 'pf-m-bottom',
    static: 'pf-m-static',
    first: 'pf-m-first',
    last: 'pf-m-last',
    sticky: 'pf-m-sticky',
    compact: 'pf-m-compact',
    pageInsets: 'pf-m-page-insets',
    displaySummary: 'pf-m-display-summary',
    displayFull: 'pf-m-display-full',
    insetNone: 'pf-m-inset-none',
    insetSm: 'pf-m-inset-sm',
    insetMd: 'pf-m-inset-md',
    insetLg: 'pf-m-inset-lg',
    insetXl: 'pf-m-inset-xl',
    inset_2xl: 'pf-m-inset-2xl',
    displaySummaryOnSm: 'pf-m-display-summary-on-sm',
    displayFullOnSm: 'pf-m-display-full-on-sm',
    insetNoneOnSm: 'pf-m-inset-none-on-sm',
    insetSmOnSm: 'pf-m-inset-sm-on-sm',
    insetMdOnSm: 'pf-m-inset-md-on-sm',
    insetLgOnSm: 'pf-m-inset-lg-on-sm',
    insetXlOnSm: 'pf-m-inset-xl-on-sm',
    inset_2xlOnSm: 'pf-m-inset-2xl-on-sm',
    displaySummaryOnMd: 'pf-m-display-summary-on-md',
    displayFullOnMd: 'pf-m-display-full-on-md',
    insetNoneOnMd: 'pf-m-inset-none-on-md',
    insetSmOnMd: 'pf-m-inset-sm-on-md',
    insetMdOnMd: 'pf-m-inset-md-on-md',
    insetLgOnMd: 'pf-m-inset-lg-on-md',
    insetXlOnMd: 'pf-m-inset-xl-on-md',
    inset_2xlOnMd: 'pf-m-inset-2xl-on-md',
    displaySummaryOnLg: 'pf-m-display-summary-on-lg',
    displayFullOnLg: 'pf-m-display-full-on-lg',
    insetNoneOnLg: 'pf-m-inset-none-on-lg',
    insetSmOnLg: 'pf-m-inset-sm-on-lg',
    insetMdOnLg: 'pf-m-inset-md-on-lg',
    insetLgOnLg: 'pf-m-inset-lg-on-lg',
    insetXlOnLg: 'pf-m-inset-xl-on-lg',
    inset_2xlOnLg: 'pf-m-inset-2xl-on-lg',
    displaySummaryOnXl: 'pf-m-display-summary-on-xl',
    displayFullOnXl: 'pf-m-display-full-on-xl',
    insetNoneOnXl: 'pf-m-inset-none-on-xl',
    insetSmOnXl: 'pf-m-inset-sm-on-xl',
    insetMdOnXl: 'pf-m-inset-md-on-xl',
    insetLgOnXl: 'pf-m-inset-lg-on-xl',
    insetXlOnXl: 'pf-m-inset-xl-on-xl',
    inset_2xlOnXl: 'pf-m-inset-2xl-on-xl',
    displaySummaryOn_2xl: 'pf-m-display-summary-on-2xl',
    displayFullOn_2xl: 'pf-m-display-full-on-2xl',
    insetNoneOn_2xl: 'pf-m-inset-none-on-2xl',
    insetSmOn_2xl: 'pf-m-inset-sm-on-2xl',
    insetMdOn_2xl: 'pf-m-inset-md-on-2xl',
    insetLgOn_2xl: 'pf-m-inset-lg-on-2xl',
    insetXlOn_2xl: 'pf-m-inset-xl-on-2xl',
    inset_2xlOn_2xl: 'pf-m-inset-2xl-on-2xl',
  },
  pagination: 'pf-v5-c-pagination',
  paginationNav: 'pf-v5-c-pagination__nav',
  paginationNavControl: 'pf-v5-c-pagination__nav-control',
  paginationNavPageSelect: 'pf-v5-c-pagination__nav-page-select',
  paginationTotalItems: 'pf-v5-c-pagination__total-items',
  themeDark: 'pf-v5-theme-dark',
};
class Re extends a.Component {
  constructor(t) {
    super(t),
      (this.handleNewPage = (n, i) => {
        const { perPage: s, onSetPage: l } = this.props,
          c = (i - 1) * s,
          r = i * s;
        return l(n, i, s, c, r);
      }),
      (this.state = { userInputPage: this.props.page });
  }
  static parseInteger(t, n) {
    let i = Number.parseInt(t, 10);
    return Number.isNaN(i) || ((i = i > n ? n : i), (i = i < 1 ? 1 : i)), i;
  }
  onChange(t, n) {
    const i = Re.parseInteger(t.currentTarget.value, n);
    this.setState({ userInputPage: Number.isNaN(i) ? t.currentTarget.value : i });
  }
  onKeyDown(t, n, i, s) {
    const l = ['Tab', 'Backspace', 'Delete', 'ArrowLeft', 'ArrowRight', 'Home', 'End', 'ArrowUp', 'ArrowDown'];
    if (t.key === Zn.Enter) {
      const c = Re.parseInteger(this.state.userInputPage, i);
      s(t, Number.isNaN(c) ? n : c), this.handleNewPage(t, Number.isNaN(c) ? n : c);
    } else !/^\d*$/.test(t.key) && !l.includes(t.key) && t.preventDefault();
  }
  componentDidUpdate(t) {
    this.props.page !== t.page &&
      this.props.page <= this.props.lastPage &&
      this.state.userInputPage !== this.props.page &&
      this.setState({ userInputPage: this.props.page });
  }
  render() {
    const t = this.props,
      {
        page: n,
        perPage: i,
        onSetPage: s,
        isDisabled: l,
        itemCount: c,
        lastPage: r,
        firstPage: d,
        pagesTitle: o,
        pagesTitlePlural: f,
        toLastPageAriaLabel: p,
        toNextPageAriaLabel: u,
        toFirstPageAriaLabel: b,
        toPreviousPageAriaLabel: g,
        currPageAriaLabel: h,
        paginationAriaLabel: _,
        ofWord: E,
        onNextClick: O,
        onPreviousClick: m,
        onFirstClick: C,
        onLastClick: w,
        onPageInput: P,
        className: k,
        isCompact: N,
      } = t,
      x = $(t, [
        'page',
        'perPage',
        'onSetPage',
        'isDisabled',
        'itemCount',
        'lastPage',
        'firstPage',
        'pagesTitle',
        'pagesTitlePlural',
        'toLastPageAriaLabel',
        'toNextPageAriaLabel',
        'toFirstPageAriaLabel',
        'toPreviousPageAriaLabel',
        'currPageAriaLabel',
        'paginationAriaLabel',
        'ofWord',
        'onNextClick',
        'onPreviousClick',
        'onFirstClick',
        'onLastClick',
        'onPageInput',
        'className',
        'isCompact',
      ]),
      { userInputPage: S } = this.state;
    return a.createElement(
      'nav',
      Object.assign({ className: y(te.paginationNav, k), 'aria-label': _ }, x),
      !N &&
        a.createElement(
          'div',
          { className: y(te.paginationNavControl, te.modifiers.first) },
          a.createElement(
            H,
            {
              variant: ue.plain,
              isDisabled: l || n === d || n === 0,
              'aria-label': b,
              'data-action': 'first',
              onClick: I => {
                C(I, 1), this.handleNewPage(I, 1), this.setState({ userInputPage: 1 });
              },
            },
            a.createElement(es, null),
          ),
        ),
      a.createElement(
        'div',
        { className: te.paginationNavControl },
        a.createElement(
          H,
          {
            variant: ue.plain,
            isDisabled: l || n === d || n === 0,
            'data-action': 'previous',
            onClick: I => {
              const L = n - 1 >= 1 ? n - 1 : 1;
              m(I, L), this.handleNewPage(I, L), this.setState({ userInputPage: L });
            },
            'aria-label': g,
          },
          a.createElement(Yn, null),
        ),
      ),
      !N &&
        a.createElement(
          'div',
          { className: te.paginationNavPageSelect },
          a.createElement(ze, {
            'aria-label': h,
            type: 'number',
            isDisabled: l || (c && n === d && n === r && c >= 0) || n === 0,
            min: r <= 0 && d <= 0 ? 0 : 1,
            max: r,
            value: S,
            onKeyDown: I => this.onKeyDown(I, n, r, P),
            onChange: I => this.onChange(I, r),
          }),
          (c || c === 0) && a.createElement('span', { 'aria-hidden': 'true' }, E, ' ', o ? Ci(r, o, f) : r),
        ),
      a.createElement(
        'div',
        { className: te.paginationNavControl },
        a.createElement(
          H,
          {
            variant: ue.plain,
            isDisabled: l || n === r,
            'aria-label': u,
            'data-action': 'next',
            onClick: I => {
              const L = n + 1 <= r ? n + 1 : r;
              O(I, L), this.handleNewPage(I, L), this.setState({ userInputPage: L });
            },
          },
          a.createElement(it, null),
        ),
      ),
      !N &&
        a.createElement(
          'div',
          { className: y(te.paginationNavControl, te.modifiers.last) },
          a.createElement(
            H,
            {
              variant: ue.plain,
              isDisabled: l || n === r,
              'aria-label': p,
              'data-action': 'last',
              onClick: I => {
                w(I, r), this.handleNewPage(I, r), this.setState({ userInputPage: r });
              },
            },
            a.createElement(ns, null),
          ),
        ),
    );
  }
}
Re.displayName = 'Navigation';
Re.defaultProps = {
  className: '',
  isDisabled: !1,
  isCompact: !1,
  lastPage: 0,
  firstPage: 0,
  pagesTitle: '',
  pagesTitlePlural: '',
  toLastPageAriaLabel: 'Go to last page',
  toNextPageAriaLabel: 'Go to next page',
  toFirstPageAriaLabel: 'Go to first page',
  toPreviousPageAriaLabel: 'Go to previous page',
  currPageAriaLabel: 'Current page',
  paginationAriaLabel: 'Pagination',
  ofWord: 'of',
  onNextClick: () => {},
  onPreviousClick: () => {},
  onFirstClick: () => {},
  onLastClick: () => {},
  onPageInput: () => {},
};
const wa = ({
  className: e,
  widgetId: t,
  page: n,
  itemCount: i,
  isDisabled: s = !1,
  minWidth: l,
  dropDirection: c = 'down',
  perPageOptions: r = [],
  itemsPerPageTitle: d = 'Items per page',
  perPageSuffix: o = 'per page',
  optionsToggleAriaLabel: f,
  ofWord: p = 'of',
  perPage: u = 0,
  firstIndex: b = 0,
  lastIndex: g = 0,
  isLastFullPageShown: h = !1,
  itemsTitle: _ = 'items',
  toggleTemplate: E,
  onPerPageSelect: O = () => null,
}) => {
  const [m, C] = a.useState(!1),
    w = a.useRef(null),
    P = a.useRef(null),
    k = a.useRef(null),
    N = () => {
      C(D => !D);
    },
    x = () => {
      var D;
      C(F => !F), (D = w.current) === null || D === void 0 || D.focus();
    },
    S = (D, F) => {
      let R = n;
      for (; Math.ceil(i / F) < R; ) R--;
      if (h && i / F !== R) for (; R > 1 && i - F * R < 0; ) R--;
      const X = (R - 1) * F,
        M = R * F;
      return O(D, F, R, X, M);
    };
  a.useEffect(() => {
    const D = R => {
        var X, M, z;
        ((m && !((X = P.current) === null || X === void 0) && X.contains(R.target)) ||
          (!((M = w.current) === null || M === void 0) && M.contains(R.target))) &&
          (R.key === 'Escape' || R.key === 'Tab') &&
          (C(!1), (z = w.current) === null || z === void 0 || z.focus());
      },
      F = R => {
        var X, M, z;
        m &&
          !((X = w.current) === null || X === void 0) &&
          X.contains(R.target) &&
          setTimeout(() => {
            var V;
            const J = (V = P?.current) === null || V === void 0 ? void 0 : V.querySelector('li button:not(:disabled)');
            J && J.focus();
          }, 0),
          m &&
            !(!((M = w?.current) === null || M === void 0) && M.contains(R.target)) &&
            !(!((z = P.current) === null || z === void 0) && z.contains(R.target)) &&
            C(!1);
      };
    return (
      window.addEventListener('keydown', D),
      window.addEventListener('click', F),
      () => {
        window.removeEventListener('keydown', D), window.removeEventListener('click', F);
      }
    );
  }, [m, P]);
  const I = () =>
      r.map(({ value: D, title: F }) =>
        a.createElement(ia, { key: D, 'data-action': `per-page-${D}`, isSelected: u === D, onClick: R => S(R, D) }, F, ` ${o}`),
      ),
    L = a.createElement(
      st,
      Object.assign(
        { ref: w, onClick: N },
        f && { 'aria-label': f },
        { isDisabled: s || (i && i <= 0), isExpanded: m },
        t && { id: `${t}-toggle` },
        { variant: 'plainText', 'aria-haspopup': 'listbox' },
      ),
      E && typeof E == 'string' && ea(E, { firstIndex: b, lastIndex: g, ofWord: p, itemCount: i, itemsTitle: _ }),
      E && typeof E != 'string' && E({ firstIndex: b, lastIndex: g, ofWord: p, itemCount: i, itemsTitle: _ }),
      !E && a.createElement(Jt, { firstIndex: b, lastIndex: g, ofWord: p, itemCount: i, itemsTitle: _ }),
    ),
    B = a.createElement(ta, { className: y(e), onSelect: x, ref: P }, a.createElement(na, null, a.createElement(aa, null, I())));
  return a.createElement(
    'div',
    { ref: k },
    a.createElement(Ht, {
      trigger: L,
      triggerRef: w,
      popper: B,
      popperRef: P,
      isVisible: m,
      direction: c,
      appendTo: k.current || void 0,
      minWidth: l !== void 0 ? l : 'revert',
    }),
  );
};
wa.displayName = 'PaginationOptionsMenu';
const bn = {
  name: '--pf-v5-c-pagination__nav-page-select--c-form-control--width-chars',
  value: '2',
  var: 'var(--pf-v5-c-pagination__nav-page-select--c-form-control--width-chars)',
};
var Ke;
(function (e) {
  (e.bottom = 'bottom'), (e.top = 'top');
})(Ke || (Ke = {}));
const vn = [
    { title: '10', value: 10 },
    { title: '20', value: 20 },
    { title: '50', value: 50 },
    { title: '100', value: 100 },
  ],
  cs = (e, t) => {
    if (!t) return;
    const n = String(e).length;
    n >= 3 ? t.style.setProperty(bn.name, `${n}`) : t.style.setProperty(bn.name, '2');
  },
  Qt = e => {
    var {
        children: t,
        className: n = '',
        variant: i = Ke.top,
        isDisabled: s = !1,
        isCompact: l = !1,
        isSticky: c = !1,
        isStatic: r = !1,
        dropDirection: d,
        toggleTemplate: o,
        perPage: f = vn[0].value,
        titles: p = {
          items: '',
          page: '',
          pages: '',
          itemsPerPage: 'Items per page',
          perPageSuffix: 'per page',
          toFirstPageAriaLabel: 'Go to first page',
          toPreviousPageAriaLabel: 'Go to previous page',
          toLastPageAriaLabel: 'Go to last page',
          toNextPageAriaLabel: 'Go to next page',
          optionsToggleAriaLabel: '',
          currPageAriaLabel: 'Current page',
          paginationAriaLabel: 'Pagination',
          ofWord: 'of',
        },
        firstPage: u = 1,
        page: b = 1,
        offset: g = null,
        isLastFullPageShown: h = !1,
        itemsStart: _ = null,
        itemsEnd: E = null,
        itemCount: O,
        perPageOptions: m = vn,
        widgetId: C = 'options-menu',
        onSetPage: w = () => {},
        onPerPageSelect: P = () => {},
        onFirstClick: k = () => {},
        onPreviousClick: N = () => {},
        onNextClick: x = () => {},
        onPageInput: S = () => {},
        onLastClick: I = () => {},
        ouiaId: L,
        ouiaSafe: B = !0,
        usePageInsets: D,
        inset: F,
      } = e,
      R = $(e, [
        'children',
        'className',
        'variant',
        'isDisabled',
        'isCompact',
        'isSticky',
        'isStatic',
        'dropDirection',
        'toggleTemplate',
        'perPage',
        'titles',
        'firstPage',
        'page',
        'offset',
        'isLastFullPageShown',
        'itemsStart',
        'itemsEnd',
        'itemCount',
        'perPageOptions',
        'widgetId',
        'onSetPage',
        'onPerPageSelect',
        'onFirstClick',
        'onPreviousClick',
        'onNextClick',
        'onPageInput',
        'onLastClick',
        'ouiaId',
        'ouiaSafe',
        'usePageInsets',
        'inset',
      ]);
    const X = a.useRef(null),
      M = () => (O || O === 0 ? Math.ceil(O / f) || 0 : V + 1);
    a.useEffect(() => {
      const ae = X.current;
      cs(M(), ae);
    }, [f, O]);
    const z = d || (i === 'bottom' && !r ? 'up' : 'down');
    let V = b;
    g !== null && ((_ = g + 1), (V = Math.max(Math.ceil(_ / f), 1)), (E = g + f));
    const J = M();
    let Y = (V - 1) * f + 1,
      Z = V * f;
    (O || O === 0) &&
      ((Y = O <= 0 ? 0 : (V - 1) * f + 1), V < u && O > 0 ? (V = u) : V > J && (V = J), O >= 0 && (Z = V === J || O === 0 ? O : V * f));
    const Q = { firstIndex: Y, lastIndex: Z, itemCount: O, itemsTitle: p.items, ofWord: p.ofWord };
    return a.createElement(
      'div',
      Object.assign(
        {
          ref: X,
          className: y(
            te.pagination,
            i === Ke.bottom && te.modifiers.bottom,
            D && te.modifiers.pageInsets,
            re(F, te),
            l && te.modifiers.compact,
            r && te.modifiers.static,
            c && te.modifiers.sticky,
            n,
          ),
        },
        C && { id: `${C}-${i}-pagination` },
        Wt(Qt.displayName, L, B, i),
        R,
      ),
      i === Ke.top &&
        a.createElement(
          'div',
          { className: y(te.paginationTotalItems) },
          o && typeof o == 'string' && ea(o, Q),
          o && typeof o != 'string' && o(Q),
          !o && a.createElement(Jt, { firstIndex: Y, lastIndex: Z, itemCount: O, itemsTitle: p.items, ofWord: p.ofWord }),
        ),
      m &&
        m.length > 0 &&
        a.createElement(wa, {
          itemsPerPageTitle: p.itemsPerPage,
          perPageSuffix: p.perPageSuffix,
          itemsTitle: l ? '' : p.items,
          optionsToggleAriaLabel: p.optionsToggleAriaLabel,
          perPageOptions: m,
          firstIndex: _ !== null ? _ : Y,
          lastIndex: E !== null ? E : Z,
          ofWord: p.ofWord,
          isLastFullPageShown: h,
          itemCount: O,
          page: V,
          perPage: f,
          lastPage: J,
          onPerPageSelect: P,
          dropDirection: z,
          widgetId: `${C}-${i}`,
          toggleTemplate: o,
          isDisabled: s,
        }),
      a.createElement(Re, {
        pagesTitle: p.page,
        pagesTitlePlural: p.pages,
        toLastPageAriaLabel: p.toLastPageAriaLabel,
        toPreviousPageAriaLabel: p.toPreviousPageAriaLabel,
        toNextPageAriaLabel: p.toNextPageAriaLabel,
        toFirstPageAriaLabel: p.toFirstPageAriaLabel,
        currPageAriaLabel: p.currPageAriaLabel,
        paginationAriaLabel: p.paginationAriaLabel,
        ofWord: p.ofWord,
        page: O && O <= 0 ? 0 : V,
        perPage: f,
        itemCount: O,
        firstPage: _ !== null ? _ : 1,
        lastPage: J,
        onSetPage: w,
        onFirstClick: k,
        onPreviousClick: N,
        onNextClick: x,
        onLastClick: I,
        onPageInput: S,
        isDisabled: s,
        isCompact: l,
      }),
      t,
    );
  };
Qt.displayName = 'Pagination';
const j = {
    button: 'pf-v5-c-button',
    dirRtl: 'pf-v5-m-dir-rtl',
    modifiers: {
      fill: 'pf-m-fill',
      scrollable: 'pf-m-scrollable',
      noBorderBottom: 'pf-m-no-border-bottom',
      box: 'pf-m-box',
      vertical: 'pf-m-vertical',
      current: 'pf-m-current',
      colorSchemeLight_300: 'pf-m-color-scheme--light-300',
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
      secondary: 'pf-m-secondary',
      pageInsets: 'pf-m-page-insets',
      overflow: 'pf-m-overflow',
      action: 'pf-m-action',
      active: 'pf-m-active',
      disabled: 'pf-m-disabled',
      ariaDisabled: 'pf-m-aria-disabled',
      insetNone: 'pf-m-inset-none',
      insetSm: 'pf-m-inset-sm',
      insetMd: 'pf-m-inset-md',
      insetLg: 'pf-m-inset-lg',
      insetXl: 'pf-m-inset-xl',
      inset_2xl: 'pf-m-inset-2xl',
      insetNoneOnSm: 'pf-m-inset-none-on-sm',
      insetSmOnSm: 'pf-m-inset-sm-on-sm',
      insetMdOnSm: 'pf-m-inset-md-on-sm',
      insetLgOnSm: 'pf-m-inset-lg-on-sm',
      insetXlOnSm: 'pf-m-inset-xl-on-sm',
      inset_2xlOnSm: 'pf-m-inset-2xl-on-sm',
      insetNoneOnMd: 'pf-m-inset-none-on-md',
      insetSmOnMd: 'pf-m-inset-sm-on-md',
      insetMdOnMd: 'pf-m-inset-md-on-md',
      insetLgOnMd: 'pf-m-inset-lg-on-md',
      insetXlOnMd: 'pf-m-inset-xl-on-md',
      inset_2xlOnMd: 'pf-m-inset-2xl-on-md',
      insetNoneOnLg: 'pf-m-inset-none-on-lg',
      insetSmOnLg: 'pf-m-inset-sm-on-lg',
      insetMdOnLg: 'pf-m-inset-md-on-lg',
      insetLgOnLg: 'pf-m-inset-lg-on-lg',
      insetXlOnLg: 'pf-m-inset-xl-on-lg',
      inset_2xlOnLg: 'pf-m-inset-2xl-on-lg',
      insetNoneOnXl: 'pf-m-inset-none-on-xl',
      insetSmOnXl: 'pf-m-inset-sm-on-xl',
      insetMdOnXl: 'pf-m-inset-md-on-xl',
      insetLgOnXl: 'pf-m-inset-lg-on-xl',
      insetXlOnXl: 'pf-m-inset-xl-on-xl',
      inset_2xlOnXl: 'pf-m-inset-2xl-on-xl',
      insetNoneOn_2xl: 'pf-m-inset-none-on-2xl',
      insetSmOn_2xl: 'pf-m-inset-sm-on-2xl',
      insetMdOn_2xl: 'pf-m-inset-md-on-2xl',
      insetLgOn_2xl: 'pf-m-inset-lg-on-2xl',
      insetXlOn_2xl: 'pf-m-inset-xl-on-2xl',
      inset_2xlOn_2xl: 'pf-m-inset-2xl-on-2xl',
    },
    tabs: 'pf-v5-c-tabs',
    tabsAdd: 'pf-v5-c-tabs__add',
    tabsItem: 'pf-v5-c-tabs__item',
    tabsItemAction: 'pf-v5-c-tabs__item-action',
    tabsItemActionIcon: 'pf-v5-c-tabs__item-action-icon',
    tabsItemIcon: 'pf-v5-c-tabs__item-icon',
    tabsItemText: 'pf-v5-c-tabs__item-text',
    tabsLink: 'pf-v5-c-tabs__link',
    tabsLinkToggleIcon: 'pf-v5-c-tabs__link-toggle-icon',
    tabsList: 'pf-v5-c-tabs__list',
    tabsScrollButton: 'pf-v5-c-tabs__scroll-button',
    tabsToggle: 'pf-v5-c-tabs__toggle',
    tabsToggleButton: 'pf-v5-c-tabs__toggle-button',
    tabsToggleIcon: 'pf-v5-c-tabs__toggle-icon',
    tabsToggleText: 'pf-v5-c-tabs__toggle-text',
    themeDark: 'pf-v5-theme-dark',
  },
  Yt = e => {
    var { children: t, tabContentRef: n, ouiaId: i, parentInnerRef: s, ouiaSafe: l } = e,
      c = $(e, ['children', 'tabContentRef', 'ouiaId', 'parentInnerRef', 'ouiaSafe']);
    const r = c.href ? 'a' : 'button';
    return a.createElement(r, Object.assign({}, !c.href && { type: 'button' }, { ref: s }, Ze(Yt.displayName, i, l), c), t);
  };
Yt.displayName = 'TabButton';
const ut = a.createContext({
    variant: 'default',
    mountOnEnter: !1,
    unmountOnExit: !1,
    localActiveKey: '',
    uniqueId: '',
    handleTabClick: () => null,
    handleTabClose: void 0,
  }),
  ds = ut.Provider,
  ps = ut.Consumer,
  fs = e => {
    var { children: t, className: n, onClick: i, isDisabled: s, 'aria-label': l = 'Tab action', innerRef: c, ouiaId: r, ouiaSafe: d } = e,
      o = $(e, ['children', 'className', 'onClick', 'isDisabled', 'aria-label', 'innerRef', 'ouiaId', 'ouiaSafe']);
    return a.createElement(
      'span',
      { className: y(j.tabsItemAction, n) },
      a.createElement(
        H,
        Object.assign(
          { ref: c, type: 'button', variant: 'plain', 'aria-label': l, onClick: i, isDisabled: s },
          Ze(en.displayName, r, d),
          o,
        ),
        a.createElement('span', { className: y(j.tabsItemActionIcon) }, t),
      ),
    );
  },
  en = a.forwardRef((e, t) => a.createElement(fs, Object.assign({}, e, { innerRef: t })));
en.displayName = 'TabAction';
const ms = e => {
    var {
        title: t,
        eventKey: n,
        tabContentRef: i,
        id: s,
        tabContentId: l,
        className: c = '',
        ouiaId: r,
        isDisabled: d,
        isAriaDisabled: o,
        inoperableEvents: f = ['onClick', 'onKeyPress'],
        href: p,
        innerRef: u,
        tooltip: b,
        closeButtonAriaLabel: g,
        isCloseDisabled: h = !1,
        actions: _,
      } = e,
      E = $(e, [
        'title',
        'eventKey',
        'tabContentRef',
        'id',
        'tabContentId',
        'className',
        'ouiaId',
        'isDisabled',
        'isAriaDisabled',
        'inoperableEvents',
        'href',
        'innerRef',
        'tooltip',
        'closeButtonAriaLabel',
        'isCloseDisabled',
        'actions',
      ]);
    const O = f.reduce(
        (B, D) =>
          Object.assign(Object.assign({}, B), {
            [D]: F => {
              F.preventDefault();
            },
          }),
        {},
      ),
      { mountOnEnter: m, localActiveKey: C, unmountOnExit: w, uniqueId: P, handleTabClick: k, handleTabClose: N } = a.useContext(ut);
    let x = l ? `${l}` : `pf-tab-section-${n}-${s || P}`;
    (m || w) && n !== C && (x = void 0);
    const S = !p,
      I = () => {
        if (d) return S ? null : -1;
        if (o) return null;
      },
      L = a.createElement(
        Yt,
        Object.assign(
          {
            parentInnerRef: u,
            className: y(j.tabsLink, d && p && j.modifiers.disabled, o && j.modifiers.ariaDisabled),
            disabled: S ? d : null,
            'aria-disabled': d || o,
            tabIndex: I(),
            onClick: B => k(B, n, i),
          },
          o ? O : null,
          { id: `pf-tab-${n}-${s || P}`, 'aria-controls': x, tabContentRef: i, ouiaId: r, href: p, role: 'tab', 'aria-selected': n === C },
          E,
        ),
        t,
      );
    return a.createElement(
      'li',
      {
        className: y(j.tabsItem, n === C && j.modifiers.current, (N || _) && j.modifiers.action, (d || o) && j.modifiers.disabled, c),
        role: 'presentation',
      },
      b ? a.createElement(Se, Object.assign({}, b.props), L) : L,
      _ && _,
      N !== void 0 &&
        a.createElement(en, { 'aria-label': g || 'Close tab', onClick: B => N(B, n, i), isDisabled: h }, a.createElement(Pt, null)),
    );
  },
  Mt = a.forwardRef((e, t) => a.createElement(ms, Object.assign({ innerRef: t }, e)));
Mt.displayName = 'Tab';
const us = {
    name: 'PlusIcon',
    height: 512,
    width: 448,
    svgPath:
      'M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z',
    yOffset: 0,
    xOffset: 0,
  },
  gs = ne(us),
  Bt = {
    modifiers: { light_300: 'pf-m-light-300', padding: 'pf-m-padding' },
    tabContent: 'pf-v5-c-tab-content',
    tabContentBody: 'pf-v5-c-tab-content__body',
  },
  xn = { default: '', light300: Bt.modifiers.light_300 },
  hs = e => {
    var { id: t, activeKey: n, 'aria-label': i, child: s, children: l, className: c, eventKey: r, innerRef: d, ouiaId: o, ouiaSafe: f } = e,
      p = $(e, ['id', 'activeKey', 'aria-label', 'child', 'children', 'className', 'eventKey', 'innerRef', 'ouiaId', 'ouiaSafe']);
    if (l || s) {
      let u;
      return (
        i ? (u = null) : (u = l ? `${t}` : `pf-tab-${s.props.eventKey}-${t}`),
        a.createElement(ps, null, ({ variant: b }) =>
          a.createElement(
            'section',
            Object.assign(
              {
                ref: d,
                hidden: l ? null : s.props.eventKey !== n,
                className: l ? y(Bt.tabContent, c, xn[b]) : y(Bt.tabContent, s.props.className, xn[b]),
                id: l ? t : `pf-tab-section-${s.props.eventKey}-${t}`,
                'aria-label': i,
                'aria-labelledby': u,
                role: 'tabpanel',
                tabIndex: 0,
              },
              Ze('TabContent', o, f),
              p,
            ),
            l || s.props.children,
          ),
        )
      );
    }
    return null;
  },
  bs = a.forwardRef((e, t) => a.createElement(hs, Object.assign({}, e, { innerRef: t }))),
  lt = e => {
    var { children: t, className: n = '' } = e,
      i = $(e, ['children', 'className']);
    return a.createElement('span', Object.assign({ className: y(j.tabsItemText, n) }, i), t);
  };
lt.displayName = 'TabTitleText';
const Sa = e => {
  var { className: t, overflowingTabs: n = [], showTabCount: i, defaultTitleText: s = 'More', toggleAriaLabel: l, zIndex: c = 9999 } = e,
    r = $(e, ['className', 'overflowingTabs', 'showTabCount', 'defaultTitleText', 'toggleAriaLabel', 'zIndex']);
  const d = ee.useRef(),
    o = ee.useRef(),
    f = ee.useRef(),
    [p, u] = ee.useState(!1),
    { localActiveKey: b, handleTabClick: g } = ee.useContext(ut),
    h = () => {
      u(!1), o.current.focus();
    },
    _ = x => {
      var S;
      const I = (S = d?.current) === null || S === void 0 ? void 0 : S.contains(x.target);
      p && I && x.key === 'Escape' && h();
    },
    E = x => {
      var S, I;
      const L = !(!((S = d?.current) === null || S === void 0) && S.contains(x.target)),
        B = !(!((I = o?.current) === null || I === void 0) && I.contains(x.target));
      p && L && B && h();
    };
  ee.useEffect(
    () => (
      window.addEventListener('click', E),
      window.addEventListener('keydown', _),
      () => {
        window.removeEventListener('click', E), window.removeEventListener('keydown', _);
      }
    ),
    [p, d, o],
  );
  const O = n.find(x => x.eventKey === b),
    m = O?.title ? O.title : s,
    C = () => {
      u(x => !x),
        setTimeout(() => {
          if (d?.current) {
            const x = d.current.querySelector('li > button,input:not(:disabled)');
            x && x.focus();
          }
        }, 0);
    },
    w = ee.createElement(
      'li',
      Object.assign({ className: y(j.tabsItem, j.modifiers.overflow, O && j.modifiers.current, t), role: 'presentation', ref: f }, r),
      ee.createElement(
        'button',
        {
          type: 'button',
          className: y(j.tabsLink, p && j.modifiers.expanded),
          onClick: () => C(),
          'aria-label': l,
          'aria-haspopup': 'menu',
          'aria-expanded': p,
          role: 'tab',
          ref: o,
        },
        ee.createElement(lt, null, m, i && m === s && ` (${n.length})`),
        ee.createElement('span', { className: j.tabsLinkToggleIcon }, ee.createElement(it, null)),
      ),
    ),
    P = n.map(x => ee.createElement(ia, { key: x.eventKey, itemId: x.eventKey, isSelected: b === x.eventKey }, x.title)),
    k = (x, S) => {
      h();
      const I = n.find(L => L.eventKey === S).tabContentRef;
      g(x, S, I);
    },
    N = ee.createElement(ta, { ref: d, onSelect: (x, S) => k(x, S) }, ee.createElement(na, null, ee.createElement(aa, null, P)));
  return ee.createElement(
    ee.Fragment,
    null,
    w,
    ee.createElement(Ht, { triggerRef: o, popper: N, popperRef: d, isVisible: p, minWidth: 'revert', appendTo: f.current, zIndex: c }),
  );
};
Sa.displayName = 'OverflowTab';
var rt;
(function (e) {
  (e.div = 'div'), (e.nav = 'nav');
})(rt || (rt = {}));
const vs = { default: '', light300: j.modifiers.colorSchemeLight_300 };
class Me extends a.Component {
  constructor(t) {
    super(t),
      (this.tabList = a.createRef()),
      (this.leftScrollButtonRef = a.createRef()),
      (this.direction = 'ltr'),
      (this.scrollTimeout = null),
      (this.countOverflowingElements = n => Array.from(n.children).filter(s => !We(n, s)).length),
      (this.handleScrollButtons = () => {
        const { isOverflowHorizontal: n } = this.props;
        clearTimeout(this.scrollTimeout),
          (this.scrollTimeout = setTimeout(() => {
            const i = this.tabList.current;
            let s = !0,
              l = !0,
              c = !1,
              r = 0;
            if (i && !this.props.isVertical && !n) {
              const d = !We(i, i.firstChild),
                o = !We(i, i.lastChild);
              (c = d || o), (s = !d), (l = !o);
            }
            n && (r = this.countOverflowingElements(i)),
              this.setState({ enableScrollButtons: c, disableBackScrollButton: s, disableForwardScrollButton: l, overflowingTabCount: r });
          }, 100));
      }),
      (this.scrollBack = () => {
        if (this.tabList.current) {
          const n = this.tabList.current,
            i = Array.from(n.children);
          let s, l, c;
          for (c = 0; c < i.length && !s; c++) We(n, i[c]) && ((s = i[c]), (l = i[c - 1]));
          l && (this.direction === 'ltr' ? (n.scrollLeft -= l.scrollWidth) : (n.scrollLeft += l.scrollWidth));
        }
      }),
      (this.scrollForward = () => {
        if (this.tabList.current) {
          const n = this.tabList.current,
            i = Array.from(n.children);
          let s, l;
          for (let c = i.length - 1; c >= 0 && !s; c--) We(n, i[c]) && ((s = i[c]), (l = i[c + 1]));
          l && (this.direction === 'ltr' ? (n.scrollLeft += l.scrollWidth) : (n.scrollLeft -= l.scrollWidth));
        }
      }),
      (this.hideScrollButtons = () => {
        const { enableScrollButtons: n, renderScrollButtons: i, showScrollButtons: s } = this.state;
        !n && !s && i && this.setState({ renderScrollButtons: !1 });
      }),
      (this.state = {
        enableScrollButtons: !1,
        showScrollButtons: !1,
        renderScrollButtons: !1,
        disableBackScrollButton: !0,
        disableForwardScrollButton: !0,
        shownKeys: this.props.defaultActiveKey !== void 0 ? [this.props.defaultActiveKey] : [this.props.activeKey],
        uncontrolledActiveKey: this.props.defaultActiveKey,
        uncontrolledIsExpandedLocal: this.props.defaultIsExpanded,
        ouiaStateId: sa(Me.displayName),
        overflowingTabCount: 0,
      }),
      this.props.isVertical &&
        this.props.expandable !== void 0 &&
        !this.props.toggleAriaLabel &&
        !this.props.toggleText &&
        console.error('Tabs:', 'toggleAriaLabel or the toggleText prop is required to make the toggle button accessible');
  }
  handleTabClick(t, n, i) {
    const { shownKeys: s } = this.state,
      { onSelect: l, defaultActiveKey: c } = this.props;
    c !== void 0 ? this.setState({ uncontrolledActiveKey: n }) : l(t, n),
      i &&
        (a.Children.toArray(this.props.children)
          .filter(r => a.isValidElement(r))
          .filter(({ props: r }) => r.tabContentRef && r.tabContentRef.current)
          .forEach(r => (r.props.tabContentRef.current.hidden = !0)),
        i.current && (i.current.hidden = !1)),
      this.props.mountOnEnter && this.setState({ shownKeys: s.concat(n) });
  }
  componentDidMount() {
    this.props.isVertical ||
      (Ce && window.addEventListener('resize', this.handleScrollButtons, !1),
      (this.direction = pn(this.tabList.current)),
      this.handleScrollButtons());
  }
  componentWillUnmount() {
    var t;
    this.props.isVertical || (Ce && window.removeEventListener('resize', this.handleScrollButtons, !1)),
      clearTimeout(this.scrollTimeout),
      (t = this.leftScrollButtonRef.current) === null || t === void 0 || t.removeEventListener('transitionend', this.hideScrollButtons);
  }
  componentDidUpdate(t, n) {
    const { activeKey: i, mountOnEnter: s, isOverflowHorizontal: l, children: c } = this.props,
      { shownKeys: r, overflowingTabCount: d, enableScrollButtons: o } = this.state;
    t.activeKey !== i && s && r.indexOf(i) < 0 && this.setState({ shownKeys: r.concat(i) }),
      t.children && c && a.Children.toArray(t.children).length !== a.Children.toArray(c).length && this.handleScrollButtons();
    const f = this.countOverflowingElements(this.tabList.current);
    l && f && this.setState({ overflowingTabCount: f + d }),
      !n.enableScrollButtons && o
        ? (this.setState({ renderScrollButtons: !0 }),
          setTimeout(() => {
            var p;
            (p = this.leftScrollButtonRef.current) === null || p === void 0 || p.addEventListener('transitionend', this.hideScrollButtons),
              this.setState({ showScrollButtons: !0 });
          }, 100))
        : n.enableScrollButtons && !o && this.setState({ showScrollButtons: !1 }),
      (this.direction = pn(this.tabList.current));
  }
  render() {
    const t = this.props,
      {
        className: n,
        children: i,
        activeKey: s,
        defaultActiveKey: l,
        id: c,
        isFilled: r,
        isSecondary: d,
        isVertical: o,
        isBox: f,
        hasNoBorderBottom: p,
        leftScrollAriaLabel: u,
        rightScrollAriaLabel: b,
        backScrollAriaLabel: g,
        forwardScrollAriaLabel: h,
        'aria-label': _,
        component: E,
        ouiaId: O,
        ouiaSafe: m,
        mountOnEnter: C,
        unmountOnExit: w,
        usePageInsets: P,
        inset: k,
        variant: N,
        expandable: x,
        isExpanded: S,
        defaultIsExpanded: I,
        toggleText: L,
        toggleAriaLabel: B,
        addButtonAriaLabel: D,
        onToggle: F,
        onClose: R,
        onAdd: X,
        isOverflowHorizontal: M,
      } = t,
      z = $(t, [
        'className',
        'children',
        'activeKey',
        'defaultActiveKey',
        'id',
        'isFilled',
        'isSecondary',
        'isVertical',
        'isBox',
        'hasNoBorderBottom',
        'leftScrollAriaLabel',
        'rightScrollAriaLabel',
        'backScrollAriaLabel',
        'forwardScrollAriaLabel',
        'aria-label',
        'component',
        'ouiaId',
        'ouiaSafe',
        'mountOnEnter',
        'unmountOnExit',
        'usePageInsets',
        'inset',
        'variant',
        'expandable',
        'isExpanded',
        'defaultIsExpanded',
        'toggleText',
        'toggleAriaLabel',
        'addButtonAriaLabel',
        'onToggle',
        'onClose',
        'onAdd',
        'isOverflowHorizontal',
      ]),
      {
        showScrollButtons: V,
        renderScrollButtons: J,
        disableBackScrollButton: Y,
        disableForwardScrollButton: Z,
        shownKeys: Q,
        uncontrolledActiveKey: ae,
        uncontrolledIsExpandedLocal: Oe,
        overflowingTabCount: ge,
      } = this.state,
      ie = a.Children.toArray(i)
        .filter(K => a.isValidElement(K))
        .filter(({ props: K }) => !K.isHidden),
      _e = ie.slice(0, ie.length - ge),
      me = ie.slice(ie.length - ge).map(K => K.props),
      ye = c || wi(),
      Le = E === rt.nav ? 'nav' : 'div',
      se = l !== void 0 ? ae : s,
      he = I !== void 0 ? Oe : S,
      Qe = (K, Pe) => {
        S === void 0 ? this.setState({ uncontrolledIsExpandedLocal: Pe }) : F(K, Pe);
      },
      de = M && ge > 0,
      yt = typeof M == 'object' ? Object.assign({}, M) : {};
    return a.createElement(
      ds,
      {
        value: {
          variant: N,
          mountOnEnter: C,
          unmountOnExit: w,
          localActiveKey: se,
          uniqueId: ye,
          handleTabClick: (...K) => this.handleTabClick(...K),
          handleTabClose: R,
        },
      },
      a.createElement(
        Le,
        Object.assign(
          {
            'aria-label': _,
            className: y(
              j.tabs,
              r && j.modifiers.fill,
              d && j.modifiers.secondary,
              o && j.modifiers.vertical,
              o && x && re(x, j),
              o && x && he && j.modifiers.expanded,
              f && j.modifiers.box,
              V && j.modifiers.scrollable,
              P && j.modifiers.pageInsets,
              p && j.modifiers.noBorderBottom,
              re(k, j),
              vs[N],
              de && j.modifiers.overflow,
              n,
            ),
          },
          Ze(Me.displayName, O !== void 0 ? O : this.state.ouiaStateId, m),
          { id: c && c },
          z,
        ),
        x &&
          o &&
          a.createElement(Vt, null, K =>
            a.createElement(
              'div',
              { className: y(j.tabsToggle) },
              a.createElement(
                'div',
                { className: y(j.tabsToggleButton) },
                a.createElement(
                  H,
                  {
                    onClick: Pe => Qe(Pe, !he),
                    variant: 'plain',
                    'aria-label': B,
                    'aria-expanded': he,
                    id: `${K}-button`,
                    'aria-labelledby': `${K}-text ${K}-button`,
                  },
                  a.createElement('span', { className: y(j.tabsToggleIcon) }, a.createElement(it, { 'arian-hidden': 'true' })),
                  L && a.createElement('span', { className: y(j.tabsToggleText), id: `${K}-text` }, L),
                ),
              ),
            ),
          ),
        J &&
          a.createElement(
            'button',
            {
              type: 'button',
              className: y(j.tabsScrollButton, d && fn.modifiers.secondary),
              'aria-label': g || u,
              onClick: this.scrollBack,
              disabled: Y,
              'aria-hidden': Y,
              ref: this.leftScrollButtonRef,
            },
            a.createElement(Yn, null),
          ),
        a.createElement(
          'ul',
          { className: y(j.tabsList), ref: this.tabList, onScroll: this.handleScrollButtons, role: 'tablist' },
          M ? _e : ie,
          de && a.createElement(Sa, Object.assign({ overflowingTabs: me }, yt)),
        ),
        J &&
          a.createElement(
            'button',
            {
              type: 'button',
              className: y(j.tabsScrollButton, d && fn.modifiers.secondary),
              'aria-label': h || b,
              onClick: this.scrollForward,
              disabled: Z,
              'aria-hidden': Z,
            },
            a.createElement(it, null),
          ),
        X !== void 0 &&
          a.createElement(
            'span',
            { className: y(j.tabsAdd) },
            a.createElement(H, { variant: 'plain', 'aria-label': D || 'Add tab', onClick: X }, a.createElement(gs, null)),
          ),
      ),
      ie
        .filter(K => K.props.children && !(w && K.props.eventKey !== se) && !(C && Q.indexOf(K.props.eventKey) === -1))
        .map(K => a.createElement(bs, { key: K.props.eventKey, activeKey: se, child: K, id: K.props.id || ye, ouiaId: K.props.ouiaId })),
    );
  }
}
Me.displayName = 'Tabs';
Me.defaultProps = {
  activeKey: 0,
  onSelect: () => {},
  isFilled: !1,
  isSecondary: !1,
  isVertical: !1,
  isBox: !1,
  hasNoBorderBottom: !1,
  leftScrollAriaLabel: 'Scroll left',
  backScrollAriaLabel: 'Scroll back',
  rightScrollAriaLabel: 'Scroll right',
  forwardScrollAriaLabel: 'Scroll forward',
  component: rt.div,
  mountOnEnter: !1,
  unmountOnExit: !1,
  ouiaSafe: !0,
  variant: 'default',
  onToggle: (e, t) => {},
};
const A = {
    button: 'pf-v5-c-button',
    chipGroup: 'pf-v5-c-chip-group',
    divider: 'pf-v5-c-divider',
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
      pageInsets: 'pf-m-page-insets',
      sticky: 'pf-m-sticky',
      fullHeight: 'pf-m-full-height',
      static: 'pf-m-static',
      vertical: 'pf-m-vertical',
      alignItemsStart: 'pf-m-align-items-start',
      alignItemsCenter: 'pf-m-align-items-center',
      alignItemsBaseline: 'pf-m-align-items-baseline',
      alignSelfStart: 'pf-m-align-self-start',
      alignSelfCenter: 'pf-m-align-self-center',
      alignSelfBaseline: 'pf-m-align-self-baseline',
      buttonGroup: 'pf-m-button-group',
      iconButtonGroup: 'pf-m-icon-button-group',
      filterGroup: 'pf-m-filter-group',
      toggleGroup: 'pf-m-toggle-group',
      overflowMenu: 'pf-m-overflow-menu',
      bulkSelect: 'pf-m-bulk-select',
      expandAll: 'pf-m-expand-all',
      expanded: 'pf-m-expanded',
      searchFilter: 'pf-m-search-filter',
      chipGroup: 'pf-m-chip-group',
      label: 'pf-m-label',
      formElement: 'pf-m-form-element',
      pagination: 'pf-m-pagination',
      overflowContainer: 'pf-m-overflow-container',
      chipContainer: 'pf-m-chip-container',
      plain: 'pf-m-plain',
      show: 'pf-m-show',
      showOnSm: 'pf-m-show-on-sm',
      showOnMd: 'pf-m-show-on-md',
      showOnLg: 'pf-m-show-on-lg',
      showOnXl: 'pf-m-show-on-xl',
      showOn_2xl: 'pf-m-show-on-2xl',
      alignRight: 'pf-m-align-right',
      alignLeft: 'pf-m-align-left',
      nowrap: 'pf-m-nowrap',
      wrap: 'pf-m-wrap',
      alignRightOnSm: 'pf-m-align-right-on-sm',
      alignLeftOnSm: 'pf-m-align-left-on-sm',
      nowrapOnSm: 'pf-m-nowrap-on-sm',
      wrapOnSm: 'pf-m-wrap-on-sm',
      alignRightOnMd: 'pf-m-align-right-on-md',
      alignLeftOnMd: 'pf-m-align-left-on-md',
      nowrapOnMd: 'pf-m-nowrap-on-md',
      wrapOnMd: 'pf-m-wrap-on-md',
      alignRightOnLg: 'pf-m-align-right-on-lg',
      alignLeftOnLg: 'pf-m-align-left-on-lg',
      nowrapOnLg: 'pf-m-nowrap-on-lg',
      wrapOnLg: 'pf-m-wrap-on-lg',
      alignRightOnXl: 'pf-m-align-right-on-xl',
      alignLeftOnXl: 'pf-m-align-left-on-xl',
      nowrapOnXl: 'pf-m-nowrap-on-xl',
      wrapOnXl: 'pf-m-wrap-on-xl',
      alignRightOn_2xl: 'pf-m-align-right-on-2xl',
      alignLeftOn_2xl: 'pf-m-align-left-on-2xl',
      nowrapOn_2xl: 'pf-m-nowrap-on-2xl',
      wrapOn_2xl: 'pf-m-wrap-on-2xl',
      spaceItemsNone: 'pf-m-space-items-none',
      spaceItemsSm: 'pf-m-space-items-sm',
      spaceItemsMd: 'pf-m-space-items-md',
      spaceItemsLg: 'pf-m-space-items-lg',
      spaceItemsNoneOnSm: 'pf-m-space-items-none-on-sm',
      spaceItemsSmOnSm: 'pf-m-space-items-sm-on-sm',
      spaceItemsMdOnSm: 'pf-m-space-items-md-on-sm',
      spaceItemsLgOnSm: 'pf-m-space-items-lg-on-sm',
      spaceItemsNoneOnMd: 'pf-m-space-items-none-on-md',
      spaceItemsSmOnMd: 'pf-m-space-items-sm-on-md',
      spaceItemsMdOnMd: 'pf-m-space-items-md-on-md',
      spaceItemsLgOnMd: 'pf-m-space-items-lg-on-md',
      spaceItemsNoneOnLg: 'pf-m-space-items-none-on-lg',
      spaceItemsSmOnLg: 'pf-m-space-items-sm-on-lg',
      spaceItemsMdOnLg: 'pf-m-space-items-md-on-lg',
      spaceItemsLgOnLg: 'pf-m-space-items-lg-on-lg',
      spaceItemsNoneOnXl: 'pf-m-space-items-none-on-xl',
      spaceItemsSmOnXl: 'pf-m-space-items-sm-on-xl',
      spaceItemsMdOnXl: 'pf-m-space-items-md-on-xl',
      spaceItemsLgOnXl: 'pf-m-space-items-lg-on-xl',
      spaceItemsNoneOn_2xl: 'pf-m-space-items-none-on-2xl',
      spaceItemsSmOn_2xl: 'pf-m-space-items-sm-on-2xl',
      spaceItemsMdOn_2xl: 'pf-m-space-items-md-on-2xl',
      spaceItemsLgOn_2xl: 'pf-m-space-items-lg-on-2xl',
      spacerNone: 'pf-m-spacer-none',
      spacerSm: 'pf-m-spacer-sm',
      spacerMd: 'pf-m-spacer-md',
      spacerLg: 'pf-m-spacer-lg',
      spacerNoneOnSm: 'pf-m-spacer-none-on-sm',
      spacerSmOnSm: 'pf-m-spacer-sm-on-sm',
      spacerMdOnSm: 'pf-m-spacer-md-on-sm',
      spacerLgOnSm: 'pf-m-spacer-lg-on-sm',
      spacerNoneOnMd: 'pf-m-spacer-none-on-md',
      spacerSmOnMd: 'pf-m-spacer-sm-on-md',
      spacerMdOnMd: 'pf-m-spacer-md-on-md',
      spacerLgOnMd: 'pf-m-spacer-lg-on-md',
      spacerNoneOnLg: 'pf-m-spacer-none-on-lg',
      spacerSmOnLg: 'pf-m-spacer-sm-on-lg',
      spacerMdOnLg: 'pf-m-spacer-md-on-lg',
      spacerLgOnLg: 'pf-m-spacer-lg-on-lg',
      spacerNoneOnXl: 'pf-m-spacer-none-on-xl',
      spacerSmOnXl: 'pf-m-spacer-sm-on-xl',
      spacerMdOnXl: 'pf-m-spacer-md-on-xl',
      spacerLgOnXl: 'pf-m-spacer-lg-on-xl',
      spacerNoneOn_2xl: 'pf-m-spacer-none-on-2xl',
      spacerSmOn_2xl: 'pf-m-spacer-sm-on-2xl',
      spacerMdOn_2xl: 'pf-m-spacer-md-on-2xl',
      spacerLgOn_2xl: 'pf-m-spacer-lg-on-2xl',
      insetNone: 'pf-m-inset-none',
      insetSm: 'pf-m-inset-sm',
      insetMd: 'pf-m-inset-md',
      insetLg: 'pf-m-inset-lg',
      insetXl: 'pf-m-inset-xl',
      inset_2xl: 'pf-m-inset-2xl',
      insetNoneOnSm: 'pf-m-inset-none-on-sm',
      insetSmOnSm: 'pf-m-inset-sm-on-sm',
      insetMdOnSm: 'pf-m-inset-md-on-sm',
      insetLgOnSm: 'pf-m-inset-lg-on-sm',
      insetXlOnSm: 'pf-m-inset-xl-on-sm',
      inset_2xlOnSm: 'pf-m-inset-2xl-on-sm',
      insetNoneOnMd: 'pf-m-inset-none-on-md',
      insetSmOnMd: 'pf-m-inset-sm-on-md',
      insetMdOnMd: 'pf-m-inset-md-on-md',
      insetLgOnMd: 'pf-m-inset-lg-on-md',
      insetXlOnMd: 'pf-m-inset-xl-on-md',
      inset_2xlOnMd: 'pf-m-inset-2xl-on-md',
      insetNoneOnLg: 'pf-m-inset-none-on-lg',
      insetSmOnLg: 'pf-m-inset-sm-on-lg',
      insetMdOnLg: 'pf-m-inset-md-on-lg',
      insetLgOnLg: 'pf-m-inset-lg-on-lg',
      insetXlOnLg: 'pf-m-inset-xl-on-lg',
      inset_2xlOnLg: 'pf-m-inset-2xl-on-lg',
      insetNoneOnXl: 'pf-m-inset-none-on-xl',
      insetSmOnXl: 'pf-m-inset-sm-on-xl',
      insetMdOnXl: 'pf-m-inset-md-on-xl',
      insetLgOnXl: 'pf-m-inset-lg-on-xl',
      insetXlOnXl: 'pf-m-inset-xl-on-xl',
      inset_2xlOnXl: 'pf-m-inset-2xl-on-xl',
      insetNoneOn_2xl: 'pf-m-inset-none-on-2xl',
      insetSmOn_2xl: 'pf-m-inset-sm-on-2xl',
      insetMdOn_2xl: 'pf-m-inset-md-on-2xl',
      insetLgOn_2xl: 'pf-m-inset-lg-on-2xl',
      insetXlOn_2xl: 'pf-m-inset-xl-on-2xl',
      inset_2xlOn_2xl: 'pf-m-inset-2xl-on-2xl',
    },
    pagination: 'pf-v5-c-pagination',
    toolbar: 'pf-v5-c-toolbar',
    toolbarContent: 'pf-v5-c-toolbar__content',
    toolbarContentSection: 'pf-v5-c-toolbar__content-section',
    toolbarExpandAllIcon: 'pf-v5-c-toolbar__expand-all-icon',
    toolbarExpandableContent: 'pf-v5-c-toolbar__expandable-content',
    toolbarGroup: 'pf-v5-c-toolbar__group',
    toolbarItem: 'pf-v5-c-toolbar__item',
    toolbarToggle: 'pf-v5-c-toolbar__toggle',
  },
  Ta = a.createContext({
    isExpanded: !1,
    toggleIsExpanded: () => {},
    chipGroupContentRef: null,
    updateNumberFilters: () => {},
    numberOfFilters: 0,
    clearAllFilters: () => {},
  }),
  xs = a.createContext({ expandableContentRef: null, expandableContentId: '', chipContainerRef: null, clearAllFilters: () => {} }),
  Os = { md: parseInt(Si.value), lg: parseInt(Ti.value), xl: parseInt(Ii.value), '2xl': parseInt(Li.value) },
  _s = { name: '--pf-v5-c-toolbar__item--Width', value: 'auto', var: 'var(--pf-v5-c-toolbar__item--Width)' };
var jt;
(function (e) {
  (e.separator = 'separator'),
    (e['bulk-select'] = 'bulk-select'),
    (e['overflow-menu'] = 'overflow-menu'),
    (e.pagination = 'pagination'),
    (e['search-filter'] = 'search-filter'),
    (e.label = 'label'),
    (e['chip-group'] = 'chip-group'),
    (e['expand-all'] = 'expand-all');
})(jt || (jt = {}));
const Ue = e => {
  var {
      className: t,
      variant: n,
      visibility: i,
      spacer: s,
      widths: l,
      align: c,
      alignSelf: r,
      alignItems: d,
      id: o,
      children: f,
      isAllExpanded: p,
      isOverflowContainer: u,
    } = e,
    b = $(e, [
      'className',
      'variant',
      'visibility',
      'spacer',
      'widths',
      'align',
      'alignSelf',
      'alignItems',
      'id',
      'children',
      'isAllExpanded',
      'isOverflowContainer',
    ]);
  if (n === jt.separator) return a.createElement(Ut, Object.assign({ className: y(A.modifiers.vertical, t) }, b));
  const g = {};
  return (
    l && Object.entries(l || {}).map(([h, _]) => (g[`${_s.name}${h !== 'default' ? `-on-${h}` : ''}`] = _)),
    a.createElement(pt.Consumer, null, ({ width: h, getBreakpoint: _ }) =>
      a.createElement(
        'div',
        Object.assign(
          {
            className: y(
              A.toolbarItem,
              n && A.modifiers[la(n)],
              p && A.modifiers.expanded,
              u && A.modifiers.overflowContainer,
              re(i, A, '', _(h)),
              re(c, A, '', _(h)),
              re(s, A, '', _(h)),
              d === 'start' && A.modifiers.alignItemsStart,
              d === 'center' && A.modifiers.alignItemsCenter,
              d === 'baseline' && A.modifiers.alignItemsBaseline,
              r === 'start' && A.modifiers.alignSelfStart,
              r === 'center' && A.modifiers.alignSelfCenter,
              r === 'baseline' && A.modifiers.alignSelfBaseline,
              t,
            ),
          },
          n === 'label' && { 'aria-hidden': !0 },
          { id: o },
          b,
          l && { style: Object.assign(Object.assign({}, g), b.style) },
        ),
        f,
      ),
    )
  );
};
Ue.displayName = 'ToolbarItem';
var On;
(function (e) {
  (e['filter-group'] = 'filter-group'), (e['icon-button-group'] = 'icon-button-group'), (e['button-group'] = 'button-group');
})(On || (On = {}));
class ys extends a.Component {
  render() {
    const t = this.props,
      {
        visibility: n,
        align: i,
        alignItems: s,
        alignSelf: l,
        spacer: c,
        spaceItems: r,
        className: d,
        variant: o,
        children: f,
        isOverflowContainer: p,
        innerRef: u,
      } = t,
      b = $(t, [
        'visibility',
        'align',
        'alignItems',
        'alignSelf',
        'spacer',
        'spaceItems',
        'className',
        'variant',
        'children',
        'isOverflowContainer',
        'innerRef',
      ]);
    return a.createElement(pt.Consumer, null, ({ width: g, getBreakpoint: h }) =>
      a.createElement(
        'div',
        Object.assign(
          {
            className: y(
              A.toolbarGroup,
              o && A.modifiers[la(o)],
              re(n, A, '', h(g)),
              re(i, A, '', h(g)),
              re(c, A, '', h(g)),
              re(r, A, '', h(g)),
              s === 'start' && A.modifiers.alignItemsStart,
              s === 'center' && A.modifiers.alignItemsCenter,
              s === 'baseline' && A.modifiers.alignItemsBaseline,
              l === 'start' && A.modifiers.alignSelfStart,
              l === 'center' && A.modifiers.alignSelfCenter,
              l === 'baseline' && A.modifiers.alignSelfBaseline,
              p && A.modifiers.overflowContainer,
              d,
            ),
          },
          b,
          { ref: u },
        ),
        f,
      ),
    );
  }
}
const _n = a.forwardRef((e, t) => a.createElement(ys, Object.assign({}, e, { innerRef: t })));
class tn extends a.Component {
  render() {
    const t = this.props,
      {
        className: n,
        isExpanded: i,
        chipGroupContentRef: s,
        clearAllFilters: l,
        showClearFiltersButton: c,
        clearFiltersButtonText: r,
        collapseListedFiltersBreakpoint: d,
        numberOfFilters: o,
        numberOfFiltersText: f,
        customChipGroupContent: p,
      } = t,
      u = $(t, [
        'className',
        'isExpanded',
        'chipGroupContentRef',
        'clearAllFilters',
        'showClearFiltersButton',
        'clearFiltersButtonText',
        'collapseListedFiltersBreakpoint',
        'numberOfFilters',
        'numberOfFiltersText',
        'customChipGroupContent',
      ]),
      b = () => {
        l();
      };
    let g = !1;
    d === 'all' ? (g = !0) : Ce && (g = (Ce ? window.innerWidth : 1200) < Os[d]);
    const h = o === 0 || i;
    return a.createElement(
      'div',
      Object.assign(
        { className: y(A.toolbarContent, !h && !g && A.modifiers.chipContainer, h && A.modifiers.hidden, n) },
        (o === 0 || i) && { hidden: !0 },
        { ref: s },
        u,
      ),
      a.createElement(_n, Object.assign({ className: y(g && A.modifiers.hidden) }, g && { hidden: !0 }, g && { 'aria-hidden': !0 })),
      g && o > 0 && !i && a.createElement(_n, null, a.createElement(Ue, null, f(o))),
      c && !i && !p && a.createElement(Ue, null, a.createElement(H, { variant: 'link', onClick: b, isInline: !0 }, r)),
      p && p,
    );
  }
}
tn.displayName = 'ToolbarChipGroupContent';
tn.defaultProps = {
  clearFiltersButtonText: 'Clear all filters',
  collapseListedFiltersBreakpoint: 'lg',
  numberOfFiltersText: e => `${e} filters applied`,
};
class qe extends a.Component {
  constructor() {
    super(...arguments),
      (this.chipGroupContentRef = a.createRef()),
      (this.staticFilterInfo = {}),
      (this.state = {
        isManagedToggleExpanded: !1,
        filterInfo: {},
        windowWidth: Ce ? window.innerWidth : 1200,
        ouiaStateId: sa(qe.displayName),
      }),
      (this.isToggleManaged = () => !(this.props.isExpanded || this.props.toggleIsExpanded)),
      (this.toggleIsExpanded = () => {
        this.setState(t => ({ isManagedToggleExpanded: !t.isManagedToggleExpanded }));
      }),
      (this.closeExpandableContent = t => {
        t.target.innerWidth !== this.state.windowWidth &&
          this.setState(() => ({ isManagedToggleExpanded: !1, windowWidth: t.target.innerWidth }));
      }),
      (this.updateNumberFilters = (t, n) => {
        const i = Object.assign({}, this.staticFilterInfo);
        (!i.hasOwnProperty(t) || i[t] !== n) && ((i[t] = n), (this.staticFilterInfo = i), this.setState({ filterInfo: i }));
      }),
      (this.getNumberOfFilters = () => Object.values(this.state.filterInfo).reduce((t, n) => t + n, 0)),
      (this.renderToolbar = t => {
        const n = this.props,
          {
            clearAllFilters: i,
            clearFiltersButtonText: s,
            collapseListedFiltersBreakpoint: l,
            isExpanded: c,
            toggleIsExpanded: r,
            className: d,
            children: o,
            isFullHeight: f,
            isStatic: p,
            inset: u,
            usePageInsets: b,
            isSticky: g,
            ouiaId: h,
            numberOfFiltersText: _,
            customChipGroupContent: E,
          } = n,
          O = $(n, [
            'clearAllFilters',
            'clearFiltersButtonText',
            'collapseListedFiltersBreakpoint',
            'isExpanded',
            'toggleIsExpanded',
            'className',
            'children',
            'isFullHeight',
            'isStatic',
            'inset',
            'usePageInsets',
            'isSticky',
            'ouiaId',
            'numberOfFiltersText',
            'customChipGroupContent',
          ]),
          { isManagedToggleExpanded: m } = this.state,
          C = this.isToggleManaged(),
          w = C ? m : c,
          P = this.getNumberOfFilters(),
          k = P > 0;
        return a.createElement(pt.Consumer, null, ({ width: N, getBreakpoint: x }) =>
          a.createElement(
            'div',
            Object.assign(
              {
                className: y(
                  A.toolbar,
                  f && A.modifiers.fullHeight,
                  p && A.modifiers.static,
                  b && A.modifiers.pageInsets,
                  g && A.modifiers.sticky,
                  re(u, A, '', x(N)),
                  d,
                ),
                id: t,
              },
              Ze(qe.displayName, h !== void 0 ? h : this.state.ouiaStateId),
              O,
            ),
            a.createElement(
              Ta.Provider,
              {
                value: {
                  isExpanded: w,
                  toggleIsExpanded: C ? this.toggleIsExpanded : r,
                  chipGroupContentRef: this.chipGroupContentRef,
                  updateNumberFilters: this.updateNumberFilters,
                  numberOfFilters: P,
                  clearAllFilters: i,
                  clearFiltersButtonText: s,
                  showClearFiltersButton: k,
                  toolbarId: t,
                  customChipGroupContent: E,
                },
              },
              o,
              a.createElement(tn, {
                isExpanded: w,
                chipGroupContentRef: this.chipGroupContentRef,
                clearAllFilters: i,
                showClearFiltersButton: k,
                clearFiltersButtonText: s,
                numberOfFilters: P,
                numberOfFiltersText: _,
                collapseListedFiltersBreakpoint: l,
                customChipGroupContent: E,
              }),
            ),
          ),
        );
      });
  }
  componentDidMount() {
    this.isToggleManaged() && Ce && window.addEventListener('resize', this.closeExpandableContent);
  }
  componentWillUnmount() {
    this.isToggleManaged() && Ce && window.removeEventListener('resize', this.closeExpandableContent);
  }
  render() {
    return this.props.id ? this.renderToolbar(this.props.id) : a.createElement(Vt, null, t => this.renderToolbar(t));
  }
}
qe.displayName = 'Toolbar';
class je extends a.Component {
  constructor() {
    super(...arguments), (this.expandableContentRef = a.createRef()), (this.chipContainerRef = a.createRef());
  }
  render() {
    const t = this.props,
      {
        className: n,
        children: i,
        isExpanded: s,
        toolbarId: l,
        visibility: c,
        alignItems: r,
        clearAllFilters: d,
        showClearFiltersButton: o,
        clearFiltersButtonText: f,
        alignSelf: p,
      } = t,
      u = $(t, [
        'className',
        'children',
        'isExpanded',
        'toolbarId',
        'visibility',
        'alignItems',
        'clearAllFilters',
        'showClearFiltersButton',
        'clearFiltersButtonText',
        'alignSelf',
      ]);
    return a.createElement(pt.Consumer, null, ({ width: b, getBreakpoint: g }) =>
      a.createElement(
        'div',
        Object.assign({ className: y(A.toolbarContent, re(c, A, '', g(b)), n), ref: this.expandableContentRef }, u),
        a.createElement(
          Ta.Consumer,
          null,
          ({ clearAllFilters: h, clearFiltersButtonText: _, showClearFiltersButton: E, isExpanded: O, toolbarId: m }) => {
            const C = `${l || m}-expandable-content-${je.currentId++}`;
            return a.createElement(
              xs.Provider,
              {
                value: {
                  expandableContentRef: this.expandableContentRef,
                  expandableContentId: C,
                  chipContainerRef: this.chipContainerRef,
                  isExpanded: s || O,
                  clearAllFilters: d || h,
                  clearFiltersButtonText: f || _,
                  showClearFiltersButton: o || E,
                },
              },
              a.createElement(
                'div',
                {
                  className: y(
                    A.toolbarContentSection,
                    r === 'center' && A.modifiers.alignItemsCenter,
                    r === 'start' && A.modifiers.alignItemsStart,
                    r === 'baseline' && A.modifiers.alignItemsBaseline,
                    p === 'center' && A.modifiers.alignSelfCenter,
                    p === 'start' && A.modifiers.alignSelfStart,
                    p === 'baseline' && A.modifiers.alignSelfBaseline,
                  ),
                },
                i,
              ),
            );
          },
        ),
      ),
    );
  }
}
je.displayName = 'ToolbarContent';
je.currentId = 0;
je.defaultProps = { isExpanded: !1, showClearFiltersButton: !1 };
const Es = {
    name: 'ArrowsAltVIcon',
    height: 512,
    width: 256,
    svgPath:
      'M214.059 377.941H168V134.059h46.059c21.382 0 32.09-25.851 16.971-40.971L144.971 7.029c-9.373-9.373-24.568-9.373-33.941 0L24.971 93.088c-15.119 15.119-4.411 40.971 16.971 40.971H88v243.882H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.568 9.373 33.941 0l86.059-86.059c15.12-15.119 4.412-40.971-16.97-40.971z',
    yOffset: 0,
    xOffset: 0,
  },
  Cs = ne(Es),
  ws = {
    name: 'EditAltIcon',
    height: 1024,
    width: 1024,
    svgPath:
      'M1024,187.9 C1024,207 1017.3,223.1 1004,236.4 L857.5,386.9 L638.8,168.4 L787.3,20.5 C800.3,6.83333333 816.5,0 835.9,0 C855,0 871.366667,6.83333333 885,20.5 L1004,138.9 C1017.3,152.9 1023.96667,169.233333 1024,187.9 Z M806.2,438.9 L219.4,1024 L0,1024 L0,804.6 L586.6,219.5 L806.2,438.9 Z M219.6,950.9 L292.9,877.8 L146.3,731.4 L73.2,804.5 L73.2,877.6 L146.3,877.6 L146.3,951 L219.6,950.9 Z',
    yOffset: 0,
    xOffset: 0,
  },
  yn = ne(ws),
  Ss = {
    name: 'EllipsisHIcon',
    height: 512,
    width: 512,
    svgPath:
      'M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z',
    yOffset: 0,
    xOffset: 0,
  },
  Ts = ne(Ss),
  Is = {
    name: 'LongArrowAltDownIcon',
    height: 512,
    width: 256,
    svgPath:
      'M168 345.941V44c0-6.627-5.373-12-12-12h-56c-6.627 0-12 5.373-12 12v301.941H41.941c-21.382 0-32.09 25.851-16.971 40.971l86.059 86.059c9.373 9.373 24.569 9.373 33.941 0l86.059-86.059c15.119-15.119 4.411-40.971-16.971-40.971H168z',
    yOffset: 0,
    xOffset: 0,
  },
  Ls = ne(Is),
  Ps = {
    name: 'LongArrowAltUpIcon',
    height: 512,
    width: 256,
    svgPath:
      'M88 166.059V468c0 6.627 5.373 12 12 12h56c6.627 0 12-5.373 12-12V166.059h46.059c21.382 0 32.09-25.851 16.971-40.971l-86.059-86.059c-9.373-9.373-24.569-9.373-33.941 0l-86.059 86.059c-15.119 15.119-4.411 40.971 16.971 40.971H88z',
    yOffset: 0,
    xOffset: 0,
  },
  Ns = ne(Ps),
  ks = {
    name: 'Remove2Icon',
    height: 1024,
    width: 896,
    svgPath:
      'M576,128 L576,0 L320,0 L320,128 L0,128 L0,320 L64,256 L832,256 L896,320 L896,128 L576,128 Z M512,128 L384,128 L384,64 L512,64 L512,128 Z M64,320 L128,1024 L731.4,1024 L832,320 L64,320 Z',
    yOffset: 0,
    xOffset: 0,
  },
  En = ne(ks),
  As = {
    name: 'ShareAltIcon',
    height: 512,
    width: 448,
    svgPath:
      'M352 320c-22.608 0-43.387 7.819-59.79 20.895l-102.486-64.054a96.551 96.551 0 0 0 0-41.683l102.486-64.054C308.613 184.181 329.392 192 352 192c53.019 0 96-42.981 96-96S405.019 0 352 0s-96 42.981-96 96c0 7.158.79 14.13 2.276 20.841L155.79 180.895C139.387 167.819 118.608 160 96 160c-53.019 0-96 42.981-96 96s42.981 96 96 96c22.608 0 43.387-7.819 59.79-20.895l102.486 64.054A96.301 96.301 0 0 0 256 416c0 53.019 42.981 96 96 96s96-42.981 96-96-42.981-96-96-96z',
    yOffset: 0,
    xOffset: 0,
  },
  Cn = ne(As),
  $s = {
    name: 'UserCheckIcon',
    height: 512,
    width: 640,
    svgPath:
      'M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4zm323-128.4l-27.8-28.1c-4.6-4.7-12.1-4.7-16.8-.1l-104.8 104-45.5-45.8c-4.6-4.7-12.1-4.7-16.8-.1l-28.1 27.9c-4.7 4.6-4.7 12.1-.1 16.8l81.7 82.3c4.6 4.7 12.1 4.7 16.8.1l141.3-140.2c4.6-4.7 4.7-12.2.1-16.8z',
    yOffset: 0,
    xOffset: 0,
  },
  Rs = ne($s),
  Ms = e => {
    var {
        items: t,
        isDisabled: n,
        rowData: i,
        extraData: s,
        actionsToggle: l,
        popperProps: c = { position: 'end', direction: 'down' },
        innerRef: r,
        firstActionItemRef: d,
        isOnOpenChangeDisabled: o = !1,
      } = e,
      f = $(e, [
        'items',
        'isDisabled',
        'rowData',
        'extraData',
        'actionsToggle',
        'popperProps',
        'innerRef',
        'firstActionItemRef',
        'isOnOpenChangeDisabled',
      ]);
    const [p, u] = a.useState(!1),
      b = () => {
        u(!p);
      },
      g = (h, _) => {
        _ && (h.preventDefault(), _(h, s && s.rowIndex, i, s));
      };
    return a.createElement(
      a.Fragment,
      null,
      t
        .filter(h => h.isOutsideDropdown)
        .map((h, _) => {
          var { title: E, itemKey: O, onClick: m, isOutsideDropdown: C } = h,
            w = $(h, ['title', 'itemKey', 'onClick', 'isOutsideDropdown']);
          return typeof E == 'string'
            ? a.createElement(
                H,
                Object.assign({ onClick: P => g(P, m) }, w, {
                  isDisabled: n,
                  key: O || `outside_dropdown_${_}`,
                  'data-key': O || `outside_dropdown_${_}`,
                }),
                E,
              )
            : a.cloneElement(E, Object.assign({ onClick: m, isDisabled: n }, w));
        }),
      a.createElement(
        Nt,
        Object.assign(
          {
            isOpen: p,
            onOpenChange: o ? void 0 : h => u(h),
            toggle: h =>
              l
                ? l({ onToggle: b, isOpen: p, isDisabled: n, toggleRef: h })
                : a.createElement(
                    st,
                    { 'aria-label': 'Kebab toggle', ref: h, onClick: b, isExpanded: p, isDisabled: n, variant: 'plain' },
                    a.createElement(kt, null),
                  ),
          },
          i && i.actionProps,
          { ref: r },
          f,
          { popperProps: c },
        ),
        a.createElement(
          At,
          null,
          t
            .filter(h => !h.isOutsideDropdown)
            .map((h, _) => {
              var { title: E, itemKey: O, onClick: m, tooltipProps: C, isSeparator: w, shouldCloseOnClick: P = !0 } = h,
                k = $(h, ['title', 'itemKey', 'onClick', 'tooltipProps', 'isSeparator', 'shouldCloseOnClick']);
              if (w) return a.createElement(Ut, { key: O || _, 'data-key': O || _ });
              const N = a.createElement(
                at,
                Object.assign(
                  {
                    onClick: x => {
                      g(x, m), P && b();
                    },
                  },
                  k,
                  { key: O || _, 'data-key': O || _, ref: _ === 0 ? d : void 0 },
                ),
                E,
              );
              return C?.content ? a.createElement(Se, Object.assign({ key: O || _ }, C), N) : N;
            }),
        ),
      ),
    );
  },
  Ia = a.forwardRef((e, t) => a.createElement(Ms, Object.assign({}, e, { innerRef: t })));
Ia.displayName = 'ActionsColumn';
const T = {
    button: 'pf-v5-c-button',
    check: 'pf-v5-c-check',
    checkInput: 'pf-v5-c-check__input',
    dirRtl: 'pf-v5-m-dir-rtl',
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
      fixed: 'pf-m-fixed',
      stickyHeader: 'pf-m-sticky-header',
      nestedColumnHeader: 'pf-m-nested-column-header',
      borderRow: 'pf-m-border-row',
      striped: 'pf-m-striped',
      expandable: 'pf-m-expandable',
      stripedEven: 'pf-m-striped-even',
      ghostRow: 'pf-m-ghost-row',
      center: 'pf-m-center',
      help: 'pf-m-help',
      favorite: 'pf-m-favorite',
      borderRight: 'pf-m-border-right',
      borderLeft: 'pf-m-border-left',
      expanded: 'pf-m-expanded',
      truncate: 'pf-m-truncate',
      wrap: 'pf-m-wrap',
      nowrap: 'pf-m-nowrap',
      fitContent: 'pf-m-fit-content',
      breakWord: 'pf-m-break-word',
      noBorderRows: 'pf-m-no-border-rows',
      clickable: 'pf-m-clickable',
      selected: 'pf-m-selected',
      firstCellOffsetReset: 'pf-m-first-cell-offset-reset',
      dragOver: 'pf-m-drag-over',
      standalone: 'pf-m-standalone',
      favorited: 'pf-m-favorited',
      noPadding: 'pf-m-no-padding',
      compact: 'pf-m-compact',
      width_10: 'pf-m-width-10',
      width_15: 'pf-m-width-15',
      width_20: 'pf-m-width-20',
      width_25: 'pf-m-width-25',
      width_30: 'pf-m-width-30',
      width_35: 'pf-m-width-35',
      width_40: 'pf-m-width-40',
      width_45: 'pf-m-width-45',
      width_50: 'pf-m-width-50',
      width_60: 'pf-m-width-60',
      width_70: 'pf-m-width-70',
      width_80: 'pf-m-width-80',
      width_90: 'pf-m-width-90',
      width_100: 'pf-m-width-100',
    },
    table: 'pf-v5-c-table',
    tableAction: 'pf-v5-c-table__action',
    tableButton: 'pf-v5-c-table__button',
    tableButtonContent: 'pf-v5-c-table__button-content',
    tableCaption: 'pf-v5-c-table__caption',
    tableCheck: 'pf-v5-c-table__check',
    tableColumnHelp: 'pf-v5-c-table__column-help',
    tableColumnHelpAction: 'pf-v5-c-table__column-help-action',
    tableCompoundExpansionToggle: 'pf-v5-c-table__compound-expansion-toggle',
    tableControlRow: 'pf-v5-c-table__control-row',
    tableDraggable: 'pf-v5-c-table__draggable',
    tableExpandableRow: 'pf-v5-c-table__expandable-row',
    tableExpandableRowContent: 'pf-v5-c-table__expandable-row-content',
    tableFavorite: 'pf-v5-c-table__favorite',
    tableIcon: 'pf-v5-c-table__icon',
    tableIconInline: 'pf-v5-c-table__icon-inline',
    tableInlineEditAction: 'pf-v5-c-table__inline-edit-action',
    tableSort: 'pf-v5-c-table__sort',
    tableSortIndicator: 'pf-v5-c-table__sort-indicator',
    tableSubhead: 'pf-v5-c-table__subhead',
    tableTbody: 'pf-v5-c-table__tbody',
    tableTd: 'pf-v5-c-table__td',
    tableText: 'pf-v5-c-table__text',
    tableTh: 'pf-v5-c-table__th',
    tableThead: 'pf-v5-c-table__thead',
    tableToggle: 'pf-v5-c-table__toggle',
    tableToggleIcon: 'pf-v5-c-table__toggle-icon',
    tableTr: 'pf-v5-c-table__tr',
    themeDark: 'pf-v5-theme-dark',
  },
  La = e => {
    var { className: t = '', children: n = null, isOpen: i, onToggle: s } = e,
      l = $(e, ['className', 'children', 'isOpen', 'onToggle']);
    return a.createElement(
      a.Fragment,
      null,
      i !== void 0 &&
        a.createElement(
          H,
          Object.assign({ className: y(t, i && T.modifiers.expanded) }, l, {
            variant: 'plain',
            'aria-label': l['aria-label'] || 'Details',
            onClick: s,
            'aria-expanded': i,
          }),
          a.createElement('div', { className: y(T.tableToggleIcon) }, a.createElement(qt, null)),
        ),
      n,
    );
  };
La.displayName = 'CollapseColumn';
const Pa = e => {
  var { className: t, onClick: n, 'aria-label': i, id: s } = e,
    l = $(e, ['className', 'onClick', 'aria-label', 'id']);
  return a.createElement(
    H,
    Object.assign(
      { id: s, variant: 'plain', className: t, type: 'button', 'aria-label': i || 'Draggable row draggable button', onClick: n },
      l,
    ),
    a.createElement(Qi, { 'aria-hidden': !0 }),
  );
};
Pa.displayName = 'DraggableCell';
const Bs = {
    button: 'pf-v5-c-button',
    inlineEdit: 'pf-v5-c-inline-edit',
    inlineEditAction: 'pf-v5-c-inline-edit__action',
    inlineEditEditableText: 'pf-v5-c-inline-edit__editable-text',
    inlineEditGroup: 'pf-v5-c-inline-edit__group',
    inlineEditInput: 'pf-v5-c-inline-edit__input',
    inlineEditLabel: 'pf-v5-c-inline-edit__label',
    inlineEditValue: 'pf-v5-c-inline-edit__value',
    modifiers: {
      iconGroup: 'pf-m-icon-group',
      footer: 'pf-m-footer',
      column: 'pf-m-column',
      valid: 'pf-m-valid',
      plain: 'pf-m-plain',
      actionGroup: 'pf-m-action-group',
      enableEditable: 'pf-m-enable-editable',
      inlineEditable: 'pf-m-inline-editable',
      enable: 'pf-m-enable',
      bold: 'pf-m-bold',
    },
  },
  Na = e => {
    var { children: t = null } = e,
      n = $(e, ['children']);
    return a.createElement('div', Object.assign({}, n, { className: y(T.tableExpandableRowContent) }), t);
  };
Na.displayName = 'ExpandableRowContent';
var wn;
(function (e) {
  (e.div = 'div'), (e.nav = 'nav');
})(wn || (wn = {}));
var Sn;
(function (e) {
  (e.wrap = 'wrap'), (e.nowrap = 'nowrap'), (e.truncate = 'truncate'), (e.breakWord = 'breakWord'), (e.fitContent = 'fitContent');
})(Sn || (Sn = {}));
const gt = e => {
  var {
      children: t = null,
      className: n = '',
      variant: i = 'span',
      wrapModifier: s = null,
      tooltip: l = '',
      tooltipProps: c = {},
      onMouseEnter: r = () => {},
      focused: d = !1,
      tooltipHasDefaultBehavior: o = !1,
    } = e,
    f = $(e, [
      'children',
      'className',
      'variant',
      'wrapModifier',
      'tooltip',
      'tooltipProps',
      'onMouseEnter',
      'focused',
      'tooltipHasDefaultBehavior',
    ]);
  const p = i,
    u = a.createRef(),
    [b, g] = a.useState(l),
    h = O => {
      O.target.offsetWidth < O.target.scrollWidth ? g(l || O.target.innerText) : g(''), r(O);
    },
    _ = O => {
      O.offsetWidth < O.scrollWidth ? g(l || O.innerText) : g('');
    },
    E = a.createElement(
      p,
      Object.assign({ ref: u, onMouseEnter: o ? void 0 : h, className: y(n, s && T.modifiers[s], T.tableText) }, f),
      t,
    );
  return (
    a.useEffect(() => {
      o || (d ? _(u.current) : g(''));
    }, [d, o]),
    b !== '' ? a.createElement(Se, Object.assign({ triggerRef: u, content: b }, !o && { isVisible: !0 }, c), E) : E
  );
};
gt.displayName = 'TableText';
const Dt = ({ children: e, info: t, className: n, variant: i = 'tooltip', popoverProps: s, tooltipProps: l, ariaLabel: c }) =>
  a.createElement(
    'div',
    { className: y(T.tableColumnHelp, n) },
    typeof e == 'string' ? a.createElement(gt, null, e) : e,
    a.createElement(
      'span',
      { className: y(T.tableColumnHelpAction) },
      i === 'tooltip'
        ? a.createElement(
            Se,
            Object.assign({ content: t }, l),
            a.createElement(
              H,
              { variant: 'plain', 'aria-label': c || (typeof t == 'string' && t) || 'More info' },
              a.createElement(mn, null),
            ),
          )
        : a.createElement(
            Pi,
            Object.assign({ bodyContent: t }, s),
            a.createElement(
              H,
              { variant: 'plain', 'aria-label': c || (typeof t == 'string' && t) || 'More info' },
              a.createElement(mn, null),
            ),
          ),
    ),
  );
Dt.displayName = 'HeaderCellInfoWrapper';
const js = {
    button: 'pf-v5-c-button',
    modifiers: {
      grid: 'pf-m-grid',
      compact: 'pf-m-compact',
      expanded: 'pf-m-expanded',
      selected: 'pf-m-selected',
      noPadding: 'pf-m-no-padding',
      hoverable: 'pf-m-hoverable',
      nowrap: 'pf-m-nowrap',
      fitContent: 'pf-m-fit-content',
      truncate: 'pf-m-truncate',
      gridMd: 'pf-m-grid-md',
      gridLg: 'pf-m-grid-lg',
      gridXl: 'pf-m-grid-xl',
      grid_2xl: 'pf-m-grid-2xl',
    },
    table: 'pf-v5-c-table',
    tableAction: 'pf-v5-c-table__action',
    tableButton: 'pf-v5-c-table__button',
    tableCheck: 'pf-v5-c-table__check',
    tableCompoundExpansionToggle: 'pf-v5-c-table__compound-expansion-toggle',
    tableExpandableRow: 'pf-v5-c-table__expandable-row',
    tableExpandableRowContent: 'pf-v5-c-table__expandable-row-content',
    tableFavorite: 'pf-v5-c-table__favorite',
    tableIcon: 'pf-v5-c-table__icon',
    tableInlineEditAction: 'pf-v5-c-table__inline-edit-action',
    tableTbody: 'pf-v5-c-table__tbody',
    tableTd: 'pf-v5-c-table__td',
    tableText: 'pf-v5-c-table__text',
    tableTh: 'pf-v5-c-table__th',
    tableThead: 'pf-v5-c-table__thead',
    tableToggle: 'pf-v5-c-table__toggle',
    tableToggleIcon: 'pf-v5-c-table__toggle-icon',
    tableTr: 'pf-v5-c-table__tr',
  },
  le = {
    dirRtl: 'pf-v5-m-dir-rtl',
    dropdown: 'pf-v5-c-dropdown',
    modifiers: {
      treeView: 'pf-m-tree-view',
      noInset: 'pf-m-no-inset',
      treeViewGrid: 'pf-m-tree-view-grid',
      treeViewDetailsExpanded: 'pf-m-tree-view-details-expanded',
      treeViewGridMd: 'pf-m-tree-view-grid-md',
      treeViewGridLg: 'pf-m-tree-view-grid-lg',
      treeViewGridXl: 'pf-m-tree-view-grid-xl',
      treeViewGrid_2xl: 'pf-m-tree-view-grid-2xl',
    },
    table: 'pf-v5-c-table',
    tableAction: 'pf-v5-c-table__action',
    tableCheck: 'pf-v5-c-table__check',
    tableTbody: 'pf-v5-c-table__tbody',
    tableTd: 'pf-v5-c-table__td',
    tableTh: 'pf-v5-c-table__th',
    tableThead: 'pf-v5-c-table__thead',
    tableToggle: 'pf-v5-c-table__toggle',
    tableToggleIcon: 'pf-v5-c-table__toggle-icon',
    tableTr: 'pf-v5-c-table__tr',
    tableTreeViewDetailsToggle: 'pf-v5-c-table__tree-view-details-toggle',
    tableTreeViewIcon: 'pf-v5-c-table__tree-view-icon',
    tableTreeViewMain: 'pf-v5-c-table__tree-view-main',
    tableTreeViewText: 'pf-v5-c-table__tree-view-text',
    tableTreeViewTitleCell: 'pf-v5-c-table__tree-view-title-cell',
    tableTreeViewTitleHeaderCell: 'pf-v5-c-table__tree-view-title-header-cell',
  };
var Ft;
(function (e) {
  (e.radio = 'radio'), (e.checkbox = 'checkbox');
})(Ft || (Ft = {}));
const ka = e => {
  var { children: t = null, className: n, onSelect: i = null, selectVariant: s, tooltip: l, tooltipProps: c } = e,
    r = $(e, ['children', 'className', 'onSelect', 'selectVariant', 'tooltip', 'tooltipProps']);
  const d = a.createRef(),
    o = a.createElement(
      a.Fragment,
      null,
      a.createElement('label', null, a.createElement('input', Object.assign({}, r, { ref: d, type: s, onChange: i }))),
      t,
    );
  return l ? a.createElement(Se, Object.assign({ triggerRef: d, content: l }, c), o) : o;
};
ka.displayName = 'SelectColumn';
const Aa = (e, { rowIndex: t, columnIndex: n, rowData: i, column: s, property: l, tooltip: c }) => {
  const {
      extraParams: { onSelect: r, selectVariant: d, allRowsSelected: o, isHeaderSelectDisabled: f },
    } = s,
    p = { rowIndex: t, columnIndex: n, column: s, property: l };
  if (i && i.hasOwnProperty('parent') && !i.showSelect && !i.fullWidth) return { component: 'td', isVisible: !0 };
  const u = t !== void 0 ? t : -1;
  function b(_) {
    const E = t === void 0 ? _.currentTarget.checked : i && !i.selected;
    r && r(_, E, u, i, p);
  }
  const g = Object.assign(
    Object.assign(
      Object.assign(
        {},
        u !== -1 ? { checked: i && !!i.selected, 'aria-label': `Select row ${t}` } : { checked: o, 'aria-label': 'Select all rows' },
      ),
      i && (i.disableCheckbox || i.disableSelection) && { disabled: !0, className: Ni.checkInput },
    ),
    !i && f && { disabled: !0 },
  );
  let h = 'check-all';
  return (
    u !== -1 && d === Ft.checkbox ? (h = `checkrow${t}`) : u !== -1 && (h = 'radioGroup'),
    {
      className: y(T.tableCheck),
      component: u !== -1 ? 'td' : 'th',
      isVisible: !i || !i.fullWidth,
      children: a.createElement(ka, Object.assign({}, g, { selectVariant: d, onSelect: b, name: h, tooltip: c }), e),
    }
  );
};
var Ee;
(function (e) {
  (e.asc = 'asc'), (e.desc = 'desc');
})(Ee || (Ee = {}));
const $a = e => {
  var {
      children: t = null,
      className: n = '',
      isSortedBy: i = !1,
      onSort: s = null,
      sortDirection: l = '',
      type: c = 'button',
      tooltip: r,
      tooltipProps: d,
      tooltipHasDefaultBehavior: o,
    } = e,
    f = $(e, [
      'children',
      'className',
      'isSortedBy',
      'onSort',
      'sortDirection',
      'type',
      'tooltip',
      'tooltipProps',
      'tooltipHasDefaultBehavior',
    ]);
  let p;
  const [u, b] = a.useState(!1);
  return (
    i ? (p = l === Ee.asc ? Ns : Ls) : (p = Cs),
    a.createElement(
      'button',
      Object.assign({}, f, { type: c, className: y(n, T.tableButton), onClick: g => s && s(g), onFocus: () => b(!0), onBlur: () => b(!1) }),
      a.createElement(
        'div',
        { className: y(n, T.tableButtonContent) },
        a.createElement(gt, { tooltip: r, tooltipProps: d, tooltipHasDefaultBehavior: o, focused: u }, t),
        a.createElement('span', { className: y(T.tableSortIndicator) }, a.createElement(p, null)),
      ),
    )
  );
};
$a.displayName = 'SortColumn';
const Ds = e => () =>
    Ra(a.createElement(ra, { 'aria-hidden': !0 }), {
      columnIndex: e.columnIndex,
      className: T.modifiers.favorite,
      ariaLabel: 'Sort favorites',
      column: { extraParams: { sortBy: e.sortBy, onSort: e?.onSort } },
      tooltip: e.tooltip,
      tooltipProps: e.tooltipProps,
      tooltipHasDefaultBehavior: !0,
    }),
  Ra = (
    e,
    { columnIndex: t, column: n, property: i, className: s, ariaLabel: l, tooltip: c, tooltipProps: r, tooltipHasDefaultBehavior: d },
  ) => {
    const {
        extraParams: { sortBy: o, onSort: f },
      } = n,
      p = { columnIndex: t, column: n, property: i },
      u = o && t === o.index;
    function b(g) {
      let h;
      u ? (h = o.direction === Ee.asc ? Ee.desc : Ee.asc) : (h = o.defaultDirection ? o.defaultDirection : Ee.asc), f && f(g, t, h, p);
    }
    return {
      className: y(T.tableSort, u && T.modifiers.selected, s),
      'aria-sort': u ? `${o.direction}ending` : 'none',
      children: a.createElement(
        $a,
        {
          isSortedBy: u,
          sortDirection: u ? o.direction : '',
          onSort: b,
          'aria-label': l,
          tooltip: c,
          tooltipProps: r,
          tooltipHasDefaultBehavior: d,
        },
        e,
      ),
    };
  },
  Tn = (e, t, n, i) => t,
  Fs =
    (e, t, n) =>
    (
      i,
      {
        rowData: s,
        column: l,
        rowIndex: c,
        columnIndex: r,
        column: {
          extraParams: { actionsToggle: d, actionsPopperProps: o },
        },
        property: f,
      },
    ) => {
      const p = { rowIndex: c, columnIndex: r, column: l, property: f },
        u = Tn(t, e),
        b = Tn(n, s && s.disableActions),
        g =
          u && u.length > 0
            ? { children: a.createElement(Ia, { items: u, isDisabled: b, rowData: s, extraData: p, actionsToggle: d, popperProps: o }, i) }
            : {};
      return Object.assign({ className: y(T.tableAction), style: { paddingRight: 0 }, isVisible: !0 }, g);
    },
  Gs = e => e.toUpperCase().replace('-', '').replace('_', ''),
  In = e => e.replace(/([-_][a-z])/gi, Gs);
function Vs(e) {
  return e[0].toUpperCase() + e.substring(1);
}
const Ma = e => () => ({ className: y(T.modifiers[typeof e == 'number' ? `width_${e}` : `width${Vs(e)}`]) }),
  Ba = (e, { rowIndex: t, columnIndex: n, rowData: i, column: s, property: l }) => {
    const {
        extraParams: {
          onCollapse: c,
          rowLabeledBy: r = 'simple-node',
          expandId: d = 'expand-toggle',
          allRowsExpanded: o,
          collapseAllAriaLabel: f,
        },
      } = s,
      p = { rowIndex: t, columnIndex: n, column: s, property: l },
      u = t !== void 0 ? t : -1,
      b = Object.assign(
        {},
        u !== -1 ? { isOpen: i?.isOpen, 'aria-labelledby': `${r}${u} ${d}${u}` } : { isOpen: o, 'aria-label': f || 'Expand all rows' },
      );
    function g(h) {
      const _ = i ? !i.isOpen : !o;
      c && c(h, t, _, i, p);
    }
    return {
      className: (i?.isOpen !== void 0 || u === -1) && y(T.tableToggle),
      isVisible: !i?.fullWidth,
      children: a.createElement(La, Object.assign({ 'aria-labelledby': `${r}${u} ${d}${u}`, onToggle: g, id: d + u }, b), e),
    };
  },
  Hs = (e, { rowIndex: t, columnIndex: n, rowData: i, column: s, property: l }) => {
    if (!e) return null;
    const { title: c, props: r } = e,
      {
        extraParams: { onExpand: d, expandId: o = 'expand-toggle' },
      } = s,
      f = { rowIndex: t, columnIndex: n, column: s, property: l };
    function p(u) {
      d && d(u, t, n, r.isOpen, i, f);
    }
    return {
      className: y(T.tableCompoundExpansionToggle, r.isOpen && T.modifiers.expanded),
      children:
        r.isOpen !== void 0 &&
        a.createElement(
          'button',
          {
            type: 'button',
            className: y(T.tableButton),
            onClick: p,
            'aria-expanded': r.isOpen,
            'aria-controls': r.ariaControls,
            id: `${o}-${t}-${n}`,
          },
          a.createElement(gt, null, c),
        ),
    };
  },
  Ws = [
    'hidden',
    'hiddenOnSm',
    'hiddenOnMd',
    'hiddenOnLg',
    'hiddenOnXl',
    'hiddenOn_2xl',
    'visibleOnSm',
    'visibleOnMd',
    'visibleOnLg',
    'visibleOnXl',
    'visibleOn_2xl',
  ],
  ja = Ws.filter(e => T.modifiers[e]).reduce((e, t) => {
    const n = t.replace('_2xl', '2Xl');
    return (e[n] = T.modifiers[t]), e;
  }, {}),
  Da =
    (...e) =>
    () => ({ className: y(...e) }),
  Xs =
    ({ tooltip: e, tooltipProps: t, popover: n, popoverProps: i, className: s, ariaLabel: l }) =>
    r => ({
      className: T.modifiers.help,
      children: e
        ? a.createElement(Dt, { variant: 'tooltip', info: e, tooltipProps: t, ariaLabel: l, className: s }, r)
        : a.createElement(Dt, { variant: 'popover', info: n, popoverProps: i, ariaLabel: l, className: s }, r),
    }),
  Fa = e => {
    var { className: t = '', onFavorite: n, isFavorited: i, rowIndex: s } = e,
      l = $(e, ['className', 'onFavorite', 'isFavorited', 'rowIndex']);
    const c = s === void 0 ? {} : { id: `favorites-button-${s}`, 'aria-labelledby': `favorites-button-${s}` };
    return a.createElement(
      H,
      Object.assign({ variant: 'plain', className: t, type: 'button', 'aria-label': i ? 'Starred' : 'Not starred', onClick: n }, c, l),
      a.createElement(ra, { 'aria-hidden': !0 }),
    );
  };
Fa.displayName = 'FavoritesCell';
const zs = (e, { rowIndex: t, columnIndex: n, rowData: i, column: s, property: l }) => {
    const {
        extraParams: { onFavorite: c },
      } = s,
      r = { rowIndex: t, columnIndex: n, column: s, property: l };
    if (i && i.hasOwnProperty('parent') && !i.fullWidth) return { component: 'td', isVisible: !0 };
    function d(f) {
      c && c(f, i && !i.favorited, t, i, r);
    }
    const o = i.favoritesProps || {};
    return {
      className: y(T.tableFavorite, i && i.favorited && T.modifiers.favorited),
      isVisible: !i || !i.fullWidth,
      children: a.createElement(Fa, Object.assign({ rowIndex: t, onFavorite: d, isFavorited: i && i.favorited }, o)),
    };
  },
  Ks =
    (e, t, n) =>
    (i, { rowIndex: s, rowData: l }) => {
      const {
          isExpanded: c,
          isDetailsExpanded: r,
          'aria-level': d,
          'aria-setsize': o,
          toggleAriaLabel: f,
          checkAriaLabel: p,
          showDetailsAriaLabel: u,
          isChecked: b,
          checkboxId: g,
          icon: h,
        } = l.props,
        _ = i.title || i,
        E = a.createElement(
          'div',
          { className: y(le.tableTreeViewText), key: 'tree-view-text' },
          h && a.createElement('span', { className: y(le.tableTreeViewIcon), key: 'tree-view-text-icon' }, h),
          a.createElement('span', { className: T.tableText, key: 'table-text' }, _),
        ),
        O = (m, C) => {
          t(C, m, s, _, l);
        };
      return {
        component: 'th',
        className: le.tableTreeViewTitleCell,
        children:
          d !== void 0
            ? a.createElement(
                'div',
                { className: y(le.tableTreeViewMain) },
                o > 0 &&
                  a.createElement(
                    'span',
                    { className: y(le.tableToggle), key: 'table-toggle' },
                    a.createElement(
                      H,
                      {
                        variant: 'plain',
                        onClick: m => e && e(m, s, _, l),
                        className: y(c && T.modifiers.expanded),
                        'aria-expanded': c,
                        'aria-label': f || `${c ? 'Collapse' : 'Expand'} row ${s}`,
                      },
                      a.createElement('div', { className: y(le.tableToggleIcon) }, a.createElement(qt, { 'aria-hidden': 'true' })),
                    ),
                  ),
                !!t &&
                  a.createElement(
                    'span',
                    { className: y(le.tableCheck), key: 'table-check' },
                    a.createElement(
                      'label',
                      { htmlFor: g || `checkbox_${s}` },
                      a.createElement(ki, {
                        id: g || `checkbox_${s}`,
                        'aria-label': p || `Row ${s} checkbox`,
                        isChecked: b,
                        onChange: (m, C) => O(C, m),
                      }),
                    ),
                  ),
                E,
                !!n &&
                  a.createElement(
                    'span',
                    { className: y(le.tableTreeViewDetailsToggle), key: 'view-details-toggle' },
                    a.createElement(
                      H,
                      { variant: 'plain', 'aria-expanded': r, 'aria-label': u || 'Show row details', onClick: m => n && n(m, s, _, l) },
                      a.createElement('span', { className: `${T.table}__details-toggle-icon` }, a.createElement(Ts, { 'aria-hidden': !0 })),
                    ),
                  ),
              )
            : E,
      };
    };
var Gt;
(function (e) {
  (e.none = ''), (e.grid = 'grid'), (e.gridMd = 'grid-md'), (e.gridLg = 'grid-lg'), (e.gridXl = 'grid-xl'), (e.grid2xl = 'grid-2xl');
})(Gt || (Gt = {}));
var Ln;
(function (e) {
  e.compact = 'compact';
})(Ln || (Ln = {}));
const Ga = a.createContext({ registerSelectableRow: () => {} }),
  Us = e => {
    var t,
      n,
      {
        children: i,
        className: s,
        variant: l,
        borders: c = !0,
        isStickyHeader: r = !1,
        gridBreakPoint: d = Gt.gridMd,
        'aria-label': o,
        role: f = 'grid',
        innerRef: p,
        ouiaId: u,
        ouiaSafe: b = !0,
        isTreeTable: g = !1,
        isNested: h = !1,
        isStriped: _ = !1,
        isExpandable: E = !1,
        hasNoInset: O = !1,
        nestedHeaderColumnSpans: m,
        selectableRowCaptionText: C,
      } = e,
      w = $(e, [
        'children',
        'className',
        'variant',
        'borders',
        'isStickyHeader',
        'gridBreakPoint',
        'aria-label',
        'role',
        'innerRef',
        'ouiaId',
        'ouiaSafe',
        'isTreeTable',
        'isNested',
        'isStriped',
        'isExpandable',
        'hasNoInset',
        'nestedHeaderColumnSpans',
        'selectableRowCaptionText',
      ]);
    const P = a.useRef(null),
      k = p || P,
      [N, x] = a.useState(!1),
      [S, I] = a.useState();
    a.useEffect(() => {
      if ((document.addEventListener('keydown', R), k && k.current && k.current.classList.contains('pf-m-tree-view'))) {
        const M = k.current.querySelector('tbody');
        M && Ai(Array.from(M.querySelectorAll('button, a, input')));
      }
      return function () {
        document.removeEventListener('keydown', R);
      };
    }, [k, k.current]),
      a.useEffect(() => {
        I(
          C
            ? a.createElement(
                'caption',
                null,
                C,
                a.createElement(
                  'div',
                  { className: 'pf-v5-screen-reader' },
                  'This table has selectable rows. It can be navigated by row using tab, and each row can be selected using space or enter.',
                ),
              )
            : a.createElement(
                'caption',
                { className: 'pf-v5-screen-reader' },
                'This table has selectable rows. It can be navigated by row using tab, and each row can be selected using space or enter.',
              ),
        );
      }, [C]);
    const L = Wt('Table', u, b),
      B = (t = js.modifiers) === null || t === void 0 ? void 0 : t[In(d || '').replace(/-?2xl/, '_2xl')],
      D = `treeView${d.charAt(0).toUpperCase() + d.slice(1)}`,
      F = (n = le.modifiers) === null || n === void 0 ? void 0 : n[In(D || '').replace(/-?2xl/, '_2xl')],
      R = M => {
        if (
          h ||
          !(k && k.current && k.current.classList.contains(le.modifiers.treeView)) ||
          (k && k.current !== M.target.closest(`.${T.table}:not(.pf-m-nested)`))
        )
          return;
        const z = document.activeElement,
          V = M.key,
          J = Array.from(k.current.querySelectorAll('tbody tr')).filter(Z => !Z.classList.contains('pf-m-disabled') && !Z.hidden);
        (V === 'Space' || V === 'Enter') && (z.click(), M.preventDefault()),
          $i(
            M,
            J,
            Z => Z === z.closest('tr'),
            Z => Z.querySelectorAll('button:not(:disabled), input:not(:disabled), a:not(:disabled)')[0],
            ['button', 'input', 'a'],
            void 0,
            !1,
            !0,
            !1,
          );
      },
      X = () => {
        !N && x(!0);
      };
    return a.createElement(
      Ga.Provider,
      { value: { registerSelectableRow: X } },
      a.createElement(
        'table',
        Object.assign(
          {
            'aria-label': o,
            role: f,
            className: y(
              s,
              T.table,
              g ? F : B,
              T.modifiers[l],
              !c && T.modifiers.noBorderRows,
              r && T.modifiers.stickyHeader,
              g && le.modifiers.treeView,
              _ && T.modifiers.striped,
              E && T.modifiers.expandable,
              O && le.modifiers.noInset,
              h && 'pf-m-nested',
            ),
            ref: k,
          },
          g && { role: 'treegrid' },
          L,
          w,
        ),
        N && S,
        i,
      ),
    );
  },
  nn = a.forwardRef((e, t) => a.createElement(Us, Object.assign({}, e, { innerRef: t })));
nn.displayName = 'Table';
const qs = e => {
    var {
        children: t,
        className: n,
        isExpanded: i,
        isEditable: s,
        isHidden: l = !1,
        isClickable: c = !1,
        isRowSelected: r = !1,
        isStriped: d = !1,
        isBorderRow: o = !1,
        innerRef: f,
        ouiaId: p,
        ouiaSafe: u = !0,
        resetOffset: b = !1,
        onRowClick: g,
        isSelectable: h,
        'aria-label': _,
      } = e,
      E = $(e, [
        'children',
        'className',
        'isExpanded',
        'isEditable',
        'isHidden',
        'isClickable',
        'isRowSelected',
        'isStriped',
        'isBorderRow',
        'innerRef',
        'ouiaId',
        'ouiaSafe',
        'resetOffset',
        'onRowClick',
        'isSelectable',
        'aria-label',
      ]);
    const O = Wt('TableRow', p, u),
      [m, C] = a.useState('');
    let w = null;
    g &&
      (w = x => {
        (x.key === 'Enter' || x.key === ' ') && (g(x), x.preventDefault());
      });
    const P = l || (i !== void 0 && !i),
      { registerSelectableRow: k } = a.useContext(Ga);
    a.useEffect(() => {
      h && !P ? (C(`${r ? 'Row selected' : ''}`), k()) : C(void 0);
    }, [r, h, k, P]);
    const N = _ || m;
    return a.createElement(
      a.Fragment,
      null,
      a.createElement(
        'tr',
        Object.assign(
          {
            className: y(
              T.tableTr,
              n,
              i !== void 0 && T.tableExpandableRow,
              i && T.modifiers.expanded,
              s && Bs.modifiers.inlineEditable,
              c && T.modifiers.clickable,
              r && T.modifiers.selected,
              d && T.modifiers.striped,
              o && T.modifiers.borderRow,
              b && T.modifiers.firstCellOffsetReset,
            ),
            hidden: P,
          },
          c && { tabIndex: 0 },
          { 'aria-label': N, ref: f },
          g && { onClick: g, onKeyDown: w },
          O,
          E,
        ),
        t,
      ),
    );
  },
  Ae = a.forwardRef((e, t) => a.createElement(qs, Object.assign({}, e, { innerRef: t })));
Ae.displayName = 'Tr';
const Zs = e => {
    var { children: t, className: n, noWrap: i = !1, innerRef: s, hasNestedHeader: l } = e,
      c = $(e, ['children', 'className', 'noWrap', 'innerRef', 'hasNestedHeader']);
    return a.createElement(
      'thead',
      Object.assign({ className: y(T.tableThead, n, i && T.modifiers.nowrap, l && T.modifiers.nestedColumnHeader), ref: s }, c),
      t,
    );
  },
  an = a.forwardRef((e, t) => a.createElement(Zs, Object.assign({}, e, { innerRef: t })));
an.displayName = 'Thead';
const Js = e => {
    var { children: t, className: n, isExpanded: i, innerRef: s, isEvenStriped: l = !1, isOddStriped: c = !1 } = e,
      r = $(e, ['children', 'className', 'isExpanded', 'innerRef', 'isEvenStriped', 'isOddStriped']);
    return a.createElement(
      'tbody',
      Object.assign(
        {
          role: 'rowgroup',
          className: y(T.tableTbody, n, i && T.modifiers.expanded, c && T.modifiers.striped, l && T.modifiers.stripedEven),
          ref: s,
        },
        r,
      ),
      t,
    );
  },
  sn = a.forwardRef((e, t) => a.createElement(Js, Object.assign({}, e, { innerRef: t })));
sn.displayName = 'Tbody';
const $e = {
  modifiers: {
    borderRight: 'pf-m-border-right',
    borderLeft: 'pf-m-border-left',
    right: 'pf-m-right',
    inlineEnd: 'pf-m-inline-end',
    left: 'pf-m-left',
    inlineStart: 'pf-m-inline-start',
  },
  scrollInnerWrapper: 'pf-v5-c-scroll-inner-wrapper',
  scrollOuterWrapper: 'pf-v5-c-scroll-outer-wrapper',
  table: 'pf-v5-c-table',
  tableStickyCell: 'pf-v5-c-table__sticky-cell',
};
function Qs() {
  (this.__data__ = []), (this.size = 0);
}
var Ys = Qs;
function el(e, t) {
  return e === t || (e !== e && t !== t);
}
var ht = el,
  tl = ht;
function nl(e, t) {
  for (var n = e.length; n--; ) if (tl(e[n][0], t)) return n;
  return -1;
}
var bt = nl,
  al = bt,
  il = Array.prototype,
  sl = il.splice;
function ll(e) {
  var t = this.__data__,
    n = al(t, e);
  if (n < 0) return !1;
  var i = t.length - 1;
  return n == i ? t.pop() : sl.call(t, n, 1), --this.size, !0;
}
var rl = ll,
  ol = bt;
function cl(e) {
  var t = this.__data__,
    n = ol(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var dl = cl,
  pl = bt;
function fl(e) {
  return pl(this.__data__, e) > -1;
}
var ml = fl,
  ul = bt;
function gl(e, t) {
  var n = this.__data__,
    i = ul(n, e);
  return i < 0 ? (++this.size, n.push([e, t])) : (n[i][1] = t), this;
}
var hl = gl,
  bl = Ys,
  vl = rl,
  xl = dl,
  Ol = ml,
  _l = hl;
function De(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
De.prototype.clear = bl;
De.prototype.delete = vl;
De.prototype.get = xl;
De.prototype.has = Ol;
De.prototype.set = _l;
var vt = De,
  yl = vt;
function El() {
  (this.__data__ = new yl()), (this.size = 0);
}
var Cl = El;
function wl(e) {
  var t = this.__data__,
    n = t.delete(e);
  return (this.size = t.size), n;
}
var Sl = wl;
function Tl(e) {
  return this.__data__.get(e);
}
var Il = Tl;
function Ll(e) {
  return this.__data__.has(e);
}
var Pl = Ll,
  Nl = typeof Ye == 'object' && Ye && Ye.Object === Object && Ye,
  Va = Nl,
  kl = Va,
  Al = typeof self == 'object' && self && self.Object === Object && self,
  $l = kl || Al || Function('return this')(),
  Fe = $l,
  Rl = Fe,
  Ml = Rl.Symbol,
  Ha = Ml,
  Pn = Ha,
  Wa = Object.prototype,
  Bl = Wa.hasOwnProperty,
  jl = Wa.toString,
  Xe = Pn ? Pn.toStringTag : void 0;
function Dl(e) {
  var t = Bl.call(e, Xe),
    n = e[Xe];
  try {
    e[Xe] = void 0;
    var i = !0;
  } catch {}
  var s = jl.call(e);
  return i && (t ? (e[Xe] = n) : delete e[Xe]), s;
}
var Fl = Dl,
  Gl = Object.prototype,
  Vl = Gl.toString;
function Hl(e) {
  return Vl.call(e);
}
var Wl = Hl,
  Nn = Ha,
  Xl = Fl,
  zl = Wl,
  Kl = '[object Null]',
  Ul = '[object Undefined]',
  kn = Nn ? Nn.toStringTag : void 0;
function ql(e) {
  return e == null ? (e === void 0 ? Ul : Kl) : kn && kn in Object(e) ? Xl(e) : zl(e);
}
var xt = ql;
function Zl(e) {
  var t = typeof e;
  return e != null && (t == 'object' || t == 'function');
}
var Ie = Zl,
  Jl = xt,
  Ql = Ie,
  Yl = '[object AsyncFunction]',
  er = '[object Function]',
  tr = '[object GeneratorFunction]',
  nr = '[object Proxy]';
function ar(e) {
  if (!Ql(e)) return !1;
  var t = Jl(e);
  return t == er || t == tr || t == Yl || t == nr;
}
var ln = ar,
  ir = Fe,
  sr = ir['__core-js_shared__'],
  lr = sr,
  It = lr,
  An = (function () {
    var e = /[^.]+$/.exec((It && It.keys && It.keys.IE_PROTO) || '');
    return e ? 'Symbol(src)_1.' + e : '';
  })();
function rr(e) {
  return !!An && An in e;
}
var or = rr,
  cr = Function.prototype,
  dr = cr.toString;
function pr(e) {
  if (e != null) {
    try {
      return dr.call(e);
    } catch {}
    try {
      return e + '';
    } catch {}
  }
  return '';
}
var fr = pr,
  mr = ln,
  ur = or,
  gr = Ie,
  hr = fr,
  br = /[\\^$.*+?()[\]{}|]/g,
  vr = /^\[object .+?Constructor\]$/,
  xr = Function.prototype,
  Or = Object.prototype,
  _r = xr.toString,
  yr = Or.hasOwnProperty,
  Er = RegExp(
    '^' +
      _r
        .call(yr)
        .replace(br, '\\$&')
        .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') +
      '$',
  );
function Cr(e) {
  if (!gr(e) || ur(e)) return !1;
  var t = mr(e) ? Er : vr;
  return t.test(hr(e));
}
var wr = Cr;
function Sr(e, t) {
  return e?.[t];
}
var Tr = Sr,
  Ir = wr,
  Lr = Tr;
function Pr(e, t) {
  var n = Lr(e, t);
  return Ir(n) ? n : void 0;
}
var rn = Pr,
  Nr = rn,
  kr = Fe,
  Ar = Nr(kr, 'Map'),
  Xa = Ar,
  $r = rn,
  Rr = $r(Object, 'create'),
  Ot = Rr,
  $n = Ot;
function Mr() {
  (this.__data__ = $n ? $n(null) : {}), (this.size = 0);
}
var Br = Mr;
function jr(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var Dr = jr,
  Fr = Ot,
  Gr = '__lodash_hash_undefined__',
  Vr = Object.prototype,
  Hr = Vr.hasOwnProperty;
function Wr(e) {
  var t = this.__data__;
  if (Fr) {
    var n = t[e];
    return n === Gr ? void 0 : n;
  }
  return Hr.call(t, e) ? t[e] : void 0;
}
var Xr = Wr,
  zr = Ot,
  Kr = Object.prototype,
  Ur = Kr.hasOwnProperty;
function qr(e) {
  var t = this.__data__;
  return zr ? t[e] !== void 0 : Ur.call(t, e);
}
var Zr = qr,
  Jr = Ot,
  Qr = '__lodash_hash_undefined__';
function Yr(e, t) {
  var n = this.__data__;
  return (this.size += this.has(e) ? 0 : 1), (n[e] = Jr && t === void 0 ? Qr : t), this;
}
var eo = Yr,
  to = Br,
  no = Dr,
  ao = Xr,
  io = Zr,
  so = eo;
function Ge(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Ge.prototype.clear = to;
Ge.prototype.delete = no;
Ge.prototype.get = ao;
Ge.prototype.has = io;
Ge.prototype.set = so;
var lo = Ge,
  Rn = lo,
  ro = vt,
  oo = Xa;
function co() {
  (this.size = 0), (this.__data__ = { hash: new Rn(), map: new (oo || ro)(), string: new Rn() });
}
var po = co;
function fo(e) {
  var t = typeof e;
  return t == 'string' || t == 'number' || t == 'symbol' || t == 'boolean' ? e !== '__proto__' : e === null;
}
var mo = fo,
  uo = mo;
function go(e, t) {
  var n = e.__data__;
  return uo(t) ? n[typeof t == 'string' ? 'string' : 'hash'] : n.map;
}
var _t = go,
  ho = _t;
function bo(e) {
  var t = ho(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var vo = bo,
  xo = _t;
function Oo(e) {
  return xo(this, e).get(e);
}
var _o = Oo,
  yo = _t;
function Eo(e) {
  return yo(this, e).has(e);
}
var Co = Eo,
  wo = _t;
function So(e, t) {
  var n = wo(this, e),
    i = n.size;
  return n.set(e, t), (this.size += n.size == i ? 0 : 1), this;
}
var To = So,
  Io = po,
  Lo = vo,
  Po = _o,
  No = Co,
  ko = To;
function Ve(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var i = e[t];
    this.set(i[0], i[1]);
  }
}
Ve.prototype.clear = Io;
Ve.prototype.delete = Lo;
Ve.prototype.get = Po;
Ve.prototype.has = No;
Ve.prototype.set = ko;
var Ao = Ve,
  $o = vt,
  Ro = Xa,
  Mo = Ao,
  Bo = 200;
function jo(e, t) {
  var n = this.__data__;
  if (n instanceof $o) {
    var i = n.__data__;
    if (!Ro || i.length < Bo - 1) return i.push([e, t]), (this.size = ++n.size), this;
    n = this.__data__ = new Mo(i);
  }
  return n.set(e, t), (this.size = n.size), this;
}
var Do = jo,
  Fo = vt,
  Go = Cl,
  Vo = Sl,
  Ho = Il,
  Wo = Pl,
  Xo = Do;
function He(e) {
  var t = (this.__data__ = new Fo(e));
  this.size = t.size;
}
He.prototype.clear = Go;
He.prototype.delete = Vo;
He.prototype.get = Ho;
He.prototype.has = Wo;
He.prototype.set = Xo;
var zo = He,
  Ko = rn,
  Uo = (function () {
    try {
      var e = Ko(Object, 'defineProperty');
      return e({}, '', {}), e;
    } catch {}
  })(),
  za = Uo,
  Mn = za;
function qo(e, t, n) {
  t == '__proto__' && Mn ? Mn(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 }) : (e[t] = n);
}
var on = qo,
  Zo = on,
  Jo = ht;
function Qo(e, t, n) {
  ((n !== void 0 && !Jo(e[t], n)) || (n === void 0 && !(t in e))) && Zo(e, t, n);
}
var Ka = Qo;
function Yo(e) {
  return function (t, n, i) {
    for (var s = -1, l = Object(t), c = i(t), r = c.length; r--; ) {
      var d = c[e ? r : ++s];
      if (n(l[d], d, l) === !1) break;
    }
    return t;
  };
}
var ec = Yo,
  tc = ec,
  nc = tc(),
  ac = nc,
  ot = { exports: {} };
ot.exports;
(function (e, t) {
  var n = Fe,
    i = t && !t.nodeType && t,
    s = i && !0 && e && !e.nodeType && e,
    l = s && s.exports === i,
    c = l ? n.Buffer : void 0,
    r = c ? c.allocUnsafe : void 0;
  function d(o, f) {
    if (f) return o.slice();
    var p = o.length,
      u = r ? r(p) : new o.constructor(p);
    return o.copy(u), u;
  }
  e.exports = d;
})(ot, ot.exports);
var ic = ot.exports,
  sc = Fe,
  lc = sc.Uint8Array,
  rc = lc,
  Bn = rc;
function oc(e) {
  var t = new e.constructor(e.byteLength);
  return new Bn(t).set(new Bn(e)), t;
}
var cc = oc,
  dc = cc;
function pc(e, t) {
  var n = t ? dc(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var fc = pc;
function mc(e, t) {
  var n = -1,
    i = e.length;
  for (t || (t = Array(i)); ++n < i; ) t[n] = e[n];
  return t;
}
var uc = mc,
  gc = Ie,
  jn = Object.create,
  hc = (function () {
    function e() {}
    return function (t) {
      if (!gc(t)) return {};
      if (jn) return jn(t);
      e.prototype = t;
      var n = new e();
      return (e.prototype = void 0), n;
    };
  })(),
  bc = hc;
function vc(e, t) {
  return function (n) {
    return e(t(n));
  };
}
var xc = vc,
  Oc = xc,
  _c = Oc(Object.getPrototypeOf, Object),
  Ua = _c,
  yc = Object.prototype;
function Ec(e) {
  var t = e && e.constructor,
    n = (typeof t == 'function' && t.prototype) || yc;
  return e === n;
}
var qa = Ec,
  Cc = bc,
  wc = Ua,
  Sc = qa;
function Tc(e) {
  return typeof e.constructor == 'function' && !Sc(e) ? Cc(wc(e)) : {};
}
var Ic = Tc;
function Lc(e) {
  return e != null && typeof e == 'object';
}
var Je = Lc,
  Pc = xt,
  Nc = Je,
  kc = '[object Arguments]';
function Ac(e) {
  return Nc(e) && Pc(e) == kc;
}
var $c = Ac,
  Dn = $c,
  Rc = Je,
  Za = Object.prototype,
  Mc = Za.hasOwnProperty,
  Bc = Za.propertyIsEnumerable,
  jc = Dn(
    (function () {
      return arguments;
    })(),
  )
    ? Dn
    : function (e) {
        return Rc(e) && Mc.call(e, 'callee') && !Bc.call(e, 'callee');
      },
  Ja = jc,
  Dc = Array.isArray,
  Qa = Dc,
  Fc = 9007199254740991;
function Gc(e) {
  return typeof e == 'number' && e > -1 && e % 1 == 0 && e <= Fc;
}
var Ya = Gc,
  Vc = ln,
  Hc = Ya;
function Wc(e) {
  return e != null && Hc(e.length) && !Vc(e);
}
var cn = Wc,
  Xc = cn,
  zc = Je;
function Kc(e) {
  return zc(e) && Xc(e);
}
var Uc = Kc,
  ct = { exports: {} };
function qc() {
  return !1;
}
var Zc = qc;
ct.exports;
(function (e, t) {
  var n = Fe,
    i = Zc,
    s = t && !t.nodeType && t,
    l = s && !0 && e && !e.nodeType && e,
    c = l && l.exports === s,
    r = c ? n.Buffer : void 0,
    d = r ? r.isBuffer : void 0,
    o = d || i;
  e.exports = o;
})(ct, ct.exports);
var ei = ct.exports,
  Jc = xt,
  Qc = Ua,
  Yc = Je,
  ed = '[object Object]',
  td = Function.prototype,
  nd = Object.prototype,
  ti = td.toString,
  ad = nd.hasOwnProperty,
  id = ti.call(Object);
function sd(e) {
  if (!Yc(e) || Jc(e) != ed) return !1;
  var t = Qc(e);
  if (t === null) return !0;
  var n = ad.call(t, 'constructor') && t.constructor;
  return typeof n == 'function' && n instanceof n && ti.call(n) == id;
}
var ld = sd,
  rd = xt,
  od = Ya,
  cd = Je,
  dd = '[object Arguments]',
  pd = '[object Array]',
  fd = '[object Boolean]',
  md = '[object Date]',
  ud = '[object Error]',
  gd = '[object Function]',
  hd = '[object Map]',
  bd = '[object Number]',
  vd = '[object Object]',
  xd = '[object RegExp]',
  Od = '[object Set]',
  _d = '[object String]',
  yd = '[object WeakMap]',
  Ed = '[object ArrayBuffer]',
  Cd = '[object DataView]',
  wd = '[object Float32Array]',
  Sd = '[object Float64Array]',
  Td = '[object Int8Array]',
  Id = '[object Int16Array]',
  Ld = '[object Int32Array]',
  Pd = '[object Uint8Array]',
  Nd = '[object Uint8ClampedArray]',
  kd = '[object Uint16Array]',
  Ad = '[object Uint32Array]',
  q = {};
q[wd] = q[Sd] = q[Td] = q[Id] = q[Ld] = q[Pd] = q[Nd] = q[kd] = q[Ad] = !0;
q[dd] = q[pd] = q[Ed] = q[fd] = q[Cd] = q[md] = q[ud] = q[gd] = q[hd] = q[bd] = q[vd] = q[xd] = q[Od] = q[_d] = q[yd] = !1;
function $d(e) {
  return cd(e) && od(e.length) && !!q[rd(e)];
}
var Rd = $d;
function Md(e) {
  return function (t) {
    return e(t);
  };
}
var Bd = Md,
  dt = { exports: {} };
dt.exports;
(function (e, t) {
  var n = Va,
    i = t && !t.nodeType && t,
    s = i && !0 && e && !e.nodeType && e,
    l = s && s.exports === i,
    c = l && n.process,
    r = (function () {
      try {
        var d = s && s.require && s.require('util').types;
        return d || (c && c.binding && c.binding('util'));
      } catch {}
    })();
  e.exports = r;
})(dt, dt.exports);
var jd = dt.exports,
  Dd = Rd,
  Fd = Bd,
  Fn = jd,
  Gn = Fn && Fn.isTypedArray,
  Gd = Gn ? Fd(Gn) : Dd,
  ni = Gd;
function Vd(e, t) {
  if (!(t === 'constructor' && typeof e[t] == 'function') && t != '__proto__') return e[t];
}
var ai = Vd,
  Hd = on,
  Wd = ht,
  Xd = Object.prototype,
  zd = Xd.hasOwnProperty;
function Kd(e, t, n) {
  var i = e[t];
  (!(zd.call(e, t) && Wd(i, n)) || (n === void 0 && !(t in e))) && Hd(e, t, n);
}
var Ud = Kd,
  qd = Ud,
  Zd = on;
function Jd(e, t, n, i) {
  var s = !n;
  n || (n = {});
  for (var l = -1, c = t.length; ++l < c; ) {
    var r = t[l],
      d = i ? i(n[r], e[r], r, n, e) : void 0;
    d === void 0 && (d = e[r]), s ? Zd(n, r, d) : qd(n, r, d);
  }
  return n;
}
var Qd = Jd;
function Yd(e, t) {
  for (var n = -1, i = Array(e); ++n < e; ) i[n] = t(n);
  return i;
}
var ep = Yd,
  tp = 9007199254740991,
  np = /^(?:0|[1-9]\d*)$/;
function ap(e, t) {
  var n = typeof e;
  return (t = t ?? tp), !!t && (n == 'number' || (n != 'symbol' && np.test(e))) && e > -1 && e % 1 == 0 && e < t;
}
var ii = ap,
  ip = ep,
  sp = Ja,
  lp = Qa,
  rp = ei,
  op = ii,
  cp = ni,
  dp = Object.prototype,
  pp = dp.hasOwnProperty;
function fp(e, t) {
  var n = lp(e),
    i = !n && sp(e),
    s = !n && !i && rp(e),
    l = !n && !i && !s && cp(e),
    c = n || i || s || l,
    r = c ? ip(e.length, String) : [],
    d = r.length;
  for (var o in e)
    (t || pp.call(e, o)) &&
      !(
        c &&
        (o == 'length' ||
          (s && (o == 'offset' || o == 'parent')) ||
          (l && (o == 'buffer' || o == 'byteLength' || o == 'byteOffset')) ||
          op(o, d))
      ) &&
      r.push(o);
  return r;
}
var mp = fp;
function up(e) {
  var t = [];
  if (e != null) for (var n in Object(e)) t.push(n);
  return t;
}
var gp = up,
  hp = Ie,
  bp = qa,
  vp = gp,
  xp = Object.prototype,
  Op = xp.hasOwnProperty;
function _p(e) {
  if (!hp(e)) return vp(e);
  var t = bp(e),
    n = [];
  for (var i in e) (i == 'constructor' && (t || !Op.call(e, i))) || n.push(i);
  return n;
}
var yp = _p,
  Ep = mp,
  Cp = yp,
  wp = cn;
function Sp(e) {
  return wp(e) ? Ep(e, !0) : Cp(e);
}
var si = Sp,
  Tp = Qd,
  Ip = si;
function Lp(e) {
  return Tp(e, Ip(e));
}
var Pp = Lp,
  Vn = Ka,
  Np = ic,
  kp = fc,
  Ap = uc,
  $p = Ic,
  Hn = Ja,
  Wn = Qa,
  Rp = Uc,
  Mp = ei,
  Bp = ln,
  jp = Ie,
  Dp = ld,
  Fp = ni,
  Xn = ai,
  Gp = Pp;
function Vp(e, t, n, i, s, l, c) {
  var r = Xn(e, n),
    d = Xn(t, n),
    o = c.get(d);
  if (o) {
    Vn(e, n, o);
    return;
  }
  var f = l ? l(r, d, n + '', e, t, c) : void 0,
    p = f === void 0;
  if (p) {
    var u = Wn(d),
      b = !u && Mp(d),
      g = !u && !b && Fp(d);
    (f = d),
      u || b || g
        ? Wn(r)
          ? (f = r)
          : Rp(r)
            ? (f = Ap(r))
            : b
              ? ((p = !1), (f = Np(d, !0)))
              : g
                ? ((p = !1), (f = kp(d, !0)))
                : (f = [])
        : Dp(d) || Hn(d)
          ? ((f = r), Hn(r) ? (f = Gp(r)) : (!jp(r) || Bp(r)) && (f = $p(d)))
          : (p = !1);
  }
  p && (c.set(d, f), s(f, d, i, l, c), c.delete(d)), Vn(e, n, f);
}
var Hp = Vp,
  Wp = zo,
  Xp = Ka,
  zp = ac,
  Kp = Hp,
  Up = Ie,
  qp = si,
  Zp = ai;
function li(e, t, n, i, s) {
  e !== t &&
    zp(
      t,
      function (l, c) {
        if ((s || (s = new Wp()), Up(l))) Kp(e, t, c, n, li, i, s);
        else {
          var r = i ? i(Zp(e, c), l, c + '', e, t, s) : void 0;
          r === void 0 && (r = l), Xp(e, c, r);
        }
      },
      qp,
    );
}
var Jp = li;
function Qp(e) {
  return e;
}
var ri = Qp;
function Yp(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var ef = Yp,
  tf = ef,
  zn = Math.max;
function nf(e, t, n) {
  return (
    (t = zn(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (var i = arguments, s = -1, l = zn(i.length - t, 0), c = Array(l); ++s < l; ) c[s] = i[t + s];
      s = -1;
      for (var r = Array(t + 1); ++s < t; ) r[s] = i[s];
      return (r[t] = n(c)), tf(e, this, r);
    }
  );
}
var af = nf;
function sf(e) {
  return function () {
    return e;
  };
}
var lf = sf,
  rf = lf,
  Kn = za,
  of = ri,
  cf = Kn
    ? function (e, t) {
        return Kn(e, 'toString', { configurable: !0, enumerable: !1, value: rf(t), writable: !0 });
      }
    : of,
  df = cf,
  pf = 800,
  ff = 16,
  mf = Date.now;
function uf(e) {
  var t = 0,
    n = 0;
  return function () {
    var i = mf(),
      s = ff - (i - n);
    if (((n = i), s > 0)) {
      if (++t >= pf) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var gf = uf,
  hf = df,
  bf = gf,
  vf = bf(hf),
  xf = vf,
  Of = ri,
  _f = af,
  yf = xf;
function Ef(e, t) {
  return yf(_f(e, t, Of), e + '');
}
var Cf = Ef,
  wf = ht,
  Sf = cn,
  Tf = ii,
  If = Ie;
function Lf(e, t, n) {
  if (!If(n)) return !1;
  var i = typeof t;
  return (i == 'number' ? Sf(n) && Tf(t, n.length) : i == 'string' && t in n) ? wf(n[t], e) : !1;
}
var Pf = Lf,
  Nf = Cf,
  kf = Pf;
function Af(e) {
  return Nf(function (t, n) {
    var i = -1,
      s = n.length,
      l = s > 1 ? n[s - 1] : void 0,
      c = s > 2 ? n[2] : void 0;
    for (
      l = e.length > 3 && typeof l == 'function' ? (s--, l) : void 0,
        c && kf(n[0], n[1], c) && ((l = s < 3 ? void 0 : l), (s = 1)),
        t = Object(t);
      ++i < s;

    ) {
      var r = n[i];
      r && e(t, r, i, l);
    }
    return t;
  });
}
var $f = Af,
  Rf = Jp,
  Mf = $f,
  Bf = Mf(function (e, t, n, i) {
    Rf(e, t, n, i);
  }),
  jf = Bf;
const Lt = Ri(jf);
function oi(...e) {
  const t = e[0],
    n = e.slice(1);
  return n.length
    ? Lt(Lt({}, t), ...n, (i, s, l) => {
        if (l === 'children') return i && s ? a.cloneElement(i, { children: s }) : Object.assign(Object.assign({}, s), i);
        if (l === 'className') return y(i, s);
      })
    : Lt({}, t);
}
const ci = { name: '--pf-v5-c-table__sticky-cell--MinWidth', value: '12.5rem', var: 'var(--pf-v5-c-table__sticky-cell--MinWidth)' },
  di = { name: '--pf-v5-c-table__sticky-cell--Left', value: '0', var: 'var(--pf-v5-c-table__sticky-cell--Left)' },
  pi = { name: '--pf-v5-c-table__sticky-cell--Right', value: '0', var: 'var(--pf-v5-c-table__sticky-cell--Right)' },
  Df = e => {
    var {
        children: t,
        className: n,
        component: i = 'th',
        dataLabel: s,
        scope: l = 'col',
        textCenter: c = !1,
        sort: r = null,
        modifier: d,
        select: o = null,
        expand: f = null,
        tooltip: p = '',
        tooltipProps: u,
        onMouseEnter: b = () => {},
        width: g,
        visibility: h,
        innerRef: _,
        info: E,
        isStickyColumn: O = !1,
        hasRightBorder: m = !1,
        hasLeftBorder: C = !1,
        stickyMinWidth: w = '120px',
        stickyLeftOffset: P,
        stickyRightOffset: k,
        isSubheader: N = !1,
        screenReaderText: x,
        'aria-label': S,
      } = e,
      I = $(e, [
        'children',
        'className',
        'component',
        'dataLabel',
        'scope',
        'textCenter',
        'sort',
        'modifier',
        'select',
        'expand',
        'tooltip',
        'tooltipProps',
        'onMouseEnter',
        'width',
        'visibility',
        'innerRef',
        'info',
        'isStickyColumn',
        'hasRightBorder',
        'hasLeftBorder',
        'stickyMinWidth',
        'stickyLeftOffset',
        'stickyRightOffset',
        'isSubheader',
        'screenReaderText',
        'aria-label',
      ]);
    !t &&
      !x &&
      !S &&
      console.warn(
        'Th: Table headers must have an accessible name. If the Th is intended to be visually empty, pass in screenReaderText. If the Th contains only non-text, interactive content such as a checkbox or expand toggle, pass in an aria-label.',
      );
    const [L, B] = a.useState(!1),
      [D, F] = a.useState(!1),
      R = _ || a.createRef(),
      X = se => {
        se.target.offsetWidth < se.target.scrollWidth ? !L && B(!0) : L && B(!1), b(se);
      };
    let M = null;
    r &&
      (r.isFavorites
        ? (M = Ds({ onSort: r?.onSort, columnIndex: r.columnIndex, sortBy: r.sortBy, tooltip: p, tooltipProps: u })())
        : (M = Ra(t, {
            columnIndex: r.columnIndex,
            column: { extraParams: { sortBy: r.sortBy, onSort: r?.onSort } },
            tooltip: p,
            tooltipProps: u,
          })));
    const z = o
        ? Aa(t, {
            rowData: { selected: o.isSelected, disableSelection: o?.isDisabled, props: o?.props },
            column: {
              extraParams: {
                onSelect: o?.onSelect,
                selectVariant: 'checkbox',
                allRowsSelected: o.isSelected,
                isHeaderSelectDisabled: !!o.isHeaderSelectDisabled,
              },
            },
            tooltip: p,
            tooltipProps: u,
          })
        : null,
      V = f
        ? Ba(t, { column: { extraParams: { onCollapse: f?.onToggle, allRowsExpanded: !f.areAllExpanded, collapseAllAriaLabel: '' } } })
        : null,
      J = g ? Ma(g)() : null,
      Y = h ? Da(...h.map(se => ja[se]))() : null;
    let Z = M?.children || z?.children || V?.children || t,
      Q = null;
    E && ((Q = Xs(E)(Z)), (Z = Q.children));
    const ae = oi(M, z, V, J, Y, Q),
      { children: Oe = null, isVisible: ge = null, className: ie = '', component: _e = i } = ae,
      ce = $(ae, ['children', 'isVisible', 'className', 'component']);
    a.useEffect(() => {
      F(R.current.offsetWidth < R.current.scrollWidth);
    }, [R]);
    const me = a.createElement(
      _e,
      Object.assign(
        {
          tabIndex: r || o || !D ? -1 : 0,
          onFocus: p !== null ? X : b,
          onBlur: () => B(!1),
          'data-label': s,
          onMouseEnter: p !== null ? X : b,
          scope: i === 'th' ? l : null,
          ref: R,
          'aria-label': S,
          className: y(
            T.tableTh,
            n,
            c && T.modifiers.center,
            N && T.tableSubhead,
            O && $e.tableStickyCell,
            m && $e.modifiers.borderRight,
            C && $e.modifiers.borderLeft,
            d && T.modifiers[d],
            ie,
          ),
        },
        ce,
        I,
        O && { style: Object.assign({ [ci.name]: w || void 0, [di.name]: P || 0, [pi.name]: k || 0 }, I.style) },
      ),
      Z || (x && a.createElement('span', { className: 'pf-v5-screen-reader' }, x)),
    );
    return p !== null && (p === '' ? typeof Z == 'string' : !0) && !(M || z) && L
      ? a.createElement(
          a.Fragment,
          null,
          me,
          a.createElement(Se, Object.assign({ triggerRef: R, content: p || (p === '' && t), isVisible: !0 }, u)),
        )
      : me;
  },
  xe = a.forwardRef((e, t) => a.createElement(Df, Object.assign({}, e, { innerRef: t })));
xe.displayName = 'Th';
const Ff = (e, { rowData: t }) => {
    const { id: n } = t;
    return { className: '', children: a.createElement(Pa, { id: n }) };
  },
  Gf = e => {
    var {
        children: t,
        className: n,
        isActionCell: i = !1,
        component: s = 'td',
        dataLabel: l,
        textCenter: c = !1,
        modifier: r,
        select: d = null,
        actions: o = null,
        expand: f = null,
        treeRow: p = null,
        compoundExpand: u = null,
        noPadding: b,
        width: g,
        visibility: h,
        innerRef: _,
        favorites: E = null,
        draggableRow: O = null,
        tooltip: m = '',
        onMouseEnter: C = () => {},
        isStickyColumn: w = !1,
        hasRightBorder: P = !1,
        hasLeftBorder: k = !1,
        stickyMinWidth: N = '120px',
        stickyLeftOffset: x,
        stickyRightOffset: S,
      } = e,
      I = $(e, [
        'children',
        'className',
        'isActionCell',
        'component',
        'dataLabel',
        'textCenter',
        'modifier',
        'select',
        'actions',
        'expand',
        'treeRow',
        'compoundExpand',
        'noPadding',
        'width',
        'visibility',
        'innerRef',
        'favorites',
        'draggableRow',
        'tooltip',
        'onMouseEnter',
        'isStickyColumn',
        'hasRightBorder',
        'hasLeftBorder',
        'stickyMinWidth',
        'stickyLeftOffset',
        'stickyRightOffset',
      ]);
    const [L, B] = a.useState(!1),
      [D, F] = a.useState(!1),
      R = _ || a.createRef(),
      X = de => {
        de.target.offsetWidth < de.target.scrollWidth ? !L && B(!0) : L && B(!1), C(de);
      },
      M = d
        ? Aa(t, {
            rowIndex: d.rowIndex,
            rowData: { selected: d.isSelected, disableSelection: d?.isDisabled, props: d?.props },
            column: { extraParams: { onSelect: d?.onSelect, selectVariant: d.variant || 'checkbox' } },
          })
        : null,
      z = E
        ? zs(null, {
            rowIndex: E?.rowIndex,
            rowData: { favorited: E.isFavorited, favoritesProps: E?.props },
            column: { extraParams: { onFavorite: E?.onFavorite } },
          })
        : null,
      V = O !== null ? Ff(null, { rowData: { id: O.id } }) : null,
      J = o ? Fs(o.items, null, null) : null,
      Y = J
        ? J(null, {
            rowIndex: o?.rowIndex,
            rowData: { disableActions: o?.isDisabled },
            column: {
              extraParams: {
                dropdownPosition: o?.dropdownPosition,
                dropdownDirection: o?.dropdownDirection,
                menuAppendTo: o?.menuAppendTo,
                actionsToggle: o?.actionsToggle,
              },
            },
          })
        : null,
      Z =
        f !== null
          ? Ba(null, {
              rowIndex: f.rowIndex,
              columnIndex: f?.columnIndex,
              rowData: { isOpen: f.isExpanded },
              column: { extraParams: { onCollapse: f?.onToggle, expandId: f?.expandId } },
            })
          : null,
      Q =
        u !== null
          ? Hs(
              { title: t, props: { isOpen: u.isExpanded } },
              {
                rowIndex: u?.rowIndex,
                columnIndex: u?.columnIndex,
                column: { extraParams: { onExpand: u?.onToggle, expandId: u?.expandId } },
              },
            )
          : null,
      ae = g ? Ma(g)() : null,
      Oe = h ? Da(...h.map(de => ja[de]))() : null,
      ge =
        p !== null
          ? Ks(p.onCollapse, p.onCheckChange, p.onToggleRowDetails)({ title: t }, { rowIndex: p.rowIndex, rowData: { props: p.props } })
          : null,
      ie = oi(M, Y, Z, Q, ae, Oe, z, ge, V),
      { isVisible: _e = null, children: ce = null, className: me = '', component: ye = s } = ie,
      Le = $(ie, ['isVisible', 'children', 'className', 'component']),
      se = (n && n.includes(le.tableTreeViewTitleCell)) || (me && me.includes(le.tableTreeViewTitleCell));
    a.useEffect(() => {
      F(R.current.offsetWidth < R.current.scrollWidth);
    }, [R]);
    const he = a.createElement(
      ye,
      Object.assign(
        { tabIndex: (d || !D) && r !== 'truncate' ? -1 : 0 },
        !se && { 'data-label': l },
        {
          onFocus: m !== null ? X : C,
          onBlur: () => B(!1),
          onMouseEnter: m !== null ? X : C,
          className: y(
            T.tableTd,
            n,
            i && T.tableAction,
            c && T.modifiers.center,
            b && T.modifiers.noPadding,
            w && $e.tableStickyCell,
            P && $e.modifiers.borderRight,
            k && $e.modifiers.borderLeft,
            T.modifiers[r],
            V && T.tableDraggable,
            me,
          ),
          ref: R,
        },
        Le,
        I,
        w && { style: Object.assign({ [ci.name]: N || void 0, [di.name]: x || 0, [pi.name]: S || 0 }, I.style) },
      ),
      ce || t,
    );
    return m !== null && (m === '' ? typeof t == 'string' : !0) && L
      ? a.createElement(a.Fragment, null, he, a.createElement(Se, { triggerRef: R, content: m || (m === '' && t), isVisible: !0 }))
      : he;
  },
  fe = a.forwardRef((e, t) => a.createElement(Gf, Object.assign({}, e, { innerRef: t })));
fe.displayName = 'Td';
const Vf = ({ resource: e, permissions: t, onClose: n }) => {
    const { t: i } = Be(),
      s = ft(),
      { addAlert: l, addError: c } = mt(),
      r = oa(),
      { control: d, reset: o, handleSubmit: f } = r,
      { fields: p } = ca({ control: d, name: 'permissions' });
    qn(() => o({ permissions: t }), []);
    const u = async ({ permissions: b }) => {
      try {
        await Promise.all(b.map(g => ma(s, e._id, [g]))), l(i('updateSuccess')), n();
      } catch (g) {
        c(i('updateError', { error: g }).toString());
      }
    };
    return v(Xt, {
      title: i('editTheResource', { name: e.name }),
      variant: 'medium',
      isOpen: !0,
      onClose: n,
      actions: [v(H, { variant: 'primary', id: 'done', type: 'submit', form: 'edit-form', children: i('done') }, 'confirm')],
      children: v(Kt, {
        id: 'edit-form',
        onSubmit: f(u),
        children: v(da, {
          ...r,
          children: p.map((b, g) =>
            W(
              hi,
              {
                children: [
                  v(Mi, { name: `permissions.${g}.username`, label: i('user'), isDisabled: !0 }),
                  v(pa, {
                    id: `permissions-${b.id}`,
                    name: `permissions.${g}.scopes`,
                    label: 'permissions',
                    variant: 'typeaheadMulti',
                    controller: { defaultValue: [] },
                    options: e.scopes.map(({ name: h, displayName: _ }) => ({ key: h, value: _ || h })),
                  }),
                ],
              },
              b.id,
            ),
          ),
        }),
      }),
    });
  },
  Hf = ({ resource: e, refresh: t }) => {
    const { t: n } = Be(),
      i = ft(),
      { addAlert: s, addError: l } = mt(),
      [c, r] = ve(!1),
      d = () => r(!c),
      o = async (f, p = !1) => {
        try {
          const u = await ua({ context: i }, e._id),
            { scopes: b, username: g } = u.find(h => h.username === f.username) || { scopes: [], username: f.username };
          await ga(i, e._id, g, p ? [...b, ...f.scopes] : b), s(n('shareSuccess')), d(), t();
        } catch (u) {
          l(n('shareError', { error: u }).toString());
        }
      };
    return W(et, {
      children: [
        W(H, {
          variant: 'link',
          onClick: d,
          children: [v(Jn, { size: 'lg', children: v(Rs, {}) }), v(Qn, { children: e.shareRequests?.length })],
        }),
        v(Xt, {
          title: n('permissionRequest', { name: e.name }),
          variant: Bi.large,
          isOpen: c,
          onClose: d,
          actions: [v(H, { variant: 'link', onClick: d, children: n('close') }, 'close')],
          children: W(nn, {
            'aria-label': n('resources'),
            children: [
              v(an, {
                children: W(Ae, {
                  children: [
                    v(xe, { children: n('requestor') }),
                    v(xe, { children: n('permissionRequests') }),
                    v(xe, { 'aria-hidden': 'true' }),
                  ],
                }),
              }),
              v(sn, {
                children: e.shareRequests?.map(f =>
                  W(
                    Ae,
                    {
                      children: [
                        W(fe, {
                          children: [
                            f.firstName,
                            ' ',
                            f.lastName,
                            ' ',
                            f.lastName ? '' : f.username,
                            v('br', {}),
                            v(ji, { component: 'small', children: f.email }),
                          ],
                        }),
                        v(fe, { children: f.scopes.map(p => v(zt, { isReadOnly: !0, children: p }, p.toString())) }),
                        W(fe, {
                          children: [
                            v(H, {
                              onClick: () => {
                                o(f, !0);
                              },
                              children: n('accept'),
                            }),
                            v(H, {
                              onClick: () => {
                                o(f);
                              },
                              className: 'pf-v5-u-ml-sm',
                              variant: 'danger',
                              children: n('deny'),
                            }),
                          ],
                        }),
                      ],
                    },
                    f.username,
                  ),
                ),
              }),
            ],
          }),
        }),
      ],
    });
  },
  Wf = ({ count: e, first: t, max: n, onNextClick: i, onPreviousClick: s, onPerPageSelect: l, onFilter: c, hasNext: r }) => {
    const { t: d } = Be(),
      [o, f] = ve(''),
      p = Math.round(t / n) + 1;
    return v(qe, {
      children: W(je, {
        children: [
          v(Ue, {
            children: v(_a, {
              placeholder: d('filterByName'),
              'aria-label': d('filterByName'),
              value: o,
              onChange: (u, b) => {
                f(b);
              },
              onSearch: () => c(o),
              onKeyDown: u => {
                u.key === 'Enter' && c(o);
              },
              onClear: () => {
                f(''), c('');
              },
            }),
          }),
          v(Ue, {
            variant: 'pagination',
            children: v(Qt, {
              isCompact: !0,
              perPageOptions: [
                { title: '5', value: 5 },
                { title: '10', value: 10 },
                { title: '20', value: 20 },
              ],
              toggleTemplate: ({ firstIndex: u, lastIndex: b }) => W('b', { children: [u, ' - ', b] }),
              itemCount: e + (p - 1) * n + (r ? 1 : 0),
              page: p,
              perPage: n,
              onNextClick: (u, b) => i((b - 1) * n),
              onPreviousClick: (u, b) => s((b - 1) * n),
              onPerPageSelect: (u, b, g) => l(g - 1, b),
            }),
          }),
        ],
      }),
    });
  },
  fi = ({ permissions: e = [] }) =>
    v('div', {
      'data-testid': `shared-with-${e.length ? e.map(t => t.username) : 'none'}`,
      children: W(Ki, {
        i18nKey: 'resourceSharedWith',
        count: e.length,
        children: [
          v('strong', { children: { username: e[0] ? e[0].username : void 0 } }),
          v('strong', { children: { other: e.length - 1 } }),
        ],
      }),
    }),
  Xf = ({ resource: e, permissions: t, open: n, onClose: i }) => {
    const { t: s } = Be(),
      l = ft(),
      { addAlert: c, addError: r } = mt(),
      d = oa(),
      {
        control: o,
        register: f,
        reset: p,
        formState: { errors: u, isValid: b },
        setError: g,
        clearErrors: h,
        handleSubmit: _,
      } = d,
      { fields: E, append: O, remove: m } = ca({ control: o, name: 'usernames' });
    qn(() => {
      E.length === 0 && O({ value: '' });
    }, [E]);
    const w = Di({ control: o, name: 'usernames', defaultValue: [] }).every(({ value: N }) => N.trim().length === 0),
      P = async ({ usernames: N, permissions: x }) => {
        try {
          await Promise.all(N.filter(({ value: S }) => S !== '').map(({ value: S }) => ga(l, e._id, S, x))), c(s('shareSuccess')), i();
        } catch (S) {
          r(s('shareError', { error: S }).toString());
        }
        p({});
      },
      k = async () => {
        const N = E.map(L => L.value).filter(L => L !== ''),
          x = t?.map(L => [L.username, L.email]).flat(),
          S = N.length > 0,
          I = N.filter(L => x?.includes(L)).length !== 0;
        return !S || I ? g('usernames', { message: s(S ? 'resourceAlreadyShared' : 'required') }) : h(), S && !I;
      };
    return v(Xt, {
      title: s('shareTheResource', { name: e.name }),
      variant: 'medium',
      isOpen: n,
      onClose: i,
      actions: [
        v(
          H,
          { variant: 'primary', 'data-testid': 'done', isDisabled: !b, type: 'submit', form: 'share-form', children: s('done') },
          'confirm',
        ),
        v(H, { variant: 'link', onClick: i, children: s('cancel') }, 'cancel'),
      ],
      children: W(Kt, {
        id: 'share-form',
        onSubmit: _(P),
        children: [
          W(ke, {
            label: s('shareUser'),
            type: 'string',
            fieldId: 'users',
            isRequired: !0,
            children: [
              W(tt, {
                children: [
                  v(be, {
                    children: v(ze, {
                      id: 'users',
                      'data-testid': 'users',
                      placeholder: s('usernamePlaceholder'),
                      validated: u.usernames ? un.error : un.default,
                      ...f(`usernames.${E.length - 1}.value`, { validate: k }),
                    }),
                  }),
                  v(be, {
                    children: v(
                      H,
                      { variant: 'primary', 'data-testid': 'add', onClick: () => O({ value: '' }), isDisabled: w, children: s('add') },
                      'add-user',
                    ),
                  }),
                ],
              }),
              E.length > 1 &&
                v(fa, {
                  categoryName: s('shareWith'),
                  children: E.map((N, x) => x !== E.length - 1 && v(zt, { onClick: () => m(x), children: N.value }, N.id)),
                }),
              u.usernames && v(Fi, { message: u.usernames.message }),
            ],
          }),
          v(da, {
            ...d,
            children: v(ke, {
              label: '',
              fieldId: 'permissions-selected',
              'data-testid': 'permissions',
              children: v(pa, {
                name: 'permissions',
                variant: 'typeaheadMulti',
                controller: { defaultValue: [] },
                options: e.scopes.map(({ name: N, displayName: x }) => ({ key: N, value: x || N })),
              }),
            }),
          }),
          v(ke, { children: v(fi, { permissions: t }) }),
        ],
      }),
    });
  },
  Un = ({ isShared: e = !1 }) => {
    const { t } = Be(),
      n = ft(),
      { addAlert: i, addError: s } = mt(),
      [l, c] = ve({ first: '0', max: '5' }),
      [r, d] = ve(),
      [o, f] = ve(),
      [p, u] = ve({}),
      [b, g] = ve(1),
      h = () => g(b + 1);
    if (
      (Gi(
        async m => {
          const C = await Wi({ signal: m, context: n }, l, e);
          return e || (await Promise.all(C.data.map(async w => (w.shareRequests = await Xi(w._id, { signal: m, context: n }))))), C;
        },
        ({ data: m, links: C }) => {
          f(m), d(C);
        },
        [l, b],
      ),
      !o)
    )
      return v(Vi, {});
    const _ = async m => {
        let C = p[m]?.permissions || [];
        return p[m] || (C = await ua({ context: n }, m)), C;
      },
      E = async m => {
        try {
          const C = (await _(m._id)).map(({ username: w }) => ({ username: w, scopes: [] }));
          await ma(n, m._id, C), u({}), i(t('unShareSuccess'));
        } catch (C) {
          s(t('unShareError', { error: C }).toString());
        }
      },
      O = async (m, C, w) => {
        const P = await _(m);
        u({ ...p, [m]: { ...p[m], [C]: w, permissions: P } });
      };
    return W(et, {
      children: [
        v(Wf, {
          onFilter: m => c({ ...l, name: m }),
          count: o.length,
          first: parseInt(l.first),
          max: parseInt(l.max),
          onNextClick: () => c(r?.next || {}),
          onPreviousClick: () => c(r?.prev || {}),
          onPerPageSelect: (m, C) => c({ first: `${m}`, max: `${C}` }),
          hasNext: !!r?.next,
        }),
        W(nn, {
          'aria-label': t('resources'),
          children: [
            v(an, {
              children: W(Ae, {
                children: [
                  v(xe, { 'aria-hidden': 'true' }),
                  v(xe, { children: t('resourceName') }),
                  v(xe, { children: t('application') }),
                  v(xe, { 'aria-hidden': e, children: e ? '' : t('permissionRequests') }),
                ],
              }),
            }),
            o.map((m, C) =>
              W(
                sn,
                {
                  isExpanded: p[m._id]?.rowOpen,
                  children: [
                    W(Ae, {
                      children: [
                        v(fe, {
                          'data-testid': `expand-${m.name}`,
                          expand: e
                            ? void 0
                            : { isExpanded: p[m._id]?.rowOpen || !1, rowIndex: C, onToggle: () => O(m._id, 'rowOpen', !p[m._id]?.rowOpen) },
                        }),
                        v(fe, { dataLabel: t('resourceName'), 'data-testid': `row[${C}].name`, children: m.name }),
                        v(fe, {
                          dataLabel: t('application'),
                          children: W('a', { href: m.client.baseUrl, children: [m.client.name || m.client.clientId, ' ', v(Hi, {})] }),
                        }),
                        W(fe, {
                          dataLabel: t('permissionRequests'),
                          children: [
                            m.shareRequests && m.shareRequests.length > 0 && v(Hf, { resource: m, refresh: () => h() }),
                            v(Xf, {
                              resource: m,
                              permissions: p[m._id]?.permissions,
                              open: p[m._id]?.shareDialogOpen || !1,
                              onClose: () => u({}),
                            }),
                            p[m._id]?.editDialogOpen && v(Vf, { resource: m, permissions: p[m._id]?.permissions, onClose: () => u({}) }),
                          ],
                        }),
                        e
                          ? v(fe, {
                              children:
                                m.scopes.length > 0 &&
                                v(fa, {
                                  categoryName: t('permissions'),
                                  children: m.scopes.map(w => v(zt, { isReadOnly: !0, children: w.displayName || w.name }, w.name)),
                                }),
                            })
                          : v(fe, {
                              isActionCell: !0,
                              children: W(Zt, {
                                breakpoint: 'lg',
                                children: [
                                  v(Ea, {
                                    children: W(Ca, {
                                      groupType: 'button',
                                      children: [
                                        v(Rt, {
                                          children: W(H, {
                                            'data-testid': `share-${m.name}`,
                                            variant: 'link',
                                            onClick: () => O(m._id, 'shareDialogOpen', !0),
                                            children: [v(Cn, {}), ' ', t('share')],
                                          }),
                                        }),
                                        v(Rt, {
                                          children: v(Nt, {
                                            popperProps: { position: 'right' },
                                            onOpenChange: w => O(m._id, 'contextOpen', w),
                                            toggle: w =>
                                              v(st, {
                                                variant: 'plain',
                                                ref: w,
                                                onClick: () => O(m._id, 'contextOpen', !p[m._id]?.contextOpen),
                                                isExpanded: p[m._id]?.contextOpen,
                                                children: v(kt, {}),
                                              }),
                                            isOpen: !!p[m._id]?.contextOpen,
                                            children: W(At, {
                                              children: [
                                                W(at, {
                                                  isDisabled: p[m._id]?.permissions?.length === 0,
                                                  onClick: () => O(m._id, 'editDialogOpen', !0),
                                                  children: [v(yn, {}), ' ', t('edit')],
                                                }),
                                                v(gn, {
                                                  buttonTitle: W(et, { children: [v(En, {}), ' ', t('unShare')] }),
                                                  modalTitle: t('unShare'),
                                                  continueLabel: t('confirm'),
                                                  cancelLabel: t('cancel'),
                                                  component: at,
                                                  onContinue: () => E(m),
                                                  isDisabled: p[m._id]?.permissions?.length === 0,
                                                  children: t('unShareAllConfirm'),
                                                }),
                                              ],
                                            }),
                                          }),
                                        }),
                                      ],
                                    }),
                                  }),
                                  v(ya, {
                                    children: v(Nt, {
                                      popperProps: { position: 'right' },
                                      onOpenChange: w => O(m._id, 'contextOpen', w),
                                      toggle: w =>
                                        v(st, {
                                          variant: 'plain',
                                          ref: w,
                                          isExpanded: p[m._id]?.contextOpen,
                                          onClick: () => O(m._id, 'contextOpen', !p[m._id]?.contextOpen),
                                          children: v(kt, {}),
                                        }),
                                      isOpen: !!p[m._id]?.contextOpen,
                                      children: W(At, {
                                        children: [
                                          W(
                                            nt,
                                            {
                                              isShared: !0,
                                              onClick: () => O(m._id, 'shareDialogOpen', !0),
                                              children: [v(Cn, {}), ' ', t('share')],
                                            },
                                            'share',
                                          ),
                                          W(
                                            nt,
                                            {
                                              isShared: !0,
                                              onClick: () => O(m._id, 'editDialogOpen', !0),
                                              isDisabled: p[m._id]?.permissions?.length === 0,
                                              children: [v(yn, {}), ' ', t('edit')],
                                            },
                                            'edit',
                                          ),
                                          v(
                                            gn,
                                            {
                                              buttonTitle: W(et, { children: [v(En, {}), ' ', t('unShare')] }),
                                              modalTitle: t('unShare'),
                                              continueLabel: t('confirm'),
                                              cancelLabel: t('cancel'),
                                              component: nt,
                                              onContinue: () => E(m),
                                              isDisabled: p[m._id]?.permissions?.length === 0,
                                              children: t('unShareAllConfirm'),
                                            },
                                            'unShare',
                                          ),
                                        ],
                                      }),
                                    }),
                                  }),
                                ],
                              }),
                            }),
                      ],
                    }),
                    v(Ae, {
                      isExpanded: p[m._id]?.rowOpen || !1,
                      children: v(fe, {
                        colSpan: 4,
                        textCenter: !0,
                        children: v(Na, { children: v(fi, { permissions: p[m._id]?.permissions }) }),
                      }),
                    }),
                  ],
                },
                m.name,
              ),
            ),
          ],
        }),
      ],
    });
  },
  tm = () => {
    const { t: e } = Be(),
      [t, n] = ve(0);
    return v(Ui, {
      title: e('resources'),
      description: e('resourceIntroMessage'),
      children: W(Me, {
        activeKey: t,
        onSelect: (i, s) => n(s),
        mountOnEnter: !0,
        unmountOnExit: !0,
        children: [
          v(Mt, { 'data-testid': 'myResources', eventKey: 0, title: v(lt, { children: e('myResources') }), children: v(Un, {}) }),
          v(Mt, {
            'data-testid': 'sharedWithMe',
            eventKey: 1,
            title: v(lt, { children: e('sharedWithMe') }),
            children: v(Un, { isShared: !0 }),
          }),
        ],
      }),
    });
  };
export { tm as Resources, tm as default };
//# sourceMappingURL=Resources-DBqWj7W5.js.map
