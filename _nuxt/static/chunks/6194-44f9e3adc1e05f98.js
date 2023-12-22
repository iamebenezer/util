"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6194], {
        26194: function(a, e, c) {
            c.d(e, {
                $G: function() {
                    return r
                },
                HS: function() {
                    return o
                },
                Qf: function() {
                    return i
                },
                d1: function() {
                    return u
                },
                j4: function() {
                    return b
                },
                jC: function() {
                    return f
                },
                ni: function() {
                    return s
                }
            });
            var n = c(16775),
                t = c(17583),
                d = c(62601);
            "true" == d.env.PRODUCTION ? d.env.GRAPH_ETH_LOCKERSV2_NETWORK : d.env.GRAPH_ETH_LOCKERSV2_LOCAL, "true" == d.env.PRODUCTION ? d.env.GRAPH_POLY_LOCKERSV2_NETWORK : d.env.GRAPH_POLY_LOCKERSV2_LOCAL, "true" == d.env.PRODUCTION ? d.env.GRAPH_BSC_LOCKERSV2_NETWORK : d.env.GRAPH_BSC_LOCKERSV2_LOCAL, "true" == d.env.PRODUCTION ? d.env.GRAPH_ARB_LOCKERSV2_NETWORK : d.env.GRAPH_ARB_LOCKERSV2_LOCAL, "true" == d.env.PRODUCTION ? d.env.GRAPH_GOERLI_LOCKERSV2_NETWORK : d.env.GRAPH_GOERLI_LOCKERSV2_LOCAL, "true" == d.env.PRODUCTION ? d.env.GRAPH_ETH_VESTING_NETWORK : d.env.GRAPH_ETH_VESTING_LOCAL, "true" == d.env.PRODUCTION ? d.env.GRAPH_ETH_LOCKERSV3_NETWORK : d.env.GRAPH_ETH_LOCKERSV3_LOCAL, "true" == d.env.PRODUCTION ? d.env.GRAPH_POLY_LOCKERSV3_NETWORK : d.env.GRAPH_POLY_LOCKERSV3_LOCAL, "true" == d.env.PRODUCTION ? d.env.GRAPH_BSC_LOCKERSV3_NETWORK : d.env.GRAPH_BSC_LOCKERSV3_LOCAL, "true" == d.env.PRODUCTION ? d.env.GRAPH_ARB_LOCKERSV3_NETWORK : d.env.GRAPH_ARB_LOCKERSV3_LOCAL, "true" == d.env.PRODUCTION ? d.env.GRAPH_GOERLI_LOCKERSV3_NETWORK : d.env.GRAPH_GOERLI_LOCKERSV3_LOCAL;
            let f = {
                    137: [{
                        name: "QuickSwap V2",
                        creationUrl: "https://quickswap.exchange/#/pools/v2"
                    }],
                    5: [{
                        name: "Uniswap V2",
                        creationUrl: "https://app.uniswap.org/add/v2/ETH?chain=goerli"
                    }],
                    56: [{
                        name: "PancakeSwap V2",
                        creationUrl: "https://pancakeswap.finance/liquidity"
                    }],
                    1: [{
                        name: "Uniswap V2",
                        creationUrl: "https://app.uniswap.org/add/v2/ETH"
                    }, {
                        name: "SushiSwap V2",
                        creationUrl: "https://www.sushi.com/pool/add/v2/1"
                    }],
                    42161: [{
                        name: "SushiSwap V2",
                        creationUrl: "https://www.sushi.com/pool/add/v2/42161"
                    }, {
                        name: "Camelot V2",
                        creationUrl: "https://app.camelot.exchange/liquidity"
                    }]
                },
                o = {
                    "1-0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f": "0x663a5c229c09b049e36dcc11a9b0d4a8eb9db214",
                    "1-0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac": "0xed9180976c2a4742c7a57354fd39d8bec6cbd8ab",
                    "56-0xbcfccbde45ce874adcb698cc183debcf17952812": "0xc8b839b9226965caf1d9fc1551588aaf553a7be6",
                    "56-0xca143ce32fe78f1f7019d7d551a6402fc5350c73": "0xc765bddb93b0d1c1a88282ba0fa6b2d00e3e0c83",
                    "56-0x858e3312ed3a876947ea49d572a7c42de08af7ee": "0x74dee1a3e2b83e1d1f144af2b741bbaffd7305e1",
                    "56-0x86a859773cf6df9c8117f20b0b950ada84e7644d": "0x1391b48c996ba2f4f38aee07e369a8f28d38220e",
                    "56-0x553990f2cba90272390f62c5bdb1681ffc899675": "0x1f23742d882ace96bace4658e0947ccc07b6a75",
                    "137-0x5757371414417b8c6caad45baef941abc7d3ab32": "0xadb2437e6f65682b85f814fbc12fec0508a7b1d0",
                    "43114-0x9ad6c38be94206ca50bb0d90783181662f0cfa10": "0xa9f6aefa5d56db1205f36c34e6482a6d4979b3bb",
                    "42161-0xc35dadb65012ec5796536bd9864ed8773abc74c4": "0x275720567e5955f5f2d53a7a1ab8a0fc643de50e",
                    "42161-0x6eccab422d763ac031210895c81787e87b43a652": "0xa71182392faaa9a123a9e8120e79515117f05be4",
                    "5-0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f": "0x95cbf2267ddd3448a1a1ed5df9da2761af02202e"
                },
                b = {
                    "1-0x663a5c229c09b049e36dcc11a9b0d4a8eb9db214": {
                        factory: "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",
                        shorthand: "Uni-v2"
                    },
                    "1-0xed9180976c2a4742c7a57354fd39d8bec6cbd8ab": {
                        factory: "0xc0aee478e3658e2610c5f7a4a2e1777ce9e4f2ac",
                        shorthand: "Sushi-v2"
                    },
                    "56-0xc8b839b9226965caf1d9fc1551588aaf553a7be6": {
                        factory: "0xbcfccbde45ce874adcb698cc183debcf17952812",
                        shorthand: "PCS-v1"
                    },
                    "56-0xc765bddb93b0d1c1a88282ba0fa6b2d00e3e0c83": {
                        factory: "0xca143ce32fe78f1f7019d7d551a6402fc5350c73",
                        shorthand: "PCS-v2"
                    },
                    "56-0x74dee1a3e2b83e1d1f144af2b741bbaffd7305e1": {
                        factory: "0x858e3312ed3a876947ea49d572a7c42de08af7ee",
                        shorthand: "BiSwap"
                    },
                    "56-0x1391b48c996ba2f4f38aee07e369a8f28d38220e": {
                        factory: "0x86a859773cf6df9c8117f20b0b950ada84e7644d",
                        shorthand: "SafeSwap"
                    },
                    "56-0x1f23742d882ace96bace4658e0947ccc07b6a75": {
                        factory: "0x553990f2cba90272390f62c5bdb1681ffc899675",
                        shorthand: "Jul"
                    },
                    "137-0xadb2437e6f65682b85f814fbc12fec0508a7b1d0": {
                        factory: "0x5757371414417b8c6caad45baef941abc7d3ab32",
                        shorthand: "QuickSwap"
                    },
                    "43114-0xa9f6aefa5d56db1205f36c34e6482a6d4979b3bb": {
                        factory: "0x9ad6c38be94206ca50bb0d90783181662f0cfa10",
                        shorthand: "Trader Joe"
                    },
                    "42161-0x275720567e5955f5f2d53a7a1ab8a0fc643de50e": {
                        factory: "0xc35dadb65012ec5796536bd9864ed8773abc74c4",
                        shorthand: "Sushi-v2"
                    },
                    "42161-0xa71182392faaa9a123a9e8120e79515117f05be4": {
                        factory: "0x6eccab422d763ac031210895c81787e87b43a652",
                        shorthand: "Camelot"
                    },
                    "5-0x95cbf2267ddd3448a1a1ed5df9da2761af02202e": {
                        factory: "0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",
                        shorthand: "Uni-v2 Goerli"
                    }
                },
                r = (a, e, c) => {
                    if (a.length <= e) return a;
                    var n = e - (c = c || "&hellip;").length;
                    return a.substr(0, Math.ceil(n / 2)) + c + a.substr(a.length - Math.floor(n / 2))
                };

            function s(a) {
                let e = t.ou.utc(),
                    c = t.ou.fromSeconds(a, {
                        zone: "utc"
                    });
                if (c < e) return "in the past";
                let n = c.diff(e, ["years", "months", "days", "hours", "minutes", "seconds"]),
                    d = [
                        ["year", n.years],
                        ["month", n.months],
                        ["day", n.days],
                        ["hour", n.hours],
                        ["minute", n.minutes],
                        ["second", n.seconds]
                    ].filter(a => {
                        let [, e] = a;
                        return 0 !== e && void 0 !== e
                    });
                if (d.length >= 2) return "in " + d.slice(0, 2).map(a => {
                    let [e, c] = a;
                    return "".concat(Math.abs(Math.round(c)), " ").concat(e, "(s)")
                }).join(" and ");
                if (1 === d.length) {
                    let [a, e] = d[0];
                    return "in " + "".concat(Math.abs(Math.round(e)), " ").concat(a, "(s)")
                }
                return "just now"
            }
            let u = (a, e, c) => {
                let t = 4 != c ? a / BigInt(4) * BigInt(c) : a;
                return (0, n.b)(t, e)
            };

            function i(a) {
                let e = new Date,
                    c = new Date(a),
                    n = c.getTime() > e.getTime(),
                    t = Math.abs(Math.floor((c.getTime() - e.getTime()) / 1e3)),
                    d = Math.floor(t / 60),
                    f = Math.floor(d / 60),
                    o = Math.floor(f / 24),
                    b = Math.floor(o / 30.44),
                    r = Math.floor(o / 365.25);
                return r > 0 ? n ? "in ".concat(r, " ").concat(1 === r ? "year" : "years") : "".concat(r, " ").concat(1 === r ? "year" : "years", " ago") : b > 0 ? n ? "in ".concat(b, " ").concat(1 === b ? "month" : "months") : "".concat(b, " ").concat(1 === b ? "month" : "months", " ago") : o > 0 ? n ? "in ".concat(o, " ").concat(1 === o ? "day" : "days") : "".concat(o, " ").concat(1 === o ? "day" : "days", " ago") : f > 0 ? n ? "in ".concat(f, " ").concat(1 === f ? "hour" : "hours") : "".concat(f, " ").concat(1 === f ? "hour" : "hours", " ago") : d > 0 ? n ? "in ".concat(d, " ").concat(1 === d ? "minute" : "minutes") : "".concat(d, " ").concat(1 === d ? "minute" : "minutes", " ago") : n ? "in ".concat(t, " ").concat(1 === t ? "second" : "seconds") : "".concat(t, " ").concat(1 === t ? "second" : "seconds", " ago")
            }
        }
    }
]);