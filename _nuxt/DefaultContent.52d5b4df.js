import {
    _ as u
} from "./Default.441e0b74.js";
import {
    a as m
} from "./index.a61f72ed.js";
import {
    E as p,
    o as t,
    b as e,
    V as h,
    h as o,
    Z as s,
    $ as r,
    W as f
} from "./entry.6795a269.js";
const L = {
        props: ["id", "rowsLength"],
        computed: {
            content() {
                return m(this.id, this.rowsLength)
            }
        }
    },
    v = {
        class: "ct"
    },
    g = {
        class: "def"
    },
    k = ["innerHTML"],
    x = {
        "data-reveal": "bottom",
        class: "p"
    },
    T = ["innerHTML"];

function H(M, V, a, $, b, c) {
    const i = u;
    return t(), e("div", null, [h(i, {
        title: a.id + ".title"
    }, null, 8, ["title"]), o("div", v, [o("div", g, [(t(!0), e(s, null, r(c.content, (n, _) => (t(), e("div", {
        key: _
    }, [n.title ? (t(), e("h2", {
        key: 0,
        "data-reveal": "bottom",
        class: "grd",
        innerHTML: n.title
    }, null, 8, k)) : f("", !0), o("div", x, [(t(!0), e(s, null, r(n.txt, (l, d) => (t(), e("p", {
        key: d,
        innerHTML: l
    }, null, 8, T))), 128))])]))), 128))])])])
}
const C = p(L, [
    ["render", H]
]);
export {
    C as _
};