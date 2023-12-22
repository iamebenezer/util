(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2568], {
        35883: function() {},
        62601: function(e, t, r) {
            "use strict";
            var n, s;
            e.exports = (null == (n = r.g.process) ? void 0 : n.env) && "object" == typeof(null == (s = r.g.process) ? void 0 : s.env) ? r.g.process : r(58960)
        },
        30032: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return c
                }
            });
            var n = r(57437);
            r(2265);
            var s = r(8769),
                l = r(94256);

            function c(e) {
                let {
                    children: t
                } = e;
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(l.HK, {
                        children: (0, n.jsx)(s.N3, {
                            children: t
                        })
                    })
                })
            }
        },
        30932: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return x
                }
            });
            var n = r(57437),
                s = r(92533),
                l = r(56926),
                c = r(75404),
                a = r(71186);
            let i = (0, a.a)({
                    id: 42161,
                    name: "Arbitrum One",
                    network: "arbitrum",
                    nativeCurrency: {
                        name: "Ether",
                        symbol: "ETH",
                        decimals: 18
                    },
                    rpcUrls: {
                        alchemy: {
                            http: ["https://arb-mainnet.g.alchemy.com/v2"],
                            webSocket: ["wss://arb-mainnet.g.alchemy.com/v2"]
                        },
                        infura: {
                            http: ["https://arbitrum-mainnet.infura.io/v3"],
                            webSocket: ["wss://arbitrum-mainnet.infura.io/ws/v3"]
                        },
                        default: {
                            http: ["https://arb1.arbitrum.io/rpc"]
                        },
                        public: {
                            http: ["https://arb1.arbitrum.io/rpc"]
                        }
                    },
                    blockExplorers: {
                        etherscan: {
                            name: "Arbiscan",
                            url: "https://arbiscan.io"
                        },
                        default: {
                            name: "Arbiscan",
                            url: "https://arbiscan.io"
                        }
                    },
                    contracts: {
                        multicall3: {
                            address: "0xca11bde05977b3631167028862be2a173976ca11",
                            blockCreated: 7654707
                        }
                    }
                }),
                o = (0, a.a)({
                    id: 137,
                    name: "Polygon",
                    network: "matic",
                    nativeCurrency: {
                        name: "MATIC",
                        symbol: "MATIC",
                        decimals: 18
                    },
                    rpcUrls: {
                        alchemy: {
                            http: ["https://polygon-mainnet.g.alchemy.com/v2"],
                            webSocket: ["wss://polygon-mainnet.g.alchemy.com/v2"]
                        },
                        infura: {
                            http: ["https://polygon-mainnet.infura.io/v3"],
                            webSocket: ["wss://polygon-mainnet.infura.io/ws/v3"]
                        },
                        default: {
                            http: ["https://polygon-rpc.com"]
                        },
                        public: {
                            http: ["https://polygon-rpc.com"]
                        }
                    },
                    blockExplorers: {
                        etherscan: {
                            name: "PolygonScan",
                            url: "https://polygonscan.com"
                        },
                        default: {
                            name: "PolygonScan",
                            url: "https://polygonscan.com"
                        }
                    },
                    contracts: {
                        multicall3: {
                            address: "0xca11bde05977b3631167028862be2a173976ca11",
                            blockCreated: 25770160
                        }
                    }
                }),
                m = (0, a.a)({
                    id: 56,
                    name: "BNB Smart Chain",
                    network: "bsc",
                    nativeCurrency: {
                        decimals: 18,
                        name: "BNB",
                        symbol: "BNB"
                    },
                    rpcUrls: {
                        default: {
                            http: ["https://rpc.ankr.com/bsc"]
                        },
                        public: {
                            http: ["https://rpc.ankr.com/bsc"]
                        }
                    },
                    blockExplorers: {
                        etherscan: {
                            name: "BscScan",
                            url: "https://bscscan.com"
                        },
                        default: {
                            name: "BscScan",
                            url: "https://bscscan.com"
                        }
                    },
                    contracts: {
                        multicall3: {
                            address: "0xca11bde05977b3631167028862be2a173976ca11",
                            blockCreated: 15921452
                        }
                    }
                });
            var h = r(24368);
            let d = [c.R, i, o, m, h.w],
                u = "000c81983a1a36c44373290aeef9704c",
                p = (0, s.o1)({
                    chains: d,
                    projectId: u,
                    metadata: {
                        name: "UNCX Network",
                        description: "Professional Decentralised Vesting Solution",
                        url: "https://uncx.network/",
                        icons: ["https://avatars.githubusercontent.com/u/37784886"]
                    }
                });

            function x(e) {
                let {
                    children: t
                } = e;
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)(l.eM, {
                        config: p,
                        children: t
                    })
                })
            }(0, s.OY)({
                wagmiConfig: p,
                projectId: u,
                chains: d
            })
        },
        75239: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return d
                }
            });
            var n = r(57437),
                s = r(24033),
                l = r(61396),
                c = r.n(l);
            r(2265);
            var a = r(16691),
                i = r.n(a),
                o = {
                    src: "/_next/static/media/uncx-logo-solo-brand-logo.43e2f4cd.svg",
                    height: 214,
                    width: 290,
                    blurWidth: 0,
                    blurHeight: 0
                },
                m = r(56926);

            function h() {
                let {
                    chain: e
                } = (0, m.LN)(), t = (0, s.usePathname)(), r = t && t.split("/"), l = r && r.length > 0 && r[1], a = r && r.length > 1 && r[2], i = r && r.length > 2 && r[3], o = r && r.length > 4 && r[5];
                return (0, n.jsx)(n.Fragment, {
                    children: (0, n.jsx)("div", {
                        className: "flex-none ml-2 lg:ml-4 tracking-wider",
                        children: "uncl-swap" == l && !a && (0, n.jsxs)("ul", {
                            className: "md:flex text-sm menu xl:text-xl menu-horizontal",
                            children: [(0, n.jsx)("li", {
                                className: "".concat("uncl-swap" == l && "text-primary-focus"),
                                children: (0, n.jsxs)(c(), {
                                    className: "flex w-fit justify-center items-center",
                                    href: "/apps",
                                    children: [(0, n.jsx)("div", {
                                        className: "",
                                        children: "UNCL Swap"
                                    }), (0, n.jsx)("div", {
                                        className: "h-6",
                                        children: (0, n.jsx)("label", {
                                            className: "h-6 w-6 flex hover:cursor-pointer justify-center items-center",
                                            children: (0, n.jsx)("div", {
                                                className: "",
                                                children: (0, n.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    "stroke-width": "1.5",
                                                    stroke: "currentColor",
                                                    className: "flex justify-center items-center w-4 h-4",
                                                    children: (0, n.jsx)("path", {
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round",
                                                        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    })
                                                })
                                            })
                                        })
                                    })]
                                })
                            }), (0, n.jsx)("div", {
                                className: "divider divider-horizontal ml-0 mr-2"
                            })]
                        }) || "univ3" == a && (0, n.jsxs)("ul", {
                            className: "sm:flex text-sm menu xl:text-xl menu-horizontal",
                            children: [(0, n.jsx)("li", {
                                className: "".concat("apps" == l && "text-primary-focus"),
                                children: (0, n.jsxs)(c(), {
                                    className: "flex w-fit justify-center items-center",
                                    href: "/apps",
                                    children: [(0, n.jsx)("div", {
                                        className: "",
                                        children: "V3"
                                    }), (0, n.jsx)("div", {
                                        className: "h-6",
                                        children: (0, n.jsx)("label", {
                                            className: "h-6 w-6 flex hover:cursor-pointer justify-center items-center",
                                            children: (0, n.jsx)("div", {
                                                className: "",
                                                children: (0, n.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    "stroke-width": "1.5",
                                                    stroke: "currentColor",
                                                    className: "flex justify-center items-center w-4 h-4",
                                                    children: (0, n.jsx)("path", {
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round",
                                                        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    })
                                                })
                                            })
                                        })
                                    })]
                                })
                            }), (0, n.jsx)("div", {
                                className: "divider divider-horizontal ml-0 mr-2"
                            }), (0, n.jsx)("li", {
                                className: "".concat("explore" == i && "text-primary-focus"),
                                children: (0, n.jsx)(c(), {
                                    href: "/lock/".concat(a, "/explore"),
                                    children: "Explore"
                                })
                            }), (0, n.jsx)("li", {
                                className: "".concat("position-manager" == o && "text-primary-focus"),
                                children: (0, n.jsx)(c(), {
                                    href: "/lock/".concat(a, "/chain/").concat(null == e ? void 0 : e.id, "/position-manager"),
                                    children: "Create"
                                })
                            }), (0, n.jsx)("li", {
                                className: "".concat("manage" == o && "text-primary-focus"),
                                children: (0, n.jsx)(c(), {
                                    href: "/lock/".concat(a, "/chain/").concat(null == e ? void 0 : e.id, "/manage/locks"),
                                    children: "Manage"
                                })
                            })]
                        }) || "lock" == l && (0, n.jsxs)("ul", {
                            className: "sm:flex text-sm menu xl:text-xl menu-horizontal",
                            children: [(0, n.jsx)("li", {
                                children: (0, n.jsxs)(c(), {
                                    className: "flex w-fit justify-center items-center",
                                    href: "/apps",
                                    children: [(0, n.jsx)("div", {
                                        className: "",
                                        children: "Lockers"
                                    }), (0, n.jsx)("div", {
                                        className: "h-6",
                                        children: (0, n.jsx)("label", {
                                            className: "h-6 w-6 flex hover:cursor-pointer justify-center items-center",
                                            children: (0, n.jsx)("div", {
                                                className: "",
                                                children: (0, n.jsx)("svg", {
                                                    xmlns: "http://www.w3.org/2000/svg",
                                                    fill: "none",
                                                    viewBox: "0 0 24 24",
                                                    "stroke-width": "1.5",
                                                    stroke: "currentColor",
                                                    className: "flex justify-center items-center w-4 h-4",
                                                    children: (0, n.jsx)("path", {
                                                        "stroke-linecap": "round",
                                                        "stroke-linejoin": "round",
                                                        d: "M19.5 8.25l-7.5 7.5-7.5-7.5"
                                                    })
                                                })
                                            })
                                        })
                                    })]
                                })
                            }), (0, n.jsx)("div", {
                                className: "divider divider-horizontal ml-0 mr-2"
                            }), (0, n.jsx)("li", {
                                className: "".concat("explore" == a && "text-primary-focus"),
                                children: (0, n.jsx)(c(), {
                                    href: "/lock/explore",
                                    children: "Explore"
                                })
                            }), (0, n.jsx)("li", {
                                className: "".concat(("edit" == a || "manage" == a) && "text-primary-focus"),
                                children: (0, n.jsx)(c(), {
                                    href: "/lock/manage",
                                    children: "Lock"
                                })
                            })]
                        })
                    })
                })
            }

            function d(e) {
                let {
                    children: t,
                    params: r
                } = e, l = (0, s.usePathname)(), a = l && l.split("/"), m = a && a.length > 0 && a[1], d = a && a.length > 1 && a[2];
                return a && a.length > 2 && a[3], a && a.length > 4 && a[5], (0, n.jsxs)("div", {
                    className: "subpixel-antialiased",
                    children: [(0, n.jsx)("div", {
                        className: "backdrop-saturate-200 backdrop-blur-sm dark:bg-black/70 z-50 top-0 sticky w-full xl:pb-4",
                        children: (0, n.jsx)("div", {
                            className: "w-full flex h-20 xl:h-[4.5rem] justify-between pb-3 navbar flex-col",
                            children: (0, n.jsx)("div", {
                                className: "w-full",
                                children: (0, n.jsx)("div", {
                                    className: "flex flex-1 flex-col",
                                    children: (0, n.jsx)("div", {
                                        className: " flex items-center z-10 pl-1 pt-1 sm:pl-3 sm:pt-2",
                                        children: (0, n.jsxs)("nav", {
                                            className: " flex justify-between place-items-center w-full",
                                            children: [(0, n.jsxs)("div", {
                                                className: "flex items-center",
                                                children: [(0, n.jsx)("div", {
                                                    className: "",
                                                    children: (0, n.jsx)(c(), {
                                                        href: "/apps",
                                                        children: (0, n.jsx)(i(), {
                                                            src: o,
                                                            alt: "UNCX Logo",
                                                            className: "grayscale-1 ml-5 h-9 sm:h-12 justify-start items-center",
                                                            width: 50,
                                                            height: 50
                                                        })
                                                    })
                                                }), (0, n.jsx)("div", {
                                                    className: "hidden md:block",
                                                    children: (0, n.jsx)(h, {})
                                                }), (0, n.jsx)("div", {
                                                    className: "flex-none ml-2 lg:ml-4 tracking-wider"
                                                })]
                                            }), (0, n.jsxs)("div", {
                                                className: "flex bg-dark-base-999 shadow-xl p-0.5 rounded-full items-center h-full",
                                                children: ["univ3" == d && (0, n.jsxs)(n.Fragment, {
                                                    children: [(0, n.jsx)(c(), {
                                                        className: "mr-4 lg:mr-0",
                                                        href: "/lock/univ3/search",
                                                        children: (0, n.jsx)("div", {
                                                            className: "btn btn-md btn-circle items-center hidden sm:flex border shadow-[0_0_3px_theme('colors.green.600')] border-dark-base-600",
                                                            children: (0, n.jsx)("svg", {
                                                                xmlns: "http://www.w3.org/2000/svg",
                                                                fill: "none",
                                                                viewBox: "0 0 24 24",
                                                                "stroke-width": "1.5",
                                                                stroke: "currentColor",
                                                                className: "w-6 text-slate-400 h-6",
                                                                children: (0, n.jsx)("path", {
                                                                    "stroke-linecap": "round",
                                                                    "stroke-linejoin": "round",
                                                                    d: "M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                                                })
                                                            })
                                                        })
                                                    }), (0, n.jsx)("div", {
                                                        className: "divider lg:divider-horizontal"
                                                    })]
                                                }), (0, n.jsx)("w3m-button", {
                                                    size: "md"
                                                })]
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    }), (0, n.jsx)("div", {
                        className: "static",
                        children: t
                    }), "explore" == d && (0, n.jsx)(i(), {
                        alt: "",
                        fill: !0,
                        style: {
                            objectFit: "contain"
                        },
                        priority: !0,
                        src: "https://image.mux.com/DUAJbPiXyRWpMvQCr8tu1cFDBLRWvvP5zDnN6w00I4qo/thumbnail.png?width=214&height=121&time=8",
                        role: "presentation",
                        draggable: "false",
                        className: " transition-opacity duration-3000 ".concat("apps" == m || "explore" == d ? "opacity-100" : "opacity-0", " w-2/3 -mt-32 -z-30 antialiased backdrop-saturate-100 filter select-none blur-[100px]")
                    })]
                })
            }
        },
        58960: function(e) {
            ! function() {
                var t = {
                        229: function(e) {
                            var t, r, n, s = e.exports = {};

                            function l() {
                                throw Error("setTimeout has not been defined")
                            }

                            function c() {
                                throw Error("clearTimeout has not been defined")
                            }

                            function a(e) {
                                if (t === setTimeout) return setTimeout(e, 0);
                                if ((t === l || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                                try {
                                    return t(e, 0)
                                } catch (r) {
                                    try {
                                        return t.call(null, e, 0)
                                    } catch (r) {
                                        return t.call(this, e, 0)
                                    }
                                }
                            }! function() {
                                try {
                                    t = "function" == typeof setTimeout ? setTimeout : l
                                } catch (e) {
                                    t = l
                                }
                                try {
                                    r = "function" == typeof clearTimeout ? clearTimeout : c
                                } catch (e) {
                                    r = c
                                }
                            }();
                            var i = [],
                                o = !1,
                                m = -1;

                            function h() {
                                o && n && (o = !1, n.length ? i = n.concat(i) : m = -1, i.length && d())
                            }

                            function d() {
                                if (!o) {
                                    var e = a(h);
                                    o = !0;
                                    for (var t = i.length; t;) {
                                        for (n = i, i = []; ++m < t;) n && n[m].run();
                                        m = -1, t = i.length
                                    }
                                    n = null, o = !1,
                                        function(e) {
                                            if (r === clearTimeout) return clearTimeout(e);
                                            if ((r === c || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e);
                                            try {
                                                r(e)
                                            } catch (t) {
                                                try {
                                                    return r.call(null, e)
                                                } catch (t) {
                                                    return r.call(this, e)
                                                }
                                            }
                                        }(e)
                                }
                            }

                            function u(e, t) {
                                this.fun = e, this.array = t
                            }

                            function p() {}
                            s.nextTick = function(e) {
                                var t = Array(arguments.length - 1);
                                if (arguments.length > 1)
                                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                                i.push(new u(e, t)), 1 !== i.length || o || a(d)
                            }, u.prototype.run = function() {
                                this.fun.apply(null, this.array)
                            }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = p, s.addListener = p, s.once = p, s.off = p, s.removeListener = p, s.removeAllListeners = p, s.emit = p, s.prependListener = p, s.prependOnceListener = p, s.listeners = function(e) {
                                return []
                            }, s.binding = function(e) {
                                throw Error("process.binding is not supported")
                            }, s.cwd = function() {
                                return "/"
                            }, s.chdir = function(e) {
                                throw Error("process.chdir is not supported")
                            }, s.umask = function() {
                                return 0
                            }
                        }
                    },
                    r = {};

                function n(e) {
                    var s = r[e];
                    if (void 0 !== s) return s.exports;
                    var l = r[e] = {
                            exports: {}
                        },
                        c = !0;
                    try {
                        t[e](l, l.exports, n), c = !1
                    } finally {
                        c && delete r[e]
                    }
                    return l.exports
                }
                n.ab = "//";
                var s = n(229);
                e.exports = s
            }()
        },
        24033: function(e, t, r) {
            e.exports = r(15313)
        }
    }
]);