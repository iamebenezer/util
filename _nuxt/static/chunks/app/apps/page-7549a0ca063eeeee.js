(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [616], {
        99894: function(e, s, a) {
            Promise.resolve().then(a.bind(a, 87248)), Promise.resolve().then(a.t.bind(a, 14120, 23))
        },
        67447: function(e, s, a) {
            "use strict";
            Object.defineProperty(s, "__esModule", {
                    value: !0
                }),
                function(e, s) {
                    for (var a in s) Object.defineProperty(e, a, {
                        enumerable: !0,
                        get: s[a]
                    })
                }(s, {
                    unstable_getImgProps: function() {
                        return c
                    },
                    default: function() {
                        return d
                    }
                });
            let t = a(70817),
                r = a(38630),
                n = a(76184),
                l = a(81749),
                i = t._(a(10536)),
                c = e => {
                    (0, n.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
                    let {
                        props: s
                    } = (0, r.getImgProps)(e, {
                        defaultLoader: i.default,
                        imgConf: {
                            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
                            path: "/_next/image",
                            loader: "default",
                            dangerouslyAllowSVG: !1,
                            unoptimized: !1
                        }
                    });
                    for (let [e, a] of Object.entries(s)) void 0 === a && delete s[e];
                    return {
                        props: s
                    }
                },
                d = l.Image
        },
        87248: function(e, s, a) {
            "use strict";
            a.r(s);
            var t = a(57437),
                r = a(16691),
                n = a.n(r),
                l = a(24033),
                i = a(2265),
                c = a(61396),
                d = a.n(c);
            a(14120), s.default = () => {
                let e = (0, l.useRouter)(),
                    [s, a] = (0, i.useState)(!1);
                return (0, i.useEffect)(() => {
                    a(window.history.length > 1)
                }, []), (0, t.jsx)(t.Fragment, {
                    children: (0, t.jsxs)("div", {
                        style: {
                            animation: "fadeInScaleUpSlideIn 0.4s ease-in-out forwards",
                            animationDelay: "50ms",
                            animationFillMode: "forwards"
                        },
                        className: "p-4 antialiased bg-base-200/30 lg:mt-20 shadow-lg rounded-3xl backdrop-blur-sm border border-dark-base-600  opacity-0 animate-fadeInFast sm:p-12 md:mx-auto max-w-3xl",
                        children: [s && (0, t.jsx)("div", {
                            className: "w-full flex justify-end",
                            children: (0, t.jsx)("button", {
                                className: "",
                                onClick: () => e.back(),
                                children: (0, t.jsx)("button", {
                                    className: "btn btn-sm btn-circle btn-outline",
                                    children: (0, t.jsx)("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-5 w-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: (0, t.jsx)("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M6 18L18 6M6 6l12 12"
                                        })
                                    })
                                })
                            })
                        }), (0, t.jsx)("div", {
                            className: "hidden sm:block font-bold text-2xl md:text-3xl text-center pb-10",
                            children: "Select an App"
                        }), (0, t.jsx)("div", {
                            className: "text-slate-500 text-lg pl-4 sm:pl-8 lg:pl-8 pb-6",
                            children: "Links"
                        }), (0, t.jsxs)("div", {
                            className: "grid grid-cols-3 gap-y-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-1 pb-10",
                            children: [(0, t.jsx)(d(), {
                                href: "https://app.uncx.network",
                                children: (0, t.jsxs)("div", {
                                    className: "text-center hover:scale-110 transition-transform duration-200",
                                    children: [(0, t.jsx)("div", {
                                        className: "grad-green p-4 h-20 w-20 rounded-2xl mx-auto",
                                        children: (0, t.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            className: "text-slate-900",
                                            children: (0, t.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M3 6a3 3 0 013-3h2.25a3 3 0 013 3v2.25a3 3 0 01-3 3H6a3 3 0 01-3-3V6zm9.75 0a3 3 0 013-3H18a3 3 0 013 3v2.25a3 3 0 01-3 3h-2.25a3 3 0 01-3-3V6zM3 15.75a3 3 0 013-3h2.25a3 3 0 013 3V18a3 3 0 01-3 3H6a3 3 0 01-3-3v-2.25zm9.75 0a3 3 0 013-3H18a3 3 0 013 3V18a3 3 0 01-3 3h-2.25a3 3 0 01-3-3v-2.25z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "pt-2",
                                        children: "app.uncx"
                                    })]
                                })
                            }), (0, t.jsx)(d(), {
                                href: "https://app.uncx.network/services/launchpad",
                                children: (0, t.jsxs)("div", {
                                    className: "text-center hover:scale-110 transition-transform duration-200",
                                    children: [(0, t.jsx)("div", {
                                        className: "grad-green p-4 h-20 w-20 rounded-2xl mx-auto",
                                        children: (0, t.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            className: "text-slate-900",
                                            children: [(0, t.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z",
                                                clipRule: "evenodd"
                                            }), (0, t.jsx)("path", {
                                                d: "M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"
                                            })]
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "pt-2",
                                        children: "Launchpad"
                                    })]
                                })
                            }), (0, t.jsx)(d(), {
                                href: "https://app.uncx.network/chain/mainnet/farms",
                                children: (0, t.jsxs)("div", {
                                    className: "text-center hover:scale-110 transition-transform duration-200",
                                    children: [(0, t.jsx)("div", {
                                        className: "grad-green p-4 h-20 w-20 rounded-2xl mx-auto",
                                        children: (0, t.jsxs)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            className: "text-slate-900",
                                            children: [(0, t.jsx)("path", {
                                                d: "M21 6.375c0 2.692-4.03 4.875-9 4.875S3 9.067 3 6.375 7.03 1.5 12 1.5s9 2.183 9 4.875z"
                                            }), (0, t.jsx)("path", {
                                                d: "M12 12.75c2.685 0 5.19-.586 7.078-1.609a8.283 8.283 0 001.897-1.384c.016.121.025.244.025.368C21 12.817 16.97 15 12 15s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.285 8.285 0 001.897 1.384C6.809 12.164 9.315 12.75 12 12.75z"
                                            }), (0, t.jsx)("path", {
                                                d: "M12 16.5c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 15.914 9.315 16.5 12 16.5z"
                                            }), (0, t.jsx)("path", {
                                                d: "M12 20.25c2.685 0 5.19-.586 7.078-1.609a8.282 8.282 0 001.897-1.384c.016.121.025.244.025.368 0 2.692-4.03 4.875-9 4.875s-9-2.183-9-4.875c0-.124.009-.247.025-.368a8.284 8.284 0 001.897 1.384C6.809 19.664 9.315 20.25 12 20.25z"
                                            })]
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "pt-2",
                                        children: "Farms"
                                    })]
                                })
                            })]
                        }), (0, t.jsx)("div", {
                            className: "text-slate-500 text-lg pl-4 sm:pl-8 lg:pl-8 pb-6",
                            children: "Lock"
                        }), (0, t.jsxs)("div", {
                            className: "grid grid-cols-3 gap-y-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 pb-10",
                            children: [(0, t.jsx)(d(), {
                                href: "https://app.uncx.network/services/lock-liquidity",
                                children: (0, t.jsxs)("div", {
                                    className: "text-center hover:scale-110 transition-transform duration-200",
                                    children: [(0, t.jsx)("div", {
                                        className: "grad-green p-4 h-20 w-20 rounded-2xl mx-auto",
                                        children: (0, t.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            className: "text-slate-900",
                                            children: (0, t.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "pt-2",
                                        children: "V2 liquidity"
                                    })]
                                })
                            }), (0, t.jsx)(d(), {
                                href: "/lock/univ3/explore",
                                children: (0, t.jsxs)("div", {
                                    className: "text-center hover:scale-110 transition-transform duration-200",
                                    children: [(0, t.jsx)("div", {
                                        className: "grad-green p-4 h-20 w-20 rounded-2xl mx-auto",
                                        children: (0, t.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            className: "text-slate-900",
                                            children: (0, t.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "pt-2",
                                        children: "V3 liquidity"
                                    })]
                                })
                            }), (0, t.jsx)(d(), {
                                href: "https://app.uncx.network/services/lock-tokens",
                                children: (0, t.jsxs)("div", {
                                    className: "text-center hover:scale-110 transition-transform duration-200",
                                    children: [(0, t.jsx)("div", {
                                        className: "grad-green p-4 h-20 w-20 rounded-2xl mx-auto",
                                        children: (0, t.jsx)("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            viewBox: "0 0 24 24",
                                            fill: "currentColor",
                                            className: "text-slate-900",
                                            children: (0, t.jsx)("path", {
                                                fillRule: "evenodd",
                                                d: "M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z",
                                                clipRule: "evenodd"
                                            })
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "pt-2",
                                        children: "Vesting"
                                    })]
                                })
                            })]
                        }), (0, t.jsx)("div", {
                            className: "text-slate-500 text-lg pl-4 sm:pl-8 lg:pl-8 pb-6",
                            children: "Convert"
                        }), (0, t.jsx)("div", {
                            className: "grid grid-cols-3 gap-y-8 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-2 pb-10",
                            children: (0, t.jsx)(d(), {
                                href: "/uncl-swap",
                                children: (0, t.jsxs)("div", {
                                    className: "text-center hover:scale-110 transition-transform duration-200",
                                    children: [(0, t.jsx)("div", {
                                        className: "grad-blue p-4 h-20 w-20 rounded-2xl mx-auto",
                                        children: (0, t.jsx)(n(), {
                                            src: "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0x2f4eb47A1b1F4488C71fc10e39a4aa56AF33Dd49/logo.png",
                                            alt: "UNCX Logo",
                                            className: "justify-start items-center",
                                            width: 50,
                                            height: 50
                                        })
                                    }), (0, t.jsx)("div", {
                                        className: "pt-2",
                                        children: "UNCL Swap"
                                    })]
                                })
                            })
                        }), (0, t.jsx)("style", {
                            children: "\n      @keyframes fadeInScaleUpSlideIn {\n        0% { \n          opacity: 0; \n          transform: translateY(20px); \n        }\n        100% { \n          opacity: 1; \n          transform: translateY(0); \n        }\n      }\n    "
                        })]
                    })
                })
            }
        },
        14120: function() {},
        30622: function(e, s, a) {
            "use strict";
            var t = a(2265),
                r = Symbol.for("react.element"),
                n = Symbol.for("react.fragment"),
                l = Object.prototype.hasOwnProperty,
                i = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                c = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function d(e, s, a) {
                var t, n = {},
                    d = null,
                    o = null;
                for (t in void 0 !== a && (d = "" + a), void 0 !== s.key && (d = "" + s.key), void 0 !== s.ref && (o = s.ref), s) l.call(s, t) && !c.hasOwnProperty(t) && (n[t] = s[t]);
                if (e && e.defaultProps)
                    for (t in s = e.defaultProps) void 0 === n[t] && (n[t] = s[t]);
                return {
                    $$typeof: r,
                    type: e,
                    key: d,
                    ref: o,
                    props: n,
                    _owner: i.current
                }
            }
            s.Fragment = n, s.jsx = d, s.jsxs = d
        },
        57437: function(e, s, a) {
            "use strict";
            e.exports = a(30622)
        },
        16691: function(e, s, a) {
            e.exports = a(67447)
        },
        61396: function(e, s, a) {
            e.exports = a(25250)
        },
        24033: function(e, s, a) {
            e.exports = a(15313)
        }
    },
    function(e) {
        e.O(0, [5250, 1749, 2971, 4938, 1744], function() {
            return e(e.s = 99894)
        }), _N_E = e.O()
    }
]);