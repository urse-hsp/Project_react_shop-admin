;(self['webpackChunkant_design_pro'] = self['webpackChunkant_design_pro'] || []).push([
  [146],
  {
    72968: function () {},
    17211: function () {},
    58443: function () {},
    54859: function () {},
    66755: function () {},
    32590: function () {},
    46292: function () {},
    36112: function () {},
    46244: function () {},
    22106: function () {},
    54338: function () {},
    85592: function () {},
    13484: function (e, t) {
      'use strict'
      var n = {
        navTheme: 'dark',
        layout: 'side',
        contentWidth: 'Fluid',
        fixedHeader: !1,
        fixSiderbar: !1,
        headerHeight: 48,
        iconfontUrl: '',
        primaryColor: '#1890ff',
        splitMenus: !1,
      }
      t['Z'] = n
    },
    27236: function (e, t, n) {
      'use strict'
      n.d(t, {
        Oc: function () {
          return ca
        },
        ZP: function () {
          return sa
        },
      })
      n(91210)
      var a = n(60153),
        r = n(19344),
        o = n(3169),
        i = n.n(o),
        l = n(55329),
        c = n(76317),
        s = (n(59116), n(23344)),
        u = n(43141),
        d = n(42151),
        p = n(33673),
        m = (n(72968), n(96162)),
        f = n(54794),
        g = n.n(f),
        h = n(5187),
        v = n.n(h),
        y = n(45016),
        x = n(39627),
        Z = n(29954),
        C = n(62979)
      function b(e, t) {
        var n = 'string' === typeof e.pageName ? e.title : t
        ;(0, m.useEffect)(
          function () {
            ;(0, C.Z)() && n && (document.title = n)
          },
          [e.title, n],
        )
      }
      var E = b,
        N = n(94702),
        w = n(37332),
        k = n(76969),
        M = n(28815),
        R = n(4198),
        P = n(8772),
        S = n(49184),
        T = (n(17211), n(54859), n(10937), n(86206)),
        H = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 000-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0014.4 7z',
                },
              },
            ],
          },
          name: 'menu-unfold',
          theme: 'outlined',
        },
        O = H,
        z = n(23986),
        F = function (e, t) {
          return m.createElement(z.Z, (0, d.Z)((0, d.Z)({}, e), {}, { ref: t, icon: O }))
        }
      F.displayName = 'MenuUnfoldOutlined'
      var L = m.forwardRef(F),
        A = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM115.4 518.9L271.7 642c5.8 4.6 14.4.5 14.4-6.9V388.9c0-7.4-8.5-11.5-14.4-6.9L115.4 505.1a8.74 8.74 0 000 13.8z',
                },
              },
            ],
          },
          name: 'menu-fold',
          theme: 'outlined',
        },
        B = A,
        I = function (e, t) {
          return m.createElement(z.Z, (0, d.Z)((0, d.Z)({}, e), {}, { ref: t, icon: B }))
        }
      I.displayName = 'MenuFoldOutlined'
      var D = m.forwardRef(I),
        j = (n(46292), n(68849), n(85592), n(574)),
        K = function (e) {
          var t = e.prefixCls,
            n = e.className,
            a = e.width,
            r = e.style
          return m.createElement('h3', { className: g()(t, n), style: (0, p.Z)({ width: a }, r) })
        },
        W = K,
        _ = n(22018),
        U = function (e) {
          var t = function (t) {
              var n = e.width,
                a = e.rows,
                r = void 0 === a ? 2 : a
              return Array.isArray(n) ? n[t] : r - 1 === t ? n : void 0
            },
            n = e.prefixCls,
            a = e.className,
            r = e.style,
            o = e.rows,
            i = (0, _.Z)(Array(o)).map(function (e, n) {
              return m.createElement('li', { key: n, style: { width: t(n) } })
            })
          return m.createElement('ul', { className: g()(n, a), style: r }, i)
        },
        G = U,
        q = n(62572),
        V = function (e) {
          var t,
            n,
            a = e.prefixCls,
            o = e.className,
            i = e.style,
            l = e.size,
            c = e.shape,
            s = g()(((t = {}), (0, r.Z)(t, ''.concat(a, '-lg'), 'large' === l), (0, r.Z)(t, ''.concat(a, '-sm'), 'small' === l), t)),
            u = g()(
              ((n = {}),
              (0, r.Z)(n, ''.concat(a, '-circle'), 'circle' === c),
              (0, r.Z)(n, ''.concat(a, '-square'), 'square' === c),
              (0, r.Z)(n, ''.concat(a, '-round'), 'round' === c),
              n),
            ),
            d = 'number' === typeof l ? { width: l, height: l, lineHeight: ''.concat(l, 'px') } : {}
          return m.createElement('span', { className: g()(a, s, u, o), style: (0, p.Z)((0, p.Z)({}, d), i) })
        },
        X = V,
        Q = n(85080),
        Y = function (e) {
          var t = e.prefixCls,
            n = e.className,
            a = e.active,
            o = m.useContext(q.E_),
            i = o.getPrefixCls,
            l = i('skeleton', t),
            c = (0, Q.Z)(e, ['prefixCls', 'className']),
            s = g()(l, ''.concat(l, '-element'), (0, r.Z)({}, ''.concat(l, '-active'), a), n)
          return m.createElement('div', { className: s }, m.createElement(X, (0, p.Z)({ prefixCls: ''.concat(l, '-avatar') }, c)))
        }
      Y.defaultProps = { size: 'default', shape: 'circle' }
      var $ = Y,
        J = function (e) {
          var t,
            n = e.prefixCls,
            a = e.className,
            o = e.active,
            i = e.block,
            l = void 0 !== i && i,
            c = m.useContext(q.E_),
            s = c.getPrefixCls,
            u = s('skeleton', n),
            d = (0, Q.Z)(e, ['prefixCls']),
            f = g()(u, ''.concat(u, '-element'), ((t = {}), (0, r.Z)(t, ''.concat(u, '-active'), o), (0, r.Z)(t, ''.concat(u, '-block'), l), t), a)
          return m.createElement('div', { className: f }, m.createElement(X, (0, p.Z)({ prefixCls: ''.concat(u, '-button') }, d)))
        }
      J.defaultProps = { size: 'default' }
      var ee = J,
        te = function (e) {
          var t,
            n = e.prefixCls,
            a = e.className,
            o = e.active,
            i = e.block,
            l = m.useContext(q.E_),
            c = l.getPrefixCls,
            s = c('skeleton', n),
            u = (0, Q.Z)(e, ['prefixCls']),
            d = g()(s, ''.concat(s, '-element'), ((t = {}), (0, r.Z)(t, ''.concat(s, '-active'), o), (0, r.Z)(t, ''.concat(s, '-block'), i), t), a)
          return m.createElement('div', { className: d }, m.createElement(X, (0, p.Z)({ prefixCls: ''.concat(s, '-input') }, u)))
        }
      te.defaultProps = { size: 'default' }
      var ne = te,
        ae =
          'M365.714286 329.142857q0 45.714286-32.036571 77.677714t-77.677714 32.036571-77.677714-32.036571-32.036571-77.677714 32.036571-77.677714 77.677714-32.036571 77.677714 32.036571 32.036571 77.677714zM950.857143 548.571429l0 256-804.571429 0 0-109.714286 182.857143-182.857143 91.428571 91.428571 292.571429-292.571429zM1005.714286 146.285714l-914.285714 0q-7.460571 0-12.873143 5.412571t-5.412571 12.873143l0 694.857143q0 7.460571 5.412571 12.873143t12.873143 5.412571l914.285714 0q7.460571 0 12.873143-5.412571t5.412571-12.873143l0-694.857143q0-7.460571-5.412571-12.873143t-12.873143-5.412571zM1097.142857 164.571429l0 694.857143q0 37.741714-26.843429 64.585143t-64.585143 26.843429l-914.285714 0q-37.741714 0-64.585143-26.843429t-26.843429-64.585143l0-694.857143q0-37.741714 26.843429-64.585143t64.585143-26.843429l914.285714 0q37.741714 0 64.585143 26.843429t26.843429 64.585143z',
        re = function (e) {
          var t = e.prefixCls,
            n = e.className,
            a = e.style,
            r = m.useContext(q.E_),
            o = r.getPrefixCls,
            i = o('skeleton', t),
            l = g()(i, ''.concat(i, '-element'), n)
          return m.createElement(
            'div',
            { className: l },
            m.createElement(
              'div',
              { className: g()(''.concat(i, '-image'), n), style: a },
              m.createElement(
                'svg',
                { viewBox: '0 0 1098 1024', xmlns: 'http://www.w3.org/2000/svg', className: ''.concat(i, '-image-svg') },
                m.createElement('path', { d: ae, className: ''.concat(i, '-image-path') }),
              ),
            ),
          )
        },
        oe = re
      function ie(e) {
        return e && 'object' === (0, j.Z)(e) ? e : {}
      }
      function le(e, t) {
        return e && !t ? { size: 'large', shape: 'square' } : { size: 'large', shape: 'circle' }
      }
      function ce(e, t) {
        return !e && t ? { width: '38%' } : e && t ? { width: '50%' } : {}
      }
      function se(e, t) {
        var n = {}
        return (e && t) || (n.width = '61%'), (n.rows = !e && t ? 3 : 2), n
      }
      var ue = function (e) {
        var t = e.prefixCls,
          n = e.loading,
          a = e.className,
          o = e.style,
          i = e.children,
          l = e.avatar,
          c = e.title,
          s = e.paragraph,
          u = e.active,
          d = e.round,
          f = m.useContext(q.E_),
          h = f.getPrefixCls,
          v = f.direction,
          y = h('skeleton', t)
        if (n || !('loading' in e)) {
          var x,
            Z,
            C,
            b = !!l,
            E = !!c,
            N = !!s
          if (b) {
            var w = (0, p.Z)((0, p.Z)({ prefixCls: ''.concat(y, '-avatar') }, le(E, N)), ie(l))
            Z = m.createElement('div', { className: ''.concat(y, '-header') }, m.createElement(X, w))
          }
          if (E || N) {
            var k, M
            if (E) {
              var R = (0, p.Z)((0, p.Z)({ prefixCls: ''.concat(y, '-title') }, ce(b, N)), ie(c))
              k = m.createElement(W, R)
            }
            if (N) {
              var P = (0, p.Z)((0, p.Z)({ prefixCls: ''.concat(y, '-paragraph') }, se(b, E)), ie(s))
              M = m.createElement(G, P)
            }
            C = m.createElement('div', { className: ''.concat(y, '-content') }, k, M)
          }
          var S = g()(
            y,
            ((x = {}),
            (0, r.Z)(x, ''.concat(y, '-with-avatar'), b),
            (0, r.Z)(x, ''.concat(y, '-active'), u),
            (0, r.Z)(x, ''.concat(y, '-rtl'), 'rtl' === v),
            (0, r.Z)(x, ''.concat(y, '-round'), d),
            x),
            a,
          )
          return m.createElement('div', { className: S, style: o }, Z, C)
        }
        return 'undefined' !== typeof i ? i : null
      }
      ;(ue.defaultProps = { avatar: !1, title: !0, paragraph: !0 }), (ue.Button = ee), (ue.Avatar = $), (ue.Input = ne), (ue.Image = oe)
      var de = ue,
        pe = de,
        me = n(24877),
        fe = n(84893),
        ge = ['className', 'component', 'viewBox', 'spin', 'rotate', 'tabIndex', 'onClick', 'children'],
        he = m.forwardRef(function (e, t) {
          var n = e.className,
            a = e.component,
            o = e.viewBox,
            i = e.spin,
            l = e.rotate,
            s = e.tabIndex,
            u = e.onClick,
            p = e.children,
            f = (0, c.Z)(e, ge)
          ;(0, fe.Kp)(Boolean(a || p), 'Should have `component` prop or `children`.'), (0, fe.C3)()
          var h = m.useContext(me.Z),
            v = h.prefixCls,
            y = void 0 === v ? 'anticon' : v,
            x = g()(y, n),
            Z = g()((0, r.Z)({}, ''.concat(y, '-spin'), !!i)),
            C = l ? { msTransform: 'rotate('.concat(l, 'deg)'), transform: 'rotate('.concat(l, 'deg)') } : void 0,
            b = (0, d.Z)((0, d.Z)({}, fe.vD), {}, { className: Z, style: C, viewBox: o })
          o || delete b.viewBox
          var E = function () {
              return a
                ? m.createElement(a, (0, d.Z)({}, b), p)
                : p
                ? ((0, fe.Kp)(
                    Boolean(o) || (1 === m.Children.count(p) && m.isValidElement(p) && 'use' === m.Children.only(p).type),
                    'Make sure that you provide correct `viewBox` prop (default `0 0 1024 1024`) to the icon.',
                  ),
                  m.createElement('svg', (0, d.Z)((0, d.Z)({}, b), {}, { viewBox: o }), p))
                : null
            },
            N = s
          return (
            void 0 === N && u && (N = -1),
            m.createElement('span', (0, d.Z)((0, d.Z)({ role: 'img' }, f), {}, { ref: t, tabIndex: N, onClick: u, className: x }), E())
          )
        })
      he.displayName = 'AntdIcon'
      var ve = he,
        ye = ['type', 'children'],
        xe = new Set()
      function Ze(e) {
        return Boolean('string' === typeof e && e.length && !xe.has(e))
      }
      function Ce(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
          n = e[t]
        if (Ze(n)) {
          var a = document.createElement('script')
          a.setAttribute('src', n),
            a.setAttribute('data-namespace', n),
            e.length > t + 1 &&
              ((a.onload = function () {
                Ce(e, t + 1)
              }),
              (a.onerror = function () {
                Ce(e, t + 1)
              })),
            xe.add(n),
            document.body.appendChild(a)
        }
      }
      function be() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.scriptUrl,
          n = e.extraCommonProps,
          a = void 0 === n ? {} : n
        t &&
          'undefined' !== typeof document &&
          'undefined' !== typeof window &&
          'function' === typeof document.createElement &&
          (Array.isArray(t) ? Ce(t.reverse()) : Ce([t]))
        var r = m.forwardRef(function (e, t) {
          var n = e.type,
            r = e.children,
            o = (0, c.Z)(e, ye),
            i = null
          return (
            e.type && (i = m.createElement('use', { xlinkHref: '#'.concat(n) })),
            r && (i = r),
            m.createElement(ve, (0, d.Z)((0, d.Z)((0, d.Z)({}, a), o), {}, { ref: t }), i)
          )
        })
        return (r.displayName = 'Iconfont'), r
      }
      var Ee = function (e) {
          if (!e) return !1
          if (!e.startsWith('http')) return !1
          try {
            var t = new URL(e)
            return !!t
          } catch (n) {
            return !1
          }
        },
        Ne = Ee
      function we(e) {
        return /\w.(png|jpg|jpeg|svg|webp|gif|bmp)$/i.test(e)
      }
      var ke = we,
        Me = n(13484),
        Re = n(4404),
        Pe = n(31565)
      function Se() {
        var e = (0, m.useState)([]),
          t = (0, u.Z)(e, 2),
          n = t[0],
          a = t[1]
        return { flatMenuKeys: n, setFlatMenuKeys: a }
      }
      var Te = (0, Pe.f)(Se),
        He = Te,
        Oe = be({ scriptUrl: Me.Z.iconfontUrl }),
        ze = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'icon-'
          if ('string' === typeof e && '' !== e) {
            if (Ne(e) || ke(e))
              return m.createElement(ve, {
                component: function () {
                  return m.createElement('img', { src: e, alt: 'icon', className: 'ant-pro-sider-menu-icon' })
                },
              })
            if (e.startsWith(t)) return m.createElement(Oe, { type: e })
          }
          return e
        },
        Fe = (0, R.Z)(function e(t) {
          var n = this
          ;(0, M.Z)(this, e),
            (this.props = void 0),
            (this.getNavMenuItems = function () {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                t = arguments.length > 1 ? arguments[1] : void 0
              return e
                .map(function (e) {
                  return n.getSubMenuOrItem(e, t)
                })
                .filter(function (e) {
                  return e
                })
            }),
            (this.getSubMenuOrItem = function (e, t) {
              var a = (null === e || void 0 === e ? void 0 : e.children) || (null === e || void 0 === e ? void 0 : e.routes)
              if (Array.isArray(a) && a.length > 0) {
                var r = n.getIntlName(e),
                  o = n.props,
                  i = o.subMenuItemRender,
                  l = o.prefixCls,
                  c = o.menu,
                  s = o.iconPrefixes,
                  u = e.icon
                    ? m.createElement(
                        'span',
                        { className: ''.concat(l, '-menu-item'), title: r },
                        !t && ze(e.icon, s),
                        m.createElement('span', { className: ''.concat(l, '-menu-item-title') }, r),
                      )
                    : m.createElement('span', { className: ''.concat(l, '-menu-item'), title: r }, r),
                  p = i ? i((0, d.Z)((0, d.Z)({}, e), {}, { isUrl: !1 }), u) : u
                return {
                  type: 'group' === (null === c || void 0 === c ? void 0 : c.type) ? 'group' : void 0,
                  label: p,
                  children: n.getNavMenuItems(a, !0),
                  onTitleClick: e.onTitleClick,
                  key: e.key || e.path,
                }
              }
              return {
                label: n.getMenuItemPath(e, t),
                title: n.getIntlName(e),
                key: e.key || e.path,
                disabled: e.disabled,
                onClick: function (t) {
                  var n
                  Ne(null === e || void 0 === e ? void 0 : e.path) && window.open(e.path),
                    null === (n = e.onTitleClick) || void 0 === n || n.call(e, t)
                },
              }
            }),
            (this.getIntlName = function (e) {
              var t = e.name,
                a = e.locale,
                r = n.props,
                o = r.menu,
                i = r.formatMessage
              return a && !1 !== (null === o || void 0 === o ? void 0 : o.locale)
                ? null === i || void 0 === i
                  ? void 0
                  : i({ id: a, defaultMessage: t })
                : t
            }),
            (this.getMenuItemPath = function (e, t) {
              var a = n.conversionPath(e.path || '/'),
                o = n.props,
                i = o.location,
                l = void 0 === i ? { pathname: '/' } : i,
                c = o.isMobile,
                s = o.onCollapse,
                u = o.menuItemRender,
                p = o.iconPrefixes,
                f = n.getIntlName(e),
                h = n.props.prefixCls,
                v = t ? null : ze(e.icon, p),
                y = Ne(a),
                x = m.createElement(
                  'span',
                  { className: g()(''.concat(h, '-menu-item'), (0, r.Z)({}, ''.concat(h, '-menu-item-link'), y)) },
                  v,
                  m.createElement('span', { className: ''.concat(h, '-menu-item-title') }, f),
                )
              if (u) {
                var Z = (0, d.Z)(
                  (0, d.Z)({}, e),
                  {},
                  {
                    isUrl: y,
                    itemPath: a,
                    isMobile: c,
                    replace: a === l.pathname,
                    onClick: function () {
                      y && window.open(a), s && s(!0)
                    },
                    children: void 0,
                  },
                )
                return u(Z, x, n.props)
              }
              return x
            }),
            (this.conversionPath = function (e) {
              return e && 0 === e.indexOf('http') ? e : '/'.concat(e || '').replace(/\/+/g, '/')
            }),
            (this.props = t)
        }),
        Le = function (e, t) {
          var n = t.layout,
            a = t.collapsed,
            r = {}
          return e && !a && ['side', 'mix'].includes(n || 'mix') && (r = { openKeys: e }), r
        },
        Ae = function (e) {
          var t = e.theme,
            n = e.mode,
            a = e.className,
            r = e.handleOpenChange,
            o = e.style,
            i = e.menuData,
            l = e.menu,
            c = e.matchMenuKeys,
            s = e.iconfontUrl,
            d = e.collapsed,
            f = e.selectedKeys,
            h = e.onSelect,
            v = e.openKeys,
            y = (0, m.useRef)([]),
            x = He.useContainer(),
            C = x.flatMenuKeys,
            b = (0, Z.Z)(null === l || void 0 === l ? void 0 : l.defaultOpenAll),
            E = (0, u.Z)(b, 2),
            N = E[0],
            w = E[1],
            k = (0, Z.Z)(
              function () {
                return (null === l || void 0 === l ? void 0 : l.defaultOpenAll) ? (0, Re.O7)(i) || [] : !1 !== v && []
              },
              { value: !1 === v ? void 0 : v, onChange: r },
            ),
            M = (0, u.Z)(k, 2),
            R = M[0],
            P = M[1],
            S = (0, Z.Z)([], {
              value: f,
              onChange: h
                ? function (e) {
                    h && e && h(e)
                  }
                : void 0,
            }),
            H = (0, u.Z)(S, 2),
            O = H[0],
            z = H[1]
          ;(0, m.useEffect)(
            function () {
              ;(null === l || void 0 === l ? void 0 : l.defaultOpenAll) || !1 === v || C.length || (c && (P(c), z(c)))
            },
            [c.join('-')],
          ),
            (0, m.useEffect)(
              function () {
                s && (Oe = be({ scriptUrl: s }))
              },
              [s],
            ),
            (0, m.useEffect)(
              function () {
                if ((c.join('-') !== (O || []).join('-') && z(c), N || !1 === v || c.join('-') === (R || []).join('-')))
                  (null === l || void 0 === l ? void 0 : l.ignoreFlatMenu) && N ? P((0, Re.O7)(i)) : C.length > 0 && w(!1)
                else {
                  var e = c
                  !1 === (null === l || void 0 === l ? void 0 : l.autoClose) && (e = Array.from(new Set([].concat((0, _.Z)(c), (0, _.Z)(R || []))))),
                    P(e)
                }
              },
              [c.join('-'), d],
            )
          var F = (0, m.useMemo)(
              function () {
                return Le(R, e)
              },
              [R && R.join(','), e.layout, e.collapsed],
            ),
            L = (0, m.useState)(function () {
              return new Fe(e)
            }),
            A = (0, u.Z)(L, 1),
            B = A[0]
          if (null === l || void 0 === l ? void 0 : l.loading)
            return m.createElement(
              'div',
              { style: (null === n || void 0 === n ? void 0 : n.includes('inline')) ? { padding: 24 } : { marginTop: 16 } },
              m.createElement(pe, {
                active: !0,
                title: !1,
                paragraph: { rows: (null === n || void 0 === n ? void 0 : n.includes('inline')) ? 6 : 1 },
              }),
            )
          var I = g()(a, { 'top-nav-menu': 'horizontal' === n })
          ;(B.props = e), !1 !== e.openKeys || e.handleOpenChange || (y.current = c)
          var D = e.postMenuData ? e.postMenuData(i) : i
          return D && (null === D || void 0 === D ? void 0 : D.length) < 1
            ? null
            : m.createElement(
                T.Z,
                (0, p.Z)(
                  {},
                  F,
                  {
                    key: 'Menu',
                    mode: n,
                    items: B.getNavMenuItems(D, !1),
                    inlineIndent: 16,
                    defaultOpenKeys: y.current,
                    theme: t,
                    selectedKeys: O,
                    style: o,
                    className: I,
                    onOpenChange: P,
                  },
                  e.menuProps,
                ),
              )
        }
      Ae.defaultProps = {
        postMenuData: function (e) {
          return e || []
        },
      }
      var Be = Ae,
        Ie = a.Z.Sider,
        De = function (e) {
          return 'string' === typeof e ? m.createElement('img', { src: e, alt: 'logo' }) : 'function' === typeof e ? e() : e
        },
        je = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'menuHeaderRender',
            n = e.logo,
            a = e.title,
            r = e.layout,
            o = e[t || '']
          if (!1 === o) return null
          var i = De(n),
            l = m.createElement('h1', null, null !== a && void 0 !== a ? a : 'Ant Design Pro')
          return o
            ? o(i, e.collapsed ? null : l, e)
            : 'mix' === r && 'menuHeaderRender' === t
            ? null
            : m.createElement('a', null, i, e.collapsed ? null : l)
        },
        Ke = function (e) {
          return e ? m.createElement(L, null) : m.createElement(D, null)
        },
        We = function (e) {
          var t,
            n = e.collapsed,
            a = e.fixSiderbar,
            o = e.menuFooterRender,
            i = e.onCollapse,
            l = e.theme,
            c = e.siderWidth,
            s = e.isMobile,
            u = e.onMenuHeaderClick,
            f = e.breakpoint,
            h = void 0 === f ? 'lg' : f,
            v = e.style,
            y = e.layout,
            x = e.menuExtraRender,
            Z = void 0 !== x && x,
            C = e.collapsedButtonRender,
            b = void 0 === C ? Ke : C,
            E = e.links,
            N = e.menuContentRender,
            w = e.prefixCls,
            k = e.onOpenChange,
            M = e.headerHeight,
            R = e.logoStyle,
            P = ''.concat(w, '-sider'),
            S = He.useContainer(),
            H = S.flatMenuKeys,
            O = g()(
              ''.concat(P),
              ((t = {}),
              (0, r.Z)(t, ''.concat(P, '-fixed'), a),
              (0, r.Z)(t, ''.concat(P, '-layout-').concat(y), y && !s),
              (0, r.Z)(t, ''.concat(P, '-light'), 'dark' !== l),
              t),
            ),
            z = je(e),
            F = Z && Z(e),
            L =
              !1 !== N &&
              H &&
              m.createElement(
                Be,
                (0, p.Z)({}, e, {
                  key: 'base-menu',
                  mode: 'inline',
                  handleOpenChange: k,
                  style: { width: '100%' },
                  className: ''.concat(P, '-menu'),
                }),
              ),
            A = N ? N(e, L) : L,
            B = (E || []).map(function (e, t) {
              return { className: ''.concat(P, '-link'), label: e, key: t }
            })
          return (
            b &&
              !s &&
              B.push({
                className: ''.concat(P, '-collapsed-button'),
                title: !1,
                key: 'collapsed',
                onClick: function () {
                  i && i(!n)
                },
                label: b(n),
              }),
            m.createElement(
              m.Fragment,
              null,
              a &&
                m.createElement('div', {
                  style: (0, d.Z)(
                    {
                      width: n ? 48 : c,
                      overflow: 'hidden',
                      flex: '0 0 '.concat(n ? 48 : c, 'px'),
                      maxWidth: n ? 48 : c,
                      minWidth: n ? 48 : c,
                      transition: 'background-color 0.3s, min-width 0.3s, max-width 0.3s cubic-bezier(0.645, 0.045, 0.355, 1)',
                    },
                    v,
                  ),
                }),
              m.createElement(
                Ie,
                {
                  collapsible: !0,
                  trigger: null,
                  collapsed: n,
                  breakpoint: !1 === h ? void 0 : h,
                  onCollapse: function (e) {
                    s || null === i || void 0 === i || i(e)
                  },
                  collapsedWidth: 48,
                  style: (0, d.Z)({ overflow: 'hidden', paddingTop: 'mix' !== y || s ? void 0 : M }, v),
                  width: c,
                  theme: l,
                  className: O,
                },
                z &&
                  m.createElement(
                    'div',
                    {
                      className: g()(''.concat(P, '-logo'), (0, r.Z)({}, ''.concat(P, '-collapsed'), n)),
                      onClick: 'mix' !== y ? u : void 0,
                      id: 'logo',
                      style: R,
                    },
                    z,
                  ),
                F && m.createElement('div', { className: ''.concat(P, '-extra ').concat(!z && ''.concat(P, '-extra-no-logo')) }, F),
                m.createElement('div', { style: { flex: 1, overflowY: 'auto', overflowX: 'hidden' } }, A),
                m.createElement(
                  'div',
                  { className: ''.concat(P, '-links') },
                  m.createElement(T.Z, {
                    theme: l,
                    inlineIndent: 16,
                    className: ''.concat(P, '-link-menu'),
                    selectedKeys: [],
                    openKeys: [],
                    mode: 'inline',
                    items: B,
                  }),
                ),
                o && m.createElement('div', { className: g()(''.concat(P, '-footer'), (0, r.Z)({}, ''.concat(P, '-footer-collapsed'), !n)) }, o(e)),
              ),
            )
          )
        },
        _e = We,
        Ue = n(57178),
        Ge = (n(36112), n(96793)),
        qe = ['rightContentRender', 'prefixCls'],
        Ve = function (e) {
          var t = e.rightContentRender,
            n = e.prefixCls,
            a = (0, c.Z)(e, qe),
            r = (0, m.useState)('auto'),
            o = (0, u.Z)(r, 2),
            s = o[0],
            p = o[1],
            f = (0, Ge.Z)(
              (function () {
                var e = (0, l.Z)(
                  i().mark(function e(t) {
                    return i().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            p(t)
                          case 1:
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
              160,
            )
          return m.createElement(
            'div',
            { className: ''.concat(n, '-right-content'), style: { minWidth: s } },
            m.createElement(
              'div',
              { style: { paddingRight: 8 } },
              m.createElement(
                Ue.Z,
                {
                  onResize: function (e) {
                    var t = e.width
                    f.run(t)
                  },
                },
                t &&
                  m.createElement(
                    'div',
                    { className: ''.concat(n, '-right-content-resize') },
                    t((0, d.Z)((0, d.Z)({}, a), {}, { rightContentSize: s })),
                  ),
              ),
            ),
          )
        },
        Xe = function (e) {
          var t = (0, m.useRef)(null),
            n = e.theme,
            a = e.onMenuHeaderClick,
            r = e.contentWidth,
            o = e.rightContentRender,
            i = e.className,
            l = e.style,
            c = e.headerContentRender,
            s = e.layout,
            u = ''.concat(e.prefixCls || 'ant-pro', '-top-nav-header'),
            f = je((0, d.Z)((0, d.Z)({}, e), {}, { collapsed: !1 }), 'mix' === s ? 'headerTitleRender' : void 0),
            h = g()(u, i, { light: 'light' === n }),
            v = m.createElement(Be, (0, p.Z)({}, e, e.menuProps)),
            y = c ? (null === c || void 0 === c ? void 0 : c(e, v)) : v
          return m.createElement(
            'div',
            { className: h, style: l },
            m.createElement(
              'div',
              { ref: t, className: ''.concat(u, '-main ').concat('Fixed' === r ? 'wide' : '') },
              f &&
                m.createElement(
                  'div',
                  { className: ''.concat(u, '-main-left'), onClick: a },
                  m.createElement('div', { className: ''.concat(u, '-logo'), key: 'logo', id: 'logo' }, f),
                ),
              m.createElement('div', { style: { flex: 1 }, className: ''.concat(u, '-menu') }, y),
              o && m.createElement(Ve, (0, p.Z)({ rightContentRender: o, prefixCls: u }, e)),
            ),
          )
        },
        Qe = Xe,
        Ye = function (e, t) {
          return !1 === e ? null : e ? e(t, null) : t
        },
        $e = function (e) {
          var t = e.isMobile,
            n = e.logo,
            a = e.collapsed,
            o = e.onCollapse,
            i = e.collapsedButtonRender,
            l = void 0 === i ? Ke : i,
            c = e.rightContentRender,
            u = e.menuHeaderRender,
            f = e.onMenuHeaderClick,
            h = e.className,
            v = e.style,
            y = e.layout,
            x = e.children,
            Z = e.headerTheme,
            C = void 0 === Z ? 'dark' : Z,
            b = e.splitMenus,
            E = e.menuData,
            N = e.prefixCls,
            w = (0, m.useContext)(s.ZP.ConfigContext),
            k = w.direction,
            M = ''.concat(N, '-global-header'),
            R = g()(h, M, (0, r.Z)({}, ''.concat(M, '-layout-').concat(y), y && 'dark' === C))
          if ('mix' === y && !t && b) {
            var P = (E || []).map(function (e) {
                return (0, d.Z)((0, d.Z)({}, e), {}, { children: void 0, routes: void 0 })
              }),
              S = (0, Re.QX)(P)
            return m.createElement(Qe, (0, p.Z)({ mode: 'horizontal' }, e, { splitMenus: !1, menuData: S, theme: C }))
          }
          var T = g()(''.concat(M, '-logo'), (0, r.Z)({}, ''.concat(M, '-logo-rtl'), 'rtl' === k)),
            H = m.createElement('span', { className: T, key: 'logo' }, m.createElement('a', null, De(n)))
          return m.createElement(
            'div',
            { className: R, style: (0, d.Z)({}, v) },
            t && Ye(u, H),
            t &&
              l &&
              m.createElement(
                'span',
                {
                  className: ''.concat(M, '-collapsed-button'),
                  onClick: function () {
                    o && o(!a)
                  },
                },
                l(a),
              ),
            'mix' === y &&
              !t &&
              m.createElement(
                m.Fragment,
                null,
                m.createElement('div', { className: T, onClick: f }, je((0, d.Z)((0, d.Z)({}, e), {}, { collapsed: !1 }), 'headerTitleRender')),
              ),
            m.createElement('div', { style: { flex: 1 } }, x),
            c && c(e),
          )
        },
        Je = $e,
        et = a.Z.Header,
        tt = (function (e) {
          ;(0, P.Z)(n, e)
          var t = (0, S.Z)(n)
          function n() {
            var e
            ;(0, M.Z)(this, n)
            for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
            return (
              (e = t.call.apply(t, [this].concat(r))),
              (e.renderContent = function () {
                var t = e.props,
                  n = t.isMobile,
                  a = t.onCollapse,
                  r = t.navTheme,
                  o = t.layout,
                  i = t.headerRender,
                  l = t.headerContentRender,
                  c = 'top' === o,
                  s = (0, Re.QX)(e.props.menuData || []),
                  u = m.createElement(Je, (0, p.Z)({ onCollapse: a }, e.props, { menuData: s }), l && l(e.props, null))
                return (
                  c && !n && (u = m.createElement(Qe, (0, p.Z)({ theme: r, mode: 'horizontal', onCollapse: a }, e.props, { menuData: s }))),
                  i && 'function' === typeof i ? i(e.props, u) : u
                )
              }),
              e
            )
          }
          return (
            (0, R.Z)(n, [
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.fixedHeader,
                    a = t.layout,
                    o = t.className,
                    i = t.style,
                    l = t.navTheme,
                    c = t.collapsed,
                    s = t.siderWidth,
                    u = t.hasSiderMenu,
                    p = t.isMobile,
                    f = t.prefixCls,
                    h = t.headerHeight,
                    v = n || 'mix' === a,
                    y = 'top' === a,
                    x = v && u && !y && !p,
                    Z = g()(
                      o,
                      ((e = {}),
                      (0, r.Z)(e, ''.concat(f, '-fixed-header'), v),
                      (0, r.Z)(e, ''.concat(f, '-fixed-header-action'), !c),
                      (0, r.Z)(e, ''.concat(f, '-top-menu'), y),
                      (0, r.Z)(e, ''.concat(f, '-header-').concat(l), l && 'mix' !== a),
                      e),
                    ),
                    C = 'mix' !== a && x ? 'calc(100% - '.concat(c ? 48 : s, 'px)') : '100%',
                    b = v ? 0 : void 0
                  return m.createElement(
                    m.Fragment,
                    null,
                    v && m.createElement(et, { style: { height: h, lineHeight: ''.concat(h, 'px'), background: 'transparent' } }),
                    m.createElement(
                      et,
                      {
                        style: (0, d.Z)(
                          { padding: 0, height: h, lineHeight: ''.concat(h, 'px'), width: C, zIndex: 'mix' === a ? 100 : 19, right: b },
                          i,
                        ),
                        className: Z,
                      },
                      this.renderContent(),
                    ),
                  )
                },
              },
            ]),
            n
          )
        })(m.Component),
        nt = tt,
        at = n(19357),
        rt = n(1814),
        ot = n(64378),
        it = (0, m.createContext)({}),
        lt = it,
        ct = (n(52421), n(30570)),
        st = function (e) {
          var t = e.isMobile,
            n = e.menuData,
            a = e.siderWidth,
            r = e.collapsed,
            o = e.onCollapse,
            i = e.style,
            l = e.className,
            c = e.hide,
            s = e.getContainer,
            u = e.prefixCls,
            f = e.matchMenuKeys,
            h = He.useContainer(),
            v = h.setFlatMenuKeys
          ;(0, m.useEffect)(
            function () {
              if (n && !(n.length < 1)) {
                var e = (0, k.kv)(n)
                v(Object.keys(e))
              }
            },
            [f.join('-')],
          ),
            (0, m.useEffect)(
              function () {
                !0 === t && (null === o || void 0 === o || o(!0))
              },
              [t],
            )
          var y = (0, N.Z)(e, ['className', 'style'])
          return c
            ? null
            : t
            ? m.createElement(
                ct.Z,
                {
                  visible: !r,
                  placement: 'left',
                  className: g()(''.concat(u, '-drawer-sider'), l),
                  onClose: function () {
                    return null === o || void 0 === o ? void 0 : o(!0)
                  },
                  style: (0, d.Z)({ padding: 0, height: '100vh' }, i),
                  getContainer: s,
                  width: a,
                  bodyStyle: { height: '100vh', padding: 0, display: 'flex', flexDirection: 'row' },
                },
                m.createElement(_e, (0, p.Z)({}, y, { className: g()(''.concat(u, '-sider'), l), collapsed: !t && r, splitMenus: !1 })),
              )
            : m.createElement(_e, (0, p.Z)({ className: g()(''.concat(u, '-sider'), l) }, y, { style: i }))
        },
        ut = st,
        dt = n(21656),
        pt = n.n(dt)
      function mt(e) {
        if (!e || '/' === e) return ['/']
        var t = e.split('/').filter(function (e) {
          return e
        })
        return t.map(function (e, n) {
          return '/'.concat(t.slice(0, n + 1).join('/'))
        })
      }
      var ft = function (e) {
          var t = e.breadcrumbName,
            n = e.path
          return m.createElement('a', { href: n }, t)
        },
        gt = function (e, t) {
          var n = t.formatMessage,
            a = t.menu
          return e.locale && n && !1 !== (null === a || void 0 === a ? void 0 : a.locale) ? n({ id: e.locale, defaultMessage: e.name }) : e.name
        },
        ht = function (e, t) {
          var n = e.get(t)
          if (!n) {
            var a = Array.from(e.keys()) || [],
              r = a.find(function (e) {
                return pt()(e.replace('?', '')).test(t)
              })
            r && (n = e.get(r))
          }
          return n || { path: '' }
        },
        vt = function (e) {
          var t = e.location,
            n = e.breadcrumbMap
          return { location: t, breadcrumbMap: n }
        },
        yt = function (e, t, n) {
          var a = mt(null === e || void 0 === e ? void 0 : e.pathname),
            r = a
              .map(function (e) {
                var a = ht(t, e),
                  r = gt(a, n),
                  o = a.hideInBreadcrumb
                return r && !o ? { path: e, breadcrumbName: r, component: a.component } : { path: '', breadcrumbName: '' }
              })
              .filter(function (e) {
                return e && e.path
              })
          return r
        },
        xt = function (e) {
          var t = vt(e),
            n = t.location,
            a = t.breadcrumbMap
          return n && n.pathname && a ? yt(n, a, e) : []
        },
        Zt = function (e, t) {
          var n = e.breadcrumbRender,
            a = e.itemRender,
            r = t.breadcrumbProps || {},
            o = r.minLength,
            i = void 0 === o ? 2 : o,
            l = xt(e),
            c = a || ft,
            s = l
          return n && (s = n(s) || []), ((s && s.length < i) || !1 === n) && (s = void 0), { routes: s, itemRender: c }
        },
        Ct = n(69402),
        bt = n(70236),
        Et = n(53017),
        Nt = n(21102),
        wt = function (e) {
          var t = e.autoClearCache,
            n = void 0 === t || t,
            r = e.style,
            o = e.className,
            i = e.children,
            l = e.ErrorBoundary || Nt.Z
          return m.createElement(
            Et.oK,
            { autoClearCache: n },
            !1 === e.ErrorBoundary
              ? m.createElement(a.Z.Content, { className: o, style: r }, i)
              : m.createElement(l, null, m.createElement(a.Z.Content, { className: o, style: r }, i)),
          )
        },
        kt = wt,
        Mt = function (e) {
          var t = ['sidemenu', 'topmenu']
          return t.includes(e) ? (null === e || void 0 === e ? void 0 : e.replace('menu', '')) : e
        },
        Rt = Mt,
        Pt = n(96973),
        St = function (e) {
          var t = (0, m.useState)({}),
            n = (0, u.Z)(t, 2),
            a = n[0],
            r = n[1]
          return (
            (0, m.useEffect)(
              function () {
                r(
                  (0, Pt.Z)({
                    layout: 'object' !== (0, j.Z)(e.layout) ? e.layout : void 0,
                    navTheme: e.navTheme,
                    menuRender: e.menuRender,
                    footerRender: e.footerRender,
                    menuHeaderRender: e.menuHeaderRender,
                    headerRender: e.headerRender,
                    fixSiderbar: e.fixSiderbar,
                    headerTheme: e.headerTheme,
                  }),
                )
              },
              [e.layout, e.navTheme, e.menuRender, e.footerRender, e.menuHeaderRender, e.headerRender, e.fixSiderbar, e.headerTheme],
            ),
            a
          )
        },
        Tt = St,
        Ht = ['id', 'defaultMessage'],
        Ot = ['fixSiderbar', 'navTheme', 'layout'],
        zt = 0,
        Ft = function (e, t) {
          return !1 === e.headerRender || e.pure ? null : m.createElement(nt, (0, p.Z)({ matchMenuKeys: t }, e))
        },
        Lt = function (e) {
          return !1 === e.footerRender || e.pure ? null : e.footerRender ? e.footerRender((0, d.Z)({}, e), m.createElement(ot.Z, null)) : null
        },
        At = function (e, t) {
          var n = e.layout,
            a = e.navTheme,
            r = e.isMobile,
            o = e.openKeys,
            i = e.splitMenus,
            l = e.menuRender
          if (!1 === e.menuRender || e.pure) return null
          var c = e.menuData
          if (i && (!1 !== o || 'mix' === n) && !r) {
            var s,
              d,
              f = (0, u.Z)(t, 1),
              g = f[0]
            if (g)
              c =
                (null === (s = e.menuData) ||
                void 0 === s ||
                null ===
                  (d = s.find(function (e) {
                    return e.key === g
                  })) ||
                void 0 === d
                  ? void 0
                  : d.routes) || []
            else c = []
          }
          var h = (0, Re.QX)(c || [])
          if (h && (null === h || void 0 === h ? void 0 : h.length) < 1 && i) return null
          if ('top' === n && !r) return m.createElement(ut, (0, p.Z)({ matchMenuKeys: t }, e, { hide: !0 }))
          var v = m.createElement(
            ut,
            (0, p.Z)({ matchMenuKeys: t }, e, { style: 'realDark' === a ? { boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 65%)' } : {}, menuData: h }),
          )
          return l ? l(e, v) : v
        },
        Bt = function (e, t) {
          var n = t.pageTitleRender,
            a = (0, at.nA)(e)
          if (!1 === n) return { title: t.title || '', id: '', pageName: '' }
          if (n) {
            var r = n(e, a.title, a)
            if ('string' === typeof r) return (0, d.Z)((0, d.Z)({}, a), {}, { title: r })
            v()('string' === typeof r, 'pro-layout: renderPageTitle return value should be a string')
          }
          return a
        },
        It = function (e, t, n) {
          return e ? (t ? 48 : n) : 0
        },
        Dt = function (e) {
          var t,
            n,
            o,
            f,
            h = e || {},
            v = h.children,
            C = h.onCollapse,
            b = h.location,
            M = void 0 === b ? { pathname: '/' } : b,
            R = h.contentStyle,
            P = h.route,
            S = h.defaultCollapsed,
            T = h.style,
            H = h.disableContentMargin,
            O = h.siderWidth,
            z = void 0 === O ? 208 : O,
            F = h.menu,
            L = h.isChildrenLayout,
            A = h.menuDataRender,
            B = h.actionRef,
            I = h.formatMessage,
            D = h.loading,
            j = (0, m.useContext)(s.ZP.ConfigContext),
            K = null !== (t = e.prefixCls) && void 0 !== t ? t : j.getPrefixCls('pro'),
            W = (0, Z.Z)(!1, {
              value: null === F || void 0 === F ? void 0 : F.loading,
              onChange: null === F || void 0 === F ? void 0 : F.onLoadingChange,
            }),
            _ = (0, u.Z)(W, 2),
            U = _[0],
            G = _[1],
            q = (0, m.useState)(function () {
              return (zt += 1), 'pro-layout-'.concat(zt)
            }),
            V = (0, u.Z)(q, 1),
            X = V[0],
            Q = (0, m.useCallback)(
              function (e) {
                var t = e.id,
                  n = e.defaultMessage,
                  a = (0, c.Z)(e, Ht)
                if (I) return I((0, d.Z)({ id: t, defaultMessage: n }, a))
                var r = (0, rt.e)()
                return r[t] ? r[t] : n
              },
              [I],
            ),
            Y = (0, w.ZP)(
              function () {
                return (null === F || void 0 === F ? void 0 : F.params) ? [X, null === F || void 0 === F ? void 0 : F.params] : [X, {}]
              },
              (function () {
                var e = (0, l.Z)(
                  i().mark(function e(t, n) {
                    var a, r
                    return i().wrap(function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            return (
                              G(!0),
                              (e.next = 3),
                              null === F || void 0 === F || null === (a = F.request) || void 0 === a
                                ? void 0
                                : a.call(F, n, (null === P || void 0 === P ? void 0 : P.routes) || [])
                            )
                          case 3:
                            return (r = e.sent), G(!1), e.abrupt('return', r)
                          case 6:
                          case 'end':
                            return e.stop()
                        }
                    }, e)
                  }),
                )
                return function (t, n) {
                  return e.apply(this, arguments)
                }
              })(),
              { revalidateOnFocus: !1, shouldRetryOnError: !1, revalidateOnReconnect: !1 },
            ),
            $ = Y.data,
            J = Y.mutate,
            ee = (0, w.kY)(),
            te = ee.cache
          ;(0, m.useEffect)(function () {
            return function () {
              te instanceof Map && te.clear()
            }
          }, [])
          var ne = (0, m.useMemo)(
              function () {
                return (0, Ct.Z)($ || (null === P || void 0 === P ? void 0 : P.routes) || [], F, Q, A)
              },
              [Q, F, A, $, null === P || void 0 === P ? void 0 : P.routes],
            ),
            ae = ne || {},
            re = ae.breadcrumb,
            oe = void 0 === re ? {} : re,
            ie = ae.breadcrumbMap,
            le = ae.menuData,
            ce = void 0 === le ? [] : le
          B &&
            (null === F || void 0 === F ? void 0 : F.request) &&
            (B.current = {
              reload: function () {
                J()
              },
            })
          var se = (0, m.useMemo)(
              function () {
                return (0, k.nG)(M.pathname || '/', ce || [], !0)
              },
              [M.pathname, ce],
            ),
            ue = (0, m.useMemo)(
              function () {
                return Array.from(
                  new Set(
                    se.map(function (e) {
                      return e.key || e.path || ''
                    }),
                  ),
                )
              },
              [se],
            ),
            de = se[se.length - 1] || {},
            pe = Tt(de),
            me = (0, d.Z)((0, d.Z)({}, e), pe),
            fe = me.fixSiderbar,
            ge = me.navTheme,
            he = me.layout,
            ve = (0, c.Z)(me, Ot),
            ye = Rt(he),
            xe = (0, x.ZP)(),
            Ze = ('sm' === xe || 'xs' === xe) && !e.disableMobile,
            Ce = 'top' !== ye && !Ze,
            be = (0, y.Z)(
              function () {
                return S || !1
              },
              { value: e.collapsed, onChange: C },
            ),
            Ee = (0, u.Z)(be, 2),
            Ne = Ee[0],
            we = Ee[1],
            ke = (0, N.Z)(
              (0, d.Z)(
                (0, d.Z)((0, d.Z)({ prefixCls: K }, e), {}, { siderWidth: z }, pe),
                {},
                { formatMessage: Q, breadcrumb: oe, menu: (0, d.Z)((0, d.Z)({}, F), {}, { loading: U }), layout: ye },
              ),
              ['className', 'style', 'breadcrumbRender'],
            ),
            Me = Bt((0, d.Z)((0, d.Z)({ pathname: M.pathname }, ke), {}, { breadcrumbMap: ie }), e),
            Re = Zt((0, d.Z)((0, d.Z)({}, ke), {}, { breadcrumbRender: e.breadcrumbRender, breadcrumbMap: ie }), e),
            Pe = At(
              (0, d.Z)((0, d.Z)({}, ke), {}, { menuData: ce, onCollapse: we, isMobile: Ze, theme: 'dark' === ge ? 'dark' : 'light', collapsed: Ne }),
              ue,
            ),
            Se = Ft(
              (0, d.Z)(
                (0, d.Z)({}, ke),
                {},
                { hasSiderMenu: !!Pe, menuData: ce, isMobile: Ze, collapsed: Ne, onCollapse: we, theme: 'dark' === ge ? 'dark' : 'light' },
              ),
              ue,
            ),
            Te = Lt((0, d.Z)({ isMobile: Ze, collapsed: Ne }, ke)),
            Oe = (0, m.useContext)(lt),
            ze = Oe.isChildrenLayout,
            Fe = void 0 !== L ? L : ze,
            Le = ''.concat(K, '-basicLayout'),
            Ae = g()(
              e.className,
              'ant-design-pro',
              Le,
              ((n = {}),
              (0, r.Z)(n, 'screen-'.concat(xe), xe),
              (0, r.Z)(n, ''.concat(Le, '-top-menu'), 'top' === ye),
              (0, r.Z)(n, ''.concat(Le, '-is-children'), Fe),
              (0, r.Z)(n, ''.concat(Le, '-fix-siderbar'), fe),
              (0, r.Z)(n, ''.concat(Le, '-').concat(ye), ye),
              n),
            ),
            Be = It(!!Ce, Ne, z),
            Ie = { position: 'relative' }
          ;(Fe || (R && R.minHeight)) && (Ie.minHeight = 0)
          var De = g()(
            ''.concat(Le, '-content'),
            ((o = {}), (0, r.Z)(o, ''.concat(Le, '-has-header'), Se), (0, r.Z)(o, ''.concat(Le, '-content-disable-margin'), H), o),
          )
          ;(0, m.useEffect)(
            function () {
              var t
              null === (t = e.onPageChange) || void 0 === t || t.call(e, e.location)
            },
            [M.pathname, null === (f = M.pathname) || void 0 === f ? void 0 : f.search],
          )
          var je = (0, m.useState)(!1),
            Ke = (0, u.Z)(je, 2),
            We = Ke[0],
            _e = Ke[1]
          return (
            E(Me, e.title || !1),
            m.createElement(
              He.Provider,
              null,
              m.createElement(
                lt.Provider,
                {
                  value: (0, d.Z)(
                    (0, d.Z)({}, ke),
                    {},
                    {
                      breadcrumb: Re,
                      menuData: ce,
                      isMobile: Ze,
                      collapsed: Ne,
                      isChildrenLayout: !0,
                      title: Me.pageName,
                      hasSiderMenu: !!Pe,
                      hasHeader: !!Se,
                      siderWidth: Be,
                      hasFooter: !!Te,
                      hasFooterToolbar: We,
                      setHasFooterToolbar: _e,
                      pageTitleInfo: Me,
                      matchMenus: se,
                      matchMenuKeys: ue,
                      currentMenu: de,
                    },
                  ),
                },
                e.pure
                  ? m.createElement(Et.oK, { autoClearCache: !0 }, v)
                  : m.createElement(
                      'div',
                      { className: Ae },
                      m.createElement(
                        a.Z,
                        { style: (0, d.Z)({ minHeight: '100%' }, T) },
                        Pe,
                        m.createElement(
                          'div',
                          { style: Ie, className: j.getPrefixCls('layout') },
                          Se,
                          m.createElement(
                            kt,
                            (0, p.Z)({ autoClearCache: !1, isChildrenLayout: Fe }, ve, { className: De, style: R }),
                            D ? m.createElement(bt.Z, null) : v,
                          ),
                          Te,
                        ),
                      ),
                    ),
              ),
            )
          )
        },
        jt = function () {
          return m.createElement(
            'svg',
            { width: '32px', height: '32px', viewBox: '0 0 200 200' },
            m.createElement(
              'defs',
              null,
              m.createElement(
                'linearGradient',
                { x1: '62.1023273%', y1: '0%', x2: '108.19718%', y2: '37.8635764%', id: 'linearGradient-1' },
                m.createElement('stop', { stopColor: '#4285EB', offset: '0%' }),
                m.createElement('stop', { stopColor: '#2EC7FF', offset: '100%' }),
              ),
              m.createElement(
                'linearGradient',
                { x1: '69.644116%', y1: '0%', x2: '54.0428975%', y2: '108.456714%', id: 'linearGradient-2' },
                m.createElement('stop', { stopColor: '#29CDFF', offset: '0%' }),
                m.createElement('stop', { stopColor: '#148EFF', offset: '37.8600687%' }),
                m.createElement('stop', { stopColor: '#0A60FF', offset: '100%' }),
              ),
              m.createElement(
                'linearGradient',
                { x1: '69.6908165%', y1: '-12.9743587%', x2: '16.7228981%', y2: '117.391248%', id: 'linearGradient-3' },
                m.createElement('stop', { stopColor: '#FA816E', offset: '0%' }),
                m.createElement('stop', { stopColor: '#F74A5C', offset: '41.472606%' }),
                m.createElement('stop', { stopColor: '#F51D2C', offset: '100%' }),
              ),
              m.createElement(
                'linearGradient',
                { x1: '68.1279872%', y1: '-35.6905737%', x2: '30.4400914%', y2: '114.942679%', id: 'linearGradient-4' },
                m.createElement('stop', { stopColor: '#FA8E7D', offset: '0%' }),
                m.createElement('stop', { stopColor: '#F74A5C', offset: '51.2635191%' }),
                m.createElement('stop', { stopColor: '#F51D2C', offset: '100%' }),
              ),
            ),
            m.createElement(
              'g',
              { stroke: 'none', strokeWidth: 1, fill: 'none', fillRule: 'evenodd' },
              m.createElement(
                'g',
                { transform: 'translate(-20.000000, -20.000000)' },
                m.createElement(
                  'g',
                  { transform: 'translate(20.000000, 20.000000)' },
                  m.createElement(
                    'g',
                    null,
                    m.createElement(
                      'g',
                      { fillRule: 'nonzero' },
                      m.createElement(
                        'g',
                        null,
                        m.createElement('path', {
                          d: 'M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C99.2571609,26.9692191 101.032305,26.9692191 102.20193,28.1378823 L129.985225,55.8983314 C134.193707,60.1033528 141.017005,60.1033528 145.225487,55.8983314 C149.433969,51.69331 149.433969,44.8756232 145.225487,40.6706018 L108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z',
                          fill: 'url(#linearGradient-1)',
                        }),
                        m.createElement('path', {
                          d: 'M91.5880863,4.17652823 L4.17996544,91.5127728 C-0.519240605,96.2081146 -0.519240605,103.791885 4.17996544,108.487227 L91.5880863,195.823472 C96.2872923,200.518814 103.877304,200.518814 108.57651,195.823472 L145.225487,159.204632 C149.433969,154.999611 149.433969,148.181924 145.225487,143.976903 C141.017005,139.771881 134.193707,139.771881 129.985225,143.976903 L102.20193,171.737352 C101.032305,172.906015 99.2571609,172.906015 98.0875359,171.737352 L28.285908,101.993122 C27.1162831,100.824459 27.1162831,99.050775 28.285908,97.8821118 L98.0875359,28.1378823 C100.999864,25.6271836 105.751642,20.541824 112.729652,19.3524487 C117.915585,18.4685261 123.585219,20.4140239 129.738554,25.1889424 C125.624663,21.0784292 118.571995,14.0340304 108.58055,4.05574592 C103.862049,-0.537986846 96.2692618,-0.500797906 91.5880863,4.17652823 Z',
                          fill: 'url(#linearGradient-2)',
                        }),
                      ),
                      m.createElement('path', {
                        d: 'M153.685633,135.854579 C157.894115,140.0596 164.717412,140.0596 168.925894,135.854579 L195.959977,108.842726 C200.659183,104.147384 200.659183,96.5636133 195.960527,91.8688194 L168.690777,64.7181159 C164.472332,60.5180858 157.646868,60.5241425 153.435895,64.7316526 C149.227413,68.936674 149.227413,75.7543607 153.435895,79.9593821 L171.854035,98.3623765 C173.02366,99.5310396 173.02366,101.304724 171.854035,102.473387 L153.685633,120.626849 C149.47715,124.83187 149.47715,131.649557 153.685633,135.854579 Z',
                        fill: 'url(#linearGradient-3)',
                      }),
                    ),
                    m.createElement('ellipse', {
                      fill: 'url(#linearGradient-4)',
                      cx: '100.519339',
                      cy: '100.436681',
                      rx: '23.6001926',
                      ry: '23.580786',
                    }),
                  ),
                ),
              ),
            ),
          )
        }
      Dt.defaultProps = (0, d.Z)((0, d.Z)({ logo: m.createElement(jt, null) }, Me.Z), {}, { location: (0, C.Z)() ? window.location : void 0 })
      var Kt = Dt,
        Wt = (n(46244), n(58021))
      function _t(e) {
        var t,
          n = function (n) {
            return function () {
              ;(t = null), e.apply(void 0, (0, _.Z)(n))
            }
          },
          a = function () {
            if (null == t) {
              for (var e = arguments.length, a = new Array(e), r = 0; r < e; r++) a[r] = arguments[r]
              t = (0, Wt.Z)(n(a))
            }
          }
        return (
          (a.cancel = function () {
            Wt.Z.cancel(t), (t = null)
          }),
          a
        )
      }
      function Ut() {
        return function (e, t, n) {
          var a = n.value,
            r = !1
          return {
            configurable: !0,
            get: function () {
              if (r || this === e.prototype || this.hasOwnProperty(t)) return a
              var n = _t(a.bind(this))
              return (r = !0), Object.defineProperty(this, t, { value: n, configurable: !0, writable: !0 }), (r = !1), n
            },
          }
        }
      }
      var Gt = n(69817)
      function qt(e) {
        return e !== window ? e.getBoundingClientRect() : { top: 0, bottom: window.innerHeight }
      }
      function Vt(e, t, n) {
        if (void 0 !== n && t.top > e.top - n) return n + t.top
      }
      function Xt(e, t, n) {
        if (void 0 !== n && t.bottom < e.bottom + n) {
          var a = window.innerHeight - t.bottom
          return n + a
        }
      }
      var Qt = ['resize', 'scroll', 'touchstart', 'touchmove', 'touchend', 'pageshow', 'load'],
        Yt = []
      function $t(e, t) {
        if (e) {
          var n = Yt.find(function (t) {
            return t.target === e
          })
          n
            ? n.affixList.push(t)
            : ((n = { target: e, affixList: [t], eventHandlers: {} }),
              Yt.push(n),
              Qt.forEach(function (t) {
                n.eventHandlers[t] = (0, Gt.Z)(e, t, function () {
                  n.affixList.forEach(function (e) {
                    e.lazyUpdatePosition()
                  })
                })
              }))
        }
      }
      function Jt(e) {
        var t = Yt.find(function (t) {
          var n = t.affixList.some(function (t) {
            return t === e
          })
          return (
            n &&
              (t.affixList = t.affixList.filter(function (t) {
                return t !== e
              })),
            n
          )
        })
        t &&
          0 === t.affixList.length &&
          ((Yt = Yt.filter(function (e) {
            return e !== t
          })),
          Qt.forEach(function (e) {
            var n = t.eventHandlers[e]
            n && n.remove && n.remove()
          }))
      }
      var en,
        tn = function (e, t, n, a) {
          var r,
            o = arguments.length,
            i = o < 3 ? t : null === a ? (a = Object.getOwnPropertyDescriptor(t, n)) : a
          if ('object' === ('undefined' === typeof Reflect ? 'undefined' : (0, j.Z)(Reflect)) && 'function' === typeof Reflect.decorate)
            i = Reflect.decorate(e, t, n, a)
          else for (var l = e.length - 1; l >= 0; l--) (r = e[l]) && (i = (o < 3 ? r(i) : o > 3 ? r(t, n, i) : r(t, n)) || i)
          return o > 3 && i && Object.defineProperty(t, n, i), i
        }
      function nn() {
        return 'undefined' !== typeof window ? window : null
      }
      ;(function (e) {
        ;(e[(e['None'] = 0)] = 'None'), (e[(e['Prepare'] = 1)] = 'Prepare')
      })(en || (en = {}))
      var an = (function (e) {
        ;(0, P.Z)(n, e)
        var t = (0, S.Z)(n)
        function n() {
          var e
          return (
            (0, M.Z)(this, n),
            (e = t.apply(this, arguments)),
            (e.state = { status: en.None, lastAffix: !1, prevTarget: null }),
            (e.getOffsetTop = function () {
              var t = e.props,
                n = t.offsetBottom,
                a = t.offsetTop
              return void 0 === n && void 0 === a ? 0 : a
            }),
            (e.getOffsetBottom = function () {
              return e.props.offsetBottom
            }),
            (e.savePlaceholderNode = function (t) {
              e.placeholderNode = t
            }),
            (e.saveFixedNode = function (t) {
              e.fixedNode = t
            }),
            (e.measure = function () {
              var t = e.state,
                n = t.status,
                a = t.lastAffix,
                r = e.props.onChange,
                o = e.getTargetFunc()
              if (n === en.Prepare && e.fixedNode && e.placeholderNode && o) {
                var i = e.getOffsetTop(),
                  l = e.getOffsetBottom(),
                  c = o()
                if (c) {
                  var s = { status: en.None },
                    u = qt(c),
                    d = qt(e.placeholderNode),
                    p = Vt(d, u, i),
                    m = Xt(d, u, l)
                  void 0 !== p
                    ? ((s.affixStyle = { position: 'fixed', top: p, width: d.width, height: d.height }),
                      (s.placeholderStyle = { width: d.width, height: d.height }))
                    : void 0 !== m &&
                      ((s.affixStyle = { position: 'fixed', bottom: m, width: d.width, height: d.height }),
                      (s.placeholderStyle = { width: d.width, height: d.height })),
                    (s.lastAffix = !!s.affixStyle),
                    r && a !== s.lastAffix && r(s.lastAffix),
                    e.setState(s)
                }
              }
            }),
            (e.prepareMeasure = function () {
              e.setState({ status: en.Prepare, affixStyle: void 0, placeholderStyle: void 0 })
            }),
            e
          )
        }
        return (
          (0, R.Z)(n, [
            {
              key: 'getTargetFunc',
              value: function () {
                var e = this.context.getTargetContainer,
                  t = this.props.target
                return void 0 !== t ? t : e || nn
              },
            },
            {
              key: 'componentDidMount',
              value: function () {
                var e = this,
                  t = this.getTargetFunc()
                t &&
                  (this.timeout = setTimeout(function () {
                    $t(t(), e), e.updatePosition()
                  }))
              },
            },
            {
              key: 'componentDidUpdate',
              value: function (e) {
                var t = this.state.prevTarget,
                  n = this.getTargetFunc(),
                  a = (null === n || void 0 === n ? void 0 : n()) || null
                t !== a && (Jt(this), a && ($t(a, this), this.updatePosition()), this.setState({ prevTarget: a })),
                  (e.offsetTop === this.props.offsetTop && e.offsetBottom === this.props.offsetBottom) || this.updatePosition(),
                  this.measure()
              },
            },
            {
              key: 'componentWillUnmount',
              value: function () {
                clearTimeout(this.timeout), Jt(this), this.updatePosition.cancel(), this.lazyUpdatePosition.cancel()
              },
            },
            {
              key: 'updatePosition',
              value: function () {
                this.prepareMeasure()
              },
            },
            {
              key: 'lazyUpdatePosition',
              value: function () {
                var e = this.getTargetFunc(),
                  t = this.state.affixStyle
                if (e && t) {
                  var n = this.getOffsetTop(),
                    a = this.getOffsetBottom(),
                    r = e()
                  if (r && this.placeholderNode) {
                    var o = qt(r),
                      i = qt(this.placeholderNode),
                      l = Vt(i, o, n),
                      c = Xt(i, o, a)
                    if ((void 0 !== l && t.top === l) || (void 0 !== c && t.bottom === c)) return
                  }
                }
                this.prepareMeasure()
              },
            },
            {
              key: 'render',
              value: function () {
                var e = this,
                  t = this.state,
                  n = t.affixStyle,
                  a = t.placeholderStyle,
                  o = this.props,
                  i = o.affixPrefixCls,
                  l = o.children,
                  c = g()((0, r.Z)({}, i, !!n)),
                  s = (0, Q.Z)(this.props, ['prefixCls', 'offsetTop', 'offsetBottom', 'target', 'onChange', 'affixPrefixCls'])
                return m.createElement(
                  Ue.Z,
                  {
                    onResize: function () {
                      e.updatePosition()
                    },
                  },
                  m.createElement(
                    'div',
                    (0, p.Z)({}, s, { ref: this.savePlaceholderNode }),
                    n && m.createElement('div', { style: a, 'aria-hidden': 'true' }),
                    m.createElement(
                      'div',
                      { className: c, ref: this.saveFixedNode, style: n },
                      m.createElement(
                        Ue.Z,
                        {
                          onResize: function () {
                            e.updatePosition()
                          },
                        },
                        l,
                      ),
                    ),
                  ),
                )
              },
            },
          ]),
          n
        )
      })(m.Component)
      ;(an.contextType = q.E_), tn([Ut()], an.prototype, 'updatePosition', null), tn([Ut()], an.prototype, 'lazyUpdatePosition', null)
      var rn = m.forwardRef(function (e, t) {
        var n = e.prefixCls,
          a = m.useContext(q.E_),
          r = a.getPrefixCls,
          o = r('affix', n),
          i = (0, p.Z)((0, p.Z)({}, e), { affixPrefixCls: o })
        return m.createElement(an, (0, p.Z)({}, i, { ref: t }))
      })
      var on = rn,
        ln = (n(54338), n(22106), n(45917), n(92278), n(57031), n(51873)),
        cn = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z',
                },
              },
            ],
          },
          name: 'arrow-left',
          theme: 'outlined',
        },
        sn = cn,
        un = function (e, t) {
          return m.createElement(z.Z, (0, d.Z)((0, d.Z)({}, e), {}, { ref: t, icon: sn }))
        }
      un.displayName = 'ArrowLeftOutlined'
      var dn = m.forwardRef(un),
        pn = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88.5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3.6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-.7 5.2-2L869 536.2a32.07 32.07 0 000-48.4z',
                },
              },
            ],
          },
          name: 'arrow-right',
          theme: 'outlined',
        },
        mn = pn,
        fn = function (e, t) {
          return m.createElement(z.Z, (0, d.Z)((0, d.Z)({}, e), {}, { ref: t, icon: mn }))
        }
      fn.displayName = 'ArrowRightOutlined'
      var gn = m.forwardRef(fn),
        hn = n(48436),
        vn = n(49685),
        yn = n(51053),
        xn = function (e, t) {
          var n = {}
          for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a])
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
          }
          return n
        },
        Zn = function (e) {
          var t,
            n = e.prefixCls,
            a = e.separator,
            r = void 0 === a ? '/' : a,
            o = e.children,
            i = e.overlay,
            l = e.dropdownProps,
            c = xn(e, ['prefixCls', 'separator', 'children', 'overlay', 'dropdownProps']),
            s = m.useContext(q.E_),
            u = s.getPrefixCls,
            d = u('breadcrumb', n),
            f = function (e) {
              return i
                ? m.createElement(
                    yn.Z,
                    (0, p.Z)({ overlay: i, placement: 'bottom' }, l),
                    m.createElement('span', { className: ''.concat(d, '-overlay-link') }, e, m.createElement(vn.Z, null)),
                  )
                : e
            }
          return (
            (t =
              'href' in c
                ? m.createElement('a', (0, p.Z)({ className: ''.concat(d, '-link') }, c), o)
                : m.createElement('span', (0, p.Z)({ className: ''.concat(d, '-link') }, c), o)),
            (t = f(t)),
            o ? m.createElement('li', null, t, r && m.createElement('span', { className: ''.concat(d, '-separator') }, r)) : null
          )
        }
      Zn.__ANT_BREADCRUMB_ITEM = !0
      var Cn = Zn,
        bn = function (e) {
          var t = e.children,
            n = m.useContext(q.E_),
            a = n.getPrefixCls,
            r = a('breadcrumb')
          return m.createElement('span', { className: ''.concat(r, '-separator') }, t || '/')
        }
      bn.__ANT_BREADCRUMB_SEPARATOR = !0
      var En = bn,
        Nn = n(8135),
        wn = function (e, t) {
          var n = {}
          for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a])
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
          }
          return n
        }
      function kn(e, t) {
        if (!e.breadcrumbName) return null
        var n = Object.keys(t).join('|'),
          a = e.breadcrumbName.replace(new RegExp(':('.concat(n, ')'), 'g'), function (e, n) {
            return t[n] || e
          })
        return a
      }
      function Mn(e, t, n, a) {
        var r = n.indexOf(e) === n.length - 1,
          o = kn(e, t)
        return r ? m.createElement('span', null, o) : m.createElement('a', { href: '#/'.concat(a.join('/')) }, o)
      }
      var Rn = function (e, t) {
          return (
            (e = (e || '').replace(/^\//, '')),
            Object.keys(t).forEach(function (n) {
              e = e.replace(':'.concat(n), t[n])
            }),
            e
          )
        },
        Pn = function (e, t, n) {
          var a = (0, _.Z)(e),
            r = Rn(t || '', n)
          return r && a.push(r), a
        },
        Sn = function (e) {
          var t,
            n = e.prefixCls,
            a = e.separator,
            o = void 0 === a ? '/' : a,
            i = e.style,
            l = e.className,
            c = e.routes,
            s = e.children,
            u = e.itemRender,
            d = void 0 === u ? Mn : u,
            f = e.params,
            h = void 0 === f ? {} : f,
            v = wn(e, ['prefixCls', 'separator', 'style', 'className', 'routes', 'children', 'itemRender', 'params']),
            y = m.useContext(q.E_),
            x = y.getPrefixCls,
            Z = y.direction,
            C = x('breadcrumb', n)
          if (c && c.length > 0) {
            var b = []
            t = c.map(function (e) {
              var t,
                n = Rn(e.path, h)
              return (
                n && b.push(n),
                e.children &&
                  e.children.length &&
                  (t = m.createElement(T.Z, {
                    items: e.children.map(function (e) {
                      return { key: e.path || e.breadcrumbName, label: d(e, h, c, Pn(b, e.path, h)) }
                    }),
                  })),
                m.createElement(Cn, { overlay: t, separator: o, key: n || e.breadcrumbName }, d(e, h, c, b))
              )
            })
          } else
            s &&
              (t = (0, hn.Z)(s).map(function (e, t) {
                return e ? (0, Nn.Tm)(e, { separator: o, key: t }) : e
              }))
          var E = g()(C, (0, r.Z)({}, ''.concat(C, '-rtl'), 'rtl' === Z), l)
          return m.createElement('nav', (0, p.Z)({ className: E, style: i }, v), m.createElement('ol', null, t))
        }
      ;(Sn.Item = Cn), (Sn.Separator = En)
      var Tn = Sn,
        Hn = Tn,
        On = n(25067),
        zn = n(69978),
        Fn = n(77986),
        Ln = n(36658),
        An = function (e, t, n) {
          return t && n
            ? m.createElement(Ln.Z, { componentName: 'PageHeader' }, function (a) {
                var r = a.back
                return m.createElement(
                  'div',
                  { className: ''.concat(e, '-back') },
                  m.createElement(
                    Fn.Z,
                    {
                      onClick: function (e) {
                        null === n || void 0 === n || n(e)
                      },
                      className: ''.concat(e, '-back-button'),
                      'aria-label': r,
                    },
                    t,
                  ),
                )
              })
            : null
        },
        Bn = function (e) {
          return m.createElement(Hn, e)
        },
        In = function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 'ltr'
          return void 0 !== e.backIcon ? e.backIcon : 'rtl' === t ? m.createElement(gn, null) : m.createElement(dn, null)
        },
        Dn = function (e, t) {
          var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 'ltr',
            a = t.title,
            r = t.avatar,
            o = t.subTitle,
            i = t.tags,
            l = t.extra,
            c = t.onBack,
            s = ''.concat(e, '-heading'),
            u = a || o || i || l
          if (!u) return null
          var d = In(t, n),
            p = An(e, d, c),
            f = p || r || u
          return m.createElement(
            'div',
            { className: s },
            f &&
              m.createElement(
                'div',
                { className: ''.concat(s, '-left') },
                p,
                r && m.createElement(On.C, r),
                a && m.createElement('span', { className: ''.concat(s, '-title'), title: 'string' === typeof a ? a : void 0 }, a),
                o && m.createElement('span', { className: ''.concat(s, '-sub-title'), title: 'string' === typeof o ? o : void 0 }, o),
                i && m.createElement('span', { className: ''.concat(s, '-tags') }, i),
              ),
            l && m.createElement('span', { className: ''.concat(s, '-extra') }, m.createElement(zn.Z, null, l)),
          )
        },
        jn = function (e, t) {
          return t ? m.createElement('div', { className: ''.concat(e, '-footer') }, t) : null
        },
        Kn = function (e, t) {
          return m.createElement('div', { className: ''.concat(e, '-content') }, t)
        },
        Wn = function (e) {
          var t = (0, ln.Z)(!1),
            n = (0, u.Z)(t, 2),
            a = n[0],
            o = n[1],
            i = function (e) {
              var t = e.width
              o(t < 768, !0)
            }
          return m.createElement(q.C, null, function (t) {
            var n,
              o,
              l = t.getPrefixCls,
              c = t.pageHeader,
              s = t.direction,
              u = e.prefixCls,
              d = e.style,
              p = e.footer,
              f = e.children,
              h = e.breadcrumb,
              v = e.breadcrumbRender,
              y = e.className,
              x = !0
            'ghost' in e ? (x = e.ghost) : c && 'ghost' in c && (x = c.ghost)
            var Z = l('page-header', u),
              C = function () {
                return (null === h || void 0 === h ? void 0 : h.routes) ? Bn(h) : null
              },
              b = C(),
              E = h && 'props' in h,
              N = null !== (o = null === v || void 0 === v ? void 0 : v(e, b)) && void 0 !== o ? o : b,
              w = E ? h : N,
              k = g()(
                Z,
                y,
                ((n = { 'has-breadcrumb': !!w, 'has-footer': !!p }),
                (0, r.Z)(n, ''.concat(Z, '-ghost'), x),
                (0, r.Z)(n, ''.concat(Z, '-rtl'), 'rtl' === s),
                (0, r.Z)(n, ''.concat(Z, '-compact'), a),
                n),
              )
            return m.createElement(Ue.Z, { onResize: i }, m.createElement('div', { className: k, style: d }, w, Dn(Z, e, s), f && Kn(Z, f), jn(Z, p)))
          })
        },
        _n = Wn,
        Un = (n(19597), n(61567)),
        Gn =
          (n(66755),
          function (e) {
            var t = (0, m.useContext)(lt),
              n = e.children,
              a = e.contentWidth,
              r = e.className,
              o = e.style,
              i = (0, m.useContext)(s.ZP.ConfigContext),
              l = i.getPrefixCls,
              c = e.prefixCls || l('pro'),
              u = a || t.contentWidth,
              d = ''.concat(c, '-grid-content')
            return m.createElement(
              'div',
              { className: g()(d, r, { wide: 'Fixed' === u }), style: o },
              m.createElement('div', { className: ''.concat(c, '-grid-content-children') }, n),
            )
          }),
        qn = Gn,
        Vn = (n(58443), ['children', 'className', 'extra', 'style', 'renderContent']),
        Xn = function (e) {
          var t = e.children,
            n = e.className,
            a = e.extra,
            r = e.style,
            o = e.renderContent,
            i = (0, c.Z)(e, Vn),
            l = (0, m.useContext)(s.ZP.ConfigContext),
            u = l.getPrefixCls,
            f = e.prefixCls || u('pro'),
            h = ''.concat(f, '-footer-bar'),
            v = (0, m.useContext)(lt),
            y = (0, m.useMemo)(
              function () {
                var e = v.hasSiderMenu,
                  t = v.isMobile,
                  n = v.siderWidth
                if (e) return n ? (t ? '100%' : 'calc(100% - '.concat(n, 'px)')) : '100%'
              },
              [v.collapsed, v.hasSiderMenu, v.isMobile, v.siderWidth],
            ),
            x = m.createElement(
              m.Fragment,
              null,
              m.createElement('div', { className: ''.concat(h, '-left') }, a),
              m.createElement('div', { className: ''.concat(h, '-right') }, t),
            )
          return (
            (0, m.useEffect)(function () {
              return v && (null === v || void 0 === v ? void 0 : v.setHasFooterToolbar)
                ? (null === v || void 0 === v || v.setHasFooterToolbar(!0),
                  function () {
                    var e
                    null === v || void 0 === v || null === (e = v.setHasFooterToolbar) || void 0 === e || e.call(v, !1)
                  })
                : function () {}
            }, []),
            m.createElement(
              'div',
              (0, p.Z)({ className: g()(n, ''.concat(h)), style: (0, d.Z)({ width: y }, r) }, (0, N.Z)(i, ['prefixCls'])),
              o ? o((0, d.Z)((0, d.Z)((0, d.Z)({}, e), v), {}, { leftWidth: y }), x) : x,
            )
          )
        },
        Qn = Xn,
        Yn =
          (n(32590),
          function (e) {
            if (!e) return 1
            var t =
              e.backingStorePixelRatio ||
              e.webkitBackingStorePixelRatio ||
              e.mozBackingStorePixelRatio ||
              e.msBackingStorePixelRatio ||
              e.oBackingStorePixelRatio ||
              e.backingStorePixelRatio ||
              1
            return (window.devicePixelRatio || 1) / t
          }),
        $n = function (e) {
          var t = e.children,
            n = e.style,
            a = e.className,
            r = e.markStyle,
            o = e.markClassName,
            i = e.zIndex,
            l = void 0 === i ? 9 : i,
            c = e.gapX,
            p = void 0 === c ? 212 : c,
            f = e.gapY,
            h = void 0 === f ? 222 : f,
            v = e.width,
            y = void 0 === v ? 120 : v,
            x = e.height,
            Z = void 0 === x ? 64 : x,
            C = e.rotate,
            b = void 0 === C ? -22 : C,
            E = e.image,
            N = e.content,
            w = e.offsetLeft,
            k = e.offsetTop,
            M = e.fontStyle,
            R = void 0 === M ? 'normal' : M,
            P = e.fontWeight,
            S = void 0 === P ? 'normal' : P,
            T = e.fontColor,
            H = void 0 === T ? 'rgba(0,0,0,.15)' : T,
            O = e.fontSize,
            z = void 0 === O ? 16 : O,
            F = e.fontFamily,
            L = void 0 === F ? 'sans-serif' : F,
            A = e.prefixCls,
            B = (0, m.useContext)(s.ZP.ConfigContext),
            I = B.getPrefixCls,
            D = I('pro-layout-watermark', A),
            j = g()(''.concat(D, '-wrapper'), a),
            K = g()(D, o),
            W = (0, m.useState)(''),
            _ = (0, u.Z)(W, 2),
            U = _[0],
            G = _[1]
          return (
            (0, m.useEffect)(
              function () {
                var e = document.createElement('canvas'),
                  t = e.getContext('2d'),
                  n = Yn(t),
                  a = ''.concat((p + y) * n, 'px'),
                  r = ''.concat((h + Z) * n, 'px'),
                  o = w || p / 2,
                  i = k || h / 2
                if ((e.setAttribute('width', a), e.setAttribute('height', r), t)) {
                  t.translate(o * n, i * n), t.rotate((Math.PI / 180) * Number(b))
                  var l = y * n,
                    c = Z * n
                  if (E) {
                    var s = new Image()
                    ;(s.crossOrigin = 'anonymous'),
                      (s.referrerPolicy = 'no-referrer'),
                      (s.src = E),
                      (s.onload = function () {
                        t.drawImage(s, 0, 0, l, c), G(e.toDataURL())
                      })
                  } else if (N) {
                    var u = Number(z) * n
                    ;(t.font = ''.concat(R, ' normal ').concat(S, ' ').concat(u, 'px/').concat(c, 'px ').concat(L)),
                      (t.fillStyle = H),
                      t.fillText(N, 0, 0),
                      G(e.toDataURL())
                  }
                } else console.error('\u5f53\u524d\u73af\u5883\u4e0d\u652f\u6301Canvas')
              },
              [p, h, w, k, b, R, S, y, Z, L, H, E, N, z],
            ),
            m.createElement(
              'div',
              { style: (0, d.Z)({ position: 'relative' }, n), className: j },
              t,
              m.createElement('div', {
                className: K,
                style: (0, d.Z)(
                  {
                    zIndex: l,
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    width: '100%',
                    height: '100%',
                    backgroundSize: ''.concat(p + y, 'px'),
                    pointerEvents: 'none',
                    backgroundRepeat: 'repeat',
                    backgroundImage: "url('".concat(U, "')"),
                  },
                  r,
                ),
              }),
            )
          )
        },
        Jn = $n,
        ea = ['title', 'content', 'pageHeaderRender', 'header', 'prefixedClassName', 'extraContent', 'style', 'prefixCls', 'breadcrumbRender'],
        ta = ['children', 'loading', 'className', 'style', 'footer', 'affixProps', 'ghost', 'fixedHeader', 'breadcrumbRender']
      function na(e) {
        return 'object' === (0, j.Z)(e) ? e : { spinning: e }
      }
      var aa = function (e) {
          var t = e.tabList,
            n = e.tabActiveKey,
            a = e.onTabChange,
            r = e.tabBarExtraContent,
            o = e.tabProps,
            i = e.prefixedClassName
          return Array.isArray(t) || r
            ? m.createElement(
                Un.Z,
                (0, p.Z)(
                  {
                    className: ''.concat(i, '-tabs'),
                    activeKey: n,
                    onChange: function (e) {
                      a && a(e)
                    },
                    tabBarExtraContent: r,
                  },
                  o,
                ),
                null === t || void 0 === t
                  ? void 0
                  : t.map(function (e, t) {
                      return m.createElement(Un.Z.TabPane, (0, p.Z)({}, e, { tab: e.tab, key: e.key || t }))
                    }),
              )
            : null
        },
        ra = function (e, t, n) {
          return e || t
            ? m.createElement(
                'div',
                { className: ''.concat(n, '-detail') },
                m.createElement(
                  'div',
                  { className: ''.concat(n, '-main') },
                  m.createElement(
                    'div',
                    { className: ''.concat(n, '-row') },
                    e && m.createElement('div', { className: ''.concat(n, '-content') }, e),
                    t && m.createElement('div', { className: ''.concat(n, '-extraContent') }, t),
                  ),
                ),
              )
            : null
        },
        oa = function (e) {
          var t,
            n = (0, m.useContext)(lt),
            a = e.title,
            r = e.content,
            o = e.pageHeaderRender,
            i = e.header,
            l = e.prefixedClassName,
            s = e.extraContent,
            u = (e.style, e.prefixCls),
            f = e.breadcrumbRender,
            g = (0, c.Z)(e, ea),
            h = (0, m.useMemo)(
              function () {
                if (f) return f
              },
              [f],
            )
          if (!1 === o) return null
          if (o) return m.createElement(m.Fragment, null, ' ', o((0, d.Z)((0, d.Z)({}, e), n)))
          var v = a
          a || !1 === a || (v = n.title)
          var y = (0, d.Z)(
              (0, d.Z)((0, d.Z)({}, n), {}, { title: v }, g),
              {},
              { footer: aa((0, d.Z)((0, d.Z)({}, g), {}, { breadcrumbRender: f, prefixedClassName: l })) },
              i,
            ),
            x = y.breadcrumb,
            Z =
              (!x ||
                (!(null === x || void 0 === x ? void 0 : x.itemRender) &&
                  !(null === x || void 0 === x || null === (t = x.routes) || void 0 === t ? void 0 : t.length))) &&
              !f
          return ['title', 'subTitle', 'extra', 'tags', 'footer', 'avatar', 'backIcon'].every(function (e) {
            return !y[e]
          }) &&
            Z &&
            !r &&
            !s
            ? null
            : m.createElement(
                'div',
                { className: ''.concat(l, '-warp') },
                m.createElement(
                  _n,
                  (0, p.Z)({}, y, {
                    breadcrumb: !1 === f ? void 0 : (0, d.Z)((0, d.Z)({}, y.breadcrumb), n.breadcrumbProps),
                    breadcrumbRender: h,
                    prefixCls: u,
                  }),
                  (null === i || void 0 === i ? void 0 : i.children) || ra(r, s, l),
                ),
              )
        },
        ia = function (e) {
          var t,
            n,
            a = e.children,
            o = e.loading,
            i = void 0 !== o && o,
            l = e.className,
            u = e.style,
            f = e.footer,
            h = e.affixProps,
            v = e.ghost,
            y = e.fixedHeader,
            x = e.breadcrumbRender,
            Z = (0, c.Z)(e, ta),
            C = (0, m.useContext)(lt),
            b = (0, m.useContext)(s.ZP.ConfigContext),
            E = b.getPrefixCls,
            N = e.prefixCls || E('pro'),
            w = ''.concat(N, '-page-container'),
            k = g()(
              w,
              l,
              ((t = {}), (0, r.Z)(t, ''.concat(N, '-page-container-ghost'), v), (0, r.Z)(t, ''.concat(N, '-page-container-with-footer'), f), t),
            ),
            M = (0, m.useMemo)(
              function () {
                return a
                  ? m.createElement(
                      m.Fragment,
                      null,
                      m.createElement('div', { className: ''.concat(w, '-children-content') }, a),
                      C.hasFooterToolbar && m.createElement('div', { style: { height: 48, marginTop: 24 } }),
                    )
                  : null
              },
              [a, w, C.hasFooterToolbar],
            ),
            R = (0, m.useMemo)(
              function () {
                var e
                return 0 != x && (x || (null === Z || void 0 === Z || null === (e = Z.header) || void 0 === e ? void 0 : e.breadcrumbRender))
              },
              [x, null === Z || void 0 === Z || null === (n = Z.header) || void 0 === n ? void 0 : n.breadcrumbRender],
            ),
            P = m.createElement(oa, (0, p.Z)({}, Z, { breadcrumbRender: R, ghost: v, prefixCls: void 0, prefixedClassName: w })),
            S = (0, m.useMemo)(
              function () {
                if (m.isValidElement(i)) return i
                if ('boolean' === typeof i && !i) return null
                var e = na(i)
                return m.createElement(bt.Z, e)
              },
              [i],
            ),
            T = (0, m.useMemo)(
              function () {
                var t = S || M
                if (e.waterMarkProps || C.waterMarkProps) {
                  var n = (0, d.Z)((0, d.Z)({}, C.waterMarkProps), e.waterMarkProps)
                  return m.createElement(Jn, n, t)
                }
                return t
              },
              [e.waterMarkProps, C.waterMarkProps, S, M],
            )
          return m.createElement(
            'div',
            { style: u, className: k },
            y && P ? m.createElement(on, (0, p.Z)({ offsetTop: C.hasHeader && C.fixedHeader ? C.headerHeight : 0 }, h), P) : P,
            T && m.createElement(qn, null, T),
            f && m.createElement(Qn, { prefixCls: N }, f),
          )
        },
        la = ia,
        ca = la,
        sa = Kt
    },
    1814: function (e, t, n) {
      'use strict'
      n.d(t, {
        e: function () {
          return v
        },
        G: function () {
          return h
        },
      })
      var a = n(62979),
        r = n(42151),
        o = {
          'app.setting.pagestyle': '\u6574\u4f53\u98ce\u683c\u8bbe\u7f6e',
          'app.setting.pagestyle.dark': '\u6697\u8272\u83dc\u5355\u98ce\u683c',
          'app.setting.pagestyle.light': '\u4eae\u8272\u83dc\u5355\u98ce\u683c',
          'app.setting.pagestyle.realdark': '\u6697\u8272\u98ce\u683c(\u5b9e\u9a8c\u529f\u80fd)',
          'app.setting.content-width': '\u5185\u5bb9\u533a\u57df\u5bbd\u5ea6',
          'app.setting.content-width.fixed': '\u5b9a\u5bbd',
          'app.setting.content-width.fluid': '\u6d41\u5f0f',
          'app.setting.themecolor': '\u4e3b\u9898\u8272',
          'app.setting.themecolor.dust': '\u8584\u66ae',
          'app.setting.themecolor.volcano': '\u706b\u5c71',
          'app.setting.themecolor.sunset': '\u65e5\u66ae',
          'app.setting.themecolor.cyan': '\u660e\u9752',
          'app.setting.themecolor.green': '\u6781\u5149\u7eff',
          'app.setting.themecolor.daybreak': '\u62c2\u6653\u84dd\uff08\u9ed8\u8ba4\uff09',
          'app.setting.themecolor.geekblue': '\u6781\u5ba2\u84dd',
          'app.setting.themecolor.purple': '\u9171\u7d2b',
          'app.setting.navigationmode': '\u5bfc\u822a\u6a21\u5f0f',
          'app.setting.regionalsettings': '\u5185\u5bb9\u533a\u57df',
          'app.setting.regionalsettings.header': '\u9876\u680f',
          'app.setting.regionalsettings.menu': '\u83dc\u5355',
          'app.setting.regionalsettings.footer': '\u9875\u811a',
          'app.setting.regionalsettings.menuHeader': '\u83dc\u5355\u5934',
          'app.setting.sidemenu': '\u4fa7\u8fb9\u83dc\u5355\u5e03\u5c40',
          'app.setting.topmenu': '\u9876\u90e8\u83dc\u5355\u5e03\u5c40',
          'app.setting.mixmenu': '\u6df7\u5408\u83dc\u5355\u5e03\u5c40',
          'app.setting.splitMenus': '\u81ea\u52a8\u5206\u5272\u83dc\u5355',
          'app.setting.fixedheader': '\u56fa\u5b9a Header',
          'app.setting.fixedsidebar': '\u56fa\u5b9a\u4fa7\u8fb9\u83dc\u5355',
          'app.setting.fixedsidebar.hint': '\u4fa7\u8fb9\u83dc\u5355\u5e03\u5c40\u65f6\u53ef\u914d\u7f6e',
          'app.setting.hideheader': '\u4e0b\u6ed1\u65f6\u9690\u85cf Header',
          'app.setting.hideheader.hint': '\u56fa\u5b9a Header \u65f6\u53ef\u914d\u7f6e',
          'app.setting.othersettings': '\u5176\u4ed6\u8bbe\u7f6e',
          'app.setting.weakmode': '\u8272\u5f31\u6a21\u5f0f',
          'app.setting.copy': '\u62f7\u8d1d\u8bbe\u7f6e',
          'app.setting.loading': '\u6b63\u5728\u52a0\u8f7d\u4e3b\u9898',
          'app.setting.copyinfo': '\u62f7\u8d1d\u6210\u529f\uff0c\u8bf7\u5230 src/defaultSettings.js \u4e2d\u66ff\u6362\u9ed8\u8ba4\u914d\u7f6e',
          'app.setting.production.hint':
            '\u914d\u7f6e\u680f\u53ea\u5728\u5f00\u53d1\u73af\u5883\u7528\u4e8e\u9884\u89c8\uff0c\u751f\u4ea7\u73af\u5883\u4e0d\u4f1a\u5c55\u73b0\uff0c\u8bf7\u62f7\u8d1d\u540e\u624b\u52a8\u4fee\u6539\u914d\u7f6e\u6587\u4ef6',
        },
        i = (0, r.Z)({}, o),
        l = {
          'app.setting.pagestyle': '\u6574\u9ad4\u98a8\u683c\u8a2d\u7f6e',
          'app.setting.pagestyle.dark': '\u6697\u8272\u83dc\u55ae\u98a8\u683c',
          'app.setting.pagestyle.realdark': '\u6697\u8272\u98a8\u683c(\u5b9e\u9a8c\u529f\u80fd)',
          'app.setting.pagestyle.light': '\u4eae\u8272\u83dc\u55ae\u98a8\u683c',
          'app.setting.content-width': '\u5167\u5bb9\u5340\u57df\u5bec\u5ea6',
          'app.setting.content-width.fixed': '\u5b9a\u5bec',
          'app.setting.content-width.fluid': '\u6d41\u5f0f',
          'app.setting.themecolor': '\u4e3b\u984c\u8272',
          'app.setting.themecolor.dust': '\u8584\u66ae',
          'app.setting.themecolor.volcano': '\u706b\u5c71',
          'app.setting.themecolor.sunset': '\u65e5\u66ae',
          'app.setting.themecolor.cyan': '\u660e\u9752',
          'app.setting.themecolor.green': '\u6975\u5149\u7da0',
          'app.setting.themecolor.daybreak': '\u62c2\u66c9\u85cd\uff08\u9ed8\u8a8d\uff09',
          'app.setting.themecolor.geekblue': '\u6975\u5ba2\u85cd',
          'app.setting.themecolor.purple': '\u91ac\u7d2b',
          'app.setting.navigationmode': '\u5c0e\u822a\u6a21\u5f0f',
          'app.setting.sidemenu': '\u5074\u908a\u83dc\u55ae\u5e03\u5c40',
          'app.setting.topmenu': '\u9802\u90e8\u83dc\u55ae\u5e03\u5c40',
          'app.setting.mixmenu': '\u6df7\u5408\u83dc\u55ae\u5e03\u5c40',
          'app.setting.splitMenus': '\u81ea\u52a8\u5206\u5272\u83dc\u5355',
          'app.setting.fixedheader': '\u56fa\u5b9a Header',
          'app.setting.fixedsidebar': '\u56fa\u5b9a\u5074\u908a\u83dc\u55ae',
          'app.setting.fixedsidebar.hint': '\u5074\u908a\u83dc\u55ae\u5e03\u5c40\u6642\u53ef\u914d\u7f6e',
          'app.setting.hideheader': '\u4e0b\u6ed1\u6642\u96b1\u85cf Header',
          'app.setting.hideheader.hint': '\u56fa\u5b9a Header \u6642\u53ef\u914d\u7f6e',
          'app.setting.othersettings': '\u5176\u4ed6\u8a2d\u7f6e',
          'app.setting.weakmode': '\u8272\u5f31\u6a21\u5f0f',
          'app.setting.copy': '\u62f7\u8c9d\u8a2d\u7f6e',
          'app.setting.loading': '\u6b63\u5728\u52a0\u8f09\u4e3b\u984c',
          'app.setting.copyinfo': '\u62f7\u8c9d\u6210\u529f\uff0c\u8acb\u5230 src/defaultSettings.js \u4e2d\u66ff\u63db\u9ed8\u8a8d\u914d\u7f6e',
          'app.setting.production.hint':
            '\u914d\u7f6e\u6b04\u53ea\u5728\u958b\u767c\u74b0\u5883\u7528\u65bc\u9810\u89bd\uff0c\u751f\u7522\u74b0\u5883\u4e0d\u6703\u5c55\u73fe\uff0c\u8acb\u62f7\u8c9d\u5f8c\u624b\u52d5\u4fee\u6539\u914d\u7f6e\u6587\u4ef6',
        },
        c = (0, r.Z)({}, l),
        s = {
          'app.setting.pagestyle': 'Page style setting',
          'app.setting.pagestyle.dark': 'Dark Menu style',
          'app.setting.pagestyle.light': 'Light Menu style',
          'app.setting.pagestyle.realdark': 'Dark style (Beta)',
          'app.setting.content-width': 'Content Width',
          'app.setting.content-width.fixed': 'Fixed',
          'app.setting.content-width.fluid': 'Fluid',
          'app.setting.themecolor': 'Theme Color',
          'app.setting.themecolor.dust': 'Dust Red',
          'app.setting.themecolor.volcano': 'Volcano',
          'app.setting.themecolor.sunset': 'Sunset Orange',
          'app.setting.themecolor.cyan': 'Cyan',
          'app.setting.themecolor.green': 'Polar Green',
          'app.setting.themecolor.daybreak': 'Daybreak Blue (default)',
          'app.setting.themecolor.geekblue': 'Geek Blue',
          'app.setting.themecolor.purple': 'Golden Purple',
          'app.setting.navigationmode': 'Navigation Mode',
          'app.setting.regionalsettings': 'Regional Settings',
          'app.setting.regionalsettings.header': 'Header',
          'app.setting.regionalsettings.menu': 'Menu',
          'app.setting.regionalsettings.footer': 'Footer',
          'app.setting.regionalsettings.menuHeader': 'Menu Header',
          'app.setting.sidemenu': 'Side Menu Layout',
          'app.setting.topmenu': 'Top Menu Layout',
          'app.setting.mixmenu': 'Mix Menu Layout',
          'app.setting.splitMenus': 'Split Menus',
          'app.setting.fixedheader': 'Fixed Header',
          'app.setting.fixedsidebar': 'Fixed Sidebar',
          'app.setting.fixedsidebar.hint': 'Works on Side Menu Layout',
          'app.setting.hideheader': 'Hidden Header when scrolling',
          'app.setting.hideheader.hint': 'Works when Hidden Header is enabled',
          'app.setting.othersettings': 'Other Settings',
          'app.setting.weakmode': 'Weak Mode',
          'app.setting.copy': 'Copy Setting',
          'app.setting.loading': 'Loading theme',
          'app.setting.copyinfo': 'copy success\uff0cplease replace defaultSettings in src/models/setting.js',
          'app.setting.production.hint': 'Setting panel shows in development environment only, please manually modify',
        },
        u = (0, r.Z)({}, s),
        d = {
          'app.setting.pagestyle': 'Impostazioni di stile',
          'app.setting.pagestyle.dark': 'Tema scuro',
          'app.setting.pagestyle.light': 'Tema chiaro',
          'app.setting.content-width': 'Largezza contenuto',
          'app.setting.content-width.fixed': 'Fissa',
          'app.setting.content-width.fluid': 'Fluida',
          'app.setting.themecolor': 'Colore del tema',
          'app.setting.themecolor.dust': 'Rosso polvere',
          'app.setting.themecolor.volcano': 'Vulcano',
          'app.setting.themecolor.sunset': 'Arancione tramonto',
          'app.setting.themecolor.cyan': 'Ciano',
          'app.setting.themecolor.green': 'Verde polare',
          'app.setting.themecolor.daybreak': 'Blu cielo mattutino (default)',
          'app.setting.themecolor.geekblue': 'Blu geek',
          'app.setting.themecolor.purple': 'Viola dorato',
          'app.setting.navigationmode': 'Modalit\xe0 di navigazione',
          'app.setting.sidemenu': 'Menu laterale',
          'app.setting.topmenu': 'Menu in testata',
          'app.setting.mixmenu': 'Menu misto',
          'app.setting.splitMenus': 'Menu divisi',
          'app.setting.fixedheader': 'Testata fissa',
          'app.setting.fixedsidebar': 'Menu laterale fisso',
          'app.setting.fixedsidebar.hint': 'Solo se selezionato Menu laterale',
          'app.setting.hideheader': 'Nascondi testata durante lo scorrimento',
          'app.setting.hideheader.hint': 'Solo se abilitato Nascondi testata durante lo scorrimento',
          'app.setting.othersettings': 'Altre impostazioni',
          'app.setting.weakmode': 'Inverti colori',
          'app.setting.copy': 'Copia impostazioni',
          'app.setting.loading': 'Carico tema...',
          'app.setting.copyinfo': 'Impostazioni copiate con successo! Incolla il contenuto in config/defaultSettings.js',
          'app.setting.production.hint':
            'Questo pannello \xe8 visibile solo durante lo sviluppo. Le impostazioni devono poi essere modificate manulamente',
        },
        p = (0, r.Z)({}, d),
        m = {
          'app.setting.pagestyle': '\uc2a4\ud0c0\uc77c \uc124\uc815',
          'app.setting.pagestyle.dark': '\ub2e4\ud06c \ubaa8\ub4dc',
          'app.setting.pagestyle.light': '\ub77c\uc774\ud2b8 \ubaa8\ub4dc',
          'app.setting.content-width': '\ucee8\ud150\uce20 \ub108\ube44',
          'app.setting.content-width.fixed': '\uace0\uc815',
          'app.setting.content-width.fluid': '\ud750\ub984',
          'app.setting.themecolor': '\ud14c\ub9c8 \uc0c9\uc0c1',
          'app.setting.themecolor.dust': 'Dust Red',
          'app.setting.themecolor.volcano': 'Volcano',
          'app.setting.themecolor.sunset': 'Sunset Orange',
          'app.setting.themecolor.cyan': 'Cyan',
          'app.setting.themecolor.green': 'Polar Green',
          'app.setting.themecolor.daybreak': 'Daybreak Blue (default)',
          'app.setting.themecolor.geekblue': 'Geek Blue',
          'app.setting.themecolor.purple': 'Golden Purple',
          'app.setting.navigationmode': '\ub124\ube44\uac8c\uc774\uc158 \ubaa8\ub4dc',
          'app.setting.regionalsettings': '\uc601\uc5ed\ubcc4 \uc124\uc815',
          'app.setting.regionalsettings.header': '\ud5e4\ub354',
          'app.setting.regionalsettings.menu': '\uba54\ub274',
          'app.setting.regionalsettings.footer': '\ubc14\ub2e5\uae00',
          'app.setting.regionalsettings.menuHeader': '\uba54\ub274 \ud5e4\ub354',
          'app.setting.sidemenu': '\uba54\ub274 \uc0ac\uc774\ub4dc \ubc30\uce58',
          'app.setting.topmenu': '\uba54\ub274 \uc0c1\ub2e8 \ubc30\uce58',
          'app.setting.mixmenu': '\ud63c\ud569\ud615 \ubc30\uce58',
          'app.setting.splitMenus': '\uba54\ub274 \ubd84\ub9ac',
          'app.setting.fixedheader': '\ud5e4\ub354 \uace0\uc815',
          'app.setting.fixedsidebar': '\uc0ac\uc774\ub4dc\ubc14 \uace0\uc815',
          'app.setting.fixedsidebar.hint': "'\uba54\ub274 \uc0ac\uc774\ub4dc \ubc30\uce58'\ub97c \uc120\ud0dd\ud588\uc744 \ub54c \ub3d9\uc791\ud568",
          'app.setting.hideheader': '\uc2a4\ud06c\ub864 \uc911 \ud5e4\ub354 \uac10\ucd94\uae30',
          'app.setting.hideheader.hint': "'\ud5e4\ub354 \uac10\ucd94\uae30 \uc635\uc158'\uc744 \uc120\ud0dd\ud588\uc744 \ub54c \ub3d9\uc791\ud568",
          'app.setting.othersettings': '\ub2e4\ub978 \uc124\uc815',
          'app.setting.weakmode': '\uace0\ub300\ube44 \ubaa8\ub4dc',
          'app.setting.copy': '\uc124\uc815\uac12 \ubcf5\uc0ac',
          'app.setting.loading': '\ud14c\ub9c8 \ub85c\ub529 \uc911',
          'app.setting.copyinfo':
            '\ubcf5\uc0ac \uc131\uacf5. src/models/settings.js\uc5d0 \uc788\ub294 defaultSettings\ub97c \uad50\uccb4\ud574 \uc8fc\uc138\uc694.',
          'app.setting.production.hint':
            '\uc124\uc815 \ud310\ub12c\uc740 \uac1c\ubc1c \ud658\uacbd\uc5d0\uc11c\ub9cc \ubcf4\uc5ec\uc9d1\ub2c8\ub2e4. \uc9c1\uc811 \uc218\ub3d9\uc73c\ub85c \ubcc0\uacbd\ubc14\ub78d\ub2c8\ub2e4.',
        },
        f = (0, r.Z)({}, m),
        g = { 'zh-CN': i, 'zh-TW': c, 'en-US': u, 'it-IT': p, 'ko-KR': f },
        h = function () {
          if (!(0, a.Z)()) return 'zh-CN'
          var e = window.localStorage.getItem('umi_locale')
          return e || window.g_locale || navigator.language
        },
        v = function () {
          var e = h()
          return g[e] || g['zh-CN']
        }
    },
    4404: function (e, t, n) {
      'use strict'
      n.d(t, {
        O7: function () {
          return r
        },
        tV: function () {
          return i
        },
        QX: function () {
          return l
        },
      })
      var a = n(42151),
        r = function e(t) {
          return (t || []).reduce(function (t, n) {
            if ((n.key && t.push(n.key), n.routes)) {
              var a = t.concat(e(n.routes) || [])
              return a
            }
            return t
          }, [])
        },
        o = {
          daybreak: '#1890ff',
          dust: '#F5222D',
          volcano: '#FA541C',
          sunset: '#FAAD14',
          cyan: '#13C2C2',
          green: '#52C41A',
          geekblue: '#2F54EB',
          purple: '#722ED1',
        }
      function i(e) {
        return e && o[e] ? o[e] : e
      }
      function l(e) {
        return e
          .map(function (e) {
            var t = e.children || e.routes,
              n = (0, a.Z)({}, e)
            if (!n.name || n.hideInMenu) return null
            if (n && (null === n || void 0 === n ? void 0 : n.routes)) {
              if (
                !n.hideChildrenInMenu &&
                t.some(function (e) {
                  return e && e.name && !e.hideInMenu
                })
              )
                return (0, a.Z)((0, a.Z)({}, e), {}, { children: l(t), routes: l(t) })
              delete n.routes, delete n.children
            }
            return n
          })
          .filter(function (e) {
            return e
          })
      }
    },
  },
])
