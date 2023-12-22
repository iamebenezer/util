import {
    E as d,
    o as e,
    b as s,
    h as i,
    Y as v,
    W as g,
    V as h,
    Z as k,
    $ as m,
    c as b,
    X as f
} from "./entry.6795a269.js";
import {
    a as x,
    _ as $,
    s as w
} from "./services.05816bf8.js";
import {
    g as y
} from "./Waves.a713412c.js";
const S = "Each key should be an Array of { title: 'Text or i18n path', url: '', target?: '_self | _blank', bordered?: true | false, event?: 'name of google custom event' }",
    B = [{
        title: "nav.buttonStandard",
        url: "https://app.uncx.network/",
        target: "_self",
        event: "go_to_app"
    }, {
        title: "nav.doc",
        url: "https://docs.uncx.network/",
        target: "_blank",
        bordered: !0,
        event: "go_to_doc"
    }],
    C = [{
        title: "nav.buttonStandard",
        url: "https://app.uncx.network/services/launchpad/",
        target: "_self",
        event: "go_to_app"
    }, {
        title: "nav.doc",
        url: "https://docs.uncx.network/guides/for-investors/initial-liquidity-offering-ilo/",
        target: "_blank",
        bordered: !0,
        event: "go_to_doc"
    }],
    E = [{
        title: "nav.buttonStandard",
        url: "https://app.uncx.network/services/select-minter/",
        target: "_self",
        event: "go_to_app"
    }, {
        title: "nav.doc",
        url: "https://docs.uncx.network/guides/for-developers/token-minter/",
        target: "_blank",
        bordered: !0,
        event: "go_to_doc"
    }],
    V = [{
        title: "nav.buttonStandard",
        url: "https://app.uncx.network/",
        target: "_self",
        event: "go_to_app"
    }, {
        title: "nav.buttonPartners",
        url: "https://docs.uncx.network/whitelisted-audit-kyc-partners/",
        target: "_blank",
        bordered: !0,
        event: "go_to_doc"
    }],
    L = [{
        title: "nav.buttonStandard",
        url: "https://app.uncx.network/chain/mainnet/farms/",
        target: "_self",
        event: "go_to_app"
    }, {
        title: "nav.doc",
        url: "https://docs.uncx.network/guides/for-investors/staking/",
        target: "_blank",
        bordered: !0,
        event: "go_to_doc"
    }],
    T = [{
        title: "nav.buttonContact",
        url: "https://t.me/uncx_token/",
        target: "_self",
        event: "go_to_social"
    }],
    q = [{
        title: "nav.buttonStake",
        url: "https://app.uncx.network/uncx-staking/",
        target: "_self",
        event: "go_to_app"
    }, {
        title: "nav.doc",
        url: "https://docs.uncx.network/uncx-uncl-tokens/",
        target: "_blank",
        bordered: !0,
        event: "go_to_doc"
    }],
    N = [{
        title: "nav.buttonStandard",
        url: "https://app.uncx.network/services/lock-liquidity/",
        target: "_self",
        event: "go_to_app"
    }, {
        title: "nav.doc",
        url: "https://docs.uncx.network/guides/for-investors/liquidity-lockers/",
        target: "_blank",
        bordered: !0,
        event: "go_to_doc"
    }],
    H = {
        __instructions: S,
        home: B,
        launchpad: C,
        minter: E,
        network: V,
        staking: L,
        team: T,
        tokens: q,
        vesting: N
    },
    M = {
        props: ["title", "txt"]
    },
    P = {
        class: "title"
    },
    j = {
        "data-reveal": "bottom"
    },
    z = {
        class: "grd"
    },
    A = {
        key: 0,
        class: "txt",
        "data-reveal": "bottom"
    };

function D(t, a, r, u, p, n) {
    return e(), s("div", P, [i("h2", j, [i("span", z, v(t.$t(r.title)), 1)]), r.txt ? (e(), s("div", A, [i("p", null, v(t.$t(r.txt)), 1)])) : g("", !0)])
}
const F = d(M, [
        ["render", D]
    ]),
    O = {
        props: ["id", "service"],
        computed: {
            name() {
                return this == null ? void 0 : this.$t("services.list." + (this == null ? void 0 : this.id) + ".title")
            },
            buttons() {
                var t;
                return H[(t = this == null ? void 0 : this.service) == null ? void 0 : t.slug]
            }
        },
        methods: {
            gtagEvent: y
        }
    },
    W = {
        class: "serv",
        "data-reveal": "bottom"
    },
    X = ["innerHTML"],
    Y = {
        key: 0,
        class: "butt"
    };

function Z(t, a, r, u, p, n) {
    var c;
    const l = x,
        _ = $;
    return e(), s("div", W, [h(l, {
        src: r.service.img,
        w: 600,
        h: 635,
        alt: ((c = n.name) == null ? void 0 : c.replace("<br>", "")) + " • " + t.$t("site")
    }, null, 8, ["src", "alt"]), i("h3", {
        innerHTML: n.name
    }, null, 8, X), n.buttons && n.buttons.length ? (e(), s("div", Y, [(e(!0), s(k, null, m(n.buttons, o => (e(), b(_, {
        to: o.url,
        class: f(["bn-max", {
            "bn-border": o.bordered
        }]),
        title: o.title,
        target: o.target,
        key: o.title + o.url,
        onClick: U => n.gtagEvent(o.event, {
            url: o.url,
            page: t.$route.path,
            position: "services"
        })
    }, null, 8, ["to", "class", "title", "target", "onClick"]))), 128))])) : g("", !0)])
}
const G = d(O, [
        ["render", Z]
    ]),
    I = {
        props: ["txt"],
        computed: {
            services: () => Object.entries(w).map(([t, a]) => ({ ...a,
                id: t
            })).sort((t, a) => t.order - a.order)
        }
    },
    J = {
        id: "s"
    },
    K = {
        class: "ct"
    },
    Q = {
        class: "lst"
    };

function R(t, a, r, u, p, n) {
    const l = F,
        _ = G;
    return e(), s("div", J, [i("div", K, [h(l, {
        title: "services.title",
        txt: r.txt
    }, null, 8, ["title", "txt"]), i("div", Q, [(e(!0), s(k, null, m(n.services, c => (e(), s("div", null, [(e(), b(_, {
        id: c.id,
        service: c,
        key: c.id
    }, null, 8, ["id", "service"]))]))), 256))])])])
}
const ot = d(I, [
    ["render", R]
]);
export {
    F as _, ot as a, H as h
};