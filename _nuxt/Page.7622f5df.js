import {
    t,
    _ as m
} from "./Card.6e9ec9f6.js";
import {
    _ as p
} from "./BgUnicornMiddle.34cd4222.js";
import {
    g as u
} from "./index.a61f72ed.js";
import {
    E as h,
    o as e,
    b as r,
    h as a,
    Z as f,
    $ as v,
    c as g,
    V as k
} from "./entry.6795a269.js";
const x = {
        data() {
            return {
                list: {
                    projects: t.projects,
                    locked: t.locked,
                    services: t.services,
                    users: t.users
                }
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            async fetchData() {
                const s = await fetch(t.api).then(n => n.json()),
                    o = `+${u(s)}`;
                this.list = { ...this.list,
                    locked: o
                }
            }
        }
    },
    B = {
        id: "tvl",
        class: "tvl-page"
    },
    $ = {
        class: "ct"
    },
    b = {
        class: "lst lst-tvl"
    };

function j(s, o, n, N, _, V) {
    const i = m,
        l = p;
    return e(), r("div", B, [a("div", $, [a("div", b, [(e(!0), r(f, null, v(_.list, (d, c) => (e(), g(i, {
        key: c,
        id: c,
        numb: d
    }, null, 8, ["id", "numb"]))), 128))])]), k(l)])
}
const y = h(x, [
    ["render", j]
]);
export {
    y as _
};