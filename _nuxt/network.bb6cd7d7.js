import {
    _ as x,
    a as y
} from "./Page.vue.e52fd804.js"; /* empty css                 */
import {
    _ as B,
    h as $
} from "./Section.6cf006c4.js";
import {
    p as C,
    _ as V
} from "./Card.15fcc3d9.js";
import {
    _ as j
} from "./services.05816bf8.js";
import {
    _ as N
} from "./BgUnicornTwo.c77a3fd9.js";
import {
    a as P
} from "./Scroll.88e82cb9.js";
import {
    S,
    c as _,
    C as T,
    o as n,
    V as e,
    u as c,
    h as o,
    b as s,
    $ as a,
    Z as l,
    W as E
} from "./entry.6795a269.js";
import {
    g as F
} from "./Waves.a713412c.js";
import "./App.80f13a2f.js";
import "./Waves.vue.f4239951.js";
import "./_commonjsHelpers.28e086c5.js";
import "./nuxt-link.52eebdb1.js"; /* empty css                    */
import "./client-only.2bc3c0c4.js";
import "./index.a61f72ed.js";
const L = {
        class: "network"
    },
    W = {
        class: "ct"
    },
    z = {
        class: "lst"
    },
    D = {
        class: "network__clients lst opacity-70 grayscale"
    },
    G = ["src", "alt"],
    I = {
        class: "network__clients lst opacity-70 grayscale"
    },
    U = ["href"],
    Z = ["src", "alt"],
    ct = {
        __name: "network",
        setup(q) {
            S();
            const p = $.network,
                g = ["bogged-finance-logo.svg", "cer-logo.svg", "debank-logo.svg", "defillama-logo.svg", "dexcheck-logo.svg", "dextools-logo.svg", "gecko-terminal-logo.webp", "zerion-logo.svg", "Graph.png"],
                u = [{
                    img: "bcarmy.png",
                    url: "https://bc.army"
                }, {
                    img: "256mkt.png",
                    url: "https://256mkt.com"
                }, {
                    img: "bcbrothers.png",
                    url: "https://www.blockchain-brothers.com"
                }, {
                    img: "WNF.png",
                    url: "https://www.wnf.agency"
                }];
            return (d, i) => {
                const k = x,
                    r = B,
                    h = V,
                    w = j,
                    b = N,
                    f = y,
                    v = P;
                return n(), _(v, null, {
                    default: T(() => [e(k, {
                        id: "network",
                        title: "network.title",
                        intro: "network.intro",
                        doc: !0,
                        img: "partneships-hero-image",
                        nb: 1,
                        tl: !1,
                        "top-buttons": c(p)
                    }, null, 8, ["title", "intro", "top-buttons"]), o("section", L, [o("div", W, [e(r, {
                        title: "network.title1"
                    }, null, 8, ["title"]), o("div", z, [(n(!0), s(l, null, a(c(C), (t, m) => (n(), s("div", {
                        key: m,
                        "data-reveal": "bottom"
                    }, [t.type === 1 ? (n(), _(h, {
                        key: 0,
                        logo: t,
                        id: m
                    }, null, 8, ["logo", "id"])) : E("", !0)]))), 128))]), e(r, {
                        title: "customers.title",
                        txt: "customers.txt"
                    }), o("div", D, [(n(), s(l, null, a(g, t => o("div", {
                        key: t,
                        class: "network__clients-item",
                        "data-reveal": "bottom"
                    }, [o("img", {
                        src: "/img/clients/" + t,
                        alt: t,
                        class: "network__clients-img mx-auto h-16 w-full object-contain object-center"
                    }, null, 8, G)])), 64))]), e(w, {
                        to: "https://docs.uncx.network/uncx-api-collaborations",
                        target: "_blank",
                        title: "network.customersDoc",
                        class: "mb-16",
                        onClick: i[0] || (i[0] = t => c(F)("go_to_docs", {
                            url: "https://docs.uncx.network/uncx-api-collaborations",
                            page: d.$route.path,
                            position: "section"
                        }))
                    }, null, 8, ["title"]), e(r, {
                        title: "marketing.title",
                        txt: "marketing.txt"
                    }), o("div", I, [(n(), s(l, null, a(u, t => o("a", {
                        key: t.url,
                        href: t.url,
                        target: "_blank",
                        rel: "nofollow",
                        class: "network__clients-item",
                        "data-reveal": "bottom"
                    }, [o("img", {
                        src: "/img/marketing/" + t.img,
                        alt: t.img,
                        class: "network__clients-img mx-auto h-16 w-full object-contain object-center"
                    }, null, 8, Z)], 8, U)), 64))]), e(b)])]), e(f, {
                        social: !0
                    })]),
                    _: 1
                })
            }
        }
    };
export {
    ct as
    default
};