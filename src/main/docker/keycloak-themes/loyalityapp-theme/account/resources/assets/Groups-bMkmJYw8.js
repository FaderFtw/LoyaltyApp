import { jsx as e, jsxs as C } from 'react/jsx-runtime';
import { useState as n } from 'react';
import { u as L, l as D, a as M, o as p } from './main-RBOOfBld.js';
import { f as w } from './methods-DAviXuS2.js';
import { P as k } from './Page-d76ZI0ER.js';
import { D as $, a as l, b as o } from './DataListItemRow-yfWD8Q-p.js';
import { D as c, a as s } from './DataListItemCells-DP77jxpd.js';
import 'react-dom';
const H = () => {
  const { t: r } = L(),
    u = D(),
    [b, g] = n([]),
    [h, f] = n(!1);
  M(
    i => w({ signal: i, context: u }),
    i => {
      h ||
        i.forEach(t =>
          m(
            t,
            i,
            i.map(({ path: d }) => d),
          ),
        ),
        g(i);
    },
    [h],
  );
  const m = (i, t, d) => {
    const a = i.path.slice(0, i.path.lastIndexOf('/'));
    a && !d.includes(a) && ((i = { name: a.slice(a.lastIndexOf('/') + 1), path: a }), t.push(i), d.push(a), m(i, t, d));
  };
  return e(k, {
    title: r('groups'),
    description: r('groupDescriptionLabel'),
    children: C($, {
      id: 'groups-list',
      'aria-label': r('groups'),
      isCompact: !0,
      children: [
        e(l, {
          id: 'groups-list-header',
          'aria-label': r('groupsListHeader'),
          children: e(o, {
            children: e(c, {
              dataListCells: [
                e(
                  s,
                  {
                    children: e(p, {
                      label: r('directMembership'),
                      id: 'directMembership-checkbox',
                      'data-testid': 'directMembership-checkbox',
                      isChecked: h,
                      onChange: (i, t) => f(t),
                    }),
                  },
                  'directMembership-header',
                ),
              ],
            }),
          }),
        }),
        e(l, {
          id: 'groups-list-columns-names',
          'aria-label': r('groupsListColumnsNames'),
          children: e(o, {
            children: e(c, {
              dataListCells: [
                e(s, { width: 2, children: e('strong', { children: r('name') }) }, 'group-name-header'),
                e(s, { width: 2, children: e('strong', { children: r('path') }) }, 'group-path-header'),
                e(s, { width: 2, children: e('strong', { children: r('directMembership') }) }, 'group-direct-membership-header'),
              ],
            }),
          }),
        }),
        b.map((i, t) =>
          e(
            l,
            {
              id: `${t}-group`,
              'aria-labelledby': 'groups-list',
              children: e(o, {
                children: e(c, {
                  dataListCells: [
                    e(s, { 'data-testid': `group[${t}].name`, width: 2, children: i.name }, 'name-' + t),
                    e(s, { id: `${t}-group-path`, width: 2, children: i.path }, 'path-' + t),
                    e(
                      s,
                      {
                        id: `${t}-group-directMembership`,
                        width: 2,
                        children: e(p, { id: `${t}-checkbox-directMembership`, isChecked: i.id != null, isDisabled: !0 }),
                      },
                      'directMembership-' + t,
                    ),
                  ],
                }),
              }),
            },
            'group-' + t,
          ),
        ),
      ],
    }),
  });
};
export { H as Groups, H as default };
//# sourceMappingURL=Groups-bMkmJYw8.js.map
