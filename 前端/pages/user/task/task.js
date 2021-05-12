(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/user/task/task" ], {
    "02fa": function(e, t, n) {
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
    },
    "0b41": function(e, t, n) {
        n.r(t);
        var a = n("02fa"), o = n("98e9");
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        n("90f5");
        var u = n("f0c5"), d = Object(u.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = d.exports;
    },
    "2a84": function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var a = {
            components: {
                dailyTasks: function() {
                    n.e("components/user/task/daily-tasks").then(function() {
                        return resolve(n("8de8"));
                    }.bind(null, n)).catch(n.oe);
                },
                popupReward: function() {
                    n.e("components/user/task/popup-reward").then(function() {
                        return resolve(n("be9e"));
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
                    popupKey: !1,
                    rewardKey: !1,
                    rewardVal: 0,
                    userInfo: this.storage.get("userInfo", null),
                    loadAd: !1,
                    showAd: !1,
                    dataVal: {}
                };
            },
            onShow: function() {
                var e = this;
                this.meme.request("Task/index", {
                    appName: this.appName
                }, "POST", !0, !1).then(function(t) {
                    e.dataVal = t.data, e.dataVal.issign || (e.popupKey = !0);
                });
            },
            methods: {
                receiveRewards: function(e) {
                    var t = this;
                    this.popupKey = !0, this.rewardKey = !0, this.rewardVal = e.reward, this.meme.request("Task/addTaskReward", {
                        type: e.type
                    }, "POST", !0, !1).then(function(e) {
                        1 == e.code ? t.dataVal = e.data : t.meme.toast("领取失败");
                    });
                },
                closePopup: function(e) {
                    this.popupKey = !1, this.videoAdShow(!1), e ? this.rewardKey = !1 : this.dataVal.issign = !0;
                },
                watchAd: function() {
                    this.popupKey = !1, this.dataVal.issign = !0, this.videoAdShow(!0);
                },
                newScore: function() {
                    var e = this;
                    this.meme.request("Task/index", {}, "POST", !0, !0).then(function(t) {
                        e.dataVal = t.data;
                    });
                },
                videoAdShow: function(e) {
                    this.loadAd = e, this.showAd = e;
                }
            }
        };
        t.default = a;
    },
    "724d": function(e, t, n) {},
    "8c58": function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("1c42"), t(n("66fd")), e(t(n("0b41")).default);
        }).call(this, n("543d").createPage);
    },
    "90f5": function(e, t, n) {
        var a = n("724d");
        n.n(a).a;
    },
    "98e9": function(e, t, n) {
        n.r(t);
        var a = n("2a84"), o = n.n(a);
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = o.a;
    }
}, [ [ "8c58", "common/runtime", "common/vendor" ] ] ]);