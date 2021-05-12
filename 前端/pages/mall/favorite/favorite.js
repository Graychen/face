(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mall/favorite/favorite" ], {
    2090: function(t, e, a) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("1c42"), e(a("66fd")), t(e(a("5514")).default);
        }).call(this, a("543d").createPage);
    },
    "46f0": function(t, e, a) {
        a.d(e, "b", function() {
            return n;
        }), a.d(e, "c", function() {
            return o;
        }), a.d(e, "a", function() {});
        var n = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__map(t.data.data, function(e, a) {
                return {
                    $orig: t.__get_orig(e),
                    m0: t.showDeliver(a)
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, o = [];
    },
    5514: function(t, e, a) {
        a.r(e);
        var n = a("46f0"), o = a("9e97");
        for (var i in o) "default" !== i && function(t) {
            a.d(e, t, function() {
                return o[t];
            });
        }(i);
        a("8efc");
        var d = a("f0c5"), u = Object(d.a)(o.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = u.exports;
    },
    "8efc": function(t, e, a) {
        var n = a("95a2");
        a.n(n).a;
    },
    "95a2": function(t, e, a) {},
    "9e97": function(t, e, a) {
        a.r(e);
        var n = a("faf8"), o = a.n(n);
        for (var i in n) "default" !== i && function(t) {
            a.d(e, t, function() {
                return n[t];
            });
        }(i);
        e.default = o.a;
    },
    faf8: function(t, e, a) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                components: {
                    uniLoadMore: function() {
                        a.e("components/common/uni-load-more/uni-load-more").then(function() {
                            return resolve(a("5208"));
                        }.bind(null, a)).catch(a.oe);
                    },
                    uSkeleton: function() {
                        a.e("components/common/u-skeleton/u-skeleton").then(function() {
                            return resolve(a("016e"));
                        }.bind(null, a)).catch(a.oe);
                    }
                },
                data: function() {
                    return {
                        state: {
                            status: "more",
                            loading: !0
                        },
                        app: {
                            appId: "wx91d27dbf599dff74",
                            path: "/pages/union/proxy/proxy"
                        },
                        data: {}
                    };
                },
                onLoad: function() {
                    this.data = this._request.mallInitData(), this.getData(!0);
                },
                onPullDownRefresh: function() {
                    this.data.pageindex = 1, this.getData(!0);
                },
                onReachBottom: function() {
                    this.getData();
                },
                methods: {
                    showDeliver: function(t) {
                        return this.data.data.length != t + 1;
                    },
                    getData: function() {
                        var e = this, a = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.state.status = "loading", this.meme.request("Mall/getGoodsLike", {
                            page: this.data.pageindex
                        }, "POST", !0, !0).then(function(n) {
                            1 == n.code ? (e.data = {
                                pageindex: n.data.page,
                                data: a ? n.data.list : e.data.data.concat(n.data.list)
                            }, e.state.loading = !1, e.state.status = n.data.list.length < 10 ? "noMore" : "more") : 1 == e.data.pageindex && (e.data.data = [], 
                            e.state.loading = !1, e.state.status = "noMore"), a && (e.state.timer = setTimeout(function() {
                                t.stopPullDownRefresh();
                            }, 300));
                        });
                    },
                    isLike: function(t, e, a) {
                        var n = this;
                        this.meme.request("Mall/addGoodsLike", {
                            goods_id: t
                        }, "POST", !0, !0).then(function(t) {
                            1 == t.code ? (n.data.pageindex = 1, n.getData(!0), n.data.data[a].is_like = !e) : n.meme.toast("收藏失败");
                        });
                    },
                    toApp: function(t, e) {
                        var a = this;
                        this.meme.request("Mall/getGoodsLink", {
                            goods_id: t,
                            discount: encodeURIComponent(e)
                        }, "POST", !0, !1).then(function(t) {
                            1 == t.code ? a.meme.toApp(a.app.appId, a.app.path + "?spreadUrl=" + encodeURIComponent(t.data)) : a.meme.toast("此商品暂时无法购买");
                        });
                    }
                }
            };
            e.default = n;
        }).call(this, a("543d").default);
    }
}, [ [ "2090", "common/runtime", "common/vendor" ] ] ]);