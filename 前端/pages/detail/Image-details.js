(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/detail/Image-details" ], {
    "0abf": function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    },
    "14ae": function(t, e, n) {
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
                    searchHome: function() {
                        n.e("components/detail/search-home").then(function() {
                            return resolve(n("b362"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    showPic: function() {
                        n.e("components/detail/show-pic").then(function() {
                            return resolve(n("5e8a"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    funBut: function() {
                        n.e("components/detail/fun-but").then(function() {
                            return resolve(n("0547"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    hotNav: function() {
                        n.e("components/common/hot-nav").then(function() {
                            return resolve(n("d487"));
                        }.bind(null, n)).catch(n.oe);
                    },
                    morePic: function() {
                        n.e("components/common/more-pic").then(function() {
                            return resolve(n("866e"));
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
                    },
                    uniLoadMore: function() {
                        n.e("components/common/uni-load-more/uni-load-more").then(function() {
                            return resolve(n("5208"));
                        }.bind(null, n)).catch(n.oe);
                    }
                },
                data: function() {
                    return {
                        page: 1,
                        status: "more",
                        imgList: {},
                        detail: {},
                        current: 0,
                        number: 0,
                        type: 1,
                        userInfo: this.storage.get("userInfo", null),
                        loadAd: !1,
                        showAd: !1,
                        scrollTop: 0,
                        cuIconList: [ {
                            type: "warn",
                            title: "举报"
                        }, {
                            type: "creative",
                            title: "使用说明"
                        }, {
                            type: "favor",
                            title: "收藏"
                        }, {
                            type: "pulldown",
                            title: "保存"
                        }],
                        dataList: [],
                        adClick: this.storage.get("adClick", !1),
                        showLogin: !1
                    };
                },
                onLoad: function(t) {
                    var e = this;
                    if (this.getData(t.id), this.userInfo) {
                        var n = {
                            userId: this.userInfo.id,
                            emoticonId: t.id
                        };
                        this.meme.request("Wxapp/getCollect", n, "POST", !0, !0).then(function(t) {
                            1 == t.code && (e.cuIconList[2].type = "favorfill");
                        });
                    }
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
                    this.adClick = this.storage.get("adClick", !1);
                },
                onShareAppMessage: function(t) {
                    return this.userInfo && this.meme.request("Wxapp/addShare", {
                        id: this.detail.id
                    }, "POST", !0, !0), {
                        title: this.detail.title + (1 == this.type ? "表情包" : "头像"),
                        path: "/pages/detail/Image-details?id=" + this.detail.id + "&uid=" + (this.userInfo ? this.userInfo.id : 0),
                        desc: this.detail.desc,
                        imageUrl: this.detail.src
                    };
                },
                onShareTimeline: function() {
                    return this.userInfo && this.meme.request("Wxapp/addShare", {
                        id: this.detail.id
                    }, "POST", !0, !0), {
                        title: this.detail.title + (1 == this.type ? "表情包" : "头像"),
                        path: "/pages/detail/Image-details?id=" + this.detail.id + "&uid=" + (this.userInfo ? this.userInfo.id : 0),
                        desc: this.detail.desc,
                        imageUrl: this.detail.src
                    };
                },
                onReachBottom: function() {
                    this.getList();
                },
                onPageScroll: function(t) {
                    this.scrollTop = t.scrollTop;
                },
                methods: {
                    getData: function(e) {
                        var n = this;
                        this.meme.request("Wxapp/detail", {
                            id: e
                        }, "POST", !0, !1).then(function(e) {
                            if (1 == e.code) {
                                var i = e.data;
                                n.imgList = i, i.hasOwnProperty("current") && (n.number = i.list.length, n.current = i.current), 
                                i.hasOwnProperty("list") ? n.detail = i.list[n.current] : n.detail = i, n.type = n.detail.type, 
                                t.setNavigationBarTitle({
                                    title: n.detail.title + (1 == n.type ? "表情包" : "头像")
                                }), n.getList();
                            }
                        });
                    },
                    getList: function() {
                        var t = this;
                        this.status = "loading";
                        var e = {
                            page: this.page,
                            type: this.type,
                            is_make: 0
                        };
                        this.meme.request("Wxapp/list", e, "POST", !0, !0).then(function(e) {
                            if (1 == e.code) {
                                var n = e.data;
                                t.dataList = t.dataList.concat(n.list), t.status = n.total < n.limit ? "noMore" : "more", 
                                t.page = n.next_page;
                            } else t.status = "noMore";
                        });
                    },
                    listenBack: function(t) {
                        this.current = t;
                    },
                    changeIcon: function(t) {
                        this.cuIconList[2].type = t.icon, this.cuIconList[2].title = t.title;
                    },
                    searchValue: function(e) {
                        t.navigateTo({
                            url: "/pages/detail/suit-code?key_word=" + e
                        });
                    },
                    addCommission: function(t) {
                        if (this.detail.authorId > 0) {
                            var e = {
                                user_id: this.detail.authorId,
                                emoticon_id: this.detail.id,
                                detailid: this.detailid,
                                memo: (1 == this.type ? "表情" : "头像") + "收益"
                            };
                            this.meme.request("User/addCommission", e, "POST", !0, !0);
                        }
                        this.adClick = t;
                    },
                    changeAd: function(t) {
                        this.loadAd = !1, this.showAd = !1, "Douyin" == this.appName ? this.meme.downloadDyImage(this.detail.cdnurl) : this.meme.makeShow(this.storage.get("makeShow", !1), this.detail.src, this.platform);
                    },
                    videoAdShow: function(t) {
                        this.loadAd = t, this.showAd = t;
                    },
                    updateUserInfo: function(t) {
                        this.userInfo = t;
                    },
                    changeLogin: function() {
                        this.showLogin = !0;
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
    "7d81": function(t, e, n) {
        n.r(e);
        var i = n("0abf"), o = n("cc3c");
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        var s = n("f0c5"), c = Object(s.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = c.exports;
    },
    a9b9: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("1c42"), e(n("66fd")), t(e(n("7d81")).default);
        }).call(this, n("543d").createPage);
    },
    cc3c: function(t, e, n) {
        n.r(e);
        var i = n("14ae"), o = n.n(i);
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        e.default = o.a;
    }
}, [ [ "a9b9", "common/runtime", "common/vendor" ] ] ]);