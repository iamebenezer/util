import {
    E as a,
    o as n,
    b as c,
    h as s,
    Y as e
} from "./entry.6795a269.js";
const $ = {
        api: "https://api.llama.fi/tvl/uncx-network",
        projects: "52,000+",
        services: "6",
        users: "1.3M"
    },
    i = {
        props: ["id", "numb"]
    },
    l = {
        class: "numb",
        "data-reveal": "bottom"
    },
    _ = {
        class: "tit"
    },
    d = {
        class: "nb"
    },
    r = {
        class: "grd"
    },
    m = {
        class: "small"
    };

function p(o, u, t, v, h, b) {
    return n(), c("div", l, [s("div", _, e(o.$t(`tvl.list.${t.id}.title`)), 1), s("div", d, [s("span", r, e(t.numb), 1)]), s("div", m, e(o.$t(`tvl.list.${t.id}.sub`)), 1)])
}
const k = a(i, [
    ["render", p]
]);
export {
    k as _, $ as t
};