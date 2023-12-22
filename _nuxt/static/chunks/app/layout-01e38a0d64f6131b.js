(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3185], {
        21925: function(e, n, t) {
            Promise.resolve().then(t.t.bind(t, 82553, 23)), Promise.resolve().then(t.t.bind(t, 63385, 23)), Promise.resolve().then(t.bind(t, 81020))
        },
        81020: function(e, n, t) {
            "use strict";
            t.r(n);
            var r = t(57437),
                o = t(2265);
            n.default = function() {
                let [e, n] = (0, o.useState)(!1);
                return (0, o.useEffect)(() => {
                    function e() {
                        n(!navigator.onLine)
                    }
                    return n(!navigator.onLine), window.addEventListener("offline", e), window.addEventListener("online", e), () => {
                        window.removeEventListener("offline", e), window.removeEventListener("online", e)
                    }
                }, []), (0, r.jsx)(r.Fragment, {
                    children: e && (0, r.jsx)("div", {
                        className: "toast toast-end bottom-20 sm:bottom-0 sm:m-3",
                        children: (0, r.jsx)("div", {
                            className: "alert font-bold subpixel-antialiased select-none alert-warning flex justify-center mx-auto",
                            children: (0, r.jsx)("span", {
                                children: "No Internet Connection"
                            })
                        })
                    })
                })
            }
        },
        63385: function() {},
        82553: function(e) {
            e.exports = {
                style: {
                    fontFamily: "'__Inter_e66fe9', '__Inter_Fallback_e66fe9'",
                    fontStyle: "normal"
                },
                className: "__className_e66fe9",
                variable: "__variable_e66fe9"
            }
        },
        30622: function(e, n, t) {
            "use strict";
            var r = t(2265),
                o = Symbol.for("react.element"),
                i = Symbol.for("react.fragment"),
                s = Object.prototype.hasOwnProperty,
                a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                l = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function f(e, n, t) {
                var r, i = {},
                    f = null,
                    c = null;
                for (r in void 0 !== t && (f = "" + t), void 0 !== n.key && (f = "" + n.key), void 0 !== n.ref && (c = n.ref), n) s.call(n, r) && !l.hasOwnProperty(r) && (i[r] = n[r]);
                if (e && e.defaultProps)
                    for (r in n = e.defaultProps) void 0 === i[r] && (i[r] = n[r]);
                return {
                    $$typeof: o,
                    type: e,
                    key: f,
                    ref: c,
                    props: i,
                    _owner: a.current
                }
            }
            n.Fragment = i, n.jsx = f, n.jsxs = f
        },
        57437: function(e, n, t) {
            "use strict";
            e.exports = t(30622)
        }
    },
    function(e) {
        e.O(0, [2971, 4938, 1744], function() {
            return e(e.s = 21925)
        }), _N_E = e.O()
    }
]);