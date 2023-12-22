import {
    _ as a
} from "./Scroll.88e82cb9.js";
import {
    g as t,
    S as n
} from "./Waves.vue.f4239951.js";
import {
    N as i,
    o as c,
    b as l,
    h as e,
    V as _,
    X as g
} from "./entry.6795a269.js";
const p = {
        id: "t",
        class: g("t-page t-default")
    },
    d = {
        class: "ct"
    },
    m = ["innerHTML"],
    S = {
        __name: "Default",
        props: {
            title: {
                type: String,
                required: !0
            }
        },
        setup(o) {
            return i(() => {
                t.registerPlugin(n.ScrollTrigger), t.fromTo("#t .bg > div", {
                    y: "0%"
                }, {
                    y: "25%",
                    ease: "none",
                    scrollTrigger: {
                        trigger: "#t .bg",
                        start: "top top",
                        end: "bottom top",
                        scrub: !0
                    }
                })
            }), (r, u) => {
                const s = a;
                return c(), l("div", p, [e("div", d, [e("h1", {
                    innerHTML: r.$t(o.title),
                    "data-reveal": "bottom",
                    class: "grd"
                }, null, 8, m)]), _(s)])
            }
        }
    };
export {
    S as _
};