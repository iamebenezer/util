import {
    c as fu
} from "./_commonjsHelpers.28e086c5.js";

function Tr(c) {
    if (c === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return c
}

function jo(c, e) {
    c.prototype = Object.create(e.prototype), c.prototype.constructor = c, c.__proto__ = e
}
/*!
 * GSAP 3.11.4
 * https://greensock.com
 *
 * @license Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var zt = {
        autoSleep: 120,
        force3D: "auto",
        nullTargetWarn: 1,
        units: {
            lineHeight: ""
        }
    },
    Di = {
        duration: .5,
        overwrite: !1,
        delay: 0
    },
    Ys, ft, He, Gt = 1e8,
    ye = 1 / Gt,
    Ss = Math.PI * 2,
    cu = Ss / 4,
    hu = 0,
    Jo = Math.sqrt,
    _u = Math.cos,
    du = Math.sin,
    Je = function(e) {
        return typeof e == "string"
    },
    Be = function(e) {
        return typeof e == "function"
    },
    Pr = function(e) {
        return typeof e == "number"
    },
    Xs = function(e) {
        return typeof e > "u"
    },
    gr = function(e) {
        return typeof e == "object"
    },
    St = function(e) {
        return e !== !1
    },
    ea = function() {
        return typeof window < "u"
    },
    zn = function(e) {
        return Be(e) || Je(e)
    },
    ta = typeof ArrayBuffer == "function" && ArrayBuffer.isView || function() {},
    ct = Array.isArray,
    Ps = /(?:-?\.?\d|\.)+/gi,
    ra = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
    Pi = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
    ps = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
    ia = /[+-]=-?[.\d]+/,
    na = /[^,'"\[\]\s]+/gi,
    pu = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
    De, Wt, ks, Vs, Lt = {},
    Nn = {},
    sa, oa = function(e) {
        return (Nn = ci(e, Lt)) && It
    },
    Us = function(e, t) {
        return console.warn("Invalid property", e, "set to", t, "Missing plugin? gsap.registerPlugin()")
    },
    Yn = function(e, t) {
        return !t && console.warn(e)
    },
    aa = function(e, t) {
        return e && (Lt[e] = t) && Nn && (Nn[e] = t) || Lt
    },
    an = function() {
        return 0
    },
    gu = {
        suppressEvents: !0,
        isStart: !0,
        kill: !1
    },
    Ln = {
        suppressEvents: !0,
        kill: !1
    },
    mu = {
        suppressEvents: !0
    },
    Ws = {},
    Vr = [],
    Cs = {},
    ua, Rt = {},
    gs = {},
    Lo = 30,
    In = [],
    Gs = "",
    Hs = function(e) {
        var t = e[0],
            r, i;
        if (gr(t) || Be(t) || (e = [e]), !(r = (t._gsap || {}).harness)) {
            for (i = In.length; i-- && !In[i].targetTest(t););
            r = In[i]
        }
        for (i = e.length; i--;) e[i] && (e[i]._gsap || (e[i]._gsap = new Da(e[i], r))) || e.splice(i, 1);
        return e
    },
    ui = function(e) {
        return e._gsap || Hs(Ht(e))[0]._gsap
    },
    la = function(e, t, r) {
        return (r = e[t]) && Be(r) ? e[t]() : Xs(r) && e.getAttribute && e.getAttribute(t) || r
    },
    Pt = function(e, t) {
        return (e = e.split(",")).forEach(t) || e
    },
    Ve = function(e) {
        return Math.round(e * 1e5) / 1e5 || 0
    },
    st = function(e) {
        return Math.round(e * 1e7) / 1e7 || 0
    },
    Ci = function(e, t) {
        var r = t.charAt(0),
            i = parseFloat(t.substr(2));
        return e = parseFloat(e), r === "+" ? e + i : r === "-" ? e - i : r === "*" ? e * i : e / i
    },
    yu = function(e, t) {
        for (var r = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < r;);
        return i < r
    },
    Xn = function() {
        var e = Vr.length,
            t = Vr.slice(0),
            r, i;
        for (Cs = {}, Vr.length = 0, r = 0; r < e; r++) i = t[r], i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0)
    },
    fa = function(e, t, r, i) {
        Vr.length && !ft && Xn(), e.render(t, r, i || ft && t < 0 && (e._initted || e._startAt)), Vr.length && !ft && Xn()
    },
    ca = function(e) {
        var t = parseFloat(e);
        return (t || t === 0) && (e + "").match(na).length < 2 ? t : Je(e) ? e.trim() : e
    },
    ha = function(e) {
        return e
    },
    $t = function(e, t) {
        for (var r in t) r in e || (e[r] = t[r]);
        return e
    },
    vu = function(e) {
        return function(t, r) {
            for (var i in r) i in t || i === "duration" && e || i === "ease" || (t[i] = r[i])
        }
    },
    ci = function(e, t) {
        for (var r in t) e[r] = t[r];
        return e
    },
    Io = function c(e, t) {
        for (var r in t) r !== "__proto__" && r !== "constructor" && r !== "prototype" && (e[r] = gr(t[r]) ? c(e[r] || (e[r] = {}), t[r]) : t[r]);
        return e
    },
    Vn = function(e, t) {
        var r = {},
            i;
        for (i in e) i in t || (r[i] = e[i]);
        return r
    },
    nn = function(e) {
        var t = e.parent || De,
            r = e.keyframes ? vu(ct(e.keyframes)) : $t;
        if (St(e.inherit))
            for (; t;) r(e, t.vars.defaults), t = t.parent || t._dp;
        return e
    },
    xu = function(e, t) {
        for (var r = e.length, i = r === t.length; i && r-- && e[r] === t[r];);
        return r < 0
    },
    _a = function(e, t, r, i, n) {
        r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
        var s = e[i],
            o;
        if (n)
            for (o = t[n]; s && s[n] > o;) s = s._prev;
        return s ? (t._next = s._next, s._next = t) : (t._next = e[r], e[r] = t), t._next ? t._next._prev = t : e[i] = t, t._prev = s, t.parent = t._dp = e, t
    },
    qn = function(e, t, r, i) {
        r === void 0 && (r = "_first"), i === void 0 && (i = "_last");
        var n = t._prev,
            s = t._next;
        n ? n._next = s : e[r] === t && (e[r] = s), s ? s._prev = n : e[i] === t && (e[i] = n), t._next = t._prev = t.parent = null
    },
    Wr = function(e, t) {
        e.parent && (!t || e.parent.autoRemoveChildren) && e.parent.remove(e), e._act = 0
    },
    li = function(e, t) {
        if (e && (!t || t._end > e._dur || t._start < 0))
            for (var r = e; r;) r._dirty = 1, r = r.parent;
        return e
    },
    bu = function(e) {
        for (var t = e.parent; t && t.parent;) t._dirty = 1, t.totalDuration(), t = t.parent;
        return e
    },
    Os = function(e, t, r, i) {
        return e._startAt && (ft ? e._startAt.revert(Ln) : e.vars.immediateRender && !e.vars.autoRevert || e._startAt.render(t, !0, i))
    },
    Tu = function c(e) {
        return !e || e._ts && c(e.parent)
    },
    Bo = function(e) {
        return e._repeat ? Ei(e._tTime, e = e.duration() + e._rDelay) * e : 0
    },
    Ei = function(e, t) {
        var r = Math.floor(e /= t);
        return e && r === e ? r - 1 : r
    },
    Un = function(e, t) {
        return (e - t._start) * t._ts + (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    },
    $n = function(e) {
        return e._end = st(e._start + (e._tDur / Math.abs(e._ts || e._rts || ye) || 0))
    },
    Kn = function(e, t) {
        var r = e._dp;
        return r && r.smoothChildTiming && e._ts && (e._start = st(r._time - (e._ts > 0 ? t / e._ts : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts)), $n(e), r._dirty || li(r, e)), e
    },
    da = function(e, t) {
        var r;
        if ((t._time || t._initted && !t._dur) && (r = Un(e.rawTime(), t), (!t._dur || _n(0, t.totalDuration(), r) - t._tTime > ye) && t.render(r, !0)), li(e, t)._dp && e._initted && e._time >= e._dur && e._ts) {
            if (e._dur < e.duration())
                for (r = e; r._dp;) r.rawTime() >= 0 && r.totalTime(r._tTime), r = r._dp;
            e._zTime = -ye
        }
    },
    dr = function(e, t, r, i) {
        return t.parent && Wr(t), t._start = st((Pr(r) ? r : r || e !== De ? Ut(e, r, t) : e._time) + t._delay), t._end = st(t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0)), _a(e, t, "_first", "_last", e._sort ? "_start" : 0), Ms(t) || (e._recent = t), i || da(e, t), e._ts < 0 && Kn(e, e._tTime), e
    },
    pa = function(e, t) {
        return (Lt.ScrollTrigger || Us("scrollTrigger", t)) && Lt.ScrollTrigger.create(t, e)
    },
    ga = function(e, t, r, i, n) {
        if ($s(e, t, n), !e._initted) return 1;
        if (!r && e._pt && !ft && (e._dur && e.vars.lazy !== !1 || !e._dur && e.vars.lazy) && ua !== Ft.frame) return Vr.push(e), e._lazy = [n, i], 1
    },
    wu = function c(e) {
        var t = e.parent;
        return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || c(t))
    },
    Ms = function(e) {
        var t = e.data;
        return t === "isFromStart" || t === "isStart"
    },
    Su = function(e, t, r, i) {
        var n = e.ratio,
            s = t < 0 || !t && (!e._start && wu(e) && !(!e._initted && Ms(e)) || (e._ts < 0 || e._dp._ts < 0) && !Ms(e)) ? 0 : 1,
            o = e._rDelay,
            a = 0,
            l, _, y;
        if (o && e._repeat && (a = _n(0, e._tDur, t), _ = Ei(a, o), e._yoyo && _ & 1 && (s = 1 - s), _ !== Ei(e._tTime, o) && (n = 1 - s, e.vars.repeatRefresh && e._initted && e.invalidate())), s !== n || ft || i || e._zTime === ye || !t && e._zTime) {
            if (!e._initted && ga(e, t, i, r, a)) return;
            for (y = e._zTime, e._zTime = t || (r ? ye : 0), r || (r = t && !y), e.ratio = s, e._from && (s = 1 - s), e._time = 0, e._tTime = a, l = e._pt; l;) l.r(s, l.d), l = l._next;
            t < 0 && Os(e, t, r, !0), e._onUpdate && !r && qt(e, "onUpdate"), a && e._repeat && !r && e.parent && qt(e, "onRepeat"), (t >= e._tDur || t < 0) && e.ratio === s && (s && Wr(e, 1), !r && !ft && (qt(e, s ? "onComplete" : "onReverseComplete", !0), e._prom && e._prom()))
        } else e._zTime || (e._zTime = t)
    },
    Pu = function(e, t, r) {
        var i;
        if (r > t)
            for (i = e._first; i && i._start <= r;) {
                if (i.data === "isPause" && i._start > t) return i;
                i = i._next
            } else
                for (i = e._last; i && i._start >= r;) {
                    if (i.data === "isPause" && i._start < t) return i;
                    i = i._prev
                }
    },
    Ai = function(e, t, r, i) {
        var n = e._repeat,
            s = st(t) || 0,
            o = e._tTime / e._tDur;
        return o && !i && (e._time *= s / e._dur), e._dur = s, e._tDur = n ? n < 0 ? 1e10 : st(s * (n + 1) + e._rDelay * n) : s, o > 0 && !i && Kn(e, e._tTime = e._tDur * o), e.parent && $n(e), r || li(e.parent, e), e
    },
    No = function(e) {
        return e instanceof wt ? li(e) : Ai(e, e._dur)
    },
    ku = {
        _start: 0,
        endTime: an,
        totalDuration: an
    },
    Ut = function c(e, t, r) {
        var i = e.labels,
            n = e._recent || ku,
            s = e.duration() >= Gt ? n.endTime(!1) : e._dur,
            o, a, l;
        return Je(t) && (isNaN(t) || t in i) ? (a = t.charAt(0), l = t.substr(-1) === "%", o = t.indexOf("="), a === "<" || a === ">" ? (o >= 0 && (t = t.replace(/=/, "")), (a === "<" ? n._start : n.endTime(n._repeat >= 0)) + (parseFloat(t.substr(1)) || 0) * (l ? (o < 0 ? n : r).totalDuration() / 100 : 1)) : o < 0 ? (t in i || (i[t] = s), i[t]) : (a = parseFloat(t.charAt(o - 1) + t.substr(o + 1)), l && r && (a = a / 100 * (ct(r) ? r[0] : r).totalDuration()), o > 1 ? c(e, t.substr(0, o - 1), r) + a : s + a)) : t == null ? s : +t
    },
    sn = function(e, t, r) {
        var i = Pr(t[1]),
            n = (i ? 2 : 1) + (e < 2 ? 0 : 1),
            s = t[n],
            o, a;
        if (i && (s.duration = t[1]), s.parent = r, e) {
            for (o = s, a = r; a && !("immediateRender" in o);) o = a.vars.defaults || {}, a = St(a.vars.inherit) && a.parent;
            s.immediateRender = St(o.immediateRender), e < 2 ? s.runBackwards = 1 : s.startAt = t[n - 1]
        }
        return new Ke(t[0], s, t[n + 1])
    },
    Hr = function(e, t) {
        return e || e === 0 ? t(e) : t
    },
    _n = function(e, t, r) {
        return r < e ? e : r > t ? t : r
    },
    lt = function(e, t) {
        return !Je(e) || !(t = pu.exec(e)) ? "" : t[1]
    },
    Cu = function(e, t, r) {
        return Hr(r, function(i) {
            return _n(e, t, i)
        })
    },
    Ds = [].slice,
    ma = function(e, t) {
        return e && gr(e) && "length" in e && (!t && !e.length || e.length - 1 in e && gr(e[0])) && !e.nodeType && e !== Wt
    },
    Ou = function(e, t, r) {
        return r === void 0 && (r = []), e.forEach(function(i) {
            var n;
            return Je(i) && !t || ma(i, 1) ? (n = r).push.apply(n, Ht(i)) : r.push(i)
        }) || r
    },
    Ht = function(e, t, r) {
        return He && !t && He.selector ? He.selector(e) : Je(e) && !r && (ks || !Ri()) ? Ds.call((t || Vs).querySelectorAll(e), 0) : ct(e) ? Ou(e, r) : ma(e) ? Ds.call(e, 0) : e ? [e] : []
    },
    Es = function(e) {
        return e = Ht(e)[0] || Yn("Invalid scope") || {},
            function(t) {
                var r = e.current || e.nativeElement || e;
                return Ht(t, r.querySelectorAll ? r : r === e ? Yn("Invalid scope") || Vs.createElement("div") : e)
            }
    },
    ya = function(e) {
        return e.sort(function() {
            return .5 - Math.random()
        })
    },
    va = function(e) {
        if (Be(e)) return e;
        var t = gr(e) ? e : {
                each: e
            },
            r = fi(t.ease),
            i = t.from || 0,
            n = parseFloat(t.base) || 0,
            s = {},
            o = i > 0 && i < 1,
            a = isNaN(i) || o,
            l = t.axis,
            _ = i,
            y = i;
        return Je(i) ? _ = y = {
                center: .5,
                edges: .5,
                end: 1
            }[i] || 0 : !o && a && (_ = i[0], y = i[1]),
            function(g, x, k) {
                var p = (k || t).length,
                    S = s[p],
                    O, M, E, D, P, L, I, z, A;
                if (!S) {
                    if (A = t.grid === "auto" ? 0 : (t.grid || [1, Gt])[1], !A) {
                        for (I = -Gt; I < (I = k[A++].getBoundingClientRect().left) && A < p;);
                        A--
                    }
                    for (S = s[p] = [], O = a ? Math.min(A, p) * _ - .5 : i % A, M = A === Gt ? 0 : a ? p * y / A - .5 : i / A | 0, I = 0, z = Gt, L = 0; L < p; L++) E = L % A - O, D = M - (L / A | 0), S[L] = P = l ? Math.abs(l === "y" ? D : E) : Jo(E * E + D * D), P > I && (I = P), P < z && (z = P);
                    i === "random" && ya(S), S.max = I - z, S.min = z, S.v = p = (parseFloat(t.amount) || parseFloat(t.each) * (A > p ? p - 1 : l ? l === "y" ? p / A : A : Math.max(A, p / A)) || 0) * (i === "edges" ? -1 : 1), S.b = p < 0 ? n - p : n, S.u = lt(t.amount || t.each) || 0, r = r && p < 0 ? Ca(r) : r
                }
                return p = (S[g] - S.min) / S.max || 0, st(S.b + (r ? r(p) : p) * S.v) + S.u
            }
    },
    As = function(e) {
        var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
        return function(r) {
            var i = st(Math.round(parseFloat(r) / e) * e * t);
            return (i - i % 1) / t + (Pr(r) ? 0 : lt(r))
        }
    },
    xa = function(e, t) {
        var r = ct(e),
            i, n;
        return !r && gr(e) && (i = r = e.radius || Gt, e.values ? (e = Ht(e.values), (n = !Pr(e[0])) && (i *= i)) : e = As(e.increment)), Hr(t, r ? Be(e) ? function(s) {
            return n = e(s), Math.abs(n - s) <= i ? n : s
        } : function(s) {
            for (var o = parseFloat(n ? s.x : s), a = parseFloat(n ? s.y : 0), l = Gt, _ = 0, y = e.length, g, x; y--;) n ? (g = e[y].x - o, x = e[y].y - a, g = g * g + x * x) : g = Math.abs(e[y] - o), g < l && (l = g, _ = y);
            return _ = !i || l <= i ? e[_] : s, n || _ === s || Pr(s) ? _ : _ + lt(s)
        } : As(e))
    },
    ba = function(e, t, r, i) {
        return Hr(ct(e) ? !t : r === !0 ? !!(r = 0) : !i, function() {
            return ct(e) ? e[~~(Math.random() * e.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((e - r / 2 + Math.random() * (t - e + r * .99)) / r) * r * i) / i
        })
    },
    Mu = function() {
        for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
        return function(i) {
            return t.reduce(function(n, s) {
                return s(n)
            }, i)
        }
    },
    Du = function(e, t) {
        return function(r) {
            return e(parseFloat(r)) + (t || lt(r))
        }
    },
    Eu = function(e, t, r) {
        return wa(e, t, 0, 1, r)
    },
    Ta = function(e, t, r) {
        return Hr(r, function(i) {
            return e[~~t(i)]
        })
    },
    Au = function c(e, t, r) {
        var i = t - e;
        return ct(e) ? Ta(e, c(0, e.length), t) : Hr(r, function(n) {
            return (i + (n - e) % i) % i + e
        })
    },
    Ru = function c(e, t, r) {
        var i = t - e,
            n = i * 2;
        return ct(e) ? Ta(e, c(0, e.length - 1), t) : Hr(r, function(s) {
            return s = (n + (s - e) % n) % n || 0, e + (s > i ? n - s : s)
        })
    },
    un = function(e) {
        for (var t = 0, r = "", i, n, s, o; ~(i = e.indexOf("random(", t));) s = e.indexOf(")", i), o = e.charAt(i + 7) === "[", n = e.substr(i + 7, s - i - 7).match(o ? na : Ps), r += e.substr(t, i - t) + ba(o ? n : +n[0], o ? 0 : +n[1], +n[2] || 1e-5), t = s + 1;
        return r + e.substr(t, e.length - t)
    },
    wa = function(e, t, r, i, n) {
        var s = t - e,
            o = i - r;
        return Hr(n, function(a) {
            return r + ((a - e) / s * o || 0)
        })
    },
    Fu = function c(e, t, r, i) {
        var n = isNaN(e + t) ? 0 : function(x) {
            return (1 - x) * e + x * t
        };
        if (!n) {
            var s = Je(e),
                o = {},
                a, l, _, y, g;
            if (r === !0 && (i = 1) && (r = null), s) e = {
                p: e
            }, t = {
                p: t
            };
            else if (ct(e) && !ct(t)) {
                for (_ = [], y = e.length, g = y - 2, l = 1; l < y; l++) _.push(c(e[l - 1], e[l]));
                y--, n = function(k) {
                    k *= y;
                    var p = Math.min(g, ~~k);
                    return _[p](k - p)
                }, r = t
            } else i || (e = ci(ct(e) ? [] : {}, e));
            if (!_) {
                for (a in t) qs.call(o, e, a, "get", t[a]);
                n = function(k) {
                    return Qs(k, o) || (s ? e.p : e)
                }
            }
        }
        return Hr(r, n)
    },
    Yo = function(e, t, r) {
        var i = e.labels,
            n = Gt,
            s, o, a;
        for (s in i) o = i[s] - t, o < 0 == !!r && o && n > (o = Math.abs(o)) && (a = s, n = o);
        return a
    },
    qt = function(e, t, r) {
        var i = e.vars,
            n = i[t],
            s = He,
            o = e._ctx,
            a, l, _;
        if (n) return a = i[t + "Params"], l = i.callbackScope || e, r && Vr.length && Xn(), o && (He = o), _ = a ? n.apply(l, a) : n.call(l), He = s, _
    },
    tn = function(e) {
        return Wr(e), e.scrollTrigger && e.scrollTrigger.kill(!!ft), e.progress() < 1 && qt(e, "onInterrupt"), e
    },
    ki, zu = function(e) {
        e = !e.name && e.default || e;
        var t = e.name,
            r = Be(e),
            i = t && !r && e.init ? function() {
                this._props = []
            } : e,
            n = {
                init: an,
                render: Qs,
                add: qs,
                kill: Qu,
                modifier: Zu,
                rawVars: 0
            },
            s = {
                targetTest: 0,
                get: 0,
                getSetter: Zs,
                aliases: {},
                register: 0
            };
        if (Ri(), e !== i) {
            if (Rt[t]) return;
            $t(i, $t(Vn(e, n), s)), ci(i.prototype, ci(n, Vn(e, s))), Rt[i.prop = t] = i, e.targetTest && (In.push(i), Ws[t] = 1), t = (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) + "Plugin"
        }
        aa(t, i), e.register && e.register(It, i, kt)
    },
    me = 255,
    rn = {
        aqua: [0, me, me],
        lime: [0, me, 0],
        silver: [192, 192, 192],
        black: [0, 0, 0],
        maroon: [128, 0, 0],
        teal: [0, 128, 128],
        blue: [0, 0, me],
        navy: [0, 0, 128],
        white: [me, me, me],
        olive: [128, 128, 0],
        yellow: [me, me, 0],
        orange: [me, 165, 0],
        gray: [128, 128, 128],
        purple: [128, 0, 128],
        green: [0, 128, 0],
        red: [me, 0, 0],
        pink: [me, 192, 203],
        cyan: [0, me, me],
        transparent: [me, me, me, 0]
    },
    ms = function(e, t, r) {
        return e += e < 0 ? 1 : e > 1 ? -1 : 0, (e * 6 < 1 ? t + (r - t) * e * 6 : e < .5 ? r : e * 3 < 2 ? t + (r - t) * (2 / 3 - e) * 6 : t) * me + .5 | 0
    },
    Sa = function(e, t, r) {
        var i = e ? Pr(e) ? [e >> 16, e >> 8 & me, e & me] : 0 : rn.black,
            n, s, o, a, l, _, y, g, x, k;
        if (!i) {
            if (e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), rn[e]) i = rn[e];
            else if (e.charAt(0) === "#") {
                if (e.length < 6 && (n = e.charAt(1), s = e.charAt(2), o = e.charAt(3), e = "#" + n + n + s + s + o + o + (e.length === 5 ? e.charAt(4) + e.charAt(4) : "")), e.length === 9) return i = parseInt(e.substr(1, 6), 16), [i >> 16, i >> 8 & me, i & me, parseInt(e.substr(7), 16) / 255];
                e = parseInt(e.substr(1), 16), i = [e >> 16, e >> 8 & me, e & me]
            } else if (e.substr(0, 3) === "hsl") {
                if (i = k = e.match(Ps), !t) a = +i[0] % 360 / 360, l = +i[1] / 100, _ = +i[2] / 100, s = _ <= .5 ? _ * (l + 1) : _ + l - _ * l, n = _ * 2 - s, i.length > 3 && (i[3] *= 1), i[0] = ms(a + 1 / 3, n, s), i[1] = ms(a, n, s), i[2] = ms(a - 1 / 3, n, s);
                else if (~e.indexOf("=")) return i = e.match(ra), r && i.length < 4 && (i[3] = 1), i
            } else i = e.match(Ps) || rn.transparent;
            i = i.map(Number)
        }
        return t && !k && (n = i[0] / me, s = i[1] / me, o = i[2] / me, y = Math.max(n, s, o), g = Math.min(n, s, o), _ = (y + g) / 2, y === g ? a = l = 0 : (x = y - g, l = _ > .5 ? x / (2 - y - g) : x / (y + g), a = y === n ? (s - o) / x + (s < o ? 6 : 0) : y === s ? (o - n) / x + 2 : (n - s) / x + 4, a *= 60), i[0] = ~~(a + .5), i[1] = ~~(l * 100 + .5), i[2] = ~~(_ * 100 + .5)), r && i.length < 4 && (i[3] = 1), i
    },
    Pa = function(e) {
        var t = [],
            r = [],
            i = -1;
        return e.split(Ur).forEach(function(n) {
            var s = n.match(Pi) || [];
            t.push.apply(t, s), r.push(i += s.length + 1)
        }), t.c = r, t
    },
    Xo = function(e, t, r) {
        var i = "",
            n = (e + i).match(Ur),
            s = t ? "hsla(" : "rgba(",
            o = 0,
            a, l, _, y;
        if (!n) return e;
        if (n = n.map(function(g) {
                return (g = Sa(g, t, 1)) && s + (t ? g[0] + "," + g[1] + "%," + g[2] + "%," + g[3] : g.join(",")) + ")"
            }), r && (_ = Pa(e), a = r.c, a.join(i) !== _.c.join(i)))
            for (l = e.replace(Ur, "1").split(Pi), y = l.length - 1; o < y; o++) i += l[o] + (~a.indexOf(o) ? n.shift() || s + "0,0,0,0)" : (_.length ? _ : n.length ? n : r).shift());
        if (!l)
            for (l = e.split(Ur), y = l.length - 1; o < y; o++) i += l[o] + n[o];
        return i + l[y]
    },
    Ur = function() {
        var c = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
            e;
        for (e in rn) c += "|" + e + "\\b";
        return new RegExp(c + ")", "gi")
    }(),
    Lu = /hsl[a]?\(/,
    ka = function(e) {
        var t = e.join(" "),
            r;
        if (Ur.lastIndex = 0, Ur.test(t)) return r = Lu.test(t), e[1] = Xo(e[1], r), e[0] = Xo(e[0], r, Pa(e[1])), !0
    },
    ln, Ft = function() {
        var c = Date.now,
            e = 500,
            t = 33,
            r = c(),
            i = r,
            n = 1e3 / 240,
            s = n,
            o = [],
            a, l, _, y, g, x, k = function p(S) {
                var O = c() - i,
                    M = S === !0,
                    E, D, P, L;
                if (O > e && (r += O - t), i += O, P = i - r, E = P - s, (E > 0 || M) && (L = ++y.frame, g = P - y.time * 1e3, y.time = P = P / 1e3, s += E + (E >= n ? 4 : n - E), D = 1), M || (a = l(p)), D)
                    for (x = 0; x < o.length; x++) o[x](P, g, L, S)
            };
        return y = {
            time: 0,
            frame: 0,
            tick: function() {
                k(!0)
            },
            deltaRatio: function(S) {
                return g / (1e3 / (S || 60))
            },
            wake: function() {
                sa && (!ks && ea() && (Wt = ks = window, Vs = Wt.document || {}, Lt.gsap = It, (Wt.gsapVersions || (Wt.gsapVersions = [])).push(It.version), oa(Nn || Wt.GreenSockGlobals || !Wt.gsap && Wt || {}), _ = Wt.requestAnimationFrame), a && y.sleep(), l = _ || function(S) {
                    return setTimeout(S, s - y.time * 1e3 + 1 | 0)
                }, ln = 1, k(2))
            },
            sleep: function() {
                (_ ? Wt.cancelAnimationFrame : clearTimeout)(a), ln = 0, l = an
            },
            lagSmoothing: function(S, O) {
                e = S || 1 / 0, t = Math.min(O || 33, e)
            },
            fps: function(S) {
                n = 1e3 / (S || 240), s = y.time * 1e3 + n
            },
            add: function(S, O, M) {
                var E = O ? function(D, P, L, I) {
                    S(D, P, L, I), y.remove(E)
                } : S;
                return y.remove(S), o[M ? "unshift" : "push"](E), Ri(), E
            },
            remove: function(S, O) {
                ~(O = o.indexOf(S)) && o.splice(O, 1) && x >= O && x--
            },
            _listeners: o
        }, y
    }(),
    Ri = function() {
        return !ln && Ft.wake()
    },
    se = {},
    Iu = /^[\d.\-M][\d.\-,\s]/,
    Bu = /["']/g,
    Nu = function(e) {
        for (var t = {}, r = e.substr(1, e.length - 3).split(":"), i = r[0], n = 1, s = r.length, o, a, l; n < s; n++) a = r[n], o = n !== s - 1 ? a.lastIndexOf(",") : a.length, l = a.substr(0, o), t[i] = isNaN(l) ? l.replace(Bu, "").trim() : +l, i = a.substr(o + 1).trim();
        return t
    },
    Yu = function(e) {
        var t = e.indexOf("(") + 1,
            r = e.indexOf(")"),
            i = e.indexOf("(", t);
        return e.substring(t, ~i && i < r ? e.indexOf(")", r + 1) : r)
    },
    Xu = function(e) {
        var t = (e + "").split("("),
            r = se[t[0]];
        return r && t.length > 1 && r.config ? r.config.apply(null, ~e.indexOf("{") ? [Nu(t[1])] : Yu(e).split(",").map(ca)) : se._CE && Iu.test(e) ? se._CE("", e) : r
    },
    Ca = function(e) {
        return function(t) {
            return 1 - e(1 - t)
        }
    },
    Oa = function c(e, t) {
        for (var r = e._first, i; r;) r instanceof wt ? c(r, t) : r.vars.yoyoEase && (!r._yoyo || !r._repeat) && r._yoyo !== t && (r.timeline ? c(r.timeline, t) : (i = r._ease, r._ease = r._yEase, r._yEase = i, r._yoyo = t)), r = r._next
    },
    fi = function(e, t) {
        return e && (Be(e) ? e : se[e] || Xu(e)) || t
    },
    hi = function(e, t, r, i) {
        r === void 0 && (r = function(a) {
            return 1 - t(1 - a)
        }), i === void 0 && (i = function(a) {
            return a < .5 ? t(a * 2) / 2 : 1 - t((1 - a) * 2) / 2
        });
        var n = {
                easeIn: t,
                easeOut: r,
                easeInOut: i
            },
            s;
        return Pt(e, function(o) {
            se[o] = Lt[o] = n, se[s = o.toLowerCase()] = r;
            for (var a in n) se[s + (a === "easeIn" ? ".in" : a === "easeOut" ? ".out" : ".inOut")] = se[o + "." + a] = n[a]
        }), n
    },
    Ma = function(e) {
        return function(t) {
            return t < .5 ? (1 - e(1 - t * 2)) / 2 : .5 + e((t - .5) * 2) / 2
        }
    },
    ys = function c(e, t, r) {
        var i = t >= 1 ? t : 1,
            n = (r || (e ? .3 : .45)) / (t < 1 ? t : 1),
            s = n / Ss * (Math.asin(1 / i) || 0),
            o = function(_) {
                return _ === 1 ? 1 : i * Math.pow(2, -10 * _) * du((_ - s) * n) + 1
            },
            a = e === "out" ? o : e === "in" ? function(l) {
                return 1 - o(1 - l)
            } : Ma(o);
        return n = Ss / n, a.config = function(l, _) {
            return c(e, l, _)
        }, a
    },
    vs = function c(e, t) {
        t === void 0 && (t = 1.70158);
        var r = function(s) {
                return s ? --s * s * ((t + 1) * s + t) + 1 : 0
            },
            i = e === "out" ? r : e === "in" ? function(n) {
                return 1 - r(1 - n)
            } : Ma(r);
        return i.config = function(n) {
            return c(e, n)
        }, i
    };
Pt("Linear,Quad,Cubic,Quart,Quint,Strong", function(c, e) {
    var t = e < 5 ? e + 1 : e;
    hi(c + ",Power" + (t - 1), e ? function(r) {
        return Math.pow(r, t)
    } : function(r) {
        return r
    }, function(r) {
        return 1 - Math.pow(1 - r, t)
    }, function(r) {
        return r < .5 ? Math.pow(r * 2, t) / 2 : 1 - Math.pow((1 - r) * 2, t) / 2
    })
});
se.Linear.easeNone = se.none = se.Linear.easeIn;
hi("Elastic", ys("in"), ys("out"), ys());
(function(c, e) {
    var t = 1 / e,
        r = 2 * t,
        i = 2.5 * t,
        n = function(o) {
            return o < t ? c * o * o : o < r ? c * Math.pow(o - 1.5 / e, 2) + .75 : o < i ? c * (o -= 2.25 / e) * o + .9375 : c * Math.pow(o - 2.625 / e, 2) + .984375
        };
    hi("Bounce", function(s) {
        return 1 - n(1 - s)
    }, n)
})(7.5625, 2.75);
hi("Expo", function(c) {
    return c ? Math.pow(2, 10 * (c - 1)) : 0
});
hi("Circ", function(c) {
    return -(Jo(1 - c * c) - 1)
});
hi("Sine", function(c) {
    return c === 1 ? 1 : -_u(c * cu) + 1
});
hi("Back", vs("in"), vs("out"), vs());
se.SteppedEase = se.steps = Lt.SteppedEase = {
    config: function(e, t) {
        e === void 0 && (e = 1);
        var r = 1 / e,
            i = e + (t ? 0 : 1),
            n = t ? 1 : 0,
            s = 1 - ye;
        return function(o) {
            return ((i * _n(0, s, o) | 0) + n) * r
        }
    }
};
Di.ease = se["quad.out"];
Pt("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(c) {
    return Gs += c + "," + c + "Params,"
});
var Da = function(e, t) {
        this.id = hu++, e._gsap = this, this.target = e, this.harness = t, this.get = t ? t.get : la, this.set = t ? t.getSetter : Zs
    },
    Fi = function() {
        function c(t) {
            this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ai(this, +t.duration, 1, 1), this.data = t.data, He && (this._ctx = He, He.data.push(this)), ln || Ft.wake()
        }
        var e = c.prototype;
        return e.delay = function(r) {
            return r || r === 0 ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + r - this._delay), this._delay = r, this) : this._delay
        }, e.duration = function(r) {
            return arguments.length ? this.totalDuration(this._repeat > 0 ? r + (r + this._rDelay) * this._repeat : r) : this.totalDuration() && this._dur
        }, e.totalDuration = function(r) {
            return arguments.length ? (this._dirty = 0, Ai(this, this._repeat < 0 ? r : (r - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
        }, e.totalTime = function(r, i) {
            if (Ri(), !arguments.length) return this._tTime;
            var n = this._dp;
            if (n && n.smoothChildTiming && this._ts) {
                for (Kn(this, r), !n._dp || n.parent || da(n, this); n && n.parent;) n.parent._time !== n._start + (n._ts >= 0 ? n._tTime / n._ts : (n.totalDuration() - n._tTime) / -n._ts) && n.totalTime(n._tTime, !0), n = n.parent;
                !this.parent && this._dp.autoRemoveChildren && (this._ts > 0 && r < this._tDur || this._ts < 0 && r > 0 || !this._tDur && !r) && dr(this._dp, this, this._start - this._delay)
            }
            return (this._tTime !== r || !this._dur && !i || this._initted && Math.abs(this._zTime) === ye || !r && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = r), fa(this, r, i)), this
        }, e.time = function(r, i) {
            return arguments.length ? this.totalTime(Math.min(this.totalDuration(), r + Bo(this)) % (this._dur + this._rDelay) || (r ? this._dur : 0), i) : this._time
        }, e.totalProgress = function(r, i) {
            return arguments.length ? this.totalTime(this.totalDuration() * r, i) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
        }, e.progress = function(r, i) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && !(this.iteration() & 1) ? 1 - r : r) + Bo(this), i) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
        }, e.iteration = function(r, i) {
            var n = this.duration() + this._rDelay;
            return arguments.length ? this.totalTime(this._time + (r - 1) * n, i) : this._repeat ? Ei(this._tTime, n) + 1 : 1
        }, e.timeScale = function(r) {
            if (!arguments.length) return this._rts === -ye ? 0 : this._rts;
            if (this._rts === r) return this;
            var i = this.parent && this._ts ? Un(this.parent._time, this) : this._tTime;
            return this._rts = +r || 0, this._ts = this._ps || r === -ye ? 0 : this._rts, this.totalTime(_n(-this._delay, this._tDur, i), !0), $n(this), bu(this)
        }, e.paused = function(r) {
            return arguments.length ? (this._ps !== r && (this._ps = r, r ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (Ri(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, this.progress() === 1 && Math.abs(this._zTime) !== ye && (this._tTime -= ye)))), this) : this._ps
        }, e.startTime = function(r) {
            if (arguments.length) {
                this._start = r;
                var i = this.parent || this._dp;
                return i && (i._sort || !this.parent) && dr(i, this, r - this._delay), this
            }
            return this._start
        }, e.endTime = function(r) {
            return this._start + (St(r) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
        }, e.rawTime = function(r) {
            var i = this.parent || this._dp;
            return i ? r && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Un(i.rawTime(r), this) : this._tTime : this._tTime
        }, e.revert = function(r) {
            r === void 0 && (r = mu);
            var i = ft;
            return ft = r, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(r), this.totalTime(-.01, r.suppressEvents)), this.data !== "nested" && r.kill !== !1 && this.kill(), ft = i, this
        }, e.globalTime = function(r) {
            for (var i = this, n = arguments.length ? r : i.rawTime(); i;) n = i._start + n / (i._ts || 1), i = i._dp;
            return !this.parent && this._sat ? this._sat.vars.immediateRender ? -1 : this._sat.globalTime(r) : n
        }, e.repeat = function(r) {
            return arguments.length ? (this._repeat = r === 1 / 0 ? -2 : r, No(this)) : this._repeat === -2 ? 1 / 0 : this._repeat
        }, e.repeatDelay = function(r) {
            if (arguments.length) {
                var i = this._time;
                return this._rDelay = r, No(this), i ? this.time(i) : this
            }
            return this._rDelay
        }, e.yoyo = function(r) {
            return arguments.length ? (this._yoyo = r, this) : this._yoyo
        }, e.seek = function(r, i) {
            return this.totalTime(Ut(this, r), St(i))
        }, e.restart = function(r, i) {
            return this.play().totalTime(r ? -this._delay : 0, St(i))
        }, e.play = function(r, i) {
            return r != null && this.seek(r, i), this.reversed(!1).paused(!1)
        }, e.reverse = function(r, i) {
            return r != null && this.seek(r || this.totalDuration(), i), this.reversed(!0).paused(!1)
        }, e.pause = function(r, i) {
            return r != null && this.seek(r, i), this.paused(!0)
        }, e.resume = function() {
            return this.paused(!1)
        }, e.reversed = function(r) {
            return arguments.length ? (!!r !== this.reversed() && this.timeScale(-this._rts || (r ? -ye : 0)), this) : this._rts < 0
        }, e.invalidate = function() {
            return this._initted = this._act = 0, this._zTime = -ye, this
        }, e.isActive = function() {
            var r = this.parent || this._dp,
                i = this._start,
                n;
            return !!(!r || this._ts && this._initted && r.isActive() && (n = r.rawTime(!0)) >= i && n < this.endTime(!0) - ye)
        }, e.eventCallback = function(r, i, n) {
            var s = this.vars;
            return arguments.length > 1 ? (i ? (s[r] = i, n && (s[r + "Params"] = n), r === "onUpdate" && (this._onUpdate = i)) : delete s[r], this) : s[r]
        }, e.then = function(r) {
            var i = this;
            return new Promise(function(n) {
                var s = Be(r) ? r : ha,
                    o = function() {
                        var l = i.then;
                        i.then = null, Be(s) && (s = s(i)) && (s.then || s === i) && (i.then = l), n(s), i.then = l
                    };
                i._initted && i.totalProgress() === 1 && i._ts >= 0 || !i._tTime && i._ts < 0 ? o() : i._prom = o
            })
        }, e.kill = function() {
            tn(this)
        }, c
    }();
$t(Fi.prototype, {
    _time: 0,
    _start: 0,
    _end: 0,
    _tTime: 0,
    _tDur: 0,
    _dirty: 0,
    _repeat: 0,
    _yoyo: !1,
    parent: null,
    _initted: !1,
    _rDelay: 0,
    _ts: 1,
    _dp: 0,
    ratio: 0,
    _zTime: -ye,
    _prom: 0,
    _ps: !1,
    _rts: 1
});
var wt = function(c) {
    jo(e, c);

    function e(r, i) {
        var n;
        return r === void 0 && (r = {}), n = c.call(this, r) || this, n.labels = {}, n.smoothChildTiming = !!r.smoothChildTiming, n.autoRemoveChildren = !!r.autoRemoveChildren, n._sort = St(r.sortChildren), De && dr(r.parent || De, Tr(n), i), r.reversed && n.reverse(), r.paused && n.paused(!0), r.scrollTrigger && pa(Tr(n), r.scrollTrigger), n
    }
    var t = e.prototype;
    return t.to = function(i, n, s) {
        return sn(0, arguments, this), this
    }, t.from = function(i, n, s) {
        return sn(1, arguments, this), this
    }, t.fromTo = function(i, n, s, o) {
        return sn(2, arguments, this), this
    }, t.set = function(i, n, s) {
        return n.duration = 0, n.parent = this, nn(n).repeatDelay || (n.repeat = 0), n.immediateRender = !!n.immediateRender, new Ke(i, n, Ut(this, s), 1), this
    }, t.call = function(i, n, s) {
        return dr(this, Ke.delayedCall(0, i, n), s)
    }, t.staggerTo = function(i, n, s, o, a, l, _) {
        return s.duration = n, s.stagger = s.stagger || o, s.onComplete = l, s.onCompleteParams = _, s.parent = this, new Ke(i, s, Ut(this, a)), this
    }, t.staggerFrom = function(i, n, s, o, a, l, _) {
        return s.runBackwards = 1, nn(s).immediateRender = St(s.immediateRender), this.staggerTo(i, n, s, o, a, l, _)
    }, t.staggerFromTo = function(i, n, s, o, a, l, _, y) {
        return o.startAt = s, nn(o).immediateRender = St(o.immediateRender), this.staggerTo(i, n, o, a, l, _, y)
    }, t.render = function(i, n, s) {
        var o = this._time,
            a = this._dirty ? this.totalDuration() : this._tDur,
            l = this._dur,
            _ = i <= 0 ? 0 : st(i),
            y = this._zTime < 0 != i < 0 && (this._initted || !l),
            g, x, k, p, S, O, M, E, D, P, L, I;
        if (this !== De && _ > a && i >= 0 && (_ = a), _ !== this._tTime || s || y) {
            if (o !== this._time && l && (_ += this._time - o, i += this._time - o), g = _, D = this._start, E = this._ts, O = !E, y && (l || (o = this._zTime), (i || !n) && (this._zTime = i)), this._repeat) {
                if (L = this._yoyo, S = l + this._rDelay, this._repeat < -1 && i < 0) return this.totalTime(S * 100 + i, n, s);
                if (g = st(_ % S), _ === a ? (p = this._repeat, g = l) : (p = ~~(_ / S), p && p === _ / S && (g = l, p--), g > l && (g = l)), P = Ei(this._tTime, S), !o && this._tTime && P !== p && (P = p), L && p & 1 && (g = l - g, I = 1), p !== P && !this._lock) {
                    var z = L && P & 1,
                        A = z === (L && p & 1);
                    if (p < P && (z = !z), o = z ? 0 : l, this._lock = 1, this.render(o || (I ? 0 : st(p * S)), n, !l)._lock = 0, this._tTime = _, !n && this.parent && qt(this, "onRepeat"), this.vars.repeatRefresh && !I && (this.invalidate()._lock = 1), o && o !== this._time || O !== !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                    if (l = this._dur, a = this._tDur, A && (this._lock = 2, o = z ? l : -1e-4, this.render(o, !0), this.vars.repeatRefresh && !I && this.invalidate()), this._lock = 0, !this._ts && !O) return this;
                    Oa(this, I)
                }
            }
            if (this._hasPause && !this._forcing && this._lock < 2 && (M = Pu(this, st(o), st(g)), M && (_ -= g - (g = M._start))), this._tTime = _, this._time = g, this._act = !E, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = i, o = 0), !o && g && !n && (qt(this, "onStart"), this._tTime !== _)) return this;
            if (g >= o && i >= 0)
                for (x = this._first; x;) {
                    if (k = x._next, (x._act || g >= x._start) && x._ts && M !== x) {
                        if (x.parent !== this) return this.render(i, n, s);
                        if (x.render(x._ts > 0 ? (g - x._start) * x._ts : (x._dirty ? x.totalDuration() : x._tDur) + (g - x._start) * x._ts, n, s), g !== this._time || !this._ts && !O) {
                            M = 0, k && (_ += this._zTime = -ye);
                            break
                        }
                    }
                    x = k
                } else {
                    x = this._last;
                    for (var q = i < 0 ? i : g; x;) {
                        if (k = x._prev, (x._act || q <= x._end) && x._ts && M !== x) {
                            if (x.parent !== this) return this.render(i, n, s);
                            if (x.render(x._ts > 0 ? (q - x._start) * x._ts : (x._dirty ? x.totalDuration() : x._tDur) + (q - x._start) * x._ts, n, s || ft && (x._initted || x._startAt)), g !== this._time || !this._ts && !O) {
                                M = 0, k && (_ += this._zTime = q ? -ye : ye);
                                break
                            }
                        }
                        x = k
                    }
                }
            if (M && !n && (this.pause(), M.render(g >= o ? 0 : -ye)._zTime = g >= o ? 1 : -1, this._ts)) return this._start = D, $n(this), this.render(i, n, s);
            this._onUpdate && !n && qt(this, "onUpdate", !0), (_ === a && this._tTime >= this.totalDuration() || !_ && o) && (D === this._start || Math.abs(E) !== Math.abs(this._ts)) && (this._lock || ((i || !l) && (_ === a && this._ts > 0 || !_ && this._ts < 0) && Wr(this, 1), !n && !(i < 0 && !o) && (_ || o || !a) && (qt(this, _ === a && i >= 0 ? "onComplete" : "onReverseComplete", !0), this._prom && !(_ < a && this.timeScale() > 0) && this._prom())))
        }
        return this
    }, t.add = function(i, n) {
        var s = this;
        if (Pr(n) || (n = Ut(this, n, i)), !(i instanceof Fi)) {
            if (ct(i)) return i.forEach(function(o) {
                return s.add(o, n)
            }), this;
            if (Je(i)) return this.addLabel(i, n);
            if (Be(i)) i = Ke.delayedCall(0, i);
            else return this
        }
        return this !== i ? dr(this, i, n) : this
    }, t.getChildren = function(i, n, s, o) {
        i === void 0 && (i = !0), n === void 0 && (n = !0), s === void 0 && (s = !0), o === void 0 && (o = -Gt);
        for (var a = [], l = this._first; l;) l._start >= o && (l instanceof Ke ? n && a.push(l) : (s && a.push(l), i && a.push.apply(a, l.getChildren(!0, n, s)))), l = l._next;
        return a
    }, t.getById = function(i) {
        for (var n = this.getChildren(1, 1, 1), s = n.length; s--;)
            if (n[s].vars.id === i) return n[s]
    }, t.remove = function(i) {
        return Je(i) ? this.removeLabel(i) : Be(i) ? this.killTweensOf(i) : (qn(this, i), i === this._recent && (this._recent = this._last), li(this))
    }, t.totalTime = function(i, n) {
        return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = st(Ft.time - (this._ts > 0 ? i / this._ts : (this.totalDuration() - i) / -this._ts))), c.prototype.totalTime.call(this, i, n), this._forcing = 0, this) : this._tTime
    }, t.addLabel = function(i, n) {
        return this.labels[i] = Ut(this, n), this
    }, t.removeLabel = function(i) {
        return delete this.labels[i], this
    }, t.addPause = function(i, n, s) {
        var o = Ke.delayedCall(0, n || an, s);
        return o.data = "isPause", this._hasPause = 1, dr(this, o, Ut(this, i))
    }, t.removePause = function(i) {
        var n = this._first;
        for (i = Ut(this, i); n;) n._start === i && n.data === "isPause" && Wr(n), n = n._next
    }, t.killTweensOf = function(i, n, s) {
        for (var o = this.getTweensOf(i, s), a = o.length; a--;) Nr !== o[a] && o[a].kill(i, n);
        return this
    }, t.getTweensOf = function(i, n) {
        for (var s = [], o = Ht(i), a = this._first, l = Pr(n), _; a;) a instanceof Ke ? yu(a._targets, o) && (l ? (!Nr || a._initted && a._ts) && a.globalTime(0) <= n && a.globalTime(a.totalDuration()) > n : !n || a.isActive()) && s.push(a) : (_ = a.getTweensOf(o, n)).length && s.push.apply(s, _), a = a._next;
        return s
    }, t.tweenTo = function(i, n) {
        n = n || {};
        var s = this,
            o = Ut(s, i),
            a = n,
            l = a.startAt,
            _ = a.onStart,
            y = a.onStartParams,
            g = a.immediateRender,
            x, k = Ke.to(s, $t({
                ease: n.ease || "none",
                lazy: !1,
                immediateRender: !1,
                time: o,
                overwrite: "auto",
                duration: n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale()) || ye,
                onStart: function() {
                    if (s.pause(), !x) {
                        var S = n.duration || Math.abs((o - (l && "time" in l ? l.time : s._time)) / s.timeScale());
                        k._dur !== S && Ai(k, S, 0, 1).render(k._time, !0, !0), x = 1
                    }
                    _ && _.apply(k, y || [])
                }
            }, n));
        return g ? k.render(0) : k
    }, t.tweenFromTo = function(i, n, s) {
        return this.tweenTo(n, $t({
            startAt: {
                time: Ut(this, i)
            }
        }, s))
    }, t.recent = function() {
        return this._recent
    }, t.nextLabel = function(i) {
        return i === void 0 && (i = this._time), Yo(this, Ut(this, i))
    }, t.previousLabel = function(i) {
        return i === void 0 && (i = this._time), Yo(this, Ut(this, i), 1)
    }, t.currentLabel = function(i) {
        return arguments.length ? this.seek(i, !0) : this.previousLabel(this._time + ye)
    }, t.shiftChildren = function(i, n, s) {
        s === void 0 && (s = 0);
        for (var o = this._first, a = this.labels, l; o;) o._start >= s && (o._start += i, o._end += i), o = o._next;
        if (n)
            for (l in a) a[l] >= s && (a[l] += i);
        return li(this)
    }, t.invalidate = function(i) {
        var n = this._first;
        for (this._lock = 0; n;) n.invalidate(i), n = n._next;
        return c.prototype.invalidate.call(this, i)
    }, t.clear = function(i) {
        i === void 0 && (i = !0);
        for (var n = this._first, s; n;) s = n._next, this.remove(n), n = s;
        return this._dp && (this._time = this._tTime = this._pTime = 0), i && (this.labels = {}), li(this)
    }, t.totalDuration = function(i) {
        var n = 0,
            s = this,
            o = s._last,
            a = Gt,
            l, _, y;
        if (arguments.length) return s.timeScale((s._repeat < 0 ? s.duration() : s.totalDuration()) / (s.reversed() ? -i : i));
        if (s._dirty) {
            for (y = s.parent; o;) l = o._prev, o._dirty && o.totalDuration(), _ = o._start, _ > a && s._sort && o._ts && !s._lock ? (s._lock = 1, dr(s, o, _ - o._delay, 1)._lock = 0) : a = _, _ < 0 && o._ts && (n -= _, (!y && !s._dp || y && y.smoothChildTiming) && (s._start += _ / s._ts, s._time -= _, s._tTime -= _), s.shiftChildren(-_, !1, -1 / 0), a = 0), o._end > n && o._ts && (n = o._end), o = l;
            Ai(s, s === De && s._time > n ? s._time : n, 1, 1), s._dirty = 0
        }
        return s._tDur
    }, e.updateRoot = function(i) {
        if (De._ts && (fa(De, Un(i, De)), ua = Ft.frame), Ft.frame >= Lo) {
            Lo += zt.autoSleep || 120;
            var n = De._first;
            if ((!n || !n._ts) && zt.autoSleep && Ft._listeners.length < 2) {
                for (; n && !n._ts;) n = n._next;
                n || Ft.sleep()
            }
        }
    }, e
}(Fi);
$t(wt.prototype, {
    _lock: 0,
    _hasPause: 0,
    _forcing: 0
});
var Vu = function(e, t, r, i, n, s, o) {
        var a = new kt(this._pt, e, t, 0, 1, La, null, n),
            l = 0,
            _ = 0,
            y, g, x, k, p, S, O, M;
        for (a.b = r, a.e = i, r += "", i += "", (O = ~i.indexOf("random(")) && (i = un(i)), s && (M = [r, i], s(M, e, t), r = M[0], i = M[1]), g = r.match(ps) || []; y = ps.exec(i);) k = y[0], p = i.substring(l, y.index), x ? x = (x + 1) % 5 : p.substr(-5) === "rgba(" && (x = 1), k !== g[_++] && (S = parseFloat(g[_ - 1]) || 0, a._pt = {
            _next: a._pt,
            p: p || _ === 1 ? p : ",",
            s: S,
            c: k.charAt(1) === "=" ? Ci(S, k) - S : parseFloat(k) - S,
            m: x && x < 4 ? Math.round : 0
        }, l = ps.lastIndex);
        return a.c = l < i.length ? i.substring(l, i.length) : "", a.fp = o, (ia.test(i) || O) && (a.e = 0), this._pt = a, a
    },
    qs = function(e, t, r, i, n, s, o, a, l, _) {
        Be(i) && (i = i(n || 0, e, s));
        var y = e[t],
            g = r !== "get" ? r : Be(y) ? l ? e[t.indexOf("set") || !Be(e["get" + t.substr(3)]) ? t : "get" + t.substr(3)](l) : e[t]() : y,
            x = Be(y) ? l ? qu : Fa : Ks,
            k;
        if (Je(i) && (~i.indexOf("random(") && (i = un(i)), i.charAt(1) === "=" && (k = Ci(g, i) + (lt(g) || 0), (k || k === 0) && (i = k))), !_ || g !== i || Rs) return !isNaN(g * i) && i !== "" ? (k = new kt(this._pt, e, t, +g || 0, i - (g || 0), typeof y == "boolean" ? Ku : za, 0, x), l && (k.fp = l), o && k.modifier(o, this, e), this._pt = k) : (!y && !(t in e) && Us(t, i), Vu.call(this, e, t, g, i, x, a || zt.stringFilter, l))
    },
    Uu = function(e, t, r, i, n) {
        if (Be(e) && (e = on(e, n, t, r, i)), !gr(e) || e.style && e.nodeType || ct(e) || ta(e)) return Je(e) ? on(e, n, t, r, i) : e;
        var s = {},
            o;
        for (o in e) s[o] = on(e[o], n, t, r, i);
        return s
    },
    Ea = function(e, t, r, i, n, s) {
        var o, a, l, _;
        if (Rt[e] && (o = new Rt[e]).init(n, o.rawVars ? t[e] : Uu(t[e], i, n, s, r), r, i, s) !== !1 && (r._pt = a = new kt(r._pt, n, e, 0, 1, o.render, o, 0, o.priority), r !== ki))
            for (l = r._ptLookup[r._targets.indexOf(n)], _ = o._props.length; _--;) l[o._props[_]] = a;
        return o
    },
    Nr, Rs, $s = function c(e, t, r) {
        var i = e.vars,
            n = i.ease,
            s = i.startAt,
            o = i.immediateRender,
            a = i.lazy,
            l = i.onUpdate,
            _ = i.onUpdateParams,
            y = i.callbackScope,
            g = i.runBackwards,
            x = i.yoyoEase,
            k = i.keyframes,
            p = i.autoRevert,
            S = e._dur,
            O = e._startAt,
            M = e._targets,
            E = e.parent,
            D = E && E.data === "nested" ? E.vars.targets : M,
            P = e._overwrite === "auto" && !Ys,
            L = e.timeline,
            I, z, A, q, J, Z, ee, xe, de, ke, be, he, ge;
        if (L && (!k || !n) && (n = "none"), e._ease = fi(n, Di.ease), e._yEase = x ? Ca(fi(x === !0 ? n : x, Di.ease)) : 0, x && e._yoyo && !e._repeat && (x = e._yEase, e._yEase = e._ease, e._ease = x), e._from = !L && !!i.runBackwards, !L || k && !i.stagger) {
            if (xe = M[0] ? ui(M[0]).harness : 0, he = xe && i[xe.prop], I = Vn(i, Ws), O && (O._zTime < 0 && O.progress(1), t < 0 && g && o && !p ? O.render(-1, !0) : O.revert(g && S ? Ln : gu), O._lazy = 0), s) {
                if (Wr(e._startAt = Ke.set(M, $t({
                        data: "isStart",
                        overwrite: !1,
                        parent: E,
                        immediateRender: !0,
                        lazy: !O && St(a),
                        startAt: null,
                        delay: 0,
                        onUpdate: l,
                        onUpdateParams: _,
                        callbackScope: y,
                        stagger: 0
                    }, s))), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (ft || !o && !p) && e._startAt.revert(Ln), o && S && t <= 0 && r <= 0) {
                    t && (e._zTime = t);
                    return
                }
            } else if (g && S && !O) {
                if (t && (o = !1), A = $t({
                        overwrite: !1,
                        data: "isFromStart",
                        lazy: o && !O && St(a),
                        immediateRender: o,
                        stagger: 0,
                        parent: E
                    }, I), he && (A[xe.prop] = he), Wr(e._startAt = Ke.set(M, A)), e._startAt._dp = 0, e._startAt._sat = e, t < 0 && (ft ? e._startAt.revert(Ln) : e._startAt.render(-1, !0)), e._zTime = t, !o) c(e._startAt, ye, ye);
                else if (!t) return
            }
            for (e._pt = e._ptCache = 0, a = S && St(a) || a && !S, z = 0; z < M.length; z++) {
                if (J = M[z], ee = J._gsap || Hs(M)[z]._gsap, e._ptLookup[z] = ke = {}, Cs[ee.id] && Vr.length && Xn(), be = D === M ? z : D.indexOf(J), xe && (de = new xe).init(J, he || I, e, be, D) !== !1 && (e._pt = q = new kt(e._pt, J, de.name, 0, 1, de.render, de, 0, de.priority), de._props.forEach(function(Ae) {
                        ke[Ae] = q
                    }), de.priority && (Z = 1)), !xe || he)
                    for (A in I) Rt[A] && (de = Ea(A, I, e, be, J, D)) ? de.priority && (Z = 1) : ke[A] = q = qs.call(e, J, A, "get", I[A], be, D, 0, i.stringFilter);
                e._op && e._op[z] && e.kill(J, e._op[z]), P && e._pt && (Nr = e, De.killTweensOf(J, ke, e.globalTime(t)), ge = !e.parent, Nr = 0), e._pt && a && (Cs[ee.id] = 1)
            }
            Z && Ia(e), e._onInit && e._onInit(e)
        }
        e._onUpdate = l, e._initted = (!e._op || e._pt) && !ge, k && t <= 0 && L.render(Gt, !0, !0)
    },
    Wu = function(e, t, r, i, n, s, o) {
        var a = (e._pt && e._ptCache || (e._ptCache = {}))[t],
            l, _, y, g;
        if (!a)
            for (a = e._ptCache[t] = [], y = e._ptLookup, g = e._targets.length; g--;) {
                if (l = y[g][t], l && l.d && l.d._pt)
                    for (l = l.d._pt; l && l.p !== t && l.fp !== t;) l = l._next;
                if (!l) return Rs = 1, e.vars[t] = "+=0", $s(e, o), Rs = 0, 1;
                a.push(l)
            }
        for (g = a.length; g--;) _ = a[g], l = _._pt || _, l.s = (i || i === 0) && !n ? i : l.s + (i || 0) + s * l.c, l.c = r - l.s, _.e && (_.e = Ve(r) + lt(_.e)), _.b && (_.b = l.s + lt(_.b))
    },
    Gu = function(e, t) {
        var r = e[0] ? ui(e[0]).harness : 0,
            i = r && r.aliases,
            n, s, o, a;
        if (!i) return t;
        n = ci({}, t);
        for (s in i)
            if (s in n)
                for (a = i[s].split(","), o = a.length; o--;) n[a[o]] = n[s];
        return n
    },
    Hu = function(e, t, r, i) {
        var n = t.ease || i || "power1.inOut",
            s, o;
        if (ct(t)) o = r[e] || (r[e] = []), t.forEach(function(a, l) {
            return o.push({
                t: l / (t.length - 1) * 100,
                v: a,
                e: n
            })
        });
        else
            for (s in t) o = r[s] || (r[s] = []), s === "ease" || o.push({
                t: parseFloat(e),
                v: t[s],
                e: n
            })
    },
    on = function(e, t, r, i, n) {
        return Be(e) ? e.call(t, r, i, n) : Je(e) && ~e.indexOf("random(") ? un(e) : e
    },
    Aa = Gs + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
    Ra = {};
Pt(Aa + ",id,stagger,delay,duration,paused,scrollTrigger", function(c) {
    return Ra[c] = 1
});
var Ke = function(c) {
    jo(e, c);

    function e(r, i, n, s) {
        var o;
        typeof i == "number" && (n.duration = i, i = n, n = null), o = c.call(this, s ? i : nn(i)) || this;
        var a = o.vars,
            l = a.duration,
            _ = a.delay,
            y = a.immediateRender,
            g = a.stagger,
            x = a.overwrite,
            k = a.keyframes,
            p = a.defaults,
            S = a.scrollTrigger,
            O = a.yoyoEase,
            M = i.parent || De,
            E = (ct(r) || ta(r) ? Pr(r[0]) : "length" in i) ? [r] : Ht(r),
            D, P, L, I, z, A, q, J;
        if (o._targets = E.length ? Hs(E) : Yn("GSAP target " + r + " not found. https://greensock.com", !zt.nullTargetWarn) || [], o._ptLookup = [], o._overwrite = x, k || g || zn(l) || zn(_)) {
            if (i = o.vars, D = o.timeline = new wt({
                    data: "nested",
                    defaults: p || {},
                    targets: M && M.data === "nested" ? M.vars.targets : E
                }), D.kill(), D.parent = D._dp = Tr(o), D._start = 0, g || zn(l) || zn(_)) {
                if (I = E.length, q = g && va(g), gr(g))
                    for (z in g) ~Aa.indexOf(z) && (J || (J = {}), J[z] = g[z]);
                for (P = 0; P < I; P++) L = Vn(i, Ra), L.stagger = 0, O && (L.yoyoEase = O), J && ci(L, J), A = E[P], L.duration = +on(l, Tr(o), P, A, E), L.delay = (+on(_, Tr(o), P, A, E) || 0) - o._delay, !g && I === 1 && L.delay && (o._delay = _ = L.delay, o._start += _, L.delay = 0), D.to(A, L, q ? q(P, A, E) : 0), D._ease = se.none;
                D.duration() ? l = _ = 0 : o.timeline = 0
            } else if (k) {
                nn($t(D.vars.defaults, {
                    ease: "none"
                })), D._ease = fi(k.ease || i.ease || "none");
                var Z = 0,
                    ee, xe, de;
                if (ct(k)) k.forEach(function(ke) {
                    return D.to(E, ke, ">")
                }), D.duration();
                else {
                    L = {};
                    for (z in k) z === "ease" || z === "easeEach" || Hu(z, k[z], L, k.easeEach);
                    for (z in L)
                        for (ee = L[z].sort(function(ke, be) {
                                return ke.t - be.t
                            }), Z = 0, P = 0; P < ee.length; P++) xe = ee[P], de = {
                            ease: xe.e,
                            duration: (xe.t - (P ? ee[P - 1].t : 0)) / 100 * l
                        }, de[z] = xe.v, D.to(E, de, Z), Z += de.duration;
                    D.duration() < l && D.to({}, {
                        duration: l - D.duration()
                    })
                }
            }
            l || o.duration(l = D.duration())
        } else o.timeline = 0;
        return x === !0 && !Ys && (Nr = Tr(o), De.killTweensOf(E), Nr = 0), dr(M, Tr(o), n), i.reversed && o.reverse(), i.paused && o.paused(!0), (y || !l && !k && o._start === st(M._time) && St(y) && Tu(Tr(o)) && M.data !== "nested") && (o._tTime = -ye, o.render(Math.max(0, -_) || 0)), S && pa(Tr(o), S), o
    }
    var t = e.prototype;
    return t.render = function(i, n, s) {
        var o = this._time,
            a = this._tDur,
            l = this._dur,
            _ = i < 0,
            y = i > a - ye && !_ ? a : i < ye ? 0 : i,
            g, x, k, p, S, O, M, E, D;
        if (!l) Su(this, i, n, s);
        else if (y !== this._tTime || !i || s || !this._initted && this._tTime || this._startAt && this._zTime < 0 !== _) {
            if (g = y, E = this.timeline, this._repeat) {
                if (p = l + this._rDelay, this._repeat < -1 && _) return this.totalTime(p * 100 + i, n, s);
                if (g = st(y % p), y === a ? (k = this._repeat, g = l) : (k = ~~(y / p), k && k === y / p && (g = l, k--), g > l && (g = l)), O = this._yoyo && k & 1, O && (D = this._yEase, g = l - g), S = Ei(this._tTime, p), g === o && !s && this._initted) return this._tTime = y, this;
                k !== S && (E && this._yEase && Oa(E, O), this.vars.repeatRefresh && !O && !this._lock && (this._lock = s = 1, this.render(st(p * k), !0).invalidate()._lock = 0))
            }
            if (!this._initted) {
                if (ga(this, _ ? i : g, s, n, y)) return this._tTime = 0, this;
                if (o !== this._time) return this;
                if (l !== this._dur) return this.render(i, n, s)
            }
            if (this._tTime = y, this._time = g, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = M = (D || this._ease)(g / l), this._from && (this.ratio = M = 1 - M), g && !o && !n && (qt(this, "onStart"), this._tTime !== y)) return this;
            for (x = this._pt; x;) x.r(M, x.d), x = x._next;
            E && E.render(i < 0 ? i : !g && O ? -ye : E._dur * E._ease(g / this._dur), n, s) || this._startAt && (this._zTime = i), this._onUpdate && !n && (_ && Os(this, i, n, s), qt(this, "onUpdate")), this._repeat && k !== S && this.vars.onRepeat && !n && this.parent && qt(this, "onRepeat"), (y === this._tDur || !y) && this._tTime === y && (_ && !this._onUpdate && Os(this, i, !0, !0), (i || !l) && (y === this._tDur && this._ts > 0 || !y && this._ts < 0) && Wr(this, 1), !n && !(_ && !o) && (y || o || O) && (qt(this, y === a ? "onComplete" : "onReverseComplete", !0), this._prom && !(y < a && this.timeScale() > 0) && this._prom()))
        }
        return this
    }, t.targets = function() {
        return this._targets
    }, t.invalidate = function(i) {
        return (!i || !this.vars.runBackwards) && (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(i), c.prototype.invalidate.call(this, i)
    }, t.resetTo = function(i, n, s, o) {
        ln || Ft.wake(), this._ts || this.play();
        var a = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
            l;
        return this._initted || $s(this, a), l = this._ease(a / this._dur), Wu(this, i, n, s, o, l, a) ? this.resetTo(i, n, s, o) : (Kn(this, 0), this.parent || _a(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
    }, t.kill = function(i, n) {
        if (n === void 0 && (n = "all"), !i && (!n || n === "all")) return this._lazy = this._pt = 0, this.parent ? tn(this) : this;
        if (this.timeline) {
            var s = this.timeline.totalDuration();
            return this.timeline.killTweensOf(i, n, Nr && Nr.vars.overwrite !== !0)._first || tn(this), this.parent && s !== this.timeline.totalDuration() && Ai(this, this._dur * this.timeline._tDur / s, 0, 1), this
        }
        var o = this._targets,
            a = i ? Ht(i) : o,
            l = this._ptLookup,
            _ = this._pt,
            y, g, x, k, p, S, O;
        if ((!n || n === "all") && xu(o, a)) return n === "all" && (this._pt = 0), tn(this);
        for (y = this._op = this._op || [], n !== "all" && (Je(n) && (p = {}, Pt(n, function(M) {
                return p[M] = 1
            }), n = p), n = Gu(o, n)), O = o.length; O--;)
            if (~a.indexOf(o[O])) {
                g = l[O], n === "all" ? (y[O] = n, k = g, x = {}) : (x = y[O] = y[O] || {}, k = n);
                for (p in k) S = g && g[p], S && ((!("kill" in S.d) || S.d.kill(p) === !0) && qn(this, S, "_pt"), delete g[p]), x !== "all" && (x[p] = 1)
            }
        return this._initted && !this._pt && _ && tn(this), this
    }, e.to = function(i, n) {
        return new e(i, n, arguments[2])
    }, e.from = function(i, n) {
        return sn(1, arguments)
    }, e.delayedCall = function(i, n, s, o) {
        return new e(n, 0, {
            immediateRender: !1,
            lazy: !1,
            overwrite: !1,
            delay: i,
            onComplete: n,
            onReverseComplete: n,
            onCompleteParams: s,
            onReverseCompleteParams: s,
            callbackScope: o
        })
    }, e.fromTo = function(i, n, s) {
        return sn(2, arguments)
    }, e.set = function(i, n) {
        return n.duration = 0, n.repeatDelay || (n.repeat = 0), new e(i, n)
    }, e.killTweensOf = function(i, n, s) {
        return De.killTweensOf(i, n, s)
    }, e
}(Fi);
$t(Ke.prototype, {
    _targets: [],
    _lazy: 0,
    _startAt: 0,
    _op: 0,
    _onInit: 0
});
Pt("staggerTo,staggerFrom,staggerFromTo", function(c) {
    Ke[c] = function() {
        var e = new wt,
            t = Ds.call(arguments, 0);
        return t.splice(c === "staggerFromTo" ? 5 : 4, 0, 0), e[c].apply(e, t)
    }
});
var Ks = function(e, t, r) {
        return e[t] = r
    },
    Fa = function(e, t, r) {
        return e[t](r)
    },
    qu = function(e, t, r, i) {
        return e[t](i.fp, r)
    },
    $u = function(e, t, r) {
        return e.setAttribute(t, r)
    },
    Zs = function(e, t) {
        return Be(e[t]) ? Fa : Xs(e[t]) && e.setAttribute ? $u : Ks
    },
    za = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t)
    },
    Ku = function(e, t) {
        return t.set(t.t, t.p, !!(t.s + t.c * e), t)
    },
    La = function(e, t) {
        var r = t._pt,
            i = "";
        if (!e && t.b) i = t.b;
        else if (e === 1 && t.e) i = t.e;
        else {
            for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * e) : Math.round((r.s + r.c * e) * 1e4) / 1e4) + i, r = r._next;
            i += t.c
        }
        t.set(t.t, t.p, i, t)
    },
    Qs = function(e, t) {
        for (var r = t._pt; r;) r.r(e, r.d), r = r._next
    },
    Zu = function(e, t, r, i) {
        for (var n = this._pt, s; n;) s = n._next, n.p === i && n.modifier(e, t, r), n = s
    },
    Qu = function(e) {
        for (var t = this._pt, r, i; t;) i = t._next, t.p === e && !t.op || t.op === e ? qn(this, t, "_pt") : t.dep || (r = 1), t = i;
        return !r
    },
    ju = function(e, t, r, i) {
        i.mSet(e, t, i.m.call(i.tween, r, i.mt), i)
    },
    Ia = function(e) {
        for (var t = e._pt, r, i, n, s; t;) {
            for (r = t._next, i = n; i && i.pr > t.pr;) i = i._next;
            (t._prev = i ? i._prev : s) ? t._prev._next = t: n = t, (t._next = i) ? i._prev = t : s = t, t = r
        }
        e._pt = n
    },
    kt = function() {
        function c(t, r, i, n, s, o, a, l, _) {
            this.t = r, this.s = n, this.c = s, this.p = i, this.r = o || za, this.d = a || this, this.set = l || Ks, this.pr = _ || 0, this._next = t, t && (t._prev = this)
        }
        var e = c.prototype;
        return e.modifier = function(r, i, n) {
            this.mSet = this.mSet || this.set, this.set = ju, this.m = r, this.mt = n, this.tween = i
        }, c
    }();
Pt(Gs + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(c) {
    return Ws[c] = 1
});
Lt.TweenMax = Lt.TweenLite = Ke;
Lt.TimelineLite = Lt.TimelineMax = wt;
De = new wt({
    sortChildren: !1,
    defaults: Di,
    autoRemoveChildren: !0,
    id: "root",
    smoothChildTiming: !0
});
zt.stringFilter = ka;
var zi = [],
    Bn = {},
    Ju = [],
    Vo = 0,
    xs = function(e) {
        return (Bn[e] || Ju).map(function(t) {
            return t()
        })
    },
    Fs = function() {
        var e = Date.now(),
            t = [];
        e - Vo > 2 && (xs("matchMediaInit"), zi.forEach(function(r) {
            var i = r.queries,
                n = r.conditions,
                s, o, a, l;
            for (o in i) s = Wt.matchMedia(i[o]).matches, s && (a = 1), s !== n[o] && (n[o] = s, l = 1);
            l && (r.revert(), a && t.push(r))
        }), xs("matchMediaRevert"), t.forEach(function(r) {
            return r.onMatch(r)
        }), Vo = e, xs("matchMedia"))
    },
    Ba = function() {
        function c(t, r) {
            this.selector = r && Es(r), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t)
        }
        var e = c.prototype;
        return e.add = function(r, i, n) {
            Be(r) && (n = i, i = r, r = Be);
            var s = this,
                o = function() {
                    var l = He,
                        _ = s.selector,
                        y;
                    return l && l !== s && l.data.push(s), n && (s.selector = Es(n)), He = s, y = i.apply(s, arguments), Be(y) && s._r.push(y), He = l, s.selector = _, s.isReverted = !1, y
                };
            return s.last = o, r === Be ? o(s) : r ? s[r] = o : o
        }, e.ignore = function(r) {
            var i = He;
            He = null, r(this), He = i
        }, e.getTweens = function() {
            var r = [];
            return this.data.forEach(function(i) {
                return i instanceof c ? r.push.apply(r, i.getTweens()) : i instanceof Ke && !(i.parent && i.parent.data === "nested") && r.push(i)
            }), r
        }, e.clear = function() {
            this._r.length = this.data.length = 0
        }, e.kill = function(r, i) {
            var n = this;
            if (r) {
                var s = this.getTweens();
                this.data.forEach(function(a) {
                    a.data === "isFlip" && (a.revert(), a.getChildren(!0, !0, !1).forEach(function(l) {
                        return s.splice(s.indexOf(l), 1)
                    }))
                }), s.map(function(a) {
                    return {
                        g: a.globalTime(0),
                        t: a
                    }
                }).sort(function(a, l) {
                    return l.g - a.g || -1
                }).forEach(function(a) {
                    return a.t.revert(r)
                }), this.data.forEach(function(a) {
                    return !(a instanceof Fi) && a.revert && a.revert(r)
                }), this._r.forEach(function(a) {
                    return a(r, n)
                }), this.isReverted = !0
            } else this.data.forEach(function(a) {
                return a.kill && a.kill()
            });
            if (this.clear(), i) {
                var o = zi.indexOf(this);
                ~o && zi.splice(o, 1)
            }
        }, e.revert = function(r) {
            this.kill(r || {})
        }, c
    }(),
    el = function() {
        function c(t) {
            this.contexts = [], this.scope = t
        }
        var e = c.prototype;
        return e.add = function(r, i, n) {
            gr(r) || (r = {
                matches: r
            });
            var s = new Ba(0, n || this.scope),
                o = s.conditions = {},
                a, l, _;
            this.contexts.push(s), i = s.add("onMatch", i), s.queries = r;
            for (l in r) l === "all" ? _ = 1 : (a = Wt.matchMedia(r[l]), a && (zi.indexOf(s) < 0 && zi.push(s), (o[l] = a.matches) && (_ = 1), a.addListener ? a.addListener(Fs) : a.addEventListener("change", Fs)));
            return _ && i(s), this
        }, e.revert = function(r) {
            this.kill(r || {})
        }, e.kill = function(r) {
            this.contexts.forEach(function(i) {
                return i.kill(r, !0)
            })
        }, c
    }(),
    Wn = {
        registerPlugin: function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            t.forEach(function(i) {
                return zu(i)
            })
        },
        timeline: function(e) {
            return new wt(e)
        },
        getTweensOf: function(e, t) {
            return De.getTweensOf(e, t)
        },
        getProperty: function(e, t, r, i) {
            Je(e) && (e = Ht(e)[0]);
            var n = ui(e || {}).get,
                s = r ? ha : ca;
            return r === "native" && (r = ""), e && (t ? s((Rt[t] && Rt[t].get || n)(e, t, r, i)) : function(o, a, l) {
                return s((Rt[o] && Rt[o].get || n)(e, o, a, l))
            })
        },
        quickSetter: function(e, t, r) {
            if (e = Ht(e), e.length > 1) {
                var i = e.map(function(_) {
                        return It.quickSetter(_, t, r)
                    }),
                    n = i.length;
                return function(_) {
                    for (var y = n; y--;) i[y](_)
                }
            }
            e = e[0] || {};
            var s = Rt[t],
                o = ui(e),
                a = o.harness && (o.harness.aliases || {})[t] || t,
                l = s ? function(_) {
                    var y = new s;
                    ki._pt = 0, y.init(e, r ? _ + r : _, ki, 0, [e]), y.render(1, y), ki._pt && Qs(1, ki)
                } : o.set(e, a);
            return s ? l : function(_) {
                return l(e, a, r ? _ + r : _, o, 1)
            }
        },
        quickTo: function(e, t, r) {
            var i, n = It.to(e, ci((i = {}, i[t] = "+=0.1", i.paused = !0, i), r || {})),
                s = function(a, l, _) {
                    return n.resetTo(t, a, l, _)
                };
            return s.tween = n, s
        },
        isTweening: function(e) {
            return De.getTweensOf(e, !0).length > 0
        },
        defaults: function(e) {
            return e && e.ease && (e.ease = fi(e.ease, Di.ease)), Io(Di, e || {})
        },
        config: function(e) {
            return Io(zt, e || {})
        },
        registerEffect: function(e) {
            var t = e.name,
                r = e.effect,
                i = e.plugins,
                n = e.defaults,
                s = e.extendTimeline;
            (i || "").split(",").forEach(function(o) {
                return o && !Rt[o] && !Lt[o] && Yn(t + " effect requires " + o + " plugin.")
            }), gs[t] = function(o, a, l) {
                return r(Ht(o), $t(a || {}, n), l)
            }, s && (wt.prototype[t] = function(o, a, l) {
                return this.add(gs[t](o, gr(a) ? a : (l = a) && {}, this), l)
            })
        },
        registerEase: function(e, t) {
            se[e] = fi(t)
        },
        parseEase: function(e, t) {
            return arguments.length ? fi(e, t) : se
        },
        getById: function(e) {
            return De.getById(e)
        },
        exportRoot: function(e, t) {
            e === void 0 && (e = {});
            var r = new wt(e),
                i, n;
            for (r.smoothChildTiming = St(e.smoothChildTiming), De.remove(r), r._dp = 0, r._time = r._tTime = De._time, i = De._first; i;) n = i._next, (t || !(!i._dur && i instanceof Ke && i.vars.onComplete === i._targets[0])) && dr(r, i, i._start - i._delay), i = n;
            return dr(De, r, 0), r
        },
        context: function(e, t) {
            return e ? new Ba(e, t) : He
        },
        matchMedia: function(e) {
            return new el(e)
        },
        matchMediaRefresh: function() {
            return zi.forEach(function(e) {
                var t = e.conditions,
                    r, i;
                for (i in t) t[i] && (t[i] = !1, r = 1);
                r && e.revert()
            }) || Fs()
        },
        addEventListener: function(e, t) {
            var r = Bn[e] || (Bn[e] = []);
            ~r.indexOf(t) || r.push(t)
        },
        removeEventListener: function(e, t) {
            var r = Bn[e],
                i = r && r.indexOf(t);
            i >= 0 && r.splice(i, 1)
        },
        utils: {
            wrap: Au,
            wrapYoyo: Ru,
            distribute: va,
            random: ba,
            snap: xa,
            normalize: Eu,
            getUnit: lt,
            clamp: Cu,
            splitColor: Sa,
            toArray: Ht,
            selector: Es,
            mapRange: wa,
            pipe: Mu,
            unitize: Du,
            interpolate: Fu,
            shuffle: ya
        },
        install: oa,
        effects: gs,
        ticker: Ft,
        updateRoot: wt.updateRoot,
        plugins: Rt,
        globalTimeline: De,
        core: {
            PropTween: kt,
            globals: aa,
            Tween: Ke,
            Timeline: wt,
            Animation: Fi,
            getCache: ui,
            _removeLinkedListItem: qn,
            reverting: function() {
                return ft
            },
            context: function(e) {
                return e && He && (He.data.push(e), e._ctx = He), He
            },
            suppressOverwrites: function(e) {
                return Ys = e
            }
        }
    };
Pt("to,from,fromTo,delayedCall,set,killTweensOf", function(c) {
    return Wn[c] = Ke[c]
});
Ft.add(wt.updateRoot);
ki = Wn.to({}, {
    duration: 0
});
var tl = function(e, t) {
        for (var r = e._pt; r && r.p !== t && r.op !== t && r.fp !== t;) r = r._next;
        return r
    },
    rl = function(e, t) {
        var r = e._targets,
            i, n, s;
        for (i in t)
            for (n = r.length; n--;) s = e._ptLookup[n][i], s && (s = s.d) && (s._pt && (s = tl(s, i)), s && s.modifier && s.modifier(t[i], e, r[n], i))
    },
    bs = function(e, t) {
        return {
            name: e,
            rawVars: 1,
            init: function(i, n, s) {
                s._onInit = function(o) {
                    var a, l;
                    if (Je(n) && (a = {}, Pt(n, function(_) {
                            return a[_] = 1
                        }), n = a), t) {
                        a = {};
                        for (l in n) a[l] = t(n[l]);
                        n = a
                    }
                    rl(o, n)
                }
            }
        }
    },
    It = Wn.registerPlugin({
        name: "attr",
        init: function(e, t, r, i, n) {
            var s, o, a;
            this.tween = r;
            for (s in t) a = e.getAttribute(s) || "", o = this.add(e, "setAttribute", (a || 0) + "", t[s], i, n, 0, 0, s), o.op = s, o.b = a, this._props.push(s)
        },
        render: function(e, t) {
            for (var r = t._pt; r;) ft ? r.set(r.t, r.p, r.b, r) : r.r(e, r.d), r = r._next
        }
    }, {
        name: "endArray",
        init: function(e, t) {
            for (var r = t.length; r--;) this.add(e, r, e[r] || 0, t[r], 0, 0, 0, 0, 0, 1)
        }
    }, bs("roundProps", As), bs("modifiers"), bs("snap", xa)) || Wn;
Ke.version = wt.version = It.version = "3.11.4";
sa = 1;
ea() && Ri();
se.Power0;
se.Power1;
se.Power2;
se.Power3;
se.Power4;
se.Linear;
se.Quad;
se.Cubic;
se.Quart;
se.Quint;
se.Strong;
se.Elastic;
se.Back;
se.SteppedEase;
se.Bounce;
se.Sine;
se.Expo;
se.Circ;
/*!
 * CSSPlugin 3.11.4
 * https://greensock.com
 *
 * Copyright 2008-2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
var Uo, Yr, Oi, js, ai, Wo, Js, il = function() {
        return typeof window < "u"
    },
    kr = {},
    oi = 180 / Math.PI,
    Mi = Math.PI / 180,
    Si = Math.atan2,
    Go = 1e8,
    eo = /([A-Z])/g,
    nl = /(left|right|width|margin|padding|x)/i,
    sl = /[\s,\(]\S/,
    Sr = {
        autoAlpha: "opacity,visibility",
        scale: "scaleX,scaleY",
        alpha: "opacity"
    },
    zs = function(e, t) {
        return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    },
    ol = function(e, t) {
        return t.set(t.t, t.p, e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t)
    },
    al = function(e, t) {
        return t.set(t.t, t.p, e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b, t)
    },
    ul = function(e, t) {
        var r = t.s + t.c * e;
        t.set(t.t, t.p, ~~(r + (r < 0 ? -.5 : .5)) + t.u, t)
    },
    Na = function(e, t) {
        return t.set(t.t, t.p, e ? t.e : t.b, t)
    },
    Ya = function(e, t) {
        return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t)
    },
    ll = function(e, t, r) {
        return e.style[t] = r
    },
    fl = function(e, t, r) {
        return e.style.setProperty(t, r)
    },
    cl = function(e, t, r) {
        return e._gsap[t] = r
    },
    hl = function(e, t, r) {
        return e._gsap.scaleX = e._gsap.scaleY = r
    },
    _l = function(e, t, r, i, n) {
        var s = e._gsap;
        s.scaleX = s.scaleY = r, s.renderTransform(n, s)
    },
    dl = function(e, t, r, i, n) {
        var s = e._gsap;
        s[t] = r, s.renderTransform(n, s)
    },
    Ee = "transform",
    nr = Ee + "Origin",
    pl = function(e, t) {
        var r = this,
            i = this.target,
            n = i.style;
        if (e in kr) {
            if (this.tfm = this.tfm || {}, e !== "transform" && (e = Sr[e] || e, ~e.indexOf(",") ? e.split(",").forEach(function(s) {
                    return r.tfm[s] = wr(i, s)
                }) : this.tfm[e] = i._gsap.x ? i._gsap[e] : wr(i, e)), this.props.indexOf(Ee) >= 0) return;
            i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(nr, t, "")), e = Ee
        }(n || t) && this.props.push(e, t, n[e])
    },
    Xa = function(e) {
        e.translate && (e.removeProperty("translate"), e.removeProperty("scale"), e.removeProperty("rotate"))
    },
    gl = function() {
        var e = this.props,
            t = this.target,
            r = t.style,
            i = t._gsap,
            n, s;
        for (n = 0; n < e.length; n += 3) e[n + 1] ? t[e[n]] = e[n + 2] : e[n + 2] ? r[e[n]] = e[n + 2] : r.removeProperty(e[n].replace(eo, "-$1").toLowerCase());
        if (this.tfm) {
            for (s in this.tfm) i[s] = this.tfm[s];
            i.svg && (i.renderTransform(), t.setAttribute("data-svg-origin", this.svgo || "")), n = Js(), n && !n.isStart && !r[Ee] && (Xa(r), i.uncache = 1)
        }
    },
    Va = function(e, t) {
        var r = {
            target: e,
            props: [],
            revert: gl,
            save: pl
        };
        return t && t.split(",").forEach(function(i) {
            return r.save(i)
        }), r
    },
    Ua, Ls = function(e, t) {
        var r = Yr.createElementNS ? Yr.createElementNS((t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), e) : Yr.createElement(e);
        return r.style ? r : Yr.createElement(e)
    },
    pr = function c(e, t, r) {
        var i = getComputedStyle(e);
        return i[t] || i.getPropertyValue(t.replace(eo, "-$1").toLowerCase()) || i.getPropertyValue(t) || !r && c(e, Li(t) || t, 1) || ""
    },
    Ho = "O,Moz,ms,Ms,Webkit".split(","),
    Li = function(e, t, r) {
        var i = t || ai,
            n = i.style,
            s = 5;
        if (e in n && !r) return e;
        for (e = e.charAt(0).toUpperCase() + e.substr(1); s-- && !(Ho[s] + e in n););
        return s < 0 ? null : (s === 3 ? "ms" : s >= 0 ? Ho[s] : "") + e
    },
    Is = function() {
        il() && window.document && (Uo = window, Yr = Uo.document, Oi = Yr.documentElement, ai = Ls("div") || {
            style: {}
        }, Ls("div"), Ee = Li(Ee), nr = Ee + "Origin", ai.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ua = !!Li("perspective"), Js = It.core.reverting, js = 1)
    },
    Ts = function c(e) {
        var t = Ls("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
            r = this.parentNode,
            i = this.nextSibling,
            n = this.style.cssText,
            s;
        if (Oi.appendChild(t), t.appendChild(this), this.style.display = "block", e) try {
            s = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = c
        } catch {} else this._gsapBBox && (s = this._gsapBBox());
        return r && (i ? r.insertBefore(this, i) : r.appendChild(this)), Oi.removeChild(t), this.style.cssText = n, s
    },
    qo = function(e, t) {
        for (var r = t.length; r--;)
            if (e.hasAttribute(t[r])) return e.getAttribute(t[r])
    },
    Wa = function(e) {
        var t;
        try {
            t = e.getBBox()
        } catch {
            t = Ts.call(e, !0)
        }
        return t && (t.width || t.height) || e.getBBox === Ts || (t = Ts.call(e, !0)), t && !t.width && !t.x && !t.y ? {
            x: +qo(e, ["x", "cx", "x1"]) || 0,
            y: +qo(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0
        } : t
    },
    Ga = function(e) {
        return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Wa(e))
    },
    fn = function(e, t) {
        if (t) {
            var r = e.style;
            t in kr && t !== nr && (t = Ee), r.removeProperty ? ((t.substr(0, 2) === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t), r.removeProperty(t.replace(eo, "-$1").toLowerCase())) : r.removeAttribute(t)
        }
    },
    Xr = function(e, t, r, i, n, s) {
        var o = new kt(e._pt, t, r, 0, 1, s ? Ya : Na);
        return e._pt = o, o.b = i, o.e = n, e._props.push(r), o
    },
    $o = {
        deg: 1,
        rad: 1,
        turn: 1
    },
    ml = {
        grid: 1,
        flex: 1
    },
    Gr = function c(e, t, r, i) {
        var n = parseFloat(r) || 0,
            s = (r + "").trim().substr((n + "").length) || "px",
            o = ai.style,
            a = nl.test(t),
            l = e.tagName.toLowerCase() === "svg",
            _ = (l ? "client" : "offset") + (a ? "Width" : "Height"),
            y = 100,
            g = i === "px",
            x = i === "%",
            k, p, S, O;
        return i === s || !n || $o[i] || $o[s] ? n : (s !== "px" && !g && (n = c(e, t, r, "px")), O = e.getCTM && Ga(e), (x || s === "%") && (kr[t] || ~t.indexOf("adius")) ? (k = O ? e.getBBox()[a ? "width" : "height"] : e[_], Ve(x ? n / k * y : n / 100 * k)) : (o[a ? "width" : "height"] = y + (g ? s : i), p = ~t.indexOf("adius") || i === "em" && e.appendChild && !l ? e : e.parentNode, O && (p = (e.ownerSVGElement || {}).parentNode), (!p || p === Yr || !p.appendChild) && (p = Yr.body), S = p._gsap, S && x && S.width && a && S.time === Ft.time && !S.uncache ? Ve(n / S.width * y) : ((x || s === "%") && !ml[pr(p, "display")] && (o.position = pr(e, "position")), p === e && (o.position = "static"), p.appendChild(ai), k = ai[_], p.removeChild(ai), o.position = "absolute", a && x && (S = ui(p), S.time = Ft.time, S.width = p[_]), Ve(g ? k * n / y : k && n ? y / k * n : 0))))
    },
    wr = function(e, t, r, i) {
        var n;
        return js || Is(), t in Sr && t !== "transform" && (t = Sr[t], ~t.indexOf(",") && (t = t.split(",")[0])), kr[t] && t !== "transform" ? (n = hn(e, i), n = t !== "transformOrigin" ? n[t] : n.svg ? n.origin : Hn(pr(e, nr)) + " " + n.zOrigin + "px") : (n = e.style[t], (!n || n === "auto" || i || ~(n + "").indexOf("calc(")) && (n = Gn[t] && Gn[t](e, t, r) || pr(e, t) || la(e, t) || (t === "opacity" ? 1 : 0))), r && !~(n + "").trim().indexOf(" ") ? Gr(e, t, n, r) + r : n
    },
    yl = function(e, t, r, i) {
        if (!r || r === "none") {
            var n = Li(t, e, 1),
                s = n && pr(e, n, 1);
            s && s !== r ? (t = n, r = s) : t === "borderColor" && (r = pr(e, "borderTopColor"))
        }
        var o = new kt(this._pt, e.style, t, 0, 1, La),
            a = 0,
            l = 0,
            _, y, g, x, k, p, S, O, M, E, D, P;
        if (o.b = r, o.e = i, r += "", i += "", i === "auto" && (e.style[t] = i, i = pr(e, t) || i, e.style[t] = r), _ = [r, i], ka(_), r = _[0], i = _[1], g = r.match(Pi) || [], P = i.match(Pi) || [], P.length) {
            for (; y = Pi.exec(i);) S = y[0], M = i.substring(a, y.index), k ? k = (k + 1) % 5 : (M.substr(-5) === "rgba(" || M.substr(-5) === "hsla(") && (k = 1), S !== (p = g[l++] || "") && (x = parseFloat(p) || 0, D = p.substr((x + "").length), S.charAt(1) === "=" && (S = Ci(x, S) + D), O = parseFloat(S), E = S.substr((O + "").length), a = Pi.lastIndex - E.length, E || (E = E || zt.units[t] || D, a === i.length && (i += E, o.e += E)), D !== E && (x = Gr(e, t, p, E) || 0), o._pt = {
                _next: o._pt,
                p: M || l === 1 ? M : ",",
                s: x,
                c: O - x,
                m: k && k < 4 || t === "zIndex" ? Math.round : 0
            });
            o.c = a < i.length ? i.substring(a, i.length) : ""
        } else o.r = t === "display" && i === "none" ? Ya : Na;
        return ia.test(i) && (o.e = 0), this._pt = o, o
    },
    Ko = {
        top: "0%",
        bottom: "100%",
        left: "0%",
        right: "100%",
        center: "50%"
    },
    vl = function(e) {
        var t = e.split(" "),
            r = t[0],
            i = t[1] || "50%";
        return (r === "top" || r === "bottom" || i === "left" || i === "right") && (e = r, r = i, i = e), t[0] = Ko[r] || r, t[1] = Ko[i] || i, t.join(" ")
    },
    xl = function(e, t) {
        if (t.tween && t.tween._time === t.tween._dur) {
            var r = t.t,
                i = r.style,
                n = t.u,
                s = r._gsap,
                o, a, l;
            if (n === "all" || n === !0) i.cssText = "", a = 1;
            else
                for (n = n.split(","), l = n.length; --l > -1;) o = n[l], kr[o] && (a = 1, o = o === "transformOrigin" ? nr : Ee), fn(r, o);
            a && (fn(r, Ee), s && (s.svg && r.removeAttribute("transform"), hn(r, 1), s.uncache = 1, Xa(i)))
        }
    },
    Gn = {
        clearProps: function(e, t, r, i, n) {
            if (n.data !== "isFromStart") {
                var s = e._pt = new kt(e._pt, t, r, 0, 0, xl);
                return s.u = i, s.pr = -10, s.tween = n, e._props.push(r), 1
            }
        }
    },
    cn = [1, 0, 0, 1, 0, 0],
    Ha = {},
    qa = function(e) {
        return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e
    },
    Zo = function(e) {
        var t = pr(e, Ee);
        return qa(t) ? cn : t.substr(7).match(ra).map(Ve)
    },
    to = function(e, t) {
        var r = e._gsap || ui(e),
            i = e.style,
            n = Zo(e),
            s, o, a, l;
        return r.svg && e.getAttribute("transform") ? (a = e.transform.baseVal.consolidate().matrix, n = [a.a, a.b, a.c, a.d, a.e, a.f], n.join(",") === "1,0,0,1,0,0" ? cn : n) : (n === cn && !e.offsetParent && e !== Oi && !r.svg && (a = i.display, i.display = "block", s = e.parentNode, (!s || !e.offsetParent) && (l = 1, o = e.nextElementSibling, Oi.appendChild(e)), n = Zo(e), a ? i.display = a : fn(e, "display"), l && (o ? s.insertBefore(e, o) : s ? s.appendChild(e) : Oi.removeChild(e))), t && n.length > 6 ? [n[0], n[1], n[4], n[5], n[12], n[13]] : n)
    },
    Bs = function(e, t, r, i, n, s) {
        var o = e._gsap,
            a = n || to(e, !0),
            l = o.xOrigin || 0,
            _ = o.yOrigin || 0,
            y = o.xOffset || 0,
            g = o.yOffset || 0,
            x = a[0],
            k = a[1],
            p = a[2],
            S = a[3],
            O = a[4],
            M = a[5],
            E = t.split(" "),
            D = parseFloat(E[0]) || 0,
            P = parseFloat(E[1]) || 0,
            L, I, z, A;
        r ? a !== cn && (I = x * S - k * p) && (z = D * (S / I) + P * (-p / I) + (p * M - S * O) / I, A = D * (-k / I) + P * (x / I) - (x * M - k * O) / I, D = z, P = A) : (L = Wa(e), D = L.x + (~E[0].indexOf("%") ? D / 100 * L.width : D), P = L.y + (~(E[1] || E[0]).indexOf("%") ? P / 100 * L.height : P)), i || i !== !1 && o.smooth ? (O = D - l, M = P - _, o.xOffset = y + (O * x + M * p) - O, o.yOffset = g + (O * k + M * S) - M) : o.xOffset = o.yOffset = 0, o.xOrigin = D, o.yOrigin = P, o.smooth = !!i, o.origin = t, o.originIsAbsolute = !!r, e.style[nr] = "0px 0px", s && (Xr(s, o, "xOrigin", l, D), Xr(s, o, "yOrigin", _, P), Xr(s, o, "xOffset", y, o.xOffset), Xr(s, o, "yOffset", g, o.yOffset)), e.setAttribute("data-svg-origin", D + " " + P)
    },
    hn = function(e, t) {
        var r = e._gsap || new Da(e);
        if ("x" in r && !t && !r.uncache) return r;
        var i = e.style,
            n = r.scaleX < 0,
            s = "px",
            o = "deg",
            a = getComputedStyle(e),
            l = pr(e, nr) || "0",
            _, y, g, x, k, p, S, O, M, E, D, P, L, I, z, A, q, J, Z, ee, xe, de, ke, be, he, ge, Ae, Tt, Kt, Cr, Bt, sr;
        return _ = y = g = p = S = O = M = E = D = 0, x = k = 1, r.svg = !!(e.getCTM && Ga(e)), a.translate && ((a.translate !== "none" || a.scale !== "none" || a.rotate !== "none") && (i[Ee] = (a.translate !== "none" ? "translate3d(" + (a.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + (a.rotate !== "none" ? "rotate(" + a.rotate + ") " : "") + (a.scale !== "none" ? "scale(" + a.scale.split(" ").join(",") + ") " : "") + (a[Ee] !== "none" ? a[Ee] : "")), i.scale = i.rotate = i.translate = "none"), I = to(e, r.svg), r.svg && (r.uncache ? (he = e.getBBox(), l = r.xOrigin - he.x + "px " + (r.yOrigin - he.y) + "px", be = "") : be = !t && e.getAttribute("data-svg-origin"), Bs(e, be || l, !!be || r.originIsAbsolute, r.smooth !== !1, I)), P = r.xOrigin || 0, L = r.yOrigin || 0, I !== cn && (J = I[0], Z = I[1], ee = I[2], xe = I[3], _ = de = I[4], y = ke = I[5], I.length === 6 ? (x = Math.sqrt(J * J + Z * Z), k = Math.sqrt(xe * xe + ee * ee), p = J || Z ? Si(Z, J) * oi : 0, M = ee || xe ? Si(ee, xe) * oi + p : 0, M && (k *= Math.abs(Math.cos(M * Mi))), r.svg && (_ -= P - (P * J + L * ee), y -= L - (P * Z + L * xe))) : (sr = I[6], Cr = I[7], Ae = I[8], Tt = I[9], Kt = I[10], Bt = I[11], _ = I[12], y = I[13], g = I[14], z = Si(sr, Kt), S = z * oi, z && (A = Math.cos(-z), q = Math.sin(-z), be = de * A + Ae * q, he = ke * A + Tt * q, ge = sr * A + Kt * q, Ae = de * -q + Ae * A, Tt = ke * -q + Tt * A, Kt = sr * -q + Kt * A, Bt = Cr * -q + Bt * A, de = be, ke = he, sr = ge), z = Si(-ee, Kt), O = z * oi, z && (A = Math.cos(-z), q = Math.sin(-z), be = J * A - Ae * q, he = Z * A - Tt * q, ge = ee * A - Kt * q, Bt = xe * q + Bt * A, J = be, Z = he, ee = ge), z = Si(Z, J), p = z * oi, z && (A = Math.cos(z), q = Math.sin(z), be = J * A + Z * q, he = de * A + ke * q, Z = Z * A - J * q, ke = ke * A - de * q, J = be, de = he), S && Math.abs(S) + Math.abs(p) > 359.9 && (S = p = 0, O = 180 - O), x = Ve(Math.sqrt(J * J + Z * Z + ee * ee)), k = Ve(Math.sqrt(ke * ke + sr * sr)), z = Si(de, ke), M = Math.abs(z) > 2e-4 ? z * oi : 0, D = Bt ? 1 / (Bt < 0 ? -Bt : Bt) : 0), r.svg && (be = e.getAttribute("transform"), r.forceCSS = e.setAttribute("transform", "") || !qa(pr(e, Ee)), be && e.setAttribute("transform", be))), Math.abs(M) > 90 && Math.abs(M) < 270 && (n ? (x *= -1, M += p <= 0 ? 180 : -180, p += p <= 0 ? 180 : -180) : (k *= -1, M += M <= 0 ? 180 : -180)), t = t || r.uncache, r.x = _ - ((r.xPercent = _ && (!t && r.xPercent || (Math.round(e.offsetWidth / 2) === Math.round(-_) ? -50 : 0))) ? e.offsetWidth * r.xPercent / 100 : 0) + s, r.y = y - ((r.yPercent = y && (!t && r.yPercent || (Math.round(e.offsetHeight / 2) === Math.round(-y) ? -50 : 0))) ? e.offsetHeight * r.yPercent / 100 : 0) + s, r.z = g + s, r.scaleX = Ve(x), r.scaleY = Ve(k), r.rotation = Ve(p) + o, r.rotationX = Ve(S) + o, r.rotationY = Ve(O) + o, r.skewX = M + o, r.skewY = E + o, r.transformPerspective = D + s, (r.zOrigin = parseFloat(l.split(" ")[2]) || 0) && (i[nr] = Hn(l)), r.xOffset = r.yOffset = 0, r.force3D = zt.force3D, r.renderTransform = r.svg ? Tl : Ua ? $a : bl, r.uncache = 0, r
    },
    Hn = function(e) {
        return (e = e.split(" "))[0] + " " + e[1]
    },
    ws = function(e, t, r) {
        var i = lt(t);
        return Ve(parseFloat(t) + parseFloat(Gr(e, "x", r + "px", i))) + i
    },
    bl = function(e, t) {
        t.z = "0px", t.rotationY = t.rotationX = "0deg", t.force3D = 0, $a(e, t)
    },
    ni = "0deg",
    en = "0px",
    si = ") ",
    $a = function(e, t) {
        var r = t || this,
            i = r.xPercent,
            n = r.yPercent,
            s = r.x,
            o = r.y,
            a = r.z,
            l = r.rotation,
            _ = r.rotationY,
            y = r.rotationX,
            g = r.skewX,
            x = r.skewY,
            k = r.scaleX,
            p = r.scaleY,
            S = r.transformPerspective,
            O = r.force3D,
            M = r.target,
            E = r.zOrigin,
            D = "",
            P = O === "auto" && e && e !== 1 || O === !0;
        if (E && (y !== ni || _ !== ni)) {
            var L = parseFloat(_) * Mi,
                I = Math.sin(L),
                z = Math.cos(L),
                A;
            L = parseFloat(y) * Mi, A = Math.cos(L), s = ws(M, s, I * A * -E), o = ws(M, o, -Math.sin(L) * -E), a = ws(M, a, z * A * -E + E)
        }
        S !== en && (D += "perspective(" + S + si), (i || n) && (D += "translate(" + i + "%, " + n + "%) "), (P || s !== en || o !== en || a !== en) && (D += a !== en || P ? "translate3d(" + s + ", " + o + ", " + a + ") " : "translate(" + s + ", " + o + si), l !== ni && (D += "rotate(" + l + si), _ !== ni && (D += "rotateY(" + _ + si), y !== ni && (D += "rotateX(" + y + si), (g !== ni || x !== ni) && (D += "skew(" + g + ", " + x + si), (k !== 1 || p !== 1) && (D += "scale(" + k + ", " + p + si), M.style[Ee] = D || "translate(0, 0)"
    },
    Tl = function(e, t) {
        var r = t || this,
            i = r.xPercent,
            n = r.yPercent,
            s = r.x,
            o = r.y,
            a = r.rotation,
            l = r.skewX,
            _ = r.skewY,
            y = r.scaleX,
            g = r.scaleY,
            x = r.target,
            k = r.xOrigin,
            p = r.yOrigin,
            S = r.xOffset,
            O = r.yOffset,
            M = r.forceCSS,
            E = parseFloat(s),
            D = parseFloat(o),
            P, L, I, z, A;
        a = parseFloat(a), l = parseFloat(l), _ = parseFloat(_), _ && (_ = parseFloat(_), l += _, a += _), a || l ? (a *= Mi, l *= Mi, P = Math.cos(a) * y, L = Math.sin(a) * y, I = Math.sin(a - l) * -g, z = Math.cos(a - l) * g, l && (_ *= Mi, A = Math.tan(l - _), A = Math.sqrt(1 + A * A), I *= A, z *= A, _ && (A = Math.tan(_), A = Math.sqrt(1 + A * A), P *= A, L *= A)), P = Ve(P), L = Ve(L), I = Ve(I), z = Ve(z)) : (P = y, z = g, L = I = 0), (E && !~(s + "").indexOf("px") || D && !~(o + "").indexOf("px")) && (E = Gr(x, "x", s, "px"), D = Gr(x, "y", o, "px")), (k || p || S || O) && (E = Ve(E + k - (k * P + p * I) + S), D = Ve(D + p - (k * L + p * z) + O)), (i || n) && (A = x.getBBox(), E = Ve(E + i / 100 * A.width), D = Ve(D + n / 100 * A.height)), A = "matrix(" + P + "," + L + "," + I + "," + z + "," + E + "," + D + ")", x.setAttribute("transform", A), M && (x.style[Ee] = A)
    },
    wl = function(e, t, r, i, n) {
        var s = 360,
            o = Je(n),
            a = parseFloat(n) * (o && ~n.indexOf("rad") ? oi : 1),
            l = a - i,
            _ = i + l + "deg",
            y, g;
        return o && (y = n.split("_")[1], y === "short" && (l %= s, l !== l % (s / 2) && (l += l < 0 ? s : -s)), y === "cw" && l < 0 ? l = (l + s * Go) % s - ~~(l / s) * s : y === "ccw" && l > 0 && (l = (l - s * Go) % s - ~~(l / s) * s)), e._pt = g = new kt(e._pt, t, r, i, l, ol), g.e = _, g.u = "deg", e._props.push(r), g
    },
    Qo = function(e, t) {
        for (var r in t) e[r] = t[r];
        return e
    },
    Sl = function(e, t, r) {
        var i = Qo({}, r._gsap),
            n = "perspective,force3D,transformOrigin,svgOrigin",
            s = r.style,
            o, a, l, _, y, g, x, k;
        i.svg ? (l = r.getAttribute("transform"), r.setAttribute("transform", ""), s[Ee] = t, o = hn(r, 1), fn(r, Ee), r.setAttribute("transform", l)) : (l = getComputedStyle(r)[Ee], s[Ee] = t, o = hn(r, 1), s[Ee] = l);
        for (a in kr) l = i[a], _ = o[a], l !== _ && n.indexOf(a) < 0 && (x = lt(l), k = lt(_), y = x !== k ? Gr(r, a, l, k) : parseFloat(l), g = parseFloat(_), e._pt = new kt(e._pt, o, a, y, g - y, zs), e._pt.u = k || 0, e._props.push(a));
        Qo(o, i)
    };
Pt("padding,margin,Width,Radius", function(c, e) {
    var t = "Top",
        r = "Right",
        i = "Bottom",
        n = "Left",
        s = (e < 3 ? [t, r, i, n] : [t + n, t + r, i + r, i + n]).map(function(o) {
            return e < 2 ? c + o : "border" + o + c
        });
    Gn[e > 1 ? "border" + c : c] = function(o, a, l, _, y) {
        var g, x;
        if (arguments.length < 4) return g = s.map(function(k) {
            return wr(o, k, l)
        }), x = g.join(" "), x.split(g[0]).length === 5 ? g[0] : x;
        g = (_ + "").split(" "), x = {}, s.forEach(function(k, p) {
            return x[k] = g[p] = g[p] || g[(p - 1) / 2 | 0]
        }), o.init(a, x, y)
    }
});
var Ka = {
    name: "css",
    register: Is,
    targetTest: function(e) {
        return e.style && e.nodeType
    },
    init: function(e, t, r, i, n) {
        var s = this._props,
            o = e.style,
            a = r.vars.startAt,
            l, _, y, g, x, k, p, S, O, M, E, D, P, L, I, z;
        js || Is(), this.styles = this.styles || Va(e), z = this.styles.props, this.tween = r;
        for (p in t)
            if (p !== "autoRound" && (_ = t[p], !(Rt[p] && Ea(p, t, r, i, e, n)))) {
                if (x = typeof _, k = Gn[p], x === "function" && (_ = _.call(r, i, e, n), x = typeof _), x === "string" && ~_.indexOf("random(") && (_ = un(_)), k) k(this, e, p, _, r) && (I = 1);
                else if (p.substr(0, 2) === "--") l = (getComputedStyle(e).getPropertyValue(p) + "").trim(), _ += "", Ur.lastIndex = 0, Ur.test(l) || (S = lt(l), O = lt(_)), O ? S !== O && (l = Gr(e, p, l, O) + O) : S && (_ += S), this.add(o, "setProperty", l, _, i, n, 0, 0, p), s.push(p), z.push(p, 0, o[p]);
                else if (x !== "undefined") {
                    if (a && p in a ? (l = typeof a[p] == "function" ? a[p].call(r, i, e, n) : a[p], Je(l) && ~l.indexOf("random(") && (l = un(l)), lt(l + "") || (l += zt.units[p] || lt(wr(e, p)) || ""), (l + "").charAt(1) === "=" && (l = wr(e, p))) : l = wr(e, p), g = parseFloat(l), M = x === "string" && _.charAt(1) === "=" && _.substr(0, 2), M && (_ = _.substr(2)), y = parseFloat(_), p in Sr && (p === "autoAlpha" && (g === 1 && wr(e, "visibility") === "hidden" && y && (g = 0), z.push("visibility", 0, o.visibility), Xr(this, o, "visibility", g ? "inherit" : "hidden", y ? "inherit" : "hidden", !y)), p !== "scale" && p !== "transform" && (p = Sr[p], ~p.indexOf(",") && (p = p.split(",")[0]))), E = p in kr, E) {
                        if (this.styles.save(p), D || (P = e._gsap, P.renderTransform && !t.parseTransform || hn(e, t.parseTransform), L = t.smoothOrigin !== !1 && P.smooth, D = this._pt = new kt(this._pt, o, Ee, 0, 1, P.renderTransform, P, 0, -1), D.dep = 1), p === "scale") this._pt = new kt(this._pt, P, "scaleY", P.scaleY, (M ? Ci(P.scaleY, M + y) : y) - P.scaleY || 0, zs), this._pt.u = 0, s.push("scaleY", p), p += "X";
                        else if (p === "transformOrigin") {
                            z.push(nr, 0, o[nr]), _ = vl(_), P.svg ? Bs(e, _, 0, L, 0, this) : (O = parseFloat(_.split(" ")[2]) || 0, O !== P.zOrigin && Xr(this, P, "zOrigin", P.zOrigin, O), Xr(this, o, p, Hn(l), Hn(_)));
                            continue
                        } else if (p === "svgOrigin") {
                            Bs(e, _, 1, L, 0, this);
                            continue
                        } else if (p in Ha) {
                            wl(this, P, p, g, M ? Ci(g, M + _) : _);
                            continue
                        } else if (p === "smoothOrigin") {
                            Xr(this, P, "smooth", P.smooth, _);
                            continue
                        } else if (p === "force3D") {
                            P[p] = _;
                            continue
                        } else if (p === "transform") {
                            Sl(this, _, e);
                            continue
                        }
                    } else p in o || (p = Li(p) || p);
                    if (E || (y || y === 0) && (g || g === 0) && !sl.test(_) && p in o) S = (l + "").substr((g + "").length), y || (y = 0), O = lt(_) || (p in zt.units ? zt.units[p] : S), S !== O && (g = Gr(e, p, l, O)), this._pt = new kt(this._pt, E ? P : o, p, g, (M ? Ci(g, M + y) : y) - g, !E && (O === "px" || p === "zIndex") && t.autoRound !== !1 ? ul : zs), this._pt.u = O || 0, S !== O && O !== "%" && (this._pt.b = l, this._pt.r = al);
                    else if (p in o) yl.call(this, e, p, l, M ? M + _ : _);
                    else if (p in e) this.add(e, p, l || e[p], M ? M + _ : _, i, n);
                    else if (p !== "parseTransform") {
                        Us(p, _);
                        continue
                    }
                    E || (p in o ? z.push(p, 0, o[p]) : z.push(p, 1, l || e[p])), s.push(p)
                }
            }
        I && Ia(this)
    },
    render: function(e, t) {
        if (t.tween._time || !Js())
            for (var r = t._pt; r;) r.r(e, r.d), r = r._next;
        else t.styles.revert()
    },
    get: wr,
    aliases: Sr,
    getSetter: function(e, t, r) {
        var i = Sr[t];
        return i && i.indexOf(",") < 0 && (t = i), t in kr && t !== nr && (e._gsap.x || wr(e, "x")) ? r && Wo === r ? t === "scale" ? hl : cl : (Wo = r || {}) && (t === "scale" ? _l : dl) : e.style && !Xs(e.style[t]) ? ll : ~t.indexOf("-") ? fl : Zs(e, t)
    },
    core: {
        _removeProperty: fn,
        _getMatrix: to
    }
};
It.utils.checkPrefix = Li;
It.core.getStyleSaver = Va;
(function(c, e, t, r) {
    var i = Pt(c + "," + e + "," + t, function(n) {
        kr[n] = 1
    });
    Pt(e, function(n) {
        zt.units[n] = "deg", Ha[n] = 1
    }), Sr[i[13]] = c + "," + e, Pt(r, function(n) {
        var s = n.split(":");
        Sr[s[1]] = i[s[0]]
    })
})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent", "rotation,rotationX,rotationY,skewX,skewY", "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");
Pt("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(c) {
    zt.units[c] = "px"
});
It.registerPlugin(Ka);
var Pl = It.registerPlugin(Ka) || It;
Pl.core.Tween;
var Ns = {},
    kl = {
        get exports() {
            return Ns
        },
        set exports(c) {
            Ns = c
        }
    };
(function(c, e) {
    (function(t, r) {
        r(e)
    })(fu, function(t) {
        function r(v, u) {
            for (var d = 0; d < u.length; d++) {
                var f = u[d];
                f.enumerable = f.enumerable || !1, f.configurable = !0, "value" in f && (f.writable = !0), Object.defineProperty(v, f.key, f)
            }
        }

        function i(v, u, d) {
            return u && r(v.prototype, u), d && r(v, d), v
        }
        /*!
         * Observer 3.11.4
         * https://greensock.com
         *
         * @license Copyright 2008-2022, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */
        var n, s, o, a, l, _, y, g, x, k, p, S, O, M = function() {
                return n || typeof window < "u" && (n = window.gsap) && n.registerPlugin && n
            },
            E = 1,
            D = [],
            P = [],
            L = [],
            I = Date.now,
            z = function(u, d) {
                return d
            },
            A = function() {
                var u = x.core,
                    d = u.bridge || {},
                    f = u._scrollers,
                    h = u._proxies;
                f.push.apply(f, P), h.push.apply(h, L), P = f, L = h, z = function(w, b) {
                    return d[w](b)
                }
            },
            q = function(u, d) {
                return ~L.indexOf(u) && L[L.indexOf(u) + 1][d]
            },
            J = function(u) {
                return !!~k.indexOf(u)
            },
            Z = function(u, d, f, h, m) {
                return u.addEventListener(d, f, {
                    passive: !h,
                    capture: !!m
                })
            },
            ee = function(u, d, f, h) {
                return u.removeEventListener(d, f, !!h)
            },
            xe = "scrollLeft",
            de = "scrollTop",
            ke = function() {
                return p && p.isPressed || P.cache++
            },
            be = function(u, d) {
                var f = function h(m) {
                    if (m || m === 0) {
                        E && (o.history.scrollRestoration = "manual");
                        var w = p && p.isPressed;
                        m = h.v = Math.round(m) || (p && p.iOS ? 1 : 0), u(m), h.cacheID = P.cache, w && z("ss", m)
                    } else(d || P.cache !== h.cacheID || z("ref")) && (h.cacheID = P.cache, h.v = u());
                    return h.v + h.offset
                };
                return f.offset = 0, u && f
            },
            he = {
                s: xe,
                p: "left",
                p2: "Left",
                os: "right",
                os2: "Right",
                d: "width",
                d2: "Width",
                a: "x",
                sc: be(function(v) {
                    return arguments.length ? o.scrollTo(v, ge.sc()) : o.pageXOffset || a[xe] || l[xe] || _[xe] || 0
                })
            },
            ge = {
                s: de,
                p: "top",
                p2: "Top",
                os: "bottom",
                os2: "Bottom",
                d: "height",
                d2: "Height",
                a: "y",
                op: he,
                sc: be(function(v) {
                    return arguments.length ? o.scrollTo(he.sc(), v) : o.pageYOffset || a[de] || l[de] || _[de] || 0
                })
            },
            Ae = function(u) {
                return n.utils.toArray(u)[0] || (typeof u == "string" && n.config().nullTargetWarn !== !1 ? console.warn("Element not found:", u) : null)
            },
            Tt = function(u, d) {
                var f = d.s,
                    h = d.sc;
                J(u) && (u = a.scrollingElement || l);
                var m = P.indexOf(u),
                    w = h === ge.sc ? 1 : 2;
                !~m && (m = P.push(u) - 1), P[m + w] || u.addEventListener("scroll", ke);
                var b = P[m + w],
                    B = b || (P[m + w] = be(q(u, f), !0) || (J(u) ? h : be(function(oe) {
                        return arguments.length ? u[f] = oe : u[f]
                    })));
                return B.target = u, b || (B.smooth = n.getProperty(u, "scrollBehavior") === "smooth"), B
            },
            Kt = function(u, d, f) {
                var h = u,
                    m = u,
                    w = I(),
                    b = w,
                    B = d || 50,
                    oe = Math.max(500, B * 3),
                    ie = function(Y, Ce) {
                        var Te = I();
                        Ce || Te - w > B ? (m = h, h = Y, b = w, w = Te) : f ? h += Y : h = m + (Y - m) / (Te - b) * (w - b)
                    },
                    G = function() {
                        m = h = f ? 0 : h, b = w = 0
                    },
                    N = function(Y) {
                        var Ce = b,
                            Te = m,
                            ne = I();
                        return (Y || Y === 0) && Y !== h && ie(Y), w === b || ne - b > oe ? 0 : (h + (f ? Te : -Te)) / ((f ? ne : w) - Ce) * 1e3
                    };
                return {
                    update: ie,
                    reset: G,
                    getVelocity: N
                }
            },
            Cr = function(u, d) {
                return d && !u._gsapAllow && u.preventDefault(), u.changedTouches ? u.changedTouches[0] : u
            },
            Bt = function(u) {
                var d = Math.max.apply(Math, u),
                    f = Math.min.apply(Math, u);
                return Math.abs(d) >= Math.abs(f) ? d : f
            },
            sr = function() {
                x = n.core.globals().ScrollTrigger, x && x.core && A()
            },
            ro = function(u) {
                return n = u || M(), n && typeof document < "u" && document.body && (o = window, a = document, l = a.documentElement, _ = a.body, k = [o, a, l, _], n.utils.clamp, O = n.core.context || function() {}, g = "onpointerenter" in _ ? "pointer" : "mouse", y = Ue.isTouch = o.matchMedia && o.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in o || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, S = Ue.eventTypes = ("ontouchstart" in l ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in l ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout(function() {
                    return E = 0
                }, 500), sr(), s = 1), s
            };
        he.op = ge, P.cache = 0;
        var Ue = function() {
            function v(d) {
                this.init(d)
            }
            var u = v.prototype;
            return u.init = function(f) {
                s || ro(n) || console.warn("Please gsap.registerPlugin(Observer)"), x || sr();
                var h = f.tolerance,
                    m = f.dragMinimum,
                    w = f.type,
                    b = f.target,
                    B = f.lineHeight,
                    oe = f.debounce,
                    ie = f.preventDefault,
                    G = f.onStop,
                    N = f.onStopDelay,
                    F = f.ignore,
                    Y = f.wheelSpeed,
                    Ce = f.event,
                    Te = f.onDragStart,
                    ne = f.onDragEnd,
                    rt = f.onDrag,
                    Ye = f.onPress,
                    ae = f.onRelease,
                    pt = f.onRight,
                    Oe = f.onLeft,
                    Q = f.onUp,
                    Mt = f.onDown,
                    er = f.onChangeX,
                    $ = f.onChangeY,
                    pe = f.onChange,
                    le = f.onToggleX,
                    ar = f.onToggleY,
                    it = f.onHover,
                    nt = f.onHoverEnd,
                    _e = f.onMove,
                    gt = f.ignoreCheck,
                    we = f.isNormalizer,
                    qe = f.onGestureStart,
                    T = f.onGestureEnd,
                    Xt = f.onWheel,
                    Er = f.onEnable,
                    Ar = f.onDisable,
                    Rr = f.onClick,
                    Fr = f.scrollSpeed,
                    Se = f.capture,
                    at = f.allowClicks,
                    mt = f.lockAxis,
                    qi = f.onLockAxis;
                this.target = b = Ae(b) || l, this.vars = f, F && (F = n.utils.toArray(F)), h = h || 1e-9, m = m || 0, Y = Y || 1, Fr = Fr || 1, w = w || "wheel,touch,pointer", oe = oe !== !1, B || (B = parseFloat(o.getComputedStyle(_).lineHeight) || 22);
                var Dt, Vt, fe, ut, Et, ur, yt, C = this,
                    yr = 0,
                    Me = 0,
                    zr = Tt(b, he),
                    Lr = Tt(b, ge),
                    xi = zr(),
                    vt = Lr(),
                    $i = ~w.indexOf("touch") && !~w.indexOf("pointer") && S[0] === "pointerdown",
                    Ir = J(b),
                    Xe = b.ownerDocument || a,
                    At = [0, 0, 0],
                    xt = [0, 0, 0],
                    Ki = 0,
                    bt = function() {
                        return Ki = I()
                    },
                    lr = function(V, R) {
                        return (C.event = V) && F && ~F.indexOf(V.target) || R && $i && V.pointerType !== "touch" || gt && gt(V, R)
                    },
                    Zi = function() {
                        C._vx.reset(), C._vy.reset(), Vt.pause(), G && G(C)
                    },
                    Br = function() {
                        var V = C.deltaX = Bt(At),
                            R = C.deltaY = Bt(xt),
                            U = Math.abs(V) >= h,
                            W = Math.abs(R) >= h;
                        pe && (U || W) && pe(C, V, R, At, xt), U && (pt && C.deltaX > 0 && pt(C), Oe && C.deltaX < 0 && Oe(C), er && er(C), le && C.deltaX < 0 != yr < 0 && le(C), yr = C.deltaX, At[0] = At[1] = At[2] = 0), W && (Mt && C.deltaY > 0 && Mt(C), Q && C.deltaY < 0 && Q(C), $ && $(C), ar && C.deltaY < 0 != Me < 0 && ar(C), Me = C.deltaY, xt[0] = xt[1] = xt[2] = 0), (ut || fe) && (_e && _e(C), fe && (rt(C), fe = !1), ut = !1), ur && !(ur = !1) && qi && qi(C), Et && (Xt(C), Et = !1), Dt = 0
                    },
                    bi = function(V, R, U) {
                        At[U] += V, xt[U] += R, C._vx.update(V), C._vy.update(R), oe ? Dt || (Dt = requestAnimationFrame(Br)) : Br()
                    },
                    ei = function(V, R) {
                        mt && !yt && (C.axis = yt = Math.abs(V) > Math.abs(R) ? "x" : "y", ur = !0), yt !== "y" && (At[2] += V, C._vx.update(V, !0)), yt !== "x" && (xt[2] += R, C._vy.update(R, !0)), oe ? Dt || (Dt = requestAnimationFrame(Br)) : Br()
                    },
                    ti = function(V) {
                        if (!lr(V, 1)) {
                            V = Cr(V, ie);
                            var R = V.clientX,
                                U = V.clientY,
                                W = R - C.x,
                                H = U - C.y,
                                Qe = C.isDragging;
                            C.x = R, C.y = U, (Qe || Math.abs(C.startX - R) >= m || Math.abs(C.startY - U) >= m) && (rt && (fe = !0), Qe || (C.isDragging = !0), ei(W, H), Qe || Te && Te(C))
                        }
                    },
                    ce = C.onPress = function(ue) {
                        lr(ue, 1) || (C.axis = yt = null, Vt.pause(), C.isPressed = !0, ue = Cr(ue), yr = Me = 0, C.startX = C.x = ue.clientX, C.startY = C.y = ue.clientY, C._vx.reset(), C._vy.reset(), Z(we ? b : Xe, S[1], ti, ie, !0), C.deltaX = C.deltaY = 0, Ye && Ye(C))
                    },
                    vr = function(V) {
                        if (!lr(V, 1)) {
                            ee(we ? b : Xe, S[1], ti, !0);
                            var R = !isNaN(C.y - C.startY),
                                U = C.isDragging && (Math.abs(C.x - C.startX) > 3 || Math.abs(C.y - C.startY) > 3),
                                W = Cr(V);
                            !U && R && (C._vx.reset(), C._vy.reset(), ie && at && n.delayedCall(.08, function() {
                                if (I() - Ki > 300 && !V.defaultPrevented) {
                                    if (V.target.click) V.target.click();
                                    else if (Xe.createEvent) {
                                        var H = Xe.createEvent("MouseEvents");
                                        H.initMouseEvent("click", !0, !0, o, 1, W.screenX, W.screenY, W.clientX, W.clientY, !1, !1, !1, !1, 0, null), V.target.dispatchEvent(H)
                                    }
                                }
                            })), C.isDragging = C.isGesturing = C.isPressed = !1, G && !we && Vt.restart(!0), ne && U && ne(C), ae && ae(C, U)
                        }
                    },
                    tr = function(V) {
                        return V.touches && V.touches.length > 1 && (C.isGesturing = !0) && qe(V, C.isDragging)
                    },
                    rr = function() {
                        return (C.isGesturing = !1) || T(C)
                    },
                    fr = function(V) {
                        if (!lr(V)) {
                            var R = zr(),
                                U = Lr();
                            bi((R - xi) * Fr, (U - vt) * Fr, 1), xi = R, vt = U, G && Vt.restart(!0)
                        }
                    },
                    cr = function(V) {
                        if (!lr(V)) {
                            V = Cr(V, ie), Xt && (Et = !0);
                            var R = (V.deltaMode === 1 ? B : V.deltaMode === 2 ? o.innerHeight : 1) * Y;
                            bi(V.deltaX * R, V.deltaY * R, 0), G && !we && Vt.restart(!0)
                        }
                    },
                    ri = function(V) {
                        if (!lr(V)) {
                            var R = V.clientX,
                                U = V.clientY,
                                W = R - C.x,
                                H = U - C.y;
                            C.x = R, C.y = U, ut = !0, (W || H) && ei(W, H)
                        }
                    },
                    Ti = function(V) {
                        C.event = V, it(C)
                    },
                    xr = function(V) {
                        C.event = V, nt(C)
                    },
                    Qi = function(V) {
                        return lr(V) || Cr(V, ie) && Rr(C)
                    };
                Vt = C._dc = n.delayedCall(N || .25, Zi).pause(), C.deltaX = C.deltaY = 0, C._vx = Kt(0, 50, !0), C._vy = Kt(0, 50, !0), C.scrollX = zr, C.scrollY = Lr, C.isDragging = C.isGesturing = C.isPressed = !1, O(this), C.enable = function(ue) {
                    return C.isEnabled || (Z(Ir ? Xe : b, "scroll", ke), w.indexOf("scroll") >= 0 && Z(Ir ? Xe : b, "scroll", fr, ie, Se), w.indexOf("wheel") >= 0 && Z(b, "wheel", cr, ie, Se), (w.indexOf("touch") >= 0 && y || w.indexOf("pointer") >= 0) && (Z(b, S[0], ce, ie, Se), Z(Xe, S[2], vr), Z(Xe, S[3], vr), at && Z(b, "click", bt, !1, !0), Rr && Z(b, "click", Qi), qe && Z(Xe, "gesturestart", tr), T && Z(Xe, "gestureend", rr), it && Z(b, g + "enter", Ti), nt && Z(b, g + "leave", xr), _e && Z(b, g + "move", ri)), C.isEnabled = !0, ue && ue.type && ce(ue), Er && Er(C)), C
                }, C.disable = function() {
                    C.isEnabled && (D.filter(function(ue) {
                        return ue !== C && J(ue.target)
                    }).length || ee(Ir ? Xe : b, "scroll", ke), C.isPressed && (C._vx.reset(), C._vy.reset(), ee(we ? b : Xe, S[1], ti, !0)), ee(Ir ? Xe : b, "scroll", fr, Se), ee(b, "wheel", cr, Se), ee(b, S[0], ce, Se), ee(Xe, S[2], vr), ee(Xe, S[3], vr), ee(b, "click", bt, !0), ee(b, "click", Qi), ee(Xe, "gesturestart", tr), ee(Xe, "gestureend", rr), ee(b, g + "enter", Ti), ee(b, g + "leave", xr), ee(b, g + "move", ri), C.isEnabled = C.isPressed = C.isDragging = !1, Ar && Ar(C))
                }, C.kill = C.revert = function() {
                    C.disable();
                    var ue = D.indexOf(C);
                    ue >= 0 && D.splice(ue, 1), p === C && (p = 0)
                }, D.push(C), we && J(b) && (p = C), C.enable(Ce)
            }, i(v, [{
                key: "velocityX",
                get: function() {
                    return this._vx.getVelocity()
                }
            }, {
                key: "velocityY",
                get: function() {
                    return this._vy.getVelocity()
                }
            }]), v
        }();
        Ue.version = "3.11.4", Ue.create = function(v) {
            return new Ue(v)
        }, Ue.register = ro, Ue.getAll = function() {
            return D.slice()
        }, Ue.getById = function(v) {
            return D.filter(function(u) {
                return u.vars.id === v
            })[0]
        }, M() && n.registerPlugin(Ue);
        /*!
         * ScrollTrigger 3.11.4
         * https://greensock.com
         *
         * @license Copyright 2008-2022, GreenSock. All rights reserved.
         * Subject to the terms at https://greensock.com/standard-license or for
         * Club GreenSock members, the agreement issued with that membership.
         * @author: Jack Doyle, jack@greensock.com
         */
        var X, _i, re, Pe, Zt, Re, io, dn, pn, di, gn, mn, ot, yn, Zn, ht, no, so, pi, oo, Qn, ao, Ct, uo, lo, fo, Or, jn, Jn, es, vn = 1,
            _t = Date.now,
            ts = _t(),
            Nt = 0,
            xn = 0,
            co = function() {
                return yn = 1
            },
            ho = function() {
                return yn = 0
            },
            or = function(u) {
                return u
            },
            Ii = function(u) {
                return Math.round(u * 1e5) / 1e5 || 0
            },
            _o = function() {
                return typeof window < "u"
            },
            po = function() {
                return X || _o() && (X = window.gsap) && X.registerPlugin && X
            },
            qr = function(u) {
                return !!~io.indexOf(u)
            },
            go = function(u) {
                return q(u, "getBoundingClientRect") || (qr(u) ? function() {
                    return Rn.width = re.innerWidth, Rn.height = re.innerHeight, Rn
                } : function() {
                    return mr(u)
                })
            },
            Za = function(u, d, f) {
                var h = f.d,
                    m = f.d2,
                    w = f.a;
                return (w = q(u, "getBoundingClientRect")) ? function() {
                    return w()[h]
                } : function() {
                    return (d ? re["inner" + m] : u["client" + m]) || 0
                }
            },
            Qa = function(u, d) {
                return !d || ~L.indexOf(u) ? go(u) : function() {
                    return Rn
                }
            },
            Mr = function(u, d) {
                var f = d.s,
                    h = d.d2,
                    m = d.d,
                    w = d.a;
                return (f = "scroll" + h) && (w = q(u, f)) ? w() - go(u)()[m] : qr(u) ? (Zt[f] || Re[f]) - (re["inner" + h] || Zt["client" + h] || Re["client" + h]) : u[f] - u["offset" + h]
            },
            bn = function(u, d) {
                for (var f = 0; f < pi.length; f += 3)(!d || ~d.indexOf(pi[f + 1])) && u(pi[f], pi[f + 1], pi[f + 2])
            },
            Qt = function(u) {
                return typeof u == "string"
            },
            dt = function(u) {
                return typeof u == "function"
            },
            Bi = function(u) {
                return typeof u == "number"
            },
            Tn = function(u) {
                return typeof u == "object"
            },
            Ni = function(u, d, f) {
                return u && u.progress(d ? 0 : 1) && f && u.pause()
            },
            rs = function(u, d) {
                if (u.enabled) {
                    var f = d(u);
                    f && f.totalTime && (u.callbackAnimation = f)
                }
            },
            gi = Math.abs,
            mo = "left",
            yo = "top",
            is = "right",
            ns = "bottom",
            $r = "width",
            Kr = "height",
            Yi = "Right",
            Xi = "Left",
            Vi = "Top",
            Ui = "Bottom",
            Ne = "padding",
            Yt = "margin",
            mi = "Width",
            ss = "Height",
            et = "px",
            jt = function(u) {
                return re.getComputedStyle(u)
            },
            ja = function(u) {
                var d = jt(u).position;
                u.style.position = d === "absolute" || d === "fixed" ? d : "relative"
            },
            vo = function(u, d) {
                for (var f in d) f in u || (u[f] = d[f]);
                return u
            },
            mr = function(u, d) {
                var f = d && jt(u)[Zn] !== "matrix(1, 0, 0, 1, 0, 0)" && X.to(u, {
                        x: 0,
                        y: 0,
                        xPercent: 0,
                        yPercent: 0,
                        rotation: 0,
                        rotationX: 0,
                        rotationY: 0,
                        scale: 1,
                        skewX: 0,
                        skewY: 0
                    }).progress(1),
                    h = u.getBoundingClientRect();
                return f && f.progress(0).kill(), h
            },
            os = function(u, d) {
                var f = d.d2;
                return u["offset" + f] || u["client" + f] || 0
            },
            xo = function(u) {
                var d = [],
                    f = u.labels,
                    h = u.duration(),
                    m;
                for (m in f) d.push(f[m] / h);
                return d
            },
            Ja = function(u) {
                return function(d) {
                    return X.utils.snap(xo(u), d)
                }
            },
            as = function(u) {
                var d = X.utils.snap(u),
                    f = Array.isArray(u) && u.slice(0).sort(function(h, m) {
                        return h - m
                    });
                return f ? function(h, m, w) {
                    w === void 0 && (w = .001);
                    var b;
                    if (!m) return d(h);
                    if (m > 0) {
                        for (h -= w, b = 0; b < f.length; b++)
                            if (f[b] >= h) return f[b];
                        return f[b - 1]
                    } else
                        for (b = f.length, h += w; b--;)
                            if (f[b] <= h) return f[b];
                    return f[0]
                } : function(h, m, w) {
                    w === void 0 && (w = .001);
                    var b = d(h);
                    return !m || Math.abs(b - h) < w || b - h < 0 == m < 0 ? b : d(m < 0 ? h - u : h + u)
                }
            },
            eu = function(u) {
                return function(d, f) {
                    return as(xo(u))(d, f.direction)
                }
            },
            wn = function(u, d, f, h) {
                return f.split(",").forEach(function(m) {
                    return u(d, m, h)
                })
            },
            tt = function(u, d, f, h, m) {
                return u.addEventListener(d, f, {
                    passive: !h,
                    capture: !!m
                })
            },
            Ze = function(u, d, f, h) {
                return u.removeEventListener(d, f, !!h)
            },
            Sn = function(u, d, f) {
                return f && f.wheelHandler && u(d, "wheel", f)
            },
            bo = {
                startColor: "green",
                endColor: "red",
                indent: 0,
                fontSize: "16px",
                fontWeight: "normal"
            },
            Pn = {
                toggleActions: "play",
                anticipatePin: 0
            },
            kn = {
                top: 0,
                left: 0,
                center: .5,
                bottom: 1,
                right: 1
            },
            Cn = function(u, d) {
                if (Qt(u)) {
                    var f = u.indexOf("="),
                        h = ~f ? +(u.charAt(f - 1) + 1) * parseFloat(u.substr(f + 1)) : 0;
                    ~f && (u.indexOf("%") > f && (h *= d / 100), u = u.substr(0, f - 1)), u = h + (u in kn ? kn[u] * d : ~u.indexOf("%") ? parseFloat(u) * d / 100 : parseFloat(u) || 0)
                }
                return u
            },
            On = function(u, d, f, h, m, w, b, B) {
                var oe = m.startColor,
                    ie = m.endColor,
                    G = m.fontSize,
                    N = m.indent,
                    F = m.fontWeight,
                    Y = Pe.createElement("div"),
                    Ce = qr(f) || q(f, "pinType") === "fixed",
                    Te = u.indexOf("scroller") !== -1,
                    ne = Ce ? Re : f,
                    rt = u.indexOf("start") !== -1,
                    Ye = rt ? oe : ie,
                    ae = "border-color:" + Ye + ";font-size:" + G + ";color:" + Ye + ";font-weight:" + F + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
                return ae += "position:" + ((Te || B) && Ce ? "fixed;" : "absolute;"), (Te || B || !Ce) && (ae += (h === ge ? is : ns) + ":" + (w + parseFloat(N)) + "px;"), b && (ae += "box-sizing:border-box;text-align:left;width:" + b.offsetWidth + "px;"), Y._isStart = rt, Y.setAttribute("class", "gsap-marker-" + u + (d ? " marker-" + d : "")), Y.style.cssText = ae, Y.innerText = d || d === 0 ? u + "-" + d : u, ne.children[0] ? ne.insertBefore(Y, ne.children[0]) : ne.appendChild(Y), Y._offset = Y["offset" + h.op.d2], Mn(Y, 0, h, rt), Y
            },
            Mn = function(u, d, f, h) {
                var m = {
                        display: "block"
                    },
                    w = f[h ? "os2" : "p2"],
                    b = f[h ? "p2" : "os2"];
                u._isFlipped = h, m[f.a + "Percent"] = h ? -100 : 0, m[f.a] = h ? "1px" : 0, m["border" + w + mi] = 1, m["border" + b + mi] = 0, m[f.p] = d + "px", X.set(u, m)
            },
            K = [],
            us = {},
            Wi, To = function() {
                return _t() - Nt > 34 && (Wi || (Wi = requestAnimationFrame(Dr)))
            },
            yi = function() {
                (!Ct || !Ct.isPressed || Ct.startX > Re.clientWidth) && (P.cache++, Ct ? Wi || (Wi = requestAnimationFrame(Dr)) : Dr(), Nt || Qr("scrollStart"), Nt = _t())
            },
            ls = function() {
                fo = re.innerWidth, lo = re.innerHeight
            },
            Gi = function() {
                P.cache++, !ot && !ao && !Pe.fullscreenElement && !Pe.webkitFullscreenElement && (!uo || fo !== re.innerWidth || Math.abs(re.innerHeight - lo) > re.innerHeight * .25) && dn.restart(!0)
            },
            Zr = {},
            tu = [],
            wo = function v() {
                return Ze(te, "scrollEnd", v) || Jr(!0)
            },
            Qr = function(u) {
                return Zr[u] && Zr[u].map(function(d) {
                    return d()
                }) || tu
            },
            Ot = [],
            So = function(u) {
                for (var d = 0; d < Ot.length; d += 5)(!u || Ot[d + 4] && Ot[d + 4].query === u) && (Ot[d].style.cssText = Ot[d + 1], Ot[d].getBBox && Ot[d].setAttribute("transform", Ot[d + 2] || ""), Ot[d + 3].uncache = 1)
            },
            fs = function(u, d) {
                var f;
                for (ht = 0; ht < K.length; ht++) f = K[ht], f && (!d || f._ctx === d) && (u ? f.kill(1) : f.revert(!0, !0));
                d && So(d), d || Qr("revert")
            },
            Po = function(u, d) {
                P.cache++, (d || !Jt) && P.forEach(function(f) {
                    return dt(f) && f.cacheID++ && (f.rec = 0)
                }), Qt(u) && (re.history.scrollRestoration = Jn = u)
            },
            Jt, jr = 0,
            ko, ru = function() {
                if (ko !== jr) {
                    var u = ko = jr;
                    requestAnimationFrame(function() {
                        return u === jr && Jr(!0)
                    })
                }
            },
            Jr = function(u, d) {
                if (Nt && !u) {
                    tt(te, "scrollEnd", wo);
                    return
                }
                Jt = te.isRefreshing = !0, P.forEach(function(h) {
                    return dt(h) && h.cacheID++ && (h.rec = h())
                });
                var f = Qr("refreshInit");
                oo && te.sort(), d || fs(), P.forEach(function(h) {
                    dt(h) && (h.smooth && (h.target.style.scrollBehavior = "auto"), h(0))
                }), K.slice(0).forEach(function(h) {
                    return h.refresh()
                }), K.forEach(function(h, m) {
                    if (h._subPinOffset && h.pin) {
                        var w = h.vars.horizontal ? "offsetWidth" : "offsetHeight",
                            b = h.pin[w];
                        h.revert(!0, 1), h.adjustPinSpacing(h.pin[w] - b), h.revert(!1, 1)
                    }
                }), K.forEach(function(h) {
                    return h.vars.end === "max" && h.setPositions(h.start, Math.max(h.start + 1, Mr(h.scroller, h._dir)))
                }), f.forEach(function(h) {
                    return h && h.render && h.render(-1)
                }), P.forEach(function(h) {
                    dt(h) && (h.smooth && requestAnimationFrame(function() {
                        return h.target.style.scrollBehavior = "smooth"
                    }), h.rec && h(h.rec))
                }), Po(Jn, 1), dn.pause(), jr++, Dr(2), K.forEach(function(h) {
                    return dt(h.vars.onRefresh) && h.vars.onRefresh(h)
                }), Jt = te.isRefreshing = !1, Qr("refresh")
            },
            Co = 0,
            Dn = 1,
            Hi, Dr = function(u) {
                if (!Jt || u === 2) {
                    te.isUpdating = !0, Hi && Hi.update(0);
                    var d = K.length,
                        f = _t(),
                        h = f - ts >= 50,
                        m = d && K[0].scroll();
                    if (Dn = Co > m ? -1 : 1, Co = m, h && (Nt && !yn && f - Nt > 200 && (Nt = 0, Qr("scrollEnd")), gn = ts, ts = f), Dn < 0) {
                        for (ht = d; ht-- > 0;) K[ht] && K[ht].update(0, h);
                        Dn = 1
                    } else
                        for (ht = 0; ht < d; ht++) K[ht] && K[ht].update(0, h);
                    te.isUpdating = !1
                }
                Wi = 0
            },
            cs = [mo, yo, ns, is, Yt + Ui, Yt + Yi, Yt + Vi, Yt + Xi, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
            En = cs.concat([$r, Kr, "boxSizing", "max" + mi, "max" + ss, "position", Yt, Ne, Ne + Vi, Ne + Yi, Ne + Ui, Ne + Xi]),
            iu = function(u, d, f) {
                vi(f);
                var h = u._gsap;
                if (h.spacerIsNative) vi(h.spacerState);
                else if (u._gsap.swappedIn) {
                    var m = d.parentNode;
                    m && (m.insertBefore(u, d), m.removeChild(d))
                }
                u._gsap.swappedIn = !1
            },
            hs = function(u, d, f, h) {
                if (!u._gsap.swappedIn) {
                    for (var m = cs.length, w = d.style, b = u.style, B; m--;) B = cs[m], w[B] = f[B];
                    w.position = f.position === "absolute" ? "absolute" : "relative", f.display === "inline" && (w.display = "inline-block"), b[ns] = b[is] = "auto", w.flexBasis = f.flexBasis || "auto", w.overflow = "visible", w.boxSizing = "border-box", w[$r] = os(u, he) + et, w[Kr] = os(u, ge) + et, w[Ne] = b[Yt] = b[yo] = b[mo] = "0", vi(h), b[$r] = b["max" + mi] = f[$r], b[Kr] = b["max" + ss] = f[Kr], b[Ne] = f[Ne], u.parentNode !== d && (u.parentNode.insertBefore(d, u), d.appendChild(u)), u._gsap.swappedIn = !0
                }
            },
            nu = /([A-Z])/g,
            vi = function(u) {
                if (u) {
                    var d = u.t.style,
                        f = u.length,
                        h = 0,
                        m, w;
                    for ((u.t._gsap || X.core.getCache(u.t)).uncache = 1; h < f; h += 2) w = u[h + 1], m = u[h], w ? d[m] = w : d[m] && d.removeProperty(m.replace(nu, "-$1").toLowerCase())
                }
            },
            An = function(u) {
                for (var d = En.length, f = u.style, h = [], m = 0; m < d; m++) h.push(En[m], f[En[m]]);
                return h.t = u, h
            },
            su = function(u, d, f) {
                for (var h = [], m = u.length, w = f ? 8 : 0, b; w < m; w += 2) b = u[w], h.push(b, b in d ? d[b] : u[w + 1]);
                return h.t = u.t, h
            },
            Rn = {
                left: 0,
                top: 0
            },
            Oo = function(u, d, f, h, m, w, b, B, oe, ie, G, N, F) {
                dt(u) && (u = u(B)), Qt(u) && u.substr(0, 3) === "max" && (u = N + (u.charAt(4) === "=" ? Cn("0" + u.substr(3), f) : 0));
                var Y = F ? F.time() : 0,
                    Ce, Te, ne;
                if (F && F.seek(0), Bi(u)) b && Mn(b, f, h, !0);
                else {
                    dt(d) && (d = d(B));
                    var rt = (u || "0").split(" "),
                        Ye, ae, pt, Oe;
                    ne = Ae(d) || Re, Ye = mr(ne) || {}, (!Ye || !Ye.left && !Ye.top) && jt(ne).display === "none" && (Oe = ne.style.display, ne.style.display = "block", Ye = mr(ne), Oe ? ne.style.display = Oe : ne.style.removeProperty("display")), ae = Cn(rt[0], Ye[h.d]), pt = Cn(rt[1] || "0", f), u = Ye[h.p] - oe[h.p] - ie + ae + m - pt, b && Mn(b, pt, h, f - pt < 20 || b._isStart && pt > 20), f -= f - pt
                }
                if (w) {
                    var Q = u + f,
                        Mt = w._isStart;
                    Ce = "scroll" + h.d2, Mn(w, Q, h, Mt && Q > 20 || !Mt && (G ? Math.max(Re[Ce], Zt[Ce]) : w.parentNode[Ce]) <= Q + 1), G && (oe = mr(b), G && (w.style[h.op.p] = oe[h.op.p] - h.op.m - w._offset + et))
                }
                return F && ne && (Ce = mr(ne), F.seek(N), Te = mr(ne), F._caScrollDist = Ce[h.p] - Te[h.p], u = u / F._caScrollDist * N), F && F.seek(Y), F ? u : Math.round(u)
            },
            ou = /(webkit|moz|length|cssText|inset)/i,
            Mo = function(u, d, f, h) {
                if (u.parentNode !== d) {
                    var m = u.style,
                        w, b;
                    if (d === Re) {
                        u._stOrig = m.cssText, b = jt(u);
                        for (w in b) !+w && !ou.test(w) && b[w] && typeof m[w] == "string" && w !== "0" && (m[w] = b[w]);
                        m.top = f, m.left = h
                    } else m.cssText = u._stOrig;
                    X.core.getCache(u).uncache = 1, d.appendChild(u)
                }
            },
            Do = function(u, d) {
                var f = Tt(u, d),
                    h = "_scroll" + d.p2,
                    m, w, b = function B(oe, ie, G, N, F) {
                        var Y = B.tween,
                            Ce = ie.onComplete,
                            Te = {};
                        return G = G || f(), F = N && F || 0, N = N || oe - G, Y && Y.kill(), m = Math.round(G), ie[h] = oe, ie.modifiers = Te, Te[h] = function(ne) {
                            return ne = Math.round(f()), ne !== m && ne !== w && Math.abs(ne - m) > 3 && Math.abs(ne - w) > 3 ? (Y.kill(), B.tween = 0) : ne = G + N * Y.ratio + F * Y.ratio * Y.ratio, w = m, m = Math.round(ne)
                        }, ie.onUpdate = function() {
                            P.cache++, Dr()
                        }, ie.onComplete = function() {
                            B.tween = 0, Ce && Ce.call(Y)
                        }, Y = B.tween = X.to(u, ie), Y
                    };
                return u[h] = f, f.wheelHandler = function() {
                    return b.tween && b.tween.kill() && (b.tween = 0)
                }, tt(u, "wheel", f.wheelHandler), b
            },
            te = function() {
                function v(d, f) {
                    _i || v.register(X) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), this.init(d, f)
                }
                var u = v.prototype;
                return u.init = function(f, h) {
                    if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !xn) {
                        this.update = this.refresh = this.kill = or;
                        return
                    }
                    f = vo(Qt(f) || Bi(f) || f.nodeType ? {
                        trigger: f
                    } : f, Pn);
                    var m = f,
                        w = m.onUpdate,
                        b = m.toggleClass,
                        B = m.id,
                        oe = m.onToggle,
                        ie = m.onRefresh,
                        G = m.scrub,
                        N = m.trigger,
                        F = m.pin,
                        Y = m.pinSpacing,
                        Ce = m.invalidateOnRefresh,
                        Te = m.anticipatePin,
                        ne = m.onScrubComplete,
                        rt = m.onSnapComplete,
                        Ye = m.once,
                        ae = m.snap,
                        pt = m.pinReparent,
                        Oe = m.pinSpacer,
                        Q = m.containerAnimation,
                        Mt = m.fastScrollEnd,
                        er = m.preventOverlaps,
                        $ = f.horizontal || f.containerAnimation && f.horizontal !== !1 ? he : ge,
                        pe = !G && G !== 0,
                        le = Ae(f.scroller || re),
                        ar = X.core.getCache(le),
                        it = qr(le),
                        nt = ("pinType" in f ? f.pinType : q(le, "pinType") || it && "fixed") === "fixed",
                        _e = [f.onEnter, f.onLeave, f.onEnterBack, f.onLeaveBack],
                        gt = pe && f.toggleActions.split(" "),
                        we = "markers" in f ? f.markers : Pn.markers,
                        qe = it ? 0 : parseFloat(jt(le)["border" + $.p2 + mi]) || 0,
                        T = this,
                        Xt = f.onRefreshInit && function() {
                            return f.onRefreshInit(T)
                        },
                        Er = Za(le, it, $),
                        Ar = Qa(le, it),
                        Rr = 0,
                        Fr = 0,
                        Se = Tt(le, $),
                        at, mt, qi, Dt, Vt, fe, ut, Et, ur, yt, C, yr, Me, zr, Lr, xi, vt, $i, Ir, Xe, At, xt, Ki, bt, lr, Zi, Br, bi, ei, ti, ce, vr, tr, rr, fr, cr, ri, Ti, xr;
                    if (jn(T), T._dir = $, Te *= 45, T.scroller = le, T.scroll = Q ? Q.time.bind(Q) : Se, Dt = Se(), T.vars = f, h = h || f.animation, "refreshPriority" in f && (oo = 1, f.refreshPriority === -9999 && (Hi = T)), ar.tweenScroll = ar.tweenScroll || {
                            top: Do(le, ge),
                            left: Do(le, he)
                        }, T.tweenTo = at = ar.tweenScroll[$.p], T.scrubDuration = function(R) {
                            vr = Bi(R) && R, vr ? ce ? ce.duration(R) : ce = X.to(h, {
                                ease: "expo",
                                totalProgress: "+=0.001",
                                duration: vr,
                                paused: !0,
                                onComplete: function() {
                                    return ne && ne(T)
                                }
                            }) : (ce && ce.progress(1).kill(), ce = 0)
                        }, h && (h.vars.lazy = !1, h._initted || h.vars.immediateRender !== !1 && f.immediateRender !== !1 && h.duration() && h.render(0, !0, !0), T.animation = h.pause(), h.scrollTrigger = T, T.scrubDuration(G), ei = 0, B || (B = h.vars.id)), K.push(T), ae && ((!Tn(ae) || ae.push) && (ae = {
                            snapTo: ae
                        }), "scrollBehavior" in Re.style && X.set(it ? [Re, Zt] : le, {
                            scrollBehavior: "auto"
                        }), P.forEach(function(R) {
                            return dt(R) && R.target === (it ? Pe.scrollingElement || Zt : le) && (R.smooth = !1)
                        }), qi = dt(ae.snapTo) ? ae.snapTo : ae.snapTo === "labels" ? Ja(h) : ae.snapTo === "labelsDirectional" ? eu(h) : ae.directional !== !1 ? function(R, U) {
                            return as(ae.snapTo)(R, _t() - Fr < 500 ? 0 : U.direction)
                        } : X.utils.snap(ae.snapTo), tr = ae.duration || {
                            min: .1,
                            max: 2
                        }, tr = Tn(tr) ? di(tr.min, tr.max) : di(tr, tr), rr = X.delayedCall(ae.delay || vr / 2 || .1, function() {
                            var R = Se(),
                                U = _t() - Fr < 500,
                                W = at.tween;
                            if ((U || Math.abs(T.getVelocity()) < 10) && !W && !yn && Rr !== R) {
                                var H = (R - fe) / Me,
                                    Qe = h && !pe ? h.totalProgress() : H,
                                    j = U ? 0 : (Qe - ti) / (_t() - gn) * 1e3 || 0,
                                    We = X.utils.clamp(-H, 1 - H, gi(j / 2) * j / .185),
                                    Fe = H + (ae.inertia === !1 ? 0 : We),
                                    hr = di(0, 1, qi(Fe, T)),
                                    ve = Math.round(fe + hr * Me),
                                    je = ae,
                                    ir = je.onStart,
                                    ze = je.onInterrupt,
                                    Le = je.onComplete;
                                if (R <= ut && R >= fe && ve !== R) {
                                    if (W && !W._initted && W.data <= gi(ve - R)) return;
                                    ae.inertia === !1 && (We = hr - H), at(ve, {
                                        duration: tr(gi(Math.max(gi(Fe - Qe), gi(hr - Qe)) * .185 / j / .05 || 0)),
                                        ease: ae.ease || "power3",
                                        data: gi(ve - R),
                                        onInterrupt: function() {
                                            return rr.restart(!0) && ze && ze(T)
                                        },
                                        onComplete: function() {
                                            T.update(), Rr = Se(), ei = ti = h && !pe ? h.totalProgress() : T.progress, rt && rt(T), Le && Le(T)
                                        }
                                    }, R, We * Me, ve - R - We * Me), ir && ir(T, at.tween)
                                }
                            } else T.isActive && Rr !== R && rr.restart(!0)
                        }).pause()), B && (us[B] = T), N = T.trigger = Ae(N || F), xr = N && N._gsap && N._gsap.stRevert, xr && (xr = xr(T)), F = F === !0 ? N : Ae(F), Qt(b) && (b = {
                            targets: N,
                            className: b
                        }), F && (Y === !1 || Y === Yt || (Y = !Y && F.parentNode && F.parentNode.style && jt(F.parentNode).display === "flex" ? !1 : Ne), T.pin = F, mt = X.core.getCache(F), mt.spacer ? zr = mt.pinState : (Oe && (Oe = Ae(Oe), Oe && !Oe.nodeType && (Oe = Oe.current || Oe.nativeElement), mt.spacerIsNative = !!Oe, Oe && (mt.spacerState = An(Oe))), mt.spacer = vt = Oe || Pe.createElement("div"), vt.classList.add("pin-spacer"), B && vt.classList.add("pin-spacer-" + B), mt.pinState = zr = An(F)), f.force3D !== !1 && X.set(F, {
                            force3D: !0
                        }), T.spacer = vt = mt.spacer, bi = jt(F), Ki = bi[Y + $.os2], Ir = X.getProperty(F), Xe = X.quickSetter(F, $.a, et), hs(F, vt, bi), xi = An(F)), we) {
                        yr = Tn(we) ? vo(we, bo) : bo, yt = On("scroller-start", B, le, $, yr, 0), C = On("scroller-end", B, le, $, yr, 0, yt), $i = yt["offset" + $.op.d2];
                        var Qi = Ae(q(le, "content") || le);
                        Et = this.markerStart = On("start", B, Qi, $, yr, $i, 0, Q), ur = this.markerEnd = On("end", B, Qi, $, yr, $i, 0, Q), Q && (Ti = X.quickSetter([Et, ur], $.a, et)), !nt && !(L.length && q(le, "fixedMarkers") === !0) && (ja(it ? Re : le), X.set([yt, C], {
                            force3D: !0
                        }), lr = X.quickSetter(yt, $.a, et), Br = X.quickSetter(C, $.a, et))
                    }
                    if (Q) {
                        var ue = Q.vars.onUpdate,
                            V = Q.vars.onUpdateParams;
                        Q.eventCallback("onUpdate", function() {
                            T.update(0, 0, 1), ue && ue.apply(V || [])
                        })
                    }
                    T.previous = function() {
                        return K[K.indexOf(T) - 1]
                    }, T.next = function() {
                        return K[K.indexOf(T) + 1]
                    }, T.revert = function(R, U) {
                        if (!U) return T.kill(!0);
                        var W = R !== !1 || !T.enabled,
                            H = ot;
                        W !== T.isReverted && (W && (cr = Math.max(Se(), T.scroll.rec || 0), fr = T.progress, ri = h && h.progress()), Et && [Et, ur, yt, C].forEach(function(Qe) {
                            return Qe.style.display = W ? "none" : "block"
                        }), W && (ot = 1, T.update(W)), F && (!pt || !T.isActive) && (W ? iu(F, vt, zr) : hs(F, vt, jt(F), bt)), W || T.update(W), ot = H, T.isReverted = W)
                    }, T.refresh = function(R, U) {
                        if (!((ot || !T.enabled) && !U)) {
                            if (F && R && Nt) {
                                tt(v, "scrollEnd", wo);
                                return
                            }!Jt && Xt && Xt(T), ot = 1, Fr = _t(), at.tween && (at.tween.kill(), at.tween = 0), ce && ce.pause(), Ce && h && h.revert({
                                kill: !1
                            }).invalidate(), T.isReverted || T.revert(!0, !0), T._subPinOffset = !1;
                            for (var W = Er(), H = Ar(), Qe = Q ? Q.duration() : Mr(le, $), j = 0, We = 0, Fe = f.end, hr = f.endTrigger || N, ve = f.start || (f.start === 0 || !N ? 0 : F ? "0 0" : "0 100%"), je = T.pinnedContainer = f.pinnedContainer && Ae(f.pinnedContainer), ir = N && Math.max(0, K.indexOf(T)) || 0, ze = ir, Le, Ge, wi, ii, $e, Ie, br, ds, zo, ji, _r; ze--;) Ie = K[ze], Ie.end || Ie.refresh(0, 1) || (ot = 1), br = Ie.pin, br && (br === N || br === F) && !Ie.isReverted && (ji || (ji = []), ji.unshift(Ie), Ie.revert(!0, !0)), Ie !== K[ze] && (ir--, ze--);
                            for (dt(ve) && (ve = ve(T)), fe = Oo(ve, N, W, $, Se(), Et, yt, T, H, qe, nt, Qe, Q) || (F ? -.001 : 0), dt(Fe) && (Fe = Fe(T)), Qt(Fe) && !Fe.indexOf("+=") && (~Fe.indexOf(" ") ? Fe = (Qt(ve) ? ve.split(" ")[0] : "") + Fe : (j = Cn(Fe.substr(2), W), Fe = Qt(ve) ? ve : fe + j, hr = N)), ut = Math.max(fe, Oo(Fe || (hr ? "100% 0" : Qe), hr, W, $, Se() + j, ur, C, T, H, qe, nt, Qe, Q)) || -.001, Me = ut - fe || (fe -= .01) && .001, j = 0, ze = ir; ze--;) Ie = K[ze], br = Ie.pin, br && Ie.start - Ie._pinPush <= fe && !Q && Ie.end > 0 && (Le = Ie.end - Ie.start, (br === N && Ie.start - Ie._pinPush < fe || br === je) && !Bi(ve) && (j += Le * (1 - Ie.progress)), br === F && (We += Le));
                            if (fe += j, ut += j, T._pinPush = We, Et && j && (Le = {}, Le[$.a] = "+=" + j, je && (Le[$.p] = "-=" + Se()), X.set([Et, ur], Le)), F) Le = jt(F), ii = $ === ge, wi = Se(), At = parseFloat(Ir($.a)) + We, !Qe && ut > 1 && (_r = (it ? Pe.scrollingElement || Zt : le).style, _r = {
                                style: _r,
                                value: _r["overflow" + $.a.toUpperCase()]
                            }, _r["overflow" + $.a.toUpperCase()] = "scroll"), hs(F, vt, Le), xi = An(F), Ge = mr(F, !0), ds = nt && Tt(le, ii ? he : ge)(), Y && (bt = [Y + $.os2, Me + We + et], bt.t = vt, ze = Y === Ne ? os(F, $) + Me + We : 0, ze && bt.push($.d, ze + et), vi(bt), je && K.forEach(function(Ji) {
                                Ji.pin === je && Ji.vars.pinSpacing !== !1 && (Ji._subPinOffset = !0)
                            }), nt && Se(cr)), nt && ($e = {
                                top: Ge.top + (ii ? wi - fe : ds) + et,
                                left: Ge.left + (ii ? ds : wi - fe) + et,
                                boxSizing: "border-box",
                                position: "fixed"
                            }, $e[$r] = $e["max" + mi] = Math.ceil(Ge.width) + et, $e[Kr] = $e["max" + ss] = Math.ceil(Ge.height) + et, $e[Yt] = $e[Yt + Vi] = $e[Yt + Yi] = $e[Yt + Ui] = $e[Yt + Xi] = "0", $e[Ne] = Le[Ne], $e[Ne + Vi] = Le[Ne + Vi], $e[Ne + Yi] = Le[Ne + Yi], $e[Ne + Ui] = Le[Ne + Ui], $e[Ne + Xi] = Le[Ne + Xi], Lr = su(zr, $e, pt), Jt && Se(0)), h ? (zo = h._initted, Qn(1), h.render(h.duration(), !0, !0), xt = Ir($.a) - At + Me + We, Zi = Math.abs(Me - xt) > 1, nt && Zi && Lr.splice(Lr.length - 2, 2), h.render(0, !0, !0), zo || h.invalidate(!0), h.parent || h.totalTime(h.totalTime()), Qn(0)) : xt = Me, _r && (_r.value ? _r.style["overflow" + $.a.toUpperCase()] = _r.value : _r.style.removeProperty("overflow-" + $.a));
                            else if (N && Se() && !Q)
                                for (Ge = N.parentNode; Ge && Ge !== Re;) Ge._pinOffset && (fe -= Ge._pinOffset, ut -= Ge._pinOffset), Ge = Ge.parentNode;
                            ji && ji.forEach(function(Ji) {
                                return Ji.revert(!1, !0)
                            }), T.start = fe, T.end = ut, Dt = Vt = Jt ? cr : Se(), !Q && !Jt && (Dt < cr && Se(cr), T.scroll.rec = 0), T.revert(!1, !0), rr && (Rr = -1, T.isActive && Se(fe + Me * fr), rr.restart(!0)), ot = 0, h && pe && (h._initted || ri) && h.progress() !== ri && h.progress(ri, !0).render(h.time(), !0, !0), (fr !== T.progress || Q) && (h && !pe && h.totalProgress(fr, !0), T.progress = (Dt - fe) / Me === fr ? 0 : fr), F && Y && (vt._pinOffset = Math.round(T.progress * xt)), ie && !Jt && ie(T)
                        }
                    }, T.getVelocity = function() {
                        return (Se() - Vt) / (_t() - gn) * 1e3 || 0
                    }, T.endAnimation = function() {
                        Ni(T.callbackAnimation), h && (ce ? ce.progress(1) : h.paused() ? pe || Ni(h, T.direction < 0, 1) : Ni(h, h.reversed()))
                    }, T.labelToScroll = function(R) {
                        return h && h.labels && (fe || T.refresh() || fe) + h.labels[R] / h.duration() * Me || 0
                    }, T.getTrailing = function(R) {
                        var U = K.indexOf(T),
                            W = T.direction > 0 ? K.slice(0, U).reverse() : K.slice(U + 1);
                        return (Qt(R) ? W.filter(function(H) {
                            return H.vars.preventOverlaps === R
                        }) : W).filter(function(H) {
                            return T.direction > 0 ? H.end <= fe : H.start >= ut
                        })
                    }, T.update = function(R, U, W) {
                        if (!(Q && !W && !R)) {
                            var H = Jt ? cr : T.scroll(),
                                Qe = R ? 0 : (H - fe) / Me,
                                j = Qe < 0 ? 0 : Qe > 1 ? 1 : Qe || 0,
                                We = T.progress,
                                Fe, hr, ve, je, ir, ze, Le, Ge;
                            if (U && (Vt = Dt, Dt = Q ? Se() : H, ae && (ti = ei, ei = h && !pe ? h.totalProgress() : j)), Te && !j && F && !ot && !vn && Nt && fe < H + (H - Vt) / (_t() - gn) * Te && (j = 1e-4), j !== We && T.enabled) {
                                if (Fe = T.isActive = !!j && j < 1, hr = !!We && We < 1, ze = Fe !== hr, ir = ze || !!j != !!We, T.direction = j > We ? 1 : -1, T.progress = j, ir && !ot && (ve = j && !We ? 0 : j === 1 ? 1 : We === 1 ? 2 : 3, pe && (je = !ze && gt[ve + 1] !== "none" && gt[ve + 1] || gt[ve], Ge = h && (je === "complete" || je === "reset" || je in h))), er && (ze || Ge) && (Ge || G || !h) && (dt(er) ? er(T) : T.getTrailing(er).forEach(function(Ie) {
                                        return Ie.endAnimation()
                                    })), pe || (ce && !ot && !vn ? (ce._dp._time - ce._start !== ce._time && ce.render(ce._dp._time - ce._start), ce.resetTo ? ce.resetTo("totalProgress", j, h._tTime / h._tDur) : (ce.vars.totalProgress = j, ce.invalidate().restart())) : h && h.totalProgress(j, !!ot)), F) {
                                    if (R && Y && (vt.style[Y + $.os2] = Ki), !nt) Xe(Ii(At + xt * j));
                                    else if (ir) {
                                        if (Le = !R && j > We && ut + 1 > H && H + 1 >= Mr(le, $), pt)
                                            if (!R && (Fe || Le)) {
                                                var wi = mr(F, !0),
                                                    ii = H - fe;
                                                Mo(F, Re, wi.top + ($ === ge ? ii : 0) + et, wi.left + ($ === ge ? 0 : ii) + et)
                                            } else Mo(F, vt);
                                        vi(Fe || Le ? Lr : xi), Zi && j < 1 && Fe || Xe(At + (j === 1 && !Le ? xt : 0))
                                    }
                                }
                                ae && !at.tween && !ot && !vn && rr.restart(!0), b && (ze || Ye && j && (j < 1 || !es)) && pn(b.targets).forEach(function(Ie) {
                                    return Ie.classList[Fe || Ye ? "add" : "remove"](b.className)
                                }), w && !pe && !R && w(T), ir && !ot ? (pe && (Ge && (je === "complete" ? h.pause().totalProgress(1) : je === "reset" ? h.restart(!0).pause() : je === "restart" ? h.restart(!0) : h[je]()), w && w(T)), (ze || !es) && (oe && ze && rs(T, oe), _e[ve] && rs(T, _e[ve]), Ye && (j === 1 ? T.kill(!1, 1) : _e[ve] = 0), ze || (ve = j === 1 ? 1 : 3, _e[ve] && rs(T, _e[ve]))), Mt && !Fe && Math.abs(T.getVelocity()) > (Bi(Mt) ? Mt : 2500) && (Ni(T.callbackAnimation), ce ? ce.progress(1) : Ni(h, je === "reverse" ? 1 : !j, 1))) : pe && w && !ot && w(T)
                            }
                            if (Br) {
                                var $e = Q ? H / Q.duration() * (Q._caScrollDist || 0) : H;
                                lr($e + (yt._isFlipped ? 1 : 0)), Br($e)
                            }
                            Ti && Ti(-H / Q.duration() * (Q._caScrollDist || 0))
                        }
                    }, T.enable = function(R, U) {
                        T.enabled || (T.enabled = !0, tt(le, "resize", Gi), tt(it ? Pe : le, "scroll", yi), Xt && tt(v, "refreshInit", Xt), R !== !1 && (T.progress = fr = 0, Dt = Vt = Rr = Se()), U !== !1 && T.refresh())
                    }, T.getTween = function(R) {
                        return R && at ? at.tween : ce
                    }, T.setPositions = function(R, U) {
                        F && (At += R - fe, xt += U - R - Me, Y === Ne && T.adjustPinSpacing(U - R - Me)), T.start = fe = R, T.end = ut = U, Me = U - R, T.update()
                    }, T.adjustPinSpacing = function(R) {
                        if (bt) {
                            var U = bt.indexOf($.d) + 1;
                            bt[U] = parseFloat(bt[U]) + R + et, bt[1] = parseFloat(bt[1]) + R + et, vi(bt)
                        }
                    }, T.disable = function(R, U) {
                        if (T.enabled && (R !== !1 && T.revert(!0, !0), T.enabled = T.isActive = !1, U || ce && ce.pause(), cr = 0, mt && (mt.uncache = 1), Xt && Ze(v, "refreshInit", Xt), rr && (rr.pause(), at.tween && at.tween.kill() && (at.tween = 0)), !it)) {
                            for (var W = K.length; W--;)
                                if (K[W].scroller === le && K[W] !== T) return;
                            Ze(le, "resize", Gi), Ze(le, "scroll", yi)
                        }
                    }, T.kill = function(R, U) {
                        T.disable(R, U), ce && !U && ce.kill(), B && delete us[B];
                        var W = K.indexOf(T);
                        W >= 0 && K.splice(W, 1), W === ht && Dn > 0 && ht--, W = 0, K.forEach(function(H) {
                            return H.scroller === T.scroller && (W = 1)
                        }), W || Jt || (T.scroll.rec = 0), h && (h.scrollTrigger = null, R && h.revert({
                            kill: !1
                        }), U || h.kill()), Et && [Et, ur, yt, C].forEach(function(H) {
                            return H.parentNode && H.parentNode.removeChild(H)
                        }), Hi === T && (Hi = 0), F && (mt && (mt.uncache = 1), W = 0, K.forEach(function(H) {
                            return H.pin === F && W++
                        }), W || (mt.spacer = 0)), f.onKill && f.onKill(T)
                    }, T.enable(!1, !1), xr && xr(T), !h || !h.add || Me ? T.refresh() : X.delayedCall(.01, function() {
                        return fe || ut || T.refresh()
                    }) && (Me = .01) && (fe = ut = 0), F && ru()
                }, v.register = function(f) {
                    return _i || (X = f || po(), _o() && window.document && v.enable(), _i = xn), _i
                }, v.defaults = function(f) {
                    if (f)
                        for (var h in f) Pn[h] = f[h];
                    return Pn
                }, v.disable = function(f, h) {
                    xn = 0, K.forEach(function(w) {
                        return w[h ? "kill" : "disable"](f)
                    }), Ze(re, "wheel", yi), Ze(Pe, "scroll", yi), clearInterval(mn), Ze(Pe, "touchcancel", or), Ze(Re, "touchstart", or), wn(Ze, Pe, "pointerdown,touchstart,mousedown", co), wn(Ze, Pe, "pointerup,touchend,mouseup", ho), dn.kill(), bn(Ze);
                    for (var m = 0; m < P.length; m += 3) Sn(Ze, P[m], P[m + 1]), Sn(Ze, P[m], P[m + 2])
                }, v.enable = function() {
                    if (re = window, Pe = document, Zt = Pe.documentElement, Re = Pe.body, X && (pn = X.utils.toArray, di = X.utils.clamp, jn = X.core.context || or, Qn = X.core.suppressOverwrites || or, Jn = re.history.scrollRestoration || "auto", X.core.globals("ScrollTrigger", v), Re)) {
                        xn = 1, Ue.register(X), v.isTouch = Ue.isTouch, Or = Ue.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), tt(re, "wheel", yi), io = [re, Pe, Zt, Re], X.matchMedia ? (v.matchMedia = function(B) {
                            var oe = X.matchMedia(),
                                ie;
                            for (ie in B) oe.add(ie, B[ie]);
                            return oe
                        }, X.addEventListener("matchMediaInit", function() {
                            return fs()
                        }), X.addEventListener("matchMediaRevert", function() {
                            return So()
                        }), X.addEventListener("matchMedia", function() {
                            Jr(0, 1), Qr("matchMedia")
                        }), X.matchMedia("(orientation: portrait)", function() {
                            return ls(), ls
                        })) : console.warn("Requires GSAP 3.11.0 or later"), ls(), tt(Pe, "scroll", yi);
                        var f = Re.style,
                            h = f.borderTopStyle,
                            m = X.core.Animation.prototype,
                            w, b;
                        for (m.revert || Object.defineProperty(m, "revert", {
                                value: function() {
                                    return this.time(-.01, !0)
                                }
                            }), f.borderTopStyle = "solid", w = mr(Re), ge.m = Math.round(w.top + ge.sc()) || 0, he.m = Math.round(w.left + he.sc()) || 0, h ? f.borderTopStyle = h : f.removeProperty("border-top-style"), mn = setInterval(To, 250), X.delayedCall(.5, function() {
                                return vn = 0
                            }), tt(Pe, "touchcancel", or), tt(Re, "touchstart", or), wn(tt, Pe, "pointerdown,touchstart,mousedown", co), wn(tt, Pe, "pointerup,touchend,mouseup", ho), Zn = X.utils.checkPrefix("transform"), En.push(Zn), _i = _t(), dn = X.delayedCall(.2, Jr).pause(), pi = [Pe, "visibilitychange", function() {
                                var B = re.innerWidth,
                                    oe = re.innerHeight;
                                Pe.hidden ? (no = B, so = oe) : (no !== B || so !== oe) && Gi()
                            }, Pe, "DOMContentLoaded", Jr, re, "load", Jr, re, "resize", Gi], bn(tt), K.forEach(function(B) {
                                return B.enable(0, 1)
                            }), b = 0; b < P.length; b += 3) Sn(Ze, P[b], P[b + 1]), Sn(Ze, P[b], P[b + 2])
                    }
                }, v.config = function(f) {
                    "limitCallbacks" in f && (es = !!f.limitCallbacks);
                    var h = f.syncInterval;
                    h && clearInterval(mn) || (mn = h) && setInterval(To, h), "ignoreMobileResize" in f && (uo = v.isTouch === 1 && f.ignoreMobileResize), "autoRefreshEvents" in f && (bn(Ze) || bn(tt, f.autoRefreshEvents || "none"), ao = (f.autoRefreshEvents + "").indexOf("resize") === -1)
                }, v.scrollerProxy = function(f, h) {
                    var m = Ae(f),
                        w = P.indexOf(m),
                        b = qr(m);
                    ~w && P.splice(w, b ? 6 : 2), h && (b ? L.unshift(re, h, Re, h, Zt, h) : L.unshift(m, h))
                }, v.clearMatchMedia = function(f) {
                    K.forEach(function(h) {
                        return h._ctx && h._ctx.query === f && h._ctx.kill(!0, !0)
                    })
                }, v.isInViewport = function(f, h, m) {
                    var w = (Qt(f) ? Ae(f) : f).getBoundingClientRect(),
                        b = w[m ? $r : Kr] * h || 0;
                    return m ? w.right - b > 0 && w.left + b < re.innerWidth : w.bottom - b > 0 && w.top + b < re.innerHeight
                }, v.positionInViewport = function(f, h, m) {
                    Qt(f) && (f = Ae(f));
                    var w = f.getBoundingClientRect(),
                        b = w[m ? $r : Kr],
                        B = h == null ? b / 2 : h in kn ? kn[h] * b : ~h.indexOf("%") ? parseFloat(h) * b / 100 : parseFloat(h) || 0;
                    return m ? (w.left + B) / re.innerWidth : (w.top + B) / re.innerHeight
                }, v.killAll = function(f) {
                    if (K.slice(0).forEach(function(m) {
                            return m.vars.id !== "ScrollSmoother" && m.kill()
                        }), f !== !0) {
                        var h = Zr.killAll || [];
                        Zr = {}, h.forEach(function(m) {
                            return m()
                        })
                    }
                }, v
            }();
        te.version = "3.11.4", te.saveStyles = function(v) {
            return v ? pn(v).forEach(function(u) {
                if (u && u.style) {
                    var d = Ot.indexOf(u);
                    d >= 0 && Ot.splice(d, 5), Ot.push(u, u.style.cssText, u.getBBox && u.getAttribute("transform"), X.core.getCache(u), jn())
                }
            }) : Ot
        }, te.revert = function(v, u) {
            return fs(!v, u)
        }, te.create = function(v, u) {
            return new te(v, u)
        }, te.refresh = function(v) {
            return v ? Gi() : (_i || te.register()) && Jr(!0)
        }, te.update = function(v) {
            return ++P.cache && Dr(v === !0 ? 2 : 0)
        }, te.clearScrollMemory = Po, te.maxScroll = function(v, u) {
            return Mr(v, u ? he : ge)
        }, te.getScrollFunc = function(v, u) {
            return Tt(Ae(v), u ? he : ge)
        }, te.getById = function(v) {
            return us[v]
        }, te.getAll = function() {
            return K.filter(function(v) {
                return v.vars.id !== "ScrollSmoother"
            })
        }, te.isScrolling = function() {
            return !!Nt
        }, te.snapDirectional = as, te.addEventListener = function(v, u) {
            var d = Zr[v] || (Zr[v] = []);
            ~d.indexOf(u) || d.push(u)
        }, te.removeEventListener = function(v, u) {
            var d = Zr[v],
                f = d && d.indexOf(u);
            f >= 0 && d.splice(f, 1)
        }, te.batch = function(v, u) {
            var d = [],
                f = {},
                h = u.interval || .016,
                m = u.batchMax || 1e9,
                w = function(oe, ie) {
                    var G = [],
                        N = [],
                        F = X.delayedCall(h, function() {
                            ie(G, N), G = [], N = []
                        }).pause();
                    return function(Y) {
                        G.length || F.restart(!0), G.push(Y.trigger), N.push(Y), m <= G.length && F.progress(1)
                    }
                },
                b;
            for (b in u) f[b] = b.substr(0, 2) === "on" && dt(u[b]) && b !== "onRefreshInit" ? w(b, u[b]) : u[b];
            return dt(m) && (m = m(), tt(te, "refresh", function() {
                return m = u.batchMax()
            })), pn(v).forEach(function(B) {
                var oe = {};
                for (b in f) oe[b] = f[b];
                oe.trigger = B, d.push(te.create(oe))
            }), d
        };
        var Eo = function(u, d, f, h) {
                return d > h ? u(h) : d < 0 && u(0), f > h ? (h - d) / (f - d) : f < 0 ? d / (d - f) : 1
            },
            _s = function v(u, d) {
                d === !0 ? u.style.removeProperty("touch-action") : u.style.touchAction = d === !0 ? "auto" : d ? "pan-" + d + (Ue.isTouch ? " pinch-zoom" : "") : "none", u === Zt && v(Re, d)
            },
            Fn = {
                auto: 1,
                scroll: 1
            },
            au = function(u) {
                var d = u.event,
                    f = u.target,
                    h = u.axis,
                    m = (d.changedTouches ? d.changedTouches[0] : d).target,
                    w = m._gsap || X.core.getCache(m),
                    b = _t(),
                    B;
                if (!w._isScrollT || b - w._isScrollT > 2e3) {
                    for (; m && m !== Re && (m.scrollHeight <= m.clientHeight && m.scrollWidth <= m.clientWidth || !(Fn[(B = jt(m)).overflowY] || Fn[B.overflowX]));) m = m.parentNode;
                    w._isScroll = m && m !== f && !qr(m) && (Fn[(B = jt(m)).overflowY] || Fn[B.overflowX]), w._isScrollT = b
                }(w._isScroll || h === "x") && (d.stopPropagation(), d._gsapAllow = !0)
            },
            Ao = function(u, d, f, h) {
                return Ue.create({
                    target: u,
                    capture: !0,
                    debounce: !1,
                    lockAxis: !0,
                    type: d,
                    onWheel: h = h && au,
                    onPress: h,
                    onDrag: h,
                    onScroll: h,
                    onEnable: function() {
                        return f && tt(Pe, Ue.eventTypes[0], Fo, !1, !0)
                    },
                    onDisable: function() {
                        return Ze(Pe, Ue.eventTypes[0], Fo, !0)
                    }
                })
            },
            uu = /(input|label|select|textarea)/i,
            Ro, Fo = function(u) {
                var d = uu.test(u.target.tagName);
                (d || Ro) && (u._gsapAllow = !0, Ro = d)
            },
            lu = function(u) {
                Tn(u) || (u = {}), u.preventDefault = u.isNormalizer = u.allowClicks = !0, u.type || (u.type = "wheel,touch"), u.debounce = !!u.debounce, u.id = u.id || "normalizer";
                var d = u,
                    f = d.normalizeScrollX,
                    h = d.momentum,
                    m = d.allowNestedScroll,
                    w, b, B = Ae(u.target) || Zt,
                    oe = X.core.globals().ScrollSmoother,
                    ie = oe && oe.get(),
                    G = Or && (u.content && Ae(u.content) || ie && u.content !== !1 && !ie.smooth() && ie.content()),
                    N = Tt(B, ge),
                    F = Tt(B, he),
                    Y = 1,
                    Ce = (Ue.isTouch && re.visualViewport ? re.visualViewport.scale * re.visualViewport.width : re.outerWidth) / re.innerWidth,
                    Te = 0,
                    ne = dt(h) ? function() {
                        return h(w)
                    } : function() {
                        return h || 2.8
                    },
                    rt, Ye, ae = Ao(B, u.type, !0, m),
                    pt = function() {
                        return Ye = !1
                    },
                    Oe = or,
                    Q = or,
                    Mt = function() {
                        b = Mr(B, ge), Q = di(Or ? 1 : 0, b), f && (Oe = di(0, Mr(B, he))), rt = jr
                    },
                    er = function() {
                        G._gsap.y = Ii(parseFloat(G._gsap.y) + N.offset) + "px", G.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(G._gsap.y) + ", 0, 1)", N.offset = N.cacheID = 0
                    },
                    $ = function() {
                        if (Ye) {
                            requestAnimationFrame(pt);
                            var gt = Ii(w.deltaY / 2),
                                we = Q(N.v - gt);
                            if (G && we !== N.v + N.offset) {
                                N.offset = we - N.v;
                                var qe = Ii((parseFloat(G && G._gsap.y) || 0) - N.offset);
                                G.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + qe + ", 0, 1)", G._gsap.y = qe + "px", N.cacheID = P.cache, Dr()
                            }
                            return !0
                        }
                        N.offset && er(), Ye = !0
                    },
                    pe, le, ar, it, nt = function() {
                        Mt(), pe.isActive() && pe.vars.scrollY > b && (N() > b ? pe.progress(1) && N(b) : pe.resetTo("scrollY", b))
                    };
                return G && X.set(G, {
                    y: "+=0"
                }), u.ignoreCheck = function(_e) {
                    return Or && _e.type === "touchmove" && $() || Y > 1.05 && _e.type !== "touchstart" || w.isGesturing || _e.touches && _e.touches.length > 1
                }, u.onPress = function() {
                    var _e = Y;
                    Y = Ii((re.visualViewport && re.visualViewport.scale || 1) / Ce), pe.pause(), _e !== Y && _s(B, Y > 1.01 ? !0 : f ? !1 : "x"), le = F(), ar = N(), Mt(), rt = jr
                }, u.onRelease = u.onGestureStart = function(_e, gt) {
                    if (N.offset && er(), !gt) it.restart(!0);
                    else {
                        P.cache++;
                        var we = ne(),
                            qe, T;
                        f && (qe = F(), T = qe + we * .05 * -_e.velocityX / .227, we *= Eo(F, qe, T, Mr(B, he)), pe.vars.scrollX = Oe(T)), qe = N(), T = qe + we * .05 * -_e.velocityY / .227, we *= Eo(N, qe, T, Mr(B, ge)), pe.vars.scrollY = Q(T), pe.invalidate().duration(we).play(.01), (Or && pe.vars.scrollY >= b || qe >= b - 1) && X.to({}, {
                            onUpdate: nt,
                            duration: we
                        })
                    }
                }, u.onWheel = function() {
                    pe._ts && pe.pause(), _t() - Te > 1e3 && (rt = 0, Te = _t())
                }, u.onChange = function(_e, gt, we, qe, T) {
                    if (jr !== rt && Mt(), gt && f && F(Oe(qe[2] === gt ? le + (_e.startX - _e.x) : F() + gt - qe[1])), we) {
                        N.offset && er();
                        var Xt = T[2] === we,
                            Er = Xt ? ar + _e.startY - _e.y : N() + we - T[1],
                            Ar = Q(Er);
                        Xt && Er !== Ar && (ar += Ar - Er), N(Ar)
                    }(we || gt) && Dr()
                }, u.onEnable = function() {
                    _s(B, f ? !1 : "x"), te.addEventListener("refresh", nt), tt(re, "resize", nt), N.smooth && (N.target.style.scrollBehavior = "auto", N.smooth = F.smooth = !1), ae.enable()
                }, u.onDisable = function() {
                    _s(B, !0), Ze(re, "resize", nt), te.removeEventListener("refresh", nt), ae.kill()
                }, u.lockAxis = u.lockAxis !== !1, w = new Ue(u), w.iOS = Or, Or && !N() && N(1), Or && X.ticker.add(or), it = w._dc, pe = X.to(w, {
                    ease: "power4",
                    paused: !0,
                    scrollX: f ? "+=0.1" : "+=0",
                    scrollY: "+=0.1",
                    onComplete: it.vars.onComplete
                }), w
            };
        te.sort = function(v) {
            return K.sort(v || function(u, d) {
                return (u.vars.refreshPriority || 0) * -1e6 + u.start - (d.start + (d.vars.refreshPriority || 0) * -1e6)
            })
        }, te.observe = function(v) {
            return new Ue(v)
        }, te.normalizeScroll = function(v) {
            if (typeof v > "u") return Ct;
            if (v === !0 && Ct) return Ct.enable();
            if (v === !1) return Ct && Ct.kill();
            var u = v instanceof Ue ? v : lu(v);
            return Ct && Ct.target === u.target && Ct.kill(), qr(u.target) && (Ct = u), u
        }, te.core = {
            _getVelocityProp: Kt,
            _inputObserver: Ao,
            _scrollers: P,
            _proxies: L,
            bridge: {
                ss: function() {
                    Nt || Qr("scrollStart"), Nt = _t()
                },
                ref: function() {
                    return ot
                }
            }
        }, po() && X.registerPlugin(te), t.ScrollTrigger = te, t.default = te, typeof window > "u" || window !== t ? Object.defineProperty(t, "__esModule", {
            value: !0
        }) : delete window.default
    })
})(kl, Ns);
export {
    Ns as S, Pl as g
};