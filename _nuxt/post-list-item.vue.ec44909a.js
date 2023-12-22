import c from "./ContentRenderer.7a82949c.js";
import {
    g as i
} from "./helpers.1549a486.js";
import {
    a as d,
    r as t,
    o as _,
    b as m,
    h as r,
    U as u,
    u as s,
    V as g
} from "./entry.6795a269.js";
const b = {
        class: "blog-post-preview prose prose-invert block cursor-pointer overflow-hidden rounded-tl-3xl"
    },
    v = {
        class: "blog-post-preview__body pointer-events-none mt-2 block h-80 overflow-hidden rounded-br-3xl border border-emerald-500 p-4"
    },
    k = d({
        __name: "post-list-item",
        props: {
            post: {
                type: Object,
                required: !0
            }
        },
        setup(n) {
            const a = n,
                e = t(() => i(a.post)),
                l = t(() => {
                    var o;
                    return "image" in e.value ? (o = e.value) == null ? void 0 : o.image : "/img/bg/bg-1.jpg"
                });
            return (o, f) => {
                const p = c;
                return _(), m("div", b, [r("div", {
                    class: "blog-post-preview__bg h-40 w-full bg-cover bg-center bg-no-repeat",
                    style: u({
                        backgroundImage: `url(${s(l)})`
                    })
                }, null, 4), r("div", v, [g(p, {
                    value: s(e)
                }, null, 8, ["value"])])])
            }
        }
    });
export {
    k as _
};