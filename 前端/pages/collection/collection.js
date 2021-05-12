(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/collection/collection" ], {
    "2c19": function(t, n, o) {
        var e = o("c93e");
        o.n(e).a;
    },
    "3b88": function(t, n, o) {
        o.r(n);
        var e = o("dc65"), a = o.n(e);
        for (var c in e) "default" !== c && function(t) {
            o.d(n, t, function() {
                return e[t];
            });
        }(c);
        n.default = a.a;
    },
    "64a5": function(t, n, o) {
        o.r(n);
        var e = o("6c45"), a = o("3b88");
        for (var c in a) "default" !== c && function(t) {
            o.d(n, t, function() {
                return a[t];
            });
        }(c);
        o("2c19");
        var i = o("f0c5"), l = Object(i.a)(a.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        n.default = l.exports;
    },
    "6c45": function(t, n, o) {
        o.d(n, "b", function() {
            return e;
        }), o.d(n, "c", function() {
            return a;
        }), o.d(n, "a", function() {});
        var e = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, a = [];
    },
    c93e: function(t, n, o) {},
    dbdb: function(t, n, o) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            o("1c42"), n(o("66fd")), t(n(o("64a5")).default);
        }).call(this, o("543d").createPage);
    },
    dc65: function(t, n, o) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = {
                components: {
                    waterfallFlow: function() {
                        o.e("components/detail/waterfall-flow").then(function() {
                            return resolve(o("3795"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    backTop: function() {
                        o.e("components/common/back-top").then(function() {
                            return resolve(o("54c8"));
                        }.bind(null, o)).catch(o.oe);
                    },
                    uniLoadMore: function() {
                        o.e("components/common/uni-load-more/uni-load-more").then(function() {
                            return resolve(o("5208"));
                        }.bind(null, o)).catch(o.oe);
                    }
                },
                data: function() {
                    return {
                        timer: null,
                        scrollTop: !1,
                        status: "more",
                        page: 0,
                        isLoad: !0,
                        clearKey: !1,
                        listData: []
                    };
                },
                onShow: function() {
                    this.page = 0, this.getData(!0);
                },
                onHide: function() {
                    this.timer && (clearTimeout(this.timer), this.timer = null);
                },
                onPullDownRefresh: function() {
                    this.page = 0, this.getData(!0);
                },
                onReachBottom: function() {
                    this.getData();
                },
                onPageScroll: function(t) {
                    t.scrollTop > 999 ? this.scrollTop || (this.scrollTop = !0) : this.scrollTop && (this.scrollTop = !1);
                },
                methods: {
                    getData: function() {
                        var n = this, o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.status = "loading", this.meme.request("Wxapp/collect", {
                            page: this.page
                        }, "POST", !0, !0).then(function(e) {
                            if (n.clearKey = o, 1 == e.code) {
                                var a = e.data;
                                n.status = a.total < a.limit ? "noMore" : "more", n.listData = a.list, n.page = a.page, 
                                n.isLoad = !0;
                            } else n.listData = [], n.status = "noMore", page || (n.isLoad = !1);
                            o && (n.timer = setTimeout(function() {
                                t.stopPullDownRefresh();
                            }, 500));
                        }).catch(function(t) {});
                    },
                    ToPageList: function() {
                        t.navigateTo({
                            url: "/pages/detail/suit-code"
                        });
                    }
                }
            };
            n.default = e;
        }).call(this, o("543d").default);
    }
}, [ [ "dbdb", "common/runtime", "common/vendor" ] ] ]);