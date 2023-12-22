const o = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
    s = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
    e = /^\s*["[{]|^\s*-?\d[\d.]{0,14}\s*$/;

function f(r, t) {
    if (r !== "__proto__" && !(r === "constructor" && t && typeof t == "object" && "prototype" in t)) return t
}

function i(r, t = {}) {
    if (typeof r != "string") return r;
    const n = r.toLowerCase().trim();
    if (n === "true") return !0;
    if (n === "false") return !1;
    if (n === "null") return null;
    if (n === "nan") return Number.NaN;
    if (n === "infinity") return Number.POSITIVE_INFINITY;
    if (n !== "undefined") {
        if (!e.test(r)) {
            if (t.strict) throw new SyntaxError("Invalid JSON");
            return r
        }
        try {
            return o.test(r) || s.test(r) ? JSON.parse(r, f) : JSON.parse(r)
        } catch (u) {
            if (t.strict) throw u;
            return r
        }
    }
}
export {
    i as d
};