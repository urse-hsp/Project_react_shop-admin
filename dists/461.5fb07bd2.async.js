;(self['webpackChunkant_design_pro'] = self['webpackChunkant_design_pro'] || []).push([
  [461],
  {
    49685: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return s
        },
      })
      var i = n(42151),
        o = n(96162),
        r = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z',
                },
              },
            ],
          },
          name: 'down',
          theme: 'outlined',
        },
        a = r,
        c = n(23986),
        l = function (e, t) {
          return o.createElement(c.Z, (0, i.Z)((0, i.Z)({}, e), {}, { ref: t, icon: a }))
        }
      l.displayName = 'DownOutlined'
      var s = o.forwardRef(l)
    },
    74389: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return s
        },
      })
      var i = n(42151),
        o = n(96162),
        r = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M400 317.7h73.9V656c0 4.4 3.6 8 8 8h60c4.4 0 8-3.6 8-8V317.7H624c6.7 0 10.4-7.7 6.3-12.9L518.3 163a8 8 0 00-12.6 0l-112 141.7c-4.1 5.3-.4 13 6.3 13zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z',
                },
              },
            ],
          },
          name: 'upload',
          theme: 'outlined',
        },
        a = r,
        c = n(23986),
        l = function (e, t) {
          return o.createElement(c.Z, (0, i.Z)((0, i.Z)({}, e), {}, { ref: t, icon: a }))
        }
      l.displayName = 'UploadOutlined'
      var s = o.forwardRef(l)
    },
    63330: function () {},
    57230: function () {},
    11854: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return r
        },
      })
      var i = n(43141),
        o = n(96162)
      function r() {
        var e = o.useReducer(function (e) {
            return e + 1
          }, 0),
          t = (0, i.Z)(e, 2),
          n = t[1]
        return n
      }
    },
    62003: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return C
        },
      })
      var i = n(19344),
        o = n(33673),
        r = n(96162),
        a = n(54794),
        c = n.n(a),
        l = n(85080),
        s = n(62572),
        A = function (e, t) {
          var n = {}
          for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i])
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0
            for (i = Object.getOwnPropertySymbols(e); o < i.length; o++)
              t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]])
          }
          return n
        },
        u = function (e) {
          var t = e.prefixCls,
            n = e.className,
            a = e.hoverable,
            l = void 0 === a || a,
            u = A(e, ['prefixCls', 'className', 'hoverable'])
          return r.createElement(s.C, null, function (e) {
            var a = e.getPrefixCls,
              s = a('card', t),
              A = c()(''.concat(s, '-grid'), n, (0, i.Z)({}, ''.concat(s, '-grid-hoverable'), l))
            return r.createElement('div', (0, o.Z)({}, u, { className: A }))
          })
        },
        d = u,
        p = function (e, t) {
          var n = {}
          for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i])
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0
            for (i = Object.getOwnPropertySymbols(e); o < i.length; o++)
              t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]])
          }
          return n
        },
        f = function (e) {
          return r.createElement(s.C, null, function (t) {
            var n = t.getPrefixCls,
              i = e.prefixCls,
              a = e.className,
              l = e.avatar,
              s = e.title,
              A = e.description,
              u = p(e, ['prefixCls', 'className', 'avatar', 'title', 'description']),
              d = n('card', i),
              f = c()(''.concat(d, '-meta'), a),
              h = l ? r.createElement('div', { className: ''.concat(d, '-meta-avatar') }, l) : null,
              m = s ? r.createElement('div', { className: ''.concat(d, '-meta-title') }, s) : null,
              v = A ? r.createElement('div', { className: ''.concat(d, '-meta-description') }, A) : null,
              g = m || v ? r.createElement('div', { className: ''.concat(d, '-meta-detail') }, m, v) : null
            return r.createElement('div', (0, o.Z)({}, u, { className: f }), h, g)
          })
        },
        h = f,
        m = n(61567),
        v = n(4405),
        g = n(78676),
        w = n(38151),
        E = function (e, t) {
          var n = {}
          for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i])
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0
            for (i = Object.getOwnPropertySymbols(e); o < i.length; o++)
              t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]])
          }
          return n
        }
      function b(e) {
        var t = e.map(function (t, n) {
          return r.createElement(
            'li',
            { style: { width: ''.concat(100 / e.length, '%') }, key: 'action-'.concat(n) },
            r.createElement('span', null, t),
          )
        })
        return t
      }
      var y = r.forwardRef(function (e, t) {
        var n,
          a,
          A,
          u = r.useContext(s.E_),
          p = u.getPrefixCls,
          f = u.direction,
          h = r.useContext(w.Z),
          y = function (t) {
            var n
            null === (n = e.onTabChange) || void 0 === n || n.call(e, t)
          },
          C = function () {
            var t
            return (
              r.Children.forEach(e.children, function (e) {
                e && e.type && e.type === d && (t = !0)
              }),
              t
            )
          },
          x = e.prefixCls,
          B = e.className,
          I = e.extra,
          k = e.headStyle,
          Q = void 0 === k ? {} : k,
          N = e.bodyStyle,
          M = void 0 === N ? {} : N,
          S = e.title,
          D = e.loading,
          F = e.bordered,
          R = void 0 === F || F,
          _ = e.size,
          T = e.type,
          P = e.cover,
          U = e.actions,
          Z = e.tabList,
          L = e.children,
          j = e.activeTabKey,
          O = e.defaultActiveTabKey,
          Y = e.tabBarExtraContent,
          H = e.hoverable,
          z = e.tabProps,
          G = void 0 === z ? {} : z,
          J = E(e, [
            'prefixCls',
            'className',
            'extra',
            'headStyle',
            'bodyStyle',
            'title',
            'loading',
            'bordered',
            'size',
            'type',
            'cover',
            'actions',
            'tabList',
            'children',
            'activeTabKey',
            'defaultActiveTabKey',
            'tabBarExtraContent',
            'hoverable',
            'tabProps',
          ]),
          $ = p('card', x),
          V = 0 === M.padding || '0px' === M.padding ? { padding: 24 } : void 0,
          K = r.createElement('div', { className: ''.concat($, '-loading-block') }),
          q = r.createElement(
            'div',
            { className: ''.concat($, '-loading-content'), style: V },
            r.createElement(v.Z, { gutter: 8 }, r.createElement(g.Z, { span: 22 }, K)),
            r.createElement(v.Z, { gutter: 8 }, r.createElement(g.Z, { span: 8 }, K), r.createElement(g.Z, { span: 15 }, K)),
            r.createElement(v.Z, { gutter: 8 }, r.createElement(g.Z, { span: 6 }, K), r.createElement(g.Z, { span: 18 }, K)),
            r.createElement(v.Z, { gutter: 8 }, r.createElement(g.Z, { span: 13 }, K), r.createElement(g.Z, { span: 9 }, K)),
            r.createElement(
              v.Z,
              { gutter: 8 },
              r.createElement(g.Z, { span: 4 }, K),
              r.createElement(g.Z, { span: 3 }, K),
              r.createElement(g.Z, { span: 16 }, K),
            ),
          ),
          X = void 0 !== j,
          W = (0, o.Z)(
            (0, o.Z)({}, G),
            ((n = {}), (0, i.Z)(n, X ? 'activeKey' : 'defaultActiveKey', X ? j : O), (0, i.Z)(n, 'tabBarExtraContent', Y), n),
          ),
          ee =
            Z && Z.length
              ? r.createElement(
                  m.Z,
                  (0, o.Z)({ size: 'large' }, W, { className: ''.concat($, '-head-tabs'), onChange: y }),
                  Z.map(function (e) {
                    return r.createElement(m.Z.TabPane, { tab: e.tab, disabled: e.disabled, key: e.key })
                  }),
                )
              : null
        ;(S || I || ee) &&
          (A = r.createElement(
            'div',
            { className: ''.concat($, '-head'), style: Q },
            r.createElement(
              'div',
              { className: ''.concat($, '-head-wrapper') },
              S && r.createElement('div', { className: ''.concat($, '-head-title') }, S),
              I && r.createElement('div', { className: ''.concat($, '-extra') }, I),
            ),
            ee,
          ))
        var te = P ? r.createElement('div', { className: ''.concat($, '-cover') }, P) : null,
          ne = r.createElement('div', { className: ''.concat($, '-body'), style: M }, D ? q : L),
          ie = U && U.length ? r.createElement('ul', { className: ''.concat($, '-actions') }, b(U)) : null,
          oe = (0, l.Z)(J, ['onTabChange']),
          re = _ || h,
          ae = c()(
            $,
            ((a = {}),
            (0, i.Z)(a, ''.concat($, '-loading'), D),
            (0, i.Z)(a, ''.concat($, '-bordered'), R),
            (0, i.Z)(a, ''.concat($, '-hoverable'), H),
            (0, i.Z)(a, ''.concat($, '-contain-grid'), C()),
            (0, i.Z)(a, ''.concat($, '-contain-tabs'), Z && Z.length),
            (0, i.Z)(a, ''.concat($, '-').concat(re), re),
            (0, i.Z)(a, ''.concat($, '-type-').concat(T), !!T),
            (0, i.Z)(a, ''.concat($, '-rtl'), 'rtl' === f),
            a),
            B,
          )
        return r.createElement('div', (0, o.Z)({ ref: t }, oe, { className: ae }), A, te, ne, ie)
      })
      ;(y.Grid = d), (y.Meta = h)
      var C = y
    },
    78292: function (e, t, n) {
      'use strict'
      n(68849), n(63330), n(19597), n(72854), n(31053)
    },
    58194: function (e, t, n) {
      'use strict'
      var i = n(96162),
        o = n(11854),
        r = n(38787)
      function a() {
        var e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
          t = (0, i.useRef)({}),
          n = (0, o.Z)()
        return (
          (0, i.useEffect)(function () {
            var i = r.ZP.subscribe(function (i) {
              ;(t.current = i), e && n()
            })
            return function () {
              return r.ZP.unsubscribe(i)
            }
          }, []),
          t.current
        )
      }
      t['Z'] = a
    },
    86742: function (e, t, n) {
      'use strict'
      n.d(t, {
        Z: function () {
          return je
        },
      })
      var i = n(33673),
        o = n(96162),
        r = n(19344),
        a = n(574),
        c = n(22018),
        l = n(43141),
        s = n(3169),
        A = n.n(s),
        u = n(28815),
        d = n(4198),
        p = n(8772),
        f = n(49184),
        h = n(76317),
        m = n(55329),
        v = n(54794),
        g = n.n(v),
        w = n(66223)
      function E(e, t) {
        var n = 'cannot '.concat(e.method, ' ').concat(e.action, ' ').concat(t.status, "'"),
          i = new Error(n)
        return (i.status = t.status), (i.method = e.method), (i.url = e.action), i
      }
      function b(e) {
        var t = e.responseText || e.response
        if (!t) return t
        try {
          return JSON.parse(t)
        } catch (n) {
          return t
        }
      }
      function y(e) {
        var t = new XMLHttpRequest()
        e.onProgress &&
          t.upload &&
          (t.upload.onprogress = function (t) {
            t.total > 0 && (t.percent = (t.loaded / t.total) * 100), e.onProgress(t)
          })
        var n = new FormData()
        e.data &&
          Object.keys(e.data).forEach(function (t) {
            var i = e.data[t]
            Array.isArray(i)
              ? i.forEach(function (e) {
                  n.append(''.concat(t, '[]'), e)
                })
              : n.append(t, i)
          }),
          e.file instanceof Blob ? n.append(e.filename, e.file, e.file.name) : n.append(e.filename, e.file),
          (t.onerror = function (t) {
            e.onError(t)
          }),
          (t.onload = function () {
            return t.status < 200 || t.status >= 300 ? e.onError(E(e, t), b(t)) : e.onSuccess(b(t), t)
          }),
          t.open(e.method, e.action, !0),
          e.withCredentials && 'withCredentials' in t && (t.withCredentials = !0)
        var i = e.headers || {}
        return (
          null !== i['X-Requested-With'] && t.setRequestHeader('X-Requested-With', 'XMLHttpRequest'),
          Object.keys(i).forEach(function (e) {
            null !== i[e] && t.setRequestHeader(e, i[e])
          }),
          t.send(n),
          {
            abort: function () {
              t.abort()
            },
          }
        )
      }
      var C = +new Date(),
        x = 0
      function B() {
        return 'rc-upload-'.concat(C, '-').concat(++x)
      }
      var I = n(84603),
        k = function (e, t) {
          if (e && t) {
            var n = Array.isArray(t) ? t : t.split(','),
              i = e.name || '',
              o = e.type || '',
              r = o.replace(/\/.*$/, '')
            return n.some(function (e) {
              var t = e.trim()
              if (/^\*(\/\*)?$/.test(e)) return !0
              if ('.' === t.charAt(0)) {
                var n = i.toLowerCase(),
                  a = t.toLowerCase(),
                  c = [a]
                return (
                  ('.jpg' !== a && '.jpeg' !== a) || (c = ['.jpg', '.jpeg']),
                  c.some(function (e) {
                    return n.endsWith(e)
                  })
                )
              }
              return /\/\*$/.test(t)
                ? r === t.replace(/\/.*$/, '')
                : o === t || (!!/^\w+$/.test(t) && ((0, I.ZP)(!1, "Upload takes an invalidate 'accept' type '".concat(t, "'.Skip for check.")), !0))
            })
          }
          return !0
        }
      function Q(e, t) {
        var n = e.createReader(),
          i = []
        function o() {
          n.readEntries(function (e) {
            var n = Array.prototype.slice.apply(e)
            i = i.concat(n)
            var r = !n.length
            r ? t(i) : o()
          })
        }
        o()
      }
      var N = function (e, t, n) {
          var i = function e(i, o) {
            ;(i.path = o || ''),
              i.isFile
                ? i.file(function (e) {
                    n(e) &&
                      (i.fullPath &&
                        !e.webkitRelativePath &&
                        (Object.defineProperties(e, { webkitRelativePath: { writable: !0 } }),
                        (e.webkitRelativePath = i.fullPath.replace(/^\//, '')),
                        Object.defineProperties(e, { webkitRelativePath: { writable: !1 } })),
                      t([e]))
                  })
                : i.isDirectory &&
                  Q(i, function (t) {
                    t.forEach(function (t) {
                      e(t, ''.concat(o).concat(i.name, '/'))
                    })
                  })
          }
          e.forEach(function (e) {
            i(e.webkitGetAsEntry())
          })
        },
        M = N,
        S = [
          'component',
          'prefixCls',
          'className',
          'disabled',
          'id',
          'style',
          'multiple',
          'accept',
          'capture',
          'children',
          'directory',
          'openFileDialogOnClick',
          'onMouseEnter',
          'onMouseLeave',
        ],
        D = (function (e) {
          ;(0, p.Z)(n, e)
          var t = (0, f.Z)(n)
          function n() {
            var e
            ;(0, u.Z)(this, n)
            for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r]
            return (
              (e = t.call.apply(t, [this].concat(o))),
              (e.state = { uid: B() }),
              (e.reqs = {}),
              (e.fileInput = void 0),
              (e._isMounted = void 0),
              (e.onChange = function (t) {
                var n = e.props,
                  i = n.accept,
                  o = n.directory,
                  r = t.target.files,
                  a = (0, c.Z)(r).filter(function (e) {
                    return !o || k(e, i)
                  })
                e.uploadFiles(a), e.reset()
              }),
              (e.onClick = function (t) {
                var n = e.fileInput
                if (n) {
                  var i = e.props,
                    o = i.children,
                    r = i.onClick
                  if (o && 'button' === o.type) {
                    var a = n.parentNode
                    a.focus(), a.querySelector('button').blur()
                  }
                  n.click(), r && r(t)
                }
              }),
              (e.onKeyDown = function (t) {
                'Enter' === t.key && e.onClick(t)
              }),
              (e.onFileDrop = function (t) {
                var n = e.props.multiple
                if ((t.preventDefault(), 'dragover' !== t.type))
                  if (e.props.directory)
                    M(Array.prototype.slice.call(t.dataTransfer.items), e.uploadFiles, function (t) {
                      return k(t, e.props.accept)
                    })
                  else {
                    var i = (0, c.Z)(t.dataTransfer.files).filter(function (t) {
                      return k(t, e.props.accept)
                    })
                    !1 === n && (i = i.slice(0, 1)), e.uploadFiles(i)
                  }
              }),
              (e.uploadFiles = function (t) {
                var n = (0, c.Z)(t),
                  i = n.map(function (t) {
                    return (t.uid = B()), e.processFile(t, n)
                  })
                Promise.all(i).then(function (t) {
                  var n = e.props.onBatchStart
                  null === n ||
                    void 0 === n ||
                    n(
                      t.map(function (e) {
                        var t = e.origin,
                          n = e.parsedFile
                        return { file: t, parsedFile: n }
                      }),
                    ),
                    t
                      .filter(function (e) {
                        return null !== e.parsedFile
                      })
                      .forEach(function (t) {
                        e.post(t)
                      })
                })
              }),
              (e.processFile = (function () {
                var t = (0, m.Z)(
                  A().mark(function t(n, i) {
                    var o, r, c, l, s, u, d, p, f
                    return A().wrap(
                      function (t) {
                        while (1)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (((o = e.props.beforeUpload), (r = n), !o)) {
                                t.next = 14
                                break
                              }
                              return (t.prev = 3), (t.next = 6), o(n, i)
                            case 6:
                              ;(r = t.sent), (t.next = 12)
                              break
                            case 9:
                              ;(t.prev = 9), (t.t0 = t['catch'](3)), (r = !1)
                            case 12:
                              if (!1 !== r) {
                                t.next = 14
                                break
                              }
                              return t.abrupt('return', { origin: n, parsedFile: null, action: null, data: null })
                            case 14:
                              if (((c = e.props.action), 'function' !== typeof c)) {
                                t.next = 21
                                break
                              }
                              return (t.next = 18), c(n)
                            case 18:
                              ;(l = t.sent), (t.next = 22)
                              break
                            case 21:
                              l = c
                            case 22:
                              if (((s = e.props.data), 'function' !== typeof s)) {
                                t.next = 29
                                break
                              }
                              return (t.next = 26), s(n)
                            case 26:
                              ;(u = t.sent), (t.next = 30)
                              break
                            case 29:
                              u = s
                            case 30:
                              return (
                                (d = ('object' !== (0, a.Z)(r) && 'string' !== typeof r) || !r ? n : r),
                                (p = d instanceof File ? d : new File([d], n.name, { type: n.type })),
                                (f = p),
                                (f.uid = n.uid),
                                t.abrupt('return', { origin: n, data: u, parsedFile: f, action: l })
                              )
                            case 35:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      null,
                      [[3, 9]],
                    )
                  }),
                )
                return function (e, n) {
                  return t.apply(this, arguments)
                }
              })()),
              (e.saveFileInput = function (t) {
                e.fileInput = t
              }),
              e
            )
          }
          return (
            (0, d.Z)(n, [
              {
                key: 'componentDidMount',
                value: function () {
                  this._isMounted = !0
                },
              },
              {
                key: 'componentWillUnmount',
                value: function () {
                  ;(this._isMounted = !1), this.abort()
                },
              },
              {
                key: 'post',
                value: function (e) {
                  var t = this,
                    n = e.data,
                    i = e.origin,
                    o = e.action,
                    r = e.parsedFile
                  if (this._isMounted) {
                    var a = this.props,
                      c = a.onStart,
                      l = a.customRequest,
                      s = a.name,
                      A = a.headers,
                      u = a.withCredentials,
                      d = a.method,
                      p = i.uid,
                      f = l || y,
                      h = {
                        action: o,
                        filename: s,
                        data: n,
                        file: r,
                        headers: A,
                        withCredentials: u,
                        method: d || 'post',
                        onProgress: function (e) {
                          var n = t.props.onProgress
                          null === n || void 0 === n || n(e, r)
                        },
                        onSuccess: function (e, n) {
                          var i = t.props.onSuccess
                          null === i || void 0 === i || i(e, r, n), delete t.reqs[p]
                        },
                        onError: function (e, n) {
                          var i = t.props.onError
                          null === i || void 0 === i || i(e, n, r), delete t.reqs[p]
                        },
                      }
                    c(i), (this.reqs[p] = f(h))
                  }
                },
              },
              {
                key: 'reset',
                value: function () {
                  this.setState({ uid: B() })
                },
              },
              {
                key: 'abort',
                value: function (e) {
                  var t = this.reqs
                  if (e) {
                    var n = e.uid ? e.uid : e
                    t[n] && t[n].abort && t[n].abort(), delete t[n]
                  } else
                    Object.keys(t).forEach(function (e) {
                      t[e] && t[e].abort && t[e].abort(), delete t[e]
                    })
                },
              },
              {
                key: 'render',
                value: function () {
                  var e,
                    t = this.props,
                    n = t.component,
                    a = t.prefixCls,
                    c = t.className,
                    l = t.disabled,
                    s = t.id,
                    A = t.style,
                    u = t.multiple,
                    d = t.accept,
                    p = t.capture,
                    f = t.children,
                    m = t.directory,
                    v = t.openFileDialogOnClick,
                    E = t.onMouseEnter,
                    b = t.onMouseLeave,
                    y = (0, h.Z)(t, S),
                    C = g()(((e = {}), (0, r.Z)(e, a, !0), (0, r.Z)(e, ''.concat(a, '-disabled'), l), (0, r.Z)(e, c, c), e)),
                    x = m ? { directory: 'directory', webkitdirectory: 'webkitdirectory' } : {},
                    B = l
                      ? {}
                      : {
                          onClick: v ? this.onClick : function () {},
                          onKeyDown: v ? this.onKeyDown : function () {},
                          onMouseEnter: E,
                          onMouseLeave: b,
                          onDrop: this.onFileDrop,
                          onDragOver: this.onFileDrop,
                          tabIndex: '0',
                        }
                  return o.createElement(
                    n,
                    (0, i.Z)({}, B, { className: C, role: 'button', style: A }),
                    o.createElement(
                      'input',
                      (0, i.Z)(
                        {},
                        (0, w.Z)(y, { aria: !0, data: !0 }),
                        {
                          id: s,
                          type: 'file',
                          ref: this.saveFileInput,
                          onClick: function (e) {
                            return e.stopPropagation()
                          },
                          key: this.state.uid,
                          style: { display: 'none' },
                          accept: d,
                        },
                        x,
                        { multiple: u, onChange: this.onChange },
                        null != p ? { capture: p } : {},
                      ),
                    ),
                    f,
                  )
                },
              },
            ]),
            n
          )
        })(o.Component),
        F = D
      function R() {}
      var _ = (function (e) {
        ;(0, p.Z)(n, e)
        var t = (0, f.Z)(n)
        function n() {
          var e
          ;(0, u.Z)(this, n)
          for (var i = arguments.length, o = new Array(i), r = 0; r < i; r++) o[r] = arguments[r]
          return (
            (e = t.call.apply(t, [this].concat(o))),
            (e.uploader = void 0),
            (e.saveUploader = function (t) {
              e.uploader = t
            }),
            e
          )
        }
        return (
          (0, d.Z)(n, [
            {
              key: 'abort',
              value: function (e) {
                this.uploader.abort(e)
              },
            },
            {
              key: 'render',
              value: function () {
                return o.createElement(F, (0, i.Z)({}, this.props, { ref: this.saveUploader }))
              },
            },
          ]),
          n
        )
      })(o.Component)
      _.defaultProps = {
        component: 'span',
        prefixCls: 'rc-upload',
        data: {},
        headers: {},
        name: 'file',
        multipart: !1,
        onStart: R,
        onError: R,
        onSuccess: R,
        multiple: !1,
        beforeUpload: null,
        customRequest: null,
        withCredentials: !1,
        openFileDialogOnClick: !0,
      }
      var T = _,
        P = T,
        U = n(45016),
        Z = n(68585),
        L = n(8227),
        j = n(42151),
        O = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M779.3 196.6c-94.2-94.2-247.6-94.2-341.7 0l-261 260.8c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l261-260.8c32.4-32.4 75.5-50.2 121.3-50.2s88.9 17.8 121.2 50.2c32.4 32.4 50.2 75.5 50.2 121.2 0 45.8-17.8 88.8-50.2 121.2l-266 265.9-43.1 43.1c-40.3 40.3-105.8 40.3-146.1 0-19.5-19.5-30.2-45.4-30.2-73s10.7-53.5 30.2-73l263.9-263.8c6.7-6.6 15.5-10.3 24.9-10.3h.1c9.4 0 18.1 3.7 24.7 10.3 6.7 6.7 10.3 15.5 10.3 24.9 0 9.3-3.7 18.1-10.3 24.7L372.4 653c-1.7 1.7-2.6 4-2.6 6.4s.9 4.7 2.6 6.4l36.9 36.9a9 9 0 0012.7 0l215.6-215.6c19.9-19.9 30.8-46.3 30.8-74.4s-11-54.6-30.8-74.4c-41.1-41.1-107.9-41-149 0L463 364 224.8 602.1A172.22 172.22 0 00174 724.8c0 46.3 18.1 89.8 50.8 122.5 33.9 33.8 78.3 50.7 122.7 50.7 44.4 0 88.8-16.9 122.6-50.7l309.2-309C824.8 492.7 850 432 850 367.5c.1-64.6-25.1-125.3-70.7-170.9z',
                },
              },
            ],
          },
          name: 'paper-clip',
          theme: 'outlined',
        },
        Y = O,
        H = n(23986),
        z = function (e, t) {
          return o.createElement(H.Z, (0, j.Z)((0, j.Z)({}, e), {}, { ref: t, icon: Y }))
        }
      z.displayName = 'PaperClipOutlined'
      var G = o.forwardRef(z),
        J = {
          icon: function (e, t) {
            return {
              tag: 'svg',
              attrs: { viewBox: '64 64 896 896', focusable: 'false' },
              children: [
                {
                  tag: 'path',
                  attrs: {
                    d: 'M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 632H136v-39.9l138.5-164.3 150.1 178L658.1 489 888 761.6V792zm0-129.8L664.2 396.8c-3.2-3.8-9-3.8-12.2 0L424.6 666.4l-144-170.7c-3.2-3.8-9-3.8-12.2 0L136 652.7V232h752v430.2z',
                    fill: e,
                  },
                },
                { tag: 'path', attrs: { d: 'M424.6 765.8l-150.1-178L136 752.1V792h752v-30.4L658.1 489z', fill: t } },
                {
                  tag: 'path',
                  attrs: {
                    d: 'M136 652.7l132.4-157c3.2-3.8 9-3.8 12.2 0l144 170.7L652 396.8c3.2-3.8 9-3.8 12.2 0L888 662.2V232H136v420.7zM304 280a88 88 0 110 176 88 88 0 010-176z',
                    fill: t,
                  },
                },
                { tag: 'path', attrs: { d: 'M276 368a28 28 0 1056 0 28 28 0 10-56 0z', fill: t } },
                {
                  tag: 'path',
                  attrs: {
                    d: 'M304 456a88 88 0 100-176 88 88 0 000 176zm0-116c15.5 0 28 12.5 28 28s-12.5 28-28 28-28-12.5-28-28 12.5-28 28-28z',
                    fill: e,
                  },
                },
              ],
            }
          },
          name: 'picture',
          theme: 'twotone',
        },
        $ = J,
        V = function (e, t) {
          return o.createElement(H.Z, (0, j.Z)((0, j.Z)({}, e), {}, { ref: t, icon: $ }))
        }
      V.displayName = 'PictureTwoTone'
      var K = o.forwardRef(V),
        q = {
          icon: function (e, t) {
            return {
              tag: 'svg',
              attrs: { viewBox: '64 64 896 896', focusable: 'false' },
              children: [
                { tag: 'path', attrs: { d: 'M534 352V136H232v752h560V394H576a42 42 0 01-42-42z', fill: t } },
                {
                  tag: 'path',
                  attrs: {
                    d: 'M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM602 137.8L790.2 326H602V137.8zM792 888H232V136h302v216a42 42 0 0042 42h216v494z',
                    fill: e,
                  },
                },
              ],
            }
          },
          name: 'file',
          theme: 'twotone',
        },
        X = q,
        W = function (e, t) {
          return o.createElement(H.Z, (0, j.Z)((0, j.Z)({}, e), {}, { ref: t, icon: X }))
        }
      W.displayName = 'FileTwoTone'
      var ee = o.forwardRef(W),
        te = n(8135)
      function ne(e) {
        return (0, i.Z)((0, i.Z)({}, e), {
          lastModified: e.lastModified,
          lastModifiedDate: e.lastModifiedDate,
          name: e.name,
          size: e.size,
          type: e.type,
          uid: e.uid,
          percent: 0,
          originFileObj: e,
        })
      }
      function ie(e, t) {
        var n = (0, c.Z)(t),
          i = n.findIndex(function (t) {
            var n = t.uid
            return n === e.uid
          })
        return -1 === i ? n.push(e) : (n[i] = e), n
      }
      function oe(e, t) {
        var n = void 0 !== e.uid ? 'uid' : 'name'
        return t.filter(function (t) {
          return t[n] === e[n]
        })[0]
      }
      function re(e, t) {
        var n = void 0 !== e.uid ? 'uid' : 'name',
          i = t.filter(function (t) {
            return t[n] !== e[n]
          })
        return i.length === t.length ? null : i
      }
      var ae = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            t = e.split('/'),
            n = t[t.length - 1],
            i = n.split(/#|\?/)[0]
          return (/\.[^./\\]*$/.exec(i) || [''])[0]
        },
        ce = function (e) {
          return 0 === e.indexOf('image/')
        },
        le = function (e) {
          if (e.type && !e.thumbUrl) return ce(e.type)
          var t = e.thumbUrl || e.url || '',
            n = ae(t)
          return !(!/^data:image\//.test(t) && !/(webp|svg|png|gif|jpg|jpeg|jfif|bmp|dpg|ico)$/i.test(n)) || (!/^data:/.test(t) && !n)
        },
        se = 200
      function Ae(e) {
        return new Promise(function (t) {
          if (e.type && ce(e.type)) {
            var n = document.createElement('canvas')
            ;(n.width = se),
              (n.height = se),
              (n.style.cssText = 'position: fixed; left: 0; top: 0; width: '
                .concat(se, 'px; height: ')
                .concat(se, 'px; z-index: 9999; display: none;')),
              document.body.appendChild(n)
            var i = n.getContext('2d'),
              o = new Image()
            ;(o.onload = function () {
              var e = o.width,
                r = o.height,
                a = se,
                c = se,
                l = 0,
                s = 0
              e > r ? ((c = r * (se / e)), (s = -(c - a) / 2)) : ((a = e * (se / r)), (l = -(a - c) / 2)), i.drawImage(o, l, s, a, c)
              var A = n.toDataURL()
              document.body.removeChild(n), t(A)
            }),
              (o.src = window.URL.createObjectURL(e))
          } else t('')
        })
      }
      var ue = n(44485),
        de = n(62572),
        pe = n(75182),
        fe = n(11854),
        he = n(44334),
        me = n(52767),
        ve = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M505.7 661a8 8 0 0012.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z',
                },
              },
            ],
          },
          name: 'download',
          theme: 'outlined',
        },
        ge = ve,
        we = function (e, t) {
          return o.createElement(H.Z, (0, j.Z)((0, j.Z)({}, e), {}, { ref: t, icon: ge }))
        }
      we.displayName = 'DownloadOutlined'
      var Ee = o.forwardRef(we),
        be = n(91468),
        ye = n(21252),
        Ce = o.forwardRef(function (e, t) {
          var n,
            a,
            c,
            s = e.prefixCls,
            A = e.className,
            u = e.style,
            d = e.locale,
            p = e.listType,
            f = e.file,
            h = e.items,
            m = e.progress,
            v = e.iconRender,
            w = e.actionIconRender,
            E = e.itemRender,
            b = e.isImgUrl,
            y = e.showPreviewIcon,
            C = e.showRemoveIcon,
            x = e.showDownloadIcon,
            B = e.previewIcon,
            I = e.removeIcon,
            k = e.downloadIcon,
            Q = e.onPreview,
            N = e.onDownload,
            M = e.onClose,
            S = o.useState(!1),
            D = (0, l.Z)(S, 2),
            F = D[0],
            R = D[1],
            _ = o.useRef()
          o.useEffect(function () {
            return (
              (_.current = setTimeout(function () {
                R(!0)
              }, 300)),
              function () {
                window.clearTimeout(_.current)
              }
            )
          }, [])
          var T = ''.concat(s, '-span'),
            P = v(f),
            U = o.createElement('div', { className: ''.concat(s, '-text-icon') }, P)
          if ('picture' === p || 'picture-card' === p)
            if ('uploading' === f.status || (!f.thumbUrl && !f.url)) {
              var L,
                j = g()(
                  ((L = {}),
                  (0, r.Z)(L, ''.concat(s, '-list-item-thumbnail'), !0),
                  (0, r.Z)(L, ''.concat(s, '-list-item-file'), 'uploading' !== f.status),
                  L),
                )
              U = o.createElement('div', { className: j }, P)
            } else {
              var O,
                Y = (null === b || void 0 === b ? void 0 : b(f))
                  ? o.createElement('img', {
                      src: f.thumbUrl || f.url,
                      alt: f.name,
                      className: ''.concat(s, '-list-item-image'),
                      crossOrigin: f.crossOrigin,
                    })
                  : P,
                H = g()(
                  ((O = {}), (0, r.Z)(O, ''.concat(s, '-list-item-thumbnail'), !0), (0, r.Z)(O, ''.concat(s, '-list-item-file'), b && !b(f)), O),
                )
              U = o.createElement(
                'a',
                {
                  className: H,
                  onClick: function (e) {
                    return Q(f, e)
                  },
                  href: f.url || f.thumbUrl,
                  target: '_blank',
                  rel: 'noopener noreferrer',
                },
                Y,
              )
            }
          var z,
            G = g()(
              ((n = {}),
              (0, r.Z)(n, ''.concat(s, '-list-item'), !0),
              (0, r.Z)(n, ''.concat(s, '-list-item-').concat(f.status), !0),
              (0, r.Z)(n, ''.concat(s, '-list-item-list-type-').concat(p), !0),
              n),
            ),
            J = 'string' === typeof f.linkProps ? JSON.parse(f.linkProps) : f.linkProps,
            $ = C
              ? w(
                  ('function' === typeof I ? I(f) : I) || o.createElement(me.Z, null),
                  function () {
                    return M(f)
                  },
                  s,
                  d.removeFile,
                )
              : null,
            V =
              x && 'done' === f.status
                ? w(
                    ('function' === typeof k ? k(f) : k) || o.createElement(Ee, null),
                    function () {
                      return N(f)
                    },
                    s,
                    d.downloadFile,
                  )
                : null,
            K =
              'picture-card' !== p &&
              o.createElement(
                'span',
                { key: 'download-delete', className: g()(''.concat(s, '-list-item-card-actions'), { picture: 'picture' === p }) },
                V,
                $,
              ),
            q = g()(''.concat(s, '-list-item-name')),
            X = f.url
              ? [
                  o.createElement(
                    'a',
                    (0, i.Z)({ key: 'view', target: '_blank', rel: 'noopener noreferrer', className: q, title: f.name }, J, {
                      href: f.url,
                      onClick: function (e) {
                        return Q(f, e)
                      },
                    }),
                    f.name,
                  ),
                  K,
                ]
              : [
                  o.createElement(
                    'span',
                    {
                      key: 'view',
                      className: q,
                      onClick: function (e) {
                        return Q(f, e)
                      },
                      title: f.name,
                    },
                    f.name,
                  ),
                  K,
                ],
            W = { pointerEvents: 'none', opacity: 0.5 },
            ee = y
              ? o.createElement(
                  'a',
                  {
                    href: f.url || f.thumbUrl,
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    style: f.url || f.thumbUrl ? void 0 : W,
                    onClick: function (e) {
                      return Q(f, e)
                    },
                    title: d.previewFile,
                  },
                  'function' === typeof B ? B(f) : B || o.createElement(he.Z, null),
                )
              : null,
            te =
              'picture-card' === p &&
              'uploading' !== f.status &&
              o.createElement('span', { className: ''.concat(s, '-list-item-actions') }, ee, 'done' === f.status && V, $)
          z =
            f.response && 'string' === typeof f.response
              ? f.response
              : (null === (a = f.error) || void 0 === a ? void 0 : a.statusText) ||
                (null === (c = f.error) || void 0 === c ? void 0 : c.message) ||
                d.uploadError
          var ne = o.createElement('span', { className: T }, U, X),
            ie = o.useContext(de.E_),
            oe = ie.getPrefixCls,
            re = oe(),
            ae = o.createElement(
              'div',
              { className: G },
              o.createElement('div', { className: ''.concat(s, '-list-item-info') }, ne),
              te,
              F &&
                o.createElement(Z.Z, { motionName: ''.concat(re, '-fade'), visible: 'uploading' === f.status, motionDeadline: 2e3 }, function (e) {
                  var t = e.className,
                    n = 'percent' in f ? o.createElement(ye.Z, (0, i.Z)({}, m, { type: 'line', percent: f.percent })) : null
                  return o.createElement('div', { className: g()(''.concat(s, '-list-item-progress'), t) }, n)
                }),
            ),
            ce = g()(''.concat(s, '-list-').concat(p, '-container'), A),
            le =
              'error' === f.status
                ? o.createElement(
                    be.Z,
                    {
                      title: z,
                      getPopupContainer: function (e) {
                        return e.parentNode
                      },
                    },
                    ae,
                  )
                : ae
          return o.createElement(
            'div',
            { className: ce, style: u, ref: t },
            E ? E(le, f, h, { download: N.bind(null, f), preview: Q.bind(null, f), remove: M.bind(null, f) }) : le,
          )
        }),
        xe = Ce,
        Be = (0, i.Z)({}, ue.ZP)
      delete Be.onAppearEnd, delete Be.onEnterEnd, delete Be.onLeaveEnd
      var Ie = function (e, t) {
          var n,
            a = e.listType,
            s = e.previewFile,
            A = e.onPreview,
            u = e.onDownload,
            d = e.onRemove,
            p = e.locale,
            f = e.iconRender,
            h = e.isImageUrl,
            m = e.prefixCls,
            v = e.items,
            w = void 0 === v ? [] : v,
            E = e.showPreviewIcon,
            b = e.showRemoveIcon,
            y = e.showDownloadIcon,
            C = e.removeIcon,
            x = e.previewIcon,
            B = e.downloadIcon,
            I = e.progress,
            k = e.appendAction,
            Q = e.appendActionVisible,
            N = e.itemRender,
            M = (0, fe.Z)(),
            S = o.useState(!1),
            D = (0, l.Z)(S, 2),
            F = D[0],
            R = D[1]
          o.useEffect(
            function () {
              ;('picture' !== a && 'picture-card' !== a) ||
                (w || []).forEach(function (e) {
                  'undefined' !== typeof document &&
                    'undefined' !== typeof window &&
                    window.FileReader &&
                    window.File &&
                    (e.originFileObj instanceof File || e.originFileObj instanceof Blob) &&
                    void 0 === e.thumbUrl &&
                    ((e.thumbUrl = ''),
                    s &&
                      s(e.originFileObj).then(function (t) {
                        ;(e.thumbUrl = t || ''), M()
                      }))
                })
            },
            [a, w, s],
          ),
            o.useEffect(function () {
              R(!0)
            }, [])
          var _ = function (e, t) {
              if (A) return null === t || void 0 === t || t.preventDefault(), A(e)
            },
            T = function (e) {
              'function' === typeof u ? u(e) : e.url && window.open(e.url)
            },
            P = function (e) {
              null === d || void 0 === d || d(e)
            },
            U = function (e) {
              if (f) return f(e, a)
              var t = 'uploading' === e.status,
                n = h && h(e) ? o.createElement(K, null) : o.createElement(ee, null),
                i = t ? o.createElement(L.Z, null) : o.createElement(G, null)
              return 'picture' === a ? (i = t ? o.createElement(L.Z, null) : n) : 'picture-card' === a && (i = t ? p.uploading : n), i
            },
            j = function (e, t, n, r) {
              var a = {
                type: 'text',
                size: 'small',
                title: r,
                onClick: function (n) {
                  t(), (0, te.l$)(e) && e.props.onClick && e.props.onClick(n)
                },
                className: ''.concat(n, '-list-item-card-actions-btn'),
              }
              if ((0, te.l$)(e)) {
                var c = (0, te.Tm)(e, (0, i.Z)((0, i.Z)({}, e.props), { onClick: function () {} }))
                return o.createElement(pe.Z, (0, i.Z)({}, a, { icon: c }))
              }
              return o.createElement(pe.Z, a, o.createElement('span', null, e))
            }
          o.useImperativeHandle(t, function () {
            return { handlePreview: _, handleDownload: T }
          })
          var O = o.useContext(de.E_),
            Y = O.getPrefixCls,
            H = O.direction,
            z = Y('upload', m),
            J = g()(
              ((n = {}),
              (0, r.Z)(n, ''.concat(z, '-list'), !0),
              (0, r.Z)(n, ''.concat(z, '-list-').concat(a), !0),
              (0, r.Z)(n, ''.concat(z, '-list-rtl'), 'rtl' === H),
              n),
            ),
            $ = (0, c.Z)(
              w.map(function (e) {
                return { key: e.uid, file: e }
              }),
            ),
            V = 'picture-card' === a ? 'animate-inline' : 'animate',
            q = { motionDeadline: 2e3, motionName: ''.concat(z, '-').concat(V), keys: $, motionAppear: F }
          return (
            'picture-card' !== a && (q = (0, i.Z)((0, i.Z)({}, Be), q)),
            o.createElement(
              'div',
              { className: J },
              o.createElement(Z.V, (0, i.Z)({}, q, { component: !1 }), function (e) {
                var t = e.key,
                  n = e.file,
                  i = e.className,
                  r = e.style
                return o.createElement(xe, {
                  key: t,
                  locale: p,
                  prefixCls: z,
                  className: i,
                  style: r,
                  file: n,
                  items: w,
                  progress: I,
                  listType: a,
                  isImgUrl: h,
                  showPreviewIcon: E,
                  showRemoveIcon: b,
                  showDownloadIcon: y,
                  removeIcon: C,
                  previewIcon: x,
                  downloadIcon: B,
                  iconRender: U,
                  actionIconRender: j,
                  itemRender: N,
                  onPreview: _,
                  onDownload: T,
                  onClose: P,
                })
              }),
              k &&
                o.createElement(Z.Z, (0, i.Z)({}, q, { visible: Q, forceRender: !0 }), function (e) {
                  var t = e.className,
                    n = e.style
                  return (0, te.Tm)(k, function (e) {
                    return {
                      className: g()(e.className, t),
                      style: (0, i.Z)((0, i.Z)((0, i.Z)({}, n), { pointerEvents: t ? 'none' : void 0 }), e.style),
                    }
                  })
                }),
            )
          )
        },
        ke = o.forwardRef(Ie)
      ;(ke.displayName = 'UploadList'),
        (ke.defaultProps = {
          listType: 'text',
          progress: { strokeWidth: 2, showInfo: !1 },
          showRemoveIcon: !0,
          showDownloadIcon: !1,
          showPreviewIcon: !0,
          appendActionVisible: !0,
          previewFile: Ae,
          isImageUrl: le,
        })
      var Qe = ke,
        Ne = n(36658),
        Me = n(92280),
        Se = function (e, t, n, i) {
          function o(e) {
            return e instanceof n
              ? e
              : new n(function (t) {
                  t(e)
                })
          }
          return new (n || (n = Promise))(function (n, r) {
            function a(e) {
              try {
                l(i.next(e))
              } catch (t) {
                r(t)
              }
            }
            function c(e) {
              try {
                l(i['throw'](e))
              } catch (t) {
                r(t)
              }
            }
            function l(e) {
              e.done ? n(e.value) : o(e.value).then(a, c)
            }
            l((i = i.apply(e, t || [])).next())
          })
        },
        De = '__LIST_IGNORE_'.concat(Date.now(), '__'),
        Fe = function (e, t) {
          var n,
            s = e.fileList,
            u = e.defaultFileList,
            d = e.onRemove,
            p = e.showUploadList,
            f = e.listType,
            h = e.onPreview,
            m = e.onDownload,
            v = e.onChange,
            w = e.onDrop,
            E = e.previewFile,
            b = e.disabled,
            y = e.locale,
            C = e.iconRender,
            x = e.isImageUrl,
            B = e.progress,
            I = e.prefixCls,
            k = e.className,
            Q = e.type,
            N = e.children,
            M = e.style,
            S = e.itemRender,
            D = e.maxCount,
            F = (0, U.Z)(u || [], {
              value: s,
              postState: function (e) {
                return null !== e && void 0 !== e ? e : []
              },
            }),
            R = (0, l.Z)(F, 2),
            _ = R[0],
            T = R[1],
            Z = o.useState('drop'),
            L = (0, l.Z)(Z, 2),
            j = L[0],
            O = L[1],
            Y = o.useRef()
          o.useMemo(
            function () {
              var e = Date.now()
              ;(s || []).forEach(function (t, n) {
                t.uid || Object.isFrozen(t) || (t.uid = '__AUTO__'.concat(e, '_').concat(n, '__'))
              })
            },
            [s],
          )
          var H = function (e, t, n) {
              var i = (0, c.Z)(t)
              1 === D ? (i = i.slice(-1)) : D && (i = i.slice(0, D)), T(i)
              var o = { file: e, fileList: i }
              n && (o.event = n), null === v || void 0 === v || v(o)
            },
            z = function (t, n) {
              return Se(
                void 0,
                void 0,
                void 0,
                A().mark(function i() {
                  var o, r, c, l
                  return A().wrap(function (i) {
                    while (1)
                      switch ((i.prev = i.next)) {
                        case 0:
                          if (((o = e.beforeUpload), (r = e.transformFile), (c = t), !o)) {
                            i.next = 13
                            break
                          }
                          return (i.next = 5), o(t, n)
                        case 5:
                          if (((l = i.sent), !1 !== l)) {
                            i.next = 8
                            break
                          }
                          return i.abrupt('return', !1)
                        case 8:
                          if ((delete t[De], l !== De)) {
                            i.next = 12
                            break
                          }
                          return Object.defineProperty(t, De, { value: !0, configurable: !0 }), i.abrupt('return', !1)
                        case 12:
                          'object' === (0, a.Z)(l) && l && (c = l)
                        case 13:
                          if (!r) {
                            i.next = 17
                            break
                          }
                          return (i.next = 16), r(c)
                        case 16:
                          c = i.sent
                        case 17:
                          return i.abrupt('return', c)
                        case 18:
                        case 'end':
                          return i.stop()
                      }
                  }, i)
                }),
              )
            },
            G = function (e) {
              var t = e.filter(function (e) {
                return !e.file[De]
              })
              if (t.length) {
                var n = t.map(function (e) {
                    return ne(e.file)
                  }),
                  i = (0, c.Z)(_)
                n.forEach(function (e) {
                  i = ie(e, i)
                }),
                  n.forEach(function (e, n) {
                    var o = e
                    if (t[n].parsedFile) e.status = 'uploading'
                    else {
                      var r,
                        a = e.originFileObj
                      try {
                        r = new File([a], a.name, { type: a.type })
                      } catch (c) {
                        ;(r = new Blob([a], { type: a.type })),
                          (r.name = a.name),
                          (r.lastModifiedDate = new Date()),
                          (r.lastModified = new Date().getTime())
                      }
                      ;(r.uid = e.uid), (o = r)
                    }
                    H(o, i)
                  })
              }
            },
            J = function (e, t, n) {
              try {
                'string' === typeof e && (e = JSON.parse(e))
              } catch (r) {}
              if (oe(t, _)) {
                var i = ne(t)
                ;(i.status = 'done'), (i.percent = 100), (i.response = e), (i.xhr = n)
                var o = ie(i, _)
                H(i, o)
              }
            },
            $ = function (e, t) {
              if (oe(t, _)) {
                var n = ne(t)
                ;(n.status = 'uploading'), (n.percent = e.percent)
                var i = ie(n, _)
                H(n, i, e)
              }
            },
            V = function (e, t, n) {
              if (oe(n, _)) {
                var i = ne(n)
                ;(i.error = e), (i.response = t), (i.status = 'error')
                var o = ie(i, _)
                H(i, o)
              }
            },
            K = function (e) {
              var t
              Promise.resolve('function' === typeof d ? d(e) : d).then(function (n) {
                var o
                if (!1 !== n) {
                  var r = re(e, _)
                  r &&
                    ((t = (0, i.Z)((0, i.Z)({}, e), { status: 'removed' })),
                    null === _ ||
                      void 0 === _ ||
                      _.forEach(function (e) {
                        var n = void 0 !== t.uid ? 'uid' : 'name'
                        e[n] !== t[n] || Object.isFrozen(e) || (e.status = 'removed')
                      }),
                    null === (o = Y.current) || void 0 === o || o.abort(t),
                    H(t, r))
                }
              })
            },
            q = function (e) {
              O(e.type), 'drop' === e.type && (null === w || void 0 === w || w(e))
            }
          o.useImperativeHandle(t, function () {
            return { onBatchStart: G, onSuccess: J, onProgress: $, onError: V, fileList: _, upload: Y.current }
          })
          var X = o.useContext(de.E_),
            W = X.getPrefixCls,
            ee = X.direction,
            te = W('upload', I),
            ae = (0, i.Z)((0, i.Z)({ onBatchStart: G, onError: V, onProgress: $, onSuccess: J }, e), {
              prefixCls: te,
              beforeUpload: z,
              onChange: void 0,
            })
          delete ae.className, delete ae.style, (N && !b) || delete ae.id
          var ce = function (e, t) {
            return p
              ? o.createElement(Ne.Z, { componentName: 'Upload', defaultLocale: Me.Z.Upload }, function (n) {
                  var r = 'boolean' === typeof p ? {} : p,
                    a = r.showRemoveIcon,
                    c = r.showPreviewIcon,
                    l = r.showDownloadIcon,
                    s = r.removeIcon,
                    A = r.previewIcon,
                    u = r.downloadIcon
                  return o.createElement(Qe, {
                    prefixCls: te,
                    listType: f,
                    items: _,
                    previewFile: E,
                    onPreview: h,
                    onDownload: m,
                    onRemove: K,
                    showRemoveIcon: !b && a,
                    showPreviewIcon: c,
                    showDownloadIcon: l,
                    removeIcon: s,
                    previewIcon: A,
                    downloadIcon: u,
                    iconRender: C,
                    locale: (0, i.Z)((0, i.Z)({}, n), y),
                    isImageUrl: x,
                    progress: B,
                    appendAction: e,
                    appendActionVisible: t,
                    itemRender: S,
                  })
                })
              : e
          }
          if ('drag' === Q) {
            var le,
              se = g()(
                te,
                ((le = {}),
                (0, r.Z)(le, ''.concat(te, '-drag'), !0),
                (0, r.Z)(
                  le,
                  ''.concat(te, '-drag-uploading'),
                  _.some(function (e) {
                    return 'uploading' === e.status
                  }),
                ),
                (0, r.Z)(le, ''.concat(te, '-drag-hover'), 'dragover' === j),
                (0, r.Z)(le, ''.concat(te, '-disabled'), b),
                (0, r.Z)(le, ''.concat(te, '-rtl'), 'rtl' === ee),
                le),
                k,
              )
            return o.createElement(
              'span',
              null,
              o.createElement(
                'div',
                { className: se, onDrop: q, onDragOver: q, onDragLeave: q, style: M },
                o.createElement(
                  P,
                  (0, i.Z)({}, ae, { ref: Y, className: ''.concat(te, '-btn') }),
                  o.createElement('div', { className: ''.concat(te, '-drag-container') }, N),
                ),
              ),
              ce(),
            )
          }
          var Ae = g()(
              te,
              ((n = {}),
              (0, r.Z)(n, ''.concat(te, '-select'), !0),
              (0, r.Z)(n, ''.concat(te, '-select-').concat(f), !0),
              (0, r.Z)(n, ''.concat(te, '-disabled'), b),
              (0, r.Z)(n, ''.concat(te, '-rtl'), 'rtl' === ee),
              n),
            ),
            ue = function (e) {
              return o.createElement('div', { className: Ae, style: e }, o.createElement(P, (0, i.Z)({}, ae, { ref: Y })))
            }
          return 'picture-card' === f
            ? o.createElement('span', { className: g()(''.concat(te, '-picture-card-wrapper'), k) }, ce(ue(), !!N))
            : o.createElement('span', { className: k }, ue(N ? void 0 : { display: 'none' }), ce())
        },
        Re = o.forwardRef(Fe)
      ;(Re.displayName = 'Upload'),
        (Re.defaultProps = {
          type: 'select',
          multiple: !1,
          action: '',
          data: {},
          accept: '',
          showUploadList: !0,
          listType: 'text',
          className: '',
          disabled: !1,
          supportServerRender: !0,
        })
      var _e = Re,
        Te = function (e, t) {
          var n = {}
          for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && t.indexOf(i) < 0 && (n[i] = e[i])
          if (null != e && 'function' === typeof Object.getOwnPropertySymbols) {
            var o = 0
            for (i = Object.getOwnPropertySymbols(e); o < i.length; o++)
              t.indexOf(i[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, i[o]) && (n[i[o]] = e[i[o]])
          }
          return n
        },
        Pe = function (e, t) {
          var n = e.style,
            r = e.height,
            a = Te(e, ['style', 'height'])
          return o.createElement(_e, (0, i.Z)({ ref: t }, a, { type: 'drag', style: (0, i.Z)((0, i.Z)({}, n), { height: r }) }))
        },
        Ue = o.forwardRef(Pe)
      Ue.displayName = 'Dragger'
      var Ze = Ue,
        Le = _e
      ;(Le.Dragger = Ze), (Le.LIST_IGNORE = De)
      var je = Le
    },
    65028: function (e, t, n) {
      'use strict'
      n(68849), n(57230), n(48897), n(10720), n(47070)
    },
    59051: function (e) {
      ;(function (t, n) {
        e.exports = n()
      })(0, function () {
        'use strict'
        var e = function () {
          'function' != typeof Object.assign &&
            (Object.assign = function (e, t) {
              if (null == e) throw new TypeError('Cannot convert undefined or null to object')
              for (var n = Object(e), i = 1; i < arguments.length; i++) {
                var o = arguments[i]
                if (null != o) for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (n[r] = o[r])
              }
              return n
            }),
            Element.prototype.matches ||
              (Element.prototype.matches =
                Element.prototype.matchesSelector ||
                Element.prototype.mozMatchesSelector ||
                Element.prototype.msMatchesSelector ||
                Element.prototype.oMatchesSelector ||
                Element.prototype.webkitMatchesSelector ||
                function (e) {
                  var t = (this.document || this.ownerDocument).querySelectorAll(e),
                    n = t.length
                  while (--n >= 0 && t.item(n) !== this);
                  return n > -1
                })
        }
        function t(e) {
          var t = void 0
          return (t = document.createElement('div')), (t.innerHTML = e), t.children
        }
        function n(e) {
          return !!e && (e instanceof HTMLCollection || e instanceof NodeList)
        }
        function i(e) {
          var t = document.querySelectorAll(e)
          return n(t) ? t : [t]
        }
        var o = []
        function r(e) {
          if (e) {
            if (e instanceof r) return e
            this.selector = e
            var o = e.nodeType,
              a = []
            9 === o || 1 === o
              ? (a = [e])
              : n(e) || e instanceof Array
              ? (a = e)
              : 'string' === typeof e && ((e = e.replace('/\n/mg', '').trim()), (a = 0 === e.indexOf('<') ? t(e) : i(e)))
            var c = a.length
            if (!c) return this
            var l = void 0
            for (l = 0; l < c; l++) this[l] = a[l]
            this.length = c
          }
        }
        function a(e) {
          return new r(e)
        }
        ;(r.prototype = {
          constructor: r,
          forEach: function (e) {
            var t = void 0
            for (t = 0; t < this.length; t++) {
              var n = this[t],
                i = e.call(n, n, t)
              if (!1 === i) break
            }
            return this
          },
          clone: function (e) {
            var t = []
            return (
              this.forEach(function (n) {
                t.push(n.cloneNode(!!e))
              }),
              a(t)
            )
          },
          get: function (e) {
            var t = this.length
            return e >= t && (e %= t), a(this[e])
          },
          first: function () {
            return this.get(0)
          },
          last: function () {
            var e = this.length
            return this.get(e - 1)
          },
          on: function (e, t, n) {
            n || ((n = t), (t = null))
            var i = []
            return (
              (i = e.split(/\s+/)),
              this.forEach(function (e) {
                i.forEach(function (i) {
                  i &&
                    (o.push({ elem: e, type: i, fn: n }),
                    t
                      ? e.addEventListener(i, function (e) {
                          var i = e.target
                          i.matches(t) && n.call(i, e)
                        })
                      : e.addEventListener(i, n))
                })
              })
            )
          },
          off: function (e, t) {
            return this.forEach(function (n) {
              n.removeEventListener(e, t)
            })
          },
          attr: function (e, t) {
            return null == t
              ? this[0].getAttribute(e)
              : this.forEach(function (n) {
                  n.setAttribute(e, t)
                })
          },
          addClass: function (e) {
            return e
              ? this.forEach(function (t) {
                  var n = void 0
                  t.className
                    ? ((n = t.className.split(/\s/)),
                      (n = n.filter(function (e) {
                        return !!e.trim()
                      })),
                      n.indexOf(e) < 0 && n.push(e),
                      (t.className = n.join(' ')))
                    : (t.className = e)
                })
              : this
          },
          removeClass: function (e) {
            return e
              ? this.forEach(function (t) {
                  var n = void 0
                  t.className &&
                    ((n = t.className.split(/\s/)),
                    (n = n.filter(function (t) {
                      return (t = t.trim()), !(!t || t === e)
                    })),
                    (t.className = n.join(' ')))
                })
              : this
          },
          css: function (e, t) {
            var n = e + ':' + t + ';'
            return this.forEach(function (t) {
              var i = (t.getAttribute('style') || '').trim(),
                o = void 0,
                r = []
              i
                ? ((o = i.split(';')),
                  o.forEach(function (e) {
                    var t = e.split(':').map(function (e) {
                      return e.trim()
                    })
                    2 === t.length && r.push(t[0] + ':' + t[1])
                  }),
                  (r = r.map(function (t) {
                    return 0 === t.indexOf(e) ? n : t
                  })),
                  r.indexOf(n) < 0 && r.push(n),
                  t.setAttribute('style', r.join('; ')))
                : t.setAttribute('style', n)
            })
          },
          show: function () {
            return this.css('display', 'block')
          },
          hide: function () {
            return this.css('display', 'none')
          },
          children: function () {
            var e = this[0]
            return e ? a(e.children) : null
          },
          childNodes: function () {
            var e = this[0]
            return e ? a(e.childNodes) : null
          },
          append: function (e) {
            return this.forEach(function (t) {
              e.forEach(function (e) {
                t.appendChild(e)
              })
            })
          },
          remove: function () {
            return this.forEach(function (e) {
              if (e.remove) e.remove()
              else {
                var t = e.parentElement
                t && t.removeChild(e)
              }
            })
          },
          isContain: function (e) {
            var t = this[0],
              n = e[0]
            return t.contains(n)
          },
          getSizeData: function () {
            var e = this[0]
            return e.getBoundingClientRect()
          },
          getNodeName: function () {
            var e = this[0]
            return e.nodeName
          },
          find: function (e) {
            var t = this[0]
            return a(t.querySelectorAll(e))
          },
          text: function (e) {
            if (e)
              return this.forEach(function (t) {
                t.innerHTML = e
              })
            var t = this[0]
            return t.innerHTML.replace(/<.*?>/g, function () {
              return ''
            })
          },
          html: function (e) {
            var t = this[0]
            return null == e ? t.innerHTML : ((t.innerHTML = e), this)
          },
          val: function () {
            var e = this[0]
            return e.value.trim()
          },
          focus: function () {
            return this.forEach(function (e) {
              e.focus()
            })
          },
          parent: function () {
            var e = this[0]
            return a(e.parentElement)
          },
          parentUntil: function (e, t) {
            var n = document.querySelectorAll(e),
              i = n.length
            if (!i) return null
            var o = t || this[0]
            if ('BODY' === o.nodeName) return null
            var r = o.parentElement,
              c = void 0
            for (c = 0; c < i; c++) if (r === n[c]) return a(r)
            return this.parentUntil(e, r)
          },
          equal: function (e) {
            return 1 === e.nodeType ? this[0] === e : this[0] === e[0]
          },
          insertBefore: function (e) {
            var t = a(e),
              n = t[0]
            return n
              ? this.forEach(function (e) {
                  var t = n.parentNode
                  t.insertBefore(e, n)
                })
              : this
          },
          insertAfter: function (e) {
            var t = a(e),
              n = t[0]
            return n
              ? this.forEach(function (e) {
                  var t = n.parentNode
                  t.lastChild === n ? t.appendChild(e) : t.insertBefore(e, n.nextSibling)
                })
              : this
          },
        }),
          (a.offAll = function () {
            o.forEach(function (e) {
              var t = e.elem,
                n = e.type,
                i = e.fn
              t.removeEventListener(n, i)
            })
          })
        var c = {
            menus: [
              'head',
              'bold',
              'fontSize',
              'fontName',
              'italic',
              'underline',
              'strikeThrough',
              'foreColor',
              'backColor',
              'link',
              'list',
              'justify',
              'quote',
              'emoticon',
              'image',
              'table',
              'video',
              'code',
              'undo',
              'redo',
            ],
            fontNames: ['\u5b8b\u4f53', '\u5fae\u8f6f\u96c5\u9ed1', 'Arial', 'Tahoma', 'Verdana'],
            colors: ['#000000', '#eeece0', '#1c487f', '#4d80bf', '#c24f4a', '#8baa4a', '#7b5ba1', '#46acc8', '#f9963b', '#ffffff'],
            emotions: [
              {
                title: '\u9ed8\u8ba4',
                type: 'image',
                content: [
                  { alt: '[\u574f\u7b11]', src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/50/pcmoren_huaixiao_org.png' },
                  { alt: '[\u8214\u5c4f]', src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/40/pcmoren_tian_org.png' },
                  { alt: '[\u6c61]', src: 'http://img.t.sinajs.cn/t4/appstyle/expression/ext/normal/3c/pcmoren_wu_org.png' },
                ],
              },
              {
                title: '\u65b0\u6d6a',
                type: 'image',
                content: [
                  { src: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/7a/shenshou_thumb.gif', alt: '[\u8349\u6ce5\u9a6c]' },
                  { src: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/60/horse2_thumb.gif', alt: '[\u795e\u9a6c]' },
                  { src: 'http://img.t.sinajs.cn/t35/style/images/common/face/ext/normal/bc/fuyun_thumb.gif', alt: '[\u6d6e\u4e91]' },
                ],
              },
              {
                title: 'emoji',
                type: 'emoji',
                content:
                  '\ud83d\ude00 \ud83d\ude03 \ud83d\ude04 \ud83d\ude01 \ud83d\ude06 \ud83d\ude05 \ud83d\ude02 \ud83d\ude0a \ud83d\ude07 \ud83d\ude42 \ud83d\ude43 \ud83d\ude09 \ud83d\ude13 \ud83d\ude2a \ud83d\ude34 \ud83d\ude44 \ud83e\udd14 \ud83d\ude2c \ud83e\udd10'.split(
                    /\s/,
                  ),
              },
            ],
            zIndex: 1e4,
            debug: !1,
            linkCheck: function (e, t) {
              return !0
            },
            linkImgCheck: function (e) {
              return !0
            },
            pasteFilterStyle: !0,
            pasteIgnoreImg: !1,
            pasteTextHandle: function (e) {
              return e
            },
            showLinkImg: !0,
            linkImgCallback: function (e) {},
            uploadImgMaxSize: 5242880,
            uploadImgShowBase64: !1,
            uploadFileName: '',
            uploadImgParams: {},
            uploadImgHeaders: {},
            withCredentials: !1,
            uploadImgTimeout: 1e4,
            uploadImgHooks: {
              before: function (e, t, n) {},
              success: function (e, t, n) {},
              fail: function (e, t, n) {},
              error: function (e, t) {},
              timeout: function (e, t) {},
            },
            qiniu: !1,
          },
          l = {
            _ua: navigator.userAgent,
            isWebkit: function () {
              var e = /webkit/i
              return e.test(this._ua)
            },
            isIE: function () {
              return 'ActiveXObject' in window
            },
          }
        function s(e, t) {
          var n = void 0,
            i = void 0
          for (n in e) if (e.hasOwnProperty(n) && ((i = t.call(e, n, e[n])), !1 === i)) break
        }
        function A(e, t) {
          var n = void 0,
            i = void 0,
            o = void 0,
            r = e.length || 0
          for (n = 0; n < r; n++) if (((i = e[n]), (o = t.call(e, i, n)), !1 === o)) break
        }
        function u(e) {
          return e + Math.random().toString().slice(2)
        }
        function d(e) {
          return null == e
            ? ''
            : e
                .replace(/</gm, '&lt;')
                .replace(/>/gm, '&gt;')
                .replace(/"/gm, '&quot;')
                .replace(/(\r\n|\r|\n)/g, '<br/>')
        }
        function p(e) {
          return 'function' === typeof e
        }
        function f(e) {
          ;(this.editor = e),
            (this.$elem = a('<div class="w-e-menu">\n            <i class="w-e-icon-bold"></i>\n        </div>')),
            (this.type = 'click'),
            (this._active = !1)
        }
        f.prototype = {
          constructor: f,
          onClick: function (e) {
            var t = this.editor,
              n = t.selection.isSelectionEmpty()
            n && t.selection.createEmptyRange(), t.cmd.do('bold'), n && (t.selection.collapseRange(), t.selection.restoreSelection())
          },
          tryChangeActive: function (e) {
            var t = this.editor,
              n = this.$elem
            t.cmd.queryCommandState('bold') ? ((this._active = !0), n.addClass('w-e-active')) : ((this._active = !1), n.removeClass('w-e-active'))
          },
        }
        var h = function (e, t) {
            var n = e.config.langArgs || [],
              i = t
            return (
              n.forEach(function (e) {
                var t = e.reg,
                  n = e.val
                t.test(i) &&
                  (i = i.replace(t, function () {
                    return n
                  }))
              }),
              i
            )
          },
          m = function () {}
        function v(e, t) {
          var n = this,
            i = e.editor
          ;(this.menu = e), (this.opt = t)
          var o = a('<div class="w-e-droplist"></div>'),
            r = t.$title,
            c = void 0
          r && ((c = r.html()), (c = h(i, c)), r.html(c), r.addClass('w-e-dp-title'), o.append(r))
          var l = t.list || [],
            s = t.type || 'list',
            A = t.onClick || m,
            u = a('<ul class="' + ('list' === s ? 'w-e-list' : 'w-e-block') + '"></ul>')
          o.append(u),
            l.forEach(function (e) {
              var t = e.$elem,
                o = t.html()
              ;(o = h(i, o)), t.html(o)
              var r = e.value,
                c = a('<li class="w-e-item"></li>')
              t &&
                (c.append(t),
                u.append(c),
                c.on('click', function (e) {
                  A(r),
                    (n.hideTimeoutId = setTimeout(function () {
                      n.hide()
                    }, 0))
                }))
            }),
            o.on('mouseleave', function (e) {
              n.hideTimeoutId = setTimeout(function () {
                n.hide()
              }, 0)
            }),
            (this.$container = o),
            (this._rendered = !1),
            (this._show = !1)
        }
        function g(e) {
          var t = this
          ;(this.editor = e),
            (this.$elem = a('<div class="w-e-menu"><i class="w-e-icon-header"></i></div>')),
            (this.type = 'droplist'),
            (this._active = !1),
            (this.droplist = new v(this, {
              width: 100,
              $title: a('<p>\u8bbe\u7f6e\u6807\u9898</p>'),
              type: 'list',
              list: [
                { $elem: a('<h1>H1</h1>'), value: '<h1>' },
                { $elem: a('<h2>H2</h2>'), value: '<h2>' },
                { $elem: a('<h3>H3</h3>'), value: '<h3>' },
                { $elem: a('<h4>H4</h4>'), value: '<h4>' },
                { $elem: a('<h5>H5</h5>'), value: '<h5>' },
                { $elem: a('<p>\u6b63\u6587</p>'), value: '<p>' },
              ],
              onClick: function (e) {
                t._command(e)
              },
            }))
        }
        function w(e) {
          var t = this
          ;(this.editor = e),
            (this.$elem = a('<div class="w-e-menu"><i class="w-e-icon-text-heigh"></i></div>')),
            (this.type = 'droplist'),
            (this._active = !1),
            (this.droplist = new v(this, {
              width: 160,
              $title: a('<p>\u5b57\u53f7</p>'),
              type: 'list',
              list: [
                { $elem: a('<span style="font-size: x-small;">x-small</span>'), value: '1' },
                { $elem: a('<span style="font-size: small;">small</span>'), value: '2' },
                { $elem: a('<span>normal</span>'), value: '3' },
                { $elem: a('<span style="font-size: large;">large</span>'), value: '4' },
                { $elem: a('<span style="font-size: x-large;">x-large</span>'), value: '5' },
                { $elem: a('<span style="font-size: xx-large;">xx-large</span>'), value: '6' },
              ],
              onClick: function (e) {
                t._command(e)
              },
            }))
        }
        function E(e) {
          var t = this
          ;(this.editor = e),
            (this.$elem = a('<div class="w-e-menu"><i class="w-e-icon-font"></i></div>')),
            (this.type = 'droplist'),
            (this._active = !1)
          var n = e.config,
            i = n.fontNames || []
          this.droplist = new v(this, {
            width: 100,
            $title: a('<p>\u5b57\u4f53</p>'),
            type: 'list',
            list: i.map(function (e) {
              return { $elem: a('<span style="font-family: ' + e + ';">' + e + '</span>'), value: e }
            }),
            onClick: function (e) {
              t._command(e)
            },
          })
        }
        ;(v.prototype = {
          constructor: v,
          show: function () {
            this.hideTimeoutId && clearTimeout(this.hideTimeoutId)
            var e = this.menu,
              t = e.$elem,
              n = this.$container
            if (!this._show) {
              if (this._rendered) n.show()
              else {
                var i = t.getSizeData().height || 0,
                  o = this.opt.width || 100
                n.css('margin-top', i + 'px').css('width', o + 'px'), t.append(n), (this._rendered = !0)
              }
              this._show = !0
            }
          },
          hide: function () {
            this.showTimeoutId && clearTimeout(this.showTimeoutId)
            var e = this.$container
            this._show && (e.hide(), (this._show = !1))
          },
        }),
          (g.prototype = {
            constructor: g,
            _command: function (e) {
              var t = this.editor,
                n = t.selection.getSelectionContainerElem()
              t.$textElem.equal(n) || t.cmd.do('formatBlock', e)
            },
            tryChangeActive: function (e) {
              var t = this.editor,
                n = this.$elem,
                i = /^h/i,
                o = t.cmd.queryCommandValue('formatBlock')
              i.test(o) ? ((this._active = !0), n.addClass('w-e-active')) : ((this._active = !1), n.removeClass('w-e-active'))
            },
          }),
          (w.prototype = {
            constructor: w,
            _command: function (e) {
              var t = this.editor
              t.cmd.do('fontSize', e)
            },
          }),
          (E.prototype = {
            constructor: E,
            _command: function (e) {
              var t = this.editor
              t.cmd.do('fontName', e)
            },
          })
        var b = function () {},
          y = []
        function C(e, t) {
          ;(this.menu = e), (this.opt = t)
        }
        function x(e) {
          ;(this.editor = e),
            (this.$elem = a('<div class="w-e-menu"><i class="w-e-icon-link"></i></div>')),
            (this.type = 'panel'),
            (this._active = !1)
        }
        function B(e) {
          ;(this.editor = e),
            (this.$elem = a('<div class="w-e-menu">\n            <i class="w-e-icon-italic"></i>\n        </div>')),
            (this.type = 'click'),
            (this._active = !1)
        }
        function I(e) {
          ;(this.editor = e),
            (this.$elem = a('<div class="w-e-menu">\n            <i class="w-e-icon-redo"></i>\n        </div>')),
            (this.type = 'click'),
            (this._active = !1)
        }
        function k(e) {
          ;(this.editor = e),
            (this.$elem = a('<div class="w-e-menu">\n            <i class="w-e-icon-strikethrough"></i>\n        </div>')),
            (this.type = 'click'),
            (this._active = !1)
        }
        function Q(e) {
          ;(this.editor = e),
            (this.$elem = a('<div class="w-e-menu">\n            <i class="w-e-icon-underline"></i>\n        </div>')),
            (this.type = 'click'),
            (this._active = !1)
        }
        function N(e) {
          ;(this.editor = e),
            (this.$elem = a('<div class="w-e-menu">\n            <i class="w-e-icon-undo"></i>\n        </div>')),
            (this.type = 'click'),
            (this._active = !1)
        }
        function M(e) {
          var t = this
          ;(this.editor = e),
            (this.$elem = a('<div class="w-e-menu"><i class="w-e-icon-list2"></i></div>')),
            (this.type = 'droplist'),
            (this._active = !1),
            (this.droplist = new v(this, {
              width: 120,
              $title: a('<p>\u8bbe\u7f6e\u5217\u8868</p>'),
              type: 'list',
              list: [
                { $elem: a('<span><i class="w-e-icon-list-numbered"></i> \u6709\u5e8f\u5217\u8868</span>'), value: 'insertOrderedList' },
                { $elem: a('<span><i class="w-e-icon-list2"></i> \u65e0\u5e8f\u5217\u8868</span>'), value: 'insertUnorderedList' },
              ],
              onClick: function (e) {
                t._command(e)
              },
            }))
        }
        function S(e) {
          var t = this
          ;(this.editor = e),
            (this.$elem = a('<div class="w-e-menu"><i class="w-e-icon-paragraph-left"></i></div>')),
            (this.type = 'droplist'),
            (this._active = !1),
            (this.droplist = new v(this, {
              width: 100,
              $title: a('<p>\u5bf9\u9f50\u65b9\u5f0f</p>'),
              type: 'list',
              list: [
                { $elem: a('<span><i class="w-e-icon-paragraph-left"></i> \u9760\u5de6</span>'), value: 'justifyLeft' },
                { $elem: a('<span><i class="w-e-icon-paragraph-center"></i> \u5c45\u4e2d</span>'), value: 'justifyCenter' },
                { $elem: a('<span><i class="w-e-icon-paragraph-right"></i> \u9760\u53f3</span>'), value: 'justifyRight' },
              ],
              onClick: function (e) {
                t._command(e)
              },
            }))
        }
        function D(e) {
          var t = this
          ;(this.editor = e), (this.$elem = a('<div class="w-e-menu"><i class="w-e-icon-pencil2"></i></div>')), (this.type = 'droplist')
          var n = e.config,
            i = n.colors || []
          ;(this._active = !1),
            (this.droplist = new v(this, {
              width: 120,
              $title: a('<p>\u6587\u5b57\u989c\u8272</p>'),
              type: 'inline-block',
              list: i.map(function (e) {
                return { $elem: a('<i style="color:' + e + ';" class="w-e-icon-pencil2"></i>'), value: e }
              }),
              onClick: function (e) {
                t._command(e)
              },
            }))
        }
        function F(e) {
          var t = this
          ;(this.editor = e), (this.$elem = a('<div class="w-e-menu"><i class="w-e-icon-paint-brush"></i></div>')), (this.type = 'droplist')
          var n = e.config,
            i = n.colors || []
          ;(this._active = !1),
            (this.droplist = new v(this, {
              width: 120,
              $title: a('<p>\u80cc\u666f\u8272</p>'),
              type: 'inline-block',
              list: i.map(function (e) {
                return { $elem: a('<i style="color:' + e + ';" class="w-e-icon-paint-brush"></i>'), value: e }
              }),
              onClick: function (e) {
                t._command(e)
              },
            }))
        }
        function R(e) {
          ;(this.editor = e),
            (this.$elem = a('<div class="w-e-menu">\n            <i class="w-e-icon-quotes-left"></i>\n        </div>')),
            (this.type = 'click'),
            (this._active = !1)
        }
        function _(e) {
          ;(this.editor = e),
            (this.$elem = a('<div class="w-e-menu">\n            <i class="w-e-icon-terminal"></i>\n        </div>')),
            (this.type = 'panel'),
            (this._active = !1)
        }
        function T(e) {
          ;(this.editor = e),
            (this.$elem = a('<div class="w-e-menu">\n            <i class="w-e-icon-happy"></i>\n        </div>')),
            (this.type = 'panel'),
            (this._active = !1)
        }
        function P(e) {
          ;(this.editor = e),
            (this.$elem = a('<div class="w-e-menu"><i class="w-e-icon-table2"></i></div>')),
            (this.type = 'panel'),
            (this._active = !1)
        }
        function U(e) {
          ;(this.editor = e),
            (this.$elem = a('<div class="w-e-menu"><i class="w-e-icon-play"></i></div>')),
            (this.type = 'panel'),
            (this._active = !1)
        }
        function Z(e) {
          this.editor = e
          var t = u('w-e-img')
          ;(this.$elem = a('<div class="w-e-menu" id="' + t + '"><i class="w-e-icon-image"></i></div>')),
            (e.imgMenuId = t),
            (this.type = 'panel'),
            (this._active = !1)
        }
        ;(C.prototype = {
          constructor: C,
          show: function () {
            var e = this,
              t = this.menu
            if (!(y.indexOf(t) >= 0)) {
              var n = t.editor,
                i = a('body'),
                o = n.$textContainerElem,
                r = this.opt,
                c = a('<div class="w-e-panel-container"></div>'),
                l = r.width || 300
              c.css('width', l + 'px').css('margin-left', (0 - l) / 2 + 'px')
              var s = a('<i class="w-e-icon-close w-e-panel-close"></i>')
              c.append(s),
                s.on('click', function () {
                  e.hide()
                })
              var A = a('<ul class="w-e-panel-tab-title"></ul>'),
                u = a('<div class="w-e-panel-tab-content"></div>')
              c.append(A).append(u)
              var d = r.height
              d && u.css('height', d + 'px').css('overflow-y', 'auto')
              var p = r.tabs || [],
                f = [],
                m = []
              p.forEach(function (e, t) {
                if (e) {
                  var i = e.title || '',
                    o = e.tpl || ''
                  ;(i = h(n, i)), (o = h(n, o))
                  var r = a('<li class="w-e-item">' + i + '</li>')
                  A.append(r)
                  var c = a(o)
                  u.append(c),
                    (r._index = t),
                    f.push(r),
                    m.push(c),
                    0 === t ? ((r._active = !0), r.addClass('w-e-active')) : c.hide(),
                    r.on('click', function (e) {
                      r._active ||
                        (f.forEach(function (e) {
                          ;(e._active = !1), e.removeClass('w-e-active')
                        }),
                        m.forEach(function (e) {
                          e.hide()
                        }),
                        (r._active = !0),
                        r.addClass('w-e-active'),
                        c.show())
                    })
                }
              }),
                c.on('click', function (e) {
                  e.stopPropagation()
                }),
                i.on('click', function (t) {
                  e.hide()
                }),
                o.append(c),
                p.forEach(function (t, n) {
                  if (t) {
                    var i = t.events || []
                    i.forEach(function (t) {
                      var i = t.selector,
                        o = t.type,
                        r = t.fn || b,
                        a = m[n]
                      a.find(i).on(o, function (t) {
                        t.stopPropagation()
                        var n = r(t)
                        n && e.hide()
                      })
                    })
                  }
                })
              var v = c.find('input[type=text],textarea')
              v.length && v.get(0).focus(), (this.$container = c), this._hideOtherPanels(), y.push(t)
            }
          },
          hide: function () {
            var e = this.menu,
              t = this.$container
            t && t.remove(),
              (y = y.filter(function (t) {
                return t !== e
              }))
          },
          _hideOtherPanels: function () {
            y.length &&
              y.forEach(function (e) {
                var t = e.panel || {}
                t.hide && t.hide()
              })
          },
        }),
          (x.prototype = {
            constructor: x,
            onClick: function (e) {
              var t = this.editor,
                n = void 0
              if (this._active) {
                if (((n = t.selection.getSelectionContainerElem()), !n)) return
                t.selection.createRangeByElem(n), t.selection.restoreSelection(), this._createPanel(n.text(), n.attr('href'))
              } else t.selection.isSelectionEmpty() ? this._createPanel('', '') : this._createPanel(t.selection.getSelectionText(), '')
            },
            _createPanel: function (e, t) {
              var n = this,
                i = u('input-link'),
                o = u('input-text'),
                r = u('btn-ok'),
                c = u('btn-del'),
                l = this._active ? 'inline-block' : 'none',
                s = new C(this, {
                  width: 300,
                  tabs: [
                    {
                      title: '\u94fe\u63a5',
                      tpl:
                        '<div>\n                            <input id="' +
                        o +
                        '" type="text" class="block" value="' +
                        e +
                        '" placeholder="\u94fe\u63a5\u6587\u5b57"/></td>\n                            <input id="' +
                        i +
                        '" type="text" class="block" value="' +
                        t +
                        '" placeholder="http://..."/></td>\n                            <div class="w-e-button-container">\n                                <button id="' +
                        r +
                        '" class="right">\u63d2\u5165</button>\n                                <button id="' +
                        c +
                        '" class="gray right" style="display:' +
                        l +
                        '">\u5220\u9664\u94fe\u63a5</button>\n                            </div>\n                        </div>',
                      events: [
                        {
                          selector: '#' + r,
                          type: 'click',
                          fn: function () {
                            var e = a('#' + i),
                              t = a('#' + o),
                              r = e.val(),
                              c = t.val()
                            return n._insertLink(c, r), !0
                          },
                        },
                        {
                          selector: '#' + c,
                          type: 'click',
                          fn: function () {
                            return n._delLink(), !0
                          },
                        },
                      ],
                    },
                  ],
                })
              s.show(), (this.panel = s)
            },
            _delLink: function () {
              if (this._active) {
                var e = this.editor,
                  t = e.selection.getSelectionContainerElem()
                if (t) {
                  var n = e.selection.getSelectionText()
                  e.cmd.do('insertHTML', '<span>' + n + '</span>')
                }
              }
            },
            _insertLink: function (e, t) {
              var n = this.editor,
                i = n.config,
                o = i.linkCheck,
                r = !0
              o && 'function' === typeof o && (r = o(e, t)),
                !0 === r ? n.cmd.do('insertHTML', '<a href="' + t + '" target="_blank">' + e + '</a>') : alert(r)
            },
            tryChangeActive: function (e) {
              var t = this.editor,
                n = this.$elem,
                i = t.selection.getSelectionContainerElem()
              i && ('A' === i.getNodeName() ? ((this._active = !0), n.addClass('w-e-active')) : ((this._active = !1), n.removeClass('w-e-active')))
            },
          }),
          (B.prototype = {
            constructor: B,
            onClick: function (e) {
              var t = this.editor,
                n = t.selection.isSelectionEmpty()
              n && t.selection.createEmptyRange(), t.cmd.do('italic'), n && (t.selection.collapseRange(), t.selection.restoreSelection())
            },
            tryChangeActive: function (e) {
              var t = this.editor,
                n = this.$elem
              t.cmd.queryCommandState('italic') ? ((this._active = !0), n.addClass('w-e-active')) : ((this._active = !1), n.removeClass('w-e-active'))
            },
          }),
          (I.prototype = {
            constructor: I,
            onClick: function (e) {
              var t = this.editor
              t.cmd.do('redo')
            },
          }),
          (k.prototype = {
            constructor: k,
            onClick: function (e) {
              var t = this.editor,
                n = t.selection.isSelectionEmpty()
              n && t.selection.createEmptyRange(), t.cmd.do('strikeThrough'), n && (t.selection.collapseRange(), t.selection.restoreSelection())
            },
            tryChangeActive: function (e) {
              var t = this.editor,
                n = this.$elem
              t.cmd.queryCommandState('strikeThrough')
                ? ((this._active = !0), n.addClass('w-e-active'))
                : ((this._active = !1), n.removeClass('w-e-active'))
            },
          }),
          (Q.prototype = {
            constructor: Q,
            onClick: function (e) {
              var t = this.editor,
                n = t.selection.isSelectionEmpty()
              n && t.selection.createEmptyRange(), t.cmd.do('underline'), n && (t.selection.collapseRange(), t.selection.restoreSelection())
            },
            tryChangeActive: function (e) {
              var t = this.editor,
                n = this.$elem
              t.cmd.queryCommandState('underline')
                ? ((this._active = !0), n.addClass('w-e-active'))
                : ((this._active = !1), n.removeClass('w-e-active'))
            },
          }),
          (N.prototype = {
            constructor: N,
            onClick: function (e) {
              var t = this.editor
              t.cmd.do('undo')
            },
          }),
          (M.prototype = {
            constructor: M,
            _command: function (e) {
              var t = this.editor,
                n = t.$textElem
              if ((t.selection.restoreSelection(), !t.cmd.queryCommandState(e))) {
                t.cmd.do(e)
                var i = t.selection.getSelectionContainerElem()
                if (('LI' === i.getNodeName() && (i = i.parent()), !1 !== /^ol|ul$/i.test(i.getNodeName()) && !i.equal(n))) {
                  var o = i.parent()
                  o.equal(n) || (i.insertAfter(o), o.remove())
                }
              }
            },
            tryChangeActive: function (e) {
              var t = this.editor,
                n = this.$elem
              t.cmd.queryCommandState('insertUnOrderedList') || t.cmd.queryCommandState('insertOrderedList')
                ? ((this._active = !0), n.addClass('w-e-active'))
                : ((this._active = !1), n.removeClass('w-e-active'))
            },
          }),
          (S.prototype = {
            constructor: S,
            _command: function (e) {
              var t = this.editor
              t.cmd.do(e)
            },
          }),
          (D.prototype = {
            constructor: D,
            _command: function (e) {
              var t = this.editor
              t.cmd.do('foreColor', e)
            },
          }),
          (F.prototype = {
            constructor: F,
            _command: function (e) {
              var t = this.editor
              t.cmd.do('backColor', e)
            },
          }),
          (R.prototype = {
            constructor: R,
            onClick: function (e) {
              var t = this.editor,
                n = t.selection.getSelectionContainerElem(),
                i = n.getNodeName()
              if (l.isIE()) {
                var o = void 0,
                  r = void 0
                if ('P' === i) return (o = n.text()), (r = a('<blockquote>' + o + '</blockquote>')), r.insertAfter(n), void n.remove()
                'BLOCKQUOTE' === i && ((o = n.text()), (r = a('<p>' + o + '</p>')), r.insertAfter(n), n.remove())
              } else 'BLOCKQUOTE' === i ? t.cmd.do('formatBlock', '<P>') : t.cmd.do('formatBlock', '<BLOCKQUOTE>')
            },
            tryChangeActive: function (e) {
              var t = this.editor,
                n = this.$elem,
                i = /^BLOCKQUOTE$/i,
                o = t.cmd.queryCommandValue('formatBlock')
              i.test(o) ? ((this._active = !0), n.addClass('w-e-active')) : ((this._active = !1), n.removeClass('w-e-active'))
            },
          }),
          (_.prototype = {
            constructor: _,
            onClick: function (e) {
              var t = this.editor,
                n = t.selection.getSelectionStartElem(),
                i = t.selection.getSelectionEndElem(),
                o = t.selection.isSelectionEmpty(),
                r = t.selection.getSelectionText(),
                c = void 0
              if (n.equal(i))
                return o
                  ? void (this._active ? this._createPanel(n.html()) : this._createPanel())
                  : ((c = a('<code>' + r + '</code>')),
                    t.cmd.do('insertElem', c),
                    t.selection.createRangeByElem(c, !1),
                    void t.selection.restoreSelection())
              t.selection.restoreSelection()
            },
            _createPanel: function (e) {
              var t = this
              e = e || ''
              var n = e ? 'edit' : 'new',
                i = u('texxt'),
                o = u('btn'),
                r = new C(this, {
                  width: 500,
                  tabs: [
                    {
                      title: '\u63d2\u5165\u4ee3\u7801',
                      tpl:
                        '<div>\n                        <textarea id="' +
                        i +
                        '" style="height:145px;;">' +
                        e +
                        '</textarea>\n                        <div class="w-e-button-container">\n                            <button id="' +
                        o +
                        '" class="right">\u63d2\u5165</button>\n                        </div>\n                    <div>',
                      events: [
                        {
                          selector: '#' + o,
                          type: 'click',
                          fn: function () {
                            var e = a('#' + i),
                              o = e.val() || e.html()
                            return (o = d(o)), 'new' === n ? t._insertCode(o) : t._updateCode(o), !0
                          },
                        },
                      ],
                    },
                  ],
                })
              r.show(), (this.panel = r)
            },
            _insertCode: function (e) {
              var t = this.editor
              t.cmd.do('insertHTML', '<pre><code>' + e + '</code></pre><p><br></p>')
            },
            _updateCode: function (e) {
              var t = this.editor,
                n = t.selection.getSelectionContainerElem()
              n && (n.html(e), t.selection.restoreSelection())
            },
            tryChangeActive: function (e) {
              var t = this.editor,
                n = this.$elem,
                i = t.selection.getSelectionContainerElem()
              if (i) {
                var o = i.parent()
                'CODE' === i.getNodeName() && 'PRE' === o.getNodeName()
                  ? ((this._active = !0), n.addClass('w-e-active'))
                  : ((this._active = !1), n.removeClass('w-e-active'))
              }
            },
          }),
          (T.prototype = {
            constructor: T,
            onClick: function () {
              this._createPanel()
            },
            _createPanel: function () {
              var e = this,
                t = this.editor,
                n = t.config,
                i = n.emotions || [],
                o = []
              i.forEach(function (t) {
                var n = t.type,
                  i = t.content || [],
                  r = ''
                'emoji' === n &&
                  i.forEach(function (e) {
                    e && (r += '<span class="w-e-item">' + e + '</span>')
                  }),
                  'image' === n &&
                    i.forEach(function (e) {
                      var t = e.src,
                        n = e.alt
                      t && (r += '<span class="w-e-item"><img src="' + t + '" alt="' + n + '" data-w-e="1"/></span>')
                    }),
                  o.push({
                    title: t.title,
                    tpl: '<div class="w-e-emoticon-container">' + r + '</div>',
                    events: [
                      {
                        selector: 'span.w-e-item',
                        type: 'click',
                        fn: function (t) {
                          var n = t.target,
                            i = a(n),
                            o = i.getNodeName(),
                            r = void 0
                          return (r = 'IMG' === o ? i.parent().html() : '<span>' + i.html() + '</span>'), e._insert(r), !0
                        },
                      },
                    ],
                  })
              })
              var r = new C(this, { width: 300, height: 200, tabs: o })
              r.show(), (this.panel = r)
            },
            _insert: function (e) {
              var t = this.editor
              t.cmd.do('insertHTML', e)
            },
          }),
          (P.prototype = {
            constructor: P,
            onClick: function () {
              this._active ? this._createEditPanel() : this._createInsertPanel()
            },
            _createInsertPanel: function () {
              var e = this,
                t = u('btn'),
                n = u('row'),
                i = u('col'),
                o = new C(this, {
                  width: 250,
                  tabs: [
                    {
                      title: '\u63d2\u5165\u8868\u683c',
                      tpl:
                        '<div>\n                        <p style="text-align:left; padding:5px 0;">\n                            \u521b\u5efa\n                            <input id="' +
                        n +
                        '" type="text" value="5" style="width:40px;text-align:center;"/>\n                            \u884c\n                            <input id="' +
                        i +
                        '" type="text" value="5" style="width:40px;text-align:center;"/>\n                            \u5217\u7684\u8868\u683c\n                        </p>\n                        <div class="w-e-button-container">\n                            <button id="' +
                        t +
                        '" class="right">\u63d2\u5165</button>\n                        </div>\n                    </div>',
                      events: [
                        {
                          selector: '#' + t,
                          type: 'click',
                          fn: function () {
                            var t = parseInt(a('#' + n).val()),
                              o = parseInt(a('#' + i).val())
                            return t && o && t > 0 && o > 0 && e._insert(t, o), !0
                          },
                        },
                      ],
                    },
                  ],
                })
              o.show(), (this.panel = o)
            },
            _insert: function (e, t) {
              var n = void 0,
                i = void 0,
                o = '<table border="0" width="100%" cellpadding="0" cellspacing="0">'
              for (n = 0; n < e; n++) {
                if (((o += '<tr>'), 0 === n)) for (i = 0; i < t; i++) o += '<th>&nbsp;</th>'
                else for (i = 0; i < t; i++) o += '<td>&nbsp;</td>'
                o += '</tr>'
              }
              o += '</table><p><br></p>'
              var r = this.editor
              r.cmd.do('insertHTML', o), r.cmd.do('enableObjectResizing', !1), r.cmd.do('enableInlineTableEditing', !1)
            },
            _createEditPanel: function () {
              var e = this,
                t = u('add-row'),
                n = u('add-col'),
                i = u('del-row'),
                o = u('del-col'),
                r = u('del-table'),
                a = new C(this, {
                  width: 320,
                  tabs: [
                    {
                      title: '\u7f16\u8f91\u8868\u683c',
                      tpl:
                        '<div>\n                        <div class="w-e-button-container" style="border-bottom:1px solid #f1f1f1;padding-bottom:5px;margin-bottom:5px;">\n                            <button id="' +
                        t +
                        '" class="left">\u589e\u52a0\u884c</button>\n                            <button id="' +
                        i +
                        '" class="red left">\u5220\u9664\u884c</button>\n                            <button id="' +
                        n +
                        '" class="left">\u589e\u52a0\u5217</button>\n                            <button id="' +
                        o +
                        '" class="red left">\u5220\u9664\u5217</button>\n                        </div>\n                        <div class="w-e-button-container">\n                            <button id="' +
                        r +
                        '" class="gray left">\u5220\u9664\u8868\u683c</button>\n                        </dv>\n                    </div>',
                      events: [
                        {
                          selector: '#' + t,
                          type: 'click',
                          fn: function () {
                            return e._addRow(), !0
                          },
                        },
                        {
                          selector: '#' + n,
                          type: 'click',
                          fn: function () {
                            return e._addCol(), !0
                          },
                        },
                        {
                          selector: '#' + i,
                          type: 'click',
                          fn: function () {
                            return e._delRow(), !0
                          },
                        },
                        {
                          selector: '#' + o,
                          type: 'click',
                          fn: function () {
                            return e._delCol(), !0
                          },
                        },
                        {
                          selector: '#' + r,
                          type: 'click',
                          fn: function () {
                            return e._delTable(), !0
                          },
                        },
                      ],
                    },
                  ],
                })
              a.show()
            },
            _getLocationData: function () {
              var e = {},
                t = this.editor,
                n = t.selection.getSelectionContainerElem()
              if (n) {
                var i = n.getNodeName()
                if ('TD' === i || 'TH' === i) {
                  var o = n.parent(),
                    r = o.children(),
                    a = r.length
                  r.forEach(function (t, i) {
                    if (t === n[0]) return (e.td = { index: i, elem: t, length: a }), !1
                  })
                  var c = o.parent(),
                    l = c.children(),
                    s = l.length
                  return (
                    l.forEach(function (t, n) {
                      if (t === o[0]) return (e.tr = { index: n, elem: t, length: s }), !1
                    }),
                    e
                  )
                }
              }
            },
            _addRow: function () {
              var e = this._getLocationData()
              if (e) {
                var t = e.tr,
                  n = a(t.elem),
                  i = e.td,
                  o = i.length,
                  r = document.createElement('tr'),
                  c = '',
                  l = void 0
                for (l = 0; l < o; l++) c += '<td>&nbsp;</td>'
                ;(r.innerHTML = c), a(r).insertAfter(n)
              }
            },
            _addCol: function () {
              var e = this._getLocationData()
              if (e) {
                var t = e.tr,
                  n = e.td,
                  i = n.index,
                  o = a(t.elem),
                  r = o.parent(),
                  c = r.children()
                c.forEach(function (e) {
                  var t = a(e),
                    n = t.children(),
                    o = n.get(i),
                    r = o.getNodeName().toLowerCase(),
                    c = document.createElement(r)
                  a(c).insertAfter(o)
                })
              }
            },
            _delRow: function () {
              var e = this._getLocationData()
              if (e) {
                var t = e.tr,
                  n = a(t.elem)
                n.remove()
              }
            },
            _delCol: function () {
              var e = this._getLocationData()
              if (e) {
                var t = e.tr,
                  n = e.td,
                  i = n.index,
                  o = a(t.elem),
                  r = o.parent(),
                  c = r.children()
                c.forEach(function (e) {
                  var t = a(e),
                    n = t.children(),
                    o = n.get(i)
                  o.remove()
                })
              }
            },
            _delTable: function () {
              var e = this.editor,
                t = e.selection.getSelectionContainerElem()
              if (t) {
                var n = t.parentUntil('table')
                n && n.remove()
              }
            },
            tryChangeActive: function (e) {
              var t = this.editor,
                n = this.$elem,
                i = t.selection.getSelectionContainerElem()
              if (i) {
                var o = i.getNodeName()
                'TD' === o || 'TH' === o ? ((this._active = !0), n.addClass('w-e-active')) : ((this._active = !1), n.removeClass('w-e-active'))
              }
            },
          }),
          (U.prototype = {
            constructor: U,
            onClick: function () {
              this._createPanel()
            },
            _createPanel: function () {
              var e = this,
                t = u('text-val'),
                n = u('btn'),
                i = new C(this, {
                  width: 350,
                  tabs: [
                    {
                      title: '\u63d2\u5165\u89c6\u9891',
                      tpl:
                        '<div>\n                        <input id="' +
                        t +
                        '" type="text" class="block" placeholder="\u683c\u5f0f\u5982\uff1a<iframe src=... ></iframe>"/>\n                        <div class="w-e-button-container">\n                            <button id="' +
                        n +
                        '" class="right">\u63d2\u5165</button>\n                        </div>\n                    </div>',
                      events: [
                        {
                          selector: '#' + n,
                          type: 'click',
                          fn: function () {
                            var n = a('#' + t),
                              i = n.val().trim()
                            return i && e._insert(i), !0
                          },
                        },
                      ],
                    },
                  ],
                })
              i.show(), (this.panel = i)
            },
            _insert: function (e) {
              var t = this.editor
              t.cmd.do('insertHTML', e + '<p><br></p>')
            },
          }),
          (Z.prototype = {
            constructor: Z,
            onClick: function () {
              var e = this.editor,
                t = e.config
              t.qiniu || (this._active ? this._createEditPanel() : this._createInsertPanel())
            },
            _createEditPanel: function () {
              var e = this.editor,
                t = u('width-30'),
                n = u('width-50'),
                i = u('width-100'),
                o = u('del-btn'),
                r = [
                  {
                    title: '\u7f16\u8f91\u56fe\u7247',
                    tpl:
                      '<div>\n                    <div class="w-e-button-container" style="border-bottom:1px solid #f1f1f1;padding-bottom:5px;margin-bottom:5px;">\n                        <span style="float:left;font-size:14px;margin:4px 5px 0 5px;color:#333;">\u6700\u5927\u5bbd\u5ea6\uff1a</span>\n                        <button id="' +
                      t +
                      '" class="left">30%</button>\n                        <button id="' +
                      n +
                      '" class="left">50%</button>\n                        <button id="' +
                      i +
                      '" class="left">100%</button>\n                    </div>\n                    <div class="w-e-button-container">\n                        <button id="' +
                      o +
                      '" class="gray left">\u5220\u9664\u56fe\u7247</button>\n                    </dv>\n                </div>',
                    events: [
                      {
                        selector: '#' + t,
                        type: 'click',
                        fn: function () {
                          var t = e._selectedImg
                          return t && t.css('max-width', '30%'), !0
                        },
                      },
                      {
                        selector: '#' + n,
                        type: 'click',
                        fn: function () {
                          var t = e._selectedImg
                          return t && t.css('max-width', '50%'), !0
                        },
                      },
                      {
                        selector: '#' + i,
                        type: 'click',
                        fn: function () {
                          var t = e._selectedImg
                          return t && t.css('max-width', '100%'), !0
                        },
                      },
                      {
                        selector: '#' + o,
                        type: 'click',
                        fn: function () {
                          var t = e._selectedImg
                          return t && t.remove(), !0
                        },
                      },
                    ],
                  },
                ],
                a = new C(this, { width: 300, tabs: r })
              a.show(), (this.panel = a)
            },
            _createInsertPanel: function () {
              var e = this.editor,
                t = e.uploadImg,
                n = e.config,
                i = u('up-trigger'),
                o = u('up-file'),
                r = u('link-url'),
                c = u('link-btn'),
                l = [
                  {
                    title: '\u4e0a\u4f20\u56fe\u7247',
                    tpl:
                      '<div class="w-e-up-img-container">\n                    <div id="' +
                      i +
                      '" class="w-e-up-btn">\n                        <i class="w-e-icon-upload2"></i>\n                    </div>\n                    <div style="display:none;">\n                        <input id="' +
                      o +
                      '" type="file" multiple="multiple" accept="image/jpg,image/jpeg,image/png,image/gif,image/bmp"/>\n                    </div>\n                </div>',
                    events: [
                      {
                        selector: '#' + i,
                        type: 'click',
                        fn: function () {
                          var e = a('#' + o),
                            t = e[0]
                          if (!t) return !0
                          t.click()
                        },
                      },
                      {
                        selector: '#' + o,
                        type: 'change',
                        fn: function () {
                          var e = a('#' + o),
                            n = e[0]
                          if (!n) return !0
                          var i = n.files
                          return i.length && t.uploadImg(i), !0
                        },
                      },
                    ],
                  },
                  {
                    title: '\u7f51\u7edc\u56fe\u7247',
                    tpl:
                      '<div>\n                    <input id="' +
                      r +
                      '" type="text" class="block" placeholder="\u56fe\u7247\u94fe\u63a5"/></td>\n                    <div class="w-e-button-container">\n                        <button id="' +
                      c +
                      '" class="right">\u63d2\u5165</button>\n                    </div>\n                </div>',
                    events: [
                      {
                        selector: '#' + c,
                        type: 'click',
                        fn: function () {
                          var e = a('#' + r),
                            n = e.val().trim()
                          return n && t.insertLinkImg(n), !0
                        },
                      },
                    ],
                  },
                ],
                s = []
              ;(n.uploadImgShowBase64 || n.uploadImgServer || n.customUploadImg) && window.FileReader && s.push(l[0]), n.showLinkImg && s.push(l[1])
              var A = new C(this, { width: 300, tabs: s })
              A.show(), (this.panel = A)
            },
            tryChangeActive: function (e) {
              var t = this.editor,
                n = this.$elem
              t._selectedImg ? ((this._active = !0), n.addClass('w-e-active')) : ((this._active = !1), n.removeClass('w-e-active'))
            },
          })
        var L = {}
        function j(e) {
          ;(this.editor = e), (this.menus = {})
        }
        function O(e) {
          var t = e.clipboardData || (e.originalEvent && e.originalEvent.clipboardData),
            n = void 0
          return (n = null == t ? window.clipboardData && window.clipboardData.getData('text') : t.getData('text/plain')), d(n)
        }
        function Y(e, t, n) {
          var i = e.clipboardData || (e.originalEvent && e.originalEvent.clipboardData),
            o = void 0,
            r = void 0
          if (
            (null == i
              ? (o = window.clipboardData && window.clipboardData.getData('text'))
              : ((o = i.getData('text/plain')), (r = i.getData('text/html'))),
            !r && o && (r = '<p>' + d(o) + '</p>'),
            r)
          ) {
            var a = r.split('</html>')
            return (
              2 === a.length && (r = a[0]),
              (r = r.replace(/<(meta|script|link).+?>/gim, '')),
              (r = r.replace(/<!--.*?-->/gm, '')),
              (r = r.replace(/\s?data-.+?=('|").+?('|")/gim, '')),
              n && (r = r.replace(/<img.+?>/gim, '')),
              (r = t ? r.replace(/\s?(class|style)=('|").*?('|")/gim, '') : r.replace(/\s?class=('|").*?('|")/gim, '')),
              r
            )
          }
        }
        function H(e) {
          var t = [],
            n = O(e)
          if (n) return t
          var i = e.clipboardData || (e.originalEvent && e.originalEvent.clipboardData) || {},
            o = i.items
          return o
            ? (s(o, function (e, n) {
                var i = n.type
                ;/image/i.test(i) && t.push(n.getAsFile())
              }),
              t)
            : t
        }
        function z(e) {
          var t = [],
            n = e.childNodes() || []
          return (
            n.forEach(function (e) {
              var n = void 0,
                i = e.nodeType
              if ((3 === i && ((n = e.textContent), (n = d(n))), 1 === i)) {
                ;(n = {}), (n.tag = e.nodeName.toLowerCase())
                for (var o = [], r = e.attributes || {}, c = r.length || 0, l = 0; l < c; l++) {
                  var s = r[l]
                  o.push({ name: s.name, value: s.value })
                }
                ;(n.attrs = o), (n.children = z(a(e)))
              }
              t.push(n)
            }),
            t
          )
        }
        function G(e) {
          this.editor = e
        }
        function J(e) {
          this.editor = e
        }
        function $(e) {
          ;(this.editor = e), (this._currentRange = null)
        }
        function V(e) {
          ;(this.editor = e),
            (this._time = 0),
            (this._isShow = !1),
            (this._isRender = !1),
            (this._timeoutId = 0),
            (this.$textContainer = e.$textContainerElem),
            (this.$bar = a('<div class="w-e-progress"></div>'))
        }
        ;(L.bold = f),
          (L.head = g),
          (L.fontSize = w),
          (L.fontName = E),
          (L.link = x),
          (L.italic = B),
          (L.redo = I),
          (L.strikeThrough = k),
          (L.underline = Q),
          (L.undo = N),
          (L.list = M),
          (L.justify = S),
          (L.foreColor = D),
          (L.backColor = F),
          (L.quote = R),
          (L.code = _),
          (L.emoticon = T),
          (L.table = P),
          (L.video = U),
          (L.image = Z),
          (j.prototype = {
            constructor: j,
            init: function () {
              var e = this,
                t = this.editor,
                n = t.config || {},
                i = n.menus || []
              i.forEach(function (n) {
                var i = L[n]
                i && 'function' === typeof i && (e.menus[n] = new i(t))
              }),
                this._addToToolbar(),
                this._bindEvent()
            },
            _addToToolbar: function () {
              var e = this.editor,
                t = e.$toolbarElem,
                n = this.menus,
                i = e.config,
                o = i.zIndex + 1
              s(n, function (e, n) {
                var i = n.$elem
                i && (i.css('z-index', o), t.append(i))
              })
            },
            _bindEvent: function () {
              var e = this.menus,
                t = this.editor
              s(e, function (e, n) {
                var i = n.type
                if (i) {
                  var o = n.$elem,
                    r = n.droplist
                  n.panel
                  'click' === i &&
                    n.onClick &&
                    o.on('click', function (e) {
                      null != t.selection.getRange() && n.onClick(e)
                    }),
                    'droplist' === i &&
                      r &&
                      o
                        .on('mouseenter', function (e) {
                          null != t.selection.getRange() &&
                            (r.showTimeoutId = setTimeout(function () {
                              r.show()
                            }, 200))
                        })
                        .on('mouseleave', function (e) {
                          r.hideTimeoutId = setTimeout(function () {
                            r.hide()
                          }, 0)
                        }),
                    'panel' === i &&
                      n.onClick &&
                      o.on('click', function (e) {
                        e.stopPropagation(), null != t.selection.getRange() && n.onClick(e)
                      })
                }
              })
            },
            changeActive: function () {
              var e = this.menus
              s(e, function (e, t) {
                t.tryChangeActive &&
                  setTimeout(function () {
                    t.tryChangeActive()
                  }, 100)
              })
            },
          }),
          (G.prototype = {
            constructor: G,
            init: function () {
              this._bindEvent()
            },
            clear: function () {
              this.html('<p><br></p>')
            },
            html: function (e) {
              var t = this.editor,
                n = t.$textElem,
                i = void 0
              if (null == e) return (i = n.html()), (i = i.replace(/\u200b/gm, '')), i
              n.html(e), t.initSelection()
            },
            getJSON: function () {
              var e = this.editor,
                t = e.$textElem
              return z(t)
            },
            text: function (e) {
              var t = this.editor,
                n = t.$textElem,
                i = void 0
              if (null == e) return (i = n.text()), (i = i.replace(/\u200b/gm, '')), i
              n.text('<p>' + e + '</p>'), t.initSelection()
            },
            append: function (e) {
              var t = this.editor,
                n = t.$textElem
              n.append(a(e)), t.initSelection()
            },
            _bindEvent: function () {
              this._saveRangeRealTime(),
                this._enterKeyHandle(),
                this._clearHandle(),
                this._pasteHandle(),
                this._tabHandle(),
                this._imgHandle(),
                this._dragHandle()
            },
            _saveRangeRealTime: function () {
              var e = this.editor,
                t = e.$textElem
              function n(t) {
                e.selection.saveRange(), e.menus.changeActive()
              }
              t.on('keyup', n),
                t.on('mousedown', function (e) {
                  t.on('mouseleave', n)
                }),
                t.on('mouseup', function (e) {
                  n(), t.off('mouseleave', n)
                })
            },
            _enterKeyHandle: function () {
              var e = this.editor,
                t = e.$textElem
              function n(t) {
                var n = a('<p><br></p>')
                n.insertBefore(t), e.selection.createRangeByElem(n, !0), e.selection.restoreSelection(), t.remove()
              }
              function i(i) {
                var o = e.selection.getSelectionContainerElem(),
                  r = o.parent()
                if ('<code><br></code>' !== r.html()) {
                  if (r.equal(t)) {
                    var a = o.getNodeName()
                    'P' !== a && (o.text() || n(o))
                  }
                } else n(o)
              }
              function o(t) {
                var n = e.selection.getSelectionContainerElem()
                if (n) {
                  var i = n.parent(),
                    o = n.getNodeName(),
                    r = i.getNodeName()
                  if ('CODE' === o && 'PRE' === r && e.cmd.queryCommandSupported('insertHTML')) {
                    if (!0 === e._willBreakCode) {
                      var c = a('<p><br></p>')
                      return (
                        c.insertAfter(i),
                        e.selection.createRangeByElem(c, !0),
                        e.selection.restoreSelection(),
                        (e._willBreakCode = !1),
                        void t.preventDefault()
                      )
                    }
                    var l = e.selection.getRange().startOffset
                    e.cmd.do('insertHTML', '\n'), e.selection.saveRange(), e.selection.getRange().startOffset === l && e.cmd.do('insertHTML', '\n')
                    var s = n.html().length
                    e.selection.getRange().startOffset + 1 === s && (e._willBreakCode = !0), t.preventDefault()
                  }
                }
              }
              t.on('keyup', function (e) {
                13 === e.keyCode && i(e)
              }),
                t.on('keydown', function (t) {
                  13 === t.keyCode ? o(t) : (e._willBreakCode = !1)
                })
            },
            _clearHandle: function () {
              var e = this.editor,
                t = e.$textElem
              t.on('keydown', function (e) {
                if (8 === e.keyCode) {
                  var n = t.html().toLowerCase().trim()
                  '<p><br></p>' !== n || e.preventDefault()
                }
              }),
                t.on('keyup', function (n) {
                  if (8 === n.keyCode) {
                    var i = void 0,
                      o = t.html().toLowerCase().trim()
                    ;(o && '<br>' !== o) ||
                      ((i = a('<p><br/></p>')), t.html(''), t.append(i), e.selection.createRangeByElem(i, !1, !0), e.selection.restoreSelection())
                  }
                })
            },
            _pasteHandle: function () {
              var e = this.editor,
                t = e.config,
                n = t.pasteFilterStyle,
                i = t.pasteTextHandle,
                o = t.pasteIgnoreImg,
                r = e.$textElem,
                a = 0
              function c() {
                var e = Date.now(),
                  t = !1
                return e - a >= 100 && (t = !0), (a = e), t
              }
              function s() {
                a = 0
              }
              r.on('paste', function (t) {
                if (!l.isIE() && (t.preventDefault(), c())) {
                  var r = Y(t, n, o),
                    a = O(t)
                  a = a.replace(/\n/gm, '<br>')
                  var A = e.selection.getSelectionContainerElem()
                  if (A) {
                    var u = A.getNodeName()
                    if ('CODE' === u || 'PRE' === u) return i && p(i) && (a = '' + (i(a) || '')), void e.cmd.do('insertHTML', '<p>' + a + '</p>')
                    if (r)
                      try {
                        i && p(i) && (r = '' + (i(r) || '')), e.cmd.do('insertHTML', r)
                      } catch (d) {
                        i && p(i) && (a = '' + (i(a) || '')), e.cmd.do('insertHTML', '<p>' + a + '</p>')
                      }
                    else s()
                  }
                }
              }),
                r.on('paste', function (t) {
                  if (!l.isIE() && (t.preventDefault(), c())) {
                    var n = H(t)
                    if (n && n.length) {
                      var i = e.selection.getSelectionContainerElem()
                      if (i) {
                        var o = i.getNodeName()
                        if ('CODE' !== o && 'PRE' !== o) {
                          var r = e.uploadImg
                          r.uploadImg(n)
                        }
                      }
                    }
                  }
                })
            },
            _tabHandle: function () {
              var e = this.editor,
                t = e.$textElem
              t.on('keydown', function (t) {
                if (9 === t.keyCode && e.cmd.queryCommandSupported('insertHTML')) {
                  var n = e.selection.getSelectionContainerElem()
                  if (n) {
                    var i = n.parent(),
                      o = n.getNodeName(),
                      r = i.getNodeName()
                    'CODE' === o && 'PRE' === r ? e.cmd.do('insertHTML', '    ') : e.cmd.do('insertHTML', '&nbsp;&nbsp;&nbsp;&nbsp;'),
                      t.preventDefault()
                  }
                }
              })
            },
            _imgHandle: function () {
              var e = this.editor,
                t = e.$textElem
              t.on('click', 'img', function (t) {
                var n = this,
                  i = a(n)
                '1' !== i.attr('data-w-e') && ((e._selectedImg = i), e.selection.createRangeByElem(i), e.selection.restoreSelection())
              }),
                t.on('click  keyup', function (t) {
                  t.target.matches('img') || (e._selectedImg = null)
                })
            },
            _dragHandle: function () {
              var e = this.editor,
                t = a(document)
              t.on('dragleave drop dragenter dragover', function (e) {
                e.preventDefault()
              })
              var n = e.$textElem
              n.on('drop', function (t) {
                t.preventDefault()
                var n = t.dataTransfer && t.dataTransfer.files
                if (n && n.length) {
                  var i = e.uploadImg
                  i.uploadImg(n)
                }
              })
            },
          }),
          (J.prototype = {
            constructor: J,
            do: function (e, t) {
              var n = this.editor
              if ((n._useStyleWithCSS || (document.execCommand('styleWithCSS', null, !0), (n._useStyleWithCSS = !0)), n.selection.getRange())) {
                n.selection.restoreSelection()
                var i = '_' + e
                this[i] ? this[i](t) : this._execCommand(e, t),
                  n.menus.changeActive(),
                  n.selection.saveRange(),
                  n.selection.restoreSelection(),
                  n.change && n.change()
              }
            },
            _insertHTML: function (e) {
              var t = this.editor,
                n = t.selection.getRange()
              this.queryCommandSupported('insertHTML')
                ? this._execCommand('insertHTML', e)
                : n.insertNode
                ? (n.deleteContents(), n.insertNode(a(e)[0]))
                : n.pasteHTML && n.pasteHTML(e)
            },
            _insertElem: function (e) {
              var t = this.editor,
                n = t.selection.getRange()
              n.insertNode && (n.deleteContents(), n.insertNode(e[0]))
            },
            _execCommand: function (e, t) {
              document.execCommand(e, !1, t)
            },
            queryCommandValue: function (e) {
              return document.queryCommandValue(e)
            },
            queryCommandState: function (e) {
              return document.queryCommandState(e)
            },
            queryCommandSupported: function (e) {
              return document.queryCommandSupported(e)
            },
          }),
          ($.prototype = {
            constructor: $,
            getRange: function () {
              return this._currentRange
            },
            saveRange: function (e) {
              if (e) this._currentRange = e
              else {
                var t = window.getSelection()
                if (0 !== t.rangeCount) {
                  var n = t.getRangeAt(0),
                    i = this.getSelectionContainerElem(n)
                  if (i && 'false' !== i.attr('contenteditable') && !i.parentUntil('[contenteditable=false]')) {
                    var o = this.editor,
                      r = o.$textElem
                    r.isContain(i) && (this._currentRange = n)
                  }
                }
              }
            },
            collapseRange: function (e) {
              null == e && (e = !1)
              var t = this._currentRange
              t && t.collapse(e)
            },
            getSelectionText: function () {
              var e = this._currentRange
              return e ? this._currentRange.toString() : ''
            },
            getSelectionContainerElem: function (e) {
              e = e || this._currentRange
              var t = void 0
              if (e) return (t = e.commonAncestorContainer), a(1 === t.nodeType ? t : t.parentNode)
            },
            getSelectionStartElem: function (e) {
              e = e || this._currentRange
              var t = void 0
              if (e) return (t = e.startContainer), a(1 === t.nodeType ? t : t.parentNode)
            },
            getSelectionEndElem: function (e) {
              e = e || this._currentRange
              var t = void 0
              if (e) return (t = e.endContainer), a(1 === t.nodeType ? t : t.parentNode)
            },
            isSelectionEmpty: function () {
              var e = this._currentRange
              return !(!e || !e.startContainer || e.startContainer !== e.endContainer || e.startOffset !== e.endOffset)
            },
            restoreSelection: function () {
              var e = window.getSelection()
              e.removeAllRanges(), e.addRange(this._currentRange)
            },
            createEmptyRange: function () {
              var e = this.editor,
                t = this.getRange(),
                n = void 0
              if (t && this.isSelectionEmpty())
                try {
                  l.isWebkit()
                    ? (e.cmd.do('insertHTML', '&#8203;'), t.setEnd(t.endContainer, t.endOffset + 1), this.saveRange(t))
                    : ((n = a('<strong>&#8203;</strong>')), e.cmd.do('insertElem', n), this.createRangeByElem(n, !0))
                } catch (i) {}
            },
            createRangeByElem: function (e, t, n) {
              if (e.length) {
                var i = e[0],
                  o = document.createRange()
                n ? o.selectNodeContents(i) : o.selectNode(i), 'boolean' === typeof t && o.collapse(t), this.saveRange(o)
              }
            },
          }),
          (V.prototype = {
            constructor: V,
            show: function (e) {
              var t = this
              if (!this._isShow) {
                this._isShow = !0
                var n = this.$bar
                if (this._isRender) this._isRender = !0
                else {
                  var i = this.$textContainer
                  i.append(n)
                }
                Date.now() - this._time > 100 && e <= 1 && (n.css('width', 100 * e + '%'), (this._time = Date.now()))
                var o = this._timeoutId
                o && clearTimeout(o),
                  (o = setTimeout(function () {
                    t._hide()
                  }, 500))
              }
            },
            _hide: function () {
              var e = this.$bar
              e.remove(), (this._time = 0), (this._isShow = !1), (this._isRender = !1)
            },
          })
        var K =
          'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
            ? function (e) {
                return typeof e
              }
            : function (e) {
                return e && 'function' === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
              }
        function q(e) {
          this.editor = e
        }
        q.prototype = {
          constructor: q,
          _alert: function (e, t) {
            var n = this.editor,
              i = n.config.debug,
              o = n.config.customAlert
            if (i) throw new Error('wangEditor: ' + (t || e))
            o && 'function' === typeof o ? o(e) : alert(e)
          },
          insertLinkImg: function (e) {
            var t = this
            if (e) {
              var n = this.editor,
                i = n.config,
                o = i.linkImgCheck,
                r = void 0
              if (o && 'function' === typeof o && ((r = o(e)), 'string' === typeof r)) alert(r)
              else {
                n.cmd.do('insertHTML', '<img src="' + e + '" style="max-width:100%;"/>')
                var a = document.createElement('img')
                ;(a.onload = function () {
                  var t = i.linkImgCallback
                  t && 'function' === typeof t && t(e), (a = null)
                }),
                  (a.onerror = function () {
                    ;(a = null),
                      t._alert(
                        '\u63d2\u5165\u56fe\u7247\u9519\u8bef',
                        'wangEditor: \u63d2\u5165\u56fe\u7247\u51fa\u9519\uff0c\u56fe\u7247\u94fe\u63a5\u662f "' +
                          e +
                          '"\uff0c\u4e0b\u8f7d\u8be5\u94fe\u63a5\u5931\u8d25',
                      )
                  }),
                  (a.onabort = function () {
                    a = null
                  }),
                  (a.src = e)
              }
            }
          },
          uploadImg: function (e) {
            var t = this
            if (e && e.length) {
              var n = this.editor,
                i = n.config,
                o = i.uploadImgServer,
                r = i.uploadImgShowBase64,
                a = i.uploadImgMaxSize,
                c = a / 1024 / 1024,
                l = i.uploadImgMaxLength || 1e4,
                u = i.uploadFileName || '',
                d = i.uploadImgParams || {},
                p = i.uploadImgParamsWithUrl,
                f = i.uploadImgHeaders || {},
                h = i.uploadImgHooks || {},
                m = i.uploadImgTimeout || 3e3,
                v = i.withCredentials
              null == v && (v = !1)
              var g = i.customUploadImg
              if (g || o || r) {
                var w = [],
                  E = []
                if (
                  (A(e, function (e) {
                    var t = e.name,
                      n = e.size
                    t &&
                      n &&
                      (!1 !== /\.(jpg|jpeg|png|bmp|gif|webp)$/i.test(t)
                        ? a < n
                          ? E.push('\u3010' + t + '\u3011\u5927\u4e8e ' + c + 'M')
                          : w.push(e)
                        : E.push('\u3010' + t + '\u3011\u4e0d\u662f\u56fe\u7247'))
                  }),
                  E.length)
                )
                  this._alert('\u56fe\u7247\u9a8c\u8bc1\u672a\u901a\u8fc7: \n' + E.join('\n'))
                else if (w.length > l) this._alert('\u4e00\u6b21\u6700\u591a\u4e0a\u4f20' + l + '\u5f20\u56fe\u7247')
                else if (g && 'function' === typeof g) g(w, this.insertLinkImg.bind(this))
                else {
                  var b = new FormData()
                  if (
                    (A(w, function (e) {
                      var t = u || e.name
                      b.append(t, e)
                    }),
                    o && 'string' === typeof o)
                  ) {
                    var y = o.split('#')
                    o = y[0]
                    var C = y[1] || ''
                    s(d, function (e, t) {
                      p && (o.indexOf('?') > 0 ? (o += '&') : (o += '?'), (o = o + e + '=' + t)), b.append(e, t)
                    }),
                      C && (o += '#' + C)
                    var x = new XMLHttpRequest()
                    if (
                      (x.open('POST', o),
                      (x.timeout = m),
                      (x.ontimeout = function () {
                        h.timeout && 'function' === typeof h.timeout && h.timeout(x, n), t._alert('\u4e0a\u4f20\u56fe\u7247\u8d85\u65f6')
                      }),
                      x.upload &&
                        (x.upload.onprogress = function (e) {
                          var t = void 0,
                            i = new V(n)
                          e.lengthComputable && ((t = e.loaded / e.total), i.show(t))
                        }),
                      (x.onreadystatechange = function () {
                        var e = void 0
                        if (4 === x.readyState) {
                          if (x.status < 200 || x.status >= 300)
                            return (
                              h.error && 'function' === typeof h.error && h.error(x, n),
                              void t._alert(
                                '\u4e0a\u4f20\u56fe\u7247\u53d1\u751f\u9519\u8bef',
                                '\u4e0a\u4f20\u56fe\u7247\u53d1\u751f\u9519\u8bef\uff0c\u670d\u52a1\u5668\u8fd4\u56de\u72b6\u6001\u662f ' + x.status,
                              )
                            )
                          if (((e = x.responseText), 'object' !== ('undefined' === typeof e ? 'undefined' : K(e))))
                            try {
                              e = JSON.parse(e)
                            } catch (o) {
                              return (
                                h.fail && 'function' === typeof h.fail && h.fail(x, n, e),
                                void t._alert(
                                  '\u4e0a\u4f20\u56fe\u7247\u5931\u8d25',
                                  '\u4e0a\u4f20\u56fe\u7247\u8fd4\u56de\u7ed3\u679c\u9519\u8bef\uff0c\u8fd4\u56de\u7ed3\u679c\u662f: ' + e,
                                )
                              )
                            }
                          if (h.customInsert || '0' == e.errno) {
                            if (h.customInsert && 'function' === typeof h.customInsert) h.customInsert(t.insertLinkImg.bind(t), e, n)
                            else {
                              var i = e.data || []
                              i.forEach(function (e) {
                                t.insertLinkImg(e)
                              })
                            }
                            h.success && 'function' === typeof h.success && h.success(x, n, e)
                          } else
                            h.fail && 'function' === typeof h.fail && h.fail(x, n, e),
                              t._alert(
                                '\u4e0a\u4f20\u56fe\u7247\u5931\u8d25',
                                '\u4e0a\u4f20\u56fe\u7247\u8fd4\u56de\u7ed3\u679c\u9519\u8bef\uff0c\u8fd4\u56de\u7ed3\u679c errno=' + e.errno,
                              )
                        }
                      }),
                      h.before && 'function' === typeof h.before)
                    ) {
                      var B = h.before(x, n, w)
                      if (B && 'object' === ('undefined' === typeof B ? 'undefined' : K(B)) && B.prevent) return void this._alert(B.msg)
                    }
                    return (
                      s(f, function (e, t) {
                        x.setRequestHeader(e, t)
                      }),
                      (x.withCredentials = v),
                      void x.send(b)
                    )
                  }
                  r &&
                    A(e, function (e) {
                      var n = t,
                        i = new FileReader()
                      i.readAsDataURL(e),
                        (i.onload = function () {
                          n.insertLinkImg(this.result)
                        })
                    })
                }
              }
            }
          },
        }
        var X = 1
        function W(e, t) {
          if (null == e)
            throw new Error(
              '\u9519\u8bef\uff1a\u521d\u59cb\u5316\u7f16\u8f91\u5668\u65f6\u5019\u672a\u4f20\u5165\u4efb\u4f55\u53c2\u6570\uff0c\u8bf7\u67e5\u9605\u6587\u6863',
            )
          ;(this.id = 'wangEditor-' + X++), (this.toolbarSelector = e), (this.textSelector = t), (this.customConfig = {})
        }
        W.prototype = {
          constructor: W,
          _initConfig: function () {
            var e = {}
            this.config = Object.assign(e, c, this.customConfig)
            var t = this.config.lang || {},
              n = []
            s(t, function (e, t) {
              n.push({ reg: new RegExp(e, 'img'), val: t })
            }),
              (this.config.langArgs = n)
          },
          _initDom: function () {
            var e = this,
              t = this.toolbarSelector,
              n = a(t),
              i = this.textSelector,
              o = this.config,
              r = o.zIndex,
              c = void 0,
              l = void 0,
              s = void 0,
              A = void 0
            null == i
              ? ((c = a('<div></div>')),
                (l = a('<div></div>')),
                (A = n.children()),
                n.append(c).append(l),
                c.css('background-color', '#f1f1f1').css('border', '1px solid #ccc'),
                l.css('border', '1px solid #ccc').css('border-top', 'none').css('height', '300px'))
              : ((c = n), (l = a(i)), (A = l.children())),
              (s = a('<div></div>')),
              s.attr('contenteditable', 'true').css('width', '100%').css('height', '100%'),
              A && A.length ? s.append(A) : s.append(a('<p><br></p>')),
              l.append(s),
              c.addClass('w-e-toolbar'),
              l.addClass('w-e-text-container'),
              l.css('z-index', r),
              s.addClass('w-e-text')
            var d = u('toolbar-elem')
            c.attr('id', d)
            var p = u('text-elem')
            s.attr('id', p),
              (this.$toolbarElem = c),
              (this.$textContainerElem = l),
              (this.$textElem = s),
              (this.toolbarElemId = d),
              (this.textElemId = p)
            var f = !0
            l.on('compositionstart', function () {
              f = !1
            }),
              l.on('compositionend', function () {
                f = !0
              }),
              l.on('click keyup', function () {
                f && e.change && e.change()
              }),
              c.on('click', function () {
                this.change && this.change()
              }),
              (o.onfocus || o.onblur) &&
                ((this.isFocus = !1),
                a(document).on('click', function (t) {
                  var n = s.isContain(a(t.target)),
                    i = c.isContain(a(t.target)),
                    o = c[0] == t.target
                  if (n) e.isFocus || (e.onfocus && e.onfocus()), (e.isFocus = !0)
                  else {
                    if (i && !o) return
                    e.isFocus && e.onblur && e.onblur(), (e.isFocus = !1)
                  }
                }))
          },
          _initCommand: function () {
            this.cmd = new J(this)
          },
          _initSelectionAPI: function () {
            this.selection = new $(this)
          },
          _initUploadImg: function () {
            this.uploadImg = new q(this)
          },
          _initMenus: function () {
            ;(this.menus = new j(this)), this.menus.init()
          },
          _initText: function () {
            ;(this.txt = new G(this)), this.txt.init()
          },
          initSelection: function (e) {
            var t = this.$textElem,
              n = t.children()
            if (!n.length) return t.append(a('<p><br></p>')), void this.initSelection()
            var i = n.last()
            if (e) {
              var o = i.html().toLowerCase(),
                r = i.getNodeName()
              if (('<br>' !== o && '<br/>' !== o) || 'P' !== r) return t.append(a('<p><br></p>')), void this.initSelection()
            }
            this.selection.createRangeByElem(i, !1, !0), this.selection.restoreSelection()
          },
          _bindEvent: function () {
            var e = 0,
              t = this.txt.html(),
              n = this.config,
              i = n.onchangeTimeout
            ;(i = parseInt(i, 10)), (!i || i <= 0) && (i = 200)
            var o = n.onchange
            o &&
              'function' === typeof o &&
              (this.change = function () {
                var n = this.txt.html()
                ;(n.length === t.length && n === t) ||
                  (e && clearTimeout(e),
                  (e = setTimeout(function () {
                    o(n), (t = n)
                  }, i)))
              })
            var r = n.onblur
            r &&
              'function' === typeof r &&
              (this.onblur = function () {
                var e = this.txt.html()
                r(e)
              })
            var a = n.onfocus
            a &&
              'function' === typeof a &&
              (this.onfocus = function () {
                a()
              })
          },
          create: function () {
            this._initConfig(),
              this._initDom(),
              this._initCommand(),
              this._initSelectionAPI(),
              this._initText(),
              this._initMenus(),
              this._initUploadImg(),
              this.initSelection(!0),
              this._bindEvent()
          },
          _offAllEvent: function () {
            a.offAll()
          },
        }
        try {
          document
        } catch (ie) {
          throw new Error('\u8bf7\u5728\u6d4f\u89c8\u5668\u73af\u5883\u4e0b\u8fd0\u884c')
        }
        e()
        var ee =
            '.w-e-toolbar,.w-e-text-container,.w-e-menu-panel {  padding: 0;  margin: 0;  box-sizing: border-box;}.w-e-toolbar *,.w-e-text-container *,.w-e-menu-panel * {  padding: 0;  margin: 0;  box-sizing: border-box;}.w-e-clear-fix:after {  content: "";  display: table;  clear: both;}.w-e-toolbar .w-e-droplist {  position: absolute;  left: 0;  top: 0;  background-color: #fff;  border: 1px solid #f1f1f1;  border-right-color: #ccc;  border-bottom-color: #ccc;}.w-e-toolbar .w-e-droplist .w-e-dp-title {  text-align: center;  color: #999;  line-height: 2;  border-bottom: 1px solid #f1f1f1;  font-size: 13px;}.w-e-toolbar .w-e-droplist ul.w-e-list {  list-style: none;  line-height: 1;}.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item {  color: #333;  padding: 5px 0;}.w-e-toolbar .w-e-droplist ul.w-e-list li.w-e-item:hover {  background-color: #f1f1f1;}.w-e-toolbar .w-e-droplist ul.w-e-block {  list-style: none;  text-align: left;  padding: 5px;}.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item {  display: inline-block;  *display: inline;  *zoom: 1;  padding: 3px 5px;}.w-e-toolbar .w-e-droplist ul.w-e-block li.w-e-item:hover {  background-color: #f1f1f1;}@font-face {  font-family: \'w-e-icon\';  src: url(data:application/x-font-woff;charset=utf-8;base64,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) format(\'truetype\');  font-weight: normal;  font-style: normal;}[class^="w-e-icon-"],[class*=" w-e-icon-"] {  /* use !important to prevent issues with browser extensions that change fonts */  font-family: \'w-e-icon\' !important;  speak: none;  font-style: normal;  font-weight: normal;  font-variant: normal;  text-transform: none;  line-height: 1;  /* Better Font Rendering =========== */  -webkit-font-smoothing: antialiased;  -moz-osx-font-smoothing: grayscale;}.w-e-icon-close:before {  content: "\\f00d";}.w-e-icon-upload2:before {  content: "\\e9c6";}.w-e-icon-trash-o:before {  content: "\\f014";}.w-e-icon-header:before {  content: "\\f1dc";}.w-e-icon-pencil2:before {  content: "\\e906";}.w-e-icon-paint-brush:before {  content: "\\f1fc";}.w-e-icon-image:before {  content: "\\e90d";}.w-e-icon-play:before {  content: "\\e912";}.w-e-icon-location:before {  content: "\\e947";}.w-e-icon-undo:before {  content: "\\e965";}.w-e-icon-redo:before {  content: "\\e966";}.w-e-icon-quotes-left:before {  content: "\\e977";}.w-e-icon-list-numbered:before {  content: "\\e9b9";}.w-e-icon-list2:before {  content: "\\e9bb";}.w-e-icon-link:before {  content: "\\e9cb";}.w-e-icon-happy:before {  content: "\\e9df";}.w-e-icon-bold:before {  content: "\\ea62";}.w-e-icon-underline:before {  content: "\\ea63";}.w-e-icon-italic:before {  content: "\\ea64";}.w-e-icon-strikethrough:before {  content: "\\ea65";}.w-e-icon-table2:before {  content: "\\ea71";}.w-e-icon-paragraph-left:before {  content: "\\ea77";}.w-e-icon-paragraph-center:before {  content: "\\ea78";}.w-e-icon-paragraph-right:before {  content: "\\ea79";}.w-e-icon-terminal:before {  content: "\\f120";}.w-e-icon-page-break:before {  content: "\\ea68";}.w-e-icon-cancel-circle:before {  content: "\\ea0d";}.w-e-icon-font:before {  content: "\\ea5c";}.w-e-icon-text-heigh:before {  content: "\\ea5f";}.w-e-toolbar {  display: -webkit-box;  display: -ms-flexbox;  display: flex;  padding: 0 5px;  /* flex-wrap: wrap; */  /* \u5355\u4e2a\u83dc\u5355 */}.w-e-toolbar .w-e-menu {  position: relative;  text-align: center;  padding: 5px 10px;  cursor: pointer;}.w-e-toolbar .w-e-menu i {  color: #999;}.w-e-toolbar .w-e-menu:hover i {  color: #333;}.w-e-toolbar .w-e-active i {  color: #1e88e5;}.w-e-toolbar .w-e-active:hover i {  color: #1e88e5;}.w-e-text-container .w-e-panel-container {  position: absolute;  top: 0;  left: 50%;  border: 1px solid #ccc;  border-top: 0;  box-shadow: 1px 1px 2px #ccc;  color: #333;  background-color: #fff;  /* \u4e3a emotion panel \u5b9a\u5236\u7684\u6837\u5f0f */  /* \u4e0a\u4f20\u56fe\u7247\u7684 panel \u5b9a\u5236\u6837\u5f0f */}.w-e-text-container .w-e-panel-container .w-e-panel-close {  position: absolute;  right: 0;  top: 0;  padding: 5px;  margin: 2px 5px 0 0;  cursor: pointer;  color: #999;}.w-e-text-container .w-e-panel-container .w-e-panel-close:hover {  color: #333;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-title {  list-style: none;  display: -webkit-box;  display: -ms-flexbox;  display: flex;  font-size: 14px;  margin: 2px 10px 0 10px;  border-bottom: 1px solid #f1f1f1;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-title .w-e-item {  padding: 3px 5px;  color: #999;  cursor: pointer;  margin: 0 3px;  position: relative;  top: 1px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-title .w-e-active {  color: #333;  border-bottom: 1px solid #333;  cursor: default;  font-weight: 700;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content {  padding: 10px 15px 10px 15px;  font-size: 16px;  /* \u8f93\u5165\u6846\u7684\u6837\u5f0f */  /* \u6309\u94ae\u7684\u6837\u5f0f */}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input:focus,.w-e-text-container .w-e-panel-container .w-e-panel-tab-content textarea:focus,.w-e-text-container .w-e-panel-container .w-e-panel-tab-content button:focus {  outline: none;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content textarea {  width: 100%;  border: 1px solid #ccc;  padding: 5px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content textarea:focus {  border-color: #1e88e5;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input[type=text] {  border: none;  border-bottom: 1px solid #ccc;  font-size: 14px;  height: 20px;  color: #333;  text-align: left;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input[type=text].small {  width: 30px;  text-align: center;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input[type=text].block {  display: block;  width: 100%;  margin: 10px 0;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content input[type=text]:focus {  border-bottom: 2px solid #1e88e5;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button {  font-size: 14px;  color: #1e88e5;  border: none;  padding: 5px 10px;  background-color: #fff;  cursor: pointer;  border-radius: 3px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.left {  float: left;  margin-right: 10px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.right {  float: right;  margin-left: 10px;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.gray {  color: #999;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button.red {  color: #c24f4a;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container button:hover {  background-color: #f1f1f1;}.w-e-text-container .w-e-panel-container .w-e-panel-tab-content .w-e-button-container:after {  content: "";  display: table;  clear: both;}.w-e-text-container .w-e-panel-container .w-e-emoticon-container .w-e-item {  cursor: pointer;  font-size: 18px;  padding: 0 3px;  display: inline-block;  *display: inline;  *zoom: 1;}.w-e-text-container .w-e-panel-container .w-e-up-img-container {  text-align: center;}.w-e-text-container .w-e-panel-container .w-e-up-img-container .w-e-up-btn {  display: inline-block;  *display: inline;  *zoom: 1;  color: #999;  cursor: pointer;  font-size: 60px;  line-height: 1;}.w-e-text-container .w-e-panel-container .w-e-up-img-container .w-e-up-btn:hover {  color: #333;}.w-e-text-container {  position: relative;}.w-e-text-container .w-e-progress {  position: absolute;  background-color: #1e88e5;  bottom: 0;  left: 0;  height: 1px;}.w-e-text {  padding: 0 10px;  overflow-y: scroll;}.w-e-text p,.w-e-text h1,.w-e-text h2,.w-e-text h3,.w-e-text h4,.w-e-text h5,.w-e-text table,.w-e-text pre {  margin: 10px 0;  line-height: 1.5;}.w-e-text ul,.w-e-text ol {  margin: 10px 0 10px 20px;}.w-e-text blockquote {  display: block;  border-left: 8px solid #d0e5f2;  padding: 5px 10px;  margin: 10px 0;  line-height: 1.4;  font-size: 100%;  background-color: #f1f1f1;}.w-e-text code {  display: inline-block;  *display: inline;  *zoom: 1;  background-color: #f1f1f1;  border-radius: 3px;  padding: 3px 5px;  margin: 0 3px;}.w-e-text pre code {  display: block;}.w-e-text table {  border-top: 1px solid #ccc;  border-left: 1px solid #ccc;}.w-e-text table td,.w-e-text table th {  border-bottom: 1px solid #ccc;  border-right: 1px solid #ccc;  padding: 3px 5px;}.w-e-text table th {  border-bottom: 2px solid #ccc;  text-align: center;}.w-e-text:focus {  outline: none;}.w-e-text img {  cursor: pointer;}.w-e-text img:hover {  box-shadow: 0 0 5px #333;}',
          te = document.createElement('style')
        ;(te.type = 'text/css'), (te.innerHTML = ee), document.getElementsByTagName('HEAD').item(0).appendChild(te)
        var ne = window.wangEditor || W
        return ne
      })
    },
  },
])
