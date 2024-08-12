import { _ as u, d as v, K as I } from './main-RBOOfBld.js';
import * as a from 'react';
const e = {
    dataList: 'pf-v5-c-data-list',
    dataListAction: 'pf-v5-c-data-list__action',
    dataListCell: 'pf-v5-c-data-list__cell',
    dataListCheck: 'pf-v5-c-data-list__check',
    dataListExpandableContent: 'pf-v5-c-data-list__expandable-content',
    dataListExpandableContentBody: 'pf-v5-c-data-list__expandable-content-body',
    dataListItem: 'pf-v5-c-data-list__item',
    dataListItemAction: 'pf-v5-c-data-list__item-action',
    dataListItemContent: 'pf-v5-c-data-list__item-content',
    dataListItemControl: 'pf-v5-c-data-list__item-control',
    dataListItemDraggableButton: 'pf-v5-c-data-list__item-draggable-button',
    dataListItemDraggableIcon: 'pf-v5-c-data-list__item-draggable-icon',
    dataListItemRow: 'pf-v5-c-data-list__item-row',
    dataListText: 'pf-v5-c-data-list__text',
    dataListToggle: 'pf-v5-c-data-list__toggle',
    dataListToggleIcon: 'pf-v5-c-data-list__toggle-icon',
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
      icon: 'pf-m-icon',
      alignRight: 'pf-m-align-right',
      noFill: 'pf-m-no-fill',
      flex_2: 'pf-m-flex-2',
      flex_3: 'pf-m-flex-3',
      flex_4: 'pf-m-flex-4',
      flex_5: 'pf-m-flex-5',
      gridNone: 'pf-m-grid-none',
      gridSm: 'pf-m-grid-sm',
      gridMd: 'pf-m-grid-md',
      gridLg: 'pf-m-grid-lg',
      gridXl: 'pf-m-grid-xl',
      grid_2xl: 'pf-m-grid-2xl',
      compact: 'pf-m-compact',
      dragOver: 'pf-m-drag-over',
      truncate: 'pf-m-truncate',
      breakWord: 'pf-m-break-word',
      nowrap: 'pf-m-nowrap',
      clickable: 'pf-m-clickable',
      selected: 'pf-m-selected',
      ghostRow: 'pf-m-ghost-row',
      expanded: 'pf-m-expanded',
      disabled: 'pf-m-disabled',
      noPadding: 'pf-m-no-padding',
    },
    themeDark: 'pf-v5-theme-dark',
  },
  D = {
    none: e.modifiers.gridNone,
    always: 'pf-m-grid',
    sm: e.modifiers.gridSm,
    md: e.modifiers.gridMd,
    lg: e.modifiers.gridLg,
    xl: e.modifiers.gridXl,
    '2xl': e.modifiers.grid_2xl,
  };
var w;
(function (d) {
  (d.nowrap = 'nowrap'), (d.truncate = 'truncate'), (d.breakWord = 'breakWord');
})(w || (w = {}));
const y = a.createContext({ isSelectable: !1 });
class C extends a.Component {
  constructor(l) {
    super(l), (this.ref = a.createRef()), (this.getIndex = n => Array.from(this.ref.current.children).findIndex(r => r.id === n));
  }
  render() {
    const l = this.props,
      {
        className: n,
        children: r,
        'aria-label': c,
        onSelectDataListItem: i,
        selectedDataListItemId: s,
        isCompact: g,
        wrapModifier: b,
        gridBreakpoint: m,
        onSelectableRowChange: L,
      } = l,
      p = u(l, [
        'className',
        'children',
        'aria-label',
        'onSelectDataListItem',
        'selectedDataListItemId',
        'isCompact',
        'wrapModifier',
        'gridBreakpoint',
        'onSelectableRowChange',
      ]),
      _ = i !== void 0,
      x = (h, f) => {
        i(h, f);
      };
    return a.createElement(
      y.Provider,
      { value: { isSelectable: _, selectedDataListItemId: s, updateSelectedDataListItem: x, onSelectableRowChange: L } },
      a.createElement(
        'ul',
        Object.assign(
          {
            className: v(e.dataList, g && e.modifiers.compact, D[m], b && e.modifiers[b], n),
            style: p.style,
            role: 'list',
            'aria-label': c,
          },
          p,
          { ref: this.ref },
        ),
        r,
      ),
    );
  }
}
C.displayName = 'DataList';
C.defaultProps = { children: null, className: '', selectedDataListItemId: '', isCompact: !1, gridBreakpoint: 'md', wrapModifier: null };
class k extends a.Component {
  render() {
    const l = this.props,
      { children: n, isExpanded: r, className: c, id: i, 'aria-labelledby': s, selectableInputAriaLabel: g } = l,
      b = u(l, ['children', 'isExpanded', 'className', 'id', 'aria-labelledby', 'selectableInputAriaLabel']);
    return a.createElement(
      y.Consumer,
      null,
      ({ isSelectable: m, selectedDataListItemId: L, updateSelectedDataListItem: p, onSelectableRowChange: _ }) => {
        const x = t => {
            let o = t.target;
            for (; t.currentTarget !== o; ) {
              if (
                ('onclick' in o && o.onclick) ||
                o.parentNode.classList.contains(e.dataListItemAction) ||
                o.parentNode.classList.contains(e.dataListItemControl)
              )
                return;
              o = o.parentNode;
            }
            p(t, i);
          },
          h = t => {
            [I.Enter, I.Space].includes(t.key) && (t.preventDefault(), p(t, i));
          },
          f = L === i,
          N = g ? { 'aria-label': g } : { 'aria-labelledby': s };
        return a.createElement(
          'li',
          Object.assign(
            {
              id: i,
              className: v(e.dataListItem, r && e.modifiers.expanded, m && e.modifiers.clickable, L && f && e.modifiers.selected, c),
              'aria-labelledby': s,
            },
            m && { tabIndex: 0, onClick: x, onKeyDown: h },
            m && f && { 'aria-selected': !0 },
            b,
          ),
          _ &&
            a.createElement(
              'input',
              Object.assign({ className: 'pf-v5-screen-reader', type: 'radio', checked: f, onChange: t => _(t, i), tabIndex: -1 }, N),
            ),
          a.Children.map(n, t => a.isValidElement(t) && a.cloneElement(t, { rowid: s })),
        );
      },
    );
  }
}
k.displayName = 'DataListItem';
k.defaultProps = { isExpanded: !1, className: '', id: '', children: null, 'aria-labelledby': '' };
const E = d => {
  var { children: l, className: n = '', rowid: r = '', wrapModifier: c = null } = d,
    i = u(d, ['children', 'className', 'rowid', 'wrapModifier']);
  return a.createElement(
    'div',
    Object.assign({ className: v(e.dataListItemRow, n, c && e.modifiers[c]) }, i),
    a.Children.map(l, s => a.isValidElement(s) && a.cloneElement(s, { rowid: r })),
  );
};
E.displayName = 'DataListItemRow';
export { C as D, k as a, E as b, e as s };
//# sourceMappingURL=DataListItemRow-yfWD8Q-p.js.map
