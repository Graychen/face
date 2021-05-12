(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/detail/fun-but" ], {
    "0547": function(t, e, n) {
        n.r(e);
        var i = n("a5d9"), o = n("ca36");
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        n("f917");
        var s = n("f0c5"), r = Object(s.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = r.exports;
    },
    2802: function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                props: {
                    resdata: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    imgList: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    current: {
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
                    clickBut: function(e) {
                        var n = this;
                        if (null != this.userInfo || "creative" == e || "warn" == e) {
                            if (this.imgList.hasOwnProperty("list")) var i = this.imgList.list[this.current]; else i = this.imgList;
                            if ("video" == e) t.navigateTo({
                                url: "/pages/user/task/task"
                            }); else if ("warn" == e) t.navigateTo({
                                url: "/pages/report/report?id=" + i.id
                            }); else if ("favor" == e) {
                                var o = {
                                    userId: this.userInfo.id,
                                    emoticonId: i.id
                                };
                                this.meme.request("Wxapp/addCollect", o, "POST", !0, !1).then(function(t) {
                                    1 == t.code && (n.meme.toast("收藏成功"), n.$emit("changeIcon", {
                                        icon: "favorfill",
                                        title: "已收藏"
                                    }));
                                }).catch(function(t) {});
                            } else if ("favorfill" == e) {
                                var a = {
                                    userId: this.userInfo.id,
                                    emoticonId: i.id
                                };
                                this.meme.request("Wxapp/delCollect", a, "POST", !0, !1).then(function(t) {
                                    1 == t.code && (n.meme.toast("取消成功"), n.$emit("changeIcon", {
                                        icon: "favor",
                                        title: "收藏"
                                    }));
                                }).catch(function(t) {});
                            } else "pulldown" == e ? 0 == this.adClick && this.IsAdVideo && this.userInfo.id != i.authorId && 0 == this.userInfo.is_vip ? this.$emit("videoAdShow", !0) : "Douyin" == this.appName ? this.meme.downloadDyImage(i.cdnurl) : this.meme.makeShow(this.storage.get("makeShow", !1), i.src, this.platform) : "creative" == e && t.navigateTo({
                                url: "/pages/instructions/instructions"
                            });
                        } else this.$emit("changeLogin", !0);
                    },
                    changeAdd: function() {
                        if (this.imgList.hasOwnProperty("list")) var e = this.imgList.list[this.current]; else e = this.imgList;
                        t.navigateTo({
                            url: "/pages/add-text/add-text?id=" + e.id
                        });
                    }
                }
            };
            e.default = n;
        }).call(this, n("543d").default);
    },
    a5d9: function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    },
    ca36: function(t, e, n) {
        n.r(e);
        var i = n("2802"), o = n.n(i);
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        e.default = o.a;
    },
    f119: function(t, e, n) {},
    f917: function(t, e, n) {
        var i = n("f119");
        n.n(i).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/detail/fun-but-create-component", {
    "components/detail/fun-but-create-component": function(t, e, n) {
        n("543d").createComponent(n("0547"));
    }
}, [ [ "components/detail/fun-but-create-component" ] ] ]);