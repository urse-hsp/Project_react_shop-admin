;(self['webpackChunkant_design_pro'] = self['webpackChunkant_design_pro'] || []).push([
  [603],
  {
    5746: function (e) {
      e.exports = { parameter: 'parameter___2A22Z', operate: 'operate___tZ3f0' }
    },
    73538: function (e, t, n) {
      'use strict'
      n.r(t),
        n.d(t, {
          default: function () {
            return $
          },
        })
      n(78292)
      var r = n(62003),
        a = (n(11781), n(47216)),
        u = (n(19076), n(29465)),
        c = (n(48897), n(75182)),
        s = (n(72854), n(4405)),
        i = (n(31109), n(79814)),
        o = (n(31053), n(78676)),
        l = (n(79722), n(37757)),
        p = (n(5955), n(11584)),
        d = n(85118),
        f = n(93589),
        m = (n(90686), n(96672)),
        h = n(51830),
        Z = n.n(h),
        k = n(96162),
        w = n(27236),
        b = n(74660),
        y = n(66377),
        x = n(22913),
        v = n(52767),
        E = n(99833),
        g = n(62966),
        C = (n(10831), n(23285)),
        S = (n(32936), n(98463)),
        I = { labelCol: { span: 4 }, wrapperCol: { span: 20 } },
        N = {
          roleName: [{ required: !0, message: '\u8bf7\u8f93\u5165\u89d2\u8272\u540d\u79f0!' }],
          roleDesc: [{ required: !0, message: '\u8bf7\u8f93\u5165\u89d2\u8272\u63cf\u8ff0!' }],
        },
        D = function (e) {
          var t = e.modalVisible,
            n = e.onCancel,
            r = e.alterAdd,
            a = e.amendData,
            u = e.addRoleLists,
            c = S.Z.useForm(),
            s = (0, f.Z)(c, 1),
            i = s[0],
            o = function () {
              i.validateFields().then(function (e) {
                u(e), console.log(e)
              })
            }
          return (
            (0, k.useEffect)(function () {
              console.log('aa'), r ? (console.log(1), i.setFieldsValue({ roleName: a.roleName, roleDesc: a.roleDesc })) : i.resetFields()
            }),
            k.createElement(
              m.Z,
              {
                destroyOnClose: !0,
                title: r ? '\u4fee\u6539\u89d2\u8272' : '\u6dfb\u52a0\u89d2\u8272',
                visible: t,
                onCancel: function () {
                  return n()
                },
                okText: r ? '\u4fee\u6539' : '\u6dfb\u52a0',
                onOk: o,
              },
              k.createElement(
                S.Z,
                (0, g.Z)({ form: i }, I, { name: 'basic', initialValues: { remember: !0 } }),
                k.createElement(S.Z.Item, { label: '\u89d2\u8272\u540d\u79f0', name: 'roleName', rules: N.roleName }, k.createElement(C.Z, null)),
                k.createElement(S.Z.Item, { label: '\u89d2\u8272\u63cf\u8ff0', name: 'roleDesc', rules: N.roleDesc }, k.createElement(C.Z, null)),
              ),
            )
          )
        },
        _ = D,
        R = (n(4166), n(60303)),
        P = function (e) {
          var t = e.modalVisible,
            n = e.onCancel,
            r = e.AllocationJurisdiction,
            a = e.jurisdictionLists,
            u = e.setRole,
            c = (0, k.useState)([]),
            s = (0, f.Z)(c, 2),
            i = s[0],
            o = s[1],
            l = (0, k.useState)(!0),
            p = (0, f.Z)(l, 2),
            d = p[0],
            h = p[1],
            Z = function (e) {
              h(!1), o(e)
            },
            w = function () {
              u(i.join(','))
            }
          return (
            (0, k.useEffect)(function () {
              d && o(a)
            }),
            k.createElement(
              m.Z,
              {
                destroyOnClose: !0,
                title: '\u5206\u914d\u6743\u9650',
                visible: t,
                onCancel: function () {
                  return n()
                },
                onOk: w,
              },
              k.createElement(R.Z, { checkable: !0, onCheck: Z, checkedKeys: i, treeData: r }),
            )
          )
        },
        z = P,
        O = n(35325)
      function V() {
        return j.apply(this, arguments)
      }
      function j() {
        return (
          (j = (0, d.Z)(
            Z().mark(function e() {
              return Z().wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', (0, O.ZP)('roles'))
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )),
          j.apply(this, arguments)
        )
      }
      function A(e) {
        return F.apply(this, arguments)
      }
      function F() {
        return (
          (F = (0, d.Z)(
            Z().mark(function e(t) {
              return Z().wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', (0, O.ZP)('roles', { method: 'post', data: t }))
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
      function L(e) {
        return T.apply(this, arguments)
      }
      function T() {
        return (
          (T = (0, d.Z)(
            Z().mark(function e(t) {
              return Z().wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', (0, O.ZP)('roles/'.concat(t.id), { method: 'put', data: t.param }))
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )),
          T.apply(this, arguments)
        )
      }
      function q(e) {
        return J.apply(this, arguments)
      }
      function J() {
        return (
          (J = (0, d.Z)(
            Z().mark(function e(t) {
              return Z().wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', (0, O.ZP)('roles/'.concat(t), { method: 'delete' }))
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )),
          J.apply(this, arguments)
        )
      }
      function K(e) {
        return Y.apply(this, arguments)
      }
      function Y() {
        return (
          (Y = (0, d.Z)(
            Z().mark(function e(t) {
              return Z().wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', (0, O.ZP)('roles/'.concat(t.recordIds, '/rights/').concat(t.itemId), { method: 'delete' }))
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )),
          Y.apply(this, arguments)
        )
      }
      function B() {
        return G.apply(this, arguments)
      }
      function G() {
        return (
          (G = (0, d.Z)(
            Z().mark(function e() {
              return Z().wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt('return', (0, O.ZP)('rights/tree', { method: 'get' }))
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )),
          G.apply(this, arguments)
        )
      }
      function H(e) {
        return M.apply(this, arguments)
      }
      function M() {
        return (
          (M = (0, d.Z)(
            Z().mark(function e(t) {
              return Z().wrap(function (e) {
                while (1)
                  switch ((e.prev = e.next)) {
                    case 0:
                      return e.abrupt(
                        'return',
                        (0, O.ZP)('roles/'.concat(t.setRoleId, '/rights'), { method: 'post', data: { rids: t.jurisdictionId } }),
                      )
                    case 1:
                    case 'end':
                      return e.stop()
                  }
              }, e)
            }),
          )),
          M.apply(this, arguments)
        )
      }
      var Q = n(5746),
        U = n.n(Q),
        W = m.Z.confirm,
        X = function () {
          var e = (0, k.useState)([]),
            t = (0, f.Z)(e, 2),
            n = t[0],
            m = t[1],
            h = (0, k.useState)(!1),
            g = (0, f.Z)(h, 2),
            C = g[0],
            S = g[1],
            I = (0, k.useState)(!1),
            N = (0, f.Z)(I, 2),
            D = N[0],
            R = N[1],
            P = (0, k.useState)({}),
            O = (0, f.Z)(P, 2),
            j = O[0],
            F = O[1],
            T = (0, k.useState)(!1),
            J = (0, f.Z)(T, 2),
            Y = J[0],
            G = J[1],
            M = (0, k.useState)([]),
            Q = (0, f.Z)(M, 2),
            X = Q[0],
            $ = Q[1],
            ee = (0, k.useState)([]),
            te = (0, f.Z)(ee, 2),
            ne = te[0],
            re = te[1],
            ae = (0, k.useState)(),
            ue = (0, f.Z)(ae, 2),
            ce = ue[0],
            se = ue[1],
            ie = [],
            oe = function e(t, n) {
              t.map(function (t, r) {
                n && (ie.push(t.id), re(ie))
                var a = t
                return (a.key = t.id), (a.key2 = r + 1), (a.title = t.authName), t.children && e(t.children, n), a
              })
            },
            le = (function () {
              var e = (0, d.Z)(
                Z().mark(function e() {
                  var t
                  return Z().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), V()
                        case 2:
                          ;(t = e.sent), 200 === t.meta.status && (oe(t.data, !1), m(t.data))
                        case 4:
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
            pe = (function () {
              var e = (0, d.Z)(
                Z().mark(function e(t, n, r) {
                  return Z().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          r.preventDefault(),
                            W({
                              title: '\u786e\u5b9a\u8981\u5220\u9664\u8be5\u89d2\u8272\u6b64\u9650\u6743?',
                              icon: k.createElement(b.Z, { style: { color: 'red' } }),
                              okText: 'Yes',
                              okType: 'danger',
                              cancelText: 'No',
                              onOk: (function () {
                                var e = (0, d.Z)(
                                  Z().mark(function e() {
                                    var r, a, u
                                    return Z().wrap(function (e) {
                                      while (1)
                                        switch ((e.prev = e.next)) {
                                          case 0:
                                            return (r = t.id), (e.next = 3), K({ recordIds: r, itemId: n })
                                          case 3:
                                            if (((a = e.sent), (u = a.meta), 200 === u.status)) {
                                              e.next = 7
                                              break
                                            }
                                            return e.abrupt('return', p.default.error(u.msg))
                                          case 7:
                                            return p.default.success('\u5220\u9664\u8be5\u9650\u6743\u6210\u529f'), le(), e.abrupt('return', !0)
                                          case 10:
                                          case 'end':
                                            return e.stop()
                                        }
                                    }, e)
                                  }),
                                )
                                function r() {
                                  return e.apply(this, arguments)
                                }
                                return r
                              })(),
                              onCancel: function () {},
                            })
                        case 2:
                        case 'end':
                          return e.stop()
                      }
                  }, e)
                }),
              )
              return function (t, n, r) {
                return e.apply(this, arguments)
              }
            })(),
            de = function () {
              S(!1), G(!1), re([])
            },
            fe = function (e, t) {
              S(!0), R(e), e && F(t)
            },
            me = (function () {
              var e = (0, d.Z)(
                Z().mark(function e(t) {
                  var n, r
                  return Z().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), q(t.id)
                        case 2:
                          if (((n = e.sent), (r = n.meta), 200 === r.status)) {
                            e.next = 6
                            break
                          }
                          return e.abrupt('return', p.default.error(r.msg))
                        case 6:
                          return p.default.success('\u5220\u9664\u6210\u529f'), le(), e.abrupt('return', null)
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
            he = (function () {
              var e = (0, d.Z)(
                Z().mark(function e(t) {
                  var n, r, a, u, c
                  return Z().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (D) {
                            e.next = 10
                            break
                          }
                          return (e.next = 3), A(t)
                        case 3:
                          if (((n = e.sent), (r = n.meta), 201 === r.status)) {
                            e.next = 7
                            break
                          }
                          return e.abrupt('return', p.default.error(r.msg))
                        case 7:
                          p.default.success('\u89d2\u8272\u521b\u5efa\u6210\u529f'), (e.next = 18)
                          break
                        case 10:
                          return (a = j.id), (e.next = 13), L({ id: a, param: t })
                        case 13:
                          if (((u = e.sent), (c = u.meta), 200 === c.status)) {
                            e.next = 17
                            break
                          }
                          return e.abrupt('return', p.default.error(c.msg))
                        case 17:
                          p.default.success('\u89d2\u8272\u4fee\u6539\u6210\u529f')
                        case 18:
                          return S(!1), le(), e.abrupt('return', !0)
                        case 21:
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
            Ze = (function () {
              var e = (0, d.Z)(
                Z().mark(function e(t) {
                  var n, r, a
                  return Z().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return se(t.id), G(!0), oe(t.children, !0), (e.next = 5), B()
                        case 5:
                          if (((n = e.sent), (r = n.data), (a = n.meta), 200 === a.status)) {
                            e.next = 10
                            break
                          }
                          return e.abrupt('return', p.default.error(a.msg))
                        case 10:
                          return oe(r, !1), $(r), e.abrupt('return', !0)
                        case 13:
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
            ke = (function () {
              var e = (0, d.Z)(
                Z().mark(function e(t) {
                  var n, r
                  return Z().wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          return (e.next = 2), H({ setRoleId: ce, jurisdictionId: t })
                        case 2:
                          if (((n = e.sent), (r = n.meta), 200 === r.status)) {
                            e.next = 6
                            break
                          }
                          return e.abrupt('return', p.default.error(r.msg))
                        case 6:
                          return p.default.success('\u6388\u6743\u6210\u529f'), G(!1), le(), e.abrupt('return', !0)
                        case 10:
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
          ;(0, k.useEffect)(function () {
            le()
          }, [])
          var we = function (e, t) {
              return e.children.map(function (n, r) {
                var a = null
                return (
                  (a = n.children
                    ? k.createElement(
                        s.Z,
                        { key: n.id, className: U().parameter },
                        k.createElement(
                          o.Z,
                          { span: 5 },
                          k.createElement(
                            l.Z,
                            {
                              color: 'blue',
                              closable: !0,
                              onClose: function (e) {
                                return pe(t, n.id, e)
                              },
                            },
                            n.authName,
                          ),
                          k.createElement(y.Z, { style: { fontSize: '11px' } }),
                        ),
                        k.createElement(o.Z, { span: 19 }, we(n, t)),
                        e.children.length === r + 1 ? '' : k.createElement(i.Z, null),
                      )
                    : k.createElement(
                        l.Z,
                        {
                          color: 'orange',
                          closable: !0,
                          key: n.id,
                          onClose: function (e) {
                            return pe(t, n.id, e)
                          },
                        },
                        n.authName,
                      )),
                  a
                )
              })
            },
            be = k.createElement(
              c.Z,
              {
                type: 'primary',
                onClick: function () {
                  return fe(!1, null)
                },
              },
              '\u6dfb\u52a0\u89d2\u8272',
            ),
            ye = [
              { title: '', dataIndex: 'key2', key: 'key2', width: 50 },
              { title: '\u89d2\u8272\u540d\u79f0', dataIndex: 'roleName', key: 'roleName' },
              { title: '\u89d2\u8272\u63cf\u8ff0', dataIndex: 'roleDesc', key: 'roleDesc' },
              {
                title: '\u64cd\u4f5c',
                dataIndex: '',
                key: 'x',
                width: 320,
                render: function (e, t) {
                  return k.createElement(
                    'div',
                    { className: U().operate },
                    k.createElement(
                      c.Z,
                      {
                        type: 'link',
                        icon: k.createElement(x.Z, { style: { fontSize: '13px' } }),
                        size: 'small',
                        onClick: function () {
                          return fe(!0, t)
                        },
                      },
                      '\u7f16\u8f91',
                    ),
                    k.createElement(
                      u.Z,
                      {
                        placement: 'topRight',
                        title: '\u786e\u5b9a\u8981\u5220\u9664\u8be5\u89d2\u8272\u5417',
                        onConfirm: function () {
                          return me(e)
                        },
                        icon: k.createElement(b.Z, { style: { color: 'red' } }),
                      },
                      k.createElement(
                        c.Z,
                        { type: 'link', danger: !0, icon: k.createElement(v.Z, { style: { fontSize: '13px' } }), size: 'small' },
                        'Delete',
                      ),
                    ),
                    k.createElement(
                      c.Z,
                      {
                        type: 'link',
                        icon: k.createElement(E.Z, { style: { fontSize: '13px' } }),
                        size: 'small',
                        onClick: function () {
                          return Ze(t)
                        },
                      },
                      '\u5206\u914d\u6743\u9650',
                    ),
                  )
                },
              },
            ]
          return k.createElement(
            w.Oc,
            null,
            k.createElement(
              r.Z,
              { bordered: !1, title: be },
              k.createElement(a.Z, {
                columns: ye,
                bordered: !0,
                expandable: {
                  childrenColumnName: ' ',
                  expandedRowRender: function (e) {
                    return k.createElement('div', { style: { margin: 0 } }, we(e, e))
                  },
                  rowExpandable: function (e) {
                    return e.children.length > 0
                  },
                },
                dataSource: n,
                pagination: { hideOnSinglePage: !0 },
              }),
              k.createElement(_, { modalVisible: C, onCancel: de, alterAdd: D, amendData: j, addRoleLists: he }),
              k.createElement(z, { modalVisible: Y, onCancel: de, AllocationJurisdiction: X, jurisdictionLists: ne, setRole: ke }),
            ),
          )
        },
        $ = X
    },
  },
])
