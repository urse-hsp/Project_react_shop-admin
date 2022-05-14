;(self['webpackChunkant_design_pro'] = self['webpackChunkant_design_pro'] || []).push([
  [917],
  {
    28841: function (e) {
      e.exports = { buttonWrap: 'buttonWrap___1TlPJ' }
    },
    88745: function (e, t, r) {
      'use strict'
      r.r(t),
        r.d(t, {
          default: function () {
            return R
          },
        })
      r(19076)
      var n = r(29465),
        a = (r(48897), r(75182)),
        u = (r(72854), r(4405)),
        o = (r(31053), r(78676)),
        i = (r(5955), r(11584)),
        s = r(85118),
        c = r(93589),
        d = (r(10831), r(23285)),
        p = r(51830),
        l = r.n(p),
        f = r(96162),
        m = r(27329),
        g = r(22913),
        h = r(74660),
        w = r(52767),
        y = r(68941),
        k = r(73332),
        x = r(35325)
      function Z(e) {
        return _.apply(this, arguments)
      }
      function _() {
        return (
          (_ = (0, s.Z)(
            l().mark(function e(t) {
              return l().wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', (0, x.ZP)('goods', { method: 'get', params: t }))
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )),
          _.apply(this, arguments)
        )
      }
      function b(e) {
        return v.apply(this, arguments)
      }
      function v() {
        return (
          (v = (0, s.Z)(
            l().mark(function e(t) {
              return l().wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', (0, x.ZP)('goods/'.concat(t.goods_id), { method: 'delete' }))
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )),
          v.apply(this, arguments)
        )
      }
      function E(e) {
        return S.apply(this, arguments)
      }
      function S() {
        return (
          (S = (0, s.Z)(
            l().mark(function e(t) {
              return l().wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', (0, x.ZP)('goods/'.concat(t.id), { method: 'get' }))
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )),
          S.apply(this, arguments)
        )
      }
      var z = r(28841),
        C = r.n(z),
        I = d.Z.Search,
        P = function () {
          var e = (0, f.useState)(''),
            t = (0, c.Z)(e, 2),
            r = t[0],
            d = t[1],
            p = (0, f.useRef)(),
            x = function (e) {
              d(e), p.current.reload()
            },
            _ = (function () {
              var e = (0, s.Z)(
                l().mark(function e(t) {
                  var r, n
                  return l().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), b(t)
                        case 2:
                          if (((r = e.sent), (n = r.meta), 200 === n.status)) {
                            e.next = 6
                            break
                          }
                          return e.abrupt('return', i.default.error(n.msg))
                        case 6:
                          return i.default.success(n.msg), p.current.reload(), e.abrupt('return', null)
                        case 9:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })(),
            v = (function () {
              var e = (0, s.Z)(
                l().mark(function e(t) {
                  var r, n, a, u, o
                  return l().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), E({ id: t })
                        case 2:
                          if (((r = e.sent), (n = r.data), (a = r.meta), 200 === a.status)) {
                            e.next = 7
                            break
                          }
                          return e.abrupt('return', i.default.error(a.msg))
                        case 7:
                          return (
                            (u = n.goods_cat.split(',')),
                            (o = u.map(Number)),
                            (n.goods_cat = o),
                            y.m8.push('/goodsManagement/goodsList/addGoods', { GoodsData: n }),
                            e.abrupt('return', !0)
                          )
                        case 12:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })(),
            S = f.createElement(
              u.Z,
              null,
              f.createElement(
                o.Z,
                { span: 8 },
                f.createElement(I, {
                  placeholder: '\u8bf7\u8f93\u5165\u5185\u5bb9',
                  onSearch: function (e) {
                    return x(e)
                  },
                  size: 'large',
                  allowClear: !0,
                }),
              ),
            ),
            z = [
              { title: '', dataIndex: 'index', width: 50 },
              { title: '\u5546\u54c1\u540d\u79f0', dataIndex: 'goods_name', key: 'goods_name' },
              { title: '\u5546\u54c1\u4ef7\u683c(\u5143)', dataIndex: 'goods_price', key: 'goods_price', width: 100 },
              { title: '\u5546\u54c1\u91cd\u91cf', dataIndex: 'goods_weight', key: 'goods_weight', width: 100 },
              {
                title: '\u5546\u54c1\u521b\u5efa\u65f6\u95f4',
                dataIndex: 'add_time',
                key: 'add_time',
                width: 170,
                render: function (e) {
                  return (0, k.D3)(e)
                },
              },
              {
                title: '\u64cd\u4f5c',
                width: 140,
                dataIndex: 'goods_id',
                key: 'goods_id',
                render: function (e, t) {
                  return f.createElement(
                    'div',
                    { className: C().buttonWrap },
                    f.createElement(
                      a.Z,
                      {
                        type: 'primary',
                        onClick: function () {
                          return v(e)
                        },
                      },
                      f.createElement(g.Z, { style: { fontSize: '13px' } }),
                    ),
                    f.createElement(
                      n.Z,
                      {
                        placement: 'topRight',
                        title: '\u786e\u5b9a\u8981\u5220\u9664\u8be5\u7528\u6237\u5417\uff1f',
                        icon: f.createElement(h.Z, { style: { color: 'red' } }),
                        onConfirm: function () {
                          return _(t)
                        },
                      },
                      f.createElement(a.Z, { type: 'primary', danger: !0 }, f.createElement(w.Z, { style: { fontSize: '13px' } })),
                    ),
                  )
                },
              },
            ]
          return f.createElement(m.ZP, {
            rowKey: 'key',
            actionRef: p,
            columns: z,
            bordered: !0,
            search: !1,
            options: { setting: !1 },
            headerTitle: S,
            toolBarRender: function () {
              return [
                f.createElement(
                  a.Z,
                  {
                    key: '3',
                    type: 'primary',
                    onClick: function () {
                      return y.m8.push('/goodsManagement/goodsList/addGoods')
                    },
                  },
                  '\u6dfb\u52a0\u5546\u54c1',
                ),
              ]
            },
            pagination: { defaultPageSize: 10, pageSizeOptions: ['5', '10', '15', '20'], showQuickJumper: !0 },
            request: (function () {
              var e = (0, s.Z)(
                l().mark(function e(t) {
                  var n, a, u, o, i
                  return l().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (n = { query: r, pagenum: t.current, pagesize: t.pageSize }), (e.next = 3), Z(n)
                        case 3:
                          if (((a = e.sent), (u = a.data), (o = a.meta), 200 === o.status)) {
                            e.next = 8
                            break
                          }
                          return e.abrupt('return')
                        case 8:
                          return (
                            u.goods.map(function (e, t) {
                              var r = e
                              return (r.key = e.goods_id), (r.index = t + 1), r
                            }),
                            (i = { data: u.goods, total: u.total, success: !0, pageSize: t.pageSize, current: t.current }),
                            e.abrupt('return', i)
                          )
                        case 11:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              return function (t) {
                return e.apply(this, arguments)
              }
            })(),
          })
        },
        R = P
    },
  },
])
