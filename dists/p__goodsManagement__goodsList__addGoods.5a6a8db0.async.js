;(self['webpackChunkant_design_pro'] = self['webpackChunkant_design_pro'] || []).push([
  [621],
  {
    75880: function (e) {
      e.exports = { Steps: 'Steps___2SAee', toolbar: 'toolbar___3ANpq', text: 'text___2xwW4' }
    },
    43775: function (e, t, a) {
      'use strict'
      a.r(t),
        a.d(t, {
          default: function () {
            return U
          },
        })
      a(78292)
      var r = a(62003),
        n = a(62966),
        s = (a(65028), a(86742)),
        o = (a(31109), a(79814)),
        u = (a(48897), a(75182)),
        c = (a(14074), a(68288)),
        i = (a(86825), a(52746)),
        l = (a(50366), a(25912)),
        m = (a(10831), a(23285)),
        p = a(76020),
        d = (a(5955), a(11584)),
        g = a(85118),
        f = (a(32936), a(98463)),
        _ = a(93589),
        h = (a(89347), a(75191)),
        v = (a(19597), a(61567)),
        b = (a(66329), a(10039)),
        Z = a(51830),
        w = a.n(Z),
        E = a(96162),
        y = a(74389),
        k = a(59051),
        x = a.n(k),
        S = a(68941),
        C = a(73332),
        z = a(35325)
      function I() {
        return P.apply(this, arguments)
      }
      function P() {
        return (
          (P = (0, g.Z)(
            w().mark(function e() {
              return w().wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', (0, z.ZP)('categories', { method: 'get' }))
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )),
          P.apply(this, arguments)
        )
      }
      function q(e) {
        return F.apply(this, arguments)
      }
      function F() {
        return (
          (F = (0, g.Z)(
            w().mark(function e(t) {
              return w().wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', (0, z.ZP)('categories/'.concat(t.id, '/attributes'), { method: 'get', params: { sel: t.sel } }))
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )),
          F.apply(this, arguments)
        )
      }
      function G(e) {
        return N.apply(this, arguments)
      }
      function N() {
        return (
          (N = (0, g.Z)(
            w().mark(function e(t) {
              return w().wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', (0, z.ZP)('goods', { method: 'post', data: t }))
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )),
          N.apply(this, arguments)
        )
      }
      function D(e) {
        return V.apply(this, arguments)
      }
      function V() {
        return (
          (V = (0, g.Z)(
            w().mark(function e(t) {
              return w().wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', (0, z.ZP)('goods/'.concat(t.id), { method: 'put', data: t.data }))
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )),
          V.apply(this, arguments)
        )
      }
      var j = a(75880),
        L = a.n(j),
        T = b.Z.Step,
        A = v.Z.TabPane,
        W = h.Z.Group,
        B = { labelCol: { span: 24 }, wrapperCol: { span: 24 } },
        K = {
          goods_name: [{ required: !0, message: '\u8bf7\u8f93\u5165\u540d\u79f0!' }],
          goods_price: [{ required: !0, message: '\u8bf7\u8f93\u5165\u4ef7\u683c!' }],
          goods_weight: [{ required: !0, message: '\u8bf7\u8f93\u5165\u91cd\u91cf' }],
          goods_number: [{ required: !0, message: '\u8bf7\u8f93\u5165\u6570\u91cf' }],
          goods_cat: [{ required: !0, message: '\u8bf7\u9009\u62e9\u5206\u7c7b' }],
        },
        M = function (e) {
          var t = e.location.state,
            a = f.Z.useForm(),
            h = (0, _.Z)(a, 1),
            Z = h[0],
            k = (0, E.useState)(0),
            z = (0, _.Z)(k, 2),
            P = z[0],
            F = z[1],
            N = (0, E.useState)([]),
            V = (0, _.Z)(N, 2),
            j = V[0],
            M = V[1],
            U = (0, E.useState)([]),
            H = (0, _.Z)(U, 2),
            J = H[0],
            O = H[1],
            Q = (0, E.useState)([]),
            R = (0, _.Z)(Q, 2),
            X = R[0],
            Y = R[1],
            $ = (0, E.useState)([]),
            ee = (0, _.Z)($, 2),
            te = ee[0],
            ae = ee[1],
            re = (0, E.useState)(!1),
            ne = (0, _.Z)(re, 2),
            se = ne[0],
            oe = ne[1],
            ue = (0, E.useState)([]),
            ce = (0, _.Z)(ue, 2),
            ie = ce[0],
            le = ce[1],
            me = (0, E.useState)(''),
            pe = (0, _.Z)(me, 2),
            de = pe[0],
            ge = pe[1],
            fe = (0, E.useState)([]),
            _e = (0, _.Z)(fe, 2),
            he = _e[0],
            ve = _e[1],
            be = function () {
              var e = new (x())('#div1', '#div2')
              ;(e.customConfig.onchange = function (e) {
                ge(e)
              }),
                (e.customConfig.uploadImgShowBase64 = !0),
                e.create(),
                e.txt.html(de)
            },
            Ze = (function () {
              var e = (0, g.Z)(
                w().mark(function e(t) {
                  var a, r, n
                  return w().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), q({ id: t.goods_cat[2], sel: 'many' })
                        case 2:
                          if (((a = e.sent), (r = a.data), (n = a.meta), 200 === n.status)) {
                            e.next = 7
                            break
                          }
                          return e.abrupt('return', d.default.error(n.msg))
                        case 7:
                          return (
                            r.forEach(function (e) {
                              var t = e
                              ;(t.attrs = t.attr_vals.split(',')), (t.attr_value = t.attr_vals)
                            }),
                            Y(r),
                            se || le(r),
                            e.abrupt('return', !0)
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
            we = (function () {
              var e = (0, g.Z)(
                w().mark(function e(t) {
                  var a, r, n
                  return w().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (0 !== te.length) {
                            e.next = 11
                            break
                          }
                          return (e.next = 3), q({ id: t.goods_cat[2], sel: 'only' })
                        case 3:
                          if (((a = e.sent), (r = a.data), (n = a.meta), 200 === n.status)) {
                            e.next = 8
                            break
                          }
                          return e.abrupt('return', d.default.error(n.msg))
                        case 8:
                          r.map(function (e) {
                            var t = e
                            return (t.attr_value = t.attr_vals), t
                          }),
                            ae(r),
                            se || ie.push.apply(ie, (0, p.Z)(r))
                        case 11:
                          return e.abrupt('return', !0)
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
            })()
          function Ee(e) {
            Z.validateFields()
              .then(
                (function () {
                  var t = (0, g.Z)(
                    w().mark(function t(a) {
                      return w().wrap(function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              return (
                                F(e),
                                '1' === e
                                  ? Ze(a)
                                  : '2' === e
                                  ? we(a)
                                  : '4' === e
                                  ? be()
                                  : '5' === e &&
                                    (0 !== X.length || se
                                      ? 0 !== te.length || se || (F(2), d.default.warning('\u8bf7\u67e5\u770b\u914d\u7f6e\u5c5e\u6027!'), we(a))
                                      : (F(1), Ze(a), d.default.warning('\u8bf7\u67e5\u770b\u914d\u7f6e\u53c2\u6570!'))),
                                t.abrupt('return', !0)
                              )
                            case 3:
                            case 'end':
                              return t.stop()
                          }
                      }, t)
                    }),
                  )
                  return function (e) {
                    return t.apply(this, arguments)
                  }
                })(),
              )
              .catch(function () {
                d.default.warning('\u8bf7\u8f93\u5165\u57fa\u672c\u4fe1\u606f!')
              })
          }
          var ye = (function () {
              var e = (0, g.Z)(
                w().mark(function e() {
                  var t, a, r
                  return w().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), I()
                        case 2:
                          if (((t = e.sent), (a = t.data), (r = t.meta), 200 === r.status)) {
                            e.next = 7
                            break
                          }
                          return e.abrupt('return', d.default.error(r.msg))
                        case 7:
                          return M(a), e.abrupt('return', !0)
                        case 9:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              return function () {
                return e.apply(this, arguments)
              }
            })(),
            ke = function (e) {
              e.length < 3 && Z.setFieldsValue({ goods_cat: '' })
            }
          ;(0, E.useEffect)(function () {
            if (t) {
              oe(!0)
              var e = t.GoodsData
              Z.setFieldsValue({
                goods_name: e.goods_name,
                goods_price: e.goods_price,
                goods_weight: e.goods_weight,
                goods_number: e.goods_number,
                goods_cat: e.goods_cat,
              }),
                e.pics.map(function (e) {
                  var t = e
                  return (t.uid = e.pics_id), (t.url = e.pics_big_url), t
                }),
                e.attrs.map(function (e) {
                  var t = e
                  return 'many' === t.attr_sel && (t.parameter = t.attr_value.split(',')), t
                }),
                le(e.attrs),
                ve(t.GoodsData.pics),
                O(t.GoodsData.goods_cat),
                ge(t.GoodsData.goods_introduce)
            }
            ye()
          }, [])
          var xe = function (e) {
              var t = e.file.response
              t && 200 === t.meta.status && he.push({ pic: t.data.tmp_path })
            },
            Se = {
              name: 'file',
              listType: 'picture',
              className: 'upload-list-inline',
              defaultFileList: (0, p.Z)(he),
              action: ''.concat(C._n, 'upload'),
              headers: { authorization: (0, C.WU)() },
              onChange: xe,
            },
            Ce = function (e, t, a) {
              var r = ie
              r.map(function (t) {
                var r = t
                return r.attr_name === a && ((r.attrs = e), (r.attr_vals = e.join(',')), (r.attr_value = e.join(','))), r
              })
            },
            ze = function () {
              return (
                X &&
                X.map(function (e, t) {
                  var a = e.attrs
                  return E.createElement(
                    f.Z.Item,
                    { label: e.attr_name, key: e.attr_id },
                    ie &&
                      ie.forEach(function (t) {
                        t.attr_name === e.attr_name && 'many' === t.attr_sel && (a = se ? t.parameter : t.attrs)
                      }),
                    E.createElement(W, {
                      options: e.attrs,
                      onChange: function (a) {
                        return Ce(a, t, e.attr_name)
                      },
                      defaultValue: a,
                    }),
                  )
                })
              )
            },
            Ie = function (e, t) {
              ie.map(function (a) {
                var r = a
                return r.attr_id === t && 'only' === r.attr_sel && (r.attr_value = e.target.value), r
              })
            },
            Pe = function () {
              return (
                te &&
                te.map(function (e) {
                  var t = e.attr_vals
                  return E.createElement(
                    f.Z.Item,
                    { label: e.attr_name, key: e.attr_id },
                    se &&
                      ie.forEach(function (a) {
                        a.attr_name === e.attr_name && 'only' === a.attr_sel && (t = a.attr_value)
                      }),
                    E.createElement(m.Z, {
                      size: 'large',
                      defaultValue: t,
                      onChange: function (t) {
                        return Ie(t, e.attr_id)
                      },
                    }),
                  )
                })
              )
            },
            qe = function () {
              Z.validateFields().then(
                (function () {
                  var e = (0, g.Z)(
                    w().mark(function e(a) {
                      var r, n, s
                      return w().wrap(function (e) {
                        while (1)
                          switch ((e.prev = e.next)) {
                            case 0:
                              if (
                                ((r = {
                                  goods_name: a.goods_name,
                                  goods_cat: a.goods_cat.join(','),
                                  goods_price: a.goods_price,
                                  goods_number: a.goods_number,
                                  goods_weight: a.goods_weight,
                                  goods_introduce: de,
                                  pics: he,
                                  attrs: ie,
                                }),
                                se)
                              ) {
                                e.next = 8
                                break
                              }
                              return (e.next = 4), G(r)
                            case 4:
                              ;(n = e.sent), (s = 201), (e.next = 12)
                              break
                            case 8:
                              return (e.next = 10), D({ id: t.GoodsData.goods_id, data: r })
                            case 10:
                              ;(n = e.sent), (s = 200)
                            case 12:
                              if (n.meta.status === s) {
                                e.next = 14
                                break
                              }
                              return e.abrupt('return', d.default.error(n.meta.msg))
                            case 14:
                              return (
                                S.m8.replace('/goodsManagement/goodsList/List'),
                                e.abrupt(
                                  'return',
                                  d.default.success(se ? '\u4fee\u6539\u5546\u54c1\u6210\u529f' : '\u6dfb\u52a0\u5546\u54c1\u6210\u529f'),
                                )
                              )
                            case 16:
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
              )
            }
          return E.createElement(
            r.Z,
            null,
            E.createElement(l.Z, {
              message: se ? '\u4fee\u6539\u5546\u54c1\u4fe1\u606f' : '\u6dfb\u52a0\u5546\u54c1\u4fe1\u606f',
              type: se ? 'warning' : 'success',
              showIcon: !0,
            }),
            E.createElement(
              b.Z,
              { current: P, size: 'small', type: 'default', className: L().Steps },
              E.createElement(T, { title: '\u57fa\u672c\u4fe1\u606f' }),
              E.createElement(T, { title: '\u5546\u54c1\u53c2\u6570' }),
              E.createElement(T, { title: '\u5546\u54c1\u5c5e\u6027' }),
              E.createElement(T, { title: '\u5546\u54c1\u56fe\u7247' }),
              E.createElement(T, { title: '\u5546\u54c1\u5185\u5bb9' }),
              E.createElement(T, { title: '\u5b8c\u6210' }),
            ),
            E.createElement(
              f.Z,
              (0, n.Z)({}, B, { name: 'basic', initialValues: { goods_cat: J }, form: Z }),
              E.createElement(
                v.Z,
                { onChange: Ee, tabPosition: 'left', activeKey: ''.concat(P) },
                E.createElement(
                  A,
                  { tab: '\u57fa\u672c\u4fe1\u606f', key: '0' },
                  E.createElement(
                    f.Z.Item,
                    { label: '\u5546\u54c1\u540d\u79f0', name: 'goods_name', rules: K.goods_name },
                    E.createElement(m.Z, { size: 'large' }),
                  ),
                  E.createElement(
                    f.Z.Item,
                    { label: '\u5546\u54c1\u4ef7\u683c', name: 'goods_price', rules: K.goods_price },
                    E.createElement(i.Z, { min: 0, max: 1e5, size: 'large' }),
                  ),
                  E.createElement(
                    f.Z.Item,
                    { label: '\u5546\u54c1\u91cd\u91cf', name: 'goods_weight', rules: K.goods_weight },
                    E.createElement(m.Z, { size: 'large' }),
                  ),
                  E.createElement(
                    f.Z.Item,
                    { label: '\u5546\u54c1\u6570\u91cf', name: 'goods_number', rules: K.goods_number },
                    E.createElement(m.Z, { size: 'large' }),
                  ),
                  E.createElement(
                    f.Z.Item,
                    { label: '\u5546\u54c1\u5206\u7c7b', name: 'goods_cat', rules: K.goods_cat },
                    E.createElement(c.Z, {
                      options: j,
                      onChange: ke,
                      disabled: se,
                      size: 'large',
                      expandTrigger: 'hover',
                      style: { width: '220px' },
                      fieldNames: { label: 'cat_name', value: 'cat_id', children: 'children' },
                      popupPlacement: 'topLeft',
                    }),
                  ),
                ),
                E.createElement(A, { tab: '\u5546\u54c1\u53c2\u6570', key: '1' }, ze()),
                E.createElement(A, { tab: '\u5546\u54c1\u5c5e\u6027', key: '2' }, Pe()),
                E.createElement(
                  A,
                  { tab: '\u5546\u54c1\u56fe\u7247', key: '3' },
                  E.createElement(
                    s.Z,
                    Se,
                    E.createElement(u.Z, null, E.createElement(y.Z, null), ' \u4e0a\u4f20\u56fe\u7247'),
                    '\xa0\u53ea\u80fd\u4e0a\u4f20jpg/png\u6587\u4ef6\uff0c\u4e14\u4e0d\u8d85\u8fc7500kb',
                    E.createElement(o.Z, null),
                  ),
                ),
                E.createElement(
                  A,
                  { tab: '\u5546\u54c1\u5185\u5bb9', key: '4' },
                  E.createElement('div', { id: 'div1', className: L().toolbar }),
                  E.createElement('div', { id: 'div2', className: L().text }),
                ),
                E.createElement(
                  A,
                  { tab: '\u5b8c\u6210', key: '5' },
                  E.createElement(u.Z, { type: 'primary', size: 'large', onClick: qe }, se ? '\u4fee\u6539\u5546\u54c1' : '\u6dfb\u52a0\u5546\u54c1'),
                ),
              ),
            ),
          )
        },
        U = M
    },
  },
])
