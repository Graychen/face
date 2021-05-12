(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/mall/mall" ], {
    "0327": function(t, e, n) {
        n.r(e);
        var i = n("b364"), o = n("949d");
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        n("b8b7");
        var s = n("f0c5"), u = Object(s.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = u.exports;
    },
    "0c42": function(t, e, n) {},
    "6e23": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {
                components: {
                    tuiSticky: function() {
                        n.e("components/common/sticky").then(function() {
                            return resolve(n("3e65"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    uniLoadMore: function() {
                        n.e("components/common/uni-load-more/uni-load-more").then(function() {
                            return resolve(n("5208"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    uSkeleton: function() {
                        n.e("components/common/u-skeleton/u-skeleton").then(function() {
                            return resolve(n("016e"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        state: {
                            status: "more",
                            loading: !0,
                            timer: null,
                            timers: null
                        },
                        app: {
                            appId: "wx91d27dbf599dff74",
                            path: "/pages/union/proxy/proxy"
                        },
                        isAudit: this.IsAudit,
                        pagesift: 1,
                        keyword: "",
                        InputBottom: 0,
                        inputVal: "",
                        data: {},
                        scrollTop: 0,
                        animation: "",
                        showLogin: !1
                    };
                },
                onLoad: function() {
                    this.data = this._request.mallInitData(), this.getData(!0);
                },
                onHide: function() {
                    this.state.timer && (clearTimeout(this.state.timer), this.state.timer = null), this.state.timers && (clearTimeout(this.state.timers), 
                    this.state.timers = null);
                },
                onPullDownRefresh: function() {
                    this.keyword = "", this.inputVal = "", this.pagesift = 1, this.data.pageindex = 1, 
                    this.getData(!0);
                },
                onReachBottom: function() {
                    this.getData();
                },
                onPageScroll: function(t) {
                    t.scrollTop < 110 && (this.scrollTop = t.scrollTop);
                },
                computed: {
                    openShadow: function() {
                        return this.scrollTop > 30 ? "open" : "close";
                    }
                },
                methods: {
                    InputFocus: function(t) {
                        this.InputBottom = t.detail.height;
                    },
                    InputBlur: function(t) {
                        this.InputBottom = 0;
                    },
                    changeInput: function(t) {
                        this.inputVal = t.detail.value;
                    },
                    sendSeach: function() {
                        this.data.data = [], this.data.pageindex = 1, this.keyword = this.inputVal, this.getData(!0);
                    },
                    Toggle: function() {
                        var e = this, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.state.timers && (clearTimeout(this.state.timers), this.state.timers = null), 
                        this.animation = "doing", this.state.timers = setTimeout(function() {
                            e.animation = "";
                        }, 1e3), n && (this.meme.isLogin() ? t.navigateTo({
                            url: "/pages/mall/favorite/favorite"
                        }) : this.showLogin = !0);
                    },
                    showDeliver: function(t) {
                        return this.data.data.length != t + 1;
                    },
                    getData: function() {
                        var e = this, n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.state.status = "loading", this.meme.request("Mall/getGoodsList", {
                            pageindex: this.data.pageindex,
                            keyword: this.keyword,
                            pagesift: this.pagesift
                        }, "POST", !0, !0).then(function(i) {
                            1 == i.code ? (e.data = {
                                pageindex: i.data.page,
                                data: n ? i.data.list : e.data.data.concat(i.data.list)
                            }, e.pagesift = i.data.pagesift, e.state.loading = !1, e.state.status = i.data.list.length < 10 ? "noMore" : "more") : 1 == e.data.pageindex && (e.data.data = [], 
                            e.state.loading = !1, e.state.status = "noMore"), n && (e.state.timer = setTimeout(function() {
                                t.stopPullDownRefresh();
                            }, 300));
                        });
                    },
                    isLike: function(t, e, n) {
                        var i = this;
                        this.meme.isLogin() ? (this.meme.request("Mall/addGoodsLike", {
                            goods_id: t
                        }, "POST", !0, !0).then(function(t) {
                            1 == t.code ? i.data.data[n].is_like = !e : i.meme.toast("收藏失败");
                        }), this.Toggle()) : this.showLogin = !0;
                    },
                    toApp: function(t, e) {
                        var n = this;
                        this.meme.isLogin() ? this.meme.request("Mall/getGoodsLink", {
                            goods_id: t,
                            discount: encodeURIComponent(e)
                        }, "POST", !0, !1).then(function(t) {
                            1 == t.code ? n.meme.toApp(n.app.appId, n.app.path + "?spreadUrl=" + encodeURIComponent(t.data)) : n.meme.toast("此商品暂时无法购买");
                        }) : this.showLogin = !0;
                    },
                    handleClick: function(t) {
                        var e = this;
                        this.showLogin = !1, 1 == t.index && this.$api.autoLogin().then(function(t) {
                            e.userInfo = t;
                        });
                    }
                }
            };
            e.default = i;
        }).call(this, n("543d").default);
    },
    "949d": function(t, e, n) {
        n.r(e);
        var i = n("6e23"), o = n.n(i);
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        e.default = o.a;
    },
    b364: function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var i = function() {
            var t = this, e = (t.$createElement, t._self._c, t.__map(t.data.data, function(e, n) {
                return {
                    $orig: t.__get_orig(e),
                    m0: t.showDeliver(n)
                };
            }));
            t.$mp.data = Object.assign({}, {
                $root: {
                    l0: e
                }
            });
        }, o = [];
    },
    b8b7: function(t, e, n) {
        var i = n("0c42");
        n.n(i).a;
    },
    d488: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("1c42"), e(n("66fd")), t(e(n("0327")).default);
        }).call(this, n("543d").createPage);
    }
}, [ [ "d488", "common/runtime", "common/vendor" ] ] ]);