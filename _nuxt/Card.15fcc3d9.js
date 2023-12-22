import {
    a as o
} from "./services.05816bf8.js";
import {
    E as i,
    o as n,
    b as l,
    V as a
} from "./entry.6795a269.js";
const g = {
        solidproof: {
            id: "Solidproof",
            visible: !0,
            type: 1,
            name: "SolidProof",
            sizes: [473, 115],
            link: "https://solidproof.io/"
        },
        chainsulting: {
            id: "Chainsulting",
            visible: !0,
            type: 1,
            name: "Chainsulting",
            sizes: [485, 135],
            link: "https://chainsulting.de/"
        },
        hacken: {
            id: "Hacken",
            visible: !0,
            type: 1,
            name: "Hacken",
            sizes: [787, 135],
            link: "https://hacken.io/"
        },
        dextools: {
            id: "Dextools",
            visible: !0,
            type: 1,
            name: "DexTools",
            sizes: [663, 115],
            link: "https://dextools.io/"
        },
        eea: {
            id: "EEA",
            visible: !0,
            type: 1,
            name: "EEA",
            sizes: [331, 181],
            link: "https://entethalliance.org/"
        },
        gelato: {
            id: "Gelato",
            visible: !0,
            type: 1,
            name: "Gelato",
            sizes: [698, 115],
            link: "https://gelato.network/"
        },
        lossless: {
            id: "Lossless",
            visible: !0,
            type: 1,
            name: "Lossless",
            sizes: [552, 115],
            link: "https://lossless.io/"
        },
        assure: {
            id: "Assure",
            visible: !0,
            type: 1,
            name: "Assure",
            sizes: [480, 135],
            link: "https://assuredefi.com/"
        }
    },
    r = {
        props: ["id", "logo"]
    },
    c = ["href", "title"];

function p(s, d, e, u, h, _) {
    const t = o;
    return n(), l("a", {
        href: e.logo.link,
        target: "_blank",
        rel: "noopener noreferrer",
        title: e.logo.name
    }, [a(t, {
        src: "partners/" + e.logo.id + ".png",
        w: e.logo.sizes[0],
        h: e.logo.sizes[1],
        alt: e.logo.name + " x " + s.$t("site")
    }, null, 8, ["src", "w", "h", "alt"])], 8, c)
}
const f = i(r, [
    ["render", p]
]);
export {
    f as _, g as p
};