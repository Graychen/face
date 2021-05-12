(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/news-message/news-message" ], {
    "04c8": function(t, e, a) {
        a.r(e);
        var n = a("d4c3"), s = a.n(n);
        for (var o in n) "default" !== o && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(o);
        e.default = s.a;
    },
    "4f49": function(t, e, a) {
        a.d(e, "b", function() {
            return n;
        }), a.d(e, "c", function() {
            return s;
        }), a.d(e, "a", function() {});
        var n = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, s = [];
    },
    6894: function(t, e, a) {
        var n = a("c0a8");
        a.n(n).a;
    },
    b84c: function(t, e, a) {
        a.r(e);
        var n = a("4f49"), s = a("04c8");
        for (var o in s) "default" !== o && function(t) {
            a.d(e, t, function() {
                return s[t];
            });
        }(o);
        a("6894");
        var c = a("f0c5"), i = Object(c.a)(s.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = i.exports;
    },
    c0a8: function(t, e, a) {},
    d06c: function(t, e, a) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("1c42"), e(a("66fd")), t(e(a("b84c")).default);
        }).call(this, a("543d").createPage);
    },
    d4c3: function(t, e, a) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                components: {
                    tuiSticky: function() {
                        a.e("components/common/sticky").then(function() {
                            return resolve(a("3e65"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    bbsHeadName: function() {
                        a.e("components/bbs/bbs-head-name").then(function() {
                            return resolve(a("9a53"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    backTop: function() {
                        a.e("components/common/back-top").then(function() {
                            return resolve(a("54c8"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    uniLoadMore: function() {
                        a.e("components/common/uni-load-more/uni-load-more").then(function() {
                            return resolve(a("5208"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                data: function() {
                    return {
                        num: 0,
                        status: "more",
                        scrollTop: 0,
                        classificationData: [ "互动消息", "系统消息" ],
                        systemData: [],
                        systemPage: 0,
                        systemTotal: 0,
                        interaction: [],
                        interactPage: 0,
                        interactTotal: 0
                    };
                },
                onLoad: function() {
                    this.changeNum(0);
                    var t = this.storage.get("message", null);
                    t && (this.systemTotal = t.systemTotal, this.interactTotal = t.interactTotal);
                },
                onPullDownRefresh: function() {
                    0 == this.num ? this.reqInteractData() : this.reqSystemData(), setTimeout(function() {
                        t.stopPullDownRefresh();
                    }, 500);
                },
                onReachBottom: function() {
                    0 == this.num ? this.getInteractData() : this.getSystemData();
                },
                onPageScroll: function(t) {
                    this.scrollTop = t.scrollTop;
                },
                methods: {
                    getInteractData: function() {
                        var t = this;
                        this.status = "loading", this.meme.request("Message/getInteractMessage", {
                            page: this.interactPage
                        }, "POST", !0, !1).then(function(e) {
                            e.data.list.length < 10 ? t.status = "noMore" : t.status = "more", t.interactPage = e.data.page, 
                            t.interaction = t.interaction.concat(e.data.list), t.updateMessage(e.data.message);
                        }).catch(function(t) {});
                    },
                    getSystemData: function() {
                        var t = this;
                        this.status = "loading", this.meme.request("Message/getSystemMessage", {
                            page: this.systemPage
                        }, "POST", !0, !1).then(function(e) {
                            e.data.list.length < 10 ? t.status = "noMore" : t.status = "more", t.systemPage = e.data.page, 
                            t.systemData = t.systemData.concat(e.data.list), t.updateMessage(e.data.message);
                        }).catch(function(t) {});
                    },
                    changeNum: function(t) {
                        this.num = t, 1 == t ? this.reqSystemData() : this.reqInteractData();
                    },
                    reqSystemData: function() {
                        this.systemPage = 0, this.systemData = [], this.getSystemData();
                    },
                    reqInteractData: function() {
                        this.interactPage = 0, this.interaction = [], this.getInteractData();
                    },
                    updateMessage: function(t) {
                        this.storage.put("message", t), this.systemTotal = t.systemTotal, this.interactTotal = t.interactTotal;
                    },
                    preImage: function(t) {
                        this.meme.preViewImage(t);
                    },
                    toPage: function(e) {
                        t.navigateTo({
                            url: "/pages/dynamic-detail/dynamic-detail?id=" + e
                        });
                    }
                }
            };
            e.default = n;
        }).call(this, a("543d").default);
    }
}, [ [ "d06c", "common/runtime", "common/vendor" ] ] ]);