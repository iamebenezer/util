import {
    _ as g
} from "./nuxt-link.52eebdb1.js";
import x from "./ContentRenderer.7a82949c.js";
import {
    E as f,
    o as s,
    b as n,
    h as d,
    a as h,
    r as c,
    u as e,
    W as l,
    V as i,
    C as v,
    f as b,
    X as k,
    U as y,
    Y as w
} from "./entry.6795a269.js";
import {
    g as C
} from "./helpers.1549a486.js";
const $ = {},
    B = {
        xmlns: "http://www.w3.org/2000/svg",
        fill: "none",
        viewBox: "0 0 24 24",
        "stroke-width": "1.5",
        stroke: "currentColor"
    },
    N = d("path", {
        "stroke-linecap": "round",
        "stroke-linejoin": "round",
        d: "M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3"
    }, null, -1),
    V = [N];

function T(_, m) {
    return s(), n("svg", B, V)
}
const P = f($, [
        ["render", T]
    ]),
    j = {
        class: "blog-page"
    },
    z = {
        key: 0,
        class: "text-center text-2xl font-semibold md:text-3xl"
    },
    E = {
        key: 0,
        class: "text-xl font-semibold opacity-60 md:text-4xl"
    },
    q = h({
        __name: "post-page",
        props: {
            post: {
                type: Object,
                required: !0
            }
        },
        setup(_) {
            const m = _,
                t = c(() => C(m.post)),
                a = c(() => {
                    var o;
                    return "image" in t.value ? (o = t.value) == null ? void 0 : o.image : ""
                }),
                r = c(() => {
                    var o;
                    return "imageText" in t.value ? (o = t.value) == null ? void 0 : o.imageText : ""
                });
            return (o, I) => {
                const p = g,
                    u = x;
                return s(), n("div", j, [e(t) ? l("", !0) : (s(), n("h1", z, " Page not found ")), d("div", null, [i(p, {
                    to: "/blog",
                    class: "blog-page__go-back mb-4 flex items-center gap-4 text-xl font-semibold text-green-500"
                }, {
                    default: v(() => [i(P, {
                        class: "h-6 w-6 stroke-green-500"
                    }), b(" Return to list ")]),
                    _: 1
                }), e(r) || e(a) ? (s(), n("div", {
                    key: 0,
                    class: k(["blog-page__title rounded-3xl bg-cover bg-center bg-no-repeat", {
                        "with-image": e(a)
                    }]),
                    style: y({
                        backgroundImage: `url(${e(a)})`
                    })
                }, [e(r) ? (s(), n("div", E, w(e(r)), 1)) : l("", !0)], 6)) : l("", !0), i(u, {
                    value: e(t),
                    class: "prose prose-invert"
                }, null, 8, ["value"])])])
            }
        }
    });
export {
    q as _
};