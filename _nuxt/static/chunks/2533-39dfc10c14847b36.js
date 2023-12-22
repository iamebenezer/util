(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [2533], {
        34310: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(62140);

            function n(e, t, r) {
                return void 0 === t && (t = new Uint8Array(2)), void 0 === r && (r = 0), t[r + 0] = e >>> 8, t[r + 1] = e >>> 0, t
            }

            function o(e, t, r) {
                return void 0 === t && (t = new Uint8Array(2)), void 0 === r && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t
            }

            function a(e, t) {
                return void 0 === t && (t = 0), e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]
            }

            function s(e, t) {
                return void 0 === t && (t = 0), (e[t] << 24 | e[t + 1] << 16 | e[t + 2] << 8 | e[t + 3]) >>> 0
            }

            function l(e, t) {
                return void 0 === t && (t = 0), e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]
            }

            function c(e, t) {
                return void 0 === t && (t = 0), (e[t + 3] << 24 | e[t + 2] << 16 | e[t + 1] << 8 | e[t]) >>> 0
            }

            function u(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), t[r + 0] = e >>> 24, t[r + 1] = e >>> 16, t[r + 2] = e >>> 8, t[r + 3] = e >>> 0, t
            }

            function d(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), t[r + 0] = e >>> 0, t[r + 1] = e >>> 8, t[r + 2] = e >>> 16, t[r + 3] = e >>> 24, t
            }

            function h(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), u(e / 4294967296 >>> 0, t, r), u(e >>> 0, t, r + 4), t
            }

            function p(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), d(e >>> 0, t, r), d(e / 4294967296 >>> 0, t, r + 4), t
            }
            t.readInt16BE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) << 16 >> 16
            }, t.readUint16BE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 0] << 8 | e[t + 1]) >>> 0
            }, t.readInt16LE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) << 16 >> 16
            }, t.readUint16LE = function(e, t) {
                return void 0 === t && (t = 0), (e[t + 1] << 8 | e[t]) >>> 0
            }, t.writeUint16BE = n, t.writeInt16BE = n, t.writeUint16LE = o, t.writeInt16LE = o, t.readInt32BE = a, t.readUint32BE = s, t.readInt32LE = l, t.readUint32LE = c, t.writeUint32BE = u, t.writeInt32BE = u, t.writeUint32LE = d, t.writeInt32LE = d, t.readInt64BE = function(e, t) {
                void 0 === t && (t = 0);
                var r = a(e, t),
                    i = a(e, t + 4);
                return 4294967296 * r + i - (i >> 31) * 4294967296
            }, t.readUint64BE = function(e, t) {
                return void 0 === t && (t = 0), 4294967296 * s(e, t) + s(e, t + 4)
            }, t.readInt64LE = function(e, t) {
                void 0 === t && (t = 0);
                var r = l(e, t);
                return 4294967296 * l(e, t + 4) + r - (r >> 31) * 4294967296
            }, t.readUint64LE = function(e, t) {
                void 0 === t && (t = 0);
                var r = c(e, t);
                return 4294967296 * c(e, t + 4) + r
            }, t.writeUint64BE = h, t.writeInt64BE = h, t.writeUint64LE = p, t.writeInt64LE = p, t.readUintBE = function(e, t, r) {
                if (void 0 === r && (r = 0), e % 8 != 0) throw Error("readUintBE supports only bitLengths divisible by 8");
                if (e / 8 > t.length - r) throw Error("readUintBE: array is too short for the given bitLength");
                for (var i = 0, n = 1, o = e / 8 + r - 1; o >= r; o--) i += t[o] * n, n *= 256;
                return i
            }, t.readUintLE = function(e, t, r) {
                if (void 0 === r && (r = 0), e % 8 != 0) throw Error("readUintLE supports only bitLengths divisible by 8");
                if (e / 8 > t.length - r) throw Error("readUintLE: array is too short for the given bitLength");
                for (var i = 0, n = 1, o = r; o < r + e / 8; o++) i += t[o] * n, n *= 256;
                return i
            }, t.writeUintBE = function(e, t, r, n) {
                if (void 0 === r && (r = new Uint8Array(e / 8)), void 0 === n && (n = 0), e % 8 != 0) throw Error("writeUintBE supports only bitLengths divisible by 8");
                if (!i.isSafeInteger(t)) throw Error("writeUintBE value must be an integer");
                for (var o = 1, a = e / 8 + n - 1; a >= n; a--) r[a] = t / o & 255, o *= 256;
                return r
            }, t.writeUintLE = function(e, t, r, n) {
                if (void 0 === r && (r = new Uint8Array(e / 8)), void 0 === n && (n = 0), e % 8 != 0) throw Error("writeUintLE supports only bitLengths divisible by 8");
                if (!i.isSafeInteger(t)) throw Error("writeUintLE value must be an integer");
                for (var o = 1, a = n; a < n + e / 8; a++) r[a] = t / o & 255, o *= 256;
                return r
            }, t.readFloat32BE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t)
            }, t.readFloat32LE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t, !0)
            }, t.readFloat64BE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t)
            }, t.readFloat64LE = function(e, t) {
                return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t, !0)
            }, t.writeFloat32BE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e), t
            }, t.writeFloat32LE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(4)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat32(r, e, !0), t
            }, t.writeFloat64BE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e), t
            }, t.writeFloat64LE = function(e, t, r) {
                return void 0 === t && (t = new Uint8Array(8)), void 0 === r && (r = 0), new DataView(t.buffer, t.byteOffset, t.byteLength).setFloat64(r, e, !0), t
            }
        },
        48733: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(34310),
                n = r(55277);

            function o(e, t, r, o, a) {
                if (void 0 === a && (a = 0), 32 !== e.length) throw Error("ChaCha: key size must be 32 bytes");
                if (o.length < r.length) throw Error("ChaCha: destination is shorter than source");
                if (0 === a) {
                    if (8 !== t.length && 12 !== t.length) throw Error("ChaCha nonce must be 8 or 12 bytes");
                    l = (s = new Uint8Array(16)).length - t.length, s.set(t, l)
                } else {
                    if (16 !== t.length) throw Error("ChaCha nonce with counter must be 16 bytes");
                    s = t, l = a
                }
                for (var s, l, c = new Uint8Array(64), u = 0; u < r.length; u += 64) {
                    ! function(e, t, r) {
                        for (var n = r[3] << 24 | r[2] << 16 | r[1] << 8 | r[0], o = r[7] << 24 | r[6] << 16 | r[5] << 8 | r[4], a = r[11] << 24 | r[10] << 16 | r[9] << 8 | r[8], s = r[15] << 24 | r[14] << 16 | r[13] << 8 | r[12], l = r[19] << 24 | r[18] << 16 | r[17] << 8 | r[16], c = r[23] << 24 | r[22] << 16 | r[21] << 8 | r[20], u = r[27] << 24 | r[26] << 16 | r[25] << 8 | r[24], d = r[31] << 24 | r[30] << 16 | r[29] << 8 | r[28], h = t[3] << 24 | t[2] << 16 | t[1] << 8 | t[0], p = t[7] << 24 | t[6] << 16 | t[5] << 8 | t[4], f = t[11] << 24 | t[10] << 16 | t[9] << 8 | t[8], g = t[15] << 24 | t[14] << 16 | t[13] << 8 | t[12], w = 1634760805, m = 857760878, v = 2036477234, b = 1797285236, y = n, C = o, x = a, _ = s, E = l, S = c, k = u, A = d, D = h, $ = p, R = f, O = g, I = 0; I < 20; I += 2) D ^= w = w + y | 0, y ^= E = E + (D = D >>> 16 | D << 16) | 0, y = y >>> 20 | y << 12, $ ^= m = m + C | 0, C ^= S = S + ($ = $ >>> 16 | $ << 16) | 0, C = C >>> 20 | C << 12, R ^= v = v + x | 0, x ^= k = k + (R = R >>> 16 | R << 16) | 0, x = x >>> 20 | x << 12, O ^= b = b + _ | 0, _ ^= A = A + (O = O >>> 16 | O << 16) | 0, _ = _ >>> 20 | _ << 12, R ^= v = v + x | 0, x ^= k = k + (R = R >>> 24 | R << 8) | 0, x = x >>> 25 | x << 7, O ^= b = b + _ | 0, _ ^= A = A + (O = O >>> 24 | O << 8) | 0, _ = _ >>> 25 | _ << 7, $ ^= m = m + C | 0, C ^= S = S + ($ = $ >>> 24 | $ << 8) | 0, C = C >>> 25 | C << 7, D ^= w = w + y | 0, y ^= E = E + (D = D >>> 24 | D << 8) | 0, y = y >>> 25 | y << 7, O ^= w = w + C | 0, C ^= k = k + (O = O >>> 16 | O << 16) | 0, C = C >>> 20 | C << 12, D ^= m = m + x | 0, x ^= A = A + (D = D >>> 16 | D << 16) | 0, x = x >>> 20 | x << 12, $ ^= v = v + _ | 0, _ ^= E = E + ($ = $ >>> 16 | $ << 16) | 0, _ = _ >>> 20 | _ << 12, R ^= b = b + y | 0, y ^= S = S + (R = R >>> 16 | R << 16) | 0, y = y >>> 20 | y << 12, $ ^= v = v + _ | 0, _ ^= E = E + ($ = $ >>> 24 | $ << 8) | 0, _ = _ >>> 25 | _ << 7, R ^= b = b + y | 0, y ^= S = S + (R = R >>> 24 | R << 8) | 0, y = y >>> 25 | y << 7, D ^= m = m + x | 0, x ^= A = A + (D = D >>> 24 | D << 8) | 0, x = x >>> 25 | x << 7, O ^= w = w + C | 0, C ^= k = k + (O = O >>> 24 | O << 8) | 0, C = C >>> 25 | C << 7;
                        i.writeUint32LE(w + 1634760805 | 0, e, 0), i.writeUint32LE(m + 857760878 | 0, e, 4), i.writeUint32LE(v + 2036477234 | 0, e, 8), i.writeUint32LE(b + 1797285236 | 0, e, 12), i.writeUint32LE(y + n | 0, e, 16), i.writeUint32LE(C + o | 0, e, 20), i.writeUint32LE(x + a | 0, e, 24), i.writeUint32LE(_ + s | 0, e, 28), i.writeUint32LE(E + l | 0, e, 32), i.writeUint32LE(S + c | 0, e, 36), i.writeUint32LE(k + u | 0, e, 40), i.writeUint32LE(A + d | 0, e, 44), i.writeUint32LE(D + h | 0, e, 48), i.writeUint32LE($ + p | 0, e, 52), i.writeUint32LE(R + f | 0, e, 56), i.writeUint32LE(O + g | 0, e, 60)
                    }(c, s, e);
                    for (var d = u; d < u + 64 && d < r.length; d++) o[d] = r[d] ^ c[d - u];
                    ! function(e, t, r) {
                        for (var i = 1; r--;) i = i + (255 & e[t]) | 0, e[t] = 255 & i, i >>>= 8, t++;
                        if (i > 0) throw Error("ChaCha: counter overflow")
                    }(s, 0, l)
                }
                return n.wipe(c), 0 === a && n.wipe(s), o
            }
            t.streamXOR = o, t.stream = function(e, t, r, i) {
                return void 0 === i && (i = 0), n.wipe(r), o(e, t, r, r, i)
            }
        },
        51040: function(e, t, r) {
            "use strict";
            var i = r(48733),
                n = r(66508),
                o = r(55277),
                a = r(34310),
                s = r(51448);
            t.Cv = 32, t.WH = 12, t.pg = 16;
            var l = new Uint8Array(16),
                c = function() {
                    function e(e) {
                        if (this.nonceLength = t.WH, this.tagLength = t.pg, e.length !== t.Cv) throw Error("ChaCha20Poly1305 needs 32-byte key");
                        this._key = new Uint8Array(e)
                    }
                    return e.prototype.seal = function(e, t, r, n) {
                        if (e.length > 16) throw Error("ChaCha20Poly1305: incorrect nonce length");
                        var a, s = new Uint8Array(16);
                        s.set(e, s.length - e.length);
                        var l = new Uint8Array(32);
                        i.stream(this._key, s, l, 4);
                        var c = t.length + this.tagLength;
                        if (n) {
                            if (n.length !== c) throw Error("ChaCha20Poly1305: incorrect destination length");
                            a = n
                        } else a = new Uint8Array(c);
                        return i.streamXOR(this._key, s, t, a, 4), this._authenticate(a.subarray(a.length - this.tagLength, a.length), l, a.subarray(0, a.length - this.tagLength), r), o.wipe(s), a
                    }, e.prototype.open = function(e, t, r, n) {
                        if (e.length > 16) throw Error("ChaCha20Poly1305: incorrect nonce length");
                        if (t.length < this.tagLength) return null;
                        var a, l = new Uint8Array(16);
                        l.set(e, l.length - e.length);
                        var c = new Uint8Array(32);
                        i.stream(this._key, l, c, 4);
                        var u = new Uint8Array(this.tagLength);
                        if (this._authenticate(u, c, t.subarray(0, t.length - this.tagLength), r), !s.equal(u, t.subarray(t.length - this.tagLength, t.length))) return null;
                        var d = t.length - this.tagLength;
                        if (n) {
                            if (n.length !== d) throw Error("ChaCha20Poly1305: incorrect destination length");
                            a = n
                        } else a = new Uint8Array(d);
                        return i.streamXOR(this._key, l, t.subarray(0, t.length - this.tagLength), a, 4), o.wipe(l), a
                    }, e.prototype.clean = function() {
                        return o.wipe(this._key), this
                    }, e.prototype._authenticate = function(e, t, r, i) {
                        var s = new n.Poly1305(t);
                        i && (s.update(i), i.length % 16 > 0 && s.update(l.subarray(i.length % 16))), s.update(r), r.length % 16 > 0 && s.update(l.subarray(r.length % 16));
                        var c = new Uint8Array(8);
                        i && a.writeUint64LE(i.length, c), s.update(c), a.writeUint64LE(r.length, c), s.update(c);
                        for (var u = s.digest(), d = 0; d < u.length; d++) e[d] = u[d];
                        s.clean(), o.wipe(u), o.wipe(c)
                    }, e
                }();
            t.OK = c
        },
        51448: function(e, t) {
            "use strict";

            function r(e, t) {
                if (e.length !== t.length) return 0;
                for (var r = 0, i = 0; i < e.length; i++) r |= e[i] ^ t[i];
                return 1 & r - 1 >>> 8
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.select = function(e, t, r) {
                return ~(e - 1) & t | e - 1 & r
            }, t.lessOrEqual = function(e, t) {
                return (0 | e) - (0 | t) - 1 >>> 31 & 1
            }, t.compare = r, t.equal = function(e, t) {
                return 0 !== e.length && 0 !== t.length && 0 !== r(e, t)
            }
        },
        12621: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isSerializableHash = function(e) {
                return void 0 !== e.saveState && void 0 !== e.restoreState && void 0 !== e.cleanSavedState
            }
        },
        20342: function(e, t, r) {
            "use strict";
            var i = r(9922),
                n = r(55277),
                o = function() {
                    function e(e, t, r, n) {
                        void 0 === r && (r = new Uint8Array(0)), this._counter = new Uint8Array(1), this._hash = e, this._info = n;
                        var o = i.hmac(this._hash, r, t);
                        this._hmac = new i.HMAC(e, o), this._buffer = new Uint8Array(this._hmac.digestLength), this._bufpos = this._buffer.length
                    }
                    return e.prototype._fillBuffer = function() {
                        this._counter[0]++;
                        var e = this._counter[0];
                        if (0 === e) throw Error("hkdf: cannot expand more");
                        this._hmac.reset(), e > 1 && this._hmac.update(this._buffer), this._info && this._hmac.update(this._info), this._hmac.update(this._counter), this._hmac.finish(this._buffer), this._bufpos = 0
                    }, e.prototype.expand = function(e) {
                        for (var t = new Uint8Array(e), r = 0; r < t.length; r++) this._bufpos === this._buffer.length && this._fillBuffer(), t[r] = this._buffer[this._bufpos++];
                        return t
                    }, e.prototype.clean = function() {
                        this._hmac.clean(), n.wipe(this._buffer), n.wipe(this._counter), this._bufpos = 0
                    }, e
                }();
            t.t = o
        },
        9922: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(12621),
                n = r(51448),
                o = r(55277),
                a = function() {
                    function e(e, t) {
                        this._finished = !1, this._inner = new e, this._outer = new e, this.blockSize = this._outer.blockSize, this.digestLength = this._outer.digestLength;
                        var r = new Uint8Array(this.blockSize);
                        t.length > this.blockSize ? this._inner.update(t).finish(r).clean() : r.set(t);
                        for (var n = 0; n < r.length; n++) r[n] ^= 54;
                        this._inner.update(r);
                        for (var n = 0; n < r.length; n++) r[n] ^= 106;
                        this._outer.update(r), i.isSerializableHash(this._inner) && i.isSerializableHash(this._outer) && (this._innerKeyedState = this._inner.saveState(), this._outerKeyedState = this._outer.saveState()), o.wipe(r)
                    }
                    return e.prototype.reset = function() {
                        if (!i.isSerializableHash(this._inner) || !i.isSerializableHash(this._outer)) throw Error("hmac: can't reset() because hash doesn't implement restoreState()");
                        return this._inner.restoreState(this._innerKeyedState), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, e.prototype.clean = function() {
                        i.isSerializableHash(this._inner) && this._inner.cleanSavedState(this._innerKeyedState), i.isSerializableHash(this._outer) && this._outer.cleanSavedState(this._outerKeyedState), this._inner.clean(), this._outer.clean()
                    }, e.prototype.update = function(e) {
                        return this._inner.update(e), this
                    }, e.prototype.finish = function(e) {
                        return this._finished ? this._outer.finish(e) : (this._inner.finish(e), this._outer.update(e.subarray(0, this.digestLength)).finish(e), this._finished = !0), this
                    }, e.prototype.digest = function() {
                        var e = new Uint8Array(this.digestLength);
                        return this.finish(e), e
                    }, e.prototype.saveState = function() {
                        if (!i.isSerializableHash(this._inner)) throw Error("hmac: can't saveState() because hash doesn't implement it");
                        return this._inner.saveState()
                    }, e.prototype.restoreState = function(e) {
                        if (!i.isSerializableHash(this._inner) || !i.isSerializableHash(this._outer)) throw Error("hmac: can't restoreState() because hash doesn't implement it");
                        return this._inner.restoreState(e), this._outer.restoreState(this._outerKeyedState), this._finished = !1, this
                    }, e.prototype.cleanSavedState = function(e) {
                        if (!i.isSerializableHash(this._inner)) throw Error("hmac: can't cleanSavedState() because hash doesn't implement it");
                        this._inner.cleanSavedState(e)
                    }, e
                }();
            t.HMAC = a, t.hmac = function(e, t, r) {
                var i = new a(e, t);
                i.update(r);
                var n = i.digest();
                return i.clean(), n
            }, t.equal = n.equal
        },
        62140: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.mul = Math.imul || function(e, t) {
                var r = 65535 & e,
                    i = 65535 & t;
                return r * i + ((e >>> 16 & 65535) * i + r * (t >>> 16 & 65535) << 16 >>> 0) | 0
            }, t.add = function(e, t) {
                return e + t | 0
            }, t.sub = function(e, t) {
                return e - t | 0
            }, t.rotl = function(e, t) {
                return e << t | e >>> 32 - t
            }, t.rotr = function(e, t) {
                return e << 32 - t | e >>> t
            }, t.isInteger = Number.isInteger || function(e) {
                return "number" == typeof e && isFinite(e) && Math.floor(e) === e
            }, t.MAX_SAFE_INTEGER = 9007199254740991, t.isSafeInteger = function(e) {
                return t.isInteger(e) && e >= -t.MAX_SAFE_INTEGER && e <= t.MAX_SAFE_INTEGER
            }
        },
        66508: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(51448),
                n = r(55277);
            t.DIGEST_LENGTH = 16;
            var o = function() {
                function e(e) {
                    this.digestLength = t.DIGEST_LENGTH, this._buffer = new Uint8Array(16), this._r = new Uint16Array(10), this._h = new Uint16Array(10), this._pad = new Uint16Array(8), this._leftover = 0, this._fin = 0, this._finished = !1;
                    var r = e[0] | e[1] << 8;
                    this._r[0] = 8191 & r;
                    var i = e[2] | e[3] << 8;
                    this._r[1] = (r >>> 13 | i << 3) & 8191;
                    var n = e[4] | e[5] << 8;
                    this._r[2] = (i >>> 10 | n << 6) & 7939;
                    var o = e[6] | e[7] << 8;
                    this._r[3] = (n >>> 7 | o << 9) & 8191;
                    var a = e[8] | e[9] << 8;
                    this._r[4] = (o >>> 4 | a << 12) & 255, this._r[5] = a >>> 1 & 8190;
                    var s = e[10] | e[11] << 8;
                    this._r[6] = (a >>> 14 | s << 2) & 8191;
                    var l = e[12] | e[13] << 8;
                    this._r[7] = (s >>> 11 | l << 5) & 8065;
                    var c = e[14] | e[15] << 8;
                    this._r[8] = (l >>> 8 | c << 8) & 8191, this._r[9] = c >>> 5 & 127, this._pad[0] = e[16] | e[17] << 8, this._pad[1] = e[18] | e[19] << 8, this._pad[2] = e[20] | e[21] << 8, this._pad[3] = e[22] | e[23] << 8, this._pad[4] = e[24] | e[25] << 8, this._pad[5] = e[26] | e[27] << 8, this._pad[6] = e[28] | e[29] << 8, this._pad[7] = e[30] | e[31] << 8
                }
                return e.prototype._blocks = function(e, t, r) {
                    for (var i = this._fin ? 0 : 2048, n = this._h[0], o = this._h[1], a = this._h[2], s = this._h[3], l = this._h[4], c = this._h[5], u = this._h[6], d = this._h[7], h = this._h[8], p = this._h[9], f = this._r[0], g = this._r[1], w = this._r[2], m = this._r[3], v = this._r[4], b = this._r[5], y = this._r[6], C = this._r[7], x = this._r[8], _ = this._r[9]; r >= 16;) {
                        var E, S = e[t + 0] | e[t + 1] << 8;
                        n += 8191 & S;
                        var k = e[t + 2] | e[t + 3] << 8;
                        o += (S >>> 13 | k << 3) & 8191;
                        var A = e[t + 4] | e[t + 5] << 8;
                        a += (k >>> 10 | A << 6) & 8191;
                        var D = e[t + 6] | e[t + 7] << 8;
                        s += (A >>> 7 | D << 9) & 8191;
                        var $ = e[t + 8] | e[t + 9] << 8;
                        l += (D >>> 4 | $ << 12) & 8191, c += $ >>> 1 & 8191;
                        var R = e[t + 10] | e[t + 11] << 8;
                        u += ($ >>> 14 | R << 2) & 8191;
                        var O = e[t + 12] | e[t + 13] << 8;
                        d += (R >>> 11 | O << 5) & 8191;
                        var I = e[t + 14] | e[t + 15] << 8;
                        h += (O >>> 8 | I << 8) & 8191, p += I >>> 5 | i;
                        var T = 0;
                        T = (E = 0 + n * f + 5 * _ * o + 5 * x * a + 5 * C * s + 5 * y * l) >>> 13, E &= 8191, E += 5 * b * c + 5 * v * u + 5 * m * d + 5 * w * h + 5 * g * p, T += E >>> 13, E &= 8191;
                        var N = T;
                        N += n * g + o * f + 5 * _ * a + 5 * x * s + 5 * C * l, T = N >>> 13, N &= 8191, N += 5 * y * c + 5 * b * u + 5 * v * d + 5 * m * h + 5 * w * p, T += N >>> 13, N &= 8191;
                        var P = T;
                        P += n * w + o * g + a * f + 5 * _ * s + 5 * x * l, T = P >>> 13, P &= 8191, P += 5 * C * c + 5 * y * u + 5 * b * d + 5 * v * h + 5 * m * p, T += P >>> 13, P &= 8191;
                        var U = T;
                        U += n * m + o * w + a * g + s * f + 5 * _ * l, T = U >>> 13, U &= 8191, U += 5 * x * c + 5 * C * u + 5 * y * d + 5 * b * h + 5 * v * p, T += U >>> 13, U &= 8191;
                        var M = T;
                        M += n * v + o * m + a * w + s * g + l * f, T = M >>> 13, M &= 8191, M += 5 * _ * c + 5 * x * u + 5 * C * d + 5 * y * h + 5 * b * p, T += M >>> 13, M &= 8191;
                        var j = T;
                        j += n * b + o * v + a * m + s * w + l * g, T = j >>> 13, j &= 8191, j += c * f + 5 * _ * u + 5 * x * d + 5 * C * h + 5 * y * p, T += j >>> 13, j &= 8191;
                        var L = T;
                        L += n * y + o * b + a * v + s * m + l * w, T = L >>> 13, L &= 8191, L += c * g + u * f + 5 * _ * d + 5 * x * h + 5 * C * p, T += L >>> 13, L &= 8191;
                        var B = T;
                        B += n * C + o * y + a * b + s * v + l * m, T = B >>> 13, B &= 8191, B += c * w + u * g + d * f + 5 * _ * h + 5 * x * p, T += B >>> 13, B &= 8191;
                        var z = T;
                        z += n * x + o * C + a * y + s * b + l * v, T = z >>> 13, z &= 8191, z += c * m + u * w + d * g + h * f + 5 * _ * p, T += z >>> 13, z &= 8191;
                        var W = T;
                        W += n * _ + o * x + a * C + s * y + l * b, T = W >>> 13, W &= 8191, W += c * v + u * m + d * w + h * g + p * f, T += W >>> 13, W &= 8191, E = 8191 & (T = (T = (T << 2) + T | 0) + E | 0), T >>>= 13, N += T, n = E, o = N, a = P, s = U, l = M, c = j, u = L, d = B, h = z, p = W, t += 16, r -= 16
                    }
                    this._h[0] = n, this._h[1] = o, this._h[2] = a, this._h[3] = s, this._h[4] = l, this._h[5] = c, this._h[6] = u, this._h[7] = d, this._h[8] = h, this._h[9] = p
                }, e.prototype.finish = function(e, t) {
                    void 0 === t && (t = 0);
                    var r, i, n, o, a = new Uint16Array(10);
                    if (this._leftover) {
                        for (o = this._leftover, this._buffer[o++] = 1; o < 16; o++) this._buffer[o] = 0;
                        this._fin = 1, this._blocks(this._buffer, 0, 16)
                    }
                    for (r = this._h[1] >>> 13, this._h[1] &= 8191, o = 2; o < 10; o++) this._h[o] += r, r = this._h[o] >>> 13, this._h[o] &= 8191;
                    for (this._h[0] += 5 * r, r = this._h[0] >>> 13, this._h[0] &= 8191, this._h[1] += r, r = this._h[1] >>> 13, this._h[1] &= 8191, this._h[2] += r, a[0] = this._h[0] + 5, r = a[0] >>> 13, a[0] &= 8191, o = 1; o < 10; o++) a[o] = this._h[o] + r, r = a[o] >>> 13, a[o] &= 8191;
                    for (a[9] -= 8192, i = (1 ^ r) - 1, o = 0; o < 10; o++) a[o] &= i;
                    for (o = 0, i = ~i; o < 10; o++) this._h[o] = this._h[o] & i | a[o];
                    for (o = 1, this._h[0] = (this._h[0] | this._h[1] << 13) & 65535, this._h[1] = (this._h[1] >>> 3 | this._h[2] << 10) & 65535, this._h[2] = (this._h[2] >>> 6 | this._h[3] << 7) & 65535, this._h[3] = (this._h[3] >>> 9 | this._h[4] << 4) & 65535, this._h[4] = (this._h[4] >>> 12 | this._h[5] << 1 | this._h[6] << 14) & 65535, this._h[5] = (this._h[6] >>> 2 | this._h[7] << 11) & 65535, this._h[6] = (this._h[7] >>> 5 | this._h[8] << 8) & 65535, this._h[7] = (this._h[8] >>> 8 | this._h[9] << 5) & 65535, n = this._h[0] + this._pad[0], this._h[0] = 65535 & n; o < 8; o++) n = (this._h[o] + this._pad[o] | 0) + (n >>> 16) | 0, this._h[o] = 65535 & n;
                    return e[t + 0] = this._h[0] >>> 0, e[t + 1] = this._h[0] >>> 8, e[t + 2] = this._h[1] >>> 0, e[t + 3] = this._h[1] >>> 8, e[t + 4] = this._h[2] >>> 0, e[t + 5] = this._h[2] >>> 8, e[t + 6] = this._h[3] >>> 0, e[t + 7] = this._h[3] >>> 8, e[t + 8] = this._h[4] >>> 0, e[t + 9] = this._h[4] >>> 8, e[t + 10] = this._h[5] >>> 0, e[t + 11] = this._h[5] >>> 8, e[t + 12] = this._h[6] >>> 0, e[t + 13] = this._h[6] >>> 8, e[t + 14] = this._h[7] >>> 0, e[t + 15] = this._h[7] >>> 8, this._finished = !0, this
                }, e.prototype.update = function(e) {
                    var t, r = 0,
                        i = e.length;
                    if (this._leftover) {
                        (t = 16 - this._leftover) > i && (t = i);
                        for (var n = 0; n < t; n++) this._buffer[this._leftover + n] = e[r + n];
                        if (i -= t, r += t, this._leftover += t, this._leftover < 16) return this;
                        this._blocks(this._buffer, 0, 16), this._leftover = 0
                    }
                    if (i >= 16 && (t = i - i % 16, this._blocks(e, r, t), r += t, i -= t), i) {
                        for (var n = 0; n < i; n++) this._buffer[this._leftover + n] = e[r + n];
                        this._leftover += i
                    }
                    return this
                }, e.prototype.digest = function() {
                    if (this._finished) throw Error("Poly1305 was finished");
                    var e = new Uint8Array(16);
                    return this.finish(e), e
                }, e.prototype.clean = function() {
                    return n.wipe(this._buffer), n.wipe(this._r), n.wipe(this._h), n.wipe(this._pad), this._leftover = 0, this._fin = 0, this._finished = !0, this
                }, e
            }();
            t.Poly1305 = o, t.oneTimeAuth = function(e, t) {
                var r = new o(e);
                r.update(t);
                var i = r.digest();
                return r.clean(), i
            }, t.equal = function(e, r) {
                return e.length === t.DIGEST_LENGTH && r.length === t.DIGEST_LENGTH && i.equal(e, r)
            }
        },
        35077: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.randomStringForEntropy = t.randomString = t.randomUint32 = t.randomBytes = t.defaultRandomSource = void 0;
            let i = r(62739),
                n = r(34310),
                o = r(55277);

            function a(e, r = t.defaultRandomSource) {
                return r.randomBytes(e)
            }
            t.defaultRandomSource = new i.SystemRandomSource, t.randomBytes = a, t.randomUint32 = function(e = t.defaultRandomSource) {
                let r = a(4, e),
                    i = (0, n.readUint32LE)(r);
                return (0, o.wipe)(r), i
            };
            let s = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

            function l(e, r = s, i = t.defaultRandomSource) {
                if (r.length < 2) throw Error("randomString charset is too short");
                if (r.length > 256) throw Error("randomString charset is too long");
                let n = "",
                    l = r.length,
                    c = 256 - 256 % l;
                for (; e > 0;) {
                    let t = a(Math.ceil(256 * e / c), i);
                    for (let i = 0; i < t.length && e > 0; i++) {
                        let o = t[i];
                        o < c && (n += r.charAt(o % l), e--)
                    }(0, o.wipe)(t)
                }
                return n
            }
            t.randomString = l, t.randomStringForEntropy = function(e, r = s, i = t.defaultRandomSource) {
                return l(Math.ceil(e / (Math.log(r.length) / Math.LN2)), r, i)
            }
        },
        85183: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.BrowserRandomSource = void 0;
            class r {
                constructor() {
                    this.isAvailable = !1, this.isInstantiated = !1;
                    let e = "undefined" != typeof self ? self.crypto || self.msCrypto : null;
                    e && void 0 !== e.getRandomValues && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
                }
                randomBytes(e) {
                    if (!this.isAvailable || !this._crypto) throw Error("Browser random byte generator is not available.");
                    let t = new Uint8Array(e);
                    for (let e = 0; e < t.length; e += 65536) this._crypto.getRandomValues(t.subarray(e, e + Math.min(t.length - e, 65536)));
                    return t
                }
            }
            t.BrowserRandomSource = r
        },
        32586: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.NodeRandomSource = void 0;
            let i = r(55277);
            class n {
                constructor() {
                    this.isAvailable = !1, this.isInstantiated = !1; {
                        let e = r(35883);
                        e && e.randomBytes && (this._crypto = e, this.isAvailable = !0, this.isInstantiated = !0)
                    }
                }
                randomBytes(e) {
                    if (!this.isAvailable || !this._crypto) throw Error("Node.js random byte generator is not available.");
                    let t = this._crypto.randomBytes(e);
                    if (t.length !== e) throw Error("NodeRandomSource: got fewer bytes than requested");
                    let r = new Uint8Array(e);
                    for (let e = 0; e < r.length; e++) r[e] = t[e];
                    return (0, i.wipe)(t), r
                }
            }
            t.NodeRandomSource = n
        },
        62739: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.SystemRandomSource = void 0;
            let i = r(85183),
                n = r(32586);
            class o {
                constructor() {
                    if (this.isAvailable = !1, this.name = "", this._source = new i.BrowserRandomSource, this._source.isAvailable) {
                        this.isAvailable = !0, this.name = "Browser";
                        return
                    }
                    if (this._source = new n.NodeRandomSource, this._source.isAvailable) {
                        this.isAvailable = !0, this.name = "Node";
                        return
                    }
                }
                randomBytes(e) {
                    if (!this.isAvailable) throw Error("System random byte generator is not available.");
                    return this._source.randomBytes(e)
                }
            }
            t.SystemRandomSource = o
        },
        87853: function(e, t, r) {
            "use strict";
            var i = r(34310),
                n = r(55277);
            t.k = 32, t.cn = 64;
            var o = function() {
                function e() {
                    this.digestLength = t.k, this.blockSize = t.cn, this._state = new Int32Array(8), this._temp = new Int32Array(64), this._buffer = new Uint8Array(128), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._state[0] = 1779033703, this._state[1] = 3144134277, this._state[2] = 1013904242, this._state[3] = 2773480762, this._state[4] = 1359893119, this._state[5] = 2600822924, this._state[6] = 528734635, this._state[7] = 1541459225
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    n.wipe(this._buffer), n.wipe(this._temp), this.reset()
                }, e.prototype.update = function(e, t) {
                    if (void 0 === t && (t = e.length), this._finished) throw Error("SHA256: can't update because hash was finished.");
                    var r = 0;
                    if (this._bytesHashed += t, this._bufferLength > 0) {
                        for (; this._bufferLength < this.blockSize && t > 0;) this._buffer[this._bufferLength++] = e[r++], t--;
                        this._bufferLength === this.blockSize && (s(this._temp, this._state, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (t >= this.blockSize && (r = s(this._temp, this._state, e, r, t), t %= this.blockSize); t > 0;) this._buffer[this._bufferLength++] = e[r++], t--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            r = this._bufferLength,
                            n = t % 64 < 56 ? 64 : 128;
                        this._buffer[r] = 128;
                        for (var o = r + 1; o < n - 8; o++) this._buffer[o] = 0;
                        i.writeUint32BE(t / 536870912 | 0, this._buffer, n - 8), i.writeUint32BE(t << 3, this._buffer, n - 4), s(this._temp, this._state, this._buffer, 0, n), this._finished = !0
                    }
                    for (var o = 0; o < this.digestLength / 4; o++) i.writeUint32BE(this._state[o], e, 4 * o);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw Error("SHA256: cannot save finished state");
                    return {
                        state: new Int32Array(this._state),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._state.set(e.state), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    n.wipe(e.state), e.buffer && n.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.mE = o;
            var a = new Int32Array([1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298]);

            function s(e, t, r, n, o) {
                for (; o >= 64;) {
                    for (var s = t[0], l = t[1], c = t[2], u = t[3], d = t[4], h = t[5], p = t[6], f = t[7], g = 0; g < 16; g++) {
                        var w = n + 4 * g;
                        e[g] = i.readUint32BE(r, w)
                    }
                    for (var g = 16; g < 64; g++) {
                        var m = e[g - 2],
                            v = (m >>> 17 | m << 15) ^ (m >>> 19 | m << 13) ^ m >>> 10,
                            b = ((m = e[g - 15]) >>> 7 | m << 25) ^ (m >>> 18 | m << 14) ^ m >>> 3;
                        e[g] = (v + e[g - 7] | 0) + (b + e[g - 16] | 0)
                    }
                    for (var g = 0; g < 64; g++) {
                        var v = (((d >>> 6 | d << 26) ^ (d >>> 11 | d << 21) ^ (d >>> 25 | d << 7)) + (d & h ^ ~d & p) | 0) + (f + (a[g] + e[g] | 0) | 0) | 0,
                            b = ((s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10)) + (s & l ^ s & c ^ l & c) | 0;
                        f = p, p = h, h = d, d = u + v | 0, u = c, c = l, l = s, s = v + b | 0
                    }
                    t[0] += s, t[1] += l, t[2] += c, t[3] += u, t[4] += d, t[5] += h, t[6] += p, t[7] += f, n += 64, o -= 64
                }
                return n
            }
            t.vp = function(e) {
                var t = new o;
                t.update(e);
                var r = t.digest();
                return t.clean(), r
            }
        },
        55277: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.wipe = function(e) {
                for (var t = 0; t < e.length; t++) e[t] = 0;
                return e
            }
        },
        38195: function(e, t, r) {
            "use strict";
            t.gi = t.Au = t.KS = t.kz = void 0;
            let i = r(35077),
                n = r(55277);

            function o(e) {
                let t = new Float64Array(16);
                if (e)
                    for (let r = 0; r < e.length; r++) t[r] = e[r];
                return t
            }
            t.kz = 32, t.KS = 32;
            let a = new Uint8Array(32);
            a[0] = 9;
            let s = o([56129, 1]);

            function l(e) {
                let t = 1;
                for (let r = 0; r < 16; r++) {
                    let i = e[r] + t + 65535;
                    t = Math.floor(i / 65536), e[r] = i - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function c(e, t, r) {
                let i = ~(r - 1);
                for (let r = 0; r < 16; r++) {
                    let n = i & (e[r] ^ t[r]);
                    e[r] ^= n, t[r] ^= n
                }
            }

            function u(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] + r[i]
            }

            function d(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] - r[i]
            }

            function h(e, t, r) {
                let i, n, o = 0,
                    a = 0,
                    s = 0,
                    l = 0,
                    c = 0,
                    u = 0,
                    d = 0,
                    h = 0,
                    p = 0,
                    f = 0,
                    g = 0,
                    w = 0,
                    m = 0,
                    v = 0,
                    b = 0,
                    y = 0,
                    C = 0,
                    x = 0,
                    _ = 0,
                    E = 0,
                    S = 0,
                    k = 0,
                    A = 0,
                    D = 0,
                    $ = 0,
                    R = 0,
                    O = 0,
                    I = 0,
                    T = 0,
                    N = 0,
                    P = 0,
                    U = r[0],
                    M = r[1],
                    j = r[2],
                    L = r[3],
                    B = r[4],
                    z = r[5],
                    W = r[6],
                    Z = r[7],
                    F = r[8],
                    H = r[9],
                    V = r[10],
                    Y = r[11],
                    K = r[12],
                    q = r[13],
                    G = r[14],
                    X = r[15];
                o += (i = t[0]) * U, a += i * M, s += i * j, l += i * L, c += i * B, u += i * z, d += i * W, h += i * Z, p += i * F, f += i * H, g += i * V, w += i * Y, m += i * K, v += i * q, b += i * G, y += i * X, a += (i = t[1]) * U, s += i * M, l += i * j, c += i * L, u += i * B, d += i * z, h += i * W, p += i * Z, f += i * F, g += i * H, w += i * V, m += i * Y, v += i * K, b += i * q, y += i * G, C += i * X, s += (i = t[2]) * U, l += i * M, c += i * j, u += i * L, d += i * B, h += i * z, p += i * W, f += i * Z, g += i * F, w += i * H, m += i * V, v += i * Y, b += i * K, y += i * q, C += i * G, x += i * X, l += (i = t[3]) * U, c += i * M, u += i * j, d += i * L, h += i * B, p += i * z, f += i * W, g += i * Z, w += i * F, m += i * H, v += i * V, b += i * Y, y += i * K, C += i * q, x += i * G, _ += i * X, c += (i = t[4]) * U, u += i * M, d += i * j, h += i * L, p += i * B, f += i * z, g += i * W, w += i * Z, m += i * F, v += i * H, b += i * V, y += i * Y, C += i * K, x += i * q, _ += i * G, E += i * X, u += (i = t[5]) * U, d += i * M, h += i * j, p += i * L, f += i * B, g += i * z, w += i * W, m += i * Z, v += i * F, b += i * H, y += i * V, C += i * Y, x += i * K, _ += i * q, E += i * G, S += i * X, d += (i = t[6]) * U, h += i * M, p += i * j, f += i * L, g += i * B, w += i * z, m += i * W, v += i * Z, b += i * F, y += i * H, C += i * V, x += i * Y, _ += i * K, E += i * q, S += i * G, k += i * X, h += (i = t[7]) * U, p += i * M, f += i * j, g += i * L, w += i * B, m += i * z, v += i * W, b += i * Z, y += i * F, C += i * H, x += i * V, _ += i * Y, E += i * K, S += i * q, k += i * G, A += i * X, p += (i = t[8]) * U, f += i * M, g += i * j, w += i * L, m += i * B, v += i * z, b += i * W, y += i * Z, C += i * F, x += i * H, _ += i * V, E += i * Y, S += i * K, k += i * q, A += i * G, D += i * X, f += (i = t[9]) * U, g += i * M, w += i * j, m += i * L, v += i * B, b += i * z, y += i * W, C += i * Z, x += i * F, _ += i * H, E += i * V, S += i * Y, k += i * K, A += i * q, D += i * G, $ += i * X, g += (i = t[10]) * U, w += i * M, m += i * j, v += i * L, b += i * B, y += i * z, C += i * W, x += i * Z, _ += i * F, E += i * H, S += i * V, k += i * Y, A += i * K, D += i * q, $ += i * G, R += i * X, w += (i = t[11]) * U, m += i * M, v += i * j, b += i * L, y += i * B, C += i * z, x += i * W, _ += i * Z, E += i * F, S += i * H, k += i * V, A += i * Y, D += i * K, $ += i * q, R += i * G, O += i * X, m += (i = t[12]) * U, v += i * M, b += i * j, y += i * L, C += i * B, x += i * z, _ += i * W, E += i * Z, S += i * F, k += i * H, A += i * V, D += i * Y, $ += i * K, R += i * q, O += i * G, I += i * X, v += (i = t[13]) * U, b += i * M, y += i * j, C += i * L, x += i * B, _ += i * z, E += i * W, S += i * Z, k += i * F, A += i * H, D += i * V, $ += i * Y, R += i * K, O += i * q, I += i * G, T += i * X, b += (i = t[14]) * U, y += i * M, C += i * j, x += i * L, _ += i * B, E += i * z, S += i * W, k += i * Z, A += i * F, D += i * H, $ += i * V, R += i * Y, O += i * K, I += i * q, T += i * G, N += i * X, y += (i = t[15]) * U, C += i * M, x += i * j, _ += i * L, E += i * B, S += i * z, k += i * W, A += i * Z, D += i * F, $ += i * H, R += i * V, O += i * Y, I += i * K, T += i * q, N += i * G, P += i * X, o += 38 * C, a += 38 * x, s += 38 * _, l += 38 * E, c += 38 * S, u += 38 * k, d += 38 * A, h += 38 * D, p += 38 * $, f += 38 * R, g += 38 * O, w += 38 * I, m += 38 * T, v += 38 * N, b += 38 * P, n = Math.floor((i = o + (n = 1) + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = s + n + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, o += n - 1 + 37 * (n - 1), n = Math.floor((i = o + (n = 1) + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = s + n + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = w + n + 65535) / 65536), w = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, o += n - 1 + 37 * (n - 1), e[0] = o, e[1] = a, e[2] = s, e[3] = l, e[4] = c, e[5] = u, e[6] = d, e[7] = h, e[8] = p, e[9] = f, e[10] = g, e[11] = w, e[12] = m, e[13] = v, e[14] = b, e[15] = y
            }

            function p(e, t) {
                let r = new Uint8Array(32),
                    i = new Float64Array(80),
                    n = o(),
                    a = o(),
                    p = o(),
                    f = o(),
                    g = o(),
                    w = o();
                for (let t = 0; t < 31; t++) r[t] = e[t];
                r[31] = 127 & e[31] | 64, r[0] &= 248,
                    function(e, t) {
                        for (let r = 0; r < 16; r++) e[r] = t[2 * r] + (t[2 * r + 1] << 8);
                        e[15] &= 32767
                    }(i, t);
                for (let e = 0; e < 16; e++) a[e] = i[e];
                n[0] = f[0] = 1;
                for (let e = 254; e >= 0; --e) {
                    let t = r[e >>> 3] >>> (7 & e) & 1;
                    c(n, a, t), c(p, f, t), u(g, n, p), d(n, n, p), u(p, a, f), d(a, a, f), h(f, g, g), h(w, n, n), h(n, p, n), h(p, a, g), u(g, n, p), d(n, n, p), h(a, n, n), d(p, f, w), h(n, p, s), u(n, n, f), h(p, p, n), h(n, f, w), h(f, a, i), h(a, g, g), c(n, a, t), c(p, f, t)
                }
                for (let e = 0; e < 16; e++) i[e + 16] = n[e], i[e + 32] = p[e], i[e + 48] = a[e], i[e + 64] = f[e];
                let m = i.subarray(32),
                    v = i.subarray(16);
                ! function(e, t) {
                    let r = o();
                    for (let e = 0; e < 16; e++) r[e] = t[e];
                    for (let e = 253; e >= 0; e--) h(r, r, r), 2 !== e && 4 !== e && h(r, r, t);
                    for (let t = 0; t < 16; t++) e[t] = r[t]
                }(m, m), h(v, v, m);
                let b = new Uint8Array(32);
                return ! function(e, t) {
                    let r = o(),
                        i = o();
                    for (let e = 0; e < 16; e++) i[e] = t[e];
                    l(i), l(i), l(i);
                    for (let e = 0; e < 2; e++) {
                        r[0] = i[0] - 65517;
                        for (let e = 1; e < 15; e++) r[e] = i[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                        r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
                        let e = r[15] >> 16 & 1;
                        r[14] &= 65535, c(i, r, 1 - e)
                    }
                    for (let t = 0; t < 16; t++) e[2 * t] = 255 & i[t], e[2 * t + 1] = i[t] >> 8
                }(b, v), b
            }
            t.Au = function(e) {
                let r = (0, i.randomBytes)(32, e),
                    o = function(e) {
                        if (e.length !== t.KS) throw Error(`x25519: seed must be ${t.KS} bytes`);
                        let r = new Uint8Array(e);
                        return {
                            publicKey: p(r, a),
                            secretKey: r
                        }
                    }(r);
                return (0, n.wipe)(r), o
            }, t.gi = function(e, r, i = !1) {
                if (e.length !== t.kz) throw Error("X25519: incorrect secret key length");
                if (r.length !== t.kz) throw Error("X25519: incorrect public key length");
                let n = p(e, r);
                if (i) {
                    let e = 0;
                    for (let t = 0; t < n.length; t++) e |= n[t];
                    if (0 === e) throw Error("X25519: invalid shared key")
                }
                return n
            }
        },
        36897: function(e, t, r) {
            "use strict";
            let i = r(67116),
                n = r(58005),
                o = r(34470),
                a = r(61820),
                s = e => null == e,
                l = Symbol("encodeFragmentIdentifier");

            function c(e) {
                if ("string" != typeof e || 1 !== e.length) throw TypeError("arrayFormatSeparator must be single character string")
            }

            function u(e, t) {
                return t.encode ? t.strict ? i(e) : encodeURIComponent(e) : e
            }

            function d(e, t) {
                return t.decode ? n(e) : e
            }

            function h(e) {
                let t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function p(e) {
                let t = (e = h(e)).indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function f(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : t.parseBooleans && null !== e && ("true" === e.toLowerCase() || "false" === e.toLowerCase()) && (e = "true" === e.toLowerCase()), e
            }

            function g(e, t) {
                c((t = Object.assign({
                    decode: !0,
                    sort: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ",",
                    parseNumbers: !1,
                    parseBooleans: !1
                }, t)).arrayFormatSeparator);
                let r = function(e) {
                        let t;
                        switch (e.arrayFormat) {
                            case "index":
                                return (e, r, i) => {
                                    if (t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), !t) {
                                        i[e] = r;
                                        return
                                    }
                                    void 0 === i[e] && (i[e] = {}), i[e][t[1]] = r
                                };
                            case "bracket":
                                return (e, r, i) => {
                                    if (t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), !t) {
                                        i[e] = r;
                                        return
                                    }
                                    if (void 0 === i[e]) {
                                        i[e] = [r];
                                        return
                                    }
                                    i[e] = [].concat(i[e], r)
                                };
                            case "colon-list-separator":
                                return (e, r, i) => {
                                    if (t = /(:list)$/.exec(e), e = e.replace(/:list$/, ""), !t) {
                                        i[e] = r;
                                        return
                                    }
                                    if (void 0 === i[e]) {
                                        i[e] = [r];
                                        return
                                    }
                                    i[e] = [].concat(i[e], r)
                                };
                            case "comma":
                            case "separator":
                                return (t, r, i) => {
                                    let n = "string" == typeof r && r.includes(e.arrayFormatSeparator),
                                        o = "string" == typeof r && !n && d(r, e).includes(e.arrayFormatSeparator);
                                    r = o ? d(r, e) : r;
                                    let a = n || o ? r.split(e.arrayFormatSeparator).map(t => d(t, e)) : null === r ? r : d(r, e);
                                    i[t] = a
                                };
                            case "bracket-separator":
                                return (t, r, i) => {
                                    let n = /(\[\])$/.test(t);
                                    if (t = t.replace(/\[\]$/, ""), !n) {
                                        i[t] = r ? d(r, e) : r;
                                        return
                                    }
                                    let o = null === r ? [] : r.split(e.arrayFormatSeparator).map(t => d(t, e));
                                    if (void 0 === i[t]) {
                                        i[t] = o;
                                        return
                                    }
                                    i[t] = [].concat(i[t], o)
                                };
                            default:
                                return (e, t, r) => {
                                    if (void 0 === r[e]) {
                                        r[e] = t;
                                        return
                                    }
                                    r[e] = [].concat(r[e], t)
                                }
                        }
                    }(t),
                    i = Object.create(null);
                if ("string" != typeof e || !(e = e.trim().replace(/^[?#&]/, ""))) return i;
                for (let n of e.split("&")) {
                    if ("" === n) continue;
                    let [e, a] = o(t.decode ? n.replace(/\+/g, " ") : n, "=");
                    a = void 0 === a ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? a : d(a, t), r(d(e, t), a, i)
                }
                for (let e of Object.keys(i)) {
                    let r = i[e];
                    if ("object" == typeof r && null !== r)
                        for (let e of Object.keys(r)) r[e] = f(r[e], t);
                    else i[e] = f(r, t)
                }
                return !1 === t.sort ? i : (!0 === t.sort ? Object.keys(i).sort() : Object.keys(i).sort(t.sort)).reduce((e, t) => {
                    let r = i[t];
                    return r && "object" == typeof r && !Array.isArray(r) ? e[t] = function e(t) {
                        return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort((e, t) => Number(e) - Number(t)).map(e => t[e]) : t
                    }(r) : e[t] = r, e
                }, Object.create(null))
            }
            t.extract = p, t.parse = g, t.stringify = (e, t) => {
                if (!e) return "";
                c((t = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, t)).arrayFormatSeparator);
                let r = r => t.skipNull && s(e[r]) || t.skipEmptyString && "" === e[r],
                    i = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (r, i) => {
                                    let n = r.length;
                                    return void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [u(t, e), "[", n, "]"].join("")] : [...r, [u(t, e), "[", u(n, e), "]=", u(i, e)].join("")]
                                };
                            case "bracket":
                                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [u(t, e), "[]"].join("")] : [...r, [u(t, e), "[]=", u(i, e)].join("")];
                            case "colon-list-separator":
                                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [u(t, e), ":list="].join("")] : [...r, [u(t, e), ":list=", u(i, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    let t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return r => (i, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? i : (n = null === n ? "" : n, 0 === i.length) ? [
                                        [u(r, e), t, u(n, e)].join("")
                                    ] : [
                                        [i, u(n, e)].join(e.arrayFormatSeparator)
                                    ]
                                }
                            default:
                                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, u(t, e)] : [...r, [u(t, e), "=", u(i, e)].join("")]
                        }
                    }(t),
                    n = {};
                for (let t of Object.keys(e)) r(t) || (n[t] = e[t]);
                let o = Object.keys(n);
                return !1 !== t.sort && o.sort(t.sort), o.map(r => {
                    let n = e[r];
                    return void 0 === n ? "" : null === n ? u(r, t) : Array.isArray(n) ? 0 === n.length && "bracket-separator" === t.arrayFormat ? u(r, t) + "[]" : n.reduce(i(r), []).join("&") : u(r, t) + "=" + u(n, t)
                }).filter(e => e.length > 0).join("&")
            }, t.parseUrl = (e, t) => {
                t = Object.assign({
                    decode: !0
                }, t);
                let [r, i] = o(e, "#");
                return Object.assign({
                    url: r.split("?")[0] || "",
                    query: g(p(e), t)
                }, t && t.parseFragmentIdentifier && i ? {
                    fragmentIdentifier: d(i, t)
                } : {})
            }, t.stringifyUrl = (e, r) => {
                r = Object.assign({
                    encode: !0,
                    strict: !0,
                    [l]: !0
                }, r);
                let i = h(e.url).split("?")[0] || "",
                    n = t.extract(e.url),
                    o = Object.assign(t.parse(n, {
                        sort: !1
                    }), e.query),
                    a = t.stringify(o, r);
                a && (a = `?${a}`);
                let s = function(e) {
                    let t = "",
                        r = e.indexOf("#");
                    return -1 !== r && (t = e.slice(r)), t
                }(e.url);
                return e.fragmentIdentifier && (s = `#${r[l]?u(e.fragmentIdentifier,r):e.fragmentIdentifier}`), `${i}${a}${s}`
            }, t.pick = (e, r, i) => {
                i = Object.assign({
                    parseFragmentIdentifier: !0,
                    [l]: !1
                }, i);
                let {
                    url: n,
                    query: o,
                    fragmentIdentifier: s
                } = t.parseUrl(e, i);
                return t.stringifyUrl({
                    url: n,
                    query: a(o, r),
                    fragmentIdentifier: s
                }, i)
            }, t.exclude = (e, r, i) => {
                let n = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
                return t.pick(e, n, i)
            }
        },
        43869: function(e, t, r) {
            "use strict";
            r.d(t, {
                RELAY_JSONRPC: function() {
                    return i
                }
            }), r(24584);
            let i = {
                waku: {
                    publish: "waku_publish",
                    batchPublish: "waku_batchPublish",
                    subscribe: "waku_subscribe",
                    batchSubscribe: "waku_batchSubscribe",
                    subscription: "waku_subscription",
                    unsubscribe: "waku_unsubscribe",
                    batchUnsubscribe: "waku_batchUnsubscribe"
                },
                irn: {
                    publish: "irn_publish",
                    batchPublish: "irn_batchPublish",
                    subscribe: "irn_subscribe",
                    batchSubscribe: "irn_batchSubscribe",
                    subscription: "irn_subscription",
                    unsubscribe: "irn_unsubscribe",
                    batchUnsubscribe: "irn_batchUnsubscribe"
                },
                iridium: {
                    publish: "iridium_publish",
                    batchPublish: "iridium_batchPublish",
                    subscribe: "iridium_subscribe",
                    batchSubscribe: "iridium_batchSubscribe",
                    subscription: "iridium_subscription",
                    unsubscribe: "iridium_unsubscribe",
                    batchUnsubscribe: "iridium_batchUnsubscribe"
                }
            }
        },
        24584: function() {},
        72852: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(1812);
            i.__exportStar(r(83343), t), i.__exportStar(r(38520), t)
        },
        83343: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ONE_THOUSAND = t.ONE_HUNDRED = void 0, t.ONE_HUNDRED = 100, t.ONE_THOUSAND = 1e3
        },
        38520: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.ONE_YEAR = t.FOUR_WEEKS = t.THREE_WEEKS = t.TWO_WEEKS = t.ONE_WEEK = t.THIRTY_DAYS = t.SEVEN_DAYS = t.FIVE_DAYS = t.THREE_DAYS = t.ONE_DAY = t.TWENTY_FOUR_HOURS = t.TWELVE_HOURS = t.SIX_HOURS = t.THREE_HOURS = t.ONE_HOUR = t.SIXTY_MINUTES = t.THIRTY_MINUTES = t.TEN_MINUTES = t.FIVE_MINUTES = t.ONE_MINUTE = t.SIXTY_SECONDS = t.THIRTY_SECONDS = t.TEN_SECONDS = t.FIVE_SECONDS = t.ONE_SECOND = void 0, t.ONE_SECOND = 1, t.FIVE_SECONDS = 5, t.TEN_SECONDS = 10, t.THIRTY_SECONDS = 30, t.SIXTY_SECONDS = 60, t.ONE_MINUTE = t.SIXTY_SECONDS, t.FIVE_MINUTES = 5 * t.ONE_MINUTE, t.TEN_MINUTES = 10 * t.ONE_MINUTE, t.THIRTY_MINUTES = 30 * t.ONE_MINUTE, t.SIXTY_MINUTES = 60 * t.ONE_MINUTE, t.ONE_HOUR = t.SIXTY_MINUTES, t.THREE_HOURS = 3 * t.ONE_HOUR, t.SIX_HOURS = 6 * t.ONE_HOUR, t.TWELVE_HOURS = 12 * t.ONE_HOUR, t.TWENTY_FOUR_HOURS = 24 * t.ONE_HOUR, t.ONE_DAY = t.TWENTY_FOUR_HOURS, t.THREE_DAYS = 3 * t.ONE_DAY, t.FIVE_DAYS = 5 * t.ONE_DAY, t.SEVEN_DAYS = 7 * t.ONE_DAY, t.THIRTY_DAYS = 30 * t.ONE_DAY, t.ONE_WEEK = t.SEVEN_DAYS, t.TWO_WEEKS = 2 * t.ONE_WEEK, t.THREE_WEEKS = 3 * t.ONE_WEEK, t.FOUR_WEEKS = 4 * t.ONE_WEEK, t.ONE_YEAR = 365 * t.ONE_DAY
        },
        58619: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(1812);
            i.__exportStar(r(6954), t), i.__exportStar(r(91895), t), i.__exportStar(r(21087), t), i.__exportStar(r(72852), t)
        },
        21087: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(1812).__exportStar(r(36448), t)
        },
        36448: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IWatch = void 0;
            class r {}
            t.IWatch = r
        },
        24810: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.fromMiliseconds = t.toMiliseconds = void 0;
            let i = r(72852);
            t.toMiliseconds = function(e) {
                return e * i.ONE_THOUSAND
            }, t.fromMiliseconds = function(e) {
                return Math.floor(e / i.ONE_THOUSAND)
            }
        },
        18995: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.delay = void 0, t.delay = function(e) {
                return new Promise(t => {
                    setTimeout(() => {
                        t(!0)
                    }, e)
                })
            }
        },
        6954: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(1812);
            i.__exportStar(r(18995), t), i.__exportStar(r(24810), t)
        },
        91895: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.Watch = void 0;
            class r {
                constructor() {
                    this.timestamps = new Map
                }
                start(e) {
                    if (this.timestamps.has(e)) throw Error(`Watch already started for label: ${e}`);
                    this.timestamps.set(e, {
                        started: Date.now()
                    })
                }
                stop(e) {
                    let t = this.get(e);
                    if (void 0 !== t.elapsed) throw Error(`Watch already stopped for label: ${e}`);
                    let r = Date.now() - t.started;
                    this.timestamps.set(e, {
                        started: t.started,
                        elapsed: r
                    })
                }
                get(e) {
                    let t = this.timestamps.get(e);
                    if (void 0 === t) throw Error(`No timestamp found for label: ${e}`);
                    return t
                }
                elapsed(e) {
                    let t = this.get(e);
                    return t.elapsed || Date.now() - t.started
                }
            }
            t.Watch = r, t.default = r
        },
        1812: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return o
                },
                __asyncDelegator: function() {
                    return y
                },
                __asyncGenerator: function() {
                    return b
                },
                __asyncValues: function() {
                    return C
                },
                __await: function() {
                    return v
                },
                __awaiter: function() {
                    return u
                },
                __classPrivateFieldGet: function() {
                    return S
                },
                __classPrivateFieldSet: function() {
                    return k
                },
                __createBinding: function() {
                    return h
                },
                __decorate: function() {
                    return s
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return d
                },
                __importDefault: function() {
                    return E
                },
                __importStar: function() {
                    return _
                },
                __makeTemplateObject: function() {
                    return x
                },
                __metadata: function() {
                    return c
                },
                __param: function() {
                    return l
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return a
                },
                __spread: function() {
                    return w
                },
                __spreadArrays: function() {
                    return m
                },
                __values: function() {
                    return f
                }
            });
            /*! *****************************************************************************
            Copyright (c) Microsoft Corporation.

            Permission to use, copy, modify, and/or distribute this software for any
            purpose with or without fee is hereby granted.

            THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
            REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
            AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
            INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
            LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
            OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
            PERFORMANCE OF THIS SOFTWARE.
            ***************************************************************************** */
            var i = function(e, t) {
                return (i = Object.setPrototypeOf || ({
                    __proto__: []
                }) instanceof Array && function(e, t) {
                    e.__proto__ = t
                } || function(e, t) {
                    for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                })(e, t)
            };

            function n(e, t) {
                function r() {
                    this.constructor = e
                }
                i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }
            var o = function() {
                return (o = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function a(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function s(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }

            function l(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function c(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function u(e, t, r, i) {
                return new(r || (r = Promise))(function(n, o) {
                    function a(e) {
                        try {
                            l(i.next(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(e) {
                        try {
                            l(i.throw(e))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    l((i = i.apply(e, t || [])).next())
                })
            }

            function d(e, t) {
                var r, i, n, o, a = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return o = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (o[Symbol.iterator] = function() {
                    return this
                }), o;

                function s(o) {
                    return function(s) {
                        return function(o) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (r = 1, i && (n = 2 & o[0] ? i.return : o[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, o[1])).done) return n;
                                switch (i = 0, n && (o = [2 & o[0], n.value]), o[0]) {
                                    case 0:
                                    case 1:
                                        n = o;
                                        break;
                                    case 4:
                                        return a.label++, {
                                            value: o[1],
                                            done: !1
                                        };
                                    case 5:
                                        a.label++, i = o[1], o = [0];
                                        continue;
                                    case 7:
                                        o = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = a.trys).length > 0 && n[n.length - 1]) && (6 === o[0] || 2 === o[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === o[0] && (!n || o[1] > n[0] && o[1] < n[3])) {
                                            a.label = o[1];
                                            break
                                        }
                                        if (6 === o[0] && a.label < n[1]) {
                                            a.label = n[1], n = o;
                                            break
                                        }
                                        if (n && a.label < n[2]) {
                                            a.label = n[2], a.ops.push(o);
                                            break
                                        }
                                        n[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                o = t.call(e, a)
                            } catch (e) {
                                o = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & o[0]) throw o[1];
                            return {
                                value: o[0] ? o[1] : void 0,
                                done: !0
                            }
                        }([o, s])
                    }
                }
            }

            function h(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function p(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function f(e) {
                var t = "function" == typeof Symbol && Symbol.iterator,
                    r = t && e[t],
                    i = 0;
                if (r) return r.call(e);
                if (e && "number" == typeof e.length) return {
                    next: function() {
                        return e && i >= e.length && (e = void 0), {
                            value: e && e[i++],
                            done: !e
                        }
                    }
                };
                throw TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
            }

            function g(e, t) {
                var r = "function" == typeof Symbol && e[Symbol.iterator];
                if (!r) return e;
                var i, n, o = r.call(e),
                    a = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = o.next()).done;) a.push(i.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = o.return) && r.call(o)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return a
            }

            function w() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function m() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), n = 0, t = 0; t < r; t++)
                    for (var o = arguments[t], a = 0, s = o.length; a < s; a++, n++) i[n] = o[a];
                return i
            }

            function v(e) {
                return this instanceof v ? (this.v = e, this) : new v(e)
            }

            function b(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(e, t || []),
                    o = [];
                return i = {}, a("next"), a("throw"), a("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function a(e) {
                    n[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            o.push([e, t, r, i]) > 1 || s(e, t)
                        })
                    })
                }

                function s(e, t) {
                    try {
                        var r;
                        (r = n[e](t)).value instanceof v ? Promise.resolve(r.value.v).then(l, c) : u(o[0][2], r)
                    } catch (e) {
                        u(o[0][3], e)
                    }
                }

                function l(e) {
                    s("next", e)
                }

                function c(e) {
                    s("throw", e)
                }

                function u(e, t) {
                    e(t), o.shift(), o.length && s(o[0][0], o[0][1])
                }
            }

            function y(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, n) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: v(e[i](t)),
                            done: "return" === i
                        } : n ? n(t) : t
                    } : n
                }
            }

            function C(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = f(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
                    return this
                }, t);

                function i(r) {
                    t[r] = e[r] && function(t) {
                        return new Promise(function(i, n) {
                            ! function(e, t, r, i) {
                                Promise.resolve(i).then(function(t) {
                                    e({
                                        value: t,
                                        done: r
                                    })
                                }, t)
                            }(i, n, (t = e[r](t)).done, t.value)
                        })
                    }
                }
            }

            function x(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function _(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function E(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function k(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        849: function(e, t) {
            "use strict";

            function r(e) {
                let t;
                return "undefined" != typeof window && void 0 !== window[e] && (t = window[e]), t
            }

            function i(e) {
                let t = r(e);
                if (!t) throw Error(`${e} is not defined in Window`);
                return t
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.getLocalStorage = t.getLocalStorageOrThrow = t.getCrypto = t.getCryptoOrThrow = t.getLocation = t.getLocationOrThrow = t.getNavigator = t.getNavigatorOrThrow = t.getDocument = t.getDocumentOrThrow = t.getFromWindowOrThrow = t.getFromWindow = void 0, t.getFromWindow = r, t.getFromWindowOrThrow = i, t.getDocumentOrThrow = function() {
                return i("document")
            }, t.getDocument = function() {
                return r("document")
            }, t.getNavigatorOrThrow = function() {
                return i("navigator")
            }, t.getNavigator = function() {
                return r("navigator")
            }, t.getLocationOrThrow = function() {
                return i("location")
            }, t.getLocation = function() {
                return r("location")
            }, t.getCryptoOrThrow = function() {
                return i("crypto")
            }, t.getCrypto = function() {
                return r("crypto")
            }, t.getLocalStorageOrThrow = function() {
                return i("localStorage")
            }, t.getLocalStorage = function() {
                return r("localStorage")
            }
        },
        36073: function(e, t, r) {
            "use strict";
            t.D = void 0;
            let i = r(849);
            t.D = function() {
                let e, t, r;
                try {
                    e = i.getDocumentOrThrow(), t = i.getLocationOrThrow()
                } catch (e) {
                    return null
                }

                function n(...t) {
                    let r = e.getElementsByTagName("meta");
                    for (let e = 0; e < r.length; e++) {
                        let i = r[e],
                            n = ["itemprop", "property", "name"].map(e => i.getAttribute(e)).filter(e => !!e && t.includes(e));
                        if (n.length && n) {
                            let e = i.getAttribute("content");
                            if (e) return e
                        }
                    }
                    return ""
                }
                let o = ((r = n("name", "og:site_name", "og:title", "twitter:title")) || (r = e.title), r),
                    a = n("description", "og:description", "twitter:description", "keywords");
                return {
                    description: a,
                    url: t.origin,
                    icons: function() {
                        let r = e.getElementsByTagName("link"),
                            i = [];
                        for (let e = 0; e < r.length; e++) {
                            let n = r[e],
                                o = n.getAttribute("rel");
                            if (o && o.toLowerCase().indexOf("icon") > -1) {
                                let e = n.getAttribute("href");
                                if (e) {
                                    if (-1 === e.toLowerCase().indexOf("https:") && -1 === e.toLowerCase().indexOf("http:") && 0 !== e.indexOf("//")) {
                                        let r = t.protocol + "//" + t.host;
                                        if (0 === e.indexOf("/")) r += e;
                                        else {
                                            let i = t.pathname.split("/");
                                            i.pop(), r += i.join("/") + "/" + e
                                        }
                                        i.push(r)
                                    } else if (0 === e.indexOf("//")) {
                                        let r = t.protocol + e;
                                        i.push(r)
                                    } else i.push(e)
                                }
                            }
                        }
                        return i
                    }(),
                    name: o
                }
            }
        },
        134: function(e) {
            var t, r, i, n, o, a, s, l, c, u, d, h, p, f, g, w, m, v, b, y, C, x;
            e.exports = (t = "millisecond", r = "second", i = "minute", n = "hour", o = "week", a = "month", s = "quarter", l = "year", c = "date", u = "Invalid Date", d = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, h = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, p = function(e, t, r) {
                var i = String(e);
                return !i || i.length >= t ? e : "" + Array(t + 1 - i.length).join(r) + e
            }, (g = {})[f = "en"] = {
                name: "en",
                weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                ordinal: function(e) {
                    var t = ["th", "st", "nd", "rd"],
                        r = e % 100;
                    return "[" + e + (t[(r - 20) % 10] || t[r] || "th") + "]"
                }
            }, w = "$isDayjsObject", m = function(e) {
                return e instanceof C || !(!e || !e[w])
            }, v = function e(t, r, i) {
                var n;
                if (!t) return f;
                if ("string" == typeof t) {
                    var o = t.toLowerCase();
                    g[o] && (n = o), r && (g[o] = r, n = o);
                    var a = t.split("-");
                    if (!n && a.length > 1) return e(a[0])
                } else {
                    var s = t.name;
                    g[s] = t, n = s
                }
                return !i && n && (f = n), n || !i && f
            }, b = function(e, t) {
                if (m(e)) return e.clone();
                var r = "object" == typeof t ? t : {};
                return r.date = e, r.args = arguments, new C(r)
            }, (y = {
                s: p,
                z: function(e) {
                    var t = -e.utcOffset(),
                        r = Math.abs(t);
                    return (t <= 0 ? "+" : "-") + p(Math.floor(r / 60), 2, "0") + ":" + p(r % 60, 2, "0")
                },
                m: function e(t, r) {
                    if (t.date() < r.date()) return -e(r, t);
                    var i = 12 * (r.year() - t.year()) + (r.month() - t.month()),
                        n = t.clone().add(i, a),
                        o = r - n < 0,
                        s = t.clone().add(i + (o ? -1 : 1), a);
                    return +(-(i + (r - n) / (o ? n - s : s - n)) || 0)
                },
                a: function(e) {
                    return e < 0 ? Math.ceil(e) || 0 : Math.floor(e)
                },
                p: function(e) {
                    return ({
                        M: a,
                        y: l,
                        w: o,
                        d: "day",
                        D: c,
                        h: n,
                        m: i,
                        s: r,
                        ms: t,
                        Q: s
                    })[e] || String(e || "").toLowerCase().replace(/s$/, "")
                },
                u: function(e) {
                    return void 0 === e
                }
            }).l = v, y.i = m, y.w = function(e, t) {
                return b(e, {
                    locale: t.$L,
                    utc: t.$u,
                    x: t.$x,
                    $offset: t.$offset
                })
            }, x = (C = function() {
                function e(e) {
                    this.$L = v(e.locale, null, !0), this.parse(e), this.$x = this.$x || e.x || {}, this[w] = !0
                }
                var p = e.prototype;
                return p.parse = function(e) {
                    this.$d = function(e) {
                        var t = e.date,
                            r = e.utc;
                        if (null === t) return new Date(NaN);
                        if (y.u(t)) return new Date;
                        if (t instanceof Date) return new Date(t);
                        if ("string" == typeof t && !/Z$/i.test(t)) {
                            var i = t.match(d);
                            if (i) {
                                var n = i[2] - 1 || 0,
                                    o = (i[7] || "0").substring(0, 3);
                                return r ? new Date(Date.UTC(i[1], n, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, o)) : new Date(i[1], n, i[3] || 1, i[4] || 0, i[5] || 0, i[6] || 0, o)
                            }
                        }
                        return new Date(t)
                    }(e), this.init()
                }, p.init = function() {
                    var e = this.$d;
                    this.$y = e.getFullYear(), this.$M = e.getMonth(), this.$D = e.getDate(), this.$W = e.getDay(), this.$H = e.getHours(), this.$m = e.getMinutes(), this.$s = e.getSeconds(), this.$ms = e.getMilliseconds()
                }, p.$utils = function() {
                    return y
                }, p.isValid = function() {
                    return this.$d.toString() !== u
                }, p.isSame = function(e, t) {
                    var r = b(e);
                    return this.startOf(t) <= r && r <= this.endOf(t)
                }, p.isAfter = function(e, t) {
                    return b(e) < this.startOf(t)
                }, p.isBefore = function(e, t) {
                    return this.endOf(t) < b(e)
                }, p.$g = function(e, t, r) {
                    return y.u(e) ? this[t] : this.set(r, e)
                }, p.unix = function() {
                    return Math.floor(this.valueOf() / 1e3)
                }, p.valueOf = function() {
                    return this.$d.getTime()
                }, p.startOf = function(e, t) {
                    var s = this,
                        u = !!y.u(t) || t,
                        d = y.p(e),
                        h = function(e, t) {
                            var r = y.w(s.$u ? Date.UTC(s.$y, t, e) : new Date(s.$y, t, e), s);
                            return u ? r : r.endOf("day")
                        },
                        p = function(e, t) {
                            return y.w(s.toDate()[e].apply(s.toDate("s"), (u ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(t)), s)
                        },
                        f = this.$W,
                        g = this.$M,
                        w = this.$D,
                        m = "set" + (this.$u ? "UTC" : "");
                    switch (d) {
                        case l:
                            return u ? h(1, 0) : h(31, 11);
                        case a:
                            return u ? h(1, g) : h(0, g + 1);
                        case o:
                            var v = this.$locale().weekStart || 0,
                                b = (f < v ? f + 7 : f) - v;
                            return h(u ? w - b : w + (6 - b), g);
                        case "day":
                        case c:
                            return p(m + "Hours", 0);
                        case n:
                            return p(m + "Minutes", 1);
                        case i:
                            return p(m + "Seconds", 2);
                        case r:
                            return p(m + "Milliseconds", 3);
                        default:
                            return this.clone()
                    }
                }, p.endOf = function(e) {
                    return this.startOf(e, !1)
                }, p.$set = function(e, o) {
                    var s, u = y.p(e),
                        d = "set" + (this.$u ? "UTC" : ""),
                        h = ((s = {}).day = d + "Date", s[c] = d + "Date", s[a] = d + "Month", s[l] = d + "FullYear", s[n] = d + "Hours", s[i] = d + "Minutes", s[r] = d + "Seconds", s[t] = d + "Milliseconds", s)[u],
                        p = "day" === u ? this.$D + (o - this.$W) : o;
                    if (u === a || u === l) {
                        var f = this.clone().set(c, 1);
                        f.$d[h](p), f.init(), this.$d = f.set(c, Math.min(this.$D, f.daysInMonth())).$d
                    } else h && this.$d[h](p);
                    return this.init(), this
                }, p.set = function(e, t) {
                    return this.clone().$set(e, t)
                }, p.get = function(e) {
                    return this[y.p(e)]()
                }, p.add = function(e, t) {
                    var s, c = this;
                    e = Number(e);
                    var u = y.p(t),
                        d = function(t) {
                            var r = b(c);
                            return y.w(r.date(r.date() + Math.round(t * e)), c)
                        };
                    if (u === a) return this.set(a, this.$M + e);
                    if (u === l) return this.set(l, this.$y + e);
                    if ("day" === u) return d(1);
                    if (u === o) return d(7);
                    var h = ((s = {})[i] = 6e4, s[n] = 36e5, s[r] = 1e3, s)[u] || 1,
                        p = this.$d.getTime() + e * h;
                    return y.w(p, this)
                }, p.subtract = function(e, t) {
                    return this.add(-1 * e, t)
                }, p.format = function(e) {
                    var t = this,
                        r = this.$locale();
                    if (!this.isValid()) return r.invalidDate || u;
                    var i = e || "YYYY-MM-DDTHH:mm:ssZ",
                        n = y.z(this),
                        o = this.$H,
                        a = this.$m,
                        s = this.$M,
                        l = r.weekdays,
                        c = r.months,
                        d = r.meridiem,
                        p = function(e, r, n, o) {
                            return e && (e[r] || e(t, i)) || n[r].slice(0, o)
                        },
                        f = function(e) {
                            return y.s(o % 12 || 12, e, "0")
                        },
                        g = d || function(e, t, r) {
                            var i = e < 12 ? "AM" : "PM";
                            return r ? i.toLowerCase() : i
                        };
                    return i.replace(h, function(e, i) {
                        return i || function(e) {
                            switch (e) {
                                case "YY":
                                    return String(t.$y).slice(-2);
                                case "YYYY":
                                    return y.s(t.$y, 4, "0");
                                case "M":
                                    return s + 1;
                                case "MM":
                                    return y.s(s + 1, 2, "0");
                                case "MMM":
                                    return p(r.monthsShort, s, c, 3);
                                case "MMMM":
                                    return p(c, s);
                                case "D":
                                    return t.$D;
                                case "DD":
                                    return y.s(t.$D, 2, "0");
                                case "d":
                                    return String(t.$W);
                                case "dd":
                                    return p(r.weekdaysMin, t.$W, l, 2);
                                case "ddd":
                                    return p(r.weekdaysShort, t.$W, l, 3);
                                case "dddd":
                                    return l[t.$W];
                                case "H":
                                    return String(o);
                                case "HH":
                                    return y.s(o, 2, "0");
                                case "h":
                                    return f(1);
                                case "hh":
                                    return f(2);
                                case "a":
                                    return g(o, a, !0);
                                case "A":
                                    return g(o, a, !1);
                                case "m":
                                    return String(a);
                                case "mm":
                                    return y.s(a, 2, "0");
                                case "s":
                                    return String(t.$s);
                                case "ss":
                                    return y.s(t.$s, 2, "0");
                                case "SSS":
                                    return y.s(t.$ms, 3, "0");
                                case "Z":
                                    return n
                            }
                            return null
                        }(e) || n.replace(":", "")
                    })
                }, p.utcOffset = function() {
                    return -(15 * Math.round(this.$d.getTimezoneOffset() / 15))
                }, p.diff = function(e, t, c) {
                    var u, d = this,
                        h = y.p(t),
                        p = b(e),
                        f = (p.utcOffset() - this.utcOffset()) * 6e4,
                        g = this - p,
                        w = function() {
                            return y.m(d, p)
                        };
                    switch (h) {
                        case l:
                            u = w() / 12;
                            break;
                        case a:
                            u = w();
                            break;
                        case s:
                            u = w() / 3;
                            break;
                        case o:
                            u = (g - f) / 6048e5;
                            break;
                        case "day":
                            u = (g - f) / 864e5;
                            break;
                        case n:
                            u = g / 36e5;
                            break;
                        case i:
                            u = g / 6e4;
                            break;
                        case r:
                            u = g / 1e3;
                            break;
                        default:
                            u = g
                    }
                    return c ? u : y.a(u)
                }, p.daysInMonth = function() {
                    return this.endOf(a).$D
                }, p.$locale = function() {
                    return g[this.$L]
                }, p.locale = function(e, t) {
                    if (!e) return this.$L;
                    var r = this.clone(),
                        i = v(e, t, !0);
                    return i && (r.$L = i), r
                }, p.clone = function() {
                    return y.w(this.$d, this)
                }, p.toDate = function() {
                    return new Date(this.valueOf())
                }, p.toJSON = function() {
                    return this.isValid() ? this.toISOString() : null
                }, p.toISOString = function() {
                    return this.$d.toISOString()
                }, p.toString = function() {
                    return this.$d.toUTCString()
                }, e
            }()).prototype, b.prototype = x, [
                ["$ms", t],
                ["$s", r],
                ["$m", i],
                ["$H", n],
                ["$W", "day"],
                ["$M", a],
                ["$y", l],
                ["$D", c]
            ].forEach(function(e) {
                x[e[1]] = function(t) {
                    return this.$g(t, e[0], e[1])
                }
            }), b.extend = function(e, t) {
                return e.$i || (e(t, C, b), e.$i = !0), b
            }, b.locale = v, b.isDayjs = m, b.unix = function(e) {
                return b(1e3 * e)
            }, b.en = g[f], b.Ls = g, b.p = {}, b)
        },
        63037: function(e) {
            e.exports = function(e, t, r) {
                e = e || {};
                var i = t.prototype,
                    n = {
                        future: "in %s",
                        past: "%s ago",
                        s: "a few seconds",
                        m: "a minute",
                        mm: "%d minutes",
                        h: "an hour",
                        hh: "%d hours",
                        d: "a day",
                        dd: "%d days",
                        M: "a month",
                        MM: "%d months",
                        y: "a year",
                        yy: "%d years"
                    };

                function o(e, t, r, n) {
                    return i.fromToBase(e, t, r, n)
                }
                r.en.relativeTime = n, i.fromToBase = function(t, i, o, a, s) {
                    for (var l, c, u, d = o.$locale().relativeTime || n, h = e.thresholds || [{
                            l: "s",
                            r: 44,
                            d: "second"
                        }, {
                            l: "m",
                            r: 89
                        }, {
                            l: "mm",
                            r: 44,
                            d: "minute"
                        }, {
                            l: "h",
                            r: 89
                        }, {
                            l: "hh",
                            r: 21,
                            d: "hour"
                        }, {
                            l: "d",
                            r: 35
                        }, {
                            l: "dd",
                            r: 25,
                            d: "day"
                        }, {
                            l: "M",
                            r: 45
                        }, {
                            l: "MM",
                            r: 10,
                            d: "month"
                        }, {
                            l: "y",
                            r: 17
                        }, {
                            l: "yy",
                            d: "year"
                        }], p = h.length, f = 0; f < p; f += 1) {
                        var g = h[f];
                        g.d && (l = a ? r(t).diff(o, g.d, !0) : o.diff(t, g.d, !0));
                        var w = (e.rounding || Math.round)(Math.abs(l));
                        if (u = l > 0, w <= g.r || !g.r) {
                            w <= 1 && f > 0 && (g = h[f - 1]);
                            var m = d[g.l];
                            s && (w = s("" + w)), c = "string" == typeof m ? m.replace("%d", w) : m(w, i, g.l, u);
                            break
                        }
                    }
                    if (i) return c;
                    var v = u ? d.future : d.past;
                    return "function" == typeof v ? v(c) : v.replace("%s", c)
                }, i.to = function(e, t) {
                    return o(e, t, this, !0)
                }, i.from = function(e, t) {
                    return o(e, t, this)
                };
                var a = function(e) {
                    return e.$u ? r.utc() : r()
                };
                i.toNow = function(e) {
                    return this.to(a(this), e)
                }, i.fromNow = function(e) {
                    return this.from(a(this), e)
                }
            }
        },
        77554: function(e) {
            e.exports = function(e, t, r) {
                r.updateLocale = function(e, t) {
                    var i = r.Ls[e];
                    if (i) return (t ? Object.keys(t) : []).forEach(function(e) {
                        i[e] = t[e]
                    }), i
                }
            }
        },
        34699: function(e, t) {
            "use strict";
            t.byteLength = function(e) {
                var t = l(e),
                    r = t[0],
                    i = t[1];
                return (r + i) * 3 / 4 - i
            }, t.toByteArray = function(e) {
                var t, r, o = l(e),
                    a = o[0],
                    s = o[1],
                    c = new n((a + s) * 3 / 4 - s),
                    u = 0,
                    d = s > 0 ? a - 4 : a;
                for (r = 0; r < d; r += 4) t = i[e.charCodeAt(r)] << 18 | i[e.charCodeAt(r + 1)] << 12 | i[e.charCodeAt(r + 2)] << 6 | i[e.charCodeAt(r + 3)], c[u++] = t >> 16 & 255, c[u++] = t >> 8 & 255, c[u++] = 255 & t;
                return 2 === s && (t = i[e.charCodeAt(r)] << 2 | i[e.charCodeAt(r + 1)] >> 4, c[u++] = 255 & t), 1 === s && (t = i[e.charCodeAt(r)] << 10 | i[e.charCodeAt(r + 1)] << 4 | i[e.charCodeAt(r + 2)] >> 2, c[u++] = t >> 8 & 255, c[u++] = 255 & t), c
            }, t.fromByteArray = function(e) {
                for (var t, i = e.length, n = i % 3, o = [], a = 0, s = i - n; a < s; a += 16383) o.push(function(e, t, i) {
                    for (var n, o = [], a = t; a < i; a += 3) o.push(r[(n = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2])) >> 18 & 63] + r[n >> 12 & 63] + r[n >> 6 & 63] + r[63 & n]);
                    return o.join("")
                }(e, a, a + 16383 > s ? s : a + 16383));
                return 1 === n ? o.push(r[(t = e[i - 1]) >> 2] + r[t << 4 & 63] + "==") : 2 === n && o.push(r[(t = (e[i - 2] << 8) + e[i - 1]) >> 10] + r[t >> 4 & 63] + r[t << 2 & 63] + "="), o.join("")
            };
            for (var r = [], i = [], n = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", a = 0, s = o.length; a < s; ++a) r[a] = o[a], i[o.charCodeAt(a)] = a;

            function l(e) {
                var t = e.length;
                if (t % 4 > 0) throw Error("Invalid string. Length must be a multiple of 4");
                var r = e.indexOf("="); - 1 === r && (r = t);
                var i = r === t ? 0 : 4 - r % 4;
                return [r, i]
            }
            i["-".charCodeAt(0)] = 62, i["_".charCodeAt(0)] = 63
        },
        67133: function(e, t, r) {
            "use strict";
            /*!
             * The buffer module from node.js, for the browser.
             *
             * @author   Feross Aboukhadijeh <https://feross.org>
             * @license  MIT
             */
            let i = r(34699),
                n = r(19087),
                o = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;

            function a(e) {
                if (e > 2147483647) throw RangeError('The value "' + e + '" is invalid for option "size"');
                let t = new Uint8Array(e);
                return Object.setPrototypeOf(t, s.prototype), t
            }

            function s(e, t, r) {
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw TypeError('The "string" argument must be of type string. Received type number');
                    return u(e)
                }
                return l(e, t, r)
            }

            function l(e, t, r) {
                if ("string" == typeof e) return function(e, t) {
                    if (("string" != typeof t || "" === t) && (t = "utf8"), !s.isEncoding(t)) throw TypeError("Unknown encoding: " + t);
                    let r = 0 | f(e, t),
                        i = a(r),
                        n = i.write(e, t);
                    return n !== r && (i = i.slice(0, n)), i
                }(e, t);
                if (ArrayBuffer.isView(e)) return function(e) {
                    if (M(e, Uint8Array)) {
                        let t = new Uint8Array(e);
                        return h(t.buffer, t.byteOffset, t.byteLength)
                    }
                    return d(e)
                }(e);
                if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                if (M(e, ArrayBuffer) || e && M(e.buffer, ArrayBuffer) || "undefined" != typeof SharedArrayBuffer && (M(e, SharedArrayBuffer) || e && M(e.buffer, SharedArrayBuffer))) return h(e, t, r);
                if ("number" == typeof e) throw TypeError('The "value" argument must not be of type number. Received type number');
                let i = e.valueOf && e.valueOf();
                if (null != i && i !== e) return s.from(i, t, r);
                let n = function(e) {
                    var t;
                    if (s.isBuffer(e)) {
                        let t = 0 | p(e.length),
                            r = a(t);
                        return 0 === r.length || e.copy(r, 0, 0, t), r
                    }
                    return void 0 !== e.length ? "number" != typeof e.length || (t = e.length) != t ? a(0) : d(e) : "Buffer" === e.type && Array.isArray(e.data) ? d(e.data) : void 0
                }(e);
                if (n) return n;
                if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return s.from(e[Symbol.toPrimitive]("string"), t, r);
                throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
            }

            function c(e) {
                if ("number" != typeof e) throw TypeError('"size" argument must be of type number');
                if (e < 0) throw RangeError('The value "' + e + '" is invalid for option "size"')
            }

            function u(e) {
                return c(e), a(e < 0 ? 0 : 0 | p(e))
            }

            function d(e) {
                let t = e.length < 0 ? 0 : 0 | p(e.length),
                    r = a(t);
                for (let i = 0; i < t; i += 1) r[i] = 255 & e[i];
                return r
            }

            function h(e, t, r) {
                let i;
                if (t < 0 || e.byteLength < t) throw RangeError('"offset" is outside of buffer bounds');
                if (e.byteLength < t + (r || 0)) throw RangeError('"length" is outside of buffer bounds');
                return Object.setPrototypeOf(i = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), s.prototype), i
            }

            function p(e) {
                if (e >= 2147483647) throw RangeError("Attempt to allocate Buffer larger than maximum size: 0x7fffffff bytes");
                return 0 | e
            }

            function f(e, t) {
                if (s.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || M(e, ArrayBuffer)) return e.byteLength;
                if ("string" != typeof e) throw TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                let r = e.length,
                    i = arguments.length > 2 && !0 === arguments[2];
                if (!i && 0 === r) return 0;
                let n = !1;
                for (;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                        return N(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return P(e).length;
                    default:
                        if (n) return i ? -1 : N(e).length;
                        t = ("" + t).toLowerCase(), n = !0
                }
            }

            function g(e, t, r) {
                let n = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0 || (r >>>= 0) <= (t >>>= 0))) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return function(e, t, r) {
                            let i = e.length;
                            (!t || t < 0) && (t = 0), (!r || r < 0 || r > i) && (r = i);
                            let n = "";
                            for (let i = t; i < r; ++i) n += j[e[i]];
                            return n
                        }(this, t, r);
                    case "utf8":
                    case "utf-8":
                        return b(this, t, r);
                    case "ascii":
                        return function(e, t, r) {
                            let i = "";
                            r = Math.min(e.length, r);
                            for (let n = t; n < r; ++n) i += String.fromCharCode(127 & e[n]);
                            return i
                        }(this, t, r);
                    case "latin1":
                    case "binary":
                        return function(e, t, r) {
                            let i = "";
                            r = Math.min(e.length, r);
                            for (let n = t; n < r; ++n) i += String.fromCharCode(e[n]);
                            return i
                        }(this, t, r);
                    case "base64":
                        var o, a;
                        return o = t, a = r, 0 === o && a === this.length ? i.fromByteArray(this) : i.fromByteArray(this.slice(o, a));
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return function(e, t, r) {
                            let i = e.slice(t, r),
                                n = "";
                            for (let e = 0; e < i.length - 1; e += 2) n += String.fromCharCode(i[e] + 256 * i[e + 1]);
                            return n
                        }(this, t, r);
                    default:
                        if (n) throw TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), n = !0
                }
            }

            function w(e, t, r) {
                let i = e[t];
                e[t] = e[r], e[r] = i
            }

            function m(e, t, r, i, n) {
                var o;
                if (0 === e.length) return -1;
                if ("string" == typeof r ? (i = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), (o = r = +r) != o && (r = n ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                    if (n) return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!n) return -1;
                    r = 0
                }
                if ("string" == typeof t && (t = s.from(t, i)), s.isBuffer(t)) return 0 === t.length ? -1 : v(e, t, r, i, n);
                if ("number" == typeof t) return (t &= 255, "function" == typeof Uint8Array.prototype.indexOf) ? n ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : v(e, [t], r, i, n);
                throw TypeError("val must be string, number or Buffer")
            }

            function v(e, t, r, i, n) {
                let o, a = 1,
                    s = e.length,
                    l = t.length;
                if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    a = 2, s /= 2, l /= 2, r /= 2
                }

                function c(e, t) {
                    return 1 === a ? e[t] : e.readUInt16BE(t * a)
                }
                if (n) {
                    let i = -1;
                    for (o = r; o < s; o++)
                        if (c(e, o) === c(t, -1 === i ? 0 : o - i)) {
                            if (-1 === i && (i = o), o - i + 1 === l) return i * a
                        } else -1 !== i && (o -= o - i), i = -1
                } else
                    for (r + l > s && (r = s - l), o = r; o >= 0; o--) {
                        let r = !0;
                        for (let i = 0; i < l; i++)
                            if (c(e, o + i) !== c(t, i)) {
                                r = !1;
                                break
                            }
                        if (r) return o
                    }
                return -1
            }

            function b(e, t, r) {
                r = Math.min(e.length, r);
                let i = [],
                    n = t;
                for (; n < r;) {
                    let t = e[n],
                        o = null,
                        a = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                    if (n + a <= r) {
                        let r, i, s, l;
                        switch (a) {
                            case 1:
                                t < 128 && (o = t);
                                break;
                            case 2:
                                (192 & (r = e[n + 1])) == 128 && (l = (31 & t) << 6 | 63 & r) > 127 && (o = l);
                                break;
                            case 3:
                                r = e[n + 1], i = e[n + 2], (192 & r) == 128 && (192 & i) == 128 && (l = (15 & t) << 12 | (63 & r) << 6 | 63 & i) > 2047 && (l < 55296 || l > 57343) && (o = l);
                                break;
                            case 4:
                                r = e[n + 1], i = e[n + 2], s = e[n + 3], (192 & r) == 128 && (192 & i) == 128 && (192 & s) == 128 && (l = (15 & t) << 18 | (63 & r) << 12 | (63 & i) << 6 | 63 & s) > 65535 && l < 1114112 && (o = l)
                        }
                    }
                    null === o ? (o = 65533, a = 1) : o > 65535 && (o -= 65536, i.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), i.push(o), n += a
                }
                return function(e) {
                    let t = e.length;
                    if (t <= 4096) return String.fromCharCode.apply(String, e);
                    let r = "",
                        i = 0;
                    for (; i < t;) r += String.fromCharCode.apply(String, e.slice(i, i += 4096));
                    return r
                }(i)
            }

            function y(e, t, r) {
                if (e % 1 != 0 || e < 0) throw RangeError("offset is not uint");
                if (e + t > r) throw RangeError("Trying to access beyond buffer length")
            }

            function C(e, t, r, i, n, o) {
                if (!s.isBuffer(e)) throw TypeError('"buffer" argument must be a Buffer instance');
                if (t > n || t < o) throw RangeError('"value" argument is out of bounds');
                if (r + i > e.length) throw RangeError("Index out of range")
            }

            function x(e, t, r, i, n) {
                R(t, i, n, e, r, 7);
                let o = Number(t & BigInt(4294967295));
                e[r++] = o, o >>= 8, e[r++] = o, o >>= 8, e[r++] = o, o >>= 8, e[r++] = o;
                let a = Number(t >> BigInt(32) & BigInt(4294967295));
                return e[r++] = a, a >>= 8, e[r++] = a, a >>= 8, e[r++] = a, a >>= 8, e[r++] = a, r
            }

            function _(e, t, r, i, n) {
                R(t, i, n, e, r, 7);
                let o = Number(t & BigInt(4294967295));
                e[r + 7] = o, o >>= 8, e[r + 6] = o, o >>= 8, e[r + 5] = o, o >>= 8, e[r + 4] = o;
                let a = Number(t >> BigInt(32) & BigInt(4294967295));
                return e[r + 3] = a, a >>= 8, e[r + 2] = a, a >>= 8, e[r + 1] = a, a >>= 8, e[r] = a, r + 8
            }

            function E(e, t, r, i, n, o) {
                if (r + i > e.length || r < 0) throw RangeError("Index out of range")
            }

            function S(e, t, r, i, o) {
                return t = +t, r >>>= 0, o || E(e, t, r, 4, 34028234663852886e22, -34028234663852886e22), n.write(e, t, r, i, 23, 4), r + 4
            }

            function k(e, t, r, i, o) {
                return t = +t, r >>>= 0, o || E(e, t, r, 8, 17976931348623157e292, -17976931348623157e292), n.write(e, t, r, i, 52, 8), r + 8
            }
            t.Buffer = s, t.SlowBuffer = function(e) {
                return +e != e && (e = 0), s.alloc(+e)
            }, t.INSPECT_MAX_BYTES = 50, t.kMaxLength = 2147483647, s.TYPED_ARRAY_SUPPORT = function() {
                try {
                    let e = new Uint8Array(1),
                        t = {
                            foo: function() {
                                return 42
                            }
                        };
                    return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                } catch (e) {
                    return !1
                }
            }(), s.TYPED_ARRAY_SUPPORT || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s.prototype, "parent", {
                enumerable: !0,
                get: function() {
                    if (s.isBuffer(this)) return this.buffer
                }
            }), Object.defineProperty(s.prototype, "offset", {
                enumerable: !0,
                get: function() {
                    if (s.isBuffer(this)) return this.byteOffset
                }
            }), s.poolSize = 8192, s.from = function(e, t, r) {
                return l(e, t, r)
            }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array), s.alloc = function(e, t, r) {
                return (c(e), e <= 0) ? a(e) : void 0 !== t ? "string" == typeof r ? a(e).fill(t, r) : a(e).fill(t) : a(e)
            }, s.allocUnsafe = function(e) {
                return u(e)
            }, s.allocUnsafeSlow = function(e) {
                return u(e)
            }, s.isBuffer = function(e) {
                return null != e && !0 === e._isBuffer && e !== s.prototype
            }, s.compare = function(e, t) {
                if (M(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), M(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                if (e === t) return 0;
                let r = e.length,
                    i = t.length;
                for (let n = 0, o = Math.min(r, i); n < o; ++n)
                    if (e[n] !== t[n]) {
                        r = e[n], i = t[n];
                        break
                    }
                return r < i ? -1 : i < r ? 1 : 0
            }, s.isEncoding = function(e) {
                switch (String(e).toLowerCase()) {
                    case "hex":
                    case "utf8":
                    case "utf-8":
                    case "ascii":
                    case "latin1":
                    case "binary":
                    case "base64":
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, s.concat = function(e, t) {
                let r;
                if (!Array.isArray(e)) throw TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return s.alloc(0);
                if (void 0 === t)
                    for (r = 0, t = 0; r < e.length; ++r) t += e[r].length;
                let i = s.allocUnsafe(t),
                    n = 0;
                for (r = 0; r < e.length; ++r) {
                    let t = e[r];
                    if (M(t, Uint8Array)) n + t.length > i.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(i, n)) : Uint8Array.prototype.set.call(i, t, n);
                    else if (s.isBuffer(t)) t.copy(i, n);
                    else throw TypeError('"list" argument must be an Array of Buffers');
                    n += t.length
                }
                return i
            }, s.byteLength = f, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
                let e = this.length;
                if (e % 2 != 0) throw RangeError("Buffer size must be a multiple of 16-bits");
                for (let t = 0; t < e; t += 2) w(this, t, t + 1);
                return this
            }, s.prototype.swap32 = function() {
                let e = this.length;
                if (e % 4 != 0) throw RangeError("Buffer size must be a multiple of 32-bits");
                for (let t = 0; t < e; t += 4) w(this, t, t + 3), w(this, t + 1, t + 2);
                return this
            }, s.prototype.swap64 = function() {
                let e = this.length;
                if (e % 8 != 0) throw RangeError("Buffer size must be a multiple of 64-bits");
                for (let t = 0; t < e; t += 8) w(this, t, t + 7), w(this, t + 1, t + 6), w(this, t + 2, t + 5), w(this, t + 3, t + 4);
                return this
            }, s.prototype.toString = function() {
                let e = this.length;
                return 0 === e ? "" : 0 == arguments.length ? b(this, 0, e) : g.apply(this, arguments)
            }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
                if (!s.isBuffer(e)) throw TypeError("Argument must be a Buffer");
                return this === e || 0 === s.compare(this, e)
            }, s.prototype.inspect = function() {
                let e = "",
                    r = t.INSPECT_MAX_BYTES;
                return e = this.toString("hex", 0, r).replace(/(.{2})/g, "$1 ").trim(), this.length > r && (e += " ... "), "<Buffer " + e + ">"
            }, o && (s.prototype[o] = s.prototype.inspect), s.prototype.compare = function(e, t, r, i, n) {
                if (M(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === i && (i = 0), void 0 === n && (n = this.length), t < 0 || r > e.length || i < 0 || n > this.length) throw RangeError("out of range index");
                if (i >= n && t >= r) return 0;
                if (i >= n) return -1;
                if (t >= r) return 1;
                if (t >>>= 0, r >>>= 0, i >>>= 0, n >>>= 0, this === e) return 0;
                let o = n - i,
                    a = r - t,
                    l = Math.min(o, a),
                    c = this.slice(i, n),
                    u = e.slice(t, r);
                for (let e = 0; e < l; ++e)
                    if (c[e] !== u[e]) {
                        o = c[e], a = u[e];
                        break
                    }
                return o < a ? -1 : a < o ? 1 : 0
            }, s.prototype.includes = function(e, t, r) {
                return -1 !== this.indexOf(e, t, r)
            }, s.prototype.indexOf = function(e, t, r) {
                return m(this, e, t, r, !0)
            }, s.prototype.lastIndexOf = function(e, t, r) {
                return m(this, e, t, r, !1)
            }, s.prototype.write = function(e, t, r, i) {
                var n, o, a, s, l, c, u, d;
                if (void 0 === t) i = "utf8", r = this.length, t = 0;
                else if (void 0 === r && "string" == typeof t) i = t, r = this.length, t = 0;
                else if (isFinite(t)) t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === i && (i = "utf8")) : (i = r, r = void 0);
                else throw Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                let h = this.length - t;
                if ((void 0 === r || r > h) && (r = h), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw RangeError("Attempt to write outside buffer bounds");
                i || (i = "utf8");
                let p = !1;
                for (;;) switch (i) {
                    case "hex":
                        return function(e, t, r, i) {
                            let n;
                            r = Number(r) || 0;
                            let o = e.length - r;
                            i ? (i = Number(i)) > o && (i = o) : i = o;
                            let a = t.length;
                            for (i > a / 2 && (i = a / 2), n = 0; n < i; ++n) {
                                let i = parseInt(t.substr(2 * n, 2), 16);
                                if (i != i) break;
                                e[r + n] = i
                            }
                            return n
                        }(this, e, t, r);
                    case "utf8":
                    case "utf-8":
                        return n = t, o = r, U(N(e, this.length - n), this, n, o);
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return a = t, s = r, U(function(e) {
                            let t = [];
                            for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                            return t
                        }(e), this, a, s);
                    case "base64":
                        return l = t, c = r, U(P(e), this, l, c);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return u = t, d = r, U(function(e, t) {
                            let r, i;
                            let n = [];
                            for (let o = 0; o < e.length && !((t -= 2) < 0); ++o) i = (r = e.charCodeAt(o)) >> 8, n.push(r % 256), n.push(i);
                            return n
                        }(e, this.length - u), this, u, d);
                    default:
                        if (p) throw TypeError("Unknown encoding: " + i);
                        i = ("" + i).toLowerCase(), p = !0
                }
            }, s.prototype.toJSON = function() {
                return {
                    type: "Buffer",
                    data: Array.prototype.slice.call(this._arr || this, 0)
                }
            }, s.prototype.slice = function(e, t) {
                let r = this.length;
                e = ~~e, t = void 0 === t ? r : ~~t, e < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), t < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
                let i = this.subarray(e, t);
                return Object.setPrototypeOf(i, s.prototype), i
            }, s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || y(e, t, this.length);
                let i = this[e],
                    n = 1,
                    o = 0;
                for (; ++o < t && (n *= 256);) i += this[e + o] * n;
                return i
            }, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || y(e, t, this.length);
                let i = this[e + --t],
                    n = 1;
                for (; t > 0 && (n *= 256);) i += this[e + --t] * n;
                return i
            }, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
                return e >>>= 0, t || y(e, 1, this.length), this[e]
            }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
                return e >>>= 0, t || y(e, 2, this.length), this[e] | this[e + 1] << 8
            }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
                return e >>>= 0, t || y(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
                return e >>>= 0, t || y(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
                return e >>>= 0, t || y(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, s.prototype.readBigUInt64LE = L(function(e) {
                O(e >>>= 0, "offset");
                let t = this[e],
                    r = this[e + 7];
                (void 0 === t || void 0 === r) && I(e, this.length - 8);
                let i = t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e],
                    n = this[++e] + 256 * this[++e] + 65536 * this[++e] + 16777216 * r;
                return BigInt(i) + (BigInt(n) << BigInt(32))
            }), s.prototype.readBigUInt64BE = L(function(e) {
                O(e >>>= 0, "offset");
                let t = this[e],
                    r = this[e + 7];
                (void 0 === t || void 0 === r) && I(e, this.length - 8);
                let i = 16777216 * t + 65536 * this[++e] + 256 * this[++e] + this[++e],
                    n = 16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r;
                return (BigInt(i) << BigInt(32)) + BigInt(n)
            }), s.prototype.readIntLE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || y(e, t, this.length);
                let i = this[e],
                    n = 1,
                    o = 0;
                for (; ++o < t && (n *= 256);) i += this[e + o] * n;
                return i >= (n *= 128) && (i -= Math.pow(2, 8 * t)), i
            }, s.prototype.readIntBE = function(e, t, r) {
                e >>>= 0, t >>>= 0, r || y(e, t, this.length);
                let i = t,
                    n = 1,
                    o = this[e + --i];
                for (; i > 0 && (n *= 256);) o += this[e + --i] * n;
                return o >= (n *= 128) && (o -= Math.pow(2, 8 * t)), o
            }, s.prototype.readInt8 = function(e, t) {
                return (e >>>= 0, t || y(e, 1, this.length), 128 & this[e]) ? -((255 - this[e] + 1) * 1) : this[e]
            }, s.prototype.readInt16LE = function(e, t) {
                e >>>= 0, t || y(e, 2, this.length);
                let r = this[e] | this[e + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, s.prototype.readInt16BE = function(e, t) {
                e >>>= 0, t || y(e, 2, this.length);
                let r = this[e + 1] | this[e] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, s.prototype.readInt32LE = function(e, t) {
                return e >>>= 0, t || y(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, s.prototype.readInt32BE = function(e, t) {
                return e >>>= 0, t || y(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, s.prototype.readBigInt64LE = L(function(e) {
                O(e >>>= 0, "offset");
                let t = this[e],
                    r = this[e + 7];
                return (void 0 === t || void 0 === r) && I(e, this.length - 8), (BigInt(this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24)) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + 16777216 * this[++e])
            }), s.prototype.readBigInt64BE = L(function(e) {
                O(e >>>= 0, "offset");
                let t = this[e],
                    r = this[e + 7];
                return (void 0 === t || void 0 === r) && I(e, this.length - 8), (BigInt((t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e]) << BigInt(32)) + BigInt(16777216 * this[++e] + 65536 * this[++e] + 256 * this[++e] + r)
            }), s.prototype.readFloatLE = function(e, t) {
                return e >>>= 0, t || y(e, 4, this.length), n.read(this, e, !0, 23, 4)
            }, s.prototype.readFloatBE = function(e, t) {
                return e >>>= 0, t || y(e, 4, this.length), n.read(this, e, !1, 23, 4)
            }, s.prototype.readDoubleLE = function(e, t) {
                return e >>>= 0, t || y(e, 8, this.length), n.read(this, e, !0, 52, 8)
            }, s.prototype.readDoubleBE = function(e, t) {
                return e >>>= 0, t || y(e, 8, this.length), n.read(this, e, !1, 52, 8)
            }, s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, r, i) {
                if (e = +e, t >>>= 0, r >>>= 0, !i) {
                    let i = Math.pow(2, 8 * r) - 1;
                    C(this, e, t, r, i, 0)
                }
                let n = 1,
                    o = 0;
                for (this[t] = 255 & e; ++o < r && (n *= 256);) this[t + o] = e / n & 255;
                return t + r
            }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, r, i) {
                if (e = +e, t >>>= 0, r >>>= 0, !i) {
                    let i = Math.pow(2, 8 * r) - 1;
                    C(this, e, t, r, i, 0)
                }
                let n = r - 1,
                    o = 1;
                for (this[t + n] = 255 & e; --n >= 0 && (o *= 256);) this[t + n] = e / o & 255;
                return t + r
            }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, r) {
                return e = +e, t >>>= 0, r || C(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
            }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || C(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || C(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || C(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
            }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || C(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, s.prototype.writeBigUInt64LE = L(function(e, t = 0) {
                return x(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
            }), s.prototype.writeBigUInt64BE = L(function(e, t = 0) {
                return _(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
            }), s.prototype.writeIntLE = function(e, t, r, i) {
                if (e = +e, t >>>= 0, !i) {
                    let i = Math.pow(2, 8 * r - 1);
                    C(this, e, t, r, i - 1, -i)
                }
                let n = 0,
                    o = 1,
                    a = 0;
                for (this[t] = 255 & e; ++n < r && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + n - 1] && (a = 1), this[t + n] = (e / o >> 0) - a & 255;
                return t + r
            }, s.prototype.writeIntBE = function(e, t, r, i) {
                if (e = +e, t >>>= 0, !i) {
                    let i = Math.pow(2, 8 * r - 1);
                    C(this, e, t, r, i - 1, -i)
                }
                let n = r - 1,
                    o = 1,
                    a = 0;
                for (this[t + n] = 255 & e; --n >= 0 && (o *= 256);) e < 0 && 0 === a && 0 !== this[t + n + 1] && (a = 1), this[t + n] = (e / o >> 0) - a & 255;
                return t + r
            }, s.prototype.writeInt8 = function(e, t, r) {
                return e = +e, t >>>= 0, r || C(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, s.prototype.writeInt16LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || C(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
            }, s.prototype.writeInt16BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || C(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
            }, s.prototype.writeInt32LE = function(e, t, r) {
                return e = +e, t >>>= 0, r || C(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
            }, s.prototype.writeInt32BE = function(e, t, r) {
                return e = +e, t >>>= 0, r || C(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
            }, s.prototype.writeBigInt64LE = L(function(e, t = 0) {
                return x(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }), s.prototype.writeBigInt64BE = L(function(e, t = 0) {
                return _(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
            }), s.prototype.writeFloatLE = function(e, t, r) {
                return S(this, e, t, !0, r)
            }, s.prototype.writeFloatBE = function(e, t, r) {
                return S(this, e, t, !1, r)
            }, s.prototype.writeDoubleLE = function(e, t, r) {
                return k(this, e, t, !0, r)
            }, s.prototype.writeDoubleBE = function(e, t, r) {
                return k(this, e, t, !1, r)
            }, s.prototype.copy = function(e, t, r, i) {
                if (!s.isBuffer(e)) throw TypeError("argument should be a Buffer");
                if (r || (r = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < r && (i = r), i === r || 0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw RangeError("Index out of range");
                if (i < 0) throw RangeError("sourceEnd out of bounds");
                i > this.length && (i = this.length), e.length - t < i - r && (i = e.length - t + r);
                let n = i - r;
                return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, r, i) : Uint8Array.prototype.set.call(e, this.subarray(r, i), t), n
            }, s.prototype.fill = function(e, t, r, i) {
                let n;
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (i = t, t = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), void 0 !== i && "string" != typeof i) throw TypeError("encoding must be a string");
                    if ("string" == typeof i && !s.isEncoding(i)) throw TypeError("Unknown encoding: " + i);
                    if (1 === e.length) {
                        let t = e.charCodeAt(0);
                        ("utf8" === i && t < 128 || "latin1" === i) && (e = t)
                    }
                } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                if (t < 0 || this.length < t || this.length < r) throw RangeError("Out of range index");
                if (r <= t) return this;
                if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                    for (n = t; n < r; ++n) this[n] = e;
                else {
                    let o = s.isBuffer(e) ? e : s.from(e, i),
                        a = o.length;
                    if (0 === a) throw TypeError('The value "' + e + '" is invalid for argument "value"');
                    for (n = 0; n < r - t; ++n) this[n + t] = o[n % a]
                }
                return this
            };
            let A = {};

            function D(e, t, r) {
                A[e] = class extends r {
                    constructor() {
                        super(), Object.defineProperty(this, "message", {
                            value: t.apply(this, arguments),
                            writable: !0,
                            configurable: !0
                        }), this.name = `${this.name} [${e}]`, this.stack, delete this.name
                    }
                    get code() {
                        return e
                    }
                    set code(e) {
                        Object.defineProperty(this, "code", {
                            configurable: !0,
                            enumerable: !0,
                            value: e,
                            writable: !0
                        })
                    }
                    toString() {
                        return `${this.name} [${e}]: ${this.message}`
                    }
                }
            }

            function $(e) {
                let t = "",
                    r = e.length,
                    i = "-" === e[0] ? 1 : 0;
                for (; r >= i + 4; r -= 3) t = `_${e.slice(r-3,r)}${t}`;
                return `${e.slice(0,r)}${t}`
            }

            function R(e, t, r, i, n, o) {
                if (e > r || e < t) {
                    let i;
                    let n = "bigint" == typeof t ? "n" : "";
                    throw i = o > 3 ? 0 === t || t === BigInt(0) ? `>= 0${n} and < 2${n} ** ${(o+1)*8}${n}` : `>= -(2${n} ** ${(o+1)*8-1}${n}) and < 2 ** ${(o+1)*8-1}${n}` : `>= ${t}${n} and <= ${r}${n}`, new A.ERR_OUT_OF_RANGE("value", i, e)
                }
                O(n, "offset"), (void 0 === i[n] || void 0 === i[n + o]) && I(n, i.length - (o + 1))
            }

            function O(e, t) {
                if ("number" != typeof e) throw new A.ERR_INVALID_ARG_TYPE(t, "number", e)
            }

            function I(e, t, r) {
                if (Math.floor(e) !== e) throw O(e, r), new A.ERR_OUT_OF_RANGE(r || "offset", "an integer", e);
                if (t < 0) throw new A.ERR_BUFFER_OUT_OF_BOUNDS;
                throw new A.ERR_OUT_OF_RANGE(r || "offset", `>= ${r?1:0} and <= ${t}`, e)
            }
            D("ERR_BUFFER_OUT_OF_BOUNDS", function(e) {
                return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
            }, RangeError), D("ERR_INVALID_ARG_TYPE", function(e, t) {
                return `The "${e}" argument must be of type number. Received type ${typeof t}`
            }, TypeError), D("ERR_OUT_OF_RANGE", function(e, t, r) {
                let i = `The value of "${e}" is out of range.`,
                    n = r;
                return Number.isInteger(r) && Math.abs(r) > 4294967296 ? n = $(String(r)) : "bigint" == typeof r && (n = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (n = $(n)), n += "n"), i += ` It must be ${t}. Received ${n}`
            }, RangeError);
            let T = /[^+/0-9A-Za-z-_]/g;

            function N(e, t) {
                let r;
                t = t || 1 / 0;
                let i = e.length,
                    n = null,
                    o = [];
                for (let a = 0; a < i; ++a) {
                    if ((r = e.charCodeAt(a)) > 55295 && r < 57344) {
                        if (!n) {
                            if (r > 56319 || a + 1 === i) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            n = r;
                            continue
                        }
                        if (r < 56320) {
                            (t -= 3) > -1 && o.push(239, 191, 189), n = r;
                            continue
                        }
                        r = (n - 55296 << 10 | r - 56320) + 65536
                    } else n && (t -= 3) > -1 && o.push(239, 191, 189);
                    if (n = null, r < 128) {
                        if ((t -= 1) < 0) break;
                        o.push(r)
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        o.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else if (r < 1114112) {
                        if ((t -= 4) < 0) break;
                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    } else throw Error("Invalid code point")
                }
                return o
            }

            function P(e) {
                return i.toByteArray(function(e) {
                    if ((e = (e = e.split("=")[0]).trim().replace(T, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function U(e, t, r, i) {
                let n;
                for (n = 0; n < i && !(n + r >= t.length) && !(n >= e.length); ++n) t[n + r] = e[n];
                return n
            }

            function M(e, t) {
                return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
            }
            let j = function() {
                let e = "0123456789abcdef",
                    t = Array(256);
                for (let r = 0; r < 16; ++r) {
                    let i = 16 * r;
                    for (let n = 0; n < 16; ++n) t[i + n] = e[r] + e[n]
                }
                return t
            }();

            function L(e) {
                return "undefined" == typeof BigInt ? B : e
            }

            function B() {
                throw Error("BigInt not supported")
            }
        },
        58005: function(e) {
            "use strict";
            var t = "%[a-f0-9]{2}",
                r = RegExp("(" + t + ")|([^%]+?)", "gi"),
                i = RegExp("(" + t + ")+", "gi");
            e.exports = function(e) {
                if ("string" != typeof e) throw TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`");
                try {
                    return e = e.replace(/\+/g, " "), decodeURIComponent(e)
                } catch (t) {
                    return function(e) {
                        for (var t = {
                                "%FE%FF": "��",
                                "%FF%FE": "��"
                            }, n = i.exec(e); n;) {
                            try {
                                t[n[0]] = decodeURIComponent(n[0])
                            } catch (e) {
                                var o = function(e) {
                                    try {
                                        return decodeURIComponent(e)
                                    } catch (n) {
                                        for (var t = e.match(r) || [], i = 1; i < t.length; i++) t = (e = (function e(t, r) {
                                            try {
                                                return [decodeURIComponent(t.join(""))]
                                            } catch (e) {}
                                            if (1 === t.length) return t;
                                            r = r || 1;
                                            var i = t.slice(0, r),
                                                n = t.slice(r);
                                            return Array.prototype.concat.call([], e(i), e(n))
                                        })(t, i).join("")).match(r) || [];
                                        return e
                                    }
                                }(n[0]);
                                o !== n[0] && (t[n[0]] = o)
                            }
                            n = i.exec(e)
                        }
                        t["%C2"] = "�";
                        for (var a = Object.keys(t), s = 0; s < a.length; s++) {
                            var l = a[s];
                            e = e.replace(RegExp(l, "g"), t[l])
                        }
                        return e
                    }(e)
                }
            }
        },
        78343: function(e) {
            "use strict";
            var t = {
                single_source_shortest_paths: function(e, r, i) {
                    var n, o, a, s, l, c, u, d = {},
                        h = {};
                    h[r] = 0;
                    var p = t.PriorityQueue.make();
                    for (p.push(r, 0); !p.empty();)
                        for (a in o = (n = p.pop()).value, s = n.cost, l = e[o] || {}) l.hasOwnProperty(a) && (c = s + l[a], u = h[a], (void 0 === h[a] || u > c) && (h[a] = c, p.push(a, c), d[a] = o));
                    if (void 0 !== i && void 0 === h[i]) throw Error(["Could not find a path from ", r, " to ", i, "."].join(""));
                    return d
                },
                extract_shortest_path_from_predecessor_list: function(e, t) {
                    for (var r = [], i = t; i;) r.push(i), e[i], i = e[i];
                    return r.reverse(), r
                },
                find_path: function(e, r, i) {
                    var n = t.single_source_shortest_paths(e, r, i);
                    return t.extract_shortest_path_from_predecessor_list(n, i)
                },
                PriorityQueue: {
                    make: function(e) {
                        var r, i = t.PriorityQueue,
                            n = {};
                        for (r in e = e || {}, i) i.hasOwnProperty(r) && (n[r] = i[r]);
                        return n.queue = [], n.sorter = e.sorter || i.default_sorter, n
                    },
                    default_sorter: function(e, t) {
                        return e.cost - t.cost
                    },
                    push: function(e, t) {
                        this.queue.push({
                            value: e,
                            cost: t
                        }), this.queue.sort(this.sorter)
                    },
                    pop: function() {
                        return this.queue.shift()
                    },
                    empty: function() {
                        return 0 === this.queue.length
                    }
                }
            };
            e.exports = t
        },
        53216: function(e) {
            "use strict";
            e.exports = function(e) {
                for (var t = [], r = e.length, i = 0; i < r; i++) {
                    var n = e.charCodeAt(i);
                    if (n >= 55296 && n <= 56319 && r > i + 1) {
                        var o = e.charCodeAt(i + 1);
                        o >= 56320 && o <= 57343 && (n = (n - 55296) * 1024 + o - 56320 + 65536, i += 1)
                    }
                    if (n < 128) {
                        t.push(n);
                        continue
                    }
                    if (n < 2048) {
                        t.push(n >> 6 | 192), t.push(63 & n | 128);
                        continue
                    }
                    if (n < 55296 || n >= 57344 && n < 65536) {
                        t.push(n >> 12 | 224), t.push(n >> 6 & 63 | 128), t.push(63 & n | 128);
                        continue
                    }
                    if (n >= 65536 && n <= 1114111) {
                        t.push(n >> 18 | 240), t.push(n >> 12 & 63 | 128), t.push(n >> 6 & 63 | 128), t.push(63 & n | 128);
                        continue
                    }
                    t.push(239, 191, 189)
                }
                return new Uint8Array(t).buffer
            }
        },
        61820: function(e) {
            "use strict";
            e.exports = function(e, t) {
                for (var r = {}, i = Object.keys(e), n = Array.isArray(t), o = 0; o < i.length; o++) {
                    var a = i[o],
                        s = e[a];
                    (n ? -1 !== t.indexOf(a) : t(a, s, e)) && (r[a] = s)
                }
                return r
            }
        },
        19087: function(e, t) { /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
            t.read = function(e, t, r, i, n) {
                var o, a, s = 8 * n - i - 1,
                    l = (1 << s) - 1,
                    c = l >> 1,
                    u = -7,
                    d = r ? n - 1 : 0,
                    h = r ? -1 : 1,
                    p = e[t + d];
                for (d += h, o = p & (1 << -u) - 1, p >>= -u, u += s; u > 0; o = 256 * o + e[t + d], d += h, u -= 8);
                for (a = o & (1 << -u) - 1, o >>= -u, u += i; u > 0; a = 256 * a + e[t + d], d += h, u -= 8);
                if (0 === o) o = 1 - c;
                else {
                    if (o === l) return a ? NaN : 1 / 0 * (p ? -1 : 1);
                    a += Math.pow(2, i), o -= c
                }
                return (p ? -1 : 1) * a * Math.pow(2, o - i)
            }, t.write = function(e, t, r, i, n, o) {
                var a, s, l, c = 8 * o - n - 1,
                    u = (1 << c) - 1,
                    d = u >> 1,
                    h = 23 === n ? 5960464477539062e-23 : 0,
                    p = i ? 0 : o - 1,
                    f = i ? 1 : -1,
                    g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                for (isNaN(t = Math.abs(t)) || t === 1 / 0 ? (s = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -a)) < 1 && (a--, l *= 2), a + d >= 1 ? t += h / l : t += h * Math.pow(2, 1 - d), t * l >= 2 && (a++, l /= 2), a + d >= u ? (s = 0, a = u) : a + d >= 1 ? (s = (t * l - 1) * Math.pow(2, n), a += d) : (s = t * Math.pow(2, d - 1) * Math.pow(2, n), a = 0)); n >= 8; e[r + p] = 255 & s, p += f, s /= 256, n -= 8);
                for (a = a << n | s, c += n; c > 0; e[r + p] = 255 & a, p += f, a /= 256, c -= 8);
                e[r + p - f] |= 128 * g
            }
        },
        22218: function(e, t, r) {
            "use strict";
            r.d(t, {
                jc: function() {
                    return l
                },
                o5: function() {
                    return s
                }
            }), Symbol();
            let i = Symbol(),
                n = Object.getPrototypeOf,
                o = new WeakMap,
                a = e => e && (o.has(e) ? o.get(e) : n(e) === Object.prototype || n(e) === Array.prototype),
                s = e => a(e) && e[i] || null,
                l = (e, t = !0) => {
                    o.set(e, t)
                }
        },
        75298: function(e, t, r) {
            let i = r(47363),
                n = r(37621),
                o = r(46028),
                a = r(12330);

            function s(e, t, r, o, a) {
                let s = [].slice.call(arguments, 1),
                    l = s.length,
                    c = "function" == typeof s[l - 1];
                if (!c && !i()) throw Error("Callback required as last argument");
                if (c) {
                    if (l < 2) throw Error("Too few arguments provided");
                    2 === l ? (a = r, r = t, t = o = void 0) : 3 === l && (t.getContext && void 0 === a ? (a = o, o = void 0) : (a = o, o = r, r = t, t = void 0))
                } else {
                    if (l < 1) throw Error("Too few arguments provided");
                    return 1 === l ? (r = t, t = o = void 0) : 2 !== l || t.getContext || (o = r, r = t, t = void 0), new Promise(function(i, a) {
                        try {
                            let a = n.create(r, o);
                            i(e(a, t, o))
                        } catch (e) {
                            a(e)
                        }
                    })
                }
                try {
                    let i = n.create(r, o);
                    a(null, e(i, t, o))
                } catch (e) {
                    a(e)
                }
            }
            t.create = n.create, t.toCanvas = s.bind(null, o.render), t.toDataURL = s.bind(null, o.renderToDataURL), t.toString = s.bind(null, function(e, t, r) {
                return a.render(e, r)
            })
        },
        47363: function(e) {
            e.exports = function() {
                return "function" == typeof Promise && Promise.prototype && Promise.prototype.then
            }
        },
        8177: function(e, t, r) {
            let i = r(13400).getSymbolSize;
            t.getRowColCoords = function(e) {
                if (1 === e) return [];
                let t = Math.floor(e / 7) + 2,
                    r = i(e),
                    n = 145 === r ? 26 : 2 * Math.ceil((r - 13) / (2 * t - 2)),
                    o = [r - 7];
                for (let e = 1; e < t - 1; e++) o[e] = o[e - 1] - n;
                return o.push(6), o.reverse()
            }, t.getPositions = function(e) {
                let r = [],
                    i = t.getRowColCoords(e),
                    n = i.length;
                for (let e = 0; e < n; e++)
                    for (let t = 0; t < n; t++)(0 !== e || 0 !== t) && (0 !== e || t !== n - 1) && (e !== n - 1 || 0 !== t) && r.push([i[e], i[t]]);
                return r
            }
        },
        77654: function(e, t, r) {
            let i = r(37662),
                n = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", " ", "$", "%", "*", "+", "-", ".", "/", ":"];

            function o(e) {
                this.mode = i.ALPHANUMERIC, this.data = e
            }
            o.getBitsLength = function(e) {
                return 11 * Math.floor(e / 2) + e % 2 * 6
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(e) {
                let t;
                for (t = 0; t + 2 <= this.data.length; t += 2) {
                    let r = 45 * n.indexOf(this.data[t]);
                    r += n.indexOf(this.data[t + 1]), e.put(r, 11)
                }
                this.data.length % 2 && e.put(n.indexOf(this.data[t]), 6)
            }, e.exports = o
        },
        41904: function(e) {
            function t() {
                this.buffer = [], this.length = 0
            }
            t.prototype = {
                get: function(e) {
                    return (this.buffer[Math.floor(e / 8)] >>> 7 - e % 8 & 1) == 1
                },
                put: function(e, t) {
                    for (let r = 0; r < t; r++) this.putBit((e >>> t - r - 1 & 1) == 1)
                },
                getLengthInBits: function() {
                    return this.length
                },
                putBit: function(e) {
                    let t = Math.floor(this.length / 8);
                    this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++
                }
            }, e.exports = t
        },
        21091: function(e) {
            function t(e) {
                if (!e || e < 1) throw Error("BitMatrix size must be defined and greater than 0");
                this.size = e, this.data = new Uint8Array(e * e), this.reservedBit = new Uint8Array(e * e)
            }
            t.prototype.set = function(e, t, r, i) {
                let n = e * this.size + t;
                this.data[n] = r, i && (this.reservedBit[n] = !0)
            }, t.prototype.get = function(e, t) {
                return this.data[e * this.size + t]
            }, t.prototype.xor = function(e, t, r) {
                this.data[e * this.size + t] ^= r
            }, t.prototype.isReserved = function(e, t) {
                return this.reservedBit[e * this.size + t]
            }, e.exports = t
        },
        90690: function(e, t, r) {
            let i = r(53216),
                n = r(37662);

            function o(e) {
                this.mode = n.BYTE, "string" == typeof e && (e = i(e)), this.data = new Uint8Array(e)
            }
            o.getBitsLength = function(e) {
                return 8 * e
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(e) {
                for (let t = 0, r = this.data.length; t < r; t++) e.put(this.data[t], 8)
            }, e.exports = o
        },
        37039: function(e, t, r) {
            let i = r(9406),
                n = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 2, 2, 4, 1, 2, 4, 4, 2, 4, 4, 4, 2, 4, 6, 5, 2, 4, 6, 6, 2, 5, 8, 8, 4, 5, 8, 8, 4, 5, 8, 11, 4, 8, 10, 11, 4, 9, 12, 16, 4, 9, 16, 16, 6, 10, 12, 18, 6, 10, 17, 16, 6, 11, 16, 19, 6, 13, 18, 21, 7, 14, 21, 25, 8, 16, 20, 25, 8, 17, 23, 25, 9, 17, 23, 34, 9, 18, 25, 30, 10, 20, 27, 32, 12, 21, 29, 35, 12, 23, 34, 37, 12, 25, 34, 40, 13, 26, 35, 42, 14, 28, 38, 45, 15, 29, 40, 48, 16, 31, 43, 51, 17, 33, 45, 54, 18, 35, 48, 57, 19, 37, 51, 60, 19, 38, 53, 63, 20, 40, 56, 66, 21, 43, 59, 70, 22, 45, 62, 74, 24, 47, 65, 77, 25, 49, 68, 81],
                o = [7, 10, 13, 17, 10, 16, 22, 28, 15, 26, 36, 44, 20, 36, 52, 64, 26, 48, 72, 88, 36, 64, 96, 112, 40, 72, 108, 130, 48, 88, 132, 156, 60, 110, 160, 192, 72, 130, 192, 224, 80, 150, 224, 264, 96, 176, 260, 308, 104, 198, 288, 352, 120, 216, 320, 384, 132, 240, 360, 432, 144, 280, 408, 480, 168, 308, 448, 532, 180, 338, 504, 588, 196, 364, 546, 650, 224, 416, 600, 700, 224, 442, 644, 750, 252, 476, 690, 816, 270, 504, 750, 900, 300, 560, 810, 960, 312, 588, 870, 1050, 336, 644, 952, 1110, 360, 700, 1020, 1200, 390, 728, 1050, 1260, 420, 784, 1140, 1350, 450, 812, 1200, 1440, 480, 868, 1290, 1530, 510, 924, 1350, 1620, 540, 980, 1440, 1710, 570, 1036, 1530, 1800, 570, 1064, 1590, 1890, 600, 1120, 1680, 1980, 630, 1204, 1770, 2100, 660, 1260, 1860, 2220, 720, 1316, 1950, 2310, 750, 1372, 2040, 2430];
            t.getBlocksCount = function(e, t) {
                switch (t) {
                    case i.L:
                        return n[(e - 1) * 4 + 0];
                    case i.M:
                        return n[(e - 1) * 4 + 1];
                    case i.Q:
                        return n[(e - 1) * 4 + 2];
                    case i.H:
                        return n[(e - 1) * 4 + 3];
                    default:
                        return
                }
            }, t.getTotalCodewordsCount = function(e, t) {
                switch (t) {
                    case i.L:
                        return o[(e - 1) * 4 + 0];
                    case i.M:
                        return o[(e - 1) * 4 + 1];
                    case i.Q:
                        return o[(e - 1) * 4 + 2];
                    case i.H:
                        return o[(e - 1) * 4 + 3];
                    default:
                        return
                }
            }
        },
        9406: function(e, t) {
            t.L = {
                bit: 1
            }, t.M = {
                bit: 0
            }, t.Q = {
                bit: 3
            }, t.H = {
                bit: 2
            }, t.isValid = function(e) {
                return e && void 0 !== e.bit && e.bit >= 0 && e.bit < 4
            }, t.from = function(e, r) {
                if (t.isValid(e)) return e;
                try {
                    return function(e) {
                        if ("string" != typeof e) throw Error("Param is not a string");
                        switch (e.toLowerCase()) {
                            case "l":
                            case "low":
                                return t.L;
                            case "m":
                            case "medium":
                                return t.M;
                            case "q":
                            case "quartile":
                                return t.Q;
                            case "h":
                            case "high":
                                return t.H;
                            default:
                                throw Error("Unknown EC Level: " + e)
                        }
                    }(e)
                } catch (e) {
                    return r
                }
            }
        },
        78241: function(e, t, r) {
            let i = r(13400).getSymbolSize;
            t.getPositions = function(e) {
                let t = i(e);
                return [
                    [0, 0],
                    [t - 7, 0],
                    [0, t - 7]
                ]
            }
        },
        50237: function(e, t, r) {
            let i = r(13400),
                n = i.getBCHDigit(1335);
            t.getEncodedBits = function(e, t) {
                let r = e.bit << 3 | t,
                    o = r << 10;
                for (; i.getBCHDigit(o) - n >= 0;) o ^= 1335 << i.getBCHDigit(o) - n;
                return (r << 10 | o) ^ 21522
            }
        },
        51309: function(e, t) {
            let r = new Uint8Array(512),
                i = new Uint8Array(256);
            ! function() {
                let e = 1;
                for (let t = 0; t < 255; t++) r[t] = e, i[e] = t, 256 & (e <<= 1) && (e ^= 285);
                for (let e = 255; e < 512; e++) r[e] = r[e - 255]
            }(), t.log = function(e) {
                if (e < 1) throw Error("log(" + e + ")");
                return i[e]
            }, t.exp = function(e) {
                return r[e]
            }, t.mul = function(e, t) {
                return 0 === e || 0 === t ? 0 : r[i[e] + i[t]]
            }
        },
        69592: function(e, t, r) {
            let i = r(37662),
                n = r(13400);

            function o(e) {
                this.mode = i.KANJI, this.data = e
            }
            o.getBitsLength = function(e) {
                return 13 * e
            }, o.prototype.getLength = function() {
                return this.data.length
            }, o.prototype.getBitsLength = function() {
                return o.getBitsLength(this.data.length)
            }, o.prototype.write = function(e) {
                let t;
                for (t = 0; t < this.data.length; t++) {
                    let r = n.toSJIS(this.data[t]);
                    if (r >= 33088 && r <= 40956) r -= 33088;
                    else if (r >= 57408 && r <= 60351) r -= 49472;
                    else throw Error("Invalid SJIS character: " + this.data[t] + "\nMake sure your charset is UTF-8");
                    r = (r >>> 8 & 255) * 192 + (255 & r), e.put(r, 13)
                }
            }, e.exports = o
        },
        68334: function(e, t) {
            t.Patterns = {
                PATTERN000: 0,
                PATTERN001: 1,
                PATTERN010: 2,
                PATTERN011: 3,
                PATTERN100: 4,
                PATTERN101: 5,
                PATTERN110: 6,
                PATTERN111: 7
            };
            let r = {
                N1: 3,
                N2: 3,
                N3: 40,
                N4: 10
            };
            t.isValid = function(e) {
                return null != e && "" !== e && !isNaN(e) && e >= 0 && e <= 7
            }, t.from = function(e) {
                return t.isValid(e) ? parseInt(e, 10) : void 0
            }, t.getPenaltyN1 = function(e) {
                let t = e.size,
                    i = 0,
                    n = 0,
                    o = 0,
                    a = null,
                    s = null;
                for (let l = 0; l < t; l++) {
                    n = o = 0, a = s = null;
                    for (let c = 0; c < t; c++) {
                        let t = e.get(l, c);
                        t === a ? n++ : (n >= 5 && (i += r.N1 + (n - 5)), a = t, n = 1), (t = e.get(c, l)) === s ? o++ : (o >= 5 && (i += r.N1 + (o - 5)), s = t, o = 1)
                    }
                    n >= 5 && (i += r.N1 + (n - 5)), o >= 5 && (i += r.N1 + (o - 5))
                }
                return i
            }, t.getPenaltyN2 = function(e) {
                let t = e.size,
                    i = 0;
                for (let r = 0; r < t - 1; r++)
                    for (let n = 0; n < t - 1; n++) {
                        let t = e.get(r, n) + e.get(r, n + 1) + e.get(r + 1, n) + e.get(r + 1, n + 1);
                        (4 === t || 0 === t) && i++
                    }
                return i * r.N2
            }, t.getPenaltyN3 = function(e) {
                let t = e.size,
                    i = 0,
                    n = 0,
                    o = 0;
                for (let r = 0; r < t; r++) {
                    n = o = 0;
                    for (let a = 0; a < t; a++) n = n << 1 & 2047 | e.get(r, a), a >= 10 && (1488 === n || 93 === n) && i++, o = o << 1 & 2047 | e.get(a, r), a >= 10 && (1488 === o || 93 === o) && i++
                }
                return i * r.N3
            }, t.getPenaltyN4 = function(e) {
                let t = 0,
                    i = e.data.length;
                for (let r = 0; r < i; r++) t += e.data[r];
                return Math.abs(Math.ceil(100 * t / i / 5) - 10) * r.N4
            }, t.applyMask = function(e, r) {
                let i = r.size;
                for (let n = 0; n < i; n++)
                    for (let o = 0; o < i; o++) r.isReserved(o, n) || r.xor(o, n, function(e, r, i) {
                        switch (e) {
                            case t.Patterns.PATTERN000:
                                return (r + i) % 2 == 0;
                            case t.Patterns.PATTERN001:
                                return r % 2 == 0;
                            case t.Patterns.PATTERN010:
                                return i % 3 == 0;
                            case t.Patterns.PATTERN011:
                                return (r + i) % 3 == 0;
                            case t.Patterns.PATTERN100:
                                return (Math.floor(r / 2) + Math.floor(i / 3)) % 2 == 0;
                            case t.Patterns.PATTERN101:
                                return r * i % 2 + r * i % 3 == 0;
                            case t.Patterns.PATTERN110:
                                return (r * i % 2 + r * i % 3) % 2 == 0;
                            case t.Patterns.PATTERN111:
                                return (r * i % 3 + (r + i) % 2) % 2 == 0;
                            default:
                                throw Error("bad maskPattern:" + e)
                        }
                    }(e, o, n))
            }, t.getBestMask = function(e, r) {
                let i = Object.keys(t.Patterns).length,
                    n = 0,
                    o = 1 / 0;
                for (let a = 0; a < i; a++) {
                    r(a), t.applyMask(a, e);
                    let i = t.getPenaltyN1(e) + t.getPenaltyN2(e) + t.getPenaltyN3(e) + t.getPenaltyN4(e);
                    t.applyMask(a, e), i < o && (o = i, n = a)
                }
                return n
            }
        },
        37662: function(e, t, r) {
            let i = r(64956),
                n = r(66579);
            t.NUMERIC = {
                id: "Numeric",
                bit: 1,
                ccBits: [10, 12, 14]
            }, t.ALPHANUMERIC = {
                id: "Alphanumeric",
                bit: 2,
                ccBits: [9, 11, 13]
            }, t.BYTE = {
                id: "Byte",
                bit: 4,
                ccBits: [8, 16, 16]
            }, t.KANJI = {
                id: "Kanji",
                bit: 8,
                ccBits: [8, 10, 12]
            }, t.MIXED = {
                bit: -1
            }, t.getCharCountIndicator = function(e, t) {
                if (!e.ccBits) throw Error("Invalid mode: " + e);
                if (!i.isValid(t)) throw Error("Invalid version: " + t);
                return t >= 1 && t < 10 ? e.ccBits[0] : t < 27 ? e.ccBits[1] : e.ccBits[2]
            }, t.getBestModeForData = function(e) {
                return n.testNumeric(e) ? t.NUMERIC : n.testAlphanumeric(e) ? t.ALPHANUMERIC : n.testKanji(e) ? t.KANJI : t.BYTE
            }, t.toString = function(e) {
                if (e && e.id) return e.id;
                throw Error("Invalid mode")
            }, t.isValid = function(e) {
                return e && e.bit && e.ccBits
            }, t.from = function(e, r) {
                if (t.isValid(e)) return e;
                try {
                    return function(e) {
                        if ("string" != typeof e) throw Error("Param is not a string");
                        switch (e.toLowerCase()) {
                            case "numeric":
                                return t.NUMERIC;
                            case "alphanumeric":
                                return t.ALPHANUMERIC;
                            case "kanji":
                                return t.KANJI;
                            case "byte":
                                return t.BYTE;
                            default:
                                throw Error("Unknown mode: " + e)
                        }
                    }(e)
                } catch (e) {
                    return r
                }
            }
        },
        10894: function(e, t, r) {
            let i = r(37662);

            function n(e) {
                this.mode = i.NUMERIC, this.data = e.toString()
            }
            n.getBitsLength = function(e) {
                return 10 * Math.floor(e / 3) + (e % 3 ? e % 3 * 3 + 1 : 0)
            }, n.prototype.getLength = function() {
                return this.data.length
            }, n.prototype.getBitsLength = function() {
                return n.getBitsLength(this.data.length)
            }, n.prototype.write = function(e) {
                let t, r;
                for (t = 0; t + 3 <= this.data.length; t += 3) r = parseInt(this.data.substr(t, 3), 10), e.put(r, 10);
                let i = this.data.length - t;
                i > 0 && (r = parseInt(this.data.substr(t), 10), e.put(r, 3 * i + 1))
            }, e.exports = n
        },
        25153: function(e, t, r) {
            let i = r(51309);
            t.mul = function(e, t) {
                let r = new Uint8Array(e.length + t.length - 1);
                for (let n = 0; n < e.length; n++)
                    for (let o = 0; o < t.length; o++) r[n + o] ^= i.mul(e[n], t[o]);
                return r
            }, t.mod = function(e, t) {
                let r = new Uint8Array(e);
                for (; r.length - t.length >= 0;) {
                    let e = r[0];
                    for (let n = 0; n < t.length; n++) r[n] ^= i.mul(t[n], e);
                    let n = 0;
                    for (; n < r.length && 0 === r[n];) n++;
                    r = r.slice(n)
                }
                return r
            }, t.generateECPolynomial = function(e) {
                let r = new Uint8Array([1]);
                for (let n = 0; n < e; n++) r = t.mul(r, new Uint8Array([1, i.exp(n)]));
                return r
            }
        },
        37621: function(e, t, r) {
            let i = r(13400),
                n = r(9406),
                o = r(41904),
                a = r(21091),
                s = r(8177),
                l = r(78241),
                c = r(68334),
                u = r(37039),
                d = r(9936),
                h = r(48670),
                p = r(50237),
                f = r(37662),
                g = r(25082);

            function w(e, t, r) {
                let i, n;
                let o = e.size,
                    a = p.getEncodedBits(t, r);
                for (i = 0; i < 15; i++) n = (a >> i & 1) == 1, i < 6 ? e.set(i, 8, n, !0) : i < 8 ? e.set(i + 1, 8, n, !0) : e.set(o - 15 + i, 8, n, !0), i < 8 ? e.set(8, o - i - 1, n, !0) : i < 9 ? e.set(8, 15 - i - 1 + 1, n, !0) : e.set(8, 15 - i - 1, n, !0);
                e.set(o - 8, 8, 1, !0)
            }
            t.create = function(e, t) {
                let r, p;
                if (void 0 === e || "" === e) throw Error("No input text");
                let m = n.M;
                return void 0 !== t && (m = n.from(t.errorCorrectionLevel, n.M), r = h.from(t.version), p = c.from(t.maskPattern), t.toSJISFunc && i.setToSJISFunction(t.toSJISFunc)),
                    function(e, t, r, n) {
                        let p;
                        if (Array.isArray(e)) p = g.fromArray(e);
                        else if ("string" == typeof e) {
                            let i = t;
                            if (!i) {
                                let t = g.rawSplit(e);
                                i = h.getBestVersionForData(t, r)
                            }
                            p = g.fromString(e, i || 40)
                        } else throw Error("Invalid data");
                        let m = h.getBestVersionForData(p, r);
                        if (!m) throw Error("The amount of data is too big to be stored in a QR Code");
                        if (t) {
                            if (t < m) throw Error("\nThe chosen QR Code version cannot contain this amount of data.\nMinimum version required to store current data is: " + m + ".\n")
                        } else t = m;
                        let v = function(e, t, r) {
                                let n = new o;
                                r.forEach(function(t) {
                                    n.put(t.mode.bit, 4), n.put(t.getLength(), f.getCharCountIndicator(t.mode, e)), t.write(n)
                                });
                                let a = (i.getSymbolTotalCodewords(e) - u.getTotalCodewordsCount(e, t)) * 8;
                                for (n.getLengthInBits() + 4 <= a && n.put(0, 4); n.getLengthInBits() % 8 != 0;) n.putBit(0);
                                let s = (a - n.getLengthInBits()) / 8;
                                for (let e = 0; e < s; e++) n.put(e % 2 ? 17 : 236, 8);
                                return function(e, t, r) {
                                    let n, o;
                                    let a = i.getSymbolTotalCodewords(t),
                                        s = a - u.getTotalCodewordsCount(t, r),
                                        l = u.getBlocksCount(t, r),
                                        c = a % l,
                                        h = l - c,
                                        p = Math.floor(a / l),
                                        f = Math.floor(s / l),
                                        g = f + 1,
                                        w = p - f,
                                        m = new d(w),
                                        v = 0,
                                        b = Array(l),
                                        y = Array(l),
                                        C = 0,
                                        x = new Uint8Array(e.buffer);
                                    for (let e = 0; e < l; e++) {
                                        let t = e < h ? f : g;
                                        b[e] = x.slice(v, v + t), y[e] = m.encode(b[e]), v += t, C = Math.max(C, t)
                                    }
                                    let _ = new Uint8Array(a),
                                        E = 0;
                                    for (n = 0; n < C; n++)
                                        for (o = 0; o < l; o++) n < b[o].length && (_[E++] = b[o][n]);
                                    for (n = 0; n < w; n++)
                                        for (o = 0; o < l; o++) _[E++] = y[o][n];
                                    return _
                                }(n, e, t)
                            }(t, r, p),
                            b = new a(i.getSymbolSize(t));
                        return function(e, t) {
                                let r = e.size,
                                    i = l.getPositions(t);
                                for (let t = 0; t < i.length; t++) {
                                    let n = i[t][0],
                                        o = i[t][1];
                                    for (let t = -1; t <= 7; t++)
                                        if (!(n + t <= -1) && !(r <= n + t))
                                            for (let i = -1; i <= 7; i++) o + i <= -1 || r <= o + i || (t >= 0 && t <= 6 && (0 === i || 6 === i) || i >= 0 && i <= 6 && (0 === t || 6 === t) || t >= 2 && t <= 4 && i >= 2 && i <= 4 ? e.set(n + t, o + i, !0, !0) : e.set(n + t, o + i, !1, !0))
                                }
                            }(b, t),
                            function(e) {
                                let t = e.size;
                                for (let r = 8; r < t - 8; r++) {
                                    let t = r % 2 == 0;
                                    e.set(r, 6, t, !0), e.set(6, r, t, !0)
                                }
                            }(b),
                            function(e, t) {
                                let r = s.getPositions(t);
                                for (let t = 0; t < r.length; t++) {
                                    let i = r[t][0],
                                        n = r[t][1];
                                    for (let t = -2; t <= 2; t++)
                                        for (let r = -2; r <= 2; r++) - 2 === t || 2 === t || -2 === r || 2 === r || 0 === t && 0 === r ? e.set(i + t, n + r, !0, !0) : e.set(i + t, n + r, !1, !0)
                                }
                            }(b, t), w(b, r, 0), t >= 7 && function(e, t) {
                                let r, i, n;
                                let o = e.size,
                                    a = h.getEncodedBits(t);
                                for (let t = 0; t < 18; t++) r = Math.floor(t / 3), i = t % 3 + o - 8 - 3, n = (a >> t & 1) == 1, e.set(r, i, n, !0), e.set(i, r, n, !0)
                            }(b, t),
                            function(e, t) {
                                let r = e.size,
                                    i = -1,
                                    n = r - 1,
                                    o = 7,
                                    a = 0;
                                for (let s = r - 1; s > 0; s -= 2)
                                    for (6 === s && s--;;) {
                                        for (let r = 0; r < 2; r++)
                                            if (!e.isReserved(n, s - r)) {
                                                let i = !1;
                                                a < t.length && (i = (t[a] >>> o & 1) == 1), e.set(n, s - r, i), -1 == --o && (a++, o = 7)
                                            }
                                        if ((n += i) < 0 || r <= n) {
                                            n -= i, i = -i;
                                            break
                                        }
                                    }
                            }(b, v), isNaN(n) && (n = c.getBestMask(b, w.bind(null, b, r))), c.applyMask(n, b), w(b, r, n), {
                                modules: b,
                                version: t,
                                errorCorrectionLevel: r,
                                maskPattern: n,
                                segments: p
                            }
                    }(e, r, m, p)
            }
        },
        9936: function(e, t, r) {
            let i = r(25153);

            function n(e) {
                this.genPoly = void 0, this.degree = e, this.degree && this.initialize(this.degree)
            }
            n.prototype.initialize = function(e) {
                this.degree = e, this.genPoly = i.generateECPolynomial(this.degree)
            }, n.prototype.encode = function(e) {
                if (!this.genPoly) throw Error("Encoder not initialized");
                let t = new Uint8Array(e.length + this.degree);
                t.set(e);
                let r = i.mod(t, this.genPoly),
                    n = this.degree - r.length;
                if (n > 0) {
                    let e = new Uint8Array(this.degree);
                    return e.set(r, n), e
                }
                return r
            }, e.exports = n
        },
        66579: function(e, t) {
            let r = "[0-9]+",
                i = "(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+",
                n = "(?:(?![A-Z0-9 $%*+\\-./:]|" + (i = i.replace(/u/g, "\\u")) + ")(?:.|[\r\n]))+";
            t.KANJI = RegExp(i, "g"), t.BYTE_KANJI = RegExp("[^A-Z0-9 $%*+\\-./:]+", "g"), t.BYTE = RegExp(n, "g"), t.NUMERIC = RegExp(r, "g"), t.ALPHANUMERIC = RegExp("[A-Z $%*+\\-./:]+", "g");
            let o = RegExp("^" + i + "$"),
                a = RegExp("^" + r + "$"),
                s = RegExp("^[A-Z0-9 $%*+\\-./:]+$");
            t.testKanji = function(e) {
                return o.test(e)
            }, t.testNumeric = function(e) {
                return a.test(e)
            }, t.testAlphanumeric = function(e) {
                return s.test(e)
            }
        },
        25082: function(e, t, r) {
            let i = r(37662),
                n = r(10894),
                o = r(77654),
                a = r(90690),
                s = r(69592),
                l = r(66579),
                c = r(13400),
                u = r(78343);

            function d(e) {
                return unescape(encodeURIComponent(e)).length
            }

            function h(e, t, r) {
                let i;
                let n = [];
                for (; null !== (i = e.exec(r));) n.push({
                    data: i[0],
                    index: i.index,
                    mode: t,
                    length: i[0].length
                });
                return n
            }

            function p(e) {
                let t, r;
                let n = h(l.NUMERIC, i.NUMERIC, e),
                    o = h(l.ALPHANUMERIC, i.ALPHANUMERIC, e);
                return c.isKanjiModeEnabled() ? (t = h(l.BYTE, i.BYTE, e), r = h(l.KANJI, i.KANJI, e)) : (t = h(l.BYTE_KANJI, i.BYTE, e), r = []), n.concat(o, t, r).sort(function(e, t) {
                    return e.index - t.index
                }).map(function(e) {
                    return {
                        data: e.data,
                        mode: e.mode,
                        length: e.length
                    }
                })
            }

            function f(e, t) {
                switch (t) {
                    case i.NUMERIC:
                        return n.getBitsLength(e);
                    case i.ALPHANUMERIC:
                        return o.getBitsLength(e);
                    case i.KANJI:
                        return s.getBitsLength(e);
                    case i.BYTE:
                        return a.getBitsLength(e)
                }
            }

            function g(e, t) {
                let r;
                let l = i.getBestModeForData(e);
                if ((r = i.from(t, l)) !== i.BYTE && r.bit < l.bit) throw Error('"' + e + '" cannot be encoded with mode ' + i.toString(r) + ".\n Suggested mode is: " + i.toString(l));
                switch (r !== i.KANJI || c.isKanjiModeEnabled() || (r = i.BYTE), r) {
                    case i.NUMERIC:
                        return new n(e);
                    case i.ALPHANUMERIC:
                        return new o(e);
                    case i.KANJI:
                        return new s(e);
                    case i.BYTE:
                        return new a(e)
                }
            }
            t.fromArray = function(e) {
                return e.reduce(function(e, t) {
                    return "string" == typeof t ? e.push(g(t, null)) : t.data && e.push(g(t.data, t.mode)), e
                }, [])
            }, t.fromString = function(e, r) {
                let n = function(e, t) {
                        let r = {},
                            n = {
                                start: {}
                            },
                            o = ["start"];
                        for (let a = 0; a < e.length; a++) {
                            let s = e[a],
                                l = [];
                            for (let e = 0; e < s.length; e++) {
                                let c = s[e],
                                    u = "" + a + e;
                                l.push(u), r[u] = {
                                    node: c,
                                    lastCount: 0
                                }, n[u] = {};
                                for (let e = 0; e < o.length; e++) {
                                    let a = o[e];
                                    r[a] && r[a].node.mode === c.mode ? (n[a][u] = f(r[a].lastCount + c.length, c.mode) - f(r[a].lastCount, c.mode), r[a].lastCount += c.length) : (r[a] && (r[a].lastCount = c.length), n[a][u] = f(c.length, c.mode) + 4 + i.getCharCountIndicator(c.mode, t))
                                }
                            }
                            o = l
                        }
                        for (let e = 0; e < o.length; e++) n[o[e]].end = 0;
                        return {
                            map: n,
                            table: r
                        }
                    }(function(e) {
                        let t = [];
                        for (let r = 0; r < e.length; r++) {
                            let n = e[r];
                            switch (n.mode) {
                                case i.NUMERIC:
                                    t.push([n, {
                                        data: n.data,
                                        mode: i.ALPHANUMERIC,
                                        length: n.length
                                    }, {
                                        data: n.data,
                                        mode: i.BYTE,
                                        length: n.length
                                    }]);
                                    break;
                                case i.ALPHANUMERIC:
                                    t.push([n, {
                                        data: n.data,
                                        mode: i.BYTE,
                                        length: n.length
                                    }]);
                                    break;
                                case i.KANJI:
                                    t.push([n, {
                                        data: n.data,
                                        mode: i.BYTE,
                                        length: d(n.data)
                                    }]);
                                    break;
                                case i.BYTE:
                                    t.push([{
                                        data: n.data,
                                        mode: i.BYTE,
                                        length: d(n.data)
                                    }])
                            }
                        }
                        return t
                    }(p(e, c.isKanjiModeEnabled())), r),
                    o = u.find_path(n.map, "start", "end"),
                    a = [];
                for (let e = 1; e < o.length - 1; e++) a.push(n.table[o[e]].node);
                return t.fromArray(a.reduce(function(e, t) {
                    let r = e.length - 1 >= 0 ? e[e.length - 1] : null;
                    return r && r.mode === t.mode ? e[e.length - 1].data += t.data : e.push(t), e
                }, []))
            }, t.rawSplit = function(e) {
                return t.fromArray(p(e, c.isKanjiModeEnabled()))
            }
        },
        13400: function(e, t) {
            let r;
            let i = [0, 26, 44, 70, 100, 134, 172, 196, 242, 292, 346, 404, 466, 532, 581, 655, 733, 815, 901, 991, 1085, 1156, 1258, 1364, 1474, 1588, 1706, 1828, 1921, 2051, 2185, 2323, 2465, 2611, 2761, 2876, 3034, 3196, 3362, 3532, 3706];
            t.getSymbolSize = function(e) {
                if (!e) throw Error('"version" cannot be null or undefined');
                if (e < 1 || e > 40) throw Error('"version" should be in range from 1 to 40');
                return 4 * e + 17
            }, t.getSymbolTotalCodewords = function(e) {
                return i[e]
            }, t.getBCHDigit = function(e) {
                let t = 0;
                for (; 0 !== e;) t++, e >>>= 1;
                return t
            }, t.setToSJISFunction = function(e) {
                if ("function" != typeof e) throw Error('"toSJISFunc" is not a valid function.');
                r = e
            }, t.isKanjiModeEnabled = function() {
                return void 0 !== r
            }, t.toSJIS = function(e) {
                return r(e)
            }
        },
        64956: function(e, t) {
            t.isValid = function(e) {
                return !isNaN(e) && e >= 1 && e <= 40
            }
        },
        48670: function(e, t, r) {
            let i = r(13400),
                n = r(37039),
                o = r(9406),
                a = r(37662),
                s = r(64956),
                l = i.getBCHDigit(7973);

            function c(e, t) {
                return a.getCharCountIndicator(e, t) + 4
            }
            t.from = function(e, t) {
                return s.isValid(e) ? parseInt(e, 10) : t
            }, t.getCapacity = function(e, t, r) {
                if (!s.isValid(e)) throw Error("Invalid QR Code version");
                void 0 === r && (r = a.BYTE);
                let o = (i.getSymbolTotalCodewords(e) - n.getTotalCodewordsCount(e, t)) * 8;
                if (r === a.MIXED) return o;
                let l = o - c(r, e);
                switch (r) {
                    case a.NUMERIC:
                        return Math.floor(l / 10 * 3);
                    case a.ALPHANUMERIC:
                        return Math.floor(l / 11 * 2);
                    case a.KANJI:
                        return Math.floor(l / 13);
                    case a.BYTE:
                    default:
                        return Math.floor(l / 8)
                }
            }, t.getBestVersionForData = function(e, r) {
                let i;
                let n = o.from(r, o.M);
                if (Array.isArray(e)) {
                    if (e.length > 1) return function(e, r) {
                        for (let i = 1; i <= 40; i++)
                            if (function(e, t) {
                                    let r = 0;
                                    return e.forEach(function(e) {
                                        let i = c(e.mode, t);
                                        r += i + e.getBitsLength()
                                    }), r
                                }(e, i) <= t.getCapacity(i, r, a.MIXED)) return i
                    }(e, n);
                    if (0 === e.length) return 1;
                    i = e[0]
                } else i = e;
                return function(e, r, i) {
                    for (let n = 1; n <= 40; n++)
                        if (r <= t.getCapacity(n, i, e)) return n
                }(i.mode, i.getLength(), n)
            }, t.getEncodedBits = function(e) {
                if (!s.isValid(e) || e < 7) throw Error("Invalid QR Code version");
                let t = e << 12;
                for (; i.getBCHDigit(t) - l >= 0;) t ^= 7973 << i.getBCHDigit(t) - l;
                return e << 12 | t
            }
        },
        46028: function(e, t, r) {
            let i = r(10544);
            t.render = function(e, t, r) {
                var n;
                let o = r,
                    a = t;
                void 0 !== o || t && t.getContext || (o = t, t = void 0), t || (a = function() {
                    try {
                        return document.createElement("canvas")
                    } catch (e) {
                        throw Error("You need to specify a canvas element")
                    }
                }()), o = i.getOptions(o);
                let s = i.getImageWidth(e.modules.size, o),
                    l = a.getContext("2d"),
                    c = l.createImageData(s, s);
                return i.qrToImageData(c.data, e, o), n = a, l.clearRect(0, 0, n.width, n.height), n.style || (n.style = {}), n.height = s, n.width = s, n.style.height = s + "px", n.style.width = s + "px", l.putImageData(c, 0, 0), a
            }, t.renderToDataURL = function(e, r, i) {
                let n = i;
                void 0 !== n || r && r.getContext || (n = r, r = void 0), n || (n = {});
                let o = t.render(e, r, n),
                    a = n.type || "image/png",
                    s = n.rendererOpts || {};
                return o.toDataURL(a, s.quality)
            }
        },
        12330: function(e, t, r) {
            let i = r(10544);

            function n(e, t) {
                let r = e.a / 255,
                    i = t + '="' + e.hex + '"';
                return r < 1 ? i + " " + t + '-opacity="' + r.toFixed(2).slice(1) + '"' : i
            }

            function o(e, t, r) {
                let i = e + t;
                return void 0 !== r && (i += " " + r), i
            }
            t.render = function(e, t, r) {
                let a = i.getOptions(t),
                    s = e.modules.size,
                    l = e.modules.data,
                    c = s + 2 * a.margin,
                    u = a.color.light.a ? "<path " + n(a.color.light, "fill") + ' d="M0 0h' + c + "v" + c + 'H0z"/>' : "",
                    d = "<path " + n(a.color.dark, "stroke") + ' d="' + function(e, t, r) {
                        let i = "",
                            n = 0,
                            a = !1,
                            s = 0;
                        for (let l = 0; l < e.length; l++) {
                            let c = Math.floor(l % t),
                                u = Math.floor(l / t);
                            c || a || (a = !0), e[l] ? (s++, l > 0 && c > 0 && e[l - 1] || (i += a ? o("M", c + r, .5 + u + r) : o("m", n, 0), n = 0, a = !1), c + 1 < t && e[l + 1] || (i += o("h", s), s = 0)) : n++
                        }
                        return i
                    }(l, s, a.margin) + '"/>',
                    h = '<svg xmlns="http://www.w3.org/2000/svg" ' + (a.width ? 'width="' + a.width + '" height="' + a.width + '" ' : "") + ('viewBox="0 0 ' + c) + " " + c + '" shape-rendering="crispEdges">' + u + d + "</svg>\n";
                return "function" == typeof r && r(null, h), h
            }
        },
        10544: function(e, t) {
            function r(e) {
                if ("number" == typeof e && (e = e.toString()), "string" != typeof e) throw Error("Color should be defined as hex string");
                let t = e.slice().replace("#", "").split("");
                if (t.length < 3 || 5 === t.length || t.length > 8) throw Error("Invalid hex color: " + e);
                (3 === t.length || 4 === t.length) && (t = Array.prototype.concat.apply([], t.map(function(e) {
                    return [e, e]
                }))), 6 === t.length && t.push("F", "F");
                let r = parseInt(t.join(""), 16);
                return {
                    r: r >> 24 & 255,
                    g: r >> 16 & 255,
                    b: r >> 8 & 255,
                    a: 255 & r,
                    hex: "#" + t.slice(0, 6).join("")
                }
            }
            t.getOptions = function(e) {
                e || (e = {}), e.color || (e.color = {});
                let t = void 0 === e.margin || null === e.margin || e.margin < 0 ? 4 : e.margin,
                    i = e.width && e.width >= 21 ? e.width : void 0,
                    n = e.scale || 4;
                return {
                    width: i,
                    scale: i ? 4 : n,
                    margin: t,
                    color: {
                        dark: r(e.color.dark || "#000000ff"),
                        light: r(e.color.light || "#ffffffff")
                    },
                    type: e.type,
                    rendererOpts: e.rendererOpts || {}
                }
            }, t.getScale = function(e, t) {
                return t.width && t.width >= e + 2 * t.margin ? t.width / (e + 2 * t.margin) : t.scale
            }, t.getImageWidth = function(e, r) {
                let i = t.getScale(e, r);
                return Math.floor((e + 2 * r.margin) * i)
            }, t.qrToImageData = function(e, r, i) {
                let n = r.modules.size,
                    o = r.modules.data,
                    a = t.getScale(n, i),
                    s = Math.floor((n + 2 * i.margin) * a),
                    l = i.margin * a,
                    c = [i.color.light, i.color.dark];
                for (let t = 0; t < s; t++)
                    for (let r = 0; r < s; r++) {
                        let u = (t * s + r) * 4,
                            d = i.color.light;
                        t >= l && r >= l && t < s - l && r < s - l && (d = c[o[Math.floor((t - l) / a) * n + Math.floor((r - l) / a)] ? 1 : 0]), e[u++] = d.r, e[u++] = d.g, e[u++] = d.b, e[u] = d.a
                    }
            }
        },
        34470: function(e) {
            "use strict";
            e.exports = (e, t) => {
                if (!("string" == typeof e && "string" == typeof t)) throw TypeError("Expected the arguments to be of type `string`");
                if ("" === t) return [e];
                let r = e.indexOf(t);
                return -1 === r ? [e] : [e.slice(0, r), e.slice(r + t.length)]
            }
        },
        67116: function(e) {
            "use strict";
            e.exports = e => encodeURIComponent(e).replace(/[!'()*]/g, e => `%${e.charCodeAt(0).toString(16).toUpperCase()}`)
        },
        44519: function(e, t, r) {
            "use strict";
            r.d(t, {
                E: function() {
                    return a
                }
            });
            var i = r(134),
                n = r(77554),
                o = r(63037);
            i.extend(o), i.extend(n), i.updateLocale("en", {
                relativeTime: {
                    future: "in %s",
                    past: "%s ago",
                    s: "%s sec",
                    m: "1 min",
                    mm: "%d min",
                    h: "1 hr",
                    hh: "%d hrs",
                    d: "1 d",
                    dd: "%d d",
                    M: "1 mo",
                    MM: "%d mo",
                    y: "1 yr",
                    yy: "%d yr"
                }
            });
            let a = {
                getYear: (e = new Date().toISOString()) => i(e).year(),
                getRelativeDateFromNow: e => i(e).fromNow(!0)
            }
        },
        3151: function(e, t, r) {
            "use strict";
            r.d(t, {
                AccountController: function() {
                    return g
                },
                ApiController: function() {
                    return N
                },
                WM: function() {
                    return _
                },
                fz: function() {
                    return et
                },
                Lr: function() {
                    return F
                },
                ConnectionController: function() {
                    return G
                },
                ConnectorController: function() {
                    return S
                },
                bq: function() {
                    return h
                },
                j1: function() {
                    return p
                },
                Xs: function() {
                    return j
                },
                IN: function() {
                    return W
                },
                NetworkController: function() {
                    return $
                },
                OptionsController: function() {
                    return O
                },
                Ie: function() {
                    return A
                },
                RouterController: function() {
                    return B
                },
                yD: function() {
                    return J
                },
                SnackController: function() {
                    return V
                },
                MO: function() {
                    return C
                },
                ThemeController: function() {
                    return ee
                },
                sl: function() {
                    return K
                }
            });
            var i = r(22218);
            let n = e => "object" == typeof e && null !== e,
                o = new WeakMap,
                a = new WeakSet,
                [s] = ((e = Object.is, t = (e, t) => new Proxy(e, t), r = e => n(e) && !a.has(e) && (Array.isArray(e) || !(Symbol.iterator in e)) && !(e instanceof WeakMap) && !(e instanceof WeakSet) && !(e instanceof Error) && !(e instanceof Number) && !(e instanceof Date) && !(e instanceof String) && !(e instanceof RegExp) && !(e instanceof ArrayBuffer), s = e => {
                    switch (e.status) {
                        case "fulfilled":
                            return e.value;
                        case "rejected":
                            throw e.reason;
                        default:
                            throw e
                    }
                }, l = new WeakMap, c = (e, t, r = s) => {
                    let n = l.get(e);
                    if ((null == n ? void 0 : n[0]) === t) return n[1];
                    let u = Array.isArray(e) ? [] : Object.create(Object.getPrototypeOf(e));
                    return (0, i.jc)(u, !0), l.set(e, [t, u]), Reflect.ownKeys(e).forEach(t => {
                        if (Object.getOwnPropertyDescriptor(u, t)) return;
                        let n = Reflect.get(e, t),
                            {
                                enumerable: s
                            } = Reflect.getOwnPropertyDescriptor(e, t),
                            l = {
                                value: n,
                                enumerable: s,
                                configurable: !0
                            };
                        if (a.has(n))(0, i.jc)(n, !1);
                        else if (n instanceof Promise) delete l.value, l.get = () => r(n);
                        else if (o.has(n)) {
                            let [e, t] = o.get(n);
                            l.value = c(e, t(), r)
                        }
                        Object.defineProperty(u, t, l)
                    }), Object.preventExtensions(u)
                }, u = new WeakMap, d = [1, 1], h = s => {
                    if (!n(s)) throw Error("object required");
                    let l = u.get(s);
                    if (l) return l;
                    let p = d[0],
                        f = new Set,
                        g = (e, t = ++d[0]) => {
                            p !== t && (p = t, f.forEach(r => r(e, t)))
                        },
                        w = d[1],
                        m = (e = ++d[1]) => (w === e || f.size || (w = e, b.forEach(([t]) => {
                            let r = t[1](e);
                            r > p && (p = r)
                        })), p),
                        v = e => (t, r) => {
                            let i = [...t];
                            i[1] = [e, ...i[1]], g(i, r)
                        },
                        b = new Map,
                        y = (e, t) => {
                            if (b.has(e)) throw Error("prop listener already exists");
                            if (f.size) {
                                let r = t[3](v(e));
                                b.set(e, [t, r])
                            } else b.set(e, [t])
                        },
                        C = e => {
                            var t;
                            let r = b.get(e);
                            r && (b.delete(e), null == (t = r[1]) || t.call(r))
                        },
                        x = e => {
                            f.add(e), 1 === f.size && b.forEach(([e, t], r) => {
                                if (t) throw Error("remove already exists");
                                let i = e[3](v(r));
                                b.set(r, [e, i])
                            });
                            let t = () => {
                                f.delete(e), 0 === f.size && b.forEach(([e, t], r) => {
                                    t && (t(), b.set(r, [e]))
                                })
                            };
                            return t
                        },
                        _ = Array.isArray(s) ? [] : Object.create(Object.getPrototypeOf(s)),
                        E = {
                            deleteProperty(e, t) {
                                let r = Reflect.get(e, t);
                                C(t);
                                let i = Reflect.deleteProperty(e, t);
                                return i && g(["delete", [t], r]), i
                            },
                            set(t, s, l, c) {
                                let d = Reflect.has(t, s),
                                    p = Reflect.get(t, s, c);
                                if (d && (e(p, l) || u.has(l) && e(p, u.get(l)))) return !0;
                                C(s), n(l) && (l = (0, i.o5)(l) || l);
                                let f = l;
                                if (l instanceof Promise) l.then(e => {
                                    l.status = "fulfilled", l.value = e, g(["resolve", [s], e])
                                }).catch(e => {
                                    l.status = "rejected", l.reason = e, g(["reject", [s], e])
                                });
                                else {
                                    !o.has(l) && r(l) && (f = h(l));
                                    let e = !a.has(f) && o.get(f);
                                    e && y(s, e)
                                }
                                return Reflect.set(t, s, f, c), g(["set", [s], l, p]), !0
                            }
                        },
                        S = t(_, E);
                    u.set(s, S);
                    let k = [_, m, c, x];
                    return o.set(S, k), Reflect.ownKeys(s).forEach(e => {
                        let t = Object.getOwnPropertyDescriptor(s, e);
                        "value" in t && (S[e] = s[e], delete t.value, delete t.writable), Object.defineProperty(_, e, t)
                    }), S
                }) => [h, o, a, e, t, r, s, l, c, u, d])();

            function l(e = {}) {
                return s(e)
            }

            function c(e, t, r) {
                let i;
                let n = o.get(e);
                n || console.warn("Please use proxy object");
                let a = [],
                    s = n[3],
                    l = !1,
                    c = s(e => {
                        if (a.push(e), r) {
                            t(a.splice(0));
                            return
                        }
                        i || (i = Promise.resolve().then(() => {
                            i = void 0, l && t(a.splice(0))
                        }))
                    });
                return l = !0, () => {
                    l = !1, c()
                }
            }

            function u(e) {
                return a.add(e), e
            }

            function d(e, t, r, i) {
                let n = e[t];
                return c(e, () => {
                    let i = e[t];
                    Object.is(n, i) || r(n = i)
                }, i)
            }
            Symbol();
            let h = {
                    FOUR_MINUTES_MS: 24e4,
                    TEN_SEC_MS: 1e4,
                    ONE_SEC_MS: 1e3,
                    SECURE_SITE_DASHBOARD: "https://secure.web3modal.com/dashboard",
                    RESTRICTED_TIMEZONES: ["ASIA/SHANGHAI", "ASIA/URUMQI", "ASIA/CHONGQING", "ASIA/HARBIN", "ASIA/KASHGAR", "ASIA/MACAU", "ASIA/HONG_KONG", "ASIA/MACAO", "ASIA/BEIJING", "ASIA/HARBIN"]
                },
                p = {
                    isMobile: () => "undefined" != typeof window && !!(window.matchMedia("(pointer:coarse)").matches || /Android|webOS|iPhone|iPad|iPod|BlackBerry|Opera Mini/u.test(navigator.userAgent)),
                    isAndroid() {
                        let e = window.navigator.userAgent.toLowerCase();
                        return p.isMobile() && e.includes("android")
                    },
                    isIos() {
                        let e = window.navigator.userAgent.toLowerCase();
                        return p.isMobile() && (e.includes("iphone") || e.includes("ipad"))
                    },
                    isClient: () => "undefined" != typeof window,
                    isPairingExpired: e => !e || e - Date.now() <= h.TEN_SEC_MS,
                    isAllowedRetry: e => Date.now() - e >= h.ONE_SEC_MS,
                    copyToClopboard(e) {
                        navigator.clipboard.writeText(e)
                    },
                    getPairingExpiry: () => Date.now() + h.FOUR_MINUTES_MS,
                    getPlainAddress: e => e.split(":")[2],
                    wait: async e => new Promise(t => {
                        setTimeout(t, e)
                    }),
                    debounce(e, t = 500) {
                        let r;
                        return (...i) => {
                            r && clearTimeout(r), r = setTimeout(function() {
                                e(...i)
                            }, t)
                        }
                    },
                    isHttpUrl: e => e.startsWith("http://") || e.startsWith("https://"),
                    formatNativeUrl(e, t) {
                        if (p.isHttpUrl(e)) return this.formatUniversalUrl(e, t);
                        let r = e;
                        r.includes("://") || (r = e.replaceAll("/", "").replaceAll(":", ""), r = `${r}://`), r.endsWith("/") || (r = `${r}/`);
                        let i = encodeURIComponent(t);
                        return {
                            redirect: `${r}wc?uri=${i}`,
                            href: r
                        }
                    },
                    formatUniversalUrl(e, t) {
                        if (!p.isHttpUrl(e)) return this.formatNativeUrl(e, t);
                        let r = e;
                        r.endsWith("/") || (r = `${r}/`);
                        let i = encodeURIComponent(t);
                        return {
                            redirect: `${r}wc?uri=${i}`,
                            href: r
                        }
                    },
                    openHref(e, t) {
                        window.open(e, t, "noreferrer noopener")
                    },
                    preloadImage: async e => Promise.race([new Promise((t, r) => {
                        let i = new Image;
                        i.onload = t, i.onerror = r, i.crossOrigin = "anonymous", i.src = e
                    }), p.wait(2e3)]),
                    formatBalance(e, t) {
                        let r;
                        if ("0" === e) r = "0.000";
                        else if ("string" == typeof e) {
                            let t = Number(e);
                            t && (r = t.toString().match(/^-?\d+(?:\.\d{0,3})?/u) ? .[0])
                        }
                        return r ? `${r} ${t}` : "0.000"
                    },
                    isRestrictedRegion() {
                        try {
                            let {
                                timeZone: e
                            } = new Intl.DateTimeFormat().resolvedOptions(), t = e.toUpperCase();
                            return h.RESTRICTED_TIMEZONES.includes(t)
                        } catch {
                            return !1
                        }
                    },
                    getApiUrl: () => p.isRestrictedRegion() ? "https://api.web3modal.org" : "https://api.web3modal.com",
                    getBlockchainApiUrl: () => p.isRestrictedRegion() ? "https://rpc.walletconnect.org" : "https://rpc.walletconnect.com",
                    getAnalyticsUrl: () => p.isRestrictedRegion() ? "https://pulse.walletconnect.org" : "https://pulse.walletconnect.com",
                    getUUID: () => crypto ? .randomUUID ? crypto.randomUUID() : "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/gu, e => {
                        let t = 16 * Math.random() | 0;
                        return ("x" === e ? t : 3 & t | 8).toString(16)
                    })
                },
                f = l({
                    isConnected: !1
                }),
                g = {
                    state: f,
                    subscribe: e => c(f, () => e(f)),
                    subscribeKey: (e, t) => d(f, e, t),
                    setIsConnected(e) {
                        f.isConnected = e
                    },
                    setCaipAddress(e) {
                        f.caipAddress = e, f.address = e ? p.getPlainAddress(e) : void 0
                    },
                    setBalance(e, t) {
                        f.balance = e, f.balanceSymbol = t
                    },
                    setProfileName(e) {
                        f.profileName = e
                    },
                    setProfileImage(e) {
                        f.profileImage = e
                    },
                    setAddressExplorerUrl(e) {
                        f.addressExplorerUrl = e
                    },
                    resetAccount() {
                        f.isConnected = !1, f.caipAddress = void 0, f.address = void 0, f.balance = void 0, f.balanceSymbol = void 0, f.profileName = void 0, f.profileImage = void 0, f.addressExplorerUrl = void 0
                    }
                };
            class w {
                constructor({
                    baseUrl: e
                }) {
                    this.baseUrl = e
                }
                async get({
                    headers: e,
                    ...t
                }) {
                    let r = this.createUrl(t);
                    return (await fetch(r, {
                        method: "GET",
                        headers: e
                    })).json()
                }
                async getBlob({
                    headers: e,
                    ...t
                }) {
                    let r = this.createUrl(t);
                    return (await fetch(r, {
                        method: "GET",
                        headers: e
                    })).blob()
                }
                async post({
                    body: e,
                    headers: t,
                    ...r
                }) {
                    let i = this.createUrl(r);
                    return (await fetch(i, {
                        method: "POST",
                        headers: t,
                        body: e ? JSON.stringify(e) : void 0
                    })).json()
                }
                async put({
                    body: e,
                    headers: t,
                    ...r
                }) {
                    let i = this.createUrl(r);
                    return (await fetch(i, {
                        method: "PUT",
                        headers: t,
                        body: e ? JSON.stringify(e) : void 0
                    })).json()
                }
                async delete({
                    body: e,
                    headers: t,
                    ...r
                }) {
                    let i = this.createUrl(r);
                    return (await fetch(i, {
                        method: "DELETE",
                        headers: t,
                        body: e ? JSON.stringify(e) : void 0
                    })).json()
                }
                createUrl({
                    path: e,
                    params: t
                }) {
                    let r = new URL(e, this.baseUrl);
                    return t && Object.entries(t).forEach(([e, t]) => {
                        t && r.searchParams.append(e, t)
                    }), r
                }
            }
            let m = "WALLETCONNECT_DEEPLINK_CHOICE",
                v = "@w3m/recent",
                b = "@w3m/connected_wallet_image_url",
                y = "@w3m/connected_connector",
                C = {
                    setWalletConnectDeepLink({
                        href: e,
                        name: t
                    }) {
                        try {
                            localStorage.setItem(m, JSON.stringify({
                                href: e,
                                name: t
                            }))
                        } catch {
                            console.info("Unable to set WalletConnect deep link")
                        }
                    },
                    getWalletConnectDeepLink() {
                        try {
                            let e = localStorage.getItem(m);
                            if (e) return JSON.parse(e)
                        } catch {
                            console.info("Unable to get WalletConnect deep link")
                        }
                    },
                    deleteWalletConnectDeepLink() {
                        try {
                            localStorage.removeItem(m)
                        } catch {
                            console.info("Unable to delete WalletConnect deep link")
                        }
                    },
                    setWeb3ModalRecent(e) {
                        try {
                            let t = C.getRecentWallets();
                            t.find(t => t.id === e.id) || (t.unshift(e), t.length > 2 && t.pop(), localStorage.setItem(v, JSON.stringify(t)))
                        } catch {
                            console.info("Unable to set Web3Modal recent")
                        }
                    },
                    getRecentWallets() {
                        try {
                            let e = localStorage.getItem(v);
                            return e ? JSON.parse(e) : []
                        } catch {
                            console.info("Unable to get Web3Modal recent")
                        }
                        return []
                    },
                    setConnectedWalletImageUrl(e) {
                        try {
                            localStorage.setItem(b, e)
                        } catch {
                            console.info("Unable to set Connected Wallet Image Url")
                        }
                    },
                    getConnectedWalletImageUrl() {
                        try {
                            return localStorage.getItem(b)
                        } catch {
                            console.info("Unable to set Connected Wallet Image Url")
                        }
                    },
                    setConnectedConnector(e) {
                        try {
                            localStorage.setItem(y, e)
                        } catch {
                            console.info("Unable to set Connected Connector")
                        }
                    },
                    getConnectedConnector() {
                        try {
                            return localStorage.getItem(y)
                        } catch {
                            console.info("Unable to get Connected Connector")
                        }
                    }
                },
                x = l({
                    walletImages: {},
                    networkImages: {},
                    connectorImages: {},
                    tokenImages: {}
                }),
                _ = {
                    state: x,
                    subscribeNetworkImages: e => c(x.networkImages, () => e(x.networkImages)),
                    subscribeKey: (e, t) => d(x, e, t),
                    setWalletImage(e, t) {
                        x.walletImages[e] = t
                    },
                    setNetworkImage(e, t) {
                        x.networkImages[e] = t
                    },
                    setConnectorImage(e, t) {
                        x.connectorImages[e] = t
                    },
                    setTokenImage(e, t) {
                        x.tokenImages[e] = t
                    }
                },
                E = l({
                    connectors: []
                }),
                S = {
                    state: E,
                    subscribeKey: (e, t) => d(E, e, t),
                    setConnectors(e) {
                        E.connectors = e.map(e => u(e))
                    },
                    addConnector(e) {
                        E.connectors.push(u(e))
                    },
                    getEmailConnector: () => E.connectors.find(e => "EMAIL" === e.type),
                    getConnectors: () => E.connectors
                },
                k = l({
                    open: !1,
                    selectedNetworkId: void 0
                }),
                A = {
                    state: k,
                    subscribe: e => c(k, () => e(k)),
                    set(e) {
                        Object.assign(k, { ...k,
                            ...e
                        })
                    }
                },
                D = l({
                    supportsAllNetworks: !0,
                    isDefaultCaipNetwork: !1
                }),
                $ = {
                    state: D,
                    subscribeKey: (e, t) => d(D, e, t),
                    _getClient() {
                        if (!D._client) throw Error("NetworkController client not set");
                        return D._client
                    },
                    setClient(e) {
                        D._client = u(e)
                    },
                    setCaipNetwork(e) {
                        D.caipNetwork = e, A.set({
                            selectedNetworkId: e ? .id
                        })
                    },
                    setDefaultCaipNetwork(e) {
                        D.caipNetwork = e, A.set({
                            selectedNetworkId: e ? .id
                        }), D.isDefaultCaipNetwork = !0
                    },
                    setRequestedCaipNetworks(e) {
                        D.requestedCaipNetworks = e
                    },
                    async getApprovedCaipNetworksData() {
                        let e = await this._getClient().getApprovedCaipNetworksData();
                        D.supportsAllNetworks = e.supportsAllNetworks, D.approvedCaipNetworkIds = e.approvedCaipNetworkIds
                    },
                    async switchActiveNetwork(e) {
                        await this._getClient().switchCaipNetwork(e), D.caipNetwork = e
                    },
                    resetNetwork() {
                        D.isDefaultCaipNetwork || (D.caipNetwork = void 0), D.approvedCaipNetworkIds = void 0, D.supportsAllNetworks = !0
                    }
                },
                R = l({
                    projectId: "",
                    sdkType: "w3m",
                    sdkVersion: "html-wagmi-undefined"
                }),
                O = {
                    state: R,
                    subscribeKey: (e, t) => d(R, e, t),
                    setProjectId(e) {
                        R.projectId = e
                    },
                    setIncludeWalletIds(e) {
                        R.includeWalletIds = e
                    },
                    setExcludeWalletIds(e) {
                        R.excludeWalletIds = e
                    },
                    setFeaturedWalletIds(e) {
                        R.featuredWalletIds = e
                    },
                    setTokens(e) {
                        R.tokens = e
                    },
                    setTermsConditionsUrl(e) {
                        R.termsConditionsUrl = e
                    },
                    setPrivacyPolicyUrl(e) {
                        R.privacyPolicyUrl = e
                    },
                    setCustomWallets(e) {
                        R.customWallets = e
                    },
                    setEnableAnalytics(e) {
                        R.enableAnalytics = e
                    },
                    setSdkVersion(e) {
                        R.sdkVersion = e
                    },
                    setMetadata(e) {
                        R.metadata = e
                    }
                },
                I = new w({
                    baseUrl: p.getApiUrl()
                }),
                T = l({
                    page: 1,
                    count: 0,
                    featured: [],
                    recommended: [],
                    wallets: [],
                    search: []
                }),
                N = {
                    state: T,
                    subscribeKey: (e, t) => d(T, e, t),
                    _getApiHeaders() {
                        let {
                            projectId: e,
                            sdkType: t,
                            sdkVersion: r
                        } = O.state;
                        return {
                            "x-project-id": e,
                            "x-sdk-type": t,
                            "x-sdk-version": r
                        }
                    },
                    async _fetchWalletImage(e) {
                        let t = `${I.baseUrl}/getWalletImage/${e}`,
                            r = await I.getBlob({
                                path: t,
                                headers: N._getApiHeaders()
                            });
                        _.setWalletImage(e, URL.createObjectURL(r))
                    },
                    async _fetchNetworkImage(e) {
                        let t = `${I.baseUrl}/public/getAssetImage/${e}`,
                            r = await I.getBlob({
                                path: t,
                                headers: N._getApiHeaders()
                            });
                        _.setNetworkImage(e, URL.createObjectURL(r))
                    },
                    async _fetchConnectorImage(e) {
                        let t = `${I.baseUrl}/public/getAssetImage/${e}`,
                            r = await I.getBlob({
                                path: t,
                                headers: N._getApiHeaders()
                            });
                        _.setConnectorImage(e, URL.createObjectURL(r))
                    },
                    async fetchNetworkImages() {
                        let {
                            requestedCaipNetworks: e
                        } = $.state, t = e ? .map(({
                            imageId: e
                        }) => e).filter(Boolean);
                        t && await Promise.allSettled(t.map(e => N._fetchNetworkImage(e)))
                    },
                    async fetchConnectorImages() {
                        let {
                            connectors: e
                        } = S.state, t = e.map(({
                            imageId: e
                        }) => e).filter(Boolean);
                        await Promise.allSettled(t.map(e => N._fetchConnectorImage(e)))
                    },
                    async fetchFeaturedWallets() {
                        let {
                            featuredWalletIds: e
                        } = O.state;
                        if (e ? .length) {
                            let {
                                data: t
                            } = await I.get({
                                path: "/getWallets",
                                headers: N._getApiHeaders(),
                                params: {
                                    page: "1",
                                    entries: e ? .length ? String(e.length) : "4",
                                    include: e ? .join(",")
                                }
                            });
                            t.sort((t, r) => e.indexOf(t.id) - e.indexOf(r.id));
                            let r = t.map(e => e.image_id).filter(Boolean);
                            await Promise.allSettled(r.map(e => N._fetchWalletImage(e))), T.featured = t
                        }
                    },
                    async fetchRecommendedWallets() {
                        let {
                            includeWalletIds: e,
                            excludeWalletIds: t,
                            featuredWalletIds: r
                        } = O.state, i = [...t ? ? [], ...r ? ? []].filter(Boolean), {
                            data: n,
                            count: o
                        } = await I.get({
                            path: "/getWallets",
                            headers: N._getApiHeaders(),
                            params: {
                                page: "1",
                                entries: "4",
                                include: e ? .join(","),
                                exclude: i ? .join(",")
                            }
                        }), a = C.getRecentWallets(), s = n.map(e => e.image_id).filter(Boolean), l = a.map(e => e.image_id).filter(Boolean);
                        await Promise.allSettled([...s, ...l].map(e => N._fetchWalletImage(e))), T.recommended = n, T.count = o ? ? 0
                    },
                    async fetchWallets({
                        page: e
                    }) {
                        let {
                            includeWalletIds: t,
                            excludeWalletIds: r,
                            featuredWalletIds: i
                        } = O.state, n = [...T.recommended.map(({
                            id: e
                        }) => e), ...r ? ? [], ...i ? ? []].filter(Boolean), {
                            data: o,
                            count: a
                        } = await I.get({
                            path: "/getWallets",
                            headers: N._getApiHeaders(),
                            params: {
                                page: String(e),
                                entries: "40",
                                include: t ? .join(","),
                                exclude: n.join(",")
                            }
                        }), s = o.map(e => e.image_id).filter(Boolean);
                        await Promise.allSettled([...s.map(e => N._fetchWalletImage(e)), p.wait(300)]), T.wallets = [...T.wallets, ...o], T.count = a > T.count ? a : T.count, T.page = e
                    },
                    async searchWallet({
                        search: e
                    }) {
                        let {
                            includeWalletIds: t,
                            excludeWalletIds: r
                        } = O.state;
                        T.search = [];
                        let {
                            data: i
                        } = await I.get({
                            path: "/getWallets",
                            headers: N._getApiHeaders(),
                            params: {
                                page: "1",
                                entries: "100",
                                search: e,
                                include: t ? .join(","),
                                exclude: r ? .join(",")
                            }
                        }), n = i.map(e => e.image_id).filter(Boolean);
                        await Promise.allSettled([...n.map(e => N._fetchWalletImage(e)), p.wait(300)]), T.search = i
                    },
                    prefetch() {
                        T.prefetchPromise = Promise.race([Promise.allSettled([N.fetchFeaturedWallets(), N.fetchRecommendedWallets(), N.fetchNetworkImages(), N.fetchConnectorImages()]), p.wait(3e3)])
                    }
                },
                P = new w({
                    baseUrl: p.getAnalyticsUrl()
                }),
                U = ["MODAL_CREATED"],
                M = l({
                    timestamp: Date.now(),
                    data: {
                        type: "track",
                        event: "MODAL_CREATED"
                    }
                }),
                j = {
                    state: M,
                    subscribe: e => c(M, () => e(M)),
                    _getApiHeaders() {
                        let {
                            projectId: e,
                            sdkType: t,
                            sdkVersion: r
                        } = O.state;
                        return {
                            "x-project-id": e,
                            "x-sdk-type": t,
                            "x-sdk-version": r
                        }
                    },
                    async _sendAnalyticsEvent(e) {
                        try {
                            if (U.includes(e.data.event) || "undefined" == typeof window) return;
                            await P.post({
                                path: "/e",
                                headers: j._getApiHeaders(),
                                body: {
                                    eventId: p.getUUID(),
                                    url: window.location.href,
                                    domain: window.location.hostname,
                                    timestamp: e.timestamp,
                                    props: e.data
                                }
                            })
                        } catch {}
                    },
                    sendEvent(e) {
                        M.timestamp = Date.now(), M.data = e, O.state.enableAnalytics && j._sendAnalyticsEvent(M)
                    }
                },
                L = l({
                    view: "Connect",
                    history: ["Connect"]
                }),
                B = {
                    state: L,
                    subscribeKey: (e, t) => d(L, e, t),
                    push(e, t) {
                        e !== L.view && (L.view = e, L.history.push(e), L.data = t)
                    },
                    reset(e) {
                        L.view = e, L.history = [e]
                    },
                    replace(e, t) {
                        L.history.length > 1 && L.history.at(-1) !== e && (L.view = e, L.history[L.history.length - 1] = e, L.data = t)
                    },
                    goBack() {
                        if (L.history.length > 1) {
                            L.history.pop();
                            let [e] = L.history.slice(-1);
                            e && (L.view = e)
                        }
                    }
                },
                z = l({
                    loading: !1,
                    open: !1
                }),
                W = {
                    state: z,
                    subscribe: e => c(z, () => e(z)),
                    subscribeKey: (e, t) => d(z, e, t),
                    async open(e) {
                        await N.state.prefetchPromise, e ? .view ? B.reset(e.view) : g.state.isConnected ? B.reset("Account") : B.reset("Connect"), z.open = !0, A.set({
                            open: !0
                        }), j.sendEvent({
                            type: "track",
                            event: "MODAL_OPEN"
                        })
                    },
                    close() {
                        z.open = !1, A.set({
                            open: !1
                        }), j.sendEvent({
                            type: "track",
                            event: "MODAL_CLOSE"
                        })
                    },
                    setLoading(e) {
                        z.loading = e
                    }
                },
                Z = new w({
                    baseUrl: p.getBlockchainApiUrl()
                }),
                F = {
                    fetchIdentity: ({
                        caipChainId: e,
                        address: t
                    }) => Z.get({
                        path: `/v1/identity/${t}`,
                        params: {
                            chainId: e,
                            projectId: O.state.projectId
                        }
                    }),
                    fetchTransactions: ({
                        account: e,
                        projectId: t,
                        cursor: r
                    }) => Z.get({
                        path: `/v1/account/${e}/history?projectId=${t}`,
                        params: r ? {
                            cursor: r
                        } : {}
                    })
                },
                H = l({
                    message: "",
                    variant: "success",
                    open: !1
                }),
                V = {
                    state: H,
                    subscribeKey: (e, t) => d(H, e, t),
                    showSuccess(e) {
                        H.message = e, H.variant = "success", H.open = !0
                    },
                    showError(e) {
                        H.message = e, H.variant = "error", H.open = !0
                    },
                    hide() {
                        H.open = !1
                    }
                },
                Y = l({
                    transactions: [],
                    transactionsByYear: {},
                    loading: !1,
                    empty: !1,
                    next: void 0
                }),
                K = {
                    state: Y,
                    subscribe: e => c(Y, () => e(Y)),
                    async fetchTransactions(e) {
                        let {
                            projectId: t
                        } = O.state;
                        if (!t || !e) throw Error("Transactions can't be fetched without a projectId and an accountAddress");
                        Y.loading = !0;
                        try {
                            let r = await F.fetchTransactions({
                                    account: e,
                                    projectId: t,
                                    cursor: Y.next
                                }),
                                i = this.filterSpamTransactions(r.data),
                                n = [...Y.transactions, ...i];
                            Y.loading = !1, Y.transactions = n, Y.transactionsByYear = this.groupTransactionsByYear(Y.transactionsByYear, i), Y.empty = 0 === n.length, Y.next = r.next ? r.next : void 0
                        } catch (r) {
                            j.sendEvent({
                                type: "track",
                                event: "ERROR_FETCH_TRANSACTIONS",
                                properties: {
                                    address: e,
                                    projectId: t,
                                    cursor: Y.next
                                }
                            }), V.showError("Failed to fetch transactions"), Y.loading = !1, Y.empty = !0
                        }
                    },
                    groupTransactionsByYear: (e = {}, t = []) => (t.forEach(t => {
                        let r = new Date(t.metadata.minedAt).getFullYear();
                        e[r] || (e[r] = []), e[r] ? .push(t)
                    }), e),
                    filterSpamTransactions: e => e.filter(e => !e.transfers.every(e => e.nft_info ? .flags.is_spam === !0)),
                    resetTransactions() {
                        Y.transactions = [], Y.transactionsByYear = {}, Y.loading = !1, Y.empty = !1, Y.next = void 0
                    }
                },
                q = l({
                    wcError: !1,
                    buffering: !1
                }),
                G = {
                    state: q,
                    subscribeKey: (e, t) => d(q, e, t),
                    _getClient() {
                        if (!q._client) throw Error("ConnectionController client not set");
                        return q._client
                    },
                    setClient(e) {
                        q._client = u(e)
                    },
                    connectWalletConnect() {
                        q.wcPromise = this._getClient().connectWalletConnect(e => {
                            q.wcUri = e, q.wcPairingExpiry = p.getPairingExpiry()
                        })
                    },
                    async connectExternal(e) {
                        await this._getClient().connectExternal ? .(e), C.setConnectedConnector(e.type)
                    },
                    async signMessage(e) {
                        return this._getClient().signMessage(e)
                    },
                    checkInstalled(e) {
                        return this._getClient().checkInstalled ? .(e)
                    },
                    resetWcConnection() {
                        q.wcUri = void 0, q.wcPairingExpiry = void 0, q.wcPromise = void 0, q.wcLinking = void 0, q.recentWallet = void 0, K.resetTransactions(), C.deleteWalletConnectDeepLink()
                    },
                    setWcLinking(e) {
                        q.wcLinking = e
                    },
                    setWcError(e) {
                        q.wcError = e, q.buffering = !1
                    },
                    setRecentWallet(e) {
                        q.recentWallet = e
                    },
                    setBuffering(e) {
                        q.buffering = e
                    },
                    async disconnect() {
                        await this._getClient().disconnect(), this.resetWcConnection()
                    }
                },
                X = l({
                    status: "uninitialized",
                    isSiweEnabled: !1
                }),
                J = {
                    state: X,
                    subscribeKey: (e, t) => d(X, e, t),
                    subscribe: e => c(X, () => e(X)),
                    _getClient() {
                        if (!X._client) throw Error("SIWEController client not set");
                        return X._client
                    },
                    async getNonce() {
                        let e = this._getClient(),
                            t = await e.getNonce();
                        return this.setNonce(t), t
                    },
                    async getSession() {
                        let e = this._getClient(),
                            t = await e.getSession();
                        return t && (this.setSession(t), this.setStatus("success")), t
                    },
                    createMessage(e) {
                        let t = this._getClient().createMessage(e);
                        return this.setMessage(t), t
                    },
                    async verifyMessage(e) {
                        let t = this._getClient();
                        return await t.verifyMessage(e)
                    },
                    async signIn() {
                        let e = this._getClient();
                        return await e.signIn()
                    },
                    async signOut() {
                        let e = this._getClient();
                        await e.signOut(), this.setStatus("ready"), e.onSignOut ? .()
                    },
                    onSignIn(e) {
                        let t = this._getClient();
                        t.onSignIn ? .(e)
                    },
                    onSignOut() {
                        let e = this._getClient();
                        e.onSignOut ? .()
                    },
                    setSIWEClient(e) {
                        X._client = u(e), X.status = "ready", X.isSiweEnabled = e.options.enabled
                    },
                    setNonce(e) {
                        X.nonce = e
                    },
                    setStatus(e) {
                        X.status = e
                    },
                    setMessage(e) {
                        X.message = e
                    },
                    setSession(e) {
                        X.session = e
                    }
                },
                Q = l({
                    themeMode: "dark",
                    themeVariables: {}
                }),
                ee = {
                    state: Q,
                    subscribe: e => c(Q, () => e(Q)),
                    setThemeMode(e) {
                        Q.themeMode = e
                    },
                    setThemeVariables(e) {
                        Q.themeVariables = { ...Q.themeVariables,
                            ...e
                        }
                    }
                },
                et = {
                    getWalletImage: e => e ? .image_url ? e ? .image_url : e ? .image_id ? _.state.walletImages[e.image_id] : void 0,
                    getNetworkImage: e => e ? .imageUrl ? e ? .imageUrl : e ? .imageId ? _.state.networkImages[e.imageId] : void 0,
                    getConnectorImage: e => e ? .imageUrl ? e.imageUrl : e ? .imageId ? _.state.connectorImages[e.imageId] : void 0
                }
        },
        9448: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                W3mModal: function() {
                    return u
                }
            });
            var i = r(3151),
                n = r(70808),
                o = r(22555),
                a = r(6591),
                s = o.iv `
  :host {
    z-index: var(--w3m-z-index);
    display: block;
    backface-visibility: hidden;
    will-change: opacity;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
    opacity: 0;
    background-color: var(--wui-cover);
  }

  @keyframes zoom-in {
    0% {
      transform: scale(0.95) translateY(0);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  @keyframes slide-in {
    0% {
      transform: scale(1) translateY(50px);
    }
    100% {
      transform: scale(1) translateY(0);
    }
  }

  wui-card {
    max-width: 360px;
    width: 100%;
    position: relative;
    animation-delay: 0.3s;
    animation-duration: 0.2s;
    animation-name: zoom-in;
    animation-fill-mode: backwards;
    animation-timing-function: var(--wui-ease-out-power-2);
    outline: none;
  }

  wui-flex {
    overflow-x: hidden;
    overflow-y: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
  }

  @media (max-height: 700px) and (min-width: 431px) {
    wui-flex {
      align-items: flex-start;
    }

    wui-card {
      margin: var(--wui-spacing-xxl) 0px;
    }
  }

  @media (max-width: 430px) {
    wui-flex {
      align-items: flex-end;
    }

    wui-card {
      max-width: 100%;
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      border-bottom: none;
      animation-name: slide-in;
    }
  }
`,
                l = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let c = "scroll-lock",
                u = class extends o.oi {
                    constructor() {
                        super(), this.unsubscribe = [], this.abortController = void 0, this.open = i.IN.state.open, this.caipAddress = i.AccountController.state.address, this.isSiweEnabled = i.yD.state.isSiweEnabled, this.initializeTheming(), i.ApiController.prefetch(), this.unsubscribe.push(i.IN.subscribeKey("open", e => e ? this.onOpen() : this.onClose()), i.yD.subscribeKey("isSiweEnabled", e => {
                            this.isSiweEnabled = e
                        }), i.AccountController.subscribe(e => this.onNewAccountState(e))), i.Xs.sendEvent({
                            type: "track",
                            event: "MODAL_LOADED"
                        })
                    }
                    disconnectedCallback() {
                        this.unsubscribe.forEach(e => e()), this.onRemoveKeyboardListener()
                    }
                    render() {
                        return this.open ? o.dy `
          <wui-flex @click=${this.onOverlayClick.bind(this)}>
            <wui-card role="alertdialog" aria-modal="true" tabindex="0">
              <w3m-header></w3m-header>
              <w3m-router></w3m-router>
              <w3m-snackbar></w3m-snackbar>
            </wui-card>
          </wui-flex>
        ` : null
                    }
                    async onOverlayClick(e) {
                        e.target === e.currentTarget && await this.handleClose()
                    }
                    async handleClose() {
                        this.isSiweEnabled && "success" !== i.yD.state.status && await i.ConnectionController.disconnect(), i.IN.close()
                    }
                    initializeTheming() {
                        let {
                            themeVariables: e,
                            themeMode: t
                        } = i.ThemeController.state, r = n.UiHelperUtil.getColorTheme(t);
                        (0, n.initializeTheming)(e, r)
                    }
                    async onClose() {
                        this.onScrollUnlock(), await this.animate([{
                            opacity: 1
                        }, {
                            opacity: 0
                        }], {
                            duration: 200,
                            easing: "ease",
                            fill: "forwards"
                        }).finished, i.SnackController.hide(), this.open = !1, this.onRemoveKeyboardListener()
                    }
                    async onOpen() {
                        this.onScrollLock(), this.open = !0, await this.animate([{
                            opacity: 0
                        }, {
                            opacity: 1
                        }], {
                            duration: 200,
                            easing: "ease",
                            fill: "forwards",
                            delay: 300
                        }).finished, this.onAddKeyboardListener()
                    }
                    onScrollLock() {
                        let e = document.createElement("style");
                        e.dataset.w3m = c, e.textContent = `
      html, body {
        touch-action: none;
        overflow: hidden;
        overscroll-behavior: contain;
      }
      w3m-modal {
        pointer-events: auto;
      }
    `, document.head.appendChild(e)
                    }
                    onScrollUnlock() {
                        let e = document.head.querySelector(`style[data-w3m="${c}"]`);
                        e && e.remove()
                    }
                    onAddKeyboardListener() {
                        this.abortController = new AbortController;
                        let e = this.shadowRoot ? .querySelector("wui-card");
                        e ? .focus(), window.addEventListener("keydown", t => {
                            if ("Escape" === t.key) this.handleClose();
                            else if ("Tab" === t.key) {
                                let {
                                    tagName: r
                                } = t.target;
                                !r || r.includes("W3M-") || r.includes("WUI-") || e ? .focus()
                            }
                        }, this.abortController)
                    }
                    onRemoveKeyboardListener() {
                        this.abortController ? .abort(), this.abortController = void 0
                    }
                    async onNewAccountState(e) {
                        let {
                            isConnected: t,
                            caipAddress: r
                        } = e;
                        if (this.isSiweEnabled) {
                            t && !this.caipAddress && (this.caipAddress = r), t && r && this.caipAddress !== r && (await i.yD.signOut(), this.onSiweNavigation(), this.caipAddress = r);
                            try {
                                let e = await i.yD.getSession();
                                e && !t ? await i.yD.signOut() : t && !e && this.onSiweNavigation()
                            } catch (e) {
                                t && this.onSiweNavigation()
                            }
                        }
                    }
                    onSiweNavigation() {
                        this.open ? i.RouterController.push("ConnectingSiwe") : i.IN.open({
                            view: "ConnectingSiwe"
                        })
                    }
                };
            u.styles = s, l([(0, a.SB)()], u.prototype, "open", void 0), l([(0, a.SB)()], u.prototype, "caipAddress", void 0), l([(0, a.SB)()], u.prototype, "isSiweEnabled", void 0), u = l([(0, n.customElement)("w3m-modal")], u)
        },
        70808: function(e, t, r) {
            "use strict";
            let i, n, o;
            r.r(t), r.d(t, {
                TransactionUtil: function() {
                    return r1
                },
                UiHelperUtil: function() {
                    return e8
                },
                WuiAccountButton: function() {
                    return tc
                },
                WuiAllWalletsImage: function() {
                    return tg
                },
                WuiAvatar: function() {
                    return ti
                },
                WuiButton: function() {
                    return tv
                },
                WuiCard: function() {
                    return v
                },
                WuiCardSelect: function() {
                    return t$
                },
                WuiCardSelectLoader: function() {
                    return tx
                },
                WuiChip: function() {
                    return tI
                },
                WuiConnectButton: function() {
                    return tP
                },
                WuiCtaButton: function() {
                    return tj
                },
                WuiEmailInput: function() {
                    return tH
                },
                WuiFlex: function() {
                    return te
                },
                WuiGrid: function() {
                    return rK
                },
                WuiIcon: function() {
                    return ex
                },
                WuiIconBox: function() {
                    return ta
                },
                WuiIconLink: function() {
                    return tK
                },
                WuiImage: function() {
                    return eS
                },
                WuiInputElement: function() {
                    return tX
                },
                WuiInputNumeric: function() {
                    return t0
                },
                WuiInputText: function() {
                    return tW
                },
                WuiLink: function() {
                    return t3
                },
                WuiListItem: function() {
                    return t6
                },
                WuiListWallet: function() {
                    return ru
                },
                WuiLoadingHexagon: function() {
                    return eA
                },
                WuiLoadingSpinner: function() {
                    return eR
                },
                WuiLoadingThumbnail: function() {
                    return eT
                },
                WuiLogo: function() {
                    return rp
                },
                WuiLogoSelect: function() {
                    return rw
                },
                WuiNetworkButton: function() {
                    return rb
                },
                WuiNetworkImage: function() {
                    return tk
                },
                WuiNoticeCard: function() {
                    return rH
                },
                WuiOtp: function() {
                    return rx
                },
                WuiQrCode: function() {
                    return rD
                },
                WuiSearchBar: function() {
                    return rR
                },
                WuiSeparator: function() {
                    return rX
                },
                WuiShimmer: function() {
                    return eU
                },
                WuiSnackbar: function() {
                    return rT
                },
                WuiTabs: function() {
                    return rU
                },
                WuiTag: function() {
                    return rs
                },
                WuiText: function() {
                    return eW
                },
                WuiTooltip: function() {
                    return rL
                },
                WuiTransactionListItem: function() {
                    return rr
                },
                WuiTransactionListItemLoader: function() {
                    return rn
                },
                WuiTransactionVisual: function() {
                    return t9
                },
                WuiVisual: function() {
                    return e4
                },
                WuiVisualThumbnail: function() {
                    return rW
                },
                WuiWalletImage: function() {
                    return th
                },
                customElement: function() {
                    return w
                },
                initializeTheming: function() {
                    return c
                },
                setColorTheme: function() {
                    return u
                },
                setThemeVariables: function() {
                    return d
                }
            });
            var a, s, l = r(22555);

            function c(e, t) {
                i = document.createElement("style"), n = document.createElement("style"), o = document.createElement("style"), i.textContent = h(e).core.cssText, n.textContent = h(e).dark.cssText, o.textContent = h(e).light.cssText, document.head.appendChild(i), document.head.appendChild(n), document.head.appendChild(o), u(t)
            }

            function u(e) {
                n && o && ("light" === e ? (n.removeAttribute("media"), o.media = "enabled") : (o.removeAttribute("media"), n.media = "enabled"))
            }

            function d(e) {
                i && n && o && (i.textContent = h(e).core.cssText, n.textContent = h(e).dark.cssText, o.textContent = h(e).light.cssText)
            }

            function h(e) {
                return {
                    core: l.iv `
      :root {
        --w3m-color-mix-strength: ${(0,l.$m)(e?.["--w3m-color-mix-strength"]?`${e["--w3m-color-mix-strength"]}%`:"0%")};
        --w3m-font-family: ${(0,l.$m)(e?.["--w3m-font-family"]||"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif")};
        --w3m-font-size-master: ${(0,l.$m)(e?.["--w3m-font-size-master"]||"10px")};
        --w3m-border-radius-master: ${(0,l.$m)(e?.["--w3m-border-radius-master"]||"4px")};
        --w3m-z-index: ${(0,l.$m)(e?.["--w3m-z-index"]||100)};

        --wui-font-family: var(--w3m-font-family);

        --wui-font-size-micro: var(--w3m-font-size-master);
        --wui-font-size-tiny: calc(var(--w3m-font-size-master) * 1.2);
        --wui-font-size-small: calc(var(--w3m-font-size-master) * 1.4);
        --wui-font-size-paragraph: calc(var(--w3m-font-size-master) * 1.6);
        --wui-font-size-large: calc(var(--w3m-font-size-master) * 2);

        --wui-border-radius-5xs: var(--w3m-border-radius-master);
        --wui-border-radius-4xs: calc(var(--w3m-border-radius-master) * 1.5);
        --wui-border-radius-3xs: calc(var(--w3m-border-radius-master) * 2);
        --wui-border-radius-xxs: calc(var(--w3m-border-radius-master) * 3);
        --wui-border-radius-xs: calc(var(--w3m-border-radius-master) * 4);
        --wui-border-radius-s: calc(var(--w3m-border-radius-master) * 5);
        --wui-border-radius-m: calc(var(--w3m-border-radius-master) * 7);
        --wui-border-radius-l: calc(var(--w3m-border-radius-master) * 9);
        --wui-border-radius-3xl: calc(var(--w3m-border-radius-master) * 20);

        --wui-font-weight-light: 400;
        --wui-font-weight-regular: 500;
        --wui-font-weight-medium: 600;
        --wui-font-weight-bold: 700;

        --wui-letter-spacing-large: -0.8px;
        --wui-letter-spacing-paragraph: -0.64px;
        --wui-letter-spacing-small: -0.56px;
        --wui-letter-spacing-tiny: -0.48px;
        --wui-letter-spacing-micro: -0.2px;

        --wui-spacing-0: 0px;
        --wui-spacing-4xs: 2px;
        --wui-spacing-3xs: 4px;
        --wui-spacing-xxs: 6px;
        --wui-spacing-2xs: 7px;
        --wui-spacing-xs: 8px;
        --wui-spacing-1xs: 10px;
        --wui-spacing-s: 12px;
        --wui-spacing-m: 14px;
        --wui-spacing-l: 16px;
        --wui-spacing-2l: 18px;
        --wui-spacing-xl: 20px;
        --wui-spacing-xxl: 24px;
        --wui-spacing-2xl: 32px;
        --wui-spacing-3xl: 40px;
        --wui-spacing-4xl: 90px;

        --wui-icon-box-size-xxs: 14px;
        --wui-icon-box-size-xs: 20px;
        --wui-icon-box-size-sm: 24px;
        --wui-icon-box-size-md: 32px;
        --wui-icon-box-size-lg: 40px;
        --wui-icon-box-size-xl: 64px;

        --wui-icon-size-inherit: inherit;
        --wui-icon-size-xxs: 10px;
        --wui-icon-size-xs: 12px;
        --wui-icon-size-sm: 14px;
        --wui-icon-size-md: 16px;
        --wui-icon-size-mdl: 18px;
        --wui-icon-size-lg: 20px;
        --wui-icon-size-xl: 24px;

        --wui-wallet-image-size-inherit: inherit;
        --wui-wallet-image-size-sm: 40px;
        --wui-wallet-image-size-md: 56px;
        --wui-wallet-image-size-lg: 80px;

        --wui-box-size-md: 100px;
        --wui-box-size-lg: 120px;

        --wui-ease-out-power-2: cubic-bezier(0, 0, 0.22, 1);
        --wui-ease-out-power-1: cubic-bezier(0, 0, 0.55, 1);

        --wui-ease-in-power-3: cubic-bezier(0.66, 0, 1, 1);
        --wui-ease-in-power-2: cubic-bezier(0.45, 0, 1, 1);
        --wui-ease-in-power-1: cubic-bezier(0.3, 0, 1, 1);

        --wui-ease-inout-power-1: cubic-bezier(0.45, 0, 0.55, 1);

        --wui-duration-lg: 200ms;
        --wui-duration-md: 125ms;
        --wui-duration-sm: 75ms;

        --wui-path-network: path(
          'M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z'
        );

        --wui-path-network-lg: path(
          'M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z'
        );

        --wui-color-inherit: inherit;

        --wui-color-inverse-100: #fff;
        --wui-color-inverse-000: #000;

        --wui-cover: rgba(0, 0, 0, 0.3);

        --wui-color-modal-bg: var(--wui-color-modal-bg-base);

        --wui-color-blue-100: var(--wui-color-blue-base-100);

        --wui-color-accent-100: var(--wui-color-accent-base-100);
        --wui-color-accent-090: var(--wui-color-accent-base-090);
        --wui-color-accent-080: var(--wui-color-accent-base-080);

        --wui-accent-glass-090: var(--wui-accent-glass-base-090);
        --wui-accent-glass-080: var(--wui-accent-glass-base-080);
        --wui-accent-glass-020: var(--wui-accent-glass-base-020);
        --wui-accent-glass-015: var(--wui-accent-glass-base-015);
        --wui-accent-glass-010: var(--wui-accent-glass-base-010);
        --wui-accent-glass-005: var(--wui-accent-glass-base-005);
        --wui-accent-glass-002: var(--wui-accent-glass-base-002);

        --wui-color-fg-100: var(--wui-color-fg-base-100);
        --wui-color-fg-125: var(--wui-color-fg-base-125);
        --wui-color-fg-150: var(--wui-color-fg-base-150);
        --wui-color-fg-175: var(--wui-color-fg-base-175);
        --wui-color-fg-200: var(--wui-color-fg-base-200);
        --wui-color-fg-225: var(--wui-color-fg-base-225);
        --wui-color-fg-250: var(--wui-color-fg-base-250);
        --wui-color-fg-275: var(--wui-color-fg-base-275);
        --wui-color-fg-300: var(--wui-color-fg-base-300);

        --wui-color-bg-100: var(--wui-color-bg-base-100);
        --wui-color-bg-125: var(--wui-color-bg-base-125);
        --wui-color-bg-150: var(--wui-color-bg-base-150);
        --wui-color-bg-175: var(--wui-color-bg-base-175);
        --wui-color-bg-200: var(--wui-color-bg-base-200);
        --wui-color-bg-225: var(--wui-color-bg-base-225);
        --wui-color-bg-250: var(--wui-color-bg-base-250);
        --wui-color-bg-275: var(--wui-color-bg-base-275);
        --wui-color-bg-300: var(--wui-color-bg-base-300);

        --wui-color-success-100: var(--wui-color-success-base-100);
        --wui-color-error-100: var(--wui-color-error-base-100);

        --wui-icon-box-bg-error-100: var(--wui-icon-box-bg-error-base-100);
        --wui-icon-box-bg-blue-100: var(--wui-icon-box-bg-blue-base-100);
        --wui-icon-box-bg-success-100: var(--wui-icon-box-bg-success-base-100);
        --wui-icon-box-bg-inverse-100: var(--wui-icon-box-bg-inverse-base-100);

        --wui-all-wallets-bg-100: var(--wui-all-wallets-bg-base-100);

        --wui-avatar-border: var(--wui-avatar-border-base);

        --wui-thumbnail-border: var(--wui-thumbnail-border-base);

        --wui-box-shadow-blue: rgba(71, 161, 255, 0.16);
      }

      @supports (background: color-mix(in srgb, white 50%, black)) {
        :root {
          --wui-color-modal-bg: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-modal-bg-base)
          );

          --wui-box-shadow-blue: color-mix(in srgb, var(--wui-color-accent-100) 16%, transparent);

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            var(--w3m-default)
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            var(--w3m-default)
          );

          --wui-color-accent-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-color-accent-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );

          --wui-accent-glass-090: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 90%,
            transparent
          );
          --wui-accent-glass-080: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 80%,
            transparent
          );
          --wui-accent-glass-020: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 20%,
            transparent
          );
          --wui-accent-glass-015: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 15%,
            transparent
          );
          --wui-accent-glass-010: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 10%,
            transparent
          );
          --wui-accent-glass-005: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 5%,
            transparent
          );
          --wui-color-accent-002: color-mix(
            in srgb,
            var(--wui-color-accent-base-100) 2%,
            transparent
          );

          --wui-color-fg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-100)
          );
          --wui-color-fg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-125)
          );
          --wui-color-fg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-150)
          );
          --wui-color-fg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-175)
          );
          --wui-color-fg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-200)
          );
          --wui-color-fg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-225)
          );
          --wui-color-fg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-250)
          );
          --wui-color-fg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-275)
          );
          --wui-color-fg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-fg-base-300)
          );

          --wui-color-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-100)
          );
          --wui-color-bg-125: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-125)
          );
          --wui-color-bg-150: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-150)
          );
          --wui-color-bg-175: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-175)
          );
          --wui-color-bg-200: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-200)
          );
          --wui-color-bg-225: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-225)
          );
          --wui-color-bg-250: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-250)
          );
          --wui-color-bg-275: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-275)
          );
          --wui-color-bg-300: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-bg-base-300)
          );

          --wui-color-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-success-base-100)
          );
          --wui-color-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-color-error-base-100)
          );

          --wui-icon-box-bg-error-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-error-base-100)
          );
          --wui-icon-box-bg-accent-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-blue-base-100)
          );
          --wui-icon-box-bg-success-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-success-base-100)
          );
          --wui-icon-box-bg-inverse-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-icon-box-bg-inverse-base-100)
          );

          --wui-all-wallets-bg-100: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-all-wallets-bg-base-100)
          );

          --wui-avatar-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-avatar-border-base)
          );

          --wui-thumbnail-border: color-mix(
            in srgb,
            var(--w3m-color-mix) var(--w3m-color-mix-strength),
            var(--wui-thumbnail-border-base)
          );
        }
      }
    `,
                    light: l.iv `
      :root {
        --w3m-color-mix: ${(0,l.$m)(e?.["--w3m-color-mix"]||"#fff")};
        --w3m-accent: ${(0,l.$m)(e?.["--w3m-accent"]||"#47a1ff")};
        --w3m-default: #fff;

        --wui-color-modal-bg-base: #191a1a;

        --wui-color-blue-base-100: #47a1ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #59aaff;
        --wui-color-accent-base-080: #6cb4ff;

        --wui-accent-glass-base-090: rgba(71, 161, 255, 0.9);
        --wui-accent-glass-base-080: rgba(71, 161, 255, 0.8);
        --wui-accent-glass-base-020: rgba(71, 161, 255, 0.2);
        --wui-accent-glass-base-015: rgba(71, 161, 255, 0.15);
        --wui-accent-glass-base-010: rgba(71, 161, 255, 0.1);
        --wui-accent-glass-base-005: rgba(71, 161, 255, 0.05);
        --wui-accent-glass-base-002: rgba(71, 161, 255, 0.02);

        --wui-color-fg-base-100: #e4e7e7;
        --wui-color-fg-base-125: #d0d5d5;
        --wui-color-fg-base-150: #a8b1b1;
        --wui-color-fg-base-175: #a8b0b0;
        --wui-color-fg-base-200: #949e9e;
        --wui-color-fg-base-225: #868f8f;
        --wui-color-fg-base-250: #788080;
        --wui-color-fg-base-275: #788181;
        --wui-color-fg-base-300: #6e7777;

        --wui-color-bg-base-100: #141414;
        --wui-color-bg-base-125: #191a1a;
        --wui-color-bg-base-150: #1e1f1f;
        --wui-color-bg-base-175: #222525;
        --wui-color-bg-base-200: #272a2a;
        --wui-color-bg-base-225: #2c3030;
        --wui-color-bg-base-250: #313535;
        --wui-color-bg-base-275: #363b3b;
        --wui-color-bg-base-300: #3b4040;

        --wui-color-success-base-100: #26d962;
        --wui-color-error-base-100: #f25a67;

        --wui-icon-box-bg-error-base-100: #3c2426;
        --wui-icon-box-bg-blue-base-100: #20303f;
        --wui-icon-box-bg-success-base-100: #1f3a28;
        --wui-icon-box-bg-inverse-base-100: #243240;

        --wui-all-wallets-bg-base-100: #222b35;

        --wui-avatar-border-base: #252525;

        --wui-thumbnail-border-base: #252525;

        --wui-gray-glass-001: rgba(255, 255, 255, 0.01);
        --wui-gray-glass-002: rgba(255, 255, 255, 0.02);
        --wui-gray-glass-005: rgba(255, 255, 255, 0.05);
        --wui-gray-glass-010: rgba(255, 255, 255, 0.1);
        --wui-gray-glass-015: rgba(255, 255, 255, 0.15);
        --wui-gray-glass-020: rgba(255, 255, 255, 0.2);
        --wui-gray-glass-025: rgba(255, 255, 255, 0.25);
        --wui-gray-glass-030: rgba(255, 255, 255, 0.3);
        --wui-gray-glass-060: rgba(255, 255, 255, 0.6);
        --wui-gray-glass-080: rgba(255, 255, 255, 0.8);
      }
    `,
                    dark: l.iv `
      :root {
        --w3m-color-mix: ${(0,l.$m)(e?.["--w3m-color-mix"]||"#000")};
        --w3m-accent: ${(0,l.$m)(e?.["--w3m-accent"]||"#3396ff")};
        --w3m-default: #000;

        --wui-color-modal-bg-base: #fff;

        --wui-color-blue-base-100: #3396ff;

        --wui-color-accent-base-100: var(--w3m-accent);
        --wui-color-accent-base-090: #2d7dd2;
        --wui-color-accent-base-080: #2978cc;

        --wui-accent-glass-base-090: rgba(51, 150, 255, 0.9);
        --wui-accent-glass-base-080: rgba(51, 150, 255, 0.8);
        --wui-accent-glass-base-020: rgba(51, 150, 255, 0.2);
        --wui-accent-glass-base-015: rgba(51, 150, 255, 0.15);
        --wui-accent-glass-base-010: rgba(51, 150, 255, 0.1);
        --wui-accent-glass-base-005: rgba(51, 150, 255, 0.05);
        --wui-accent-glass-base-002: rgba(51, 150, 255, 0.02);

        --wui-color-fg-base-100: #141414;
        --wui-color-fg-base-125: #2d3131;
        --wui-color-fg-base-150: #474d4d;
        --wui-color-fg-base-175: #636d6d;
        --wui-color-fg-base-200: #798686;
        --wui-color-fg-base-225: #828f8f;
        --wui-color-fg-base-250: #8b9797;
        --wui-color-fg-base-275: #95a0a0;
        --wui-color-fg-base-300: #9ea9a9;

        --wui-color-bg-base-100: #ffffff;
        --wui-color-bg-base-125: #f5fafa;
        --wui-color-bg-base-150: #f3f8f8;
        --wui-color-bg-base-175: #eef4f4;
        --wui-color-bg-base-200: #eaf1f1;
        --wui-color-bg-base-225: #e5eded;
        --wui-color-bg-base-250: #e1e9e9;
        --wui-color-bg-base-275: #dce7e7;
        --wui-color-bg-base-300: #d8e3e3;

        --wui-color-success-base-100: #26b562;
        --wui-color-error-base-100: #f05142;

        --wui-icon-box-bg-error-base-100: #f4dfdd;
        --wui-icon-box-bg-blue-base-100: #d9ecfb;
        --wui-icon-box-bg-success-base-100: #daf0e4;
        --wui-icon-box-bg-inverse-base-100: #dcecfc;

        --wui-all-wallets-bg-base-100: #e8f1fa;

        --wui-avatar-border-base: #f3f4f4;

        --wui-thumbnail-border-base: #eaefef;

        --wui-gray-glass-001: rgba(0, 0, 0, 0.01);
        --wui-gray-glass-002: rgba(0, 0, 0, 0.02);
        --wui-gray-glass-005: rgba(0, 0, 0, 0.05);
        --wui-gray-glass-010: rgba(0, 0, 0, 0.1);
        --wui-gray-glass-015: rgba(0, 0, 0, 0.15);
        --wui-gray-glass-020: rgba(0, 0, 0, 0.2);
        --wui-gray-glass-025: rgba(0, 0, 0, 0.25);
        --wui-gray-glass-030: rgba(0, 0, 0, 0.3);
        --wui-gray-glass-060: rgba(0, 0, 0, 0.6);
        --wui-gray-glass-080: rgba(0, 0, 0, 0.8);
      }
    `
                }
            }
            let p = l.iv `
  *,
  *::after,
  *::before,
  :host {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-style: normal;
    text-rendering: optimizeSpeed;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-tap-highlight-color: transparent;
    font-family: var(--wui-font-family);
    backface-visibility: hidden;
  }
`,
                f = l.iv `
  button,
  a {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
    outline: none;
    border: 1px solid transparent;
    column-gap: var(--wui-spacing-3xs);
    background-color: transparent;
    text-decoration: none;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-005);
    }

    button:active:enabled {
      transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
      background-color: var(--wui-gray-glass-010);
    }

    button[data-variant='fill']:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button[data-variant='accentBg']:hover:enabled {
      background: var(--wui-accent-glass-015);
    }

    button[data-variant='accentBg']:active:enabled {
      background: var(--wui-accent-glass-020);
    }
  }

  button:disabled {
    cursor: not-allowed;
    background-color: var(--wui-gray-glass-005);
  }

  button[data-variant='shade']:disabled,
  button[data-variant='accent']:disabled,
  button[data-variant='accentBg']:disabled {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-gray-glass-015);
    filter: grayscale(1);
  }

  button:disabled > wui-wallet-image,
  button:disabled > wui-all-wallets-image,
  button:disabled > wui-network-image,
  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-transaction-visual,
  button:disabled > wui-logo {
    filter: grayscale(1);
  }

  button:focus-visible,
  a:focus-visible {
    border: 1px solid var(--wui-color-accent-100);
    background-color: var(--wui-gray-glass-005);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  button[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  button[data-variant='fill']:disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
  }

  button[data-variant='fill']:disabled > wui-icon {
    color: var(--wui-gray-glass-015);
  }

  button[data-variant='shade'] {
    color: var(--wui-color-fg-200);
  }

  button[data-variant='accent'],
  button[data-variant='accentBg'] {
    color: var(--wui-color-accent-100);
  }

  button[data-variant='accentBg'] {
    background: var(--wui-accent-glass-010);
    border: 1px solid var(--wui-accent-glass-010);
  }

  button[data-variant='fullWidth'] {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    height: 56px;
    border: none;
    background-color: var(--wui-gray-glass-002);
    color: var(--wui-color-fg-200);
    gap: var(--wui-spacing-xs);
  }

  button:active:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  button[data-variant='fill']:active:enabled {
    background-color: var(--wui-color-accent-080);
    border: 1px solid var(--wui-gray-glass-010);
  }

  input {
    border: none;
    outline: none;
    appearance: none;
  }
`,
                g = l.iv `
  .wui-color-inherit {
    color: var(--wui-color-inherit);
  }

  .wui-color-accent-100 {
    color: var(--wui-color-accent-100);
  }

  .wui-color-error-100 {
    color: var(--wui-color-error-100);
  }

  .wui-color-success-100 {
    color: var(--wui-color-success-100);
  }

  .wui-color-inverse-100 {
    color: var(--wui-color-inverse-100);
  }

  .wui-color-inverse-000 {
    color: var(--wui-color-inverse-000);
  }

  .wui-color-fg-100 {
    color: var(--wui-color-fg-100);
  }

  .wui-color-fg-200 {
    color: var(--wui-color-fg-200);
  }

  .wui-color-fg-300 {
    color: var(--wui-color-fg-300);
  }

  .wui-bg-color-inherit {
    background-color: var(--wui-color-inherit);
  }

  .wui-bg-color-blue-100 {
    background-color: var(--wui-color-accent-100);
  }

  .wui-bg-color-error-100 {
    background-color: var(--wui-color-error-100);
  }

  .wui-bg-color-success-100 {
    background-color: var(--wui-color-success-100);
  }

  .wui-bg-color-inverse-100 {
    background-color: var(--wui-color-inverse-100);
  }

  .wui-bg-color-inverse-000 {
    background-color: var(--wui-color-inverse-000);
  }

  .wui-bg-color-fg-100 {
    background-color: var(--wui-color-fg-100);
  }

  .wui-bg-color-fg-200 {
    background-color: var(--wui-color-fg-200);
  }

  .wui-bg-color-fg-300 {
    background-color: var(--wui-color-fg-300);
  }
`;

            function w(e) {
                return function(t) {
                    return "function" == typeof t ? (customElements.get(e) || customElements.define(e, t), t) : function(e, t) {
                        let {
                            kind: r,
                            elements: i
                        } = t;
                        return {
                            kind: r,
                            elements: i,
                            finisher(t) {
                                customElements.get(e) || customElements.define(e, t)
                            }
                        }
                    }(e, t)
                }
            }
            var m = l.iv `
  :host {
    display: block;
    border-radius: clamp(0px, var(--wui-border-radius-l), 44px);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-modal-bg);
    overflow: hidden;
  }
`;
            let v = class extends l.oi {
                render() {
                    return l.dy `<slot></slot>`
                }
            };
            v.styles = [p, m], v = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }([w("wui-card")], v);
            var b = r(6591),
                y = l.iv `
  :host {
    display: flex;
    aspect-ratio: 1 / 1;
    color: var(--local-color);
    width: var(--local-width);
  }

  svg {
    width: inherit;
    height: inherit;
    object-fit: contain;
    object-position: center;
  }
`;
            let C = l.YP `<svg fill="none" viewBox="0 0 24 24">
  <path
    style="fill: var(--wui-color-accent-100);"
    d="M10.2 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 6.6a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM10.2 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0ZM21 17.4a3.6 3.6 0 1 1-7.2 0 3.6 3.6 0 0 1 7.2 0Z"
  />
</svg>`,
                x = l.YP `
<svg width="36" height="36">
  <path
    d="M28.724 0H7.271A7.269 7.269 0 0 0 0 7.272v21.46A7.268 7.268 0 0 0 7.271 36H28.73A7.272 7.272 0 0 0 36 28.728V7.272A7.275 7.275 0 0 0 28.724 0Z"
    fill="url(#a)"
  />
  <path
    d="m17.845 8.271.729-1.26a1.64 1.64 0 1 1 2.843 1.638l-7.023 12.159h5.08c1.646 0 2.569 1.935 1.853 3.276H6.434a1.632 1.632 0 0 1-1.638-1.638c0-.909.73-1.638 1.638-1.638h4.176l5.345-9.265-1.67-2.898a1.642 1.642 0 0 1 2.844-1.638l.716 1.264Zm-6.317 17.5-1.575 2.732a1.64 1.64 0 1 1-2.844-1.638l1.17-2.025c1.323-.41 2.398-.095 3.249.931Zm13.56-4.954h4.262c.909 0 1.638.729 1.638 1.638 0 .909-.73 1.638-1.638 1.638h-2.367l1.597 2.772c.45.788.185 1.782-.602 2.241a1.642 1.642 0 0 1-2.241-.603c-2.69-4.666-4.711-8.159-6.052-10.485-1.372-2.367-.391-4.743.576-5.549 1.075 1.846 2.682 4.631 4.828 8.348Z"
    fill="#fff"
  />
  <defs>
    <linearGradient id="a" x1="18" y1="0" x2="18" y2="36" gradientUnits="userSpaceOnUse">
      <stop stop-color="#18BFFB" />
      <stop offset="1" stop-color="#2072F3" />
    </linearGradient>
  </defs>
</svg>`,
                _ = l.YP `<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#000" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M28.77 23.3c-.69 1.99-2.75 5.52-4.87 5.56-1.4.03-1.86-.84-3.46-.84-1.61 0-2.12.81-3.45.86-2.25.1-5.72-5.1-5.72-9.62 0-4.15 2.9-6.2 5.42-6.25 1.36-.02 2.64.92 3.47.92.83 0 2.38-1.13 4.02-.97.68.03 2.6.28 3.84 2.08-3.27 2.14-2.76 6.61.75 8.25ZM24.2 7.88c-2.47.1-4.49 2.69-4.2 4.84 2.28.17 4.47-2.39 4.2-4.84Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,
                E = l.YP `<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 1.99a1 1 0 0 1 1 1v7.58l2.46-2.46a1 1 0 0 1 1.41 1.42L7.7 13.69a1 1 0 0 1-1.41 0L2.12 9.53A1 1 0 0 1 3.54 8.1L6 10.57V3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,
                S = l.YP `<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13 7.99a1 1 0 0 1-1 1H4.4l2.46 2.46a1 1 0 1 1-1.41 1.41L1.29 8.7a1 1 0 0 1 0-1.41L5.46 3.1a1 1 0 0 1 1.41 1.42L4.41 6.99H12a1 1 0 0 1 1 1Z"
    clip-rule="evenodd"
  />
</svg>`,
                k = l.YP `<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1 7.99a1 1 0 0 1 1-1h7.58L7.12 4.53A1 1 0 1 1 8.54 3.1l4.16 4.17a1 1 0 0 1 0 1.41l-4.16 4.17a1 1 0 1 1-1.42-1.41l2.46-2.46H2a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,
                A = l.YP `<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 13.99a1 1 0 0 1-1-1V5.4L3.54 7.86a1 1 0 0 1-1.42-1.41L6.3 2.28a1 1 0 0 1 1.41 0l4.17 4.17a1 1 0 1 1-1.41 1.41L8 5.4v7.59a1 1 0 0 1-1 1Z"
    clip-rule="evenodd"
  />
</svg>`,
                D = l.YP `<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4 6.4a1 1 0 0 1-.46.89 6.98 6.98 0 0 0 .38 6.18A7 7 0 0 0 16.46 7.3a1 1 0 0 1-.47-.92 7 7 0 0 0-12 .03Zm-2.02-.5a9 9 0 1 1 16.03 8.2A9 9 0 0 1 1.98 5.9Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.03 8.63c-1.46-.3-2.72-.75-3.6-1.35l-.02-.01-.14-.11a1 1 0 0 1 1.2-1.6l.1.08c.6.4 1.52.74 2.69 1 .16-.99.39-1.88.67-2.65.3-.79.68-1.5 1.15-2.02A2.58 2.58 0 0 1 9.99 1c.8 0 1.45.44 1.92.97.47.52.84 1.23 1.14 2.02.29.77.52 1.66.68 2.64a8 8 0 0 0 2.7-1l.26-.18h.48a1 1 0 0 1 .12 2c-.86.51-2.01.91-3.34 1.18a22.24 22.24 0 0 1-.03 3.19c1.45.29 2.7.73 3.58 1.31a1 1 0 0 1-1.1 1.68c-.6-.4-1.56-.76-2.75-1-.15.8-.36 1.55-.6 2.2-.3.79-.67 1.5-1.14 2.02-.47.53-1.12.97-1.92.97-.8 0-1.45-.44-1.91-.97a6.51 6.51 0 0 1-1.15-2.02c-.24-.65-.44-1.4-.6-2.2-1.18.24-2.13.6-2.73.99a1 1 0 1 1-1.1-1.67c.88-.58 2.12-1.03 3.57-1.31a22.03 22.03 0 0 1-.04-3.2Zm2.2-1.7c.15-.86.34-1.61.58-2.24.24-.65.51-1.12.76-1.4.25-.28.4-.29.42-.29.03 0 .17.01.42.3.25.27.52.74.77 1.4.23.62.43 1.37.57 2.22a19.96 19.96 0 0 1-3.52 0Zm-.18 4.6a20.1 20.1 0 0 1-.03-2.62 21.95 21.95 0 0 0 3.94 0 20.4 20.4 0 0 1-.03 2.63 21.97 21.97 0 0 0-3.88 0Zm.27 2c.13.66.3 1.26.49 1.78.24.65.51 1.12.76 1.4.25.28.4.29.42.29.03 0 .17-.01.42-.3.25-.27.52-.74.77-1.4.19-.5.36-1.1.49-1.78a20.03 20.03 0 0 0-3.35 0Z"
    clip-rule="evenodd"
  />
</svg>`,
                $ = l.YP `<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M12.04 2.65c.47.3.6.91.3 1.38l-5.78 9a1 1 0 0 1-1.61.1L1.73 9.27A1 1 0 1 1 3.27 8L5.6 10.8l5.05-7.85a1 1 0 0 1 1.38-.3Z"
    clip-rule="evenodd"
  />
</svg>`,
                R = l.YP `<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M1.46 4.96a1 1 0 0 1 1.41 0L8 10.09l5.13-5.13a1 1 0 1 1 1.41 1.41l-5.83 5.84a1 1 0 0 1-1.42 0L1.46 6.37a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,
                O = l.YP `<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M11.04 1.46a1 1 0 0 1 0 1.41L5.91 8l5.13 5.13a1 1 0 1 1-1.41 1.41L3.79 8.71a1 1 0 0 1 0-1.42l5.84-5.83a1 1 0 0 1 1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,
                I = l.YP `<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.96 14.54a1 1 0 0 1 0-1.41L10.09 8 4.96 2.87a1 1 0 0 1 1.41-1.41l5.84 5.83a1 1 0 0 1 0 1.42l-5.84 5.83a1 1 0 0 1-1.41 0Z"
    clip-rule="evenodd"
  />
</svg>`,
                T = l.YP `<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M14.54 11.04a1 1 0 0 1-1.41 0L8 5.92l-5.13 5.12a1 1 0 1 1-1.41-1.41l5.83-5.84a1 1 0 0 1 1.42 0l5.83 5.84a1 1 0 0 1 0 1.41Z"
    clip-rule="evenodd"
  />
</svg>`,
                N = l.YP `<svg width="36" height="36" fill="none">
  <path
    fill="#fff"
    fill-opacity=".05"
    d="M0 14.94c0-5.55 0-8.326 1.182-10.4a9 9 0 0 1 3.359-3.358C6.614 0 9.389 0 14.94 0h6.12c5.55 0 8.326 0 10.4 1.182a9 9 0 0 1 3.358 3.359C36 6.614 36 9.389 36 14.94v6.12c0 5.55 0 8.326-1.182 10.4a9 9 0 0 1-3.359 3.358C29.386 36 26.611 36 21.06 36h-6.12c-5.55 0-8.326 0-10.4-1.182a9 9 0 0 1-3.358-3.359C0 29.386 0 26.611 0 21.06v-6.12Z"
  />
  <path
    stroke="#fff"
    stroke-opacity=".05"
    d="M14.94.5h6.12c2.785 0 4.84 0 6.46.146 1.612.144 2.743.43 3.691.97a8.5 8.5 0 0 1 3.172 3.173c.541.948.826 2.08.971 3.692.145 1.62.146 3.675.146 6.459v6.12c0 2.785 0 4.84-.146 6.46-.145 1.612-.43 2.743-.97 3.691a8.5 8.5 0 0 1-3.173 3.172c-.948.541-2.08.826-3.692.971-1.62.145-3.674.146-6.459.146h-6.12c-2.784 0-4.84 0-6.46-.146-1.612-.145-2.743-.43-3.691-.97a8.5 8.5 0 0 1-3.172-3.173c-.541-.948-.827-2.08-.971-3.692C.5 25.9.5 23.845.5 21.06v-6.12c0-2.784 0-4.84.146-6.46.144-1.612.43-2.743.97-3.691A8.5 8.5 0 0 1 4.79 1.617C5.737 1.076 6.869.79 8.48.646 10.1.5 12.156.5 14.94.5Z"
  />
  <path
    fill="url(#a)"
    d="M17.998 10.8h12.469a14.397 14.397 0 0 0-24.938.001l6.234 10.798.006-.001a7.19 7.19 0 0 1 6.23-10.799Z"
  />
  <path
    fill="url(#b)"
    d="m24.237 21.598-6.234 10.798A14.397 14.397 0 0 0 30.47 10.798H18.002l-.002.006a7.191 7.191 0 0 1 6.237 10.794Z"
  />
  <path
    fill="url(#c)"
    d="M11.765 21.601 5.531 10.803A14.396 14.396 0 0 0 18.001 32.4l6.235-10.798-.004-.004a7.19 7.19 0 0 1-12.466.004Z"
  />
  <path fill="#fff" d="M18 25.2a7.2 7.2 0 1 0 0-14.4 7.2 7.2 0 0 0 0 14.4Z" />
  <path fill="#1A73E8" d="M18 23.7a5.7 5.7 0 1 0 0-11.4 5.7 5.7 0 0 0 0 11.4Z" />
  <defs>
    <linearGradient
      id="a"
      x1="6.294"
      x2="41.1"
      y1="5.995"
      y2="5.995"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#D93025" />
      <stop offset="1" stop-color="#EA4335" />
    </linearGradient>
    <linearGradient
      id="b"
      x1="20.953"
      x2="37.194"
      y1="32.143"
      y2="2.701"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#FCC934" />
      <stop offset="1" stop-color="#FBBC04" />
    </linearGradient>
    <linearGradient
      id="c"
      x1="25.873"
      x2="9.632"
      y1="31.2"
      y2="1.759"
      gradientUnits="userSpaceOnUse"
    >
      <stop stop-color="#1E8E3E" />
      <stop offset="1" stop-color="#34A853" />
    </linearGradient>
  </defs>
</svg>`,
                P = l.YP `<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 2.99a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-7 5a7 7 0 1 1 14 0 7 7 0 0 1-14 0Zm7-4a1 1 0 0 1 1 1v2.58l1.85 1.85a1 1 0 0 1-1.41 1.42L6.29 8.69A1 1 0 0 1 6 8v-3a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,
                U = l.YP `<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M2.54 2.54a1 1 0 0 1 1.42 0L8 6.6l4.04-4.05a1 1 0 1 1 1.42 1.42L9.4 8l4.05 4.04a1 1 0 0 1-1.42 1.42L8 9.4l-4.04 4.05a1 1 0 0 1-1.42-1.42L6.6 8 2.54 3.96a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,
                M = l.YP `<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 3a7 7 0 0 0-6.85 8.44l8.29-8.3C10.97 3.06 10.49 3 10 3Zm3.49.93-9.56 9.56c.32.55.71 1.06 1.16 1.5L15 5.1a7.03 7.03 0 0 0-1.5-1.16Zm2.7 2.8-9.46 9.46a7 7 0 0 0 9.46-9.46ZM1.99 5.9A9 9 0 1 1 18 14.09 9 9 0 0 1 1.98 5.91Z"
    clip-rule="evenodd"
  />
</svg>`,
                j = l.YP `<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2ZM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm10.66-2.65a1 1 0 0 1 .23 1.06L9.83 9.24a1 1 0 0 1-.59.58l-2.83 1.06A1 1 0 0 1 5.13 9.6l1.06-2.82a1 1 0 0 1 .58-.59L9.6 5.12a1 1 0 0 1 1.06.23ZM7.9 7.89l-.13.35.35-.13.12-.35-.34.13Z"
    clip-rule="evenodd"
  />
</svg>`,
                L = l.YP `<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.5 0h1.67c.68 0 1.26 0 1.73.04.5.05.97.14 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73V6.5c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.43.03-.95.03-1.57.03 0 .62 0 1.14-.04 1.57-.04.5-.14.97-.4 1.42-.29.52-.72.95-1.24 1.24-.44.26-.92.35-1.41.4-.48.04-1.05.04-1.74.04H4.83c-.68 0-1.26 0-1.73-.04-.5-.05-.97-.14-1.42-.4-.52-.3-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.42A20.9 20.9 0 0 1 0 11.17V9.5c0-.69 0-1.26.04-1.74.05-.5.14-.97.4-1.41.3-.52.72-.95 1.24-1.25.45-.25.92-.35 1.42-.4.43-.03.95-.03 1.57-.03 0-.62 0-1.14.04-1.57.04-.5.14-.97.4-1.42.29-.52.72-.95 1.24-1.24.44-.26.92-.35 1.41-.4A20.9 20.9 0 0 1 9.5 0ZM4.67 6.67c-.63 0-1.06 0-1.4.03-.35.03-.5.09-.6.14-.2.12-.38.3-.5.5-.05.1-.1.24-.14.6C2 8.32 2 8.8 2 9.54v1.59c0 .73 0 1.22.03 1.6.04.35.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h1.58c.74 0 1.22 0 1.6-.03.36-.04.5-.1.6-.15.2-.11.38-.29.5-.5.05-.09.1-.24.14-.6.03-.33.03-.76.03-1.39-.6 0-1.13 0-1.57-.04-.5-.04-.97-.14-1.41-.4-.52-.29-.95-.72-1.25-1.24a3.39 3.39 0 0 1-.4-1.41c-.03-.44-.03-.96-.03-1.57Zm3.27-4.64c-.36.04-.5.1-.6.15-.2.11-.38.29-.5.5-.05.09-.1.24-.14.6-.03.37-.03.86-.03 1.6v1.58c0 .74 0 1.22.03 1.6.03.36.09.5.14.6.12.2.3.38.5.5.1.05.24.1.6.14.38.03.86.03 1.6.03h1.59c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6V4.87c0-.73 0-1.22-.03-1.6a1.46 1.46 0 0 0-.15-.6c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.14-.37-.03-.86-.03-1.6-.03H9.55c-.74 0-1.22 0-1.6.03Z"
    clip-rule="evenodd"
  />
</svg>`,
                B = l.YP ` <svg fill="none" viewBox="0 0 13 4">
  <path fill="currentColor" d="M.5 0h12L8.9 3.13a3.76 3.76 0 0 1-4.8 0L.5 0Z" />
</svg>`,
                z = l.YP `<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M13.66 2H6.34c-1.07 0-1.96 0-2.68.08-.74.08-1.42.25-2.01.68a4 4 0 0 0-.89.89c-.43.6-.6 1.27-.68 2.01C0 6.38 0 7.26 0 8.34v.89c0 1.07 0 1.96.08 2.68.08.74.25 1.42.68 2.01a4 4 0 0 0 .89.89c.6.43 1.27.6 2.01.68a27 27 0 0 0 2.68.08h7.32a27 27 0 0 0 2.68-.08 4.03 4.03 0 0 0 2.01-.68 4 4 0 0 0 .89-.89c.43-.6.6-1.27.68-2.01.08-.72.08-1.6.08-2.68v-.89c0-1.07 0-1.96-.08-2.68a4.04 4.04 0 0 0-.68-2.01 4 4 0 0 0-.89-.89c-.6-.43-1.27-.6-2.01-.68C15.62 2 14.74 2 13.66 2ZM2.82 4.38c.2-.14.48-.25 1.06-.31C4.48 4 5.25 4 6.4 4h7.2c1.15 0 1.93 0 2.52.07.58.06.86.17 1.06.31a2 2 0 0 1 .44.44c.14.2.25.48.31 1.06.07.6.07 1.37.07 2.52v.77c0 1.15 0 1.93-.07 2.52-.06.58-.17.86-.31 1.06a2 2 0 0 1-.44.44c-.2.14-.48.25-1.06.32-.6.06-1.37.06-2.52.06H6.4c-1.15 0-1.93 0-2.52-.06-.58-.07-.86-.18-1.06-.32a2 2 0 0 1-.44-.44c-.14-.2-.25-.48-.31-1.06C2 11.1 2 10.32 2 9.17V8.4c0-1.15 0-1.93.07-2.52.06-.58.17-.86.31-1.06a2 2 0 0 1 .44-.44Z"
    clip-rule="evenodd"
  />
  <path fill="currentColor" d="M6.14 17.57a1 1 0 1 0 0 2h7.72a1 1 0 1 0 0-2H6.14Z" />
</svg>`,
                W = l.YP `<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.07 1h.57a1 1 0 0 1 0 2h-.52c-.98 0-1.64 0-2.14.06-.48.05-.7.14-.84.24-.13.1-.25.22-.34.35-.1.14-.2.35-.25.83-.05.5-.05 1.16-.05 2.15v2.74c0 .99 0 1.65.05 2.15.05.48.14.7.25.83.1.14.2.25.34.35.14.1.36.2.84.25.5.05 1.16.05 2.14.05h.52a1 1 0 0 1 0 2h-.57c-.92 0-1.69 0-2.3-.07a3.6 3.6 0 0 1-1.8-.61c-.3-.22-.57-.49-.8-.8a3.6 3.6 0 0 1-.6-1.79C.5 11.11.5 10.35.5 9.43V6.58c0-.92 0-1.7.06-2.31a3.6 3.6 0 0 1 .62-1.8c.22-.3.48-.57.79-.79a3.6 3.6 0 0 1 1.8-.61C4.37 1 5.14 1 6.06 1ZM9.5 3a1 1 0 0 1 1.42 0l4.28 4.3a1 1 0 0 1 0 1.4L10.93 13a1 1 0 0 1-1.42-1.42L12.1 9H6.8a1 1 0 1 1 0-2h5.3L9.51 4.42a1 1 0 0 1 0-1.41Z"
    clip-rule="evenodd"
  />
</svg>`,
                Z = l.YP `<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,
                F = l.YP `<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M4.25 7a.63.63 0 0 0-.63.63v3.97c0 .28-.2.51-.47.54l-.75.07a.93.93 0 0 1-.9-.47A7.51 7.51 0 0 1 5.54.92a7.5 7.5 0 0 1 9.54 4.62c.12.35.06.72-.16 1-.74.97-1.68 1.78-2.6 2.44V4.44a.64.64 0 0 0-.63-.64h-1.06c-.35 0-.63.3-.63.64v5.5c0 .23-.12.42-.32.5l-.52.23V6.05c0-.36-.3-.64-.64-.64H7.45c-.35 0-.64.3-.64.64v4.97c0 .25-.17.46-.4.52a5.8 5.8 0 0 0-.45.11v-4c0-.36-.3-.65-.64-.65H4.25ZM14.07 12.4A7.49 7.49 0 0 1 3.6 14.08c4.09-.58 9.14-2.5 11.87-6.6v.03a7.56 7.56 0 0 1-1.41 4.91Z"
  />
</svg>`,
                H = l.YP `<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.71 2.99a.57.57 0 0 0-.57.57 1 1 0 0 1-1 1c-.58 0-.96 0-1.24.03-.27.03-.37.07-.42.1a.97.97 0 0 0-.36.35c-.04.08-.09.21-.11.67a2.57 2.57 0 0 1 0 5.13c.02.45.07.6.11.66.09.15.21.28.36.36.07.04.21.1.67.12a2.57 2.57 0 0 1 5.12 0c.46-.03.6-.08.67-.12a.97.97 0 0 0 .36-.36c.03-.04.07-.14.1-.41.02-.29.03-.66.03-1.24a1 1 0 0 1 1-1 .57.57 0 0 0 0-1.15 1 1 0 0 1-1-1c0-.58 0-.95-.03-1.24a1.04 1.04 0 0 0-.1-.42.97.97 0 0 0-.36-.36 1.04 1.04 0 0 0-.42-.1c-.28-.02-.65-.02-1.24-.02a1 1 0 0 1-1-1 .57.57 0 0 0-.57-.57ZM5.15 13.98a1 1 0 0 0 .99-1v-.78a.57.57 0 0 1 1.14 0v.78a1 1 0 0 0 .99 1H8.36a66.26 66.26 0 0 0 .73 0 3.78 3.78 0 0 0 1.84-.38c.46-.26.85-.64 1.1-1.1.23-.4.32-.8.36-1.22.02-.2.03-.4.03-.63a2.57 2.57 0 0 0 0-4.75c0-.23-.01-.44-.03-.63a2.96 2.96 0 0 0-.35-1.22 2.97 2.97 0 0 0-1.1-1.1c-.4-.22-.8-.31-1.22-.35a8.7 8.7 0 0 0-.64-.04 2.57 2.57 0 0 0-4.74 0c-.23 0-.44.02-.63.04-.42.04-.83.13-1.22.35-.46.26-.84.64-1.1 1.1-.33.57-.37 1.2-.39 1.84a21.39 21.39 0 0 0 0 .72v.1a1 1 0 0 0 1 .99h.78a.57.57 0 0 1 0 1.15h-.77a1 1 0 0 0-1 .98v.1a63.87 63.87 0 0 0 0 .73c0 .64.05 1.27.38 1.83.26.47.64.85 1.1 1.11.56.32 1.2.37 1.84.38a20.93 20.93 0 0 0 .72 0h.1Z"
    clip-rule="evenodd"
  />
</svg>`,
                V = l.YP `<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.74 3.99a1 1 0 0 1 1-1H11a1 1 0 0 1 1 1v6.26a1 1 0 0 1-2 0V6.4l-6.3 6.3a1 1 0 0 1-1.4-1.42l6.29-6.3H4.74a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,
                Y = l.YP `<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1877F2" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M26 12.38h-2.89c-.92 0-1.61.38-1.61 1.34v1.66H26l-.36 4.5H21.5v12H17v-12h-3v-4.5h3V12.5c0-3.03 1.6-4.62 5.2-4.62H26v4.5Z"
        />
      </g>
    </g>
    <path
      fill="#1877F2"
      d="M40 20a20 20 0 1 0-23.13 19.76V25.78H11.8V20h5.07v-4.4c0-5.02 3-7.79 7.56-7.79 2.19 0 4.48.4 4.48.4v4.91h-2.53c-2.48 0-3.25 1.55-3.25 3.13V20h5.54l-.88 5.78h-4.66v13.98A20 20 0 0 0 40 20Z"
    />
    <path
      fill="#fff"
      d="m27.79 25.78.88-5.78h-5.55v-3.75c0-1.58.78-3.13 3.26-3.13h2.53V8.2s-2.3-.39-4.48-.39c-4.57 0-7.55 2.77-7.55 7.78V20H11.8v5.78h5.07v13.98a20.15 20.15 0 0 0 6.25 0V25.78h4.67Z"
    />
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,
                K = l.YP `<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 3a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H1a1 1 0 0 1-1-1Zm2.63 5.25a1 1 0 0 1 1-1h8.75a1 1 0 1 1 0 2H3.63a1 1 0 0 1-1-1Zm2.62 5.25a1 1 0 0 1 1-1h3.5a1 1 0 0 1 0 2h-3.5a1 1 0 0 1-1-1Z"
    clip-rule="evenodd"
  />
</svg>`,
                q = l.YP `<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1B1F23" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M8 19.89a12 12 0 1 1 15.8 11.38c-.6.12-.8-.26-.8-.57v-3.3c0-1.12-.4-1.85-.82-2.22 2.67-.3 5.48-1.31 5.48-5.92 0-1.31-.47-2.38-1.24-3.22.13-.3.54-1.52-.12-3.18 0 0-1-.32-3.3 1.23a11.54 11.54 0 0 0-6 0c-2.3-1.55-3.3-1.23-3.3-1.23a4.32 4.32 0 0 0-.12 3.18 4.64 4.64 0 0 0-1.24 3.22c0 4.6 2.8 5.63 5.47 5.93-.34.3-.65.83-.76 1.6-.69.31-2.42.84-3.5-1 0 0-.63-1.15-1.83-1.23 0 0-1.18-.02-.09.73 0 0 .8.37 1.34 1.76 0 0 .7 2.14 4.03 1.41v2.24c0 .31-.2.68-.8.57A12 12 0 0 1 8 19.9Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,
                G = l.YP `<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#fff" fill-opacity=".05" />
      <g clip-path="url(#c)">
        <path
          fill="#4285F4"
          d="M20 17.7v4.65h6.46a5.53 5.53 0 0 1-2.41 3.61l3.9 3.02c2.26-2.09 3.57-5.17 3.57-8.82 0-.85-.08-1.67-.22-2.46H20Z"
        />
        <path
          fill="#34A853"
          d="m13.27 22.17-.87.67-3.11 2.42A12 12 0 0 0 20 31.9c3.24 0 5.96-1.07 7.94-2.9l-3.9-3.03A7.15 7.15 0 0 1 20 27.12a7.16 7.16 0 0 1-6.72-4.94v-.01Z"
        />
        <path
          fill="#FBBC05"
          d="M9.29 14.5a11.85 11.85 0 0 0 0 10.76l3.99-3.1a7.19 7.19 0 0 1 0-4.55l-4-3.1Z"
        />
        <path
          fill="#EA4335"
          d="M20 12.66c1.77 0 3.34.61 4.6 1.8l3.43-3.44A11.51 11.51 0 0 0 20 7.89c-4.7 0-8.74 2.69-10.71 6.62l3.99 3.1A7.16 7.16 0 0 1 20 12.66Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,
                X = l.YP `<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="M8.51 5.66a.83.83 0 0 0-.57-.2.83.83 0 0 0-.52.28.8.8 0 0 0-.25.52 1 1 0 0 1-2 0c0-.75.34-1.43.81-1.91a2.75 2.75 0 0 1 4.78 1.92c0 1.24-.8 1.86-1.25 2.2l-.04.03c-.47.36-.5.43-.5.65a1 1 0 1 1-2 0c0-1.25.8-1.86 1.24-2.2l.04-.04c.47-.36.5-.43.5-.65 0-.3-.1-.49-.24-.6ZM9.12 11.87a1.13 1.13 0 1 1-2.25 0 1.13 1.13 0 0 1 2.25 0Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8Zm8-6a6 6 0 1 0 0 12A6 6 0 0 0 8 2Z"
    clip-rule="evenodd"
  />
</svg>`,
                J = l.YP `<svg fill="none" viewBox="0 0 14 15">
  <path
    fill="currentColor"
    d="M6 10.49a1 1 0 1 0 2 0v-2a1 1 0 0 0-2 0v2ZM7 4.49a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M7 14.99a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-7a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"
    clip-rule="evenodd"
  />
</svg>`,
                Q = l.YP `<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.83 1.34h6.34c.68 0 1.26 0 1.73.04.5.05.97.15 1.42.4.52.3.95.72 1.24 1.24.26.45.35.92.4 1.42.04.47.04 1.05.04 1.73v3.71c0 .69 0 1.26-.04 1.74-.05.5-.14.97-.4 1.41-.3.52-.72.95-1.24 1.25-.45.25-.92.35-1.42.4-.47.03-1.05.03-1.73.03H4.83c-.68 0-1.26 0-1.73-.04-.5-.04-.97-.14-1.42-.4-.52-.29-.95-.72-1.24-1.24a3.39 3.39 0 0 1-.4-1.41A20.9 20.9 0 0 1 0 9.88v-3.7c0-.7 0-1.27.04-1.74.05-.5.14-.97.4-1.42.3-.52.72-.95 1.24-1.24.45-.25.92-.35 1.42-.4.47-.04 1.05-.04 1.73-.04ZM3.28 3.38c-.36.03-.51.08-.6.14-.21.11-.39.29-.5.5a.8.8 0 0 0-.08.19l5.16 3.44c.45.3 1.03.3 1.48 0L13.9 4.2a.79.79 0 0 0-.08-.2c-.11-.2-.29-.38-.5-.5-.09-.05-.24-.1-.6-.13-.37-.04-.86-.04-1.6-.04H4.88c-.73 0-1.22 0-1.6.04ZM14 6.54 9.85 9.31a3.33 3.33 0 0 1-3.7 0L2 6.54v3.3c0 .74 0 1.22.03 1.6.04.36.1.5.15.6.11.2.29.38.5.5.09.05.24.1.6.14.37.03.86.03 1.6.03h6.25c.73 0 1.22 0 1.6-.03.35-.03.5-.09.6-.14.2-.12.38-.3.5-.5.05-.1.1-.24.14-.6.03-.38.03-.86.03-1.6v-3.3Z"
    clip-rule="evenodd"
  />
</svg>`,
                ee = l.YP `<svg fill="none" viewBox="0 0 20 20">
  <path fill="currentColor" d="M10.81 5.81a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3 4.75A4.75 4.75 0 0 1 7.75 0h4.5A4.75 4.75 0 0 1 17 4.75v10.5A4.75 4.75 0 0 1 12.25 20h-4.5A4.75 4.75 0 0 1 3 15.25V4.75ZM7.75 2A2.75 2.75 0 0 0 5 4.75v10.5A2.75 2.75 0 0 0 7.75 18h4.5A2.75 2.75 0 0 0 15 15.25V4.75A2.75 2.75 0 0 0 12.25 2h-4.5Z"
    clip-rule="evenodd"
  />
</svg>`,
                et = l.YP `<svg fill="none" viewBox="0 0 22 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M16.32 13.62a3.14 3.14 0 1 1-.99 1.72l-1.6-.93a3.83 3.83 0 0 1-3.71 1 3.66 3.66 0 0 1-1.74-1l-1.6.94a3.14 3.14 0 1 1-1-1.73l1.6-.94a3.7 3.7 0 0 1 0-2 3.81 3.81 0 0 1 1.8-2.33c.29-.17.6-.3.92-.38V6.1a3.14 3.14 0 1 1 2 0l-.01.02v1.85H12a3.82 3.82 0 0 1 2.33 1.8 3.7 3.7 0 0 1 .39 2.91l1.6.93ZM2.6 16.54a1.14 1.14 0 0 0 1.98-1.14 1.14 1.14 0 0 0-1.98 1.14ZM11 2.01a1.14 1.14 0 1 0 0 2.28 1.14 1.14 0 0 0 0-2.28Zm1.68 10.45c.08-.19.14-.38.16-.58v-.05l.02-.13v-.13a1.92 1.92 0 0 0-.24-.8l-.11-.15a1.89 1.89 0 0 0-.74-.6 1.86 1.86 0 0 0-.77-.17h-.19a1.97 1.97 0 0 0-.89.34 1.98 1.98 0 0 0-.61.74 1.99 1.99 0 0 0-.16.9v.05a1.87 1.87 0 0 0 .24.74l.1.15c.12.16.26.3.42.42l.16.1.13.07.04.02a1.84 1.84 0 0 0 .76.17h.17a2 2 0 0 0 .91-.35 1.78 1.78 0 0 0 .52-.58l.03-.05a.84.84 0 0 0 .05-.11Zm5.15 4.5a1.14 1.14 0 0 0 1.14-1.97 1.13 1.13 0 0 0-1.55.41c-.32.55-.13 1.25.41 1.56Z"
    clip-rule="evenodd"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M4.63 9.43a1.5 1.5 0 1 0 1.5-2.6 1.5 1.5 0 0 0-1.5 2.6Zm.32-1.55a.5.5 0 0 1 .68-.19.5.5 0 0 1 .18.68.5.5 0 0 1-.68.19.5.5 0 0 1-.18-.68ZM17.94 8.88a1.5 1.5 0 1 1-2.6-1.5 1.5 1.5 0 1 1 2.6 1.5ZM16.9 7.69a.5.5 0 0 0-.68.19.5.5 0 0 0 .18.68.5.5 0 0 0 .68-.19.5.5 0 0 0-.18-.68ZM9.75 17.75a1.5 1.5 0 1 1 2.6 1.5 1.5 1.5 0 1 1-2.6-1.5Zm1.05 1.18a.5.5 0 0 0 .68-.18.5.5 0 0 0-.18-.68.5.5 0 0 0-.68.18.5.5 0 0 0 .18.68Z"
    clip-rule="evenodd"
  />
</svg>`,
                er = l.YP `<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.13 1h1.71c1.46 0 2.63 0 3.56.1.97.1 1.8.33 2.53.85a5 5 0 0 1 1.1 1.11c.53.73.75 1.56.86 2.53.1.93.1 2.1.1 3.55v1.72c0 1.45 0 2.62-.1 3.55-.1.97-.33 1.8-.86 2.53a5 5 0 0 1-1.1 1.1c-.73.53-1.56.75-2.53.86-.93.1-2.1.1-3.55.1H9.13c-1.45 0-2.62 0-3.56-.1-.96-.1-1.8-.33-2.52-.85a5 5 0 0 1-1.1-1.11 5.05 5.05 0 0 1-.86-2.53c-.1-.93-.1-2.1-.1-3.55V9.14c0-1.45 0-2.62.1-3.55.1-.97.33-1.8.85-2.53a5 5 0 0 1 1.1-1.1 5.05 5.05 0 0 1 2.53-.86C6.51 1 7.67 1 9.13 1ZM5.79 3.09a3.1 3.1 0 0 0-1.57.48 3 3 0 0 0-.66.67c-.24.32-.4.77-.48 1.56-.1.82-.1 1.88-.1 3.4v1.6c0 1.15 0 2.04.05 2.76l.41-.42c.5-.5.93-.92 1.32-1.24.41-.33.86-.6 1.43-.7a3 3 0 0 1 .94 0c.35.06.66.2.95.37a17.11 17.11 0 0 0 .8.45c.1-.08.2-.2.41-.4l.04-.03a27 27 0 0 1 1.95-1.84 4.03 4.03 0 0 1 1.91-.94 4 4 0 0 1 1.25 0c.73.11 1.33.46 1.91.94l.64.55V9.2c0-1.52 0-2.58-.1-3.4a3.1 3.1 0 0 0-.48-1.56 3 3 0 0 0-.66-.67 3.1 3.1 0 0 0-1.56-.48C13.37 3 12.3 3 10.79 3h-1.6c-1.52 0-2.59 0-3.4.09Zm11.18 10-.04-.05a26.24 26.24 0 0 0-1.83-1.74c-.45-.36-.73-.48-.97-.52a2 2 0 0 0-.63 0c-.24.04-.51.16-.97.52-.46.38-1.01.93-1.83 1.74l-.02.02c-.17.18-.34.34-.49.47a2.04 2.04 0 0 1-1.08.5 1.97 1.97 0 0 1-1.25-.27l-.79-.46-.02-.02a.65.65 0 0 0-.24-.1 1 1 0 0 0-.31 0c-.08.02-.21.06-.49.28-.3.24-.65.59-1.2 1.14l-.56.56-.65.66a3 3 0 0 0 .62.6c.33.24.77.4 1.57.49.81.09 1.88.09 3.4.09h1.6c1.52 0 2.58 0 3.4-.09a3.1 3.1 0 0 0 1.56-.48 3 3 0 0 0 .66-.67c.24-.32.4-.77.49-1.56l.07-1.12Zm-8.02-1.03ZM4.99 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
    clip-rule="evenodd"
  />
</svg>`,
                ei = l.YP `<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M8 0a1 1 0 0 1 1 1v5.38a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1ZM5.26 2.6a1 1 0 0 1-.28 1.39 5.46 5.46 0 1 0 6.04 0 1 1 0 1 1 1.1-1.67 7.46 7.46 0 1 1-8.25 0 1 1 0 0 1 1.4.28Z"
    clip-rule="evenodd"
  />
</svg>`,
                en = l.YP ` <svg
  width="36"
  height="36"
  fill="none"
>
  <path
    d="M0 8a8 8 0 0 1 8-8h20a8 8 0 0 1 8 8v20a8 8 0 0 1-8 8H8a8 8 0 0 1-8-8V8Z"
    fill="#fff"
    fill-opacity=".05"
  />
  <path
    d="m18.262 17.513-8.944 9.49v.01a2.417 2.417 0 0 0 3.56 1.452l.026-.017 10.061-5.803-4.703-5.132Z"
    fill="#EA4335"
  />
  <path
    d="m27.307 15.9-.008-.008-4.342-2.52-4.896 4.36 4.913 4.912 4.325-2.494a2.42 2.42 0 0 0 .008-4.25Z"
    fill="#FBBC04"
  />
  <path
    d="M9.318 8.997c-.05.202-.084.403-.084.622V26.39c0 .218.025.42.084.621l9.246-9.247-9.246-8.768Z"
    fill="#4285F4"
  />
  <path
    d="m18.33 18 4.627-4.628-10.053-5.828a2.427 2.427 0 0 0-3.586 1.444L18.329 18Z"
    fill="#34A853"
  />
  <path
    d="M8 .5h20A7.5 7.5 0 0 1 35.5 8v20a7.5 7.5 0 0 1-7.5 7.5H8A7.5 7.5 0 0 1 .5 28V8A7.5 7.5 0 0 1 8 .5Z"
    stroke="#fff"
    stroke-opacity=".05"
  />
</svg>`,
                eo = l.YP `<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M3 6a3 3 0 0 1 3-3h1a1 1 0 1 0 0-2H6a5 5 0 0 0-5 5v1a1 1 0 0 0 2 0V6ZM13 1a1 1 0 1 0 0 2h1a3 3 0 0 1 3 3v1a1 1 0 1 0 2 0V6a5 5 0 0 0-5-5h-1ZM3 13a1 1 0 1 0-2 0v1a5 5 0 0 0 5 5h1a1 1 0 1 0 0-2H6a3 3 0 0 1-3-3v-1ZM19 13a1 1 0 1 0-2 0v1a3 3 0 0 1-3 3h-1a1 1 0 1 0 0 2h1.01a5 5 0 0 0 5-5v-1ZM5.3 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05A1.5 1.5 0 0 0 9.2 8.14c.06-.2.06-.43.06-.89s0-.7-.06-.89A1.5 1.5 0 0 0 8.14 5.3c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM10.8 6.36c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06ZM5.26 12.75c0-.46 0-.7.05-.89a1.5 1.5 0 0 1 1.06-1.06c.19-.05.42-.05.89-.05.46 0 .7 0 .88.05.52.14.93.54 1.06 1.06.06.2.06.43.06.89s0 .7-.06.89a1.5 1.5 0 0 1-1.06 1.06c-.19.05-.42.05-.88.05-.47 0-.7 0-.9-.05a1.5 1.5 0 0 1-1.05-1.06c-.05-.2-.05-.43-.05-.89ZM10.8 11.86c-.04.2-.04.43-.04.89s0 .7.05.89c.14.52.54.92 1.06 1.06.19.05.42.05.89.05.46 0 .7 0 .88-.05a1.5 1.5 0 0 0 1.06-1.06c.06-.2.06-.43.06-.89s0-.7-.06-.89a1.5 1.5 0 0 0-1.06-1.06c-.19-.05-.42-.05-.88-.05-.47 0-.7 0-.9.05a1.5 1.5 0 0 0-1.05 1.06Z"
  />
</svg>`,
                ea = l.YP `<svg fill="none" viewBox="0 0 14 16">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.94 1.04a1 1 0 0 1 .7 1.23l-.48 1.68a5.85 5.85 0 0 1 8.53 4.32 5.86 5.86 0 0 1-11.4 2.56 1 1 0 0 1 1.9-.57 3.86 3.86 0 1 0 1.83-4.5l1.87.53a1 1 0 0 1-.55 1.92l-4.1-1.15a1 1 0 0 1-.69-1.23l1.16-4.1a1 1 0 0 1 1.23-.7Z"
    clip-rule="evenodd"
  />
</svg>`,
                es = l.YP `<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M9.36 4.21a5.14 5.14 0 1 0 0 10.29 5.14 5.14 0 0 0 0-10.29ZM1.64 9.36a7.71 7.71 0 1 1 14 4.47l2.52 2.5a1.29 1.29 0 1 1-1.82 1.83l-2.51-2.51A7.71 7.71 0 0 1 1.65 9.36Z"
    clip-rule="evenodd"
  />
</svg>`,
                el = l.YP `<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M6.76.3a1 1 0 0 1 0 1.4L4.07 4.4h9a1 1 0 1 1 0 2h-9l2.69 2.68a1 1 0 1 1-1.42 1.42L.95 6.09a1 1 0 0 1 0-1.4l4.4-4.4a1 1 0 0 1 1.4 0Zm6.49 9.21a1 1 0 0 1 1.41 0l4.39 4.4a1 1 0 0 1 0 1.4l-4.39 4.4a1 1 0 0 1-1.41-1.42l2.68-2.68h-9a1 1 0 0 1 0-2h9l-2.68-2.68a1 1 0 0 1 0-1.42Z"
    clip-rule="evenodd"
  />
</svg>`,
                ec = l.YP `<svg width="10" height="10" viewBox="0 0 10 10">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.77986 0.566631C4.0589 0.845577 4.0589 1.29784 3.77986 1.57678L3.08261 2.2738H6.34184C6.73647 2.2738 7.05637 2.5936 7.05637 2.98808C7.05637 3.38257 6.73647 3.70237 6.34184 3.70237H3.08261L3.77986 4.39938C4.0589 4.67833 4.0589 5.13059 3.77986 5.40954C3.50082 5.68848 3.04841 5.68848 2.76937 5.40954L0.852346 3.49316C0.573306 3.21421 0.573306 2.76195 0.852346 2.48301L2.76937 0.566631C3.04841 0.287685 3.50082 0.287685 3.77986 0.566631ZM6.22 4.59102C6.49904 4.31208 6.95145 4.31208 7.23049 4.59102L9.14751 6.5074C9.42655 6.78634 9.42655 7.23861 9.14751 7.51755L7.23049 9.43393C6.95145 9.71287 6.49904 9.71287 6.22 9.43393C5.94096 9.15498 5.94096 8.70272 6.22 8.42377L6.91725 7.72676L3.65802 7.72676C3.26339 7.72676 2.94349 7.40696 2.94349 7.01247C2.94349 6.61798 3.26339 6.29819 3.65802 6.29819L6.91725 6.29819L6.22 5.60117C5.94096 5.32223 5.94096 4.86997 6.22 4.59102Z"
    clip-rule="evenodd"
  />
</svg>`,
                eu = l.YP `<svg fill="none" viewBox="0 0 14 14">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M3.48 2.18a1 1 0 0 1 1.41 0l2.68 2.68a1 1 0 1 1-1.41 1.42l-.98-.98v4.56a1 1 0 0 1-2 0V5.3l-.97.98A1 1 0 0 1 .79 4.86l2.69-2.68Zm6.34 2.93a1 1 0 0 1 1 1v4.56l.97-.98a1 1 0 1 1 1.42 1.42l-2.69 2.68a1 1 0 0 1-1.41 0l-2.68-2.68a1 1 0 0 1 1.41-1.42l.98.98V6.1a1 1 0 0 1 1-1Z"
    clip-rule="evenodd"
  />
</svg>`,
                ed = l.YP `<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5865F2" />
      <path
        fill="#fff"
        fill-rule="evenodd"
        d="M25.71 28.15C30.25 28 32 25.02 32 25.02c0-6.61-2.96-11.98-2.96-11.98-2.96-2.22-5.77-2.15-5.77-2.15l-.29.32c3.5 1.07 5.12 2.61 5.12 2.61a16.75 16.75 0 0 0-10.34-1.93l-.35.04a15.43 15.43 0 0 0-5.88 1.9s1.71-1.63 5.4-2.7l-.2-.24s-2.81-.07-5.77 2.15c0 0-2.96 5.37-2.96 11.98 0 0 1.73 2.98 6.27 3.13l1.37-1.7c-2.6-.79-3.6-2.43-3.6-2.43l.58.35.09.06.08.04.02.01.08.05a17.25 17.25 0 0 0 4.52 1.58 14.4 14.4 0 0 0 8.3-.86c.72-.27 1.52-.66 2.37-1.21 0 0-1.03 1.68-3.72 2.44.61.78 1.35 1.67 1.35 1.67Zm-9.55-9.6c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28.01-1.25-.93-2.28-2.1-2.28Zm7.5 0c-1.17 0-2.1 1.03-2.1 2.28 0 1.25.95 2.28 2.1 2.28 1.17 0 2.1-1.03 2.1-2.28 0-1.25-.93-2.28-2.1-2.28Z"
        clip-rule="evenodd"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg> `,
                eh = l.YP `<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#5A3E85" />
      <g clip-path="url(#c)">
        <path
          fill="#fff"
          d="M18.22 25.7 20 23.91h3.34l2.1-2.1v-6.68H15.4v8.78h2.82v1.77Zm3.87-8.16h1.25v3.66H22.1v-3.66Zm-3.34 0H20v3.66h-1.25v-3.66ZM20 7.9a12 12 0 1 0 0 24 12 12 0 0 0 0-24Zm6.69 14.56-3.66 3.66h-2.72l-1.77 1.78h-1.88V26.1H13.3v-9.82l.94-2.4H26.7v8.56Z"
        />
      </g>
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
    <clipPath id="c"><path fill="#fff" d="M8 7.89h24v24H8z" /></clipPath>
  </defs>
</svg>`,
                ep = l.YP `<svg fill="none" viewBox="0 0 40 40">
  <g clip-path="url(#a)">
    <g clip-path="url(#b)">
      <circle cx="20" cy="19.89" r="20" fill="#1D9BF0" />
      <path
        fill="#fff"
        d="M30 13.81c-.74.33-1.53.55-2.36.65.85-.51 1.5-1.32 1.8-2.27-.79.47-1.66.8-2.6 1a4.1 4.1 0 0 0-7 3.73c-3.4-.17-6.42-1.8-8.45-4.28a4.1 4.1 0 0 0 1.27 5.47c-.67-.02-1.3-.2-1.86-.5a4.1 4.1 0 0 0 3.3 4.07c-.58.15-1.21.19-1.86.07a4.1 4.1 0 0 0 3.83 2.85A8.25 8.25 0 0 1 10 26.3a11.62 11.62 0 0 0 6.29 1.84c7.62 0 11.92-6.44 11.66-12.2.8-.59 1.5-1.3 2.05-2.13Z"
      />
    </g>
  </g>
  <defs>
    <clipPath id="a"><rect width="40" height="40" fill="#fff" rx="20" /></clipPath>
    <clipPath id="b"><path fill="#fff" d="M0 0h40v40H0z" /></clipPath>
  </defs>
</svg>`,
                ef = l.YP `<svg fill="none" viewBox="0 0 16 16">
  <path
    fill="currentColor"
    d="m14.36 4.74.01.42c0 4.34-3.3 9.34-9.34 9.34A9.3 9.3 0 0 1 0 13.03a6.6 6.6 0 0 0 4.86-1.36 3.29 3.29 0 0 1-3.07-2.28c.5.1 1 .07 1.48-.06A3.28 3.28 0 0 1 .64 6.11v-.04c.46.26.97.4 1.49.41A3.29 3.29 0 0 1 1.11 2.1a9.32 9.32 0 0 0 6.77 3.43 3.28 3.28 0 0 1 5.6-3 6.59 6.59 0 0 0 2.08-.8 3.3 3.3 0 0 1-1.45 1.82A6.53 6.53 0 0 0 16 3.04c-.44.66-1 1.23-1.64 1.7Z"
  />
</svg>`,
                eg = l.YP `<svg fill="none" viewBox="0 0 28 28">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M18.1 4.76c-.42-.73-1.33-1.01-2.09-.66l-1.42.66c-.37.18-.8.18-1.18 0l-1.4-.65a1.63 1.63 0 0 0-2.1.66l-.84 1.45c-.2.34-.53.59-.92.67l-1.7.35c-.83.17-1.39.94-1.3 1.78l.19 1.56c.04.39-.08.78-.33 1.07l-1.12 1.3c-.52.6-.52 1.5 0 2.11L5 16.38c.25.3.37.68.33 1.06l-.18 1.57c-.1.83.46 1.6 1.28 1.78l1.7.35c.4.08.73.32.93.66l.84 1.43a1.63 1.63 0 0 0 2.09.66l1.41-.66c.37-.17.8-.17 1.18 0l1.43.67c.76.35 1.66.07 2.08-.65l.86-1.45c.2-.34.54-.58.92-.66l1.68-.35A1.63 1.63 0 0 0 22.84 19l-.18-1.57a1.4 1.4 0 0 1 .33-1.06l1.12-1.32c.52-.6.52-1.5 0-2.11l-1.12-1.3a1.4 1.4 0 0 1-.33-1.07l.18-1.57c.1-.83-.46-1.6-1.28-1.77l-1.68-.35a1.4 1.4 0 0 1-.92-.66l-.86-1.47Zm-3.27-3.2a4.43 4.43 0 0 1 5.69 1.78l.54.93 1.07.22a4.43 4.43 0 0 1 3.5 4.84l-.11.96.7.83a4.43 4.43 0 0 1 .02 5.76l-.72.85.1.96a4.43 4.43 0 0 1-3.5 4.84l-1.06.22-.54.92a4.43 4.43 0 0 1-5.68 1.77l-.84-.4-.82.39a4.43 4.43 0 0 1-5.7-1.79l-.51-.89-1.09-.22a4.43 4.43 0 0 1-3.5-4.84l.1-.96-.72-.85a4.43 4.43 0 0 1 .01-5.76l.71-.83-.1-.95a4.43 4.43 0 0 1 3.5-4.84l1.08-.23.53-.9a4.43 4.43 0 0 1 5.7-1.8l.81.38.83-.39ZM18.2 9.4c.65.42.84 1.28.42 1.93l-4.4 6.87a1.4 1.4 0 0 1-2.26.14L9.5 15.39a1.4 1.4 0 0 1 2.15-1.8l1.23 1.48 3.38-5.26a1.4 1.4 0 0 1 1.93-.42Z"
    clip-rule="evenodd"
  />
</svg>`,
                ew = l.YP `
  <svg fill="none" viewBox="0 0 48 44">
    <path
      style="fill: var(--wui-color-bg-300);"
      d="M4.56 8.64c-1.23 1.68-1.23 4.08-1.23 8.88v8.96c0 4.8 0 7.2 1.23 8.88.39.55.87 1.02 1.41 1.42C7.65 38 10.05 38 14.85 38h14.3c4.8 0 7.2 0 8.88-1.22a6.4 6.4 0 0 0 1.41-1.42c.83-1.14 1.1-2.6 1.19-4.92a6.4 6.4 0 0 0 5.16-4.65c.21-.81.21-1.8.21-3.79 0-1.98 0-2.98-.22-3.79a6.4 6.4 0 0 0-5.15-4.65c-.1-2.32-.36-3.78-1.19-4.92a6.4 6.4 0 0 0-1.41-1.42C36.35 6 33.95 6 29.15 6h-14.3c-4.8 0-7.2 0-8.88 1.22a6.4 6.4 0 0 0-1.41 1.42Z"
    />
    <path
      style="fill: var(--wui-color-fg-200);"
      fill-rule="evenodd"
      d="M2.27 11.33a6.4 6.4 0 0 1 6.4-6.4h26.66a6.4 6.4 0 0 1 6.4 6.4v1.7a6.4 6.4 0 0 1 5.34 6.3v5.34a6.4 6.4 0 0 1-5.34 6.3v1.7a6.4 6.4 0 0 1-6.4 6.4H8.67a6.4 6.4 0 0 1-6.4-6.4V11.33ZM39.6 31.07h-6.93a9.07 9.07 0 1 1 0-18.14h6.93v-1.6a4.27 4.27 0 0 0-4.27-4.26H8.67a4.27 4.27 0 0 0-4.27 4.26v21.34a4.27 4.27 0 0 0 4.27 4.26h26.66a4.27 4.27 0 0 0 4.27-4.26v-1.6Zm-6.93-16a6.93 6.93 0 0 0 0 13.86h8a4.27 4.27 0 0 0 4.26-4.26v-5.34a4.27 4.27 0 0 0-4.26-4.26h-8Z"
      clip-rule="evenodd"
    />
  </svg>
`,
                em = l.YP `<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M0 5.5c0-1.8 1.46-3.25 3.25-3.25H14.5c1.8 0 3.25 1.46 3.25 3.25v.28A3.25 3.25 0 0 1 20 8.88v2.24c0 1.45-.94 2.68-2.25 3.1v.28c0 1.8-1.46 3.25-3.25 3.25H3.25A3.25 3.25 0 0 1 0 14.5v-9Zm15.75 8.88h-2.38a4.38 4.38 0 0 1 0-8.76h2.38V5.5c0-.69-.56-1.25-1.25-1.25H3.25C2.56 4.25 2 4.81 2 5.5v9c0 .69.56 1.25 1.25 1.25H14.5c.69 0 1.25-.56 1.25-1.25v-.13Zm-2.38-6.76a2.37 2.37 0 1 0 0 4.75h3.38c.69 0 1.25-.55 1.25-1.24V8.87c0-.69-.56-1.24-1.25-1.24h-3.38Z"
    clip-rule="evenodd"
  />
</svg>`,
                ev = l.YP `<svg fill="none" viewBox="0 0 96 67">
  <path
    fill="currentColor"
    d="M25.32 18.8a32.56 32.56 0 0 1 45.36 0l1.5 1.47c.63.62.63 1.61 0 2.22l-5.15 5.05c-.31.3-.82.3-1.14 0l-2.07-2.03a22.71 22.71 0 0 0-31.64 0l-2.22 2.18c-.31.3-.82.3-1.14 0l-5.15-5.05a1.55 1.55 0 0 1 0-2.22l1.65-1.62Zm56.02 10.44 4.59 4.5c.63.6.63 1.6 0 2.21l-20.7 20.26c-.62.61-1.63.61-2.26 0L48.28 41.83a.4.4 0 0 0-.56 0L33.03 56.21c-.63.61-1.64.61-2.27 0L10.07 35.95a1.55 1.55 0 0 1 0-2.22l4.59-4.5a1.63 1.63 0 0 1 2.27 0L31.6 43.63a.4.4 0 0 0 .57 0l14.69-14.38a1.63 1.63 0 0 1 2.26 0l14.69 14.38a.4.4 0 0 0 .57 0l14.68-14.38a1.63 1.63 0 0 1 2.27 0Z"
  />
  <path
    stroke="#000"
    stroke-opacity=".1"
    d="M25.67 19.15a32.06 32.06 0 0 1 44.66 0l1.5 1.48c.43.42.43 1.09 0 1.5l-5.15 5.05a.31.31 0 0 1-.44 0l-2.07-2.03a23.21 23.21 0 0 0-32.34 0l-2.22 2.18a.31.31 0 0 1-.44 0l-5.15-5.05a1.05 1.05 0 0 1 0-1.5l1.65-1.63ZM81 29.6l4.6 4.5c.42.41.42 1.09 0 1.5l-20.7 20.26c-.43.43-1.14.43-1.57 0L48.63 41.47a.9.9 0 0 0-1.26 0L32.68 55.85c-.43.43-1.14.43-1.57 0L10.42 35.6a1.05 1.05 0 0 1 0-1.5l4.59-4.5a1.13 1.13 0 0 1 1.57 0l14.68 14.38a.9.9 0 0 0 1.27 0l-.35-.35.35.35L47.22 29.6a1.13 1.13 0 0 1 1.56 0l14.7 14.38a.9.9 0 0 0 1.26 0L79.42 29.6a1.13 1.13 0 0 1 1.57 0Z"
  />
</svg>`,
                eb = l.YP `<svg fill="none" viewBox="0 0 20 20">
  <path
    fill="currentColor"
    d="M11 6.67a1 1 0 1 0-2 0v2.66a1 1 0 0 0 2 0V6.67ZM10 14.5a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5Z"
  />
  <path
    fill="currentColor"
    fill-rule="evenodd"
    d="M10 1a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm-7 9a7 7 0 1 1 14 0 7 7 0 0 1-14 0Z"
    clip-rule="evenodd"
  />
</svg>`;
            var ey = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            };
            let eC = {
                    allWallets: C,
                    appStore: x,
                    chromeStore: N,
                    apple: _,
                    arrowBottom: E,
                    arrowLeft: S,
                    arrowRight: k,
                    arrowTop: A,
                    browser: D,
                    checkmark: $,
                    chevronBottom: R,
                    chevronLeft: O,
                    chevronRight: I,
                    chevronTop: T,
                    clock: P,
                    close: U,
                    compass: j,
                    coinPlaceholder: M,
                    copy: L,
                    cursor: B,
                    desktop: z,
                    disconnect: W,
                    discord: Z,
                    etherscan: F,
                    extension: H,
                    externalLink: V,
                    facebook: Y,
                    filters: K,
                    github: q,
                    google: G,
                    helpCircle: X,
                    infoCircle: J,
                    mail: Q,
                    mobile: ee,
                    networkPlaceholder: et,
                    nftPlaceholder: er,
                    off: ei,
                    playStore: en,
                    qrCode: eo,
                    refresh: ea,
                    search: es,
                    swapHorizontal: el,
                    swapHorizontalBold: ec,
                    swapVertical: eu,
                    telegram: ed,
                    twitch: eh,
                    twitter: ep,
                    twitterIcon: ef,
                    verify: eg,
                    wallet: em,
                    walletConnect: ev,
                    walletPlaceholder: ew,
                    warningCircle: eb
                },
                ex = class extends l.oi {
                    constructor() {
                        super(...arguments), this.size = "md", this.name = "copy", this.color = "fg-300"
                    }
                    render() {
                        return this.style.cssText = `
      --local-color: var(--wui-color-${this.color});
      --local-width: var(--wui-icon-size-${this.size});
    `, l.dy `${eC[this.name]}`
                    }
                };
            ex.styles = [p, g, y], ey([(0, b.Cb)()], ex.prototype, "size", void 0), ey([(0, b.Cb)()], ex.prototype, "name", void 0), ey([(0, b.Cb)()], ex.prototype, "color", void 0), ex = ey([w("wui-icon")], ex);
            var e_ = l.iv `
  :host {
    display: block;
    width: 100%;
    height: 100%;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }
`,
                eE = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let eS = class extends l.oi {
                constructor() {
                    super(...arguments), this.src = "./path/to/image.jpg", this.alt = "Image"
                }
                render() {
                    return l.dy `<img src=${this.src} alt=${this.alt} />`
                }
            };
            eS.styles = [p, g, e_], eE([(0, b.Cb)()], eS.prototype, "src", void 0), eE([(0, b.Cb)()], eS.prototype, "alt", void 0), eS = eE([w("wui-image")], eS);
            var ek = l.iv `
  :host {
    display: block;
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
  }

  svg {
    width: var(--wui-box-size-lg);
    height: var(--wui-box-size-lg);
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  use {
    stroke: var(--wui-color-accent-100);
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`;
            let eA = class extends l.oi {
                render() {
                    return l.dy `
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `
                }
            };
            eA.styles = [p, ek], eA = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }([w("wui-loading-hexagon")], eA);
            var eD = l.iv `
  :host {
    display: flex;
  }

  :host([data-size='sm']) > svg {
    width: 12px;
    height: 12px;
  }

  :host([data-size='md']) > svg {
    width: 14px;
    height: 14px;
  }

  :host([data-size='lg']) > svg {
    width: 24px;
    height: 24px;
  }

  svg {
    animation: rotate 2s linear infinite;
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  circle {
    fill: none;
    stroke: var(--local-color);
    stroke-width: 4px;
    stroke-dasharray: 1, 124;
    stroke-dashoffset: 0;
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  :host([data-size='md']) > svg > circle {
    stroke-width: 6px;
  }

  :host([data-size='sm']) > svg > circle {
    stroke-width: 8px;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 124;
      stroke-dashoffset: 0;
    }

    50% {
      stroke-dasharray: 90, 124;
      stroke-dashoffset: -35;
    }

    100% {
      stroke-dashoffset: -125;
    }
  }
`,
                e$ = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let eR = class extends l.oi {
                constructor() {
                    super(...arguments), this.color = "accent-100", this.size = "lg"
                }
                render() {
                    return this.style.cssText = `--local-color: var(--wui-color-${this.color});`, this.dataset.size = this.size, l.dy `<svg viewBox="25 25 50 50">
      <circle r="20" cy="50" cx="50"></circle>
    </svg>`
                }
            };
            eR.styles = [p, eD], e$([(0, b.Cb)()], eR.prototype, "color", void 0), e$([(0, b.Cb)()], eR.prototype, "size", void 0), eR = e$([w("wui-loading-spinner")], eR);
            var eO = l.iv `
  :host {
    display: block;
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
  }

  svg {
    width: var(--wui-box-size-md);
    height: var(--wui-box-size-md);
    transition: all var(--wui-ease-in-power-3) var(--wui-duration-lg);
  }

  rect {
    fill: none;
    stroke: var(--wui-color-accent-100);
    stroke-width: 4px;
    stroke-linecap: round;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,
                eI = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let eT = class extends l.oi {
                constructor() {
                    super(...arguments), this.radius = 36
                }
                render() {
                    return this.svgLoaderTemplate()
                }
                svgLoaderTemplate() {
                    let e = this.radius > 50 ? 50 : this.radius,
                        t = 36 - e;
                    return l.dy `
      <svg viewBox="0 0 110 110" width="110" height="110">
        <rect
          x="2"
          y="2"
          width="106"
          height="106"
          rx=${e}
          stroke-dasharray="${116+t} ${245+t}"
          stroke-dashoffset=${360+1.75*t}
        />
      </svg>
    `
                }
            };
            eT.styles = [p, eO], eI([(0, b.Cb)({
                type: Number
            })], eT.prototype, "radius", void 0), eT = eI([w("wui-loading-thumbnail")], eT);
            var eN = l.iv `
  :host {
    display: block;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background: linear-gradient(
      120deg,
      var(--wui-color-bg-200) 5%,
      var(--wui-color-bg-200) 48%,
      var(--wui-color-bg-300) 55%,
      var(--wui-color-bg-300) 60%,
      var(--wui-color-bg-300) calc(60% + 10px),
      var(--wui-color-bg-200) calc(60% + 12px),
      var(--wui-color-bg-200) 100%
    );
    background-size: 250%;
    animation: shimmer 3s linear infinite reverse;
  }

  @keyframes shimmer {
    from {
      background-position: -250% 0;
    }
    to {
      background-position: 250% 0;
    }
  }
`,
                eP = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let eU = class extends l.oi {
                constructor() {
                    super(...arguments), this.width = "", this.height = "", this.borderRadius = "m"
                }
                render() {
                    return this.style.cssText = `
      width: ${this.width};
      height: ${this.height};
      border-radius: clamp(0px,var(--wui-border-radius-${this.borderRadius}), 40px);
    `, l.dy `<slot></slot>`
                }
            };
            eU.styles = [eN], eP([(0, b.Cb)()], eU.prototype, "width", void 0), eP([(0, b.Cb)()], eU.prototype, "height", void 0), eP([(0, b.Cb)()], eU.prototype, "borderRadius", void 0), eU = eP([w("wui-shimmer")], eU);
            var eM = r(35377),
                ej = r(64647);
            /**
             * @license
             * Copyright 2018 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let eL = (0, ej.XM)(class extends ej.Xe {
                constructor(e) {
                    if (super(e), e.type !== ej.pX.ATTRIBUTE || "class" !== e.name || e.strings ? .length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")
                }
                render(e) {
                    return " " + Object.keys(e).filter(t => e[t]).join(" ") + " "
                }
                update(e, [t]) {
                    if (void 0 === this.it) {
                        for (let r in this.it = new Set, void 0 !== e.strings && (this.st = new Set(e.strings.join(" ").split(/\s/).filter(e => "" !== e))), t) t[r] && !this.st ? .has(r) && this.it.add(r);
                        return this.render(t)
                    }
                    let r = e.element.classList;
                    for (let e of this.it) e in t || (r.remove(e), this.it.delete(e));
                    for (let e in t) {
                        let i = !!t[e];
                        i === this.it.has(e) || this.st ? .has(e) || (i ? (r.add(e), this.it.add(e)) : (r.remove(e), this.it.delete(e)))
                    }
                    return eM.Jb
                }
            });
            var eB = l.iv `
  :host {
    display: flex !important;
  }

  slot {
    display: inline-block;
    font-style: normal;
    font-family: var(--wui-font-family);
    font-feature-settings:
      'tnum' on,
      'lnum' on,
      'case' on;
    line-height: 130%;
    font-weight: var(--wui-font-weight-regular);
    overflow: inherit;
    text-overflow: inherit;
    text-align: var(--local-align);
    color: var(--local-color);
  }

  .wui-font-large-500,
  .wui-font-large-600,
  .wui-font-large-700 {
    font-size: var(--wui-font-size-large);
    letter-spacing: var(--wui-letter-spacing-large);
  }

  .wui-font-paragraph-500,
  .wui-font-paragraph-600,
  .wui-font-paragraph-700 {
    font-size: var(--wui-font-size-paragraph);
    letter-spacing: var(--wui-letter-spacing-paragraph);
  }

  .wui-font-small-400,
  .wui-font-small-500,
  .wui-font-small-600 {
    font-size: var(--wui-font-size-small);
    letter-spacing: var(--wui-letter-spacing-small);
  }

  .wui-font-tiny-500,
  .wui-font-tiny-600 {
    font-size: var(--wui-font-size-tiny);
    letter-spacing: var(--wui-letter-spacing-tiny);
  }

  .wui-font-micro-700,
  .wui-font-micro-600 {
    font-size: var(--wui-font-size-micro);
    letter-spacing: var(--wui-letter-spacing-micro);
    text-transform: uppercase;
  }

  .wui-font-small-400,
  .wui-font-paragraph-400 {
    font-weight: var(--wui-font-weight-light);
  }

  .wui-font-large-700,
  .wui-font-paragraph-700,
  .wui-font-micro-700 {
    font-weight: var(--wui-font-weight-bold);
  }

  .wui-font-large-600,
  .wui-font-paragraph-600,
  .wui-font-small-600,
  .wui-font-tiny-600,
  .wui-font-micro-600 {
    font-weight: var(--wui-font-weight-medium);
  }
`,
                ez = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let eW = class extends l.oi {
                constructor() {
                    super(...arguments), this.variant = "paragraph-500", this.color = "fg-300", this.align = "left"
                }
                render() {
                    let e = {
                        [`wui-font-${this.variant}`]: !0,
                        [`wui-color-${this.color}`]: !0
                    };
                    return this.style.cssText = `
      --local-align: ${this.align};
      --local-color: var(--wui-color-${this.color});
    `, l.dy `<slot class=${eL(e)}></slot>`
                }
            };
            eW.styles = [p, eB], ez([(0, b.Cb)()], eW.prototype, "variant", void 0), ez([(0, b.Cb)()], eW.prototype, "color", void 0), ez([(0, b.Cb)()], eW.prototype, "align", void 0), eW = ez([w("wui-text")], eW);
            let eZ = l.YP `<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="30" />
  <circle cx="30" cy="30" r="3" fill="#fff" />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m45.32 17.9-.88-.42.88.42.02-.05c.1-.2.21-.44.26-.7l-.82-.15.82.16a2 2 0 0 0-.24-1.4c-.13-.23-.32-.42-.47-.57a8.42 8.42 0 0 1-.04-.04l-.04-.04a2.9 2.9 0 0 0-.56-.47l-.51.86.5-.86a2 2 0 0 0-1.4-.24c-.26.05-.5.16-.69.26l-.05.02-15.05 7.25-.1.05c-1.14.55-1.85.89-2.46 1.37a7 7 0 0 0-1.13 1.14c-.5.6-.83 1.32-1.38 2.45l-.05.11-7.25 15.05-.02.05c-.1.2-.21.43-.26.69a2 2 0 0 0 .24 1.4l.85-.5-.85.5c.13.23.32.42.47.57l.04.04.04.04c.15.15.34.34.56.47a2 2 0 0 0 1.41.24l-.2-.98.2.98c.25-.05.5-.17.69-.26l.05-.02-.42-.87.42.87 15.05-7.25.1-.05c1.14-.55 1.85-.89 2.46-1.38a7 7 0 0 0 1.13-1.13 12.87 12.87 0 0 0 1.43-2.56l7.25-15.05Z"
  />
  <path
    fill="#1DC956"
    d="M33.38 32.72 30.7 29.3 15.86 44.14l.2.2a1 1 0 0 0 1.14.2l15.1-7.27a3 3 0 0 0 1.08-4.55Z"
  />
  <path
    fill="#86F999"
    d="m26.62 27.28 2.67 3.43 14.85-14.85-.2-.2a1 1 0 0 0-1.14-.2l-15.1 7.27a3 3 0 0 0-1.08 4.55Z"
  />
  <circle cx="30" cy="30" r="3" fill="#fff" transform="rotate(45 30 30)" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
</svg> `,
                eF = l.YP `<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#clip0_7734_50402)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#EB8B47"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M19 52C24.5228 52 29 47.5228 29 42C29 36.4772 24.5228 32 19 32C13.4772 32 9 36.4772 9 42C9 47.5228 13.4772 52 19 52Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.8437 8.3264C42.4507 7.70891 41.5493 7.70891 41.1564 8.32641L28.978 27.4638C28.5544 28.1295 29.0326 29.0007 29.8217 29.0007H54.1783C54.9674 29.0007 55.4456 28.1295 55.022 27.4638L42.8437 8.3264Z"
      fill="white"
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M42.3348 11.6456C42.659 11.7608 42.9061 12.1492 43.4005 12.926L50.7332 24.4488C51.2952 25.332 51.5763 25.7737 51.5254 26.1382C51.4915 26.3808 51.3698 26.6026 51.1833 26.7614C50.9031 27 50.3796 27 49.3327 27H34.6673C33.6204 27 33.0969 27 32.8167 26.7614C32.6302 26.6026 32.5085 26.3808 32.4746 26.1382C32.4237 25.7737 32.7048 25.332 33.2669 24.4488L40.5995 12.926C41.0939 12.1492 41.341 11.7608 41.6652 11.6456C41.8818 11.5687 42.1182 11.5687 42.3348 11.6456ZM35.0001 26.999C38.8661 26.999 42.0001 23.865 42.0001 19.999C42.0001 23.865 45.1341 26.999 49.0001 26.999H35.0001Z"
      fill="#FF974C"
    />
    <path
      d="M10.1061 9.35712C9.9973 9.67775 9.99867 10.0388 9.99978 10.3323C9.99989 10.3611 10 10.3893 10 10.4167V25.5833C10 25.6107 9.99989 25.6389 9.99978 25.6677C9.99867 25.9612 9.9973 26.3222 10.1061 26.6429C10.306 27.2317 10.7683 27.694 11.3571 27.8939C11.6777 28.0027 12.0388 28.0013 12.3323 28.0002C12.3611 28.0001 12.3893 28 12.4167 28H19C24.5228 28 29 23.5228 29 18C29 12.4772 24.5228 8 19 8H12.4167C12.3893 8 12.3611 7.99989 12.3323 7.99978C12.0388 7.99867 11.6778 7.9973 11.3571 8.10614C10.7683 8.306 10.306 8.76834 10.1061 9.35712Z"
      fill="#FF974C"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="19" cy="18" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
    <circle cx="19" cy="42" r="4" fill="#EB8B47" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="clip0_7734_50402">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `,
                eH = l.YP `<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#1DC956"
      d="M0 25.01c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02.11 15.65.11 24.9.11h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.13 60 15.76 60 25v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-3.45 1.97-8.08 1.97-17.33 1.97H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 49.1 0 44.46 0 35.21v-10.2Z"
    />
    <path
      fill="#2BEE6C"
      d="M16.1 60c-3.82-.18-6.4-.64-8.53-1.86a15 15 0 0 1-5.6-5.6C.55 50.06.16 46.97.04 41.98L4.2 40.6a4 4 0 0 0 2.48-2.39l4.65-12.4a2 2 0 0 1 2.5-1.2l2.53.84a2 2 0 0 0 2.43-1l2.96-5.94a2 2 0 0 1 3.7.32l3.78 12.58a2 2 0 0 0 3.03 1.09l3.34-2.23a2 2 0 0 0 .65-.7l5.3-9.72a2 2 0 0 1 1.42-1.01l4.14-.69a2 2 0 0 1 1.6.44l3.9 3.24a2 2 0 0 0 2.7-.12l4.62-4.63c.08 2.2.08 4.8.08 7.93v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6c-2.13 1.22-4.7 1.68-8.54 1.86H16.11Z"
    />
    <path
      fill="#fff"
      d="m.07 43.03-.05-2.1 3.85-1.28a3 3 0 0 0 1.86-1.79l4.66-12.4a3 3 0 0 1 3.75-1.8l2.53.84a1 1 0 0 0 1.21-.5l2.97-5.94a3 3 0 0 1 5.56.48l3.77 12.58a1 1 0 0 0 1.51.55l3.34-2.23a1 1 0 0 0 .33-.35l5.3-9.71a3 3 0 0 1 2.14-1.53l4.13-.69a3 3 0 0 1 2.41.66l3.9 3.24a1 1 0 0 0 1.34-.06l5.28-5.28c.05.85.08 1.75.1 2.73L56 22.41a3 3 0 0 1-4.04.19l-3.9-3.25a1 1 0 0 0-.8-.21l-4.13.69a1 1 0 0 0-.72.5l-5.3 9.72a3 3 0 0 1-.97 1.05l-3.34 2.23a3 3 0 0 1-4.53-1.63l-3.78-12.58a1 1 0 0 0-1.85-.16l-2.97 5.94a3 3 0 0 1-3.63 1.5l-2.53-.84a1 1 0 0 0-1.25.6l-4.65 12.4a5 5 0 0 1-3.1 3L.07 43.02Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M49.5 19a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M45 .28v59.66l-2 .1V.19c.7.02 1.37.05 2 .1Z" />
    <path fill="#2BEE6C" d="M47.5 19a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
    <path
      stroke="#fff"
      stroke-opacity=".1"
      d="M.5 25.01c0-4.63 0-8.08.24-10.8.25-2.7.73-4.64 1.66-6.28a14.5 14.5 0 0 1 5.42-5.41C9.46 1.58 11.39 1.1 14.1.85A133 133 0 0 1 24.9.61h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.67a14.5 14.5 0 0 1 5.42 5.4c.93 1.65 1.41 3.58 1.66 6.3.24 2.71.24 6.16.24 10.79v10.2c0 4.64 0 8.08-.24 10.8-.25 2.7-.73 4.65-1.66 6.28a14.5 14.5 0 0 1-5.42 5.42c-1.63.93-3.57 1.41-6.28 1.66-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.66a14.5 14.5 0 0 1-5.42-5.42C1.47 50.66 1 48.72.74 46.01A133 133 0 0 1 .5 35.2v-10.2Z"
    />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg>`,
                eV = l.YP `<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="30" />
    <path
      fill="#E87DE8"
      d="M57.98.01v19.5a4.09 4.09 0 0 0-2.63 2.29L50.7 34.2a2 2 0 0 1-2.5 1.2l-2.53-.84a2 2 0 0 0-2.42 1l-2.97 5.94a2 2 0 0 1-3.7-.32L32.8 28.6a2 2 0 0 0-3.02-1.09l-3.35 2.23a2 2 0 0 0-.64.7l-5.3 9.72a2 2 0 0 1-1.43 1.01l-4.13.69a2 2 0 0 1-1.61-.44l-3.9-3.24a2 2 0 0 0-2.69.12L2.1 42.93.02 43V.01h57.96Z"
    />
    <path
      fill="#fff"
      d="m61.95 16.94.05 2.1-3.85 1.28a3 3 0 0 0-1.86 1.79l-4.65 12.4a3 3 0 0 1-3.76 1.8l-2.53-.84a1 1 0 0 0-1.2.5l-2.98 5.94a3 3 0 0 1-5.55-.48l-3.78-12.58a1 1 0 0 0-1.5-.55l-3.35 2.23a1 1 0 0 0-.32.35l-5.3 9.72a3 3 0 0 1-2.14 1.52l-4.14.69a3 3 0 0 1-2.41-.66l-3.9-3.24a1 1 0 0 0-1.34.06l-5.28 5.28c-.05-.84-.08-1.75-.1-2.73l3.97-3.96a3 3 0 0 1 4.04-.19l3.89 3.25a1 1 0 0 0 .8.21l4.14-.68a1 1 0 0 0 .71-.51l5.3-9.71a3 3 0 0 1 .97-1.06l3.34-2.23a3 3 0 0 1 4.54 1.63l3.77 12.58a1 1 0 0 0 1.86.16l2.96-5.93a3 3 0 0 1 3.64-1.5l2.52.83a1 1 0 0 0 1.25-.6l4.66-12.4a5 5 0 0 1 3.1-2.99l4.43-1.48Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M35.5 27a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0Z"
      clip-rule="evenodd"
    />
    <path fill="#fff" d="M31 0v60h-2V0h2Z" />
    <path fill="#E87DE8" d="M33.5 27a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,
                eY = l.YP `<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#987DE8" rx="30" />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="m15.48 28.37 11.97-19.3a3 3 0 0 1 5.1 0l11.97 19.3a6 6 0 0 1 .9 3.14v.03a6 6 0 0 1-1.16 3.56L33.23 50.2a4 4 0 0 1-6.46 0L15.73 35.1a6 6 0 0 1-1.15-3.54v-.03a6 6 0 0 1 .9-3.16Z"
      clip-rule="evenodd"
    />
    <path
      fill="#643CDD"
      d="M30.84 10.11a1 1 0 0 0-.84-.46V24.5l12.6 5.53a2 2 0 0 0-.28-1.4L30.84 10.11Z"
    />
    <path
      fill="#BDADEB"
      d="M30 9.65a1 1 0 0 0-.85.46L17.66 28.64a2 2 0 0 0-.26 1.39L30 24.5V9.65Z"
    />
    <path
      fill="#643CDD"
      d="M30 50.54a1 1 0 0 0 .8-.4l11.24-15.38c.3-.44-.2-1-.66-.73l-9.89 5.68a3 3 0 0 1-1.5.4v10.43Z"
    />
    <path
      fill="#BDADEB"
      d="m17.97 34.76 11.22 15.37c.2.28.5.41.8.41V40.11a3 3 0 0 1-1.49-.4l-9.88-5.68c-.47-.27-.97.3-.65.73Z"
    />
    <path
      fill="#401AB3"
      d="M42.6 30.03 30 24.5v13.14a3 3 0 0 0 1.5-.4l10.14-5.83a2 2 0 0 0 .95-1.38Z"
    />
    <path
      fill="#7C5AE2"
      d="M30 37.64V24.46l-12.6 5.57a2 2 0 0 0 .97 1.39l10.13 5.82a3 3 0 0 0 1.5.4Z"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg> `,
                eK = l.YP `<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#1DC956" rx="3" />
  <path
    fill="#1FAD7E"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 29.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#2BEE6C"
    stroke="#fff"
    stroke-width="2"
    d="m30.49 19.13-.49-.27-.49.27-12.77 7.1-.05.02c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45l-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-12.77-7.1Z"
  />
  <path
    fill="#86F999"
    stroke="#fff"
    stroke-width="2"
    d="m46.69 21.06-.94-.35.94.35a3 3 0 0 0 0-2.12l-.94.35.94-.35a3.21 3.21 0 0 0-1.27-1.45c-.53-.36-1.25-.76-2.11-1.24l-.05-.03-6.32-3.51-.18-.1c-2.33-1.3-3.72-2.06-5.22-2.33a9 9 0 0 0-3.08 0c-1.5.27-2.9 1.04-5.22 2.33l-.17.1-6.33 3.51-.05.03c-.86.48-1.58.88-2.1 1.24-.54.37-1.04.81-1.28 1.45a3 3 0 0 0 0 2.12c.24.63.74 1.08 1.27 1.45.53.36 1.25.76 2.11 1.24l.05.03 6.33 3.51.17.1c2.33 1.3 3.72 2.06 5.22 2.32a9 9 0 0 0 3.08 0c1.5-.26 2.9-1.03 5.22-2.32l.18-.1 6.32-3.51.05-.03a26.9 26.9 0 0 0 2.1-1.24 3.21 3.21 0 0 0 1.28-1.45Z"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,
                eq = l.YP `<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#C653C6" rx="3" />
  <path
    fill="#fff"
    d="M20.03 15.22C20 15.6 20 16.07 20 17v2.8c0 1.14 0 1.7-.2 2.12-.15.31-.3.5-.58.71-.37.28-1.06.42-2.43.7-.59.12-1.11.29-1.6.51a9 9 0 0 0-4.35 4.36C10 30 10 32.34 10 37c0 4.66 0 7 .84 8.8a9 9 0 0 0 4.36 4.36C17 51 19.34 51 24 51h12c4.66 0 7 0 8.8-.84a9 9 0 0 0 4.36-4.36C50 44 50 41.66 50 37c0-4.66 0-7-.84-8.8a9 9 0 0 0-4.36-4.36c-.48-.22-1-.39-1.6-.5-1.36-.29-2.05-.43-2.42-.7-.27-.22-.43-.4-.58-.72-.2-.42-.2-.98-.2-2.11V17c0-.93 0-1.4-.03-1.78a9 9 0 0 0-8.19-8.19C31.4 7 30.93 7 30 7s-1.4 0-1.78.03a9 9 0 0 0-8.19 8.19Z"
  />
  <path
    fill="#E87DE8"
    d="M22 17c0-.93 0-1.4.04-1.78a7 7 0 0 1 6.18-6.18C28.6 9 29.07 9 30 9s1.4 0 1.78.04a7 7 0 0 1 6.18 6.18c.04.39.04.85.04 1.78v4.5a1.5 1.5 0 0 1-3 0V17c0-.93 0-1.4-.08-1.78a4 4 0 0 0-3.14-3.14C31.39 12 30.93 12 30 12s-1.4 0-1.78.08a4 4 0 0 0-3.14 3.14c-.08.39-.08.85-.08 1.78v4.5a1.5 1.5 0 0 1-3 0V17Z"
  />
  <path
    fill="#E87DE8"
    fill-rule="evenodd"
    d="M12 36.62c0-4.32 0-6.48.92-8.09a7 7 0 0 1 2.61-2.61C17.14 25 19.3 25 23.62 25h6.86c.46 0 .7 0 .9.02 2.73.22 4.37 2.43 4.62 4.98.27-2.7 2.11-5 5.02-5A6.98 6.98 0 0 1 48 31.98v5.4c0 4.32 0 6.48-.92 8.09a7 7 0 0 1-2.61 2.61c-1.61.92-3.77.92-8.09.92h-5.86c-.46 0-.7 0-.9-.02-2.73-.22-4.37-2.43-4.62-4.98-.26 2.58-1.94 4.82-4.71 4.99l-.7.01c-.55 0-.82 0-1.05-.02a7 7 0 0 1-6.52-6.52c-.02-.23-.02-.5-.02-1.05v-4.79Zm21.24-.27a4 4 0 1 0-6.48 0 31.28 31.28 0 0 1 1.57 2.23c.17.4.17.81.17 1.24V42.5a1.5 1.5 0 0 0 3 0V39.82c0-.43 0-.85.17-1.24.09-.2.58-.87 1.57-2.23Z"
    clip-rule="evenodd"
  />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,
                eG = l.YP `<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <path
      fill="#EB8B47"
      d="M0 24.9c0-9.25 0-13.88 1.97-17.33a15 15 0 0 1 5.6-5.6C11.02 0 15.65 0 24.9 0h10.2c9.25 0 13.88 0 17.33 1.97a15 15 0 0 1 5.6 5.6C60 11.02 60 15.65 60 24.9v10.2c0 9.25 0 13.88-1.97 17.33a15 15 0 0 1-5.6 5.6C48.98 60 44.35 60 35.1 60H24.9c-9.25 0-13.88 0-17.33-1.97a15 15 0 0 1-5.6-5.6C0 48.98 0 44.35 0 35.1V24.9Z"
    />
    <path
      stroke="#062B2B"
      stroke-opacity=".1"
      d="M.5 24.9c0-4.64 0-8.08.24-10.8.25-2.7.73-4.65 1.66-6.28A14.5 14.5 0 0 1 7.82 2.4C9.46 1.47 11.39 1 14.1.74A133 133 0 0 1 24.9.5h10.2c4.63 0 8.08 0 10.8.24 2.7.25 4.65.73 6.28 1.66a14.5 14.5 0 0 1 5.42 5.42c.93 1.63 1.41 3.57 1.66 6.28.24 2.72.24 6.16.24 10.8v10.2c0 4.63 0 8.08-.24 10.8-.25 2.7-.73 4.64-1.66 6.28a14.5 14.5 0 0 1-5.42 5.41c-1.63.94-3.57 1.42-6.28 1.67-2.72.24-6.17.24-10.8.24H24.9c-4.63 0-8.08 0-10.8-.24-2.7-.25-4.64-.73-6.28-1.67a14.5 14.5 0 0 1-5.42-5.4C1.47 50.53 1 48.6.74 45.88A133 133 0 0 1 .5 35.1V24.9Z"
    />
    <path
      fill="#FF974C"
      stroke="#fff"
      stroke-width="2"
      d="M39.2 29.2a13 13 0 1 0-18.4 0l1.3 1.28a12.82 12.82 0 0 1 2.1 2.39 6 6 0 0 1 .6 1.47c.2.76.2 1.56.2 3.17v11.24c0 1.08 0 1.61.13 2.12a4 4 0 0 0 .41.98c.26.45.64.83 1.4 1.6l.3.29c.65.65.98.98 1.36 1.09.26.07.54.07.8 0 .38-.11.7-.44 1.36-1.1l3.48-3.47c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.47-.48c-.65-.65-.98-.98-1.09-1.36a1.5 1.5 0 0 1 0-.8c.1-.38.44-.7 1.1-1.36l.47-.48c.65-.65.98-.98 1.09-1.36a1.5 1.5 0 0 0 0-.8c-.1-.38-.44-.7-1.1-1.36l-.48-.5c-.65-.64-.98-.97-1.08-1.35a1.5 1.5 0 0 1 0-.79c.1-.38.42-.7 1.06-1.36l5.46-5.55Z"
    />
    <circle cx="30" cy="17" r="4" fill="#EB8B47" stroke="#fff" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="a"><path fill="#fff" d="M0 0h60v60H0z" /></clipPath>
  </defs>
</svg> `,
                eX = l.YP `<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#00ACE6" rx="30" />
    <circle cx="64" cy="39" r="50" fill="#1AC6FF" stroke="#fff" stroke-width="2" />
    <circle cx="78" cy="30" r="50" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="72" cy="15" r="35" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-17" r="45" stroke="#fff" stroke-width="2" />
    <circle cx="34" cy="-5" r="50" stroke="#fff" stroke-width="2" />
    <circle cx="30" cy="45" r="4" fill="#4DD2FF" stroke="#fff" stroke-width="2" />
    <circle cx="39.5" cy="27.5" r="4" fill="#80DFFF" stroke="#fff" stroke-width="2" />
    <circle cx="16" cy="24" r="4" fill="#19C6FF" stroke="#fff" stroke-width="2" />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#062B2B" stroke-opacity=".1" rx="29.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="30" /></clipPath>
  </defs>
</svg>`,
                eJ = l.YP `<svg fill="none" viewBox="0 0 60 60">
  <g clip-path="url(#a)">
    <rect width="60" height="60" fill="#C653C6" rx="3" />
    <path
      fill="#E87DE8"
      stroke="#fff"
      stroke-width="2"
      d="M52.1 47.34c0-4.24-1.44-9.55-5.9-12.4a2.86 2.86 0 0 0-1.6-3.89v-.82c0-1.19-.52-2.26-1.35-3a4.74 4.74 0 0 0-2.4-6.26v-5.5a11.31 11.31 0 1 0-22.63 0v2.15a3.34 3.34 0 0 0-1.18 5.05 4.74 4.74 0 0 0-.68 6.44A5.22 5.22 0 0 0 14 35.92c-3.06 4.13-6.1 8.3-6.1 15.64 0 2.67.37 4.86.74 6.39a20.3 20.3 0 0 0 .73 2.39l.02.04v.01l.92-.39-.92.4.26.6h38.26l.3-.49-.87-.51.86.5.02-.01.03-.07a16.32 16.32 0 0 0 .57-1.05c.36-.72.85-1.74 1.33-2.96a25.51 25.51 0 0 0 1.94-9.07Z"
    />
    <path
      fill="#fff"
      fill-rule="evenodd"
      d="M26.5 29.5c-3-.5-5.5-3-5.5-7v-7c0-.47 0-.7.03-.9a3 3 0 0 1 2.58-2.57c.2-.03.42-.03.89-.03 2 0 2.5-2.5 2.5-2.5s0 2.5 2.5 2.5c1.4 0 2.1 0 2.65.23a3 3 0 0 1 1.62 1.62c.23.55.23 1.25.23 2.65v6c0 4-3 7-6.5 7 1.35.23 4 0 6.5-2v9.53C34 38.5 31.5 40 28 40s-6-1.5-6-2.97L24 34l2.5 1.5v-6ZM26 47h4.5c2.5 0 3 4 3 5.5h-3l-1-1.5H26v-4Zm-6.25 5.5H24V57h-8c0-1 1-4.5 3.75-4.5Z"
      clip-rule="evenodd"
    />
  </g>
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
  <defs>
    <clipPath id="a"><rect width="60" height="60" fill="#fff" rx="3" /></clipPath>
  </defs>
</svg> `,
                eQ = l.YP `<svg fill="none" viewBox="0 0 60 60">
  <rect width="60" height="60" fill="#794CFF" rx="3" />
  <path
    fill="#987DE8"
    stroke="#fff"
    stroke-width="2"
    d="M33 22.5v-1H16v5H8.5V36H13v-5h3v7.5h17V31h1v7.5h17v-17H34v5h-1v-4Z"
  />
  <path fill="#fff" d="M37.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M42.5 25h5v10h-5z" />
  <path fill="#fff" d="M19.5 25h10v10h-10z" />
  <path fill="#4019B2" d="M24.5 25h5v10h-5z" />
  <path fill="#fff" d="M12 30.5h4V37h-4v-6.5Z" />
  <rect width="59" height="59" x=".5" y=".5" stroke="#fff" stroke-opacity=".1" rx="2.5" />
</svg>`,
                e0 = l.YP `<svg
  viewBox="0 0 60 60"
  fill="none"
>
  <g clip-path="url(#1)">
    <rect width="60" height="60" rx="30" fill="#00ACE6" />
    <path
      d="M59 73C59 89.0163 46.0163 102 30 102C13.9837 102 1 89.0163 1 73C1 56.9837 12 44 30 44C48 44 59 56.9837 59 73Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M18.6904 19.9015C19.6264 15.3286 23.3466 11.8445 27.9708 11.2096C29.3231 11.024 30.6751 11.0238 32.0289 11.2096C36.6532 11.8445 40.3733 15.3286 41.3094 19.9015C41.4868 20.7681 41.6309 21.6509 41.7492 22.5271C41.8811 23.5041 41.8811 24.4944 41.7492 25.4715C41.6309 26.3476 41.4868 27.2304 41.3094 28.097C40.3733 32.6699 36.6532 36.154 32.0289 36.7889C30.6772 36.9744 29.3216 36.9743 27.9708 36.7889C23.3466 36.154 19.6264 32.6699 18.6904 28.097C18.513 27.2304 18.3689 26.3476 18.2506 25.4715C18.1186 24.4944 18.1186 23.5041 18.2506 22.5271C18.3689 21.6509 18.513 20.7681 18.6904 19.9015Z"
      fill="#1AC6FF"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="24.5" cy="23.5" r="1.5" fill="white" />
    <circle cx="35.5" cy="23.5" r="1.5" fill="white" />
    <path
      d="M31 20L28 28H32"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </g>
  <rect x="0.5" y="0.5" width="59" height="59" rx="29.5" stroke="white" stroke-opacity="0.1" />
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" rx="30" fill="white" />
    </clipPath>
  </defs>
</svg> `,
                e1 = l.YP `<svg viewBox="0 0 60 60" fill="none">
  <g clip-path="url(#1)">
    <path
      d="M0 24.9C0 15.6485 0 11.0228 1.97053 7.56812C3.3015 5.23468 5.23468 3.3015 7.56812 1.97053C11.0228 0 15.6485 0 24.9 0H35.1C44.3514 0 48.9772 0 52.4319 1.97053C54.7653 3.3015 56.6985 5.23468 58.0295 7.56812C60 11.0228 60 15.6485 60 24.9V35.1C60 44.3514 60 48.9772 58.0295 52.4319C56.6985 54.7653 54.7653 56.6985 52.4319 58.0295C48.9772 60 44.3514 60 35.1 60H24.9C15.6485 60 11.0228 60 7.56812 58.0295C5.23468 56.6985 3.3015 54.7653 1.97053 52.4319C0 48.9772 0 44.3514 0 35.1V24.9Z"
      fill="#794CFF"
    />
    <path
      d="M0.5 24.9C0.5 20.2652 0.50047 16.8221 0.744315 14.105C0.987552 11.3946 1.46987 9.45504 2.40484 7.81585C3.69145 5.56019 5.56019 3.69145 7.81585 2.40484C9.45504 1.46987 11.3946 0.987552 14.105 0.744315C16.8221 0.50047 20.2652 0.5 24.9 0.5H35.1C39.7348 0.5 43.1779 0.50047 45.895 0.744315C48.6054 0.987552 50.545 1.46987 52.1841 2.40484C54.4398 3.69145 56.3086 5.56019 57.5952 7.81585C58.5301 9.45504 59.0124 11.3946 59.2557 14.105C59.4995 16.8221 59.5 20.2652 59.5 24.9V35.1C59.5 39.7348 59.4995 43.1779 59.2557 45.895C59.0124 48.6054 58.5301 50.545 57.5952 52.1841C56.3086 54.4398 54.4398 56.3086 52.1841 57.5952C50.545 58.5301 48.6054 59.0124 45.895 59.2557C43.1779 59.4995 39.7348 59.5 35.1 59.5H24.9C20.2652 59.5 16.8221 59.4995 14.105 59.2557C11.3946 59.0124 9.45504 58.5301 7.81585 57.5952C5.56019 56.3086 3.69145 54.4398 2.40484 52.1841C1.46987 50.545 0.987552 48.6054 0.744315 45.895C0.50047 43.1779 0.5 39.7348 0.5 35.1V24.9Z"
      stroke="#062B2B"
      stroke-opacity="0.1"
    />
    <path
      d="M35.1403 31.5016C35.1193 30.9637 35.388 30.4558 35.8446 30.1707C36.1207 29.9982 36.4761 29.8473 36.7921 29.7685C37.3143 29.6382 37.8664 29.7977 38.2386 30.1864C38.8507 30.8257 39.3004 31.6836 39.8033 32.408C40.2796 33.0942 41.4695 33.2512 41.9687 32.5047C42.4839 31.7341 42.9405 30.8229 43.572 30.1399C43.9375 29.7447 44.4866 29.5756 45.0111 29.6967C45.3283 29.7701 45.6863 29.9147 45.9655 30.0823C46.4269 30.3595 46.7045 30.8626 46.6928 31.4008C46.6731 32.3083 46.3764 33.2571 46.2158 34.1473C46.061 35.0048 46.9045 35.8337 47.7592 35.664C48.6464 35.4878 49.5899 35.1747 50.497 35.1391C51.0348 35.1181 51.5427 35.3868 51.8279 35.8433C52.0004 36.1195 52.1513 36.4749 52.2301 36.7908C52.3604 37.3131 52.2009 37.8651 51.8121 38.2374C51.1729 38.8495 50.3151 39.2991 49.5908 39.8019C48.9046 40.2782 48.7473 41.4683 49.4939 41.9675C50.2644 42.4827 51.1757 42.9393 51.8587 43.5708C52.2539 43.9362 52.423 44.4854 52.3018 45.0099C52.2285 45.3271 52.0839 45.6851 51.9162 45.9642C51.6391 46.4257 51.1359 46.7032 50.5978 46.6916C49.6903 46.6719 48.7417 46.3753 47.8516 46.2146C46.9939 46.0598 46.1648 46.9035 46.3346 47.7583C46.5108 48.6454 46.8239 49.5888 46.8594 50.4958C46.8805 51.0336 46.6117 51.5415 46.1552 51.8267C45.879 51.9992 45.5236 52.15 45.2077 52.2289C44.6854 52.3592 44.1334 52.1997 43.7611 51.8109C43.1491 51.1718 42.6996 50.314 42.1968 49.5897C41.7203 48.9034 40.5301 48.7463 40.0309 49.493C39.5157 50.2634 39.0592 51.1746 38.4278 51.8574C38.0623 52.2527 37.5132 52.4218 36.9887 52.3006C36.6715 52.2273 36.3135 52.0826 36.0343 51.915C35.5729 51.6379 35.2953 51.1347 35.307 50.5966C35.3267 49.6891 35.6233 48.7405 35.7839 47.8505C35.9388 46.9928 35.0951 46.1636 34.2402 46.3334C33.3531 46.5096 32.4098 46.8227 31.5028 46.8582C30.9649 46.8793 30.457 46.6105 30.1719 46.154C29.9994 45.8778 29.8485 45.5224 29.7697 45.2065C29.6394 44.6842 29.7989 44.1322 30.1877 43.7599C30.8269 43.1479 31.6847 42.6982 32.4091 42.1954C33.0954 41.7189 33.2522 40.5289 32.5056 40.0297C31.7351 39.5145 30.824 39.058 30.1411 38.4265C29.7459 38.0611 29.5768 37.5119 29.698 36.9875C29.7713 36.6702 29.9159 36.3122 30.0836 36.0331C30.3607 35.5717 30.8638 35.2941 31.402 35.3058C32.3095 35.3255 33.2583 35.6221 34.1485 35.7828C35.006 35.9376 35.8349 35.094 35.6652 34.2393C35.489 33.3521 35.1759 32.4087 35.1403 31.5016Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <path
      d="M20.7706 8.22357C20.9036 7.51411 21.5231 7 22.2449 7H23.7551C24.4769 7 25.0964 7.51411 25.2294 8.22357C25.5051 9.69403 25.4829 11.6321 27.1202 12.2606C27.3092 12.3331 27.4958 12.4105 27.6798 12.4926C29.2818 13.2072 30.6374 11.8199 31.8721 10.9752C32.4678 10.5676 33.2694 10.6421 33.7798 11.1525L34.8477 12.2204C35.3581 12.7308 35.4326 13.5323 35.025 14.128C34.1802 15.3627 32.7931 16.7183 33.5077 18.3202C33.5898 18.5043 33.6672 18.6909 33.7398 18.88C34.3683 20.5171 36.3061 20.4949 37.7764 20.7706C38.4859 20.9036 39 21.5231 39 22.2449V23.7551C39 24.4769 38.4859 25.0964 37.7764 25.2294C36.3061 25.5051 34.3685 25.483 33.7401 27.1201C33.6675 27.3093 33.59 27.4961 33.5079 27.6803C32.7934 29.282 34.1803 30.6374 35.025 31.8719C35.4326 32.4677 35.3581 33.2692 34.8477 33.7796L33.7798 34.8475C33.2694 35.3579 32.4678 35.4324 31.8721 35.0248C30.6376 34.1801 29.2823 32.7934 27.6806 33.508C27.4962 33.5903 27.3093 33.6678 27.12 33.7405C25.483 34.3688 25.5051 36.3062 25.2294 37.7764C25.0964 38.4859 24.4769 39 23.7551 39H22.2449C21.5231 39 20.9036 38.4859 20.7706 37.7764C20.4949 36.3062 20.517 34.3688 18.88 33.7405C18.6908 33.6678 18.5039 33.5903 18.3196 33.5081C16.7179 32.7936 15.3625 34.1804 14.1279 35.0251C13.5322 35.4327 12.7307 35.3582 12.2203 34.8478L11.1524 33.7799C10.642 33.2695 10.5675 32.4679 10.9751 31.8722C11.8198 30.6376 13.2067 29.2822 12.4922 27.6804C12.41 27.4962 12.3325 27.3093 12.2599 27.1201C11.6315 25.483 9.69392 25.5051 8.22357 25.2294C7.51411 25.0964 7 24.4769 7 23.7551V22.2449C7 21.5231 7.51411 20.9036 8.22357 20.7706C9.69394 20.4949 11.6317 20.5171 12.2602 18.88C12.3328 18.6909 12.4103 18.5042 12.4924 18.3201C13.207 16.7181 11.8198 15.3625 10.975 14.1278C10.5674 13.5321 10.6419 12.7305 11.1523 12.2201L12.2202 11.1522C12.7306 10.6418 13.5322 10.5673 14.1279 10.9749C15.3626 11.8197 16.7184 13.2071 18.3204 12.4925C18.5044 12.4105 18.6909 12.3331 18.8799 12.2606C20.5171 11.6321 20.4949 9.69403 20.7706 8.22357Z"
      fill="#906EF7"
      stroke="white"
      stroke-width="2"
    />
    <circle cx="23" cy="23" r="6" fill="#794CFF" stroke="white" stroke-width="2" />
    <circle cx="41" cy="41" r="4" fill="#794CFF" stroke="white" stroke-width="2" />
  </g>
  <defs>
    <clipPath id="1">
      <rect width="60" height="60" fill="white" />
    </clipPath>
  </defs>
</svg> `;
            var e2 = l.iv `
  :host {
    display: block;
    width: 55px;
    height: 55px;
  }
`,
                e3 = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let e5 = {
                    browser: eZ,
                    dao: eF,
                    defi: eH,
                    defiAlt: eV,
                    eth: eY,
                    layers: eK,
                    lock: eq,
                    login: eG,
                    network: eX,
                    nft: eJ,
                    noun: eQ,
                    profile: e0,
                    system: e1
                },
                e4 = class extends l.oi {
                    constructor() {
                        super(...arguments), this.name = "browser"
                    }
                    render() {
                        return l.dy `${e5[this.name]}`
                    }
                };
            e4.styles = [p, e2], e3([(0, b.Cb)()], e4.prototype, "name", void 0), e4 = e3([w("wui-visual")], e4);
            var e6 = r(80824);
            let e8 = {
                getSpacingStyles: (e, t) => Array.isArray(e) ? e[t] ? `var(--wui-spacing-${e[t]})` : void 0 : "string" == typeof e ? `var(--wui-spacing-${e})` : void 0,
                getFormattedDate: e => new Intl.DateTimeFormat("en-US", {
                    month: "short",
                    day: "numeric"
                }).format(e),
                getHostName: e => new URL(e).hostname,
                getTruncateString: ({
                    string: e,
                    charsStart: t,
                    charsEnd: r,
                    truncate: i
                }) => e.length <= t + r ? e : "end" === i ? `${e.substring(0,t)}...` : "start" === i ? `...${e.substring(e.length-r)}` : `${e.substring(0,Math.floor(t))}...${e.substring(e.length-Math.floor(r))}`,
                generateAvatarColors(e) {
                    let t = e.toLowerCase().replace(/^0x/iu, "").substring(0, 6),
                        r = this.hexToRgb(t),
                        i = [];
                    for (let e = 0; e < 5; e += 1) {
                        let t = this.tintColor(r, .15 * e);
                        i.push(`rgb(${t[0]}, ${t[1]}, ${t[2]})`)
                    }
                    return `
    --local-color-1: ${i[0]};
    --local-color-2: ${i[1]};
    --local-color-3: ${i[2]};
    --local-color-4: ${i[3]};
    --local-color-5: ${i[4]};
   `
                },
                hexToRgb(e) {
                    let t = parseInt(e, 16);
                    return [t >> 16 & 255, t >> 8 & 255, 255 & t]
                },
                tintColor(e, t) {
                    let [r, i, n] = e;
                    return [Math.round(r + (255 - r) * t), Math.round(i + (255 - i) * t), Math.round(n + (255 - n) * t)]
                },
                isNumber: e => /^[0-9]+$/u.test(e),
                getColorTheme: e => e || ("undefined" != typeof window && window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light" : "dark")
            };
            var e7 = l.iv `
  :host {
    display: flex;
    width: inherit;
    height: inherit;
  }
`,
                e9 = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let te = class extends l.oi {
                render() {
                    return this.style.cssText = `
      flex-direction: ${this.flexDirection};
      flex-wrap: ${this.flexWrap};
      flex-basis: ${this.flexBasis};
      flex-grow: ${this.flexGrow};
      flex-shrink: ${this.flexShrink};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&e8.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&e8.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&e8.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&e8.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&e8.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&e8.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&e8.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&e8.getSpacingStyles(this.margin,3)};
    `, l.dy `<slot></slot>`
                }
            };
            te.styles = [p, e7], e9([(0, b.Cb)()], te.prototype, "flexDirection", void 0), e9([(0, b.Cb)()], te.prototype, "flexWrap", void 0), e9([(0, b.Cb)()], te.prototype, "flexBasis", void 0), e9([(0, b.Cb)()], te.prototype, "flexGrow", void 0), e9([(0, b.Cb)()], te.prototype, "flexShrink", void 0), e9([(0, b.Cb)()], te.prototype, "alignItems", void 0), e9([(0, b.Cb)()], te.prototype, "justifyContent", void 0), e9([(0, b.Cb)()], te.prototype, "columnGap", void 0), e9([(0, b.Cb)()], te.prototype, "rowGap", void 0), e9([(0, b.Cb)()], te.prototype, "gap", void 0), e9([(0, b.Cb)()], te.prototype, "padding", void 0), e9([(0, b.Cb)()], te.prototype, "margin", void 0), te = e9([w("wui-flex")], te);
            var tt = l.iv `
  :host {
    display: block;
    width: 64px;
    height: 64px;
    border-radius: var(--wui-border-radius-3xl);
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    overflow: hidden;
    position: relative;
  }

  :host([data-variant='generated']) {
    --mixed-local-color-1: var(--local-color-1);
    --mixed-local-color-2: var(--local-color-2);
    --mixed-local-color-3: var(--local-color-3);
    --mixed-local-color-4: var(--local-color-4);
    --mixed-local-color-5: var(--local-color-5);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host([data-variant='generated']) {
      --mixed-local-color-1: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-1)
      );
      --mixed-local-color-2: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-2)
      );
      --mixed-local-color-3: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-3)
      );
      --mixed-local-color-4: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-4)
      );
      --mixed-local-color-5: color-mix(
        in srgb,
        var(--w3m-color-mix) var(--w3m-color-mix-strength),
        var(--local-color-5)
      );
    }
  }

  :host([data-variant='generated']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      var(--mixed-local-color-5) 31.25%,
      var(--mixed-local-color-3) 51.56%,
      var(--mixed-local-color-2) 65.63%,
      var(--mixed-local-color-1) 82.29%,
      var(--mixed-local-color-4) 100%
    );
  }

  :host([data-variant='default']) {
    box-shadow: 0 0 0 8px var(--wui-gray-glass-005);
    background: radial-gradient(
      75.29% 75.29% at 64.96% 24.36%,
      #fff 0.52%,
      #f5ccfc 31.25%,
      #dba4f5 51.56%,
      #9a8ee8 65.63%,
      #6493da 82.29%,
      #6ebdea 100%
    );
  }
`,
                tr = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let ti = class extends l.oi {
                constructor() {
                    super(...arguments), this.imageSrc = void 0, this.alt = void 0, this.address = void 0
                }
                render() {
                    return l.dy `${this.visualTemplate()}`
                }
                visualTemplate() {
                    if (this.imageSrc) return this.dataset.variant = "image", l.dy `<wui-image src=${this.imageSrc} alt=${this.alt??"avatar"}></wui-image>`;
                    if (this.address) {
                        this.dataset.variant = "generated";
                        let e = e8.generateAvatarColors(this.address);
                        return this.style.cssText = e, null
                    }
                    return this.dataset.variant = "default", null
                }
            };
            ti.styles = [p, tt], tr([(0, b.Cb)()], ti.prototype, "imageSrc", void 0), tr([(0, b.Cb)()], ti.prototype, "alt", void 0), tr([(0, b.Cb)()], ti.prototype, "address", void 0), ti = tr([w("wui-avatar")], ti);
            var tn = l.iv `
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    background-color: var(--wui-gray-glass-020);
    border-radius: var(--local-border-radius);
    box-shadow: 0 0 0 1px var(--local-border);
    width: var(--local-size);
    height: var(--local-size);
    min-height: var(--local-size);
    min-width: var(--local-size);
  }

  @supports (background: color-mix(in srgb, white 50%, black)) {
    :host {
      background-color: color-mix(in srgb, var(--local-bg-value) var(--local-bg-mix), transparent);
    }
  }
`,
                to = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let ta = class extends l.oi {
                constructor() {
                    super(...arguments), this.size = "md", this.backgroundColor = "accent-100", this.iconColor = "accent-100", this.background = "transparent", this.border = !1, this.borderColor = "wui-color-bg-125", this.icon = "copy"
                }
                render() {
                    let e = this.iconSize || this.size,
                        t = "lg" === this.size,
                        r = "xl" === this.size,
                        i = "gray" === this.background,
                        n = "opaque" === this.background,
                        o = "accent-100" === this.backgroundColor && n || "success-100" === this.backgroundColor && n || "error-100" === this.backgroundColor && n || "inverse-100" === this.backgroundColor && n,
                        a = `var(--wui-color-${this.backgroundColor})`;
                    return o ? a = `var(--wui-icon-box-bg-${this.backgroundColor})` : i && (a = `var(--wui-gray-${this.backgroundColor})`), this.style.cssText = `
       --local-bg-value: ${a};
       --local-bg-mix: ${o||i?"100%":t?"12%":"16%"};
       --local-border-radius: var(--wui-border-radius-${t?"xxs":r?"s":"3xl"});
       --local-size: var(--wui-icon-box-size-${this.size});
       --local-border: ${"wui-color-bg-125"===this.borderColor?"2px":"1px"} solid ${this.border?`var(--${this.borderColor})`:"transparent"}
   `, l.dy ` <wui-icon color=${this.iconColor} size=${e} name=${this.icon}></wui-icon> `
                }
            };
            ta.styles = [p, f, tn], to([(0, b.Cb)()], ta.prototype, "size", void 0), to([(0, b.Cb)()], ta.prototype, "backgroundColor", void 0), to([(0, b.Cb)()], ta.prototype, "iconColor", void 0), to([(0, b.Cb)()], ta.prototype, "iconSize", void 0), to([(0, b.Cb)()], ta.prototype, "background", void 0), to([(0, b.Cb)({
                type: Boolean
            })], ta.prototype, "border", void 0), to([(0, b.Cb)()], ta.prototype, "borderColor", void 0), to([(0, b.Cb)()], ta.prototype, "icon", void 0), ta = to([w("wui-icon-box")], ta);
            var ts = l.iv `
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    background: var(--wui-gray-glass-002);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-3xs) var(--wui-spacing-xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-005);
  }

  button:disabled {
    background: var(--wui-gray-glass-015);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-flex > wui-text {
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-image,
  button:disabled > wui-icon-box,
  button:disabled > wui-flex > wui-avatar {
    filter: grayscale(1);
  }

  button:has(wui-image) {
    padding: var(--wui-spacing-3xs) var(--wui-spacing-3xs) var(--wui-spacing-3xs)
      var(--wui-spacing-xs);
  }

  wui-text {
    color: var(--wui-color-fg-100);
  }

  wui-flex > wui-text {
    color: var(--wui-color-fg-200);
    transition: all var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  wui-flex {
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    padding: 4px var(--wui-spacing-m) 4px var(--wui-spacing-xxs);
  }

  wui-flex.local-no-balance {
    border-radius: 0px;
    border: none;
    background: transparent;
  }

  wui-avatar {
    width: 20px;
    height: 20px;
    box-shadow: 0 0 0 2px var(--wui-accent-glass-010);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }

    button:active:enabled > wui-flex > wui-text {
      color: var(--wui-color-fg-175);
    }
  }
`,
                tl = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let tc = class extends l.oi {
                constructor() {
                    super(...arguments), this.networkSrc = void 0, this.avatarSrc = void 0, this.balance = void 0, this.disabled = !1, this.isProfileName = !1, this.address = ""
                }
                render() {
                    return l.dy `
      <button ?disabled=${this.disabled}>
        ${this.balanceTemplate()}
        <wui-flex
          gap="xxs"
          alignItems="center"
          class=${(0,e6.o)(this.balance?void 0:"local-no-balance")}
        >
          <wui-avatar
            .imageSrc=${this.avatarSrc}
            alt=${this.address}
            address=${this.address}
          ></wui-avatar>
          <wui-text variant="paragraph-600" color="inherit">
            ${e8.getTruncateString({string:this.address,charsStart:this.isProfileName?18:4,charsEnd:this.isProfileName?0:6,truncate:this.isProfileName?"end":"middle"})}
          </wui-text>
        </wui-flex>
      </button>
    `
                }
                balanceTemplate() {
                    if (this.balance) {
                        let e = this.networkSrc ? l.dy `<wui-image src=${this.networkSrc}></wui-image>` : l.dy `
            <wui-icon-box
              size="sm"
              iconColor="fg-200"
              backgroundColor="fg-300"
              icon="networkPlaceholder"
            ></wui-icon-box>
          `;
                        return l.dy `
        ${e}
        <wui-text variant="paragraph-600" color="inherit"> ${this.balance} </wui-text>
      `
                    }
                    return null
                }
            };
            tc.styles = [p, f, ts], tl([(0, b.Cb)()], tc.prototype, "networkSrc", void 0), tl([(0, b.Cb)()], tc.prototype, "avatarSrc", void 0), tl([(0, b.Cb)()], tc.prototype, "balance", void 0), tl([(0, b.Cb)({
                type: Boolean
            })], tc.prototype, "disabled", void 0), tl([(0, b.Cb)({
                type: Boolean
            })], tc.prototype, "isProfileName", void 0), tl([(0, b.Cb)()], tc.prototype, "address", void 0), tc = tl([w("wui-account-button")], tc);
            var tu = l.iv `
  :host {
    position: relative;
    border-radius: inherit;
    overflow: hidden;
    background-color: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-size);
    height: var(--local-size);
    border-radius: var(--local-border-radius);
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host([name='Extension'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  :host([data-wallet-icon='allWallets']) {
    background-color: var(--wui-all-wallets-bg-100);
  }

  :host([data-wallet-icon='allWallets'])::after {
    border: 1px solid var(--wui-accent-glass-010);
  }

  wui-icon[data-parent-size='inherit'] {
    width: 75%;
    height: 75%;
    align-items: center;
  }

  wui-icon[data-parent-size='sm'] {
    width: 18px;
    height: 18px;
  }

  wui-icon[data-parent-size='md'] {
    width: 24px;
    height: 24px;
  }

  wui-icon[data-parent-size='lg'] {
    width: 42px;
    height: 42px;
  }

  wui-icon[data-parent-size='full'] {
    width: 100%;
    height: 100%;
  }
`,
                td = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let th = class extends l.oi {
                constructor() {
                    super(...arguments), this.size = "md", this.name = ""
                }
                render() {
                    let e = "xxs";
                    return e = "lg" === this.size ? "m" : "md" === this.size ? "xs" : "xxs", this.style.cssText = `
       --local-border-radius: var(--wui-border-radius-${e});
       --local-size: var(--wui-wallet-image-size-${this.size});
   `, this.walletIcon && (this.dataset.walletIcon = this.walletIcon), l.dy ` ${this.templateVisual()}`
                }
                templateVisual() {
                    return this.imageSrc ? l.dy `<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>` : this.walletIcon ? l.dy `<wui-icon
        data-parent-size="md"
        size="md"
        color="inherit"
        name=${this.walletIcon}
      ></wui-icon>` : l.dy `<wui-icon
      data-parent-size=${this.size}
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`
                }
            };
            th.styles = [p, tu], td([(0, b.Cb)()], th.prototype, "size", void 0), td([(0, b.Cb)()], th.prototype, "name", void 0), td([(0, b.Cb)()], th.prototype, "imageSrc", void 0), td([(0, b.Cb)()], th.prototype, "walletIcon", void 0), th = td([w("wui-wallet-image")], th);
            var tp = l.iv `
  :host {
    position: relative;
    border-radius: var(--wui-border-radius-xxs);
    width: 40px;
    height: 40px;
    overflow: hidden;
    background: var(--wui-gray-glass-002);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: var(--wui-spacing-4xs);
    padding: 3.75px !important;
  }

  :host::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  :host > wui-wallet-image {
    width: 14px;
    height: 14px;
    border-radius: var(--wui-border-radius-5xs);
  }
`,
                tf = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let tg = class extends l.oi {
                constructor() {
                    super(...arguments), this.walletImages = []
                }
                render() {
                    let e = this.walletImages.length < 4;
                    return l.dy `${this.walletImages.slice(0,4).map(({src:e,walletName:t})=>l.dy` <
                        wui - wallet - image
                    size = "inherit"
                    imageSrc = $ {
                        e
                    }
                    name = $ {
                            (0, e6.o)(t)
                        } >
                        < /wui-wallet-image>
                    `)}
    ${e?[...Array(4-this.walletImages.length)].map(()=>l.dy` <wui-wallet-image size="inherit" name=""></wui-wallet-image>`):null}`
                }
            };
            tg.styles = [p, tp], tf([(0, b.Cb)({
                type: Array
            })], tg.prototype, "walletImages", void 0), tg = tf([w("wui-all-wallets-image")], tg);
            var tw = l.iv `
  :host {
    width: var(--local-width);
    position: relative;
  }

  button {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    width: var(--local-width);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-010);
  }

  button[data-size='sm'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s);
  }

  button[data-size='sm'][data-icon-left='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-s) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  button[data-size='sm'][data-icon-right='true'] {
    padding: var(--wui-spacing-xxs) var(--wui-spacing-xs) var(--wui-spacing-xxs)
      var(--wui-spacing-s);
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button[data-size='md'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'][data-icon-left='true'] {
    padding: 8.2px var(--wui-spacing-l) 9px var(--wui-spacing-s);
  }

  button[data-size='md'][data-icon-right='true'] {
    padding: 8.2px var(--wui-spacing-s) 9px var(--wui-spacing-l);
  }

  wui-loading-spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    transition: all 200ms ease-in-out;
    transform: translate(-50%, -50%);
    opacity: var(--local-opacity-000);
  }
`,
                tm = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let tv = class extends l.oi {
                constructor() {
                    super(...arguments), this.size = "md", this.disabled = !1, this.fullWidth = !1, this.loading = !1, this.variant = "fill", this.hasIconLeft = !1, this.hasIconRight = !1
                }
                render() {
                    this.style.cssText = `
    --local-width: ${this.fullWidth?"100%":"auto"};
    --local-opacity-100: ${this.loading?0:1};
    --local-opacity-000: ${this.loading?1:0};`;
                    let e = "md" === this.size ? "paragraph-600" : "small-600";
                    return l.dy `
      <button
        data-variant=${this.variant}
        data-icon-left=${this.hasIconLeft}
        data-icon-right=${this.hasIconRight}
        data-size=${this.size}
        ?disabled=${this.disabled||this.loading}
        ontouchstart
      >
        ${this.loadingTemplate()}
        <slot name="iconLeft" @slotchange=${()=>this.handleSlotLeftChange()}></slot>
        <wui-text variant=${e} color="inherit">
          <slot></slot>
        </wui-text>
        <slot name="iconRight" @slotchange=${()=>this.handleSlotRightChange()}></slot>
      </button>
    `
                }
                handleSlotLeftChange() {
                    this.hasIconLeft = !0
                }
                handleSlotRightChange() {
                    this.hasIconRight = !0
                }
                loadingTemplate() {
                    return this.loading ? l.dy `<wui-loading-spinner color="fg-300"></wui-loading-spinner>` : l.dy ``
                }
            };
            tv.styles = [p, f, tw], tm([(0, b.Cb)()], tv.prototype, "size", void 0), tm([(0, b.Cb)({
                type: Boolean
            })], tv.prototype, "disabled", void 0), tm([(0, b.Cb)({
                type: Boolean
            })], tv.prototype, "fullWidth", void 0), tm([(0, b.Cb)({
                type: Boolean
            })], tv.prototype, "loading", void 0), tm([(0, b.Cb)()], tv.prototype, "variant", void 0), tm([(0, b.Cb)({
                type: Boolean
            })], tv.prototype, "hasIconLeft", void 0), tm([(0, b.Cb)({
                type: Boolean
            })], tv.prototype, "hasIconRight", void 0), tv = tm([w("wui-button")], tv);
            let tb = l.YP `<svg  viewBox="0 0 48 54" fill="none">
  <path
    d="M43.4605 10.7248L28.0485 1.61089C25.5438 0.129705 22.4562 0.129705 19.9515 1.61088L4.53951 10.7248C2.03626 12.2051 0.5 14.9365 0.5 17.886V36.1139C0.5 39.0635 2.03626 41.7949 4.53951 43.2752L19.9515 52.3891C22.4562 53.8703 25.5438 53.8703 28.0485 52.3891L43.4605 43.2752C45.9637 41.7949 47.5 39.0635 47.5 36.114V17.8861C47.5 14.9365 45.9637 12.2051 43.4605 10.7248Z"
  />
</svg>`;
            var ty = l.iv `
  :host {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) 10px;
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--wui-path-network);
    clip-path: var(--wui-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: var(--wui-gray-glass-010);
    stroke-width: 1px;
  }
`,
                tC = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let tx = class extends l.oi {
                constructor() {
                    super(...arguments), this.type = "wallet"
                }
                render() {
                    return l.dy `
      ${this.shimmerTemplate()}
      <wui-shimmer width="56px" height="20px" borderRadius="xs"></wui-shimmer>
    `
                }
                shimmerTemplate() {
                    return "network" === this.type ? l.dy ` <wui-shimmer
          data-type=${this.type}
          width="48px"
          height="54px"
          borderRadius="xs"
        ></wui-shimmer>
        ${tb}` : l.dy `<wui-shimmer width="56px" height="56px" borderRadius="xs"></wui-shimmer>`
                }
            };
            tx.styles = [p, f, ty], tC([(0, b.Cb)()], tx.prototype, "type", void 0), tx = tC([w("wui-card-select-loader")], tx);
            let t_ = l.YP `<svg width="86" height="96" fill="none">
  <path
    d="M78.3244 18.926L50.1808 2.45078C45.7376 -0.150261 40.2624 -0.150262 35.8192 2.45078L7.6756 18.926C3.23322 21.5266 0.5 26.3301 0.5 31.5248V64.4752C0.5 69.6699 3.23322 74.4734 7.6756 77.074L35.8192 93.5492C40.2624 96.1503 45.7376 96.1503 50.1808 93.5492L78.3244 77.074C82.7668 74.4734 85.5 69.6699 85.5 64.4752V31.5248C85.5 26.3301 82.7668 21.5266 78.3244 18.926Z"
  />
</svg>`;
            var tE = l.iv `
  :host {
    position: relative;
    border-radius: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    width: var(--local-width);
    height: var(--local-height);
  }

  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    fill: var(--wui-gray-glass-002);
  }

  svg > path {
    stroke: var(--local-stroke);
    transition: stroke var(--wui-ease-out-power-1) var(--wui-duration-lg);
  }

  wui-image {
    width: 100%;
    height: 100%;
    -webkit-clip-path: var(--local-path);
    clip-path: var(--local-path);
    background: var(--wui-gray-glass-002);
  }

  wui-icon {
    transform: translateY(-5%);
    width: var(--local-icon-size);
    height: var(--local-icon-size);
  }
`,
                tS = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let tk = class extends l.oi {
                constructor() {
                    super(...arguments), this.size = "md", this.name = "uknown", this.selected = !1
                }
                render() {
                    let e = "lg" === this.size;
                    return this.style.cssText = `
      --local-stroke: ${this.selected?"var(--wui-color-accent-100)":"var(--wui-gray-glass-010)"};
      --local-path: ${e?"var(--wui-path-network-lg)":"var(--wui-path-network)"};
      --local-width: ${e?"86px":"48px"};
      --local-height: ${e?"96px":"54px"};
      --local-icon-size: ${e?"42px":"24px"};
    `, l.dy `${this.templateVisual()} ${e?t_:tb}`
                }
                templateVisual() {
                    return this.imageSrc ? l.dy `<wui-image src=${this.imageSrc} alt=${this.name}></wui-image>` : l.dy `<wui-icon size="inherit" color="fg-200" name="networkPlaceholder"></wui-icon>`
                }
            };
            tk.styles = [p, tE], tS([(0, b.Cb)()], tk.prototype, "size", void 0), tS([(0, b.Cb)()], tk.prototype, "name", void 0), tS([(0, b.Cb)()], tk.prototype, "imageSrc", void 0), tS([(0, b.Cb)({
                type: Boolean
            })], tk.prototype, "selected", void 0), tk = tS([w("wui-network-image")], tk);
            var tA = l.iv `
  button {
    flex-direction: column;
    width: 76px;
    row-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xs) var(--wui-spacing-0);
    background-color: var(--wui-gray-glass-002);
    border-radius: clamp(0px, var(--wui-border-radius-xs), 20px);
  }

  button > wui-text {
    color: var(--wui-color-fg-100);
    max-width: 64px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  [data-selected='true'] {
    background-color: var(--wui-accent-glass-020);
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: var(--wui-accent-glass-015);
    }
  }

  [data-selected='true']:active:enabled {
    background-color: var(--wui-accent-glass-010);
  }
`,
                tD = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let t$ = class extends l.oi {
                constructor() {
                    super(...arguments), this.name = "Unknown", this.type = "wallet", this.imageSrc = void 0, this.disabled = !1, this.selected = !1
                }
                render() {
                    return l.dy `
      <button data-selected=${(0,e6.o)(this.selected)} ?disabled=${this.disabled} ontouchstart>
        ${this.imageTemplate()}
        <wui-text variant="tiny-500" color=${this.selected?"accent-100":"inherit"}>
          ${this.name}
        </wui-text>
      </button>
    `
                }
                imageTemplate() {
                    return "network" === this.type ? l.dy `
        <wui-network-image
          .selected=${this.selected}
          imageSrc=${(0,e6.o)(this.imageSrc)}
          name=${this.name}
        >
        </wui-network-image>
      ` : l.dy `
      <wui-wallet-image size="md" imageSrc=${(0,e6.o)(this.imageSrc)} name=${this.name}>
      </wui-wallet-image>
    `
                }
            };
            t$.styles = [p, f, tA], tD([(0, b.Cb)()], t$.prototype, "name", void 0), tD([(0, b.Cb)()], t$.prototype, "type", void 0), tD([(0, b.Cb)()], t$.prototype, "imageSrc", void 0), tD([(0, b.Cb)({
                type: Boolean
            })], t$.prototype, "disabled", void 0), tD([(0, b.Cb)({
                type: Boolean
            })], t$.prototype, "selected", void 0), t$ = tD([w("wui-card-select")], t$);
            var tR = l.iv `
  a {
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-3xl);
  }

  wui-image {
    border-radius: var(--wui-border-radius-3xl);
    overflow: hidden;
  }

  a.disabled > wui-icon,
  a.disabled > wui-image {
    filter: grayscale(1);
  }

  a[data-variant='fill'] {
    color: var(--wui-color-inverse-100);
    background-color: var(--wui-color-accent-100);
  }

  a[data-variant='shade'] {
    background-color: transparent;
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  a[data-variant='transparent'] {
    column-gap: var(--wui-spacing-xxs);
    background-color: transparent;
    padding: 7px var(--wui-spacing-s) 7px 10px;
    color: var(--wui-color-fg-150);
  }

  a[data-variant='transparent']:has(wui-text:first-child) {
    padding: 7px var(--wui-spacing-s);
  }

  a[data-variant='fill'],
  a[data-variant='shade'] {
    column-gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-xxs)
      var(--wui-spacing-xs);
  }

  a[data-variant='fill']:has(wui-text:first-child),
  a[data-variant='shade']:has(wui-text:first-child) {
    padding: 8.5px var(--wui-spacing-m) 9.5px var(--wui-spacing-m);
  }

  a[data-variant='fill'] > wui-image,
  a[data-variant='shade'] > wui-image {
    width: 24px;
    height: 24px;
  }

  a[data-variant='fill'] > wui-image {
    border: 1px solid var(--wui-color-accent-090);
  }

  a[data-variant='shade'] > wui-image {
    border: 1px solid var(--wui-gray-glass-010);
  }

  a[data-variant='fill'] > wui-icon,
  a[data-variant='shade'] > wui-icon {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-image {
    width: 14px;
    height: 14px;
  }

  a[data-variant='transparent'] > wui-icon {
    width: 12px;
    height: 12px;
  }

  a[data-variant='fill']:focus-visible {
    background-color: var(--wui-color-accent-090);
  }

  a[data-variant='shade']:focus-visible {
    background-color: var(--wui-gray-glass-015);
  }

  a[data-variant='transparent']:focus-visible {
    background-color: var(--wui-gray-glass-005);
  }

  a.disabled {
    color: var(--wui-gray-glass-015);
    background-color: var(--wui-gray-glass-015);
    pointer-events: none;
  }

  @media (hover: hover) and (pointer: fine) {
    a[data-variant='fill']:hover {
      background-color: var(--wui-color-accent-090);
    }

    a[data-variant='shade']:hover {
      background-color: var(--wui-gray-glass-015);
    }

    a[data-variant='transparent']:hover {
      background-color: var(--wui-gray-glass-005);
    }
  }

  a[data-variant='fill']:active {
    background-color: var(--wui-color-accent-080);
  }

  a[data-variant='shade']:active {
    background-color: var(--wui-gray-glass-020);
  }

  a[data-variant='transparent']:active {
    background-color: var(--wui-gray-glass-010);
  }
`,
                tO = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let tI = class extends l.oi {
                constructor() {
                    super(...arguments), this.variant = "fill", this.imageSrc = void 0, this.disabled = !1, this.icon = "externalLink", this.href = ""
                }
                render() {
                    let e = "transparent" === this.variant ? "small-600" : "paragraph-600";
                    return l.dy `
      <a
        rel="noreferrer"
        target="_blank"
        href=${this.href}
        class=${this.disabled?"disabled":""}
        data-variant=${this.variant}
      >
        ${this.imageTemplate()}
        <wui-text variant=${e} color="inherit">
          ${e8.getHostName(this.href)}
        </wui-text>
        <wui-icon name=${this.icon} color="inherit" size="inherit"></wui-icon>
      </a>
    `
                }
                imageTemplate() {
                    return this.imageSrc ? l.dy `<wui-image src=${this.imageSrc}></wui-image>` : null
                }
            };
            tI.styles = [p, f, tR], tO([(0, b.Cb)()], tI.prototype, "variant", void 0), tO([(0, b.Cb)()], tI.prototype, "imageSrc", void 0), tO([(0, b.Cb)({
                type: Boolean
            })], tI.prototype, "disabled", void 0), tO([(0, b.Cb)()], tI.prototype, "icon", void 0), tO([(0, b.Cb)()], tI.prototype, "href", void 0), tI = tO([w("wui-chip")], tI);
            var tT = l.iv `
  :host {
    position: relative;
    display: block;
  }

  button {
    background: var(--wui-color-accent-100);
    border: 1px solid var(--wui-gray-glass-010);
    border-radius: var(--wui-border-radius-m);
    gap: var(--wui-spacing-xs);
  }

  button.loading {
    background: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-gray-glass-010);
    pointer-events: none;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    border: 1px solid var(--wui-gray-glass-010);
  }

  button:disabled > wui-text {
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-accent-090);
    }

    button:active:enabled {
      background-color: var(--wui-color-accent-080);
    }
  }

  button:focus-visible {
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-color-accent-090);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  button[data-size='sm'] {
    padding: 6.75px 10px 7.25px;
  }

  ::slotted(*) {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
  }

  button > wui-text {
    transition: opacity 200ms ease-in-out;
    opacity: var(--local-opacity-100);
    color: var(--wui-color-inverse-100);
  }

  button[data-size='md'] {
    padding: 9px var(--wui-spacing-l) 9px var(--wui-spacing-l);
  }

  button[data-size='md'] + wui-text {
    padding-left: var(--wui-spacing-3xs);
  }

  wui-loading-spinner {
    width: 14px;
    height: 14px;
  }

  wui-loading-spinner::slotted(svg) {
    width: 10px !important;
    height: 10px !important;
  }

  button[data-size='sm'] > wui-loading-spinner {
    width: 12px;
    height: 12px;
  }
`,
                tN = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let tP = class extends l.oi {
                constructor() {
                    super(...arguments), this.size = "md", this.loading = !1
                }
                render() {
                    let e = "md" === this.size ? "paragraph-600" : "small-600";
                    return l.dy `
      <button data-size=${this.size} ?disabled=${this.loading} ontouchstart>
        ${this.loadingTemplate()}
        <wui-text variant=${e} color=${this.loading?"accent-100":"inherit"}>
          <slot></slot>
        </wui-text>
      </button>
    `
                }
                loadingTemplate() {
                    return this.loading ? l.dy `<wui-loading-spinner size=${this.size} color="accent-100"></wui-loading-spinner>` : null
                }
            };
            tP.styles = [p, f, tT], tN([(0, b.Cb)()], tP.prototype, "size", void 0), tN([(0, b.Cb)({
                type: Boolean
            })], tP.prototype, "loading", void 0), tP = tN([w("wui-connect-button")], tP);
            var tU = l.iv `
  wui-flex {
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,
                tM = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let tj = class extends l.oi {
                constructor() {
                    super(...arguments), this.disabled = !1, this.label = "", this.buttonLabel = ""
                }
                render() {
                    return l.dy `
      <wui-flex
        justifyContent="space-between"
        alignItems="center"
        .padding=${["1xs","2l","1xs","2l"]}
      >
        <wui-text variant="paragraph-500" color="fg-200">${this.label}</wui-text>
        <wui-button size="sm" variant="accent">
          ${this.buttonLabel}
          <wui-icon size="xs" color="inherit" slot="iconRight" name="chevronRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `
                }
            };
            tj.styles = [p, f, tU], tM([(0, b.Cb)({
                type: Boolean
            })], tj.prototype, "disabled", void 0), tM([(0, b.Cb)()], tj.prototype, "label", void 0), tM([(0, b.Cb)()], tj.prototype, "buttonLabel", void 0), tj = tM([w("wui-cta-button")], tj);
            var tL = r(43201),
                tB = l.iv `
  :host {
    position: relative;
    width: 100%;
    display: inline-block;
    color: var(--wui-color-fg-275);
  }

  input {
    width: 100%;
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    background: var(--wui-gray-glass-005);
    font-size: var(--wui-font-size-paragraph);
    font-weight: var(--wui-font-weight-light);
    letter-spacing: var(--wui-letter-spacing-paragraph);
    color: var(--wui-color-fg-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    caret-color: var(--wui-color-accent-100);
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:disabled::placeholder,
  input:disabled + wui-icon {
    color: var(--wui-color-fg-300);
  }

  input::placeholder {
    color: var(--wui-color-fg-275);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    pointer-events: none;
  }

  .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px var(--wui-spacing-s);
  }

  wui-icon + .wui-size-sm {
    padding: 9px var(--wui-spacing-m) 10px 36px;
  }

  wui-icon[data-input='sm'] {
    left: var(--wui-spacing-s);
  }

  .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-m);
  }

  wui-icon + .wui-size-md {
    padding: 15px var(--wui-spacing-m) var(--wui-spacing-l) var(--wui-spacing-3xl);
  }

  wui-icon[data-input='md'] {
    left: var(--wui-spacing-l);
  }

  input:placeholder-shown ~ ::slotted(wui-input-element),
  input:placeholder-shown ~ ::slotted(wui-icon) {
    opacity: 0;
    pointer-events: none;
  }

  ::slotted(wui-input-element),
  ::slotted(wui-icon) {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all var(--wui-ease-in-power-2) var(--wui-duration-md);
  }

  ::slotted(wui-input-element) {
    right: var(--wui-spacing-m);
  }

  ::slotted(wui-icon) {
    right: 0px;
  }
`,
                tz = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let tW = class extends l.oi {
                constructor() {
                    super(...arguments), this.inputElementRef = (0, tL.V)(), this.size = "md", this.disabled = !1, this.placeholder = "", this.type = "text"
                }
                render() {
                    let e = `wui-size-${this.size}`;
                    return l.dy ` ${this.templateIcon()}
      <input
        ${(0,tL.i)(this.inputElementRef)}
        class=${e}
        type=${this.type}
        enterkeyhint=${(0,e6.o)(this.enterKeyHint)}
        ?disabled=${this.disabled}
        placeholder=${this.placeholder}
        @input=${this.dispatchInputChangeEvent.bind(this)}
      />
      <slot></slot>`
                }
                templateIcon() {
                    return this.icon ? l.dy `<wui-icon
        data-input=${this.size}
        size="md"
        color="inherit"
        name=${this.icon}
      ></wui-icon>` : null
                }
                dispatchInputChangeEvent() {
                    this.dispatchEvent(new CustomEvent("inputChange", {
                        detail: this.inputElementRef.value ? .value,
                        bubbles: !0,
                        composed: !0
                    }))
                }
            };
            tW.styles = [p, f, tB], tz([(0, b.Cb)()], tW.prototype, "size", void 0), tz([(0, b.Cb)()], tW.prototype, "icon", void 0), tz([(0, b.Cb)({
                type: Boolean
            })], tW.prototype, "disabled", void 0), tz([(0, b.Cb)()], tW.prototype, "placeholder", void 0), tz([(0, b.Cb)()], tW.prototype, "type", void 0), tz([(0, b.Cb)()], tW.prototype, "keyHint", void 0), tW = tz([w("wui-input-text")], tW);
            var tZ = l.iv `
  :host {
    position: relative;
    display: inline-block;
  }

  wui-text {
    margin: var(--wui-spacing-xxs) var(--wui-spacing-m) var(--wui-spacing-0) var(--wui-spacing-m);
  }
`,
                tF = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let tH = class extends l.oi {
                constructor() {
                    super(...arguments), this.disabled = !1
                }
                render() {
                    return l.dy `
      <wui-input-text
        placeholder="Email"
        icon="mail"
        size="md"
        .disabled=${this.disabled}
      ></wui-input-text>
      ${this.templateError()}
    `
                }
                templateError() {
                    return this.errorMessage ? l.dy `<wui-text variant="tiny-500" color="error-100">${this.errorMessage}</wui-text>` : null
                }
            };
            tH.styles = [p, tZ], tF([(0, b.Cb)()], tH.prototype, "errorMessage", void 0), tF([(0, b.Cb)({
                type: Boolean
            })], tH.prototype, "disabled", void 0), tH = tF([w("wui-email-input")], tH);
            var tV = l.iv `
  button {
    border-radius: var(--wui-border-radius-xxs);
    color: var(--wui-color-fg-100);
    padding: var(--wui-spacing-2xs);
  }

  @media (max-width: 700px) {
    button {
      padding: var(--wui-spacing-s);
    }
  }

  button > wui-icon {
    pointer-events: none;
  }

  button:disabled > wui-icon {
    color: var(--wui-color-bg-300) !important;
  }

  button:disabled {
    background-color: transparent;
  }
`,
                tY = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let tK = class extends l.oi {
                constructor() {
                    super(...arguments), this.size = "md", this.disabled = !1, this.icon = "copy", this.iconColor = "inherit"
                }
                render() {
                    return l.dy `
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-icon color=${this.iconColor} size=${this.size} name=${this.icon}></wui-icon>
      </button>
    `
                }
            };
            tK.styles = [p, f, g, tV], tY([(0, b.Cb)()], tK.prototype, "size", void 0), tY([(0, b.Cb)({
                type: Boolean
            })], tK.prototype, "disabled", void 0), tY([(0, b.Cb)()], tK.prototype, "icon", void 0), tY([(0, b.Cb)()], tK.prototype, "iconColor", void 0), tK = tY([w("wui-icon-link")], tK);
            var tq = l.iv `
  button {
    background-color: var(--wui-color-fg-300);
    border-radius: var(--wui-border-radius-4xs);
    width: 16px;
    height: 16px;
  }

  button:disabled {
    background-color: var(--wui-color-bg-300);
  }

  wui-icon {
    color: var(--wui-color-bg-200) !important;
  }

  button:focus-visible {
    background-color: var(--wui-color-fg-250);
    border: 1px solid var(--wui-color-accent-100);
  }

  button:active:enabled {
    background-color: var(--wui-color-fg-225);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-color-fg-250);
    }
  }
`,
                tG = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let tX = class extends l.oi {
                constructor() {
                    super(...arguments), this.icon = "copy"
                }
                render() {
                    return l.dy `
      <button>
        <wui-icon color="inherit" size="xxs" name=${this.icon}></wui-icon>
      </button>
    `
                }
            };
            tX.styles = [p, f, tq], tG([(0, b.Cb)()], tX.prototype, "icon", void 0), tX = tG([w("wui-input-element")], tX);
            var tJ = l.iv `
  :host {
    position: relative;
    display: inline-block;
  }

  input {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-xs);
    border: 1px solid var(--wui-gray-glass-005);
    font-family: var(--wui-font-family);
    font-size: var(--wui-font-size-large);
    font-weight: var(--wui-font-weight-regular);
    letter-spacing: var(--wui-letter-spacing-large);
    text-align: center;
    color: var(--wui-color-fg-100);
    caret-color: var(--wui-color-accent-100);
    transition: all var(--wui-ease-inout-power-1) var(--wui-duration-lg);
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0px;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  input:disabled {
    cursor: not-allowed;
    border: 1px solid var(--wui-gray-glass-010);
    background: var(--wui-gray-glass-015);
  }

  input:focus:enabled {
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-sm);
    background-color: var(--wui-gray-glass-010);
    border: 1px solid var(--wui-color-accent-100);
    -webkit-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    -moz-box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
    box-shadow: 0px 0px 0px 4px var(--wui-box-shadow-blue);
  }

  input:hover:enabled {
    background-color: var(--wui-gray-glass-010);
  }
`,
                tQ = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let t0 = class extends l.oi {
                constructor() {
                    super(...arguments), this.disabled = !1
                }
                render() {
                    return l.dy `<input
      type="number"
      maxlength="1"
      inputmode="numeric"
      autofocus
      ?disabled=${this.disabled}
    /> `
                }
            };
            t0.styles = [p, f, tJ], tQ([(0, b.Cb)({
                type: Boolean
            })], t0.prototype, "disabled", void 0), t0 = tQ([w("wui-input-numeric")], t0);
            var t1 = l.iv `
  button {
    padding: var(--wui-spacing-4xs) var(--wui-spacing-xxs);
    border-radius: var(--wui-border-radius-3xs);
    background-color: transparent;
    color: var(--wui-color-accent-100);
  }

  button:disabled {
    background-color: transparent;
    color: var(--wui-gray-glass-015);
  }
`,
                t2 = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let t3 = class extends l.oi {
                constructor() {
                    super(...arguments), this.disabled = !1, this.color = "inherit"
                }
                render() {
                    return l.dy `
      <button ?disabled=${this.disabled} ontouchstart>
        <slot name="iconLeft"></slot>
        <wui-text variant="small-600" color=${this.color}>
          <slot></slot>
        </wui-text>
        <slot name="iconRight"></slot>
      </button>
    `
                }
            };
            t3.styles = [p, f, t1], t2([(0, b.Cb)({
                type: Boolean
            })], t3.prototype, "disabled", void 0), t2([(0, b.Cb)()], t3.prototype, "color", void 0), t3 = t2([w("wui-link")], t3);
            var t5 = l.iv `
  button {
    column-gap: var(--wui-spacing-s);
    padding: 11px 18px 11px var(--wui-spacing-s);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-250);
  }

  button[data-iconvariant='square'],
  button[data-iconvariant='square-blue'] {
    padding: 6px 18px 6px 9px;
  }

  button > wui-flex {
    flex: 1;
  }

  button > wui-image {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
    border-radius: var(--wui-border-radius-3xl);
  }

  button > wui-icon {
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='blue'] {
    box-shadow: 0 0 0 2px var(--wui-accent-glass-005);
  }

  button > wui-icon-box[data-variant='overlay'] {
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }

  button > wui-icon-box[data-variant='square-blue'] {
    border-radius: var(--wui-border-radius-3xs);
    position: relative;
    border: none;
    width: 36px;
    height: 36px;
  }

  button > wui-icon-box[data-variant='square-blue']::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    border-radius: inherit;
    border: 1px solid var(--wui-accent-glass-010);
    pointer-events: none;
  }

  button > wui-icon:last-child {
    width: 14px;
    height: 14px;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button[data-loading='true'] > wui-icon {
    transition: opacity 200ms ease-in-out;
    opacity: 0;
  }

  wui-loading-spinner {
    position: absolute;
    right: 18px;
    top: 50%;
    transform: translateY(-50%);
  }
`,
                t4 = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let t6 = class extends l.oi {
                constructor() {
                    super(...arguments), this.variant = "icon", this.disabled = !1, this.imageSrc = void 0, this.alt = void 0, this.chevron = !1, this.loading = !1
                }
                render() {
                    return l.dy `
      <button
        ?disabled=${!!this.loading||!!this.disabled}
        data-loading=${this.loading}
        data-iconvariant=${(0,e6.o)(this.iconVariant)}
        ontouchstart
      >
        ${this.loadingTemplate()} ${this.visualTemplate()}
        <wui-flex gap="3xs">
          <slot></slot>
        </wui-flex>
        ${this.chevronTemplate()}
      </button>
    `
                }
                visualTemplate() {
                    if ("image" === this.variant && this.imageSrc) return l.dy `<wui-image src=${this.imageSrc} alt=${this.alt??"list item"}></wui-image>`;
                    if ("square" === this.iconVariant && this.icon && "icon" === this.variant) return l.dy `<wui-icon name=${this.icon}></wui-icon>`;
                    if ("icon" === this.variant && this.icon && this.iconVariant) {
                        let e = ["blue", "square-blue"].includes(this.iconVariant) ? "accent-100" : "fg-200",
                            t = "square-blue" === this.iconVariant ? "mdl" : "md",
                            r = this.iconSize ? this.iconSize : t;
                        return l.dy `
        <wui-icon-box
          data-variant=${this.iconVariant}
          icon=${this.icon}
          iconSize=${r}
          background="transparent"
          iconColor=${e}
          backgroundColor=${e}
          size=${t}
        ></wui-icon-box>
      `
                    }
                    return null
                }
                loadingTemplate() {
                    return this.loading ? l.dy `<wui-loading-spinner color="fg-300"></wui-loading-spinner>` : l.dy ``
                }
                chevronTemplate() {
                    return this.chevron ? l.dy `<wui-icon size="inherit" color="fg-200" name="chevronRight"></wui-icon>` : null
                }
            };
            t6.styles = [p, f, t5], t4([(0, b.Cb)()], t6.prototype, "icon", void 0), t4([(0, b.Cb)()], t6.prototype, "iconSize", void 0), t4([(0, b.Cb)()], t6.prototype, "variant", void 0), t4([(0, b.Cb)()], t6.prototype, "iconVariant", void 0), t4([(0, b.Cb)({
                type: Boolean
            })], t6.prototype, "disabled", void 0), t4([(0, b.Cb)()], t6.prototype, "imageSrc", void 0), t4([(0, b.Cb)()], t6.prototype, "alt", void 0), t4([(0, b.Cb)({
                type: Boolean
            })], t6.prototype, "chevron", void 0), t4([(0, b.Cb)({
                type: Boolean
            })], t6.prototype, "loading", void 0), t6 = t4([w("wui-list-item")], t6), (a = s || (s = {})).approve = "approved", a.bought = "bought", a.borrow = "borrowed", a.burn = "burnt", a.cancel = "canceled", a.claim = "claimed", a.deploy = "deployed", a.deposit = "deposited", a.execute = "executed", a.mint = "minted", a.receive = "received", a.repay = "repaid", a.send = "sent", a.sell = "sold", a.stake = "staked", a.trade = "swapped", a.unstake = "unstaked", a.withdraw = "withdrawn";
            var t8 = l.iv `
  :host > wui-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 40px;
    height: 40px;
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-005);
  }

  :host > wui-flex wui-image {
    display: block;
    z-index: -1;
  }

  :host > wui-flex,
  :host > wui-flex wui-image,
  .swap-images-container,
  .swap-images-container.nft,
  wui-image.nft {
    border-top-left-radius: var(--local-left-border-radius);
    border-top-right-radius: var(--local-right-border-radius);
    border-bottom-left-radius: var(--local-left-border-radius);
    border-bottom-right-radius: var(--local-right-border-radius);
  }

  wui-icon {
    width: 20px;
    height: 20px;
  }

  wui-icon-box {
    position: absolute;
    right: 0;
    bottom: 0;
    transform: translate(20%, 20%);
  }

  .swap-images-container {
    position: relative;
    width: 40px;
    height: 40px;
    overflow: hidden;
  }

  .swap-images-container wui-image:first-child {
    position: absolute;
    width: 40px;
    height: 40px;
    top: 0;
    left: 0%;
    clip-path: inset(0px calc(50% + 2px) 0px 0%);
  }

  .swap-images-container wui-image:last-child {
    clip-path: inset(0px 0px 0px calc(50% + 2px));
  }
`,
                t7 = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let t9 = class extends l.oi {
                constructor() {
                    super(...arguments), this.images = [], this.secondImage = {
                        type: void 0,
                        url: ""
                    }
                }
                render() {
                    let [e, t] = this.images, r = e ? .type === "NFT", i = t ? .url ? "NFT" === t.type : r;
                    return this.style.cssText = `
    --local-left-border-radius: ${r?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    --local-right-border-radius: ${i?"var(--wui-border-radius-xxs)":"var(--wui-border-radius-s)"};
    `, l.dy `<wui-flex> ${this.templateVisual()} ${this.templateIcon()} </wui-flex>`
                }
                templateVisual() {
                    let [e, t] = this.images, r = e ? .type;
                    return 2 === this.images.length && (e ? .url || t ? .url) ? l.dy `<div class="swap-images-container">
        ${e?.url?l.dy`<wui-image src=${e.url} alt="Transaction image"></wui-image>`:null}
        ${t?.url?l.dy`<wui-image src=${t.url} alt="Transaction image"></wui-image>`:null}
      </div>` : e ? .url ? l.dy `<wui-image src=${e.url} alt="Transaction image"></wui-image>` : "NFT" === r ? l.dy `<wui-icon size="inherit" color="fg-200" name="nftPlaceholder"></wui-icon>` : l.dy `<wui-icon size="inherit" color="fg-200" name="coinPlaceholder"></wui-icon>`
                }
                templateIcon() {
                    let e, t = "accent-100";
                    return (e = this.getIcon(), this.status && (t = this.getStatusColor()), e) ? l.dy `
      <wui-icon-box
        size="xxs"
        iconColor=${t}
        backgroundColor=${t}
        background="opaque"
        icon=${e}
        ?border=${!0}
        borderColor="wui-color-bg-125"
      ></wui-icon-box>
    ` : null
                }
                getDirectionIcon() {
                    switch (this.direction) {
                        case "in":
                            return "arrowBottom";
                        case "out":
                            return "arrowTop";
                        default:
                            return
                    }
                }
                getIcon() {
                    return this.onlyDirectionIcon ? this.getDirectionIcon() : "trade" === this.type ? "swapHorizontalBold" : "approve" === this.type ? "checkmark" : "cancel" === this.type ? "close" : this.getDirectionIcon()
                }
                getStatusColor() {
                    switch (this.status) {
                        case "confirmed":
                            return "success-100";
                        case "failed":
                            return "error-100";
                        case "pending":
                            return "inverse-100";
                        default:
                            return "accent-100"
                    }
                }
            };
            t9.styles = [t8], t7([(0, b.Cb)()], t9.prototype, "type", void 0), t7([(0, b.Cb)()], t9.prototype, "status", void 0), t7([(0, b.Cb)()], t9.prototype, "direction", void 0), t7([(0, b.Cb)()], t9.prototype, "onlyDirectionIcon", void 0), t7([(0, b.Cb)()], t9.prototype, "images", void 0), t7([(0, b.Cb)()], t9.prototype, "secondImage", void 0), t9 = t7([w("wui-transaction-visual")], t9);
            var re = l.iv `
  :host > wui-flex:first-child {
    align-items: center;
    column-gap: var(--wui-spacing-s);
    padding: 6.5px var(--wui-spacing-l) 6.5px var(--wui-spacing-xs);
    width: 100%;
  }

  :host > wui-flex:first-child wui-text:nth-child(1) {
    text-transform: capitalize;
  }

  wui-transaction-visual {
    width: 40px;
    height: 40px;
  }

  wui-flex {
    flex: 1;
  }

  :host wui-flex wui-flex {
    overflow: hidden;
  }

  :host .description-container wui-text span {
    word-break: break-all;
  }

  :host .description-container wui-text {
    overflow: hidden;
  }

  :host .description-separator-icon {
    margin: 0px 6px;
  }

  :host wui-text > span {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
  }
`,
                rt = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let rr = class extends l.oi {
                constructor() {
                    super(...arguments), this.type = "approve", this.onlyDirectionIcon = !1, this.images = []
                }
                render() {
                    return l.dy `
      <wui-flex>
        <wui-transaction-visual
          status=${this.status}
          direction=${this.direction}
          type=${this.type}
          onlyDirectionIcon=${this.onlyDirectionIcon}
          .images=${this.images}
        ></wui-transaction-visual>
        <wui-flex flexDirection="column" gap="3xs">
          <wui-text variant="paragraph-600" color="fg-100">
            ${s[this.type]}
          </wui-text>
          <wui-flex class="description-container">
            ${this.templateDescription()} ${this.templateSecondDescription()}
          </wui-flex>
        </wui-flex>
        <wui-text variant="micro-700" color="fg-300"><span>${this.date}</span></wui-text>
      </wui-flex>
    `
                }
                templateDescription() {
                    let e = this.descriptions ? .[0];
                    return e ? l.dy `
          <wui-text variant="small-500" color="fg-200">
            <span>${e}</span>
          </wui-text>
        ` : null
                }
                templateSecondDescription() {
                    let e = this.descriptions ? .[1];
                    return e ? l.dy `
          <wui-icon class="description-separator-icon" size="xxs" name="arrowRight"></wui-icon>
          <wui-text variant="small-400" color="fg-200">
            <span>${e}</span>
          </wui-text>
        ` : null
                }
            };
            rr.styles = [p, re], rt([(0, b.Cb)()], rr.prototype, "type", void 0), rt([(0, b.Cb)()], rr.prototype, "descriptions", void 0), rt([(0, b.Cb)()], rr.prototype, "date", void 0), rt([(0, b.Cb)()], rr.prototype, "onlyDirectionIcon", void 0), rt([(0, b.Cb)()], rr.prototype, "status", void 0), rt([(0, b.Cb)()], rr.prototype, "direction", void 0), rt([(0, b.Cb)()], rr.prototype, "images", void 0), rr = rt([w("wui-transaction-list-item")], rr);
            var ri = l.iv `
  :host > wui-flex:first-child {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
  }

  wui-flex {
    display: flex;
    flex: 1;
  }
`;
            let rn = class extends l.oi {
                render() {
                    return l.dy `
      <wui-flex alignItems="center">
        <wui-shimmer width="40px" height="40px"></wui-shimmer>
        <wui-flex flexDirection="column" gap="2xs">
          <wui-shimmer width="72px" height="16px" borderRadius="4xs"></wui-shimmer>
          <wui-shimmer width="148px" height="14px" borderRadius="4xs"></wui-shimmer>
        </wui-flex>
        <wui-shimmer width="24px" height="12px" borderRadius="5xs"></wui-shimmer>
      </wui-flex>
    `
                }
            };
            rn.styles = [p, ri], rn = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }([w("wui-transaction-list-item-loader")], rn);
            var ro = l.iv `
  :host {
    display: block;
    padding: 3.5px 5px !important;
    border-radius: var(--wui-border-radius-5xs);
  }

  :host([data-variant='main']) {
    background-color: var(--wui-accent-glass-015);
    color: var(--wui-color-accent-100);
  }

  :host([data-variant='shade']) {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-200);
  }

  :host([data-variant='success']) {
    background-color: var(--wui-icon-box-bg-success-100);
    color: var(--wui-color-success-100);
  }

  :host([data-variant='error']) {
    background-color: var(--wui-icon-box-bg-error-100);
    color: var(--wui-color-error-100);
  }
`,
                ra = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let rs = class extends l.oi {
                constructor() {
                    super(...arguments), this.variant = "main"
                }
                render() {
                    return this.dataset.variant = this.variant, l.dy `
      <wui-text data-variant=${this.variant} variant="micro-700" color="inherit">
        <slot></slot>
      </wui-text>
    `
                }
            };
            rs.styles = [p, ro], ra([(0, b.Cb)()], rs.prototype, "variant", void 0), rs = ra([w("wui-tag")], rs);
            var rl = l.iv `
  button {
    column-gap: var(--wui-spacing-s);
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    width: 100%;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
    color: var(--wui-color-fg-100);
  }

  button > wui-text:nth-child(2) {
    display: flex;
    flex: 1;
  }

  wui-icon {
    color: var(--wui-color-fg-200) !important;
  }

  button:disabled {
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  button:disabled > wui-tag {
    background-color: var(--wui-gray-glass-010);
    color: var(--wui-color-fg-300);
  }
`,
                rc = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let ru = class extends l.oi {
                constructor() {
                    super(...arguments), this.walletImages = [], this.imageSrc = "", this.name = "", this.disabled = !1, this.showAllWallets = !1
                }
                render() {
                    return l.dy `
      <button ?disabled=${this.disabled} ontouchstart>
        ${this.templateAllWallets()} ${this.templateWalletImage()}
        <wui-text variant="paragraph-500" color="inherit">${this.name}</wui-text>
        ${this.templateStatus()}
      </button>
    `
                }
                templateAllWallets() {
                    return this.showAllWallets && this.imageSrc ? l.dy ` <wui-all-wallets-image .imageeSrc=${this.imageSrc}> </wui-all-wallets-image> ` : this.showAllWallets && this.walletIcon ? l.dy ` <wui-wallet-image .walletIcon=${this.walletIcon} size="sm"> </wui-wallet-image> ` : null
                }
                templateWalletImage() {
                    return !this.showAllWallets && this.imageSrc ? l.dy `<wui-wallet-image
        size="sm"
        imageSrc=${this.imageSrc}
        name=${this.name}
      ></wui-wallet-image>` : this.showAllWallets || this.imageSrc ? null : l.dy `<wui-wallet-image size="sm" name=${this.name}></wui-wallet-image>`
                }
                templateStatus() {
                    return this.tagLabel && this.tagVariant ? l.dy `<wui-tag variant=${this.tagVariant}>${this.tagLabel}</wui-tag>` : this.icon ? l.dy `<wui-icon color="inherit" size="sm" name=${this.icon}></wui-icon>` : null
                }
            };
            ru.styles = [p, f, rl], rc([(0, b.Cb)({
                type: Array
            })], ru.prototype, "walletImages", void 0), rc([(0, b.Cb)()], ru.prototype, "imageSrc", void 0), rc([(0, b.Cb)()], ru.prototype, "name", void 0), rc([(0, b.Cb)()], ru.prototype, "tagLabel", void 0), rc([(0, b.Cb)()], ru.prototype, "tagVariant", void 0), rc([(0, b.Cb)()], ru.prototype, "icon", void 0), rc([(0, b.Cb)()], ru.prototype, "walletIcon", void 0), rc([(0, b.Cb)({
                type: Boolean
            })], ru.prototype, "disabled", void 0), rc([(0, b.Cb)({
                type: Boolean
            })], ru.prototype, "showAllWallets", void 0), ru = rc([w("wui-list-wallet")], ru);
            var rd = l.iv `
  :host {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-010);
    overflow: hidden;
  }

  wui-icon {
    width: 100%;
    height: 100%;
  }
`,
                rh = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let rp = class extends l.oi {
                constructor() {
                    super(...arguments), this.logo = "google"
                }
                render() {
                    return l.dy `<wui-icon color="inherit" size="inherit" name=${this.logo}></wui-icon> `
                }
            };
            rp.styles = [p, rd], rh([(0, b.Cb)()], rp.prototype, "logo", void 0), rp = rh([w("wui-logo")], rp);
            var rf = l.iv `
  :host {
    display: block;
  }

  button {
    width: 50px;
    height: 50px;
    background: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-xs);
  }
`,
                rg = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let rw = class extends l.oi {
                constructor() {
                    super(...arguments), this.logo = "google", this.disabled = !1
                }
                render() {
                    return l.dy `
      <button ?disabled=${this.disabled} ontouchstart>
        <wui-logo logo=${this.logo}></wui-logo>
      </button>
    `
                }
            };
            rw.styles = [p, f, rf], rg([(0, b.Cb)()], rw.prototype, "logo", void 0), rg([(0, b.Cb)({
                type: Boolean
            })], rw.prototype, "disabled", void 0), rw = rg([w("wui-logo-select")], rw);
            var rm = l.iv `
  :host {
    display: block;
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
    display: flex;
    gap: var(--wui-spacing-xs);
    padding: var(--wui-spacing-2xs) var(--wui-spacing-s) var(--wui-spacing-2xs)
      var(--wui-spacing-xs);
    border: 1px solid var(--wui-gray-glass-010);
    background-color: var(--wui-gray-glass-005);
    color: var(--wui-color-fg-100);
  }

  button:disabled {
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-gray-glass-015);
    color: var(--wui-gray-glass-015);
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: var(--wui-gray-glass-010);
    }

    button:active:enabled {
      background-color: var(--wui-gray-glass-015);
    }
  }

  wui-image,
  wui-icon-box {
    border-radius: var(--wui-border-radius-3xl);
    width: 24px;
    height: 24px;
    box-shadow: 0 0 0 2px var(--wui-gray-glass-005);
  }
`,
                rv = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let rb = class extends l.oi {
                constructor() {
                    super(...arguments), this.imageSrc = void 0, this.disabled = !1
                }
                render() {
                    return l.dy `
      <button ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant="paragraph-600" color="inherit">
          <slot></slot>
        </wui-text>
      </button>
    `
                }
                visualTemplate() {
                    return this.imageSrc ? l.dy `<wui-image src=${this.imageSrc}></wui-image>` : l.dy `
      <wui-icon-box
        size="sm"
        iconColor="inverse-100"
        backgroundColor="fg-100"
        icon="networkPlaceholder"
      ></wui-icon-box>
    `
                }
            };
            rb.styles = [p, f, rm], rv([(0, b.Cb)()], rb.prototype, "imageSrc", void 0), rv([(0, b.Cb)({
                type: Boolean
            })], rb.prototype, "disabled", void 0), rb = rv([w("wui-network-button")], rb);
            var ry = l.iv `
  :host {
    position: relative;
    display: block;
  }
`,
                rC = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let rx = class extends l.oi {
                constructor() {
                    super(...arguments), this.length = 6, this.numerics = [], this.valueArr = Array.from({
                        length: this.length
                    }).map(() => ""), this.handleKeyDown = (e, t) => {
                        let r = e.target,
                            i = this.getInputElement(r);
                        if (!i) return;
                        ["ArrowLeft", "ArrowRight", "Shift", "Delete"].includes(e.key) && e.preventDefault();
                        let n = i.selectionStart;
                        switch (e.key) {
                            case "ArrowLeft":
                                n && i.setSelectionRange(n + 1, n + 1), this.focusInputField("prev", t);
                                break;
                            case "ArrowRight":
                            case "Shift":
                                this.focusInputField("next", t);
                                break;
                            case "Delete":
                            case "Backspace":
                                "" === i.value ? this.focusInputField("prev", t) : (i.value = "", this.valueArr[t] = "")
                        }
                    }, this.focusInputField = (e, t) => {
                        if ("next" === e) {
                            let e = t + 1,
                                r = this.numerics[e < this.length ? e : t],
                                i = r ? this.getInputElement(r) : void 0;
                            i && i.focus()
                        }
                        if ("prev" === e) {
                            let e = t - 1,
                                r = this.numerics[e > -1 ? e : t],
                                i = r ? this.getInputElement(r) : void 0;
                            i && i.focus()
                        }
                    }
                }
                firstUpdated() {
                    let e = this.shadowRoot ? .querySelectorAll("wui-input-numeric");
                    e && (this.numerics = Array.from(e))
                }
                render() {
                    return l.dy `
      <wui-flex gap="xxs">
        ${Array.from({length:this.length}).map((e,t)=>l.dy` <
                        wui - input - numeric
                    @input = $ {
                        e => this.handleInput(e, t)
                    }
                    @keydown = $ {
                            e => this.handleKeyDown(e, t)
                        } >
                        <
                        /wui-input-numeric>
                    `)}
      </wui-flex>
    `
                }
                handleInput(e, t) {
                    let r = e.target,
                        i = this.getInputElement(r);
                    if (i) {
                        let r = i.value;
                        "insertFromPaste" === e.inputType ? this.handlePaste(i, r, t) : e8.isNumber(r) && e.data ? (i.value = e.data, this.valueArr[t] = e.data, this.focusInputField("next", t)) : (i.value = "", this.valueArr[t] = "")
                    }
                    this.dispatchInputChangeEvent()
                }
                handlePaste(e, t, r) {
                    let i = t[0];
                    if (i && e8.isNumber(i)) {
                        e.value = i, this.valueArr[r] = i;
                        let n = t.substring(1);
                        if (r + 1 < this.length && n.length) {
                            let e = this.numerics[r + 1],
                                t = e ? this.getInputElement(e) : void 0;
                            t && this.handlePaste(t, n, r + 1)
                        } else this.focusInputField("next", r)
                    } else e.value = "", this.valueArr[r] = ""
                }
                getInputElement(e) {
                    return e.shadowRoot ? .querySelector("input") ? e.shadowRoot.querySelector("input") : null
                }
                dispatchInputChangeEvent() {
                    let e = this.valueArr.join("");
                    this.dispatchEvent(new CustomEvent("inputChange", {
                        detail: e,
                        bubbles: !0,
                        composed: !0
                    }))
                }
            };
            rx.styles = [p, ry], rC([(0, b.Cb)({
                type: Number
            })], rx.prototype, "length", void 0), rx = rC([w("wui-otp")], rx);
            var r_ = r(75298);

            function rE(e, t, r) {
                return e !== t && (e - t < 0 ? t - e : e - t) <= r + .1
            }
            let rS = {
                generate(e, t, r) {
                    let i = "#141414",
                        n = [],
                        o = function(e, t) {
                            let r = Array.prototype.slice.call(r_.create(e, {
                                    errorCorrectionLevel: "Q"
                                }).modules.data, 0),
                                i = Math.sqrt(r.length);
                            return r.reduce((e, t, r) => (r % i == 0 ? e.push([t]) : e[e.length - 1].push(t)) && e, [])
                        }(e, 0),
                        a = t / o.length,
                        s = [{
                            x: 0,
                            y: 0
                        }, {
                            x: 1,
                            y: 0
                        }, {
                            x: 0,
                            y: 1
                        }];
                    s.forEach(({
                        x: e,
                        y: t
                    }) => {
                        let r = (o.length - 7) * a * e,
                            c = (o.length - 7) * a * t;
                        for (let e = 0; e < s.length; e += 1) {
                            let t = a * (7 - 2 * e);
                            n.push(l.YP `
            <rect
              fill=${2===e?i:"transparent"}
              width=${0===e?t-5:t}
              rx= ${0===e?(t-5)*.45:.45*t}
              ry= ${0===e?(t-5)*.45:.45*t}
              stroke=${i}
              stroke-width=${0===e?5:0}
              height=${0===e?t-5:t}
              x= ${0===e?c+a*e+2.5:c+a*e}
              y= ${0===e?r+a*e+2.5:r+a*e}
            />
          `)
                        }
                    });
                    let c = Math.floor((r + 25) / a),
                        u = o.length / 2 - c / 2,
                        d = o.length / 2 + c / 2 - 1,
                        h = [];
                    o.forEach((e, t) => {
                        e.forEach((e, r) => {
                            !o[t][r] || t < 7 && r < 7 || t > o.length - 8 && r < 7 || t < 7 && r > o.length - 8 || t > u && t < d && r > u && r < d || h.push([t * a + a / 2, r * a + a / 2])
                        })
                    });
                    let p = {};
                    return h.forEach(([e, t]) => {
                        p[e] ? p[e] ? .push(t) : p[e] = [t]
                    }), Object.entries(p).map(([e, t]) => {
                        let r = t.filter(e => t.every(t => !rE(e, t, a)));
                        return [Number(e), r]
                    }).forEach(([e, t]) => {
                        t.forEach(t => {
                            n.push(l.YP `<circle cx=${e} cy=${t} fill=${i} r=${a/2.5} />`)
                        })
                    }), Object.entries(p).filter(([e, t]) => t.length > 1).map(([e, t]) => {
                        let r = t.filter(e => t.some(t => rE(e, t, a)));
                        return [Number(e), r]
                    }).map(([e, t]) => {
                        t.sort((e, t) => e < t ? -1 : 1);
                        let r = [];
                        for (let e of t) {
                            let t = r.find(t => t.some(t => rE(e, t, a)));
                            t ? t.push(e) : r.push([e])
                        }
                        return [e, r.map(e => [e[0], e[e.length - 1]])]
                    }).forEach(([e, t]) => {
                        t.forEach(([t, r]) => {
                            n.push(l.YP `
              <line
                x1=${e}
                x2=${e}
                y1=${t}
                y2=${r}
                stroke=${i}
                stroke-width=${a/1.25}
                stroke-linecap="round"
              />
            `)
                        })
                    }), n
                }
            };
            var rk = l.iv `
  :host {
    position: relative;
    user-select: none;
    display: block;
    overflow: hidden;
    aspect-ratio: 1 / 1;
    width: var(--local-size);
  }

  :host([data-theme='dark']) {
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px);
    background-color: var(--wui-color-inverse-100);
    padding: var(--wui-spacing-l);
  }

  :host([data-theme='light']) {
    box-shadow: 0 0 0 1px var(--wui-color-bg-125);
    background-color: var(--wui-color-bg-125);
  }

  svg:first-child,
  wui-image,
  wui-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translateY(-50%) translateX(-50%);
  }

  wui-image {
    width: 25%;
    height: 25%;
    border-radius: var(--wui-border-radius-xs);
  }

  wui-icon {
    width: 100%;
    height: 100%;
    color: #3396ff !important;
    transform: translateY(-50%) translateX(-50%) scale(0.25);
  }
`,
                rA = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let rD = class extends l.oi {
                constructor() {
                    super(...arguments), this.uri = "", this.size = 0, this.theme = "dark", this.imageSrc = void 0, this.alt = void 0
                }
                render() {
                    return this.dataset.theme = this.theme, this.style.cssText = `--local-size: ${this.size}px`, l.dy `${this.templateVisual()} ${this.templateSvg()}`
                }
                templateSvg() {
                    let e = "light" === this.theme ? this.size : this.size - 32;
                    return l.YP `
      <svg height=${e} width=${e}>
        ${rS.generate(this.uri,e,e/4)}
      </svg>
    `
                }
                templateVisual() {
                    return this.imageSrc ? l.dy `<wui-image src=${this.imageSrc} alt=${this.alt??"logo"}></wui-image>` : l.dy `<wui-icon size="inherit" color="inherit" name="walletConnect"></wui-icon>`
                }
            };
            rD.styles = [p, rk], rA([(0, b.Cb)()], rD.prototype, "uri", void 0), rA([(0, b.Cb)({
                type: Number
            })], rD.prototype, "size", void 0), rA([(0, b.Cb)()], rD.prototype, "theme", void 0), rA([(0, b.Cb)()], rD.prototype, "imageSrc", void 0), rA([(0, b.Cb)()], rD.prototype, "alt", void 0), rD = rA([w("wui-qr-code")], rD);
            var r$ = l.iv `
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }
`;
            let rR = class extends l.oi {
                constructor() {
                    super(...arguments), this.inputComponentRef = (0, tL.V)()
                }
                render() {
                    return l.dy `
      <wui-input-text
        ${(0,tL.i)(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
      >
        <wui-input-element @click=${this.clearValue} icon="close"></wui-input-element>
      </wui-input-text>
    `
                }
                clearValue() {
                    let e = this.inputComponentRef.value,
                        t = e ? .inputElementRef.value;
                    t && (t.value = "", t.focus(), t.dispatchEvent(new Event("input")))
                }
            };
            rR.styles = [p, r$], rR = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }([w("wui-search-bar")], rR);
            var rO = l.iv `
  :host {
    display: flex;
    column-gap: var(--wui-spacing-xs);
    align-items: center;
    padding: 7px var(--wui-spacing-l) 7px var(--wui-spacing-xs);
    border-radius: var(--wui-border-radius-3xl);
    border: 1px solid var(--wui-gray-glass-005);
    background-color: var(--wui-color-bg-175);
    box-shadow:
      0px 14px 64px -4px rgba(0, 0, 0, 0.15),
      0px 8px 22px -6px rgba(0, 0, 0, 0.15);
  }
`,
                rI = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let rT = class extends l.oi {
                constructor() {
                    super(...arguments), this.backgroundColor = "accent-100", this.iconColor = "accent-100", this.icon = "checkmark", this.message = ""
                }
                render() {
                    return l.dy `
      <wui-icon-box
        size="xs"
        iconColor=${this.iconColor}
        backgroundColor=${this.backgroundColor}
        icon=${this.icon}
      ></wui-icon-box>
      <wui-text variant="paragraph-500" color="fg-100">${this.message}</wui-text>
    `
                }
            };
            rT.styles = [p, rO], rI([(0, b.Cb)()], rT.prototype, "backgroundColor", void 0), rI([(0, b.Cb)()], rT.prototype, "iconColor", void 0), rI([(0, b.Cb)()], rT.prototype, "icon", void 0), rI([(0, b.Cb)()], rT.prototype, "message", void 0), rT = rI([w("wui-snackbar")], rT);
            var rN = l.iv `
  :host {
    display: inline-flex;
    background-color: var(--wui-gray-glass-002);
    border-radius: var(--wui-border-radius-3xl);
    padding: var(--wui-spacing-3xs);
    position: relative;
    height: 36px;
    overflow: hidden;
  }

  :host::before {
    content: '';
    position: absolute;
    pointer-events: none;
    top: 4px;
    left: 4px;
    display: block;
    width: var(--local-tab-width);
    height: 28px;
    border-radius: var(--wui-border-radius-3xl);
    background-color: var(--wui-gray-glass-002);
    box-shadow: inset 0 0 0 1px var(--wui-gray-glass-002);
    transform: translateX(calc(var(--local-tab) * var(--local-tab-width)));
    transition: transform var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  :host([data-type='flex'])::before {
    left: 3px;
    transform: translateX(calc((var(--local-tab) * 34px) + (var(--local-tab) * 4px)));
  }

  :host([data-type='flex']) {
    display: flex;
    padding: 0px 0px 0px 12px;
    gap: 4px;
  }

  :host([data-type='flex']) > button > wui-text {
    position: absolute;
    left: 18px;
    opacity: 0;
  }

  button[data-active='true'] > wui-icon,
  button[data-active='true'] > wui-text {
    color: var(--wui-color-fg-100);
  }

  button[data-active='false'] > wui-icon,
  button[data-active='false'] > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='true']:disabled,
  button[data-active='false']:disabled {
    background-color: transparent;
    opacity: 0.5;
    cursor: not-allowed;
  }

  button[data-active='true']:disabled > wui-text {
    color: var(--wui-color-fg-200);
  }

  button[data-active='false']:disabled > wui-text {
    color: var(--wui-color-fg-300);
  }

  button > wui-icon,
  button > wui-text {
    pointer-events: none;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  button {
    width: var(--local-tab-width);
  }

  :host([data-type='flex']) > button {
    width: 34px;
    position: relative;
    display: flex;
    justify-content: flex-start;
  }

  button:hover:enabled,
  button:active:enabled {
    background-color: transparent !important;
  }

  button:hover:enabled > wui-icon,
  button:active:enabled > wui-icon {
    color: var(--wui-color-fg-125);
  }

  button:hover:enabled > wui-text,
  button:active:enabled > wui-text {
    color: var(--wui-color-fg-125);
  }

  button {
    border-radius: var(--wui-border-radius-3xl);
  }
`,
                rP = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let rU = class extends l.oi {
                constructor() {
                    super(...arguments), this.tabs = [], this.onTabChange = () => null, this.buttons = [], this.disabled = !1, this.activeTab = 0, this.localTabWidth = "100px", this.isDense = !1
                }
                render() {
                    return this.isDense = this.tabs.length > 3, this.style.cssText = `
      --local-tab: ${this.activeTab};
      --local-tab-width: ${this.localTabWidth};
    `, this.dataset.type = this.isDense ? "flex" : "block", this.tabs.map((e, t) => {
                        let r = t === this.activeTab;
                        return l.dy `
        <button
          ?disabled=${this.disabled}
          @click=${()=>this.onTabClick(t)}
          data-active=${r}
        >
          <wui-icon size="xs" color="inherit" name=${e.icon}></wui-icon>
          <wui-text variant="small-600" color="inherit"> ${e.label} </wui-text>
        </button>
      `
                    })
                }
                firstUpdated() {
                    this.shadowRoot && this.isDense && (this.buttons = [...this.shadowRoot.querySelectorAll("button")], setTimeout(() => {
                        this.animateTabs(0, !0)
                    }, 0))
                }
                onTabClick(e) {
                    this.buttons && this.animateTabs(e, !1), this.activeTab = e, this.onTabChange(e)
                }
                animateTabs(e, t) {
                    let r = this.buttons[this.activeTab],
                        i = this.buttons[e],
                        n = r ? .querySelector("wui-text"),
                        o = i ? .querySelector("wui-text"),
                        a = i ? .getBoundingClientRect(),
                        s = o ? .getBoundingClientRect();
                    r && n && !t && e !== this.activeTab && (n.animate([{
                        opacity: 0
                    }], {
                        duration: 50,
                        easing: "ease",
                        fill: "forwards"
                    }), r.animate([{
                        width: "34px"
                    }], {
                        duration: 500,
                        easing: "ease",
                        fill: "forwards"
                    })), i && a && s && o && (e !== this.activeTab || t) && (this.localTabWidth = `${Math.round(a.width+s.width)+6}px`, i.animate([{
                        width: `${a.width+s.width}px`
                    }], {
                        duration: t ? 0 : 500,
                        fill: "forwards",
                        easing: "ease"
                    }), o.animate([{
                        opacity: 1
                    }], {
                        duration: t ? 0 : 125,
                        delay: t ? 0 : 200,
                        fill: "forwards",
                        easing: "ease"
                    }))
                }
            };
            rU.styles = [p, f, rN], rP([(0, b.Cb)({
                type: Array
            })], rU.prototype, "tabs", void 0), rP([(0, b.Cb)()], rU.prototype, "onTabChange", void 0), rP([(0, b.Cb)({
                type: Array
            })], rU.prototype, "buttons", void 0), rP([(0, b.Cb)({
                type: Boolean
            })], rU.prototype, "disabled", void 0), rP([(0, b.SB)()], rU.prototype, "activeTab", void 0), rP([(0, b.SB)()], rU.prototype, "localTabWidth", void 0), rP([(0, b.SB)()], rU.prototype, "isDense", void 0), rU = rP([w("wui-tabs")], rU);
            var rM = l.iv `
  :host {
    display: block;
    padding: 9px var(--wui-spacing-s) 10px var(--wui-spacing-s);
    border-radius: var(--wui-border-radius-xxs);
    background-color: var(--wui-color-fg-100);
    color: var(--wui-color-bg-100);
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  wui-icon[data-placement='top'] {
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,
                rj = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let rL = class extends l.oi {
                constructor() {
                    super(...arguments), this.placement = "top", this.message = ""
                }
                render() {
                    return l.dy `<wui-icon
        data-placement=${this.placement}
        color="fg-100"
        size="inherit"
        name="cursor"
      ></wui-icon>
      <wui-text color="inherit" variant="small-500">${this.message}</wui-text>`
                }
            };
            rL.styles = [p, f, rM], rj([(0, b.Cb)()], rL.prototype, "placement", void 0), rj([(0, b.Cb)()], rL.prototype, "message", void 0), rL = rj([w("wui-tooltip")], rL);
            var rB = l.iv `
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 64px;
    height: 64px;
    box-shadow: 0 0 0 8px var(--wui-thumbnail-border);
    border-radius: var(--local-border-radius);
    overflow: hidden;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,
                rz = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let rW = class extends l.oi {
                render() {
                    return this.style.cssText = `--local-border-radius: ${this.borderRadiusFull?"1000px":"20px"};`, l.dy `${this.templateVisual()}`
                }
                templateVisual() {
                    return this.imageSrc ? l.dy `<wui-image src=${this.imageSrc} alt=${this.alt??""}></wui-image>` : l.dy `<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="walletPlaceholder"
    ></wui-icon>`
                }
            };
            rW.styles = [p, rB], rz([(0, b.Cb)()], rW.prototype, "imageSrc", void 0), rz([(0, b.Cb)()], rW.prototype, "alt", void 0), rz([(0, b.Cb)({
                type: Boolean
            })], rW.prototype, "borderRadiusFull", void 0), rW = rz([w("wui-visual-thumbnail")], rW);
            var rZ = l.iv `
  :host {
    display: block;
  }

  button {
    display: block;
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    padding-left: var(--wui-spacing-s);
    padding-right: var(--wui-spacing-2l);
    border-radius: var(--wui-border-radius-s);
    background-color: var(--wui-accent-glass-015);
  }

  button:hover {
    background-color: var(--wui-accent-glass-010) !important;
  }

  button:active {
    background-color: var(--wui-accent-glass-020) !important;
  }
`,
                rF = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let rH = class extends l.oi {
                constructor() {
                    super(...arguments), this.label = "", this.description = "", this.icon = "wallet"
                }
                render() {
                    return l.dy `
      <button>
        <wui-flex gap="m" alignItems="center" justifyContent="space-between">
          <wui-icon-box
            size="lg"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon=${this.icon}
            background="transparent"
          ></wui-icon-box>

          <wui-flex flexDirection="column" gap="3xs">
            <wui-text variant="paragraph-500" color="fg-100">${this.label}</wui-text>
            <wui-text variant="small-400" color="fg-200">${this.description}</wui-text>
          </wui-flex>

          <wui-icon size="md" color="fg-200" name="chevronRight"></wui-icon>
        </wui-flex>
      </button>
    `
                }
            };
            rH.styles = [p, f, rZ], rF([(0, b.Cb)()], rH.prototype, "label", void 0), rF([(0, b.Cb)()], rH.prototype, "description", void 0), rF([(0, b.Cb)()], rH.prototype, "icon", void 0), rH = rF([w("wui-notice-card")], rH);
            var rV = l.iv `
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,
                rY = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let rK = class extends l.oi {
                render() {
                    return this.style.cssText = `
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--wui-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--wui-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--wui-spacing-${this.gap})`};
      padding-top: ${this.padding&&e8.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&e8.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&e8.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&e8.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&e8.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&e8.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&e8.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&e8.getSpacingStyles(this.margin,3)};
    `, l.dy `<slot></slot>`
                }
            };
            rK.styles = [p, rV], rY([(0, b.Cb)()], rK.prototype, "gridTemplateRows", void 0), rY([(0, b.Cb)()], rK.prototype, "gridTemplateColumns", void 0), rY([(0, b.Cb)()], rK.prototype, "justifyItems", void 0), rY([(0, b.Cb)()], rK.prototype, "alignItems", void 0), rY([(0, b.Cb)()], rK.prototype, "justifyContent", void 0), rY([(0, b.Cb)()], rK.prototype, "alignContent", void 0), rY([(0, b.Cb)()], rK.prototype, "columnGap", void 0), rY([(0, b.Cb)()], rK.prototype, "rowGap", void 0), rY([(0, b.Cb)()], rK.prototype, "gap", void 0), rY([(0, b.Cb)()], rK.prototype, "padding", void 0), rY([(0, b.Cb)()], rK.prototype, "margin", void 0), rK = rY([w("wui-grid")], rK);
            var rq = l.iv `
  :host {
    position: relative;
    display: flex;
    width: 100%;
    height: 1px;
    background-color: var(--wui-gray-glass-005);
    justify-content: center;
    align-items: center;
  }

  :host > wui-text {
    position: absolute;
    padding: 0px 10px;
    background-color: var(--wui-color-bg-125);
  }
`,
                rG = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let rX = class extends l.oi {
                constructor() {
                    super(...arguments), this.text = ""
                }
                render() {
                    return l.dy `${this.template()}`
                }
                template() {
                    return this.text ? l.dy `<wui-text variant="small-500" color="fg-200">${this.text}</wui-text>` : null
                }
            };
            rX.styles = [p, rq], rG([(0, b.Cb)()], rX.prototype, "text", void 0), rX = rG([w("wui-separator")], rX);
            var rJ = r(44519);
            let rQ = ["receive", "deposit", "borrow", "claim"],
                r0 = ["withdraw", "repay", "burn"],
                r1 = {
                    getTransactionGroupTitle: e => e === rJ.E.getYear() ? "This Year" : e,
                    getTransactionImages(e) {
                        let [t, r] = e, i = !!t && e ? .every(e => !!e.nft_info), n = e ? .length > 1;
                        return e ? .length !== 2 || i ? n ? e.map(e => this.getTransactionImage(e)) : [this.getTransactionImage(t)] : [this.getTransactionImage(t), this.getTransactionImage(r)]
                    },
                    getTransactionImage: e => ({
                        type: r1.getTransactionTransferTokenType(e),
                        url: r1.getTransactionImageURL(e)
                    }),
                    getTransactionImageURL(e) {
                        let t = null,
                            r = !!e ? .nft_info,
                            i = !!e ? .fungible_info;
                        return e && r ? t = e ? .nft_info ? .content ? .preview ? .url : e && i && (t = e ? .fungible_info ? .icon ? .url), t
                    },
                    getTransactionTransferTokenType: e => e ? .fungible_info ? "FUNGIBLE" : e ? .nft_info ? "NFT" : null,
                    getTransactionDescriptions(e) {
                        let t = e.metadata ? .operationType,
                            r = e.transfers,
                            i = e.transfers ? .length > 0,
                            n = e.transfers ? .length > 1,
                            o = i && r ? .every(e => !!e.fungible_info),
                            [a, s] = r,
                            l = this.getTransferDescription(a);
                        if (this.getTransferDescription(s), !i) return ("send" === t || "receive" === t) && o ? [l = e8.getTruncateString({
                            string: e.metadata.sentFrom,
                            charsStart: 4,
                            charsEnd: 6,
                            truncate: "middle"
                        }), e8.getTruncateString({
                            string: e.metadata.sentTo,
                            charsStart: 4,
                            charsEnd: 6,
                            truncate: "middle"
                        })] : [e.metadata.status];
                        if (n) return r.map(e => this.getTransferDescription(e));
                        let c = "";
                        return rQ.includes(t) ? c = "+" : r0.includes(t) && (c = "-"), [l = c.concat(l)]
                    },
                    getTransferDescription(e) {
                        let t = "";
                        return e && (e ? .nft_info ? t = e ? .nft_info ? .name || "-" : e ? .fungible_info && (t = this.getFungibleTransferDescription(e) || "-")), t
                    },
                    getFungibleTransferDescription(e) {
                        return e ? [this.getQuantityFixedValue(e ? .quantity.numeric), e ? .fungible_info ? .symbol].join(" ").trim() : null
                    },
                    getQuantityFixedValue: e => e ? parseFloat(e).toFixed(3) : null
                }
        },
        92533: function(e, t, r) {
            "use strict";
            let i, n, o;

            function a() {
                if (!n) throw Error('Please call "createWeb3Modal" before using "useWeb3Modal" hook');
                return {
                    open: async function(e) {
                        await n ? .open(e)
                    },
                    close: async function() {
                        await n ? .close()
                    }
                }
            }
            r.d(t, {
                OY: function() {
                    return i6
                },
                o1: function() {
                    return i4
                },
                k_: function() {
                    return a
                }
            }), r(2265);
            var s, l, c, u, d, h, p, f, g, w, m, v, b, y, C, x, _, E, S, k, A, D, $, R, O, I, T, N, P, U, M, j = r(42989),
                L = r(75404),
                B = r(3151),
                z = r(70808),
                W = r(22555),
                Z = r(6591),
                F = r(80824),
                H = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let V = class extends W.oi {
                constructor() {
                    super(), this.unsubscribe = [], this.networkImages = B.WM.state.networkImages, this.disabled = !1, this.balance = "show", this.address = B.AccountController.state.address, this.balanceVal = B.AccountController.state.balance, this.balanceSymbol = B.AccountController.state.balanceSymbol, this.profileName = B.AccountController.state.profileName, this.profileImage = B.AccountController.state.profileImage, this.network = B.NetworkController.state.caipNetwork, this.unsubscribe.push(...[B.AccountController.subscribe(e => {
                        e.isConnected ? (this.address = e.address, this.balanceVal = e.balance, this.profileName = e.profileName, this.profileImage = e.profileImage, this.balanceSymbol = e.balanceSymbol) : (this.address = "", this.balanceVal = "", this.profileName = "", this.profileImage = "", this.balanceSymbol = "")
                    }), B.NetworkController.subscribeKey("caipNetwork", e => this.network = e)])
                }
                disconnectedCallback() {
                    this.unsubscribe.forEach(e => e())
                }
                render() {
                    let e = this.networkImages[this.network ? .imageId ? ? ""],
                        t = "show" === this.balance;
                    return W.dy `
      <wui-account-button
        .disabled=${!!this.disabled}
        address=${(0,F.o)(this.profileName??this.address)}
        ?isProfileName=${!!this.profileName}
        networkSrc=${(0,F.o)(e)}
        avatarSrc=${(0,F.o)(this.profileImage)}
        balance=${t?B.j1.formatBalance(this.balanceVal,this.balanceSymbol):""}
        @click=${this.onClick.bind(this)}
      >
      </wui-account-button>
    `
                }
                onClick() {
                    B.IN.open()
                }
            };
            H([(0, Z.Cb)({
                type: Boolean
            })], V.prototype, "disabled", void 0), H([(0, Z.Cb)()], V.prototype, "balance", void 0), H([(0, Z.SB)()], V.prototype, "address", void 0), H([(0, Z.SB)()], V.prototype, "balanceVal", void 0), H([(0, Z.SB)()], V.prototype, "balanceSymbol", void 0), H([(0, Z.SB)()], V.prototype, "profileName", void 0), H([(0, Z.SB)()], V.prototype, "profileImage", void 0), H([(0, Z.SB)()], V.prototype, "network", void 0), V = H([(0, z.customElement)("w3m-account-button")], V);
            var Y = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            };
            let K = class extends W.oi {
                constructor() {
                    super(), this.unsubscribe = [], this.disabled = !1, this.balance = void 0, this.size = void 0, this.label = void 0, this.loadingLabel = void 0, this.isAccount = B.AccountController.state.isConnected, this.unsubscribe.push(B.AccountController.subscribeKey("isConnected", e => {
                        this.isAccount = e
                    }))
                }
                disconnectedCallback() {
                    this.unsubscribe.forEach(e => e())
                }
                render() {
                    return this.isAccount ? W.dy `
          <w3m-account-button
            .disabled=${!!this.disabled}
            balance=${(0,F.o)(this.balance)}
          >
          </w3m-account-button>
        ` : W.dy `
          <w3m-connect-button
            size=${(0,F.o)(this.size)}
            label=${(0,F.o)(this.label)}
            loadingLabel=${(0,F.o)(this.loadingLabel)}
          ></w3m-connect-button>
        `
                }
            };
            Y([(0, Z.Cb)({
                type: Boolean
            })], K.prototype, "disabled", void 0), Y([(0, Z.Cb)()], K.prototype, "balance", void 0), Y([(0, Z.Cb)()], K.prototype, "size", void 0), Y([(0, Z.Cb)()], K.prototype, "label", void 0), Y([(0, Z.Cb)()], K.prototype, "loadingLabel", void 0), Y([(0, Z.SB)()], K.prototype, "isAccount", void 0), K = Y([(0, z.customElement)("w3m-button")], K);
            var q = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            };
            let G = class extends W.oi {
                constructor() {
                    super(), this.unsubscribe = [], this.size = "md", this.label = "Connect Wallet", this.loadingLabel = "Connecting...", this.open = B.IN.state.open, this.loading = B.IN.state.loading, this.unsubscribe.push(B.IN.subscribe(e => {
                        this.open = e.open, this.loading = e.loading
                    }))
                }
                disconnectedCallback() {
                    this.unsubscribe.forEach(e => e())
                }
                render() {
                    let e = this.loading || this.open;
                    return W.dy `
      <wui-connect-button
        size=${(0,F.o)(this.size)}
        .loading=${e}
        @click=${this.onClick.bind(this)}
      >
        ${e?this.loadingLabel:this.label}
      </wui-connect-button>
    `
                }
                onClick() {
                    this.open ? B.IN.close() : B.IN.open()
                }
            };
            q([(0, Z.Cb)()], G.prototype, "size", void 0), q([(0, Z.Cb)()], G.prototype, "label", void 0), q([(0, Z.Cb)()], G.prototype, "loadingLabel", void 0), q([(0, Z.SB)()], G.prototype, "open", void 0), q([(0, Z.SB)()], G.prototype, "loading", void 0), G = q([(0, z.customElement)("w3m-connect-button")], G), r(9448);
            var X = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            };
            let J = class extends W.oi {
                constructor() {
                    super(), this.unsubscribe = [], this.disabled = !1, this.network = B.NetworkController.state.caipNetwork, this.connected = B.AccountController.state.isConnected, this.loading = B.IN.state.loading, this.unsubscribe.push(...[B.NetworkController.subscribeKey("caipNetwork", e => this.network = e), B.AccountController.subscribeKey("isConnected", e => this.connected = e), B.IN.subscribeKey("loading", e => this.loading = e)])
                }
                disconnectedCallback() {
                    this.unsubscribe.forEach(e => e())
                }
                render() {
                    return W.dy `
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        imageSrc=${(0,F.o)(B.fz.getNetworkImage(this.network))}
        @click=${this.onClick.bind(this)}
      >
        ${this.network?.name??(this.connected?"Unknown Network":"Select Network")}
      </wui-network-button>
    `
                }
                onClick() {
                    B.IN.open({
                        view: "Networks"
                    })
                }
            };
            X([(0, Z.Cb)({
                type: Boolean
            })], J.prototype, "disabled", void 0), X([(0, Z.SB)()], J.prototype, "network", void 0), X([(0, Z.SB)()], J.prototype, "connected", void 0), X([(0, Z.SB)()], J.prototype, "loading", void 0), J = X([(0, z.customElement)("w3m-network-button")], J);
            var Q = W.iv `
  :host {
    display: block;
    will-change: transform, opacity;
  }
`,
                ee = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let et = class extends W.oi {
                constructor() {
                    super(), this.resizeObserver = void 0, this.prevHeight = "0px", this.prevHistoryLength = 1, this.unsubscribe = [], this.view = B.RouterController.state.view, this.unsubscribe.push(B.RouterController.subscribeKey("view", e => this.onViewChange(e)))
                }
                firstUpdated() {
                    this.resizeObserver = new ResizeObserver(async ([e]) => {
                        let t = `${e?.contentRect.height}px`;
                        "0px" !== this.prevHeight && (await this.animate([{
                            height: this.prevHeight
                        }, {
                            height: t
                        }], {
                            duration: 150,
                            easing: "ease",
                            fill: "forwards"
                        }).finished, this.style.height = "auto"), this.prevHeight = t
                    }), this.resizeObserver.observe(this.getWrapper())
                }
                disconnectedCallback() {
                    this.resizeObserver ? .unobserve(this.getWrapper()), this.unsubscribe.forEach(e => e())
                }
                render() {
                    return W.dy `<div>${this.viewTemplate()}</div>`
                }
                viewTemplate() {
                    switch (this.view) {
                        case "Connect":
                        default:
                            return W.dy `<w3m-connect-view></w3m-connect-view>`;
                        case "ConnectingWalletConnect":
                            return W.dy `<w3m-connecting-wc-view></w3m-connecting-wc-view>`;
                        case "ConnectingExternal":
                            return W.dy `<w3m-connecting-external-view></w3m-connecting-external-view>`;
                        case "ConnectingSiwe":
                            return W.dy `<w3m-connecting-siwe-view></w3m-connecting-siwe-view>`;
                        case "AllWallets":
                            return W.dy `<w3m-all-wallets-view></w3m-all-wallets-view>`;
                        case "Networks":
                            return W.dy `<w3m-networks-view></w3m-networks-view>`;
                        case "SwitchNetwork":
                            return W.dy `<w3m-network-switch-view></w3m-network-switch-view>`;
                        case "Account":
                            return W.dy `<w3m-account-view></w3m-account-view>`;
                        case "WhatIsAWallet":
                            return W.dy `<w3m-what-is-a-wallet-view></w3m-what-is-a-wallet-view>`;
                        case "WhatIsANetwork":
                            return W.dy `<w3m-what-is-a-network-view></w3m-what-is-a-network-view>`;
                        case "GetWallet":
                            return W.dy `<w3m-get-wallet-view></w3m-get-wallet-view>`;
                        case "Downloads":
                            return W.dy `<w3m-downloads-view></w3m-downloads-view>`;
                        case "EmailVerifyOtp":
                            return W.dy `<w3m-email-verify-otp-view></w3m-email-verify-otp-view>`;
                        case "EmailVerifyDevice":
                            return W.dy `<w3m-email-verify-device-view></w3m-email-verify-device-view>`;
                        case "ApproveTransaction":
                            return W.dy `<w3m-approve-transaction-view></w3m-approve-transaction-view>`;
                        case "Transactions":
                            return W.dy `<w3m-transactions-view></w3m-transactions-view>`
                    }
                }
                async onViewChange(e) {
                    let {
                        history: t
                    } = B.RouterController.state, r = -10, i = 10;
                    t.length < this.prevHistoryLength && (r = 10, i = -10), this.prevHistoryLength = t.length, await this.animate([{
                        opacity: 1,
                        transform: "translateX(0px)"
                    }, {
                        opacity: 0,
                        transform: `translateX(${r}px)`
                    }], {
                        duration: 150,
                        easing: "ease",
                        fill: "forwards"
                    }).finished, this.view = e, await this.animate([{
                        opacity: 0,
                        transform: `translateX(${i}px)`
                    }, {
                        opacity: 1,
                        transform: "translateX(0px)"
                    }], {
                        duration: 150,
                        easing: "ease",
                        fill: "forwards",
                        delay: 50
                    }).finished
                }
                getWrapper() {
                    return this.shadowRoot ? .querySelector("div")
                }
            };
            et.styles = Q, ee([(0, Z.SB)()], et.prototype, "view", void 0), et = ee([(0, z.customElement)("w3m-router")], et);
            var er = W.iv `
  wui-flex {
    width: 100%;
  }

  :host > wui-flex:first-child {
    transform: translateY(calc(var(--wui-spacing-xxs) * -1));
  }

  wui-icon-link {
    margin-right: calc(var(--wui-icon-box-size-md) * -1);
  }

  wui-notice-card {
    margin-bottom: var(--wui-spacing-3xs);
  }
`,
                ei = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let en = class extends W.oi {
                constructor() {
                    super(), this.usubscribe = [], this.networkImages = B.WM.state.networkImages, this.connectors = B.ConnectorController.state.connectors, this.address = B.AccountController.state.address, this.profileImage = B.AccountController.state.profileImage, this.profileName = B.AccountController.state.profileName, this.balance = B.AccountController.state.balance, this.balanceSymbol = B.AccountController.state.balanceSymbol, this.network = B.NetworkController.state.caipNetwork, this.disconecting = !1, this.usubscribe.push(...[B.AccountController.subscribe(e => {
                        e.address ? (this.address = e.address, this.profileImage = e.profileImage, this.profileName = e.profileName, this.balance = e.balance, this.balanceSymbol = e.balanceSymbol) : B.IN.close()
                    })], B.NetworkController.subscribeKey("caipNetwork", e => {
                        e ? .id && (this.network = e)
                    }))
                }
                disconnectedCallback() {
                    this.usubscribe.forEach(e => e())
                }
                render() {
                    if (!this.address) throw Error("w3m-account-view: No account provided");
                    let e = this.networkImages[this.network ? .imageId ? ? ""];
                    return W.dy `
      <wui-flex
        flexDirection="column"
        .padding=${["0","s","m","s"]}
        alignItems="center"
        gap="l"
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${(0,F.o)(this.profileImage)}
        ></wui-avatar>

        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="3xs" alignItems="center" justifyContent="center">
            <wui-text variant="large-600" color="fg-100">
              ${this.profileName?z.UiHelperUtil.getTruncateString({string:this.profileName,charsStart:20,charsEnd:0,truncate:"end"}):z.UiHelperUtil.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:"middle"})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="fg-200"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
          <wui-flex gap="s" flexDirection="column" alignItems="center">
            <wui-text variant="paragraph-500" color="fg-200">
              ${B.j1.formatBalance(this.balance,this.balanceSymbol)}
            </wui-text>

            ${this.explorerBtnTemplate()}
          </wui-flex>
        </wui-flex>
      </wui-flex>

      <wui-flex flexDirection="column" gap="xs" .padding=${["0","s","s","s"]}>
        ${this.emailCardTemplate()}

        <wui-list-item
          .variant=${e?"image":"icon"}
          iconVariant="overlay"
          icon="networkPlaceholder"
          imageSrc=${(0,F.o)(e)}
          ?chevron=${this.isAllowedNetworkSwitch()}
          @click=${this.onNetworks.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">
            ${this.network?.name??"Unknown"}
          </wui-text>
        </wui-list-item>
        <wui-list-item
          iconVariant="blue"
          icon="swapHorizontalBold"
          iconSize="sm"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-100">Activity</wui-text>
        </wui-list-item>
        <wui-list-item
          variant="icon"
          iconVariant="overlay"
          icon="disconnect"
          ?chevron=${!1}
          .loading=${this.disconecting}
          @click=${this.onDisconnect.bind(this)}
        >
          <wui-text variant="paragraph-500" color="fg-200">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>
    `
                }
                emailCardTemplate() {
                    let e = B.MO.getConnectedConnector();
                    return this.connectors.find(e => "EMAIL" === e.type) && "EMAIL" === e ? W.dy `
      <wui-notice-card
        @click=${this.onGoToSecureSite.bind(this)}
        label="Enjoy all your wallet potential"
        description="Switch to a Non Custodial Wallet in a minute"
        icon="wallet"
      ></wui-notice-card>
    ` : null
                }
                explorerBtnTemplate() {
                    let {
                        addressExplorerUrl: e
                    } = B.AccountController.state;
                    return e ? W.dy `
      <wui-button size="sm" variant="shade" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    ` : null
                }
                isAllowedNetworkSwitch() {
                    let {
                        requestedCaipNetworks: e
                    } = B.NetworkController.state, t = !!e && e.length > 1, r = e ? .find(({
                        id: e
                    }) => e === this.network ? .id);
                    return t || !r
                }
                onCopyAddress() {
                    try {
                        this.address && (B.j1.copyToClopboard(this.address), B.SnackController.showSuccess("Address copied"))
                    } catch {
                        B.SnackController.showError("Failed to copy")
                    }
                }
                onNetworks() {
                    this.isAllowedNetworkSwitch() && B.RouterController.push("Networks")
                }
                onTransactions() {
                    B.Xs.sendEvent({
                        type: "track",
                        event: "CLICK_TRANSACTIONS"
                    }), B.RouterController.push("Transactions")
                }
                async onDisconnect() {
                    try {
                        this.disconecting = !0, await B.ConnectionController.disconnect(), B.Xs.sendEvent({
                            type: "track",
                            event: "DISCONNECT_SUCCESS"
                        }), B.IN.close()
                    } catch {
                        B.Xs.sendEvent({
                            type: "track",
                            event: "DISCONNECT_ERROR"
                        }), B.SnackController.showError("Failed to disconnect")
                    } finally {
                        this.disconecting = !1
                    }
                }
                onExplorer() {
                    let {
                        addressExplorerUrl: e
                    } = B.AccountController.state;
                    e && B.j1.openHref(e, "_blank")
                }
                onGoToSecureSite() {
                    B.j1.openHref(B.bq.SECURE_SITE_DASHBOARD, "_blank")
                }
            };
            en.styles = er, ei([(0, Z.SB)()], en.prototype, "address", void 0), ei([(0, Z.SB)()], en.prototype, "profileImage", void 0), ei([(0, Z.SB)()], en.prototype, "profileName", void 0), ei([(0, Z.SB)()], en.prototype, "balance", void 0), ei([(0, Z.SB)()], en.prototype, "balanceSymbol", void 0), ei([(0, Z.SB)()], en.prototype, "network", void 0), ei([(0, Z.SB)()], en.prototype, "disconecting", void 0), en = ei([(0, z.customElement)("w3m-account-view")], en);
            var eo = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            };
            let ea = class extends W.oi {
                constructor() {
                    super(...arguments), this.search = "", this.onDebouncedSearch = B.j1.debounce(e => {
                        this.search = e
                    })
                }
                render() {
                    let e = this.search.length >= 2;
                    return W.dy `
      <wui-flex padding="s" gap="s">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e?W.dy`<w3m-all-wallets-search query=${this.search}></w3m-all-wallets-search>`:W.dy`<w3m-all-wallets-list></w3m-all-wallets-list>`}
    `
                }
                onInputChange(e) {
                    this.onDebouncedSearch(e.detail)
                }
                qrButtonTemplate() {
                    return B.j1.isMobile() ? W.dy `
        <wui-icon-box
          size="lg"
          iconSize="xl"
          iconColor="accent-100"
          backgroundColor="accent-100"
          icon="qrCode"
          background="transparent"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      ` : null
                }
                onWalletConnectQr() {
                    B.RouterController.push("ConnectingWalletConnect")
                }
            };
            eo([(0, Z.SB)()], ea.prototype, "search", void 0), ea = eo([(0, z.customElement)("w3m-all-wallets-view")], ea);
            var es = W.iv `
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  wui-flex::-webkit-scrollbar {
    display: none;
  }
`,
                el = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let ec = class extends W.oi {
                constructor() {
                    super(), this.unsubscribe = [], this.connectors = B.ConnectorController.state.connectors, this.unsubscribe.push(B.ConnectorController.subscribeKey("connectors", e => this.connectors = e))
                }
                disconnectedCallback() {
                    this.unsubscribe.forEach(e => e())
                }
                render() {
                    return W.dy `
      <wui-flex flexDirection="column" padding="s" gap="xs">
        <w3m-email-login-widget></w3m-email-login-widget>

        ${this.walletConnectConnectorTemplate()} ${this.recentTemplate()}
        ${this.announcedTemplate()} ${this.injectedTemplate()} ${this.featuredTemplate()}
        ${this.customTemplate()} ${this.recommendedTemplate()} ${this.connectorsTemplate()}
        ${this.allWalletsTemplate()}
      </wui-flex>
      <w3m-legal-footer></w3m-legal-footer>
    `
                }
                walletConnectConnectorTemplate() {
                    if (B.j1.isMobile()) return null;
                    let e = this.connectors.find(e => "WALLET_CONNECT" === e.type);
                    return e ? W.dy `
      <wui-list-wallet
        imageSrc=${(0,F.o)(B.fz.getConnectorImage(e))}
        name=${e.name??"Unknown"}
        @click=${()=>this.onConnector(e)}
        tagLabel="qr code"
        tagVariant="main"
      >
      </wui-list-wallet>
    ` : null
                }
                customTemplate() {
                    let {
                        customWallets: e
                    } = B.OptionsController.state;
                    return e ? .length ? this.filterOutDuplicateWallets(e).map(e => W.dy `
        <wui-list-wallet
          imageSrc=${(0,F.o)(B.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `) : null
                }
                featuredTemplate() {
                    if (!this.connectors.find(e => "WALLET_CONNECT" === e.type)) return null;
                    let {
                        featured: e
                    } = B.ApiController.state;
                    return e.length ? this.filterOutDuplicateWallets(e).map(e => W.dy `
        <wui-list-wallet
          imageSrc=${(0,F.o)(B.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `) : null
                }
                recentTemplate() {
                    return B.MO.getRecentWallets().map(e => W.dy `
        <wui-list-wallet
          imageSrc=${(0,F.o)(B.fz.getWalletImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
          tagLabel="recent"
          tagVariant="shade"
        >
        </wui-list-wallet>
      `)
                }
                announcedTemplate() {
                    return this.connectors.map(e => "ANNOUNCED" !== e.type ? null : W.dy `
        <wui-list-wallet
          imageSrc=${(0,F.o)(B.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
          tagLabel="installed"
          tagVariant="success"
        >
        </wui-list-wallet>
      `)
                }
                injectedTemplate() {
                    let e = this.connectors.find(e => "ANNOUNCED" === e.type);
                    return this.connectors.map(t => "INJECTED" === t.type && B.ConnectionController.checkInstalled() ? W.dy `
        <wui-list-wallet
          imageSrc=${(0,F.o)(B.fz.getConnectorImage(t))}
          name=${t.name??"Unknown"}
          @click=${()=>this.onConnector(t)}
          tagLabel=${(0,F.o)(e?void 0:"installed")}
          tagVariant=${(0,F.o)(e?void 0:"success")}
        >
        </wui-list-wallet>
      ` : null)
                }
                connectorsTemplate() {
                    return this.connectors.map(e => ["WALLET_CONNECT", "INJECTED", "ANNOUNCED", "EMAIL"].includes(e.type) ? null : W.dy `
        <wui-list-wallet
          imageSrc=${(0,F.o)(B.fz.getConnectorImage(e))}
          name=${e.name??"Unknown"}
          @click=${()=>this.onConnector(e)}
        >
        </wui-list-wallet>
      `)
                }
                allWalletsTemplate() {
                    if (!this.connectors.find(e => "WALLET_CONNECT" === e.type)) return null;
                    let e = 10 * Math.floor(B.ApiController.state.count / 10);
                    return W.dy `
      <wui-list-wallet
        name="All Wallets"
        walletIcon="allWallets"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${`${e}+`}
        tagVariant="shade"
      ></wui-list-wallet>
    `
                }
                recommendedTemplate() {
                    if (!this.connectors.find(e => "WALLET_CONNECT" === e.type)) return null;
                    let {
                        recommended: e
                    } = B.ApiController.state, {
                        customWallets: t,
                        featuredWalletIds: r
                    } = B.OptionsController.state, {
                        connectors: i
                    } = B.ConnectorController.state, n = B.MO.getRecentWallets(), o = i.filter(e => "ANNOUNCED" === e.type);
                    if (r || t || !e.length) return null;
                    let a = o.length + n.length;
                    return this.filterOutDuplicateWallets(e).slice(0, Math.max(0, 2 - a)).map(e => W.dy `
        <wui-list-wallet
          imageSrc=${(0,F.o)(B.fz.getWalletImage(e))}
          name=${e?.name??"Unknown"}
          @click=${()=>this.onConnectWallet(e)}
        >
        </wui-list-wallet>
      `)
                }
                onConnector(e) {
                    "WALLET_CONNECT" === e.type ? B.j1.isMobile() ? B.RouterController.push("AllWallets") : B.RouterController.push("ConnectingWalletConnect") : B.RouterController.push("ConnectingExternal", {
                        connector: e
                    })
                }
                filterOutDuplicateWallets(e) {
                    let {
                        connectors: t
                    } = B.ConnectorController.state, r = B.MO.getRecentWallets().map(e => e.id), i = t.map(e => e.info ? .rdns).filter(Boolean);
                    return e.filter(e => !r.includes(e.id) && !i.includes(e.rdns ? ? void 0))
                }
                onAllWallets() {
                    B.Xs.sendEvent({
                        type: "track",
                        event: "CLICK_ALL_WALLETS"
                    }), B.RouterController.push("AllWallets")
                }
                onConnectWallet(e) {
                    B.RouterController.push("ConnectingWalletConnect", {
                        wallet: e
                    })
                }
            };
            ec.styles = es, el([(0, Z.SB)()], ec.prototype, "connectors", void 0), ec = el([(0, z.customElement)("w3m-connect-view")], ec);
            var eu = W.iv `
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(var(--wui-spacing-3xs) * -1);
    bottom: calc(var(--wui-spacing-3xs) * -1);
    opacity: 0;
    transform: scale(0.5);
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px var(--wui-spacing-l);
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }
`,
                ed = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            class eh extends W.oi {
                constructor() {
                    super(), this.wallet = B.RouterController.state.data ? .wallet, this.connector = B.RouterController.state.data ? .connector, this.timeout = void 0, this.secondaryBtnLabel = "Try again", this.secondaryBtnIcon = "refresh", this.secondaryLabel = "Accept connection request in the wallet", this.onConnect = void 0, this.onRender = void 0, this.onAutoConnect = void 0, this.isWalletConnect = !0, this.unsubscribe = [], this.imageSrc = B.fz.getWalletImage(this.wallet) ? ? B.fz.getConnectorImage(this.connector), this.name = this.wallet ? .name ? ? this.connector ? .name ? ? "Wallet", this.isRetrying = !1, this.uri = B.ConnectionController.state.wcUri, this.error = B.ConnectionController.state.wcError, this.ready = !1, this.showRetry = !1, this.buffering = !1, this.isMobile = !1, this.onRetry = void 0, this.unsubscribe.push(...[B.ConnectionController.subscribeKey("wcUri", e => {
                        this.uri = e, this.isRetrying && this.onRetry && (this.isRetrying = !1, this.onConnect ? .())
                    }), B.ConnectionController.subscribeKey("wcError", e => this.error = e), B.ConnectionController.subscribeKey("buffering", e => this.buffering = e)])
                }
                firstUpdated() {
                    this.onAutoConnect ? .(), this.showRetry = !this.onAutoConnect
                }
                disconnectedCallback() {
                    this.unsubscribe.forEach(e => e()), clearTimeout(this.timeout)
                }
                render() {
                    this.onRender ? .(), this.onShowRetry();
                    let e = this.error ? "Connection can be declined if a previous request is still active" : this.secondaryLabel,
                        t = `Continue in ${this.name}`;
                    return this.buffering && (t = "Connecting..."), this.error && (t = "Connection declined"), W.dy `
      <wui-flex
        data-error=${(0,F.o)(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${(0,F.o)(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text variant="paragraph-500" color=${this.error?"error-100":"fg-100"}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${e}</wui-text>
        </wui-flex>

        <wui-button
          variant="accent"
          ?disabled=${!this.error&&this.buffering}
          @click=${this.onTryAgain.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name=${this.secondaryBtnIcon}></wui-icon>
          ${this.secondaryBtnLabel}
        </wui-button>
      </wui-flex>

      ${this.isWalletConnect?W.dy`
            <wui-flex .padding=${["0","xl","xl","xl"]} justifyContent="center">
              <wui-link @click=${this.onCopyUri} color="fg-200">
                <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
                Copy link
              </wui-link>
            </wui-flex>
          `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `
                }
                onShowRetry() {
                    this.error && !this.showRetry && (this.showRetry = !0, this.shadowRoot ? .querySelector("wui-button").animate([{
                        opacity: 0
                    }, {
                        opacity: 1
                    }], {
                        fill: "forwards",
                        easing: "ease"
                    }))
                }
                onTryAgain() {
                    this.buffering || (B.ConnectionController.setWcError(!1), this.onRetry ? (this.isRetrying = !0, this.onRetry ? .()) : this.onConnect ? .())
                }
                loaderTemplate() {
                    let e = B.ThemeController.state.themeVariables["--w3m-border-radius-master"],
                        t = e ? parseInt(e.replace("px", ""), 10) : 4;
                    return W.dy `<wui-loading-thumbnail radius=${9*t}></wui-loading-thumbnail>`
                }
                onCopyUri() {
                    try {
                        this.uri && (B.j1.copyToClopboard(this.uri), B.SnackController.showSuccess("Link copied"))
                    } catch {
                        B.SnackController.showError("Failed to copy")
                    }
                }
            }
            eh.styles = eu, ed([(0, Z.SB)()], eh.prototype, "uri", void 0), ed([(0, Z.SB)()], eh.prototype, "error", void 0), ed([(0, Z.SB)()], eh.prototype, "ready", void 0), ed([(0, Z.SB)()], eh.prototype, "showRetry", void 0), ed([(0, Z.SB)()], eh.prototype, "buffering", void 0), ed([(0, Z.Cb)({
                type: Boolean
            })], eh.prototype, "isMobile", void 0), ed([(0, Z.Cb)()], eh.prototype, "onRetry", void 0);
            let ep = {
                    INJECTED: "browser",
                    ANNOUNCED: "browser"
                },
                ef = class extends eh {
                    constructor() {
                        if (super(), !this.connector) throw Error("w3m-connecting-view: No connector provided");
                        B.Xs.sendEvent({
                            type: "track",
                            event: "SELECT_WALLET",
                            properties: {
                                name: this.connector.name ? ? "Unknown",
                                platform: ep[this.connector.type] ? ? "external"
                            }
                        }), this.onConnect = this.onConnectProxy.bind(this), this.onAutoConnect = this.onConnectProxy.bind(this), this.isWalletConnect = !1
                    }
                    async onConnectProxy() {
                        try {
                            this.error = !1, this.connector && (this.connector.imageUrl && B.MO.setConnectedWalletImageUrl(this.connector.imageUrl), await B.ConnectionController.connectExternal(this.connector), B.yD.state.isSiweEnabled ? B.RouterController.push("ConnectingSiwe") : B.IN.close(), B.Xs.sendEvent({
                                type: "track",
                                event: "CONNECT_SUCCESS",
                                properties: {
                                    method: "external"
                                }
                            }))
                        } catch (e) {
                            B.Xs.sendEvent({
                                type: "track",
                                event: "CONNECT_ERROR",
                                properties: {
                                    message: e ? .message ? ? "Unknown"
                                }
                            }), this.error = !0
                        }
                    }
                };
            ef = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }([(0, z.customElement)("w3m-connecting-external-view")], ef);
            var eg = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            };
            let ew = class extends W.oi {
                constructor() {
                    super(...arguments), this.dappName = B.OptionsController.state.metadata ? .name, this.isSigning = !1
                }
                render() {
                    return W.dy `
      <wui-flex justifyContent="center" .padding=${["2xl","0","xxl","0"]}>
        <w3m-connecting-siwe></w3m-connecting-siwe>
      </wui-flex>
      <wui-flex
        .padding=${["0","4xl","l","4xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="paragraph-500" align="center" color="fg-100"
          >${this.dappName??"Dapp"} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex
        .padding=${["0","3xl","l","3xl"]}
        gap="s"
        justifyContent="space-between"
      >
        <wui-text variant="small-400" align="center" color="fg-200"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${["l","xl","xl","xl"]} gap="s" justifyContent="space-between">
        <wui-button size="md" ?fullwidth=${!0} variant="shade" @click=${this.onCancel.bind(this)}>
          Cancel
        </wui-button>
        <wui-button
          size="md"
          ?fullwidth=${!0}
          variant="fill"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
        >
          ${this.isSigning?"Signing...":"Sign"}
        </wui-button>
      </wui-flex>
    `
                }
                async onSign() {
                    this.isSigning = !0, B.Xs.sendEvent({
                        event: "CLICK_SIGN_SIWE_MESSAGE",
                        type: "track"
                    });
                    try {
                        B.yD.setStatus("loading");
                        let e = await B.yD.signIn();
                        return B.yD.setStatus("success"), B.Xs.sendEvent({
                            event: "SIWE_AUTH_SUCCESS",
                            type: "track"
                        }), e
                    } catch (e) {
                        return B.SnackController.showError("Signature declined"), B.yD.setStatus("error"), B.Xs.sendEvent({
                            event: "SIWE_AUTH_ERROR",
                            type: "track"
                        })
                    } finally {
                        this.isSigning = !1
                    }
                }
                async onCancel() {
                    let {
                        isConnected: e
                    } = B.AccountController.state;
                    e ? (await B.ConnectionController.disconnect(), B.IN.close()) : B.RouterController.push("Connect"), B.Xs.sendEvent({
                        event: "CLICK_CANCEL_SIWE",
                        type: "track"
                    })
                }
            };
            eg([(0, Z.SB)()], ew.prototype, "isSigning", void 0), ew = eg([(0, z.customElement)("w3m-connecting-siwe-view")], ew);
            var em = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            };
            let ev = class extends W.oi {
                constructor() {
                    super(), this.interval = void 0, this.lastRetry = Date.now(), this.wallet = B.RouterController.state.data ? .wallet, this.platform = void 0, this.platforms = [], this.initializeConnection(), this.interval = setInterval(this.initializeConnection.bind(this), B.bq.TEN_SEC_MS)
                }
                disconnectedCallback() {
                    clearTimeout(this.interval)
                }
                render() {
                    return this.wallet ? (this.determinePlatforms(), W.dy `
      ${this.headerTemplate()}
      <div>${this.platformTemplate()}</div>
    `) : W.dy `<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`
                }
                async initializeConnection(e = !1) {
                    try {
                        let {
                            wcPairingExpiry: t
                        } = B.ConnectionController.state;
                        if (e || B.j1.isPairingExpired(t)) {
                            if (B.ConnectionController.connectWalletConnect(), this.wallet) {
                                let e = B.fz.getWalletImage(this.wallet);
                                e && B.MO.setConnectedWalletImageUrl(e)
                            } else {
                                let e = B.ConnectorController.state.connectors.find(e => "WALLET_CONNECT" === e.type),
                                    t = B.fz.getConnectorImage(e);
                                t && B.MO.setConnectedWalletImageUrl(t)
                            }
                            await B.ConnectionController.state.wcPromise, this.finalizeConnection(), B.yD.state.isSiweEnabled ? B.RouterController.push("ConnectingSiwe") : B.IN.close()
                        }
                    } catch (e) {
                        B.Xs.sendEvent({
                            type: "track",
                            event: "CONNECT_ERROR",
                            properties: {
                                message: e ? .message ? ? "Unknown"
                            }
                        }), B.ConnectionController.setWcError(!0), B.j1.isAllowedRetry(this.lastRetry) && (B.SnackController.showError("Declined"), this.lastRetry = Date.now(), this.initializeConnection(!0))
                    }
                }
                finalizeConnection() {
                    let {
                        wcLinking: e,
                        recentWallet: t
                    } = B.ConnectionController.state;
                    e && B.MO.setWalletConnectDeepLink(e), t && B.MO.setWeb3ModalRecent(t), B.Xs.sendEvent({
                        type: "track",
                        event: "CONNECT_SUCCESS",
                        properties: {
                            method: e ? "mobile" : "qrcode"
                        }
                    })
                }
                determinePlatforms() {
                    if (!this.wallet) throw Error("w3m-connecting-wc-view:determinePlatforms No wallet");
                    if (this.platform) return;
                    let {
                        mobile_link: e,
                        desktop_link: t,
                        webapp_link: r,
                        injected: i,
                        rdns: n
                    } = this.wallet, o = i ? .map(({
                        injected_id: e
                    }) => e).filter(Boolean), a = n ? [n] : o ? ? [], s = a.length, l = B.ConnectionController.checkInstalled(a), c = s && l, u = t && !B.j1.isMobile();
                    c && this.platforms.push("browser"), e && this.platforms.push(B.j1.isMobile() ? "mobile" : "qrcode"), r && this.platforms.push("web"), u && this.platforms.push("desktop"), !c && s && this.platforms.push("unsupported"), this.platform = this.platforms[0]
                }
                platformTemplate() {
                    switch (this.platform) {
                        case "browser":
                            return W.dy `<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;
                        case "desktop":
                            return W.dy `
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;
                        case "web":
                            return W.dy `
          <w3m-connecting-wc-web .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-web>
        `;
                        case "mobile":
                            return W.dy `
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;
                        case "qrcode":
                            return W.dy `<w3m-connecting-wc-qrcode></w3m-connecting-wc-qrcode>`;
                        default:
                            return W.dy `<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`
                    }
                }
                headerTemplate() {
                    return this.platforms.length > 1 ? W.dy `
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    ` : null
                }
                async onSelectPlatform(e) {
                    let t = this.shadowRoot ? .querySelector("div");
                    t && (await t.animate([{
                        opacity: 1
                    }, {
                        opacity: 0
                    }], {
                        duration: 200,
                        fill: "forwards",
                        easing: "ease"
                    }).finished, this.platform = e, t.animate([{
                        opacity: 0
                    }, {
                        opacity: 1
                    }], {
                        duration: 200,
                        fill: "forwards",
                        easing: "ease"
                    }))
                }
            };
            em([(0, Z.SB)()], ev.prototype, "platform", void 0), em([(0, Z.SB)()], ev.prototype, "platforms", void 0), ev = em([(0, z.customElement)("w3m-connecting-wc-view")], ev);
            let eb = class extends W.oi {
                constructor() {
                    super(...arguments), this.wallet = B.RouterController.state.data ? .wallet
                }
                render() {
                    if (!this.wallet) throw Error("w3m-downloads-view");
                    return W.dy `
      <wui-flex gap="xs" flexDirection="column" .padding=${["s","s","l","s"]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `
                }
                chromeTemplate() {
                    return this.wallet ? .chrome_store ? W.dy `<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Chrome Extension</wui-text>
    </wui-list-item>` : null
                }
                iosTemplate() {
                    return this.wallet ? .app_store ? W.dy `<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">iOS App</wui-text>
    </wui-list-item>` : null
                }
                androidTemplate() {
                    return this.wallet ? .play_store ? W.dy `<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="paragraph-500" color="fg-100">Android App</wui-text>
    </wui-list-item>` : null
                }
                homepageTemplate() {
                    return this.wallet ? .homepage ? W.dy `
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="paragraph-500" color="fg-100">Website</wui-text>
      </wui-list-item>
    ` : null
                }
                onChromeStore() {
                    this.wallet ? .chrome_store && B.j1.openHref(this.wallet.chrome_store, "_blank")
                }
                onAppStore() {
                    this.wallet ? .app_store && B.j1.openHref(this.wallet.app_store, "_blank")
                }
                onPlayStore() {
                    this.wallet ? .play_store && B.j1.openHref(this.wallet.play_store, "_blank")
                }
                onHomePage() {
                    this.wallet ? .homepage && B.j1.openHref(this.wallet.homepage, "_blank")
                }
            };
            eb = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }([(0, z.customElement)("w3m-downloads-view")], eb);
            let ey = class extends W.oi {
                render() {
                    return W.dy `
      <wui-flex flexDirection="column" padding="s" gap="xs">
        ${this.recommendedWalletsTemplate()}
        <wui-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          @click=${()=>{B.j1.openHref("https://walletconnect.com/explorer?type=wallet","_blank")}}
        ></wui-list-wallet>
      </wui-flex>
    `
                }
                recommendedWalletsTemplate() {
                    let {
                        recommended: e,
                        featured: t
                    } = B.ApiController.state, {
                        customWallets: r
                    } = B.OptionsController.state;
                    return [...t, ...r ? ? [], ...e].slice(0, 4).map(e => W.dy `
        <wui-list-wallet
          name=${e.name??"Unknown"}
          tagVariant="main"
          imageSrc=${(0,F.o)(B.fz.getWalletImage(e))}
          @click=${()=>{B.j1.openHref(e.homepage??"https://walletconnect.com/explorer","_blank")}}
        ></wui-list-wallet>
      `)
                }
            };
            ey = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }([(0, z.customElement)("w3m-get-wallet-view")], ey);
            var eC = W.iv `
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
    transition: all var(--wui-ease-out-power-2) var(--wui-duration-lg);
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,
                ex = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let e_ = class extends W.oi {
                constructor() {
                    super(), this.network = B.RouterController.state.data ? .network, this.unsubscribe = [], this.showRetry = !1, this.error = !1, this.currentNetwork = B.NetworkController.state.caipNetwork, this.unsubscribe.push(B.NetworkController.subscribeKey("caipNetwork", e => {
                        e ? .id === this.currentNetwork ? .id || B.yD.state.isSiweEnabled || B.RouterController.goBack()
                    }))
                }
                disconnectedCallback() {
                    this.unsubscribe.forEach(e => e())
                }
                firstUpdated() {
                    this.onSwitchNetwork()
                }
                render() {
                    if (!this.network) throw Error("w3m-network-switch-view: No network provided");
                    this.onShowRetry();
                    let e = this.error ? "Switch declined" : "Approve in wallet",
                        t = this.error ? "Switch can be declined if chain is not supported by a wallet or previous request is still active" : "Accept connection request in your wallet";
                    return W.dy `
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${(0,F.o)(B.fz.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:W.dy`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box
            backgroundColor="error-100"
            background="opaque"
            iconColor="error-100"
            icon="close"
            size="sm"
            ?border=${!0}
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100">${e}</wui-text>
          <wui-text align="center" variant="small-500" color="fg-200">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="fill"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `
                }
                onShowRetry() {
                    this.error && !this.showRetry && (this.showRetry = !0, this.shadowRoot ? .querySelector("wui-button").animate([{
                        opacity: 0
                    }, {
                        opacity: 1
                    }], {
                        fill: "forwards",
                        easing: "ease"
                    }))
                }
                async onSwitchNetwork() {
                    try {
                        this.error = !1, this.network && (await B.NetworkController.switchActiveNetwork(this.network), B.yD.state.isSiweEnabled || B.RouterController.goBack())
                    } catch {
                        this.error = !0
                    }
                }
            };
            e_.styles = eC, ex([(0, Z.SB)()], e_.prototype, "showRetry", void 0), ex([(0, Z.SB)()], e_.prototype, "error", void 0), ex([(0, Z.SB)()], e_.prototype, "currentNetwork", void 0), e_ = ex([(0, z.customElement)("w3m-network-switch-view")], e_);
            var eE = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            };
            let eS = class extends W.oi {
                constructor() {
                    super(), this.unsubscribe = [], this.caipNetwork = B.NetworkController.state.caipNetwork, this.unsubscribe.push(B.NetworkController.subscribeKey("caipNetwork", e => this.caipNetwork = e))
                }
                disconnectedCallback() {
                    this.unsubscribe.forEach(e => e())
                }
                render() {
                    return W.dy `
      <wui-grid padding="s" gridTemplateColumns="repeat(4, 1fr)" rowGap="l" columnGap="xs">
        ${this.networksTemplate()}
      </wui-grid>

      <wui-separator></wui-separator>

      <wui-flex padding="s" flexDirection="column" gap="m" alignItems="center">
        <wui-text variant="small-500" color="fg-300" align="center">
          Your connected wallet may not support some of the networks available for this dApp
        </wui-text>
        <wui-link @click=${this.onNetworkHelp.bind(this)}>
          <wui-icon size="xs" color="accent-100" slot="iconLeft" name="helpCircle"></wui-icon>
          What is a network
        </wui-link>
      </wui-flex>
    `
                }
                onNetworkHelp() {
                    B.Xs.sendEvent({
                        type: "track",
                        event: "CLICK_NETWORK_HELP"
                    }), B.RouterController.push("WhatIsANetwork")
                }
                networksTemplate() {
                    let {
                        approvedCaipNetworkIds: e,
                        requestedCaipNetworks: t,
                        supportsAllNetworks: r
                    } = B.NetworkController.state;
                    return e ? .length && t ? .sort((t, r) => e.indexOf(r.id) - e.indexOf(t.id)), t ? .map(t => W.dy `
        <wui-card-select
          .selected=${this.caipNetwork?.id===t.id}
          imageSrc=${F.o(B.fz.getNetworkImage(t))}
          type="network"
          name=${t.name??t.id}
          @click=${()=>this.onSwitchNetwork(t)}
          .disabled=${!r&&!e?.includes(t.id)}
        ></wui-card-select>
      `)
                }
                async onSwitchNetwork(e) {
                    let {
                        isConnected: t
                    } = B.AccountController.state, {
                        approvedCaipNetworkIds: r,
                        supportsAllNetworks: i,
                        caipNetwork: n
                    } = B.NetworkController.state;
                    t && n ? .id !== e.id ? r ? .includes(e.id) ? await B.NetworkController.switchActiveNetwork(e) : i && B.RouterController.push("SwitchNetwork", {
                        network: e
                    }) : t || (B.NetworkController.setCaipNetwork(e), B.RouterController.push("Connect"))
                }
            };
            eE([(0, Z.SB)()], eS.prototype, "caipNetwork", void 0), eS = eE([(0, z.customElement)("w3m-networks-view")], eS);
            var ek = r(44519),
                eA = W.iv `
  :host > wui-flex:first-child {
    height: 500px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }
`,
                eD = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let e$ = "last-transaction",
                eR = class extends W.oi {
                    constructor() {
                        super(), this.unsubscribe = [], this.paginationObserver = void 0, this.address = B.AccountController.state.address, this.transactions = B.sl.state.transactions, this.transactionsByYear = B.sl.state.transactionsByYear, this.loading = B.sl.state.loading, this.empty = B.sl.state.empty, this.next = B.sl.state.next, this.unsubscribe.push(...[B.AccountController.subscribe(e => {
                            e.isConnected && this.address !== e.address && (this.address = e.address, B.sl.resetTransactions(), B.sl.fetchTransactions(e.address))
                        }), B.sl.subscribe(e => {
                            this.transactions = e.transactions, this.transactionsByYear = e.transactionsByYear, this.loading = e.loading, this.empty = e.empty, this.next = e.next
                        })])
                    }
                    firstUpdated() {
                        0 === this.transactions.length && B.sl.fetchTransactions(this.address), this.createPaginationObserver()
                    }
                    updated() {
                        this.setPaginationObserver()
                    }
                    disconnectedCallback() {
                        this.unsubscribe.forEach(e => e())
                    }
                    render() {
                        return W.dy `
      <wui-flex flexDirection="column" padding="s" gap="s">
        ${this.empty?null:this.templateTransactionsByYear()}
        ${this.loading?this.templateLoading():null}
        ${!this.loading&&this.empty?this.templateEmpty():null}
      </wui-flex>
    `
                    }
                    templateTransactionsByYear() {
                        let e = Object.keys(this.transactionsByYear).sort().reverse();
                        return e.map((t, r) => {
                            let i = r === e.length - 1,
                                n = parseInt(t, 10),
                                o = z.TransactionUtil.getTransactionGroupTitle(n),
                                a = this.transactionsByYear[n];
                            return a ? W.dy `
        <wui-flex flexDirection="column" gap="sm">
          <wui-flex
            alignItems="center"
            flexDirection="row"
            .padding=${["xs","s","s","s"]}
          >
            <wui-text variant="paragraph-500" color="fg-200">${o}</wui-text>
          </wui-flex>
          <wui-flex flexDirection="column" gap="xs">
            ${this.templateTransactions(a,i)}
          </wui-flex>
        </wui-flex>
      ` : null
                        })
                    }
                    templateRenderTransaction(e, t) {
                        let {
                            date: r,
                            descriptions: i,
                            direction: n,
                            isAllNFT: o,
                            images: a,
                            status: s,
                            transfers: l,
                            type: c
                        } = this.getTransactionListItemProps(e), u = l ? .length > 1;
                        return l ? .length !== 2 || o ? u ? l.map((e, i) => {
                            let n = z.TransactionUtil.getTransferDescription(e),
                                o = t && i === l.length - 1;
                            return W.dy ` <wui-transaction-list-item
          date=${r}
          direction=${e.direction}
          id=${o&&this.next?e$:""}
          status=${s}
          type=${c}
          onlyDirectionIcon=${!0}
          .images=${[a?.[i]]}
          .descriptions=${[n]}
        ></wui-transaction-list-item>`
                        }) : W.dy `
      <wui-transaction-list-item
        date=${r}
        direction=${n}
        id=${t&&this.next?e$:""}
        status=${s}
        type=${c}
        .images=${a}
        .descriptions=${i}
      ></wui-transaction-list-item>
    ` : W.dy `
        <wui-transaction-list-item
          date=${r}
          direction=${n}
          id=${t&&this.next?e$:""}
          status=${s}
          type=${c}
          .images=${a}
          .descriptions=${i}
        ></wui-transaction-list-item>
      `
                    }
                    templateTransactions(e, t) {
                        return e.map((r, i) => {
                            let n = t && i === e.length - 1;
                            return W.dy `${this.templateRenderTransaction(r,n)}`
                        })
                    }
                    templateEmpty() {
                        return W.dy `
      <wui-flex
        flexGrow="1"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        .padding=${["3xl","xl","3xl","xl"]}
        gap="xl"
      >
        <wui-icon-box
          backgroundColor="glass-005"
          background="gray"
          iconColor="fg-200"
          icon="wallet"
          size="lg"
          ?border=${!0}
          borderColor="wui-color-bg-125"
        ></wui-icon-box>
        <wui-flex flexDirection="column" alignItems="center" gap="xs">
          <wui-text align="center" variant="paragraph-500" color="fg-100"
            >No Transactions yet</wui-text
          >
          <wui-text align="center" variant="small-500" color="fg-200"
            >Start trading on dApps <br />
            to grow your wallet!</wui-text
          >
        </wui-flex>
      </wui-flex>
    `
                    }
                    templateLoading() {
                        return Array(7).fill(W.dy ` <wui-transaction-list-item-loader></wui-transaction-list-item-loader> `).map(e => e)
                    }
                    createPaginationObserver() {
                        let {
                            projectId: e
                        } = B.OptionsController.state;
                        this.paginationObserver = new IntersectionObserver(([t]) => {
                            t ? .isIntersecting && !this.loading && (B.sl.fetchTransactions(this.address), B.Xs.sendEvent({
                                type: "track",
                                event: "LOAD_MORE_TRANSACTIONS",
                                properties: {
                                    address: this.address,
                                    projectId: e,
                                    cursor: this.next
                                }
                            }))
                        }, {}), this.setPaginationObserver()
                    }
                    setPaginationObserver() {
                        this.paginationObserver ? .disconnect();
                        let e = this.shadowRoot ? .querySelector(`#${e$}`);
                        e && this.paginationObserver ? .observe(e)
                    }
                    getTransactionListItemProps(e) {
                        let t = ek.E.getRelativeDateFromNow(e ? .metadata ? .minedAt),
                            r = z.TransactionUtil.getTransactionDescriptions(e),
                            i = e ? .transfers,
                            n = e ? .transfers ? .[0],
                            o = !!n && e ? .transfers ? .every(e => !!e.nft_info),
                            a = z.TransactionUtil.getTransactionImages(i);
                        return {
                            date: t,
                            direction: n ? .direction,
                            descriptions: r,
                            isAllNFT: o,
                            images: a,
                            status: e.metadata ? .status,
                            transfers: i,
                            type: e.metadata ? .operationType
                        }
                    }
                };
            eR.styles = eA, eD([(0, Z.SB)()], eR.prototype, "address", void 0), eD([(0, Z.SB)()], eR.prototype, "transactions", void 0), eD([(0, Z.SB)()], eR.prototype, "transactionsByYear", void 0), eD([(0, Z.SB)()], eR.prototype, "loading", void 0), eD([(0, Z.SB)()], eR.prototype, "empty", void 0), eD([(0, Z.SB)()], eR.prototype, "next", void 0), eR = eD([(0, z.customElement)("w3m-transactions-view")], eR);
            let eO = [{
                    images: ["network", "layers", "system"],
                    title: "The system’s nuts and bolts",
                    text: "A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services."
                }, {
                    images: ["noun", "defiAlt", "dao"],
                    title: "Designed for different uses",
                    text: "Each network is designed differently, and may therefore suit certain apps and experiences."
                }],
                eI = class extends W.oi {
                    render() {
                        return W.dy `
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eO}></w3m-help-widget>
        <wui-button
          variant="fill"
          size="sm"
          @click=${()=>{B.j1.openHref("https://ethereum.org/en/developers/docs/networks/","_blank")}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `
                    }
                };
            eI = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }([(0, z.customElement)("w3m-what-is-a-network-view")], eI);
            let eT = [{
                    images: ["login", "profile", "lock"],
                    title: "One login for all of web3",
                    text: "Log in to any app by connecting your wallet. Say goodbye to countless passwords!"
                }, {
                    images: ["defi", "nft", "eth"],
                    title: "A home for your digital assets",
                    text: "A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs."
                }, {
                    images: ["browser", "noun", "dao"],
                    title: "Your gateway to a new web",
                    text: "With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more."
                }],
                eN = class extends W.oi {
                    render() {
                        return W.dy `
      <wui-flex
        flexDirection="column"
        .padding=${["xxl","xl","xl","xl"]}
        alignItems="center"
        gap="xl"
      >
        <w3m-help-widget .data=${eT}></w3m-help-widget>
        <wui-button variant="fill" size="sm" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a Wallet
        </wui-button>
      </wui-flex>
    `
                    }
                    onGetWallet() {
                        B.Xs.sendEvent({
                            type: "track",
                            event: "CLICK_GET_WALLET"
                        }), B.RouterController.push("GetWallet")
                    }
                };
            eN = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }([(0, z.customElement)("w3m-what-is-a-wallet-view")], eN);
            var eP = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            };
            let eU = class extends W.oi {
                constructor() {
                    super(...arguments), this.email = B.RouterController.state.data ? .email, this.emailConnector = B.ConnectorController.getEmailConnector(), this.loading = !1
                }
                render() {
                    if (!this.email) throw Error("w3m-email-verify-otp-view: No email provided");
                    return W.dy `
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["l","0","l","0"]}
        gap="l"
      >
        <wui-flex flexDirection="column" alignItems="center">
          <wui-text variant="paragraph-400" color="fg-100"> Enter the code we sent to </wui-text>
          <wui-text variant="paragraph-500" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-text variant="small-400" color="fg-200">The code expires in 10 minutes</wui-text>

        ${this.loading?W.dy`<wui-loading-spinner size="lg" color="accent-100"></wui-loading-spinner></wui-link>`:W.dy`<wui-otp
              dissabled
              length="6"
              @inputChange=${this.onOtpInputChange.bind(this)}
            ></wui-otp>`}

        <wui-flex alignItems="center">
          <wui-text variant="small-400" color="fg-200">Didn't receive it?</wui-text>
          <wui-link>TODO: Resend code</wui-link>
        </wui-flex>
      </wui-flex>
    `
                }
                async onOtpInputChange(e) {
                    try {
                        if (!this.loading) {
                            let t = e.detail;
                            this.emailConnector && 6 === t.length && (this.loading = !0, await this.emailConnector.provider.connectOtp({
                                otp: t
                            }), await B.ConnectionController.connectExternal(this.emailConnector), B.IN.close(), B.Xs.sendEvent({
                                type: "track",
                                event: "CONNECT_SUCCESS",
                                properties: {
                                    method: "email"
                                }
                            }))
                        }
                    } catch (t) {
                        let e = "string" == typeof t ? t : t ? .message;
                        B.SnackController.showError(e), this.loading = !1
                    }
                }
            };
            eP([(0, Z.SB)()], eU.prototype, "loading", void 0), eU = eP([(0, z.customElement)("w3m-email-verify-otp-view")], eU);
            var eM = W.iv `
  wui-icon-box {
    height: 64px;
    width: 64px;
  }
`;
            let ej = class extends W.oi {
                constructor() {
                    super(), this.email = B.RouterController.state.data ? .email, this.emailConnector = B.ConnectorController.getEmailConnector(), this.listenForDeviceApproval()
                }
                render() {
                    if (!this.email || !this.emailConnector) throw Error("w3m-email-verify-device-view: No email provided");
                    return W.dy `
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["0","3xl","xxl","3xl"]}
      >
        <wui-flex justifyContent="center" .padding=${["0","0","xxl","0"]}>
          <wui-icon-box
            size="xl"
            iconcolor="accent-100"
            backgroundcolor="accent-100"
            icon="verify"
            background="opaque"
          ></wui-icon-box>
        </wui-flex>
        <wui-text variant="large-600" color="fg-100"> Register this device to continue </wui-text>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          .padding=${["s","0","0","0"]}
        >
          <wui-text variant="paragraph-400" color="fg-200">Check the instructions sent to</wui-text>
          <wui-text variant="paragraph-600" color="fg-100">${this.email}</wui-text>
        </wui-flex>

        <wui-flex alignItems="center" .padding=${["xxl","0","0","0"]}>
          <wui-text variant="paragraph-400" color="fg-200" align="center">
            This is a quick one-time approval that will keep your account secure</wui-text
          >
        </wui-flex>
      </wui-flex>
    `
                }
                async listenForDeviceApproval() {
                    this.emailConnector && (await this.emailConnector.provider.connectDevice(), B.RouterController.replace("EmailVerifyOtp", {
                        email: this.email
                    }))
                }
            };
            ej.styles = eM, ej = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }([(0, z.customElement)("w3m-email-verify-device-view")], ej);
            var eL = W.iv `
  div {
    width: 100%;
  }

  [data-ready='false'] {
    transform: scale(1.05);
  }

  @media (max-width: 430px) {
    [data-ready='false'] {
      transform: translateY(-50px);
    }
  }
`,
                eB = r(43201),
                ez = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let eW = class extends W.oi {
                constructor() {
                    super(), this.bodyObserver = void 0, this.unsubscribe = [], this.iframe = document.getElementById("w3m-iframe"), this.divRef = (0, eB.V)(), this.ready = !1, this.unsubscribe.push(B.IN.subscribeKey("open", e => {
                        e || this.onHideIframe()
                    }))
                }
                disconnectedCallback() {
                    this.unsubscribe.forEach(e => e()), this.bodyObserver ? .unobserve(window.document.body)
                }
                firstUpdated() {
                    this.iframe.style.display = "block", this.divRef.value && (this.divRef.value.style.height = `${this.iframe.offsetHeight+2}px`);
                    let e = this.renderRoot.querySelector("div");
                    this.bodyObserver = new ResizeObserver(() => {
                        let t = e ? .getBoundingClientRect() ? ? {
                            left: 0,
                            top: 0,
                            width: 0,
                            height: 0
                        };
                        this.iframe.style.width = `${t.width}px`, this.iframe.style.height = `${t.height-2}px`, this.iframe.style.left = `${t.left}px`, this.iframe.style.top = `${t.top+1}px`, this.ready = !0
                    }), this.bodyObserver.observe(window.document.body)
                }
                render() {
                    return this.ready && this.onShowIframe(), W.dy `<div ${(0,eB.i)(this.divRef)} data-ready=${this.ready}></div>`
                }
                onShowIframe() {
                    let e = window.innerWidth <= 430;
                    this.iframe.animate([{
                        opacity: 0,
                        transform: e ? "translateY(50px)" : "scale(.95)"
                    }, {
                        opacity: 1,
                        transform: e ? "translateY(0)" : "scale(1)"
                    }], {
                        duration: 200,
                        easing: "ease",
                        fill: "forwards",
                        delay: 300
                    })
                }
                async onHideIframe() {
                    await this.iframe.animate([{
                        opacity: 1
                    }, {
                        opacity: 0
                    }], {
                        duration: 200,
                        easing: "ease",
                        fill: "forwards"
                    }).finished, this.iframe.style.display = "none"
                }
            };
            eW.styles = eL, ez([(0, Z.SB)()], eW.prototype, "ready", void 0), eW = ez([(0, z.customElement)("w3m-approve-transaction-view")], eW);
            var eZ = W.iv `
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 76px);
  }

  @media (max-width: 435px) {
    wui-grid {
      grid-template-columns: repeat(auto-fill, 77px);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    padding-top: var(--wui-spacing-l);
    padding-bottom: var(--wui-spacing-l);
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,
                eF = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let eH = "local-paginator",
                eV = class extends W.oi {
                    constructor() {
                        super(), this.unsubscribe = [], this.paginationObserver = void 0, this.initial = !B.ApiController.state.wallets.length, this.wallets = B.ApiController.state.wallets, this.recommended = B.ApiController.state.recommended, this.featured = B.ApiController.state.featured, this.unsubscribe.push(...[B.ApiController.subscribeKey("wallets", e => this.wallets = e), B.ApiController.subscribeKey("recommended", e => this.recommended = e), B.ApiController.subscribeKey("featured", e => this.featured = e)])
                    }
                    firstUpdated() {
                        this.initialFetch(), this.createPaginationObserver()
                    }
                    disconnectedCallback() {
                        this.unsubscribe.forEach(e => e()), this.paginationObserver ? .disconnect()
                    }
                    render() {
                        return W.dy `
      <wui-grid
        data-scroll=${!this.initial}
        .padding=${["0","s","s","s"]}
        columnGap="xxs"
        rowGap="l"
        justifyContent="space-between"
      >
        ${this.initial?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `
                    }
                    async initialFetch() {
                        let e = this.shadowRoot ? .querySelector("wui-grid");
                        this.initial && e && (await B.ApiController.fetchWallets({
                            page: 1
                        }), await e.animate([{
                            opacity: 1
                        }, {
                            opacity: 0
                        }], {
                            duration: 200,
                            fill: "forwards",
                            easing: "ease"
                        }).finished, this.initial = !1, e.animate([{
                            opacity: 0
                        }, {
                            opacity: 1
                        }], {
                            duration: 200,
                            fill: "forwards",
                            easing: "ease"
                        }))
                    }
                    shimmerTemplate(e, t) {
                        return [...Array(e)].map(() => W.dy `
        <wui-card-select-loader type="wallet" id=${(0,F.o)(t)}></wui-card-select-loader>
      `)
                    }
                    walletsTemplate() {
                        return [...this.featured, ...this.recommended, ...this.wallets].map(e => W.dy `
        <wui-card-select
          imageSrc=${(0,F.o)(B.fz.getWalletImage(e))}
          type="wallet"
          name=${e.name}
          @click=${()=>this.onConnectWallet(e)}
        ></wui-card-select>
      `)
                    }
                    paginationLoaderTemplate() {
                        let {
                            wallets: e,
                            recommended: t,
                            featured: r,
                            count: i
                        } = B.ApiController.state, n = window.innerWidth < 352 ? 3 : 4, o = e.length + t.length, a = Math.ceil(o / n) * n - o + n;
                        return (a -= e.length ? r.length % n : 0, 0 === i || [...r, ...e, ...t].length < i) ? this.shimmerTemplate(a, eH) : null
                    }
                    createPaginationObserver() {
                        let e = this.shadowRoot ? .querySelector(`#${eH}`);
                        e && (this.paginationObserver = new IntersectionObserver(([e]) => {
                            if (e ? .isIntersecting && !this.initial) {
                                let {
                                    page: e,
                                    count: t,
                                    wallets: r
                                } = B.ApiController.state;
                                r.length < t && B.ApiController.fetchWallets({
                                    page: e + 1
                                })
                            }
                        }), this.paginationObserver.observe(e))
                    }
                    onConnectWallet(e) {
                        let {
                            connectors: t
                        } = B.ConnectorController.state, r = t.find(({
                            explorerId: t
                        }) => t === e.id);
                        r ? B.RouterController.push("ConnectingExternal", {
                            connector: r
                        }) : B.RouterController.push("ConnectingWalletConnect", {
                            wallet: e
                        })
                    }
                };
            eV.styles = eZ, eF([(0, Z.SB)()], eV.prototype, "initial", void 0), eF([(0, Z.SB)()], eV.prototype, "wallets", void 0), eF([(0, Z.SB)()], eV.prototype, "recommended", void 0), eF([(0, Z.SB)()], eV.prototype, "featured", void 0), eV = eF([(0, z.customElement)("w3m-all-wallets-list")], eV);
            var eY = W.iv `
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }
`,
                eK = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let eq = class extends W.oi {
                constructor() {
                    super(...arguments), this.prevQuery = "", this.loading = !0, this.query = ""
                }
                render() {
                    return this.onSearch(), this.loading ? W.dy `<wui-loading-spinner color="accent-100"></wui-loading-spinner>` : this.walletsTemplate()
                }
                async onSearch() {
                    this.query !== this.prevQuery && (this.prevQuery = this.query, this.loading = !0, await B.ApiController.searchWallet({
                        search: this.query
                    }), this.loading = !1)
                }
                walletsTemplate() {
                    let {
                        search: e
                    } = B.ApiController.state;
                    return e.length ? W.dy `
      <wui-grid
        .padding=${["0","s","s","s"]}
        gridTemplateColumns="repeat(4, 1fr)"
        rowGap="l"
        columnGap="xs"
      >
        ${e.map(e=>W.dy`
            <wui-card-select
              imageSrc=${(0,F.o)(B.fz.getWalletImage(e))}
              type="wallet"
              name=${e.name}
              @click=${()=>this.onConnectWallet(e)}
            ></wui-card-select>
          `)}
      </wui-grid>
    ` : W.dy `
        <wui-flex justifyContent="center" alignItems="center" gap="s" flexDirection="column">
          <wui-icon-box
            size="lg"
            iconColor="fg-200"
            backgroundColor="fg-300"
            icon="wallet"
            background="transparent"
          ></wui-icon-box>
          <wui-text color="fg-200" variant="paragraph-500">No Wallet found</wui-text>
        </wui-flex>
      `
                }
                onConnectWallet(e) {
                    let {
                        connectors: t
                    } = B.ConnectorController.state, r = t.find(({
                        explorerId: t
                    }) => t === e.id);
                    r ? B.RouterController.push("ConnectingExternal", {
                        connector: r
                    }) : B.RouterController.push("ConnectingWalletConnect", {
                        wallet: e
                    })
                }
            };
            eq.styles = eY, eK([(0, Z.SB)()], eq.prototype, "loading", void 0), eK([(0, Z.Cb)()], eq.prototype, "query", void 0), eq = eK([(0, z.customElement)("w3m-all-wallets-search")], eq);
            var eG = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            };
            let eX = class extends W.oi {
                constructor() {
                    super(), this.platformTabs = [], this.unsubscribe = [], this.platforms = [], this.onSelectPlatfrom = void 0, this.buffering = !1, this.unsubscribe.push(B.ConnectionController.subscribeKey("buffering", e => this.buffering = e))
                }
                disconnectCallback() {
                    this.unsubscribe.forEach(e => e())
                }
                render() {
                    let e = this.generateTabs();
                    return W.dy `
      <wui-flex justifyContent="center" .padding=${["l","0","0","0"]}>
        <wui-tabs
          ?disabled=${this.buffering}
          .tabs=${e}
          .onTabChange=${this.onTabChange.bind(this)}
        ></wui-tabs>
      </wui-flex>
    `
                }
                generateTabs() {
                    let e = this.platforms.map(e => "browser" === e ? {
                        label: "Browser",
                        icon: "extension",
                        platform: "browser"
                    } : "mobile" === e ? {
                        label: "Mobile",
                        icon: "mobile",
                        platform: "mobile"
                    } : "qrcode" === e ? {
                        label: "Mobile",
                        icon: "mobile",
                        platform: "qrcode"
                    } : "web" === e ? {
                        label: "Webapp",
                        icon: "browser",
                        platform: "web"
                    } : "desktop" === e ? {
                        label: "Desktop",
                        icon: "desktop",
                        platform: "desktop"
                    } : {
                        label: "Browser",
                        icon: "extension",
                        platform: "unsupported"
                    });
                    return this.platformTabs = e.map(({
                        platform: e
                    }) => e), e
                }
                onTabChange(e) {
                    let t = this.platformTabs[e];
                    t && this.onSelectPlatfrom ? .(t)
                }
            };
            eG([(0, Z.Cb)({
                type: Array
            })], eX.prototype, "platforms", void 0), eG([(0, Z.Cb)()], eX.prototype, "onSelectPlatfrom", void 0), eG([(0, Z.SB)()], eX.prototype, "buffering", void 0), eX = eG([(0, z.customElement)("w3m-connecting-header")], eX);
            let eJ = class extends eh {
                constructor() {
                    if (super(), !this.wallet) throw Error("w3m-connecting-wc-browser: No wallet provided");
                    this.onConnect = this.onConnectProxy.bind(this), this.onAutoConnect = this.onConnectProxy.bind(this), B.Xs.sendEvent({
                        type: "track",
                        event: "SELECT_WALLET",
                        properties: {
                            name: this.wallet.name,
                            platform: "browser"
                        }
                    })
                }
                async onConnectProxy() {
                    try {
                        this.error = !1;
                        let {
                            connectors: e
                        } = B.ConnectorController.state, t = e.find(e => "ANNOUNCED" === e.type && e.info ? .rdns === this.wallet ? .rdns), r = e.find(e => "INJECTED" === e.type);
                        t ? await B.ConnectionController.connectExternal(t) : r && await B.ConnectionController.connectExternal(r), B.IN.close(), B.Xs.sendEvent({
                            type: "track",
                            event: "CONNECT_SUCCESS",
                            properties: {
                                method: "browser"
                            }
                        })
                    } catch (e) {
                        B.Xs.sendEvent({
                            type: "track",
                            event: "CONNECT_ERROR",
                            properties: {
                                message: e ? .message ? ? "Unknown"
                            }
                        }), this.error = !0
                    }
                }
            };
            eJ = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }([(0, z.customElement)("w3m-connecting-wc-browser")], eJ);
            let eQ = class extends eh {
                constructor() {
                    if (super(), !this.wallet) throw Error("w3m-connecting-wc-desktop: No wallet provided");
                    this.onConnect = this.onConnectProxy.bind(this), this.onRender = this.onRenderProxy.bind(this), B.Xs.sendEvent({
                        type: "track",
                        event: "SELECT_WALLET",
                        properties: {
                            name: this.wallet.name,
                            platform: "desktop"
                        }
                    })
                }
                onRenderProxy() {
                    !this.ready && this.uri && (this.ready = !0, this.timeout = setTimeout(() => {
                        this.onConnect ? .()
                    }, 200))
                }
                onConnectProxy() {
                    if (this.wallet ? .desktop_link && this.uri) try {
                        this.error = !1;
                        let {
                            desktop_link: e,
                            name: t
                        } = this.wallet, {
                            redirect: r,
                            href: i
                        } = B.j1.formatNativeUrl(e, this.uri);
                        B.ConnectionController.setWcLinking({
                            name: t,
                            href: i
                        }), B.ConnectionController.setRecentWallet(this.wallet), B.j1.openHref(r, "_self")
                    } catch {
                        this.error = !0
                    }
                }
            };
            eQ = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }([(0, z.customElement)("w3m-connecting-wc-desktop")], eQ);
            let e0 = class extends eh {
                constructor() {
                    if (super(), !this.wallet) throw Error("w3m-connecting-wc-mobile: No wallet provided");
                    this.onConnect = this.onConnectProxy.bind(this), this.onRender = this.onRenderProxy.bind(this), document.addEventListener("visibilitychange", this.onBuffering.bind(this)), B.Xs.sendEvent({
                        type: "track",
                        event: "SELECT_WALLET",
                        properties: {
                            name: this.wallet.name,
                            platform: "mobile"
                        }
                    })
                }
                disconnectedCallback() {
                    super.disconnectedCallback(), document.removeEventListener("visibilitychange", this.onBuffering.bind(this))
                }
                onRenderProxy() {
                    !this.ready && this.uri && (this.ready = !0, this.onConnect ? .())
                }
                onConnectProxy() {
                    if (this.wallet ? .mobile_link && this.uri) try {
                        this.error = !1;
                        let {
                            mobile_link: e,
                            name: t
                        } = this.wallet, {
                            redirect: r,
                            href: i
                        } = B.j1.formatNativeUrl(e, this.uri);
                        B.ConnectionController.setWcLinking({
                            name: t,
                            href: i
                        }), B.ConnectionController.setRecentWallet(this.wallet), B.j1.openHref(r, "_self")
                    } catch {
                        this.error = !0
                    }
                }
                onBuffering() {
                    let e = B.j1.isIos();
                    document ? .visibilityState === "visible" && !this.error && e && (B.ConnectionController.setBuffering(!0), setTimeout(() => {
                        B.ConnectionController.setBuffering(!1)
                    }, 5e3))
                }
            };
            e0 = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }([(0, z.customElement)("w3m-connecting-wc-mobile")], e0);
            var e1 = W.iv `
  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: clamp(0px, var(--wui-border-radius-l), 40px) !important;
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: 200ms;
    animation-timing-function: ease;
    animation-name: fadein;
    animation-fill-mode: forwards;
  }
`;
            let e2 = class extends eh {
                constructor() {
                    super(), this.forceUpdate = () => {
                        this.requestUpdate()
                    }, window.addEventListener("resize", this.forceUpdate), B.Xs.sendEvent({
                        type: "track",
                        event: "SELECT_WALLET",
                        properties: {
                            name: this.wallet ? .name ? ? "WalletConnect",
                            platform: "qrcode"
                        }
                    })
                }
                disconnectedCallback() {
                    super.disconnectedCallback(), window.removeEventListener("resize", this.forceUpdate)
                }
                render() {
                    return this.onRenderProxy(), W.dy `
      <wui-flex padding="xl" flexDirection="column" gap="xl" alignItems="center">
        <wui-shimmer borderRadius="l" width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>

        <wui-text variant="paragraph-500" color="fg-100">
          Scan this QR Code with your phone
        </wui-text>

        <wui-link @click=${this.onCopyUri} color="fg-200">
          <wui-icon size="xs" color="fg-200" slot="iconLeft" name="copy"></wui-icon>
          Copy link
        </wui-link>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `
                }
                onRenderProxy() {
                    !this.ready && this.uri && (this.timeout = setTimeout(() => {
                        this.ready = !0
                    }, 200))
                }
                qrCodeTemplate() {
                    if (!this.uri || !this.ready) return null;
                    let e = this.getBoundingClientRect().width - 40,
                        t = this.wallet ? this.wallet.name : void 0;
                    return B.ConnectionController.setWcLinking(void 0), B.ConnectionController.setRecentWallet(this.wallet), W.dy `<wui-qr-code
      size=${e}
      theme=${B.ThemeController.state.themeMode}
      uri=${this.uri}
      imageSrc=${(0,F.o)(B.fz.getWalletImage(this.wallet))}
      alt=${(0,F.o)(t)}
    ></wui-qr-code>`
                }
            };
            e2.styles = e1, e2 = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }([(0, z.customElement)("w3m-connecting-wc-qrcode")], e2);
            var e3 = W.iv `
  :host {
    display: flex;
    justify-content: center;
    gap: var(--wui-spacing-2xl);
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`;
            let e5 = class extends W.oi {
                constructor() {
                    super(...arguments), this.dappImageUrl = B.OptionsController.state.metadata ? .icons, this.walletImageUrl = B.MO.getConnectedWalletImageUrl()
                }
                firstUpdated() {
                    let e = this.shadowRoot ? .querySelectorAll("wui-visual-thumbnail");
                    e ? .[0] && this.createAnimation(e[0], "translate(18px)"), e ? .[1] && this.createAnimation(e[1], "translate(-18px)")
                }
                render() {
                    return W.dy `
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `
                }
                createAnimation(e, t) {
                    e.animate([{
                        transform: "translateX(0px)"
                    }, {
                        transform: t
                    }], {
                        duration: 1600,
                        easing: "cubic-bezier(0.56, 0, 0.48, 1)",
                        direction: "alternate",
                        iterations: 1 / 0
                    })
                }
            };
            e5.styles = e3, e5 = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }([(0, z.customElement)("w3m-connecting-siwe")], e5);
            let e4 = class extends W.oi {
                constructor() {
                    if (super(), this.wallet = B.RouterController.state.data ? .wallet, !this.wallet) throw Error("w3m-connecting-wc-unsupported: No wallet provided");
                    B.Xs.sendEvent({
                        type: "track",
                        event: "SELECT_WALLET",
                        properties: {
                            name: this.wallet.name,
                            platform: "browser"
                        }
                    })
                }
                render() {
                    return W.dy `
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${["3xl","xl","xl","xl"]}
        gap="xl"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${(0,F.o)(B.fz.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="paragraph-500" color="fg-100">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `
                }
            };
            e4 = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }([(0, z.customElement)("w3m-connecting-wc-unsupported")], e4);
            let e6 = class extends eh {
                constructor() {
                    if (super(), !this.wallet) throw Error("w3m-connecting-wc-web: No wallet provided");
                    this.onConnect = this.onConnectProxy.bind(this), this.secondaryBtnLabel = "Open", this.secondaryLabel = "Open and continue in a new browser tab", this.secondaryBtnIcon = "externalLink", B.Xs.sendEvent({
                        type: "track",
                        event: "SELECT_WALLET",
                        properties: {
                            name: this.wallet.name,
                            platform: "web"
                        }
                    })
                }
                onConnectProxy() {
                    if (this.wallet ? .webapp_link && this.uri) try {
                        this.error = !1;
                        let {
                            webapp_link: e,
                            name: t
                        } = this.wallet, {
                            redirect: r,
                            href: i
                        } = B.j1.formatUniversalUrl(e, this.uri);
                        B.ConnectionController.setWcLinking({
                            name: t,
                            href: i
                        }), B.ConnectionController.setRecentWallet(this.wallet), B.j1.openHref(r, "_blank")
                    } catch {
                        this.error = !0
                    }
                }
            };
            e6 = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }([(0, z.customElement)("w3m-connecting-wc-web")], e6);
            var e8 = W.iv `
  wui-icon-link[data-hidden='true'] {
    opacity: 0 !important;
    pointer-events: none;
  }
`,
                e7 = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };

            function e9() {
                let e = B.RouterController.state.data ? .connector ? .name,
                    t = B.RouterController.state.data ? .wallet ? .name,
                    r = B.RouterController.state.data ? .network ? .name,
                    i = t ? ? e;
                return {
                    Connect: "Connect Wallet",
                    Account: void 0,
                    ConnectingExternal: i ? ? "Connect Wallet",
                    ConnectingWalletConnect: i ? ? "WalletConnect",
                    ConnectingSiwe: "Sign In",
                    Networks: "Choose Network",
                    SwitchNetwork: r ? ? "Switch Network",
                    AllWallets: "All Wallets",
                    WhatIsANetwork: "What is a network?",
                    WhatIsAWallet: "What is a wallet?",
                    GetWallet: "Get a Wallet",
                    Downloads: i ? `Get ${i}` : "Downloads",
                    EmailVerifyOtp: "Confirm Email",
                    EmailVerifyDevice: "",
                    ApproveTransaction: "Approve Transaction",
                    Transactions: "Activity"
                }
            }
            let te = class extends W.oi {
                constructor() {
                    super(), this.unsubscribe = [], this.heading = e9()[B.RouterController.state.view], this.buffering = !1, this.showBack = !1, this.unsubscribe.push(B.RouterController.subscribeKey("view", e => {
                        this.onViewChange(e), this.onHistoryChange()
                    }), B.ConnectionController.subscribeKey("buffering", e => this.buffering = e))
                }
                disconnectCallback() {
                    this.unsubscribe.forEach(e => e())
                }
                render() {
                    return W.dy `
      <wui-flex .padding=${this.getPadding()} justifyContent="space-between" alignItems="center">
        ${this.dynamicButtonTemplate()} ${this.titleTemplate()}
        <wui-icon-link
          ?disabled=${this.buffering}
          icon="close"
          @click=${this.onClose.bind(this)}
        ></wui-icon-link>
      </wui-flex>
      ${this.separatorTemplate()}
    `
                }
                onWalletHelp() {
                    B.Xs.sendEvent({
                        type: "track",
                        event: "CLICK_WALLET_HELP"
                    }), B.RouterController.push("WhatIsAWallet")
                }
                async onClose() {
                    B.yD.state.isSiweEnabled && "success" !== B.yD.state.status && await B.ConnectionController.disconnect(), B.IN.close()
                }
                titleTemplate() {
                    return W.dy `<wui-text variant="paragraph-700" color="fg-100">${this.heading}</wui-text>`
                }
                dynamicButtonTemplate() {
                    let {
                        view: e
                    } = B.RouterController.state;
                    return this.showBack && "ApproveTransaction" !== e ? W.dy `<wui-icon-link
        id="dynamic"
        icon="chevronLeft"
        ?disabled=${this.buffering}
        @click=${this.onGoBack.bind(this)}
      ></wui-icon-link>` : W.dy `<wui-icon-link
      data-hidden=${"Connect"!==e}
      id="dynamic"
      icon="helpCircle"
      @click=${this.onWalletHelp.bind(this)}
    ></wui-icon-link>`
                }
                separatorTemplate() {
                    return this.heading && "EmailVerifyDevice" !== B.RouterController.state.view ? W.dy `<wui-separator></wui-separator>` : null
                }
                getPadding() {
                    return this.heading ? ["l", "2l", "l", "2l"] : ["l", "2l", "0", "2l"]
                }
                async onViewChange(e) {
                    let t = this.shadowRoot ? .querySelector("wui-text");
                    if (t) {
                        let r = e9()[e];
                        await t.animate([{
                            opacity: 1
                        }, {
                            opacity: 0
                        }], {
                            duration: 200,
                            fill: "forwards",
                            easing: "ease"
                        }).finished, this.heading = r, t.animate([{
                            opacity: 0
                        }, {
                            opacity: 1
                        }], {
                            duration: 200,
                            fill: "forwards",
                            easing: "ease"
                        })
                    }
                }
                async onHistoryChange() {
                    let {
                        history: e
                    } = B.RouterController.state, t = this.shadowRoot ? .querySelector("#dynamic");
                    e.length > 1 && !this.showBack && t ? (await t.animate([{
                        opacity: 1
                    }, {
                        opacity: 0
                    }], {
                        duration: 200,
                        fill: "forwards",
                        easing: "ease"
                    }).finished, this.showBack = !0, t.animate([{
                        opacity: 0
                    }, {
                        opacity: 1
                    }], {
                        duration: 200,
                        fill: "forwards",
                        easing: "ease"
                    })) : e.length <= 1 && this.showBack && t && (await t.animate([{
                        opacity: 1
                    }, {
                        opacity: 0
                    }], {
                        duration: 200,
                        fill: "forwards",
                        easing: "ease"
                    }).finished, this.showBack = !1, t.animate([{
                        opacity: 0
                    }, {
                        opacity: 1
                    }], {
                        duration: 200,
                        fill: "forwards",
                        easing: "ease"
                    }))
                }
                onGoBack() {
                    "ConnectingSiwe" === B.RouterController.state.view ? B.RouterController.push("Connect") : B.RouterController.goBack()
                }
            };
            te.styles = [e8], e7([(0, Z.SB)()], te.prototype, "heading", void 0), e7([(0, Z.SB)()], te.prototype, "buffering", void 0), e7([(0, Z.SB)()], te.prototype, "showBack", void 0), te = e7([(0, z.customElement)("w3m-header")], te);
            var tt = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            };
            let tr = class extends W.oi {
                constructor() {
                    super(...arguments), this.data = []
                }
                render() {
                    return W.dy `
      <wui-flex flexDirection="column" alignItems="center" gap="l">
        ${this.data.map(e=>W.dy`
            <wui-flex flexDirection="column" alignItems="center" gap="xl">
              <wui-flex flexDirection="row" justifyContent="center" gap="1xs">
                ${e.images.map(e=>W.dy`<wui-visual name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="xxs">
              <wui-text variant="paragraph-500" color="fg-100" align="center">
                ${e.title}
              </wui-text>
              <wui-text variant="small-500" color="fg-200" align="center">${e.text}</wui-text>
            </wui-flex>
          `)}
      </wui-flex>
    `
                }
            };
            tt([(0, Z.Cb)({
                type: Array
            })], tr.prototype, "data", void 0), tr = tt([(0, z.customElement)("w3m-help-widget")], tr);
            var ti = W.iv `
  wui-flex {
    background-color: var(--wui-gray-glass-005);
  }

  a {
    text-decoration: none;
    color: var(--wui-color-fg-175);
    font-weight: 600;
  }
`;
            let tn = class extends W.oi {
                render() {
                    let {
                        termsConditionsUrl: e,
                        privacyPolicyUrl: t
                    } = B.OptionsController.state;
                    return e || t ? W.dy `
      <wui-flex .padding=${["m","s","s","s"]} justifyContent="center">
        <wui-text color="fg-250" variant="small-500" align="center">
          By connecting your wallet, you agree to our <br />
          ${this.termsTemplate()} ${this.andTemplate()} ${this.privacyTemplate()}
        </wui-text>
      </wui-flex>
    ` : null
                }
                andTemplate() {
                    let {
                        termsConditionsUrl: e,
                        privacyPolicyUrl: t
                    } = B.OptionsController.state;
                    return e && t ? "and" : ""
                }
                termsTemplate() {
                    let {
                        termsConditionsUrl: e
                    } = B.OptionsController.state;
                    return e ? W.dy `<a href=${e}>Terms of Service</a>` : null
                }
                privacyTemplate() {
                    let {
                        privacyPolicyUrl: e
                    } = B.OptionsController.state;
                    return e ? W.dy `<a href=${e}>Privacy Policy</a>` : null
                }
            };
            tn.styles = [ti], tn = function(e, t, r, i) {
                var n, o = arguments.length,
                    a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                return o > 3 && a && Object.defineProperty(t, r, a), a
            }([(0, z.customElement)("w3m-legal-footer")], tn);
            var to = W.iv `
  :host {
    display: block;
    padding: 0 var(--wui-spacing-xl) var(--wui-spacing-xl);
  }
`,
                ta = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let ts = class extends W.oi {
                constructor() {
                    super(...arguments), this.wallet = void 0
                }
                render() {
                    if (!this.wallet) return this.style.display = "none", null;
                    let {
                        name: e,
                        app_store: t,
                        play_store: r,
                        chrome_store: i,
                        homepage: n
                    } = this.wallet, o = B.j1.isMobile(), a = B.j1.isIos(), s = B.j1.isAndroid(), l = [t, r, n, i].filter(Boolean).length > 1, c = z.UiHelperUtil.getTruncateString({
                        string: e,
                        charsStart: 12,
                        charsEnd: 0,
                        truncate: "end"
                    });
                    return l && !o ? W.dy `
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${()=>B.RouterController.push("Downloads",{wallet:this.wallet})}
        ></wui-cta-button>
      ` : !l && n ? W.dy `
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      ` : t && a ? W.dy `
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      ` : r && s ? W.dy `
        <wui-cta-button
          label=${`Don't have ${c}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      ` : (this.style.display = "none", null)
                }
                onAppStore() {
                    this.wallet ? .app_store && B.j1.openHref(this.wallet.app_store, "_blank")
                }
                onPlayStore() {
                    this.wallet ? .play_store && B.j1.openHref(this.wallet.play_store, "_blank")
                }
                onHomePage() {
                    this.wallet ? .homepage && B.j1.openHref(this.wallet.homepage, "_blank")
                }
            };
            ts.styles = [to], ta([(0, Z.Cb)({
                type: Object
            })], ts.prototype, "wallet", void 0), ts = ta([(0, z.customElement)("w3m-mobile-download-links")], ts);
            var tl = W.iv `
  :host {
    display: block;
    position: absolute;
    opacity: 0;
    pointer-events: none;
    top: 11px;
    left: 50%;
    width: max-content;
  }
`,
                tc = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let tu = {
                    success: {
                        backgroundColor: "success-100",
                        iconColor: "success-100",
                        icon: "checkmark"
                    },
                    error: {
                        backgroundColor: "error-100",
                        iconColor: "error-100",
                        icon: "close"
                    }
                },
                td = class extends W.oi {
                    constructor() {
                        super(), this.unsubscribe = [], this.timeout = void 0, this.open = B.SnackController.state.open, this.unsubscribe.push(B.SnackController.subscribeKey("open", e => {
                            this.open = e, this.onOpen()
                        }))
                    }
                    disconnectedCallback() {
                        clearTimeout(this.timeout), this.unsubscribe.forEach(e => e())
                    }
                    render() {
                        let {
                            message: e,
                            variant: t
                        } = B.SnackController.state, r = tu[t];
                        return W.dy `
      <wui-snackbar
        message=${e}
        backgroundColor=${r.backgroundColor}
        iconColor=${r.iconColor}
        icon=${r.icon}
      ></wui-snackbar>
    `
                    }
                    onOpen() {
                        clearTimeout(this.timeout), this.open ? (this.animate([{
                            opacity: 0,
                            transform: "translateX(-50%) scale(0.85)"
                        }, {
                            opacity: 1,
                            transform: "translateX(-50%) scale(1)"
                        }], {
                            duration: 150,
                            fill: "forwards",
                            easing: "ease"
                        }), this.timeout = setTimeout(() => B.SnackController.hide(), 2500)) : this.animate([{
                            opacity: 1,
                            transform: "translateX(-50%) scale(1)"
                        }, {
                            opacity: 0,
                            transform: "translateX(-50%) scale(0.85)"
                        }], {
                            duration: 150,
                            fill: "forwards",
                            easing: "ease"
                        })
                    }
                };
            td.styles = tl, tc([(0, Z.SB)()], td.prototype, "open", void 0), td = tc([(0, z.customElement)("w3m-snackbar")], td);
            var th = W.iv `
  wui-separator {
    margin: var(--wui-spacing-s) calc(var(--wui-spacing-s) * -1);
    width: calc(100% + var(--wui-spacing-s) * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
    padding-bottom: var(--wui-spacing-m);
  }

  wui-icon-link {
    position: absolute;
    right: var(--wui-spacing-xs);
    top: 11px;
  }

  wui-loading-spinner {
    position: absolute;
    right: var(--wui-spacing-1xs);
    top: var(--wui-spacing-m);
  }
`,
                tp = function(e, t, r, i) {
                    var n, o = arguments.length,
                        a = o < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                    if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, i);
                    else
                        for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (a = (o < 3 ? n(a) : o > 3 ? n(t, r, a) : n(t, r)) || a);
                    return o > 3 && a && Object.defineProperty(t, r, a), a
                };
            let tf = class extends W.oi {
                constructor() {
                    super(), this.unsubscribe = [], this.formRef = (0, eB.V)(), this.connectors = B.ConnectorController.state.connectors, this.email = "", this.loading = !1, this.unsubscribe.push(B.ConnectorController.subscribeKey("connectors", e => this.connectors = e))
                }
                disconnectedCallback() {
                    this.unsubscribe.forEach(e => e())
                }
                firstUpdated() {
                    this.formRef.value ? .addEventListener("keydown", e => {
                        "Enter" === e.key && this.onSubmitEmail(e)
                    })
                }
                render() {
                    let e = this.connectors.length > 1,
                        t = this.connectors.find(e => "EMAIL" === e.type),
                        r = !this.loading && this.email.length > 3;
                    return t ? W.dy `
      <form ${(0,eB.i)(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
        >
        </wui-email-input>

        ${r?W.dy`
              <wui-icon-link
                size="sm"
                icon="chevronRight"
                iconcolor="accent-100"
                @click=${this.onSubmitEmail.bind(this)}
              >
              </wui-icon-link>
            `:null}
        ${this.loading?W.dy`<wui-loading-spinner size="lg" color="accent-100"></wui-loading-spinner>`:null}

        <input type="submit" hidden />
      </form>
      ${e?W.dy`<wui-separator text="or"></wui-separator>`:null}
    ` : null
                }
                onEmailInputChange(e) {
                    this.email = e.detail
                }
                async onSubmitEmail(e) {
                    try {
                        if (this.loading) return;
                        this.loading = !0, e.preventDefault();
                        let t = B.ConnectorController.getEmailConnector();
                        if (!t) throw Error("w3m-email-login-widget: Email connector not found");
                        let {
                            action: r
                        } = await t.provider.connectEmail({
                            email: this.email
                        });
                        "VERIFY_OTP" === r ? B.RouterController.push("EmailVerifyOtp", {
                            email: this.email
                        }) : "VERIFY_DEVICE" === r && B.RouterController.push("EmailVerifyDevice", {
                            email: this.email
                        })
                    } catch (e) {
                        B.SnackController.showError(e ? .message)
                    } finally {
                        this.loading = !1
                    }
                }
            };
            tf.styles = th, tp([(0, Z.SB)()], tf.prototype, "connectors", void 0), tp([(0, Z.SB)()], tf.prototype, "email", void 0), tp([(0, Z.SB)()], tf.prototype, "loading", void 0), tf = tp([(0, z.customElement)("w3m-email-login-widget")], tf);
            let tg = !1;
            class tw {
                constructor(e) {
                    this.initPromise = void 0, this.setIsConnected = e => {
                        B.AccountController.setIsConnected(e)
                    }, this.setCaipAddress = e => {
                        B.AccountController.setCaipAddress(e)
                    }, this.setBalance = (e, t) => {
                        B.AccountController.setBalance(e, t)
                    }, this.setProfileName = e => {
                        B.AccountController.setProfileName(e)
                    }, this.setProfileImage = e => {
                        B.AccountController.setProfileImage(e)
                    }, this.resetAccount = () => {
                        B.AccountController.resetAccount()
                    }, this.setCaipNetwork = e => {
                        B.NetworkController.setCaipNetwork(e)
                    }, this.getCaipNetwork = () => B.NetworkController.state.caipNetwork, this.setRequestedCaipNetworks = e => {
                        B.NetworkController.setRequestedCaipNetworks(e)
                    }, this.getApprovedCaipNetworksData = () => B.NetworkController.getApprovedCaipNetworksData(), this.resetNetwork = () => {
                        B.NetworkController.resetNetwork()
                    }, this.setConnectors = e => {
                        B.ConnectorController.setConnectors(e)
                    }, this.addConnector = e => {
                        B.ConnectorController.addConnector(e)
                    }, this.getConnectors = () => B.ConnectorController.getConnectors(), this.resetWcConnection = () => {
                        B.ConnectionController.resetWcConnection()
                    }, this.fetchIdentity = e => B.Lr.fetchIdentity(e), this.setAddressExplorerUrl = e => {
                        B.AccountController.setAddressExplorerUrl(e)
                    }, this.setSIWENonce = e => {
                        B.yD.setNonce(e)
                    }, this.setSIWESession = e => {
                        B.yD.setSession(e)
                    }, this.setSIWEStatus = e => {
                        B.yD.setStatus(e)
                    }, this.setSIWEMessage = e => {
                        B.yD.setMessage(e)
                    }, this.initControllers(e), this.initOrContinue()
                }
                async open(e) {
                    await this.initOrContinue(), B.IN.open(e)
                }
                async close() {
                    await this.initOrContinue(), B.IN.close()
                }
                setLoading(e) {
                    B.IN.setLoading(e)
                }
                getThemeMode() {
                    return B.ThemeController.state.themeMode
                }
                getThemeVariables() {
                    return B.ThemeController.state.themeVariables
                }
                setThemeMode(e) {
                    B.ThemeController.setThemeMode(e), (0, z.setColorTheme)(B.ThemeController.state.themeMode)
                }
                setThemeVariables(e) {
                    B.ThemeController.setThemeVariables(e), (0, z.setThemeVariables)(B.ThemeController.state.themeVariables)
                }
                subscribeTheme(e) {
                    return B.ThemeController.subscribe(e)
                }
                getState() {
                    return { ...B.Ie.state
                    }
                }
                subscribeState(e) {
                    return B.Ie.subscribe(e)
                }
                getEvent() {
                    return { ...B.Xs.state
                    }
                }
                subscribeEvents(e) {
                    return B.Xs.subscribe(e)
                }
                subscribeSIWEState(e) {
                    return B.yD.subscribe(e)
                }
                initControllers(e) {
                    if (B.NetworkController.setClient(e.networkControllerClient), B.NetworkController.setDefaultCaipNetwork(e.defaultChain), B.OptionsController.setProjectId(e.projectId), B.OptionsController.setIncludeWalletIds(e.includeWalletIds), B.OptionsController.setExcludeWalletIds(e.excludeWalletIds), B.OptionsController.setFeaturedWalletIds(e.featuredWalletIds), B.OptionsController.setTokens(e.tokens), B.OptionsController.setTermsConditionsUrl(e.termsConditionsUrl), B.OptionsController.setPrivacyPolicyUrl(e.privacyPolicyUrl), B.OptionsController.setCustomWallets(e.customWallets), B.OptionsController.setEnableAnalytics(e.enableAnalytics), B.OptionsController.setSdkVersion(e._sdkVersion), B.ConnectionController.setClient(e.connectionControllerClient), e.siweControllerClient) {
                        let t = e.siweControllerClient;
                        B.yD.setSIWEClient(t)
                    }
                    e.metadata && B.OptionsController.setMetadata(e.metadata), e.themeMode && B.ThemeController.setThemeMode(e.themeMode), e.themeVariables && B.ThemeController.setThemeVariables(e.themeVariables)
                }
                async initOrContinue() {
                    return !this.initPromise && !tg && B.j1.isClient() && (tg = !0, this.initPromise = new Promise(async e => {
                        await Promise.all([Promise.resolve().then(r.bind(r, 70808)), Promise.resolve().then(r.bind(r, 9448))]);
                        let t = document.createElement("w3m-modal");
                        document.body.insertAdjacentElement("beforeend", t), e()
                    })), this.initPromise
                }
            }
            let tm = {
                    WALLET_CONNECT_CONNECTOR_ID: "walletConnect",
                    INJECTED_CONNECTOR_ID: "injected",
                    COINBASE_CONNECTOR_ID: "coinbaseWallet",
                    SAFE_CONNECTOR_ID: "safe",
                    LEDGER_CONNECTOR_ID: "ledger",
                    EIP6963_CONNECTOR_ID: "eip6963",
                    EMAIL_CONNECTOR_ID: "w3mEmail",
                    EIP155: "eip155",
                    ADD_CHAIN_METHOD: "wallet_addEthereumChain",
                    EIP6963_ANNOUNCE_EVENT: "eip6963:announceProvider",
                    EIP6963_REQUEST_EVENT: "eip6963:requestProvider",
                    VERSION: "3.5.0"
                },
                tv = {
                    ConnectorExplorerIds: {
                        [tm.COINBASE_CONNECTOR_ID]: "fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa",
                        [tm.SAFE_CONNECTOR_ID]: "225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f",
                        [tm.LEDGER_CONNECTOR_ID]: "19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927"
                    },
                    EIP155NetworkImageIds: {
                        1: "692ed6ba-e569-459a-556a-776476829e00",
                        42161: "600a9a04-c1b9-42ca-6785-9b4b6ff85200",
                        43114: "30c46e53-e989-45fb-4549-be3bd4eb3b00",
                        56: "93564157-2e8e-4ce7-81df-b264dbee9b00",
                        250: "06b26297-fe0c-4733-5d6b-ffa5498aac00",
                        10: "ab9c186a-c52f-464b-2906-ca59d760a400",
                        137: "41d04d42-da3b-4453-8506-668cc0727900",
                        100: "02b53f6a-e3d4-479e-1cb4-21178987d100",
                        9001: "f926ff41-260d-4028-635e-91913fc28e00",
                        324: "b310f07f-4ef7-49f3-7073-2a0a39685800",
                        314: "5a73b3dd-af74-424e-cae0-0de859ee9400",
                        4689: "34e68754-e536-40da-c153-6ef2e7188a00",
                        1088: "3897a66d-40b9-4833-162f-a2c90531c900",
                        1284: "161038da-44ae-4ec7-1208-0ea569454b00",
                        1285: "f1d73bb6-5450-4e18-38f7-fb6484264a00",
                        7777777: "845c60df-d429-4991-e687-91ae45791600",
                        42220: "ab781bbc-ccc6-418d-d32d-789b15da1f00",
                        8453: "7289c336-3981-4081-c5f4-efc26ac64a00",
                        1313161554: "3ff73439-a619-4894-9262-4470c773a100"
                    },
                    ConnectorImageIds: {
                        [tm.COINBASE_CONNECTOR_ID]: "0c2840c3-5b04-4c44-9661-fbd4b49e1800",
                        [tm.SAFE_CONNECTOR_ID]: "461db637-8616-43ce-035a-d89b8a1d5800",
                        [tm.LEDGER_CONNECTOR_ID]: "54a1aa77-d202-4f8d-0fb2-5d2bb6db0300",
                        [tm.WALLET_CONNECT_CONNECTOR_ID]: "ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400",
                        [tm.INJECTED_CONNECTOR_ID]: "07ba87ed-43aa-4adf-4540-9e6a2b9cae00"
                    },
                    ConnectorNamesMap: {
                        [tm.INJECTED_CONNECTOR_ID]: "Browser Wallet",
                        [tm.WALLET_CONNECT_CONNECTOR_ID]: "WalletConnect",
                        [tm.COINBASE_CONNECTOR_ID]: "Coinbase",
                        [tm.LEDGER_CONNECTOR_ID]: "Ledger",
                        [tm.SAFE_CONNECTOR_ID]: "Safe"
                    },
                    ConnectorTypesMap: {
                        [tm.INJECTED_CONNECTOR_ID]: "INJECTED",
                        [tm.WALLET_CONNECT_CONNECTOR_ID]: "WALLET_CONNECT",
                        [tm.EIP6963_CONNECTOR_ID]: "ANNOUNCED",
                        [tm.EMAIL_CONNECTOR_ID]: "EMAIL"
                    },
                    WalletConnectRpcChainIds: [1, 5, 11155111, 10, 420, 42161, 421613, 137, 80001, 42220, 1313161554, 1313161555, 56, 97, 43114, 43113, 100, 8453, 84531, 7777777, 999, 324, 280]
                },
                tb = {
                    caipNetworkIdToNumber: e => e ? Number(e.split(":")[1]) : void 0,
                    getCaipTokens(e) {
                        if (!e) return;
                        let t = {};
                        return Object.entries(e).forEach(([e, r]) => {
                            t[`${tm.EIP155}:${e}`] = r
                        }), t
                    }
                };
            class ty extends tw {
                constructor(e) {
                    let {
                        wagmiConfig: t,
                        siweConfig: r,
                        chains: i,
                        defaultChain: n,
                        tokens: o,
                        _sdkVersion: a,
                        ...s
                    } = e;
                    if (!t) throw Error("web3modal:constructor - wagmiConfig is undefined");
                    if (!s.projectId) throw Error("web3modal:constructor - projectId is undefined");
                    super({
                        networkControllerClient: {
                            switchCaipNetwork: async e => {
                                let t = tb.caipNetworkIdToNumber(e ? .id);
                                t && await (0, j.If)({
                                    chainId: t
                                })
                            },
                            async getApprovedCaipNetworksData() {
                                let e = localStorage.getItem("wagmi.wallet");
                                if (e ? .includes(tm.EMAIL_CONNECTOR_ID)) return {
                                    supportsAllNetworks: !1,
                                    approvedCaipNetworkIds: tv.WalletConnectRpcChainIds.map(e => `${tm.EIP155}:${e}`)
                                };
                                if (e ? .includes(tm.WALLET_CONNECT_CONNECTOR_ID)) {
                                    let e = t.connectors.find(e => e.id === tm.WALLET_CONNECT_CONNECTOR_ID);
                                    if (!e) throw Error("networkControllerClient:getApprovedCaipNetworks - connector is undefined");
                                    let r = await e.getProvider(),
                                        i = r.signer ? .session ? .namespaces,
                                        n = i ? .[tm.EIP155] ? .methods,
                                        o = i ? .[tm.EIP155] ? .chains;
                                    return {
                                        supportsAllNetworks: n ? .includes(tm.ADD_CHAIN_METHOD),
                                        approvedCaipNetworkIds: o
                                    }
                                }
                                return {
                                    approvedCaipNetworkIds: void 0,
                                    supportsAllNetworks: !0
                                }
                            }
                        },
                        connectionControllerClient: {
                            connectWalletConnect: async e => {
                                let r = t.connectors.find(e => e.id === tm.WALLET_CONNECT_CONNECTOR_ID);
                                if (!r) throw Error("connectionControllerClient:getWalletConnectUri - connector is undefined");
                                r.on("message", t => {
                                    "display_uri" === t.type && (e(t.data), r.removeAllListeners())
                                });
                                let i = tb.caipNetworkIdToNumber(this.getCaipNetwork() ? .id);
                                await (0, j.$j)({
                                    connector: r,
                                    chainId: i
                                })
                            },
                            connectExternal: async ({
                                id: e,
                                provider: r,
                                info: i
                            }) => {
                                let n = t.connectors.find(t => t.id === e);
                                if (!n) throw Error("connectionControllerClient:connectExternal - connector is undefined");
                                r && i && n.id === tm.EIP6963_CONNECTOR_ID && n.setEip6963Wallet ? .({
                                    provider: r,
                                    info: i
                                });
                                let o = tb.caipNetworkIdToNumber(this.getCaipNetwork() ? .id);
                                await (0, j.$j)({
                                    connector: n,
                                    chainId: o
                                })
                            },
                            checkInstalled: e => {
                                let t = this.getConnectors().filter(e => "ANNOUNCED" === e.type),
                                    r = this.getConnectors().find(e => "INJECTED" === e.type);
                                return e ? !!(t.length && e.some(e => t.some(t => t.info ? .rdns === e))) || !!r && !!window ? .ethereum && e.some(e => !!window.ethereum ? .[String(e)]) : !!window.ethereum
                            },
                            disconnect: async () => {
                                await (0, j.zP)(), r ? .options ? .signOutOnDisconnect && await r.signOut()
                            },
                            signMessage: async e => (0, j.l)({
                                message: e
                            })
                        },
                        siweControllerClient: r,
                        defaultChain: function(e) {
                            if (e) return {
                                id: `${tm.EIP155}:${e.id}`,
                                name: e.name,
                                imageId: tv.EIP155NetworkImageIds[e.id]
                            }
                        }(n),
                        tokens: tb.getCaipTokens(o),
                        _sdkVersion: a ? ? `html-wagmi-${tm.VERSION}`,
                        ...s
                    }), this.hasSyncedConnectedAccount = !1, this.options = void 0, this.options = e, this.syncRequestedNetworks(i), this.syncConnectors(t), this.syncEmailConnector(t), this.listenEIP6963Connector(t), this.listenEmailConnector(t), (0, j.uH)(() => this.syncAccount()), (0, j.QC)(() => this.syncNetwork())
                }
                getState() {
                    let e = super.getState();
                    return { ...e,
                        selectedNetworkId: tb.caipNetworkIdToNumber(e.selectedNetworkId)
                    }
                }
                subscribeState(e) {
                    return super.subscribeState(t => e({ ...t,
                        selectedNetworkId: tb.caipNetworkIdToNumber(t.selectedNetworkId)
                    }))
                }
                syncRequestedNetworks(e) {
                    let t = e ? .map(e => ({
                        id: `${tm.EIP155}:${e.id}`,
                        name: e.name,
                        imageId: tv.EIP155NetworkImageIds[e.id],
                        imageUrl: this.options ? .chainImages ? .[e.id]
                    }));
                    this.setRequestedCaipNetworks(t ? ? [])
                }
                async syncAccount() {
                    let {
                        address: e,
                        isConnected: t
                    } = (0, j.D0)(), {
                        chain: r
                    } = (0, j.Hy)();
                    if (this.resetAccount(), t && e && r) {
                        let i = `${tm.EIP155}:${r.id}:${e}`;
                        this.setIsConnected(t), this.setCaipAddress(i), await Promise.all([this.syncProfile(e), this.syncBalance(e, r), this.getApprovedCaipNetworksData()]), this.hasSyncedConnectedAccount = !0
                    } else !t && this.hasSyncedConnectedAccount && (this.resetWcConnection(), this.resetNetwork())
                }
                async syncNetwork() {
                    let {
                        address: e,
                        isConnected: t
                    } = (0, j.D0)(), {
                        chain: r
                    } = (0, j.Hy)();
                    if (r) {
                        let i = String(r.id),
                            n = `${tm.EIP155}:${i}`;
                        if (this.setCaipNetwork({
                                id: n,
                                name: r.name,
                                imageId: tv.EIP155NetworkImageIds[r.id],
                                imageUrl: this.options ? .chainImages ? .[r.id]
                            }), t && e) {
                            let t = `${tm.EIP155}:${r.id}:${e}`;
                            if (this.setCaipAddress(t), r.blockExplorers ? .default ? .url) {
                                let t = `${r.blockExplorers.default.url}/address/${e}`;
                                this.setAddressExplorerUrl(t)
                            } else this.setAddressExplorerUrl(void 0);
                            this.hasSyncedConnectedAccount && await this.syncBalance(e, r)
                        }
                    }
                }
                async syncProfile(e) {
                    try {
                        let {
                            name: t,
                            avatar: r
                        } = await this.fetchIdentity({
                            caipChainId: `${tm.EIP155}:${L.R.id}`,
                            address: e
                        });
                        this.setProfileName(t), this.setProfileImage(r)
                    } catch {
                        let t = await (0, j.Lk)({
                            address: e,
                            chainId: L.R.id
                        });
                        if (t) {
                            this.setProfileName(t);
                            let e = await (0, j.w6)({
                                name: t,
                                chainId: L.R.id
                            });
                            e && this.setProfileImage(e)
                        }
                    }
                }
                async syncBalance(e, t) {
                    let r = await (0, j.EG)({
                        address: e,
                        chainId: t.id,
                        token: this.options ? .tokens ? .[t.id] ? .address
                    });
                    this.setBalance(r.formatted, r.symbol)
                }
                syncConnectors(e) {
                    let t = [];
                    e.connectors.forEach(({
                        id: e,
                        name: r
                    }) => {
                        [tm.EIP6963_CONNECTOR_ID, tm.EMAIL_CONNECTOR_ID].includes(e) || t.push({
                            id: e,
                            explorerId: tv.ConnectorExplorerIds[e],
                            imageId: tv.ConnectorImageIds[e],
                            imageUrl: this.options ? .connectorImages ? .[e],
                            name: tv.ConnectorNamesMap[e] ? ? r,
                            type: tv.ConnectorTypesMap[e] ? ? "EXTERNAL"
                        })
                    }), this.setConnectors(t)
                }
                async syncEmailConnector(e) {
                    let t = e.connectors.find(({
                        id: e
                    }) => "w3mEmail" === e);
                    if (t) {
                        let e = await t.getProvider();
                        this.addConnector({
                            id: tm.EMAIL_CONNECTOR_ID,
                            type: "EMAIL",
                            name: "Email",
                            provider: e
                        })
                    }
                }
                eip6963EventHandler(e, t) {
                    if (t.detail) {
                        let {
                            info: r,
                            provider: i
                        } = t.detail;
                        this.getConnectors().find(e => e.name === r.name) || (this.addConnector({
                            id: tm.EIP6963_CONNECTOR_ID,
                            type: "ANNOUNCED",
                            imageUrl: r.icon ? ? this.options ? .connectorImages ? .[tm.EIP6963_CONNECTOR_ID],
                            name: r.name,
                            provider: i,
                            info: r
                        }), e.isAuthorized({
                            info: r,
                            provider: i
                        }))
                    }
                }
                listenEIP6963Connector(e) {
                    let t = e.connectors.find(e => e.id === tm.EIP6963_CONNECTOR_ID);
                    if ("undefined" != typeof window && t) {
                        let e = this.eip6963EventHandler.bind(this, t);
                        window.addEventListener(tm.EIP6963_ANNOUNCE_EVENT, e), window.dispatchEvent(new Event(tm.EIP6963_REQUEST_EVENT))
                    }
                }
                async listenEmailConnector(e) {
                    let t = e.connectors.find(e => e.id === tm.EMAIL_CONNECTOR_ID);
                    if ("undefined" != typeof window && t) {
                        super.setLoading(!0);
                        let e = await t.getProvider();
                        e.onRpcRequest(() => {
                            super.open({
                                view: "ApproveTransaction"
                            })
                        }), e.onRpcResponse(() => {
                            super.close()
                        }), e.onIsConnected(() => {
                            super.setLoading(!1)
                        })
                    }
                }
            }
            var tC = r(76373),
                tx = r(39803),
                t_ = function(e, t, r, i, n) {
                    if ("m" === i) throw TypeError("Private method is not writable");
                    if ("a" === i && !n) throw TypeError("Private accessor was defined without a setter");
                    if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw TypeError("Cannot write private member to an object whose class did not declare it");
                    return "a" === i ? n.call(e, r) : n ? n.value = r : t.set(e, r), r
                },
                tE = function(e, t, r, i) {
                    if ("a" === r && !i) throw TypeError("Private accessor was defined without a getter");
                    if ("function" == typeof t ? e !== t || !i : !t.has(e)) throw TypeError("Cannot read private member from an object whose class did not declare it");
                    return "m" === r ? i : "a" === r ? i.call(e) : i ? i.value : t.get(e)
                };
            let tS = "connectedRdns";
            class tk extends tC._ {
                constructor(e) {
                    super({
                        chains: e.chains,
                        options: {
                            shimDisconnect: !0
                        }
                    }), this.id = "eip6963", this.name = "EIP6963", u.set(this, void 0), d.set(this, void 0), this.onAccountsChanged = e => {
                        0 === e.length ? (this.storage ? .removeItem(tS), this.emit("disconnect")) : e[0] && this.emit("change", {
                            account: (0, tx.K)(e[0])
                        })
                    }, t_(this, u, this.options.getProvider(), "f")
                }
                async connect(e) {
                    let t = await super.connect(e);
                    return tE(this, d, "f") && this.storage ? .setItem(tS, tE(this, d, "f").info.rdns), t
                }
                async disconnect() {
                    await super.disconnect(), this.storage ? .removeItem(tS), t_(this, d, void 0, "f")
                }
                async isAuthorized(e) {
                    let t = this.storage ? .getItem(tS);
                    if (t) {
                        if (!e || t !== e.info.rdns) return !0;
                        t_(this, d, e, "f")
                    }
                    return super.isAuthorized()
                }
                async getProvider() {
                    return Promise.resolve(tE(this, d, "f") ? .provider ? ? tE(this, u, "f"))
                }
                setEip6963Wallet(e) {
                    t_(this, d, e, "f")
                }
            }
            u = new WeakMap, d = new WeakMap;
            var tA = r(67133);
            "undefined" == typeof window || (window.Buffer || (window.Buffer = tA.Buffer), window.global || (window.global = window), window.process || (window.process = {}), window.process ? .env || (window.process = {
                env: {}
            }));
            var tD = r(56926),
                t$ = r(38026),
                tR = r(40106),
                tO = r(46750),
                tI = r(48519),
                tT = r(21334),
                tN = r(39730),
                tP = r(21693),
                tU = class extends tO.wR {
                    constructor({
                        chains: e,
                        options: t
                    }) {
                        super({
                            chains: e,
                            options: {
                                reloadOnDisconnect: !1,
                                ...t
                            }
                        }), this.id = "coinbaseWallet", this.name = "Coinbase Wallet", this.ready = !0, (0, tO.Ko)(this, h, void 0), (0, tO.Ko)(this, p, void 0), this.onAccountsChanged = e => {
                            0 === e.length ? this.emit("disconnect") : this.emit("change", {
                                account: (0, tx.K)(e[0])
                            })
                        }, this.onChainChanged = e => {
                            let t = (0, tR.J)(e),
                                r = this.isChainUnsupported(t);
                            this.emit("change", {
                                chain: {
                                    id: t,
                                    unsupported: r
                                }
                            })
                        }, this.onDisconnect = () => {
                            this.emit("disconnect")
                        }
                    }
                    async connect({
                        chainId: e
                    } = {}) {
                        try {
                            let t = await this.getProvider();
                            t.on("accountsChanged", this.onAccountsChanged), t.on("chainChanged", this.onChainChanged), t.on("disconnect", this.onDisconnect), this.emit("message", {
                                type: "connecting"
                            });
                            let r = await t.enable(),
                                i = (0, tx.K)(r[0]),
                                n = await this.getChainId(),
                                o = this.isChainUnsupported(n);
                            return e && n !== e && (n = (await this.switchChain(e)).id, o = this.isChainUnsupported(n)), {
                                account: i,
                                chain: {
                                    id: n,
                                    unsupported: o
                                }
                            }
                        } catch (e) {
                            if (/(user closed modal|accounts received is empty)/i.test(e.message)) throw new tI.ab(e);
                            throw e
                        }
                    }
                    async disconnect() {
                        if (!(0, tO.ac)(this, p)) return;
                        let e = await this.getProvider();
                        e.removeListener("accountsChanged", this.onAccountsChanged), e.removeListener("chainChanged", this.onChainChanged), e.removeListener("disconnect", this.onDisconnect), e.disconnect(), e.close()
                    }
                    async getAccount() {
                        let e = await this.getProvider(),
                            t = await e.request({
                                method: "eth_accounts"
                            });
                        return (0, tx.K)(t[0])
                    }
                    async getChainId() {
                        let e = await this.getProvider();
                        return (0, tR.J)(e.chainId)
                    }
                    async getProvider() {
                        if (!(0, tO.ac)(this, p)) {
                            let e = (await Promise.all([r.e(4775), r.e(5439)]).then(r.t.bind(r, 64775, 19))).default;
                            "function" != typeof e && "function" == typeof e.default && (e = e.default), (0, tO.qx)(this, h, new e(this.options));
                            let t = tO.ac(this, h).walletExtension ? .getChainId(),
                                i = this.chains.find(e => this.options.chainId ? e.id === this.options.chainId : e.id === t) || this.chains[0],
                                n = this.options.chainId || i ? .id,
                                o = this.options.jsonRpcUrl || i ? .rpcUrls.default.http[0];
                            (0, tO.qx)(this, p, (0, tO.ac)(this, h).makeWeb3Provider(o, n))
                        }
                        return (0, tO.ac)(this, p)
                    }
                    async getWalletClient({
                        chainId: e
                    } = {}) {
                        let [t, r] = await Promise.all([this.getProvider(), this.getAccount()]), i = this.chains.find(t => t.id === e);
                        if (!t) throw Error("provider is required.");
                        return (0, tT.K)({
                            account: r,
                            chain: i,
                            transport: (0, tN.P)(t)
                        })
                    }
                    async isAuthorized() {
                        try {
                            return !!await this.getAccount()
                        } catch {
                            return !1
                        }
                    }
                    async switchChain(e) {
                        let t = await this.getProvider(),
                            r = (0, tP.eC)(e);
                        try {
                            return await t.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: r
                                }]
                            }), this.chains.find(t => t.id === e) ? ? {
                                id: e,
                                name: `Chain ${r}`,
                                network: `${r}`,
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
                        } catch (n) {
                            let i = this.chains.find(t => t.id === e);
                            if (!i) throw new t$.B({
                                chainId: e,
                                connectorId: this.id
                            });
                            if (4902 === n.code) try {
                                return await t.request({
                                    method: "wallet_addEthereumChain",
                                    params: [{
                                        chainId: r,
                                        chainName: i.name,
                                        nativeCurrency: i.nativeCurrency,
                                        rpcUrls: [i.rpcUrls.public ? .http[0] ? ? ""],
                                        blockExplorerUrls: this.getBlockExplorerUrls(i)
                                    }]
                                }), i
                            } catch (e) {
                                throw new tI.ab(e)
                            }
                            throw new tI.x3(n)
                        }
                    }
                    async watchAsset({
                        address: e,
                        decimals: t = 18,
                        image: r,
                        symbol: i
                    }) {
                        return (await this.getProvider()).request({
                            method: "wallet_watchAsset",
                            params: {
                                type: "ERC20",
                                options: {
                                    address: e,
                                    decimals: t,
                                    image: r,
                                    symbol: i
                                }
                            }
                        })
                    }
                };

            function tM(e = [], t = []) {
                return [...new Set([...e, ...t])]
            }
            h = new WeakMap, p = new WeakMap, r(51040), r(20342), r(35077), r(87853), r(38195), r(71188), r(58619), r(849), r(36073), r(36897), r(43869), r(62601), Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable, Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            var tj = Object.defineProperty,
                tL = Object.defineProperties,
                tB = Object.getOwnPropertyDescriptors,
                tz = Object.getOwnPropertySymbols,
                tW = Object.prototype.hasOwnProperty,
                tZ = Object.prototype.propertyIsEnumerable,
                tF = (e, t, r) => t in e ? tj(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                tH = (e, t) => {
                    for (var r in t || (t = {})) tW.call(t, r) && tF(e, r, t[r]);
                    if (tz)
                        for (var r of tz(t)) tZ.call(t, r) && tF(e, r, t[r]);
                    return e
                },
                tV = (e, t) => tL(e, tB(t));

            function tY(e) {
                return e.includes(":")
            }

            function tK(e) {
                var t, r, i;
                let n = {};
                if (!(Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length)) return n;
                for (let [o, a] of Object.entries(e)) {
                    let e = tY(o) ? [o] : a.chains,
                        s = a.methods || [],
                        l = a.events || [],
                        c = tY(o) ? o.split(":")[0] : o;
                    n[c] = tV(tH({}, n[c]), {
                        chains: tM(e, null == (t = n[c]) ? void 0 : t.chains),
                        methods: tM(s, null == (r = n[c]) ? void 0 : r.methods),
                        events: tM(l, null == (i = n[c]) ? void 0 : i.events)
                    })
                }
                return n
            }
            var tq = "eip155",
                tG = "requestedChains",
                tX = "wallet_addEthereumChain",
                tJ = class extends tO.wR {
                    constructor(e) {
                        super({ ...e,
                            options: {
                                isNewChainsStale: !0,
                                ...e.options
                            }
                        }), (0, tO.Ko)(this, w), (0, tO.Ko)(this, v), (0, tO.Ko)(this, y), (0, tO.Ko)(this, x), (0, tO.Ko)(this, E), (0, tO.Ko)(this, k), (0, tO.Ko)(this, D), (0, tO.Ko)(this, R), (0, tO.Ko)(this, I), this.id = "walletConnect", this.name = "WalletConnect", this.ready = !0, (0, tO.Ko)(this, f, void 0), (0, tO.Ko)(this, g, void 0), this.onAccountsChanged = e => {
                            0 === e.length ? this.emit("disconnect") : this.emit("change", {
                                account: (0, tx.K)(e[0])
                            })
                        }, this.onChainChanged = e => {
                            let t = Number(e),
                                r = this.isChainUnsupported(t);
                            this.emit("change", {
                                chain: {
                                    id: t,
                                    unsupported: r
                                }
                            })
                        }, this.onDisconnect = () => {
                            (0, tO.U9)(this, k, A).call(this, []), this.emit("disconnect")
                        }, this.onDisplayUri = e => {
                            this.emit("message", {
                                type: "display_uri",
                                data: e
                            })
                        }, this.onConnect = () => {
                            this.emit("connect", {})
                        }, (0, tO.U9)(this, w, m).call(this)
                    }
                    async connect({
                        chainId: e,
                        pairingTopic: t
                    } = {}) {
                        try {
                            let r = e;
                            if (!r) {
                                let e = this.storage ? .getItem("store"),
                                    t = e ? .state ? .data ? .chain ? .id;
                                r = t && !this.isChainUnsupported(t) ? t : this.chains[0] ? .id
                            }
                            if (!r) throw Error("No chains found on connector.");
                            let i = await this.getProvider();
                            (0, tO.U9)(this, x, _).call(this);
                            let n = (0, tO.U9)(this, y, C).call(this);
                            if (i.session && n && await i.disconnect(), !i.session || n) {
                                let e = this.chains.filter(e => e.id !== r).map(e => e.id);
                                this.emit("message", {
                                    type: "connecting"
                                }), await i.connect({
                                    pairingTopic: t,
                                    optionalChains: [r, ...e]
                                }), (0, tO.U9)(this, k, A).call(this, this.chains.map(({
                                    id: e
                                }) => e))
                            }
                            let o = await i.enable(),
                                a = (0, tx.K)(o[0]),
                                s = await this.getChainId(),
                                l = this.isChainUnsupported(s);
                            return {
                                account: a,
                                chain: {
                                    id: s,
                                    unsupported: l
                                }
                            }
                        } catch (e) {
                            if (/user rejected/i.test(e ? .message)) throw new tI.ab(e);
                            throw e
                        }
                    }
                    async disconnect() {
                        let e = await this.getProvider();
                        try {
                            await e.disconnect()
                        } catch (e) {
                            if (!/No matching key/i.test(e.message)) throw e
                        } finally {
                            (0, tO.U9)(this, E, S).call(this), (0, tO.U9)(this, k, A).call(this, [])
                        }
                    }
                    async getAccount() {
                        let {
                            accounts: e
                        } = await this.getProvider();
                        return (0, tx.K)(e[0])
                    }
                    async getChainId() {
                        let {
                            chainId: e
                        } = await this.getProvider();
                        return e
                    }
                    async getProvider({
                        chainId: e
                    } = {}) {
                        return (0, tO.ac)(this, f) || await (0, tO.U9)(this, w, m).call(this), e && await this.switchChain(e), (0, tO.ac)(this, f)
                    }
                    async getWalletClient({
                        chainId: e
                    } = {}) {
                        let [t, r] = await Promise.all([this.getProvider({
                            chainId: e
                        }), this.getAccount()]), i = this.chains.find(t => t.id === e);
                        if (!t) throw Error("provider is required.");
                        return (0, tT.K)({
                            account: r,
                            chain: i,
                            transport: (0, tN.P)(t)
                        })
                    }
                    async isAuthorized() {
                        try {
                            let [e, t] = await Promise.all([this.getAccount(), this.getProvider()]), r = (0, tO.U9)(this, y, C).call(this);
                            if (!e) return !1;
                            if (r && t.session) {
                                try {
                                    await t.disconnect()
                                } catch {}
                                return !1
                            }
                            return !0
                        } catch {
                            return !1
                        }
                    }
                    async switchChain(e) {
                        let t = this.chains.find(t => t.id === e);
                        if (!t) throw new tI.x3(Error("chain not found on connector."));
                        try {
                            let r = await this.getProvider(),
                                i = (0, tO.U9)(this, R, O).call(this),
                                n = (0, tO.U9)(this, I, T).call(this);
                            if (!i.includes(e) && n.includes(tX)) {
                                await r.request({
                                    method: tX,
                                    params: [{
                                        chainId: (0, tP.eC)(t.id),
                                        blockExplorerUrls: [t.blockExplorers ? .default ? .url],
                                        chainName: t.name,
                                        nativeCurrency: t.nativeCurrency,
                                        rpcUrls: [...t.rpcUrls.default.http]
                                    }]
                                });
                                let i = (0, tO.U9)(this, D, $).call(this);
                                i.push(e), (0, tO.U9)(this, k, A).call(this, i)
                            }
                            return await r.request({
                                method: "wallet_switchEthereumChain",
                                params: [{
                                    chainId: (0, tP.eC)(e)
                                }]
                            }), t
                        } catch (t) {
                            let e = "string" == typeof t ? t : t ? .message;
                            if (/user rejected request/i.test(e)) throw new tI.ab(t);
                            throw new tI.x3(t)
                        }
                    }
                };
            f = new WeakMap, g = new WeakMap, w = new WeakSet, m = async function() {
                return (0, tO.ac)(this, g) || "undefined" == typeof window || (0, tO.qx)(this, g, (0, tO.U9)(this, v, b).call(this)), (0, tO.ac)(this, g)
            }, v = new WeakSet, b = async function() {
                let {
                    EthereumProvider: e
                } = await r.e(9620).then(r.bind(r, 39620)), t = this.chains.map(({
                    id: e
                }) => e);
                if (t.length) {
                    let {
                        projectId: r,
                        showQrModal: i = !0,
                        qrModalOptions: n,
                        metadata: o,
                        relayUrl: a
                    } = this.options;
                    (0, tO.qx)(this, f, await e.init({
                        showQrModal: i,
                        qrModalOptions: n,
                        projectId: r,
                        optionalChains: t,
                        rpcMap: Object.fromEntries(this.chains.map(e => [e.id, e.rpcUrls.default.http[0]])),
                        metadata: o,
                        relayUrl: a
                    }))
                }
            }, y = new WeakSet, C = function() {
                if ((0, tO.U9)(this, I, T).call(this).includes(tX) || !this.options.isNewChainsStale) return !1;
                let e = (0, tO.U9)(this, D, $).call(this),
                    t = this.chains.map(({
                        id: e
                    }) => e),
                    r = (0, tO.U9)(this, R, O).call(this);
                return (!r.length || !!r.some(e => t.includes(e))) && !t.every(t => e.includes(t))
            }, x = new WeakSet, _ = function() {
                (0, tO.ac)(this, f) && ((0, tO.U9)(this, E, S).call(this), (0, tO.ac)(this, f).on("accountsChanged", this.onAccountsChanged), (0, tO.ac)(this, f).on("chainChanged", this.onChainChanged), (0, tO.ac)(this, f).on("disconnect", this.onDisconnect), (0, tO.ac)(this, f).on("session_delete", this.onDisconnect), (0, tO.ac)(this, f).on("display_uri", this.onDisplayUri), (0, tO.ac)(this, f).on("connect", this.onConnect))
            }, E = new WeakSet, S = function() {
                (0, tO.ac)(this, f) && ((0, tO.ac)(this, f).removeListener("accountsChanged", this.onAccountsChanged), (0, tO.ac)(this, f).removeListener("chainChanged", this.onChainChanged), (0, tO.ac)(this, f).removeListener("disconnect", this.onDisconnect), (0, tO.ac)(this, f).removeListener("session_delete", this.onDisconnect), (0, tO.ac)(this, f).removeListener("display_uri", this.onDisplayUri), (0, tO.ac)(this, f).removeListener("connect", this.onConnect))
            }, k = new WeakSet, A = function(e) {
                this.storage ? .setItem(tG, e)
            }, D = new WeakSet, $ = function() {
                return this.storage ? .getItem(tG) ? ? []
            }, R = new WeakSet, O = function() {
                if (!(0, tO.ac)(this, f)) return [];
                let e = tO.ac(this, f).session ? .namespaces;
                if (!e) return [];
                let t = tK(e);
                return t[tq] ? .chains ? .map(e => parseInt(e.split(":")[1] || "")) ? ? []
            }, I = new WeakSet, T = function() {
                if (!(0, tO.ac)(this, f)) return [];
                let e = tO.ac(this, f).session ? .namespaces;
                if (!e) return [];
                let t = tK(e);
                return t[tq] ? .methods ? ? []
            };
            let tQ = {
                SECURE_SITE_SDK: "https://secure.web3modal.com/sdk",
                APP_EVENT_KEY: "@w3m-app/",
                FRAME_EVENT_KEY: "@w3m-frame/",
                RPC_METHOD_KEY: "RPC_",
                STORAGE_KEY: "@w3m-storage/",
                SESSION_TOKEN_KEY: "SESSION_TOKEN_KEY",
                APP_SWITCH_NETWORK: "@w3m-app/SWITCH_NETWORK",
                APP_CONNECT_EMAIL: "@w3m-app/CONNECT_EMAIL",
                APP_CONNECT_DEVICE: "@w3m-app/CONNECT_DEVICE",
                APP_CONNECT_OTP: "@w3m-app/CONNECT_OTP",
                APP_GET_USER: "@w3m-app/GET_USER",
                APP_SIGN_OUT: "@w3m-app/SIGN_OUT",
                APP_IS_CONNECTED: "@w3m-app/IS_CONNECTED",
                APP_GET_CHAIN_ID: "@w3m-app/GET_CHAIN_ID",
                APP_RPC_REQUEST: "@w3m-app/RPC_REQUEST",
                FRAME_SWITCH_NETWORK_ERROR: "@w3m-frame/SWITCH_NETWORK_ERROR",
                FRAME_SWITCH_NETWORK_SUCCESS: "@w3m-frame/SWITCH_NETWORK_SUCCESS",
                FRAME_CONNECT_EMAIL_ERROR: "@w3m-frame/CONNECT_EMAIL_ERROR",
                FRAME_CONNECT_EMAIL_SUCCESS: "@w3m-frame/CONNECT_EMAIL_SUCCESS",
                FRAME_CONNECT_DEVICE_ERROR: "@w3m-frame/CONNECT_DEVICE_ERROR",
                FRAME_CONNECT_DEVICE_SUCCESS: "@w3m-frame/CONNECT_DEVICE_SUCCESS",
                FRAME_CONNECT_OTP_SUCCESS: "@w3m-frame/CONNECT_OTP_SUCCESS",
                FRAME_CONNECT_OTP_ERROR: "@w3m-frame/CONNECT_OTP_ERROR",
                FRAME_GET_USER_SUCCESS: "@w3m-frame/GET_USER_SUCCESS",
                FRAME_GET_USER_ERROR: "@w3m-frame/GET_USER_ERROR",
                FRAME_SIGN_OUT_SUCCESS: "@w3m-frame/SIGN_OUT_SUCCESS",
                FRAME_SIGN_OUT_ERROR: "@w3m-frame/SIGN_OUT_ERROR",
                FRAME_IS_CONNECTED_SUCCESS: "@w3m-frame/IS_CONNECTED_SUCCESS",
                FRAME_IS_CONNECTED_ERROR: "@w3m-frame/IS_CONNECTED_ERROR",
                FRAME_GET_CHAIN_ID_SUCCESS: "@w3m-frame/GET_CHAIN_ID_SUCCESS",
                FRAME_GET_CHAIN_ID_ERROR: "@w3m-frame/GET_CHAIN_ID_ERROR",
                FRAME_RPC_REQUEST_SUCCESS: "@w3m-frame/RPC_REQUEST_SUCCESS",
                FRAME_RPC_REQUEST_ERROR: "@w3m-frame/RPC_REQUEST_ERROR",
                FRAME_SESSION_UPDATE: "@w3m-frame/SESSION_UPDATE"
            };
            (s = N || (N = {})).assertEqual = e => e, s.assertIs = function(e) {}, s.assertNever = function(e) {
                throw Error()
            }, s.arrayToEnum = e => {
                let t = {};
                for (let r of e) t[r] = r;
                return t
            }, s.getValidEnumValues = e => {
                let t = s.objectKeys(e).filter(t => "number" != typeof e[e[t]]),
                    r = {};
                for (let i of t) r[i] = e[i];
                return s.objectValues(r)
            }, s.objectValues = e => s.objectKeys(e).map(function(t) {
                return e[t]
            }), s.objectKeys = "function" == typeof Object.keys ? e => Object.keys(e) : e => {
                let t = [];
                for (let r in e) Object.prototype.hasOwnProperty.call(e, r) && t.push(r);
                return t
            }, s.find = (e, t) => {
                for (let r of e)
                    if (t(r)) return r
            }, s.isInteger = "function" == typeof Number.isInteger ? e => Number.isInteger(e) : e => "number" == typeof e && isFinite(e) && Math.floor(e) === e, s.joinValues = function(e, t = " | ") {
                return e.map(e => "string" == typeof e ? `'${e}'` : e).join(t)
            }, s.jsonStringifyReplacer = (e, t) => "bigint" == typeof t ? t.toString() : t, (P || (P = {})).mergeShapes = (e, t) => ({ ...e,
                ...t
            });
            let t0 = N.arrayToEnum(["string", "nan", "number", "integer", "float", "boolean", "date", "bigint", "symbol", "function", "undefined", "null", "array", "object", "unknown", "promise", "void", "never", "map", "set"]),
                t1 = e => {
                    switch (typeof e) {
                        case "undefined":
                            return t0.undefined;
                        case "string":
                            return t0.string;
                        case "number":
                            return isNaN(e) ? t0.nan : t0.number;
                        case "boolean":
                            return t0.boolean;
                        case "function":
                            return t0.function;
                        case "bigint":
                            return t0.bigint;
                        case "symbol":
                            return t0.symbol;
                        case "object":
                            if (Array.isArray(e)) return t0.array;
                            if (null === e) return t0.null;
                            if (e.then && "function" == typeof e.then && e.catch && "function" == typeof e.catch) return t0.promise;
                            if ("undefined" != typeof Map && e instanceof Map) return t0.map;
                            if ("undefined" != typeof Set && e instanceof Set) return t0.set;
                            if ("undefined" != typeof Date && e instanceof Date) return t0.date;
                            return t0.object;
                        default:
                            return t0.unknown
                    }
                },
                t2 = N.arrayToEnum(["invalid_type", "invalid_literal", "custom", "invalid_union", "invalid_union_discriminator", "invalid_enum_value", "unrecognized_keys", "invalid_arguments", "invalid_return_type", "invalid_date", "invalid_string", "too_small", "too_big", "invalid_intersection_types", "not_multiple_of", "not_finite"]);
            class t3 extends Error {
                constructor(e) {
                    super(), this.issues = [], this.addIssue = e => {
                        this.issues = [...this.issues, e]
                    }, this.addIssues = (e = []) => {
                        this.issues = [...this.issues, ...e]
                    };
                    let t = new.target.prototype;
                    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : this.__proto__ = t, this.name = "ZodError", this.issues = e
                }
                get errors() {
                    return this.issues
                }
                format(e) {
                    let t = e || function(e) {
                            return e.message
                        },
                        r = {
                            _errors: []
                        },
                        i = e => {
                            for (let n of e.issues)
                                if ("invalid_union" === n.code) n.unionErrors.map(i);
                                else if ("invalid_return_type" === n.code) i(n.returnTypeError);
                            else if ("invalid_arguments" === n.code) i(n.argumentsError);
                            else if (0 === n.path.length) r._errors.push(t(n));
                            else {
                                let e = r,
                                    i = 0;
                                for (; i < n.path.length;) {
                                    let r = n.path[i];
                                    i === n.path.length - 1 ? (e[r] = e[r] || {
                                        _errors: []
                                    }, e[r]._errors.push(t(n))) : e[r] = e[r] || {
                                        _errors: []
                                    }, e = e[r], i++
                                }
                            }
                        };
                    return i(this), r
                }
                toString() {
                    return this.message
                }
                get message() {
                    return JSON.stringify(this.issues, N.jsonStringifyReplacer, 2)
                }
                get isEmpty() {
                    return 0 === this.issues.length
                }
                flatten(e = e => e.message) {
                    let t = {},
                        r = [];
                    for (let i of this.issues) i.path.length > 0 ? (t[i.path[0]] = t[i.path[0]] || [], t[i.path[0]].push(e(i))) : r.push(e(i));
                    return {
                        formErrors: r,
                        fieldErrors: t
                    }
                }
                get formErrors() {
                    return this.flatten()
                }
            }
            t3.create = e => new t3(e);
            let t5 = (e, t) => {
                    let r;
                    switch (e.code) {
                        case t2.invalid_type:
                            r = e.received === t0.undefined ? "Required" : `Expected ${e.expected}, received ${e.received}`;
                            break;
                        case t2.invalid_literal:
                            r = `Invalid literal value, expected ${JSON.stringify(e.expected,N.jsonStringifyReplacer)}`;
                            break;
                        case t2.unrecognized_keys:
                            r = `Unrecognized key(s) in object: ${N.joinValues(e.keys,", ")}`;
                            break;
                        case t2.invalid_union:
                            r = "Invalid input";
                            break;
                        case t2.invalid_union_discriminator:
                            r = `Invalid discriminator value. Expected ${N.joinValues(e.options)}`;
                            break;
                        case t2.invalid_enum_value:
                            r = `Invalid enum value. Expected ${N.joinValues(e.options)}, received '${e.received}'`;
                            break;
                        case t2.invalid_arguments:
                            r = "Invalid function arguments";
                            break;
                        case t2.invalid_return_type:
                            r = "Invalid function return type";
                            break;
                        case t2.invalid_date:
                            r = "Invalid date";
                            break;
                        case t2.invalid_string:
                            "object" == typeof e.validation ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, "number" == typeof e.validation.position && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : N.assertNever(e.validation) : r = "regex" !== e.validation ? `Invalid ${e.validation}` : "Invalid";
                            break;
                        case t2.too_small:
                            r = "array" === e.type ? `Array must contain ${e.exact?"exactly":e.inclusive?"at least":"more than"} ${e.minimum} element(s)` : "string" === e.type ? `String must contain ${e.exact?"exactly":e.inclusive?"at least":"over"} ${e.minimum} character(s)` : "number" === e.type ? `Number must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${e.minimum}` : "date" === e.type ? `Date must be ${e.exact?"exactly equal to ":e.inclusive?"greater than or equal to ":"greater than "}${new Date(Number(e.minimum))}` : "Invalid input";
                            break;
                        case t2.too_big:
                            r = "array" === e.type ? `Array must contain ${e.exact?"exactly":e.inclusive?"at most":"less than"} ${e.maximum} element(s)` : "string" === e.type ? `String must contain ${e.exact?"exactly":e.inclusive?"at most":"under"} ${e.maximum} character(s)` : "number" === e.type ? `Number must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}` : "bigint" === e.type ? `BigInt must be ${e.exact?"exactly":e.inclusive?"less than or equal to":"less than"} ${e.maximum}` : "date" === e.type ? `Date must be ${e.exact?"exactly":e.inclusive?"smaller than or equal to":"smaller than"} ${new Date(Number(e.maximum))}` : "Invalid input";
                            break;
                        case t2.custom:
                            r = "Invalid input";
                            break;
                        case t2.invalid_intersection_types:
                            r = "Intersection results could not be merged";
                            break;
                        case t2.not_multiple_of:
                            r = `Number must be a multiple of ${e.multipleOf}`;
                            break;
                        case t2.not_finite:
                            r = "Number must be finite";
                            break;
                        default:
                            r = t.defaultError, N.assertNever(e)
                    }
                    return {
                        message: r
                    }
                },
                t4 = t5;

            function t6() {
                return t4
            }
            let t8 = e => {
                let {
                    data: t,
                    path: r,
                    errorMaps: i,
                    issueData: n
                } = e, o = [...r, ...n.path || []], a = { ...n,
                    path: o
                }, s = "";
                for (let e of i.filter(e => !!e).slice().reverse()) s = e(a, {
                    data: t,
                    defaultError: s
                }).message;
                return { ...n,
                    path: o,
                    message: n.message || s
                }
            };

            function t7(e, t) {
                let r = t8({
                    issueData: t,
                    data: e.data,
                    path: e.path,
                    errorMaps: [e.common.contextualErrorMap, e.schemaErrorMap, t6(), t5].filter(e => !!e)
                });
                e.common.issues.push(r)
            }
            class t9 {
                constructor() {
                    this.value = "valid"
                }
                dirty() {
                    "valid" === this.value && (this.value = "dirty")
                }
                abort() {
                    "aborted" !== this.value && (this.value = "aborted")
                }
                static mergeArray(e, t) {
                    let r = [];
                    for (let i of t) {
                        if ("aborted" === i.status) return re;
                        "dirty" === i.status && e.dirty(), r.push(i.value)
                    }
                    return {
                        status: e.value,
                        value: r
                    }
                }
                static async mergeObjectAsync(e, t) {
                    let r = [];
                    for (let e of t) r.push({
                        key: await e.key,
                        value: await e.value
                    });
                    return t9.mergeObjectSync(e, r)
                }
                static mergeObjectSync(e, t) {
                    let r = {};
                    for (let i of t) {
                        let {
                            key: t,
                            value: n
                        } = i;
                        if ("aborted" === t.status || "aborted" === n.status) return re;
                        "dirty" === t.status && e.dirty(), "dirty" === n.status && e.dirty(), "__proto__" !== t.value && (void 0 !== n.value || i.alwaysSet) && (r[t.value] = n.value)
                    }
                    return {
                        status: e.value,
                        value: r
                    }
                }
            }
            let re = Object.freeze({
                    status: "aborted"
                }),
                rt = e => ({
                    status: "dirty",
                    value: e
                }),
                rr = e => ({
                    status: "valid",
                    value: e
                }),
                ri = e => "aborted" === e.status,
                rn = e => "dirty" === e.status,
                ro = e => "valid" === e.status,
                ra = e => "undefined" != typeof Promise && e instanceof Promise;
            (l = U || (U = {})).errToObj = e => "string" == typeof e ? {
                message: e
            } : e || {}, l.toString = e => "string" == typeof e ? e : null == e ? void 0 : e.message;
            class rs {
                constructor(e, t, r, i) {
                    this._cachedPath = [], this.parent = e, this.data = t, this._path = r, this._key = i
                }
                get path() {
                    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath
                }
            }
            let rl = (e, t) => {
                if (ro(t)) return {
                    success: !0,
                    data: t.value
                };
                if (!e.common.issues.length) throw Error("Validation failed but no issues detected.");
                return {
                    success: !1,
                    get error() {
                        if (this._error) return this._error;
                        let t = new t3(e.common.issues);
                        return this._error = t, this._error
                    }
                }
            };

            function rc(e) {
                if (!e) return {};
                let {
                    errorMap: t,
                    invalid_type_error: r,
                    required_error: i,
                    description: n
                } = e;
                if (t && (r || i)) throw Error('Can\'t use "invalid_type_error" or "required_error" in conjunction with custom error map.');
                return t ? {
                    errorMap: t,
                    description: n
                } : {
                    errorMap: (e, t) => "invalid_type" !== e.code ? {
                        message: t.defaultError
                    } : void 0 === t.data ? {
                        message: null != i ? i : t.defaultError
                    } : {
                        message: null != r ? r : t.defaultError
                    },
                    description: n
                }
            }
            class ru {
                constructor(e) {
                    this.spa = this.safeParseAsync, this._def = e, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this)
                }
                get description() {
                    return this._def.description
                }
                _getType(e) {
                    return t1(e.data)
                }
                _getOrReturnCtx(e, t) {
                    return t || {
                        common: e.parent.common,
                        data: e.data,
                        parsedType: t1(e.data),
                        schemaErrorMap: this._def.errorMap,
                        path: e.path,
                        parent: e.parent
                    }
                }
                _processInputParams(e) {
                    return {
                        status: new t9,
                        ctx: {
                            common: e.parent.common,
                            data: e.data,
                            parsedType: t1(e.data),
                            schemaErrorMap: this._def.errorMap,
                            path: e.path,
                            parent: e.parent
                        }
                    }
                }
                _parseSync(e) {
                    let t = this._parse(e);
                    if (ra(t)) throw Error("Synchronous parse encountered promise.");
                    return t
                }
                _parseAsync(e) {
                    return Promise.resolve(this._parse(e))
                }
                parse(e, t) {
                    let r = this.safeParse(e, t);
                    if (r.success) return r.data;
                    throw r.error
                }
                safeParse(e, t) {
                    var r;
                    let i = {
                            common: {
                                issues: [],
                                async: null !== (r = null == t ? void 0 : t.async) && void 0 !== r && r,
                                contextualErrorMap: null == t ? void 0 : t.errorMap
                            },
                            path: (null == t ? void 0 : t.path) || [],
                            schemaErrorMap: this._def.errorMap,
                            parent: null,
                            data: e,
                            parsedType: t1(e)
                        },
                        n = this._parseSync({
                            data: e,
                            path: i.path,
                            parent: i
                        });
                    return rl(i, n)
                }
                async parseAsync(e, t) {
                    let r = await this.safeParseAsync(e, t);
                    if (r.success) return r.data;
                    throw r.error
                }
                async safeParseAsync(e, t) {
                    let r = {
                            common: {
                                issues: [],
                                contextualErrorMap: null == t ? void 0 : t.errorMap,
                                async: !0
                            },
                            path: (null == t ? void 0 : t.path) || [],
                            schemaErrorMap: this._def.errorMap,
                            parent: null,
                            data: e,
                            parsedType: t1(e)
                        },
                        i = this._parse({
                            data: e,
                            path: r.path,
                            parent: r
                        });
                    return rl(r, await (ra(i) ? i : Promise.resolve(i)))
                }
                refine(e, t) {
                    let r = e => "string" == typeof t || void 0 === t ? {
                        message: t
                    } : "function" == typeof t ? t(e) : t;
                    return this._refinement((t, i) => {
                        let n = e(t),
                            o = () => i.addIssue({
                                code: t2.custom,
                                ...r(t)
                            });
                        return "undefined" != typeof Promise && n instanceof Promise ? n.then(e => !!e || (o(), !1)) : !!n || (o(), !1)
                    })
                }
                refinement(e, t) {
                    return this._refinement((r, i) => !!e(r) || (i.addIssue("function" == typeof t ? t(r, i) : t), !1))
                }
                _refinement(e) {
                    return new rK({
                        schema: this,
                        typeName: M.ZodEffects,
                        effect: {
                            type: "refinement",
                            refinement: e
                        }
                    })
                }
                superRefine(e) {
                    return this._refinement(e)
                }
                optional() {
                    return rq.create(this, this._def)
                }
                nullable() {
                    return rG.create(this, this._def)
                }
                nullish() {
                    return this.nullable().optional()
                }
                array() {
                    return rO.create(this, this._def)
                }
                promise() {
                    return rY.create(this, this._def)
                }
                or(e) {
                    return rT.create([this, e], this._def)
                }
                and(e) {
                    return rU.create(this, e, this._def)
                }
                transform(e) {
                    return new rK({ ...rc(this._def),
                        schema: this,
                        typeName: M.ZodEffects,
                        effect: {
                            type: "transform",
                            transform: e
                        }
                    })
                }
                default (e) {
                    return new rX({ ...rc(this._def),
                        innerType: this,
                        defaultValue: "function" == typeof e ? e : () => e,
                        typeName: M.ZodDefault
                    })
                }
                brand() {
                    return new r1({
                        typeName: M.ZodBranded,
                        type: this,
                        ...rc(this._def)
                    })
                } catch (e) {
                    return new rJ({ ...rc(this._def),
                        innerType: this,
                        catchValue: "function" == typeof e ? e : () => e,
                        typeName: M.ZodCatch
                    })
                }
                describe(e) {
                    return new this.constructor({ ...this._def,
                        description: e
                    })
                }
                pipe(e) {
                    return r2.create(this, e)
                }
                readonly() {
                    return r3.create(this)
                }
                isOptional() {
                    return this.safeParse(void 0).success
                }
                isNullable() {
                    return this.safeParse(null).success
                }
            }
            let rd = /^c[^\s-]{8,}$/i,
                rh = /^[a-z][a-z0-9]*$/,
                rp = /^[0-9A-HJKMNP-TV-Z]{26}$/,
                rf = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
                rg = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i,
                rw = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/,
                rm = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
                rv = e => e.precision ? e.offset ? RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : 0 === e.precision ? e.offset ? RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
            class rb extends ru {
                _parse(e) {
                    let t;
                    if (this._def.coerce && (e.data = String(e.data)), this._getType(e) !== t0.string) {
                        let t = this._getOrReturnCtx(e);
                        return t7(t, {
                            code: t2.invalid_type,
                            expected: t0.string,
                            received: t.parsedType
                        }), re
                    }
                    let r = new t9;
                    for (let a of this._def.checks)
                        if ("min" === a.kind) e.data.length < a.value && (t7(t = this._getOrReturnCtx(e, t), {
                            code: t2.too_small,
                            minimum: a.value,
                            type: "string",
                            inclusive: !0,
                            exact: !1,
                            message: a.message
                        }), r.dirty());
                        else if ("max" === a.kind) e.data.length > a.value && (t7(t = this._getOrReturnCtx(e, t), {
                        code: t2.too_big,
                        maximum: a.value,
                        type: "string",
                        inclusive: !0,
                        exact: !1,
                        message: a.message
                    }), r.dirty());
                    else if ("length" === a.kind) {
                        let i = e.data.length > a.value,
                            n = e.data.length < a.value;
                        (i || n) && (t = this._getOrReturnCtx(e, t), i ? t7(t, {
                            code: t2.too_big,
                            maximum: a.value,
                            type: "string",
                            inclusive: !0,
                            exact: !0,
                            message: a.message
                        }) : n && t7(t, {
                            code: t2.too_small,
                            minimum: a.value,
                            type: "string",
                            inclusive: !0,
                            exact: !0,
                            message: a.message
                        }), r.dirty())
                    } else if ("email" === a.kind) rg.test(e.data) || (t7(t = this._getOrReturnCtx(e, t), {
                        validation: "email",
                        code: t2.invalid_string,
                        message: a.message
                    }), r.dirty());
                    else if ("emoji" === a.kind) i || (i = RegExp("^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$", "u")), i.test(e.data) || (t7(t = this._getOrReturnCtx(e, t), {
                        validation: "emoji",
                        code: t2.invalid_string,
                        message: a.message
                    }), r.dirty());
                    else if ("uuid" === a.kind) rf.test(e.data) || (t7(t = this._getOrReturnCtx(e, t), {
                        validation: "uuid",
                        code: t2.invalid_string,
                        message: a.message
                    }), r.dirty());
                    else if ("cuid" === a.kind) rd.test(e.data) || (t7(t = this._getOrReturnCtx(e, t), {
                        validation: "cuid",
                        code: t2.invalid_string,
                        message: a.message
                    }), r.dirty());
                    else if ("cuid2" === a.kind) rh.test(e.data) || (t7(t = this._getOrReturnCtx(e, t), {
                        validation: "cuid2",
                        code: t2.invalid_string,
                        message: a.message
                    }), r.dirty());
                    else if ("ulid" === a.kind) rp.test(e.data) || (t7(t = this._getOrReturnCtx(e, t), {
                        validation: "ulid",
                        code: t2.invalid_string,
                        message: a.message
                    }), r.dirty());
                    else if ("url" === a.kind) try {
                            new URL(e.data)
                        } catch (i) {
                            t7(t = this._getOrReturnCtx(e, t), {
                                validation: "url",
                                code: t2.invalid_string,
                                message: a.message
                            }), r.dirty()
                        } else if ("regex" === a.kind) a.regex.lastIndex = 0, a.regex.test(e.data) || (t7(t = this._getOrReturnCtx(e, t), {
                            validation: "regex",
                            code: t2.invalid_string,
                            message: a.message
                        }), r.dirty());
                        else if ("trim" === a.kind) e.data = e.data.trim();
                    else if ("includes" === a.kind) e.data.includes(a.value, a.position) || (t7(t = this._getOrReturnCtx(e, t), {
                        code: t2.invalid_string,
                        validation: {
                            includes: a.value,
                            position: a.position
                        },
                        message: a.message
                    }), r.dirty());
                    else if ("toLowerCase" === a.kind) e.data = e.data.toLowerCase();
                    else if ("toUpperCase" === a.kind) e.data = e.data.toUpperCase();
                    else if ("startsWith" === a.kind) e.data.startsWith(a.value) || (t7(t = this._getOrReturnCtx(e, t), {
                        code: t2.invalid_string,
                        validation: {
                            startsWith: a.value
                        },
                        message: a.message
                    }), r.dirty());
                    else if ("endsWith" === a.kind) e.data.endsWith(a.value) || (t7(t = this._getOrReturnCtx(e, t), {
                        code: t2.invalid_string,
                        validation: {
                            endsWith: a.value
                        },
                        message: a.message
                    }), r.dirty());
                    else if ("datetime" === a.kind) rv(a).test(e.data) || (t7(t = this._getOrReturnCtx(e, t), {
                        code: t2.invalid_string,
                        validation: "datetime",
                        message: a.message
                    }), r.dirty());
                    else if ("ip" === a.kind) {
                        var n, o;
                        n = e.data, ("v4" === (o = a.version) || !o) && rw.test(n) || ("v6" === o || !o) && rm.test(n) || (t7(t = this._getOrReturnCtx(e, t), {
                            validation: "ip",
                            code: t2.invalid_string,
                            message: a.message
                        }), r.dirty())
                    } else N.assertNever(a);
                    return {
                        status: r.value,
                        value: e.data
                    }
                }
                _regex(e, t, r) {
                    return this.refinement(t => e.test(t), {
                        validation: t,
                        code: t2.invalid_string,
                        ...U.errToObj(r)
                    })
                }
                _addCheck(e) {
                    return new rb({ ...this._def,
                        checks: [...this._def.checks, e]
                    })
                }
                email(e) {
                    return this._addCheck({
                        kind: "email",
                        ...U.errToObj(e)
                    })
                }
                url(e) {
                    return this._addCheck({
                        kind: "url",
                        ...U.errToObj(e)
                    })
                }
                emoji(e) {
                    return this._addCheck({
                        kind: "emoji",
                        ...U.errToObj(e)
                    })
                }
                uuid(e) {
                    return this._addCheck({
                        kind: "uuid",
                        ...U.errToObj(e)
                    })
                }
                cuid(e) {
                    return this._addCheck({
                        kind: "cuid",
                        ...U.errToObj(e)
                    })
                }
                cuid2(e) {
                    return this._addCheck({
                        kind: "cuid2",
                        ...U.errToObj(e)
                    })
                }
                ulid(e) {
                    return this._addCheck({
                        kind: "ulid",
                        ...U.errToObj(e)
                    })
                }
                ip(e) {
                    return this._addCheck({
                        kind: "ip",
                        ...U.errToObj(e)
                    })
                }
                datetime(e) {
                    var t;
                    return "string" == typeof e ? this._addCheck({
                        kind: "datetime",
                        precision: null,
                        offset: !1,
                        message: e
                    }) : this._addCheck({
                        kind: "datetime",
                        precision: void 0 === (null == e ? void 0 : e.precision) ? null : null == e ? void 0 : e.precision,
                        offset: null !== (t = null == e ? void 0 : e.offset) && void 0 !== t && t,
                        ...U.errToObj(null == e ? void 0 : e.message)
                    })
                }
                regex(e, t) {
                    return this._addCheck({
                        kind: "regex",
                        regex: e,
                        ...U.errToObj(t)
                    })
                }
                includes(e, t) {
                    return this._addCheck({
                        kind: "includes",
                        value: e,
                        position: null == t ? void 0 : t.position,
                        ...U.errToObj(null == t ? void 0 : t.message)
                    })
                }
                startsWith(e, t) {
                    return this._addCheck({
                        kind: "startsWith",
                        value: e,
                        ...U.errToObj(t)
                    })
                }
                endsWith(e, t) {
                    return this._addCheck({
                        kind: "endsWith",
                        value: e,
                        ...U.errToObj(t)
                    })
                }
                min(e, t) {
                    return this._addCheck({
                        kind: "min",
                        value: e,
                        ...U.errToObj(t)
                    })
                }
                max(e, t) {
                    return this._addCheck({
                        kind: "max",
                        value: e,
                        ...U.errToObj(t)
                    })
                }
                length(e, t) {
                    return this._addCheck({
                        kind: "length",
                        value: e,
                        ...U.errToObj(t)
                    })
                }
                nonempty(e) {
                    return this.min(1, U.errToObj(e))
                }
                trim() {
                    return new rb({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: "trim"
                        }]
                    })
                }
                toLowerCase() {
                    return new rb({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: "toLowerCase"
                        }]
                    })
                }
                toUpperCase() {
                    return new rb({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: "toUpperCase"
                        }]
                    })
                }
                get isDatetime() {
                    return !!this._def.checks.find(e => "datetime" === e.kind)
                }
                get isEmail() {
                    return !!this._def.checks.find(e => "email" === e.kind)
                }
                get isURL() {
                    return !!this._def.checks.find(e => "url" === e.kind)
                }
                get isEmoji() {
                    return !!this._def.checks.find(e => "emoji" === e.kind)
                }
                get isUUID() {
                    return !!this._def.checks.find(e => "uuid" === e.kind)
                }
                get isCUID() {
                    return !!this._def.checks.find(e => "cuid" === e.kind)
                }
                get isCUID2() {
                    return !!this._def.checks.find(e => "cuid2" === e.kind)
                }
                get isULID() {
                    return !!this._def.checks.find(e => "ulid" === e.kind)
                }
                get isIP() {
                    return !!this._def.checks.find(e => "ip" === e.kind)
                }
                get minLength() {
                    let e = null;
                    for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                    return e
                }
                get maxLength() {
                    let e = null;
                    for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                    return e
                }
            }
            rb.create = e => {
                var t;
                return new rb({
                    checks: [],
                    typeName: M.ZodString,
                    coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
                    ...rc(e)
                })
            };
            class ry extends ru {
                constructor() {
                    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf
                }
                _parse(e) {
                    let t;
                    if (this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== t0.number) {
                        let t = this._getOrReturnCtx(e);
                        return t7(t, {
                            code: t2.invalid_type,
                            expected: t0.number,
                            received: t.parsedType
                        }), re
                    }
                    let r = new t9;
                    for (let i of this._def.checks) "int" === i.kind ? N.isInteger(e.data) || (t7(t = this._getOrReturnCtx(e, t), {
                        code: t2.invalid_type,
                        expected: "integer",
                        received: "float",
                        message: i.message
                    }), r.dirty()) : "min" === i.kind ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (t7(t = this._getOrReturnCtx(e, t), {
                        code: t2.too_small,
                        minimum: i.value,
                        type: "number",
                        inclusive: i.inclusive,
                        exact: !1,
                        message: i.message
                    }), r.dirty()) : "max" === i.kind ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (t7(t = this._getOrReturnCtx(e, t), {
                        code: t2.too_big,
                        maximum: i.value,
                        type: "number",
                        inclusive: i.inclusive,
                        exact: !1,
                        message: i.message
                    }), r.dirty()) : "multipleOf" === i.kind ? 0 !== function(e, t) {
                        let r = (e.toString().split(".")[1] || "").length,
                            i = (t.toString().split(".")[1] || "").length,
                            n = r > i ? r : i;
                        return parseInt(e.toFixed(n).replace(".", "")) % parseInt(t.toFixed(n).replace(".", "")) / Math.pow(10, n)
                    }(e.data, i.value) && (t7(t = this._getOrReturnCtx(e, t), {
                        code: t2.not_multiple_of,
                        multipleOf: i.value,
                        message: i.message
                    }), r.dirty()) : "finite" === i.kind ? Number.isFinite(e.data) || (t7(t = this._getOrReturnCtx(e, t), {
                        code: t2.not_finite,
                        message: i.message
                    }), r.dirty()) : N.assertNever(i);
                    return {
                        status: r.value,
                        value: e.data
                    }
                }
                gte(e, t) {
                    return this.setLimit("min", e, !0, U.toString(t))
                }
                gt(e, t) {
                    return this.setLimit("min", e, !1, U.toString(t))
                }
                lte(e, t) {
                    return this.setLimit("max", e, !0, U.toString(t))
                }
                lt(e, t) {
                    return this.setLimit("max", e, !1, U.toString(t))
                }
                setLimit(e, t, r, i) {
                    return new ry({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: e,
                            value: t,
                            inclusive: r,
                            message: U.toString(i)
                        }]
                    })
                }
                _addCheck(e) {
                    return new ry({ ...this._def,
                        checks: [...this._def.checks, e]
                    })
                }
                int(e) {
                    return this._addCheck({
                        kind: "int",
                        message: U.toString(e)
                    })
                }
                positive(e) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: !1,
                        message: U.toString(e)
                    })
                }
                negative(e) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: !1,
                        message: U.toString(e)
                    })
                }
                nonpositive(e) {
                    return this._addCheck({
                        kind: "max",
                        value: 0,
                        inclusive: !0,
                        message: U.toString(e)
                    })
                }
                nonnegative(e) {
                    return this._addCheck({
                        kind: "min",
                        value: 0,
                        inclusive: !0,
                        message: U.toString(e)
                    })
                }
                multipleOf(e, t) {
                    return this._addCheck({
                        kind: "multipleOf",
                        value: e,
                        message: U.toString(t)
                    })
                }
                finite(e) {
                    return this._addCheck({
                        kind: "finite",
                        message: U.toString(e)
                    })
                }
                safe(e) {
                    return this._addCheck({
                        kind: "min",
                        inclusive: !0,
                        value: Number.MIN_SAFE_INTEGER,
                        message: U.toString(e)
                    })._addCheck({
                        kind: "max",
                        inclusive: !0,
                        value: Number.MAX_SAFE_INTEGER,
                        message: U.toString(e)
                    })
                }
                get minValue() {
                    let e = null;
                    for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                    return e
                }
                get maxValue() {
                    let e = null;
                    for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                    return e
                }
                get isInt() {
                    return !!this._def.checks.find(e => "int" === e.kind || "multipleOf" === e.kind && N.isInteger(e.value))
                }
                get isFinite() {
                    let e = null,
                        t = null;
                    for (let r of this._def.checks) {
                        if ("finite" === r.kind || "int" === r.kind || "multipleOf" === r.kind) return !0;
                        "min" === r.kind ? (null === t || r.value > t) && (t = r.value) : "max" === r.kind && (null === e || r.value < e) && (e = r.value)
                    }
                    return Number.isFinite(t) && Number.isFinite(e)
                }
            }
            ry.create = e => new ry({
                checks: [],
                typeName: M.ZodNumber,
                coerce: (null == e ? void 0 : e.coerce) || !1,
                ...rc(e)
            });
            class rC extends ru {
                constructor() {
                    super(...arguments), this.min = this.gte, this.max = this.lte
                }
                _parse(e) {
                    let t;
                    if (this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== t0.bigint) {
                        let t = this._getOrReturnCtx(e);
                        return t7(t, {
                            code: t2.invalid_type,
                            expected: t0.bigint,
                            received: t.parsedType
                        }), re
                    }
                    let r = new t9;
                    for (let i of this._def.checks) "min" === i.kind ? (i.inclusive ? e.data < i.value : e.data <= i.value) && (t7(t = this._getOrReturnCtx(e, t), {
                        code: t2.too_small,
                        type: "bigint",
                        minimum: i.value,
                        inclusive: i.inclusive,
                        message: i.message
                    }), r.dirty()) : "max" === i.kind ? (i.inclusive ? e.data > i.value : e.data >= i.value) && (t7(t = this._getOrReturnCtx(e, t), {
                        code: t2.too_big,
                        type: "bigint",
                        maximum: i.value,
                        inclusive: i.inclusive,
                        message: i.message
                    }), r.dirty()) : "multipleOf" === i.kind ? e.data % i.value !== BigInt(0) && (t7(t = this._getOrReturnCtx(e, t), {
                        code: t2.not_multiple_of,
                        multipleOf: i.value,
                        message: i.message
                    }), r.dirty()) : N.assertNever(i);
                    return {
                        status: r.value,
                        value: e.data
                    }
                }
                gte(e, t) {
                    return this.setLimit("min", e, !0, U.toString(t))
                }
                gt(e, t) {
                    return this.setLimit("min", e, !1, U.toString(t))
                }
                lte(e, t) {
                    return this.setLimit("max", e, !0, U.toString(t))
                }
                lt(e, t) {
                    return this.setLimit("max", e, !1, U.toString(t))
                }
                setLimit(e, t, r, i) {
                    return new rC({ ...this._def,
                        checks: [...this._def.checks, {
                            kind: e,
                            value: t,
                            inclusive: r,
                            message: U.toString(i)
                        }]
                    })
                }
                _addCheck(e) {
                    return new rC({ ...this._def,
                        checks: [...this._def.checks, e]
                    })
                }
                positive(e) {
                    return this._addCheck({
                        kind: "min",
                        value: BigInt(0),
                        inclusive: !1,
                        message: U.toString(e)
                    })
                }
                negative(e) {
                    return this._addCheck({
                        kind: "max",
                        value: BigInt(0),
                        inclusive: !1,
                        message: U.toString(e)
                    })
                }
                nonpositive(e) {
                    return this._addCheck({
                        kind: "max",
                        value: BigInt(0),
                        inclusive: !0,
                        message: U.toString(e)
                    })
                }
                nonnegative(e) {
                    return this._addCheck({
                        kind: "min",
                        value: BigInt(0),
                        inclusive: !0,
                        message: U.toString(e)
                    })
                }
                multipleOf(e, t) {
                    return this._addCheck({
                        kind: "multipleOf",
                        value: e,
                        message: U.toString(t)
                    })
                }
                get minValue() {
                    let e = null;
                    for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                    return e
                }
                get maxValue() {
                    let e = null;
                    for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                    return e
                }
            }
            rC.create = e => {
                var t;
                return new rC({
                    checks: [],
                    typeName: M.ZodBigInt,
                    coerce: null !== (t = null == e ? void 0 : e.coerce) && void 0 !== t && t,
                    ...rc(e)
                })
            };
            class rx extends ru {
                _parse(e) {
                    if (this._def.coerce && (e.data = !!e.data), this._getType(e) !== t0.boolean) {
                        let t = this._getOrReturnCtx(e);
                        return t7(t, {
                            code: t2.invalid_type,
                            expected: t0.boolean,
                            received: t.parsedType
                        }), re
                    }
                    return rr(e.data)
                }
            }
            rx.create = e => new rx({
                typeName: M.ZodBoolean,
                coerce: (null == e ? void 0 : e.coerce) || !1,
                ...rc(e)
            });
            class r_ extends ru {
                _parse(e) {
                    let t;
                    if (this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== t0.date) {
                        let t = this._getOrReturnCtx(e);
                        return t7(t, {
                            code: t2.invalid_type,
                            expected: t0.date,
                            received: t.parsedType
                        }), re
                    }
                    if (isNaN(e.data.getTime())) return t7(this._getOrReturnCtx(e), {
                        code: t2.invalid_date
                    }), re;
                    let r = new t9;
                    for (let i of this._def.checks) "min" === i.kind ? e.data.getTime() < i.value && (t7(t = this._getOrReturnCtx(e, t), {
                        code: t2.too_small,
                        message: i.message,
                        inclusive: !0,
                        exact: !1,
                        minimum: i.value,
                        type: "date"
                    }), r.dirty()) : "max" === i.kind ? e.data.getTime() > i.value && (t7(t = this._getOrReturnCtx(e, t), {
                        code: t2.too_big,
                        message: i.message,
                        inclusive: !0,
                        exact: !1,
                        maximum: i.value,
                        type: "date"
                    }), r.dirty()) : N.assertNever(i);
                    return {
                        status: r.value,
                        value: new Date(e.data.getTime())
                    }
                }
                _addCheck(e) {
                    return new r_({ ...this._def,
                        checks: [...this._def.checks, e]
                    })
                }
                min(e, t) {
                    return this._addCheck({
                        kind: "min",
                        value: e.getTime(),
                        message: U.toString(t)
                    })
                }
                max(e, t) {
                    return this._addCheck({
                        kind: "max",
                        value: e.getTime(),
                        message: U.toString(t)
                    })
                }
                get minDate() {
                    let e = null;
                    for (let t of this._def.checks) "min" === t.kind && (null === e || t.value > e) && (e = t.value);
                    return null != e ? new Date(e) : null
                }
                get maxDate() {
                    let e = null;
                    for (let t of this._def.checks) "max" === t.kind && (null === e || t.value < e) && (e = t.value);
                    return null != e ? new Date(e) : null
                }
            }
            r_.create = e => new r_({
                checks: [],
                coerce: (null == e ? void 0 : e.coerce) || !1,
                typeName: M.ZodDate,
                ...rc(e)
            });
            class rE extends ru {
                _parse(e) {
                    if (this._getType(e) !== t0.symbol) {
                        let t = this._getOrReturnCtx(e);
                        return t7(t, {
                            code: t2.invalid_type,
                            expected: t0.symbol,
                            received: t.parsedType
                        }), re
                    }
                    return rr(e.data)
                }
            }
            rE.create = e => new rE({
                typeName: M.ZodSymbol,
                ...rc(e)
            });
            class rS extends ru {
                _parse(e) {
                    if (this._getType(e) !== t0.undefined) {
                        let t = this._getOrReturnCtx(e);
                        return t7(t, {
                            code: t2.invalid_type,
                            expected: t0.undefined,
                            received: t.parsedType
                        }), re
                    }
                    return rr(e.data)
                }
            }
            rS.create = e => new rS({
                typeName: M.ZodUndefined,
                ...rc(e)
            });
            class rk extends ru {
                _parse(e) {
                    if (this._getType(e) !== t0.null) {
                        let t = this._getOrReturnCtx(e);
                        return t7(t, {
                            code: t2.invalid_type,
                            expected: t0.null,
                            received: t.parsedType
                        }), re
                    }
                    return rr(e.data)
                }
            }
            rk.create = e => new rk({
                typeName: M.ZodNull,
                ...rc(e)
            });
            class rA extends ru {
                constructor() {
                    super(...arguments), this._any = !0
                }
                _parse(e) {
                    return rr(e.data)
                }
            }
            rA.create = e => new rA({
                typeName: M.ZodAny,
                ...rc(e)
            });
            class rD extends ru {
                constructor() {
                    super(...arguments), this._unknown = !0
                }
                _parse(e) {
                    return rr(e.data)
                }
            }
            rD.create = e => new rD({
                typeName: M.ZodUnknown,
                ...rc(e)
            });
            class r$ extends ru {
                _parse(e) {
                    let t = this._getOrReturnCtx(e);
                    return t7(t, {
                        code: t2.invalid_type,
                        expected: t0.never,
                        received: t.parsedType
                    }), re
                }
            }
            r$.create = e => new r$({
                typeName: M.ZodNever,
                ...rc(e)
            });
            class rR extends ru {
                _parse(e) {
                    if (this._getType(e) !== t0.undefined) {
                        let t = this._getOrReturnCtx(e);
                        return t7(t, {
                            code: t2.invalid_type,
                            expected: t0.void,
                            received: t.parsedType
                        }), re
                    }
                    return rr(e.data)
                }
            }
            rR.create = e => new rR({
                typeName: M.ZodVoid,
                ...rc(e)
            });
            class rO extends ru {
                _parse(e) {
                    let {
                        ctx: t,
                        status: r
                    } = this._processInputParams(e), i = this._def;
                    if (t.parsedType !== t0.array) return t7(t, {
                        code: t2.invalid_type,
                        expected: t0.array,
                        received: t.parsedType
                    }), re;
                    if (null !== i.exactLength) {
                        let e = t.data.length > i.exactLength.value,
                            n = t.data.length < i.exactLength.value;
                        (e || n) && (t7(t, {
                            code: e ? t2.too_big : t2.too_small,
                            minimum: n ? i.exactLength.value : void 0,
                            maximum: e ? i.exactLength.value : void 0,
                            type: "array",
                            inclusive: !0,
                            exact: !0,
                            message: i.exactLength.message
                        }), r.dirty())
                    }
                    if (null !== i.minLength && t.data.length < i.minLength.value && (t7(t, {
                            code: t2.too_small,
                            minimum: i.minLength.value,
                            type: "array",
                            inclusive: !0,
                            exact: !1,
                            message: i.minLength.message
                        }), r.dirty()), null !== i.maxLength && t.data.length > i.maxLength.value && (t7(t, {
                            code: t2.too_big,
                            maximum: i.maxLength.value,
                            type: "array",
                            inclusive: !0,
                            exact: !1,
                            message: i.maxLength.message
                        }), r.dirty()), t.common.async) return Promise.all([...t.data].map((e, r) => i.type._parseAsync(new rs(t, e, t.path, r)))).then(e => t9.mergeArray(r, e));
                    let n = [...t.data].map((e, r) => i.type._parseSync(new rs(t, e, t.path, r)));
                    return t9.mergeArray(r, n)
                }
                get element() {
                    return this._def.type
                }
                min(e, t) {
                    return new rO({ ...this._def,
                        minLength: {
                            value: e,
                            message: U.toString(t)
                        }
                    })
                }
                max(e, t) {
                    return new rO({ ...this._def,
                        maxLength: {
                            value: e,
                            message: U.toString(t)
                        }
                    })
                }
                length(e, t) {
                    return new rO({ ...this._def,
                        exactLength: {
                            value: e,
                            message: U.toString(t)
                        }
                    })
                }
                nonempty(e) {
                    return this.min(1, e)
                }
            }
            rO.create = (e, t) => new rO({
                type: e,
                minLength: null,
                maxLength: null,
                exactLength: null,
                typeName: M.ZodArray,
                ...rc(t)
            });
            class rI extends ru {
                constructor() {
                    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend
                }
                _getCached() {
                    if (null !== this._cached) return this._cached;
                    let e = this._def.shape(),
                        t = N.objectKeys(e);
                    return this._cached = {
                        shape: e,
                        keys: t
                    }
                }
                _parse(e) {
                    if (this._getType(e) !== t0.object) {
                        let t = this._getOrReturnCtx(e);
                        return t7(t, {
                            code: t2.invalid_type,
                            expected: t0.object,
                            received: t.parsedType
                        }), re
                    }
                    let {
                        status: t,
                        ctx: r
                    } = this._processInputParams(e), {
                        shape: i,
                        keys: n
                    } = this._getCached(), o = [];
                    if (!(this._def.catchall instanceof r$ && "strip" === this._def.unknownKeys))
                        for (let e in r.data) n.includes(e) || o.push(e);
                    let a = [];
                    for (let e of n) {
                        let t = i[e],
                            n = r.data[e];
                        a.push({
                            key: {
                                status: "valid",
                                value: e
                            },
                            value: t._parse(new rs(r, n, r.path, e)),
                            alwaysSet: e in r.data
                        })
                    }
                    if (this._def.catchall instanceof r$) {
                        let e = this._def.unknownKeys;
                        if ("passthrough" === e)
                            for (let e of o) a.push({
                                key: {
                                    status: "valid",
                                    value: e
                                },
                                value: {
                                    status: "valid",
                                    value: r.data[e]
                                }
                            });
                        else if ("strict" === e) o.length > 0 && (t7(r, {
                            code: t2.unrecognized_keys,
                            keys: o
                        }), t.dirty());
                        else if ("strip" === e);
                        else throw Error("Internal ZodObject error: invalid unknownKeys value.")
                    } else {
                        let e = this._def.catchall;
                        for (let t of o) {
                            let i = r.data[t];
                            a.push({
                                key: {
                                    status: "valid",
                                    value: t
                                },
                                value: e._parse(new rs(r, i, r.path, t)),
                                alwaysSet: t in r.data
                            })
                        }
                    }
                    return r.common.async ? Promise.resolve().then(async () => {
                        let e = [];
                        for (let t of a) {
                            let r = await t.key;
                            e.push({
                                key: r,
                                value: await t.value,
                                alwaysSet: t.alwaysSet
                            })
                        }
                        return e
                    }).then(e => t9.mergeObjectSync(t, e)) : t9.mergeObjectSync(t, a)
                }
                get shape() {
                    return this._def.shape()
                }
                strict(e) {
                    return U.errToObj, new rI({ ...this._def,
                        unknownKeys: "strict",
                        ...void 0 !== e ? {
                            errorMap: (t, r) => {
                                var i, n, o, a;
                                let s = null !== (o = null === (n = (i = this._def).errorMap) || void 0 === n ? void 0 : n.call(i, t, r).message) && void 0 !== o ? o : r.defaultError;
                                return "unrecognized_keys" === t.code ? {
                                    message: null !== (a = U.errToObj(e).message) && void 0 !== a ? a : s
                                } : {
                                    message: s
                                }
                            }
                        } : {}
                    })
                }
                strip() {
                    return new rI({ ...this._def,
                        unknownKeys: "strip"
                    })
                }
                passthrough() {
                    return new rI({ ...this._def,
                        unknownKeys: "passthrough"
                    })
                }
                extend(e) {
                    return new rI({ ...this._def,
                        shape: () => ({ ...this._def.shape(),
                            ...e
                        })
                    })
                }
                merge(e) {
                    return new rI({
                        unknownKeys: e._def.unknownKeys,
                        catchall: e._def.catchall,
                        shape: () => ({ ...this._def.shape(),
                            ...e._def.shape()
                        }),
                        typeName: M.ZodObject
                    })
                }
                setKey(e, t) {
                    return this.augment({
                        [e]: t
                    })
                }
                catchall(e) {
                    return new rI({ ...this._def,
                        catchall: e
                    })
                }
                pick(e) {
                    let t = {};
                    return N.objectKeys(e).forEach(r => {
                        e[r] && this.shape[r] && (t[r] = this.shape[r])
                    }), new rI({ ...this._def,
                        shape: () => t
                    })
                }
                omit(e) {
                    let t = {};
                    return N.objectKeys(this.shape).forEach(r => {
                        e[r] || (t[r] = this.shape[r])
                    }), new rI({ ...this._def,
                        shape: () => t
                    })
                }
                deepPartial() {
                    return function e(t) {
                        if (t instanceof rI) {
                            let r = {};
                            for (let i in t.shape) {
                                let n = t.shape[i];
                                r[i] = rq.create(e(n))
                            }
                            return new rI({ ...t._def,
                                shape: () => r
                            })
                        }
                        return t instanceof rO ? new rO({ ...t._def,
                            type: e(t.element)
                        }) : t instanceof rq ? rq.create(e(t.unwrap())) : t instanceof rG ? rG.create(e(t.unwrap())) : t instanceof rM ? rM.create(t.items.map(t => e(t))) : t
                    }(this)
                }
                partial(e) {
                    let t = {};
                    return N.objectKeys(this.shape).forEach(r => {
                        let i = this.shape[r];
                        e && !e[r] ? t[r] = i : t[r] = i.optional()
                    }), new rI({ ...this._def,
                        shape: () => t
                    })
                }
                required(e) {
                    let t = {};
                    return N.objectKeys(this.shape).forEach(r => {
                        if (e && !e[r]) t[r] = this.shape[r];
                        else {
                            let e = this.shape[r];
                            for (; e instanceof rq;) e = e._def.innerType;
                            t[r] = e
                        }
                    }), new rI({ ...this._def,
                        shape: () => t
                    })
                }
                keyof() {
                    return rF(N.objectKeys(this.shape))
                }
            }
            rI.create = (e, t) => new rI({
                shape: () => e,
                unknownKeys: "strip",
                catchall: r$.create(),
                typeName: M.ZodObject,
                ...rc(t)
            }), rI.strictCreate = (e, t) => new rI({
                shape: () => e,
                unknownKeys: "strict",
                catchall: r$.create(),
                typeName: M.ZodObject,
                ...rc(t)
            }), rI.lazycreate = (e, t) => new rI({
                shape: e,
                unknownKeys: "strip",
                catchall: r$.create(),
                typeName: M.ZodObject,
                ...rc(t)
            });
            class rT extends ru {
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e), r = this._def.options;
                    if (t.common.async) return Promise.all(r.map(async e => {
                        let r = { ...t,
                            common: { ...t.common,
                                issues: []
                            },
                            parent: null
                        };
                        return {
                            result: await e._parseAsync({
                                data: t.data,
                                path: t.path,
                                parent: r
                            }),
                            ctx: r
                        }
                    })).then(function(e) {
                        for (let t of e)
                            if ("valid" === t.result.status) return t.result;
                        for (let r of e)
                            if ("dirty" === r.result.status) return t.common.issues.push(...r.ctx.common.issues), r.result;
                        let r = e.map(e => new t3(e.ctx.common.issues));
                        return t7(t, {
                            code: t2.invalid_union,
                            unionErrors: r
                        }), re
                    }); {
                        let e;
                        let i = [];
                        for (let n of r) {
                            let r = { ...t,
                                    common: { ...t.common,
                                        issues: []
                                    },
                                    parent: null
                                },
                                o = n._parseSync({
                                    data: t.data,
                                    path: t.path,
                                    parent: r
                                });
                            if ("valid" === o.status) return o;
                            "dirty" !== o.status || e || (e = {
                                result: o,
                                ctx: r
                            }), r.common.issues.length && i.push(r.common.issues)
                        }
                        if (e) return t.common.issues.push(...e.ctx.common.issues), e.result;
                        let n = i.map(e => new t3(e));
                        return t7(t, {
                            code: t2.invalid_union,
                            unionErrors: n
                        }), re
                    }
                }
                get options() {
                    return this._def.options
                }
            }
            rT.create = (e, t) => new rT({
                options: e,
                typeName: M.ZodUnion,
                ...rc(t)
            });
            let rN = e => {
                if (e instanceof rW) return rN(e.schema);
                if (e instanceof rK) return rN(e.innerType());
                if (e instanceof rZ) return [e.value];
                if (e instanceof rH) return e.options;
                if (e instanceof rV) return Object.keys(e.enum);
                if (e instanceof rX) return rN(e._def.innerType);
                if (e instanceof rS) return [void 0];
                else if (e instanceof rk) return [null];
                else return null
            };
            class rP extends ru {
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e);
                    if (t.parsedType !== t0.object) return t7(t, {
                        code: t2.invalid_type,
                        expected: t0.object,
                        received: t.parsedType
                    }), re;
                    let r = this.discriminator,
                        i = t.data[r],
                        n = this.optionsMap.get(i);
                    return n ? t.common.async ? n._parseAsync({
                        data: t.data,
                        path: t.path,
                        parent: t
                    }) : n._parseSync({
                        data: t.data,
                        path: t.path,
                        parent: t
                    }) : (t7(t, {
                        code: t2.invalid_union_discriminator,
                        options: Array.from(this.optionsMap.keys()),
                        path: [r]
                    }), re)
                }
                get discriminator() {
                    return this._def.discriminator
                }
                get options() {
                    return this._def.options
                }
                get optionsMap() {
                    return this._def.optionsMap
                }
                static create(e, t, r) {
                    let i = new Map;
                    for (let r of t) {
                        let t = rN(r.shape[e]);
                        if (!t) throw Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
                        for (let n of t) {
                            if (i.has(n)) throw Error(`Discriminator property ${String(e)} has duplicate value ${String(n)}`);
                            i.set(n, r)
                        }
                    }
                    return new rP({
                        typeName: M.ZodDiscriminatedUnion,
                        discriminator: e,
                        options: t,
                        optionsMap: i,
                        ...rc(r)
                    })
                }
            }
            class rU extends ru {
                _parse(e) {
                    let {
                        status: t,
                        ctx: r
                    } = this._processInputParams(e), i = (e, i) => {
                        if (ri(e) || ri(i)) return re;
                        let n = function e(t, r) {
                            let i = t1(t),
                                n = t1(r);
                            if (t === r) return {
                                valid: !0,
                                data: t
                            };
                            if (i === t0.object && n === t0.object) {
                                let i = N.objectKeys(r),
                                    n = N.objectKeys(t).filter(e => -1 !== i.indexOf(e)),
                                    o = { ...t,
                                        ...r
                                    };
                                for (let i of n) {
                                    let n = e(t[i], r[i]);
                                    if (!n.valid) return {
                                        valid: !1
                                    };
                                    o[i] = n.data
                                }
                                return {
                                    valid: !0,
                                    data: o
                                }
                            }
                            if (i === t0.array && n === t0.array) {
                                if (t.length !== r.length) return {
                                    valid: !1
                                };
                                let i = [];
                                for (let n = 0; n < t.length; n++) {
                                    let o = e(t[n], r[n]);
                                    if (!o.valid) return {
                                        valid: !1
                                    };
                                    i.push(o.data)
                                }
                                return {
                                    valid: !0,
                                    data: i
                                }
                            }
                            return i === t0.date && n === t0.date && +t == +r ? {
                                valid: !0,
                                data: t
                            } : {
                                valid: !1
                            }
                        }(e.value, i.value);
                        return n.valid ? ((rn(e) || rn(i)) && t.dirty(), {
                            status: t.value,
                            value: n.data
                        }) : (t7(r, {
                            code: t2.invalid_intersection_types
                        }), re)
                    };
                    return r.common.async ? Promise.all([this._def.left._parseAsync({
                        data: r.data,
                        path: r.path,
                        parent: r
                    }), this._def.right._parseAsync({
                        data: r.data,
                        path: r.path,
                        parent: r
                    })]).then(([e, t]) => i(e, t)) : i(this._def.left._parseSync({
                        data: r.data,
                        path: r.path,
                        parent: r
                    }), this._def.right._parseSync({
                        data: r.data,
                        path: r.path,
                        parent: r
                    }))
                }
            }
            rU.create = (e, t, r) => new rU({
                left: e,
                right: t,
                typeName: M.ZodIntersection,
                ...rc(r)
            });
            class rM extends ru {
                _parse(e) {
                    let {
                        status: t,
                        ctx: r
                    } = this._processInputParams(e);
                    if (r.parsedType !== t0.array) return t7(r, {
                        code: t2.invalid_type,
                        expected: t0.array,
                        received: r.parsedType
                    }), re;
                    if (r.data.length < this._def.items.length) return t7(r, {
                        code: t2.too_small,
                        minimum: this._def.items.length,
                        inclusive: !0,
                        exact: !1,
                        type: "array"
                    }), re;
                    !this._def.rest && r.data.length > this._def.items.length && (t7(r, {
                        code: t2.too_big,
                        maximum: this._def.items.length,
                        inclusive: !0,
                        exact: !1,
                        type: "array"
                    }), t.dirty());
                    let i = [...r.data].map((e, t) => {
                        let i = this._def.items[t] || this._def.rest;
                        return i ? i._parse(new rs(r, e, r.path, t)) : null
                    }).filter(e => !!e);
                    return r.common.async ? Promise.all(i).then(e => t9.mergeArray(t, e)) : t9.mergeArray(t, i)
                }
                get items() {
                    return this._def.items
                }
                rest(e) {
                    return new rM({ ...this._def,
                        rest: e
                    })
                }
            }
            rM.create = (e, t) => {
                if (!Array.isArray(e)) throw Error("You must pass an array of schemas to z.tuple([ ... ])");
                return new rM({
                    items: e,
                    typeName: M.ZodTuple,
                    rest: null,
                    ...rc(t)
                })
            };
            class rj extends ru {
                get keySchema() {
                    return this._def.keyType
                }
                get valueSchema() {
                    return this._def.valueType
                }
                _parse(e) {
                    let {
                        status: t,
                        ctx: r
                    } = this._processInputParams(e);
                    if (r.parsedType !== t0.object) return t7(r, {
                        code: t2.invalid_type,
                        expected: t0.object,
                        received: r.parsedType
                    }), re;
                    let i = [],
                        n = this._def.keyType,
                        o = this._def.valueType;
                    for (let e in r.data) i.push({
                        key: n._parse(new rs(r, e, r.path, e)),
                        value: o._parse(new rs(r, r.data[e], r.path, e))
                    });
                    return r.common.async ? t9.mergeObjectAsync(t, i) : t9.mergeObjectSync(t, i)
                }
                get element() {
                    return this._def.valueType
                }
                static create(e, t, r) {
                    return new rj(t instanceof ru ? {
                        keyType: e,
                        valueType: t,
                        typeName: M.ZodRecord,
                        ...rc(r)
                    } : {
                        keyType: rb.create(),
                        valueType: e,
                        typeName: M.ZodRecord,
                        ...rc(t)
                    })
                }
            }
            class rL extends ru {
                get keySchema() {
                    return this._def.keyType
                }
                get valueSchema() {
                    return this._def.valueType
                }
                _parse(e) {
                    let {
                        status: t,
                        ctx: r
                    } = this._processInputParams(e);
                    if (r.parsedType !== t0.map) return t7(r, {
                        code: t2.invalid_type,
                        expected: t0.map,
                        received: r.parsedType
                    }), re;
                    let i = this._def.keyType,
                        n = this._def.valueType,
                        o = [...r.data.entries()].map(([e, t], o) => ({
                            key: i._parse(new rs(r, e, r.path, [o, "key"])),
                            value: n._parse(new rs(r, t, r.path, [o, "value"]))
                        }));
                    if (r.common.async) {
                        let e = new Map;
                        return Promise.resolve().then(async () => {
                            for (let r of o) {
                                let i = await r.key,
                                    n = await r.value;
                                if ("aborted" === i.status || "aborted" === n.status) return re;
                                ("dirty" === i.status || "dirty" === n.status) && t.dirty(), e.set(i.value, n.value)
                            }
                            return {
                                status: t.value,
                                value: e
                            }
                        })
                    } {
                        let e = new Map;
                        for (let r of o) {
                            let i = r.key,
                                n = r.value;
                            if ("aborted" === i.status || "aborted" === n.status) return re;
                            ("dirty" === i.status || "dirty" === n.status) && t.dirty(), e.set(i.value, n.value)
                        }
                        return {
                            status: t.value,
                            value: e
                        }
                    }
                }
            }
            rL.create = (e, t, r) => new rL({
                valueType: t,
                keyType: e,
                typeName: M.ZodMap,
                ...rc(r)
            });
            class rB extends ru {
                _parse(e) {
                    let {
                        status: t,
                        ctx: r
                    } = this._processInputParams(e);
                    if (r.parsedType !== t0.set) return t7(r, {
                        code: t2.invalid_type,
                        expected: t0.set,
                        received: r.parsedType
                    }), re;
                    let i = this._def;
                    null !== i.minSize && r.data.size < i.minSize.value && (t7(r, {
                        code: t2.too_small,
                        minimum: i.minSize.value,
                        type: "set",
                        inclusive: !0,
                        exact: !1,
                        message: i.minSize.message
                    }), t.dirty()), null !== i.maxSize && r.data.size > i.maxSize.value && (t7(r, {
                        code: t2.too_big,
                        maximum: i.maxSize.value,
                        type: "set",
                        inclusive: !0,
                        exact: !1,
                        message: i.maxSize.message
                    }), t.dirty());
                    let n = this._def.valueType;

                    function o(e) {
                        let r = new Set;
                        for (let i of e) {
                            if ("aborted" === i.status) return re;
                            "dirty" === i.status && t.dirty(), r.add(i.value)
                        }
                        return {
                            status: t.value,
                            value: r
                        }
                    }
                    let a = [...r.data.values()].map((e, t) => n._parse(new rs(r, e, r.path, t)));
                    return r.common.async ? Promise.all(a).then(e => o(e)) : o(a)
                }
                min(e, t) {
                    return new rB({ ...this._def,
                        minSize: {
                            value: e,
                            message: U.toString(t)
                        }
                    })
                }
                max(e, t) {
                    return new rB({ ...this._def,
                        maxSize: {
                            value: e,
                            message: U.toString(t)
                        }
                    })
                }
                size(e, t) {
                    return this.min(e, t).max(e, t)
                }
                nonempty(e) {
                    return this.min(1, e)
                }
            }
            rB.create = (e, t) => new rB({
                valueType: e,
                minSize: null,
                maxSize: null,
                typeName: M.ZodSet,
                ...rc(t)
            });
            class rz extends ru {
                constructor() {
                    super(...arguments), this.validate = this.implement
                }
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e);
                    if (t.parsedType !== t0.function) return t7(t, {
                        code: t2.invalid_type,
                        expected: t0.function,
                        received: t.parsedType
                    }), re;

                    function r(e, r) {
                        return t8({
                            data: e,
                            path: t.path,
                            errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, t6(), t5].filter(e => !!e),
                            issueData: {
                                code: t2.invalid_arguments,
                                argumentsError: r
                            }
                        })
                    }

                    function i(e, r) {
                        return t8({
                            data: e,
                            path: t.path,
                            errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, t6(), t5].filter(e => !!e),
                            issueData: {
                                code: t2.invalid_return_type,
                                returnTypeError: r
                            }
                        })
                    }
                    let n = {
                            errorMap: t.common.contextualErrorMap
                        },
                        o = t.data;
                    if (this._def.returns instanceof rY) {
                        let e = this;
                        return rr(async function(...t) {
                            let a = new t3([]),
                                s = await e._def.args.parseAsync(t, n).catch(e => {
                                    throw a.addIssue(r(t, e)), a
                                }),
                                l = await Reflect.apply(o, this, s);
                            return await e._def.returns._def.type.parseAsync(l, n).catch(e => {
                                throw a.addIssue(i(l, e)), a
                            })
                        })
                    } {
                        let e = this;
                        return rr(function(...t) {
                            let a = e._def.args.safeParse(t, n);
                            if (!a.success) throw new t3([r(t, a.error)]);
                            let s = Reflect.apply(o, this, a.data),
                                l = e._def.returns.safeParse(s, n);
                            if (!l.success) throw new t3([i(s, l.error)]);
                            return l.data
                        })
                    }
                }
                parameters() {
                    return this._def.args
                }
                returnType() {
                    return this._def.returns
                }
                args(...e) {
                    return new rz({ ...this._def,
                        args: rM.create(e).rest(rD.create())
                    })
                }
                returns(e) {
                    return new rz({ ...this._def,
                        returns: e
                    })
                }
                implement(e) {
                    return this.parse(e)
                }
                strictImplement(e) {
                    return this.parse(e)
                }
                static create(e, t, r) {
                    return new rz({
                        args: e || rM.create([]).rest(rD.create()),
                        returns: t || rD.create(),
                        typeName: M.ZodFunction,
                        ...rc(r)
                    })
                }
            }
            class rW extends ru {
                get schema() {
                    return this._def.getter()
                }
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e);
                    return this._def.getter()._parse({
                        data: t.data,
                        path: t.path,
                        parent: t
                    })
                }
            }
            rW.create = (e, t) => new rW({
                getter: e,
                typeName: M.ZodLazy,
                ...rc(t)
            });
            class rZ extends ru {
                _parse(e) {
                    if (e.data !== this._def.value) {
                        let t = this._getOrReturnCtx(e);
                        return t7(t, {
                            received: t.data,
                            code: t2.invalid_literal,
                            expected: this._def.value
                        }), re
                    }
                    return {
                        status: "valid",
                        value: e.data
                    }
                }
                get value() {
                    return this._def.value
                }
            }

            function rF(e, t) {
                return new rH({
                    values: e,
                    typeName: M.ZodEnum,
                    ...rc(t)
                })
            }
            rZ.create = (e, t) => new rZ({
                value: e,
                typeName: M.ZodLiteral,
                ...rc(t)
            });
            class rH extends ru {
                _parse(e) {
                    if ("string" != typeof e.data) {
                        let t = this._getOrReturnCtx(e),
                            r = this._def.values;
                        return t7(t, {
                            expected: N.joinValues(r),
                            received: t.parsedType,
                            code: t2.invalid_type
                        }), re
                    }
                    if (-1 === this._def.values.indexOf(e.data)) {
                        let t = this._getOrReturnCtx(e),
                            r = this._def.values;
                        return t7(t, {
                            received: t.data,
                            code: t2.invalid_enum_value,
                            options: r
                        }), re
                    }
                    return rr(e.data)
                }
                get options() {
                    return this._def.values
                }
                get enum() {
                    let e = {};
                    for (let t of this._def.values) e[t] = t;
                    return e
                }
                get Values() {
                    let e = {};
                    for (let t of this._def.values) e[t] = t;
                    return e
                }
                get Enum() {
                    let e = {};
                    for (let t of this._def.values) e[t] = t;
                    return e
                }
                extract(e) {
                    return rH.create(e)
                }
                exclude(e) {
                    return rH.create(this.options.filter(t => !e.includes(t)))
                }
            }
            rH.create = rF;
            class rV extends ru {
                _parse(e) {
                    let t = N.getValidEnumValues(this._def.values),
                        r = this._getOrReturnCtx(e);
                    if (r.parsedType !== t0.string && r.parsedType !== t0.number) {
                        let e = N.objectValues(t);
                        return t7(r, {
                            expected: N.joinValues(e),
                            received: r.parsedType,
                            code: t2.invalid_type
                        }), re
                    }
                    if (-1 === t.indexOf(e.data)) {
                        let e = N.objectValues(t);
                        return t7(r, {
                            received: r.data,
                            code: t2.invalid_enum_value,
                            options: e
                        }), re
                    }
                    return rr(e.data)
                }
                get enum() {
                    return this._def.values
                }
            }
            rV.create = (e, t) => new rV({
                values: e,
                typeName: M.ZodNativeEnum,
                ...rc(t)
            });
            class rY extends ru {
                unwrap() {
                    return this._def.type
                }
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e);
                    return t.parsedType !== t0.promise && !1 === t.common.async ? (t7(t, {
                        code: t2.invalid_type,
                        expected: t0.promise,
                        received: t.parsedType
                    }), re) : rr((t.parsedType === t0.promise ? t.data : Promise.resolve(t.data)).then(e => this._def.type.parseAsync(e, {
                        path: t.path,
                        errorMap: t.common.contextualErrorMap
                    })))
                }
            }
            rY.create = (e, t) => new rY({
                type: e,
                typeName: M.ZodPromise,
                ...rc(t)
            });
            class rK extends ru {
                innerType() {
                    return this._def.schema
                }
                sourceType() {
                    return this._def.schema._def.typeName === M.ZodEffects ? this._def.schema.sourceType() : this._def.schema
                }
                _parse(e) {
                    let {
                        status: t,
                        ctx: r
                    } = this._processInputParams(e), i = this._def.effect || null, n = {
                        addIssue: e => {
                            t7(r, e), e.fatal ? t.abort() : t.dirty()
                        },
                        get path() {
                            return r.path
                        }
                    };
                    if (n.addIssue = n.addIssue.bind(n), "preprocess" === i.type) {
                        let e = i.transform(r.data, n);
                        return r.common.issues.length ? {
                            status: "dirty",
                            value: r.data
                        } : r.common.async ? Promise.resolve(e).then(e => this._def.schema._parseAsync({
                            data: e,
                            path: r.path,
                            parent: r
                        })) : this._def.schema._parseSync({
                            data: e,
                            path: r.path,
                            parent: r
                        })
                    }
                    if ("refinement" === i.type) {
                        let e = e => {
                            let t = i.refinement(e, n);
                            if (r.common.async) return Promise.resolve(t);
                            if (t instanceof Promise) throw Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
                            return e
                        };
                        if (!1 !== r.common.async) return this._def.schema._parseAsync({
                            data: r.data,
                            path: r.path,
                            parent: r
                        }).then(r => "aborted" === r.status ? re : ("dirty" === r.status && t.dirty(), e(r.value).then(() => ({
                            status: t.value,
                            value: r.value
                        })))); {
                            let i = this._def.schema._parseSync({
                                data: r.data,
                                path: r.path,
                                parent: r
                            });
                            return "aborted" === i.status ? re : ("dirty" === i.status && t.dirty(), e(i.value), {
                                status: t.value,
                                value: i.value
                            })
                        }
                    }
                    if ("transform" === i.type) {
                        if (!1 !== r.common.async) return this._def.schema._parseAsync({
                            data: r.data,
                            path: r.path,
                            parent: r
                        }).then(e => ro(e) ? Promise.resolve(i.transform(e.value, n)).then(e => ({
                            status: t.value,
                            value: e
                        })) : e); {
                            let e = this._def.schema._parseSync({
                                data: r.data,
                                path: r.path,
                                parent: r
                            });
                            if (!ro(e)) return e;
                            let o = i.transform(e.value, n);
                            if (o instanceof Promise) throw Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
                            return {
                                status: t.value,
                                value: o
                            }
                        }
                    }
                    N.assertNever(i)
                }
            }
            rK.create = (e, t, r) => new rK({
                schema: e,
                typeName: M.ZodEffects,
                effect: t,
                ...rc(r)
            }), rK.createWithPreprocess = (e, t, r) => new rK({
                schema: t,
                effect: {
                    type: "preprocess",
                    transform: e
                },
                typeName: M.ZodEffects,
                ...rc(r)
            });
            class rq extends ru {
                _parse(e) {
                    return this._getType(e) === t0.undefined ? rr(void 0) : this._def.innerType._parse(e)
                }
                unwrap() {
                    return this._def.innerType
                }
            }
            rq.create = (e, t) => new rq({
                innerType: e,
                typeName: M.ZodOptional,
                ...rc(t)
            });
            class rG extends ru {
                _parse(e) {
                    return this._getType(e) === t0.null ? rr(null) : this._def.innerType._parse(e)
                }
                unwrap() {
                    return this._def.innerType
                }
            }
            rG.create = (e, t) => new rG({
                innerType: e,
                typeName: M.ZodNullable,
                ...rc(t)
            });
            class rX extends ru {
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e), r = t.data;
                    return t.parsedType === t0.undefined && (r = this._def.defaultValue()), this._def.innerType._parse({
                        data: r,
                        path: t.path,
                        parent: t
                    })
                }
                removeDefault() {
                    return this._def.innerType
                }
            }
            rX.create = (e, t) => new rX({
                innerType: e,
                typeName: M.ZodDefault,
                defaultValue: "function" == typeof t.default ? t.default : () => t.default,
                ...rc(t)
            });
            class rJ extends ru {
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e), r = { ...t,
                        common: { ...t.common,
                            issues: []
                        }
                    }, i = this._def.innerType._parse({
                        data: r.data,
                        path: r.path,
                        parent: { ...r
                        }
                    });
                    return ra(i) ? i.then(e => ({
                        status: "valid",
                        value: "valid" === e.status ? e.value : this._def.catchValue({
                            get error() {
                                return new t3(r.common.issues)
                            },
                            input: r.data
                        })
                    })) : {
                        status: "valid",
                        value: "valid" === i.status ? i.value : this._def.catchValue({
                            get error() {
                                return new t3(r.common.issues)
                            },
                            input: r.data
                        })
                    }
                }
                removeCatch() {
                    return this._def.innerType
                }
            }
            rJ.create = (e, t) => new rJ({
                innerType: e,
                typeName: M.ZodCatch,
                catchValue: "function" == typeof t.catch ? t.catch : () => t.catch,
                ...rc(t)
            });
            class rQ extends ru {
                _parse(e) {
                    if (this._getType(e) !== t0.nan) {
                        let t = this._getOrReturnCtx(e);
                        return t7(t, {
                            code: t2.invalid_type,
                            expected: t0.nan,
                            received: t.parsedType
                        }), re
                    }
                    return {
                        status: "valid",
                        value: e.data
                    }
                }
            }
            rQ.create = e => new rQ({
                typeName: M.ZodNaN,
                ...rc(e)
            });
            let r0 = Symbol("zod_brand");
            class r1 extends ru {
                _parse(e) {
                    let {
                        ctx: t
                    } = this._processInputParams(e), r = t.data;
                    return this._def.type._parse({
                        data: r,
                        path: t.path,
                        parent: t
                    })
                }
                unwrap() {
                    return this._def.type
                }
            }
            class r2 extends ru {
                _parse(e) {
                    let {
                        status: t,
                        ctx: r
                    } = this._processInputParams(e);
                    if (r.common.async) return (async () => {
                        let e = await this._def.in._parseAsync({
                            data: r.data,
                            path: r.path,
                            parent: r
                        });
                        return "aborted" === e.status ? re : "dirty" === e.status ? (t.dirty(), rt(e.value)) : this._def.out._parseAsync({
                            data: e.value,
                            path: r.path,
                            parent: r
                        })
                    })(); {
                        let e = this._def.in._parseSync({
                            data: r.data,
                            path: r.path,
                            parent: r
                        });
                        return "aborted" === e.status ? re : "dirty" === e.status ? (t.dirty(), {
                            status: "dirty",
                            value: e.value
                        }) : this._def.out._parseSync({
                            data: e.value,
                            path: r.path,
                            parent: r
                        })
                    }
                }
                static create(e, t) {
                    return new r2({ in: e,
                        out: t,
                        typeName: M.ZodPipeline
                    })
                }
            }
            class r3 extends ru {
                _parse(e) {
                    let t = this._def.innerType._parse(e);
                    return ro(t) && (t.value = Object.freeze(t.value)), t
                }
            }
            r3.create = (e, t) => new r3({
                innerType: e,
                typeName: M.ZodReadonly,
                ...rc(t)
            });
            let r5 = (e, t = {}, r) => e ? rA.create().superRefine((i, n) => {
                    var o, a;
                    if (!e(i)) {
                        let e = "function" == typeof t ? t(i) : "string" == typeof t ? {
                                message: t
                            } : t,
                            s = null === (a = null !== (o = e.fatal) && void 0 !== o ? o : r) || void 0 === a || a;
                        n.addIssue({
                            code: "custom",
                            ..."string" == typeof e ? {
                                message: e
                            } : e,
                            fatal: s
                        })
                    }
                }) : rA.create(),
                r4 = {
                    object: rI.lazycreate
                };
            (c = M || (M = {})).ZodString = "ZodString", c.ZodNumber = "ZodNumber", c.ZodNaN = "ZodNaN", c.ZodBigInt = "ZodBigInt", c.ZodBoolean = "ZodBoolean", c.ZodDate = "ZodDate", c.ZodSymbol = "ZodSymbol", c.ZodUndefined = "ZodUndefined", c.ZodNull = "ZodNull", c.ZodAny = "ZodAny", c.ZodUnknown = "ZodUnknown", c.ZodNever = "ZodNever", c.ZodVoid = "ZodVoid", c.ZodArray = "ZodArray", c.ZodObject = "ZodObject", c.ZodUnion = "ZodUnion", c.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", c.ZodIntersection = "ZodIntersection", c.ZodTuple = "ZodTuple", c.ZodRecord = "ZodRecord", c.ZodMap = "ZodMap", c.ZodSet = "ZodSet", c.ZodFunction = "ZodFunction", c.ZodLazy = "ZodLazy", c.ZodLiteral = "ZodLiteral", c.ZodEnum = "ZodEnum", c.ZodEffects = "ZodEffects", c.ZodNativeEnum = "ZodNativeEnum", c.ZodOptional = "ZodOptional", c.ZodNullable = "ZodNullable", c.ZodDefault = "ZodDefault", c.ZodCatch = "ZodCatch", c.ZodPromise = "ZodPromise", c.ZodBranded = "ZodBranded", c.ZodPipeline = "ZodPipeline", c.ZodReadonly = "ZodReadonly";
            let r6 = rb.create,
                r8 = ry.create,
                r7 = rQ.create,
                r9 = rC.create,
                ie = rx.create,
                it = r_.create,
                ir = rE.create,
                ii = rS.create,
                io = rk.create,
                ia = rA.create,
                is = rD.create,
                il = r$.create,
                ic = rR.create,
                iu = rO.create,
                id = rI.create,
                ih = rI.strictCreate,
                ip = rT.create,
                ig = rP.create,
                iw = rU.create,
                im = rM.create,
                iv = rj.create,
                ib = rL.create,
                iy = rB.create,
                iC = rz.create,
                ix = rW.create,
                i_ = rZ.create,
                iE = rH.create,
                iS = rV.create,
                ik = rY.create,
                iA = rK.create,
                iD = rq.create,
                i$ = rG.create,
                iR = rK.createWithPreprocess,
                iO = r2.create;
            var iI = Object.freeze({
                __proto__: null,
                defaultErrorMap: t5,
                setErrorMap: function(e) {
                    t4 = e
                },
                getErrorMap: t6,
                makeIssue: t8,
                EMPTY_PATH: [],
                addIssueToContext: t7,
                ParseStatus: t9,
                INVALID: re,
                DIRTY: rt,
                OK: rr,
                isAborted: ri,
                isDirty: rn,
                isValid: ro,
                isAsync: ra,
                get util() {
                    return N
                },
                get objectUtil() {
                    return P
                },
                ZodParsedType: t0,
                getParsedType: t1,
                ZodType: ru,
                ZodString: rb,
                ZodNumber: ry,
                ZodBigInt: rC,
                ZodBoolean: rx,
                ZodDate: r_,
                ZodSymbol: rE,
                ZodUndefined: rS,
                ZodNull: rk,
                ZodAny: rA,
                ZodUnknown: rD,
                ZodNever: r$,
                ZodVoid: rR,
                ZodArray: rO,
                ZodObject: rI,
                ZodUnion: rT,
                ZodDiscriminatedUnion: rP,
                ZodIntersection: rU,
                ZodTuple: rM,
                ZodRecord: rj,
                ZodMap: rL,
                ZodSet: rB,
                ZodFunction: rz,
                ZodLazy: rW,
                ZodLiteral: rZ,
                ZodEnum: rH,
                ZodNativeEnum: rV,
                ZodPromise: rY,
                ZodEffects: rK,
                ZodTransformer: rK,
                ZodOptional: rq,
                ZodNullable: rG,
                ZodDefault: rX,
                ZodCatch: rJ,
                ZodNaN: rQ,
                BRAND: r0,
                ZodBranded: r1,
                ZodPipeline: r2,
                ZodReadonly: r3,
                custom: r5,
                Schema: ru,
                ZodSchema: ru,
                late: r4,
                get ZodFirstPartyTypeKind() {
                    return M
                },
                coerce: {
                    string: e => rb.create({ ...e,
                        coerce: !0
                    }),
                    number: e => ry.create({ ...e,
                        coerce: !0
                    }),
                    boolean: e => rx.create({ ...e,
                        coerce: !0
                    }),
                    bigint: e => rC.create({ ...e,
                        coerce: !0
                    }),
                    date: e => r_.create({ ...e,
                        coerce: !0
                    })
                },
                any: ia,
                array: iu,
                bigint: r9,
                boolean: ie,
                date: it,
                discriminatedUnion: ig,
                effect: iA,
                enum: iE,
                function: iC,
                instanceof: (e, t = {
                    message: `Input not instance of ${e.name}`
                }) => r5(t => t instanceof e, t),
                intersection: iw,
                lazy: ix,
                literal: i_,
                map: ib,
                nan: r7,
                nativeEnum: iS,
                never: il,
                null: io,
                nullable: i$,
                number: r8,
                object: id,
                oboolean: () => ie().optional(),
                onumber: () => r8().optional(),
                optional: iD,
                ostring: () => r6().optional(),
                pipeline: iO,
                preprocess: iR,
                promise: ik,
                record: iv,
                set: iy,
                strictObject: ih,
                string: r6,
                symbol: ir,
                transformer: iA,
                tuple: im,
                undefined: ii,
                union: ip,
                unknown: is,
                void: ic,
                NEVER: re,
                ZodIssueCode: t2,
                quotelessJson: e => JSON.stringify(e, null, 2).replace(/"([^"]+)":/g, "$1:"),
                ZodError: t3
            });
            let iT = iI.object({
                message: iI.string()
            });

            function iN(e) {
                return iI.literal(tQ[e])
            }
            let iP = iI.object({
                    chainId: iI.number()
                }),
                iU = iI.object({
                    email: iI.string().email()
                }),
                iM = iI.object({
                    otp: iI.string()
                }),
                ij = iI.object({
                    action: iI.enum(["VERIFY_DEVICE", "VERIFY_OTP"])
                }),
                iL = iI.object({
                    address: iI.string(),
                    chainId: iI.number()
                }),
                iB = iI.object({
                    isConnected: iI.boolean()
                }),
                iz = iI.object({
                    chainId: iI.number()
                }),
                iW = iI.string(),
                iZ = iI.object({
                    method: iI.literal("personal_sign"),
                    params: iI.array(iI.any())
                }),
                iF = iI.object({
                    method: iI.literal("eth_sendTransaction"),
                    params: iI.array(iI.any())
                }),
                iH = iI.object({
                    method: iI.literal("eth_accounts")
                }),
                iV = iI.object({
                    method: iI.literal("eth_getBalance"),
                    params: iI.array(iI.any())
                }),
                iY = iI.object({
                    method: iI.literal("eth_estimateGas"),
                    params: iI.array(iI.any())
                }),
                iK = iI.object({
                    method: iI.literal("eth_gasPrice")
                }),
                iq = iI.object({
                    method: iI.literal("eth_signTypedData_v4"),
                    params: iI.array(iI.any())
                }),
                iG = iI.object({
                    token: iI.string()
                }),
                iX = {
                    appEvent: iI.object({
                        type: iN("APP_SWITCH_NETWORK"),
                        payload: iP
                    }).or(iI.object({
                        type: iN("APP_CONNECT_EMAIL"),
                        payload: iU
                    })).or(iI.object({
                        type: iN("APP_CONNECT_DEVICE")
                    })).or(iI.object({
                        type: iN("APP_CONNECT_OTP"),
                        payload: iM
                    })).or(iI.object({
                        type: iN("APP_GET_USER")
                    })).or(iI.object({
                        type: iN("APP_SIGN_OUT")
                    })).or(iI.object({
                        type: iN("APP_IS_CONNECTED"),
                        payload: iI.optional(iG)
                    })).or(iI.object({
                        type: iN("APP_GET_CHAIN_ID")
                    })).or(iI.object({
                        type: iN("APP_RPC_REQUEST"),
                        payload: iZ.or(iF).or(iH).or(iV).or(iY).or(iK).or(iq)
                    })),
                    frameEvent: iI.object({
                        type: iN("FRAME_SWITCH_NETWORK_ERROR"),
                        payload: iT
                    }).or(iI.object({
                        type: iN("FRAME_SWITCH_NETWORK_SUCCESS")
                    })).or(iI.object({
                        type: iN("FRAME_CONNECT_EMAIL_ERROR"),
                        payload: iT
                    })).or(iI.object({
                        type: iN("FRAME_CONNECT_EMAIL_SUCCESS"),
                        payload: ij
                    })).or(iI.object({
                        type: iN("FRAME_CONNECT_OTP_ERROR"),
                        payload: iT
                    })).or(iI.object({
                        type: iN("FRAME_CONNECT_OTP_SUCCESS")
                    })).or(iI.object({
                        type: iN("FRAME_CONNECT_DEVICE_ERROR"),
                        payload: iT
                    })).or(iI.object({
                        type: iN("FRAME_CONNECT_DEVICE_SUCCESS")
                    })).or(iI.object({
                        type: iN("FRAME_GET_USER_ERROR"),
                        payload: iT
                    })).or(iI.object({
                        type: iN("FRAME_GET_USER_SUCCESS"),
                        payload: iL
                    })).or(iI.object({
                        type: iN("FRAME_SIGN_OUT_ERROR"),
                        payload: iT
                    })).or(iI.object({
                        type: iN("FRAME_SIGN_OUT_SUCCESS")
                    })).or(iI.object({
                        type: iN("FRAME_IS_CONNECTED_ERROR"),
                        payload: iT
                    })).or(iI.object({
                        type: iN("FRAME_IS_CONNECTED_SUCCESS"),
                        payload: iB
                    })).or(iI.object({
                        type: iN("FRAME_GET_CHAIN_ID_ERROR"),
                        payload: iT
                    })).or(iI.object({
                        type: iN("FRAME_GET_CHAIN_ID_SUCCESS"),
                        payload: iz
                    })).or(iI.object({
                        type: iN("FRAME_RPC_REQUEST_ERROR"),
                        payload: iT
                    })).or(iI.object({
                        type: iN("FRAME_RPC_REQUEST_SUCCESS"),
                        payload: iW
                    })).or(iI.object({
                        type: iN("FRAME_SESSION_UPDATE"),
                        payload: iG
                    }))
                },
                iJ = ["ASIA/SHANGHAI", "ASIA/URUMQI", "ASIA/CHONGQING", "ASIA/HARBIN", "ASIA/KASHGAR", "ASIA/MACAU", "ASIA/HONG_KONG", "ASIA/MACAO", "ASIA/BEIJING", "ASIA/HARBIN"],
                iQ = {
                    getBlockchainApiUrl() {
                        try {
                            let {
                                timeZone: e
                            } = new Intl.DateTimeFormat().resolvedOptions(), t = e.toUpperCase();
                            return iJ.includes(t) ? "https://rpc.walletconnect.org" : "https://rpc.walletconnect.com"
                        } catch {
                            return !1
                        }
                    }
                };
            class i0 {
                constructor(e, t = !1) {
                    if (this.iframe = null, this.rpcUrl = iQ.getBlockchainApiUrl(), this.events = {
                            onFrameEvent: e => {
                                window.addEventListener("message", ({
                                    data: t
                                }) => {
                                    t.type ? .includes(tQ.FRAME_EVENT_KEY) && e(iX.frameEvent.parse(t))
                                })
                            },
                            onAppEvent: e => {
                                window.addEventListener("message", ({
                                    data: t
                                }) => {
                                    t.type ? .includes(tQ.APP_EVENT_KEY) && e(iX.appEvent.parse(t))
                                })
                            },
                            postAppEvent: e => {
                                if (!this.iframe ? .contentWindow) throw Error("W3mFrame: iframe is not set");
                                iX.appEvent.parse(e), window.postMessage(e), this.iframe.contentWindow.postMessage(e, "*")
                            },
                            postFrameEvent: e => {
                                if (!parent) throw Error("W3mFrame: parent is not set");
                                iX.frameEvent.parse(e), parent.postMessage(e, "*")
                            }
                        }, this.projectId = e, this.frameLoadPromise = new Promise((e, t) => {
                            this.frameLoadPromiseResolver = {
                                resolve: e,
                                reject: t
                            }
                        }), t) {
                        this.frameLoadPromise = new Promise((e, t) => {
                            this.frameLoadPromiseResolver = {
                                resolve: e,
                                reject: t
                            }
                        });
                        let t = document.createElement("iframe");
                        t.id = "w3m-iframe", t.src = `${tQ.SECURE_SITE_SDK}?projectId=${e}`, t.style.position = "fixed", t.style.zIndex = "999999", t.style.display = "none", t.style.opacity = "0", t.style.borderRadius = "clamp(0px, var(--wui-border-radius-l), 44px)", document.body.appendChild(t), this.iframe = t, this.iframe.onload = () => {
                            this.frameLoadPromiseResolver ? .resolve(void 0)
                        }, this.iframe.onerror = () => {
                            this.frameLoadPromiseResolver ? .reject()
                        }
                    }
                }
                get networks() {
                    return Object.assign({}, ...[1, 5, 11155111, 10, 420, 42161, 421613, 137, 80001, 42220, 1313161554, 1313161555, 56, 97, 43114, 43113, 324, 280, 100, 8453, 84531, 7777777, 999].map(e => ({
                        [e]: {
                            rpcUrl: `${this.rpcUrl}/v1/?chainId=eip155:${e}&projectId=${this.projectId}`,
                            chainId: e
                        }
                    })))
                }
            }
            let i1 = {
                set(e, t) {
                    localStorage.setItem(`${tQ.STORAGE_KEY}${e}`, t)
                },
                get: e => localStorage.getItem(`${tQ.STORAGE_KEY}${e}`),
                delete(e) {
                    localStorage.removeItem(`${tQ.STORAGE_KEY}${e}`)
                }
            };
            class i2 {
                constructor(e) {
                    this.connectEmailResolver = void 0, this.connectDeviceResolver = void 0, this.connectOtpResolver = void 0, this.connectResolver = void 0, this.disconnectResolver = void 0, this.isConnectedResolver = void 0, this.getChainIdResolver = void 0, this.switchChainResolver = void 0, this.rpcRequestResolver = void 0, this.w3mFrame = new i0(e, !0), this.w3mFrame.events.onFrameEvent(e => {
                        switch (console.log("\uD83D\uDCBB received", e), e.type) {
                            case tQ.FRAME_CONNECT_EMAIL_SUCCESS:
                                return this.onConnectEmailSuccess(e);
                            case tQ.FRAME_CONNECT_EMAIL_ERROR:
                                return this.onConnectEmailError(e);
                            case tQ.FRAME_CONNECT_DEVICE_SUCCESS:
                                return this.onConnectDeviceSuccess();
                            case tQ.FRAME_CONNECT_DEVICE_ERROR:
                                return this.onConnectDeviceError(e);
                            case tQ.FRAME_CONNECT_OTP_SUCCESS:
                                return this.onConnectOtpSuccess();
                            case tQ.FRAME_CONNECT_OTP_ERROR:
                                return this.onConnectOtpError(e);
                            case tQ.FRAME_GET_USER_SUCCESS:
                                return this.onConnectSuccess(e);
                            case tQ.FRAME_GET_USER_ERROR:
                                return this.onConnectError(e);
                            case tQ.FRAME_IS_CONNECTED_SUCCESS:
                                return this.onIsConnectedSuccess(e);
                            case tQ.FRAME_IS_CONNECTED_ERROR:
                                return this.onIsConnectedError(e);
                            case tQ.FRAME_GET_CHAIN_ID_SUCCESS:
                                return this.onGetChainIdSuccess(e);
                            case tQ.FRAME_GET_CHAIN_ID_ERROR:
                                return this.onGetChainIdError(e);
                            case tQ.FRAME_SIGN_OUT_SUCCESS:
                                return this.onSignOutSuccess();
                            case tQ.FRAME_SIGN_OUT_ERROR:
                                return this.onSignOutError(e);
                            case tQ.FRAME_SWITCH_NETWORK_SUCCESS:
                                return this.onSwitchChainSuccess();
                            case tQ.FRAME_SWITCH_NETWORK_ERROR:
                                return this.onSwitchChainError(e);
                            case tQ.FRAME_RPC_REQUEST_SUCCESS:
                                return this.onRpcRequestSuccess(e);
                            case tQ.FRAME_RPC_REQUEST_ERROR:
                                return this.onRpcRequestError(e);
                            case tQ.FRAME_SESSION_UPDATE:
                                return this.onSessionUpdate(e);
                            default:
                                return null
                        }
                    })
                }
                async connectEmail(e) {
                    return await this.w3mFrame.frameLoadPromise, this.w3mFrame.events.postAppEvent({
                        type: tQ.APP_CONNECT_EMAIL,
                        payload: e
                    }), new Promise((e, t) => {
                        this.connectEmailResolver = {
                            resolve: e,
                            reject: t
                        }
                    })
                }
                async connectDevice() {
                    return await this.w3mFrame.frameLoadPromise, this.w3mFrame.events.postAppEvent({
                        type: tQ.APP_CONNECT_DEVICE
                    }), new Promise((e, t) => {
                        this.connectDeviceResolver = {
                            resolve: e,
                            reject: t
                        }
                    })
                }
                async connectOtp(e) {
                    return await this.w3mFrame.frameLoadPromise, this.w3mFrame.events.postAppEvent({
                        type: tQ.APP_CONNECT_OTP,
                        payload: e
                    }), new Promise((e, t) => {
                        this.connectOtpResolver = {
                            resolve: e,
                            reject: t
                        }
                    })
                }
                async isConnected() {
                    await this.w3mFrame.frameLoadPromise;
                    let e = this.getSessionToken();
                    return this.w3mFrame.events.postAppEvent({
                        type: tQ.APP_IS_CONNECTED,
                        payload: e ? {
                            token: e
                        } : void 0
                    }), new Promise((e, t) => {
                        this.isConnectedResolver = {
                            resolve: e,
                            reject: t
                        }
                    })
                }
                async getChainId() {
                    return await this.w3mFrame.frameLoadPromise, this.w3mFrame.events.postAppEvent({
                        type: tQ.APP_GET_CHAIN_ID
                    }), new Promise((e, t) => {
                        this.getChainIdResolver = {
                            resolve: e,
                            reject: t
                        }
                    })
                }
                async connect() {
                    return await this.w3mFrame.frameLoadPromise, this.w3mFrame.events.postAppEvent({
                        type: tQ.APP_GET_USER
                    }), new Promise((e, t) => {
                        this.connectResolver = {
                            resolve: e,
                            reject: t
                        }
                    })
                }
                async switchNetwork(e) {
                    return await this.w3mFrame.frameLoadPromise, this.w3mFrame.events.postAppEvent({
                        type: tQ.APP_SWITCH_NETWORK,
                        payload: {
                            chainId: e
                        }
                    }), new Promise((e, t) => {
                        this.switchChainResolver = {
                            resolve: e,
                            reject: t
                        }
                    })
                }
                async disconnect() {
                    return await this.w3mFrame.frameLoadPromise, this.deleteSessionToken(), this.w3mFrame.events.postAppEvent({
                        type: tQ.APP_SIGN_OUT
                    }), new Promise((e, t) => {
                        this.disconnectResolver = {
                            resolve: e,
                            reject: t
                        }
                    })
                }
                async request(e) {
                    return await this.w3mFrame.frameLoadPromise, this.w3mFrame.events.postAppEvent({
                        type: tQ.APP_RPC_REQUEST,
                        payload: e
                    }), new Promise((e, t) => {
                        this.rpcRequestResolver = {
                            resolve: e,
                            reject: t
                        }
                    })
                }
                onRpcRequest(e) {
                    this.w3mFrame.events.onAppEvent(t => {
                        t.type.includes(tQ.RPC_METHOD_KEY) && e(t)
                    })
                }
                onRpcResponse(e) {
                    this.w3mFrame.events.onFrameEvent(t => {
                        t.type.includes(tQ.RPC_METHOD_KEY) && e(t)
                    })
                }
                onIsConnected(e) {
                    this.w3mFrame.events.onFrameEvent(t => {
                        t.type === tQ.FRAME_IS_CONNECTED_SUCCESS && e()
                    })
                }
                onConnectEmailSuccess(e) {
                    this.connectEmailResolver ? .resolve(e.payload)
                }
                onConnectEmailError(e) {
                    this.connectEmailResolver ? .reject(e.payload.message)
                }
                onConnectDeviceSuccess() {
                    this.connectDeviceResolver ? .resolve(void 0)
                }
                onConnectDeviceError(e) {
                    this.connectDeviceResolver ? .reject(e.payload.message)
                }
                onConnectOtpSuccess() {
                    this.connectOtpResolver ? .resolve(void 0)
                }
                onConnectOtpError(e) {
                    this.connectOtpResolver ? .reject(e.payload.message)
                }
                onConnectSuccess(e) {
                    this.connectResolver ? .resolve(e.payload)
                }
                onConnectError(e) {
                    this.connectResolver ? .reject(e.payload.message)
                }
                onIsConnectedSuccess(e) {
                    this.isConnectedResolver ? .resolve(e.payload)
                }
                onIsConnectedError(e) {
                    this.isConnectedResolver ? .reject(e.payload.message)
                }
                onGetChainIdSuccess(e) {
                    this.getChainIdResolver ? .resolve(e.payload)
                }
                onGetChainIdError(e) {
                    this.getChainIdResolver ? .reject(e.payload.message)
                }
                onSignOutSuccess() {
                    this.disconnectResolver ? .resolve(void 0)
                }
                onSignOutError(e) {
                    this.disconnectResolver ? .reject(e.payload.message)
                }
                onSwitchChainSuccess() {
                    this.switchChainResolver ? .resolve(void 0)
                }
                onSwitchChainError(e) {
                    this.switchChainResolver ? .reject(e.payload.message)
                }
                onRpcRequestSuccess(e) {
                    this.rpcRequestResolver ? .resolve(e.payload)
                }
                onRpcRequestError(e) {
                    this.rpcRequestResolver ? .reject(e.payload.message)
                }
                onSessionUpdate(e) {
                    let {
                        payload: t
                    } = e;
                    t && this.setSessionToken(t.token)
                }
                setSessionToken(e) {
                    i1.set(tQ.SESSION_TOKEN_KEY, e)
                }
                getSessionToken() {
                    return i1.get(tQ.SESSION_TOKEN_KEY)
                }
                deleteSessionToken() {
                    i1.delete(tQ.SESSION_TOKEN_KEY)
                }
            }
            class i3 extends tO.wR {
                constructor(e) {
                    super(e), this.id = "w3mEmail", this.name = "Web3Modal Email", this.ready = !0, this.provider = {}, "undefined" != typeof window && (this.provider = new i2(e.options.projectId))
                }
                async getProvider() {
                    return Promise.resolve(this.provider)
                }
                async connect() {
                    let {
                        address: e,
                        chainId: t
                    } = await this.provider.connect();
                    return {
                        account: e,
                        chain: {
                            id: t,
                            unsupported: this.isChainUnsupported(1)
                        }
                    }
                }
                async switchChain(e) {
                    try {
                        let t = this.chains.find(t => t.id === e);
                        if (!t) throw new tI.x3(Error("chain not found on connector."));
                        await this.provider.switchNetwork(e);
                        let r = this.isChainUnsupported(e);
                        return this.emit("change", {
                            chain: {
                                id: e,
                                unsupported: r
                            }
                        }), t
                    } catch (e) {
                        if (e instanceof Error) throw new tI.x3(e);
                        throw e
                    }
                }
                async disconnect() {
                    await this.provider.disconnect()
                }
                async getAccount() {
                    let {
                        address: e
                    } = await this.provider.connect();
                    return e
                }
                async getChainId() {
                    let {
                        chainId: e
                    } = await this.provider.getChainId();
                    return e
                }
                async getWalletClient() {
                    let {
                        address: e,
                        chainId: t
                    } = await this.provider.connect();
                    return Promise.resolve((0, tT.K)({
                        account: e,
                        chain: {
                            id: t
                        },
                        transport: (0, tN.P)(this.provider)
                    }))
                }
                async isAuthorized() {
                    let {
                        isConnected: e
                    } = await this.provider.isConnected();
                    return e
                }
                onAccountsChanged() {}
                onChainChanged() {}
                onDisconnect() {}
            }
            let i5 = B.j1.getBlockchainApiUrl();

            function i4({
                projectId: e,
                chains: t,
                metadata: r,
                enableInjected: i,
                enableCoinbase: n,
                enableEIP6963: o,
                enableEmail: a,
                enableWalletConnect: s
            }) {
                let {
                    publicClient: l
                } = (0, j.QB)(t, [function({
                    projectId: e
                }) {
                    return function(t) {
                        if (!tv.WalletConnectRpcChainIds.includes(t.id)) return null;
                        let r = `${i5}/v1/?chainId=${tm.EIP155}:${t.id}&projectId=${e}`;
                        return {
                            chain: { ...t,
                                rpcUrls: { ...t.rpcUrls,
                                    default: {
                                        http: [r]
                                    }
                                }
                            },
                            rpcUrls: {
                                http: [r]
                            }
                        }
                    }
                }({
                    projectId: e
                }), function(e) {
                    return e.rpcUrls.public.http[0] ? {
                        chain: e,
                        rpcUrls: e.rpcUrls.public
                    } : null
                }]), c = [];
                return !1 !== s && c.push(new tJ({
                    chains: t,
                    options: {
                        projectId: e,
                        showQrModal: !1,
                        metadata: r
                    }
                })), !1 !== i && c.push(new tC._({
                    chains: t,
                    options: {
                        shimDisconnect: !0
                    }
                })), !1 !== o && c.push(new tk({
                    chains: t
                })), !1 !== n && c.push(new tU({
                    chains: t,
                    options: {
                        appName: r ? .name ? ? "Unknown"
                    }
                })), !0 === a && c.push(new i3({
                    chains: t,
                    options: {
                        projectId: e
                    }
                })), (0, tD._g)({
                    autoConnect: !0,
                    connectors: c,
                    publicClient: l
                })
            }

            function i6(e) {
                return !o && (n = o = new ty({ ...e,
                    _sdkVersion: `react-wagmi-${tm.VERSION}`
                })), o
            }
        },
        6591: function(e, t, r) {
            "use strict";
            r.d(t, {
                Cb: function() {
                    return a
                },
                SB: function() {
                    return s
                }
            });
            var i = r(31527);
            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let n = {
                    attribute: !0,
                    type: String,
                    converter: i.Ts,
                    reflect: !1,
                    hasChanged: i.Qu
                },
                o = (e = n, t, r) => {
                    let {
                        kind: i,
                        metadata: o
                    } = r, a = globalThis.litPropertyMetadata.get(o);
                    if (void 0 === a && globalThis.litPropertyMetadata.set(o, a = new Map), a.set(r.name, e), "accessor" === i) {
                        let {
                            name: i
                        } = r;
                        return {
                            set(r) {
                                let n = t.get.call(this);
                                t.set.call(this, r), this.requestUpdate(i, n, e)
                            },
                            init(t) {
                                return void 0 !== t && this.C(i, void 0, e), t
                            }
                        }
                    }
                    if ("setter" === i) {
                        let {
                            name: i
                        } = r;
                        return function(r) {
                            let n = this[i];
                            t.call(this, r), this.requestUpdate(i, n, e)
                        }
                    }
                    throw Error("Unsupported decorator location: " + i)
                };

            function a(e) {
                return (t, r) => "object" == typeof r ? o(e, t, r) : ((e, t, r) => {
                    let i = t.hasOwnProperty(r);
                    return t.constructor.createProperty(r, i ? { ...e,
                        wrapped: !0
                    } : e), i ? Object.getOwnPropertyDescriptor(t, r) : void 0
                })(e, t, r)
            }
            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            function s(e) {
                return a({ ...e,
                    state: !0,
                    attribute: !1
                })
            }
        },
        80824: function(e, t, r) {
            "use strict";
            r.d(t, {
                o: function() {
                    return n
                }
            });
            var i = r(35377);
            /**
             * @license
             * Copyright 2018 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let n = e => e ? ? i.Ld
        },
        43201: function(e, t, r) {
            "use strict";
            r.d(t, {
                V: function() {
                    return f
                },
                i: function() {
                    return m
                }
            });
            var i = r(35377);
            /**
             * @license
             * Copyright 2020 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let {
                D: n
            } = i._$LH, o = e => void 0 === e.strings;
            var a = r(64647);
            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let s = (e, t) => {
                    let r = e._$AN;
                    if (void 0 === r) return !1;
                    for (let e of r) e._$AO ? .(t, !1), s(e, t);
                    return !0
                },
                l = e => {
                    let t, r;
                    do {
                        if (void 0 === (t = e._$AM)) break;
                        (r = t._$AN).delete(e), e = t
                    } while (0 === r ? .size)
                },
                c = e => {
                    for (let t; t = e._$AM; e = t) {
                        let r = t._$AN;
                        if (void 0 === r) t._$AN = r = new Set;
                        else if (r.has(e)) break;
                        r.add(e), h(t)
                    }
                };

            function u(e) {
                void 0 !== this._$AN ? (l(this), this._$AM = e, c(this)) : this._$AM = e
            }

            function d(e, t = !1, r = 0) {
                let i = this._$AH,
                    n = this._$AN;
                if (void 0 !== n && 0 !== n.size) {
                    if (t) {
                        if (Array.isArray(i))
                            for (let e = r; e < i.length; e++) s(i[e], !1), l(i[e]);
                        else null != i && (s(i, !1), l(i))
                    } else s(this, e)
                }
            }
            let h = e => {
                e.type == a.pX.CHILD && (e._$AP ? ? = d, e._$AQ ? ? = u)
            };
            class p extends a.Xe {
                constructor() {
                    super(...arguments), this._$AN = void 0
                }
                _$AT(e, t, r) {
                    super._$AT(e, t, r), c(this), this.isConnected = e._$AU
                }
                _$AO(e, t = !0) {
                    e !== this.isConnected && (this.isConnected = e, e ? this.reconnected ? .() : this.disconnected ? .()), t && (s(this, e), l(this))
                }
                setValue(e) {
                    if (o(this._$Ct)) this._$Ct._$AI(e, this);
                    else {
                        let t = [...this._$Ct._$AH];
                        t[this._$Ci] = e, this._$Ct._$AI(t, this, 0)
                    }
                }
                disconnected() {}
                reconnected() {}
            }
            /**
             * @license
             * Copyright 2020 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let f = () => new g;
            class g {}
            let w = new WeakMap,
                m = (0, a.XM)(class extends p {
                    render(e) {
                        return i.Ld
                    }
                    update(e, [t]) {
                        let r = t !== this.G;
                        return r && void 0 !== this.G && this.ot(void 0), (r || this.rt !== this.lt) && (this.G = t, this.ct = e.options ? .host, this.ot(this.lt = e.element)), i.Ld
                    }
                    ot(e) {
                        if ("function" == typeof this.G) {
                            let t = this.ct ? ? globalThis,
                                r = w.get(t);
                            void 0 === r && (r = new WeakMap, w.set(t, r)), void 0 !== r.get(this.G) && this.G.call(this.ct, void 0), r.set(this.G, e), void 0 !== e && this.G.call(this.ct, e)
                        } else this.G.value = e
                    }
                    get rt() {
                        return "function" == typeof this.G ? w.get(this.ct ? ? globalThis) ? .get(this.G) : this.G ? .value
                    }
                    disconnected() {
                        this.rt === this.lt && this.ot(void 0)
                    }
                    reconnected() {
                        this.ot(this.lt)
                    }
                })
        },
        22555: function(e, t, r) {
            "use strict";
            r.d(t, {
                oi: function() {
                    return ep
                },
                iv: function() {
                    return c
                },
                dy: function() {
                    return K
                },
                YP: function() {
                    return q
                },
                $m: function() {
                    return l
                }
            }), r(31527), r(35377);
            /**
             * @license
             * Copyright 2019 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let i = globalThis,
                n = i.ShadowRoot && (void 0 === i.ShadyCSS || i.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
                o = Symbol(),
                a = new WeakMap;
            class s {
                constructor(e, t, r) {
                    if (this._$cssResult$ = !0, r !== o) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                    this.cssText = e, this.t = t
                }
                get styleSheet() {
                    let e = this.o,
                        t = this.t;
                    if (n && void 0 === e) {
                        let r = void 0 !== t && 1 === t.length;
                        r && (e = a.get(t)), void 0 === e && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText), r && a.set(t, e))
                    }
                    return e
                }
                toString() {
                    return this.cssText
                }
            }
            let l = e => new s("string" == typeof e ? e : e + "", void 0, o),
                c = (e, ...t) => new s(1 === e.length ? e[0] : t.reduce((t, r, i) => t + (e => {
                    if (!0 === e._$cssResult$) return e.cssText;
                    if ("number" == typeof e) return e;
                    throw Error("Value passed to 'css' function must be a 'css' function result: " + e + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")
                })(r) + e[i + 1], e[0]), e, o),
                u = (e, t) => {
                    if (n) e.adoptedStyleSheets = t.map(e => e instanceof CSSStyleSheet ? e : e.styleSheet);
                    else
                        for (let r of t) {
                            let t = document.createElement("style"),
                                n = i.litNonce;
                            void 0 !== n && t.setAttribute("nonce", n), t.textContent = r.cssText, e.appendChild(t)
                        }
                },
                d = n ? e => e : e => e instanceof CSSStyleSheet ? (e => {
                    let t = "";
                    for (let r of e.cssRules) t += r.cssText;
                    return l(t)
                })(e) : e,
                {
                    is: h,
                    defineProperty: p,
                    getOwnPropertyDescriptor: f,
                    getOwnPropertyNames: g,
                    getOwnPropertySymbols: w,
                    getPrototypeOf: m
                } = Object,
                v = globalThis,
                b = v.trustedTypes,
                y = b ? b.emptyScript : "",
                C = v.reactiveElementPolyfillSupport,
                x = (e, t) => e,
                _ = {
                    toAttribute(e, t) {
                        switch (t) {
                            case Boolean:
                                e = e ? y : null;
                                break;
                            case Object:
                            case Array:
                                e = null == e ? e : JSON.stringify(e)
                        }
                        return e
                    },
                    fromAttribute(e, t) {
                        let r = e;
                        switch (t) {
                            case Boolean:
                                r = null !== e;
                                break;
                            case Number:
                                r = null === e ? null : Number(e);
                                break;
                            case Object:
                            case Array:
                                try {
                                    r = JSON.parse(e)
                                } catch (e) {
                                    r = null
                                }
                        }
                        return r
                    }
                },
                E = (e, t) => !h(e, t),
                S = {
                    attribute: !0,
                    type: String,
                    converter: _,
                    reflect: !1,
                    hasChanged: E
                };
            Symbol.metadata ? ? = Symbol("metadata"), v.litPropertyMetadata ? ? = new WeakMap;
            class k extends HTMLElement {
                static addInitializer(e) {
                    this._$Ei(), (this.l ? ? = []).push(e)
                }
                static get observedAttributes() {
                    return this.finalize(), this._$Eh && [...this._$Eh.keys()]
                }
                static createProperty(e, t = S) {
                    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
                        let r = Symbol(),
                            i = this.getPropertyDescriptor(e, r, t);
                        void 0 !== i && p(this.prototype, e, i)
                    }
                }
                static getPropertyDescriptor(e, t, r) {
                    let {
                        get: i,
                        set: n
                    } = f(this.prototype, e) ? ? {
                        get() {
                            return this[t]
                        },
                        set(e) {
                            this[t] = e
                        }
                    };
                    return {
                        get() {
                            return i ? .call(this)
                        },
                        set(t) {
                            let o = i ? .call(this);
                            n.call(this, t), this.requestUpdate(e, o, r)
                        },
                        configurable: !0,
                        enumerable: !0
                    }
                }
                static getPropertyOptions(e) {
                    return this.elementProperties.get(e) ? ? S
                }
                static _$Ei() {
                    if (this.hasOwnProperty(x("elementProperties"))) return;
                    let e = m(this);
                    e.finalize(), void 0 !== e.l && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties)
                }
                static finalize() {
                    if (this.hasOwnProperty(x("finalized"))) return;
                    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(x("properties"))) {
                        let e = this.properties;
                        for (let t of [...g(e), ...w(e)]) this.createProperty(t, e[t])
                    }
                    let e = this[Symbol.metadata];
                    if (null !== e) {
                        let t = litPropertyMetadata.get(e);
                        if (void 0 !== t)
                            for (let [e, r] of t) this.elementProperties.set(e, r)
                    }
                    for (let [e, t] of (this._$Eh = new Map, this.elementProperties)) {
                        let r = this._$Eu(e, t);
                        void 0 !== r && this._$Eh.set(r, e)
                    }
                    this.elementStyles = this.finalizeStyles(this.styles)
                }
                static finalizeStyles(e) {
                    let t = [];
                    if (Array.isArray(e))
                        for (let r of new Set(e.flat(1 / 0).reverse())) t.unshift(d(r));
                    else void 0 !== e && t.push(d(e));
                    return t
                }
                static _$Eu(e, t) {
                    let r = t.attribute;
                    return !1 === r ? void 0 : "string" == typeof r ? r : "string" == typeof e ? e.toLowerCase() : void 0
                }
                constructor() {
                    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev()
                }
                _$Ev() {
                    this._$Eg = new Promise(e => this.enableUpdating = e), this._$AL = new Map, this._$ES(), this.requestUpdate(), this.constructor.l ? .forEach(e => e(this))
                }
                addController(e) {
                    (this._$E_ ? ? = new Set).add(e), void 0 !== this.renderRoot && this.isConnected && e.hostConnected ? .()
                }
                removeController(e) {
                    this._$E_ ? .delete(e)
                }
                _$ES() {
                    let e = new Map;
                    for (let t of this.constructor.elementProperties.keys()) this.hasOwnProperty(t) && (e.set(t, this[t]), delete this[t]);
                    e.size > 0 && (this._$Ep = e)
                }
                createRenderRoot() {
                    let e = this.shadowRoot ? ? this.attachShadow(this.constructor.shadowRootOptions);
                    return u(e, this.constructor.elementStyles), e
                }
                connectedCallback() {
                    this.renderRoot ? ? = this.createRenderRoot(), this.enableUpdating(!0), this._$E_ ? .forEach(e => e.hostConnected ? .())
                }
                enableUpdating(e) {}
                disconnectedCallback() {
                    this._$E_ ? .forEach(e => e.hostDisconnected ? .())
                }
                attributeChangedCallback(e, t, r) {
                    this._$AK(e, r)
                }
                _$EO(e, t) {
                    let r = this.constructor.elementProperties.get(e),
                        i = this.constructor._$Eu(e, r);
                    if (void 0 !== i && !0 === r.reflect) {
                        let n = (void 0 !== r.converter ? .toAttribute ? r.converter : _).toAttribute(t, r.type);
                        this._$Em = e, null == n ? this.removeAttribute(i) : this.setAttribute(i, n), this._$Em = null
                    }
                }
                _$AK(e, t) {
                    let r = this.constructor,
                        i = r._$Eh.get(e);
                    if (void 0 !== i && this._$Em !== i) {
                        let e = r.getPropertyOptions(i),
                            n = "function" == typeof e.converter ? {
                                fromAttribute: e.converter
                            } : void 0 !== e.converter ? .fromAttribute ? e.converter : _;
                        this._$Em = i, this[i] = n.fromAttribute(t, e.type), this._$Em = null
                    }
                }
                requestUpdate(e, t, r, i = !1, n) {
                    if (void 0 !== e) {
                        if (!((r ? ? = this.constructor.getPropertyOptions(e)).hasChanged ? ? E)(i ? n : this[e], t)) return;
                        this.C(e, t, r)
                    }!1 === this.isUpdatePending && (this._$Eg = this._$EP())
                }
                C(e, t, r) {
                    this._$AL.has(e) || this._$AL.set(e, t), !0 === r.reflect && this._$Em !== e && (this._$Ej ? ? = new Set).add(e)
                }
                async _$EP() {
                    this.isUpdatePending = !0;
                    try {
                        await this._$Eg
                    } catch (e) {
                        Promise.reject(e)
                    }
                    let e = this.scheduleUpdate();
                    return null != e && await e, !this.isUpdatePending
                }
                scheduleUpdate() {
                    return this.performUpdate()
                }
                performUpdate() {
                    if (!this.isUpdatePending) return;
                    if (!this.hasUpdated) {
                        if (this.renderRoot ? ? = this.createRenderRoot(), this._$Ep) {
                            for (let [e, t] of this._$Ep) this[e] = t;
                            this._$Ep = void 0
                        }
                        let e = this.constructor.elementProperties;
                        if (e.size > 0)
                            for (let [t, r] of e) !0 !== r.wrapped || this._$AL.has(t) || void 0 === this[t] || this.C(t, this[t], r)
                    }
                    let e = !1,
                        t = this._$AL;
                    try {
                        (e = this.shouldUpdate(t)) ? (this.willUpdate(t), this._$E_ ? .forEach(e => e.hostUpdate ? .()), this.update(t)) : this._$ET()
                    } catch (t) {
                        throw e = !1, this._$ET(), t
                    }
                    e && this._$AE(t)
                }
                willUpdate(e) {}
                _$AE(e) {
                    this._$E_ ? .forEach(e => e.hostUpdated ? .()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
                }
                _$ET() {
                    this._$AL = new Map, this.isUpdatePending = !1
                }
                get updateComplete() {
                    return this.getUpdateComplete()
                }
                getUpdateComplete() {
                    return this._$Eg
                }
                shouldUpdate(e) {
                    return !0
                }
                update(e) {
                    this._$Ej && = this._$Ej.forEach(e => this._$EO(e, this[e])), this._$ET()
                }
                updated(e) {}
                firstUpdated(e) {}
            }
            k.elementStyles = [], k.shadowRootOptions = {
                mode: "open"
            }, k[x("elementProperties")] = new Map, k[x("finalized")] = new Map, C ? .({
                ReactiveElement: k
            }), (v.reactiveElementVersions ? ? = []).push("2.0.2");
            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let A = globalThis,
                D = A.trustedTypes,
                $ = D ? D.createPolicy("lit-html", {
                    createHTML: e => e
                }) : void 0,
                R = "$lit$",
                O = `lit$${(Math.random()+"").slice(9)}$`,
                I = "?" + O,
                T = `<${I}>`,
                N = document,
                P = () => N.createComment(""),
                U = e => null === e || "object" != typeof e && "function" != typeof e,
                M = Array.isArray,
                j = e => M(e) || "function" == typeof e ? .[Symbol.iterator],
                L = "[ 	\n\f\r]",
                B = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
                z = /-->/g,
                W = />/g,
                Z = RegExp(`>|${L}(?:([^\\s"'>=/]+)(${L}*=${L}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
                F = /'/g,
                H = /"/g,
                V = /^(?:script|style|textarea|title)$/i,
                Y = e => (t, ...r) => ({
                    _$litType$: e,
                    strings: t,
                    values: r
                }),
                K = Y(1),
                q = Y(2),
                G = Symbol.for("lit-noChange"),
                X = Symbol.for("lit-nothing"),
                J = new WeakMap,
                Q = N.createTreeWalker(N, 129);

            function ee(e, t) {
                if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
                return void 0 !== $ ? $.createHTML(t) : t
            }
            let et = (e, t) => {
                let r = e.length - 1,
                    i = [],
                    n, o = 2 === t ? "<svg>" : "",
                    a = B;
                for (let t = 0; t < r; t++) {
                    let r = e[t],
                        s, l, c = -1,
                        u = 0;
                    for (; u < r.length && (a.lastIndex = u, null !== (l = a.exec(r)));) u = a.lastIndex, a === B ? "!--" === l[1] ? a = z : void 0 !== l[1] ? a = W : void 0 !== l[2] ? (V.test(l[2]) && (n = RegExp("</" + l[2], "g")), a = Z) : void 0 !== l[3] && (a = Z) : a === Z ? ">" === l[0] ? (a = n ? ? B, c = -1) : void 0 === l[1] ? c = -2 : (c = a.lastIndex - l[2].length, s = l[1], a = void 0 === l[3] ? Z : '"' === l[3] ? H : F) : a === H || a === F ? a = Z : a === z || a === W ? a = B : (a = Z, n = void 0);
                    let d = a === Z && e[t + 1].startsWith("/>") ? " " : "";
                    o += a === B ? r + T : c >= 0 ? (i.push(s), r.slice(0, c) + R + r.slice(c) + O + d) : r + O + (-2 === c ? t : d)
                }
                return [ee(e, o + (e[r] || "<?>") + (2 === t ? "</svg>" : "")), i]
            };
            class er {
                constructor({
                    strings: e,
                    _$litType$: t
                }, r) {
                    let i;
                    this.parts = [];
                    let n = 0,
                        o = 0,
                        a = e.length - 1,
                        s = this.parts,
                        [l, c] = et(e, t);
                    if (this.el = er.createElement(l, r), Q.currentNode = this.el.content, 2 === t) {
                        let e = this.el.content.firstChild;
                        e.replaceWith(...e.childNodes)
                    }
                    for (; null !== (i = Q.nextNode()) && s.length < a;) {
                        if (1 === i.nodeType) {
                            if (i.hasAttributes())
                                for (let e of i.getAttributeNames())
                                    if (e.endsWith(R)) {
                                        let t = c[o++],
                                            r = i.getAttribute(e).split(O),
                                            a = /([.?@])?(.*)/.exec(t);
                                        s.push({
                                            type: 1,
                                            index: n,
                                            name: a[2],
                                            strings: r,
                                            ctor: "." === a[1] ? es : "?" === a[1] ? el : "@" === a[1] ? ec : ea
                                        }), i.removeAttribute(e)
                                    } else e.startsWith(O) && (s.push({
                                        type: 6,
                                        index: n
                                    }), i.removeAttribute(e));
                            if (V.test(i.tagName)) {
                                let e = i.textContent.split(O),
                                    t = e.length - 1;
                                if (t > 0) {
                                    i.textContent = D ? D.emptyScript : "";
                                    for (let r = 0; r < t; r++) i.append(e[r], P()), Q.nextNode(), s.push({
                                        type: 2,
                                        index: ++n
                                    });
                                    i.append(e[t], P())
                                }
                            }
                        } else if (8 === i.nodeType) {
                            if (i.data === I) s.push({
                                type: 2,
                                index: n
                            });
                            else {
                                let e = -1;
                                for (; - 1 !== (e = i.data.indexOf(O, e + 1));) s.push({
                                    type: 7,
                                    index: n
                                }), e += O.length - 1
                            }
                        }
                        n++
                    }
                }
                static createElement(e, t) {
                    let r = N.createElement("template");
                    return r.innerHTML = e, r
                }
            }

            function ei(e, t, r = e, i) {
                if (t === G) return t;
                let n = void 0 !== i ? r._$Co ? .[i] : r._$Cl,
                    o = U(t) ? void 0 : t._$litDirective$;
                return n ? .constructor !== o && (n ? ._$AO ? .(!1), void 0 === o ? n = void 0 : (n = new o(e))._$AT(e, r, i), void 0 !== i ? (r._$Co ? ? = [])[i] = n : r._$Cl = n), void 0 !== n && (t = ei(e, n._$AS(e, t.values), n, i)), t
            }
            class en {
                constructor(e, t) {
                    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t
                }
                get parentNode() {
                    return this._$AM.parentNode
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                u(e) {
                    let {
                        el: {
                            content: t
                        },
                        parts: r
                    } = this._$AD, i = (e ? .creationScope ? ? N).importNode(t, !0);
                    Q.currentNode = i;
                    let n = Q.nextNode(),
                        o = 0,
                        a = 0,
                        s = r[0];
                    for (; void 0 !== s;) {
                        if (o === s.index) {
                            let t;
                            2 === s.type ? t = new eo(n, n.nextSibling, this, e) : 1 === s.type ? t = new s.ctor(n, s.name, s.strings, this, e) : 6 === s.type && (t = new eu(n, this, e)), this._$AV.push(t), s = r[++a]
                        }
                        o !== s ? .index && (n = Q.nextNode(), o++)
                    }
                    return Q.currentNode = N, i
                }
                p(e) {
                    let t = 0;
                    for (let r of this._$AV) void 0 !== r && (void 0 !== r.strings ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++
                }
            }
            class eo {
                get _$AU() {
                    return this._$AM ? ._$AU ? ? this._$Cv
                }
                constructor(e, t, r, i) {
                    this.type = 2, this._$AH = X, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = i, this._$Cv = i ? .isConnected ? ? !0
                }
                get parentNode() {
                    let e = this._$AA.parentNode,
                        t = this._$AM;
                    return void 0 !== t && 11 === e ? .nodeType && (e = t.parentNode), e
                }
                get startNode() {
                    return this._$AA
                }
                get endNode() {
                    return this._$AB
                }
                _$AI(e, t = this) {
                    U(e = ei(this, e, t)) ? e === X || null == e || "" === e ? (this._$AH !== X && this._$AR(), this._$AH = X) : e !== this._$AH && e !== G && this._(e) : void 0 !== e._$litType$ ? this.g(e) : void 0 !== e.nodeType ? this.$(e) : j(e) ? this.T(e) : this._(e)
                }
                k(e) {
                    return this._$AA.parentNode.insertBefore(e, this._$AB)
                }
                $(e) {
                    this._$AH !== e && (this._$AR(), this._$AH = this.k(e))
                }
                _(e) {
                    this._$AH !== X && U(this._$AH) ? this._$AA.nextSibling.data = e : this.$(N.createTextNode(e)), this._$AH = e
                }
                g(e) {
                    let {
                        values: t,
                        _$litType$: r
                    } = e, i = "number" == typeof r ? this._$AC(e) : (void 0 === r.el && (r.el = er.createElement(ee(r.h, r.h[0]), this.options)), r);
                    if (this._$AH ? ._$AD === i) this._$AH.p(t);
                    else {
                        let e = new en(i, this),
                            r = e.u(this.options);
                        e.p(t), this.$(r), this._$AH = e
                    }
                }
                _$AC(e) {
                    let t = J.get(e.strings);
                    return void 0 === t && J.set(e.strings, t = new er(e)), t
                }
                T(e) {
                    M(this._$AH) || (this._$AH = [], this._$AR());
                    let t = this._$AH,
                        r, i = 0;
                    for (let n of e) i === t.length ? t.push(r = new eo(this.k(P()), this.k(P()), this, this.options)) : r = t[i], r._$AI(n), i++;
                    i < t.length && (this._$AR(r && r._$AB.nextSibling, i), t.length = i)
                }
                _$AR(e = this._$AA.nextSibling, t) {
                    for (this._$AP ? .(!1, !0, t); e && e !== this._$AB;) {
                        let t = e.nextSibling;
                        e.remove(), e = t
                    }
                }
                setConnected(e) {
                    void 0 === this._$AM && (this._$Cv = e, this._$AP ? .(e))
                }
            }
            class ea {
                get tagName() {
                    return this.element.tagName
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                constructor(e, t, r, i, n) {
                    this.type = 1, this._$AH = X, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = n, r.length > 2 || "" !== r[0] || "" !== r[1] ? (this._$AH = Array(r.length - 1).fill(new String), this.strings = r) : this._$AH = X
                }
                _$AI(e, t = this, r, i) {
                    let n = this.strings,
                        o = !1;
                    if (void 0 === n)(o = !U(e = ei(this, e, t, 0)) || e !== this._$AH && e !== G) && (this._$AH = e);
                    else {
                        let i, a;
                        let s = e;
                        for (e = n[0], i = 0; i < n.length - 1; i++)(a = ei(this, s[r + i], t, i)) === G && (a = this._$AH[i]), o || = !U(a) || a !== this._$AH[i], a === X ? e = X : e !== X && (e += (a ? ? "") + n[i + 1]), this._$AH[i] = a
                    }
                    o && !i && this.O(e)
                }
                O(e) {
                    e === X ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ? ? "")
                }
            }
            class es extends ea {
                constructor() {
                    super(...arguments), this.type = 3
                }
                O(e) {
                    this.element[this.name] = e === X ? void 0 : e
                }
            }
            class el extends ea {
                constructor() {
                    super(...arguments), this.type = 4
                }
                O(e) {
                    this.element.toggleAttribute(this.name, !!e && e !== X)
                }
            }
            class ec extends ea {
                constructor(e, t, r, i, n) {
                    super(e, t, r, i, n), this.type = 5
                }
                _$AI(e, t = this) {
                    if ((e = ei(this, e, t, 0) ? ? X) === G) return;
                    let r = this._$AH,
                        i = e === X && r !== X || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive,
                        n = e !== X && (r === X || i);
                    i && this.element.removeEventListener(this.name, this, r), n && this.element.addEventListener(this.name, this, e), this._$AH = e
                }
                handleEvent(e) {
                    "function" == typeof this._$AH ? this._$AH.call(this.options ? .host ? ? this.element, e) : this._$AH.handleEvent(e)
                }
            }
            class eu {
                constructor(e, t, r) {
                    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AI(e) {
                    ei(this, e)
                }
            }
            let ed = A.litHtmlPolyfillSupport;
            ed ? .(er, eo), (A.litHtmlVersions ? ? = []).push("3.1.0");
            let eh = (e, t, r) => {
                let i = r ? .renderBefore ? ? t,
                    n = i._$litPart$;
                if (void 0 === n) {
                    let e = r ? .renderBefore ? ? null;
                    i._$litPart$ = n = new eo(t.insertBefore(P(), e), e, void 0, r ? ? {})
                }
                return n._$AI(e), n
            };
            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            class ep extends k {
                constructor() {
                    super(...arguments), this.renderOptions = {
                        host: this
                    }, this._$Do = void 0
                }
                createRenderRoot() {
                    let e = super.createRenderRoot();
                    return this.renderOptions.renderBefore ? ? = e.firstChild, e
                }
                update(e) {
                    let t = this.render();
                    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = eh(t, this.renderRoot, this.renderOptions)
                }
                connectedCallback() {
                    super.connectedCallback(), this._$Do ? .setConnected(!0)
                }
                disconnectedCallback() {
                    super.disconnectedCallback(), this._$Do ? .setConnected(!1)
                }
                render() {
                    return G
                }
            }
            ep._$litElement$ = !0, ep.finalized = !0, globalThis.litElementHydrateSupport ? .({
                LitElement: ep
            });
            let ef = globalThis.litElementPolyfillSupport;
            ef ? .({
                LitElement: ep
            }), (globalThis.litElementVersions ? ? = []).push("4.0.2")
        },
        31527: function(e, t, r) {
            "use strict";
            r.d(t, {
                Ts: function() {
                    return x
                },
                Qu: function() {
                    return _
                }
            });
            /**
             * @license
             * Copyright 2019 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let i = globalThis,
                n = i.ShadowRoot && (void 0 === i.ShadyCSS || i.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype,
                o = Symbol(),
                a = new WeakMap;
            class s {
                constructor(e, t, r) {
                    if (this._$cssResult$ = !0, r !== o) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
                    this.cssText = e, this.t = t
                }
                get styleSheet() {
                    let e = this.o,
                        t = this.t;
                    if (n && void 0 === e) {
                        let r = void 0 !== t && 1 === t.length;
                        r && (e = a.get(t)), void 0 === e && ((this.o = e = new CSSStyleSheet).replaceSync(this.cssText), r && a.set(t, e))
                    }
                    return e
                }
                toString() {
                    return this.cssText
                }
            }
            let l = e => new s("string" == typeof e ? e : e + "", void 0, o),
                c = (e, t) => {
                    if (n) e.adoptedStyleSheets = t.map(e => e instanceof CSSStyleSheet ? e : e.styleSheet);
                    else
                        for (let r of t) {
                            let t = document.createElement("style"),
                                n = i.litNonce;
                            void 0 !== n && t.setAttribute("nonce", n), t.textContent = r.cssText, e.appendChild(t)
                        }
                },
                u = n ? e => e : e => e instanceof CSSStyleSheet ? (e => {
                    let t = "";
                    for (let r of e.cssRules) t += r.cssText;
                    return l(t)
                })(e) : e,
                {
                    is: d,
                    defineProperty: h,
                    getOwnPropertyDescriptor: p,
                    getOwnPropertyNames: f,
                    getOwnPropertySymbols: g,
                    getPrototypeOf: w
                } = Object,
                m = globalThis,
                v = m.trustedTypes,
                b = v ? v.emptyScript : "",
                y = m.reactiveElementPolyfillSupport,
                C = (e, t) => e,
                x = {
                    toAttribute(e, t) {
                        switch (t) {
                            case Boolean:
                                e = e ? b : null;
                                break;
                            case Object:
                            case Array:
                                e = null == e ? e : JSON.stringify(e)
                        }
                        return e
                    },
                    fromAttribute(e, t) {
                        let r = e;
                        switch (t) {
                            case Boolean:
                                r = null !== e;
                                break;
                            case Number:
                                r = null === e ? null : Number(e);
                                break;
                            case Object:
                            case Array:
                                try {
                                    r = JSON.parse(e)
                                } catch (e) {
                                    r = null
                                }
                        }
                        return r
                    }
                },
                _ = (e, t) => !d(e, t),
                E = {
                    attribute: !0,
                    type: String,
                    converter: x,
                    reflect: !1,
                    hasChanged: _
                };
            Symbol.metadata ? ? = Symbol("metadata"), m.litPropertyMetadata ? ? = new WeakMap;
            class S extends HTMLElement {
                static addInitializer(e) {
                    this._$Ei(), (this.l ? ? = []).push(e)
                }
                static get observedAttributes() {
                    return this.finalize(), this._$Eh && [...this._$Eh.keys()]
                }
                static createProperty(e, t = E) {
                    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
                        let r = Symbol(),
                            i = this.getPropertyDescriptor(e, r, t);
                        void 0 !== i && h(this.prototype, e, i)
                    }
                }
                static getPropertyDescriptor(e, t, r) {
                    let {
                        get: i,
                        set: n
                    } = p(this.prototype, e) ? ? {
                        get() {
                            return this[t]
                        },
                        set(e) {
                            this[t] = e
                        }
                    };
                    return {
                        get() {
                            return i ? .call(this)
                        },
                        set(t) {
                            let o = i ? .call(this);
                            n.call(this, t), this.requestUpdate(e, o, r)
                        },
                        configurable: !0,
                        enumerable: !0
                    }
                }
                static getPropertyOptions(e) {
                    return this.elementProperties.get(e) ? ? E
                }
                static _$Ei() {
                    if (this.hasOwnProperty(C("elementProperties"))) return;
                    let e = w(this);
                    e.finalize(), void 0 !== e.l && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties)
                }
                static finalize() {
                    if (this.hasOwnProperty(C("finalized"))) return;
                    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(C("properties"))) {
                        let e = this.properties;
                        for (let t of [...f(e), ...g(e)]) this.createProperty(t, e[t])
                    }
                    let e = this[Symbol.metadata];
                    if (null !== e) {
                        let t = litPropertyMetadata.get(e);
                        if (void 0 !== t)
                            for (let [e, r] of t) this.elementProperties.set(e, r)
                    }
                    for (let [e, t] of (this._$Eh = new Map, this.elementProperties)) {
                        let r = this._$Eu(e, t);
                        void 0 !== r && this._$Eh.set(r, e)
                    }
                    this.elementStyles = this.finalizeStyles(this.styles)
                }
                static finalizeStyles(e) {
                    let t = [];
                    if (Array.isArray(e))
                        for (let r of new Set(e.flat(1 / 0).reverse())) t.unshift(u(r));
                    else void 0 !== e && t.push(u(e));
                    return t
                }
                static _$Eu(e, t) {
                    let r = t.attribute;
                    return !1 === r ? void 0 : "string" == typeof r ? r : "string" == typeof e ? e.toLowerCase() : void 0
                }
                constructor() {
                    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev()
                }
                _$Ev() {
                    this._$Eg = new Promise(e => this.enableUpdating = e), this._$AL = new Map, this._$ES(), this.requestUpdate(), this.constructor.l ? .forEach(e => e(this))
                }
                addController(e) {
                    (this._$E_ ? ? = new Set).add(e), void 0 !== this.renderRoot && this.isConnected && e.hostConnected ? .()
                }
                removeController(e) {
                    this._$E_ ? .delete(e)
                }
                _$ES() {
                    let e = new Map;
                    for (let t of this.constructor.elementProperties.keys()) this.hasOwnProperty(t) && (e.set(t, this[t]), delete this[t]);
                    e.size > 0 && (this._$Ep = e)
                }
                createRenderRoot() {
                    let e = this.shadowRoot ? ? this.attachShadow(this.constructor.shadowRootOptions);
                    return c(e, this.constructor.elementStyles), e
                }
                connectedCallback() {
                    this.renderRoot ? ? = this.createRenderRoot(), this.enableUpdating(!0), this._$E_ ? .forEach(e => e.hostConnected ? .())
                }
                enableUpdating(e) {}
                disconnectedCallback() {
                    this._$E_ ? .forEach(e => e.hostDisconnected ? .())
                }
                attributeChangedCallback(e, t, r) {
                    this._$AK(e, r)
                }
                _$EO(e, t) {
                    let r = this.constructor.elementProperties.get(e),
                        i = this.constructor._$Eu(e, r);
                    if (void 0 !== i && !0 === r.reflect) {
                        let n = (void 0 !== r.converter ? .toAttribute ? r.converter : x).toAttribute(t, r.type);
                        this._$Em = e, null == n ? this.removeAttribute(i) : this.setAttribute(i, n), this._$Em = null
                    }
                }
                _$AK(e, t) {
                    let r = this.constructor,
                        i = r._$Eh.get(e);
                    if (void 0 !== i && this._$Em !== i) {
                        let e = r.getPropertyOptions(i),
                            n = "function" == typeof e.converter ? {
                                fromAttribute: e.converter
                            } : void 0 !== e.converter ? .fromAttribute ? e.converter : x;
                        this._$Em = i, this[i] = n.fromAttribute(t, e.type), this._$Em = null
                    }
                }
                requestUpdate(e, t, r, i = !1, n) {
                    if (void 0 !== e) {
                        if (!((r ? ? = this.constructor.getPropertyOptions(e)).hasChanged ? ? _)(i ? n : this[e], t)) return;
                        this.C(e, t, r)
                    }!1 === this.isUpdatePending && (this._$Eg = this._$EP())
                }
                C(e, t, r) {
                    this._$AL.has(e) || this._$AL.set(e, t), !0 === r.reflect && this._$Em !== e && (this._$Ej ? ? = new Set).add(e)
                }
                async _$EP() {
                    this.isUpdatePending = !0;
                    try {
                        await this._$Eg
                    } catch (e) {
                        Promise.reject(e)
                    }
                    let e = this.scheduleUpdate();
                    return null != e && await e, !this.isUpdatePending
                }
                scheduleUpdate() {
                    return this.performUpdate()
                }
                performUpdate() {
                    if (!this.isUpdatePending) return;
                    if (!this.hasUpdated) {
                        if (this.renderRoot ? ? = this.createRenderRoot(), this._$Ep) {
                            for (let [e, t] of this._$Ep) this[e] = t;
                            this._$Ep = void 0
                        }
                        let e = this.constructor.elementProperties;
                        if (e.size > 0)
                            for (let [t, r] of e) !0 !== r.wrapped || this._$AL.has(t) || void 0 === this[t] || this.C(t, this[t], r)
                    }
                    let e = !1,
                        t = this._$AL;
                    try {
                        (e = this.shouldUpdate(t)) ? (this.willUpdate(t), this._$E_ ? .forEach(e => e.hostUpdate ? .()), this.update(t)) : this._$ET()
                    } catch (t) {
                        throw e = !1, this._$ET(), t
                    }
                    e && this._$AE(t)
                }
                willUpdate(e) {}
                _$AE(e) {
                    this._$E_ ? .forEach(e => e.hostUpdated ? .()), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e)
                }
                _$ET() {
                    this._$AL = new Map, this.isUpdatePending = !1
                }
                get updateComplete() {
                    return this.getUpdateComplete()
                }
                getUpdateComplete() {
                    return this._$Eg
                }
                shouldUpdate(e) {
                    return !0
                }
                update(e) {
                    this._$Ej && = this._$Ej.forEach(e => this._$EO(e, this[e])), this._$ET()
                }
                updated(e) {}
                firstUpdated(e) {}
            }
            S.elementStyles = [], S.shadowRootOptions = {
                mode: "open"
            }, S[C("elementProperties")] = new Map, S[C("finalized")] = new Map, y ? .({
                ReactiveElement: S
            }), (m.reactiveElementVersions ? ? = []).push("2.0.2")
        },
        64647: function(e, t, r) {
            "use strict";
            r.d(t, {
                XM: function() {
                    return n
                },
                Xe: function() {
                    return o
                },
                pX: function() {
                    return i
                }
            });
            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let i = {
                    ATTRIBUTE: 1,
                    CHILD: 2,
                    PROPERTY: 3,
                    BOOLEAN_ATTRIBUTE: 4,
                    EVENT: 5,
                    ELEMENT: 6
                },
                n = e => (...t) => ({
                    _$litDirective$: e,
                    values: t
                });
            class o {
                constructor(e) {}
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AT(e, t, r) {
                    this._$Ct = e, this._$AM = t, this._$Ci = r
                }
                _$AS(e, t) {
                    return this.update(e, t)
                }
                update(e, t) {
                    return this.render(...t)
                }
            }
        },
        35377: function(e, t, r) {
            "use strict";
            r.d(t, {
                Jb: function() {
                    return E
                },
                Ld: function() {
                    return S
                },
                _$LH: function() {
                    return L
                }
            });
            /**
             * @license
             * Copyright 2017 Google LLC
             * SPDX-License-Identifier: BSD-3-Clause
             */
            let i = globalThis,
                n = i.trustedTypes,
                o = n ? n.createPolicy("lit-html", {
                    createHTML: e => e
                }) : void 0,
                a = "$lit$",
                s = `lit$${(Math.random()+"").slice(9)}$`,
                l = "?" + s,
                c = `<${l}>`,
                u = document,
                d = () => u.createComment(""),
                h = e => null === e || "object" != typeof e && "function" != typeof e,
                p = Array.isArray,
                f = e => p(e) || "function" == typeof e ? .[Symbol.iterator],
                g = "[ 	\n\f\r]",
                w = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,
                m = /-->/g,
                v = />/g,
                b = RegExp(`>|${g}(?:([^\\s"'>=/]+)(${g}*=${g}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"),
                y = /'/g,
                C = /"/g,
                x = /^(?:script|style|textarea|title)$/i,
                _ = e => (t, ...r) => ({
                    _$litType$: e,
                    strings: t,
                    values: r
                }),
                E = (_(1), _(2), Symbol.for("lit-noChange")),
                S = Symbol.for("lit-nothing"),
                k = new WeakMap,
                A = u.createTreeWalker(u, 129);

            function D(e, t) {
                if (!Array.isArray(e) || !e.hasOwnProperty("raw")) throw Error("invalid template strings array");
                return void 0 !== o ? o.createHTML(t) : t
            }
            let $ = (e, t) => {
                let r = e.length - 1,
                    i = [],
                    n, o = 2 === t ? "<svg>" : "",
                    l = w;
                for (let t = 0; t < r; t++) {
                    let r = e[t],
                        u, d, h = -1,
                        p = 0;
                    for (; p < r.length && (l.lastIndex = p, null !== (d = l.exec(r)));) p = l.lastIndex, l === w ? "!--" === d[1] ? l = m : void 0 !== d[1] ? l = v : void 0 !== d[2] ? (x.test(d[2]) && (n = RegExp("</" + d[2], "g")), l = b) : void 0 !== d[3] && (l = b) : l === b ? ">" === d[0] ? (l = n ? ? w, h = -1) : void 0 === d[1] ? h = -2 : (h = l.lastIndex - d[2].length, u = d[1], l = void 0 === d[3] ? b : '"' === d[3] ? C : y) : l === C || l === y ? l = b : l === m || l === v ? l = w : (l = b, n = void 0);
                    let f = l === b && e[t + 1].startsWith("/>") ? " " : "";
                    o += l === w ? r + c : h >= 0 ? (i.push(u), r.slice(0, h) + a + r.slice(h) + s + f) : r + s + (-2 === h ? t : f)
                }
                return [D(e, o + (e[r] || "<?>") + (2 === t ? "</svg>" : "")), i]
            };
            class R {
                constructor({
                    strings: e,
                    _$litType$: t
                }, r) {
                    let i;
                    this.parts = [];
                    let o = 0,
                        c = 0,
                        u = e.length - 1,
                        h = this.parts,
                        [p, f] = $(e, t);
                    if (this.el = R.createElement(p, r), A.currentNode = this.el.content, 2 === t) {
                        let e = this.el.content.firstChild;
                        e.replaceWith(...e.childNodes)
                    }
                    for (; null !== (i = A.nextNode()) && h.length < u;) {
                        if (1 === i.nodeType) {
                            if (i.hasAttributes())
                                for (let e of i.getAttributeNames())
                                    if (e.endsWith(a)) {
                                        let t = f[c++],
                                            r = i.getAttribute(e).split(s),
                                            n = /([.?@])?(.*)/.exec(t);
                                        h.push({
                                            type: 1,
                                            index: o,
                                            name: n[2],
                                            strings: r,
                                            ctor: "." === n[1] ? P : "?" === n[1] ? U : "@" === n[1] ? M : N
                                        }), i.removeAttribute(e)
                                    } else e.startsWith(s) && (h.push({
                                        type: 6,
                                        index: o
                                    }), i.removeAttribute(e));
                            if (x.test(i.tagName)) {
                                let e = i.textContent.split(s),
                                    t = e.length - 1;
                                if (t > 0) {
                                    i.textContent = n ? n.emptyScript : "";
                                    for (let r = 0; r < t; r++) i.append(e[r], d()), A.nextNode(), h.push({
                                        type: 2,
                                        index: ++o
                                    });
                                    i.append(e[t], d())
                                }
                            }
                        } else if (8 === i.nodeType) {
                            if (i.data === l) h.push({
                                type: 2,
                                index: o
                            });
                            else {
                                let e = -1;
                                for (; - 1 !== (e = i.data.indexOf(s, e + 1));) h.push({
                                    type: 7,
                                    index: o
                                }), e += s.length - 1
                            }
                        }
                        o++
                    }
                }
                static createElement(e, t) {
                    let r = u.createElement("template");
                    return r.innerHTML = e, r
                }
            }

            function O(e, t, r = e, i) {
                if (t === E) return t;
                let n = void 0 !== i ? r._$Co ? .[i] : r._$Cl,
                    o = h(t) ? void 0 : t._$litDirective$;
                return n ? .constructor !== o && (n ? ._$AO ? .(!1), void 0 === o ? n = void 0 : (n = new o(e))._$AT(e, r, i), void 0 !== i ? (r._$Co ? ? = [])[i] = n : r._$Cl = n), void 0 !== n && (t = O(e, n._$AS(e, t.values), n, i)), t
            }
            class I {
                constructor(e, t) {
                    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t
                }
                get parentNode() {
                    return this._$AM.parentNode
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                u(e) {
                    let {
                        el: {
                            content: t
                        },
                        parts: r
                    } = this._$AD, i = (e ? .creationScope ? ? u).importNode(t, !0);
                    A.currentNode = i;
                    let n = A.nextNode(),
                        o = 0,
                        a = 0,
                        s = r[0];
                    for (; void 0 !== s;) {
                        if (o === s.index) {
                            let t;
                            2 === s.type ? t = new T(n, n.nextSibling, this, e) : 1 === s.type ? t = new s.ctor(n, s.name, s.strings, this, e) : 6 === s.type && (t = new j(n, this, e)), this._$AV.push(t), s = r[++a]
                        }
                        o !== s ? .index && (n = A.nextNode(), o++)
                    }
                    return A.currentNode = u, i
                }
                p(e) {
                    let t = 0;
                    for (let r of this._$AV) void 0 !== r && (void 0 !== r.strings ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++
                }
            }
            class T {
                get _$AU() {
                    return this._$AM ? ._$AU ? ? this._$Cv
                }
                constructor(e, t, r, i) {
                    this.type = 2, this._$AH = S, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = i, this._$Cv = i ? .isConnected ? ? !0
                }
                get parentNode() {
                    let e = this._$AA.parentNode,
                        t = this._$AM;
                    return void 0 !== t && 11 === e ? .nodeType && (e = t.parentNode), e
                }
                get startNode() {
                    return this._$AA
                }
                get endNode() {
                    return this._$AB
                }
                _$AI(e, t = this) {
                    h(e = O(this, e, t)) ? e === S || null == e || "" === e ? (this._$AH !== S && this._$AR(), this._$AH = S) : e !== this._$AH && e !== E && this._(e) : void 0 !== e._$litType$ ? this.g(e) : void 0 !== e.nodeType ? this.$(e) : f(e) ? this.T(e) : this._(e)
                }
                k(e) {
                    return this._$AA.parentNode.insertBefore(e, this._$AB)
                }
                $(e) {
                    this._$AH !== e && (this._$AR(), this._$AH = this.k(e))
                }
                _(e) {
                    this._$AH !== S && h(this._$AH) ? this._$AA.nextSibling.data = e : this.$(u.createTextNode(e)), this._$AH = e
                }
                g(e) {
                    let {
                        values: t,
                        _$litType$: r
                    } = e, i = "number" == typeof r ? this._$AC(e) : (void 0 === r.el && (r.el = R.createElement(D(r.h, r.h[0]), this.options)), r);
                    if (this._$AH ? ._$AD === i) this._$AH.p(t);
                    else {
                        let e = new I(i, this),
                            r = e.u(this.options);
                        e.p(t), this.$(r), this._$AH = e
                    }
                }
                _$AC(e) {
                    let t = k.get(e.strings);
                    return void 0 === t && k.set(e.strings, t = new R(e)), t
                }
                T(e) {
                    p(this._$AH) || (this._$AH = [], this._$AR());
                    let t = this._$AH,
                        r, i = 0;
                    for (let n of e) i === t.length ? t.push(r = new T(this.k(d()), this.k(d()), this, this.options)) : r = t[i], r._$AI(n), i++;
                    i < t.length && (this._$AR(r && r._$AB.nextSibling, i), t.length = i)
                }
                _$AR(e = this._$AA.nextSibling, t) {
                    for (this._$AP ? .(!1, !0, t); e && e !== this._$AB;) {
                        let t = e.nextSibling;
                        e.remove(), e = t
                    }
                }
                setConnected(e) {
                    void 0 === this._$AM && (this._$Cv = e, this._$AP ? .(e))
                }
            }
            class N {
                get tagName() {
                    return this.element.tagName
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                constructor(e, t, r, i, n) {
                    this.type = 1, this._$AH = S, this._$AN = void 0, this.element = e, this.name = t, this._$AM = i, this.options = n, r.length > 2 || "" !== r[0] || "" !== r[1] ? (this._$AH = Array(r.length - 1).fill(new String), this.strings = r) : this._$AH = S
                }
                _$AI(e, t = this, r, i) {
                    let n = this.strings,
                        o = !1;
                    if (void 0 === n)(o = !h(e = O(this, e, t, 0)) || e !== this._$AH && e !== E) && (this._$AH = e);
                    else {
                        let i, a;
                        let s = e;
                        for (e = n[0], i = 0; i < n.length - 1; i++)(a = O(this, s[r + i], t, i)) === E && (a = this._$AH[i]), o || = !h(a) || a !== this._$AH[i], a === S ? e = S : e !== S && (e += (a ? ? "") + n[i + 1]), this._$AH[i] = a
                    }
                    o && !i && this.O(e)
                }
                O(e) {
                    e === S ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ? ? "")
                }
            }
            class P extends N {
                constructor() {
                    super(...arguments), this.type = 3
                }
                O(e) {
                    this.element[this.name] = e === S ? void 0 : e
                }
            }
            class U extends N {
                constructor() {
                    super(...arguments), this.type = 4
                }
                O(e) {
                    this.element.toggleAttribute(this.name, !!e && e !== S)
                }
            }
            class M extends N {
                constructor(e, t, r, i, n) {
                    super(e, t, r, i, n), this.type = 5
                }
                _$AI(e, t = this) {
                    if ((e = O(this, e, t, 0) ? ? S) === E) return;
                    let r = this._$AH,
                        i = e === S && r !== S || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive,
                        n = e !== S && (r === S || i);
                    i && this.element.removeEventListener(this.name, this, r), n && this.element.addEventListener(this.name, this, e), this._$AH = e
                }
                handleEvent(e) {
                    "function" == typeof this._$AH ? this._$AH.call(this.options ? .host ? ? this.element, e) : this._$AH.handleEvent(e)
                }
            }
            class j {
                constructor(e, t, r) {
                    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r
                }
                get _$AU() {
                    return this._$AM._$AU
                }
                _$AI(e) {
                    O(this, e)
                }
            }
            let L = {
                    j: a,
                    P: s,
                    A: l,
                    C: 1,
                    M: $,
                    L: I,
                    R: f,
                    V: O,
                    D: T,
                    I: N,
                    H: U,
                    N: M,
                    U: P,
                    B: j
                },
                B = i.litHtmlPolyfillSupport;
            B ? .(R, T), (i.litHtmlVersions ? ? = []).push("3.1.0")
        },
        50741: function(e, t, r) {
            "use strict";
            r.d(t, {
                E: function() {
                    return n
                }
            });
            var i = r(7541);

            function n(e = 0) {
                return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? (0, i.P)(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
            }
        },
        72281: function(e, t, r) {
            "use strict";
            r.d(t, {
                z: function() {
                    return o
                }
            });
            var i = r(50741),
                n = r(7541);

            function o(e, t) {
                t || (t = e.reduce((e, t) => e + t.length, 0));
                let r = (0, i.E)(t),
                    o = 0;
                for (let t of e) r.set(t, o), o += t.length;
                return (0, n.P)(r)
            }
        },
        34901: function(e, t, r) {
            "use strict";
            r.d(t, {
                m: function() {
                    return o
                }
            });
            var i = r(85418),
                n = r(7541);

            function o(e, t = "utf8") {
                let r = i.Z[t];
                if (!r) throw Error(`Unsupported encoding "${t}"`);
                return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? (0, n.P)(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`)
            }
        },
        71188: function(e, t, r) {
            "use strict";
            r.d(t, {
                BB: function() {
                    return o.B
                },
                mL: function() {
                    return n.m
                },
                zo: function() {
                    return i.z
                }
            });
            var i = r(72281),
                n = r(34901),
                o = r(21361)
        },
        21361: function(e, t, r) {
            "use strict";
            r.d(t, {
                B: function() {
                    return n
                }
            });
            var i = r(85418);

            function n(e, t = "utf8") {
                let r = i.Z[t];
                if (!r) throw Error(`Unsupported encoding "${t}"`);
                return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? globalThis.Buffer.from(e.buffer, e.byteOffset, e.byteLength).toString("utf8") : r.encoder.encode(e).substring(1)
            }
        },
        7541: function(e, t, r) {
            "use strict";

            function i(e) {
                return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
            }
            r.d(t, {
                P: function() {
                    return i
                }
            })
        },
        85418: function(e, t, r) {
            "use strict";
            r.d(t, {
                Z: function() {
                    return eV
                }
            });
            var i = {};
            r.r(i), r.d(i, {
                identity: function() {
                    return I
                }
            });
            var n = {};
            r.r(n), r.d(n, {
                base2: function() {
                    return T
                }
            });
            var o = {};
            r.r(o), r.d(o, {
                base8: function() {
                    return N
                }
            });
            var a = {};
            r.r(a), r.d(a, {
                base10: function() {
                    return P
                }
            });
            var s = {};
            r.r(s), r.d(s, {
                base16: function() {
                    return U
                },
                base16upper: function() {
                    return M
                }
            });
            var l = {};
            r.r(l), r.d(l, {
                base32: function() {
                    return j
                },
                base32hex: function() {
                    return W
                },
                base32hexpad: function() {
                    return F
                },
                base32hexpadupper: function() {
                    return H
                },
                base32hexupper: function() {
                    return Z
                },
                base32pad: function() {
                    return B
                },
                base32padupper: function() {
                    return z
                },
                base32upper: function() {
                    return L
                },
                base32z: function() {
                    return V
                }
            });
            var c = {};
            r.r(c), r.d(c, {
                base36: function() {
                    return Y
                },
                base36upper: function() {
                    return K
                }
            });
            var u = {};
            r.r(u), r.d(u, {
                base58btc: function() {
                    return q
                },
                base58flickr: function() {
                    return G
                }
            });
            var d = {};
            r.r(d), r.d(d, {
                base64: function() {
                    return X
                },
                base64pad: function() {
                    return J
                },
                base64url: function() {
                    return Q
                },
                base64urlpad: function() {
                    return ee
                }
            });
            var h = {};
            r.r(h), r.d(h, {
                base256emoji: function() {
                    return en
                }
            });
            var p = {};
            r.r(p), r.d(p, {
                sha256: function() {
                    return ew
                },
                sha512: function() {
                    return em
                }
            });
            var f = {};
            r.r(f), r.d(f, {
                identity: function() {
                    return ev
                }
            });
            var g = {};
            r.r(g), r.d(g, {
                code: function() {
                    return ey
                },
                decode: function() {
                    return ex
                },
                encode: function() {
                    return eC
                },
                name: function() {
                    return eb
                }
            });
            var w = {};
            r.r(w), r.d(w, {
                code: function() {
                    return ek
                },
                decode: function() {
                    return eD
                },
                encode: function() {
                    return eA
                },
                name: function() {
                    return eS
                }
            });
            var m = function(e, t) {
                if (e.length >= 255) throw TypeError("Alphabet too long");
                for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
                for (var n = 0; n < e.length; n++) {
                    var o = e.charAt(n),
                        a = o.charCodeAt(0);
                    if (255 !== r[a]) throw TypeError(o + " is ambiguous");
                    r[a] = n
                }
                var s = e.length,
                    l = e.charAt(0),
                    c = Math.log(s) / Math.log(256),
                    u = Math.log(256) / Math.log(s);

                function d(e) {
                    if ("string" != typeof e) throw TypeError("Expected String");
                    if (0 === e.length) return new Uint8Array;
                    var t = 0;
                    if (" " !== e[0]) {
                        for (var i = 0, n = 0; e[t] === l;) i++, t++;
                        for (var o = (e.length - t) * c + 1 >>> 0, a = new Uint8Array(o); e[t];) {
                            var u = r[e.charCodeAt(t)];
                            if (255 === u) return;
                            for (var d = 0, h = o - 1;
                                (0 !== u || d < n) && -1 !== h; h--, d++) u += s * a[h] >>> 0, a[h] = u % 256 >>> 0, u = u / 256 >>> 0;
                            if (0 !== u) throw Error("Non-zero carry");
                            n = d, t++
                        }
                        if (" " !== e[t]) {
                            for (var p = o - n; p !== o && 0 === a[p];) p++;
                            for (var f = new Uint8Array(i + (o - p)), g = i; p !== o;) f[g++] = a[p++];
                            return f
                        }
                    }
                }
                return {
                    encode: function(t) {
                        if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                        if (0 === t.length) return "";
                        for (var r = 0, i = 0, n = 0, o = t.length; n !== o && 0 === t[n];) n++, r++;
                        for (var a = (o - n) * u + 1 >>> 0, c = new Uint8Array(a); n !== o;) {
                            for (var d = t[n], h = 0, p = a - 1;
                                (0 !== d || h < i) && -1 !== p; p--, h++) d += 256 * c[p] >>> 0, c[p] = d % s >>> 0, d = d / s >>> 0;
                            if (0 !== d) throw Error("Non-zero carry");
                            i = h, n++
                        }
                        for (var f = a - i; f !== a && 0 === c[f];) f++;
                        for (var g = l.repeat(r); f < a; ++f) g += e.charAt(c[f]);
                        return g
                    },
                    decodeUnsafe: d,
                    decode: function(e) {
                        var r = d(e);
                        if (r) return r;
                        throw Error(`Non-${t} character`)
                    }
                }
            };
            new Uint8Array(0);
            let v = (e, t) => {
                    if (e === t) return !0;
                    if (e.byteLength !== t.byteLength) return !1;
                    for (let r = 0; r < e.byteLength; r++)
                        if (e[r] !== t[r]) return !1;
                    return !0
                },
                b = e => {
                    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                    if (e instanceof ArrayBuffer) return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                y = e => new TextEncoder().encode(e),
                C = e => new TextDecoder().decode(e);
            class x {
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class _ {
                constructor(e, t, r) {
                    if (this.name = e, this.prefix = t, void 0 === t.codePointAt(0)) throw Error("Invalid prefix character");
                    this.prefixCodePoint = t.codePointAt(0), this.baseDecode = r
                }
                decode(e) {
                    if ("string" == typeof e) {
                        if (e.codePointAt(0) !== this.prefixCodePoint) throw Error(`Unable to decode multibase string ${JSON.stringify(e)}, ${this.name} decoder only supports inputs prefixed with ${this.prefix}`);
                        return this.baseDecode(e.slice(this.prefix.length))
                    }
                    throw Error("Can only multibase decode strings")
                }
                or(e) {
                    return S(this, e)
                }
            }
            class E {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return S(this, e)
                }
                decode(e) {
                    let t = e[0],
                        r = this.decoders[t];
                    if (r) return r.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            let S = (e, t) => new E({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class k {
                constructor(e, t, r, i) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new x(e, t, r), this.decoder = new _(e, t, i)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            let A = ({
                    name: e,
                    prefix: t,
                    encode: r,
                    decode: i
                }) => new k(e, t, r, i),
                D = ({
                    prefix: e,
                    name: t,
                    alphabet: r
                }) => {
                    let {
                        encode: i,
                        decode: n
                    } = m(r, t);
                    return A({
                        prefix: e,
                        name: t,
                        encode: i,
                        decode: e => b(n(e))
                    })
                },
                $ = (e, t, r, i) => {
                    let n = {};
                    for (let e = 0; e < t.length; ++e) n[t[e]] = e;
                    let o = e.length;
                    for (;
                        "=" === e[o - 1];) --o;
                    let a = new Uint8Array(o * r / 8 | 0),
                        s = 0,
                        l = 0,
                        c = 0;
                    for (let t = 0; t < o; ++t) {
                        let o = n[e[t]];
                        if (void 0 === o) throw SyntaxError(`Non-${i} character`);
                        l = l << r | o, (s += r) >= 8 && (s -= 8, a[c++] = 255 & l >> s)
                    }
                    if (s >= r || 255 & l << 8 - s) throw SyntaxError("Unexpected end of data");
                    return a
                },
                R = (e, t, r) => {
                    let i = "=" === t[t.length - 1],
                        n = (1 << r) - 1,
                        o = "",
                        a = 0,
                        s = 0;
                    for (let i = 0; i < e.length; ++i)
                        for (s = s << 8 | e[i], a += 8; a > r;) a -= r, o += t[n & s >> a];
                    if (a && (o += t[n & s << r - a]), i)
                        for (; o.length * r & 7;) o += "=";
                    return o
                },
                O = ({
                    name: e,
                    prefix: t,
                    bitsPerChar: r,
                    alphabet: i
                }) => A({
                    prefix: t,
                    name: e,
                    encode: e => R(e, i, r),
                    decode: t => $(t, i, r, e)
                }),
                I = A({
                    prefix: "\x00",
                    name: "identity",
                    encode: e => C(e),
                    decode: e => y(e)
                }),
                T = O({
                    prefix: "0",
                    name: "base2",
                    alphabet: "01",
                    bitsPerChar: 1
                }),
                N = O({
                    prefix: "7",
                    name: "base8",
                    alphabet: "01234567",
                    bitsPerChar: 3
                }),
                P = D({
                    prefix: "9",
                    name: "base10",
                    alphabet: "0123456789"
                }),
                U = O({
                    prefix: "f",
                    name: "base16",
                    alphabet: "0123456789abcdef",
                    bitsPerChar: 4
                }),
                M = O({
                    prefix: "F",
                    name: "base16upper",
                    alphabet: "0123456789ABCDEF",
                    bitsPerChar: 4
                }),
                j = O({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                L = O({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                B = O({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                z = O({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                W = O({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                Z = O({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                }),
                F = O({
                    prefix: "t",
                    name: "base32hexpad",
                    alphabet: "0123456789abcdefghijklmnopqrstuv=",
                    bitsPerChar: 5
                }),
                H = O({
                    prefix: "T",
                    name: "base32hexpadupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                    bitsPerChar: 5
                }),
                V = O({
                    prefix: "h",
                    name: "base32z",
                    alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                    bitsPerChar: 5
                }),
                Y = D({
                    prefix: "k",
                    name: "base36",
                    alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                }),
                K = D({
                    prefix: "K",
                    name: "base36upper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                }),
                q = D({
                    name: "base58btc",
                    prefix: "z",
                    alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                }),
                G = D({
                    name: "base58flickr",
                    prefix: "Z",
                    alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                }),
                X = O({
                    prefix: "m",
                    name: "base64",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                    bitsPerChar: 6
                }),
                J = O({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                Q = O({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                ee = O({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                }),
                et = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                er = et.reduce((e, t, r) => (e[r] = t, e), []),
                ei = et.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []),
                en = A({
                    prefix: "\uD83D\uDE80",
                    name: "base256emoji",
                    encode: function(e) {
                        return e.reduce((e, t) => e += er[t], "")
                    },
                    decode: function(e) {
                        let t = [];
                        for (let r of e) {
                            let e = ei[r.codePointAt(0)];
                            if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
                            t.push(e)
                        }
                        return new Uint8Array(t)
                    }
                });
            var eo = {
                encode: function e(t, r, i) {
                    r = r || [];
                    for (var n = i = i || 0; t >= 2147483648;) r[i++] = 255 & t | 128, t /= 128;
                    for (; - 128 & t;) r[i++] = 255 & t | 128, t >>>= 7;
                    return r[i] = 0 | t, e.bytes = i - n + 1, r
                },
                decode: function e(t, r) {
                    var i, n = 0,
                        r = r || 0,
                        o = 0,
                        a = r,
                        s = t.length;
                    do {
                        if (a >= s) throw e.bytes = 0, RangeError("Could not decode varint");
                        i = t[a++], n += o < 28 ? (127 & i) << o : (127 & i) * Math.pow(2, o), o += 7
                    } while (i >= 128);
                    return e.bytes = a - r, n
                },
                encodingLength: function(e) {
                    return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10
                }
            };
            let ea = (e, t = 0) => [eo.decode(e, t), eo.decode.bytes],
                es = (e, t, r = 0) => (eo.encode(e, t, r), t),
                el = e => eo.encodingLength(e),
                ec = (e, t) => {
                    let r = t.byteLength,
                        i = el(e),
                        n = i + el(r),
                        o = new Uint8Array(n + r);
                    return es(e, o, 0), es(r, o, i), o.set(t, n), new eh(e, r, t, o)
                },
                eu = e => {
                    let t = b(e),
                        [r, i] = ea(t),
                        [n, o] = ea(t.subarray(i)),
                        a = t.subarray(i + o);
                    if (a.byteLength !== n) throw Error("Incorrect length");
                    return new eh(r, n, a, t)
                },
                ed = (e, t) => e === t || e.code === t.code && e.size === t.size && v(e.bytes, t.bytes);
            class eh {
                constructor(e, t, r, i) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = i
                }
            }
            let ep = ({
                name: e,
                code: t,
                encode: r
            }) => new ef(e, t, r);
            class ef {
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        let t = this.encode(e);
                        return t instanceof Uint8Array ? ec(this.code, t) : t.then(e => ec(this.code, e))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            let eg = e => async t => new Uint8Array(await crypto.subtle.digest(e, t)),
                ew = ep({
                    name: "sha2-256",
                    code: 18,
                    encode: eg("SHA-256")
                }),
                em = ep({
                    name: "sha2-512",
                    code: 19,
                    encode: eg("SHA-512")
                }),
                ev = {
                    code: 0,
                    name: "identity",
                    encode: b,
                    digest: e => ec(0, b(e))
                },
                eb = "raw",
                ey = 85,
                eC = e => b(e),
                ex = e => b(e),
                e_ = new TextEncoder,
                eE = new TextDecoder,
                eS = "json",
                ek = 512,
                eA = e => e_.encode(JSON.stringify(e)),
                eD = e => JSON.parse(eE.decode(e));
            class e$ {
                constructor(e, t, r, i) {
                    this.code = t, this.version = e, this.multihash = r, this.bytes = i, this.byteOffset = i.byteOffset, this.byteLength = i.byteLength, this.asCID = this, this._baseCache = new Map, Object.defineProperties(this, {
                        byteOffset: ej,
                        byteLength: ej,
                        code: eM,
                        version: eM,
                        multihash: eM,
                        bytes: eM,
                        _baseCache: ej,
                        asCID: ej
                    })
                }
                toV0() {
                    if (0 === this.version) return this; {
                        let {
                            code: e,
                            multihash: t
                        } = this;
                        if (e !== eT) throw Error("Cannot convert a non dag-pb CID to CIDv0");
                        if (t.code !== eN) throw Error("Cannot convert non sha2-256 multihash CID to CIDv0");
                        return e$.createV0(t)
                    }
                }
                toV1() {
                    switch (this.version) {
                        case 0:
                            {
                                let {
                                    code: e,
                                    digest: t
                                } = this.multihash,
                                r = ec(e, t);
                                return e$.createV1(this.code, r)
                            }
                        case 1:
                            return this;
                        default:
                            throw Error(`Can not convert CID version ${this.version} to version 0. This is a bug please report`)
                    }
                }
                equals(e) {
                    return e && this.code === e.code && this.version === e.version && ed(this.multihash, e.multihash)
                }
                toString(e) {
                    let {
                        bytes: t,
                        version: r,
                        _baseCache: i
                    } = this;
                    return 0 === r ? eO(t, i, e || q.encoder) : eI(t, i, e || j.encoder)
                }
                toJSON() {
                    return {
                        code: this.code,
                        version: this.version,
                        hash: this.multihash.bytes
                    }
                }
                get[Symbol.toStringTag]() {
                    return "CID"
                }[Symbol.for("nodejs.util.inspect.custom")]() {
                    return "CID(" + this.toString() + ")"
                }
                static isCID(e) {
                    return eL(/^0\.0/, eB), !!(e && (e[eU] || e.asCID === e))
                }
                get toBaseEncodedString() {
                    throw Error("Deprecated, use .toString()")
                }
                get codec() {
                    throw Error('"codec" property is deprecated, use integer "code" property instead')
                }
                get buffer() {
                    throw Error("Deprecated .buffer property, use .bytes to get Uint8Array instead")
                }
                get multibaseName() {
                    throw Error('"multibaseName" property is deprecated')
                }
                get prefix() {
                    throw Error('"prefix" property is deprecated')
                }
                static asCID(e) {
                    if (e instanceof e$) return e;
                    if (null != e && e.asCID === e) {
                        let {
                            version: t,
                            code: r,
                            multihash: i,
                            bytes: n
                        } = e;
                        return new e$(t, r, i, n || eP(t, r, i.bytes))
                    }
                    if (null == e || !0 !== e[eU]) return null; {
                        let {
                            version: t,
                            multihash: r,
                            code: i
                        } = e, n = eu(r);
                        return e$.create(t, i, n)
                    }
                }
                static create(e, t, r) {
                    if ("number" != typeof t) throw Error("String codecs are no longer supported");
                    switch (e) {
                        case 0:
                            if (t === eT) return new e$(e, t, r, r.bytes);
                            throw Error(`Version 0 CID must use dag-pb (code: ${eT}) block encoding`);
                        case 1:
                            {
                                let i = eP(e, t, r.bytes);
                                return new e$(e, t, r, i)
                            }
                        default:
                            throw Error("Invalid version")
                    }
                }
                static createV0(e) {
                    return e$.create(0, eT, e)
                }
                static createV1(e, t) {
                    return e$.create(1, e, t)
                }
                static decode(e) {
                    let [t, r] = e$.decodeFirst(e);
                    if (r.length) throw Error("Incorrect length");
                    return t
                }
                static decodeFirst(e) {
                    let t = e$.inspectBytes(e),
                        r = t.size - t.multihashSize,
                        i = b(e.subarray(r, r + t.multihashSize));
                    if (i.byteLength !== t.multihashSize) throw Error("Incorrect length");
                    let n = i.subarray(t.multihashSize - t.digestSize),
                        o = new eh(t.multihashCode, t.digestSize, n, i);
                    return [0 === t.version ? e$.createV0(o) : e$.createV1(t.codec, o), e.subarray(t.size)]
                }
                static inspectBytes(e) {
                    let t = 0,
                        r = () => {
                            let [r, i] = ea(e.subarray(t));
                            return t += i, r
                        },
                        i = r(),
                        n = eT;
                    if (18 === i ? (i = 0, t = 0) : 1 === i && (n = r()), 0 !== i && 1 !== i) throw RangeError(`Invalid CID version ${i}`);
                    let o = t,
                        a = r(),
                        s = r(),
                        l = t + s;
                    return {
                        version: i,
                        codec: n,
                        multihashCode: a,
                        digestSize: s,
                        multihashSize: l - o,
                        size: l
                    }
                }
                static parse(e, t) {
                    let [r, i] = eR(e, t), n = e$.decode(i);
                    return n._baseCache.set(r, e), n
                }
            }
            let eR = (e, t) => {
                    switch (e[0]) {
                        case "Q":
                            return [q.prefix, (t || q).decode(`${q.prefix}${e}`)];
                        case q.prefix:
                            return [q.prefix, (t || q).decode(e)];
                        case j.prefix:
                            return [j.prefix, (t || j).decode(e)];
                        default:
                            if (null == t) throw Error("To parse non base32 or base58btc encoded CID multibase decoder must be provided");
                            return [e[0], t.decode(e)]
                    }
                },
                eO = (e, t, r) => {
                    let {
                        prefix: i
                    } = r;
                    if (i !== q.prefix) throw Error(`Cannot string encode V0 in ${r.name} encoding`);
                    let n = t.get(i);
                    if (null != n) return n; {
                        let n = r.encode(e).slice(1);
                        return t.set(i, n), n
                    }
                },
                eI = (e, t, r) => {
                    let {
                        prefix: i
                    } = r, n = t.get(i);
                    if (null != n) return n; {
                        let n = r.encode(e);
                        return t.set(i, n), n
                    }
                },
                eT = 112,
                eN = 18,
                eP = (e, t, r) => {
                    let i = el(e),
                        n = i + el(t),
                        o = new Uint8Array(n + r.byteLength);
                    return es(e, o, 0), es(t, o, i), o.set(r, n), o
                },
                eU = Symbol.for("@ipld/js-cid/CID"),
                eM = {
                    writable: !1,
                    configurable: !1,
                    enumerable: !0
                },
                ej = {
                    writable: !1,
                    enumerable: !1,
                    configurable: !1
                },
                eL = (e, t) => {
                    if (e.test("0.0.0-dev")) console.warn(t);
                    else throw Error(t)
                },
                eB = `CID.isCID(v) is deprecated and will be removed in the next major release.
Following code pattern:

if (CID.isCID(value)) {
  doSomethingWithCID(value)
}

Is replaced with:

const cid = CID.asCID(value)
if (cid) {
  // Make sure to use cid instead of value
  doSomethingWithCID(cid)
}
`,
                ez = { ...i,
                    ...n,
                    ...o,
                    ...a,
                    ...s,
                    ...l,
                    ...c,
                    ...u,
                    ...d,
                    ...h
                };
            ({ ...p,
                ...f
            });
            var eW = r(50741);

            function eZ(e, t, r, i) {
                return {
                    name: e,
                    prefix: t,
                    encoder: {
                        name: e,
                        prefix: t,
                        encode: r
                    },
                    decoder: {
                        decode: i
                    }
                }
            }
            let eF = eZ("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1))),
                eH = eZ("ascii", "a", e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }, e => {
                    e = e.substring(1);
                    let t = (0, eW.E)(e.length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                });
            var eV = {
                utf8: eF,
                "utf-8": eF,
                hex: ez.base16,
                latin1: eH,
                ascii: eH,
                binary: eH,
                ...ez
            }
        }
    }
]);