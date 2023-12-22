import {
    a as r
} from "./services.05816bf8.js";
import {
    o as s,
    b as c,
    h as e,
    Z as l,
    $ as _,
    V as m
} from "./entry.6795a269.js";
const h = {
        id: "bc"
    },
    d = {
        class: "ct"
    },
    p = {
        class: "lst"
    },
    k = {
        __name: "BlockchainLogo",
        setup(u) {
            const o = {
                ethereum: [478, 122],
                binance_chain: [600, 122],
                avalanche: [557, 122],
                gnosis_chain: [532, 122],
                polygon: [408, 122],
                arbitrum: [600, 122]
            };
            return (a, b) => {
                const i = r;
                return s(), c("div", h, [e("div", d, [e("div", p, [(s(), c(l, null, _(o, (n, t) => e("div", {
                    key: t,
                    "data-reveal": "bottom"
                }, [m(i, {
                    src: "blockchain/unicrypt_" + t + ".svg",
                    w: n[0],
                    h: n[1],
                    "img-class": "inline-block align-center max-w-xs",
                    alt: a.$t("blockchain." + t) + " • " + a.$t("site")
                }, null, 8, ["src", "w", "h", "alt"])])), 64))])])])
            }
        }
    };
export {
    k as _
};