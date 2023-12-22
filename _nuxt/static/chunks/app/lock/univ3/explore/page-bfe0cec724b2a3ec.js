(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [120], {
        80067: function(e, t, r) {
            Promise.resolve().then(r.t.bind(r, 81749, 23)), Promise.resolve().then(r.t.bind(r, 25250, 23)), Promise.resolve().then(r.bind(r, 16005)), Promise.resolve().then(r.bind(r, 94740)), Promise.resolve().then(r.bind(r, 63543)), Promise.resolve().then(r.bind(r, 90370)), Promise.resolve().then(r.bind(r, 3977)), Promise.resolve().then(r.bind(r, 48412)), Promise.resolve().then(r.bind(r, 80614)), Promise.resolve().then(r.bind(r, 18)), Promise.resolve().then(r.bind(r, 19941)), Promise.resolve().then(r.bind(r, 61366)), Promise.resolve().then(r.bind(r, 97942)), Promise.resolve().then(r.bind(r, 20667)), Promise.resolve().then(r.bind(r, 69792)), Promise.resolve().then(r.bind(r, 1033))
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
                        return a
                    },
                    default: function() {
                        return l
                    }
                });
            let A = r(70817),
                n = r(38630),
                o = r(76184),
                s = r(81749),
                i = A._(r(10536)),
                a = e => {
                    (0, o.warnOnce)("Warning: unstable_getImgProps() is experimental and may change or be removed at any time. Use at your own risk.");
                    let {
                        props: t
                    } = (0, n.getImgProps)(e, {
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
                    for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
                    return {
                        props: t
                    }
                },
                l = s.Image
        },
        16005: function(e, t, r) {
            "use strict";

            function A(e) {
                let {
                    children: t
                } = e;
                return t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), Object.defineProperty(t, "NoSSR", {
                enumerable: !0,
                get: function() {
                    return A
                }
            }), r(46491)
        },
        97942: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            });
            var A = r(57437);

            function n(e) {
                return (0, A.jsx)("div", {
                    className: "h-full rounded-2xl overflow-clip w-full"
                })
            }
            r(2265)
        },
        20667: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return u
                }
            });
            var A = r(57437),
                n = r(2265),
                o = r(16691),
                s = r.n(o),
                i = r(39803),
                a = r(56926),
                l = r(24033);

            function u(e) {
                let {
                    tokenAddress: t,
                    chainId: r,
                    classNames: o
                } = e, {
                    isConnected: u,
                    address: d
                } = (0, a.mA)(), c = {
                    1: "ether",
                    56: "bsc",
                    137: "polygon",
                    42161: "arbitrum",
                    5: "goerli"
                }, h = (0, i.K)(t), g = "https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/".concat({
                    1: "ethereum",
                    5: "goerli",
                    56: "smartchain",
                    137: "polygon",
                    42161: "arbitrum"
                }[r], "/assets/").concat(h, "/logo.png"), f = "https://www.dextools.io/resources/tokens/logos/".concat(c[r], "/").concat(h.toLowerCase(), ".png"), m = "https://www.dextools.io/resources/tokens/logos/3/".concat(c[r], "/").concat(h.toLowerCase(), ".png"), [b, w] = (0, n.useState)(g), [p, E] = (0, n.useState)(!1);
                return (0, l.useRouter)(), (0, n.useEffect)(() => {
                    w(b)
                }, [b]), (0, A.jsx)(A.Fragment, {
                    children: (0, A.jsx)(s(), {
                        className: null == o ? void 0 : o.button,
                        width: 64,
                        height: 64,
                        alt: "Token Icon",
                        src: b,
                        priority: !0,
                        blurDataURL: "/brand/3d-token-question-white_blurred.png",
                        placeholder: "blur",
                        onError: () => {
                            b === g ? w(f) : b === f ? w(m) : b === m && w("/brand/3d-token-question-white.png")
                        }
                    })
                })
            }
        },
        69792: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            });
            var A = r(57437);

            function n() {
                return (0, A.jsxs)("div", {
                    className: "bg-dark-base-800 z-0 items-center rounded-xl flex justify-center shadow-2xl shadow-black xl:max-w-screen-xl w-full mx-auto",
                    children: [(0, A.jsx)("div", {
                        className: "alert alert-error shadow-lg",
                        children: (0, A.jsxs)("div", {
                            children: [(0, A.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "stroke-current flex-shrink-0 h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: (0, A.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                            }), (0, A.jsx)("span", {
                                children: "Failed to load Liquidity Pools."
                            })]
                        })
                    }), (0, A.jsx)("div", {})]
                })
            }
        },
        1033: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                default: function() {
                    return n
                }
            });
            var A = r(57437);

            function n() {
                return (0, A.jsxs)("div", {
                    className: "bg-dark-base-800 z-0 items-center rounded-xl flex justify-center shadow-2xl shadow-black xl:max-w-screen-xl w-full mx-auto",
                    children: [(0, A.jsx)("div", {
                        className: "alert alert-error shadow-lg",
                        children: (0, A.jsxs)("div", {
                            children: [(0, A.jsx)("svg", {
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "stroke-current flex-shrink-0 h-6 w-6",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: (0, A.jsx)("path", {
                                    strokeLinecap: "round",
                                    strokeLinejoin: "round",
                                    strokeWidth: "2",
                                    d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                                })
                            }), (0, A.jsx)("span", {
                                children: "Failed to load Liquidity Pools."
                            })]
                        })
                    }), (0, A.jsx)("div", {})]
                })
            }
        },
        63543: function(e, t, r) {
            "use strict";
            r.r(t), t.default = {
                src: "/_next/static/media/arbitrum.337a728f.png",
                height: 64,
                width: 64,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAARVBMVEUmMETf3+AlL0UqNUpMXXVMaXEsM0gsN0s0QVZNYntIpOMlNUqNl6VTaoVfbYJbYnAcYJVTe5/Lz9R9gIqbtMk9hrshi9J+EYjcAAAADHRSTlOy/jAw/gAv7vf++jAdrVAnAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPklEQVR4nDXLyQGAMAgAwSWSAJrTq/9SfTn/IRfcKZlkGhGWoMUY2sC1yj3VsSrn8y6DKtfcF2zWews7+PsHRkUCDjjAUlgAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        90370: function(e, t, r) {
            "use strict";
            r.r(t), t.default = {
                src: "/_next/static/media/avalanche.c8ec8755.png",
                height: 64,
                width: 64,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAQlBMVEXpQkLoQkLfRUX2Q0NMaXHrQkL1v7/mOTnpQUHjRET4ysrqWFjoQ0Psbm30Ojr4X1/0ra3ue3v87Oz////639/tdHT5mD4gAAAACnRSTlOyLjD/AOr6/fYve/+xTAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD9JREFUeJwVy0kSgEAIALEeAYFZXf//VcvcgxYiKEqatCaWIF6rC4SP+/AeRH+us7aAtb9jX7DZdJ+WaP499QNBbQHyStwuigAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        3977: function(e, t, r) {
            "use strict";
            r.r(t), t.default = {
                src: "/_next/static/media/bsc.db26e236.png",
                height: 64,
                width: 64,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAPFBMVEX///79+Oj98sL335BMaXH/++j99tn767j44ZX////56bL9/O7623H/9Lb31GfxvRfywy/1zlT/21r55aOsfJNGAAAADHRSTlMu9Pv6AK/u/vyz9+qm3JjHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAPUlEQVR4nAXBiQHAIAgAsbOCiOK//65NELw1R6CPOb8OGvW9HEqys9axRAnb22ZCb47IV6GMWkcBwe1z5AdL/AIH+UIg1AAAAABJRU5ErkJggg==",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        48412: function(e, t, r) {
            "use strict";
            r.r(t), t.default = {
                src: "/_next/static/media/ether-2.edb44f31.png",
                height: 192,
                width: 192,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAOVBMVEXv8/b3+fzr7O/09vj3+Pv19vjR1Nb09vlMaXHw8/b+//+8vb9RUlOpqqyUlZYTExM1NTVlZ2eFhoiLwTfLAAAACnRSTlMv+/rqsOr99gC0YcmWLwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAD1JREFUeJwdy0sWgCAMxdCAhZbHT93/Yj0yy+CGoLk3Aopq1wWmtEaW4epjv/IT90qOKc+nyg6eKvDvqREfQzEB3MYLGOcAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        80614: function(e, t, r) {
            "use strict";
            r.r(t), t.default = {
                src: "/_next/static/media/ether.d2d0ba0c.png",
                height: 64,
                width: 64,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAM1BMVEVffOqGnO+SpvFmhflMaXFkgO1yiutge+dkgOxlge9gf/iwvvXO1/nh5vudr/OBmO5/l+5Sfj/3AAAACnRSTlP8/v//APT6L7LqYsvmfgAAAAlwSFlzAAALEwAACxMBAJqcGAAAADtJREFUeJw1y7cRwDAMwECYFMWg5P2n9alwjQfNA8IbnvVIpRPKml0DY68hGIaM82KE9jlu8izZF//7BzjdAZ5+qb4pAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        18: function(e, t, r) {
            "use strict";
            r.r(t), t.default = {
                src: "/_next/static/media/gnosis.64ebb268.png",
                height: 64,
                width: 64,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAS1BMVEWaoqoMITIVJDgDFClMaXF6hI8EFyoJGi0SJTgpOUoFFytAT1+UmqRMWmhPXGtHVWNGU2J4goxDT18ADiSHkJr+/v9jb3tYZHHt7/GVJ3hnAAAAE3RSTlP+NTDuAP26/fn8sbEw6u65tTO6Kd3arQAAAAlwSFlzAAALEwAACxMBAJqcGAAAAEBJREFUeJwFwYkBwCAIBLBTQaB/C6j7T9oEVG7mpxLea2Wu88AHZAI7jCcw2aAjImIouqiZyobS3N1bBZUu0iv9ZNsCnpn9XUwAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        19941: function(e, t, r) {
            "use strict";
            r.r(t), t.default = {
                src: "/_next/static/media/polygon.b63750c8.png",
                height: 64,
                width: 64,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAHlBMVEX////+/v////9MaXH///////++n/Lq4Pvz6/7j0vxH3sBKAAAAB3RSTlP6L+oAtLD+fWPAPQAAAAlwSFlzAAALEwAACxMBAJqcGAAAADRJREFUeJw1y1EKwDAMw1A5bRz3/hcu29jfQyCWNmwtVAmU6GMPNDgfGfuM3/awUUFS4t8vIVoA7KKKEtQAAAAASUVORK5CYII=",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        61366: function(e, t, r) {
            "use strict";
            r.r(t), t.default = {
                src: "/_next/static/media/unknown.81f16d12.png",
                height: 812,
                width: 812,
                blurDataURL: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAASFBMVEUAMQmSppoAUBkANgoAJQcGRyIANQsFHBJMaXEARxH77/rr+emfrqbq6ecwbEQtYz////+Op5Z23Xib9Jq39beWsJ6T4pUm1CecSMk1AAAADnRSTlPi/q3vqimpKgDt+vv++u96970AAAAJcEhZcwAACxMAAAsTAQCanBgAAABASURBVHicBcEHAoAgDACxY7Yglqn+/6cmaPKl+KRIsdasJLLde9+WCW6s73ogzPGuMSFbPaf2iNCd6wgqEaLoD1uqAmw0f7SpAAAAAElFTkSuQmCC",
                blurWidth: 8,
                blurHeight: 8
            }
        },
        16691: function(e, t, r) {
            e.exports = r(67447)
        },
        24033: function(e, t, r) {
            e.exports = r(15313)
        },
        94740: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                ErrorBoundary: function() {
                    return s
                },
                ErrorBoundaryContext: function() {
                    return n
                },
                useErrorBoundary: function() {
                    return i
                },
                withErrorBoundary: function() {
                    return a
                }
            });
            var A = r(2265);
            let n = (0, A.createContext)(null),
                o = {
                    didCatch: !1,
                    error: null
                };
            class s extends A.Component {
                constructor(e) {
                    super(e), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = o
                }
                static getDerivedStateFromError(e) {
                    return {
                        didCatch: !0,
                        error: e
                    }
                }
                resetErrorBoundary() {
                    let {
                        error: e
                    } = this.state;
                    if (null !== e) {
                        for (var t, r, A = arguments.length, n = Array(A), s = 0; s < A; s++) n[s] = arguments[s];
                        null === (t = (r = this.props).onReset) || void 0 === t || t.call(r, {
                            args: n,
                            reason: "imperative-api"
                        }), this.setState(o)
                    }
                }
                componentDidCatch(e, t) {
                    var r, A;
                    null === (r = (A = this.props).onError) || void 0 === r || r.call(A, e, t)
                }
                componentDidUpdate(e, t) {
                    let {
                        didCatch: r
                    } = this.state, {
                        resetKeys: A
                    } = this.props;
                    if (r && null !== t.error && function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
                                t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
                            return e.length !== t.length || e.some((e, r) => !Object.is(e, t[r]))
                        }(e.resetKeys, A)) {
                        var n, s;
                        null === (n = (s = this.props).onReset) || void 0 === n || n.call(s, {
                            next: A,
                            prev: e.resetKeys,
                            reason: "keys"
                        }), this.setState(o)
                    }
                }
                render() {
                    let {
                        children: e,
                        fallbackRender: t,
                        FallbackComponent: r,
                        fallback: o
                    } = this.props, {
                        didCatch: s,
                        error: i
                    } = this.state, a = e;
                    if (s) {
                        let e = {
                            error: i,
                            resetErrorBoundary: this.resetErrorBoundary
                        };
                        if ((0, A.isValidElement)(o)) a = o;
                        else if ("function" == typeof t) a = t(e);
                        else if (r) a = (0, A.createElement)(r, e);
                        else throw i
                    }
                    return (0, A.createElement)(n.Provider, {
                        value: {
                            didCatch: s,
                            error: i,
                            resetErrorBoundary: this.resetErrorBoundary
                        }
                    }, a)
                }
            }

            function i() {
                let e = (0, A.useContext)(n);
                ! function(e) {
                    if (null == e || "boolean" != typeof e.didCatch || "function" != typeof e.resetErrorBoundary) throw Error("ErrorBoundaryContext not found")
                }(e);
                let [t, r] = (0, A.useState)({
                    error: null,
                    hasError: !1
                }), o = (0, A.useMemo)(() => ({
                    resetBoundary: () => {
                        null == e || e.resetErrorBoundary(), r({
                            error: null,
                            hasError: !1
                        })
                    },
                    showBoundary: e => r({
                        error: e,
                        hasError: !0
                    })
                }), [null == e ? void 0 : e.resetErrorBoundary]);
                if (t.hasError) throw t.error;
                return o
            }

            function a(e, t) {
                let r = (0, A.forwardRef)((r, n) => (0, A.createElement)(s, t, (0, A.createElement)(e, { ...r,
                        ref: n
                    }))),
                    n = e.displayName || e.name || "Unknown";
                return r.displayName = "withErrorBoundary(".concat(n, ")"), r
            }
        }
    },
    function(e) {
        e.O(0, [5237, 5250, 1749, 2971, 4938, 1744], function() {
            return e(e.s = 80067)
        }), _N_E = e.O()
    }
]);