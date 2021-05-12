(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/punch-clock/punch-clock" ], {
    "2f82": function(e, t, n) {
        n.r(t);
        var o = n("4b07"), a = n.n(o);
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        t.default = a.a;
    },
    "38d3": function(e, t, n) {},
    "4b07": function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = {
                components: {
                    adsVideo: function() {
                        n.e("components/common/ads-video").then(function() {
                            return resolve(n("233e"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        userInfo: this.storage.get("userInfo", null),
                        popupKey: !1,
                        punchKey: !1,
                        timeId: null,
                        courseData: {},
                        punchData: {},
                        endTime: {
                            type: !0,
                            hours: 0,
                            minutes: 0,
                            seconds: 0
                        },
                        loadAd: !1,
                        showAd: !1,
                        IsAdVideo: this.IsAdVideo
                    };
                },
                onShow: function() {
                    var e = this;
                    Object.keys(this.punchData).length ? this.__times() : (this.courseData = this._request.courseData(), 
                    this.meme.request("Daka/index", {}, "POST", !0, !1).then(function(t) {
                        e.punchData = t.data, e.__times();
                    }));
                },
                onHide: function() {
                    this.timeId && (clearInterval(this.timeId), this.timeId = null);
                },
                methods: {
                    join: function() {
                        var e = this;
                        this.userInfo ? this.punchData.status ? this.endTime.type ? this.meme.toast("还没到打卡时间，不要急哦~") : this.meme.request("Daka/daka", {}, "POST", !0, !1).then(function(t) {
                            1 == t.code ? (e.punchKey = !0, e.punchData = t.data) : e.meme.toast(t.msg);
                        }) : (this.punchKey = !1, this.videoAdShow(!0)) : this.meme.loginModel();
                    },
                    close: function() {
                        this.popupKey = !1, this.punchKey = !1;
                    },
                    __times: function() {
                        var e = this;
                        this.timeId = setInterval(function() {
                            var t = new Date().getTime(), n = new Date(new Date(new Date().toLocaleDateString()).getTime() + 864e5 - 1).getTime(), o = (e.punchData.status ? e.punchData.expire + (e.punchData.expire >= t ? 0 : 18e6) : n) - t, a = Math.floor(o / 1e3 / 60 / 60 % 24), i = Math.floor(o / 1e3 / 60 % 60), c = Math.floor(o / 1e3 % 60);
                            e.punchData.expire + 18e6 < t && e.meme.request("Daka/index", {}, "POST", !0, !1).then(function(t) {
                                e.punchData = t.data;
                            }), e.endTime = {
                                type: e.punchData.expire >= t,
                                hours: a < 10 ? "0" + a : a,
                                minutes: i < 10 ? "0" + i : i,
                                seconds: c < 10 ? "0" + c : c
                            };
                        }, 1e3);
                    },
                    changeClock: function() {
                        var e = this;
                        this.meme.request("Daka/signUp", {}, "POST", !0, !1).then(function(t) {
                            1 == t.code ? (e.popupKey = !0, e.punchData = t.data) : e.meme.toast(t.msg);
                        });
                    },
                    videoAdShow: function(t) {
                        var n = this;
                        this.IsAdVideo ? (this.loadAd = t, this.showAd = t) : e.showModal({
                            content: "消耗1积分，参与早起打卡活动",
                            success: function(e) {
                                e.confirm && n.scoreClock();
                            }
                        });
                    },
                    scoreClock: function() {
                        var t = this;
                        this.meme.getScore().then(function(n) {
                            (n.code ? n.data.score : 0) >= 1 ? t.meme.setScore(-1, "报名早起打卡挑战赛").then(function(e) {
                                1 == e.code && t.changeClock();
                            }) : e.showModal({
                                content: "积分不足",
                                confirmText: "去赚积分",
                                success: function(t) {
                                    t.confirm && e.navigateTo({
                                        url: "/pages/user/task/task"
                                    });
                                }
                            });
                        });
                    }
                }
            };
            t.default = o;
        }).call(this, n("543d").default);
    },
    "81e9": function(e, t, n) {
        n.r(t);
        var o = n("821e"), a = n("2f82");
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        n("fc26");
        var c = n("f0c5"), u = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = u.exports;
    },
    "821e": function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
    },
    c8f2: function(e, t, n) {
        (function(e) {
            function t(e) {
                return e && e.__esModule ? e : {
                    default: e
                };
            }
            n("1c42"), t(n("66fd")), e(t(n("81e9")).default);
        }).call(this, n("543d").createPage);
    },
    fc26: function(e, t, n) {
        var o = n("38d3");
        n.n(o).a;
    }
}, [ [ "c8f2", "common/runtime", "common/vendor" ] ] ]);