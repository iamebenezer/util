import {
    a as o,
    A as u,
    N as d,
    b
} from "./entry.6795a269.js";
const m = o({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(k, {
        slots: a,
        attrs: c
    }) {
        const l = u(!1);
        return d(() => {
            l.value = !0
        }), e => {
            var t;
            if (l.value) return (t = a.default) == null ? void 0 : t.call(a);
            const n = a.fallback || a.placeholder;
            if (n) return n();
            const r = e.fallback || e.placeholder || "",
                f = e.fallbackTag || e.placeholderTag || "span";
            return b(f, c, r)
        }
    }
});
export {
    m as _
};