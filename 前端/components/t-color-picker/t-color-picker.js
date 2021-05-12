(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/t-color-picker/t-color-picker" ], {
    "3a6a": function(t, e, r) {},
    "6a70": function(t, e, r) {
        (function(t) {
            function r(t, e) {
                return a(t) || s(t, e) || i(t, e) || o();
            }
            function o() {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
            }
            function i(t, e) {
                if (t) {
                    if ("string" == typeof t) return n(t, e);
                    var r = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Array.from(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(t, e) : void 0;
                }
            }
            function n(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var r = 0, o = new Array(e); r < e; r++) o[r] = t[r];
                return o;
            }
            function s(t, e) {
                if ("undefined" != typeof Symbol && Symbol.iterator in Object(t)) {
                    var r = [], o = !0, i = !1, n = void 0;
                    try {
                        for (var s, a = t[Symbol.iterator](); !(o = (s = a.next()).done) && (r.push(s.value), 
                        !e || r.length !== e); o = !0) ;
                    } catch (t) {
                        i = !0, n = t;
                    } finally {
                        try {
                            o || null == a.return || a.return();
                        } finally {
                            if (i) throw n;
                        }
                    }
                    return r;
                }
            }
            function a(t) {
                if (Array.isArray(t)) return t;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var h = {
                props: {
                    color: {
                        type: Object,
                        default: function() {
                            return {
                                r: 0,
                                g: 0,
                                b: 0,
                                a: 0
                            };
                        }
                    },
                    spareColor: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    }
                },
                data: function() {
                    return {
                        show: !1,
                        active: !1,
                        rgba: {
                            r: 0,
                            g: 0,
                            b: 0,
                            a: 1
                        },
                        hsb: {
                            h: 0,
                            s: 0,
                            b: 0
                        },
                        site: [ {
                            top: 0,
                            left: 0
                        }, {
                            left: 0
                        }, {
                            left: 0
                        } ],
                        index: 0,
                        bgcolor: {
                            r: 255,
                            g: 0,
                            b: 0,
                            a: 1
                        },
                        hex: "#000000",
                        mode: !0,
                        colorList: [ {
                            r: 244,
                            g: 67,
                            b: 54,
                            a: 1
                        }, {
                            r: 233,
                            g: 30,
                            b: 99,
                            a: 1
                        }, {
                            r: 156,
                            g: 39,
                            b: 176,
                            a: 1
                        }, {
                            r: 103,
                            g: 58,
                            b: 183,
                            a: 1
                        }, {
                            r: 63,
                            g: 81,
                            b: 181,
                            a: 1
                        }, {
                            r: 33,
                            g: 150,
                            b: 243,
                            a: 1
                        }, {
                            r: 3,
                            g: 169,
                            b: 244,
                            a: 1
                        }, {
                            r: 0,
                            g: 188,
                            b: 212,
                            a: 1
                        }, {
                            r: 0,
                            g: 150,
                            b: 136,
                            a: 1
                        }, {
                            r: 76,
                            g: 175,
                            b: 80,
                            a: 1
                        }, {
                            r: 139,
                            g: 195,
                            b: 74,
                            a: 1
                        }, {
                            r: 205,
                            g: 220,
                            b: 57,
                            a: 1
                        }, {
                            r: 255,
                            g: 235,
                            b: 59,
                            a: 1
                        }, {
                            r: 255,
                            g: 193,
                            b: 7,
                            a: 1
                        }, {
                            r: 255,
                            g: 152,
                            b: 0,
                            a: 1
                        }, {
                            r: 255,
                            g: 87,
                            b: 34,
                            a: 1
                        }, {
                            r: 121,
                            g: 85,
                            b: 72,
                            a: 1
                        }, {
                            r: 158,
                            g: 158,
                            b: 158,
                            a: 1
                        }, {
                            r: 0,
                            g: 0,
                            b: 0,
                            a: .5
                        }, {
                            r: 0,
                            g: 0,
                            b: 0,
                            a: 0
                        } ]
                    };
                },
                created: function() {
                    this.rgba = this.color, 0 !== this.spareColor.length && (this.colorList = this.spareColor);
                },
                methods: {
                    init: function() {
                        this.hsb = this.rgbToHex(this.rgba), this.setValue(this.rgba);
                    },
                    moveHandle: function() {},
                    open: function() {
                        var t = this;
                        this.show = !0, this.$nextTick(function() {
                            t.init(), setTimeout(function() {
                                t.active = !0, setTimeout(function() {
                                    t.getSelectorQuery();
                                }, 350);
                            }, 50);
                        });
                    },
                    close: function() {
                        var t = this;
                        this.active = !1, this.$nextTick(function() {
                            setTimeout(function() {
                                t.show = !1;
                            }, 500);
                        });
                    },
                    confirm: function() {
                        this.close(), this.$emit("confirm", {
                            rgba: this.rgba,
                            hex: this.hex
                        });
                    },
                    select: function() {
                        this.mode = !this.mode;
                    },
                    selectColor: function(t) {
                        this.setColorBySelect(t);
                    },
                    touchstart: function(t, e) {
                        var r = t.touches[0], o = r.pageX, i = r.pageY;
                        this.pageX = o, this.pageY = i, this.setPosition(o, i, e);
                    },
                    touchmove: function(t, e) {
                        var r = t.touches[0], o = r.pageX, i = r.pageY;
                        this.moveX = o, this.moveY = i, this.setPosition(o, i, e);
                    },
                    touchend: function(t, e) {},
                    setPosition: function(t, e, r) {
                        this.index = r;
                        var o = this.position[r], i = o.top, n = o.left, s = o.width, a = o.height;
                        this.site[r].left = Math.max(0, Math.min(parseInt(t - n), s)), 0 === r ? (this.site[r].top = Math.max(0, Math.min(parseInt(e - i), a)), 
                        this.hsb.s = parseInt(100 * this.site[r].left / s), this.hsb.b = parseInt(100 - 100 * this.site[r].top / a), 
                        this.setColor(), this.setValue(this.rgba)) : this.setControl(r, this.site[r].left);
                    },
                    setColor: function() {
                        var t = this.HSBToRGB(this.hsb);
                        this.rgba.r = t.r, this.rgba.g = t.g, this.rgba.b = t.b;
                    },
                    setValue: function(t) {
                        this.hex = "#" + this.rgbToHex(t);
                    },
                    setControl: function(t, e) {
                        var r = this.position[t], o = (r.top, r.left, r.width);
                        r.height, 1 === t ? (this.hsb.h = parseInt(360 * e / o), this.bgcolor = this.HSBToRGB({
                            h: this.hsb.h,
                            s: 100,
                            b: 100
                        }), this.setColor()) : this.rgba.a = (e / o).toFixed(1), this.setValue(this.rgba);
                    },
                    rgbToHex: function(t) {
                        var e = [ t.r.toString(16), t.g.toString(16), t.b.toString(16) ];
                        return e.map(function(t, r) {
                            1 == t.length && (e[r] = "0" + t);
                        }), e.join("");
                    },
                    setColorBySelect: function(t) {
                        var e = t.r, r = t.g, o = t.b, i = t.a, n = {};
                        n = {
                            r: e ? parseInt(e) : 0,
                            g: r ? parseInt(r) : 0,
                            b: o ? parseInt(o) : 0,
                            a: i || 0
                        }, this.rgba = n, this.hsb = this.rgbToHsb(n), this.changeViewByHsb();
                    },
                    changeViewByHsb: function() {
                        var t = r(this.position, 3), e = t[0], o = t[1], i = t[2];
                        this.site[0].left = parseInt(this.hsb.s * e.width / 100), this.site[0].top = parseInt((100 - this.hsb.b) * e.height / 100), 
                        this.setColor(this.hsb.h), this.setValue(this.rgba), this.bgcolor = this.HSBToRGB({
                            h: this.hsb.h,
                            s: 100,
                            b: 100
                        }), this.site[1].left = this.hsb.h / 360 * o.width, this.site[2].left = this.rgba.a * i.width;
                    },
                    HSBToRGB: function(t) {
                        var e = {}, r = Math.round(t.h), o = Math.round(255 * t.s / 100), i = Math.round(255 * t.b / 100);
                        if (0 == o) e.r = e.g = e.b = i; else {
                            var n = i, s = (255 - o) * i / 255, a = r % 60 * (n - s) / 60;
                            360 == r && (r = 0), r < 60 ? (e.r = n, e.b = s, e.g = s + a) : r < 120 ? (e.g = n, 
                            e.b = s, e.r = n - a) : r < 180 ? (e.g = n, e.r = s, e.b = s + a) : r < 240 ? (e.b = n, 
                            e.r = s, e.g = n - a) : r < 300 ? (e.b = n, e.g = s, e.r = s + a) : r < 360 ? (e.r = n, 
                            e.g = s, e.b = n - a) : (e.r = 0, e.g = 0, e.b = 0);
                        }
                        return {
                            r: Math.round(e.r),
                            g: Math.round(e.g),
                            b: Math.round(e.b)
                        };
                    },
                    rgbToHsb: function(t) {
                        var e = {
                            h: 0,
                            s: 0,
                            b: 0
                        }, r = Math.min(t.r, t.g, t.b), o = Math.max(t.r, t.g, t.b), i = o - r;
                        return e.b = o, e.s = 0 != o ? 255 * i / o : 0, 0 != e.s ? t.r == o ? e.h = (t.g - t.b) / i : t.g == o ? e.h = 2 + (t.b - t.r) / i : e.h = 4 + (t.r - t.g) / i : e.h = -1, 
                        e.h *= 60, e.h < 0 && (e.h = 0), e.s *= 100 / 255, e.b *= 100 / 255, e;
                    },
                    getSelectorQuery: function() {
                        var e = this;
                        t.createSelectorQuery().in(this).selectAll(".boxs").boundingClientRect(function(t) {
                            t && 0 !== t.length ? (e.position = t, e.setColorBySelect(e.rgba)) : setTimeout(function() {
                                return e.getSelectorQuery();
                            }, 20);
                        }).exec();
                    }
                },
                watch: {
                    spareColor: function(t) {
                        this.colorList = t;
                    }
                }
            };
            e.default = h;
        }).call(this, r("543d").default);
    },
    "7d93": function(t, e, r) {
        var o = r("3a6a");
        r.n(o).a;
    },
    "96a1": function(t, e, r) {
        r.d(e, "b", function() {
            return o;
        }), r.d(e, "c", function() {
            return i;
        }), r.d(e, "a", function() {});
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
    },
    c3e5: function(t, e, r) {
        r.r(e);
        var o = r("6a70"), i = r.n(o);
        for (var n in o) "default" !== n && function(t) {
            r.d(e, t, function() {
                return o[t];
            });
        }(n);
        e.default = i.a;
    },
    f04e: function(t, e, r) {
        r.r(e);
        var o = r("96a1"), i = r("c3e5");
        for (var n in i) "default" !== n && function(t) {
            r.d(e, t, function() {
                return i[t];
            });
        }(n);
        r("7d93");
        var s = r("f0c5"), a = Object(s.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = a.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/t-color-picker/t-color-picker-create-component", {
    "components/t-color-picker/t-color-picker-create-component": function(t, e, r) {
        r("543d").createComponent(r("f04e"));
    }
}, [ [ "components/t-color-picker/t-color-picker-create-component" ] ] ]);