(global.webpackJsonp = global.webpackJsonp || []).push([ [ "common/main" ], {
    3139: function(t, e, o) {},
    "5e0a": function(t, e, o) {
        o.r(e);
        var n = o("6993");
        for (var a in n) "default" !== a && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(a);
        o("5e63");
        var u = o("f0c5"), r = Object(u.a)(n.default, void 0, void 0, !1, null, null, null, !1, void 0, void 0);
        e.default = r.exports;
    },
    "5e63": function(t, e, o) {
        var n = o("3139");
        o.n(n).a;
    },
    6993: function(t, e, o) {
        o.r(e);
        var n = o("e4fd"), a = o.n(n);
        for (var u in n) "default" !== u && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(u);
        e.default = a.a;
    },
    bfb5: function(t, e, o) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            function n(t, e) {
                var o = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(t);
                    e && (n = n.filter(function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), o.push.apply(o, n);
                }
                return o;
            }
            function a(t, e, o) {
                return e in t ? Object.defineProperty(t, e, {
                    value: o,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = o, t;
            }
            o("1c42");
            var u = e(o("66fd")), r = e(o("5e0a")), f = e(o("d045")), i = e(o("5ccc")), s = e(o("e39f"));
            u.default.component("tui-modal", function() {
                o.e("components/common/modal/modal").then(function() {
                    return resolve(o("8061"));
                }.bind(null, o)).catch(o.oe);
            }), u.default.prototype.$api = {
                autoLogin: function() {
                    return new Promise(function(t, e) {
                        f.default.sendLogin(u.default.prototype.unionid).then(function(e) {
                            i.default.put("userInfo", e.userinfo), i.default.put("token", e.userinfo.token, 2505600), 
                            f.default.toast("登录成功，请重新操作"), t(e.userinfo);
                        });
                    });
                }
            }, u.default.prototype.meme = f.default, u.default.prototype.storage = i.default, 
            u.default.prototype._request = s.default, u.default.config.productionTip = !1, r.default.mpType = "app", 
            t(new u.default(function(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var o = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? n(Object(o), !0).forEach(function(e) {
                        a(t, e, o[e]);
                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : n(Object(o)).forEach(function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e));
                    });
                }
                return t;
            }({}, r.default))).$mount();
        }).call(this, o("543d").createApp);
    },
    e4fd: function(t, e, o) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = function(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }(o("66fd")), a = {
                onLaunch: function(e) {
                    var o = t.getUpdateManager();
                    o.onCheckForUpdate(function(t) {
                        console.log(t.hasUpdate);
                    }), o.onUpdateReady(function(e) {
                        t.showModal({
                            title: "更新提示",
                            content: "新版本已经准备好，请重启应用",
                            showCancel: !1,
                            confirmColor: "#5677FC",
                            confirmText: "知道了",
                            success: function(t) {
                                t.confirm && o.applyUpdate();
                            }
                        });
                    });
                    var a = this.storage.get("systemInfo", null);
                    null == a && (a = t.getSystemInfoSync(), this.storage.put("systemInfo", a)), n.default.prototype.SafeAreaHeight = 0, 
                    a.hasOwnProperty("safeAreaInsets") && a.safeAreaInsets.hasOwnProperty("top") && (n.default.prototype.SafeAreaHeight = a.safeAreaInsets.top), 
                    n.default.prototype.IsAdmin = !0, n.default.prototype.Custom = t.getMenuButtonBoundingClientRect(), 
                    n.default.prototype.CustomBar = this.Custom.bottom + this.Custom.top - a.statusBarHeight, 
                    n.default.prototype.StatusBar = a.statusBarHeight, n.default.prototype.platform = a.platform, 
                    n.default.prototype.appName = a.appName, this.meme.request("Base/getAdsId", {}, "POST", !0, !0).then(function(t) {
                        n.default.prototype.Ads = t.data, n.default.prototype.IsAudit = t.data.isAudit, 
                        n.default.prototype.IsPayment = t.data.isPay, n.default.prototype.IsAdVideo = t.data.isVideo;
                    }), n.default.prototype.unionid = e.query.uid ? e.query.uid : 0, n.default.prototype.detailid = e.query.id ? e.query.id : 0;
                },
                onShow: function() {
                    var t = this;
                    this.storage.get("token", null) && (this.meme.request("Message/getMessageNum", {}, "POST", !0, !0).then(function(e) {
                        t.storage.put("message", e.data), t.meme.setMessageNum(e.data.total);
                    }), this.meme.request("User/getUserinfo", {}, "POST", !0, !0).then(function(e) {
                        t.storage.put("userInfo", e.data), t.storage.put("token", e.data.token, 2505600);
                    }));
                },
                onHide: function() {}
            };
            e.default = a;
        }).call(this, o("543d").default);
    }
}, [ [ "bfb5", "common/runtime", "common/vendor" ] ] ]);