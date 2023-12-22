import {
    _ as b,
    a as x
} from "./Page.vue.e52fd804.js"; /* empty css                 */
import {
    _ as f,
    h as v
} from "./Section.6cf006c4.js";
import {
    a as B
} from "./services.05816bf8.js";
import {
    _ as k
} from "./Page.7622f5df.js";
import {
    _ as y
} from "./Section.e79dd368.js";
import {
    a as P
} from "./Scroll.88e82cb9.js";
import {
    S,
    c as j,
    C,
    o as a,
    V as t,
    u as e,
    h as o,
    b as c,
    $ as V,
    Z as $,
    Y as s
} from "./entry.6795a269.js";
import "./Waves.a713412c.js";
import "./nuxt-link.52eebdb1.js";
import "./Waves.vue.f4239951.js";
import "./_commonjsHelpers.28e086c5.js";
import "./App.80f13a2f.js"; /* empty css                    */
import "./Card.6e9ec9f6.js";
import "./BgUnicornMiddle.34cd4222.js";
import "./index.a61f72ed.js";
import "./BgUnicornTwo.c77a3fd9.js";
import "./client-only.2bc3c0c4.js";
const T = {
        baby: {
            name: "Baby Doge",
            img: "launchpad/baby-doge.png",
            x: "16,520"
        },
        cult: {
            name: "Cult",
            img: "launchpad/cult.jpg",
            x: "315"
        },
        vempire: {
            name: "vEmpire",
            img: "launchpad/vempire.png",
            x: "19"
        },
        quantum: {
            name: "Project Quantum",
            img: "launchpad/project-quantum.jpeg",
            x: "105"
        }
    },
    q = {
        class: "lp-success"
    },
    w = {
        class: "ct"
    },
    D = {
        class: "lst"
    },
    E = {
        class: "pad",
        "data-reveal": "bottom"
    },
    N = {
        class: "name"
    },
    F = {
        class: "x grd"
    },
    et = {
        __name: "launchpad",
        setup(I) {
            const m = v.launchpad;
            return S(), (i, L) => {
                const p = b,
                    r = f,
                    _ = B,
                    l = k,
                    u = y,
                    d = x,
                    h = P;
                return a(), j(h, null, {
                    default: C(() => [t(p, {
                        id: "launchpad",
                        title: "launchpad.title",
                        intro: "launchpad.intro",
                        img: "token-ilo-launchpad-rocket",
                        nb: 2,
                        animation: "top-right-bounce",
                        "top-buttons": e(m)
                    }, null, 8, ["title", "intro", "top-buttons"]), o("section", q, [o("div", w, [t(r, {
                        title: "launchpad.title1"
                    }, null, 8, ["title"]), o("div", D, [(a(!0), c($, null, V(e(T), (n, g) => (a(), c("div", {
                        key: g
                    }, [o("div", E, [t(_, {
                        src: n.img,
                        alt: n.name + " • " + i.$t("site")
                    }, null, 8, ["src", "alt"]), o("div", N, s(n.name), 1), o("div", F, s(n.x) + "x", 1)])]))), 128))])])]), t(l), t(u, {
                        page: "launchpad",
                        "rows-length": 1
                    }), t(d, {
                        button: "launchpad.button"
                    }, null, 8, ["button"])]),
                    _: 1
                })
            }
        }
    };
export {
    et as
    default
};