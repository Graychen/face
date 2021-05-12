(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/make/poup-pic" ], {
    "3c5c": function(e, t, o) {
        var n = o("ead5");
        o.n(n).a;
    },
    "70fbb": function(e, t, o) {
        o.r(t);
        var n = o("f39a"), i = o("7fb2");
        for (var a in i) "default" !== a && function(e) {
            o.d(t, e, function() {
                return i[e];
            });
        }(a);
        o("3c5c");
        var c = o("f0c5"), s = Object(c.a)(i.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        t.default = s.exports;
    },
    "7fb2": function(e, t, o) {
        o.r(t);
        var n = o("dbc0"), i = o.n(n);
        for (var a in n) "default" !== a && function(e) {
            o.d(t, e, function() {
                return n[e];
            });
        }(a);
        t.default = i.a;
    },
    dbc0: function(e, t, o) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = {
                props: {
                    popupKey: {
                        type: Boolean,
                        default: !1
                    },
                    imgInfo: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    makeText: {
                        type: String,
                        default: ""
                    },
                    score: {
                        type: Number,
                        default: 0
                    },
                    adClick: {
                        type: Boolean,
                        default: !1
                    },
                    userInfo: null
                },
                data: function() {
                    return {
                        imgsrc: null,
                        confirm: !1
                    };
                },
                methods: {
                    videoAdShow: function() {
                        this.IsAdVideo ? this.$emit("videoAdShow", !0) : e.navigateTo({
                            url: "/pages/user/task/task"
                        });
                    },
                    close: function() {
                        this.$emit("popupClose", !1);
                    },
                    addText: function() {
                        e.navigateTo({
                            url: "/pages/add-text/add-text?id=" + this.imgInfo.id
                        }), this.$emit("popupClose", !1);
                    },
                    make: function() {
                        var t = this;
                        if (this.makeText) {
                            var o = this.storage.get("cacheUpData", null);
                            if (o && this.makeText == o.text && this.imgInfo.id == o.id) return void ("Douyin" == this.appName ? this.meme.downloadDyImage(this.imgsrc) : this.meme.makeShow(this.storage.get("makeShow", !1), this.imgsrc, this.platform));
                            if (this.score < 1 && 0 == this.adClick) return void (this.IsAdVideo ? this.$emit("videoAdShow", "notscore") : e.showModal({
                                content: "积分不足",
                                confirmText: "去赚积分",
                                success: function(t) {
                                    t.confirm && e.navigateTo({
                                        url: "/pages/user/task/task"
                                    });
                                }
                            }));
                            e.showModal({
                                content: this.adClick ? "本次免积分制作" : "确认消耗1积分兑换",
                                success: function(o) {
                                    if (o.confirm) {
                                        var n = e.upx2px(56), i = e.upx2px(500), a = i / t.imgInfo.width, c = t.imgInfo.height * a, s = {
                                            id: t.imgInfo.id,
                                            height: c,
                                            width: i,
                                            type: 1,
                                            coefficient: a,
                                            box: [ {
                                                y: c - e.upx2px(100),
                                                x: i / 2 - t.makeText.length * n / 2,
                                                size: n,
                                                color: "#000",
                                                bgColor: "transparent",
                                                text: t.makeText
                                            } ]
                                        };
                                        t.meme.request("Wxapp/make", {
                                            data: s
                                        }, "POST", !1, !1).then(function(o) {
                                            1 == o.code ? (t.imgsrc = o.data, t.storage.put("cacheUpData", {
                                                id: t.imgInfo.id,
                                                text: t.makeText
                                            }), t.$emit("deductScore", !1), "Douyin" == t.appName ? t.meme.downloadDyImage(t.imgsrc) : t.meme.makeShow(t.storage.get("makeShow", !1), t.imgsrc, t.platform)) : e.showModal({
                                                content: o.msg,
                                                showCancel: !1,
                                                confirmColor: "#5677FC",
                                                confirmText: "知道了"
                                            });
                                        }).catch(function(e) {});
                                    }
                                }
                            });
                        } else null == this.userInfo ? this.$emit("popupClose", !0) : "Douyin" == this.appName ? this.meme.downloadDyImage(this.imgInfo.cdnurl) : this.meme.makeShow(this.storage.get("makeShow", !1), this.imgInfo.src, this.platform);
                    }
                }
            };
            t.default = o;
        }).call(this, o("543d").default);
    },
    ead5: function(e, t, o) {},
    f39a: function(e, t, o) {
        o.d(t, "b", function() {
            return n;
        }), o.d(t, "c", function() {
            return i;
        }), o.d(t, "a", function() {});
        var n = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, i = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/make/poup-pic-create-component", {
    "components/make/poup-pic-create-component": function(e, t, o) {
        o("543d").createComponent(o("70fbb"));
    }
}, [ [ "components/make/poup-pic-create-component" ] ] ]);