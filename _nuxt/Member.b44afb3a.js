import {
    a as l
} from "./services.05816bf8.js";
import {
    c as g
} from "./Waves.a713412c.js";
import {
    E as p,
    o as i,
    b as t,
    V as o,
    h as r,
    Y as m,
    W as d
} from "./entry.6795a269.js";
const k = {
        james: {
            name: "James",
            img: "team/James.png",
            rang: 1,
            linkedin: ""
        },
        antoine: {
            name: "Antoine 'Chav' Chaveron",
            img: "team/Chav2.jpg",
            rang: 1,
            linkedin: "https://www.linkedin.com/in/antoine-chaveron-76054212a/"
        },
        hubert: {
            name: "Hubert Matecki",
            img: "team/Hubert.png",
            rang: 4,
            linkedin: "https://www.linkedin.com/in/hubert-matecki/"
        },
        pablo: {
            name: "Pablo",
            img: "team/Pablo.png",
            rang: 2,
            linkedin: "https://www.linkedin.com/in/pavelkalchenko/"
        },
        beary: {
            name: "Beary",
            img: "team/Beary.png",
            rang: 2,
            linkedin: ""
        },
        marc: {
            name: "Marc Antoine Ourradour",
            img: "team/MarcAntoine.jpg",
            rang: 2,
            linkedin: "https://www.linkedin.com/in/marc-antoine-ourradour/"
        },
        pierrot: {
            name: "Pierrot",
            img: "team/Pierrot.jpg",
            rang: 2,
            linkedin: "https://www.linkedin.com/in/blockchain-pierre-paul-de/"
        },
        stephen: {
            name: "Stephen Howe",
            img: "team/Stephen.png",
            rang: 3,
            linkedin: "https://www.linkedin.com/in/howestephen/"
        },
        carina: {
            name: "Carina Couillard",
            img: "team/Carina.png",
            rang: 5,
            linkedin: ""
        },
        teejay: {
            name: "Teejay",
            img: "team/Teejay.png",
            rang: 8,
            linkedin: ""
        },
        dogus: {
            name: "Bryan 'Dogus' Green",
            img: "team/bryan.png",
            rang: 6,
            linkedin: ""
        },
        nelson: {
            name: "Nelson 'Spacemane' Noon",
            img: "team/nelson.png",
            rang: 6,
            linkedin: "https://www.linkedin.com/in/nelson-noon-745492252/"
        },
        patrick: {
            name: "Patrick",
            img: "team/unicorn01.png",
            rang: 2,
            linkedin: ""
        },
        tero: {
            name: "Tero",
            img: "team/unicorn02.png",
            rang: 7,
            linkedin: ""
        },
        nat: {
            name: "John Dohhhhh",
            img: "team/unicorn04.png",
            rang: 7,
            linkedin: ""
        },
        aesy: {
            name: "Alex 'Aesy'",
            img: "team/unicorn03.png",
            rang: 7,
            linkedin: "https://www.linkedin.com/in/aleksander-duchinski/"
        }
    },
    h = {
        props: ["id"],
        data() {
            return {
                team: k[this.id]
            }
        }
    },
    _ = {
        class: "member",
        "data-reveal": "bottom"
    },
    w = {
        class: "name grd"
    },
    u = {
        class: "rang"
    },
    b = ["href", "title"];

function y(e, f, v, j, n, C) {
    var a;
    const s = l,
        c = g;
    return i(), t("div", _, [o(s, {
        src: n.team.img,
        w: 500,
        h: 500,
        alt: n.team.name + " • " + e.$t("site")
    }, null, 8, ["src", "alt"]), r("h3", w, m(n.team.name), 1), r("div", u, m(e.$t("team.rang." + ((a = n.team) == null ? void 0 : a.rang))), 1), n.team.linkedin ? (i(), t("a", {
        key: 0,
        class: "linkedin",
        href: n.team.linkedin,
        title: n.team.name,
        target: "_blank",
        rel: "noopener noreferrer"
    }, [o(c, {
        icon: "linkedin",
        viewbox: "0 0 152 152"
    })], 8, b)) : d("", !0)])
}
const A = p(h, [
    ["render", y]
]);
export {
    A as _, k as t
};