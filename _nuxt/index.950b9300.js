import {
    _ as B,
    a as E
} from "./services.05816bf8.js";
import {
    _ as L,
    a as V
} from "./Scroll.88e82cb9.js";
import {
    g as y,
    S as w
} from "./Waves.vue.f4239951.js";
import {
    b as M,
    g as I
} from "./Waves.a713412c.js";
import {
    E as b,
    o as e,
    b as r,
    h as t,
    V as n,
    Y as g,
    W as x,
    a as P,
    Z as p,
    $ as v,
    c as h,
    u as S,
    X as T,
    S as N,
    C as j
} from "./entry.6795a269.js";
import {
    _ as D
} from "./BlockchainLogo.4d82f840.js";
import {
    _ as k,
    a as H,
    h as F
} from "./Section.6cf006c4.js";
import {
    t as f,
    _ as U
} from "./Card.6e9ec9f6.js";
import {
    _ as W
} from "./BgUnicornMiddle.34cd4222.js";
import {
    g as z
} from "./index.a61f72ed.js";
import {
    p as A,
    _ as O
} from "./Card.15fcc3d9.js";
import {
    t as R,
    _ as X
} from "./Member.b44afb3a.js";
import {
    _ as Y
} from "./BgUnicornTwo.c77a3fd9.js";
import "./nuxt-link.52eebdb1.js"; /* empty css                    */
import "./client-only.2bc3c0c4.js";
import "./_commonjsHelpers.28e086c5.js";
const Z = {
        data() {
            return {
                isError: !1
            }
        }
    },
    q = {
        key: 0,
        id: "fe"
    },
    G = {
        class: "ct"
    },
    J = {
        class: "txt",
        "data-reveal": "bottom"
    };

function K(c, i, m, u, a, s) {
    const l = k,
        _ = M;
    return a.isError ? x("", !0) : (e(), r("div", q, [t("div", G, [n(l, {
        title: "feed.title",
        class: "mt-0"
    }, null, 8, ["title"]), n(_, {
        "data-reveal": "bottom"
    }), t("div", J, [t("p", null, g(c.$t("feed.txt")), 1)])])]))
}
const Q = b(Z, [
        ["render", K]
    ]),
    tt = {
        id: "pa"
    },
    et = {
        class: "ct"
    },
    ot = {
        class: "lst"
    },
    nt = P({
        __name: "Section",
        setup(c) {
            return (i, m) => {
                const u = k,
                    a = O;
                return e(), r("div", tt, [t("div", et, [n(u, {
                    title: "partners.title",
                    txt: "partners.txt"
                }, null, 8, ["title", "txt"]), t("div", ot, [(e(!0), r(p, null, v(S(A), s => (e(), r("div", {
                    key: s.id,
                    "data-reveal": "bottom"
                }, [s != null && s.visible ? (e(), h(a, {
                    key: 0,
                    logo: s,
                    id: s.id
                }, null, 8, ["logo", "id"])) : x("", !0)]))), 128))])])])
            }
        }
    }),
    st = {
        id: "te"
    },
    ct = {
        class: "ct"
    },
    rt = {
        class: "lst"
    },
    _t = {
        class: "butt",
        "data-reveal": "bottom"
    },
    at = {
        __name: "Section",
        setup(c) {
            return (i, m) => {
                const u = k,
                    a = X,
                    s = B,
                    l = Y;
                return e(), r("div", st, [t("div", ct, [n(u, {
                    title: "team.title",
                    txt: "team.txt"
                }, null, 8, ["title", "txt"]), t("div", rt, [(e(!0), r(p, null, v(S(R), (_, d) => (e(), r(p, {
                    key: d
                }, [(_ == null ? void 0 : _.rang) === 1 ? (e(), h(a, {
                    key: 0,
                    id: d
                }, null, 8, ["id"])) : x("", !0)], 64))), 128))]), t("div", _t, [n(s, {
                    to: i.localePath("/team"),
                    title: "team.meet"
                }, null, 8, ["to", "title"])])]), n(l)])
            }
        }
    },
    it = {
        props: {
            buttons: {
                type: Array,
                default: () => []
            }
        },
        computed: {
            homeMainSectionImageIndexes: () => [1, 2, 3, 5, 6]
        },
        mounted() {
            y.registerPlugin(w.ScrollTrigger), y.fromTo("#t .bg > div", {
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
        },
        methods: {
            gtagEvent: I
        }
    },
    lt = {
        id: "t"
    },
    mt = {
        class: "ct"
    },
    dt = {
        class: "l"
    },
    ut = ["innerHTML"],
    pt = {
        class: "intro",
        "data-reveal": "bottom"
    },
    ht = {
        key: 0,
        class: "butt",
        "data-reveal": "bottom"
    },
    vt = {
        class: "r"
    },
    $t = {
        class: "illu",
        "data-reveal": ""
    };

function ft(c, i, m, u, a, s) {
    const l = B,
        _ = E,
        d = L;
    return e(), r("div", lt, [t("div", mt, [t("div", dt, [t("h1", {
        innerHTML: c.$t("home.top.h1"),
        "data-reveal": "bottom"
    }, null, 8, ut), t("div", pt, [t("p", null, g(c.$t("home.top.intro")), 1)]), m.buttons && m.buttons.length ? (e(), r("div", ht, [(e(!0), r(p, null, v(m.buttons, o => (e(), h(l, {
        to: o.url,
        class: T(["bn-max", {
            "bn-border": o.bordered
        }]),
        title: o.title,
        target: o.target,
        key: o.title + o.url,
        onClick: $ => s.gtagEvent(o.event, {
            url: o.url,
            page: c.$route.path,
            position: "top"
        })
    }, null, 8, ["to", "class", "title", "target", "onClick"]))), 128))])) : x("", !0)]), t("div", vt, [t("div", $t, [n(_, {
        src: "home/unicrypt-main-homepage-image-00-min.png",
        class: "lg-0",
        w: 2e3,
        h: 2e3
    }, null, 8, ["src"]), (e(!0), r(p, null, v(s.homeMainSectionImageIndexes, (o, $) => (e(), h(_, {
        src: "home/unicrypt-main-homepage-image-0" + o + "-min.png",
        class: T("lg-" + o),
        w: 2e3,
        h: 2e3,
        key: $
    }, null, 8, ["src", "class"]))), 128))])])]), n(d)])
}
const gt = b(it, [
        ["render", ft]
    ]),
    xt = {
        data() {
            return {
                tvl: "",
                list: {
                    projects: f.projects,
                    services: f.services,
                    users: f.users
                }
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            async fetchData() {
                const c = await fetch(f.api).then(i => i.json());
                this.tvl = `+${z(c)}$`
            }
        }
    },
    bt = {
        id: "tvl"
    },
    St = {
        class: "ct"
    },
    kt = {
        class: "head",
        "data-reveal": "bottom"
    },
    yt = {
        class: "sub"
    },
    Tt = ["title"],
    Bt = {
        class: "lst lst-tvl"
    };

function Ct(c, i, m, u, a, s) {
    const l = U,
        _ = W;
    return e(), r("div", bt, [t("div", St, [t("div", kt, [t("div", yt, g(c.$t("tvl.sub")), 1), t("h2", null, [t("a", {
        href: "https://defillama.com/protocol/uncx-network",
        target: "_blank",
        title: c.$t("tvl.sub"),
        rel: "noopener noreferrer",
        class: "grd"
    }, g(a.tvl), 9, Tt)])]), t("div", Bt, [(e(!0), r(p, null, v(a.list, (d, o) => (e(), h(l, {
        key: o,
        id: o,
        numb: d
    }, null, 8, ["id", "numb"]))), 128))])]), n(_)])
}
const Et = b(xt, [
        ["render", Ct]
    ]),
    Xt = {
        __name: "index",
        setup(c) {
            const i = F.home;
            return N(), (m, u) => {
                const a = gt,
                    s = D,
                    l = H,
                    _ = Et,
                    d = nt,
                    o = at,
                    $ = Q,
                    C = V;
                return e(), h(C, null, {
                    default: j(() => [n(a, {
                        buttons: S(i)
                    }, null, 8, ["buttons"]), n(s), n(l, {
                        txt: "services.txt"
                    }, null, 8, ["txt"]), n(_), n(d), n(o), n($)]),
                    _: 1
                })
            }
        }
    };
export {
    Xt as
    default
};