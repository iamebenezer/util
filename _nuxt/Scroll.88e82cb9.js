import {
    E as i,
    o as n,
    b as c,
    X as m,
    h as d,
    A as u,
    N as p,
    D as f,
    V as e,
    C as h
} from "./entry.6795a269.js";
import {
    _ as v,
    a as g
} from "./Waves.a713412c.js";
import {
    _ as x
} from "./client-only.2bc3c0c4.js";
import {
    i as y,
    S as $
} from "./index.a61f72ed.js";
import {
    g as b
} from "./Waves.vue.f4239951.js";
const N = {
        props: ["className"]
    },
    S = d("div", null, null, -1),
    w = [S];

function C(_, o, s, r, t, a) {
    return n(), c("div", {
        class: m(s.className ? "bg bg-" + s.className : "bg")
    }, w, 2)
}
const z = i(N, [
        ["render", C]
    ]),
    B = {
        id: "smooth"
    },
    A = {
        __name: "Scroll",
        setup(_) {
            const o = u(null);
            return p(() => {
                window.innerWidth > 1080 && !y() ? (o.value && (o.value.scroll.destroy(), o.value = null), o.value = new $, document.body.classList.add("smooth-scroll")) : b.fromTo("[data-reveal]", {
                    y: 100,
                    opacity: 0
                }, {
                    duration: 1.7,
                    opacity: 1,
                    y: 0,
                    stagger: {
                        each: .1,
                        grid: [0, 150]
                    },
                    ease: "power2.out"
                })
            }), (s, r) => {
                const t = v,
                    a = x,
                    l = g;
                return n(), c("div", B, [f(s.$slots, "default"), e(a, null, {
                    default: h(() => [e(t)]),
                    _: 1
                }), e(l)])
            }
        }
    };
export {
    z as _, A as a
};