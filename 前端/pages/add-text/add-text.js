(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/add-text/add-text" ], {
    "123d": function(t, i, n) {
        n.r(i);
        var o = n("2c20"), e = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(i, t, function() {
                return o[t];
            });
        }(a);
        i.default = e.a;
    },
    "2c20": function(t, i, n) {
        (function(t) {
            function o(t, i) {
                var n;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = e(t)) || i && t && "number" == typeof t.length) {
                        n && (t = n);
                        var o = 0, a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return o >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[o++]
                                };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: a
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var r, s = !0, c = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]();
                    },
                    n: function() {
                        var t = n.next();
                        return s = t.done, t;
                    },
                    e: function(t) {
                        c = !0, r = t;
                    },
                    f: function() {
                        try {
                            s || null == n.return || n.return();
                        } finally {
                            if (c) throw r;
                        }
                    }
                };
            }
            function e(t, i) {
                if (t) {
                    if ("string" == typeof t) return a(t, i);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? a(t, i) : void 0;
                }
            }
            function a(t, i) {
                (null == i || i > t.length) && (i = t.length);
                for (var n = 0, o = new Array(i); n < i; n++) o[n] = t[n];
                return o;
            }
            Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.default = void 0;
            var r = {
                components: {
                    tColorPicker: function() {
                        n.e("components/t-color-picker/t-color-picker").then(function() {
                            return resolve(n("f04e"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    adsVideo: function() {
                        n.e("components/common/ads-video").then(function() {
                            return resolve(n("233e"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        id: 0,
                        initialColor: [ "#000", "#fff", "#f00", "#0f0", "#00f" ],
                        initialBgColor: [ "transparent", "#fff", "#000", "#0f0", "#00f" ],
                        pickerColor: {
                            r: 0,
                            g: 0,
                            b: 0,
                            a: 1
                        },
                        height: 0,
                        timerId: 0,
                        bgOrFont: null,
                        chooseBox: null,
                        initInfo: {},
                        upData: {},
                        imgsrc: "",
                        imgData: {},
                        score: 0,
                        adType: 3,
                        showAd: !1,
                        loadAd: !1,
                        adClick: !1,
                        userInfo: this.storage.get("userInfo", null),
                        showLogin: !1,
                        IsAdVideo: this.IsAdVideo
                    };
                },
                onShow: function() {
                    var t = this;
                    this.meme.getScore().then(function(i) {
                        t.score = i.code ? i.data.score : 0;
                    }), this.userInfo = this.storage.get("userInfo", null);
                },
                onLoad: function(i) {
                    var n = this;
                    this.id = i.id, this.meme.request("Wxapp/getInfo", {
                        id: this.id
                    }, "POST", !0, !1).then(function(i) {
                        if (1 == i.code) {
                            n.imgData = i.data;
                            var o = t.upx2px(500), e = o / n.imgData.width;
                            n.height = n.imgData.height * e, n.upData = {
                                id: n.id,
                                height: n.height,
                                width: o,
                                type: i.data.type,
                                coefficient: e,
                                box: [ {
                                    initialNum: 0,
                                    initialBgNum: 0,
                                    y: n.height - 50,
                                    x: 50,
                                    size: 20,
                                    color: "#000",
                                    bgColor: "transparent",
                                    text: "请在下方输入文字"
                                } ]
                            }, n.initInfo = n.upData.box[0];
                        }
                    }).catch(function(t) {});
                },
                methods: {
                    touchStart: function(t) {
                        this.initInfo = this.upData.box[t], this.chooseBox = t;
                    },
                    changeView: function(t) {
                        var i = this;
                        clearTimeout(this.timerId), this.timerId = setTimeout(function() {
                            i.initInfo.x = t.detail.x, i.initInfo.y = t.detail.y;
                        }, 100);
                    },
                    open: function(t) {
                        return this.$refs.colorPicker.open(), 1 === t ? this.bgOrFont = 1 : 2 === t ? this.bgOrFont = 2 : void 0;
                    },
                    confirm: function(t) {
                        1 === this.bgOrFont ? (this.initInfo.color = t.hex, this.initInfo.initialNum = 999) : 2 === this.bgOrFont && (this.initInfo.bgColor = t.hex, 
                        this.initInfo.initialBgNum = 999);
                    },
                    clickInput: function(t) {
                        this.initInfo.text = t.detail.value, null === this.chooseBox && (this.chooseBox = 0);
                    },
                    changeSize: function(t) {
                        this.initInfo.size = t.detail.value;
                    },
                    changeColor: function(t, i) {
                        this.initInfo.initialNum = t, this.initInfo.color = i;
                    },
                    changeBgColor: function(t, i) {
                        this.initInfo.initialBgNum = t, this.initInfo.bgColor = i;
                    },
                    close: function(t) {
                        this.upData.box.splice(t, 1);
                    },
                    addBox: function() {
                        var t = this.upData.box.length, i = {
                            initialNum: 0,
                            initialBgNum: 0,
                            y: 0,
                            x: 0,
                            size: 20,
                            color: "#000",
                            bgColor: "transparent",
                            text: "请在下方输入文字"
                        };
                        return null === this.chooseBox ? this.meme.toast("您可以先改变第一个文本框文字") : 0 === t ? (this.upData.box.push(i), 
                        this.initInfo = i) : void (this.chooseBox < t && (this.upData.box[this.chooseBox] = this.initInfo, 
                        this.upData.box.push(i), this.initInfo = i));
                    },
                    videoAdShow: function(t) {
                        null == this.userInfo ? this.showLogin = !0 : (this.adType = 1, this.loadAd = t, 
                        this.showAd = t);
                    },
                    changeAd: function(t) {
                        this.loadAd = !1, this.showAd = !1, this.adClick = t;
                    },
                    newScore: function(t) {
                        this.score = t;
                    },
                    submit: function() {
                        var i = this;
                        if (null != this.userInfo) {
                            var n = this.upData.box.length;
                            if (null !== this.chooseBox && n > 0) {
                                var e, a = o(this.upData.box);
                                try {
                                    for (a.s(); !(e = a.n()).done; ) {
                                        var r = e.value;
                                        delete r.initialNum, delete r.initialBgNum;
                                    }
                                } catch (t) {
                                    a.e(t);
                                } finally {
                                    a.f();
                                }
                                var s = this.storage.get("cacheUpData", {});
                                if (JSON.stringify(s) == JSON.stringify(this.upData.box)) return void ("Douyin" == this.appName ? this.meme.downloadDyImage(this.imgsrc) : this.meme.makeShow(this.storage.get("makeShow", !1), this.imgsrc, this.platform));
                                this.score >= 1 || this.adClick ? t.showModal({
                                    content: this.adClick ? "本次免积分制作" : "确认消耗1积分兑换",
                                    success: function(t) {
                                        t.confirm && i.meme.request("Wxapp/make", {
                                            data: i.upData
                                        }, "POST", !1, !1).then(function(t) {
                                            1 == t.code ? (i.imgsrc = t.data, i.storage.put("cacheUpData", i.upData.box), i.adClick || i.meme.setScore(-1, "制作表情").then(function(t) {
                                                1 == t.code && (i.score = t.data);
                                            }), i.showAd = !1, i.adClick = !1, "Douyin" == i.appName ? i.meme.downloadDyImage(i.imgsrc) : i.meme.makeShow(i.storage.get("makeShow", !1), i.imgsrc, i.platform)) : i.meme.checkMsg(t.msg);
                                        }).catch(function(t) {});
                                    }
                                }) : this.IsAdVideo ? (this.loadAd = !0, this.adType = 3, this.showAd = "notscore") : t.showModal({
                                    content: "积分不足",
                                    confirmText: "去赚积分",
                                    success: function(i) {
                                        i.confirm && t.navigateTo({
                                            url: "/pages/user/task/task"
                                        });
                                    }
                                });
                            } else null === this.chooseBox ? this.meme.toast("当前没有更改文字") : n || this.meme.toast("当前没有添加文本框");
                        } else this.showLogin = !0;
                    },
                    handleClick: function(t) {
                        var i = this;
                        this.showLogin = !1, 1 == t.index && this.$api.autoLogin().then(function(t) {
                            i.score = t.score, i.userInfo = t;
                        });
                    }
                }
            };
            i.default = r;
        }).call(this, n("543d").default);
    },
    "67b3": function(t, i, n) {
        (function(t) {
            function i(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("1c42"), i(n("66fd")), t(i(n("9cc1")).default);
        }).call(this, n("543d").createPage);
    },
    "862d": function(t, i, n) {
        n.d(i, "b", function() {
            return e;
        }), n.d(i, "c", function() {
            return a;
        }), n.d(i, "a", function() {
            return o;
        });
        var o = {
            tColorPicker: function() {
                return n.e("components/t-color-picker/t-color-picker").then(n.bind(null, "f04e"));
            }
        }, e = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, a = [];
    },
    "9cc1": function(t, i, n) {
        n.r(i);
        var o = n("862d"), e = n("123d");
        for (var a in e) "default" !== a && function(t) {
            n.d(i, t, function() {
                return e[t];
            });
        }(a);
        n("fb28");
        var r = n("f0c5"), s = Object(r.a)(e.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        i.default = s.exports;
    },
    "9f7c": function(t, i, n) {},
    fb28: function(t, i, n) {
        var o = n("9f7c");
        n.n(o).a;
    }
}, [ [ "67b3", "common/runtime", "common/vendor" ] ] ]);