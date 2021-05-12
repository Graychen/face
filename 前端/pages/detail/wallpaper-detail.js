(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/detail/wallpaper-detail", "components/common/more-pic" ], {
    "2ae9": function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, a = [];
    },
    "478f": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0, function(t) {
                t && t.__esModule;
            }(n("866e"));
            var i = {
                components: {
                    leftCapsule: function() {
                        n.e("components/common/left-capsule").then(function() {
                            return resolve(n("de16"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    wallpaperPic: function() {
                        n.e("components/detail/wallpaper-pic").then(function() {
                            return resolve(n("8713"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    upPic: function() {
                        n.e("components/detail/up-pic").then(function() {
                            return resolve(n("48de"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    hotNav: function() {
                        n.e("components/common/hot-nav").then(function() {
                            return resolve(n("d487"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    waterfallFlow: function() {
                        n.e("components/detail/waterfall-flow").then(function() {
                            return resolve(n("3795"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    uniLoadMore: function() {
                        n.e("components/common/uni-load-more/uni-load-more").then(function() {
                            return resolve(n("5208"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    wallpaperBtn: function() {
                        n.e("components/detail/wallpaper-btn").then(function() {
                            return resolve(n("455e"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    ads: function() {
                        n.e("components/common/ads").then(function() {
                            return resolve(n("46ba"));
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
                        page: 1,
                        listData: [],
                        initData: {},
                        authorData: {},
                        status: "more",
                        swiperShow: !0,
                        safeAreaHeight: this.SafeAreaHeight,
                        safeAreaBottom: 0,
                        timeData: {},
                        timeShow: !0,
                        NewHei: 0,
                        loadAd: !1,
                        showAd: !1,
                        userInfo: this.storage.get("userInfo", null),
                        btnMenu: [ {
                            type: "home",
                            title: "首页"
                        }, {
                            type: "favor",
                            title: "收藏"
                        }, {
                            type: "pulldown",
                            title: "保存"
                        }, {
                            type: "appreciate",
                            title: "推荐"
                        } ],
                        adClick: this.storage.get("adClick", !1),
                        showLogin: !1
                    };
                },
                onLoad: function(e) {
                    var n = this;
                    if (this.SafeAreaHeight ? (this.safeAreaHeight = this.safeAreaHeight - 15, this.safeAreaBottom = this.safeAreaHeight + t.upx2px(90)) : this.safeAreaBottom = this.safeAreaHeight + t.upx2px(90), 
                    this.getData(e.id), this.getList(), this.userInfo) {
                        var i = {
                            userId: this.userInfo.id,
                            emoticonId: e.id
                        };
                        this.meme.request("Wxapp/getCollect", i, "POST", !0, !0).then(function(t) {
                            1 == t.code && (n.btnMenu[1].type = "favorfill");
                        }).catch(function(t) {});
                    }
                },
                onShow: function() {
                    this.adClick = this.storage.get("adClick", !1);
                },
                onShareAppMessage: function(t) {
                    return this.userInfo && this.meme.request("Wxapp/addShare", {
                        id: this.initData.id
                    }, "POST", !0, !0), {
                        title: this.initData.title + "壁纸",
                        path: "/pages/detail/wallpaper-detail?id=" + this.initData.id + "&uid=" + (this.userInfo ? this.userInfo.id : 0),
                        desc: this.initData.desc,
                        imageUrl: this.initData.src
                    };
                },
                onShareTimeline: function() {
                    return this.userInfo && this.meme.request("Wxapp/addShare", {
                        id: this.initData.id
                    }, "POST", !0, !0), {
                        title: this.initData.title + "壁纸",
                        path: "/pages/detail/wallpaper-detail?id=" + this.initData.id + "&uid=" + (this.userInfo ? this.userInfo.id : 0),
                        desc: this.initData.desc,
                        imageUrl: this.initData.src
                    };
                },
                onReachBottom: function() {
                    this.getList(!0);
                },
                methods: {
                    getData: function(t) {
                        var e = this;
                        this.meme.request("Wxapp/detail", {
                            id: t
                        }, "POST", !0, !1).then(function(t) {
                            1 == t.code && (e.initData = t.data, e.initTimeH(t.data), e.getAuthor(t.data.authorId));
                        }).catch(function(t) {});
                    },
                    getAuthor: function(t) {
                        var e = this;
                        this.meme.request("Wxapp/getAuthor", {
                            author_id: t
                        }, "POST", !0, !1).then(function(t) {
                            1 == t.code && (e.authorData = t.data);
                        }).catch(function(t) {});
                    },
                    getList: function() {
                        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        e && (this.status = "loading");
                        var n = {
                            page: this.page,
                            type: 3,
                            is_make: 0
                        };
                        this.meme.request("Wxapp/list", n, "POST", !0, e).then(function(n) {
                            1 == n.code ? (e && (t.status = "more"), t.listData = n.data.list, t.page = n.data.next_page) : e && (t.status = "noMore");
                        }).catch(function(t) {});
                    },
                    initTimeH: function(e) {
                        this.NewHei = e.height * (t.upx2px(750) / e.width), this.timeShow = !(this.NewHei < t.upx2px(1e3));
                        var n = new Date(), i = n.getHours(), a = n.getMinutes(), o = n.getMonth() + 1, u = n.getDate(), s = n.getDay(), c = [ "日", "一", "二", "三", "四", "五", "六" ];
                        i < 10 && (i = "0" + i), a < 10 && (a = "0" + a), this.timeData = {
                            time: i + ":" + a,
                            monthDay: o + "月" + u + "日",
                            week: "星期" + c[s]
                        };
                    },
                    swiperTo: function(t) {
                        t.id && this.getData(t.id), this.swiperShow = t.swiperShow;
                    },
                    changeIcon: function(t) {
                        this.btnMenu[1].type = t.icon, this.btnMenu[1].title = t.title;
                    },
                    changeAd: function(t) {
                        this.adClick = t, this.adClick && (this.loadAd = !1, this.showAd = !1, "Douyin" == this.appName ? this.meme.downloadDyImage(this.initData.cdnurl) : this.meme.makeShow(this.storage.get("makeShow", !1), this.initData.src, this.platform));
                    },
                    addCommission: function(t) {
                        if (this.initData.authorId > 0) {
                            var e = {
                                user_id: this.initData.authorId,
                                emoticon_id: this.initData.id,
                                detailid: this.detailid,
                                memo: "壁纸收益"
                            };
                            this.meme.request("User/addCommission", e, "POST", !0, !0);
                        }
                        this.adClick = t;
                    },
                    videoAdShow: function(t) {
                        this.loadAd = t, this.showAd = t;
                    },
                    changeLogin: function() {
                        this.showLogin = !0;
                    },
                    updateUserInfo: function(t) {
                        this.userInfo = t;
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
    "866e": function(t, e, n) {
        n.r(e);
        var i = n("d4a5"), a = n("9b15");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        n("bebd");
        var u = n("f0c5"), s = Object(u.a)(a.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = s.exports;
    },
    "9b15": function(t, e, n) {
        n.r(e);
        var i = n("d9fc"), a = n.n(i);
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = a.a;
    },
    a589: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("1c42"), e(n("66fd")), t(e(n("e4d9")).default);
        }).call(this, n("543d").createPage);
    },
    b499: function(t, e, n) {},
    bebd: function(t, e, n) {
        var i = n("b499");
        n.n(i).a;
    },
    c6c1: function(t, e, n) {
        n.r(e);
        var i = n("478f"), a = n.n(i);
        for (var o in i) "default" !== o && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(o);
        e.default = a.a;
    },
    d4a5: function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return a;
        }), n.d(e, "a", function() {});
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, a = [];
    },
    d9fc: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var i = {
            props: {
                resdata: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                makeText: {
                    type: String,
                    default: ""
                },
                pageType: {
                    type: String,
                    default: ""
                },
                noThingKey: {
                    type: Boolean,
                    default: !1
                },
                isLoad: {
                    type: Boolean,
                    default: !1
                }
            },
            methods: {
                make: function(t) {
                    var e = this;
                    "make" == this.pageType && this.meme.request("/Wxapp/getInfo", {
                        id: t
                    }, "POST", !0, !1).then(function(t) {
                        1 == t.code && e.$emit("openPopup", t.data);
                    }).catch(function(t) {});
                }
            }
        };
        e.default = i;
    },
    e4d9: function(t, e, n) {
        n.r(e);
        var i = n("2ae9"), a = n("c6c1");
        for (var o in a) "default" !== o && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(o);
        var u = n("f0c5"), s = Object(u.a)(a.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = s.exports;
    }
}, [ [ "a589", "common/runtime", "common/vendor" ] ] ]);