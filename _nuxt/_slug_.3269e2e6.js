import {
    _ as b
} from "./Spinner.c8a6f5e3.js";
import {
    _ as V
} from "./pagination.vue.68c6338d.js";
import "./pagination.vue.4ed993c7.js";
import {
    _ as q,
    a as A
} from "./Waves.a713412c.js";
import {
    _ as D
} from "./client-only.2bc3c0c4.js";
import {
    a as F,
    i as O,
    r as l,
    A as f,
    k as R,
    o,
    b as s,
    h as v,
    u as t,
    c as m,
    W as x,
    Z as h,
    Y as W,
    $ as X,
    V as i,
    C as j,
    R as E
} from "./entry.6795a269.js";
import {
    u as H
} from "./asyncData.3a9156d7.js";
import {
    _ as L
} from "./post-list-item.vue.ec44909a.js";
import {
    _ as M
} from "./post-page.vue.49d43347.js";
import {
    g as Q
} from "./helpers.1549a486.js";
import "./nuxt-link.52eebdb1.js";
import "./Waves.vue.f4239951.js";
import "./_commonjsHelpers.28e086c5.js";
import "./ContentRenderer.7a82949c.js";
import "./ContentRendererMarkdown.a28096a8.js";
import "./index.36486552.js";
import "./index.a6ef77ff.js";
const S = {
        class: "container ml-auto mr-auto mt-44 max-w-5xl p-6 text-white"
    },
    U = {
        class: "mb-14 text-3xl font-semibold md:text-4xl"
    },
    Y = {
        key: 1,
        class: "posts-wrapper flex flex-wrap"
    },
    Z = {
        key: 2,
        class: "text-center text-2xl"
    },
    ft = F({
        __name: "[[slug]]",
        setup(z) {
            const a = O().params.slug,
                u = l(() => !a),
                r = f(0),
                c = f(12),
                {
                    data: _,
                    pending: g,
                    refresh: d
                } = H(a ? () => $fetch("/api/content/post", {
                    query: {
                        alias: a
                    }
                }) : () => $fetch("/api/content/posts", {
                    query: {
                        limit: c.value,
                        skip: r.value * c.value
                    }
                }), "$28XTwQcjOT"),
                n = l(() => {
                    var e;
                    return a ? _.value || {} : ((e = _.value) == null ? void 0 : e.posts) || []
                }),
                k = l(() => {
                    var e;
                    return ((e = _.value) == null ? void 0 : e.total) || 0
                }),
                y = l(() => a && n.value ? Q(n.value) : null);
            R({
                titleTemplate() {
                    var e;
                    return `UNCX Network • ${((e=y.value)==null?void 0:e.title)||"Blog"}`
                }
            });
            const $ = () => {
                    r.value--, d()
                },
                C = () => {
                    r.value++, d()
                };
            return (e, I) => {
                const P = b,
                    N = V,
                    w = q,
                    B = D,
                    T = A;
                return o(), s("div", null, [v("div", S, [!t(u) && t(n) && !("length" in t(n)) ? (o(), m(M, {
                    key: 0,
                    post: t(n)
                }, null, 8, ["post"])) : x("", !0), t(u) ? (o(), s(h, {
                    key: 1
                }, [v("h1", U, W(e.$t("blog.title")), 1), t(g) ? (o(), m(P, {
                    key: 0
                })) : !t(g) && "length" in t(n) ? (o(), s("div", Y, [(o(!0), s(h, null, X(t(n), p => (o(), m(L, {
                    key: p.alias,
                    post: p,
                    onClick: J => ("navigateTo" in e ? e.navigateTo : t(E))("/blog/" + p.alias)
                }, null, 8, ["post", "onClick"]))), 128)), i(N, {
                    total: t(k),
                    current: t(r),
                    "per-page": t(c),
                    onPrev: $,
                    onNext: C
                }, null, 8, ["total", "current", "per-page"])])) : (o(), s("h2", Z, "No posts yet"))], 64)) : x("", !0)]), i(B, null, {
                    default: j(() => [i(w)]),
                    _: 1
                }), i(T, {
                    "no-animation": ""
                })])
            }
        }
    });
export {
    ft as
    default
};