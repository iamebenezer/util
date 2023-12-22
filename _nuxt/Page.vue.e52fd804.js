import {
    g as h,
    b as k
} from "./Waves.a713412c.js";
import {
    E as $,
    o as n,
    b as s,
    h as c,
    V as m,
    Y as v,
    c as _,
    a as S,
    N as T,
    j as x,
    Z as g,
    $ as f,
    X as p,
    u as B,
    W as L
} from "./entry.6795a269.js";
import {
    _ as A
} from "./App.80f13a2f.js";
import {
    _ as b,
    a as C
} from "./services.05816bf8.js";
import {
    a as N
} from "./Section.6cf006c4.js";
import {
    _ as w
} from "./Scroll.88e82cb9.js";
import {
    g as y,
    S as E
} from "./Waves.vue.f4239951.js";
const V = {
        name: "AppAndDocsLinks",
        props: {
            buttonText: {
                type: String,
                default: ""
            }
        },
        methods: {
            gtagEvent: h
        }
    },
    D = {
        class: "grad-bg-section"
    },
    M = {
        class: "ct",
        "data-reveal": "bottom"
    };

function P(t, d, o, i, a, r) {
    const l = A,
        e = b;
    return n(), s("div", D, [c("div", M, [m(l, {
        title: o.buttonText,
        className: "bn-max",
        onClick: d[0] || (d[0] = u => r.gtagEvent("go_to_app", {
            url: "https://app.uncx.network/",
            page: t.$route.path,
            position: "section"
        }))
    }, null, 8, ["title"]), m(e, {
        to: "https://docs.uncx.network/",
        title: "nav.doc",
        className: "bn-max bn-border",
        target: "_blank"
    }, null, 8, ["to", "title"])])])
}
const G = $(V, [
        ["render", P]
    ]),
    H = {
        name: "GetInTouch"
    },
    I = {
        class: "grad-bg-section"
    },
    W = {
        class: "ct ct-social items-center",
        "data-reveal": "bottom"
    };

function j(t, d, o, i, a, r) {
    const l = k;
    return n(), s("div", I, [c("div", W, [c("h2", null, v(t.$t("bottomSocial")), 1), m(l)])])
}
const q = $(H, [
        ["render", j]
    ]),
    z = {
        props: ["button", "social"]
    };

function F(t, d, o, i, a, r) {
    const l = q,
        e = G,
        u = N;
    return n(), s("div", null, [o.social ? (n(), _(l, {
        key: 0
    })) : (n(), _(e, {
        key: 1,
        "button-text": o.button
    }, null, 8, ["button-text"])), m(u)])
}
const at = $(z, [
        ["render", F]
    ]),
    X = {
        class: "ct"
    },
    Y = {
        class: "l"
    },
    Z = ["innerHTML"],
    J = {
        class: "intro",
        "data-reveal": "bottom"
    },
    K = {
        key: 0,
        class: "butt",
        "data-reveal": "bottom"
    },
    O = {
        class: "r",
        "data-reveal": ""
    },
    it = S({
        __name: "Page",
        props: {
            id: {
                type: String,
                default: ""
            },
            title: {
                type: String,
                default: ""
            },
            intro: {
                type: String,
                default: ""
            },
            img: {
                type: String,
                default: ""
            },
            doc: {
                default: ""
            },
            nb: {
                type: Number,
                default: () => []
            },
            tl: {
                type: Boolean,
                default: void 0
            },
            animation: {
                type: String,
                default: ""
            },
            topButtons: {
                type: Array,
                default: () => []
            }
        },
        setup(t) {
            const d = t;
            return T(() => {
                y.registerPlugin(E.ScrollTrigger), y.fromTo("#t .bg > div", {
                    y: "0%",
                    duration: 1
                }, {
                    y: "25%",
                    ease: "none",
                    duration: 1,
                    scrollTrigger: {
                        trigger: "#t .bg",
                        start: "top top",
                        end: "bottom top",
                        scrub: !0
                    }
                }), d.tl !== !1 && x(() => {
                    let o = document.querySelectorAll(".img-i").length,
                        i = .5,
                        a = y.timeline({
                            repeat: -1,
                            yoyo: !0,
                            defaults: {
                                transition: 0
                            }
                        });
                    a.fromTo(".i-0", {
                        opacity: 1
                    }, {
                        opacity: 0,
                        delay: i
                    }, "a"), a.fromTo(".i-1", {
                        opacity: 0
                    }, {
                        opacity: 1,
                        delay: i
                    }, "a"), a.fromTo(".i-1", {
                        opacity: 1
                    }, {
                        opacity: 0,
                        delay: i
                    }, "b"), o === 3 ? (a.fromTo(".i-2", {
                        opacity: 0
                    }, {
                        opacity: 1,
                        delay: i
                    }, "b"), a.fromTo(".i-2", {
                        opacity: 1
                    }, {
                        opacity: 1,
                        delay: i / 2
                    }, "c")) : a.fromTo(".i-1", {
                        opacity: 0
                    }, {
                        opacity: 1,
                        delay: i / 2
                    }, "c")
                })
            }), (o, i) => {
                const a = b,
                    r = C,
                    l = w;
                return n(), s("div", {
                    id: "t",
                    class: p("t-page t-" + t.id)
                }, [c("div", X, [c("div", Y, [c("h1", {
                    innerHTML: o.$t(t.title),
                    "data-reveal": "bottom",
                    class: "grd"
                }, null, 8, Z), c("div", J, [c("p", null, v(o.$t(t.intro)), 1)]), t.topButtons && t.topButtons.length ? (n(), s("div", K, [(n(!0), s(g, null, f(t.topButtons, e => (n(), _(a, {
                    to: e.url,
                    class: p(["bn-max", {
                        "bn-border": e == null ? void 0 : e.bordered
                    }]),
                    title: e.title,
                    target: e == null ? void 0 : e.target,
                    key: e.title + e.url,
                    onClick: u => B(h)(String(e.event), {
                        url: e.url,
                        page: o.$route.path,
                        position: "top"
                    })
                }, null, 8, ["to", "class", "title", "target", "onClick"]))), 128))])) : L("", !0)]), c("div", O, [t.id !== "network" ? (n(), s("div", {
                    key: 0,
                    class: p(["img", t.animation])
                }, [m(r, {
                    src: "hero/unicrypt-" + t.img + "-00.png",
                    class: "img-i i-0",
                    alt: o.$t(t.title),
                    w: 600,
                    h: 635
                }, null, 8, ["src", "alt"]), (n(!0), s(g, null, f(t.nb, (e, u) => (n(), _(r, {
                    src: "hero/unicrypt-" + t.img + "-0" + e + ".png",
                    class: p("img-i i-" + e),
                    alt: o.$t(t.title),
                    w: 600,
                    h: 635,
                    key: u
                }, null, 8, ["src", "class", "alt"]))), 128))], 2)) : (n(), s("div", {
                    key: 1,
                    class: p(["img", t.animation])
                }, [(n(), s(g, null, f(6, (e, u) => m(r, {
                    src: "hero/unicrypt-" + t.img + "-00.png",
                    class: p("img-i i-" + e),
                    alt: o.$t(t.title),
                    w: 600,
                    h: 635,
                    key: u
                }, null, 8, ["src", "class", "alt"])), 64))], 2))])]), m(l)], 2)
            }
        }
    });
export {
    it as _, at as a
};