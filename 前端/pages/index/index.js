(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/index/index" ], {
    "4f3a": function(n, t, e) {
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = null, i = null, c = null, a = {
                components: {
                    topTips: function() {
                        e.e("components/common/top-tips").then(function() {
                            return resolve(e("9dbf"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    searchInput: function() {
                        e.e("components/index/search-input").then(function() {
                            return resolve(e("1485"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    everySearch: function() {
                        e.e("components/index/every-search").then(function() {
                            return resolve(e("fad7"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    itemsMenu: function() {
                        e.e("components/index/items-menu").then(function() {
                            return resolve(e("017c"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    regional: function() {
                        e.e("components/index/regional").then(function() {
                            return resolve(e("de83"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    routineFriend: function() {
                        e.e("components/index/routine-friend").then(function() {
                            return resolve(e("0c90"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    hotNav: function() {
                        e.e("components/common/hot-nav").then(function() {
                            return resolve(e("d487"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    morePic: function() {
                        e.e("components/common/more-pic").then(function() {
                            return resolve(e("866e"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    backTop: function() {
                        e.e("components/common/back-top").then(function() {
                            return resolve(e("54c8"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    uniLoadMore: function() {
                        e.e("components/common/uni-load-more/uni-load-more").then(function() {
                            return resolve(e("5208"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                data: function() {
                    return {
                        keys: !1,
                        isLoad: !1,
                        tipsKey: !0,
                        status: "more",
                        scrollTop: !1,
                        indexData: {
                            hotKeys: {
                                hotWords: [],
                                wordStart: 0
                            },
                            menuNavIcon: {
                                navs: [],
                                navsBanner: []
                            },
                            hotList: [],
                            groupList: []
                        },
                        newList: {
                            page: 1,
                            list: []
                        }
                    };
                },
                onLoad: function() {
                    var t = this;
                    this.getData(), i = setTimeout(function() {
                        t.Ads.interId && n.createInterstitialAd && ((c = n.createInterstitialAd({
                            adUnitId: t.Ads.interId
                        })).onLoad(function() {}), c.onError(function(n) {}), c.onClose(function() {}));
                    }, 400);
                },
                onShow: function() {
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
                    i = setTimeout(function() {
                        c && c.show().catch(function(n) {
                            console.error(n);
                        });
                    }, 500);
                },
                onPullDownRefresh: function() {
                    this.getData();
                },
                onReachBottom: function() {
                    this.getList();
                },
                onPageScroll: function(n) {
                    n.scrollTop > 999 ? this.scrollTop || (this.scrollTop = !0) : this.scrollTop && (this.scrollTop = !1);
                },
                onHide: function() {
                    o && (clearTimeout(o), o = null), i && (clearTimeout(i), i = null);
                },
                onShareAppMessage: function() {
                    return {
                        title: "人在江湖飘，全靠表情包~",
                        path: "/pages/index/index?uid=" + this.unionid
                    };
                },
                onShareTimeline: function() {
                    return {
                        title: "人在江湖飘，全靠表情包~",
                        path: "/pages/index/index?uid=" + this.unionid
                    };
                },
                methods: {
                    openKeys: function(n) {
                        this.keys = n;
                    },
                    closePopup: function() {
                        this.keys = !1;
                    },
                    listenChange: function(n) {
                        this.indexData.hotKeys = {
                            hotWords: n.list,
                            wordStart: n.start
                        };
                    },
                    getData: function() {
                        var t = this;
                        this.meme.request("Wxapp/Index", {
                            type: 1,
                            is_make: 0
                        }, "POST", !0, !0).then(function(e) {
                            if (1 == e.code) {
                                var i = e.data;
                                t.indexData = {
                                    hotKeys: {
                                        hotWords: i.hotSearch.list,
                                        wordStart: i.hotSearch.start
                                    },
                                    menuNavIcon: {
                                        navs: i.indexNav,
                                        navsBanner: i.navBanner
                                    },
                                    hotList: i.hotList,
                                    groupList: i.groupList,
                                    lunbo:i.lunbo
                                }, t.newList = {
                                    page: i.newList.next_page,
                                    list: i.newList.list
                                }, t.isLoad = !0;
                            }
                            o = setTimeout(function() {
                                n.stopPullDownRefresh();
                            }, 500);
                        }).catch(function(n) {});
                    },
                    getList: function() {
                        var n = this;
                        this.status = "loading";
                        var t = {
                            page: this.newList.page,
                            type: 1,
                            is_make: 0
                        };
                        this.meme.request("Wxapp/list", t, "POST", !0, !0).then(function(t) {
                            if (1 == t.code) {
                                var e = t.data;
                                n.newList = {
                                    page: e.next_page,
                                    list: n.newList.list.concat(e.list)
                                }, n.status = e.total < e.limit ? "noMore" : "more";
                            } else n.status = "noMore";
                        }).catch(function(n) {});
                    },
                    callBack: function(n) {
                        this.tipsKey = n;
                    }
                }
            };
            t.default = a;
        }).call(this, e("543d").default);
    },
    5981: function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("1c42"), t(e("66fd")), n(t(e("b16b")).default);
        }).call(this, e("543d").createPage);
    },
    "6cb7": function(n, t, e) {
        e.r(t);
        var o = e("4f3a"), i = e.n(o);
        for (var c in o) "default" !== c && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        t.default = i.a;
    },
    "83c4": function(n, t, e) {
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return i;
        }), e.d(t, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, i = [];
    },
    b16b: function(n, t, e) {
        e.r(t);
        var o = e("83c4"), i = e("6cb7");
        for (var c in i) "default" !== c && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(c);
        var a = e("f0c5"), s = Object(a.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = s.exports;
    }
}, [ [ "5981", "common/runtime", "common/vendor" ] ] ]);