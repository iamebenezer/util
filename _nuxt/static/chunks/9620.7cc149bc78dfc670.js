(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9620], {
        80237: function(e, t, r) {
            "use strict";
            t.Xx = t._w = t.aP = t.KS = t.jQ = void 0, r(35077);
            let i = r(52564);

            function n(e) {
                let t = new Float64Array(16);
                if (e)
                    for (let r = 0; r < e.length; r++) t[r] = e[r];
                return t
            }
            r(55277), t.jQ = 64, t.KS = 64, t.aP = 32, new Uint8Array(32)[0] = 9;
            let s = n(),
                o = n([1]),
                a = (n([30883, 4953, 19914, 30187, 55467, 16705, 2637, 112, 59544, 30585, 16505, 36039, 65139, 11119, 27886, 20995]), n([61785, 9906, 39828, 60374, 45398, 33411, 5274, 224, 53552, 61171, 33010, 6542, 64743, 22239, 55772, 9222])),
                c = n([54554, 36645, 11616, 51542, 42930, 38181, 51040, 26924, 56412, 64982, 57905, 49316, 21502, 52590, 14035, 8553]),
                u = n([26200, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214, 26214]);

            function l(e, t) {
                for (let r = 0; r < 16; r++) e[r] = 0 | t[r]
            }

            function h(e) {
                let t = 1;
                for (let r = 0; r < 16; r++) {
                    let i = e[r] + t + 65535;
                    t = Math.floor(i / 65536), e[r] = i - 65536 * t
                }
                e[0] += t - 1 + 37 * (t - 1)
            }

            function f(e, t, r) {
                let i = ~(r - 1);
                for (let r = 0; r < 16; r++) {
                    let n = i & (e[r] ^ t[r]);
                    e[r] ^= n, t[r] ^= n
                }
            }

            function p(e, t) {
                let r = n(),
                    i = n();
                for (let e = 0; e < 16; e++) i[e] = t[e];
                h(i), h(i), h(i);
                for (let e = 0; e < 2; e++) {
                    r[0] = i[0] - 65517;
                    for (let e = 1; e < 15; e++) r[e] = i[e] - 65535 - (r[e - 1] >> 16 & 1), r[e - 1] &= 65535;
                    r[15] = i[15] - 32767 - (r[14] >> 16 & 1);
                    let e = r[15] >> 16 & 1;
                    r[14] &= 65535, f(i, r, 1 - e)
                }
                for (let t = 0; t < 16; t++) e[2 * t] = 255 & i[t], e[2 * t + 1] = i[t] >> 8
            }
            n([41136, 18958, 6951, 50414, 58488, 44335, 6150, 12099, 55207, 15867, 153, 11085, 57099, 20417, 9344, 11139]);

            function d(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] + r[i]
            }

            function g(e, t, r) {
                for (let i = 0; i < 16; i++) e[i] = t[i] - r[i]
            }

            function y(e, t, r) {
                let i, n, s = 0,
                    o = 0,
                    a = 0,
                    c = 0,
                    u = 0,
                    l = 0,
                    h = 0,
                    f = 0,
                    p = 0,
                    d = 0,
                    g = 0,
                    y = 0,
                    v = 0,
                    m = 0,
                    b = 0,
                    _ = 0,
                    w = 0,
                    E = 0,
                    I = 0,
                    P = 0,
                    S = 0,
                    O = 0,
                    x = 0,
                    N = 0,
                    R = 0,
                    A = 0,
                    C = 0,
                    j = 0,
                    T = 0,
                    L = 0,
                    D = 0,
                    k = r[0],
                    M = r[1],
                    q = r[2],
                    $ = r[3],
                    U = r[4],
                    z = r[5],
                    H = r[6],
                    B = r[7],
                    V = r[8],
                    K = r[9],
                    F = r[10],
                    W = r[11],
                    G = r[12],
                    Q = r[13],
                    J = r[14],
                    Y = r[15];
                s += (i = t[0]) * k, o += i * M, a += i * q, c += i * $, u += i * U, l += i * z, h += i * H, f += i * B, p += i * V, d += i * K, g += i * F, y += i * W, v += i * G, m += i * Q, b += i * J, _ += i * Y, o += (i = t[1]) * k, a += i * M, c += i * q, u += i * $, l += i * U, h += i * z, f += i * H, p += i * B, d += i * V, g += i * K, y += i * F, v += i * W, m += i * G, b += i * Q, _ += i * J, w += i * Y, a += (i = t[2]) * k, c += i * M, u += i * q, l += i * $, h += i * U, f += i * z, p += i * H, d += i * B, g += i * V, y += i * K, v += i * F, m += i * W, b += i * G, _ += i * Q, w += i * J, E += i * Y, c += (i = t[3]) * k, u += i * M, l += i * q, h += i * $, f += i * U, p += i * z, d += i * H, g += i * B, y += i * V, v += i * K, m += i * F, b += i * W, _ += i * G, w += i * Q, E += i * J, I += i * Y, u += (i = t[4]) * k, l += i * M, h += i * q, f += i * $, p += i * U, d += i * z, g += i * H, y += i * B, v += i * V, m += i * K, b += i * F, _ += i * W, w += i * G, E += i * Q, I += i * J, P += i * Y, l += (i = t[5]) * k, h += i * M, f += i * q, p += i * $, d += i * U, g += i * z, y += i * H, v += i * B, m += i * V, b += i * K, _ += i * F, w += i * W, E += i * G, I += i * Q, P += i * J, S += i * Y, h += (i = t[6]) * k, f += i * M, p += i * q, d += i * $, g += i * U, y += i * z, v += i * H, m += i * B, b += i * V, _ += i * K, w += i * F, E += i * W, I += i * G, P += i * Q, S += i * J, O += i * Y, f += (i = t[7]) * k, p += i * M, d += i * q, g += i * $, y += i * U, v += i * z, m += i * H, b += i * B, _ += i * V, w += i * K, E += i * F, I += i * W, P += i * G, S += i * Q, O += i * J, x += i * Y, p += (i = t[8]) * k, d += i * M, g += i * q, y += i * $, v += i * U, m += i * z, b += i * H, _ += i * B, w += i * V, E += i * K, I += i * F, P += i * W, S += i * G, O += i * Q, x += i * J, N += i * Y, d += (i = t[9]) * k, g += i * M, y += i * q, v += i * $, m += i * U, b += i * z, _ += i * H, w += i * B, E += i * V, I += i * K, P += i * F, S += i * W, O += i * G, x += i * Q, N += i * J, R += i * Y, g += (i = t[10]) * k, y += i * M, v += i * q, m += i * $, b += i * U, _ += i * z, w += i * H, E += i * B, I += i * V, P += i * K, S += i * F, O += i * W, x += i * G, N += i * Q, R += i * J, A += i * Y, y += (i = t[11]) * k, v += i * M, m += i * q, b += i * $, _ += i * U, w += i * z, E += i * H, I += i * B, P += i * V, S += i * K, O += i * F, x += i * W, N += i * G, R += i * Q, A += i * J, C += i * Y, v += (i = t[12]) * k, m += i * M, b += i * q, _ += i * $, w += i * U, E += i * z, I += i * H, P += i * B, S += i * V, O += i * K, x += i * F, N += i * W, R += i * G, A += i * Q, C += i * J, j += i * Y, m += (i = t[13]) * k, b += i * M, _ += i * q, w += i * $, E += i * U, I += i * z, P += i * H, S += i * B, O += i * V, x += i * K, N += i * F, R += i * W, A += i * G, C += i * Q, j += i * J, T += i * Y, b += (i = t[14]) * k, _ += i * M, w += i * q, E += i * $, I += i * U, P += i * z, S += i * H, O += i * B, x += i * V, N += i * K, R += i * F, A += i * W, C += i * G, j += i * Q, T += i * J, L += i * Y, _ += (i = t[15]) * k, w += i * M, E += i * q, I += i * $, P += i * U, S += i * z, O += i * H, x += i * B, N += i * V, R += i * K, A += i * F, C += i * W, j += i * G, T += i * Q, L += i * J, D += i * Y, s += 38 * w, o += 38 * E, a += 38 * I, c += 38 * P, u += 38 * S, l += 38 * O, h += 38 * x, f += 38 * N, p += 38 * R, d += 38 * A, g += 38 * C, y += 38 * j, v += 38 * T, m += 38 * L, b += 38 * D, n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, n = Math.floor((i = _ + n + 65535) / 65536), _ = i - 65536 * n, s += n - 1 + 37 * (n - 1), n = Math.floor((i = s + (n = 1) + 65535) / 65536), s = i - 65536 * n, n = Math.floor((i = o + n + 65535) / 65536), o = i - 65536 * n, n = Math.floor((i = a + n + 65535) / 65536), a = i - 65536 * n, n = Math.floor((i = c + n + 65535) / 65536), c = i - 65536 * n, n = Math.floor((i = u + n + 65535) / 65536), u = i - 65536 * n, n = Math.floor((i = l + n + 65535) / 65536), l = i - 65536 * n, n = Math.floor((i = h + n + 65535) / 65536), h = i - 65536 * n, n = Math.floor((i = f + n + 65535) / 65536), f = i - 65536 * n, n = Math.floor((i = p + n + 65535) / 65536), p = i - 65536 * n, n = Math.floor((i = d + n + 65535) / 65536), d = i - 65536 * n, n = Math.floor((i = g + n + 65535) / 65536), g = i - 65536 * n, n = Math.floor((i = y + n + 65535) / 65536), y = i - 65536 * n, n = Math.floor((i = v + n + 65535) / 65536), v = i - 65536 * n, n = Math.floor((i = m + n + 65535) / 65536), m = i - 65536 * n, n = Math.floor((i = b + n + 65535) / 65536), b = i - 65536 * n, n = Math.floor((i = _ + n + 65535) / 65536), _ = i - 65536 * n, s += n - 1 + 37 * (n - 1), e[0] = s, e[1] = o, e[2] = a, e[3] = c, e[4] = u, e[5] = l, e[6] = h, e[7] = f, e[8] = p, e[9] = d, e[10] = g, e[11] = y, e[12] = v, e[13] = m, e[14] = b, e[15] = _
            }

            function v(e, t) {
                let r = n(),
                    i = n(),
                    s = n(),
                    o = n(),
                    c = n(),
                    u = n(),
                    l = n(),
                    h = n(),
                    f = n();
                g(r, e[1], e[0]), g(f, t[1], t[0]), y(r, r, f), d(i, e[0], e[1]), d(f, t[0], t[1]), y(i, i, f), y(s, e[3], t[3]), y(s, s, a), y(o, e[2], t[2]), d(o, o, o), g(c, i, r), g(u, o, s), d(l, o, s), d(h, i, r), y(e[0], c, u), y(e[1], h, l), y(e[2], l, u), y(e[3], c, h)
            }

            function m(e, t, r) {
                for (let i = 0; i < 4; i++) f(e[i], t[i], r)
            }

            function b(e, t) {
                let r = n(),
                    i = n(),
                    s = n();
                (function(e, t) {
                    let r;
                    let i = n();
                    for (r = 0; r < 16; r++) i[r] = t[r];
                    for (r = 253; r >= 0; r--) y(i, i, i), 2 !== r && 4 !== r && y(i, i, t);
                    for (r = 0; r < 16; r++) e[r] = i[r]
                })(s, t[2]), y(r, t[0], s), y(i, t[1], s), p(e, i), e[31] ^= function(e) {
                    let t = new Uint8Array(32);
                    return p(t, e), 1 & t[0]
                }(r) << 7
            }

            function _(e, t) {
                let r = [n(), n(), n(), n()];
                l(r[0], c), l(r[1], u), l(r[2], o), y(r[3], c, u),
                    function(e, t, r) {
                        l(e[0], s), l(e[1], o), l(e[2], o), l(e[3], s);
                        for (let i = 255; i >= 0; --i) {
                            let n = r[i / 8 | 0] >> (7 & i) & 1;
                            m(e, t, n), v(t, e), v(e, e), m(e, t, n)
                        }
                    }(e, r, t)
            }
            t._w = function(e) {
                if (e.length !== t.aP) throw Error(`ed25519: seed must be ${t.aP} bytes`);
                let r = (0, i.hash)(e);
                r[0] &= 248, r[31] &= 127, r[31] |= 64;
                let s = new Uint8Array(32),
                    o = [n(), n(), n(), n()];
                _(o, r), b(s, o);
                let a = new Uint8Array(64);
                return a.set(e), a.set(s, 32), {
                    publicKey: s,
                    secretKey: a
                }
            };
            let w = new Float64Array([237, 211, 245, 92, 26, 99, 18, 88, 214, 156, 247, 162, 222, 249, 222, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 16]);

            function E(e, t) {
                let r, i, n, s;
                for (i = 63; i >= 32; --i) {
                    for (r = 0, n = i - 32, s = i - 12; n < s; ++n) t[n] += r - 16 * t[i] * w[n - (i - 32)], r = Math.floor((t[n] + 128) / 256), t[n] -= 256 * r;
                    t[n] += r, t[i] = 0
                }
                for (n = 0, r = 0; n < 32; n++) t[n] += r - (t[31] >> 4) * w[n], r = t[n] >> 8, t[n] &= 255;
                for (n = 0; n < 32; n++) t[n] -= r * w[n];
                for (i = 0; i < 32; i++) t[i + 1] += t[i] >> 8, e[i] = 255 & t[i]
            }

            function I(e) {
                let t = new Float64Array(64);
                for (let r = 0; r < 64; r++) t[r] = e[r];
                for (let t = 0; t < 64; t++) e[t] = 0;
                E(e, t)
            }
            t.Xx = function(e, t) {
                let r = new Float64Array(64),
                    s = [n(), n(), n(), n()],
                    o = (0, i.hash)(e.subarray(0, 32));
                o[0] &= 248, o[31] &= 127, o[31] |= 64;
                let a = new Uint8Array(64);
                a.set(o.subarray(32), 32);
                let c = new i.SHA512;
                c.update(a.subarray(32)), c.update(t);
                let u = c.digest();
                c.clean(), I(u), _(s, u), b(a, s), c.reset(), c.update(a.subarray(0, 32)), c.update(e.subarray(32)), c.update(t);
                let l = c.digest();
                I(l);
                for (let e = 0; e < 32; e++) r[e] = u[e];
                for (let e = 0; e < 32; e++)
                    for (let t = 0; t < 32; t++) r[e + t] += l[e] * o[t];
                return E(a.subarray(32), r), a
            }
        },
        52564: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = r(34310),
                n = r(55277);
            t.DIGEST_LENGTH = 64, t.BLOCK_SIZE = 128;
            var s = function() {
                function e() {
                    this.digestLength = t.DIGEST_LENGTH, this.blockSize = t.BLOCK_SIZE, this._stateHi = new Int32Array(8), this._stateLo = new Int32Array(8), this._tempHi = new Int32Array(16), this._tempLo = new Int32Array(16), this._buffer = new Uint8Array(256), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this.reset()
                }
                return e.prototype._initState = function() {
                    this._stateHi[0] = 1779033703, this._stateHi[1] = 3144134277, this._stateHi[2] = 1013904242, this._stateHi[3] = 2773480762, this._stateHi[4] = 1359893119, this._stateHi[5] = 2600822924, this._stateHi[6] = 528734635, this._stateHi[7] = 1541459225, this._stateLo[0] = 4089235720, this._stateLo[1] = 2227873595, this._stateLo[2] = 4271175723, this._stateLo[3] = 1595750129, this._stateLo[4] = 2917565137, this._stateLo[5] = 725511199, this._stateLo[6] = 4215389547, this._stateLo[7] = 327033209
                }, e.prototype.reset = function() {
                    return this._initState(), this._bufferLength = 0, this._bytesHashed = 0, this._finished = !1, this
                }, e.prototype.clean = function() {
                    n.wipe(this._buffer), n.wipe(this._tempHi), n.wipe(this._tempLo), this.reset()
                }, e.prototype.update = function(e, r) {
                    if (void 0 === r && (r = e.length), this._finished) throw Error("SHA512: can't update because hash was finished.");
                    var i = 0;
                    if (this._bytesHashed += r, this._bufferLength > 0) {
                        for (; this._bufferLength < t.BLOCK_SIZE && r > 0;) this._buffer[this._bufferLength++] = e[i++], r--;
                        this._bufferLength === this.blockSize && (a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, this.blockSize), this._bufferLength = 0)
                    }
                    for (r >= this.blockSize && (i = a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, e, i, r), r %= this.blockSize); r > 0;) this._buffer[this._bufferLength++] = e[i++], r--;
                    return this
                }, e.prototype.finish = function(e) {
                    if (!this._finished) {
                        var t = this._bytesHashed,
                            r = this._bufferLength,
                            n = t % 128 < 112 ? 128 : 256;
                        this._buffer[r] = 128;
                        for (var s = r + 1; s < n - 8; s++) this._buffer[s] = 0;
                        i.writeUint32BE(t / 536870912 | 0, this._buffer, n - 8), i.writeUint32BE(t << 3, this._buffer, n - 4), a(this._tempHi, this._tempLo, this._stateHi, this._stateLo, this._buffer, 0, n), this._finished = !0
                    }
                    for (var s = 0; s < this.digestLength / 8; s++) i.writeUint32BE(this._stateHi[s], e, 8 * s), i.writeUint32BE(this._stateLo[s], e, 8 * s + 4);
                    return this
                }, e.prototype.digest = function() {
                    var e = new Uint8Array(this.digestLength);
                    return this.finish(e), e
                }, e.prototype.saveState = function() {
                    if (this._finished) throw Error("SHA256: cannot save finished state");
                    return {
                        stateHi: new Int32Array(this._stateHi),
                        stateLo: new Int32Array(this._stateLo),
                        buffer: this._bufferLength > 0 ? new Uint8Array(this._buffer) : void 0,
                        bufferLength: this._bufferLength,
                        bytesHashed: this._bytesHashed
                    }
                }, e.prototype.restoreState = function(e) {
                    return this._stateHi.set(e.stateHi), this._stateLo.set(e.stateLo), this._bufferLength = e.bufferLength, e.buffer && this._buffer.set(e.buffer), this._bytesHashed = e.bytesHashed, this._finished = !1, this
                }, e.prototype.cleanSavedState = function(e) {
                    n.wipe(e.stateHi), n.wipe(e.stateLo), e.buffer && n.wipe(e.buffer), e.bufferLength = 0, e.bytesHashed = 0
                }, e
            }();
            t.SHA512 = s;
            var o = new Int32Array([1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399, 3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265, 2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394, 310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994, 1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317, 3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139, 264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901, 1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837, 2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879, 3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901, 113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964, 773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823, 1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142, 2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273, 3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344, 3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720, 430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593, 883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403, 1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012, 2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044, 2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573, 3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711, 3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554, 174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315, 685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100, 1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866, 1607167915, 987167468, 1816402316, 1246189591]);

            function a(e, t, r, n, s, a, c) {
                for (var u, l, h, f, p, d, g, y, v = r[0], m = r[1], b = r[2], _ = r[3], w = r[4], E = r[5], I = r[6], P = r[7], S = n[0], O = n[1], x = n[2], N = n[3], R = n[4], A = n[5], C = n[6], j = n[7]; c >= 128;) {
                    for (var T = 0; T < 16; T++) {
                        var L = 8 * T + a;
                        e[T] = i.readUint32BE(s, L), t[T] = i.readUint32BE(s, L + 4)
                    }
                    for (var T = 0; T < 80; T++) {
                        var D = v,
                            k = m,
                            M = b,
                            q = _,
                            $ = w,
                            U = E,
                            z = I,
                            H = P,
                            B = S,
                            V = O,
                            K = x,
                            F = N,
                            W = R,
                            G = A,
                            Q = C,
                            J = j;
                        if (u = P, p = 65535 & (l = j), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = (w >>> 14 | R << 18) ^ (w >>> 18 | R << 14) ^ (R >>> 9 | w << 23), p += 65535 & (l = (R >>> 14 | w << 18) ^ (R >>> 18 | w << 14) ^ (w >>> 9 | R << 23)), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = w & E ^ ~w & I, p += 65535 & (l = R & A ^ ~R & C), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = o[2 * T], p += 65535 & (l = o[2 * T + 1]), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = e[T % 16], p += 65535 & (l = t[T % 16]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, h = 65535 & g | y << 16, f = 65535 & p | d << 16, u = h, p = 65535 & (l = f), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = (v >>> 28 | S << 4) ^ (S >>> 2 | v << 30) ^ (S >>> 7 | v << 25), p += 65535 & (l = (S >>> 28 | v << 4) ^ (v >>> 2 | S << 30) ^ (v >>> 7 | S << 25)), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = v & m ^ v & b ^ m & b, p += 65535 & (l = S & O ^ S & x ^ O & x), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, H = 65535 & g | y << 16, J = 65535 & p | d << 16, u = q, p = 65535 & (l = F), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = h, p += 65535 & (l = f), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, q = 65535 & g | y << 16, F = 65535 & p | d << 16, m = D, b = k, _ = M, w = q, E = $, I = U, P = z, v = H, O = B, x = V, N = K, R = F, A = W, C = G, j = Q, S = J, T % 16 == 15)
                            for (var L = 0; L < 16; L++) u = e[L], p = 65535 & (l = t[L]), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = e[(L + 9) % 16], p += 65535 & (l = t[(L + 9) % 16]), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = ((h = e[(L + 1) % 16]) >>> 1 | (f = t[(L + 1) % 16]) << 31) ^ (h >>> 8 | f << 24) ^ h >>> 7, p += 65535 & (l = (f >>> 1 | h << 31) ^ (f >>> 8 | h << 24) ^ (f >>> 7 | h << 25)), d += l >>> 16, g += 65535 & u, y += u >>> 16, u = ((h = e[(L + 14) % 16]) >>> 19 | (f = t[(L + 14) % 16]) << 13) ^ (f >>> 29 | h << 3) ^ h >>> 6, p += 65535 & (l = (f >>> 19 | h << 13) ^ (h >>> 29 | f << 3) ^ (f >>> 6 | h << 26)), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, e[L] = 65535 & g | y << 16, t[L] = 65535 & p | d << 16
                    }
                    u = v, p = 65535 & (l = S), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[0], p += 65535 & (l = n[0]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[0] = v = 65535 & g | y << 16, n[0] = S = 65535 & p | d << 16, u = m, p = 65535 & (l = O), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[1], p += 65535 & (l = n[1]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[1] = m = 65535 & g | y << 16, n[1] = O = 65535 & p | d << 16, u = b, p = 65535 & (l = x), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[2], p += 65535 & (l = n[2]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[2] = b = 65535 & g | y << 16, n[2] = x = 65535 & p | d << 16, u = _, p = 65535 & (l = N), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[3], p += 65535 & (l = n[3]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[3] = _ = 65535 & g | y << 16, n[3] = N = 65535 & p | d << 16, u = w, p = 65535 & (l = R), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[4], p += 65535 & (l = n[4]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[4] = w = 65535 & g | y << 16, n[4] = R = 65535 & p | d << 16, u = E, p = 65535 & (l = A), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[5], p += 65535 & (l = n[5]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[5] = E = 65535 & g | y << 16, n[5] = A = 65535 & p | d << 16, u = I, p = 65535 & (l = C), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[6], p += 65535 & (l = n[6]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[6] = I = 65535 & g | y << 16, n[6] = C = 65535 & p | d << 16, u = P, p = 65535 & (l = j), d = l >>> 16, g = 65535 & u, y = u >>> 16, u = r[7], p += 65535 & (l = n[7]), d += l >>> 16, g += 65535 & u, y += u >>> 16, d += p >>> 16, g += d >>> 16, y += g >>> 16, r[7] = P = 65535 & g | y << 16, n[7] = j = 65535 & p | d << 16, a += 128, c -= 128
                }
                return a
            }
            t.hash = function(e) {
                var t = new s;
                t.update(e);
                var r = t.digest();
                return t.clean(), r
            }
        },
        81431: function(e, t, r) {
            "use strict";

            function i() {
                return (null === r.g || void 0 === r.g ? void 0 : r.g.crypto) || (null === r.g || void 0 === r.g ? void 0 : r.g.msCrypto) || {}
            }

            function n() {
                let e = i();
                return e.subtle || e.webkitSubtle
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBrowserCryptoAvailable = t.getSubtleCrypto = t.getBrowerCrypto = void 0, t.getBrowerCrypto = i, t.getSubtleCrypto = n, t.isBrowserCryptoAvailable = function() {
                return !!i() && !!n()
            }
        },
        51164: function(e, t, r) {
            "use strict";
            var i = r(62601);

            function n() {
                return "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product
            }

            function s() {
                return void 0 !== i && void 0 !== i.versions && void 0 !== i.versions.node
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.isBrowser = t.isNode = t.isReactNative = void 0, t.isReactNative = n, t.isNode = s, t.isBrowser = function() {
                return !n() && !s()
            }
        },
        36014: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(75031);
            i.__exportStar(r(81431), t), i.__exportStar(r(51164), t)
        },
        75031: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return _
                },
                __asyncGenerator: function() {
                    return b
                },
                __asyncValues: function() {
                    return w
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return S
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return P
                },
                __importStar: function() {
                    return I
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
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
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function a(e, t, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, i) {
                return new(r || (r = Promise))(function(n, s) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function f(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function p(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
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
                var i, n, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), n = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function b(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(e, t || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(e) {
                    n[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            s.push([e, t, r, i]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = n[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : l(s[0][2], r)
                    } catch (e) {
                        l(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function _(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, n) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[i](t)),
                            done: "return" === i
                        } : n ? n(t) : t
                    } : n
                }
            }

            function w(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
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

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function I(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function P(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        39620: function(e, t, r) {
            "use strict";
            let i;
            r.d(t, {
                EthereumProvider: function() {
                    return su
                }
            });
            var n = r(512),
                s = r.n(n),
                o = r(51040),
                a = r(20342),
                c = r(35077),
                u = r(87853),
                l = r(38195),
                h = r(71188),
                f = r(62601),
                p = function(e, t, r) {
                    if (r || 2 == arguments.length)
                        for (var i, n = 0, s = t.length; n < s; n++) !i && n in t || (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
                    return e.concat(i || Array.prototype.slice.call(t))
                },
                d = function(e, t, r) {
                    this.name = e, this.version = t, this.os = r, this.type = "browser"
                },
                g = function(e) {
                    this.version = e, this.type = "node", this.name = "node", this.os = f.platform
                },
                y = function(e, t, r, i) {
                    this.name = e, this.version = t, this.os = r, this.bot = i, this.type = "bot-device"
                },
                v = function() {
                    this.type = "bot", this.bot = !0, this.name = "bot", this.version = null, this.os = null
                },
                m = function() {
                    this.type = "react-native", this.name = "react-native", this.version = null, this.os = null
                },
                b = /(nuhk|curl|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask\ Jeeves\/Teoma|ia_archiver)/,
                _ = [
                    ["aol", /AOLShield\/([0-9\._]+)/],
                    ["edge", /Edge\/([0-9\._]+)/],
                    ["edge-ios", /EdgiOS\/([0-9\._]+)/],
                    ["yandexbrowser", /YaBrowser\/([0-9\._]+)/],
                    ["kakaotalk", /KAKAOTALK\s([0-9\.]+)/],
                    ["samsung", /SamsungBrowser\/([0-9\.]+)/],
                    ["silk", /\bSilk\/([0-9._-]+)\b/],
                    ["miui", /MiuiBrowser\/([0-9\.]+)$/],
                    ["beaker", /BeakerBrowser\/([0-9\.]+)/],
                    ["edge-chromium", /EdgA?\/([0-9\.]+)/],
                    ["chromium-webview", /(?!Chrom.*OPR)wv\).*Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["chrome", /(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9\.]+)(:?\s|$)/],
                    ["phantomjs", /PhantomJS\/([0-9\.]+)(:?\s|$)/],
                    ["crios", /CriOS\/([0-9\.]+)(:?\s|$)/],
                    ["firefox", /Firefox\/([0-9\.]+)(?:\s|$)/],
                    ["fxios", /FxiOS\/([0-9\.]+)/],
                    ["opera-mini", /Opera Mini.*Version\/([0-9\.]+)/],
                    ["opera", /Opera\/([0-9\.]+)(?:\s|$)/],
                    ["opera", /OPR\/([0-9\.]+)(:?\s|$)/],
                    ["pie", /^Microsoft Pocket Internet Explorer\/(\d+\.\d+)$/],
                    ["pie", /^Mozilla\/\d\.\d+\s\(compatible;\s(?:MSP?IE|MSInternet Explorer) (\d+\.\d+);.*Windows CE.*\)$/],
                    ["netfront", /^Mozilla\/\d\.\d+.*NetFront\/(\d.\d)/],
                    ["ie", /Trident\/7\.0.*rv\:([0-9\.]+).*\).*Gecko$/],
                    ["ie", /MSIE\s([0-9\.]+);.*Trident\/[4-7].0/],
                    ["ie", /MSIE\s(7\.0)/],
                    ["bb10", /BB10;\sTouch.*Version\/([0-9\.]+)/],
                    ["android", /Android\s([0-9\.]+)/],
                    ["ios", /Version\/([0-9\._]+).*Mobile.*Safari.*/],
                    ["safari", /Version\/([0-9\._]+).*Safari/],
                    ["facebook", /FB[AS]V\/([0-9\.]+)/],
                    ["instagram", /Instagram\s([0-9\.]+)/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Mobile/],
                    ["ios-webview", /AppleWebKit\/([0-9\.]+).*Gecko\)$/],
                    ["curl", /^curl\/([0-9\.]+)$/],
                    ["searchbot", /alexa|bot|crawl(er|ing)|facebookexternalhit|feedburner|google web preview|nagios|postrank|pingdom|slurp|spider|yahoo!|yandex/]
                ],
                w = [
                    ["iOS", /iP(hone|od|ad)/],
                    ["Android OS", /Android/],
                    ["BlackBerry OS", /BlackBerry|BB10/],
                    ["Windows Mobile", /IEMobile/],
                    ["Amazon OS", /Kindle/],
                    ["Windows 3.11", /Win16/],
                    ["Windows 95", /(Windows 95)|(Win95)|(Windows_95)/],
                    ["Windows 98", /(Windows 98)|(Win98)/],
                    ["Windows 2000", /(Windows NT 5.0)|(Windows 2000)/],
                    ["Windows XP", /(Windows NT 5.1)|(Windows XP)/],
                    ["Windows Server 2003", /(Windows NT 5.2)/],
                    ["Windows Vista", /(Windows NT 6.0)/],
                    ["Windows 7", /(Windows NT 6.1)/],
                    ["Windows 8", /(Windows NT 6.2)/],
                    ["Windows 8.1", /(Windows NT 6.3)/],
                    ["Windows 10", /(Windows NT 10.0)/],
                    ["Windows ME", /Windows ME/],
                    ["Windows CE", /Windows CE|WinCE|Microsoft Pocket Internet Explorer/],
                    ["Open BSD", /OpenBSD/],
                    ["Sun OS", /SunOS/],
                    ["Chrome OS", /CrOS/],
                    ["Linux", /(Linux)|(X11)/],
                    ["Mac OS", /(Mac_PowerPC)|(Macintosh)/],
                    ["QNX", /QNX/],
                    ["BeOS", /BeOS/],
                    ["OS/2", /OS\/2/]
                ];

            function E(e) {
                var t = "" !== e && _.reduce(function(t, r) {
                    var i = r[0],
                        n = r[1];
                    if (t) return t;
                    var s = n.exec(e);
                    return !!s && [i, s]
                }, !1);
                if (!t) return null;
                var r = t[0],
                    i = t[1];
                if ("searchbot" === r) return new v;
                var n = i[1] && i[1].split(".").join("_").split("_").slice(0, 3);
                n ? n.length < 3 && (n = p(p([], n, !0), function(e) {
                    for (var t = [], r = 0; r < e; r++) t.push("0");
                    return t
                }(3 - n.length), !0)) : n = [];
                var s = n.join("."),
                    o = function(e) {
                        for (var t = 0, r = w.length; t < r; t++) {
                            var i = w[t],
                                n = i[0];
                            if (i[1].exec(e)) return n
                        }
                        return null
                    }(e),
                    a = b.exec(e);
                return a && a[1] ? new y(r, s, o, a[1]) : new d(r, s, o)
            }
            var I = r(58619),
                P = r(849),
                S = r(36073),
                O = r(43824),
                x = r(43869),
                N = r(62601);

            function R(e, t) {
                return e.includes(":") ? [e] : t.chains || []
            }
            let A = "base10",
                C = "base16",
                j = "base64pad",
                T = "utf8";

            function L() {
                let e = (0, c.randomBytes)(32);
                return (0, h.BB)(e, C)
            }

            function D(e) {
                let t = (0, u.vp)((0, h.mL)(e, T));
                return (0, h.BB)(t, C)
            }

            function k(e) {
                return Number((0, h.BB)(e, A))
            }

            function M(e) {
                let t = (0, h.mL)(e, j),
                    r = t.slice(0, 1);
                if (1 === k(r)) {
                    let e = t.slice(1, 33),
                        i = t.slice(33, 45);
                    return {
                        type: r,
                        sealed: t.slice(45),
                        iv: i,
                        senderPublicKey: e
                    }
                }
                let i = t.slice(1, 13);
                return {
                    type: r,
                    sealed: t.slice(13),
                    iv: i
                }
            }

            function q(e) {
                let t = e ? .type || 0;
                if (1 === t) {
                    if (typeof e ? .senderPublicKey > "u") throw Error("missing sender public key");
                    if (typeof e ? .receiverPublicKey > "u") throw Error("missing receiver public key")
                }
                return {
                    type: t,
                    senderPublicKey: e ? .senderPublicKey,
                    receiverPublicKey: e ? .receiverPublicKey
                }
            }

            function $(e) {
                return 1 === e.type && "string" == typeof e.senderPublicKey && "string" == typeof e.receiverPublicKey
            }
            var U = Object.defineProperty,
                z = Object.getOwnPropertySymbols,
                H = Object.prototype.hasOwnProperty,
                B = Object.prototype.propertyIsEnumerable,
                V = (e, t, r) => t in e ? U(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                K = (e, t) => {
                    for (var r in t || (t = {})) H.call(t, r) && V(e, r, t[r]);
                    if (z)
                        for (var r of z(t)) B.call(t, r) && V(e, r, t[r]);
                    return e
                };
            let F = {
                reactNative: "react-native",
                node: "node",
                browser: "browser",
                unknown: "unknown"
            };

            function W() {
                return "u" > typeof N && "u" > typeof N.versions && "u" > typeof N.versions.node
            }

            function G() {
                return !(0, P.getDocument)() && !!(0, P.getNavigator)() && "ReactNative" === navigator.product
            }

            function Q() {
                return !W() && !!(0, P.getNavigator)()
            }

            function J() {
                return G() ? F.reactNative : W() ? F.node : Q() ? F.browser : F.unknown
            }

            function Y(e, t) {
                return e.filter(e => t.includes(e)).length === e.length
            }

            function Z(e) {
                return Object.fromEntries(e.entries())
            }

            function X(e) {
                return new Map(Object.entries(e))
            }

            function ee(e = I.FIVE_MINUTES, t) {
                let r, i, n;
                let s = (0, I.toMiliseconds)(e || I.FIVE_MINUTES);
                return {
                    resolve: e => {
                        n && r && (clearTimeout(n), r(e))
                    },
                    reject: e => {
                        n && i && (clearTimeout(n), i(e))
                    },
                    done: () => new Promise((e, o) => {
                        n = setTimeout(() => {
                            o(Error(t))
                        }, s), r = e, i = o
                    })
                }
            }

            function et(e, t, r) {
                return new Promise(async (i, n) => {
                    let s = setTimeout(() => n(Error(r)), t);
                    try {
                        let t = await e;
                        i(t)
                    } catch (e) {
                        n(e)
                    }
                    clearTimeout(s)
                })
            }

            function er(e, t) {
                if ("string" == typeof t && t.startsWith(`${e}:`)) return t;
                if ("topic" === e.toLowerCase()) {
                    if ("string" != typeof t) throw Error('Value must be "string" for expirer target type: topic');
                    return `topic:${t}`
                }
                if ("id" === e.toLowerCase()) {
                    if ("number" != typeof t) throw Error('Value must be "number" for expirer target type: id');
                    return `id:${t}`
                }
                throw Error(`Unknown expirer target type: ${e}`)
            }

            function ei(e) {
                let [t, r] = e.split(":"), i = {
                    id: void 0,
                    topic: void 0
                };
                if ("topic" === t && "string" == typeof r) i.topic = r;
                else if ("id" === t && Number.isInteger(Number(r))) i.id = Number(r);
                else throw Error(`Invalid target, expected id:number or topic:string, got ${t}:${r}`);
                return i
            }

            function en(e, t) {
                return (0, I.fromMiliseconds)((t || Date.now()) + (0, I.toMiliseconds)(e))
            }

            function es(e) {
                return Date.now() >= (0, I.toMiliseconds)(e)
            }

            function eo(e, t) {
                return `${e}${t?`:${t}`:""}`
            }

            function ea(e = [], t = []) {
                return [...new Set([...e, ...t])]
            }
            async function ec({
                id: e,
                topic: t,
                wcDeepLink: i
            }) {
                try {
                    if (!i) return;
                    let n = "string" == typeof i ? JSON.parse(i) : i,
                        s = n ? .href;
                    if ("string" != typeof s) return;
                    s.endsWith("/") && (s = s.slice(0, -1));
                    let o = `${s}/wc?requestId=${e}&sessionTopic=${t}`,
                        a = J();
                    a === F.browser ? o.startsWith("https://") ? window.open(o, "_blank", "noreferrer noopener") : window.open(o, "_self", "noreferrer noopener") : a === F.reactNative && "u" > typeof(null == r.g ? void 0 : r.g.Linking) && await r.g.Linking.openURL(o)
                } catch (e) {
                    console.error(e)
                }
            }
            async function eu(e, t) {
                try {
                    return await e.getItem(t) || (Q() ? localStorage.getItem(t) : void 0)
                } catch (e) {
                    console.error(e)
                }
            }

            function el(e) {
                return e ? .relay || {
                    protocol: "irn"
                }
            }

            function eh(e) {
                let t = x.RELAY_JSONRPC[e];
                if (typeof t > "u") throw Error(`Relay Protocol not supported: ${e}`);
                return t
            }
            var ef = Object.defineProperty,
                ep = Object.getOwnPropertySymbols,
                ed = Object.prototype.hasOwnProperty,
                eg = Object.prototype.propertyIsEnumerable,
                ey = (e, t, r) => t in e ? ef(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                ev = (e, t) => {
                    for (var r in t || (t = {})) ed.call(t, r) && ey(e, r, t[r]);
                    if (ep)
                        for (var r of ep(t)) eg.call(t, r) && ey(e, r, t[r]);
                    return e
                };

            function em(e) {
                var t;
                let r = (e = (e = e.includes("wc://") ? e.replace("wc://", "") : e).includes("wc:") ? e.replace("wc:", "") : e).indexOf(":"),
                    i = -1 !== e.indexOf("?") ? e.indexOf("?") : void 0,
                    n = e.substring(0, r),
                    s = e.substring(r + 1, i).split("@"),
                    o = "u" > typeof i ? e.substring(i) : "",
                    a = O.parse(o);
                return {
                    protocol: n,
                    topic: (t = s[0]).startsWith("//") ? t.substring(2) : t,
                    version: parseInt(s[1], 10),
                    symKey: a.symKey,
                    relay: function(e, t = "-") {
                        let r = {},
                            i = "relay" + t;
                        return Object.keys(e).forEach(t => {
                            if (t.startsWith(i)) {
                                let n = t.replace(i, ""),
                                    s = e[t];
                                r[n] = s
                            }
                        }), r
                    }(a)
                }
            }

            function eb(e) {
                let t = [];
                return e.forEach(e => {
                    let [r, i] = e.split(":");
                    t.push(`${r}:${i}`)
                }), t
            }

            function e_(e) {
                return e.includes(":")
            }

            function ew(e) {
                return e_(e) ? e.split(":")[0] : e
            }
            Object.prototype.hasOwnProperty, Object.prototype.propertyIsEnumerable;
            let eE = {
                    INVALID_METHOD: {
                        message: "Invalid method.",
                        code: 1001
                    },
                    INVALID_EVENT: {
                        message: "Invalid event.",
                        code: 1002
                    },
                    INVALID_UPDATE_REQUEST: {
                        message: "Invalid update request.",
                        code: 1003
                    },
                    INVALID_EXTEND_REQUEST: {
                        message: "Invalid extend request.",
                        code: 1004
                    },
                    INVALID_SESSION_SETTLE_REQUEST: {
                        message: "Invalid session settle request.",
                        code: 1005
                    },
                    UNAUTHORIZED_METHOD: {
                        message: "Unauthorized method.",
                        code: 3001
                    },
                    UNAUTHORIZED_EVENT: {
                        message: "Unauthorized event.",
                        code: 3002
                    },
                    UNAUTHORIZED_UPDATE_REQUEST: {
                        message: "Unauthorized update request.",
                        code: 3003
                    },
                    UNAUTHORIZED_EXTEND_REQUEST: {
                        message: "Unauthorized extend request.",
                        code: 3004
                    },
                    USER_REJECTED: {
                        message: "User rejected.",
                        code: 5e3
                    },
                    USER_REJECTED_CHAINS: {
                        message: "User rejected chains.",
                        code: 5001
                    },
                    USER_REJECTED_METHODS: {
                        message: "User rejected methods.",
                        code: 5002
                    },
                    USER_REJECTED_EVENTS: {
                        message: "User rejected events.",
                        code: 5003
                    },
                    UNSUPPORTED_CHAINS: {
                        message: "Unsupported chains.",
                        code: 5100
                    },
                    UNSUPPORTED_METHODS: {
                        message: "Unsupported methods.",
                        code: 5101
                    },
                    UNSUPPORTED_EVENTS: {
                        message: "Unsupported events.",
                        code: 5102
                    },
                    UNSUPPORTED_ACCOUNTS: {
                        message: "Unsupported accounts.",
                        code: 5103
                    },
                    UNSUPPORTED_NAMESPACE_KEY: {
                        message: "Unsupported namespace key.",
                        code: 5104
                    },
                    USER_DISCONNECTED: {
                        message: "User disconnected.",
                        code: 6e3
                    },
                    SESSION_SETTLEMENT_FAILED: {
                        message: "Session settlement failed.",
                        code: 7e3
                    },
                    WC_METHOD_UNSUPPORTED: {
                        message: "Unsupported wc_ method.",
                        code: 10001
                    }
                },
                eI = {
                    NOT_INITIALIZED: {
                        message: "Not initialized.",
                        code: 1
                    },
                    NO_MATCHING_KEY: {
                        message: "No matching key.",
                        code: 2
                    },
                    RESTORE_WILL_OVERRIDE: {
                        message: "Restore will override.",
                        code: 3
                    },
                    RESUBSCRIBED: {
                        message: "Resubscribed.",
                        code: 4
                    },
                    MISSING_OR_INVALID: {
                        message: "Missing or invalid.",
                        code: 5
                    },
                    EXPIRED: {
                        message: "Expired.",
                        code: 6
                    },
                    UNKNOWN_TYPE: {
                        message: "Unknown type.",
                        code: 7
                    },
                    MISMATCHED_TOPIC: {
                        message: "Mismatched topic.",
                        code: 8
                    },
                    NON_CONFORMING_NAMESPACES: {
                        message: "Non conforming namespaces.",
                        code: 9
                    }
                };

            function eP(e, t) {
                let {
                    message: r,
                    code: i
                } = eI[e];
                return {
                    message: t ? `${r} ${t}` : r,
                    code: i
                }
            }

            function eS(e, t) {
                let {
                    message: r,
                    code: i
                } = eE[e];
                return {
                    message: t ? `${r} ${t}` : r,
                    code: i
                }
            }

            function eO(e, t) {
                return !!Array.isArray(e) && (!("u" > typeof t) || !e.length || e.every(t))
            }

            function ex(e) {
                return Object.getPrototypeOf(e) === Object.prototype && Object.keys(e).length
            }

            function eN(e) {
                return typeof e > "u"
            }

            function eR(e, t) {
                return !!(t && eN(e)) || "string" == typeof e && !!e.trim().length
            }

            function eA(e, t) {
                return !!(t && eN(e)) || "number" == typeof e && !isNaN(e)
            }

            function eC(e) {
                return !!(eR(e, !1) && e.includes(":")) && 2 === e.split(":").length
            }

            function ej(e) {
                let t = !0;
                return eO(e) ? e.length && (t = e.every(e => eR(e, !1))) : t = !1, t
            }

            function eT(e, t) {
                let r = null;
                return Object.values(e).forEach(e => {
                    var i;
                    let n;
                    if (r) return;
                    let s = (i = `${t}, namespace`, n = null, ej(e ? .methods) ? ej(e ? .events) || (n = eS("UNSUPPORTED_EVENTS", `${i}, events should be an array of strings or empty array for no events`)) : n = eS("UNSUPPORTED_METHODS", `${i}, methods should be an array of strings or empty array for no methods`), n);
                    s && (r = s)
                }), r
            }

            function eL(e, t) {
                let r = null;
                if (e && ex(e)) {
                    let i;
                    let n = eT(e, t);
                    n && (r = n);
                    let s = (i = null, Object.values(e).forEach(e => {
                        var r, n;
                        let s;
                        if (i) return;
                        let o = (r = e ? .accounts, n = `${t} namespace`, s = null, eO(r) ? r.forEach(e => {
                            s || function(e) {
                                if (eR(e, !1) && e.includes(":")) {
                                    let t = e.split(":");
                                    if (3 === t.length) {
                                        let e = t[0] + ":" + t[1];
                                        return !!t[2] && eC(e)
                                    }
                                }
                                return !1
                            }(e) || (s = eS("UNSUPPORTED_ACCOUNTS", `${n}, account ${e} should be a string and conform to "namespace:chainId:address" format`))
                        }) : s = eS("UNSUPPORTED_ACCOUNTS", `${n}, accounts should be an array of strings conforming to "namespace:chainId:address" format`), s);
                        o && (i = o)
                    }), i);
                    s && (r = s)
                } else r = eP("MISSING_OR_INVALID", `${t}, namespaces should be an object with data`);
                return r
            }

            function eD(e) {
                return eR(e.protocol, !0)
            }

            function ek(e) {
                return "u" > typeof e
            }

            function eM(e, t) {
                return !(!eC(t) || !(function(e) {
                    let t = [];
                    return Object.values(e).forEach(e => {
                        t.push(...eb(e.accounts))
                    }), t
                })(e).includes(t))
            }

            function eq(e, t, r) {
                let i = null,
                    n = function(e) {
                        let t = {};
                        return Object.keys(e).forEach(r => {
                            var i;
                            r.includes(":") ? t[r] = e[r] : null == (i = e[r].chains) || i.forEach(i => {
                                t[i] = {
                                    methods: e[r].methods,
                                    events: e[r].events
                                }
                            })
                        }), t
                    }(e),
                    s = function(e) {
                        let t = {};
                        return Object.keys(e).forEach(r => {
                            if (r.includes(":")) t[r] = e[r];
                            else {
                                let i = eb(e[r].accounts);
                                i ? .forEach(i => {
                                    t[i] = {
                                        accounts: e[r].accounts.filter(e => e.includes(`${i}:`)),
                                        methods: e[r].methods,
                                        events: e[r].events
                                    }
                                })
                            }
                        }), t
                    }(t),
                    o = Object.keys(n),
                    a = Object.keys(s),
                    c = e$(Object.keys(e)),
                    u = e$(Object.keys(t)),
                    l = c.filter(e => !u.includes(e));
                return l.length && (i = eP("NON_CONFORMING_NAMESPACES", `${r} namespaces keys don't satisfy requiredNamespaces.
      Required: ${l.toString()}
      Received: ${Object.keys(t).toString()}`)), Y(o, a) || (i = eP("NON_CONFORMING_NAMESPACES", `${r} namespaces chains don't satisfy required namespaces.
      Required: ${o.toString()}
      Approved: ${a.toString()}`)), Object.keys(t).forEach(e => {
                    if (!e.includes(":") || i) return;
                    let n = eb(t[e].accounts);
                    n.includes(e) || (i = eP("NON_CONFORMING_NAMESPACES", `${r} namespaces accounts don't satisfy namespace accounts for ${e}
        Required: ${e}
        Approved: ${n.toString()}`))
                }), o.forEach(e => {
                    i || (Y(n[e].methods, s[e].methods) ? Y(n[e].events, s[e].events) || (i = eP("NON_CONFORMING_NAMESPACES", `${r} namespaces events don't satisfy namespace events for ${e}`)) : i = eP("NON_CONFORMING_NAMESPACES", `${r} namespaces methods don't satisfy namespace methods for ${e}`))
                }), i
            }

            function e$(e) {
                return [...new Set(e.map(e => e.includes(":") ? e.split(":")[0] : e))]
            }

            function eU() {
                let e = J();
                return new Promise(t => {
                    switch (e) {
                        case F.browser:
                            t(Q() && navigator ? .onLine);
                            break;
                        case F.reactNative:
                            t(ez());
                            break;
                        case F.node:
                        default:
                            t(!0)
                    }
                })
            }
            async function ez() {
                if (G() && "u" > typeof r.g && null != r.g && r.g.NetInfo) {
                    let e = await (null == r.g ? void 0 : r.g.NetInfo.fetch());
                    return e ? .isConnected
                }
                return !0
            }
            let eH = {};
            class eB {
                static get(e) {
                    return eH[e]
                }
                static set(e, t) {
                    eH[e] = t
                }
                static delete(e) {
                    delete eH[e]
                }
            }
            let eV = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,
                eK = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,
                eF = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;

            function eW(e, t) {
                if ("__proto__" === e || "constructor" === e && t && "object" == typeof t && "prototype" in t) {
                    console.warn(`[destr] Dropping "${e}" key to prevent prototype pollution.`);
                    return
                }
                return t
            }

            function eG(e, t = {}) {
                if ("string" != typeof e) return e;
                let r = e.trim();
                if ('"' === e[0] && '"' === e.at(-1) && !e.includes("\\")) return r.slice(1, -1);
                if (r.length <= 9) {
                    let e = r.toLowerCase();
                    if ("true" === e) return !0;
                    if ("false" === e) return !1;
                    if ("undefined" === e) return;
                    if ("null" === e) return null;
                    if ("nan" === e) return Number.NaN;
                    if ("infinity" === e) return Number.POSITIVE_INFINITY;
                    if ("-infinity" === e) return Number.NEGATIVE_INFINITY
                }
                if (!eF.test(e)) {
                    if (t.strict) throw SyntaxError("[destr] Invalid JSON");
                    return e
                }
                try {
                    if (eV.test(e) || eK.test(e)) {
                        if (t.strict) throw Error("[destr] Possible prototype pollution");
                        return JSON.parse(e, eW)
                    }
                    return JSON.parse(e)
                } catch (r) {
                    if (t.strict) throw r;
                    return e
                }
            }
            var eQ = r(67133).Buffer;

            function eJ(e, ...t) {
                try {
                    var r;
                    return (r = e(...t)) && "function" == typeof r.then ? r : Promise.resolve(r)
                } catch (e) {
                    return Promise.reject(e)
                }
            }

            function eY(e) {
                if (function(e) {
                        let t = typeof e;
                        return null === e || "object" !== t && "function" !== t
                    }(e)) return String(e);
                if (function(e) {
                        let t = Object.getPrototypeOf(e);
                        return !t || t.isPrototypeOf(Object)
                    }(e) || Array.isArray(e)) return JSON.stringify(e);
                if ("function" == typeof e.toJSON) return eY(e.toJSON());
                throw Error("[unstorage] Cannot stringify value!")
            }
            let eZ = "base64:";

            function eX(e) {
                return e ? e.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "") : ""
            }

            function e0(e) {
                return (e = eX(e)) ? e + ":" : ""
            }
            let e1 = () => {
                let e = new Map;
                return {
                    name: "memory",
                    options: {},
                    hasItem: t => e.has(t),
                    getItem: t => e.get(t) ? ? null,
                    getItemRaw: t => e.get(t) ? ? null,
                    setItem(t, r) {
                        e.set(t, r)
                    },
                    setItemRaw(t, r) {
                        e.set(t, r)
                    },
                    removeItem(t) {
                        e.delete(t)
                    },
                    getKeys: () => Array.from(e.keys()),
                    clear() {
                        e.clear()
                    },
                    dispose() {
                        e.clear()
                    }
                }
            };

            function e5(e, t, r) {
                return e.watch ? e.watch((e, i) => t(e, r + i)) : () => {}
            }
            async function e6(e) {
                "function" == typeof e.dispose && await eJ(e.dispose)
            }

            function e2(e) {
                return new Promise((t, r) => {
                    e.oncomplete = e.onsuccess = () => t(e.result), e.onabort = e.onerror = () => r(e.error)
                })
            }

            function e3(e, t) {
                let r = indexedDB.open(e);
                r.onupgradeneeded = () => r.result.createObjectStore(t);
                let i = e2(r);
                return (e, r) => i.then(i => r(i.transaction(t, e).objectStore(t)))
            }

            function e9() {
                return i || (i = e3("keyval-store", "keyval")), i
            }

            function e4(e, t = e9()) {
                return t("readonly", t => e2(t.get(e)))
            }
            let e8 = e => JSON.stringify(e, (e, t) => "bigint" == typeof t ? t.toString() + "n" : t),
                e7 = e => JSON.parse(e.replace(/([\[:])?(\d{17,}|(?:[9](?:[1-9]07199254740991|0[1-9]7199254740991|00[8-9]199254740991|007[2-9]99254740991|007199[3-9]54740991|0071992[6-9]4740991|00719925[5-9]740991|007199254[8-9]40991|0071992547[5-9]0991|00719925474[1-9]991|00719925474099[2-9])))([,\}\]])/g, '$1"$2n"$3'), (e, t) => "string" == typeof t && t.match(/^\d+n$/) ? BigInt(t.substring(0, t.length - 1)) : t);

            function te(e) {
                if ("string" != typeof e) throw Error(`Cannot safe json parse value of type ${typeof e}`);
                try {
                    return e7(e)
                } catch (t) {
                    return e
                }
            }

            function tt(e) {
                return "string" == typeof e ? e : e8(e) || ""
            }
            var tr = (e = {}) => {
                let t;
                let r = e.base && e.base.length > 0 ? `${e.base}:` : "",
                    i = e => r + e;
                return e.dbName && e.storeName && (t = e3(e.dbName, e.storeName)), {
                    name: "idb-keyval",
                    options: e,
                    hasItem: async e => !(typeof await e4(i(e), t) > "u"),
                    getItem: async e => await e4(i(e), t) ? ? null,
                    setItem: (e, r) => (function(e, t, r = e9()) {
                        return r("readwrite", r => (r.put(t, e), e2(r.transaction)))
                    })(i(e), r, t),
                    removeItem: e => (function(e, t = e9()) {
                        return t("readwrite", t => (t.delete(e), e2(t.transaction)))
                    })(i(e), t),
                    getKeys: () => (function(e = e9()) {
                        return e("readonly", e => {
                            var t;
                            if (e.getAllKeys) return e2(e.getAllKeys());
                            let r = [];
                            return (t = e => r.push(e.key), e.openCursor().onsuccess = function() {
                                this.result && (t(this.result), this.result.continue())
                            }, e2(e.transaction)).then(() => r)
                        })
                    })(t),
                    clear: () => (function(e = e9()) {
                        return e("readwrite", e => (e.clear(), e2(e.transaction)))
                    })(t)
                }
            };
            class ti {
                constructor() {
                    this.indexedDb = function(e = {}) {
                        let t = {
                                mounts: {
                                    "": e.driver || e1()
                                },
                                mountpoints: [""],
                                watching: !1,
                                watchListeners: [],
                                unwatch: {}
                            },
                            r = e => {
                                for (let r of t.mountpoints)
                                    if (e.startsWith(r)) return {
                                        base: r,
                                        relativeKey: e.slice(r.length),
                                        driver: t.mounts[r]
                                    };
                                return {
                                    base: "",
                                    relativeKey: e,
                                    driver: t.mounts[""]
                                }
                            },
                            i = (e, r) => t.mountpoints.filter(t => t.startsWith(e) || r && e.startsWith(t)).map(r => ({
                                relativeBase: e.length > r.length ? e.slice(r.length) : void 0,
                                mountpoint: r,
                                driver: t.mounts[r]
                            })),
                            n = (e, r) => {
                                if (t.watching)
                                    for (let i of (r = eX(r), t.watchListeners)) i(e, r)
                            },
                            s = async () => {
                                if (!t.watching)
                                    for (let e in t.watching = !0, t.mounts) t.unwatch[e] = await e5(t.mounts[e], n, e)
                            },
                            o = async () => {
                                if (t.watching) {
                                    for (let e in t.unwatch) await t.unwatch[e]();
                                    t.unwatch = {}, t.watching = !1
                                }
                            },
                            a = (e, t, i) => {
                                let n = new Map,
                                    s = e => {
                                        let t = n.get(e.base);
                                        return t || (t = {
                                            driver: e.driver,
                                            base: e.base,
                                            items: []
                                        }, n.set(e.base, t)), t
                                    };
                                for (let i of e) {
                                    let e = "string" == typeof i,
                                        n = eX(e ? i : i.key),
                                        o = e ? void 0 : i.value,
                                        a = e || !i.options ? t : { ...t,
                                            ...i.options
                                        },
                                        c = r(n);
                                    s(c).items.push({
                                        key: n,
                                        value: o,
                                        relativeKey: c.relativeKey,
                                        options: a
                                    })
                                }
                                return Promise.all([...n.values()].map(e => i(e))).then(e => e.flat())
                            },
                            c = {
                                hasItem(e, t = {}) {
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e = eX(e));
                                    return eJ(n.hasItem, i, t)
                                },
                                getItem(e, t = {}) {
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e = eX(e));
                                    return eJ(n.getItem, i, t).then(e => eG(e))
                                },
                                getItems: (e, t) => a(e, t, e => e.driver.getItems ? eJ(e.driver.getItems, e.items.map(e => ({
                                    key: e.relativeKey,
                                    options: e.options
                                })), t).then(t => t.map(t => ({
                                    key: function(...e) {
                                        return eX(e.join(":"))
                                    }(e.base, t.key),
                                    value: eG(t.value)
                                }))) : Promise.all(e.items.map(t => eJ(e.driver.getItem, t.relativeKey, t.options).then(e => ({
                                    key: t.key,
                                    value: eG(e)
                                }))))),
                                getItemRaw(e, t = {}) {
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e = eX(e));
                                    return n.getItemRaw ? eJ(n.getItemRaw, i, t) : eJ(n.getItem, i, t).then(e => "string" == typeof e && e.startsWith(eZ) ? eQ.from(e.slice(eZ.length), "base64") : e)
                                },
                                async setItem(e, t, i = {}) {
                                    if (void 0 === t) return c.removeItem(e);
                                    let {
                                        relativeKey: s,
                                        driver: o
                                    } = r(e = eX(e));
                                    o.setItem && (await eJ(o.setItem, s, eY(t), i), o.watch || n("update", e))
                                },
                                async setItems(e, t) {
                                    await a(e, t, async e => {
                                        e.driver.setItems && await eJ(e.driver.setItems, e.items.map(e => ({
                                            key: e.relativeKey,
                                            value: eY(e.value),
                                            options: e.options
                                        })), t), e.driver.setItem && await Promise.all(e.items.map(t => eJ(e.driver.setItem, t.relativeKey, eY(t.value), t.options)))
                                    })
                                },
                                async setItemRaw(e, t, i = {}) {
                                    if (void 0 === t) return c.removeItem(e, i);
                                    let {
                                        relativeKey: s,
                                        driver: o
                                    } = r(e = eX(e));
                                    if (o.setItemRaw) await eJ(o.setItemRaw, s, t, i);
                                    else {
                                        if (!o.setItem) return;
                                        await eJ(o.setItem, s, "string" == typeof t ? t : eZ + eQ.from(t).toString("base64"), i)
                                    }
                                    o.watch || n("update", e)
                                },
                                async removeItem(e, t = {}) {
                                    "boolean" == typeof t && (t = {
                                        removeMeta: t
                                    });
                                    let {
                                        relativeKey: i,
                                        driver: s
                                    } = r(e = eX(e));
                                    s.removeItem && (await eJ(s.removeItem, i, t), (t.removeMeta || t.removeMata) && await eJ(s.removeItem, i + "$", t), s.watch || n("remove", e))
                                },
                                async getMeta(e, t = {}) {
                                    "boolean" == typeof t && (t = {
                                        nativeOnly: t
                                    });
                                    let {
                                        relativeKey: i,
                                        driver: n
                                    } = r(e = eX(e)), s = Object.create(null);
                                    if (n.getMeta && Object.assign(s, await eJ(n.getMeta, i, t)), !t.nativeOnly) {
                                        let e = await eJ(n.getItem, i + "$", t).then(e => eG(e));
                                        e && "object" == typeof e && ("string" == typeof e.atime && (e.atime = new Date(e.atime)), "string" == typeof e.mtime && (e.mtime = new Date(e.mtime)), Object.assign(s, e))
                                    }
                                    return s
                                },
                                setMeta(e, t, r = {}) {
                                    return this.setItem(e + "$", t, r)
                                },
                                removeMeta(e, t = {}) {
                                    return this.removeItem(e + "$", t)
                                },
                                async getKeys(e, t = {}) {
                                    let r = i(e = e0(e), !0),
                                        n = [],
                                        s = [];
                                    for (let e of r) {
                                        let r = (await eJ(e.driver.getKeys, e.relativeBase, t)).map(t => e.mountpoint + eX(t)).filter(e => !n.some(t => e.startsWith(t)));
                                        s.push(...r), n = [e.mountpoint, ...n.filter(t => !t.startsWith(e.mountpoint))]
                                    }
                                    return e ? s.filter(t => t.startsWith(e) && !t.endsWith("$")) : s.filter(e => !e.endsWith("$"))
                                },
                                async clear(e, t = {}) {
                                    e = e0(e), await Promise.all(i(e, !1).map(async e => e.driver.clear ? eJ(e.driver.clear, e.relativeBase, t) : e.driver.removeItem ? Promise.all((await e.driver.getKeys(e.relativeBase || "", t)).map(r => e.driver.removeItem(r, t))) : void 0))
                                },
                                async dispose() {
                                    await Promise.all(Object.values(t.mounts).map(e => e6(e)))
                                },
                                watch: async e => (await s(), t.watchListeners.push(e), async () => {
                                    t.watchListeners = t.watchListeners.filter(t => t !== e), 0 === t.watchListeners.length && await o()
                                }),
                                async unwatch() {
                                    t.watchListeners = [], await o()
                                },
                                mount(e, r) {
                                    if ((e = e0(e)) && t.mounts[e]) throw Error(`already mounted at ${e}`);
                                    return e && (t.mountpoints.push(e), t.mountpoints.sort((e, t) => t.length - e.length)), t.mounts[e] = r, t.watching && Promise.resolve(e5(r, n, e)).then(r => {
                                        t.unwatch[e] = r
                                    }).catch(console.error), c
                                },
                                async unmount(e, r = !0) {
                                    (e = e0(e)) && t.mounts[e] && (t.watching && e in t.unwatch && (t.unwatch[e](), delete t.unwatch[e]), r && await e6(t.mounts[e]), t.mountpoints = t.mountpoints.filter(t => t !== e), delete t.mounts[e])
                                },
                                getMount(e = "") {
                                    let t = r(e = eX(e) + ":");
                                    return {
                                        driver: t.driver,
                                        base: t.base
                                    }
                                },
                                getMounts: (e = "", t = {}) => i(e = eX(e), t.parents).map(e => ({
                                    driver: e.driver,
                                    base: e.mountpoint
                                }))
                            };
                        return c
                    }({
                        driver: tr({
                            dbName: "WALLET_CONNECT_V2_INDEXED_DB",
                            storeName: "keyvaluestorage"
                        })
                    })
                }
                async getKeys() {
                    return this.indexedDb.getKeys()
                }
                async getEntries() {
                    return (await this.indexedDb.getItems(await this.indexedDb.getKeys())).map(e => [e.key, e.value])
                }
                async getItem(e) {
                    let t = await this.indexedDb.getItem(e);
                    if (null !== t) return t
                }
                async setItem(e, t) {
                    await this.indexedDb.setItem(e, tt(t))
                }
                async removeItem(e) {
                    await this.indexedDb.removeItem(e)
                }
            }
            var tn = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof r.g ? r.g : "u" > typeof self ? self : {},
                ts = {
                    exports: {}
                };

            function to(e) {
                var t;
                return [e[0], te(null != (t = e[1]) ? t : "")]
            }! function() {
                function e() {}
                e.prototype.getItem = function(e) {
                    return this.hasOwnProperty(e) ? String(this[e]) : null
                }, e.prototype.setItem = function(e, t) {
                    this[e] = String(t)
                }, e.prototype.removeItem = function(e) {
                    delete this[e]
                }, e.prototype.clear = function() {
                    let e = this;
                    Object.keys(e).forEach(function(t) {
                        e[t] = void 0, delete e[t]
                    })
                }, e.prototype.key = function(e) {
                    return e = e || 0, Object.keys(this)[e]
                }, e.prototype.__defineGetter__("length", function() {
                    return Object.keys(this).length
                }), "u" > typeof tn && tn.localStorage ? ts.exports = tn.localStorage : "u" > typeof window && window.localStorage ? ts.exports = window.localStorage : ts.exports = new e
            }();
            class ta {
                constructor() {
                    this.localStorage = ts.exports
                }
                async getKeys() {
                    return Object.keys(this.localStorage)
                }
                async getEntries() {
                    return Object.entries(this.localStorage).map(to)
                }
                async getItem(e) {
                    let t = this.localStorage.getItem(e);
                    if (null !== t) return te(t)
                }
                async setItem(e, t) {
                    this.localStorage.setItem(e, tt(t))
                }
                async removeItem(e) {
                    this.localStorage.removeItem(e)
                }
            }
            let tc = async (e, t, r) => {
                    let i = "wc_storage_version",
                        n = await t.getItem(i);
                    if (n && n >= 1) {
                        r(t);
                        return
                    }
                    let s = await e.getKeys();
                    if (!s.length) {
                        r(t);
                        return
                    }
                    let o = [];
                    for (; s.length;) {
                        let r = s.shift();
                        if (!r) continue;
                        let i = r.toLowerCase();
                        if (i.includes("wc@") || i.includes("walletconnect") || i.includes("wc_") || i.includes("wallet_connect")) {
                            let i = await e.getItem(r);
                            await t.setItem(r, i), o.push(r)
                        }
                    }
                    await t.setItem(i, 1), r(t), tu(e, o)
                },
                tu = async (e, t) => {
                    t.length && t.forEach(async t => {
                        await e.removeItem(t)
                    })
                };
            class tl {
                constructor() {
                    this.initialized = !1, this.setInitialized = e => {
                        this.storage = e, this.initialized = !0
                    };
                    let e = new ta;
                    this.storage = e;
                    try {
                        let t = new ti;
                        tc(e, t, this.setInitialized)
                    } catch {
                        this.initialized = !0
                    }
                }
                async getKeys() {
                    return await this.initialize(), this.storage.getKeys()
                }
                async getEntries() {
                    return await this.initialize(), this.storage.getEntries()
                }
                async getItem(e) {
                    return await this.initialize(), this.storage.getItem(e)
                }
                async setItem(e, t) {
                    return await this.initialize(), this.storage.setItem(e, t)
                }
                async removeItem(e) {
                    return await this.initialize(), this.storage.removeItem(e)
                }
                async initialize() {
                    this.initialized || await new Promise(e => {
                        let t = setInterval(() => {
                            this.initialized && (clearInterval(t), e())
                        }, 20)
                    })
                }
            }
            var th = r(63943),
                tf = r(72058),
                tp = r(95097);
            class td extends tp.q {
                constructor(e) {
                    super(), this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class tg extends tp.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t, this.records = new Map
                }
            }
            class ty {
                constructor(e, t) {
                    this.logger = e, this.core = t
                }
            }
            class tv extends tp.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class tm extends tp.q {
                constructor(e) {
                    super()
                }
            }
            class tb {
                constructor(e, t, r, i) {
                    this.core = e, this.logger = t, this.name = r
                }
            }
            class t_ extends tp.q {
                constructor(e, t) {
                    super(), this.relayer = e, this.logger = t
                }
            }
            class tw extends tp.q {
                constructor(e, t) {
                    super(), this.core = e, this.logger = t
                }
            }
            class tE {
                constructor(e, t) {
                    this.projectId = e, this.logger = t
                }
            }
            class tI {
                constructor(e) {
                    this.opts = e, this.protocol = "wc", this.version = 2
                }
            }
            class tP {
                constructor(e) {
                    this.client = e
                }
            }
            var tS = r(80237);
            let tO = "base64url",
                tx = "base58btc";
            var tN = r(72281),
                tR = r(21361),
                tA = r(34901);

            function tC(e) {
                return (0, tR.B)((0, tA.m)(tt(e), "utf8"), tO)
            }

            function tj(e) {
                let t = (0, tA.m)("K36", tx);
                return ["did", "key", "z" + (0, tR.B)((0, tN.z)([t, e]), tx)].join(":")
            }

            function tT(e = (0, c.randomBytes)(32)) {
                return tS._w(e)
            }
            async function tL(e, t, r, i, n = (0, I.fromMiliseconds)(Date.now())) {
                var s, o, a;
                let c = {
                        alg: "EdDSA",
                        typ: "JWT"
                    },
                    u = {
                        iss: tj(i.publicKey),
                        sub: e,
                        aud: t,
                        iat: n,
                        exp: n + r
                    },
                    l = (s = {
                        header: c,
                        payload: u
                    }, (0, tA.m)([tC(s.header), tC(s.payload)].join("."), "utf8"));
                return [tC((o = {
                    header: c,
                    payload: u,
                    signature: tS.Xx(i.secretKey, l)
                }).header), tC(o.payload), (a = o.signature, (0, tR.B)(a, tO))].join(".")
            }
            r(69859);
            let tD = "INTERNAL_ERROR",
                tk = "SERVER_ERROR",
                tM = [-32700, -32600, -32601, -32602, -32603],
                tq = {
                    PARSE_ERROR: {
                        code: -32700,
                        message: "Parse error"
                    },
                    INVALID_REQUEST: {
                        code: -32600,
                        message: "Invalid Request"
                    },
                    METHOD_NOT_FOUND: {
                        code: -32601,
                        message: "Method not found"
                    },
                    INVALID_PARAMS: {
                        code: -32602,
                        message: "Invalid params"
                    },
                    [tD]: {
                        code: -32603,
                        message: "Internal error"
                    },
                    [tk]: {
                        code: -32e3,
                        message: "Server error"
                    }
                };

            function t$(e) {
                return Object.keys(tq).includes(e) ? tq[e] : tq[tk]
            }

            function tU(e, t, r) {
                return e.message.includes("getaddrinfo ENOTFOUND") || e.message.includes("connect ECONNREFUSED") ? Error(`Unavailable ${r} RPC url at ${t}`) : e
            }
            var tz = r(36014);

            function tH(e = 3) {
                return Date.now() * Math.pow(10, e) + Math.floor(Math.random() * Math.pow(10, e))
            }

            function tB(e = 6) {
                return BigInt(tH(e))
            }

            function tV(e, t, r) {
                return {
                    id: r || tH(),
                    jsonrpc: "2.0",
                    method: e,
                    params: t
                }
            }

            function tK(e, t) {
                return {
                    id: e,
                    jsonrpc: "2.0",
                    result: t
                }
            }

            function tF(e, t, r) {
                var i, n, s;
                return {
                    id: e,
                    jsonrpc: "2.0",
                    error: void 0 === (i = t) ? t$(tD) : ("string" == typeof i && (i = Object.assign(Object.assign({}, t$(tk)), {
                        message: i
                    })), void 0 !== r && (i.data = r), n = i.code, tM.includes(n) && (s = i.code, i = Object.values(tq).find(e => e.code === s) || tq[tk]), i)
                }
            }
            class tW {}
            class tG extends tW {
                constructor() {
                    super()
                }
            }
            class tQ extends tG {
                constructor(e) {
                    super()
                }
            }

            function tJ(e, t) {
                let r = function(e) {
                    let t = e.match(RegExp(/^\w+:/, "gi"));
                    if (t && t.length) return t[0]
                }(e);
                return void 0 !== r && new RegExp(t).test(r)
            }

            function tY(e) {
                return tJ(e, "^https?:")
            }

            function tZ(e) {
                return tJ(e, "^wss?:")
            }

            function tX(e) {
                return "object" == typeof e && "id" in e && "jsonrpc" in e && "2.0" === e.jsonrpc
            }

            function t0(e) {
                return tX(e) && "method" in e
            }

            function t1(e) {
                return tX(e) && (t5(e) || t6(e))
            }

            function t5(e) {
                return "result" in e
            }

            function t6(e) {
                return "error" in e
            }
            class t2 extends tQ {
                constructor(e) {
                    super(e), this.events = new n.EventEmitter, this.hasRegisteredEventListeners = !1, this.connection = this.setConnection(e), this.connection.connected && this.registerEventListeners()
                }
                async connect(e = this.connection) {
                    await this.open(e)
                }
                async disconnect() {
                    await this.close()
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async request(e, t) {
                    return this.requestStrict(tV(e.method, e.params || [], e.id || tB().toString()), t)
                }
                async requestStrict(e, t) {
                    return new Promise(async (r, i) => {
                        if (!this.connection.connected) try {
                            await this.open()
                        } catch (e) {
                            i(e)
                        }
                        this.events.on(`${e.id}`, e => {
                            t6(e) ? i(e.error) : r(e.result)
                        });
                        try {
                            await this.connection.send(e, t)
                        } catch (e) {
                            i(e)
                        }
                    })
                }
                setConnection(e = this.connection) {
                    return e
                }
                onPayload(e) {
                    this.events.emit("payload", e), t1(e) ? this.events.emit(`${e.id}`, e) : this.events.emit("message", {
                        type: e.method,
                        data: e.params
                    })
                }
                onClose(e) {
                    e && 3e3 === e.code && this.events.emit("error", Error(`WebSocket connection closed abnormally with code: ${e.code} ${e.reason?`(${e.reason})`:""}`)), this.events.emit("disconnect")
                }
                async open(e = this.connection) {
                    this.connection === e && this.connection.connected || (this.connection.connected && this.close(), "string" == typeof e && (await this.connection.open(e), e = this.connection), this.connection = this.setConnection(e), await this.connection.open(), this.registerEventListeners(), this.events.emit("connect"))
                }
                async close() {
                    await this.connection.close()
                }
                registerEventListeners() {
                    this.hasRegisteredEventListeners || (this.connection.on("payload", e => this.onPayload(e)), this.connection.on("close", e => this.onClose(e)), this.connection.on("error", e => this.events.emit("error", e)), this.connection.on("register_error", e => this.onClose()), this.hasRegisteredEventListeners = !0)
                }
            }
            let t3 = () => "u" > typeof WebSocket || "u" > typeof r.g && "u" > typeof r.g.WebSocket || "u" > typeof window && "u" > typeof window.WebSocket || "u" > typeof self && "u" > typeof self.WebSocket,
                t9 = e => e.split("?")[0],
                t4 = "u" > typeof WebSocket ? WebSocket : "u" > typeof r.g && "u" > typeof r.g.WebSocket ? r.g.WebSocket : "u" > typeof window && "u" > typeof window.WebSocket ? window.WebSocket : "u" > typeof self && "u" > typeof self.WebSocket ? self.WebSocket : r(44623);
            class t8 {
                constructor(e) {
                    if (this.url = e, this.events = new n.EventEmitter, this.registering = !1, !tZ(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    this.url = e
                }
                get connected() {
                    return "u" > typeof this.socket
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open(e = this.url) {
                    await this.register(e)
                }
                async close() {
                    return new Promise((e, t) => {
                        if (typeof this.socket > "u") {
                            t(Error("Connection already closed"));
                            return
                        }
                        this.socket.onclose = t => {
                            this.onClose(t), e()
                        }, this.socket.close()
                    })
                }
                async send(e) {
                    typeof this.socket > "u" && (this.socket = await this.register());
                    try {
                        this.socket.send(tt(e))
                    } catch (t) {
                        this.onError(e.id, t)
                    }
                }
                register(e = this.url) {
                    if (!tZ(e)) throw Error(`Provided URL is not compatible with WebSocket connection: ${e}`);
                    if (this.registering) {
                        let e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                            this.events.once("register_error", e => {
                                this.resetMaxListeners(), t(e)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), typeof this.socket > "u") return t(Error("WebSocket connection is missing or invalid"));
                                e(this.socket)
                            })
                        })
                    }
                    return this.url = e, this.registering = !0, new Promise((t, r) => {
                        let i = new URLSearchParams(e).get("origin"),
                            n = (0, tz.isReactNative)() ? {
                                headers: {
                                    origin: i
                                }
                            } : {
                                rejectUnauthorized: !RegExp("wss?://localhost(:d{2,5})?").test(e)
                            },
                            s = new t4(e, [], n);
                        t3() ? s.onerror = e => {
                            r(this.emitError(e.error))
                        } : s.on("error", e => {
                            r(this.emitError(e))
                        }), s.onopen = () => {
                            this.onOpen(s), t(s)
                        }
                    })
                }
                onOpen(e) {
                    e.onmessage = e => this.onPayload(e), e.onclose = e => this.onClose(e), this.socket = e, this.registering = !1, this.events.emit("open")
                }
                onClose(e) {
                    this.socket = void 0, this.registering = !1, this.events.emit("close", e)
                }
                onPayload(e) {
                    if (typeof e.data > "u") return;
                    let t = "string" == typeof e.data ? te(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    let r = this.parseError(t),
                        i = tF(e, r.message || r.toString());
                    this.events.emit("payload", i)
                }
                parseError(e, t = this.url) {
                    return tU(e, t9(t), "WS")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
                emitError(e) {
                    let t = this.parseError(Error(e ? .message || `WebSocket connection failed for host: ${t9(this.url)}`));
                    return this.events.emit("register_error", t), t
                }
            }
            var t7 = r(99780),
                re = r.n(t7),
                rt = r(62601),
                rr = function(e, t) {
                    if (e.length >= 255) throw TypeError("Alphabet too long");
                    for (var r = new Uint8Array(256), i = 0; i < r.length; i++) r[i] = 255;
                    for (var n = 0; n < e.length; n++) {
                        var s = e.charAt(n),
                            o = s.charCodeAt(0);
                        if (255 !== r[o]) throw TypeError(s + " is ambiguous");
                        r[o] = n
                    }
                    var a = e.length,
                        c = e.charAt(0),
                        u = Math.log(a) / Math.log(256),
                        l = Math.log(256) / Math.log(a);

                    function h(e) {
                        if ("string" != typeof e) throw TypeError("Expected String");
                        if (0 === e.length) return new Uint8Array;
                        var t = 0;
                        if (" " !== e[0]) {
                            for (var i = 0, n = 0; e[t] === c;) i++, t++;
                            for (var s = (e.length - t) * u + 1 >>> 0, o = new Uint8Array(s); e[t];) {
                                var l = r[e.charCodeAt(t)];
                                if (255 === l) return;
                                for (var h = 0, f = s - 1;
                                    (0 !== l || h < n) && -1 !== f; f--, h++) l += a * o[f] >>> 0, o[f] = l % 256 >>> 0, l = l / 256 >>> 0;
                                if (0 !== l) throw Error("Non-zero carry");
                                n = h, t++
                            }
                            if (" " !== e[t]) {
                                for (var p = s - n; p !== s && 0 === o[p];) p++;
                                for (var d = new Uint8Array(i + (s - p)), g = i; p !== s;) d[g++] = o[p++];
                                return d
                            }
                        }
                    }
                    return {
                        encode: function(t) {
                            if (t instanceof Uint8Array || (ArrayBuffer.isView(t) ? t = new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : Array.isArray(t) && (t = Uint8Array.from(t))), !(t instanceof Uint8Array)) throw TypeError("Expected Uint8Array");
                            if (0 === t.length) return "";
                            for (var r = 0, i = 0, n = 0, s = t.length; n !== s && 0 === t[n];) n++, r++;
                            for (var o = (s - n) * l + 1 >>> 0, u = new Uint8Array(o); n !== s;) {
                                for (var h = t[n], f = 0, p = o - 1;
                                    (0 !== h || f < i) && -1 !== p; p--, f++) h += 256 * u[p] >>> 0, u[p] = h % a >>> 0, h = h / a >>> 0;
                                if (0 !== h) throw Error("Non-zero carry");
                                i = f, n++
                            }
                            for (var d = o - i; d !== o && 0 === u[d];) d++;
                            for (var g = c.repeat(r); d < o; ++d) g += e.charAt(u[d]);
                            return g
                        },
                        decodeUnsafe: h,
                        decode: function(e) {
                            var r = h(e);
                            if (r) return r;
                            throw Error(`Non-${t} character`)
                        }
                    }
                };
            let ri = e => {
                    if (e instanceof Uint8Array && "Uint8Array" === e.constructor.name) return e;
                    if (e instanceof ArrayBuffer) return new Uint8Array(e);
                    if (ArrayBuffer.isView(e)) return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
                    throw Error("Unknown type, must be binary type")
                },
                rn = e => new TextEncoder().encode(e),
                rs = e => new TextDecoder().decode(e);
            class ro {
                constructor(e, t, r) {
                    this.name = e, this.prefix = t, this.baseEncode = r
                }
                encode(e) {
                    if (e instanceof Uint8Array) return `${this.prefix}${this.baseEncode(e)}`;
                    throw Error("Unknown type, must be binary type")
                }
            }
            class ra {
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
                    return ru(this, e)
                }
            }
            class rc {
                constructor(e) {
                    this.decoders = e
                }
                or(e) {
                    return ru(this, e)
                }
                decode(e) {
                    let t = e[0],
                        r = this.decoders[t];
                    if (r) return r.decode(e);
                    throw RangeError(`Unable to decode multibase string ${JSON.stringify(e)}, only inputs prefixed with ${Object.keys(this.decoders)} are supported`)
                }
            }
            let ru = (e, t) => new rc({ ...e.decoders || {
                    [e.prefix]: e
                },
                ...t.decoders || {
                    [t.prefix]: t
                }
            });
            class rl {
                constructor(e, t, r, i) {
                    this.name = e, this.prefix = t, this.baseEncode = r, this.baseDecode = i, this.encoder = new ro(e, t, r), this.decoder = new ra(e, t, i)
                }
                encode(e) {
                    return this.encoder.encode(e)
                }
                decode(e) {
                    return this.decoder.decode(e)
                }
            }
            let rh = ({
                    name: e,
                    prefix: t,
                    encode: r,
                    decode: i
                }) => new rl(e, t, r, i),
                rf = ({
                    prefix: e,
                    name: t,
                    alphabet: r
                }) => {
                    let {
                        encode: i,
                        decode: n
                    } = rr(r, t);
                    return rh({
                        prefix: e,
                        name: t,
                        encode: i,
                        decode: e => ri(n(e))
                    })
                },
                rp = (e, t, r, i) => {
                    let n = {};
                    for (let e = 0; e < t.length; ++e) n[t[e]] = e;
                    let s = e.length;
                    for (;
                        "=" === e[s - 1];) --s;
                    let o = new Uint8Array(s * r / 8 | 0),
                        a = 0,
                        c = 0,
                        u = 0;
                    for (let t = 0; t < s; ++t) {
                        let s = n[e[t]];
                        if (void 0 === s) throw SyntaxError(`Non-${i} character`);
                        c = c << r | s, (a += r) >= 8 && (a -= 8, o[u++] = 255 & c >> a)
                    }
                    if (a >= r || 255 & c << 8 - a) throw SyntaxError("Unexpected end of data");
                    return o
                },
                rd = (e, t, r) => {
                    let i = "=" === t[t.length - 1],
                        n = (1 << r) - 1,
                        s = "",
                        o = 0,
                        a = 0;
                    for (let i = 0; i < e.length; ++i)
                        for (a = a << 8 | e[i], o += 8; o > r;) o -= r, s += t[n & a >> o];
                    if (o && (s += t[n & a << r - o]), i)
                        for (; s.length * r & 7;) s += "=";
                    return s
                },
                rg = ({
                    name: e,
                    prefix: t,
                    bitsPerChar: r,
                    alphabet: i
                }) => rh({
                    prefix: t,
                    name: e,
                    encode: e => rd(e, i, r),
                    decode: t => rp(t, i, r, e)
                });
            var ry = Object.freeze({
                    __proto__: null,
                    identity: rh({
                        prefix: "\x00",
                        name: "identity",
                        encode: e => rs(e),
                        decode: e => rn(e)
                    })
                }),
                rv = Object.freeze({
                    __proto__: null,
                    base2: rg({
                        prefix: "0",
                        name: "base2",
                        alphabet: "01",
                        bitsPerChar: 1
                    })
                }),
                rm = Object.freeze({
                    __proto__: null,
                    base8: rg({
                        prefix: "7",
                        name: "base8",
                        alphabet: "01234567",
                        bitsPerChar: 3
                    })
                }),
                rb = Object.freeze({
                    __proto__: null,
                    base10: rf({
                        prefix: "9",
                        name: "base10",
                        alphabet: "0123456789"
                    })
                }),
                r_ = Object.freeze({
                    __proto__: null,
                    base16: rg({
                        prefix: "f",
                        name: "base16",
                        alphabet: "0123456789abcdef",
                        bitsPerChar: 4
                    }),
                    base16upper: rg({
                        prefix: "F",
                        name: "base16upper",
                        alphabet: "0123456789ABCDEF",
                        bitsPerChar: 4
                    })
                });
            let rw = rg({
                    prefix: "b",
                    name: "base32",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567",
                    bitsPerChar: 5
                }),
                rE = rg({
                    prefix: "B",
                    name: "base32upper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567",
                    bitsPerChar: 5
                }),
                rI = rg({
                    prefix: "c",
                    name: "base32pad",
                    alphabet: "abcdefghijklmnopqrstuvwxyz234567=",
                    bitsPerChar: 5
                }),
                rP = rg({
                    prefix: "C",
                    name: "base32padupper",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567=",
                    bitsPerChar: 5
                }),
                rS = rg({
                    prefix: "v",
                    name: "base32hex",
                    alphabet: "0123456789abcdefghijklmnopqrstuv",
                    bitsPerChar: 5
                }),
                rO = rg({
                    prefix: "V",
                    name: "base32hexupper",
                    alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV",
                    bitsPerChar: 5
                });
            var rx = Object.freeze({
                    __proto__: null,
                    base32: rw,
                    base32upper: rE,
                    base32pad: rI,
                    base32padupper: rP,
                    base32hex: rS,
                    base32hexupper: rO,
                    base32hexpad: rg({
                        prefix: "t",
                        name: "base32hexpad",
                        alphabet: "0123456789abcdefghijklmnopqrstuv=",
                        bitsPerChar: 5
                    }),
                    base32hexpadupper: rg({
                        prefix: "T",
                        name: "base32hexpadupper",
                        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUV=",
                        bitsPerChar: 5
                    }),
                    base32z: rg({
                        prefix: "h",
                        name: "base32z",
                        alphabet: "ybndrfg8ejkmcpqxot1uwisza345h769",
                        bitsPerChar: 5
                    })
                }),
                rN = Object.freeze({
                    __proto__: null,
                    base36: rf({
                        prefix: "k",
                        name: "base36",
                        alphabet: "0123456789abcdefghijklmnopqrstuvwxyz"
                    }),
                    base36upper: rf({
                        prefix: "K",
                        name: "base36upper",
                        alphabet: "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ"
                    })
                }),
                rR = Object.freeze({
                    __proto__: null,
                    base58btc: rf({
                        name: "base58btc",
                        prefix: "z",
                        alphabet: "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"
                    }),
                    base58flickr: rf({
                        name: "base58flickr",
                        prefix: "Z",
                        alphabet: "123456789abcdefghijkmnopqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ"
                    })
                });
            let rA = rg({
                prefix: "m",
                name: "base64",
                alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
                bitsPerChar: 6
            });
            var rC = Object.freeze({
                __proto__: null,
                base64: rA,
                base64pad: rg({
                    prefix: "M",
                    name: "base64pad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
                    bitsPerChar: 6
                }),
                base64url: rg({
                    prefix: "u",
                    name: "base64url",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_",
                    bitsPerChar: 6
                }),
                base64urlpad: rg({
                    prefix: "U",
                    name: "base64urlpad",
                    alphabet: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_=",
                    bitsPerChar: 6
                })
            });
            let rj = Array.from("\uD83D\uDE80\uD83E\uDE90☄\uD83D\uDEF0\uD83C\uDF0C\uD83C\uDF11\uD83C\uDF12\uD83C\uDF13\uD83C\uDF14\uD83C\uDF15\uD83C\uDF16\uD83C\uDF17\uD83C\uDF18\uD83C\uDF0D\uD83C\uDF0F\uD83C\uDF0E\uD83D\uDC09☀\uD83D\uDCBB\uD83D\uDDA5\uD83D\uDCBE\uD83D\uDCBF\uD83D\uDE02❤\uD83D\uDE0D\uD83E\uDD23\uD83D\uDE0A\uD83D\uDE4F\uD83D\uDC95\uD83D\uDE2D\uD83D\uDE18\uD83D\uDC4D\uD83D\uDE05\uD83D\uDC4F\uD83D\uDE01\uD83D\uDD25\uD83E\uDD70\uD83D\uDC94\uD83D\uDC96\uD83D\uDC99\uD83D\uDE22\uD83E\uDD14\uD83D\uDE06\uD83D\uDE44\uD83D\uDCAA\uD83D\uDE09☺\uD83D\uDC4C\uD83E\uDD17\uD83D\uDC9C\uD83D\uDE14\uD83D\uDE0E\uD83D\uDE07\uD83C\uDF39\uD83E\uDD26\uD83C\uDF89\uD83D\uDC9E✌✨\uD83E\uDD37\uD83D\uDE31\uD83D\uDE0C\uD83C\uDF38\uD83D\uDE4C\uD83D\uDE0B\uD83D\uDC97\uD83D\uDC9A\uD83D\uDE0F\uD83D\uDC9B\uD83D\uDE42\uD83D\uDC93\uD83E\uDD29\uD83D\uDE04\uD83D\uDE00\uD83D\uDDA4\uD83D\uDE03\uD83D\uDCAF\uD83D\uDE48\uD83D\uDC47\uD83C\uDFB6\uD83D\uDE12\uD83E\uDD2D❣\uD83D\uDE1C\uD83D\uDC8B\uD83D\uDC40\uD83D\uDE2A\uD83D\uDE11\uD83D\uDCA5\uD83D\uDE4B\uD83D\uDE1E\uD83D\uDE29\uD83D\uDE21\uD83E\uDD2A\uD83D\uDC4A\uD83E\uDD73\uD83D\uDE25\uD83E\uDD24\uD83D\uDC49\uD83D\uDC83\uD83D\uDE33✋\uD83D\uDE1A\uD83D\uDE1D\uD83D\uDE34\uD83C\uDF1F\uD83D\uDE2C\uD83D\uDE43\uD83C\uDF40\uD83C\uDF37\uD83D\uDE3B\uD83D\uDE13⭐✅\uD83E\uDD7A\uD83C\uDF08\uD83D\uDE08\uD83E\uDD18\uD83D\uDCA6✔\uD83D\uDE23\uD83C\uDFC3\uD83D\uDC90☹\uD83C\uDF8A\uD83D\uDC98\uD83D\uDE20☝\uD83D\uDE15\uD83C\uDF3A\uD83C\uDF82\uD83C\uDF3B\uD83D\uDE10\uD83D\uDD95\uD83D\uDC9D\uD83D\uDE4A\uD83D\uDE39\uD83D\uDDE3\uD83D\uDCAB\uD83D\uDC80\uD83D\uDC51\uD83C\uDFB5\uD83E\uDD1E\uD83D\uDE1B\uD83D\uDD34\uD83D\uDE24\uD83C\uDF3C\uD83D\uDE2B⚽\uD83E\uDD19☕\uD83C\uDFC6\uD83E\uDD2B\uD83D\uDC48\uD83D\uDE2E\uD83D\uDE46\uD83C\uDF7B\uD83C\uDF43\uD83D\uDC36\uD83D\uDC81\uD83D\uDE32\uD83C\uDF3F\uD83E\uDDE1\uD83C\uDF81⚡\uD83C\uDF1E\uD83C\uDF88❌✊\uD83D\uDC4B\uD83D\uDE30\uD83E\uDD28\uD83D\uDE36\uD83E\uDD1D\uD83D\uDEB6\uD83D\uDCB0\uD83C\uDF53\uD83D\uDCA2\uD83E\uDD1F\uD83D\uDE41\uD83D\uDEA8\uD83D\uDCA8\uD83E\uDD2C✈\uD83C\uDF80\uD83C\uDF7A\uD83E\uDD13\uD83D\uDE19\uD83D\uDC9F\uD83C\uDF31\uD83D\uDE16\uD83D\uDC76\uD83E\uDD74▶➡❓\uD83D\uDC8E\uD83D\uDCB8⬇\uD83D\uDE28\uD83C\uDF1A\uD83E\uDD8B\uD83D\uDE37\uD83D\uDD7A⚠\uD83D\uDE45\uD83D\uDE1F\uD83D\uDE35\uD83D\uDC4E\uD83E\uDD32\uD83E\uDD20\uD83E\uDD27\uD83D\uDCCC\uD83D\uDD35\uD83D\uDC85\uD83E\uDDD0\uD83D\uDC3E\uD83C\uDF52\uD83D\uDE17\uD83E\uDD11\uD83C\uDF0A\uD83E\uDD2F\uD83D\uDC37☎\uD83D\uDCA7\uD83D\uDE2F\uD83D\uDC86\uD83D\uDC46\uD83C\uDFA4\uD83D\uDE47\uD83C\uDF51❄\uD83C\uDF34\uD83D\uDCA3\uD83D\uDC38\uD83D\uDC8C\uD83D\uDCCD\uD83E\uDD40\uD83E\uDD22\uD83D\uDC45\uD83D\uDCA1\uD83D\uDCA9\uD83D\uDC50\uD83D\uDCF8\uD83D\uDC7B\uD83E\uDD10\uD83E\uDD2E\uD83C\uDFBC\uD83E\uDD75\uD83D\uDEA9\uD83C\uDF4E\uD83C\uDF4A\uD83D\uDC7C\uD83D\uDC8D\uD83D\uDCE3\uD83E\uDD42"),
                rT = rj.reduce((e, t, r) => (e[r] = t, e), []),
                rL = rj.reduce((e, t, r) => (e[t.codePointAt(0)] = r, e), []);
            var rD = Object.freeze({
                    __proto__: null,
                    base256emoji: rh({
                        prefix: "\uD83D\uDE80",
                        name: "base256emoji",
                        encode: function(e) {
                            return e.reduce((e, t) => e += rT[t], "")
                        },
                        decode: function(e) {
                            let t = [];
                            for (let r of e) {
                                let e = rL[r.codePointAt(0)];
                                if (void 0 === e) throw Error(`Non-base256emoji character: ${r}`);
                                t.push(e)
                            }
                            return new Uint8Array(t)
                        }
                    })
                }),
                rk = {
                    encode: function e(t, r, i) {
                        r = r || [], i = i || 0;
                        for (var n = i; t >= 2147483648;) r[i++] = 255 & t | 128, t /= 128;
                        for (; - 128 & t;) r[i++] = 255 & t | 128, t >>>= 7;
                        return r[i] = 0 | t, e.bytes = i - n + 1, r
                    },
                    decode: function e(t, r) {
                        var i, n = 0,
                            r = r || 0,
                            s = 0,
                            o = r,
                            a = t.length;
                        do {
                            if (o >= a) throw e.bytes = 0, RangeError("Could not decode varint");
                            i = t[o++], n += s < 28 ? (127 & i) << s : (127 & i) * Math.pow(2, s), s += 7
                        } while (i >= 128);
                        return e.bytes = o - r, n
                    },
                    encodingLength: function(e) {
                        return e < 128 ? 1 : e < 16384 ? 2 : e < 2097152 ? 3 : e < 268435456 ? 4 : e < 34359738368 ? 5 : e < 4398046511104 ? 6 : e < 562949953421312 ? 7 : e < 72057594037927940 ? 8 : e < 0x7fffffffffffffff ? 9 : 10
                    }
                };
            let rM = (e, t, r = 0) => (rk.encode(e, t, r), t),
                rq = e => rk.encodingLength(e),
                r$ = (e, t) => {
                    let r = t.byteLength,
                        i = rq(e),
                        n = i + rq(r),
                        s = new Uint8Array(n + r);
                    return rM(e, s, 0), rM(r, s, i), s.set(t, n), new rU(e, r, t, s)
                };
            class rU {
                constructor(e, t, r, i) {
                    this.code = e, this.size = t, this.digest = r, this.bytes = i
                }
            }
            let rz = ({
                name: e,
                code: t,
                encode: r
            }) => new rH(e, t, r);
            class rH {
                constructor(e, t, r) {
                    this.name = e, this.code = t, this.encode = r
                }
                digest(e) {
                    if (e instanceof Uint8Array) {
                        let t = this.encode(e);
                        return t instanceof Uint8Array ? r$(this.code, t) : t.then(e => r$(this.code, e))
                    }
                    throw Error("Unknown type, must be binary type")
                }
            }
            let rB = e => async t => new Uint8Array(await crypto.subtle.digest(e, t));
            var rV = Object.freeze({
                    __proto__: null,
                    sha256: rz({
                        name: "sha2-256",
                        code: 18,
                        encode: rB("SHA-256")
                    }),
                    sha512: rz({
                        name: "sha2-512",
                        code: 19,
                        encode: rB("SHA-512")
                    })
                }),
                rK = Object.freeze({
                    __proto__: null,
                    identity: {
                        code: 0,
                        name: "identity",
                        encode: ri,
                        digest: e => r$(0, ri(e))
                    }
                });
            new TextEncoder, new TextDecoder;
            let rF = { ...ry,
                ...rv,
                ...rm,
                ...rb,
                ...r_,
                ...rx,
                ...rN,
                ...rR,
                ...rC,
                ...rD
            };

            function rW(e) {
                return null != globalThis.Buffer ? new Uint8Array(e.buffer, e.byteOffset, e.byteLength) : e
            }

            function rG(e, t, r, i) {
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
            }({ ...rV,
                ...rK
            });
            let rQ = rG("utf8", "u", e => "u" + new TextDecoder("utf8").decode(e), e => new TextEncoder().encode(e.substring(1))),
                rJ = rG("ascii", "a", e => {
                    let t = "a";
                    for (let r = 0; r < e.length; r++) t += String.fromCharCode(e[r]);
                    return t
                }, e => {
                    let t = function(e = 0) {
                        return null != globalThis.Buffer && null != globalThis.Buffer.allocUnsafe ? rW(globalThis.Buffer.allocUnsafe(e)) : new Uint8Array(e)
                    }((e = e.substring(1)).length);
                    for (let r = 0; r < e.length; r++) t[r] = e.charCodeAt(r);
                    return t
                }),
                rY = {
                    utf8: rQ,
                    "utf-8": rQ,
                    hex: rF.base16,
                    latin1: rJ,
                    ascii: rJ,
                    binary: rJ,
                    ...rF
                },
                rZ = "core",
                rX = `wc@2:${rZ}:`,
                r0 = {
                    logger: "error"
                },
                r1 = {
                    database: ":memory:"
                },
                r5 = "client_ed25519_seed",
                r6 = I.ONE_DAY,
                r2 = I.SIX_HOURS,
                r3 = "wss://relay.walletconnect.com",
                r9 = "wss://relay.walletconnect.org",
                r4 = {
                    message: "relayer_message",
                    message_ack: "relayer_message_ack",
                    connect: "relayer_connect",
                    disconnect: "relayer_disconnect",
                    error: "relayer_error",
                    connection_stalled: "relayer_connection_stalled",
                    publish: "relayer_publish"
                },
                r8 = {
                    payload: "payload",
                    connect: "connect",
                    disconnect: "disconnect",
                    error: "error"
                },
                r7 = I.ONE_SECOND,
                ie = {
                    created: "subscription_created",
                    deleted: "subscription_deleted",
                    sync: "subscription_sync",
                    resubscribed: "subscription_resubscribed"
                },
                it = 1e3 * I.FIVE_SECONDS,
                ir = {
                    wc_pairingDelete: {
                        req: {
                            ttl: I.ONE_DAY,
                            prompt: !1,
                            tag: 1e3
                        },
                        res: {
                            ttl: I.ONE_DAY,
                            prompt: !1,
                            tag: 1001
                        }
                    },
                    wc_pairingPing: {
                        req: {
                            ttl: I.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1002
                        },
                        res: {
                            ttl: I.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1003
                        }
                    },
                    unregistered_method: {
                        req: {
                            ttl: I.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        },
                        res: {
                            ttl: I.ONE_DAY,
                            prompt: !1,
                            tag: 0
                        }
                    }
                },
                ii = {
                    create: "pairing_create",
                    expire: "pairing_expire",
                    delete: "pairing_delete",
                    ping: "pairing_ping"
                },
                is = {
                    created: "history_created",
                    updated: "history_updated",
                    deleted: "history_deleted",
                    sync: "history_sync"
                },
                io = {
                    created: "expirer_created",
                    deleted: "expirer_deleted",
                    expired: "expirer_expired",
                    sync: "expirer_sync"
                },
                ia = "verify-api",
                ic = "https://verify.walletconnect.com",
                iu = "https://verify.walletconnect.org",
                il = [ic, iu];
            class ih {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.keychain = new Map, this.name = "keychain", this.version = "0.3", this.initialized = !1, this.storagePrefix = rX, this.init = async () => {
                        if (!this.initialized) {
                            let e = await this.getKeyChain();
                            "u" > typeof e && (this.keychain = e), this.initialized = !0
                        }
                    }, this.has = e => (this.isInitialized(), this.keychain.has(e)), this.set = async (e, t) => {
                        this.isInitialized(), this.keychain.set(e, t), await this.persist()
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.keychain.get(e);
                        if (typeof t > "u") {
                            let {
                                message: t
                            } = eP("NO_MATCHING_KEY", `${this.name}: ${e}`);
                            throw Error(t)
                        }
                        return t
                    }, this.del = async e => {
                        this.isInitialized(), this.keychain.delete(e), await this.persist()
                    }, this.core = e, this.logger = (0, tf.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, tf.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setKeyChain(e) {
                    await this.core.storage.setItem(this.storageKey, Z(e))
                }
                async getKeyChain() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? X(e) : void 0
                }
                async persist() {
                    await this.setKeyChain(this.keychain)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = eP("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class ip {
                constructor(e, t, r) {
                    this.core = e, this.logger = t, this.name = "crypto", this.initialized = !1, this.init = async () => {
                        this.initialized || (await this.keychain.init(), this.initialized = !0)
                    }, this.hasKeys = e => (this.isInitialized(), this.keychain.has(e)), this.getClientId = async () => (this.isInitialized(), tj(tT(await this.getClientSeed()).publicKey)), this.generateKeyPair = () => {
                        this.isInitialized();
                        let e = function() {
                            let e = l.Au();
                            return {
                                privateKey: (0, h.BB)(e.secretKey, C),
                                publicKey: (0, h.BB)(e.publicKey, C)
                            }
                        }();
                        return this.setPrivateKey(e.publicKey, e.privateKey)
                    }, this.signJWT = async e => {
                        this.isInitialized();
                        let t = tT(await this.getClientSeed()),
                            r = L();
                        return await tL(r, e, r6, t)
                    }, this.generateSharedKey = (e, t, r) => {
                        this.isInitialized();
                        let i = function(e, t) {
                            let r = l.gi((0, h.mL)(e, C), (0, h.mL)(t, C), !0),
                                i = new a.t(u.mE, r).expand(32);
                            return (0, h.BB)(i, C)
                        }(this.getPrivateKey(e), t);
                        return this.setSymKey(i, r)
                    }, this.setSymKey = async (e, t) => {
                        this.isInitialized();
                        let r = t || function(e) {
                            let t = (0, u.vp)((0, h.mL)(e, C));
                            return (0, h.BB)(t, C)
                        }(e);
                        return await this.keychain.set(r, e), r
                    }, this.deleteKeyPair = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.deleteSymKey = async e => {
                        this.isInitialized(), await this.keychain.del(e)
                    }, this.encode = async (e, t, r) => {
                        this.isInitialized();
                        let i = q(r),
                            n = tt(t);
                        if ($(i)) {
                            let t = i.senderPublicKey,
                                r = i.receiverPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        let s = this.getSymKey(e),
                            {
                                type: a,
                                senderPublicKey: u
                            } = i;
                        return function(e) {
                            var t;
                            let r = (t = "u" > typeof e.type ? e.type : 0, (0, h.mL)(`${t}`, A));
                            if (1 === k(r) && typeof e.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
                            let i = "u" > typeof e.senderPublicKey ? (0, h.mL)(e.senderPublicKey, C) : void 0,
                                n = "u" > typeof e.iv ? (0, h.mL)(e.iv, C) : (0, c.randomBytes)(12);
                            return function(e) {
                                if (1 === k(e.type)) {
                                    if (typeof e.senderPublicKey > "u") throw Error("Missing sender public key for type 1 envelope");
                                    return (0, h.BB)((0, h.zo)([e.type, e.senderPublicKey, e.iv, e.sealed]), j)
                                }
                                return (0, h.BB)((0, h.zo)([e.type, e.iv, e.sealed]), j)
                            }({
                                type: r,
                                sealed: new o.OK((0, h.mL)(e.symKey, C)).seal(n, (0, h.mL)(e.message, T)),
                                iv: n,
                                senderPublicKey: i
                            })
                        }({
                            type: a,
                            symKey: s,
                            message: n,
                            senderPublicKey: u
                        })
                    }, this.decode = async (e, t, r) => {
                        this.isInitialized();
                        let i = function(e, t) {
                            let r = M(e);
                            return q({
                                type: k(r.type),
                                senderPublicKey: "u" > typeof r.senderPublicKey ? (0, h.BB)(r.senderPublicKey, C) : void 0,
                                receiverPublicKey: t ? .receiverPublicKey
                            })
                        }(t, r);
                        if ($(i)) {
                            let t = i.receiverPublicKey,
                                r = i.senderPublicKey;
                            e = await this.generateSharedKey(t, r)
                        }
                        try {
                            let r = this.getSymKey(e),
                                i = function(e) {
                                    let t = new o.OK((0, h.mL)(e.symKey, C)),
                                        {
                                            sealed: r,
                                            iv: i
                                        } = M(e.encoded),
                                        n = t.open(i, r);
                                    if (null === n) throw Error("Failed to decrypt");
                                    return (0, h.BB)(n, T)
                                }({
                                    symKey: r,
                                    encoded: t
                                });
                            return te(i)
                        } catch (t) {
                            this.logger.error(`Failed to decode message from topic: '${e}', clientId: '${await this.getClientId()}'`), this.logger.error(t)
                        }
                    }, this.getPayloadType = e => k(M(e).type), this.getPayloadSenderPublicKey = e => {
                        let t = M(e);
                        return t.senderPublicKey ? (0, h.BB)(t.senderPublicKey, C) : void 0
                    }, this.core = e, this.logger = (0, tf.generateChildLogger)(t, this.name), this.keychain = r || new ih(this.core, this.logger)
                }
                get context() {
                    return (0, tf.getLoggerContext)(this.logger)
                }
                async setPrivateKey(e, t) {
                    return await this.keychain.set(e, t), e
                }
                getPrivateKey(e) {
                    return this.keychain.get(e)
                }
                async getClientSeed() {
                    let e = "";
                    try {
                        e = this.keychain.get(r5)
                    } catch {
                        e = L(), await this.keychain.set(r5, e)
                    }
                    return function(e, t = "utf8") {
                        let r = rY[t];
                        if (!r) throw Error(`Unsupported encoding "${t}"`);
                        return ("utf8" === t || "utf-8" === t) && null != globalThis.Buffer && null != globalThis.Buffer.from ? rW(globalThis.Buffer.from(e, "utf-8")) : r.decoder.decode(`${r.prefix}${e}`)
                    }(e, "base16")
                }
                getSymKey(e) {
                    return this.keychain.get(e)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = eP("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class id extends ty {
                constructor(e, t) {
                    super(e, t), this.logger = e, this.core = t, this.messages = new Map, this.name = "messages", this.version = "0.3", this.initialized = !1, this.storagePrefix = rX, this.init = async () => {
                        if (!this.initialized) {
                            this.logger.trace("Initialized");
                            try {
                                let e = await this.getRelayerMessages();
                                "u" > typeof e && (this.messages = e), this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                                    type: "method",
                                    method: "restore",
                                    size: this.messages.size
                                })
                            } catch (e) {
                                this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                            } finally {
                                this.initialized = !0
                            }
                        }
                    }, this.set = async (e, t) => {
                        this.isInitialized();
                        let r = D(t),
                            i = this.messages.get(e);
                        return typeof i > "u" && (i = {}), "u" > typeof i[r] || (i[r] = t, this.messages.set(e, i), await this.persist()), r
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.messages.get(e);
                        return typeof t > "u" && (t = {}), t
                    }, this.has = (e, t) => (this.isInitialized(), "u" > typeof this.get(e)[D(t)]), this.del = async e => {
                        this.isInitialized(), this.messages.delete(e), await this.persist()
                    }, this.logger = (0, tf.generateChildLogger)(e, this.name), this.core = t
                }
                get context() {
                    return (0, tf.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                async setRelayerMessages(e) {
                    await this.core.storage.setItem(this.storageKey, Z(e))
                }
                async getRelayerMessages() {
                    let e = await this.core.storage.getItem(this.storageKey);
                    return "u" > typeof e ? X(e) : void 0
                }
                async persist() {
                    await this.setRelayerMessages(this.messages)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = eP("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class ig extends tv {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.events = new n.EventEmitter, this.name = "publisher", this.queue = new Map, this.publishTimeout = (0, I.toMiliseconds)(I.TEN_SECONDS), this.needsTransportRestart = !1, this.publish = async (e, t, r) => {
                        var i;
                        this.logger.debug("Publishing Payload"), this.logger.trace({
                            type: "method",
                            method: "publish",
                            params: {
                                topic: e,
                                message: t,
                                opts: r
                            }
                        });
                        try {
                            let n = r ? .ttl || r2,
                                s = el(r),
                                o = r ? .prompt || !1,
                                a = r ? .tag || 0,
                                c = r ? .id || tB().toString(),
                                u = {
                                    topic: e,
                                    message: t,
                                    opts: {
                                        ttl: n,
                                        relay: s,
                                        prompt: o,
                                        tag: a,
                                        id: c
                                    }
                                },
                                l = setTimeout(() => this.queue.set(c, u), this.publishTimeout);
                            try {
                                await await et(this.rpcPublish(e, t, n, s, o, a, c), this.publishTimeout, "Failed to publish payload, please try again."), this.removeRequestFromQueue(c), this.relayer.events.emit(r4.publish, u)
                            } catch (e) {
                                if (this.logger.debug("Publishing Payload stalled"), this.needsTransportRestart = !0, null != (i = r ? .internal) && i.throwOnFailedPublish) throw this.removeRequestFromQueue(c), e;
                                return
                            } finally {
                                clearTimeout(l)
                            }
                            this.logger.debug("Successfully Published Payload"), this.logger.trace({
                                type: "method",
                                method: "publish",
                                params: {
                                    topic: e,
                                    message: t,
                                    opts: r
                                }
                            })
                        } catch (e) {
                            throw this.logger.debug("Failed to Publish Payload"), this.logger.error(e), e
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.relayer = e, this.logger = (0, tf.generateChildLogger)(t, this.name), this.registerEventListeners()
                }
                get context() {
                    return (0, tf.getLoggerContext)(this.logger)
                }
                rpcPublish(e, t, r, i, n, s, o) {
                    var a, c, u, l;
                    let h = {
                        method: eh(i.protocol).publish,
                        params: {
                            topic: e,
                            message: t,
                            ttl: r,
                            prompt: n,
                            tag: s
                        },
                        id: o
                    };
                    return eN(null == (a = h.params) ? void 0 : a.prompt) && (null == (c = h.params) || delete c.prompt), eN(null == (u = h.params) ? void 0 : u.tag) && (null == (l = h.params) || delete l.tag), this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "message",
                        direction: "outgoing",
                        request: h
                    }), this.relayer.request(h)
                }
                removeRequestFromQueue(e) {
                    this.queue.delete(e)
                }
                checkQueue() {
                    this.queue.forEach(async e => {
                        let {
                            topic: t,
                            message: r,
                            opts: i
                        } = e;
                        await this.publish(t, r, i)
                    })
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(th.HEARTBEAT_EVENTS.pulse, () => {
                        if (this.needsTransportRestart) {
                            this.needsTransportRestart = !1, this.relayer.events.emit(r4.connection_stalled);
                            return
                        }
                        this.checkQueue()
                    }), this.relayer.on(r4.message_ack, e => {
                        this.removeRequestFromQueue(e.id.toString())
                    })
                }
            }
            class iy {
                constructor() {
                    this.map = new Map, this.set = (e, t) => {
                        let r = this.get(e);
                        this.exists(e, t) || this.map.set(e, [...r, t])
                    }, this.get = e => this.map.get(e) || [], this.exists = (e, t) => this.get(e).includes(t), this.delete = (e, t) => {
                        if (typeof t > "u") {
                            this.map.delete(e);
                            return
                        }
                        if (!this.map.has(e)) return;
                        let r = this.get(e);
                        if (!this.exists(e, t)) return;
                        let i = r.filter(e => e !== t);
                        if (!i.length) {
                            this.map.delete(e);
                            return
                        }
                        this.map.set(e, i)
                    }, this.clear = () => {
                        this.map.clear()
                    }
                }
                get topics() {
                    return Array.from(this.map.keys())
                }
            }
            var iv = Object.defineProperty,
                im = Object.defineProperties,
                ib = Object.getOwnPropertyDescriptors,
                i_ = Object.getOwnPropertySymbols,
                iw = Object.prototype.hasOwnProperty,
                iE = Object.prototype.propertyIsEnumerable,
                iI = (e, t, r) => t in e ? iv(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                iP = (e, t) => {
                    for (var r in t || (t = {})) iw.call(t, r) && iI(e, r, t[r]);
                    if (i_)
                        for (var r of i_(t)) iE.call(t, r) && iI(e, r, t[r]);
                    return e
                },
                iS = (e, t) => im(e, ib(t));
            class iO extends t_ {
                constructor(e, t) {
                    super(e, t), this.relayer = e, this.logger = t, this.subscriptions = new Map, this.topicMap = new iy, this.events = new n.EventEmitter, this.name = "subscription", this.version = "0.3", this.pending = new Map, this.cached = [], this.initialized = !1, this.pendingSubscriptionWatchLabel = "pending_sub_watch_label", this.pollingInterval = 20, this.storagePrefix = rX, this.subscribeTimeout = 1e4, this.restartInProgress = !1, this.batchSubscribeTopicsLimit = 500, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), this.registerEventListeners(), this.clientId = await this.relayer.core.crypto.getClientId())
                    }, this.subscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), this.logger.debug("Subscribing Topic"), this.logger.trace({
                            type: "method",
                            method: "subscribe",
                            params: {
                                topic: e,
                                opts: t
                            }
                        });
                        try {
                            let r = el(t),
                                i = {
                                    topic: e,
                                    relay: r
                                };
                            this.pending.set(e, i);
                            let n = await this.rpcSubscribe(e, r);
                            return this.onSubscribe(n, i), this.logger.debug("Successfully Subscribed Topic"), this.logger.trace({
                                type: "method",
                                method: "subscribe",
                                params: {
                                    topic: e,
                                    opts: t
                                }
                            }), n
                        } catch (e) {
                            throw this.logger.debug("Failed to Subscribe Topic"), this.logger.error(e), e
                        }
                    }, this.unsubscribe = async (e, t) => {
                        await this.restartToComplete(), this.isInitialized(), "u" > typeof t ? .id ? await this.unsubscribeById(e, t.id, t) : await this.unsubscribeByTopic(e, t)
                    }, this.isSubscribed = async e => !!this.topics.includes(e) || await new Promise((t, r) => {
                        let i = new I.Watch;
                        i.start(this.pendingSubscriptionWatchLabel);
                        let n = setInterval(() => {
                            !this.pending.has(e) && this.topics.includes(e) && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), t(!0)), i.elapsed(this.pendingSubscriptionWatchLabel) >= it && (clearInterval(n), i.stop(this.pendingSubscriptionWatchLabel), r(Error("Subscription resolution timeout")))
                        }, this.pollingInterval)
                    }).catch(() => !1), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.restart = async () => {
                        this.restartInProgress = !0, await this.restore(), await this.reset(), this.restartInProgress = !1
                    }, this.relayer = e, this.logger = (0, tf.generateChildLogger)(t, this.name), this.clientId = ""
                }
                get context() {
                    return (0, tf.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.relayer.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.subscriptions.size
                }
                get ids() {
                    return Array.from(this.subscriptions.keys())
                }
                get values() {
                    return Array.from(this.subscriptions.values())
                }
                get topics() {
                    return this.topicMap.topics
                }
                hasSubscription(e, t) {
                    let r = !1;
                    try {
                        r = this.getSubscription(e).topic === t
                    } catch {}
                    return r
                }
                onEnable() {
                    this.cached = [], this.initialized = !0
                }
                onDisable() {
                    this.cached = this.values, this.subscriptions.clear(), this.topicMap.clear()
                }
                async unsubscribeByTopic(e, t) {
                    let r = this.topicMap.get(e);
                    await Promise.all(r.map(async r => await this.unsubscribeById(e, r, t)))
                }
                async unsubscribeById(e, t, r) {
                    this.logger.debug("Unsubscribing Topic"), this.logger.trace({
                        type: "method",
                        method: "unsubscribe",
                        params: {
                            topic: e,
                            id: t,
                            opts: r
                        }
                    });
                    try {
                        let i = el(r);
                        await this.rpcUnsubscribe(e, t, i);
                        let n = eS("USER_DISCONNECTED", `${this.name}, ${e}`);
                        await this.onUnsubscribe(e, t, n), this.logger.debug("Successfully Unsubscribed Topic"), this.logger.trace({
                            type: "method",
                            method: "unsubscribe",
                            params: {
                                topic: e,
                                id: t,
                                opts: r
                            }
                        })
                    } catch (e) {
                        throw this.logger.debug("Failed to Unsubscribe Topic"), this.logger.error(e), e
                    }
                }
                async rpcSubscribe(e, t) {
                    let r = {
                        method: eh(t.protocol).subscribe,
                        params: {
                            topic: e
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: r
                    });
                    try {
                        await await et(this.relayer.request(r), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Subscribe Payload stalled"), this.relayer.events.emit(r4.connection_stalled)
                    }
                    return D(e + this.clientId)
                }
                async rpcBatchSubscribe(e) {
                    if (!e.length) return;
                    let t = {
                        method: eh(e[0].relay.protocol).batchSubscribe,
                        params: {
                            topics: e.map(e => e.topic)
                        }
                    };
                    this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: t
                    });
                    try {
                        return await await et(this.relayer.request(t), this.subscribeTimeout)
                    } catch {
                        this.logger.debug("Outgoing Relay Payload stalled"), this.relayer.events.emit(r4.connection_stalled)
                    }
                }
                rpcUnsubscribe(e, t, r) {
                    let i = {
                        method: eh(r.protocol).unsubscribe,
                        params: {
                            topic: e,
                            id: t
                        }
                    };
                    return this.logger.debug("Outgoing Relay Payload"), this.logger.trace({
                        type: "payload",
                        direction: "outgoing",
                        request: i
                    }), this.relayer.request(i)
                }
                onSubscribe(e, t) {
                    this.setSubscription(e, iS(iP({}, t), {
                        id: e
                    })), this.pending.delete(t.topic)
                }
                onBatchSubscribe(e) {
                    e.length && e.forEach(e => {
                        this.setSubscription(e.id, iP({}, e)), this.pending.delete(e.topic)
                    })
                }
                async onUnsubscribe(e, t, r) {
                    this.events.removeAllListeners(t), this.hasSubscription(t, e) && this.deleteSubscription(t, r), await this.relayer.messages.del(e)
                }
                async setRelayerSubscriptions(e) {
                    await this.relayer.core.storage.setItem(this.storageKey, e)
                }
                async getRelayerSubscriptions() {
                    return await this.relayer.core.storage.getItem(this.storageKey)
                }
                setSubscription(e, t) {
                    this.subscriptions.has(e) || (this.logger.debug("Setting subscription"), this.logger.trace({
                        type: "method",
                        method: "setSubscription",
                        id: e,
                        subscription: t
                    }), this.addSubscription(e, t))
                }
                addSubscription(e, t) {
                    this.subscriptions.set(e, iP({}, t)), this.topicMap.set(t.topic, e), this.events.emit(ie.created, t)
                }
                getSubscription(e) {
                    this.logger.debug("Getting subscription"), this.logger.trace({
                        type: "method",
                        method: "getSubscription",
                        id: e
                    });
                    let t = this.subscriptions.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = eP("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw Error(t)
                    }
                    return t
                }
                deleteSubscription(e, t) {
                    this.logger.debug("Deleting subscription"), this.logger.trace({
                        type: "method",
                        method: "deleteSubscription",
                        id: e,
                        reason: t
                    });
                    let r = this.getSubscription(e);
                    this.subscriptions.delete(e), this.topicMap.delete(r.topic, e), this.events.emit(ie.deleted, iS(iP({}, r), {
                        reason: t
                    }))
                }
                async persist() {
                    await this.setRelayerSubscriptions(this.values), this.events.emit(ie.sync)
                }
                async reset() {
                    if (this.cached.length) {
                        let e = Math.ceil(this.cached.length / this.batchSubscribeTopicsLimit);
                        for (let t = 0; t < e; t++) {
                            let e = this.cached.splice(0, this.batchSubscribeTopicsLimit);
                            await this.batchSubscribe(e)
                        }
                    }
                    this.events.emit(ie.resubscribed)
                }
                async restore() {
                    try {
                        let e = await this.getRelayerSubscriptions();
                        if (typeof e > "u" || !e.length) return;
                        if (this.subscriptions.size) {
                            let {
                                message: e
                            } = eP("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), this.logger.error(`${this.name}: ${JSON.stringify(this.values)}`), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored subscriptions for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            subscriptions: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore subscriptions for ${this.name}`), this.logger.error(e)
                    }
                }
                async batchSubscribe(e) {
                    if (!e.length) return;
                    let t = await this.rpcBatchSubscribe(e);
                    eO(t) && this.onBatchSubscribe(t.map((t, r) => iS(iP({}, e[r]), {
                        id: t
                    })))
                }
                async onConnect() {
                    this.restartInProgress || (await this.restart(), this.onEnable())
                }
                onDisconnect() {
                    this.onDisable()
                }
                async checkPending() {
                    if (!this.initialized || this.relayer.transportExplicitlyClosed) return;
                    let e = [];
                    this.pending.forEach(t => {
                        e.push(t)
                    }), await this.batchSubscribe(e)
                }
                registerEventListeners() {
                    this.relayer.core.heartbeat.on(th.HEARTBEAT_EVENTS.pulse, async () => {
                        await this.checkPending()
                    }), this.relayer.on(r4.connect, async () => {
                        await this.onConnect()
                    }), this.relayer.on(r4.disconnect, () => {
                        this.onDisconnect()
                    }), this.events.on(ie.created, async e => {
                        let t = ie.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    }), this.events.on(ie.deleted, async e => {
                        let t = ie.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), await this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = eP("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async restartToComplete() {
                    this.restartInProgress && await new Promise(e => {
                        let t = setInterval(() => {
                            this.restartInProgress || (clearInterval(t), e())
                        }, this.pollingInterval)
                    })
                }
            }
            var ix = Object.defineProperty,
                iN = Object.getOwnPropertySymbols,
                iR = Object.prototype.hasOwnProperty,
                iA = Object.prototype.propertyIsEnumerable,
                iC = (e, t, r) => t in e ? ix(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                ij = (e, t) => {
                    for (var r in t || (t = {})) iR.call(t, r) && iC(e, r, t[r]);
                    if (iN)
                        for (var r of iN(t)) iA.call(t, r) && iC(e, r, t[r]);
                    return e
                };
            class iT extends tm {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.events = new n.EventEmitter, this.name = "relayer", this.transportExplicitlyClosed = !1, this.initialized = !1, this.connectionAttemptInProgress = !1, this.connectionStatusPollingInterval = 20, this.staleConnectionErrors = ["socket hang up", "socket stalled"], this.hasExperiencedNetworkDisruption = !1, this.request = async e => {
                        this.logger.debug("Publishing Request Payload");
                        try {
                            return await this.toEstablishConnection(), await this.provider.request(e)
                        } catch (e) {
                            throw this.logger.debug("Failed to Publish Request"), this.logger.error(e), e
                        }
                    }, this.onPayloadHandler = e => {
                        this.onProviderPayload(e)
                    }, this.onConnectHandler = () => {
                        this.events.emit(r4.connect)
                    }, this.onDisconnectHandler = () => {
                        this.onProviderDisconnect()
                    }, this.onProviderErrorHandler = e => {
                        this.logger.error(e), this.events.emit(r4.error, e), this.logger.info("Fatal socket error received, closing transport"), this.transportClose()
                    }, this.registerProviderListeners = () => {
                        this.provider.on(r8.payload, this.onPayloadHandler), this.provider.on(r8.connect, this.onConnectHandler), this.provider.on(r8.disconnect, this.onDisconnectHandler), this.provider.on(r8.error, this.onProviderErrorHandler)
                    }, this.core = e.core, this.logger = "u" > typeof e.logger && "string" != typeof e.logger ? (0, tf.generateChildLogger)(e.logger, this.name) : (0, tf.pino)((0, tf.getDefaultLoggerOptions)({
                        level: e.logger || "error"
                    })), this.messages = new id(this.logger, e.core), this.subscriber = new iO(this, this.logger), this.publisher = new ig(this, this.logger), this.relayUrl = e ? .relayUrl || r3, this.projectId = e.projectId, this.bundleId = function() {
                        var e;
                        try {
                            return G() && "u" > typeof r.g && "u" > typeof(null == r.g ? void 0 : r.g.Application) ? null == (e = r.g.Application) ? void 0 : e.applicationId : void 0
                        } catch {
                            return
                        }
                    }(), this.provider = {}
                }
                async init() {
                    this.logger.trace("Initialized"), this.registerEventListeners(), await this.createProvider(), await Promise.all([this.messages.init(), this.subscriber.init()]);
                    try {
                        await this.transportOpen()
                    } catch {
                        this.logger.warn(`Connection via ${this.relayUrl} failed, attempting to connect via failover domain ${r9}...`), await this.restartTransport(r9)
                    }
                    this.initialized = !0, setTimeout(async () => {
                        0 === this.subscriber.topics.length && (this.logger.info("No topics subscribed to after init, closing transport"), await this.transportClose(), this.transportExplicitlyClosed = !1)
                    }, 1e4)
                }
                get context() {
                    return (0, tf.getLoggerContext)(this.logger)
                }
                get connected() {
                    return this.provider.connection.connected
                }
                get connecting() {
                    return this.provider.connection.connecting
                }
                async publish(e, t, r) {
                    this.isInitialized(), await this.publisher.publish(e, t, r), await this.recordMessageEvent({
                        topic: e,
                        message: t,
                        publishedAt: Date.now()
                    })
                }
                async subscribe(e, t) {
                    var r;
                    let i;
                    this.isInitialized();
                    let n = (null == (r = this.subscriber.topicMap.get(e)) ? void 0 : r[0]) || "";
                    if (n) return n;
                    let s = t => {
                        t.topic === e && (this.subscriber.off(ie.created, s), i())
                    };
                    return await Promise.all([new Promise(e => {
                        i = e, this.subscriber.on(ie.created, s)
                    }), new Promise(async r => {
                        n = await this.subscriber.subscribe(e, t), r()
                    })]), n
                }
                async unsubscribe(e, t) {
                    this.isInitialized(), await this.subscriber.unsubscribe(e, t)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async transportClose() {
                    this.transportExplicitlyClosed = !0, this.hasExperiencedNetworkDisruption && this.connected ? await et(this.provider.disconnect(), 1e3, "provider.disconnect()").catch(() => this.onProviderDisconnect()) : this.connected && await this.provider.disconnect()
                }
                async transportOpen(e) {
                    if (this.transportExplicitlyClosed = !1, await this.confirmOnlineStateOrThrow(), !this.connectionAttemptInProgress) {
                        e && e !== this.relayUrl && (this.relayUrl = e, await this.transportClose(), await this.createProvider()), this.connectionAttemptInProgress = !0;
                        try {
                            await Promise.all([new Promise(e => {
                                if (!this.initialized) return e();
                                this.subscriber.once(ie.resubscribed, () => {
                                    e()
                                })
                            }), new Promise(async (e, t) => {
                                try {
                                    await et(this.provider.connect(), 1e4, `Socket stalled when trying to connect to ${this.relayUrl}`)
                                } catch (e) {
                                    t(e);
                                    return
                                }
                                e()
                            })])
                        } catch (e) {
                            if (this.logger.error(e), !this.isConnectionStalled(e.message)) throw e;
                            this.provider.events.emit(r8.disconnect)
                        } finally {
                            this.connectionAttemptInProgress = !1, this.hasExperiencedNetworkDisruption = !1
                        }
                    }
                }
                async restartTransport(e) {
                    await this.confirmOnlineStateOrThrow(), this.connectionAttemptInProgress || (this.relayUrl = e || this.relayUrl, await this.transportClose(), await this.createProvider(), await this.transportOpen())
                }
                async confirmOnlineStateOrThrow() {
                    if (!await eU()) throw Error("No internet connection detected. Please restart your network and try again.")
                }
                isConnectionStalled(e) {
                    return this.staleConnectionErrors.some(t => e.includes(t))
                }
                async createProvider() {
                    this.provider.connection && this.unregisterProviderListeners();
                    let e = await this.core.crypto.signJWT(this.relayUrl);
                    this.provider = new t2(new t8(function({
                        protocol: e,
                        version: t,
                        relayUrl: i,
                        sdkVersion: n,
                        auth: s,
                        projectId: o,
                        useOnCloseEvent: a,
                        bundleId: c
                    }) {
                        var u;
                        let l;
                        let h = i.split("?"),
                            p = function(e, t, i) {
                                let n = function() {
                                        var e;
                                        if (J() === F.reactNative && "u" > typeof r.g && "u" > typeof(null == r.g ? void 0 : r.g.Platform)) {
                                            let {
                                                OS: e,
                                                Version: t
                                            } = r.g.Platform;
                                            return [e, t].join("-")
                                        }
                                        let t = e ? E(e) : "undefined" == typeof document && "undefined" != typeof navigator && "ReactNative" === navigator.product ? new m : "undefined" != typeof navigator ? E(navigator.userAgent) : void 0 !== f && f.version ? new g(f.version.slice(1)) : null;
                                        if (null === t) return "unknown";
                                        let i = t.os ? t.os.replace(" ", "").toLowerCase() : "unknown";
                                        return "browser" === t.type ? [i, t.name, t.version].join("-") : [i, t.version].join("-")
                                    }(),
                                    s = function() {
                                        var e;
                                        let t = J();
                                        return t === F.browser ? [t, (null == (e = (0, P.getLocation)()) ? void 0 : e.host) || "unknown"].join(":") : t
                                    }();
                                return [
                                    [e, t].join("-"), ["js", i].join("-"), n, s
                                ].join("/")
                            }(e, t, n),
                            d = (u = h[1] || "", l = K(K({}, l = O.parse(u)), {
                                auth: s,
                                ua: p,
                                projectId: o,
                                useOnCloseEvent: a || void 0,
                                origin: c || void 0
                            }), u = O.stringify(l));
                        return h[0] + "?" + d
                    }({
                        sdkVersion: "2.10.6",
                        protocol: this.protocol,
                        version: this.version,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId,
                        auth: e,
                        useOnCloseEvent: !0,
                        bundleId: this.bundleId
                    }))), this.registerProviderListeners()
                }
                async recordMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    await this.messages.set(t, r)
                }
                async shouldIgnoreMessageEvent(e) {
                    let {
                        topic: t,
                        message: r
                    } = e;
                    if (!r || 0 === r.length) return this.logger.debug(`Ignoring invalid/empty message: ${r}`), !0;
                    if (!await this.subscriber.isSubscribed(t)) return this.logger.debug(`Ignoring message for non-subscribed topic ${t}`), !0;
                    let i = this.messages.has(t, r);
                    return i && this.logger.debug(`Ignoring duplicate message: ${r}`), i
                }
                async onProviderPayload(e) {
                    if (this.logger.debug("Incoming Relay Payload"), this.logger.trace({
                            type: "payload",
                            direction: "incoming",
                            payload: e
                        }), t0(e)) {
                        if (!e.method.endsWith("_subscription")) return;
                        let t = e.params,
                            {
                                topic: r,
                                message: i,
                                publishedAt: n
                            } = t.data,
                            s = {
                                topic: r,
                                message: i,
                                publishedAt: n
                            };
                        this.logger.debug("Emitting Relayer Payload"), this.logger.trace(ij({
                            type: "event",
                            event: t.id
                        }, s)), this.events.emit(t.id, s), await this.acknowledgePayload(e), await this.onMessageEvent(s)
                    } else t1(e) && this.events.emit(r4.message_ack, e)
                }
                async onMessageEvent(e) {
                    await this.shouldIgnoreMessageEvent(e) || (this.events.emit(r4.message, e), await this.recordMessageEvent(e))
                }
                async acknowledgePayload(e) {
                    let t = tK(e.id, !0);
                    await this.provider.connection.send(t)
                }
                unregisterProviderListeners() {
                    this.provider.off(r8.payload, this.onPayloadHandler), this.provider.off(r8.connect, this.onConnectHandler), this.provider.off(r8.disconnect, this.onDisconnectHandler), this.provider.off(r8.error, this.onProviderErrorHandler)
                }
                async registerEventListeners() {
                    this.events.on(r4.connection_stalled, () => {
                        this.restartTransport().catch(e => this.logger.error(e))
                    });
                    let e = await eU();
                    ! function(e) {
                        switch (J()) {
                            case F.browser:
                                !G() && Q() && (window.addEventListener("online", () => e(!0)), window.addEventListener("offline", () => e(!1)));
                                break;
                            case F.reactNative:
                                G() && "u" > typeof r.g && null != r.g && r.g.NetInfo && r.g ? .NetInfo.addEventListener(t => e(t ? .isConnected));
                            case F.node:
                        }
                    }(async t => {
                        this.initialized && e !== t && (e = t, t ? await this.restartTransport().catch(e => this.logger.error(e)) : (this.hasExperiencedNetworkDisruption = !0, await this.transportClose().catch(e => this.logger.error(e))))
                    })
                }
                onProviderDisconnect() {
                    this.events.emit(r4.disconnect), this.attemptToReconnect()
                }
                attemptToReconnect() {
                    this.transportExplicitlyClosed || (this.logger.info("attemptToReconnect called. Connecting..."), setTimeout(async () => {
                        await this.restartTransport().catch(e => this.logger.error(e))
                    }, (0, I.toMiliseconds)(r7)))
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = eP("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                async toEstablishConnection() {
                    if (await this.confirmOnlineStateOrThrow(), !this.connected) {
                        if (this.connectionAttemptInProgress) return await new Promise(e => {
                            let t = setInterval(() => {
                                this.connected && (clearInterval(t), e())
                            }, this.connectionStatusPollingInterval)
                        });
                        await this.restartTransport()
                    }
                }
            }
            var iL = Object.defineProperty,
                iD = Object.getOwnPropertySymbols,
                ik = Object.prototype.hasOwnProperty,
                iM = Object.prototype.propertyIsEnumerable,
                iq = (e, t, r) => t in e ? iL(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                i$ = (e, t) => {
                    for (var r in t || (t = {})) ik.call(t, r) && iq(e, r, t[r]);
                    if (iD)
                        for (var r of iD(t)) iM.call(t, r) && iq(e, r, t[r]);
                    return e
                };
            class iU extends tb {
                constructor(e, t, r, i = rX, n) {
                    super(e, t, r, i), this.core = e, this.logger = t, this.name = r, this.map = new Map, this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = rX, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => {
                            var t;
                            this.getKey && null !== e && !eN(e) ? this.map.set(this.getKey(e), e) : (null == (t = e ? .proposer) ? void 0 : t.publicKey) ? this.map.set(e.id, e) : e ? .topic && this.map.set(e.topic, e)
                        }), this.cached = [], this.initialized = !0)
                    }, this.set = async (e, t) => {
                        this.isInitialized(), this.map.has(e) ? await this.update(e, t) : (this.logger.debug("Setting value"), this.logger.trace({
                            type: "method",
                            method: "set",
                            key: e,
                            value: t
                        }), this.map.set(e, t), await this.persist())
                    }, this.get = e => (this.isInitialized(), this.logger.debug("Getting value"), this.logger.trace({
                        type: "method",
                        method: "get",
                        key: e
                    }), this.getData(e)), this.getAll = e => (this.isInitialized(), e ? this.values.filter(t => Object.keys(e).every(r => re()(t[r], e[r]))) : this.values), this.update = async (e, t) => {
                        this.isInitialized(), this.logger.debug("Updating value"), this.logger.trace({
                            type: "method",
                            method: "update",
                            key: e,
                            update: t
                        });
                        let r = i$(i$({}, this.getData(e)), t);
                        this.map.set(e, r), await this.persist()
                    }, this.delete = async (e, t) => {
                        this.isInitialized(), this.map.has(e) && (this.logger.debug("Deleting value"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            key: e,
                            reason: t
                        }), this.map.delete(e), await this.persist())
                    }, this.logger = (0, tf.generateChildLogger)(t, this.name), this.storagePrefix = i, this.getKey = n
                }
                get context() {
                    return (0, tf.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.map.size
                }
                get keys() {
                    return Array.from(this.map.keys())
                }
                get values() {
                    return Array.from(this.map.values())
                }
                async setDataStore(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getDataStore() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getData(e) {
                    let t = this.map.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = eP("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setDataStore(this.values)
                }
                async restore() {
                    try {
                        let e = await this.getDataStore();
                        if (typeof e > "u" || !e.length) return;
                        if (this.map.size) {
                            let {
                                message: e
                            } = eP("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored value for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            value: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore value for ${this.name}`), this.logger.error(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = eP("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class iz {
                constructor(e, t) {
                    this.core = e, this.logger = t, this.name = "pairing", this.version = "0.3", this.events = new(s()), this.initialized = !1, this.storagePrefix = rX, this.ignoredPayloadTypes = [1], this.registeredMethods = [], this.init = async () => {
                        this.initialized || (await this.pairings.init(), await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.initialized = !0, this.logger.trace("Initialized"))
                    }, this.register = ({
                        methods: e
                    }) => {
                        this.isInitialized(), this.registeredMethods = [...new Set([...this.registeredMethods, ...e])]
                    }, this.create = async () => {
                        var e;
                        this.isInitialized();
                        let t = L(),
                            r = await this.core.crypto.setSymKey(t),
                            i = en(I.FIVE_MINUTES),
                            n = {
                                protocol: "irn"
                            },
                            s = (e = {
                                protocol: this.core.protocol,
                                version: this.core.version,
                                topic: r,
                                symKey: t,
                                relay: n
                            }, `${e.protocol}:${e.topic}@${e.version}?` + O.stringify(ev({
                                symKey: e.symKey
                            }, function(e, t = "-") {
                                let r = {};
                                return Object.keys(e).forEach(i => {
                                    e[i] && (r["relay" + t + i] = e[i])
                                }), r
                            }(e.relay))));
                        return await this.pairings.set(r, {
                            topic: r,
                            expiry: i,
                            relay: n,
                            active: !1
                        }), await this.core.relayer.subscribe(r), this.core.expirer.set(r, i), {
                            topic: r,
                            uri: s
                        }
                    }, this.pair = async e => {
                        this.isInitialized(), this.isValidPair(e);
                        let {
                            topic: t,
                            symKey: r,
                            relay: i
                        } = em(e.uri);
                        if (this.pairings.keys.includes(t) && this.pairings.get(t).active) throw Error(`Pairing already exists: ${t}. Please try again with a new connection URI.`);
                        let n = en(I.FIVE_MINUTES),
                            s = {
                                topic: t,
                                relay: i,
                                expiry: n,
                                active: !1
                            };
                        return await this.pairings.set(t, s), this.core.expirer.set(t, n), e.activatePairing && await this.activate({
                            topic: t
                        }), this.events.emit(ii.create, s), this.core.crypto.keychain.has(t) || (await this.core.crypto.setSymKey(r, t), await this.core.relayer.subscribe(t, {
                            relay: i
                        })), s
                    }, this.activate = async ({
                        topic: e
                    }) => {
                        this.isInitialized();
                        let t = en(I.THIRTY_DAYS);
                        await this.pairings.update(e, {
                            active: !0,
                            expiry: t
                        }), this.core.expirer.set(e, t)
                    }, this.ping = async e => {
                        this.isInitialized(), await this.isValidPing(e);
                        let {
                            topic: t
                        } = e;
                        if (this.pairings.keys.includes(t)) {
                            let e = await this.sendRequest(t, "wc_pairingPing", {}),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = ee();
                            this.events.once(eo("pairing_ping", e), ({
                                error: e
                            }) => {
                                e ? n(e) : i()
                            }), await r()
                        }
                    }, this.updateExpiry = async ({
                        topic: e,
                        expiry: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            expiry: t
                        })
                    }, this.updateMetadata = async ({
                        topic: e,
                        metadata: t
                    }) => {
                        this.isInitialized(), await this.pairings.update(e, {
                            peerMetadata: t
                        })
                    }, this.getPairings = () => (this.isInitialized(), this.pairings.values), this.disconnect = async e => {
                        this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        this.pairings.keys.includes(t) && (await this.sendRequest(t, "wc_pairingDelete", eS("USER_DISCONNECTED")), await this.deletePairing(t))
                    }, this.sendRequest = async (e, t, r) => {
                        let i = tV(t, r),
                            n = await this.core.crypto.encode(e, i),
                            s = ir[t].req;
                        return this.core.history.set(e, i), this.core.relayer.publish(e, n, s), i.id
                    }, this.sendResult = async (e, t, r) => {
                        let i = tK(e, r),
                            n = await this.core.crypto.encode(t, i),
                            s = ir[(await this.core.history.get(t, e)).request.method].res;
                        await this.core.relayer.publish(t, n, s), await this.core.history.resolve(i)
                    }, this.sendError = async (e, t, r) => {
                        let i = tF(e, r),
                            n = await this.core.crypto.encode(t, i),
                            s = await this.core.history.get(t, e),
                            o = ir[s.request.method] ? ir[s.request.method].res : ir.unregistered_method.res;
                        await this.core.relayer.publish(t, n, o), await this.core.history.resolve(i)
                    }, this.deletePairing = async (e, t) => {
                        await this.core.relayer.unsubscribe(e), await Promise.all([this.pairings.delete(e, eS("USER_DISCONNECTED")), this.core.crypto.deleteSymKey(e), t ? Promise.resolve() : this.core.expirer.del(e)])
                    }, this.cleanup = async () => {
                        let e = this.pairings.getAll().filter(e => es(e.expiry));
                        await Promise.all(e.map(e => this.deletePairing(e.topic)))
                    }, this.onRelayEventRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e;
                        switch (r.method) {
                            case "wc_pairingPing":
                                return this.onPairingPingRequest(t, r);
                            case "wc_pairingDelete":
                                return this.onPairingDeleteRequest(t, r);
                            default:
                                return this.onUnknownRpcMethodRequest(t, r)
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = (await this.core.history.get(t, r.id)).request.method;
                        return "wc_pairingPing" === i ? this.onPairingPingResponse(t, r) : this.onUnknownRpcMethodResponse(i)
                    }, this.onPairingPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult(r, e, !0), this.events.emit(ii.ping, {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onPairingPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        setTimeout(() => {
                            t5(t) ? this.events.emit(eo("pairing_ping", r), {}) : t6(t) && this.events.emit(eo("pairing_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onPairingDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e
                            }), await this.deletePairing(e), this.events.emit(ii.delete, {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodRequest = async (e, t) => {
                        let {
                            id: r,
                            method: i
                        } = t;
                        try {
                            if (this.registeredMethods.includes(i)) return;
                            let t = eS("WC_METHOD_UNSUPPORTED", i);
                            await this.sendError(r, e, t), this.logger.error(t)
                        } catch (t) {
                            await this.sendError(r, e, t), this.logger.error(t)
                        }
                    }, this.onUnknownRpcMethodResponse = e => {
                        this.registeredMethods.includes(e) || this.logger.error(eS("WC_METHOD_UNSUPPORTED", e))
                    }, this.isValidPair = e => {
                        var t;
                        if (!ek(e)) {
                            let {
                                message: t
                            } = eP("MISSING_OR_INVALID", `pair() params: ${e}`);
                            throw Error(t)
                        }
                        if (! function(e) {
                                if (eR(e, !1)) try {
                                    return "u" > typeof new URL(e)
                                } catch {}
                                return !1
                            }(e.uri)) {
                            let {
                                message: t
                            } = eP("MISSING_OR_INVALID", `pair() uri: ${e.uri}`);
                            throw Error(t)
                        }
                        let r = em(e.uri);
                        if (!(null != (t = r ? .relay) && t.protocol)) {
                            let {
                                message: e
                            } = eP("MISSING_OR_INVALID", "pair() uri#relay-protocol");
                            throw Error(e)
                        }
                        if (!(null != r && r.symKey)) {
                            let {
                                message: e
                            } = eP("MISSING_OR_INVALID", "pair() uri#symKey");
                            throw Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!ek(e)) {
                            let {
                                message: t
                            } = eP("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidDisconnect = async e => {
                        if (!ek(e)) {
                            let {
                                message: t
                            } = eP("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidPairingTopic(t)
                    }, this.isValidPairingTopic = async e => {
                        if (!eR(e, !1)) {
                            let {
                                message: t
                            } = eP("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                            throw Error(t)
                        }
                        if (!this.pairings.keys.includes(e)) {
                            let {
                                message: t
                            } = eP("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                            throw Error(t)
                        }
                        if (es(this.pairings.get(e).expiry)) {
                            await this.deletePairing(e);
                            let {
                                message: t
                            } = eP("EXPIRED", `pairing topic: ${e}`);
                            throw Error(t)
                        }
                    }, this.core = e, this.logger = (0, tf.generateChildLogger)(t, this.name), this.pairings = new iU(this.core, this.logger, this.name, this.storagePrefix)
                }
                get context() {
                    return (0, tf.getLoggerContext)(this.logger)
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = eP("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
                registerRelayerEvents() {
                    this.core.relayer.on(r4.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e;
                        if (!this.pairings.keys.includes(t) || this.ignoredPayloadTypes.includes(this.core.crypto.getPayloadType(r))) return;
                        let i = await this.core.crypto.decode(t, r);
                        try {
                            t0(i) ? (this.core.history.set(t, i), this.onRelayEventRequest({
                                topic: t,
                                payload: i
                            })) : t1(i) && (await this.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: t,
                                payload: i
                            }), this.core.history.delete(t, i.id))
                        } catch (e) {
                            this.logger.error(e)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.core.expirer.on(io.expired, async e => {
                        let {
                            topic: t
                        } = ei(e.target);
                        t && this.pairings.keys.includes(t) && (await this.deletePairing(t, !0), this.events.emit(ii.expire, {
                            topic: t
                        }))
                    })
                }
            }
            class iH extends tg {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.records = new Map, this.events = new n.EventEmitter, this.name = "history", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = rX, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.records.set(e.id, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.set = (e, t, r) => {
                        if (this.isInitialized(), this.logger.debug("Setting JSON-RPC request history record"), this.logger.trace({
                                type: "method",
                                method: "set",
                                topic: e,
                                request: t,
                                chainId: r
                            }), this.records.has(t.id)) return;
                        let i = {
                            id: t.id,
                            topic: e,
                            request: {
                                method: t.method,
                                params: t.params || null
                            },
                            chainId: r,
                            expiry: en(I.THIRTY_DAYS)
                        };
                        this.records.set(i.id, i), this.events.emit(is.created, i)
                    }, this.resolve = async e => {
                        if (this.isInitialized(), this.logger.debug("Updating JSON-RPC response history record"), this.logger.trace({
                                type: "method",
                                method: "update",
                                response: e
                            }), !this.records.has(e.id)) return;
                        let t = await this.getRecord(e.id);
                        typeof t.response > "u" && (t.response = t6(e) ? {
                            error: e.error
                        } : {
                            result: e.result
                        }, this.records.set(t.id, t), this.events.emit(is.updated, t))
                    }, this.get = async (e, t) => (this.isInitialized(), this.logger.debug("Getting record"), this.logger.trace({
                        type: "method",
                        method: "get",
                        topic: e,
                        id: t
                    }), await this.getRecord(t)), this.delete = (e, t) => {
                        this.isInitialized(), this.logger.debug("Deleting record"), this.logger.trace({
                            type: "method",
                            method: "delete",
                            id: t
                        }), this.values.forEach(r => {
                            r.topic !== e || "u" > typeof t && r.id !== t || (this.records.delete(r.id), this.events.emit(is.deleted, r))
                        })
                    }, this.exists = async (e, t) => (this.isInitialized(), !!this.records.has(t) && (await this.getRecord(t)).topic === e), this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, tf.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, tf.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get size() {
                    return this.records.size
                }
                get keys() {
                    return Array.from(this.records.keys())
                }
                get values() {
                    return Array.from(this.records.values())
                }
                get pending() {
                    let e = [];
                    return this.values.forEach(t => {
                        if ("u" > typeof t.response) return;
                        let r = {
                            topic: t.topic,
                            request: tV(t.request.method, t.request.params, t.id),
                            chainId: t.chainId
                        };
                        return e.push(r)
                    }), e
                }
                async setJsonRpcRecords(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getJsonRpcRecords() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                getRecord(e) {
                    this.isInitialized();
                    let t = this.records.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = eP("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw Error(t)
                    }
                    return t
                }
                async persist() {
                    await this.setJsonRpcRecords(this.values), this.events.emit(is.sync)
                }
                async restore() {
                    try {
                        let e = await this.getJsonRpcRecords();
                        if (typeof e > "u" || !e.length) return;
                        if (this.records.size) {
                            let {
                                message: e
                            } = eP("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored records for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            records: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore records for ${this.name}`), this.logger.error(e)
                    }
                }
                registerEventListeners() {
                    this.events.on(is.created, e => {
                        let t = is.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on(is.updated, e => {
                        let t = is.updated;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.events.on(is.deleted, e => {
                        let t = is.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            record: e
                        }), this.persist()
                    }), this.core.heartbeat.on(th.HEARTBEAT_EVENTS.pulse, () => {
                        this.cleanup()
                    })
                }
                cleanup() {
                    try {
                        this.records.forEach(e => {
                            (0, I.toMiliseconds)(e.expiry || 0) - Date.now() <= 0 && (this.logger.info(`Deleting expired history log: ${e.id}`), this.delete(e.topic, e.id))
                        })
                    } catch (e) {
                        this.logger.warn(e)
                    }
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = eP("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class iB extends tw {
                constructor(e, t) {
                    super(e, t), this.core = e, this.logger = t, this.expirations = new Map, this.events = new n.EventEmitter, this.name = "expirer", this.version = "0.3", this.cached = [], this.initialized = !1, this.storagePrefix = rX, this.init = async () => {
                        this.initialized || (this.logger.trace("Initialized"), await this.restore(), this.cached.forEach(e => this.expirations.set(e.target, e)), this.cached = [], this.registerEventListeners(), this.initialized = !0)
                    }, this.has = e => {
                        try {
                            let t = this.formatTarget(e);
                            return "u" > typeof this.getExpiration(t)
                        } catch {
                            return !1
                        }
                    }, this.set = (e, t) => {
                        this.isInitialized();
                        let r = this.formatTarget(e),
                            i = {
                                target: r,
                                expiry: t
                            };
                        this.expirations.set(r, i), this.checkExpiry(r, i), this.events.emit(io.created, {
                            target: r,
                            expiration: i
                        })
                    }, this.get = e => {
                        this.isInitialized();
                        let t = this.formatTarget(e);
                        return this.getExpiration(t)
                    }, this.del = e => {
                        if (this.isInitialized(), this.has(e)) {
                            let t = this.formatTarget(e),
                                r = this.getExpiration(t);
                            this.expirations.delete(t), this.events.emit(io.deleted, {
                                target: t,
                                expiration: r
                            })
                        }
                    }, this.on = (e, t) => {
                        this.events.on(e, t)
                    }, this.once = (e, t) => {
                        this.events.once(e, t)
                    }, this.off = (e, t) => {
                        this.events.off(e, t)
                    }, this.removeListener = (e, t) => {
                        this.events.removeListener(e, t)
                    }, this.logger = (0, tf.generateChildLogger)(t, this.name)
                }
                get context() {
                    return (0, tf.getLoggerContext)(this.logger)
                }
                get storageKey() {
                    return this.storagePrefix + this.version + this.core.customStoragePrefix + "//" + this.name
                }
                get length() {
                    return this.expirations.size
                }
                get keys() {
                    return Array.from(this.expirations.keys())
                }
                get values() {
                    return Array.from(this.expirations.values())
                }
                formatTarget(e) {
                    if ("string" == typeof e) return er("topic", e);
                    if ("number" == typeof e) return er("id", e);
                    let {
                        message: t
                    } = eP("UNKNOWN_TYPE", `Target type: ${typeof e}`);
                    throw Error(t)
                }
                async setExpirations(e) {
                    await this.core.storage.setItem(this.storageKey, e)
                }
                async getExpirations() {
                    return await this.core.storage.getItem(this.storageKey)
                }
                async persist() {
                    await this.setExpirations(this.values), this.events.emit(io.sync)
                }
                async restore() {
                    try {
                        let e = await this.getExpirations();
                        if (typeof e > "u" || !e.length) return;
                        if (this.expirations.size) {
                            let {
                                message: e
                            } = eP("RESTORE_WILL_OVERRIDE", this.name);
                            throw this.logger.error(e), Error(e)
                        }
                        this.cached = e, this.logger.debug(`Successfully Restored expirations for ${this.name}`), this.logger.trace({
                            type: "method",
                            method: "restore",
                            expirations: this.values
                        })
                    } catch (e) {
                        this.logger.debug(`Failed to Restore expirations for ${this.name}`), this.logger.error(e)
                    }
                }
                getExpiration(e) {
                    let t = this.expirations.get(e);
                    if (!t) {
                        let {
                            message: t
                        } = eP("NO_MATCHING_KEY", `${this.name}: ${e}`);
                        throw this.logger.error(t), Error(t)
                    }
                    return t
                }
                checkExpiry(e, t) {
                    let {
                        expiry: r
                    } = t;
                    (0, I.toMiliseconds)(r) - Date.now() <= 0 && this.expire(e, t)
                }
                expire(e, t) {
                    this.expirations.delete(e), this.events.emit(io.expired, {
                        target: e,
                        expiration: t
                    })
                }
                checkExpirations() {
                    this.core.relayer.connected && this.expirations.forEach((e, t) => this.checkExpiry(t, e))
                }
                registerEventListeners() {
                    this.core.heartbeat.on(th.HEARTBEAT_EVENTS.pulse, () => this.checkExpirations()), this.events.on(io.created, e => {
                        let t = io.created;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(io.expired, e => {
                        let t = io.expired;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    }), this.events.on(io.deleted, e => {
                        let t = io.deleted;
                        this.logger.info(`Emitting ${t}`), this.logger.debug({
                            type: "event",
                            event: t,
                            data: e
                        }), this.persist()
                    })
                }
                isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = eP("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                }
            }
            class iV extends tE {
                constructor(e, t) {
                    super(e, t), this.projectId = e, this.logger = t, this.name = ia, this.initialized = !1, this.queue = [], this.verifyDisabled = !1, this.init = async e => {
                        if (this.verifyDisabled || G() || !Q()) return;
                        let t = this.getVerifyUrl(e ? .verifyUrl);
                        this.verifyUrl !== t && this.removeIframe(), this.verifyUrl = t;
                        try {
                            await this.createIframe()
                        } catch (e) {
                            this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(e)
                        }
                        if (!this.initialized) {
                            this.removeIframe(), this.verifyUrl = iu;
                            try {
                                await this.createIframe()
                            } catch (e) {
                                this.logger.info(`Verify iframe failed to load: ${this.verifyUrl}`), this.logger.info(e), this.verifyDisabled = !0
                            }
                        }
                    }, this.register = async e => {
                        this.initialized ? this.sendPost(e.attestationId) : (this.addToQueue(e.attestationId), await this.init())
                    }, this.resolve = async e => {
                        let t;
                        if (this.isDevEnv) return "";
                        let r = this.getVerifyUrl(e ? .verifyUrl);
                        try {
                            t = await this.fetchAttestation(e.attestationId, r)
                        } catch (i) {
                            this.logger.info(`failed to resolve attestation: ${e.attestationId} from url: ${r}`), this.logger.info(i), t = await this.fetchAttestation(e.attestationId, iu)
                        }
                        return t
                    }, this.fetchAttestation = async (e, t) => {
                        this.logger.info(`resolving attestation: ${e} from url: ${t}`);
                        let r = this.startAbortTimer(2 * I.ONE_SECOND),
                            i = await fetch(`${t}/attestation/${e}`, {
                                signal: this.abortController.signal
                            });
                        return clearTimeout(r), 200 === i.status ? await i.json() : void 0
                    }, this.addToQueue = e => {
                        this.queue.push(e)
                    }, this.processQueue = () => {
                        0 !== this.queue.length && (this.queue.forEach(e => this.sendPost(e)), this.queue = [])
                    }, this.sendPost = e => {
                        var t;
                        try {
                            if (!this.iframe) return;
                            null == (t = this.iframe.contentWindow) || t.postMessage(e, "*"), this.logger.info(`postMessage sent: ${e} ${this.verifyUrl}`)
                        } catch {}
                    }, this.createIframe = async () => {
                        let e;
                        let t = r => {
                            "verify_ready" === r.data && (this.initialized = !0, this.processQueue(), window.removeEventListener("message", t), e())
                        };
                        await Promise.race([new Promise(r => {
                            if (document.getElementById(ia)) return r();
                            window.addEventListener("message", t);
                            let i = document.createElement("iframe");
                            i.id = ia, i.src = `${this.verifyUrl}/${this.projectId}`, i.style.display = "none", document.body.append(i), this.iframe = i, e = r
                        }), new Promise((e, r) => setTimeout(() => {
                            window.removeEventListener("message", t), r("verify iframe load timeout")
                        }, (0, I.toMiliseconds)(I.FIVE_SECONDS)))])
                    }, this.removeIframe = () => {
                        this.iframe && (this.iframe.remove(), this.iframe = void 0, this.initialized = !1)
                    }, this.getVerifyUrl = e => {
                        let t = e || ic;
                        return il.includes(t) || (this.logger.info(`verify url: ${t}, not included in trusted list, assigning default: ${ic}`), t = ic), t
                    }, this.logger = (0, tf.generateChildLogger)(t, this.name), this.verifyUrl = ic, this.abortController = new AbortController, this.isDevEnv = W() && rt.env.IS_VITEST
                }
                get context() {
                    return (0, tf.getLoggerContext)(this.logger)
                }
                startAbortTimer(e) {
                    return this.abortController = new AbortController, setTimeout(() => this.abortController.abort(), (0, I.toMiliseconds)(e))
                }
            }
            var iK = Object.defineProperty,
                iF = Object.getOwnPropertySymbols,
                iW = Object.prototype.hasOwnProperty,
                iG = Object.prototype.propertyIsEnumerable,
                iQ = (e, t, r) => t in e ? iK(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                iJ = (e, t) => {
                    for (var r in t || (t = {})) iW.call(t, r) && iQ(e, r, t[r]);
                    if (iF)
                        for (var r of iF(t)) iG.call(t, r) && iQ(e, r, t[r]);
                    return e
                };
            class iY extends td {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = rZ, this.events = new n.EventEmitter, this.initialized = !1, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.projectId = e ? .projectId, this.relayUrl = e ? .relayUrl || r3, this.customStoragePrefix = null != e && e.customStoragePrefix ? `:${e.customStoragePrefix}` : "";
                    let t = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : (0, tf.pino)((0, tf.getDefaultLoggerOptions)({
                        level: e ? .logger || r0.logger
                    }));
                    this.logger = (0, tf.generateChildLogger)(t, this.name), this.heartbeat = new th.HeartBeat, this.crypto = new ip(this, this.logger, e ? .keychain), this.history = new iH(this, this.logger), this.expirer = new iB(this, this.logger), this.storage = null != e && e.storage ? e.storage : new tl(iJ(iJ({}, r1), e ? .storageOptions)), this.relayer = new iT({
                        core: this,
                        logger: this.logger,
                        relayUrl: this.relayUrl,
                        projectId: this.projectId
                    }), this.pairing = new iz(this, this.logger), this.verify = new iV(this.projectId || "", this.logger)
                }
                static async init(e) {
                    let t = new iY(e);
                    await t.initialize();
                    let r = await t.crypto.getClientId();
                    return await t.storage.setItem("WALLETCONNECT_CLIENT_ID", r), t
                }
                get context() {
                    return (0, tf.getLoggerContext)(this.logger)
                }
                async start() {
                    this.initialized || await this.initialize()
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.crypto.init(), await this.history.init(), await this.expirer.init(), await this.relayer.init(), await this.heartbeat.init(), await this.pairing.init(), this.initialized = !0, this.logger.info("Core Initialization Success")
                    } catch (e) {
                        throw this.logger.warn(`Core Initialization Failure at epoch ${Date.now()}`, e), this.logger.error(e.message), e
                    }
                }
            }
            let iZ = "client",
                iX = `wc@2:${iZ}:`,
                i0 = {
                    name: iZ,
                    logger: "error"
                },
                i1 = "WALLETCONNECT_DEEPLINK_CHOICE",
                i5 = "Proposal expired",
                i6 = I.SEVEN_DAYS,
                i2 = {
                    wc_sessionPropose: {
                        req: {
                            ttl: I.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1100
                        },
                        res: {
                            ttl: I.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1101
                        }
                    },
                    wc_sessionSettle: {
                        req: {
                            ttl: I.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1102
                        },
                        res: {
                            ttl: I.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1103
                        }
                    },
                    wc_sessionUpdate: {
                        req: {
                            ttl: I.ONE_DAY,
                            prompt: !1,
                            tag: 1104
                        },
                        res: {
                            ttl: I.ONE_DAY,
                            prompt: !1,
                            tag: 1105
                        }
                    },
                    wc_sessionExtend: {
                        req: {
                            ttl: I.ONE_DAY,
                            prompt: !1,
                            tag: 1106
                        },
                        res: {
                            ttl: I.ONE_DAY,
                            prompt: !1,
                            tag: 1107
                        }
                    },
                    wc_sessionRequest: {
                        req: {
                            ttl: I.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1108
                        },
                        res: {
                            ttl: I.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1109
                        }
                    },
                    wc_sessionEvent: {
                        req: {
                            ttl: I.FIVE_MINUTES,
                            prompt: !0,
                            tag: 1110
                        },
                        res: {
                            ttl: I.FIVE_MINUTES,
                            prompt: !1,
                            tag: 1111
                        }
                    },
                    wc_sessionDelete: {
                        req: {
                            ttl: I.ONE_DAY,
                            prompt: !1,
                            tag: 1112
                        },
                        res: {
                            ttl: I.ONE_DAY,
                            prompt: !1,
                            tag: 1113
                        }
                    },
                    wc_sessionPing: {
                        req: {
                            ttl: I.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1114
                        },
                        res: {
                            ttl: I.THIRTY_SECONDS,
                            prompt: !1,
                            tag: 1115
                        }
                    }
                },
                i3 = {
                    min: I.FIVE_MINUTES,
                    max: I.SEVEN_DAYS
                },
                i9 = {
                    idle: "IDLE",
                    active: "ACTIVE"
                },
                i4 = ["wc_sessionPropose", "wc_sessionRequest", "wc_authRequest"];
            var i8 = Object.defineProperty,
                i7 = Object.defineProperties,
                ne = Object.getOwnPropertyDescriptors,
                nt = Object.getOwnPropertySymbols,
                nr = Object.prototype.hasOwnProperty,
                ni = Object.prototype.propertyIsEnumerable,
                nn = (e, t, r) => t in e ? i8(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                ns = (e, t) => {
                    for (var r in t || (t = {})) nr.call(t, r) && nn(e, r, t[r]);
                    if (nt)
                        for (var r of nt(t)) ni.call(t, r) && nn(e, r, t[r]);
                    return e
                },
                no = (e, t) => i7(e, ne(t));
            class na extends tP {
                constructor(e) {
                    super(e), this.name = "engine", this.events = new(s()), this.initialized = !1, this.ignoredPayloadTypes = [1], this.requestQueue = {
                        state: i9.idle,
                        queue: []
                    }, this.sessionRequestQueue = {
                        state: i9.idle,
                        queue: []
                    }, this.requestQueueDelay = I.ONE_SECOND, this.init = async () => {
                        this.initialized || (await this.cleanup(), this.registerRelayerEvents(), this.registerExpirerEvents(), this.registerPairingEvents(), this.client.core.pairing.register({
                            methods: Object.keys(i2)
                        }), this.initialized = !0, setTimeout(() => {
                            this.sessionRequestQueue.queue = this.getPendingSessionRequests(), this.processSessionRequestQueue()
                        }, (0, I.toMiliseconds)(this.requestQueueDelay)))
                    }, this.connect = async e => {
                        await this.isInitialized();
                        let t = no(ns({}, e), {
                            requiredNamespaces: e.requiredNamespaces || {},
                            optionalNamespaces: e.optionalNamespaces || {}
                        });
                        await this.isValidConnect(t);
                        let {
                            pairingTopic: r,
                            requiredNamespaces: i,
                            optionalNamespaces: n,
                            sessionProperties: s,
                            relays: o
                        } = t, a = r, c, u = !1;
                        if (a && (u = this.client.core.pairing.pairings.get(a).active), !a || !u) {
                            let {
                                topic: e,
                                uri: t
                            } = await this.client.core.pairing.create();
                            a = e, c = t
                        }
                        let l = await this.client.core.crypto.generateKeyPair(),
                            h = ns({
                                requiredNamespaces: i,
                                optionalNamespaces: n,
                                relays: o ? ? [{
                                    protocol: "irn"
                                }],
                                proposer: {
                                    publicKey: l,
                                    metadata: this.client.metadata
                                }
                            }, s && {
                                sessionProperties: s
                            }),
                            {
                                reject: f,
                                resolve: p,
                                done: d
                            } = ee(I.FIVE_MINUTES, i5);
                        if (this.events.once(eo("session_connect"), async ({
                                error: e,
                                session: t
                            }) => {
                                if (e) f(e);
                                else if (t) {
                                    t.self.publicKey = l;
                                    let e = no(ns({}, t), {
                                        requiredNamespaces: t.requiredNamespaces,
                                        optionalNamespaces: t.optionalNamespaces
                                    });
                                    await this.client.session.set(t.topic, e), await this.setExpiry(t.topic, t.expiry), a && await this.client.core.pairing.updateMetadata({
                                        topic: a,
                                        metadata: t.peer.metadata
                                    }), p(e)
                                }
                            }), !a) {
                            let {
                                message: e
                            } = eP("NO_MATCHING_KEY", `connect() pairing topic: ${a}`);
                            throw Error(e)
                        }
                        let g = await this.sendRequest({
                                topic: a,
                                method: "wc_sessionPropose",
                                params: h
                            }),
                            y = en(I.FIVE_MINUTES);
                        return await this.setProposal(g, ns({
                            id: g,
                            expiry: y
                        }, h)), {
                            uri: c,
                            approval: d
                        }
                    }, this.pair = async e => (await this.isInitialized(), await this.client.core.pairing.pair(e)), this.approve = async e => {
                        await this.isInitialized(), await this.isValidApprove(e);
                        let {
                            id: t,
                            relayProtocol: r,
                            namespaces: i,
                            sessionProperties: n
                        } = e, {
                            pairingTopic: s,
                            proposer: o,
                            requiredNamespaces: a,
                            optionalNamespaces: c
                        } = this.client.proposal.get(t);
                        s = s || "", ex(a) || (a = function(e, t) {
                            let r = eL(e, t);
                            if (r) throw Error(r.message);
                            let i = {};
                            for (let [t, r] of Object.entries(e)) i[t] = {
                                methods: r.methods,
                                events: r.events,
                                chains: r.accounts.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
                            };
                            return i
                        }(i, "approve()"));
                        let u = await this.client.core.crypto.generateKeyPair(),
                            l = o.publicKey,
                            h = await this.client.core.crypto.generateSharedKey(u, l);
                        s && t && (await this.client.core.pairing.updateMetadata({
                            topic: s,
                            metadata: o.metadata
                        }), await this.sendResult({
                            id: t,
                            topic: s,
                            result: {
                                relay: {
                                    protocol: r ? ? "irn"
                                },
                                responderPublicKey: u
                            }
                        }), await this.client.proposal.delete(t, eS("USER_DISCONNECTED")), await this.client.core.pairing.activate({
                            topic: s
                        }));
                        let f = ns({
                            relay: {
                                protocol: r ? ? "irn"
                            },
                            namespaces: i,
                            requiredNamespaces: a,
                            optionalNamespaces: c,
                            pairingTopic: s,
                            controller: {
                                publicKey: u,
                                metadata: this.client.metadata
                            },
                            expiry: en(i6)
                        }, n && {
                            sessionProperties: n
                        });
                        await this.client.core.relayer.subscribe(h), await this.sendRequest({
                            topic: h,
                            method: "wc_sessionSettle",
                            params: f,
                            throwOnFailedPublish: !0
                        });
                        let p = no(ns({}, f), {
                            topic: h,
                            pairingTopic: s,
                            acknowledged: !1,
                            self: f.controller,
                            peer: {
                                publicKey: o.publicKey,
                                metadata: o.metadata
                            },
                            controller: u
                        });
                        return await this.client.session.set(h, p), await this.setExpiry(h, en(i6)), {
                            topic: h,
                            acknowledged: () => new Promise(e => setTimeout(() => e(this.client.session.get(h)), 500))
                        }
                    }, this.reject = async e => {
                        await this.isInitialized(), await this.isValidReject(e);
                        let {
                            id: t,
                            reason: r
                        } = e, {
                            pairingTopic: i
                        } = this.client.proposal.get(t);
                        i && (await this.sendError(t, i, r), await this.client.proposal.delete(t, eS("USER_DISCONNECTED")))
                    }, this.update = async e => {
                        await this.isInitialized(), await this.isValidUpdate(e);
                        let {
                            topic: t,
                            namespaces: r
                        } = e, i = await this.sendRequest({
                            topic: t,
                            method: "wc_sessionUpdate",
                            params: {
                                namespaces: r
                            }
                        }), {
                            done: n,
                            resolve: s,
                            reject: o
                        } = ee();
                        return this.events.once(eo("session_update", i), ({
                            error: e
                        }) => {
                            e ? o(e) : s()
                        }), await this.client.session.update(t, {
                            namespaces: r
                        }), {
                            acknowledged: n
                        }
                    }, this.extend = async e => {
                        await this.isInitialized(), await this.isValidExtend(e);
                        let {
                            topic: t
                        } = e, r = await this.sendRequest({
                            topic: t,
                            method: "wc_sessionExtend",
                            params: {}
                        }), {
                            done: i,
                            resolve: n,
                            reject: s
                        } = ee();
                        return this.events.once(eo("session_extend", r), ({
                            error: e
                        }) => {
                            e ? s(e) : n()
                        }), await this.setExpiry(t, en(i6)), {
                            acknowledged: i
                        }
                    }, this.request = async e => {
                        await this.isInitialized(), await this.isValidRequest(e);
                        let {
                            chainId: t,
                            request: r,
                            topic: i,
                            expiry: n
                        } = e, s = tH(), {
                            done: o,
                            resolve: a,
                            reject: c
                        } = ee(n, "Request expired. Please try again.");
                        return this.events.once(eo("session_request", s), ({
                            error: e,
                            result: t
                        }) => {
                            e ? c(e) : a(t)
                        }), await Promise.all([new Promise(async e => {
                            await this.sendRequest({
                                clientRpcId: s,
                                topic: i,
                                method: "wc_sessionRequest",
                                params: {
                                    request: r,
                                    chainId: t
                                },
                                expiry: n,
                                throwOnFailedPublish: !0
                            }).catch(e => c(e)), this.client.events.emit("session_request_sent", {
                                topic: i,
                                request: r,
                                chainId: t,
                                id: s
                            }), e()
                        }), new Promise(async e => {
                            ec({
                                id: s,
                                topic: i,
                                wcDeepLink: await eu(this.client.core.storage, i1)
                            }), e()
                        }), o()]).then(e => e[2])
                    }, this.respond = async e => {
                        await this.isInitialized(), await this.isValidRespond(e);
                        let {
                            topic: t,
                            response: r
                        } = e, {
                            id: i
                        } = r;
                        t5(r) ? await this.sendResult({
                            id: i,
                            topic: t,
                            result: r.result,
                            throwOnFailedPublish: !0
                        }) : t6(r) && await this.sendError(i, t, r.error), this.cleanupAfterResponse(e)
                    }, this.ping = async e => {
                        await this.isInitialized(), await this.isValidPing(e);
                        let {
                            topic: t
                        } = e;
                        if (this.client.session.keys.includes(t)) {
                            let e = await this.sendRequest({
                                    topic: t,
                                    method: "wc_sessionPing",
                                    params: {}
                                }),
                                {
                                    done: r,
                                    resolve: i,
                                    reject: n
                                } = ee();
                            this.events.once(eo("session_ping", e), ({
                                error: e
                            }) => {
                                e ? n(e) : i()
                            }), await r()
                        } else this.client.core.pairing.pairings.keys.includes(t) && await this.client.core.pairing.ping({
                            topic: t
                        })
                    }, this.emit = async e => {
                        await this.isInitialized(), await this.isValidEmit(e);
                        let {
                            topic: t,
                            event: r,
                            chainId: i
                        } = e;
                        await this.sendRequest({
                            topic: t,
                            method: "wc_sessionEvent",
                            params: {
                                event: r,
                                chainId: i
                            }
                        })
                    }, this.disconnect = async e => {
                        await this.isInitialized(), await this.isValidDisconnect(e);
                        let {
                            topic: t
                        } = e;
                        this.client.session.keys.includes(t) ? (await this.sendRequest({
                            topic: t,
                            method: "wc_sessionDelete",
                            params: eS("USER_DISCONNECTED"),
                            throwOnFailedPublish: !0
                        }), await this.deleteSession(t)) : await this.client.core.pairing.disconnect({
                            topic: t
                        })
                    }, this.find = e => (this.isInitialized(), this.client.session.getAll().filter(t => (function(e, t) {
                        let {
                            requiredNamespaces: r
                        } = t, i = Object.keys(e.namespaces), n = Object.keys(r), s = !0;
                        return !!Y(n, i) && (i.forEach(t => {
                            let {
                                accounts: i,
                                methods: n,
                                events: o
                            } = e.namespaces[t], a = eb(i), c = r[t];
                            Y(R(t, c), a) && Y(c.methods, n) && Y(c.events, o) || (s = !1)
                        }), s)
                    })(t, e))), this.getPendingSessionRequests = () => (this.isInitialized(), this.client.pendingRequest.getAll()), this.cleanupDuplicatePairings = async e => {
                        if (e.pairingTopic) try {
                            let t = this.client.core.pairing.pairings.get(e.pairingTopic),
                                r = this.client.core.pairing.pairings.getAll().filter(r => {
                                    var i, n;
                                    return (null == (i = r.peerMetadata) ? void 0 : i.url) && (null == (n = r.peerMetadata) ? void 0 : n.url) === e.peer.metadata.url && r.topic && r.topic !== t.topic
                                });
                            if (0 === r.length) return;
                            this.client.logger.info(`Cleaning up ${r.length} duplicate pairing(s)`), await Promise.all(r.map(e => this.client.core.pairing.disconnect({
                                topic: e.topic
                            }))), this.client.logger.info("Duplicate pairings clean up finished")
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.deleteSession = async (e, t) => {
                        let {
                            self: r
                        } = this.client.session.get(e);
                        await this.client.core.relayer.unsubscribe(e), this.client.session.delete(e, eS("USER_DISCONNECTED")), this.client.core.crypto.keychain.has(r.publicKey) && await this.client.core.crypto.deleteKeyPair(r.publicKey), this.client.core.crypto.keychain.has(e) && await this.client.core.crypto.deleteSymKey(e), t || this.client.core.expirer.del(e), this.client.core.storage.removeItem(i1).catch(e => this.client.logger.warn(e))
                    }, this.deleteProposal = async (e, t) => {
                        await Promise.all([this.client.proposal.delete(e, eS("USER_DISCONNECTED")), t ? Promise.resolve() : this.client.core.expirer.del(e)])
                    }, this.deletePendingSessionRequest = async (e, t, r = !1) => {
                        await Promise.all([this.client.pendingRequest.delete(e, t), r ? Promise.resolve() : this.client.core.expirer.del(e)]), this.sessionRequestQueue.queue = this.sessionRequestQueue.queue.filter(t => t.id !== e), r && (this.sessionRequestQueue.state = i9.idle)
                    }, this.setExpiry = async (e, t) => {
                        this.client.session.keys.includes(e) && await this.client.session.update(e, {
                            expiry: t
                        }), this.client.core.expirer.set(e, t)
                    }, this.setProposal = async (e, t) => {
                        await this.client.proposal.set(e, t), this.client.core.expirer.set(e, t.expiry)
                    }, this.setPendingSessionRequest = async e => {
                        let t = i2.wc_sessionRequest.req.ttl,
                            {
                                id: r,
                                topic: i,
                                params: n,
                                verifyContext: s
                            } = e;
                        await this.client.pendingRequest.set(r, {
                            id: r,
                            topic: i,
                            params: n,
                            verifyContext: s
                        }), t && this.client.core.expirer.set(r, en(t))
                    }, this.sendRequest = async e => {
                        let {
                            topic: t,
                            method: r,
                            params: i,
                            expiry: n,
                            relayRpcId: s,
                            clientRpcId: o,
                            throwOnFailedPublish: a
                        } = e, c = tV(r, i, o);
                        if (Q() && i4.includes(r)) {
                            let e = D(JSON.stringify(c));
                            this.client.core.verify.register({
                                attestationId: e
                            })
                        }
                        let u = await this.client.core.crypto.encode(t, c),
                            l = i2[r].req;
                        return n && (l.ttl = n), s && (l.id = s), this.client.core.history.set(t, c), a ? (l.internal = no(ns({}, l.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(t, u, l)) : this.client.core.relayer.publish(t, u, l).catch(e => this.client.logger.error(e)), c.id
                    }, this.sendResult = async e => {
                        let {
                            id: t,
                            topic: r,
                            result: i,
                            throwOnFailedPublish: n
                        } = e, s = tK(t, i), o = await this.client.core.crypto.encode(r, s), a = i2[(await this.client.core.history.get(r, t)).request.method].res;
                        n ? (a.internal = no(ns({}, a.internal), {
                            throwOnFailedPublish: !0
                        }), await this.client.core.relayer.publish(r, o, a)) : this.client.core.relayer.publish(r, o, a).catch(e => this.client.logger.error(e)), await this.client.core.history.resolve(s)
                    }, this.sendError = async (e, t, r) => {
                        let i = tF(e, r),
                            n = await this.client.core.crypto.encode(t, i),
                            s = i2[(await this.client.core.history.get(t, e)).request.method].res;
                        this.client.core.relayer.publish(t, n, s), await this.client.core.history.resolve(i)
                    }, this.cleanup = async () => {
                        let e = [],
                            t = [];
                        this.client.session.getAll().forEach(t => {
                            es(t.expiry) && e.push(t.topic)
                        }), this.client.proposal.getAll().forEach(e => {
                            es(e.expiry) && t.push(e.id)
                        }), await Promise.all([...e.map(e => this.deleteSession(e)), ...t.map(e => this.deleteProposal(e))])
                    }, this.onRelayEventRequest = async e => {
                        this.requestQueue.queue.push(e), await this.processRequestsQueue()
                    }, this.processRequestsQueue = async () => {
                        if (this.requestQueue.state === i9.active) {
                            this.client.logger.info("Request queue already active, skipping...");
                            return
                        }
                        for (this.client.logger.info(`Request queue starting with ${this.requestQueue.queue.length} requests`); this.requestQueue.queue.length > 0;) {
                            this.requestQueue.state = i9.active;
                            let e = this.requestQueue.queue.shift();
                            if (e) try {
                                this.processRequest(e), await new Promise(e => setTimeout(e, 300))
                            } catch (e) {
                                this.client.logger.warn(e)
                            }
                        }
                        this.requestQueue.state = i9.idle
                    }, this.processRequest = e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = r.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeRequest(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleRequest(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateRequest(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendRequest(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingRequest(t, r);
                            case "wc_sessionDelete":
                                return this.onSessionDeleteRequest(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequest(t, r);
                            case "wc_sessionEvent":
                                return this.onSessionEventRequest(t, r);
                            default:
                                return this.client.logger.info(`Unsupported request method ${i}`)
                        }
                    }, this.onRelayEventResponse = async e => {
                        let {
                            topic: t,
                            payload: r
                        } = e, i = (await this.client.core.history.get(t, r.id)).request.method;
                        switch (i) {
                            case "wc_sessionPropose":
                                return this.onSessionProposeResponse(t, r);
                            case "wc_sessionSettle":
                                return this.onSessionSettleResponse(t, r);
                            case "wc_sessionUpdate":
                                return this.onSessionUpdateResponse(t, r);
                            case "wc_sessionExtend":
                                return this.onSessionExtendResponse(t, r);
                            case "wc_sessionPing":
                                return this.onSessionPingResponse(t, r);
                            case "wc_sessionRequest":
                                return this.onSessionRequestResponse(t, r);
                            default:
                                return this.client.logger.info(`Unsupported response method ${i}`)
                        }
                    }, this.onRelayEventUnknownPayload = e => {
                        let {
                            topic: t
                        } = e, {
                            message: r
                        } = eP("MISSING_OR_INVALID", `Decoded payload on topic ${t} is not identifiable as a JSON-RPC request or a response.`);
                        throw Error(r)
                    }, this.onSessionProposeRequest = async (e, t) => {
                        let {
                            params: r,
                            id: i
                        } = t;
                        try {
                            this.isValidConnect(ns({}, t.params));
                            let n = en(I.FIVE_MINUTES),
                                s = ns({
                                    id: i,
                                    pairingTopic: e,
                                    expiry: n
                                }, r);
                            await this.setProposal(i, s);
                            let o = D(JSON.stringify(t)),
                                a = await this.getVerifyContext(o, s.proposer.metadata);
                            this.client.events.emit("session_proposal", {
                                id: i,
                                params: s,
                                verifyContext: a
                            })
                        } catch (t) {
                            await this.sendError(i, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionProposeResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        if (t5(t)) {
                            let {
                                result: i
                            } = t;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                result: i
                            });
                            let n = this.client.proposal.get(r);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                proposal: n
                            });
                            let s = n.proposer.publicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                selfPublicKey: s
                            });
                            let o = i.responderPublicKey;
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                peerPublicKey: o
                            });
                            let a = await this.client.core.crypto.generateSharedKey(s, o);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                sessionTopic: a
                            });
                            let c = await this.client.core.relayer.subscribe(a);
                            this.client.logger.trace({
                                type: "method",
                                method: "onSessionProposeResponse",
                                subscriptionId: c
                            }), await this.client.core.pairing.activate({
                                topic: e
                            })
                        } else t6(t) && (await this.client.proposal.delete(r, eS("USER_DISCONNECTED")), this.events.emit(eo("session_connect"), {
                            error: t.error
                        }))
                    }, this.onSessionSettleRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            this.isValidSessionSettleRequest(i);
                            let {
                                relay: r,
                                controller: n,
                                expiry: s,
                                namespaces: o,
                                requiredNamespaces: a,
                                optionalNamespaces: c,
                                sessionProperties: u,
                                pairingTopic: l
                            } = t.params, h = ns({
                                topic: e,
                                relay: r,
                                expiry: s,
                                namespaces: o,
                                acknowledged: !0,
                                pairingTopic: l,
                                requiredNamespaces: a,
                                optionalNamespaces: c,
                                controller: n.publicKey,
                                self: {
                                    publicKey: "",
                                    metadata: this.client.metadata
                                },
                                peer: {
                                    publicKey: n.publicKey,
                                    metadata: n.metadata
                                }
                            }, u && {
                                sessionProperties: u
                            });
                            await this.sendResult({
                                id: t.id,
                                topic: e,
                                result: !0
                            }), this.events.emit(eo("session_connect"), {
                                session: h
                            }), this.cleanupDuplicatePairings(h)
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionSettleResponse = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        t5(t) ? (await this.client.session.update(e, {
                            acknowledged: !0
                        }), this.events.emit(eo("session_approve", r), {})) : t6(t) && (await this.client.session.delete(e, eS("USER_DISCONNECTED")), this.events.emit(eo("session_approve", r), {
                            error: t.error
                        }))
                    }, this.onSessionUpdateRequest = async (e, t) => {
                        let {
                            params: r,
                            id: i
                        } = t;
                        try {
                            let t = `${e}_session_update`,
                                n = eB.get(t);
                            if (n && this.isRequestOutOfSync(n, i)) {
                                this.client.logger.info(`Discarding out of sync request - ${i}`);
                                return
                            }
                            this.isValidUpdate(ns({
                                topic: e
                            }, r)), await this.client.session.update(e, {
                                namespaces: r.namespaces
                            }), await this.sendResult({
                                id: i,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_update", {
                                id: i,
                                topic: e,
                                params: r
                            }), eB.set(t, i)
                        } catch (t) {
                            await this.sendError(i, e, t), this.client.logger.error(t)
                        }
                    }, this.isRequestOutOfSync = (e, t) => parseInt(t.toString().slice(0, -3)) <= parseInt(e.toString().slice(0, -3)), this.onSessionUpdateResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        t5(t) ? this.events.emit(eo("session_update", r), {}) : t6(t) && this.events.emit(eo("session_update", r), {
                            error: t.error
                        })
                    }, this.onSessionExtendRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidExtend({
                                topic: e
                            }), await this.setExpiry(e, en(i6)), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_extend", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionExtendResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        t5(t) ? this.events.emit(eo("session_extend", r), {}) : t6(t) && this.events.emit(eo("session_extend", r), {
                            error: t.error
                        })
                    }, this.onSessionPingRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidPing({
                                topic: e
                            }), await this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            }), this.client.events.emit("session_ping", {
                                id: r,
                                topic: e
                            })
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionPingResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        setTimeout(() => {
                            t5(t) ? this.events.emit(eo("session_ping", r), {}) : t6(t) && this.events.emit(eo("session_ping", r), {
                                error: t.error
                            })
                        }, 500)
                    }, this.onSessionDeleteRequest = async (e, t) => {
                        let {
                            id: r
                        } = t;
                        try {
                            this.isValidDisconnect({
                                topic: e,
                                reason: t.params
                            }), await Promise.all([new Promise(t => {
                                this.client.core.relayer.once(r4.publish, async () => {
                                    t(await this.deleteSession(e))
                                })
                            }), this.sendResult({
                                id: r,
                                topic: e,
                                result: !0
                            })]), this.client.events.emit("session_delete", {
                                id: r,
                                topic: e
                            })
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.onSessionRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            this.isValidRequest(ns({
                                topic: e
                            }, i));
                            let t = D(JSON.stringify(tV("wc_sessionRequest", i, r))),
                                n = this.client.session.get(e),
                                s = await this.getVerifyContext(t, n.peer.metadata),
                                o = {
                                    id: r,
                                    topic: e,
                                    params: i,
                                    verifyContext: s
                                };
                            await this.setPendingSessionRequest(o), this.addSessionRequestToSessionRequestQueue(o), this.processSessionRequestQueue()
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.onSessionRequestResponse = (e, t) => {
                        let {
                            id: r
                        } = t;
                        t5(t) ? this.events.emit(eo("session_request", r), {
                            result: t.result
                        }) : t6(t) && this.events.emit(eo("session_request", r), {
                            error: t.error
                        })
                    }, this.onSessionEventRequest = async (e, t) => {
                        let {
                            id: r,
                            params: i
                        } = t;
                        try {
                            let t = `${e}_session_event_${i.event.name}`,
                                n = eB.get(t);
                            if (n && this.isRequestOutOfSync(n, r)) {
                                this.client.logger.info(`Discarding out of sync request - ${r}`);
                                return
                            }
                            this.isValidEmit(ns({
                                topic: e
                            }, i)), this.client.events.emit("session_event", {
                                id: r,
                                topic: e,
                                params: i
                            }), eB.set(t, r)
                        } catch (t) {
                            await this.sendError(r, e, t), this.client.logger.error(t)
                        }
                    }, this.addSessionRequestToSessionRequestQueue = e => {
                        this.sessionRequestQueue.queue.push(e)
                    }, this.cleanupAfterResponse = e => {
                        this.deletePendingSessionRequest(e.response.id, {
                            message: "fulfilled",
                            code: 0
                        }), setTimeout(() => {
                            this.sessionRequestQueue.state = i9.idle, this.processSessionRequestQueue()
                        }, (0, I.toMiliseconds)(this.requestQueueDelay))
                    }, this.processSessionRequestQueue = () => {
                        if (this.sessionRequestQueue.state === i9.active) {
                            this.client.logger.info("session request queue is already active.");
                            return
                        }
                        let e = this.sessionRequestQueue.queue[0];
                        if (!e) {
                            this.client.logger.info("session request queue is empty.");
                            return
                        }
                        try {
                            this.sessionRequestQueue.state = i9.active, this.client.events.emit("session_request", e)
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    }, this.onPairingCreated = e => {
                        if (e.active) return;
                        let t = this.client.proposal.getAll().find(t => t.pairingTopic === e.topic);
                        t && this.onSessionProposeRequest(e.topic, tV("wc_sessionPropose", {
                            requiredNamespaces: t.requiredNamespaces,
                            optionalNamespaces: t.optionalNamespaces,
                            relays: t.relays,
                            proposer: t.proposer,
                            sessionProperties: t.sessionProperties
                        }, t.id))
                    }, this.isValidConnect = async e => {
                        let t;
                        if (!ek(e)) {
                            let {
                                message: t
                            } = eP("MISSING_OR_INVALID", `connect() params: ${JSON.stringify(e)}`);
                            throw Error(t)
                        }
                        let {
                            pairingTopic: r,
                            requiredNamespaces: i,
                            optionalNamespaces: n,
                            sessionProperties: s,
                            relays: o
                        } = e;
                        if (eN(r) || await this.isValidPairingTopic(r), t = !1, o ? o && eO(o) && o.length && o.forEach(e => {
                                t = eD(e)
                            }) : t = !0, !t) {
                            let {
                                message: e
                            } = eP("MISSING_OR_INVALID", `connect() relays: ${o}`);
                            throw Error(e)
                        }
                        eN(i) || 0 === ex(i) || this.validateNamespaces(i, "requiredNamespaces"), eN(n) || 0 === ex(n) || this.validateNamespaces(n, "optionalNamespaces"), eN(s) || this.validateSessionProps(s, "sessionProperties")
                    }, this.validateNamespaces = (e, t) => {
                        let r = function(e, t, r) {
                            let i = null;
                            if (e && ex(e)) {
                                let n;
                                let s = eT(e, t);
                                s && (i = s);
                                let o = (n = null, Object.entries(e).forEach(([e, i]) => {
                                    var s, o;
                                    let a;
                                    if (n) return;
                                    let c = (s = R(e, i), o = `${t} ${r}`, a = null, eO(s) && s.length ? s.forEach(e => {
                                        a || eC(e) || (a = eS("UNSUPPORTED_CHAINS", `${o}, chain ${e} should be a string and conform to "namespace:chainId" format`))
                                    }) : eC(e) || (a = eS("UNSUPPORTED_CHAINS", `${o}, chains must be defined as "namespace:chainId" e.g. "eip155:1": {...} in the namespace key OR as an array of CAIP-2 chainIds e.g. eip155: { chains: ["eip155:1", "eip155:5"] }`)), a);
                                    c && (n = c)
                                }), n);
                                o && (i = o)
                            } else i = eP("MISSING_OR_INVALID", `${t}, ${r} should be an object with data`);
                            return i
                        }(e, "connect()", t);
                        if (r) throw Error(r.message)
                    }, this.isValidApprove = async e => {
                        if (!ek(e)) throw Error(eP("MISSING_OR_INVALID", `approve() params: ${e}`).message);
                        let {
                            id: t,
                            namespaces: r,
                            relayProtocol: i,
                            sessionProperties: n
                        } = e;
                        await this.isValidProposalId(t);
                        let s = this.client.proposal.get(t),
                            o = eL(r, "approve()");
                        if (o) throw Error(o.message);
                        let a = eq(s.requiredNamespaces, r, "approve()");
                        if (a) throw Error(a.message);
                        if (!eR(i, !0)) {
                            let {
                                message: e
                            } = eP("MISSING_OR_INVALID", `approve() relayProtocol: ${i}`);
                            throw Error(e)
                        }
                        eN(n) || this.validateSessionProps(n, "sessionProperties")
                    }, this.isValidReject = async e => {
                        if (!ek(e)) {
                            let {
                                message: t
                            } = eP("MISSING_OR_INVALID", `reject() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            id: t,
                            reason: r
                        } = e;
                        if (await this.isValidProposalId(t), !r || "object" != typeof r || !r.code || !eA(r.code, !1) || !r.message || !eR(r.message, !1)) {
                            let {
                                message: e
                            } = eP("MISSING_OR_INVALID", `reject() reason: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                    }, this.isValidSessionSettleRequest = e => {
                        let t;
                        if (!ek(e)) {
                            let {
                                message: t
                            } = eP("MISSING_OR_INVALID", `onSessionSettleRequest() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            relay: r,
                            controller: i,
                            namespaces: n,
                            expiry: s
                        } = e;
                        if (!eD(r)) {
                            let {
                                message: e
                            } = eP("MISSING_OR_INVALID", "onSessionSettleRequest() relay protocol should be a string");
                            throw Error(e)
                        }
                        let o = (t = null, eR(i ? .publicKey, !1) || (t = eP("MISSING_OR_INVALID", "onSessionSettleRequest() controller public key should be a string")), t);
                        if (o) throw Error(o.message);
                        let a = eL(n, "onSessionSettleRequest()");
                        if (a) throw Error(a.message);
                        if (es(s)) {
                            let {
                                message: e
                            } = eP("EXPIRED", "onSessionSettleRequest()");
                            throw Error(e)
                        }
                    }, this.isValidUpdate = async e => {
                        if (!ek(e)) {
                            let {
                                message: t
                            } = eP("MISSING_OR_INVALID", `update() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            namespaces: r
                        } = e;
                        await this.isValidSessionTopic(t);
                        let i = this.client.session.get(t),
                            n = eL(r, "update()");
                        if (n) throw Error(n.message);
                        let s = eq(i.requiredNamespaces, r, "update()");
                        if (s) throw Error(s.message)
                    }, this.isValidExtend = async e => {
                        if (!ek(e)) {
                            let {
                                message: t
                            } = eP("MISSING_OR_INVALID", `extend() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionTopic(t)
                    }, this.isValidRequest = async e => {
                        var t;
                        if (!ek(e)) {
                            let {
                                message: t
                            } = eP("MISSING_OR_INVALID", `request() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: r,
                            request: i,
                            chainId: n,
                            expiry: s
                        } = e;
                        await this.isValidSessionTopic(r);
                        let {
                            namespaces: o
                        } = this.client.session.get(r);
                        if (!eM(o, n)) {
                            let {
                                message: e
                            } = eP("MISSING_OR_INVALID", `request() chainId: ${n}`);
                            throw Error(e)
                        }
                        if (eN(i) || !eR(i.method, !1)) {
                            let {
                                message: e
                            } = eP("MISSING_OR_INVALID", `request() ${JSON.stringify(i)}`);
                            throw Error(e)
                        }
                        if (!(eR(t = i.method, !1) && (function(e, t) {
                                let r = [];
                                return Object.values(e).forEach(e => {
                                    eb(e.accounts).includes(t) && r.push(...e.methods)
                                }), r
                            })(o, n).includes(t))) {
                            let {
                                message: e
                            } = eP("MISSING_OR_INVALID", `request() method: ${i.method}`);
                            throw Error(e)
                        }
                        if (s && (!eA(s, !1) || !(s <= i3.max) || !(s >= i3.min))) {
                            let {
                                message: e
                            } = eP("MISSING_OR_INVALID", `request() expiry: ${s}. Expiry must be a number (in seconds) between ${i3.min} and ${i3.max}`);
                            throw Error(e)
                        }
                    }, this.isValidRespond = async e => {
                        if (!ek(e)) {
                            let {
                                message: t
                            } = eP("MISSING_OR_INVALID", `respond() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t,
                            response: r
                        } = e;
                        if (await this.isValidSessionTopic(t), eN(r) || eN(r.result) && eN(r.error) || !eA(r.id, !1) || !eR(r.jsonrpc, !1)) {
                            let {
                                message: e
                            } = eP("MISSING_OR_INVALID", `respond() response: ${JSON.stringify(r)}`);
                            throw Error(e)
                        }
                    }, this.isValidPing = async e => {
                        if (!ek(e)) {
                            let {
                                message: t
                            } = eP("MISSING_OR_INVALID", `ping() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.isValidEmit = async e => {
                        var t;
                        if (!ek(e)) {
                            let {
                                message: t
                            } = eP("MISSING_OR_INVALID", `emit() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: r,
                            event: i,
                            chainId: n
                        } = e;
                        await this.isValidSessionTopic(r);
                        let {
                            namespaces: s
                        } = this.client.session.get(r);
                        if (!eM(s, n)) {
                            let {
                                message: e
                            } = eP("MISSING_OR_INVALID", `emit() chainId: ${n}`);
                            throw Error(e)
                        }
                        if (eN(i) || !eR(i.name, !1)) {
                            let {
                                message: e
                            } = eP("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
                            throw Error(e)
                        }
                        if (!(eR(t = i.name, !1) && (function(e, t) {
                                let r = [];
                                return Object.values(e).forEach(e => {
                                    eb(e.accounts).includes(t) && r.push(...e.events)
                                }), r
                            })(s, n).includes(t))) {
                            let {
                                message: e
                            } = eP("MISSING_OR_INVALID", `emit() event: ${JSON.stringify(i)}`);
                            throw Error(e)
                        }
                    }, this.isValidDisconnect = async e => {
                        if (!ek(e)) {
                            let {
                                message: t
                            } = eP("MISSING_OR_INVALID", `disconnect() params: ${e}`);
                            throw Error(t)
                        }
                        let {
                            topic: t
                        } = e;
                        await this.isValidSessionOrPairingTopic(t)
                    }, this.getVerifyContext = async (e, t) => {
                        let r = {
                            verified: {
                                verifyUrl: t.verifyUrl || ic,
                                validation: "UNKNOWN",
                                origin: t.url || ""
                            }
                        };
                        try {
                            let i = await this.client.core.verify.resolve({
                                attestationId: e,
                                verifyUrl: t.verifyUrl
                            });
                            i && (r.verified.origin = i.origin, r.verified.isScam = i.isScam, r.verified.validation = i.origin === new URL(t.url).origin ? "VALID" : "INVALID")
                        } catch (e) {
                            this.client.logger.info(e)
                        }
                        return this.client.logger.info(`Verify context: ${JSON.stringify(r)}`), r
                    }, this.validateSessionProps = (e, t) => {
                        Object.values(e).forEach(e => {
                            if (!eR(e, !1)) {
                                let {
                                    message: r
                                } = eP("MISSING_OR_INVALID", `${t} must be in Record<string, string> format. Received: ${JSON.stringify(e)}`);
                                throw Error(r)
                            }
                        })
                    }
                }
                async isInitialized() {
                    if (!this.initialized) {
                        let {
                            message: e
                        } = eP("NOT_INITIALIZED", this.name);
                        throw Error(e)
                    }
                    await this.client.core.relayer.confirmOnlineStateOrThrow()
                }
                registerRelayerEvents() {
                    this.client.core.relayer.on(r4.message, async e => {
                        let {
                            topic: t,
                            message: r
                        } = e;
                        if (this.ignoredPayloadTypes.includes(this.client.core.crypto.getPayloadType(r))) return;
                        let i = await this.client.core.crypto.decode(t, r);
                        try {
                            t0(i) ? (this.client.core.history.set(t, i), this.onRelayEventRequest({
                                topic: t,
                                payload: i
                            })) : t1(i) ? (await this.client.core.history.resolve(i), await this.onRelayEventResponse({
                                topic: t,
                                payload: i
                            }), this.client.core.history.delete(t, i.id)) : this.onRelayEventUnknownPayload({
                                topic: t,
                                payload: i
                            })
                        } catch (e) {
                            this.client.logger.error(e)
                        }
                    })
                }
                registerExpirerEvents() {
                    this.client.core.expirer.on(io.expired, async e => {
                        let {
                            topic: t,
                            id: r
                        } = ei(e.target);
                        if (r && this.client.pendingRequest.keys.includes(r)) return await this.deletePendingSessionRequest(r, eP("EXPIRED"), !0);
                        t ? this.client.session.keys.includes(t) && (await this.deleteSession(t, !0), this.client.events.emit("session_expire", {
                            topic: t
                        })) : r && (await this.deleteProposal(r, !0), this.client.events.emit("proposal_expire", {
                            id: r
                        }))
                    })
                }
                registerPairingEvents() {
                    this.client.core.pairing.events.on(ii.create, e => this.onPairingCreated(e))
                }
                isValidPairingTopic(e) {
                    if (!eR(e, !1)) {
                        let {
                            message: t
                        } = eP("MISSING_OR_INVALID", `pairing topic should be a string: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.core.pairing.pairings.keys.includes(e)) {
                        let {
                            message: t
                        } = eP("NO_MATCHING_KEY", `pairing topic doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if (es(this.client.core.pairing.pairings.get(e).expiry)) {
                        let {
                            message: t
                        } = eP("EXPIRED", `pairing topic: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidSessionTopic(e) {
                    if (!eR(e, !1)) {
                        let {
                            message: t
                        } = eP("MISSING_OR_INVALID", `session topic should be a string: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.session.keys.includes(e)) {
                        let {
                            message: t
                        } = eP("NO_MATCHING_KEY", `session topic doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if (es(this.client.session.get(e).expiry)) {
                        await this.deleteSession(e);
                        let {
                            message: t
                        } = eP("EXPIRED", `session topic: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidSessionOrPairingTopic(e) {
                    if (this.client.session.keys.includes(e)) await this.isValidSessionTopic(e);
                    else if (this.client.core.pairing.pairings.keys.includes(e)) this.isValidPairingTopic(e);
                    else if (eR(e, !1)) {
                        let {
                            message: t
                        } = eP("NO_MATCHING_KEY", `session or pairing topic doesn't exist: ${e}`);
                        throw Error(t)
                    } else {
                        let {
                            message: t
                        } = eP("MISSING_OR_INVALID", `session or pairing topic should be a string: ${e}`);
                        throw Error(t)
                    }
                }
                async isValidProposalId(e) {
                    if ("number" != typeof e) {
                        let {
                            message: t
                        } = eP("MISSING_OR_INVALID", `proposal id should be a number: ${e}`);
                        throw Error(t)
                    }
                    if (!this.client.proposal.keys.includes(e)) {
                        let {
                            message: t
                        } = eP("NO_MATCHING_KEY", `proposal id doesn't exist: ${e}`);
                        throw Error(t)
                    }
                    if (es(this.client.proposal.get(e).expiry)) {
                        await this.deleteProposal(e);
                        let {
                            message: t
                        } = eP("EXPIRED", `proposal id: ${e}`);
                        throw Error(t)
                    }
                }
            }
            class nc extends iU {
                constructor(e, t) {
                    super(e, t, "proposal", iX), this.core = e, this.logger = t
                }
            }
            class nu extends iU {
                constructor(e, t) {
                    super(e, t, "session", iX), this.core = e, this.logger = t
                }
            }
            class nl extends iU {
                constructor(e, t) {
                    super(e, t, "request", iX, e => e.id), this.core = e, this.logger = t
                }
            }
            class nh extends tI {
                constructor(e) {
                    super(e), this.protocol = "wc", this.version = 2, this.name = i0.name, this.events = new n.EventEmitter, this.on = (e, t) => this.events.on(e, t), this.once = (e, t) => this.events.once(e, t), this.off = (e, t) => this.events.off(e, t), this.removeListener = (e, t) => this.events.removeListener(e, t), this.removeAllListeners = e => this.events.removeAllListeners(e), this.connect = async e => {
                        try {
                            return await this.engine.connect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.pair = async e => {
                        try {
                            return await this.engine.pair(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.approve = async e => {
                        try {
                            return await this.engine.approve(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.reject = async e => {
                        try {
                            return await this.engine.reject(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.update = async e => {
                        try {
                            return await this.engine.update(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.extend = async e => {
                        try {
                            return await this.engine.extend(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.request = async e => {
                        try {
                            return await this.engine.request(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.respond = async e => {
                        try {
                            return await this.engine.respond(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.ping = async e => {
                        try {
                            return await this.engine.ping(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.emit = async e => {
                        try {
                            return await this.engine.emit(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.disconnect = async e => {
                        try {
                            return await this.engine.disconnect(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.find = e => {
                        try {
                            return this.engine.find(e)
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.getPendingSessionRequests = () => {
                        try {
                            return this.engine.getPendingSessionRequests()
                        } catch (e) {
                            throw this.logger.error(e.message), e
                        }
                    }, this.name = e ? .name || i0.name, this.metadata = e ? .metadata || (0, S.D)() || {
                        name: "",
                        description: "",
                        url: "",
                        icons: [""]
                    };
                    let t = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : (0, tf.pino)((0, tf.getDefaultLoggerOptions)({
                        level: e ? .logger || i0.logger
                    }));
                    this.core = e ? .core || new iY(e), this.logger = (0, tf.generateChildLogger)(t, this.name), this.session = new nu(this.core, this.logger), this.proposal = new nc(this.core, this.logger), this.pendingRequest = new nl(this.core, this.logger), this.engine = new na(this)
                }
                static async init(e) {
                    let t = new nh(e);
                    return await t.initialize(), t
                }
                get context() {
                    return (0, tf.getLoggerContext)(this.logger)
                }
                get pairing() {
                    return this.core.pairing.pairings
                }
                async initialize() {
                    this.logger.trace("Initialized");
                    try {
                        await this.core.start(), await this.session.init(), await this.proposal.init(), await this.pendingRequest.init(), await this.engine.init(), this.core.verify.init({
                            verifyUrl: this.metadata.verifyUrl
                        }), this.logger.info("SignClient Initialization Success")
                    } catch (e) {
                        throw this.logger.info("SignClient Initialization Failure"), this.logger.error(e.message), e
                    }
                }
            }
            var nf = r(9366),
                np = r.n(nf);
            let nd = {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                method: "POST"
            };
            class ng {
                constructor(e, t = !1) {
                    if (this.url = e, this.disableProviderPing = t, this.events = new n.EventEmitter, this.isAvailable = !1, this.registering = !1, !tY(e)) throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                    this.url = e, this.disableProviderPing = t
                }
                get connected() {
                    return this.isAvailable
                }
                get connecting() {
                    return this.registering
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                async open(e = this.url) {
                    await this.register(e)
                }
                async close() {
                    if (!this.isAvailable) throw Error("Connection already closed");
                    this.onClose()
                }
                async send(e, t) {
                    this.isAvailable || await this.register();
                    try {
                        let t = tt(e),
                            r = await np()(this.url, Object.assign(Object.assign({}, nd), {
                                body: t
                            })),
                            i = await r.json();
                        this.onPayload({
                            data: i
                        })
                    } catch (t) {
                        this.onError(e.id, t)
                    }
                }
                async register(e = this.url) {
                    if (!tY(e)) throw Error(`Provided URL is not compatible with HTTP connection: ${e}`);
                    if (this.registering) {
                        let e = this.events.getMaxListeners();
                        return (this.events.listenerCount("register_error") >= e || this.events.listenerCount("open") >= e) && this.events.setMaxListeners(e + 1), new Promise((e, t) => {
                            this.events.once("register_error", e => {
                                this.resetMaxListeners(), t(e)
                            }), this.events.once("open", () => {
                                if (this.resetMaxListeners(), void 0 === this.isAvailable) return t(Error("HTTP connection is missing or invalid"));
                                e()
                            })
                        })
                    }
                    this.url = e, this.registering = !0;
                    try {
                        if (!this.disableProviderPing) {
                            let t = tt({
                                id: 1,
                                jsonrpc: "2.0",
                                method: "test",
                                params: []
                            });
                            await np()(e, Object.assign(Object.assign({}, nd), {
                                body: t
                            }))
                        }
                        this.onOpen()
                    } catch (t) {
                        let e = this.parseError(t);
                        throw this.events.emit("register_error", e), this.onClose(), e
                    }
                }
                onOpen() {
                    this.isAvailable = !0, this.registering = !1, this.events.emit("open")
                }
                onClose() {
                    this.isAvailable = !1, this.registering = !1, this.events.emit("close")
                }
                onPayload(e) {
                    if (void 0 === e.data) return;
                    let t = "string" == typeof e.data ? te(e.data) : e.data;
                    this.events.emit("payload", t)
                }
                onError(e, t) {
                    let r = this.parseError(t),
                        i = tF(e, r.message || r.toString());
                    this.events.emit("payload", i)
                }
                parseError(e, t = this.url) {
                    return tU(e, t, "HTTP")
                }
                resetMaxListeners() {
                    this.events.getMaxListeners() > 10 && this.events.setMaxListeners(10)
                }
            }
            let ny = "error",
                nv = "wc@2:universal_provider:",
                nm = {
                    DEFAULT_CHAIN_CHANGED: "default_chain_changed"
                };
            var nb = "u" > typeof globalThis ? globalThis : "u" > typeof window ? window : "u" > typeof r.g ? r.g : "u" > typeof self ? self : {},
                n_ = {
                    exports: {}
                };
            /**
             * @license
             * Lodash <https://lodash.com/>
             * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
             * Released under MIT license <https://lodash.com/license>
             * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
             * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
             */
            ! function(e, t) {
                (function() {
                    var r, i = "Expected a function",
                        n = "__lodash_hash_undefined__",
                        s = "__lodash_placeholder__",
                        o = 1 / 0,
                        a = 0 / 0,
                        c = [
                            ["ary", 128],
                            ["bind", 1],
                            ["bindKey", 2],
                            ["curry", 8],
                            ["curryRight", 16],
                            ["flip", 512],
                            ["partial", 32],
                            ["partialRight", 64],
                            ["rearg", 256]
                        ],
                        u = "[object Arguments]",
                        l = "[object Array]",
                        h = "[object Boolean]",
                        f = "[object Date]",
                        p = "[object Error]",
                        d = "[object Function]",
                        g = "[object GeneratorFunction]",
                        y = "[object Map]",
                        v = "[object Number]",
                        m = "[object Object]",
                        b = "[object Promise]",
                        _ = "[object RegExp]",
                        w = "[object Set]",
                        E = "[object String]",
                        I = "[object Symbol]",
                        P = "[object WeakMap]",
                        S = "[object ArrayBuffer]",
                        O = "[object DataView]",
                        x = "[object Float32Array]",
                        N = "[object Float64Array]",
                        R = "[object Int8Array]",
                        A = "[object Int16Array]",
                        C = "[object Int32Array]",
                        j = "[object Uint8Array]",
                        T = "[object Uint8ClampedArray]",
                        L = "[object Uint16Array]",
                        D = "[object Uint32Array]",
                        k = /\b__p \+= '';/g,
                        M = /\b(__p \+=) '' \+/g,
                        q = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
                        $ = /&(?:amp|lt|gt|quot|#39);/g,
                        U = /[&<>"']/g,
                        z = RegExp($.source),
                        H = RegExp(U.source),
                        B = /<%-([\s\S]+?)%>/g,
                        V = /<%([\s\S]+?)%>/g,
                        K = /<%=([\s\S]+?)%>/g,
                        F = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
                        W = /^\w*$/,
                        G = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
                        Q = /[\\^$.*+?()[\]{}|]/g,
                        J = RegExp(Q.source),
                        Y = /^\s+/,
                        Z = /\s/,
                        X = /\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,
                        ee = /\{\n\/\* \[wrapped with (.+)\] \*/,
                        et = /,? & /,
                        er = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,
                        ei = /[()=,{}\[\]\/\s]/,
                        en = /\\(\\)?/g,
                        es = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
                        eo = /\w*$/,
                        ea = /^[-+]0x[0-9a-f]+$/i,
                        ec = /^0b[01]+$/i,
                        eu = /^\[object .+?Constructor\]$/,
                        el = /^0o[0-7]+$/i,
                        eh = /^(?:0|[1-9]\d*)$/,
                        ef = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,
                        ep = /($^)/,
                        ed = /['\n\r\u2028\u2029\\]/g,
                        eg = "\ud800-\udfff",
                        ey = "\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff",
                        ev = "\\u2700-\\u27bf",
                        em = "a-z\\xdf-\\xf6\\xf8-\\xff",
                        eb = "A-Z\\xc0-\\xd6\\xd8-\\xde",
                        e_ = "\\ufe0e\\ufe0f",
                        ew = "\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",
                        eE = "['’]",
                        eI = "[" + ew + "]",
                        eP = "[" + ey + "]",
                        eS = "[" + em + "]",
                        eO = "[^" + eg + ew + "\\d+" + ev + em + eb + "]",
                        ex = "\ud83c[\udffb-\udfff]",
                        eN = "[^" + eg + "]",
                        eR = "(?:\ud83c[\udde6-\uddff]){2}",
                        eA = "[\ud800-\udbff][\udc00-\udfff]",
                        eC = "[" + eb + "]",
                        ej = "\\u200d",
                        eT = "(?:" + eS + "|" + eO + ")",
                        eL = "(?:" + eE + "(?:d|ll|m|re|s|t|ve))?",
                        eD = "(?:" + eE + "(?:D|LL|M|RE|S|T|VE))?",
                        ek = "(?:" + eP + "|" + ex + ")?",
                        eM = "[" + e_ + "]?",
                        eq = "(?:" + ej + "(?:" + [eN, eR, eA].join("|") + ")" + eM + ek + ")*",
                        e$ = eM + ek + eq,
                        eU = "(?:" + ["[" + ev + "]", eR, eA].join("|") + ")" + e$,
                        ez = "(?:" + [eN + eP + "?", eP, eR, eA, "[" + eg + "]"].join("|") + ")",
                        eH = RegExp(eE, "g"),
                        eB = RegExp(eP, "g"),
                        eV = RegExp(ex + "(?=" + ex + ")|" + ez + e$, "g"),
                        eK = RegExp([eC + "?" + eS + "+" + eL + "(?=" + [eI, eC, "$"].join("|") + ")", "(?:" + eC + "|" + eO + ")+" + eD + "(?=" + [eI, eC + eT, "$"].join("|") + ")", eC + "?" + eT + "+" + eL, eC + "+" + eD, "\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])", "\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])", "\\d+", eU].join("|"), "g"),
                        eF = RegExp("[" + ej + eg + ey + e_ + "]"),
                        eW = /[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,
                        eG = ["Array", "Buffer", "DataView", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Map", "Math", "Object", "Promise", "RegExp", "Set", "String", "Symbol", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "_", "clearTimeout", "isFinite", "parseInt", "setTimeout"],
                        eQ = -1,
                        eJ = {};
                    eJ[x] = eJ[N] = eJ[R] = eJ[A] = eJ[C] = eJ[j] = eJ[T] = eJ[L] = eJ[D] = !0, eJ[u] = eJ[l] = eJ[S] = eJ[h] = eJ[O] = eJ[f] = eJ[p] = eJ[d] = eJ[y] = eJ[v] = eJ[m] = eJ[_] = eJ[w] = eJ[E] = eJ[P] = !1;
                    var eY = {};
                    eY[u] = eY[l] = eY[S] = eY[O] = eY[h] = eY[f] = eY[x] = eY[N] = eY[R] = eY[A] = eY[C] = eY[y] = eY[v] = eY[m] = eY[_] = eY[w] = eY[E] = eY[I] = eY[j] = eY[T] = eY[L] = eY[D] = !0, eY[p] = eY[d] = eY[P] = !1;
                    var eZ = {
                            "\\": "\\",
                            "'": "'",
                            "\n": "n",
                            "\r": "r",
                            "\u2028": "u2028",
                            "\u2029": "u2029"
                        },
                        eX = parseFloat,
                        e0 = parseInt,
                        e1 = "object" == typeof nb && nb && nb.Object === Object && nb,
                        e5 = "object" == typeof self && self && self.Object === Object && self,
                        e6 = e1 || e5 || Function("return this")(),
                        e2 = t && !t.nodeType && t,
                        e3 = e2 && e && !e.nodeType && e,
                        e9 = e3 && e3.exports === e2,
                        e4 = e9 && e1.process,
                        e8 = function() {
                            try {
                                return e3 && e3.require && e3.require("util").types || e4 && e4.binding && e4.binding("util")
                            } catch {}
                        }(),
                        e7 = e8 && e8.isArrayBuffer,
                        te = e8 && e8.isDate,
                        tt = e8 && e8.isMap,
                        tr = e8 && e8.isRegExp,
                        ti = e8 && e8.isSet,
                        tn = e8 && e8.isTypedArray;

                    function ts(e, t, r) {
                        switch (r.length) {
                            case 0:
                                return e.call(t);
                            case 1:
                                return e.call(t, r[0]);
                            case 2:
                                return e.call(t, r[0], r[1]);
                            case 3:
                                return e.call(t, r[0], r[1], r[2])
                        }
                        return e.apply(t, r)
                    }

                    function to(e, t, r, i) {
                        for (var n = -1, s = null == e ? 0 : e.length; ++n < s;) {
                            var o = e[n];
                            t(i, o, r(o), e)
                        }
                        return i
                    }

                    function ta(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i && !1 !== t(e[r], r, e););
                        return e
                    }

                    function tc(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                            if (!t(e[r], r, e)) return !1;
                        return !0
                    }

                    function tu(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i;) {
                            var o = e[r];
                            t(o, r, e) && (s[n++] = o)
                        }
                        return s
                    }

                    function tl(e, t) {
                        return !!(null == e ? 0 : e.length) && t_(e, t, 0) > -1
                    }

                    function th(e, t, r) {
                        for (var i = -1, n = null == e ? 0 : e.length; ++i < n;)
                            if (r(t, e[i])) return !0;
                        return !1
                    }

                    function tf(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = Array(i); ++r < i;) n[r] = t(e[r], r, e);
                        return n
                    }

                    function tp(e, t) {
                        for (var r = -1, i = t.length, n = e.length; ++r < i;) e[n + r] = t[r];
                        return e
                    }

                    function td(e, t, r, i) {
                        var n = -1,
                            s = null == e ? 0 : e.length;
                        for (i && s && (r = e[++n]); ++n < s;) r = t(r, e[n], n, e);
                        return r
                    }

                    function tg(e, t, r, i) {
                        var n = null == e ? 0 : e.length;
                        for (i && n && (r = e[--n]); n--;) r = t(r, e[n], n, e);
                        return r
                    }

                    function ty(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                            if (t(e[r], r, e)) return !0;
                        return !1
                    }
                    var tv = tP("length");

                    function tm(e, t, r) {
                        var i;
                        return r(e, function(e, r, n) {
                            if (t(e, r, n)) return i = r, !1
                        }), i
                    }

                    function tb(e, t, r, i) {
                        for (var n = e.length, s = r + (i ? 1 : -1); i ? s-- : ++s < n;)
                            if (t(e[s], s, e)) return s;
                        return -1
                    }

                    function t_(e, t, r) {
                        return t == t ? function(e, t, r) {
                            for (var i = r - 1, n = e.length; ++i < n;)
                                if (e[i] === t) return i;
                            return -1
                        }(e, t, r) : tb(e, tE, r)
                    }

                    function tw(e, t, r, i) {
                        for (var n = r - 1, s = e.length; ++n < s;)
                            if (i(e[n], t)) return n;
                        return -1
                    }

                    function tE(e) {
                        return e != e
                    }

                    function tI(e, t) {
                        var r = null == e ? 0 : e.length;
                        return r ? tx(e, t) / r : a
                    }

                    function tP(e) {
                        return function(t) {
                            return null == t ? r : t[e]
                        }
                    }

                    function tS(e) {
                        return function(t) {
                            return null == e ? r : e[t]
                        }
                    }

                    function tO(e, t, r, i, n) {
                        return n(e, function(e, n, s) {
                            r = i ? (i = !1, e) : t(r, e, n, s)
                        }), r
                    }

                    function tx(e, t) {
                        for (var i, n = -1, s = e.length; ++n < s;) {
                            var o = t(e[n]);
                            o !== r && (i = i === r ? o : i + o)
                        }
                        return i
                    }

                    function tN(e, t) {
                        for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
                        return i
                    }

                    function tR(e) {
                        return e && e.slice(0, tK(e) + 1).replace(Y, "")
                    }

                    function tA(e) {
                        return function(t) {
                            return e(t)
                        }
                    }

                    function tC(e, t) {
                        return tf(t, function(t) {
                            return e[t]
                        })
                    }

                    function tj(e, t) {
                        return e.has(t)
                    }

                    function tT(e, t) {
                        for (var r = -1, i = e.length; ++r < i && t_(t, e[r], 0) > -1;);
                        return r
                    }

                    function tL(e, t) {
                        for (var r = e.length; r-- && t_(t, e[r], 0) > -1;);
                        return r
                    }
                    var tD = tS({
                            À: "A",
                            Á: "A",
                            Â: "A",
                            Ã: "A",
                            Ä: "A",
                            Å: "A",
                            à: "a",
                            á: "a",
                            â: "a",
                            ã: "a",
                            ä: "a",
                            å: "a",
                            Ç: "C",
                            ç: "c",
                            Ð: "D",
                            ð: "d",
                            È: "E",
                            É: "E",
                            Ê: "E",
                            Ë: "E",
                            è: "e",
                            é: "e",
                            ê: "e",
                            ë: "e",
                            Ì: "I",
                            Í: "I",
                            Î: "I",
                            Ï: "I",
                            ì: "i",
                            í: "i",
                            î: "i",
                            ï: "i",
                            Ñ: "N",
                            ñ: "n",
                            Ò: "O",
                            Ó: "O",
                            Ô: "O",
                            Õ: "O",
                            Ö: "O",
                            Ø: "O",
                            ò: "o",
                            ó: "o",
                            ô: "o",
                            õ: "o",
                            ö: "o",
                            ø: "o",
                            Ù: "U",
                            Ú: "U",
                            Û: "U",
                            Ü: "U",
                            ù: "u",
                            ú: "u",
                            û: "u",
                            ü: "u",
                            Ý: "Y",
                            ý: "y",
                            ÿ: "y",
                            Æ: "Ae",
                            æ: "ae",
                            Þ: "Th",
                            þ: "th",
                            ß: "ss",
                            Ā: "A",
                            Ă: "A",
                            Ą: "A",
                            ā: "a",
                            ă: "a",
                            ą: "a",
                            Ć: "C",
                            Ĉ: "C",
                            Ċ: "C",
                            Č: "C",
                            ć: "c",
                            ĉ: "c",
                            ċ: "c",
                            č: "c",
                            Ď: "D",
                            Đ: "D",
                            ď: "d",
                            đ: "d",
                            Ē: "E",
                            Ĕ: "E",
                            Ė: "E",
                            Ę: "E",
                            Ě: "E",
                            ē: "e",
                            ĕ: "e",
                            ė: "e",
                            ę: "e",
                            ě: "e",
                            Ĝ: "G",
                            Ğ: "G",
                            Ġ: "G",
                            Ģ: "G",
                            ĝ: "g",
                            ğ: "g",
                            ġ: "g",
                            ģ: "g",
                            Ĥ: "H",
                            Ħ: "H",
                            ĥ: "h",
                            ħ: "h",
                            Ĩ: "I",
                            Ī: "I",
                            Ĭ: "I",
                            Į: "I",
                            İ: "I",
                            ĩ: "i",
                            ī: "i",
                            ĭ: "i",
                            į: "i",
                            ı: "i",
                            Ĵ: "J",
                            ĵ: "j",
                            Ķ: "K",
                            ķ: "k",
                            ĸ: "k",
                            Ĺ: "L",
                            Ļ: "L",
                            Ľ: "L",
                            Ŀ: "L",
                            Ł: "L",
                            ĺ: "l",
                            ļ: "l",
                            ľ: "l",
                            ŀ: "l",
                            ł: "l",
                            Ń: "N",
                            Ņ: "N",
                            Ň: "N",
                            Ŋ: "N",
                            ń: "n",
                            ņ: "n",
                            ň: "n",
                            ŋ: "n",
                            Ō: "O",
                            Ŏ: "O",
                            Ő: "O",
                            ō: "o",
                            ŏ: "o",
                            ő: "o",
                            Ŕ: "R",
                            Ŗ: "R",
                            Ř: "R",
                            ŕ: "r",
                            ŗ: "r",
                            ř: "r",
                            Ś: "S",
                            Ŝ: "S",
                            Ş: "S",
                            Š: "S",
                            ś: "s",
                            ŝ: "s",
                            ş: "s",
                            š: "s",
                            Ţ: "T",
                            Ť: "T",
                            Ŧ: "T",
                            ţ: "t",
                            ť: "t",
                            ŧ: "t",
                            Ũ: "U",
                            Ū: "U",
                            Ŭ: "U",
                            Ů: "U",
                            Ű: "U",
                            Ų: "U",
                            ũ: "u",
                            ū: "u",
                            ŭ: "u",
                            ů: "u",
                            ű: "u",
                            ų: "u",
                            Ŵ: "W",
                            ŵ: "w",
                            Ŷ: "Y",
                            ŷ: "y",
                            Ÿ: "Y",
                            Ź: "Z",
                            Ż: "Z",
                            Ž: "Z",
                            ź: "z",
                            ż: "z",
                            ž: "z",
                            Ĳ: "IJ",
                            ĳ: "ij",
                            Œ: "Oe",
                            œ: "oe",
                            ŉ: "'n",
                            ſ: "s"
                        }),
                        tk = tS({
                            "&": "&amp;",
                            "<": "&lt;",
                            ">": "&gt;",
                            '"': "&quot;",
                            "'": "&#39;"
                        });

                    function tM(e) {
                        return "\\" + eZ[e]
                    }

                    function tq(e) {
                        return eF.test(e)
                    }

                    function t$(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach(function(e, i) {
                            r[++t] = [i, e]
                        }), r
                    }

                    function tU(e, t) {
                        return function(r) {
                            return e(t(r))
                        }
                    }

                    function tz(e, t) {
                        for (var r = -1, i = e.length, n = 0, o = []; ++r < i;) {
                            var a = e[r];
                            (a === t || a === s) && (e[r] = s, o[n++] = r)
                        }
                        return o
                    }

                    function tH(e) {
                        var t = -1,
                            r = Array(e.size);
                        return e.forEach(function(e) {
                            r[++t] = e
                        }), r
                    }

                    function tB(e) {
                        return tq(e) ? function(e) {
                            for (var t = eV.lastIndex = 0; eV.test(e);) ++t;
                            return t
                        }(e) : tv(e)
                    }

                    function tV(e) {
                        return tq(e) ? e.match(eV) || [] : e.split("")
                    }

                    function tK(e) {
                        for (var t = e.length; t-- && Z.test(e.charAt(t)););
                        return t
                    }
                    var tF = tS({
                            "&amp;": "&",
                            "&lt;": "<",
                            "&gt;": ">",
                            "&quot;": '"',
                            "&#39;": "'"
                        }),
                        tW = function e(t) {
                            var Z, eg, ey, ev, em = (t = null == t ? e6 : tW.defaults(e6.Object(), t, tW.pick(e6, eG))).Array,
                                eb = t.Date,
                                e_ = t.Error,
                                ew = t.Function,
                                eE = t.Math,
                                eI = t.Object,
                                eP = t.RegExp,
                                eS = t.String,
                                eO = t.TypeError,
                                ex = em.prototype,
                                eN = ew.prototype,
                                eR = eI.prototype,
                                eA = t["__core-js_shared__"],
                                eC = eN.toString,
                                ej = eR.hasOwnProperty,
                                eT = 0,
                                eL = (Z = /[^.]+$/.exec(eA && eA.keys && eA.keys.IE_PROTO || "")) ? "Symbol(src)_1." + Z : "",
                                eD = eR.toString,
                                ek = eC.call(eI),
                                eM = e6._,
                                eq = eP("^" + eC.call(ej).replace(Q, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                                e$ = e9 ? t.Buffer : r,
                                eU = t.Symbol,
                                ez = t.Uint8Array,
                                eV = e$ ? e$.allocUnsafe : r,
                                eF = tU(eI.getPrototypeOf, eI),
                                eZ = eI.create,
                                e1 = eR.propertyIsEnumerable,
                                e5 = ex.splice,
                                e2 = eU ? eU.isConcatSpreadable : r,
                                e3 = eU ? eU.iterator : r,
                                e4 = eU ? eU.toStringTag : r,
                                e8 = function() {
                                    try {
                                        var e = nd(eI, "defineProperty");
                                        return e({}, "", {}), e
                                    } catch {}
                                }(),
                                tv = t.clearTimeout !== e6.clearTimeout && t.clearTimeout,
                                tS = eb && eb.now !== e6.Date.now && eb.now,
                                tG = t.setTimeout !== e6.setTimeout && t.setTimeout,
                                tQ = eE.ceil,
                                tJ = eE.floor,
                                tY = eI.getOwnPropertySymbols,
                                tZ = e$ ? e$.isBuffer : r,
                                tX = t.isFinite,
                                t0 = ex.join,
                                t1 = tU(eI.keys, eI),
                                t5 = eE.max,
                                t6 = eE.min,
                                t2 = eb.now,
                                t3 = t.parseInt,
                                t9 = eE.random,
                                t4 = ex.reverse,
                                t8 = nd(t, "DataView"),
                                t7 = nd(t, "Map"),
                                re = nd(t, "Promise"),
                                rt = nd(t, "Set"),
                                rr = nd(t, "WeakMap"),
                                ri = nd(eI, "create"),
                                rn = rr && new rr,
                                rs = {},
                                ro = n$(t8),
                                ra = n$(t7),
                                rc = n$(re),
                                ru = n$(rt),
                                rl = n$(rr),
                                rh = eU ? eU.prototype : r,
                                rf = rh ? rh.valueOf : r,
                                rp = rh ? rh.toString : r;

                            function rd(e) {
                                if (sF(e) && !sD(e) && !(e instanceof rm)) {
                                    if (e instanceof rv) return e;
                                    if (ej.call(e, "__wrapped__")) return nU(e)
                                }
                                return new rv(e)
                            }
                            var rg = function() {
                                function e() {}
                                return function(t) {
                                    if (!sK(t)) return {};
                                    if (eZ) return eZ(t);
                                    e.prototype = t;
                                    var i = new e;
                                    return e.prototype = r, i
                                }
                            }();

                            function ry() {}

                            function rv(e, t) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = r
                            }

                            function rm(e) {
                                this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = 4294967295, this.__views__ = []
                            }

                            function rb(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function r_(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rw(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.clear(); ++t < r;) {
                                    var i = e[t];
                                    this.set(i[0], i[1])
                                }
                            }

                            function rE(e) {
                                var t = -1,
                                    r = null == e ? 0 : e.length;
                                for (this.__data__ = new rw; ++t < r;) this.add(e[t])
                            }

                            function rI(e) {
                                var t = this.__data__ = new r_(e);
                                this.size = t.size
                            }

                            function rP(e, t) {
                                var r = sD(e),
                                    i = !r && sL(e),
                                    n = !r && !i && s$(e),
                                    s = !r && !i && !n && s0(e),
                                    o = r || i || n || s,
                                    a = o ? tN(e.length, eS) : [],
                                    c = a.length;
                                for (var u in e)(t || ej.call(e, u)) && !(o && ("length" == u || n && ("offset" == u || "parent" == u) || s && ("buffer" == u || "byteLength" == u || "byteOffset" == u) || nw(u, c))) && a.push(u);
                                return a
                            }

                            function rS(e) {
                                var t = e.length;
                                return t ? e[il(0, t - 1)] : r
                            }

                            function rO(e, t, i) {
                                (i === r || sC(e[t], i)) && (i !== r || t in e) || rC(e, t, i)
                            }

                            function rx(e, t, i) {
                                var n = e[t];
                                ej.call(e, t) && sC(n, i) && (i !== r || t in e) || rC(e, t, i)
                            }

                            function rN(e, t) {
                                for (var r = e.length; r--;)
                                    if (sC(e[r][0], t)) return r;
                                return -1
                            }

                            function rR(e, t, r, i) {
                                return rq(e, function(e, n, s) {
                                    t(i, e, r(e), s)
                                }), i
                            }

                            function rA(e, t) {
                                return e && iB(t, of (t), e)
                            }

                            function rC(e, t, r) {
                                "__proto__" == t && e8 ? e8(e, t, {
                                    configurable: !0,
                                    enumerable: !0,
                                    value: r,
                                    writable: !0
                                }) : e[t] = r
                            }

                            function rj(e, t) {
                                for (var i = -1, n = t.length, s = em(n), o = null == e; ++i < n;) s[i] = o ? r : oa(e, t[i]);
                                return s
                            }

                            function rT(e, t, i) {
                                return e == e && (i !== r && (e = e <= i ? e : i), t !== r && (e = e >= t ? e : t)), e
                            }

                            function rL(e, t, i, n, s, o) {
                                var a, c = 1 & t,
                                    l = 2 & t,
                                    p = 4 & t;
                                if (i && (a = s ? i(e, n, s, o) : i(e)), a !== r) return a;
                                if (!sK(e)) return e;
                                var b = sD(e);
                                if (b) {
                                    if (P = e.length, k = new e.constructor(P), P && "string" == typeof e[0] && ej.call(e, "index") && (k.index = e.index, k.input = e.input), a = k, !c) return iH(e, a)
                                } else {
                                    var P, k, M, q, $, U = nv(e),
                                        z = U == d || U == g;
                                    if (s$(e)) return ik(e, c);
                                    if (U == m || U == u || z && !s) {
                                        if (a = l || z ? {} : nb(e), !c) return l ? (M = ($ = a) && iB(e, op(e), $), iB(e, ny(e), M)) : (q = rA(a, e), iB(e, ng(e), q))
                                    } else {
                                        if (!eY[U]) return s ? e : {};
                                        a = function(e, t, r) {
                                            var i, n, s = e.constructor;
                                            switch (t) {
                                                case S:
                                                    return iM(e);
                                                case h:
                                                case f:
                                                    return new s(+e);
                                                case O:
                                                    return i = r ? iM(e.buffer) : e.buffer, new e.constructor(i, e.byteOffset, e.byteLength);
                                                case x:
                                                case N:
                                                case R:
                                                case A:
                                                case C:
                                                case j:
                                                case T:
                                                case L:
                                                case D:
                                                    return iq(e, r);
                                                case y:
                                                    return new s;
                                                case v:
                                                case E:
                                                    return new s(e);
                                                case _:
                                                    return (n = new e.constructor(e.source, eo.exec(e))).lastIndex = e.lastIndex, n;
                                                case w:
                                                    return new s;
                                                case I:
                                                    return rf ? eI(rf.call(e)) : {}
                                            }
                                        }(e, U, c)
                                    }
                                }
                                o || (o = new rI);
                                var H = o.get(e);
                                if (H) return H;
                                o.set(e, a), sY(e) ? e.forEach(function(r) {
                                    a.add(rL(r, t, i, r, e, o))
                                }) : sW(e) && e.forEach(function(r, n) {
                                    a.set(n, rL(r, t, i, n, e, o))
                                });
                                var B = p ? l ? na : no : l ? op : of ,
                                    V = b ? r : B(e);
                                return ta(V || e, function(r, n) {
                                    V && (r = e[n = r]), rx(a, n, rL(r, t, i, n, e, o))
                                }), a
                            }

                            function rD(e, t, i) {
                                var n = i.length;
                                if (null == e) return !n;
                                for (e = eI(e); n--;) {
                                    var s = i[n],
                                        o = t[s],
                                        a = e[s];
                                    if (a === r && !(s in e) || !o(a)) return !1
                                }
                                return !0
                            }

                            function rk(e, t, n) {
                                if ("function" != typeof e) throw new eO(i);
                                return nj(function() {
                                    e.apply(r, n)
                                }, t)
                            }

                            function rM(e, t, r, i) {
                                var n = -1,
                                    s = tl,
                                    o = !0,
                                    a = e.length,
                                    c = [],
                                    u = t.length;
                                if (!a) return c;
                                r && (t = tf(t, tA(r))), i ? (s = th, o = !1) : t.length >= 200 && (s = tj, o = !1, t = new rE(t));
                                e: for (; ++n < a;) {
                                    var l = e[n],
                                        h = null == r ? l : r(l);
                                    if (l = i || 0 !== l ? l : 0, o && h == h) {
                                        for (var f = u; f--;)
                                            if (t[f] === h) continue e;
                                        c.push(l)
                                    } else s(t, h, i) || c.push(l)
                                }
                                return c
                            }
                            rd.templateSettings = {
                                escape: B,
                                evaluate: V,
                                interpolate: K,
                                variable: "",
                                imports: {
                                    _: rd
                                }
                            }, rd.prototype = ry.prototype, rd.prototype.constructor = rd, rv.prototype = rg(ry.prototype), rv.prototype.constructor = rv, rm.prototype = rg(ry.prototype), rm.prototype.constructor = rm, rb.prototype.clear = function() {
                                this.__data__ = ri ? ri(null) : {}, this.size = 0
                            }, rb.prototype.delete = function(e) {
                                var t = this.has(e) && delete this.__data__[e];
                                return this.size -= t ? 1 : 0, t
                            }, rb.prototype.get = function(e) {
                                var t = this.__data__;
                                if (ri) {
                                    var i = t[e];
                                    return i === n ? r : i
                                }
                                return ej.call(t, e) ? t[e] : r
                            }, rb.prototype.has = function(e) {
                                var t = this.__data__;
                                return ri ? t[e] !== r : ej.call(t, e)
                            }, rb.prototype.set = function(e, t) {
                                var i = this.__data__;
                                return this.size += this.has(e) ? 0 : 1, i[e] = ri && t === r ? n : t, this
                            }, r_.prototype.clear = function() {
                                this.__data__ = [], this.size = 0
                            }, r_.prototype.delete = function(e) {
                                var t = this.__data__,
                                    r = rN(t, e);
                                return !(r < 0) && (r == t.length - 1 ? t.pop() : e5.call(t, r, 1), --this.size, !0)
                            }, r_.prototype.get = function(e) {
                                var t = this.__data__,
                                    i = rN(t, e);
                                return i < 0 ? r : t[i][1]
                            }, r_.prototype.has = function(e) {
                                return rN(this.__data__, e) > -1
                            }, r_.prototype.set = function(e, t) {
                                var r = this.__data__,
                                    i = rN(r, e);
                                return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
                            }, rw.prototype.clear = function() {
                                this.size = 0, this.__data__ = {
                                    hash: new rb,
                                    map: new(t7 || r_),
                                    string: new rb
                                }
                            }, rw.prototype.delete = function(e) {
                                var t = nf(this, e).delete(e);
                                return this.size -= t ? 1 : 0, t
                            }, rw.prototype.get = function(e) {
                                return nf(this, e).get(e)
                            }, rw.prototype.has = function(e) {
                                return nf(this, e).has(e)
                            }, rw.prototype.set = function(e, t) {
                                var r = nf(this, e),
                                    i = r.size;
                                return r.set(e, t), this.size += r.size == i ? 0 : 1, this
                            }, rE.prototype.add = rE.prototype.push = function(e) {
                                return this.__data__.set(e, n), this
                            }, rE.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, rI.prototype.clear = function() {
                                this.__data__ = new r_, this.size = 0
                            }, rI.prototype.delete = function(e) {
                                var t = this.__data__,
                                    r = t.delete(e);
                                return this.size = t.size, r
                            }, rI.prototype.get = function(e) {
                                return this.__data__.get(e)
                            }, rI.prototype.has = function(e) {
                                return this.__data__.has(e)
                            }, rI.prototype.set = function(e, t) {
                                var r = this.__data__;
                                if (r instanceof r_) {
                                    var i = r.__data__;
                                    if (!t7 || i.length < 199) return i.push([e, t]), this.size = ++r.size, this;
                                    r = this.__data__ = new rw(i)
                                }
                                return r.set(e, t), this.size = r.size, this
                            };
                            var rq = iF(rF),
                                r$ = iF(rW, !0);

                            function rU(e, t) {
                                var r = !0;
                                return rq(e, function(e, i, n) {
                                    return r = !!t(e, i, n)
                                }), r
                            }

                            function rz(e, t, i) {
                                for (var n = -1, s = e.length; ++n < s;) {
                                    var o = e[n],
                                        a = t(o);
                                    if (null != a && (c === r ? a == a && !sX(a) : i(a, c))) var c = a,
                                        u = o
                                }
                                return u
                            }

                            function rH(e, t) {
                                var r = [];
                                return rq(e, function(e, i, n) {
                                    t(e, i, n) && r.push(e)
                                }), r
                            }

                            function rB(e, t, r, i, n) {
                                var s = -1,
                                    o = e.length;
                                for (r || (r = n_), n || (n = []); ++s < o;) {
                                    var a = e[s];
                                    t > 0 && r(a) ? t > 1 ? rB(a, t - 1, r, i, n) : tp(n, a) : i || (n[n.length] = a)
                                }
                                return n
                            }
                            var rV = iW(),
                                rK = iW(!0);

                            function rF(e, t) {
                                return e && rV(e, t, of )
                            }

                            function rW(e, t) {
                                return e && rK(e, t, of )
                            }

                            function rG(e, t) {
                                return tu(t, function(t) {
                                    return sH(e[t])
                                })
                            }

                            function rQ(e, t) {
                                t = iT(t, e);
                                for (var i = 0, n = t.length; null != e && i < n;) e = e[nq(t[i++])];
                                return i && i == n ? e : r
                            }

                            function rJ(e, t, r) {
                                var i = t(e);
                                return sD(e) ? i : tp(i, r(e))
                            }

                            function rY(e) {
                                return null == e ? e === r ? "[object Undefined]" : "[object Null]" : e4 && e4 in eI(e) ? function(e) {
                                    var t = ej.call(e, e4),
                                        i = e[e4];
                                    try {
                                        e[e4] = r;
                                        var n = !0
                                    } catch {}
                                    var s = eD.call(e);
                                    return n && (t ? e[e4] = i : delete e[e4]), s
                                }(e) : eD.call(e)
                            }

                            function rZ(e, t) {
                                return e > t
                            }

                            function rX(e, t) {
                                return null != e && ej.call(e, t)
                            }

                            function r0(e, t) {
                                return null != e && t in eI(e)
                            }

                            function r1(e, t, i) {
                                for (var n = i ? th : tl, s = e[0].length, o = e.length, a = o, c = em(o), u = 1 / 0, l = []; a--;) {
                                    var h = e[a];
                                    a && t && (h = tf(h, tA(t))), u = t6(h.length, u), c[a] = !i && (t || s >= 120 && h.length >= 120) ? new rE(a && h) : r
                                }
                                h = e[0];
                                var f = -1,
                                    p = c[0];
                                e: for (; ++f < s && l.length < u;) {
                                    var d = h[f],
                                        g = t ? t(d) : d;
                                    if (d = i || 0 !== d ? d : 0, !(p ? tj(p, g) : n(l, g, i))) {
                                        for (a = o; --a;) {
                                            var y = c[a];
                                            if (!(y ? tj(y, g) : n(e[a], g, i))) continue e
                                        }
                                        p && p.push(g), l.push(d)
                                    }
                                }
                                return l
                            }

                            function r5(e, t, i) {
                                t = iT(t, e);
                                var n = null == (e = nR(e, t)) ? e : e[nq(nY(t))];
                                return null == n ? r : ts(n, e, i)
                            }

                            function r6(e) {
                                return sF(e) && rY(e) == u
                            }

                            function r2(e, t, i, n, s) {
                                return e === t || (null != e && null != t && (sF(e) || sF(t)) ? function(e, t, i, n, s, o) {
                                    var a = sD(e),
                                        c = sD(t),
                                        d = a ? l : nv(e),
                                        g = c ? l : nv(t);
                                    d = d == u ? m : d, g = g == u ? m : g;
                                    var b = d == m,
                                        P = g == m,
                                        x = d == g;
                                    if (x && s$(e)) {
                                        if (!s$(t)) return !1;
                                        a = !0, b = !1
                                    }
                                    if (x && !b) return o || (o = new rI), a || s0(e) ? nn(e, t, i, n, s, o) : function(e, t, r, i, n, s, o) {
                                        switch (r) {
                                            case O:
                                                if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                                e = e.buffer, t = t.buffer;
                                            case S:
                                                return !(e.byteLength != t.byteLength || !s(new ez(e), new ez(t)));
                                            case h:
                                            case f:
                                            case v:
                                                return sC(+e, +t);
                                            case p:
                                                return e.name == t.name && e.message == t.message;
                                            case _:
                                            case E:
                                                return e == t + "";
                                            case y:
                                                var a = t$;
                                            case w:
                                                var c = 1 & i;
                                                if (a || (a = tH), e.size != t.size && !c) break;
                                                var u = o.get(e);
                                                if (u) return u == t;
                                                i |= 2, o.set(e, t);
                                                var l = nn(a(e), a(t), i, n, s, o);
                                                return o.delete(e), l;
                                            case I:
                                                if (rf) return rf.call(e) == rf.call(t)
                                        }
                                        return !1
                                    }(e, t, d, i, n, s, o);
                                    if (!(1 & i)) {
                                        var N = b && ej.call(e, "__wrapped__"),
                                            R = P && ej.call(t, "__wrapped__");
                                        if (N || R) {
                                            var A = N ? e.value() : e,
                                                C = R ? t.value() : t;
                                            return o || (o = new rI), s(A, C, i, n, o)
                                        }
                                    }
                                    return !!x && (o || (o = new rI), function(e, t, i, n, s, o) {
                                        var a = 1 & i,
                                            c = no(e),
                                            u = c.length;
                                        if (u != no(t).length && !a) return !1;
                                        for (var l = u; l--;) {
                                            var h = c[l];
                                            if (!(a ? h in t : ej.call(t, h))) return !1
                                        }
                                        var f = o.get(e),
                                            p = o.get(t);
                                        if (f && p) return f == t && p == e;
                                        var d = !0;
                                        o.set(e, t), o.set(t, e);
                                        for (var g = a; ++l < u;) {
                                            var y = e[h = c[l]],
                                                v = t[h];
                                            if (n) var m = a ? n(v, y, h, t, e, o) : n(y, v, h, e, t, o);
                                            if (!(m === r ? y === v || s(y, v, i, n, o) : m)) {
                                                d = !1;
                                                break
                                            }
                                            g || (g = "constructor" == h)
                                        }
                                        if (d && !g) {
                                            var b = e.constructor,
                                                _ = t.constructor;
                                            b != _ && "constructor" in e && "constructor" in t && !("function" == typeof b && b instanceof b && "function" == typeof _ && _ instanceof _) && (d = !1)
                                        }
                                        return o.delete(e), o.delete(t), d
                                    }(e, t, i, n, s, o))
                                }(e, t, i, n, r2, s) : e != e && t != t)
                            }

                            function r3(e, t, i, n) {
                                var s = i.length,
                                    o = s,
                                    a = !n;
                                if (null == e) return !o;
                                for (e = eI(e); s--;) {
                                    var c = i[s];
                                    if (a && c[2] ? c[1] !== e[c[0]] : !(c[0] in e)) return !1
                                }
                                for (; ++s < o;) {
                                    var u = (c = i[s])[0],
                                        l = e[u],
                                        h = c[1];
                                    if (a && c[2]) {
                                        if (l === r && !(u in e)) return !1
                                    } else {
                                        var f = new rI;
                                        if (n) var p = n(l, h, u, e, t, f);
                                        if (!(p === r ? r2(h, l, 3, n, f) : p)) return !1
                                    }
                                }
                                return !0
                            }

                            function r9(e) {
                                return !(!sK(e) || eL && eL in e) && (sH(e) ? eq : eu).test(n$(e))
                            }

                            function r4(e) {
                                return "function" == typeof e ? e : null == e ? oq : "object" == typeof e ? sD(e) ? ir(e[0], e[1]) : it(e) : oW(e)
                            }

                            function r8(e) {
                                if (!nO(e)) return t1(e);
                                var t = [];
                                for (var r in eI(e)) ej.call(e, r) && "constructor" != r && t.push(r);
                                return t
                            }

                            function r7(e, t) {
                                return e < t
                            }

                            function ie(e, t) {
                                var r = -1,
                                    i = sM(e) ? em(e.length) : [];
                                return rq(e, function(e, n, s) {
                                    i[++r] = t(e, n, s)
                                }), i
                            }

                            function it(e) {
                                var t = np(e);
                                return 1 == t.length && t[0][2] ? nx(t[0][0], t[0][1]) : function(r) {
                                    return r === e || r3(r, e, t)
                                }
                            }

                            function ir(e, t) {
                                var i;
                                return nI(e) && (i = t) == i && !sK(i) ? nx(nq(e), t) : function(i) {
                                    var n = oa(i, e);
                                    return n === r && n === t ? oc(i, e) : r2(t, n, 3)
                                }
                            }

                            function ii(e, t, i, n, s) {
                                e !== t && rV(t, function(o, a) {
                                    if (s || (s = new rI), sK(o)) ! function(e, t, i, n, s, o, a) {
                                        var c = nA(e, i),
                                            u = nA(t, i),
                                            l = a.get(u);
                                        if (l) {
                                            rO(e, i, l);
                                            return
                                        }
                                        var h = o ? o(c, u, i + "", e, t, a) : r,
                                            f = h === r;
                                        if (f) {
                                            var p = sD(u),
                                                d = !p && s$(u),
                                                g = !p && !d && s0(u);
                                            h = u, p || d || g ? sD(c) ? h = c : sq(c) ? h = iH(c) : d ? (f = !1, h = ik(u, !0)) : g ? (f = !1, h = iq(u, !0)) : h = [] : sQ(u) || sL(u) ? (h = c, sL(c) ? h = s8(c) : (!sK(c) || sH(c)) && (h = nb(u))) : f = !1
                                        }
                                        f && (a.set(u, h), s(h, u, n, o, a), a.delete(u)), rO(e, i, h)
                                    }(e, t, a, i, ii, n, s);
                                    else {
                                        var c = n ? n(nA(e, a), o, a + "", e, t, s) : r;
                                        c === r && (c = o), rO(e, a, c)
                                    }
                                }, op)
                            }

                            function is(e, t) {
                                var i = e.length;
                                if (i) return nw(t += t < 0 ? i : 0, i) ? e[t] : r
                            }

                            function io(e, t, r) {
                                t = t.length ? tf(t, function(e) {
                                    return sD(e) ? function(t) {
                                        return rQ(t, 1 === e.length ? e[0] : e)
                                    } : e
                                }) : [oq];
                                var i = -1;
                                return t = tf(t, tA(nh())),
                                    function(e, t) {
                                        var r = e.length;
                                        for (e.sort(t); r--;) e[r] = e[r].value;
                                        return e
                                    }(ie(e, function(e, r, n) {
                                        return {
                                            criteria: tf(t, function(t) {
                                                return t(e)
                                            }),
                                            index: ++i,
                                            value: e
                                        }
                                    }), function(e, t) {
                                        return function(e, t, r) {
                                            for (var i = -1, n = e.criteria, s = t.criteria, o = n.length, a = r.length; ++i < o;) {
                                                var c = i$(n[i], s[i]);
                                                if (c) {
                                                    if (i >= a) return c;
                                                    return c * ("desc" == r[i] ? -1 : 1)
                                                }
                                            }
                                            return e.index - t.index
                                        }(e, t, r)
                                    })
                            }

                            function ia(e, t, r) {
                                for (var i = -1, n = t.length, s = {}; ++i < n;) {
                                    var o = t[i],
                                        a = rQ(e, o);
                                    r(a, o) && id(s, iT(o, e), a)
                                }
                                return s
                            }

                            function ic(e, t, r, i) {
                                var n = i ? tw : t_,
                                    s = -1,
                                    o = t.length,
                                    a = e;
                                for (e === t && (t = iH(t)), r && (a = tf(e, tA(r))); ++s < o;)
                                    for (var c = 0, u = t[s], l = r ? r(u) : u;
                                        (c = n(a, l, c, i)) > -1;) a !== e && e5.call(a, c, 1), e5.call(e, c, 1);
                                return e
                            }

                            function iu(e, t) {
                                for (var r = e ? t.length : 0, i = r - 1; r--;) {
                                    var n = t[r];
                                    if (r == i || n !== s) {
                                        var s = n;
                                        nw(n) ? e5.call(e, n, 1) : iS(e, n)
                                    }
                                }
                                return e
                            }

                            function il(e, t) {
                                return e + tJ(t9() * (t - e + 1))
                            }

                            function ih(e, t) {
                                var r = "";
                                if (!e || t < 1 || t > 9007199254740991) return r;
                                do t % 2 && (r += e), (t = tJ(t / 2)) && (e += e); while (t);
                                return r
                            }

                            function ip(e, t) {
                                return nT(nN(e, t, oq), e + "")
                            }

                            function id(e, t, i, n) {
                                if (!sK(e)) return e;
                                t = iT(t, e);
                                for (var s = -1, o = t.length, a = o - 1, c = e; null != c && ++s < o;) {
                                    var u = nq(t[s]),
                                        l = i;
                                    if ("__proto__" === u || "constructor" === u || "prototype" === u) break;
                                    if (s != a) {
                                        var h = c[u];
                                        (l = n ? n(h, u, c) : r) === r && (l = sK(h) ? h : nw(t[s + 1]) ? [] : {})
                                    }
                                    rx(c, u, l), c = c[u]
                                }
                                return e
                            }
                            var ig = rn ? function(e, t) {
                                    return rn.set(e, t), e
                                } : oq,
                                iy = e8 ? function(e, t) {
                                    return e8(e, "toString", {
                                        configurable: !0,
                                        enumerable: !1,
                                        value: oD(t),
                                        writable: !0
                                    })
                                } : oq;

                            function iv(e, t, r) {
                                var i = -1,
                                    n = e.length;
                                t < 0 && (t = -t > n ? 0 : n + t), (r = r > n ? n : r) < 0 && (r += n), n = t > r ? 0 : r - t >>> 0, t >>>= 0;
                                for (var s = em(n); ++i < n;) s[i] = e[i + t];
                                return s
                            }

                            function im(e, t) {
                                var r;
                                return rq(e, function(e, i, n) {
                                    return !(r = t(e, i, n))
                                }), !!r
                            }

                            function ib(e, t, r) {
                                var i = 0,
                                    n = null == e ? i : e.length;
                                if ("number" == typeof t && t == t && n <= 2147483647) {
                                    for (; i < n;) {
                                        var s = i + n >>> 1,
                                            o = e[s];
                                        null !== o && !sX(o) && (r ? o <= t : o < t) ? i = s + 1 : n = s
                                    }
                                    return n
                                }
                                return i_(e, t, oq, r)
                            }

                            function i_(e, t, i, n) {
                                var s = 0,
                                    o = null == e ? 0 : e.length;
                                if (0 === o) return 0;
                                t = i(t);
                                for (var a = t != t, c = null === t, u = sX(t), l = t === r; s < o;) {
                                    var h = tJ((s + o) / 2),
                                        f = i(e[h]),
                                        p = f !== r,
                                        d = null === f,
                                        g = f == f,
                                        y = sX(f);
                                    if (a) var v = n || g;
                                    else v = l ? g && (n || p) : c ? g && p && (n || !d) : u ? g && p && !d && (n || !y) : !d && !y && (n ? f <= t : f < t);
                                    v ? s = h + 1 : o = h
                                }
                                return t6(o, 4294967294)
                            }

                            function iw(e, t) {
                                for (var r = -1, i = e.length, n = 0, s = []; ++r < i;) {
                                    var o = e[r],
                                        a = t ? t(o) : o;
                                    if (!r || !sC(a, c)) {
                                        var c = a;
                                        s[n++] = 0 === o ? 0 : o
                                    }
                                }
                                return s
                            }

                            function iE(e) {
                                return "number" == typeof e ? e : sX(e) ? a : +e
                            }

                            function iI(e) {
                                if ("string" == typeof e) return e;
                                if (sD(e)) return tf(e, iI) + "";
                                if (sX(e)) return rp ? rp.call(e) : "";
                                var t = e + "";
                                return "0" == t && 1 / e == -o ? "-0" : t
                            }

                            function iP(e, t, r) {
                                var i = -1,
                                    n = tl,
                                    s = e.length,
                                    o = !0,
                                    a = [],
                                    c = a;
                                if (r) o = !1, n = th;
                                else if (s >= 200) {
                                    var u = t ? null : i8(e);
                                    if (u) return tH(u);
                                    o = !1, n = tj, c = new rE
                                } else c = t ? [] : a;
                                e: for (; ++i < s;) {
                                    var l = e[i],
                                        h = t ? t(l) : l;
                                    if (l = r || 0 !== l ? l : 0, o && h == h) {
                                        for (var f = c.length; f--;)
                                            if (c[f] === h) continue e;
                                        t && c.push(h), a.push(l)
                                    } else n(c, h, r) || (c !== a && c.push(h), a.push(l))
                                }
                                return a
                            }

                            function iS(e, t) {
                                return t = iT(t, e), null == (e = nR(e, t)) || delete e[nq(nY(t))]
                            }

                            function iO(e, t, r, i) {
                                return id(e, t, r(rQ(e, t)), i)
                            }

                            function ix(e, t, r, i) {
                                for (var n = e.length, s = i ? n : -1;
                                    (i ? s-- : ++s < n) && t(e[s], s, e););
                                return r ? iv(e, i ? 0 : s, i ? s + 1 : n) : iv(e, i ? s + 1 : 0, i ? n : s)
                            }

                            function iN(e, t) {
                                var r = e;
                                return r instanceof rm && (r = r.value()), td(t, function(e, t) {
                                    return t.func.apply(t.thisArg, tp([e], t.args))
                                }, r)
                            }

                            function iR(e, t, r) {
                                var i = e.length;
                                if (i < 2) return i ? iP(e[0]) : [];
                                for (var n = -1, s = em(i); ++n < i;)
                                    for (var o = e[n], a = -1; ++a < i;) a != n && (s[n] = rM(s[n] || o, e[a], t, r));
                                return iP(rB(s, 1), t, r)
                            }

                            function iA(e, t, i) {
                                for (var n = -1, s = e.length, o = t.length, a = {}; ++n < s;) {
                                    var c = n < o ? t[n] : r;
                                    i(a, e[n], c)
                                }
                                return a
                            }

                            function iC(e) {
                                return sq(e) ? e : []
                            }

                            function ij(e) {
                                return "function" == typeof e ? e : oq
                            }

                            function iT(e, t) {
                                return sD(e) ? e : nI(e, t) ? [e] : nM(s7(e))
                            }

                            function iL(e, t, i) {
                                var n = e.length;
                                return i = i === r ? n : i, !t && i >= n ? e : iv(e, t, i)
                            }
                            var iD = tv || function(e) {
                                return e6.clearTimeout(e)
                            };

                            function ik(e, t) {
                                if (t) return e.slice();
                                var r = e.length,
                                    i = eV ? eV(r) : new e.constructor(r);
                                return e.copy(i), i
                            }

                            function iM(e) {
                                var t = new e.constructor(e.byteLength);
                                return new ez(t).set(new ez(e)), t
                            }

                            function iq(e, t) {
                                var r = t ? iM(e.buffer) : e.buffer;
                                return new e.constructor(r, e.byteOffset, e.length)
                            }

                            function i$(e, t) {
                                if (e !== t) {
                                    var i = e !== r,
                                        n = null === e,
                                        s = e == e,
                                        o = sX(e),
                                        a = t !== r,
                                        c = null === t,
                                        u = t == t,
                                        l = sX(t);
                                    if (!c && !l && !o && e > t || o && a && u && !c && !l || n && a && u || !i && u || !s) return 1;
                                    if (!n && !o && !l && e < t || l && i && s && !n && !o || c && i && s || !a && s || !u) return -1
                                }
                                return 0
                            }

                            function iU(e, t, r, i) {
                                for (var n = -1, s = e.length, o = r.length, a = -1, c = t.length, u = t5(s - o, 0), l = em(c + u), h = !i; ++a < c;) l[a] = t[a];
                                for (; ++n < o;)(h || n < s) && (l[r[n]] = e[n]);
                                for (; u--;) l[a++] = e[n++];
                                return l
                            }

                            function iz(e, t, r, i) {
                                for (var n = -1, s = e.length, o = -1, a = r.length, c = -1, u = t.length, l = t5(s - a, 0), h = em(l + u), f = !i; ++n < l;) h[n] = e[n];
                                for (var p = n; ++c < u;) h[p + c] = t[c];
                                for (; ++o < a;)(f || n < s) && (h[p + r[o]] = e[n++]);
                                return h
                            }

                            function iH(e, t) {
                                var r = -1,
                                    i = e.length;
                                for (t || (t = em(i)); ++r < i;) t[r] = e[r];
                                return t
                            }

                            function iB(e, t, i, n) {
                                var s = !i;
                                i || (i = {});
                                for (var o = -1, a = t.length; ++o < a;) {
                                    var c = t[o],
                                        u = n ? n(i[c], e[c], c, i, e) : r;
                                    u === r && (u = e[c]), s ? rC(i, c, u) : rx(i, c, u)
                                }
                                return i
                            }

                            function iV(e, t) {
                                return function(r, i) {
                                    var n = sD(r) ? to : rR,
                                        s = t ? t() : {};
                                    return n(r, e, nh(i, 2), s)
                                }
                            }

                            function iK(e) {
                                return ip(function(t, i) {
                                    var n = -1,
                                        s = i.length,
                                        o = s > 1 ? i[s - 1] : r,
                                        a = s > 2 ? i[2] : r;
                                    for (o = e.length > 3 && "function" == typeof o ? (s--, o) : r, a && nE(i[0], i[1], a) && (o = s < 3 ? r : o, s = 1), t = eI(t); ++n < s;) {
                                        var c = i[n];
                                        c && e(t, c, n, o)
                                    }
                                    return t
                                })
                            }

                            function iF(e, t) {
                                return function(r, i) {
                                    if (null == r) return r;
                                    if (!sM(r)) return e(r, i);
                                    for (var n = r.length, s = t ? n : -1, o = eI(r);
                                        (t ? s-- : ++s < n) && !1 !== i(o[s], s, o););
                                    return r
                                }
                            }

                            function iW(e) {
                                return function(t, r, i) {
                                    for (var n = -1, s = eI(t), o = i(t), a = o.length; a--;) {
                                        var c = o[e ? a : ++n];
                                        if (!1 === r(s[c], c, s)) break
                                    }
                                    return t
                                }
                            }

                            function iG(e) {
                                return function(t) {
                                    var i = tq(t = s7(t)) ? tV(t) : r,
                                        n = i ? i[0] : t.charAt(0),
                                        s = i ? iL(i, 1).join("") : t.slice(1);
                                    return n[e]() + s
                                }
                            }

                            function iQ(e) {
                                return function(t) {
                                    return td(oj(oP(t).replace(eH, "")), e, "")
                                }
                            }

                            function iJ(e) {
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return new e;
                                        case 1:
                                            return new e(t[0]);
                                        case 2:
                                            return new e(t[0], t[1]);
                                        case 3:
                                            return new e(t[0], t[1], t[2]);
                                        case 4:
                                            return new e(t[0], t[1], t[2], t[3]);
                                        case 5:
                                            return new e(t[0], t[1], t[2], t[3], t[4]);
                                        case 6:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5]);
                                        case 7:
                                            return new e(t[0], t[1], t[2], t[3], t[4], t[5], t[6])
                                    }
                                    var r = rg(e.prototype),
                                        i = e.apply(r, t);
                                    return sK(i) ? i : r
                                }
                            }

                            function iY(e) {
                                return function(t, i, n) {
                                    var s = eI(t);
                                    if (!sM(t)) {
                                        var o = nh(i, 3);
                                        t = of (t), i = function(e) {
                                            return o(s[e], e, s)
                                        }
                                    }
                                    var a = e(t, i, n);
                                    return a > -1 ? s[o ? t[a] : a] : r
                                }
                            }

                            function iZ(e) {
                                return ns(function(t) {
                                    var n = t.length,
                                        s = n,
                                        o = rv.prototype.thru;
                                    for (e && t.reverse(); s--;) {
                                        var a = t[s];
                                        if ("function" != typeof a) throw new eO(i);
                                        if (o && !c && "wrapper" == nu(a)) var c = new rv([], !0)
                                    }
                                    for (s = c ? s : n; ++s < n;) {
                                        var u = nu(a = t[s]),
                                            l = "wrapper" == u ? nc(a) : r;
                                        c = l && nP(l[0]) && 424 == l[1] && !l[4].length && 1 == l[9] ? c[nu(l[0])].apply(c, l[3]) : 1 == a.length && nP(a) ? c[u]() : c.thru(a)
                                    }
                                    return function() {
                                        var e = arguments,
                                            r = e[0];
                                        if (c && 1 == e.length && sD(r)) return c.plant(r).value();
                                        for (var i = 0, s = n ? t[i].apply(this, e) : r; ++i < n;) s = t[i].call(this, s);
                                        return s
                                    }
                                })
                            }

                            function iX(e, t, i, n, s, o, a, c, u, l) {
                                var h = 128 & t,
                                    f = 1 & t,
                                    p = 2 & t,
                                    d = 24 & t,
                                    g = 512 & t,
                                    y = p ? r : iJ(e);
                                return function v() {
                                    for (var m = arguments.length, b = em(m), _ = m; _--;) b[_] = arguments[_];
                                    if (d) var w = nl(v),
                                        E = function(e, t) {
                                            for (var r = e.length, i = 0; r--;) e[r] === t && ++i;
                                            return i
                                        }(b, w);
                                    if (n && (b = iU(b, n, s, d)), o && (b = iz(b, o, a, d)), m -= E, d && m < l) {
                                        var I = tz(b, w);
                                        return i9(e, t, iX, v.placeholder, i, b, I, c, u, l - m)
                                    }
                                    var P = f ? i : this,
                                        S = p ? P[e] : e;
                                    return m = b.length, c ? b = function(e, t) {
                                        for (var i = e.length, n = t6(t.length, i), s = iH(e); n--;) {
                                            var o = t[n];
                                            e[n] = nw(o, i) ? s[o] : r
                                        }
                                        return e
                                    }(b, c) : g && m > 1 && b.reverse(), h && u < m && (b.length = u), this && this !== e6 && this instanceof v && (S = y || iJ(S)), S.apply(P, b)
                                }
                            }

                            function i0(e, t) {
                                return function(r, i) {
                                    var n, s;
                                    return n = t(i), s = {}, rF(r, function(t, r, i) {
                                        e(s, n(t), r, i)
                                    }), s
                                }
                            }

                            function i1(e, t) {
                                return function(i, n) {
                                    var s;
                                    if (i === r && n === r) return t;
                                    if (i !== r && (s = i), n !== r) {
                                        if (s === r) return n;
                                        "string" == typeof i || "string" == typeof n ? (i = iI(i), n = iI(n)) : (i = iE(i), n = iE(n)), s = e(i, n)
                                    }
                                    return s
                                }
                            }

                            function i5(e) {
                                return ns(function(t) {
                                    return t = tf(t, tA(nh())), ip(function(r) {
                                        var i = this;
                                        return e(t, function(e) {
                                            return ts(e, i, r)
                                        })
                                    })
                                })
                            }

                            function i6(e, t) {
                                var i = (t = t === r ? " " : iI(t)).length;
                                if (i < 2) return i ? ih(t, e) : t;
                                var n = ih(t, tQ(e / tB(t)));
                                return tq(t) ? iL(tV(n), 0, e).join("") : n.slice(0, e)
                            }

                            function i2(e) {
                                return function(t, i, n) {
                                    return n && "number" != typeof n && nE(t, i, n) && (i = n = r), t = s2(t), i === r ? (i = t, t = 0) : i = s2(i), n = n === r ? t < i ? 1 : -1 : s2(n),
                                        function(e, t, r, i) {
                                            for (var n = -1, s = t5(tQ((t - e) / (r || 1)), 0), o = em(s); s--;) o[i ? s : ++n] = e, e += r;
                                            return o
                                        }(t, i, n, e)
                                }
                            }

                            function i3(e) {
                                return function(t, r) {
                                    return "string" == typeof t && "string" == typeof r || (t = s4(t), r = s4(r)), e(t, r)
                                }
                            }

                            function i9(e, t, i, n, s, o, a, c, u, l) {
                                var h = 8 & t,
                                    f = h ? a : r,
                                    p = h ? r : a,
                                    d = h ? o : r,
                                    g = h ? r : o;
                                t |= h ? 32 : 64, 4 & (t &= ~(h ? 64 : 32)) || (t &= -4);
                                var y = [e, t, s, d, f, g, p, c, u, l],
                                    v = i.apply(r, y);
                                return nP(e) && nC(v, y), v.placeholder = n, nL(v, e, t)
                            }

                            function i4(e) {
                                var t = eE[e];
                                return function(e, r) {
                                    if (e = s4(e), (r = null == r ? 0 : t6(s3(r), 292)) && tX(e)) {
                                        var i = (s7(e) + "e").split("e");
                                        return +((i = (s7(t(i[0] + "e" + (+i[1] + r))) + "e").split("e"))[0] + "e" + (+i[1] - r))
                                    }
                                    return t(e)
                                }
                            }
                            var i8 = rt && 1 / tH(new rt([, -0]))[1] == o ? function(e) {
                                return new rt(e)
                            } : oB;

                            function i7(e) {
                                return function(t) {
                                    var r, i, n = nv(t);
                                    return n == y ? t$(t) : n == w ? (r = -1, i = Array(t.size), t.forEach(function(e) {
                                        i[++r] = [e, e]
                                    }), i) : tf(e(t), function(e) {
                                        return [e, t[e]]
                                    })
                                }
                            }

                            function ne(e, t, n, o, a, c, u, l) {
                                var h = 2 & t;
                                if (!h && "function" != typeof e) throw new eO(i);
                                var f = o ? o.length : 0;
                                if (f || (t &= -97, o = a = r), u = u === r ? u : t5(s3(u), 0), l = l === r ? l : s3(l), f -= a ? a.length : 0, 64 & t) {
                                    var p = o,
                                        d = a;
                                    o = a = r
                                }
                                var g = h ? r : nc(e),
                                    y = [e, t, n, o, a, p, d, c, u, l];
                                if (g && function(e, t) {
                                        var r = e[1],
                                            i = t[1],
                                            n = r | i,
                                            o = n < 131,
                                            a = 128 == i && 8 == r || 128 == i && 256 == r && e[7].length <= t[8] || 384 == i && t[7].length <= t[8] && 8 == r;
                                        if (o || a) {
                                            1 & i && (e[2] = t[2], n |= 1 & r ? 0 : 4);
                                            var c = t[3];
                                            if (c) {
                                                var u = e[3];
                                                e[3] = u ? iU(u, c, t[4]) : c, e[4] = u ? tz(e[3], s) : t[4]
                                            }(c = t[5]) && (u = e[5], e[5] = u ? iz(u, c, t[6]) : c, e[6] = u ? tz(e[5], s) : t[6]), (c = t[7]) && (e[7] = c), 128 & i && (e[8] = null == e[8] ? t[8] : t6(e[8], t[8])), null == e[9] && (e[9] = t[9]), e[0] = t[0], e[1] = n
                                        }
                                    }(y, g), e = y[0], t = y[1], n = y[2], o = y[3], a = y[4], (l = y[9] = y[9] === r ? h ? 0 : e.length : t5(y[9] - f, 0)) || !(24 & t) || (t &= -25), t && 1 != t) 8 == t || 16 == t ? (v = e, m = t, b = l, _ = iJ(v), j = function e() {
                                    for (var t = arguments.length, i = em(t), n = t, s = nl(e); n--;) i[n] = arguments[n];
                                    var o = t < 3 && i[0] !== s && i[t - 1] !== s ? [] : tz(i, s);
                                    return (t -= o.length) < b ? i9(v, m, iX, e.placeholder, r, i, o, r, r, b - t) : ts(this && this !== e6 && this instanceof e ? _ : v, this, i)
                                }) : 32 != t && 33 != t || a.length ? j = iX.apply(r, y) : (w = e, E = t, I = n, P = o, S = 1 & E, O = iJ(w), j = function e() {
                                    for (var t = -1, r = arguments.length, i = -1, n = P.length, s = em(n + r), o = this && this !== e6 && this instanceof e ? O : w; ++i < n;) s[i] = P[i];
                                    for (; r--;) s[i++] = arguments[++t];
                                    return ts(o, S ? I : this, s)
                                });
                                else var v, m, b, _, w, E, I, P, S, O, x, N, R, A, C, j = (x = e, N = t, R = n, A = 1 & N, C = iJ(x), function e() {
                                    return (this && this !== e6 && this instanceof e ? C : x).apply(A ? R : this, arguments)
                                });
                                return nL((g ? ig : nC)(j, y), e, t)
                            }

                            function nt(e, t, i, n) {
                                return e === r || sC(e, eR[i]) && !ej.call(n, i) ? t : e
                            }

                            function nr(e, t, i, n, s, o) {
                                return sK(e) && sK(t) && (o.set(t, e), ii(e, t, r, nr, o), o.delete(t)), e
                            }

                            function ni(e) {
                                return sQ(e) ? r : e
                            }

                            function nn(e, t, i, n, s, o) {
                                var a = 1 & i,
                                    c = e.length,
                                    u = t.length;
                                if (c != u && !(a && u > c)) return !1;
                                var l = o.get(e),
                                    h = o.get(t);
                                if (l && h) return l == t && h == e;
                                var f = -1,
                                    p = !0,
                                    d = 2 & i ? new rE : r;
                                for (o.set(e, t), o.set(t, e); ++f < c;) {
                                    var g = e[f],
                                        y = t[f];
                                    if (n) var v = a ? n(y, g, f, t, e, o) : n(g, y, f, e, t, o);
                                    if (v !== r) {
                                        if (v) continue;
                                        p = !1;
                                        break
                                    }
                                    if (d) {
                                        if (!ty(t, function(e, t) {
                                                if (!tj(d, t) && (g === e || s(g, e, i, n, o))) return d.push(t)
                                            })) {
                                            p = !1;
                                            break
                                        }
                                    } else if (!(g === y || s(g, y, i, n, o))) {
                                        p = !1;
                                        break
                                    }
                                }
                                return o.delete(e), o.delete(t), p
                            }

                            function ns(e) {
                                return nT(nN(e, r, nF), e + "")
                            }

                            function no(e) {
                                return rJ(e, of , ng)
                            }

                            function na(e) {
                                return rJ(e, op, ny)
                            }
                            var nc = rn ? function(e) {
                                return rn.get(e)
                            } : oB;

                            function nu(e) {
                                for (var t = e.name + "", r = rs[t], i = ej.call(rs, t) ? r.length : 0; i--;) {
                                    var n = r[i],
                                        s = n.func;
                                    if (null == s || s == e) return n.name
                                }
                                return t
                            }

                            function nl(e) {
                                return (ej.call(rd, "placeholder") ? rd : e).placeholder
                            }

                            function nh() {
                                var e = rd.iteratee || o$;
                                return e = e === o$ ? r4 : e, arguments.length ? e(arguments[0], arguments[1]) : e
                            }

                            function nf(e, t) {
                                var r, i = e.__data__;
                                return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
                            }

                            function np(e) {
                                for (var t = of (e), r = t.length; r--;) {
                                    var i = t[r],
                                        n = e[i];
                                    t[r] = [i, n, n == n && !sK(n)]
                                }
                                return t
                            }

                            function nd(e, t) {
                                var i = null == e ? r : e[t];
                                return r9(i) ? i : r
                            }
                            var ng = tY ? function(e) {
                                    return null == e ? [] : tu(tY(e = eI(e)), function(t) {
                                        return e1.call(e, t)
                                    })
                                } : oJ,
                                ny = tY ? function(e) {
                                    for (var t = []; e;) tp(t, ng(e)), e = eF(e);
                                    return t
                                } : oJ,
                                nv = rY;

                            function nm(e, t, r) {
                                t = iT(t, e);
                                for (var i = -1, n = t.length, s = !1; ++i < n;) {
                                    var o = nq(t[i]);
                                    if (!(s = null != e && r(e, o))) break;
                                    e = e[o]
                                }
                                return s || ++i != n ? s : !!(n = null == e ? 0 : e.length) && sV(n) && nw(o, n) && (sD(e) || sL(e))
                            }

                            function nb(e) {
                                return "function" != typeof e.constructor || nO(e) ? {} : rg(eF(e))
                            }

                            function n_(e) {
                                return sD(e) || sL(e) || !!(e2 && e && e[e2])
                            }

                            function nw(e, t) {
                                var r = typeof e;
                                return !!(t = t ? ? 9007199254740991) && ("number" == r || "symbol" != r && eh.test(e)) && e > -1 && e % 1 == 0 && e < t
                            }

                            function nE(e, t, r) {
                                if (!sK(r)) return !1;
                                var i = typeof t;
                                return ("number" == i ? !!(sM(r) && nw(t, r.length)) : "string" == i && t in r) && sC(r[t], e)
                            }

                            function nI(e, t) {
                                if (sD(e)) return !1;
                                var r = typeof e;
                                return !!("number" == r || "symbol" == r || "boolean" == r || null == e || sX(e)) || W.test(e) || !F.test(e) || null != t && e in eI(t)
                            }

                            function nP(e) {
                                var t = nu(e),
                                    r = rd[t];
                                if ("function" != typeof r || !(t in rm.prototype)) return !1;
                                if (e === r) return !0;
                                var i = nc(r);
                                return !!i && e === i[0]
                            }(t8 && nv(new t8(new ArrayBuffer(1))) != O || t7 && nv(new t7) != y || re && nv(re.resolve()) != b || rt && nv(new rt) != w || rr && nv(new rr) != P) && (nv = function(e) {
                                var t = rY(e),
                                    i = t == m ? e.constructor : r,
                                    n = i ? n$(i) : "";
                                if (n) switch (n) {
                                    case ro:
                                        return O;
                                    case ra:
                                        return y;
                                    case rc:
                                        return b;
                                    case ru:
                                        return w;
                                    case rl:
                                        return P
                                }
                                return t
                            });
                            var nS = eA ? sH : oY;

                            function nO(e) {
                                var t = e && e.constructor;
                                return e === ("function" == typeof t && t.prototype || eR)
                            }

                            function nx(e, t) {
                                return function(i) {
                                    return null != i && i[e] === t && (t !== r || e in eI(i))
                                }
                            }

                            function nN(e, t, i) {
                                return t = t5(t === r ? e.length - 1 : t, 0),
                                    function() {
                                        for (var r = arguments, n = -1, s = t5(r.length - t, 0), o = em(s); ++n < s;) o[n] = r[t + n];
                                        n = -1;
                                        for (var a = em(t + 1); ++n < t;) a[n] = r[n];
                                        return a[t] = i(o), ts(e, this, a)
                                    }
                            }

                            function nR(e, t) {
                                return t.length < 2 ? e : rQ(e, iv(t, 0, -1))
                            }

                            function nA(e, t) {
                                if (!("constructor" === t && "function" == typeof e[t]) && "__proto__" != t) return e[t]
                            }
                            var nC = nD(ig),
                                nj = tG || function(e, t) {
                                    return e6.setTimeout(e, t)
                                },
                                nT = nD(iy);

                            function nL(e, t, r) {
                                var i, n, s = t + "";
                                return nT(e, function(e, t) {
                                    var r = t.length;
                                    if (!r) return e;
                                    var i = r - 1;
                                    return t[i] = (r > 1 ? "& " : "") + t[i], t = t.join(r > 2 ? ", " : " "), e.replace(X, `{
/* [wrapped with ` + t + `] */
`)
                                }(s, (i = (n = s.match(ee)) ? n[1].split(et) : [], ta(c, function(e) {
                                    var t = "_." + e[0];
                                    r & e[1] && !tl(i, t) && i.push(t)
                                }), i.sort())))
                            }

                            function nD(e) {
                                var t = 0,
                                    i = 0;
                                return function() {
                                    var n = t2(),
                                        s = 16 - (n - i);
                                    if (i = n, s > 0) {
                                        if (++t >= 800) return arguments[0]
                                    } else t = 0;
                                    return e.apply(r, arguments)
                                }
                            }

                            function nk(e, t) {
                                var i = -1,
                                    n = e.length,
                                    s = n - 1;
                                for (t = t === r ? n : t; ++i < t;) {
                                    var o = il(i, s),
                                        a = e[o];
                                    e[o] = e[i], e[i] = a
                                }
                                return e.length = t, e
                            }
                            var nM = (ey = (eg = sS(function(e) {
                                var t = [];
                                return 46 === e.charCodeAt(0) && t.push(""), e.replace(G, function(e, r, i, n) {
                                    t.push(i ? n.replace(en, "$1") : r || e)
                                }), t
                            }, function(e) {
                                return 500 === ey.size && ey.clear(), e
                            })).cache, eg);

                            function nq(e) {
                                if ("string" == typeof e || sX(e)) return e;
                                var t = e + "";
                                return "0" == t && 1 / e == -o ? "-0" : t
                            }

                            function n$(e) {
                                if (null != e) {
                                    try {
                                        return eC.call(e)
                                    } catch {}
                                    try {
                                        return e + ""
                                    } catch {}
                                }
                                return ""
                            }

                            function nU(e) {
                                if (e instanceof rm) return e.clone();
                                var t = new rv(e.__wrapped__, e.__chain__);
                                return t.__actions__ = iH(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
                            }
                            var nz = ip(function(e, t) {
                                    return sq(e) ? rM(e, rB(t, 1, sq, !0)) : []
                                }),
                                nH = ip(function(e, t) {
                                    var i = nY(t);
                                    return sq(i) && (i = r), sq(e) ? rM(e, rB(t, 1, sq, !0), nh(i, 2)) : []
                                }),
                                nB = ip(function(e, t) {
                                    var i = nY(t);
                                    return sq(i) && (i = r), sq(e) ? rM(e, rB(t, 1, sq, !0), r, i) : []
                                });

                            function nV(e, t, r) {
                                var i = null == e ? 0 : e.length;
                                if (!i) return -1;
                                var n = null == r ? 0 : s3(r);
                                return n < 0 && (n = t5(i + n, 0)), tb(e, nh(t, 3), n)
                            }

                            function nK(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                if (!n) return -1;
                                var s = n - 1;
                                return i !== r && (s = s3(i), s = i < 0 ? t5(n + s, 0) : t6(s, n - 1)), tb(e, nh(t, 3), s, !0)
                            }

                            function nF(e) {
                                return (null == e ? 0 : e.length) ? rB(e, 1) : []
                            }

                            function nW(e) {
                                return e && e.length ? e[0] : r
                            }
                            var nG = ip(function(e) {
                                    var t = tf(e, iC);
                                    return t.length && t[0] === e[0] ? r1(t) : []
                                }),
                                nQ = ip(function(e) {
                                    var t = nY(e),
                                        i = tf(e, iC);
                                    return t === nY(i) ? t = r : i.pop(), i.length && i[0] === e[0] ? r1(i, nh(t, 2)) : []
                                }),
                                nJ = ip(function(e) {
                                    var t = nY(e),
                                        i = tf(e, iC);
                                    return (t = "function" == typeof t ? t : r) && i.pop(), i.length && i[0] === e[0] ? r1(i, r, t) : []
                                });

                            function nY(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? e[t - 1] : r
                            }
                            var nZ = ip(nX);

                            function nX(e, t) {
                                return e && e.length && t && t.length ? ic(e, t) : e
                            }
                            var n0 = ns(function(e, t) {
                                var r = null == e ? 0 : e.length,
                                    i = rj(e, t);
                                return iu(e, tf(t, function(e) {
                                    return nw(e, r) ? +e : e
                                }).sort(i$)), i
                            });

                            function n1(e) {
                                return null == e ? e : t4.call(e)
                            }
                            var n5 = ip(function(e) {
                                    return iP(rB(e, 1, sq, !0))
                                }),
                                n6 = ip(function(e) {
                                    var t = nY(e);
                                    return sq(t) && (t = r), iP(rB(e, 1, sq, !0), nh(t, 2))
                                }),
                                n2 = ip(function(e) {
                                    var t = nY(e);
                                    return t = "function" == typeof t ? t : r, iP(rB(e, 1, sq, !0), r, t)
                                });

                            function n3(e) {
                                if (!(e && e.length)) return [];
                                var t = 0;
                                return e = tu(e, function(e) {
                                    if (sq(e)) return t = t5(e.length, t), !0
                                }), tN(t, function(t) {
                                    return tf(e, tP(t))
                                })
                            }

                            function n9(e, t) {
                                if (!(e && e.length)) return [];
                                var i = n3(e);
                                return null == t ? i : tf(i, function(e) {
                                    return ts(t, r, e)
                                })
                            }
                            var n4 = ip(function(e, t) {
                                    return sq(e) ? rM(e, t) : []
                                }),
                                n8 = ip(function(e) {
                                    return iR(tu(e, sq))
                                }),
                                n7 = ip(function(e) {
                                    var t = nY(e);
                                    return sq(t) && (t = r), iR(tu(e, sq), nh(t, 2))
                                }),
                                se = ip(function(e) {
                                    var t = nY(e);
                                    return t = "function" == typeof t ? t : r, iR(tu(e, sq), r, t)
                                }),
                                st = ip(n3),
                                sr = ip(function(e) {
                                    var t = e.length,
                                        i = t > 1 ? e[t - 1] : r;
                                    return i = "function" == typeof i ? (e.pop(), i) : r, n9(e, i)
                                });

                            function si(e) {
                                var t = rd(e);
                                return t.__chain__ = !0, t
                            }

                            function sn(e, t) {
                                return t(e)
                            }
                            var ss = ns(function(e) {
                                    var t = e.length,
                                        i = t ? e[0] : 0,
                                        n = this.__wrapped__,
                                        s = function(t) {
                                            return rj(t, e)
                                        };
                                    return !(t > 1) && !this.__actions__.length && n instanceof rm && nw(i) ? ((n = n.slice(i, +i + (t ? 1 : 0))).__actions__.push({
                                        func: sn,
                                        args: [s],
                                        thisArg: r
                                    }), new rv(n, this.__chain__).thru(function(e) {
                                        return t && !e.length && e.push(r), e
                                    })) : this.thru(s)
                                }),
                                so = iV(function(e, t, r) {
                                    ej.call(e, r) ? ++e[r] : rC(e, r, 1)
                                }),
                                sa = iY(nV),
                                sc = iY(nK);

                            function su(e, t) {
                                return (sD(e) ? ta : rq)(e, nh(t, 3))
                            }

                            function sl(e, t) {
                                return (sD(e) ? function(e, t) {
                                    for (var r = null == e ? 0 : e.length; r-- && !1 !== t(e[r], r, e););
                                    return e
                                } : r$)(e, nh(t, 3))
                            }
                            var sh = iV(function(e, t, r) {
                                    ej.call(e, r) ? e[r].push(t) : rC(e, r, [t])
                                }),
                                sf = ip(function(e, t, r) {
                                    var i = -1,
                                        n = "function" == typeof t,
                                        s = sM(e) ? em(e.length) : [];
                                    return rq(e, function(e) {
                                        s[++i] = n ? ts(t, e, r) : r5(e, t, r)
                                    }), s
                                }),
                                sp = iV(function(e, t, r) {
                                    rC(e, r, t)
                                });

                            function sd(e, t) {
                                return (sD(e) ? tf : ie)(e, nh(t, 3))
                            }
                            var sg = iV(function(e, t, r) {
                                    e[r ? 0 : 1].push(t)
                                }, function() {
                                    return [
                                        [],
                                        []
                                    ]
                                }),
                                sy = ip(function(e, t) {
                                    if (null == e) return [];
                                    var r = t.length;
                                    return r > 1 && nE(e, t[0], t[1]) ? t = [] : r > 2 && nE(t[0], t[1], t[2]) && (t = [t[0]]), io(e, rB(t, 1), [])
                                }),
                                sv = tS || function() {
                                    return e6.Date.now()
                                };

                            function sm(e, t, i) {
                                return t = i ? r : t, t = e && null == t ? e.length : t, ne(e, 128, r, r, r, r, t)
                            }

                            function sb(e, t) {
                                var n;
                                if ("function" != typeof t) throw new eO(i);
                                return e = s3(e),
                                    function() {
                                        return --e > 0 && (n = t.apply(this, arguments)), e <= 1 && (t = r), n
                                    }
                            }
                            var s_ = ip(function(e, t, r) {
                                    var i = 1;
                                    if (r.length) {
                                        var n = tz(r, nl(s_));
                                        i |= 32
                                    }
                                    return ne(e, i, t, r, n)
                                }),
                                sw = ip(function(e, t, r) {
                                    var i = 3;
                                    if (r.length) {
                                        var n = tz(r, nl(sw));
                                        i |= 32
                                    }
                                    return ne(t, i, e, r, n)
                                });

                            function sE(e, t, n) {
                                var s, o, a, c, u, l, h = 0,
                                    f = !1,
                                    p = !1,
                                    d = !0;
                                if ("function" != typeof e) throw new eO(i);

                                function g(t) {
                                    var i = s,
                                        n = o;
                                    return s = o = r, h = t, c = e.apply(n, i)
                                }

                                function y(e) {
                                    var i = e - l,
                                        n = e - h;
                                    return l === r || i >= t || i < 0 || p && n >= a
                                }

                                function v() {
                                    var e, r, i, n = sv();
                                    if (y(n)) return m(n);
                                    u = nj(v, (e = n - l, r = n - h, i = t - e, p ? t6(i, a - r) : i))
                                }

                                function m(e) {
                                    return u = r, d && s ? g(e) : (s = o = r, c)
                                }

                                function b() {
                                    var e, i = sv(),
                                        n = y(i);
                                    if (s = arguments, o = this, l = i, n) {
                                        if (u === r) return h = e = l, u = nj(v, t), f ? g(e) : c;
                                        if (p) return iD(u), u = nj(v, t), g(l)
                                    }
                                    return u === r && (u = nj(v, t)), c
                                }
                                return t = s4(t) || 0, sK(n) && (f = !!n.leading, a = (p = "maxWait" in n) ? t5(s4(n.maxWait) || 0, t) : a, d = "trailing" in n ? !!n.trailing : d), b.cancel = function() {
                                    u !== r && iD(u), h = 0, s = l = o = u = r
                                }, b.flush = function() {
                                    return u === r ? c : m(sv())
                                }, b
                            }
                            var sI = ip(function(e, t) {
                                    return rk(e, 1, t)
                                }),
                                sP = ip(function(e, t, r) {
                                    return rk(e, s4(t) || 0, r)
                                });

                            function sS(e, t) {
                                if ("function" != typeof e || null != t && "function" != typeof t) throw new eO(i);
                                var r = function() {
                                    var i = arguments,
                                        n = t ? t.apply(this, i) : i[0],
                                        s = r.cache;
                                    if (s.has(n)) return s.get(n);
                                    var o = e.apply(this, i);
                                    return r.cache = s.set(n, o) || s, o
                                };
                                return r.cache = new(sS.Cache || rw), r
                            }

                            function sO(e) {
                                if ("function" != typeof e) throw new eO(i);
                                return function() {
                                    var t = arguments;
                                    switch (t.length) {
                                        case 0:
                                            return !e.call(this);
                                        case 1:
                                            return !e.call(this, t[0]);
                                        case 2:
                                            return !e.call(this, t[0], t[1]);
                                        case 3:
                                            return !e.call(this, t[0], t[1], t[2])
                                    }
                                    return !e.apply(this, t)
                                }
                            }
                            sS.Cache = rw;
                            var sx = ip(function(e, t) {
                                    var r = (t = 1 == t.length && sD(t[0]) ? tf(t[0], tA(nh())) : tf(rB(t, 1), tA(nh()))).length;
                                    return ip(function(i) {
                                        for (var n = -1, s = t6(i.length, r); ++n < s;) i[n] = t[n].call(this, i[n]);
                                        return ts(e, this, i)
                                    })
                                }),
                                sN = ip(function(e, t) {
                                    var i = tz(t, nl(sN));
                                    return ne(e, 32, r, t, i)
                                }),
                                sR = ip(function(e, t) {
                                    var i = tz(t, nl(sR));
                                    return ne(e, 64, r, t, i)
                                }),
                                sA = ns(function(e, t) {
                                    return ne(e, 256, r, r, r, t)
                                });

                            function sC(e, t) {
                                return e === t || e != e && t != t
                            }
                            var sj = i3(rZ),
                                sT = i3(function(e, t) {
                                    return e >= t
                                }),
                                sL = r6(function() {
                                    return arguments
                                }()) ? r6 : function(e) {
                                    return sF(e) && ej.call(e, "callee") && !e1.call(e, "callee")
                                },
                                sD = em.isArray,
                                sk = e7 ? tA(e7) : function(e) {
                                    return sF(e) && rY(e) == S
                                };

                            function sM(e) {
                                return null != e && sV(e.length) && !sH(e)
                            }

                            function sq(e) {
                                return sF(e) && sM(e)
                            }
                            var s$ = tZ || oY,
                                sU = te ? tA(te) : function(e) {
                                    return sF(e) && rY(e) == f
                                };

                            function sz(e) {
                                if (!sF(e)) return !1;
                                var t = rY(e);
                                return t == p || "[object DOMException]" == t || "string" == typeof e.message && "string" == typeof e.name && !sQ(e)
                            }

                            function sH(e) {
                                if (!sK(e)) return !1;
                                var t = rY(e);
                                return t == d || t == g || "[object AsyncFunction]" == t || "[object Proxy]" == t
                            }

                            function sB(e) {
                                return "number" == typeof e && e == s3(e)
                            }

                            function sV(e) {
                                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
                            }

                            function sK(e) {
                                var t = typeof e;
                                return null != e && ("object" == t || "function" == t)
                            }

                            function sF(e) {
                                return null != e && "object" == typeof e
                            }
                            var sW = tt ? tA(tt) : function(e) {
                                return sF(e) && nv(e) == y
                            };

                            function sG(e) {
                                return "number" == typeof e || sF(e) && rY(e) == v
                            }

                            function sQ(e) {
                                if (!sF(e) || rY(e) != m) return !1;
                                var t = eF(e);
                                if (null === t) return !0;
                                var r = ej.call(t, "constructor") && t.constructor;
                                return "function" == typeof r && r instanceof r && eC.call(r) == ek
                            }
                            var sJ = tr ? tA(tr) : function(e) {
                                    return sF(e) && rY(e) == _
                                },
                                sY = ti ? tA(ti) : function(e) {
                                    return sF(e) && nv(e) == w
                                };

                            function sZ(e) {
                                return "string" == typeof e || !sD(e) && sF(e) && rY(e) == E
                            }

                            function sX(e) {
                                return "symbol" == typeof e || sF(e) && rY(e) == I
                            }
                            var s0 = tn ? tA(tn) : function(e) {
                                    return sF(e) && sV(e.length) && !!eJ[rY(e)]
                                },
                                s1 = i3(r7),
                                s5 = i3(function(e, t) {
                                    return e <= t
                                });

                            function s6(e) {
                                if (!e) return [];
                                if (sM(e)) return sZ(e) ? tV(e) : iH(e);
                                if (e3 && e[e3]) return function(e) {
                                    for (var t, r = []; !(t = e.next()).done;) r.push(t.value);
                                    return r
                                }(e[e3]());
                                var t = nv(e);
                                return (t == y ? t$ : t == w ? tH : ow)(e)
                            }

                            function s2(e) {
                                return e ? (e = s4(e)) === o || e === -o ? (e < 0 ? -1 : 1) * 17976931348623157e292 : e == e ? e : 0 : 0 === e ? e : 0
                            }

                            function s3(e) {
                                var t = s2(e),
                                    r = t % 1;
                                return t == t ? r ? t - r : t : 0
                            }

                            function s9(e) {
                                return e ? rT(s3(e), 0, 4294967295) : 0
                            }

                            function s4(e) {
                                if ("number" == typeof e) return e;
                                if (sX(e)) return a;
                                if (sK(e)) {
                                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                                    e = sK(t) ? t + "" : t
                                }
                                if ("string" != typeof e) return 0 === e ? e : +e;
                                e = tR(e);
                                var r = ec.test(e);
                                return r || el.test(e) ? e0(e.slice(2), r ? 2 : 8) : ea.test(e) ? a : +e
                            }

                            function s8(e) {
                                return iB(e, op(e))
                            }

                            function s7(e) {
                                return null == e ? "" : iI(e)
                            }
                            var oe = iK(function(e, t) {
                                    if (nO(t) || sM(t)) {
                                        iB(t, of (t), e);
                                        return
                                    }
                                    for (var r in t) ej.call(t, r) && rx(e, r, t[r])
                                }),
                                ot = iK(function(e, t) {
                                    iB(t, op(t), e)
                                }),
                                or = iK(function(e, t, r, i) {
                                    iB(t, op(t), e, i)
                                }),
                                oi = iK(function(e, t, r, i) {
                                    iB(t, of (t), e, i)
                                }),
                                on = ns(rj),
                                os = ip(function(e, t) {
                                    e = eI(e);
                                    var i = -1,
                                        n = t.length,
                                        s = n > 2 ? t[2] : r;
                                    for (s && nE(t[0], t[1], s) && (n = 1); ++i < n;)
                                        for (var o = t[i], a = op(o), c = -1, u = a.length; ++c < u;) {
                                            var l = a[c],
                                                h = e[l];
                                            (h === r || sC(h, eR[l]) && !ej.call(e, l)) && (e[l] = o[l])
                                        }
                                    return e
                                }),
                                oo = ip(function(e) {
                                    return e.push(r, nr), ts(og, r, e)
                                });

                            function oa(e, t, i) {
                                var n = null == e ? r : rQ(e, t);
                                return n === r ? i : n
                            }

                            function oc(e, t) {
                                return null != e && nm(e, t, r0)
                            }
                            var ou = i0(function(e, t, r) {
                                    null != t && "function" != typeof t.toString && (t = eD.call(t)), e[t] = r
                                }, oD(oq)),
                                ol = i0(function(e, t, r) {
                                    null != t && "function" != typeof t.toString && (t = eD.call(t)), ej.call(e, t) ? e[t].push(r) : e[t] = [r]
                                }, nh),
                                oh = ip(r5);

                            function of (e) {
                                return sM(e) ? rP(e) : r8(e)
                            }

                            function op(e) {
                                return sM(e) ? rP(e, !0) : function(e) {
                                    if (!sK(e)) return function(e) {
                                        var t = [];
                                        if (null != e)
                                            for (var r in eI(e)) t.push(r);
                                        return t
                                    }(e);
                                    var t = nO(e),
                                        r = [];
                                    for (var i in e) "constructor" == i && (t || !ej.call(e, i)) || r.push(i);
                                    return r
                                }(e)
                            }
                            var od = iK(function(e, t, r) {
                                    ii(e, t, r)
                                }),
                                og = iK(function(e, t, r, i) {
                                    ii(e, t, r, i)
                                }),
                                oy = ns(function(e, t) {
                                    var r = {};
                                    if (null == e) return r;
                                    var i = !1;
                                    t = tf(t, function(t) {
                                        return t = iT(t, e), i || (i = t.length > 1), t
                                    }), iB(e, na(e), r), i && (r = rL(r, 7, ni));
                                    for (var n = t.length; n--;) iS(r, t[n]);
                                    return r
                                }),
                                ov = ns(function(e, t) {
                                    return null == e ? {} : ia(e, t, function(t, r) {
                                        return oc(e, r)
                                    })
                                });

                            function om(e, t) {
                                if (null == e) return {};
                                var r = tf(na(e), function(e) {
                                    return [e]
                                });
                                return t = nh(t), ia(e, r, function(e, r) {
                                    return t(e, r[0])
                                })
                            }
                            var ob = i7( of ),
                                o_ = i7(op);

                            function ow(e) {
                                return null == e ? [] : tC(e, of (e))
                            }
                            var oE = iQ(function(e, t, r) {
                                return t = t.toLowerCase(), e + (r ? oI(t) : t)
                            });

                            function oI(e) {
                                return oC(s7(e).toLowerCase())
                            }

                            function oP(e) {
                                return (e = s7(e)) && e.replace(ef, tD).replace(eB, "")
                            }
                            var oS = iQ(function(e, t, r) {
                                    return e + (r ? "-" : "") + t.toLowerCase()
                                }),
                                oO = iQ(function(e, t, r) {
                                    return e + (r ? " " : "") + t.toLowerCase()
                                }),
                                ox = iG("toLowerCase"),
                                oN = iQ(function(e, t, r) {
                                    return e + (r ? "_" : "") + t.toLowerCase()
                                }),
                                oR = iQ(function(e, t, r) {
                                    return e + (r ? " " : "") + oC(t)
                                }),
                                oA = iQ(function(e, t, r) {
                                    return e + (r ? " " : "") + t.toUpperCase()
                                }),
                                oC = iG("toUpperCase");

                            function oj(e, t, i) {
                                var n;
                                return e = s7(e), (t = i ? r : t) === r ? (n = e, eW.test(n)) ? e.match(eK) || [] : e.match(er) || [] : e.match(t) || []
                            }
                            var oT = ip(function(e, t) {
                                    try {
                                        return ts(e, r, t)
                                    } catch (e) {
                                        return sz(e) ? e : new e_(e)
                                    }
                                }),
                                oL = ns(function(e, t) {
                                    return ta(t, function(t) {
                                        rC(e, t = nq(t), s_(e[t], e))
                                    }), e
                                });

                            function oD(e) {
                                return function() {
                                    return e
                                }
                            }
                            var ok = iZ(),
                                oM = iZ(!0);

                            function oq(e) {
                                return e
                            }

                            function o$(e) {
                                return r4("function" == typeof e ? e : rL(e, 1))
                            }
                            var oU = ip(function(e, t) {
                                    return function(r) {
                                        return r5(r, e, t)
                                    }
                                }),
                                oz = ip(function(e, t) {
                                    return function(r) {
                                        return r5(e, r, t)
                                    }
                                });

                            function oH(e, t, r) {
                                var i = of (t),
                                    n = rG(t, i);
                                null != r || sK(t) && (n.length || !i.length) || (r = t, t = e, e = this, n = rG(t, of (t)));
                                var s = !(sK(r) && "chain" in r) || !!r.chain,
                                    o = sH(e);
                                return ta(n, function(r) {
                                    var i = t[r];
                                    e[r] = i, o && (e.prototype[r] = function() {
                                        var t = this.__chain__;
                                        if (s || t) {
                                            var r = e(this.__wrapped__);
                                            return (r.__actions__ = iH(this.__actions__)).push({
                                                func: i,
                                                args: arguments,
                                                thisArg: e
                                            }), r.__chain__ = t, r
                                        }
                                        return i.apply(e, tp([this.value()], arguments))
                                    })
                                }), e
                            }

                            function oB() {}
                            var oV = i5(tf),
                                oK = i5(tc),
                                oF = i5(ty);

                            function oW(e) {
                                return nI(e) ? tP(nq(e)) : function(t) {
                                    return rQ(t, e)
                                }
                            }
                            var oG = i2(),
                                oQ = i2(!0);

                            function oJ() {
                                return []
                            }

                            function oY() {
                                return !1
                            }
                            var oZ = i1(function(e, t) {
                                    return e + t
                                }, 0),
                                oX = i4("ceil"),
                                o0 = i1(function(e, t) {
                                    return e / t
                                }, 1),
                                o1 = i4("floor"),
                                o5 = i1(function(e, t) {
                                    return e * t
                                }, 1),
                                o6 = i4("round"),
                                o2 = i1(function(e, t) {
                                    return e - t
                                }, 0);
                            return rd.after = function(e, t) {
                                if ("function" != typeof t) throw new eO(i);
                                return e = s3(e),
                                    function() {
                                        if (--e < 1) return t.apply(this, arguments)
                                    }
                            }, rd.ary = sm, rd.assign = oe, rd.assignIn = ot, rd.assignInWith = or, rd.assignWith = oi, rd.at = on, rd.before = sb, rd.bind = s_, rd.bindAll = oL, rd.bindKey = sw, rd.castArray = function() {
                                if (!arguments.length) return [];
                                var e = arguments[0];
                                return sD(e) ? e : [e]
                            }, rd.chain = si, rd.chunk = function(e, t, i) {
                                t = (i ? nE(e, t, i) : t === r) ? 1 : t5(s3(t), 0);
                                var n = null == e ? 0 : e.length;
                                if (!n || t < 1) return [];
                                for (var s = 0, o = 0, a = em(tQ(n / t)); s < n;) a[o++] = iv(e, s, s += t);
                                return a
                            }, rd.compact = function(e) {
                                for (var t = -1, r = null == e ? 0 : e.length, i = 0, n = []; ++t < r;) {
                                    var s = e[t];
                                    s && (n[i++] = s)
                                }
                                return n
                            }, rd.concat = function() {
                                var e = arguments.length;
                                if (!e) return [];
                                for (var t = em(e - 1), r = arguments[0], i = e; i--;) t[i - 1] = arguments[i];
                                return tp(sD(r) ? iH(r) : [r], rB(t, 1))
                            }, rd.cond = function(e) {
                                var t = null == e ? 0 : e.length,
                                    r = nh();
                                return e = t ? tf(e, function(e) {
                                    if ("function" != typeof e[1]) throw new eO(i);
                                    return [r(e[0]), e[1]]
                                }) : [], ip(function(r) {
                                    for (var i = -1; ++i < t;) {
                                        var n = e[i];
                                        if (ts(n[0], this, r)) return ts(n[1], this, r)
                                    }
                                })
                            }, rd.conforms = function(e) {
                                var t, r;
                                return r = of (t = rL(e, 1)),
                                    function(e) {
                                        return rD(e, t, r)
                                    }
                            }, rd.constant = oD, rd.countBy = so, rd.create = function(e, t) {
                                var r = rg(e);
                                return null == t ? r : rA(r, t)
                            }, rd.curry = function e(t, i, n) {
                                i = n ? r : i;
                                var s = ne(t, 8, r, r, r, r, r, i);
                                return s.placeholder = e.placeholder, s
                            }, rd.curryRight = function e(t, i, n) {
                                i = n ? r : i;
                                var s = ne(t, 16, r, r, r, r, r, i);
                                return s.placeholder = e.placeholder, s
                            }, rd.debounce = sE, rd.defaults = os, rd.defaultsDeep = oo, rd.defer = sI, rd.delay = sP, rd.difference = nz, rd.differenceBy = nH, rd.differenceWith = nB, rd.drop = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, (t = i || t === r ? 1 : s3(t)) < 0 ? 0 : t, n) : []
                            }, rd.dropRight = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, 0, (t = n - (t = i || t === r ? 1 : s3(t))) < 0 ? 0 : t) : []
                            }, rd.dropRightWhile = function(e, t) {
                                return e && e.length ? ix(e, nh(t, 3), !0, !0) : []
                            }, rd.dropWhile = function(e, t) {
                                return e && e.length ? ix(e, nh(t, 3), !0) : []
                            }, rd.fill = function(e, t, i, n) {
                                var s = null == e ? 0 : e.length;
                                return s ? (i && "number" != typeof i && nE(e, t, i) && (i = 0, n = s), function(e, t, i, n) {
                                    var s = e.length;
                                    for ((i = s3(i)) < 0 && (i = -i > s ? 0 : s + i), (n = n === r || n > s ? s : s3(n)) < 0 && (n += s), n = i > n ? 0 : s9(n); i < n;) e[i++] = t;
                                    return e
                                }(e, t, i, n)) : []
                            }, rd.filter = function(e, t) {
                                return (sD(e) ? tu : rH)(e, nh(t, 3))
                            }, rd.flatMap = function(e, t) {
                                return rB(sd(e, t), 1)
                            }, rd.flatMapDeep = function(e, t) {
                                return rB(sd(e, t), o)
                            }, rd.flatMapDepth = function(e, t, i) {
                                return i = i === r ? 1 : s3(i), rB(sd(e, t), i)
                            }, rd.flatten = nF, rd.flattenDeep = function(e) {
                                return (null == e ? 0 : e.length) ? rB(e, o) : []
                            }, rd.flattenDepth = function(e, t) {
                                return (null == e ? 0 : e.length) ? rB(e, t = t === r ? 1 : s3(t)) : []
                            }, rd.flip = function(e) {
                                return ne(e, 512)
                            }, rd.flow = ok, rd.flowRight = oM, rd.fromPairs = function(e) {
                                for (var t = -1, r = null == e ? 0 : e.length, i = {}; ++t < r;) {
                                    var n = e[t];
                                    i[n[0]] = n[1]
                                }
                                return i
                            }, rd.functions = function(e) {
                                return null == e ? [] : rG(e, of (e))
                            }, rd.functionsIn = function(e) {
                                return null == e ? [] : rG(e, op(e))
                            }, rd.groupBy = sh, rd.initial = function(e) {
                                return (null == e ? 0 : e.length) ? iv(e, 0, -1) : []
                            }, rd.intersection = nG, rd.intersectionBy = nQ, rd.intersectionWith = nJ, rd.invert = ou, rd.invertBy = ol, rd.invokeMap = sf, rd.iteratee = o$, rd.keyBy = sp, rd.keys = of , rd.keysIn = op, rd.map = sd, rd.mapKeys = function(e, t) {
                                var r = {};
                                return t = nh(t, 3), rF(e, function(e, i, n) {
                                    rC(r, t(e, i, n), e)
                                }), r
                            }, rd.mapValues = function(e, t) {
                                var r = {};
                                return t = nh(t, 3), rF(e, function(e, i, n) {
                                    rC(r, i, t(e, i, n))
                                }), r
                            }, rd.matches = function(e) {
                                return it(rL(e, 1))
                            }, rd.matchesProperty = function(e, t) {
                                return ir(e, rL(t, 1))
                            }, rd.memoize = sS, rd.merge = od, rd.mergeWith = og, rd.method = oU, rd.methodOf = oz, rd.mixin = oH, rd.negate = sO, rd.nthArg = function(e) {
                                return e = s3(e), ip(function(t) {
                                    return is(t, e)
                                })
                            }, rd.omit = oy, rd.omitBy = function(e, t) {
                                return om(e, sO(nh(t)))
                            }, rd.once = function(e) {
                                return sb(2, e)
                            }, rd.orderBy = function(e, t, i, n) {
                                return null == e ? [] : (sD(t) || (t = null == t ? [] : [t]), sD(i = n ? r : i) || (i = null == i ? [] : [i]), io(e, t, i))
                            }, rd.over = oV, rd.overArgs = sx, rd.overEvery = oK, rd.overSome = oF, rd.partial = sN, rd.partialRight = sR, rd.partition = sg, rd.pick = ov, rd.pickBy = om, rd.property = oW, rd.propertyOf = function(e) {
                                return function(t) {
                                    return null == e ? r : rQ(e, t)
                                }
                            }, rd.pull = nZ, rd.pullAll = nX, rd.pullAllBy = function(e, t, r) {
                                return e && e.length && t && t.length ? ic(e, t, nh(r, 2)) : e
                            }, rd.pullAllWith = function(e, t, i) {
                                return e && e.length && t && t.length ? ic(e, t, r, i) : e
                            }, rd.pullAt = n0, rd.range = oG, rd.rangeRight = oQ, rd.rearg = sA, rd.reject = function(e, t) {
                                return (sD(e) ? tu : rH)(e, sO(nh(t, 3)))
                            }, rd.remove = function(e, t) {
                                var r = [];
                                if (!(e && e.length)) return r;
                                var i = -1,
                                    n = [],
                                    s = e.length;
                                for (t = nh(t, 3); ++i < s;) {
                                    var o = e[i];
                                    t(o, i, e) && (r.push(o), n.push(i))
                                }
                                return iu(e, n), r
                            }, rd.rest = function(e, t) {
                                if ("function" != typeof e) throw new eO(i);
                                return ip(e, t = t === r ? t : s3(t))
                            }, rd.reverse = n1, rd.sampleSize = function(e, t, i) {
                                return t = (i ? nE(e, t, i) : t === r) ? 1 : s3(t), (sD(e) ? function(e, t) {
                                    return nk(iH(e), rT(t, 0, e.length))
                                } : function(e, t) {
                                    var r = ow(e);
                                    return nk(r, rT(t, 0, r.length))
                                })(e, t)
                            }, rd.set = function(e, t, r) {
                                return null == e ? e : id(e, t, r)
                            }, rd.setWith = function(e, t, i, n) {
                                return n = "function" == typeof n ? n : r, null == e ? e : id(e, t, i, n)
                            }, rd.shuffle = function(e) {
                                return (sD(e) ? function(e) {
                                    return nk(iH(e))
                                } : function(e) {
                                    return nk(ow(e))
                                })(e)
                            }, rd.slice = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? (i && "number" != typeof i && nE(e, t, i) ? (t = 0, i = n) : (t = null == t ? 0 : s3(t), i = i === r ? n : s3(i)), iv(e, t, i)) : []
                            }, rd.sortBy = sy, rd.sortedUniq = function(e) {
                                return e && e.length ? iw(e) : []
                            }, rd.sortedUniqBy = function(e, t) {
                                return e && e.length ? iw(e, nh(t, 2)) : []
                            }, rd.split = function(e, t, i) {
                                return i && "number" != typeof i && nE(e, t, i) && (t = i = r), (i = i === r ? 4294967295 : i >>> 0) ? (e = s7(e)) && ("string" == typeof t || null != t && !sJ(t)) && !(t = iI(t)) && tq(e) ? iL(tV(e), 0, i) : e.split(t, i) : []
                            }, rd.spread = function(e, t) {
                                if ("function" != typeof e) throw new eO(i);
                                return t = null == t ? 0 : t5(s3(t), 0), ip(function(r) {
                                    var i = r[t],
                                        n = iL(r, 0, t);
                                    return i && tp(n, i), ts(e, this, n)
                                })
                            }, rd.tail = function(e) {
                                var t = null == e ? 0 : e.length;
                                return t ? iv(e, 1, t) : []
                            }, rd.take = function(e, t, i) {
                                return e && e.length ? iv(e, 0, (t = i || t === r ? 1 : s3(t)) < 0 ? 0 : t) : []
                            }, rd.takeRight = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                return n ? iv(e, (t = n - (t = i || t === r ? 1 : s3(t))) < 0 ? 0 : t, n) : []
                            }, rd.takeRightWhile = function(e, t) {
                                return e && e.length ? ix(e, nh(t, 3), !1, !0) : []
                            }, rd.takeWhile = function(e, t) {
                                return e && e.length ? ix(e, nh(t, 3)) : []
                            }, rd.tap = function(e, t) {
                                return t(e), e
                            }, rd.throttle = function(e, t, r) {
                                var n = !0,
                                    s = !0;
                                if ("function" != typeof e) throw new eO(i);
                                return sK(r) && (n = "leading" in r ? !!r.leading : n, s = "trailing" in r ? !!r.trailing : s), sE(e, t, {
                                    leading: n,
                                    maxWait: t,
                                    trailing: s
                                })
                            }, rd.thru = sn, rd.toArray = s6, rd.toPairs = ob, rd.toPairsIn = o_, rd.toPath = function(e) {
                                return sD(e) ? tf(e, nq) : sX(e) ? [e] : iH(nM(s7(e)))
                            }, rd.toPlainObject = s8, rd.transform = function(e, t, r) {
                                var i = sD(e),
                                    n = i || s$(e) || s0(e);
                                if (t = nh(t, 4), null == r) {
                                    var s = e && e.constructor;
                                    r = n ? i ? new s : [] : sK(e) && sH(s) ? rg(eF(e)) : {}
                                }
                                return (n ? ta : rF)(e, function(e, i, n) {
                                    return t(r, e, i, n)
                                }), r
                            }, rd.unary = function(e) {
                                return sm(e, 1)
                            }, rd.union = n5, rd.unionBy = n6, rd.unionWith = n2, rd.uniq = function(e) {
                                return e && e.length ? iP(e) : []
                            }, rd.uniqBy = function(e, t) {
                                return e && e.length ? iP(e, nh(t, 2)) : []
                            }, rd.uniqWith = function(e, t) {
                                return t = "function" == typeof t ? t : r, e && e.length ? iP(e, r, t) : []
                            }, rd.unset = function(e, t) {
                                return null == e || iS(e, t)
                            }, rd.unzip = n3, rd.unzipWith = n9, rd.update = function(e, t, r) {
                                return null == e ? e : iO(e, t, ij(r))
                            }, rd.updateWith = function(e, t, i, n) {
                                return n = "function" == typeof n ? n : r, null == e ? e : iO(e, t, ij(i), n)
                            }, rd.values = ow, rd.valuesIn = function(e) {
                                return null == e ? [] : tC(e, op(e))
                            }, rd.without = n4, rd.words = oj, rd.wrap = function(e, t) {
                                return sN(ij(t), e)
                            }, rd.xor = n8, rd.xorBy = n7, rd.xorWith = se, rd.zip = st, rd.zipObject = function(e, t) {
                                return iA(e || [], t || [], rx)
                            }, rd.zipObjectDeep = function(e, t) {
                                return iA(e || [], t || [], id)
                            }, rd.zipWith = sr, rd.entries = ob, rd.entriesIn = o_, rd.extend = ot, rd.extendWith = or, oH(rd, rd), rd.add = oZ, rd.attempt = oT, rd.camelCase = oE, rd.capitalize = oI, rd.ceil = oX, rd.clamp = function(e, t, i) {
                                return i === r && (i = t, t = r), i !== r && (i = (i = s4(i)) == i ? i : 0), t !== r && (t = (t = s4(t)) == t ? t : 0), rT(s4(e), t, i)
                            }, rd.clone = function(e) {
                                return rL(e, 4)
                            }, rd.cloneDeep = function(e) {
                                return rL(e, 5)
                            }, rd.cloneDeepWith = function(e, t) {
                                return rL(e, 5, t = "function" == typeof t ? t : r)
                            }, rd.cloneWith = function(e, t) {
                                return rL(e, 4, t = "function" == typeof t ? t : r)
                            }, rd.conformsTo = function(e, t) {
                                return null == t || rD(e, t, of (t))
                            }, rd.deburr = oP, rd.defaultTo = function(e, t) {
                                return null == e || e != e ? t : e
                            }, rd.divide = o0, rd.endsWith = function(e, t, i) {
                                e = s7(e), t = iI(t);
                                var n = e.length,
                                    s = i = i === r ? n : rT(s3(i), 0, n);
                                return (i -= t.length) >= 0 && e.slice(i, s) == t
                            }, rd.eq = sC, rd.escape = function(e) {
                                return (e = s7(e)) && H.test(e) ? e.replace(U, tk) : e
                            }, rd.escapeRegExp = function(e) {
                                return (e = s7(e)) && J.test(e) ? e.replace(Q, "\\$&") : e
                            }, rd.every = function(e, t, i) {
                                var n = sD(e) ? tc : rU;
                                return i && nE(e, t, i) && (t = r), n(e, nh(t, 3))
                            }, rd.find = sa, rd.findIndex = nV, rd.findKey = function(e, t) {
                                return tm(e, nh(t, 3), rF)
                            }, rd.findLast = sc, rd.findLastIndex = nK, rd.findLastKey = function(e, t) {
                                return tm(e, nh(t, 3), rW)
                            }, rd.floor = o1, rd.forEach = su, rd.forEachRight = sl, rd.forIn = function(e, t) {
                                return null == e ? e : rV(e, nh(t, 3), op)
                            }, rd.forInRight = function(e, t) {
                                return null == e ? e : rK(e, nh(t, 3), op)
                            }, rd.forOwn = function(e, t) {
                                return e && rF(e, nh(t, 3))
                            }, rd.forOwnRight = function(e, t) {
                                return e && rW(e, nh(t, 3))
                            }, rd.get = oa, rd.gt = sj, rd.gte = sT, rd.has = function(e, t) {
                                return null != e && nm(e, t, rX)
                            }, rd.hasIn = oc, rd.head = nW, rd.identity = oq, rd.includes = function(e, t, r, i) {
                                e = sM(e) ? e : ow(e), r = r && !i ? s3(r) : 0;
                                var n = e.length;
                                return r < 0 && (r = t5(n + r, 0)), sZ(e) ? r <= n && e.indexOf(t, r) > -1 : !!n && t_(e, t, r) > -1
                            }, rd.indexOf = function(e, t, r) {
                                var i = null == e ? 0 : e.length;
                                if (!i) return -1;
                                var n = null == r ? 0 : s3(r);
                                return n < 0 && (n = t5(i + n, 0)), t_(e, t, n)
                            }, rd.inRange = function(e, t, i) {
                                var n, s, o;
                                return t = s2(t), i === r ? (i = t, t = 0) : i = s2(i), (n = e = s4(e)) >= t6(s = t, o = i) && n < t5(s, o)
                            }, rd.invoke = oh, rd.isArguments = sL, rd.isArray = sD, rd.isArrayBuffer = sk, rd.isArrayLike = sM, rd.isArrayLikeObject = sq, rd.isBoolean = function(e) {
                                return !0 === e || !1 === e || sF(e) && rY(e) == h
                            }, rd.isBuffer = s$, rd.isDate = sU, rd.isElement = function(e) {
                                return sF(e) && 1 === e.nodeType && !sQ(e)
                            }, rd.isEmpty = function(e) {
                                if (null == e) return !0;
                                if (sM(e) && (sD(e) || "string" == typeof e || "function" == typeof e.splice || s$(e) || s0(e) || sL(e))) return !e.length;
                                var t = nv(e);
                                if (t == y || t == w) return !e.size;
                                if (nO(e)) return !r8(e).length;
                                for (var r in e)
                                    if (ej.call(e, r)) return !1;
                                return !0
                            }, rd.isEqual = function(e, t) {
                                return r2(e, t)
                            }, rd.isEqualWith = function(e, t, i) {
                                var n = (i = "function" == typeof i ? i : r) ? i(e, t) : r;
                                return n === r ? r2(e, t, r, i) : !!n
                            }, rd.isError = sz, rd.isFinite = function(e) {
                                return "number" == typeof e && tX(e)
                            }, rd.isFunction = sH, rd.isInteger = sB, rd.isLength = sV, rd.isMap = sW, rd.isMatch = function(e, t) {
                                return e === t || r3(e, t, np(t))
                            }, rd.isMatchWith = function(e, t, i) {
                                return i = "function" == typeof i ? i : r, r3(e, t, np(t), i)
                            }, rd.isNaN = function(e) {
                                return sG(e) && e != +e
                            }, rd.isNative = function(e) {
                                if (nS(e)) throw new e_("Unsupported core-js use. Try https://npms.io/search?q=ponyfill.");
                                return r9(e)
                            }, rd.isNil = function(e) {
                                return null == e
                            }, rd.isNull = function(e) {
                                return null === e
                            }, rd.isNumber = sG, rd.isObject = sK, rd.isObjectLike = sF, rd.isPlainObject = sQ, rd.isRegExp = sJ, rd.isSafeInteger = function(e) {
                                return sB(e) && e >= -9007199254740991 && e <= 9007199254740991
                            }, rd.isSet = sY, rd.isString = sZ, rd.isSymbol = sX, rd.isTypedArray = s0, rd.isUndefined = function(e) {
                                return e === r
                            }, rd.isWeakMap = function(e) {
                                return sF(e) && nv(e) == P
                            }, rd.isWeakSet = function(e) {
                                return sF(e) && "[object WeakSet]" == rY(e)
                            }, rd.join = function(e, t) {
                                return null == e ? "" : t0.call(e, t)
                            }, rd.kebabCase = oS, rd.last = nY, rd.lastIndexOf = function(e, t, i) {
                                var n = null == e ? 0 : e.length;
                                if (!n) return -1;
                                var s = n;
                                return i !== r && (s = (s = s3(i)) < 0 ? t5(n + s, 0) : t6(s, n - 1)), t == t ? function(e, t, r) {
                                    for (var i = r + 1; i-- && e[i] !== t;);
                                    return i
                                }(e, t, s) : tb(e, tE, s, !0)
                            }, rd.lowerCase = oO, rd.lowerFirst = ox, rd.lt = s1, rd.lte = s5, rd.max = function(e) {
                                return e && e.length ? rz(e, oq, rZ) : r
                            }, rd.maxBy = function(e, t) {
                                return e && e.length ? rz(e, nh(t, 2), rZ) : r
                            }, rd.mean = function(e) {
                                return tI(e, oq)
                            }, rd.meanBy = function(e, t) {
                                return tI(e, nh(t, 2))
                            }, rd.min = function(e) {
                                return e && e.length ? rz(e, oq, r7) : r
                            }, rd.minBy = function(e, t) {
                                return e && e.length ? rz(e, nh(t, 2), r7) : r
                            }, rd.stubArray = oJ, rd.stubFalse = oY, rd.stubObject = function() {
                                return {}
                            }, rd.stubString = function() {
                                return ""
                            }, rd.stubTrue = function() {
                                return !0
                            }, rd.multiply = o5, rd.nth = function(e, t) {
                                return e && e.length ? is(e, s3(t)) : r
                            }, rd.noConflict = function() {
                                return e6._ === this && (e6._ = eM), this
                            }, rd.noop = oB, rd.now = sv, rd.pad = function(e, t, r) {
                                e = s7(e);
                                var i = (t = s3(t)) ? tB(e) : 0;
                                if (!t || i >= t) return e;
                                var n = (t - i) / 2;
                                return i6(tJ(n), r) + e + i6(tQ(n), r)
                            }, rd.padEnd = function(e, t, r) {
                                e = s7(e);
                                var i = (t = s3(t)) ? tB(e) : 0;
                                return t && i < t ? e + i6(t - i, r) : e
                            }, rd.padStart = function(e, t, r) {
                                e = s7(e);
                                var i = (t = s3(t)) ? tB(e) : 0;
                                return t && i < t ? i6(t - i, r) + e : e
                            }, rd.parseInt = function(e, t, r) {
                                return r || null == t ? t = 0 : t && (t = +t), t3(s7(e).replace(Y, ""), t || 0)
                            }, rd.random = function(e, t, i) {
                                if (i && "boolean" != typeof i && nE(e, t, i) && (t = i = r), i === r && ("boolean" == typeof t ? (i = t, t = r) : "boolean" == typeof e && (i = e, e = r)), e === r && t === r ? (e = 0, t = 1) : (e = s2(e), t === r ? (t = e, e = 0) : t = s2(t)), e > t) {
                                    var n = e;
                                    e = t, t = n
                                }
                                if (i || e % 1 || t % 1) {
                                    var s = t9();
                                    return t6(e + s * (t - e + eX("1e-" + ((s + "").length - 1))), t)
                                }
                                return il(e, t)
                            }, rd.reduce = function(e, t, r) {
                                var i = sD(e) ? td : tO,
                                    n = arguments.length < 3;
                                return i(e, nh(t, 4), r, n, rq)
                            }, rd.reduceRight = function(e, t, r) {
                                var i = sD(e) ? tg : tO,
                                    n = arguments.length < 3;
                                return i(e, nh(t, 4), r, n, r$)
                            }, rd.repeat = function(e, t, i) {
                                return t = (i ? nE(e, t, i) : t === r) ? 1 : s3(t), ih(s7(e), t)
                            }, rd.replace = function() {
                                var e = arguments,
                                    t = s7(e[0]);
                                return e.length < 3 ? t : t.replace(e[1], e[2])
                            }, rd.result = function(e, t, i) {
                                t = iT(t, e);
                                var n = -1,
                                    s = t.length;
                                for (s || (s = 1, e = r); ++n < s;) {
                                    var o = null == e ? r : e[nq(t[n])];
                                    o === r && (n = s, o = i), e = sH(o) ? o.call(e) : o
                                }
                                return e
                            }, rd.round = o6, rd.runInContext = e, rd.sample = function(e) {
                                return (sD(e) ? rS : function(e) {
                                    return rS(ow(e))
                                })(e)
                            }, rd.size = function(e) {
                                if (null == e) return 0;
                                if (sM(e)) return sZ(e) ? tB(e) : e.length;
                                var t = nv(e);
                                return t == y || t == w ? e.size : r8(e).length
                            }, rd.snakeCase = oN, rd.some = function(e, t, i) {
                                var n = sD(e) ? ty : im;
                                return i && nE(e, t, i) && (t = r), n(e, nh(t, 3))
                            }, rd.sortedIndex = function(e, t) {
                                return ib(e, t)
                            }, rd.sortedIndexBy = function(e, t, r) {
                                return i_(e, t, nh(r, 2))
                            }, rd.sortedIndexOf = function(e, t) {
                                var r = null == e ? 0 : e.length;
                                if (r) {
                                    var i = ib(e, t);
                                    if (i < r && sC(e[i], t)) return i
                                }
                                return -1
                            }, rd.sortedLastIndex = function(e, t) {
                                return ib(e, t, !0)
                            }, rd.sortedLastIndexBy = function(e, t, r) {
                                return i_(e, t, nh(r, 2), !0)
                            }, rd.sortedLastIndexOf = function(e, t) {
                                if (null == e ? 0 : e.length) {
                                    var r = ib(e, t, !0) - 1;
                                    if (sC(e[r], t)) return r
                                }
                                return -1
                            }, rd.startCase = oR, rd.startsWith = function(e, t, r) {
                                return e = s7(e), r = null == r ? 0 : rT(s3(r), 0, e.length), t = iI(t), e.slice(r, r + t.length) == t
                            }, rd.subtract = o2, rd.sum = function(e) {
                                return e && e.length ? tx(e, oq) : 0
                            }, rd.sumBy = function(e, t) {
                                return e && e.length ? tx(e, nh(t, 2)) : 0
                            }, rd.template = function(e, t, i) {
                                var n = rd.templateSettings;
                                i && nE(e, t, i) && (t = r), e = s7(e), t = or({}, t, n, nt);
                                var s, o, a = or({}, t.imports, n.imports, nt),
                                    c = of (a),
                                    u = tC(a, c),
                                    l = 0,
                                    h = t.interpolate || ep,
                                    f = "__p += '",
                                    p = eP((t.escape || ep).source + "|" + h.source + "|" + (h === K ? es : ep).source + "|" + (t.evaluate || ep).source + "|$", "g"),
                                    d = "//# sourceURL=" + (ej.call(t, "sourceURL") ? (t.sourceURL + "").replace(/\s/g, " ") : "lodash.templateSources[" + ++eQ + "]") + `
`;
                                e.replace(p, function(t, r, i, n, a, c) {
                                    return i || (i = n), f += e.slice(l, c).replace(ed, tM), r && (s = !0, f += `' +
__e(` + r + `) +
'`), a && (o = !0, f += `';
` + a + `;
__p += '`), i && (f += `' +
((__t = (` + i + `)) == null ? '' : __t) +
'`), l = c + t.length, t
                                }), f += `';
`;
                                var g = ej.call(t, "variable") && t.variable;
                                if (g) {
                                    if (ei.test(g)) throw new e_("Invalid `variable` option passed into `_.template`")
                                } else f = `with (obj) {
` + f + `
}
`;
                                f = (o ? f.replace(k, "") : f).replace(M, "$1").replace(q, "$1;"), f = "function(" + (g || "obj") + `) {
` + (g ? "" : `obj || (obj = {});
`) + "var __t, __p = ''" + (s ? ", __e = _.escape" : "") + (o ? `, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
` : `;
`) + f + `return __p
}`;
                                var y = oT(function() {
                                    return ew(c, d + "return " + f).apply(r, u)
                                });
                                if (y.source = f, sz(y)) throw y;
                                return y
                            }, rd.times = function(e, t) {
                                if ((e = s3(e)) < 1 || e > 9007199254740991) return [];
                                var r = 4294967295,
                                    i = t6(e, 4294967295);
                                t = nh(t), e -= 4294967295;
                                for (var n = tN(i, t); ++r < e;) t(r);
                                return n
                            }, rd.toFinite = s2, rd.toInteger = s3, rd.toLength = s9, rd.toLower = function(e) {
                                return s7(e).toLowerCase()
                            }, rd.toNumber = s4, rd.toSafeInteger = function(e) {
                                return e ? rT(s3(e), -9007199254740991, 9007199254740991) : 0 === e ? e : 0
                            }, rd.toString = s7, rd.toUpper = function(e) {
                                return s7(e).toUpperCase()
                            }, rd.trim = function(e, t, i) {
                                if ((e = s7(e)) && (i || t === r)) return tR(e);
                                if (!e || !(t = iI(t))) return e;
                                var n = tV(e),
                                    s = tV(t),
                                    o = tT(n, s),
                                    a = tL(n, s) + 1;
                                return iL(n, o, a).join("")
                            }, rd.trimEnd = function(e, t, i) {
                                if ((e = s7(e)) && (i || t === r)) return e.slice(0, tK(e) + 1);
                                if (!e || !(t = iI(t))) return e;
                                var n = tV(e),
                                    s = tL(n, tV(t)) + 1;
                                return iL(n, 0, s).join("")
                            }, rd.trimStart = function(e, t, i) {
                                if ((e = s7(e)) && (i || t === r)) return e.replace(Y, "");
                                if (!e || !(t = iI(t))) return e;
                                var n = tV(e),
                                    s = tT(n, tV(t));
                                return iL(n, s).join("")
                            }, rd.truncate = function(e, t) {
                                var i = 30,
                                    n = "...";
                                if (sK(t)) {
                                    var s = "separator" in t ? t.separator : s;
                                    i = "length" in t ? s3(t.length) : i, n = "omission" in t ? iI(t.omission) : n
                                }
                                var o = (e = s7(e)).length;
                                if (tq(e)) {
                                    var a = tV(e);
                                    o = a.length
                                }
                                if (i >= o) return e;
                                var c = i - tB(n);
                                if (c < 1) return n;
                                var u = a ? iL(a, 0, c).join("") : e.slice(0, c);
                                if (s === r) return u + n;
                                if (a && (c += u.length - c), sJ(s)) {
                                    if (e.slice(c).search(s)) {
                                        var l, h = u;
                                        for (s.global || (s = eP(s.source, s7(eo.exec(s)) + "g")), s.lastIndex = 0; l = s.exec(h);) var f = l.index;
                                        u = u.slice(0, f === r ? c : f)
                                    }
                                } else if (e.indexOf(iI(s), c) != c) {
                                    var p = u.lastIndexOf(s);
                                    p > -1 && (u = u.slice(0, p))
                                }
                                return u + n
                            }, rd.unescape = function(e) {
                                return (e = s7(e)) && z.test(e) ? e.replace($, tF) : e
                            }, rd.uniqueId = function(e) {
                                var t = ++eT;
                                return s7(e) + t
                            }, rd.upperCase = oA, rd.upperFirst = oC, rd.each = su, rd.eachRight = sl, rd.first = nW, oH(rd, (ev = {}, rF(rd, function(e, t) {
                                ej.call(rd.prototype, t) || (ev[t] = e)
                            }), ev), {
                                chain: !1
                            }), rd.VERSION = "4.17.21", ta(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
                                rd[e].placeholder = rd
                            }), ta(["drop", "take"], function(e, t) {
                                rm.prototype[e] = function(i) {
                                    i = i === r ? 1 : t5(s3(i), 0);
                                    var n = this.__filtered__ && !t ? new rm(this) : this.clone();
                                    return n.__filtered__ ? n.__takeCount__ = t6(i, n.__takeCount__) : n.__views__.push({
                                        size: t6(i, 4294967295),
                                        type: e + (n.__dir__ < 0 ? "Right" : "")
                                    }), n
                                }, rm.prototype[e + "Right"] = function(t) {
                                    return this.reverse()[e](t).reverse()
                                }
                            }), ta(["filter", "map", "takeWhile"], function(e, t) {
                                var r = t + 1,
                                    i = 1 == r || 3 == r;
                                rm.prototype[e] = function(e) {
                                    var t = this.clone();
                                    return t.__iteratees__.push({
                                        iteratee: nh(e, 3),
                                        type: r
                                    }), t.__filtered__ = t.__filtered__ || i, t
                                }
                            }), ta(["head", "last"], function(e, t) {
                                var r = "take" + (t ? "Right" : "");
                                rm.prototype[e] = function() {
                                    return this[r](1).value()[0]
                                }
                            }), ta(["initial", "tail"], function(e, t) {
                                var r = "drop" + (t ? "" : "Right");
                                rm.prototype[e] = function() {
                                    return this.__filtered__ ? new rm(this) : this[r](1)
                                }
                            }), rm.prototype.compact = function() {
                                return this.filter(oq)
                            }, rm.prototype.find = function(e) {
                                return this.filter(e).head()
                            }, rm.prototype.findLast = function(e) {
                                return this.reverse().find(e)
                            }, rm.prototype.invokeMap = ip(function(e, t) {
                                return "function" == typeof e ? new rm(this) : this.map(function(r) {
                                    return r5(r, e, t)
                                })
                            }), rm.prototype.reject = function(e) {
                                return this.filter(sO(nh(e)))
                            }, rm.prototype.slice = function(e, t) {
                                e = s3(e);
                                var i = this;
                                return i.__filtered__ && (e > 0 || t < 0) ? new rm(i) : (e < 0 ? i = i.takeRight(-e) : e && (i = i.drop(e)), t !== r && (i = (t = s3(t)) < 0 ? i.dropRight(-t) : i.take(t - e)), i)
                            }, rm.prototype.takeRightWhile = function(e) {
                                return this.reverse().takeWhile(e).reverse()
                            }, rm.prototype.toArray = function() {
                                return this.take(4294967295)
                            }, rF(rm.prototype, function(e, t) {
                                var i = /^(?:filter|find|map|reject)|While$/.test(t),
                                    n = /^(?:head|last)$/.test(t),
                                    s = rd[n ? "take" + ("last" == t ? "Right" : "") : t],
                                    o = n || /^find/.test(t);
                                s && (rd.prototype[t] = function() {
                                    var t = this.__wrapped__,
                                        a = n ? [1] : arguments,
                                        c = t instanceof rm,
                                        u = a[0],
                                        l = c || sD(t),
                                        h = function(e) {
                                            var t = s.apply(rd, tp([e], a));
                                            return n && f ? t[0] : t
                                        };
                                    l && i && "function" == typeof u && 1 != u.length && (c = l = !1);
                                    var f = this.__chain__,
                                        p = !!this.__actions__.length,
                                        d = o && !f,
                                        g = c && !p;
                                    if (!o && l) {
                                        t = g ? t : new rm(this);
                                        var y = e.apply(t, a);
                                        return y.__actions__.push({
                                            func: sn,
                                            args: [h],
                                            thisArg: r
                                        }), new rv(y, f)
                                    }
                                    return d && g ? e.apply(this, a) : (y = this.thru(h), d ? n ? y.value()[0] : y.value() : y)
                                })
                            }), ta(["pop", "push", "shift", "sort", "splice", "unshift"], function(e) {
                                var t = ex[e],
                                    r = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru",
                                    i = /^(?:pop|shift)$/.test(e);
                                rd.prototype[e] = function() {
                                    var e = arguments;
                                    if (i && !this.__chain__) {
                                        var n = this.value();
                                        return t.apply(sD(n) ? n : [], e)
                                    }
                                    return this[r](function(r) {
                                        return t.apply(sD(r) ? r : [], e)
                                    })
                                }
                            }), rF(rm.prototype, function(e, t) {
                                var r = rd[t];
                                if (r) {
                                    var i = r.name + "";
                                    ej.call(rs, i) || (rs[i] = []), rs[i].push({
                                        name: t,
                                        func: r
                                    })
                                }
                            }), rs[iX(r, 2).name] = [{
                                name: "wrapper",
                                func: r
                            }], rm.prototype.clone = function() {
                                var e = new rm(this.__wrapped__);
                                return e.__actions__ = iH(this.__actions__), e.__dir__ = this.__dir__, e.__filtered__ = this.__filtered__, e.__iteratees__ = iH(this.__iteratees__), e.__takeCount__ = this.__takeCount__, e.__views__ = iH(this.__views__), e
                            }, rm.prototype.reverse = function() {
                                if (this.__filtered__) {
                                    var e = new rm(this);
                                    e.__dir__ = -1, e.__filtered__ = !0
                                } else e = this.clone(), e.__dir__ *= -1;
                                return e
                            }, rm.prototype.value = function() {
                                var e = this.__wrapped__.value(),
                                    t = this.__dir__,
                                    r = sD(e),
                                    i = t < 0,
                                    n = r ? e.length : 0,
                                    s = function(e, t, r) {
                                        for (var i = -1, n = r.length; ++i < n;) {
                                            var s = r[i],
                                                o = s.size;
                                            switch (s.type) {
                                                case "drop":
                                                    e += o;
                                                    break;
                                                case "dropRight":
                                                    t -= o;
                                                    break;
                                                case "take":
                                                    t = t6(t, e + o);
                                                    break;
                                                case "takeRight":
                                                    e = t5(e, t - o)
                                            }
                                        }
                                        return {
                                            start: e,
                                            end: t
                                        }
                                    }(0, n, this.__views__),
                                    o = s.start,
                                    a = s.end,
                                    c = a - o,
                                    u = i ? a : o - 1,
                                    l = this.__iteratees__,
                                    h = l.length,
                                    f = 0,
                                    p = t6(c, this.__takeCount__);
                                if (!r || !i && n == c && p == c) return iN(e, this.__actions__);
                                var d = [];
                                e: for (; c-- && f < p;) {
                                    u += t;
                                    for (var g = -1, y = e[u]; ++g < h;) {
                                        var v = l[g],
                                            m = v.iteratee,
                                            b = v.type,
                                            _ = m(y);
                                        if (2 == b) y = _;
                                        else if (!_) {
                                            if (1 == b) continue e;
                                            break e
                                        }
                                    }
                                    d[f++] = y
                                }
                                return d
                            }, rd.prototype.at = ss, rd.prototype.chain = function() {
                                return si(this)
                            }, rd.prototype.commit = function() {
                                return new rv(this.value(), this.__chain__)
                            }, rd.prototype.next = function() {
                                this.__values__ === r && (this.__values__ = s6(this.value()));
                                var e = this.__index__ >= this.__values__.length,
                                    t = e ? r : this.__values__[this.__index__++];
                                return {
                                    done: e,
                                    value: t
                                }
                            }, rd.prototype.plant = function(e) {
                                for (var t, i = this; i instanceof ry;) {
                                    var n = nU(i);
                                    n.__index__ = 0, n.__values__ = r, t ? s.__wrapped__ = n : t = n;
                                    var s = n;
                                    i = i.__wrapped__
                                }
                                return s.__wrapped__ = e, t
                            }, rd.prototype.reverse = function() {
                                var e = this.__wrapped__;
                                if (e instanceof rm) {
                                    var t = e;
                                    return this.__actions__.length && (t = new rm(this)), (t = t.reverse()).__actions__.push({
                                        func: sn,
                                        args: [n1],
                                        thisArg: r
                                    }), new rv(t, this.__chain__)
                                }
                                return this.thru(n1)
                            }, rd.prototype.toJSON = rd.prototype.valueOf = rd.prototype.value = function() {
                                return iN(this.__wrapped__, this.__actions__)
                            }, rd.prototype.first = rd.prototype.head, e3 && (rd.prototype[e3] = function() {
                                return this
                            }), rd
                        }();
                    e3 ? ((e3.exports = tW)._ = tW, e2._ = tW) : e6._ = tW
                }).call(nb)
            }(n_, n_.exports);
            var nw = Object.defineProperty,
                nE = Object.defineProperties,
                nI = Object.getOwnPropertyDescriptors,
                nP = Object.getOwnPropertySymbols,
                nS = Object.prototype.hasOwnProperty,
                nO = Object.prototype.propertyIsEnumerable,
                nx = (e, t, r) => t in e ? nw(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                nN = (e, t) => {
                    for (var r in t || (t = {})) nS.call(t, r) && nx(e, r, t[r]);
                    if (nP)
                        for (var r of nP(t)) nO.call(t, r) && nx(e, r, t[r]);
                    return e
                },
                nR = (e, t) => nE(e, nI(t));

            function nA(e, t, r) {
                var i;
                let n = function(e) {
                    let [t, r] = e.split(":");
                    return {
                        namespace: t,
                        reference: r
                    }
                }(e);
                return (null == (i = t.rpcMap) ? void 0 : i[n.reference]) || `https://rpc.walletconnect.com/v1/?chainId=${n.namespace}:${n.reference}&projectId=${r}`
            }

            function nC(e) {
                return e.includes(":") ? e.split(":")[1] : e
            }

            function nj(e) {
                return e.map(e => `${e.split(":")[0]}:${e.split(":")[1]}`)
            }

            function nT(e) {
                var t, r, i, n;
                let s = {};
                if (!ex(e)) return s;
                for (let [o, a] of Object.entries(e)) {
                    let e = e_(o) ? [o] : a.chains,
                        c = a.methods || [],
                        u = a.events || [],
                        l = a.rpcMap || {},
                        h = ew(o);
                    s[h] = nR(nN(nN({}, s[h]), a), {
                        chains: ea(e, null == (t = s[h]) ? void 0 : t.chains),
                        methods: ea(c, null == (r = s[h]) ? void 0 : r.methods),
                        events: ea(u, null == (i = s[h]) ? void 0 : i.events),
                        rpcMap: nN(nN({}, l), null == (n = s[h]) ? void 0 : n.rpcMap)
                    })
                }
                return s
            }

            function nL(e) {
                return e.includes(":") ? e.split(":")[2] : e
            }

            function nD(e) {
                return "number" == typeof e ? e : e.includes("0x") ? parseInt(e, 16) : e.includes(":") ? Number(e.split(":")[1]) : Number(e)
            }
            let nk = {},
                nM = e => nk[e],
                nq = (e, t) => {
                    nk[e] = t
                };
            class n$ {
                constructor(e) {
                    this.name = "polkadot", this.namespace = e.namespace, this.events = nM("events"), this.client = nM("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(nm.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e && e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = nC(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nA(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new t2(new ng(r, nM("disableProviderPing")))
                }
            }
            class nU {
                constructor(e) {
                    this.name = "eip155", this.namespace = e.namespace, this.events = nM("events"), this.client = nM("client"), this.httpProviders = this.createHttpProviders(), this.chainId = parseInt(this.getDefaultChain())
                }
                async request(e) {
                    switch (e.request.method) {
                        case "eth_requestAccounts":
                        case "eth_accounts":
                            return this.getAccounts();
                        case "wallet_switchEthereumChain":
                            return await this.handleSwitchChain(e);
                        case "eth_chainId":
                            return parseInt(this.getDefaultChain())
                    }
                    return this.namespace.methods.includes(e.request.method) ? await this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(parseInt(e), t), this.chainId = parseInt(e), this.events.emit(nm.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId.toString();
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                createHttpProvider(e, t) {
                    let r = t || nA(`${this.name}:${e}`, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new t2(new ng(r, nM("disableProviderPing")))
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = parseInt(nC(t));
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                getHttpProvider() {
                    let e = this.chainId,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                async handleSwitchChain(e) {
                    var t, r;
                    let i = e.request.params ? null == (t = e.request.params[0]) ? void 0 : t.chainId : "0x0",
                        n = parseInt(i = i.startsWith("0x") ? i : `0x${i}`, 16);
                    if (this.isChainApproved(n)) this.setDefaultChain(`${n}`);
                    else if (this.namespace.methods.includes("wallet_switchEthereumChain")) await this.client.request({
                        topic: e.topic,
                        request: {
                            method: e.request.method,
                            params: [{
                                chainId: i
                            }]
                        },
                        chainId: null == (r = this.namespace.chains) ? void 0 : r[0]
                    }), this.setDefaultChain(`${n}`);
                    else throw Error(`Failed to switch to chain 'eip155:${n}'. The chain is not approved or the wallet does not support 'wallet_switchEthereumChain' method.`);
                    return null
                }
                isChainApproved(e) {
                    return this.namespace.chains.includes(`${this.name}:${e}`)
                }
            }
            class nz {
                constructor(e) {
                    this.name = "solana", this.namespace = e.namespace, this.events = nM("events"), this.client = nM("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(nm.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = nC(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nA(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new t2(new ng(r, nM("disableProviderPing")))
                }
            }
            class nH {
                constructor(e) {
                    this.name = "cosmos", this.namespace = e.namespace, this.events = nM("events"), this.client = nM("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(nm.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = nC(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nA(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new t2(new ng(r, nM("disableProviderPing")))
                }
            }
            class nB {
                constructor(e) {
                    this.name = "cip34", this.namespace = e.namespace, this.events = nM("events"), this.client = nM("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(nm.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        let r = this.getCardanoRPCUrl(t),
                            i = nC(t);
                        e[i] = this.createHttpProvider(i, r)
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                getCardanoRPCUrl(e) {
                    let t = this.namespace.rpcMap;
                    if (t) return t[e]
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || this.getCardanoRPCUrl(e);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new t2(new ng(r, nM("disableProviderPing")))
                }
            }
            class nV {
                constructor(e) {
                    this.name = "elrond", this.namespace = e.namespace, this.events = nM("events"), this.client = nM("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(nm.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = nC(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nA(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new t2(new ng(r, nM("disableProviderPing")))
                }
            }
            class nK {
                constructor(e) {
                    this.name = "multiversx", this.namespace = e.namespace, this.events = nM("events"), this.client = nM("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    this.httpProviders[e] || this.setHttpProvider(e, t), this.chainId = e, this.events.emit(nm.DEFAULT_CHAIN_CHANGED, `${this.name}:${e}`)
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e ? [...new Set(e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]))] : []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        let i = nC(t);
                        e[i] = this.createHttpProvider(i, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nA(e, this.namespace, this.client.core.projectId);
                    if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                    return new t2(new ng(r, nM("disableProviderPing")))
                }
            }
            class nF {
                constructor(e) {
                    this.name = "near", this.namespace = e.namespace, this.events = nM("events"), this.client = nM("client"), this.chainId = this.getDefaultChain(), this.httpProviders = this.createHttpProviders()
                }
                updateNamespace(e) {
                    this.namespace = Object.assign(this.namespace, e)
                }
                requestAccounts() {
                    return this.getAccounts()
                }
                getDefaultChain() {
                    if (this.chainId) return this.chainId;
                    if (this.namespace.defaultChain) return this.namespace.defaultChain;
                    let e = this.namespace.chains[0];
                    if (!e) throw Error("ChainId not found");
                    return e.split(":")[1]
                }
                request(e) {
                    return this.namespace.methods.includes(e.request.method) ? this.client.request(e) : this.getHttpProvider().request(e.request)
                }
                setDefaultChain(e, t) {
                    if (this.chainId = e, !this.httpProviders[e]) {
                        let r = t || nA(`${this.name}:${e}`, this.namespace);
                        if (!r) throw Error(`No RPC url provided for chainId: ${e}`);
                        this.setHttpProvider(e, r)
                    }
                    this.events.emit(nm.DEFAULT_CHAIN_CHANGED, `${this.name}:${this.chainId}`)
                }
                getAccounts() {
                    let e = this.namespace.accounts;
                    return e && e.filter(e => e.split(":")[1] === this.chainId.toString()).map(e => e.split(":")[2]) || []
                }
                createHttpProviders() {
                    let e = {};
                    return this.namespace.chains.forEach(t => {
                        var r;
                        e[t] = this.createHttpProvider(t, null == (r = this.namespace.rpcMap) ? void 0 : r[t])
                    }), e
                }
                getHttpProvider() {
                    let e = `${this.name}:${this.chainId}`,
                        t = this.httpProviders[e];
                    if (typeof t > "u") throw Error(`JSON-RPC provider for ${e} not found`);
                    return t
                }
                setHttpProvider(e, t) {
                    let r = this.createHttpProvider(e, t);
                    r && (this.httpProviders[e] = r)
                }
                createHttpProvider(e, t) {
                    let r = t || nA(e, this.namespace);
                    return typeof r > "u" ? void 0 : new t2(new ng(r, nM("disableProviderPing")))
                }
            }
            var nW = Object.defineProperty,
                nG = Object.defineProperties,
                nQ = Object.getOwnPropertyDescriptors,
                nJ = Object.getOwnPropertySymbols,
                nY = Object.prototype.hasOwnProperty,
                nZ = Object.prototype.propertyIsEnumerable,
                nX = (e, t, r) => t in e ? nW(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                n0 = (e, t) => {
                    for (var r in t || (t = {})) nY.call(t, r) && nX(e, r, t[r]);
                    if (nJ)
                        for (var r of nJ(t)) nZ.call(t, r) && nX(e, r, t[r]);
                    return e
                },
                n1 = (e, t) => nG(e, nQ(t));
            class n5 {
                constructor(e) {
                    this.events = new(s()), this.rpcProviders = {}, this.shouldAbortPairingAttempt = !1, this.maxPairingAttempts = 10, this.disableProviderPing = !1, this.providerOpts = e, this.logger = "u" > typeof e ? .logger && "string" != typeof e ? .logger ? e.logger : (0, tf.pino)((0, tf.getDefaultLoggerOptions)({
                        level: e ? .logger || ny
                    })), this.disableProviderPing = e ? .disableProviderPing || !1
                }
                static async init(e) {
                    let t = new n5(e);
                    return await t.initialize(), t
                }
                async request(e, t) {
                    let [r, i] = this.validateChain(t);
                    if (!this.session) throw Error("Please call connect() before request()");
                    return await this.getProvider(r).request({
                        request: n0({}, e),
                        chainId: `${r}:${i}`,
                        topic: this.session.topic
                    })
                }
                sendAsync(e, t, r) {
                    this.request(e, r).then(e => t(null, e)).catch(e => t(e, void 0))
                }
                async enable() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    return this.session || await this.connect({
                        namespaces: this.namespaces,
                        optionalNamespaces: this.optionalNamespaces,
                        sessionProperties: this.sessionProperties
                    }), await this.requestAccounts()
                }
                async disconnect() {
                    var e;
                    if (!this.session) throw Error("Please call connect() before enable()");
                    await this.client.disconnect({
                        topic: null == (e = this.session) ? void 0 : e.topic,
                        reason: eS("USER_DISCONNECTED")
                    }), await this.cleanup()
                }
                async connect(e) {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (this.setNamespaces(e), await this.cleanupPendingPairings(), !e.skipPairing) return await this.pair(e.pairingTopic)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                get isWalletConnect() {
                    return !0
                }
                async pair(e) {
                    this.shouldAbortPairingAttempt = !1;
                    let t = 0;
                    do {
                        if (this.shouldAbortPairingAttempt) throw Error("Pairing aborted");
                        if (t >= this.maxPairingAttempts) throw Error("Max auto pairing attempts reached");
                        let {
                            uri: r,
                            approval: i
                        } = await this.client.connect({
                            pairingTopic: e,
                            requiredNamespaces: this.namespaces,
                            optionalNamespaces: this.optionalNamespaces,
                            sessionProperties: this.sessionProperties
                        });
                        r && (this.uri = r, this.events.emit("display_uri", r)), await i().then(e => {
                            this.session = e, this.namespaces || (this.namespaces = function(e) {
                                let t = {};
                                for (let [r, i] of Object.entries(e)) {
                                    let e = i.methods || [],
                                        n = i.events || [],
                                        s = i.accounts || [],
                                        o = e_(r) ? [r] : i.chains ? i.chains : nj(i.accounts);
                                    t[r] = {
                                        chains: o,
                                        methods: e,
                                        events: n,
                                        accounts: s
                                    }
                                }
                                return t
                            }(e.namespaces), this.persist("namespaces", this.namespaces))
                        }).catch(e => {
                            if (e.message !== i5) throw e;
                            t++
                        })
                    } while (!this.session);
                    return this.onConnect(), this.session
                }
                setDefaultChain(e, t) {
                    try {
                        if (!this.session) return;
                        let [r, i] = this.validateChain(e);
                        this.getProvider(r).setDefaultChain(i, t)
                    } catch (e) {
                        if (!/Please call connect/.test(e.message)) throw e
                    }
                }
                async cleanupPendingPairings(e = {}) {
                    this.logger.info("Cleaning up inactive pairings...");
                    let t = this.client.pairing.getAll();
                    if (eO(t)) {
                        for (let r of t) e.deletePairings ? this.client.core.expirer.set(r.topic, 0) : await this.client.core.relayer.subscriber.unsubscribe(r.topic);
                        this.logger.info(`Inactive pairings cleared: ${t.length}`)
                    }
                }
                abortPairingAttempt() {
                    this.shouldAbortPairingAttempt = !0
                }
                async checkStorage() {
                    if (this.namespaces = await this.getFromStore("namespaces"), this.optionalNamespaces = await this.getFromStore("optionalNamespaces") || {}, this.client.session.length) {
                        let e = this.client.session.keys.length - 1;
                        this.session = this.client.session.get(this.client.session.keys[e]), this.createProviders()
                    }
                }
                async initialize() {
                    this.logger.trace("Initialized"), await this.createClient(), await this.checkStorage(), this.registerEventListeners()
                }
                async createClient() {
                    this.client = this.providerOpts.client || await nh.init({
                        logger: this.providerOpts.logger || ny,
                        relayUrl: this.providerOpts.relayUrl || "wss://relay.walletconnect.com",
                        projectId: this.providerOpts.projectId,
                        metadata: this.providerOpts.metadata,
                        storageOptions: this.providerOpts.storageOptions,
                        storage: this.providerOpts.storage,
                        name: this.providerOpts.name
                    }), this.logger.trace("SignClient Initialized")
                }
                createProviders() {
                    if (!this.client) throw Error("Sign Client not initialized");
                    if (!this.session) throw Error("Session not initialized. Please call connect() before enable()");
                    let e = [...new Set(Object.keys(this.session.namespaces).map(e => ew(e)))];
                    nq("client", this.client), nq("events", this.events), nq("disableProviderPing", this.disableProviderPing), e.forEach(e => {
                        if (!this.session) return;
                        let t = function(e, t) {
                                let r = Object.keys(t.namespaces).filter(t => t.includes(e));
                                if (!r.length) return [];
                                let i = [];
                                return r.forEach(e => {
                                    let r = t.namespaces[e].accounts;
                                    i.push(...r)
                                }), i
                            }(e, this.session),
                            r = nj(t),
                            i = n1(n0({}, function(e = {}, t = {}) {
                                let r = nT(e),
                                    i = nT(t);
                                return n_.exports.merge(r, i)
                            }(this.namespaces, this.optionalNamespaces)[e]), {
                                accounts: t,
                                chains: r
                            });
                        switch (e) {
                            case "eip155":
                                this.rpcProviders[e] = new nU({
                                    namespace: i
                                });
                                break;
                            case "solana":
                                this.rpcProviders[e] = new nz({
                                    namespace: i
                                });
                                break;
                            case "cosmos":
                                this.rpcProviders[e] = new nH({
                                    namespace: i
                                });
                                break;
                            case "polkadot":
                                this.rpcProviders[e] = new n$({
                                    namespace: i
                                });
                                break;
                            case "cip34":
                                this.rpcProviders[e] = new nB({
                                    namespace: i
                                });
                                break;
                            case "elrond":
                                this.rpcProviders[e] = new nV({
                                    namespace: i
                                });
                                break;
                            case "multiversx":
                                this.rpcProviders[e] = new nK({
                                    namespace: i
                                });
                                break;
                            case "near":
                                this.rpcProviders[e] = new nF({
                                    namespace: i
                                })
                        }
                    })
                }
                registerEventListeners() {
                    if (typeof this.client > "u") throw Error("Sign Client is not initialized");
                    this.client.on("session_ping", e => {
                        this.events.emit("session_ping", e)
                    }), this.client.on("session_event", e => {
                        let {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        if ("accountsChanged" === r.name) {
                            let e = r.data;
                            e && eO(e) && this.events.emit("accountsChanged", e.map(nL))
                        } else if ("chainChanged" === r.name) {
                            let e = t.chainId,
                                r = t.event.data,
                                i = ew(e),
                                n = nD(e) !== nD(r) ? `${i}:${nD(r)}` : e;
                            this.onChainChanged(n)
                        } else this.events.emit(r.name, r.data);
                        this.events.emit("session_event", e)
                    }), this.client.on("session_update", ({
                        topic: e,
                        params: t
                    }) => {
                        var r;
                        let {
                            namespaces: i
                        } = t, n = null == (r = this.client) ? void 0 : r.session.get(e);
                        this.session = n1(n0({}, n), {
                            namespaces: i
                        }), this.onSessionUpdate(), this.events.emit("session_update", {
                            topic: e,
                            params: t
                        })
                    }), this.client.on("session_delete", async e => {
                        await this.cleanup(), this.events.emit("session_delete", e), this.events.emit("disconnect", n1(n0({}, eS("USER_DISCONNECTED")), {
                            data: e.topic
                        }))
                    }), this.on(nm.DEFAULT_CHAIN_CHANGED, e => {
                        this.onChainChanged(e, !0)
                    })
                }
                getProvider(e) {
                    if (!this.rpcProviders[e]) throw Error(`Provider not found: ${e}`);
                    return this.rpcProviders[e]
                }
                onSessionUpdate() {
                    Object.keys(this.rpcProviders).forEach(e => {
                        var t;
                        this.getProvider(e).updateNamespace(null == (t = this.session) ? void 0 : t.namespaces[e])
                    })
                }
                setNamespaces(e) {
                    let {
                        namespaces: t,
                        optionalNamespaces: r,
                        sessionProperties: i
                    } = e;
                    t && Object.keys(t).length && (this.namespaces = t), r && Object.keys(r).length && (this.optionalNamespaces = r), this.sessionProperties = i, this.persist("namespaces", t), this.persist("optionalNamespaces", r)
                }
                validateChain(e) {
                    let [t, r] = e ? .split(":") || ["", ""];
                    if (!this.namespaces || !Object.keys(this.namespaces).length) return [t, r];
                    if (t && !Object.keys(this.namespaces || {}).map(e => ew(e)).includes(t)) throw Error(`Namespace '${t}' is not configured. Please call connect() first with namespace config.`);
                    if (t && r) return [t, r];
                    let i = ew(Object.keys(this.namespaces)[0]),
                        n = this.rpcProviders[i].getDefaultChain();
                    return [i, n]
                }
                async requestAccounts() {
                    let [e] = this.validateChain();
                    return await this.getProvider(e).requestAccounts()
                }
                onChainChanged(e, t = !1) {
                    var r;
                    if (!this.namespaces) return;
                    let [i, n] = this.validateChain(e);
                    t || this.getProvider(i).setDefaultChain(n), (null != (r = this.namespaces[i]) ? r : this.namespaces[`${i}:${n}`]).defaultChain = n, this.persist("namespaces", this.namespaces), this.events.emit("chainChanged", n)
                }
                onConnect() {
                    this.createProviders(), this.events.emit("connect", {
                        session: this.session
                    })
                }
                async cleanup() {
                    this.session = void 0, this.namespaces = void 0, this.optionalNamespaces = void 0, this.sessionProperties = void 0, this.persist("namespaces", void 0), this.persist("optionalNamespaces", void 0), this.persist("sessionProperties", void 0), await this.cleanupPendingPairings({
                        deletePairings: !0
                    })
                }
                persist(e, t) {
                    this.client.core.storage.setItem(`${nv}/${e}`, t)
                }
                async getFromStore(e) {
                    return await this.client.core.storage.getItem(`${nv}/${e}`)
                }
            }
            let n6 = ["eth_sendTransaction", "personal_sign"],
                n2 = ["eth_accounts", "eth_requestAccounts", "eth_sendRawTransaction", "eth_sign", "eth_signTransaction", "eth_signTypedData", "eth_signTypedData_v3", "eth_signTypedData_v4", "eth_sendTransaction", "personal_sign", "wallet_switchEthereumChain", "wallet_addEthereumChain", "wallet_getPermissions", "wallet_requestPermissions", "wallet_registerOnboarding", "wallet_watchAsset", "wallet_scanQRCode"],
                n3 = ["chainChanged", "accountsChanged"],
                n9 = ["chainChanged", "accountsChanged", "message", "disconnect", "connect"];
            var n4 = Object.defineProperty,
                n8 = Object.defineProperties,
                n7 = Object.getOwnPropertyDescriptors,
                se = Object.getOwnPropertySymbols,
                st = Object.prototype.hasOwnProperty,
                sr = Object.prototype.propertyIsEnumerable,
                si = (e, t, r) => t in e ? n4(e, t, {
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                    value: r
                }) : e[t] = r,
                sn = (e, t) => {
                    for (var r in t || (t = {})) st.call(t, r) && si(e, r, t[r]);
                    if (se)
                        for (var r of se(t)) sr.call(t, r) && si(e, r, t[r]);
                    return e
                },
                ss = (e, t) => n8(e, n7(t));

            function so(e) {
                return Number(e[0].split(":")[1])
            }

            function sa(e) {
                return `0x${e.toString(16)}`
            }
            class sc {
                constructor() {
                    this.events = new n.EventEmitter, this.namespace = "eip155", this.accounts = [], this.chainId = 1, this.STORAGE_KEY = "wc@2:ethereum_provider:", this.on = (e, t) => (this.events.on(e, t), this), this.once = (e, t) => (this.events.once(e, t), this), this.removeListener = (e, t) => (this.events.removeListener(e, t), this), this.off = (e, t) => (this.events.off(e, t), this), this.parseAccount = e => this.isCompatibleChainId(e) ? this.parseAccountId(e).address : e, this.signer = {}, this.rpc = {}
                }
                static async init(e) {
                    let t = new sc;
                    return await t.initialize(e), t
                }
                async request(e) {
                    return await this.signer.request(e, this.formatChainId(this.chainId))
                }
                sendAsync(e, t) {
                    this.signer.sendAsync(e, t, this.formatChainId(this.chainId))
                }
                get connected() {
                    return !!this.signer.client && this.signer.client.core.relayer.connected
                }
                get connecting() {
                    return !!this.signer.client && this.signer.client.core.relayer.connecting
                }
                async enable() {
                    return this.session || await this.connect(), await this.request({
                        method: "eth_requestAccounts"
                    })
                }
                async connect(e) {
                    if (!this.signer.client) throw Error("Provider not initialized. Call init() first");
                    this.loadConnectOpts(e);
                    let {
                        required: t,
                        optional: r
                    } = function(e) {
                        let {
                            chains: t,
                            optionalChains: r,
                            methods: i,
                            optionalMethods: n,
                            events: s,
                            optionalEvents: o,
                            rpcMap: a
                        } = e;
                        if (!eO(t)) throw Error("Invalid chains");
                        let c = {
                                chains: t,
                                methods: i || n6,
                                events: s || n3,
                                rpcMap: sn({}, t.length ? {
                                    [so(t)]: a[so(t)]
                                } : {})
                            },
                            u = s ? .filter(e => !n3.includes(e)),
                            l = i ? .filter(e => !n6.includes(e));
                        if (!r && !o && !n && !(null != u && u.length) && !(null != l && l.length)) return {
                            required: t.length ? c : void 0
                        };
                        let h = u ? .length && l ? .length || !r,
                            f = {
                                chains: [...new Set(h ? c.chains.concat(r || []) : r)],
                                methods: [...new Set(c.methods.concat(null != n && n.length ? n : n2))],
                                events: [...new Set(c.events.concat(null != o && o.length ? o : n9))],
                                rpcMap: a
                            };
                        return {
                            required: t.length ? c : void 0,
                            optional: r.length ? f : void 0
                        }
                    }(this.rpc);
                    try {
                        let i = await new Promise(async (i, n) => {
                            var s;
                            this.rpc.showQrModal && (null == (s = this.modal) || s.subscribeModal(e => {
                                e.open || this.signer.session || (this.signer.abortPairingAttempt(), n(Error("Connection request reset. Please try again.")))
                            })), await this.signer.connect(ss(sn({
                                namespaces: sn({}, t && {
                                    [this.namespace]: t
                                })
                            }, r && {
                                optionalNamespaces: {
                                    [this.namespace]: r
                                }
                            }), {
                                pairingTopic: e ? .pairingTopic
                            })).then(e => {
                                i(e)
                            }).catch(e => {
                                n(Error(e.message))
                            })
                        });
                        if (!i) return;
                        let n = function(e, t = []) {
                            let r = [];
                            return Object.keys(e).forEach(i => {
                                if (t.length && !t.includes(i)) return;
                                let n = e[i];
                                r.push(...n.accounts)
                            }), r
                        }(i.namespaces, [this.namespace]);
                        this.setChainIds(this.rpc.chains.length ? this.rpc.chains : n), this.setAccounts(n), this.events.emit("connect", {
                            chainId: sa(this.chainId)
                        })
                    } catch (e) {
                        throw this.signer.logger.error(e), e
                    } finally {
                        this.modal && this.modal.closeModal()
                    }
                }
                async disconnect() {
                    this.session && await this.signer.disconnect(), this.reset()
                }
                get isWalletConnect() {
                    return !0
                }
                get session() {
                    return this.signer.session
                }
                registerEventListeners() {
                    this.signer.on("session_event", e => {
                        let {
                            params: t
                        } = e, {
                            event: r
                        } = t;
                        "accountsChanged" === r.name ? (this.accounts = this.parseAccounts(r.data), this.events.emit("accountsChanged", this.accounts)) : "chainChanged" === r.name ? this.setChainId(this.formatChainId(r.data)) : this.events.emit(r.name, r.data), this.events.emit("session_event", e)
                    }), this.signer.on("chainChanged", e => {
                        let t = parseInt(e);
                        this.chainId = t, this.events.emit("chainChanged", sa(this.chainId)), this.persist()
                    }), this.signer.on("session_update", e => {
                        this.events.emit("session_update", e)
                    }), this.signer.on("session_delete", e => {
                        this.reset(), this.events.emit("session_delete", e), this.events.emit("disconnect", ss(sn({}, eS("USER_DISCONNECTED")), {
                            data: e.topic,
                            name: "USER_DISCONNECTED"
                        }))
                    }), this.signer.on("display_uri", e => {
                        var t, r;
                        this.rpc.showQrModal && (null == (t = this.modal) || t.closeModal(), null == (r = this.modal) || r.openModal({
                            uri: e
                        })), this.events.emit("display_uri", e)
                    })
                }
                switchEthereumChain(e) {
                    this.request({
                        method: "wallet_switchEthereumChain",
                        params: [{
                            chainId: e.toString(16)
                        }]
                    })
                }
                isCompatibleChainId(e) {
                    return "string" == typeof e && e.startsWith(`${this.namespace}:`)
                }
                formatChainId(e) {
                    return `${this.namespace}:${e}`
                }
                parseChainId(e) {
                    return Number(e.split(":")[1])
                }
                setChainIds(e) {
                    let t = e.filter(e => this.isCompatibleChainId(e)).map(e => this.parseChainId(e));
                    t.length && (this.chainId = t[0], this.events.emit("chainChanged", sa(this.chainId)), this.persist())
                }
                setChainId(e) {
                    if (this.isCompatibleChainId(e)) {
                        let t = this.parseChainId(e);
                        this.chainId = t, this.switchEthereumChain(t)
                    }
                }
                parseAccountId(e) {
                    let [t, r, i] = e.split(":");
                    return {
                        chainId: `${t}:${r}`,
                        address: i
                    }
                }
                setAccounts(e) {
                    this.accounts = e.filter(e => this.parseChainId(this.parseAccountId(e).chainId) === this.chainId).map(e => this.parseAccountId(e).address), this.events.emit("accountsChanged", this.accounts)
                }
                getRpcConfig(e) {
                    var t, r;
                    let i = null != (t = e ? .chains) ? t : [],
                        n = null != (r = e ? .optionalChains) ? r : [],
                        s = i.concat(n);
                    if (!s.length) throw Error("No chains specified in either `chains` or `optionalChains`");
                    let o = i.length ? e ? .methods || n6 : [],
                        a = i.length ? e ? .events || n3 : [],
                        c = e ? .optionalMethods || [],
                        u = e ? .optionalEvents || [],
                        l = e ? .rpcMap || this.buildRpcMap(s, e.projectId),
                        h = e ? .qrModalOptions || void 0;
                    return {
                        chains: i ? .map(e => this.formatChainId(e)),
                        optionalChains: n.map(e => this.formatChainId(e)),
                        methods: o,
                        events: a,
                        optionalMethods: c,
                        optionalEvents: u,
                        rpcMap: l,
                        showQrModal: !!(null != e && e.showQrModal),
                        qrModalOptions: h,
                        projectId: e.projectId,
                        metadata: e.metadata
                    }
                }
                buildRpcMap(e, t) {
                    let r = {};
                    return e.forEach(e => {
                        r[e] = this.getRpcUrl(e, t)
                    }), r
                }
                async initialize(e) {
                    if (this.rpc = this.getRpcConfig(e), this.chainId = this.rpc.chains.length ? so(this.rpc.chains) : so(this.rpc.optionalChains), this.signer = await n5.init({
                            projectId: this.rpc.projectId,
                            metadata: this.rpc.metadata,
                            disableProviderPing: e.disableProviderPing,
                            relayUrl: e.relayUrl,
                            storageOptions: e.storageOptions
                        }), this.registerEventListeners(), await this.loadPersistedSession(), this.rpc.showQrModal) {
                        let e;
                        try {
                            let {
                                WalletConnectModal: t
                            } = await r.e(8465).then(r.bind(r, 78465));
                            e = t
                        } catch {
                            throw Error("To use QR modal, please install @walletconnect/modal package")
                        }
                        if (e) try {
                            this.modal = new e(sn({
                                walletConnectVersion: 2,
                                projectId: this.rpc.projectId,
                                standaloneChains: this.rpc.chains
                            }, this.rpc.qrModalOptions))
                        } catch (e) {
                            throw this.signer.logger.error(e), Error("Could not generate WalletConnectModal Instance")
                        }
                    }
                }
                loadConnectOpts(e) {
                    if (!e) return;
                    let {
                        chains: t,
                        optionalChains: r,
                        rpcMap: i
                    } = e;
                    t && eO(t) && (this.rpc.chains = t.map(e => this.formatChainId(e)), t.forEach(e => {
                        this.rpc.rpcMap[e] = i ? .[e] || this.getRpcUrl(e)
                    })), r && eO(r) && (this.rpc.optionalChains = [], this.rpc.optionalChains = r ? .map(e => this.formatChainId(e)), r.forEach(e => {
                        this.rpc.rpcMap[e] = i ? .[e] || this.getRpcUrl(e)
                    }))
                }
                getRpcUrl(e, t) {
                    var r;
                    return (null == (r = this.rpc.rpcMap) ? void 0 : r[e]) || `https://rpc.walletconnect.com/v1/?chainId=eip155:${e}&projectId=${t||this.rpc.projectId}`
                }
                async loadPersistedSession() {
                    if (!this.session) return;
                    let e = await this.signer.client.core.storage.getItem(`${this.STORAGE_KEY}/chainId`),
                        t = this.session.namespaces[`${this.namespace}:${e}`] ? this.session.namespaces[`${this.namespace}:${e}`] : this.session.namespaces[this.namespace];
                    this.setChainIds(e ? [this.formatChainId(e)] : t ? .accounts), this.setAccounts(t ? .accounts)
                }
                reset() {
                    this.chainId = 1, this.accounts = []
                }
                persist() {
                    this.session && this.signer.client.core.storage.setItem(`${this.STORAGE_KEY}/chainId`, this.chainId)
                }
                parseAccounts(e) {
                    return "string" == typeof e || e instanceof String ? [this.parseAccount(e)] : e.map(e => this.parseAccount(e))
                }
            }
            let su = sc
        },
        95097: function(e, t, r) {
            "use strict";
            r.d(t, {
                q: function() {
                    return i
                }
            });
            class i {}
        },
        13923: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                IEvents: function() {
                    return i.q
                }
            });
            var i = r(95097)
        },
        3768: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HEARTBEAT_EVENTS = t.HEARTBEAT_INTERVAL = void 0;
            let i = r(58619);
            t.HEARTBEAT_INTERVAL = i.FIVE_SECONDS, t.HEARTBEAT_EVENTS = {
                pulse: "heartbeat_pulse"
            }
        },
        7051: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(42182).__exportStar(r(3768), t)
        },
        74862: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.HeartBeat = void 0;
            let i = r(42182),
                n = r(512),
                s = r(58619),
                o = r(89219),
                a = r(7051);
            class c extends o.IHeartBeat {
                constructor(e) {
                    super(e), this.events = new n.EventEmitter, this.interval = a.HEARTBEAT_INTERVAL, this.interval = (null == e ? void 0 : e.interval) || a.HEARTBEAT_INTERVAL
                }
                static init(e) {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        let t = new c(e);
                        return yield t.init(), t
                    })
                }
                init() {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        yield this.initialize()
                    })
                }
                stop() {
                    clearInterval(this.intervalRef)
                }
                on(e, t) {
                    this.events.on(e, t)
                }
                once(e, t) {
                    this.events.once(e, t)
                }
                off(e, t) {
                    this.events.off(e, t)
                }
                removeListener(e, t) {
                    this.events.removeListener(e, t)
                }
                initialize() {
                    return i.__awaiter(this, void 0, void 0, function*() {
                        this.intervalRef = setInterval(() => this.pulse(), s.toMiliseconds(this.interval))
                    })
                }
                pulse() {
                    this.events.emit(a.HEARTBEAT_EVENTS.pulse)
                }
            }
            t.HeartBeat = c
        },
        63943: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            let i = r(42182);
            i.__exportStar(r(74862), t), i.__exportStar(r(89219), t), i.__exportStar(r(7051), t)
        },
        74684: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.IHeartBeat = void 0;
            let i = r(13923);
            class n extends i.IEvents {
                constructor(e) {
                    super()
                }
            }
            t.IHeartBeat = n
        },
        89219: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), r(42182).__exportStar(r(74684), t)
        },
        42182: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return _
                },
                __asyncGenerator: function() {
                    return b
                },
                __asyncValues: function() {
                    return w
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return S
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return P
                },
                __importStar: function() {
                    return I
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
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
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function a(e, t, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, i) {
                return new(r || (r = Promise))(function(n, s) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function f(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function p(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
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
                var i, n, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), n = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function b(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(e, t || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(e) {
                    n[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            s.push([e, t, r, i]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = n[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : l(s[0][2], r)
                    } catch (e) {
                        l(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function _(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, n) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[i](t)),
                            done: "return" === i
                        } : n ? n(t) : t
                    } : n
                }
            }

            function w(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
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

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function I(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function P(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        44623: function(e) {
            "use strict";
            e.exports = function() {
                throw Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
            }
        },
        76159: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.PINO_CUSTOM_CONTEXT_KEY = t.PINO_LOGGER_DEFAULTS = void 0, t.PINO_LOGGER_DEFAULTS = {
                level: "info"
            }, t.PINO_CUSTOM_CONTEXT_KEY = "custom_context"
        },
        72058: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.pino = void 0;
            let i = r(60907),
                n = i.__importDefault(r(90440));
            Object.defineProperty(t, "pino", {
                enumerable: !0,
                get: function() {
                    return n.default
                }
            }), i.__exportStar(r(76159), t), i.__exportStar(r(8218), t)
        },
        8218: function(e, t, r) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.generateChildLogger = t.formatChildLoggerContext = t.getLoggerContext = t.setBrowserLoggerContext = t.getBrowserLoggerContext = t.getDefaultLoggerOptions = void 0;
            let i = r(76159);

            function n(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
                return e[t] || ""
            }

            function s(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                return e[r] = t, e
            }

            function o(e, t = i.PINO_CUSTOM_CONTEXT_KEY) {
                return void 0 === e.bindings ? n(e, t) : e.bindings().context || ""
            }

            function a(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                let n = o(e, r);
                return n.trim() ? `${n}/${t}` : t
            }
            t.getDefaultLoggerOptions = function(e) {
                return Object.assign(Object.assign({}, e), {
                    level: (null == e ? void 0 : e.level) || i.PINO_LOGGER_DEFAULTS.level
                })
            }, t.getBrowserLoggerContext = n, t.setBrowserLoggerContext = s, t.getLoggerContext = o, t.formatChildLoggerContext = a, t.generateChildLogger = function(e, t, r = i.PINO_CUSTOM_CONTEXT_KEY) {
                let n = a(e, t, r);
                return s(e.child({
                    context: n
                }), n, r)
            }
        },
        60907: function(e, t, r) {
            "use strict";
            r.r(t), r.d(t, {
                __assign: function() {
                    return s
                },
                __asyncDelegator: function() {
                    return _
                },
                __asyncGenerator: function() {
                    return b
                },
                __asyncValues: function() {
                    return w
                },
                __await: function() {
                    return m
                },
                __awaiter: function() {
                    return l
                },
                __classPrivateFieldGet: function() {
                    return S
                },
                __classPrivateFieldSet: function() {
                    return O
                },
                __createBinding: function() {
                    return f
                },
                __decorate: function() {
                    return a
                },
                __exportStar: function() {
                    return p
                },
                __extends: function() {
                    return n
                },
                __generator: function() {
                    return h
                },
                __importDefault: function() {
                    return P
                },
                __importStar: function() {
                    return I
                },
                __makeTemplateObject: function() {
                    return E
                },
                __metadata: function() {
                    return u
                },
                __param: function() {
                    return c
                },
                __read: function() {
                    return g
                },
                __rest: function() {
                    return o
                },
                __spread: function() {
                    return y
                },
                __spreadArrays: function() {
                    return v
                },
                __values: function() {
                    return d
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
            var s = function() {
                return (s = Object.assign || function(e) {
                    for (var t, r = 1, i = arguments.length; r < i; r++)
                        for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                    return e
                }).apply(this, arguments)
            };

            function o(e, t) {
                var r = {};
                for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && 0 > t.indexOf(i) && (r[i] = e[i]);
                if (null != e && "function" == typeof Object.getOwnPropertySymbols)
                    for (var n = 0, i = Object.getOwnPropertySymbols(e); n < i.length; n++) 0 > t.indexOf(i[n]) && Object.prototype.propertyIsEnumerable.call(e, i[n]) && (r[i[n]] = e[i[n]]);
                return r
            }

            function a(e, t, r, i) {
                var n, s = arguments.length,
                    o = s < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, r) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, r, i);
                else
                    for (var a = e.length - 1; a >= 0; a--)(n = e[a]) && (o = (s < 3 ? n(o) : s > 3 ? n(t, r, o) : n(t, r)) || o);
                return s > 3 && o && Object.defineProperty(t, r, o), o
            }

            function c(e, t) {
                return function(r, i) {
                    t(r, i, e)
                }
            }

            function u(e, t) {
                if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
            }

            function l(e, t, r, i) {
                return new(r || (r = Promise))(function(n, s) {
                    function o(e) {
                        try {
                            c(i.next(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(e) {
                        try {
                            c(i.throw(e))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : ((t = e.value) instanceof r ? t : new r(function(e) {
                            e(t)
                        })).then(o, a)
                    }
                    c((i = i.apply(e, t || [])).next())
                })
            }

            function h(e, t) {
                var r, i, n, s, o = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function a(s) {
                    return function(a) {
                        return function(s) {
                            if (r) throw TypeError("Generator is already executing.");
                            for (; o;) try {
                                if (r = 1, i && (n = 2 & s[0] ? i.return : s[0] ? i.throw || ((n = i.return) && n.call(i), 0) : i.next) && !(n = n.call(i, s[1])).done) return n;
                                switch (i = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                                    case 0:
                                    case 1:
                                        n = s;
                                        break;
                                    case 4:
                                        return o.label++, {
                                            value: s[1],
                                            done: !1
                                        };
                                    case 5:
                                        o.label++, i = s[1], s = [0];
                                        continue;
                                    case 7:
                                        s = o.ops.pop(), o.trys.pop();
                                        continue;
                                    default:
                                        if (!(n = (n = o.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                            o = 0;
                                            continue
                                        }
                                        if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                            o.label = s[1];
                                            break
                                        }
                                        if (6 === s[0] && o.label < n[1]) {
                                            o.label = n[1], n = s;
                                            break
                                        }
                                        if (n && o.label < n[2]) {
                                            o.label = n[2], o.ops.push(s);
                                            break
                                        }
                                        n[2] && o.ops.pop(), o.trys.pop();
                                        continue
                                }
                                s = t.call(e, o)
                            } catch (e) {
                                s = [6, e], i = 0
                            } finally {
                                r = n = 0
                            }
                            if (5 & s[0]) throw s[1];
                            return {
                                value: s[0] ? s[1] : void 0,
                                done: !0
                            }
                        }([s, a])
                    }
                }
            }

            function f(e, t, r, i) {
                void 0 === i && (i = r), e[i] = t[r]
            }

            function p(e, t) {
                for (var r in e) "default" === r || t.hasOwnProperty(r) || (t[r] = e[r])
            }

            function d(e) {
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
                var i, n, s = r.call(e),
                    o = [];
                try {
                    for (;
                        (void 0 === t || t-- > 0) && !(i = s.next()).done;) o.push(i.value)
                } catch (e) {
                    n = {
                        error: e
                    }
                } finally {
                    try {
                        i && !i.done && (r = s.return) && r.call(s)
                    } finally {
                        if (n) throw n.error
                    }
                }
                return o
            }

            function y() {
                for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
                return e
            }

            function v() {
                for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
                for (var i = Array(e), n = 0, t = 0; t < r; t++)
                    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, n++) i[n] = s[o];
                return i
            }

            function m(e) {
                return this instanceof m ? (this.v = e, this) : new m(e)
            }

            function b(e, t, r) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var i, n = r.apply(e, t || []),
                    s = [];
                return i = {}, o("next"), o("throw"), o("return"), i[Symbol.asyncIterator] = function() {
                    return this
                }, i;

                function o(e) {
                    n[e] && (i[e] = function(t) {
                        return new Promise(function(r, i) {
                            s.push([e, t, r, i]) > 1 || a(e, t)
                        })
                    })
                }

                function a(e, t) {
                    try {
                        var r;
                        (r = n[e](t)).value instanceof m ? Promise.resolve(r.value.v).then(c, u) : l(s[0][2], r)
                    } catch (e) {
                        l(s[0][3], e)
                    }
                }

                function c(e) {
                    a("next", e)
                }

                function u(e) {
                    a("throw", e)
                }

                function l(e, t) {
                    e(t), s.shift(), s.length && a(s[0][0], s[0][1])
                }
            }

            function _(e) {
                var t, r;
                return t = {}, i("next"), i("throw", function(e) {
                    throw e
                }), i("return"), t[Symbol.iterator] = function() {
                    return this
                }, t;

                function i(i, n) {
                    t[i] = e[i] ? function(t) {
                        return (r = !r) ? {
                            value: m(e[i](t)),
                            done: "return" === i
                        } : n ? n(t) : t
                    } : n
                }
            }

            function w(e) {
                if (!Symbol.asyncIterator) throw TypeError("Symbol.asyncIterator is not defined.");
                var t, r = e[Symbol.asyncIterator];
                return r ? r.call(e) : (e = d(e), t = {}, i("next"), i("throw"), i("return"), t[Symbol.asyncIterator] = function() {
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

            function E(e, t) {
                return Object.defineProperty ? Object.defineProperty(e, "raw", {
                    value: t
                }) : e.raw = t, e
            }

            function I(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var r in e) Object.hasOwnProperty.call(e, r) && (t[r] = e[r]);
                return t.default = e, t
            }

            function P(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function S(e, t) {
                if (!t.has(e)) throw TypeError("attempted to get private field on non-instance");
                return t.get(e)
            }

            function O(e, t, r) {
                if (!t.has(e)) throw TypeError("attempted to set private field on non-instance");
                return t.set(e, r), r
            }
        },
        69859: function() {},
        43824: function(e, t, r) {
            "use strict";
            let i = r(67116),
                n = r(58005),
                s = r(34470),
                o = r(61820),
                a = e => null == e,
                c = Symbol("encodeFragmentIdentifier");

            function u(e) {
                if ("string" != typeof e || 1 !== e.length) throw TypeError("arrayFormatSeparator must be single character string")
            }

            function l(e, t) {
                return t.encode ? t.strict ? i(e) : encodeURIComponent(e) : e
            }

            function h(e, t) {
                return t.decode ? n(e) : e
            }

            function f(e) {
                let t = e.indexOf("#");
                return -1 !== t && (e = e.slice(0, t)), e
            }

            function p(e) {
                let t = (e = f(e)).indexOf("?");
                return -1 === t ? "" : e.slice(t + 1)
            }

            function d(e, t) {
                return t.parseNumbers && !Number.isNaN(Number(e)) && "string" == typeof e && "" !== e.trim() ? e = Number(e) : t.parseBooleans && null !== e && ("true" === e.toLowerCase() || "false" === e.toLowerCase()) && (e = "true" === e.toLowerCase()), e
            }

            function g(e, t) {
                u((t = Object.assign({
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
                                        s = "string" == typeof r && !n && h(r, e).includes(e.arrayFormatSeparator);
                                    r = s ? h(r, e) : r;
                                    let o = n || s ? r.split(e.arrayFormatSeparator).map(t => h(t, e)) : null === r ? r : h(r, e);
                                    i[t] = o
                                };
                            case "bracket-separator":
                                return (t, r, i) => {
                                    let n = /(\[\])$/.test(t);
                                    if (t = t.replace(/\[\]$/, ""), !n) {
                                        i[t] = r ? h(r, e) : r;
                                        return
                                    }
                                    let s = null === r ? [] : r.split(e.arrayFormatSeparator).map(t => h(t, e));
                                    if (void 0 === i[t]) {
                                        i[t] = s;
                                        return
                                    }
                                    i[t] = [].concat(i[t], s)
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
                    let [e, o] = s(t.decode ? n.replace(/\+/g, " ") : n, "=");
                    o = void 0 === o ? null : ["comma", "separator", "bracket-separator"].includes(t.arrayFormat) ? o : h(o, t), r(h(e, t), o, i)
                }
                for (let e of Object.keys(i)) {
                    let r = i[e];
                    if ("object" == typeof r && null !== r)
                        for (let e of Object.keys(r)) r[e] = d(r[e], t);
                    else i[e] = d(r, t)
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
                u((t = Object.assign({
                    encode: !0,
                    strict: !0,
                    arrayFormat: "none",
                    arrayFormatSeparator: ","
                }, t)).arrayFormatSeparator);
                let r = r => t.skipNull && a(e[r]) || t.skipEmptyString && "" === e[r],
                    i = function(e) {
                        switch (e.arrayFormat) {
                            case "index":
                                return t => (r, i) => {
                                    let n = r.length;
                                    return void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [l(t, e), "[", n, "]"].join("")] : [...r, [l(t, e), "[", l(n, e), "]=", l(i, e)].join("")]
                                };
                            case "bracket":
                                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [l(t, e), "[]"].join("")] : [...r, [l(t, e), "[]=", l(i, e)].join("")];
                            case "colon-list-separator":
                                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, [l(t, e), ":list="].join("")] : [...r, [l(t, e), ":list=", l(i, e)].join("")];
                            case "comma":
                            case "separator":
                            case "bracket-separator":
                                {
                                    let t = "bracket-separator" === e.arrayFormat ? "[]=" : "=";
                                    return r => (i, n) => void 0 === n || e.skipNull && null === n || e.skipEmptyString && "" === n ? i : (n = null === n ? "" : n, 0 === i.length) ? [
                                        [l(r, e), t, l(n, e)].join("")
                                    ] : [
                                        [i, l(n, e)].join(e.arrayFormatSeparator)
                                    ]
                                }
                            default:
                                return t => (r, i) => void 0 === i || e.skipNull && null === i || e.skipEmptyString && "" === i ? r : null === i ? [...r, l(t, e)] : [...r, [l(t, e), "=", l(i, e)].join("")]
                        }
                    }(t),
                    n = {};
                for (let t of Object.keys(e)) r(t) || (n[t] = e[t]);
                let s = Object.keys(n);
                return !1 !== t.sort && s.sort(t.sort), s.map(r => {
                    let n = e[r];
                    return void 0 === n ? "" : null === n ? l(r, t) : Array.isArray(n) ? 0 === n.length && "bracket-separator" === t.arrayFormat ? l(r, t) + "[]" : n.reduce(i(r), []).join("&") : l(r, t) + "=" + l(n, t)
                }).filter(e => e.length > 0).join("&")
            }, t.parseUrl = (e, t) => {
                t = Object.assign({
                    decode: !0
                }, t);
                let [r, i] = s(e, "#");
                return Object.assign({
                    url: r.split("?")[0] || "",
                    query: g(p(e), t)
                }, t && t.parseFragmentIdentifier && i ? {
                    fragmentIdentifier: h(i, t)
                } : {})
            }, t.stringifyUrl = (e, r) => {
                r = Object.assign({
                    encode: !0,
                    strict: !0,
                    [c]: !0
                }, r);
                let i = f(e.url).split("?")[0] || "",
                    n = t.extract(e.url),
                    s = Object.assign(t.parse(n, {
                        sort: !1
                    }), e.query),
                    o = t.stringify(s, r);
                o && (o = `?${o}`);
                let a = function(e) {
                    let t = "",
                        r = e.indexOf("#");
                    return -1 !== r && (t = e.slice(r)), t
                }(e.url);
                return e.fragmentIdentifier && (a = `#${r[c]?l(e.fragmentIdentifier,r):e.fragmentIdentifier}`), `${i}${o}${a}`
            }, t.pick = (e, r, i) => {
                i = Object.assign({
                    parseFragmentIdentifier: !0,
                    [c]: !1
                }, i);
                let {
                    url: n,
                    query: s,
                    fragmentIdentifier: a
                } = t.parseUrl(e, i);
                return t.stringifyUrl({
                    url: n,
                    query: o(s, r),
                    fragmentIdentifier: a
                }, i)
            }, t.exclude = (e, r, i) => {
                let n = Array.isArray(r) ? e => !r.includes(e) : (e, t) => !r(e, t);
                return t.pick(e, n, i)
            }
        },
        9366: function(e, t) {
            var r = "undefined" != typeof self ? self : this,
                i = function() {
                    function e() {
                        this.fetch = !1, this.DOMException = r.DOMException
                    }
                    return e.prototype = r, new e
                }();
            (function(e) {
                var t = {
                    searchParams: "URLSearchParams" in i,
                    iterable: "Symbol" in i && "iterator" in Symbol,
                    blob: "FileReader" in i && "Blob" in i && function() {
                        try {
                            return new Blob, !0
                        } catch (e) {
                            return !1
                        }
                    }(),
                    formData: "FormData" in i,
                    arrayBuffer: "ArrayBuffer" in i
                };
                if (t.arrayBuffer) var r = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                    n = ArrayBuffer.isView || function(e) {
                        return e && r.indexOf(Object.prototype.toString.call(e)) > -1
                    };

                function s(e) {
                    if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e)) throw TypeError("Invalid character in header field name");
                    return e.toLowerCase()
                }

                function o(e) {
                    return "string" != typeof e && (e = String(e)), e
                }

                function a(e) {
                    var r = {
                        next: function() {
                            var t = e.shift();
                            return {
                                done: void 0 === t,
                                value: t
                            }
                        }
                    };
                    return t.iterable && (r[Symbol.iterator] = function() {
                        return r
                    }), r
                }

                function c(e) {
                    this.map = {}, e instanceof c ? e.forEach(function(e, t) {
                        this.append(t, e)
                    }, this) : Array.isArray(e) ? e.forEach(function(e) {
                        this.append(e[0], e[1])
                    }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) {
                        this.append(t, e[t])
                    }, this)
                }

                function u(e) {
                    if (e.bodyUsed) return Promise.reject(TypeError("Already read"));
                    e.bodyUsed = !0
                }

                function l(e) {
                    return new Promise(function(t, r) {
                        e.onload = function() {
                            t(e.result)
                        }, e.onerror = function() {
                            r(e.error)
                        }
                    })
                }

                function h(e) {
                    var t = new FileReader,
                        r = l(t);
                    return t.readAsArrayBuffer(e), r
                }

                function f(e) {
                    if (e.slice) return e.slice(0);
                    var t = new Uint8Array(e.byteLength);
                    return t.set(new Uint8Array(e)), t.buffer
                }

                function p() {
                    return this.bodyUsed = !1, this._initBody = function(e) {
                        if (this._bodyInit = e, e) {
                            if ("string" == typeof e) this._bodyText = e;
                            else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                            else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                            else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                            else {
                                var r;
                                t.arrayBuffer && t.blob && (r = e) && DataView.prototype.isPrototypeOf(r) ? (this._bodyArrayBuffer = f(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer])) : t.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(e) || n(e)) ? this._bodyArrayBuffer = f(e) : this._bodyText = e = Object.prototype.toString.call(e)
                            }
                        } else this._bodyText = "";
                        !this.headers.get("content-type") && ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8"))
                    }, t.blob && (this.blob = function() {
                        var e = u(this);
                        if (e) return e;
                        if (this._bodyBlob) return Promise.resolve(this._bodyBlob);
                        if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer]));
                        if (!this._bodyFormData) return Promise.resolve(new Blob([this._bodyText]));
                        throw Error("could not read FormData body as blob")
                    }, this.arrayBuffer = function() {
                        return this._bodyArrayBuffer ? u(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(h)
                    }), this.text = function() {
                        var e, t, r, i = u(this);
                        if (i) return i;
                        if (this._bodyBlob) return e = this._bodyBlob, r = l(t = new FileReader), t.readAsText(e), r;
                        if (this._bodyArrayBuffer) return Promise.resolve(function(e) {
                            for (var t = new Uint8Array(e), r = Array(t.length), i = 0; i < t.length; i++) r[i] = String.fromCharCode(t[i]);
                            return r.join("")
                        }(this._bodyArrayBuffer));
                        if (!this._bodyFormData) return Promise.resolve(this._bodyText);
                        throw Error("could not read FormData body as text")
                    }, t.formData && (this.formData = function() {
                        return this.text().then(y)
                    }), this.json = function() {
                        return this.text().then(JSON.parse)
                    }, this
                }
                c.prototype.append = function(e, t) {
                    e = s(e), t = o(t);
                    var r = this.map[e];
                    this.map[e] = r ? r + ", " + t : t
                }, c.prototype.delete = function(e) {
                    delete this.map[s(e)]
                }, c.prototype.get = function(e) {
                    return e = s(e), this.has(e) ? this.map[e] : null
                }, c.prototype.has = function(e) {
                    return this.map.hasOwnProperty(s(e))
                }, c.prototype.set = function(e, t) {
                    this.map[s(e)] = o(t)
                }, c.prototype.forEach = function(e, t) {
                    for (var r in this.map) this.map.hasOwnProperty(r) && e.call(t, this.map[r], r, this)
                }, c.prototype.keys = function() {
                    var e = [];
                    return this.forEach(function(t, r) {
                        e.push(r)
                    }), a(e)
                }, c.prototype.values = function() {
                    var e = [];
                    return this.forEach(function(t) {
                        e.push(t)
                    }), a(e)
                }, c.prototype.entries = function() {
                    var e = [];
                    return this.forEach(function(t, r) {
                        e.push([r, t])
                    }), a(e)
                }, t.iterable && (c.prototype[Symbol.iterator] = c.prototype.entries);
                var d = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];

                function g(e, t) {
                    var r, i, n = (t = t || {}).body;
                    if (e instanceof g) {
                        if (e.bodyUsed) throw TypeError("Already read");
                        this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new c(e.headers)), this.method = e.method, this.mode = e.mode, this.signal = e.signal, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0)
                    } else this.url = String(e);
                    if (this.credentials = t.credentials || this.credentials || "same-origin", (t.headers || !this.headers) && (this.headers = new c(t.headers)), this.method = (i = (r = t.method || this.method || "GET").toUpperCase(), d.indexOf(i) > -1 ? i : r), this.mode = t.mode || this.mode || null, this.signal = t.signal || this.signal, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw TypeError("Body not allowed for GET or HEAD requests");
                    this._initBody(n)
                }

                function y(e) {
                    var t = new FormData;
                    return e.trim().split("&").forEach(function(e) {
                        if (e) {
                            var r = e.split("="),
                                i = r.shift().replace(/\+/g, " "),
                                n = r.join("=").replace(/\+/g, " ");
                            t.append(decodeURIComponent(i), decodeURIComponent(n))
                        }
                    }), t
                }

                function v(e, t) {
                    t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new c(t.headers), this.url = t.url || "", this._initBody(e)
                }
                g.prototype.clone = function() {
                    return new g(this, {
                        body: this._bodyInit
                    })
                }, p.call(g.prototype), p.call(v.prototype), v.prototype.clone = function() {
                    return new v(this._bodyInit, {
                        status: this.status,
                        statusText: this.statusText,
                        headers: new c(this.headers),
                        url: this.url
                    })
                }, v.error = function() {
                    var e = new v(null, {
                        status: 0,
                        statusText: ""
                    });
                    return e.type = "error", e
                };
                var m = [301, 302, 303, 307, 308];
                v.redirect = function(e, t) {
                    if (-1 === m.indexOf(t)) throw RangeError("Invalid status code");
                    return new v(null, {
                        status: t,
                        headers: {
                            location: e
                        }
                    })
                }, e.DOMException = i.DOMException;
                try {
                    new e.DOMException
                } catch (t) {
                    e.DOMException = function(e, t) {
                        this.message = e, this.name = t;
                        var r = Error(e);
                        this.stack = r.stack
                    }, e.DOMException.prototype = Object.create(Error.prototype), e.DOMException.prototype.constructor = e.DOMException
                }

                function b(r, i) {
                    return new Promise(function(n, s) {
                        var o = new g(r, i);
                        if (o.signal && o.signal.aborted) return s(new e.DOMException("Aborted", "AbortError"));
                        var a = new XMLHttpRequest;

                        function u() {
                            a.abort()
                        }
                        a.onload = function() {
                            var e, t, r = {
                                status: a.status,
                                statusText: a.statusText,
                                headers: (e = a.getAllResponseHeaders() || "", t = new c, e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) {
                                    var r = e.split(":"),
                                        i = r.shift().trim();
                                    if (i) {
                                        var n = r.join(":").trim();
                                        t.append(i, n)
                                    }
                                }), t)
                            };
                            r.url = "responseURL" in a ? a.responseURL : r.headers.get("X-Request-URL"), n(new v("response" in a ? a.response : a.responseText, r))
                        }, a.onerror = function() {
                            s(TypeError("Network request failed"))
                        }, a.ontimeout = function() {
                            s(TypeError("Network request failed"))
                        }, a.onabort = function() {
                            s(new e.DOMException("Aborted", "AbortError"))
                        }, a.open(o.method, o.url, !0), "include" === o.credentials ? a.withCredentials = !0 : "omit" === o.credentials && (a.withCredentials = !1), "responseType" in a && t.blob && (a.responseType = "blob"), o.headers.forEach(function(e, t) {
                            a.setRequestHeader(t, e)
                        }), o.signal && (o.signal.addEventListener("abort", u), a.onreadystatechange = function() {
                            4 === a.readyState && o.signal.removeEventListener("abort", u)
                        }), a.send(void 0 === o._bodyInit ? null : o._bodyInit)
                    })
                }
                b.polyfill = !0, i.fetch || (i.fetch = b, i.Headers = c, i.Request = g, i.Response = v), e.Headers = c, e.Request = g, e.Response = v, e.fetch = b, Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            })({}), i.fetch.ponyfill = !0, delete i.fetch.polyfill, (t = i.fetch).default = i.fetch, t.fetch = i.fetch, t.Headers = i.Headers, t.Request = i.Request, t.Response = i.Response, e.exports = t
        },
        512: function(e) {
            "use strict";
            var t, r = "object" == typeof Reflect ? Reflect : null,
                i = r && "function" == typeof r.apply ? r.apply : function(e, t, r) {
                    return Function.prototype.apply.call(e, t, r)
                };
            t = r && "function" == typeof r.ownKeys ? r.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            } : function(e) {
                return Object.getOwnPropertyNames(e)
            };
            var n = Number.isNaN || function(e) {
                return e != e
            };

            function s() {
                s.init.call(this)
            }
            e.exports = s, e.exports.once = function(e, t) {
                return new Promise(function(r, i) {
                    function n(r) {
                        e.removeListener(t, s), i(r)
                    }

                    function s() {
                        "function" == typeof e.removeListener && e.removeListener("error", n), r([].slice.call(arguments))
                    }
                    g(e, t, s, {
                        once: !0
                    }), "error" !== t && "function" == typeof e.on && g(e, "error", n, {
                        once: !0
                    })
                })
            }, s.EventEmitter = s, s.prototype._events = void 0, s.prototype._eventsCount = 0, s.prototype._maxListeners = void 0;
            var o = 10;

            function a(e) {
                if ("function" != typeof e) throw TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
            }

            function c(e) {
                return void 0 === e._maxListeners ? s.defaultMaxListeners : e._maxListeners
            }

            function u(e, t, r, i) {
                if (a(r), void 0 === (s = e._events) ? (s = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== s.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), s = e._events), o = s[t]), void 0 === o) o = s[t] = r, ++e._eventsCount;
                else if ("function" == typeof o ? o = s[t] = i ? [r, o] : [o, r] : i ? o.unshift(r) : o.push(r), (n = c(e)) > 0 && o.length > n && !o.warned) {
                    o.warned = !0;
                    var n, s, o, u = Error("Possible EventEmitter memory leak detected. " + o.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    u.name = "MaxListenersExceededWarning", u.emitter = e, u.type = t, u.count = o.length, console && console.warn && console.warn(u)
                }
                return e
            }

            function l() {
                if (!this.fired) return (this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 == arguments.length) ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function h(e, t, r) {
                var i = {
                        fired: !1,
                        wrapFn: void 0,
                        target: e,
                        type: t,
                        listener: r
                    },
                    n = l.bind(i);
                return n.listener = r, i.wrapFn = n, n
            }

            function f(e, t, r) {
                var i = e._events;
                if (void 0 === i) return [];
                var n = i[t];
                return void 0 === n ? [] : "function" == typeof n ? r ? [n.listener || n] : [n] : r ? function(e) {
                    for (var t = Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
                    return t
                }(n) : d(n, n.length)
            }

            function p(e) {
                var t = this._events;
                if (void 0 !== t) {
                    var r = t[e];
                    if ("function" == typeof r) return 1;
                    if (void 0 !== r) return r.length
                }
                return 0
            }

            function d(e, t) {
                for (var r = Array(t), i = 0; i < t; ++i) r[i] = e[i];
                return r
            }

            function g(e, t, r, i) {
                if ("function" == typeof e.on) i.once ? e.once(t, r) : e.on(t, r);
                else if ("function" == typeof e.addEventListener) e.addEventListener(t, function n(s) {
                    i.once && e.removeEventListener(t, n), r(s)
                });
                else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e)
            }
            Object.defineProperty(s, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return o
                },
                set: function(e) {
                    if ("number" != typeof e || e < 0 || n(e)) throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                    o = e
                }
            }), s.init = function() {
                (void 0 === this._events || this._events === Object.getPrototypeOf(this)._events) && (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, s.prototype.setMaxListeners = function(e) {
                if ("number" != typeof e || e < 0 || n(e)) throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                return this._maxListeners = e, this
            }, s.prototype.getMaxListeners = function() {
                return c(this)
            }, s.prototype.emit = function(e) {
                for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
                var n = "error" === e,
                    s = this._events;
                if (void 0 !== s) n = n && void 0 === s.error;
                else if (!n) return !1;
                if (n) {
                    if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
                    var o, a = Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                    throw a.context = o, a
                }
                var c = s[e];
                if (void 0 === c) return !1;
                if ("function" == typeof c) i(c, this, t);
                else
                    for (var u = c.length, l = d(c, u), r = 0; r < u; ++r) i(l[r], this, t);
                return !0
            }, s.prototype.addListener = function(e, t) {
                return u(this, e, t, !1)
            }, s.prototype.on = s.prototype.addListener, s.prototype.prependListener = function(e, t) {
                return u(this, e, t, !0)
            }, s.prototype.once = function(e, t) {
                return a(t), this.on(e, h(this, e, t)), this
            }, s.prototype.prependOnceListener = function(e, t) {
                return a(t), this.prependListener(e, h(this, e, t)), this
            }, s.prototype.removeListener = function(e, t) {
                var r, i, n, s, o;
                if (a(t), void 0 === (i = this._events) || void 0 === (r = i[e])) return this;
                if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || t));
                else if ("function" != typeof r) {
                    for (n = -1, s = r.length - 1; s >= 0; s--)
                        if (r[s] === t || r[s].listener === t) {
                            o = r[s].listener, n = s;
                            break
                        }
                    if (n < 0) return this;
                    0 === n ? r.shift() : function(e, t) {
                        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                        e.pop()
                    }(r, n), 1 === r.length && (i[e] = r[0]), void 0 !== i.removeListener && this.emit("removeListener", e, o || t)
                }
                return this
            }, s.prototype.off = s.prototype.removeListener, s.prototype.removeAllListeners = function(e) {
                var t, r, i;
                if (void 0 === (r = this._events)) return this;
                if (void 0 === r.removeListener) return 0 == arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
                if (0 == arguments.length) {
                    var n, s = Object.keys(r);
                    for (i = 0; i < s.length; ++i) "removeListener" !== (n = s[i]) && this.removeAllListeners(n);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" == typeof(t = r[e])) this.removeListener(e, t);
                else if (void 0 !== t)
                    for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
                return this
            }, s.prototype.listeners = function(e) {
                return f(this, e, !0)
            }, s.prototype.rawListeners = function(e) {
                return f(this, e, !1)
            }, s.listenerCount = function(e, t) {
                return "function" == typeof e.listenerCount ? e.listenerCount(t) : p.call(e, t)
            }, s.prototype.listenerCount = p, s.prototype.eventNames = function() {
                return this._eventsCount > 0 ? t(this._events) : []
            }
        },
        99780: function(e, t, r) {
            e = r.nmd(e);
            var i, n, s, o = "__lodash_hash_undefined__",
                a = "[object Arguments]",
                c = "[object Array]",
                u = "[object Boolean]",
                l = "[object Date]",
                h = "[object Error]",
                f = "[object Function]",
                p = "[object Map]",
                d = "[object Number]",
                g = "[object Object]",
                y = "[object Promise]",
                v = "[object RegExp]",
                m = "[object Set]",
                b = "[object String]",
                _ = "[object WeakMap]",
                w = "[object ArrayBuffer]",
                E = "[object DataView]",
                I = /^\[object .+?Constructor\]$/,
                P = /^(?:0|[1-9]\d*)$/,
                S = {};
            S["[object Float32Array]"] = S["[object Float64Array]"] = S["[object Int8Array]"] = S["[object Int16Array]"] = S["[object Int32Array]"] = S["[object Uint8Array]"] = S["[object Uint8ClampedArray]"] = S["[object Uint16Array]"] = S["[object Uint32Array]"] = !0, S[a] = S[c] = S[w] = S[u] = S[E] = S[l] = S[h] = S[f] = S[p] = S[d] = S[g] = S[v] = S[m] = S[b] = S[_] = !1;
            var O = "object" == typeof r.g && r.g && r.g.Object === Object && r.g,
                x = "object" == typeof self && self && self.Object === Object && self,
                N = O || x || Function("return this")(),
                R = t && !t.nodeType && t,
                A = R && e && !e.nodeType && e,
                C = A && A.exports === R,
                j = C && O.process,
                T = function() {
                    try {
                        return j && j.binding && j.binding("util")
                    } catch (e) {}
                }(),
                L = T && T.isTypedArray;

            function D(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e, i) {
                    r[++t] = [i, e]
                }), r
            }

            function k(e) {
                var t = -1,
                    r = Array(e.size);
                return e.forEach(function(e) {
                    r[++t] = e
                }), r
            }
            var M = Array.prototype,
                q = Function.prototype,
                $ = Object.prototype,
                U = N["__core-js_shared__"],
                z = q.toString,
                H = $.hasOwnProperty,
                B = (i = /[^.]+$/.exec(U && U.keys && U.keys.IE_PROTO || "")) ? "Symbol(src)_1." + i : "",
                V = $.toString,
                K = RegExp("^" + z.call(H).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
                F = C ? N.Buffer : void 0,
                W = N.Symbol,
                G = N.Uint8Array,
                Q = $.propertyIsEnumerable,
                J = M.splice,
                Y = W ? W.toStringTag : void 0,
                Z = Object.getOwnPropertySymbols,
                X = F ? F.isBuffer : void 0,
                ee = (n = Object.keys, s = Object, function(e) {
                    return n(s(e))
                }),
                et = eS(N, "DataView"),
                er = eS(N, "Map"),
                ei = eS(N, "Promise"),
                en = eS(N, "Set"),
                es = eS(N, "WeakMap"),
                eo = eS(Object, "create"),
                ea = eN(et),
                ec = eN(er),
                eu = eN(ei),
                el = eN(en),
                eh = eN(es),
                ef = W ? W.prototype : void 0,
                ep = ef ? ef.valueOf : void 0;

            function ed(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function eg(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function ey(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.clear(); ++t < r;) {
                    var i = e[t];
                    this.set(i[0], i[1])
                }
            }

            function ev(e) {
                var t = -1,
                    r = null == e ? 0 : e.length;
                for (this.__data__ = new ey; ++t < r;) this.add(e[t])
            }

            function em(e) {
                var t = this.__data__ = new eg(e);
                this.size = t.size
            }

            function eb(e, t) {
                for (var r = e.length; r--;)
                    if (eR(e[r][0], t)) return r;
                return -1
            }

            function e_(e) {
                return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : Y && Y in Object(e) ? function(e) {
                    var t = H.call(e, Y),
                        r = e[Y];
                    try {
                        e[Y] = void 0;
                        var i = !0
                    } catch (e) {}
                    var n = V.call(e);
                    return i && (t ? e[Y] = r : delete e[Y]), n
                }(e) : V.call(e)
            }

            function ew(e) {
                return ek(e) && e_(e) == a
            }

            function eE(e, t, r, i, n, s) {
                var o = 1 & r,
                    a = e.length,
                    c = t.length;
                if (a != c && !(o && c > a)) return !1;
                var u = s.get(e);
                if (u && s.get(t)) return u == t;
                var l = -1,
                    h = !0,
                    f = 2 & r ? new ev : void 0;
                for (s.set(e, t), s.set(t, e); ++l < a;) {
                    var p = e[l],
                        d = t[l];
                    if (i) var g = o ? i(d, p, l, t, e, s) : i(p, d, l, e, t, s);
                    if (void 0 !== g) {
                        if (g) continue;
                        h = !1;
                        break
                    }
                    if (f) {
                        if (! function(e, t) {
                                for (var r = -1, i = null == e ? 0 : e.length; ++r < i;)
                                    if (t(e[r], r, e)) return !0;
                                return !1
                            }(t, function(e, t) {
                                if (!f.has(t) && (p === e || n(p, e, r, i, s))) return f.push(t)
                            })) {
                            h = !1;
                            break
                        }
                    } else if (!(p === d || n(p, d, r, i, s))) {
                        h = !1;
                        break
                    }
                }
                return s.delete(e), s.delete(t), h
            }

            function eI(e) {
                var t;
                return t = function(e) {
                    return null != e && eL(e.length) && !eT(e) ? function(e, t) {
                        var r, i = eC(e),
                            n = !i && eA(e),
                            s = !i && !n && ej(e),
                            o = !i && !n && !s && eM(e),
                            a = i || n || s || o,
                            c = a ? function(e, t) {
                                for (var r = -1, i = Array(e); ++r < e;) i[r] = t(r);
                                return i
                            }(e.length, String) : [],
                            u = c.length;
                        for (var l in e) H.call(e, l) && !(a && ("length" == l || s && ("offset" == l || "parent" == l) || o && ("buffer" == l || "byteLength" == l || "byteOffset" == l) || (r = null == (r = u) ? 9007199254740991 : r) && ("number" == typeof l || P.test(l)) && l > -1 && l % 1 == 0 && l < r)) && c.push(l);
                        return c
                    }(e) : function(e) {
                        if (t = e && e.constructor, e !== ("function" == typeof t && t.prototype || $)) return ee(e);
                        var t, r = [];
                        for (var i in Object(e)) H.call(e, i) && "constructor" != i && r.push(i);
                        return r
                    }(e)
                }(e), eC(e) ? t : function(e, t) {
                    for (var r = -1, i = t.length, n = e.length; ++r < i;) e[n + r] = t[r];
                    return e
                }(t, eO(e))
            }

            function eP(e, t) {
                var r, i = e.__data__;
                return ("string" == (r = typeof t) || "number" == r || "symbol" == r || "boolean" == r ? "__proto__" !== t : null === t) ? i["string" == typeof t ? "string" : "hash"] : i.map
            }

            function eS(e, t) {
                var r = null == e ? void 0 : e[t];
                return !(!eD(r) || B && B in r) && (eT(r) ? K : I).test(eN(r)) ? r : void 0
            }
            ed.prototype.clear = function() {
                this.__data__ = eo ? eo(null) : {}, this.size = 0
            }, ed.prototype.delete = function(e) {
                var t = this.has(e) && delete this.__data__[e];
                return this.size -= t ? 1 : 0, t
            }, ed.prototype.get = function(e) {
                var t = this.__data__;
                if (eo) {
                    var r = t[e];
                    return r === o ? void 0 : r
                }
                return H.call(t, e) ? t[e] : void 0
            }, ed.prototype.has = function(e) {
                var t = this.__data__;
                return eo ? void 0 !== t[e] : H.call(t, e)
            }, ed.prototype.set = function(e, t) {
                var r = this.__data__;
                return this.size += this.has(e) ? 0 : 1, r[e] = eo && void 0 === t ? o : t, this
            }, eg.prototype.clear = function() {
                this.__data__ = [], this.size = 0
            }, eg.prototype.delete = function(e) {
                var t = this.__data__,
                    r = eb(t, e);
                return !(r < 0) && (r == t.length - 1 ? t.pop() : J.call(t, r, 1), --this.size, !0)
            }, eg.prototype.get = function(e) {
                var t = this.__data__,
                    r = eb(t, e);
                return r < 0 ? void 0 : t[r][1]
            }, eg.prototype.has = function(e) {
                return eb(this.__data__, e) > -1
            }, eg.prototype.set = function(e, t) {
                var r = this.__data__,
                    i = eb(r, e);
                return i < 0 ? (++this.size, r.push([e, t])) : r[i][1] = t, this
            }, ey.prototype.clear = function() {
                this.size = 0, this.__data__ = {
                    hash: new ed,
                    map: new(er || eg),
                    string: new ed
                }
            }, ey.prototype.delete = function(e) {
                var t = eP(this, e).delete(e);
                return this.size -= t ? 1 : 0, t
            }, ey.prototype.get = function(e) {
                return eP(this, e).get(e)
            }, ey.prototype.has = function(e) {
                return eP(this, e).has(e)
            }, ey.prototype.set = function(e, t) {
                var r = eP(this, e),
                    i = r.size;
                return r.set(e, t), this.size += r.size == i ? 0 : 1, this
            }, ev.prototype.add = ev.prototype.push = function(e) {
                return this.__data__.set(e, o), this
            }, ev.prototype.has = function(e) {
                return this.__data__.has(e)
            }, em.prototype.clear = function() {
                this.__data__ = new eg, this.size = 0
            }, em.prototype.delete = function(e) {
                var t = this.__data__,
                    r = t.delete(e);
                return this.size = t.size, r
            }, em.prototype.get = function(e) {
                return this.__data__.get(e)
            }, em.prototype.has = function(e) {
                return this.__data__.has(e)
            }, em.prototype.set = function(e, t) {
                var r = this.__data__;
                if (r instanceof eg) {
                    var i = r.__data__;
                    if (!er || i.length < 199) return i.push([e, t]), this.size = ++r.size, this;
                    r = this.__data__ = new ey(i)
                }
                return r.set(e, t), this.size = r.size, this
            };
            var eO = Z ? function(e) {
                    return null == e ? [] : function(e, t) {
                        for (var r = -1, i = null == e ? 0 : e.length, n = 0, s = []; ++r < i;) {
                            var o = e[r];
                            t(o, r, e) && (s[n++] = o)
                        }
                        return s
                    }(Z(e = Object(e)), function(t) {
                        return Q.call(e, t)
                    })
                } : function() {
                    return []
                },
                ex = e_;

            function eN(e) {
                if (null != e) {
                    try {
                        return z.call(e)
                    } catch (e) {}
                    try {
                        return e + ""
                    } catch (e) {}
                }
                return ""
            }

            function eR(e, t) {
                return e === t || e != e && t != t
            }(et && ex(new et(new ArrayBuffer(1))) != E || er && ex(new er) != p || ei && ex(ei.resolve()) != y || en && ex(new en) != m || es && ex(new es) != _) && (ex = function(e) {
                var t = e_(e),
                    r = t == g ? e.constructor : void 0,
                    i = r ? eN(r) : "";
                if (i) switch (i) {
                    case ea:
                        return E;
                    case ec:
                        return p;
                    case eu:
                        return y;
                    case el:
                        return m;
                    case eh:
                        return _
                }
                return t
            });
            var eA = ew(function() {
                    return arguments
                }()) ? ew : function(e) {
                    return ek(e) && H.call(e, "callee") && !Q.call(e, "callee")
                },
                eC = Array.isArray,
                ej = X || function() {
                    return !1
                };

            function eT(e) {
                if (!eD(e)) return !1;
                var t = e_(e);
                return t == f || "[object GeneratorFunction]" == t || "[object AsyncFunction]" == t || "[object Proxy]" == t
            }

            function eL(e) {
                return "number" == typeof e && e > -1 && e % 1 == 0 && e <= 9007199254740991
            }

            function eD(e) {
                var t = typeof e;
                return null != e && ("object" == t || "function" == t)
            }

            function ek(e) {
                return null != e && "object" == typeof e
            }
            var eM = L ? function(e) {
                return L(e)
            } : function(e) {
                return ek(e) && eL(e.length) && !!S[e_(e)]
            };
            e.exports = function(e, t) {
                return function e(t, r, i, n, s) {
                    return t === r || (null != t && null != r && (ek(t) || ek(r)) ? function(e, t, r, i, n, s) {
                        var o = eC(e),
                            f = eC(t),
                            y = o ? c : ex(e),
                            _ = f ? c : ex(t);
                        y = y == a ? g : y, _ = _ == a ? g : _;
                        var I = y == g,
                            P = _ == g,
                            S = y == _;
                        if (S && ej(e)) {
                            if (!ej(t)) return !1;
                            o = !0, I = !1
                        }
                        if (S && !I) return s || (s = new em), o || eM(e) ? eE(e, t, r, i, n, s) : function(e, t, r, i, n, s, o) {
                            switch (r) {
                                case E:
                                    if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) break;
                                    e = e.buffer, t = t.buffer;
                                case w:
                                    if (e.byteLength != t.byteLength || !s(new G(e), new G(t))) break;
                                    return !0;
                                case u:
                                case l:
                                case d:
                                    return eR(+e, +t);
                                case h:
                                    return e.name == t.name && e.message == t.message;
                                case v:
                                case b:
                                    return e == t + "";
                                case p:
                                    var a = D;
                                case m:
                                    var c = 1 & i;
                                    if (a || (a = k), e.size != t.size && !c) break;
                                    var f = o.get(e);
                                    if (f) return f == t;
                                    i |= 2, o.set(e, t);
                                    var g = eE(a(e), a(t), i, n, s, o);
                                    return o.delete(e), g;
                                case "[object Symbol]":
                                    if (ep) return ep.call(e) == ep.call(t)
                            }
                            return !1
                        }(e, t, y, r, i, n, s);
                        if (!(1 & r)) {
                            var O = I && H.call(e, "__wrapped__"),
                                x = P && H.call(t, "__wrapped__");
                            if (O || x) {
                                var N = O ? e.value() : e,
                                    R = x ? t.value() : t;
                                return s || (s = new em), n(N, R, r, i, s)
                            }
                        }
                        return !!S && (s || (s = new em), function(e, t, r, i, n, s) {
                            var o = 1 & r,
                                a = eI(e),
                                c = a.length;
                            if (c != eI(t).length && !o) return !1;
                            for (var u = c; u--;) {
                                var l = a[u];
                                if (!(o ? l in t : H.call(t, l))) return !1
                            }
                            var h = s.get(e);
                            if (h && s.get(t)) return h == t;
                            var f = !0;
                            s.set(e, t), s.set(t, e);
                            for (var p = o; ++u < c;) {
                                var d = e[l = a[u]],
                                    g = t[l];
                                if (i) var y = o ? i(g, d, l, t, e, s) : i(d, g, l, e, t, s);
                                if (!(void 0 === y ? d === g || n(d, g, r, i, s) : y)) {
                                    f = !1;
                                    break
                                }
                                p || (p = "constructor" == l)
                            }
                            if (f && !p) {
                                var v = e.constructor,
                                    m = t.constructor;
                                v != m && "constructor" in e && "constructor" in t && !("function" == typeof v && v instanceof v && "function" == typeof m && m instanceof m) && (f = !1)
                            }
                            return s.delete(e), s.delete(t), f
                        }(e, t, r, i, n, s))
                    }(t, r, i, n, e, s) : t != t && r != r)
                }(e, t)
            }
        },
        45503: function(e) {
            "use strict";

            function t(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return '"[Circular]"'
                }
            }
            e.exports = function(e, r, i) {
                var n = i && i.stringify || t;
                if ("object" == typeof e && null !== e) {
                    var s = r.length + 1;
                    if (1 === s) return e;
                    var o = Array(s);
                    o[0] = n(e);
                    for (var a = 1; a < s; a++) o[a] = n(r[a]);
                    return o.join(" ")
                }
                if ("string" != typeof e) return e;
                var c = r.length;
                if (0 === c) return e;
                for (var u = "", l = 0, h = -1, f = e && e.length || 0, p = 0; p < f;) {
                    if (37 === e.charCodeAt(p) && p + 1 < f) {
                        switch (h = h > -1 ? h : 0, e.charCodeAt(p + 1)) {
                            case 100:
                            case 102:
                                if (l >= c || null == r[l]) break;
                                h < p && (u += e.slice(h, p)), u += Number(r[l]), h = p + 2, p++;
                                break;
                            case 105:
                                if (l >= c || null == r[l]) break;
                                h < p && (u += e.slice(h, p)), u += Math.floor(Number(r[l])), h = p + 2, p++;
                                break;
                            case 79:
                            case 111:
                            case 106:
                                if (l >= c || void 0 === r[l]) break;
                                h < p && (u += e.slice(h, p));
                                var d = typeof r[l];
                                if ("string" === d) {
                                    u += "'" + r[l] + "'", h = p + 2, p++;
                                    break
                                }
                                if ("function" === d) {
                                    u += r[l].name || "<anonymous>", h = p + 2, p++;
                                    break
                                }
                                u += n(r[l]), h = p + 2, p++;
                                break;
                            case 115:
                                if (l >= c) break;
                                h < p && (u += e.slice(h, p)), u += String(r[l]), h = p + 2, p++;
                                break;
                            case 37:
                                h < p && (u += e.slice(h, p)), u += "%", h = p + 2, p++, l--
                        }++l
                    }++p
                }
                return -1 === h ? e : (h < f && (u += e.slice(h)), u)
            }
        },
        90440: function(e, t, r) {
            "use strict";
            let i = r(45503);
            e.exports = s;
            let n = function() {
                function e(e) {
                    return void 0 !== e && e
                }
                try {
                    if ("undefined" != typeof globalThis) return globalThis;
                    return Object.defineProperty(Object.prototype, "globalThis", {
                        get: function() {
                            return delete Object.prototype.globalThis, this.globalThis = this
                        },
                        configurable: !0
                    }), globalThis
                } catch (t) {
                    return e(self) || e(window) || e(this) || {}
                }
            }().console || {};

            function s(e) {
                var t, r;
                (e = e || {}).browser = e.browser || {};
                let i = e.browser.transmit;
                if (i && "function" != typeof i.send) throw Error("pino: transmit option must have a send function");
                let l = e.browser.write || n;
                e.browser.write && (e.browser.asObject = !0);
                let h = e.serializers || {},
                    g = Array.isArray(t = e.browser.serialize) ? t.filter(function(e) {
                        return "!stdSerializers.err" !== e
                    }) : !0 === t && Object.keys(h),
                    y = e.browser.serialize;
                Array.isArray(e.browser.serialize) && e.browser.serialize.indexOf("!stdSerializers.err") > -1 && (y = !1), "function" == typeof l && (l.error = l.fatal = l.warn = l.info = l.debug = l.trace = l), !1 === e.enabled && (e.level = "silent");
                let v = e.level || "info",
                    m = Object.create(l);
                m.log || (m.log = f), Object.defineProperty(m, "levelVal", {
                    get: function() {
                        return "silent" === this.level ? 1 / 0 : this.levels.values[this.level]
                    }
                }), Object.defineProperty(m, "level", {
                    get: function() {
                        return this._level
                    },
                    set: function(e) {
                        if ("silent" !== e && !this.levels.values[e]) throw Error("unknown level " + e);
                        this._level = e, o(b, m, "error", "log"), o(b, m, "fatal", "error"), o(b, m, "warn", "error"), o(b, m, "info", "log"), o(b, m, "debug", "log"), o(b, m, "trace", "log")
                    }
                });
                let b = {
                    transmit: i,
                    serialize: g,
                    asObject: e.browser.asObject,
                    levels: ["error", "fatal", "warn", "info", "debug", "trace"],
                    timestamp: "function" == typeof(r = e).timestamp ? r.timestamp : !1 === r.timestamp ? p : d
                };
                return m.levels = s.levels, m.level = v, m.setMaxListeners = m.getMaxListeners = m.emit = m.addListener = m.on = m.prependListener = m.once = m.prependOnceListener = m.removeListener = m.removeAllListeners = m.listeners = m.listenerCount = m.eventNames = m.write = m.flush = f, m.serializers = h, m._serialize = g, m._stdErrSerialize = y, m.child = function(t, r) {
                    if (!t) throw Error("missing bindings for child Pino");
                    r = r || {}, g && t.serializers && (r.serializers = t.serializers);
                    let n = r.serializers;
                    if (g && n) {
                        var s = Object.assign({}, h, n),
                            o = !0 === e.browser.serialize ? Object.keys(s) : g;
                        delete t.serializers, a([t], o, s, this._stdErrSerialize)
                    }

                    function l(e) {
                        this._childLevel = (0 | e._childLevel) + 1, this.error = c(e, t, "error"), this.fatal = c(e, t, "fatal"), this.warn = c(e, t, "warn"), this.info = c(e, t, "info"), this.debug = c(e, t, "debug"), this.trace = c(e, t, "trace"), s && (this.serializers = s, this._serialize = o), i && (this._logEvent = u([].concat(e._logEvent.bindings, t)))
                    }
                    return l.prototype = this, new l(this)
                }, i && (m._logEvent = u()), m
            }

            function o(e, t, r, o) {
                let c = Object.getPrototypeOf(t);
                t[r] = t.levelVal > t.levels.values[r] ? f : c[r] ? c[r] : n[r] || n[o] || f,
                    function(e, t, r) {
                        if (e.transmit || t[r] !== f) {
                            var o;
                            t[r] = (o = t[r], function() {
                                let c = e.timestamp(),
                                    l = Array(arguments.length),
                                    h = Object.getPrototypeOf && Object.getPrototypeOf(this) === n ? n : this;
                                for (var f = 0; f < l.length; f++) l[f] = arguments[f];
                                if (e.serialize && !e.asObject && a(l, this._serialize, this.serializers, this._stdErrSerialize), e.asObject ? o.call(h, function(e, t, r, n) {
                                        e._serialize && a(r, e._serialize, e.serializers, e._stdErrSerialize);
                                        let o = r.slice(),
                                            c = o[0],
                                            u = {};
                                        n && (u.time = n), u.level = s.levels.values[t];
                                        let l = (0 | e._childLevel) + 1;
                                        if (l < 1 && (l = 1), null !== c && "object" == typeof c) {
                                            for (; l-- && "object" == typeof o[0];) Object.assign(u, o.shift());
                                            c = o.length ? i(o.shift(), o) : void 0
                                        } else "string" == typeof c && (c = i(o.shift(), o));
                                        return void 0 !== c && (u.msg = c), u
                                    }(this, r, l, c)) : o.apply(h, l), e.transmit) {
                                    let i = e.transmit.level || t.level,
                                        n = s.levels.values[i],
                                        o = s.levels.values[r];
                                    if (o < n) return;
                                    (function(e, t, r) {
                                        let i = t.send,
                                            n = t.ts,
                                            s = t.methodLevel,
                                            o = t.methodValue,
                                            c = t.val,
                                            l = e._logEvent.bindings;
                                        a(r, e._serialize || Object.keys(e.serializers), e.serializers, void 0 === e._stdErrSerialize || e._stdErrSerialize), e._logEvent.ts = n, e._logEvent.messages = r.filter(function(e) {
                                            return -1 === l.indexOf(e)
                                        }), e._logEvent.level.label = s, e._logEvent.level.value = o, i(s, e._logEvent, c), e._logEvent = u(l)
                                    })(this, {
                                        ts: c,
                                        methodLevel: r,
                                        methodValue: o,
                                        transmitLevel: i,
                                        transmitValue: s.levels.values[e.transmit.level || t.level],
                                        send: e.transmit.send,
                                        val: t.levelVal
                                    }, l)
                                }
                            })
                        }
                    }(e, t, r)
            }

            function a(e, t, r, i) {
                for (let n in e)
                    if (i && e[n] instanceof Error) e[n] = s.stdSerializers.err(e[n]);
                    else if ("object" == typeof e[n] && !Array.isArray(e[n]))
                    for (let i in e[n]) t && t.indexOf(i) > -1 && i in r && (e[n][i] = r[i](e[n][i]))
            }

            function c(e, t, r) {
                return function() {
                    let i = Array(1 + arguments.length);
                    i[0] = t;
                    for (var n = 1; n < i.length; n++) i[n] = arguments[n - 1];
                    return e[r].apply(this, i)
                }
            }

            function u(e) {
                return {
                    ts: 0,
                    messages: [],
                    bindings: e || [],
                    level: {
                        label: "",
                        value: 0
                    }
                }
            }

            function l() {
                return {}
            }

            function h(e) {
                return e
            }

            function f() {}

            function p() {
                return !1
            }

            function d() {
                return Date.now()
            }
            s.levels = {
                values: {
                    fatal: 60,
                    error: 50,
                    warn: 40,
                    info: 30,
                    debug: 20,
                    trace: 10
                },
                labels: {
                    10: "trace",
                    20: "debug",
                    30: "info",
                    40: "warn",
                    50: "error",
                    60: "fatal"
                }
            }, s.stdSerializers = {
                mapHttpRequest: l,
                mapHttpResponse: l,
                wrapRequestSerializer: h,
                wrapResponseSerializer: h,
                wrapErrorSerializer: h,
                req: l,
                res: l,
                err: function(e) {
                    let t = {
                        type: e.constructor.name,
                        msg: e.message,
                        stack: e.stack
                    };
                    for (let r in e) void 0 === t[r] && (t[r] = e[r]);
                    return t
                }
            }, s.stdTimeFunctions = Object.assign({}, {
                nullTime: p,
                epochTime: d,
                unixTime: function() {
                    return Math.round(Date.now() / 1e3)
                },
                isoTime: function() {
                    return new Date(Date.now()).toISOString()
                }
            })
        }
    }
]);