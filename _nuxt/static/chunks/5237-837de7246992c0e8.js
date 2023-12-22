"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5237], {
        28729: function(e) {
            var t = Object.prototype.hasOwnProperty,
                n = "~";

            function r() {}

            function i(e, t, n) {
                this.fn = e, this.context = t, this.once = n || !1
            }

            function a(e, t, r, a, s) {
                if ("function" != typeof r) throw TypeError("The listener must be a function");
                var o = new i(r, a || e, s),
                    u = n ? n + t : t;
                return e._events[u] ? e._events[u].fn ? e._events[u] = [e._events[u], o] : e._events[u].push(o) : (e._events[u] = o, e._eventsCount++), e
            }

            function s(e, t) {
                0 == --e._eventsCount ? e._events = new r : delete e._events[t]
            }

            function o() {
                this._events = new r, this._eventsCount = 0
            }
            Object.create && (r.prototype = Object.create(null), new r().__proto__ || (n = !1)), o.prototype.eventNames = function() {
                var e, r, i = [];
                if (0 === this._eventsCount) return i;
                for (r in e = this._events) t.call(e, r) && i.push(n ? r.slice(1) : r);
                return Object.getOwnPropertySymbols ? i.concat(Object.getOwnPropertySymbols(e)) : i
            }, o.prototype.listeners = function(e) {
                var t = n ? n + e : e,
                    r = this._events[t];
                if (!r) return [];
                if (r.fn) return [r.fn];
                for (var i = 0, a = r.length, s = Array(a); i < a; i++) s[i] = r[i].fn;
                return s
            }, o.prototype.listenerCount = function(e) {
                var t = n ? n + e : e,
                    r = this._events[t];
                return r ? r.fn ? 1 : r.length : 0
            }, o.prototype.emit = function(e, t, r, i, a, s) {
                var o = n ? n + e : e;
                if (!this._events[o]) return !1;
                var u, c, l = this._events[o],
                    d = arguments.length;
                if (l.fn) {
                    switch (l.once && this.removeListener(e, l.fn, void 0, !0), d) {
                        case 1:
                            return l.fn.call(l.context), !0;
                        case 2:
                            return l.fn.call(l.context, t), !0;
                        case 3:
                            return l.fn.call(l.context, t, r), !0;
                        case 4:
                            return l.fn.call(l.context, t, r, i), !0;
                        case 5:
                            return l.fn.call(l.context, t, r, i, a), !0;
                        case 6:
                            return l.fn.call(l.context, t, r, i, a, s), !0
                    }
                    for (c = 1, u = Array(d - 1); c < d; c++) u[c - 1] = arguments[c];
                    l.fn.apply(l.context, u)
                } else {
                    var h, f = l.length;
                    for (c = 0; c < f; c++) switch (l[c].once && this.removeListener(e, l[c].fn, void 0, !0), d) {
                        case 1:
                            l[c].fn.call(l[c].context);
                            break;
                        case 2:
                            l[c].fn.call(l[c].context, t);
                            break;
                        case 3:
                            l[c].fn.call(l[c].context, t, r);
                            break;
                        case 4:
                            l[c].fn.call(l[c].context, t, r, i);
                            break;
                        default:
                            if (!u)
                                for (h = 1, u = Array(d - 1); h < d; h++) u[h - 1] = arguments[h];
                            l[c].fn.apply(l[c].context, u)
                    }
                }
                return !0
            }, o.prototype.on = function(e, t, n) {
                return a(this, e, t, n, !1)
            }, o.prototype.once = function(e, t, n) {
                return a(this, e, t, n, !0)
            }, o.prototype.removeListener = function(e, t, r, i) {
                var a = n ? n + e : e;
                if (!this._events[a]) return this;
                if (!t) return s(this, a), this;
                var o = this._events[a];
                if (o.fn) o.fn !== t || i && !o.once || r && o.context !== r || s(this, a);
                else {
                    for (var u = 0, c = [], l = o.length; u < l; u++)(o[u].fn !== t || i && !o[u].once || r && o[u].context !== r) && c.push(o[u]);
                    c.length ? this._events[a] = 1 === c.length ? c[0] : c : s(this, a)
                }
                return this
            }, o.prototype.removeAllListeners = function(e) {
                var t;
                return e ? (t = n ? n + e : e, this._events[t] && s(this, t)) : (this._events = new r, this._eventsCount = 0), this
            }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = n, o.EventEmitter = o, e.exports = o
        },
        30622: function(e, t, n) {
            var r = n(2265),
                i = Symbol.for("react.element"),
                a = Symbol.for("react.fragment"),
                s = Object.prototype.hasOwnProperty,
                o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
                u = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function c(e, t, n) {
                var r, a = {},
                    c = null,
                    l = null;
                for (r in void 0 !== n && (c = "" + n), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (l = t.ref), t) s.call(t, r) && !u.hasOwnProperty(r) && (a[r] = t[r]);
                if (e && e.defaultProps)
                    for (r in t = e.defaultProps) void 0 === a[r] && (a[r] = t[r]);
                return {
                    $$typeof: i,
                    type: e,
                    key: c,
                    ref: l,
                    props: a,
                    _owner: o.current
                }
            }
            t.Fragment = a, t.jsx = c, t.jsxs = c
        },
        57437: function(e, t, n) {
            e.exports = n(30622)
        },
        81853: function(e, t, n) {
            /**
             * @license React
             * use-sync-external-store-shim.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = n(2265),
                i = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                a = r.useState,
                s = r.useEffect,
                o = r.useLayoutEffect,
                u = r.useDebugValue;

            function c(e) {
                var t = e.getSnapshot;
                e = e.value;
                try {
                    var n = t();
                    return !i(e, n)
                } catch (e) {
                    return !0
                }
            }
            var l = "undefined" == typeof window || void 0 === window.document || void 0 === window.document.createElement ? function(e, t) {
                return t()
            } : function(e, t) {
                var n = t(),
                    r = a({
                        inst: {
                            value: n,
                            getSnapshot: t
                        }
                    }),
                    i = r[0].inst,
                    l = r[1];
                return o(function() {
                    i.value = n, i.getSnapshot = t, c(i) && l({
                        inst: i
                    })
                }, [e, n, t]), s(function() {
                    return c(i) && l({
                        inst: i
                    }), e(function() {
                        c(i) && l({
                            inst: i
                        })
                    })
                }, [e]), u(n), n
            };
            t.useSyncExternalStore = void 0 !== r.useSyncExternalStore ? r.useSyncExternalStore : l
        },
        78704: function(e, t, n) {
            /**
             * @license React
             * use-sync-external-store-shim/with-selector.production.min.js
             *
             * Copyright (c) Facebook, Inc. and its affiliates.
             *
             * This source code is licensed under the MIT license found in the
             * LICENSE file in the root directory of this source tree.
             */
            var r = n(2265),
                i = n(26272),
                a = "function" == typeof Object.is ? Object.is : function(e, t) {
                    return e === t && (0 !== e || 1 / e == 1 / t) || e != e && t != t
                },
                s = i.useSyncExternalStore,
                o = r.useRef,
                u = r.useEffect,
                c = r.useMemo,
                l = r.useDebugValue;
            t.useSyncExternalStoreWithSelector = function(e, t, n, r, i) {
                var d = o(null);
                if (null === d.current) {
                    var h = {
                        hasValue: !1,
                        value: null
                    };
                    d.current = h
                } else h = d.current;
                var f = s(e, (d = c(function() {
                    function e(e) {
                        if (!u) {
                            if (u = !0, s = e, e = r(e), void 0 !== i && h.hasValue) {
                                var t = h.value;
                                if (i(t, e)) return o = t
                            }
                            return o = e
                        }
                        if (t = o, a(s, e)) return t;
                        var n = r(e);
                        return void 0 !== i && i(t, n) ? t : (s = e, o = n)
                    }
                    var s, o, u = !1,
                        c = void 0 === n ? null : n;
                    return [function() {
                        return e(t())
                    }, null === c ? void 0 : function() {
                        return e(c())
                    }]
                }, [t, n, r, i]))[0], d[1]);
                return u(function() {
                    h.hasValue = !0, h.value = f
                }, [f]), l(f), f
            }
        },
        26272: function(e, t, n) {
            e.exports = n(81853)
        },
        65401: function(e, t, n) {
            e.exports = n(78704)
        },
        40106: function(e, t, n) {
            n.d(t, {
                J: function() {
                    return r
                }
            });

            function r(e) {
                return "string" == typeof e ? Number.parseInt(e, "0x" === e.trim().substring(0, 2) ? 16 : 10) : "bigint" == typeof e ? Number(e) : e
            }
        },
        76373: function(e, t, n) {
            n.d(t, {
                _: function() {
                    return h
                }
            });
            var r, i = n(38026),
                a = n(40106),
                s = n(46750),
                o = n(39803),
                u = n(48519),
                c = n(21334),
                l = n(39730),
                d = n(21693),
                h = class extends s.wR {
                    constructor({
                        chains: e,
                        options: t
                    } = {}) {
                        let n = {
                            shimDisconnect: !0,
                            getProvider() {
                                if ("undefined" == typeof window) return;
                                let e = window.ethereum;
                                return e ? .providers && e.providers.length > 0 ? e.providers[0] : e
                            },
                            ...t
                        };
                        super({
                            chains: e,
                            options: n
                        }), this.id = "injected", (0, s.Ko)(this, r, void 0), this.shimDisconnectKey = `${this.id}.shimDisconnect`, this.onAccountsChanged = e => {
                            0 === e.length ? this.emit("disconnect") : this.emit("change", {
                                account: (0, o.K)(e[0])
                            })
                        }, this.onChainChanged = e => {
                            let t = (0, a.J)(e),
                                n = this.isChainUnsupported(t);
                            this.emit("change", {
                                chain: {
                                    id: t,
                                    unsupported: n
                                }
                            })
                        }, this.onDisconnect = async e => {
                            !(1013 === e.code && await this.getProvider() && await this.getAccount()) && (this.emit("disconnect"), this.options.shimDisconnect && this.storage ? .removeItem(this.shimDisconnectKey))
                        };
                        let i = n.getProvider();
                        if ("string" == typeof n.name) this.name = n.name;
                        else if (i) {
                            let e = function(e) {
                                if (!e) return "Injected";
                                let t = e => e.isApexWallet ? "Apex Wallet" : e.isAvalanche ? "Core Wallet" : e.isBackpack ? "Backpack" : e.isBifrost ? "Bifrost Wallet" : e.isBitKeep ? "BitKeep" : e.isBitski ? "Bitski" : e.isBlockWallet ? "BlockWallet" : e.isBraveWallet ? "Brave Wallet" : e.isCoin98 ? "Coin98 Wallet" : e.isCoinbaseWallet ? "Coinbase Wallet" : e.isDawn ? "Dawn Wallet" : e.isDefiant ? "Defiant" : e.isDesig ? "Desig Wallet" : e.isEnkrypt ? "Enkrypt" : e.isExodus ? "Exodus" : e.isFordefi ? "Fordefi" : e.isFrame ? "Frame" : e.isFrontier ? "Frontier Wallet" : e.isGamestop ? "GameStop Wallet" : e.isHaqqWallet ? "HAQQ Wallet" : e.isHyperPay ? "HyperPay Wallet" : e.isImToken ? "ImToken" : e.isHaloWallet ? "Halo Wallet" : e.isKuCoinWallet ? "KuCoin Wallet" : e.isMathWallet ? "MathWallet" : e.isNovaWallet ? "Nova Wallet" : e.isOkxWallet || e.isOKExWallet ? "OKX Wallet" : e.isOktoWallet ? "Okto Wallet" : e.isOneInchIOSWallet || e.isOneInchAndroidWallet ? "1inch Wallet" : e.isOneKey ? "OneKey Wallet" : e.isOpera ? "Opera" : e.isPhantom ? "Phantom" : e.isPortal ? "Ripio Portal" : e.isRabby ? "Rabby Wallet" : e.isRainbow ? "Rainbow" : e.isSafePal ? "SafePal Wallet" : e.isStatus ? "Status" : e.isSubWallet ? "SubWallet" : e.isTalisman ? "Talisman" : e.isTally ? "Taho" : e.isTokenPocket ? "TokenPocket" : e.isTokenary ? "Tokenary" : e.isTrust || e.isTrustWallet ? "Trust Wallet" : e.isTTWallet ? "TTWallet" : e.isXDEFI ? "XDEFI Wallet" : e.isZeal ? "Zeal" : e.isZerion ? "Zerion" : e.isMetaMask ? "MetaMask" : void 0;
                                if (e.providers ? .length) {
                                    let n = new Set,
                                        r = 1;
                                    for (let i of e.providers) {
                                        let e = t(i);
                                        e || (e = `Unknown Wallet #${r}`, r += 1), n.add(e)
                                    }
                                    let i = [...n];
                                    return i.length ? i : i[0] ? ? "Injected"
                                }
                                return t(e) ? ? "Injected"
                            }(i);
                            n.name ? this.name = n.name(e) : "string" == typeof e ? this.name = e : this.name = e[0]
                        } else this.name = "Injected";
                        this.ready = !!i
                    }
                    async connect({
                        chainId: e
                    } = {}) {
                        try {
                            let t = await this.getProvider();
                            if (!t) throw new i.N;
                            t.on && (t.on("accountsChanged", this.onAccountsChanged), t.on("chainChanged", this.onChainChanged), t.on("disconnect", this.onDisconnect)), this.emit("message", {
                                type: "connecting"
                            });
                            let n = await t.request({
                                    method: "eth_requestAccounts"
                                }),
                                r = (0, o.K)(n[0]),
                                a = await this.getChainId(),
                                s = this.isChainUnsupported(a);
                            return e && a !== e && (a = (await this.switchChain(e)).id, s = this.isChainUnsupported(a)), this.options.shimDisconnect && this.storage ? .setItem(this.shimDisconnectKey, !0), {
                                account: r,
                                chain: {
                                    id: a,
                                    unsupported: s
                                }
                            }
                        } catch (e) {
                            if (this.isUserRejectedRequestError(e)) throw new u.ab(e);
                            if (-32002 === e.code) throw new u.pT(e);
                            throw e
                        }
                    }
                    async disconnect() {
                        let e = await this.getProvider();
                        e ? .removeListener && (e.removeListener("accountsChanged", this.onAccountsChanged), e.removeListener("chainChanged", this.onChainChanged), e.removeListener("disconnect", this.onDisconnect), this.options.shimDisconnect && this.storage ? .removeItem(this.shimDisconnectKey))
                    }
                    async getAccount() {
                        let e = await this.getProvider();
                        if (!e) throw new i.N;
                        let t = await e.request({
                            method: "eth_accounts"
                        });
                        return (0, o.K)(t[0])
                    }
                    async getChainId() {
                        let e = await this.getProvider();
                        if (!e) throw new i.N;
                        return e.request({
                            method: "eth_chainId"
                        }).then(a.J)
                    }
                    async getProvider() {
                        let e = this.options.getProvider();
                        return e && (0, s.qx)(this, r, e), (0, s.ac)(this, r)
                    }
                    async getWalletClient({
                        chainId: e
                    } = {}) {
                        let [t, n] = await Promise.all([this.getProvider(), this.getAccount()]), r = this.chains.find(t => t.id === e);
                        if (!t) throw Error("provider is required.");
                        return (0, c.K)({
                            account: n,
                            chain: r,
                            transport: (0, l.P)(t)
                        })
                    }
                    async isAuthorized() {
                        try {
                            if (this.options.shimDisconnect && !this.storage ? .getItem(this.shimDisconnectKey)) return !1;
                            if (!await this.getProvider()) throw new i.N;
                            return !!await this.getAccount()
                        } catch {
                            return !1
                        }
                    }
                    async switchChain(e) {
                        let t = await this.getProvider();
                        if (!t) throw new i.N;
                        let n = (0, d.eC)(e);
                        try {
                            return await Promise.all([t.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: n
                                }]
                            }), new Promise(t => this.on("change", ({
                                chain: n
                            }) => {
                                n ? .id === e && t()
                            }))]), this.chains.find(t => t.id === e) ? ? {
                                id: e,
                                name: `Chain ${n}`,
                                network: `${n}`,
                                nativeCurrency: {
                                    name: "Ether",
                                    decimals: 18,
                                    symbol: "ETH"
                                },
                                rpcUrls: {
                                    default: {
                                        http: [""]
                                    },
                                    public: {
                                        http: [""]
                                    }
                                }
                            }
                        } catch (a) {
                            let r = this.chains.find(t => t.id === e);
                            if (!r) throw new i.B({
                                chainId: e,
                                connectorId: this.id
                            });
                            if (4902 === a.code || a ? .data ? .originalError ? .code === 4902) try {
                                if (await t.request({
                                        method: "wallet_addEthereumChain",
                                        params: [{
                                            chainId: n,
                                            chainName: r.name,
                                            nativeCurrency: r.nativeCurrency,
                                            rpcUrls: [r.rpcUrls.public ? .http[0] ? ? ""],
                                            blockExplorerUrls: this.getBlockExplorerUrls(r)
                                        }]
                                    }), await this.getChainId() !== e) throw new u.ab(Error("User rejected switch after adding network."));
                                return r
                            } catch (e) {
                                throw new u.ab(e)
                            }
                            if (this.isUserRejectedRequestError(a)) throw new u.ab(a);
                            throw new u.x3(a)
                        }
                    }
                    async watchAsset({
                        address: e,
                        decimals: t = 18,
                        image: n,
                        symbol: r
                    }) {
                        let a = await this.getProvider();
                        if (!a) throw new i.N;
                        return a.request({
                            method: "wallet_watchAsset",
                            params: {
                                type: "ERC20",
                                options: {
                                    address: e,
                                    decimals: t,
                                    image: n,
                                    symbol: r
                                }
                            }
                        })
                    }
                    isUserRejectedRequestError(e) {
                        return 4001 === e.code
                    }
                };
            r = new WeakMap
        },
        38026: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return r
                },
                N: function() {
                    return i
                }
            });
            var r = class extends Error {
                    constructor({
                        chainId: e,
                        connectorId: t
                    }) {
                        super(`Chain "${e}" not configured for connector "${t}".`), this.name = "ChainNotConfiguredForConnectorError"
                    }
                },
                i = class extends Error {
                    constructor() {
                        super(...arguments), this.name = "ConnectorNotFoundError", this.message = "Connector not found"
                    }
                }
        },
        46750: function(e, t, n) {
            n.d(t, {
                Ko: function() {
                    return u
                },
                U9: function() {
                    return l
                },
                ac: function() {
                    return o
                },
                qx: function() {
                    return c
                },
                wR: function() {
                    return d
                }
            });
            var r = n(28729),
                i = n(75404),
                a = n(24368),
                s = (e, t, n) => {
                    if (!t.has(e)) throw TypeError("Cannot " + n)
                },
                o = (e, t, n) => (s(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
                u = (e, t, n) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, n)
                },
                c = (e, t, n, r) => (s(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
                l = (e, t, n) => (s(e, t, "access private method"), n),
                d = class extends r {
                    constructor({
                        chains: e = [i.R, a.w],
                        options: t
                    }) {
                        super(), this.chains = e, this.options = t
                    }
                    getBlockExplorerUrls(e) {
                        let {
                            default: t,
                            ...n
                        } = e.blockExplorers ? ? {};
                        if (t) return [t.url, ...Object.values(n).map(e => e.url)]
                    }
                    isChainUnsupported(e) {
                        return !this.chains.some(t => t.id === e)
                    }
                    setStorage(e) {
                        this.storage = e
                    }
                }
        },
        42989: function(e, t, n) {
            n.d(t, {
                QB: function() {
                    return tO
                },
                $j: function() {
                    return t_
                },
                _g: function() {
                    return tL
                },
                o6: function() {
                    return tB
                },
                vZ: function() {
                    return function e(t, n) {
                        if (t === n) return !0;
                        if (t && n && "object" == typeof t && "object" == typeof n) {
                            let r, i;
                            if (t.constructor !== n.constructor) return !1;
                            if (Array.isArray(t) && Array.isArray(n)) {
                                if ((r = t.length) != n.length) return !1;
                                for (i = r; 0 != i--;)
                                    if (!e(t[i], n[i])) return !1;
                                return !0
                            }
                            if (t.valueOf !== Object.prototype.valueOf) return t.valueOf() === n.valueOf();
                            if (t.toString !== Object.prototype.toString) return t.toString() === n.toString();
                            let a = Object.keys(t);
                            if ((r = a.length) !== Object.keys(n).length) return !1;
                            for (i = r; 0 != i--;)
                                if (!Object.prototype.hasOwnProperty.call(n, a[i])) return !1;
                            for (i = r; 0 != i--;) {
                                let r = a[i];
                                if (r && !e(t[r], n[r])) return !1
                            }
                            return !0
                        }
                        return t != t && n != n
                    }
                },
                zP: function() {
                    return tW
                },
                EG: function() {
                    return t8
                },
                RQ: function() {
                    return ni
                },
                w6: function() {
                    return nn
                },
                Lk: function() {
                    return nr
                },
                D0: function() {
                    return t3
                },
                _X: function() {
                    return tj
                },
                Hy: function() {
                    return t4
                },
                uV: function() {
                    return tH
                },
                gY: function() {
                    return tT
                },
                xz: function() {
                    return tZ
                },
                jr: function() {
                    return tJ
                },
                wp: function() {
                    return tN
                },
                $q: function() {
                    return t0
                },
                a4: function() {
                    return t6
                },
                l: function() {
                    return t9
                },
                If: function() {
                    return t7
                },
                Mn: function() {
                    return na
                },
                uH: function() {
                    return ne
                },
                QC: function() {
                    return nt
                },
                pC: function() {
                    return tX
                },
                Tb: function() {
                    return tY
                },
                fq: function() {
                    return tV
                },
                n9: function() {
                    return t5
                }
            });
            var r, i, a, s, o, u = n(76373),
                c = (e, t, n) => {
                    if (!t.has(e)) throw TypeError("Cannot " + n)
                },
                l = (e, t, n) => (c(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
                d = (e, t, n) => {
                    if (t.has(e)) throw TypeError("Cannot add the same private member more than once");
                    t instanceof WeakSet ? t.add(e) : t.set(e, n)
                },
                h = (e, t, n, r) => (c(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
                f = (e, t, n) => (c(e, t, "access private method"), n),
                p = n(30315),
                m = n(42980),
                b = n(3458),
                y = n(53883),
                g = n(94540),
                v = n(94973),
                w = n(21693),
                P = n(28483),
                C = n(95950),
                x = n(98458);

            function O(e, t) {
                if (!(e instanceof C.G)) return !1;
                let n = e.walk(e => e instanceof x.Lu);
                return n instanceof x.Lu && (!!(n.data ? .errorName === "ResolverNotFound" || n.data ? .errorName === "ResolverWildcardNotSupported" || n.reason ? .includes("Wildcard on non-extended resolvers is not supported")) || "reverse" === t && n.reason === P.$[50])
            }
            var E = n(69809),
                S = n(56728),
                k = n(89563),
                I = n(45008);

            function R(e) {
                if (66 !== e.length || 0 !== e.indexOf("[") || 65 !== e.indexOf("]")) return null;
                let t = `0x${e.slice(1,65)}`;
                return (0, I.v)(t) ? t : null
            }

            function F(e) {
                let t = new Uint8Array(32).fill(0);
                if (!e) return (0, w.ci)(t);
                let n = e.split(".");
                for (let e = n.length - 1; e >= 0; e -= 1) {
                    let r = R(n[e]),
                        i = r ? (0, S.O0)(r) : (0, k.w)((0, S.qX)(n[e]), "bytes");
                    t = (0, k.w)((0, E.zo)([t, i]), "bytes")
                }
                return (0, w.ci)(t)
            }

            function $(e) {
                let t = e.replace(/^\.|\.$/gm, "");
                if (0 === t.length) return new Uint8Array(1);
                let n = new Uint8Array((0, S.qX)(t).byteLength + 2),
                    r = 0,
                    i = t.split(".");
                for (let e = 0; e < i.length; e++) {
                    let t = (0, S.qX)(i[e]);
                    if (t.byteLength > 255) {
                        var a;
                        t = (0, S.qX)((a = function(e) {
                            let t = new Uint8Array(32).fill(0);
                            return e ? R(e) || (0, k.w)((0, S.qX)(e)) : (0, w.ci)(t)
                        }(i[e]), `[${a.slice(2)}]`))
                    }
                    n[r] = t.length, n.set(t, r + 1), r += t.length + 1
                }
                return n.byteLength !== r + 1 ? n.slice(0, r + 1) : n
            }
            var j = n(82600),
                T = n(65459);
            async function M(e, {
                blockNumber: t,
                blockTag: n,
                coinType: r,
                name: i,
                universalResolverAddress: a
            }) {
                let s = a;
                if (!s) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    s = (0, g.L)({
                        blockNumber: t,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                try {
                    let a = (0, y.R)({
                            abi: m.X$,
                            functionName: "addr",
                            ...null != r ? {
                                args: [F(i), BigInt(r)]
                            } : {
                                args: [F(i)]
                            }
                        }),
                        o = await (0, j.s)(e, T.L, "readContract")({
                            address: s,
                            abi: m.k3,
                            functionName: "resolve",
                            args: [(0, w.NC)($(i)), a],
                            blockNumber: t,
                            blockTag: n
                        });
                    if ("0x" === o[0]) return null;
                    let u = (0, b.k)({
                        abi: m.X$,
                        args: null != r ? [F(i), BigInt(r)] : void 0,
                        functionName: "addr",
                        data: o[0]
                    });
                    if ("0x" === u || "0x00" === (0, v.f)(u)) return null;
                    return u
                } catch (e) {
                    if (O(e, "resolve")) return null;
                    throw e
                }
            }
            class A extends C.G {
                constructor({
                    data: e
                }) {
                    super("Unable to extract image from metadata. The metadata may be malformed or invalid.", {
                        metaMessages: ["- Metadata must be a JSON object with at least an `image`, `image_url` or `image_data` property.", "", `Provided data: ${JSON.stringify(e)}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "EnsAvatarInvalidMetadataError"
                    })
                }
            }
            class q extends C.G {
                constructor({
                    reason: e
                }) {
                    super(`ENS NFT avatar URI is invalid. ${e}`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "EnsAvatarInvalidNftUriError"
                    })
                }
            }
            class G extends C.G {
                constructor({
                    uri: e
                }) {
                    super(`Unable to resolve ENS avatar URI "${e}". The URI may be malformed, invalid, or does not respond with a valid image.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "EnsAvatarUriResolutionError"
                    })
                }
            }
            class N extends C.G {
                constructor({
                    namespace: e
                }) {
                    super(`ENS NFT avatar namespace "${e}" is not supported. Must be "erc721" or "erc1155".`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "EnsAvatarUnsupportedNamespaceError"
                    })
                }
            }
            let B = /(?<protocol>https?:\/\/[^\/]*|ipfs:\/|ipns:\/|ar:\/)?(?<root>\/)?(?<subpath>ipfs\/|ipns\/)?(?<target>[\w\-.]+)(?<subtarget>\/.*)?/,
                U = /^(Qm[1-9A-HJ-NP-Za-km-z]{44,}|b[A-Za-z2-7]{58,}|B[A-Z2-7]{58,}|z[1-9A-HJ-NP-Za-km-z]{48,}|F[0-9A-F]{50,})(\/(?<target>[\w\-.]+))?(?<subtarget>\/.*)?$/,
                D = /^data:([a-zA-Z\-/+]*);base64,([^"].*)/,
                L = /^data:([a-zA-Z\-/+]*)?(;[a-zA-Z0-9].*?)?(,)/;
            async function z(e) {
                try {
                    let t = await fetch(e, {
                        method: "HEAD"
                    });
                    if (200 === t.status) {
                        let e = t.headers.get("content-type");
                        return e ? .startsWith("image/")
                    }
                    return !1
                } catch (t) {
                    if ("object" == typeof t && void 0 !== t.response || !globalThis.hasOwnProperty("Image")) return !1;
                    return new Promise(t => {
                        let n = new Image;
                        n.onload = () => {
                            t(!0)
                        }, n.onerror = () => {
                            t(!1)
                        }, n.src = e
                    })
                }
            }

            function _(e, t) {
                return e ? e.endsWith("/") ? e.slice(0, -1) : e : t
            }

            function W({
                uri: e,
                gatewayUrls: t
            }) {
                let n = D.test(e);
                if (n) return {
                    uri: e,
                    isOnChain: !0,
                    isEncoded: n
                };
                let r = _(t ? .ipfs, "https://ipfs.io"),
                    i = _(t ? .arweave, "https://arweave.net"),
                    a = e.match(B),
                    {
                        protocol: s,
                        subpath: o,
                        target: u,
                        subtarget: c = ""
                    } = a ? .groups || {},
                    l = "ipns:/" === s || "ipns/" === o,
                    d = "ipfs:/" === s || "ipfs/" === o || U.test(e);
                if (e.startsWith("http") && !l && !d) {
                    let n = e;
                    return t ? .arweave && (n = e.replace(/https:\/\/arweave.net/g, t ? .arweave)), {
                        uri: n,
                        isOnChain: !1,
                        isEncoded: !1
                    }
                }
                if ((l || d) && u) return {
                    uri: `${r}/${l?"ipns":"ipfs"}/${u}${c}`,
                    isOnChain: !1,
                    isEncoded: !1
                };
                if ("ar:/" === s && u) return {
                    uri: `${i}/${u}${c||""}`,
                    isOnChain: !1,
                    isEncoded: !1
                };
                let h = e.replace(L, "");
                if (h.startsWith("<svg") && (h = `data:image/svg+xml;base64,${btoa(h)}`), h.startsWith("data:") || h.startsWith("{")) return {
                    uri: h,
                    isOnChain: !0,
                    isEncoded: !1
                };
                throw new G({
                    uri: e
                })
            }

            function Q(e) {
                if ("object" != typeof e || !("image" in e) && !("image_url" in e) && !("image_data" in e)) throw new A({
                    data: e
                });
                return e.image || e.image_url || e.image_data
            }
            async function K({
                gatewayUrls: e,
                uri: t
            }) {
                try {
                    let n = await fetch(t).then(e => e.json());
                    return await H({
                        gatewayUrls: e,
                        uri: Q(n)
                    })
                } catch {
                    throw new G({
                        uri: t
                    })
                }
            }
            async function H({
                gatewayUrls: e,
                uri: t
            }) {
                let {
                    uri: n,
                    isOnChain: r
                } = W({
                    uri: t,
                    gatewayUrls: e
                });
                if (r || await z(n)) return n;
                throw new G({
                    uri: t
                })
            }
            async function Z(e, {
                nft: t
            }) {
                if ("erc721" === t.namespace) return (0, T.L)(e, {
                    address: t.contractAddress,
                    abi: [{
                        name: "tokenURI",
                        type: "function",
                        stateMutability: "view",
                        inputs: [{
                            name: "tokenId",
                            type: "uint256"
                        }],
                        outputs: [{
                            name: "",
                            type: "string"
                        }]
                    }],
                    functionName: "tokenURI",
                    args: [BigInt(t.tokenID)]
                });
                if ("erc1155" === t.namespace) return (0, T.L)(e, {
                    address: t.contractAddress,
                    abi: [{
                        name: "uri",
                        type: "function",
                        stateMutability: "view",
                        inputs: [{
                            name: "_id",
                            type: "uint256"
                        }],
                        outputs: [{
                            name: "",
                            type: "string"
                        }]
                    }],
                    functionName: "uri",
                    args: [BigInt(t.tokenID)]
                });
                throw new N({
                    namespace: t.namespace
                })
            }
            async function J(e, {
                gatewayUrls: t,
                record: n
            }) {
                return /eip155:/i.test(n) ? X(e, {
                    gatewayUrls: t,
                    record: n
                }) : H({
                    uri: n,
                    gatewayUrls: t
                })
            }
            async function X(e, {
                gatewayUrls: t,
                record: n
            }) {
                let r = function(e) {
                        let t = e;
                        t.startsWith("did:nft:") && (t = t.replace("did:nft:", "").replace(/_/g, "/"));
                        let [n, r, i] = t.split("/"), [a, s] = n.split(":"), [o, u] = r.split(":");
                        if (!a || "eip155" !== a.toLowerCase()) throw new q({
                            reason: "Only EIP-155 supported"
                        });
                        if (!s) throw new q({
                            reason: "Chain ID not found"
                        });
                        if (!u) throw new q({
                            reason: "Contract address not found"
                        });
                        if (!i) throw new q({
                            reason: "Token ID not found"
                        });
                        if (!o) throw new q({
                            reason: "ERC namespace not found"
                        });
                        return {
                            chainID: parseInt(s),
                            namespace: o.toLowerCase(),
                            contractAddress: u,
                            tokenID: i
                        }
                    }(n),
                    {
                        uri: i,
                        isOnChain: a,
                        isEncoded: s
                    } = W({
                        uri: await Z(e, {
                            nft: r
                        }),
                        gatewayUrls: t
                    });
                if (a && (i.includes("data:application/json;base64,") || i.startsWith("{"))) return H({
                    uri: Q(JSON.parse(s ? atob(i.replace("data:application/json;base64,", "")) : i)),
                    gatewayUrls: t
                });
                let o = r.tokenID;
                return "erc1155" === r.namespace && (o = o.replace("0x", "").padStart(64, "0")), K({
                    gatewayUrls: t,
                    uri: i.replace(/(?:0x)?{id}/, o)
                })
            }
            async function Y(e, {
                blockNumber: t,
                blockTag: n,
                name: r,
                key: i,
                universalResolverAddress: a
            }) {
                let s = a;
                if (!s) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    s = (0, g.L)({
                        blockNumber: t,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                try {
                    let a = await (0, j.s)(e, T.L, "readContract")({
                        address: s,
                        abi: m.k3,
                        functionName: "resolve",
                        args: [(0, w.NC)($(r)), (0, y.R)({
                            abi: m.nZ,
                            functionName: "text",
                            args: [F(r), i]
                        })],
                        blockNumber: t,
                        blockTag: n
                    });
                    if ("0x" === a[0]) return null;
                    let o = (0, b.k)({
                        abi: m.nZ,
                        functionName: "text",
                        data: a[0]
                    });
                    return "" === o ? null : o
                } catch (e) {
                    if (O(e, "resolve")) return null;
                    throw e
                }
            }
            async function V(e, {
                blockNumber: t,
                blockTag: n,
                gatewayUrls: r,
                name: i,
                universalResolverAddress: a
            }) {
                let s = await (0, j.s)(e, Y, "getEnsText")({
                    blockNumber: t,
                    blockTag: n,
                    key: "avatar",
                    name: i,
                    universalResolverAddress: a
                });
                if (!s) return null;
                try {
                    return await J(e, {
                        record: s,
                        gatewayUrls: r
                    })
                } catch {
                    return null
                }
            }
            async function ee(e, {
                address: t,
                blockNumber: n,
                blockTag: r,
                universalResolverAddress: i
            }) {
                let a = i;
                if (!a) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    a = (0, g.L)({
                        blockNumber: n,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                let s = `${t.toLowerCase().substring(2)}.addr.reverse`;
                try {
                    let [i, o] = await (0, j.s)(e, T.L, "readContract")({
                        address: a,
                        abi: m.du,
                        functionName: "reverse",
                        args: [(0, w.NC)($(s))],
                        blockNumber: n,
                        blockTag: r
                    });
                    if (t.toLowerCase() !== o.toLowerCase()) return null;
                    return i
                } catch (e) {
                    if (O(e, "reverse")) return null;
                    throw e
                }
            }
            async function et(e, {
                blockNumber: t,
                blockTag: n,
                name: r,
                universalResolverAddress: i
            }) {
                let a = i;
                if (!a) {
                    if (!e.chain) throw Error("client chain not configured. universalResolverAddress is required.");
                    a = (0, g.L)({
                        blockNumber: t,
                        chain: e.chain,
                        contract: "ensUniversalResolver"
                    })
                }
                let [s] = await (0, j.s)(e, T.L, "readContract")({
                    address: a,
                    abi: [{
                        inputs: [{
                            type: "bytes"
                        }],
                        name: "findResolver",
                        outputs: [{
                            type: "address"
                        }, {
                            type: "bytes32"
                        }],
                        stateMutability: "view",
                        type: "function"
                    }],
                    functionName: "findResolver",
                    args: [(0, w.NC)($(r))],
                    blockNumber: t,
                    blockTag: n
                });
                return s
            }
            var en = n(98873),
                er = n(96157);
            async function ei(e) {
                let t = (0, er.g)(e, {
                        method: "eth_newBlockFilter"
                    }),
                    n = await e.request({
                        method: "eth_newBlockFilter"
                    });
                return {
                    id: n,
                    request: t(n),
                    type: "block"
                }
            }
            var ea = n(77096),
                es = n(38789);
            async function eo(e, {
                address: t,
                args: n,
                event: r,
                events: i,
                fromBlock: a,
                strict: s,
                toBlock: o
            } = {}) {
                let u = i ? ? (r ? [r] : void 0),
                    c = (0, er.g)(e, {
                        method: "eth_newFilter"
                    }),
                    l = [];
                u && (l = [u.flatMap(e => (0, es.O)({
                    abi: [e],
                    eventName: e.name,
                    args: n
                }))], r && (l = l[0]));
                let d = await e.request({
                    method: "eth_newFilter",
                    params: [{
                        address: t,
                        fromBlock: "bigint" == typeof a ? (0, w.eC)(a) : a,
                        toBlock: "bigint" == typeof o ? (0, w.eC)(o) : o,
                        ...l.length ? {
                            topics: l
                        } : {}
                    }]
                });
                return {
                    abi: u,
                    args: n,
                    eventName: r ? r.name : void 0,
                    fromBlock: a,
                    id: d,
                    request: c(d),
                    strict: s,
                    toBlock: o,
                    type: "event"
                }
            }
            async function eu(e) {
                let t = (0, er.g)(e, {
                        method: "eth_newPendingTransactionFilter"
                    }),
                    n = await e.request({
                        method: "eth_newPendingTransactionFilter"
                    });
                return {
                    id: n,
                    request: t(n),
                    type: "transaction"
                }
            }
            var ec = n(45459),
                el = n(77451),
                ed = n(89412),
                eh = n(17976);
            async function ef(e, {
                address: t,
                blockNumber: n,
                blockTag: r = "latest"
            }) {
                let i = n ? (0, w.eC)(n) : void 0;
                return BigInt(await e.request({
                    method: "eth_getBalance",
                    params: [t, i || r]
                }))
            }
            var ep = n(3891),
                em = n(15552),
                eb = n(30838);
            async function ey(e, {
                blockHash: t,
                blockNumber: n,
                blockTag: r = "latest"
            } = {}) {
                let i;
                let a = void 0 !== n ? (0, w.eC)(n) : void 0;
                return i = t ? await e.request({
                    method: "eth_getBlockTransactionCountByHash",
                    params: [t]
                }) : await e.request({
                    method: "eth_getBlockTransactionCountByNumber",
                    params: [a || r]
                }), (0, eb.ly)(i)
            }
            async function eg(e, {
                address: t,
                blockNumber: n,
                blockTag: r = "latest"
            }) {
                let i = void 0 !== n ? (0, w.eC)(n) : void 0,
                    a = await e.request({
                        method: "eth_getCode",
                        params: [t, i || r]
                    });
                if ("0x" !== a) return a
            }
            var ev = n(13438),
                ew = n(30120);
            async function eP(e, {
                blockCount: t,
                blockNumber: n,
                blockTag: r = "latest",
                rewardPercentiles: i
            }) {
                var a;
                let s = n ? (0, w.eC)(n) : void 0;
                return {
                    baseFeePerGas: (a = await e.request({
                        method: "eth_feeHistory",
                        params: [(0, w.eC)(t), s || r, i]
                    })).baseFeePerGas.map(e => BigInt(e)),
                    gasUsedRatio: a.gasUsedRatio,
                    oldestBlock: BigInt(a.oldestBlock),
                    reward: a.reward ? .map(e => e.map(e => BigInt(e)))
                }
            }
            var eC = n(53138),
                ex = n(71878),
                eO = n(63610),
                eE = n(37380);
            async function eS(e, {
                filter: t
            }) {
                let n = t.strict ? ? !1;
                return (await t.request({
                    method: "eth_getFilterLogs",
                    params: [t.id]
                })).map(e => {
                    try {
                        let {
                            eventName: r,
                            args: i
                        } = "abi" in t && t.abi ? (0, eO.F)({
                            abi: t.abi,
                            data: e.data,
                            topics: e.topics,
                            strict: n
                        }) : {
                            eventName: void 0,
                            args: void 0
                        };
                        return (0, eE.U)(e, {
                            args: i,
                            eventName: r
                        })
                    } catch (i) {
                        let n, r;
                        if (i instanceof ex.SM || i instanceof ex.Gy) {
                            if ("strict" in t && t.strict) return;
                            n = i.abiItem.name, r = i.abiItem.inputs ? .some(e => !("name" in e && e.name))
                        }
                        return (0, eE.U)(e, {
                            args: r ? [] : {},
                            eventName: n
                        })
                    }
                }).filter(Boolean)
            }
            var ek = n(75188),
                eI = n(31801);
            async function eR(e, {
                address: t,
                blockNumber: n,
                blockTag: r,
                storageKeys: i
            }) {
                var a;
                let s = void 0 !== n ? (0, w.eC)(n) : void 0;
                return { ...a = await e.request({
                        method: "eth_getProof",
                        params: [t, i, s || (r ? ? "latest")]
                    }),
                    balance: a.balance ? BigInt(a.balance) : void 0,
                    nonce: a.nonce ? (0, eb.ly)(a.nonce) : void 0,
                    storageProof: a.storageProof ? a.storageProof.map(e => ({ ...e,
                        value: BigInt(e.value)
                    })) : void 0
                }
            }
            async function eF(e, {
                address: t,
                blockNumber: n,
                blockTag: r = "latest",
                slot: i
            }) {
                let a = void 0 !== n ? (0, w.eC)(n) : void 0;
                return await e.request({
                    method: "eth_getStorageAt",
                    params: [t, i, a || r]
                })
            }
            var e$ = n(44818),
                ej = n(52017);
            async function eT(e, {
                blockHash: t,
                blockNumber: n,
                blockTag: r,
                hash: i,
                index: a
            }) {
                let s = r || "latest",
                    o = void 0 !== n ? (0, w.eC)(n) : void 0,
                    u = null;
                if (i ? u = await e.request({
                        method: "eth_getTransactionByHash",
                        params: [i]
                    }) : t ? u = await e.request({
                        method: "eth_getTransactionByBlockHashAndIndex",
                        params: [t, (0, w.eC)(a)]
                    }) : (o || s) && (u = await e.request({
                        method: "eth_getTransactionByBlockNumberAndIndex",
                        params: [o || s, (0, w.eC)(a)]
                    })), !u) throw new e$.Bh({
                    blockHash: t,
                    blockNumber: n,
                    blockTag: s,
                    hash: i,
                    index: a
                });
                return (e.chain ? .formatters ? .transaction ? .format || ej.Tr)(u)
            }
            async function eM(e, {
                hash: t,
                transactionReceipt: n
            }) {
                let [r, i] = await Promise.all([(0, j.s)(e, em.z, "getBlockNumber")({}), t ? (0, j.s)(e, eT, "getBlockNumber")({
                    hash: t
                }) : void 0]), a = n ? .blockNumber || i ? .blockNumber;
                return a ? r - a + 1 n : 0 n
            }
            var eA = n(31742);
            let eq = {
                "0x0": "reverted",
                "0x1": "success"
            };
            async function eG(e, {
                hash: t
            }) {
                let n = await e.request({
                    method: "eth_getTransactionReceipt",
                    params: [t]
                });
                if (!n) throw new e$.Yb({
                    hash: t
                });
                return (e.chain ? .formatters ? .transactionReceipt ? .format || function(e) {
                    return { ...e,
                        blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                        contractAddress: e.contractAddress ? e.contractAddress : null,
                        cumulativeGasUsed: e.cumulativeGasUsed ? BigInt(e.cumulativeGasUsed) : null,
                        effectiveGasPrice: e.effectiveGasPrice ? BigInt(e.effectiveGasPrice) : null,
                        gasUsed: e.gasUsed ? BigInt(e.gasUsed) : null,
                        logs: e.logs ? e.logs.map(e => (0, eE.U)(e)) : null,
                        to: e.to ? e.to : null,
                        transactionIndex: e.transactionIndex ? (0, eb.ly)(e.transactionIndex) : null,
                        status: e.status ? eq[e.status] : null,
                        type: e.type ? ej.c8[e.type] || e.type : null
                    }
                })(n)
            }
            var eN = n(65573);
            async function eB(e, t) {
                let {
                    allowFailure: n = !0,
                    batchSize: r,
                    blockNumber: i,
                    blockTag: a,
                    contracts: s,
                    multicallAddress: o
                } = t, u = r ? ? ("object" == typeof e.batch ? .multicall && e.batch.multicall.batchSize || 1024), c = o;
                if (!c) {
                    if (!e.chain) throw Error("client chain not configured. multicallAddress is required.");
                    c = (0, g.L)({
                        blockNumber: i,
                        chain: e.chain,
                        contract: "multicall3"
                    })
                }
                let l = [
                        []
                    ],
                    d = 0,
                    h = 0;
                for (let e = 0; e < s.length; e++) {
                    let {
                        abi: t,
                        address: r,
                        args: i,
                        functionName: a
                    } = s[e];
                    try {
                        let e = (0, y.R)({
                            abi: t,
                            args: i,
                            functionName: a
                        });
                        h += (e.length - 2) / 2, u > 0 && h > u && l[d].length > 0 && (d++, h = (e.length - 2) / 2, l[d] = []), l[d] = [...l[d], {
                            allowFailure: !0,
                            callData: e,
                            target: r
                        }]
                    } catch (s) {
                        let e = (0, eN.S)(s, {
                            abi: t,
                            address: r,
                            args: i,
                            docsPath: "/docs/contract/multicall",
                            functionName: a
                        });
                        if (!n) throw e;
                        l[d] = [...l[d], {
                            allowFailure: !0,
                            callData: "0x",
                            target: r
                        }]
                    }
                }
                let f = await Promise.allSettled(l.map(t => (0, j.s)(e, T.L, "readContract")({
                        abi: m.F8,
                        address: c,
                        args: [t],
                        blockNumber: i,
                        blockTag: a,
                        functionName: "aggregate3"
                    }))),
                    p = [];
                for (let e = 0; e < f.length; e++) {
                    let t = f[e];
                    if ("rejected" === t.status) {
                        if (!n) throw t.reason;
                        for (let n = 0; n < l[e].length; n++) p.push({
                            status: "failure",
                            error: t.reason,
                            result: void 0
                        });
                        continue
                    }
                    let r = t.value;
                    for (let t = 0; t < r.length; t++) {
                        let {
                            returnData: i,
                            success: a
                        } = r[t], {
                            callData: o
                        } = l[e][t], {
                            abi: u,
                            address: c,
                            functionName: d,
                            args: h
                        } = s[p.length];
                        try {
                            if ("0x" === o) throw new ex.wb;
                            if (!a) throw new x.VQ({
                                data: i
                            });
                            let e = (0, b.k)({
                                abi: u,
                                args: h,
                                data: i,
                                functionName: d
                            });
                            p.push(n ? {
                                result: e,
                                status: "success"
                            } : e)
                        } catch (t) {
                            let e = (0, eN.S)(t, {
                                abi: u,
                                address: c,
                                args: h,
                                docsPath: "/docs/contract/multicall",
                                functionName: d
                            });
                            if (!n) throw e;
                            p.push({
                                error: e,
                                result: void 0,
                                status: "failure"
                            })
                        }
                    }
                }
                if (p.length !== s.length) throw new C.G("multicall results mismatch");
                return p
            }
            var eU = n(9031),
                eD = n(81621);
            BigInt(0), BigInt(1), BigInt(2);
            var eL = n(12732);
            async function ez(e, {
                address: t,
                hash: n,
                signature: r,
                ...i
            }) {
                let a = (0, I.v)(r) ? r : (0, w.NC)(r);
                try {
                    let {
                        data: r
                    } = await (0, j.s)(e, en.R, "call")({
                        data: (0, eL.w)({
                            abi: m.$o,
                            args: [t, n, a],
                            bytecode: "0x60806040523480156200001157600080fd5b50604051620007003803806200070083398101604081905262000034916200056f565b6000620000438484846200004f565b9050806000526001601ff35b600080846001600160a01b0316803b806020016040519081016040528181526000908060200190933c90507f6492649264926492649264926492649264926492649264926492649264926492620000a68462000451565b036200021f57600060608085806020019051810190620000c79190620005ce565b8651929550909350915060000362000192576000836001600160a01b031683604051620000f5919062000643565b6000604051808303816000865af19150503d806000811462000134576040519150601f19603f3d011682016040523d82523d6000602084013e62000139565b606091505b5050905080620001905760405162461bcd60e51b815260206004820152601e60248201527f5369676e617475726556616c696461746f723a206465706c6f796d656e74000060448201526064015b60405180910390fd5b505b604051630b135d3f60e11b808252906001600160a01b038a1690631626ba7e90620001c4908b90869060040162000661565b602060405180830381865afa158015620001e2573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200020891906200069d565b6001600160e01b031916149450505050506200044a565b805115620002b157604051630b135d3f60e11b808252906001600160a01b03871690631626ba7e9062000259908890889060040162000661565b602060405180830381865afa15801562000277573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906200029d91906200069d565b6001600160e01b031916149150506200044a565b8251604114620003195760405162461bcd60e51b815260206004820152603a6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e6174757265206c656e677468000000000000606482015260840162000187565b620003236200046b565b506020830151604080850151855186939260009185919081106200034b576200034b620006c9565b016020015160f81c9050601b81148015906200036b57508060ff16601c14155b15620003cf5760405162461bcd60e51b815260206004820152603b6024820152600080516020620006e083398151915260448201527f3a20696e76616c6964207369676e617475726520762076616c75650000000000606482015260840162000187565b6040805160008152602081018083528a905260ff83169181019190915260608101849052608081018390526001600160a01b038a169060019060a0016020604051602081039080840390855afa1580156200042e573d6000803e3d6000fd5b505050602060405103516001600160a01b031614955050505050505b9392505050565b60006020825110156200046357600080fd5b508051015190565b60405180606001604052806003906020820280368337509192915050565b6001600160a01b03811681146200049f57600080fd5b50565b634e487b7160e01b600052604160045260246000fd5b60005b83811015620004d5578181015183820152602001620004bb565b50506000910152565b600082601f830112620004f057600080fd5b81516001600160401b03808211156200050d576200050d620004a2565b604051601f8301601f19908116603f01168101908282118183101715620005385762000538620004a2565b816040528381528660208588010111156200055257600080fd5b62000565846020830160208901620004b8565b9695505050505050565b6000806000606084860312156200058557600080fd5b8351620005928162000489565b6020850151604086015191945092506001600160401b03811115620005b657600080fd5b620005c486828701620004de565b9150509250925092565b600080600060608486031215620005e457600080fd5b8351620005f18162000489565b60208501519093506001600160401b03808211156200060f57600080fd5b6200061d87838801620004de565b935060408601519150808211156200063457600080fd5b50620005c486828701620004de565b6000825162000657818460208701620004b8565b9190910192915050565b828152604060208201526000825180604084015262000688816060850160208701620004b8565b601f01601f1916919091016060019392505050565b600060208284031215620006b057600080fd5b81516001600160e01b0319811681146200044a57600080fd5b634e487b7160e01b600052603260045260246000fdfe5369676e617475726556616c696461746f72237265636f7665725369676e6572"
                        }),
                        ...i
                    });
                    return function(e, t) {
                        let n = (0, I.v)(e) ? (0, S.O0)(e) : e;
                        return function(e, t) {
                            if (e.length !== t.length) return !1;
                            for (let n = 0; n < e.length; n++)
                                if (e[n] !== t[n]) return !1;
                            return !0
                        }(n, (0, I.v)(t) ? (0, S.O0)(t) : t)
                    }(r ? ? "0x0", "0x1")
                } catch (e) {
                    if (e instanceof x.cg) return !1;
                    throw e
                }
            }
            async function e_(e, {
                address: t,
                message: n,
                signature: r,
                ...i
            }) {
                return ez(e, {
                    address: t,
                    hash: function(e, t) {
                        let n = "string" == typeof e ? (0, S.qX)(e) : e.raw instanceof Uint8Array ? e.raw : (0, S.O0)(e.raw),
                            r = (0, S.qX)(`Ethereum Signed Message:
${n.length}`);
                        return (0, k.w)((0, E.zo)([r, n]), void 0)
                    }(n),
                    signature: r,
                    ...i
                })
            }
            var eW = n(90929),
                eQ = n(29578);

            function eK({
                data: e,
                primaryType: t,
                types: n
            }) {
                let r = function e({
                    data: t,
                    primaryType: n,
                    types: r
                }) {
                    let i = [{
                            type: "bytes32"
                        }],
                        a = [function({
                            primaryType: e,
                            types: t
                        }) {
                            let n = (0, w.NC)(function({
                                primaryType: e,
                                types: t
                            }) {
                                let n = "",
                                    r = function e({
                                        primaryType: t,
                                        types: n
                                    }, r = new Set) {
                                        let i = t.match(/^\w*/u),
                                            a = i ? .[0];
                                        if (r.has(a) || void 0 === n[a]) return r;
                                        for (let t of (r.add(a), n[a])) e({
                                            primaryType: t.type,
                                            types: n
                                        }, r);
                                        return r
                                    }({
                                        primaryType: e,
                                        types: t
                                    });
                                for (let i of (r.delete(e), [e, ...Array.from(r).sort()])) n += `${i}(${t[i].map(({name:e,type:t})=>`
                                $ {
                                    t
                                }
                                $ {
                                    e
                                }
                                `).join(",")})`;
                                return n
                            }({
                                primaryType: e,
                                types: t
                            }));
                            return (0, k.w)(n)
                        }({
                            primaryType: n,
                            types: r
                        })];
                    for (let s of r[n]) {
                        let [n, o] = function t({
                            types: n,
                            name: r,
                            type: i,
                            value: a
                        }) {
                            if (void 0 !== n[i]) return [{
                                type: "bytes32"
                            }, (0, k.w)(e({
                                data: a,
                                primaryType: i,
                                types: n
                            }))];
                            if ("bytes" === i) {
                                let e = a.length % 2 ? "0" : "";
                                return a = `0x${e+a.slice(2)}`, [{
                                    type: "bytes32"
                                }, (0, k.w)(a)]
                            }
                            if ("string" === i) return [{
                                type: "bytes32"
                            }, (0, k.w)((0, w.NC)(a))];
                            if (i.lastIndexOf("]") === i.length - 1) {
                                let e = i.slice(0, i.lastIndexOf("[")),
                                    s = a.map(i => t({
                                        name: r,
                                        type: e,
                                        types: n,
                                        value: i
                                    }));
                                return [{
                                    type: "bytes32"
                                }, (0, k.w)((0, eW.E)(s.map(([e]) => e), s.map(([, e]) => e)))]
                            }
                            return [{
                                type: i
                            }, a]
                        }({
                            types: r,
                            name: s.name,
                            type: s.type,
                            value: t[s.name]
                        });
                        i.push(n), a.push(o)
                    }
                    return (0, eW.E)(i, a)
                }({
                    data: e,
                    primaryType: t,
                    types: n
                });
                return (0, k.w)(r)
            }
            async function eH(e, {
                address: t,
                signature: n,
                message: r,
                primaryType: i,
                types: a,
                domain: s,
                ...o
            }) {
                return ez(e, {
                    address: t,
                    hash: function({
                        domain: e,
                        message: t,
                        primaryType: n,
                        types: r
                    }) {
                        let i = void 0 === e ? {} : e,
                            a = {
                                EIP712Domain: (0, eQ.cj)({
                                    domain: i
                                }),
                                ...r
                            };
                        (0, eQ.iC)({
                            domain: i,
                            message: t,
                            primaryType: n,
                            types: a
                        });
                        let s = ["0x1901"];
                        return i && s.push(function({
                            domain: e,
                            types: t
                        }) {
                            return eK({
                                data: e,
                                primaryType: "EIP712Domain",
                                types: t
                            })
                        }({
                            domain: i,
                            types: a
                        })), "EIP712Domain" !== n && s.push(eK({
                            data: t,
                            primaryType: n,
                            types: a
                        })), (0, k.w)((0, E.zo)(s))
                    }({
                        message: r,
                        primaryType: i,
                        types: a,
                        domain: s
                    }),
                    signature: n,
                    ...o
                })
            }
            var eZ = n(71492),
                eJ = n(87162),
                eX = n(36063),
                eY = n(71891),
                eV = n(62468);

            function e0(e, {
                emitOnBegin: t = !1,
                emitMissed: n = !1,
                onBlockNumber: r,
                onError: i,
                poll: a,
                pollingInterval: s = e.pollingInterval
            }) {
                let o, u, c;
                return (void 0 !== a ? a : "webSocket" !== e.transport.type) ? (() => {
                    let a = (0, eY.P)(["watchBlockNumber", e.uid, t, n, s]);
                    return (0, eJ.N7)(a, {
                        onBlockNumber: r,
                        onError: i
                    }, r => (0, eV.$)(async () => {
                        try {
                            let t = await (0, j.s)(e, em.z, "getBlockNumber")({
                                cacheTime: 0
                            });
                            if (o) {
                                if (t === o) return;
                                if (t - o > 1 && n)
                                    for (let e = o + 1 n; e < t; e++) r.onBlockNumber(e, o), o = e
                            }(!o || t > o) && (r.onBlockNumber(t, o), o = t)
                        } catch (e) {
                            r.onError ? .(e)
                        }
                    }, {
                        emitOnBegin: t,
                        interval: s
                    }))
                })() : (u = !0, c = () => u = !1, (async () => {
                    try {
                        let {
                            unsubscribe: t
                        } = await e.transport.subscribe({
                            params: ["newHeads"],
                            onData(e) {
                                if (!u) return;
                                let t = (0, eb.y_)(e.result ? .number);
                                r(t, o), o = t
                            },
                            onError(e) {
                                i ? .(e)
                            }
                        });
                        c = t, u || c()
                    } catch (e) {
                        i ? .(e)
                    }
                })(), c)
            }
            async function e1(e, {
                confirmations: t = 1,
                hash: n,
                onReplaced: r,
                pollingInterval: i = e.pollingInterval,
                timeout: a
            }) {
                let s, o, u;
                let c = (0, eY.P)(["waitForTransactionReceipt", e.uid, n]),
                    l = !1;
                return new Promise((d, h) => {
                    a && setTimeout(() => h(new e$.mc({
                        hash: n
                    })), a);
                    let f = (0, eJ.N7)(c, {
                        onReplaced: r,
                        resolve: d,
                        reject: h
                    }, r => {
                        let a = (0, j.s)(e, e0, "watchBlockNumber")({
                            emitMissed: !0,
                            emitOnBegin: !0,
                            poll: !0,
                            pollingInterval: i,
                            async onBlockNumber(i) {
                                if (l) return;
                                let c = i,
                                    d = e => {
                                        a(), e(), f()
                                    };
                                try {
                                    if (u) {
                                        if (t > 1 && (!u.blockNumber || c - u.blockNumber + 1 n < t)) return;
                                        d(() => r.resolve(u));
                                        return
                                    }
                                    if (s || (l = !0, await (0, eX.J)(async () => {
                                            (s = await (0, j.s)(e, eT, "getTransaction")({
                                                hash: n
                                            })).blockNumber && (c = s.blockNumber)
                                        }, {
                                            delay: ({
                                                count: e
                                            }) => 200 * ~~(1 << e),
                                            retryCount: 6
                                        }), l = !1), u = await (0, j.s)(e, eG, "getTransactionReceipt")({
                                            hash: n
                                        }), t > 1 && (!u.blockNumber || c - u.blockNumber + 1 n < t)) return;
                                    d(() => r.resolve(u))
                                } catch (n) {
                                    if (s && (n instanceof e$.Bh || n instanceof e$.Yb)) try {
                                        o = s, l = !0;
                                        let n = await (0, eX.J)(() => (0, j.s)(e, ep.Q, "getBlock")({
                                            blockNumber: c,
                                            includeTransactions: !0
                                        }), {
                                            delay: ({
                                                count: e
                                            }) => 200 * ~~(1 << e),
                                            retryCount: 6,
                                            shouldRetry: ({
                                                error: e
                                            }) => e instanceof eZ.f
                                        });
                                        l = !1;
                                        let i = n.transactions.find(({
                                            from: e,
                                            nonce: t
                                        }) => e === o.from && t === o.nonce);
                                        if (!i || (u = await (0, j.s)(e, eG, "getTransactionReceipt")({
                                                hash: i.hash
                                            }), t > 1 && (!u.blockNumber || c - u.blockNumber + 1 n < t))) return;
                                        let a = "replaced";
                                        i.to === o.to && i.value === o.value ? a = "repriced" : i.from === i.to && 0 n === i.value && (a = "cancelled"), d(() => {
                                            r.onReplaced ? .({
                                                reason: a,
                                                replacedTransaction: o,
                                                transaction: i,
                                                transactionReceipt: u
                                            }), r.resolve(u)
                                        })
                                    } catch (e) {
                                        d(() => r.reject(e))
                                    } else d(() => r.reject(n))
                                }
                            }
                        })
                    })
                })
            }
            var e6 = n(78723),
                e2 = n(40457),
                e5 = n(48519),
                e8 = n(40044),
                e3 = n(73971);

            function e4(e) {
                return {
                    call: t => (0, en.R)(e, t),
                    createBlockFilter: () => ei(e),
                    createContractEventFilter: t => (0, ea.A)(e, t),
                    createEventFilter: t => eo(e, t),
                    createPendingTransactionFilter: () => eu(e),
                    estimateContractGas: t => (0, ec.D)(e, t),
                    estimateGas: t => (0, ed.Q)(e, t),
                    getBalance: t => ef(e, t),
                    getBlock: t => (0, ep.Q)(e, t),
                    getBlockNumber: t => (0, em.z)(e, t),
                    getBlockTransactionCount: t => ey(e, t),
                    getBytecode: t => eg(e, t),
                    getChainId: () => (0, ev.L)(e),
                    getContractEvents: t => (0, ew.m)(e, t),
                    getEnsAddress: t => M(e, t),
                    getEnsAvatar: t => V(e, t),
                    getEnsName: t => ee(e, t),
                    getEnsResolver: t => et(e, t),
                    getEnsText: t => Y(e, t),
                    getFeeHistory: t => eP(e, t),
                    estimateFeesPerGas: t => (0, el.X)(e, t),
                    getFilterChanges: t => (0, eC.K)(e, t),
                    getFilterLogs: t => eS(e, t),
                    getGasPrice: () => (0, ek.o)(e),
                    getLogs: t => (0, eI.y)(e, t),
                    getProof: t => eR(e, t),
                    estimateMaxPriorityFeePerGas: t => (0, eh._)(e, t),
                    getStorageAt: t => eF(e, t),
                    getTransaction: t => eT(e, t),
                    getTransactionConfirmations: t => eM(e, t),
                    getTransactionCount: t => (0, eA.K)(e, t),
                    getTransactionReceipt: t => eG(e, t),
                    multicall: t => eB(e, t),
                    prepareTransactionRequest: t => (0, e8.Z)(e, t),
                    readContract: t => (0, T.L)(e, t),
                    sendRawTransaction: t => (0, e3.p)(e, t),
                    simulateContract: t => (0, eU.a)(e, t),
                    verifyMessage: t => e_(e, t),
                    verifyTypedData: t => eH(e, t),
                    uninstallFilter: t => (0, eD.W)(e, t),
                    waitForTransactionReceipt: t => e1(e, t),
                    watchBlocks: t => (function(e, {
                        blockTag: t = "latest",
                        emitMissed: n = !1,
                        emitOnBegin: r = !1,
                        onBlock: i,
                        onError: a,
                        includeTransactions: s,
                        poll: o,
                        pollingInterval: u = e.pollingInterval
                    }) {
                        let c, l, d;
                        let h = void 0 !== o ? o : "webSocket" !== e.transport.type,
                            f = s ? ? !1;
                        return h ? (() => {
                            let s = (0, eY.P)(["watchBlocks", e.uid, n, r, f, u]);
                            return (0, eJ.N7)(s, {
                                onBlock: i,
                                onError: a
                            }, i => (0, eV.$)(async () => {
                                try {
                                    let r = await (0, j.s)(e, ep.Q, "getBlock")({
                                        blockTag: t,
                                        includeTransactions: f
                                    });
                                    if (r.number && c ? .number) {
                                        if (r.number === c.number) return;
                                        if (r.number - c.number > 1 && n)
                                            for (let t = c ? .number + 1 n; t < r.number; t++) {
                                                let n = await (0, j.s)(e, ep.Q, "getBlock")({
                                                    blockNumber: t,
                                                    includeTransactions: f
                                                });
                                                i.onBlock(n, c), c = n
                                            }
                                    }(!c ? .number || "pending" === t && !r ? .number || r.number && r.number > c.number) && (i.onBlock(r, c), c = r)
                                } catch (e) {
                                    i.onError ? .(e)
                                }
                            }, {
                                emitOnBegin: r,
                                interval: u
                            }))
                        })() : (l = !0, d = () => l = !1, (async () => {
                            try {
                                let {
                                    unsubscribe: t
                                } = await e.transport.subscribe({
                                    params: ["newHeads"],
                                    onData(t) {
                                        if (!l) return;
                                        let n = (e.chain ? .formatters ? .block ? .format || e6.Z)(t.result);
                                        i(n, c), c = n
                                    },
                                    onError(e) {
                                        a ? .(e)
                                    }
                                });
                                d = t, l || d()
                            } catch (e) {
                                a ? .(e)
                            }
                        })(), d)
                    })(e, t),
                    watchBlockNumber: t => e0(e, t),
                    watchContractEvent: t => (0, e2.Y)(e, t),
                    watchEvent: t => (function(e, {
                        address: t,
                        args: n,
                        batch: r = !0,
                        event: i,
                        events: a,
                        onError: s,
                        onLogs: o,
                        poll: u,
                        pollingInterval: c = e.pollingInterval,
                        strict: l
                    }) {
                        let d, h;
                        let f = void 0 !== u ? u : "webSocket" !== e.transport.type,
                            p = l ? ? !1;
                        return f ? (() => {
                            let u = (0, eY.P)(["watchEvent", t, n, r, e.uid, i, c]);
                            return (0, eJ.N7)(u, {
                                onLogs: o,
                                onError: s
                            }, s => {
                                let o, u;
                                let l = !1,
                                    d = (0, eV.$)(async () => {
                                        if (!l) {
                                            try {
                                                u = await (0, j.s)(e, eo, "createEventFilter")({
                                                    address: t,
                                                    args: n,
                                                    event: i,
                                                    events: a,
                                                    strict: p
                                                })
                                            } catch {}
                                            l = !0;
                                            return
                                        }
                                        try {
                                            let c;
                                            if (u) c = await (0, j.s)(e, eC.K, "getFilterChanges")({
                                                filter: u
                                            });
                                            else {
                                                let r = await (0, j.s)(e, em.z, "getBlockNumber")({});
                                                c = o && o !== r ? await (0, j.s)(e, eI.y, "getLogs")({
                                                    address: t,
                                                    args: n,
                                                    event: i,
                                                    events: a,
                                                    fromBlock: o + 1 n,
                                                    toBlock: r
                                                }) : [], o = r
                                            }
                                            if (0 === c.length) return;
                                            if (r) s.onLogs(c);
                                            else
                                                for (let e of c) s.onLogs([e])
                                        } catch (e) {
                                            u && e instanceof e5.yR && (l = !1), s.onError ? .(e)
                                        }
                                    }, {
                                        emitOnBegin: !0,
                                        interval: c
                                    });
                                return async () => {
                                    u && await (0, j.s)(e, eD.W, "uninstallFilter")({
                                        filter: u
                                    }), d()
                                }
                            })
                        })() : (d = !0, h = () => d = !1, (async () => {
                            try {
                                let r = a ? ? (i ? [i] : void 0),
                                    u = [];
                                r && (u = [r.flatMap(e => (0, es.O)({
                                    abi: [e],
                                    eventName: e.name,
                                    args: n
                                }))], i && (u = u[0]));
                                let {
                                    unsubscribe: c
                                } = await e.transport.subscribe({
                                    params: ["logs", {
                                        address: t,
                                        topics: u
                                    }],
                                    onData(e) {
                                        if (!d) return;
                                        let t = e.result;
                                        try {
                                            let {
                                                eventName: e,
                                                args: n
                                            } = (0, eO.F)({
                                                abi: r,
                                                data: t.data,
                                                topics: t.topics,
                                                strict: p
                                            }), i = (0, eE.U)(t, {
                                                args: n,
                                                eventName: e
                                            });
                                            o([i])
                                        } catch (i) {
                                            let e, n;
                                            if (i instanceof ex.SM || i instanceof ex.Gy) {
                                                if (l) return;
                                                e = i.abiItem.name, n = i.abiItem.inputs ? .some(e => !("name" in e && e.name))
                                            }
                                            let r = (0, eE.U)(t, {
                                                args: n ? [] : {},
                                                eventName: e
                                            });
                                            o([r])
                                        }
                                    },
                                    onError(e) {
                                        s ? .(e)
                                    }
                                });
                                h = c, d || h()
                            } catch (e) {
                                s ? .(e)
                            }
                        })(), h)
                    })(e, t),
                    watchPendingTransactions: t => (function(e, {
                        batch: t = !0,
                        onError: n,
                        onTransactions: r,
                        poll: i,
                        pollingInterval: a = e.pollingInterval
                    }) {
                        let s, o;
                        return (void 0 !== i ? i : "webSocket" !== e.transport.type) ? (() => {
                            let i = (0, eY.P)(["watchPendingTransactions", e.uid, t, a]);
                            return (0, eJ.N7)(i, {
                                onTransactions: r,
                                onError: n
                            }, n => {
                                let r;
                                let i = (0, eV.$)(async () => {
                                    try {
                                        if (!r) try {
                                            r = await (0, j.s)(e, eu, "createPendingTransactionFilter")({});
                                            return
                                        } catch (e) {
                                            throw i(), e
                                        }
                                        let a = await (0, j.s)(e, eC.K, "getFilterChanges")({
                                            filter: r
                                        });
                                        if (0 === a.length) return;
                                        if (t) n.onTransactions(a);
                                        else
                                            for (let e of a) n.onTransactions([e])
                                    } catch (e) {
                                        n.onError ? .(e)
                                    }
                                }, {
                                    emitOnBegin: !0,
                                    interval: a
                                });
                                return async () => {
                                    r && await (0, j.s)(e, eD.W, "uninstallFilter")({
                                        filter: r
                                    }), i()
                                }
                            })
                        })() : (s = !0, o = () => s = !1, (async () => {
                            try {
                                let {
                                    unsubscribe: t
                                } = await e.transport.subscribe({
                                    params: ["newPendingTransactions"],
                                    onData(e) {
                                        if (!s) return;
                                        let t = e.result;
                                        r([t])
                                    },
                                    onError(e) {
                                        n ? .(e)
                                    }
                                });
                                o = t, s || o()
                            } catch (e) {
                                n ? .(e)
                            }
                        })(), o)
                    })(e, t)
                }
            }

            function e9(e) {
                let {
                    key: t = "public",
                    name: n = "Public Client"
                } = e;
                return (0, p.e)({ ...e,
                    key: t,
                    name: n,
                    type: "publicClient"
                }).extend(e4)
            }
            var e7 = n(35215),
                te = n(21810),
                tt = n(68124);

            function tn(e, t = {}) {
                let {
                    key: n = "fallback",
                    name: r = "Fallback",
                    rank: i = !1,
                    retryCount: a,
                    retryDelay: s
                } = t;
                return ({
                    chain: t,
                    pollingInterval: o = 4e3,
                    timeout: u
                }) => {
                    let c = e,
                        l = () => {},
                        d = (0, tt.q)({
                            key: n,
                            name: r,
                            async request({
                                method: e,
                                params: n
                            }) {
                                let r = async (i = 0) => {
                                    let a = c[i]({
                                        chain: t,
                                        retryCount: 0,
                                        timeout: u
                                    });
                                    try {
                                        let t = await a.request({
                                            method: e,
                                            params: n
                                        });
                                        return l({
                                            method: e,
                                            params: n,
                                            response: t,
                                            transport: a,
                                            status: "success"
                                        }), t
                                    } catch (t) {
                                        if (l({
                                                error: t,
                                                method: e,
                                                params: n,
                                                transport: a,
                                                status: "error"
                                            }), (0, e7.y)(t) || i === c.length - 1) throw t;
                                        return r(i + 1)
                                    }
                                };
                                return r()
                            },
                            retryCount: a,
                            retryDelay: s,
                            type: "fallback"
                        }, {
                            onResponse: e => l = e,
                            transports: c.map(e => e({
                                chain: t,
                                retryCount: 0
                            }))
                        });
                    if (i) {
                        let e = "object" == typeof i ? i : {};
                        ! function({
                            chain: e,
                            interval: t = 4e3,
                            onTransports: n,
                            sampleCount: r = 10,
                            timeout: i = 1e3,
                            transports: a,
                            weights: s = {}
                        }) {
                            let {
                                stability: o = .7,
                                latency: u = .3
                            } = s, c = [], l = async () => {
                                let s = await Promise.all(a.map(async t => {
                                    let n, r;
                                    let a = t({
                                            chain: e,
                                            retryCount: 0,
                                            timeout: i
                                        }),
                                        s = Date.now();
                                    try {
                                        await a.request({
                                            method: "net_listening"
                                        }), r = 1
                                    } catch {
                                        r = 0
                                    } finally {
                                        n = Date.now()
                                    }
                                    return {
                                        latency: n - s,
                                        success: r
                                    }
                                }));
                                c.push(s), c.length > r && c.shift();
                                let d = Math.max(...c.map(e => Math.max(...e.map(({
                                    latency: e
                                }) => e))));
                                n(a.map((e, t) => {
                                    let n = c.map(e => e[t].latency),
                                        r = n.reduce((e, t) => e + t, 0) / n.length,
                                        i = c.map(e => e[t].success),
                                        a = i.reduce((e, t) => e + t, 0) / i.length;
                                    return 0 === a ? [0, t] : [u * (1 - r / d) + o * a, t]
                                }).sort((e, t) => t[0] - e[0]).map(([, e]) => a[e])), await (0, te.D)(t), l()
                            };
                            l()
                        }({
                            chain: t,
                            interval: e.interval ? ? o,
                            onTransports: e => c = e,
                            sampleCount: e.sampleCount,
                            timeout: e.timeout,
                            transports: c,
                            weights: e.weights
                        })
                    }
                    return d
                }
            }
            var tr = n(20722);
            class ti extends C.G {
                constructor() {
                    super("No URL was provided to the Transport. Please provide a valid RPC URL to the Transport.", {
                        docsPath: "/docs/clients/intro"
                    })
                }
            }
            var ta = n(33668);
            let ts = function() {
                if ("undefined" != typeof WebSocket) return WebSocket;
                if (void 0 !== global.WebSocket) return global.WebSocket;
                if (void 0 !== window.WebSocket) return window.WebSocket;
                if (void 0 !== self.WebSocket) return self.WebSocket;
                throw Error("`WebSocket` is not supported in this environment")
            }();

            function to(e, {
                errorInstance: t = Error("timed out"),
                timeout: n,
                signal: r
            }) {
                return new Promise((i, a) => {
                    (async () => {
                        let s;
                        try {
                            let o = new AbortController;
                            n > 0 && (s = setTimeout(() => {
                                r ? o.abort() : a(t)
                            }, n)), i(await e({
                                signal: o ? .signal
                            }))
                        } catch (e) {
                            "AbortError" === e.name && a(t), a(e)
                        } finally {
                            clearTimeout(s)
                        }
                    })()
                })
            }
            let tu = 0;
            async function tc(e, {
                body: t,
                fetchOptions: n = {},
                timeout: r = 1e4
            }) {
                let {
                    headers: i,
                    method: a,
                    signal: s
                } = n;
                try {
                    let o;
                    let u = await to(async ({
                        signal: o
                    }) => await fetch(e, { ...n,
                        body: Array.isArray(t) ? (0, eY.P)(t.map(e => ({
                            jsonrpc: "2.0",
                            id: e.id ? ? tu++,
                            ...e
                        }))) : (0, eY.P)({
                            jsonrpc: "2.0",
                            id: t.id ? ? tu++,
                            ...t
                        }),
                        headers: { ...i,
                            "Content-Type": "application/json"
                        },
                        method: a || "POST",
                        signal: s || (r > 0 ? o : void 0)
                    }), {
                        errorInstance: new tr.W5({
                            body: t,
                            url: e
                        }),
                        timeout: r,
                        signal: !0
                    });
                    if (o = u.headers.get("Content-Type") ? .startsWith("application/json") ? await u.json() : await u.text(), !u.ok) throw new tr.Gg({
                        body: t,
                        details: (0, eY.P)(o.error) || u.statusText,
                        headers: u.headers,
                        status: u.status,
                        url: e
                    });
                    return o
                } catch (n) {
                    if (n instanceof tr.Gg || n instanceof tr.W5) throw n;
                    throw new tr.Gg({
                        body: t,
                        details: n.message,
                        url: e
                    })
                }
            }
            let tl = new Map;
            async function td(e) {
                let t = tl.get(e);
                if (t) return t;
                let {
                    schedule: n
                } = (0, ta.S)({
                    id: e,
                    fn: async () => {
                        let n = new ts(e),
                            r = new Map,
                            i = new Map,
                            a = ({
                                data: e
                            }) => {
                                let t = JSON.parse(e),
                                    n = "eth_subscription" === t.method,
                                    a = n ? t.params.subscription : t.id,
                                    s = n ? i : r,
                                    o = s.get(a);
                                o && o({
                                    data: e
                                }), n || s.delete(a)
                            },
                            s = () => {
                                tl.delete(e), n.removeEventListener("close", s), n.removeEventListener("message", a)
                            };
                        return n.addEventListener("close", s), n.addEventListener("message", a), n.readyState === ts.CONNECTING && await new Promise((e, t) => {
                            n && (n.onopen = e, n.onerror = t)
                        }), t = Object.assign(n, {
                            requests: r,
                            subscriptions: i
                        }), tl.set(e, t), [t]
                    }
                }), [r, [i]] = await n();
                return i
            }
            let th = {
                http: tc,
                webSocket: function(e, {
                    body: t,
                    onResponse: n
                }) {
                    if (e.readyState === e.CLOSED || e.readyState === e.CLOSING) throw new tr.c9({
                        body: t,
                        url: e.url,
                        details: "Socket is closed."
                    });
                    let r = tu++,
                        i = ({
                            data: a
                        }) => {
                            let s = JSON.parse(a);
                            ("number" != typeof s.id || r === s.id) && (n ? .(s), "eth_subscribe" === t.method && "string" == typeof s.result && e.subscriptions.set(s.result, i), "eth_unsubscribe" === t.method && e.subscriptions.delete(t.params ? .[0]))
                        };
                    return e.requests.set(r, i), e.send(JSON.stringify({
                        jsonrpc: "2.0",
                        ...t,
                        id: r
                    })), e
                },
                webSocketAsync: async function(e, {
                    body: t,
                    timeout: n = 1e4
                }) {
                    return to(() => new Promise(n => th.webSocket(e, {
                        body: t,
                        onResponse: n
                    })), {
                        errorInstance: new tr.W5({
                            body: t,
                            url: e.url
                        }),
                        timeout: n
                    })
                }
            };
            var tf = n(38026),
                tp = n(36238);
            let tm = e => (t, n, r) => {
                    let i = r.subscribe;
                    return r.subscribe = (e, t, n) => {
                        let a = e;
                        if (t) {
                            let i = (null == n ? void 0 : n.equalityFn) || Object.is,
                                s = e(r.getState());
                            a = n => {
                                let r = e(n);
                                if (!i(s, r)) {
                                    let e = s;
                                    t(s = r, e)
                                }
                            }, (null == n ? void 0 : n.fireImmediately) && t(s, s)
                        }
                        return i(a)
                    }, e(t, n, r)
                },
                tb = e => t => {
                    try {
                        let n = e(t);
                        if (n instanceof Promise) return n;
                        return {
                            then: e => tb(e)(n),
                            catch (e) {
                                return this
                            }
                        }
                    } catch (e) {
                        return {
                            then(e) {
                                return this
                            },
                            catch: t => tb(t)(e)
                        }
                    }
                },
                ty = (e, t) => (n, r, i) => {
                    let a, s, o = {
                            getStorage: () => localStorage,
                            serialize: JSON.stringify,
                            deserialize: JSON.parse,
                            partialize: e => e,
                            version: 0,
                            merge: (e, t) => ({ ...t,
                                ...e
                            }),
                            ...t
                        },
                        u = !1,
                        c = new Set,
                        l = new Set;
                    try {
                        a = o.getStorage()
                    } catch (e) {}
                    if (!a) return e((...e) => {
                        console.warn(`[zustand persist middleware] Unable to update item '${o.name}', the given storage is currently unavailable.`), n(...e)
                    }, r, i);
                    let d = tb(o.serialize),
                        h = () => {
                            let e;
                            let t = d({
                                state: o.partialize({ ...r()
                                }),
                                version: o.version
                            }).then(e => a.setItem(o.name, e)).catch(t => {
                                e = t
                            });
                            if (e) throw e;
                            return t
                        },
                        f = i.setState;
                    i.setState = (e, t) => {
                        f(e, t), h()
                    };
                    let p = e((...e) => {
                            n(...e), h()
                        }, r, i),
                        m = () => {
                            var e;
                            if (!a) return;
                            u = !1, c.forEach(e => e(r()));
                            let t = (null == (e = o.onRehydrateStorage) ? void 0 : e.call(o, r())) || void 0;
                            return tb(a.getItem.bind(a))(o.name).then(e => {
                                if (e) return o.deserialize(e)
                            }).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === o.version) return e.state;
                                    if (o.migrate) return o.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(s = o.merge(e, null != (t = r()) ? t : p), !0), h()
                            }).then(() => {
                                null == t || t(s, void 0), u = !0, l.forEach(e => e(s))
                            }).catch(e => {
                                null == t || t(void 0, e)
                            })
                        };
                    return i.persist = {
                        setOptions: e => {
                            o = { ...o,
                                ...e
                            }, e.getStorage && (a = e.getStorage())
                        },
                        clearStorage: () => {
                            null == a || a.removeItem(o.name)
                        },
                        getOptions: () => o,
                        rehydrate: () => m(),
                        hasHydrated: () => u,
                        onHydrate: e => (c.add(e), () => {
                            c.delete(e)
                        }),
                        onFinishHydration: e => (l.add(e), () => {
                            l.delete(e)
                        })
                    }, m(), s || p
                },
                tg = (e, t) => (n, r, i) => {
                    let a, s = {
                            storage: function(e, t) {
                                let n;
                                try {
                                    n = e()
                                } catch (e) {
                                    return
                                }
                                return {
                                    getItem: e => {
                                        var r;
                                        let i = e => null === e ? null : JSON.parse(e, null == t ? void 0 : t.reviver),
                                            a = null != (r = n.getItem(e)) ? r : null;
                                        return a instanceof Promise ? a.then(i) : i(a)
                                    },
                                    setItem: (e, r) => n.setItem(e, JSON.stringify(r, null == t ? void 0 : t.replacer)),
                                    removeItem: e => n.removeItem(e)
                                }
                            }(() => localStorage),
                            partialize: e => e,
                            version: 0,
                            merge: (e, t) => ({ ...t,
                                ...e
                            }),
                            ...t
                        },
                        o = !1,
                        u = new Set,
                        c = new Set,
                        l = s.storage;
                    if (!l) return e((...e) => {
                        console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`), n(...e)
                    }, r, i);
                    let d = () => {
                            let e = s.partialize({ ...r()
                            });
                            return l.setItem(s.name, {
                                state: e,
                                version: s.version
                            })
                        },
                        h = i.setState;
                    i.setState = (e, t) => {
                        h(e, t), d()
                    };
                    let f = e((...e) => {
                            n(...e), d()
                        }, r, i),
                        p = () => {
                            var e, t;
                            if (!l) return;
                            o = !1, u.forEach(e => {
                                var t;
                                return e(null != (t = r()) ? t : f)
                            });
                            let i = (null == (t = s.onRehydrateStorage) ? void 0 : t.call(s, null != (e = r()) ? e : f)) || void 0;
                            return tb(l.getItem.bind(l))(s.name).then(e => {
                                if (e) {
                                    if ("number" != typeof e.version || e.version === s.version) return e.state;
                                    if (s.migrate) return s.migrate(e.state, e.version);
                                    console.error("State loaded from storage couldn't be migrated since no migrate function was provided")
                                }
                            }).then(e => {
                                var t;
                                return n(a = s.merge(e, null != (t = r()) ? t : f), !0), d()
                            }).then(() => {
                                null == i || i(a, void 0), a = r(), o = !0, c.forEach(e => e(a))
                            }).catch(e => {
                                null == i || i(void 0, e)
                            })
                        };
                    return i.persist = {
                        setOptions: e => {
                            s = { ...s,
                                ...e
                            }, e.storage && (l = e.storage)
                        },
                        clearStorage: () => {
                            null == l || l.removeItem(s.name)
                        },
                        getOptions: () => s,
                        rehydrate: () => p(),
                        hasHydrated: () => o,
                        onHydrate: e => (u.add(e), () => {
                            u.delete(e)
                        }),
                        onFinishHydration: e => (c.add(e), () => {
                            c.delete(e)
                        })
                    }, s.skipHydration || p(), a || f
                },
                tv = (e, t) => "getStorage" in t || "serialize" in t || "deserialize" in t ? (console.warn("[DEPRECATED] `getStorage`, `serialize` and `deserialize` options are deprecated. Use `storage` option instead."), ty(e, t)) : tg(e, t);
            var tw = n(23979),
                tP = n(16775);

            function tC(e, t) {
                if (Object.is(e, t)) return !0;
                if ("object" != typeof e || null === e || "object" != typeof t || null === t) return !1;
                if (e instanceof Map && t instanceof Map) {
                    if (e.size !== t.size) return !1;
                    for (let [n, r] of e)
                        if (!Object.is(r, t.get(n))) return !1;
                    return !0
                }
                if (e instanceof Set && t instanceof Set) {
                    if (e.size !== t.size) return !1;
                    for (let n of e)
                        if (!t.has(n)) return !1;
                    return !0
                }
                let n = Object.keys(e);
                if (n.length !== Object.keys(t).length) return !1;
                for (let r = 0; r < n.length; r++)
                    if (!Object.prototype.hasOwnProperty.call(t, n[r]) || !Object.is(e[n[r]], t[n[r]])) return !1;
                return !0
            }
            var tx = n(39803);

            function tO(e, t, {
                batch: n = {
                    multicall: {
                        wait: 32
                    }
                },
                pollingInterval: r = 4e3,
                rank: i,
                retryCount: a,
                retryDelay: s,
                stallTimeout: o
            } = {}) {
                if (!e.length) throw Error("must have at least one chain");
                let u = [],
                    c = {},
                    l = {};
                for (let n of e) {
                    let e = !1;
                    for (let r of t) {
                        let t = r(n);
                        t && (e = !0, u.some(({
                            id: e
                        }) => e === n.id) || (u = [...u, t.chain]), c[n.id] = [...c[n.id] || [], ...t.rpcUrls.http], t.rpcUrls.webSocket && (l[n.id] = [...l[n.id] || [], ...t.rpcUrls.webSocket]))
                    }
                    if (!e) throw Error(`Could not find valid provider configuration for chain "${n.name}".

You may need to add \`jsonRpcProvider\` to \`configureChains\` with the chain's RPC URLs.
Read more: https://wagmi.sh/core/providers/jsonRpc`)
                }
                return {
                    chains: u,
                    publicClient: ({
                        chainId: t
                    }) => {
                        let l = u.find(e => e.id === t) ? ? e[0],
                            d = c[l.id];
                        if (!d || !d[0]) throw Error(`No providers configured for chain "${l.id}"`);
                        return Object.assign(e9({
                            batch: n,
                            chain: l,
                            transport: tn(d.map(e => (function(e, t = {}) {
                                let {
                                    batch: n,
                                    fetchOptions: r,
                                    key: i = "http",
                                    name: a = "HTTP JSON-RPC",
                                    retryDelay: s
                                } = t;
                                return ({
                                    chain: o,
                                    retryCount: u,
                                    timeout: c
                                }) => {
                                    let {
                                        batchSize: l = 1e3,
                                        wait: d = 0
                                    } = "object" == typeof n ? n : {}, h = t.retryCount ? ? u, f = c ? ? t.timeout ? ? 1e4, p = e || o ? .rpcUrls.default.http[0];
                                    if (!p) throw new ti;
                                    return (0, tt.q)({
                                        key: i,
                                        name: a,
                                        async request({
                                            method: t,
                                            params: i
                                        }) {
                                            let a = {
                                                    method: t,
                                                    params: i
                                                },
                                                {
                                                    schedule: s
                                                } = (0, ta.S)({
                                                    id: `${e}`,
                                                    wait: d,
                                                    shouldSplitBatch: e => e.length > l,
                                                    fn: e => th.http(p, {
                                                        body: e,
                                                        fetchOptions: r,
                                                        timeout: f
                                                    }),
                                                    sort: (e, t) => e.id - t.id
                                                }),
                                                o = async e => n ? s(e) : [await th.http(p, {
                                                    body: e,
                                                    fetchOptions: r,
                                                    timeout: f
                                                })],
                                                [{
                                                    error: u,
                                                    result: c
                                                }] = await o(a);
                                            if (u) throw new tr.bs({
                                                body: a,
                                                error: u,
                                                url: p
                                            });
                                            return c
                                        },
                                        retryCount: h,
                                        retryDelay: s,
                                        timeout: f,
                                        type: "http"
                                    }, {
                                        fetchOptions: r,
                                        url: e
                                    })
                                }
                            })(e, {
                                timeout: o
                            })), {
                                rank: i,
                                retryCount: a,
                                retryDelay: s
                            }),
                            pollingInterval: r
                        }), {
                            chains: u
                        })
                    },
                    webSocketPublicClient: ({
                        chainId: t
                    }) => {
                        let c = u.find(e => e.id === t) ? ? e[0],
                            d = l[c.id];
                        if (d && d[0]) return Object.assign(e9({
                            batch: n,
                            chain: c,
                            transport: tn(d.map(e => (function(e, t = {}) {
                                let {
                                    key: n = "webSocket",
                                    name: r = "WebSocket JSON-RPC",
                                    retryDelay: i
                                } = t;
                                return ({
                                    chain: a,
                                    retryCount: s,
                                    timeout: o
                                }) => {
                                    let u = t.retryCount ? ? s,
                                        c = o ? ? t.timeout ? ? 1e4,
                                        l = e || a ? .rpcUrls.default.webSocket ? .[0];
                                    if (!l) throw new ti;
                                    return (0, tt.q)({
                                        key: n,
                                        name: r,
                                        async request({
                                            method: e,
                                            params: t
                                        }) {
                                            let n = {
                                                    method: e,
                                                    params: t
                                                },
                                                r = await td(l),
                                                {
                                                    error: i,
                                                    result: a
                                                } = await th.webSocketAsync(r, {
                                                    body: n,
                                                    timeout: c
                                                });
                                            if (i) throw new tr.bs({
                                                body: n,
                                                error: i,
                                                url: l
                                            });
                                            return a
                                        },
                                        retryCount: u,
                                        retryDelay: i,
                                        timeout: c,
                                        type: "webSocket"
                                    }, {
                                        getSocket: () => td(l),
                                        async subscribe({
                                            params: e,
                                            onData: t,
                                            onError: n
                                        }) {
                                            let r = await td(l),
                                                {
                                                    result: i
                                                } = await new Promise((i, a) => th.webSocket(r, {
                                                    body: {
                                                        method: "eth_subscribe",
                                                        params: e
                                                    },
                                                    onResponse(e) {
                                                        if (e.error) {
                                                            a(e.error), n ? .(e.error);
                                                            return
                                                        }
                                                        if ("number" == typeof e.id) {
                                                            i(e);
                                                            return
                                                        }
                                                        "eth_subscription" === e.method && t(e.params)
                                                    }
                                                }));
                                            return {
                                                subscriptionId: i,
                                                unsubscribe: async () => new Promise(e => th.webSocket(r, {
                                                    body: {
                                                        method: "eth_unsubscribe",
                                                        params: [i]
                                                    },
                                                    onResponse: e
                                                }))
                                            }
                                        }
                                    })
                                }
                            })(e, {
                                timeout: o
                            })), {
                                rank: i,
                                retryCount: a,
                                retryDelay: s
                            }),
                            pollingInterval: r
                        }), {
                            chains: u
                        })
                    }
                }
            }
            var tE = class extends Error {
                    constructor({
                        activeChain: e,
                        targetChain: t
                    }) {
                        super(`Chain mismatch: Expected "${t}", received "${e}".`), this.name = "ChainMismatchError"
                    }
                },
                tS = class extends Error {
                    constructor({
                        chainId: e,
                        connectorId: t
                    }) {
                        super(`Chain "${e}" not configured${t?` for connector "${t}"`:""}.`), this.name = "ChainNotConfigured"
                    }
                },
                tk = class extends Error {
                    constructor() {
                        super(...arguments), this.name = "ConnectorAlreadyConnectedError", this.message = "Connector already connected"
                    }
                },
                tI = class extends Error {
                    constructor() {
                        super(...arguments), this.name = "ConfigChainsNotFound", this.message = "No chains were found on the wagmi config. Some functions that require a chain may not work."
                    }
                },
                tR = class extends Error {
                    constructor({
                        connector: e
                    }) {
                        super(`"${e.name}" does not support programmatic chain switching.`), this.name = "SwitchChainNotSupportedError"
                    }
                },
                tF = (e, {
                    find: t,
                    replace: n
                }) => e && t(e) ? n(e) : "object" != typeof e ? e : Array.isArray(e) ? e.map(e => tF(e, {
                    find: t,
                    replace: n
                })) : e instanceof Object ? Object.entries(e).reduce((e, [r, i]) => ({ ...e,
                    [r]: tF(i, {
                        find: t,
                        replace: n
                    })
                }), {}) : e;

            function t$(e) {
                return tF(JSON.parse(e), {
                    find: e => "string" == typeof e && e.startsWith("#bigint."),
                    replace: e => BigInt(e.replace("#bigint.", ""))
                })
            }

            function tj(e) {
                return {
                    accessList: e.accessList,
                    account: e.account,
                    blockNumber: e.blockNumber,
                    blockTag: e.blockTag,
                    data: e.data,
                    gas: e.gas,
                    gasPrice: e.gasPrice,
                    maxFeePerGas: e.maxFeePerGas,
                    maxPriorityFeePerGas: e.maxPriorityFeePerGas,
                    nonce: e.nonce,
                    to: e.to,
                    value: e.value
                }
            }

            function tT(e) {
                return {
                    accessList: e.accessList,
                    account: e.account,
                    data: e.data,
                    gas: e.gas,
                    gasPrice: e.gasPrice,
                    maxFeePerGas: e.maxFeePerGas,
                    maxPriorityFeePerGas: e.maxPriorityFeePerGas,
                    nonce: e.nonce,
                    to: e.to,
                    value: e.value
                }
            }

            function tM(e) {
                return "number" == typeof e ? e : "wei" === e ? 0 : Math.abs(tp.Bd[e])
            }

            function tA(e, t) {
                return e.slice(0, t).join(".") || "."
            }

            function tq(e, t) {
                let {
                    length: n
                } = e;
                for (let r = 0; r < n; ++r)
                    if (e[r] === t) return r + 1;
                return 0
            }

            function tG(e, t, n, r) {
                return JSON.stringify(e, function(e, t) {
                    let n = "function" == typeof e,
                        r = "function" == typeof t,
                        i = [],
                        a = [];
                    return function(s, o) {
                        if ("object" == typeof o) {
                            if (i.length) {
                                let e = tq(i, this);
                                0 === e ? i[i.length] = this : (i.splice(e), a.splice(e)), a[a.length] = s;
                                let n = tq(i, o);
                                if (0 !== n) return r ? t.call(this, s, o, tA(a, n)) : `[ref=${tA(a,n)}]`
                            } else i[0] = o, a[0] = s
                        }
                        return n ? e.call(this, s, o) : o
                    }
                }((e, n) => {
                    let r = "bigint" == typeof n ? `#bigint.${n.toString()}` : n;
                    return t ? .(e, r) || r
                }, r), n ? ? void 0)
            }
            var tN = {
                getItem: e => "",
                setItem: (e, t) => null,
                removeItem: e => null
            };

            function tB({
                deserialize: e = t$,
                key: t = "wagmi",
                serialize: n = tG,
                storage: r
            }) {
                return { ...r,
                    getItem: (n, i = null) => {
                        let a = r.getItem(`${t}.${n}`);
                        try {
                            return a ? e(a) : i
                        } catch (e) {
                            return console.warn(e), i
                        }
                    },
                    setItem: (e, i) => {
                        if (null === i) r.removeItem(`${t}.${e}`);
                        else try {
                            r.setItem(`${t}.${e}`, n(i))
                        } catch (e) {
                            console.error(e)
                        }
                    },
                    removeItem: e => r.removeItem(`${t}.${e}`)
                }
            }
            var tU = "store",
                tD = class {
                    constructor({
                        autoConnect: e = !1,
                        connectors: t = [new u._],
                        publicClient: n,
                        storage: o = tB({
                            storage: "undefined" != typeof window ? window.localStorage : tN
                        }),
                        logger: c = {
                            warn: console.warn
                        },
                        webSocketPublicClient: l
                    }) {
                        let p;
                        d(this, a), this.publicClients = new Map, this.webSocketPublicClients = new Map, d(this, r, void 0), d(this, i, void 0), this.args = {
                            autoConnect: e,
                            connectors: t,
                            logger: c,
                            publicClient: n,
                            storage: o,
                            webSocketPublicClient: l
                        };
                        let m = "disconnected";
                        if (e) try {
                            let e = o.getItem(tU),
                                t = e ? .state ? .data;
                            m = t ? .account ? "reconnecting" : "connecting", p = t ? .chain ? .id
                        } catch (e) {}
                        let b = "function" == typeof t ? t() : t;
                        b.forEach(e => e.setStorage(o)), this.store = (0, tw.M)(tm(tv(() => ({
                            connectors: b,
                            publicClient: this.getPublicClient({
                                chainId: p
                            }),
                            status: m,
                            webSocketPublicClient: this.getWebSocketPublicClient({
                                chainId: p
                            })
                        }), {
                            name: tU,
                            storage: o,
                            partialize: t => ({ ...e && {
                                    data: {
                                        account: t ? .data ? .account,
                                        chain: t ? .data ? .chain
                                    }
                                },
                                chains: t ? .chains
                            }),
                            version: 2
                        }))), this.storage = o, h(this, i, o ? .getItem("wallet")), f(this, a, s).call(this), e && "undefined" != typeof window && setTimeout(async () => await this.autoConnect(), 0)
                    }
                    get chains() {
                        return this.store.getState().chains
                    }
                    get connectors() {
                        return this.store.getState().connectors
                    }
                    get connector() {
                        return this.store.getState().connector
                    }
                    get data() {
                        return this.store.getState().data
                    }
                    get error() {
                        return this.store.getState().error
                    }
                    get lastUsedChainId() {
                        return this.data ? .chain ? .id
                    }
                    get publicClient() {
                        return this.store.getState().publicClient
                    }
                    get status() {
                        return this.store.getState().status
                    }
                    get subscribe() {
                        return this.store.subscribe
                    }
                    get webSocketPublicClient() {
                        return this.store.getState().webSocketPublicClient
                    }
                    setState(e) {
                        let t = "function" == typeof e ? e(this.store.getState()) : e;
                        this.store.setState(t, !0)
                    }
                    clearState() {
                        this.setState(e => ({ ...e,
                            chains: void 0,
                            connector: void 0,
                            data: void 0,
                            error: void 0,
                            status: "disconnected"
                        }))
                    }
                    async destroy() {
                        this.connector && await this.connector.disconnect ? .(), h(this, r, !1), this.clearState(), this.store.destroy()
                    }
                    async autoConnect() {
                        if (l(this, r)) return;
                        h(this, r, !0), this.setState(e => ({ ...e,
                            status: e.data ? .account ? "reconnecting" : "connecting"
                        }));
                        let e = l(this, i) ? [...this.connectors].sort(e => e.id === l(this, i) ? -1 : 1) : this.connectors,
                            t = !1;
                        for (let n of e) {
                            if (!n.ready || !n.isAuthorized || !await n.isAuthorized()) continue;
                            let e = await n.connect();
                            this.setState(t => ({ ...t,
                                connector: n,
                                chains: n ? .chains,
                                data: e,
                                status: "connected"
                            })), t = !0;
                            break
                        }
                        return t || this.setState(e => ({ ...e,
                            data: void 0,
                            status: "disconnected"
                        })), h(this, r, !1), this.data
                    }
                    setConnectors(e) {
                        this.args = { ...this.args,
                            connectors: e
                        };
                        let t = "function" == typeof e ? e() : e;
                        t.forEach(e => e.setStorage(this.args.storage)), this.setState(e => ({ ...e,
                            connectors: t
                        }))
                    }
                    getPublicClient({
                        chainId: e
                    } = {}) {
                        let t = this.publicClients.get(-1);
                        if (t && t ? .chain.id === e || (t = this.publicClients.get(e ? ? -1))) return t;
                        let {
                            publicClient: n
                        } = this.args;
                        return t = "function" == typeof n ? n({
                            chainId: e
                        }) : n, this.publicClients.set(e ? ? -1, t), t
                    }
                    setPublicClient(e) {
                        let t = this.data ? .chain ? .id;
                        this.args = { ...this.args,
                            publicClient: e
                        }, this.publicClients.clear(), this.setState(e => ({ ...e,
                            publicClient: this.getPublicClient({
                                chainId: t
                            })
                        }))
                    }
                    getWebSocketPublicClient({
                        chainId: e
                    } = {}) {
                        let t = this.webSocketPublicClients.get(-1);
                        if (t && t ? .chain.id === e || (t = this.webSocketPublicClients.get(e ? ? -1))) return t;
                        let {
                            webSocketPublicClient: n
                        } = this.args;
                        return (t = "function" == typeof n ? n({
                            chainId: e
                        }) : n) && this.webSocketPublicClients.set(e ? ? -1, t), t
                    }
                    setWebSocketPublicClient(e) {
                        let t = this.data ? .chain ? .id;
                        this.args = { ...this.args,
                            webSocketPublicClient: e
                        }, this.webSocketPublicClients.clear(), this.setState(e => ({ ...e,
                            webSocketPublicClient: this.getWebSocketPublicClient({
                                chainId: t
                            })
                        }))
                    }
                    setLastUsedConnector(e = null) {
                        this.storage ? .setItem("wallet", e)
                    }
                };

            function tL(e) {
                let t = new tD(e);
                return o = t, t
            }

            function tz() {
                if (!o) throw Error("No wagmi config found. Ensure you have set up a config: https://wagmi.sh/react/config");
                return o
            }
            async function t_({
                chainId: e,
                connector: t
            }) {
                let n = tz(),
                    r = n.connector;
                if (r && t.id === r.id) throw new tk;
                try {
                    n.setState(e => ({ ...e,
                        status: "connecting"
                    }));
                    let r = await t.connect({
                        chainId: e
                    });
                    return n.setLastUsedConnector(t.id), n.setState(e => ({ ...e,
                        connector: t,
                        chains: t ? .chains,
                        data: r,
                        status: "connected"
                    })), n.storage.setItem("connected", !0), { ...r,
                        connector: t
                    }
                } catch (e) {
                    throw n.setState(e => ({ ...e,
                        status: e.connector ? "connected" : "disconnected"
                    })), e
                }
            }
            async function tW() {
                let e = tz();
                e.connector && await e.connector.disconnect(), e.clearState(), e.storage.removeItem("connected")
            }
            r = new WeakMap, i = new WeakMap, a = new WeakSet, s = function() {
                let e = e => {
                        this.setState(t => ({ ...t,
                            data: { ...t.data,
                                ...e
                            }
                        }))
                    },
                    t = () => {
                        this.clearState()
                    },
                    n = e => {
                        this.setState(t => ({ ...t,
                            error: e
                        }))
                    };
                this.store.subscribe(({
                    connector: e
                }) => e, (r, i) => {
                    i ? .off ? .("change", e), i ? .off ? .("disconnect", t), i ? .off ? .("error", n), r && (r.on ? .("change", e), r.on ? .("disconnect", t), r.on ? .("error", n))
                });
                let {
                    publicClient: r,
                    webSocketPublicClient: i
                } = this.args;
                ("function" == typeof r || "function" == typeof i) && this.store.subscribe(({
                    data: e
                }) => e ? .chain ? .id, e => {
                    this.setState(t => ({ ...t,
                        publicClient: this.getPublicClient({
                            chainId: e
                        }),
                        webSocketPublicClient: this.getWebSocketPublicClient({
                            chainId: e
                        })
                    }))
                })
            };
            var tQ = [{
                    type: "event",
                    name: "Approval",
                    inputs: [{
                        indexed: !0,
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }]
                }, {
                    type: "event",
                    name: "Transfer",
                    inputs: [{
                        indexed: !0,
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "allowance",
                    stateMutability: "view",
                    inputs: [{
                        name: "owner",
                        type: "address"
                    }, {
                        name: "spender",
                        type: "address"
                    }],
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "approve",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "spender",
                        type: "address"
                    }, {
                        name: "amount",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "bool"
                    }]
                }, {
                    type: "function",
                    name: "balanceOf",
                    stateMutability: "view",
                    inputs: [{
                        name: "account",
                        type: "address"
                    }],
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "decimals",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        name: "",
                        type: "uint8"
                    }]
                }, {
                    type: "function",
                    name: "name",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        name: "",
                        type: "string"
                    }]
                }, {
                    type: "function",
                    name: "symbol",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        name: "",
                        type: "string"
                    }]
                }, {
                    type: "function",
                    name: "totalSupply",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "transfer",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "recipient",
                        type: "address"
                    }, {
                        name: "amount",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "bool"
                    }]
                }, {
                    type: "function",
                    name: "transferFrom",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "sender",
                        type: "address"
                    }, {
                        name: "recipient",
                        type: "address"
                    }, {
                        name: "amount",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "bool"
                    }]
                }],
                tK = [{
                    type: "event",
                    name: "Approval",
                    inputs: [{
                        indexed: !0,
                        name: "owner",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "spender",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }]
                }, {
                    type: "event",
                    name: "Transfer",
                    inputs: [{
                        indexed: !0,
                        name: "from",
                        type: "address"
                    }, {
                        indexed: !0,
                        name: "to",
                        type: "address"
                    }, {
                        indexed: !1,
                        name: "value",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "allowance",
                    stateMutability: "view",
                    inputs: [{
                        name: "owner",
                        type: "address"
                    }, {
                        name: "spender",
                        type: "address"
                    }],
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "approve",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "spender",
                        type: "address"
                    }, {
                        name: "amount",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "bool"
                    }]
                }, {
                    type: "function",
                    name: "balanceOf",
                    stateMutability: "view",
                    inputs: [{
                        name: "account",
                        type: "address"
                    }],
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "decimals",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        name: "",
                        type: "uint8"
                    }]
                }, {
                    type: "function",
                    name: "name",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        name: "",
                        type: "bytes32"
                    }]
                }, {
                    type: "function",
                    name: "symbol",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        name: "",
                        type: "bytes32"
                    }]
                }, {
                    type: "function",
                    name: "totalSupply",
                    stateMutability: "view",
                    inputs: [],
                    outputs: [{
                        name: "",
                        type: "uint256"
                    }]
                }, {
                    type: "function",
                    name: "transfer",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "recipient",
                        type: "address"
                    }, {
                        name: "amount",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "bool"
                    }]
                }, {
                    type: "function",
                    name: "transferFrom",
                    stateMutability: "nonpayable",
                    inputs: [{
                        name: "sender",
                        type: "address"
                    }, {
                        name: "recipient",
                        type: "address"
                    }, {
                        name: "amount",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "bool"
                    }]
                }];

            function tH({
                chainId: e
            } = {}) {
                let t = tz();
                return e && t.getPublicClient({
                    chainId: e
                }) || t.publicClient
            }
            async function tZ({
                chainId: e
            } = {}) {
                let t = tz();
                return await t.connector ? .getWalletClient ? .({
                    chainId: e
                }) || null
            }

            function tJ({
                chainId: e
            } = {}) {
                let t = tz();
                return e && t.getWebSocketPublicClient({
                    chainId: e
                }) || t.webSocketPublicClient
            }

            function tX(e, t) {
                let n = tz(),
                    r = async () => t(tH(e));
                return n.subscribe(({
                    publicClient: e
                }) => e, r)
            }

            function tY({
                chainId: e
            }, t) {
                let n = tz(),
                    r = async ({
                        chainId: n
                    }) => {
                        if (e && n && e !== n) return;
                        let r = await tZ({
                            chainId: e
                        });
                        return tz().connector ? t(r) : t(null)
                    };
                return n.subscribe(({
                    data: e,
                    connector: t
                }) => ({
                    account: e ? .account,
                    chainId: e ? .chain ? .id,
                    connector: t
                }), r, {
                    equalityFn: tC
                })
            }

            function tV(e, t) {
                let n = tz(),
                    r = async () => t(tJ(e));
                return n.subscribe(({
                    webSocketPublicClient: e
                }) => e, r)
            }
            async function t0({
                abi: e,
                address: t,
                args: n,
                chainId: r,
                dataSuffix: i,
                functionName: a,
                walletClient: s,
                ...o
            }) {
                let u = tH({
                        chainId: r
                    }),
                    c = s ? ? await tZ({
                        chainId: r
                    });
                if (!c) throw new tf.N;
                r && ns({
                    chainId: r
                });
                let {
                    account: l,
                    accessList: d,
                    blockNumber: h,
                    blockTag: f,
                    gas: p,
                    gasPrice: m,
                    maxFeePerGas: b,
                    maxPriorityFeePerGas: y,
                    nonce: g,
                    value: v
                } = tj(o), {
                    result: w,
                    request: P
                } = await u.simulateContract({
                    abi: e,
                    address: t,
                    functionName: a,
                    args: n,
                    account: l || c.account,
                    accessList: d,
                    blockNumber: h,
                    blockTag: f,
                    dataSuffix: i,
                    gas: p,
                    gasPrice: m,
                    maxFeePerGas: b,
                    maxPriorityFeePerGas: y,
                    nonce: g,
                    value: v
                }), C = e.filter(e => "name" in e && e.name === a);
                return {
                    mode: "prepared",
                    request: { ...P,
                        abi: C,
                        chainId: r
                    },
                    result: w
                }
            }
            async function t1({
                chainId: e,
                contracts: t,
                blockNumber: n,
                blockTag: r,
                ...i
            }) {
                let a = tH({
                    chainId: e
                });
                if (!a.chains) throw new tI;
                if (e && a.chain.id !== e) throw new tS({
                    chainId: e
                });
                return a.multicall({
                    allowFailure: i.allowFailure ? ? !0,
                    blockNumber: n,
                    blockTag: r,
                    contracts: t
                })
            }
            async function t6({
                address: e,
                account: t,
                chainId: n,
                abi: r,
                args: i,
                functionName: a,
                blockNumber: s,
                blockTag: o
            }) {
                return tH({
                    chainId: n
                }).readContract({
                    abi: r,
                    address: e,
                    account: t,
                    functionName: a,
                    args: i,
                    blockNumber: s,
                    blockTag: o
                })
            }
            async function t2({
                contracts: e,
                blockNumber: t,
                blockTag: n,
                ...r
            }) {
                let {
                    allowFailure: i = !0
                } = r;
                try {
                    let r = tH(),
                        a = e.reduce((e, t, n) => {
                            let i = t.chainId ? ? r.chain.id;
                            return { ...e,
                                [i]: [...e[i] || [], {
                                    contract: t,
                                    index: n
                                }]
                            }
                        }, {}),
                        s = (await Promise.all(Object.entries(a).map(([e, r]) => t1({
                            allowFailure: i,
                            chainId: parseInt(e),
                            contracts: r.map(({
                                contract: e
                            }) => e),
                            blockNumber: t,
                            blockTag: n
                        })))).flat(),
                        o = Object.values(a).flatMap(e => e.map(({
                            index: e
                        }) => e));
                    return s.reduce((e, t, n) => (e && (e[o[n]] = t), e), [])
                } catch (a) {
                    if (a instanceof x.uq) throw a;
                    let r = () => e.map(e => t6({ ...e,
                        blockNumber: t,
                        blockTag: n
                    }));
                    if (i) return (await Promise.allSettled(r())).map(e => "fulfilled" === e.status ? {
                        result: e.value,
                        status: "success"
                    } : {
                        error: e.reason,
                        result: void 0,
                        status: "failure"
                    });
                    return await Promise.all(r())
                }
            }
            async function t5(e) {
                let t;
                let n = await tZ({
                    chainId: e.chainId
                });
                if (!n) throw new tf.N;
                if (e.chainId && ns({
                        chainId: e.chainId
                    }), "prepared" === e.mode) t = e.request;
                else {
                    let {
                        chainId: n,
                        mode: r,
                        ...i
                    } = e;
                    t = (await t0(i)).request
                }
                return {
                    hash: await n.writeContract({ ...t,
                        chain: e.chainId ? {
                            id: e.chainId
                        } : null
                    })
                }
            }
            async function t8({
                address: e,
                chainId: t,
                formatUnits: n,
                token: r
            }) {
                let i = tz(),
                    a = tH({
                        chainId: t
                    });
                if (r) {
                    let i = async ({
                        abi: i
                    }) => {
                        let a = {
                                abi: i,
                                address: r,
                                chainId: t
                            },
                            [s, o, u] = await t2({
                                allowFailure: !1,
                                contracts: [{ ...a,
                                    functionName: "balanceOf",
                                    args: [e]
                                }, { ...a,
                                    functionName: "decimals"
                                }, { ...a,
                                    functionName: "symbol"
                                }]
                            });
                        return {
                            decimals: o,
                            formatted: (0, tP.b)(s ? ? "0", tM(n ? ? o)),
                            symbol: u,
                            value: s
                        }
                    };
                    try {
                        return await i({
                            abi: tQ
                        })
                    } catch (e) {
                        if (e instanceof x.uq) {
                            let {
                                symbol: e,
                                ...t
                            } = await i({
                                abi: tK
                            });
                            return {
                                symbol: (0, eb.rR)((0, v.f)(e, {
                                    dir: "right"
                                })),
                                ...t
                            }
                        }
                        throw e
                    }
                }
                let s = [...i.publicClient.chains || [], ...i.chains ? ? []],
                    o = await a.getBalance({
                        address: e
                    }),
                    u = s.find(e => e.id === a.chain.id);
                return {
                    decimals: u ? .nativeCurrency.decimals ? ? 18,
                    formatted: (0, tP.b)(o ? ? "0", tM(n ? ? 18)),
                    symbol: u ? .nativeCurrency.symbol ? ? "ETH",
                    value: o
                }
            }

            function t3() {
                let {
                    data: e,
                    connector: t,
                    status: n
                } = tz();
                switch (n) {
                    case "connected":
                        return {
                            address: e ? .account,
                            connector: t,
                            isConnected: !0,
                            isConnecting: !1,
                            isDisconnected: !1,
                            isReconnecting: !1,
                            status: n
                        };
                    case "reconnecting":
                        return {
                            address: e ? .account,
                            connector: t,
                            isConnected: !!e ? .account,
                            isConnecting: !1,
                            isDisconnected: !1,
                            isReconnecting: !0,
                            status: n
                        };
                    case "connecting":
                        return {
                            address: e ? .account,
                            connector: t,
                            isConnected: !1,
                            isConnecting: !0,
                            isDisconnected: !1,
                            isReconnecting: !1,
                            status: n
                        };
                    case "disconnected":
                        return {
                            address: void 0,
                            connector: void 0,
                            isConnected: !1,
                            isConnecting: !1,
                            isDisconnected: !0,
                            isReconnecting: !1,
                            status: n
                        }
                }
            }

            function t4() {
                let e = tz(),
                    t = e.data ? .chain ? .id,
                    n = e.chains ? ? [],
                    r = [...e.publicClient ? .chains || [], ...n].find(e => e.id === t) ? ? {
                        id: t,
                        name: `Chain ${t}`,
                        network: `${t}`,
                        nativeCurrency: {
                            name: "Ether",
                            decimals: 18,
                            symbol: "ETH"
                        },
                        rpcUrls: {
                            default: {
                                http: [""]
                            },
                            public: {
                                http: [""]
                            }
                        }
                    };
                return {
                    chain: t ? { ...r,
                        ...e.data ? .chain,
                        id : t
                    } : void 0,
                    chains: n
                }
            }
            async function t9(e) {
                let t = await tZ();
                if (!t) throw new tf.N;
                return await t.signMessage({
                    message: e.message
                })
            }
            async function t7({
                chainId: e
            }) {
                let {
                    connector: t
                } = tz();
                if (!t) throw new tf.N;
                if (!t.switchChain) throw new tR({
                    connector: t
                });
                return t.switchChain(e)
            }

            function ne(e, {
                selector: t = e => e
            } = {}) {
                return tz().subscribe(({
                    data: e,
                    connector: n,
                    status: r
                }) => t({
                    address: e ? .account,
                    connector: n,
                    status: r
                }), () => e(t3()), {
                    equalityFn: tC
                })
            }

            function nt(e, {
                selector: t = e => e
            } = {}) {
                return tz().subscribe(({
                    data: e,
                    chains: n
                }) => t({
                    chainId: e ? .chain ? .id,
                    chains: n
                }), () => e(t4()), {
                    equalityFn: tC
                })
            }
            async function nn({
                name: e,
                chainId: t
            }) {
                let {
                    normalize: r
                } = await n.e(45).then(n.bind(n, 50045)), i = tH({
                    chainId: t
                });
                return await i.getEnsAvatar({
                    name: r(e)
                })
            }
            async function nr({
                address: e,
                chainId: t
            }) {
                return tH({
                    chainId: t
                }).getEnsName({
                    address: (0, tx.K)(e)
                })
            }
            async function ni({
                chainId: e
            } = {}) {
                let t = tH({
                    chainId: e
                });
                return await t.getBlockNumber()
            }
            async function na({
                chainId: e,
                confirmations: t = 1,
                hash: n,
                onReplaced: r,
                timeout: i = 0
            }) {
                let a = tH({
                        chainId: e
                    }),
                    s = await a.waitForTransactionReceipt({
                        hash: n,
                        confirmations: t,
                        onReplaced: r,
                        timeout: i
                    });
                if ("reverted" === s.status) {
                    let e = await a.getTransaction({
                            hash: s.transactionHash
                        }),
                        t = await a.call({ ...e,
                            gasPrice: "eip1559" !== e.type ? e.gasPrice : void 0,
                            maxFeePerGas: "eip1559" === e.type ? e.maxFeePerGas : void 0,
                            maxPriorityFeePerGas: "eip1559" === e.type ? e.maxPriorityFeePerGas : void 0
                        });
                    throw Error((0, eb.rR)(`0x${t.substring(138)}`))
                }
                return s
            }

            function ns({
                chainId: e
            }) {
                let {
                    chain: t,
                    chains: n
                } = t4(), r = t ? .id;
                if (r && e !== r) throw new tE({
                    activeChain: n.find(e => e.id === r) ? .name ? ? `Chain ${r}`,
                    targetChain: n.find(t => t.id === e) ? .name ? ? `Chain ${e}`
                })
            }
        },
        4832: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return r
                }
            });

            function r(e) {
                return "string" == typeof e ? {
                    address: e,
                    type: "json-rpc"
                } : e
            }
        },
        98873: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return g
                }
            });
            var r = n(4832),
                i = n(42980),
                a = n(95950),
                s = n(27878),
                o = n(98458),
                u = n(3458),
                c = n(53883),
                l = n(94540),
                d = n(21693),
                h = n(40009),
                f = n(36074),
                p = n(21028),
                m = n(86868),
                b = n(33668),
                y = n(2445);
            async function g(e, t) {
                let {
                    account: i = e.account,
                    batch: u = !!e.batch ? .multicall,
                    blockNumber: c,
                    blockTag: l = "latest",
                    accessList: b,
                    data: g,
                    gas: w,
                    gasPrice: P,
                    maxFeePerGas: C,
                    maxPriorityFeePerGas: x,
                    nonce: O,
                    to: E,
                    value: S,
                    ...k
                } = t, I = i ? (0, r.T)(i) : void 0;
                try {
                    (0, y.F)(t);
                    let n = (c ? (0, d.eC)(c) : void 0) || l,
                        r = e.chain ? .formatters ? .transactionRequest ? .format,
                        i = (r || m.tG)({ ...(0, p.K)(k, {
                                format: r
                            }),
                            from: I ? .address,
                            accessList: b,
                            data: g,
                            gas: w,
                            gasPrice: P,
                            maxFeePerGas: C,
                            maxPriorityFeePerGas: x,
                            nonce: O,
                            to: E,
                            value: S
                        });
                    if (u && function({
                            request: e
                        }) {
                            let {
                                data: t,
                                to: n,
                                ...r
                            } = e;
                            return !(!t || t.startsWith("0x82ad56cb")) && !!n && !(Object.values(r).filter(e => void 0 !== e).length > 0)
                        }({
                            request: i
                        })) try {
                        return await v(e, { ...i,
                            blockNumber: c,
                            blockTag: l
                        })
                    } catch (e) {
                        if (!(e instanceof s.pZ) && !(e instanceof s.mm)) throw e
                    }
                    let a = await e.request({
                        method: "eth_call",
                        params: n ? [i, n] : [i]
                    });
                    if ("0x" === a) return {
                        data: void 0
                    };
                    return {
                        data: a
                    }
                } catch (u) {
                    let r = function(e) {
                            if (!(e instanceof a.G)) return;
                            let t = e.walk();
                            return "object" == typeof t.data ? t.data.data : t.data
                        }(u),
                        {
                            offchainLookup: i,
                            offchainLookupSignature: s
                        } = await n.e(5572).then(n.bind(n, 5572));
                    if (r ? .slice(0, 10) === s && E) return {
                        data: await i(e, {
                            data: r,
                            to: E
                        })
                    };
                    throw function(e, {
                        docsPath: t,
                        ...n
                    }) {
                        let r = (() => {
                            let t = (0, f.k)(e, n);
                            return t instanceof h.cj ? e : t
                        })();
                        return new o.cg(r, {
                            docsPath: t,
                            ...n
                        })
                    }(u, { ...t,
                        account: I,
                        chain: e.chain
                    })
                }
            }
            async function v(e, t) {
                let {
                    batchSize: n = 1024,
                    wait: r = 0
                } = "object" == typeof e.batch ? .multicall ? e.batch.multicall : {}, {
                    blockNumber: a,
                    blockTag: h = "latest",
                    data: f,
                    multicallAddress: p,
                    to: m
                } = t, y = p;
                if (!y) {
                    if (!e.chain) throw new s.pZ;
                    y = (0, l.L)({
                        blockNumber: a,
                        chain: e.chain,
                        contract: "multicall3"
                    })
                }
                let g = (a ? (0, d.eC)(a) : void 0) || h,
                    {
                        schedule: v
                    } = (0, b.S)({
                        id: `${e.uid}.${g}`,
                        wait: r,
                        shouldSplitBatch: e => e.reduce((e, {
                            data: t
                        }) => e + (t.length - 2), 0) > 2 * n,
                        fn: async t => {
                            let n = t.map(e => ({
                                    allowFailure: !0,
                                    callData: e.data,
                                    target: e.to
                                })),
                                r = (0, c.R)({
                                    abi: i.F8,
                                    args: [n],
                                    functionName: "aggregate3"
                                }),
                                a = await e.request({
                                    method: "eth_call",
                                    params: [{
                                        data: r,
                                        to: y
                                    }, g]
                                });
                            return (0, u.k)({
                                abi: i.F8,
                                args: [n],
                                functionName: "aggregate3",
                                data: a || "0x"
                            })
                        }
                    }),
                    [{
                        returnData: w,
                        success: P
                    }] = await v({
                        data: f,
                        to: m
                    });
                if (!P) throw new o.VQ({
                    data: w
                });
                return "0x" === w ? {
                    data: void 0
                } : {
                    data: w
                }
            }
        },
        77096: function(e, t, n) {
            n.d(t, {
                A: function() {
                    return s
                }
            });
            var r = n(38789),
                i = n(21693),
                a = n(96157);
            async function s(e, {
                address: t,
                abi: n,
                args: s,
                eventName: o,
                fromBlock: u,
                strict: c,
                toBlock: l
            }) {
                let d = (0, a.g)(e, {
                        method: "eth_newFilter"
                    }),
                    h = o ? (0, r.O)({
                        abi: n,
                        args: s,
                        eventName: o
                    }) : void 0,
                    f = await e.request({
                        method: "eth_newFilter",
                        params: [{
                            address: t,
                            fromBlock: "bigint" == typeof u ? (0, i.eC)(u) : u,
                            toBlock: "bigint" == typeof l ? (0, i.eC)(l) : l,
                            topics: h
                        }]
                    });
                return {
                    abi: n,
                    args: s,
                    eventName: o,
                    id: f,
                    request: d(f),
                    strict: c,
                    type: "event"
                }
            }
        },
        45459: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return u
                }
            });
            var r = n(4832),
                i = n(53883),
                a = n(65573),
                s = n(82600),
                o = n(89412);
            async function u(e, {
                abi: t,
                address: n,
                args: u,
                functionName: c,
                ...l
            }) {
                let d = (0, i.R)({
                    abi: t,
                    args: u,
                    functionName: c
                });
                try {
                    return await (0, s.s)(e, o.Q, "estimateGas")({
                        data: d,
                        to: n,
                        ...l
                    })
                } catch (i) {
                    let e = l.account ? (0, r.T)(l.account) : void 0;
                    throw (0, a.S)(i, {
                        abi: t,
                        address: n,
                        args: u,
                        docsPath: "/docs/contract/estimateContractGas",
                        functionName: c,
                        sender: e ? .address
                    })
                }
            }
        },
        77451: function(e, t, n) {
            n.d(t, {
                C: function() {
                    return c
                },
                X: function() {
                    return u
                }
            });
            var r = n(84161),
                i = n(82600),
                a = n(17976),
                s = n(3891),
                o = n(75188);
            async function u(e, t) {
                return c(e, t)
            }
            async function c(e, t) {
                let {
                    block: n,
                    chain: u = e.chain,
                    request: c,
                    type: l = "eip1559"
                } = t || {}, d = await (async () => "function" == typeof u ? .fees ? .baseFeeMultiplier ? u.fees.baseFeeMultiplier({
                    block: n,
                    client: e,
                    request: c
                }) : u ? .fees ? .baseFeeMultiplier ? ? 1.2)();
                if (d < 1) throw new r.Fz;
                let h = 10 ** (d.toString().split(".")[1] ? .length ? ? 0),
                    f = e => e * BigInt(Math.ceil(d * h)) / BigInt(h),
                    p = n || await (0, i.s)(e, s.Q, "getBlock")({});
                if ("function" == typeof u ? .fees ? .estimateFeesPerGas) return u.fees.estimateFeesPerGas({
                    block: n,
                    client: e,
                    multiply: f,
                    request: c,
                    type: l
                });
                if ("eip1559" === l) {
                    if ("bigint" != typeof p.baseFeePerGas) throw new r.e5;
                    let t = c ? .maxPriorityFeePerGas ? c.maxPriorityFeePerGas : await (0, a.h)(e, {
                            block: p,
                            chain: u,
                            request: c
                        }),
                        n = f(p.baseFeePerGas);
                    return {
                        maxFeePerGas: c ? .maxFeePerGas ? ? n + t,
                        maxPriorityFeePerGas: t
                    }
                }
                return {
                    gasPrice: c ? .gasPrice ? ? f(await (0, i.s)(e, o.o, "getGasPrice")({}))
                }
            }
        },
        89412: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return y
                }
            });
            var r = n(4832),
                i = n(67333),
                a = n(21693),
                s = n(79352),
                o = n(32421),
                u = n(95950),
                c = n(44818);
            class l extends u.G {
                constructor(e, {
                    account: t,
                    docsPath: n,
                    chain: r,
                    data: i,
                    gas: a,
                    gasPrice: u,
                    maxFeePerGas: l,
                    maxPriorityFeePerGas: d,
                    nonce: h,
                    to: f,
                    value: p
                }) {
                    super(e.shortMessage, {
                        cause: e,
                        docsPath: n,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Estimate Gas Arguments:", (0, c.xr)({
                            from: t ? .address,
                            to: f,
                            value: void 0 !== p && `${(0,s.d)(p)} ${r?.nativeCurrency?.symbol||"ETH"}`,
                            data: i,
                            gas: a,
                            gasPrice: void 0 !== u && `${(0,o.o)(u)} gwei`,
                            maxFeePerGas: void 0 !== l && `${(0,o.o)(l)} gwei`,
                            maxPriorityFeePerGas: void 0 !== d && `${(0,o.o)(d)} gwei`,
                            nonce: h
                        })].filter(Boolean)
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "EstimateGasExecutionError"
                    }), this.cause = e
                }
            }
            var d = n(40009),
                h = n(36074),
                f = n(21028),
                p = n(86868),
                m = n(2445),
                b = n(40044);
            async function y(e, t) {
                let n = t.account ? ? e.account;
                if (!n) throw new i.o({
                    docsPath: "/docs/actions/public/estimateGas"
                });
                let s = (0, r.T)(n);
                try {
                    let {
                        accessList: n,
                        blockNumber: r,
                        blockTag: i,
                        data: o,
                        gas: u,
                        gasPrice: c,
                        maxFeePerGas: l,
                        maxPriorityFeePerGas: d,
                        nonce: h,
                        to: y,
                        value: g,
                        ...v
                    } = "local" === s.type ? await (0, b.Z)(e, t) : t, w = (r ? (0, a.eC)(r) : void 0) || i;
                    (0, m.F)(t);
                    let P = e.chain ? .formatters ? .transactionRequest ? .format,
                        C = (P || p.tG)({ ...(0, f.K)(v, {
                                format: P
                            }),
                            from: s.address,
                            accessList: n,
                            data: o,
                            gas: u,
                            gasPrice: c,
                            maxFeePerGas: l,
                            maxPriorityFeePerGas: d,
                            nonce: h,
                            to: y,
                            value: g
                        }),
                        x = await e.request({
                            method: "eth_estimateGas",
                            params: w ? [C, w] : [C]
                        });
                    return BigInt(x)
                } catch (n) {
                    throw function(e, {
                        docsPath: t,
                        ...n
                    }) {
                        return new l((() => {
                            let t = (0, h.k)(e, n);
                            return t instanceof d.cj ? e : t
                        })(), {
                            docsPath: t,
                            ...n
                        })
                    }(n, { ...t,
                        account: s,
                        chain: e.chain
                    })
                }
            }
        },
        17976: function(e, t, n) {
            n.d(t, {
                _: function() {
                    return u
                },
                h: function() {
                    return c
                }
            });
            var r = n(84161),
                i = n(30838),
                a = n(82600),
                s = n(3891),
                o = n(75188);
            async function u(e, t) {
                return c(e, t)
            }
            async function c(e, t) {
                let {
                    block: n,
                    chain: u = e.chain,
                    request: c
                } = t || {};
                if ("function" == typeof u ? .fees ? .defaultPriorityFee) {
                    let t = n || await (0, a.s)(e, s.Q, "getBlock")({});
                    return u.fees.defaultPriorityFee({
                        block: t,
                        client: e,
                        request: c
                    })
                }
                if (void 0 !== u ? .fees ? .defaultPriorityFee) return u ? .fees ? .defaultPriorityFee;
                try {
                    let t = await e.request({
                        method: "eth_maxPriorityFeePerGas"
                    });
                    return (0, i.y_)(t)
                } catch {
                    let [t, i] = await Promise.all([n ? Promise.resolve(n) : (0, a.s)(e, s.Q, "getBlock")({}), (0, a.s)(e, o.o, "getGasPrice")({})]);
                    if ("bigint" != typeof t.baseFeePerGas) throw new r.e5;
                    let u = i - t.baseFeePerGas;
                    if (u < 0 n) return 0 n;
                    return u
                }
            }
        },
        3891: function(e, t, n) {
            n.d(t, {
                Q: function() {
                    return s
                }
            });
            var r = n(71492),
                i = n(21693),
                a = n(78723);
            async function s(e, {
                blockHash: t,
                blockNumber: n,
                blockTag: s,
                includeTransactions: o
            } = {}) {
                let u = o ? ? !1,
                    c = void 0 !== n ? (0, i.eC)(n) : void 0,
                    l = null;
                if (!(l = t ? await e.request({
                        method: "eth_getBlockByHash",
                        params: [t, u]
                    }) : await e.request({
                        method: "eth_getBlockByNumber",
                        params: [c || (s ? ? "latest"), u]
                    }))) throw new r.f({
                    blockHash: t,
                    blockNumber: n
                });
                return (e.chain ? .formatters ? .block ? .format || a.Z)(l)
            }
        },
        15552: function(e, t, n) {
            n.d(t, {
                z: function() {
                    return o
                }
            });
            let r = new Map,
                i = new Map;
            async function a(e, {
                cacheKey: t,
                cacheTime: n = 1 / 0
            }) {
                let a = function(e) {
                        let t = (e, t) => ({
                                clear: () => t.delete(e),
                                get: () => t.get(e),
                                set: n => t.set(e, n)
                            }),
                            n = t(e, r),
                            a = t(e, i);
                        return {
                            clear: () => {
                                n.clear(), a.clear()
                            },
                            promise: n,
                            response: a
                        }
                    }(t),
                    s = a.response.get();
                if (s && n > 0 && new Date().getTime() - s.created.getTime() < n) return s.data;
                let o = a.promise.get();
                o || (o = e(), a.promise.set(o));
                try {
                    let e = await o;
                    return a.response.set({
                        created: new Date,
                        data: e
                    }), e
                } finally {
                    a.promise.clear()
                }
            }
            let s = e => `blockNumber.${e}`;
            async function o(e, {
                cacheTime: t = e.cacheTime,
                maxAge: n
            } = {}) {
                return BigInt(await a(() => e.request({
                    method: "eth_blockNumber"
                }), {
                    cacheKey: s(e.uid),
                    cacheTime: n ? ? t
                }))
            }
        },
        13438: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return i
                }
            });
            var r = n(30838);
            async function i(e) {
                let t = await e.request({
                    method: "eth_chainId"
                });
                return (0, r.ly)(t)
            }
        },
        30120: function(e, t, n) {
            n.d(t, {
                m: function() {
                    return s
                }
            });
            var r = n(77804),
                i = n(82600),
                a = n(31801);
            async function s(e, {
                abi: t,
                address: n,
                args: s,
                blockHash: o,
                eventName: u,
                fromBlock: c,
                toBlock: l,
                strict: d
            }) {
                let h = u ? (0, r.mE)({
                        abi: t,
                        name: u
                    }) : void 0,
                    f = h ? void 0 : t.filter(e => "event" === e.type);
                return (0, i.s)(e, a.y, "getLogs")({
                    address: n,
                    args: s,
                    blockHash: o,
                    event: h,
                    events: f,
                    fromBlock: c,
                    toBlock: l,
                    strict: d
                })
            }
        },
        53138: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return s
                }
            });
            var r = n(71878),
                i = n(63610),
                a = n(37380);
            async function s(e, {
                filter: t
            }) {
                let n = "strict" in t && t.strict;
                return (await t.request({
                    method: "eth_getFilterChanges",
                    params: [t.id]
                })).map(e => {
                    if ("string" == typeof e) return e;
                    try {
                        let {
                            eventName: r,
                            args: s
                        } = "abi" in t && t.abi ? (0, i.F)({
                            abi: t.abi,
                            data: e.data,
                            topics: e.topics,
                            strict: n
                        }) : {
                            eventName: void 0,
                            args: void 0
                        };
                        return (0, a.U)(e, {
                            args: s,
                            eventName: r
                        })
                    } catch (s) {
                        let n, i;
                        if (s instanceof r.SM || s instanceof r.Gy) {
                            if ("strict" in t && t.strict) return;
                            n = s.abiItem.name, i = s.abiItem.inputs ? .some(e => !("name" in e && e.name))
                        }
                        return (0, a.U)(e, {
                            args: i ? [] : {},
                            eventName: n
                        })
                    }
                }).filter(Boolean)
            }
        },
        75188: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return r
                }
            });
            async function r(e) {
                return BigInt(await e.request({
                    method: "eth_gasPrice"
                }))
            }
        },
        31801: function(e, t, n) {
            n.d(t, {
                y: function() {
                    return u
                }
            });
            var r = n(71878),
                i = n(63610),
                a = n(38789),
                s = n(21693),
                o = n(37380);
            async function u(e, {
                address: t,
                blockHash: n,
                fromBlock: u,
                toBlock: c,
                event: l,
                events: d,
                args: h,
                strict: f
            } = {}) {
                let p = f ? ? !1,
                    m = d ? ? (l ? [l] : void 0),
                    b = [];
                return m && (b = [m.flatMap(e => (0, a.O)({
                    abi: [e],
                    eventName: e.name,
                    args: h
                }))], l && (b = b[0])), (n ? await e.request({
                    method: "eth_getLogs",
                    params: [{
                        address: t,
                        topics: b,
                        blockHash: n
                    }]
                }) : await e.request({
                    method: "eth_getLogs",
                    params: [{
                        address: t,
                        topics: b,
                        fromBlock: "bigint" == typeof u ? (0, s.eC)(u) : u,
                        toBlock: "bigint" == typeof c ? (0, s.eC)(c) : c
                    }]
                })).map(e => {
                    try {
                        let {
                            eventName: t,
                            args: n
                        } = m ? (0, i.F)({
                            abi: m,
                            data: e.data,
                            topics: e.topics,
                            strict: p
                        }) : {
                            eventName: void 0,
                            args: void 0
                        };
                        return (0, o.U)(e, {
                            args: n,
                            eventName: t
                        })
                    } catch (i) {
                        let t, n;
                        if (i instanceof r.SM || i instanceof r.Gy) {
                            if (p) return;
                            t = i.abiItem.name, n = i.abiItem.inputs ? .some(e => !("name" in e && e.name))
                        }
                        return (0, o.U)(e, {
                            args: n ? [] : {},
                            eventName: t
                        })
                    }
                }).filter(Boolean)
            }
        },
        31742: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return a
                }
            });
            var r = n(30838),
                i = n(21693);
            async function a(e, {
                address: t,
                blockTag: n = "latest",
                blockNumber: a
            }) {
                let s = await e.request({
                    method: "eth_getTransactionCount",
                    params: [t, a ? (0, i.eC)(a) : n]
                });
                return (0, r.ly)(s)
            }
        },
        65459: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return u
                }
            });
            var r = n(3458),
                i = n(53883),
                a = n(65573),
                s = n(82600),
                o = n(98873);
            async function u(e, {
                abi: t,
                address: n,
                args: u,
                functionName: c,
                ...l
            }) {
                let d = (0, i.R)({
                    abi: t,
                    args: u,
                    functionName: c
                });
                try {
                    let {
                        data: i
                    } = await (0, s.s)(e, o.R, "call")({
                        data: d,
                        to: n,
                        ...l
                    });
                    return (0, r.k)({
                        abi: t,
                        args: u,
                        functionName: c,
                        data: i || "0x"
                    })
                } catch (e) {
                    throw (0, a.S)(e, {
                        abi: t,
                        address: n,
                        args: u,
                        docsPath: "/docs/contract/readContract",
                        functionName: c
                    })
                }
            }
        },
        9031: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return c
                }
            });
            var r = n(4832),
                i = n(3458),
                a = n(53883),
                s = n(65573),
                o = n(82600),
                u = n(98873);
            async function c(e, {
                abi: t,
                address: n,
                args: c,
                dataSuffix: l,
                functionName: d,
                ...h
            }) {
                let f = h.account ? (0, r.T)(h.account) : void 0,
                    p = (0, a.R)({
                        abi: t,
                        args: c,
                        functionName: d
                    });
                try {
                    let {
                        data: r
                    } = await (0, o.s)(e, u.R, "call")({
                        batch: !1,
                        data: `${p}${l?l.replace("0x",""):""}`,
                        to: n,
                        ...h
                    });
                    return {
                        result: (0, i.k)({
                            abi: t,
                            args: c,
                            functionName: d,
                            data: r || "0x"
                        }),
                        request: {
                            abi: t,
                            address: n,
                            args: c,
                            dataSuffix: l,
                            functionName: d,
                            ...h
                        }
                    }
                } catch (e) {
                    throw (0, s.S)(e, {
                        abi: t,
                        address: n,
                        args: c,
                        docsPath: "/docs/contract/simulateContract",
                        functionName: d,
                        sender: f ? .address
                    })
                }
            }
        },
        81621: function(e, t, n) {
            n.d(t, {
                W: function() {
                    return r
                }
            });
            async function r(e, {
                filter: t
            }) {
                return t.request({
                    method: "eth_uninstallFilter",
                    params: [t.id]
                })
            }
        },
        40457: function(e, t, n) {
            n.d(t, {
                Y: function() {
                    return y
                }
            });
            var r = n(87162),
                i = n(62468),
                a = n(71891),
                s = n(71878),
                o = n(48519),
                u = n(63610),
                c = n(38789),
                l = n(37380),
                d = n(82600),
                h = n(77096),
                f = n(15552),
                p = n(30120),
                m = n(53138),
                b = n(81621);

            function y(e, {
                abi: t,
                address: n,
                args: y,
                batch: g = !0,
                eventName: v,
                onError: w,
                onLogs: P,
                poll: C,
                pollingInterval: x = e.pollingInterval,
                strict: O
            }) {
                let E, S;
                return (void 0 !== C ? C : "webSocket" !== e.transport.type) ? (() => {
                    let s = (0, a.P)(["watchContractEvent", n, y, g, e.uid, v, x]),
                        u = O ? ? !1;
                    return (0, r.N7)(s, {
                        onLogs: P,
                        onError: w
                    }, r => {
                        let a, s;
                        let c = !1,
                            l = (0, i.$)(async () => {
                                if (!c) {
                                    try {
                                        s = await (0, d.s)(e, h.A, "createContractEventFilter")({
                                            abi: t,
                                            address: n,
                                            args: y,
                                            eventName: v,
                                            strict: u
                                        })
                                    } catch {}
                                    c = !0;
                                    return
                                }
                                try {
                                    let i;
                                    if (s) i = await (0, d.s)(e, m.K, "getFilterChanges")({
                                        filter: s
                                    });
                                    else {
                                        let r = await (0, d.s)(e, f.z, "getBlockNumber")({});
                                        i = a && a !== r ? await (0, d.s)(e, p.m, "getContractEvents")({
                                            abi: t,
                                            address: n,
                                            args: y,
                                            eventName: v,
                                            fromBlock: a + 1 n,
                                            toBlock: r,
                                            strict: u
                                        }) : [], a = r
                                    }
                                    if (0 === i.length) return;
                                    if (g) r.onLogs(i);
                                    else
                                        for (let e of i) r.onLogs([e])
                                } catch (e) {
                                    s && e instanceof o.yR && (c = !1), r.onError ? .(e)
                                }
                            }, {
                                emitOnBegin: !0,
                                interval: x
                            });
                        return async () => {
                            s && await (0, d.s)(e, b.W, "uninstallFilter")({
                                filter: s
                            }), l()
                        }
                    })
                })() : (E = !0, S = () => E = !1, (async () => {
                    try {
                        let r = v ? (0, c.O)({
                                abi: t,
                                eventName: v,
                                args: y
                            }) : [],
                            {
                                unsubscribe: i
                            } = await e.transport.subscribe({
                                params: ["logs", {
                                    address: n,
                                    topics: r
                                }],
                                onData(e) {
                                    if (!E) return;
                                    let n = e.result;
                                    try {
                                        let {
                                            eventName: e,
                                            args: r
                                        } = (0, u.F)({
                                            abi: t,
                                            data: n.data,
                                            topics: n.topics,
                                            strict: O
                                        }), i = (0, l.U)(n, {
                                            args: r,
                                            eventName: e
                                        });
                                        P([i])
                                    } catch (i) {
                                        let e, t;
                                        if (i instanceof s.SM || i instanceof s.Gy) {
                                            if (O) return;
                                            e = i.abiItem.name, t = i.abiItem.inputs ? .some(e => !("name" in e && e.name))
                                        }
                                        let r = (0, l.U)(n, {
                                            args: t ? [] : {},
                                            eventName: e
                                        });
                                        P([r])
                                    }
                                },
                                onError(e) {
                                    w ? .(e)
                                }
                            });
                        S = i, E || S()
                    } catch (e) {
                        w ? .(e)
                    }
                })(), S)
            }
        },
        40044: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return f
                }
            });
            var r = n(4832),
                i = n(77451),
                a = n(89412),
                s = n(3891),
                o = n(31742),
                u = n(67333),
                c = n(84161),
                l = n(82600),
                d = n(2445),
                h = n(44818);
            async function f(e, t) {
                let {
                    account: n = e.account,
                    chain: f,
                    gas: p,
                    nonce: m,
                    type: b
                } = t;
                if (!n) throw new u.o;
                let y = (0, r.T)(n),
                    g = await (0, l.s)(e, s.Q, "getBlock")({
                        blockTag: "latest"
                    }),
                    v = { ...t,
                        from: y.address
                    };
                if (void 0 === m && (v.nonce = await (0, l.s)(e, o.K, "getTransactionCount")({
                        address: y.address,
                        blockTag: "pending"
                    })), void 0 === b) try {
                    v.type = function(e) {
                        if (e.type) return e.type;
                        if (void 0 !== e.maxFeePerGas || void 0 !== e.maxPriorityFeePerGas) return "eip1559";
                        if (void 0 !== e.gasPrice) return void 0 !== e.accessList ? "eip2930" : "legacy";
                        throw new h.j3({
                            transaction: e
                        })
                    }(v)
                } catch {
                    v.type = "bigint" == typeof g.baseFeePerGas ? "eip1559" : "legacy"
                }
                if ("eip1559" === v.type) {
                    let {
                        maxFeePerGas: n,
                        maxPriorityFeePerGas: r
                    } = await (0, i.C)(e, {
                        block: g,
                        chain: f,
                        request: v
                    });
                    if (void 0 === t.maxPriorityFeePerGas && t.maxFeePerGas && t.maxFeePerGas < r) throw new c.ld({
                        maxPriorityFeePerGas: r
                    });
                    v.maxPriorityFeePerGas = r, v.maxFeePerGas = n
                } else {
                    if (void 0 !== t.maxFeePerGas || void 0 !== t.maxPriorityFeePerGas) throw new c.e5;
                    let {
                        gasPrice: n
                    } = await (0, i.C)(e, {
                        block: g,
                        chain: f,
                        request: v,
                        type: "legacy"
                    });
                    v.gasPrice = n
                }
                return void 0 === p && (v.gas = await (0, l.s)(e, a.Q, "estimateGas")({ ...v,
                    account: {
                        address: y.address,
                        type: "json-rpc"
                    }
                })), (0, d.F)(v), v
            }
        },
        73971: function(e, t, n) {
            n.d(t, {
                p: function() {
                    return r
                }
            });
            async function r(e, {
                serializedTransaction: t
            }) {
                return e.request({
                    method: "eth_sendRawTransaction",
                    params: [t]
                })
            }
        },
        64394: function(e, t, n) {
            n.d(t, {
                T: function() {
                    return b
                }
            });
            var r = n(4832),
                i = n(67333),
                a = n(64305),
                s = n(40009),
                o = n(44818),
                u = n(36074),
                c = n(21028),
                l = n(86868),
                d = n(82600),
                h = n(2445),
                f = n(13438),
                p = n(40044),
                m = n(73971);
            async function b(e, t) {
                let {
                    account: n = e.account,
                    chain: b = e.chain,
                    accessList: y,
                    data: g,
                    gas: v,
                    gasPrice: w,
                    maxFeePerGas: P,
                    maxPriorityFeePerGas: C,
                    nonce: x,
                    to: O,
                    value: E,
                    ...S
                } = t;
                if (!n) throw new i.o({
                    docsPath: "/docs/actions/wallet/sendTransaction"
                });
                let k = (0, r.T)(n);
                try {
                    let n;
                    if ((0, h.F)(t), null !== b && (n = await (0, d.s)(e, f.L, "getChainId")({}), (0, a.q)({
                            currentChainId: n,
                            chain: b
                        })), "local" === k.type) {
                        let t = await (0, d.s)(e, p.Z, "prepareTransactionRequest")({
                            account: k,
                            accessList: y,
                            chain: b,
                            data: g,
                            gas: v,
                            gasPrice: w,
                            maxFeePerGas: P,
                            maxPriorityFeePerGas: C,
                            nonce: x,
                            to: O,
                            value: E,
                            ...S
                        });
                        n || (n = await (0, d.s)(e, f.L, "getChainId")({}));
                        let r = b ? .serializers ? .transaction,
                            i = await k.signTransaction({ ...t,
                                chainId: n
                            }, {
                                serializer: r
                            });
                        return await (0, d.s)(e, m.p, "sendRawTransaction")({
                            serializedTransaction: i
                        })
                    }
                    let r = e.chain ? .formatters ? .transactionRequest ? .format,
                        i = (r || l.tG)({ ...(0, c.K)(S, {
                                format: r
                            }),
                            accessList: y,
                            data: g,
                            from: k.address,
                            gas: v,
                            gasPrice: w,
                            maxFeePerGas: P,
                            maxPriorityFeePerGas: C,
                            nonce: x,
                            to: O,
                            value: E
                        });
                    return await e.request({
                        method: "eth_sendTransaction",
                        params: [i]
                    })
                } catch (e) {
                    throw function(e, {
                        docsPath: t,
                        ...n
                    }) {
                        let r = (() => {
                            let t = (0, u.k)(e, n);
                            return t instanceof s.cj ? e : t
                        })();
                        return new o.mk(r, {
                            docsPath: t,
                            ...n
                        })
                    }(e, { ...t,
                        account: k,
                        chain: t.chain || void 0
                    })
                }
            }
        },
        23570: function(e, t, n) {
            n.d(t, {
                n: function() {
                    return s
                }
            });
            var r = n(53883),
                i = n(82600),
                a = n(64394);
            async function s(e, {
                abi: t,
                address: n,
                args: s,
                dataSuffix: o,
                functionName: u,
                ...c
            }) {
                let l = (0, r.R)({
                    abi: t,
                    args: s,
                    functionName: u
                });
                return await (0, i.s)(e, a.T, "sendTransaction")({
                    data: `${l}${o?o.replace("0x",""):""}`,
                    to: n,
                    ...c
                })
            }
        },
        24368: function(e, t, n) {
            n.d(t, {
                w: function() {
                    return r
                }
            });
            let r = (0, n(71186).a)({
                id: 5,
                network: "goerli",
                name: "Goerli",
                nativeCurrency: {
                    name: "Goerli Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    alchemy: {
                        http: ["https://eth-goerli.g.alchemy.com/v2"],
                        webSocket: ["wss://eth-goerli.g.alchemy.com/v2"]
                    },
                    infura: {
                        http: ["https://goerli.infura.io/v3"],
                        webSocket: ["wss://goerli.infura.io/ws/v3"]
                    },
                    default: {
                        http: ["https://rpc.ankr.com/eth_goerli"]
                    },
                    public: {
                        http: ["https://rpc.ankr.com/eth_goerli"]
                    }
                },
                blockExplorers: {
                    etherscan: {
                        name: "Etherscan",
                        url: "https://goerli.etherscan.io"
                    },
                    default: {
                        name: "Etherscan",
                        url: "https://goerli.etherscan.io"
                    }
                },
                contracts: {
                    ensRegistry: {
                        address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                    },
                    ensUniversalResolver: {
                        address: "0x56522D00C410a43BFfDF00a9A569489297385790",
                        blockCreated: 8765204
                    },
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 6507670
                    }
                },
                testnet: !0
            })
        },
        75404: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return r
                }
            });
            let r = (0, n(71186).a)({
                id: 1,
                network: "homestead",
                name: "Ethereum",
                nativeCurrency: {
                    name: "Ether",
                    symbol: "ETH",
                    decimals: 18
                },
                rpcUrls: {
                    alchemy: {
                        http: ["https://eth-mainnet.g.alchemy.com/v2"],
                        webSocket: ["wss://eth-mainnet.g.alchemy.com/v2"]
                    },
                    infura: {
                        http: ["https://mainnet.infura.io/v3"],
                        webSocket: ["wss://mainnet.infura.io/ws/v3"]
                    },
                    default: {
                        http: ["https://cloudflare-eth.com"]
                    },
                    public: {
                        http: ["https://cloudflare-eth.com"]
                    }
                },
                blockExplorers: {
                    etherscan: {
                        name: "Etherscan",
                        url: "https://etherscan.io"
                    },
                    default: {
                        name: "Etherscan",
                        url: "https://etherscan.io"
                    }
                },
                contracts: {
                    ensRegistry: {
                        address: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e"
                    },
                    ensUniversalResolver: {
                        address: "0xc0497E381f536Be9ce14B0dD3817cBcAe57d2F62",
                        blockCreated: 16966585
                    },
                    multicall3: {
                        address: "0xca11bde05977b3631167028862be2a173976ca11",
                        blockCreated: 14353601
                    }
                }
            })
        },
        30315: function(e, t, n) {
            let r;
            n.d(t, {
                e: function() {
                    return s
                }
            });
            var i = n(4832);
            let a = 256;

            function s(e) {
                let {
                    batch: t,
                    cacheTime: n = e.pollingInterval ? ? 4e3,
                    key: s = "base",
                    name: o = "Base Client",
                    pollingInterval: u = 4e3,
                    type: c = "base"
                } = e, l = e.chain, d = e.account ? (0, i.T)(e.account) : void 0, {
                    config: h,
                    request: f,
                    value: p
                } = e.transport({
                    chain: l,
                    pollingInterval: u
                }), m = {
                    account: d,
                    batch: t,
                    cacheTime: n,
                    chain: l,
                    key: s,
                    name: o,
                    pollingInterval: u,
                    request: f,
                    transport: { ...h,
                        ...p
                    },
                    type: c,
                    uid: function(e = 11) {
                        if (!r || a + e > 512) {
                            r = "", a = 0;
                            for (let e = 0; e < 256; e++) r += (256 + 256 * Math.random() | 0).toString(16).substring(1)
                        }
                        return r.substring(a, a++ + e)
                    }()
                };
                return Object.assign(m, {
                    extend: function e(t) {
                        return n => {
                            let r = n(t);
                            for (let e in m) delete r[e];
                            let i = { ...t,
                                ...r
                            };
                            return Object.assign(i, {
                                extend: e(i)
                            })
                        }
                    }(m)
                })
            }
        },
        21334: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return j
                }
            });
            var r = n(30315),
                i = n(13438),
                a = n(21693);
            async function s(e, {
                chain: t
            }) {
                let {
                    id: n,
                    name: r,
                    nativeCurrency: i,
                    rpcUrls: s,
                    blockExplorers: o
                } = t;
                await e.request({
                    method: "wallet_addEthereumChain",
                    params: [{
                        chainId: (0, a.eC)(n),
                        chainName: r,
                        nativeCurrency: i,
                        rpcUrls: s.default.http,
                        blockExplorerUrls: o ? Object.values(o).map(({
                            url: e
                        }) => e) : void 0
                    }]
                })
            }
            var o = n(12732),
                u = n(64394),
                c = n(39803);
            async function l(e) {
                return e.account ? .type === "local" ? [e.account.address] : (await e.request({
                    method: "eth_accounts"
                })).map(e => (0, c.x)(e))
            }
            async function d(e) {
                return await e.request({
                    method: "wallet_getPermissions"
                })
            }
            var h = n(40044);
            async function f(e) {
                return (await e.request({
                    method: "eth_requestAccounts"
                })).map(e => (0, c.K)(e))
            }
            async function p(e, t) {
                return e.request({
                    method: "wallet_requestPermissions",
                    params: [t]
                })
            }
            var m = n(73971),
                b = n(4832),
                y = n(67333);
            async function g(e, {
                account: t = e.account,
                message: n
            }) {
                if (!t) throw new y.o({
                    docsPath: "/docs/actions/wallet/signMessage"
                });
                let r = (0, b.T)(t);
                if ("local" === r.type) return r.signMessage({
                    message: n
                });
                let i = "string" == typeof n ? (0, a.$G)(n) : n.raw instanceof Uint8Array ? (0, a.NC)(n.raw) : n.raw;
                return e.request({
                    method: "personal_sign",
                    params: [i, r.address]
                })
            }
            var v = n(64305),
                w = n(86868),
                P = n(82600),
                C = n(2445);
            async function x(e, t) {
                let {
                    account: n = e.account,
                    chain: r = e.chain,
                    ...s
                } = t;
                if (!n) throw new y.o({
                    docsPath: "/docs/actions/wallet/signTransaction"
                });
                let o = (0, b.T)(n);
                (0, C.F)({
                    account: o,
                    ...t
                });
                let u = await (0, P.s)(e, i.L, "getChainId")({});
                null !== r && (0, v.q)({
                    currentChainId: u,
                    chain: r
                });
                let c = r ? .formatters || e.chain ? .formatters,
                    l = c ? .transactionRequest ? .format || w.tG;
                return "local" === o.type ? o.signTransaction({ ...s,
                    chainId: u
                }, {
                    serializer: e.chain ? .serializers ? .transaction
                }) : await e.request({
                    method: "eth_signTransaction",
                    params: [{ ...l(s),
                        chainId: (0, a.eC)(u),
                        from: o.address
                    }]
                })
            }
            var O = n(45008),
                E = n(71891),
                S = n(29578);
            async function k(e, {
                account: t = e.account,
                domain: n,
                message: r,
                primaryType: i,
                types: a
            }) {
                if (!t) throw new y.o({
                    docsPath: "/docs/actions/wallet/signTypedData"
                });
                let s = (0, b.T)(t),
                    o = {
                        EIP712Domain: (0, S.cj)({
                            domain: n
                        }),
                        ...a
                    };
                if ((0, S.iC)({
                        domain: n,
                        message: r,
                        primaryType: i,
                        types: o
                    }), "local" === s.type) return s.signTypedData({
                    domain: n,
                    primaryType: i,
                    types: o,
                    message: r
                });
                let u = (0, E.P)({
                    domain: n ? ? {},
                    primaryType: i,
                    types: o,
                    message: r
                }, (e, t) => (0, O.v)(t) ? t.toLowerCase() : t);
                return e.request({
                    method: "eth_signTypedData_v4",
                    params: [s.address, u]
                })
            }
            async function I(e, {
                id: t
            }) {
                await e.request({
                    method: "wallet_switchEthereumChain",
                    params: [{
                        chainId: (0, a.eC)(t)
                    }]
                })
            }
            async function R(e, t) {
                return await e.request({
                    method: "wallet_watchAsset",
                    params: t
                })
            }
            var F = n(23570);

            function $(e) {
                return {
                    addChain: t => s(e, t),
                    deployContract: t => (function(e, {
                        abi: t,
                        args: n,
                        bytecode: r,
                        ...i
                    }) {
                        let a = (0, o.w)({
                            abi: t,
                            args: n,
                            bytecode: r
                        });
                        return (0, u.T)(e, { ...i,
                            data: a
                        })
                    })(e, t),
                    getAddresses: () => l(e),
                    getChainId: () => (0, i.L)(e),
                    getPermissions: () => d(e),
                    prepareTransactionRequest: t => (0, h.Z)(e, t),
                    requestAddresses: () => f(e),
                    requestPermissions: t => p(e, t),
                    sendRawTransaction: t => (0, m.p)(e, t),
                    sendTransaction: t => (0, u.T)(e, t),
                    signMessage: t => g(e, t),
                    signTransaction: t => x(e, t),
                    signTypedData: t => k(e, t),
                    switchChain: t => I(e, t),
                    watchAsset: t => R(e, t),
                    writeContract: t => (0, F.n)(e, t)
                }
            }

            function j(e) {
                let {
                    key: t = "wallet",
                    name: n = "Wallet Client",
                    transport: i
                } = e;
                return (0, r.e)({ ...e,
                    key: t,
                    name: n,
                    transport: e => i({ ...e,
                        retryCount: 0
                    }),
                    type: "walletClient"
                }).extend($)
            }
        },
        68124: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return i
                }
            });
            var r = n(35215);

            function i({
                key: e,
                name: t,
                request: n,
                retryCount: i = 3,
                retryDelay: a = 150,
                timeout: s,
                type: o
            }, u) {
                return {
                    config: {
                        key: e,
                        name: t,
                        request: n,
                        retryCount: i,
                        retryDelay: a,
                        timeout: s,
                        type: o
                    },
                    request: (0, r.n)(n, {
                        retryCount: i,
                        retryDelay: a
                    }),
                    value: u
                }
            }
        },
        39730: function(e, t, n) {
            n.d(t, {
                P: function() {
                    return i
                }
            });
            var r = n(68124);

            function i(e, t = {}) {
                let {
                    key: n = "custom",
                    name: i = "Custom Provider",
                    retryDelay: a
                } = t;
                return ({
                    retryCount: s
                }) => (0, r.q)({
                    key: n,
                    name: i,
                    request: e.request.bind(e),
                    retryCount: t.retryCount ? ? s,
                    retryDelay: a,
                    type: "custom"
                })
            }
        },
        42980: function(e, t, n) {
            n.d(t, {
                $o: function() {
                    return c
                },
                F8: function() {
                    return r
                },
                X$: function() {
                    return u
                },
                du: function() {
                    return s
                },
                k3: function() {
                    return a
                },
                nZ: function() {
                    return o
                }
            });
            let r = [{
                    inputs: [{
                        components: [{
                            name: "target",
                            type: "address"
                        }, {
                            name: "allowFailure",
                            type: "bool"
                        }, {
                            name: "callData",
                            type: "bytes"
                        }],
                        name: "calls",
                        type: "tuple[]"
                    }],
                    name: "aggregate3",
                    outputs: [{
                        components: [{
                            name: "success",
                            type: "bool"
                        }, {
                            name: "returnData",
                            type: "bytes"
                        }],
                        name: "returnData",
                        type: "tuple[]"
                    }],
                    stateMutability: "view",
                    type: "function"
                }],
                i = [{
                    inputs: [],
                    name: "ResolverNotFound",
                    type: "error"
                }, {
                    inputs: [],
                    name: "ResolverWildcardNotSupported",
                    type: "error"
                }],
                a = [...i, {
                    name: "resolve",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes"
                    }, {
                        name: "data",
                        type: "bytes"
                    }],
                    outputs: [{
                        name: "",
                        type: "bytes"
                    }, {
                        name: "address",
                        type: "address"
                    }]
                }],
                s = [...i, {
                    name: "reverse",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        type: "bytes",
                        name: "reverseName"
                    }],
                    outputs: [{
                        type: "string",
                        name: "resolvedName"
                    }, {
                        type: "address",
                        name: "resolvedAddress"
                    }, {
                        type: "address",
                        name: "reverseResolver"
                    }, {
                        type: "address",
                        name: "resolver"
                    }]
                }],
                o = [{
                    name: "text",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes32"
                    }, {
                        name: "key",
                        type: "string"
                    }],
                    outputs: [{
                        name: "",
                        type: "string"
                    }]
                }],
                u = [{
                    name: "addr",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes32"
                    }],
                    outputs: [{
                        name: "",
                        type: "address"
                    }]
                }, {
                    name: "addr",
                    type: "function",
                    stateMutability: "view",
                    inputs: [{
                        name: "name",
                        type: "bytes32"
                    }, {
                        name: "coinType",
                        type: "uint256"
                    }],
                    outputs: [{
                        name: "",
                        type: "bytes"
                    }]
                }],
                c = [{
                    inputs: [{
                        internalType: "address",
                        name: "_signer",
                        type: "address"
                    }, {
                        internalType: "bytes32",
                        name: "_hash",
                        type: "bytes32"
                    }, {
                        internalType: "bytes",
                        name: "_signature",
                        type: "bytes"
                    }],
                    stateMutability: "nonpayable",
                    type: "constructor"
                }]
        },
        28483: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return r
                },
                Up: function() {
                    return i
                },
                hZ: function() {
                    return a
                }
            });
            let r = {
                    1: "An `assert` condition failed.",
                    17: "Arithmic operation resulted in underflow or overflow.",
                    18: "Division or modulo by zero (e.g. `5 / 0` or `23 % 0`).",
                    33: "Attempted to convert to an invalid type.",
                    34: "Attempted to access a storage byte array that is incorrectly encoded.",
                    49: "Performed `.pop()` on an empty array",
                    50: "Array index is out of bounds.",
                    65: "Allocated too much memory or created an array which is too large.",
                    81: "Attempted to call a zero-initialized variable of internal function type."
                },
                i = {
                    inputs: [{
                        name: "message",
                        type: "string"
                    }],
                    name: "Error",
                    type: "error"
                },
                a = {
                    inputs: [{
                        name: "reason",
                        type: "uint256"
                    }],
                    name: "Panic",
                    type: "error"
                }
        },
        36238: function(e, t, n) {
            n.d(t, {
                Bd: function() {
                    return a
                },
                Zn: function() {
                    return i
                },
                ez: function() {
                    return r
                }
            });
            let r = {
                    gwei: 9,
                    wei: 18
                },
                i = {
                    ether: -9,
                    wei: 9
                },
                a = {
                    ether: -18,
                    gwei: -9
                }
        },
        71878: function(e, t, n) {
            n.d(t, {
                CI: function() {
                    return O
                },
                FM: function() {
                    return p
                },
                Gy: function() {
                    return C
                },
                KY: function() {
                    return w
                },
                M4: function() {
                    return d
                },
                MX: function() {
                    return g
                },
                S4: function() {
                    return v
                },
                SM: function() {
                    return P
                },
                cO: function() {
                    return o
                },
                dh: function() {
                    return x
                },
                fM: function() {
                    return s
                },
                fs: function() {
                    return h
                },
                gr: function() {
                    return l
                },
                hn: function() {
                    return E
                },
                lC: function() {
                    return m
                },
                mv: function() {
                    return b
                },
                wM: function() {
                    return S
                },
                wb: function() {
                    return c
                },
                xB: function() {
                    return u
                },
                xL: function() {
                    return y
                },
                yP: function() {
                    return f
                }
            });
            var r = n(40928),
                i = n(39868),
                a = n(95950);
            class s extends a.G {
                constructor({
                    docsPath: e
                }) {
                    super("A constructor was not found on the ABI.\nMake sure you are using the correct ABI and that the constructor exists on it.", {
                        docsPath: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiConstructorNotFoundError"
                    })
                }
            }
            class o extends a.G {
                constructor({
                    docsPath: e
                }) {
                    super("Constructor arguments were provided (`args`), but a constructor parameters (`inputs`) were not found on the ABI.\nMake sure you are using the correct ABI, and that the `inputs` attribute on the constructor exists.", {
                        docsPath: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiConstructorParamsNotFoundError"
                    })
                }
            }
            class u extends a.G {
                constructor({
                    data: e,
                    params: t,
                    size: n
                }) {
                    super(`Data size of ${n} bytes is too small for given parameters.`, {
                        metaMessages: [`Params: (${(0,r.h)(t,{includeName:!0})})`, `Data:   ${e} (${n} bytes)`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiDecodingDataSizeTooSmallError"
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "params", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "size", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = e, this.params = t, this.size = n
                }
            }
            class c extends a.G {
                constructor() {
                    super('Cannot decode zero data ("0x") with ABI parameters.'), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiDecodingZeroDataError"
                    })
                }
            }
            class l extends a.G {
                constructor({
                    expectedLength: e,
                    givenLength: t,
                    type: n
                }) {
                    super(`ABI encoding array length mismatch for type ${n}.
Expected length: ${e}
Given length: ${t}`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEncodingArrayLengthMismatchError"
                    })
                }
            }
            class d extends a.G {
                constructor({
                    expectedSize: e,
                    value: t
                }) {
                    super(`Size of bytes "${t}" (bytes${(0,i.d)(t)}) does not match expected size (bytes${e}).`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEncodingBytesSizeMismatchError"
                    })
                }
            }
            class h extends a.G {
                constructor({
                    expectedLength: e,
                    givenLength: t
                }) {
                    super(`ABI encoding params/values length mismatch.
Expected length (params): ${e}
Given length (values): ${t}`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEncodingLengthMismatchError"
                    })
                }
            }
            class f extends a.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Encoded error signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the error exists on it.
You can look up the decoded signature here: https://openchain.xyz/signatures?query=${e}.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiErrorSignatureNotFoundError"
                    }), Object.defineProperty(this, "signature", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.signature = e
                }
            }
            class p extends a.G {
                constructor({
                    docsPath: e
                }) {
                    super("Cannot extract event signature from empty topics.", {
                        docsPath: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEventSignatureEmptyTopicsError"
                    })
                }
            }
            class m extends a.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Encoded event signature "${e}" not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.
You can look up the signature here: https://openchain.xyz/signatures?query=${e}.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEventSignatureNotFoundError"
                    })
                }
            }
            class b extends a.G {
                constructor(e, {
                    docsPath: t
                } = {}) {
                    super(`Event ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the event exists on it.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiEventNotFoundError"
                    })
                }
            }
            class y extends a.G {
                constructor(e, {
                    docsPath: t
                } = {}) {
                    super(`Function ${e?`"${e}" `:""}not found on ABI.
Make sure you are using the correct ABI and that the function exists on it.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiFunctionNotFoundError"
                    })
                }
            }
            class g extends a.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Function "${e}" does not contain any \`outputs\` on ABI.
Cannot decode function result without knowing what the parameter types are.
Make sure you are using the correct ABI and that the function exists on it.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiFunctionOutputsNotFoundError"
                    })
                }
            }
            class v extends a.G {
                constructor(e, t) {
                    super("Found ambiguous types in overloaded ABI items.", {
                        metaMessages: [`\`${e.type}\` in \`${(0,r.t)(e.abiItem)}\`, and`, `\`${t.type}\` in \`${(0,r.t)(t.abiItem)}\``, "", "These types encode differently and cannot be distinguished at runtime.", "Remove one of the ambiguous items in the ABI."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AbiItemAmbiguityError"
                    })
                }
            }
            class w extends a.G {
                constructor({
                    expectedSize: e,
                    givenSize: t
                }) {
                    super(`Expected bytes${e}, got bytes${t}.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "BytesSizeMismatchError"
                    })
                }
            }
            class P extends a.G {
                constructor({
                    abiItem: e,
                    data: t,
                    params: n,
                    size: i
                }) {
                    super(`Data size of ${i} bytes is too small for non-indexed event parameters.`, {
                        metaMessages: [`Params: (${(0,r.h)(n,{includeName:!0})})`, `Data:   ${t} (${i} bytes)`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "DecodeLogDataMismatch"
                    }), Object.defineProperty(this, "abiItem", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "params", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "size", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.abiItem = e, this.data = t, this.params = n, this.size = i
                }
            }
            class C extends a.G {
                constructor({
                    abiItem: e,
                    param: t
                }) {
                    super(`Expected a topic for indexed event parameter${t.name?` "${t.name}"`:""} on event "${(0,r.t)(e,{includeName:!0})}".`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "DecodeLogTopicsMismatch"
                    }), Object.defineProperty(this, "abiItem", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.abiItem = e
                }
            }
            class x extends a.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Type "${e}" is not a valid encoding type.
Please provide a valid ABI type.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidAbiEncodingType"
                    })
                }
            }
            class O extends a.G {
                constructor(e, {
                    docsPath: t
                }) {
                    super(`Type "${e}" is not a valid decoding type.
Please provide a valid ABI type.`, {
                        docsPath: t
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidAbiDecodingType"
                    })
                }
            }
            class E extends a.G {
                constructor(e) {
                    super(`Value "${e}" is not a valid array.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidArrayError"
                    })
                }
            }
            class S extends a.G {
                constructor(e) {
                    super(`"${e}" is not a valid definition type.
Valid types: "function", "event", "error"`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidDefinitionTypeError"
                    })
                }
            }
        },
        67333: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return i
                }
            });
            var r = n(95950);
            class i extends r.G {
                constructor({
                    docsPath: e
                } = {}) {
                    super("Could not find an Account to execute with this Action.\nPlease provide an Account with the `account` argument on the Action, or by supplying an `account` to the WalletClient.", {
                        docsPath: e,
                        docsSlug: "account"
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "AccountNotFoundError"
                    })
                }
            }
        },
        21485: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return i
                }
            });
            var r = n(95950);
            class i extends r.G {
                constructor({
                    address: e
                }) {
                    super(`Address "${e}" is invalid.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidAddressError"
                    })
                }
            }
        },
        95950: function(e, t, n) {
            n.d(t, {
                G: function() {
                    return i
                }
            });
            var r = n(66291);
            class i extends Error {
                constructor(e, t = {}) {
                    super(), Object.defineProperty(this, "details", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "docsPath", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "metaMessages", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "shortMessage", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ViemError"
                    }), Object.defineProperty(this, "version", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: (0, r.bo)()
                    });
                    let n = t.cause instanceof i ? t.cause.details : t.cause ? .message ? t.cause.message : t.details,
                        a = t.cause instanceof i && t.cause.docsPath || t.docsPath;
                    this.message = [e || "An error occurred.", "", ...t.metaMessages ? [...t.metaMessages, ""] : [], ...a ? [`Docs: https://viem.sh${a}.html${t.docsSlug?`#${t.docsSlug}`:""}`] : [], ...n ? [`Details: ${n}`] : [], `Version: ${this.version}`].join("\n"), t.cause && (this.cause = t.cause), this.details = n, this.docsPath = a, this.metaMessages = t.metaMessages, this.shortMessage = e
                }
                walk(e) {
                    return function e(t, n) {
                        return n ? .(t) ? t : t && "object" == typeof t && "cause" in t ? e(t.cause, n) : n ? null : t
                    }(this, e)
                }
            }
        },
        71492: function(e, t, n) {
            n.d(t, {
                f: function() {
                    return i
                }
            });
            var r = n(95950);
            class i extends r.G {
                constructor({
                    blockHash: e,
                    blockNumber: t
                }) {
                    let n = "Block";
                    e && (n = `Block at hash "${e}"`), t && (n = `Block at number "${t}"`), super(`${n} could not be found.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "BlockNotFoundError"
                    })
                }
            }
        },
        27878: function(e, t, n) {
            n.d(t, {
                Bk: function() {
                    return s
                },
                Yl: function() {
                    return a
                },
                mm: function() {
                    return i
                },
                pZ: function() {
                    return o
                }
            });
            var r = n(95950);
            class i extends r.G {
                constructor({
                    blockNumber: e,
                    chain: t,
                    contract: n
                }) {
                    super(`Chain "${t.name}" does not support contract "${n.name}".`, {
                        metaMessages: ["This could be due to any of the following:", ...e && n.blockCreated && n.blockCreated > e ? [`- The contract "${n.name}" was not deployed until block ${n.blockCreated} (current block ${e}).`] : [`- The chain does not have the contract "${n.name}" configured.`]]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainDoesNotSupportContract"
                    })
                }
            }
            class a extends r.G {
                constructor({
                    chain: e,
                    currentChainId: t
                }) {
                    super(`The current chain of the wallet (id: ${t}) does not match the target chain for the transaction (id: ${e.id} – ${e.name}).`, {
                        metaMessages: [`Current Chain ID:  ${t}`, `Expected Chain ID: ${e.id} – ${e.name}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainMismatchError"
                    })
                }
            }
            class s extends r.G {
                constructor() {
                    super("No chain was provided to the request.\nPlease provide a chain with the `chain` argument on the Action, or by supplying a `chain` to WalletClient."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainNotFoundError"
                    })
                }
            }
            class o extends r.G {
                constructor() {
                    super("No chain was provided to the Client."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ClientChainNotConfiguredError"
                    })
                }
            }
        },
        98458: function(e, t, n) {
            n.d(t, {
                cg: function() {
                    return b
                },
                uq: function() {
                    return y
                },
                Lu: function() {
                    return g
                },
                Dk: function() {
                    return v
                },
                VQ: function() {
                    return w
                }
            });
            var r = n(4832),
                i = n(28483),
                a = n(49039),
                s = n(40928),
                o = n(71891);

            function u({
                abiItem: e,
                args: t,
                includeFunctionName: n = !0,
                includeName: r = !1
            }) {
                if ("name" in e && "inputs" in e && e.inputs) return `${n?e.name:""}(${e.inputs.map((e,n)=>`${r&&e.name?`${e.name}: `:""}${"object"==typeof t[n]?(0,o.P)(t[n]):t[n]}`).join(", ")})`
            }
            var c = n(77804),
                l = n(79352),
                d = n(32421),
                h = n(71878),
                f = n(95950),
                p = n(44818),
                m = n(66291);
            class b extends f.G {
                constructor(e, {
                    account: t,
                    docsPath: n,
                    chain: i,
                    data: a,
                    gas: s,
                    gasPrice: o,
                    maxFeePerGas: u,
                    maxPriorityFeePerGas: c,
                    nonce: h,
                    to: f,
                    value: m
                }) {
                    super(e.shortMessage, {
                        cause: e,
                        docsPath: n,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Raw Call Arguments:", (0, p.xr)({
                            from: (t ? (0, r.T)(t) : void 0) ? .address,
                            to: f,
                            value: void 0 !== m && `${(0,l.d)(m)} ${i?.nativeCurrency?.symbol||"ETH"}`,
                            data: a,
                            gas: s,
                            gasPrice: void 0 !== o && `${(0,d.o)(o)} gwei`,
                            maxFeePerGas: void 0 !== u && `${(0,d.o)(u)} gwei`,
                            maxPriorityFeePerGas: void 0 !== c && `${(0,d.o)(c)} gwei`,
                            nonce: h
                        })].filter(Boolean)
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "CallExecutionError"
                    }), this.cause = e
                }
            }
            class y extends f.G {
                constructor(e, {
                    abi: t,
                    args: n,
                    contractAddress: r,
                    docsPath: i,
                    functionName: a,
                    sender: o
                }) {
                    let l = (0, c.mE)({
                            abi: t,
                            args: n,
                            name: a
                        }),
                        d = l ? u({
                            abiItem: l,
                            args: n,
                            includeFunctionName: !1,
                            includeName: !1
                        }) : void 0;
                    super(e.shortMessage || `An unknown error occurred while executing the contract function "${a}".`, {
                        cause: e,
                        docsPath: i,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Contract Call:", (0, p.xr)({
                            address: r && (0, m.CR)(r),
                            function: l ? (0, s.t)(l, {
                                includeName: !0
                            }) : void 0,
                            args: d && "()" !== d && `${[...Array(a?.length??0).keys()].map(()=>" ").join("")}${d}`,
                            sender: o
                        })].filter(Boolean)
                    }), Object.defineProperty(this, "abi", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "args", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "contractAddress", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "formattedArgs", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "functionName", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "sender", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ContractFunctionExecutionError"
                    }), this.abi = t, this.args = n, this.cause = e, this.contractAddress = r, this.functionName = a, this.sender = o
                }
            }
            class g extends f.G {
                constructor({
                    abi: e,
                    data: t,
                    functionName: n,
                    message: r
                }) {
                    let o, c, l, d, f;
                    if (t && "0x" !== t) try {
                        let {
                            abiItem: n,
                            errorName: r,
                            args: o
                        } = f = (0, a.p)({
                            abi: e,
                            data: t
                        });
                        if ("Error" === r) l = o[0];
                        else if ("Panic" === r) {
                            let [e] = o;
                            l = i.$[e]
                        } else {
                            let e = n ? (0, s.t)(n, {
                                    includeName: !0
                                }) : void 0,
                                t = n && o ? u({
                                    abiItem: n,
                                    args: o,
                                    includeFunctionName: !1,
                                    includeName: !1
                                }) : void 0;
                            c = [e ? `Error: ${e}` : "", t && "()" !== t ? `       ${[...Array(r?.length??0).keys()].map(()=>" ").join("")}${t}` : ""]
                        }
                    } catch (e) {
                        o = e
                    } else r && (l = r);
                    o instanceof h.yP && (d = o.signature, c = [`Unable to decode signature "${d}" as it was not found on the provided ABI.`, "Make sure you are using the correct ABI and that the error exists on it.", `You can look up the decoded signature here: https://openchain.xyz/signatures?query=${d}.`]), super(l && "execution reverted" !== l || d ? [`The contract function "${n}" reverted with the following ${d?"signature":"reason"}:`, l || d].join("\n") : `The contract function "${n}" reverted.`, {
                        cause: o,
                        metaMessages: c
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ContractFunctionRevertedError"
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "reason", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "signature", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = f, this.reason = l, this.signature = d
                }
            }
            class v extends f.G {
                constructor({
                    functionName: e
                }) {
                    super(`The contract function "${e}" returned no data ("0x").`, {
                        metaMessages: ["This could be due to any of the following:", `  - The contract does not have the function "${e}",`, "  - The parameters passed to the contract function may be invalid, or", "  - The address is not a contract."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ContractFunctionZeroDataError"
                    })
                }
            }
            class w extends f.G {
                constructor({
                    data: e,
                    message: t
                }) {
                    super(t || ""), Object.defineProperty(this, "code", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: 3
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "RawContractError"
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = e
                }
            }
        },
        741: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return a
                },
                m: function() {
                    return i
                }
            });
            var r = n(95950);
            class i extends r.G {
                constructor({
                    offset: e,
                    position: t,
                    size: n
                }) {
                    super(`Slice ${"start"===t?"starting":"ending"} at offset "${e}" is out-of-bounds (size: ${n}).`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SliceOffsetOutOfBoundsError"
                    })
                }
            }
            class a extends r.G {
                constructor({
                    size: e,
                    targetSize: t,
                    type: n
                }) {
                    super(`${n.charAt(0).toUpperCase()}${n.slice(1).toLowerCase()} size (${e}) exceeds padding size (${t}).`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SizeExceedsPaddingSizeError"
                    })
                }
            }
        },
        86714: function(e, t, n) {
            n.d(t, {
                Cd: function() {
                    return a
                },
                J5: function() {
                    return i
                },
                M6: function() {
                    return s
                }
            });
            var r = n(95950);
            class i extends r.G {
                constructor({
                    max: e,
                    min: t,
                    signed: n,
                    size: r,
                    value: i
                }) {
                    super(`Number "${i}" is not in safe ${r?`${8*r}-bit ${n?"signed":"unsigned"} `:""}integer range ${e?`(${t} to ${e})`:`(above ${t})`}`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "IntegerOutOfRangeError"
                    })
                }
            }
            class a extends r.G {
                constructor(e) {
                    super(`Hex value "${e}" is not a valid boolean. The hex value must be "0x0" (false) or "0x1" (true).`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidHexBooleanError"
                    })
                }
            }
            class s extends r.G {
                constructor({
                    givenSize: e,
                    maxSize: t
                }) {
                    super(`Size cannot exceed ${t} bytes. Given size: ${e} bytes.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SizeOverflowError"
                    })
                }
            }
        },
        84161: function(e, t, n) {
            n.d(t, {
                Fz: function() {
                    return a
                },
                e5: function() {
                    return s
                },
                ld: function() {
                    return o
                }
            });
            var r = n(32421),
                i = n(95950);
            class a extends i.G {
                constructor() {
                    super("`baseFeeMultiplier` must be greater than 1."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "BaseFeeScalarError"
                    })
                }
            }
            class s extends i.G {
                constructor() {
                    super("Chain does not support EIP-1559 fees."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "Eip1559FeesNotSupportedError"
                    })
                }
            }
            class o extends i.G {
                constructor({
                    maxPriorityFeePerGas: e
                }) {
                    super(`\`maxFeePerGas\` cannot be less than the \`maxPriorityFeePerGas\` (${(0,r.o)(e)} gwei).`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "MaxFeePerGasTooLowError"
                    })
                }
            }
        },
        40009: function(e, t, n) {
            n.d(t, {
                C_: function() {
                    return d
                },
                G$: function() {
                    return o
                },
                Hh: function() {
                    return s
                },
                M_: function() {
                    return a
                },
                WF: function() {
                    return h
                },
                ZI: function() {
                    return u
                },
                cj: function() {
                    return b
                },
                cs: function() {
                    return m
                },
                dR: function() {
                    return f
                },
                pZ: function() {
                    return p
                },
                se: function() {
                    return l
                },
                vU: function() {
                    return c
                }
            });
            var r = n(32421),
                i = n(95950);
            class a extends i.G {
                constructor({
                    cause: e,
                    message: t
                } = {}) {
                    let n = t ? .replace("execution reverted: ", "") ? .replace("execution reverted", "");
                    super(`Execution reverted ${n?`with reason: ${n}`:"for an unknown reason"}.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ExecutionRevertedError"
                    })
                }
            }
            Object.defineProperty(a, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 3
            }), Object.defineProperty(a, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /execution reverted/
            });
            class s extends i.G {
                constructor({
                    cause: e,
                    maxFeePerGas: t
                } = {}) {
                    super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,r.o)(t)} gwei`:""}) cannot be higher than the maximum allowed value (2^256-1).`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "FeeCapTooHigh"
                    })
                }
            }
            Object.defineProperty(s, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /max fee per gas higher than 2\^256-1|fee cap higher than 2\^256-1/
            });
            class o extends i.G {
                constructor({
                    cause: e,
                    maxFeePerGas: t
                } = {}) {
                    super(`The fee cap (\`maxFeePerGas\`${t?` = ${(0,r.o)(t)}`:""} gwei) cannot be lower than the block base fee.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "FeeCapTooLow"
                    })
                }
            }
            Object.defineProperty(o, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /max fee per gas less than block base fee|fee cap less than block base fee|transaction is outdated/
            });
            class u extends i.G {
                constructor({
                    cause: e,
                    nonce: t
                } = {}) {
                    super(`Nonce provided for the transaction ${t?`(${t}) `:""}is higher than the next one expected.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "NonceTooHighError"
                    })
                }
            }
            Object.defineProperty(u, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /nonce too high/
            });
            class c extends i.G {
                constructor({
                    cause: e,
                    nonce: t
                } = {}) {
                    super(`Nonce provided for the transaction ${t?`(${t}) `:""}is lower than the current nonce of the account.
Try increasing the nonce or find the latest nonce with \`getTransactionCount\`.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "NonceTooLowError"
                    })
                }
            }
            Object.defineProperty(c, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /nonce too low|transaction already imported|already known/
            });
            class l extends i.G {
                constructor({
                    cause: e,
                    nonce: t
                } = {}) {
                    super(`Nonce provided for the transaction ${t?`(${t}) `:""}exceeds the maximum allowed nonce.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "NonceMaxValueError"
                    })
                }
            }
            Object.defineProperty(l, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /nonce has max value/
            });
            class d extends i.G {
                constructor({
                    cause: e
                } = {}) {
                    super("The total cost (gas * gas fee + value) of executing this transaction exceeds the balance of the account.", {
                        cause: e,
                        metaMessages: ["This error could arise when the account does not have enough funds to:", " - pay for the total gas fee,", " - pay for the value to send.", " ", "The cost of the transaction is calculated as `gas * gas fee + value`, where:", " - `gas` is the amount of gas needed for transaction to execute,", " - `gas fee` is the gas fee,", " - `value` is the amount of ether to send to the recipient."]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InsufficientFundsError"
                    })
                }
            }
            Object.defineProperty(d, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /insufficient funds/
            });
            class h extends i.G {
                constructor({
                    cause: e,
                    gas: t
                } = {}) {
                    super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction exceeds the limit allowed for the block.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "IntrinsicGasTooHighError"
                    })
                }
            }
            Object.defineProperty(h, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /intrinsic gas too high|gas limit reached/
            });
            class f extends i.G {
                constructor({
                    cause: e,
                    gas: t
                } = {}) {
                    super(`The amount of gas ${t?`(${t}) `:""}provided for the transaction is too low.`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "IntrinsicGasTooLowError"
                    })
                }
            }
            Object.defineProperty(f, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /intrinsic gas too low/
            });
            class p extends i.G {
                constructor({
                    cause: e
                }) {
                    super("The transaction type is not supported for this chain.", {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TransactionTypeNotSupportedError"
                    })
                }
            }
            Object.defineProperty(p, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /transaction type not valid/
            });
            class m extends i.G {
                constructor({
                    cause: e,
                    maxPriorityFeePerGas: t,
                    maxFeePerGas: n
                } = {}) {
                    super(`The provided tip (\`maxPriorityFeePerGas\`${t?` = ${(0,r.o)(t)} gwei`:""}) cannot be higher than the fee cap (\`maxFeePerGas\`${n?` = ${(0,r.o)(n)} gwei`:""}).`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TipAboveFeeCapError"
                    })
                }
            }
            Object.defineProperty(m, "nodeMessage", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: /max priority fee per gas higher than max fee per gas|tip higher than fee cap/
            });
            class b extends i.G {
                constructor({
                    cause: e
                }) {
                    super(`An error occurred while executing: ${e?.shortMessage}`, {
                        cause: e
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnknownNodeError"
                    })
                }
            }
        },
        20722: function(e, t, n) {
            n.d(t, {
                Gg: function() {
                    return s
                },
                W5: function() {
                    return c
                },
                bs: function() {
                    return u
                },
                c9: function() {
                    return o
                }
            });
            var r = n(71891),
                i = n(95950),
                a = n(66291);
            class s extends i.G {
                constructor({
                    body: e,
                    details: t,
                    headers: n,
                    status: i,
                    url: s
                }) {
                    super("HTTP request failed.", {
                        details: t,
                        metaMessages: [i && `Status: ${i}`, `URL: ${(0,a.Gr)(s)}`, e && `Request body: ${(0,r.P)(e)}`].filter(Boolean)
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "HttpRequestError"
                    }), Object.defineProperty(this, "body", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "headers", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "status", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "url", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.body = e, this.headers = n, this.status = i, this.url = s
                }
            }
            class o extends i.G {
                constructor({
                    body: e,
                    details: t,
                    url: n
                }) {
                    super("WebSocket request failed.", {
                        details: t,
                        metaMessages: [`URL: ${(0,a.Gr)(n)}`, `Request body: ${(0,r.P)(e)}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "WebSocketRequestError"
                    })
                }
            }
            class u extends i.G {
                constructor({
                    body: e,
                    error: t,
                    url: n
                }) {
                    super("RPC Request failed.", {
                        cause: t,
                        details: t.message,
                        metaMessages: [`URL: ${(0,a.Gr)(n)}`, `Request body: ${(0,r.P)(e)}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "RpcRequestError"
                    }), Object.defineProperty(this, "code", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.code = t.code
                }
            }
            class c extends i.G {
                constructor({
                    body: e,
                    url: t
                }) {
                    super("The request took too long to respond.", {
                        details: "The request timed out.",
                        metaMessages: [`URL: ${(0,a.Gr)(t)}`, `Request body: ${(0,r.P)(e)}`]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TimeoutError"
                    })
                }
            }
        },
        48519: function(e, t, n) {
            n.d(t, {
                B: function() {
                    return u
                },
                GD: function() {
                    return g
                },
                I0: function() {
                    return x
                },
                KB: function() {
                    return m
                },
                LX: function() {
                    return c
                },
                Og: function() {
                    return f
                },
                PE: function() {
                    return w
                },
                Pv: function() {
                    return y
                },
                Ts: function() {
                    return P
                },
                XS: function() {
                    return d
                },
                ab: function() {
                    return v
                },
                gS: function() {
                    return b
                },
                ir: function() {
                    return E
                },
                nY: function() {
                    return l
                },
                pT: function() {
                    return p
                },
                s7: function() {
                    return o
                },
                u5: function() {
                    return C
                },
                x3: function() {
                    return O
                },
                yR: function() {
                    return h
                }
            });
            var r = n(95950),
                i = n(20722);
            class a extends r.G {
                constructor(e, {
                    code: t,
                    docsPath: n,
                    metaMessages: r,
                    shortMessage: a
                }) {
                    super(a, {
                        cause: e,
                        docsPath: n,
                        metaMessages: r || e ? .metaMessages
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "RpcError"
                    }), Object.defineProperty(this, "code", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.name = e.name, this.code = e instanceof i.bs ? e.code : t ? ? -1
                }
            }
            class s extends a {
                constructor(e, t) {
                    super(e, t), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ProviderRpcError"
                    }), Object.defineProperty(this, "data", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), this.data = t.data
                }
            }
            class o extends a {
                constructor(e) {
                    super(e, {
                        code: o.code,
                        shortMessage: "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ParseRpcError"
                    })
                }
            }
            Object.defineProperty(o, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32700
            });
            class u extends a {
                constructor(e) {
                    super(e, {
                        code: u.code,
                        shortMessage: "JSON is not a valid request object."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidRequestRpcError"
                    })
                }
            }
            Object.defineProperty(u, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32600
            });
            class c extends a {
                constructor(e) {
                    super(e, {
                        code: c.code,
                        shortMessage: "The method does not exist / is not available."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "MethodNotFoundRpcError"
                    })
                }
            }
            Object.defineProperty(c, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32601
            });
            class l extends a {
                constructor(e) {
                    super(e, {
                        code: l.code,
                        shortMessage: "Invalid parameters were provided to the RPC method.\nDouble check you have provided the correct parameters."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidParamsRpcError"
                    })
                }
            }
            Object.defineProperty(l, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32602
            });
            class d extends a {
                constructor(e) {
                    super(e, {
                        code: d.code,
                        shortMessage: "An internal error was received."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InternalRpcError"
                    })
                }
            }
            Object.defineProperty(d, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32603
            });
            class h extends a {
                constructor(e) {
                    super(e, {
                        code: h.code,
                        shortMessage: "Missing or invalid parameters.\nDouble check you have provided the correct parameters."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidInputRpcError"
                    })
                }
            }
            Object.defineProperty(h, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32e3
            });
            class f extends a {
                constructor(e) {
                    super(e, {
                        code: f.code,
                        shortMessage: "Requested resource not found."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ResourceNotFoundRpcError"
                    })
                }
            }
            Object.defineProperty(f, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32001
            });
            class p extends a {
                constructor(e) {
                    super(e, {
                        code: p.code,
                        shortMessage: "Requested resource not available."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ResourceUnavailableRpcError"
                    })
                }
            }
            Object.defineProperty(p, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32002
            });
            class m extends a {
                constructor(e) {
                    super(e, {
                        code: m.code,
                        shortMessage: "Transaction creation failed."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TransactionRejectedRpcError"
                    })
                }
            }
            Object.defineProperty(m, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32003
            });
            class b extends a {
                constructor(e) {
                    super(e, {
                        code: b.code,
                        shortMessage: "Method is not implemented."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "MethodNotSupportedRpcError"
                    })
                }
            }
            Object.defineProperty(b, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32004
            });
            class y extends a {
                constructor(e) {
                    super(e, {
                        code: y.code,
                        shortMessage: "Request exceeds defined limit."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "LimitExceededRpcError"
                    })
                }
            }
            Object.defineProperty(y, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32005
            });
            class g extends a {
                constructor(e) {
                    super(e, {
                        code: g.code,
                        shortMessage: "Version of JSON-RPC protocol is not supported."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "JsonRpcVersionUnsupportedError"
                    })
                }
            }
            Object.defineProperty(g, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: -32006
            });
            class v extends s {
                constructor(e) {
                    super(e, {
                        code: v.code,
                        shortMessage: "User rejected the request."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UserRejectedRequestError"
                    })
                }
            }
            Object.defineProperty(v, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4001
            });
            class w extends s {
                constructor(e) {
                    super(e, {
                        code: w.code,
                        shortMessage: "The requested method and/or account has not been authorized by the user."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnauthorizedProviderError"
                    })
                }
            }
            Object.defineProperty(w, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4100
            });
            class P extends s {
                constructor(e) {
                    super(e, {
                        code: P.code,
                        shortMessage: "The Provider does not support the requested method."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnsupportedProviderMethodError"
                    })
                }
            }
            Object.defineProperty(P, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4200
            });
            class C extends s {
                constructor(e) {
                    super(e, {
                        code: C.code,
                        shortMessage: "The Provider is disconnected from all chains."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ProviderDisconnectedError"
                    })
                }
            }
            Object.defineProperty(C, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4900
            });
            class x extends s {
                constructor(e) {
                    super(e, {
                        code: x.code,
                        shortMessage: "The Provider is not connected to the requested chain."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "ChainDisconnectedError"
                    })
                }
            }
            Object.defineProperty(x, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4901
            });
            class O extends s {
                constructor(e) {
                    super(e, {
                        code: O.code,
                        shortMessage: "An error occurred when attempting to switch chain."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "SwitchChainError"
                    })
                }
            }
            Object.defineProperty(O, "code", {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: 4902
            });
            class E extends a {
                constructor(e) {
                    super(e, {
                        shortMessage: "An unknown RPC error occurred."
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "UnknownRpcError"
                    })
                }
            }
        },
        44818: function(e, t, n) {
            n.d(t, {
                Bh: function() {
                    return l
                },
                Yb: function() {
                    return d
                },
                j3: function() {
                    return u
                },
                mc: function() {
                    return h
                },
                mk: function() {
                    return c
                },
                xY: function() {
                    return o
                },
                xr: function() {
                    return s
                }
            });
            var r = n(79352),
                i = n(32421),
                a = n(95950);

            function s(e) {
                let t = Object.entries(e).map(([e, t]) => void 0 === t || !1 === t ? null : [e, t]).filter(Boolean),
                    n = t.reduce((e, [t]) => Math.max(e, t.length), 0);
                return t.map(([e, t]) => `  ${`${e}:`.padEnd(n+1)}  ${t}`).join("\n")
            }
            class o extends a.G {
                constructor() {
                    super("Cannot specify both a `gasPrice` and a `maxFeePerGas`/`maxPriorityFeePerGas`.\nUse `maxFeePerGas`/`maxPriorityFeePerGas` for EIP-1559 compatible networks, and `gasPrice` for others."), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "FeeConflictError"
                    })
                }
            }
            class u extends a.G {
                constructor({
                    transaction: e
                }) {
                    super("Cannot infer a transaction type from provided transaction.", {
                        metaMessages: ["Provided Transaction:", "{", s(e), "}", "", "To infer the type, either provide:", "- a `type` to the Transaction, or", "- an EIP-1559 Transaction with `maxFeePerGas`, or", "- an EIP-2930 Transaction with `gasPrice` & `accessList`, or", "- a Legacy Transaction with `gasPrice`"]
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "InvalidSerializableTransactionError"
                    })
                }
            }
            class c extends a.G {
                constructor(e, {
                    account: t,
                    docsPath: n,
                    chain: a,
                    data: o,
                    gas: u,
                    gasPrice: c,
                    maxFeePerGas: l,
                    maxPriorityFeePerGas: d,
                    nonce: h,
                    to: f,
                    value: p
                }) {
                    super(e.shortMessage, {
                        cause: e,
                        docsPath: n,
                        metaMessages: [...e.metaMessages ? [...e.metaMessages, " "] : [], "Request Arguments:", s({
                            chain: a && `${a?.name} (id: ${a?.id})`,
                            from: t ? .address,
                            to: f,
                            value: void 0 !== p && `${(0,r.d)(p)} ${a?.nativeCurrency?.symbol||"ETH"}`,
                            data: o,
                            gas: u,
                            gasPrice: void 0 !== c && `${(0,i.o)(c)} gwei`,
                            maxFeePerGas: void 0 !== l && `${(0,i.o)(l)} gwei`,
                            maxPriorityFeePerGas: void 0 !== d && `${(0,i.o)(d)} gwei`,
                            nonce: h
                        })].filter(Boolean)
                    }), Object.defineProperty(this, "cause", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: void 0
                    }), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TransactionExecutionError"
                    }), this.cause = e
                }
            }
            class l extends a.G {
                constructor({
                    blockHash: e,
                    blockNumber: t,
                    blockTag: n,
                    hash: r,
                    index: i
                }) {
                    let a = "Transaction";
                    n && void 0 !== i && (a = `Transaction at block time "${n}" at index "${i}"`), e && void 0 !== i && (a = `Transaction at block hash "${e}" at index "${i}"`), t && void 0 !== i && (a = `Transaction at block number "${t}" at index "${i}"`), r && (a = `Transaction with hash "${r}"`), super(`${a} could not be found.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TransactionNotFoundError"
                    })
                }
            }
            class d extends a.G {
                constructor({
                    hash: e
                }) {
                    super(`Transaction receipt with hash "${e}" could not be found. The Transaction may not be processed on a block yet.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "TransactionReceiptNotFoundError"
                    })
                }
            }
            class h extends a.G {
                constructor({
                    hash: e
                }) {
                    super(`Timed out while waiting for transaction with hash "${e}" to be confirmed.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "WaitForTransactionReceiptTimeoutError"
                    })
                }
            }
        },
        66291: function(e, t, n) {
            n.d(t, {
                CR: function() {
                    return r
                },
                Gr: function() {
                    return i
                },
                bo: function() {
                    return a
                }
            });
            let r = e => e,
                i = e => e,
                a = () => "viem@1.19.12"
        },
        87425: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return l
                }
            });
            var r = n(71878),
                i = n(39803),
                a = n(39868),
                s = n(72619),
                o = n(94973),
                u = n(30838),
                c = n(90929);

            function l(e, t) {
                if ("0x" === t && e.length > 0) throw new r.wb;
                if ((0, a.d)(t) && 32 > (0, a.d)(t)) throw new r.xB({
                    data: t,
                    params: e,
                    size: (0, a.d)(t)
                });
                return function({
                    data: e,
                    params: t
                }) {
                    let n = [],
                        l = 0;
                    for (let h = 0; h < t.length; h++) {
                        if (l >= (0, a.d)(e)) throw new r.xB({
                            data: e,
                            params: t,
                            size: (0, a.d)(e)
                        });
                        let {
                            consumed: f,
                            value: p
                        } = function e({
                            data: t,
                            param: n,
                            position: a
                        }) {
                            let l = (0, c.S)(n.type);
                            if (l) {
                                let [r, i] = l;
                                return function(t, {
                                    param: n,
                                    length: r,
                                    position: i
                                }) {
                                    if (!r) {
                                        let r = (0, u.ly)((0, s.tP)(t, i, i + 32, {
                                                strict: !0
                                            })),
                                            a = (0, u.ly)((0, s.tP)(t, r, r + 32, {
                                                strict: !0
                                            })),
                                            o = 0,
                                            c = [];
                                        for (let i = 0; i < a; ++i) {
                                            let i = e({
                                                data: (0, s.tP)(t, r + 32),
                                                param: n,
                                                position: o
                                            });
                                            o += i.consumed, c.push(i.value)
                                        }
                                        return {
                                            value: c,
                                            consumed: 32
                                        }
                                    }
                                    if (d(n)) {
                                        let a = (0, c.S)(n.type),
                                            o = !a ? .[0],
                                            l = 0,
                                            d = [];
                                        for (let a = 0; a < r; ++a) {
                                            let r = (0, u.ly)((0, s.tP)(t, i, i + 32, {
                                                    strict: !0
                                                })),
                                                c = e({
                                                    data: (0, s.tP)(t, r),
                                                    param: n,
                                                    position: o ? l : 32 * a
                                                });
                                            l += c.consumed, d.push(c.value)
                                        }
                                        return {
                                            value: d,
                                            consumed: 32
                                        }
                                    }
                                    let a = 0,
                                        o = [];
                                    for (let s = 0; s < r; ++s) {
                                        let r = e({
                                            data: t,
                                            param: n,
                                            position: i + a
                                        });
                                        a += r.consumed, o.push(r.value)
                                    }
                                    return {
                                        value: o,
                                        consumed: a
                                    }
                                }(t, {
                                    length: r,
                                    param: { ...n,
                                        type: i
                                    },
                                    position: a
                                })
                            }
                            if ("tuple" === n.type) return function(t, {
                                param: n,
                                position: r
                            }) {
                                let i = 0 === n.components.length || n.components.some(({
                                        name: e
                                    }) => !e),
                                    a = i ? [] : {},
                                    o = 0;
                                if (d(n)) {
                                    let c = (0, u.ly)((0, s.tP)(t, r, r + 32, {
                                        strict: !0
                                    }));
                                    for (let r = 0; r < n.components.length; ++r) {
                                        let u = n.components[r],
                                            l = e({
                                                data: (0, s.tP)(t, c),
                                                param: u,
                                                position: o
                                            });
                                        o += l.consumed, a[i ? r : u ? .name] = l.value
                                    }
                                    return {
                                        consumed: 32,
                                        value: a
                                    }
                                }
                                for (let s = 0; s < n.components.length; ++s) {
                                    let u = n.components[s],
                                        c = e({
                                            data: t,
                                            param: u,
                                            position: r + o
                                        });
                                    o += c.consumed, a[i ? s : u ? .name] = c.value
                                }
                                return {
                                    consumed: o,
                                    value: a
                                }
                            }(t, {
                                param: n,
                                position: a
                            });
                            if ("string" === n.type) return function(e, {
                                position: t
                            }) {
                                let n = (0, u.ly)((0, s.tP)(e, t, t + 32, {
                                        strict: !0
                                    })),
                                    r = (0, u.ly)((0, s.tP)(e, n, n + 32, {
                                        strict: !0
                                    }));
                                return 0 === r ? {
                                    consumed: 32,
                                    value: ""
                                } : {
                                    consumed: 32,
                                    value: (0, u.rR)((0, o.f)((0, s.tP)(e, n + 32, n + 32 + r, {
                                        strict: !0
                                    })))
                                }
                            }(t, {
                                position: a
                            });
                            if (n.type.startsWith("bytes")) return function(e, {
                                param: t,
                                position: n
                            }) {
                                let [r, i] = t.type.split("bytes");
                                if (!i) {
                                    let t = (0, u.ly)((0, s.tP)(e, n, n + 32, {
                                            strict: !0
                                        })),
                                        r = (0, u.ly)((0, s.tP)(e, t, t + 32, {
                                            strict: !0
                                        }));
                                    return 0 === r ? {
                                        consumed: 32,
                                        value: "0x"
                                    } : {
                                        consumed: 32,
                                        value: (0, s.tP)(e, t + 32, t + 32 + r, {
                                            strict: !0
                                        })
                                    }
                                }
                                return {
                                    consumed: 32,
                                    value: (0, s.tP)(e, n, n + parseInt(i), {
                                        strict: !0
                                    })
                                }
                            }(t, {
                                param: n,
                                position: a
                            });
                            let h = (0, s.tP)(t, a, a + 32, {
                                strict: !0
                            });
                            if (n.type.startsWith("uint") || n.type.startsWith("int")) return function(e, {
                                param: t
                            }) {
                                let n = t.type.startsWith("int");
                                return {
                                    consumed: 32,
                                    value: parseInt(t.type.split("int")[1] || "256") > 48 ? (0, u.y_)(e, {
                                        signed: n
                                    }) : (0, u.ly)(e, {
                                        signed: n
                                    })
                                }
                            }(h, {
                                param: n
                            });
                            if ("address" === n.type) return {
                                consumed: 32,
                                value: (0, i.x)((0, s.tP)(h, -20))
                            };
                            if ("bool" === n.type) return {
                                consumed: 32,
                                value: (0, u.XA)(h)
                            };
                            throw new r.CI(n.type, {
                                docsPath: "/docs/contract/decodeAbiParameters"
                            })
                        }({
                            data: e,
                            param: t[h],
                            position: l
                        });
                        n.push(p), l += f
                    }
                    return n
                }({
                    data: t,
                    params: e
                })
            }

            function d(e) {
                let {
                    type: t
                } = e;
                if ("string" === t || "bytes" === t || t.endsWith("[]")) return !0;
                if ("tuple" === t) return e.components ? .some(d);
                let n = (0, c.S)(e.type);
                return !!(n && d({ ...e,
                    type: n[1]
                }))
            }
        },
        49039: function(e, t, n) {
            n.d(t, {
                p: function() {
                    return c
                }
            });
            var r = n(28483),
                i = n(71878),
                a = n(72619),
                s = n(33655),
                o = n(87425),
                u = n(40928);

            function c({
                abi: e,
                data: t
            }) {
                let n = (0, a.tP)(t, 0, 4);
                if ("0x" === n) throw new i.wb;
                let c = [...e || [], r.Up, r.hZ].find(e => "error" === e.type && n === (0, s.o)((0, u.t)(e)));
                if (!c) throw new i.yP(n, {
                    docsPath: "/docs/contract/decodeErrorResult"
                });
                return {
                    abiItem: c,
                    args: "inputs" in c && c.inputs && c.inputs.length > 0 ? (0, o.r)(c.inputs, (0, a.tP)(t, 4)) : void 0,
                    errorName: c.name
                }
            }
        },
        63610: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return u
                }
            });
            var r = n(71878),
                i = n(77688),
                a = n(87425),
                s = n(40928);
            let o = "/docs/contract/decodeEventLog";

            function u({
                abi: e,
                data: t,
                strict: n,
                topics: u
            }) {
                let c = n ? ? !0,
                    [l, ...d] = u;
                if (!l) throw new r.FM({
                    docsPath: o
                });
                let h = e.find(e => "event" === e.type && l === (0, i.e)((0, s.t)(e)));
                if (!(h && "name" in h) || "event" !== h.type) throw new r.lC(l, {
                    docsPath: o
                });
                let {
                    name: f,
                    inputs: p
                } = h, m = p ? .some(e => !("name" in e && e.name)), b = m ? [] : {}, y = p.filter(e => "indexed" in e && e.indexed);
                for (let e = 0; e < y.length; e++) {
                    let t = y[e],
                        n = d[e];
                    if (!n) throw new r.Gy({
                        abiItem: h,
                        param: t
                    });
                    b[t.name || e] = function({
                        param: e,
                        value: t
                    }) {
                        return "string" === e.type || "bytes" === e.type || "tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/) ? t : ((0, a.r)([e], t) || [])[0]
                    }({
                        param: t,
                        value: n
                    })
                }
                let g = p.filter(e => !("indexed" in e && e.indexed));
                if (g.length > 0) {
                    if (t && "0x" !== t) try {
                        let e = (0, a.r)(g, t);
                        if (e) {
                            if (m) b = [...b, ...e];
                            else
                                for (let t = 0; t < g.length; t++) b[g[t].name] = e[t]
                        }
                    } catch (e) {
                        if (c) {
                            if (e instanceof r.xB) throw new r.SM({
                                abiItem: h,
                                data: e.data,
                                params: e.params,
                                size: e.size
                            });
                            throw e
                        }
                    } else if (c) throw new r.SM({
                        abiItem: h,
                        data: "0x",
                        params: g,
                        size: 0
                    })
                }
                return {
                    eventName: f,
                    args: Object.values(b).length > 0 ? b : void 0
                }
            }
        },
        3458: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return o
                }
            });
            var r = n(71878),
                i = n(87425),
                a = n(77804);
            let s = "/docs/contract/decodeFunctionResult";

            function o({
                abi: e,
                args: t,
                functionName: n,
                data: o
            }) {
                let u = e[0];
                if (n && !(u = (0, a.mE)({
                        abi: e,
                        args: t,
                        name: n
                    }))) throw new r.xL(n, {
                    docsPath: s
                });
                if ("function" !== u.type) throw new r.xL(void 0, {
                    docsPath: s
                });
                if (!u.outputs) throw new r.MX(u.name, {
                    docsPath: s
                });
                let c = (0, i.r)(u.outputs, o);
                return c && c.length > 1 ? c : c && 1 === c.length ? c[0] : void 0
            }
        },
        90929: function(e, t, n) {
            n.d(t, {
                E: function() {
                    return d
                },
                S: function() {
                    return f
                }
            });
            var r = n(71878),
                i = n(21485),
                a = n(87364),
                s = n(69809),
                o = n(99725),
                u = n(39868),
                c = n(72619),
                l = n(21693);

            function d(e, t) {
                if (e.length !== t.length) throw new r.fs({
                    expectedLength: e.length,
                    givenLength: t.length
                });
                let n = h(function({
                    params: e,
                    values: t
                }) {
                    let n = [];
                    for (let d = 0; d < e.length; d++) n.push(function e({
                        param: t,
                        value: n
                    }) {
                        let d = f(t.type);
                        if (d) {
                            let [i, a] = d;
                            return function(t, {
                                length: n,
                                param: i
                            }) {
                                let a = null === n;
                                if (!Array.isArray(t)) throw new r.hn(t);
                                if (!a && t.length !== n) throw new r.gr({
                                    expectedLength: n,
                                    givenLength: t.length,
                                    type: `${i.type}[${n}]`
                                });
                                let o = !1,
                                    u = [];
                                for (let n = 0; n < t.length; n++) {
                                    let r = e({
                                        param: i,
                                        value: t[n]
                                    });
                                    r.dynamic && (o = !0), u.push(r)
                                }
                                if (a || o) {
                                    let e = h(u);
                                    if (a) {
                                        let t = (0, l.eC)(u.length, {
                                            size: 32
                                        });
                                        return {
                                            dynamic: !0,
                                            encoded: u.length > 0 ? (0, s.zo)([t, e]) : t
                                        }
                                    }
                                    if (o) return {
                                        dynamic: !0,
                                        encoded: e
                                    }
                                }
                                return {
                                    dynamic: !1,
                                    encoded: (0, s.zo)(u.map(({
                                        encoded: e
                                    }) => e))
                                }
                            }(n, {
                                length: i,
                                param: { ...t,
                                    type: a
                                }
                            })
                        }
                        if ("tuple" === t.type) return function(t, {
                            param: n
                        }) {
                            let r = !1,
                                i = [];
                            for (let a = 0; a < n.components.length; a++) {
                                let s = n.components[a],
                                    o = Array.isArray(t) ? a : s.name,
                                    u = e({
                                        param: s,
                                        value: t[o]
                                    });
                                i.push(u), u.dynamic && (r = !0)
                            }
                            return {
                                dynamic: r,
                                encoded: r ? h(i) : (0, s.zo)(i.map(({
                                    encoded: e
                                }) => e))
                            }
                        }(n, {
                            param: t
                        });
                        if ("address" === t.type) return function(e) {
                            if (!(0, a.U)(e)) throw new i.b({
                                address: e
                            });
                            return {
                                dynamic: !1,
                                encoded: (0, o.gc)(e.toLowerCase())
                            }
                        }(n);
                        if ("bool" === t.type) return {
                            dynamic: !1,
                            encoded: (0, o.gc)((0, l.C4)(n))
                        };
                        if (t.type.startsWith("uint") || t.type.startsWith("int")) return function(e, {
                            signed: t
                        }) {
                            return {
                                dynamic: !1,
                                encoded: (0, l.eC)(e, {
                                    size: 32,
                                    signed: t
                                })
                            }
                        }(n, {
                            signed: t.type.startsWith("int")
                        });
                        if (t.type.startsWith("bytes")) return function(e, {
                            param: t
                        }) {
                            let [, n] = t.type.split("bytes"), i = (0, u.d)(e);
                            if (!n) {
                                let t = e;
                                return i % 32 != 0 && (t = (0, o.gc)(t, {
                                    dir: "right",
                                    size: 32 * Math.ceil((e.length - 2) / 2 / 32)
                                })), {
                                    dynamic: !0,
                                    encoded: (0, s.zo)([(0, o.gc)((0, l.eC)(i, {
                                        size: 32
                                    })), t])
                                }
                            }
                            if (i !== parseInt(n)) throw new r.M4({
                                expectedSize: parseInt(n),
                                value: e
                            });
                            return {
                                dynamic: !1,
                                encoded: (0, o.gc)(e, {
                                    dir: "right"
                                })
                            }
                        }(n, {
                            param: t
                        });
                        if ("string" === t.type) return function(e) {
                            let t = (0, l.$G)(e),
                                n = Math.ceil((0, u.d)(t) / 32),
                                r = [];
                            for (let e = 0; e < n; e++) r.push((0, o.gc)((0, c.tP)(t, 32 * e, (e + 1) * 32), {
                                dir: "right"
                            }));
                            return {
                                dynamic: !0,
                                encoded: (0, s.zo)([(0, o.gc)((0, l.eC)((0, u.d)(t), {
                                    size: 32
                                })), ...r])
                            }
                        }(n);
                        throw new r.dh(t.type, {
                            docsPath: "/docs/contract/encodeAbiParameters"
                        })
                    }({
                        param: e[d],
                        value: t[d]
                    }));
                    return n
                }({
                    params: e,
                    values: t
                }));
                return 0 === n.length ? "0x" : n
            }

            function h(e) {
                let t = 0;
                for (let n = 0; n < e.length; n++) {
                    let {
                        dynamic: r,
                        encoded: i
                    } = e[n];
                    r ? t += 32 : t += (0, u.d)(i)
                }
                let n = [],
                    r = [],
                    i = 0;
                for (let a = 0; a < e.length; a++) {
                    let {
                        dynamic: s,
                        encoded: o
                    } = e[a];
                    s ? (n.push((0, l.eC)(t + i, {
                        size: 32
                    })), r.push(o), i += (0, u.d)(o)) : n.push(o)
                }
                return (0, s.zo)([...n, ...r])
            }

            function f(e) {
                let t = e.match(/^(.*)\[(\d+)?\]$/);
                return t ? [t[2] ? Number(t[2]) : null, t[1]] : void 0
            }
        },
        12732: function(e, t, n) {
            n.d(t, {
                w: function() {
                    return o
                }
            });
            var r = n(71878),
                i = n(69809),
                a = n(90929);
            let s = "/docs/contract/encodeDeployData";

            function o({
                abi: e,
                args: t,
                bytecode: n
            }) {
                if (!t || 0 === t.length) return n;
                let o = e.find(e => "type" in e && "constructor" === e.type);
                if (!o) throw new r.fM({
                    docsPath: s
                });
                if (!("inputs" in o) || !o.inputs || 0 === o.inputs.length) throw new r.cO({
                    docsPath: s
                });
                let u = (0, a.E)(o.inputs, t);
                return (0, i.SM)([n, u])
            }
        },
        38789: function(e, t, n) {
            n.d(t, {
                O: function() {
                    return h
                }
            });
            var r = n(71878),
                i = n(95950);
            class a extends i.G {
                constructor(e) {
                    super(`Filter type "${e}" is not supported.`), Object.defineProperty(this, "name", {
                        enumerable: !0,
                        configurable: !0,
                        writable: !0,
                        value: "FilterTypeNotSupportedError"
                    })
                }
            }
            var s = n(56728),
                o = n(77688),
                u = n(89563),
                c = n(90929),
                l = n(40928),
                d = n(77804);

            function h({
                abi: e,
                eventName: t,
                args: n
            }) {
                let i = e[0];
                if (t && !(i = (0, d.mE)({
                        abi: e,
                        args: n,
                        name: t
                    }))) throw new r.mv(t, {
                    docsPath: "/docs/contract/encodeEventTopics"
                });
                if ("event" !== i.type) throw new r.mv(void 0, {
                    docsPath: "/docs/contract/encodeEventTopics"
                });
                let a = (0, l.t)(i),
                    s = (0, o.e)(a),
                    u = [];
                if (n && "inputs" in i) {
                    let e = i.inputs ? .filter(e => "indexed" in e && e.indexed),
                        t = Array.isArray(n) ? n : Object.values(n).length > 0 ? e ? .map(e => n[e.name]) ? ? [] : [];
                    t.length > 0 && (u = e ? .map((e, n) => Array.isArray(t[n]) ? t[n].map((r, i) => f({
                        param: e,
                        value: t[n][i]
                    })) : t[n] ? f({
                        param: e,
                        value: t[n]
                    }) : null) ? ? [])
                }
                return [s, ...u]
            }

            function f({
                param: e,
                value: t
            }) {
                if ("string" === e.type || "bytes" === e.type) return (0, u.w)((0, s.O0)(t));
                if ("tuple" === e.type || e.type.match(/^(.*)\[(\d+)?\]$/)) throw new a(e.type);
                return (0, c.E)([e], [t])
            }
        },
        53883: function(e, t, n) {
            n.d(t, {
                R: function() {
                    return c
                }
            });
            var r = n(71878),
                i = n(69809),
                a = n(33655),
                s = n(90929),
                o = n(40928),
                u = n(77804);

            function c({
                abi: e,
                args: t,
                functionName: n
            }) {
                let c = e[0];
                if (n && !(c = (0, u.mE)({
                        abi: e,
                        args: t,
                        name: n
                    }))) throw new r.xL(n, {
                    docsPath: "/docs/contract/encodeFunctionData"
                });
                if ("function" !== c.type) throw new r.xL(void 0, {
                    docsPath: "/docs/contract/encodeFunctionData"
                });
                let l = (0, o.t)(c),
                    d = (0, a.o)(l),
                    h = "inputs" in c && c.inputs ? (0, s.E)(c.inputs, t ? ? []) : void 0;
                return (0, i.SM)([d, h ? ? "0x"])
            }
        },
        40928: function(e, t, n) {
            n.d(t, {
                h: function() {
                    return a
                },
                t: function() {
                    return i
                }
            });
            var r = n(71878);

            function i(e, {
                includeName: t = !1
            } = {}) {
                if ("function" !== e.type && "event" !== e.type && "error" !== e.type) throw new r.wM(e.type);
                return `${e.name}(${a(e.inputs,{includeName:t})})`
            }

            function a(e, {
                includeName: t = !1
            } = {}) {
                return e ? e.map(e => (function(e, {
                    includeName: t
                }) {
                    return e.type.startsWith("tuple") ? `(${a(e.components,{includeName:t})})${e.type.slice(5)}` : e.type + (t && e.name ? ` ${e.name}` : "")
                })(e, {
                    includeName: t
                })).join(t ? ", " : ",") : ""
            }
        },
        77804: function(e, t, n) {
            n.d(t, {
                mE: function() {
                    return u
                }
            });
            var r = n(71878),
                i = n(45008),
                a = n(77688),
                s = n(33655),
                o = n(87364);

            function u({
                abi: e,
                args: t = [],
                name: n
            }) {
                let u;
                let c = (0, i.v)(n, {
                        strict: !1
                    }),
                    l = e.filter(e => c ? "function" === e.type ? (0, s.o)(e) === n : "event" === e.type && (0, a.e)(e) === n : "name" in e && e.name === n);
                if (0 !== l.length) {
                    if (1 === l.length) return l[0];
                    for (let e of l)
                        if ("inputs" in e) {
                            if (!t || 0 === t.length) {
                                if (!e.inputs || 0 === e.inputs.length) return e;
                                continue
                            }
                            if (e.inputs && 0 !== e.inputs.length && e.inputs.length === t.length && t.every((t, n) => {
                                    let r = "inputs" in e && e.inputs[n];
                                    return !!r && function e(t, n) {
                                        let r = typeof t,
                                            i = n.type;
                                        switch (i) {
                                            case "address":
                                                return (0, o.U)(t);
                                            case "bool":
                                                return "boolean" === r;
                                            case "function":
                                            case "string":
                                                return "string" === r;
                                            default:
                                                if ("tuple" === i && "components" in n) return Object.values(n.components).every((n, r) => e(Object.values(t)[r], n));
                                                if (/^u?int(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/.test(i)) return "number" === r || "bigint" === r;
                                                if (/^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/.test(i)) return "string" === r || t instanceof Uint8Array;
                                                if (/[a-z]+[1-9]{0,3}(\[[0-9]{0,}\])+$/.test(i)) return Array.isArray(t) && t.every(t => e(t, { ...n,
                                                    type: i.replace(/(\[[0-9]{0,}\])$/, "")
                                                }));
                                                return !1
                                        }
                                    }(t, r)
                                })) {
                                if (u && "inputs" in u && u.inputs) {
                                    let n = function e(t, n, r) {
                                        for (let i in t) {
                                            let a = t[i],
                                                s = n[i];
                                            if ("tuple" === a.type && "tuple" === s.type && "components" in a && "components" in s) return e(a.components, s.components, r[i]);
                                            let u = [a.type, s.type];
                                            if (u.includes("address") && u.includes("bytes20") || (u.includes("address") && u.includes("string") || u.includes("address") && u.includes("bytes")) && (0, o.U)(r[i])) return u
                                        }
                                    }(e.inputs, u.inputs, t);
                                    if (n) throw new r.S4({
                                        abiItem: e,
                                        type: n[0]
                                    }, {
                                        abiItem: u,
                                        type: n[1]
                                    })
                                }
                                u = e
                            }
                        }
                    return u || l[0]
                }
            }
        },
        39803: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return u
                },
                x: function() {
                    return o
                }
            });
            var r = n(21485),
                i = n(56728),
                a = n(89563),
                s = n(87364);

            function o(e, t) {
                let n = t ? `${t}${e.toLowerCase()}` : e.substring(2).toLowerCase(),
                    r = (0, a.w)((0, i.qX)(n), "bytes"),
                    s = (t ? n.substring(`${t}0x`.length) : n).split("");
                for (let e = 0; e < 40; e += 2) r[e >> 1] >> 4 >= 8 && s[e] && (s[e] = s[e].toUpperCase()), (15 & r[e >> 1]) >= 8 && s[e + 1] && (s[e + 1] = s[e + 1].toUpperCase());
                return `0x${s.join("")}`
            }

            function u(e, t) {
                if (!(0, s.U)(e)) throw new r.b({
                    address: e
                });
                return o(e, t)
            }
        },
        87364: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return i
                }
            });
            let r = /^0x[a-fA-F0-9]{40}$/;

            function i(e) {
                return r.test(e)
            }
        },
        35215: function(e, t, n) {
            n.d(t, {
                n: function() {
                    return u
                },
                y: function() {
                    return o
                }
            });
            var r = n(95950),
                i = n(20722),
                a = n(48519),
                s = n(36063);
            let o = e => "code" in e ? -1 !== e.code && -32004 !== e.code && -32005 !== e.code && -32042 !== e.code && -32603 !== e.code : e instanceof i.Gg && !!e.status && 403 !== e.status && 408 !== e.status && 413 !== e.status && 429 !== e.status && 500 !== e.status && 502 !== e.status && 503 !== e.status && 504 !== e.status;

            function u(e, {
                retryDelay: t = 150,
                retryCount: n = 3
            } = {}) {
                return async u => (0, s.J)(async () => {
                    try {
                        return await e(u)
                    } catch (e) {
                        switch (e.code) {
                            case a.s7.code:
                                throw new a.s7(e);
                            case a.B.code:
                                throw new a.B(e);
                            case a.LX.code:
                                throw new a.LX(e);
                            case a.nY.code:
                                throw new a.nY(e);
                            case a.XS.code:
                                throw new a.XS(e);
                            case a.yR.code:
                                throw new a.yR(e);
                            case a.Og.code:
                                throw new a.Og(e);
                            case a.pT.code:
                                throw new a.pT(e);
                            case a.KB.code:
                                throw new a.KB(e);
                            case a.gS.code:
                                throw new a.gS(e);
                            case a.Pv.code:
                                throw new a.Pv(e);
                            case a.GD.code:
                                throw new a.GD(e);
                            case a.ab.code:
                                throw new a.ab(e);
                            case a.PE.code:
                                throw new a.PE(e);
                            case a.Ts.code:
                                throw new a.Ts(e);
                            case a.u5.code:
                                throw new a.u5(e);
                            case a.I0.code:
                                throw new a.I0(e);
                            case a.x3.code:
                                throw new a.x3(e);
                            case 5e3:
                                throw new a.ab(e);
                            default:
                                if (e instanceof r.G) throw e;
                                throw new a.ir(e)
                        }
                    }
                }, {
                    delay: ({
                        count: e,
                        error: n
                    }) => {
                        if (n && n instanceof i.Gg) {
                            let e = n ? .headers ? .get("Retry-After");
                            if (e ? .match(/\d/)) return 1e3 * parseInt(e)
                        }
                        return ~~(1 << e) * t
                    },
                    retryCount: n,
                    shouldRetry: ({
                        error: e
                    }) => !o(e)
                })
            }
        },
        64305: function(e, t, n) {
            n.d(t, {
                q: function() {
                    return i
                }
            });
            var r = n(27878);

            function i({
                chain: e,
                currentChainId: t
            }) {
                if (!e) throw new r.Bk;
                if (t !== e.id) throw new r.Yl({
                    chain: e,
                    currentChainId: t
                })
            }
        },
        71186: function(e, t, n) {
            n.d(t, {
                a: function() {
                    return r
                }
            });

            function r(e, t = {}) {
                let {
                    fees: n = e.fees,
                    formatters: r = e.formatters,
                    serializers: i = e.serializers
                } = t;
                return { ...e,
                    fees: n,
                    formatters: r,
                    serializers: i
                }
            }
        },
        94540: function(e, t, n) {
            n.d(t, {
                L: function() {
                    return i
                }
            });
            var r = n(27878);

            function i({
                blockNumber: e,
                chain: t,
                contract: n
            }) {
                let i = t ? .contracts ? .[n];
                if (!i) throw new r.mm({
                    chain: t,
                    contract: {
                        name: n
                    }
                });
                if (e && i.blockCreated && i.blockCreated > e) throw new r.mm({
                    blockNumber: e,
                    chain: t,
                    contract: {
                        name: n,
                        blockCreated: i.blockCreated
                    }
                });
                return i.address
            }
        },
        69809: function(e, t, n) {
            function r(e) {
                return "string" == typeof e[0] ? i(e) : function(e) {
                    let t = 0;
                    for (let n of e) t += n.length;
                    let n = new Uint8Array(t),
                        r = 0;
                    for (let t of e) n.set(t, r), r += t.length;
                    return n
                }(e)
            }

            function i(e) {
                return `0x${e.reduce((e,t)=>e+t.replace("0x",""),"")}`
            }
            n.d(t, {
                SM: function() {
                    return i
                },
                zo: function() {
                    return r
                }
            })
        },
        45008: function(e, t, n) {
            n.d(t, {
                v: function() {
                    return r
                }
            });

            function r(e, {
                strict: t = !0
            } = {}) {
                return !!e && "string" == typeof e && (t ? /^0x[0-9a-fA-F]*$/.test(e) : e.startsWith("0x"))
            }
        },
        99725: function(e, t, n) {
            n.d(t, {
                gc: function() {
                    return a
                },
                vk: function() {
                    return i
                }
            });
            var r = n(741);

            function i(e, {
                dir: t,
                size: n = 32
            } = {}) {
                return "string" == typeof e ? a(e, {
                    dir: t,
                    size: n
                }) : function(e, {
                    dir: t,
                    size: n = 32
                } = {}) {
                    if (null === n) return e;
                    if (e.length > n) throw new r.$({
                        size: e.length,
                        targetSize: n,
                        type: "bytes"
                    });
                    let i = new Uint8Array(n);
                    for (let r = 0; r < n; r++) {
                        let a = "right" === t;
                        i[a ? r : n - r - 1] = e[a ? r : e.length - r - 1]
                    }
                    return i
                }(e, {
                    dir: t,
                    size: n
                })
            }

            function a(e, {
                dir: t,
                size: n = 32
            } = {}) {
                if (null === n) return e;
                let i = e.replace("0x", "");
                if (i.length > 2 * n) throw new r.$({
                    size: Math.ceil(i.length / 2),
                    targetSize: n,
                    type: "hex"
                });
                return `0x${i["right"===t?"padEnd":"padStart"](2*n,"0")}`
            }
        },
        39868: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return i
                }
            });
            var r = n(45008);

            function i(e) {
                return (0, r.v)(e, {
                    strict: !1
                }) ? Math.ceil((e.length - 2) / 2) : e.length
            }
        },
        72619: function(e, t, n) {
            n.d(t, {
                tP: function() {
                    return s
                }
            });
            var r = n(741),
                i = n(45008),
                a = n(39868);

            function s(e, t, n, {
                strict: r
            } = {}) {
                return (0, i.v)(e, {
                    strict: !1
                }) ? function(e, t, n, {
                    strict: r
                } = {}) {
                    o(e, t);
                    let i = `0x${e.replace("0x","").slice((t??0)*2,(n??e.length)*2)}`;
                    return r && u(i, t, n), i
                }(e, t, n, {
                    strict: r
                }) : function(e, t, n, {
                    strict: r
                } = {}) {
                    o(e, t);
                    let i = e.slice(t, n);
                    return r && u(i, t, n), i
                }(e, t, n, {
                    strict: r
                })
            }

            function o(e, t) {
                if ("number" == typeof t && t > 0 && t > (0, a.d)(e) - 1) throw new r.m({
                    offset: t,
                    position: "start",
                    size: (0, a.d)(e)
                })
            }

            function u(e, t, n) {
                if ("number" == typeof t && "number" == typeof n && (0, a.d)(e) !== n - t) throw new r.m({
                    offset: n,
                    position: "end",
                    size: (0, a.d)(e)
                })
            }
        },
        94973: function(e, t, n) {
            n.d(t, {
                f: function() {
                    return r
                }
            });

            function r(e, {
                dir: t = "left"
            } = {}) {
                let n = "string" == typeof e ? e.replace("0x", "") : e,
                    r = 0;
                for (let e = 0; e < n.length - 1 && "0" === n["left" === t ? e : n.length - e - 1].toString(); e++) r++;
                return (n = "left" === t ? n.slice(r) : n.slice(0, n.length - r), "string" == typeof e) ? (1 === n.length && "right" === t && (n = `${n}0`), `0x${n.length%2==1?`0${n}`:n}`) : n
            }
        },
        30838: function(e, t, n) {
            n.d(t, {
                XA: function() {
                    return c
                },
                Yf: function() {
                    return o
                },
                ly: function() {
                    return l
                },
                rR: function() {
                    return d
                },
                y_: function() {
                    return u
                }
            });
            var r = n(86714),
                i = n(39868),
                a = n(94973),
                s = n(56728);

            function o(e, {
                size: t
            }) {
                if ((0, i.d)(e) > t) throw new r.M6({
                    givenSize: (0, i.d)(e),
                    maxSize: t
                })
            }

            function u(e, t = {}) {
                let {
                    signed: n
                } = t;
                t.size && o(e, {
                    size: t.size
                });
                let r = BigInt(e);
                if (!n) return r;
                let i = (e.length - 2) / 2;
                return r <= (1 n << 8 n * BigInt(i) - 1 n) - 1 n ? r : r - BigInt(`0x${"f".padStart(2*i,"f")}`) - 1 n
            }

            function c(e, t = {}) {
                let n = e;
                if (t.size && (o(n, {
                        size: t.size
                    }), n = (0, a.f)(n)), "0x00" === (0, a.f)(n)) return !1;
                if ("0x01" === (0, a.f)(n)) return !0;
                throw new r.Cd(n)
            }

            function l(e, t = {}) {
                return Number(u(e, t))
            }

            function d(e, t = {}) {
                let n = (0, s.nr)(e);
                return t.size && (o(n, {
                    size: t.size
                }), n = (0, a.f)(n, {
                    dir: "right"
                })), new TextDecoder().decode(n)
            }
        },
        56728: function(e, t, n) {
            n.d(t, {
                O0: function() {
                    return c
                },
                nr: function() {
                    return h
                },
                qX: function() {
                    return f
                }
            });
            var r = n(95950),
                i = n(45008),
                a = n(99725),
                s = n(30838),
                o = n(21693);
            let u = new TextEncoder;

            function c(e, t = {}) {
                return "number" == typeof e || "bigint" == typeof e ? h((0, o.eC)(e, t)) : "boolean" == typeof e ? function(e, t = {}) {
                    let n = new Uint8Array(1);
                    return (n[0] = Number(e), "number" == typeof t.size) ? ((0, s.Yf)(n, {
                        size: t.size
                    }), (0, a.vk)(n, {
                        size: t.size
                    })) : n
                }(e, t) : (0, i.v)(e) ? h(e, t) : f(e, t)
            }
            let l = {
                zero: 48,
                nine: 57,
                A: 65,
                F: 70,
                a: 97,
                f: 102
            };

            function d(e) {
                return e >= l.zero && e <= l.nine ? e - l.zero : e >= l.A && e <= l.F ? e - (l.A - 10) : e >= l.a && e <= l.f ? e - (l.a - 10) : void 0
            }

            function h(e, t = {}) {
                let n = e;
                t.size && ((0, s.Yf)(n, {
                    size: t.size
                }), n = (0, a.vk)(n, {
                    dir: "right",
                    size: t.size
                }));
                let i = n.slice(2);
                i.length % 2 && (i = `0${i}`);
                let o = i.length / 2,
                    u = new Uint8Array(o);
                for (let e = 0, t = 0; e < o; e++) {
                    let n = d(i.charCodeAt(t++)),
                        a = d(i.charCodeAt(t++));
                    if (void 0 === n || void 0 === a) throw new r.G(`Invalid byte sequence ("${i[t-2]}${i[t-1]}" in "${i}").`);
                    u[e] = 16 * n + a
                }
                return u
            }

            function f(e, t = {}) {
                let n = u.encode(e);
                return "number" == typeof t.size ? ((0, s.Yf)(n, {
                    size: t.size
                }), (0, a.vk)(n, {
                    dir: "right",
                    size: t.size
                })) : n
            }
        },
        21693: function(e, t, n) {
            n.d(t, {
                $G: function() {
                    return h
                },
                C4: function() {
                    return u
                },
                NC: function() {
                    return o
                },
                ci: function() {
                    return c
                },
                eC: function() {
                    return l
                }
            });
            var r = n(86714),
                i = n(99725),
                a = n(30838);
            let s = Array.from({
                length: 256
            }, (e, t) => t.toString(16).padStart(2, "0"));

            function o(e, t = {}) {
                return "number" == typeof e || "bigint" == typeof e ? l(e, t) : "string" == typeof e ? h(e, t) : "boolean" == typeof e ? u(e, t) : c(e, t)
            }

            function u(e, t = {}) {
                let n = `0x${Number(e)}`;
                return "number" == typeof t.size ? ((0, a.Yf)(n, {
                    size: t.size
                }), (0, i.vk)(n, {
                    size: t.size
                })) : n
            }

            function c(e, t = {}) {
                let n = "";
                for (let t = 0; t < e.length; t++) n += s[e[t]];
                let r = `0x${n}`;
                return "number" == typeof t.size ? ((0, a.Yf)(r, {
                    size: t.size
                }), (0, i.vk)(r, {
                    dir: "right",
                    size: t.size
                })) : r
            }

            function l(e, t = {}) {
                let n;
                let {
                    signed: a,
                    size: s
                } = t, o = BigInt(e);
                s ? n = a ? (1 n << 8 n * BigInt(s) - 1 n) - 1 n : 2 n ** (8 n * BigInt(s)) - 1 n : "number" == typeof e && (n = BigInt(Number.MAX_SAFE_INTEGER));
                let u = "bigint" == typeof n && a ? -n - 1 n : 0;
                if (n && o > n || o < u) {
                    let t = "bigint" == typeof e ? "n" : "";
                    throw new r.J5({
                        max: n ? `${n}${t}` : void 0,
                        min: `${u}${t}`,
                        signed: a,
                        size: s,
                        value: `${e}${t}`
                    })
                }
                let c = `0x${(a&&o<0?(1n<<BigInt(8*s))+BigInt(o):o).toString(16)}`;
                return s ? (0, i.vk)(c, {
                    size: s
                }) : c
            }
            let d = new TextEncoder;

            function h(e, t = {}) {
                return c(d.encode(e), t)
            }
        },
        65573: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return o
                }
            });
            var r = n(71878),
                i = n(95950),
                a = n(98458),
                s = n(48519);

            function o(e, {
                abi: t,
                address: n,
                args: o,
                docsPath: u,
                functionName: c,
                sender: l
            }) {
                let {
                    code: d,
                    data: h,
                    message: f,
                    shortMessage: p
                } = e instanceof a.VQ ? e : e instanceof i.G ? e.walk(e => "data" in e) || e.walk() : {}, m = e instanceof r.wb ? new a.Dk({
                    functionName: c
                }) : [3, s.XS.code].includes(d) && (h || f || p) ? new a.Lu({
                    abi: t,
                    data: "object" == typeof h ? h.data : h,
                    functionName: c,
                    message: p ? ? f
                }) : e;
                return new a.uq(m, {
                    abi: t,
                    args: o,
                    contractAddress: n,
                    docsPath: u,
                    functionName: c,
                    sender: l
                })
            }
        },
        36074: function(e, t, n) {
            n.d(t, {
                k: function() {
                    return a
                }
            });
            var r = n(95950),
                i = n(40009);

            function a(e, t) {
                let n = (e.details || "").toLowerCase(),
                    a = e.walk(e => e.code === i.M_.code);
                return a instanceof r.G ? new i.M_({
                    cause: e,
                    message: a.details
                }) : i.M_.nodeMessage.test(n) ? new i.M_({
                    cause: e,
                    message: e.details
                }) : i.Hh.nodeMessage.test(n) ? new i.Hh({
                    cause: e,
                    maxFeePerGas: t ? .maxFeePerGas
                }) : i.G$.nodeMessage.test(n) ? new i.G$({
                    cause: e,
                    maxFeePerGas: t ? .maxFeePerGas
                }) : i.ZI.nodeMessage.test(n) ? new i.ZI({
                    cause: e,
                    nonce: t ? .nonce
                }) : i.vU.nodeMessage.test(n) ? new i.vU({
                    cause: e,
                    nonce: t ? .nonce
                }) : i.se.nodeMessage.test(n) ? new i.se({
                    cause: e,
                    nonce: t ? .nonce
                }) : i.C_.nodeMessage.test(n) ? new i.C_({
                    cause: e
                }) : i.WF.nodeMessage.test(n) ? new i.WF({
                    cause: e,
                    gas: t ? .gas
                }) : i.dR.nodeMessage.test(n) ? new i.dR({
                    cause: e,
                    gas: t ? .gas
                }) : i.pZ.nodeMessage.test(n) ? new i.pZ({
                    cause: e
                }) : i.cs.nodeMessage.test(n) ? new i.cs({
                    cause: e,
                    maxFeePerGas: t ? .maxFeePerGas,
                    maxPriorityFeePerGas: t ? .maxPriorityFeePerGas
                }) : new i.cj({
                    cause: e
                })
            }
        },
        96157: function(e, t, n) {
            n.d(t, {
                g: function() {
                    return r
                }
            });

            function r(e, {
                method: t
            }) {
                let n = {};
                return "fallback" === e.transport.type && e.transport.onResponse ? .(({
                    method: e,
                    response: r,
                    status: i,
                    transport: a
                }) => {
                    "success" === i && t === e && (n[r] = a.request)
                }), t => n[t] || e.request
            }
        },
        78723: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return i
                }
            });
            var r = n(52017);

            function i(e) {
                let t = e.transactions ? .map(e => "string" == typeof e ? e : r.Tr(e));
                return { ...e,
                    baseFeePerGas: e.baseFeePerGas ? BigInt(e.baseFeePerGas) : null,
                    difficulty: e.difficulty ? BigInt(e.difficulty) : void 0,
                    gasLimit: e.gasLimit ? BigInt(e.gasLimit) : void 0,
                    gasUsed: e.gasUsed ? BigInt(e.gasUsed) : void 0,
                    hash: e.hash ? e.hash : null,
                    logsBloom: e.logsBloom ? e.logsBloom : null,
                    nonce: e.nonce ? e.nonce : null,
                    number: e.number ? BigInt(e.number) : null,
                    size: e.size ? BigInt(e.size) : void 0,
                    timestamp: e.timestamp ? BigInt(e.timestamp) : void 0,
                    transactions: t,
                    totalDifficulty: e.totalDifficulty ? BigInt(e.totalDifficulty) : null
                }
            }
        },
        21028: function(e, t, n) {
            n.d(t, {
                K: function() {
                    return r
                }
            });

            function r(e, {
                format: t
            }) {
                if (!t) return {};
                let n = {};
                return ! function t(r) {
                    for (let i of Object.keys(r)) i in e && (n[i] = e[i]), r[i] && "object" == typeof r[i] && !Array.isArray(r[i]) && t(r[i])
                }(t(e || {})), n
            }
        },
        37380: function(e, t, n) {
            n.d(t, {
                U: function() {
                    return r
                }
            });

            function r(e, {
                args: t,
                eventName: n
            } = {}) {
                return { ...e,
                    blockHash: e.blockHash ? e.blockHash : null,
                    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                    logIndex: e.logIndex ? Number(e.logIndex) : null,
                    transactionHash: e.transactionHash ? e.transactionHash : null,
                    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
                    ...n ? {
                        args: t,
                        eventName: n
                    } : {}
                }
            }
        },
        52017: function(e, t, n) {
            n.d(t, {
                Tr: function() {
                    return a
                },
                c8: function() {
                    return i
                }
            });
            var r = n(30838);
            let i = {
                "0x0": "legacy",
                "0x1": "eip2930",
                "0x2": "eip1559"
            };

            function a(e) {
                let t = { ...e,
                    blockHash: e.blockHash ? e.blockHash : null,
                    blockNumber: e.blockNumber ? BigInt(e.blockNumber) : null,
                    chainId: e.chainId ? (0, r.ly)(e.chainId) : void 0,
                    gas: e.gas ? BigInt(e.gas) : void 0,
                    gasPrice: e.gasPrice ? BigInt(e.gasPrice) : void 0,
                    maxFeePerGas: e.maxFeePerGas ? BigInt(e.maxFeePerGas) : void 0,
                    maxPriorityFeePerGas: e.maxPriorityFeePerGas ? BigInt(e.maxPriorityFeePerGas) : void 0,
                    nonce: e.nonce ? (0, r.ly)(e.nonce) : void 0,
                    to: e.to ? e.to : null,
                    transactionIndex: e.transactionIndex ? Number(e.transactionIndex) : null,
                    type: e.type ? i[e.type] : void 0,
                    typeHex: e.type ? e.type : void 0,
                    value: e.value ? BigInt(e.value) : void 0,
                    v: e.v ? BigInt(e.v) : void 0
                };
                return t.yParity = (() => {
                    if (e.yParity) return Number(e.yParity);
                    if ("bigint" == typeof t.v) {
                        if (0 n === t.v || 27 n === t.v) return 0;
                        if (1 n === t.v || 28 n === t.v) return 1;
                        if (t.v >= 35 n) return t.v % 2 n === 0 n ? 1 : 0
                    }
                })(), "legacy" === t.type && (delete t.accessList, delete t.maxFeePerGas, delete t.maxPriorityFeePerGas, delete t.yParity), "eip2930" === t.type && (delete t.maxFeePerGas, delete t.maxPriorityFeePerGas), t
            }
        },
        86868: function(e, t, n) {
            n.d(t, {
                tG: function() {
                    return a
                }
            });
            var r = n(21693);
            let i = {
                legacy: "0x0",
                eip2930: "0x1",
                eip1559: "0x2"
            };

            function a(e) {
                return { ...e,
                    gas: void 0 !== e.gas ? (0, r.eC)(e.gas) : void 0,
                    gasPrice: void 0 !== e.gasPrice ? (0, r.eC)(e.gasPrice) : void 0,
                    maxFeePerGas: void 0 !== e.maxFeePerGas ? (0, r.eC)(e.maxFeePerGas) : void 0,
                    maxPriorityFeePerGas: void 0 !== e.maxPriorityFeePerGas ? (0, r.eC)(e.maxPriorityFeePerGas) : void 0,
                    nonce: void 0 !== e.nonce ? (0, r.eC)(e.nonce) : void 0,
                    type: void 0 !== e.type ? i[e.type] : void 0,
                    value: void 0 !== e.value ? (0, r.eC)(e.value) : void 0
                }
            }
        },
        82600: function(e, t, n) {
            n.d(t, {
                s: function() {
                    return r
                }
            });

            function r(e, t, n) {
                return r => e[t.name || n] ? .(r) ? ? t(e, r)
            }
        },
        77688: function(e, t, n) {
            n.d(t, {
                e: function() {
                    return u
                }
            });
            var r = n(56728),
                i = n(40901);
            let a = e => (0, i.r)(e);
            var s = n(89563);
            let o = e => (0, s.w)((0, r.O0)(e)),
                u = e => o(a(e))
        },
        33655: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return u
                }
            });
            var r = n(72619),
                i = n(56728),
                a = n(40901),
                s = n(89563);
            let o = e => (0, s.w)((0, i.O0)(e)),
                u = e => (0, r.tP)(o((0, a.r)(e)), 0, 4)
        },
        40901: function(e, t, n) {
            n.d(t, {
                r: function() {
                    return s
                }
            });
            let r = /^tuple(?<array>(\[(\d*)\])*)$/;

            function i(e) {
                let t = "",
                    n = e.length;
                for (let i = 0; i < n; i++) t += function e(t) {
                    let n = t.type;
                    if (r.test(t.type) && "components" in t) {
                        n = "(";
                        let i = t.components.length;
                        for (let r = 0; r < i; r++) n += e(t.components[r]), r < i - 1 && (n += ", ");
                        let a = function(e, t) {
                            let n = e.exec(t);
                            return n ? .groups
                        }(r, t.type);
                        return n += `)${a?.array??""}`, e({ ...t,
                            type: n
                        })
                    }
                    return ("indexed" in t && t.indexed && (n = `${n} indexed`), t.name) ? `${n} ${t.name}` : n
                }(e[i]), i !== n - 1 && (t += ", ");
                return t
            }
            var a = n(95950);
            let s = e => {
                var t;
                return function(e) {
                    let t = !0,
                        n = "",
                        r = 0,
                        i = "",
                        s = !1;
                    for (let a = 0; a < e.length; a++) {
                        let o = e[a];
                        if (["(", ")", ","].includes(o) && (t = !0), "(" === o && r++, ")" === o && r--, t) {
                            if (0 === r) {
                                if (" " === o && ["event", "function", ""].includes(i)) i = "";
                                else if (i += o, ")" === o) {
                                    s = !0;
                                    break
                                }
                                continue
                            }
                            if (" " === o) {
                                "," !== e[a - 1] && "," !== n && ",(" !== n && (n = "", t = !1);
                                continue
                            }
                            i += o, n += o
                        }
                    }
                    if (!s) throw new a.G("Unable to normalize signature.");
                    return i
                }("string" == typeof e ? e : "function" === (t = e).type ? `function ${t.name}(${i(t.inputs)})${t.stateMutability&&"nonpayable"!==t.stateMutability?` ${t.stateMutability}`:""}${t.outputs.length?` returns (${i(t.outputs)})`:""}` : "event" === t.type ? `event ${t.name}(${i(t.inputs)})` : "error" === t.type ? `error ${t.name}(${i(t.inputs)})` : "constructor" === t.type ? `constructor(${i(t.inputs)})${"payable"===t.stateMutability?" payable":""}` : "fallback" === t.type ? "fallback()" : "receive() external payable")
            }
        },
        89563: function(e, t, n) {
            function r(e) {
                if (!Number.isSafeInteger(e) || e < 0) throw Error(`Wrong positive integer: ${e}`)
            }

            function i(e, ...t) {
                if (!(e instanceof Uint8Array)) throw Error("Expected Uint8Array");
                if (t.length > 0 && !t.includes(e.length)) throw Error(`Expected Uint8Array of length ${t}, not of length=${e.length}`)
            }

            function a(e, t = !0) {
                if (e.destroyed) throw Error("Hash instance has been destroyed");
                if (t && e.finished) throw Error("Hash#digest() has already been called")
            }
            n.d(t, {
                w: function() {
                    return M
                }
            });
            let s = BigInt(4294967296 - 1),
                o = BigInt(32),
                u = (e, t, n) => e << n | t >>> 32 - n,
                c = (e, t, n) => t << n | e >>> 32 - n,
                l = (e, t, n) => t << n - 32 | e >>> 64 - n,
                d = (e, t, n) => e << n - 32 | t >>> 64 - n,
                h = e => e instanceof Uint8Array,
                f = e => new Uint32Array(e.buffer, e.byteOffset, Math.floor(e.byteLength / 4));
            if (68 !== new Uint8Array(new Uint32Array([287454020]).buffer)[0]) throw Error("Non little-endian hardware is not supported");

            function p(e) {
                if ("string" == typeof e && (e = function(e) {
                        if ("string" != typeof e) throw Error(`utf8ToBytes expected string, got ${typeof e}`);
                        return new Uint8Array(new TextEncoder().encode(e))
                    }(e)), !h(e)) throw Error(`expected Uint8Array, got ${typeof e}`);
                return e
            }
            class m {
                clone() {
                    return this._cloneInto()
                }
            }
            let [b, y, g] = [
                [],
                [],
                []
            ], v = BigInt(0), w = BigInt(1), P = BigInt(2), C = BigInt(7), x = BigInt(256), O = BigInt(113);
            for (let e = 0, t = w, n = 1, r = 0; e < 24; e++) {
                [n, r] = [r, (2 * n + 3 * r) % 5], b.push(2 * (5 * r + n)), y.push((e + 1) * (e + 2) / 2 % 64);
                let i = v;
                for (let e = 0; e < 7; e++)(t = (t << w ^ (t >> C) * O) % x) & P && (i ^= w << (w << BigInt(e)) - w);
                g.push(i)
            }
            let [E, S] = function(e, t = !1) {
                let n = new Uint32Array(e.length),
                    r = new Uint32Array(e.length);
                for (let i = 0; i < e.length; i++) {
                    let {
                        h: a,
                        l: u
                    } = function(e, t = !1) {
                        return t ? {
                            h: Number(e & s),
                            l: Number(e >> o & s)
                        } : {
                            h: 0 | Number(e >> o & s),
                            l: 0 | Number(e & s)
                        }
                    }(e[i], t);
                    [n[i], r[i]] = [a, u]
                }
                return [n, r]
            }(g, !0), k = (e, t, n) => n > 32 ? l(e, t, n) : u(e, t, n), I = (e, t, n) => n > 32 ? d(e, t, n) : c(e, t, n);
            class R extends m {
                constructor(e, t, n, i = !1, a = 24) {
                    if (super(), this.blockLen = e, this.suffix = t, this.outputLen = n, this.enableXOF = i, this.rounds = a, this.pos = 0, this.posOut = 0, this.finished = !1, this.destroyed = !1, r(n), 0 >= this.blockLen || this.blockLen >= 200) throw Error("Sha3 supports only keccak-f1600 function");
                    this.state = new Uint8Array(200), this.state32 = f(this.state)
                }
                keccak() {
                    ! function(e, t = 24) {
                        let n = new Uint32Array(10);
                        for (let r = 24 - t; r < 24; r++) {
                            for (let t = 0; t < 10; t++) n[t] = e[t] ^ e[t + 10] ^ e[t + 20] ^ e[t + 30] ^ e[t + 40];
                            for (let t = 0; t < 10; t += 2) {
                                let r = (t + 8) % 10,
                                    i = (t + 2) % 10,
                                    a = n[i],
                                    s = n[i + 1],
                                    o = k(a, s, 1) ^ n[r],
                                    u = I(a, s, 1) ^ n[r + 1];
                                for (let n = 0; n < 50; n += 10) e[t + n] ^= o, e[t + n + 1] ^= u
                            }
                            let t = e[2],
                                i = e[3];
                            for (let n = 0; n < 24; n++) {
                                let r = y[n],
                                    a = k(t, i, r),
                                    s = I(t, i, r),
                                    o = b[n];
                                t = e[o], i = e[o + 1], e[o] = a, e[o + 1] = s
                            }
                            for (let t = 0; t < 50; t += 10) {
                                for (let r = 0; r < 10; r++) n[r] = e[t + r];
                                for (let r = 0; r < 10; r++) e[t + r] ^= ~n[(r + 2) % 10] & n[(r + 4) % 10]
                            }
                            e[0] ^= E[r], e[1] ^= S[r]
                        }
                        n.fill(0)
                    }(this.state32, this.rounds), this.posOut = 0, this.pos = 0
                }
                update(e) {
                    a(this);
                    let {
                        blockLen: t,
                        state: n
                    } = this, r = (e = p(e)).length;
                    for (let i = 0; i < r;) {
                        let a = Math.min(t - this.pos, r - i);
                        for (let t = 0; t < a; t++) n[this.pos++] ^= e[i++];
                        this.pos === t && this.keccak()
                    }
                    return this
                }
                finish() {
                    if (this.finished) return;
                    this.finished = !0;
                    let {
                        state: e,
                        suffix: t,
                        pos: n,
                        blockLen: r
                    } = this;
                    e[n] ^= t, (128 & t) != 0 && n === r - 1 && this.keccak(), e[r - 1] ^= 128, this.keccak()
                }
                writeInto(e) {
                    a(this, !1), i(e), this.finish();
                    let t = this.state,
                        {
                            blockLen: n
                        } = this;
                    for (let r = 0, i = e.length; r < i;) {
                        this.posOut >= n && this.keccak();
                        let a = Math.min(n - this.posOut, i - r);
                        e.set(t.subarray(this.posOut, this.posOut + a), r), this.posOut += a, r += a
                    }
                    return e
                }
                xofInto(e) {
                    if (!this.enableXOF) throw Error("XOF is not possible for this instance");
                    return this.writeInto(e)
                }
                xof(e) {
                    return r(e), this.xofInto(new Uint8Array(e))
                }
                digestInto(e) {
                    if (! function(e, t) {
                            i(e);
                            let n = t.outputLen;
                            if (e.length < n) throw Error(`digestInto() expects output buffer of length at least ${n}`)
                        }(e, this), this.finished) throw Error("digest() was already called");
                    return this.writeInto(e), this.destroy(), e
                }
                digest() {
                    return this.digestInto(new Uint8Array(this.outputLen))
                }
                destroy() {
                    this.destroyed = !0, this.state.fill(0)
                }
                _cloneInto(e) {
                    let {
                        blockLen: t,
                        suffix: n,
                        outputLen: r,
                        rounds: i,
                        enableXOF: a
                    } = this;
                    return e || (e = new R(t, n, r, a, i)), e.state32.set(this.state32), e.pos = this.pos, e.posOut = this.posOut, e.finished = this.finished, e.rounds = i, e.suffix = n, e.outputLen = r, e.enableXOF = a, e.destroyed = this.destroyed, e
                }
            }
            let F = function(e) {
                let t = t => e().update(p(t)).digest(),
                    n = e();
                return t.outputLen = n.outputLen, t.blockLen = n.blockLen, t.create = () => e(), t
            }(() => new R(136, 1, 32));
            var $ = n(45008),
                j = n(56728),
                T = n(21693);

            function M(e, t) {
                let n = F((0, $.v)(e, {
                    strict: !1
                }) ? (0, j.O0)(e) : e);
                return "bytes" === (t || "hex") ? n : (0, T.NC)(n)
            }
        },
        87162: function(e, t, n) {
            n.d(t, {
                N7: function() {
                    return s
                }
            });
            let r = new Map,
                i = new Map,
                a = 0;

            function s(e, t, n) {
                let s = ++a,
                    o = () => r.get(e) || [],
                    u = () => {
                        let t = o();
                        r.set(e, t.filter(e => e.id !== s))
                    },
                    c = () => {
                        let t = i.get(e);
                        1 === o().length && t && t(), u()
                    },
                    l = o();
                if (r.set(e, [...l, {
                        id: s,
                        fns: t
                    }]), l && l.length > 0) return c;
                let d = {};
                for (let e in t) d[e] = (...t) => {
                    let n = o();
                    if (0 !== n.length)
                        for (let r of n) r.fns[e] ? .(...t)
                };
                let h = n(d);
                return "function" == typeof h && i.set(e, h), c
            }
        },
        62468: function(e, t, n) {
            n.d(t, {
                $: function() {
                    return i
                }
            });
            var r = n(21810);

            function i(e, {
                emitOnBegin: t,
                initialWaitTime: n,
                interval: i
            }) {
                let a = !0,
                    s = () => a = !1;
                return (async () => {
                    let o;
                    t && (o = await e({
                        unpoll: s
                    }));
                    let u = await n ? .(o) ? ? i;
                    await (0, r.D)(u);
                    let c = async () => {
                        a && (await e({
                            unpoll: s
                        }), await (0, r.D)(i), c())
                    };
                    c()
                })(), s
            }
        },
        33668: function(e, t, n) {
            n.d(t, {
                S: function() {
                    return i
                }
            });
            let r = new Map;

            function i({
                fn: e,
                id: t,
                shouldSplitBatch: n,
                wait: i = 0,
                sort: a
            }) {
                let s = async () => {
                        let t = c();
                        o();
                        let n = t.map(({
                            args: e
                        }) => e);
                        0 !== n.length && e(n).then(e => {
                            a && Array.isArray(e) && e.sort(a);
                            for (let n = 0; n < t.length; n++) {
                                let {
                                    pendingPromise: r
                                } = t[n];
                                r.resolve ? .([e[n], e])
                            }
                        }).catch(e => {
                            for (let n = 0; n < t.length; n++) {
                                let {
                                    pendingPromise: r
                                } = t[n];
                                r.reject ? .(e)
                            }
                        })
                    },
                    o = () => r.delete(t),
                    u = () => c().map(({
                        args: e
                    }) => e),
                    c = () => r.get(t) || [],
                    l = e => r.set(t, [...c(), e]);
                return {
                    flush: o,
                    async schedule(e) {
                        let t = {},
                            r = new Promise((e, n) => {
                                t.resolve = e, t.reject = n
                            });
                        return (n ? .([...u(), e]) && s(), c().length > 0) ? l({
                            args: e,
                            pendingPromise: t
                        }) : (l({
                            args: e,
                            pendingPromise: t
                        }), setTimeout(s, i)), r
                    }
                }
            }
        },
        36063: function(e, t, n) {
            n.d(t, {
                J: function() {
                    return i
                }
            });
            var r = n(21810);

            function i(e, {
                delay: t = 100,
                retryCount: n = 2,
                shouldRetry: i = () => !0
            } = {}) {
                return new Promise((a, s) => {
                    let o = async ({
                        count: u = 0
                    } = {}) => {
                        let c = async ({
                            error: e
                        }) => {
                            let n = "function" == typeof t ? t({
                                count: u,
                                error: e
                            }) : t;
                            n && await (0, r.D)(n), o({
                                count: u + 1
                            })
                        };
                        try {
                            let t = await e();
                            a(t)
                        } catch (e) {
                            if (u < n && await i({
                                    count: u,
                                    error: e
                                })) return c({
                                error: e
                            });
                            s(e)
                        }
                    };
                    o()
                })
            }
        },
        71891: function(e, t, n) {
            n.d(t, {
                P: function() {
                    return r
                }
            });
            let r = (e, t, n) => JSON.stringify(e, (e, n) => {
                let r = "bigint" == typeof n ? n.toString() : n;
                return "function" == typeof t ? t(e, r) : r
            }, n)
        },
        2445: function(e, t, n) {
            n.d(t, {
                F: function() {
                    return u
                }
            });
            var r = n(4832),
                i = n(21485),
                a = n(40009),
                s = n(44818),
                o = n(87364);

            function u(e) {
                let {
                    account: t,
                    gasPrice: n,
                    maxFeePerGas: u,
                    maxPriorityFeePerGas: c,
                    to: l
                } = e, d = t ? (0, r.T)(t) : void 0;
                if (d && !(0, o.U)(d.address)) throw new i.b({
                    address: d.address
                });
                if (l && !(0, o.U)(l)) throw new i.b({
                    address: l
                });
                if (void 0 !== n && (void 0 !== u || void 0 !== c)) throw new s.xY;
                if (u && u > 2 n ** 256 n - 1 n) throw new a.Hh({
                    maxFeePerGas: u
                });
                if (c && u && c > u) throw new a.cs({
                    maxFeePerGas: u,
                    maxPriorityFeePerGas: c
                })
            }
        },
        29578: function(e, t, n) {
            n.d(t, {
                cj: function() {
                    return d
                },
                iC: function() {
                    return l
                }
            });
            var r = n(71878),
                i = n(21485),
                a = n(87364),
                s = n(39868),
                o = n(21693);
            let u = /^bytes([1-9]|1[0-9]|2[0-9]|3[0-2])?$/,
                c = /^(u?int)(8|16|24|32|40|48|56|64|72|80|88|96|104|112|120|128|136|144|152|160|168|176|184|192|200|208|216|224|232|240|248|256)?$/;

            function l({
                domain: e,
                message: t,
                primaryType: n,
                types: l
            }) {
                let d = (e, t) => {
                    for (let n of e) {
                        let {
                            name: e,
                            type: h
                        } = n, f = t[e], p = h.match(c);
                        if (p && ("number" == typeof f || "bigint" == typeof f)) {
                            let [e, t, n] = p;
                            (0, o.eC)(f, {
                                signed: "int" === t,
                                size: parseInt(n) / 8
                            })
                        }
                        if ("address" === h && "string" == typeof f && !(0, a.U)(f)) throw new i.b({
                            address: f
                        });
                        let m = h.match(u);
                        if (m) {
                            let [e, t] = m;
                            if (t && (0, s.d)(f) !== parseInt(t)) throw new r.KY({
                                expectedSize: parseInt(t),
                                givenSize: (0, s.d)(f)
                            })
                        }
                        let b = l[h];
                        b && d(b, f)
                    }
                };
                l.EIP712Domain && e && d(l.EIP712Domain, e), "EIP712Domain" !== n && d(l[n], t)
            }

            function d({
                domain: e
            }) {
                return ["string" == typeof e ? .name && {
                    name: "name",
                    type: "string"
                }, e ? .version && {
                    name: "version",
                    type: "string"
                }, "number" == typeof e ? .chainId && {
                    name: "chainId",
                    type: "uint256"
                }, e ? .verifyingContract && {
                    name: "verifyingContract",
                    type: "address"
                }, e ? .salt && {
                    name: "salt",
                    type: "bytes32"
                }].filter(Boolean)
            }
        },
        79352: function(e, t, n) {
            n.d(t, {
                d: function() {
                    return a
                }
            });
            var r = n(36238),
                i = n(16775);

            function a(e, t = "wei") {
                return (0, i.b)(e, r.ez[t])
            }
        },
        32421: function(e, t, n) {
            n.d(t, {
                o: function() {
                    return a
                }
            });
            var r = n(36238),
                i = n(16775);

            function a(e, t = "wei") {
                return (0, i.b)(e, r.Zn[t])
            }
        },
        16775: function(e, t, n) {
            n.d(t, {
                b: function() {
                    return r
                }
            });

            function r(e, t) {
                let n = e.toString(),
                    r = n.startsWith("-");
                r && (n = n.slice(1));
                let [i, a] = [(n = n.padStart(t, "0")).slice(0, n.length - t), n.slice(n.length - t)];
                return a = a.replace(/(0+)$/, ""), `${r?"-":""}${i||"0"}${a?`.${a}`:""}`
            }
        },
        21810: function(e, t, n) {
            n.d(t, {
                D: function() {
                    return r
                }
            });
            async function r(e) {
                return new Promise(t => setTimeout(t, e))
            }
        },
        56926: function(e, t, n) {
            let r;

            function i() {}
            n.d(t, {
                eM: function() {
                    return ex
                },
                _g: function() {
                    return ew
                },
                mA: function() {
                    return eU
                },
                xx: function() {
                    return eM
                },
                do: function() {
                    return eW
                },
                GG: function() {
                    return eK
                },
                LN: function() {
                    return eD
                },
                PJ: function() {
                    return eH
                },
                t_: function() {
                    return e$
                },
                g0: function() {
                    return e_
                },
                BX: function() {
                    return eZ
                }
            });
            let a = "undefined" == typeof window || "Deno" in window;

            function s() {}

            function o(e) {
                return "number" == typeof e && e >= 0 && e !== 1 / 0
            }

            function u(e, t) {
                return Math.max(e + (t || 0) - Date.now(), 0)
            }

            function c(e, t, n) {
                return C(e) ? "function" == typeof t ? { ...n,
                    queryKey: e,
                    queryFn: t
                } : { ...t,
                    queryKey: e
                } : e
            }

            function l(e, t, n) {
                return C(e) ? "function" == typeof t ? { ...n,
                    mutationKey: e,
                    mutationFn: t
                } : { ...t,
                    mutationKey: e
                } : "function" == typeof e ? { ...t,
                    mutationFn: e
                } : { ...e
                }
            }

            function d(e, t, n) {
                return C(e) ? [{ ...t,
                    queryKey: e
                }, n] : [e || {}, t]
            }

            function h(e, t) {
                let {
                    type: n = "all",
                    exact: r,
                    fetchStatus: i,
                    predicate: a,
                    queryKey: s,
                    stale: o
                } = e;
                if (C(s)) {
                    if (r) {
                        if (t.queryHash !== p(s, t.options)) return !1
                    } else {
                        if (!b(t.queryKey, s)) return !1
                    }
                }
                if ("all" !== n) {
                    let e = t.isActive();
                    if ("active" === n && !e || "inactive" === n && e) return !1
                }
                return ("boolean" != typeof o || t.isStale() === o) && (void 0 === i || i === t.state.fetchStatus) && (!a || !!a(t))
            }

            function f(e, t) {
                let {
                    exact: n,
                    fetching: r,
                    predicate: i,
                    mutationKey: a
                } = e;
                if (C(a)) {
                    if (!t.options.mutationKey) return !1;
                    if (n) {
                        if (m(t.options.mutationKey) !== m(a)) return !1
                    } else {
                        if (!b(t.options.mutationKey, a)) return !1
                    }
                }
                return ("boolean" != typeof r || "loading" === t.state.status === r) && (!i || !!i(t))
            }

            function p(e, t) {
                return ((null == t ? void 0 : t.queryKeyHashFn) || m)(e)
            }

            function m(e) {
                return JSON.stringify(e, (e, t) => w(t) ? Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}) : t)
            }

            function b(e, t) {
                return e === t || typeof e == typeof t && !!e && !!t && "object" == typeof e && "object" == typeof t && !Object.keys(t).some(n => !b(e[n], t[n]))
            }

            function y(e, t) {
                if (e === t) return e;
                let n = v(e) && v(t);
                if (n || w(e) && w(t)) {
                    let r = n ? e.length : Object.keys(e).length,
                        i = n ? t : Object.keys(t),
                        a = i.length,
                        s = n ? [] : {},
                        o = 0;
                    for (let r = 0; r < a; r++) {
                        let a = n ? r : i[r];
                        s[a] = y(e[a], t[a]), s[a] === e[a] && o++
                    }
                    return r === a && o === r ? e : s
                }
                return t
            }

            function g(e, t) {
                if (e && !t || t && !e) return !1;
                for (let n in e)
                    if (e[n] !== t[n]) return !1;
                return !0
            }

            function v(e) {
                return Array.isArray(e) && e.length === Object.keys(e).length
            }

            function w(e) {
                if (!P(e)) return !1;
                let t = e.constructor;
                if (void 0 === t) return !0;
                let n = t.prototype;
                return !!(P(n) && n.hasOwnProperty("isPrototypeOf"))
            }

            function P(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function C(e) {
                return Array.isArray(e)
            }

            function x(e) {
                return new Promise(t => {
                    setTimeout(t, e)
                })
            }

            function O(e) {
                x(0).then(e)
            }

            function E(e, t, n) {
                return null != n.isDataEqual && n.isDataEqual(e, t) ? e : "function" == typeof n.structuralSharing ? n.structuralSharing(e, t) : !1 !== n.structuralSharing ? y(e, t) : t
            }
            let S = console,
                k = function() {
                    let e = [],
                        t = 0,
                        n = e => {
                            e()
                        },
                        r = e => {
                            e()
                        },
                        i = r => {
                            t ? e.push(r) : O(() => {
                                n(r)
                            })
                        },
                        a = () => {
                            let t = e;
                            e = [], t.length && O(() => {
                                r(() => {
                                    t.forEach(e => {
                                        n(e)
                                    })
                                })
                            })
                        };
                    return {
                        batch: e => {
                            let n;
                            t++;
                            try {
                                n = e()
                            } finally {
                                --t || a()
                            }
                            return n
                        },
                        batchCalls: e => (...t) => {
                            i(() => {
                                e(...t)
                            })
                        },
                        schedule: i,
                        setNotifyFunction: e => {
                            n = e
                        },
                        setBatchNotifyFunction: e => {
                            r = e
                        }
                    }
                }();
            class I {
                constructor() {
                    this.listeners = new Set, this.subscribe = this.subscribe.bind(this)
                }
                subscribe(e) {
                    let t = {
                        listener: e
                    };
                    return this.listeners.add(t), this.onSubscribe(), () => {
                        this.listeners.delete(t), this.onUnsubscribe()
                    }
                }
                hasListeners() {
                    return this.listeners.size > 0
                }
                onSubscribe() {}
                onUnsubscribe() {}
            }
            class R extends I {
                constructor() {
                    super(), this.setup = e => {
                        if (!a && window.addEventListener) {
                            let t = () => e();
                            return window.addEventListener("visibilitychange", t, !1), window.addEventListener("focus", t, !1), () => {
                                window.removeEventListener("visibilitychange", t), window.removeEventListener("focus", t)
                            }
                        }
                    }
                }
                onSubscribe() {
                    this.cleanup || this.setEventListener(this.setup)
                }
                onUnsubscribe() {
                    if (!this.hasListeners()) {
                        var e;
                        null == (e = this.cleanup) || e.call(this), this.cleanup = void 0
                    }
                }
                setEventListener(e) {
                    var t;
                    this.setup = e, null == (t = this.cleanup) || t.call(this), this.cleanup = e(e => {
                        "boolean" == typeof e ? this.setFocused(e) : this.onFocus()
                    })
                }
                setFocused(e) {
                    this.focused !== e && (this.focused = e, this.onFocus())
                }
                onFocus() {
                    this.listeners.forEach(({
                        listener: e
                    }) => {
                        e()
                    })
                }
                isFocused() {
                    return "boolean" == typeof this.focused ? this.focused : "undefined" == typeof document || [void 0, "visible", "prerender"].includes(document.visibilityState)
                }
            }
            let F = new R,
                $ = ["online", "offline"];
            class j extends I {
                constructor() {
                    super(), this.setup = e => {
                        if (!a && window.addEventListener) {
                            let t = () => e();
                            return $.forEach(e => {
                                window.addEventListener(e, t, !1)
                            }), () => {
                                $.forEach(e => {
                                    window.removeEventListener(e, t)
                                })
                            }
                        }
                    }
                }
                onSubscribe() {
                    this.cleanup || this.setEventListener(this.setup)
                }
                onUnsubscribe() {
                    if (!this.hasListeners()) {
                        var e;
                        null == (e = this.cleanup) || e.call(this), this.cleanup = void 0
                    }
                }
                setEventListener(e) {
                    var t;
                    this.setup = e, null == (t = this.cleanup) || t.call(this), this.cleanup = e(e => {
                        "boolean" == typeof e ? this.setOnline(e) : this.onOnline()
                    })
                }
                setOnline(e) {
                    this.online !== e && (this.online = e, this.onOnline())
                }
                onOnline() {
                    this.listeners.forEach(({
                        listener: e
                    }) => {
                        e()
                    })
                }
                isOnline() {
                    return "boolean" == typeof this.online ? this.online : "undefined" == typeof navigator || void 0 === navigator.onLine || navigator.onLine
                }
            }
            let T = new j;

            function M(e) {
                return Math.min(1e3 * 2 ** e, 3e4)
            }

            function A(e) {
                return (null != e ? e : "online") !== "online" || T.isOnline()
            }
            class q {
                constructor(e) {
                    this.revert = null == e ? void 0 : e.revert, this.silent = null == e ? void 0 : e.silent
                }
            }

            function G(e) {
                return e instanceof q
            }

            function N(e) {
                let t, n, r, i = !1,
                    a = 0,
                    s = !1,
                    o = new Promise((e, t) => {
                        n = e, r = t
                    }),
                    u = () => !F.isFocused() || "always" !== e.networkMode && !T.isOnline(),
                    c = r => {
                        s || (s = !0, null == e.onSuccess || e.onSuccess(r), null == t || t(), n(r))
                    },
                    l = n => {
                        s || (s = !0, null == e.onError || e.onError(n), null == t || t(), r(n))
                    },
                    d = () => new Promise(n => {
                        t = e => {
                            let t = s || !u();
                            return t && n(e), t
                        }, null == e.onPause || e.onPause()
                    }).then(() => {
                        t = void 0, s || null == e.onContinue || e.onContinue()
                    }),
                    h = () => {
                        let t;
                        if (!s) {
                            try {
                                t = e.fn()
                            } catch (e) {
                                t = Promise.reject(e)
                            }
                            Promise.resolve(t).then(c).catch(t => {
                                var n, r;
                                if (s) return;
                                let o = null != (n = e.retry) ? n : 3,
                                    c = null != (r = e.retryDelay) ? r : M,
                                    f = "function" == typeof c ? c(a, t) : c,
                                    p = !0 === o || "number" == typeof o && a < o || "function" == typeof o && o(a, t);
                                if (i || !p) {
                                    l(t);
                                    return
                                }
                                a++, null == e.onFail || e.onFail(a, t), x(f).then(() => {
                                    if (u()) return d()
                                }).then(() => {
                                    i ? l(t) : h()
                                })
                            })
                        }
                    };
                return A(e.networkMode) ? h() : d().then(h), {
                    promise: o,
                    cancel: t => {
                        s || (l(new q(t)), null == e.abort || e.abort())
                    },
                    continue: () => (null == t ? void 0 : t()) ? o : Promise.resolve(),
                    cancelRetry: () => {
                        i = !0
                    },
                    continueRetry: () => {
                        i = !1
                    }
                }
            }
            class B {
                destroy() {
                    this.clearGcTimeout()
                }
                scheduleGc() {
                    this.clearGcTimeout(), o(this.cacheTime) && (this.gcTimeout = setTimeout(() => {
                        this.optionalRemove()
                    }, this.cacheTime))
                }
                updateCacheTime(e) {
                    this.cacheTime = Math.max(this.cacheTime || 0, null != e ? e : a ? 1 / 0 : 3e5)
                }
                clearGcTimeout() {
                    this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0)
                }
            }
            class U extends B {
                constructor(e) {
                    super(), this.abortSignalConsumed = !1, this.defaultOptions = e.defaultOptions, this.setOptions(e.options), this.observers = [], this.cache = e.cache, this.logger = e.logger || S, this.queryKey = e.queryKey, this.queryHash = e.queryHash, this.initialState = e.state || function(e) {
                        let t = "function" == typeof e.initialData ? e.initialData() : e.initialData,
                            n = void 0 !== t,
                            r = n ? "function" == typeof e.initialDataUpdatedAt ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
                        return {
                            data: t,
                            dataUpdateCount: 0,
                            dataUpdatedAt: n ? null != r ? r : Date.now() : 0,
                            error: null,
                            errorUpdateCount: 0,
                            errorUpdatedAt: 0,
                            fetchFailureCount: 0,
                            fetchFailureReason: null,
                            fetchMeta: null,
                            isInvalidated: !1,
                            status: n ? "success" : "loading",
                            fetchStatus: "idle"
                        }
                    }(this.options), this.state = this.initialState, this.scheduleGc()
                }
                get meta() {
                    return this.options.meta
                }
                setOptions(e) {
                    this.options = { ...this.defaultOptions,
                        ...e
                    }, this.updateCacheTime(this.options.cacheTime)
                }
                optionalRemove() {
                    this.observers.length || "idle" !== this.state.fetchStatus || this.cache.remove(this)
                }
                setData(e, t) {
                    let n = E(this.state.data, e, this.options);
                    return this.dispatch({
                        data: n,
                        type: "success",
                        dataUpdatedAt: null == t ? void 0 : t.updatedAt,
                        manual: null == t ? void 0 : t.manual
                    }), n
                }
                setState(e, t) {
                    this.dispatch({
                        type: "setState",
                        state: e,
                        setStateOptions: t
                    })
                }
                cancel(e) {
                    var t;
                    let n = this.promise;
                    return null == (t = this.retryer) || t.cancel(e), n ? n.then(s).catch(s) : Promise.resolve()
                }
                destroy() {
                    super.destroy(), this.cancel({
                        silent: !0
                    })
                }
                reset() {
                    this.destroy(), this.setState(this.initialState)
                }
                isActive() {
                    return this.observers.some(e => !1 !== e.options.enabled)
                }
                isDisabled() {
                    return this.getObserversCount() > 0 && !this.isActive()
                }
                isStale() {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(e => e.getCurrentResult().isStale)
                }
                isStaleByTime(e = 0) {
                    return this.state.isInvalidated || !this.state.dataUpdatedAt || !u(this.state.dataUpdatedAt, e)
                }
                onFocus() {
                    var e;
                    let t = this.observers.find(e => e.shouldFetchOnWindowFocus());
                    t && t.refetch({
                        cancelRefetch: !1
                    }), null == (e = this.retryer) || e.continue()
                }
                onOnline() {
                    var e;
                    let t = this.observers.find(e => e.shouldFetchOnReconnect());
                    t && t.refetch({
                        cancelRefetch: !1
                    }), null == (e = this.retryer) || e.continue()
                }
                addObserver(e) {
                    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.cache.notify({
                        type: "observerAdded",
                        query: this,
                        observer: e
                    }))
                }
                removeObserver(e) {
                    this.observers.includes(e) && (this.observers = this.observers.filter(t => t !== e), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({
                        revert: !0
                    }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({
                        type: "observerRemoved",
                        query: this,
                        observer: e
                    }))
                }
                getObserversCount() {
                    return this.observers.length
                }
                invalidate() {
                    this.state.isInvalidated || this.dispatch({
                        type: "invalidate"
                    })
                }
                fetch(e, t) {
                    var n, r, i, a;
                    if ("idle" !== this.state.fetchStatus) {
                        if (this.state.dataUpdatedAt && null != t && t.cancelRefetch) this.cancel({
                            silent: !0
                        });
                        else if (this.promise) return null == (i = this.retryer) || i.continueRetry(), this.promise
                    }
                    if (e && this.setOptions(e), !this.options.queryFn) {
                        let e = this.observers.find(e => e.options.queryFn);
                        e && this.setOptions(e.options)
                    }
                    let s = function() {
                            if ("function" == typeof AbortController) return new AbortController
                        }(),
                        o = {
                            queryKey: this.queryKey,
                            pageParam: void 0,
                            meta: this.meta
                        },
                        u = e => {
                            Object.defineProperty(e, "signal", {
                                enumerable: !0,
                                get: () => {
                                    if (s) return this.abortSignalConsumed = !0, s.signal
                                }
                            })
                        };
                    u(o);
                    let c = {
                        fetchOptions: t,
                        options: this.options,
                        queryKey: this.queryKey,
                        state: this.state,
                        fetchFn: () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(o)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'")
                    };
                    u(c), null == (n = this.options.behavior) || n.onFetch(c), this.revertState = this.state, ("idle" === this.state.fetchStatus || this.state.fetchMeta !== (null == (r = c.fetchOptions) ? void 0 : r.meta)) && this.dispatch({
                        type: "fetch",
                        meta: null == (a = c.fetchOptions) ? void 0 : a.meta
                    });
                    let l = e => {
                        if (G(e) && e.silent || this.dispatch({
                                type: "error",
                                error: e
                            }), !G(e)) {
                            var t, n, r, i;
                            null == (t = (n = this.cache.config).onError) || t.call(n, e, this), null == (r = (i = this.cache.config).onSettled) || r.call(i, this.state.data, e, this)
                        }
                        this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                    };
                    return this.retryer = N({
                        fn: c.fetchFn,
                        abort: null == s ? void 0 : s.abort.bind(s),
                        onSuccess: e => {
                            var t, n, r, i;
                            if (void 0 === e) {
                                l(Error(this.queryHash + " data is undefined"));
                                return
                            }
                            this.setData(e), null == (t = (n = this.cache.config).onSuccess) || t.call(n, e, this), null == (r = (i = this.cache.config).onSettled) || r.call(i, e, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1
                        },
                        onError: l,
                        onFail: (e, t) => {
                            this.dispatch({
                                type: "failed",
                                failureCount: e,
                                error: t
                            })
                        },
                        onPause: () => {
                            this.dispatch({
                                type: "pause"
                            })
                        },
                        onContinue: () => {
                            this.dispatch({
                                type: "continue"
                            })
                        },
                        retry: c.options.retry,
                        retryDelay: c.options.retryDelay,
                        networkMode: c.options.networkMode
                    }), this.promise = this.retryer.promise, this.promise
                }
                dispatch(e) {
                    this.state = (t => {
                        var n, r;
                        switch (e.type) {
                            case "failed":
                                return { ...t,
                                    fetchFailureCount: e.failureCount,
                                    fetchFailureReason: e.error
                                };
                            case "pause":
                                return { ...t,
                                    fetchStatus: "paused"
                                };
                            case "continue":
                                return { ...t,
                                    fetchStatus: "fetching"
                                };
                            case "fetch":
                                return { ...t,
                                    fetchFailureCount: 0,
                                    fetchFailureReason: null,
                                    fetchMeta: null != (n = e.meta) ? n : null,
                                    fetchStatus: A(this.options.networkMode) ? "fetching" : "paused",
                                    ...!t.dataUpdatedAt && {
                                        error: null,
                                        status: "loading"
                                    }
                                };
                            case "success":
                                return { ...t,
                                    data: e.data,
                                    dataUpdateCount: t.dataUpdateCount + 1,
                                    dataUpdatedAt: null != (r = e.dataUpdatedAt) ? r : Date.now(),
                                    error: null,
                                    isInvalidated: !1,
                                    status: "success",
                                    ...!e.manual && {
                                        fetchStatus: "idle",
                                        fetchFailureCount: 0,
                                        fetchFailureReason: null
                                    }
                                };
                            case "error":
                                let i = e.error;
                                if (G(i) && i.revert && this.revertState) return { ...this.revertState,
                                    fetchStatus: "idle"
                                };
                                return { ...t,
                                    error: i,
                                    errorUpdateCount: t.errorUpdateCount + 1,
                                    errorUpdatedAt: Date.now(),
                                    fetchFailureCount: t.fetchFailureCount + 1,
                                    fetchFailureReason: i,
                                    fetchStatus: "idle",
                                    status: "error"
                                };
                            case "invalidate":
                                return { ...t,
                                    isInvalidated: !0
                                };
                            case "setState":
                                return { ...t,
                                    ...e.state
                                }
                        }
                    })(this.state), k.batch(() => {
                        this.observers.forEach(t => {
                            t.onQueryUpdate(e)
                        }), this.cache.notify({
                            query: this,
                            type: "updated",
                            action: e
                        })
                    })
                }
            }
            class D extends I {
                constructor(e) {
                    super(), this.config = e || {}, this.queries = [], this.queriesMap = {}
                }
                build(e, t, n) {
                    var r;
                    let i = t.queryKey,
                        a = null != (r = t.queryHash) ? r : p(i, t),
                        s = this.get(a);
                    return s || (s = new U({
                        cache: this,
                        logger: e.getLogger(),
                        queryKey: i,
                        queryHash: a,
                        options: e.defaultQueryOptions(t),
                        state: n,
                        defaultOptions: e.getQueryDefaults(i)
                    }), this.add(s)), s
                }
                add(e) {
                    this.queriesMap[e.queryHash] || (this.queriesMap[e.queryHash] = e, this.queries.push(e), this.notify({
                        type: "added",
                        query: e
                    }))
                }
                remove(e) {
                    let t = this.queriesMap[e.queryHash];
                    t && (e.destroy(), this.queries = this.queries.filter(t => t !== e), t === e && delete this.queriesMap[e.queryHash], this.notify({
                        type: "removed",
                        query: e
                    }))
                }
                clear() {
                    k.batch(() => {
                        this.queries.forEach(e => {
                            this.remove(e)
                        })
                    })
                }
                get(e) {
                    return this.queriesMap[e]
                }
                getAll() {
                    return this.queries
                }
                find(e, t) {
                    let [n] = d(e, t);
                    return void 0 === n.exact && (n.exact = !0), this.queries.find(e => h(n, e))
                }
                findAll(e, t) {
                    let [n] = d(e, t);
                    return Object.keys(n).length > 0 ? this.queries.filter(e => h(n, e)) : this.queries
                }
                notify(e) {
                    k.batch(() => {
                        this.listeners.forEach(({
                            listener: t
                        }) => {
                            t(e)
                        })
                    })
                }
                onFocus() {
                    k.batch(() => {
                        this.queries.forEach(e => {
                            e.onFocus()
                        })
                    })
                }
                onOnline() {
                    k.batch(() => {
                        this.queries.forEach(e => {
                            e.onOnline()
                        })
                    })
                }
            }
            class L extends B {
                constructor(e) {
                    super(), this.defaultOptions = e.defaultOptions, this.mutationId = e.mutationId, this.mutationCache = e.mutationCache, this.logger = e.logger || S, this.observers = [], this.state = e.state || z(), this.setOptions(e.options), this.scheduleGc()
                }
                setOptions(e) {
                    this.options = { ...this.defaultOptions,
                        ...e
                    }, this.updateCacheTime(this.options.cacheTime)
                }
                get meta() {
                    return this.options.meta
                }
                setState(e) {
                    this.dispatch({
                        type: "setState",
                        state: e
                    })
                }
                addObserver(e) {
                    this.observers.includes(e) || (this.observers.push(e), this.clearGcTimeout(), this.mutationCache.notify({
                        type: "observerAdded",
                        mutation: this,
                        observer: e
                    }))
                }
                removeObserver(e) {
                    this.observers = this.observers.filter(t => t !== e), this.scheduleGc(), this.mutationCache.notify({
                        type: "observerRemoved",
                        mutation: this,
                        observer: e
                    })
                }
                optionalRemove() {
                    this.observers.length || ("loading" === this.state.status ? this.scheduleGc() : this.mutationCache.remove(this))
                }
                continue () {
                    var e, t;
                    return null != (e = null == (t = this.retryer) ? void 0 : t.continue()) ? e : this.execute()
                }
                async execute() {
                    var e, t, n, r, i, a, s, o, u, c, l, d, h, f, p, m, b, y, g, v;
                    let w = "loading" === this.state.status;
                    try {
                        if (!w) {
                            this.dispatch({
                                type: "loading",
                                variables: this.options.variables
                            }), await (null == (u = (c = this.mutationCache.config).onMutate) ? void 0 : u.call(c, this.state.variables, this));
                            let e = await (null == (l = (d = this.options).onMutate) ? void 0 : l.call(d, this.state.variables));
                            e !== this.state.context && this.dispatch({
                                type: "loading",
                                context: e,
                                variables: this.state.variables
                            })
                        }
                        let h = await (() => {
                            var e;
                            return this.retryer = N({
                                fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"),
                                onFail: (e, t) => {
                                    this.dispatch({
                                        type: "failed",
                                        failureCount: e,
                                        error: t
                                    })
                                },
                                onPause: () => {
                                    this.dispatch({
                                        type: "pause"
                                    })
                                },
                                onContinue: () => {
                                    this.dispatch({
                                        type: "continue"
                                    })
                                },
                                retry: null != (e = this.options.retry) ? e : 0,
                                retryDelay: this.options.retryDelay,
                                networkMode: this.options.networkMode
                            }), this.retryer.promise
                        })();
                        return await (null == (e = (t = this.mutationCache.config).onSuccess) ? void 0 : e.call(t, h, this.state.variables, this.state.context, this)), await (null == (n = (r = this.options).onSuccess) ? void 0 : n.call(r, h, this.state.variables, this.state.context)), await (null == (i = (a = this.mutationCache.config).onSettled) ? void 0 : i.call(a, h, null, this.state.variables, this.state.context, this)), await (null == (s = (o = this.options).onSettled) ? void 0 : s.call(o, h, null, this.state.variables, this.state.context)), this.dispatch({
                            type: "success",
                            data: h
                        }), h
                    } catch (e) {
                        try {
                            throw await (null == (h = (f = this.mutationCache.config).onError) ? void 0 : h.call(f, e, this.state.variables, this.state.context, this)), await (null == (p = (m = this.options).onError) ? void 0 : p.call(m, e, this.state.variables, this.state.context)), await (null == (b = (y = this.mutationCache.config).onSettled) ? void 0 : b.call(y, void 0, e, this.state.variables, this.state.context, this)), await (null == (g = (v = this.options).onSettled) ? void 0 : g.call(v, void 0, e, this.state.variables, this.state.context)), e
                        } finally {
                            this.dispatch({
                                type: "error",
                                error: e
                            })
                        }
                    }
                }
                dispatch(e) {
                    this.state = (t => {
                        switch (e.type) {
                            case "failed":
                                return { ...t,
                                    failureCount: e.failureCount,
                                    failureReason: e.error
                                };
                            case "pause":
                                return { ...t,
                                    isPaused: !0
                                };
                            case "continue":
                                return { ...t,
                                    isPaused: !1
                                };
                            case "loading":
                                return { ...t,
                                    context: e.context,
                                    data: void 0,
                                    failureCount: 0,
                                    failureReason: null,
                                    error: null,
                                    isPaused: !A(this.options.networkMode),
                                    status: "loading",
                                    variables: e.variables
                                };
                            case "success":
                                return { ...t,
                                    data: e.data,
                                    failureCount: 0,
                                    failureReason: null,
                                    error: null,
                                    status: "success",
                                    isPaused: !1
                                };
                            case "error":
                                return { ...t,
                                    data: void 0,
                                    error: e.error,
                                    failureCount: t.failureCount + 1,
                                    failureReason: e.error,
                                    isPaused: !1,
                                    status: "error"
                                };
                            case "setState":
                                return { ...t,
                                    ...e.state
                                }
                        }
                    })(this.state), k.batch(() => {
                        this.observers.forEach(t => {
                            t.onMutationUpdate(e)
                        }), this.mutationCache.notify({
                            mutation: this,
                            type: "updated",
                            action: e
                        })
                    })
                }
            }

            function z() {
                return {
                    context: void 0,
                    data: void 0,
                    error: null,
                    failureCount: 0,
                    failureReason: null,
                    isPaused: !1,
                    status: "idle",
                    variables: void 0
                }
            }
            class _ extends I {
                constructor(e) {
                    super(), this.config = e || {}, this.mutations = [], this.mutationId = 0
                }
                build(e, t, n) {
                    let r = new L({
                        mutationCache: this,
                        logger: e.getLogger(),
                        mutationId: ++this.mutationId,
                        options: e.defaultMutationOptions(t),
                        state: n,
                        defaultOptions: t.mutationKey ? e.getMutationDefaults(t.mutationKey) : void 0
                    });
                    return this.add(r), r
                }
                add(e) {
                    this.mutations.push(e), this.notify({
                        type: "added",
                        mutation: e
                    })
                }
                remove(e) {
                    this.mutations = this.mutations.filter(t => t !== e), this.notify({
                        type: "removed",
                        mutation: e
                    })
                }
                clear() {
                    k.batch(() => {
                        this.mutations.forEach(e => {
                            this.remove(e)
                        })
                    })
                }
                getAll() {
                    return this.mutations
                }
                find(e) {
                    return void 0 === e.exact && (e.exact = !0), this.mutations.find(t => f(e, t))
                }
                findAll(e) {
                    return this.mutations.filter(t => f(e, t))
                }
                notify(e) {
                    k.batch(() => {
                        this.listeners.forEach(({
                            listener: t
                        }) => {
                            t(e)
                        })
                    })
                }
                resumePausedMutations() {
                    var e;
                    return this.resuming = (null != (e = this.resuming) ? e : Promise.resolve()).then(() => {
                        let e = this.mutations.filter(e => e.state.isPaused);
                        return k.batch(() => e.reduce((e, t) => e.then(() => t.continue().catch(s)), Promise.resolve()))
                    }).then(() => {
                        this.resuming = void 0
                    }), this.resuming
                }
            }

            function W(e, t) {
                return null == e.getNextPageParam ? void 0 : e.getNextPageParam(t[t.length - 1], t)
            }
            class Q {
                constructor(e = {}) {
                    this.queryCache = e.queryCache || new D, this.mutationCache = e.mutationCache || new _, this.logger = e.logger || S, this.defaultOptions = e.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0
                }
                mount() {
                    this.mountCount++, 1 === this.mountCount && (this.unsubscribeFocus = F.subscribe(() => {
                        F.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus())
                    }), this.unsubscribeOnline = T.subscribe(() => {
                        T.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline())
                    }))
                }
                unmount() {
                    var e, t;
                    this.mountCount--, 0 === this.mountCount && (null == (e = this.unsubscribeFocus) || e.call(this), this.unsubscribeFocus = void 0, null == (t = this.unsubscribeOnline) || t.call(this), this.unsubscribeOnline = void 0)
                }
                isFetching(e, t) {
                    let [n] = d(e, t);
                    return n.fetchStatus = "fetching", this.queryCache.findAll(n).length
                }
                isMutating(e) {
                    return this.mutationCache.findAll({ ...e,
                        fetching: !0
                    }).length
                }
                getQueryData(e, t) {
                    var n;
                    return null == (n = this.queryCache.find(e, t)) ? void 0 : n.state.data
                }
                ensureQueryData(e, t, n) {
                    let r = c(e, t, n),
                        i = this.getQueryData(r.queryKey);
                    return i ? Promise.resolve(i) : this.fetchQuery(r)
                }
                getQueriesData(e) {
                    return this.getQueryCache().findAll(e).map(({
                        queryKey: e,
                        state: t
                    }) => [e, t.data])
                }
                setQueryData(e, t, n) {
                    let r = this.queryCache.find(e),
                        i = null == r ? void 0 : r.state.data,
                        a = "function" == typeof t ? t(i) : t;
                    if (void 0 === a) return;
                    let s = c(e),
                        o = this.defaultQueryOptions(s);
                    return this.queryCache.build(this, o).setData(a, { ...n,
                        manual: !0
                    })
                }
                setQueriesData(e, t, n) {
                    return k.batch(() => this.getQueryCache().findAll(e).map(({
                        queryKey: e
                    }) => [e, this.setQueryData(e, t, n)]))
                }
                getQueryState(e, t) {
                    var n;
                    return null == (n = this.queryCache.find(e, t)) ? void 0 : n.state
                }
                removeQueries(e, t) {
                    let [n] = d(e, t), r = this.queryCache;
                    k.batch(() => {
                        r.findAll(n).forEach(e => {
                            r.remove(e)
                        })
                    })
                }
                resetQueries(e, t, n) {
                    let [r, i] = d(e, t, n), a = this.queryCache, s = {
                        type: "active",
                        ...r
                    };
                    return k.batch(() => (a.findAll(r).forEach(e => {
                        e.reset()
                    }), this.refetchQueries(s, i)))
                }
                cancelQueries(e, t, n) {
                    let [r, i = {}] = d(e, t, n);
                    return void 0 === i.revert && (i.revert = !0), Promise.all(k.batch(() => this.queryCache.findAll(r).map(e => e.cancel(i)))).then(s).catch(s)
                }
                invalidateQueries(e, t, n) {
                    let [r, i] = d(e, t, n);
                    return k.batch(() => {
                        var e, t;
                        if (this.queryCache.findAll(r).forEach(e => {
                                e.invalidate()
                            }), "none" === r.refetchType) return Promise.resolve();
                        let n = { ...r,
                            type: null != (e = null != (t = r.refetchType) ? t : r.type) ? e : "active"
                        };
                        return this.refetchQueries(n, i)
                    })
                }
                refetchQueries(e, t, n) {
                    let [r, i] = d(e, t, n), a = Promise.all(k.batch(() => this.queryCache.findAll(r).filter(e => !e.isDisabled()).map(e => {
                        var t;
                        return e.fetch(void 0, { ...i,
                            cancelRefetch: null == (t = null == i ? void 0 : i.cancelRefetch) || t,
                            meta: {
                                refetchPage: r.refetchPage
                            }
                        })
                    }))).then(s);
                    return null != i && i.throwOnError || (a = a.catch(s)), a
                }
                fetchQuery(e, t, n) {
                    let r = c(e, t, n),
                        i = this.defaultQueryOptions(r);
                    void 0 === i.retry && (i.retry = !1);
                    let a = this.queryCache.build(this, i);
                    return a.isStaleByTime(i.staleTime) ? a.fetch(i) : Promise.resolve(a.state.data)
                }
                prefetchQuery(e, t, n) {
                    return this.fetchQuery(e, t, n).then(s).catch(s)
                }
                fetchInfiniteQuery(e, t, n) {
                    let r = c(e, t, n);
                    return r.behavior = {
                        onFetch: e => {
                            e.fetchFn = () => {
                                var t, n, r, i, a, s, o;
                                let u;
                                let c = null == (t = e.fetchOptions) ? void 0 : null == (n = t.meta) ? void 0 : n.refetchPage,
                                    l = null == (r = e.fetchOptions) ? void 0 : null == (i = r.meta) ? void 0 : i.fetchMore,
                                    d = null == l ? void 0 : l.pageParam,
                                    h = (null == l ? void 0 : l.direction) === "forward",
                                    f = (null == l ? void 0 : l.direction) === "backward",
                                    p = (null == (a = e.state.data) ? void 0 : a.pages) || [],
                                    m = (null == (s = e.state.data) ? void 0 : s.pageParams) || [],
                                    b = m,
                                    y = !1,
                                    g = t => {
                                        Object.defineProperty(t, "signal", {
                                            enumerable: !0,
                                            get: () => {
                                                var t, n;
                                                return null != (t = e.signal) && t.aborted ? y = !0 : null == (n = e.signal) || n.addEventListener("abort", () => {
                                                    y = !0
                                                }), e.signal
                                            }
                                        })
                                    },
                                    v = e.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + e.options.queryHash + "'")),
                                    w = (e, t, n, r) => (b = r ? [t, ...b] : [...b, t], r ? [n, ...e] : [...e, n]),
                                    P = (t, n, r, i) => {
                                        if (y) return Promise.reject("Cancelled");
                                        if (void 0 === r && !n && t.length) return Promise.resolve(t);
                                        let a = {
                                            queryKey: e.queryKey,
                                            pageParam: r,
                                            meta: e.options.meta
                                        };
                                        return g(a), Promise.resolve(v(a)).then(e => w(t, r, e, i))
                                    };
                                if (p.length) {
                                    if (h) {
                                        let t = void 0 !== d,
                                            n = t ? d : W(e.options, p);
                                        u = P(p, t, n)
                                    } else if (f) {
                                        let t = void 0 !== d,
                                            n = t ? d : null == (o = e.options).getPreviousPageParam ? void 0 : o.getPreviousPageParam(p[0], p);
                                        u = P(p, t, n, !0)
                                    } else {
                                        b = [];
                                        let t = void 0 === e.options.getNextPageParam;
                                        u = !c || !p[0] || c(p[0], 0, p) ? P([], t, m[0]) : Promise.resolve(w([], m[0], p[0]));
                                        for (let n = 1; n < p.length; n++) u = u.then(r => {
                                            if (!c || !p[n] || c(p[n], n, p)) {
                                                let i = t ? m[n] : W(e.options, r);
                                                return P(r, t, i)
                                            }
                                            return Promise.resolve(w(r, m[n], p[n]))
                                        })
                                    }
                                } else u = P([]);
                                return u.then(e => ({
                                    pages: e,
                                    pageParams: b
                                }))
                            }
                        }
                    }, this.fetchQuery(r)
                }
                prefetchInfiniteQuery(e, t, n) {
                    return this.fetchInfiniteQuery(e, t, n).then(s).catch(s)
                }
                resumePausedMutations() {
                    return this.mutationCache.resumePausedMutations()
                }
                getQueryCache() {
                    return this.queryCache
                }
                getMutationCache() {
                    return this.mutationCache
                }
                getLogger() {
                    return this.logger
                }
                getDefaultOptions() {
                    return this.defaultOptions
                }
                setDefaultOptions(e) {
                    this.defaultOptions = e
                }
                setQueryDefaults(e, t) {
                    let n = this.queryDefaults.find(t => m(e) === m(t.queryKey));
                    n ? n.defaultOptions = t : this.queryDefaults.push({
                        queryKey: e,
                        defaultOptions: t
                    })
                }
                getQueryDefaults(e) {
                    if (!e) return;
                    let t = this.queryDefaults.find(t => b(e, t.queryKey));
                    return null == t ? void 0 : t.defaultOptions
                }
                setMutationDefaults(e, t) {
                    let n = this.mutationDefaults.find(t => m(e) === m(t.mutationKey));
                    n ? n.defaultOptions = t : this.mutationDefaults.push({
                        mutationKey: e,
                        defaultOptions: t
                    })
                }
                getMutationDefaults(e) {
                    if (!e) return;
                    let t = this.mutationDefaults.find(t => b(e, t.mutationKey));
                    return null == t ? void 0 : t.defaultOptions
                }
                defaultQueryOptions(e) {
                    if (null != e && e._defaulted) return e;
                    let t = { ...this.defaultOptions.queries,
                        ...this.getQueryDefaults(null == e ? void 0 : e.queryKey),
                        ...e,
                        _defaulted: !0
                    };
                    return !t.queryHash && t.queryKey && (t.queryHash = p(t.queryKey, t)), void 0 === t.refetchOnReconnect && (t.refetchOnReconnect = "always" !== t.networkMode), void 0 === t.useErrorBoundary && (t.useErrorBoundary = !!t.suspense), t
                }
                defaultMutationOptions(e) {
                    return null != e && e._defaulted ? e : { ...this.defaultOptions.mutations,
                        ...this.getMutationDefaults(null == e ? void 0 : e.mutationKey),
                        ...e,
                        _defaulted: !0
                    }
                }
                clear() {
                    this.queryCache.clear(), this.mutationCache.clear()
                }
            }

            function K(e) {
                return e.state.isPaused
            }

            function H(e) {
                return "success" === e.state.status
            }
            let Z = ["added", "removed", "updated"];

            function J(e) {
                return Z.includes(e)
            }
            async function X({
                queryClient: e,
                persister: t,
                maxAge: n = 864e5,
                buster: r = "",
                hydrateOptions: i
            }) {
                try {
                    let a = await t.restoreClient();
                    if (a) {
                        if (a.timestamp) {
                            let s = Date.now() - a.timestamp > n,
                                o = a.buster !== r;
                            s || o ? t.removeClient() : function(e, t, n) {
                                if ("object" != typeof t || null === t) return;
                                let r = e.getMutationCache(),
                                    i = e.getQueryCache(),
                                    a = t.mutations || [],
                                    s = t.queries || [];
                                a.forEach(t => {
                                    var i;
                                    r.build(e, { ...null == n ? void 0 : null == (i = n.defaultOptions) ? void 0 : i.mutations,
                                        mutationKey: t.mutationKey
                                    }, t.state)
                                }), s.forEach(({
                                    queryKey: t,
                                    state: r,
                                    queryHash: a
                                }) => {
                                    var s;
                                    let o = i.get(a);
                                    if (o) {
                                        if (o.state.dataUpdatedAt < r.dataUpdatedAt) {
                                            let {
                                                fetchStatus: e,
                                                ...t
                                            } = r;
                                            o.setState(t)
                                        }
                                        return
                                    }
                                    i.build(e, { ...null == n ? void 0 : null == (s = n.defaultOptions) ? void 0 : s.queries,
                                        queryKey: t,
                                        queryHash: a
                                    }, { ...r,
                                        fetchStatus: "idle"
                                    })
                                })
                            }(e, a.clientState, i)
                        } else t.removeClient()
                    }
                } catch (e) {
                    t.removeClient()
                }
            }
            async function Y({
                queryClient: e,
                persister: t,
                buster: n = "",
                dehydrateOptions: r
            }) {
                let i = {
                    buster: n,
                    timestamp: Date.now(),
                    clientState: function(e, t = {}) {
                        let n = [],
                            r = [];
                        if (!1 !== t.dehydrateMutations) {
                            let r = t.shouldDehydrateMutation || K;
                            e.getMutationCache().getAll().forEach(e => {
                                r(e) && n.push({
                                    mutationKey: e.options.mutationKey,
                                    state: e.state
                                })
                            })
                        }
                        if (!1 !== t.dehydrateQueries) {
                            let n = t.shouldDehydrateQuery || H;
                            e.getQueryCache().getAll().forEach(e => {
                                n(e) && r.push({
                                    state: e.state,
                                    queryKey: e.queryKey,
                                    queryHash: e.queryHash
                                })
                            })
                        }
                        return {
                            mutations: n,
                            queries: r
                        }
                    }(e, r)
                };
                await t.persistClient(i)
            }
            var V = n(42989),
                ee = n(2265);
            let et = ee.createContext(void 0),
                en = ee.createContext(!1);

            function er(e, t) {
                return e || (t && "undefined" != typeof window ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = et), window.ReactQueryClientContext) : et)
            }
            let ei = ({
                    context: e
                } = {}) => {
                    let t = ee.useContext(er(e, ee.useContext(en)));
                    if (!t) throw Error("No QueryClient set, use QueryClientProvider to set one");
                    return t
                },
                ea = ({
                    client: e,
                    children: t,
                    context: n,
                    contextSharing: r = !1
                }) => {
                    ee.useEffect(() => (e.mount(), () => {
                        e.unmount()
                    }), [e]);
                    let i = er(n, r);
                    return ee.createElement(en.Provider, {
                        value: !n && r
                    }, ee.createElement(i.Provider, {
                        value: e
                    }, t))
                },
                es = ee.createContext(!1),
                eo = () => ee.useContext(es);
            es.Provider;
            let eu = ee.createContext((r = !1, {
                    clearReset: () => {
                        r = !1
                    },
                    reset: () => {
                        r = !0
                    },
                    isReset: () => r
                })),
                ec = () => ee.useContext(eu);
            var el = n(26272);
            class ed extends I {
                constructor(e, t) {
                    super(), this.client = e, this.setOptions(t), this.bindMethods(), this.updateResult()
                }
                bindMethods() {
                    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this)
                }
                setOptions(e) {
                    var t;
                    let n = this.options;
                    this.options = this.client.defaultMutationOptions(e), g(n, this.options) || this.client.getMutationCache().notify({
                        type: "observerOptionsUpdated",
                        mutation: this.currentMutation,
                        observer: this
                    }), null == (t = this.currentMutation) || t.setOptions(this.options)
                }
                onUnsubscribe() {
                    if (!this.hasListeners()) {
                        var e;
                        null == (e = this.currentMutation) || e.removeObserver(this)
                    }
                }
                onMutationUpdate(e) {
                    this.updateResult();
                    let t = {
                        listeners: !0
                    };
                    "success" === e.type ? t.onSuccess = !0 : "error" === e.type && (t.onError = !0), this.notify(t)
                }
                getCurrentResult() {
                    return this.currentResult
                }
                reset() {
                    this.currentMutation = void 0, this.updateResult(), this.notify({
                        listeners: !0
                    })
                }
                mutate(e, t) {
                    return this.mutateOptions = t, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, { ...this.options,
                        variables: void 0 !== e ? e : this.options.variables
                    }), this.currentMutation.addObserver(this), this.currentMutation.execute()
                }
                updateResult() {
                    let e = this.currentMutation ? this.currentMutation.state : z(),
                        t = { ...e,
                            isLoading: "loading" === e.status,
                            isSuccess: "success" === e.status,
                            isError: "error" === e.status,
                            isIdle: "idle" === e.status,
                            mutate: this.mutate,
                            reset: this.reset
                        };
                    this.currentResult = t
                }
                notify(e) {
                    k.batch(() => {
                        if (this.mutateOptions && this.hasListeners()) {
                            var t, n, r, i, a, s, o, u;
                            e.onSuccess ? (null == (t = (n = this.mutateOptions).onSuccess) || t.call(n, this.currentResult.data, this.currentResult.variables, this.currentResult.context), null == (r = (i = this.mutateOptions).onSettled) || r.call(i, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context)) : e.onError && (null == (a = (s = this.mutateOptions).onError) || a.call(s, this.currentResult.error, this.currentResult.variables, this.currentResult.context), null == (o = (u = this.mutateOptions).onSettled) || o.call(u, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context))
                        }
                        e.listeners && this.listeners.forEach(({
                            listener: e
                        }) => {
                            e(this.currentResult)
                        })
                    })
                }
            }
            let eh = el.useSyncExternalStore;

            function ef() {}
            class ep extends I {
                constructor(e, t) {
                    super(), this.client = e, this.options = t, this.trackedProps = new Set, this.selectError = null, this.bindMethods(), this.setOptions(t)
                }
                bindMethods() {
                    this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this)
                }
                onSubscribe() {
                    1 === this.listeners.size && (this.currentQuery.addObserver(this), em(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers())
                }
                onUnsubscribe() {
                    this.hasListeners() || this.destroy()
                }
                shouldFetchOnReconnect() {
                    return eb(this.currentQuery, this.options, this.options.refetchOnReconnect)
                }
                shouldFetchOnWindowFocus() {
                    return eb(this.currentQuery, this.options, this.options.refetchOnWindowFocus)
                }
                destroy() {
                    this.listeners = new Set, this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this)
                }
                setOptions(e, t) {
                    let n = this.options,
                        r = this.currentQuery;
                    if (this.options = this.client.defaultQueryOptions(e), g(n, this.options) || this.client.getQueryCache().notify({
                            type: "observerOptionsUpdated",
                            query: this.currentQuery,
                            observer: this
                        }), void 0 !== this.options.enabled && "boolean" != typeof this.options.enabled) throw Error("Expected enabled to be a boolean");
                    this.options.queryKey || (this.options.queryKey = n.queryKey), this.updateQuery();
                    let i = this.hasListeners();
                    i && ey(this.currentQuery, r, this.options, n) && this.executeFetch(), this.updateResult(t), i && (this.currentQuery !== r || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) && this.updateStaleTimeout();
                    let a = this.computeRefetchInterval();
                    i && (this.currentQuery !== r || this.options.enabled !== n.enabled || a !== this.currentRefetchInterval) && this.updateRefetchInterval(a)
                }
                getOptimisticResult(e) {
                    let t = this.client.getQueryCache().build(this.client, e),
                        n = this.createResult(t, e);
                    return e.keepPreviousData || (void 0 !== e.placeholderData ? !n.isPlaceholderData : g(this.getCurrentResult(), n)) || (this.currentResult = n, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), n
                }
                getCurrentResult() {
                    return this.currentResult
                }
                trackResult(e) {
                    let t = {};
                    return Object.keys(e).forEach(n => {
                        Object.defineProperty(t, n, {
                            configurable: !1,
                            enumerable: !0,
                            get: () => (this.trackedProps.add(n), e[n])
                        })
                    }), t
                }
                getCurrentQuery() {
                    return this.currentQuery
                }
                remove() {
                    this.client.getQueryCache().remove(this.currentQuery)
                }
                refetch({
                    refetchPage: e,
                    ...t
                } = {}) {
                    return this.fetch({ ...t,
                        meta: {
                            refetchPage: e
                        }
                    })
                }
                fetchOptimistic(e) {
                    let t = this.client.defaultQueryOptions(e),
                        n = this.client.getQueryCache().build(this.client, t);
                    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, t))
                }
                fetch(e) {
                    var t;
                    return this.executeFetch({ ...e,
                        cancelRefetch: null == (t = e.cancelRefetch) || t
                    }).then(() => (this.updateResult(), this.currentResult))
                }
                executeFetch(e) {
                    this.updateQuery();
                    let t = this.currentQuery.fetch(this.options, e);
                    return null != e && e.throwOnError || (t = t.catch(s)), t
                }
                updateStaleTimeout() {
                    if (this.clearStaleTimeout(), a || this.currentResult.isStale || !o(this.options.staleTime)) return;
                    let e = u(this.currentResult.dataUpdatedAt, this.options.staleTime);
                    this.staleTimeoutId = setTimeout(() => {
                        this.currentResult.isStale || this.updateResult()
                    }, e + 1)
                }
                computeRefetchInterval() {
                    var e;
                    return "function" == typeof this.options.refetchInterval ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : null != (e = this.options.refetchInterval) && e
                }
                updateRefetchInterval(e) {
                    this.clearRefetchInterval(), this.currentRefetchInterval = e, !a && !1 !== this.options.enabled && o(this.currentRefetchInterval) && 0 !== this.currentRefetchInterval && (this.refetchIntervalId = setInterval(() => {
                        (this.options.refetchIntervalInBackground || F.isFocused()) && this.executeFetch()
                    }, this.currentRefetchInterval))
                }
                updateTimers() {
                    this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval())
                }
                clearStaleTimeout() {
                    this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0)
                }
                clearRefetchInterval() {
                    this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0)
                }
                createResult(e, t) {
                    let n;
                    let r = this.currentQuery,
                        i = this.options,
                        a = this.currentResult,
                        s = this.currentResultState,
                        o = this.currentResultOptions,
                        u = e !== r,
                        c = u ? e.state : this.currentQueryInitialState,
                        l = u ? this.currentResult : this.previousQueryResult,
                        {
                            state: d
                        } = e,
                        {
                            dataUpdatedAt: h,
                            error: f,
                            errorUpdatedAt: p,
                            fetchStatus: m,
                            status: b
                        } = d,
                        y = !1,
                        g = !1;
                    if (t._optimisticResults) {
                        let n = this.hasListeners(),
                            a = !n && em(e, t),
                            s = n && ey(e, r, t, i);
                        (a || s) && (m = A(e.options.networkMode) ? "fetching" : "paused", h || (b = "loading")), "isRestoring" === t._optimisticResults && (m = "idle")
                    }
                    if (t.keepPreviousData && !d.dataUpdatedAt && null != l && l.isSuccess && "error" !== b) n = l.data, h = l.dataUpdatedAt, b = l.status, y = !0;
                    else if (t.select && void 0 !== d.data) {
                        if (a && d.data === (null == s ? void 0 : s.data) && t.select === this.selectFn) n = this.selectResult;
                        else try {
                            this.selectFn = t.select, n = t.select(d.data), n = E(null == a ? void 0 : a.data, n, t), this.selectResult = n, this.selectError = null
                        } catch (e) {
                            this.selectError = e
                        }
                    } else n = d.data;
                    if (void 0 !== t.placeholderData && void 0 === n && "loading" === b) {
                        let e;
                        if (null != a && a.isPlaceholderData && t.placeholderData === (null == o ? void 0 : o.placeholderData)) e = a.data;
                        else if (e = "function" == typeof t.placeholderData ? t.placeholderData() : t.placeholderData, t.select && void 0 !== e) try {
                            e = t.select(e), this.selectError = null
                        } catch (e) {
                            this.selectError = e
                        }
                        void 0 !== e && (b = "success", n = E(null == a ? void 0 : a.data, e, t), g = !0)
                    }
                    this.selectError && (f = this.selectError, n = this.selectResult, p = Date.now(), b = "error");
                    let v = "fetching" === m,
                        w = "loading" === b,
                        P = "error" === b;
                    return {
                        status: b,
                        fetchStatus: m,
                        isLoading: w,
                        isSuccess: "success" === b,
                        isError: P,
                        isInitialLoading: w && v,
                        data: n,
                        dataUpdatedAt: h,
                        error: f,
                        errorUpdatedAt: p,
                        failureCount: d.fetchFailureCount,
                        failureReason: d.fetchFailureReason,
                        errorUpdateCount: d.errorUpdateCount,
                        isFetched: d.dataUpdateCount > 0 || d.errorUpdateCount > 0,
                        isFetchedAfterMount: d.dataUpdateCount > c.dataUpdateCount || d.errorUpdateCount > c.errorUpdateCount,
                        isFetching: v,
                        isRefetching: v && !w,
                        isLoadingError: P && 0 === d.dataUpdatedAt,
                        isPaused: "paused" === m,
                        isPlaceholderData: g,
                        isPreviousData: y,
                        isRefetchError: P && 0 !== d.dataUpdatedAt,
                        isStale: eg(e, t),
                        refetch: this.refetch,
                        remove: this.remove
                    }
                }
                updateResult(e) {
                    let t = this.currentResult,
                        n = this.createResult(this.currentQuery, this.options);
                    if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, g(n, t)) return;
                    this.currentResult = n;
                    let r = {
                        cache: !0
                    };
                    (null == e ? void 0 : e.listeners) !== !1 && (() => {
                        if (!t) return !0;
                        let {
                            notifyOnChangeProps: e
                        } = this.options, n = "function" == typeof e ? e() : e;
                        if ("all" === n || !n && !this.trackedProps.size) return !0;
                        let r = new Set(null != n ? n : this.trackedProps);
                        return this.options.useErrorBoundary && r.add("error"), Object.keys(this.currentResult).some(e => this.currentResult[e] !== t[e] && r.has(e))
                    })() && (r.listeners = !0), this.notify({ ...r,
                        ...e
                    })
                }
                updateQuery() {
                    let e = this.client.getQueryCache().build(this.client, this.options);
                    if (e === this.currentQuery) return;
                    let t = this.currentQuery;
                    this.currentQuery = e, this.currentQueryInitialState = e.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (null == t || t.removeObserver(this), e.addObserver(this))
                }
                onQueryUpdate(e) {
                    let t = {};
                    "success" === e.type ? t.onSuccess = !e.manual : "error" !== e.type || G(e.error) || (t.onError = !0), this.updateResult(t), this.hasListeners() && this.updateTimers()
                }
                notify(e) {
                    k.batch(() => {
                        var t, n, r, i, a, s, o, u;
                        e.onSuccess ? (null == (t = (n = this.options).onSuccess) || t.call(n, this.currentResult.data), null == (r = (i = this.options).onSettled) || r.call(i, this.currentResult.data, null)) : e.onError && (null == (a = (s = this.options).onError) || a.call(s, this.currentResult.error), null == (o = (u = this.options).onSettled) || o.call(u, void 0, this.currentResult.error)), e.listeners && this.listeners.forEach(({
                            listener: e
                        }) => {
                            e(this.currentResult)
                        }), e.cache && this.client.getQueryCache().notify({
                            query: this.currentQuery,
                            type: "observerResultsUpdated"
                        })
                    })
                }
            }

            function em(e, t) {
                return !1 !== t.enabled && !e.state.dataUpdatedAt && !("error" === e.state.status && !1 === t.retryOnMount) || e.state.dataUpdatedAt > 0 && eb(e, t, t.refetchOnMount)
            }

            function eb(e, t, n) {
                if (!1 !== t.enabled) {
                    let r = "function" == typeof n ? n(e) : n;
                    return "always" === r || !1 !== r && eg(e, t)
                }
                return !1
            }

            function ey(e, t, n, r) {
                return !1 !== n.enabled && (e !== t || !1 === r.enabled) && (!n.suspense || "error" !== e.state.status) && eg(e, n)
            }

            function eg(e, t) {
                return e.isStaleByTime(t.staleTime)
            }
            var ev = n(65401);

            function ew({
                queryClient: e = new Q({
                    defaultOptions: {
                        queries: {
                            cacheTime: 864e5,
                            networkMode: "offlineFirst",
                            refetchOnWindowFocus: !1,
                            retry: 0
                        },
                        mutations: {
                            networkMode: "offlineFirst"
                        }
                    }
                }),
                storage: t = (0, V.o6)({
                    storage: "undefined" != typeof window && window.localStorage ? window.localStorage : V.wp
                }),
                persister: n = "undefined" != typeof window ? function({
                    storage: e,
                    key: t = "REACT_QUERY_OFFLINE_CACHE",
                    throttleTime: n = 1e3,
                    serialize: r = JSON.stringify,
                    deserialize: a = JSON.parse,
                    retry: s
                }) {
                    if (e) {
                        let i = n => {
                            try {
                                e.setItem(t, r(n));
                                return
                            } catch (e) {
                                return e
                            }
                        };
                        return {
                            persistClient: function(e, t = 100) {
                                let n, r = null;
                                return function(...i) {
                                    n = i, null === r && (r = setTimeout(() => {
                                        e(...n), r = null
                                    }, t))
                                }
                            }(e => {
                                let t = e,
                                    n = i(t),
                                    r = 0;
                                for (; n && t;) r++, (t = null == s ? void 0 : s({
                                    persistedClient: t,
                                    error: n,
                                    errorCount: r
                                })) && (n = i(t))
                            }, n),
                            restoreClient: () => {
                                let n = e.getItem(t);
                                if (n) return a(n)
                            },
                            removeClient: () => {
                                e.removeItem(t)
                            }
                        }
                    }
                    return {
                        persistClient: i,
                        restoreClient: () => void 0,
                        removeClient: i
                    }
                }({
                    key: "cache",
                    storage: t,
                    serialize: e => e,
                    deserialize: e => e
                }) : void 0,
                ...r
            }) {
                let a = (0, V._g)({ ...r,
                    storage: t
                });
                if (n) {
                    var s;
                    let t, r;
                    r = !1, X(s = {
                        queryClient: e,
                        persister: n,
                        dehydrateOptions: {
                            shouldDehydrateQuery: e => 0 !== e.cacheTime && !1 !== e.queryKey[0].persist
                        }
                    }).then(() => {
                        r || (t = function(e) {
                            let t = e.queryClient.getQueryCache().subscribe(t => {
                                    J(t.type) && Y(e)
                                }),
                                n = e.queryClient.getMutationCache().subscribe(t => {
                                    J(t.type) && Y(e)
                                });
                            return () => {
                                t(), n()
                            }
                        }(s))
                    })
                }
                return Object.assign(a, {
                    queryClient: e
                })
            }
            var eP = ee.createContext(void 0),
                eC = ee.createContext(void 0);

            function ex({
                children: e,
                config: t
            }) {
                return ee.createElement(eP.Provider, {
                    children: ee.createElement(ea, {
                        children: e,
                        client: t.queryClient,
                        context: eC
                    }),
                    value: t
                })
            }

            function eO() {
                let e = ee.useContext(eP);
                if (!e) throw Error("`useConfig` must be used within `WagmiConfig`.\n\nRead more: https://wagmi.sh/react/WagmiConfig");
                return e
            }
            var eE = el.useSyncExternalStore;

            function eS(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function ek(e) {
                return JSON.stringify(e, (e, t) => ! function(e) {
                    if (!eS(e)) return !1;
                    let t = e.constructor;
                    if (void 0 === t) return !0;
                    let n = t.prototype;
                    return !!(eS(n) && n.hasOwnProperty("isPrototypeOf"))
                }(t) ? "bigint" == typeof t ? t.toString() : t : Object.keys(t).sort().reduce((e, n) => (e[n] = t[n], e), {}))
            }

            function eI(e, t, n) {
                return function(e, t, n) {
                    var r, i;
                    let a = l(e, void 0, void 0),
                        s = ei({
                            context: a.context
                        }),
                        [o] = ee.useState(() => new ed(s, a));
                    ee.useEffect(() => {
                        o.setOptions(a)
                    }, [o, a]);
                    let u = eh(ee.useCallback(e => o.subscribe(k.batchCalls(e)), [o]), () => o.getCurrentResult(), () => o.getCurrentResult()),
                        c = ee.useCallback((e, t) => {
                            o.mutate(e, t).catch(ef)
                        }, [o]);
                    if (u.error && (r = o.options.useErrorBoundary, i = [u.error], "function" == typeof r ? r(...i) : !!r)) throw u.error;
                    return { ...u,
                        mutate: c,
                        mutateAsync: u.mutate
                    }
                }({
                    context: eC,
                    ...l(e, t, n)
                })
            }

            function eR(e, t, n) {
                let r = function(e, t) {
                        var n, r;
                        let i = ei({
                                context: e.context
                            }),
                            a = eo(),
                            s = ec(),
                            o = i.defaultQueryOptions({ ...e,
                                queryKeyHashFn: ek
                            });
                        o._optimisticResults = a ? "isRestoring" : "optimistic", o.onError && (o.onError = k.batchCalls(o.onError)), o.onSuccess && (o.onSuccess = k.batchCalls(o.onSuccess)), o.onSettled && (o.onSettled = k.batchCalls(o.onSettled)), o.suspense && "number" != typeof o.staleTime && (o.staleTime = 1e3), (o.suspense || o.useErrorBoundary) && !s.isReset() && (o.retryOnMount = !1);
                        let [u] = ee.useState(() => new t(i, o)), c = u.getOptimisticResult(o);
                        if (eE(ee.useCallback(e => a ? () => void 0 : u.subscribe(k.batchCalls(e)), [u, a]), () => u.getCurrentResult(), () => u.getCurrentResult()), ee.useEffect(() => {
                                s.clearReset()
                            }, [s]), ee.useEffect(() => {
                                u.setOptions(o, {
                                    listeners: !1
                                })
                            }, [o, u]), o.suspense && c.isLoading && c.isFetching && !a) throw u.fetchOptimistic(o).then(({
                            data: e
                        }) => {
                            o.onSuccess ? .(e), o.onSettled ? .(e, null)
                        }).catch(e => {
                            s.clearReset(), o.onError ? .(e), o.onSettled ? .(void 0, e)
                        });
                        if (c.isError && !s.isReset() && !c.isFetching && (n = o.useErrorBoundary, r = [c.error, u.getCurrentQuery()], "function" == typeof n ? n(...r) : !!n)) throw c.error;
                        let l = "loading" === c.status && "idle" === c.fetchStatus ? "idle" : c.status,
                            d = "loading" === l && "fetching" === c.fetchStatus;
                        return { ...c,
                            defaultedOptions: o,
                            isIdle: "idle" === l,
                            isLoading: d,
                            observer: u,
                            status: l
                        }
                    }({
                        context: eC,
                        ...Array.isArray(e) ? "function" == typeof t ? { ...n,
                            queryKey: e,
                            queryFn: t
                        } : { ...t,
                            queryKey: e
                        } : e
                    }, ep),
                    i = {
                        data: r.data,
                        error: r.error,
                        fetchStatus: r.fetchStatus,
                        isError: r.isError,
                        isFetched: r.isFetched,
                        isFetchedAfterMount: r.isFetchedAfterMount,
                        isFetching: r.isFetching,
                        isIdle: r.isIdle,
                        isLoading: r.isLoading,
                        isRefetching: r.isRefetching,
                        isSuccess: r.isSuccess,
                        refetch: r.refetch,
                        status: r.status,
                        internal: {
                            dataUpdatedAt: r.dataUpdatedAt,
                            errorUpdatedAt: r.errorUpdatedAt,
                            failureCount: r.failureCount,
                            isFetchedAfterMount: r.isFetchedAfterMount,
                            isLoadingError: r.isLoadingError,
                            isPaused: r.isPaused,
                            isPlaceholderData: r.isPlaceholderData,
                            isPreviousData: r.isPreviousData,
                            isRefetchError: r.isRefetchError,
                            isStale: r.isStale,
                            remove: r.remove
                        }
                    };
                return r.defaultedOptions.notifyOnChangeProps ? i : function(e, t) {
                    let n = {};
                    return Object.keys(e).forEach(r => {
                        Object.defineProperty(n, r, {
                            configurable: !1,
                            enumerable: !0,
                            get: () => (t.trackedProps.add(r), e[r])
                        })
                    }), n
                }(i, r.observer)
            }
            var eF = () => ei({
                context: eC
            });

            function e$({
                chainId: e
            } = {}) {
                return (0, ev.useSyncExternalStoreWithSelector)(t => (0, V.pC)({
                    chainId: e
                }, t), () => (0, V.uV)({
                    chainId: e
                }), () => (0, V.uV)({
                    chainId: e
                }), e => e, (e, t) => e.uid === t.uid)
            }

            function ej({
                chainId: e
            }) {
                return [{
                    entity: "walletClient",
                    chainId: e,
                    persist: !1
                }]
            }

            function eT({
                queryKey: [{
                    chainId: e
                }]
            }) {
                return (0, V.xz)({
                    chainId: e
                })
            }

            function eM({
                chainId: e
            } = {}) {
                return e$({
                    chainId: e
                }).chain.id
            }

            function eA({
                chainId: e,
                scopeKey: t
            }) {
                return [{
                    entity: "blockNumber",
                    chainId: e,
                    scopeKey: t
                }]
            }

            function eq({
                queryKey: [{
                    chainId: e
                }]
            }) {
                return (0, V.RQ)({
                    chainId: e
                })
            }

            function eG({
                cacheTime: e = 0,
                chainId: t,
                enabled: n = !0,
                scopeKey: r,
                staleTime: i,
                suspense: a,
                watch: s = !1,
                onBlock: o,
                onError: u,
                onSettled: c,
                onSuccess: l
            } = {}) {
                let d = eM({
                        chainId: t
                    }),
                    h = e$({
                        chainId: d
                    }),
                    f = function({
                        chainId: e
                    } = {}) {
                        return (0, ev.useSyncExternalStoreWithSelector)(t => (0, V.fq)({
                            chainId: e
                        }, t), () => (0, V.jr)({
                            chainId: e
                        }), () => (0, V.jr)({
                            chainId: e
                        }), e => e, (e, t) => e ? .uid === t ? .uid)
                    }({
                        chainId: d
                    }),
                    p = eF();
                return ee.useEffect(() => {
                    if (n && (s || o)) return (f ? ? h).watchBlockNumber({
                        onBlockNumber: e => {
                            s && p.setQueryData(eA({
                                chainId: d,
                                scopeKey: r
                            }), e), o && o(e)
                        },
                        emitOnBegin: !0
                    })
                }, [d, r, o, h, p, s, f, n]), eR(eA({
                    scopeKey: r,
                    chainId: d
                }), eq, {
                    cacheTime: e,
                    enabled: n,
                    staleTime: i,
                    suspense: a,
                    onError: u,
                    onSettled: c,
                    onSuccess: l
                })
            }
            var eN = e => "object" == typeof e && !Array.isArray(e);

            function eB(e, t, n = t, r = V.vZ) {
                let i = ee.useRef([]),
                    a = (0, ev.useSyncExternalStoreWithSelector)(e, t, n, e => e, (e, t) => {
                        if (eN(e) && eN(t) && i.current.length) {
                            for (let n of i.current)
                                if (!r(e[n], t[n])) return !1;
                            return !0
                        }
                        return r(e, t)
                    });
                if (eN(a)) {
                    let e = { ...a
                    };
                    return Object.defineProperties(e, Object.entries(e).reduce((e, [t, n]) => ({ ...e,
                        [t]: {
                            configurable: !1,
                            enumerable: !0,
                            get: () => (i.current.includes(t) || i.current.push(t), n)
                        }
                    }), {})), e
                }
                return a
            }

            function eU({
                onConnect: e,
                onDisconnect: t
            } = {}) {
                let n = eO(),
                    r = eB(ee.useCallback(e => (0, V.uH)(e), [n]), V.D0),
                    i = ee.useRef(),
                    a = i.current;
                return ee.useEffect(() => {
                    a ? .status !== "connected" && "connected" === r.status && e ? .({
                        address: r.address,
                        connector: r.connector,
                        isReconnected: a ? .status === "reconnecting" || a ? .status === void 0
                    }), a ? .status === "connected" && "disconnected" === r.status && t ? .(), i.current = r
                }, [e, t, a, r]), r
            }

            function eD() {
                let e = eO();
                return eB((0, ee.useCallback)(e => (0, V.QC)(e), [e]), V.Hy)
            }
            var eL = e => [{
                    entity: "switchNetwork",
                    ...e
                }],
                ez = e => {
                    let {
                        chainId: t
                    } = e;
                    if (!t) throw Error("chainId is required");
                    return (0, V.If)({
                        chainId: t
                    })
                };

            function e_({
                chainId: e,
                throwForSwitchChainNotSupported: t,
                onError: n,
                onMutate: r,
                onSettled: i,
                onSuccess: a
            } = {}) {
                let s, o;
                let u = eO(),
                    c = function() {
                        let [, e] = ee.useReducer(e => e + 1, 0);
                        return e
                    }(),
                    {
                        data: l,
                        error: d,
                        isError: h,
                        isIdle: f,
                        isLoading: p,
                        isSuccess: m,
                        mutate: b,
                        mutateAsync: y,
                        reset: g,
                        status: v,
                        variables: w
                    } = eI(eL({
                        chainId: e
                    }), ez, {
                        onError: n,
                        onMutate: r,
                        onSettled: i,
                        onSuccess: a
                    }),
                    P = ee.useCallback(t => b({
                        chainId: t ? ? e
                    }), [e, b]),
                    C = ee.useCallback(t => y({
                        chainId: t ? ? e
                    }), [e, y]);
                ee.useEffect(() => u.subscribe(({
                    chains: e,
                    connector: t
                }) => ({
                    chains: e,
                    connector: t
                }), c), [u, c]);
                let x = !!u.connector ? .switchChain;
                return (t || x) && (s = P, o = C), {
                    chains: u.chains ? ? [],
                    data: l,
                    error: d,
                    isError: h,
                    isIdle: f,
                    isLoading: p,
                    isSuccess: m,
                    pendingChainId: w ? .chainId,
                    reset: g,
                    status: v,
                    switchNetwork: s,
                    switchNetworkAsync: o,
                    variables: w
                }
            }

            function eW({
                abi: e,
                address: t,
                account: n,
                args: r,
                blockNumber: i,
                blockTag: a,
                cacheOnBlock: s = !1,
                cacheTime: o,
                chainId: u,
                enabled: c = !0,
                functionName: l,
                isDataEqual: d,
                keepPreviousData: h,
                onError: f,
                onSettled: p,
                onSuccess: m,
                scopeKey: b,
                select: g,
                staleTime: v,
                structuralSharing: w = (e, t) => (0, V.vZ)(e, t) ? e : y(e, t),
                suspense: P,
                watch: C
            } = {}) {
                let x = eM({
                        chainId: u
                    }),
                    {
                        data: O
                    } = eG({
                        chainId: x,
                        enabled: C || s,
                        scopeKey: C || s ? void 0 : "idle",
                        watch: C
                    }),
                    E = i ? ? O,
                    S = ee.useMemo(() => (function({
                        account: e,
                        address: t,
                        args: n,
                        blockNumber: r,
                        blockTag: i,
                        chainId: a,
                        functionName: s,
                        scopeKey: o
                    }) {
                        return [{
                            entity: "readContract",
                            account: e,
                            address: t,
                            args: n,
                            blockNumber: r,
                            blockTag: i,
                            chainId: a,
                            functionName: s,
                            scopeKey: o
                        }]
                    })({
                        account: n,
                        address: t,
                        args: r,
                        blockNumber: s ? E : void 0,
                        blockTag: a,
                        chainId: x,
                        functionName: l,
                        scopeKey: b
                    }), [n, t, r, E, a, s, x, l, b]),
                    k = ee.useMemo(() => {
                        let n = !!(c && e && t && l);
                        return s && (n = !!(n && E)), n
                    }, [e, t, E, s, c, l]);
                return ! function({
                    chainId: e,
                    enabled: t,
                    queryKey: n
                }) {
                    let r = eF(),
                        i = ee.useCallback(() => r.invalidateQueries({
                            queryKey: n
                        }, {
                            cancelRefetch: !1
                        }), [r, n]);
                    eG({
                        chainId: e,
                        enabled: t,
                        onBlock: t ? i : void 0,
                        scopeKey: t ? void 0 : "idle"
                    })
                }({
                    chainId: x,
                    enabled: !!(k && C && !s),
                    queryKey: S
                }), eR(S, function({
                    abi: e
                }) {
                    return async ({
                        queryKey: [{
                            account: t,
                            address: n,
                            args: r,
                            blockNumber: i,
                            blockTag: a,
                            chainId: s,
                            functionName: o
                        }]
                    }) => {
                        if (!e) throw Error("abi is required");
                        if (!n) throw Error("address is required");
                        return await (0, V.a4)({
                            account: t,
                            address: n,
                            args: r,
                            blockNumber: i,
                            blockTag: a,
                            chainId: s,
                            abi: e,
                            functionName: o
                        }) ? ? null
                    }
                }({
                    abi: e
                }), {
                    cacheTime: o,
                    enabled: k,
                    isDataEqual: d,
                    keepPreviousData: h,
                    select: g,
                    staleTime: v,
                    structuralSharing: w,
                    suspense: P,
                    onError: f,
                    onSettled: p,
                    onSuccess: m
                })
            }

            function eQ(e) {
                if ("prepared" === e.mode) {
                    if (!e.request) throw Error("request is required");
                    return (0, V.n9)({
                        mode: "prepared",
                        request: e.request
                    })
                }
                if (!e.address) throw Error("address is required");
                if (!e.abi) throw Error("abi is required");
                if (!e.functionName) throw Error("functionName is required");
                return (0, V.n9)({
                    address: e.address,
                    args: e.args,
                    chainId: e.chainId,
                    abi: e.abi,
                    functionName: e.functionName,
                    accessList: e.accessList,
                    account: e.account,
                    dataSuffix: e.dataSuffix,
                    gas: e.gas,
                    gasPrice: e.gasPrice,
                    maxFeePerGas: e.maxFeePerGas,
                    maxPriorityFeePerGas: e.maxPriorityFeePerGas,
                    nonce: e.nonce,
                    value: e.value
                })
            }

            function eK(e) {
                let {
                    address: t,
                    abi: n,
                    args: r,
                    chainId: i,
                    functionName: a,
                    mode: s,
                    request: o,
                    dataSuffix: u
                } = e, {
                    accessList: c,
                    account: l,
                    gas: d,
                    gasPrice: h,
                    maxFeePerGas: f,
                    maxPriorityFeePerGas: p,
                    nonce: m,
                    value: b
                } = (0, V.gY)(e), {
                    data: y,
                    error: g,
                    isError: v,
                    isIdle: w,
                    isLoading: P,
                    isSuccess: C,
                    mutate: x,
                    mutateAsync: O,
                    reset: E,
                    status: S,
                    variables: k
                } = eI(function({
                    address: e,
                    abi: t,
                    functionName: n,
                    ...r
                }) {
                    let {
                        args: i,
                        accessList: a,
                        account: s,
                        dataSuffix: o,
                        gas: u,
                        gasPrice: c,
                        maxFeePerGas: l,
                        maxPriorityFeePerGas: d,
                        nonce: h,
                        request: f,
                        value: p
                    } = r;
                    return [{
                        entity: "writeContract",
                        address: e,
                        args: i,
                        abi: t,
                        accessList: a,
                        account: s,
                        dataSuffix: o,
                        functionName: n,
                        gas: u,
                        gasPrice: c,
                        maxFeePerGas: l,
                        maxPriorityFeePerGas: d,
                        nonce: h,
                        request: f,
                        value: p
                    }]
                }({
                    address: t,
                    abi: n,
                    functionName: a,
                    chainId: i,
                    mode: s,
                    args: r,
                    accessList: c,
                    account: l,
                    dataSuffix: u,
                    gas: d,
                    gasPrice: h,
                    maxFeePerGas: f,
                    maxPriorityFeePerGas: p,
                    nonce: m,
                    request: o,
                    value: b
                }), eQ, {
                    onError: e.onError,
                    onMutate: e.onMutate,
                    onSettled: e.onSettled,
                    onSuccess: e.onSuccess
                });
                return {
                    data: y,
                    error: g,
                    isError: v,
                    isIdle: w,
                    isLoading: P,
                    isSuccess: C,
                    reset: E,
                    status: S,
                    variables: k,
                    write: ee.useMemo(() => {
                        if ("prepared" === e.mode) {
                            if (!o) return;
                            return () => x({
                                mode: "prepared",
                                request: e.request,
                                chainId: e.chainId
                            })
                        }
                        return e => x({
                            address: t,
                            args: r,
                            abi: n,
                            functionName: a,
                            chainId: i,
                            accessList: c,
                            account: l,
                            dataSuffix: u,
                            gas: d,
                            gasPrice: h,
                            maxFeePerGas: f,
                            maxPriorityFeePerGas: p,
                            nonce: m,
                            value: b,
                            ...e
                        })
                    }, [c, l, n, t, r, i, e.chainId, e.mode, e.request, u, a, d, h, f, p, x, m, o, b]),
                    writeAsync: ee.useMemo(() => {
                        if ("prepared" === e.mode) {
                            if (!o) return;
                            return () => O({
                                mode: "prepared",
                                request: e.request
                            })
                        }
                        return e => O({
                            address: t,
                            args: r,
                            abi: n,
                            chainId: i,
                            functionName: a,
                            accessList: c,
                            account: l,
                            dataSuffix: u,
                            gas: d,
                            gasPrice: h,
                            maxFeePerGas: f,
                            maxPriorityFeePerGas: p,
                            nonce: m,
                            value: b,
                            ...e
                        })
                    }, [c, l, n, t, r, i, e.mode, e.request, u, a, d, h, f, p, O, m, o, b])
                }
            }

            function eH({
                address: e,
                abi: t,
                functionName: n,
                chainId: r,
                args: i,
                cacheTime: a,
                dataSuffix: s,
                enabled: o = !0,
                scopeKey: u,
                staleTime: c,
                suspense: l,
                onError: d,
                onSettled: h,
                onSuccess: f,
                ...p
            } = {}) {
                let {
                    chain: m
                } = eD(), {
                    data: b
                } = function({
                    chainId: e,
                    suspense: t,
                    onError: n,
                    onSettled: r,
                    onSuccess: i
                } = {}) {
                    let {
                        connector: a
                    } = eU(), s = eM({
                        chainId: e
                    }), o = eR(ej({
                        chainId: s
                    }), eT, {
                        cacheTime: 0,
                        enabled: !!a,
                        staleTime: 1 / 0,
                        suspense: t,
                        onError: n,
                        onSettled: r,
                        onSuccess: i
                    }), u = eF();
                    return ee.useEffect(() => (0, V.Tb)({
                        chainId: s
                    }, e => {
                        e ? u.invalidateQueries(ej({
                            chainId: s
                        })) : u.removeQueries(ej({
                            chainId: s
                        }))
                    }), [u, s]), o
                }({
                    chainId: r
                }), {
                    accessList: y,
                    account: g,
                    blockNumber: v,
                    blockTag: w,
                    gas: P,
                    gasPrice: C,
                    maxFeePerGas: x,
                    maxPriorityFeePerGas: O,
                    nonce: E,
                    value: S
                } = (0, V._X)(p), k = eR(function({
                    accessList: e,
                    account: t,
                    activeChainId: n,
                    args: r,
                    address: i,
                    blockNumber: a,
                    blockTag: s,
                    chainId: o,
                    dataSuffix: u,
                    functionName: c,
                    gas: l,
                    gasPrice: d,
                    maxFeePerGas: h,
                    maxPriorityFeePerGas: f,
                    nonce: p,
                    scopeKey: m,
                    walletClientAddress: b,
                    value: y
                }) {
                    return [{
                        entity: "prepareContractTransaction",
                        accessList: e,
                        account: t,
                        activeChainId: n,
                        address: i,
                        args: r,
                        blockNumber: a,
                        blockTag: s,
                        chainId: o,
                        dataSuffix: u,
                        functionName: c,
                        gas: l,
                        gasPrice: d,
                        maxFeePerGas: h,
                        maxPriorityFeePerGas: f,
                        nonce: p,
                        scopeKey: m,
                        walletClientAddress: b,
                        value: y
                    }]
                }({
                    accessList: y,
                    account: g,
                    activeChainId: m ? .id,
                    address: e,
                    args: i,
                    blockNumber: v,
                    blockTag: w,
                    chainId: r,
                    dataSuffix: s,
                    functionName: n,
                    gas: P,
                    gasPrice: C,
                    maxFeePerGas: x,
                    maxPriorityFeePerGas: O,
                    nonce: E,
                    scopeKey: u,
                    walletClientAddress: b ? .account.address,
                    value: S
                }), function({
                    abi: e,
                    walletClient: t
                }) {
                    return ({
                        queryKey: [{
                            accessList: n,
                            account: r,
                            args: i,
                            address: a,
                            blockNumber: s,
                            blockTag: o,
                            chainId: u,
                            dataSuffix: c,
                            functionName: l,
                            gas: d,
                            gasPrice: h,
                            maxFeePerGas: f,
                            maxPriorityFeePerGas: p,
                            nonce: m,
                            value: b
                        }]
                    }) => {
                        if (!e) throw Error("abi is required");
                        if (!a) throw Error("address is required");
                        if (!l) throw Error("functionName is required");
                        return (0, V.$q)({
                            abi: e,
                            accessList: n,
                            account: r,
                            args: i,
                            address: a,
                            blockNumber: s,
                            blockTag: o,
                            chainId: u,
                            dataSuffix: c,
                            functionName: l,
                            gas: d,
                            gasPrice: h,
                            maxFeePerGas: f,
                            maxPriorityFeePerGas: p,
                            nonce: m,
                            walletClient: t,
                            value: b
                        })
                    }
                }({
                    abi: t,
                    walletClient: b
                }), {
                    cacheTime: a,
                    enabled: !!(o && t && e && n && b),
                    staleTime: c,
                    suspense: l,
                    onError: d,
                    onSettled: h,
                    onSuccess: f
                });
                return Object.assign(k, {
                    config: {
                        chainId: r,
                        mode: "prepared",
                        request: void 0,
                        ...k.data
                    }
                })
            }

            function eZ({
                chainId: e,
                confirmations: t,
                hash: n,
                timeout: r,
                cacheTime: i,
                enabled: a = !0,
                scopeKey: s,
                staleTime: o,
                suspense: u,
                onError: c,
                onReplaced: l,
                onSettled: d,
                onSuccess: h
            } = {}) {
                return eR(function({
                    confirmations: e,
                    chainId: t,
                    hash: n,
                    scopeKey: r,
                    timeout: i
                }) {
                    return [{
                        entity: "waitForTransaction",
                        confirmations: e,
                        chainId: t,
                        hash: n,
                        scopeKey: r,
                        timeout: i
                    }]
                }({
                    chainId: eM({
                        chainId: e
                    }),
                    confirmations: t,
                    hash: n,
                    scopeKey: s,
                    timeout: r
                }), function({
                    onReplaced: e
                }) {
                    return ({
                        queryKey: [{
                            chainId: t,
                            confirmations: n,
                            hash: r,
                            timeout: i
                        }]
                    }) => {
                        if (!r) throw Error("hash is required");
                        return (0, V.Mn)({
                            chainId: t,
                            confirmations: n,
                            hash: r,
                            onReplaced: e,
                            timeout: i
                        })
                    }
                }({
                    onReplaced: l
                }), {
                    cacheTime: i,
                    enabled: !!(a && n),
                    staleTime: o,
                    suspense: u,
                    onError: c,
                    onSettled: d,
                    onSuccess: h
                })
            }
        },
        23979: function(e, t, n) {
            n.d(t, {
                M: function() {
                    return i
                }
            });
            let r = e => {
                    let t;
                    let n = new Set,
                        r = (e, r) => {
                            let i = "function" == typeof e ? e(t) : e;
                            if (!Object.is(i, t)) {
                                let e = t;
                                t = (null != r ? r : "object" != typeof i || null === i) ? i : Object.assign({}, t, i), n.forEach(n => n(t, e))
                            }
                        },
                        i = () => t,
                        a = {
                            setState: r,
                            getState: i,
                            subscribe: e => (n.add(e), () => n.delete(e)),
                            destroy: () => {
                                console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."), n.clear()
                            }
                        };
                    return t = e(r, i, a), a
                },
                i = e => e ? r(e) : r
        }
    }
]);