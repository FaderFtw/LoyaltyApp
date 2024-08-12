import { _ as c, d as n, i as C } from './main-RBOOfBld.js';
import * as a from 'react';
import { s as f } from './DataListItemRow-yfWD8Q-p.js';
const z = t => {
  var { className: e = '', children: o = null, id: s = '', isHidden: l = !1, 'aria-label': m, hasNoPadding: p = !1, rowid: h = '' } = t,
    d = c(t, ['className', 'children', 'id', 'isHidden', 'aria-label', 'hasNoPadding', 'rowid']);
  return a.createElement(
    'section',
    Object.assign({ id: s, className: n(f.dataListExpandableContent, e), hidden: l, 'aria-label': m }, d),
    a.createElement('div', { className: n(f.dataListExpandableContentBody, p && f.modifiers.noPadding) }, o),
  );
};
z.displayName = 'DataListContent';
const i = {
    card: 'pf-v5-c-card',
    descriptionList: 'pf-v5-c-description-list',
    descriptionListDescription: 'pf-v5-c-description-list__description',
    descriptionListGroup: 'pf-v5-c-description-list__group',
    descriptionListTerm: 'pf-v5-c-description-list__term',
    descriptionListTermIcon: 'pf-v5-c-description-list__term-icon',
    descriptionListText: 'pf-v5-c-description-list__text',
    modifiers: {
      inlineGrid: 'pf-m-inline-grid',
      autoColumnWidths: 'pf-m-auto-column-widths',
      autoFit: 'pf-m-auto-fit',
      compact: 'pf-m-compact',
      fluid: 'pf-m-fluid',
      fillColumns: 'pf-m-fill-columns',
      displayLg: 'pf-m-display-lg',
      display_2xl: 'pf-m-display-2xl',
      helpText: 'pf-m-help-text',
      '1Col': 'pf-m-1-col',
      '2Col': 'pf-m-2-col',
      '3Col': 'pf-m-3-col',
      horizontal: 'pf-m-horizontal',
      vertical: 'pf-m-vertical',
      '1ColOnSm': 'pf-m-1-col-on-sm',
      '2ColOnSm': 'pf-m-2-col-on-sm',
      '3ColOnSm': 'pf-m-3-col-on-sm',
      horizontalOnSm: 'pf-m-horizontal-on-sm',
      verticalOnSm: 'pf-m-vertical-on-sm',
      '1ColOnMd': 'pf-m-1-col-on-md',
      '2ColOnMd': 'pf-m-2-col-on-md',
      '3ColOnMd': 'pf-m-3-col-on-md',
      horizontalOnMd: 'pf-m-horizontal-on-md',
      verticalOnMd: 'pf-m-vertical-on-md',
      '1ColOnLg': 'pf-m-1-col-on-lg',
      '2ColOnLg': 'pf-m-2-col-on-lg',
      '3ColOnLg': 'pf-m-3-col-on-lg',
      horizontalOnLg: 'pf-m-horizontal-on-lg',
      verticalOnLg: 'pf-m-vertical-on-lg',
      '1ColOnXl': 'pf-m-1-col-on-xl',
      '2ColOnXl': 'pf-m-2-col-on-xl',
      '3ColOnXl': 'pf-m-3-col-on-xl',
      horizontalOnXl: 'pf-m-horizontal-on-xl',
      verticalOnXl: 'pf-m-vertical-on-xl',
      '1ColOn_2xl': 'pf-m-1-col-on-2xl',
      '2ColOn_2xl': 'pf-m-2-col-on-2xl',
      '3ColOn_2xl': 'pf-m-3-col-on-2xl',
      horizontalOn_2xl: 'pf-m-horizontal-on-2xl',
      verticalOn_2xl: 'pf-m-vertical-on-2xl',
    },
  },
  y = {
    name: '--pf-v5-c-description-list--GridTemplateColumns--min',
    value: '0',
    var: 'var(--pf-v5-c-description-list--GridTemplateColumns--min)',
  },
  j = { name: '--pf-v5-c-description-list__term--width', value: '12ch', var: 'var(--pf-v5-c-description-list__term--width)' },
  D = {
    name: '--pf-v5-c-description-list--m-horizontal__term--width',
    value: 'fit-content(20ch)',
    var: 'var(--pf-v5-c-description-list--m-horizontal__term--width)',
  },
  g = (t, e) => {
    const o = e;
    return Object.keys(o || {}).reduce(
      (s, l) =>
        l === 'default'
          ? Object.assign(Object.assign({}, s), { [t]: o[l] })
          : Object.assign(Object.assign({}, s), { [`${t}-on-${l}`]: o[l] }),
      {},
    );
  },
  M = t => {
    var {
        className: e = '',
        children: o = null,
        isHorizontal: s = !1,
        isAutoColumnWidths: l,
        isAutoFit: m,
        isInlineGrid: p,
        isCompact: h,
        isFluid: d,
        isFillColumns: L,
        displaySize: u = 'default',
        columnModifier: x,
        autoFitMinModifier: v,
        termWidth: O,
        horizontalTermWidthModifier: _,
        orientation: N,
        style: r,
      } = t,
      b = c(t, [
        'className',
        'children',
        'isHorizontal',
        'isAutoColumnWidths',
        'isAutoFit',
        'isInlineGrid',
        'isCompact',
        'isFluid',
        'isFillColumns',
        'displaySize',
        'columnModifier',
        'autoFitMinModifier',
        'termWidth',
        'horizontalTermWidthModifier',
        'orientation',
        'style',
      ]);
    return (
      m && v && (r = Object.assign(Object.assign({}, r), g(y.name, v))),
      O && (r = Object.assign(Object.assign({}, r), { [j.name]: O })),
      s && _ && (r = Object.assign(Object.assign({}, r), g(D.name, _))),
      a.createElement(
        'dl',
        Object.assign(
          {
            className: n(
              i.descriptionList,
              (s || d) && i.modifiers.horizontal,
              l && i.modifiers.autoColumnWidths,
              m && i.modifiers.autoFit,
              C(x, i),
              C(N, i),
              p && i.modifiers.inlineGrid,
              h && i.modifiers.compact,
              d && i.modifiers.fluid,
              L && i.modifiers.fillColumns,
              u === 'lg' && i.modifiers.displayLg,
              u === '2xl' && i.modifiers.display_2xl,
              e,
            ),
            style: r,
          },
          b,
        ),
        o,
      )
    );
  };
M.displayName = 'DescriptionList';
const T = t => {
  var { children: e = null, className: o } = t,
    s = c(t, ['children', 'className']);
  return a.createElement(
    'dd',
    Object.assign({ className: n(i.descriptionListDescription, o) }, s),
    a.createElement('div', { className: n(i.descriptionListText) }, e),
  );
};
T.displayName = 'DescriptionListDescription';
const E = t => {
  var { className: e, children: o } = t,
    s = c(t, ['className', 'children']);
  return a.createElement('div', Object.assign({ className: n(i.descriptionListGroup, e) }, s), o);
};
E.displayName = 'DescriptionListGroup';
const G = t => {
  var { children: e, className: o, icon: s } = t,
    l = c(t, ['children', 'className', 'icon']);
  return a.createElement(
    'dt',
    Object.assign({ className: n(i.descriptionListTerm, o) }, l),
    s ? a.createElement('span', { className: n(i.descriptionListTermIcon) }, s) : null,
    a.createElement('span', { className: n(i.descriptionListText) }, e),
  );
};
G.displayName = 'DescriptionListTerm';
export { z as D, M as a, E as b, G as c, T as d };
//# sourceMappingURL=DescriptionListTerm-wtJg4W5p.js.map
