;(self['webpackChunkant_design_pro'] = self['webpackChunkant_design_pro'] || []).push([
  [101],
  {
    68652: function (e, n, t) {
      'use strict'
      t.d(n, {
        Z: function () {
          return Z
        },
      })
      var r = t(33673),
        o = t(19344),
        a = t(76317),
        c = t(42151),
        i = t(28815),
        d = t(4198),
        s = t(87705),
        l = t(8772),
        p = t(49184),
        u = t(96162),
        f = t(54794),
        v = t.n(f),
        h = t(66223),
        g = t(86152),
        k = function (e) {
          for (var n = e.prefixCls, t = e.level, r = e.isStart, a = e.isEnd, c = ''.concat(n, '-indent-unit'), i = [], d = 0; d < t; d += 1) {
            var s
            i.push(
              u.createElement('span', {
                key: d,
                className: v()(c, ((s = {}), (0, o.Z)(s, ''.concat(c, '-start'), r[d]), (0, o.Z)(s, ''.concat(c, '-end'), a[d]), s)),
              }),
            )
          }
          return u.createElement('span', { 'aria-hidden': 'true', className: ''.concat(n, '-indent') }, i)
        },
        y = u.memo(k),
        x = t(82771),
        b = [
          'eventKey',
          'className',
          'style',
          'dragOver',
          'dragOverGapTop',
          'dragOverGapBottom',
          'isLeaf',
          'isStart',
          'isEnd',
          'expanded',
          'selected',
          'checked',
          'halfChecked',
          'loading',
          'domRef',
          'active',
          'data',
          'onMouseMove',
          'selectable',
        ],
        m = 'open',
        N = 'close',
        D = '---',
        C = (function (e) {
          ;(0, l.Z)(t, e)
          var n = (0, p.Z)(t)
          function t() {
            var e
            ;(0, i.Z)(this, t)
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++) o[a] = arguments[a]
            return (
              (e = n.call.apply(n, [this].concat(o))),
              (e.state = { dragNodeHighlight: !1 }),
              (e.selectHandle = void 0),
              (e.onSelectorClick = function (n) {
                var t = e.props.context.onNodeClick
                t(n, (0, x.F)(e.props)), e.isSelectable() ? e.onSelect(n) : e.onCheck(n)
              }),
              (e.onSelectorDoubleClick = function (n) {
                var t = e.props.context.onNodeDoubleClick
                t(n, (0, x.F)(e.props))
              }),
              (e.onSelect = function (n) {
                if (!e.isDisabled()) {
                  var t = e.props.context.onNodeSelect
                  n.preventDefault(), t(n, (0, x.F)(e.props))
                }
              }),
              (e.onCheck = function (n) {
                if (!e.isDisabled()) {
                  var t = e.props,
                    r = t.disableCheckbox,
                    o = t.checked,
                    a = e.props.context.onNodeCheck
                  if (e.isCheckable() && !r) {
                    n.preventDefault()
                    var c = !o
                    a(n, (0, x.F)(e.props), c)
                  }
                }
              }),
              (e.onMouseEnter = function (n) {
                var t = e.props.context.onNodeMouseEnter
                t(n, (0, x.F)(e.props))
              }),
              (e.onMouseLeave = function (n) {
                var t = e.props.context.onNodeMouseLeave
                t(n, (0, x.F)(e.props))
              }),
              (e.onContextMenu = function (n) {
                var t = e.props.context.onNodeContextMenu
                t(n, (0, x.F)(e.props))
              }),
              (e.onDragStart = function (n) {
                var t = e.props.context.onNodeDragStart
                n.stopPropagation(), e.setState({ dragNodeHighlight: !0 }), t(n, (0, s.Z)(e))
                try {
                  n.dataTransfer.setData('text/plain', '')
                } catch (r) {}
              }),
              (e.onDragEnter = function (n) {
                var t = e.props.context.onNodeDragEnter
                n.preventDefault(), n.stopPropagation(), t(n, (0, s.Z)(e))
              }),
              (e.onDragOver = function (n) {
                var t = e.props.context.onNodeDragOver
                n.preventDefault(), n.stopPropagation(), t(n, (0, s.Z)(e))
              }),
              (e.onDragLeave = function (n) {
                var t = e.props.context.onNodeDragLeave
                n.stopPropagation(), t(n, (0, s.Z)(e))
              }),
              (e.onDragEnd = function (n) {
                var t = e.props.context.onNodeDragEnd
                n.stopPropagation(), e.setState({ dragNodeHighlight: !1 }), t(n, (0, s.Z)(e))
              }),
              (e.onDrop = function (n) {
                var t = e.props.context.onNodeDrop
                n.preventDefault(), n.stopPropagation(), e.setState({ dragNodeHighlight: !1 }), t(n, (0, s.Z)(e))
              }),
              (e.onExpand = function (n) {
                var t = e.props,
                  r = t.loading,
                  o = t.context.onNodeExpand
                r || o(n, (0, x.F)(e.props))
              }),
              (e.setSelectHandle = function (n) {
                e.selectHandle = n
              }),
              (e.getNodeState = function () {
                var n = e.props.expanded
                return e.isLeaf() ? null : n ? m : N
              }),
              (e.hasChildren = function () {
                var n = e.props.eventKey,
                  t = e.props.context.keyEntities,
                  r = t[n] || {},
                  o = r.children
                return !!(o || []).length
              }),
              (e.isLeaf = function () {
                var n = e.props,
                  t = n.isLeaf,
                  r = n.loaded,
                  o = e.props.context.loadData,
                  a = e.hasChildren()
                return !1 !== t && (t || (!o && !a) || (o && r && !a))
              }),
              (e.isDisabled = function () {
                var n = e.props.disabled,
                  t = e.props.context.disabled
                return !(!t && !n)
              }),
              (e.isCheckable = function () {
                var n = e.props.checkable,
                  t = e.props.context.checkable
                return !(!t || !1 === n) && t
              }),
              (e.syncLoadData = function (n) {
                var t = n.expanded,
                  r = n.loading,
                  o = n.loaded,
                  a = e.props.context,
                  c = a.loadData,
                  i = a.onNodeLoad
                r || (c && t && !e.isLeaf() && (e.hasChildren() || o || i((0, x.F)(e.props))))
              }),
              (e.isDraggable = function () {
                var n = e.props,
                  t = n.data,
                  r = n.context.draggable
                return !(!r || (r.nodeDraggable && !r.nodeDraggable(t)))
              }),
              (e.renderDragHandler = function () {
                var n = e.props.context,
                  t = n.draggable,
                  r = n.prefixCls
                return (null === t || void 0 === t ? void 0 : t.icon)
                  ? u.createElement('span', { className: ''.concat(r, '-draggable-icon') }, t.icon)
                  : null
              }),
              (e.renderSwitcherIconDom = function (n) {
                var t = e.props.switcherIcon,
                  r = e.props.context.switcherIcon,
                  o = t || r
                return 'function' === typeof o ? o((0, c.Z)((0, c.Z)({}, e.props), {}, { isLeaf: n })) : o
              }),
              (e.renderSwitcher = function () {
                var n = e.props.expanded,
                  t = e.props.context.prefixCls
                if (e.isLeaf()) {
                  var r = e.renderSwitcherIconDom(!0)
                  return !1 !== r ? u.createElement('span', { className: v()(''.concat(t, '-switcher'), ''.concat(t, '-switcher-noop')) }, r) : null
                }
                var o = v()(''.concat(t, '-switcher'), ''.concat(t, '-switcher_').concat(n ? m : N)),
                  a = e.renderSwitcherIconDom(!1)
                return !1 !== a ? u.createElement('span', { onClick: e.onExpand, className: o }, a) : null
              }),
              (e.renderCheckbox = function () {
                var n = e.props,
                  t = n.checked,
                  r = n.halfChecked,
                  o = n.disableCheckbox,
                  a = e.props.context.prefixCls,
                  c = e.isDisabled(),
                  i = e.isCheckable()
                if (!i) return null
                var d = 'boolean' !== typeof i ? i : null
                return u.createElement(
                  'span',
                  {
                    className: v()(
                      ''.concat(a, '-checkbox'),
                      t && ''.concat(a, '-checkbox-checked'),
                      !t && r && ''.concat(a, '-checkbox-indeterminate'),
                      (c || o) && ''.concat(a, '-checkbox-disabled'),
                    ),
                    onClick: e.onCheck,
                  },
                  d,
                )
              }),
              (e.renderIcon = function () {
                var n = e.props.loading,
                  t = e.props.context.prefixCls
                return u.createElement('span', {
                  className: v()(
                    ''.concat(t, '-iconEle'),
                    ''.concat(t, '-icon__').concat(e.getNodeState() || 'docu'),
                    n && ''.concat(t, '-icon_loading'),
                  ),
                })
              }),
              (e.renderSelector = function () {
                var n,
                  t,
                  r = e.state.dragNodeHighlight,
                  o = e.props,
                  a = o.title,
                  c = o.selected,
                  i = o.icon,
                  d = o.loading,
                  s = o.data,
                  l = e.props.context,
                  p = l.prefixCls,
                  f = l.showIcon,
                  h = l.icon,
                  g = l.loadData,
                  k = l.titleRender,
                  y = e.isDisabled(),
                  x = ''.concat(p, '-node-content-wrapper')
                if (f) {
                  var b = i || h
                  n = b
                    ? u.createElement(
                        'span',
                        { className: v()(''.concat(p, '-iconEle'), ''.concat(p, '-icon__customize')) },
                        'function' === typeof b ? b(e.props) : b,
                      )
                    : e.renderIcon()
                } else g && d && (n = e.renderIcon())
                t = 'function' === typeof a ? a(s) : k ? k(s) : a
                var m = u.createElement('span', { className: ''.concat(p, '-title') }, t)
                return u.createElement(
                  'span',
                  {
                    ref: e.setSelectHandle,
                    title: 'string' === typeof a ? a : '',
                    className: v()(
                      ''.concat(x),
                      ''.concat(x, '-').concat(e.getNodeState() || 'normal'),
                      !y && (c || r) && ''.concat(p, '-node-selected'),
                    ),
                    onMouseEnter: e.onMouseEnter,
                    onMouseLeave: e.onMouseLeave,
                    onContextMenu: e.onContextMenu,
                    onClick: e.onSelectorClick,
                    onDoubleClick: e.onSelectorDoubleClick,
                  },
                  n,
                  m,
                  e.renderDropIndicator(),
                )
              }),
              (e.renderDropIndicator = function () {
                var n = e.props,
                  t = n.disabled,
                  r = n.eventKey,
                  o = e.props.context,
                  a = o.draggable,
                  c = o.dropLevelOffset,
                  i = o.dropPosition,
                  d = o.prefixCls,
                  s = o.indent,
                  l = o.dropIndicatorRender,
                  p = o.dragOverNodeKey,
                  u = o.direction,
                  f = !1 !== a,
                  v = !t && f && p === r
                return v ? l({ dropPosition: i, dropLevelOffset: c, indent: s, prefixCls: d, direction: u }) : null
              }),
              e
            )
          }
          return (
            (0, d.Z)(t, [
              {
                key: 'componentDidMount',
                value: function () {
                  this.syncLoadData(this.props)
                },
              },
              {
                key: 'componentDidUpdate',
                value: function () {
                  this.syncLoadData(this.props)
                },
              },
              {
                key: 'isSelectable',
                value: function () {
                  var e = this.props.selectable,
                    n = this.props.context.selectable
                  return 'boolean' === typeof e ? e : n
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    n = this.props,
                    t = n.eventKey,
                    c = n.className,
                    i = n.style,
                    d = n.dragOver,
                    s = n.dragOverGapTop,
                    l = n.dragOverGapBottom,
                    p = n.isLeaf,
                    f = n.isStart,
                    g = n.isEnd,
                    k = n.expanded,
                    m = n.selected,
                    N = n.checked,
                    D = n.halfChecked,
                    C = n.loading,
                    E = n.domRef,
                    Z = n.active,
                    S = (n.data, n.onMouseMove),
                    w = n.selectable,
                    K = (0, a.Z)(n, b),
                    O = this.props.context,
                    P = O.prefixCls,
                    L = O.filterTreeNode,
                    M = O.keyEntities,
                    T = O.dropContainerKey,
                    G = O.dropTargetKey,
                    I = O.draggingNodeKey,
                    _ = this.isDisabled(),
                    H = (0, h.Z)(K, { aria: !0, data: !0 }),
                    F = M[t] || {},
                    A = F.level,
                    B = g[g.length - 1],
                    j = this.isDraggable(),
                    R = !_ && j,
                    z = I === t,
                    U = void 0 !== w ? { 'aria-selected': !!w } : void 0
                  return u.createElement(
                    'div',
                    (0, r.Z)(
                      {
                        ref: E,
                        className: v()(
                          c,
                          ''.concat(P, '-treenode'),
                          ((e = {}),
                          (0, o.Z)(e, ''.concat(P, '-treenode-disabled'), _),
                          (0, o.Z)(e, ''.concat(P, '-treenode-switcher-').concat(k ? 'open' : 'close'), !p),
                          (0, o.Z)(e, ''.concat(P, '-treenode-checkbox-checked'), N),
                          (0, o.Z)(e, ''.concat(P, '-treenode-checkbox-indeterminate'), D),
                          (0, o.Z)(e, ''.concat(P, '-treenode-selected'), m),
                          (0, o.Z)(e, ''.concat(P, '-treenode-loading'), C),
                          (0, o.Z)(e, ''.concat(P, '-treenode-active'), Z),
                          (0, o.Z)(e, ''.concat(P, '-treenode-leaf-last'), B),
                          (0, o.Z)(e, ''.concat(P, '-treenode-draggable'), R),
                          (0, o.Z)(e, 'dragging', z),
                          (0, o.Z)(e, 'drop-target', G === t),
                          (0, o.Z)(e, 'drop-container', T === t),
                          (0, o.Z)(e, 'drag-over', !_ && d),
                          (0, o.Z)(e, 'drag-over-gap-top', !_ && s),
                          (0, o.Z)(e, 'drag-over-gap-bottom', !_ && l),
                          (0, o.Z)(e, 'filter-node', L && L((0, x.F)(this.props))),
                          e),
                        ),
                        style: i,
                        draggable: R,
                        'aria-grabbed': z,
                        onDragStart: R ? this.onDragStart : void 0,
                        onDragEnter: j ? this.onDragEnter : void 0,
                        onDragOver: j ? this.onDragOver : void 0,
                        onDragLeave: j ? this.onDragLeave : void 0,
                        onDrop: j ? this.onDrop : void 0,
                        onDragEnd: j ? this.onDragEnd : void 0,
                        onMouseMove: S,
                      },
                      U,
                      H,
                    ),
                    u.createElement(y, { prefixCls: P, level: A, isStart: f, isEnd: g }),
                    this.renderDragHandler(),
                    this.renderSwitcher(),
                    this.renderCheckbox(),
                    this.renderSelector(),
                  )
                },
              },
            ]),
            t
          )
        })(u.Component),
        E = function (e) {
          return u.createElement(g.k.Consumer, null, function (n) {
            return u.createElement(C, (0, r.Z)({}, e, { context: n }))
          })
        }
      ;(E.displayName = 'TreeNode'), (E.defaultProps = { title: D }), (E.isTreeNode = 1)
      var Z = E
    },
    86152: function (e, n, t) {
      'use strict'
      t.d(n, {
        k: function () {
          return o
        },
      })
      var r = t(96162),
        o = r.createContext(null)
    },
    89974: function (e, n, t) {
      'use strict'
      t.d(n, {
        _5: function () {
          return c
        },
        L0: function () {
          return i
        },
        yx: function () {
          return d
        },
        bt: function () {
          return s
        },
        Ds: function () {
          return l
        },
        wA: function () {
          return p
        },
        OM: function () {
          return v
        },
        BT: function () {
          return h
        },
        E6: function () {
          return g
        },
        r7: function () {
          return k
        },
      })
      var r = t(22018),
        o = t(574),
        a = (t(96162), t(84603))
      t(68652)
      function c(e, n) {
        if (!e) return []
        var t = e.slice(),
          r = t.indexOf(n)
        return r >= 0 && t.splice(r, 1), t
      }
      function i(e, n) {
        var t = (e || []).slice()
        return -1 === t.indexOf(n) && t.push(n), t
      }
      function d(e) {
        return e.split('-')
      }
      function s(e, n) {
        return ''.concat(e, '-').concat(n)
      }
      function l(e) {
        return e && e.type && e.type.isTreeNode
      }
      function p(e, n) {
        var t = [],
          r = n[e]
        function o() {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          e.forEach(function (e) {
            var n = e.key,
              r = e.children
            t.push(n), o(r)
          })
        }
        return o(r.children), t
      }
      function u(e) {
        if (e.parent) {
          var n = d(e.pos)
          return Number(n[n.length - 1]) === e.parent.children.length - 1
        }
        return !1
      }
      function f(e) {
        var n = d(e.pos)
        return 0 === Number(n[n.length - 1])
      }
      function v(e, n, t, r, o, a, c, i, d, s) {
        var l,
          p = e.clientX,
          v = e.clientY,
          h = e.target.getBoundingClientRect(),
          g = h.top,
          k = h.height,
          y = ('rtl' === s ? -1 : 1) * (((null === o || void 0 === o ? void 0 : o.x) || 0) - p),
          x = (y - 12) / r,
          b = i[t.props.eventKey]
        if (v < g + k / 2) {
          var m = c.findIndex(function (e) {
              return e.key === b.key
            }),
            N = m <= 0 ? 0 : m - 1,
            D = c[N].key
          b = i[D]
        }
        var C = b.key,
          E = b,
          Z = b.key,
          S = 0,
          w = 0
        if (!d.includes(C))
          for (var K = 0; K < x; K += 1) {
            if (!u(b)) break
            ;(b = b.parent), (w += 1)
          }
        var O = n.props.data,
          P = b.node,
          L = !0
        return (
          f(b) && 0 === b.level && v < g + k / 2 && a({ dragNode: O, dropNode: P, dropPosition: -1 }) && b.key === t.props.eventKey
            ? (S = -1)
            : (E.children || []).length && d.includes(Z)
            ? a({ dragNode: O, dropNode: P, dropPosition: 0 })
              ? (S = 0)
              : (L = !1)
            : 0 === w
            ? x > -1.5
              ? a({ dragNode: O, dropNode: P, dropPosition: 1 })
                ? (S = 1)
                : (L = !1)
              : a({ dragNode: O, dropNode: P, dropPosition: 0 })
              ? (S = 0)
              : a({ dragNode: O, dropNode: P, dropPosition: 1 })
              ? (S = 1)
              : (L = !1)
            : a({ dragNode: O, dropNode: P, dropPosition: 1 })
            ? (S = 1)
            : (L = !1),
          {
            dropPosition: S,
            dropLevelOffset: w,
            dropTargetKey: b.key,
            dropTargetPos: b.pos,
            dragOverNodeKey: Z,
            dropContainerKey: 0 === S ? null : (null === (l = b.parent) || void 0 === l ? void 0 : l.key) || null,
            dropAllowed: L,
          }
        )
      }
      function h(e, n) {
        if (e) {
          var t = n.multiple
          return t ? e.slice() : e.length ? [e[0]] : e
        }
      }
      function g(e) {
        if (!e) return null
        var n
        if (Array.isArray(e)) n = { checkedKeys: e, halfCheckedKeys: void 0 }
        else {
          if ('object' !== (0, o.Z)(e)) return (0, a.ZP)(!1, '`checkedKeys` is not an array or an object'), null
          n = { checkedKeys: e.checked || void 0, halfCheckedKeys: e.halfChecked || void 0 }
        }
        return n
      }
      function k(e, n) {
        var t = new Set()
        function o(e) {
          if (!t.has(e)) {
            var r = n[e]
            if (r) {
              t.add(e)
              var a = r.parent,
                c = r.node
              c.disabled || (a && o(a.key))
            }
          }
        }
        return (
          (e || []).forEach(function (e) {
            o(e)
          }),
          (0, r.Z)(t)
        )
      }
    },
    65082: function (e, n, t) {
      'use strict'
      t.d(n, {
        S: function () {
          return d
        },
      })
      var r = t(84603)
      function o(e, n) {
        var t = new Set()
        return (
          e.forEach(function (e) {
            n.has(e) || t.add(e)
          }),
          t
        )
      }
      function a(e) {
        var n = e || {},
          t = n.disabled,
          r = n.disableCheckbox,
          o = n.checkable
        return !(!t && !r) || !1 === o
      }
      function c(e, n, t, r) {
        for (var a = new Set(e), c = new Set(), i = 0; i <= t; i += 1) {
          var d = n.get(i) || new Set()
          d.forEach(function (e) {
            var n = e.key,
              t = e.node,
              o = e.children,
              c = void 0 === o ? [] : o
            a.has(n) &&
              !r(t) &&
              c
                .filter(function (e) {
                  return !r(e.node)
                })
                .forEach(function (e) {
                  a.add(e.key)
                })
          })
        }
        for (var s = new Set(), l = t; l >= 0; l -= 1) {
          var p = n.get(l) || new Set()
          p.forEach(function (e) {
            var n = e.parent,
              t = e.node
            if (!r(t) && e.parent && !s.has(e.parent.key))
              if (r(e.parent.node)) s.add(n.key)
              else {
                var o = !0,
                  i = !1
                ;(n.children || [])
                  .filter(function (e) {
                    return !r(e.node)
                  })
                  .forEach(function (e) {
                    var n = e.key,
                      t = a.has(n)
                    o && !t && (o = !1), i || (!t && !c.has(n)) || (i = !0)
                  }),
                  o && a.add(n.key),
                  i && c.add(n.key),
                  s.add(n.key)
              }
          })
        }
        return { checkedKeys: Array.from(a), halfCheckedKeys: Array.from(o(c, a)) }
      }
      function i(e, n, t, r, a) {
        for (var c = new Set(e), i = new Set(n), d = 0; d <= r; d += 1) {
          var s = t.get(d) || new Set()
          s.forEach(function (e) {
            var n = e.key,
              t = e.node,
              r = e.children,
              o = void 0 === r ? [] : r
            c.has(n) ||
              i.has(n) ||
              a(t) ||
              o
                .filter(function (e) {
                  return !a(e.node)
                })
                .forEach(function (e) {
                  c.delete(e.key)
                })
          })
        }
        i = new Set()
        for (var l = new Set(), p = r; p >= 0; p -= 1) {
          var u = t.get(p) || new Set()
          u.forEach(function (e) {
            var n = e.parent,
              t = e.node
            if (!a(t) && e.parent && !l.has(e.parent.key))
              if (a(e.parent.node)) l.add(n.key)
              else {
                var r = !0,
                  o = !1
                ;(n.children || [])
                  .filter(function (e) {
                    return !a(e.node)
                  })
                  .forEach(function (e) {
                    var n = e.key,
                      t = c.has(n)
                    r && !t && (r = !1), o || (!t && !i.has(n)) || (o = !0)
                  }),
                  r || c.delete(n.key),
                  o && i.add(n.key),
                  l.add(n.key)
              }
          })
        }
        return { checkedKeys: Array.from(c), halfCheckedKeys: Array.from(o(i, c)) }
      }
      function d(e, n, t, o) {
        var d,
          s = []
        d = o || a
        var l,
          p = new Set(
            e.filter(function (e) {
              var n = !!t[e]
              return n || s.push(e), n
            }),
          ),
          u = new Map(),
          f = 0
        return (
          Object.keys(t).forEach(function (e) {
            var n = t[e],
              r = n.level,
              o = u.get(r)
            o || ((o = new Set()), u.set(r, o)), o.add(n), (f = Math.max(f, r))
          }),
          (0, r.ZP)(
            !s.length,
            'Tree missing follow keys: '.concat(
              s
                .slice(0, 100)
                .map(function (e) {
                  return "'".concat(e, "'")
                })
                .join(', '),
            ),
          ),
          (l = !0 === n ? c(p, u, f, d) : i(p, n.halfCheckedKeys, u, f, d)),
          l
        )
      }
    },
    82771: function (e, n, t) {
      'use strict'
      t.d(n, {
        km: function () {
          return u
        },
        w$: function () {
          return f
        },
        zn: function () {
          return v
        },
        oH: function () {
          return h
        },
        I8: function () {
          return k
        },
        H8: function () {
          return y
        },
        F: function () {
          return x
        },
      })
      var r = t(574),
        o = t(22018),
        a = t(42151),
        c = t(76317),
        i = t(85080),
        d = t(48436),
        s = t(84603),
        l = t(89974),
        p = ['children']
      function u(e, n) {
        return null !== e && void 0 !== e ? e : n
      }
      function f(e) {
        var n = e || {},
          t = n.title,
          r = n._title,
          o = n.key,
          a = n.children,
          c = t || 'title'
        return { title: c, _title: r || [c], key: o || 'key', children: a || 'children' }
      }
      function v(e) {
        function n(e) {
          var t = (0, d.Z)(e)
          return t
            .map(function (e) {
              if (!(0, l.Ds)(e)) return (0, s.ZP)(!e, 'Tree/TreeNode can only accept TreeNode as children.'), null
              var t = e.key,
                r = e.props,
                o = r.children,
                i = (0, c.Z)(r, p),
                d = (0, a.Z)({ key: t }, i),
                u = n(o)
              return u.length && (d.children = u), d
            })
            .filter(function (e) {
              return e
            })
        }
        return n(e)
      }
      function h(e, n, t) {
        var r = f(t),
          c = r._title,
          d = r.key,
          s = r.children,
          p = new Set(!0 === n ? [] : n),
          v = []
        function h(e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null
          return e.map(function (r, f) {
            for (var g, k = (0, l.bt)(t ? t.pos : '0', f), y = u(r[d], k), x = 0; x < c.length; x += 1) {
              var b = c[x]
              if (void 0 !== r[b]) {
                g = r[b]
                break
              }
            }
            var m = (0, a.Z)(
              (0, a.Z)({}, (0, i.Z)(r, [].concat((0, o.Z)(c), [d, s]))),
              {},
              {
                title: g,
                key: y,
                parent: t,
                pos: k,
                children: null,
                data: r,
                isStart: [].concat((0, o.Z)(t ? t.isStart : []), [0 === f]),
                isEnd: [].concat((0, o.Z)(t ? t.isEnd : []), [f === e.length - 1]),
              },
            )
            return v.push(m), !0 === n || p.has(y) ? (m.children = h(r[s] || [], m)) : (m.children = []), m
          })
        }
        return h(e), v
      }
      function g(e, n, t) {
        var a = {}
        ;(a = 'object' === (0, r.Z)(t) ? t : { externalGetKey: t }), (a = a || {})
        var c,
          i = a,
          d = i.childrenPropName,
          s = i.externalGetKey,
          p = i.fieldNames,
          v = f(p),
          h = v.key,
          g = v.children,
          k = d || g
        function y(t, r, a, i) {
          var d = t ? t[k] : e,
            s = t ? (0, l.bt)(a.pos, r) : '0',
            p = t ? [].concat((0, o.Z)(i), [t]) : []
          if (t) {
            var u = c(t, s),
              f = { node: t, index: r, pos: s, key: u, parentPos: a.node ? a.pos : null, level: a.level + 1, nodes: p }
            n(f)
          }
          d &&
            d.forEach(function (e, n) {
              y(e, n, { node: t, pos: s, level: a ? a.level + 1 : -1 }, p)
            })
        }
        s
          ? 'string' === typeof s
            ? (c = function (e) {
                return e[s]
              })
            : 'function' === typeof s &&
              (c = function (e) {
                return s(e)
              })
          : (c = function (e, n) {
              return u(e[h], n)
            }),
          y(null)
      }
      function k(e) {
        var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
          t = n.initWrapper,
          r = n.processEntity,
          o = n.onProcessFinished,
          a = n.externalGetKey,
          c = n.childrenPropName,
          i = n.fieldNames,
          d = arguments.length > 2 ? arguments[2] : void 0,
          s = a || d,
          l = {},
          p = {},
          f = { posEntities: l, keyEntities: p }
        return (
          t && (f = t(f) || f),
          g(
            e,
            function (e) {
              var n = e.node,
                t = e.index,
                o = e.pos,
                a = e.key,
                c = e.parentPos,
                i = e.level,
                d = e.nodes,
                s = { node: n, nodes: d, index: t, key: a, pos: o, level: i },
                v = u(a, o)
              ;(l[o] = s),
                (p[v] = s),
                (s.parent = l[c]),
                s.parent && ((s.parent.children = s.parent.children || []), s.parent.children.push(s)),
                r && r(s, f)
            },
            { externalGetKey: s, childrenPropName: c, fieldNames: i },
          ),
          o && o(f),
          f
        )
      }
      function y(e, n) {
        var t = n.expandedKeys,
          r = n.selectedKeys,
          o = n.loadedKeys,
          a = n.loadingKeys,
          c = n.checkedKeys,
          i = n.halfCheckedKeys,
          d = n.dragOverNodeKey,
          s = n.dropPosition,
          l = n.keyEntities,
          p = l[e],
          u = {
            eventKey: e,
            expanded: -1 !== t.indexOf(e),
            selected: -1 !== r.indexOf(e),
            loaded: -1 !== o.indexOf(e),
            loading: -1 !== a.indexOf(e),
            checked: -1 !== c.indexOf(e),
            halfChecked: -1 !== i.indexOf(e),
            pos: String(p ? p.pos : ''),
            dragOver: d === e && 0 === s,
            dragOverGapTop: d === e && -1 === s,
            dragOverGapBottom: d === e && 1 === s,
          }
        return u
      }
      function x(e) {
        var n = e.data,
          t = e.expanded,
          r = e.selected,
          o = e.checked,
          c = e.loaded,
          i = e.loading,
          d = e.halfChecked,
          l = e.dragOver,
          p = e.dragOverGapTop,
          u = e.dragOverGapBottom,
          f = e.pos,
          v = e.active,
          h = e.eventKey,
          g = (0, a.Z)(
            (0, a.Z)({}, n),
            {},
            {
              expanded: t,
              selected: r,
              checked: o,
              loaded: c,
              loading: i,
              halfChecked: d,
              dragOver: l,
              dragOverGapTop: p,
              dragOverGapBottom: u,
              pos: f,
              active: v,
              key: h,
            },
          )
        return (
          'props' in g ||
            Object.defineProperty(g, 'props', {
              get: function () {
                return (
                  (0, s.ZP)(
                    !1,
                    'Second param return from event is node data instead of TreeNode instance. Please read value directly instead of reading from `props`.',
                  ),
                  e
                )
              },
            }),
          g
        )
      }
    },
  },
])
