function $s(e, t) {
    const n = Object.create(null),
        r = e.split(",");
    for (let o = 0; o < r.length; o++) n[r[o]] = !0;
    return t ? o => !!n[o.toLowerCase()] : o => !!n[o]
}
const ge = {},
    bn = [],
    st = () => {},
    gf = () => !1,
    _f = /^on[^a-z]/,
    mr = e => _f.test(e),
    Hs = e => e.startsWith("onUpdate:"),
    Ce = Object.assign,
    js = (e, t) => {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1)
    },
    yf = Object.prototype.hasOwnProperty,
    le = (e, t) => yf.call(e, t),
    J = Array.isArray,
    vn = e => pr(e) === "[object Map]",
    Pl = e => pr(e) === "[object Set]",
    bf = e => pr(e) === "[object RegExp]",
    Z = e => typeof e == "function",
    ye = e => typeof e == "string",
    Bs = e => typeof e == "symbol",
    pe = e => e !== null && typeof e == "object",
    Sl = e => pe(e) && Z(e.then) && Z(e.catch),
    Il = Object.prototype.toString,
    pr = e => Il.call(e),
    vf = e => pr(e).slice(8, -1),
    Al = e => pr(e) === "[object Object]",
    Ws = e => ye(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e,
    qn = $s(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),
    Zr = e => {
        const t = Object.create(null);
        return n => t[n] || (t[n] = e(n))
    },
    wf = /-(\w)/g,
    pt = Zr(e => e.replace(wf, (t, n) => n ? n.toUpperCase() : "")),
    Ef = /\B([A-Z])/g,
    nn = Zr(e => e.replace(Ef, "-$1").toLowerCase()),
    eo = Zr(e => e.charAt(0).toUpperCase() + e.slice(1)),
    ko = Zr(e => e ? `on${eo(e)}` : ""),
    sr = (e, t) => !Object.is(e, t),
    wn = (e, t) => {
        for (let n = 0; n < e.length; n++) e[n](t)
    },
    Dr = (e, t, n) => {
        Object.defineProperty(e, t, {
            configurable: !0,
            enumerable: !1,
            value: n
        })
    },
    Xo = e => {
        const t = parseFloat(e);
        return isNaN(t) ? e : t
    },
    Ol = e => {
        const t = ye(e) ? Number(e) : NaN;
        return isNaN(t) ? e : t
    };
let Si;
const Ko = () => Si || (Si = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function to(e) {
    if (J(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) {
            const r = e[n],
                o = ye(r) ? kf(r) : to(r);
            if (o)
                for (const s in o) t[s] = o[s]
        }
        return t
    } else {
        if (ye(e)) return e;
        if (pe(e)) return e
    }
}
const Tf = /;(?![^(]*\))/g,
    Cf = /:([^]+)/,
    Lf = /\/\*[^]*?\*\//g;

function kf(e) {
    const t = {};
    return e.replace(Lf, "").split(Tf).forEach(n => {
        if (n) {
            const r = n.split(Cf);
            r.length > 1 && (t[r[0].trim()] = r[1].trim())
        }
    }), t
}

function no(e) {
    let t = "";
    if (ye(e)) t = e;
    else if (J(e))
        for (let n = 0; n < e.length; n++) {
            const r = no(e[n]);
            r && (t += r + " ")
        } else if (pe(e))
            for (const n in e) e[n] && (t += n + " ");
    return t.trim()
}

function Cv(e) {
    if (!e) return null;
    let {
        class: t,
        style: n
    } = e;
    return t && !ye(t) && (e.class = no(t)), n && (e.style = to(n)), e
}
const Rf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",
    Pf = $s(Rf);

function Nl(e) {
    return !!e || e === ""
}
const Lv = e => ye(e) ? e : e == null ? "" : J(e) || pe(e) && (e.toString === Il || !Z(e.toString)) ? JSON.stringify(e, xl, 2) : String(e),
    xl = (e, t) => t && t.__v_isRef ? xl(e, t.value) : vn(t) ? {
        [`Map(${t.size})`]: [...t.entries()].reduce((n, [r, o]) => (n[`${r} =>`] = o, n), {})
    } : Pl(t) ? {
        [`Set(${t.size})`]: [...t.values()]
    } : pe(t) && !J(t) && !Al(t) ? String(t) : t;
let Ve;
class zl {
    constructor(t = !1) {
        this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this.parent = Ve, !t && Ve && (this.index = (Ve.scopes || (Ve.scopes = [])).push(this) - 1)
    }
    get active() {
        return this._active
    }
    run(t) {
        if (this._active) {
            const n = Ve;
            try {
                return Ve = this, t()
            } finally {
                Ve = n
            }
        }
    }
    on() {
        Ve = this
    }
    off() {
        Ve = this.parent
    }
    stop(t) {
        if (this._active) {
            let n, r;
            for (n = 0, r = this.effects.length; n < r; n++) this.effects[n].stop();
            for (n = 0, r = this.cleanups.length; n < r; n++) this.cleanups[n]();
            if (this.scopes)
                for (n = 0, r = this.scopes.length; n < r; n++) this.scopes[n].stop(!0);
            if (!this.detached && this.parent && !t) {
                const o = this.parent.scopes.pop();
                o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index)
            }
            this.parent = void 0, this._active = !1
        }
    }
}

function ro(e) {
    return new zl(e)
}

function Sf(e, t = Ve) {
    t && t.active && t.effects.push(e)
}

function Dl() {
    return Ve
}

function If(e) {
    Ve && Ve.cleanups.push(e)
}
const Vs = e => {
        const t = new Set(e);
        return t.w = 0, t.n = 0, t
    },
    Fl = e => (e.w & Mt) > 0,
    Ml = e => (e.n & Mt) > 0,
    Af = ({
        deps: e
    }) => {
        if (e.length)
            for (let t = 0; t < e.length; t++) e[t].w |= Mt
    },
    Of = e => {
        const {
            deps: t
        } = e;
        if (t.length) {
            let n = 0;
            for (let r = 0; r < t.length; r++) {
                const o = t[r];
                Fl(o) && !Ml(o) ? o.delete(e) : t[n++] = o, o.w &= ~Mt, o.n &= ~Mt
            }
            t.length = n
        }
    },
    Fr = new WeakMap;
let Vn = 0,
    Mt = 1;
const qo = 30;
let rt;
const Jt = Symbol(""),
    Yo = Symbol("");
class Xs {
    constructor(t, n = null, r) {
        this.fn = t, this.scheduler = n, this.active = !0, this.deps = [], this.parent = void 0, Sf(this, r)
    }
    run() {
        if (!this.active) return this.fn();
        let t = rt,
            n = Dt;
        for (; t;) {
            if (t === this) return;
            t = t.parent
        }
        try {
            return this.parent = rt, rt = this, Dt = !0, Mt = 1 << ++Vn, Vn <= qo ? Af(this) : Ii(this), this.fn()
        } finally {
            Vn <= qo && Of(this), Mt = 1 << --Vn, rt = this.parent, Dt = n, this.parent = void 0, this.deferStop && this.stop()
        }
    }
    stop() {
        rt === this ? this.deferStop = !0 : this.active && (Ii(this), this.onStop && this.onStop(), this.active = !1)
    }
}

function Ii(e) {
    const {
        deps: t
    } = e;
    if (t.length) {
        for (let n = 0; n < t.length; n++) t[n].delete(e);
        t.length = 0
    }
}
let Dt = !0;
const Ul = [];

function xn() {
    Ul.push(Dt), Dt = !1
}

function zn() {
    const e = Ul.pop();
    Dt = e === void 0 ? !0 : e
}

function He(e, t, n) {
    if (Dt && rt) {
        let r = Fr.get(e);
        r || Fr.set(e, r = new Map);
        let o = r.get(n);
        o || r.set(n, o = Vs()), $l(o)
    }
}

function $l(e, t) {
    let n = !1;
    Vn <= qo ? Ml(e) || (e.n |= Mt, n = !Fl(e)) : n = !e.has(rt), n && (e.add(rt), rt.deps.push(e))
}

function Et(e, t, n, r, o, s) {
    const i = Fr.get(e);
    if (!i) return;
    let a = [];
    if (t === "clear") a = [...i.values()];
    else if (n === "length" && J(e)) {
        const l = Number(r);
        i.forEach((c, u) => {
            (u === "length" || u >= l) && a.push(c)
        })
    } else switch (n !== void 0 && a.push(i.get(n)), t) {
        case "add":
            J(e) ? Ws(n) && a.push(i.get("length")) : (a.push(i.get(Jt)), vn(e) && a.push(i.get(Yo)));
            break;
        case "delete":
            J(e) || (a.push(i.get(Jt)), vn(e) && a.push(i.get(Yo)));
            break;
        case "set":
            vn(e) && a.push(i.get(Jt));
            break
    }
    if (a.length === 1) a[0] && Go(a[0]);
    else {
        const l = [];
        for (const c of a) c && l.push(...c);
        Go(Vs(l))
    }
}

function Go(e, t) {
    const n = J(e) ? e : [...e];
    for (const r of n) r.computed && Ai(r);
    for (const r of n) r.computed || Ai(r)
}

function Ai(e, t) {
    (e !== rt || e.allowRecurse) && (e.scheduler ? e.scheduler() : e.run())
}

function Nf(e, t) {
    var n;
    return (n = Fr.get(e)) == null ? void 0 : n.get(t)
}
const xf = $s("__proto__,__v_isRef,__isVue"),
    Hl = new Set(Object.getOwnPropertyNames(Symbol).filter(e => e !== "arguments" && e !== "caller").map(e => Symbol[e]).filter(Bs)),
    zf = Ks(),
    Df = Ks(!1, !0),
    Ff = Ks(!0),
    Oi = Mf();

function Mf() {
    const e = {};
    return ["includes", "indexOf", "lastIndexOf"].forEach(t => {
        e[t] = function(...n) {
            const r = ie(this);
            for (let s = 0, i = this.length; s < i; s++) He(r, "get", s + "");
            const o = r[t](...n);
            return o === -1 || o === !1 ? r[t](...n.map(ie)) : o
        }
    }), ["push", "pop", "shift", "unshift", "splice"].forEach(t => {
        e[t] = function(...n) {
            xn();
            const r = ie(this)[t].apply(this, n);
            return zn(), r
        }
    }), e
}

function Uf(e) {
    const t = ie(this);
    return He(t, "has", e), t.hasOwnProperty(e)
}

function Ks(e = !1, t = !1) {
    return function(r, o, s) {
        if (o === "__v_isReactive") return !e;
        if (o === "__v_isReadonly") return e;
        if (o === "__v_isShallow") return t;
        if (o === "__v_raw" && s === (e ? t ? td : Xl : t ? Vl : Wl).get(r)) return r;
        const i = J(r);
        if (!e) {
            if (i && le(Oi, o)) return Reflect.get(Oi, o, s);
            if (o === "hasOwnProperty") return Uf
        }
        const a = Reflect.get(r, o, s);
        return (Bs(o) ? Hl.has(o) : xf(o)) || (e || He(r, "get", o), t) ? a : he(a) ? i && Ws(o) ? a : a.value : pe(a) ? e ? ql(a) : gt(a) : a
    }
}
const $f = jl(),
    Hf = jl(!0);

function jl(e = !1) {
    return function(n, r, o, s) {
        let i = n[r];
        if (en(i) && he(i) && !he(o)) return !1;
        if (!e && (!Mr(o) && !en(o) && (i = ie(i), o = ie(o)), !J(n) && he(i) && !he(o))) return i.value = o, !0;
        const a = J(n) && Ws(r) ? Number(r) < n.length : le(n, r),
            l = Reflect.set(n, r, o, s);
        return n === ie(s) && (a ? sr(o, i) && Et(n, "set", r, o) : Et(n, "add", r, o)), l
    }
}

function jf(e, t) {
    const n = le(e, t);
    e[t];
    const r = Reflect.deleteProperty(e, t);
    return r && n && Et(e, "delete", t, void 0), r
}

function Bf(e, t) {
    const n = Reflect.has(e, t);
    return (!Bs(t) || !Hl.has(t)) && He(e, "has", t), n
}

function Wf(e) {
    return He(e, "iterate", J(e) ? "length" : Jt), Reflect.ownKeys(e)
}
const Bl = {
        get: zf,
        set: $f,
        deleteProperty: jf,
        has: Bf,
        ownKeys: Wf
    },
    Vf = {
        get: Ff,
        set(e, t) {
            return !0
        },
        deleteProperty(e, t) {
            return !0
        }
    },
    Xf = Ce({}, Bl, {
        get: Df,
        set: Hf
    }),
    qs = e => e,
    oo = e => Reflect.getPrototypeOf(e);

function Er(e, t, n = !1, r = !1) {
    e = e.__v_raw;
    const o = ie(e),
        s = ie(t);
    n || (t !== s && He(o, "get", t), He(o, "get", s));
    const {
        has: i
    } = oo(o), a = r ? qs : n ? Js : ir;
    if (i.call(o, t)) return a(e.get(t));
    if (i.call(o, s)) return a(e.get(s));
    e !== o && e.get(t)
}

function Tr(e, t = !1) {
    const n = this.__v_raw,
        r = ie(n),
        o = ie(e);
    return t || (e !== o && He(r, "has", e), He(r, "has", o)), e === o ? n.has(e) : n.has(e) || n.has(o)
}

function Cr(e, t = !1) {
    return e = e.__v_raw, !t && He(ie(e), "iterate", Jt), Reflect.get(e, "size", e)
}

function Ni(e) {
    e = ie(e);
    const t = ie(this);
    return oo(t).has.call(t, e) || (t.add(e), Et(t, "add", e, e)), this
}

function xi(e, t) {
    t = ie(t);
    const n = ie(this),
        {
            has: r,
            get: o
        } = oo(n);
    let s = r.call(n, e);
    s || (e = ie(e), s = r.call(n, e));
    const i = o.call(n, e);
    return n.set(e, t), s ? sr(t, i) && Et(n, "set", e, t) : Et(n, "add", e, t), this
}

function zi(e) {
    const t = ie(this),
        {
            has: n,
            get: r
        } = oo(t);
    let o = n.call(t, e);
    o || (e = ie(e), o = n.call(t, e)), r && r.call(t, e);
    const s = t.delete(e);
    return o && Et(t, "delete", e, void 0), s
}

function Di() {
    const e = ie(this),
        t = e.size !== 0,
        n = e.clear();
    return t && Et(e, "clear", void 0, void 0), n
}

function Lr(e, t) {
    return function(r, o) {
        const s = this,
            i = s.__v_raw,
            a = ie(i),
            l = t ? qs : e ? Js : ir;
        return !e && He(a, "iterate", Jt), i.forEach((c, u) => r.call(o, l(c), l(u), s))
    }
}

function kr(e, t, n) {
    return function(...r) {
        const o = this.__v_raw,
            s = ie(o),
            i = vn(s),
            a = e === "entries" || e === Symbol.iterator && i,
            l = e === "keys" && i,
            c = o[e](...r),
            u = n ? qs : t ? Js : ir;
        return !t && He(s, "iterate", l ? Yo : Jt), {
            next() {
                const {
                    value: f,
                    done: d
                } = c.next();
                return d ? {
                    value: f,
                    done: d
                } : {
                    value: a ? [u(f[0]), u(f[1])] : u(f),
                    done: d
                }
            },
            [Symbol.iterator]() {
                return this
            }
        }
    }
}

function Rt(e) {
    return function(...t) {
        return e === "delete" ? !1 : this
    }
}

function Kf() {
    const e = {
            get(s) {
                return Er(this, s)
            },
            get size() {
                return Cr(this)
            },
            has: Tr,
            add: Ni,
            set: xi,
            delete: zi,
            clear: Di,
            forEach: Lr(!1, !1)
        },
        t = {
            get(s) {
                return Er(this, s, !1, !0)
            },
            get size() {
                return Cr(this)
            },
            has: Tr,
            add: Ni,
            set: xi,
            delete: zi,
            clear: Di,
            forEach: Lr(!1, !0)
        },
        n = {
            get(s) {
                return Er(this, s, !0)
            },
            get size() {
                return Cr(this, !0)
            },
            has(s) {
                return Tr.call(this, s, !0)
            },
            add: Rt("add"),
            set: Rt("set"),
            delete: Rt("delete"),
            clear: Rt("clear"),
            forEach: Lr(!0, !1)
        },
        r = {
            get(s) {
                return Er(this, s, !0, !0)
            },
            get size() {
                return Cr(this, !0)
            },
            has(s) {
                return Tr.call(this, s, !0)
            },
            add: Rt("add"),
            set: Rt("set"),
            delete: Rt("delete"),
            clear: Rt("clear"),
            forEach: Lr(!0, !0)
        };
    return ["keys", "values", "entries", Symbol.iterator].forEach(s => {
        e[s] = kr(s, !1, !1), n[s] = kr(s, !0, !1), t[s] = kr(s, !1, !0), r[s] = kr(s, !0, !0)
    }), [e, n, t, r]
}
const [qf, Yf, Gf, Jf] = Kf();

function Ys(e, t) {
    const n = t ? e ? Jf : Gf : e ? Yf : qf;
    return (r, o, s) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? r : Reflect.get(le(n, o) && o in r ? n : r, o, s)
}
const Qf = {
        get: Ys(!1, !1)
    },
    Zf = {
        get: Ys(!1, !0)
    },
    ed = {
        get: Ys(!0, !1)
    },
    Wl = new WeakMap,
    Vl = new WeakMap,
    Xl = new WeakMap,
    td = new WeakMap;

function nd(e) {
    switch (e) {
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0
    }
}

function rd(e) {
    return e.__v_skip || !Object.isExtensible(e) ? 0 : nd(vf(e))
}

function gt(e) {
    return en(e) ? e : Gs(e, !1, Bl, Qf, Wl)
}

function Kl(e) {
    return Gs(e, !1, Xf, Zf, Vl)
}

function ql(e) {
    return Gs(e, !0, Vf, ed, Xl)
}

function Gs(e, t, n, r, o) {
    if (!pe(e) || e.__v_raw && !(t && e.__v_isReactive)) return e;
    const s = o.get(e);
    if (s) return s;
    const i = rd(e);
    if (i === 0) return e;
    const a = new Proxy(e, i === 2 ? r : n);
    return o.set(e, a), a
}

function wt(e) {
    return en(e) ? wt(e.__v_raw) : !!(e && e.__v_isReactive)
}

function en(e) {
    return !!(e && e.__v_isReadonly)
}

function Mr(e) {
    return !!(e && e.__v_isShallow)
}

function Yl(e) {
    return wt(e) || en(e)
}

function ie(e) {
    const t = e && e.__v_raw;
    return t ? ie(t) : e
}

function Ln(e) {
    return Dr(e, "__v_skip", !0), e
}
const ir = e => pe(e) ? gt(e) : e,
    Js = e => pe(e) ? ql(e) : e;

function Gl(e) {
    Dt && rt && (e = ie(e), $l(e.dep || (e.dep = Vs())))
}

function Jl(e, t) {
    e = ie(e);
    const n = e.dep;
    n && Go(n)
}

function he(e) {
    return !!(e && e.__v_isRef === !0)
}

function Se(e) {
    return Ql(e, !1)
}

function Jo(e) {
    return Ql(e, !0)
}

function Ql(e, t) {
    return he(e) ? e : new od(e, t)
}
class od {
    constructor(t, n) {
        this.__v_isShallow = n, this.dep = void 0, this.__v_isRef = !0, this._rawValue = n ? t : ie(t), this._value = n ? t : ir(t)
    }
    get value() {
        return Gl(this), this._value
    }
    set value(t) {
        const n = this.__v_isShallow || Mr(t) || en(t);
        t = n ? t : ie(t), sr(t, this._rawValue) && (this._rawValue = t, this._value = n ? t : ir(t), Jl(this))
    }
}

function Ee(e) {
    return he(e) ? e.value : e
}
const sd = {
    get: (e, t, n) => Ee(Reflect.get(e, t, n)),
    set: (e, t, n, r) => {
        const o = e[t];
        return he(o) && !he(n) ? (o.value = n, !0) : Reflect.set(e, t, n, r)
    }
};

function Zl(e) {
    return wt(e) ? e : new Proxy(e, sd)
}

function id(e) {
    const t = J(e) ? new Array(e.length) : {};
    for (const n in e) t[n] = ec(e, n);
    return t
}
class ad {
    constructor(t, n, r) {
        this._object = t, this._key = n, this._defaultValue = r, this.__v_isRef = !0
    }
    get value() {
        const t = this._object[this._key];
        return t === void 0 ? this._defaultValue : t
    }
    set value(t) {
        this._object[this._key] = t
    }
    get dep() {
        return Nf(ie(this._object), this._key)
    }
}
class ld {
    constructor(t) {
        this._getter = t, this.__v_isRef = !0, this.__v_isReadonly = !0
    }
    get value() {
        return this._getter()
    }
}

function Qs(e, t, n) {
    return he(e) ? e : Z(e) ? new ld(e) : pe(e) && arguments.length > 1 ? ec(e, t, n) : Se(e)
}

function ec(e, t, n) {
    const r = e[t];
    return he(r) ? r : new ad(e, t, n)
}
class cd {
    constructor(t, n, r, o) {
        this._setter = n, this.dep = void 0, this.__v_isRef = !0, this.__v_isReadonly = !1, this._dirty = !0, this.effect = new Xs(t, () => {
            this._dirty || (this._dirty = !0, Jl(this))
        }), this.effect.computed = this, this.effect.active = this._cacheable = !o, this.__v_isReadonly = r
    }
    get value() {
        const t = ie(this);
        return Gl(t), (t._dirty || !t._cacheable) && (t._dirty = !1, t._value = t.effect.run()), t._value
    }
    set value(t) {
        this._setter(t)
    }
}

function ud(e, t, n = !1) {
    let r, o;
    const s = Z(e);
    return s ? (r = e, o = st) : (r = e.get, o = e.set), new cd(r, o, s || !o, n)
}

function Ft(e, t, n, r) {
    let o;
    try {
        o = r ? e(...r) : e()
    } catch (s) {
        Dn(s, t, n)
    }
    return o
}

function et(e, t, n, r) {
    if (Z(e)) {
        const s = Ft(e, t, n, r);
        return s && Sl(s) && s.catch(i => {
            Dn(i, t, n)
        }), s
    }
    const o = [];
    for (let s = 0; s < e.length; s++) o.push(et(e[s], t, n, r));
    return o
}

function Dn(e, t, n, r = !0) {
    const o = t ? t.vnode : null;
    if (t) {
        let s = t.parent;
        const i = t.proxy,
            a = n;
        for (; s;) {
            const c = s.ec;
            if (c) {
                for (let u = 0; u < c.length; u++)
                    if (c[u](e, i, a) === !1) return
            }
            s = s.parent
        }
        const l = t.appContext.config.errorHandler;
        if (l) {
            Ft(l, null, 10, [e, i, a]);
            return
        }
    }
    fd(e, n, o, r)
}

function fd(e, t, n, r = !0) {
    console.error(e)
}
let ar = !1,
    Qo = !1;
const Ne = [];
let mt = 0;
const En = [];
let bt = null,
    Xt = 0;
const tc = Promise.resolve();
let Zs = null;

function rn(e) {
    const t = Zs || tc;
    return e ? t.then(this ? e.bind(this) : e) : t
}

function dd(e) {
    let t = mt + 1,
        n = Ne.length;
    for (; t < n;) {
        const r = t + n >>> 1;
        lr(Ne[r]) < e ? t = r + 1 : n = r
    }
    return t
}

function so(e) {
    (!Ne.length || !Ne.includes(e, ar && e.allowRecurse ? mt + 1 : mt)) && (e.id == null ? Ne.push(e) : Ne.splice(dd(e.id), 0, e), nc())
}

function nc() {
    !ar && !Qo && (Qo = !0, Zs = tc.then(oc))
}

function hd(e) {
    const t = Ne.indexOf(e);
    t > mt && Ne.splice(t, 1)
}

function rc(e) {
    J(e) ? En.push(...e) : (!bt || !bt.includes(e, e.allowRecurse ? Xt + 1 : Xt)) && En.push(e), nc()
}

function Fi(e, t = ar ? mt + 1 : 0) {
    for (; t < Ne.length; t++) {
        const n = Ne[t];
        n && n.pre && (Ne.splice(t, 1), t--, n())
    }
}

function Ur(e) {
    if (En.length) {
        const t = [...new Set(En)];
        if (En.length = 0, bt) {
            bt.push(...t);
            return
        }
        for (bt = t, bt.sort((n, r) => lr(n) - lr(r)), Xt = 0; Xt < bt.length; Xt++) bt[Xt]();
        bt = null, Xt = 0
    }
}
const lr = e => e.id == null ? 1 / 0 : e.id,
    md = (e, t) => {
        const n = lr(e) - lr(t);
        if (n === 0) {
            if (e.pre && !t.pre) return -1;
            if (t.pre && !e.pre) return 1
        }
        return n
    };

function oc(e) {
    Qo = !1, ar = !0, Ne.sort(md);
    const t = st;
    try {
        for (mt = 0; mt < Ne.length; mt++) {
            const n = Ne[mt];
            n && n.active !== !1 && Ft(n, null, 14)
        }
    } finally {
        mt = 0, Ne.length = 0, Ur(), ar = !1, Zs = null, (Ne.length || En.length) && oc()
    }
}

function pd(e, t, ...n) {
    if (e.isUnmounted) return;
    const r = e.vnode.props || ge;
    let o = n;
    const s = t.startsWith("update:"),
        i = s && t.slice(7);
    if (i && i in r) {
        const u = `${i==="modelValue"?"model":i}Modifiers`,
            {
                number: f,
                trim: d
            } = r[u] || ge;
        d && (o = n.map(p => ye(p) ? p.trim() : p)), f && (o = n.map(Xo))
    }
    let a, l = r[a = ko(t)] || r[a = ko(pt(t))];
    !l && s && (l = r[a = ko(nn(t))]), l && et(l, e, 6, o);
    const c = r[a + "Once"];
    if (c) {
        if (!e.emitted) e.emitted = {};
        else if (e.emitted[a]) return;
        e.emitted[a] = !0, et(c, e, 6, o)
    }
}

function sc(e, t, n = !1) {
    const r = t.emitsCache,
        o = r.get(e);
    if (o !== void 0) return o;
    const s = e.emits;
    let i = {},
        a = !1;
    if (!Z(e)) {
        const l = c => {
            const u = sc(c, t, !0);
            u && (a = !0, Ce(i, u))
        };
        !n && t.mixins.length && t.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l)
    }
    return !s && !a ? (pe(e) && r.set(e, null), null) : (J(s) ? s.forEach(l => i[l] = null) : Ce(i, s), pe(e) && r.set(e, i), i)
}

function io(e, t) {
    return !e || !mr(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), le(e, t[0].toLowerCase() + t.slice(1)) || le(e, nn(t)) || le(e, t))
}
let Ie = null,
    ao = null;

function $r(e) {
    const t = Ie;
    return Ie = e, ao = e && e.type.__scopeId || null, t
}

function kv(e) {
    ao = e
}

function Rv() {
    ao = null
}

function ei(e, t = Ie, n) {
    if (!t || e._n) return e;
    const r = (...o) => {
        r._d && Ji(-1);
        const s = $r(t);
        let i;
        try {
            i = e(...o)
        } finally {
            $r(s), r._d && Ji(1)
        }
        return i
    };
    return r._n = !0, r._c = !0, r._d = !0, r
}

function Ro(e) {
    const {
        type: t,
        vnode: n,
        proxy: r,
        withProxy: o,
        props: s,
        propsOptions: [i],
        slots: a,
        attrs: l,
        emit: c,
        render: u,
        renderCache: f,
        data: d,
        setupState: p,
        ctx: g,
        inheritAttrs: v
    } = e;
    let C, b;
    const m = $r(e);
    try {
        if (n.shapeFlag & 4) {
            const y = o || r;
            C = Qe(u.call(y, y, f, s, p, d, g)), b = l
        } else {
            const y = t;
            C = Qe(y.length > 1 ? y(s, {
                attrs: l,
                slots: a,
                emit: c
            }) : y(s, null)), b = t.props ? l : _d(l)
        }
    } catch (y) {
        Qn.length = 0, Dn(y, e, 1), C = _e(Fe)
    }
    let S = C;
    if (b && v !== !1) {
        const y = Object.keys(b),
            {
                shapeFlag: w
            } = S;
        y.length && w & 7 && (i && y.some(Hs) && (b = yd(b, i)), S = Tt(S, b))
    }
    return n.dirs && (S = Tt(S), S.dirs = S.dirs ? S.dirs.concat(n.dirs) : n.dirs), n.transition && (S.transition = n.transition), C = S, $r(m), C
}

function gd(e) {
    let t;
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        if (Rn(r)) {
            if (r.type !== Fe || r.children === "v-if") {
                if (t) return;
                t = r
            }
        } else return
    }
    return t
}
const _d = e => {
        let t;
        for (const n in e)(n === "class" || n === "style" || mr(n)) && ((t || (t = {}))[n] = e[n]);
        return t
    },
    yd = (e, t) => {
        const n = {};
        for (const r in e)(!Hs(r) || !(r.slice(9) in t)) && (n[r] = e[r]);
        return n
    };

function bd(e, t, n) {
    const {
        props: r,
        children: o,
        component: s
    } = e, {
        props: i,
        children: a,
        patchFlag: l
    } = t, c = s.emitsOptions;
    if (t.dirs || t.transition) return !0;
    if (n && l >= 0) {
        if (l & 1024) return !0;
        if (l & 16) return r ? Mi(r, i, c) : !!i;
        if (l & 8) {
            const u = t.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                const d = u[f];
                if (i[d] !== r[d] && !io(c, d)) return !0
            }
        }
    } else return (o || a) && (!a || !a.$stable) ? !0 : r === i ? !1 : r ? i ? Mi(r, i, c) : !0 : !!i;
    return !1
}

function Mi(e, t, n) {
    const r = Object.keys(t);
    if (r.length !== Object.keys(e).length) return !0;
    for (let o = 0; o < r.length; o++) {
        const s = r[o];
        if (t[s] !== e[s] && !io(n, s)) return !0
    }
    return !1
}

function ti({
    vnode: e,
    parent: t
}, n) {
    for (; t && t.subTree === e;)(e = t.vnode).el = n, t = t.parent
}
const ic = e => e.__isSuspense,
    vd = {
        name: "Suspense",
        __isSuspense: !0,
        process(e, t, n, r, o, s, i, a, l, c) {
            e == null ? wd(t, n, r, o, s, i, a, l, c) : Ed(e, t, n, r, o, i, a, l, c)
        },
        hydrate: Td,
        create: ni,
        normalize: Cd
    },
    ac = vd;

function cr(e, t) {
    const n = e.props && e.props[t];
    Z(n) && n()
}

function wd(e, t, n, r, o, s, i, a, l) {
    const {
        p: c,
        o: {
            createElement: u
        }
    } = l, f = u("div"), d = e.suspense = ni(e, o, r, t, f, n, s, i, a, l);
    c(null, d.pendingBranch = e.ssContent, f, null, r, d, s, i), d.deps > 0 ? (cr(e, "onPending"), cr(e, "onFallback"), c(null, e.ssFallback, t, n, r, null, s, i), Tn(d, e.ssFallback)) : d.resolve(!1, !0)
}

function Ed(e, t, n, r, o, s, i, a, {
    p: l,
    um: c,
    o: {
        createElement: u
    }
}) {
    const f = t.suspense = e.suspense;
    f.vnode = t, t.el = e.el;
    const d = t.ssContent,
        p = t.ssFallback,
        {
            activeBranch: g,
            pendingBranch: v,
            isInFallback: C,
            isHydrating: b
        } = f;
    if (v) f.pendingBranch = d, ot(d, v) ? (l(v, d, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 ? f.resolve() : C && (l(g, p, n, r, o, null, s, i, a), Tn(f, p))) : (f.pendingId++, b ? (f.isHydrating = !1, f.activeBranch = v) : c(v, o, f), f.deps = 0, f.effects.length = 0, f.hiddenContainer = u("div"), C ? (l(null, d, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 ? f.resolve() : (l(g, p, n, r, o, null, s, i, a), Tn(f, p))) : g && ot(d, g) ? (l(g, d, n, r, o, f, s, i, a), f.resolve(!0)) : (l(null, d, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0 && f.resolve()));
    else if (g && ot(d, g)) l(g, d, n, r, o, f, s, i, a), Tn(f, d);
    else if (cr(t, "onPending"), f.pendingBranch = d, f.pendingId++, l(null, d, f.hiddenContainer, null, o, f, s, i, a), f.deps <= 0) f.resolve();
    else {
        const {
            timeout: m,
            pendingId: S
        } = f;
        m > 0 ? setTimeout(() => {
            f.pendingId === S && f.fallback(p)
        }, m) : m === 0 && f.fallback(p)
    }
}

function ni(e, t, n, r, o, s, i, a, l, c, u = !1) {
    const {
        p: f,
        m: d,
        um: p,
        n: g,
        o: {
            parentNode: v,
            remove: C
        }
    } = c;
    let b;
    const m = Ld(e);
    m && t != null && t.pendingBranch && (b = t.pendingId, t.deps++);
    const S = e.props ? Ol(e.props.timeout) : void 0,
        y = {
            vnode: e,
            parent: t,
            parentComponent: n,
            isSVG: i,
            container: r,
            hiddenContainer: o,
            anchor: s,
            deps: 0,
            pendingId: 0,
            timeout: typeof S == "number" ? S : -1,
            activeBranch: null,
            pendingBranch: null,
            isInFallback: !0,
            isHydrating: u,
            isUnmounted: !1,
            effects: [],
            resolve(w = !1, A = !1) {
                const {
                    vnode: P,
                    activeBranch: L,
                    pendingBranch: F,
                    pendingId: $,
                    effects: k,
                    parentComponent: O,
                    container: B
                } = y;
                if (y.isHydrating) y.isHydrating = !1;
                else if (!w) {
                    const ne = L && F.transition && F.transition.mode === "out-in";
                    ne && (L.transition.afterLeave = () => {
                        $ === y.pendingId && d(F, B, ee, 0)
                    });
                    let {
                        anchor: ee
                    } = y;
                    L && (ee = g(L), p(L, O, y, !0)), ne || d(F, B, ee, 0)
                }
                Tn(y, F), y.pendingBranch = null, y.isInFallback = !1;
                let U = y.parent,
                    Q = !1;
                for (; U;) {
                    if (U.pendingBranch) {
                        U.effects.push(...k), Q = !0;
                        break
                    }
                    U = U.parent
                }
                Q || rc(k), y.effects = [], m && t && t.pendingBranch && b === t.pendingId && (t.deps--, t.deps === 0 && !A && t.resolve()), cr(P, "onResolve")
            },
            fallback(w) {
                if (!y.pendingBranch) return;
                const {
                    vnode: A,
                    activeBranch: P,
                    parentComponent: L,
                    container: F,
                    isSVG: $
                } = y;
                cr(A, "onFallback");
                const k = g(P),
                    O = () => {
                        y.isInFallback && (f(null, w, F, k, L, null, $, a, l), Tn(y, w))
                    },
                    B = w.transition && w.transition.mode === "out-in";
                B && (P.transition.afterLeave = O), y.isInFallback = !0, p(P, L, null, !0), B || O()
            },
            move(w, A, P) {
                y.activeBranch && d(y.activeBranch, w, A, P), y.container = w
            },
            next() {
                return y.activeBranch && g(y.activeBranch)
            },
            registerDep(w, A) {
                const P = !!y.pendingBranch;
                P && y.deps++;
                const L = w.vnode.el;
                w.asyncDep.catch(F => {
                    Dn(F, w, 0)
                }).then(F => {
                    if (w.isUnmounted || y.isUnmounted || y.pendingId !== w.suspenseId) return;
                    w.asyncResolved = !0;
                    const {
                        vnode: $
                    } = w;
                    ss(w, F, !1), L && ($.el = L);
                    const k = !L && w.subTree.el;
                    A(w, $, v(L || w.subTree.el), L ? null : g(w.subTree), y, i, l), k && C(k), ti(w, $.el), P && --y.deps === 0 && y.resolve()
                })
            },
            unmount(w, A) {
                y.isUnmounted = !0, y.activeBranch && p(y.activeBranch, n, w, A), y.pendingBranch && p(y.pendingBranch, n, w, A)
            }
        };
    return y
}

function Td(e, t, n, r, o, s, i, a, l) {
    const c = t.suspense = ni(t, r, n, e.parentNode, document.createElement("div"), null, o, s, i, a, !0),
        u = l(e, c.pendingBranch = t.ssContent, n, c, s, i);
    return c.deps === 0 && c.resolve(!1, !0), u
}

function Cd(e) {
    const {
        shapeFlag: t,
        children: n
    } = e, r = t & 32;
    e.ssContent = Ui(r ? n.default : n), e.ssFallback = r ? Ui(n.fallback) : _e(Fe)
}

function Ui(e) {
    let t;
    if (Z(e)) {
        const n = kn && e._c;
        n && (e._d = !1, zt()), e = e(), n && (e._d = !0, t = Ze, Ic())
    }
    return J(e) && (e = gd(e)), e = Qe(e), t && !e.dynamicChildren && (e.dynamicChildren = t.filter(n => n !== e)), e
}

function lc(e, t) {
    t && t.pendingBranch ? J(e) ? t.effects.push(...e) : t.effects.push(e) : rc(e)
}

function Tn(e, t) {
    e.activeBranch = t;
    const {
        vnode: n,
        parentComponent: r
    } = e, o = n.el = t.el;
    r && r.subTree === n && (r.vnode.el = o, ti(r, o))
}

function Ld(e) {
    var t;
    return ((t = e.props) == null ? void 0 : t.suspensible) != null && e.props.suspensible !== !1
}

function kd(e, t) {
    return ri(e, null, t)
}
const Rr = {};

function it(e, t, n) {
    return ri(e, t, n)
}

function ri(e, t, {
    immediate: n,
    deep: r,
    flush: o,
    onTrack: s,
    onTrigger: i
} = ge) {
    var a;
    const l = Dl() === ((a = Le) == null ? void 0 : a.scope) ? Le : null;
    let c, u = !1,
        f = !1;
    if (he(e) ? (c = () => e.value, u = Mr(e)) : wt(e) ? (c = () => e, r = !0) : J(e) ? (f = !0, u = e.some(y => wt(y) || Mr(y)), c = () => e.map(y => {
            if (he(y)) return y.value;
            if (wt(y)) return qt(y);
            if (Z(y)) return Ft(y, l, 2)
        })) : Z(e) ? t ? c = () => Ft(e, l, 2) : c = () => {
            if (!(l && l.isUnmounted)) return d && d(), et(e, l, 3, [p])
        } : c = st, t && r) {
        const y = c;
        c = () => qt(y())
    }
    let d, p = y => {
            d = m.onStop = () => {
                Ft(y, l, 4)
            }
        },
        g;
    if (Sn)
        if (p = st, t ? n && et(t, l, 3, [c(), f ? [] : void 0, p]) : c(), o === "sync") {
            const y = _h();
            g = y.__watcherHandles || (y.__watcherHandles = [])
        } else return st;
    let v = f ? new Array(e.length).fill(Rr) : Rr;
    const C = () => {
        if (m.active)
            if (t) {
                const y = m.run();
                (r || u || (f ? y.some((w, A) => sr(w, v[A])) : sr(y, v))) && (d && d(), et(t, l, 3, [y, v === Rr ? void 0 : f && v[0] === Rr ? [] : v, p]), v = y)
            } else m.run()
    };
    C.allowRecurse = !!t;
    let b;
    o === "sync" ? b = C : o === "post" ? b = () => Pe(C, l && l.suspense) : (C.pre = !0, l && (C.id = l.uid), b = () => so(C));
    const m = new Xs(c, b);
    t ? n ? C() : v = m.run() : o === "post" ? Pe(m.run.bind(m), l && l.suspense) : m.run();
    const S = () => {
        m.stop(), l && l.scope && js(l.scope.effects, m)
    };
    return g && g.push(S), S
}

function Rd(e, t, n) {
    const r = this.proxy,
        o = ye(e) ? e.includes(".") ? cc(r, e) : () => r[e] : e.bind(r, r);
    let s;
    Z(t) ? s = t : (s = t.handler, n = t);
    const i = Le;
    Pn(this);
    const a = ri(o, s.bind(r), n);
    return i ? Pn(i) : Zt(), a
}

function cc(e, t) {
    const n = t.split(".");
    return () => {
        let r = e;
        for (let o = 0; o < n.length && r; o++) r = r[n[o]];
        return r
    }
}

function qt(e, t) {
    if (!pe(e) || e.__v_skip || (t = t || new Set, t.has(e))) return e;
    if (t.add(e), he(e)) qt(e.value, t);
    else if (J(e))
        for (let n = 0; n < e.length; n++) qt(e[n], t);
    else if (Pl(e) || vn(e)) e.forEach(n => {
        qt(n, t)
    });
    else if (Al(e))
        for (const n in e) qt(e[n], t);
    return e
}

function Pv(e, t) {
    const n = Ie;
    if (n === null) return e;
    const r = ho(n) || n.proxy,
        o = e.dirs || (e.dirs = []);
    for (let s = 0; s < t.length; s++) {
        let [i, a, l, c = ge] = t[s];
        i && (Z(i) && (i = {
            mounted: i,
            updated: i
        }), i.deep && qt(a), o.push({
            dir: i,
            instance: r,
            value: a,
            oldValue: void 0,
            arg: l,
            modifiers: c
        }))
    }
    return e
}

function dt(e, t, n, r) {
    const o = e.dirs,
        s = t && t.dirs;
    for (let i = 0; i < o.length; i++) {
        const a = o[i];
        s && (a.oldValue = s[i].value);
        let l = a.dir[r];
        l && (xn(), et(l, n, 8, [e.el, a, e, t]), zn())
    }
}

function Pd() {
    const e = {
        isMounted: !1,
        isLeaving: !1,
        isUnmounting: !1,
        leavingVNodes: new Map
    };
    return co(() => {
        e.isMounted = !0
    }), uo(() => {
        e.isUnmounting = !0
    }), e
}
const Je = [Function, Array],
    uc = {
        mode: String,
        appear: Boolean,
        persisted: Boolean,
        onBeforeEnter: Je,
        onEnter: Je,
        onAfterEnter: Je,
        onEnterCancelled: Je,
        onBeforeLeave: Je,
        onLeave: Je,
        onAfterLeave: Je,
        onLeaveCancelled: Je,
        onBeforeAppear: Je,
        onAppear: Je,
        onAfterAppear: Je,
        onAppearCancelled: Je
    },
    Sd = {
        name: "BaseTransition",
        props: uc,
        setup(e, {
            slots: t
        }) {
            const n = ct(),
                r = Pd();
            let o;
            return () => {
                const s = t.default && dc(t.default(), !0);
                if (!s || !s.length) return;
                let i = s[0];
                if (s.length > 1) {
                    for (const v of s)
                        if (v.type !== Fe) {
                            i = v;
                            break
                        }
                }
                const a = ie(e),
                    {
                        mode: l
                    } = a;
                if (r.isLeaving) return Po(i);
                const c = $i(i);
                if (!c) return Po(i);
                const u = Zo(c, a, r, n);
                Hr(c, u);
                const f = n.subTree,
                    d = f && $i(f);
                let p = !1;
                const {
                    getTransitionKey: g
                } = c.type;
                if (g) {
                    const v = g();
                    o === void 0 ? o = v : v !== o && (o = v, p = !0)
                }
                if (d && d.type !== Fe && (!ot(c, d) || p)) {
                    const v = Zo(d, a, r, n);
                    if (Hr(d, v), l === "out-in") return r.isLeaving = !0, v.afterLeave = () => {
                        r.isLeaving = !1, n.update.active !== !1 && n.update()
                    }, Po(i);
                    l === "in-out" && c.type !== Fe && (v.delayLeave = (C, b, m) => {
                        const S = fc(r, d);
                        S[String(d.key)] = d, C._leaveCb = () => {
                            b(), C._leaveCb = void 0, delete u.delayedLeave
                        }, u.delayedLeave = m
                    })
                }
                return i
            }
        }
    },
    Id = Sd;

function fc(e, t) {
    const {
        leavingVNodes: n
    } = e;
    let r = n.get(t.type);
    return r || (r = Object.create(null), n.set(t.type, r)), r
}

function Zo(e, t, n, r) {
    const {
        appear: o,
        mode: s,
        persisted: i = !1,
        onBeforeEnter: a,
        onEnter: l,
        onAfterEnter: c,
        onEnterCancelled: u,
        onBeforeLeave: f,
        onLeave: d,
        onAfterLeave: p,
        onLeaveCancelled: g,
        onBeforeAppear: v,
        onAppear: C,
        onAfterAppear: b,
        onAppearCancelled: m
    } = t, S = String(e.key), y = fc(n, e), w = (L, F) => {
        L && et(L, r, 9, F)
    }, A = (L, F) => {
        const $ = F[1];
        w(L, F), J(L) ? L.every(k => k.length <= 1) && $() : L.length <= 1 && $()
    }, P = {
        mode: s,
        persisted: i,
        beforeEnter(L) {
            let F = a;
            if (!n.isMounted)
                if (o) F = v || a;
                else return;
            L._leaveCb && L._leaveCb(!0);
            const $ = y[S];
            $ && ot(e, $) && $.el._leaveCb && $.el._leaveCb(), w(F, [L])
        },
        enter(L) {
            let F = l,
                $ = c,
                k = u;
            if (!n.isMounted)
                if (o) F = C || l, $ = b || c, k = m || u;
                else return;
            let O = !1;
            const B = L._enterCb = U => {
                O || (O = !0, U ? w(k, [L]) : w($, [L]), P.delayedLeave && P.delayedLeave(), L._enterCb = void 0)
            };
            F ? A(F, [L, B]) : B()
        },
        leave(L, F) {
            const $ = String(e.key);
            if (L._enterCb && L._enterCb(!0), n.isUnmounting) return F();
            w(f, [L]);
            let k = !1;
            const O = L._leaveCb = B => {
                k || (k = !0, F(), B ? w(g, [L]) : w(p, [L]), L._leaveCb = void 0, y[$] === e && delete y[$])
            };
            y[$] = e, d ? A(d, [L, O]) : O()
        },
        clone(L) {
            return Zo(L, t, n, r)
        }
    };
    return P
}

function Po(e) {
    if (gr(e)) return e = Tt(e), e.children = null, e
}

function $i(e) {
    return gr(e) ? e.children ? e.children[0] : void 0 : e
}

function Hr(e, t) {
    e.shapeFlag & 6 && e.component ? Hr(e.component.subTree, t) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t
}

function dc(e, t = !1, n) {
    let r = [],
        o = 0;
    for (let s = 0; s < e.length; s++) {
        let i = e[s];
        const a = n == null ? i.key : String(n) + String(i.key != null ? i.key : s);
        i.type === Oe ? (i.patchFlag & 128 && o++, r = r.concat(dc(i.children, t, a))) : (t || i.type !== Fe) && r.push(a != null ? Tt(i, {
            key: a
        }) : i)
    }
    if (o > 1)
        for (let s = 0; s < r.length; s++) r[s].patchFlag = -2;
    return r
}

function lt(e, t) {
    return Z(e) ? (() => Ce({
        name: e.name
    }, t, {
        setup: e
    }))() : e
}
const Qt = e => !!e.type.__asyncLoader;

function re(e) {
    Z(e) && (e = {
        loader: e
    });
    const {
        loader: t,
        loadingComponent: n,
        errorComponent: r,
        delay: o = 200,
        timeout: s,
        suspensible: i = !0,
        onError: a
    } = e;
    let l = null,
        c, u = 0;
    const f = () => (u++, l = null, d()),
        d = () => {
            let p;
            return l || (p = l = t().catch(g => {
                if (g = g instanceof Error ? g : new Error(String(g)), a) return new Promise((v, C) => {
                    a(g, () => v(f()), () => C(g), u + 1)
                });
                throw g
            }).then(g => p !== l && l ? l : (g && (g.__esModule || g[Symbol.toStringTag] === "Module") && (g = g.default), c = g, g)))
        };
    return lt({
        name: "AsyncComponentWrapper",
        __asyncLoader: d,
        get __asyncResolved() {
            return c
        },
        setup() {
            const p = Le;
            if (c) return () => So(c, p);
            const g = m => {
                l = null, Dn(m, p, 13, !r)
            };
            if (i && p.suspense || Sn) return d().then(m => () => So(m, p)).catch(m => (g(m), () => r ? _e(r, {
                error: m
            }) : null));
            const v = Se(!1),
                C = Se(),
                b = Se(!!o);
            return o && setTimeout(() => {
                b.value = !1
            }, o), s != null && setTimeout(() => {
                if (!v.value && !C.value) {
                    const m = new Error(`Async component timed out after ${s}ms.`);
                    g(m), C.value = m
                }
            }, s), d().then(() => {
                v.value = !0, p.parent && gr(p.parent.vnode) && so(p.parent.update)
            }).catch(m => {
                g(m), C.value = m
            }), () => {
                if (v.value && c) return So(c, p);
                if (C.value && r) return _e(r, {
                    error: C.value
                });
                if (n && !b.value) return _e(n)
            }
        }
    })
}

function So(e, t) {
    const {
        ref: n,
        props: r,
        children: o,
        ce: s
    } = t.vnode, i = _e(e, r, o);
    return i.ref = n, i.ce = s, delete t.vnode.ce, i
}
const gr = e => e.type.__isKeepAlive,
    Ad = {
        name: "KeepAlive",
        __isKeepAlive: !0,
        props: {
            include: [String, RegExp, Array],
            exclude: [String, RegExp, Array],
            max: [String, Number]
        },
        setup(e, {
            slots: t
        }) {
            const n = ct(),
                r = n.ctx;
            if (!r.renderer) return () => {
                const m = t.default && t.default();
                return m && m.length === 1 ? m[0] : m
            };
            const o = new Map,
                s = new Set;
            let i = null;
            const a = n.suspense,
                {
                    renderer: {
                        p: l,
                        m: c,
                        um: u,
                        o: {
                            createElement: f
                        }
                    }
                } = r,
                d = f("div");
            r.activate = (m, S, y, w, A) => {
                const P = m.component;
                c(m, S, y, 0, a), l(P.vnode, m, S, y, P, a, w, m.slotScopeIds, A), Pe(() => {
                    P.isDeactivated = !1, P.a && wn(P.a);
                    const L = m.props && m.props.onVnodeMounted;
                    L && $e(L, P.parent, m)
                }, a)
            }, r.deactivate = m => {
                const S = m.component;
                c(m, d, null, 1, a), Pe(() => {
                    S.da && wn(S.da);
                    const y = m.props && m.props.onVnodeUnmounted;
                    y && $e(y, S.parent, m), S.isDeactivated = !0
                }, a)
            };

            function p(m) {
                Io(m), u(m, n, a, !0)
            }

            function g(m) {
                o.forEach((S, y) => {
                    const w = is(S.type);
                    w && (!m || !m(w)) && v(y)
                })
            }

            function v(m) {
                const S = o.get(m);
                !i || !ot(S, i) ? p(S) : i && Io(i), o.delete(m), s.delete(m)
            }
            it(() => [e.include, e.exclude], ([m, S]) => {
                m && g(y => Xn(m, y)), S && g(y => !Xn(S, y))
            }, {
                flush: "post",
                deep: !0
            });
            let C = null;
            const b = () => {
                C != null && o.set(C, Ao(n.subTree))
            };
            return co(b), gc(b), uo(() => {
                o.forEach(m => {
                    const {
                        subTree: S,
                        suspense: y
                    } = n, w = Ao(S);
                    if (m.type === w.type && m.key === w.key) {
                        Io(w);
                        const A = w.component.da;
                        A && Pe(A, y);
                        return
                    }
                    p(m)
                })
            }), () => {
                if (C = null, !t.default) return null;
                const m = t.default(),
                    S = m[0];
                if (m.length > 1) return i = null, m;
                if (!Rn(S) || !(S.shapeFlag & 4) && !(S.shapeFlag & 128)) return i = null, S;
                let y = Ao(S);
                const w = y.type,
                    A = is(Qt(y) ? y.type.__asyncResolved || {} : w),
                    {
                        include: P,
                        exclude: L,
                        max: F
                    } = e;
                if (P && (!A || !Xn(P, A)) || L && A && Xn(L, A)) return i = y, S;
                const $ = y.key == null ? w : y.key,
                    k = o.get($);
                return y.el && (y = Tt(y), S.shapeFlag & 128 && (S.ssContent = y)), C = $, k ? (y.el = k.el, y.component = k.component, y.transition && Hr(y, y.transition), y.shapeFlag |= 512, s.delete($), s.add($)) : (s.add($), F && s.size > parseInt(F, 10) && v(s.values().next().value)), y.shapeFlag |= 256, i = y, ic(S.type) ? S : y
            }
        }
    },
    Od = Ad;

function Xn(e, t) {
    return J(e) ? e.some(n => Xn(n, t)) : ye(e) ? e.split(",").includes(t) : bf(e) ? e.test(t) : !1
}

function hc(e, t) {
    pc(e, "a", t)
}

function mc(e, t) {
    pc(e, "da", t)
}

function pc(e, t, n = Le) {
    const r = e.__wdc || (e.__wdc = () => {
        let o = n;
        for (; o;) {
            if (o.isDeactivated) return;
            o = o.parent
        }
        return e()
    });
    if (lo(t, r, n), n) {
        let o = n.parent;
        for (; o && o.parent;) gr(o.parent.vnode) && Nd(r, t, n, o), o = o.parent
    }
}

function Nd(e, t, n, r) {
    const o = lo(t, e, r, !0);
    oi(() => {
        js(r[t], o)
    }, n)
}

function Io(e) {
    e.shapeFlag &= -257, e.shapeFlag &= -513
}

function Ao(e) {
    return e.shapeFlag & 128 ? e.ssContent : e
}

function lo(e, t, n = Le, r = !1) {
    if (n) {
        const o = n[e] || (n[e] = []),
            s = t.__weh || (t.__weh = (...i) => {
                if (n.isUnmounted) return;
                xn(), Pn(n);
                const a = et(t, n, e, i);
                return Zt(), zn(), a
            });
        return r ? o.unshift(s) : o.push(s), s
    }
}
const Ct = e => (t, n = Le) => (!Sn || e === "sp") && lo(e, (...r) => t(...r), n),
    xd = Ct("bm"),
    co = Ct("m"),
    zd = Ct("bu"),
    gc = Ct("u"),
    uo = Ct("bum"),
    oi = Ct("um"),
    Dd = Ct("sp"),
    Fd = Ct("rtg"),
    Md = Ct("rtc");

function _c(e, t = Le) {
    lo("ec", e, t)
}
const si = "components";

function Sv(e, t) {
    return bc(si, e, !0, t) || e
}
const yc = Symbol.for("v-ndc");

function Iv(e) {
    return ye(e) ? bc(si, e, !1) || e : e || yc
}

function bc(e, t, n = !0, r = !1) {
    const o = Ie || Le;
    if (o) {
        const s = o.type;
        if (e === si) {
            const a = is(s, !1);
            if (a && (a === t || a === pt(t) || a === eo(pt(t)))) return s
        }
        const i = Hi(o[e] || s[e], t) || Hi(o.appContext[e], t);
        return !i && r ? s : i
    }
}

function Hi(e, t) {
    return e && (e[t] || e[pt(t)] || e[eo(pt(t))])
}

function Av(e, t, n, r) {
    let o;
    const s = n && n[r];
    if (J(e) || ye(e)) {
        o = new Array(e.length);
        for (let i = 0, a = e.length; i < a; i++) o[i] = t(e[i], i, void 0, s && s[i])
    } else if (typeof e == "number") {
        o = new Array(e);
        for (let i = 0; i < e; i++) o[i] = t(i + 1, i, void 0, s && s[i])
    } else if (pe(e))
        if (e[Symbol.iterator]) o = Array.from(e, (i, a) => t(i, a, void 0, s && s[a]));
        else {
            const i = Object.keys(e);
            o = new Array(i.length);
            for (let a = 0, l = i.length; a < l; a++) {
                const c = i[a];
                o[a] = t(e[c], c, a, s && s[a])
            }
        }
    else o = [];
    return n && (n[r] = o), o
}

function Ov(e, t, n = {}, r, o) {
    if (Ie.isCE || Ie.parent && Qt(Ie.parent) && Ie.parent.isCE) return t !== "default" && (n.name = t), _e("slot", n, r && r());
    let s = e[t];
    s && s._c && (s._d = !1), zt();
    const i = s && vc(s(n)),
        a = Yt(Oe, {
            key: n.key || i && i.key || `_${t}`
        }, i || (r ? r() : []), i && e._ === 1 ? 64 : -2);
    return !o && a.scopeId && (a.slotScopeIds = [a.scopeId + "-s"]), s && s._c && (s._d = !0), a
}

function vc(e) {
    return e.some(t => Rn(t) ? !(t.type === Fe || t.type === Oe && !vc(t.children)) : !0) ? e : null
}
const es = e => e ? zc(e) ? ho(e) || e.proxy : es(e.parent) : null,
    Yn = Ce(Object.create(null), {
        $: e => e,
        $el: e => e.vnode.el,
        $data: e => e.data,
        $props: e => e.props,
        $attrs: e => e.attrs,
        $slots: e => e.slots,
        $refs: e => e.refs,
        $parent: e => es(e.parent),
        $root: e => es(e.root),
        $emit: e => e.emit,
        $options: e => ii(e),
        $forceUpdate: e => e.f || (e.f = () => so(e.update)),
        $nextTick: e => e.n || (e.n = rn.bind(e.proxy)),
        $watch: e => Rd.bind(e)
    }),
    Oo = (e, t) => e !== ge && !e.__isScriptSetup && le(e, t),
    Ud = {
        get({
            _: e
        }, t) {
            const {
                ctx: n,
                setupState: r,
                data: o,
                props: s,
                accessCache: i,
                type: a,
                appContext: l
            } = e;
            let c;
            if (t[0] !== "$") {
                const p = i[t];
                if (p !== void 0) switch (p) {
                    case 1:
                        return r[t];
                    case 2:
                        return o[t];
                    case 4:
                        return n[t];
                    case 3:
                        return s[t]
                } else {
                    if (Oo(r, t)) return i[t] = 1, r[t];
                    if (o !== ge && le(o, t)) return i[t] = 2, o[t];
                    if ((c = e.propsOptions[0]) && le(c, t)) return i[t] = 3, s[t];
                    if (n !== ge && le(n, t)) return i[t] = 4, n[t];
                    ts && (i[t] = 0)
                }
            }
            const u = Yn[t];
            let f, d;
            if (u) return t === "$attrs" && He(e, "get", t), u(e);
            if ((f = a.__cssModules) && (f = f[t])) return f;
            if (n !== ge && le(n, t)) return i[t] = 4, n[t];
            if (d = l.config.globalProperties, le(d, t)) return d[t]
        },
        set({
            _: e
        }, t, n) {
            const {
                data: r,
                setupState: o,
                ctx: s
            } = e;
            return Oo(o, t) ? (o[t] = n, !0) : r !== ge && le(r, t) ? (r[t] = n, !0) : le(e.props, t) || t[0] === "$" && t.slice(1) in e ? !1 : (s[t] = n, !0)
        },
        has({
            _: {
                data: e,
                setupState: t,
                accessCache: n,
                ctx: r,
                appContext: o,
                propsOptions: s
            }
        }, i) {
            let a;
            return !!n[i] || e !== ge && le(e, i) || Oo(t, i) || (a = s[0]) && le(a, i) || le(r, i) || le(Yn, i) || le(o.config.globalProperties, i)
        },
        defineProperty(e, t, n) {
            return n.get != null ? e._.accessCache[t] = 0 : le(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n)
        }
    };

function Nv() {
    return $d().slots
}

function $d() {
    const e = ct();
    return e.setupContext || (e.setupContext = Fc(e))
}

function ji(e) {
    return J(e) ? e.reduce((t, n) => (t[n] = null, t), {}) : e
}
let ts = !0;

function Hd(e) {
    const t = ii(e),
        n = e.proxy,
        r = e.ctx;
    ts = !1, t.beforeCreate && Bi(t.beforeCreate, e, "bc");
    const {
        data: o,
        computed: s,
        methods: i,
        watch: a,
        provide: l,
        inject: c,
        created: u,
        beforeMount: f,
        mounted: d,
        beforeUpdate: p,
        updated: g,
        activated: v,
        deactivated: C,
        beforeDestroy: b,
        beforeUnmount: m,
        destroyed: S,
        unmounted: y,
        render: w,
        renderTracked: A,
        renderTriggered: P,
        errorCaptured: L,
        serverPrefetch: F,
        expose: $,
        inheritAttrs: k,
        components: O,
        directives: B,
        filters: U
    } = t;
    if (c && jd(c, r, null), i)
        for (const ee in i) {
            const oe = i[ee];
            Z(oe) && (r[ee] = oe.bind(n))
        }
    if (o) {
        const ee = o.call(n, n);
        pe(ee) && (e.data = gt(ee))
    }
    if (ts = !0, s)
        for (const ee in s) {
            const oe = s[ee],
                nt = Z(oe) ? oe.bind(n, n) : Z(oe.get) ? oe.get.bind(n, n) : st,
                ut = !Z(oe) && Z(oe.set) ? oe.set.bind(n) : st,
                Ye = me({
                    get: nt,
                    set: ut
                });
            Object.defineProperty(r, ee, {
                enumerable: !0,
                configurable: !0,
                get: () => Ye.value,
                set: Ae => Ye.value = Ae
            })
        }
    if (a)
        for (const ee in a) wc(a[ee], r, n, ee);
    if (l) {
        const ee = Z(l) ? l.call(n) : l;
        Reflect.ownKeys(ee).forEach(oe => {
            Cn(oe, ee[oe])
        })
    }
    u && Bi(u, e, "c");

    function ne(ee, oe) {
        J(oe) ? oe.forEach(nt => ee(nt.bind(n))) : oe && ee(oe.bind(n))
    }
    if (ne(xd, f), ne(co, d), ne(zd, p), ne(gc, g), ne(hc, v), ne(mc, C), ne(_c, L), ne(Md, A), ne(Fd, P), ne(uo, m), ne(oi, y), ne(Dd, F), J($))
        if ($.length) {
            const ee = e.exposed || (e.exposed = {});
            $.forEach(oe => {
                Object.defineProperty(ee, oe, {
                    get: () => n[oe],
                    set: nt => n[oe] = nt
                })
            })
        } else e.exposed || (e.exposed = {});
    w && e.render === st && (e.render = w), k != null && (e.inheritAttrs = k), O && (e.components = O), B && (e.directives = B)
}

function jd(e, t, n = st) {
    J(e) && (e = ns(e));
    for (const r in e) {
        const o = e[r];
        let s;
        pe(o) ? "default" in o ? s = xe(o.from || r, o.default, !0) : s = xe(o.from || r) : s = xe(o), he(s) ? Object.defineProperty(t, r, {
            enumerable: !0,
            configurable: !0,
            get: () => s.value,
            set: i => s.value = i
        }) : t[r] = s
    }
}

function Bi(e, t, n) {
    et(J(e) ? e.map(r => r.bind(t.proxy)) : e.bind(t.proxy), t, n)
}

function wc(e, t, n, r) {
    const o = r.includes(".") ? cc(n, r) : () => n[r];
    if (ye(e)) {
        const s = t[e];
        Z(s) && it(o, s)
    } else if (Z(e)) it(o, e.bind(n));
    else if (pe(e))
        if (J(e)) e.forEach(s => wc(s, t, n, r));
        else {
            const s = Z(e.handler) ? e.handler.bind(n) : t[e.handler];
            Z(s) && it(o, s, e)
        }
}

function ii(e) {
    const t = e.type,
        {
            mixins: n,
            extends: r
        } = t,
        {
            mixins: o,
            optionsCache: s,
            config: {
                optionMergeStrategies: i
            }
        } = e.appContext,
        a = s.get(t);
    let l;
    return a ? l = a : !o.length && !n && !r ? l = t : (l = {}, o.length && o.forEach(c => jr(l, c, i, !0)), jr(l, t, i)), pe(t) && s.set(t, l), l
}

function jr(e, t, n, r = !1) {
    const {
        mixins: o,
        extends: s
    } = t;
    s && jr(e, s, n, !0), o && o.forEach(i => jr(e, i, n, !0));
    for (const i in t)
        if (!(r && i === "expose")) {
            const a = Bd[i] || n && n[i];
            e[i] = a ? a(e[i], t[i]) : t[i]
        }
    return e
}
const Bd = {
    data: Wi,
    props: Vi,
    emits: Vi,
    methods: Kn,
    computed: Kn,
    beforeCreate: De,
    created: De,
    beforeMount: De,
    mounted: De,
    beforeUpdate: De,
    updated: De,
    beforeDestroy: De,
    beforeUnmount: De,
    destroyed: De,
    unmounted: De,
    activated: De,
    deactivated: De,
    errorCaptured: De,
    serverPrefetch: De,
    components: Kn,
    directives: Kn,
    watch: Vd,
    provide: Wi,
    inject: Wd
};

function Wi(e, t) {
    return t ? e ? function() {
        return Ce(Z(e) ? e.call(this, this) : e, Z(t) ? t.call(this, this) : t)
    } : t : e
}

function Wd(e, t) {
    return Kn(ns(e), ns(t))
}

function ns(e) {
    if (J(e)) {
        const t = {};
        for (let n = 0; n < e.length; n++) t[e[n]] = e[n];
        return t
    }
    return e
}

function De(e, t) {
    return e ? [...new Set([].concat(e, t))] : t
}

function Kn(e, t) {
    return e ? Ce(Object.create(null), e, t) : t
}

function Vi(e, t) {
    return e ? J(e) && J(t) ? [...new Set([...e, ...t])] : Ce(Object.create(null), ji(e), ji(t ? ? {})) : t
}

function Vd(e, t) {
    if (!e) return t;
    if (!t) return e;
    const n = Ce(Object.create(null), e);
    for (const r in t) n[r] = De(e[r], t[r]);
    return n
}

function Ec() {
    return {
        app: null,
        config: {
            isNativeTag: gf,
            performance: !1,
            globalProperties: {},
            optionMergeStrategies: {},
            errorHandler: void 0,
            warnHandler: void 0,
            compilerOptions: {}
        },
        mixins: [],
        components: {},
        directives: {},
        provides: Object.create(null),
        optionsCache: new WeakMap,
        propsCache: new WeakMap,
        emitsCache: new WeakMap
    }
}
let Xd = 0;

function Kd(e, t) {
    return function(r, o = null) {
        Z(r) || (r = Ce({}, r)), o != null && !pe(o) && (o = null);
        const s = Ec(),
            i = new Set;
        let a = !1;
        const l = s.app = {
            _uid: Xd++,
            _component: r,
            _props: o,
            _container: null,
            _context: s,
            _instance: null,
            version: Mc,
            get config() {
                return s.config
            },
            set config(c) {},
            use(c, ...u) {
                return i.has(c) || (c && Z(c.install) ? (i.add(c), c.install(l, ...u)) : Z(c) && (i.add(c), c(l, ...u))), l
            },
            mixin(c) {
                return s.mixins.includes(c) || s.mixins.push(c), l
            },
            component(c, u) {
                return u ? (s.components[c] = u, l) : s.components[c]
            },
            directive(c, u) {
                return u ? (s.directives[c] = u, l) : s.directives[c]
            },
            mount(c, u, f) {
                if (!a) {
                    const d = _e(r, o);
                    return d.appContext = s, u && t ? t(d, c) : e(d, c, f), a = !0, l._container = c, c.__vue_app__ = l, ho(d.component) || d.component.proxy
                }
            },
            unmount() {
                a && (e(null, l._container), delete l._container.__vue_app__)
            },
            provide(c, u) {
                return s.provides[c] = u, l
            },
            runWithContext(c) {
                Br = l;
                try {
                    return c()
                } finally {
                    Br = null
                }
            }
        };
        return l
    }
}
let Br = null;

function Cn(e, t) {
    if (Le) {
        let n = Le.provides;
        const r = Le.parent && Le.parent.provides;
        r === n && (n = Le.provides = Object.create(r)), n[e] = t
    }
}

function xe(e, t, n = !1) {
    const r = Le || Ie;
    if (r || Br) {
        const o = r ? r.parent == null ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : Br._context.provides;
        if (o && e in o) return o[e];
        if (arguments.length > 1) return n && Z(t) ? t.call(r && r.proxy) : t
    }
}

function qd(e, t, n, r = !1) {
    const o = {},
        s = {};
    Dr(s, fo, 1), e.propsDefaults = Object.create(null), Tc(e, t, o, s);
    for (const i in e.propsOptions[0]) i in o || (o[i] = void 0);
    n ? e.props = r ? o : Kl(o) : e.type.props ? e.props = o : e.props = s, e.attrs = s
}

function Yd(e, t, n, r) {
    const {
        props: o,
        attrs: s,
        vnode: {
            patchFlag: i
        }
    } = e, a = ie(o), [l] = e.propsOptions;
    let c = !1;
    if ((r || i > 0) && !(i & 16)) {
        if (i & 8) {
            const u = e.vnode.dynamicProps;
            for (let f = 0; f < u.length; f++) {
                let d = u[f];
                if (io(e.emitsOptions, d)) continue;
                const p = t[d];
                if (l)
                    if (le(s, d)) p !== s[d] && (s[d] = p, c = !0);
                    else {
                        const g = pt(d);
                        o[g] = rs(l, a, g, p, e, !1)
                    }
                else p !== s[d] && (s[d] = p, c = !0)
            }
        }
    } else {
        Tc(e, t, o, s) && (c = !0);
        let u;
        for (const f in a)(!t || !le(t, f) && ((u = nn(f)) === f || !le(t, u))) && (l ? n && (n[f] !== void 0 || n[u] !== void 0) && (o[f] = rs(l, a, f, void 0, e, !0)) : delete o[f]);
        if (s !== a)
            for (const f in s)(!t || !le(t, f)) && (delete s[f], c = !0)
    }
    c && Et(e, "set", "$attrs")
}

function Tc(e, t, n, r) {
    const [o, s] = e.propsOptions;
    let i = !1,
        a;
    if (t)
        for (let l in t) {
            if (qn(l)) continue;
            const c = t[l];
            let u;
            o && le(o, u = pt(l)) ? !s || !s.includes(u) ? n[u] = c : (a || (a = {}))[u] = c : io(e.emitsOptions, l) || (!(l in r) || c !== r[l]) && (r[l] = c, i = !0)
        }
    if (s) {
        const l = ie(n),
            c = a || ge;
        for (let u = 0; u < s.length; u++) {
            const f = s[u];
            n[f] = rs(o, l, f, c[f], e, !le(c, f))
        }
    }
    return i
}

function rs(e, t, n, r, o, s) {
    const i = e[n];
    if (i != null) {
        const a = le(i, "default");
        if (a && r === void 0) {
            const l = i.default;
            if (i.type !== Function && !i.skipFactory && Z(l)) {
                const {
                    propsDefaults: c
                } = o;
                n in c ? r = c[n] : (Pn(o), r = c[n] = l.call(null, t), Zt())
            } else r = l
        }
        i[0] && (s && !a ? r = !1 : i[1] && (r === "" || r === nn(n)) && (r = !0))
    }
    return r
}

function Cc(e, t, n = !1) {
    const r = t.propsCache,
        o = r.get(e);
    if (o) return o;
    const s = e.props,
        i = {},
        a = [];
    let l = !1;
    if (!Z(e)) {
        const u = f => {
            l = !0;
            const [d, p] = Cc(f, t, !0);
            Ce(i, d), p && a.push(...p)
        };
        !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u)
    }
    if (!s && !l) return pe(e) && r.set(e, bn), bn;
    if (J(s))
        for (let u = 0; u < s.length; u++) {
            const f = pt(s[u]);
            Xi(f) && (i[f] = ge)
        } else if (s)
            for (const u in s) {
                const f = pt(u);
                if (Xi(f)) {
                    const d = s[u],
                        p = i[f] = J(d) || Z(d) ? {
                            type: d
                        } : Ce({}, d);
                    if (p) {
                        const g = Yi(Boolean, p.type),
                            v = Yi(String, p.type);
                        p[0] = g > -1, p[1] = v < 0 || g < v, (g > -1 || le(p, "default")) && a.push(f)
                    }
                }
            }
    const c = [i, a];
    return pe(e) && r.set(e, c), c
}

function Xi(e) {
    return e[0] !== "$"
}

function Ki(e) {
    const t = e && e.toString().match(/^\s*(function|class) (\w+)/);
    return t ? t[2] : e === null ? "null" : ""
}

function qi(e, t) {
    return Ki(e) === Ki(t)
}

function Yi(e, t) {
    return J(t) ? t.findIndex(n => qi(n, e)) : Z(t) && qi(t, e) ? 0 : -1
}
const Lc = e => e[0] === "_" || e === "$stable",
    ai = e => J(e) ? e.map(Qe) : [Qe(e)],
    Gd = (e, t, n) => {
        if (t._n) return t;
        const r = ei((...o) => ai(t(...o)), n);
        return r._c = !1, r
    },
    kc = (e, t, n) => {
        const r = e._ctx;
        for (const o in e) {
            if (Lc(o)) continue;
            const s = e[o];
            if (Z(s)) t[o] = Gd(o, s, r);
            else if (s != null) {
                const i = ai(s);
                t[o] = () => i
            }
        }
    },
    Rc = (e, t) => {
        const n = ai(t);
        e.slots.default = () => n
    },
    Jd = (e, t) => {
        if (e.vnode.shapeFlag & 32) {
            const n = t._;
            n ? (e.slots = ie(t), Dr(t, "_", n)) : kc(t, e.slots = {})
        } else e.slots = {}, t && Rc(e, t);
        Dr(e.slots, fo, 1)
    },
    Qd = (e, t, n) => {
        const {
            vnode: r,
            slots: o
        } = e;
        let s = !0,
            i = ge;
        if (r.shapeFlag & 32) {
            const a = t._;
            a ? n && a === 1 ? s = !1 : (Ce(o, t), !n && a === 1 && delete o._) : (s = !t.$stable, kc(t, o)), i = t
        } else t && (Rc(e, t), i = {
            default: 1
        });
        if (s)
            for (const a in o) !Lc(a) && !(a in i) && delete o[a]
    };

function Wr(e, t, n, r, o = !1) {
    if (J(e)) {
        e.forEach((d, p) => Wr(d, t && (J(t) ? t[p] : t), n, r, o));
        return
    }
    if (Qt(r) && !o) return;
    const s = r.shapeFlag & 4 ? ho(r.component) || r.component.proxy : r.el,
        i = o ? null : s,
        {
            i: a,
            r: l
        } = e,
        c = t && t.r,
        u = a.refs === ge ? a.refs = {} : a.refs,
        f = a.setupState;
    if (c != null && c !== l && (ye(c) ? (u[c] = null, le(f, c) && (f[c] = null)) : he(c) && (c.value = null)), Z(l)) Ft(l, a, 12, [i, u]);
    else {
        const d = ye(l),
            p = he(l);
        if (d || p) {
            const g = () => {
                if (e.f) {
                    const v = d ? le(f, l) ? f[l] : u[l] : l.value;
                    o ? J(v) && js(v, s) : J(v) ? v.includes(s) || v.push(s) : d ? (u[l] = [s], le(f, l) && (f[l] = u[l])) : (l.value = [s], e.k && (u[e.k] = l.value))
                } else d ? (u[l] = i, le(f, l) && (f[l] = i)) : p && (l.value = i, e.k && (u[e.k] = i))
            };
            i ? (g.id = -1, Pe(g, n)) : g()
        }
    }
}
let Pt = !1;
const Pr = e => /svg/.test(e.namespaceURI) && e.tagName !== "foreignObject",
    Sr = e => e.nodeType === 8;

function Zd(e) {
    const {
        mt: t,
        p: n,
        o: {
            patchProp: r,
            createText: o,
            nextSibling: s,
            parentNode: i,
            remove: a,
            insert: l,
            createComment: c
        }
    } = e, u = (b, m) => {
        if (!m.hasChildNodes()) {
            n(null, b, m), Ur(), m._vnode = b;
            return
        }
        Pt = !1, f(m.firstChild, b, null, null, null), Ur(), m._vnode = b, Pt && console.error("Hydration completed but contains mismatches.")
    }, f = (b, m, S, y, w, A = !1) => {
        const P = Sr(b) && b.data === "[",
            L = () => v(b, m, S, y, w, P),
            {
                type: F,
                ref: $,
                shapeFlag: k,
                patchFlag: O
            } = m;
        let B = b.nodeType;
        m.el = b, O === -2 && (A = !1, m.dynamicChildren = null);
        let U = null;
        switch (F) {
            case tn:
                B !== 3 ? m.children === "" ? (l(m.el = o(""), i(b), b), U = b) : U = L() : (b.data !== m.children && (Pt = !0, b.data = m.children), U = s(b));
                break;
            case Fe:
                B !== 8 || P ? U = L() : U = s(b);
                break;
            case Jn:
                if (P && (b = s(b), B = b.nodeType), B === 1 || B === 3) {
                    U = b;
                    const Q = !m.children.length;
                    for (let ne = 0; ne < m.staticCount; ne++) Q && (m.children += U.nodeType === 1 ? U.outerHTML : U.data), ne === m.staticCount - 1 && (m.anchor = U), U = s(U);
                    return P ? s(U) : U
                } else L();
                break;
            case Oe:
                P ? U = g(b, m, S, y, w, A) : U = L();
                break;
            default:
                if (k & 1) B !== 1 || m.type.toLowerCase() !== b.tagName.toLowerCase() ? U = L() : U = d(b, m, S, y, w, A);
                else if (k & 6) {
                    m.slotScopeIds = w;
                    const Q = i(b);
                    if (t(m, Q, null, S, y, Pr(Q), A), U = P ? C(b) : s(b), U && Sr(U) && U.data === "teleport end" && (U = s(U)), Qt(m)) {
                        let ne;
                        P ? (ne = _e(Oe), ne.anchor = U ? U.previousSibling : Q.lastChild) : ne = b.nodeType === 3 ? xc("") : _e("div"), ne.el = b, m.component.subTree = ne
                    }
                } else k & 64 ? B !== 8 ? U = L() : U = m.type.hydrate(b, m, S, y, w, A, e, p) : k & 128 && (U = m.type.hydrate(b, m, S, y, Pr(i(b)), w, A, e, f))
        }
        return $ != null && Wr($, null, y, m), U
    }, d = (b, m, S, y, w, A) => {
        A = A || !!m.dynamicChildren;
        const {
            type: P,
            props: L,
            patchFlag: F,
            shapeFlag: $,
            dirs: k
        } = m, O = P === "input" && k || P === "option";
        if (O || F !== -1) {
            if (k && dt(m, null, S, "created"), L)
                if (O || !A || F & 48)
                    for (const U in L)(O && U.endsWith("value") || mr(U) && !qn(U)) && r(b, U, null, L[U], !1, void 0, S);
                else L.onClick && r(b, "onClick", null, L.onClick, !1, void 0, S);
            let B;
            if ((B = L && L.onVnodeBeforeMount) && $e(B, S, m), k && dt(m, null, S, "beforeMount"), ((B = L && L.onVnodeMounted) || k) && lc(() => {
                    B && $e(B, S, m), k && dt(m, null, S, "mounted")
                }, y), $ & 16 && !(L && (L.innerHTML || L.textContent))) {
                let U = p(b.firstChild, m, b, S, y, w, A);
                for (; U;) {
                    Pt = !0;
                    const Q = U;
                    U = U.nextSibling, a(Q)
                }
            } else $ & 8 && b.textContent !== m.children && (Pt = !0, b.textContent = m.children)
        }
        return b.nextSibling
    }, p = (b, m, S, y, w, A, P) => {
        P = P || !!m.dynamicChildren;
        const L = m.children,
            F = L.length;
        for (let $ = 0; $ < F; $++) {
            const k = P ? L[$] : L[$] = Qe(L[$]);
            if (b) b = f(b, k, y, w, A, P);
            else {
                if (k.type === tn && !k.children) continue;
                Pt = !0, n(null, k, S, null, y, w, Pr(S), A)
            }
        }
        return b
    }, g = (b, m, S, y, w, A) => {
        const {
            slotScopeIds: P
        } = m;
        P && (w = w ? w.concat(P) : P);
        const L = i(b),
            F = p(s(b), m, L, S, y, w, A);
        return F && Sr(F) && F.data === "]" ? s(m.anchor = F) : (Pt = !0, l(m.anchor = c("]"), L, F), F)
    }, v = (b, m, S, y, w, A) => {
        if (Pt = !0, m.el = null, A) {
            const F = C(b);
            for (;;) {
                const $ = s(b);
                if ($ && $ !== F) a($);
                else break
            }
        }
        const P = s(b),
            L = i(b);
        return a(b), n(null, m, L, P, S, y, Pr(L), w), P
    }, C = b => {
        let m = 0;
        for (; b;)
            if (b = s(b), b && Sr(b) && (b.data === "[" && m++, b.data === "]")) {
                if (m === 0) return s(b);
                m--
            }
        return b
    };
    return [u, f]
}
const Pe = lc;

function eh(e) {
    return Pc(e)
}

function th(e) {
    return Pc(e, Zd)
}

function Pc(e, t) {
    const n = Ko();
    n.__VUE__ = !0;
    const {
        insert: r,
        remove: o,
        patchProp: s,
        createElement: i,
        createText: a,
        createComment: l,
        setText: c,
        setElementText: u,
        parentNode: f,
        nextSibling: d,
        setScopeId: p = st,
        insertStaticContent: g
    } = e, v = (h, _, E, I = null, z = null, D = null, W = !1, M = null, H = !!_.dynamicChildren) => {
        if (h === _) return;
        h && !ot(h, _) && (I = N(h), Ae(h, z, D, !0), h = null), _.patchFlag === -2 && (H = !1, _.dynamicChildren = null);
        const {
            type: x,
            ref: T,
            shapeFlag: R
        } = _;
        switch (x) {
            case tn:
                C(h, _, E, I);
                break;
            case Fe:
                b(h, _, E, I);
                break;
            case Jn:
                h == null && m(_, E, I, W);
                break;
            case Oe:
                O(h, _, E, I, z, D, W, M, H);
                break;
            default:
                R & 1 ? w(h, _, E, I, z, D, W, M, H) : R & 6 ? B(h, _, E, I, z, D, W, M, H) : (R & 64 || R & 128) && x.process(h, _, E, I, z, D, W, M, H, j)
        }
        T != null && z && Wr(T, h && h.ref, D, _ || h, !_)
    }, C = (h, _, E, I) => {
        if (h == null) r(_.el = a(_.children), E, I);
        else {
            const z = _.el = h.el;
            _.children !== h.children && c(z, _.children)
        }
    }, b = (h, _, E, I) => {
        h == null ? r(_.el = l(_.children || ""), E, I) : _.el = h.el
    }, m = (h, _, E, I) => {
        [h.el, h.anchor] = g(h.children, _, E, I, h.el, h.anchor)
    }, S = ({
        el: h,
        anchor: _
    }, E, I) => {
        let z;
        for (; h && h !== _;) z = d(h), r(h, E, I), h = z;
        r(_, E, I)
    }, y = ({
        el: h,
        anchor: _
    }) => {
        let E;
        for (; h && h !== _;) E = d(h), o(h), h = E;
        o(_)
    }, w = (h, _, E, I, z, D, W, M, H) => {
        W = W || _.type === "svg", h == null ? A(_, E, I, z, D, W, M, H) : F(h, _, z, D, W, M, H)
    }, A = (h, _, E, I, z, D, W, M) => {
        let H, x;
        const {
            type: T,
            props: R,
            shapeFlag: K,
            transition: Y,
            dirs: te
        } = h;
        if (H = h.el = i(h.type, D, R && R.is, R), K & 8 ? u(H, h.children) : K & 16 && L(h.children, H, null, I, z, D && T !== "foreignObject", W, M), te && dt(h, null, I, "created"), P(H, h, h.scopeId, W, I), R) {
            for (const se in R) se !== "value" && !qn(se) && s(H, se, null, R[se], D, h.children, I, z, ke);
            "value" in R && s(H, "value", null, R.value), (x = R.onVnodeBeforeMount) && $e(x, I, h)
        }
        te && dt(h, null, I, "beforeMount");
        const ue = (!z || z && !z.pendingBranch) && Y && !Y.persisted;
        ue && Y.beforeEnter(H), r(H, _, E), ((x = R && R.onVnodeMounted) || ue || te) && Pe(() => {
            x && $e(x, I, h), ue && Y.enter(H), te && dt(h, null, I, "mounted")
        }, z)
    }, P = (h, _, E, I, z) => {
        if (E && p(h, E), I)
            for (let D = 0; D < I.length; D++) p(h, I[D]);
        if (z) {
            let D = z.subTree;
            if (_ === D) {
                const W = z.vnode;
                P(h, W, W.scopeId, W.slotScopeIds, z.parent)
            }
        }
    }, L = (h, _, E, I, z, D, W, M, H = 0) => {
        for (let x = H; x < h.length; x++) {
            const T = h[x] = M ? Nt(h[x]) : Qe(h[x]);
            v(null, T, _, E, I, z, D, W, M)
        }
    }, F = (h, _, E, I, z, D, W) => {
        const M = _.el = h.el;
        let {
            patchFlag: H,
            dynamicChildren: x,
            dirs: T
        } = _;
        H |= h.patchFlag & 16;
        const R = h.props || ge,
            K = _.props || ge;
        let Y;
        E && jt(E, !1), (Y = K.onVnodeBeforeUpdate) && $e(Y, E, _, h), T && dt(_, h, E, "beforeUpdate"), E && jt(E, !0);
        const te = z && _.type !== "foreignObject";
        if (x ? $(h.dynamicChildren, x, M, E, I, te, D) : W || oe(h, _, M, null, E, I, te, D, !1), H > 0) {
            if (H & 16) k(M, _, R, K, E, I, z);
            else if (H & 2 && R.class !== K.class && s(M, "class", null, K.class, z), H & 4 && s(M, "style", R.style, K.style, z), H & 8) {
                const ue = _.dynamicProps;
                for (let se = 0; se < ue.length; se++) {
                    const be = ue[se],
                        Ge = R[be],
                        ln = K[be];
                    (ln !== Ge || be === "value") && s(M, be, Ge, ln, z, h.children, E, I, ke)
                }
            }
            H & 1 && h.children !== _.children && u(M, _.children)
        } else !W && x == null && k(M, _, R, K, E, I, z);
        ((Y = K.onVnodeUpdated) || T) && Pe(() => {
            Y && $e(Y, E, _, h), T && dt(_, h, E, "updated")
        }, I)
    }, $ = (h, _, E, I, z, D, W) => {
        for (let M = 0; M < _.length; M++) {
            const H = h[M],
                x = _[M],
                T = H.el && (H.type === Oe || !ot(H, x) || H.shapeFlag & 70) ? f(H.el) : E;
            v(H, x, T, null, I, z, D, W, !0)
        }
    }, k = (h, _, E, I, z, D, W) => {
        if (E !== I) {
            if (E !== ge)
                for (const M in E) !qn(M) && !(M in I) && s(h, M, E[M], null, W, _.children, z, D, ke);
            for (const M in I) {
                if (qn(M)) continue;
                const H = I[M],
                    x = E[M];
                H !== x && M !== "value" && s(h, M, x, H, W, _.children, z, D, ke)
            }
            "value" in I && s(h, "value", E.value, I.value)
        }
    }, O = (h, _, E, I, z, D, W, M, H) => {
        const x = _.el = h ? h.el : a(""),
            T = _.anchor = h ? h.anchor : a("");
        let {
            patchFlag: R,
            dynamicChildren: K,
            slotScopeIds: Y
        } = _;
        Y && (M = M ? M.concat(Y) : Y), h == null ? (r(x, E, I), r(T, E, I), L(_.children, E, T, z, D, W, M, H)) : R > 0 && R & 64 && K && h.dynamicChildren ? ($(h.dynamicChildren, K, E, z, D, W, M), (_.key != null || z && _ === z.subTree) && li(h, _, !0)) : oe(h, _, E, T, z, D, W, M, H)
    }, B = (h, _, E, I, z, D, W, M, H) => {
        _.slotScopeIds = M, h == null ? _.shapeFlag & 512 ? z.ctx.activate(_, E, I, W, H) : U(_, E, I, z, D, W, H) : Q(h, _, H)
    }, U = (h, _, E, I, z, D, W) => {
        const M = h.component = fh(h, I, z);
        if (gr(h) && (M.ctx.renderer = j), dh(M), M.asyncDep) {
            if (z && z.registerDep(M, ne), !h.el) {
                const H = M.subTree = _e(Fe);
                b(null, H, _, E)
            }
            return
        }
        ne(M, h, _, E, z, D, W)
    }, Q = (h, _, E) => {
        const I = _.component = h.component;
        if (bd(h, _, E))
            if (I.asyncDep && !I.asyncResolved) {
                ee(I, _, E);
                return
            } else I.next = _, hd(I.update), I.update();
        else _.el = h.el, I.vnode = _
    }, ne = (h, _, E, I, z, D, W) => {
        const M = () => {
                if (h.isMounted) {
                    let {
                        next: T,
                        bu: R,
                        u: K,
                        parent: Y,
                        vnode: te
                    } = h, ue = T, se;
                    jt(h, !1), T ? (T.el = te.el, ee(h, T, W)) : T = te, R && wn(R), (se = T.props && T.props.onVnodeBeforeUpdate) && $e(se, Y, T, te), jt(h, !0);
                    const be = Ro(h),
                        Ge = h.subTree;
                    h.subTree = be, v(Ge, be, f(Ge.el), N(Ge), h, z, D), T.el = be.el, ue === null && ti(h, be.el), K && Pe(K, z), (se = T.props && T.props.onVnodeUpdated) && Pe(() => $e(se, Y, T, te), z)
                } else {
                    let T;
                    const {
                        el: R,
                        props: K
                    } = _, {
                        bm: Y,
                        m: te,
                        parent: ue
                    } = h, se = Qt(_);
                    if (jt(h, !1), Y && wn(Y), !se && (T = K && K.onVnodeBeforeMount) && $e(T, ue, _), jt(h, !0), R && ce) {
                        const be = () => {
                            h.subTree = Ro(h), ce(R, h.subTree, h, z, null)
                        };
                        se ? _.type.__asyncLoader().then(() => !h.isUnmounted && be()) : be()
                    } else {
                        const be = h.subTree = Ro(h);
                        v(null, be, E, I, h, z, D), _.el = be.el
                    }
                    if (te && Pe(te, z), !se && (T = K && K.onVnodeMounted)) {
                        const be = _;
                        Pe(() => $e(T, ue, be), z)
                    }(_.shapeFlag & 256 || ue && Qt(ue.vnode) && ue.vnode.shapeFlag & 256) && h.a && Pe(h.a, z), h.isMounted = !0, _ = E = I = null
                }
            },
            H = h.effect = new Xs(M, () => so(x), h.scope),
            x = h.update = () => H.run();
        x.id = h.uid, jt(h, !0), x()
    }, ee = (h, _, E) => {
        _.component = h;
        const I = h.vnode.props;
        h.vnode = _, h.next = null, Yd(h, _.props, I, E), Qd(h, _.children, E), xn(), Fi(), zn()
    }, oe = (h, _, E, I, z, D, W, M, H = !1) => {
        const x = h && h.children,
            T = h ? h.shapeFlag : 0,
            R = _.children,
            {
                patchFlag: K,
                shapeFlag: Y
            } = _;
        if (K > 0) {
            if (K & 128) {
                ut(x, R, E, I, z, D, W, M, H);
                return
            } else if (K & 256) {
                nt(x, R, E, I, z, D, W, M, H);
                return
            }
        }
        Y & 8 ? (T & 16 && ke(x, z, D), R !== x && u(E, R)) : T & 16 ? Y & 16 ? ut(x, R, E, I, z, D, W, M, H) : ke(x, z, D, !0) : (T & 8 && u(E, ""), Y & 16 && L(R, E, I, z, D, W, M, H))
    }, nt = (h, _, E, I, z, D, W, M, H) => {
        h = h || bn, _ = _ || bn;
        const x = h.length,
            T = _.length,
            R = Math.min(x, T);
        let K;
        for (K = 0; K < R; K++) {
            const Y = _[K] = H ? Nt(_[K]) : Qe(_[K]);
            v(h[K], Y, E, null, z, D, W, M, H)
        }
        x > T ? ke(h, z, D, !0, !1, R) : L(_, E, I, z, D, W, M, H, R)
    }, ut = (h, _, E, I, z, D, W, M, H) => {
        let x = 0;
        const T = _.length;
        let R = h.length - 1,
            K = T - 1;
        for (; x <= R && x <= K;) {
            const Y = h[x],
                te = _[x] = H ? Nt(_[x]) : Qe(_[x]);
            if (ot(Y, te)) v(Y, te, E, null, z, D, W, M, H);
            else break;
            x++
        }
        for (; x <= R && x <= K;) {
            const Y = h[R],
                te = _[K] = H ? Nt(_[K]) : Qe(_[K]);
            if (ot(Y, te)) v(Y, te, E, null, z, D, W, M, H);
            else break;
            R--, K--
        }
        if (x > R) {
            if (x <= K) {
                const Y = K + 1,
                    te = Y < T ? _[Y].el : I;
                for (; x <= K;) v(null, _[x] = H ? Nt(_[x]) : Qe(_[x]), E, te, z, D, W, M, H), x++
            }
        } else if (x > K)
            for (; x <= R;) Ae(h[x], z, D, !0), x++;
        else {
            const Y = x,
                te = x,
                ue = new Map;
            for (x = te; x <= K; x++) {
                const je = _[x] = H ? Nt(_[x]) : Qe(_[x]);
                je.key != null && ue.set(je.key, x)
            }
            let se, be = 0;
            const Ge = K - te + 1;
            let ln = !1,
                ki = 0;
            const Un = new Array(Ge);
            for (x = 0; x < Ge; x++) Un[x] = 0;
            for (x = Y; x <= R; x++) {
                const je = h[x];
                if (be >= Ge) {
                    Ae(je, z, D, !0);
                    continue
                }
                let ft;
                if (je.key != null) ft = ue.get(je.key);
                else
                    for (se = te; se <= K; se++)
                        if (Un[se - te] === 0 && ot(je, _[se])) {
                            ft = se;
                            break
                        }
                ft === void 0 ? Ae(je, z, D, !0) : (Un[ft - te] = x + 1, ft >= ki ? ki = ft : ln = !0, v(je, _[ft], E, null, z, D, W, M, H), be++)
            }
            const Ri = ln ? nh(Un) : bn;
            for (se = Ri.length - 1, x = Ge - 1; x >= 0; x--) {
                const je = te + x,
                    ft = _[je],
                    Pi = je + 1 < T ? _[je + 1].el : I;
                Un[x] === 0 ? v(null, ft, E, Pi, z, D, W, M, H) : ln && (se < 0 || x !== Ri[se] ? Ye(ft, E, Pi, 2) : se--)
            }
        }
    }, Ye = (h, _, E, I, z = null) => {
        const {
            el: D,
            type: W,
            transition: M,
            children: H,
            shapeFlag: x
        } = h;
        if (x & 6) {
            Ye(h.component.subTree, _, E, I);
            return
        }
        if (x & 128) {
            h.suspense.move(_, E, I);
            return
        }
        if (x & 64) {
            W.move(h, _, E, j);
            return
        }
        if (W === Oe) {
            r(D, _, E);
            for (let R = 0; R < H.length; R++) Ye(H[R], _, E, I);
            r(h.anchor, _, E);
            return
        }
        if (W === Jn) {
            S(h, _, E);
            return
        }
        if (I !== 2 && x & 1 && M)
            if (I === 0) M.beforeEnter(D), r(D, _, E), Pe(() => M.enter(D), z);
            else {
                const {
                    leave: R,
                    delayLeave: K,
                    afterLeave: Y
                } = M, te = () => r(D, _, E), ue = () => {
                    R(D, () => {
                        te(), Y && Y()
                    })
                };
                K ? K(D, te, ue) : ue()
            }
        else r(D, _, E)
    }, Ae = (h, _, E, I = !1, z = !1) => {
        const {
            type: D,
            props: W,
            ref: M,
            children: H,
            dynamicChildren: x,
            shapeFlag: T,
            patchFlag: R,
            dirs: K
        } = h;
        if (M != null && Wr(M, null, E, h, !0), T & 256) {
            _.ctx.deactivate(h);
            return
        }
        const Y = T & 1 && K,
            te = !Qt(h);
        let ue;
        if (te && (ue = W && W.onVnodeBeforeUnmount) && $e(ue, _, h), T & 6) an(h.component, E, I);
        else {
            if (T & 128) {
                h.suspense.unmount(E, I);
                return
            }
            Y && dt(h, null, _, "beforeUnmount"), T & 64 ? h.type.remove(h, _, E, z, j, I) : x && (D !== Oe || R > 0 && R & 64) ? ke(x, _, E, !1, !0) : (D === Oe && R & 384 || !z && T & 16) && ke(H, _, E), I && Ht(h)
        }(te && (ue = W && W.onVnodeUnmounted) || Y) && Pe(() => {
            ue && $e(ue, _, h), Y && dt(h, null, _, "unmounted")
        }, E)
    }, Ht = h => {
        const {
            type: _,
            el: E,
            anchor: I,
            transition: z
        } = h;
        if (_ === Oe) {
            kt(E, I);
            return
        }
        if (_ === Jn) {
            y(h);
            return
        }
        const D = () => {
            o(E), z && !z.persisted && z.afterLeave && z.afterLeave()
        };
        if (h.shapeFlag & 1 && z && !z.persisted) {
            const {
                leave: W,
                delayLeave: M
            } = z, H = () => W(E, D);
            M ? M(h.el, D, H) : H()
        } else D()
    }, kt = (h, _) => {
        let E;
        for (; h !== _;) E = d(h), o(h), h = E;
        o(_)
    }, an = (h, _, E) => {
        const {
            bum: I,
            scope: z,
            update: D,
            subTree: W,
            um: M
        } = h;
        I && wn(I), z.stop(), D && (D.active = !1, Ae(W, h, _, E)), M && Pe(M, _), Pe(() => {
            h.isUnmounted = !0
        }, _), _ && _.pendingBranch && !_.isUnmounted && h.asyncDep && !h.asyncResolved && h.suspenseId === _.pendingId && (_.deps--, _.deps === 0 && _.resolve())
    }, ke = (h, _, E, I = !1, z = !1, D = 0) => {
        for (let W = D; W < h.length; W++) Ae(h[W], _, E, I, z)
    }, N = h => h.shapeFlag & 6 ? N(h.component.subTree) : h.shapeFlag & 128 ? h.suspense.next() : d(h.anchor || h.el), V = (h, _, E) => {
        h == null ? _._vnode && Ae(_._vnode, null, null, !0) : v(_._vnode || null, h, _, null, null, null, E), Fi(), Ur(), _._vnode = h
    }, j = {
        p: v,
        um: Ae,
        m: Ye,
        r: Ht,
        mt: U,
        mc: L,
        pc: oe,
        pbc: $,
        n: N,
        o: e
    };
    let G, ce;
    return t && ([G, ce] = t(j)), {
        render: V,
        hydrate: G,
        createApp: Kd(V, G)
    }
}

function jt({
    effect: e,
    update: t
}, n) {
    e.allowRecurse = t.allowRecurse = n
}

function li(e, t, n = !1) {
    const r = e.children,
        o = t.children;
    if (J(r) && J(o))
        for (let s = 0; s < r.length; s++) {
            const i = r[s];
            let a = o[s];
            a.shapeFlag & 1 && !a.dynamicChildren && ((a.patchFlag <= 0 || a.patchFlag === 32) && (a = o[s] = Nt(o[s]), a.el = i.el), n || li(i, a)), a.type === tn && (a.el = i.el)
        }
}

function nh(e) {
    const t = e.slice(),
        n = [0];
    let r, o, s, i, a;
    const l = e.length;
    for (r = 0; r < l; r++) {
        const c = e[r];
        if (c !== 0) {
            if (o = n[n.length - 1], e[o] < c) {
                t[r] = o, n.push(r);
                continue
            }
            for (s = 0, i = n.length - 1; s < i;) a = s + i >> 1, e[n[a]] < c ? s = a + 1 : i = a;
            c < e[n[s]] && (s > 0 && (t[r] = n[s - 1]), n[s] = r)
        }
    }
    for (s = n.length, i = n[s - 1]; s-- > 0;) n[s] = i, i = t[i];
    return n
}
const rh = e => e.__isTeleport,
    Gn = e => e && (e.disabled || e.disabled === ""),
    Gi = e => typeof SVGElement < "u" && e instanceof SVGElement,
    os = (e, t) => {
        const n = e && e.to;
        return ye(n) ? t ? t(n) : null : n
    },
    oh = {
        __isTeleport: !0,
        process(e, t, n, r, o, s, i, a, l, c) {
            const {
                mc: u,
                pc: f,
                pbc: d,
                o: {
                    insert: p,
                    querySelector: g,
                    createText: v,
                    createComment: C
                }
            } = c, b = Gn(t.props);
            let {
                shapeFlag: m,
                children: S,
                dynamicChildren: y
            } = t;
            if (e == null) {
                const w = t.el = v(""),
                    A = t.anchor = v("");
                p(w, n, r), p(A, n, r);
                const P = t.target = os(t.props, g),
                    L = t.targetAnchor = v("");
                P && (p(L, P), i = i || Gi(P));
                const F = ($, k) => {
                    m & 16 && u(S, $, k, o, s, i, a, l)
                };
                b ? F(n, A) : P && F(P, L)
            } else {
                t.el = e.el;
                const w = t.anchor = e.anchor,
                    A = t.target = e.target,
                    P = t.targetAnchor = e.targetAnchor,
                    L = Gn(e.props),
                    F = L ? n : A,
                    $ = L ? w : P;
                if (i = i || Gi(A), y ? (d(e.dynamicChildren, y, F, o, s, i, a), li(e, t, !0)) : l || f(e, t, F, $, o, s, i, a, !1), b) L || Ir(t, n, w, c, 1);
                else if ((t.props && t.props.to) !== (e.props && e.props.to)) {
                    const k = t.target = os(t.props, g);
                    k && Ir(t, k, null, c, 0)
                } else L && Ir(t, A, P, c, 1)
            }
            Sc(t)
        },
        remove(e, t, n, r, {
            um: o,
            o: {
                remove: s
            }
        }, i) {
            const {
                shapeFlag: a,
                children: l,
                anchor: c,
                targetAnchor: u,
                target: f,
                props: d
            } = e;
            if (f && s(u), (i || !Gn(d)) && (s(c), a & 16))
                for (let p = 0; p < l.length; p++) {
                    const g = l[p];
                    o(g, t, n, !0, !!g.dynamicChildren)
                }
        },
        move: Ir,
        hydrate: sh
    };

function Ir(e, t, n, {
    o: {
        insert: r
    },
    m: o
}, s = 2) {
    s === 0 && r(e.targetAnchor, t, n);
    const {
        el: i,
        anchor: a,
        shapeFlag: l,
        children: c,
        props: u
    } = e, f = s === 2;
    if (f && r(i, t, n), (!f || Gn(u)) && l & 16)
        for (let d = 0; d < c.length; d++) o(c[d], t, n, 2);
    f && r(a, t, n)
}

function sh(e, t, n, r, o, s, {
    o: {
        nextSibling: i,
        parentNode: a,
        querySelector: l
    }
}, c) {
    const u = t.target = os(t.props, l);
    if (u) {
        const f = u._lpa || u.firstChild;
        if (t.shapeFlag & 16)
            if (Gn(t.props)) t.anchor = c(i(e), t, a(e), n, r, o, s), t.targetAnchor = f;
            else {
                t.anchor = i(e);
                let d = f;
                for (; d;)
                    if (d = i(d), d && d.nodeType === 8 && d.data === "teleport anchor") {
                        t.targetAnchor = d, u._lpa = t.targetAnchor && i(t.targetAnchor);
                        break
                    }
                c(f, t, u, n, r, o, s)
            }
        Sc(t)
    }
    return t.anchor && i(t.anchor)
}
const xv = oh;

function Sc(e) {
    const t = e.ctx;
    if (t && t.ut) {
        let n = e.children[0].el;
        for (; n !== e.targetAnchor;) n.nodeType === 1 && n.setAttribute("data-v-owner", t.uid), n = n.nextSibling;
        t.ut()
    }
}
const Oe = Symbol.for("v-fgt"),
    tn = Symbol.for("v-txt"),
    Fe = Symbol.for("v-cmt"),
    Jn = Symbol.for("v-stc"),
    Qn = [];
let Ze = null;

function zt(e = !1) {
    Qn.push(Ze = e ? null : [])
}

function Ic() {
    Qn.pop(), Ze = Qn[Qn.length - 1] || null
}
let kn = 1;

function Ji(e) {
    kn += e
}

function Ac(e) {
    return e.dynamicChildren = kn > 0 ? Ze || bn : null, Ic(), kn > 0 && Ze && Ze.push(e), e
}

function zv(e, t, n, r, o, s) {
    return Ac(Nc(e, t, n, r, o, s, !0))
}

function Yt(e, t, n, r, o) {
    return Ac(_e(e, t, n, r, o, !0))
}

function Rn(e) {
    return e ? e.__v_isVNode === !0 : !1
}

function ot(e, t) {
    return e.type === t.type && e.key === t.key
}
const fo = "__vInternal",
    Oc = ({
        key: e
    }) => e ? ? null,
    zr = ({
        ref: e,
        ref_key: t,
        ref_for: n
    }) => (typeof e == "number" && (e = "" + e), e != null ? ye(e) || he(e) || Z(e) ? {
        i: Ie,
        r: e,
        k: t,
        f: !!n
    } : e : null);

function Nc(e, t = null, n = null, r = 0, o = null, s = e === Oe ? 0 : 1, i = !1, a = !1) {
    const l = {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e,
        props: t,
        key: t && Oc(t),
        ref: t && zr(t),
        scopeId: ao,
        slotScopeIds: null,
        children: n,
        component: null,
        suspense: null,
        ssContent: null,
        ssFallback: null,
        dirs: null,
        transition: null,
        el: null,
        anchor: null,
        target: null,
        targetAnchor: null,
        staticCount: 0,
        shapeFlag: s,
        patchFlag: r,
        dynamicProps: o,
        dynamicChildren: null,
        appContext: null,
        ctx: Ie
    };
    return a ? (ci(l, n), s & 128 && e.normalize(l)) : n && (l.shapeFlag |= ye(n) ? 8 : 16), kn > 0 && !i && Ze && (l.patchFlag > 0 || s & 6) && l.patchFlag !== 32 && Ze.push(l), l
}
const _e = ih;

function ih(e, t = null, n = null, r = 0, o = null, s = !1) {
    if ((!e || e === yc) && (e = Fe), Rn(e)) {
        const a = Tt(e, t, !0);
        return n && ci(a, n), kn > 0 && !s && Ze && (a.shapeFlag & 6 ? Ze[Ze.indexOf(e)] = a : Ze.push(a)), a.patchFlag |= -2, a
    }
    if (ph(e) && (e = e.__vccOpts), t) {
        t = ah(t);
        let {
            class: a,
            style: l
        } = t;
        a && !ye(a) && (t.class = no(a)), pe(l) && (Yl(l) && !J(l) && (l = Ce({}, l)), t.style = to(l))
    }
    const i = ye(e) ? 1 : ic(e) ? 128 : rh(e) ? 64 : pe(e) ? 4 : Z(e) ? 2 : 0;
    return Nc(e, t, n, r, o, i, s, !0)
}

function ah(e) {
    return e ? Yl(e) || fo in e ? Ce({}, e) : e : null
}

function Tt(e, t, n = !1) {
    const {
        props: r,
        ref: o,
        patchFlag: s,
        children: i
    } = e, a = t ? lh(r || {}, t) : r;
    return {
        __v_isVNode: !0,
        __v_skip: !0,
        type: e.type,
        props: a,
        key: a && Oc(a),
        ref: t && t.ref ? n && o ? J(o) ? o.concat(zr(t)) : [o, zr(t)] : zr(t) : o,
        scopeId: e.scopeId,
        slotScopeIds: e.slotScopeIds,
        children: i,
        target: e.target,
        targetAnchor: e.targetAnchor,
        staticCount: e.staticCount,
        shapeFlag: e.shapeFlag,
        patchFlag: t && e.type !== Oe ? s === -1 ? 16 : s | 16 : s,
        dynamicProps: e.dynamicProps,
        dynamicChildren: e.dynamicChildren,
        appContext: e.appContext,
        dirs: e.dirs,
        transition: e.transition,
        component: e.component,
        suspense: e.suspense,
        ssContent: e.ssContent && Tt(e.ssContent),
        ssFallback: e.ssFallback && Tt(e.ssFallback),
        el: e.el,
        anchor: e.anchor,
        ctx: e.ctx,
        ce: e.ce
    }
}

function xc(e = " ", t = 0) {
    return _e(tn, null, e, t)
}

function Dv(e, t) {
    const n = _e(Jn, null, e);
    return n.staticCount = t, n
}

function Fv(e = "", t = !1) {
    return t ? (zt(), Yt(Fe, null, e)) : _e(Fe, null, e)
}

function Qe(e) {
    return e == null || typeof e == "boolean" ? _e(Fe) : J(e) ? _e(Oe, null, e.slice()) : typeof e == "object" ? Nt(e) : _e(tn, null, String(e))
}

function Nt(e) {
    return e.el === null && e.patchFlag !== -1 || e.memo ? e : Tt(e)
}

function ci(e, t) {
    let n = 0;
    const {
        shapeFlag: r
    } = e;
    if (t == null) t = null;
    else if (J(t)) n = 16;
    else if (typeof t == "object")
        if (r & 65) {
            const o = t.default;
            o && (o._c && (o._d = !1), ci(e, o()), o._c && (o._d = !0));
            return
        } else {
            n = 32;
            const o = t._;
            !o && !(fo in t) ? t._ctx = Ie : o === 3 && Ie && (Ie.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024))
        }
    else Z(t) ? (t = {
        default: t,
        _ctx: Ie
    }, n = 32) : (t = String(t), r & 64 ? (n = 16, t = [xc(t)]) : n = 8);
    e.children = t, e.shapeFlag |= n
}

function lh(...e) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
        const r = e[n];
        for (const o in r)
            if (o === "class") t.class !== r.class && (t.class = no([t.class, r.class]));
            else if (o === "style") t.style = to([t.style, r.style]);
        else if (mr(o)) {
            const s = t[o],
                i = r[o];
            i && s !== i && !(J(s) && s.includes(i)) && (t[o] = s ? [].concat(s, i) : i)
        } else o !== "" && (t[o] = r[o])
    }
    return t
}

function $e(e, t, n, r = null) {
    et(e, t, 7, [n, r])
}
const ch = Ec();
let uh = 0;

function fh(e, t, n) {
    const r = e.type,
        o = (t ? t.appContext : e.appContext) || ch,
        s = {
            uid: uh++,
            vnode: e,
            type: r,
            parent: t,
            appContext: o,
            root: null,
            next: null,
            subTree: null,
            effect: null,
            update: null,
            scope: new zl(!0),
            render: null,
            proxy: null,
            exposed: null,
            exposeProxy: null,
            withProxy: null,
            provides: t ? t.provides : Object.create(o.provides),
            accessCache: null,
            renderCache: [],
            components: null,
            directives: null,
            propsOptions: Cc(r, o),
            emitsOptions: sc(r, o),
            emit: null,
            emitted: null,
            propsDefaults: ge,
            inheritAttrs: r.inheritAttrs,
            ctx: ge,
            data: ge,
            props: ge,
            attrs: ge,
            slots: ge,
            refs: ge,
            setupState: ge,
            setupContext: null,
            attrsProxy: null,
            slotsProxy: null,
            suspense: n,
            suspenseId: n ? n.pendingId : 0,
            asyncDep: null,
            asyncResolved: !1,
            isMounted: !1,
            isUnmounted: !1,
            isDeactivated: !1,
            bc: null,
            c: null,
            bm: null,
            m: null,
            bu: null,
            u: null,
            um: null,
            bum: null,
            da: null,
            a: null,
            rtg: null,
            rtc: null,
            ec: null,
            sp: null
        };
    return s.ctx = {
        _: s
    }, s.root = t ? t.root : s, s.emit = pd.bind(null, s), e.ce && e.ce(s), s
}
let Le = null;
const ct = () => Le || Ie;
let ui, cn, Qi = "__VUE_INSTANCE_SETTERS__";
(cn = Ko()[Qi]) || (cn = Ko()[Qi] = []), cn.push(e => Le = e), ui = e => {
    cn.length > 1 ? cn.forEach(t => t(e)) : cn[0](e)
};
const Pn = e => {
        ui(e), e.scope.on()
    },
    Zt = () => {
        Le && Le.scope.off(), ui(null)
    };

function zc(e) {
    return e.vnode.shapeFlag & 4
}
let Sn = !1;

function dh(e, t = !1) {
    Sn = t;
    const {
        props: n,
        children: r
    } = e.vnode, o = zc(e);
    qd(e, n, o, t), Jd(e, r);
    const s = o ? hh(e, t) : void 0;
    return Sn = !1, s
}

function hh(e, t) {
    const n = e.type;
    e.accessCache = Object.create(null), e.proxy = Ln(new Proxy(e.ctx, Ud));
    const {
        setup: r
    } = n;
    if (r) {
        const o = e.setupContext = r.length > 1 ? Fc(e) : null;
        Pn(e), xn();
        const s = Ft(r, e, 0, [e.props, o]);
        if (zn(), Zt(), Sl(s)) {
            if (s.then(Zt, Zt), t) return s.then(i => {
                ss(e, i, t)
            }).catch(i => {
                Dn(i, e, 0)
            });
            e.asyncDep = s
        } else ss(e, s, t)
    } else Dc(e, t)
}

function ss(e, t, n) {
    Z(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : pe(t) && (e.setupState = Zl(t)), Dc(e, n)
}
let Zi;

function Dc(e, t, n) {
    const r = e.type;
    if (!e.render) {
        if (!t && Zi && !r.render) {
            const o = r.template || ii(e).template;
            if (o) {
                const {
                    isCustomElement: s,
                    compilerOptions: i
                } = e.appContext.config, {
                    delimiters: a,
                    compilerOptions: l
                } = r, c = Ce(Ce({
                    isCustomElement: s,
                    delimiters: a
                }, i), l);
                r.render = Zi(o, c)
            }
        }
        e.render = r.render || st
    }
    Pn(e), xn(), Hd(e), zn(), Zt()
}

function mh(e) {
    return e.attrsProxy || (e.attrsProxy = new Proxy(e.attrs, {
        get(t, n) {
            return He(e, "get", "$attrs"), t[n]
        }
    }))
}

function Fc(e) {
    const t = n => {
        e.exposed = n || {}
    };
    return {
        get attrs() {
            return mh(e)
        },
        slots: e.slots,
        emit: e.emit,
        expose: t
    }
}

function ho(e) {
    if (e.exposed) return e.exposeProxy || (e.exposeProxy = new Proxy(Zl(Ln(e.exposed)), {
        get(t, n) {
            if (n in t) return t[n];
            if (n in Yn) return Yn[n](e)
        },
        has(t, n) {
            return n in t || n in Yn
        }
    }))
}

function is(e, t = !0) {
    return Z(e) ? e.displayName || e.name : e.name || t && e.__name
}

function ph(e) {
    return Z(e) && "__vccOpts" in e
}
const me = (e, t) => ud(e, t, Sn);

function Ke(e, t, n) {
    const r = arguments.length;
    return r === 2 ? pe(t) && !J(t) ? Rn(t) ? _e(e, null, [t]) : _e(e, t) : _e(e, null, t) : (r > 3 ? n = Array.prototype.slice.call(arguments, 2) : r === 3 && Rn(n) && (n = [n]), _e(e, t, n))
}
const gh = Symbol.for("v-scx"),
    _h = () => xe(gh),
    Mc = "3.3.4",
    yh = "http://www.w3.org/2000/svg",
    Kt = typeof document < "u" ? document : null,
    ea = Kt && Kt.createElement("template"),
    bh = {
        insert: (e, t, n) => {
            t.insertBefore(e, n || null)
        },
        remove: e => {
            const t = e.parentNode;
            t && t.removeChild(e)
        },
        createElement: (e, t, n, r) => {
            const o = t ? Kt.createElementNS(yh, e) : Kt.createElement(e, n ? {
                is: n
            } : void 0);
            return e === "select" && r && r.multiple != null && o.setAttribute("multiple", r.multiple), o
        },
        createText: e => Kt.createTextNode(e),
        createComment: e => Kt.createComment(e),
        setText: (e, t) => {
            e.nodeValue = t
        },
        setElementText: (e, t) => {
            e.textContent = t
        },
        parentNode: e => e.parentNode,
        nextSibling: e => e.nextSibling,
        querySelector: e => Kt.querySelector(e),
        setScopeId(e, t) {
            e.setAttribute(t, "")
        },
        insertStaticContent(e, t, n, r, o, s) {
            const i = n ? n.previousSibling : t.lastChild;
            if (o && (o === s || o.nextSibling))
                for (; t.insertBefore(o.cloneNode(!0), n), !(o === s || !(o = o.nextSibling)););
            else {
                ea.innerHTML = r ? `<svg>${e}</svg>` : e;
                const a = ea.content;
                if (r) {
                    const l = a.firstChild;
                    for (; l.firstChild;) a.appendChild(l.firstChild);
                    a.removeChild(l)
                }
                t.insertBefore(a, n)
            }
            return [i ? i.nextSibling : t.firstChild, n ? n.previousSibling : t.lastChild]
        }
    };

function vh(e, t, n) {
    const r = e._vtc;
    r && (t = (t ? [t, ...r] : [...r]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t
}

function wh(e, t, n) {
    const r = e.style,
        o = ye(n);
    if (n && !o) {
        if (t && !ye(t))
            for (const s in t) n[s] == null && as(r, s, "");
        for (const s in n) as(r, s, n[s])
    } else {
        const s = r.display;
        o ? t !== n && (r.cssText = n) : t && e.removeAttribute("style"), "_vod" in e && (r.display = s)
    }
}
const ta = /\s*!important$/;

function as(e, t, n) {
    if (J(n)) n.forEach(r => as(e, t, r));
    else if (n == null && (n = ""), t.startsWith("--")) e.setProperty(t, n);
    else {
        const r = Eh(e, t);
        ta.test(n) ? e.setProperty(nn(r), n.replace(ta, ""), "important") : e[r] = n
    }
}
const na = ["Webkit", "Moz", "ms"],
    No = {};

function Eh(e, t) {
    const n = No[t];
    if (n) return n;
    let r = pt(t);
    if (r !== "filter" && r in e) return No[t] = r;
    r = eo(r);
    for (let o = 0; o < na.length; o++) {
        const s = na[o] + r;
        if (s in e) return No[t] = s
    }
    return t
}
const ra = "http://www.w3.org/1999/xlink";

function Th(e, t, n, r, o) {
    if (r && t.startsWith("xlink:")) n == null ? e.removeAttributeNS(ra, t.slice(6, t.length)) : e.setAttributeNS(ra, t, n);
    else {
        const s = Pf(t);
        n == null || s && !Nl(n) ? e.removeAttribute(t) : e.setAttribute(t, s ? "" : n)
    }
}

function Ch(e, t, n, r, o, s, i) {
    if (t === "innerHTML" || t === "textContent") {
        r && i(r, o, s), e[t] = n ? ? "";
        return
    }
    const a = e.tagName;
    if (t === "value" && a !== "PROGRESS" && !a.includes("-")) {
        e._value = n;
        const c = a === "OPTION" ? e.getAttribute("value") : e.value,
            u = n ? ? "";
        c !== u && (e.value = u), n == null && e.removeAttribute(t);
        return
    }
    let l = !1;
    if (n === "" || n == null) {
        const c = typeof e[t];
        c === "boolean" ? n = Nl(n) : n == null && c === "string" ? (n = "", l = !0) : c === "number" && (n = 0, l = !0)
    }
    try {
        e[t] = n
    } catch {}
    l && e.removeAttribute(t)
}

function hn(e, t, n, r) {
    e.addEventListener(t, n, r)
}

function Lh(e, t, n, r) {
    e.removeEventListener(t, n, r)
}

function kh(e, t, n, r, o = null) {
    const s = e._vei || (e._vei = {}),
        i = s[t];
    if (r && i) i.value = r;
    else {
        const [a, l] = Rh(t);
        if (r) {
            const c = s[t] = Ih(r, o);
            hn(e, a, c, l)
        } else i && (Lh(e, a, i, l), s[t] = void 0)
    }
}
const oa = /(?:Once|Passive|Capture)$/;

function Rh(e) {
    let t;
    if (oa.test(e)) {
        t = {};
        let r;
        for (; r = e.match(oa);) e = e.slice(0, e.length - r[0].length), t[r[0].toLowerCase()] = !0
    }
    return [e[2] === ":" ? e.slice(3) : nn(e.slice(2)), t]
}
let xo = 0;
const Ph = Promise.resolve(),
    Sh = () => xo || (Ph.then(() => xo = 0), xo = Date.now());

function Ih(e, t) {
    const n = r => {
        if (!r._vts) r._vts = Date.now();
        else if (r._vts <= n.attached) return;
        et(Ah(r, n.value), t, 5, [r])
    };
    return n.value = e, n.attached = Sh(), n
}

function Ah(e, t) {
    if (J(t)) {
        const n = e.stopImmediatePropagation;
        return e.stopImmediatePropagation = () => {
            n.call(e), e._stopped = !0
        }, t.map(r => o => !o._stopped && r && r(o))
    } else return t
}
const sa = /^on[a-z]/,
    Oh = (e, t, n, r, o = !1, s, i, a, l) => {
        t === "class" ? vh(e, r, o) : t === "style" ? wh(e, n, r) : mr(t) ? Hs(t) || kh(e, t, n, r, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Nh(e, t, r, o)) ? Ch(e, t, r, s, i, a, l) : (t === "true-value" ? e._trueValue = r : t === "false-value" && (e._falseValue = r), Th(e, t, r, o))
    };

function Nh(e, t, n, r) {
    return r ? !!(t === "innerHTML" || t === "textContent" || t in e && sa.test(t) && Z(n)) : t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA" || sa.test(t) && ye(n) ? !1 : t in e
}
const St = "transition",
    $n = "animation",
    mo = (e, {
        slots: t
    }) => Ke(Id, xh(e), t);
mo.displayName = "Transition";
const Uc = {
    name: String,
    type: String,
    css: {
        type: Boolean,
        default: !0
    },
    duration: [String, Number, Object],
    enterFromClass: String,
    enterActiveClass: String,
    enterToClass: String,
    appearFromClass: String,
    appearActiveClass: String,
    appearToClass: String,
    leaveFromClass: String,
    leaveActiveClass: String,
    leaveToClass: String
};
mo.props = Ce({}, uc, Uc);
const Bt = (e, t = []) => {
        J(e) ? e.forEach(n => n(...t)) : e && e(...t)
    },
    ia = e => e ? J(e) ? e.some(t => t.length > 1) : e.length > 1 : !1;

function xh(e) {
    const t = {};
    for (const O in e) O in Uc || (t[O] = e[O]);
    if (e.css === !1) return t;
    const {
        name: n = "v",
        type: r,
        duration: o,
        enterFromClass: s = `${n}-enter-from`,
        enterActiveClass: i = `${n}-enter-active`,
        enterToClass: a = `${n}-enter-to`,
        appearFromClass: l = s,
        appearActiveClass: c = i,
        appearToClass: u = a,
        leaveFromClass: f = `${n}-leave-from`,
        leaveActiveClass: d = `${n}-leave-active`,
        leaveToClass: p = `${n}-leave-to`
    } = e, g = zh(o), v = g && g[0], C = g && g[1], {
        onBeforeEnter: b,
        onEnter: m,
        onEnterCancelled: S,
        onLeave: y,
        onLeaveCancelled: w,
        onBeforeAppear: A = b,
        onAppear: P = m,
        onAppearCancelled: L = S
    } = t, F = (O, B, U) => {
        Wt(O, B ? u : a), Wt(O, B ? c : i), U && U()
    }, $ = (O, B) => {
        O._isLeaving = !1, Wt(O, f), Wt(O, p), Wt(O, d), B && B()
    }, k = O => (B, U) => {
        const Q = O ? P : m,
            ne = () => F(B, O, U);
        Bt(Q, [B, ne]), aa(() => {
            Wt(B, O ? l : s), It(B, O ? u : a), ia(Q) || la(B, r, v, ne)
        })
    };
    return Ce(t, {
        onBeforeEnter(O) {
            Bt(b, [O]), It(O, s), It(O, i)
        },
        onBeforeAppear(O) {
            Bt(A, [O]), It(O, l), It(O, c)
        },
        onEnter: k(!1),
        onAppear: k(!0),
        onLeave(O, B) {
            O._isLeaving = !0;
            const U = () => $(O, B);
            It(O, f), Mh(), It(O, d), aa(() => {
                O._isLeaving && (Wt(O, f), It(O, p), ia(y) || la(O, r, C, U))
            }), Bt(y, [O, U])
        },
        onEnterCancelled(O) {
            F(O, !1), Bt(S, [O])
        },
        onAppearCancelled(O) {
            F(O, !0), Bt(L, [O])
        },
        onLeaveCancelled(O) {
            $(O), Bt(w, [O])
        }
    })
}

function zh(e) {
    if (e == null) return null;
    if (pe(e)) return [zo(e.enter), zo(e.leave)]; {
        const t = zo(e);
        return [t, t]
    }
}

function zo(e) {
    return Ol(e)
}

function It(e, t) {
    t.split(/\s+/).forEach(n => n && e.classList.add(n)), (e._vtc || (e._vtc = new Set)).add(t)
}

function Wt(e, t) {
    t.split(/\s+/).forEach(r => r && e.classList.remove(r));
    const {
        _vtc: n
    } = e;
    n && (n.delete(t), n.size || (e._vtc = void 0))
}

function aa(e) {
    requestAnimationFrame(() => {
        requestAnimationFrame(e)
    })
}
let Dh = 0;

function la(e, t, n, r) {
    const o = e._endId = ++Dh,
        s = () => {
            o === e._endId && r()
        };
    if (n) return setTimeout(s, n);
    const {
        type: i,
        timeout: a,
        propCount: l
    } = Fh(e, t);
    if (!i) return r();
    const c = i + "end";
    let u = 0;
    const f = () => {
            e.removeEventListener(c, d), s()
        },
        d = p => {
            p.target === e && ++u >= l && f()
        };
    setTimeout(() => {
        u < l && f()
    }, a + 1), e.addEventListener(c, d)
}

function Fh(e, t) {
    const n = window.getComputedStyle(e),
        r = g => (n[g] || "").split(", "),
        o = r(`${St}Delay`),
        s = r(`${St}Duration`),
        i = ca(o, s),
        a = r(`${$n}Delay`),
        l = r(`${$n}Duration`),
        c = ca(a, l);
    let u = null,
        f = 0,
        d = 0;
    t === St ? i > 0 && (u = St, f = i, d = s.length) : t === $n ? c > 0 && (u = $n, f = c, d = l.length) : (f = Math.max(i, c), u = f > 0 ? i > c ? St : $n : null, d = u ? u === St ? s.length : l.length : 0);
    const p = u === St && /\b(transform|all)(,|$)/.test(r(`${St}Property`).toString());
    return {
        type: u,
        timeout: f,
        propCount: d,
        hasTransform: p
    }
}

function ca(e, t) {
    for (; e.length < t.length;) e = e.concat(e);
    return Math.max(...t.map((n, r) => ua(n) + ua(e[r])))
}

function ua(e) {
    return Number(e.slice(0, -1).replace(",", ".")) * 1e3
}

function Mh() {
    return document.body.offsetHeight
}
const fa = e => {
    const t = e.props["onUpdate:modelValue"] || !1;
    return J(t) ? n => wn(t, n) : t
};

function Uh(e) {
    e.target.composing = !0
}

function da(e) {
    const t = e.target;
    t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")))
}
const Mv = {
        created(e, {
            modifiers: {
                lazy: t,
                trim: n,
                number: r
            }
        }, o) {
            e._assign = fa(o);
            const s = r || o.props && o.props.type === "number";
            hn(e, t ? "change" : "input", i => {
                if (i.target.composing) return;
                let a = e.value;
                n && (a = a.trim()), s && (a = Xo(a)), e._assign(a)
            }), n && hn(e, "change", () => {
                e.value = e.value.trim()
            }), t || (hn(e, "compositionstart", Uh), hn(e, "compositionend", da), hn(e, "change", da))
        },
        mounted(e, {
            value: t
        }) {
            e.value = t ? ? ""
        },
        beforeUpdate(e, {
            value: t,
            modifiers: {
                lazy: n,
                trim: r,
                number: o
            }
        }, s) {
            if (e._assign = fa(s), e.composing || document.activeElement === e && e.type !== "range" && (n || r && e.value.trim() === t || (o || e.type === "number") && Xo(e.value) === t)) return;
            const i = t ? ? "";
            e.value !== i && (e.value = i)
        }
    },
    $h = ["ctrl", "shift", "alt", "meta"],
    Hh = {
        stop: e => e.stopPropagation(),
        prevent: e => e.preventDefault(),
        self: e => e.target !== e.currentTarget,
        ctrl: e => !e.ctrlKey,
        shift: e => !e.shiftKey,
        alt: e => !e.altKey,
        meta: e => !e.metaKey,
        left: e => "button" in e && e.button !== 0,
        middle: e => "button" in e && e.button !== 1,
        right: e => "button" in e && e.button !== 2,
        exact: (e, t) => $h.some(n => e[`${n}Key`] && !t.includes(n))
    },
    Uv = (e, t) => (n, ...r) => {
        for (let o = 0; o < t.length; o++) {
            const s = Hh[t[o]];
            if (s && s(n, t)) return
        }
        return e(n, ...r)
    },
    jh = {
        esc: "escape",
        space: " ",
        up: "arrow-up",
        left: "arrow-left",
        right: "arrow-right",
        down: "arrow-down",
        delete: "backspace"
    },
    $v = (e, t) => n => {
        if (!("key" in n)) return;
        const r = nn(n.key);
        if (t.some(o => o === r || jh[o] === r)) return e(n)
    },
    $c = Ce({
        patchProp: Oh
    }, bh);
let Zn, ha = !1;

function Bh() {
    return Zn || (Zn = eh($c))
}

function Wh() {
    return Zn = ha ? Zn : th($c), ha = !0, Zn
}
const Vh = (...e) => {
        const t = Bh().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const o = Hc(r);
            if (!o) return;
            const s = t._component;
            !Z(s) && !s.render && !s.template && (s.template = o.innerHTML), o.innerHTML = "";
            const i = n(o, !1, o instanceof SVGElement);
            return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i
        }, t
    },
    Xh = (...e) => {
        const t = Wh().createApp(...e),
            {
                mount: n
            } = t;
        return t.mount = r => {
            const o = Hc(r);
            if (o) return n(o, !0, o instanceof SVGElement)
        }, t
    };

function Hc(e) {
    return ye(e) ? document.querySelector(e) : e
}
const Kh = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    qh = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    Yh = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;

function Gh(e, t) {
    if (e === "__proto__" || e === "constructor" && t && typeof t == "object" && "prototype" in t) {
        Jh(e);
        return
    }
    return t
}

function Jh(e) {
    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`)
}

function Qh(e, t = {}) {
    if (typeof e != "string") return e;
    const n = e.trim();
    if (e[0] === '"' && e[e.length - 1] === '"') return n.slice(1, -1);
    if (n.length <= 9) {
        const r = n.toLowerCase();
        if (r === "true") return !0;
        if (r === "false") return !1;
        if (r === "undefined") return;
        if (r === "null") return null;
        if (r === "nan") return Number.NaN;
        if (r === "infinity") return Number.POSITIVE_INFINITY;
        if (r === "-infinity") return Number.NEGATIVE_INFINITY
    }
    if (!Yh.test(e)) {
        if (t.strict) throw new SyntaxError("[destr] Invalid JSON");
        return e
    }
    try {
        if (Kh.test(e) || qh.test(e)) {
            if (t.strict) throw new Error("[destr] Possible prototype pollution");
            return JSON.parse(e, Gh)
        }
        return JSON.parse(e)
    } catch (r) {
        if (t.strict) throw r;
        return e
    }
}
const Zh = /#/g,
    em = /&/g,
    tm = /=/g,
    fi = /\+/g,
    nm = /%5e/gi,
    rm = /%60/gi,
    om = /%7c/gi,
    sm = /%20/gi;

function im(e) {
    return encodeURI("" + e).replace(om, "|")
}

function ls(e) {
    return im(typeof e == "string" ? e : JSON.stringify(e)).replace(fi, "%2B").replace(sm, "+").replace(Zh, "%23").replace(em, "%26").replace(rm, "`").replace(nm, "^")
}

function Do(e) {
    return ls(e).replace(tm, "%3D")
}

function jc(e = "") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}

function am(e) {
    return jc(e.replace(fi, " "))
}

function lm(e) {
    return jc(e.replace(fi, " "))
}

function cm(e = "") {
    const t = {};
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2) continue;
        const o = am(r[1]);
        if (o === "__proto__" || o === "constructor") continue;
        const s = lm(r[2] || "");
        t[o] === void 0 ? t[o] = s : Array.isArray(t[o]) ? t[o].push(s) : t[o] = [t[o], s]
    }
    return t
}

function um(e, t) {
    return (typeof t == "number" || typeof t == "boolean") && (t = String(t)), t ? Array.isArray(t) ? t.map(n => `${Do(e)}=${ls(n)}`).join("&") : `${Do(e)}=${ls(t)}` : Do(e)
}

function fm(e) {
    return Object.keys(e).filter(t => e[t] !== void 0).map(t => um(t, e[t])).filter(Boolean).join("&")
}
const dm = /^\w{2,}:([/\\]{1,2})/,
    hm = /^\w{2,}:([/\\]{2})?/,
    mm = /^([/\\]\s*){2,}[^/\\]/;

function Bc(e, t = {}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }), t.strict ? dm.test(e) : hm.test(e) || (t.acceptRelative ? mm.test(e) : !1)
}
const pm = /\/$|\/\?/;

function cs(e = "", t = !1) {
    return t ? pm.test(e) : e.endsWith("/")
}

function gm(e = "", t = !1) {
    if (!t) return (cs(e) ? e.slice(0, -1) : e) || "/";
    if (!cs(e, !0)) return e || "/";
    const [n, ...r] = e.split("?");
    return (n.slice(0, -1) || "/") + (r.length > 0 ? `?${r.join("?")}` : "")
}

function _m(e = "", t = !1) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (cs(e, !0)) return e || "/";
    const [n, ...r] = e.split("?");
    return n + "/" + (r.length > 0 ? `?${r.join("?")}` : "")
}

function ym(e, t) {
    if (vm(t) || Bc(e)) return e;
    const n = gm(t);
    return e.startsWith(n) ? e : Tm(n, e)
}

function bm(e, t) {
    const n = Wc(e),
        r = { ...cm(n.search),
            ...t
        };
    return n.search = fm(r), Cm(n)
}

function vm(e) {
    return !e || e === "/"
}

function wm(e) {
    return e && e !== "/"
}
const Em = /^\.?\//;

function Tm(e, ...t) {
    let n = e || "";
    for (const r of t.filter(o => wm(o)))
        if (n) {
            const o = r.replace(Em, "");
            n = _m(n) + o
        } else n = r;
    return n
}

function Wc(e = "", t) {
    if (!Bc(e, {
            acceptRelative: !0
        })) return t ? Wc(t + e) : ma(e);
    const [n = "", r, o = ""] = (e.replace(/\\/g, "/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1), [s = "", i = ""] = (o.match(/([^#/?]*)(.*)?/) || []).splice(1), {
        pathname: a,
        search: l,
        hash: c
    } = ma(i.replace(/\/(?=[A-Za-z]:)/, ""));
    return {
        protocol: n,
        auth: r ? r.slice(0, Math.max(0, r.length - 1)) : "",
        host: s,
        pathname: a,
        search: l,
        hash: c
    }
}

function ma(e = "") {
    const [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}

function Cm(e) {
    const t = e.pathname + (e.search ? (e.search.startsWith("?") ? "" : "?") + e.search : "") + e.hash;
    return e.protocol ? e.protocol + "//" + (e.auth ? e.auth + "@" : "") + e.host + t : t
}
class Lm extends Error {
    constructor() {
        super(...arguments), this.name = "FetchError"
    }
}

function km(e, t, n) {
    let r = "";
    t && (r = t.message), e && n ? r = `${r} (${n.status} ${n.statusText} (${e.toString()}))` : e && (r = `${r} (${e.toString()})`);
    const o = new Lm(r);
    return Object.defineProperty(o, "request", {
        get() {
            return e
        }
    }), Object.defineProperty(o, "response", {
        get() {
            return n
        }
    }), Object.defineProperty(o, "data", {
        get() {
            return n && n._data
        }
    }), Object.defineProperty(o, "status", {
        get() {
            return n && n.status
        }
    }), Object.defineProperty(o, "statusText", {
        get() {
            return n && n.statusText
        }
    }), Object.defineProperty(o, "statusCode", {
        get() {
            return n && n.status
        }
    }), Object.defineProperty(o, "statusMessage", {
        get() {
            return n && n.statusText
        }
    }), o
}
const Rm = new Set(Object.freeze(["PATCH", "POST", "PUT", "DELETE"]));

function pa(e = "GET") {
    return Rm.has(e.toUpperCase())
}

function Pm(e) {
    if (e === void 0) return !1;
    const t = typeof e;
    return t === "string" || t === "number" || t === "boolean" || t === null ? !0 : t !== "object" ? !1 : Array.isArray(e) ? !0 : e.constructor && e.constructor.name === "Object" || typeof e.toJSON == "function"
}
const Sm = new Set(["image/svg", "application/xml", "application/xhtml", "application/html"]),
    Im = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;

function Am(e = "") {
    if (!e) return "json";
    const t = e.split(";").shift() || "";
    return Im.test(t) ? "json" : Sm.has(t) || t.startsWith("text/") ? "text" : "blob"
}

function Om(e, t, n = globalThis.Headers) {
    const r = { ...t,
        ...e
    };
    if (t != null && t.params && (e != null && e.params) && (r.params = { ...t == null ? void 0 : t.params,
            ...e == null ? void 0 : e.params
        }), t != null && t.query && (e != null && e.query) && (r.query = { ...t == null ? void 0 : t.query,
            ...e == null ? void 0 : e.query
        }), t != null && t.headers && (e != null && e.headers)) {
        r.headers = new n((t == null ? void 0 : t.headers) || {});
        for (const [o, s] of new n((e == null ? void 0 : e.headers) || {})) r.headers.set(o, s)
    }
    return r
}
const Nm = new Set([408, 409, 425, 429, 500, 502, 503, 504]);

function Vc(e) {
    const {
        fetch: t,
        Headers: n
    } = e;

    function r(i) {
        const a = i.error && i.error.name === "AbortError" || !1;
        if (i.options.retry !== !1 && !a) {
            let c;
            typeof i.options.retry == "number" ? c = i.options.retry : c = pa(i.options.method) ? 0 : 1;
            const u = i.response && i.response.status || 500;
            if (c > 0 && Nm.has(u)) return o(i.request, { ...i.options,
                retry: c - 1
            })
        }
        const l = km(i.request, i.error, i.response);
        throw Error.captureStackTrace && Error.captureStackTrace(l, o), l
    }
    const o = async function(a, l = {}) {
            const c = {
                request: a,
                options: Om(l, e.defaults, n),
                response: void 0,
                error: void 0
            };
            c.options.onRequest && await c.options.onRequest(c), typeof c.request == "string" && (c.options.baseURL && (c.request = ym(c.request, c.options.baseURL)), (c.options.query || c.options.params) && (c.request = bm(c.request, { ...c.options.params,
                ...c.options.query
            })), c.options.body && pa(c.options.method) && Pm(c.options.body) && (c.options.body = typeof c.options.body == "string" ? c.options.body : JSON.stringify(c.options.body), c.options.headers = new n(c.options.headers || {}), c.options.headers.has("content-type") || c.options.headers.set("content-type", "application/json"), c.options.headers.has("accept") || c.options.headers.set("accept", "application/json")));
            try {
                c.response = await t(c.request, c.options)
            } catch (f) {
                return c.error = f, c.options.onRequestError && await c.options.onRequestError(c), await r(c)
            }
            const u = (c.options.parseResponse ? "json" : c.options.responseType) || Am(c.response.headers.get("content-type") || "");
            if (u === "json") {
                const f = await c.response.text(),
                    d = c.options.parseResponse || Qh;
                c.response._data = d(f)
            } else u === "stream" ? c.response._data = c.response.body : c.response._data = await c.response[u]();
            return c.options.onResponse && await c.options.onResponse(c), !c.options.ignoreResponseError && c.response.status >= 400 && c.response.status < 600 ? (c.options.onResponseError && await c.options.onResponseError(c), await r(c)) : c.response
        },
        s = async function(a, l) {
            return (await o(a, l))._data
        };
    return s.raw = o, s.native = t, s.create = (i = {}) => Vc({ ...e,
        defaults: { ...e.defaults,
            ...i
        }
    }), s
}
const Xc = function() {
        if (typeof globalThis < "u") return globalThis;
        if (typeof self < "u") return self;
        if (typeof window < "u") return window;
        if (typeof global < "u") return global;
        throw new Error("unable to locate global object")
    }(),
    xm = Xc.fetch || (() => Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),
    zm = Xc.Headers,
    Dm = Vc({
        fetch: xm,
        Headers: zm
    }),
    Fm = Dm,
    Mm = /\+/g;

function Kc(e = "") {
    try {
        return decodeURIComponent("" + e)
    } catch {
        return "" + e
    }
}

function Um(e) {
    return Kc(e.replace(Mm, " "))
}

function Hv(e = "") {
    const t = {};
    e[0] === "?" && (e = e.slice(1));
    for (const n of e.split("&")) {
        const r = n.match(/([^=]+)=?(.*)/) || [];
        if (r.length < 2) continue;
        const o = Kc(r[1]);
        if (o === "__proto__" || o === "constructor") continue;
        const s = Um(r[2] || "");
        typeof t[o] < "u" ? Array.isArray(t[o]) ? t[o].push(s) : t[o] = [t[o], s] : t[o] = s
    }
    return t
}
const $m = /^\w{2,}:([/\\]{1,2})/,
    Hm = /^\w{2,}:([/\\]{2})?/,
    jm = /^([/\\]\s*){2,}[^/\\]/;

function _r(e, t = {}) {
    return typeof t == "boolean" && (t = {
        acceptRelative: t
    }), t.strict ? $m.test(e) : Hm.test(e) || (t.acceptRelative ? jm.test(e) : !1)
}
const Bm = /\/$|\/\?/;

function us(e = "", t = !1) {
    return t ? Bm.test(e) : e.endsWith("/")
}

function qc(e = "", t = !1) {
    if (!t) return (us(e) ? e.slice(0, -1) : e) || "/";
    if (!us(e, !0)) return e || "/";
    const [n, ...r] = e.split("?");
    return (n.slice(0, -1) || "/") + (r.length > 0 ? `?${r.join("?")}` : "")
}

function Wm(e = "", t = !1) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (us(e, !0)) return e || "/";
    const [n, ...r] = e.split("?");
    return n + "/" + (r.length > 0 ? `?${r.join("?")}` : "")
}

function Yc(e = "") {
    return e.startsWith("/")
}

function Vm(e = "") {
    return (Yc(e) ? e.slice(1) : e) || "/"
}

function jv(e = "") {
    return Yc(e) ? e : "/" + e
}

function Bv(e, t) {
    if (Gc(t) || _r(e)) return e;
    const n = qc(t);
    return e.startsWith(n) ? e : yr(n, e)
}

function ga(e, t) {
    if (Gc(t)) return e;
    const n = qc(t);
    if (!e.startsWith(n)) return e;
    const r = e.slice(n.length);
    return r[0] === "/" ? r : "/" + r
}

function Gc(e) {
    return !e || e === "/"
}

function Xm(e) {
    return e && e !== "/"
}

function yr(e, ...t) {
    let n = e || "";
    for (const r of t.filter(o => Xm(o))) n = n ? Wm(n) + Vm(r) : r;
    return n
}

function Jc(e = "", t) {
    if (!_r(e, {
            acceptRelative: !0
        })) return t ? Jc(t + e) : _a(e);
    const [n = "", r, o = ""] = (e.replace(/\\/g, "/").match(/([^/:]+:)?\/\/([^/@]+@)?(.*)/) || []).splice(1), [s = "", i = ""] = (o.match(/([^#/?]*)(.*)?/) || []).splice(1), {
        pathname: a,
        search: l,
        hash: c
    } = _a(i.replace(/\/(?=[A-Za-z]:)/, ""));
    return {
        protocol: n,
        auth: r ? r.slice(0, Math.max(0, r.length - 1)) : "",
        host: s,
        pathname: a,
        search: l,
        hash: c
    }
}

function _a(e = "") {
    const [t = "", n = "", r = ""] = (e.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
    return {
        pathname: t,
        search: n,
        hash: r
    }
}
const Km = () => {
        var e;
        return ((e = window == null ? void 0 : window.__NUXT__) == null ? void 0 : e.config) || {}
    },
    Vr = Km().app,
    qm = () => Vr.baseURL,
    Ym = () => Vr.buildAssetsDir,
    Gm = (...e) => yr(Qc(), Ym(), ...e),
    Qc = (...e) => {
        const t = Vr.cdnURL || Vr.baseURL;
        return e.length ? yr(t, ...e) : t
    };
globalThis.__buildAssetsURL = Gm, globalThis.__publicAssetsURL = Qc;

function fs(e, t = {}, n) {
    for (const r in e) {
        const o = e[r],
            s = n ? `${n}:${r}` : r;
        typeof o == "object" && o !== null ? fs(o, t, s) : typeof o == "function" && (t[s] = o)
    }
    return t
}
const Jm = {
        run: e => e()
    },
    Qm = () => Jm,
    Zc = typeof console.createTask < "u" ? console.createTask : Qm;

function Zm(e, t) {
    const n = t.shift(),
        r = Zc(n);
    return e.reduce((o, s) => o.then(() => r.run(() => s(...t))), Promise.resolve())
}

function ep(e, t) {
    const n = t.shift(),
        r = Zc(n);
    return Promise.all(e.map(o => r.run(() => o(...t))))
}

function Fo(e, t) {
    for (const n of [...e]) n(t)
}
class tp {
    constructor() {
        this._hooks = {}, this._before = void 0, this._after = void 0, this._deprecatedMessages = void 0, this._deprecatedHooks = {}, this.hook = this.hook.bind(this), this.callHook = this.callHook.bind(this), this.callHookWith = this.callHookWith.bind(this)
    }
    hook(t, n, r = {}) {
        if (!t || typeof n != "function") return () => {};
        const o = t;
        let s;
        for (; this._deprecatedHooks[t];) s = this._deprecatedHooks[t], t = s.to;
        if (s && !r.allowDeprecated) {
            let i = s.message;
            i || (i = `${o} hook has been deprecated` + (s.to ? `, please use ${s.to}` : "")), this._deprecatedMessages || (this._deprecatedMessages = new Set), this._deprecatedMessages.has(i) || (console.warn(i), this._deprecatedMessages.add(i))
        }
        if (!n.name) try {
            Object.defineProperty(n, "name", {
                get: () => "_" + t.replace(/\W+/g, "_") + "_hook_cb",
                configurable: !0
            })
        } catch {}
        return this._hooks[t] = this._hooks[t] || [], this._hooks[t].push(n), () => {
            n && (this.removeHook(t, n), n = void 0)
        }
    }
    hookOnce(t, n) {
        let r, o = (...s) => (typeof r == "function" && r(), r = void 0, o = void 0, n(...s));
        return r = this.hook(t, o), r
    }
    removeHook(t, n) {
        if (this._hooks[t]) {
            const r = this._hooks[t].indexOf(n);
            r !== -1 && this._hooks[t].splice(r, 1), this._hooks[t].length === 0 && delete this._hooks[t]
        }
    }
    deprecateHook(t, n) {
        this._deprecatedHooks[t] = typeof n == "string" ? {
            to: n
        } : n;
        const r = this._hooks[t] || [];
        delete this._hooks[t];
        for (const o of r) this.hook(t, o)
    }
    deprecateHooks(t) {
        Object.assign(this._deprecatedHooks, t);
        for (const n in t) this.deprecateHook(n, t[n])
    }
    addHooks(t) {
        const n = fs(t),
            r = Object.keys(n).map(o => this.hook(o, n[o]));
        return () => {
            for (const o of r.splice(0, r.length)) o()
        }
    }
    removeHooks(t) {
        const n = fs(t);
        for (const r in n) this.removeHook(r, n[r])
    }
    removeAllHooks() {
        for (const t in this._hooks) delete this._hooks[t]
    }
    callHook(t, ...n) {
        return n.unshift(t), this.callHookWith(Zm, t, ...n)
    }
    callHookParallel(t, ...n) {
        return n.unshift(t), this.callHookWith(ep, t, ...n)
    }
    callHookWith(t, n, ...r) {
        const o = this._before || this._after ? {
            name: n,
            args: r,
            context: {}
        } : void 0;
        this._before && Fo(this._before, o);
        const s = t(n in this._hooks ? [...this._hooks[n]] : [], r);
        return s instanceof Promise ? s.finally(() => {
            this._after && o && Fo(this._after, o)
        }) : (this._after && o && Fo(this._after, o), s)
    }
    beforeEach(t) {
        return this._before = this._before || [], this._before.push(t), () => {
            if (this._before !== void 0) {
                const n = this._before.indexOf(t);
                n !== -1 && this._before.splice(n, 1)
            }
        }
    }
    afterEach(t) {
        return this._after = this._after || [], this._after.push(t), () => {
            if (this._after !== void 0) {
                const n = this._after.indexOf(t);
                n !== -1 && this._after.splice(n, 1)
            }
        }
    }
}

function eu() {
    return new tp
}

function np(e = {}) {
    let t, n = !1;
    const r = i => {
        if (t && t !== i) throw new Error("Context conflict")
    };
    let o;
    if (e.asyncContext) {
        const i = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
        i ? o = new i : console.warn("[unctx] `AsyncLocalStorage` is not provided.")
    }
    const s = () => {
        if (o && t === void 0) {
            const i = o.getStore();
            if (i !== void 0) return i
        }
        return t
    };
    return {
        use: () => {
            const i = s();
            if (i === void 0) throw new Error("Context is not available");
            return i
        },
        tryUse: () => s(),
        set: (i, a) => {
            a || r(i), t = i, n = !0
        },
        unset: () => {
            t = void 0, n = !1
        },
        call: (i, a) => {
            r(i), t = i;
            try {
                return o ? o.run(i, a) : a()
            } finally {
                n || (t = void 0)
            }
        },
        async callAsync(i, a) {
            t = i;
            const l = () => {
                    t = i
                },
                c = () => t === i ? l : void 0;
            ds.add(c);
            try {
                const u = o ? o.run(i, a) : a();
                return n || (t = void 0), await u
            } finally {
                ds.delete(c)
            }
        }
    }
}

function rp(e = {}) {
    const t = {};
    return {
        get(n, r = {}) {
            return t[n] || (t[n] = np({ ...e,
                ...r
            })), t[n], t[n]
        }
    }
}
const Xr = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : typeof window < "u" ? window : {},
    ya = "__unctx__",
    op = Xr[ya] || (Xr[ya] = rp()),
    sp = (e, t = {}) => op.get(e, t),
    ba = "__unctx_async_handlers__",
    ds = Xr[ba] || (Xr[ba] = new Set);

function Gt(e) {
    const t = [];
    for (const o of ds) {
        const s = o();
        s && t.push(s)
    }
    const n = () => {
        for (const o of t) o()
    };
    let r = e();
    return r && typeof r == "object" && "catch" in r && (r = r.catch(o => {
        throw n(), o
    })), [r, n]
}
const tu = sp("nuxt-app"),
    ip = "__nuxt_plugin";

function ap(e) {
    let t = 0;
    const n = {
        provide: void 0,
        globalName: "nuxt",
        versions: {
            get nuxt() {
                return "3.3.1"
            },
            get vue() {
                return n.vueApp.version
            }
        },
        payload: gt({
            data: {},
            state: {},
            _errors: {},
            ...window.__NUXT__
        }),
        static: {
            data: {}
        },
        isHydrating: !0,
        deferHydration() {
            if (!n.isHydrating) return () => {};
            t++;
            let s = !1;
            return () => {
                if (!s && (s = !0, t--, t === 0)) return n.isHydrating = !1, n.callHook("app:suspense:resolve")
            }
        },
        _asyncDataPromises: {},
        _asyncData: {},
        ...e
    };
    n.hooks = eu(), n.hook = n.hooks.hook, n.callHook = n.hooks.callHook, n.provide = (s, i) => {
        const a = "$" + s;
        Ar(n, a, i), Ar(n.vueApp.config.globalProperties, a, i)
    }, Ar(n.vueApp, "$nuxt", n), Ar(n.vueApp.config.globalProperties, "$nuxt", n), window.addEventListener("nuxt.preloadError", s => {
        n.callHook("app:chunkError", {
            error: s.payload
        })
    }), n.hook("app:error", (...s) => {
        console.error("[nuxt] error caught during app initialization", ...s)
    });
    const r = gt(n.payload.config),
        o = new Proxy(r, {
            get(s, i) {
                return i === "public" ? s.public : s[i] ? ? s.public[i]
            },
            set(s, i, a) {
                return i === "public" || i === "app" ? !1 : (s[i] = a, s.public[i] = a, !0)
            }
        });
    return n.provide("config", o), n
}
async function lp(e, t) {
    if (typeof t != "function") return;
    const {
        provide: n
    } = await vt(e, t, [e]) || {};
    if (n && typeof n == "object")
        for (const r in n) e.provide(r, n[r])
}
async function cp(e, t) {
    for (const n of t) await lp(e, n)
}

function up(e) {
    return e.map(n => typeof n != "function" ? null : n.length > 1 ? r => n(r, r.provide) : n).filter(Boolean)
}

function Lt(e) {
    return e[ip] = !0, e
}

function vt(e, t, n) {
    const r = () => n ? t(...n) : t();
    return tu.set(e), r()
}

function ze() {
    const e = tu.tryUse();
    if (!e) {
        const t = ct();
        if (!t) throw new Error("nuxt instance unavailable");
        return t.appContext.app.$nuxt
    }
    return e
}

function nu() {
    return ze().$config
}

function Ar(e, t, n) {
    Object.defineProperty(e, t, {
        get: () => n
    })
}
const fp = !1,
    dp = !0;
/*!
 * pinia v2.0.33
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
let ru;
const br = e => ru = e,
    ou = Symbol();

function hs(e) {
    return e && typeof e == "object" && Object.prototype.toString.call(e) === "[object Object]" && typeof e.toJSON != "function"
}
var er;
(function(e) {
    e.direct = "direct", e.patchObject = "patch object", e.patchFunction = "patch function"
})(er || (er = {}));

function hp() {
    const e = ro(!0),
        t = e.run(() => Se({}));
    let n = [],
        r = [];
    const o = Ln({
        install(s) {
            br(o), o._a = s, s.provide(ou, o), s.config.globalProperties.$pinia = o, r.forEach(i => n.push(i)), r = []
        },
        use(s) {
            return !this._a && !fp ? r.push(s) : n.push(s), this
        },
        _p: n,
        _a: null,
        _e: e,
        _s: new Map,
        state: t
    });
    return o
}
const su = () => {};

function va(e, t, n, r = su) {
    e.push(t);
    const o = () => {
        const s = e.indexOf(t);
        s > -1 && (e.splice(s, 1), r())
    };
    return !n && Dl() && If(o), o
}

function un(e, ...t) {
    e.slice().forEach(n => {
        n(...t)
    })
}

function ms(e, t) {
    e instanceof Map && t instanceof Map && t.forEach((n, r) => e.set(r, n)), e instanceof Set && t instanceof Set && t.forEach(e.add, e);
    for (const n in t) {
        if (!t.hasOwnProperty(n)) continue;
        const r = t[n],
            o = e[n];
        hs(o) && hs(r) && e.hasOwnProperty(n) && !he(r) && !wt(r) ? e[n] = ms(o, r) : e[n] = r
    }
    return e
}
const mp = Symbol();

function pp(e) {
    return !hs(e) || !e.hasOwnProperty(mp)
}
const {
    assign: Ot
} = Object;

function gp(e) {
    return !!(he(e) && e.effect)
}

function _p(e, t, n, r) {
    const {
        state: o,
        actions: s,
        getters: i
    } = t, a = n.state.value[e];
    let l;

    function c() {
        a || (n.state.value[e] = o ? o() : {});
        const u = id(n.state.value[e]);
        return Ot(u, s, Object.keys(i || {}).reduce((f, d) => (f[d] = Ln(me(() => {
            br(n);
            const p = n._s.get(e);
            return i[d].call(p, p)
        })), f), {}))
    }
    return l = iu(e, c, t, n, r, !0), l
}

function iu(e, t, n = {}, r, o, s) {
    let i;
    const a = Ot({
            actions: {}
        }, n),
        l = {
            deep: !0
        };
    let c, u, f = Ln([]),
        d = Ln([]),
        p;
    const g = r.state.value[e];
    !s && !g && (r.state.value[e] = {}), Se({});
    let v;

    function C(P) {
        let L;
        c = u = !1, typeof P == "function" ? (P(r.state.value[e]), L = {
            type: er.patchFunction,
            storeId: e,
            events: p
        }) : (ms(r.state.value[e], P), L = {
            type: er.patchObject,
            payload: P,
            storeId: e,
            events: p
        });
        const F = v = Symbol();
        rn().then(() => {
            v === F && (c = !0)
        }), u = !0, un(f, L, r.state.value[e])
    }
    const b = s ? function() {
        const {
            state: L
        } = n, F = L ? L() : {};
        this.$patch($ => {
            Ot($, F)
        })
    } : su;

    function m() {
        i.stop(), f = [], d = [], r._s.delete(e)
    }

    function S(P, L) {
        return function() {
            br(r);
            const F = Array.from(arguments),
                $ = [],
                k = [];

            function O(Q) {
                $.push(Q)
            }

            function B(Q) {
                k.push(Q)
            }
            un(d, {
                args: F,
                name: P,
                store: w,
                after: O,
                onError: B
            });
            let U;
            try {
                U = L.apply(this && this.$id === e ? this : w, F)
            } catch (Q) {
                throw un(k, Q), Q
            }
            return U instanceof Promise ? U.then(Q => (un($, Q), Q)).catch(Q => (un(k, Q), Promise.reject(Q))) : (un($, U), U)
        }
    }
    const y = {
            _p: r,
            $id: e,
            $onAction: va.bind(null, d),
            $patch: C,
            $reset: b,
            $subscribe(P, L = {}) {
                const F = va(f, P, L.detached, () => $()),
                    $ = i.run(() => it(() => r.state.value[e], k => {
                        (L.flush === "sync" ? u : c) && P({
                            storeId: e,
                            type: er.direct,
                            events: p
                        }, k)
                    }, Ot({}, l, L)));
                return F
            },
            $dispose: m
        },
        w = gt(y);
    r._s.set(e, w);
    const A = r._e.run(() => (i = ro(), i.run(() => t())));
    for (const P in A) {
        const L = A[P];
        if (he(L) && !gp(L) || wt(L)) s || (g && pp(L) && (he(L) ? L.value = g[P] : ms(L, g[P])), r.state.value[e][P] = L);
        else if (typeof L == "function") {
            const F = S(P, L);
            A[P] = F, a.actions[P] = L
        }
    }
    return Ot(w, A), Ot(ie(w), A), Object.defineProperty(w, "$state", {
        get: () => r.state.value[e],
        set: P => {
            C(L => {
                Ot(L, P)
            })
        }
    }), r._p.forEach(P => {
        Ot(w, i.run(() => P({
            store: w,
            app: r._a,
            pinia: r,
            options: a
        })))
    }), g && s && n.hydrate && n.hydrate(w.$state, g), c = !0, u = !0, w
}

function Wv(e, t, n) {
    let r, o;
    const s = typeof t == "function";
    typeof e == "string" ? (r = e, o = s ? n : t) : (o = e, r = e.id);

    function i(a, l) {
        const c = ct();
        return a = a || c && xe(ou, null), a && br(a), a = ru, a._s.has(r) || (s ? iu(r, t, o, a) : _p(r, o, a)), a._s.get(r)
    }
    return i.$id = r, i
}

function Vv(e) {
    {
        e = ie(e);
        const t = {};
        for (const n in e) {
            const r = e[n];
            (he(r) || wt(r)) && (t[n] = Qs(e, n))
        }
        return t
    }
}

function yp(e) {
    return Array.isArray(e) ? e : [e]
}
const au = ["title", "script", "style", "noscript"],
    lu = ["base", "meta", "link", "style", "script", "noscript"],
    bp = ["title", "titleTemplate", "templateParams", "base", "htmlAttrs", "bodyAttrs", "meta", "link", "style", "script", "noscript"],
    vp = ["base", "title", "titleTemplate", "bodyAttrs", "htmlAttrs", "templateParams"],
    wa = ["tagPosition", "tagPriority", "tagDuplicateStrategy", "innerHTML", "textContent"];

function cu(e) {
    let t = 9;
    for (let n = 0; n < e.length;) t = Math.imul(t ^ e.charCodeAt(n++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}

function ps(e) {
    return cu(`${e.tag}:${e.textContent||e.innerHTML||""}:${Object.entries(e.props).map(([t,n])=>`${t}:${String(n)}`).join(",")}`)
}

function wp(e) {
    let t = 9;
    for (const n of e)
        for (let r = 0; r < n.length;) t = Math.imul(t ^ n.charCodeAt(r++), 9 ** 9);
    return ((t ^ t >>> 9) + 65536).toString(16).substring(1, 8).toLowerCase()
}

function uu(e, t) {
    const {
        props: n,
        tag: r
    } = e;
    if (vp.includes(r)) return r;
    if (r === "link" && n.rel === "canonical") return "canonical";
    if (n.charset) return "charset";
    const o = ["id"];
    r === "meta" && o.push("name", "property", "http-equiv");
    for (const s of o)
        if (typeof n[s] < "u") {
            const i = String(n[s]);
            return t && !t(i) ? !1 : `${r}:${s}:${i}`
        }
    return !1
}

function Ea(e, t) {
    return e == null ? t || null : typeof e == "function" ? e(t) : e
}

function Or(e, t = !1, n) {
    const {
        tag: r,
        $el: o
    } = e;
    o && (Object.entries(r.props).forEach(([s, i]) => {
        i = String(i);
        const a = `attr:${s}`;
        if (s === "class") {
            if (!i) return;
            for (const l of i.split(" ")) {
                const c = `${a}:${l}`;
                n && n(e, c, () => o.classList.remove(l)), o.classList.contains(l) || o.classList.add(l)
            }
            return
        }
        n && !s.startsWith("data-h-") && n(e, a, () => o.removeAttribute(s)), (t || o.getAttribute(s) !== i) && o.setAttribute(s, i)
    }), au.includes(r.tag) && (r.textContent && r.textContent !== o.textContent ? o.textContent = r.textContent : r.innerHTML && r.innerHTML !== o.innerHTML && (o.innerHTML = r.innerHTML)))
}
let Hn = !1;
async function Ep(e, t = {}) {
    var d, p;
    const n = {
        shouldRender: !0
    };
    if (await e.hooks.callHook("dom:beforeRender", n), !n.shouldRender) return;
    const r = t.document || e.resolvedOptions.document || window.document,
        o = (await e.resolveTags()).map(a);
    if (e.resolvedOptions.experimentalHashHydration && (Hn = Hn || e._hash || !1, Hn)) {
        const g = wp(o.map(v => v.tag._h));
        if (Hn === g) return;
        Hn = g
    }
    const s = e._popSideEffectQueue();
    e.headEntries().map(g => g._sde).forEach(g => {
        Object.entries(g).forEach(([v, C]) => {
            s[v] = C
        })
    });
    const i = (g, v, C) => {
        v = `${g.renderId}:${v}`, g.entry && (g.entry._sde[v] = C), delete s[v]
    };

    function a(g) {
        const v = e.headEntries().find(b => b._i === g._e),
            C = {
                renderId: g._d || ps(g),
                $el: null,
                shouldRender: !0,
                tag: g,
                entry: v,
                markSideEffect: (b, m) => i(C, b, m)
            };
        return C
    }
    const l = [],
        c = {
            body: [],
            head: []
        },
        u = g => {
            e._elMap[g.renderId] = g.$el, l.push(g), i(g, "el", () => {
                var v;
                (v = g.$el) == null || v.remove(), delete e._elMap[g.renderId]
            })
        };
    for (const g of o) {
        if (await e.hooks.callHook("dom:beforeRenderTag", g), !g.shouldRender) continue;
        const {
            tag: v
        } = g;
        if (v.tag === "title") {
            r.title = v.textContent || "", l.push(g);
            continue
        }
        if (v.tag === "htmlAttrs" || v.tag === "bodyAttrs") {
            g.$el = r[v.tag === "htmlAttrs" ? "documentElement" : "body"], Or(g, !1, i), l.push(g);
            continue
        }
        if (g.$el = e._elMap[g.renderId], !g.$el && v.key && (g.$el = r.querySelector(`${(d=v.tagPosition)!=null&&d.startsWith("body")?"body":"head"} > ${v.tag}[data-h-${v._h}]`)), g.$el) {
            g.tag._d && Or(g), u(g);
            continue
        }
        c[(p = v.tagPosition) != null && p.startsWith("body") ? "body" : "head"].push(g)
    }
    const f = {
        bodyClose: void 0,
        bodyOpen: void 0,
        head: void 0
    };
    Object.entries(c).forEach(([g, v]) => {
        var b;
        if (!v.length) return;
        const C = (b = r == null ? void 0 : r[g]) == null ? void 0 : b.children;
        if (C) {
            for (const m of [...C].reverse()) {
                const S = m.tagName.toLowerCase();
                if (!lu.includes(S)) continue;
                const y = m.getAttributeNames().reduce((L, F) => ({ ...L,
                        [F]: m.getAttribute(F)
                    }), {}),
                    w = {
                        tag: S,
                        props: y
                    };
                m.innerHTML && (w.innerHTML = m.innerHTML);
                const A = ps(w);
                let P = v.findIndex(L => (L == null ? void 0 : L.renderId) === A);
                if (P === -1) {
                    const L = uu(w);
                    P = v.findIndex(F => (F == null ? void 0 : F.tag._d) && F.tag._d === L)
                }
                if (P !== -1) {
                    const L = v[P];
                    L.$el = m, Or(L), u(L), delete v[P]
                }
            }
            v.forEach(m => {
                const S = m.tag.tagPosition || "head";
                f[S] = f[S] || r.createDocumentFragment(), m.$el || (m.$el = r.createElement(m.tag.tag), Or(m, !0)), f[S].appendChild(m.$el), u(m)
            })
        }
    }), f.head && r.head.appendChild(f.head), f.bodyOpen && r.body.insertBefore(f.bodyOpen, r.body.firstChild), f.bodyClose && r.body.appendChild(f.bodyClose);
    for (const g of l) await e.hooks.callHook("dom:renderTag", g);
    Object.values(s).forEach(g => g())
}
let Mo = null;
async function Tp(e, t = {}) {
    function n() {
        return Mo = null, Ep(e, t)
    }
    const r = t.delayFn || (o => setTimeout(o, 10));
    return Mo = Mo || new Promise(o => r(() => o(n())))
}

function Cp(e) {
    return {
        hooks: {
            "entries:updated": function(t) {
                if (typeof(e == null ? void 0 : e.document) > "u" && typeof window > "u") return;
                let n = e == null ? void 0 : e.delayFn;
                !n && typeof requestAnimationFrame < "u" && (n = requestAnimationFrame), Tp(t, {
                    document: (e == null ? void 0 : e.document) || window.document,
                    delayFn: n
                })
            }
        }
    }
}

function Lp(e) {
    var t;
    return ((t = e == null ? void 0 : e.head.querySelector('meta[name="unhead:ssr"]')) == null ? void 0 : t.getAttribute("content")) || !1
}
const Ta = {
        base: -1,
        title: 1
    },
    Ca = {
        critical: -8,
        high: -1,
        low: 2
    };

function Kr(e) {
    let t = 10;
    const n = e.tagPriority;
    return typeof n == "number" ? n : (e.tag === "meta" ? (e.props.charset && (t = -2), e.props["http-equiv"] === "content-security-policy" && (t = 0)) : e.tag == "link" && e.props.rel === "preconnect" ? t = 2 : e.tag in Ta && (t = Ta[e.tag]), typeof n == "string" && n in Ca ? t + Ca[n] : t)
}
const kp = [{
    prefix: "before:",
    offset: -1
}, {
    prefix: "after:",
    offset: 1
}];

function Rp() {
    return {
        hooks: {
            "tags:resolve": e => {
                const t = n => {
                    var r;
                    return (r = e.tags.find(o => o._d === n)) == null ? void 0 : r._p
                };
                for (const {
                        prefix: n,
                        offset: r
                    } of kp)
                    for (const o of e.tags.filter(s => typeof s.tagPriority == "string" && s.tagPriority.startsWith(n))) {
                        const s = t(o.tagPriority.replace(n, ""));
                        typeof s < "u" && (o._p = s + r)
                    }
                e.tags.sort((n, r) => n._p - r._p).sort((n, r) => Kr(n) - Kr(r))
            }
        }
    }
}

function Pp() {
    return {
        hooks: {
            "tags:resolve": e => {
                const {
                    tags: t
                } = e;
                let n = t.findIndex(o => o.tag === "titleTemplate");
                const r = t.findIndex(o => o.tag === "title");
                if (r !== -1 && n !== -1) {
                    const o = Ea(t[n].textContent, t[r].textContent);
                    o !== null ? t[r].textContent = o || t[r].textContent : delete t[r]
                } else if (n !== -1) {
                    const o = Ea(t[n].textContent);
                    o !== null && (t[n].textContent = o, t[n].tag = "title", n = -1)
                }
                n !== -1 && delete t[n], e.tags = t.filter(Boolean)
            }
        }
    }
}

function Sp() {
    return {
        hooks: {
            "tag:normalise": function({
                tag: e
            }) {
                typeof e.props.body < "u" && (e.tagPosition = "bodyClose", delete e.props.body)
            }
        }
    }
}
const Ip = ["link", "style", "script", "noscript"];

function Ap() {
    return {
        hooks: {
            "tag:normalise": ({
                tag: e,
                resolvedOptions: t
            }) => {
                t.experimentalHashHydration === !0 && (e._h = ps(e)), e.key && Ip.includes(e.tag) && (e._h = cu(e.key), e.props[`data-h-${e._h}`] = "")
            }
        }
    }
}
const La = ["script", "link", "bodyAttrs"];

function Op() {
    const e = (t, n) => {
        const r = {},
            o = {};
        Object.entries(n.props).forEach(([i, a]) => {
            i.startsWith("on") && typeof a == "function" ? o[i] = a : r[i] = a
        });
        let s;
        return t === "dom" && n.tag === "script" && typeof r.src == "string" && typeof o.onload < "u" && (s = r.src, delete r.src), {
            props: r,
            eventHandlers: o,
            delayedSrc: s
        }
    };
    return {
        hooks: {
            "ssr:render": function(t) {
                t.tags = t.tags.map(n => (!La.includes(n.tag) || !Object.entries(n.props).find(([r, o]) => r.startsWith("on") && typeof o == "function") || (n.props = e("ssr", n).props), n))
            },
            "dom:beforeRenderTag": function(t) {
                if (!La.includes(t.tag.tag) || !Object.entries(t.tag.props).find(([s, i]) => s.startsWith("on") && typeof i == "function")) return;
                const {
                    props: n,
                    eventHandlers: r,
                    delayedSrc: o
                } = e("dom", t.tag);
                Object.keys(r).length && (t.tag.props = n, t.tag._eventHandlers = r, t.tag._delayedSrc = o)
            },
            "dom:renderTag": function(t) {
                const n = t.$el;
                if (!t.tag._eventHandlers || !n) return;
                const r = t.tag.tag === "bodyAttrs" && typeof window < "u" ? window : n;
                Object.entries(t.tag._eventHandlers).forEach(([o, s]) => {
                    const i = `${t.tag._d||t.tag._p}:${o}`,
                        a = o.slice(2).toLowerCase(),
                        l = `data-h-${a}`;
                    if (t.markSideEffect(i, () => {}), n.hasAttribute(l)) return;
                    const c = s;
                    n.setAttribute(l, ""), r.addEventListener(a, c), t.entry && (t.entry._sde[i] = () => {
                        r.removeEventListener(a, c), n.removeAttribute(l)
                    })
                }), t.tag._delayedSrc && n.setAttribute("src", t.tag._delayedSrc)
            }
        }
    }
}
const Np = ["templateParams", "htmlAttrs", "bodyAttrs"];

function xp() {
    return {
        hooks: {
            "tag:normalise": function({
                tag: e
            }) {
                ["hid", "vmid", "key"].forEach(r => {
                    e.props[r] && (e.key = e.props[r], delete e.props[r])
                });
                const n = uu(e) || (e.key ? `${e.tag}:${e.key}` : !1);
                n && (e._d = n)
            },
            "tags:resolve": function(e) {
                const t = {};
                e.tags.forEach(r => {
                    const o = (r.key ? `${r.tag}:${r.key}` : r._d) || r._p,
                        s = t[o];
                    if (s) {
                        let a = r == null ? void 0 : r.tagDuplicateStrategy;
                        if (!a && Np.includes(r.tag) && (a = "merge"), a === "merge") {
                            const l = s.props;
                            ["class", "style"].forEach(c => {
                                r.props[c] && l[c] && (c === "style" && !l[c].endsWith(";") && (l[c] += ";"), r.props[c] = `${l[c]} ${r.props[c]}`)
                            }), t[o].props = { ...l,
                                ...r.props
                            };
                            return
                        } else if (r._e === s._e) {
                            s._duped = s._duped || [], r._d = `${s._d}:${s._duped.length+1}`, s._duped.push(r);
                            return
                        } else if (Kr(r) > Kr(s)) return
                    }
                    const i = Object.keys(r.props).length + (r.innerHTML ? 1 : 0) + (r.textContent ? 1 : 0);
                    if (lu.includes(r.tag) && i === 0) {
                        delete t[o];
                        return
                    }
                    t[o] = r
                });
                const n = [];
                Object.values(t).forEach(r => {
                    const o = r._duped;
                    delete r._duped, n.push(r), o && n.push(...o)
                }), e.tags = n
            }
        }
    }
}

function jn(e, t) {
    if (typeof e != "string") return e;

    function n(i) {
        if (["s", "pageTitle"].includes(i)) return t.pageTitle;
        let a;
        return i.includes(".") ? a = i.split(".").reduce((l, c) => l && l[c] || void 0, t) : a = t[i], typeof a < "u" ? a || "" : !1
    }
    let r = e;
    try {
        r = decodeURI(e)
    } catch {}(r.match(/%(\w+\.+\w+)|%(\w+)/g) || []).sort().reverse().forEach(i => {
        const a = n(i.slice(1));
        typeof a == "string" && (e = e.replace(new RegExp(`\\${i}(\\W|$)`, "g"), (l, c) => `${a}${c}`).trim())
    });
    const s = t.separator;
    return e.includes(s) && (e.endsWith(s) && (e = e.slice(0, -s.length).trim()), e.startsWith(s) && (e = e.slice(s.length).trim()), e = e.replace(new RegExp(`\\${s}\\s*\\${s}`, "g"), s)), e
}

function zp() {
    return {
        hooks: {
            "tags:resolve": e => {
                var s;
                const {
                    tags: t
                } = e, n = (s = t.find(i => i.tag === "title")) == null ? void 0 : s.textContent, r = t.findIndex(i => i.tag === "templateParams"), o = r !== -1 ? t[r].props : {};
                o.separator = o.separator || "|", o.pageTitle = jn(o.pageTitle || n || "", o);
                for (const i of t)
                    if (["titleTemplate", "title"].includes(i.tag) && typeof i.textContent == "string") i.textContent = jn(i.textContent, o);
                    else if (i.tag === "meta" && typeof i.props.content == "string") i.props.content = jn(i.props.content, o);
                else if (i.tag === "link" && typeof i.props.href == "string") i.props.href = jn(i.props.href, o);
                else if (i.tag === "script" && ["application/json", "application/ld+json"].includes(i.props.type) && typeof i.innerHTML == "string") try {
                    i.innerHTML = JSON.stringify(JSON.parse(i.innerHTML), (a, l) => typeof l == "string" ? jn(l, o) : l)
                } catch {}
                e.tags = t.filter(i => i.tag !== "templateParams")
            }
        }
    }
}
const Dp = typeof window < "u";
let fu;

function Fp(e) {
    return fu = e
}

function Mp() {
    return fu
}
async function Up(e, t, n) {
    const r = {
        tag: e,
        props: {}
    };
    return t instanceof Promise && (t = await t), e === "templateParams" ? (r.props = t, r) : ["title", "titleTemplate"].includes(e) ? (t && typeof t == "object" ? (r.textContent = t.textContent, t.tagPriority && (r.tagPriority = t.tagPriority)) : r.textContent = t, r) : typeof t == "string" ? ["script", "noscript", "style"].includes(e) ? (e === "script" && (/^(https?:)?\/\//.test(t) || t.startsWith("/")) ? r.props.src = t : r.innerHTML = t, r) : !1 : (r.props = await Hp(e, { ...t
    }), r.props.children && (r.props.innerHTML = r.props.children), delete r.props.children, Object.keys(r.props).filter(o => wa.includes(o)).forEach(o => {
        (!["innerHTML", "textContent"].includes(o) || au.includes(r.tag)) && (r[o] = r.props[o]), delete r.props[o]
    }), wa.forEach(o => {
        !r[o] && n[o] && (r[o] = n[o])
    }), ["innerHTML", "textContent"].forEach(o => {
        if (r.tag === "script" && typeof r[o] == "string" && ["application/ld+json", "application/json"].includes(r.props.type)) try {
            r[o] = JSON.parse(r[o])
        } catch {
            r[o] = ""
        }
        typeof r[o] == "object" && (r[o] = JSON.stringify(r[o]))
    }), r.props.class && (r.props.class = $p(r.props.class)), r.props.content && Array.isArray(r.props.content) ? r.props.content.map(o => ({ ...r,
        props: { ...r.props,
            content: o
        }
    })) : r)
}

function $p(e) {
    return typeof e == "object" && !Array.isArray(e) && (e = Object.keys(e).filter(t => e[t])), (Array.isArray(e) ? e.join(" ") : e).split(" ").filter(t => t.trim()).filter(Boolean).join(" ")
}
async function Hp(e, t) {
    for (const n of Object.keys(t)) {
        const r = n.startsWith("data-");
        t[n] instanceof Promise && (t[n] = await t[n]), String(t[n]) === "true" ? t[n] = r ? "true" : "" : String(t[n]) === "false" && (r ? t[n] = "false" : delete t[n])
    }
    return t
}
const jp = 10;
async function Bp(e) {
    const t = [];
    return Object.entries(e.resolvedInput).filter(([n, r]) => typeof r < "u" && bp.includes(n)).forEach(([n, r]) => {
        const o = yp(r);
        t.push(...o.map(s => Up(n, s, e)).flat())
    }), (await Promise.all(t)).flat().filter(Boolean).map((n, r) => (n._e = e._i, n._p = (e._i << jp) + r, n))
}

function Wp() {
    return [xp(), Rp(), zp(), Pp(), Ap(), Op(), Sp()]
}

function Vp(e = {}) {
    return [Cp({
        document: e == null ? void 0 : e.document,
        delayFn: e == null ? void 0 : e.domDelayFn
    })]
}

function Xp(e = {}) {
    const t = Kp({ ...e,
        plugins: [...Vp(e), ...(e == null ? void 0 : e.plugins) || []]
    });
    return e.experimentalHashHydration && t.resolvedOptions.document && (t._hash = Lp(t.resolvedOptions.document)), Fp(t), t
}

function Kp(e = {}) {
    let t = [],
        n = {},
        r = 0;
    const o = eu();
    e != null && e.hooks && o.addHooks(e.hooks), e.plugins = [...Wp(), ...(e == null ? void 0 : e.plugins) || []], e.plugins.forEach(a => a.hooks && o.addHooks(a.hooks)), e.document = e.document || (Dp ? document : void 0);
    const s = () => o.callHook("entries:updated", i),
        i = {
            resolvedOptions: e,
            headEntries() {
                return t
            },
            get hooks() {
                return o
            },
            use(a) {
                a.hooks && o.addHooks(a.hooks)
            },
            push(a, l) {
                const c = {
                        _i: r++,
                        input: a,
                        _sde: {},
                        ...l
                    },
                    u = (c == null ? void 0 : c.mode) || e.mode;
                return u && (c.mode = u), t.push(c), s(), {
                    dispose() {
                        t = t.filter(f => f._i !== c._i ? !0 : (n = { ...n,
                            ...f._sde || {}
                        }, f._sde = {}, s(), !1))
                    },
                    patch(f) {
                        t = t.map(d => (d._i === c._i && (c.input = d.input = f, s()), d))
                    }
                }
            },
            async resolveTags() {
                const a = {
                    tags: [],
                    entries: [...t]
                };
                await o.callHook("entries:resolve", a);
                for (const l of a.entries) {
                    const c = l.resolvedInput || l.input;
                    if (l.resolvedInput = await (l.transform ? l.transform(c) : c), l.resolvedInput)
                        for (const u of await Bp(l)) {
                            const f = {
                                tag: u,
                                entry: l,
                                resolvedOptions: i.resolvedOptions
                            };
                            await o.callHook("tag:normalise", f), a.tags.push(f.tag)
                        }
                }
                return await o.callHook("tags:beforeResolve", a), await o.callHook("tags:resolve", a), a.tags
            },
            _popSideEffectQueue() {
                const a = { ...n
                };
                return n = {}, a
            },
            _elMap: {}
        };
    return i.hooks.callHook("init", i), i
}

function qp(e) {
    return typeof e == "function" ? e() : Ee(e)
}

function qr(e, t = "") {
    if (e instanceof Promise) return e;
    const n = qp(e);
    return !e || !n ? n : Array.isArray(n) ? n.map(r => qr(r, t)) : typeof n == "object" ? Object.fromEntries(Object.entries(n).map(([r, o]) => r === "titleTemplate" || r.startsWith("on") ? [r, Ee(o)] : [r, qr(o, r)])) : n
}
const Yp = Mc.startsWith("3"),
    Gp = typeof window < "u",
    du = "usehead";

function di() {
    return ct() && xe(du) || Mp()
}

function Jp(e) {
    return {
        install(n) {
            Yp && (n.config.globalProperties.$unhead = e, n.config.globalProperties.$head = e, n.provide(du, e))
        }
    }.install
}

function Qp(e = {}) {
    const t = Xp({ ...e,
        domDelayFn: n => setTimeout(() => rn(() => n()), 10),
        plugins: [Zp(), ...(e == null ? void 0 : e.plugins) || []]
    });
    return t.install = Jp(t), t
}

function Zp() {
    return {
        hooks: {
            "entries:resolve": function(e) {
                for (const t of e.entries) t.resolvedInput = qr(t.input)
            }
        }
    }
}

function eg(e, t = {}) {
    const n = di(),
        r = Se(!1),
        o = Se({});
    kd(() => {
        o.value = r.value ? {} : qr(e)
    });
    const s = n.push(o.value, t);
    return it(o, a => {
        s.patch(a)
    }), ct() && (uo(() => {
        s.dispose()
    }), mc(() => {
        r.value = !0
    }), hc(() => {
        r.value = !1
    })), s
}

function tg(e, t = {}) {
    return di().push(e, t)
}

function ng(e, t = {}) {
    var r;
    const n = di();
    if (n) {
        const o = Gp || !!((r = n.resolvedOptions) != null && r.document);
        return t.mode === "server" && o || t.mode === "client" && !o ? void 0 : o ? eg(e, t) : tg(e, t)
    }
}

function Uo(e) {
    return e !== null && typeof e == "object"
}

function gs(e, t, n = ".", r) {
    if (!Uo(t)) return gs(e, {}, n, r);
    const o = Object.assign({}, t);
    for (const s in e) {
        if (s === "__proto__" || s === "constructor") continue;
        const i = e[s];
        i != null && (r && r(o, s, i, n) || (Array.isArray(i) && Array.isArray(o[s]) ? o[s] = [...i, ...o[s]] : Uo(i) && Uo(o[s]) ? o[s] = gs(i, o[s], (n ? `${n}.` : "") + s.toString(), r) : o[s] = i))
    }
    return o
}

function rg(e) {
    return (...t) => t.reduce((n, r) => gs(n, r, "", e), {})
}
const og = rg();
class _s extends Error {
    constructor() {
        super(...arguments), this.statusCode = 500, this.fatal = !1, this.unhandled = !1
    }
    toJSON() {
        const t = {
            message: this.message,
            statusCode: bs(this.statusCode, 500)
        };
        return this.statusMessage && (t.statusMessage = hu(this.statusMessage)), this.data !== void 0 && (t.data = this.data), t
    }
}
_s.__h3_error__ = !0;

function ys(e) {
    if (typeof e == "string") return new _s(e);
    if (sg(e)) return e;
    const t = new _s(e.message ? ? e.statusMessage ? ? "", e.cause ? {
        cause: e.cause
    } : void 0);
    if ("stack" in e) try {
        Object.defineProperty(t, "stack", {
            get() {
                return e.stack
            }
        })
    } catch {
        try {
            t.stack = e.stack
        } catch {}
    }
    if (e.data && (t.data = e.data), e.statusCode ? t.statusCode = bs(e.statusCode, t.statusCode) : e.status && (t.statusCode = bs(e.status, t.statusCode)), e.statusMessage ? t.statusMessage = e.statusMessage : e.statusText && (t.statusMessage = e.statusText), t.statusMessage) {
        const n = t.statusMessage;
        hu(t.statusMessage) !== n && console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")
    }
    return e.fatal !== void 0 && (t.fatal = e.fatal), e.unhandled !== void 0 && (t.unhandled = e.unhandled), t
}

function sg(e) {
    var t;
    return ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.__h3_error__) === !0
}
const ig = /[^\u0009\u0020-\u007E]/g;

function hu(e = "") {
    return e.replace(ig, "")
}

function bs(e, t = 200) {
    return !e || (typeof e == "string" && (e = Number.parseInt(e, 10)), e < 100 || e > 999) ? t : e
}

function mu(...e) {
    const t = typeof e[e.length - 1] == "string" ? e.pop() : void 0;
    typeof e[0] != "string" && e.unshift(t);
    const [n, r] = e;
    if (!n || typeof n != "string") throw new TypeError("[nuxt] [useState] key must be a string: " + n);
    if (r !== void 0 && typeof r != "function") throw new Error("[nuxt] [useState] init must be a function: " + r);
    const o = "$s" + n,
        s = ze(),
        i = Qs(s.payload.state, o);
    if (i.value === void 0 && r) {
        const a = r();
        if (he(a)) return s.payload.state[o] = a, a;
        i.value = a
    }
    return i
}
const Fn = () => {
        var e;
        return (e = ze()) == null ? void 0 : e.$router
    },
    hi = () => ct() ? xe("_route", ze()._route) : ze()._route,
    pu = e => e,
    ag = (e, t, n = {}) => {
        const r = ze(),
            o = n.global || typeof e != "string",
            s = typeof e != "string" ? e : t;
        if (!s) {
            console.warn("[nuxt] No route middleware passed to `addRouteMiddleware`.", e);
            return
        }
        o ? r._middleware.global.push(s) : r._middleware.named[e] = s
    },
    lg = () => {
        try {
            if (ze()._processingMiddleware) return !0
        } catch {
            return !0
        }
        return !1
    },
    cg = (e, t) => {
        e || (e = "/");
        const n = typeof e == "string" ? e : e.path || "/",
            r = _r(n, {
                acceptRelative: !0
            });
        if (r && !(t != null && t.external)) throw new Error("Navigating to external URL is not allowed by default. Use `navigateTo (url, { external: true })`.");
        if (r && Jc(n).protocol === "script:") throw new Error("Cannot navigate to an URL with script protocol.");
        if (!r && lg()) return e;
        const o = Fn();
        return r ? (t != null && t.replace ? location.replace(n) : location.href = n, Promise.resolve()) : t != null && t.replace ? o.replace(e) : o.push(e)
    },
    po = () => Qs(ze().payload, "error"),
    pn = e => {
        const t = gu(e);
        try {
            ze().callHook("app:error", t);
            const r = po();
            r.value = r.value || t
        } catch {
            throw t
        }
        return t
    },
    ug = async (e = {}) => {
        const t = ze(),
            n = po();
        t.callHook("app:error:cleared", e), e.redirect && await Fn().replace(e.redirect), n.value = null
    },
    fg = e => !!(e && typeof e == "object" && "__nuxt_error" in e),
    gu = e => {
        const t = ys(e);
        return t.__nuxt_error = !0, t
    },
    dg = "modulepreload",
    hg = function(e, t) {
        return e.startsWith(".") ? new URL(e, t).href : e
    },
    ka = {},
    mg = function(t, n, r) {
        if (!n || n.length === 0) return t();
        const o = document.getElementsByTagName("link");
        return Promise.all(n.map(s => {
            if (s = hg(s, r), s in ka) return;
            ka[s] = !0;
            const i = s.endsWith(".css"),
                a = i ? '[rel="stylesheet"]' : "";
            if (!!r)
                for (let u = o.length - 1; u >= 0; u--) {
                    const f = o[u];
                    if (f.href === s && (!i || f.rel === "stylesheet")) return
                } else if (document.querySelector(`link[href="${s}"]${a}`)) return;
            const c = document.createElement("link");
            if (c.rel = i ? "stylesheet" : dg, i || (c.as = "script", c.crossOrigin = ""), c.href = s, document.head.appendChild(c), i) return new Promise((u, f) => {
                c.addEventListener("load", u), c.addEventListener("error", () => f(new Error(`Unable to preload CSS for ${s}`)))
            })
        })).then(() => t())
    },
    q = (...e) => mg(...e).catch(t => {
        const n = new Event("nuxt.preloadError");
        throw n.payload = t, window.dispatchEvent(n), t
    });

function pg(e = {}) {
    const t = e.path || window.location.pathname;
    let n = {};
    try {
        n = JSON.parse(sessionStorage.getItem("nuxt:reload") || "{}")
    } catch {}
    if (e.force || (n == null ? void 0 : n.path) !== t || (n == null ? void 0 : n.expires) < Date.now()) {
        try {
            sessionStorage.setItem("nuxt:reload", JSON.stringify({
                path: t,
                expires: Date.now() + (e.ttl ? ? 1e4)
            }))
        } catch {}
        if (e.persistState) try {
            sessionStorage.setItem("nuxt:reload:state", JSON.stringify({
                state: ze().payload.state
            }))
        } catch {}
        window.location.pathname !== t ? window.location.href = t : window.location.reload()
    }
}
const gg = Lt(e => {
        const t = hp();
        return e.vueApp.use(t), br(t), e.payload && e.payload.pinia && (t.state.value = e.payload.pinia), {
            provide: {
                pinia: t
            }
        }
    }),
    $o = {
        BlogFooterLinks: re(() => q(() =>
            import ("./FooterLinks.809314c3.js"), ["./FooterLinks.809314c3.js", "./FooterLinks.vue.4ed993c7.js"],
            import.meta.url).then(e => e.default || e)),
        BlogTestComponent: re(() => q(() =>
            import ("./BlogTestComponent.384d76a2.js"), ["./BlogTestComponent.384d76a2.js", "./BlogTestComponent.ba2bdea9.css"],
            import.meta.url).then(e => e.default || e)),
        Mp4Video: re(() => q(() =>
            import ("./Mp4Video.0e8fdc35.js"), [],
            import.meta.url).then(e => e.default || e)),
        ContentDoc: re(() => q(() =>
            import ("./ContentDoc.cc6eace7.js"), ["./ContentDoc.cc6eace7.js", "./ContentRenderer.7a82949c.js", "./ContentRendererMarkdown.a28096a8.js", "./index.36486552.js", "./index.a6ef77ff.js", "./ContentQuery.b5936eea.js", "./asyncData.3a9156d7.js", "./index.c769634a.js", "./query.80453754.js", "./utils.fce217ab.js"],
            import.meta.url).then(e => e.default || e)),
        ContentList: re(() => q(() =>
            import ("./ContentList.52a125f7.js"), ["./ContentList.52a125f7.js", "./ContentQuery.b5936eea.js", "./asyncData.3a9156d7.js", "./index.c769634a.js", "./query.80453754.js", "./utils.fce217ab.js", "./index.36486552.js"],
            import.meta.url).then(e => e.default || e)),
        ContentNavigation: re(() => q(() =>
            import ("./ContentNavigation.9e89f70b.js"), ["./ContentNavigation.9e89f70b.js", "./asyncData.3a9156d7.js", "./index.c769634a.js", "./nuxt-link.52eebdb1.js", "./utils.fce217ab.js", "./index.36486552.js", "./query.80453754.js", "./FooterLinks.vue.4ed993c7.js", "./Waves.vue.f4239951.js", "./_commonjsHelpers.28e086c5.js", "./Waves.4d2c473b.css", "./index.a61f72ed.js", "./pagination.vue.4ed993c7.js", "./ContentNavigation.3f9304ef.css", "./BlogTestComponent.ba2bdea9.css", "./Picture.1b03fe0c.css", "./Bar.88537358.css", "./Page.6c88eee2.css", "./ProseCode.e63e49c6.css"],
            import.meta.url).then(e => e.default || e)),
        ContentQuery: re(() => q(() =>
            import ("./ContentQuery.b5936eea.js"), ["./ContentQuery.b5936eea.js", "./asyncData.3a9156d7.js", "./index.c769634a.js", "./query.80453754.js", "./utils.fce217ab.js", "./index.36486552.js"],
            import.meta.url).then(e => e.default || e)),
        ContentRenderer: re(() => q(() =>
            import ("./ContentRenderer.7a82949c.js"), ["./ContentRenderer.7a82949c.js", "./ContentRendererMarkdown.a28096a8.js", "./index.36486552.js", "./index.a6ef77ff.js"],
            import.meta.url).then(e => e.default || e)),
        ContentRendererMarkdown: re(() => q(() =>
            import ("./ContentRendererMarkdown.a28096a8.js"), ["./ContentRendererMarkdown.a28096a8.js", "./index.36486552.js", "./index.a6ef77ff.js"],
            import.meta.url).then(e => e.default || e)),
        ContentSlot: re(() => q(() =>
            import ("./ContentSlot.5405ff9f.js"), ["./ContentSlot.5405ff9f.js", "./utils.fce217ab.js", "./index.36486552.js"],
            import.meta.url).then(e => e.default || e)),
        DocumentDrivenEmpty: re(() => q(() =>
            import ("./DocumentDrivenEmpty.25bd11dd.js"), [],
            import.meta.url).then(e => e.default || e)),
        DocumentDrivenNotFound: re(() => q(() =>
            import ("./DocumentDrivenNotFound.180e741b.js"), [],
            import.meta.url).then(e => e.default || e)),
        Markdown: re(() => q(() =>
            import ("./Markdown.243304be.js"), ["./Markdown.243304be.js", "./ContentSlot.5405ff9f.js", "./utils.fce217ab.js", "./index.36486552.js"],
            import.meta.url).then(e => e.default || e)),
        ProseA: re(() => q(() =>
            import ("./ProseA.79ab404a.js"), ["./ProseA.79ab404a.js", "./nuxt-link.52eebdb1.js"],
            import.meta.url).then(e => e.default || e)),
        ProseBlockquote: re(() => q(() =>
            import ("./ProseBlockquote.70ce04f4.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseCode: re(() => q(() =>
            import ("./ProseCode.8170a495.js"), ["./ProseCode.8170a495.js", "./ProseCode.e63e49c6.css"],
            import.meta.url).then(e => e.default || e)),
        ProseCodeInline: re(() => q(() =>
            import ("./ProseCodeInline.10c24924.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseEm: re(() => q(() =>
            import ("./ProseEm.ba585a2f.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseH1: re(() => q(() =>
            import ("./ProseH1.a5ee79f5.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseH2: re(() => q(() =>
            import ("./ProseH2.cde56355.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseH3: re(() => q(() =>
            import ("./ProseH3.f74c83c3.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseH4: re(() => q(() =>
            import ("./ProseH4.7578bb75.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseH5: re(() => q(() =>
            import ("./ProseH5.11d25d97.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseH6: re(() => q(() =>
            import ("./ProseH6.cf2a1494.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseHr: re(() => q(() =>
            import ("./ProseHr.1b7423b7.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseImg: re(() => q(() =>
            import ("./ProseImg.aeed07a5.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseLi: re(() => q(() =>
            import ("./ProseLi.d02b0a77.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseOl: re(() => q(() =>
            import ("./ProseOl.fc4f0ebd.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseP: re(() => q(() =>
            import ("./ProseP.39db01b7.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseStrong: re(() => q(() =>
            import ("./ProseStrong.85454cbb.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseTable: re(() => q(() =>
            import ("./ProseTable.43b000f6.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseTbody: re(() => q(() =>
            import ("./ProseTbody.dddf5e64.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseTd: re(() => q(() =>
            import ("./ProseTd.026f1ee1.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseTh: re(() => q(() =>
            import ("./ProseTh.9f94444b.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseThead: re(() => q(() =>
            import ("./ProseThead.a39aa8b3.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseTr: re(() => q(() =>
            import ("./ProseTr.7dab7e48.js"), [],
            import.meta.url).then(e => e.default || e)),
        ProseUl: re(() => q(() =>
            import ("./ProseUl.2f827cb6.js"), [],
            import.meta.url).then(e => e.default || e))
    },
    _g = Lt(e => {
        for (const t in $o) e.vueApp.component(t, $o[t]), e.vueApp.component("Lazy" + t, $o[t])
    }),
    yg = {
        meta: [{
            charset: "utf-8"
        }, {
            name: "viewport",
            content: "width=device-width, initial-scale=1"
        }, {
            name: "description",
            content: "UNCX Network is a leading provider of DeFi services. Our scalable tools help token projects launch and grow their communities safely and effectively."
        }, {
            name: "keywords",
            content: "UNCX Network, defi provider, defi services, decentralized finance, multichain blockchain tools, liquidity, staking, minting, token ecosystem, vesting, launchpad"
        }, {
            name: "format-detection",
            content: "telephone=no"
        }, {
            name: "msapplication-TileColor",
            content: "#0a0a0a"
        }, {
            name: "theme-color",
            content: "#0a0a0a"
        }, {
            property: "og:url",
            content: "https://uncx.network"
        }, {
            property: "og:type",
            content: "website"
        }, {
            property: "og:title",
            content: "UNCX Network • Multi-chain DeFi Services"
        }, {
            property: "og:site:name",
            content: "UNCX Network"
        }, {
            property: "og:image",
            content: "https://uncx.network/img/uncx-social-preview.jpg"
        }, {
            property: "twitter:title",
            content: "UNCX Network • Multi-chain DeFi Services"
        }, {
            property: "twitter:site",
            content: "UNCX Network"
        }, {
            property: "twitter:image",
            content: "https://uncx.network/img/uncx-social-preview.jpg"
        }, {
            property: "twitter:image:src",
            content: "https://uncx.network/img/uncx-social-preview.jpg"
        }],
        link: [{
            rel: "icon",
            type: "image/x-icon",
            href: "/favicon.ico"
        }, {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-touch-icon.png"
        }, {
            rel: "icon",
            type: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png"
        }, {
            rel: "icon",
            type: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png"
        }, {
            rel: "manifest",
            href: "/site.webmanifest"
        }, {
            rel: "mask-icon",
            href: "/safari-pinned-tab.svg",
            color: "#0a0a0a"
        }, {
            rel: "sitemap",
            type: "application/xml",
            title: "Sitemap",
            href: "/sitemap.xml"
        }],
        style: [],
        script: [{
            src: "https://www.googletagmanager.com/gtag/js?id=G-84MMFNPH3F",
            async: !0
        }, {
            type: "text/javascript",
            innerHTML: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-84MMFNPH3F');
          `
        }],
        noscript: [],
        title: "UNCX Network • Multi-chain DeFi Services",
        htmlAttrs: {
            lang: "en"
        }
    },
    bg = !1,
    vs = !1,
    vg = !1,
    wg = "__nuxt",
    Eg = Lt(e => {
        const n = Qp();
        n.push(yg), e.vueApp.use(n); {
            let r = !0;
            const o = () => {
                r = !1, n.hooks.callHook("entries:updated", n)
            };
            n.hooks.hook("dom:beforeRender", s => {
                s.shouldRender = !r
            }), e.hooks.hook("page:start", () => {
                r = !0
            }), e.hooks.hook("page:finish", o), e.hooks.hook("app:mounted", o)
        }
    });

function Tg(e) {
    const t = e;
    return t.headTags = e.resolveTags, t.addEntry = e.push, t.addHeadObjs = e.push, t.addReactiveEntry = (n, r) => {
        const o = ng(n, r);
        return typeof o < "u" ? o.dispose : () => {}
    }, t.removeHeadObjs = () => {}, t.updateDOM = () => {
        e.hooks.callHook("entries:updated", e)
    }, t.unhead = e, t
}
const Cg = Lt(e => {
    Tg(e.vueApp._context.provides.usehead)
});
/*!
 * vue-router v4.2.4
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */
const mn = typeof window < "u";

function Lg(e) {
    return e.__esModule || e[Symbol.toStringTag] === "Module"
}
const de = Object.assign;

function Ho(e, t) {
    const n = {};
    for (const r in t) {
        const o = t[r];
        n[r] = at(o) ? o.map(e) : e(o)
    }
    return n
}
const tr = () => {},
    at = Array.isArray,
    kg = /\/$/,
    Rg = e => e.replace(kg, "");

function jo(e, t, n = "/") {
    let r, o = {},
        s = "",
        i = "";
    const a = t.indexOf("#");
    let l = t.indexOf("?");
    return a < l && a >= 0 && (l = -1), l > -1 && (r = t.slice(0, l), s = t.slice(l + 1, a > -1 ? a : t.length), o = e(s)), a > -1 && (r = r || t.slice(0, a), i = t.slice(a, t.length)), r = Ag(r ? ? t, n), {
        fullPath: r + (s && "?") + s + i,
        path: r,
        query: o,
        hash: i
    }
}

function Pg(e, t) {
    const n = t.query ? e(t.query) : "";
    return t.path + (n && "?") + n + (t.hash || "")
}

function Ra(e, t) {
    return !t || !e.toLowerCase().startsWith(t.toLowerCase()) ? e : e.slice(t.length) || "/"
}

function Sg(e, t, n) {
    const r = t.matched.length - 1,
        o = n.matched.length - 1;
    return r > -1 && r === o && In(t.matched[r], n.matched[o]) && _u(t.params, n.params) && e(t.query) === e(n.query) && t.hash === n.hash
}

function In(e, t) {
    return (e.aliasOf || e) === (t.aliasOf || t)
}

function _u(e, t) {
    if (Object.keys(e).length !== Object.keys(t).length) return !1;
    for (const n in e)
        if (!Ig(e[n], t[n])) return !1;
    return !0
}

function Ig(e, t) {
    return at(e) ? Pa(e, t) : at(t) ? Pa(t, e) : e === t
}

function Pa(e, t) {
    return at(t) ? e.length === t.length && e.every((n, r) => n === t[r]) : e.length === 1 && e[0] === t
}

function Ag(e, t) {
    if (e.startsWith("/")) return e;
    if (!e) return t;
    const n = t.split("/"),
        r = e.split("/"),
        o = r[r.length - 1];
    (o === ".." || o === ".") && r.push("");
    let s = n.length - 1,
        i, a;
    for (i = 0; i < r.length; i++)
        if (a = r[i], a !== ".")
            if (a === "..") s > 1 && s--;
            else break;
    return n.slice(0, s).join("/") + "/" + r.slice(i - (i === r.length ? 1 : 0)).join("/")
}
var ur;
(function(e) {
    e.pop = "pop", e.push = "push"
})(ur || (ur = {}));
var nr;
(function(e) {
    e.back = "back", e.forward = "forward", e.unknown = ""
})(nr || (nr = {}));

function Og(e) {
    if (!e)
        if (mn) {
            const t = document.querySelector("base");
            e = t && t.getAttribute("href") || "/", e = e.replace(/^\w+:\/\/[^\/]+/, "")
        } else e = "/";
    return e[0] !== "/" && e[0] !== "#" && (e = "/" + e), Rg(e)
}
const Ng = /^[^#]+#/;

function xg(e, t) {
    return e.replace(Ng, "#") + t
}

function zg(e, t) {
    const n = document.documentElement.getBoundingClientRect(),
        r = e.getBoundingClientRect();
    return {
        behavior: t.behavior,
        left: r.left - n.left - (t.left || 0),
        top: r.top - n.top - (t.top || 0)
    }
}
const go = () => ({
    left: window.pageXOffset,
    top: window.pageYOffset
});

function Dg(e) {
    let t;
    if ("el" in e) {
        const n = e.el,
            r = typeof n == "string" && n.startsWith("#"),
            o = typeof n == "string" ? r ? document.getElementById(n.slice(1)) : document.querySelector(n) : n;
        if (!o) return;
        t = zg(o, e)
    } else t = e;
    "scrollBehavior" in document.documentElement.style ? window.scrollTo(t) : window.scrollTo(t.left != null ? t.left : window.pageXOffset, t.top != null ? t.top : window.pageYOffset)
}

function Sa(e, t) {
    return (history.state ? history.state.position - t : -1) + e
}
const ws = new Map;

function Fg(e, t) {
    ws.set(e, t)
}

function Mg(e) {
    const t = ws.get(e);
    return ws.delete(e), t
}
let Ug = () => location.protocol + "//" + location.host;

function yu(e, t) {
    const {
        pathname: n,
        search: r,
        hash: o
    } = t, s = e.indexOf("#");
    if (s > -1) {
        let a = o.includes(e.slice(s)) ? e.slice(s).length : 1,
            l = o.slice(a);
        return l[0] !== "/" && (l = "/" + l), Ra(l, "")
    }
    return Ra(n, e) + r + o
}

function $g(e, t, n, r) {
    let o = [],
        s = [],
        i = null;
    const a = ({
        state: d
    }) => {
        const p = yu(e, location),
            g = n.value,
            v = t.value;
        let C = 0;
        if (d) {
            if (n.value = p, t.value = d, i && i === g) {
                i = null;
                return
            }
            C = v ? d.position - v.position : 0
        } else r(p);
        o.forEach(b => {
            b(n.value, g, {
                delta: C,
                type: ur.pop,
                direction: C ? C > 0 ? nr.forward : nr.back : nr.unknown
            })
        })
    };

    function l() {
        i = n.value
    }

    function c(d) {
        o.push(d);
        const p = () => {
            const g = o.indexOf(d);
            g > -1 && o.splice(g, 1)
        };
        return s.push(p), p
    }

    function u() {
        const {
            history: d
        } = window;
        d.state && d.replaceState(de({}, d.state, {
            scroll: go()
        }), "")
    }

    function f() {
        for (const d of s) d();
        s = [], window.removeEventListener("popstate", a), window.removeEventListener("beforeunload", u)
    }
    return window.addEventListener("popstate", a), window.addEventListener("beforeunload", u, {
        passive: !0
    }), {
        pauseListeners: l,
        listen: c,
        destroy: f
    }
}

function Ia(e, t, n, r = !1, o = !1) {
    return {
        back: e,
        current: t,
        forward: n,
        replaced: r,
        position: window.history.length,
        scroll: o ? go() : null
    }
}

function Hg(e) {
    const {
        history: t,
        location: n
    } = window, r = {
        value: yu(e, n)
    }, o = {
        value: t.state
    };
    o.value || s(r.value, {
        back: null,
        current: r.value,
        forward: null,
        position: t.length - 1,
        replaced: !0,
        scroll: null
    }, !0);

    function s(l, c, u) {
        const f = e.indexOf("#"),
            d = f > -1 ? (n.host && document.querySelector("base") ? e : e.slice(f)) + l : Ug() + e + l;
        try {
            t[u ? "replaceState" : "pushState"](c, "", d), o.value = c
        } catch (p) {
            console.error(p), n[u ? "replace" : "assign"](d)
        }
    }

    function i(l, c) {
        const u = de({}, t.state, Ia(o.value.back, l, o.value.forward, !0), c, {
            position: o.value.position
        });
        s(l, u, !0), r.value = l
    }

    function a(l, c) {
        const u = de({}, o.value, t.state, {
            forward: l,
            scroll: go()
        });
        s(u.current, u, !0);
        const f = de({}, Ia(r.value, l, null), {
            position: u.position + 1
        }, c);
        s(l, f, !1), r.value = l
    }
    return {
        location: r,
        state: o,
        push: a,
        replace: i
    }
}

function bu(e) {
    e = Og(e);
    const t = Hg(e),
        n = $g(e, t.state, t.location, t.replace);

    function r(s, i = !0) {
        i || n.pauseListeners(), history.go(s)
    }
    const o = de({
        location: "",
        base: e,
        go: r,
        createHref: xg.bind(null, e)
    }, t, n);
    return Object.defineProperty(o, "location", {
        enumerable: !0,
        get: () => t.location.value
    }), Object.defineProperty(o, "state", {
        enumerable: !0,
        get: () => t.state.value
    }), o
}

function jg(e) {
    return e = location.host ? e || location.pathname + location.search : "", e.includes("#") || (e += "#"), bu(e)
}

function Bg(e) {
    return typeof e == "string" || e && typeof e == "object"
}

function vu(e) {
    return typeof e == "string" || typeof e == "symbol"
}
const At = {
        path: "/",
        name: void 0,
        params: {},
        query: {},
        hash: "",
        fullPath: "/",
        matched: [],
        meta: {},
        redirectedFrom: void 0
    },
    wu = Symbol("");
var Aa;
(function(e) {
    e[e.aborted = 4] = "aborted", e[e.cancelled = 8] = "cancelled", e[e.duplicated = 16] = "duplicated"
})(Aa || (Aa = {}));

function An(e, t) {
    return de(new Error, {
        type: e,
        [wu]: !0
    }, t)
}

function _t(e, t) {
    return e instanceof Error && wu in e && (t == null || !!(e.type & t))
}
const Oa = "[^/]+?",
    Wg = {
        sensitive: !1,
        strict: !1,
        start: !0,
        end: !0
    },
    Vg = /[.+*?^${}()[\]/\\]/g;

function Xg(e, t) {
    const n = de({}, Wg, t),
        r = [];
    let o = n.start ? "^" : "";
    const s = [];
    for (const c of e) {
        const u = c.length ? [] : [90];
        n.strict && !c.length && (o += "/");
        for (let f = 0; f < c.length; f++) {
            const d = c[f];
            let p = 40 + (n.sensitive ? .25 : 0);
            if (d.type === 0) f || (o += "/"), o += d.value.replace(Vg, "\\$&"), p += 40;
            else if (d.type === 1) {
                const {
                    value: g,
                    repeatable: v,
                    optional: C,
                    regexp: b
                } = d;
                s.push({
                    name: g,
                    repeatable: v,
                    optional: C
                });
                const m = b || Oa;
                if (m !== Oa) {
                    p += 10;
                    try {
                        new RegExp(`(${m})`)
                    } catch (y) {
                        throw new Error(`Invalid custom RegExp for param "${g}" (${m}): ` + y.message)
                    }
                }
                let S = v ? `((?:${m})(?:/(?:${m}))*)` : `(${m})`;
                f || (S = C && c.length < 2 ? `(?:/${S})` : "/" + S), C && (S += "?"), o += S, p += 20, C && (p += -8), v && (p += -20), m === ".*" && (p += -50)
            }
            u.push(p)
        }
        r.push(u)
    }
    if (n.strict && n.end) {
        const c = r.length - 1;
        r[c][r[c].length - 1] += .7000000000000001
    }
    n.strict || (o += "/?"), n.end ? o += "$" : n.strict && (o += "(?:/|$)");
    const i = new RegExp(o, n.sensitive ? "" : "i");

    function a(c) {
        const u = c.match(i),
            f = {};
        if (!u) return null;
        for (let d = 1; d < u.length; d++) {
            const p = u[d] || "",
                g = s[d - 1];
            f[g.name] = p && g.repeatable ? p.split("/") : p
        }
        return f
    }

    function l(c) {
        let u = "",
            f = !1;
        for (const d of e) {
            (!f || !u.endsWith("/")) && (u += "/"), f = !1;
            for (const p of d)
                if (p.type === 0) u += p.value;
                else if (p.type === 1) {
                const {
                    value: g,
                    repeatable: v,
                    optional: C
                } = p, b = g in c ? c[g] : "";
                if (at(b) && !v) throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);
                const m = at(b) ? b.join("/") : b;
                if (!m)
                    if (C) d.length < 2 && (u.endsWith("/") ? u = u.slice(0, -1) : f = !0);
                    else throw new Error(`Missing required param "${g}"`);
                u += m
            }
        }
        return u || "/"
    }
    return {
        re: i,
        score: r,
        keys: s,
        parse: a,
        stringify: l
    }
}

function Kg(e, t) {
    let n = 0;
    for (; n < e.length && n < t.length;) {
        const r = t[n] - e[n];
        if (r) return r;
        n++
    }
    return e.length < t.length ? e.length === 1 && e[0] === 40 + 40 ? -1 : 1 : e.length > t.length ? t.length === 1 && t[0] === 40 + 40 ? 1 : -1 : 0
}

function qg(e, t) {
    let n = 0;
    const r = e.score,
        o = t.score;
    for (; n < r.length && n < o.length;) {
        const s = Kg(r[n], o[n]);
        if (s) return s;
        n++
    }
    if (Math.abs(o.length - r.length) === 1) {
        if (Na(r)) return 1;
        if (Na(o)) return -1
    }
    return o.length - r.length
}

function Na(e) {
    const t = e[e.length - 1];
    return e.length > 0 && t[t.length - 1] < 0
}
const Yg = {
        type: 0,
        value: ""
    },
    Gg = /[a-zA-Z0-9_]/;

function Jg(e) {
    if (!e) return [
        []
    ];
    if (e === "/") return [
        [Yg]
    ];
    if (!e.startsWith("/")) throw new Error(`Invalid path "${e}"`);

    function t(p) {
        throw new Error(`ERR (${n})/"${c}": ${p}`)
    }
    let n = 0,
        r = n;
    const o = [];
    let s;

    function i() {
        s && o.push(s), s = []
    }
    let a = 0,
        l, c = "",
        u = "";

    function f() {
        c && (n === 0 ? s.push({
            type: 0,
            value: c
        }) : n === 1 || n === 2 || n === 3 ? (s.length > 1 && (l === "*" || l === "+") && t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`), s.push({
            type: 1,
            value: c,
            regexp: u,
            repeatable: l === "*" || l === "+",
            optional: l === "*" || l === "?"
        })) : t("Invalid state to consume buffer"), c = "")
    }

    function d() {
        c += l
    }
    for (; a < e.length;) {
        if (l = e[a++], l === "\\" && n !== 2) {
            r = n, n = 4;
            continue
        }
        switch (n) {
            case 0:
                l === "/" ? (c && f(), i()) : l === ":" ? (f(), n = 1) : d();
                break;
            case 4:
                d(), n = r;
                break;
            case 1:
                l === "(" ? n = 2 : Gg.test(l) ? d() : (f(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--);
                break;
            case 2:
                l === ")" ? u[u.length - 1] == "\\" ? u = u.slice(0, -1) + l : n = 3 : u += l;
                break;
            case 3:
                f(), n = 0, l !== "*" && l !== "?" && l !== "+" && a--, u = "";
                break;
            default:
                t("Unknown state");
                break
        }
    }
    return n === 2 && t(`Unfinished custom RegExp for param "${c}"`), f(), i(), o
}

function Qg(e, t, n) {
    const r = Xg(Jg(e.path), n),
        o = de(r, {
            record: e,
            parent: t,
            children: [],
            alias: []
        });
    return t && !o.record.aliasOf == !t.record.aliasOf && t.children.push(o), o
}

function Zg(e, t) {
    const n = [],
        r = new Map;
    t = Da({
        strict: !1,
        end: !0,
        sensitive: !1
    }, t);

    function o(u) {
        return r.get(u)
    }

    function s(u, f, d) {
        const p = !d,
            g = e_(u);
        g.aliasOf = d && d.record;
        const v = Da(t, u),
            C = [g];
        if ("alias" in u) {
            const S = typeof u.alias == "string" ? [u.alias] : u.alias;
            for (const y of S) C.push(de({}, g, {
                components: d ? d.record.components : g.components,
                path: y,
                aliasOf: d ? d.record : g
            }))
        }
        let b, m;
        for (const S of C) {
            const {
                path: y
            } = S;
            if (f && y[0] !== "/") {
                const w = f.record.path,
                    A = w[w.length - 1] === "/" ? "" : "/";
                S.path = f.record.path + (y && A + y)
            }
            if (b = Qg(S, f, v), d ? d.alias.push(b) : (m = m || b, m !== b && m.alias.push(b), p && u.name && !za(b) && i(u.name)), g.children) {
                const w = g.children;
                for (let A = 0; A < w.length; A++) s(w[A], b, d && d.children[A])
            }
            d = d || b, (b.record.components && Object.keys(b.record.components).length || b.record.name || b.record.redirect) && l(b)
        }
        return m ? () => {
            i(m)
        } : tr
    }

    function i(u) {
        if (vu(u)) {
            const f = r.get(u);
            f && (r.delete(u), n.splice(n.indexOf(f), 1), f.children.forEach(i), f.alias.forEach(i))
        } else {
            const f = n.indexOf(u);
            f > -1 && (n.splice(f, 1), u.record.name && r.delete(u.record.name), u.children.forEach(i), u.alias.forEach(i))
        }
    }

    function a() {
        return n
    }

    function l(u) {
        let f = 0;
        for (; f < n.length && qg(u, n[f]) >= 0 && (u.record.path !== n[f].record.path || !Eu(u, n[f]));) f++;
        n.splice(f, 0, u), u.record.name && !za(u) && r.set(u.record.name, u)
    }

    function c(u, f) {
        let d, p = {},
            g, v;
        if ("name" in u && u.name) {
            if (d = r.get(u.name), !d) throw An(1, {
                location: u
            });
            v = d.record.name, p = de(xa(f.params, d.keys.filter(m => !m.optional).map(m => m.name)), u.params && xa(u.params, d.keys.map(m => m.name))), g = d.stringify(p)
        } else if ("path" in u) g = u.path, d = n.find(m => m.re.test(g)), d && (p = d.parse(g), v = d.record.name);
        else {
            if (d = f.name ? r.get(f.name) : n.find(m => m.re.test(f.path)), !d) throw An(1, {
                location: u,
                currentLocation: f
            });
            v = d.record.name, p = de({}, f.params, u.params), g = d.stringify(p)
        }
        const C = [];
        let b = d;
        for (; b;) C.unshift(b.record), b = b.parent;
        return {
            name: v,
            path: g,
            params: p,
            matched: C,
            meta: n_(C)
        }
    }
    return e.forEach(u => s(u)), {
        addRoute: s,
        resolve: c,
        removeRoute: i,
        getRoutes: a,
        getRecordMatcher: o
    }
}

function xa(e, t) {
    const n = {};
    for (const r of t) r in e && (n[r] = e[r]);
    return n
}

function e_(e) {
    return {
        path: e.path,
        redirect: e.redirect,
        name: e.name,
        meta: e.meta || {},
        aliasOf: void 0,
        beforeEnter: e.beforeEnter,
        props: t_(e),
        children: e.children || [],
        instances: {},
        leaveGuards: new Set,
        updateGuards: new Set,
        enterCallbacks: {},
        components: "components" in e ? e.components || null : e.component && {
            default: e.component
        }
    }
}

function t_(e) {
    const t = {},
        n = e.props || !1;
    if ("component" in e) t.default = n;
    else
        for (const r in e.components) t[r] = typeof n == "object" ? n[r] : n;
    return t
}

function za(e) {
    for (; e;) {
        if (e.record.aliasOf) return !0;
        e = e.parent
    }
    return !1
}

function n_(e) {
    return e.reduce((t, n) => de(t, n.meta), {})
}

function Da(e, t) {
    const n = {};
    for (const r in e) n[r] = r in t ? t[r] : e[r];
    return n
}

function Eu(e, t) {
    return t.children.some(n => n === e || Eu(e, n))
}
const Tu = /#/g,
    r_ = /&/g,
    o_ = /\//g,
    s_ = /=/g,
    i_ = /\?/g,
    Cu = /\+/g,
    a_ = /%5B/g,
    l_ = /%5D/g,
    Lu = /%5E/g,
    c_ = /%60/g,
    ku = /%7B/g,
    u_ = /%7C/g,
    Ru = /%7D/g,
    f_ = /%20/g;

function mi(e) {
    return encodeURI("" + e).replace(u_, "|").replace(a_, "[").replace(l_, "]")
}

function d_(e) {
    return mi(e).replace(ku, "{").replace(Ru, "}").replace(Lu, "^")
}

function Es(e) {
    return mi(e).replace(Cu, "%2B").replace(f_, "+").replace(Tu, "%23").replace(r_, "%26").replace(c_, "`").replace(ku, "{").replace(Ru, "}").replace(Lu, "^")
}

function h_(e) {
    return Es(e).replace(s_, "%3D")
}

function m_(e) {
    return mi(e).replace(Tu, "%23").replace(i_, "%3F")
}

function p_(e) {
    return e == null ? "" : m_(e).replace(o_, "%2F")
}

function Yr(e) {
    try {
        return decodeURIComponent("" + e)
    } catch {}
    return "" + e
}

function g_(e) {
    const t = {};
    if (e === "" || e === "?") return t;
    const r = (e[0] === "?" ? e.slice(1) : e).split("&");
    for (let o = 0; o < r.length; ++o) {
        const s = r[o].replace(Cu, " "),
            i = s.indexOf("="),
            a = Yr(i < 0 ? s : s.slice(0, i)),
            l = i < 0 ? null : Yr(s.slice(i + 1));
        if (a in t) {
            let c = t[a];
            at(c) || (c = t[a] = [c]), c.push(l)
        } else t[a] = l
    }
    return t
}

function Fa(e) {
    let t = "";
    for (let n in e) {
        const r = e[n];
        if (n = h_(n), r == null) {
            r !== void 0 && (t += (t.length ? "&" : "") + n);
            continue
        }(at(r) ? r.map(s => s && Es(s)) : [r && Es(r)]).forEach(s => {
            s !== void 0 && (t += (t.length ? "&" : "") + n, s != null && (t += "=" + s))
        })
    }
    return t
}

function __(e) {
    const t = {};
    for (const n in e) {
        const r = e[n];
        r !== void 0 && (t[n] = at(r) ? r.map(o => o == null ? null : "" + o) : r == null ? r : "" + r)
    }
    return t
}
const y_ = Symbol(""),
    Ma = Symbol(""),
    _o = Symbol(""),
    pi = Symbol(""),
    Ts = Symbol("");

function Bn() {
    let e = [];

    function t(r) {
        return e.push(r), () => {
            const o = e.indexOf(r);
            o > -1 && e.splice(o, 1)
        }
    }

    function n() {
        e = []
    }
    return {
        add: t,
        list: () => e.slice(),
        reset: n
    }
}

function xt(e, t, n, r, o) {
    const s = r && (r.enterCallbacks[o] = r.enterCallbacks[o] || []);
    return () => new Promise((i, a) => {
        const l = f => {
                f === !1 ? a(An(4, {
                    from: n,
                    to: t
                })) : f instanceof Error ? a(f) : Bg(f) ? a(An(2, {
                    from: t,
                    to: f
                })) : (s && r.enterCallbacks[o] === s && typeof f == "function" && s.push(f), i())
            },
            c = e.call(r && r.instances[o], t, n, l);
        let u = Promise.resolve(c);
        e.length < 3 && (u = u.then(l)), u.catch(f => a(f))
    })
}

function Bo(e, t, n, r) {
    const o = [];
    for (const s of e)
        for (const i in s.components) {
            let a = s.components[i];
            if (!(t !== "beforeRouteEnter" && !s.instances[i]))
                if (b_(a)) {
                    const c = (a.__vccOpts || a)[t];
                    c && o.push(xt(c, n, r, s, i))
                } else {
                    let l = a();
                    o.push(() => l.then(c => {
                        if (!c) return Promise.reject(new Error(`Couldn't resolve component "${i}" at "${s.path}"`));
                        const u = Lg(c) ? c.default : c;
                        s.components[i] = u;
                        const d = (u.__vccOpts || u)[t];
                        return d && xt(d, n, r, s, i)()
                    }))
                }
        }
    return o
}

function b_(e) {
    return typeof e == "object" || "displayName" in e || "props" in e || "__vccOpts" in e
}

function Ua(e) {
    const t = xe(_o),
        n = xe(pi),
        r = me(() => t.resolve(Ee(e.to))),
        o = me(() => {
            const {
                matched: l
            } = r.value, {
                length: c
            } = l, u = l[c - 1], f = n.matched;
            if (!u || !f.length) return -1;
            const d = f.findIndex(In.bind(null, u));
            if (d > -1) return d;
            const p = $a(l[c - 2]);
            return c > 1 && $a(u) === p && f[f.length - 1].path !== p ? f.findIndex(In.bind(null, l[c - 2])) : d
        }),
        s = me(() => o.value > -1 && T_(n.params, r.value.params)),
        i = me(() => o.value > -1 && o.value === n.matched.length - 1 && _u(n.params, r.value.params));

    function a(l = {}) {
        return E_(l) ? t[Ee(e.replace) ? "replace" : "push"](Ee(e.to)).catch(tr) : Promise.resolve()
    }
    return {
        route: r,
        href: me(() => r.value.href),
        isActive: s,
        isExactActive: i,
        navigate: a
    }
}
const v_ = lt({
        name: "RouterLink",
        compatConfig: {
            MODE: 3
        },
        props: {
            to: {
                type: [String, Object],
                required: !0
            },
            replace: Boolean,
            activeClass: String,
            exactActiveClass: String,
            custom: Boolean,
            ariaCurrentValue: {
                type: String,
                default: "page"
            }
        },
        useLink: Ua,
        setup(e, {
            slots: t
        }) {
            const n = gt(Ua(e)),
                {
                    options: r
                } = xe(_o),
                o = me(() => ({
                    [Ha(e.activeClass, r.linkActiveClass, "router-link-active")]: n.isActive,
                    [Ha(e.exactActiveClass, r.linkExactActiveClass, "router-link-exact-active")]: n.isExactActive
                }));
            return () => {
                const s = t.default && t.default(n);
                return e.custom ? s : Ke("a", {
                    "aria-current": n.isExactActive ? e.ariaCurrentValue : null,
                    href: n.href,
                    onClick: n.navigate,
                    class: o.value
                }, s)
            }
        }
    }),
    w_ = v_;

function E_(e) {
    if (!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey) && !e.defaultPrevented && !(e.button !== void 0 && e.button !== 0)) {
        if (e.currentTarget && e.currentTarget.getAttribute) {
            const t = e.currentTarget.getAttribute("target");
            if (/\b_blank\b/i.test(t)) return
        }
        return e.preventDefault && e.preventDefault(), !0
    }
}

function T_(e, t) {
    for (const n in t) {
        const r = t[n],
            o = e[n];
        if (typeof r == "string") {
            if (r !== o) return !1
        } else if (!at(o) || o.length !== r.length || r.some((s, i) => s !== o[i])) return !1
    }
    return !0
}

function $a(e) {
    return e ? e.aliasOf ? e.aliasOf.path : e.path : ""
}
const Ha = (e, t, n) => e ? ? t ? ? n,
    C_ = lt({
        name: "RouterView",
        inheritAttrs: !1,
        props: {
            name: {
                type: String,
                default: "default"
            },
            route: Object
        },
        compatConfig: {
            MODE: 3
        },
        setup(e, {
            attrs: t,
            slots: n
        }) {
            const r = xe(Ts),
                o = me(() => e.route || r.value),
                s = xe(Ma, 0),
                i = me(() => {
                    let c = Ee(s);
                    const {
                        matched: u
                    } = o.value;
                    let f;
                    for (;
                        (f = u[c]) && !f.components;) c++;
                    return c
                }),
                a = me(() => o.value.matched[i.value]);
            Cn(Ma, me(() => i.value + 1)), Cn(y_, a), Cn(Ts, o);
            const l = Se();
            return it(() => [l.value, a.value, e.name], ([c, u, f], [d, p, g]) => {
                u && (u.instances[f] = c, p && p !== u && c && c === d && (u.leaveGuards.size || (u.leaveGuards = p.leaveGuards), u.updateGuards.size || (u.updateGuards = p.updateGuards))), c && u && (!p || !In(u, p) || !d) && (u.enterCallbacks[f] || []).forEach(v => v(c))
            }, {
                flush: "post"
            }), () => {
                const c = o.value,
                    u = e.name,
                    f = a.value,
                    d = f && f.components[u];
                if (!d) return ja(n.default, {
                    Component: d,
                    route: c
                });
                const p = f.props[u],
                    g = p ? p === !0 ? c.params : typeof p == "function" ? p(c) : p : null,
                    C = Ke(d, de({}, g, t, {
                        onVnodeUnmounted: b => {
                            b.component.isUnmounted && (f.instances[u] = null)
                        },
                        ref: l
                    }));
                return ja(n.default, {
                    Component: C,
                    route: c
                }) || C
            }
        }
    });

function ja(e, t) {
    if (!e) return null;
    const n = e(t);
    return n.length === 1 ? n[0] : n
}
const Pu = C_;

function L_(e) {
    const t = Zg(e.routes, e),
        n = e.parseQuery || g_,
        r = e.stringifyQuery || Fa,
        o = e.history,
        s = Bn(),
        i = Bn(),
        a = Bn(),
        l = Jo(At);
    let c = At;
    mn && e.scrollBehavior && "scrollRestoration" in history && (history.scrollRestoration = "manual");
    const u = Ho.bind(null, N => "" + N),
        f = Ho.bind(null, p_),
        d = Ho.bind(null, Yr);

    function p(N, V) {
        let j, G;
        return vu(N) ? (j = t.getRecordMatcher(N), G = V) : G = N, t.addRoute(G, j)
    }

    function g(N) {
        const V = t.getRecordMatcher(N);
        V && t.removeRoute(V)
    }

    function v() {
        return t.getRoutes().map(N => N.record)
    }

    function C(N) {
        return !!t.getRecordMatcher(N)
    }

    function b(N, V) {
        if (V = de({}, V || l.value), typeof N == "string") {
            const E = jo(n, N, V.path),
                I = t.resolve({
                    path: E.path
                }, V),
                z = o.createHref(E.fullPath);
            return de(E, I, {
                params: d(I.params),
                hash: Yr(E.hash),
                redirectedFrom: void 0,
                href: z
            })
        }
        let j;
        if ("path" in N) j = de({}, N, {
            path: jo(n, N.path, V.path).path
        });
        else {
            const E = de({}, N.params);
            for (const I in E) E[I] == null && delete E[I];
            j = de({}, N, {
                params: f(E)
            }), V.params = f(V.params)
        }
        const G = t.resolve(j, V),
            ce = N.hash || "";
        G.params = u(d(G.params));
        const h = Pg(r, de({}, N, {
                hash: d_(ce),
                path: G.path
            })),
            _ = o.createHref(h);
        return de({
            fullPath: h,
            hash: ce,
            query: r === Fa ? __(N.query) : N.query || {}
        }, G, {
            redirectedFrom: void 0,
            href: _
        })
    }

    function m(N) {
        return typeof N == "string" ? jo(n, N, l.value.path) : de({}, N)
    }

    function S(N, V) {
        if (c !== N) return An(8, {
            from: V,
            to: N
        })
    }

    function y(N) {
        return P(N)
    }

    function w(N) {
        return y(de(m(N), {
            replace: !0
        }))
    }

    function A(N) {
        const V = N.matched[N.matched.length - 1];
        if (V && V.redirect) {
            const {
                redirect: j
            } = V;
            let G = typeof j == "function" ? j(N) : j;
            return typeof G == "string" && (G = G.includes("?") || G.includes("#") ? G = m(G) : {
                path: G
            }, G.params = {}), de({
                query: N.query,
                hash: N.hash,
                params: "path" in G ? {} : N.params
            }, G)
        }
    }

    function P(N, V) {
        const j = c = b(N),
            G = l.value,
            ce = N.state,
            h = N.force,
            _ = N.replace === !0,
            E = A(j);
        if (E) return P(de(m(E), {
            state: typeof E == "object" ? de({}, ce, E.state) : ce,
            force: h,
            replace: _
        }), V || j);
        const I = j;
        I.redirectedFrom = V;
        let z;
        return !h && Sg(r, G, j) && (z = An(16, {
            to: I,
            from: G
        }), Ye(G, G, !0, !1)), (z ? Promise.resolve(z) : $(I, G)).catch(D => _t(D) ? _t(D, 2) ? D : ut(D) : oe(D, I, G)).then(D => {
            if (D) {
                if (_t(D, 2)) return P(de({
                    replace: _
                }, m(D.to), {
                    state: typeof D.to == "object" ? de({}, ce, D.to.state) : ce,
                    force: h
                }), V || I)
            } else D = O(I, G, !0, _, ce);
            return k(I, G, D), D
        })
    }

    function L(N, V) {
        const j = S(N, V);
        return j ? Promise.reject(j) : Promise.resolve()
    }

    function F(N) {
        const V = kt.values().next().value;
        return V && typeof V.runWithContext == "function" ? V.runWithContext(N) : N()
    }

    function $(N, V) {
        let j;
        const [G, ce, h] = k_(N, V);
        j = Bo(G.reverse(), "beforeRouteLeave", N, V);
        for (const E of G) E.leaveGuards.forEach(I => {
            j.push(xt(I, N, V))
        });
        const _ = L.bind(null, N, V);
        return j.push(_), ke(j).then(() => {
            j = [];
            for (const E of s.list()) j.push(xt(E, N, V));
            return j.push(_), ke(j)
        }).then(() => {
            j = Bo(ce, "beforeRouteUpdate", N, V);
            for (const E of ce) E.updateGuards.forEach(I => {
                j.push(xt(I, N, V))
            });
            return j.push(_), ke(j)
        }).then(() => {
            j = [];
            for (const E of h)
                if (E.beforeEnter)
                    if (at(E.beforeEnter))
                        for (const I of E.beforeEnter) j.push(xt(I, N, V));
                    else j.push(xt(E.beforeEnter, N, V));
            return j.push(_), ke(j)
        }).then(() => (N.matched.forEach(E => E.enterCallbacks = {}), j = Bo(h, "beforeRouteEnter", N, V), j.push(_), ke(j))).then(() => {
            j = [];
            for (const E of i.list()) j.push(xt(E, N, V));
            return j.push(_), ke(j)
        }).catch(E => _t(E, 8) ? E : Promise.reject(E))
    }

    function k(N, V, j) {
        a.list().forEach(G => F(() => G(N, V, j)))
    }

    function O(N, V, j, G, ce) {
        const h = S(N, V);
        if (h) return h;
        const _ = V === At,
            E = mn ? history.state : {};
        j && (G || _ ? o.replace(N.fullPath, de({
            scroll: _ && E && E.scroll
        }, ce)) : o.push(N.fullPath, ce)), l.value = N, Ye(N, V, j, _), ut()
    }
    let B;

    function U() {
        B || (B = o.listen((N, V, j) => {
            if (!an.listening) return;
            const G = b(N),
                ce = A(G);
            if (ce) {
                P(de(ce, {
                    replace: !0
                }), G).catch(tr);
                return
            }
            c = G;
            const h = l.value;
            mn && Fg(Sa(h.fullPath, j.delta), go()), $(G, h).catch(_ => _t(_, 12) ? _ : _t(_, 2) ? (P(_.to, G).then(E => {
                _t(E, 20) && !j.delta && j.type === ur.pop && o.go(-1, !1)
            }).catch(tr), Promise.reject()) : (j.delta && o.go(-j.delta, !1), oe(_, G, h))).then(_ => {
                _ = _ || O(G, h, !1), _ && (j.delta && !_t(_, 8) ? o.go(-j.delta, !1) : j.type === ur.pop && _t(_, 20) && o.go(-1, !1)), k(G, h, _)
            }).catch(tr)
        }))
    }
    let Q = Bn(),
        ne = Bn(),
        ee;

    function oe(N, V, j) {
        ut(N);
        const G = ne.list();
        return G.length ? G.forEach(ce => ce(N, V, j)) : console.error(N), Promise.reject(N)
    }

    function nt() {
        return ee && l.value !== At ? Promise.resolve() : new Promise((N, V) => {
            Q.add([N, V])
        })
    }

    function ut(N) {
        return ee || (ee = !N, U(), Q.list().forEach(([V, j]) => N ? j(N) : V()), Q.reset()), N
    }

    function Ye(N, V, j, G) {
        const {
            scrollBehavior: ce
        } = e;
        if (!mn || !ce) return Promise.resolve();
        const h = !j && Mg(Sa(N.fullPath, 0)) || (G || !j) && history.state && history.state.scroll || null;
        return rn().then(() => ce(N, V, h)).then(_ => _ && Dg(_)).catch(_ => oe(_, N, V))
    }
    const Ae = N => o.go(N);
    let Ht;
    const kt = new Set,
        an = {
            currentRoute: l,
            listening: !0,
            addRoute: p,
            removeRoute: g,
            hasRoute: C,
            getRoutes: v,
            resolve: b,
            options: e,
            push: y,
            replace: w,
            go: Ae,
            back: () => Ae(-1),
            forward: () => Ae(1),
            beforeEach: s.add,
            beforeResolve: i.add,
            afterEach: a.add,
            onError: ne.add,
            isReady: nt,
            install(N) {
                const V = this;
                N.component("RouterLink", w_), N.component("RouterView", Pu), N.config.globalProperties.$router = V, Object.defineProperty(N.config.globalProperties, "$route", {
                    enumerable: !0,
                    get: () => Ee(l)
                }), mn && !Ht && l.value === At && (Ht = !0, y(o.location).catch(ce => {}));
                const j = {};
                for (const ce in At) Object.defineProperty(j, ce, {
                    get: () => l.value[ce],
                    enumerable: !0
                });
                N.provide(_o, V), N.provide(pi, Kl(j)), N.provide(Ts, l);
                const G = N.unmount;
                kt.add(N), N.unmount = function() {
                    kt.delete(N), kt.size < 1 && (c = At, B && B(), B = null, l.value = At, Ht = !1, ee = !1), G()
                }
            }
        };

    function ke(N) {
        return N.reduce((V, j) => V.then(() => F(j)), Promise.resolve())
    }
    return an
}

function k_(e, t) {
    const n = [],
        r = [],
        o = [],
        s = Math.max(t.matched.length, e.matched.length);
    for (let i = 0; i < s; i++) {
        const a = t.matched[i];
        a && (e.matched.find(c => In(c, a)) ? r.push(a) : n.push(a));
        const l = e.matched[i];
        l && (t.matched.find(c => In(c, l)) || o.push(l))
    }
    return [n, r, o]
}

function R_() {
    return xe(_o)
}

function Su() {
    return xe(pi)
}
const Be = {
        middleware: "auth"
    },
    We = {
        middleware: "auth"
    },
    Ba = [{
        name: "blog--components-post-list-item___en",
        path: "/blog/-components/post-list-item",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./post-list-item.0f167078.js"), ["./post-list-item.0f167078.js", "./post-list-item.vue.ec44909a.js", "./ContentRenderer.7a82949c.js", "./ContentRendererMarkdown.a28096a8.js", "./index.36486552.js", "./index.a6ef77ff.js", "./helpers.1549a486.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "blog--components-post-page___en",
        path: "/blog/-components/post-page",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./post-page.ced5e5f9.js"), ["./post-page.ced5e5f9.js", "./post-page.vue.49d43347.js", "./nuxt-link.52eebdb1.js", "./ContentRenderer.7a82949c.js", "./ContentRendererMarkdown.a28096a8.js", "./index.36486552.js", "./index.a6ef77ff.js", "./helpers.1549a486.js", "./post-page.12bba168.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "blog-slug___en",
        path: "/blog/:slug?",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./_slug_.3269e2e6.js"), ["./_slug_.3269e2e6.js", "./Spinner.c8a6f5e3.js", "./pagination.vue.68c6338d.js", "./pagination.vue.4ed993c7.js", "./Waves.a713412c.js", "./nuxt-link.52eebdb1.js", "./Waves.vue.f4239951.js", "./_commonjsHelpers.28e086c5.js", "./Waves.4d2c473b.css", "./client-only.2bc3c0c4.js", "./asyncData.3a9156d7.js", "./post-list-item.vue.ec44909a.js", "./ContentRenderer.7a82949c.js", "./ContentRendererMarkdown.a28096a8.js", "./index.36486552.js", "./index.a6ef77ff.js", "./helpers.1549a486.js", "./post-page.vue.49d43347.js", "./post-page.12bba168.css", "./_slug_.a2605201.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "index___en",
        path: "/",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./index.950b9300.js"), ["./index.950b9300.js", "./services.05816bf8.js", "./nuxt-link.52eebdb1.js", "./Picture.1b03fe0c.css", "./Scroll.88e82cb9.js", "./Waves.a713412c.js", "./Waves.vue.f4239951.js", "./_commonjsHelpers.28e086c5.js", "./Waves.4d2c473b.css", "./client-only.2bc3c0c4.js", "./index.a61f72ed.js", "./BlockchainLogo.4d82f840.js", "./Section.6cf006c4.js", "./Card.6e9ec9f6.js", "./BgUnicornMiddle.34cd4222.js", "./Card.15fcc3d9.js", "./Member.b44afb3a.js", "./BgUnicornTwo.c77a3fd9.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "launchpad___en",
        path: "/launchpad",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./launchpad.dd282d53.js"), ["./launchpad.dd282d53.js", "./Page.vue.e52fd804.js", "./Waves.a713412c.js", "./nuxt-link.52eebdb1.js", "./Waves.vue.f4239951.js", "./_commonjsHelpers.28e086c5.js", "./Waves.4d2c473b.css", "./App.80f13a2f.js", "./services.05816bf8.js", "./Picture.1b03fe0c.css", "./Section.6cf006c4.js", "./Scroll.88e82cb9.js", "./client-only.2bc3c0c4.js", "./index.a61f72ed.js", "./Page.7622f5df.js", "./Card.6e9ec9f6.js", "./BgUnicornMiddle.34cd4222.js", "./Section.e79dd368.js", "./BgUnicornTwo.c77a3fd9.js", "./Page.6c88eee2.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "manager--components-drafts-list___en",
        path: "/manager/-components/drafts-list",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./drafts-list.4b04e12d.js"), ["./drafts-list.4b04e12d.js", "./drafts-list.vue.3b6cc507.js", "./XIcon.c9b0c858.js", "./useDrafts.738e21ff.js", "./uuid.f654ea91.js", "./index.b58e245d.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "manager--components-notification___en",
        path: "/manager/-components/notification",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./notification.8ad64575.js"), ["./notification.8ad64575.js", "./notification.vue.911b6057.js", "./XIcon.c9b0c858.js", "./notification.c18f1aeb.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "manager--components-notifications-root___en",
        path: "/manager/-components/notifications-root",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./notifications-root.1a8f44be.js"), ["./notifications-root.1a8f44be.js", "./notifications-root.vue.9f943dbf.js", "./useNotify.90923294.js", "./uuid.f654ea91.js", "./notification.vue.911b6057.js", "./XIcon.c9b0c858.js", "./notification.c18f1aeb.css", "./notifications-root.13444bb7.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "manager--components-popup-root___en",
        path: "/manager/-components/popup-root",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./popup-root.18e83c6c.js"), ["./popup-root.18e83c6c.js", "./popup-root.vue.cd015158.js", "./usePopups.54344415.js", "./uuid.f654ea91.js", "./popup.vue.4503f3a3.js", "./XIcon.c9b0c858.js", "./popup.cd761e4f.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "manager--components-popup___en",
        path: "/manager/-components/popup",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./popup.e51703e6.js"), ["./popup.e51703e6.js", "./popup.vue.4503f3a3.js", "./XIcon.c9b0c858.js", "./popup.cd761e4f.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "manager--components-post-edit___en",
        path: "/manager/-components/post-edit",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./post-edit.9c5ff102.js"), ["./post-edit.9c5ff102.js", "./post-edit.vue.feab1549.js", "./Spinner.c8a6f5e3.js", "./ContentRenderer.7a82949c.js", "./ContentRendererMarkdown.a28096a8.js", "./index.36486552.js", "./index.a6ef77ff.js", "./usePopups.54344415.js", "./uuid.f654ea91.js", "./index.c769634a.js", "./asyncData.3a9156d7.js", "./XIcon.c9b0c858.js", "./useDrafts.738e21ff.js", "./index.b58e245d.js", "./useNotify.90923294.js", "./popup.vue.4503f3a3.js", "./popup.cd761e4f.css", "./helpers.1549a486.js", "./post-edit.26cb7b8b.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "manager--components-post-list-item___en",
        path: "/manager/-components/post-list-item",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./post-list-item.7186bcf4.js"), ["./post-list-item.7186bcf4.js", "./post-list-item.vue.c4ba69ed.js", "./ContentRenderer.7a82949c.js", "./ContentRendererMarkdown.a28096a8.js", "./index.36486552.js", "./index.a6ef77ff.js", "./nuxt-link.52eebdb1.js", "./usePopups.54344415.js", "./uuid.f654ea91.js", "./index.b58e245d.js", "./helpers.1549a486.js", "./post-list-item.a90a65cc.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (Be == null ? void 0 : Be.name) ? ? "manager-admin___en",
        path: (Be == null ? void 0 : Be.path) ? ? "/manager/admin",
        meta: Be || {},
        alias: (Be == null ? void 0 : Be.alias) || [],
        redirect: (Be == null ? void 0 : Be.redirect) || void 0,
        component: () => q(() =>
            import ("./admin.8b732c0d.js"), ["./admin.8b732c0d.js", "./Spinner.c8a6f5e3.js", "./pagination.vue.68c6338d.js", "./pagination.vue.4ed993c7.js", "./client-only.2bc3c0c4.js", "./asyncData.3a9156d7.js", "./useAuth.de3ddc43.js", "./drafts-list.vue.3b6cc507.js", "./XIcon.c9b0c858.js", "./useDrafts.738e21ff.js", "./uuid.f654ea91.js", "./index.b58e245d.js", "./notifications-root.vue.9f943dbf.js", "./useNotify.90923294.js", "./notification.vue.911b6057.js", "./notification.c18f1aeb.css", "./notifications-root.13444bb7.css", "./popup-root.vue.cd015158.js", "./usePopups.54344415.js", "./popup.vue.4503f3a3.js", "./popup.cd761e4f.css", "./post-edit.vue.feab1549.js", "./ContentRenderer.7a82949c.js", "./ContentRendererMarkdown.a28096a8.js", "./index.36486552.js", "./index.a6ef77ff.js", "./index.c769634a.js", "./helpers.1549a486.js", "./post-edit.26cb7b8b.css", "./post-list-item.vue.c4ba69ed.js", "./nuxt-link.52eebdb1.js", "./post-list-item.a90a65cc.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: (We == null ? void 0 : We.name) ? ? "manager-login___en",
        path: (We == null ? void 0 : We.path) ? ? "/manager/login",
        meta: We || {},
        alias: (We == null ? void 0 : We.alias) || [],
        redirect: (We == null ? void 0 : We.redirect) || void 0,
        component: () => q(() =>
            import ("./login.2eb8751d.js"), ["./login.2eb8751d.js", "./Spinner.c8a6f5e3.js", "./useAuth.de3ddc43.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "minter___en",
        path: "/minter",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./minter.12a73ad9.js"), ["./minter.12a73ad9.js", "./Page.vue.e52fd804.js", "./Waves.a713412c.js", "./nuxt-link.52eebdb1.js", "./Waves.vue.f4239951.js", "./_commonjsHelpers.28e086c5.js", "./Waves.4d2c473b.css", "./App.80f13a2f.js", "./services.05816bf8.js", "./Picture.1b03fe0c.css", "./Section.6cf006c4.js", "./Scroll.88e82cb9.js", "./client-only.2bc3c0c4.js", "./index.a61f72ed.js", "./BlockchainLogo.4d82f840.js", "./BgUnicornMiddle.34cd4222.js", "./Section.e79dd368.js", "./BgUnicornTwo.c77a3fd9.js", "./Page.6c88eee2.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "network___en",
        path: "/network",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./network.bb6cd7d7.js"), ["./network.bb6cd7d7.js", "./Page.vue.e52fd804.js", "./Waves.a713412c.js", "./nuxt-link.52eebdb1.js", "./Waves.vue.f4239951.js", "./_commonjsHelpers.28e086c5.js", "./Waves.4d2c473b.css", "./App.80f13a2f.js", "./services.05816bf8.js", "./Picture.1b03fe0c.css", "./Section.6cf006c4.js", "./Scroll.88e82cb9.js", "./client-only.2bc3c0c4.js", "./index.a61f72ed.js", "./Card.15fcc3d9.js", "./BgUnicornTwo.c77a3fd9.js", "./Page.6c88eee2.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "privacy-policy___en",
        path: "/privacy-policy",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./privacy-policy.999ac60e.js"), ["./privacy-policy.999ac60e.js", "./DefaultContent.52d5b4df.js", "./Default.441e0b74.js", "./Scroll.88e82cb9.js", "./Waves.a713412c.js", "./nuxt-link.52eebdb1.js", "./Waves.vue.f4239951.js", "./_commonjsHelpers.28e086c5.js", "./Waves.4d2c473b.css", "./client-only.2bc3c0c4.js", "./index.a61f72ed.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "sitemap___en",
        path: "/sitemap",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./sitemap.ad9f84fe.js"), ["./sitemap.ad9f84fe.js", "./Default.441e0b74.js", "./Scroll.88e82cb9.js", "./Waves.a713412c.js", "./nuxt-link.52eebdb1.js", "./Waves.vue.f4239951.js", "./_commonjsHelpers.28e086c5.js", "./Waves.4d2c473b.css", "./client-only.2bc3c0c4.js", "./index.a61f72ed.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "staking___en",
        path: "/staking",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./staking.9152068b.js"), ["./staking.9152068b.js", "./Page.vue.e52fd804.js", "./Waves.a713412c.js", "./nuxt-link.52eebdb1.js", "./Waves.vue.f4239951.js", "./_commonjsHelpers.28e086c5.js", "./Waves.4d2c473b.css", "./App.80f13a2f.js", "./services.05816bf8.js", "./Picture.1b03fe0c.css", "./Section.6cf006c4.js", "./Scroll.88e82cb9.js", "./client-only.2bc3c0c4.js", "./index.a61f72ed.js", "./BlockchainLogo.4d82f840.js", "./BgUnicornMiddle.34cd4222.js", "./Section.e79dd368.js", "./BgUnicornTwo.c77a3fd9.js", "./Page.6c88eee2.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "team___en",
        path: "/team",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./team.ecec8d6a.js"), ["./team.ecec8d6a.js", "./Page.vue.e52fd804.js", "./Waves.a713412c.js", "./nuxt-link.52eebdb1.js", "./Waves.vue.f4239951.js", "./_commonjsHelpers.28e086c5.js", "./Waves.4d2c473b.css", "./App.80f13a2f.js", "./services.05816bf8.js", "./Picture.1b03fe0c.css", "./Section.6cf006c4.js", "./Scroll.88e82cb9.js", "./client-only.2bc3c0c4.js", "./index.a61f72ed.js", "./Member.b44afb3a.js", "./Page.6c88eee2.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "terms___en",
        path: "/terms",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./terms.dd59b4a2.js"), ["./terms.dd59b4a2.js", "./DefaultContent.52d5b4df.js", "./Default.441e0b74.js", "./Scroll.88e82cb9.js", "./Waves.a713412c.js", "./nuxt-link.52eebdb1.js", "./Waves.vue.f4239951.js", "./_commonjsHelpers.28e086c5.js", "./Waves.4d2c473b.css", "./client-only.2bc3c0c4.js", "./index.a61f72ed.js"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "tokens___en",
        path: "/tokens",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./tokens.0c883019.js"), ["./tokens.0c883019.js", "./Page.vue.e52fd804.js", "./Waves.a713412c.js", "./nuxt-link.52eebdb1.js", "./Waves.vue.f4239951.js", "./_commonjsHelpers.28e086c5.js", "./Waves.4d2c473b.css", "./App.80f13a2f.js", "./services.05816bf8.js", "./Picture.1b03fe0c.css", "./Section.6cf006c4.js", "./Scroll.88e82cb9.js", "./client-only.2bc3c0c4.js", "./index.a61f72ed.js", "./BgUnicornMiddle.34cd4222.js", "./Section.e79dd368.js", "./BgUnicornTwo.c77a3fd9.js", "./Page.6c88eee2.css"],
            import.meta.url).then(e => e.default || e)
    }, {
        name: "vesting___en",
        path: "/vesting",
        meta: {},
        alias: [],
        redirect: void 0,
        component: () => q(() =>
            import ("./vesting.0009e0d3.js"), ["./vesting.0009e0d3.js", "./Page.vue.e52fd804.js", "./Waves.a713412c.js", "./nuxt-link.52eebdb1.js", "./Waves.vue.f4239951.js", "./_commonjsHelpers.28e086c5.js", "./Waves.4d2c473b.css", "./App.80f13a2f.js", "./services.05816bf8.js", "./Picture.1b03fe0c.css", "./Section.6cf006c4.js", "./Scroll.88e82cb9.js", "./client-only.2bc3c0c4.js", "./index.a61f72ed.js", "./BlockchainLogo.4d82f840.js", "./Page.7622f5df.js", "./Card.6e9ec9f6.js", "./BgUnicornMiddle.34cd4222.js", "./Section.e79dd368.js", "./BgUnicornTwo.c77a3fd9.js", "./Page.6c88eee2.css"],
            import.meta.url).then(e => e.default || e)
    }],
    P_ = {
        scrollBehavior(e, t, n) {
            const r = ze();
            let o = n || void 0;
            if (!o && t && e && e.meta.scrollToTop !== !1 && S_(t, e) && (o = {
                    left: 0,
                    top: 0
                }), e.path === t.path) {
                if (t.hash && !e.hash) return {
                    left: 0,
                    top: 0
                };
                if (e.hash) return {
                    el: e.hash,
                    top: Wa(e.hash)
                }
            }
            const s = a => !!(a.meta.pageTransition ? ? vs),
                i = s(t) && s(e) ? "page:transition:finish" : "page:finish";
            return new Promise(a => {
                r.hooks.hookOnce(i, async () => {
                    await rn(), e.hash && (o = {
                        el: e.hash,
                        top: Wa(e.hash)
                    }), a(o)
                })
            })
        }
    };

function Wa(e) {
    try {
        const t = document.querySelector(e);
        if (t) return parseFloat(getComputedStyle(t).scrollMarginTop)
    } catch {}
    return 0
}

function S_(e, t) {
    const n = e.matched[0] === t.matched[0];
    return !!(!n || n && JSON.stringify(e.params) !== JSON.stringify(t.params))
}
const I_ = {},
    yt = { ...I_,
        ...P_
    },
    A_ = pu(async e => {
        var l;
        let t, n;
        if (!((l = e.meta) != null && l.validate)) return;
        const r = ze(),
            o = Fn();
        if (([t, n] = Gt(() => Promise.resolve(e.meta.validate(e))), t = await t, n(), t) === !0) return;
        const i = gu({
                statusCode: 404,
                statusMessage: `Page Not Found: ${e.fullPath}`
            }),
            a = o.beforeResolve(c => {
                if (a(), c === e) {
                    const u = o.afterEach(async () => {
                        u(), await vt(r, pn, [i]), window.history.pushState({}, "", e.fullPath)
                    });
                    return !1
                }
            })
    }),
    O_ = [A_],
    rr = {
        auth: () => q(() =>
            import ("./auth.4d29b63a.js"), ["./auth.4d29b63a.js", "./useAuth.de3ddc43.js"],
            import.meta.url)
    };

function N_(e, t) {
    const {
        pathname: n,
        search: r,
        hash: o
    } = t, s = e.indexOf("#");
    if (s > -1) {
        const a = o.includes(e.slice(s)) ? e.slice(s).length : 1;
        let l = o.slice(a);
        return l[0] !== "/" && (l = "/" + l), ga(l, "")
    }
    return ga(n, e) + r + o
}
const x_ = Lt(async e => {
        var g, v;
        let t, n, r = nu().app.baseURL;
        yt.hashMode && !r.includes("#") && (r += "#");
        const o = ((g = yt.history) == null ? void 0 : g.call(yt, r)) ? ? (yt.hashMode ? jg(r) : bu(r)),
            s = ((v = yt.routes) == null ? void 0 : v.call(yt, Ba)) ? ? Ba,
            i = N_(r, window.location),
            a = L_({ ...yt,
                history: o,
                routes: s
            });
        e.vueApp.use(a);
        const l = Jo(a.currentRoute.value);
        a.afterEach((C, b) => {
            l.value = b
        }), Object.defineProperty(e.vueApp.config.globalProperties, "previousRoute", {
            get: () => l.value
        });
        const c = Jo(a.resolve(i)),
            u = () => {
                c.value = a.currentRoute.value
            };
        e.hook("page:finish", u), a.afterEach((C, b) => {
            var m, S, y, w;
            ((S = (m = C.matched[0]) == null ? void 0 : m.components) == null ? void 0 : S.default) === ((w = (y = b.matched[0]) == null ? void 0 : y.components) == null ? void 0 : w.default) && u()
        });
        const f = {};
        for (const C in c.value) f[C] = me(() => c.value[C]);
        e._route = gt(f), e._middleware = e._middleware || {
            global: [],
            named: {}
        };
        const d = po();
        try {
            [t, n] = Gt(() => a.isReady()), await t, n()
        } catch (C) {
            [t, n] = Gt(() => vt(e, pn, [C])), await t, n()
        }
        const p = mu("_layout");
        return a.beforeEach(async (C, b) => {
            var S;
            C.meta = gt(C.meta), e.isHydrating && p.value && !en(C.meta.layout) && (C.meta.layout = p.value), e._processingMiddleware = !0;
            const m = new Set([...O_, ...e._middleware.global]);
            for (const y of C.matched) {
                const w = y.meta.middleware;
                if (w)
                    if (Array.isArray(w))
                        for (const A of w) m.add(A);
                    else m.add(w)
            }
            for (const y of m) {
                const w = typeof y == "string" ? e._middleware.named[y] || await ((S = rr[y]) == null ? void 0 : S.call(rr).then(P => P.default || P)) : y;
                if (!w) throw new Error(`Unknown route middleware: '${y}'.`);
                const A = await vt(e, w, [C, b]);
                if (!e.payload.serverRendered && e.isHydrating && (A === !1 || A instanceof Error)) {
                    const P = A || ys({
                        statusCode: 404,
                        statusMessage: `Page Not Found: ${i}`
                    });
                    return await vt(e, pn, [P]), !1
                }
                if (A || A === !1) return A
            }
        }), a.afterEach(async C => {
            delete e._processingMiddleware, !e.isHydrating && d.value && await vt(e, ug), C.matched.length === 0 && await vt(e, pn, [ys({
                statusCode: 404,
                fatal: !1,
                statusMessage: `Page not found: ${C.fullPath}`
            })])
        }), e.hooks.hookOnce("app:created", async () => {
            try {
                await a.replace({ ...a.resolve(i),
                    name: void 0,
                    force: !0
                })
            } catch (C) {
                await vt(e, pn, [C])
            }
        }), {
            provide: {
                router: a
            }
        }
    }),
    gn = {
        default: () => q(() =>
            import ("./default.84ae32fb.js"), ["./default.84ae32fb.js", "./services.05816bf8.js", "./nuxt-link.52eebdb1.js", "./Picture.1b03fe0c.css", "./App.80f13a2f.js", "./Bar.88537358.css"],
            import.meta.url).then(e => e.default || e)
    },
    z_ = Lt(() => {
        const e = ze(),
            t = Fn();
        e.hooks.hook("app:mounted", () => {
            t.beforeEach(async n => {
                var o;
                const r = (o = n == null ? void 0 : n.meta) == null ? void 0 : o.layout;
                r && typeof gn[r] == "function" && await gn[r]()
            })
        }), e.hooks.hook("link:prefetch", n => {
            var i, a, l, c;
            if (_r(n)) return;
            const r = t.resolve(n);
            if (!r) return;
            const o = (i = r == null ? void 0 : r.meta) == null ? void 0 : i.layout;
            let s = Array.isArray((a = r == null ? void 0 : r.meta) == null ? void 0 : a.middleware) ? (l = r == null ? void 0 : r.meta) == null ? void 0 : l.middleware : [(c = r == null ? void 0 : r.meta) == null ? void 0 : c.middleware];
            s = s.filter(u => typeof u == "string");
            for (const u of s) typeof rr[u] == "function" && rr[u]();
            o && typeof gn[o] == "function" && gn[o]()
        })
    }),
    D_ = Lt(() => {});
/*!
 * shared v9.3.0-beta.16
 * (c) 2023 kazuya kawaguchi
 * Released under the MIT License.
 */
const Cs = typeof window < "u",
    on = (e, t = !1) => t ? Symbol.for(e) : Symbol(e),
    F_ = (e, t, n) => M_({
        l: e,
        k: t,
        s: n
    }),
    M_ = e => JSON.stringify(e).replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029").replace(/\u0027/g, "\\u0027"),
    Re = e => typeof e == "number" && isFinite(e),
    U_ = e => yi(e) === "[object Date]",
    Gr = e => yi(e) === "[object RegExp]",
    yo = e => ae(e) && Object.keys(e).length === 0;

function $_(e, t) {
    typeof console < "u" && (console.warn("[intlify] " + e), t && console.warn(t.stack))
}
const Me = Object.assign;
let Va;
const gi = () => Va || (Va = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});

function Xa(e) {
    return e.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&apos;")
}
const H_ = Object.prototype.hasOwnProperty;

function _i(e, t) {
    return H_.call(e, t)
}
const Te = Array.isArray,
    ve = e => typeof e == "function",
    X = e => typeof e == "string",
    we = e => typeof e == "boolean",
    fe = e => e !== null && typeof e == "object",
    Iu = Object.prototype.toString,
    yi = e => Iu.call(e),
    ae = e => yi(e) === "[object Object]",
    j_ = e => e == null ? "" : Te(e) || ae(e) && e.toString === Iu ? JSON.stringify(e, null, 2) : String(e);
/*!
 * message-compiler v9.3.0-beta.16
 * (c) 2023 kazuya kawaguchi
 * Released under the MIT License.
 */
const Au = {
    EXPECTED_TOKEN: 1,
    INVALID_TOKEN_IN_PLACEHOLDER: 2,
    UNTERMINATED_SINGLE_QUOTE_IN_PLACEHOLDER: 3,
    UNKNOWN_ESCAPE_SEQUENCE: 4,
    INVALID_UNICODE_ESCAPE_SEQUENCE: 5,
    UNBALANCED_CLOSING_BRACE: 6,
    UNTERMINATED_CLOSING_BRACE: 7,
    EMPTY_PLACEHOLDER: 8,
    NOT_ALLOW_NEST_PLACEHOLDER: 9,
    INVALID_LINKED_FORMAT: 10,
    MUST_HAVE_MESSAGES_IN_PLURAL: 11,
    UNEXPECTED_EMPTY_LINKED_MODIFIER: 12,
    UNEXPECTED_EMPTY_LINKED_KEY: 13,
    UNEXPECTED_LEXICAL_ANALYSIS: 14,
    __EXTEND_POINT__: 15
};

function Ou(e, t, n = {}) {
    const {
        domain: r,
        messages: o,
        args: s
    } = n, i = e, a = new SyntaxError(String(i));
    return a.code = e, t && (a.location = t), a.domain = r, a
}
/*!
 * devtools-if v9.3.0-beta.16
 * (c) 2023 kazuya kawaguchi
 * Released under the MIT License.
 */
const Nu = {
    I18nInit: "i18n:init",
    FunctionTranslate: "function:translate"
};
/*!
 * core-base v9.3.0-beta.16
 * (c) 2023 kazuya kawaguchi
 * Released under the MIT License.
 */
const $t = [];
$t[0] = {
    w: [0],
    i: [3, 0],
    ["["]: [4],
    o: [7]
};
$t[1] = {
    w: [1],
    ["."]: [2],
    ["["]: [4],
    o: [7]
};
$t[2] = {
    w: [2],
    i: [3, 0],
    [0]: [3, 0]
};
$t[3] = {
    i: [3, 0],
    [0]: [3, 0],
    w: [1, 1],
    ["."]: [2, 1],
    ["["]: [4, 1],
    o: [7, 1]
};
$t[4] = {
    ["'"]: [5, 0],
    ['"']: [6, 0],
    ["["]: [4, 2],
    ["]"]: [1, 3],
    o: 8,
    l: [4, 0]
};
$t[5] = {
    ["'"]: [4, 0],
    o: 8,
    l: [5, 0]
};
$t[6] = {
    ['"']: [4, 0],
    o: 8,
    l: [6, 0]
};
const B_ = /^\s?(?:true|false|-?[\d.]+|'[^']*'|"[^"]*")\s?$/;

function W_(e) {
    return B_.test(e)
}

function V_(e) {
    const t = e.charCodeAt(0),
        n = e.charCodeAt(e.length - 1);
    return t === n && (t === 34 || t === 39) ? e.slice(1, -1) : e
}

function X_(e) {
    if (e == null) return "o";
    switch (e.charCodeAt(0)) {
        case 91:
        case 93:
        case 46:
        case 34:
        case 39:
            return e;
        case 95:
        case 36:
        case 45:
            return "i";
        case 9:
        case 10:
        case 13:
        case 160:
        case 65279:
        case 8232:
        case 8233:
            return "w"
    }
    return "i"
}

function K_(e) {
    const t = e.trim();
    return e.charAt(0) === "0" && isNaN(parseInt(e)) ? !1 : W_(t) ? V_(t) : "*" + t
}

function q_(e) {
    const t = [];
    let n = -1,
        r = 0,
        o = 0,
        s, i, a, l, c, u, f;
    const d = [];
    d[0] = () => {
        i === void 0 ? i = a : i += a
    }, d[1] = () => {
        i !== void 0 && (t.push(i), i = void 0)
    }, d[2] = () => {
        d[0](), o++
    }, d[3] = () => {
        if (o > 0) o--, r = 4, d[0]();
        else {
            if (o = 0, i === void 0 || (i = K_(i), i === !1)) return !1;
            d[1]()
        }
    };

    function p() {
        const g = e[n + 1];
        if (r === 5 && g === "'" || r === 6 && g === '"') return n++, a = "\\" + g, d[0](), !0
    }
    for (; r !== null;)
        if (n++, s = e[n], !(s === "\\" && p())) {
            if (l = X_(s), f = $t[r], c = f[l] || f.l || 8, c === 8 || (r = c[0], c[1] !== void 0 && (u = d[c[1]], u && (a = s, u() === !1)))) return;
            if (r === 7) return t
        }
}
const Ka = new Map;

function Y_(e, t) {
    return fe(e) ? e[t] : null
}

function G_(e, t) {
    if (!fe(e)) return null;
    let n = Ka.get(t);
    if (n || (n = q_(t), n && Ka.set(t, n)), !n) return null;
    const r = n.length;
    let o = e,
        s = 0;
    for (; s < r;) {
        const i = o[n[s]];
        if (i === void 0) return null;
        o = i, s++
    }
    return o
}
const J_ = e => e,
    Q_ = e => "",
    Z_ = "text",
    ey = e => e.length === 0 ? "" : e.join(""),
    ty = j_;

function qa(e, t) {
    return e = Math.abs(e), t === 2 ? e ? e > 1 ? 1 : 0 : 1 : e ? Math.min(e, 2) : 0
}

function ny(e) {
    const t = Re(e.pluralIndex) ? e.pluralIndex : -1;
    return e.named && (Re(e.named.count) || Re(e.named.n)) ? Re(e.named.count) ? e.named.count : Re(e.named.n) ? e.named.n : t : t
}

function ry(e, t) {
    t.count || (t.count = e), t.n || (t.n = e)
}

function oy(e = {}) {
    const t = e.locale,
        n = ny(e),
        r = fe(e.pluralRules) && X(t) && ve(e.pluralRules[t]) ? e.pluralRules[t] : qa,
        o = fe(e.pluralRules) && X(t) && ve(e.pluralRules[t]) ? qa : void 0,
        s = b => b[r(n, b.length, o)],
        i = e.list || [],
        a = b => i[b],
        l = e.named || {};
    Re(e.pluralIndex) && ry(n, l);
    const c = b => l[b];

    function u(b) {
        const m = ve(e.messages) ? e.messages(b) : fe(e.messages) ? e.messages[b] : !1;
        return m || (e.parent ? e.parent.message(b) : Q_)
    }
    const f = b => e.modifiers ? e.modifiers[b] : J_,
        d = ae(e.processor) && ve(e.processor.normalize) ? e.processor.normalize : ey,
        p = ae(e.processor) && ve(e.processor.interpolate) ? e.processor.interpolate : ty,
        g = ae(e.processor) && X(e.processor.type) ? e.processor.type : Z_,
        C = {
            list: a,
            named: c,
            plural: s,
            linked: (b, ...m) => {
                const [S, y] = m;
                let w = "text",
                    A = "";
                m.length === 1 ? fe(S) ? (A = S.modifier || A, w = S.type || w) : X(S) && (A = S || A) : m.length === 2 && (X(S) && (A = S || A), X(y) && (w = y || w));
                let P = u(b)(C);
                return w === "vnode" && Te(P) && A && (P = P[0]), A ? f(A)(P, w) : P
            },
            message: u,
            type: g,
            interpolate: p,
            normalize: d
        };
    return C
}
let fr = null;

function sy(e) {
    fr = e
}

function iy(e, t, n) {
    fr && fr.emit(Nu.I18nInit, {
        timestamp: Date.now(),
        i18n: e,
        version: t,
        meta: n
    })
}
const ay = ly(Nu.FunctionTranslate);

function ly(e) {
    return t => fr && fr.emit(e, t)
}

function cy(e, t, n) {
    return [...new Set([n, ...Te(t) ? t : fe(t) ? Object.keys(t) : X(t) ? [t] : [n]])]
}

function xu(e, t, n) {
    const r = X(n) ? n : bi,
        o = e;
    o.__localeChainCache || (o.__localeChainCache = new Map);
    let s = o.__localeChainCache.get(r);
    if (!s) {
        s = [];
        let i = [n];
        for (; Te(i);) i = Ya(s, i, t);
        const a = Te(t) || !ae(t) ? t : t.default ? t.default : null;
        i = X(a) ? [a] : a, Te(i) && Ya(s, i, !1), o.__localeChainCache.set(r, s)
    }
    return s
}

function Ya(e, t, n) {
    let r = !0;
    for (let o = 0; o < t.length && we(r); o++) {
        const s = t[o];
        X(s) && (r = uy(e, t[o], n))
    }
    return r
}

function uy(e, t, n) {
    let r;
    const o = t.split("-");
    do {
        const s = o.join("-");
        r = fy(e, s, n), o.splice(-1, 1)
    } while (o.length && r === !0);
    return r
}

function fy(e, t, n) {
    let r = !1;
    if (!e.includes(t) && (r = !0, t)) {
        r = t[t.length - 1] !== "!";
        const o = t.replace(/!/g, "");
        e.push(o), (Te(n) || ae(n)) && n[o] && (r = n[o])
    }
    return r
}
const dy = "9.3.0-beta.16",
    bo = -1,
    bi = "en-US",
    Ga = "",
    Ja = e => `${e.charAt(0).toLocaleUpperCase()}${e.substr(1)}`;

function hy() {
    return {
        upper: (e, t) => t === "text" && X(e) ? e.toUpperCase() : t === "vnode" && fe(e) && "__v_isVNode" in e ? e.children.toUpperCase() : e,
        lower: (e, t) => t === "text" && X(e) ? e.toLowerCase() : t === "vnode" && fe(e) && "__v_isVNode" in e ? e.children.toLowerCase() : e,
        capitalize: (e, t) => t === "text" && X(e) ? Ja(e) : t === "vnode" && fe(e) && "__v_isVNode" in e ? Ja(e.children) : e
    }
}
let my, zu;

function py(e) {
    zu = e
}
let Du;

function gy(e) {
    Du = e
}
let Fu = null;
const Qa = e => {
        Fu = e
    },
    _y = () => Fu;
let Mu = null;
const Za = e => {
        Mu = e
    },
    yy = () => Mu;
let el = 0;

function by(e = {}) {
    const t = X(e.version) ? e.version : dy,
        n = X(e.locale) ? e.locale : bi,
        r = Te(e.fallbackLocale) || ae(e.fallbackLocale) || X(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : n,
        o = ae(e.messages) ? e.messages : {
            [n]: {}
        },
        s = ae(e.datetimeFormats) ? e.datetimeFormats : {
            [n]: {}
        },
        i = ae(e.numberFormats) ? e.numberFormats : {
            [n]: {}
        },
        a = Me({}, e.modifiers || {}, hy()),
        l = e.pluralRules || {},
        c = ve(e.missing) ? e.missing : null,
        u = we(e.missingWarn) || Gr(e.missingWarn) ? e.missingWarn : !0,
        f = we(e.fallbackWarn) || Gr(e.fallbackWarn) ? e.fallbackWarn : !0,
        d = !!e.fallbackFormat,
        p = !!e.unresolving,
        g = ve(e.postTranslation) ? e.postTranslation : null,
        v = ae(e.processor) ? e.processor : null,
        C = we(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
        b = !!e.escapeParameter,
        m = ve(e.messageCompiler) ? e.messageCompiler : my,
        S = ve(e.messageResolver) ? e.messageResolver : zu || Y_,
        y = ve(e.localeFallbacker) ? e.localeFallbacker : Du || cy,
        w = fe(e.fallbackContext) ? e.fallbackContext : void 0,
        A = ve(e.onWarn) ? e.onWarn : $_,
        P = e,
        L = fe(P.__datetimeFormatters) ? P.__datetimeFormatters : new Map,
        F = fe(P.__numberFormatters) ? P.__numberFormatters : new Map,
        $ = fe(P.__meta) ? P.__meta : {};
    el++;
    const k = {
        version: t,
        cid: el,
        locale: n,
        fallbackLocale: r,
        messages: o,
        modifiers: a,
        pluralRules: l,
        missing: c,
        missingWarn: u,
        fallbackWarn: f,
        fallbackFormat: d,
        unresolving: p,
        postTranslation: g,
        processor: v,
        warnHtmlMessage: C,
        escapeParameter: b,
        messageCompiler: m,
        messageResolver: S,
        localeFallbacker: y,
        fallbackContext: w,
        onWarn: A,
        __meta: $
    };
    return k.datetimeFormats = s, k.numberFormats = i, k.__datetimeFormatters = L, k.__numberFormatters = F, __INTLIFY_PROD_DEVTOOLS__ && iy(k, t, $), k
}

function vi(e, t, n, r, o) {
    const {
        missing: s,
        onWarn: i
    } = e;
    if (s !== null) {
        const a = s(e, n, t, o);
        return X(a) ? a : t
    } else return t
}

function Wn(e, t, n) {
    const r = e;
    r.__localeChainCache = new Map, e.localeFallbacker(e, n, t)
}
let Uu = Au.__EXTEND_POINT__;
const Wo = () => ++Uu,
    _n = {
        INVALID_ARGUMENT: Uu,
        INVALID_DATE_ARGUMENT: Wo(),
        INVALID_ISO_DATE_ARGUMENT: Wo(),
        __EXTEND_POINT__: Wo()
    };

function yn(e) {
    return Ou(e, null, void 0)
}
const tl = () => "",
    ht = e => ve(e);

function nl(e, ...t) {
    const {
        fallbackFormat: n,
        postTranslation: r,
        unresolving: o,
        messageCompiler: s,
        fallbackLocale: i,
        messages: a
    } = e, [l, c] = Ls(...t), u = we(c.missingWarn) ? c.missingWarn : e.missingWarn, f = we(c.fallbackWarn) ? c.fallbackWarn : e.fallbackWarn, d = we(c.escapeParameter) ? c.escapeParameter : e.escapeParameter, p = !!c.resolvedMessage, g = X(c.default) || we(c.default) ? we(c.default) ? s ? l : () => l : c.default : n ? s ? l : () => l : "", v = n || g !== "", C = X(c.locale) ? c.locale : e.locale;
    d && vy(c);
    let [b, m, S] = p ? [l, C, a[C] || {}] : $u(e, l, C, i, f, u), y = b, w = l;
    if (!p && !(X(y) || ht(y)) && v && (y = g, w = y), !p && (!(X(y) || ht(y)) || !X(m))) return o ? bo : l;
    let A = !1;
    const P = () => {
            A = !0
        },
        L = ht(y) ? y : Hu(e, l, m, y, w, P);
    if (A) return y;
    const F = Ty(e, m, S, c),
        $ = oy(F),
        k = wy(e, L, $),
        O = r ? r(k, l) : k;
    if (__INTLIFY_PROD_DEVTOOLS__) {
        const B = {
            timestamp: Date.now(),
            key: X(l) ? l : ht(y) ? y.key : "",
            locale: m || (ht(y) ? y.locale : ""),
            format: X(y) ? y : ht(y) ? y.source : "",
            message: O
        };
        B.meta = Me({}, e.__meta, _y() || {}), ay(B)
    }
    return O
}

function vy(e) {
    Te(e.list) ? e.list = e.list.map(t => X(t) ? Xa(t) : t) : fe(e.named) && Object.keys(e.named).forEach(t => {
        X(e.named[t]) && (e.named[t] = Xa(e.named[t]))
    })
}

function $u(e, t, n, r, o, s) {
    const {
        messages: i,
        onWarn: a,
        messageResolver: l,
        localeFallbacker: c
    } = e, u = c(e, r, n);
    let f = {},
        d, p = null;
    const g = "translate";
    for (let v = 0; v < u.length && (d = u[v], f = i[d] || {}, (p = l(f, t)) === null && (p = f[t]), !(X(p) || ve(p))); v++) {
        const C = vi(e, t, d, s, g);
        C !== t && (p = C)
    }
    return [p, d, f]
}

function Hu(e, t, n, r, o, s) {
    const {
        messageCompiler: i,
        warnHtmlMessage: a
    } = e;
    if (ht(r)) {
        const c = r;
        return c.locale = c.locale || n, c.key = c.key || t, c
    }
    if (i == null) {
        const c = () => r;
        return c.locale = n, c.key = t, c
    }
    const l = i(r, Ey(e, n, o, r, a, s));
    return l.locale = n, l.key = t, l.source = r, l
}

function wy(e, t, n) {
    return t(n)
}

function Ls(...e) {
    const [t, n, r] = e, o = {};
    if (!X(t) && !Re(t) && !ht(t)) throw yn(_n.INVALID_ARGUMENT);
    const s = Re(t) ? String(t) : (ht(t), t);
    return Re(n) ? o.plural = n : X(n) ? o.default = n : ae(n) && !yo(n) ? o.named = n : Te(n) && (o.list = n), Re(r) ? o.plural = r : X(r) ? o.default = r : ae(r) && Me(o, r), [s, o]
}

function Ey(e, t, n, r, o, s) {
    return {
        warnHtmlMessage: o,
        onError: i => {
            throw s && s(i), i
        },
        onCacheKey: i => F_(t, n, i)
    }
}

function Ty(e, t, n, r) {
    const {
        modifiers: o,
        pluralRules: s,
        messageResolver: i,
        fallbackLocale: a,
        fallbackWarn: l,
        missingWarn: c,
        fallbackContext: u
    } = e, d = {
        locale: t,
        modifiers: o,
        pluralRules: s,
        messages: p => {
            let g = i(n, p);
            if (g == null && u) {
                const [, , v] = $u(u, p, t, a, l, c);
                g = i(v, p)
            }
            if (X(g)) {
                let v = !1;
                const b = Hu(e, p, t, g, p, () => {
                    v = !0
                });
                return v ? tl : b
            } else return ht(g) ? g : tl
        }
    };
    return e.processor && (d.processor = e.processor), r.list && (d.list = r.list), r.named && (d.named = r.named), Re(r.plural) && (d.pluralIndex = r.plural), d
}

function rl(e, ...t) {
    const {
        datetimeFormats: n,
        unresolving: r,
        fallbackLocale: o,
        onWarn: s,
        localeFallbacker: i
    } = e, {
        __datetimeFormatters: a
    } = e, [l, c, u, f] = ks(...t), d = we(u.missingWarn) ? u.missingWarn : e.missingWarn;
    we(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const p = !!u.part,
        g = X(u.locale) ? u.locale : e.locale,
        v = i(e, o, g);
    if (!X(l) || l === "") return new Intl.DateTimeFormat(g, f).format(c);
    let C = {},
        b, m = null;
    const S = "datetime format";
    for (let A = 0; A < v.length && (b = v[A], C = n[b] || {}, m = C[l], !ae(m)); A++) vi(e, l, b, d, S);
    if (!ae(m) || !X(b)) return r ? bo : l;
    let y = `${b}__${l}`;
    yo(f) || (y = `${y}__${JSON.stringify(f)}`);
    let w = a.get(y);
    return w || (w = new Intl.DateTimeFormat(b, Me({}, m, f)), a.set(y, w)), p ? w.formatToParts(c) : w.format(c)
}
const ju = ["localeMatcher", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "formatMatcher", "hour12", "timeZone", "dateStyle", "timeStyle", "calendar", "dayPeriod", "numberingSystem", "hourCycle", "fractionalSecondDigits"];

function ks(...e) {
    const [t, n, r, o] = e, s = {};
    let i = {},
        a;
    if (X(t)) {
        const l = t.match(/(\d{4}-\d{2}-\d{2})(T|\s)?(.*)/);
        if (!l) throw yn(_n.INVALID_ISO_DATE_ARGUMENT);
        const c = l[3] ? l[3].trim().startsWith("T") ? `${l[1].trim()}${l[3].trim()}` : `${l[1].trim()}T${l[3].trim()}` : l[1].trim();
        a = new Date(c);
        try {
            a.toISOString()
        } catch {
            throw yn(_n.INVALID_ISO_DATE_ARGUMENT)
        }
    } else if (U_(t)) {
        if (isNaN(t.getTime())) throw yn(_n.INVALID_DATE_ARGUMENT);
        a = t
    } else if (Re(t)) a = t;
    else throw yn(_n.INVALID_ARGUMENT);
    return X(n) ? s.key = n : ae(n) && Object.keys(n).forEach(l => {
        ju.includes(l) ? i[l] = n[l] : s[l] = n[l]
    }), X(r) ? s.locale = r : ae(r) && (i = r), ae(o) && (i = o), [s.key || "", a, s, i]
}

function ol(e, t, n) {
    const r = e;
    for (const o in n) {
        const s = `${t}__${o}`;
        r.__datetimeFormatters.has(s) && r.__datetimeFormatters.delete(s)
    }
}

function sl(e, ...t) {
    const {
        numberFormats: n,
        unresolving: r,
        fallbackLocale: o,
        onWarn: s,
        localeFallbacker: i
    } = e, {
        __numberFormatters: a
    } = e, [l, c, u, f] = Rs(...t), d = we(u.missingWarn) ? u.missingWarn : e.missingWarn;
    we(u.fallbackWarn) ? u.fallbackWarn : e.fallbackWarn;
    const p = !!u.part,
        g = X(u.locale) ? u.locale : e.locale,
        v = i(e, o, g);
    if (!X(l) || l === "") return new Intl.NumberFormat(g, f).format(c);
    let C = {},
        b, m = null;
    const S = "number format";
    for (let A = 0; A < v.length && (b = v[A], C = n[b] || {}, m = C[l], !ae(m)); A++) vi(e, l, b, d, S);
    if (!ae(m) || !X(b)) return r ? bo : l;
    let y = `${b}__${l}`;
    yo(f) || (y = `${y}__${JSON.stringify(f)}`);
    let w = a.get(y);
    return w || (w = new Intl.NumberFormat(b, Me({}, m, f)), a.set(y, w)), p ? w.formatToParts(c) : w.format(c)
}
const Bu = ["localeMatcher", "style", "currency", "currencyDisplay", "currencySign", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "notation", "signDisplay", "unit", "unitDisplay", "roundingMode", "roundingPriority", "roundingIncrement", "trailingZeroDisplay"];

function Rs(...e) {
    const [t, n, r, o] = e, s = {};
    let i = {};
    if (!Re(t)) throw yn(_n.INVALID_ARGUMENT);
    const a = t;
    return X(n) ? s.key = n : ae(n) && Object.keys(n).forEach(l => {
        Bu.includes(l) ? i[l] = n[l] : s[l] = n[l]
    }), X(r) ? s.locale = r : ae(r) && (i = r), ae(o) && (i = o), [s.key || "", a, s, i]
}

function il(e, t, n) {
    const r = e;
    for (const o in n) {
        const s = `${t}__${o}`;
        r.__numberFormatters.has(s) && r.__numberFormatters.delete(s)
    }
}
typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (gi().__INTLIFY_PROD_DEVTOOLS__ = !1);
/*!
 * vue-i18n v9.3.0-beta.16
 * (c) 2023 kazuya kawaguchi
 * Released under the MIT License.
 */
const Cy = "9.3.0-beta.16";

function Ly() {
    typeof __INTLIFY_PROD_DEVTOOLS__ != "boolean" && (gi().__INTLIFY_PROD_DEVTOOLS__ = !1)
}
let Wu = Au.__EXTEND_POINT__;
const Ue = () => ++Wu,
    qe = {
        UNEXPECTED_RETURN_TYPE: Wu,
        INVALID_ARGUMENT: Ue(),
        MUST_BE_CALL_SETUP_TOP: Ue(),
        NOT_INSLALLED: Ue(),
        NOT_AVAILABLE_IN_LEGACY_MODE: Ue(),
        REQUIRED_VALUE: Ue(),
        INVALID_VALUE: Ue(),
        CANNOT_SETUP_VUE_DEVTOOLS_PLUGIN: Ue(),
        NOT_INSLALLED_WITH_PROVIDE: Ue(),
        UNEXPECTED_ERROR: Ue(),
        NOT_COMPATIBLE_LEGACY_VUE_I18N: Ue(),
        BRIDGE_SUPPORT_VUE_2_ONLY: Ue(),
        MUST_DEFINE_I18N_OPTION_IN_ALLOW_COMPOSITION: Ue(),
        NOT_AVAILABLE_COMPOSITION_IN_LEGACY: Ue(),
        __EXTEND_POINT__: Ue()
    };

function tt(e, ...t) {
    return Ou(e, null, void 0)
}
const Ps = on("__translateVNode"),
    Ss = on("__datetimeParts"),
    Is = on("__numberParts"),
    ky = on("__setPluralRules"),
    Ry = on("__injectWithOption");

function As(e) {
    if (!fe(e)) return e;
    for (const t in e)
        if (_i(e, t))
            if (!t.includes(".")) fe(e[t]) && As(e[t]);
            else {
                const n = t.split("."),
                    r = n.length - 1;
                let o = e;
                for (let s = 0; s < r; s++) n[s] in o || (o[n[s]] = {}), o = o[n[s]];
                o[n[r]] = e[t], delete e[t], fe(o[n[r]]) && As(o[n[r]])
            }
    return e
}

function Vu(e, t) {
    const {
        messages: n,
        __i18n: r,
        messageResolver: o,
        flatJson: s
    } = t, i = ae(n) ? n : Te(r) ? {} : {
        [e]: {}
    };
    if (Te(r) && r.forEach(a => {
            if ("locale" in a && "resource" in a) {
                const {
                    locale: l,
                    resource: c
                } = a;
                l ? (i[l] = i[l] || {}, or(c, i[l])) : or(c, i)
            } else X(a) && or(JSON.parse(a), i)
        }), o == null && s)
        for (const a in i) _i(i, a) && As(i[a]);
    return i
}
const Nr = e => !fe(e) || Te(e);

function or(e, t) {
    if (Nr(e) || Nr(t)) throw tt(qe.INVALID_VALUE);
    for (const n in e) _i(e, n) && (Nr(e[n]) || Nr(t[n]) ? t[n] = e[n] : or(e[n], t[n]))
}

function Xu(e) {
    return e.type
}

function Py(e, t, n) {
    let r = fe(t.messages) ? t.messages : {};
    "__i18nGlobal" in n && (r = Vu(globalThis.locale.value, {
        messages: r,
        __i18n: n.__i18nGlobal
    }));
    const o = Object.keys(r);
    o.length && o.forEach(s => {
        e.mergeLocaleMessage(s, r[s])
    }); {
        if (fe(t.datetimeFormats)) {
            const s = Object.keys(t.datetimeFormats);
            s.length && s.forEach(i => {
                e.mergeDateTimeFormat(i, t.datetimeFormats[i])
            })
        }
        if (fe(t.numberFormats)) {
            const s = Object.keys(t.numberFormats);
            s.length && s.forEach(i => {
                e.mergeNumberFormat(i, t.numberFormats[i])
            })
        }
    }
}

function al(e) {
    return _e(tn, null, e, 0)
}
const ll = "__INTLIFY_META__";
let cl = 0;

function ul(e) {
    return (t, n, r, o) => e(n, r, ct() || void 0, o)
}
const Sy = () => {
    const e = ct();
    let t = null;
    return e && (t = Xu(e)[ll]) ? {
        [ll]: t
    } : null
};

function Ku(e = {}, t) {
    const {
        __root: n
    } = e, r = n === void 0;
    let o = we(e.inheritLocale) ? e.inheritLocale : !0;
    const s = Se(n && o ? n.locale.value : X(e.locale) ? e.locale : bi),
        i = Se(n && o ? n.fallbackLocale.value : X(e.fallbackLocale) || Te(e.fallbackLocale) || ae(e.fallbackLocale) || e.fallbackLocale === !1 ? e.fallbackLocale : s.value),
        a = Se(Vu(s.value, e)),
        l = Se(ae(e.datetimeFormats) ? e.datetimeFormats : {
            [s.value]: {}
        }),
        c = Se(ae(e.numberFormats) ? e.numberFormats : {
            [s.value]: {}
        });
    let u = n ? n.missingWarn : we(e.missingWarn) || Gr(e.missingWarn) ? e.missingWarn : !0,
        f = n ? n.fallbackWarn : we(e.fallbackWarn) || Gr(e.fallbackWarn) ? e.fallbackWarn : !0,
        d = n ? n.fallbackRoot : we(e.fallbackRoot) ? e.fallbackRoot : !0,
        p = !!e.fallbackFormat,
        g = ve(e.missing) ? e.missing : null,
        v = ve(e.missing) ? ul(e.missing) : null,
        C = ve(e.postTranslation) ? e.postTranslation : null,
        b = n ? n.warnHtmlMessage : we(e.warnHtmlMessage) ? e.warnHtmlMessage : !0,
        m = !!e.escapeParameter;
    const S = n ? n.modifiers : ae(e.modifiers) ? e.modifiers : {};
    let y = e.pluralRules || n && n.pluralRules,
        w;
    w = (() => {
        r && Za(null);
        const T = {
            version: Cy,
            locale: s.value,
            fallbackLocale: i.value,
            messages: a.value,
            modifiers: S,
            pluralRules: y,
            missing: v === null ? void 0 : v,
            missingWarn: u,
            fallbackWarn: f,
            fallbackFormat: p,
            unresolving: !0,
            postTranslation: C === null ? void 0 : C,
            warnHtmlMessage: b,
            escapeParameter: m,
            messageResolver: e.messageResolver,
            __meta: {
                framework: "vue"
            }
        };
        T.datetimeFormats = l.value, T.numberFormats = c.value, T.__datetimeFormatters = ae(w) ? w.__datetimeFormatters : void 0, T.__numberFormatters = ae(w) ? w.__numberFormatters : void 0;
        const R = by(T);
        return r && Za(R), R
    })(), Wn(w, s.value, i.value);

    function P() {
        return [s.value, i.value, a.value, l.value, c.value]
    }
    const L = me({
            get: () => s.value,
            set: T => {
                s.value = T, w.locale = s.value
            }
        }),
        F = me({
            get: () => i.value,
            set: T => {
                i.value = T, w.fallbackLocale = i.value, Wn(w, s.value, T)
            }
        }),
        $ = me(() => a.value),
        k = me(() => l.value),
        O = me(() => c.value);

    function B() {
        return ve(C) ? C : null
    }

    function U(T) {
        C = T, w.postTranslation = T
    }

    function Q() {
        return g
    }

    function ne(T) {
        T !== null && (v = ul(T)), g = T, w.missing = v
    }
    const ee = (T, R, K, Y, te, ue) => {
        P();
        let se;
        if (__INTLIFY_PROD_DEVTOOLS__) try {
            Qa(Sy()), r || (w.fallbackContext = n ? yy() : void 0), se = T(w)
        } finally {
            Qa(null), r || (w.fallbackContext = void 0)
        } else se = T(w);
        if (Re(se) && se === bo) {
            const [be, Ge] = R();
            return n && d ? Y(n) : te(be)
        } else {
            if (ue(se)) return se;
            throw tt(qe.UNEXPECTED_RETURN_TYPE)
        }
    };

    function oe(...T) {
        return ee(R => Reflect.apply(nl, null, [R, ...T]), () => Ls(...T), "translate", R => Reflect.apply(R.t, R, [...T]), R => R, R => X(R))
    }

    function nt(...T) {
        const [R, K, Y] = T;
        if (Y && !fe(Y)) throw tt(qe.INVALID_ARGUMENT);
        return oe(R, K, Me({
            resolvedMessage: !0
        }, Y || {}))
    }

    function ut(...T) {
        return ee(R => Reflect.apply(rl, null, [R, ...T]), () => ks(...T), "datetime format", R => Reflect.apply(R.d, R, [...T]), () => Ga, R => X(R))
    }

    function Ye(...T) {
        return ee(R => Reflect.apply(sl, null, [R, ...T]), () => Rs(...T), "number format", R => Reflect.apply(R.n, R, [...T]), () => Ga, R => X(R))
    }

    function Ae(T) {
        return T.map(R => X(R) || Re(R) || we(R) ? al(String(R)) : R)
    }
    const kt = {
        normalize: Ae,
        interpolate: T => T,
        type: "vnode"
    };

    function an(...T) {
        return ee(R => {
            let K;
            const Y = R;
            try {
                Y.processor = kt, K = Reflect.apply(nl, null, [Y, ...T])
            } finally {
                Y.processor = null
            }
            return K
        }, () => Ls(...T), "translate", R => R[Ps](...T), R => [al(R)], R => Te(R))
    }

    function ke(...T) {
        return ee(R => Reflect.apply(sl, null, [R, ...T]), () => Rs(...T), "number format", R => R[Is](...T), () => [], R => X(R) || Te(R))
    }

    function N(...T) {
        return ee(R => Reflect.apply(rl, null, [R, ...T]), () => ks(...T), "datetime format", R => R[Ss](...T), () => [], R => X(R) || Te(R))
    }

    function V(T) {
        y = T, w.pluralRules = y
    }

    function j(T, R) {
        const K = X(R) ? R : s.value,
            Y = h(K);
        return w.messageResolver(Y, T) !== null
    }

    function G(T) {
        let R = null;
        const K = xu(w, i.value, s.value);
        for (let Y = 0; Y < K.length; Y++) {
            const te = a.value[K[Y]] || {},
                ue = w.messageResolver(te, T);
            if (ue != null) {
                R = ue;
                break
            }
        }
        return R
    }

    function ce(T) {
        const R = G(T);
        return R ? ? (n ? n.tm(T) || {} : {})
    }

    function h(T) {
        return a.value[T] || {}
    }

    function _(T, R) {
        a.value[T] = R, w.messages = a.value
    }

    function E(T, R) {
        a.value[T] = a.value[T] || {}, or(R, a.value[T]), w.messages = a.value
    }

    function I(T) {
        return l.value[T] || {}
    }

    function z(T, R) {
        l.value[T] = R, w.datetimeFormats = l.value, ol(w, T, R)
    }

    function D(T, R) {
        l.value[T] = Me(l.value[T] || {}, R), w.datetimeFormats = l.value, ol(w, T, R)
    }

    function W(T) {
        return c.value[T] || {}
    }

    function M(T, R) {
        c.value[T] = R, w.numberFormats = c.value, il(w, T, R)
    }

    function H(T, R) {
        c.value[T] = Me(c.value[T] || {}, R), w.numberFormats = c.value, il(w, T, R)
    }
    cl++, n && Cs && (it(n.locale, T => {
        o && (s.value = T, w.locale = T, Wn(w, s.value, i.value))
    }), it(n.fallbackLocale, T => {
        o && (i.value = T, w.fallbackLocale = T, Wn(w, s.value, i.value))
    }));
    const x = {
        id: cl,
        locale: L,
        fallbackLocale: F,
        get inheritLocale() {
            return o
        },
        set inheritLocale(T) {
            o = T, T && n && (s.value = n.locale.value, i.value = n.fallbackLocale.value, Wn(w, s.value, i.value))
        },
        get availableLocales() {
            return Object.keys(a.value).sort()
        },
        messages: $,
        get modifiers() {
            return S
        },
        get pluralRules() {
            return y || {}
        },
        get isGlobal() {
            return r
        },
        get missingWarn() {
            return u
        },
        set missingWarn(T) {
            u = T, w.missingWarn = u
        },
        get fallbackWarn() {
            return f
        },
        set fallbackWarn(T) {
            f = T, w.fallbackWarn = f
        },
        get fallbackRoot() {
            return d
        },
        set fallbackRoot(T) {
            d = T
        },
        get fallbackFormat() {
            return p
        },
        set fallbackFormat(T) {
            p = T, w.fallbackFormat = p
        },
        get warnHtmlMessage() {
            return b
        },
        set warnHtmlMessage(T) {
            b = T, w.warnHtmlMessage = T
        },
        get escapeParameter() {
            return m
        },
        set escapeParameter(T) {
            m = T, w.escapeParameter = T
        },
        t: oe,
        getLocaleMessage: h,
        setLocaleMessage: _,
        mergeLocaleMessage: E,
        getPostTranslationHandler: B,
        setPostTranslationHandler: U,
        getMissingHandler: Q,
        setMissingHandler: ne,
        [ky]: V
    };
    return x.datetimeFormats = k, x.numberFormats = O, x.rt = nt, x.te = j, x.tm = ce, x.d = ut, x.n = Ye, x.getDateTimeFormat = I, x.setDateTimeFormat = z, x.mergeDateTimeFormat = D, x.getNumberFormat = W, x.setNumberFormat = M, x.mergeNumberFormat = H, x[Ry] = e.__injectWithOption, x[Ps] = an, x[Ss] = N, x[Is] = ke, x
}
const wi = {
    tag: {
        type: [String, Object]
    },
    locale: {
        type: String
    },
    scope: {
        type: String,
        validator: e => e === "parent" || e === "global",
        default: "parent"
    },
    i18n: {
        type: Object
    }
};

function Iy({
    slots: e
}, t) {
    return t.length === 1 && t[0] === "default" ? (e.default ? e.default() : []).reduce((r, o) => [...r, ...o.type === Oe ? o.children : [o]], []) : t.reduce((n, r) => {
        const o = e[r];
        return o && (n[r] = o()), n
    }, {})
}

function qu(e) {
    return Oe
}
const Ay = lt({
        name: "i18n-t",
        props: Me({
            keypath: {
                type: String,
                required: !0
            },
            plural: {
                type: [Number, String],
                validator: e => Re(e) || !isNaN(e)
            }
        }, wi),
        setup(e, t) {
            const {
                slots: n,
                attrs: r
            } = t, o = e.i18n || vo({
                useScope: e.scope,
                __useComponent: !0
            });
            return () => {
                const s = Object.keys(n).filter(f => f !== "_"),
                    i = {};
                e.locale && (i.locale = e.locale), e.plural !== void 0 && (i.plural = X(e.plural) ? +e.plural : e.plural);
                const a = Iy(t, s),
                    l = o[Ps](e.keypath, a, i),
                    c = Me({}, r),
                    u = X(e.tag) || fe(e.tag) ? e.tag : qu();
                return Ke(u, c, l)
            }
        }
    }),
    fl = Ay;

function Oy(e) {
    return Te(e) && !X(e[0])
}

function Yu(e, t, n, r) {
    const {
        slots: o,
        attrs: s
    } = t;
    return () => {
        const i = {
            part: !0
        };
        let a = {};
        e.locale && (i.locale = e.locale), X(e.format) ? i.key = e.format : fe(e.format) && (X(e.format.key) && (i.key = e.format.key), a = Object.keys(e.format).reduce((d, p) => n.includes(p) ? Me({}, d, {
            [p]: e.format[p]
        }) : d, {}));
        const l = r(e.value, i, a);
        let c = [i.key];
        Te(l) ? c = l.map((d, p) => {
            const g = o[d.type],
                v = g ? g({
                    [d.type]: d.value,
                    index: p,
                    parts: l
                }) : [d.value];
            return Oy(v) && (v[0].key = `${d.type}-${p}`), v
        }) : X(l) && (c = [l]);
        const u = Me({}, s),
            f = X(e.tag) || fe(e.tag) ? e.tag : qu();
        return Ke(f, u, c)
    }
}
const Ny = lt({
        name: "i18n-n",
        props: Me({
            value: {
                type: Number,
                required: !0
            },
            format: {
                type: [String, Object]
            }
        }, wi),
        setup(e, t) {
            const n = e.i18n || vo({
                useScope: "parent",
                __useComponent: !0
            });
            return Yu(e, t, Bu, (...r) => n[Is](...r))
        }
    }),
    dl = Ny,
    xy = lt({
        name: "i18n-d",
        props: Me({
            value: {
                type: [Number, Date],
                required: !0
            },
            format: {
                type: [String, Object]
            }
        }, wi),
        setup(e, t) {
            const n = e.i18n || vo({
                useScope: "parent",
                __useComponent: !0
            });
            return Yu(e, t, ju, (...r) => n[Ss](...r))
        }
    }),
    hl = xy;

function zy(e, t) {
    const n = e;
    if (e.mode === "composition") return n.__getInstance(t) || e.global; {
        const r = n.__getInstance(t);
        return r != null ? r.__composer : e.global.__composer
    }
}

function Dy(e) {
    const t = i => {
        const {
            instance: a,
            modifiers: l,
            value: c
        } = i;
        if (!a || !a.$) throw tt(qe.UNEXPECTED_ERROR);
        const u = zy(e, a.$),
            f = ml(c);
        return [Reflect.apply(u.t, u, [...pl(f)]), u]
    };
    return {
        created: (i, a) => {
            const [l, c] = t(a);
            Cs && e.global === c && (i.__i18nWatcher = it(c.locale, () => {
                a.instance && a.instance.$forceUpdate()
            })), i.__composer = c, i.textContent = l
        },
        unmounted: i => {
            Cs && i.__i18nWatcher && (i.__i18nWatcher(), i.__i18nWatcher = void 0, delete i.__i18nWatcher), i.__composer && (i.__composer = void 0, delete i.__composer)
        },
        beforeUpdate: (i, {
            value: a
        }) => {
            if (i.__composer) {
                const l = i.__composer,
                    c = ml(a);
                i.textContent = Reflect.apply(l.t, l, [...pl(c)])
            }
        },
        getSSRProps: i => {
            const [a] = t(i);
            return {
                textContent: a
            }
        }
    }
}

function ml(e) {
    if (X(e)) return {
        path: e
    };
    if (ae(e)) {
        if (!("path" in e)) throw tt(qe.REQUIRED_VALUE, "path");
        return e
    } else throw tt(qe.INVALID_VALUE)
}

function pl(e) {
    const {
        path: t,
        locale: n,
        args: r,
        choice: o,
        plural: s
    } = e, i = {}, a = r || {};
    return X(n) && (i.locale = n), Re(o) && (i.plural = o), Re(s) && (i.plural = s), [t, a, i]
}

function Fy(e, t, ...n) {
    const r = ae(n[0]) ? n[0] : {},
        o = !!r.useI18nComponentName;
    (we(r.globalInstall) ? r.globalInstall : !0) && (e.component(o ? "i18n" : fl.name, fl), e.component(dl.name, dl), e.component(hl.name, hl)), e.directive("t", Dy(t))
}
const My = on("global-vue-i18n");

function Uy(e = {}, t) {
    const n = we(e.globalInjection) ? e.globalInjection : !0,
        r = !0,
        o = new Map,
        [s, i] = $y(e),
        a = on("");

    function l(f) {
        return o.get(f) || null
    }

    function c(f, d) {
        o.set(f, d)
    }

    function u(f) {
        o.delete(f)
    } {
        const f = {
            get mode() {
                return "composition"
            },
            get allowComposition() {
                return r
            },
            async install(d, ...p) {
                if (d.__VUE_I18N_SYMBOL__ = a, d.provide(d.__VUE_I18N_SYMBOL__, f), ae(p[0])) {
                    const v = p[0];
                    f.__composerExtend = v.__composerExtend, f.__vueI18nExtend = v.__vueI18nExtend
                }
                n && qy(d, f.global), Fy(d, f, ...p);
                const g = d.unmount;
                d.unmount = () => {
                    f.dispose(), g()
                }
            },
            get global() {
                return i
            },
            dispose() {
                s.stop()
            },
            __instances: o,
            __getInstance: l,
            __setInstance: c,
            __deleteInstance: u
        };
        return f
    }
}

function vo(e = {}) {
    const t = ct();
    if (t == null) throw tt(qe.MUST_BE_CALL_SETUP_TOP);
    if (!t.isCE && t.appContext.app != null && !t.appContext.app.__VUE_I18N_SYMBOL__) throw tt(qe.NOT_INSLALLED);
    const n = Hy(t),
        r = By(n),
        o = Xu(t),
        s = jy(e, o);
    if (s === "global") return Py(r, e, o), r;
    if (s === "parent") {
        let l = Wy(n, t, e.__useComponent);
        return l == null && (l = r), l
    }
    const i = n;
    let a = i.__getInstance(t);
    if (a == null) {
        const l = Me({}, e);
        "__i18n" in o && (l.__i18n = o.__i18n), r && (l.__root = r), a = Ku(l), i.__composerExtend && i.__composerExtend(a), Vy(i, t), i.__setInstance(t, a)
    }
    return a
}

function $y(e, t, n) {
    const r = ro(); {
        const o = r.run(() => Ku(e));
        if (o == null) throw tt(qe.UNEXPECTED_ERROR);
        return [r, o]
    }
}

function Hy(e) {
    {
        const t = xe(e.isCE ? My : e.appContext.app.__VUE_I18N_SYMBOL__);
        if (!t) throw tt(e.isCE ? qe.NOT_INSLALLED_WITH_PROVIDE : qe.UNEXPECTED_ERROR);
        return t
    }
}

function jy(e, t) {
    return yo(e) ? "__i18n" in t ? "local" : "global" : e.useScope ? e.useScope : "local"
}

function By(e) {
    return e.mode === "composition" ? e.global : e.global.__composer
}

function Wy(e, t, n = !1) {
    let r = null;
    const o = t.root;
    let s = t.parent;
    for (; s != null;) {
        const i = e;
        if (e.mode === "composition" && (r = i.__getInstance(s)), r != null || o === s) break;
        s = s.parent
    }
    return r
}

function Vy(e, t, n) {
    co(() => {}, t), oi(() => {
        e.__deleteInstance(t)
    }, t)
}
const Xy = ["locale", "fallbackLocale", "availableLocales"],
    Ky = ["t", "rt", "d", "n", "tm", "te"];

function qy(e, t) {
    const n = Object.create(null);
    Xy.forEach(r => {
        const o = Object.getOwnPropertyDescriptor(t, r);
        if (!o) throw tt(qe.UNEXPECTED_ERROR);
        const s = he(o.value) ? {
            get() {
                return o.value.value
            },
            set(i) {
                o.value.value = i
            }
        } : {
            get() {
                return o.get && o.get()
            }
        };
        Object.defineProperty(n, r, s)
    }), e.config.globalProperties.$i18n = n, Ky.forEach(r => {
        const o = Object.getOwnPropertyDescriptor(t, r);
        if (!o || !o.value) throw tt(qe.UNEXPECTED_ERROR);
        Object.defineProperty(e.config.globalProperties, `$${r}`, o)
    })
}
py(G_);
gy(xu);
Ly();
if (__INTLIFY_PROD_DEVTOOLS__) {
    const e = gi();
    e.__INTLIFY__ = !0, sy(e.__INTLIFY_DEVTOOLS_GLOBAL_HOOK__)
}
const Gu = {
        PREFIX: "prefix",
        PREFIX_EXCEPT_DEFAULT: "prefix_except_default",
        PREFIX_AND_DEFAULT: "prefix_and_default",
        NO_PREFIX: "no_prefix"
    },
    Yy = "",
    Gy = Gu.PREFIX_EXCEPT_DEFAULT,
    Jy = !1,
    Qy = "___",
    Zy = "default",
    eb = "ltr",
    tb = "",
    Ju = "";
/*!
 * shared v9.3.0-beta.16
 * (c) 2023 kazuya kawaguchi
 * Released under the MIT License.
 */
const nb = (e, t = !1) => t ? Symbol.for(e) : Symbol(e),
    wo = Object.assign,
    Qu = Array.isArray,
    Os = e => typeof e == "function",
    On = e => typeof e == "string",
    rb = e => typeof e == "symbol",
    Ei = e => e !== null && typeof e == "object",
    ob = /\/$|\/\?/;

function Ns(e = "", t = !1) {
    return t ? ob.test(e) : e.endsWith("/")
}

function sb(e = "", t = !1) {
    if (!t) return (Ns(e) ? e.slice(0, -1) : e) || "/";
    if (!Ns(e, !0)) return e || "/";
    const [n, ...r] = e.split("?");
    return (n.slice(0, -1) || "/") + (r.length > 0 ? `?${r.join("?")}` : "")
}

function ib(e = "", t = !1) {
    if (!t) return e.endsWith("/") ? e : e + "/";
    if (Ns(e, !0)) return e || "/";
    const [n, ...r] = e.split("?");
    return n + "/" + (r.length > 0 ? `?${r.join("?")}` : "")
}
const ab = typeof window < "u";

function Zu(e, t) {
    typeof console < "u" && (console.warn("[vue-i18n-routing] " + e), t && console.warn(t.stack))
}

function lb(e) {
    e = e || [];
    const t = [];
    for (const n of e) On(n) ? t.push({
        code: n
    }) : t.push(n);
    return t
}

function sn(e) {
    return e != null && "global" in e && "mode" in e
}

function Mn(e) {
    return e != null && !("__composer" in e) && he(e.locale)
}

function Ut(e) {
    return e != null && "__composer" in e
}

function vr(e) {
    return e != null && !("__composer" in e) && !he(e.locale)
}

function Eo(e) {
    return e != null && ("__VUE_I18N_BRIDGE__" in e || "_sync" in e)
}

function dr(e) {
    return sn(e) ? Mn(e.global) ? e.global : e.global.__composer : Ut(e) ? e.__composer : e
}

function To(e) {
    const t = sn(e) ? e.global : e;
    return Mn(t) ? t.locale.value : (vr(t) || Ut(t) || Eo(t), t.locale)
}

function cb(e) {
    const t = sn(e) ? e.global : e;
    return Mn(t) ? t.locales.value : (vr(t) || Ut(t) || Eo(t), t.locales)
}

function ub(e) {
    const t = sn(e) ? e.global : e;
    return Mn(t) ? t.localeCodes.value : (vr(t) || Ut(t) || Eo(t), t.localeCodes)
}

function ef(e, t) {
    const n = sn(e) ? e.global : e;
    if (Mn(n)) n.locale.value = t;
    else if (vr(n) || Ut(n) || Eo(n)) n.locale = t;
    else throw new Error("TODO:")
}

function tf(e) {
    return On(e) ? e : rb(e) ? e.toString() : "(null)"
}

function gl(e, t, {
    defaultLocale: n,
    strategy: r,
    routesNameSeparator: o,
    defaultLocaleRouteNameSuffix: s
}) {
    let i = tf(e) + (r === "no_prefix" ? "" : o + t);
    return t === n && r === "prefix_and_default" && (i += o + s), i
}

function _l(e, t) {
    return Os(e) ? e(t) : e
}

function fb(e, t) {
    const n = [];
    for (const [r, o] of t.entries()) {
        const s = e.find(i => i.iso.toLowerCase() === o.toLowerCase());
        if (s) {
            n.push({
                code: s.code,
                score: 1 - r / t.length
            });
            break
        }
    }
    for (const [r, o] of t.entries()) {
        const s = o.split("-")[0].toLowerCase(),
            i = e.find(a => a.iso.split("-")[0].toLowerCase() === s);
        if (i) {
            n.push({
                code: i.code,
                score: .999 - r / t.length
            });
            break
        }
    }
    return n
}
const db = fb;

function hb(e, t) {
    return e.score === t.score ? t.code.length - e.code.length : t.score - e.score
}
const mb = hb;

function pb(e, t, {
    matcher: n = db,
    comparer: r = mb
} = {}) {
    const o = [];
    for (const i of e) {
        const {
            code: a
        } = i, l = i.iso || a;
        o.push({
            code: a,
            iso: l
        })
    }
    const s = n(o, t);
    return s.length > 1 && s.sort(r), s.length ? s[0].code : ""
}

function Vt(e) {
    return function() {
        return Reflect.apply(e, {
            getRouteBaseName: this.getRouteBaseName,
            localePath: this.localePath,
            localeRoute: this.localeRoute,
            localeLocation: this.localeLocation,
            resolveRoute: this.resolveRoute,
            switchLocalePath: this.switchLocalePath,
            localeHead: this.localeHead,
            i18n: this.$i18n,
            route: this.$route,
            router: this.$router
        }, arguments)
    }
}

function gb(e, {
    locales: t = [],
    localeCodes: n = [],
    baseUrl: r = tb,
    hooks: o = {},
    context: s = {}
} = {}) {
    const i = ro(),
        a = e.install;
    return e.install = (l, ...c) => {
        const u = bb(c[0]) ? wo({}, c[0]) : {
            inject: !0
        };
        u.inject == null && (u.inject = !0);
        const f = u.__composerExtend;
        if (u.__composerExtend = v => {
                const C = dr(e);
                v.locales = me(() => C.locales.value), v.localeCodes = me(() => C.localeCodes.value), v.baseUrl = me(() => C.baseUrl.value), Os(f) && Reflect.apply(f, u, [v])
            }, Ut(e.global)) {
            const v = u.__vueI18nExtend;
            u.__vueI18nExtend = C => {
                yl(C, o.onExtendVueI18n), Os(v) && Reflect.apply(v, u, [C])
            }
        }
        c[0] = u, Reflect.apply(a, e, [l, ...c]);
        const d = dr(e);
        i.run(() => _b(d, {
            locales: t,
            localeCodes: n,
            baseUrl: r,
            hooks: o,
            context: s
        })), Ut(e.global) && yl(e.global, o.onExtendVueI18n);
        const p = l,
            g = e.mode === "composition" ? p.config.globalProperties.$i18n : null;
        if (g && yb(g, d, o.onExtendExportedGlobal), u.inject && l.mixin({
                methods: {
                    resolveRoute: Vt(Co),
                    localePath: Vt(Ti),
                    localeRoute: Vt(Ci),
                    localeLocation: Vt(Rb),
                    switchLocalePath: Vt(hr),
                    getRouteBaseName: Vt(Nn),
                    localeHead: Vt(sf)
                }
            }), p.unmount) {
            const v = p.unmount;
            p.unmount = () => {
                i.stop(), v()
            }
        }
    }, i
}

function _b(e, t) {
    const {
        locales: n,
        localeCodes: r,
        baseUrl: o,
        context: s
    } = t, i = Se(n), a = Se(r), l = Se("");
    e.locales = me(() => i.value), e.localeCodes = me(() => a.value), e.baseUrl = me(() => l.value), ab ? it(e.locale, () => {
        l.value = _l(o, s)
    }, {
        immediate: !0
    }) : l.value = _l(o, s), t.hooks && t.hooks.onExtendComposer && t.hooks.onExtendComposer(e)
}

function yb(e, t, n) {
    const r = [{
        locales: {
            get() {
                return t.locales.value
            }
        },
        localeCodes: {
            get() {
                return t.localeCodes.value
            }
        },
        baseUrl: {
            get() {
                return t.baseUrl.value
            }
        }
    }];
    n && r.push(n(t));
    for (const o of r)
        for (const [s, i] of Object.entries(o)) Object.defineProperty(e, s, i)
}

function yl(e, t) {
    const n = dr(e),
        r = [{
            locales: {
                get() {
                    return n.locales.value
                }
            },
            localeCodes: {
                get() {
                    return n.localeCodes.value
                }
            },
            baseUrl: {
                get() {
                    return n.baseUrl.value
                }
            }
        }];
    t && r.push(t(n));
    for (const o of r)
        for (const [s, i] of Object.entries(o)) Object.defineProperty(e, s, i)
}

function bb(e) {
    return Ei(e) && ("inject" in e || "__composerExtend" in e || "__vueI18nExtend" in e)
}
const xs = nb("vue-i18n-routing-gor");

function vb(e, t) {
    e[xs] ? Zu("already registered global options") : e[xs] = t
}

function wb(e) {
    var t;
    return (t = e[xs]) != null ? t : {}
}

function nf(e) {
    return new RegExp(`^/(${e.join("|")})(?:/|$)`, "i")
}

function Eb(e, t, n) {
    const r = `(${e.join("|")})`,
        o = `(?:${t}${n})?`,
        s = new RegExp(`${t}${r}${o}$`, "i"),
        i = nf(e);
    return l => {
        if (Ei(l)) {
            if (l.name) {
                const u = (On(l.name) ? l.name : l.name.toString()).match(s);
                if (u && u.length > 1) return u[1]
            } else if (l.path) {
                const c = l.path.match(i);
                if (c && c.length > 1) return c[1]
            }
        } else if (On(l)) {
            const c = l.match(i);
            if (c && c.length > 1) return c[1]
        }
        return ""
    }
}

function wr(e, t, {
    defaultLocale: n = Yy,
    defaultDirection: r = eb,
    defaultLocaleRouteNameSuffix: o = Zy,
    routesNameSeparator: s = Qy,
    strategy: i = Gy,
    trailingSlash: a = Jy,
    localeCodes: l = [],
    prefixable: c = rf,
    switchLocalePathIntercepter: u = of ,
    dynamicRouteParamsKey: f = Ju
} = {}) {
    const d = wb(e);
    return {
        defaultLocale: t.defaultLocale || d.defaultLocale || n,
        defaultDirection: t.defaultDirection || d.defaultDirection || r,
        defaultLocaleRouteNameSuffix: t.defaultLocaleRouteNameSuffix || d.defaultLocaleRouteNameSuffix || o,
        routesNameSeparator: t.routesNameSeparator || d.routesNameSeparator || s,
        strategy: t.strategy || d.strategy || i,
        trailingSlash: t.trailingSlash || d.trailingSlash || a,
        localeCodes: t.localeCodes || d.localeCodes || l,
        prefixable: t.prefixable || d.prefixable || c,
        switchLocalePathIntercepter: t.switchLocalePathIntercepter || d.switchLocalePathIntercepter || u,
        dynamicRouteParamsKey: t.dynamicRouteParamsKey || d.dynamicRouteParamsKey || f
    }
}

function Tb(e, t) {
    return [e.slice(0, t), e.slice(t)]
}

function Cb(e, t, n, r) {
    if (n === "prefix") {
        if (Qu(t.matched) && t.matched.length > 0) return t.matched[0];
        const [o, s] = Tb(t.path, 1), i = `${o}${r}${s===""?s:`/${s}`}`, a = e.options.routes.find(l => l.path === i);
        if (a == null) return t; {
            const l = wo({}, a);
            return l.path = i, e.resolve(l)
        }
    } else return e.resolve(t)
}
const Lb = new Set(["prefix_and_default", "prefix_except_default"]);

function kb(e) {
    const {
        currentLocale: t,
        defaultLocale: n,
        strategy: r
    } = e;
    return !(t === n && Lb.has(r)) && r !== "no_prefix"
}
const rf = kb;

function Nn(e) {
    const t = this.router,
        {
            routesNameSeparator: n
        } = wr(t, this),
        r = e != null ? he(e) ? Ee(e) : e : this.route;
    return r == null || !r.name ? void 0 : tf(r.name).split(n)[0]
}

function Ti(e, t) {
    const n = Co.call(this, e, t);
    return n == null ? "" : n.redirectedFrom || n.fullPath
}

function Ci(e, t) {
    const n = Co.call(this, e, t);
    return n ? ? void 0
}

function Rb(e, t) {
    const n = Co.call(this, e, t);
    return n ? ? void 0
}

function Co(e, t) {
    const n = this.router,
        r = this.i18n,
        o = t || To(r),
        {
            routesNameSeparator: s,
            defaultLocale: i,
            defaultLocaleRouteNameSuffix: a,
            strategy: l,
            trailingSlash: c,
            prefixable: u
        } = wr(n, this);
    let f = e;
    On(e) && (f[0] === "/" ? f = {
        path: e
    } : f = {
        name: e
    });
    let d = wo({}, f);
    if (d.path && !d.name) {
        let p = null;
        try {
            p = Cb(n, d, l, o)
        } catch {}
        const g = p,
            v = Nn.call(this, g);
        On(v) ? (d = {
            name: gl(v, o, {
                defaultLocale: i,
                strategy: l,
                routesNameSeparator: s,
                defaultLocaleRouteNameSuffix: a
            }),
            params: g.params,
            query: g.query,
            hash: g.hash
        }, d.state = g.state) : (u({
            currentLocale: o,
            defaultLocale: i,
            strategy: l
        }) && (d.path = `/${o}${d.path}`), d.path = c ? ib(d.path, !0) : sb(d.path, !0))
    } else !d.name && !d.path && (d.name = Nn.call(this, this.route)), d.name = gl(d.name, o, {
        defaultLocale: i,
        strategy: l,
        routesNameSeparator: s,
        defaultLocaleRouteNameSuffix: a
    });
    try {
        const p = n.resolve(d);
        return (dp ? p.name : p.route.name) ? p : n.resolve(e)
    } catch (p) {
        if (p.type === 1) return null
    }
}
const of = e => e;

function Pb(e, t) {
    const n = {};
    if (t === Ju) return n;
    const r = e.meta;
    return he(r) ? r.value[t] || n : r[t] || n
}

function hr(e) {
    const t = this.route,
        n = Nn.call(this, t);
    if (!n) return "";
    const {
        switchLocalePathIntercepter: r,
        dynamicRouteParamsKey: o
    } = wr(this.router, this), {
        params: s,
        ...i
    } = t, a = Pb(t, o)[e] || {}, l = {
        name: n,
        params: { ...s,
            ...a
        }
    }, c = wo({}, i, l);
    let u = Ti.call(this, c, e);
    return u = r(u, e), u
}

function sf({
    addDirAttribute: e = !1,
    addSeoAttributes: t = !1,
    identifierAttribute: n = "hid"
} = {}) {
    const r = this.router,
        o = this.i18n,
        {
            defaultDirection: s
        } = wr(r, this),
        i = {
            htmlAttrs: {},
            link: [],
            meta: []
        };
    if (o.locales == null || o.baseUrl == null) return i;
    const a = To(o),
        l = cb(o),
        c = lb(l).find(d => d.code === a) || {
            code: a
        },
        u = c.iso,
        f = c.dir || s;
    return e && (i.htmlAttrs.dir = f), t && a && o.locales && (u && (i.htmlAttrs.lang = u), Sb.call(this, l, Ee(o.baseUrl), i.link, n), Ib.call(this, Ee(o.baseUrl), i.link, n, t), Ab(c, u, i.meta, n), Ob(l, u, i.meta, n)), i
}

function Sb(e, t, n, r) {
    const o = this.router,
        {
            defaultLocale: s,
            strategy: i
        } = wr(o, this);
    if (i === Gu.NO_PREFIX) return;
    const a = new Map;
    for (const l of e) {
        const c = l.iso;
        if (!c) {
            Zu("Locale ISO code is required to generate alternate link");
            continue
        }
        const [u, f] = c.split("-");
        u && f && (l.isCatchallLocale || !a.has(u)) && a.set(u, l), a.set(c, l)
    }
    for (const [l, c] of a.entries()) {
        const u = hr.call(this, c.code);
        u && n.push({
            [r]: `i18n-alt-${l}`,
            rel: "alternate",
            href: zs(u, t),
            hreflang: l
        })
    }
    if (s) {
        const l = hr.call(this, s);
        l && n.push({
            [r]: "i18n-xd",
            rel: "alternate",
            href: zs(l, t),
            hreflang: "x-default"
        })
    }
}

function Ib(e, t, n, r) {
    const o = this.route,
        s = Ci.call(this, { ...o,
            name: Nn.call(this, o)
        });
    if (s) {
        let i = zs(s.path, e);
        const a = Ei(r) && r.canonicalQueries || [];
        if (a.length) {
            const l = s.query,
                c = new URLSearchParams;
            for (const f of a)
                if (f in l) {
                    const d = l[f];
                    Qu(d) ? d.forEach(p => c.append(f, p || "")) : c.append(f, d || "")
                }
            const u = c.toString();
            u && (i = `${i}?${u}`)
        }
        t.push({
            [n]: "i18n-can",
            rel: "canonical",
            href: i
        })
    }
}

function Ab(e, t, n, r) {
    e && t && n.push({
        [r]: "i18n-og",
        property: "og:locale",
        content: af(t)
    })
}

function Ob(e, t, n, r) {
    const o = e.filter(s => {
        const i = s.iso;
        return i && i !== t
    });
    if (o.length) {
        const s = o.map(i => ({
            [r]: `i18n-og-alt-${i.iso}`,
            property: "og:locale:alternate",
            content: af(i.iso)
        }));
        n.push(...s)
    }
}

function af(e) {
    return (e || "").replace(/-/g, "_")
}

function zs(e, t) {
    return e.match(/^https?:\/\//) ? e : t + e
}

function Nb(e, t) {
    const {
        router: n,
        route: r,
        i18n: o,
        defaultLocale: s,
        strategy: i,
        defaultLocaleRouteNameSuffix: a,
        trailingSlash: l,
        routesNameSeparator: c
    } = e;
    return function(...u) {
        return Reflect.apply(t, {
            router: n,
            route: r,
            i18n: o,
            defaultLocale: s,
            strategy: i,
            defaultLocaleRouteNameSuffix: a,
            trailingSlash: l,
            routesNameSeparator: c
        }, u)
    }
}

function xb({
    router: e = R_(),
    route: t = Su(),
    i18n: n = vo(),
    defaultLocale: r = void 0,
    defaultLocaleRouteNameSuffix: o = void 0,
    routesNameSeparator: s = void 0,
    strategy: i = void 0,
    trailingSlash: a = void 0
} = {}) {
    return Nb({
        router: e,
        route: t,
        i18n: n,
        defaultLocale: r,
        defaultLocaleRouteNameSuffix: o,
        routesNameSeparator: s,
        strategy: i,
        trailingSlash: a
    }, hr)
}
const zb = {
        site: e => {
            const {
                normalize: t
            } = e;
            return t(["UNCX Network"])
        },
        app: e => {
            const {
                normalize: t
            } = e;
            return t(["Go to App"])
        },
        back: e => {
            const {
                normalize: t
            } = e;
            return t(["Back to home"])
        },
        read: e => {
            const {
                normalize: t
            } = e;
            return t(["Read more"])
        },
        bottomSocial: e => {
            const {
                normalize: t
            } = e;
            return t(["Get in touch with us..."])
        },
        title: {
            index: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network • Multi-chain DeFi Services"])
            },
            launchpad: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network • Launchpad"])
            },
            minter: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network • Minter"])
            },
            network: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network • Network"])
            },
            staking: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network • Staking"])
            },
            team: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network • Team"])
            },
            tokens: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network • Tokens"])
            },
            vesting: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network • Lockers"])
            },
            terms: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network • Terms & Conditions"])
            },
            privacy: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network • Privacy Policy"])
            },
            sitemap: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network • Sitemap"])
            }
        },
        description: {
            index: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network is a leading provider of DeFi services. Our scalable tools help token projects launch and grow their communities safely and effectively."])
            },
            launchpad: e => {
                const {
                    normalize: t
                } = e;
                return t(["Raise funds for your token project using our ethical decentralized ILO (Initial Liquidity Offering) token launchpad."])
            },
            minter: e => {
                const {
                    normalize: t
                } = e;
                return t(["Mint a token in seconds - no coding required - using our customizable token minter. Built with exciting security features that your community will love."])
            },
            network: e => {
                const {
                    normalize: t
                } = e;
                return t(["Explore the partners & collaborators who help us enhance investor security and make our services' data more accessible."])
            },
            staking: e => {
                const {
                    normalize: t
                } = e;
                return t(["Create custom reward programs for your community using our powerful staking & farming pool creator. Highly flexible customizability."])
            },
            team: e => {
                const {
                    normalize: t
                } = e;
                return t(["Meet our global team of passionate DeFi experts working to build and promote our products & network. "])
            },
            tokens: e => {
                const {
                    normalize: t
                } = e;
                return t(["Discover our flagship token, $UNCX and $UNCL - A powerful tool for the UNCX Network community! "])
            },
            vesting: e => {
                const {
                    normalize: t
                } = e;
                return t(["Increase your community's trust and build your reputation using the industry's most trusted liquidity lockers and token vesting programs."])
            },
            terms: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network • Terms & Conditions"])
            },
            privacy: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network • Privacy Policy"])
            },
            sitemap: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network • Sitemap"])
            }
        },
        header: {
            nav: e => {
                const {
                    normalize: t
                } = e;
                return t(["Navigation"])
            },
            products: {
                ilo: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["ILO Launchpad"])
                },
                vesting: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["LP & Token Vesting"])
                },
                staking: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Staking & Farming"])
                },
                minter: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Token Minter"])
                },
                ecosystem: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Token Ecosystem"])
                }
            }
        },
        nav: {
            products: e => {
                const {
                    normalize: t
                } = e;
                return t(["Products"])
            },
            team: e => {
                const {
                    normalize: t
                } = e;
                return t(["Meet the Team"])
            },
            blog: e => {
                const {
                    normalize: t
                } = e;
                return t(["Blog"])
            },
            mediumBlog: e => {
                const {
                    normalize: t
                } = e;
                return t(["Medium Blog"])
            },
            network: e => {
                const {
                    normalize: t
                } = e;
                return t(["Network"])
            },
            company: e => {
                const {
                    normalize: t
                } = e;
                return t(["Company"])
            },
            about: e => {
                const {
                    normalize: t
                } = e;
                return t(["About"])
            },
            careers: e => {
                const {
                    normalize: t
                } = e;
                return t(["Careers"])
            },
            doc: e => {
                const {
                    normalize: t
                } = e;
                return t(["Documentation"])
            },
            tokens: e => {
                const {
                    normalize: t
                } = e;
                return t(["Our Tokens"])
            },
            launchpad: e => {
                const {
                    normalize: t
                } = e;
                return t(["Launchpad"])
            },
            vesting: e => {
                const {
                    normalize: t
                } = e;
                return t(["Locking & Vesting"])
            },
            staking: e => {
                const {
                    normalize: t
                } = e;
                return t(["Staking & Farming"])
            },
            minter: e => {
                const {
                    normalize: t
                } = e;
                return t(["Token Minter"])
            },
            sitemap: e => {
                const {
                    normalize: t
                } = e;
                return t(["Sitemap"])
            },
            privacy: e => {
                const {
                    normalize: t
                } = e;
                return t(["Privacy Policy"])
            },
            terms: e => {
                const {
                    normalize: t
                } = e;
                return t(["Terms & Conditions"])
            },
            audits: e => {
                const {
                    normalize: t
                } = e;
                return t(["Audits"])
            },
            referral: e => {
                const {
                    normalize: t
                } = e;
                return t(["Referrals/Affiliates"])
            },
            brandAssets: e => {
                const {
                    normalize: t
                } = e;
                return t(["Brand Assets"])
            },
            buttonStandard: e => {
                const {
                    normalize: t
                } = e;
                return t(["Go to App"])
            },
            buttonStake: e => {
                const {
                    normalize: t
                } = e;
                return t(["Stake UNCX"])
            },
            buttonPartners: e => {
                const {
                    normalize: t
                } = e;
                return t(["Whitelisted Partners Info"])
            },
            buttonContact: e => {
                const {
                    normalize: t
                } = e;
                return t(["Get in Touch"])
            }
        },
        blockchain: {
            ethereum: e => {
                const {
                    normalize: t
                } = e;
                return t(["Ethereum"])
            },
            binance_chain: e => {
                const {
                    normalize: t
                } = e;
                return t(["Binance Chain"])
            },
            avalanche: e => {
                const {
                    normalize: t
                } = e;
                return t(["Avalanche"])
            },
            gnosis_chain: e => {
                const {
                    normalize: t
                } = e;
                return t(["Gnosis Chain"])
            },
            polygon: e => {
                const {
                    normalize: t
                } = e;
                return t(["Polygon"])
            },
            arbitrum: e => {
                const {
                    normalize: t
                } = e;
                return t(["Arbitrum"])
            }
        },
        home: {
            top: {
                h1: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["<span>Secure DeFi</span> <strong>Infrastructure</strong>"])
                },
                intro: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Decentralized, scalable, trusted. Welcome to UNCX."])
                }
            }
        },
        services: {
            title: e => {
                const {
                    normalize: t
                } = e;
                return t(["Our Services"])
            },
            txt: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network (formerly UniCrypt) is a leading provider of decentralized finance services. We are consistent market innovators of automated and scalable token solutions. Thousands of investors and projects rely on our certified & secured technology to participate in DeFi safely. Many imitate, but few innovate like we did."])
            },
            list: {
                ilo: {
                    title: e => {
                        const {
                            normalize: t
                        } = e;
                        return t(["ILO <br />Launchpad"])
                    }
                },
                vesting: {
                    title: e => {
                        const {
                            normalize: t
                        } = e;
                        return t(["LP & <br />Token Vesting"])
                    }
                },
                staking: {
                    title: e => {
                        const {
                            normalize: t
                        } = e;
                        return t(["Staking & <br />Farming"])
                    }
                },
                minter: {
                    title: e => {
                        const {
                            normalize: t
                        } = e;
                        return t(["Token <br />Minter"])
                    }
                },
                ecosystem: {
                    title: e => {
                        const {
                            normalize: t
                        } = e;
                        return t(["Token <br />Ecosystem"])
                    }
                }
            }
        },
        tvl: {
            sub: e => {
                const {
                    normalize: t
                } = e;
                return t(["TVL"])
            },
            list: {
                locked: {
                    title: e => {
                        const {
                            normalize: t
                        } = e;
                        return t(["Over"])
                    },
                    sub: e => {
                        const {
                            normalize: t
                        } = e;
                        return t(["locked"])
                    }
                },
                projects: {
                    title: e => {
                        const {
                            normalize: t
                        } = e;
                        return t(["Trusted by"])
                    },
                    sub: e => {
                        const {
                            normalize: t
                        } = e;
                        return t(["projects"])
                    }
                },
                services: {
                    title: e => {
                        const {
                            normalize: t
                        } = e;
                        return t(["Unique"])
                    },
                    sub: e => {
                        const {
                            normalize: t
                        } = e;
                        return t(["services"])
                    }
                },
                users: {
                    title: e => {
                        const {
                            normalize: t
                        } = e;
                        return t(["Monthly"])
                    },
                    sub: e => {
                        const {
                            normalize: t
                        } = e;
                        return t(["users"])
                    }
                }
            }
        },
        partners: {
            title: e => {
                const {
                    normalize: t
                } = e;
                return t(["Partnerships"])
            },
            txt: e => {
                const {
                    normalize: t
                } = e;
                return t(["We are very proud to work with top security and technology experts. Together we are working to build truly decentralized technology with the utmost emphasis on security."])
            }
        },
        customers: {
            title: e => {
                const {
                    normalize: t
                } = e;
                return t(["Our API Collaborations"])
            },
            txt: e => {
                const {
                    normalize: t
                } = e;
                return t(["We are constantly working to make our liquidity locker, farms, and ILO data more accessible. Here are some of the platforms where our data is displayed or taken into consideration in confidence scores."])
            }
        },
        marketing: {
            title: e => {
                const {
                    normalize: t
                } = e;
                return t(["Marketing Collaborations"])
            },
            txt: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network clients not only benefit from aligning themselves with our ethical reputation, they also benefit from discounted rates with the following vetted marketing vendors."])
            }
        },
        team: {
            title: e => {
                const {
                    normalize: t
                } = e;
                return t(["Founders"])
            },
            txt: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network was started by two people in June 2020 with no outside funding or investment. Today it employs a large team of industry experts and is constantly adapting to meet the needs of a dynamic and evolving marketplace."])
            },
            meet: e => {
                const {
                    normalize: t
                } = e;
                return t(["Meet the rest of the Team..."])
            },
            rang: {
                1: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Co-founder"])
                },
                2: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Developer"])
                },
                3: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Designer"])
                },
                4: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Product"])
                },
                5: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Marketing"])
                },
                6: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Sales"])
                },
                7: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Support"])
                },
                8: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Business Development"])
                }
            },
            titlePage: e => {
                const {
                    normalize: t
                } = e;
                return t(["Meet The UNCX Family"])
            },
            intro: e => {
                const {
                    normalize: t
                } = e;
                return t(["A global team of passionate DeFi and decentralization evangelists"])
            },
            txt2: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX was started by two people in June 2020 with no outside funding or investment. Today it employs a large team of industry experts who are passionate about building useful and secure DeFi technology."])
            }
        },
        feed: {
            title: e => {
                const {
                    normalize: t
                } = e;
                return t(["News Feed"])
            },
            txt: e => {
                const {
                    normalize: t
                } = e;
                return t(["Keep up to date with the latest innovations in the DeFi space."])
            }
        },
        newsletter: {
            title: e => {
                const {
                    normalize: t
                } = e;
                return t(["Subscribe"])
            },
            txt: e => {
                const {
                    normalize: t
                } = e;
                return t(["Be the first to know about our latest updates, releases, and useful insights."])
            }
        },
        footer: {
            title: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network"])
            },
            copyright: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Network © 2021-2023. All rights reserved."])
            }
        },
        launchpad: {
            title: e => {
                const {
                    normalize: t
                } = e;
                return t(["A Truly Decentralized Launchpad"])
            },
            intro: e => {
                const {
                    normalize: t
                } = e;
                return t(["Launch your project using the industry’s most trusted ILO launchpad."])
            },
            title1: e => {
                const {
                    normalize: t
                } = e;
                return t(["Our Successes Speak For Themselves..."])
            },
            button: e => {
                const {
                    normalize: t
                } = e;
                return t(["Visit Launchpad"])
            },
            content: [{
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["What is an ILO?"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`ILO stands for ‘Initial Liquidity Offering’.
ILOs raise funds to provide liquidity for new cryptocurrencies. Liquidity allows people to trade the token on the market. Without liquidity, investors can’t buy nor sell digital assets, namely tokens.
Coupled with our premium liquidity locking service, these tools enable small businesses with great ideas to launch tokens which can support their project.
Typically these tokens are offered at a discounted price before their launch. Investors are eager to purchase utility digital assets because of their interest for supporting new technologies and tokenized ecosystems.
It is worth noting that the UNCX Network platform is DECENTRALIZED and TRUSTLESS. We believe in the philosophy of public blockchains that are completely decentralized. This puts the responsibility and the power in the hands of the user and not a centralized power.`])
                }
            }]
        },
        vesting: {
            title: e => {
                const {
                    normalize: t
                } = e;
                return t(["Premium LP Locks & Token Vesting"])
            },
            intro: e => {
                const {
                    normalize: t
                } = e;
                return t(["Bring trust to your liquidity pool (LP) with the most secure and trusted lockers in the space. We are the proud creators of this technology and we do not cut corners."])
            },
            title1: e => {
                const {
                    normalize: t
                } = e;
                return t(["Our customers trust us"])
            },
            button: e => {
                const {
                    normalize: t
                } = e;
                return t(["Locking App"])
            },
            content: [{
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["What is Liquidity Locking?"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`Liquidity locking involves storing liquidity provider (fungible or non-fungible depending on protocols) tokens in smart contracts for a predetermined amount of time. These smart contracts are called liquidity lockers.
Liquidity lockers allow developers to preemptively lock away a set % of liquidity upon token launch (or anytime later) for a period of time of their choosing. This prevents anyone from being able to withdraw all project locked liquidity. It is an approach that ensures developers don’t have critical control of users’ funds, on top of enhanced security and decentralization.
Locking your liquidity is part of maximizing your project’s attractiveness and is the status quo for serious blockchain startups.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["What is Token Vesting?"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`When token developers lock portions of a total token supply in order to release them gradually over a period of time, the process is referred to as token vesting, and the time span in which the release takes place is known as the vesting period.
Developers may use vesting services in multiple scenarios: vesting early investors (companies, retail investors, project advisors), airdropping users over time, reinforcing trust and credibility by locking their token reserves and other ecosystem funds. Our vesting contracts are fully decentralized and a statement of fund security.`])
                }
            }]
        },
        staking: {
            title: e => {
                const {
                    normalize: t
                } = e;
                return t(["Staking & Farming Services"])
            },
            intro: e => {
                const {
                    normalize: t
                } = e;
                return t(["Create customized rewarding programs for your community with our incredibly powerful staking and farming pool creator."])
            },
            button: e => {
                const {
                    normalize: t
                } = e;
                return t(["Saas/FaaS App"])
            },
            table: {
                staking: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Staking"])
                },
                farming: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Farming"])
                },
                1: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Pool two tokens and receive rewards"])
                },
                2: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["A single token that yields rewards"])
                },
                3: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Up to 10 simultaneous rewards"])
                },
                4: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Time locks and boosters"])
                },
                5: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Top-ups and reward swapping"])
                }
            },
            content: [{
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Staking and Farming as a Service"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Create a customized rewards program for your community using our powerful staking and farming pool creator. Our flexible staking & farming generator allows stakers and farmers to earn multiple rewards per stake."])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Staking your UNCX Tokens"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["UNCX tokens are staked on the Ethereum chain in a one-time operation and our team in able to distribute reward on multiple chains at once. You can subscribe to up to 10 rewards pools for a given stake. Rewards mainly come from successful ILO launches. "])
                }
            }]
        },
        minter: {
            title: e => {
                const {
                    normalize: t
                } = e;
                return t(["Fully Customizable Token Minter"])
            },
            intro: e => {
                const {
                    normalize: t
                } = e;
                return t(["Custom taxes. Built in security. Low fees. Native compatibility with all our services. No coding required!"])
            },
            button: e => {
                const {
                    normalize: t
                } = e;
                return t(["Minting App"])
            },
            table: [e => {
                const {
                    normalize: t
                } = e;
                return t(["Mint to multiple chains"])
            }, e => {
                const {
                    normalize: t
                } = e;
                return t(["Built in Lossless security from hacks"])
            }, e => {
                const {
                    normalize: t
                } = e;
                return t(["Reflection, LP, Buyback taxes"])
            }, e => {
                const {
                    normalize: t
                } = e;
                return t(["Up to 10 custom taxes"])
            }, e => {
                const {
                    normalize: t
                } = e;
                return t(["Permanent lock functionality"])
            }, e => {
                const {
                    normalize: t
                } = e;
                return t(["No coding required. Ever."])
            }, e => {
                const {
                    normalize: t
                } = e;
                return t(["Admin panel for editing after launch"])
            }],
            content: [{
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Full Control"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Discover our fully customizable token solutions. Our original ENMT minter and our new Tax Token minter which allows completely customizable taxes. We offer a full suite of options such as regular taxes, LP taxes, buybacks, reflections or even a custom label. Mint/Pause/Blacklist functions are also available."])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Built-in Lossless & AntiBot"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`By minting with Tax Token you’ll be providing peace of mind to you and your investors with our built-in Lossless and AntiBot features.
Lossless provides an additional layer of blockchain transaction security, mitigating the financial impact of smart contract exploits and private key theft. Our antibot piece of code is the market’s most innovative sniping bot protection solution.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Native Integration"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["All of our services are directly integrated and work best with tokens minted on our platform. We also display security assessment (audits) and Tax Token settings on our website. The team will be offering specific offers on ILO fees for tokens that have been minted through our in.house decentralized minting service."])
                }
            }]
        },
        tokens: {
            title: e => {
                const {
                    normalize: t
                } = e;
                return t(["The UNCX Token"])
            },
            intro: e => {
                const {
                    normalize: t
                } = e;
                return t(["Our flagship token. A powerful tool for the UNCX Community!"])
            },
            button: e => {
                const {
                    normalize: t
                } = e;
                return t(["Stake UNCX"])
            },
            title1: e => {
                const {
                    normalize: t
                } = e;
                return t(["A token system to empower users"])
            },
            uncx: [e => {
                const {
                    normalize: t
                } = e;
                return t(["Launchpad allocation"])
            }, e => {
                const {
                    normalize: t
                } = e;
                return t(["Staking, $UNCX emission"])
            }, e => {
                const {
                    normalize: t
                } = e;
                return t(["Pro dashboard"])
            }, e => {
                const {
                    normalize: t
                } = e;
                return t(["Governance"])
            }],
            uncx_btn: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX Info"])
            },
            uncl: [e => {
                const {
                    normalize: t
                } = e;
                return t(["Launchpad reservations"])
            }, e => {
                const {
                    normalize: t
                } = e;
                return t(["Boost Farming/Staking APY"])
            }, e => {
                const {
                    normalize: t
                } = e;
                return t(["Account Management"])
            }, e => {
                const {
                    normalize: t
                } = e;
                return t(["Staking Reward"])
            }, e => {
                const {
                    normalize: t
                } = e;
                return t(["<strong>Upcoming:</strong> StreAMM discounts"])
            }],
            uncl_btn: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCL Info"])
            },
            content: [{
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["Staking your UNCX Token"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["UNCX tokens are staked on the Ethereum chain in a one-time operation and our team in able to distribute reward on multiple chains at once. You can subscribe to up to 10 rewards pools for a given stake. Rewards mainly come from successful ILO launches. "])
                }
            }]
        },
        network: {
            title: e => {
                const {
                    normalize: t
                } = e;
                return t(["Meet The Network"])
            },
            intro: e => {
                const {
                    normalize: t
                } = e;
                return t(["Our network aims to empower people who want to contribute to the crypto industry in a meaningful way."])
            },
            title1: e => {
                const {
                    normalize: t
                } = e;
                return t(["UNCX is thrilled to work with a diverse range of ethical technology partners..."])
            },
            title2: e => {
                const {
                    normalize: t
                } = e;
                return t(["We also proudly recognize the achievements of our key community partners..."])
            },
            customersDoc: e => {
                const {
                    normalize: t
                } = e;
                return t(["Learn more"])
            }
        },
        blog: {
            title: e => {
                const {
                    normalize: t
                } = e;
                return t(["Updates, stories, and announcements from the UNCX Network team."])
            }
        },
        sitemap: {
            title: e => {
                const {
                    normalize: t
                } = e;
                return t(["Sitemap"])
            },
            sub: e => {
                const {
                    normalize: t
                } = e;
                return t(["Find my way!"])
            }
        },
        terms: {
            title: e => {
                const {
                    normalize: t
                } = e;
                return t(["Terms & Conditions"])
            },
            content: [{
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`LAST UPDATED: [01.04.21]
These terms and conditions (“Terms”) govern the use of the Platform (defined below) and the Services (defined below). These Terms also include any guidelines, additional terms, policies, and disclaimers made available or issued by UNCX from time to time.
These Terms constitute a binding and enforceable legal contract between UNCX and its affiliates and subsidiaries worldwide (“UNCX”, “we”, “us”) and you, an end user of the Services (“you” or “User”) in relation to the Services.
By using the Services, you agree that you have read, understood, and to are bound by these Terms, as amended from time to time, and that you comply with the requirements listed herein. If you do not agree to all of these Terms or comply with the requirements herein, please do not access or use the Services.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["SERVICES"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`(a) The UNCX platform (“Platform”) provides multiple service offerings namely: (i) Farming Solution, (ii) Launch Pad, (iii) Liquidity Locking service and (iv) Token Lockers, cumulatively referred to as (“Services”), the usage of each individual Service whereof is regulated as per their respective terms read with these Terms; which term includes the underlying application, all services available through the Platform, and all free trials and beta services made available by the Platform.
(b) The User may be required to connect their wallet to the Platform to gain access to some of the Services. We are not responsible for any loss or damage that may arise from such integration.
(c) You understand that the Platform Services involve nascent technologies, and the usage of such Services could result in partial or complete loss of funds.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["ACCESS TO THE SERVICES"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`(a) By using the Services, you represent and warrant that:
(i) you have full legal capacity and authority to agree and bind yourself to these Terms;
(ii) you are eighteen years of age or older;
(iii) your use of the Services is (A) not prohibited by applicable law, and (B) at all times compliant with applicable law; and
(iv) are solely responsible for use of the Services and, if applicable, for all activities that occur on or through your User account.
(b) You should take steps to ensure the confidentiality of your personal information and restrict access to the devices you use to access the Platform.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["YOUR RESPONSIBILITIES"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`(a) You shall not use the Services in any manner except as expressly permitted in these Terms. Without limiting the generality of the preceding sentence, you may not:
(i) infringe any proprietary rights, including but not limited to copyrights, patents, trademarks, or trade secrets of UNCX;
(ii) use the Services to transmit any data or send or upload any material that contains viruses, Trojan horses, worms, time-bombs, keystroke loggers, spyware, adware, or any other harmful programmes or similar computer code designed to adversely affect the operation of any computer software or hardware;
(iii) use any robot, spider, other automated device, or manual process to monitor or copy the Services or any portion thereof other than copying or exporting as permitted by the Terms;
(iv) make any back-up or archival copies of the Platform or any part thereof, including disassembling or de-compilation of the Platform;
(v) use the Services in (A) any unlawful manner, (B) for fraudulent or malicious activities, or (C) in any manner inconsistent with these Terms; or
(vi) violate applicable laws in any manner.
(b) You warrant that you are aware of applicable laws and regulations governing your use of the Services. You shall be solely responsible for ensuring compliance with the various applicable laws, and you shall be solely liable for any liability that may arise due to a breach of your obligations in this regard.
(c) YOU AGREE TO FAMILIARISE YOURSELF WITH THE PLATFORM, THE SERVICES, AND ITS INTENDED USAGE. YOU AGREE TO FOLLOW ALL THE REQUISITE STEPS INVOLVED IN USING THE PLATFORM AS INTENDED. WE WILL NOT BE LIABLE FOR ANY WRONGFUL USE OF THE PLATFORM DUE TO USER ERROR.
(d) You shall extend all cooperation, at your cost, to UNCX in its defence of any proceedings that may be initiated against it due to a breach of your obligations or covenants under these Terms.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["UNCX’S INTELLECTUAL PROPERTY"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`(a) All rights, title, and interest in and to the Services, including all intellectual property rights arising out of the Services, are owned by or otherwise licensed to UNCX. Subject to your compliance with these Terms, UNCX grants you a non-exclusive, non-sub licensable, and limited license to (i) use the Services in the permitted hereunder.
(b) Except as stated in these Terms, nothing in these Terms should be construed as conferring any right in or license to UNCX’s or any third party’s intellectual rights.
(c) You may provide suggestions and other feedback, including bug reports, in relation to the Services from time to time (“Feedback”). UNCX may freely use, copy, disclose, publish, display, distribute, and exploit the Feedback without any payment of royalty, acknowledgement, prior consent, or any other form of restriction arising out of your intellectual property rights.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["THIRD PARTY SERVICES"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`(a) The Services may include services, content, and information owned, made available, or otherwise licensed by a third party (“Third Party Services”) or contain links to Third Party Services. You understand that Third Party Services are the responsibility of the third party that created or provided it and acknowledge that the use of such Third Party Services is solely at your own risk.
(b) UNCX makes no representations and excludes all warranties and liabilities arising out of or pertaining to such Third Party Services, including its accuracy or completeness.
(c) All intellectual property rights in and to Third Party Services are the property of the respective third parties.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["INDEMNITY"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["You agree to indemnify and hold harmless UNCX, its affiliates, subsidiaries, licensors, and their respective directors, officers, members, managers, employees, and agents from and against any and all claims and expenses arising out of your use of the Services, a breach of any provision of these Terms by you or any person using the Services on your behalf, a breach by you of any applicable laws, or any third-party claim to the extent arising from or connected with an allegation that your use of the Services in accordance with these Terms infringes any rights of a third party."])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["TERM AND TERMINATION"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`(a) These Terms shall remain in effect unless terminated in accordance with the terms hereunder.
(b) UNCX may terminate, suspend, or modify your access to the Services, or any portion thereof, immediately and at any point, at its sole discretion if it is of the view that you violate or breach any of your obligations, responsibilities, or covenants under these Terms. UNCX will not be liable to you or to any third party for any termination, suspension, or modification of your access to the Services.
(c) Upon termination under Clause 7(b): 
(d) these Terms shall terminate, except for those clauses that expressly or are intended to survive termination or expiry.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["DISCLAIMERS AND WARRANTIES"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`(i) UNCX shall make all commercially reasonable attempts to facilitate information about the usage of the Services (“Services Information”). However, you understand that UNCX does not (i) guarantee the accuracy, timeliness, or completeness of such information, (ii) provide any warranties in connection with your use or reliance on such information. You agree that your use of the Services Information at your own risk. UNCX SHALL NOT BE LIABLE TO YOU IN ANY MANNER FOR THE TERMINATION, INTERRUPTION, DELAY, OR INACCURACY OF ANY SERVICES INFORMATION.
(ii) You agree that your use of the Services is at your sole risk. To the extent permitted by applicable law, the Services are provided on an “as is” and “as available” basis. UNCX does not warrant that the functions contained in the Services will meet your requirements. You hereby accept full responsibility for any consequences that may arise from your use of the Services, and expressly agree and acknowledge that UNCX shall have absolutely no liability in this regard.
(iii) UNCX does not warrant or represent that the Services will be compatible with any third party hardware or software, unless explicitly indicated. It shall be your responsibility to ensure compatibility of the Services prior to use. Additionally, UNCX shall not be held responsible for any actual, incidental or consequential damages that may result from any use or inability to use any third-party peripherals with the Services.
(iv) The Application may contain links to third party web sites or services that are not owned or controlled by UNCX. UNCX has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any such websites. You further acknowledge and agree that UNCX shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or service.
(v) To the fullest extent permissible under applicable law, UNCX expressly disclaims all warranties of any kind, express or implied, arising out of the Services, including warranties of merchantability, fitness for a particular purpose, satisfactory quality, accuracy, title and non-infringement, compatibility, applicability, usability, appropriateness, and any warranty that may arise out of course of performance, course of dealing, or usage of trade.
(vi) To the fullest extent permissible by law, UNCX, its affiliates, and their related parties each disclaim all liability to you for any loss or damage arising out of or due to:
(i) your use of, inability to use, or availability or unavailability of the Services, including any third party services made available through the Services;
(ii) the occurrence or existence of any defect, interruption, deletion of files, delays in the operation or transmission of information to, from, or through the Services, communications failure, theft, destruction or unauthorised access to UNCX’s records, programs, services, server, or other infrastructure relating to the UNCX;
(iii) the Services being infected with any malicious code or viruses; or
(iv) the failure of the Services to remain operational for any period of time.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["CONFIDENTIALITY"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["You acknowledge that the Services contain UNCX’s and its licensors’ trade secrets and confidential information. You agree to hold and maintain the Services in confidence, and not to furnish any other person with a copy of the Services or Platform. You agree to use a reasonable degree of care to protect the confidentiality of the Services. You will not remove or alter any of UNCX’s or its licensors’ proprietary notices. Your obligations under this Clause continue even after these Terms have expired or been terminated."])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["ANTI-MONEY LAUNDERING (“AML”) POLICY"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["(a) UNCX expressly prohibits and rejects the use of the Service for any form of illicit activity, including money laundering, terrorist financing or trade sanctions violations, consistent with various jurisdictions’ laws, regulations and norms. By using the Service, you represent that you are not involved in any such activity."])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["FORCE MAJEURE"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["UNCX shall have no liability to you if it is prevented from or delayed in performing its obligations or from carrying on its business, by acts, events, omissions or accidents beyond its reasonable control, including, without limitation, strikes, failure of a utility service or telecommunications network, act of God, war, riot, civil commotion, malicious damage, compliance with any law or governmental order, rule, regulation, or direction."])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["JURISDICTION AND GOVERNING LAW"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`(a) Subject to the other provisions of this Clause 12, the Parties shall attempt in good faith to mutually resolve any and all disputes, whether of law or fact, and of any nature whatsoever arising from or with respect to this Agreement.
(b) All disputes shall be resolved by arbitration in Estonia in accordance with the procedural aspects of Estonian Arbitration law for the time being in force and rules thereunder, which are deemed to be incorporated by reference in this Clause. The tribunal shall consist of 1 (One) arbitrator mutually appointed by the Parties.
(c) The award rendered by such arbitrator shall be final and binding on the Parties.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["MISCELLANEOUS PROVISIONS"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`(a) Modification: UNCX reserves the right at any time to modify these Terms and to add new or additional terms or conditions on your use of the Services. Such modifications and additional terms and conditions will be communicated to you and, unless expressly rejected (in which these Terms shall terminate), will be effective immediately and will be incorporated into these Terms. In the event, you refuse to accept such changes, these Terms and license will terminate.
(b) Severability: If any provision of these Terms is determined by any court or other competent authority to be unlawful or unenforceable, the other provisions of these Terms will continue in effect. If any unlawful or unenforceable provision would be lawful or enforceable if part of it were deleted, that part will be deemed to be deleted, and the rest of the provision will continue in effect (unless that would contradict the clear intention of the clause, in which case the entirety of the relevant provision will be deemed to be deleted).
(c) Notices: All notices, requests, demands, and determinations for UNCX under these Terms (other than routine operational communications) shall be sent to support`, "@", `UNCX.network.
(d) Third Party Rights: No third party shall have any rights to enforce any terms contained herein.`])
                }
            }]
        },
        privacy: {
            title: e => {
                const {
                    normalize: t
                } = e;
                return t(["Privacy Policy"])
            },
            content: [{
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`This Privacy Policy (“Policy”) outlines UNCX’s (“UNCX”, “we”, or “us”) practices in relation to the storage, use, processing, and disclosure of personal data that you have chosen to share with us when you access the Platform (as defined in the Terms) or use the Services (as defined in the Terms). This Policy, together with our Terms, applies to your use of the Platform.
At UNCX, we are committed to protecting your personal data and respecting your privacy. Please read this Policy carefully to understand our practices regarding your personal data and how we will treat it. The Policy sets out the basis on which any personal data that we collect from you, or that you provide to us, will be processed by us.
Unless defined in this Policy, capitalised words shall have the same meaning ascribed to them in our Terms and Conditions, available at [app.UNCX.network/terms/general] (“Terms”). Please read this Policy in consonance with our Terms.
By accessing the Platform, you consent to the collection, storage, use, and disclosure of your personal data, in accordance with, and are agreeing to be bound by this Policy. We will not collect any information from you, except where it is knowingly and explicitly provided by you.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["THE DATA WE COLLECT ABOUT YOU"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`(a) We may collect, use, store, and transfer different kinds of personal data about you in connection with your use of the Services, including but not limited to: (i) identity data such as username; (ii) contact data such as personal and/or business contact information including your first name, last name, mailing address, telephone number, fax number, e-mail address or any other personal data you provide to us for the purposes of doing business with us; and (iii) usage data, including how you use the Services.
(b) You do not have to provide any personal data or information to us but in doing so, you may not be able to take advantage of all the Services we offer.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["HOW IS YOUR PERSONAL DATA COLLECTED?"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`We will collect and process the following data about you: (a) Information you give us: This is the information you consent to giving us about you when you use our Services or by corresponding with us (for example, by email or chat). It includes information you provide when you register to use the Services, share data through the Platform, through other activities commonly carried out in connection with the Services, and when you report a problem with the Services. If you contact us, we will keep a record of the information shared during the correspondence.
(b) Information we collect about you and your device: Each time you visit our Platform or use one of our Services, we will automatically collect personal data including technical and usage data. This primarily includes your theme of choice.
(c) We may also collect, use, and share aggregated data such as statistical data for any purpose. Aggregated data could be derived from your personal data but is not considered personal data under applicable laws. For example, we may aggregate your usage data to calculate the percentage of users accessing a specific feature of the Services. However, if we combine or connect aggregated data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this Policy.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["HOW WE USE YOUR PERSONAL DATA AND FOR WHAT PURPOSES"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`We respect data protection principles, and process personal data only for specified, explicit, and legitimate purposes for which such personal data were provided. We primarily use your personal data to enable your use of UNCX and supply the Services requested by you. We may also use your personal data for the purposes provided in this Policy, and the purposes listed below: (a) You understand that when you consent to providing us with your personal data, you also consent to us sharing the personal data with third parties, including the government and regulatory entities, should the need arise under law, in connection with or related to the provision of Services.
(b) You are aware that by using and sharing your information on the Platform, you authorise us, our associate partners, affiliates and related third parties to contact you via email, or the Platform. This is to ensure that you are aware of all the features of the Platform and the Services.
(c) You are aware that any and all information pertaining to you, whether or not you directly provide it to us (via the Platform or otherwise), including but not limited to personal correspondence such as emails or letters, instructions from you, etc., may be collected, compiled, and shared by us in order to render Services to you and you expressly consent to this. (d) In general, we will not disclose personal data except in accordance with the following purpose or activity:
(i) to register you as a user; (ii) to deliver Services; (iii) to manage our relationship with you including notifying you of changes to any Services; (iv) to administer the Services including troubleshooting and system testing; (v) to monitor trends so we can improve the Services; (vi) to perform our obligations that arise out of the arrangement we are about to enter or have entered with you; (vii) to enforce the terms of the arrangement we have with you or any third party; (viii) to comply with a legal or regulatory obligation.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["TRANSFER OF PERSONAL DATA"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`(a) As a part of your use of and to ensure better and seamless delivery of the Services to you, the information and personal data you provide to us may be transferred to and stored at countries other than your home jurisdiction. These countries shall be subject to data laws of their respective countries. We and our service providers may transfer your information to, or store or access it in, jurisdictions that may not provide equivalent levels of data protection as your home jurisdiction. We will take steps to ensure that your personal data receives an adequate level of protection in the jurisdictions in which we process it. By using such Service, you expressly consent to this transfer, and agree and acknowledge that we will not be responsible for any additional terms and conditions, policies, and guidelines.
(b) By submitting your information and personal data to us, you agree to the transfer, storage and/or processing of such information, and personal data outside the country you are based in, in the manner described above.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["THIRD PARTY SERVICES"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`(a) Our Services may, from time to time, contain services provided by or links to and from the websites of our partner networks, advertisers, and affiliates (“Third Party Services”). Please note that the Third Party Services that may be accessible through our Services have their own privacy policies. We do not accept any responsibility or liability for the policies or for any personal data that may be collected through the Third Party Services. Please check their policies before you submit any personal data to such websites or use their services.
(b) Your relationship with these third parties and their services and tools is independent of your relationship with us. These third parties may allow you to permit/restrict the information that is collected. It may be in your interest to individually restrict or enable such data collections.
(c) The place of processing information depends on each third-party service provider and you should check the privacy policy of each of the service providers to identify the data shared and its purpose. You will be subject to a third party’s privacy policy if you opt in to receive communications from third parties. We will not be responsible for the privacy standards and practices of third parties.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["COOKIES"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`(a) We use cookies to distinguish you from other users of the Platform and remember your preferences. This helps us to provide you with a seamless user experience when you use our Services and also allows us to improve the Platform
(b) We collect data by way of ‘cookies’. Cookies are small data files which are sent to your browser from the Platform and are stored on your computer or device (hard drive). The cookies shall not provide access to data in your computer or device such as email addresses or any other data that can be traced to you personally. The data collected by way of cookies will allow us to administer the Platform and provide you with a tailored and user-friendly service. The cookies shall enable you to access certain features of the Services. Most web browsers and devices can be set to notify when you receive a cookie or prevent cookies from being sent. If you do prevent cookies from being sent, it may limit the functionality that we can provide when you visit the Platform. At present, the only cookies which are collected are theme preferences.
(c) Additionally, you may encounter cookies or other similar devices on certain pages of the Platform that are placed by third parties. We do not control the use of cookies by third parties. If you send us personal correspondence, such as emails or letters, or if other users or third parties send us correspondence about your activities or postings on the Platform, we may collect such information into a file specific to you.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["DATA SECURITY"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`(a) We implement certain reasonable security measures to protect your personal information from unauthorised access and such security measures are in compliance with the security practices and procedures as prescribed under the applicable laws. However, you agree and acknowledge that the above-mentioned measures do not guarantee absolute protection to the personal information and by accessing the Services, you agree to assume all risks associated with disclosure of personal information arising due to breach of firewalls and secure server software.
(b) Where you have chosen a password that enables you access to our Services, you are responsible for keeping this password confidential. We ask you not to share the password with anyone.
(c) We will comply with the requirements of applicable laws in the event of a data or security risk.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["DATA RETENTION"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["You are aware that your personal data will continue to be stored and retained by us for a reasonable period after your use of the Services."])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["BUSINESS TRANSITIONS"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["You are aware that in the event we go through a business transition, such as a merger, acquisition by another organisation, or sale of all or a portion of our assets, your personal data might be among the assets transferred."])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["CHANGE IN PRIVACY POLICY"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`(a) We keep our Policy under regular review and may amend this Policy from time to time, at our sole discretion.
(b) The terms of this Policy may change and if they do, the changes will be posted on this page and, where appropriate, notified to you by email. The new Policy may be displayed on-screen and you may be required to read and accept the changes to continue your use of the Services.`])
                }
            }, {
                title: e => {
                    const {
                        normalize: t
                    } = e;
                    return t(["YOUR LEGAL RIGHTS"])
                },
                txt: e => {
                    const {
                        normalize: t
                    } = e;
                    return t([`YOU HAVE THE RIGHT TO:
(a) Access Your Personal Information. You will receive a copy of the personal information we hold about you. Please note that we may request specific information from you to enable us to confirm your identity and right to access. If we cannot provide you with access to your personal information, we will inform you of the reasons why, subject to any legal or regulatory restrictions. If you would like to make such a request, please contact us at: hello`, "@", `UNCX.network and include 'Access Personal Information' in the subject line.
(b) Update Your Personal Information. We aim to ensure that personal information in our possession is accurate, current and complete. If you believe that the personal information about you is incorrect, incomplete or outdated, you may request the revision or correction of that information. We will use reasonable efforts to revise it and, if necessary, to use reasonable efforts to inform agents, service providers or other third parties, which were provided with inaccurate information, so records in their possession may also be corrected or updated. If you would like to make such a request, please contact us at: info hello`, "@", `UNCX.network and include 'Update Personal Information' in the subject line.
(c) Object to Processing You may have the right to object to us processing your information in certain circumstances. This right applies when we are processing your personal information based on a legitimate interest (or those of a third party), which you may challenge if you feel it impacts your fundamental rights and freedoms. You also have the right to object where we are processing your personal information for direct marketing purposes. However, in some cases, we may demonstrate that we have compelling legitimate ground to process your information or legal obligations which override your rights and freedoms. If you would like to make such a request, please contact us at: hello`, "@", `UNCX.network with 'Object to Processing' in the subject line.
(d) Erasure of Your Personal Information. You may ask us to delete or remove personal information where there is no legal reason for us to continue using it. You also have the right to ask us to delete or remove your personal information where you successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal information to comply with law. Please note that we may not always be able to comply with your request of erasure for specific legal reasons which we will notify you, if applicable, at the time of your request. If you would like to make such a request, please contact us at: hello`, "@", `UNCX.network with 'Erasure of Personal Information' in the subject line.
If you wish to exercise any of the rights set above, please send a request to info`, "@", "UNCX.com. We will need you to provide specific information to help us confirm your identity. This is a security measure to help ensure that your personal information is not disclosed to someone that does not have the right to receive it."])
                }
            }]
        }
    },
    fn = ["en"],
    Db = {
        en: [{
            key: "../locales/en.json",
            load: () => Promise.resolve(zb)
        }]
    },
    Fb = Object({}),
    Mb = async e => {
        const t = Object({}),
            n = async r => Object({
                legacy: !1,
                messages: Object({
                    en: {}
                })
            });
        return t.vueI18n = await n(), t.locales = [Object({
            code: "en",
            iso: "en-US",
            file: "en.json",
            path: "/var/data/www/pablo/uncx-website-production/locales/en.json"
        })], t.defaultLocale = "en", t.defaultDirection = "ltr", t.routesNameSeparator = "___", t.trailingSlash = !1, t.defaultLocaleRouteNameSuffix = "default", t.strategy = "prefix_except_default", t.lazy = !1, t.langDir = "./locales/", t.rootRedirect = null, t.detectBrowserLanguage = Object({
            alwaysRedirect: !1,
            cookieCrossOrigin: !1,
            cookieDomain: null,
            cookieKey: "i18n_redirected",
            cookieSecure: !1,
            fallbackLocale: "",
            redirectOn: "root",
            useCookie: !0
        }), t.differentDomains = !1, t.baseUrl = "", t.dynamicRouteParams = !1, t.customRoutes = "page", t.pages = Object({}), t.skipSettingLocaleOnNavigate = !1, t.onBeforeLanguageSwitch = () => "", t.onLanguageSwitched = () => null, t.types = void 0, t.debug = !1, t
    },
    Xe = Object({
        vueI18n: void 0,
        locales: [],
        defaultLocale: "",
        defaultDirection: "ltr",
        routesNameSeparator: "___",
        trailingSlash: !1,
        defaultLocaleRouteNameSuffix: "default",
        strategy: "prefix_except_default",
        lazy: !1,
        langDir: null,
        rootRedirect: null,
        detectBrowserLanguage: Object({
            alwaysRedirect: !1,
            cookieCrossOrigin: !1,
            cookieDomain: null,
            cookieKey: "i18n_redirected",
            cookieSecure: !1,
            fallbackLocale: "",
            redirectOn: "root",
            useCookie: !0
        }),
        differentDomains: !1,
        baseUrl: "",
        dynamicRouteParams: !1,
        customRoutes: "page",
        pages: Object({}),
        skipSettingLocaleOnNavigate: !1,
        onBeforeLanguageSwitch: () => "",
        onLanguageSwitched: () => null,
        types: void 0,
        debug: !1
    }),
    Ds = Object({
        __normalizedLocales: [Object({
            code: "en",
            iso: "en-US",
            file: "en.json",
            path: "/var/data/www/pablo/uncx-website-production/locales/en.json"
        })]
    }),
    lf = "@nuxtjs/i18n",
    Ub = !1; /*! js-cookie v3.0.5 | MIT */
function xr(e) {
    for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n) e[r] = n[r]
    }
    return e
}
var $b = {
    read: function(e) {
        return e[0] === '"' && (e = e.slice(1, -1)), e.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
    },
    write: function(e) {
        return encodeURIComponent(e).replace(/%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g, decodeURIComponent)
    }
};

function Fs(e, t) {
    function n(o, s, i) {
        if (!(typeof document > "u")) {
            i = xr({}, t, i), typeof i.expires == "number" && (i.expires = new Date(Date.now() + i.expires * 864e5)), i.expires && (i.expires = i.expires.toUTCString()), o = encodeURIComponent(o).replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent).replace(/[()]/g, escape);
            var a = "";
            for (var l in i) i[l] && (a += "; " + l, i[l] !== !0 && (a += "=" + i[l].split(";")[0]));
            return document.cookie = o + "=" + e.write(s, o) + a
        }
    }

    function r(o) {
        if (!(typeof document > "u" || arguments.length && !o)) {
            for (var s = document.cookie ? document.cookie.split("; ") : [], i = {}, a = 0; a < s.length; a++) {
                var l = s[a].split("="),
                    c = l.slice(1).join("=");
                try {
                    var u = decodeURIComponent(l[0]);
                    if (i[u] = e.read(c, u), o === u) break
                } catch {}
            }
            return o ? i[o] : i
        }
    }
    return Object.create({
        set: n,
        get: r,
        remove: function(o, s) {
            n(o, "", xr({}, s, {
                expires: -1
            }))
        },
        withAttributes: function(o) {
            return Fs(this.converter, xr({}, this.attributes, o))
        },
        withConverter: function(o) {
            return Fs(xr({}, this.converter, o), this.attributes)
        }
    }, {
        attributes: {
            value: Object.freeze(t)
        },
        converter: {
            value: Object.freeze(e)
        }
    })
}
var cf = Fs($b, {
    path: "/"
});

function Jr(e) {
    return lf + " " + e
}

function Hb(e) {
    return e != null && ("__VUE_I18N_BRIDGE__" in e || "_sync" in e)
}

function Lo(e, t, ...n) {
    const r = sn(e) ? e.global : e,
        [o, s] = [r, r[t]];
    return Reflect.apply(s, o, [...n])
}

function jb(e, t) {
    const n = sn(e) ? e.global : e;
    return Mn(n) ? n[t].value : (vr(n) || Ut(n) || Hb(n), n[t])
}

function bl(e, t, n) {
    Object.defineProperty(e, t, {
        get: () => n
    })
}

function Bb(e, t) {
    return function() {
        return Reflect.apply(t, {
            i18n: e.$i18n,
            getRouteBaseName: e.$getRouteBaseName,
            localePath: e.$localePath,
            localeRoute: e.$localeRoute,
            switchLocalePath: e.$switchLocalePath,
            localeHead: e.$localeHead,
            route: e.$router.currentRoute.value,
            router: e.$router
        }, arguments)
    }
}

function uf(e, t) {
    for (const n in e) fe(e[n]) ? (fe(t[n]) || (t[n] = {}), uf(e[n], t[n])) : t[n] = e[n]
}
async function Ms(e, t) {
    let n = null;
    try {
        const r = await t().then(o => o.default || o);
        ve(r) ? console.error(Jr("Not support executable file (e.g. js, cjs, mjs)")) : n = r
    } catch (r) {
        console.error(Jr("Failed locale loading: " + r.message))
    }
    return n
}
const Vo = [],
    dn = new Map;
async function Qr(e, t, n) {
    if (Vo.includes(t)) console.warn(Jr("Could not find " + t + " locale code in localeMessages"));
    else {
        const r = Db[t];
        if (r != null) {
            if (r.length === 1) {
                const {
                    key: o,
                    load: s
                } = r[0];
                let i = null;
                dn.has(o) ? i = dn.get(o) : (i = await Ms(e, s), i != null && dn.set(o, i)), i != null && (n(t, i), Vo.push(t))
            } else if (r.length > 1) {
                const o = {};
                for (const {
                        key: s,
                        load: i
                    } of r) {
                    let a = null;
                    dn.has(s) ? a = dn.get(s) : (a = await Ms(e, i), a != null && dn.set(s, a)), a != null && uf(a, o)
                }
                n(t, o), Vo.push(t)
            }
        }
    }
}
const vl = [];
async function Wb(e, t, n) {
    if (!vl.includes(t)) {
        const r = Fb[t] || [];
        for (const o of r) {
            const s = await Ms(e, o);
            s != null && (n(t, s), vl.push(t))
        }
    }
}

function ff(e, t) {
    let n;
    return navigator.languages && (n = pb(e.__normalizedLocales, navigator.languages)), n
}

function Li(e, {
    useCookie: t = Xe.detectBrowserLanguage.useCookie,
    cookieKey: n = Xe.detectBrowserLanguage.cookieKey,
    localeCodes: r = []
} = {}) {
    if (t) {
        let o;
        if (o = cf.get(n), o && r.includes(o)) return o
    }
}

function Vb(e, t, {
    useCookie: n = Xe.detectBrowserLanguage.useCookie,
    cookieKey: r = Xe.detectBrowserLanguage.cookieKey,
    cookieDomain: o = Xe.detectBrowserLanguage.cookieDomain,
    cookieSecure: s = Xe.detectBrowserLanguage.cookieSecure,
    cookieCrossOrigin: i = Xe.detectBrowserLanguage.cookieCrossOrigin
} = {}) {
    if (!n) return;
    const a = new Date,
        l = {
            expires: new Date(a.setDate(a.getDate() + 365)),
            path: "/",
            sameSite: i ? "none" : "lax",
            secure: i || s
        };
    o && (l.domain = o), cf.set(r, e, l)
}
const Xb = {
    locale: "",
    stat: !1,
    reason: "unknown",
    from: "unknown"
};

function Kb(e, t, n, r, o = [], s = "", i) {
    const {
        strategy: a
    } = n, {
        redirectOn: l,
        alwaysRedirect: c,
        useCookie: u,
        fallbackLocale: f
    } = n.detectBrowserLanguage, d = X(e) ? e : e.path;
    if (a !== "no_prefix") {
        if (l === "root") {
            if (d !== "/") return {
                locale: "",
                stat: !1,
                reason: "not_redirect_on_root"
            }
        } else if (l === "no prefix" && !c && d.match(nf(o))) return {
            locale: "",
            stat: !1,
            reason: "not_redirect_on_no_prefix"
        }
    }
    let p = "unknown",
        g, v;
    u && (v = g = Li(t, { ...n.detectBrowserLanguage,
        localeCodes: o
    }), p = "cookie"), v || (v = ff(r), p = "navigator_or_header");
    const C = v || f;
    !v && f && (p = "fallback");
    const b = s || n.vueI18n.locale;
    if (C && (!u || c || !g)) {
        if (a === "no_prefix") return {
            locale: C,
            stat: !0,
            from: p
        };
        if (C !== b) return {
            locale: C,
            stat: !0,
            from: p
        };
        if (c && d === "/") return {
            locale: C,
            stat: !0,
            from: p
        }
    }
    return i === "ssg_setup" && C ? {
        locale: C,
        stat: !0,
        from: p
    } : {
        locale: "",
        stat: !1,
        reason: "not_found_match"
    }
}

function qb() {
    let e;
    return e = window.location.host, e
}

function Yb(e) {
    let t = qb() || "";
    if (t) {
        const n = e.find(r => r.domain === t);
        if (n) return n.code;
        t = ""
    }
    return t
}

function df(e, t, n) {
    const r = t.find(o => o.code === e);
    if (r && r.domain) {
        if (_r(r.domain)) return r.domain;
        let o;
        return o = window.location.protocol.split(":")[0], o + "://" + r.domain
    }
    console.warn(Jr("Could not find domain name for locale " + e))
}

function Gb(e, t) {
    return Lo(e, "setLocaleCookie", t)
}

function hf(e, t, n) {
    return Lo(e, "mergeLocaleMessage", t, n)
}

function Jb(e, t, n, r, o) {
    return Lo(e, "onBeforeLanguageSwitch", t, n, r, o)
}

function Qb(e, t, n) {
    return Lo(e, "onLanguageSwitched", t, n)
}

function mf(e, t) {
    let n = [];
    if (Te(e)) n = e;
    else if (fe(e)) {
        const r = [...t, "default"];
        for (const o of r) e[o] && (n = [...n, ...e[o].filter(Boolean)])
    } else X(e) && t.every(r => r !== e) && n.push(e);
    return n
}
async function Zb(e, t, n) {
    const {
        defaultLocale: r,
        initialLocale: o,
        localeCodes: s,
        fallbackLocale: i,
        langDir: a,
        lazy: l
    } = n, c = (u, f) => {
        const d = t[u] || {};
        t[u] = { ...d,
            ...f
        }
    };
    if (a) {
        if (l && i) {
            const f = mf(i, [r, o]);
            await Promise.all(f.map(d => Qr(e, d, c)))
        }
        const u = l ? [...new Set().add(r).add(o)] : s;
        await Promise.all(u.map(f => Qr(e, f, c)))
    }
    return t
}
async function pf(e, t, n) {
    await Wb(e, n, (r, o) => hf(t, r, o))
}
async function wl(e, t, n, {
    useCookie: r = Xe.detectBrowserLanguage.useCookie,
    skipSettingLocaleOnNavigate: o = Xe.skipSettingLocaleOnNavigate,
    differentDomains: s = Xe.differentDomains,
    initial: i = !1,
    lazy: a = !1,
    langDir: l = null
} = {}) {
    let c = !1;
    const u = To(n);
    if (!e) return [c, u];
    if (!i && s) return [c, u];
    if (u === e) return [c, u];
    const f = Jb(n, u, e, i, t),
        d = ub(n);
    if (f && d && d.includes(f)) {
        if (f === u) return [c, u];
        e = f
    }
    if (l) {
        const p = jb(n, "fallbackLocale");
        if (a) {
            const g = (v, C) => hf(n, v, C);
            if (p) {
                const v = mf(p, [e]);
                await Promise.all(v.map(C => Qr(t, C, g)))
            }
            await Qr(t, e, g)
        }
    }
    return await pf(t, n, e), o ? [c, u] : (r && Gb(n, e), ef(n, e), Qb(n, u, e), c = !0, [c, u])
}

function El(e, t, n, r, o, s, i = [], a = "normal") {
    const {
        strategy: l,
        defaultLocale: c,
        differentDomains: u
    } = r, f = ve(o) ? o() : o, {
        locale: d,
        stat: p,
        reason: g,
        from: v
    } = r.detectBrowserLanguage ? Kb(e, t, r, Ds, i, f, a) : Xb;
    if (g === "detect_ignore_on_ssg") return f;
    let C = d;
    return C || (u ? C = Yb(s) : l !== "no_prefix" ? C = n(e) : r.detectBrowserLanguage || (C = f)), !C && r.detectBrowserLanguage && r.detectBrowserLanguage.useCookie && (C = Li(t, { ...r.detectBrowserLanguage,
        localeCodes: i
    })), C || (C = c || ""), C
}

function Tl(e, t, n, r, o) {
    const {
        strategy: s,
        defaultLocale: i,
        differentDomains: a
    } = o;
    let l = "";
    if (!a && s !== "no_prefix" && (r(e) !== n || s === "prefix_and_default" && n === i)) {
        const {
            fullPath: c
        } = e, u = decodeURI(c), f = t.$switchLocalePath(n) || t.$localePath(c, n);
        X(f) && f && f !== c && f !== u && !f.startsWith("//") && (l = f)
    }
    if (a || Ub) {
        const u = xb({
            i18n: dr(t.$i18n),
            route: e,
            router: t.$router
        })(n);
        X(u) && (l = u)
    }
    return l
}

function ev(e) {
    return fe(e) && "path" in e && "statusCode" in e
}
const tv = () => mu(lf + ":redirect", () => "");

function Cl(e, t) {
    return cg(e, {
        redirectCode: t
    })
}
async function Ll(e, {
    status: t = 301,
    rootRedirect: n = Xe.rootRedirect,
    differentDomains: r = Xe.differentDomains,
    skipSettingLocaleOnNavigate: o = Xe.skipSettingLocaleOnNavigate
} = {}) {
    const {
        i18n: s,
        locale: i,
        route: a
    } = e;
    let {
        redirectPath: l
    } = e;
    if (a.path === "/" && n) return X(n) ? l = "/" + n : ev(n) && (l = "/" + n.path, t = n.statusCode), Cl(l, t);
    if (o) {
        s.__pendingLocale = i, s.__pendingLocalePromise = new Promise(c => {
            s.__resolvePendingLocalePromise = c
        });
        return
    }
    if (r) {
        const c = tv();
        c.value !== l && (c.value = "", window.location.assign(l))
    } else if (l) return Cl(l, t)
}

function nv(e, t) {
    bl(e, "$i18n", t.global);
    for (const n of [
            ["getRouteBaseName", Nn],
            ["localePath", Ti],
            ["localeRoute", Ci],
            ["switchLocalePath", hr],
            ["localeHead", sf]
        ]) bl(e, "$" + n[0], Bb(e, n[1]))
}

function rv(e) {
    return t => rf(t) && !e
}

function ov(e, t, n) {
    return (r, o) => {
        if (e) {
            const s = df(o, t);
            return s ? yr(s, r) : r
        } else return of(r)
    }
}

function sv(e, t) {
    return n => {
        if (ve(e)) return e(n);
        const {
            differentDomains: r,
            localeCodeLoader: o,
            normalizedLocales: s
        } = t, i = ve(o) ? o() : o;
        if (r && i) {
            const a = df(i, s, t.nuxt);
            if (a) return a
        }
        return e
    }
}
const iv = Lt(async e => {
        let t, n;
        const r = Fn(),
            o = hi(),
            {
                vueApp: s
            } = e,
            i = e,
            a = ([t, n] = Gt(() => Mb()), t = await t, n(), t),
            l = a.detectBrowserLanguage && a.detectBrowserLanguage.useCookie,
            {
                __normalizedLocales: c
            } = Ds,
            {
                defaultLocale: u,
                differentDomains: f,
                skipSettingLocaleOnNavigate: d,
                lazy: p,
                langDir: g,
                routesNameSeparator: v,
                defaultLocaleRouteNameSuffix: C,
                strategy: b,
                rootRedirect: m
            } = a;
        a.baseUrl = sv(a.baseUrl, {
            differentDomains: f,
            nuxt: i,
            localeCodeLoader: u,
            normalizedLocales: c
        });
        const S = Eb(fn, v, C),
            y = a.vueI18n;
        y.messages = y.messages || {}, y.fallbackLocale = y.fallbackLocale ? ? !1, vb(r, { ...a,
            dynamicRouteParamsKey: "nuxtI18n",
            switchLocalePathIntercepter: ov(f, c),
            prefixable: rv(f)
        });
        const w = k => k || y.locale || "en-US";
        let A = El(o, e.ssrContext, S, a, w(u), c, fn, "normal");
        y.messages = ([t, n] = Gt(() => Zb(i, y.messages, { ...a,
            initialLocale: A,
            fallbackLocale: y.fallbackLocale,
            localeCodes: fn
        })), t = await t, n(), t), A = w(A);
        const P = Uy({ ...y,
            locale: A
        });
        let L = !0;
        const F = k => A !== k && L;
        gb(P, {
            locales: a.locales,
            localeCodes: fn,
            baseUrl: a.baseUrl,
            context: i,
            hooks: {
                onExtendComposer(k) {
                    k.strategy = b, k.localeProperties = me(() => c.find(O => O.code === k.locale.value) || {
                        code: k.locale.value
                    }), k.setLocale = async O => {
                        const B = F(O),
                            [U] = await wl(O, i, P, {
                                useCookie: l,
                                differentDomains: f,
                                initial: B,
                                skipSettingLocaleOnNavigate: d,
                                lazy: p,
                                langDir: g
                            });
                        U && B && (L = !1);
                        const Q = Tl(o, i, O, S, a);
                        await Ll({
                            i18n: P,
                            redirectPath: Q,
                            locale: O,
                            route: o
                        }, {
                            differentDomains: f,
                            skipSettingLocaleOnNavigate: d,
                            rootRedirect: m
                        })
                    }, k.differentDomains = f, k.getBrowserLocale = () => ff(Ds, e.ssrContext), k.getLocaleCookie = () => Li(e.ssrContext, { ...a.detectBrowserLanguage,
                        localeCodes: fn
                    }), k.setLocaleCookie = O => Vb(O, e.ssrContext, a.detectBrowserLanguage || void 0), k.onBeforeLanguageSwitch = a.onBeforeLanguageSwitch, k.onLanguageSwitched = a.onLanguageSwitched, k.finalizePendingLocaleChange = async () => {
                        P.__pendingLocale && (ef(P, P.__pendingLocale), P.__resolvePendingLocalePromise && await P.__resolvePendingLocalePromise(), P.__pendingLocale = void 0)
                    }, k.waitForPendingLocaleChange = async () => {
                        P.__pendingLocale && P.__pendingLocalePromise && await P.__pendingLocalePromise
                    }
                },
                onExtendExportedGlobal(k) {
                    return {
                        strategy: {
                            get() {
                                return k.strategy
                            }
                        },
                        localeProperties: {
                            get() {
                                return k.localeProperties.value
                            }
                        },
                        setLocale: {
                            get() {
                                return async O => Reflect.apply(k.setLocale, k, [O])
                            }
                        },
                        differentDomains: {
                            get() {
                                return k.differentDomains
                            }
                        },
                        getBrowserLocale: {
                            get() {
                                return () => Reflect.apply(k.getBrowserLocale, k, [])
                            }
                        },
                        getLocaleCookie: {
                            get() {
                                return () => Reflect.apply(k.getLocaleCookie, k, [])
                            }
                        },
                        setLocaleCookie: {
                            get() {
                                return O => Reflect.apply(k.setLocaleCookie, k, [O])
                            }
                        },
                        onBeforeLanguageSwitch: {
                            get() {
                                return (O, B, U, Q) => Reflect.apply(k.onBeforeLanguageSwitch, k, [O, B, U, Q])
                            }
                        },
                        onLanguageSwitched: {
                            get() {
                                return (O, B) => Reflect.apply(k.onLanguageSwitched, k, [O, B])
                            }
                        },
                        finalizePendingLocaleChange: {
                            get() {
                                return () => Reflect.apply(k.finalizePendingLocaleChange, k, [])
                            }
                        },
                        waitForPendingLocaleChange: {
                            get() {
                                return () => Reflect.apply(k.waitForPendingLocaleChange, k, [])
                            }
                        }
                    }
                },
                onExtendVueI18n(k) {
                    return {
                        strategy: {
                            get() {
                                return k.strategy
                            }
                        },
                        localeProperties: {
                            get() {
                                return k.localeProperties.value
                            }
                        },
                        setLocale: {
                            get() {
                                return async O => Reflect.apply(k.setLocale, k, [O])
                            }
                        },
                        differentDomains: {
                            get() {
                                return k.differentDomains
                            }
                        },
                        getBrowserLocale: {
                            get() {
                                return () => Reflect.apply(k.getBrowserLocale, k, [])
                            }
                        },
                        getLocaleCookie: {
                            get() {
                                return () => Reflect.apply(k.getLocaleCookie, k, [])
                            }
                        },
                        setLocaleCookie: {
                            get() {
                                return O => Reflect.apply(k.setLocaleCookie, k, [O])
                            }
                        },
                        onBeforeLanguageSwitch: {
                            get() {
                                return (O, B, U, Q) => Reflect.apply(k.onBeforeLanguageSwitch, k, [O, B, U, Q])
                            }
                        },
                        onLanguageSwitched: {
                            get() {
                                return (O, B) => Reflect.apply(k.onLanguageSwitched, k, [O, B])
                            }
                        },
                        finalizePendingLocaleChange: {
                            get() {
                                return () => Reflect.apply(k.finalizePendingLocaleChange, k, [])
                            }
                        },
                        waitForPendingLocaleChange: {
                            get() {
                                return () => Reflect.apply(k.waitForPendingLocaleChange, k, [])
                            }
                        }
                    }
                }
            }
        });
        const $ = {
            __composerExtend: k => {
                const O = dr(P);
                k.strategy = O.strategy, k.localeProperties = me(() => O.localeProperties.value), k.setLocale = O.setLocale, k.differentDomains = O.differentDomains, k.getBrowserLocale = O.getBrowserLocale, k.getLocaleCookie = O.getLocaleCookie, k.setLocaleCookie = O.setLocaleCookie, k.onBeforeLanguageSwitch = O.onBeforeLanguageSwitch, k.onLanguageSwitched = O.onLanguageSwitched, k.finalizePendingLocaleChange = O.finalizePendingLocaleChange, k.waitForPendingLocaleChange = O.waitForPendingLocaleChange
            }
        };
        s.use(P, $), nv(i, P), [t, n] = Gt(() => pf(i, P, A)), await t, n(), ag("locale-changing", pu(async (k, O) => {
            let B, U;
            const Q = El(k, e.ssrContext, S, a, () => To(P) || w(u), c, fn, "normal"),
                ne = F(Q),
                [ee] = ([B, U] = Gt(() => wl(Q, i, P, {
                    useCookie: l,
                    differentDomains: f,
                    initial: ne,
                    skipSettingLocaleOnNavigate: d,
                    lazy: p,
                    langDir: g
                })), B = await B, U(), B);
            ee && ne && (L = !1);
            const oe = Tl(k, i, Q, S, a);
            return Ll({
                i18n: P,
                redirectPath: oe,
                locale: Q,
                route: k
            }, {
                differentDomains: f,
                skipSettingLocaleOnNavigate: d,
                rootRedirect: m
            })
        }), {
            global: !0
        })
    }),
    av = Lt(e => {
        const t = Fn(),
            n = nu(),
            r = new Set;
        t.beforeEach(() => {
            r.clear()
        }), e.hook("app:chunkError", ({
            error: o
        }) => {
            r.add(o)
        }), t.onError((o, s) => {
            if (r.has(o)) {
                const a = "href" in s && s.href.startsWith("#") ? n.app.baseURL + s.href : yr(n.app.baseURL, s.fullPath);
                pg({
                    path: a,
                    persistState: !0
                })
            }
        })
    }),
    lv = [gg, _g, Eg, Cg, x_, z_, D_, iv, av],
    cv = (e, t) => t.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, n => {
        var r;
        return ((r = e.params[n.slice(1)]) == null ? void 0 : r.toString()) || ""
    }),
    uv = (e, t) => {
        const n = e.route.matched.find(o => {
                var s;
                return ((s = o.components) == null ? void 0 : s.default) === e.Component.type
            }),
            r = t ? ? (n == null ? void 0 : n.meta.key) ? ? (n && cv(e.route, n));
        return typeof r == "function" ? r(e.route) : r
    },
    fv = (e, t) => ({
        default: () => e ? Ke(Od, e === !0 ? {} : e, t) : t
    }),
    dv = lt({
        name: "FragmentWrapper",
        setup(e, {
            slots: t
        }) {
            return () => {
                var n;
                return (n = t.default) == null ? void 0 : n.call(t)
            }
        }
    }),
    Us = (e, t, n) => ({
        default: () => t ? Ke(e, t === !0 ? {} : t, n) : Ke(dv, {}, n)
    }),
    hv = lt({
        name: "NuxtPage",
        inheritAttrs: !1,
        props: {
            name: {
                type: String
            },
            transition: {
                type: [Boolean, Object],
                default: void 0
            },
            keepalive: {
                type: [Boolean, Object],
                default: void 0
            },
            route: {
                type: Object
            },
            pageKey: {
                type: [Function, String],
                default: null
            }
        },
        setup(e, {
            attrs: t
        }) {
            const n = ze();
            return () => Ke(Pu, {
                name: e.name,
                route: e.route,
                ...t
            }, {
                default: r => {
                    if (!r.Component) return;
                    const o = uv(r, e.pageKey),
                        s = n.deferHydration(),
                        i = !!(e.transition ? ? r.route.meta.pageTransition ? ? vs),
                        a = i && pv([e.transition, r.route.meta.pageTransition, vs, {
                            onAfterLeave: () => {
                                n.callHook("page:transition:finish", r.Component)
                            }
                        }].filter(Boolean));
                    return Us(mo, i && a, fv(e.keepalive ? ? r.route.meta.keepalive ? ? vg, Ke(ac, {
                        onPending: () => n.callHook("page:start", r.Component),
                        onResolve: () => {
                            rn(() => n.callHook("page:finish", r.Component).finally(s))
                        }
                    }, {
                        default: () => Ke(gv, {
                            key: o,
                            routeProps: r,
                            pageKey: o,
                            hasTransition: i
                        })
                    }))).default()
                }
            })
        }
    });

function mv(e) {
    return Array.isArray(e) ? e : e ? [e] : []
}

function pv(e) {
    const t = e.map(n => ({ ...n,
        onAfterLeave: mv(n.onAfterLeave)
    }));
    return og(...t)
}
const gv = lt({
        name: "RouteProvider",
        props: ["routeProps", "pageKey", "hasTransition"],
        setup(e) {
            const t = e.pageKey,
                n = e.routeProps.route,
                r = {};
            for (const o in e.routeProps.route) r[o] = me(() => t === e.pageKey ? e.routeProps.route[o] : n[o]);
            return Cn("_route", gt(r)), () => Ke(e.routeProps.Component)
        }
    }),
    _v = lt({
        name: "LayoutLoader",
        inheritAttrs: !1,
        props: {
            name: String
        },
        async setup(e, t) {
            const n = await gn[e.name]().then(r => r.default || r);
            return () => Ke(n, t.attrs, t.slots)
        }
    }),
    yv = lt({
        name: "NuxtLayout",
        inheritAttrs: !1,
        props: {
            name: {
                type: [String, Boolean, Object],
                default: null
            }
        },
        setup(e, t) {
            const n = xe("_route"),
                r = n === hi() ? Su() : n,
                o = me(() => Ee(e.name) ? ? r.meta.layout ? ? "default");
            return () => {
                const s = o.value && o.value in gn,
                    i = r.meta.layoutTransition ? ? bg;
                return Us(mo, s && i, {
                    default: () => Us(_v, s && {
                        key: o.value,
                        name: o.value,
                        ...t.attrs
                    }, t.slots).default()
                }).default()
            }
        }
    }),
    bv = (e, t) => {
        const n = e.__vccOpts || e;
        for (const [r, o] of t) n[r] = o;
        return n
    },
    vv = {};

function wv(e, t) {
    const n = hv,
        r = yv;
    return zt(), Yt(r, null, {
        default: ei(() => [_e(n)]),
        _: 1
    })
}
const Ev = bv(vv, [
        ["render", wv]
    ]),
    kl = {
        __name: "nuxt-root",
        setup(e) {
            const t = re(() => q(() =>
                    import ("./error-component.ff0b7645.js"), [],
                    import.meta.url).then(a => a.default || a)),
                n = () => null,
                r = ze(),
                o = r.deferHydration();
            Cn("_route", hi()), r.hooks.callHookWith(a => a.map(l => l()), "vue:setup");
            const s = po();
            _c((a, l, c) => {
                r.hooks.callHook("vue:error", a, l, c).catch(u => console.error("[nuxt] Error in `vue:error` hook", u)), fg(a) && (a.fatal || a.unhandled) && vt(r, pn, [a])
            });
            const {
                islandContext: i
            } = !1;
            return (a, l) => (zt(), Yt(ac, {
                onResolve: Ee(o)
            }, {
                default: ei(() => [Ee(s) ? (zt(), Yt(Ee(t), {
                    key: 0,
                    error: Ee(s)
                }, null, 8, ["error"])) : Ee(i) ? (zt(), Yt(Ee(n), {
                    key: 1,
                    context: Ee(i)
                }, null, 8, ["context"])) : (zt(), Yt(Ee(Ev), {
                    key: 2
                }))]),
                _: 1
            }, 8, ["onResolve"]))
        }
    };
globalThis.$fetch || (globalThis.$fetch = Fm.create({
    baseURL: qm()
}));
let Rl;
const Tv = up(lv);
Rl = async function() {
    var o;
    const n = Boolean((o = window.__NUXT__) == null ? void 0 : o.serverRendered) ? Xh(kl) : Vh(kl),
        r = ap({
            vueApp: n
        });
    try {
        await cp(r, Tv)
    } catch (s) {
        await r.callHook("app:error", s), r.payload.error = r.payload.error || s
    }
    try {
        await r.hooks.callHook("app:created", n), await r.hooks.callHook("app:beforeMount", n), n.mount("#" + wg), await r.hooks.callHook("app:mounted", n), await rn()
    } catch (s) {
        await r.callHook("app:error", s), r.payload.error = r.payload.error || s
    }
}, Rl().catch(e => {
    console.error("Error while mounting app:", e)
});
export {
    Av as $, Se as A, Bv as B, ei as C, Ov as D, bv as E, ie as F, Sv as G, ze as H, gu as I, xd as J, oi as K, Fn as L, _r as M, co as N, uo as O, Jc as P, Hv as Q, cg as R, vo as S, tn as T, to as U, _e as V, Fv as W, no as X, Lv as Y, Oe as Z, q as _, lt as a, Iv as a0, Uv as a1, Wv as a2, ql as a3, Dl as a4, If as a5, Jo as a6, Vv as a7, mo as a8, xv as a9, gt as aa, kd as ab, Pv as ac, Mv as ad, he as ae, $v as af, pu as ag, kv as ah, Rv as ai, Qh as aj, zv as b, Yt as c, re as d, Dv as e, xc as f, ah as g, Nc as h, hi as i, rn as j, ng as k, nu as l, Nv as m, Cv as n, zt as o, Wm as p, Ke as q, me as r, mu as s, id as t, Ee as u, jv as v, it as w, yr as x, qc as y, ct as z
};