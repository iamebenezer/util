import {
    _ as h,
    a as b
} from "./Page.vue.e52fd804.js"; /* empty css                 */
import {
    _ as f,
    h as g
} from "./Section.6cf006c4.js";
import {
    a as v,
    _ as x
} from "./services.05816bf8.js";
import {
    c as w
} from "./Waves.a713412c.js";
import {
    E as B,
    o as c,
    b as i,
    h as n,
    V as o,
    Y as k,
    Z as L,
    $,
    X as y,
    S as C,
    c as S,
    C as T,
    u as N
} from "./entry.6795a269.js";
import {
    _ as V
} from "./BgUnicornMiddle.34cd4222.js";
import {
    _ as M
} from "./Section.e79dd368.js";
import {
    a as P
} from "./Scroll.88e82cb9.js";
import "./App.80f13a2f.js";
import "./Waves.vue.f4239951.js";
import "./_commonjsHelpers.28e086c5.js";
import "./nuxt-link.52eebdb1.js"; /* empty css                    */
import "./BgUnicornTwo.c77a3fd9.js";
import "./index.a61f72ed.js";
import "./client-only.2bc3c0c4.js";
const E = {
        props: ["token", "rowsLength", "link"]
    },
    H = {
        class: "tk",
        "data-reveal": "bottom"
    },
    I = {
        class: "sub"
    },
    z = {
        class: "tk-list"
    },
    D = {
        class: "title-tk",
        "data-reveal": "bottom"
    },
    F = {
        "data-reveal": "bottom"
    },
    U = ["innerHTML"],
    X = {
        class: "tk-btn",
        "data-reveal": "bottom"
    };

function Y(l, r, t, d, m, u) {
    const e = v,
        _ = w,
        a = x;
    return c(), i("div", {
        class: y("tk-" + t.token)
    }, [n("div", H, [o(e, {
        src: "services/token-ecosystem_unicrypt_" + t.token + ".png",
        w: 600,
        h: 635,
        class: "tk-ico",
        draggable: !1
    }, null, 8, ["src"]), o(e, {
        src: "light_" + t.token + ".png",
        w: 465,
        h: 590,
        class: "tk-light",
        draggable: !1
    }, null, 8, ["src"]), n("div", I, k(t.token), 1)]), n("div", z, [n("div", D, k(t.token), 1), n("ul", F, [(c(!0), i(L, null, $(t.rowsLength, s => (c(), i("li", {
        key: s
    }, [o(_, {
        icon: t.token === "uncl" ? "check-2" : "check",
        viewbox: "0 0 128 128"
    }, null, 8, ["icon"]), n("p", {
        innerHTML: l.$t(`tokens.${t.token}.${s-1}`)
    }, null, 8, U)]))), 128))])]), n("div", X, [o(a, {
        to: t.link,
        title: "tokens." + t.token + "_btn",
        className: t.token === "uncl" ? "bn-max bn-second" : "bn-max",
        target: "_blank"
    }, null, 8, ["to", "title", "className"])])], 2)
}
const Z = B(E, [
        ["render", Y]
    ]),
    j = {
        id: "tk"
    },
    q = {
        class: "ct"
    },
    A = {
        class: "col-tk"
    },
    rt = {
        __name: "tokens",
        setup(l) {
            C();
            const r = g.tokens;
            return (t, d) => {
                const m = h,
                    u = f,
                    e = Z,
                    _ = V,
                    a = M,
                    s = b,
                    p = P;
                return c(), S(p, null, {
                    default: T(() => [o(m, {
                        id: "tokens",
                        title: "tokens.title",
                        intro: "tokens.intro",
                        img: "token-uncl-uncx-image",
                        nb: 1,
                        tl: !1,
                        "top-buttons": N(r)
                    }, null, 8, ["title", "intro", "top-buttons"]), n("div", j, [n("div", q, [o(u, {
                        title: "tokens.title1"
                    }, null, 8, ["title"]), n("div", A, [o(e, {
                        token: "uncx",
                        "rows-length": 4,
                        link: "https://www.coingecko.com/en/coins/unicrypt"
                    }, null, 8, ["link"])])]), o(_, {
                        two: !0
                    })]), o(a, {
                        page: "tokens",
                        "rows-length": 1
                    }), o(s, {
                        button: "tokens.button"
                    }, null, 8, ["button"])]),
                    _: 1
                })
            }
        }
    };
export {
    rt as
    default
};