;(self['webpackChunkant_design_pro'] = self['webpackChunkant_design_pro'] || []).push([
  [517],
  {
    26360: function () {},
    42433: function () {},
    64378: function (e, r, t) {
      'use strict'
      t.d(r, {
        Z: function () {
          return m
        },
      })
      var n = t(42151),
        i = (t(91210), t(60153)),
        o = t(96162),
        a = {
          icon: {
            tag: 'svg',
            attrs: { viewBox: '64 64 896 896', focusable: 'false' },
            children: [
              {
                tag: 'path',
                attrs: {
                  d: 'M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372zm5.6-532.7c53 0 89 33.8 93 83.4.3 4.2 3.8 7.4 8 7.4h56.7c2.6 0 4.7-2.1 4.7-4.7 0-86.7-68.4-147.4-162.7-147.4C407.4 290 344 364.2 344 486.8v52.3C344 660.8 407.4 734 517.3 734c94 0 162.7-58.8 162.7-141.4 0-2.6-2.1-4.7-4.7-4.7h-56.8c-4.2 0-7.6 3.2-8 7.3-4.2 46.1-40.1 77.8-93 77.8-65.3 0-102.1-47.9-102.1-133.6v-52.6c.1-87 37-135.5 102.2-135.5z',
                },
              },
            ],
          },
          name: 'copyright',
          theme: 'outlined',
        },
        u = a,
        f = t(23986),
        c = function (e, r) {
          return o.createElement(f.Z, (0, n.Z)((0, n.Z)({}, e), {}, { ref: r, icon: u }))
        }
      c.displayName = 'CopyrightOutlined'
      var l = o.forwardRef(c),
        s = (t(59116), t(23344)),
        p = (t(26360), t(54794)),
        v = t.n(p),
        y = function (e) {
          var r = e.className,
            t = e.prefixCls,
            n = e.links,
            i = e.copyright,
            a = e.style,
            u = (0, o.useContext)(s.ZP.ConfigContext),
            f = u.getPrefixCls(t || 'pro-global-footer')
          if ((null == n || !1 === n || (Array.isArray(n) && 0 === n.length)) && (null == i || !1 === i)) return null
          var c = v()(f, r)
          return o.createElement(
            'div',
            { className: c, style: a },
            n &&
              o.createElement(
                'div',
                { className: ''.concat(f, '-links') },
                n.map(function (e) {
                  return o.createElement(
                    'a',
                    { key: e.key, title: e.key, target: e.blankTarget ? '_blank' : '_self', href: e.href, rel: 'noreferrer' },
                    e.title,
                  )
                }),
              ),
            i && o.createElement('div', { className: ''.concat(f, '-copyright') }, i),
          )
        },
        d = i.Z.Footer,
        h = function (e) {
          var r = e.links,
            t = e.copyright,
            i = e.style,
            a = e.className,
            u = e.prefixCls
          return o.createElement(
            d,
            { className: a, style: (0, n.Z)({ padding: 0 }, i) },
            o.createElement(y, {
              links: r,
              prefixCls: u,
              copyright: !1 === t ? null : o.createElement(o.Fragment, null, o.createElement(l, null), ' ', t),
            }),
          )
        },
        m = h
    },
    19357: function (e, r, t) {
      'use strict'
      t.d(r, {
        nA: function () {
          return u
        },
      })
      var n = t(22018),
        i = t(21656),
        o = t.n(i),
        a = function (e, r, t) {
          if (t) {
            var i = (0, n.Z)(t.keys()).find(function (r) {
              return o()(r).test(e)
            })
            if (i) return t.get(i)
          }
          if (r) {
            var a = Object.keys(r).find(function (r) {
              return o()(r).test(e)
            })
            if (a) return r[a]
          }
          return { path: '' }
        },
        u = function (e, r) {
          var t = e.pathname,
            n = void 0 === t ? '/' : t,
            i = e.breadcrumb,
            o = e.breadcrumbMap,
            u = e.formatMessage,
            f = e.title,
            c = e.menu,
            l = void 0 === c ? { locale: !1 } : c,
            s = r ? '' : f || '',
            p = a(n, i, o)
          if (!p) return { title: s, id: '', pageName: s }
          var v = p.name
          return (
            !1 !== l.locale && p.locale && u && (v = u({ id: p.locale || '', defaultMessage: p.name })),
            v
              ? r || !f
                ? { title: v, id: p.locale || '', pageName: v }
                : { title: ''.concat(v, ' - ').concat(f), id: p.locale || '', pageName: v }
              : { title: s, id: p.locale || '', pageName: s }
          )
        },
        f = function (e, r) {
          return u(e, r).title
        }
      r['ZP'] = f
    },
    69402: function (e, r, t) {
      'use strict'
      var n = t(43141),
        i = t(22018),
        o = t(76969)
      function a(e) {
        return (0, i.Z)(e).reduce(function (e, r) {
          var t = (0, n.Z)(r, 2),
            i = t[0],
            o = t[1]
          return (e[i] = o), e
        }, {})
      }
      var u = function e(r, t, n, i) {
        var u = (0, o.Un)(r, (null === t || void 0 === t ? void 0 : t.locale) || !1, n, !0),
          f = u.menuData,
          c = u.breadcrumb
        return i ? e(i(f), t, n, void 0) : { breadcrumb: a(c), breadcrumbMap: c, menuData: f }
      }
      r['Z'] = u
    },
    76969: function (e, r, t) {
      'use strict'
      t.d(r, {
        kv: function () {
          return Fe
        },
        nG: function () {
          return He
        },
        Un: function () {
          return Ne
        },
      })
      var n = t(92712),
        i = t.n(n),
        o =
          Number.isNaN ||
          function (e) {
            return 'number' === typeof e && e !== e
          }
      function a(e, r) {
        return e === r || !(!o(e) || !o(r))
      }
      function u(e, r) {
        if (e.length !== r.length) return !1
        for (var t = 0; t < e.length; t++) if (!a(e[t], r[t])) return !1
        return !0
      }
      function f(e, r) {
        var t
        void 0 === r && (r = u)
        var n,
          i = [],
          o = !1
        function a() {
          for (var a = [], u = 0; u < arguments.length; u++) a[u] = arguments[u]
          return (o && t === this && r(a, i)) || ((n = e.apply(this, a)), (o = !0), (t = this), (i = a)), n
        }
        return a
      }
      var c = f
      function l(e) {
        var r = [],
          t = 0
        while (t < e.length) {
          var n = e[t]
          if ('*' !== n && '+' !== n && '?' !== n)
            if ('\\' !== n)
              if ('{' !== n)
                if ('}' !== n)
                  if (':' !== n)
                    if ('(' !== n) r.push({ type: 'CHAR', index: t, value: e[t++] })
                    else {
                      var i = 1,
                        o = ''
                      u = t + 1
                      if ('?' === e[u]) throw new TypeError('Pattern cannot start with "?" at ' + u)
                      while (u < e.length)
                        if ('\\' !== e[u]) {
                          if (')' === e[u]) {
                            if ((i--, 0 === i)) {
                              u++
                              break
                            }
                          } else if ('(' === e[u] && (i++, '?' !== e[u + 1])) throw new TypeError('Capturing groups are not allowed at ' + u)
                          o += e[u++]
                        } else o += e[u++] + e[u++]
                      if (i) throw new TypeError('Unbalanced pattern at ' + t)
                      if (!o) throw new TypeError('Missing pattern at ' + t)
                      r.push({ type: 'PATTERN', index: t, value: o }), (t = u)
                    }
                  else {
                    var a = '',
                      u = t + 1
                    while (u < e.length) {
                      var f = e.charCodeAt(u)
                      if (!((f >= 48 && f <= 57) || (f >= 65 && f <= 90) || (f >= 97 && f <= 122) || 95 === f)) break
                      a += e[u++]
                    }
                    if (!a) throw new TypeError('Missing parameter name at ' + t)
                    r.push({ type: 'NAME', index: t, value: a }), (t = u)
                  }
                else r.push({ type: 'CLOSE', index: t, value: e[t++] })
              else r.push({ type: 'OPEN', index: t, value: e[t++] })
            else r.push({ type: 'ESCAPED_CHAR', index: t++, value: e[t++] })
          else r.push({ type: 'MODIFIER', index: t, value: e[t++] })
        }
        return r.push({ type: 'END', index: t, value: '' }), r
      }
      function s(e, r) {
        void 0 === r && (r = {})
        var t = l(e),
          n = r.prefixes,
          i = void 0 === n ? './' : n,
          o = '[^' + p(r.delimiter || '/#?') + ']+?',
          a = [],
          u = 0,
          f = 0,
          c = '',
          s = function (e) {
            if (f < t.length && t[f].type === e) return t[f++].value
          },
          v = function (e) {
            var r = s(e)
            if (void 0 !== r) return r
            var n = t[f],
              i = n.type,
              o = n.index
            throw new TypeError('Unexpected ' + i + ' at ' + o + ', expected ' + e)
          },
          y = function () {
            var e,
              r = ''
            while ((e = s('CHAR') || s('ESCAPED_CHAR'))) r += e
            return r
          }
        while (f < t.length) {
          var d = s('CHAR'),
            h = s('NAME'),
            m = s('PATTERN')
          if (h || m) {
            var b = d || ''
            ;-1 === i.indexOf(b) && ((c += b), (b = '')),
              c && (a.push(c), (c = '')),
              a.push({ name: h || u++, prefix: b, suffix: '', pattern: m || o, modifier: s('MODIFIER') || '' })
          } else {
            var g = d || s('ESCAPED_CHAR')
            if (g) c += g
            else {
              c && (a.push(c), (c = ''))
              var O = s('OPEN')
              if (O) {
                b = y()
                var w = s('NAME') || '',
                  E = s('PATTERN') || '',
                  j = y()
                v('CLOSE'), a.push({ name: w || (E ? u++ : ''), pattern: w && !E ? o : E, prefix: b, suffix: j, modifier: s('MODIFIER') || '' })
              } else v('END')
            }
          }
        }
        return a
      }
      function p(e) {
        return e.replace(/([.+*?=^!:${}()[\]|/\\])/g, '\\$1')
      }
      function v(e) {
        return e && e.sensitive ? '' : 'i'
      }
      function y(e, r) {
        if (!r) return e
        var t = e.source.match(/\((?!\?)/g)
        if (t) for (var n = 0; n < t.length; n++) r.push({ name: n, prefix: '', suffix: '', modifier: '', pattern: '' })
        return e
      }
      function d(e, r, t) {
        var n = e.map(function (e) {
          return b(e, r, t).source
        })
        return new RegExp('(?:' + n.join('|') + ')', v(t))
      }
      function h(e, r, t) {
        return m(s(e, t), r, t)
      }
      function m(e, r, t) {
        void 0 === t && (t = {})
        for (
          var n = t.strict,
            i = void 0 !== n && n,
            o = t.start,
            a = void 0 === o || o,
            u = t.end,
            f = void 0 === u || u,
            c = t.encode,
            l =
              void 0 === c
                ? function (e) {
                    return e
                  }
                : c,
            s = '[' + p(t.endsWith || '') + ']|$',
            y = '[' + p(t.delimiter || '/#?') + ']',
            d = a ? '^' : '',
            h = 0,
            m = e;
          h < m.length;
          h++
        ) {
          var b = m[h]
          if ('string' === typeof b) d += p(l(b))
          else {
            var g = p(l(b.prefix)),
              O = p(l(b.suffix))
            if (b.pattern)
              if ((r && r.push(b), g || O))
                if ('+' === b.modifier || '*' === b.modifier) {
                  var w = '*' === b.modifier ? '?' : ''
                  d += '(?:' + g + '((?:' + b.pattern + ')(?:' + O + g + '(?:' + b.pattern + '))*)' + O + ')' + w
                } else d += '(?:' + g + '(' + b.pattern + ')' + O + ')' + b.modifier
              else d += '(' + b.pattern + ')' + b.modifier
            else d += '(?:' + g + O + ')' + b.modifier
          }
        }
        if (f) i || (d += y + '?'), (d += t.endsWith ? '(?=' + s + ')' : '$')
        else {
          var E = e[e.length - 1],
            j = 'string' === typeof E ? y.indexOf(E[E.length - 1]) > -1 : void 0 === E
          i || (d += '(?:' + y + '(?=' + s + '))?'), j || (d += '(?=' + y + '|' + s + ')')
        }
        return new RegExp(d, v(t))
      }
      function b(e, r, t) {
        return e instanceof RegExp ? y(e, r) : Array.isArray(e) ? d(e, r, t) : h(e, r, t)
      }
      function g(e, r) {
        return (r >>> e) | (r << (32 - e))
      }
      function O(e, r, t) {
        return (e & r) ^ (~e & t)
      }
      function w(e, r, t) {
        return (e & r) ^ (e & t) ^ (r & t)
      }
      function E(e) {
        return g(2, e) ^ g(13, e) ^ g(22, e)
      }
      function j(e) {
        return g(6, e) ^ g(11, e) ^ g(25, e)
      }
      function A(e) {
        return g(7, e) ^ g(18, e) ^ (e >>> 3)
      }
      function x(e) {
        return g(17, e) ^ g(19, e) ^ (e >>> 10)
      }
      function S(e, r) {
        return (e[15 & r] += x(e[(r + 14) & 15]) + e[(r + 9) & 15] + A(e[(r + 1) & 15]))
      }
      var P,
        k,
        C,
        M = [
          1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
          1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
          2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
          1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909,
          275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452,
          2361852424, 2428436474, 2756734187, 3204031479, 3329325298,
        ],
        _ = '0123456789abcdef'
      function R(e, r) {
        var t = (65535 & e) + (65535 & r),
          n = (e >> 16) + (r >> 16) + (t >> 16)
        return (n << 16) | (65535 & t)
      }
      function N() {
        ;(P = new Array(8)),
          (k = new Array(2)),
          (C = new Array(64)),
          (k[0] = k[1] = 0),
          (P[0] = 1779033703),
          (P[1] = 3144134277),
          (P[2] = 1013904242),
          (P[3] = 2773480762),
          (P[4] = 1359893119),
          (P[5] = 2600822924),
          (P[6] = 528734635),
          (P[7] = 1541459225)
      }
      function D() {
        var e,
          r,
          t,
          n,
          i,
          o,
          a,
          u,
          f,
          c,
          l = new Array(16)
        ;(e = P[0]), (r = P[1]), (t = P[2]), (n = P[3]), (i = P[4]), (o = P[5]), (a = P[6]), (u = P[7])
        for (var s = 0; s < 16; s++) l[s] = C[3 + (s << 2)] | (C[2 + (s << 2)] << 8) | (C[1 + (s << 2)] << 16) | (C[s << 2] << 24)
        for (var p = 0; p < 64; p++)
          (f = u + j(i) + O(i, o, a) + M[p]),
            (f += p < 16 ? l[p] : S(l, p)),
            (c = E(e) + w(e, r, t)),
            (u = a),
            (a = o),
            (o = i),
            (i = R(n, f)),
            (n = t),
            (t = r),
            (r = e),
            (e = R(f, c))
        ;(P[0] += e), (P[1] += r), (P[2] += t), (P[3] += n), (P[4] += i), (P[5] += o), (P[6] += a), (P[7] += u)
      }
      function T(e, r) {
        var t,
          n,
          i = 0
        n = (k[0] >> 3) & 63
        var o = 63 & r
        for ((k[0] += r << 3) < r << 3 && k[1]++, k[1] += r >> 29, t = 0; t + 63 < r; t += 64) {
          for (var a = n; a < 64; a++) C[a] = e.charCodeAt(i++)
          D(), (n = 0)
        }
        for (var u = 0; u < o; u++) C[u] = e.charCodeAt(i++)
      }
      function I() {
        var e = (k[0] >> 3) & 63
        if (((C[e++] = 128), e <= 56)) for (var r = e; r < 56; r++) C[r] = 0
        else {
          for (var t = e; t < 64; t++) C[t] = 0
          D()
          for (var n = 0; n < 56; n++) C[n] = 0
        }
        ;(C[56] = (k[1] >>> 24) & 255),
          (C[57] = (k[1] >>> 16) & 255),
          (C[58] = (k[1] >>> 8) & 255),
          (C[59] = 255 & k[1]),
          (C[60] = (k[0] >>> 24) & 255),
          (C[61] = (k[0] >>> 16) & 255),
          (C[62] = (k[0] >>> 8) & 255),
          (C[63] = 255 & k[0]),
          D()
      }
      function Z() {
        for (var e = new String(), r = 0; r < 8; r++) for (var t = 28; t >= 0; t -= 4) e += _.charAt((P[r] >>> t) & 15)
        return e
      }
      function F(e) {
        return N(), T(e, e.length), I(), Z()
      }
      var $ = F
      function z(e) {
        return (
          (z =
            'function' === typeof Symbol && 'symbol' === typeof Symbol.iterator
              ? function (e) {
                  return typeof e
                }
              : function (e) {
                  return e && 'function' === typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e
                }),
          z(e)
        )
      }
      var H = ['pro_layout_parentKeys', 'children', 'icon', 'flatMenu', 'indexRoute', 'routes']
      function K(e, r) {
        return W(e) || B(e, r) || fe(e, r) || U()
      }
      function U() {
        throw new TypeError(
          'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      function B(e, r) {
        var t = null == e ? null : ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
        if (null != t) {
          var n,
            i,
            o = [],
            a = !0,
            u = !1
          try {
            for (t = t.call(e); !(a = (n = t.next()).done); a = !0) if ((o.push(n.value), r && o.length === r)) break
          } catch (f) {
            ;(u = !0), (i = f)
          } finally {
            try {
              a || null == t['return'] || t['return']()
            } finally {
              if (u) throw i
            }
          }
          return o
        }
      }
      function W(e) {
        if (Array.isArray(e)) return e
      }
      function L(e, r) {
        var t = ('undefined' !== typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
        if (!t) {
          if (Array.isArray(e) || (t = fe(e)) || (r && e && 'number' === typeof e.length)) {
            t && (e = t)
            var n = 0,
              i = function () {}
            return {
              s: i,
              n: function () {
                return n >= e.length ? { done: !0 } : { done: !1, value: e[n++] }
              },
              e: function (e) {
                throw e
              },
              f: i,
            }
          }
          throw new TypeError(
            'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
          )
        }
        var o,
          a = !0,
          u = !1
        return {
          s: function () {
            t = t.call(e)
          },
          n: function () {
            var e = t.next()
            return (a = e.done), e
          },
          e: function (e) {
            ;(u = !0), (o = e)
          },
          f: function () {
            try {
              a || null == t.return || t.return()
            } finally {
              if (u) throw o
            }
          },
        }
      }
      function V(e, r) {
        if (!(e instanceof r)) throw new TypeError('Cannot call a class as a function')
      }
      function G(e, r) {
        for (var t = 0; t < r.length; t++) {
          var n = r[t]
          ;(n.enumerable = n.enumerable || !1), (n.configurable = !0), 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }
      function J(e, r, t) {
        return r && G(e.prototype, r), t && G(e, t), e
      }
      function Y(e, r) {
        if ('function' !== typeof r && null !== r) throw new TypeError('Super expression must either be null or a function')
        ;(e.prototype = Object.create(r && r.prototype, { constructor: { value: e, writable: !0, configurable: !0 } })), r && ie(e, r)
      }
      function q(e) {
        var r = te()
        return function () {
          var t,
            n = oe(e)
          if (r) {
            var i = oe(this).constructor
            t = Reflect.construct(n, arguments, i)
          } else t = n.apply(this, arguments)
          return Q(this, t)
        }
      }
      function Q(e, r) {
        if (r && ('object' === z(r) || 'function' === typeof r)) return r
        if (void 0 !== r) throw new TypeError('Derived constructors may only return object or undefined')
        return X(e)
      }
      function X(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
        return e
      }
      function ee(e) {
        var r = 'function' === typeof Map ? new Map() : void 0
        return (
          (ee = function (e) {
            if (null === e || !ne(e)) return e
            if ('function' !== typeof e) throw new TypeError('Super expression must either be null or a function')
            if ('undefined' !== typeof r) {
              if (r.has(e)) return r.get(e)
              r.set(e, t)
            }
            function t() {
              return re(e, arguments, oe(this).constructor)
            }
            return (t.prototype = Object.create(e.prototype, { constructor: { value: t, enumerable: !1, writable: !0, configurable: !0 } })), ie(t, e)
          }),
          ee(e)
        )
      }
      function re(e, r, t) {
        return (
          (re = te()
            ? Reflect.construct
            : function (e, r, t) {
                var n = [null]
                n.push.apply(n, r)
                var i = Function.bind.apply(e, n),
                  o = new i()
                return t && ie(o, t.prototype), o
              }),
          re.apply(null, arguments)
        )
      }
      function te() {
        if ('undefined' === typeof Reflect || !Reflect.construct) return !1
        if (Reflect.construct.sham) return !1
        if ('function' === typeof Proxy) return !0
        try {
          return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
        } catch (e) {
          return !1
        }
      }
      function ne(e) {
        return -1 !== Function.toString.call(e).indexOf('[native code]')
      }
      function ie(e, r) {
        return (
          (ie =
            Object.setPrototypeOf ||
            function (e, r) {
              return (e.__proto__ = r), e
            }),
          ie(e, r)
        )
      }
      function oe(e) {
        return (
          (oe = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e)
              }),
          oe(e)
        )
      }
      function ae(e) {
        return le(e) || ce(e) || fe(e) || ue()
      }
      function ue() {
        throw new TypeError(
          'Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.',
        )
      }
      function fe(e, r) {
        if (e) {
          if ('string' === typeof e) return se(e, r)
          var t = Object.prototype.toString.call(e).slice(8, -1)
          return (
            'Object' === t && e.constructor && (t = e.constructor.name),
            'Map' === t || 'Set' === t ? Array.from(e) : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? se(e, r) : void 0
          )
        }
      }
      function ce(e) {
        if (('undefined' !== typeof Symbol && null != e[Symbol.iterator]) || null != e['@@iterator']) return Array.from(e)
      }
      function le(e) {
        if (Array.isArray(e)) return se(e)
      }
      function se(e, r) {
        ;(null == r || r > e.length) && (r = e.length)
        for (var t = 0, n = new Array(r); t < r; t++) n[t] = e[t]
        return n
      }
      function pe(e, r) {
        if (null == e) return {}
        var t,
          n,
          i = ve(e, r)
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e)
          for (n = 0; n < o.length; n++) (t = o[n]), r.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(e, t) && (i[t] = e[t]))
        }
        return i
      }
      function ve(e, r) {
        if (null == e) return {}
        var t,
          n,
          i = {},
          o = Object.keys(e)
        for (n = 0; n < o.length; n++) (t = o[n]), r.indexOf(t) >= 0 || (i[t] = e[t])
        return i
      }
      function ye(e, r) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
      }
      function de(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {}
          r % 2
            ? ye(Object(t), !0).forEach(function (r) {
                he(e, r, t[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : ye(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
              })
        }
        return e
      }
      function he(e, r, t) {
        return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[r] = t), e
      }
      var me = 'routes'
      function be(e) {
        return e.split('?')[0].split('#')[0]
      }
      var ge = function (e) {
          if (!e.startsWith('http')) return !1
          try {
            var r = new URL(e)
            return !!r
          } catch (t) {
            return !1
          }
        },
        Oe = function (e) {
          var r = e.path
          if (!r || '/' === r)
            try {
              return '/'.concat($(JSON.stringify(e)))
            } catch (t) {}
          return r ? be(r) : r
        },
        we = function (e, r) {
          var t = e.name,
            n = e.locale
          return !(('locale' in e && !1 === n) || !t) && (e.locale || ''.concat(r, '.').concat(t))
        },
        Ee = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : '',
            r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : '/'
          return (e || r).startsWith('/') || ge(e) ? e : '/'.concat(r, '/').concat(e).replace(/\/\//g, '/').replace(/\/\//g, '/')
        },
        je = function (e, r) {
          var t = e.menu,
            n = void 0 === t ? {} : t,
            i = e.indexRoute,
            o = e.path,
            a = void 0 === o ? '' : o,
            u = e.children || e[me],
            f = n.name,
            c = void 0 === f ? e.name : f,
            l = n.icon,
            s = void 0 === l ? e.icon : l,
            p = n.hideChildren,
            v = void 0 === p ? e.hideChildren : p,
            y = n.flatMenu,
            d = void 0 === y ? e.flatMenu : y,
            h = i && 'redirect' !== Object.keys(i).join(',') ? [de({ path: a, menu: n }, i)].concat(u || []) : u,
            m = de({}, e)
          if ((c && (m.name = c), s && (m.icon = s), h && h.length)) {
            if (v) return delete m[me], delete m.children, m
            var b = xe(de(de({}, r), {}, { data: h }), e)
            if (d) return b
            m[me] = b
          }
          return m
        },
        Ae = function (e) {
          return Array.isArray(e) && e.length > 0
        }
      function xe(e) {
        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : { path: '/' },
          t = e.data,
          n = e.formatMessage,
          i = e.parentName,
          o = e.locale
        return t && Array.isArray(t)
          ? t
              .filter(function (e) {
                return !!e && (!!Ae(e[me]) || !!Ae(e.children) || !!e.path || !!e.layout || (e.redirect || e.unaccessible, !1))
              })
              .filter(function (e) {
                var r, t
                return (
                  e.unaccessible && delete e.name,
                  !!(
                    (null === e || void 0 === e || null === (r = e.menu) || void 0 === r ? void 0 : r.name) ||
                    (null === e || void 0 === e ? void 0 : e.flatMenu) ||
                    (null === e || void 0 === e || null === (t = e.menu) || void 0 === t ? void 0 : t.flatMenu)
                  ) || !1 !== e.menu
                )
              })
              .map(function () {
                var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { path: '/' },
                  a = t.children || t[me],
                  u = Ee(t.path, r ? r.path : '/'),
                  f = t.name,
                  c = we(t, i || 'menu'),
                  l = !1 !== c && !1 !== o && n && c ? n({ id: c, defaultMessage: f }) : f,
                  s = r.pro_layout_parentKeys,
                  p = void 0 === s ? [] : s,
                  v = (r.children, r.icon, r.flatMenu, r.indexRoute, r.routes, pe(r, H)),
                  y = new Set([].concat(ae(p), ae(t.parentKeys || [])))
                r.key && y.add(r.key)
                var d = de(
                  de(de({}, v), {}, { menu: void 0 }, t),
                  {},
                  {
                    path: u,
                    locale: c,
                    key: t.key || Oe(de(de({}, t), {}, { path: u })),
                    pro_layout_parentKeys: Array.from(y).filter(function (e) {
                      return e && '/' !== e
                    }),
                  },
                )
                if ((l ? (d.name = l) : delete d.name, void 0 === d.menu && delete d.menu, Ae(a))) {
                  var h = xe(de(de({}, e), {}, { data: a, parentName: c || '' }), d)
                  Ae(h) && ((d[me] = h), (d.children = h))
                }
                return je(d, e)
              })
              .flat(1)
          : []
      }
      var Se = c(xe, i()),
        Pe = function e() {
          var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return r
            .filter(function (e) {
              return e && (e.name || Ae(e[me]) || Ae(e.children)) && !e.hideInMenu && !e.redirect
            })
            .map(function (r) {
              var t = de({}, r),
                n = t.children || t[me]
              if (
                Ae(n) &&
                !t.hideChildrenInMenu &&
                n.some(function (e) {
                  return e && !!e.name
                })
              ) {
                var i,
                  o = e(n)
                if (o.length) return de(de({}, t), {}, ((i = {}), he(i, me, o), he(i, 'children', o), i))
              }
              return de(de({}, r), {}, he({}, me, void 0))
            })
            .filter(function (e) {
              return e
            })
        },
        ke = (function (e) {
          Y(t, e)
          var r = q(t)
          function t() {
            return V(this, t), r.apply(this, arguments)
          }
          return (
            J(t, [
              {
                key: 'get',
                value: function (e) {
                  var r
                  try {
                    var t,
                      n = L(this.entries())
                    try {
                      for (n.s(); !(t = n.n()).done; ) {
                        var i = K(t.value, 2),
                          o = i[0],
                          a = i[1],
                          u = be(o)
                        if (!ge(o) && b(u, []).test(e)) {
                          r = a
                          break
                        }
                      }
                    } catch (f) {
                      n.e(f)
                    } finally {
                      n.f()
                    }
                  } catch (c) {
                    r = void 0
                  }
                  return r
                },
              },
            ]),
            t
          )
        })(ee(Map)),
        Ce = function (e) {
          var r = new ke(),
            t = function e(t, n) {
              t.forEach(function (t) {
                var i = t.children || t[me]
                Ae(i) && e(i, t)
                var o = Ee(t.path, n ? n.path : '/')
                r.set(be(o), t)
              })
            }
          return t(e), r
        },
        Me = c(Ce, i()),
        _e = function e() {
          var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []
          return r
            .map(function (r) {
              var t = r.children || r[me]
              if (Ae(t)) {
                var n = e(t)
                if (n.length) return de(de({}, r), {}, he({}, me, n))
              }
              var i = de({}, r)
              return delete i[me], delete i.children, i
            })
            .filter(function (e) {
              return e
            })
        },
        Re = function (e, r, t, n) {
          var i = Se({ data: e, formatMessage: t, locale: r }),
            o = n ? _e(i) : Pe(i),
            a = Me(i)
          return { breadcrumb: a, menuData: o }
        },
        Ne = Re
      function De(e, r) {
        var t = Object.keys(e)
        if (Object.getOwnPropertySymbols) {
          var n = Object.getOwnPropertySymbols(e)
          r &&
            (n = n.filter(function (r) {
              return Object.getOwnPropertyDescriptor(e, r).enumerable
            })),
            t.push.apply(t, n)
        }
        return t
      }
      function Te(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {}
          r % 2
            ? De(Object(t), !0).forEach(function (r) {
                Ie(e, r, t[r])
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : De(Object(t)).forEach(function (r) {
                Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
              })
        }
        return e
      }
      function Ie(e, r, t) {
        return r in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : (e[r] = t), e
      }
      var Ze = function e() {
          var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            t = {}
          return (
            r.forEach(function (r) {
              if (r && r.key) {
                var n = r.children || r[me]
                ;(t[be(r.path || r.key || '/')] = Te({}, r)), (t[r.key || r.path || '/'] = Te({}, r)), n && (t = Te(Te({}, t), e(n)))
              }
            }),
            t
          )
        },
        Fe = Ze,
        $e = function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
            r = arguments.length > 1 ? arguments[1] : void 0,
            t = arguments.length > 2 ? arguments[2] : void 0
          return e
            .filter(function (e) {
              if ('/' === e && '/' === r) return !0
              if ('/' !== e && '/*' !== e && e && !ge(e)) {
                var n = be(e)
                try {
                  if (t && b(''.concat(n)).test(r)) return !0
                  if (b(''.concat(n), []).test(r)) return !0
                  if (b(''.concat(n, '/(.*)')).test(r)) return !0
                } catch (i) {}
              }
              return !1
            })
            .sort(function (e, t) {
              return e === r ? 10 : t === r ? -10 : e.substr(1).split('/').length - t.substr(1).split('/').length
            })
        },
        ze = function (e, r, t, n) {
          var i = Fe(r),
            o = Object.keys(i),
            a = $e(o, e || '/', n)
          return !a || a.length < 1
            ? []
            : (t || (a = [a[a.length - 1]]),
              a
                .map(function (e) {
                  var r = i[e] || { pro_layout_parentKeys: '', key: '' },
                    t = new Map(),
                    n = (r.pro_layout_parentKeys || [])
                      .map(function (e) {
                        return t.has(e) ? null : (t.set(e, !0), i[e])
                      })
                      .filter(function (e) {
                        return e
                      })
                  return r.key && n.push(r), n
                })
                .flat(1))
        },
        He = ze
    },
    60153: function (e, r, t) {
      'use strict'
      var n = t(70087),
        i = t(42053),
        o = n.ZP
      ;(o.Header = n.h4), (o.Footer = n.$_), (o.Content = n.VY), (o.Sider = i.Z), (r['Z'] = o)
    },
    91210: function (e, r, t) {
      'use strict'
      t(68849), t(42433)
    },
    92712: function (e, r, t) {
      'use strict'
      var n = t(85203)
      e.exports = function e(r, t) {
        if (r === t) return !0
        if (r && t && 'object' == typeof r && 'object' == typeof t) {
          if (r.constructor !== t.constructor) return !1
          var i, o, a
          if (Array.isArray(r)) {
            if (((i = r.length), i != t.length)) return !1
            for (o = i; 0 !== o--; ) if (!e(r[o], t[o])) return !1
            return !0
          }
          if (r instanceof Map && t instanceof Map) {
            if (r.size !== t.size) return !1
            var u,
              f = n(r.entries())
            try {
              for (f.s(); !(u = f.n()).done; ) if (((o = u.value), !t.has(o[0]))) return !1
            } catch (y) {
              f.e(y)
            } finally {
              f.f()
            }
            var c,
              l = n(r.entries())
            try {
              for (l.s(); !(c = l.n()).done; ) if (((o = c.value), !e(o[1], t.get(o[0])))) return !1
            } catch (y) {
              l.e(y)
            } finally {
              l.f()
            }
            return !0
          }
          if (r instanceof Set && t instanceof Set) {
            if (r.size !== t.size) return !1
            var s,
              p = n(r.entries())
            try {
              for (p.s(); !(s = p.n()).done; ) if (((o = s.value), !t.has(o[0]))) return !1
            } catch (y) {
              p.e(y)
            } finally {
              p.f()
            }
            return !0
          }
          if (ArrayBuffer.isView(r) && ArrayBuffer.isView(t)) {
            if (((i = r.length), i != t.length)) return !1
            for (o = i; 0 !== o--; ) if (r[o] !== t[o]) return !1
            return !0
          }
          if (r.constructor === RegExp) return r.source === t.source && r.flags === t.flags
          if (r.valueOf !== Object.prototype.valueOf) return r.valueOf() === t.valueOf()
          if (r.toString !== Object.prototype.toString) return r.toString() === t.toString()
          if (((a = Object.keys(r)), (i = a.length), i !== Object.keys(t).length)) return !1
          for (o = i; 0 !== o--; ) if (!Object.prototype.hasOwnProperty.call(t, a[o])) return !1
          for (o = i; 0 !== o--; ) {
            var v = a[o]
            if (('_owner' !== v || !r.$$typeof) && !e(r[v], t[v])) return !1
          }
          return !0
        }
        return r !== r && t !== t
      }
    },
  },
])
