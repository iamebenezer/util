import {
    _ as o
} from "./nuxt-link.52eebdb1.js";
import {
    o as r,
    c as g,
    C as m,
    h as u,
    Y as d,
    X as c,
    a0 as b,
    u as h,
    E as f,
    b as i,
    W as p
} from "./entry.6795a269.js"; /* empty css                    */
const W = {
        __name: "Link",
        props: ["title", "to", "className", "target"],
        setup(e) {
            return (s, t) => (r(), g(b(e.target ? "a" : h(o)), {
                class: c(["bn", e.className]),
                title: s.$t(e.title),
                to: e.to,
                href: e.target ? e.to : void 0,
                target: e.target,
                rel: e.target ? "noreferrer noopener" : void 0
            }, {
                default: m(() => [u("span", null, d(s.$t(e.title)), 1)]),
                _: 1
            }, 8, ["class", "title", "to", "href", "target", "rel"]))
        }
    },
    k = /\.webp$/,
    w = /\.(jpg|jpeg|png)$/,
    v = {
        props: ["src", "w", "h", "alt", "loading", "imgClass", "draggable"],
        data() {
            return {
                webp: !1,
                srcPrivate: "",
                fallbackEnabled: !0
            }
        },
        mounted() {
            this.srcPrivate = this.src, k.test(this.src) && (this.webp = !0, this.fallbackEnabled = !1)
        },
        methods: {
            imageErrorWebpFallback() {
                this.fallbackEnabled && (this.srcPrivate = this.src.replace(w, ".webp"), this.webp = !0, this.fallbackEnabled = !1)
            }
        }
    },
    y = {
        key: 0,
        class: "picture"
    },
    E = ["srcset"],
    _ = ["src", "loading", "width", "height", "alt", "draggable"];

function C(e, s, t, P, a, n) {
    return a.srcPrivate ? (r(), i("picture", y, [a.webp ? (r(), i("source", {
        key: 0,
        srcset: "/img/" + a.srcPrivate,
        type: "image/webp"
    }, null, 8, E)) : (r(), i("img", {
        key: 1,
        src: "/img/" + a.srcPrivate,
        loading: t.loading || "lazy",
        width: t.w,
        height: t.h,
        class: c(t.imgClass),
        alt: t.alt || e.$t("site"),
        draggable: t.draggable,
        onError: s[0] || (s[0] = (...l) => n.imageErrorWebpFallback && n.imageErrorWebpFallback(...l))
    }, null, 42, _))])) : p("", !0)
}
const F = f(v, [
        ["render", C]
    ]),
    j = {
        ilo: {
            slug: "launchpad",
            img: "services-new/unicrypt-icon-launchpad.png",
            order: 1
        },
        vesting: {
            slug: "vesting",
            img: "services-new/unicrypt-icon-locks.png",
            order: 2
        },
        staking: {
            slug: "staking",
            img: "services-new/unicrypt-icon-farms.png",
            order: 3
        },
        minter: {
            slug: "minter",
            img: "services-new/unicrypt-icon-minter.png",
            order: 4
        },
        ecosystem: {
            slug: "tokens",
            img: "services-new/unicrypt-icon-tokens.png",
            order: 5
        }
    };
export {
    W as _, F as a, j as s
};