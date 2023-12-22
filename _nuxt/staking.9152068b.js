import {
    _ as b,
    a as h
} from "./Page.vue.e52fd804.js"; /* empty css                 */
import {
    _ as v
} from "./BlockchainLogo.4d82f840.js";
import {
    c as B
} from "./Waves.a713412c.js";
import {
    _ as $
} from "./BgUnicornMiddle.34cd4222.js";
import {
    _ as x
} from "./Section.e79dd368.js";
import {
    a as S
} from "./Scroll.88e82cb9.js";
import {
    S as w,
    c as i,
    C as y,
    o as n,
    V as o,
    u as C,
    h as t,
    Y as a,
    b as V,
    $ as N,
    Z as I,
    W as c
} from "./entry.6795a269.js";
import {
    h as L
} from "./Section.6cf006c4.js";
import "./App.80f13a2f.js";
import "./services.05816bf8.js";
import "./nuxt-link.52eebdb1.js"; /* empty css                    */
import "./Waves.vue.f4239951.js";
import "./_commonjsHelpers.28e086c5.js";
import "./BgUnicornTwo.c77a3fd9.js";
import "./index.a61f72ed.js";
import "./client-only.2bc3c0c4.js";
const P = {
        id: "tb"
    },
    D = {
        class: "ct"
    },
    E = {
        class: "tbl"
    },
    F = {
        class: "tr",
        "data-reveal": "bottom"
    },
    M = t("div", {
        class: "td-title"
    }, null, -1),
    T = {
        class: "td"
    },
    U = {
        class: "grd"
    },
    W = {
        class: "td"
    },
    Y = {
        class: "grd"
    },
    Z = {
        class: "td-title"
    },
    j = {
        class: "td"
    },
    q = {
        class: "td"
    },
    mt = {
        __name: "staking",
        setup(z) {
            w();
            const _ = L.staking,
                m = [{
                    title: "staking.table.1",
                    staking: !1,
                    farming: !0
                }, {
                    title: "staking.table.2",
                    staking: !0,
                    farming: !1
                }, {
                    title: "staking.table.3",
                    staking: !0,
                    farming: !0
                }, {
                    title: "staking.table.4",
                    staking: !0,
                    farming: !0
                }, {
                    title: "staking.table.5",
                    staking: !0,
                    farming: !0
                }];
            return (s, A) => {
                const l = b,
                    g = v,
                    r = B,
                    d = $,
                    p = x,
                    u = h,
                    k = S;
                return n(), i(k, null, {
                    default: y(() => [o(l, {
                        id: "staking",
                        title: "staking.title",
                        intro: "staking.intro",
                        img: "staking-farming-image",
                        nb: 2,
                        animation: "top-bounce",
                        "top-buttons": C(_)
                    }, null, 8, ["title", "intro", "top-buttons"]), o(g), t("div", P, [t("div", D, [t("div", E, [t("div", F, [M, t("div", T, [t("strong", U, a(s.$t("staking.table.staking")), 1)]), t("div", W, [t("strong", Y, a(s.$t("staking.table.farming")), 1)])]), (n(), V(I, null, N(m, (e, f) => t("div", {
                        key: f,
                        class: "tr",
                        "data-reveal": "bottom"
                    }, [t("div", Z, a(s.$t(e.title)), 1), t("div", j, [e.staking ? (n(), i(r, {
                        key: 0,
                        icon: "check",
                        viewbox: "0 0 128 128"
                    })) : c("", !0)]), t("div", q, [e.farming ? (n(), i(r, {
                        key: 0,
                        icon: "check",
                        viewbox: "0 0 128 128"
                    })) : c("", !0)])])), 64))])]), o(d)]), o(p, {
                        page: "staking",
                        "rows-length": 2
                    }), o(u, {
                        button: "staking.button"
                    }, null, 8, ["button"])]),
                    _: 1
                })
            }
        }
    };
export {
    mt as
    default
};