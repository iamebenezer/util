import {
    a as b,
    r,
    u as a,
    o,
    b as n,
    W as s
} from "./entry.6795a269.js";
const g = {
        key: 0,
        class: "pagination mt-10 flex w-full justify-center gap-3"
    },
    f = b({
        __name: "pagination",
        props: {
            perPage: {
                type: Number,
                required: !0
            },
            current: {
                type: Number,
                required: !0
            },
            total: {
                type: Number,
                required: !0
            }
        },
        emits: ["prev", "next"],
        setup(i, {
            emit: u
        }) {
            const e = i,
                t = r(() => e.total ? Math.ceil(Number(e.total) / Number(e.perPage)) : 1),
                l = r(() => e.current >= t.value - 1),
                c = r(() => e.current <= 0),
                p = () => {
                    c.value || u("prev", {
                        totalPages: t.value
                    })
                },
                d = () => {
                    l.value || u("next", {
                        totalPages: t.value
                    })
                };
            return (m, v) => a(t) > 1 ? (o(), n("div", g, [a(c) ? s("", !0) : (o(), n("button", {
                key: 0,
                class: "rounded border border-solid border-neutral-500 p-3 transition hover:bg-neutral-900",
                onClick: p
            }, " Prev page ")), a(l) ? s("", !0) : (o(), n("button", {
                key: 1,
                class: "rounded border border-solid border-neutral-500 p-3 transition hover:bg-neutral-900",
                onClick: d
            }, " Next page "))])) : s("", !0)
        }
    });
export {
    f as _
};