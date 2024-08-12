import { _ as oe, B as ne, e as se, d as p, f as ie, g as G } from './main-RBOOfBld.js';
import * as t from 'react';
import { useState as W } from 'react';
const l = {
    button: 'pf-v5-c-button',
    label: 'pf-v5-c-label',
    labelActions: 'pf-v5-c-label__actions',
    labelContent: 'pf-v5-c-label__content',
    labelIcon: 'pf-v5-c-label__icon',
    labelText: 'pf-v5-c-label__text',
    modifiers: {
      compact: 'pf-m-compact',
      blue: 'pf-m-blue',
      green: 'pf-m-green',
      orange: 'pf-m-orange',
      red: 'pf-m-red',
      purple: 'pf-m-purple',
      cyan: 'pf-m-cyan',
      gold: 'pf-m-gold',
      outline: 'pf-m-outline',
      overflow: 'pf-m-overflow',
      add: 'pf-m-add',
      editable: 'pf-m-editable',
      editableActive: 'pf-m-editable-active',
      disabled: 'pf-m-disabled',
    },
    themeDark: 'pf-v5-theme-dark',
  },
  re = {
    button: 'pf-v5-c-button',
    labelGroup: 'pf-v5-c-label-group',
    labelGroupClose: 'pf-v5-c-label-group__close',
    labelGroupLabel: 'pf-v5-c-label-group__label',
    labelGroupList: 'pf-v5-c-label-group__list',
    labelGroupListItem: 'pf-v5-c-label-group__list-item',
    labelGroupMain: 'pf-v5-c-label-group__main',
    labelGroupTextarea: 'pf-v5-c-label-group__textarea',
    modifiers: { category: 'pf-m-category', vertical: 'pf-m-vertical', editable: 'pf-m-editable', textarea: 'pf-m-textarea' },
  },
  ce = { name: '--pf-v5-c-label__text--MaxWidth', value: '100%', var: 'var(--pf-v5-c-label__text--MaxWidth)' },
  pe = {
    blue: l.modifiers.blue,
    cyan: l.modifiers.cyan,
    green: l.modifiers.green,
    orange: l.modifiers.orange,
    purple: l.modifiers.purple,
    red: l.modifiers.red,
    gold: l.modifiers.gold,
    grey: '',
  },
  de = x => {
    var {
        children: i,
        className: S = '',
        color: V = 'grey',
        variant: F = 'filled',
        isCompact: H = !1,
        isDisabled: k = !1,
        isEditable: c = !1,
        editableProps: y,
        textMaxWidth: L,
        tooltipPosition: w,
        icon: O,
        onClose: P,
        onClick: r,
        onEditCancel: R,
        onEditComplete: u,
        closeBtn: K,
        closeBtnAriaLabel: $,
        closeBtnProps: q,
        href: s,
        isOverflowLabel: f,
        render: j,
      } = x,
      z = oe(x, [
        'children',
        'className',
        'color',
        'variant',
        'isCompact',
        'isDisabled',
        'isEditable',
        'editableProps',
        'textMaxWidth',
        'tooltipPosition',
        'icon',
        'onClose',
        'onClick',
        'onEditCancel',
        'onEditComplete',
        'closeBtn',
        'closeBtnAriaLabel',
        'closeBtnProps',
        'href',
        'isOverflowLabel',
        'render',
      ]);
    const [o, d] = W(!1),
      [J, Q] = W(i),
      n = t.useRef(),
      a = t.useRef();
    t.useEffect(
      () => (
        document.addEventListener('mousedown', B),
        document.addEventListener('keydown', D),
        () => {
          document.removeEventListener('mousedown', B), document.removeEventListener('keydown', D);
        }
      ),
    ),
      t.useEffect(() => {
        r && s
          ? console.warn(
              'Link labels cannot have onClick passed, this results in invalid HTML. Please remove either the href or onClick prop.',
            )
          : r &&
            c &&
            console.warn(
              'Editable labels cannot have onClick passed, clicking starts the label edit process. Please remove either the isEditable or onClick prop.',
            );
      }, [r, s, c]);
    const B = e => {
        o && a && a.current && !a.current.contains(e.target) && (a.current.value && u && u(e, a.current.value), d(!1));
      },
      D = e => {
        var E, _;
        const g = e.key;
        if (
          !((!o && (!n || !n.current || !n.current.contains(e.target))) || (o && (!a || !a.current || !a.current.contains(e.target)))) &&
          (o &&
            (g === 'Enter' || g === 'Tab') &&
            (e.preventDefault(),
            e.stopImmediatePropagation(),
            a.current.value && u && u(e, a.current.value),
            d(!1),
            (E = n?.current) === null || E === void 0 || E.focus()),
          o &&
            g === 'Escape' &&
            (e.preventDefault(),
            e.stopImmediatePropagation(),
            a.current.value && ((a.current.value = i), R && R(e, i)),
            d(!1),
            (_ = n?.current) === null || _ === void 0 || _.focus()),
          !o && g === 'Enter')
        ) {
          e.preventDefault(), e.stopImmediatePropagation(), d(!0);
          const ae = e.target,
            h = document.createRange(),
            M = window.getSelection();
          h.selectNodeContents(ae), h.collapse(!1), M.removeAllRanges(), M.addRange(h);
        }
      },
      b = (s || r) && k,
      U = t.createElement(
        ne,
        Object.assign({ type: 'button', variant: 'plain', onClick: P, 'aria-label': $ || `Close ${i}` }, b && { isDisabled: !0 }, q),
        t.createElement(se, null),
      ),
      X = t.createElement('span', { className: p(l.labelActions) }, K || U),
      I = t.createRef(),
      N = t.useRef(),
      [C, Y] = t.useState(!1);
    ie(() => {
      const e = c ? n : I;
      o || Y(e.current && e.current.offsetWidth < e.current.scrollWidth);
    }, [o]);
    const T = t.createElement(
      t.Fragment,
      null,
      O && t.createElement('span', { className: p(l.labelIcon) }, O),
      t.createElement('span', Object.assign({ ref: I, className: p(l.labelText) }, L && { style: { [ce.name]: L } }), i),
    );
    t.useEffect(() => {
      o && a && a.current && a.current.focus();
    }, [a, o]);
    const Z = () => {
      Q(a.current.value);
    };
    let m = 'span';
    s ? (m = 'a') : (c || (r && !f)) && (m = 'button');
    const ee = { type: 'button', onClick: r },
      A = m === 'button',
      te = Object.assign(
        Object.assign(
          Object.assign(
            Object.assign(
              Object.assign(
                Object.assign(Object.assign({ className: p(l.labelContent) }, C && { tabIndex: 0 }), s && { href: s }),
                s && k && { onClick: e => e.preventDefault() },
              ),
              A && ee,
            ),
            c &&
              Object.assign(
                {
                  ref: n,
                  onClick: e => {
                    d(!0), e.stopPropagation();
                  },
                },
                y,
              ),
          ),
          b && A && { disabled: !0 },
        ),
        b && s && { tabindex: -1, 'aria-disabled': !0 },
      );
    let v = t.createElement(m, Object.assign({}, te), T);
    j
      ? (v = t.createElement(
          t.Fragment,
          null,
          C && t.createElement(G, { triggerRef: N, content: i, position: w }),
          j({ className: l.labelContent, content: T, componentRef: N }),
        ))
      : C && (v = t.createElement(G, { content: i, position: w }, v));
    const le = f ? 'button' : 'span';
    return t.createElement(
      le,
      Object.assign({}, z, {
        className: p(
          l.label,
          b && l.modifiers.disabled,
          pe[V],
          F === 'outline' && l.modifiers.outline,
          f && l.modifiers.overflow,
          H && l.modifiers.compact,
          c && re.modifiers.editable,
          o && l.modifiers.editableActive,
          S,
        ),
        onClick: f ? r : void 0,
      }),
      !o && v,
      !o && P && X,
      o &&
        t.createElement(
          'input',
          Object.assign({ className: p(l.labelContent), type: 'text', id: 'editable-input', ref: a, value: J, onChange: Z }, y),
        ),
    );
  };
de.displayName = 'Label';
export { de as L };
//# sourceMappingURL=Label-BwnA8IgW.js.map
