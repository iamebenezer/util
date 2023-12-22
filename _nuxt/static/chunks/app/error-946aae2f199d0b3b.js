(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7601], {
        29435: function(e, t, r) {
            Promise.resolve().then(r.bind(r, 80449))
        },
        67447: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                    value: !0
                }),
                function(e, t) {
                    for (var r in t) Object.defineProperty(e, r, {
                        enumerable: !0,
                        get: t[r]
                    })
                }(t, {
                    unstable_getImgProps: function() {
                        return c
                    },
                    default: function() {
                        return d
                    }
                });
            let n = r(70817),
                s = r(38630),
                i = r(76184),
                a = r(81749),
                l = n._(r(10536)),
                c = e => {
                    (0, i.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
                    let {
                        props: t
                    } = (0, s.getImgProps)(e, {
                        defaultLoader: l.default,
                        imgConf: {
                            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                            path: "/_next/image",
                            loader: "default",
                            dangerouslyAllowSVG: !1,
                            unoptimized: !1
                        }
                    });
                    for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
                    return {
                        props: t
                    }
                },
                d = a.Image
        },
        80449: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return o
                }
            });
            var n = r(57437),
                s = r(61396),
                i = r.n(s),
                a = r(16691),
                l = r.n(a),
                c = r(2265),
                d = r(29951);

            function o(e) {
                let {
                    error: t,
                    reset: r
                } = e;
                return (0, c.useEffect)(() => {
                    console.error(t)
                }, [t]), (0, n.jsxs)("div", {
                    children: [(0, n.jsx)("div", {
                        className: "w-full h-screen/1.4 flex justify-center items-center",
                        children: (0, n.jsxs)("div", {
                            className: " p-10 pb-16 pt-0 mt-24 rounded-full",
                            children: [(0, n.jsx)(l(), {
                                src: d.Z,
                                alt: "Unicrypt Logo",
                                className: "mx-auto mb-6 h-48 w-48 justify-center flex items-center",
                                width: 420,
                                height: 420
                            }), (0, n.jsx)("div", {
                                className: "divider"
                            }), (0, n.jsx)("div", {
                                className: "flex items-center mx-auto text-gray-300 text-lg w-64 font-bold justify-center",
                                children: "An Error Has Occurred"
                            }), (0, n.jsx)("div", {
                                className: "divider"
                            }), (0, n.jsxs)("div", {
                                className: "flex items-center mx-auto justify-between w-64",
                                children: [(0, n.jsx)(i(), {
                                    className: "",
                                    href: "https://docs.uncx.network/",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: (0, n.jsx)("button", {
                                        className: "items-center underline underline-offset-4 rounded-box normal-case text-sm hidden sm:inline",
                                        children: "Docs"
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "divider divider-horizontal"
                                }), (0, n.jsx)(i(), {
                                    className: "",
                                    href: "https://t.me/uncx_token",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: (0, n.jsx)("div", {
                                        className: "items-center underline underline-offset-4 rounded-box normal-case text-sm hidden sm:inline",
                                        children: "Telegram"
                                    })
                                }), (0, n.jsx)("div", {
                                    className: "divider divider-horizontal"
                                }), (0, n.jsx)(i(), {
                                    className: "",
                                    href: "https://linktr.ee/UNCX.Network",
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: (0, n.jsx)("div", {
                                        className: "items-center underline-offset-4 underline rounded-box normal-case text-sm hidden sm:inline",
                                        children: "Links"
                                    })
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "mt-8 text-sm mx-auto w-64",
                                children: [(0, n.jsx)("button", {
                                    onClick: () => r(),
                                    className: "w-full btn btn-circle bg-warning mb-4 text-gray-900 hover:text-gray-300 duration-200 flex items-center justify-center",
                                    children: "Reload Page"
                                }), (0, n.jsx)(i(), {
                                    className: "",
                                    href: "/apps",
                                    children: (0, n.jsx)("div", {
                                        className: "w-full btn btn-circle bg-secondary-focus flex items-center justify-center",
                                        children: "View Apps"
                                    })
                                })]
                            }), (0, n.jsxs)("div", {
                                className: "collapse mt-8 bg-base-200 max-w-screen-md",
                                children: [(0, n.jsx)("input", {
                                    type: "checkbox"
                                }), (0, n.jsx)("div", {
                                    className: "collapse-title flex justify-center text-md font-medium",
                                    children: "Click to Show/Hide the Error Message"
                                }), (0, n.jsx)("div", {
                                    className: "collapse-content text-sm",
                                    children: (0, n.jsx)("div", {
                                        className: "p-4 bg-dark-base-600 rounded-lg",
                                        children: t.message
                                    })
                                })]
                            })]
                        })
                    }), (0, n.jsx)("div", {})]
                })
            }
        },
        29951: function(e, t) {
            "use strict";
            t.Z = {
                src: "/_next/static/media/unicrypt-liquidity-locking-image-3d.ae087fbd.png",
                height: 1280,
                width: 1280,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAaVBMVEVMaXEXYz4RBAQPIhdWYm0HYSI+SUsoJiOV264VJSYdMzDFx9XMyNmEhI5xgYUBPiBHXFpdrY0HVD6fpbdHTU+0sL42Lkt+hZCq7sdImnkxOz0JGxMSMioEGxAuLjwCCwg/e11Ez30VERJzzGc/AAAAHnRSTlMA9x3fDfT6Fgf7W5ObjT+G7/39rs7k5dz9/MD02ZuPt+zGAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAQ0lEQVR4nB3LxRGAMAAAwYsL7p4A/RfJDPtfoJpKD1C3cSgANyc7LhqkESHZXePM0/UhOLy61y0rDa4Rbz7/J68j8gFg8ALr9pmywQAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        30622: function(e, t, r) {
            "use strict";
            var n = r(2265),
                s = Symbol.for("react.element"),
                i = Symbol.for("react.fragment"),
                a = Object.prototype.hasOwnProperty,
                l = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                c = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function d(e, t, r) {
                var n, i = {},
                    d = null,
                    o = null;
                for (n in void 0 !== r && (d = "" + r), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (o = t.ref), t) a.call(t, n) && !c.hasOwnProperty(n) && (i[n] = t[n]);
                if (e && e.defaultProps)
                    for (n in t = e.defaultProps) void 0 === i[n] && (i[n] = t[n]);
                return {
                    $$typeof: s,
                    type: e,
                    key: d,
                    ref: o,
                    props: i,
                    _owner: l.current
                }
            }
            t.Fragment = i, t.jsx = d, t.jsxs = d
        },
        57437: function(e, t, r) {
            "use strict";
            e.exports = r(30622)
        },
        16691: function(e, t, r) {
            e.exports = r(67447)
        },
        61396: function(e, t, r) {
            e.exports = r(25250)
        }
    },
    function(e) {
        e.O(0, [5250, 1749, 2971, 4938, 1744], function() {
            return e(e.s = 29435)
        }), _N_E = e.O()
    }
]);