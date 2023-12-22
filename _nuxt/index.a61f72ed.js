import {
    S as Ri
} from "./entry.6795a269.js";
import {
    S as se,
    g as ue
} from "./Waves.vue.f4239951.js";
import {
    c as U
} from "./_commonjsHelpers.28e086c5.js";

function Mi() {
    return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp| netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck| ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c| k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50| p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]| c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0, 4))
}

function Cr() {
    return navigator.userAgent.toLowerCase().indexOf("firefox") !== -1
}

function Ci() {
    var r;
    const t = document.createElement("canvas");
    return ((r = t == null ? void 0 : t.getContext) == null ? void 0 : r.call(t, "2d")) ? t.toDataURL("image/webp").indexOf("data:image/webp") !== -1 : !1
}

function xp(t) {
    let e = t;
    if (typeof t == "number" && e >= 1e3) {
        const n = ["k", "M", "B", "T"],
            a = Math.floor(Math.log(e) / Math.log(1e3));
        e = `${Math.floor(e/1e3**a)}${n[a-1]}`
    }
    return String(e)
}

function Pp(t, e) {
    if (!t || !e) return [];
    const {
        t: r
    } = Ri();
    return Array.from({
        length: e
    }).map((n, a) => {
        const i = r(`${t}.content.${a}.title`),
            o = r(`${t}.content.${a}.txt`);
        return {
            title: i,
            txt: o.split(`
`)
        }
    })
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Le = function(t, e) {
    return Le = Object.setPrototypeOf || {
        __proto__: []
    }
    instanceof Array && function(r, n) {
        r.__proto__ = n
    } || function(r, n) {
        for (var a in n) n.hasOwnProperty(a) && (r[a] = n[a])
    }, Le(t, e)
};

function Di(t, e) {
    Le(t, e);

    function r() {
        this.constructor = t
    }
    t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r)
}
var L = function() {
    return L = Object.assign || function(e) {
        for (var r, n = 1, a = arguments.length; n < a; n++) {
            r = arguments[n];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
        }
        return e
    }, L.apply(this, arguments)
};

function W(t, e, r, n) {
    var a = arguments.length,
        i = a < 3 ? e : n === null ? n = Object.getOwnPropertyDescriptor(e, r) : n,
        o;
    if (typeof Reflect == "object" && typeof Reflect.decorate == "function") i = Reflect.decorate(t, e, r, n);
    else
        for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (i = (a < 3 ? o(i) : a > 3 ? o(e, r, i) : o(e, r)) || i);
    return a > 3 && i && Object.defineProperty(e, r, i), i
}

function Ni() {
    for (var t = 0, e = 0, r = arguments.length; e < r; e++) t += arguments[e].length;
    for (var n = Array(t), a = 0, e = 0; e < r; e++)
        for (var i = arguments[e], o = 0, s = i.length; o < s; o++, a++) n[a] = i[o];
    return n
}
var I = function(t) {
        try {
            return !!t()
        } catch {
            return !0
        }
    },
    Li = I,
    Qe = !Li(function() {
        var t = function() {}.bind();
        return typeof t != "function" || t.hasOwnProperty("prototype")
    }),
    la = Qe,
    va = Function.prototype,
    Fe = va.call,
    Fi = la && va.bind.bind(Fe, Fe),
    w = la ? Fi : function(t) {
        return function() {
            return Fe.apply(t, arguments)
        }
    },
    da = w,
    ki = da({}.toString),
    Bi = da("".slice),
    tt = function(t) {
        return Bi(ki(t), 8, -1)
    },
    zi = w,
    Gi = I,
    Wi = tt,
    ce = Object,
    Ui = zi("".split),
    Ye = Gi(function() {
        return !ce("z").propertyIsEnumerable(0)
    }) ? function(t) {
        return Wi(t) == "String" ? Ui(t, "") : ce(t)
    } : ce,
    et = function(t) {
        return t == null
    },
    Hi = et,
    Vi = TypeError,
    tr = function(t) {
        if (Hi(t)) throw Vi("Can't call method on " + t);
        return t
    },
    Ki = Ye,
    Xi = tr,
    rt = function(t) {
        return Ki(Xi(t))
    },
    Ot = function(t) {
        return t && t.Math == Math && t
    },
    T = Ot(typeof globalThis == "object" && globalThis) || Ot(typeof window == "object" && window) || Ot(typeof self == "object" && self) || Ot(typeof U == "object" && U) || function() {
        return this
    }() || U || Function("return this")(),
    Kt = {},
    qi = {
        get exports() {
            return Kt
        },
        set exports(t) {
            Kt = t
        }
    },
    Dr = T,
    Ji = Object.defineProperty,
    er = function(t, e) {
        try {
            Ji(Dr, t, {
                value: e,
                configurable: !0,
                writable: !0
            })
        } catch {
            Dr[t] = e
        }
        return e
    },
    Zi = T,
    Qi = er,
    Nr = "__core-js_shared__",
    Yi = Zi[Nr] || Qi(Nr, {}),
    rr = Yi,
    Lr = rr;
(qi.exports = function(t, e) {
    return Lr[t] || (Lr[t] = e !== void 0 ? e : {})
})("versions", []).push({
    version: "3.32.0",
    mode: "global",
    copyright: "© 2014-2023 Denis Pushkarev (zloirock.ru)",
    license: "https://github.com/zloirock/core-js/blob/v3.32.0/LICENSE",
    source: "https://github.com/zloirock/core-js"
});
var to = tr,
    eo = Object,
    pt = function(t) {
        return eo(to(t))
    },
    ro = w,
    no = pt,
    ao = ro({}.hasOwnProperty),
    R = Object.hasOwn || function(e, r) {
        return ao(no(e), r)
    },
    io = w,
    oo = 0,
    so = Math.random(),
    uo = io(1.toString),
    nr = function(t) {
        return "Symbol(" + (t === void 0 ? "" : t) + ")_" + uo(++oo + so, 36)
    },
    co = typeof navigator < "u" && String(navigator.userAgent) || "",
    ha = T,
    fe = co,
    Fr = ha.process,
    kr = ha.Deno,
    Br = Fr && Fr.versions || kr && kr.version,
    zr = Br && Br.v8,
    j, Xt;
zr && (j = zr.split("."), Xt = j[0] > 0 && j[0] < 4 ? 1 : +(j[0] + j[1]));
!Xt && fe && (j = fe.match(/Edge\/(\d+)/), (!j || j[1] >= 74) && (j = fe.match(/Chrome\/(\d+)/), j && (Xt = +j[1])));
var fo = Xt,
    Gr = fo,
    lo = I,
    vo = T,
    ho = vo.String,
    pa = !!Object.getOwnPropertySymbols && !lo(function() {
        var t = Symbol();
        return !ho(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && Gr && Gr < 41
    }),
    po = pa,
    ya = po && !Symbol.sham && typeof Symbol.iterator == "symbol",
    yo = T,
    go = Kt,
    Wr = R,
    mo = nr,
    bo = pa,
    $o = ya,
    J = yo.Symbol,
    le = go("wks"),
    So = $o ? J.for || J : J && J.withoutSetter || mo,
    _ = function(t) {
        return Wr(le, t) || (le[t] = bo && Wr(J, t) ? J[t] : So("Symbol." + t)), le[t]
    },
    ke = typeof document == "object" && document.all,
    wo = typeof ke > "u" && ke !== void 0,
    ga = {
        all: ke,
        IS_HTMLDDA: wo
    },
    ma = ga,
    Oo = ma.all,
    O = ma.IS_HTMLDDA ? function(t) {
        return typeof t == "function" || t === Oo
    } : function(t) {
        return typeof t == "function"
    },
    Ur = O,
    ba = ga,
    Io = ba.all,
    E = ba.IS_HTMLDDA ? function(t) {
        return typeof t == "object" ? t !== null : Ur(t) || t === Io
    } : function(t) {
        return typeof t == "object" ? t !== null : Ur(t)
    },
    To = E,
    Eo = String,
    xo = TypeError,
    F = function(t) {
        if (To(t)) return t;
        throw xo(Eo(t) + " is not an object")
    },
    $a = {},
    Po = I,
    A = !Po(function() {
        return Object.defineProperty({}, 1, {
            get: function() {
                return 7
            }
        })[1] != 7
    }),
    _o = A,
    Ao = I,
    Sa = _o && Ao(function() {
        return Object.defineProperty(function() {}, "prototype", {
            value: 42,
            writable: !1
        }).prototype != 42
    }),
    M = {},
    jo = T,
    Hr = E,
    Be = jo.document,
    Ro = Hr(Be) && Hr(Be.createElement),
    wa = function(t) {
        return Ro ? Be.createElement(t) : {}
    },
    Mo = A,
    Co = I,
    Do = wa,
    Oa = !Mo && !Co(function() {
        return Object.defineProperty(Do("div"), "a", {
            get: function() {
                return 7
            }
        }).a != 7
    }),
    No = Qe,
    It = Function.prototype.call,
    B = No ? It.bind(It) : function() {
        return It.apply(It, arguments)
    },
    ve = T,
    Lo = O,
    Fo = function(t) {
        return Lo(t) ? t : void 0
    },
    yt = function(t, e) {
        return arguments.length < 2 ? Fo(ve[t]) : ve[t] && ve[t][e]
    },
    ko = w,
    ar = ko({}.isPrototypeOf),
    Bo = yt,
    zo = O,
    Go = ar,
    Wo = ya,
    Uo = Object,
    Ia = Wo ? function(t) {
        return typeof t == "symbol"
    } : function(t) {
        var e = Bo("Symbol");
        return zo(e) && Go(e.prototype, Uo(t))
    },
    Ho = String,
    ir = function(t) {
        try {
            return Ho(t)
        } catch {
            return "Object"
        }
    },
    Vo = O,
    Ko = ir,
    Xo = TypeError,
    ee = function(t) {
        if (Vo(t)) return t;
        throw Xo(Ko(t) + " is not a function")
    },
    qo = ee,
    Jo = et,
    or = function(t, e) {
        var r = t[e];
        return Jo(r) ? void 0 : qo(r)
    },
    de = B,
    he = O,
    pe = E,
    Zo = TypeError,
    Qo = function(t, e) {
        var r, n;
        if (e === "string" && he(r = t.toString) && !pe(n = de(r, t)) || he(r = t.valueOf) && !pe(n = de(r, t)) || e !== "string" && he(r = t.toString) && !pe(n = de(r, t))) return n;
        throw Zo("Can't convert object to primitive value")
    },
    Yo = B,
    Vr = E,
    Kr = Ia,
    ts = or,
    es = Qo,
    rs = _,
    ns = TypeError,
    as = rs("toPrimitive"),
    is = function(t, e) {
        if (!Vr(t) || Kr(t)) return t;
        var r = ts(t, as),
            n;
        if (r) {
            if (e === void 0 && (e = "default"), n = Yo(r, t, e), !Vr(n) || Kr(n)) return n;
            throw ns("Can't convert object to primitive value")
        }
        return e === void 0 && (e = "number"), es(t, e)
    },
    os = is,
    ss = Ia,
    sr = function(t) {
        var e = os(t, "string");
        return ss(e) ? e : e + ""
    },
    us = A,
    cs = Oa,
    fs = Sa,
    Tt = F,
    Xr = sr,
    ls = TypeError,
    ye = Object.defineProperty,
    vs = Object.getOwnPropertyDescriptor,
    ge = "enumerable",
    me = "configurable",
    be = "writable";
M.f = us ? fs ? function(e, r, n) {
    if (Tt(e), r = Xr(r), Tt(n), typeof e == "function" && r === "prototype" && "value" in n && be in n && !n[be]) {
        var a = vs(e, r);
        a && a[be] && (e[r] = n.value, n = {
            configurable: me in n ? n[me] : a[me],
            enumerable: ge in n ? n[ge] : a[ge],
            writable: !1
        })
    }
    return ye(e, r, n)
} : ye : function(e, r, n) {
    if (Tt(e), r = Xr(r), Tt(n), cs) try {
        return ye(e, r, n)
    } catch {}
    if ("get" in n || "set" in n) throw ls("Accessors not supported");
    return "value" in n && (e[r] = n.value), e
};
var ds = Math.ceil,
    hs = Math.floor,
    ps = Math.trunc || function(e) {
        var r = +e;
        return (r > 0 ? hs : ds)(r)
    },
    ys = ps,
    ur = function(t) {
        var e = +t;
        return e !== e || e === 0 ? 0 : ys(e)
    },
    gs = ur,
    ms = Math.max,
    bs = Math.min,
    Ta = function(t, e) {
        var r = gs(t);
        return r < 0 ? ms(r + e, 0) : bs(r, e)
    },
    $s = ur,
    Ss = Math.min,
    ws = function(t) {
        return t > 0 ? Ss($s(t), 9007199254740991) : 0
    },
    Os = ws,
    gt = function(t) {
        return Os(t.length)
    },
    Is = rt,
    Ts = Ta,
    Es = gt,
    qr = function(t) {
        return function(e, r, n) {
            var a = Is(e),
                i = Es(a),
                o = Ts(n, i),
                s;
            if (t && r != r) {
                for (; i > o;)
                    if (s = a[o++], s != s) return !0
            } else
                for (; i > o; o++)
                    if ((t || o in a) && a[o] === r) return t || o || 0;
            return !t && -1
        }
    },
    xs = {
        includes: qr(!0),
        indexOf: qr(!1)
    },
    re = {},
    Ps = w,
    $e = R,
    _s = rt,
    As = xs.indexOf,
    js = re,
    Jr = Ps([].push),
    Ea = function(t, e) {
        var r = _s(t),
            n = 0,
            a = [],
            i;
        for (i in r) !$e(js, i) && $e(r, i) && Jr(a, i);
        for (; e.length > n;) $e(r, i = e[n++]) && (~As(a, i) || Jr(a, i));
        return a
    },
    cr = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"],
    Rs = Ea,
    Ms = cr,
    xa = Object.keys || function(e) {
        return Rs(e, Ms)
    },
    Cs = A,
    Ds = Sa,
    Ns = M,
    Ls = F,
    Fs = rt,
    ks = xa;
$a.f = Cs && !Ds ? Object.defineProperties : function(e, r) {
    Ls(e);
    for (var n = Fs(r), a = ks(r), i = a.length, o = 0, s; i > o;) Ns.f(e, s = a[o++], n[s]);
    return e
};
var Bs = yt,
    zs = Bs("document", "documentElement"),
    Gs = Kt,
    Ws = nr,
    Zr = Gs("keys"),
    fr = function(t) {
        return Zr[t] || (Zr[t] = Ws(t))
    },
    Us = F,
    Hs = $a,
    Qr = cr,
    Vs = re,
    Ks = zs,
    Xs = wa,
    qs = fr,
    Yr = ">",
    tn = "<",
    ze = "prototype",
    Ge = "script",
    Pa = qs("IE_PROTO"),
    Se = function() {},
    _a = function(t) {
        return tn + Ge + Yr + t + tn + "/" + Ge + Yr
    },
    en = function(t) {
        t.write(_a("")), t.close();
        var e = t.parentWindow.Object;
        return t = null, e
    },
    Js = function() {
        var t = Xs("iframe"),
            e = "java" + Ge + ":",
            r;
        return t.style.display = "none", Ks.appendChild(t), t.src = String(e), r = t.contentWindow.document, r.open(), r.write(_a("document.F=Object")), r.close(), r.F
    },
    Et, Bt = function() {
        try {
            Et = new ActiveXObject("htmlfile")
        } catch {}
        Bt = typeof document < "u" ? document.domain && Et ? en(Et) : Js() : en(Et);
        for (var t = Qr.length; t--;) delete Bt[ze][Qr[t]];
        return Bt()
    };
Vs[Pa] = !0;
var lr = Object.create || function(e, r) {
        var n;
        return e !== null ? (Se[ze] = Us(e), n = new Se, Se[ze] = null, n[Pa] = e) : n = Bt(), r === void 0 ? n : Hs.f(n, r)
    },
    Zs = _,
    Qs = lr,
    Ys = M.f,
    We = Zs("unscopables"),
    Ue = Array.prototype;
Ue[We] == null && Ys(Ue, We, {
    configurable: !0,
    value: Qs(null)
});
var tu = function(t) {
        Ue[We][t] = !0
    },
    mt = {},
    eu = T,
    ru = O,
    rn = eu.WeakMap,
    Aa = ru(rn) && /native code/.test(String(rn)),
    ne = function(t, e) {
        return {
            enumerable: !(t & 1),
            configurable: !(t & 2),
            writable: !(t & 4),
            value: e
        }
    },
    nu = A,
    au = M,
    iu = ne,
    vr = nu ? function(t, e, r) {
        return au.f(t, e, iu(1, r))
    } : function(t, e, r) {
        return t[e] = r, t
    },
    ou = Aa,
    ja = T,
    su = E,
    uu = vr,
    we = R,
    Oe = rr,
    cu = fr,
    fu = re,
    nn = "Object already initialized",
    He = ja.TypeError,
    lu = ja.WeakMap,
    qt, ht, Jt, vu = function(t) {
        return Jt(t) ? ht(t) : qt(t, {})
    },
    du = function(t) {
        return function(e) {
            var r;
            if (!su(e) || (r = ht(e)).type !== t) throw He("Incompatible receiver, " + t + " required");
            return r
        }
    };
if (ou || Oe.state) {
    var C = Oe.state || (Oe.state = new lu);
    C.get = C.get, C.has = C.has, C.set = C.set, qt = function(t, e) {
        if (C.has(t)) throw He(nn);
        return e.facade = t, C.set(t, e), e
    }, ht = function(t) {
        return C.get(t) || {}
    }, Jt = function(t) {
        return C.has(t)
    }
} else {
    var K = cu("state");
    fu[K] = !0, qt = function(t, e) {
        if (we(t, K)) throw He(nn);
        return e.facade = t, uu(t, K, e), e
    }, ht = function(t) {
        return we(t, K) ? t[K] : {}
    }, Jt = function(t) {
        return we(t, K)
    }
}
var nt = {
        set: qt,
        get: ht,
        has: Jt,
        enforce: vu,
        getterFor: du
    },
    dr = {},
    hr = {},
    Ra = {}.propertyIsEnumerable,
    Ma = Object.getOwnPropertyDescriptor,
    hu = Ma && !Ra.call({
        1: 2
    }, 1);
hr.f = hu ? function(e) {
    var r = Ma(this, e);
    return !!r && r.enumerable
} : Ra;
var pu = A,
    yu = B,
    gu = hr,
    mu = ne,
    bu = rt,
    $u = sr,
    Su = R,
    wu = Oa,
    an = Object.getOwnPropertyDescriptor;
dr.f = pu ? an : function(e, r) {
    if (e = bu(e), r = $u(r), wu) try {
        return an(e, r)
    } catch {}
    if (Su(e, r)) return mu(!yu(gu.f, e, r), e[r])
};
var Zt = {},
    Ou = {
        get exports() {
            return Zt
        },
        set exports(t) {
            Zt = t
        }
    },
    Ve = A,
    Iu = R,
    Ca = Function.prototype,
    Tu = Ve && Object.getOwnPropertyDescriptor,
    pr = Iu(Ca, "name"),
    Eu = pr && function() {}.name === "something",
    xu = pr && (!Ve || Ve && Tu(Ca, "name").configurable),
    Da = {
        EXISTS: pr,
        PROPER: Eu,
        CONFIGURABLE: xu
    },
    Pu = w,
    _u = O,
    Ke = rr,
    Au = Pu(Function.toString);
_u(Ke.inspectSource) || (Ke.inspectSource = function(t) {
    return Au(t)
});
var Na = Ke.inspectSource,
    yr = w,
    ju = I,
    Ru = O,
    xt = R,
    Xe = A,
    Mu = Da.CONFIGURABLE,
    Cu = Na,
    La = nt,
    Du = La.enforce,
    Nu = La.get,
    on = String,
    zt = Object.defineProperty,
    Lu = yr("".slice),
    Fu = yr("".replace),
    ku = yr([].join),
    Bu = Xe && !ju(function() {
        return zt(function() {}, "length", {
            value: 8
        }).length !== 8
    }),
    zu = String(String).split("String"),
    Gu = Ou.exports = function(t, e, r) {
        Lu(on(e), 0, 7) === "Symbol(" && (e = "[" + Fu(on(e), /^Symbol\(([^)]*)\)/, "$1") + "]"), r && r.getter && (e = "get " + e), r && r.setter && (e = "set " + e), (!xt(t, "name") || Mu && t.name !== e) && (Xe ? zt(t, "name", {
            value: e,
            configurable: !0
        }) : t.name = e), Bu && r && xt(r, "arity") && t.length !== r.arity && zt(t, "length", {
            value: r.arity
        });
        try {
            r && xt(r, "constructor") && r.constructor ? Xe && zt(t, "prototype", {
                writable: !1
            }) : t.prototype && (t.prototype = void 0)
        } catch {}
        var n = Du(t);
        return xt(n, "source") || (n.source = ku(zu, typeof e == "string" ? e : "")), t
    };
Function.prototype.toString = Gu(function() {
    return Ru(this) && Nu(this).source || Cu(this)
}, "toString");
var Wu = O,
    Uu = M,
    Hu = Zt,
    Vu = er,
    at = function(t, e, r, n) {
        n || (n = {});
        var a = n.enumerable,
            i = n.name !== void 0 ? n.name : e;
        if (Wu(r) && Hu(r, i, n), n.global) a ? t[e] = r : Vu(e, r);
        else {
            try {
                n.unsafe ? t[e] && (a = !0) : delete t[e]
            } catch {}
            a ? t[e] = r : Uu.f(t, e, {
                value: r,
                enumerable: !1,
                configurable: !n.nonConfigurable,
                writable: !n.nonWritable
            })
        }
        return t
    },
    ae = {},
    Ku = Ea,
    Xu = cr,
    qu = Xu.concat("length", "prototype");
ae.f = Object.getOwnPropertyNames || function(e) {
    return Ku(e, qu)
};
var gr = {};
gr.f = Object.getOwnPropertySymbols;
var Ju = yt,
    Zu = w,
    Qu = ae,
    Yu = gr,
    tc = F,
    ec = Zu([].concat),
    rc = Ju("Reflect", "ownKeys") || function(e) {
        var r = Qu.f(tc(e)),
            n = Yu.f;
        return n ? ec(r, n(e)) : r
    },
    sn = R,
    nc = rc,
    ac = dr,
    ic = M,
    oc = function(t, e, r) {
        for (var n = nc(e), a = ic.f, i = ac.f, o = 0; o < n.length; o++) {
            var s = n[o];
            !sn(t, s) && !(r && sn(r, s)) && a(t, s, i(e, s))
        }
    },
    sc = I,
    uc = O,
    cc = /#|\.prototype\./,
    bt = function(t, e) {
        var r = lc[fc(t)];
        return r == dc ? !0 : r == vc ? !1 : uc(e) ? sc(e) : !!e
    },
    fc = bt.normalize = function(t) {
        return String(t).replace(cc, ".").toLowerCase()
    },
    lc = bt.data = {},
    vc = bt.NATIVE = "N",
    dc = bt.POLYFILL = "P",
    Fa = bt,
    Ie = T,
    hc = dr.f,
    pc = vr,
    yc = at,
    gc = er,
    mc = oc,
    bc = Fa,
    $t = function(t, e) {
        var r = t.target,
            n = t.global,
            a = t.stat,
            i, o, s, u, c, f;
        if (n ? o = Ie : a ? o = Ie[r] || gc(r, {}) : o = (Ie[r] || {}).prototype, o)
            for (s in e) {
                if (c = e[s], t.dontCallGetSet ? (f = hc(o, s), u = f && f.value) : u = o[s], i = bc(n ? s : r + (a ? "." : "#") + s, t.forced), !i && u !== void 0) {
                    if (typeof c == typeof u) continue;
                    mc(c, u)
                }(t.sham || u && u.sham) && pc(c, "sham", !0), yc(o, s, c, t)
            }
    },
    $c = I,
    Sc = !$c(function() {
        function t() {}
        return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
    }),
    wc = R,
    Oc = O,
    Ic = pt,
    Tc = fr,
    Ec = Sc,
    un = Tc("IE_PROTO"),
    qe = Object,
    xc = qe.prototype,
    ka = Ec ? qe.getPrototypeOf : function(t) {
        var e = Ic(t);
        if (wc(e, un)) return e[un];
        var r = e.constructor;
        return Oc(r) && e instanceof r ? r.prototype : e instanceof qe ? xc : null
    },
    Pc = I,
    _c = O,
    Ac = E,
    cn = ka,
    jc = at,
    Rc = _,
    Je = Rc("iterator"),
    Ba = !1,
    H, Te, Ee;
[].keys && (Ee = [].keys(), "next" in Ee ? (Te = cn(cn(Ee)), Te !== Object.prototype && (H = Te)) : Ba = !0);
var Mc = !Ac(H) || Pc(function() {
    var t = {};
    return H[Je].call(t) !== t
});
Mc && (H = {});
_c(H[Je]) || jc(H, Je, function() {
    return this
});
var za = {
        IteratorPrototype: H,
        BUGGY_SAFARI_ITERATORS: Ba
    },
    Cc = M.f,
    Dc = R,
    Nc = _,
    fn = Nc("toStringTag"),
    mr = function(t, e, r) {
        t && !r && (t = t.prototype), t && !Dc(t, fn) && Cc(t, fn, {
            configurable: !0,
            value: e
        })
    },
    Lc = za.IteratorPrototype,
    Fc = lr,
    kc = ne,
    Bc = mr,
    zc = mt,
    Gc = function() {
        return this
    },
    Wc = function(t, e, r, n) {
        var a = e + " Iterator";
        return t.prototype = Fc(Lc, {
            next: kc(+!n, r)
        }), Bc(t, a, !1), zc[a] = Gc, t
    },
    Uc = w,
    Hc = ee,
    Vc = function(t, e, r) {
        try {
            return Uc(Hc(Object.getOwnPropertyDescriptor(t, e)[r]))
        } catch {}
    },
    Kc = O,
    Xc = String,
    qc = TypeError,
    Jc = function(t) {
        if (typeof t == "object" || Kc(t)) return t;
        throw qc("Can't set " + Xc(t) + " as a prototype")
    },
    Zc = Vc,
    Qc = F,
    Yc = Jc,
    Ga = Object.setPrototypeOf || ("__proto__" in {} ? function() {
        var t = !1,
            e = {},
            r;
        try {
            r = Zc(Object.prototype, "__proto__", "set"), r(e, []), t = e instanceof Array
        } catch {}
        return function(a, i) {
            return Qc(a), Yc(i), t ? r(a, i) : a.__proto__ = i, a
        }
    }() : void 0),
    tf = $t,
    ef = B,
    Wa = Da,
    rf = O,
    nf = Wc,
    ln = ka,
    vn = Ga,
    af = mr,
    of = vr,
    xe = at,
    sf = _,
    uf = mt,
    Ua = za,
    cf = Wa.PROPER,
    ff = Wa.CONFIGURABLE,
    dn = Ua.IteratorPrototype,
    Pt = Ua.BUGGY_SAFARI_ITERATORS,
    ut = sf("iterator"),
    hn = "keys",
    ct = "values",
    pn = "entries",
    lf = function() {
        return this
    },
    br = function(t, e, r, n, a, i, o) {
        nf(r, e, n);
        var s = function(y) {
                if (y === a && d) return d;
                if (!Pt && y in f) return f[y];
                switch (y) {
                    case hn:
                        return function() {
                            return new r(this, y)
                        };
                    case ct:
                        return function() {
                            return new r(this, y)
                        };
                    case pn:
                        return function() {
                            return new r(this, y)
                        }
                }
                return function() {
                    return new r(this)
                }
            },
            u = e + " Iterator",
            c = !1,
            f = t.prototype,
            l = f[ut] || f["@@iterator"] || a && f[a],
            d = !Pt && l || s(a),
            v = e == "Array" && f.entries || l,
            p, g, m;
        if (v && (p = ln(v.call(new t)), p !== Object.prototype && p.next && (ln(p) !== dn && (vn ? vn(p, dn) : rf(p[ut]) || xe(p, ut, lf)), af(p, u, !0))), cf && a == ct && l && l.name !== ct && (ff ? of (f, "name", ct) : (c = !0, d = function() {
                return ef(l, this)
            })), a)
            if (g = {
                    values: s(ct),
                    keys: i ? d : s(hn),
                    entries: s(pn)
                }, o)
                for (m in g)(Pt || c || !(m in f)) && xe(f, m, g[m]);
            else tf({
                target: e,
                proto: !0,
                forced: Pt || c
            }, g);
        return f[ut] !== d && xe(f, ut, d, {
            name: a
        }), uf[e] = d, g
    },
    $r = function(t, e) {
        return {
            value: t,
            done: e
        }
    },
    vf = rt,
    Sr = tu,
    yn = mt,
    Ha = nt,
    df = M.f,
    hf = br,
    _t = $r,
    pf = A,
    Va = "Array Iterator",
    yf = Ha.set,
    gf = Ha.getterFor(Va);
hf(Array, "Array", function(t, e) {
    yf(this, {
        type: Va,
        target: vf(t),
        index: 0,
        kind: e
    })
}, function() {
    var t = gf(this),
        e = t.target,
        r = t.kind,
        n = t.index++;
    return !e || n >= e.length ? (t.target = void 0, _t(void 0, !0)) : r == "keys" ? _t(n, !1) : r == "values" ? _t(e[n], !1) : _t([n, e[n]], !1)
}, "values");
var gn = yn.Arguments = yn.Array;
Sr("keys");
Sr("values");
Sr("entries");
if (pf && gn.name !== "values") try {
    df(gn, "name", {
        value: "values"
    })
} catch {}
var Q = {},
    mf = {
        get exports() {
            return Q
        },
        set exports(t) {
            Q = t
        }
    },
    Ka = {},
    bf = sr,
    $f = M,
    Sf = ne,
    Xa = function(t, e, r) {
        var n = bf(e);
        n in t ? $f.f(t, n, Sf(0, r)) : t[n] = r
    },
    mn = Ta,
    wf = gt,
    Of = Xa,
    If = Array,
    Tf = Math.max,
    Ef = function(t, e, r) {
        for (var n = wf(t), a = mn(e, n), i = mn(r === void 0 ? n : r, n), o = If(Tf(i - a, 0)), s = 0; a < i; a++, s++) Of(o, s, t[a]);
        return o.length = s, o
    },
    xf = tt,
    Pf = rt,
    qa = ae.f,
    _f = Ef,
    Ja = typeof window == "object" && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [],
    Af = function(t) {
        try {
            return qa(t)
        } catch {
            return _f(Ja)
        }
    };
Ka.f = function(e) {
    return Ja && xf(e) == "Window" ? Af(e) : qa(Pf(e))
};
var jf = I,
    Rf = jf(function() {
        if (typeof ArrayBuffer == "function") {
            var t = new ArrayBuffer(8);
            Object.isExtensible(t) && Object.defineProperty(t, "a", {
                value: 8
            })
        }
    }),
    Mf = I,
    Cf = E,
    Df = tt,
    bn = Rf,
    Gt = Object.isExtensible,
    Nf = Mf(function() {
        Gt(1)
    }),
    Lf = Nf || bn ? function(e) {
        return !Cf(e) || bn && Df(e) == "ArrayBuffer" ? !1 : Gt ? Gt(e) : !0
    } : Gt,
    Ff = I,
    Za = !Ff(function() {
        return Object.isExtensible(Object.preventExtensions({}))
    }),
    kf = $t,
    Bf = w,
    zf = re,
    Gf = E,
    wr = R,
    Wf = M.f,
    $n = ae,
    Uf = Ka,
    Or = Lf,
    Hf = nr,
    Vf = Za,
    Qa = !1,
    k = Hf("meta"),
    Kf = 0,
    Ir = function(t) {
        Wf(t, k, {
            value: {
                objectID: "O" + Kf++,
                weakData: {}
            }
        })
    },
    Xf = function(t, e) {
        if (!Gf(t)) return typeof t == "symbol" ? t : (typeof t == "string" ? "S" : "P") + t;
        if (!wr(t, k)) {
            if (!Or(t)) return "F";
            if (!e) return "E";
            Ir(t)
        }
        return t[k].objectID
    },
    qf = function(t, e) {
        if (!wr(t, k)) {
            if (!Or(t)) return !0;
            if (!e) return !1;
            Ir(t)
        }
        return t[k].weakData
    },
    Jf = function(t) {
        return Vf && Qa && Or(t) && !wr(t, k) && Ir(t), t
    },
    Zf = function() {
        Qf.enable = function() {}, Qa = !0;
        var t = $n.f,
            e = Bf([].splice),
            r = {};
        r[k] = 1, t(r).length && ($n.f = function(n) {
            for (var a = t(n), i = 0, o = a.length; i < o; i++)
                if (a[i] === k) {
                    e(a, i, 1);
                    break
                }
            return a
        }, kf({
            target: "Object",
            stat: !0,
            forced: !0
        }, {
            getOwnPropertyNames: Uf.f
        }))
    },
    Qf = mf.exports = {
        enable: Zf,
        fastKey: Xf,
        getWeakData: qf,
        onFreeze: Jf
    };
zf[k] = !0;
var Yf = tt,
    tl = w,
    el = function(t) {
        if (Yf(t) === "Function") return tl(t)
    },
    Sn = el,
    rl = ee,
    nl = Qe,
    al = Sn(Sn.bind),
    ie = function(t, e) {
        return rl(t), e === void 0 ? t : nl ? al(t, e) : function() {
            return t.apply(e, arguments)
        }
    },
    il = _,
    ol = mt,
    sl = il("iterator"),
    ul = Array.prototype,
    Ya = function(t) {
        return t !== void 0 && (ol.Array === t || ul[sl] === t)
    },
    cl = _,
    fl = cl("toStringTag"),
    ti = {};
ti[fl] = "z";
var Tr = String(ti) === "[object z]",
    ll = Tr,
    vl = O,
    Wt = tt,
    dl = _,
    hl = dl("toStringTag"),
    pl = Object,
    yl = Wt(function() {
        return arguments
    }()) == "Arguments",
    gl = function(t, e) {
        try {
            return t[e]
        } catch {}
    },
    oe = ll ? Wt : function(t) {
        var e, r, n;
        return t === void 0 ? "Undefined" : t === null ? "Null" : typeof(r = gl(e = pl(t), hl)) == "string" ? r : yl ? Wt(e) : (n = Wt(e)) == "Object" && vl(e.callee) ? "Arguments" : n
    },
    ml = oe,
    wn = or,
    bl = et,
    $l = mt,
    Sl = _,
    wl = Sl("iterator"),
    Er = function(t) {
        if (!bl(t)) return wn(t, wl) || wn(t, "@@iterator") || $l[ml(t)]
    },
    Ol = B,
    Il = ee,
    Tl = F,
    El = ir,
    xl = Er,
    Pl = TypeError,
    ei = function(t, e) {
        var r = arguments.length < 2 ? xl(t) : e;
        if (Il(r)) return Tl(Ol(r, t));
        throw Pl(El(t) + " is not iterable")
    },
    _l = B,
    On = F,
    Al = or,
    ri = function(t, e, r) {
        var n, a;
        On(t);
        try {
            if (n = Al(t, "return"), !n) {
                if (e === "throw") throw r;
                return r
            }
            n = _l(n, t)
        } catch (i) {
            a = !0, n = i
        }
        if (e === "throw") throw r;
        if (a) throw n;
        return On(n), r
    },
    jl = ie,
    Rl = B,
    Ml = F,
    Cl = ir,
    Dl = Ya,
    Nl = gt,
    In = ar,
    Ll = ei,
    Fl = Er,
    Tn = ri,
    kl = TypeError,
    Ut = function(t, e) {
        this.stopped = t, this.result = e
    },
    En = Ut.prototype,
    xr = function(t, e, r) {
        var n = r && r.that,
            a = !!(r && r.AS_ENTRIES),
            i = !!(r && r.IS_RECORD),
            o = !!(r && r.IS_ITERATOR),
            s = !!(r && r.INTERRUPTED),
            u = jl(e, n),
            c, f, l, d, v, p, g, m = function(h) {
                return c && Tn(c, "normal", h), new Ut(!0, h)
            },
            y = function(h) {
                return a ? (Ml(h), s ? u(h[0], h[1], m) : u(h[0], h[1])) : s ? u(h, m) : u(h)
            };
        if (i) c = t.iterator;
        else if (o) c = t;
        else {
            if (f = Fl(t), !f) throw kl(Cl(t) + " is not iterable");
            if (Dl(f)) {
                for (l = 0, d = Nl(t); d > l; l++)
                    if (v = y(t[l]), v && In(En, v)) return v;
                return new Ut(!1)
            }
            c = Ll(t, f)
        }
        for (p = i ? t.next : c.next; !(g = Rl(p, c)).done;) {
            try {
                v = y(g.value)
            } catch (h) {
                Tn(c, "throw", h)
            }
            if (typeof v == "object" && v && In(En, v)) return v
        }
        return new Ut(!1)
    },
    Bl = ar,
    zl = TypeError,
    Pr = function(t, e) {
        if (Bl(e, t)) return t;
        throw zl("Incorrect invocation")
    },
    Gl = _,
    ni = Gl("iterator"),
    ai = !1;
try {
    var Wl = 0,
        xn = {
            next: function() {
                return {
                    done: !!Wl++
                }
            },
            return: function() {
                ai = !0
            }
        };
    xn[ni] = function() {
        return this
    }, Array.from(xn, function() {
        throw 2
    })
} catch {}
var ii = function(t, e) {
        if (!e && !ai) return !1;
        var r = !1;
        try {
            var n = {};
            n[ni] = function() {
                return {
                    next: function() {
                        return {
                            done: r = !0
                        }
                    }
                }
            }, t(n)
        } catch {}
        return r
    },
    Ul = O,
    Hl = E,
    Pn = Ga,
    Vl = function(t, e, r) {
        var n, a;
        return Pn && Ul(n = e.constructor) && n !== r && Hl(a = n.prototype) && a !== r.prototype && Pn(t, a), t
    },
    Kl = $t,
    Xl = T,
    ql = w,
    _n = Fa,
    Jl = at,
    Zl = Q,
    Ql = xr,
    Yl = Pr,
    tv = O,
    ev = et,
    Pe = E,
    _e = I,
    rv = ii,
    nv = mr,
    av = Vl,
    _r = function(t, e, r) {
        var n = t.indexOf("Map") !== -1,
            a = t.indexOf("Weak") !== -1,
            i = n ? "set" : "add",
            o = Xl[t],
            s = o && o.prototype,
            u = o,
            c = {},
            f = function(y) {
                var h = ql(s[y]);
                Jl(s, y, y == "add" ? function($) {
                    return h(this, $ === 0 ? 0 : $), this
                } : y == "delete" ? function(b) {
                    return a && !Pe(b) ? !1 : h(this, b === 0 ? 0 : b)
                } : y == "get" ? function($) {
                    return a && !Pe($) ? void 0 : h(this, $ === 0 ? 0 : $)
                } : y == "has" ? function($) {
                    return a && !Pe($) ? !1 : h(this, $ === 0 ? 0 : $)
                } : function($, ot) {
                    return h(this, $ === 0 ? 0 : $, ot), this
                })
            },
            l = _n(t, !tv(o) || !(a || s.forEach && !_e(function() {
                new o().entries().next()
            })));
        if (l) u = r.getConstructor(e, t, n, i), Zl.enable();
        else if (_n(t, !0)) {
            var d = new u,
                v = d[i](a ? {} : -0, 1) != d,
                p = _e(function() {
                    d.has(1)
                }),
                g = rv(function(y) {
                    new o(y)
                }),
                m = !a && _e(function() {
                    for (var y = new o, h = 5; h--;) y[i](h, h);
                    return !y.has(-0)
                });
            g || (u = e(function(y, h) {
                Yl(y, s);
                var b = av(new o, y, u);
                return ev(h) || Ql(h, b[i], {
                    that: b,
                    AS_ENTRIES: n
                }), b
            }), u.prototype = s, s.constructor = u), (p || m) && (f("delete"), f("has"), n && f("get")), (m || v) && f(i), a && s.clear && delete s.clear
        }
        return c[t] = u, Kl({
            global: !0,
            constructor: !0,
            forced: u != o
        }, c), nv(u, t), a || r.setStrong(u, t, n), u
    },
    An = Zt,
    iv = M,
    oi = function(t, e, r) {
        return r.get && An(r.get, e, {
            getter: !0
        }), r.set && An(r.set, e, {
            setter: !0
        }), iv.f(t, e, r)
    },
    ov = at,
    Ar = function(t, e, r) {
        for (var n in e) ov(t, n, e[n], r);
        return t
    },
    sv = yt,
    uv = oi,
    cv = _,
    fv = A,
    jn = cv("species"),
    lv = function(t) {
        var e = sv(t);
        fv && e && !e[jn] && uv(e, jn, {
            configurable: !0,
            get: function() {
                return this
            }
        })
    },
    vv = lr,
    dv = oi,
    Rn = Ar,
    hv = ie,
    pv = Pr,
    yv = et,
    gv = xr,
    mv = br,
    At = $r,
    bv = lv,
    ft = A,
    Mn = Q.fastKey,
    si = nt,
    Cn = si.set,
    Ae = si.getterFor,
    ui = {
        getConstructor: function(t, e, r, n) {
            var a = t(function(c, f) {
                    pv(c, i), Cn(c, {
                        type: e,
                        index: vv(null),
                        first: void 0,
                        last: void 0,
                        size: 0
                    }), ft || (c.size = 0), yv(f) || gv(f, c[n], {
                        that: c,
                        AS_ENTRIES: r
                    })
                }),
                i = a.prototype,
                o = Ae(e),
                s = function(c, f, l) {
                    var d = o(c),
                        v = u(c, f),
                        p, g;
                    return v ? v.value = l : (d.last = v = {
                        index: g = Mn(f, !0),
                        key: f,
                        value: l,
                        previous: p = d.last,
                        next: void 0,
                        removed: !1
                    }, d.first || (d.first = v), p && (p.next = v), ft ? d.size++ : c.size++, g !== "F" && (d.index[g] = v)), c
                },
                u = function(c, f) {
                    var l = o(c),
                        d = Mn(f),
                        v;
                    if (d !== "F") return l.index[d];
                    for (v = l.first; v; v = v.next)
                        if (v.key == f) return v
                };
            return Rn(i, {
                clear: function() {
                    for (var f = this, l = o(f), d = l.index, v = l.first; v;) v.removed = !0, v.previous && (v.previous = v.previous.next = void 0), delete d[v.index], v = v.next;
                    l.first = l.last = void 0, ft ? l.size = 0 : f.size = 0
                },
                delete: function(c) {
                    var f = this,
                        l = o(f),
                        d = u(f, c);
                    if (d) {
                        var v = d.next,
                            p = d.previous;
                        delete l.index[d.index], d.removed = !0, p && (p.next = v), v && (v.previous = p), l.first == d && (l.first = v), l.last == d && (l.last = p), ft ? l.size-- : f.size--
                    }
                    return !!d
                },
                forEach: function(f) {
                    for (var l = o(this), d = hv(f, arguments.length > 1 ? arguments[1] : void 0), v; v = v ? v.next : l.first;)
                        for (d(v.value, v.key, this); v && v.removed;) v = v.previous
                },
                has: function(f) {
                    return !!u(this, f)
                }
            }), Rn(i, r ? {
                get: function(f) {
                    var l = u(this, f);
                    return l && l.value
                },
                set: function(f, l) {
                    return s(this, f === 0 ? 0 : f, l)
                }
            } : {
                add: function(f) {
                    return s(this, f = f === 0 ? 0 : f, f)
                }
            }), ft && dv(i, "size", {
                configurable: !0,
                get: function() {
                    return o(this).size
                }
            }), a
        },
        setStrong: function(t, e, r) {
            var n = e + " Iterator",
                a = Ae(e),
                i = Ae(n);
            mv(t, e, function(o, s) {
                Cn(this, {
                    type: n,
                    target: o,
                    state: a(o),
                    kind: s,
                    last: void 0
                })
            }, function() {
                for (var o = i(this), s = o.kind, u = o.last; u && u.removed;) u = u.previous;
                return !o.target || !(o.last = u = u ? u.next : o.state.first) ? (o.target = void 0, At(void 0, !0)) : s == "keys" ? At(u.key, !1) : s == "values" ? At(u.value, !1) : At([u.key, u.value], !1)
            }, r ? "entries" : "values", !r, !0), bv(e)
        }
    },
    $v = _r,
    Sv = ui;
$v("Map", function(t) {
    return function() {
        return t(this, arguments.length ? arguments[0] : void 0)
    }
}, Sv);
var wv = Tr,
    Ov = oe,
    Iv = wv ? {}.toString : function() {
        return "[object " + Ov(this) + "]"
    },
    Tv = Tr,
    Ev = at,
    xv = Iv;
Tv || Ev(Object.prototype, "toString", xv, {
    unsafe: !0
});
var Pv = oe,
    _v = String,
    ci = function(t) {
        if (Pv(t) === "Symbol") throw TypeError("Cannot convert a Symbol value to a string");
        return _v(t)
    },
    jr = w,
    Av = ur,
    jv = ci,
    Rv = tr,
    Mv = jr("".charAt),
    Dn = jr("".charCodeAt),
    Cv = jr("".slice),
    Nn = function(t) {
        return function(e, r) {
            var n = jv(Rv(e)),
                a = Av(r),
                i = n.length,
                o, s;
            return a < 0 || a >= i ? t ? "" : void 0 : (o = Dn(n, a), o < 55296 || o > 56319 || a + 1 === i || (s = Dn(n, a + 1)) < 56320 || s > 57343 ? t ? Mv(n, a) : o : t ? Cv(n, a, a + 2) : (o - 55296 << 10) + (s - 56320) + 65536)
        }
    },
    Dv = {
        codeAt: Nn(!1),
        charAt: Nn(!0)
    },
    Nv = Dv.charAt,
    Lv = ci,
    fi = nt,
    Fv = br,
    Ln = $r,
    li = "String Iterator",
    kv = fi.set,
    Bv = fi.getterFor(li);
Fv(String, "String", function(t) {
    kv(this, {
        type: li,
        string: Lv(t),
        index: 0
    })
}, function() {
    var e = Bv(this),
        r = e.string,
        n = e.index,
        a;
    return n >= r.length ? Ln(void 0, !0) : (a = Nv(r, n), e.index += a.length, Ln(a, !1))
});
var zv = T,
    St = zv,
    Gv = St;
Gv.Map;
var Wv = _r,
    Uv = ui;
Wv("Set", function(t) {
    return function() {
        return t(this, arguments.length ? arguments[0] : void 0)
    }
}, Uv);
var Hv = St;
Hv.Set;
var Vv = tt,
    Kv = Array.isArray || function(e) {
        return Vv(e) == "Array"
    },
    Xv = w,
    qv = I,
    vi = O,
    Jv = oe,
    Zv = yt,
    Qv = Na,
    di = function() {},
    Yv = [],
    hi = Zv("Reflect", "construct"),
    Rr = /^\s*(?:class|function)\b/,
    td = Xv(Rr.exec),
    ed = !Rr.exec(di),
    lt = function(e) {
        if (!vi(e)) return !1;
        try {
            return hi(di, Yv, e), !0
        } catch {
            return !1
        }
    },
    pi = function(e) {
        if (!vi(e)) return !1;
        switch (Jv(e)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
                return !1
        }
        try {
            return ed || !!td(Rr, Qv(e))
        } catch {
            return !0
        }
    };
pi.sham = !0;
var yi = !hi || qv(function() {
        var t;
        return lt(lt.call) || !lt(Object) || !lt(function() {
            t = !0
        }) || t
    }) ? pi : lt,
    Fn = Kv,
    rd = yi,
    nd = E,
    ad = _,
    id = ad("species"),
    kn = Array,
    od = function(t) {
        var e;
        return Fn(t) && (e = t.constructor, rd(e) && (e === kn || Fn(e.prototype)) ? e = void 0 : nd(e) && (e = e[id], e === null && (e = void 0))), e === void 0 ? kn : e
    },
    sd = od,
    ud = function(t, e) {
        return new(sd(t))(e === 0 ? 0 : e)
    },
    cd = ie,
    fd = w,
    ld = Ye,
    vd = pt,
    dd = gt,
    hd = ud,
    Bn = fd([].push),
    G = function(t) {
        var e = t == 1,
            r = t == 2,
            n = t == 3,
            a = t == 4,
            i = t == 6,
            o = t == 7,
            s = t == 5 || i;
        return function(u, c, f, l) {
            for (var d = vd(u), v = ld(d), p = cd(c, f), g = dd(v), m = 0, y = l || hd, h = e ? y(u, g) : r || o ? y(u, 0) : void 0, b, $; g > m; m++)
                if ((s || m in v) && (b = v[m], $ = p(b, m, d), t))
                    if (e) h[m] = $;
                    else if ($) switch (t) {
                case 3:
                    return !0;
                case 5:
                    return b;
                case 6:
                    return m;
                case 2:
                    Bn(h, b)
            } else switch (t) {
                case 4:
                    return !1;
                case 7:
                    Bn(h, b)
            }
            return i ? -1 : n || a ? a : h
        }
    },
    pd = {
        forEach: G(0),
        map: G(1),
        filter: G(2),
        some: G(3),
        every: G(4),
        find: G(5),
        findIndex: G(6),
        filterReject: G(7)
    },
    yd = w,
    zn = Ar,
    jt = Q.getWeakData,
    gd = Pr,
    md = F,
    bd = et,
    je = E,
    $d = xr,
    gi = pd,
    Gn = R,
    mi = nt,
    Sd = mi.set,
    wd = mi.getterFor,
    Od = gi.find,
    Id = gi.findIndex,
    Td = yd([].splice),
    Ed = 0,
    Rt = function(t) {
        return t.frozen || (t.frozen = new bi)
    },
    bi = function() {
        this.entries = []
    },
    Re = function(t, e) {
        return Od(t.entries, function(r) {
            return r[0] === e
        })
    };
bi.prototype = {
    get: function(t) {
        var e = Re(this, t);
        if (e) return e[1]
    },
    has: function(t) {
        return !!Re(this, t)
    },
    set: function(t, e) {
        var r = Re(this, t);
        r ? r[1] = e : this.entries.push([t, e])
    },
    delete: function(t) {
        var e = Id(this.entries, function(r) {
            return r[0] === t
        });
        return ~e && Td(this.entries, e, 1), !!~e
    }
};
var xd = {
        getConstructor: function(t, e, r, n) {
            var a = t(function(u, c) {
                    gd(u, i), Sd(u, {
                        type: e,
                        id: Ed++,
                        frozen: void 0
                    }), bd(c) || $d(c, u[n], {
                        that: u,
                        AS_ENTRIES: r
                    })
                }),
                i = a.prototype,
                o = wd(e),
                s = function(u, c, f) {
                    var l = o(u),
                        d = jt(md(c), !0);
                    return d === !0 ? Rt(l).set(c, f) : d[l.id] = f, u
                };
            return zn(i, {
                delete: function(u) {
                    var c = o(this);
                    if (!je(u)) return !1;
                    var f = jt(u);
                    return f === !0 ? Rt(c).delete(u) : f && Gn(f, c.id) && delete f[c.id]
                },
                has: function(c) {
                    var f = o(this);
                    if (!je(c)) return !1;
                    var l = jt(c);
                    return l === !0 ? Rt(f).has(c) : l && Gn(l, f.id)
                }
            }), zn(i, r ? {
                get: function(c) {
                    var f = o(this);
                    if (je(c)) {
                        var l = jt(c);
                        return l === !0 ? Rt(f).get(c) : l ? l[f.id] : void 0
                    }
                },
                set: function(c, f) {
                    return s(this, c, f)
                }
            } : {
                add: function(c) {
                    return s(this, c, !0)
                }
            }), a
        }
    },
    Pd = Za,
    Wn = T,
    Ht = w,
    Un = Ar,
    _d = Q,
    Ad = _r,
    $i = xd,
    Mt = E,
    Ct = nt.enforce,
    jd = I,
    Rd = Aa,
    wt = Object,
    Md = Array.isArray,
    Dt = wt.isExtensible,
    Si = wt.isFrozen,
    Cd = wt.isSealed,
    wi = wt.freeze,
    Dd = wt.seal,
    Hn = {},
    Vn = {},
    Nd = !Wn.ActiveXObject && "ActiveXObject" in Wn,
    vt, Oi = function(t) {
        return function() {
            return t(this, arguments.length ? arguments[0] : void 0)
        }
    },
    Ii = Ad("WeakMap", Oi, $i),
    q = Ii.prototype,
    Vt = Ht(q.set),
    Ld = function() {
        return Pd && jd(function() {
            var t = wi([]);
            return Vt(new Ii, t, 1), !Si(t)
        })
    };
if (Rd)
    if (Nd) {
        vt = $i.getConstructor(Oi, "WeakMap", !0), _d.enable();
        var Kn = Ht(q.delete),
            Nt = Ht(q.has),
            Xn = Ht(q.get);
        Un(q, {
            delete: function(t) {
                if (Mt(t) && !Dt(t)) {
                    var e = Ct(this);
                    return e.frozen || (e.frozen = new vt), Kn(this, t) || e.frozen.delete(t)
                }
                return Kn(this, t)
            },
            has: function(e) {
                if (Mt(e) && !Dt(e)) {
                    var r = Ct(this);
                    return r.frozen || (r.frozen = new vt), Nt(this, e) || r.frozen.has(e)
                }
                return Nt(this, e)
            },
            get: function(e) {
                if (Mt(e) && !Dt(e)) {
                    var r = Ct(this);
                    return r.frozen || (r.frozen = new vt), Nt(this, e) ? Xn(this, e) : r.frozen.get(e)
                }
                return Xn(this, e)
            },
            set: function(e, r) {
                if (Mt(e) && !Dt(e)) {
                    var n = Ct(this);
                    n.frozen || (n.frozen = new vt), Nt(this, e) ? Vt(this, e, r) : n.frozen.set(e, r)
                } else Vt(this, e, r);
                return this
            }
        })
    } else Ld() && Un(q, {
        set: function(e, r) {
            var n;
            return Md(e) && (Si(e) ? n = Hn : Cd(e) && (n = Vn)), Vt(this, e, r), n == Hn && wi(e), n == Vn && Dd(e), this
        }
    });
var Fd = St;
Fd.WeakMap;
var kd = F,
    Bd = ri,
    zd = function(t, e, r, n) {
        try {
            return n ? e(kd(r)[0], r[1]) : e(r)
        } catch (a) {
            Bd(t, "throw", a)
        }
    },
    Gd = ie,
    Wd = B,
    Ud = pt,
    Hd = zd,
    Vd = Ya,
    Kd = yi,
    Xd = gt,
    qn = Xa,
    qd = ei,
    Jd = Er,
    Jn = Array,
    Zd = function(e) {
        var r = Ud(e),
            n = Kd(this),
            a = arguments.length,
            i = a > 1 ? arguments[1] : void 0,
            o = i !== void 0;
        o && (i = Gd(i, a > 2 ? arguments[2] : void 0));
        var s = Jd(r),
            u = 0,
            c, f, l, d, v, p;
        if (s && !(this === Jn && Vd(s)))
            for (d = qd(r, s), v = d.next, f = n ? new this : []; !(l = Wd(v, d)).done; u++) p = o ? Hd(d, i, [l.value, u], !0) : l.value, qn(f, u, p);
        else
            for (c = Xd(r), f = n ? new this(c) : Jn(c); c > u; u++) p = o ? i(r[u], u) : r[u], qn(f, u, p);
        return f.length = u, f
    },
    Qd = $t,
    Yd = Zd,
    th = ii,
    eh = !th(function(t) {
        Array.from(t)
    });
Qd({
    target: "Array",
    stat: !0,
    forced: eh
}, {
    from: Yd
});
var rh = St;
rh.Array.from;
var Zn = A,
    nh = w,
    ah = B,
    ih = I,
    Me = xa,
    oh = gr,
    sh = hr,
    uh = pt,
    ch = Ye,
    X = Object.assign,
    Qn = Object.defineProperty,
    fh = nh([].concat),
    lh = !X || ih(function() {
        if (Zn && X({
                b: 1
            }, X(Qn({}, "a", {
                enumerable: !0,
                get: function() {
                    Qn(this, "b", {
                        value: 3,
                        enumerable: !1
                    })
                }
            }), {
                b: 2
            })).b !== 1) return !0;
        var t = {},
            e = {},
            r = Symbol(),
            n = "abcdefghijklmnopqrst";
        return t[r] = 7, n.split("").forEach(function(a) {
            e[a] = a
        }), X({}, t)[r] != 7 || Me(X({}, e)).join("") != n
    }) ? function(e, r) {
        for (var n = uh(e), a = arguments.length, i = 1, o = oh.f, s = sh.f; a > i;)
            for (var u = ch(arguments[i++]), c = o ? fh(Me(u), o(u)) : Me(u), f = c.length, l = 0, d; f > l;) d = c[l++], (!Zn || ah(s, u, d)) && (n[d] = u[d]);
        return n
    } : X,
    vh = $t,
    Yn = lh;
vh({
    target: "Object",
    stat: !0,
    arity: 2,
    forced: Object.assign !== Yn
}, {
    assign: Yn
});
var dh = St;
dh.Object.assign;
var ta = 0 / 0,
    hh = "[object Symbol]",
    ph = /^\s+|\s+$/g,
    yh = /^[-+]0x[0-9a-f]+$/i,
    gh = /^0b[01]+$/i,
    mh = /^0o[0-7]+$/i,
    bh = parseInt,
    $h = Object.prototype,
    Sh = $h.toString;

function wh(t, e, r) {
    return t === t && (r !== void 0 && (t = t <= r ? t : r), e !== void 0 && (t = t >= e ? t : e)), t
}

function ea(t) {
    var e = typeof t;
    return !!t && (e == "object" || e == "function")
}

function Oh(t) {
    return !!t && typeof t == "object"
}

function Ih(t) {
    return typeof t == "symbol" || Oh(t) && Sh.call(t) == hh
}

function Ce(t) {
    if (typeof t == "number") return t;
    if (Ih(t)) return ta;
    if (ea(t)) {
        var e = typeof t.valueOf == "function" ? t.valueOf() : t;
        t = ea(e) ? e + "" : e
    }
    if (typeof t != "string") return t === 0 ? t : +t;
    t = t.replace(ph, "");
    var r = gh.test(t);
    return r || mh.test(t) ? bh(t.slice(2), r ? 2 : 8) : yh.test(t) ? ta : +t
}

function Th(t, e, r) {
    return r === void 0 && (r = e, e = void 0), r !== void 0 && (r = Ce(r), r = r === r ? r : 0), e !== void 0 && (e = Ce(e), e = e === e ? e : 0), wh(Ce(t), e, r)
}
var P = Th;

function ra(t, e) {
    return t === void 0 && (t = -1 / 0), e === void 0 && (e = 1 / 0),
        function(r, n) {
            var a = "_" + n;
            Object.defineProperty(r, n, {
                get: function() {
                    return this[a]
                },
                set: function(i) {
                    Object.defineProperty(this, a, {
                        value: P(i, t, e),
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    })
                },
                enumerable: !0,
                configurable: !0
            })
        }
}

function De(t, e) {
    var r = "_" + e;
    Object.defineProperty(t, e, {
        get: function() {
            return this[r]
        },
        set: function(n) {
            Object.defineProperty(this, r, {
                value: !!n,
                enumerable: !1,
                writable: !0,
                configurable: !0
            })
        },
        enumerable: !0,
        configurable: !0
    })
}
var Eh = "Expected a function",
    na = 0 / 0,
    xh = "[object Symbol]",
    Ph = /^\s+|\s+$/g,
    _h = /^[-+]0x[0-9a-f]+$/i,
    Ah = /^0b[01]+$/i,
    jh = /^0o[0-7]+$/i,
    Rh = parseInt,
    Mh = typeof U == "object" && U && U.Object === Object && U,
    Ch = typeof self == "object" && self && self.Object === Object && self,
    Dh = Mh || Ch || Function("return this")(),
    Nh = Object.prototype,
    Lh = Nh.toString,
    Fh = Math.max,
    kh = Math.min,
    Ne = function() {
        return Dh.Date.now()
    };

function Bh(t, e, r) {
    var n, a, i, o, s, u, c = 0,
        f = !1,
        l = !1,
        d = !0;
    if (typeof t != "function") throw new TypeError(Eh);
    e = aa(e) || 0, Ze(r) && (f = !!r.leading, l = "maxWait" in r, i = l ? Fh(aa(r.maxWait) || 0, e) : i, d = "trailing" in r ? !!r.trailing : d);

    function v(S) {
        var z = n,
            st = a;
        return n = a = void 0, c = S, o = t.apply(st, z), o
    }

    function p(S) {
        return c = S, s = setTimeout(y, e), f ? v(S) : o
    }

    function g(S) {
        var z = S - u,
            st = S - c,
            Mr = e - z;
        return l ? kh(Mr, i - st) : Mr
    }

    function m(S) {
        var z = S - u,
            st = S - c;
        return u === void 0 || z >= e || z < 0 || l && st >= i
    }

    function y() {
        var S = Ne();
        if (m(S)) return h(S);
        s = setTimeout(y, g(S))
    }

    function h(S) {
        return s = void 0, d && n ? v(S) : (n = a = void 0, o)
    }

    function b() {
        s !== void 0 && clearTimeout(s), c = 0, n = u = a = s = void 0
    }

    function $() {
        return s === void 0 ? o : h(Ne())
    }

    function ot() {
        var S = Ne(),
            z = m(S);
        if (n = arguments, a = this, u = S, z) {
            if (s === void 0) return p(u);
            if (l) return s = setTimeout(y, e), v(u)
        }
        return s === void 0 && (s = setTimeout(y, e)), o
    }
    return ot.cancel = b, ot.flush = $, ot
}

function Ze(t) {
    var e = typeof t;
    return !!t && (e == "object" || e == "function")
}

function zh(t) {
    return !!t && typeof t == "object"
}

function Gh(t) {
    return typeof t == "symbol" || zh(t) && Lh.call(t) == xh
}

function aa(t) {
    if (typeof t == "number") return t;
    if (Gh(t)) return na;
    if (Ze(t)) {
        var e = typeof t.valueOf == "function" ? t.valueOf() : t;
        t = Ze(e) ? e + "" : e
    }
    if (typeof t != "string") return t === 0 ? t : +t;
    t = t.replace(Ph, "");
    var r = Ah.test(t);
    return r || jh.test(t) ? Rh(t.slice(2), r ? 2 : 8) : _h.test(t) ? na : +t
}
var Ti = Bh;

function Ei() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    return function(r, n, a) {
        var i = a.value;
        return {
            get: function() {
                return this.hasOwnProperty(n) || Object.defineProperty(this, n, {
                    value: Ti.apply(void 0, Ni([i], t))
                }), this[n]
            }
        }
    }
}
var Wh = function() {
        function t(e) {
            var r = this;
            e === void 0 && (e = {}), this.damping = .1, this.thumbMinSize = 20, this.renderByPixels = !0, this.alwaysShowTracks = !1, this.continuousScrolling = !0, this.delegateTo = null, this.plugins = {}, Object.keys(e).forEach(function(n) {
                r[n] = e[n]
            })
        }
        return Object.defineProperty(t.prototype, "wheelEventTarget", {
            get: function() {
                return this.delegateTo
            },
            set: function(e) {
                console.warn("[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."), this.delegateTo = e
            },
            enumerable: !0,
            configurable: !0
        }), W([ra(0, 1)], t.prototype, "damping", void 0), W([ra(0, 1 / 0)], t.prototype, "thumbMinSize", void 0), W([De], t.prototype, "renderByPixels", void 0), W([De], t.prototype, "alwaysShowTracks", void 0), W([De], t.prototype, "continuousScrolling", void 0), t
    }(),
    Lt, Qt = new WeakMap;

function xi() {
    if (Lt !== void 0) return Lt;
    var t = !1;
    try {
        var e = function() {},
            r = Object.defineProperty({}, "passive", {
                get: function() {
                    t = !0
                }
            });
        window.addEventListener("testPassive", e, r), window.removeEventListener("testPassive", e, r)
    } catch {}
    return Lt = t ? {
        passive: !1
    } : !1, Lt
}

function it(t) {
    var e = Qt.get(t) || [];
    return Qt.set(t, e),
        function(n, a, i) {
            function o(s) {
                s.defaultPrevented || i(s)
            }
            a.split(/\s+/g).forEach(function(s) {
                e.push({
                    elem: n,
                    eventName: s,
                    handler: o
                }), n.addEventListener(s, o, xi())
            })
        }
}

function Uh(t) {
    var e = Qt.get(t);
    e && (e.forEach(function(r) {
        var n = r.elem,
            a = r.eventName,
            i = r.handler;
        n.removeEventListener(a, i, xi())
    }), Qt.delete(t))
}

function Hh(t) {
    return t.touches ? t.touches[t.touches.length - 1] : t
}

function Z(t) {
    var e = Hh(t);
    return {
        x: e.clientX,
        y: e.clientY
    }
}

function Ft(t, e) {
    return e === void 0 && (e = []), e.some(function(r) {
        return t === r
    })
}
var Pi = ["webkit", "moz", "ms", "o"],
    Vh = new RegExp("^-(?!(?:" + Pi.join("|") + ")-)");

function Kh(t) {
    var e = {};
    return Object.keys(t).forEach(function(r) {
        if (!Vh.test(r)) {
            e[r] = t[r];
            return
        }
        var n = t[r];
        r = r.replace(/^-/, ""), e[r] = n, Pi.forEach(function(a) {
            e["-" + a + "-" + r] = n
        })
    }), e
}

function V(t, e) {
    e = Kh(e), Object.keys(e).forEach(function(r) {
        var n = r.replace(/^-/, "").replace(/-([a-z])/g, function(a, i) {
            return i.toUpperCase()
        });
        t.style[n] = e[r]
    })
}
var Xh = function() {
        function t(e) {
            this.velocityMultiplier = window.devicePixelRatio, this.updateTime = Date.now(), this.delta = {
                x: 0,
                y: 0
            }, this.velocity = {
                x: 0,
                y: 0
            }, this.lastPosition = {
                x: 0,
                y: 0
            }, this.lastPosition = Z(e)
        }
        return t.prototype.update = function(e) {
            var r = this,
                n = r.velocity,
                a = r.updateTime,
                i = r.lastPosition,
                o = Date.now(),
                s = Z(e),
                u = {
                    x: -(s.x - i.x),
                    y: -(s.y - i.y)
                },
                c = o - a || 16.7,
                f = u.x / c * 16.7,
                l = u.y / c * 16.7;
            n.x = f * this.velocityMultiplier, n.y = l * this.velocityMultiplier, this.delta = u, this.updateTime = o, this.lastPosition = s
        }, t
    }(),
    qh = function() {
        function t() {
            this._touchList = {}
        }
        return Object.defineProperty(t.prototype, "_primitiveValue", {
            get: function() {
                return {
                    x: 0,
                    y: 0
                }
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.isActive = function() {
            return this._activeTouchID !== void 0
        }, t.prototype.getDelta = function() {
            var e = this._getActiveTracker();
            return e ? L({}, e.delta) : this._primitiveValue
        }, t.prototype.getVelocity = function() {
            var e = this._getActiveTracker();
            return e ? L({}, e.velocity) : this._primitiveValue
        }, t.prototype.getEasingDistance = function(e) {
            var r = 1 - e,
                n = {
                    x: 0,
                    y: 0
                },
                a = this.getVelocity();
            return Object.keys(a).forEach(function(i) {
                for (var o = Math.abs(a[i]) <= 10 ? 0 : a[i]; o !== 0;) n[i] += o, o = o * r | 0
            }), n
        }, t.prototype.track = function(e) {
            var r = this,
                n = e.targetTouches;
            return Array.from(n).forEach(function(a) {
                r._add(a)
            }), this._touchList
        }, t.prototype.update = function(e) {
            var r = this,
                n = e.touches,
                a = e.changedTouches;
            return Array.from(n).forEach(function(i) {
                r._renew(i)
            }), this._setActiveID(a), this._touchList
        }, t.prototype.release = function(e) {
            var r = this;
            delete this._activeTouchID, Array.from(e.changedTouches).forEach(function(n) {
                r._delete(n)
            })
        }, t.prototype._add = function(e) {
            this._has(e) && this._delete(e);
            var r = new Xh(e);
            this._touchList[e.identifier] = r
        }, t.prototype._renew = function(e) {
            if (this._has(e)) {
                var r = this._touchList[e.identifier];
                r.update(e)
            }
        }, t.prototype._delete = function(e) {
            delete this._touchList[e.identifier]
        }, t.prototype._has = function(e) {
            return this._touchList.hasOwnProperty(e.identifier)
        }, t.prototype._setActiveID = function(e) {
            this._activeTouchID = e[e.length - 1].identifier
        }, t.prototype._getActiveTracker = function() {
            var e = this,
                r = e._touchList,
                n = e._activeTouchID;
            return r[n]
        }, t
    }(),
    Y;
(function(t) {
    t.X = "x", t.Y = "y"
})(Y || (Y = {}));
var Jh = function() {
        function t(e, r) {
            r === void 0 && (r = 0), this._direction = e, this._minSize = r, this.element = document.createElement("div"), this.displaySize = 0, this.realSize = 0, this.offset = 0, this.element.className = "scrollbar-thumb scrollbar-thumb-" + e
        }
        return t.prototype.attachTo = function(e) {
            e.appendChild(this.element)
        }, t.prototype.update = function(e, r, n) {
            this.realSize = Math.min(r / n, 1) * r, this.displaySize = Math.max(this.realSize, this._minSize), this.offset = e / n * (r + (this.realSize - this.displaySize)), V(this.element, this._getStyle())
        }, t.prototype._getStyle = function() {
            switch (this._direction) {
                case Y.X:
                    return {
                        width: this.displaySize + "px",
                        "-transform": "translate3d(" + this.offset + "px, 0, 0)"
                    };
                case Y.Y:
                    return {
                        height: this.displaySize + "px",
                        "-transform": "translate3d(0, " + this.offset + "px, 0)"
                    };
                default:
                    return null
            }
        }, t
    }(),
    ia = function() {
        function t(e, r) {
            r === void 0 && (r = 0), this.element = document.createElement("div"), this._isShown = !1, this.element.className = "scrollbar-track scrollbar-track-" + e, this.thumb = new Jh(e, r), this.thumb.attachTo(this.element)
        }
        return t.prototype.attachTo = function(e) {
            e.appendChild(this.element)
        }, t.prototype.show = function() {
            this._isShown || (this._isShown = !0, this.element.classList.add("show"))
        }, t.prototype.hide = function() {
            this._isShown && (this._isShown = !1, this.element.classList.remove("show"))
        }, t.prototype.update = function(e, r, n) {
            V(this.element, {
                display: n <= r ? "none" : "block"
            }), this.thumb.update(e, r, n)
        }, t
    }(),
    Zh = function() {
        function t(e) {
            this._scrollbar = e;
            var r = e.options.thumbMinSize;
            this.xAxis = new ia(Y.X, r), this.yAxis = new ia(Y.Y, r), this.xAxis.attachTo(e.containerEl), this.yAxis.attachTo(e.containerEl), e.options.alwaysShowTracks && (this.xAxis.show(), this.yAxis.show())
        }
        return t.prototype.update = function() {
            var e = this._scrollbar,
                r = e.size,
                n = e.offset;
            this.xAxis.update(n.x, r.container.width, r.content.width), this.yAxis.update(n.y, r.container.height, r.content.height)
        }, t.prototype.autoHideOnIdle = function() {
            this._scrollbar.options.alwaysShowTracks || (this.xAxis.hide(), this.yAxis.hide())
        }, W([Ei(300)], t.prototype, "autoHideOnIdle", null), t
    }();

function Qh(t) {
    var e = t.containerEl,
        r = t.contentEl,
        n = getComputedStyle(e),
        a = ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"].map(function(s) {
            return n[s] ? parseFloat(n[s]) : 0
        }),
        i = a[0] + a[1],
        o = a[2] + a[3];
    return {
        container: {
            width: e.clientWidth,
            height: e.clientHeight
        },
        content: {
            width: r.offsetWidth - r.clientWidth + r.scrollWidth + o,
            height: r.offsetHeight - r.clientHeight + r.scrollHeight + i
        }
    }
}

function Yh(t, e) {
    var r = t.bounding,
        n = e.getBoundingClientRect(),
        a = Math.max(r.top, n.top),
        i = Math.max(r.left, n.left),
        o = Math.min(r.right, n.right),
        s = Math.min(r.bottom, n.bottom);
    return a < s && i < o
}

function tp(t) {
    var e = t.getSize(),
        r = {
            x: Math.max(e.content.width - e.container.width, 0),
            y: Math.max(e.content.height - e.container.height, 0)
        },
        n = t.containerEl.getBoundingClientRect(),
        a = {
            top: Math.max(n.top, 0),
            right: Math.min(n.right, window.innerWidth),
            bottom: Math.min(n.bottom, window.innerHeight),
            left: Math.max(n.left, 0)
        };
    t.size = e, t.limit = r, t.bounding = a, t.track.update(), t.setPosition()
}

function ep(t, e, r) {
    var n = t.options,
        a = t.offset,
        i = t.limit,
        o = t.track,
        s = t.contentEl;
    return n.renderByPixels && (e = Math.round(e), r = Math.round(r)), e = P(e, 0, i.x), r = P(r, 0, i.y), e !== a.x && o.xAxis.show(), r !== a.y && o.yAxis.show(), n.alwaysShowTracks || o.autoHideOnIdle(), e === a.x && r === a.y ? null : (a.x = e, a.y = r, V(s, {
        "-transform": "translate3d(" + -e + "px, " + -r + "px, 0)"
    }), o.update(), {
        offset: L({}, a),
        limit: L({}, i)
    })
}
var oa = new WeakMap;

function rp(t, e, r, n, a) {
    n === void 0 && (n = 0);
    var i = a === void 0 ? {} : a,
        o = i.easing,
        s = o === void 0 ? np : o,
        u = i.callback,
        c = t.options,
        f = t.offset,
        l = t.limit;
    c.renderByPixels && (e = Math.round(e), r = Math.round(r));
    var d = f.x,
        v = f.y,
        p = P(e, 0, l.x) - d,
        g = P(r, 0, l.y) - v,
        m = Date.now();

    function y() {
        var h = Date.now() - m,
            b = n ? s(Math.min(h / n, 1)) : 1;
        if (t.setPosition(d + p * b, v + g * b), h >= n) typeof u == "function" && u.call(t);
        else {
            var $ = requestAnimationFrame(y);
            oa.set(t, $)
        }
    }
    cancelAnimationFrame(oa.get(t)), y()
}

function np(t) {
    return Math.pow(t - 1, 3) + 1
}

function ap(t, e, r) {
    var n = r === void 0 ? {} : r,
        a = n.alignToTop,
        i = a === void 0 ? !0 : a,
        o = n.onlyScrollIfNeeded,
        s = o === void 0 ? !1 : o,
        u = n.offsetTop,
        c = u === void 0 ? 0 : u,
        f = n.offsetLeft,
        l = f === void 0 ? 0 : f,
        d = n.offsetBottom,
        v = d === void 0 ? 0 : d,
        p = t.containerEl,
        g = t.bounding,
        m = t.offset,
        y = t.limit;
    if (!(!e || !p.contains(e))) {
        var h = e.getBoundingClientRect();
        if (!(s && t.isVisible(e))) {
            var b = i ? h.top - g.top - c : h.bottom - g.bottom + v;
            t.setMomentum(h.left - g.left - l, P(b, -m.y, y.y - m.y))
        }
    }
}
var ip = function() {
        function t(e, r) {
            var n = this.constructor;
            this.scrollbar = e, this.name = n.pluginName, this.options = L(L({}, n.defaultOptions), r)
        }
        return t.prototype.onInit = function() {}, t.prototype.onDestroy = function() {}, t.prototype.onUpdate = function() {}, t.prototype.onRender = function(e) {}, t.prototype.transformDelta = function(e, r) {
            return L({}, e)
        }, t.pluginName = "", t.defaultOptions = {}, t
    }(),
    Yt = {
        order: new Set,
        constructors: {}
    };

function op() {
    for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
    t.forEach(function(r) {
        var n = r.pluginName;
        if (!n) throw new TypeError("plugin name is required");
        Yt.order.add(n), Yt.constructors[n] = r
    })
}

function sp(t, e) {
    return Array.from(Yt.order).filter(function(r) {
        return e[r] !== !1
    }).map(function(r) {
        var n = Yt.constructors[r],
            a = new n(t, e[r]);
        return e[r] = a.options, a
    })
}
var x;
(function(t) {
    t[t.TAB = 9] = "TAB", t[t.SPACE = 32] = "SPACE", t[t.PAGE_UP = 33] = "PAGE_UP", t[t.PAGE_DOWN = 34] = "PAGE_DOWN", t[t.END = 35] = "END", t[t.HOME = 36] = "HOME", t[t.LEFT = 37] = "LEFT", t[t.UP = 38] = "UP", t[t.RIGHT = 39] = "RIGHT", t[t.DOWN = 40] = "DOWN"
})(x || (x = {}));

function up(t) {
    var e = it(t),
        r = t.containerEl;
    e(r, "keydown", function(n) {
        var a = document.activeElement;
        if (!(a !== r && !r.contains(a)) && !lp(a)) {
            var i = cp(t, n.keyCode || n.which);
            if (i) {
                var o = i[0],
                    s = i[1];
                t.addTransformableMomentum(o, s, n, function(u) {
                    u ? n.preventDefault() : (t.containerEl.blur(), t.parent && t.parent.containerEl.focus())
                })
            }
        }
    })
}

function cp(t, e) {
    var r = t.size,
        n = t.limit,
        a = t.offset;
    switch (e) {
        case x.TAB:
            return fp(t);
        case x.SPACE:
            return [0, 200];
        case x.PAGE_UP:
            return [0, -r.container.height + 40];
        case x.PAGE_DOWN:
            return [0, r.container.height - 40];
        case x.END:
            return [0, n.y - a.y];
        case x.HOME:
            return [0, -a.y];
        case x.LEFT:
            return [-40, 0];
        case x.UP:
            return [0, -40];
        case x.RIGHT:
            return [40, 0];
        case x.DOWN:
            return [0, 40];
        default:
            return null
    }
}

function fp(t) {
    requestAnimationFrame(function() {
        t.scrollIntoView(document.activeElement, {
            offsetTop: t.size.container.height / 2,
            offsetLeft: t.size.container.width / 2,
            onlyScrollIfNeeded: !0
        })
    })
}

function lp(t) {
    return t.tagName === "INPUT" || t.tagName === "SELECT" || t.tagName === "TEXTAREA" || t.isContentEditable ? !t.disabled : !1
}
var D;
(function(t) {
    t[t.X = 0] = "X", t[t.Y = 1] = "Y"
})(D || (D = {}));

function vp(t) {
    var e = it(t),
        r = t.containerEl,
        n = t.track,
        a = n.xAxis,
        i = n.yAxis;

    function o(v, p) {
        var g = t.size,
            m = t.limit,
            y = t.offset;
        if (v === D.X) {
            var h = g.container.width + (a.thumb.realSize - a.thumb.displaySize);
            return P(p / h * g.content.width, 0, m.x) - y.x
        }
        if (v === D.Y) {
            var b = g.container.height + (i.thumb.realSize - i.thumb.displaySize);
            return P(p / b * g.content.height, 0, m.y) - y.y
        }
        return 0
    }

    function s(v) {
        if (Ft(v, [a.element, a.thumb.element])) return D.X;
        if (Ft(v, [i.element, i.thumb.element])) return D.Y
    }
    var u, c, f, l, d;
    e(r, "click", function(v) {
        if (!(c || !Ft(v.target, [a.element, i.element]))) {
            var p = v.target,
                g = s(p),
                m = p.getBoundingClientRect(),
                y = Z(v);
            if (g === D.X) {
                var h = y.x - m.left - a.thumb.displaySize / 2;
                t.setMomentum(o(g, h), 0)
            }
            if (g === D.Y) {
                var h = y.y - m.top - i.thumb.displaySize / 2;
                t.setMomentum(0, o(g, h))
            }
        }
    }), e(r, "mousedown", function(v) {
        if (Ft(v.target, [a.thumb.element, i.thumb.element])) {
            u = !0;
            var p = v.target,
                g = Z(v),
                m = p.getBoundingClientRect();
            l = s(p), f = {
                x: g.x - m.left,
                y: g.y - m.top
            }, d = r.getBoundingClientRect(), V(t.containerEl, {
                "-user-select": "none"
            })
        }
    }), e(window, "mousemove", function(v) {
        if (u) {
            c = !0;
            var p = Z(v);
            if (l === D.X) {
                var g = p.x - f.x - d.left;
                t.setMomentum(o(l, g), 0)
            }
            if (l === D.Y) {
                var g = p.y - f.y - d.top;
                t.setMomentum(0, o(l, g))
            }
        }
    }), e(window, "mouseup blur", function() {
        u = c = !1, V(t.containerEl, {
            "-user-select": ""
        })
    })
}

function dp(t) {
    var e = it(t);
    e(window, "resize", Ti(t.update.bind(t), 300))
}

function hp(t) {
    var e = it(t),
        r = t.containerEl,
        n = t.contentEl,
        a = !1,
        i = !1,
        o;

    function s(u) {
        var c = u.x,
            f = u.y;
        if (!(!c && !f)) {
            var l = t.offset,
                d = t.limit;
            t.setMomentum(P(l.x + c, 0, d.x) - l.x, P(l.y + f, 0, d.y) - l.y), o = requestAnimationFrame(function() {
                s({
                    x: c,
                    y: f
                })
            })
        }
    }
    e(window, "mousemove", function(u) {
        if (a) {
            cancelAnimationFrame(o);
            var c = pp(t, u);
            s(c)
        }
    }), e(n, "contextmenu", function() {
        i = !0, cancelAnimationFrame(o), a = !1
    }), e(n, "mousedown", function() {
        i = !1
    }), e(n, "selectstart", function() {
        i || (cancelAnimationFrame(o), a = !0)
    }), e(window, "mouseup blur", function() {
        cancelAnimationFrame(o), a = !1, i = !1
    }), e(r, "scroll", function(u) {
        u.preventDefault(), r.scrollTop = r.scrollLeft = 0
    })
}

function pp(t, e) {
    var r = t.bounding,
        n = r.top,
        a = r.right,
        i = r.bottom,
        o = r.left,
        s = Z(e),
        u = s.x,
        c = s.y,
        f = {
            x: 0,
            y: 0
        },
        l = 20;
    return u === 0 && c === 0 || (u > a - l ? f.x = u - a + l : u < o + l && (f.x = u - o - l), c > i - l ? f.y = c - i + l : c < n + l && (f.y = c - n - l), f.x *= 2, f.y *= 2), f
}
var kt;

function yp(t) {
    var e = t.options.delegateTo || t.containerEl,
        r = new qh,
        n = it(t),
        a, i = 0;
    n(e, "touchstart", function(o) {
        r.track(o), t.setMomentum(0, 0), i === 0 && (a = t.options.damping, t.options.damping = Math.max(a, .5)), i++
    }), n(e, "touchmove", function(o) {
        if (!(kt && kt !== t)) {
            r.update(o);
            var s = r.getDelta(),
                u = s.x,
                c = s.y;
            t.addTransformableMomentum(u, c, o, function(f) {
                f && o.cancelable && (o.preventDefault(), kt = t)
            })
        }
    }), n(e, "touchcancel touchend", function(o) {
        var s = r.getEasingDistance(a);
        t.addTransformableMomentum(s.x, s.y, o), i--, i === 0 && (t.options.damping = a), r.release(o), kt = null
    })
}

function gp(t) {
    var e = it(t),
        r = t.options.delegateTo || t.containerEl,
        n = "onwheel" in window || document.implementation.hasFeature("Events.wheel", "3.0") ? "wheel" : "mousewheel";
    e(r, n, function(a) {
        var i = bp(a),
            o = i.x,
            s = i.y;
        t.addTransformableMomentum(o, s, a, function(u) {
            u && a.preventDefault()
        })
    })
}
var dt = {
        STANDARD: 1,
        OTHERS: -3
    },
    sa = [1, 28, 500],
    mp = function(t) {
        return sa[t] || sa[0]
    };

function bp(t) {
    if ("deltaX" in t) {
        var e = mp(t.deltaMode);
        return {
            x: t.deltaX / dt.STANDARD * e,
            y: t.deltaY / dt.STANDARD * e
        }
    }
    return "wheelDeltaX" in t ? {
        x: t.wheelDeltaX / dt.OTHERS,
        y: t.wheelDeltaY / dt.OTHERS
    } : {
        x: 0,
        y: t.wheelDelta / dt.OTHERS
    }
}
const ua = Object.freeze(Object.defineProperty({
    __proto__: null,
    keyboardHandler: up,
    mouseHandler: vp,
    resizeHandler: dp,
    selectHandler: hp,
    touchHandler: yp,
    wheelHandler: gp
}, Symbol.toStringTag, {
    value: "Module"
}));
var N = new Map,
    ca = function() {
        function t(e, r) {
            var n = this;
            this.offset = {
                x: 0,
                y: 0
            }, this.limit = {
                x: 1 / 0,
                y: 1 / 0
            }, this.bounding = {
                top: 0,
                right: 0,
                bottom: 0,
                left: 0
            }, this._plugins = [], this._momentum = {
                x: 0,
                y: 0
            }, this._listeners = new Set, this.containerEl = e;
            var a = this.contentEl = document.createElement("div");
            this.options = new Wh(r), e.setAttribute("data-scrollbar", "true"), e.setAttribute("tabindex", "-1"), V(e, {
                overflow: "hidden",
                outline: "none"
            }), window.navigator.msPointerEnabled && (e.style.msTouchAction = "none"), a.className = "scroll-content", Array.from(e.childNodes).forEach(function(u) {
                a.appendChild(u)
            }), e.appendChild(a), this.track = new Zh(this), this.size = this.getSize(), this._plugins = sp(this, this.options.plugins);
            var i = e.scrollLeft,
                o = e.scrollTop;
            e.scrollLeft = e.scrollTop = 0, this.setPosition(i, o, {
                withoutCallbacks: !0
            });
            var s = window.ResizeObserver;
            typeof s == "function" && (this._observer = new s(function() {
                n.update()
            }), this._observer.observe(a)), N.set(e, this), requestAnimationFrame(function() {
                n._init()
            })
        }
        return Object.defineProperty(t.prototype, "parent", {
            get: function() {
                for (var e = this.containerEl.parentElement; e;) {
                    var r = N.get(e);
                    if (r) return r;
                    e = e.parentElement
                }
                return null
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "scrollTop", {
            get: function() {
                return this.offset.y
            },
            set: function(e) {
                this.setPosition(this.scrollLeft, e)
            },
            enumerable: !0,
            configurable: !0
        }), Object.defineProperty(t.prototype, "scrollLeft", {
            get: function() {
                return this.offset.x
            },
            set: function(e) {
                this.setPosition(e, this.scrollTop)
            },
            enumerable: !0,
            configurable: !0
        }), t.prototype.getSize = function() {
            return Qh(this)
        }, t.prototype.update = function() {
            tp(this), this._plugins.forEach(function(e) {
                e.onUpdate()
            })
        }, t.prototype.isVisible = function(e) {
            return Yh(this, e)
        }, t.prototype.setPosition = function(e, r, n) {
            var a = this;
            e === void 0 && (e = this.offset.x), r === void 0 && (r = this.offset.y), n === void 0 && (n = {});
            var i = ep(this, e, r);
            !i || n.withoutCallbacks || this._listeners.forEach(function(o) {
                o.call(a, i)
            })
        }, t.prototype.scrollTo = function(e, r, n, a) {
            e === void 0 && (e = this.offset.x), r === void 0 && (r = this.offset.y), n === void 0 && (n = 0), a === void 0 && (a = {}), rp(this, e, r, n, a)
        }, t.prototype.scrollIntoView = function(e, r) {
            r === void 0 && (r = {}), ap(this, e, r)
        }, t.prototype.addListener = function(e) {
            if (typeof e != "function") throw new TypeError("[smooth-scrollbar] scrolling listener should be a function");
            this._listeners.add(e)
        }, t.prototype.removeListener = function(e) {
            this._listeners.delete(e)
        }, t.prototype.addTransformableMomentum = function(e, r, n, a) {
            this._updateDebounced();
            var i = this._plugins.reduce(function(s, u) {
                    return u.transformDelta(s, n) || s
                }, {
                    x: e,
                    y: r
                }),
                o = !this._shouldPropagateMomentum(i.x, i.y);
            o && this.addMomentum(i.x, i.y), a && a.call(this, o)
        }, t.prototype.addMomentum = function(e, r) {
            this.setMomentum(this._momentum.x + e, this._momentum.y + r)
        }, t.prototype.setMomentum = function(e, r) {
            this.limit.x === 0 && (e = 0), this.limit.y === 0 && (r = 0), this.options.renderByPixels && (e = Math.round(e), r = Math.round(r)), this._momentum.x = e, this._momentum.y = r
        }, t.prototype.updatePluginOptions = function(e, r) {
            this._plugins.forEach(function(n) {
                n.name === e && Object.assign(n.options, r)
            })
        }, t.prototype.destroy = function() {
            var e = this,
                r = e.containerEl,
                n = e.contentEl;
            Uh(this), this._listeners.clear(), this.setMomentum(0, 0), cancelAnimationFrame(this._renderID), this._observer && this._observer.disconnect(), N.delete(this.containerEl);
            for (var a = Array.from(n.childNodes); r.firstChild;) r.removeChild(r.firstChild);
            a.forEach(function(i) {
                r.appendChild(i)
            }), V(r, {
                overflow: ""
            }), r.scrollTop = this.scrollTop, r.scrollLeft = this.scrollLeft, this._plugins.forEach(function(i) {
                i.onDestroy()
            }), this._plugins.length = 0
        }, t.prototype._init = function() {
            var e = this;
            this.update(), Object.keys(ua).forEach(function(r) {
                ua[r](e)
            }), this._plugins.forEach(function(r) {
                r.onInit()
            }), this._render()
        }, t.prototype._updateDebounced = function() {
            this.update()
        }, t.prototype._shouldPropagateMomentum = function(e, r) {
            e === void 0 && (e = 0), r === void 0 && (r = 0);
            var n = this,
                a = n.options,
                i = n.offset,
                o = n.limit;
            if (!a.continuousScrolling) return !1;
            o.x === 0 && o.y === 0 && this._updateDebounced();
            var s = P(e + i.x, 0, o.x),
                u = P(r + i.y, 0, o.y),
                c = !0;
            return c = c && s === i.x, c = c && u === i.y, c = c && (i.x === o.x || i.x === 0 || i.y === o.y || i.y === 0), c
        }, t.prototype._render = function() {
            var e = this._momentum;
            if (e.x || e.y) {
                var r = this._nextTick("x"),
                    n = this._nextTick("y");
                e.x = r.momentum, e.y = n.momentum, this.setPosition(r.position, n.position)
            }
            var a = L({}, this._momentum);
            this._plugins.forEach(function(i) {
                i.onRender(a)
            }), this._renderID = requestAnimationFrame(this._render.bind(this))
        }, t.prototype._nextTick = function(e) {
            var r = this,
                n = r.options,
                a = r.offset,
                i = r._momentum,
                o = a[e],
                s = i[e];
            if (Math.abs(s) <= .1) return {
                momentum: 0,
                position: o + s
            };
            var u = s * (1 - n.damping);
            return n.renderByPixels && (u |= 0), {
                momentum: u,
                position: o + s - u
            }
        }, W([Ei(100, {
            leading: !0
        })], t.prototype, "_updateDebounced", null), t
    }(),
    $p = "rgba(222, 222, 222, .75)",
    Sp = "rgba(0, 0, 0, .5)",
    wp = `
[data-scrollbar] {
  display: block;
  position: relative;
}

.scroll-content {
  display: flow-root;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}

.scrollbar-track {
  position: absolute;
  opacity: 0;
  z-index: 1;
  background: ` + $p + `;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-transition: opacity 0.5s 0.5s ease-out;
          transition: opacity 0.5s 0.5s ease-out;
}
.scrollbar-track.show,
.scrollbar-track:hover {
  opacity: 1;
  -webkit-transition-delay: 0s;
          transition-delay: 0s;
}

.scrollbar-track-x {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
}
.scrollbar-track-y {
  top: 0;
  right: 0;
  width: 8px;
  height: 100%;
}
.scrollbar-thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: ` + Sp + `;
  border-radius: 4px;
}
`,
    _i = "smooth-scrollbar-style",
    te = !1;

function fa() {
    if (!(te || typeof window > "u")) {
        var t = document.createElement("style");
        t.id = _i, t.textContent = wp, document.head && document.head.appendChild(t), te = !0
    }
}

function Op() {
    if (!(!te || typeof window > "u")) {
        var t = document.getElementById(_i);
        !t || !t.parentNode || (t.parentNode.removeChild(t), te = !1)
    }
}
var Ai = function(t) {
    Di(e, t);

    function e() {
        return t !== null && t.apply(this, arguments) || this
    }
    return e.init = function(r, n) {
        if (!r || r.nodeType !== 1) throw new TypeError("expect element to be DOM Element, but got " + r);
        return fa(), N.has(r) ? N.get(r) : new ca(r, n)
    }, e.initAll = function(r) {
        return Array.from(document.querySelectorAll("[data-scrollbar]"), function(n) {
            return e.init(n, r)
        })
    }, e.has = function(r) {
        return N.has(r)
    }, e.get = function(r) {
        return N.get(r)
    }, e.getAll = function() {
        return Array.from(N.values())
    }, e.destroy = function(r) {
        var n = N.get(r);
        n && n.destroy()
    }, e.destroyAll = function() {
        N.forEach(function(r) {
            r.destroy()
        })
    }, e.use = function() {
        for (var r = [], n = 0; n < arguments.length; n++) r[n] = arguments[n];
        return op.apply(void 0, r)
    }, e.attachStyle = function() {
        return fa()
    }, e.detachStyle = function() {
        return Op()
    }, e.version = "8.8.1", e.ScrollbarPlugin = ip, e
}(ca);
class ji extends Ai.ScrollbarPlugin {
    constructor() {
        super(...arguments), this._remainMomentum = {
            x: 0,
            y: 0
        }
    }
    transformDelta(e) {
        const {
            limit: r,
            offset: n
        } = this.scrollbar, a = this._remainMomentum.x + e.x, i = this._remainMomentum.y + e.y;
        return this.scrollbar.setMomentum(Math.max(-n.x, Math.min(a, r.x - n.x)), Math.max(-n.y, Math.min(i, r.y - n.y))), {
            x: 0,
            y: 0
        }
    }
    onRender(e) {
        Object.assign(this._remainMomentum, e)
    }
}
ji.pluginName = "edgeEasing";
class _p {
    constructor() {
        this.class = {
            Scrollbar: Ai, ScrollTrigger: se.ScrollTrigger
        }, this.damping = Cr() ? .06 : .07, Mi() ? document.documentElement.classList.add("mobile") : this.initScrollbar(), Cr() && document.documentElement.classList.add("firefox"), Ci() && document.documentElement.classList.add("webp"), this.animation()
    }
    animation() {
        se.ScrollTrigger.batch("[data-reveal]", {
            interval: .1,
            batchMax: 200,
            onEnter: e => ue.fromTo(e, {
                opacity: 0,
                y: 100
            }, {
                duration: 1.7,
                opacity: 1,
                y: 0,
                stagger: {
                    each: .1,
                    grid: [0, 150]
                },
                ease: "power2.out"
            }),
            once: !0,
            start: "top 95%+=100"
        })
    }
    fixClass(e) {
        e > 100 ? document.body.classList.add("fix") : document.body.classList.remove("fix")
    }
    initScrollbar() {
        this.class.Scrollbar.use(ji), ue.registerPlugin(se.ScrollTrigger), ue.config({
            nullTargetWarn: !1
        });
        let e = this.class.Scrollbar.init(document.getElementById("smooth"), {
            damping: this.damping,
            alwaysShowTracks: !1,
            delegateTo: document,
            direction: !0
        });
        this.scroll = e;
        let r = document.getElementById("smooth-scrollbar-style");
        r != null && r.remove(), this.class.ScrollTrigger.scrollerProxy("body", {
            scrollTop(n) {
                return arguments.length && (e.scrollTop = n), e.scrollTop
            },
            scrollLeft(n) {
                return arguments.length && (e.scrollLeft = n), e.scrollLeft
            }
        }), this.scroll.addListener(this.class.ScrollTrigger.update), this.scroll.addListener(n => {
            let a = n.offset.y,
                i = n.offset.x;
            this.fixClass(a), this.class.ScrollTrigger.refresh(), this.direction ? document.documentElement.classList.contains("stop") ? e.setPosition(parseInt(window.sessionStorage.getItem("x")), 0) : window.sessionStorage.setItem("x", i) : document.documentElement.classList.contains("stop") ? e.setPosition(0, parseInt(window.sessionStorage.getItem("y"))) : window.sessionStorage.setItem("y", a)
        }), document.querySelectorAll(".scrollbar-track-y, .scrollbar-track-x").forEach(n => n.addEventListener("mousedown", () => document.body.classList.add("grab"))), document.querySelectorAll(".scrollbar-track-y, .scrollbar-track-x").forEach(n => n.addEventListener("mouseup", () => document.body.classList.remove("grab")))
    }
}
export {
    _p as S, Pp as a, xp as g, Mi as i
};