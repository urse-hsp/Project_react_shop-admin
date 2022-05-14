;(self['webpackChunkant_design_pro'] = self['webpackChunkant_design_pro'] || []).push([
  [589],
  {
    72466: function (e) {
      e.exports = { Chart: 'Chart___1KOBM' }
    },
    79056: function (e, a, n) {
      'use strict'
      n.r(a)
      n(78292)
      var t = n(62003),
        r = n(96162),
        l = n(27236),
        o = n(86236),
        u = n(70379),
        c = n.n(u),
        i = n(72466),
        s = n.n(i),
        m = [
          { name: 'London', 'Jan.': 18.9, 'Feb.': 28.8, 'Mar.': 39.3, 'Apr.': 81.4, May: 47, 'Jun.': 20.3, 'Jul.': 24, 'Aug.': 35.6 },
          { name: 'Berlin', 'Jan.': 12.4, 'Feb.': 23.2, 'Mar.': 34.5, 'Apr.': 99.7, May: 52.6, 'Jun.': 35.5, 'Jul.': 37.4, 'Aug.': 42.4 },
        ],
        p = function () {
          var e = new (c())(),
            a = e.createView().source(m)
          return (
            a.transform({
              type: 'fold',
              fields: ['Jan.', 'Feb.', 'Mar.', 'Apr.', 'May', 'Jun.', 'Jul.', 'Aug.'],
              key: '\u6708\u4efd',
              value: '\u6708\u5747\u964d\u96e8\u91cf',
            }),
            r.createElement(
              l.Oc,
              null,
              r.createElement(
                t.Z,
                { bordered: !1 },
                r.createElement(
                  o.Chart,
                  { height: 400, data: a, forceFit: !0, className: s().Chart },
                  r.createElement(o.Axis, { name: '\u6708\u4efd' }),
                  r.createElement(o.Axis, { name: '\u6708\u5747\u964d\u96e8\u91cf' }),
                  r.createElement(o.Legend, null),
                  r.createElement(o.Tooltip, { crosshairs: { type: 'y' } }),
                  r.createElement(o.Geom, {
                    type: 'interval',
                    position: '\u6708\u4efd*\u6708\u5747\u964d\u96e8\u91cf',
                    color: 'name',
                    adjust: [{ type: 'dodge', marginRatio: 1 / 32 }],
                  }),
                ),
              ),
            )
          )
        }
      a['default'] = p
    },
  },
])
