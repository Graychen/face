(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/detail/more-wallpaper" ], {
    "3c49": function(t, e, o) {
        o.d(e, "b", function() {
            return n;
        }), o.d(e, "c", function() {
            return a;
        }), o.d(e, "a", function() {});
        var n = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, a = [];
    },
    "7a5a": function(t, e, o) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                components: {
                    searchHome: function() {
                        o.e("components/detail/search-home").then(function() {
                            return resolve(o("b362"));
                        }.bind(null, o)).catch(o.oe);
                    },
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
                        page: 1,
                        order: "",
                        keyWord: "",
                        scrollTop: 0,
                        status: "more",
                        TabCur: 0,
                        scrollLeft: 0,
                        category_id: 0,
                        categoryList: [ {
                            id: 0,
                            name: "全部"
                        } ],
                        listData: [],
                        clearKey: !1
                    };
                },
                onLoad: function(e) {
                    e.hasOwnProperty("order") && (this.order = e.order), e.hasOwnProperty("key_word") && (this.keyWord = e.key_word, 
                    t.setNavigationBarTitle({
                        title: this.keyWord + "壁纸大全"
                    })), this.getCategory(), this.getData();
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
                onReachBottom: function() {
                    this.getData();
                },
                onPageScroll: function(t) {
                    this.scrollTop = t.scrollTop;
                },
                methods: {
                    getData: function() {
                        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.clearKey = e, this.status = "loading";
                        var o = {
                            page: this.page,
                            type: 3,
                            name: this.keyWord,
                            order: this.order,
                            is_make: 0,
                            category_id: this.category_id
                        };
                        this.meme.request("/Wxapp/list", o, "POST", !1, !0).then(function(e) {
                            1 == e.code ? (t.listData = e.data.list, t.page = e.data.next_page, t.status = e.data.list.length < 18 ? "noMore" : "more") : t.status = "noMore";
                        });
                    },
                    getCategory: function() {
                        var t = this;
                        this.meme.request("/Wxapp/getCategory", {
                            cat_type: "wallpaper"
                        }, "POST", !0, !1).then(function(e) {
                            if (1 == e.code) {
                                t.categoryList = [ {
                                    id: 0,
                                    name: "全部"
                                } ];
                                var o = e.data;
                                for (var n in o) t.categoryList.push(o[n]);
                            }
                        });
                    },
                    tabSelect: function(t, e) {
                        this.TabCur = t, this.scrollLeft = 60 * (t - 1), this.page = 1, this.category_id = e, 
                        this.listData = [], this.getData(!0);
                    },
                    searchValue: function(t) {
                        this.page = 1, this.keyWord = t, this.listData = [], this.getData(!0);
                    }
                }
            };
            e.default = n;
        }).call(this, o("543d").default);
    },
    9997: function(t, e, o) {
        o.r(e);
        var n = o("7a5a"), a = o.n(n);
        for (var r in n) "default" !== r && function(t) {
            o.d(e, t, function() {
                return n[t];
            });
        }(r);
        e.default = a.a;
    },
    b8b1: function(t, e, o) {
        o.r(e);
        var n = o("3c49"), a = o("9997");
        for (var r in a) "default" !== r && function(t) {
            o.d(e, t, function() {
                return a[t];
            });
        }(r);
        var i = o("f0c5"), c = Object(i.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = c.exports;
    },
    f3c2: function(t, e, o) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            o("1c42"), e(o("66fd")), t(e(o("b8b1")).default);
        }).call(this, o("543d").createPage);
    }
}, [ [ "f3c2", "common/runtime", "common/vendor" ] ] ]);