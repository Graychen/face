(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/make/make" ], {
    "7ab1": function(n, t, e) {
        e.r(t);
        var o = e("98be"), i = e("a55e");
        for (var c in i) "default" !== c && function(n) {
            e.d(t, n, function() {
                return i[n];
            });
        }(c);
        var a = e("f0c5"), s = Object(a.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = s.exports;
    },
    "98be": function(n, t, e) {
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
    a55e: function(n, t, e) {
        e.r(t);
        var o = e("f001"), i = e.n(o);
        for (var c in o) "default" !== c && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(c);
        t.default = i.a;
    },
    def4: function(n, t, e) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            e("1c42"), t(e("66fd")), n(t(e("7ab1")).default);
        }).call(this, e("543d").createPage);
    },
    f001: function(n, t, e) {
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var o = {
                components: {
                    tuiSticky: function() {
                        e.e("components/common/sticky").then(function() {
                            return resolve(e("3e65"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    morePic: function() {
                        e.e("components/common/more-pic").then(function() {
                            return resolve(e("866e"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    privateBtn: function() {
                        e.e("components/make/private-btn").then(function() {
                            return resolve(e("7f89"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    popupPrivate: function() {
                        e.e("components/make/popup-private").then(function() {
                            return resolve(e("f189"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    search: function() {
                        e.e("components/make/search").then(function() {
                            return resolve(e("936a"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    backTop: function() {
                        e.e("components/common/back-top").then(function() {
                            return resolve(e("54c8"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    poupPic: function() {
                        e.e("components/make/poup-pic").then(function() {
                            return resolve(e("70fbb"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    adsVideo: function() {
                        e.e("components/common/ads-video").then(function() {
                            return resolve(e("233e"));
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
                        timer: null,
                        userInfo: null,
                        privateKey: !1,
                        scrollTop: 0,
                        popupKey: !1,
                        imgInfo: {},
                        makeText: "",
                        status: "more",
                        list: [],
                        page: 1,
                        score: 0,
                        loadAd: !1,
                        showAd: !1,
                        adType: 3,
                        adClick: !1,
                        showLogin: !1
                    };
                },
                onLoad: function() {
                    this.getData();
                },
                onShow: function() {
                    var n = this;
                    this.meme.getScore().then(function(t) {
                        n.score = t.code ? t.data.score : 0;
                    }), this.userInfo = this.storage.get("userInfo", null);
                },
                onHide: function() {
                    this.timer && (clearTimeout(this.timer), this.timer = null);
                },
                onShareAppMessage: function(n) {
                    return {
                        title: this.makeText + "表情包在线制作",
                        path: "/pages/make/make?uid=" + (this.userInfo ? this.userInfo.id : 0),
                        imageUrl: this.imgInfo.src
                    };
                },
                onPullDownRefresh: function() {
                    this.page = 0, this.getData();
                },
                onReachBottom: function() {
                    this.getData(!0);
                },
                onPageScroll: function(n) {
                    this.scrollTop = n.scrollTop;
                },
                methods: {
                    getData: function() {
                        var t = this, e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.status = "loading";
                        var o = {
                            page: this.page,
                            type: 1,
                            is_make: 1
                        };
                        this.meme.request("Wxapp/list", o, "POST", !1, !0).then(function(o) {
                            if (1 == o.code) {
                                var i = o.data.list;
                                t.list = e ? t.list.concat(i) : i, t.status = i.length < 18 ? "noMore" : "more", 
                                t.page = o.data.next_page;
                            } else t.status = "noMore";
                            e || (t.timer = setTimeout(function() {
                                n.stopPullDownRefresh();
                            }, 500));
                        }).catch(function(n) {});
                    },
                    listenMake: function(n) {
                        this.makeText = n;
                    },
                    openPopup: function(n) {
                        this.popupKey = !0, this.imgInfo = n;
                    },
                    popupClose: function(n) {
                        n ? this.showLogin = n : (this.loadAd = n, this.showAd = n, this.popupKey = n);
                    },
                    openPrivate: function(n) {
                        this.privateKey = n;
                    },
                    closePrivate: function(n) {
                        this.privateKey = n;
                    },
                    deductScore: function(n) {
                        var t = this;
                        this.adClick || this.meme.setScore(-1, "制作表情").then(function(n) {
                            1 == n.code && (t.score = n.data);
                        }), this.loadAd = n, this.showAd = n, this.adClick = n;
                    },
                    newScore: function(n) {
                        this.score = n;
                    },
                    changeAd: function(n) {
                        this.loadAd = !1, this.showAd = !1, 3 == this.adType && (this.adClick = n);
                    },
                    videoAdShow: function(n) {
                        null == this.userInfo ? this.showLogin = !0 : (this.loadAd = n, this.adType = "notscore" == n ? 3 : 1, 
                        this.showAd = n);
                    },
                    handleClick: function(n) {
                        var t = this;
                        this.showLogin = !1, 1 == n.index && this.$api.autoLogin().then(function(n) {
                            t.score = n.score, t.userInfo = n;
                        });
                    }
                }
            };
            t.default = o;
        }).call(this, e("543d").default);
    }
}, [ [ "def4", "common/runtime", "common/vendor" ] ] ]);