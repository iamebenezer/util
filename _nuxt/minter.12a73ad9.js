import {
    _ as u,
    a as d
} from "./Page.vue.e52fd804.js"; /* empty css                 */
import {
    _ as f
} from "./BlockchainLogo.4d82f840.js";
import {
    c as h
} from "./Waves.a713412c.js";
import {
    _ as b
} from "./BgUnicornMiddle.34cd4222.js";
import {
    _ as g
} from "./Section.e79dd368.js";
import {
    a as v
} from "./Scroll.88e82cb9.js";
import {
    S as B,
    c as k,
    C as x,
    o as e,
    V as t,
    u as $,
    h as o,
    b as S,
    $ as w,
    Z as C,
    Y as V
} from "./entry.6795a269.js";
import {
    h as y
} from "./Section.6cf006c4.js";
import "./App.80f13a2f.js";
import "./services.05816bf8.js";
import "./nuxt-link.52eebdb1.js"; /* empty css                    */
import "./Waves.vue.f4239951.js";
import "./_commonjsHelpers.28e086c5.js";
import "./BgUnicornTwo.c77a3fd9.js";
import "./index.a61f72ed.js";
import "./client-only.2bc3c0c4.js";
const I = {
        id: "tb"
    },
    L = {
        class: "ct"
    },
    N = {
        class: "tbl"
    },
    P = {
        class: "td-title"
    },
    D = {
        class: "td"
    },
    tt = {
        __name: "minter",
        setup(E) {
            B();
            const i = y.minter;
            return (s, F) => {
                const r = u,
                    m = f,
                    _ = h,
                    c = b,
                    a = g,
                    p = d,
                    l = v;
                return e(), k(l, null, {
                    default: x(() => [t(r, {
                        id: "minter",
                        title: "minter.title",
                        intro: "minter.intro",
                        img: "token-minting-hero-image",
                        nb: 2,
                        animation: "top-bounce",
                        "top-buttons": $(i)
                    }, null, 8, ["title", "intro", "top-buttons"]), t(m), o("div", I, [o("div", L, [o("div", N, [(e(), S(C, null, w(7, n => o("div", {
                        key: n,
                        class: "tr",
                        "data-reveal": "bottom"
                    }, [o("div", P, V(s.$t(`minter.table.${n-1}`)), 1), o("div", D, [t(_, {
                        icon: "check",
                        viewbox: "0 0 128 128"
                    })])])), 64))])]), t(c)]), t(a, {
                        page: "minter",
                        "rows-length": 3
                    }), t(p, {
                        button: "minter.button"
                    }, null, 8, ["button"])]),
                    _: 1
                })
            }
        }
    };
export {
    tt as
    default
};