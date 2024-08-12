import { jsx as l, jsxs as W } from 'react/jsx-runtime';
import {
  p as q,
  q as F,
  _ as O,
  t as N,
  d as h,
  A as V,
  u as H,
  l as B,
  v as G,
  r as $,
  a as J,
  S as K,
  w as Q,
  B as E,
  x as X,
  y as Y,
  z as Z,
  n as ee,
  F as te,
  H as ne,
} from './main-RBOOfBld.js';
import * as u from 'react';
import { useState as z } from 'react';
import { s as ae, h as ie, i as se } from './methods-DAviXuS2.js';
import { P as oe } from './Page-d76ZI0ER.js';
import { F as re, A as le } from './Form-Br_aXRv6.js';
import 'react-dom';
const s = {
    dirRtl: 'pf-v5-m-dir-rtl',
    expandableSection: 'pf-v5-c-expandable-section',
    expandableSectionContent: 'pf-v5-c-expandable-section__content',
    expandableSectionToggle: 'pf-v5-c-expandable-section__toggle',
    expandableSectionToggleIcon: 'pf-v5-c-expandable-section__toggle-icon',
    expandableSectionToggleText: 'pf-v5-c-expandable-section__toggle-text',
    modifiers: {
      expanded: 'pf-m-expanded',
      detached: 'pf-m-detached',
      truncate: 'pf-m-truncate',
      limitWidth: 'pf-m-limit-width',
      displayLg: 'pf-m-display-lg',
      indented: 'pf-m-indented',
      active: 'pf-m-active',
      expandTop: 'pf-m-expand-top',
    },
  },
  D = {
    name: '--pf-v5-c-expandable-section--m-truncate__content--LineClamp',
    value: '3',
    var: 'var(--pf-v5-c-expandable-section--m-truncate__content--LineClamp)',
  };
var d;
(function (t) {
  (t.default = 'default'), (t.truncate = 'truncate');
})(d || (d = {}));
const U = (t, e) => {
  !e || t < 1 || e.style.setProperty(D.name, t.toString());
};
class R extends u.Component {
  constructor(e) {
    super(e),
      (this.expandableContentRef = u.createRef()),
      (this.observer = () => {}),
      (this.checkToggleVisibility = () => {
        var n;
        if (!((n = this.expandableContentRef) === null || n === void 0) && n.current) {
          const c = this.props.truncateMaxLines || parseInt(D.value),
            p = this.expandableContentRef.current.scrollHeight / parseInt(getComputedStyle(this.expandableContentRef.current).lineHeight);
          this.setState({ hasToggle: p > c });
        }
      }),
      (this.resize = () => {
        const { offsetWidth: n } = this.expandableContentRef.current;
        this.state.previousWidth !== n && (this.setState({ previousWidth: n }), this.checkToggleVisibility());
      }),
      (this.handleResize = q(this.resize, 250)),
      (this.state = { isExpanded: e.isExpanded, hasToggle: !0, previousWidth: void 0 });
  }
  calculateToggleText(e, n, c, p) {
    return p && n !== '' ? n : !p && c !== '' ? c : e;
  }
  componentDidMount() {
    if (this.props.variant === d.truncate) {
      const e = this.expandableContentRef.current;
      this.setState({ previousWidth: e.offsetWidth }),
        (this.observer = F(e, this.handleResize, !1)),
        this.props.truncateMaxLines && U(this.props.truncateMaxLines, e),
        this.checkToggleVisibility();
    }
  }
  componentDidUpdate(e) {
    if (this.props.variant === d.truncate && (e.truncateMaxLines !== this.props.truncateMaxLines || e.children !== this.props.children)) {
      const n = this.expandableContentRef.current;
      U(this.props.truncateMaxLines, n), this.checkToggleVisibility();
    }
  }
  componentWillUnmount() {
    this.props.variant === d.truncate && this.observer();
  }
  render() {
    const e = this.props,
      {
        onToggle: n,
        isActive: c,
        className: p,
        toggleText: S,
        toggleTextExpanded: f,
        toggleTextCollapsed: C,
        toggleContent: x,
        children: L,
        isExpanded: b,
        isDetached: m,
        displaySize: y,
        isWidthLimited: _,
        isIndented: I,
        contentId: A,
        toggleId: v,
        variant: g,
        truncateMaxLines: i,
      } = e,
      r = O(e, [
        'onToggle',
        'isActive',
        'className',
        'toggleText',
        'toggleTextExpanded',
        'toggleTextCollapsed',
        'toggleContent',
        'children',
        'isExpanded',
        'isDetached',
        'displaySize',
        'isWidthLimited',
        'isIndented',
        'contentId',
        'toggleId',
        'variant',
        'truncateMaxLines',
      ]);
    m &&
      !v &&
      console.warn('ExpandableSection: The toggleId value must be passed in and must match the toggleId of the ExpandableSectionToggle.');
    let o = n,
      a = b;
    const T = A || N('expandable-section-content'),
      M = v || N('expandable-section-toggle');
    b === void 0 &&
      ((a = this.state.isExpanded),
      (o = (k, j) => {
        this.setState({ isExpanded: j }, () => n(k, this.state.isExpanded));
      }));
    const w = this.calculateToggleText(S, f, C, a),
      P =
        !m &&
        u.createElement(
          'button',
          {
            className: h(s.expandableSectionToggle),
            type: 'button',
            'aria-expanded': a,
            'aria-controls': T,
            id: M,
            onClick: k => o(k, !a),
          },
          g !== d.truncate &&
            u.createElement('span', { className: h(s.expandableSectionToggleIcon) }, u.createElement(V, { 'aria-hidden': !0 })),
          u.createElement('span', { className: h(s.expandableSectionToggleText) }, x || w),
        );
    return u.createElement(
      'div',
      Object.assign(
        {
          className: h(
            s.expandableSection,
            a && s.modifiers.expanded,
            c && s.modifiers.active,
            m && s.modifiers.detached,
            y === 'lg' && s.modifiers.displayLg,
            _ && s.modifiers.limitWidth,
            I && s.modifiers.indented,
            g === d.truncate && s.modifiers.truncate,
            p,
          ),
        },
        r,
      ),
      g === d.default && P,
      u.createElement(
        'div',
        {
          ref: this.expandableContentRef,
          className: h(s.expandableSectionContent),
          hidden: g !== d.truncate && !a,
          id: T,
          'aria-labelledby': M,
          role: 'region',
        },
        L,
      ),
      g === d.truncate && this.state.hasToggle && P,
    );
  }
}
R.displayName = 'ExpandableSection';
R.defaultProps = {
  className: '',
  toggleText: '',
  toggleTextExpanded: '',
  toggleTextCollapsed: '',
  onToggle: (t, e) => {},
  isActive: !1,
  isDetached: !1,
  displaySize: 'default',
  isWidthLimited: !1,
  isIndented: !1,
  variant: 'default',
};
const fe = () => {
  const { t } = H(),
    e = B(),
    [n, c] = z(),
    [p, S] = z([]),
    f = G({ mode: 'onChange' }),
    { handleSubmit: C, reset: x, setValue: L, setError: b } = f,
    { addAlert: m, addError: y } = $();
  J(
    i => Promise.all([ie({ signal: i, context: e }), se({ signal: i, context: e })]),
    ([i, r]) => {
      c(i.userProfileMetadata), S(r), x(i), Object.entries(i.attributes || {}).forEach(([o, a]) => L(`attributes[${ne(o)}]`, a));
    },
  );
  const _ = async i => {
    try {
      const r = Object.fromEntries(Object.entries(i.attributes || {}).map(([a, T]) => [Z(a), T]));
      await ae(e, { ...i, attributes: r });
      const o = r.locale?.toString();
      ee.changeLanguage(o, a => {
        a && console.warn('Error(s) loading locale', o, a);
      }),
        e.keycloak.updateToken(),
        m(t('accountUpdatedMessage'));
    } catch (r) {
      y(t('accountUpdatedError').toString()),
        te(
          { responseData: { errors: r } },
          (o, a) => b(o, a),
          (o, a) => t(o, a),
        );
    }
  };
  if (!n) return l(K, {});
  const {
    updateEmailFeatureEnabled: I,
    updateEmailActionEnabled: A,
    isRegistrationEmailAsUsername: v,
    isEditUserNameAllowed: g,
  } = e.environment.features;
  return l(oe, {
    title: t('personalInfo'),
    description: t('personalInfoDescription'),
    children: W(re, {
      isHorizontal: !0,
      onSubmit: C(_),
      children: [
        l(Q, {
          form: f,
          userProfileMetadata: n,
          supportedLocales: p,
          currentLocale: e.environment.locale,
          t: (i, r) => t(i, r),
          renderer: i =>
            i.name === 'email' && I && A && (!v || g)
              ? l(E, {
                  id: 'update-email-btn',
                  variant: 'link',
                  onClick: () => e.keycloak.login({ action: 'UPDATE_EMAIL' }),
                  icon: l(X, {}),
                  iconPosition: 'right',
                  children: t('updateEmail'),
                })
              : void 0,
        }),
        W(le, {
          children: [
            l(E, { 'data-testid': 'save', type: 'submit', id: 'save-btn', variant: 'primary', children: t('save') }),
            l(E, { 'data-testid': 'cancel', id: 'cancel-btn', variant: 'link', onClick: () => x(), children: t('cancel') }),
          ],
        }),
        e.environment.features.deleteAccountAllowed &&
          l(R, {
            'data-testid': 'delete-account',
            toggleText: t('deleteAccount'),
            children: l(Y, {
              isInline: !0,
              title: t('deleteAccount'),
              variant: 'danger',
              actionLinks: l(E, {
                id: 'delete-account-btn',
                variant: 'danger',
                onClick: () => e.keycloak.login({ action: 'delete_account' }),
                className: 'delete-button',
                children: t('delete'),
              }),
              children: t('deleteAccountWarning'),
            }),
          }),
      ],
    }),
  });
};
export { fe as PersonalInfo, fe as default };
//# sourceMappingURL=PersonalInfo-DDTHd0d6.js.map
