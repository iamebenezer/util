import {
    a as m
} from "./services.05816bf8.js";
import {
    _ as u
} from "./BgUnicornTwo.c77a3fd9.js";
import {
    a as d
} from "./index.a61f72ed.js";
import {
    E as h,
    o as e,
    b as n,
    h as t,
    Z as a,
    $ as c,
    V as r,
    Y as k
} from "./entry.6795a269.js";
const y = {
        launchpad: {
            0: "page-image/unicrypt-liquidity-locking-ilo.png"
        },
        vesting: {
            0: "page-image/unicrypt-liquidity-locking-locks.png",
            1: "page-image/unicrypt-token-vesting.png"
        },
        staking: {
            0: "page-image/unicrypt-staking-farming-service.png",
            1: "page-image/unicrypt-staking-uncx.png"
        },
        minter: {
            0: "page-image/unicrypt-minter-custom-taxes.png",
            1: "page-image/unicrypt-homepage-lossless-security.png",
            2: "page-image/unicrypt-token-minter-native-integration.png"
        },
        tokens: {
            0: "page-image/unicrypt-staking-uncx.png"
        }
    },
    v = {
        props: ["page", "rowsLength"],
        data() {
            return {
                img: y[this.page]
            }
        },
        computed: {
            section() {
                return d(this.page, this.rowsLength)
            }
        }
    },
    f = {
        id: "ct"
    },
    x = {
        class: "ct"
    },
    b = {
        class: "illu",
        "data-reveal": "bottom"
    },
    L = {
        class: "cont"
    },
    B = {
        "data-reveal": "bottom"
    },
    T = {
        class: "grd"
    },
    V = {
        class: "p",
        "data-reveal": "bottom"
    },
    $ = ["innerHTML"];

function q(E, H, M, N, g, p) {
    const _ = m,
        l = u;
    return e(), n("section", f, [t("div", x, [(e(!0), n(a, null, c(p.section, (s, i) => (e(), n("div", {
        key: i,
        class: "cont-block"
    }, [t("div", b, [r(_, {
        src: g.img[i],
        alt: s.title,
        draggable: !1,
        loading: "eager"
    }, null, 8, ["src", "alt"])]), t("div", L, [t("h2", B, [t("span", T, k(s.title), 1)]), t("div", V, [(e(!0), n(a, null, c(s.txt, o => (e(), n("p", {
        key: o,
        innerHTML: o
    }, null, 8, $))), 128))])])]))), 128))]), r(l)])
}
const F = h(v, [
    ["render", q]
]);
export {
    F as _
};