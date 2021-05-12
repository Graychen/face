(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/jump-author/jump-author" ], {
    "24b2": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = {
                components: {
                    dynamicPro: function() {
                        n.e("components/bbs/dynamic-pro").then(function() {
                            return resolve(n("5a1f"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    tuiTips: function() {
                        n.e("components/common/tips/tips").then(function() {
                            return resolve(n("5704"));
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
                computed: {
                    userId: function() {
                        return !!this.userInfo && this.userInfo.id != this.author.uid;
                    }
                },
                data: function() {
                    return {
                        userInfo: this.storage.get("userInfo", null),
                        status: "more",
                        scrollTop: 0,
                        page: 0,
                        author: {},
                        uid: 0,
                        data: [],
                        nodata: !1
                    };
                },
                onLoad: function(t) {
                    t.hasOwnProperty("id") ? this.uid = t.id : this.userInfo && (this.uid = this.userInfo.id), 
                    this.getUser(), this.getData();
                },
                onReachBottom: function() {
                    this.getData();
                },
                onPageScroll: function(e) {
                    this.scrollTop = e.scrollTop, e.scrollTop > t.upx2px(230) ? t.setNavigationBarTitle({
                        title: this.author.uname
                    }) : t.setNavigationBarTitle({
                        title: ""
                    });
                },
                onShareAppMessage: function(t) {
                    var e = this, n = "", a = this.userInfo ? this.userInfo.id : 0, o = t.target.dataset.id, i = t.target.dataset.content;
                    return t.target.dataset.images.length > 0 && (n = t.target.dataset.images[0].src), 
                    this.meme.request("News/addShare", {
                        id: o
                    }, "POST", !0, !0).then(function(n) {
                        1 == n.code && (e.data[t.target.dataset.index].share += 1);
                    }).catch(function(t) {}), {
                        title: i.substring(0, 18),
                        path: "/pages/dynamic-detail/dynamic-detail?id=" + o + "&uid=" + a,
                        imageUrl: n
                    };
                },
                methods: {
                    getData: function() {
                        var t = this;
                        this.status = "loading", this.meme.request("News/getNews", {
                            page: this.page,
                            uid: this.uid
                        }, "POST", !0, !0).then(function(e) {
                            1 == e.code ? (t.page = e.data.page, t.data = t.data.concat(e.data.list), t.status = "more") : (t.status = "noMore", 
                            0 == t.page && (t.nodata = !0));
                        }).catch(function(t) {});
                    },
                    getUser: function() {
                        var t = this;
                        this.meme.request("User/getUserFollow", {
                            id: this.uid
                        }, "POST", !0, !0).then(function(e) {
                            1 == e.code && (t.author = e.data);
                        }).catch(function(t) {});
                    },
                    changeState: function(t) {
                        this.author.focus = 0 == this.author.focus ? 1 : 0, this.meme.request("User/addUserFollow", {
                            id: t
                        }, "POST", !0, !0);
                    },
                    preView: function(t) {
                        this.meme.preViewImage(t);
                    },
                    callBackIsLike: function(t) {
                        var e = this.data[t];
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
                                    var a = {
                                        id: e.sid,
                                        status: e.status ? "hidden" : "normal"
                                    };
                                    n.meme.request("News/auditedNews", a, "POST", !0, !1).then(function(t) {
                                        1 == t.code ? n.data[e.index].status = a.status : n.meme.toast("审核失败，请重试");
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
                                    1 == t.code ? n.data.splice(e.index, 1) : n.meme.toast("删除失败，请重试");
                                }).catch(function(t) {});
                            }
                        });
                    }
                }
            };
            e.default = a;
        }).call(this, n("543d").default);
    },
    4997: function(t, e, n) {
        n.r(e);
        var a = n("bfeb"), o = n("bfd1");
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        n("6e24");
        var s = n("f0c5"), u = Object(s.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = u.exports;
    },
    "6e24": function(t, e, n) {
        var a = n("da53");
        n.n(a).a;
    },
    a47d: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("1c42"), e(n("66fd")), t(e(n("4997")).default);
        }).call(this, n("543d").createPage);
    },
    bfd1: function(t, e, n) {
        n.r(e);
        var a = n("24b2"), o = n.n(a);
        for (var i in a) "default" !== i && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(i);
        e.default = o.a;
    },
    bfeb: function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var a = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    },
    da53: function(t, e, n) {}
}, [ [ "a47d", "common/runtime", "common/vendor" ] ] ]);