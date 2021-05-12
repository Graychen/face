(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/bbs/open-menu" ], {
    4198: function(e, n, t) {
        t.r(n);
        var i = t("c420"), o = t("5e64");
        for (var s in o) "default" !== s && function(e) {
            t.d(n, e, function() {
                return o[e];
            });
        }(s);
        var u = t("f0c5"), a = Object(u.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        n.default = a.exports;
    },
    5982: function(e, n, t) {
        (function(e) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var t = {
                props: {
                    sid: {
                        type: Number,
                        default: 0
                    },
                    uid: {
                        type: Number,
                        default: 0
                    },
                    index: {
                        type: Number,
                        default: 0
                    },
                    is_admin: {
                        type: Boolean,
                        default: !1
                    },
                    images: {
                        type: Array,
                        default: function() {
                            return [];
                        }
                    },
                    status: {
                        type: String,
                        default: function() {
                            return "normal";
                        }
                    },
                    adClick: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        userInfo: this.storage.get("userInfo", null)
                    };
                },
                methods: {
                    openMenu: function() {
                        var n = this, t = [], i = !!this.userInfo && this.userInfo.id == this.uid;
                        this.is_admin ? t = "audited" == this.status || "hidden" == this.status ? [ "审核通过", "审核失败", "删除动态" ] : [ "删除动态" ] : (t = i ? [ "删除" ] : [ "投诉" ], 
                        "Douyin" == this.appName && this.images.length && t.push("保存图片")), e.showActionSheet({
                            itemList: t,
                            itemColor: "#f00",
                            success: function(t) {
                                if (n.is_admin) "audited" != n.status && "hidden" != n.status || 2 == t.tapIndex ? n.$emit("delBbs", {
                                    sid: n.sid,
                                    index: n.index
                                }) : n.$emit("delBbs", {
                                    sid: n.sid,
                                    index: n.index,
                                    status: t.tapIndex
                                }); else if (i) n.$emit("delBbs", {
                                    sid: n.sid,
                                    index: n.index
                                }); else if (1 == t.tapIndex) {
                                    if (null == n.userInfo) return void n.meme.loginModel();
                                    0 == n.adClick && n.IsAdVideo && n.userInfo.id != n.uid && 0 == n.userInfo.is_vip ? n.$emit("videoAdShow", !0) : n.meme.downloadDyImage(n.images);
                                } else e.navigateTo({
                                    url: "/pages/report/report?type=news&id=" + n.sid
                                });
                            }
                        });
                    }
                }
            };
            n.default = t;
        }).call(this, t("543d").default);
    },
    "5e64": function(e, n, t) {
        t.r(n);
        var i = t("5982"), o = t.n(i);
        for (var s in i) "default" !== s && function(e) {
            t.d(n, e, function() {
                return i[e];
            });
        }(s);
        n.default = o.a;
    },
    c420: function(e, n, t) {
        t.d(n, "b", function() {
            return i;
        }), t.d(n, "c", function() {
            return o;
        }), t.d(n, "a", function() {});
        var i = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/bbs/open-menu-create-component", {
    "components/bbs/open-menu-create-component": function(e, n, t) {
        t("543d").createComponent(t("4198"));
    }
}, [ [ "components/bbs/open-menu-create-component" ] ] ]);