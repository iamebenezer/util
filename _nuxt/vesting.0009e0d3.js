import {
    _ as ye,
    a as Ee
} from "./Page.vue.e52fd804.js"; /* empty css                 */
import {
    _ as Ce,
    h as Pe
} from "./Section.6cf006c4.js";
import {
    c as Me
} from "./Waves.a713412c.js";
import {
    _ as _e
} from "./BlockchainLogo.4d82f840.js";
import {
    _ as Le
} from "./Page.7622f5df.js";
import {
    _ as ke
} from "./Section.e79dd368.js";
import {
    a as Ie
} from "./Scroll.88e82cb9.js";
import {
    S as ze,
    A as W,
    N as Oe,
    c as Ae,
    C as Ge,
    o as R,
    V as G,
    u as ie,
    h as M,
    b as re,
    $ as Ve,
    Z as Be,
    Y as j
} from "./entry.6795a269.js";
import "./App.80f13a2f.js";
import "./services.05816bf8.js";
import "./nuxt-link.52eebdb1.js"; /* empty css                    */
import "./Waves.vue.f4239951.js";
import "./_commonjsHelpers.28e086c5.js";
import "./Card.6e9ec9f6.js";
import "./BgUnicornMiddle.34cd4222.js";
import "./index.a61f72ed.js";
import "./BgUnicornTwo.c77a3fd9.js";
import "./client-only.2bc3c0c4.js";
const De = [{
    txt: "Since UNCX Network has existed, we have permanently collaborated with them. Whether it has been joint development projects or security assessment related (namely audits), Chainsulting and UNCX Network are very efficient at building together.",
    author: "Yannik, Co-Founder",
    society: "Chainsulting",
    logo: "/img/vesting/chainsulting-square-logo.png"
}, {
    txt: "We are very thankful for UNCX Network's team and services. Not only do they cover various security angles for tokenized business and ecosystem builders, but they are also a pleasure to work with. Keep it up!",
    author: "Frédérick Marihno",
    society: "Kryxivia",
    logo: "/img/vesting/kryxivia-square-logo.png"
}, {
    txt: "DEXTools and UNCX Network have been collaborating together very early in 2020 and ever since. We are happy to grow alongside them. The security services they offer ultimately serve our userbase for the better.",
    author: "Frederic, Co-Founder",
    society: "DEXTools",
    logo: "/img/vesting/dextools-square-logo.png"
}];

function ne(t) {
    return t !== null && typeof t == "object" && "constructor" in t && t.constructor === Object
}

function J(t = {}, e = {}) {
    Object.keys(e).forEach(s => {
        typeof t[s] > "u" ? t[s] = e[s] : ne(e[s]) && ne(t[s]) && Object.keys(e[s]).length > 0 && J(t[s], e[s])
    })
}
const pe = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: {
        blur() {},
        nodeName: ""
    },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return {
            initEvent() {}
        }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            }
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    }
};

function B() {
    const t = typeof document < "u" ? document : {};
    return J(t, pe), t
}
const Ne = {
    document: pe,
    navigator: {
        userAgent: ""
    },
    location: {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        protocol: "",
        search: ""
    },
    history: {
        replaceState() {},
        pushState() {},
        go() {},
        back() {}
    },
    CustomEvent: function() {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ""
            }
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(t) {
        return typeof setTimeout > "u" ? (t(), null) : setTimeout(t, 0)
    },
    cancelAnimationFrame(t) {
        typeof setTimeout > "u" || clearTimeout(t)
    }
};

function k() {
    const t = typeof window < "u" ? window : {};
    return J(t, Ne), t
}

function Fe(t) {
    const e = t;
    Object.keys(e).forEach(s => {
        try {
            e[s] = null
        } catch {}
        try {
            delete e[s]
        } catch {}
    })
}

function Z(t, e = 0) {
    return setTimeout(t, e)
}

function D() {
    return Date.now()
}

function $e(t) {
    const e = k();
    let s;
    return e.getComputedStyle && (s = e.getComputedStyle(t, null)), !s && t.currentStyle && (s = t.currentStyle), s || (s = t.style), s
}

function He(t, e = "x") {
    const s = k();
    let i, n, r;
    const l = $e(t);
    return s.WebKitCSSMatrix ? (n = l.transform || l.webkitTransform, n.split(",").length > 6 && (n = n.split(", ").map(o => o.replace(",", ".")).join(", ")), r = new s.WebKitCSSMatrix(n === "none" ? "" : n)) : (r = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), i = r.toString().split(",")), e === "x" && (s.WebKitCSSMatrix ? n = r.m41 : i.length === 16 ? n = parseFloat(i[12]) : n = parseFloat(i[4])), e === "y" && (s.WebKitCSSMatrix ? n = r.m42 : i.length === 16 ? n = parseFloat(i[13]) : n = parseFloat(i[5])), n || 0
}

function N(t) {
    return typeof t == "object" && t !== null && t.constructor && Object.prototype.toString.call(t).slice(8, -1) === "Object"
}

function We(t) {
    return typeof window < "u" && typeof window.HTMLElement < "u" ? t instanceof HTMLElement : t && (t.nodeType === 1 || t.nodeType === 11)
}

function L(...t) {
    const e = Object(t[0]),
        s = ["__proto__", "constructor", "prototype"];
    for (let i = 1; i < t.length; i += 1) {
        const n = t[i];
        if (n != null && !We(n)) {
            const r = Object.keys(Object(n)).filter(l => s.indexOf(l) < 0);
            for (let l = 0, o = r.length; l < o; l += 1) {
                const a = r[l],
                    d = Object.getOwnPropertyDescriptor(n, a);
                d !== void 0 && d.enumerable && (N(e[a]) && N(n[a]) ? n[a].__swiper__ ? e[a] = n[a] : L(e[a], n[a]) : !N(e[a]) && N(n[a]) ? (e[a] = {}, n[a].__swiper__ ? e[a] = n[a] : L(e[a], n[a])) : e[a] = n[a])
            }
        }
    }
    return e
}

function F(t, e, s) {
    t.style.setProperty(e, s)
}

function me({
    swiper: t,
    targetPosition: e,
    side: s
}) {
    const i = k(),
        n = -t.translate;
    let r = null,
        l;
    const o = t.params.speed;
    t.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t.cssModeFrameID);
    const a = e > n ? "next" : "prev",
        d = (f, u) => a === "next" && f >= u || a === "prev" && f <= u,
        p = () => {
            l = new Date().getTime(), r === null && (r = l);
            const f = Math.max(Math.min((l - r) / o, 1), 0),
                u = .5 - Math.cos(f * Math.PI) / 2;
            let c = n + u * (e - n);
            if (d(c, e) && (c = e), t.wrapperEl.scrollTo({
                    [s]: c
                }), d(c, e)) {
                t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                    t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                        [s]: c
                    })
                }), i.cancelAnimationFrame(t.cssModeFrameID);
                return
            }
            t.cssModeFrameID = i.requestAnimationFrame(p)
        };
    p()
}

function A(t, e = "") {
    return [...t.children].filter(s => s.matches(e))
}

function Re(t, e = []) {
    const s = document.createElement(t);
    return s.classList.add(...Array.isArray(e) ? e : [e]), s
}

function je(t, e) {
    const s = [];
    for (; t.previousElementSibling;) {
        const i = t.previousElementSibling;
        e ? i.matches(e) && s.push(i) : s.push(i), t = i
    }
    return s
}

function Xe(t, e) {
    const s = [];
    for (; t.nextElementSibling;) {
        const i = t.nextElementSibling;
        e ? i.matches(e) && s.push(i) : s.push(i), t = i
    }
    return s
}

function V(t, e) {
    return k().getComputedStyle(t, null).getPropertyValue(e)
}

function ae(t) {
    let e = t,
        s;
    if (e) {
        for (s = 0;
            (e = e.previousSibling) !== null;) e.nodeType === 1 && (s += 1);
        return s
    }
}

function Ye(t, e) {
    const s = [];
    let i = t.parentElement;
    for (; i;) e ? i.matches(e) && s.push(i) : s.push(i), i = i.parentElement;
    return s
}

function oe(t, e, s) {
    const i = k();
    return s ? t[e === "width" ? "offsetWidth" : "offsetHeight"] + parseFloat(i.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-right" : "margin-top")) + parseFloat(i.getComputedStyle(t, null).getPropertyValue(e === "width" ? "margin-left" : "margin-bottom")) : t.offsetWidth
}
let X;

function qe() {
    const t = k(),
        e = B();
    return {
        smoothScroll: e.documentElement && "scrollBehavior" in e.documentElement.style,
        touch: !!("ontouchstart" in t || t.DocumentTouch && e instanceof t.DocumentTouch)
    }
}

function he() {
    return X || (X = qe()), X
}
let Y;

function Ue({
    userAgent: t
} = {}) {
    const e = he(),
        s = k(),
        i = s.navigator.platform,
        n = t || s.navigator.userAgent,
        r = {
            ios: !1,
            android: !1
        },
        l = s.screen.width,
        o = s.screen.height,
        a = n.match(/(Android);?[\s\/]+([\d.]+)?/);
    let d = n.match(/(iPad).*OS\s([\d_]+)/);
    const p = n.match(/(iPod)(.*OS\s([\d_]+))?/),
        f = !d && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        u = i === "Win32";
    let c = i === "MacIntel";
    const h = ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"];
    return !d && c && e.touch && h.indexOf(`${l}x${o}`) >= 0 && (d = n.match(/(Version)\/([\d.]+)/), d || (d = [0, 1, "13_0_0"]), c = !1), a && !u && (r.os = "android", r.android = !0), (d || f || p) && (r.os = "ios", r.ios = !0), r
}

function Ke(t = {}) {
    return Y || (Y = Ue(t)), Y
}
let q;

function Ze() {
    const t = k();
    let e = !1;

    function s() {
        const i = t.navigator.userAgent.toLowerCase();
        return i.indexOf("safari") >= 0 && i.indexOf("chrome") < 0 && i.indexOf("android") < 0
    }
    if (s()) {
        const i = String(t.navigator.userAgent);
        if (i.includes("Version/")) {
            const [n, r] = i.split("Version/")[1].split(" ")[0].split(".").map(l => Number(l));
            e = n < 16 || n === 16 && r < 2
        }
    }
    return {
        isSafari: e || s(),
        needPerspectiveFix: e,
        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(t.navigator.userAgent)
    }
}

function Je() {
    return q || (q = Ze()), q
}

function Qe({
    swiper: t,
    on: e,
    emit: s
}) {
    const i = k();
    let n = null,
        r = null;
    const l = () => {
            !t || t.destroyed || !t.initialized || (s("beforeResize"), s("resize"))
        },
        o = () => {
            !t || t.destroyed || !t.initialized || (n = new ResizeObserver(p => {
                r = i.requestAnimationFrame(() => {
                    const {
                        width: f,
                        height: u
                    } = t;
                    let c = f,
                        h = u;
                    p.forEach(({
                        contentBoxSize: m,
                        contentRect: w,
                        target: g
                    }) => {
                        g && g !== t.el || (c = w ? w.width : (m[0] || m).inlineSize, h = w ? w.height : (m[0] || m).blockSize)
                    }), (c !== f || h !== u) && l()
                })
            }), n.observe(t.el))
        },
        a = () => {
            r && i.cancelAnimationFrame(r), n && n.unobserve && t.el && (n.unobserve(t.el), n = null)
        },
        d = () => {
            !t || t.destroyed || !t.initialized || s("orientationchange")
        };
    e("init", () => {
        if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
            o();
            return
        }
        i.addEventListener("resize", l), i.addEventListener("orientationchange", d)
    }), e("destroy", () => {
        a(), i.removeEventListener("resize", l), i.removeEventListener("orientationchange", d)
    })
}

function et({
    swiper: t,
    extendParams: e,
    on: s,
    emit: i
}) {
    const n = [],
        r = k(),
        l = (d, p = {}) => {
            const f = r.MutationObserver || r.WebkitMutationObserver,
                u = new f(c => {
                    if (t.__preventObserver__) return;
                    if (c.length === 1) {
                        i("observerUpdate", c[0]);
                        return
                    }
                    const h = function() {
                        i("observerUpdate", c[0])
                    };
                    r.requestAnimationFrame ? r.requestAnimationFrame(h) : r.setTimeout(h, 0)
                });
            u.observe(d, {
                attributes: typeof p.attributes > "u" ? !0 : p.attributes,
                childList: typeof p.childList > "u" ? !0 : p.childList,
                characterData: typeof p.characterData > "u" ? !0 : p.characterData
            }), n.push(u)
        },
        o = () => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const d = Ye(t.el);
                    for (let p = 0; p < d.length; p += 1) l(d[p])
                }
                l(t.el, {
                    childList: t.params.observeSlideChildren
                }), l(t.wrapperEl, {
                    attributes: !1
                })
            }
        },
        a = () => {
            n.forEach(d => {
                d.disconnect()
            }), n.splice(0, n.length)
        };
    e({
        observer: !1,
        observeParents: !1,
        observeSlideChildren: !1
    }), s("init", o), s("destroy", a)
}
const tt = {
    on(t, e, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
        const n = s ? "unshift" : "push";
        return t.split(" ").forEach(r => {
            i.eventsListeners[r] || (i.eventsListeners[r] = []), i.eventsListeners[r][n](e)
        }), i
    },
    once(t, e, s) {
        const i = this;
        if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;

        function n(...r) {
            i.off(t, n), n.__emitterProxy && delete n.__emitterProxy, e.apply(i, r)
        }
        return n.__emitterProxy = e, i.on(t, n, s)
    },
    onAny(t, e) {
        const s = this;
        if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;
        const i = e ? "unshift" : "push";
        return s.eventsAnyListeners.indexOf(t) < 0 && s.eventsAnyListeners[i](t), s
    },
    offAny(t) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsAnyListeners) return e;
        const s = e.eventsAnyListeners.indexOf(t);
        return s >= 0 && e.eventsAnyListeners.splice(s, 1), e
    },
    off(t, e) {
        const s = this;
        return !s.eventsListeners || s.destroyed || !s.eventsListeners || t.split(" ").forEach(i => {
            typeof e > "u" ? s.eventsListeners[i] = [] : s.eventsListeners[i] && s.eventsListeners[i].forEach((n, r) => {
                (n === e || n.__emitterProxy && n.__emitterProxy === e) && s.eventsListeners[i].splice(r, 1)
            })
        }), s
    },
    emit(...t) {
        const e = this;
        if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
        let s, i, n;
        return typeof t[0] == "string" || Array.isArray(t[0]) ? (s = t[0], i = t.slice(1, t.length), n = e) : (s = t[0].events, i = t[0].data, n = t[0].context || e), i.unshift(n), (Array.isArray(s) ? s : s.split(" ")).forEach(l => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(o => {
                o.apply(n, [l, ...i])
            }), e.eventsListeners && e.eventsListeners[l] && e.eventsListeners[l].forEach(o => {
                o.apply(n, i)
            })
        }), e
    }
};

function st() {
    const t = this;
    let e, s;
    const i = t.el;
    typeof t.params.width < "u" && t.params.width !== null ? e = t.params.width : e = i.clientWidth, typeof t.params.height < "u" && t.params.height !== null ? s = t.params.height : s = i.clientHeight, !(e === 0 && t.isHorizontal() || s === 0 && t.isVertical()) && (e = e - parseInt(V(i, "padding-left") || 0, 10) - parseInt(V(i, "padding-right") || 0, 10), s = s - parseInt(V(i, "padding-top") || 0, 10) - parseInt(V(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(s) && (s = 0), Object.assign(t, {
        width: e,
        height: s,
        size: t.isHorizontal() ? e : s
    }))
}

function it() {
    const t = this;

    function e(v) {
        return t.isHorizontal() ? v : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
        }[v]
    }

    function s(v, T) {
        return parseFloat(v.getPropertyValue(e(T)) || 0)
    }
    const i = t.params,
        {
            wrapperEl: n,
            slidesEl: r,
            size: l,
            rtlTranslate: o,
            wrongRTL: a
        } = t,
        d = t.virtual && i.virtual.enabled,
        p = d ? t.virtual.slides.length : t.slides.length,
        f = A(r, `.${t.params.slideClass}, swiper-slide`),
        u = d ? t.virtual.slides.length : f.length;
    let c = [];
    const h = [],
        m = [];
    let w = i.slidesOffsetBefore;
    typeof w == "function" && (w = i.slidesOffsetBefore.call(t));
    let g = i.slidesOffsetAfter;
    typeof g == "function" && (g = i.slidesOffsetAfter.call(t));
    const E = t.snapGrid.length,
        S = t.slidesGrid.length;
    let b = i.spaceBetween,
        y = -w,
        x = 0,
        _ = 0;
    if (typeof l > "u") return;
    typeof b == "string" && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * l), t.virtualSize = -b, f.forEach(v => {
        o ? v.style.marginLeft = "" : v.style.marginRight = "", v.style.marginBottom = "", v.style.marginTop = ""
    }), i.centeredSlides && i.cssMode && (F(n, "--swiper-centered-offset-before", ""), F(n, "--swiper-centered-offset-after", ""));
    const O = i.grid && i.grid.rows > 1 && t.grid;
    O && t.grid.initSlides(u);
    let P;
    const we = i.slidesPerView === "auto" && i.breakpoints && Object.keys(i.breakpoints).filter(v => typeof i.breakpoints[v].slidesPerView < "u").length > 0;
    for (let v = 0; v < u; v += 1) {
        P = 0;
        let T;
        if (f[v] && (T = f[v]), O && t.grid.updateSlide(v, T, u, e), !(f[v] && V(T, "display") === "none")) {
            if (i.slidesPerView === "auto") {
                we && (f[v].style[e("width")] = "");
                const C = getComputedStyle(T),
                    z = T.style.transform,
                    H = T.style.webkitTransform;
                if (z && (T.style.transform = "none"), H && (T.style.webkitTransform = "none"), i.roundLengths) P = t.isHorizontal() ? oe(T, "width", !0) : oe(T, "height", !0);
                else {
                    const Q = s(C, "width"),
                        Se = s(C, "padding-left"),
                        Te = s(C, "padding-right"),
                        ee = s(C, "margin-left"),
                        te = s(C, "margin-right"),
                        se = C.getPropertyValue("box-sizing");
                    if (se && se === "border-box") P = Q + ee + te;
                    else {
                        const {
                            clientWidth: be,
                            offsetWidth: xe
                        } = T;
                        P = Q + Se + Te + ee + te + (xe - be)
                    }
                }
                z && (T.style.transform = z), H && (T.style.webkitTransform = H), i.roundLengths && (P = Math.floor(P))
            } else P = (l - (i.slidesPerView - 1) * b) / i.slidesPerView, i.roundLengths && (P = Math.floor(P)), f[v] && (f[v].style[e("width")] = `${P}px`);
            f[v] && (f[v].swiperSlideSize = P), m.push(P), i.centeredSlides ? (y = y + P / 2 + x / 2 + b, x === 0 && v !== 0 && (y = y - l / 2 - b), v === 0 && (y = y - l / 2 - b), Math.abs(y) < 1 / 1e3 && (y = 0), i.roundLengths && (y = Math.floor(y)), _ % i.slidesPerGroup === 0 && c.push(y), h.push(y)) : (i.roundLengths && (y = Math.floor(y)), (_ - Math.min(t.params.slidesPerGroupSkip, _)) % t.params.slidesPerGroup === 0 && c.push(y), h.push(y), y = y + P + b), t.virtualSize += P + b, x = P, _ += 1
        }
    }
    if (t.virtualSize = Math.max(t.virtualSize, l) + g, o && a && (i.effect === "slide" || i.effect === "coverflow") && (n.style.width = `${t.virtualSize+i.spaceBetween}px`), i.setWrapperSize && (n.style[e("width")] = `${t.virtualSize+i.spaceBetween}px`), O && t.grid.updateWrapperSize(P, c, e), !i.centeredSlides) {
        const v = [];
        for (let T = 0; T < c.length; T += 1) {
            let C = c[T];
            i.roundLengths && (C = Math.floor(C)), c[T] <= t.virtualSize - l && v.push(C)
        }
        c = v, Math.floor(t.virtualSize - l) - Math.floor(c[c.length - 1]) > 1 && c.push(t.virtualSize - l)
    }
    if (d && i.loop) {
        const v = m[0] + b;
        if (i.slidesPerGroup > 1) {
            const T = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / i.slidesPerGroup),
                C = v * i.slidesPerGroup;
            for (let z = 0; z < T; z += 1) c.push(c[c.length - 1] + C)
        }
        for (let T = 0; T < t.virtual.slidesBefore + t.virtual.slidesAfter; T += 1) i.slidesPerGroup === 1 && c.push(c[c.length - 1] + v), h.push(h[h.length - 1] + v), t.virtualSize += v
    }
    if (c.length === 0 && (c = [0]), i.spaceBetween !== 0) {
        const v = t.isHorizontal() && o ? "marginLeft" : e("marginRight");
        f.filter((T, C) => !i.cssMode || i.loop ? !0 : C !== f.length - 1).forEach(T => {
            T.style[v] = `${b}px`
        })
    }
    if (i.centeredSlides && i.centeredSlidesBounds) {
        let v = 0;
        m.forEach(C => {
            v += C + (i.spaceBetween ? i.spaceBetween : 0)
        }), v -= i.spaceBetween;
        const T = v - l;
        c = c.map(C => C < 0 ? -w : C > T ? T + g : C)
    }
    if (i.centerInsufficientSlides) {
        let v = 0;
        if (m.forEach(T => {
                v += T + (i.spaceBetween ? i.spaceBetween : 0)
            }), v -= i.spaceBetween, v < l) {
            const T = (l - v) / 2;
            c.forEach((C, z) => {
                c[z] = C - T
            }), h.forEach((C, z) => {
                h[z] = C + T
            })
        }
    }
    if (Object.assign(t, {
            slides: f,
            snapGrid: c,
            slidesGrid: h,
            slidesSizesGrid: m
        }), i.centeredSlides && i.cssMode && !i.centeredSlidesBounds) {
        F(n, "--swiper-centered-offset-before", `${-c[0]}px`), F(n, "--swiper-centered-offset-after", `${t.size/2-m[m.length-1]/2}px`);
        const v = -t.snapGrid[0],
            T = -t.slidesGrid[0];
        t.snapGrid = t.snapGrid.map(C => C + v), t.slidesGrid = t.slidesGrid.map(C => C + T)
    }
    if (u !== p && t.emit("slidesLengthChange"), c.length !== E && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), h.length !== S && t.emit("slidesGridLengthChange"), i.watchSlidesProgress && t.updateSlidesOffset(), !d && !i.cssMode && (i.effect === "slide" || i.effect === "fade")) {
        const v = `${i.containerModifierClass}backface-hidden`,
            T = t.el.classList.contains(v);
        u <= i.maxBackfaceHiddenSlides ? T || t.el.classList.add(v) : T && t.el.classList.remove(v)
    }
}

function rt(t) {
    const e = this,
        s = [],
        i = e.virtual && e.params.virtual.enabled;
    let n = 0,
        r;
    typeof t == "number" ? e.setTransition(t) : t === !0 && e.setTransition(e.params.speed);
    const l = o => i ? e.slides.filter(a => parseInt(a.getAttribute("data-swiper-slide-index"), 10) === o)[0] : e.slides[o];
    if (e.params.slidesPerView !== "auto" && e.params.slidesPerView > 1)
        if (e.params.centeredSlides)(e.visibleSlides || []).forEach(o => {
            s.push(o)
        });
        else
            for (r = 0; r < Math.ceil(e.params.slidesPerView); r += 1) {
                const o = e.activeIndex + r;
                if (o > e.slides.length && !i) break;
                s.push(l(o))
            } else s.push(l(e.activeIndex));
    for (r = 0; r < s.length; r += 1)
        if (typeof s[r] < "u") {
            const o = s[r].offsetHeight;
            n = o > n ? o : n
        }(n || n === 0) && (e.wrapperEl.style.height = `${n}px`)
}

function nt() {
    const t = this,
        e = t.slides,
        s = t.isElement ? t.isHorizontal() ? t.wrapperEl.offsetLeft : t.wrapperEl.offsetTop : 0;
    for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = (t.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - s
}

function at(t = this && this.translate || 0) {
    const e = this,
        s = e.params,
        {
            slides: i,
            rtlTranslate: n,
            snapGrid: r
        } = e;
    if (i.length === 0) return;
    typeof i[0].swiperSlideOffset > "u" && e.updateSlidesOffset();
    let l = -t;
    n && (l = t), i.forEach(o => {
        o.classList.remove(s.slideVisibleClass)
    }), e.visibleSlidesIndexes = [], e.visibleSlides = [];
    for (let o = 0; o < i.length; o += 1) {
        const a = i[o];
        let d = a.swiperSlideOffset;
        s.cssMode && s.centeredSlides && (d -= i[0].swiperSlideOffset);
        const p = (l + (s.centeredSlides ? e.minTranslate() : 0) - d) / (a.swiperSlideSize + s.spaceBetween),
            f = (l - r[0] + (s.centeredSlides ? e.minTranslate() : 0) - d) / (a.swiperSlideSize + s.spaceBetween),
            u = -(l - d),
            c = u + e.slidesSizesGrid[o];
        (u >= 0 && u < e.size - 1 || c > 1 && c <= e.size || u <= 0 && c >= e.size) && (e.visibleSlides.push(a), e.visibleSlidesIndexes.push(o), i[o].classList.add(s.slideVisibleClass)), a.progress = n ? -p : p, a.originalProgress = n ? -f : f
    }
}

function ot(t) {
    const e = this;
    if (typeof t > "u") {
        const p = e.rtlTranslate ? -1 : 1;
        t = e && e.translate && e.translate * p || 0
    }
    const s = e.params,
        i = e.maxTranslate() - e.minTranslate();
    let {
        progress: n,
        isBeginning: r,
        isEnd: l,
        progressLoop: o
    } = e;
    const a = r,
        d = l;
    if (i === 0) n = 0, r = !0, l = !0;
    else {
        n = (t - e.minTranslate()) / i;
        const p = Math.abs(t - e.minTranslate()) < 1,
            f = Math.abs(t - e.maxTranslate()) < 1;
        r = p || n <= 0, l = f || n >= 1, p && (n = 0), f && (n = 1)
    }
    if (s.loop) {
        const p = e.getSlideIndex(e.slides.filter(w => w.getAttribute("data-swiper-slide-index") === "0")[0]),
            f = e.getSlideIndex(e.slides.filter(w => w.getAttribute("data-swiper-slide-index") * 1 === e.slides.length - 1)[0]),
            u = e.slidesGrid[p],
            c = e.slidesGrid[f],
            h = e.slidesGrid[e.slidesGrid.length - 1],
            m = Math.abs(t);
        m >= u ? o = (m - u) / h : o = (m + h - c) / h, o > 1 && (o -= 1)
    }
    Object.assign(e, {
        progress: n,
        progressLoop: o,
        isBeginning: r,
        isEnd: l
    }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && e.updateSlidesProgress(t), r && !a && e.emit("reachBeginning toEdge"), l && !d && e.emit("reachEnd toEdge"), (a && !r || d && !l) && e.emit("fromEdge"), e.emit("progress", n)
}

function lt() {
    const t = this,
        {
            slides: e,
            params: s,
            slidesEl: i,
            activeIndex: n
        } = t,
        r = t.virtual && s.virtual.enabled,
        l = a => A(i, `.${s.slideClass}${a}, swiper-slide${a}`)[0];
    e.forEach(a => {
        a.classList.remove(s.slideActiveClass, s.slideNextClass, s.slidePrevClass)
    });
    let o;
    if (r)
        if (s.loop) {
            let a = n - t.virtual.slidesBefore;
            a < 0 && (a = t.virtual.slides.length + a), a >= t.virtual.slides.length && (a -= t.virtual.slides.length), o = l(`[data-swiper-slide-index="${a}"]`)
        } else o = l(`[data-swiper-slide-index="${n}"]`);
    else o = e[n];
    if (o) {
        o.classList.add(s.slideActiveClass);
        let a = Xe(o, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && !a && (a = e[0]), a && a.classList.add(s.slideNextClass);
        let d = je(o, `.${s.slideClass}, swiper-slide`)[0];
        s.loop && !d === 0 && (d = e[e.length - 1]), d && d.classList.add(s.slidePrevClass)
    }
    t.emitSlidesClasses()
}

function dt(t) {
    const {
        slidesGrid: e,
        params: s
    } = t, i = t.rtlTranslate ? t.translate : -t.translate;
    let n;
    for (let r = 0; r < e.length; r += 1) typeof e[r + 1] < "u" ? i >= e[r] && i < e[r + 1] - (e[r + 1] - e[r]) / 2 ? n = r : i >= e[r] && i < e[r + 1] && (n = r + 1) : i >= e[r] && (n = r);
    return s.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n
}

function ct(t) {
    const e = this,
        s = e.rtlTranslate ? e.translate : -e.translate,
        {
            snapGrid: i,
            params: n,
            activeIndex: r,
            realIndex: l,
            snapIndex: o
        } = e;
    let a = t,
        d;
    const p = u => {
        let c = u - e.virtual.slidesBefore;
        return c < 0 && (c = e.virtual.slides.length + c), c >= e.virtual.slides.length && (c -= e.virtual.slides.length), c
    };
    if (typeof a > "u" && (a = dt(e)), i.indexOf(s) >= 0) d = i.indexOf(s);
    else {
        const u = Math.min(n.slidesPerGroupSkip, a);
        d = u + Math.floor((a - u) / n.slidesPerGroup)
    }
    if (d >= i.length && (d = i.length - 1), a === r) {
        d !== o && (e.snapIndex = d, e.emit("snapIndexChange")), e.params.loop && e.virtual && e.params.virtual.enabled && (e.realIndex = p(a));
        return
    }
    let f;
    e.virtual && n.virtual.enabled && n.loop ? f = p(a) : e.slides[a] ? f = parseInt(e.slides[a].getAttribute("data-swiper-slide-index") || a, 10) : f = a, Object.assign(e, {
        snapIndex: d,
        realIndex: f,
        previousIndex: r,
        activeIndex: a
    }), e.emit("activeIndexChange"), e.emit("snapIndexChange"), l !== f && e.emit("realIndexChange"), (e.initialized || e.params.runCallbacksOnInit) && e.emit("slideChange")
}

function ft(t) {
    const e = this,
        s = e.params,
        i = t.closest(`.${s.slideClass}, swiper-slide`);
    let n = !1,
        r;
    if (i) {
        for (let l = 0; l < e.slides.length; l += 1)
            if (e.slides[l] === i) {
                n = !0, r = l;
                break
            }
    }
    if (i && n) e.clickedSlide = i, e.virtual && e.params.virtual.enabled ? e.clickedIndex = parseInt(i.getAttribute("data-swiper-slide-index"), 10) : e.clickedIndex = r;
    else {
        e.clickedSlide = void 0, e.clickedIndex = void 0;
        return
    }
    s.slideToClickedSlide && e.clickedIndex !== void 0 && e.clickedIndex !== e.activeIndex && e.slideToClickedSlide()
}
const ut = {
    updateSize: st,
    updateSlides: it,
    updateAutoHeight: rt,
    updateSlidesOffset: nt,
    updateSlidesProgress: at,
    updateProgress: ot,
    updateSlidesClasses: lt,
    updateActiveIndex: ct,
    updateClickedSlide: ft
};

function pt(t = this.isHorizontal() ? "x" : "y") {
    const e = this,
        {
            params: s,
            rtlTranslate: i,
            translate: n,
            wrapperEl: r
        } = e;
    if (s.virtualTranslate) return i ? -n : n;
    if (s.cssMode) return n;
    let l = He(r, t);
    return i && (l = -l), l || 0
}

function mt(t, e) {
    const s = this,
        {
            rtlTranslate: i,
            params: n,
            wrapperEl: r,
            progress: l
        } = s;
    let o = 0,
        a = 0;
    const d = 0;
    s.isHorizontal() ? o = i ? -t : t : a = t, n.roundLengths && (o = Math.floor(o), a = Math.floor(a)), n.cssMode ? r[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -o : -a : n.virtualTranslate || (r.style.transform = `translate3d(${o}px, ${a}px, ${d}px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? o : a;
    let p;
    const f = s.maxTranslate() - s.minTranslate();
    f === 0 ? p = 0 : p = (t - s.minTranslate()) / f, p !== l && s.updateProgress(t), s.emit("setTranslate", s.translate, e)
}

function ht() {
    return -this.snapGrid[0]
}

function gt() {
    return -this.snapGrid[this.snapGrid.length - 1]
}

function vt(t = 0, e = this.params.speed, s = !0, i = !0, n) {
    const r = this,
        {
            params: l,
            wrapperEl: o
        } = r;
    if (r.animating && l.preventInteractionOnTransition) return !1;
    const a = r.minTranslate(),
        d = r.maxTranslate();
    let p;
    if (i && t > a ? p = a : i && t < d ? p = d : p = t, r.updateProgress(p), l.cssMode) {
        const f = r.isHorizontal();
        if (e === 0) o[f ? "scrollLeft" : "scrollTop"] = -p;
        else {
            if (!r.support.smoothScroll) return me({
                swiper: r,
                targetPosition: -p,
                side: f ? "left" : "top"
            }), !0;
            o.scrollTo({
                [f ? "left" : "top"]: -p,
                behavior: "smooth"
            })
        }
        return !0
    }
    return e === 0 ? (r.setTransition(0), r.setTranslate(p), s && (r.emit("beforeTransitionStart", e, n), r.emit("transitionEnd"))) : (r.setTransition(e), r.setTranslate(p), s && (r.emit("beforeTransitionStart", e, n), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(u) {
        !r || r.destroyed || u.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"))
    }), r.wrapperEl.addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd))), !0
}
const wt = {
    getTranslate: pt,
    setTranslate: mt,
    minTranslate: ht,
    maxTranslate: gt,
    translateTo: vt
};

function St(t, e) {
    const s = this;
    s.params.cssMode || (s.wrapperEl.style.transitionDuration = `${t}ms`), s.emit("setTransition", t, e)
}

function ge({
    swiper: t,
    runCallbacks: e,
    direction: s,
    step: i
}) {
    const {
        activeIndex: n,
        previousIndex: r
    } = t;
    let l = s;
    if (l || (n > r ? l = "next" : n < r ? l = "prev" : l = "reset"), t.emit(`transition${i}`), e && n !== r) {
        if (l === "reset") {
            t.emit(`slideResetTransition${i}`);
            return
        }
        t.emit(`slideChangeTransition${i}`), l === "next" ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`)
    }
}

function Tt(t = !0, e) {
    const s = this,
        {
            params: i
        } = s;
    i.cssMode || (i.autoHeight && s.updateAutoHeight(), ge({
        swiper: s,
        runCallbacks: t,
        direction: e,
        step: "Start"
    }))
}

function bt(t = !0, e) {
    const s = this,
        {
            params: i
        } = s;
    s.animating = !1, !i.cssMode && (s.setTransition(0), ge({
        swiper: s,
        runCallbacks: t,
        direction: e,
        step: "End"
    }))
}
const xt = {
    setTransition: St,
    transitionStart: Tt,
    transitionEnd: bt
};

function yt(t = 0, e = this.params.speed, s = !0, i, n) {
    typeof t == "string" && (t = parseInt(t, 10));
    const r = this;
    let l = t;
    l < 0 && (l = 0);
    const {
        params: o,
        snapGrid: a,
        slidesGrid: d,
        previousIndex: p,
        activeIndex: f,
        rtlTranslate: u,
        wrapperEl: c,
        enabled: h
    } = r;
    if (r.animating && o.preventInteractionOnTransition || !h && !i && !n) return !1;
    const m = Math.min(r.params.slidesPerGroupSkip, l);
    let w = m + Math.floor((l - m) / r.params.slidesPerGroup);
    w >= a.length && (w = a.length - 1);
    const g = -a[w];
    if (o.normalizeSlideIndex)
        for (let S = 0; S < d.length; S += 1) {
            const b = -Math.floor(g * 100),
                y = Math.floor(d[S] * 100),
                x = Math.floor(d[S + 1] * 100);
            typeof d[S + 1] < "u" ? b >= y && b < x - (x - y) / 2 ? l = S : b >= y && b < x && (l = S + 1) : b >= y && (l = S)
        }
    if (r.initialized && l !== f && (!r.allowSlideNext && g < r.translate && g < r.minTranslate() || !r.allowSlidePrev && g > r.translate && g > r.maxTranslate() && (f || 0) !== l)) return !1;
    l !== (p || 0) && s && r.emit("beforeSlideChangeStart"), r.updateProgress(g);
    let E;
    if (l > f ? E = "next" : l < f ? E = "prev" : E = "reset", u && -g === r.translate || !u && g === r.translate) return r.updateActiveIndex(l), o.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), o.effect !== "slide" && r.setTranslate(g), E !== "reset" && (r.transitionStart(s, E), r.transitionEnd(s, E)), !1;
    if (o.cssMode) {
        const S = r.isHorizontal(),
            b = u ? g : -g;
        if (e === 0) {
            const y = r.virtual && r.params.virtual.enabled;
            y && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), y && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0 ? (r._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                c[S ? "scrollLeft" : "scrollTop"] = b
            })) : c[S ? "scrollLeft" : "scrollTop"] = b, y && requestAnimationFrame(() => {
                r.wrapperEl.style.scrollSnapType = "", r._immediateVirtual = !1
            })
        } else {
            if (!r.support.smoothScroll) return me({
                swiper: r,
                targetPosition: b,
                side: S ? "left" : "top"
            }), !0;
            c.scrollTo({
                [S ? "left" : "top"]: b,
                behavior: "smooth"
            })
        }
        return !0
    }
    return r.setTransition(e), r.setTranslate(g), r.updateActiveIndex(l), r.updateSlidesClasses(), r.emit("beforeTransitionStart", e, i), r.transitionStart(s, E), e === 0 ? r.transitionEnd(s, E) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(b) {
        !r || r.destroyed || b.target === this && (r.wrapperEl.removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, E))
    }), r.wrapperEl.addEventListener("transitionend", r.onSlideToWrapperTransitionEnd)), !0
}

function Et(t = 0, e = this.params.speed, s = !0, i) {
    typeof t == "string" && (t = parseInt(t, 10));
    const n = this;
    let r = t;
    return n.params.loop && (n.virtual && n.params.virtual.enabled ? r = r + n.virtual.slidesBefore : r = n.getSlideIndex(n.slides.filter(l => l.getAttribute("data-swiper-slide-index") * 1 === r)[0])), n.slideTo(r, e, s, i)
}

function Ct(t = this.params.speed, e = !0, s) {
    const i = this,
        {
            enabled: n,
            params: r,
            animating: l
        } = i;
    if (!n) return i;
    let o = r.slidesPerGroup;
    r.slidesPerView === "auto" && r.slidesPerGroup === 1 && r.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
    const a = i.activeIndex < r.slidesPerGroupSkip ? 1 : o,
        d = i.virtual && r.virtual.enabled;
    if (r.loop) {
        if (l && !d && r.loopPreventsSliding) return !1;
        i.loopFix({
            direction: "next"
        }), i._clientLeft = i.wrapperEl.clientLeft
    }
    return r.rewind && i.isEnd ? i.slideTo(0, t, e, s) : i.slideTo(i.activeIndex + a, t, e, s)
}

function Pt(t = this.params.speed, e = !0, s) {
    const i = this,
        {
            params: n,
            snapGrid: r,
            slidesGrid: l,
            rtlTranslate: o,
            enabled: a,
            animating: d
        } = i;
    if (!a) return i;
    const p = i.virtual && n.virtual.enabled;
    if (n.loop) {
        if (d && !p && n.loopPreventsSliding) return !1;
        i.loopFix({
            direction: "prev"
        }), i._clientLeft = i.wrapperEl.clientLeft
    }
    const f = o ? i.translate : -i.translate;

    function u(g) {
        return g < 0 ? -Math.floor(Math.abs(g)) : Math.floor(g)
    }
    const c = u(f),
        h = r.map(g => u(g));
    let m = r[h.indexOf(c) - 1];
    if (typeof m > "u" && n.cssMode) {
        let g;
        r.forEach((E, S) => {
            c >= E && (g = S)
        }), typeof g < "u" && (m = r[g > 0 ? g - 1 : g])
    }
    let w = 0;
    if (typeof m < "u" && (w = l.indexOf(m), w < 0 && (w = i.activeIndex - 1), n.slidesPerView === "auto" && n.slidesPerGroup === 1 && n.slidesPerGroupAuto && (w = w - i.slidesPerViewDynamic("previous", !0) + 1, w = Math.max(w, 0))), n.rewind && i.isBeginning) {
        const g = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
        return i.slideTo(g, t, e, s)
    }
    return i.slideTo(w, t, e, s)
}

function Mt(t = this.params.speed, e = !0, s) {
    const i = this;
    return i.slideTo(i.activeIndex, t, e, s)
}

function _t(t = this.params.speed, e = !0, s, i = .5) {
    const n = this;
    let r = n.activeIndex;
    const l = Math.min(n.params.slidesPerGroupSkip, r),
        o = l + Math.floor((r - l) / n.params.slidesPerGroup),
        a = n.rtlTranslate ? n.translate : -n.translate;
    if (a >= n.snapGrid[o]) {
        const d = n.snapGrid[o],
            p = n.snapGrid[o + 1];
        a - d > (p - d) * i && (r += n.params.slidesPerGroup)
    } else {
        const d = n.snapGrid[o - 1],
            p = n.snapGrid[o];
        a - d <= (p - d) * i && (r -= n.params.slidesPerGroup)
    }
    return r = Math.max(r, 0), r = Math.min(r, n.slidesGrid.length - 1), n.slideTo(r, t, e, s)
}

function Lt() {
    const t = this,
        {
            params: e,
            slidesEl: s
        } = t,
        i = e.slidesPerView === "auto" ? t.slidesPerViewDynamic() : e.slidesPerView;
    let n = t.clickedIndex,
        r;
    const l = t.isElement ? "swiper-slide" : `.${e.slideClass}`;
    if (e.loop) {
        if (t.animating) return;
        r = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), e.centeredSlides ? n < t.loopedSlides - i / 2 || n > t.slides.length - t.loopedSlides + i / 2 ? (t.loopFix(), n = t.getSlideIndex(A(s, `${l}[data-swiper-slide-index="${r}"]`)[0]), Z(() => {
            t.slideTo(n)
        })) : t.slideTo(n) : n > t.slides.length - i ? (t.loopFix(), n = t.getSlideIndex(A(s, `${l}[data-swiper-slide-index="${r}"]`)[0]), Z(() => {
            t.slideTo(n)
        })) : t.slideTo(n)
    } else t.slideTo(n)
}
const kt = {
    slideTo: yt,
    slideToLoop: Et,
    slideNext: Ct,
    slidePrev: Pt,
    slideReset: Mt,
    slideToClosest: _t,
    slideToClickedSlide: Lt
};

function It(t) {
    const e = this,
        {
            params: s,
            slidesEl: i
        } = e;
    if (!s.loop || e.virtual && e.params.virtual.enabled) return;
    A(i, `.${s.slideClass}, swiper-slide`).forEach((r, l) => {
        r.setAttribute("data-swiper-slide-index", l)
    }), e.loopFix({
        slideRealIndex: t,
        direction: s.centeredSlides ? void 0 : "next"
    })
}

function zt({
    slideRealIndex: t,
    slideTo: e = !0,
    direction: s,
    setTranslate: i,
    activeSlideIndex: n,
    byController: r,
    byMousewheel: l
} = {}) {
    const o = this;
    if (!o.params.loop) return;
    o.emit("beforeLoopFix");
    const {
        slides: a,
        allowSlidePrev: d,
        allowSlideNext: p,
        slidesEl: f,
        params: u
    } = o;
    if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && u.virtual.enabled) {
        e && (!u.centeredSlides && o.snapIndex === 0 ? o.slideTo(o.virtual.slides.length, 0, !1, !0) : u.centeredSlides && o.snapIndex < u.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0)), o.allowSlidePrev = d, o.allowSlideNext = p, o.emit("loopFix");
        return
    }
    const c = u.slidesPerView === "auto" ? o.slidesPerViewDynamic() : Math.ceil(parseFloat(u.slidesPerView, 10));
    let h = u.loopedSlides || c;
    h % u.slidesPerGroup !== 0 && (h += u.slidesPerGroup - h % u.slidesPerGroup), o.loopedSlides = h;
    const m = [],
        w = [];
    let g = o.activeIndex;
    typeof n > "u" ? n = o.getSlideIndex(o.slides.filter(x => x.classList.contains("swiper-slide-active"))[0]) : g = n;
    const E = s === "next" || !s,
        S = s === "prev" || !s;
    let b = 0,
        y = 0;
    if (n < h) {
        b = Math.max(h - n, u.slidesPerGroup);
        for (let x = 0; x < h - n; x += 1) {
            const _ = x - Math.floor(x / a.length) * a.length;
            m.push(a.length - _ - 1)
        }
    } else if (n > o.slides.length - h * 2) {
        y = Math.max(n - (o.slides.length - h * 2), u.slidesPerGroup);
        for (let x = 0; x < y; x += 1) {
            const _ = x - Math.floor(x / a.length) * a.length;
            w.push(_)
        }
    }
    if (S && m.forEach(x => {
            f.prepend(o.slides[x])
        }), E && w.forEach(x => {
            f.append(o.slides[x])
        }), o.recalcSlides(), u.watchSlidesProgress && o.updateSlidesOffset(), e) {
        if (m.length > 0 && S)
            if (typeof t > "u") {
                const x = o.slidesGrid[g],
                    O = o.slidesGrid[g + b] - x;
                l ? o.setTranslate(o.translate - O) : (o.slideTo(g + b, 0, !1, !0), i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += O))
            } else i && o.slideToLoop(t, 0, !1, !0);
        else if (w.length > 0 && E)
            if (typeof t > "u") {
                const x = o.slidesGrid[g],
                    O = o.slidesGrid[g - y] - x;
                l ? o.setTranslate(o.translate - O) : (o.slideTo(g - y, 0, !1, !0), i && (o.touches[o.isHorizontal() ? "startX" : "startY"] += O))
            } else o.slideToLoop(t, 0, !1, !0)
    }
    if (o.allowSlidePrev = d, o.allowSlideNext = p, o.controller && o.controller.control && !r) {
        const x = {
            slideRealIndex: t,
            slideTo: !1,
            direction: s,
            setTranslate: i,
            activeSlideIndex: n,
            byController: !0
        };
        Array.isArray(o.controller.control) ? o.controller.control.forEach(_ => {
            _.params.loop && _.loopFix(x)
        }) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix(x)
    }
    o.emit("loopFix")
}

function Ot() {
    const t = this,
        {
            slides: e,
            params: s,
            slidesEl: i
        } = t;
    if (!s.loop || t.virtual && t.params.virtual.enabled) return;
    t.recalcSlides();
    const n = [];
    e.forEach(r => {
        const l = typeof r.swiperSlideIndex > "u" ? r.getAttribute("data-swiper-slide-index") * 1 : r.swiperSlideIndex;
        n[l] = r
    }), e.forEach(r => {
        r.removeAttribute("data-swiper-slide-index")
    }), n.forEach(r => {
        i.append(r)
    }), t.recalcSlides(), t.slideTo(t.realIndex, 0)
}
const At = {
    loopCreate: It,
    loopFix: zt,
    loopDestroy: Ot
};

function Gt(t) {
    const e = this;
    if (!e.params.simulateTouch || e.params.watchOverflow && e.isLocked || e.params.cssMode) return;
    const s = e.params.touchEventsTarget === "container" ? e.el : e.wrapperEl;
    e.isElement && (e.__preventObserver__ = !0), s.style.cursor = "move", s.style.cursor = t ? "grabbing" : "grab", e.isElement && requestAnimationFrame(() => {
        e.__preventObserver__ = !1
    })
}

function Vt() {
    const t = this;
    t.params.watchOverflow && t.isLocked || t.params.cssMode || (t.isElement && (t.__preventObserver__ = !0), t[t.params.touchEventsTarget === "container" ? "el" : "wrapperEl"].style.cursor = "", t.isElement && requestAnimationFrame(() => {
        t.__preventObserver__ = !1
    }))
}
const Bt = {
    setGrabCursor: Gt,
    unsetGrabCursor: Vt
};

function Dt(t, e = this) {
    function s(i) {
        if (!i || i === B() || i === k()) return null;
        i.assignedSlot && (i = i.assignedSlot);
        const n = i.closest(t);
        return !n && !i.getRootNode ? null : n || s(i.getRootNode().host)
    }
    return s(e)
}

function Nt(t) {
    const e = this,
        s = B(),
        i = k(),
        n = e.touchEventsData;
    n.evCache.push(t);
    const {
        params: r,
        touches: l,
        enabled: o
    } = e;
    if (!o || !r.simulateTouch && t.pointerType === "mouse" || e.animating && r.preventInteractionOnTransition) return;
    !e.animating && r.cssMode && r.loop && e.loopFix();
    let a = t;
    a.originalEvent && (a = a.originalEvent);
    let d = a.target;
    if (r.touchEventsTarget === "wrapper" && !e.wrapperEl.contains(d) || "which" in a && a.which === 3 || "button" in a && a.button > 0 || n.isTouched && n.isMoved) return;
    const p = !!r.noSwipingClass && r.noSwipingClass !== "",
        f = t.composedPath ? t.composedPath() : t.path;
    p && a.target && a.target.shadowRoot && f && (d = f[0]);
    const u = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
        c = !!(a.target && a.target.shadowRoot);
    if (r.noSwiping && (c ? Dt(u, d) : d.closest(u))) {
        e.allowClick = !0;
        return
    }
    if (r.swipeHandler && !d.closest(r.swipeHandler)) return;
    l.currentX = a.pageX, l.currentY = a.pageY;
    const h = l.currentX,
        m = l.currentY,
        w = r.edgeSwipeDetection || r.iOSEdgeSwipeDetection,
        g = r.edgeSwipeThreshold || r.iOSEdgeSwipeThreshold;
    if (w && (h <= g || h >= i.innerWidth - g))
        if (w === "prevent") t.preventDefault();
        else return;
    Object.assign(n, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0
    }), l.startX = h, l.startY = m, n.touchStartTime = D(), e.allowClick = !0, e.updateSize(), e.swipeDirection = void 0, r.threshold > 0 && (n.allowThresholdMove = !1);
    let E = !0;
    d.matches(n.focusableElements) && (E = !1, d.nodeName === "SELECT" && (n.isTouched = !1)), s.activeElement && s.activeElement.matches(n.focusableElements) && s.activeElement !== d && s.activeElement.blur();
    const S = E && e.allowTouchMove && r.touchStartPreventDefault;
    (r.touchStartForcePreventDefault || S) && !d.isContentEditable && a.preventDefault(), e.params.freeMode && e.params.freeMode.enabled && e.freeMode && e.animating && !r.cssMode && e.freeMode.onTouchStart(), e.emit("touchStart", a)
}

function Ft(t) {
    const e = B(),
        s = this,
        i = s.touchEventsData,
        {
            params: n,
            touches: r,
            rtlTranslate: l,
            enabled: o
        } = s;
    if (!o || !n.simulateTouch && t.pointerType === "mouse") return;
    let a = t;
    if (a.originalEvent && (a = a.originalEvent), !i.isTouched) {
        i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", a);
        return
    }
    const d = i.evCache.findIndex(x => x.pointerId === a.pointerId);
    d >= 0 && (i.evCache[d] = a);
    const p = i.evCache.length > 1 ? i.evCache[0] : a,
        f = p.pageX,
        u = p.pageY;
    if (a.preventedByNestedSwiper) {
        r.startX = f, r.startY = u;
        return
    }
    if (!s.allowTouchMove) {
        a.target.matches(i.focusableElements) || (s.allowClick = !1), i.isTouched && (Object.assign(r, {
            startX: f,
            startY: u,
            prevX: s.touches.currentX,
            prevY: s.touches.currentY,
            currentX: f,
            currentY: u
        }), i.touchStartTime = D());
        return
    }
    if (n.touchReleaseOnEdges && !n.loop) {
        if (s.isVertical()) {
            if (u < r.startY && s.translate <= s.maxTranslate() || u > r.startY && s.translate >= s.minTranslate()) {
                i.isTouched = !1, i.isMoved = !1;
                return
            }
        } else if (f < r.startX && s.translate <= s.maxTranslate() || f > r.startX && s.translate >= s.minTranslate()) return
    }
    if (e.activeElement && a.target === e.activeElement && a.target.matches(i.focusableElements)) {
        i.isMoved = !0, s.allowClick = !1;
        return
    }
    if (i.allowTouchCallbacks && s.emit("touchMove", a), a.targetTouches && a.targetTouches.length > 1) return;
    r.currentX = f, r.currentY = u;
    const c = r.currentX - r.startX,
        h = r.currentY - r.startY;
    if (s.params.threshold && Math.sqrt(c ** 2 + h ** 2) < s.params.threshold) return;
    if (typeof i.isScrolling > "u") {
        let x;
        s.isHorizontal() && r.currentY === r.startY || s.isVertical() && r.currentX === r.startX ? i.isScrolling = !1 : c * c + h * h >= 25 && (x = Math.atan2(Math.abs(h), Math.abs(c)) * 180 / Math.PI, i.isScrolling = s.isHorizontal() ? x > n.touchAngle : 90 - x > n.touchAngle)
    }
    if (i.isScrolling && s.emit("touchMoveOpposite", a), typeof i.startMoving > "u" && (r.currentX !== r.startX || r.currentY !== r.startY) && (i.startMoving = !0), i.isScrolling || s.zoom && s.params.zoom && s.params.zoom.enabled && i.evCache.length > 1) {
        i.isTouched = !1;
        return
    }
    if (!i.startMoving) return;
    s.allowClick = !1, !n.cssMode && a.cancelable && a.preventDefault(), n.touchMoveStopPropagation && !n.nested && a.stopPropagation();
    let m = s.isHorizontal() ? c : h,
        w = s.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
    n.oneWayMovement && (m = Math.abs(m) * (l ? 1 : -1), w = Math.abs(w) * (l ? 1 : -1)), r.diff = m, m *= n.touchRatio, l && (m = -m, w = -w);
    const g = s.touchesDirection;
    s.swipeDirection = m > 0 ? "prev" : "next", s.touchesDirection = w > 0 ? "prev" : "next";
    const E = s.params.loop && !n.cssMode;
    if (!i.isMoved) {
        if (E && s.loopFix({
                direction: s.swipeDirection
            }), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating) {
            const x = new window.CustomEvent("transitionend", {
                bubbles: !0,
                cancelable: !0
            });
            s.wrapperEl.dispatchEvent(x)
        }
        i.allowMomentumBounce = !1, n.grabCursor && (s.allowSlideNext === !0 || s.allowSlidePrev === !0) && s.setGrabCursor(!0), s.emit("sliderFirstMove", a)
    }
    let S;
    i.isMoved && g !== s.touchesDirection && E && Math.abs(m) >= 1 && (s.loopFix({
        direction: s.swipeDirection,
        setTranslate: !0
    }), S = !0), s.emit("sliderMove", a), i.isMoved = !0, i.currentTranslate = m + i.startTranslate;
    let b = !0,
        y = n.resistanceRatio;
    if (n.touchReleaseOnEdges && (y = 0), m > 0 ? (E && !S && i.currentTranslate > (n.centeredSlides ? s.minTranslate() - s.size / 2 : s.minTranslate()) && s.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
        }), i.currentTranslate > s.minTranslate() && (b = !1, n.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + m) ** y))) : m < 0 && (E && !S && i.currentTranslate < (n.centeredSlides ? s.maxTranslate() + s.size / 2 : s.maxTranslate()) && s.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: s.slides.length - (n.slidesPerView === "auto" ? s.slidesPerViewDynamic() : Math.ceil(parseFloat(n.slidesPerView, 10)))
        }), i.currentTranslate < s.maxTranslate() && (b = !1, n.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - m) ** y))), b && (a.preventedByNestedSwiper = !0), !s.allowSlideNext && s.swipeDirection === "next" && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && s.swipeDirection === "prev" && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && !s.allowSlideNext && (i.currentTranslate = i.startTranslate), n.threshold > 0)
        if (Math.abs(m) > n.threshold || i.allowThresholdMove) {
            if (!i.allowThresholdMove) {
                i.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, i.currentTranslate = i.startTranslate, r.diff = s.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY;
                return
            }
        } else {
            i.currentTranslate = i.startTranslate;
            return
        }!n.followFinger || n.cssMode || ((n.freeMode && n.freeMode.enabled && s.freeMode || n.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && n.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate))
}

function $t(t) {
    const e = this,
        s = e.touchEventsData,
        i = s.evCache.findIndex(S => S.pointerId === t.pointerId);
    if (i >= 0 && s.evCache.splice(i, 1), ["pointercancel", "pointerout", "pointerleave"].includes(t.type) && !(t.type === "pointercancel" && (e.browser.isSafari || e.browser.isWebView))) return;
    const {
        params: n,
        touches: r,
        rtlTranslate: l,
        slidesGrid: o,
        enabled: a
    } = e;
    if (!a || !n.simulateTouch && t.pointerType === "mouse") return;
    let d = t;
    if (d.originalEvent && (d = d.originalEvent), s.allowTouchCallbacks && e.emit("touchEnd", d), s.allowTouchCallbacks = !1, !s.isTouched) {
        s.isMoved && n.grabCursor && e.setGrabCursor(!1), s.isMoved = !1, s.startMoving = !1;
        return
    }
    n.grabCursor && s.isMoved && s.isTouched && (e.allowSlideNext === !0 || e.allowSlidePrev === !0) && e.setGrabCursor(!1);
    const p = D(),
        f = p - s.touchStartTime;
    if (e.allowClick) {
        const S = d.path || d.composedPath && d.composedPath();
        e.updateClickedSlide(S && S[0] || d.target), e.emit("tap click", d), f < 300 && p - s.lastClickTime < 300 && e.emit("doubleTap doubleClick", d)
    }
    if (s.lastClickTime = D(), Z(() => {
            e.destroyed || (e.allowClick = !0)
        }), !s.isTouched || !s.isMoved || !e.swipeDirection || r.diff === 0 || s.currentTranslate === s.startTranslate) {
        s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
        return
    }
    s.isTouched = !1, s.isMoved = !1, s.startMoving = !1;
    let u;
    if (n.followFinger ? u = l ? e.translate : -e.translate : u = -s.currentTranslate, n.cssMode) return;
    if (e.params.freeMode && n.freeMode.enabled) {
        e.freeMode.onTouchEnd({
            currentPos: u
        });
        return
    }
    let c = 0,
        h = e.slidesSizesGrid[0];
    for (let S = 0; S < o.length; S += S < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
        const b = S < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
        typeof o[S + b] < "u" ? u >= o[S] && u < o[S + b] && (c = S, h = o[S + b] - o[S]) : u >= o[S] && (c = S, h = o[o.length - 1] - o[o.length - 2])
    }
    let m = null,
        w = null;
    n.rewind && (e.isBeginning ? w = e.params.virtual && e.params.virtual.enabled && e.virtual ? e.virtual.slides.length - 1 : e.slides.length - 1 : e.isEnd && (m = 0));
    const g = (u - o[c]) / h,
        E = c < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
    if (f > n.longSwipesMs) {
        if (!n.longSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.swipeDirection === "next" && (g >= n.longSwipesRatio ? e.slideTo(n.rewind && e.isEnd ? m : c + E) : e.slideTo(c)), e.swipeDirection === "prev" && (g > 1 - n.longSwipesRatio ? e.slideTo(c + E) : w !== null && g < 0 && Math.abs(g) > n.longSwipesRatio ? e.slideTo(w) : e.slideTo(c))
    } else {
        if (!n.shortSwipes) {
            e.slideTo(e.activeIndex);
            return
        }
        e.navigation && (d.target === e.navigation.nextEl || d.target === e.navigation.prevEl) ? d.target === e.navigation.nextEl ? e.slideTo(c + E) : e.slideTo(c) : (e.swipeDirection === "next" && e.slideTo(m !== null ? m : c + E), e.swipeDirection === "prev" && e.slideTo(w !== null ? w : c))
    }
}
let le;

function de() {
    const t = this,
        {
            params: e,
            el: s
        } = t;
    if (s && s.offsetWidth === 0) return;
    e.breakpoints && t.setBreakpoint();
    const {
        allowSlideNext: i,
        allowSlidePrev: n,
        snapGrid: r
    } = t, l = t.virtual && t.params.virtual.enabled;
    t.allowSlideNext = !0, t.allowSlidePrev = !0, t.updateSize(), t.updateSlides(), t.updateSlidesClasses();
    const o = l && e.loop;
    (e.slidesPerView === "auto" || e.slidesPerView > 1) && t.isEnd && !t.isBeginning && !t.params.centeredSlides && !o ? t.slideTo(t.slides.length - 1, 0, !1, !0) : t.params.loop && !l ? t.slideToLoop(t.realIndex, 0, !1, !0) : t.slideTo(t.activeIndex, 0, !1, !0), t.autoplay && t.autoplay.running && t.autoplay.paused && (clearTimeout(le), le = setTimeout(() => {
        t.autoplay && t.autoplay.running && t.autoplay.paused && t.autoplay.resume()
    }, 500)), t.allowSlidePrev = n, t.allowSlideNext = i, t.params.watchOverflow && r !== t.snapGrid && t.checkOverflow()
}

function Ht(t) {
    const e = this;
    e.enabled && (e.allowClick || (e.params.preventClicks && t.preventDefault(), e.params.preventClicksPropagation && e.animating && (t.stopPropagation(), t.stopImmediatePropagation())))
}

function Wt() {
    const t = this,
        {
            wrapperEl: e,
            rtlTranslate: s,
            enabled: i
        } = t;
    if (!i) return;
    t.previousTranslate = t.translate, t.isHorizontal() ? t.translate = -e.scrollLeft : t.translate = -e.scrollTop, t.translate === 0 && (t.translate = 0), t.updateActiveIndex(), t.updateSlidesClasses();
    let n;
    const r = t.maxTranslate() - t.minTranslate();
    r === 0 ? n = 0 : n = (t.translate - t.minTranslate()) / r, n !== t.progress && t.updateProgress(s ? -t.translate : t.translate), t.emit("setTranslate", t.translate, !1)
}
const $ = (t, e) => {
    if (!t || t.destroyed || !t.params) return;
    const s = () => t.isElement ? "swiper-slide" : `.${t.params.slideClass}`,
        i = e.closest(s());
    if (i) {
        const n = i.querySelector(`.${t.params.lazyPreloaderClass}`);
        n && n.remove()
    }
};

function Rt(t) {
    const e = this;
    $(e, t.target), e.update()
}
let ce = !1;

function jt() {}
const ve = (t, e) => {
    const s = B(),
        {
            params: i,
            el: n,
            wrapperEl: r,
            device: l
        } = t,
        o = !!i.nested,
        a = e === "on" ? "addEventListener" : "removeEventListener",
        d = e;
    n[a]("pointerdown", t.onTouchStart, {
        passive: !1
    }), s[a]("pointermove", t.onTouchMove, {
        passive: !1,
        capture: o
    }), s[a]("pointerup", t.onTouchEnd, {
        passive: !0
    }), s[a]("pointercancel", t.onTouchEnd, {
        passive: !0
    }), s[a]("pointerout", t.onTouchEnd, {
        passive: !0
    }), s[a]("pointerleave", t.onTouchEnd, {
        passive: !0
    }), (i.preventClicks || i.preventClicksPropagation) && n[a]("click", t.onClick, !0), i.cssMode && r[a]("scroll", t.onScroll), i.updateOnWindowResize ? t[d](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", de, !0) : t[d]("observerUpdate", de, !0), n[a]("load", t.onLoad, {
        capture: !0
    })
};

function Xt() {
    const t = this,
        e = B(),
        {
            params: s
        } = t;
    t.onTouchStart = Nt.bind(t), t.onTouchMove = Ft.bind(t), t.onTouchEnd = $t.bind(t), s.cssMode && (t.onScroll = Wt.bind(t)), t.onClick = Ht.bind(t), t.onLoad = Rt.bind(t), ce || (e.addEventListener("touchstart", jt), ce = !0), ve(t, "on")
}

function Yt() {
    ve(this, "off")
}
const qt = {
        attachEvents: Xt,
        detachEvents: Yt
    },
    fe = (t, e) => t.grid && e.grid && e.grid.rows > 1;

function Ut() {
    const t = this,
        {
            realIndex: e,
            initialized: s,
            params: i,
            el: n
        } = t,
        r = i.breakpoints;
    if (!r || r && Object.keys(r).length === 0) return;
    const l = t.getBreakpoint(r, t.params.breakpointsBase, t.el);
    if (!l || t.currentBreakpoint === l) return;
    const a = (l in r ? r[l] : void 0) || t.originalParams,
        d = fe(t, i),
        p = fe(t, a),
        f = i.enabled;
    d && !p ? (n.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), t.emitContainerClasses()) : !d && p && (n.classList.add(`${i.containerModifierClass}grid`), (a.grid.fill && a.grid.fill === "column" || !a.grid.fill && i.grid.fill === "column") && n.classList.add(`${i.containerModifierClass}grid-column`), t.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(m => {
        const w = i[m] && i[m].enabled,
            g = a[m] && a[m].enabled;
        w && !g && t[m].disable(), !w && g && t[m].enable()
    });
    const u = a.direction && a.direction !== i.direction,
        c = i.loop && (a.slidesPerView !== i.slidesPerView || u);
    u && s && t.changeDirection(), L(t.params, a);
    const h = t.params.enabled;
    Object.assign(t, {
        allowTouchMove: t.params.allowTouchMove,
        allowSlideNext: t.params.allowSlideNext,
        allowSlidePrev: t.params.allowSlidePrev
    }), f && !h ? t.disable() : !f && h && t.enable(), t.currentBreakpoint = l, t.emit("_beforeBreakpoint", a), c && s && (t.loopDestroy(), t.loopCreate(e), t.updateSlides()), t.emit("breakpoint", a)
}

function Kt(t, e = "window", s) {
    if (!t || e === "container" && !s) return;
    let i = !1;
    const n = k(),
        r = e === "window" ? n.innerHeight : s.clientHeight,
        l = Object.keys(t).map(o => {
            if (typeof o == "string" && o.indexOf("@") === 0) {
                const a = parseFloat(o.substr(1));
                return {
                    value: r * a,
                    point: o
                }
            }
            return {
                value: o,
                point: o
            }
        });
    l.sort((o, a) => parseInt(o.value, 10) - parseInt(a.value, 10));
    for (let o = 0; o < l.length; o += 1) {
        const {
            point: a,
            value: d
        } = l[o];
        e === "window" ? n.matchMedia(`(min-width: ${d}px)`).matches && (i = a) : d <= s.clientWidth && (i = a)
    }
    return i || "max"
}
const Zt = {
    setBreakpoint: Ut,
    getBreakpoint: Kt
};

function Jt(t, e) {
    const s = [];
    return t.forEach(i => {
        typeof i == "object" ? Object.keys(i).forEach(n => {
            i[n] && s.push(e + n)
        }) : typeof i == "string" && s.push(e + i)
    }), s
}

function Qt() {
    const t = this,
        {
            classNames: e,
            params: s,
            rtl: i,
            el: n,
            device: r
        } = t,
        l = Jt(["initialized", s.direction, {
            "free-mode": t.params.freeMode && s.freeMode.enabled
        }, {
            autoheight: s.autoHeight
        }, {
            rtl: i
        }, {
            grid: s.grid && s.grid.rows > 1
        }, {
            "grid-column": s.grid && s.grid.rows > 1 && s.grid.fill === "column"
        }, {
            android: r.android
        }, {
            ios: r.ios
        }, {
            "css-mode": s.cssMode
        }, {
            centered: s.cssMode && s.centeredSlides
        }, {
            "watch-progress": s.watchSlidesProgress
        }], s.containerModifierClass);
    e.push(...l), n.classList.add(...e), t.emitContainerClasses()
}

function es() {
    const t = this,
        {
            el: e,
            classNames: s
        } = t;
    e.classList.remove(...s), t.emitContainerClasses()
}
const ts = {
    addClasses: Qt,
    removeClasses: es
};

function ss() {
    const t = this,
        {
            isLocked: e,
            params: s
        } = t,
        {
            slidesOffsetBefore: i
        } = s;
    if (i) {
        const n = t.slides.length - 1,
            r = t.slidesGrid[n] + t.slidesSizesGrid[n] + i * 2;
        t.isLocked = t.size > r
    } else t.isLocked = t.snapGrid.length === 1;
    s.allowSlideNext === !0 && (t.allowSlideNext = !t.isLocked), s.allowSlidePrev === !0 && (t.allowSlidePrev = !t.isLocked), e && e !== t.isLocked && (t.isEnd = !1), e !== t.isLocked && t.emit(t.isLocked ? "lock" : "unlock")
}
const is = {
        checkOverflow: ss
    },
    ue = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopedSlides: null,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };

function rs(t, e) {
    return function(i = {}) {
        const n = Object.keys(i)[0],
            r = i[n];
        if (typeof r != "object" || r === null) {
            L(e, i);
            return
        }
        if (["navigation", "pagination", "scrollbar"].indexOf(n) >= 0 && t[n] === !0 && (t[n] = {
                auto: !0
            }), !(n in t && "enabled" in r)) {
            L(e, i);
            return
        }
        t[n] === !0 && (t[n] = {
            enabled: !0
        }), typeof t[n] == "object" && !("enabled" in t[n]) && (t[n].enabled = !0), t[n] || (t[n] = {
            enabled: !1
        }), L(e, i)
    }
}
const U = {
        eventsEmitter: tt,
        update: ut,
        translate: wt,
        transition: xt,
        slide: kt,
        loop: At,
        grabCursor: Bt,
        events: qt,
        breakpoints: Zt,
        checkOverflow: is,
        classes: ts
    },
    K = {};
class I {
    constructor(...e) {
        let s, i;
        e.length === 1 && e[0].constructor && Object.prototype.toString.call(e[0]).slice(8, -1) === "Object" ? i = e[0] : [s, i] = e, i || (i = {}), i = L({}, i), s && !i.el && (i.el = s);
        const n = B();
        if (i.el && typeof i.el == "string" && n.querySelectorAll(i.el).length > 1) {
            const a = [];
            return n.querySelectorAll(i.el).forEach(d => {
                const p = L({}, i, {
                    el: d
                });
                a.push(new I(p))
            }), a
        }
        const r = this;
        r.__swiper__ = !0, r.support = he(), r.device = Ke({
            userAgent: i.userAgent
        }), r.browser = Je(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], i.modules && Array.isArray(i.modules) && r.modules.push(...i.modules);
        const l = {};
        r.modules.forEach(a => {
            a({
                params: i,
                swiper: r,
                extendParams: rs(i, l),
                on: r.on.bind(r),
                once: r.once.bind(r),
                off: r.off.bind(r),
                emit: r.emit.bind(r)
            })
        });
        const o = L({}, ue, l);
        return r.params = L({}, o, K, i), r.originalParams = L({}, r.params), r.passedParams = L({}, i), r.params && r.params.on && Object.keys(r.params.on).forEach(a => {
            r.on(a, r.params.on[a])
        }), r.params && r.params.onAny && r.onAny(r.params.onAny), Object.assign(r, {
            enabled: r.params.enabled,
            el: s,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal() {
                return r.params.direction === "horizontal"
            },
            isVertical() {
                return r.params.direction === "vertical"
            },
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            allowSlideNext: r.params.allowSlideNext,
            allowSlidePrev: r.params.allowSlidePrev,
            touchEventsData: {
                isTouched: void 0,
                isMoved: void 0,
                allowTouchCallbacks: void 0,
                touchStartTime: void 0,
                isScrolling: void 0,
                currentTranslate: void 0,
                startTranslate: void 0,
                allowThresholdMove: void 0,
                focusableElements: r.params.focusableElements,
                lastClickTime: D(),
                clickTimeout: void 0,
                velocities: [],
                allowMomentumBounce: void 0,
                startMoving: void 0,
                evCache: []
            },
            allowClick: !0,
            allowTouchMove: r.params.allowTouchMove,
            touches: {
                startX: 0,
                startY: 0,
                currentX: 0,
                currentY: 0,
                diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
        }), r.emit("_swiper"), r.params.init && r.init(), r
    }
    getSlideIndex(e) {
        const {
            slidesEl: s,
            params: i
        } = this, n = A(s, `.${i.slideClass}, swiper-slide`), r = ae(n[0]);
        return ae(e) - r
    }
    recalcSlides() {
        const e = this,
            {
                slidesEl: s,
                params: i
            } = e;
        e.slides = A(s, `.${i.slideClass}, swiper-slide`)
    }
    enable() {
        const e = this;
        e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
    }
    disable() {
        const e = this;
        e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
    }
    setProgress(e, s) {
        const i = this;
        e = Math.min(Math.max(e, 0), 1);
        const n = i.minTranslate(),
            l = (i.maxTranslate() - n) * e + n;
        i.translateTo(l, typeof s > "u" ? 0 : s), i.updateActiveIndex(), i.updateSlidesClasses()
    }
    emitContainerClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const s = e.el.className.split(" ").filter(i => i.indexOf("swiper") === 0 || i.indexOf(e.params.containerModifierClass) === 0);
        e.emit("_containerClasses", s.join(" "))
    }
    getSlideClasses(e) {
        const s = this;
        return s.destroyed ? "" : e.className.split(" ").filter(i => i.indexOf("swiper-slide") === 0 || i.indexOf(s.params.slideClass) === 0).join(" ")
    }
    emitSlidesClasses() {
        const e = this;
        if (!e.params._emitClasses || !e.el) return;
        const s = [];
        e.slides.forEach(i => {
            const n = e.getSlideClasses(i);
            s.push({
                slideEl: i,
                classNames: n
            }), e.emit("_slideClass", i, n)
        }), e.emit("_slideClasses", s)
    }
    slidesPerViewDynamic(e = "current", s = !1) {
        const i = this,
            {
                params: n,
                slides: r,
                slidesGrid: l,
                slidesSizesGrid: o,
                size: a,
                activeIndex: d
            } = i;
        let p = 1;
        if (n.centeredSlides) {
            let f = r[d].swiperSlideSize,
                u;
            for (let c = d + 1; c < r.length; c += 1) r[c] && !u && (f += r[c].swiperSlideSize, p += 1, f > a && (u = !0));
            for (let c = d - 1; c >= 0; c -= 1) r[c] && !u && (f += r[c].swiperSlideSize, p += 1, f > a && (u = !0))
        } else if (e === "current")
            for (let f = d + 1; f < r.length; f += 1)(s ? l[f] + o[f] - l[d] < a : l[f] - l[d] < a) && (p += 1);
        else
            for (let f = d - 1; f >= 0; f -= 1) l[d] - l[f] < a && (p += 1);
        return p
    }
    update() {
        const e = this;
        if (!e || e.destroyed) return;
        const {
            snapGrid: s,
            params: i
        } = e;
        i.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach(l => {
            l.complete && $(e, l)
        }), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses();

        function n() {
            const l = e.rtlTranslate ? e.translate * -1 : e.translate,
                o = Math.min(Math.max(l, e.maxTranslate()), e.minTranslate());
            e.setTranslate(o), e.updateActiveIndex(), e.updateSlidesClasses()
        }
        let r;
        e.params.freeMode && e.params.freeMode.enabled ? (n(), e.params.autoHeight && e.updateAutoHeight()) : ((e.params.slidesPerView === "auto" || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? r = e.slideTo(e.slides.length - 1, 0, !1, !0) : r = e.slideTo(e.activeIndex, 0, !1, !0), r || n()), i.watchOverflow && s !== e.snapGrid && e.checkOverflow(), e.emit("update")
    }
    changeDirection(e, s = !0) {
        const i = this,
            n = i.params.direction;
        return e || (e = n === "horizontal" ? "vertical" : "horizontal"), e === n || e !== "horizontal" && e !== "vertical" || (i.el.classList.remove(`${i.params.containerModifierClass}${n}`), i.el.classList.add(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.forEach(r => {
            e === "vertical" ? r.style.width = "" : r.style.height = ""
        }), i.emit("changeDirection"), s && i.update()), i
    }
    changeLanguageDirection(e) {
        const s = this;
        s.rtl && e === "rtl" || !s.rtl && e === "ltr" || (s.rtl = e === "rtl", s.rtlTranslate = s.params.direction === "horizontal" && s.rtl, s.rtl ? (s.el.classList.add(`${s.params.containerModifierClass}rtl`), s.el.dir = "rtl") : (s.el.classList.remove(`${s.params.containerModifierClass}rtl`), s.el.dir = "ltr"), s.update())
    }
    mount(e) {
        const s = this;
        if (s.mounted) return !0;
        let i = e || s.params.el;
        if (typeof i == "string" && (i = document.querySelector(i)), !i) return !1;
        i.swiper = s, i.shadowEl && (s.isElement = !0);
        const n = () => `.${(s.params.wrapperClass||"").trim().split(" ").join(".")}`;
        let l = (() => i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(n()) : A(i, n())[0])();
        return !l && s.params.createElements && (l = Re("div", s.params.wrapperClass), i.append(l), A(i, `.${s.params.slideClass}`).forEach(o => {
            l.append(o)
        })), Object.assign(s, {
            el: i,
            wrapperEl: l,
            slidesEl: s.isElement ? i : l,
            mounted: !0,
            rtl: i.dir.toLowerCase() === "rtl" || V(i, "direction") === "rtl",
            rtlTranslate: s.params.direction === "horizontal" && (i.dir.toLowerCase() === "rtl" || V(i, "direction") === "rtl"),
            wrongRTL: V(l, "display") === "-webkit-box"
        }), !0
    }
    init(e) {
        const s = this;
        return s.initialized || s.mount(e) === !1 || (s.emit("beforeInit"), s.params.breakpoints && s.setBreakpoint(), s.addClasses(), s.updateSize(), s.updateSlides(), s.params.watchOverflow && s.checkOverflow(), s.params.grabCursor && s.enabled && s.setGrabCursor(), s.params.loop && s.virtual && s.params.virtual.enabled ? s.slideTo(s.params.initialSlide + s.virtual.slidesBefore, 0, s.params.runCallbacksOnInit, !1, !0) : s.slideTo(s.params.initialSlide, 0, s.params.runCallbacksOnInit, !1, !0), s.params.loop && s.loopCreate(), s.attachEvents(), [...s.el.querySelectorAll('[loading="lazy"]')].forEach(n => {
            n.complete ? $(s, n) : n.addEventListener("load", r => {
                $(s, r.target)
            })
        }), s.initialized = !0, s.emit("init"), s.emit("afterInit")), s
    }
    destroy(e = !0, s = !0) {
        const i = this,
            {
                params: n,
                el: r,
                wrapperEl: l,
                slides: o
            } = i;
        return typeof i.params > "u" || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), s && (i.removeClasses(), r.removeAttribute("style"), l.removeAttribute("style"), o && o.length && o.forEach(a => {
            a.classList.remove(n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass), a.removeAttribute("style"), a.removeAttribute("data-swiper-slide-index")
        })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(a => {
            i.off(a)
        }), e !== !1 && (i.el.swiper = null, Fe(i)), i.destroyed = !0), null
    }
    static extendDefaults(e) {
        L(K, e)
    }
    static get extendedDefaults() {
        return K
    }
    static get defaults() {
        return ue
    }
    static installModule(e) {
        I.prototype.__modules__ || (I.prototype.__modules__ = []);
        const s = I.prototype.__modules__;
        typeof e == "function" && s.indexOf(e) < 0 && s.push(e)
    }
    static use(e) {
        return Array.isArray(e) ? (e.forEach(s => I.installModule(s)), I) : (I.installModule(e), I)
    }
}
Object.keys(U).forEach(t => {
    Object.keys(U[t]).forEach(e => {
        I.prototype[e] = U[t][e]
    })
});
I.use([Qe, et]);
const ns = {
        id: "av"
    },
    as = {
        class: "ct"
    },
    os = {
        class: "swiper-c",
        "data-reveal": "bottom"
    },
    ls = {
        class: "swiper-wrapper"
    },
    ds = {
        class: "avis"
    },
    cs = {
        class: "left"
    },
    fs = ["src", "alt"],
    us = {
        class: "right"
    },
    ps = {
        class: "txt"
    },
    ms = {
        class: "author grd"
    },
    hs = {
        class: "sw-n"
    },
    Vs = {
        __name: "vesting",
        setup(t) {
            ze();
            const e = W(),
                s = W(),
                i = W(),
                n = Pe.vesting;
            return Oe(() => {
                new I(e.value, {
                    speed: 1e3,
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    spaceBetween: 25,
                    loop: !0,
                    navigation: {
                        nextEl: i.value,
                        prevEl: s.value
                    }
                })
            }), (r, l) => {
                const o = ye,
                    a = Ce,
                    d = Me,
                    p = _e,
                    f = Le,
                    u = ke,
                    c = Ee,
                    h = Ie;
                return R(), Ae(h, null, {
                    default: Ge(() => [G(o, {
                        id: "vesting",
                        title: "vesting.title",
                        intro: "vesting.intro",
                        img: "liquidity-locking-image",
                        nb: 1,
                        tl: !1,
                        "top-buttons": ie(n)
                    }, null, 8, ["title", "intro", "top-buttons"]), M("div", ns, [M("div", as, [G(a, {
                        title: "vesting.title1"
                    }, null, 8, ["title"]), M("div", os, [M("div", {
                        class: "swiper",
                        "data-swiper": "avis",
                        ref_key: "swiperRef",
                        ref: e
                    }, [M("div", ls, [(R(!0), re(Be, null, Ve(ie(De), m => (R(), re("div", {
                        key: m.author,
                        class: "swiper-slide"
                    }, [M("div", ds, [M("div", cs, [M("img", {
                        src: m.logo || "https://via.placeholder.com/300/04d483/fff?text=(•_•)",
                        loading: "lazy",
                        alt: m.society
                    }, null, 8, fs)]), M("div", us, [M("div", ps, j(m.txt), 1), M("div", ms, j(m.author) + " (" + j(m.society) + ") ", 1)])])]))), 128))])], 512), M("div", hs, [M("button", {
                        type: "button",
                        class: "prev prev-avis",
                        ref_key: "swiperPrevRef",
                        ref: s
                    }, [G(d, {
                        icon: "left",
                        viewbox: "0 0 256 256"
                    })], 512), M("button", {
                        type: "button",
                        class: "next next-avis",
                        ref_key: "swiperNextRef",
                        ref: i
                    }, [G(d, {
                        icon: "right",
                        viewbox: "0 0 256 256"
                    })], 512)])])])]), G(p), G(f), G(u, {
                        page: "vesting",
                        "rows-length": 2
                    }), G(c, {
                        button: "vesting.button"
                    }, null, 8, ["button"])]),
                    _: 1
                })
            }
        }
    };
export {
    Vs as
    default
};