import {
    a as t
} from "./services.05816bf8.js";
import {
    g as o,
    S as n
} from "./Waves.vue.f4239951.js";
import {
    E as e,
    o as c,
    c as s
} from "./entry.6795a269.js";
const a = {
    mounted() {
        o.registerPlugin(n.ScrollTrigger), o.fromTo(".unicorn-two img", {
            y: "20%"
        }, {
            y: "-20%",
            ease: "none",
            scrollTrigger: {
                trigger: ".unicorn-two",
                start: "top bottom",
                end: "bottom top",
                scrub: !0
            }
        })
    }
};

function i(_, p, g, m, u, l) {
    const r = t;
    return c(), s(r, {
        src: "bg-unicorn-two.png",
        w: 1920,
        h: 1830,
        class: "unicorn-two",
        draggable: !1
    }, null, 8, ["src"])
}
const b = e(a, [
    ["render", i]
]);
export {
    b as _
};