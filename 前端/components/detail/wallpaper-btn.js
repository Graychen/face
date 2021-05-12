(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/detail/wallpaper-btn" ], {
    "0e00": function(e, t, n) {
        var a = n("ad4f");
        n.n(a).a;
    },
    "123e": function(e, t, n) {
        n.r(t);
        var a = n("67fb"), o = n.n(a);
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = o.a;
    },
    "455e": function(e, t, n) {
        n.r(t);
        var a = n("f138"), o = n("123e");
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        n("0e00");
        var r = n("f0c5"), l = Object(r.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = l.exports;
    },
    "67fb": function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                props: {
                    resdata: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    btnMenu: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    safeAreaHeight: {
                        type: Number,
                        default: 0
                    },
                    adClick: {
                        type: Boolean,
                        default: !1
                    },
                    userInfo: null
                },
                methods: {
                    funBtn: function(t) {
                        var n = this;
                        if (null != this.userInfo || "home" == t || "appreciate" == t) if ("pulldown" == t) 0 == this.adClick && this.IsAdVideo && this.userInfo.id != this.resdata.authorId && 0 == this.userInfo.is_vip ? this.$emit("videoAdShow", !0) : "Douyin" == this.appName ? this.meme.downloadDyImage(this.resdata.cdnurl) : this.meme.makeShow(this.storage.get("makeShow", !1), this.resdata.src, this.platform); else if ("favor" == t) {
                            var a = {
                                userId: this.userInfo.id,
                                emoticonId: this.resdata.id
                            };
                            this.meme.request("Wxapp/addCollect", a, "POST", !0, !1).then(function(e) {
                                1 == e.code && (n.meme.toast("收藏成功"), n.$emit("changeIcon", {
                                    icon: "favorfill",
                                    title: "已收藏"
                                }));
                            }).catch(function(e) {});
                        } else if ("favorfill" == t) {
                            var o = {
                                userId: this.userInfo.id,
                                emoticonId: this.resdata.id
                            };
                            this.meme.request("Wxapp/delCollect", o, "POST", !0, !1).then(function(e) {
                                1 == e.code && (n.meme.toast("取消成功"), n.$emit("changeIcon", {
                                    icon: "favor",
                                    title: "收藏"
                                }));
                            }).catch(function(e) {});
                        } else "home" == t && e.switchTab({
                            url: "/pages/index/index"
                        }); else this.$emit("changeLogin", !0);
                    }
                }
            };
            t.default = n;
        }).call(this, n("543d").default);
    },
    ad4f: function(e, t, n) {},
    f138: function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/detail/wallpaper-btn-create-component", {
    "components/detail/wallpaper-btn-create-component": function(e, t, n) {
        n("543d").createComponent(n("455e"));
    }
}, [ [ "components/detail/wallpaper-btn-create-component" ] ] ]);