(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/user" ], {
    1843: function(t, e, n) {
        n.d(e, "b", function() {
            return s;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var s = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    },
    "2bb3": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var s = {
                components: {
                    userInfo: function() {
                        n.e("components/user/user-info").then(function() {
                            return resolve(n("5f8b"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    dynamic: function() {
                        n.e("components/user/dynamic").then(function() {
                            return resolve(n("127b"));
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
                        customBottom: this.Custom.bottom ? this.Custom.bottom : 70,
                        message: null,
                        userInfo: null,
                        userList: [],
                        ruleData: [],
                        userData: {}
                    };
                },
                onLoad: function() {
                    this.userList = this._request.userListData(), this.ruleData = this._request.ruleData(), 
                    !this.IsAdmin && this.IsAudit && this.userList.splice(0, 2);
                },
                onShow: function() {
                    this.__init();
                    // 在页面中定义插屏广告
let interstitialAd = null

// 在页面onLoad回调事件中创建插屏广告实例
if (wx.createInterstitialAd) {
  interstitialAd = wx.createInterstitialAd({
    adUnitId: 'adunit-f102f9529bad20d3'
  })
  interstitialAd.onLoad(() => {})
  interstitialAd.onError((err) => {})
  interstitialAd.onClose(() => {})
}

// 在适合的场景显示插屏广告
if (interstitialAd) {
  interstitialAd.show().catch((err) => {
    console.error(err)
  })
}
                },
                methods: {
                    __init: function() {
                        this.userInfo = this.storage.get("userInfo", null), this.message = this.storage.get("message", null), 
                        this.getUserData();
                    },
                    getUserData: function() {
                        var t = this;
                        this.userInfo && this.meme.request("User/getUserData", {}, "POST", !0, !0).then(function(e) {
                            t.userData = e.data, t.meme.setMessageNum(e.data.message.total), t.message.total = e.data.message.total;
                        }).catch(function(t) {});
                    },
                    clickItem: function(e) {
                        var n = this;
                        "settings" == e ? t.showModal({
                            content: "确定清除缓存数据吗？",
                            success: function(e) {
                                e.confirm && (n.userInfo = null, n.userData = {}, t.clearStorageSync());
                            }
                        }) : "order" == e ? this.meme.toApp("wx91d27dbf599dff74", "pages/order/list/list") : t.navigateTo({
                            url: e
                        });
                    },
                    setUserInfo: function(t) {
                        this.userInfo = t, this.getUserData(), this.meme.toast("登录成功");
                    }
                }
            };
            e.default = s;
        }).call(this, n("543d").default);
    },
    "34a0": function(t, e, n) {
        n.r(e);
        var s = n("1843"), o = n("d87c");
        for (var u in o) "default" !== u && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        n("7cd6");
        var a = n("f0c5"), i = Object(a.a)(o.default, s.b, s.c, !1, null, null, null, !1, s.a, void 0);
        e.default = i.exports;
    },
    "7cd6": function(t, e, n) {
        var s = n("9412");
        n.n(s).a;
    },
    9412: function(t, e, n) {},
    d49f: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("1c42"), e(n("66fd")), t(e(n("34a0")).default);
        }).call(this, n("543d").createPage);
    },
    d87c: function(t, e, n) {
        n.r(e);
        var s = n("2bb3"), o = n.n(s);
        for (var u in s) "default" !== u && function(t) {
            n.d(e, t, function() {
                return s[t];
            });
        }(u);
        e.default = o.a;
    }
}, [ [ "d49f", "common/runtime", "common/vendor" ] ] ]);