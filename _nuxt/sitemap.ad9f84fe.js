import {
    _ as l
} from "./Default.441e0b74.js";
import {
    _ as p
} from "./nuxt-link.52eebdb1.js";
import {
    a as d
} from "./Scroll.88e82cb9.js";
import {
    S as u,
    c as f,
    C as e,
    o as s,
    V as a,
    h as t,
    Y as n,
    b as h,
    $ as v,
    Z as k,
    f as x
} from "./entry.6795a269.js";
import "./Waves.vue.f4239951.js";
import "./_commonjsHelpers.28e086c5.js";
import "./Waves.a713412c.js";
import "./client-only.2bc3c0c4.js";
import "./index.a61f72ed.js";
const g = {
        class: "ct"
    },
    b = {
        class: "def"
    },
    y = {
        "data-reveal": "bottom",
        class: "grd"
    },
    B = {
        "data-reveal": "bottom",
        class: "p"
    },
    N = {
        class: "stm"
    },
    S = "https://uncx.network",
    Z = {
        __name: "sitemap",
        setup(V) {
            u();
            const c = ["/", "/vesting", "/tokens", "/staking", "/network", "/minter", "/launchpad", "/team", "/privacy-policy", "/terms", "/sitemap"];
            return (r, $) => {
                const i = l,
                    m = p,
                    _ = d;
                return s(), f(_, null, {
                    default: e(() => [a(i, {
                        title: "sitemap.title"
                    }, null, 8, ["title"]), t("div", g, [t("div", b, [t("div", null, [t("h2", y, n(r.$t("sitemap.sub")), 1), t("div", B, [t("ul", N, [(s(), h(k, null, v(c, o => t("li", {
                        key: o
                    }, [a(m, {
                        to: o
                    }, {
                        default: e(() => [x(n(S + o), 1)]),
                        _: 2
                    }, 1032, ["to"])])), 64))])])])])])]),
                    _: 1
                })
            }
        }
    };
export {
    Z as
    default
};