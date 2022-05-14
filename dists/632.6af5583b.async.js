;(self['webpackChunkant_design_pro'] = self['webpackChunkant_design_pro'] || []).push([
  [632],
  {
    60615: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return u
        },
      })
      var a = n(42151),
        r = n(96162),
        o = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              { tag: 'defs', attrs: {}, children: [{ tag: 'style', attrs: {} }] },
              { tag: 'path', attrs: { d: 'M482 152h60q8 0 8 8v704q0 8-8 8h-60q-8 0-8-8V160q0-8 8-8z' } },
              { tag: 'path', attrs: { d: 'M176 474h672q8 0 8 8v60q0 8-8 8H176q-8 0-8-8v-60q0-8 8-8z' } },
            ],
          },
          name: 'plus',
          theme: 'outlined',
        },
        i = o,
        c = n(23986),
        l = function (e, t) {
          return r.createElement(c.Z, (0, a.Z)((0, a.Z)({}, e), {}, { ref: t, icon: i }))
        }
      l.displayName = 'PlusOutlined'
      var u = r.forwardRef(l)
    },
    87968: function () {},
    63230: function (e, t, n) {
      'use strict'
      var a = n(43141),
        r = n(96162),
        o = n(25015)
      t['Z'] = function () {
        var e = r.useState(!1),
          t = (0, a.Z)(e, 2),
          n = t[0],
          i = t[1]
        return (
          r.useEffect(function () {
            i((0, o.fk)())
          }, []),
          n
        )
      }
    },
    38787: function (e, t, n) {
      'use strict'
      n.d(t, {
        c4: function () {
          return o
        },
      })
      var a = n(19344),
        r = n(33673),
        o = ['xxl', 'xl', 'lg', 'md', 'sm', 'xs'],
        i = {
          xs: '(max-width: 575px)',
          sm: '(min-width: 576px)',
          md: '(min-width: 768px)',
          lg: '(min-width: 992px)',
          xl: '(min-width: 1200px)',
          xxl: '(min-width: 1600px)',
        },
        c = new Map(),
        l = -1,
        u = {},
        s = {
          matchHandlers: {},
          dispatch: function (e) {
            return (
              (u = e),
              c.forEach(function (e) {
                return e(u)
              }),
              c.size >= 1
            )
          },
          subscribe: function (e) {
            return c.size || this.register(), (l += 1), c.set(l, e), e(u), l
          },
          unsubscribe: function (e) {
            c['delete'](e), c.size || this.unregister()
          },
          unregister: function () {
            var e = this
            Object.keys(i).forEach(function (t) {
              var n = i[t],
                a = e.matchHandlers[n]
              null === a || void 0 === a || a.mql.removeListener(null === a || void 0 === a ? void 0 : a.listener)
            }),
              c.clear()
          },
          register: function () {
            var e = this
            Object.keys(i).forEach(function (t) {
              var n = i[t],
                o = function (n) {
                  var o = n.matches
                  e.dispatch((0, r.Z)((0, r.Z)({}, u), (0, a.Z)({}, t, o)))
                },
                c = window.matchMedia(n)
              c.addListener(o), (e.matchHandlers[n] = { mql: c, listener: o }), o(c)
            })
          },
        }
      t['ZP'] = s
    },
    25015: function (e, t, n) {
      'use strict'
      n.d(t, {
        jD: function () {
          return o
        },
        fk: function () {
          return i
        },
      })
      var a,
        r = n(1692),
        o = function () {
          return (0, r.Z)() && window.document.documentElement
        },
        i = function () {
          if (!o()) return !1
          if (void 0 !== a) return a
          var e = document.createElement('div')
          return (
            (e.style.display = 'flex'),
            (e.style.flexDirection = 'column'),
            (e.style.rowGap = '1px'),
            e.appendChild(document.createElement('div')),
            e.appendChild(document.createElement('div')),
            document.body.appendChild(e),
            (a = 1 === e.scrollHeight),
            document.body.removeChild(e),
            a
          )
        }
    },
    61567: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return ie
        },
      })
      var a = n(33673),
        r = n(19344),
        o = n(96162),
        i = n(43141),
        c = n(574),
        l = n(76317),
        u = n(42151),
        s = n(54794),
        d = n.n(s),
        f = n(48436),
        v = n(98985),
        m = n(45016),
        h = n(22018),
        b = n(58021),
        p = n(57178)
      function y(e) {
        var t = (0, o.useRef)(),
          n = (0, o.useRef)(!1)
        function a() {
          for (var a = arguments.length, r = new Array(a), o = 0; o < a; o++) r[o] = arguments[o]
          n.current ||
            (b.Z.cancel(t.current),
            (t.current = (0, b.Z)(function () {
              e.apply(void 0, r)
            })))
        }
        return (
          (0, o.useEffect)(function () {
            return function () {
              ;(n.current = !0), b.Z.cancel(t.current)
            }
          }, []),
          a
        )
      }
      function Z(e) {
        var t = (0, o.useRef)([]),
          n = (0, o.useState)({}),
          a = (0, i.Z)(n, 2),
          r = a[1],
          c = (0, o.useRef)('function' === typeof e ? e() : e),
          l = y(function () {
            var e = c.current
            t.current.forEach(function (t) {
              e = t(e)
            }),
              (t.current = []),
              (c.current = e),
              r({})
          })
        function u(e) {
          t.current.push(e), l()
        }
        return [c.current, u]
      }
      var g = n(52823)
      function E(e, t) {
        var n,
          a = e.prefixCls,
          i = e.id,
          c = e.active,
          l = e.tab,
          u = l.key,
          s = l.tab,
          f = l.disabled,
          v = l.closeIcon,
          m = e.closable,
          h = e.renderWrapper,
          b = e.removeAriaLabel,
          p = e.editable,
          y = e.onClick,
          Z = e.onRemove,
          E = e.onFocus,
          x = e.style,
          w = ''.concat(a, '-tab')
        o.useEffect(function () {
          return Z
        }, [])
        var k = p && !1 !== m && !f
        function C(e) {
          f || y(e)
        }
        function N(e) {
          e.preventDefault(), e.stopPropagation(), p.onEdit('remove', { key: u, event: e })
        }
        var I = o.createElement(
          'div',
          {
            key: u,
            ref: t,
            className: d()(
              w,
              ((n = {}),
              (0, r.Z)(n, ''.concat(w, '-with-remove'), k),
              (0, r.Z)(n, ''.concat(w, '-active'), c),
              (0, r.Z)(n, ''.concat(w, '-disabled'), f),
              n),
            ),
            style: x,
            onClick: C,
          },
          o.createElement(
            'div',
            {
              role: 'tab',
              'aria-selected': c,
              id: i && ''.concat(i, '-tab-').concat(u),
              className: ''.concat(w, '-btn'),
              'aria-controls': i && ''.concat(i, '-panel-').concat(u),
              'aria-disabled': f,
              tabIndex: f ? null : 0,
              onClick: function (e) {
                e.stopPropagation(), C(e)
              },
              onKeyDown: function (e) {
                ;[g.Z.SPACE, g.Z.ENTER].includes(e.which) && (e.preventDefault(), C(e))
              },
              onFocus: E,
            },
            s,
          ),
          k &&
            o.createElement(
              'button',
              {
                type: 'button',
                'aria-label': b || 'remove',
                tabIndex: 0,
                className: ''.concat(w, '-remove'),
                onClick: function (e) {
                  e.stopPropagation(), N(e)
                },
              },
              v || p.removeIcon || '\xd7',
            ),
        )
        return h ? h(I) : I
      }
      var x = o.forwardRef(E),
        w = { width: 0, height: 0, left: 0, top: 0 }
      function k(e, t, n) {
        return (0, o.useMemo)(
          function () {
            for (
              var n, a = new Map(), r = t.get(null === (n = e[0]) || void 0 === n ? void 0 : n.key) || w, o = r.left + r.width, i = 0;
              i < e.length;
              i += 1
            ) {
              var c,
                l = e[i].key,
                s = t.get(l)
              if (!s) s = t.get(null === (c = e[i - 1]) || void 0 === c ? void 0 : c.key) || w
              var d = a.get(l) || (0, u.Z)({}, s)
              ;(d.right = o - d.left - d.width), a.set(l, d)
            }
            return a
          },
          [
            e
              .map(function (e) {
                return e.key
              })
              .join('_'),
            t,
            n,
          ],
        )
      }
      var C = { width: 0, height: 0, left: 0, top: 0, right: 0 }
      function N(e, t, n, a, r) {
        var i,
          c,
          l,
          u = r.tabs,
          s = r.tabPosition,
          d = r.rtl
        ;['top', 'bottom'].includes(s)
          ? ((i = 'width'), (c = d ? 'right' : 'left'), (l = Math.abs(t.left)))
          : ((i = 'height'), (c = 'top'), (l = -t.top))
        var f = t[i],
          v = n[i],
          m = a[i],
          h = f
        return (
          v + m > f && v < f && (h = f - m),
          (0, o.useMemo)(
            function () {
              if (!u.length) return [0, 0]
              for (var t = u.length, n = t, a = 0; a < t; a += 1) {
                var r = e.get(u[a].key) || C
                if (r[c] + r[i] > l + h) {
                  n = a - 1
                  break
                }
              }
              for (var o = 0, s = t - 1; s >= 0; s -= 1) {
                var d = e.get(u[s].key) || C
                if (d[c] < l) {
                  o = s + 1
                  break
                }
              }
              return [o, n]
            },
            [
              e,
              l,
              h,
              s,
              u
                .map(function (e) {
                  return e.key
                })
                .join('_'),
              d,
            ],
          )
        )
      }
      var I = n(13869),
        T = n(10875)
      function P(e, t) {
        var n = e.prefixCls,
          a = e.editable,
          r = e.locale,
          i = e.style
        return a && !1 !== a.showAdd
          ? o.createElement(
              'button',
              {
                ref: t,
                type: 'button',
                className: ''.concat(n, '-nav-add'),
                style: i,
                'aria-label': (null === r || void 0 === r ? void 0 : r.addAriaLabel) || 'Add tab',
                onClick: function (e) {
                  a.onEdit('add', { event: e })
                },
              },
              a.addIcon || '+',
            )
          : null
      }
      var S = o.forwardRef(P)
      function R(e, t) {
        var n = e.prefixCls,
          a = e.id,
          c = e.tabs,
          l = e.locale,
          u = e.mobile,
          s = e.moreIcon,
          f = void 0 === s ? 'More' : s,
          v = e.moreTransitionName,
          m = e.style,
          h = e.className,
          b = e.editable,
          p = e.tabBarGutter,
          y = e.rtl,
          Z = e.removeAriaLabel,
          E = e.onTabClick,
          x = (0, o.useState)(!1),
          w = (0, i.Z)(x, 2),
          k = w[0],
          C = w[1],
          N = (0, o.useState)(null),
          P = (0, i.Z)(N, 2),
          R = P[0],
          M = P[1],
          L = ''.concat(a, '-more-popup'),
          A = ''.concat(n, '-dropdown'),
          D = null !== R ? ''.concat(L, '-').concat(R) : null,
          B = null === l || void 0 === l ? void 0 : l.dropdownAriaLabel
        function O(e, t) {
          e.preventDefault(), e.stopPropagation(), b.onEdit('remove', { key: t, event: e })
        }
        var j = o.createElement(
          I.ZP,
          {
            onClick: function (e) {
              var t = e.key,
                n = e.domEvent
              E(t, n), C(!1)
            },
            id: L,
            tabIndex: -1,
            role: 'listbox',
            'aria-activedescendant': D,
            selectedKeys: [R],
            'aria-label': void 0 !== B ? B : 'expanded dropdown',
          },
          c.map(function (e) {
            var t = b && !1 !== e.closable && !e.disabled
            return o.createElement(
              I.sN,
              {
                key: e.key,
                id: ''.concat(L, '-').concat(e.key),
                role: 'option',
                'aria-controls': a && ''.concat(a, '-panel-').concat(e.key),
                disabled: e.disabled,
              },
              o.createElement('span', null, e.tab),
              t &&
                o.createElement(
                  'button',
                  {
                    type: 'button',
                    'aria-label': Z || 'remove',
                    tabIndex: 0,
                    className: ''.concat(A, '-menu-item-remove'),
                    onClick: function (t) {
                      t.stopPropagation(), O(t, e.key)
                    },
                  },
                  e.closeIcon || b.removeIcon || '\xd7',
                ),
            )
          }),
        )
        function K(e) {
          for (
            var t = c.filter(function (e) {
                return !e.disabled
              }),
              n =
                t.findIndex(function (e) {
                  return e.key === R
                }) || 0,
              a = t.length,
              r = 0;
            r < a;
            r += 1
          ) {
            n = (n + e + a) % a
            var o = t[n]
            if (!o.disabled) return void M(o.key)
          }
        }
        function q(e) {
          var t = e.which
          if (k)
            switch (t) {
              case g.Z.UP:
                K(-1), e.preventDefault()
                break
              case g.Z.DOWN:
                K(1), e.preventDefault()
                break
              case g.Z.ESC:
                C(!1)
                break
              case g.Z.SPACE:
              case g.Z.ENTER:
                null !== R && E(R, e)
                break
            }
          else [g.Z.DOWN, g.Z.SPACE, g.Z.ENTER].includes(t) && (C(!0), e.preventDefault())
        }
        ;(0, o.useEffect)(
          function () {
            var e = document.getElementById(D)
            e && e.scrollIntoView && e.scrollIntoView(!1)
          },
          [R],
        ),
          (0, o.useEffect)(
            function () {
              k || M(null)
            },
            [k],
          )
        var W = (0, r.Z)({}, y ? 'marginRight' : 'marginLeft', p)
        c.length || ((W.visibility = 'hidden'), (W.order = 1))
        var z = d()((0, r.Z)({}, ''.concat(A, '-rtl'), y)),
          H = u
            ? null
            : o.createElement(
                T.Z,
                {
                  prefixCls: A,
                  overlay: j,
                  trigger: ['hover'],
                  visible: k,
                  transitionName: v,
                  onVisibleChange: C,
                  overlayClassName: z,
                  mouseEnterDelay: 0.1,
                  mouseLeaveDelay: 0.1,
                },
                o.createElement(
                  'button',
                  {
                    type: 'button',
                    className: ''.concat(n, '-nav-more'),
                    style: W,
                    tabIndex: -1,
                    'aria-hidden': 'true',
                    'aria-haspopup': 'listbox',
                    'aria-controls': L,
                    id: ''.concat(a, '-more'),
                    'aria-expanded': k,
                    onKeyDown: q,
                  },
                  f,
                ),
              )
        return o.createElement(
          'div',
          { className: d()(''.concat(n, '-nav-operations'), h), style: m, ref: t },
          H,
          o.createElement(S, { prefixCls: n, locale: l, editable: b }),
        )
      }
      var M = o.memo(o.forwardRef(R), function (e, t) {
          return t.tabMoving
        }),
        L = (0, o.createContext)(null),
        A = 0.1,
        D = 0.01,
        B = 20,
        O = Math.pow(0.995, B)
      function j(e, t) {
        var n = (0, o.useState)(),
          a = (0, i.Z)(n, 2),
          r = a[0],
          c = a[1],
          l = (0, o.useState)(0),
          u = (0, i.Z)(l, 2),
          s = u[0],
          d = u[1],
          f = (0, o.useState)(0),
          v = (0, i.Z)(f, 2),
          m = v[0],
          h = v[1],
          b = (0, o.useState)(),
          p = (0, i.Z)(b, 2),
          y = p[0],
          Z = p[1],
          g = (0, o.useRef)()
        function E(e) {
          var t = e.touches[0],
            n = t.screenX,
            a = t.screenY
          c({ x: n, y: a }), window.clearInterval(g.current)
        }
        function x(e) {
          if (r) {
            e.preventDefault()
            var n = e.touches[0],
              a = n.screenX,
              o = n.screenY
            c({ x: a, y: o })
            var i = a - r.x,
              l = o - r.y
            t(i, l)
            var u = Date.now()
            d(u), h(u - s), Z({ x: i, y: l })
          }
        }
        function w() {
          if (r && (c(null), Z(null), y)) {
            var e = y.x / m,
              n = y.y / m,
              a = Math.abs(e),
              o = Math.abs(n)
            if (Math.max(a, o) < A) return
            var i = e,
              l = n
            g.current = window.setInterval(function () {
              Math.abs(i) < D && Math.abs(l) < D ? window.clearInterval(g.current) : ((i *= O), (l *= O), t(i * B, l * B))
            }, B)
          }
        }
        var k = (0, o.useRef)()
        function C(e) {
          var n = e.deltaX,
            a = e.deltaY,
            r = 0,
            o = Math.abs(n),
            i = Math.abs(a)
          o === i ? (r = 'x' === k.current ? n : a) : o > i ? ((r = n), (k.current = 'x')) : ((r = a), (k.current = 'y')),
            t(-r, -r) && e.preventDefault()
        }
        var N = (0, o.useRef)(null)
        ;(N.current = { onTouchStart: E, onTouchMove: x, onTouchEnd: w, onWheel: C }),
          o.useEffect(function () {
            function t(e) {
              N.current.onTouchStart(e)
            }
            function n(e) {
              N.current.onTouchMove(e)
            }
            function a(e) {
              N.current.onTouchEnd(e)
            }
            function r(e) {
              N.current.onWheel(e)
            }
            return (
              document.addEventListener('touchmove', n, { passive: !1 }),
              document.addEventListener('touchend', a, { passive: !1 }),
              e.current.addEventListener('touchstart', t, { passive: !1 }),
              e.current.addEventListener('wheel', r),
              function () {
                document.removeEventListener('touchmove', n), document.removeEventListener('touchend', a)
              }
            )
          }, [])
      }
      function K() {
        var e = (0, o.useRef)(new Map())
        function t(t) {
          return e.current.has(t) || e.current.set(t, o.createRef()), e.current.get(t)
        }
        function n(t) {
          e.current.delete(t)
        }
        return [t, n]
      }
      function q(e, t) {
        var n = o.useRef(e),
          a = o.useState({}),
          r = (0, i.Z)(a, 2),
          c = r[1]
        function l(e) {
          var a = 'function' === typeof e ? e(n.current) : e
          a !== n.current && t(a, n.current), (n.current = a), c({})
        }
        return [n.current, l]
      }
      var W = function (e) {
        var t,
          n = e.position,
          a = e.prefixCls,
          r = e.extra
        if (!r) return null
        var i = {}
        return (
          r && 'object' === (0, c.Z)(r) && !o.isValidElement(r) ? (i = r) : (i.right = r),
          'right' === n && (t = i.right),
          'left' === n && (t = i.left),
          t ? o.createElement('div', { className: ''.concat(a, '-extra-content') }, t) : null
        )
      }
      function z(e, t) {
        var n,
          c = o.useContext(L),
          l = c.prefixCls,
          s = c.tabs,
          f = e.className,
          v = e.style,
          m = e.id,
          g = e.animated,
          E = e.activeKey,
          w = e.rtl,
          C = e.extra,
          I = e.editable,
          T = e.locale,
          P = e.tabPosition,
          R = e.tabBarGutter,
          A = e.children,
          D = e.onTabClick,
          B = e.onTabScroll,
          O = (0, o.useRef)(),
          z = (0, o.useRef)(),
          H = (0, o.useRef)(),
          _ = (0, o.useRef)(),
          V = K(),
          G = (0, i.Z)(V, 2),
          Y = G[0],
          F = G[1],
          X = 'top' === P || 'bottom' === P,
          U = q(0, function (e, t) {
            X && B && B({ direction: e > t ? 'left' : 'right' })
          }),
          J = (0, i.Z)(U, 2),
          Q = J[0],
          $ = J[1],
          ee = q(0, function (e, t) {
            !X && B && B({ direction: e > t ? 'top' : 'bottom' })
          }),
          te = (0, i.Z)(ee, 2),
          ne = te[0],
          ae = te[1],
          re = (0, o.useState)(0),
          oe = (0, i.Z)(re, 2),
          ie = oe[0],
          ce = oe[1],
          le = (0, o.useState)(0),
          ue = (0, i.Z)(le, 2),
          se = ue[0],
          de = ue[1],
          fe = (0, o.useState)(null),
          ve = (0, i.Z)(fe, 2),
          me = ve[0],
          he = ve[1],
          be = (0, o.useState)(null),
          pe = (0, i.Z)(be, 2),
          ye = pe[0],
          Ze = pe[1],
          ge = (0, o.useState)(0),
          Ee = (0, i.Z)(ge, 2),
          xe = Ee[0],
          we = Ee[1],
          ke = (0, o.useState)(0),
          Ce = (0, i.Z)(ke, 2),
          Ne = Ce[0],
          Ie = Ce[1],
          Te = Z(new Map()),
          Pe = (0, i.Z)(Te, 2),
          Se = Pe[0],
          Re = Pe[1],
          Me = k(s, Se, ie),
          Le = ''.concat(l, '-nav-operations-hidden'),
          Ae = 0,
          De = 0
        function Be(e) {
          return e < Ae ? Ae : e > De ? De : e
        }
        X ? (w ? ((Ae = 0), (De = Math.max(0, ie - me))) : ((Ae = Math.min(0, me - ie)), (De = 0))) : ((Ae = Math.min(0, ye - se)), (De = 0))
        var Oe = (0, o.useRef)(),
          je = (0, o.useState)(),
          Ke = (0, i.Z)(je, 2),
          qe = Ke[0],
          We = Ke[1]
        function ze() {
          We(Date.now())
        }
        function He() {
          window.clearTimeout(Oe.current)
        }
        function _e() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
            t = Me.get(e) || { width: 0, height: 0, left: 0, right: 0, top: 0 }
          if (X) {
            var n = Q
            w
              ? t.right < Q
                ? (n = t.right)
                : t.right + t.width > Q + me && (n = t.right + t.width - me)
              : t.left < -Q
              ? (n = -t.left)
              : t.left + t.width > -Q + me && (n = -(t.left + t.width - me)),
              ae(0),
              $(Be(n))
          } else {
            var a = ne
            t.top < -ne ? (a = -t.top) : t.top + t.height > -ne + ye && (a = -(t.top + t.height - ye)), $(0), ae(Be(a))
          }
        }
        j(O, function (e, t) {
          function n(e, t) {
            e(function (e) {
              var n = Be(e + t)
              return n
            })
          }
          if (X) {
            if (me >= ie) return !1
            n($, e)
          } else {
            if (ye >= se) return !1
            n(ae, t)
          }
          return He(), ze(), !0
        }),
          (0, o.useEffect)(
            function () {
              return (
                He(),
                qe &&
                  (Oe.current = window.setTimeout(function () {
                    We(0)
                  }, 100)),
                He
              )
            },
            [qe],
          )
        var Ve = N(
            Me,
            { width: me, height: ye, left: Q, top: ne },
            { width: ie, height: se },
            { width: xe, height: Ne },
            (0, u.Z)((0, u.Z)({}, e), {}, { tabs: s }),
          ),
          Ge = (0, i.Z)(Ve, 2),
          Ye = Ge[0],
          Fe = Ge[1],
          Xe = {}
        'top' === P || 'bottom' === P ? (Xe[w ? 'marginRight' : 'marginLeft'] = R) : (Xe.marginTop = R)
        var Ue = s.map(function (e, t) {
            var n = e.key
            return o.createElement(x, {
              id: m,
              prefixCls: l,
              key: n,
              tab: e,
              style: 0 === t ? void 0 : Xe,
              closable: e.closable,
              editable: I,
              active: n === E,
              renderWrapper: A,
              removeAriaLabel: null === T || void 0 === T ? void 0 : T.removeAriaLabel,
              ref: Y(n),
              onClick: function (e) {
                D(n, e)
              },
              onRemove: function () {
                F(n)
              },
              onFocus: function () {
                _e(n), ze(), O.current && (w || (O.current.scrollLeft = 0), (O.current.scrollTop = 0))
              },
            })
          }),
          Je = y(function () {
            var e,
              t,
              n,
              a,
              r,
              o,
              i = (null === (e = O.current) || void 0 === e ? void 0 : e.offsetWidth) || 0,
              c = (null === (t = O.current) || void 0 === t ? void 0 : t.offsetHeight) || 0,
              l = (null === (n = _.current) || void 0 === n ? void 0 : n.offsetWidth) || 0,
              u = (null === (a = _.current) || void 0 === a ? void 0 : a.offsetHeight) || 0
            he(i), Ze(c), we(l), Ie(u)
            var d = ((null === (r = z.current) || void 0 === r ? void 0 : r.offsetWidth) || 0) - l,
              f = ((null === (o = z.current) || void 0 === o ? void 0 : o.offsetHeight) || 0) - u
            ce(d),
              de(f),
              Re(function () {
                var e = new Map()
                return (
                  s.forEach(function (t) {
                    var n = t.key,
                      a = Y(n).current
                    a && e.set(n, { width: a.offsetWidth, height: a.offsetHeight, left: a.offsetLeft, top: a.offsetTop })
                  }),
                  e
                )
              })
          }),
          Qe = s.slice(0, Ye),
          $e = s.slice(Fe + 1),
          et = [].concat((0, h.Z)(Qe), (0, h.Z)($e)),
          tt = (0, o.useState)(),
          nt = (0, i.Z)(tt, 2),
          at = nt[0],
          rt = nt[1],
          ot = Me.get(E),
          it = (0, o.useRef)()
        function ct() {
          b.Z.cancel(it.current)
        }
        ;(0, o.useEffect)(
          function () {
            var e = {}
            return (
              ot && (X ? (w ? (e.right = ot.right) : (e.left = ot.left), (e.width = ot.width)) : ((e.top = ot.top), (e.height = ot.height))),
              ct(),
              (it.current = (0, b.Z)(function () {
                rt(e)
              })),
              ct
            )
          },
          [ot, X, w],
        ),
          (0, o.useEffect)(
            function () {
              _e()
            },
            [E, ot, Me, X],
          ),
          (0, o.useEffect)(
            function () {
              Je()
            },
            [
              w,
              R,
              E,
              s
                .map(function (e) {
                  return e.key
                })
                .join('_'),
            ],
          )
        var lt,
          ut,
          st,
          dt,
          ft = !!et.length,
          vt = ''.concat(l, '-nav-wrap')
        return (
          X ? (w ? ((ut = Q > 0), (lt = Q + me < ie)) : ((lt = Q < 0), (ut = -Q + me < ie))) : ((st = ne < 0), (dt = -ne + ye < se)),
          o.createElement(
            'div',
            {
              ref: t,
              role: 'tablist',
              className: d()(''.concat(l, '-nav'), f),
              style: v,
              onKeyDown: function () {
                ze()
              },
            },
            o.createElement(W, { position: 'left', extra: C, prefixCls: l }),
            o.createElement(
              p.Z,
              { onResize: Je },
              o.createElement(
                'div',
                {
                  className: d()(
                    vt,
                    ((n = {}),
                    (0, r.Z)(n, ''.concat(vt, '-ping-left'), lt),
                    (0, r.Z)(n, ''.concat(vt, '-ping-right'), ut),
                    (0, r.Z)(n, ''.concat(vt, '-ping-top'), st),
                    (0, r.Z)(n, ''.concat(vt, '-ping-bottom'), dt),
                    n),
                  ),
                  ref: O,
                },
                o.createElement(
                  p.Z,
                  { onResize: Je },
                  o.createElement(
                    'div',
                    {
                      ref: z,
                      className: ''.concat(l, '-nav-list'),
                      style: { transform: 'translate('.concat(Q, 'px, ').concat(ne, 'px)'), transition: qe ? 'none' : void 0 },
                    },
                    Ue,
                    o.createElement(S, {
                      ref: _,
                      prefixCls: l,
                      locale: T,
                      editable: I,
                      style: (0, u.Z)((0, u.Z)({}, 0 === Ue.length ? void 0 : Xe), {}, { visibility: ft ? 'hidden' : null }),
                    }),
                    o.createElement('div', {
                      className: d()(''.concat(l, '-ink-bar'), (0, r.Z)({}, ''.concat(l, '-ink-bar-animated'), g.inkBar)),
                      style: at,
                    }),
                  ),
                ),
              ),
            ),
            o.createElement(
              M,
              (0, a.Z)({}, e, {
                removeAriaLabel: null === T || void 0 === T ? void 0 : T.removeAriaLabel,
                ref: H,
                prefixCls: l,
                tabs: et,
                className: !ft && Le,
                tabMoving: !!qe,
              }),
            ),
            o.createElement(W, { position: 'right', extra: C, prefixCls: l }),
          )
        )
      }
      var H = o.forwardRef(z)
      function _(e) {
        var t = e.id,
          n = e.activeKey,
          a = e.animated,
          i = e.tabPosition,
          c = e.rtl,
          l = e.destroyInactiveTabPane,
          u = o.useContext(L),
          s = u.prefixCls,
          f = u.tabs,
          v = a.tabPane,
          m = f.findIndex(function (e) {
            return e.key === n
          })
        return o.createElement(
          'div',
          { className: d()(''.concat(s, '-content-holder')) },
          o.createElement(
            'div',
            {
              className: d()(''.concat(s, '-content'), ''.concat(s, '-content-').concat(i), (0, r.Z)({}, ''.concat(s, '-content-animated'), v)),
              style: m && v ? (0, r.Z)({}, c ? 'marginRight' : 'marginLeft', '-'.concat(m, '00%')) : null,
            },
            f.map(function (e) {
              return o.cloneElement(e.node, {
                key: e.key,
                prefixCls: s,
                tabKey: e.key,
                id: t,
                animated: v,
                active: e.key === n,
                destroyInactiveTabPane: l,
              })
            }),
          ),
        )
      }
      function V(e) {
        var t = e.prefixCls,
          n = e.forceRender,
          a = e.className,
          r = e.style,
          c = e.id,
          l = e.active,
          s = e.animated,
          f = e.destroyInactiveTabPane,
          v = e.tabKey,
          m = e.children,
          h = o.useState(n),
          b = (0, i.Z)(h, 2),
          p = b[0],
          y = b[1]
        o.useEffect(
          function () {
            l ? y(!0) : f && y(!1)
          },
          [l, f],
        )
        var Z = {}
        return (
          l || (s ? ((Z.visibility = 'hidden'), (Z.height = 0), (Z.overflowY = 'hidden')) : (Z.display = 'none')),
          o.createElement(
            'div',
            {
              id: c && ''.concat(c, '-panel-').concat(v),
              role: 'tabpanel',
              tabIndex: l ? 0 : -1,
              'aria-labelledby': c && ''.concat(c, '-tab-').concat(v),
              'aria-hidden': !l,
              style: (0, u.Z)((0, u.Z)({}, Z), r),
              className: d()(''.concat(t, '-tabpane'), l && ''.concat(t, '-tabpane-active'), a),
            },
            (l || p || n) && m,
          )
        )
      }
      var G = [
          'id',
          'prefixCls',
          'className',
          'children',
          'direction',
          'activeKey',
          'defaultActiveKey',
          'editable',
          'animated',
          'tabPosition',
          'tabBarGutter',
          'tabBarStyle',
          'tabBarExtraContent',
          'locale',
          'moreIcon',
          'moreTransitionName',
          'destroyInactiveTabPane',
          'renderTabBar',
          'onChange',
          'onTabClick',
          'onTabScroll',
        ],
        Y = 0
      function F(e) {
        return (0, f.Z)(e)
          .map(function (e) {
            if (o.isValidElement(e)) {
              var t = void 0 !== e.key ? String(e.key) : void 0
              return (0, u.Z)((0, u.Z)({ key: t }, e.props), {}, { node: e })
            }
            return null
          })
          .filter(function (e) {
            return e
          })
      }
      function X(e, t) {
        var n,
          s,
          f = e.id,
          h = e.prefixCls,
          b = void 0 === h ? 'rc-tabs' : h,
          p = e.className,
          y = e.children,
          Z = e.direction,
          g = e.activeKey,
          E = e.defaultActiveKey,
          x = e.editable,
          w = e.animated,
          k = void 0 === w ? { inkBar: !0, tabPane: !1 } : w,
          C = e.tabPosition,
          N = void 0 === C ? 'top' : C,
          I = e.tabBarGutter,
          T = e.tabBarStyle,
          P = e.tabBarExtraContent,
          S = e.locale,
          R = e.moreIcon,
          M = e.moreTransitionName,
          A = e.destroyInactiveTabPane,
          D = e.renderTabBar,
          B = e.onChange,
          O = e.onTabClick,
          j = e.onTabScroll,
          K = (0, l.Z)(e, G),
          q = F(y),
          W = 'rtl' === Z
        s =
          !1 === k
            ? { inkBar: !1, tabPane: !1 }
            : !0 === k
            ? { inkBar: !0, tabPane: !0 }
            : (0, u.Z)({ inkBar: !0, tabPane: !1 }, 'object' === (0, c.Z)(k) ? k : {})
        var z = (0, o.useState)(!1),
          V = (0, i.Z)(z, 2),
          X = V[0],
          U = V[1]
        ;(0, o.useEffect)(function () {
          U((0, v.Z)())
        }, [])
        var J = (0, m.Z)(
            function () {
              var e
              return null === (e = q[0]) || void 0 === e ? void 0 : e.key
            },
            { value: g, defaultValue: E },
          ),
          Q = (0, i.Z)(J, 2),
          $ = Q[0],
          ee = Q[1],
          te = (0, o.useState)(function () {
            return q.findIndex(function (e) {
              return e.key === $
            })
          }),
          ne = (0, i.Z)(te, 2),
          ae = ne[0],
          re = ne[1]
        ;(0, o.useEffect)(
          function () {
            var e,
              t = q.findIndex(function (e) {
                return e.key === $
              })
            ;-1 === t && ((t = Math.max(0, Math.min(ae, q.length - 1))), ee(null === (e = q[t]) || void 0 === e ? void 0 : e.key))
            re(t)
          },
          [
            q
              .map(function (e) {
                return e.key
              })
              .join('_'),
            $,
            ae,
          ],
        )
        var oe = (0, m.Z)(null, { value: f }),
          ie = (0, i.Z)(oe, 2),
          ce = ie[0],
          le = ie[1],
          ue = N
        function se(e, t) {
          null === O || void 0 === O || O(e, t)
          var n = e !== $
          ee(e), n && (null === B || void 0 === B || B(e))
        }
        X && !['left', 'right'].includes(N) && (ue = 'top'),
          (0, o.useEffect)(function () {
            f || (le('rc-tabs-'.concat(Y)), (Y += 1))
          }, [])
        var de,
          fe = { id: ce, activeKey: $, animated: s, tabPosition: ue, rtl: W, mobile: X },
          ve = (0, u.Z)(
            (0, u.Z)({}, fe),
            {},
            {
              editable: x,
              locale: S,
              moreIcon: R,
              moreTransitionName: M,
              tabBarGutter: I,
              onTabClick: se,
              onTabScroll: j,
              extra: P,
              style: T,
              panes: y,
            },
          )
        return (
          (de = D ? D(ve, H) : o.createElement(H, ve)),
          o.createElement(
            L.Provider,
            { value: { tabs: q, prefixCls: b } },
            o.createElement(
              'div',
              (0, a.Z)(
                {
                  ref: t,
                  id: f,
                  className: d()(
                    b,
                    ''.concat(b, '-').concat(ue),
                    ((n = {}),
                    (0, r.Z)(n, ''.concat(b, '-mobile'), X),
                    (0, r.Z)(n, ''.concat(b, '-editable'), x),
                    (0, r.Z)(n, ''.concat(b, '-rtl'), W),
                    n),
                    p,
                  ),
                },
                K,
              ),
              de,
              o.createElement(_, (0, a.Z)({ destroyInactiveTabPane: A }, fe, { animated: s })),
            ),
          )
        )
      }
      var U = o.forwardRef(X)
      U.TabPane = V
      var J = U,
        Q = J,
        $ = n(91442),
        ee = n(60615),
        te = n(15711),
        ne = n(62572),
        ae = n(38151),
        re = function (e, t) {
          var n = {}
          for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && t.indexOf(a) < 0 && (n[a] = e[a])
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var r = 0
            for (a = Object.getOwnPropertySymbols(e); r < a.length; r++)
              t.indexOf(a[r]) < 0 && Object.prototype.propertyIsEnumerable.call(e, a[r]) && (n[a[r]] = e[a[r]])
          }
          return n
        }
      function oe(e) {
        var t,
          n = e.type,
          i = e.className,
          c = e.size,
          l = e.onEdit,
          u = e.hideAdd,
          s = e.centered,
          f = e.addIcon,
          v = re(e, ['type', 'className', 'size', 'onEdit', 'hideAdd', 'centered', 'addIcon']),
          m = v.prefixCls,
          h = v.moreIcon,
          b = void 0 === h ? o.createElement($.Z, null) : h,
          p = o.useContext(ne.E_),
          y = p.getPrefixCls,
          Z = p.direction,
          g = y('tabs', m)
        'editable-card' === n &&
          (t = {
            onEdit: function (e, t) {
              var n = t.key,
                a = t.event
              null === l || void 0 === l || l('add' === e ? a : n, e)
            },
            removeIcon: o.createElement(te.Z, null),
            addIcon: f || o.createElement(ee.Z, null),
            showAdd: !0 !== u,
          })
        var E = y()
        return o.createElement(ae.Z.Consumer, null, function (e) {
          var l,
            u = void 0 !== c ? c : e
          return o.createElement(
            Q,
            (0, a.Z)({ direction: Z, moreTransitionName: ''.concat(E, '-slide-up') }, v, {
              className: d()(
                ((l = {}),
                (0, r.Z)(l, ''.concat(g, '-').concat(u), u),
                (0, r.Z)(l, ''.concat(g, '-card'), ['card', 'editable-card'].includes(n)),
                (0, r.Z)(l, ''.concat(g, '-editable-card'), 'editable-card' === n),
                (0, r.Z)(l, ''.concat(g, '-centered'), s),
                l),
                i,
              ),
              editable: t,
              moreIcon: b,
              prefixCls: g,
            }),
          )
        })
      }
      oe.TabPane = V
      var ie = oe
    },
    19597: function (e, t, n) {
      'use strict'
      n(68849), n(87968)
    },
  },
])
