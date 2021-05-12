(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/topic-details/topic-details" ], {
    "0461": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var o = {
                components: {
                    dynamicPro: function() {
                        n.e("components/bbs/dynamic-pro").then(function() {
                            return resolve(n("5a1f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    topic: function() {
                        n.e("components/bbs/topic").then(function() {
                            return resolve(n("e9f5"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    backTop: function() {
                        n.e("components/common/back-top").then(function() {
                            return resolve(n("54c8"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    uniLoadMore: function() {
                        n.e("components/common/uni-load-more/uni-load-more").then(function() {
                            return resolve(n("5208"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        userInfo: this.storage.get("userInfo", null),
                        status: "more",
                        scrollTop: !1,
                        page: 0,
                        order: "",
                        classification: [ {
                            id: 1,
                            name: "最新",
                            order: "id desc"
                        }, {
                            id: 2,
                            name: "热门",
                            order: "like_num desc"
                        } ],
                        activeClass: 1,
                        topicData: {}
                    };
                },
                onLoad: function(t) {
                    this.topicId = t.id, this.getTopicData();
                },
                onReachBottom: function() {
                    this.getTopicData(!0);
                },
                onPageScroll: function(e) {
                    e.scrollTop > 999 ? this.scrollTop || (this.scrollTop = !0) : this.scrollTop && (this.scrollTop = !1), 
                    e.scrollTop > t.upx2px(70) ? t.setNavigationBarTitle({
                        title: this.topicData.name
                    }) : t.setNavigationBarTitle({
                        title: ""
                    });
                },
                onShareAppMessage: function(t) {
                    var e = this, n = t.target.dataset, o = "", i = this.userInfo ? this.userInfo.id : 0, a = n.id, c = n.content;
                    return n.images.length > 0 && (o = n.images[0].src), this.meme.request("News/addShare", {
                        id: a
                    }, "POST", !0, !0).then(function(t) {
                        1 == t.code && (e.topicData.news[n.index].share += 1);
                    }).catch(function(t) {}), {
                        title: c.substring(0, 18),
                        path: "/pages/dynamic-detail/dynamic-detail?id=" + a + "&uid=" + i,
                        imageUrl: o
                    };
                },
                methods: {
                    getTopicData: function() {
                        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        e && (this.status = "loading"), this.meme.request("News/getTopicData", {
                            id: this.topicId,
                            page: this.page,
                            order: this.order
                        }, "POST", !0, !1).then(function(n) {
                            var o = n.data.list.news;
                            o.length < 5 && (t.status = "noMore"), 1 == n.code ? e ? (t.topicData.news = t.topicData.concat(o), 
                            t.status = "more") : t.topicData = n.data.list : e && (t.status = "noMore");
                        }).catch(function(t) {});
                    },
                    changeClass: function(t, e) {
                        this.page = 0, this.order = e, this.activeClass = t, this.topicData.news = [], this.getTopicData();
                    },
                    callBackIsLike: function(t) {
                        var e = this.topicData.news[t];
                        this.meme.request("News/addNewsLike", {
                            id: e.id
                        }, "POST", !0, !0).then(function(t) {
                            1 == t.code && (e.is_like ? e.like -= 1 : e.like += 1, e.is_like = !e.is_like);
                        }).catch(function(t) {});
                    },
                    callBackDelBbs: function(e) {
                        var n = this;
                        e.hasOwnProperty("status") ? t.showModal({
                            content: e.status ? "确认审核失败" : "确认审核通过",
                            success: function(t) {
                                if (t.confirm) {
                                    var o = {
                                        id: e.sid,
                                        status: e.status ? "hidden" : "normal"
                                    };
                                    n.meme.request("News/auditedNews", o, "POST", !0, !1).then(function(t) {
                                        1 == t.code ? n.topicData.news[e.index].status = o.status : n.meme.toast("审核失败，请重试");
                                    }).catch(function(t) {});
                                }
                            }
                        }) : t.showModal({
                            title: "提示",
                            content: "确认删除此条动态吗？",
                            success: function(t) {
                                t.confirm && n.meme.request("News/delNews", {
                                    id: e.sid
                                }, "POST", !0, !1).then(function(t) {
                                    1 == t.code ? n.topicData.news.splice(e.index, 1) : n.meme.toast("删除失败，请重试");
                                }).catch(function(t) {});
                            }
                        });
                    }
                }
            };
            e.default = o;
        }).call(this, n("543d").default);
    },
    "109a": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
    },
    "10a7": function(t, e, n) {
        n.r(e);
        var o = n("109a"), i = n("5cd9");
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        n("4b2d");
        var c = n("f0c5"), s = Object(c.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = s.exports;
    },
    1393: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("1c42"), e(n("66fd")), t(e(n("10a7")).default);
        }).call(this, n("543d").createPage);
    },
    "4b2d": function(t, e, n) {
        var o = n("88c2");
        n.n(o).a;
    },
    "5cd9": function(t, e, n) {
        n.r(e);
        var o = n("0461"), i = n.n(o);
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        e.default = i.a;
    },
    "88c2": function(t, e, n) {}
}, [ [ "1393", "common/runtime", "common/vendor" ] ] ]);