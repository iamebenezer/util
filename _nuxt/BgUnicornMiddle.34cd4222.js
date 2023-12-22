import {
    a as e
} from "./services.05816bf8.js";
import {
    g as o,
    S as t
} from "./Waves.vue.f4239951.js";
import {
    E as c,
    o as s,
    c as i
} from "./entry.6795a269.js";
const a = {
    props: ["two"],
    mounted() {
        o.registerPlugin(t.ScrollTrigger), o.fromTo(".unicorn-middle img", {
            y: "10%"
        }, {
            y: "-25%",
            ease: "none",
            scrollTrigger: {
                trigger: ".unicorn-middle",
                start: "top bottom",
                end: "bottom top",
                scrub: !0
            }
        })
    }
};

function g(l, m, r, p, _, d) {
    const n = e;
    return s(), i(n, {
        src: r.two ? "bg-unicorn-middle-2.png" : "bg-unicorn-middle.png",
        w: 1920,
        h: 1870,
        class: "unicorn-middle",
        draggable: !1,
        loading: "eadger"
    }, null, 8, ["src"])
}
const x = c(a, [
    ["render", g]
]);
export {
    x as _
};