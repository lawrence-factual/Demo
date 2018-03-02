! function (t) {
    if ("object" == typeof exports && "undefined" != typeof module) module.exports = t();
    else if ("function" == typeof define && define.amd) define([], t);
    else {
        var n;
        "undefined" != typeof window ? n = window : "undefined" != typeof global ? n = global : "undefined" != typeof self && (n = self), n.chroniton = t()
    }
}(function () {
    var t;
    return function n(t, e, r) {
        function u(a, o) {
            if (!e[a]) {
                if (!t[a]) {
                    var s = "function" == typeof require && require;
                    if (!o && s) return s(a, !0);
                    if (i) return i(a, !0);
                    var c = new Error("Cannot find module '" + a + "'");
                    throw c.code = "MODULE_NOT_FOUND", c
                }
                var l = e[a] = {
                    exports: {}
                };
                t[a][0].call(l.exports, function (n) {
                    var e = t[a][1][n];
                    return u(e ? e : n)
                }, l, l.exports, n, t, e, r)
            }
            return e[a].exports
        }
        for (var i = "function" == typeof require && require, a = 0; a < r.length; a++) u(r[a]);
        return u
    }({
        1: [function (n, e) {
            ! function () {
                function n(t, n) {
                    if (n in t) return n;
                    n = n.charAt(0).toUpperCase() + n.slice(1);
                    for (var e = 0, r = Zr.length; r > e; ++e) {
                        var u = Zr[e] + n;
                        if (u in t) return u
                    }
                }

                function r(t) {
                    return Pr(t, Wr), t
                }

                function u(t) {
                    return "function" == typeof t ? t : function () {
                        return $r(t, this)
                    }
                }

                function i(t, n) {
                    function e() {
                        this.removeAttribute(t)
                    }

                    function r() {
                        this.removeAttributeNS(t.space, t.local)
                    }

                    function u() {
                        this.setAttribute(t, n)
                    }

                    function i() {
                        this.setAttributeNS(t.space, t.local, n)
                    }

                    function a() {
                        var e = n.apply(this, arguments);
                        null == e ? this.removeAttribute(t) : this.setAttribute(t, e)
                    }

                    function o() {
                        var e = n.apply(this, arguments);
                        null == e ? this.removeAttributeNS(t.space, t.local) : this.setAttributeNS(t.space, t.local, e)
                    }
                    return t = Fr.ns.qualify(t), null == n ? t.local ? r : e : "function" == typeof n ? t.local ? o : a : t.local ? i : u
                }

                function a(t) {
                    return t.trim().replace(/\s+/g, " ")
                }

                function o(t) {
                    return new RegExp("(?:^|\\s+)" + Fr.requote(t) + "(?:\\s+|$)", "g")
                }

                function s(t) {
                    return (t + "").trim().split(/^|\s+/)
                }

                function c(t, n) {
                    function e() {
                        for (var e = -1; ++e < u;) t[e](this, n)
                    }

                    function r() {
                        for (var e = -1, r = n.apply(this, arguments); ++e < u;) t[e](this, r)
                    }
                    t = s(t).map(l);
                    var u = t.length;
                    return "function" == typeof n ? r : e
                }

                function l(t) {
                    var n = o(t);
                    return function (e, r) {
                        if (u = e.classList) return r ? u.add(t) : u.remove(t);
                        var u = e.getAttribute("class") || "";
                        r ? (n.lastIndex = 0, n.test(u) || e.setAttribute("class", a(u + " " + t))) : e.setAttribute("class", a(u.replace(n, " ")))
                    }
                }

                function f(t, n, e) {
                    function r() {
                        this.style.removeProperty(t)
                    }

                    function u() {
                        this.style.setProperty(t, n, e)
                    }

                    function i() {
                        var r = n.apply(this, arguments);
                        null == r ? this.style.removeProperty(t) : this.style.setProperty(t, r, e)
                    }
                    return null == n ? r : "function" == typeof n ? i : u
                }

                function h(t, n) {
                    function e() {
                        delete this[t]
                    }

                    function r() {
                        this[t] = n
                    }

                    function u() {
                        var e = n.apply(this, arguments);
                        null == e ? delete this[t] : this[t] = e
                    }
                    return null == n ? e : "function" == typeof n ? u : r
                }

                function g(t) {
                    return "function" == typeof t ? t : (t = Fr.ns.qualify(t)).local ? function () {
                        return this.ownerDocument.createElementNS(t.space, t.local)
                    } : function () {
                        return this.ownerDocument.createElementNS(this.namespaceURI, t)
                    }
                }

                function p() {
                    var t = this.parentNode;
                    t && t.removeChild(this)
                }

                function d(t, n) {
                    for (var e in n) Object.defineProperty(t.prototype, e, {
                        value: n[e],
                        enumerable: !1
                    })
                }

                function m() {
                    this._ = Object.create(null)
                }

                function v(t) {
                    return (t += "") === Kr || t[0] === Qr ? Qr + t : t
                }

                function y(t) {
                    return (t += "")[0] === Qr ? t.slice(1) : t
                }

                function b(t) {
                    return v(t) in this._
                }

                function w(t) {
                    return (t = v(t)) in this._ && delete this._[t]
                }

                function M() {
                    var t = [];
                    for (var n in this._) t.push(y(n));
                    return t
                }

                function _() {
                    var t = 0;
                    for (var n in this._) ++t;
                    return t
                }

                function x() {
                    for (var t in this._) return !1;
                    return !0
                }

                function k() {
                    this._ = Object.create(null)
                }

                function A(t) {
                    return {
                        __data__: t
                    }
                }

                function S(t) {
                    return function () {
                        return Br(this, t)
                    }
                }

                function T(t, n) {
                    return n > t ? -1 : t > n ? 1 : t >= n ? 0 : 0 / 0
                }

                function D(t) {
                    return arguments.length || (t = T),
                        function (n, e) {
                            return n && e ? t(n.__data__, e.__data__) : !n - !e
                        }
                }

                function N() {}

                function C() {}

                function L(t) {
                    function n() {
                        for (var n, r = e, u = -1, i = r.length; ++u < i;)(n = r[u].on) && n.apply(this, arguments);
                        return t
                    }
                    var e = [],
                        r = new m;
                    return n.on = function (n, u) {
                        var i, a = r.get(n);
                        return arguments.length < 2 ? a && a.on : (a && (a.on = null, e = e.slice(0, i = e.indexOf(a)).concat(e.slice(i + 1)), r.remove(n)), u && e.push(r.set(n, {
                            on: u
                        })), t)
                    }, n
                }

                function z() {
                    Fr.event.preventDefault()
                }

                function q() {
                    for (var t, n = Fr.event; t = n.sourceEvent;) n = t;
                    return n
                }

                function j(t) {
                    for (var n = new C, e = 0, r = arguments.length; ++e < r;) n[arguments[e]] = L(n);
                    return n.of = function (e, r) {
                        return function (u) {
                            try {
                                var i = u.sourceEvent = Fr.event;
                                u.target = t, Fr.event = u, n[u.type].apply(e, r)
                            } finally {
                                Fr.event = i
                            }
                        }
                    }, n
                }

                function E(t, n, e) {
                    function r() {
                        var n = this[a];
                        n && (this.removeEventListener(t, n, n.$), delete this[a])
                    }

                    function u() {
                        var u = s(n, Hr(arguments));
                        r.call(this), this.addEventListener(t, this[a] = u, u.$ = e), u._ = n
                    }

                    function i() {
                        var n, e = new RegExp("^__on([^.]+)" + Fr.requote(t) + "$");
                        for (var r in this)
                            if (n = r.match(e)) {
                                var u = this[r];
                                this.removeEventListener(n[1], u, u.$), delete this[r]
                            }
                    }
                    var a = "__on" + t,
                        o = t.indexOf("."),
                        s = F;
                    o > 0 && (t = t.slice(0, o));
                    var c = tu.get(t);
                    return c && (t = c, s = O), o ? n ? u : r : n ? N : i
                }

                function F(t, n) {
                    return function (e) {
                        var r = Fr.event;
                        Fr.event = e, n[0] = this.__data__;
                        try {
                            t.apply(this, n)
                        } finally {
                            Fr.event = r
                        }
                    }
                }

                function O(t, n) {
                    var e = F(t, n);
                    return function (t) {
                        var n = this,
                            r = t.relatedTarget;
                        r && (r === n || 8 & r.compareDocumentPosition(n)) || e.call(n, t)
                    }
                }

                function H(t, n) {
                    for (var e = 0, r = t.length; r > e; e++)
                        for (var u, i = t[e], a = 0, o = i.length; o > a; a++)(u = i[a]) && n(u, a, e);
                    return t
                }

                function Y(t) {
                    return Pr(t, nu), t
                }

                function U(t) {
                    var n, e;
                    return function (r, u, i) {
                        var a, o = t[i].update,
                            s = o.length;
                        for (i != e && (e = i, n = 0), u >= n && (n = u + 1); !(a = o[n]) && ++n < s;);
                        return a
                    }
                }

                function I(t) {
                    return "function" == typeof t ? t : function () {
                        return Rr(t, this)
                    }
                }

                function V(t) {
                    return "function" == typeof t ? t : function () {
                        return t
                    }
                }

                function P() {
                    return 0
                }

                function Z(t) {
                    return t > 1 ? ou : -1 > t ? -ou : Math.asin(t)
                }

                function R(t, n, e) {
                    return (e[0] - n[0]) * (t[1] - n[1]) < (e[1] - n[1]) * (t[0] - n[0])
                }

                function $(t, n, e, r) {
                    var u = t[0],
                        i = e[0],
                        a = n[0] - u,
                        o = r[0] - i,
                        s = t[1],
                        c = e[1],
                        l = n[1] - s,
                        f = r[1] - c,
                        h = (o * (s - c) - f * (u - i)) / (f * a - o * l);
                    return [u + h * a, s + h * l]
                }

                function X(t) {
                    var n = t[0],
                        e = t[t.length - 1];
                    return !(n[0] - e[0] || n[1] - e[1])
                }

                function B(t) {
                    return t.innerRadius
                }

                function W(t) {
                    return t.outerRadius
                }

                function J(t) {
                    return t.startAngle
                }

                function G(t) {
                    return t.endAngle
                }

                function K(t) {
                    return t && t.padAngle
                }

                function Q(t, n, e, r) {
                    return (t - e) * n - (n - r) * t > 0 ? 0 : 1
                }

                function tn(t, n, e, r, u) {
                    var i = t[0] - n[0],
                        a = t[1] - n[1],
                        o = (u ? r : -r) / Math.sqrt(i * i + a * a),
                        s = o * a,
                        c = -o * i,
                        l = t[0] + s,
                        f = t[1] + c,
                        h = n[0] + s,
                        g = n[1] + c,
                        p = (l + h) / 2,
                        d = (f + g) / 2,
                        m = h - l,
                        v = g - f,
                        y = m * m + v * v,
                        b = e - r,
                        w = l * g - h * f,
                        M = (0 > v ? -1 : 1) * Math.sqrt(b * b * y - w * w),
                        _ = (w * v - m * M) / y,
                        x = (-w * m - v * M) / y,
                        k = (w * v + m * M) / y,
                        A = (-w * m + v * M) / y,
                        S = _ - p,
                        T = x - d,
                        D = k - p,
                        N = A - d;
                    return S * S + T * T > D * D + N * N && (_ = k, x = A), [[_ - s, x - c], [_ * e / b, x * e / b]]
                }

                function nn(t) {
                    return t
                }

                function en() {
                    return !0
                }

                function rn(t) {
                    return t[0]
                }

                function un(t) {
                    return t[1]
                }

                function an(t) {
                    function n(n) {
                        function a() {
                            c.push("M", i(t(l), o))
                        }
                        for (var s, c = [], l = [], f = -1, h = n.length, g = V(e), p = V(r); ++f < h;) u.call(this, s = n[f], f) ? l.push([+g.call(this, s, f), +p.call(this, s, f)]) : l.length && (a(), l = []);
                        return l.length && a(), c.length ? c.join("") : null
                    }
                    var e = rn,
                        r = un,
                        u = en,
                        i = on,
                        a = i.key,
                        o = .7;
                    return n.x = function (t) {
                        return arguments.length ? (e = t, n) : e
                    }, n.y = function (t) {
                        return arguments.length ? (r = t, n) : r
                    }, n.defined = function (t) {
                        return arguments.length ? (u = t, n) : u
                    }, n.interpolate = function (t) {
                        return arguments.length ? (a = "function" == typeof t ? i = t : (i = gu.get(t) || on).key, n) : a
                    }, n.tension = function (t) {
                        return arguments.length ? (o = t, n) : o
                    }, n
                }

                function on(t) {
                    return t.join("L")
                }

                function sn(t) {
                    return on(t) + "Z"
                }

                function cn(t) {
                    for (var n = 0, e = t.length, r = t[0], u = [r[0], ",", r[1]]; ++n < e;) u.push("H", (r[0] + (r = t[n])[0]) / 2, "V", r[1]);
                    return e > 1 && u.push("H", r[0]), u.join("")
                }

                function ln(t) {
                    for (var n = 0, e = t.length, r = t[0], u = [r[0], ",", r[1]]; ++n < e;) u.push("V", (r = t[n])[1], "H", r[0]);
                    return u.join("")
                }

                function fn(t) {
                    for (var n = 0, e = t.length, r = t[0], u = [r[0], ",", r[1]]; ++n < e;) u.push("H", (r = t[n])[0], "V", r[1]);
                    return u.join("")
                }

                function hn(t, n) {
                    return t.length < 4 ? on(t) : t[1] + dn(t.slice(1, -1), mn(t, n))
                }

                function gn(t, n) {
                    return t.length < 3 ? on(t) : t[0] + dn((t.push(t[0]), t), mn([t[t.length - 2]].concat(t, [t[1]]), n))
                }

                function pn(t, n) {
                    return t.length < 3 ? on(t) : t[0] + dn(t, mn(t, n))
                }

                function dn(t, n) {
                    if (n.length < 1 || t.length != n.length && t.length != n.length + 2) return on(t);
                    var e = t.length != n.length,
                        r = "",
                        u = t[0],
                        i = t[1],
                        a = n[0],
                        o = a,
                        s = 1;
                    if (e && (r += "Q" + (i[0] - 2 * a[0] / 3) + "," + (i[1] - 2 * a[1] / 3) + "," + i[0] + "," + i[1], u = t[1], s = 2), n.length > 1) {
                        o = n[1], i = t[s], s++, r += "C" + (u[0] + a[0]) + "," + (u[1] + a[1]) + "," + (i[0] - o[0]) + "," + (i[1] - o[1]) + "," + i[0] + "," + i[1];
                        for (var c = 2; c < n.length; c++, s++) i = t[s], o = n[c], r += "S" + (i[0] - o[0]) + "," + (i[1] - o[1]) + "," + i[0] + "," + i[1]
                    }
                    if (e) {
                        var l = t[s];
                        r += "Q" + (i[0] + 2 * o[0] / 3) + "," + (i[1] + 2 * o[1] / 3) + "," + l[0] + "," + l[1]
                    }
                    return r
                }

                function mn(t, n) {
                    for (var e, r = [], u = (1 - n) / 2, i = t[0], a = t[1], o = 1, s = t.length; ++o < s;) e = i, i = a, a = t[o], r.push([u * (a[0] - e[0]), u * (a[1] - e[1])]);
                    return r
                }

                function vn(t) {
                    if (t.length < 3) return on(t);
                    var n = 1,
                        e = t.length,
                        r = t[0],
                        u = r[0],
                        i = r[1],
                        a = [u, u, u, (r = t[1])[0]],
                        o = [i, i, i, r[1]],
                        s = [u, ",", i, "L", Mn(mu, a), ",", Mn(mu, o)];
                    for (t.push(t[e - 1]); ++n <= e;) r = t[n], a.shift(), a.push(r[0]), o.shift(), o.push(r[1]), _n(s, a, o);
                    return t.pop(), s.push("L", r), s.join("")
                }

                function yn(t) {
                    if (t.length < 4) return on(t);
                    for (var n, e = [], r = -1, u = t.length, i = [0], a = [0]; ++r < 3;) n = t[r], i.push(n[0]), a.push(n[1]);
                    for (e.push(Mn(mu, i) + "," + Mn(mu, a)), --r; ++r < u;) n = t[r], i.shift(), i.push(n[0]), a.shift(), a.push(n[1]), _n(e, i, a);
                    return e.join("")
                }

                function bn(t) {
                    for (var n, e, r = -1, u = t.length, i = u + 4, a = [], o = []; ++r < 4;) e = t[r % u], a.push(e[0]), o.push(e[1]);
                    for (n = [Mn(mu, a), ",", Mn(mu, o)], --r; ++r < i;) e = t[r % u], a.shift(), a.push(e[0]), o.shift(), o.push(e[1]), _n(n, a, o);
                    return n.join("")
                }

                function wn(t, n) {
                    var e = t.length - 1;
                    if (e)
                        for (var r, u, i = t[0][0], a = t[0][1], o = t[e][0] - i, s = t[e][1] - a, c = -1; ++c <= e;) r = t[c], u = c / e, r[0] = n * r[0] + (1 - n) * (i + u * o), r[1] = n * r[1] + (1 - n) * (a + u * s);
                    return vn(t)
                }

                function Mn(t, n) {
                    return t[0] * n[0] + t[1] * n[1] + t[2] * n[2] + t[3] * n[3]
                }

                function _n(t, n, e) {
                    t.push("C", Mn(pu, n), ",", Mn(pu, e), ",", Mn(du, n), ",", Mn(du, e), ",", Mn(mu, n), ",", Mn(mu, e))
                }

                function xn(t, n) {
                    return (n[1] - t[1]) / (n[0] - t[0])
                }

                function kn(t) {
                    for (var n = 0, e = t.length - 1, r = [], u = t[0], i = t[1], a = r[0] = xn(u, i); ++n < e;) r[n] = (a + (a = xn(u = i, i = t[n + 1]))) / 2;
                    return r[n] = a, r
                }

                function An(t) {
                    for (var n, e, r, u, i = [], a = kn(t), o = -1, s = t.length - 1; ++o < s;) n = xn(t[o], t[o + 1]), hu(n) < ru ? a[o] = a[o + 1] = 0 : (e = a[o] / n, r = a[o + 1] / n, u = e * e + r * r, u > 9 && (u = 3 * n / Math.sqrt(u), a[o] = u * e, a[o + 1] = u * r));
                    for (o = -1; ++o <= s;) u = (t[Math.min(s, o + 1)][0] - t[Math.max(0, o - 1)][0]) / (6 * (1 + a[o] * a[o])), i.push([u || 0, a[o] * u || 0]);
                    return i
                }

                function Sn(t) {
                    return t.length < 3 ? on(t) : t[0] + dn(t, An(t))
                }

                function Tn(t) {
                    for (var n, e, r, u = -1, i = t.length; ++u < i;) n = t[u], e = n[0], r = n[1] - ou, n[0] = e * Math.cos(r), n[1] = e * Math.sin(r);
                    return t
                }

                function Dn(t) {
                    function n(n) {
                        function s() {
                            d.push("M", o(t(v), f), l, c(t(m.reverse()), f), "Z")
                        }
                        for (var h, g, p, d = [], m = [], v = [], y = -1, b = n.length, w = V(e), M = V(u), _ = e === r ? function () {
                                return g
                            } : V(r), x = u === i ? function () {
                                return p
                            } : V(i); ++y < b;) a.call(this, h = n[y], y) ? (m.push([g = +w.call(this, h, y), p = +M.call(this, h, y)]), v.push([+_.call(this, h, y), +x.call(this, h, y)])) : m.length && (s(), m = [], v = []);
                        return m.length && s(), d.length ? d.join("") : null
                    }
                    var e = rn,
                        r = rn,
                        u = 0,
                        i = un,
                        a = en,
                        o = on,
                        s = o.key,
                        c = o,
                        l = "L",
                        f = .7;
                    return n.x = function (t) {
                        return arguments.length ? (e = r = t, n) : r
                    }, n.x0 = function (t) {
                        return arguments.length ? (e = t, n) : e
                    }, n.x1 = function (t) {
                        return arguments.length ? (r = t, n) : r
                    }, n.y = function (t) {
                        return arguments.length ? (u = i = t, n) : i
                    }, n.y0 = function (t) {
                        return arguments.length ? (u = t, n) : u
                    }, n.y1 = function (t) {
                        return arguments.length ? (i = t, n) : i
                    }, n.defined = function (t) {
                        return arguments.length ? (a = t, n) : a
                    }, n.interpolate = function (t) {
                        return arguments.length ? (s = "function" == typeof t ? o = t : (o = gu.get(t) || on).key, c = o.reverse || o, l = o.closed ? "M" : "L", n) : s
                    }, n.tension = function (t) {
                        return arguments.length ? (f = t, n) : f
                    }, n
                }

                function Nn(t) {
                    return t.source
                }

                function Cn(t) {
                    return t.target
                }

                function Ln(t) {
                    return t.radius
                }

                function zn(t) {
                    return [t.x, t.y]
                }

                function qn(t) {
                    return function () {
                        var n = t.apply(this, arguments),
                            e = n[0],
                            r = n[1] - ou;
                        return [e * Math.cos(r), e * Math.sin(r)]
                    }
                }

                function jn() {
                    return 64
                }

                function En() {
                    return "circle"
                }

                function Fn(t) {
                    var n = Math.sqrt(t / uu);
                    return "M0," + n + "A" + n + "," + n + " 0 1,1 0," + -n + "A" + n + "," + n + " 0 1,1 0," + n + "Z"
                }

                function On(t) {
                    for (var n = 1; t * n % 1;) n *= 10;
                    return n
                }

                function Hn(t, n, e) {
                    return function () {
                        var r = e.apply(n, arguments);
                        return r === n ? t : r
                    }
                }

                function Yn() {}

                function Un(t, n, e) {
                    return this instanceof Un ? (this.h = +t, this.s = +n, void(this.l = +e)) : arguments.length < 2 ? t instanceof Un ? new Un(t.h, t.s, t.l) : Qn("" + t, te, Un) : new Un(t, n, e)
                }

                function In(t, n, e) {
                    function r(t) {
                        return t > 360 ? t -= 360 : 0 > t && (t += 360), 60 > t ? i + (a - i) * t / 60 : 180 > t ? a : 240 > t ? i + (a - i) * (240 - t) / 60 : i
                    }

                    function u(t) {
                        return Math.round(255 * r(t))
                    }
                    var i, a;
                    return t = isNaN(t) ? 0 : (t %= 360) < 0 ? t + 360 : t, n = isNaN(n) ? 0 : 0 > n ? 0 : n > 1 ? 1 : n, e = 0 > e ? 0 : e > 1 ? 1 : e, a = .5 >= e ? e * (1 + n) : e + n - e * n, i = 2 * e - a, new Jn(u(t + 120), u(t), u(t - 120))
                }

                function Vn(t, n, e) {
                    return this instanceof Vn ? (this.h = +t, this.c = +n, void(this.l = +e)) : arguments.length < 2 ? t instanceof Vn ? new Vn(t.h, t.c, t.l) : t instanceof Zn ? $n(t.l, t.a, t.b) : $n((t = ne((t = Fr.rgb(t)).r, t.g, t.b)).l, t.a, t.b) : new Vn(t, n, e)
                }

                function Pn(t, n, e) {
                    return isNaN(t) && (t = 0), isNaN(n) && (n = 0), new Zn(e, Math.cos(t *= su) * n, Math.sin(t) * n)
                }

                function Zn(t, n, e) {
                    return this instanceof Zn ? (this.l = +t, this.a = +n, void(this.b = +e)) : arguments.length < 2 ? t instanceof Zn ? new Zn(t.l, t.a, t.b) : t instanceof Vn ? Pn(t.h, t.c, t.l) : ne((t = Jn(t)).r, t.g, t.b) : new Zn(t, n, e)
                }

                function Rn(t, n, e) {
                    var r = (t + 16) / 116,
                        u = r + n / 500,
                        i = r - e / 200;
                    return u = Xn(u) * xu, r = Xn(r) * ku, i = Xn(i) * Au, new Jn(Wn(3.2404542 * u - 1.5371385 * r - .4985314 * i), Wn(-.969266 * u + 1.8760108 * r + .041556 * i), Wn(.0556434 * u - .2040259 * r + 1.0572252 * i))
                }

                function $n(t, n, e) {
                    return t > 0 ? new Vn(Math.atan2(e, n) * cu, Math.sqrt(n * n + e * e), t) : new Vn(0 / 0, 0 / 0, t)
                }

                function Xn(t) {
                    return t > .206893034 ? t * t * t : (t - 4 / 29) / 7.787037
                }

                function Bn(t) {
                    return t > .008856 ? Math.pow(t, 1 / 3) : 7.787037 * t + 4 / 29
                }

                function Wn(t) {
                    return Math.round(255 * (.00304 >= t ? 12.92 * t : 1.055 * Math.pow(t, 1 / 2.4) - .055))
                }

                function Jn(t, n, e) {
                    return this instanceof Jn ? (this.r = ~~t, this.g = ~~n, void(this.b = ~~e)) : arguments.length < 2 ? t instanceof Jn ? new Jn(t.r, t.g, t.b) : Qn("" + t, Jn, In) : new Jn(t, n, e)
                }

                function Gn(t) {
                    return new Jn(t >> 16, t >> 8 & 255, 255 & t)
                }

                function Kn(t) {
                    return 16 > t ? "0" + Math.max(0, t).toString(16) : Math.min(255, t).toString(16)
                }

                function Qn(t, n, e) {
                    var r, u, i, a = 0,
                        o = 0,
                        s = 0;
                    if (r = /([a-z]+)\((.*)\)/i.exec(t)) switch (u = r[2].split(","), r[1]) {
                        case "hsl":
                            return e(parseFloat(u[0]), parseFloat(u[1]) / 100, parseFloat(u[2]) / 100);
                        case "rgb":
                            return n(re(u[0]), re(u[1]), re(u[2]))
                    }
                    return (i = Du.get(t)) ? n(i.r, i.g, i.b) : (null == t || "#" !== t.charAt(0) || isNaN(i = parseInt(t.slice(1), 16)) || (4 === t.length ? (a = (3840 & i) >> 4, a = a >> 4 | a, o = 240 & i, o = o >> 4 | o, s = 15 & i, s = s << 4 | s) : 7 === t.length && (a = (16711680 & i) >> 16, o = (65280 & i) >> 8, s = 255 & i)), n(a, o, s))
                }

                function te(t, n, e) {
                    var r, u, i = Math.min(t /= 255, n /= 255, e /= 255),
                        a = Math.max(t, n, e),
                        o = a - i,
                        s = (a + i) / 2;
                    return o ? (u = .5 > s ? o / (a + i) : o / (2 - a - i), r = t == a ? (n - e) / o + (e > n ? 6 : 0) : n == a ? (e - t) / o + 2 : (t - n) / o + 4, r *= 60) : (r = 0 / 0, u = s > 0 && 1 > s ? 0 : r), new Un(r, u, s)
                }

                function ne(t, n, e) {
                    t = ee(t), n = ee(n), e = ee(e);
                    var r = Bn((.4124564 * t + .3575761 * n + .1804375 * e) / xu),
                        u = Bn((.2126729 * t + .7151522 * n + .072175 * e) / ku),
                        i = Bn((.0193339 * t + .119192 * n + .9503041 * e) / Au);
                    return Zn(116 * u - 16, 500 * (r - u), 200 * (u - i))
                }

                function ee(t) {
                    return (t /= 255) <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
                }

                function re(t) {
                    var n = parseFloat(t);
                    return "%" === t.charAt(t.length - 1) ? Math.round(2.55 * n) : n
                }

                function ue(t, n) {
                    t = Fr.rgb(t), n = Fr.rgb(n);
                    var e = t.r,
                        r = t.g,
                        u = t.b,
                        i = n.r - e,
                        a = n.g - r,
                        o = n.b - u;
                    return function (t) {
                        return "#" + Kn(Math.round(e + i * t)) + Kn(Math.round(r + a * t)) + Kn(Math.round(u + o * t))
                    }
                }

                function ie(t, n) {
                    var e, r = {},
                        u = {};
                    for (e in t) e in n ? r[e] = ce(t[e], n[e]) : u[e] = t[e];
                    for (e in n) e in t || (u[e] = n[e]);
                    return function (t) {
                        for (e in r) u[e] = r[e](t);
                        return u
                    }
                }

                function ae(t, n) {
                    var e, r = [],
                        u = [],
                        i = t.length,
                        a = n.length,
                        o = Math.min(t.length, n.length);
                    for (e = 0; o > e; ++e) r.push(ce(t[e], n[e]));
                    for (; i > e; ++e) u[e] = t[e];
                    for (; a > e; ++e) u[e] = n[e];
                    return function (t) {
                        for (e = 0; o > e; ++e) u[e] = r[e](t);
                        return u
                    }
                }

                function oe(t, n) {
                    return t = +t, n = +n,
                        function (e) {
                            return t * (1 - e) + n * e
                        }
                }

                function se(t, n) {
                    var e, r, u, i = Nu.lastIndex = Cu.lastIndex = 0,
                        a = -1,
                        o = [],
                        s = [];
                    for (t += "", n += "";
                        (e = Nu.exec(t)) && (r = Cu.exec(n));)(u = r.index) > i && (u = n.slice(i, u), o[a] ? o[a] += u : o[++a] = u), (e = e[0]) === (r = r[0]) ? o[a] ? o[a] += r : o[++a] = r : (o[++a] = null, s.push({
                        i: a,
                        x: oe(e, r)
                    })), i = Cu.lastIndex;
                    return i < n.length && (u = n.slice(i), o[a] ? o[a] += u : o[++a] = u), o.length < 2 ? s[0] ? (n = s[0].x, function (t) {
                        return n(t) + ""
                    }) : function () {
                        return n
                    } : (n = s.length, function (t) {
                        for (var e, r = 0; n > r; ++r) o[(e = s[r]).i] = e.x(t);
                        return o.join("")
                    })
                }

                function ce(t, n) {
                    for (var e, r = Fr.interpolators.length; --r >= 0 && !(e = Fr.interpolators[r](t, n)););
                    return e
                }

                function le(t, n) {
                    return n -= t,
                        function (e) {
                            return Math.round(t + n * e)
                        }
                }

                function fe(t, n) {
                    return n = (n -= t = +t) || 1 / n,
                        function (e) {
                            return (e - t) / n
                        }
                }

                function he(t, n) {
                    return n = (n -= t = +t) || 1 / n,
                        function (e) {
                            return Math.max(0, Math.min(1, (e - t) / n))
                        }
                }

                function ge(t, n) {
                    return n - (t ? Math.ceil(Math.log(t) / Math.LN10) : 1)
                }

                function pe(t, n) {
                    var e = Math.pow(10, 3 * hu(8 - n));
                    return {
                        scale: n > 8 ? function (t) {
                            return t / e
                        } : function (t) {
                            return t * e
                        },
                        symbol: t
                    }
                }

                function de(t) {
                    var n = t.decimal,
                        e = t.thousands,
                        r = t.grouping,
                        u = t.currency,
                        i = r && e ? function (t, n) {
                            for (var u = t.length, i = [], a = 0, o = r[0], s = 0; u > 0 && o > 0 && (s + o + 1 > n && (o = Math.max(1, n - s)), i.push(t.substring(u -= o, u + o)), !((s += o + 1) > n));) o = r[a = (a + 1) % r.length];
                            return i.reverse().join(e)
                        } : nn;
                    return function (t) {
                        var e = zu.exec(t),
                            r = e[1] || " ",
                            a = e[2] || ">",
                            o = e[3] || "-",
                            s = e[4] || "",
                            c = e[5],
                            l = +e[6],
                            f = e[7],
                            h = e[8],
                            g = e[9],
                            p = 1,
                            d = "",
                            m = "",
                            v = !1,
                            y = !0;
                        switch (h && (h = +h.substring(1)), (c || "0" === r && "=" === a) && (c = r = "0", a = "="), g) {
                            case "n":
                                f = !0, g = "g";
                                break;
                            case "%":
                                p = 100, m = "%", g = "f";
                                break;
                            case "p":
                                p = 100, m = "%", g = "r";
                                break;
                            case "b":
                            case "o":
                            case "x":
                            case "X":
                                "#" === s && (d = "0" + g.toLowerCase());
                            case "c":
                                y = !1;
                            case "d":
                                v = !0, h = 0;
                                break;
                            case "s":
                                p = -1, g = "r"
                        }
                        "$" === s && (d = u[0], m = u[1]), "r" != g || h || (g = "g"), null != h && ("g" == g ? h = Math.max(1, Math.min(21, h)) : ("e" == g || "f" == g) && (h = Math.max(0, Math.min(20, h)))), g = qu.get(g) || me;
                        var b = c && f;
                        return function (t) {
                            var e = m;
                            if (v && t % 1) return "";
                            var u = 0 > t || 0 === t && 0 > 1 / t ? (t = -t, "-") : "-" === o ? "" : o;
                            if (0 > p) {
                                var s = Fr.formatPrefix(t, h);
                                t = s.scale(t), e = s.symbol + m
                            } else t *= p;
                            t = g(t, h);
                            var w, M, _ = t.lastIndexOf(".");
                            if (0 > _) {
                                var x = y ? t.lastIndexOf("e") : -1;
                                0 > x ? (w = t, M = "") : (w = t.substring(0, x), M = t.substring(x))
                            } else w = t.substring(0, _), M = n + t.substring(_ + 1);
                            !c && f && (w = i(w, 1 / 0));
                            var k = d.length + w.length + M.length + (b ? 0 : u.length),
                                A = l > k ? new Array(k = l - k + 1).join(r) : "";
                            return b && (w = i(A + w, A.length ? l - M.length : 1 / 0)), u += d, t = w + M, ("<" === a ? u + t + A : ">" === a ? A + u + t : "^" === a ? A.substring(0, k >>= 1) + u + t + A.substring(k) : u + (b ? t : A + t)) + e
                        }
                    }
                }

                function me(t) {
                    return t + ""
                }

                function ve() {
                    this._ = new Date(arguments.length > 1 ? Date.UTC.apply(this, arguments) : arguments[0])
                }

                function ye(t, n, e) {
                    function r(n) {
                        var e = t(n),
                            r = i(e, 1);
                        return r - n > n - e ? e : r
                    }

                    function u(e) {
                        return n(e = t(new Eu(e - 1)), 1), e
                    }

                    function i(t, e) {
                        return n(t = new Eu(+t), e), t
                    }

                    function a(t, r, i) {
                        var a = u(t),
                            o = [];
                        if (i > 1)
                            for (; r > a;) e(a) % i || o.push(new Date(+a)), n(a, 1);
                        else
                            for (; r > a;) o.push(new Date(+a)), n(a, 1);
                        return o
                    }

                    function o(t, n, e) {
                        try {
                            Eu = ve;
                            var r = new ve;
                            return r._ = t, a(r, n, e)
                        } finally {
                            Eu = Date
                        }
                    }
                    t.floor = t, t.round = r, t.ceil = u, t.offset = i, t.range = a;
                    var s = t.utc = be(t);
                    return s.floor = s, s.round = be(r), s.ceil = be(u), s.offset = be(i), s.range = o, t
                }

                function be(t) {
                    return function (n, e) {
                        try {
                            Eu = ve;
                            var r = new ve;
                            return r._ = n, t(r, e)._
                        } finally {
                            Eu = Date
                        }
                    }
                }

                function we(t) {
                    function n(t) {
                        function n(n) {
                            for (var e, u, i, a = [], o = -1, s = 0; ++o < r;) 37 === t.charCodeAt(o) && (a.push(t.slice(s, o)), null != (u = Ou[e = t.charAt(++o)]) && (e = t.charAt(++o)), (i = D[e]) && (e = i(n, null == u ? "e" === e ? " " : "0" : u)), a.push(e), s = o + 1);
                            return a.push(t.slice(s, o)), a.join("")
                        }
                        var r = t.length;
                        return n.parse = function (n) {
                            var r = {
                                    y: 1900,
                                    m: 0,
                                    d: 1,
                                    H: 0,
                                    M: 0,
                                    S: 0,
                                    L: 0,
                                    Z: null
                                },
                                u = e(r, t, n, 0);
                            if (u != n.length) return null;
                            "p" in r && (r.H = r.H % 12 + 12 * r.p);
                            var i = null != r.Z && Eu !== ve,
                                a = new(i ? ve : Eu);
                            return "j" in r ? a.setFullYear(r.y, 0, r.j) : "w" in r && ("W" in r || "U" in r) ? (a.setFullYear(r.y, 0, 1), a.setFullYear(r.y, 0, "W" in r ? (r.w + 6) % 7 + 7 * r.W - (a.getDay() + 5) % 7 : r.w + 7 * r.U - (a.getDay() + 6) % 7)) : a.setFullYear(r.y, r.m, r.d), a.setHours(r.H + (r.Z / 100 | 0), r.M + r.Z % 100, r.S, r.L), i ? a._ : a
                        }, n.toString = function () {
                            return t
                        }, n
                    }

                    function e(t, n, e, r) {
                        for (var u, i, a, o = 0, s = n.length, c = e.length; s > o;) {
                            if (r >= c) return -1;
                            if (u = n.charCodeAt(o++), 37 === u) {
                                if (a = n.charAt(o++), i = N[a in Ou ? n.charAt(o++) : a], !i || (r = i(t, e, r)) < 0) return -1
                            } else if (u != e.charCodeAt(r++)) return -1
                        }
                        return r
                    }

                    function r(t, n, e) {
                        _.lastIndex = 0;
                        var r = _.exec(n.slice(e));
                        return r ? (t.w = x.get(r[0].toLowerCase()), e + r[0].length) : -1
                    }

                    function u(t, n, e) {
                        w.lastIndex = 0;
                        var r = w.exec(n.slice(e));
                        return r ? (t.w = M.get(r[0].toLowerCase()), e + r[0].length) : -1
                    }

                    function i(t, n, e) {
                        S.lastIndex = 0;
                        var r = S.exec(n.slice(e));
                        return r ? (t.m = T.get(r[0].toLowerCase()), e + r[0].length) : -1
                    }

                    function a(t, n, e) {
                        k.lastIndex = 0;
                        var r = k.exec(n.slice(e));
                        return r ? (t.m = A.get(r[0].toLowerCase()), e + r[0].length) : -1
                    }

                    function o(t, n, r) {
                        return e(t, D.c.toString(), n, r)
                    }

                    function s(t, n, r) {
                        return e(t, D.x.toString(), n, r)
                    }

                    function c(t, n, r) {
                        return e(t, D.X.toString(), n, r)
                    }

                    function l(t, n, e) {
                        var r = b.get(n.slice(e, e += 2).toLowerCase());
                        return null == r ? -1 : (t.p = r, e)
                    }
                    var f = t.dateTime,
                        h = t.date,
                        g = t.time,
                        p = t.periods,
                        d = t.days,
                        m = t.shortDays,
                        v = t.months,
                        y = t.shortMonths;
                    n.utc = function (t) {
                        function e(t) {
                            try {
                                Eu = ve;
                                var n = new Eu;
                                return n._ = t, r(n)
                            } finally {
                                Eu = Date
                            }
                        }
                        var r = n(t);
                        return e.parse = function (t) {
                            try {
                                Eu = ve;
                                var n = r.parse(t);
                                return n && n._
                            } finally {
                                Eu = Date
                            }
                        }, e.toString = r.toString, e
                    }, n.multi = n.utc.multi = Ue;
                    var b = Fr.map(),
                        w = _e(d),
                        M = xe(d),
                        _ = _e(m),
                        x = xe(m),
                        k = _e(v),
                        A = xe(v),
                        S = _e(y),
                        T = xe(y);
                    p.forEach(function (t, n) {
                        b.set(t.toLowerCase(), n)
                    });
                    var D = {
                            a: function (t) {
                                return m[t.getDay()]
                            },
                            A: function (t) {
                                return d[t.getDay()]
                            },
                            b: function (t) {
                                return y[t.getMonth()]
                            },
                            B: function (t) {
                                return v[t.getMonth()]
                            },
                            c: n(f),
                            d: function (t, n) {
                                return Me(t.getDate(), n, 2)
                            },
                            e: function (t, n) {
                                return Me(t.getDate(), n, 2)
                            },
                            H: function (t, n) {
                                return Me(t.getHours(), n, 2)
                            },
                            I: function (t, n) {
                                return Me(t.getHours() % 12 || 12, n, 2)
                            },
                            j: function (t, n) {
                                return Me(1 + ju.dayOfYear(t), n, 3)
                            },
                            L: function (t, n) {
                                return Me(t.getMilliseconds(), n, 3)
                            },
                            m: function (t, n) {
                                return Me(t.getMonth() + 1, n, 2)
                            },
                            M: function (t, n) {
                                return Me(t.getMinutes(), n, 2)
                            },
                            p: function (t) {
                                return p[+(t.getHours() >= 12)]
                            },
                            S: function (t, n) {
                                return Me(t.getSeconds(), n, 2)
                            },
                            U: function (t, n) {
                                return Me(ju.sundayOfYear(t), n, 2)
                            },
                            w: function (t) {
                                return t.getDay()
                            },
                            W: function (t, n) {
                                return Me(ju.mondayOfYear(t), n, 2)
                            },
                            x: n(h),
                            X: n(g),
                            y: function (t, n) {
                                return Me(t.getFullYear() % 100, n, 2)
                            },
                            Y: function (t, n) {
                                return Me(t.getFullYear() % 1e4, n, 4)
                            },
                            Z: He,
                            "%": function () {
                                return "%"
                            }
                        },
                        N = {
                            a: r,
                            A: u,
                            b: i,
                            B: a,
                            c: o,
                            d: ze,
                            e: ze,
                            H: je,
                            I: je,
                            j: qe,
                            L: Oe,
                            m: Le,
                            M: Ee,
                            p: l,
                            S: Fe,
                            U: Ae,
                            w: ke,
                            W: Se,
                            x: s,
                            X: c,
                            y: De,
                            Y: Te,
                            Z: Ne,
                            "%": Ye
                        };
                    return n
                }

                function Me(t, n, e) {
                    var r = 0 > t ? "-" : "",
                        u = (r ? -t : t) + "",
                        i = u.length;
                    return r + (e > i ? new Array(e - i + 1).join(n) + u : u)
                }

                function _e(t) {
                    return new RegExp("^(?:" + t.map(Fr.requote).join("|") + ")", "i")
                }

                function xe(t) {
                    for (var n = new m, e = -1, r = t.length; ++e < r;) n.set(t[e].toLowerCase(), e);
                    return n
                }

                function ke(t, n, e) {
                    Hu.lastIndex = 0;
                    var r = Hu.exec(n.slice(e, e + 1));
                    return r ? (t.w = +r[0], e + r[0].length) : -1
                }

                function Ae(t, n, e) {
                    Hu.lastIndex = 0;
                    var r = Hu.exec(n.slice(e));
                    return r ? (t.U = +r[0], e + r[0].length) : -1
                }

                function Se(t, n, e) {
                    Hu.lastIndex = 0;
                    var r = Hu.exec(n.slice(e));
                    return r ? (t.W = +r[0], e + r[0].length) : -1
                }

                function Te(t, n, e) {
                    Hu.lastIndex = 0;
                    var r = Hu.exec(n.slice(e, e + 4));
                    return r ? (t.y = +r[0], e + r[0].length) : -1
                }

                function De(t, n, e) {
                    Hu.lastIndex = 0;
                    var r = Hu.exec(n.slice(e, e + 2));
                    return r ? (t.y = Ce(+r[0]), e + r[0].length) : -1
                }

                function Ne(t, n, e) {
                    return /^[+-]\d{4}$/.test(n = n.slice(e, e + 5)) ? (t.Z = -n, e + 5) : -1
                }

                function Ce(t) {
                    return t + (t > 68 ? 1900 : 2e3)
                }

                function Le(t, n, e) {
                    Hu.lastIndex = 0;
                    var r = Hu.exec(n.slice(e, e + 2));
                    return r ? (t.m = r[0] - 1, e + r[0].length) : -1
                }

                function ze(t, n, e) {
                    Hu.lastIndex = 0;
                    var r = Hu.exec(n.slice(e, e + 2));
                    return r ? (t.d = +r[0], e + r[0].length) : -1
                }

                function qe(t, n, e) {
                    Hu.lastIndex = 0;
                    var r = Hu.exec(n.slice(e, e + 3));
                    return r ? (t.j = +r[0], e + r[0].length) : -1
                }

                function je(t, n, e) {
                    Hu.lastIndex = 0;
                    var r = Hu.exec(n.slice(e, e + 2));
                    return r ? (t.H = +r[0], e + r[0].length) : -1
                }

                function Ee(t, n, e) {
                    Hu.lastIndex = 0;
                    var r = Hu.exec(n.slice(e, e + 2));
                    return r ? (t.M = +r[0], e + r[0].length) : -1
                }

                function Fe(t, n, e) {
                    Hu.lastIndex = 0;
                    var r = Hu.exec(n.slice(e, e + 2));
                    return r ? (t.S = +r[0], e + r[0].length) : -1
                }

                function Oe(t, n, e) {
                    Hu.lastIndex = 0;
                    var r = Hu.exec(n.slice(e, e + 3));
                    return r ? (t.L = +r[0], e + r[0].length) : -1
                }

                function He(t) {
                    var n = t.getTimezoneOffset(),
                        e = n > 0 ? "-" : "+",
                        r = hu(n) / 60 | 0,
                        u = hu(n) % 60;
                    return e + Me(r, "0", 2) + Me(u, "0", 2)
                }

                function Ye(t, n, e) {
                    Yu.lastIndex = 0;
                    var r = Yu.exec(n.slice(e, e + 1));
                    return r ? e + r[0].length : -1
                }

                function Ue(t) {
                    for (var n = t.length, e = -1; ++e < n;) t[e][0] = this(t[e][0]);
                    return function (n) {
                        for (var e = 0, r = t[e]; !r[1](n);) r = t[++e];
                        return r[0](n)
                    }
                }

                function Ie(t, n, e, r) {
                    var u = e(t[0], t[1]),
                        i = r(n[0], n[1]);
                    return function (t) {
                        return i(u(t))
                    }
                }

                function Ve(t, n) {
                    var e, r = 0,
                        u = t.length - 1,
                        i = t[r],
                        a = t[u];
                    return i > a && (e = r, r = u, u = e, e = i, i = a, a = e), t[r] = n.floor(i), t[u] = n.ceil(a), t
                }

                function Pe(t) {
                    return t ? {
                        floor: function (n) {
                            return Math.floor(n / t) * t
                        },
                        ceil: function (n) {
                            return Math.ceil(n / t) * t
                        }
                    } : Iu
                }

                function Ze(t) {
                    return {
                        left: function (n, e, r, u) {
                            for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = n.length); u > r;) {
                                var i = r + u >>> 1;
                                t(n[i], e) < 0 ? r = i + 1 : u = i
                            }
                            return r
                        },
                        right: function (n, e, r, u) {
                            for (arguments.length < 3 && (r = 0), arguments.length < 4 && (u = n.length); u > r;) {
                                var i = r + u >>> 1;
                                t(n[i], e) > 0 ? u = i : r = i + 1
                            }
                            return r
                        }
                    }
                }

                function Re(t, n, e, r) {
                    var u = [],
                        i = [],
                        a = 0,
                        o = Math.min(t.length, n.length) - 1;
                    for (t[o] < t[0] && (t = t.slice().reverse(), n = n.slice().reverse()); ++a <= o;) u.push(e(t[a - 1], t[a])), i.push(r(n[a - 1], n[a]));
                    return function (n) {
                        var e = Fr.bisect(t, n, 1, o) - 1;
                        return i[e](u[e](n))
                    }
                }

                function $e(t) {
                    var n = t[0],
                        e = t[t.length - 1];
                    return e > n ? [n, e] : [e, n]
                }

                function Xe(t) {
                    return t.rangeExtent ? t.rangeExtent() : $e(t.range())
                }

                function Be(t, n, e, r) {
                    function u() {
                        var u = Math.min(t.length, n.length) > 2 ? Re : Ie,
                            s = r ? he : fe;
                        return a = u(t, n, s, e), o = u(n, t, s, ce), i
                    }

                    function i(t) {
                        return a(t)
                    }
                    var a, o;
                    return i.invert = function (t) {
                        return o(t)
                    }, i.domain = function (n) {
                        return arguments.length ? (t = n.map(Number), u()) : t
                    }, i.range = function (t) {
                        return arguments.length ? (n = t, u()) : n
                    }, i.rangeRound = function (t) {
                        return i.range(t).interpolate(le)
                    }, i.clamp = function (t) {
                        return arguments.length ? (r = t, u()) : r
                    }, i.interpolate = function (t) {
                        return arguments.length ? (e = t, u()) : e
                    }, i.ticks = function (n) {
                        return Ke(t, n)
                    }, i.tickFormat = function (n, e) {
                        return Qe(t, n, e)
                    }, i.nice = function (n) {
                        return Je(t, n), u()
                    }, i.copy = function () {
                        return Be(t, n, e, r)
                    }, u()
                }

                function We(t, n) {
                    return Fr.rebind(t, n, "range", "rangeRound", "interpolate", "clamp")
                }

                function Je(t, n) {
                    return Ve(t, Pe(Ge(t, n)[2]))
                }

                function Ge(t, n) {
                    null == n && (n = 10);
                    var e = $e(t),
                        r = e[1] - e[0],
                        u = Math.pow(10, Math.floor(Math.log(r / n) / Math.LN10)),
                        i = n / r * u;
                    return .15 >= i ? u *= 10 : .35 >= i ? u *= 5 : .75 >= i && (u *= 2), e[0] = Math.ceil(e[0] / u) * u, e[1] = Math.floor(e[1] / u) * u + .5 * u, e[2] = u, e
                }

                function Ke(t, n) {
                    return Fr.range.apply(Fr, Ge(t, n))
                }

                function Qe(t, n, e) {
                    var r = Ge(t, n);
                    if (e) {
                        var u = zu.exec(e);
                        if (u.shift(), "s" === u[8]) {
                            var i = Fr.formatPrefix(Math.max(hu(r[0]), hu(r[1])));
                            return u[7] || (u[7] = "." + tr(i.scale(r[2]))), u[8] = "f", e = Fr.format(u.join("")),
                                function (t) {
                                    return e(i.scale(t)) + i.symbol
                                }
                        }
                        u[7] || (u[7] = "." + nr(u[8], r)), e = u.join("")
                    } else e = ",." + tr(r[2]) + "f";
                    return Fr.format(e)
                }

                function tr(t) {
                    return -Math.floor(Math.log(t) / Math.LN10 + .01)
                }

                function nr(t, n) {
                    var e = tr(n[2]);
                    return t in Bu ? Math.abs(e - tr(Math.max(hu(n[0]), hu(n[1])))) + +("e" !== t) : e - 2 * ("%" === t)
                }

                function er() {
                    var t = rr(),
                        n = ur() - t;
                    n > 24 ? (isFinite(n) && (clearTimeout($u), $u = setTimeout(er, n)), Ru = 0) : (Ru = 1, Wu(er))
                }

                function rr() {
                    var t = Date.now();
                    for (Xu = Pu; Xu;) t >= Xu.t && (Xu.f = Xu.c(t - Xu.t)), Xu = Xu.n;
                    return t
                }

                function ur() {
                    for (var t, n = Pu, e = 1 / 0; n;) n.f ? n = t ? t.n = n.n : Pu = n.n : (n.t < e && (e = n.t), n = (t = n).n);
                    return Zu = t, e
                }

                function ir(t) {
                    return function () {
                        var n, e;
                        (n = this[t]) && (e = n[n.active]) && (--n.count ? delete n[n.active] : delete this[t], n.active += .5, e.event && e.event.interrupt.call(this, this.__data__, e.index))
                    }
                }

                function ar(t, n, e) {
                    return Pr(t, Qu), t.namespace = n, t.id = e, t
                }

                function or(t) {
                    var n = [t.a, t.b],
                        e = [t.c, t.d],
                        r = cr(n),
                        u = sr(n, e),
                        i = cr(lr(e, n, -u)) || 0;
                    n[0] * e[1] < e[0] * n[1] && (n[0] *= -1, n[1] *= -1, r *= -1, u *= -1), this.rotate = (r ? Math.atan2(n[1], n[0]) : Math.atan2(-e[0], e[1])) * cu, this.translate = [t.e, t.f], this.scale = [r, i], this.skew = i ? Math.atan2(u, i) * cu : 0
                }

                function sr(t, n) {
                    return t[0] * n[0] + t[1] * n[1]
                }

                function cr(t) {
                    var n = Math.sqrt(sr(t, t));
                    return n && (t[0] /= n, t[1] /= n), n
                }

                function lr(t, n, e) {
                    return t[0] += e * n[0], t[1] += e * n[1], t
                }

                function fr(t, n) {
                    var e, r = [],
                        u = [],
                        i = Fr.transform(t),
                        a = Fr.transform(n),
                        o = i.translate,
                        s = a.translate,
                        c = i.rotate,
                        l = a.rotate,
                        f = i.skew,
                        h = a.skew,
                        g = i.scale,
                        p = a.scale;
                    return o[0] != s[0] || o[1] != s[1] ? (r.push("translate(", null, ",", null, ")"), u.push({
                            i: 1,
                            x: oe(o[0], s[0])
                        }, {
                            i: 3,
                            x: oe(o[1], s[1])
                        })) : r.push(s[0] || s[1] ? "translate(" + s + ")" : ""), c != l ? (c - l > 180 ? l += 360 : l - c > 180 && (c += 360), u.push({
                            i: r.push(r.pop() + "rotate(", null, ")") - 2,
                            x: oe(c, l)
                        })) : l && r.push(r.pop() + "rotate(" + l + ")"), f != h ? u.push({
                            i: r.push(r.pop() + "skewX(", null, ")") - 2,
                            x: oe(f, h)
                        }) : h && r.push(r.pop() + "skewX(" + h + ")"), g[0] != p[0] || g[1] != p[1] ? (e = r.push(r.pop() + "scale(", null, ",", null, ")"), u.push({
                            i: e - 4,
                            x: oe(g[0], p[0])
                        }, {
                            i: e - 2,
                            x: oe(g[1], p[1])
                        })) : (1 != p[0] || 1 != p[1]) && r.push(r.pop() + "scale(" + p + ")"), e = u.length,
                        function (t) {
                            for (var n, i = -1; ++i < e;) r[(n = u[i]).i] = n.x(t);
                            return r.join("")
                        }
                }

                function hr(t, n, e, r) {
                    var u = t.id,
                        i = t.namespace;
                    return H(t, "function" == typeof e ? function (t, a, o) {
                        t[i][u].tween.set(n, r(e.call(t, t.__data__, a, o)))
                    } : (e = r(e), function (t) {
                        t[i][u].tween.set(n, e)
                    }))
                }

                function gr(t) {
                    return null == t && (t = ""),
                        function () {
                            this.textContent = t
                        }
                }

                function pr(t) {
                    return function (n) {
                        return 0 >= n ? 0 : n >= 1 ? 1 : t(n)
                    }
                }

                function dr(t) {
                    return function (n) {
                        return 1 - t(1 - n)
                    }
                }

                function mr(t) {
                    return function (n) {
                        return .5 * (.5 > n ? t(2 * n) : 2 - t(2 - 2 * n))
                    }
                }

                function vr(t) {
                    return t * t
                }

                function yr(t) {
                    return t * t * t
                }

                function br(t) {
                    if (0 >= t) return 0;
                    if (t >= 1) return 1;
                    var n = t * t,
                        e = n * t;
                    return 4 * (.5 > t ? e : 3 * (t - n) + e - .75)
                }

                function wr(t) {
                    return function (n) {
                        return Math.pow(n, t)
                    }
                }

                function Mr(t) {
                    return 1 - Math.cos(t * ou)
                }

                function _r(t) {
                    return Math.pow(2, 10 * (t - 1))
                }

                function xr(t) {
                    return 1 - Math.sqrt(1 - t * t)
                }

                function kr(t, n) {
                    var e;
                    return arguments.length < 2 && (n = .45), arguments.length ? e = n / iu * Math.asin(1 / t) : (t = 1, e = n / 4),
                        function (r) {
                            return 1 + t * Math.pow(2, -10 * r) * Math.sin((r - e) * iu / n)
                        }
                }

                function Ar(t) {
                    return t || (t = 1.70158),
                        function (n) {
                            return n * n * ((t + 1) * n - t)
                        }
                }

                function Sr(t) {
                    return 1 / 2.75 > t ? 7.5625 * t * t : 2 / 2.75 > t ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : 2.5 / 2.75 > t ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                }

                function Tr(t) {
                    return null == t ? "__transition__" : "__transition_" + t + "__"
                }

                function Dr(t, n, e, r, u) {
                    var i = t[e] || (t[e] = {
                            active: 0,
                            count: 0
                        }),
                        a = i[r];
                    if (!a) {
                        var o = u.time;
                        a = i[r] = {
                            tween: new m,
                            time: o,
                            delay: u.delay,
                            duration: u.duration,
                            ease: u.ease,
                            index: n
                        }, u = null, ++i.count, Fr.timer(function (u) {
                            function s(e) {
                                if (i.active > r) return l();
                                var u = i[i.active];
                                u && (--i.count, delete i[i.active], u.event && u.event.interrupt.call(t, t.__data__, u.index)), i.active = r, a.event && a.event.start.call(t, t.__data__, n), a.tween.forEach(function (e, r) {
                                    (r = r.call(t, t.__data__, n)) && d.push(r)
                                }), h = a.ease, f = a.duration, Fr.timer(function () {
                                    return p.c = c(e || 1) ? en : c, 1
                                }, 0, o)
                            }

                            function c(e) {
                                if (i.active !== r) return 1;
                                for (var u = e / f, o = h(u), s = d.length; s > 0;) d[--s].call(t, o);
                                return u >= 1 ? (a.event && a.event.end.call(t, t.__data__, n), l()) : void 0
                            }

                            function l() {
                                return --i.count ? delete i[r] : delete t[e], 1
                            }
                            var f, h, g = a.delay,
                                p = Xu,
                                d = [];
                            return p.t = g + o, u >= g ? s(u - g) : void(p.c = s)
                        }, 0, o)
                    }
                }

                function Nr(t, n, e) {
                    t.attr("transform", function (t) {
                        var r = n(t);
                        return "translate(" + (isFinite(r) ? r : e(t)) + ",0)"
                    })
                }

                function Cr(t, n, e) {
                    t.attr("transform", function (t) {
                        var r = n(t);
                        return "translate(0," + (isFinite(r) ? r : e(t)) + ")"
                    })
                }

                function Lr() {
                    var t = ".dragsuppress-" + ++si,
                        n = "click" + t,
                        e = Fr.select(Ir).on("touchmove" + t, z).on("dragstart" + t, z).on("selectstart" + t, z);
                    if (oi) {
                        var r = Ur.style,
                            u = r[oi];
                        r[oi] = "none"
                    }
                    return function (i) {
                        if (e.on(t, null), oi && (r[oi] = u), i) {
                            var a = function () {
                                e.on(n, null)
                            };
                            e.on(n, function () {
                                z(), a()
                            }, !0), setTimeout(a, 0)
                        }
                    }
                }

                function zr(t, n) {
                    n.changedTouches && (n = n.changedTouches[0]);
                    var e = t.ownerSVGElement || t;
                    if (e.createSVGPoint) {
                        var r = e.createSVGPoint();
                        if (0 > ci && (Ir.scrollX || Ir.scrollY)) {
                            e = Fr.select("body").append("svg").style({
                                position: "absolute",
                                top: 0,
                                left: 0,
                                margin: 0,
                                padding: 0,
                                border: "none"
                            }, "important");
                            var u = e[0][0].getScreenCTM();
                            ci = !(u.f || u.e), e.remove()
                        }
                        return ci ? (r.x = n.pageX, r.y = n.pageY) : (r.x = n.clientX, r.y = n.clientY), r = r.matrixTransform(t.getScreenCTM().inverse()), [r.x, r.y]
                    }
                    var i = t.getBoundingClientRect();
                    return [n.clientX - i.left - t.clientLeft, n.clientY - i.top - t.clientTop]
                }

                function qr(t) {
                    return t.toISOString()
                }

                function jr(t, n, e) {
                    function r(n) {
                        return t(n)
                    }

                    function u(t, e) {
                        var r = t[1] - t[0],
                            u = r / e,
                            i = Fr.bisect(di, u);
                        return i == di.length ? [n.year, Ge(t.map(function (t) {
                            return t / 31536e6
                        }), e)[2]] : i ? n[u / di[i - 1] < di[i] / u ? i - 1 : i] : [yi, Ge(t, e)[2]]
                    }
                    return r.invert = function (n) {
                        return Er(t.invert(n))
                    }, r.domain = function (n) {
                        return arguments.length ? (t.domain(n), r) : t.domain().map(Er)
                    }, r.nice = function (t, n) {
                        function e(e) {
                            return !isNaN(e) && !t.range(e, Er(+e + 1), n).length
                        }
                        var i = r.domain(),
                            a = $e(i),
                            o = null == t ? u(a, 10) : "number" == typeof t && u(a, t);
                        return o && (t = o[0], n = o[1]), r.domain(Ve(i, n > 1 ? {
                            floor: function (n) {
                                for (; e(n = t.floor(n));) n = Er(n - 1);
                                return n
                            },
                            ceil: function (n) {
                                for (; e(n = t.ceil(n));) n = Er(+n + 1);
                                return n
                            }
                        } : t))
                    }, r.ticks = function (t, n) {
                        var e = $e(r.domain()),
                            i = null == t ? u(e, 10) : "number" == typeof t ? u(e, t) : !t.range && [{
                                range: t
                            }, n];
                        return i && (t = i[0], n = i[1]), t.range(e[0], Er(+e[1] + 1), 1 > n ? 1 : n)
                    }, r.tickFormat = function () {
                        return e
                    }, r.copy = function () {
                        return jr(t.copy(), n, e)
                    }, We(r, t)
                }

                function Er(t) {
                    return new Date(t)
                }
                var Fr = {
                        version: "3.5.3"
                    },
                    Or = [].slice,
                    Hr = function (t) {
                        return Or.call(t)
                    },
                    Yr = document,
                    Ur = Yr.documentElement,
                    Ir = window;
                try {
                    Hr(Ur.childNodes)[0].nodeType
                } catch (Vr) {
                    Hr = function (t) {
                        for (var n = t.length, e = new Array(n); n--;) e[n] = t[n];
                        return e
                    }
                }
                var Pr = {}.__proto__ ? function (t, n) {
                        t.__proto__ = n
                    } : function (t, n) {
                        for (var e in n) t[e] = n[e]
                    },
                    Zr = ["webkit", "ms", "moz", "Moz", "o", "O"],
                    Rr = function (t, n) {
                        return n.querySelector(t)
                    },
                    $r = function (t, n) {
                        return n.querySelectorAll(t)
                    },
                    Xr = Ur.matches || Ur[n(Ur, "matchesSelector")],
                    Br = function (t, n) {
                        return Xr.call(t, n)
                    };
                "function" == typeof Sizzle && (Rr = function (t, n) {
                    return Sizzle(t, n)[0] || null
                }, $r = Sizzle, Br = Sizzle.matchesSelector), Fr.selection = function () {
                    return eu
                };
                var Wr = Fr.selection.prototype = [];
                Wr.selectAll = function (t) {
                    var n, e, i = [];
                    t = u(t);
                    for (var a = -1, o = this.length; ++a < o;)
                        for (var s = this[a], c = -1, l = s.length; ++c < l;)(e = s[c]) && (i.push(n = Hr(t.call(e, e.__data__, c, a))), n.parentNode = e);
                    return r(i)
                };
                var Jr = {
                    svg: "http://www.w3.org/2000/svg",
                    xhtml: "http://www.w3.org/1999/xhtml",
                    xlink: "http://www.w3.org/1999/xlink",
                    xml: "http://www.w3.org/XML/1998/namespace",
                    xmlns: "http://www.w3.org/2000/xmlns/"
                };
                Fr.ns = {
                    prefix: Jr,
                    qualify: function (t) {
                        var n = t.indexOf(":"),
                            e = t;
                        return n >= 0 && (e = t.slice(0, n), t = t.slice(n + 1)), Jr.hasOwnProperty(e) ? {
                            space: Jr[e],
                            local: t
                        } : t
                    }
                }, Wr.attr = function (t, n) {
                    if (arguments.length < 2) {
                        if ("string" == typeof t) {
                            var e = this.node();
                            return t = Fr.ns.qualify(t), t.local ? e.getAttributeNS(t.space, t.local) : e.getAttribute(t)
                        }
                        for (n in t) this.each(i(n, t[n]));
                        return this
                    }
                    return this.each(i(t, n))
                }, Fr.requote = function (t) {
                    return t.replace(Gr, "\\$&")
                };
                var Gr = /[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;
                Wr.classed = function (t, n) {
                    if (arguments.length < 2) {
                        if ("string" == typeof t) {
                            var e = this.node(),
                                r = (t = s(t)).length,
                                u = -1;
                            if (n = e.classList) {
                                for (; ++u < r;)
                                    if (!n.contains(t[u])) return !1
                            } else
                                for (n = e.getAttribute("class"); ++u < r;)
                                    if (!o(t[u]).test(n)) return !1; return !0
                        }
                        for (n in t) this.each(c(n, t[n]));
                        return this
                    }
                    return this.each(c(t, n))
                }, Wr.style = function (t, n, e) {
                    var r = arguments.length;
                    if (3 > r) {
                        if ("string" != typeof t) {
                            2 > r && (n = "");
                            for (e in t) this.each(f(e, t[e], n));
                            return this
                        }
                        if (2 > r) return Ir.getComputedStyle(this.node(), null).getPropertyValue(t);
                        e = ""
                    }
                    return this.each(f(t, n, e))
                }, Wr.property = function (t, n) {
                    if (arguments.length < 2) {
                        if ("string" == typeof t) return this.node()[t];
                        for (n in t) this.each(h(n, t[n]));
                        return this
                    }
                    return this.each(h(t, n))
                }, Wr.text = function (t) {
                    return arguments.length ? this.each("function" == typeof t ? function () {
                        var n = t.apply(this, arguments);
                        this.textContent = null == n ? "" : n
                    } : null == t ? function () {
                        this.textContent = ""
                    } : function () {
                        this.textContent = t
                    }) : this.node().textContent
                }, Wr.html = function (t) {
                    return arguments.length ? this.each("function" == typeof t ? function () {
                        var n = t.apply(this, arguments);
                        this.innerHTML = null == n ? "" : n
                    } : null == t ? function () {
                        this.innerHTML = ""
                    } : function () {
                        this.innerHTML = t
                    }) : this.node().innerHTML
                }, Wr.append = function (t) {
                    return t = g(t), this.select(function () {
                        return this.appendChild(t.apply(this, arguments))
                    })
                }, Wr.insert = function (t, n) {
                    return t = g(t), n = I(n), this.select(function () {
                        return this.insertBefore(t.apply(this, arguments), n.apply(this, arguments) || null)
                    })
                }, Wr.remove = function () {
                    return this.each(p)
                }, Fr.map = function (t, n) {
                    var e = new m;
                    if (t instanceof m) t.forEach(function (t, n) {
                        e.set(t, n)
                    });
                    else if (Array.isArray(t)) {
                        var r, u = -1,
                            i = t.length;
                        if (1 === arguments.length)
                            for (; ++u < i;) e.set(u, t[u]);
                        else
                            for (; ++u < i;) e.set(n.call(t, r = t[u], u), r)
                    } else
                        for (var a in t) e.set(a, t[a]);
                    return e
                };
                var Kr = "__proto__",
                    Qr = "\x00";
                d(m, {
                    has: b,
                    get: function (t) {
                        return this._[v(t)]
                    },
                    set: function (t, n) {
                        return this._[v(t)] = n
                    },
                    remove: w,
                    keys: M,
                    values: function () {
                        var t = [];
                        for (var n in this._) t.push(this._[n]);
                        return t
                    },
                    entries: function () {
                        var t = [];
                        for (var n in this._) t.push({
                            key: y(n),
                            value: this._[n]
                        });
                        return t
                    },
                    size: _,
                    empty: x,
                    forEach: function (t) {
                        for (var n in this._) t.call(this, y(n), this._[n])
                    }
                }), Fr.set = function (t) {
                    var n = new k;
                    if (t)
                        for (var e = 0, r = t.length; r > e; ++e) n.add(t[e]);
                    return n
                }, d(k, {
                    has: b,
                    add: function (t) {
                        return this._[v(t += "")] = !0, t
                    },
                    remove: w,
                    values: M,
                    size: _,
                    empty: x,
                    forEach: function (t) {
                        for (var n in this._) t.call(this, y(n))
                    }
                }), Wr.data = function (t, n) {
                    function e(t, e) {
                        var r, u, i, a = t.length,
                            o = e.length,
                            f = Math.min(a, o),
                            h = new Array(o),
                            g = new Array(o),
                            p = new Array(a);
                        if (n) {
                            var d, v = new m,
                                y = new Array(a);
                            for (r = -1; ++r < a;) v.has(d = n.call(u = t[r], u.__data__, r)) ? p[r] = u : v.set(d, u), y[r] = d;
                            for (r = -1; ++r < o;)(u = v.get(d = n.call(e, i = e[r], r))) ? u !== !0 && (h[r] = u, u.__data__ = i) : g[r] = A(i), v.set(d, !0);
                            for (r = -1; ++r < a;) v.get(y[r]) !== !0 && (p[r] = t[r])
                        } else {
                            for (r = -1; ++r < f;) u = t[r], i = e[r], u ? (u.__data__ = i, h[r] = u) : g[r] = A(i);
                            for (; o > r; ++r) g[r] = A(e[r]);
                            for (; a > r; ++r) p[r] = t[r]
                        }
                        g.update = h, g.parentNode = h.parentNode = p.parentNode = t.parentNode, s.push(g), c.push(h), l.push(p)
                    }
                    var u, i, a = -1,
                        o = this.length;
                    if (!arguments.length) {
                        for (t = new Array(o = (u = this[0]).length); ++a < o;)(i = u[a]) && (t[a] = i.__data__);
                        return t
                    }
                    var s = Y([]),
                        c = r([]),
                        l = r([]);
                    if ("function" == typeof t)
                        for (; ++a < o;) e(u = this[a], t.call(u, u.parentNode.__data__, a));
                    else
                        for (; ++a < o;) e(u = this[a], t);
                    return c.enter = function () {
                        return s
                    }, c.exit = function () {
                        return l
                    }, c
                }, Wr.datum = function (t) {
                    return arguments.length ? this.property("__data__", t) : this.property("__data__")
                }, Wr.filter = function (t) {
                    var n, e, u, i = [];
                    "function" != typeof t && (t = S(t));
                    for (var a = 0, o = this.length; o > a; a++) {
                        i.push(n = []), n.parentNode = (e = this[a]).parentNode;
                        for (var s = 0, c = e.length; c > s; s++)(u = e[s]) && t.call(u, u.__data__, s, a) && n.push(u)
                    }
                    return r(i)
                }, Wr.order = function () {
                    for (var t = -1, n = this.length; ++t < n;)
                        for (var e, r = this[t], u = r.length - 1, i = r[u]; --u >= 0;)(e = r[u]) && (i && i !== e.nextSibling && i.parentNode.insertBefore(e, i), i = e);
                    return this
                }, Fr.ascending = T, Wr.sort = function (t) {
                    t = D.apply(this, arguments);
                    for (var n = -1, e = this.length; ++n < e;) this[n].sort(t);
                    return this.order()
                }, Fr.dispatch = function () {
                    for (var t = new C, n = -1, e = arguments.length; ++n < e;) t[arguments[n]] = L(t);
                    return t
                }, C.prototype.on = function (t, n) {
                    var e = t.indexOf("."),
                        r = "";
                    if (e >= 0 && (r = t.slice(e + 1), t = t.slice(0, e)), t) return arguments.length < 2 ? this[t].on(r) : this[t].on(r, n);
                    if (2 === arguments.length) {
                        if (null == n)
                            for (t in this) this.hasOwnProperty(t) && this[t].on(r, null);
                        return this
                    }
                }, Fr.event = null, Wr.on = function (t, n, e) {
                    var r = arguments.length;
                    if (3 > r) {
                        if ("string" != typeof t) {
                            2 > r && (n = !1);
                            for (e in t) this.each(E(e, t[e], n));
                            return this
                        }
                        if (2 > r) return (r = this.node()["__on" + t]) && r._;
                        e = !1
                    }
                    return this.each(E(t, n, e))
                };
                var tu = Fr.map({
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                });
                tu.forEach(function (t) {
                    "on" + t in Yr && tu.remove(t)
                }), Wr.each = function (t) {
                    return H(this, function (n, e, r) {
                        t.call(n, n.__data__, e, r)
                    })
                }, Wr.call = function (t) {
                    var n = Hr(arguments);
                    return t.apply(n[0] = this, n), this
                }, Wr.empty = function () {
                    return !this.node()
                }, Wr.node = function () {
                    for (var t = 0, n = this.length; n > t; t++)
                        for (var e = this[t], r = 0, u = e.length; u > r; r++) {
                            var i = e[r];
                            if (i) return i
                        }
                    return null
                }, Wr.size = function () {
                    var t = 0;
                    return H(this, function () {
                        ++t
                    }), t
                };
                var nu = [];
                Fr.selection.enter = Y, Fr.selection.enter.prototype = nu, nu.append = Wr.append, nu.empty = Wr.empty, nu.node = Wr.node, nu.call = Wr.call, nu.size = Wr.size, nu.select = function (t) {
                    for (var n, e, u, i, a, o = [], s = -1, c = this.length; ++s < c;) {
                        u = (i = this[s]).update, o.push(n = []), n.parentNode = i.parentNode;
                        for (var l = -1, f = i.length; ++l < f;)(a = i[l]) ? (n.push(u[l] = e = t.call(i.parentNode, a.__data__, l, s)), e.__data__ = a.__data__) : n.push(null)
                    }
                    return r(o)
                }, nu.insert = function (t, n) {
                    return arguments.length < 2 && (n = U(this)), Wr.insert.call(this, t, n)
                }, Fr.select = function (t) {
                    var n = ["string" == typeof t ? Rr(t, Yr) : t];
                    return n.parentNode = Ur, r([n])
                }, Fr.selectAll = function (t) {
                    var n = Hr("string" == typeof t ? $r(t, Yr) : t);
                    return n.parentNode = Ur, r([n])
                };
                var eu = Fr.select(Ur);
                Wr.select = function (t) {
                    var n, e, u, i, a = [];
                    t = I(t);
                    for (var o = -1, s = this.length; ++o < s;) {
                        a.push(n = []), n.parentNode = (u = this[o]).parentNode;
                        for (var c = -1, l = u.length; ++c < l;)(i = u[c]) ? (n.push(e = t.call(i, i.__data__, c, o)), e && "__data__" in i && (e.__data__ = i.__data__)) : n.push(null)
                    }
                    return r(a)
                }, Fr.svg = {}, Fr.functor = V;
                var ru = 1e-6,
                    uu = Math.PI,
                    iu = 2 * uu,
                    au = iu - ru,
                    ou = uu / 2,
                    su = uu / 180,
                    cu = 180 / uu;
                Fr.geom = {}, Fr.geom.polygon = function (t) {
                    return Pr(t, lu), t
                };
                var lu = Fr.geom.polygon.prototype = [];
                lu.area = function () {
                    for (var t, n = -1, e = this.length, r = this[e - 1], u = 0; ++n < e;) t = r, r = this[n], u += t[1] * r[0] - t[0] * r[1];
                    return .5 * u
                }, lu.centroid = function (t) {
                    var n, e, r = -1,
                        u = this.length,
                        i = 0,
                        a = 0,
                        o = this[u - 1];
                    for (arguments.length || (t = -1 / (6 * this.area())); ++r < u;) n = o, o = this[r], e = n[0] * o[1] - o[0] * n[1], i += (n[0] + o[0]) * e, a += (n[1] + o[1]) * e;
                    return [i * t, a * t]
                }, lu.clip = function (t) {
                    for (var n, e, r, u, i, a, o = X(t), s = -1, c = this.length - X(this), l = this[c - 1]; ++s < c;) {
                        for (n = t.slice(), t.length = 0, u = this[s], i = n[(r = n.length - o) - 1], e = -1; ++e < r;) a = n[e], R(a, l, u) ? (R(i, l, u) || t.push($(i, a, l, u)), t.push(a)) : R(i, l, u) && t.push($(i, a, l, u)), i = a;
                        o && t.push(t[0]), l = u
                    }
                    return t
                }, Fr.svg.arc = function () {
                    function t() {
                        var t = Math.max(0, +e.apply(this, arguments)),
                            c = Math.max(0, +r.apply(this, arguments)),
                            l = a.apply(this, arguments) - ou,
                            f = o.apply(this, arguments) - ou,
                            h = Math.abs(f - l),
                            g = l > f ? 0 : 1;
                        if (t > c && (p = c, c = t, t = p), h >= au) return n(c, g) + (t ? n(t, 1 - g) : "") + "Z";
                        var p, d, m, v, y, b, w, M, _, x, k, A, S = 0,
                            T = 0,
                            D = [];
                        if ((v = (+s.apply(this, arguments) || 0) / 2) && (m = i === fu ? Math.sqrt(t * t + c * c) : +i.apply(this, arguments), g || (T *= -1), c && (T = Z(m / c * Math.sin(v))), t && (S = Z(m / t * Math.sin(v)))), c) {
                            y = c * Math.cos(l + T), b = c * Math.sin(l + T), w = c * Math.cos(f - T), M = c * Math.sin(f - T);
                            var N = Math.abs(f - l - 2 * T) <= uu ? 0 : 1;
                            if (T && Q(y, b, w, M) === g ^ N) {
                                var C = (l + f) / 2;
                                y = c * Math.cos(C), b = c * Math.sin(C), w = M = null
                            }
                        } else y = b = 0;
                        if (t) {
                            _ = t * Math.cos(f - S), x = t * Math.sin(f - S), k = t * Math.cos(l + S), A = t * Math.sin(l + S);
                            var L = Math.abs(l - f + 2 * S) <= uu ? 0 : 1;
                            if (S && Q(_, x, k, A) === 1 - g ^ L) {
                                var z = (l + f) / 2;
                                _ = t * Math.cos(z), x = t * Math.sin(z), k = A = null
                            }
                        } else _ = x = 0;
                        if ((p = Math.min(Math.abs(c - t) / 2, +u.apply(this, arguments))) > .001) {
                            d = c > t ^ g ? 0 : 1;
                            var q = null == k ? [_, x] : null == w ? [y, b] : $([y, b], [k, A], [w, M], [_, x]),
                                j = y - q[0],
                                E = b - q[1],
                                F = w - q[0],
                                O = M - q[1],
                                H = 1 / Math.sin(Math.acos((j * F + E * O) / (Math.sqrt(j * j + E * E) * Math.sqrt(F * F + O * O))) / 2),
                                Y = Math.sqrt(q[0] * q[0] + q[1] * q[1]);
                            if (null != w) {
                                var U = Math.min(p, (c - Y) / (H + 1)),
                                    I = tn(null == k ? [_, x] : [k, A], [y, b], c, U, g),
                                    V = tn([w, M], [_, x], c, U, g);
                                p === U ? D.push("M", I[0], "A", U, ",", U, " 0 0,", d, " ", I[1], "A", c, ",", c, " 0 ", 1 - g ^ Q(I[1][0], I[1][1], V[1][0], V[1][1]), ",", g, " ", V[1], "A", U, ",", U, " 0 0,", d, " ", V[0]) : D.push("M", I[0], "A", U, ",", U, " 0 1,", d, " ", V[0])
                            } else D.push("M", y, ",", b);
                            if (null != k) {
                                var P = Math.min(p, (t - Y) / (H - 1)),
                                    R = tn([y, b], [k, A], t, -P, g),
                                    X = tn([_, x], null == w ? [y, b] : [w, M], t, -P, g);
                                p === P ? D.push("L", X[0], "A", P, ",", P, " 0 0,", d, " ", X[1], "A", t, ",", t, " 0 ", g ^ Q(X[1][0], X[1][1], R[1][0], R[1][1]), ",", 1 - g, " ", R[1], "A", P, ",", P, " 0 0,", d, " ", R[0]) : D.push("L", X[0], "A", P, ",", P, " 0 0,", d, " ", R[0])
                            } else D.push("L", _, ",", x)
                        } else D.push("M", y, ",", b), null != w && D.push("A", c, ",", c, " 0 ", N, ",", g, " ", w, ",", M), D.push("L", _, ",", x), null != k && D.push("A", t, ",", t, " 0 ", L, ",", 1 - g, " ", k, ",", A);
                        return D.push("Z"), D.join("")
                    }

                    function n(t, n) {
                        return "M0," + t + "A" + t + "," + t + " 0 1," + n + " 0," + -t + "A" + t + "," + t + " 0 1," + n + " 0," + t
                    }
                    var e = B,
                        r = W,
                        u = P,
                        i = fu,
                        a = J,
                        o = G,
                        s = K;
                    return t.innerRadius = function (n) {
                        return arguments.length ? (e = V(n), t) : e
                    }, t.outerRadius = function (n) {
                        return arguments.length ? (r = V(n), t) : r
                    }, t.cornerRadius = function (n) {
                        return arguments.length ? (u = V(n), t) : u
                    }, t.padRadius = function (n) {
                        return arguments.length ? (i = n == fu ? fu : V(n), t) : i
                    }, t.startAngle = function (n) {
                        return arguments.length ? (a = V(n), t) : a
                    }, t.endAngle = function (n) {
                        return arguments.length ? (o = V(n), t) : o
                    }, t.padAngle = function (n) {
                        return arguments.length ? (s = V(n), t) : s
                    }, t.centroid = function () {
                        var t = (+e.apply(this, arguments) + +r.apply(this, arguments)) / 2,
                            n = (+a.apply(this, arguments) + +o.apply(this, arguments)) / 2 - ou;
                        return [Math.cos(n) * t, Math.sin(n) * t]
                    }, t
                };
                var fu = "auto",
                    hu = Math.abs;
                Fr.svg.line = function () {
                    return an(nn)
                };
                var gu = Fr.map({
                    linear: on,
                    "linear-closed": sn,
                    step: cn,
                    "step-before": ln,
                    "step-after": fn,
                    basis: vn,
                    "basis-open": yn,
                    "basis-closed": bn,
                    bundle: wn,
                    cardinal: pn,
                    "cardinal-open": hn,
                    "cardinal-closed": gn,
                    monotone: Sn
                });
                gu.forEach(function (t, n) {
                    n.key = t, n.closed = /-closed$/.test(t)
                });
                var pu = [0, 2 / 3, 1 / 3, 0],
                    du = [0, 1 / 3, 2 / 3, 0],
                    mu = [0, 1 / 6, 2 / 3, 1 / 6];
                Fr.svg.line.radial = function () {
                    var t = an(Tn);
                    return t.radius = t.x, delete t.x, t.angle = t.y, delete t.y, t
                }, ln.reverse = fn, fn.reverse = ln, Fr.svg.area = function () {
                    return Dn(nn)
                }, Fr.svg.area.radial = function () {
                    var t = Dn(Tn);
                    return t.radius = t.x, delete t.x, t.innerRadius = t.x0, delete t.x0, t.outerRadius = t.x1, delete t.x1, t.angle = t.y, delete t.y, t.startAngle = t.y0, delete t.y0, t.endAngle = t.y1, delete t.y1, t
                }, Fr.svg.chord = function () {
                    function t(t, o) {
                        var s = n(this, i, t, o),
                            c = n(this, a, t, o);
                        return "M" + s.p0 + r(s.r, s.p1, s.a1 - s.a0) + (e(s, c) ? u(s.r, s.p1, s.r, s.p0) : u(s.r, s.p1, c.r, c.p0) + r(c.r, c.p1, c.a1 - c.a0) + u(c.r, c.p1, s.r, s.p0)) + "Z"
                    }

                    function n(t, n, e, r) {
                        var u = n.call(t, e, r),
                            i = o.call(t, u, r),
                            a = s.call(t, u, r) - ou,
                            l = c.call(t, u, r) - ou;
                        return {
                            r: i,
                            a0: a,
                            a1: l,
                            p0: [i * Math.cos(a), i * Math.sin(a)],
                            p1: [i * Math.cos(l), i * Math.sin(l)]
                        }
                    }

                    function e(t, n) {
                        return t.a0 == n.a0 && t.a1 == n.a1
                    }

                    function r(t, n, e) {
                        return "A" + t + "," + t + " 0 " + +(e > uu) + ",1 " + n
                    }

                    function u(t, n, e, r) {
                        return "Q 0,0 " + r
                    }
                    var i = Nn,
                        a = Cn,
                        o = Ln,
                        s = J,
                        c = G;
                    return t.radius = function (n) {
                        return arguments.length ? (o = V(n), t) : o
                    }, t.source = function (n) {
                        return arguments.length ? (i = V(n), t) : i
                    }, t.target = function (n) {
                        return arguments.length ? (a = V(n), t) : a
                    }, t.startAngle = function (n) {
                        return arguments.length ? (s = V(n), t) : s
                    }, t.endAngle = function (n) {
                        return arguments.length ? (c = V(n), t) : c
                    }, t
                }, Fr.svg.diagonal = function () {
                    function t(t, u) {
                        var i = n.call(this, t, u),
                            a = e.call(this, t, u),
                            o = (i.y + a.y) / 2,
                            s = [i, {
                                x: i.x,
                                y: o
                            }, {
                                x: a.x,
                                y: o
                            }, a];
                        return s = s.map(r), "M" + s[0] + "C" + s[1] + " " + s[2] + " " + s[3]
                    }
                    var n = Nn,
                        e = Cn,
                        r = zn;
                    return t.source = function (e) {
                        return arguments.length ? (n = V(e), t) : n
                    }, t.target = function (n) {
                        return arguments.length ? (e = V(n), t) : e
                    }, t.projection = function (n) {
                        return arguments.length ? (r = n, t) : r
                    }, t
                }, Fr.svg.diagonal.radial = function () {
                    var t = Fr.svg.diagonal(),
                        n = zn,
                        e = t.projection;
                    return t.projection = function (t) {
                        return arguments.length ? e(qn(n = t)) : n
                    }, t
                }, Fr.svg.symbol = function () {
                    function t(t, r) {
                        return (vu.get(n.call(this, t, r)) || Fn)(e.call(this, t, r))
                    }
                    var n = En,
                        e = jn;
                    return t.type = function (e) {
                        return arguments.length ? (n = V(e), t) : n
                    }, t.size = function (n) {
                        return arguments.length ? (e = V(n), t) : e
                    }, t
                };
                var vu = Fr.map({
                    circle: Fn,
                    cross: function (t) {
                        var n = Math.sqrt(t / 5) / 2;
                        return "M" + -3 * n + "," + -n + "H" + -n + "V" + -3 * n + "H" + n + "V" + -n + "H" + 3 * n + "V" + n + "H" + n + "V" + 3 * n + "H" + -n + "V" + n + "H" + -3 * n + "Z"
                    },
                    diamond: function (t) {
                        var n = Math.sqrt(t / (2 * bu)),
                            e = n * bu;
                        return "M0," + -n + "L" + e + ",0 0," + n + " " + -e + ",0Z"
                    },
                    square: function (t) {
                        var n = Math.sqrt(t) / 2;
                        return "M" + -n + "," + -n + "L" + n + "," + -n + " " + n + "," + n + " " + -n + "," + n + "Z"
                    },
                    "triangle-down": function (t) {
                        var n = Math.sqrt(t / yu),
                            e = n * yu / 2;
                        return "M0," + e + "L" + n + "," + -e + " " + -n + "," + -e + "Z"
                    },
                    "triangle-up": function (t) {
                        var n = Math.sqrt(t / yu),
                            e = n * yu / 2;
                        return "M0," + -e + "L" + n + "," + e + " " + -n + "," + e + "Z"
                    }
                });
                Fr.svg.symbolTypes = vu.keys();
                var yu = Math.sqrt(3),
                    bu = Math.tan(30 * su);
                Fr.range = function (t, n, e) {
                    if (arguments.length < 3 && (e = 1, arguments.length < 2 && (n = t, t = 0)), (n - t) / e === 1 / 0) throw new Error("infinite range");
                    var r, u = [],
                        i = On(hu(e)),
                        a = -1;
                    if (t *= i, n *= i, e *= i, 0 > e)
                        for (;
                            (r = t + e * ++a) > n;) u.push(r / i);
                    else
                        for (;
                            (r = t + e * ++a) < n;) u.push(r / i);
                    return u
                }, Fr.rebind = function (t, n) {
                    for (var e, r = 1, u = arguments.length; ++r < u;) t[e = arguments[r]] = Hn(t, n, n[e]);
                    return t
                }, Fr.color = Yn, Yn.prototype.toString = function () {
                    return this.rgb() + ""
                }, Fr.hsl = Un;
                var wu = Un.prototype = new Yn;
                wu.brighter = function (t) {
                    return t = Math.pow(.7, arguments.length ? t : 1), new Un(this.h, this.s, this.l / t)
                }, wu.darker = function (t) {
                    return t = Math.pow(.7, arguments.length ? t : 1), new Un(this.h, this.s, t * this.l)
                }, wu.rgb = function () {
                    return In(this.h, this.s, this.l)
                }, Fr.hcl = Vn;
                var Mu = Vn.prototype = new Yn;
                Mu.brighter = function (t) {
                    return new Vn(this.h, this.c, Math.min(100, this.l + _u * (arguments.length ? t : 1)))
                }, Mu.darker = function (t) {
                    return new Vn(this.h, this.c, Math.max(0, this.l - _u * (arguments.length ? t : 1)))
                }, Mu.rgb = function () {
                    return Pn(this.h, this.c, this.l).rgb()
                }, Fr.lab = Zn;
                var _u = 18,
                    xu = .95047,
                    ku = 1,
                    Au = 1.08883,
                    Su = Zn.prototype = new Yn;
                Su.brighter = function (t) {
                    return new Zn(Math.min(100, this.l + _u * (arguments.length ? t : 1)), this.a, this.b)
                }, Su.darker = function (t) {
                    return new Zn(Math.max(0, this.l - _u * (arguments.length ? t : 1)), this.a, this.b)
                }, Su.rgb = function () {
                    return Rn(this.l, this.a, this.b)
                }, Fr.rgb = Jn;
                var Tu = Jn.prototype = new Yn;
                Tu.brighter = function (t) {
                    t = Math.pow(.7, arguments.length ? t : 1);
                    var n = this.r,
                        e = this.g,
                        r = this.b,
                        u = 30;
                    return n || e || r ? (n && u > n && (n = u), e && u > e && (e = u), r && u > r && (r = u), new Jn(Math.min(255, n / t), Math.min(255, e / t), Math.min(255, r / t))) : new Jn(u, u, u)
                }, Tu.darker = function (t) {
                    return t = Math.pow(.7, arguments.length ? t : 1), new Jn(t * this.r, t * this.g, t * this.b)
                }, Tu.hsl = function () {
                    return te(this.r, this.g, this.b)
                }, Tu.toString = function () {
                    return "#" + Kn(this.r) + Kn(this.g) + Kn(this.b)
                };
                var Du = Fr.map({
                    aliceblue: 15792383,
                    antiquewhite: 16444375,
                    aqua: 65535,
                    aquamarine: 8388564,
                    azure: 15794175,
                    beige: 16119260,
                    bisque: 16770244,
                    black: 0,
                    blanchedalmond: 16772045,
                    blue: 255,
                    blueviolet: 9055202,
                    brown: 10824234,
                    burlywood: 14596231,
                    cadetblue: 6266528,
                    chartreuse: 8388352,
                    chocolate: 13789470,
                    coral: 16744272,
                    cornflowerblue: 6591981,
                    cornsilk: 16775388,
                    crimson: 14423100,
                    cyan: 65535,
                    darkblue: 139,
                    darkcyan: 35723,
                    darkgoldenrod: 12092939,
                    darkgray: 11119017,
                    darkgreen: 25600,
                    darkgrey: 11119017,
                    darkkhaki: 12433259,
                    darkmagenta: 9109643,
                    darkolivegreen: 5597999,
                    darkorange: 16747520,
                    darkorchid: 10040012,
                    darkred: 9109504,
                    darksalmon: 15308410,
                    darkseagreen: 9419919,
                    darkslateblue: 4734347,
                    darkslategray: 3100495,
                    darkslategrey: 3100495,
                    darkturquoise: 52945,
                    darkviolet: 9699539,
                    deeppink: 16716947,
                    deepskyblue: 49151,
                    dimgray: 6908265,
                    dimgrey: 6908265,
                    dodgerblue: 2003199,
                    firebrick: 11674146,
                    floralwhite: 16775920,
                    forestgreen: 2263842,
                    fuchsia: 16711935,
                    gainsboro: 14474460,
                    ghostwhite: 16316671,
                    gold: 16766720,
                    goldenrod: 14329120,
                    gray: 8421504,
                    green: 32768,
                    greenyellow: 11403055,
                    grey: 8421504,
                    honeydew: 15794160,
                    hotpink: 16738740,
                    indianred: 13458524,
                    indigo: 4915330,
                    ivory: 16777200,
                    khaki: 15787660,
                    lavender: 15132410,
                    lavenderblush: 16773365,
                    lawngreen: 8190976,
                    lemonchiffon: 16775885,
                    lightblue: 11393254,
                    lightcoral: 15761536,
                    lightcyan: 14745599,
                    lightgoldenrodyellow: 16448210,
                    lightgray: 13882323,
                    lightgreen: 9498256,
                    lightgrey: 13882323,
                    lightpink: 16758465,
                    lightsalmon: 16752762,
                    lightseagreen: 2142890,
                    lightskyblue: 8900346,
                    lightslategray: 7833753,
                    lightslategrey: 7833753,
                    lightsteelblue: 11584734,
                    lightyellow: 16777184,
                    lime: 65280,
                    limegreen: 3329330,
                    linen: 16445670,
                    magenta: 16711935,
                    maroon: 8388608,
                    mediumaquamarine: 6737322,
                    mediumblue: 205,
                    mediumorchid: 12211667,
                    mediumpurple: 9662683,
                    mediumseagreen: 3978097,
                    mediumslateblue: 8087790,
                    mediumspringgreen: 64154,
                    mediumturquoise: 4772300,
                    mediumvioletred: 13047173,
                    midnightblue: 1644912,
                    mintcream: 16121850,
                    mistyrose: 16770273,
                    moccasin: 16770229,
                    navajowhite: 16768685,
                    navy: 128,
                    oldlace: 16643558,
                    olive: 8421376,
                    olivedrab: 7048739,
                    orange: 16753920,
                    orangered: 16729344,
                    orchid: 14315734,
                    palegoldenrod: 15657130,
                    palegreen: 10025880,
                    paleturquoise: 11529966,
                    palevioletred: 14381203,
                    papayawhip: 16773077,
                    peachpuff: 16767673,
                    peru: 13468991,
                    pink: 16761035,
                    plum: 14524637,
                    powderblue: 11591910,
                    purple: 8388736,
                    red: 16711680,
                    rosybrown: 12357519,
                    royalblue: 4286945,
                    saddlebrown: 9127187,
                    salmon: 16416882,
                    sandybrown: 16032864,
                    seagreen: 3050327,
                    seashell: 16774638,
                    sienna: 10506797,
                    silver: 12632256,
                    skyblue: 8900331,
                    slateblue: 6970061,
                    slategray: 7372944,
                    slategrey: 7372944,
                    snow: 16775930,
                    springgreen: 65407,
                    steelblue: 4620980,
                    tan: 13808780,
                    teal: 32896,
                    thistle: 14204888,
                    tomato: 16737095,
                    turquoise: 4251856,
                    violet: 15631086,
                    wheat: 16113331,
                    white: 16777215,
                    whitesmoke: 16119285,
                    yellow: 16776960,
                    yellowgreen: 10145074
                });
                Du.forEach(function (t, n) {
                    Du.set(t, Gn(n))
                }), Fr.interpolateRgb = ue, Fr.interpolateObject = ie, Fr.interpolateArray = ae, Fr.interpolateNumber = oe, Fr.interpolateString = se;
                var Nu = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,
                    Cu = new RegExp(Nu.source, "g");
                Fr.interpolate = ce, Fr.interpolators = [function (t, n) {
                    var e = typeof n;
                    return ("string" === e ? Du.has(n) || /^(#|rgb\(|hsl\()/.test(n) ? ue : se : n instanceof Yn ? ue : Array.isArray(n) ? ae : "object" === e && isNaN(n) ? ie : oe)(t, n)
                }], Fr.interpolateRound = le, Fr.round = function (t, n) {
                    return n ? Math.round(t * (n = Math.pow(10, n))) / n : Math.round(t)
                };
                var Lu = ["y", "z", "a", "f", "p", "n", "µ", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"].map(pe);
                Fr.formatPrefix = function (t, n) {
                    var e = 0;
                    return t && (0 > t && (t *= -1), n && (t = Fr.round(t, ge(t, n))), e = 1 + Math.floor(1e-12 + Math.log(t) / Math.LN10), e = Math.max(-24, Math.min(24, 3 * Math.floor((e - 1) / 3)))), Lu[8 + e / 3]
                };
                var zu = /(?:([^{])?([<>=^]))?([+\- ])?([$#])?(0)?(\d+)?(,)?(\.-?\d+)?([a-z%])?/i,
                    qu = Fr.map({
                        b: function (t) {
                            return t.toString(2)
                        },
                        c: function (t) {
                            return String.fromCharCode(t)
                        },
                        o: function (t) {
                            return t.toString(8)
                        },
                        x: function (t) {
                            return t.toString(16)
                        },
                        X: function (t) {
                            return t.toString(16).toUpperCase()
                        },
                        g: function (t, n) {
                            return t.toPrecision(n)
                        },
                        e: function (t, n) {
                            return t.toExponential(n)
                        },
                        f: function (t, n) {
                            return t.toFixed(n)
                        },
                        r: function (t, n) {
                            return (t = Fr.round(t, ge(t, n))).toFixed(Math.max(0, Math.min(20, ge(t * (1 + 1e-15), n))))
                        }
                    }),
                    ju = Fr.time = {},
                    Eu = Date;
                ve.prototype = {
                    getDate: function () {
                        return this._.getUTCDate()
                    },
                    getDay: function () {
                        return this._.getUTCDay()
                    },
                    getFullYear: function () {
                        return this._.getUTCFullYear()
                    },
                    getHours: function () {
                        return this._.getUTCHours()
                    },
                    getMilliseconds: function () {
                        return this._.getUTCMilliseconds()
                    },
                    getMinutes: function () {
                        return this._.getUTCMinutes()
                    },
                    getMonth: function () {
                        return this._.getUTCMonth()
                    },
                    getSeconds: function () {
                        return this._.getUTCSeconds()
                    },
                    getTime: function () {
                        return this._.getTime()
                    },
                    getTimezoneOffset: function () {
                        return 0
                    },
                    valueOf: function () {
                        return this._.valueOf()
                    },
                    setDate: function () {
                        Fu.setUTCDate.apply(this._, arguments)
                    },
                    setDay: function () {
                        Fu.setUTCDay.apply(this._, arguments)
                    },
                    setFullYear: function () {
                        Fu.setUTCFullYear.apply(this._, arguments)
                    },
                    setHours: function () {
                        Fu.setUTCHours.apply(this._, arguments)
                    },
                    setMilliseconds: function () {
                        Fu.setUTCMilliseconds.apply(this._, arguments)
                    },
                    setMinutes: function () {
                        Fu.setUTCMinutes.apply(this._, arguments)
                    },
                    setMonth: function () {
                        Fu.setUTCMonth.apply(this._, arguments)
                    },
                    setSeconds: function () {
                        Fu.setUTCSeconds.apply(this._, arguments)
                    },
                    setTime: function () {
                        Fu.setTime.apply(this._, arguments)
                    }
                };
                var Fu = Date.prototype;
                ju.year = ye(function (t) {
                    return t = ju.day(t), t.setMonth(0, 1), t
                }, function (t, n) {
                    t.setFullYear(t.getFullYear() + n)
                }, function (t) {
                    return t.getFullYear()
                }), ju.years = ju.year.range, ju.years.utc = ju.year.utc.range, ju.day = ye(function (t) {
                    var n = new Eu(2e3, 0);
                    return n.setFullYear(t.getFullYear(), t.getMonth(), t.getDate()), n
                }, function (t, n) {
                    t.setDate(t.getDate() + n)
                }, function (t) {
                    return t.getDate() - 1
                }), ju.days = ju.day.range, ju.days.utc = ju.day.utc.range, ju.dayOfYear = function (t) {
                    var n = ju.year(t);
                    return Math.floor((t - n - 6e4 * (t.getTimezoneOffset() - n.getTimezoneOffset())) / 864e5)
                }, ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"].forEach(function (t, n) {
                    n = 7 - n;
                    var e = ju[t] = ye(function (t) {
                        return (t = ju.day(t)).setDate(t.getDate() - (t.getDay() + n) % 7), t
                    }, function (t, n) {
                        t.setDate(t.getDate() + 7 * Math.floor(n))
                    }, function (t) {
                        var e = ju.year(t).getDay();
                        return Math.floor((ju.dayOfYear(t) + (e + n) % 7) / 7) - (e !== n)
                    });
                    ju[t + "s"] = e.range, ju[t + "s"].utc = e.utc.range, ju[t + "OfYear"] = function (t) {
                        var e = ju.year(t).getDay();
                        return Math.floor((ju.dayOfYear(t) + (e + n) % 7) / 7)
                    }
                }), ju.week = ju.sunday, ju.weeks = ju.sunday.range, ju.weeks.utc = ju.sunday.utc.range, ju.weekOfYear = ju.sundayOfYear;
                var Ou = {
                        "-": "",
                        _: " ",
                        0: "0"
                    },
                    Hu = /^\s*\d+/,
                    Yu = /^%/;
                Fr.locale = function (t) {
                    return {
                        numberFormat: de(t),
                        timeFormat: we(t)
                    }
                };
                var Uu = Fr.locale({
                    decimal: ".",
                    thousands: ",",
                    grouping: [3],
                    currency: ["$", ""],
                    dateTime: "%a %b %e %X %Y",
                    date: "%m/%d/%Y",
                    time: "%H:%M:%S",
                    periods: ["AM", "PM"],
                    days: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                    shortDays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                    months: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
                    shortMonths: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
                });
                Fr.format = Uu.numberFormat;
                var Iu = {
                        floor: nn,
                        ceil: nn
                    },
                    Vu = Ze(T);
                Fr.bisectLeft = Vu.left, Fr.bisect = Fr.bisectRight = Vu.right, Fr.bisector = function (t) {
                    return Ze(1 === t.length ? function (n, e) {
                        return T(t(n), e)
                    } : t)
                }, Fr.scale = {}, Fr.scale.linear = function () {
                    return Be([0, 1], [0, 1], ce, !1)
                };
                var Pu, Zu, Ru, $u, Xu, Bu = {
                        s: 1,
                        g: 1,
                        p: 1,
                        r: 1,
                        e: 1
                    },
                    Wu = Ir[n(Ir, "requestAnimationFrame")] || function (t) {
                        setTimeout(t, 17)
                    };
                Fr.timer = function (t, n, e) {
                    var r = arguments.length;
                    2 > r && (n = 0), 3 > r && (e = Date.now());
                    var u = e + n,
                        i = {
                            c: t,
                            t: u,
                            f: !1,
                            n: null
                        };
                    Zu ? Zu.n = i : Pu = i, Zu = i, Ru || ($u = clearTimeout($u), Ru = 1, Wu(er))
                }, Fr.timer.flush = function () {
                    rr(), ur()
                }, Wr.transition = function (t) {
                    for (var n, e, r = Ju || ++ti, u = Tr(t), i = [], a = Gu || {
                            time: Date.now(),
                            ease: br,
                            delay: 0,
                            duration: 250
                        }, o = -1, s = this.length; ++o < s;) {
                        i.push(n = []);
                        for (var c = this[o], l = -1, f = c.length; ++l < f;)(e = c[l]) && Dr(e, l, u, r, a), n.push(e)
                    }
                    return ar(i, u, r)
                }, Wr.interrupt = function (t) {
                    return this.each(null == t ? Ku : ir(Tr(t)))
                };
                var Ju, Gu, Ku = ir(Tr()),
                    Qu = [],
                    ti = 0;
                Qu.call = Wr.call, Qu.empty = Wr.empty, Qu.node = Wr.node, Qu.size = Wr.size, Fr.transition = function (t, n) {
                    return t && t.transition ? Ju ? t.transition(n) : t : eu.transition(t)
                }, Fr.transition.prototype = Qu, Qu.select = function (t) {
                    var n, e, r, u = this.id,
                        i = this.namespace,
                        a = [];
                    t = I(t);
                    for (var o = -1, s = this.length; ++o < s;) {
                        a.push(n = []);
                        for (var c = this[o], l = -1, f = c.length; ++l < f;)(r = c[l]) && (e = t.call(r, r.__data__, l, o)) ? ("__data__" in r && (e.__data__ = r.__data__), Dr(e, l, i, u, r[i][u]), n.push(e)) : n.push(null)
                    }
                    return ar(a, i, u)
                }, Qu.selectAll = function (t) {
                    var n, e, r, i, a, o = this.id,
                        s = this.namespace,
                        c = [];
                    t = u(t);
                    for (var l = -1, f = this.length; ++l < f;)
                        for (var h = this[l], g = -1, p = h.length; ++g < p;)
                            if (r = h[g]) {
                                a = r[s][o], e = t.call(r, r.__data__, g, l), c.push(n = []);
                                for (var d = -1, m = e.length; ++d < m;)(i = e[d]) && Dr(i, d, s, o, a), n.push(i)
                            }
                    return ar(c, s, o)
                }, Qu.filter = function (t) {
                    var n, e, r, u = [];
                    "function" != typeof t && (t = S(t));
                    for (var i = 0, a = this.length; a > i; i++) {
                        u.push(n = []);
                        for (var e = this[i], o = 0, s = e.length; s > o; o++)(r = e[o]) && t.call(r, r.__data__, o, i) && n.push(r)
                    }
                    return ar(u, this.namespace, this.id)
                }, Fr.transform = function (t) {
                    var n = Yr.createElementNS(Fr.ns.prefix.svg, "g");
                    return (Fr.transform = function (t) {
                        if (null != t) {
                            n.setAttribute("transform", t);
                            var e = n.transform.baseVal.consolidate()
                        }
                        return new or(e ? e.matrix : ni)
                    })(t)
                }, or.prototype.toString = function () {
                    return "translate(" + this.translate + ")rotate(" + this.rotate + ")skewX(" + this.skew + ")scale(" + this.scale + ")"
                };
                var ni = {
                    a: 1,
                    b: 0,
                    c: 0,
                    d: 1,
                    e: 0,
                    f: 0
                };
                Fr.interpolateTransform = fr, Qu.tween = function (t, n) {
                    var e = this.id,
                        r = this.namespace;
                    return arguments.length < 2 ? this.node()[r][e].tween.get(t) : H(this, null == n ? function (n) {
                        n[r][e].tween.remove(t)
                    } : function (u) {
                        u[r][e].tween.set(t, n)
                    })
                }, Qu.attr = function (t, n) {
                    function e() {
                        this.removeAttribute(o)
                    }

                    function r() {
                        this.removeAttributeNS(o.space, o.local)
                    }

                    function u(t) {
                        return null == t ? e : (t += "", function () {
                            var n, e = this.getAttribute(o);
                            return e !== t && (n = a(e, t), function (t) {
                                this.setAttribute(o, n(t))
                            })
                        })
                    }

                    function i(t) {
                        return null == t ? r : (t += "", function () {
                            var n, e = this.getAttributeNS(o.space, o.local);
                            return e !== t && (n = a(e, t), function (t) {
                                this.setAttributeNS(o.space, o.local, n(t))
                            })
                        })
                    }
                    if (arguments.length < 2) {
                        for (n in t) this.attr(n, t[n]);
                        return this
                    }
                    var a = "transform" == t ? fr : ce,
                        o = Fr.ns.qualify(t);
                    return hr(this, "attr." + t, n, o.local ? i : u)
                }, Qu.attrTween = function (t, n) {
                    function e(t, e) {
                        var r = n.call(this, t, e, this.getAttribute(u));
                        return r && function (t) {
                            this.setAttribute(u, r(t))
                        }
                    }

                    function r(t, e) {
                        var r = n.call(this, t, e, this.getAttributeNS(u.space, u.local));
                        return r && function (t) {
                            this.setAttributeNS(u.space, u.local, r(t))
                        }
                    }
                    var u = Fr.ns.qualify(t);
                    return this.tween("attr." + t, u.local ? r : e)
                }, Qu.style = function (t, n, e) {
                    function r() {
                        this.style.removeProperty(t)
                    }

                    function u(n) {
                        return null == n ? r : (n += "", function () {
                            var r, u = Ir.getComputedStyle(this, null).getPropertyValue(t);
                            return u !== n && (r = ce(u, n), function (n) {
                                this.style.setProperty(t, r(n), e)
                            })
                        })
                    }
                    var i = arguments.length;
                    if (3 > i) {
                        if ("string" != typeof t) {
                            2 > i && (n = "");
                            for (e in t) this.style(e, t[e], n);
                            return this
                        }
                        e = ""
                    }
                    return hr(this, "style." + t, n, u)
                }, Qu.styleTween = function (t, n, e) {
                    function r(r, u) {
                        var i = n.call(this, r, u, Ir.getComputedStyle(this, null).getPropertyValue(t));
                        return i && function (n) {
                            this.style.setProperty(t, i(n), e)
                        }
                    }
                    return arguments.length < 3 && (e = ""), this.tween("style." + t, r)
                }, Qu.text = function (t) {
                    return hr(this, "text", t, gr)
                }, Qu.remove = function () {
                    var t = this.namespace;
                    return this.each("end.transition", function () {
                        var n;
                        this[t].count < 2 && (n = this.parentNode) && n.removeChild(this)
                    })
                };
                var ei = function () {
                        return nn
                    },
                    ri = Fr.map({
                        linear: ei,
                        poly: wr,
                        quad: function () {
                            return vr
                        },
                        cubic: function () {
                            return yr
                        },
                        sin: function () {
                            return Mr
                        },
                        exp: function () {
                            return _r
                        },
                        circle: function () {
                            return xr
                        },
                        elastic: kr,
                        back: Ar,
                        bounce: function () {
                            return Sr
                        }
                    }),
                    ui = Fr.map({
                        "in": nn,
                        out: dr,
                        "in-out": mr,
                        "out-in": function (t) {
                            return mr(dr(t))
                        }
                    });
                Fr.ease = function (t) {
                    var n = t.indexOf("-"),
                        e = n >= 0 ? t.slice(0, n) : t,
                        r = n >= 0 ? t.slice(n + 1) : "in";
                    return e = ri.get(e) || ei, r = ui.get(r) || nn, pr(r(e.apply(null, Or.call(arguments, 1))))
                }, Qu.ease = function (t) {
                    var n = this.id,
                        e = this.namespace;
                    return arguments.length < 1 ? this.node()[e][n].ease : ("function" != typeof t && (t = Fr.ease.apply(Fr, arguments)), H(this, function (r) {
                        r[e][n].ease = t
                    }))
                }, Qu.delay = function (t) {
                    var n = this.id,
                        e = this.namespace;
                    return arguments.length < 1 ? this.node()[e][n].delay : H(this, "function" == typeof t ? function (r, u, i) {
                        r[e][n].delay = +t.call(r, r.__data__, u, i)
                    } : (t = +t, function (r) {
                        r[e][n].delay = t
                    }))
                }, Qu.duration = function (t) {
                    var n = this.id,
                        e = this.namespace;
                    return arguments.length < 1 ? this.node()[e][n].duration : H(this, "function" == typeof t ? function (r, u, i) {
                        r[e][n].duration = Math.max(1, t.call(r, r.__data__, u, i))
                    } : (t = Math.max(1, t), function (r) {
                        r[e][n].duration = t
                    }))
                }, Qu.each = function (t, n) {
                    var e = this.id,
                        r = this.namespace;
                    if (arguments.length < 2) {
                        var u = Gu,
                            i = Ju;
                        try {
                            Ju = e, H(this, function (n, u, i) {
                                Gu = n[r][e], t.call(n, n.__data__, u, i)
                            })
                        } finally {
                            Gu = u, Ju = i
                        }
                    } else H(this, function (u) {
                        var i = u[r][e];
                        (i.event || (i.event = Fr.dispatch("start", "end", "interrupt"))).on(t, n)
                    });
                    return this
                }, Qu.transition = function () {
                    for (var t, n, e, r, u = this.id, i = ++ti, a = this.namespace, o = [], s = 0, c = this.length; c > s; s++) {
                        o.push(t = []);
                        for (var n = this[s], l = 0, f = n.length; f > l; l++)(e = n[l]) && (r = e[a][u], Dr(e, l, a, i, {
                            time: r.time,
                            ease: r.ease,
                            delay: r.delay + r.duration,
                            duration: r.duration
                        })), t.push(e)
                    }
                    return ar(o, a, i)
                }, Fr.svg.axis = function () {
                    function t(t) {
                        t.each(function () {
                            var t, c = Fr.select(this),
                                l = this.__chart__ || e,
                                f = this.__chart__ = e.copy(),
                                h = null == s ? f.ticks ? f.ticks.apply(f, o) : f.domain() : s,
                                g = null == n ? f.tickFormat ? f.tickFormat.apply(f, o) : nn : n,
                                p = c.selectAll(".tick").data(h, f),
                                d = p.enter().insert("g", ".domain").attr("class", "tick").style("opacity", ru),
                                m = Fr.transition(p.exit()).style("opacity", ru).remove(),
                                v = Fr.transition(p.order()).style("opacity", 1),
                                y = Math.max(u, 0) + a,
                                b = Xe(f),
                                w = c.selectAll(".domain").data([0]),
                                M = (w.enter().append("path").attr("class", "domain"), Fr.transition(w));
                            d.append("line"), d.append("text");
                            var _, x, k, A, S = d.select("line"),
                                T = v.select("line"),
                                D = p.select("text").text(g),
                                N = d.select("text"),
                                C = v.select("text"),
                                L = "top" === r || "left" === r ? -1 : 1;
                            if ("bottom" === r || "top" === r ? (t = Nr, _ = "x", k = "y", x = "x2", A = "y2", D.attr("dy", 0 > L ? "0em" : ".71em").style("text-anchor", "middle"), M.attr("d", "M" + b[0] + "," + L * i + "V0H" + b[1] + "V" + L * i)) : (t = Cr, _ = "y", k = "x", x = "y2", A = "x2", D.attr("dy", ".32em").style("text-anchor", 0 > L ? "end" : "start"), M.attr("d", "M" + L * i + "," + b[0] + "H0V" + b[1] + "H" + L * i)), S.attr(A, L * u), N.attr(k, L * y), T.attr(x, 0).attr(A, L * u), C.attr(_, 0).attr(k, L * y), f.rangeBand) {
                                var z = f,
                                    q = z.rangeBand() / 2;
                                l = f = function (t) {
                                    return z(t) + q
                                }
                            } else l.rangeBand ? l = f : m.call(t, f, l);
                            d.call(t, l, f), v.call(t, f, f)
                        })
                    }
                    var n, e = Fr.scale.linear(),
                        r = ii,
                        u = 6,
                        i = 6,
                        a = 3,
                        o = [10],
                        s = null;
                    return t.scale = function (n) {
                        return arguments.length ? (e = n, t) : e
                    }, t.orient = function (n) {
                        return arguments.length ? (r = n in ai ? n + "" : ii, t) : r
                    }, t.ticks = function () {
                        return arguments.length ? (o = arguments, t) : o
                    }, t.tickValues = function (n) {
                        return arguments.length ? (s = n, t) : s
                    }, t.tickFormat = function (e) {
                        return arguments.length ? (n = e, t) : n
                    }, t.tickSize = function (n) {
                        var e = arguments.length;
                        return e ? (u = +n, i = +arguments[e - 1], t) : u
                    }, t.innerTickSize = function (n) {
                        return arguments.length ? (u = +n, t) : u
                    }, t.outerTickSize = function (n) {
                        return arguments.length ? (i = +n, t) : i
                    }, t.tickPadding = function (n) {
                        return arguments.length ? (a = +n, t) : a
                    }, t.tickSubdivide = function () {
                        return arguments.length && t
                    }, t
                };
                var ii = "bottom",
                    ai = {
                        top: 1,
                        right: 1,
                        bottom: 1,
                        left: 1
                    },
                    oi = "onselectstart" in Yr ? null : n(Ur.style, "userSelect"),
                    si = 0;
                Fr.mouse = function (t) {
                    return zr(t, q())
                };
                var ci = /WebKit/.test(Ir.navigator.userAgent) ? -1 : 0;
                Fr.svg.brush = function () {
                    function t(i) {
                        i.each(function () {
                            var i = Fr.select(this).style("pointer-events", "all").style("-webkit-tap-highlight-color", "rgba(0,0,0,0)").on("mousedown.brush", u).on("touchstart.brush", u),
                                a = i.selectAll(".background").data([0]);
                            a.enter().append("rect").attr("class", "background").style("visibility", "hidden").style("cursor", "crosshair"), i.selectAll(".extent").data([0]).enter().append("rect").attr("class", "extent").style("cursor", "move");
                            var o = i.selectAll(".resize").data(p, nn);
                            o.exit().remove(), o.enter().append("g").attr("class", function (t) {
                                return "resize " + t
                            }).style("cursor", function (t) {
                                return li[t]
                            }).append("rect").attr("x", function (t) {
                                return /[ew]$/.test(t) ? -3 : null
                            }).attr("y", function (t) {
                                return /^[ns]/.test(t) ? -3 : null
                            }).attr("width", 6).attr("height", 6).style("visibility", "hidden"), o.style("display", t.empty() ? "none" : null);
                            var l, f = Fr.transition(i),
                                h = Fr.transition(a);
                            s && (l = Xe(s), h.attr("x", l[0]).attr("width", l[1] - l[0]), e(f)), c && (l = Xe(c), h.attr("y", l[0]).attr("height", l[1] - l[0]), r(f)), n(f)
                        })
                    }

                    function n(t) {
                        t.selectAll(".resize").attr("transform", function (t) {
                            return "translate(" + l[+/e$/.test(t)] + "," + f[+/^s/.test(t)] + ")"
                        })
                    }

                    function e(t) {
                        t.select(".extent").attr("x", l[0]), t.selectAll(".extent,.n>rect,.s>rect").attr("width", l[1] - l[0])
                    }

                    function r(t) {
                        t.select(".extent").attr("y", f[0]), t.selectAll(".extent,.e>rect,.w>rect").attr("height", f[1] - f[0])
                    }

                    function u() {
                        function u() {
                            32 == Fr.event.keyCode && (T || (y = null, N[0] -= l[1], N[1] -= f[1], T = 2), z())
                        }

                        function p() {
                            32 == Fr.event.keyCode && 2 == T && (N[0] += l[1], N[1] += f[1], T = 0, z())
                        }

                        function d() {
                            var t = Fr.mouse(w),
                                u = !1;
                            b && (t[0] += b[0], t[1] += b[1]), T || (Fr.event.altKey ? (y || (y = [(l[0] + l[1]) / 2, (f[0] + f[1]) / 2]), N[0] = l[+(t[0] < y[0])], N[1] = f[+(t[1] < y[1])]) : y = null), A && m(t, s, 0) && (e(x), u = !0), S && m(t, c, 1) && (r(x), u = !0), u && (n(x), _({
                                type: "brush",
                                mode: T ? "move" : "resize"
                            }))
                        }

                        function m(t, n, e) {
                            var r, u, o = Xe(n),
                                s = o[0],
                                c = o[1],
                                p = N[e],
                                d = e ? f : l,
                                m = d[1] - d[0];
                            return T && (s -= p, c -= m + p), r = (e ? g : h) ? Math.max(s, Math.min(c, t[e])) : t[e], T ? u = (r += p) + m : (y && (p = Math.max(s, Math.min(c, 2 * y[e] - r))), r > p ? (u = r, r = p) : u = p), d[0] != r || d[1] != u ? (e ? a = null : i = null, d[0] = r, d[1] = u, !0) : void 0
                        }

                        function v() {
                            d(), x.style("pointer-events", "all").selectAll(".resize").style("display", t.empty() ? "none" : null), Fr.select("body").style("cursor", null), C.on("mousemove.brush", null).on("mouseup.brush", null).on("touchmove.brush", null).on("touchend.brush", null).on("keydown.brush", null).on("keyup.brush", null), D(), _({
                                type: "brushend"
                            })
                        }
                        var y, b, w = this,
                            M = Fr.select(Fr.event.target),
                            _ = o.of(w, arguments),
                            x = Fr.select(w),
                            k = M.datum(),
                            A = !/^(n|s)$/.test(k) && s,
                            S = !/^(e|w)$/.test(k) && c,
                            T = M.classed("extent"),
                            D = Lr(),
                            N = Fr.mouse(w),
                            C = Fr.select(Ir).on("keydown.brush", u).on("keyup.brush", p);
                        if (Fr.event.changedTouches ? C.on("touchmove.brush", d).on("touchend.brush", v) : C.on("mousemove.brush", d).on("mouseup.brush", v), x.interrupt().selectAll("*").interrupt(), T) N[0] = l[0] - N[0], N[1] = f[0] - N[1];
                        else if (k) {
                            var L = +/w$/.test(k),
                                q = +/^n/.test(k);
                            b = [l[1 - L] - N[0], f[1 - q] - N[1]], N[0] = l[L], N[1] = f[q]
                        } else Fr.event.altKey && (y = N.slice());
                        x.style("pointer-events", "none").selectAll(".resize").style("display", null), Fr.select("body").style("cursor", M.style("cursor")), _({
                            type: "brushstart"
                        }), d()
                    }
                    var i, a, o = j(t, "brushstart", "brush", "brushend"),
                        s = null,
                        c = null,
                        l = [0, 0],
                        f = [0, 0],
                        h = !0,
                        g = !0,
                        p = fi[0];
                    return t.event = function (t) {
                        t.each(function () {
                            var t = o.of(this, arguments),
                                n = {
                                    x: l,
                                    y: f,
                                    i: i,
                                    j: a
                                },
                                e = this.__chart__ || n;
                            this.__chart__ = n, Ju ? Fr.select(this).transition().each("start.brush", function () {
                                i = e.i, a = e.j, l = e.x, f = e.y, t({
                                    type: "brushstart"
                                })
                            }).tween("brush:brush", function () {
                                var e = ae(l, n.x),
                                    r = ae(f, n.y);
                                return i = a = null,
                                    function (u) {
                                        l = n.x = e(u), f = n.y = r(u), t({
                                            type: "brush",
                                            mode: "resize"
                                        })
                                    }
                            }).each("end.brush", function () {
                                i = n.i, a = n.j, t({
                                    type: "brush",
                                    mode: "resize"
                                }), t({
                                    type: "brushend"
                                })
                            }) : (t({
                                type: "brushstart"
                            }), t({
                                type: "brush",
                                mode: "resize"
                            }), t({
                                type: "brushend"
                            }))
                        })
                    }, t.x = function (n) {
                        return arguments.length ? (s = n, p = fi[!s << 1 | !c], t) : s
                    }, t.y = function (n) {
                        return arguments.length ? (c = n, p = fi[!s << 1 | !c], t) : c
                    }, t.clamp = function (n) {
                        return arguments.length ? (s && c ? (h = !!n[0], g = !!n[1]) : s ? h = !!n : c && (g = !!n), t) : s && c ? [h, g] : s ? h : c ? g : null
                    }, t.extent = function (n) {
                        var e, r, u, o, h;
                        return arguments.length ? (s && (e = n[0], r = n[1], c && (e = e[0], r = r[0]), i = [e, r], s.invert && (e = s(e), r = s(r)), e > r && (h = e, e = r, r = h), (e != l[0] || r != l[1]) && (l = [e, r])), c && (u = n[0], o = n[1], s && (u = u[1], o = o[1]), a = [u, o], c.invert && (u = c(u), o = c(o)), u > o && (h = u, u = o, o = h), (u != f[0] || o != f[1]) && (f = [u, o])), t) : (s && (i ? (e = i[0], r = i[1]) : (e = l[0], r = l[1], s.invert && (e = s.invert(e), r = s.invert(r)), e > r && (h = e, e = r, r = h))), c && (a ? (u = a[0], o = a[1]) : (u = f[0], o = f[1], c.invert && (u = c.invert(u), o = c.invert(o)), u > o && (h = u, u = o, o = h))), s && c ? [[e, u], [r, o]] : s ? [e, r] : c && [u, o])
                    }, t.clear = function () {
                        return t.empty() || (l = [0, 0], f = [0, 0], i = a = null), t
                    }, t.empty = function () {
                        return !!s && l[0] == l[1] || !!c && f[0] == f[1]
                    }, Fr.rebind(t, o, "on")
                };
                var li = {
                        n: "ns-resize",
                        e: "ew-resize",
                        s: "ns-resize",
                        w: "ew-resize",
                        nw: "nwse-resize",
                        ne: "nesw-resize",
                        se: "nwse-resize",
                        sw: "nesw-resize"
                    },
                    fi = [["n", "e", "s", "w", "nw", "ne", "se", "sw"], ["e", "w"], ["n", "s"], []];
                Fr.touch = function (t, n, e) {
                    if (arguments.length < 3 && (e = n, n = q().changedTouches), n)
                        for (var r, u = 0, i = n.length; i > u; ++u)
                            if ((r = n[u]).identifier === e) return zr(t, r)
                }, Fr.touches = function (t, n) {
                    return arguments.length < 2 && (n = q().touches), n ? Hr(n).map(function (n) {
                        var e = zr(t, n);
                        return e.identifier = n.identifier, e
                    }) : []
                };
                var hi = ju.format = Uu.timeFormat,
                    gi = hi.utc,
                    pi = gi("%Y-%m-%dT%H:%M:%S.%LZ");
                hi.iso = Date.prototype.toISOString && +new Date("2000-01-01T00:00:00.000Z") ? qr : pi, qr.parse = function (t) {
                    var n = new Date(t);
                    return isNaN(n) ? null : n
                }, qr.toString = pi.toString, ju.second = ye(function (t) {
                    return new Eu(1e3 * Math.floor(t / 1e3))
                }, function (t, n) {
                    t.setTime(t.getTime() + 1e3 * Math.floor(n))
                }, function (t) {
                    return t.getSeconds()
                }), ju.seconds = ju.second.range, ju.seconds.utc = ju.second.utc.range, ju.minute = ye(function (t) {
                    return new Eu(6e4 * Math.floor(t / 6e4))
                }, function (t, n) {
                    t.setTime(t.getTime() + 6e4 * Math.floor(n))
                }, function (t) {
                    return t.getMinutes()
                }), ju.minutes = ju.minute.range, ju.minutes.utc = ju.minute.utc.range, ju.hour = ye(function (t) {
                    var n = t.getTimezoneOffset() / 60;
                    return new Eu(36e5 * (Math.floor(t / 36e5 - n) + n))
                }, function (t, n) {
                    t.setTime(t.getTime() + 36e5 * Math.floor(n))
                }, function (t) {
                    return t.getHours()
                }), ju.hours = ju.hour.range, ju.hours.utc = ju.hour.utc.range, ju.month = ye(function (t) {
                    return t = ju.day(t), t.setDate(1), t
                }, function (t, n) {
                    t.setMonth(t.getMonth() + n)
                }, function (t) {
                    return t.getMonth()
                }), ju.months = ju.month.range, ju.months.utc = ju.month.utc.range;
                var di = [1e3, 5e3, 15e3, 3e4, 6e4, 3e5, 9e5, 18e5, 36e5, 108e5, 216e5, 432e5, 864e5, 1728e5, 6048e5, 2592e6, 7776e6, 31536e6],
                    mi = [[ju.second, 1], [ju.second, 5], [ju.second, 15], [ju.second, 30], [ju.minute, 1], [ju.minute, 5], [ju.minute, 15], [ju.minute, 30], [ju.hour, 1], [ju.hour, 3], [ju.hour, 6], [ju.hour, 12], [ju.day, 1], [ju.day, 2], [ju.week, 1], [ju.month, 1], [ju.month, 3], [ju.year, 1]],
                    vi = hi.multi([[".%L", function (t) {
                        return t.getMilliseconds()
                    }], [":%S", function (t) {
                        return t.getSeconds()
                    }], ["%I:%M", function (t) {
                        return t.getMinutes()
                    }], ["%I %p", function (t) {
                        return t.getHours()
                    }], ["%a %d", function (t) {
                        return t.getDay() && 1 != t.getDate()
                    }], ["%b %d", function (t) {
                        return 1 != t.getDate()
                    }], ["%B", function (t) {
                        return t.getMonth()
                    }], ["%Y", en]]),
                    yi = {
                        range: function (t, n, e) {
                            return Fr.range(Math.ceil(t / e) * e, +n, e).map(Er)
                        },
                        floor: nn,
                        ceil: nn
                    };
                mi.year = ju.year, ju.scale = function () {
                    return jr(Fr.scale.linear(), mi, vi)
                };
                var bi = mi.map(function (t) {
                        return [t[0].utc, t[1]]
                    }),
                    wi = gi.multi([[".%L", function (t) {
                        return t.getUTCMilliseconds()
                    }], [":%S", function (t) {
                        return t.getUTCSeconds()
                    }], ["%I:%M", function (t) {
                        return t.getUTCMinutes()
                    }], ["%I %p", function (t) {
                        return t.getUTCHours()
                    }], ["%a %d", function (t) {
                        return t.getUTCDay() && 1 != t.getUTCDate()
                    }], ["%b %d", function (t) {
                        return 1 != t.getUTCDate()
                    }], ["%B", function (t) {
                        return t.getUTCMonth()
                    }], ["%Y", en]]);
                bi.year = ju.year.utc, ju.scale.utc = function () {
                    return jr(Fr.scale.linear(), bi, wi)
                }, "function" == typeof t && t.amd ? t(Fr) : "object" == typeof e && e.exports && (e.exports = Fr), this.d3 = Fr
            }()
        }, {}],
        2: [function (t, n) {
            function e() {
                function t(n) {
                    n instanceof HTMLElement && (n = r.select(n)), n.each(function () {
                        function n(t, n) {
                            var e = new Date(Math.min(Math.max(+a[0], +t), +a[1])),
                                r = S;
                            n && (r = S.transition(), n.ease && r.ease(n.ease), n.duration && r.duration(n.duration)), r.call(_.extent([e, e])).call(_.event)
                        }

                        function e() {
                            var t = _.extent()[0];
                            r.event && r.event.sourceEvent && "keydown" !== r.event.sourceEvent.type && (t = w.invert(r.mouse(this)[0]), _.extent([t, t])), T.attr("transform", function () {
                                return "translate(" + [w(t), 0] + ")"
                            }), N.text(b(t)).attr("text-anchor", "left");
                            var n = N.node().getComputedTextLength() / 2,
                                e = w(t) - n,
                                u = w(t) + n;
                            N.attr("transform", function () {
                                return e < -i.left ? "translate(" + [-i.left, 20] + ")" : u > s - i.left ? "translate(" + [s - i.left - 2 * n, 20] + ")" : "translate(" + [w(t) - n, 20] + ")"
                            }), x.change(t)
                        }
                        g && (i.left = 30), d && (i.top = 0), w.domain(a).range([0, s - i.left - i.right]), _.x(w).extent([a[0], a[0]]).on("brush", e);
                        var h = r.select(this).selectAll("svg").data([0]),
                            p = h.enter().append("svg").attr("class", "chroniton").attr("tabindex", 1).on("keydown", u).append("g");
                        p.append("g").attr("class", "x axis"), h.attr("width", s).attr("height", f);
                        var m = h.select("g").attr("transform", "translate(" + i.left + "," + i.top + ")");
                        m.select(".x.axis").attr("transform", "translate(0," + (f - i.bottom - i.top) + ")").call(M);
                        var v = m.select(".x.axis .domain").remove().node(),
                            y = m.select(".x.axis").node();
                        if (y.insertBefore(v, y.childNodes[0]), m.select(".domain").select(function () {
                                return this.parentNode.insertBefore(this.cloneNode(!0), this.parentNode.childNodes[0])
                            }).attr("class", "halo"), m.select(".x.axis .domain").on("click", function () {
                                n(w.invert(r.mouse(this)[0]))
                            }), g) {
                            var k = h.append("g").attr("transform", "translate(" + [8, i.top + 13] + ")"),
                                A = k.append("path").attr("transform", "translate(2, 2)").attr("d", c).attr("class", "play-button");
                            k.append("rect").attr("fill", "none").attr("pointer-events", "visible").attr("width", 15).attr("height", 15).on("click", function () {
                                t.playPause(), A.attr("d", t.playing() ? l : c)
                            })
                        }
                        var S = m.append("g").attr("class", "slider").attr("transform", "translate(" + [0, f - i.bottom - i.top + 2] + ")").call(_),
                            T = S.append("path").attr("d", o).attr("class", "handle"),
                            D = S.append("g").attr("transform", "translate(0, -35)"),
                            N = D.append("text").attr("class", "label");
                        S.call(_.event), _.on("brushstart", function () {
                            S.classed("brushing", !0)
                        }).on("brushend", function () {
                            S.classed("brushing", !1)
                        }), x.on("setValue", n)
                    })
                }

                function n() {
                    return +w.invert(10) - a[0]
                }

                function e() {
                    if (p) {
                        var n = (new Date).getTime();
                        null === y && (y = n);
                        var e = n - y,
                            r = (+w.invert(.1) - +a[0]) * v,
                            u = e * r;
                        t.setValue(new Date(+_.extent()[0] + u)), y = n, m && t.isAtEnd() && t.setValue(a[0])
                    }
                }

                function u() {
                    if (h) switch (r.event.which) {
                        case 39:
                            setValue(new Date(+_.extent()[0] + n())), r.event.preventDefault();
                            break;
                        case 37:
                            setValue(new Date(+_.extent()[0] - n())), r.event.preventDefault()
                    }
                }
                var i = {
                        top: 10,
                        right: 20,
                        bottom: 20,
                        left: 20
                    },
                    a = [new Date("1/1/2000"), new Date],
                    s = 660,
                    f = 50,
                    h = !0,
                    g = !1,
                    p = !1,
                    d = !1,
                    m = !1,
                    v = 1,
                    y = null,
                    b = r.time.format("%Y-%m-%d"),
                    w = r.time.scale().clamp(!0),
                    M = r.svg.axis().scale(w).orient("bottom").tickSize(10, 0),
                    _ = r.svg.brush(),
                    x = r.dispatch("change", "setValue");
                t.playbackRate = function (n) {
                    if (!arguments.length) return v;
                    if ("number" != typeof n) throw new Error("argument must be a number of pixels per second");
                    return v = n, t
                }, t.play = function () {
                    return p = !0, t
                }, t.playing = function () {
                    return p
                }, t.playPause = function () {
                    return p ? t.pause() : t.play(), t
                }, t.pause = function () {
                    return y = null, p = !1, t
                }, t.stop = function () {
                    return t.pause(), t.setValue(a[0]), t
                }, t.loop = function (n) {
                    if (!arguments.length) return m;
                    if ("boolean" != typeof n) throw new Error("argument must be a boolean for whether to loop");
                    return m = n, t
                }, t.width = function (n) {
                    return arguments.length ? (s = n, w.domain(a).range([0, s - i.left - i.right]), t) : s
                }, t.tapAxis = function (n) {
                    if (n(M), "function" != typeof n) throw new Error("argument must be a function");
                    return t
                }, t.height = function (n) {
                    if (!arguments.length) return f;
                    if ("number" != typeof n) throw new Error("argument must be a numeric width");
                    return f = n, t
                }, t.domain = function (n) {
                    return arguments.length ? (a = n, w.domain(a).range([0, s - i.left - i.right]), t) : a
                }, t.labelFormat = function (n) {
                    if (!n) return b;
                    if ("function" != typeof n) throw new Error("argument must be a label formatter function");
                    return d = !1, i.top = 10, f = 50, b = n, t
                }, t.hideLabel = function () {
                    return b = r.functor(""), d = !0, i.top = 0, f = 27, t
                }, t.getValue = function () {
                    return _.extent()[0]
                }, t.isAtStart = function () {
                    return +_.extent()[0] === +a[0]
                }, t.isAtEnd = function () {
                    return +_.extent()[0] === +a[1]
                }, t.getScale = function () {
                    return w.copy()
                }, t.getMargin = function () {
                    return JSON.parse(JSON.stringify(i))
                }, t.setValue = function (n, e) {
                    return x.setValue(n, e), t
                }, t.playButton = function (n) {
                    if (void 0 === n) return g;
                    if ("boolean" != typeof n) throw new Error("argument must be a boolean setting");
                    return g = n, t
                }, t.keybindings = function (n) {
                    if (void 0 === n) return h;
                    if ("boolean" != typeof n) throw new Error("argument must be a boolean setting");
                    return h = n, t
                };
                var k = (r.timer(e), r.rebind(t, x, "on"));
                return k
            }
            var r = t("./d3/d3-custom.js");
            n.exports = e;
            var u = 6,
                i = 8,
                a = 5,
                o = "M" + [-u, -i, u, -i, u, i - a, 0, i, -u, i - a, -u, -i].join(","),
                s = 10,
                c = "M" + [0, 0, s / 1.2, s / 2, 0, s, 0, 0].join(","),
                l = "M" + [0, 0, s / 3, 0, s / 3, s, 0, s].join(",") + "Z M" + [s / 2 + 0, 0, s / 2 + s / 3, 0, s / 2 + s / 3, s, s / 2 + 0, s].join(",")
        }, {
            "./d3/d3-custom.js": 1
        }]
    }, {}, [2])(2)
});
