(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/focus-fans/focus-fans" ], {
    "2bef": function(t, n, o) {
        o.d(n, "b", function() {
            return e;
        }), o.d(n, "c", function() {
            return i;
        }), o.d(n, "a", function() {});
        var e = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
    },
    "3c5f": function(t, n, o) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            o("1c42"), n(o("66fd")), t(n(o("c207")).default);
        }).call(this, o("543d").createPage);
    },
    "572d": function(t, n, o) {},
    "729e": function(t, n, o) {
        o.r(n);
        var e = o("92a7"), i = o.n(e);
        for (var c in e) "default" !== c && function(t) {
            o.d(n, t, function() {
                return e[t];
            });
        }(c);
        n.default = i.a;
    },
    "92a7": function(t, n, o) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = {
                components: {
                    tuiSticky: function() {
                        o.e("components/common/sticky").then(function() {
                            return resolve(o("3e65"));
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
                        status: "more",
                        scrollTop: 0,
                        activeOptions: 1,
                        focusOrFans: [ {
                            id: 1,
                            name: "关注"
                        }, {
                            id: 2,
                            name: "粉丝"
                        } ],
                        focusData: []
                    };
                },
                onLoad: function(t) {
                    this.activeOptions = t.num, this.__init();
                },
                onPageScroll: function(t) {
                    this.scrollTop = t.scrollTop;
                },
                onPullDownRefresh: function() {
                    this.page = 0, this.focusData = [], this.getFollow();
                },
                onReachBottom: function() {
                    this.getFollow(!0);
                },
                methods: {
                    __init: function() {
                        t.setNavigationBarTitle({
                            title: "我的" + (1 == this.activeOptions ? "关注" : "粉丝")
                        }), this.getFollow();
                    },
                    getFollow: function() {
                        var n = this, o = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        this.status = "loading", this.meme.request("User/getFollow", {
                            page: this.page,
                            type: this.activeOptions
                        }, "POST", !0, !1).then(function(e) {
                            var i = e.data.list;
                            n.focusData = o ? n.focusData.concat(i) : i, n.status = i.length < 15 ? "noMore" : "more", 
                            n.page = e.data.page, o || (n.timer = setTimeout(function() {
                                t.stopPullDownRefresh();
                            }, 500));
                        }).catch(function(t) {});
                    },
                    changeOptions: function(t) {
                        this.activeOptions != t && (this.page = 0, this.focusData = [], this.activeOptions = t, 
                        this.__init());
                    },
                    changeState: function(t, n) {
                        if (1 == this.activeOptions) {
                            var o = this.focusData[n];
                            o.focus = 0 == o.focus ? 1 : 0, this.meme.request("User/addUserFollow", {
                                id: t
                            }, "POST", !0, !0);
                        }
                    }
                }
            };
            n.default = e;
        }).call(this, o("543d").default);
    },
    "9c7e": function(t, n, o) {
        var e = o("572d");
        o.n(e).a;
    },
    c207: function(t, n, o) {
        o.r(n);
        var e = o("2bef"), i = o("729e");
        for (var c in i) "default" !== c && function(t) {
            o.d(n, t, function() {
                return i[t];
            });
        }(c);
        o("9c7e");
        var a = o("f0c5"), u = Object(a.a)(i.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        n.default = u.exports;
    }
}, [ [ "3c5f", "common/runtime", "common/vendor" ] ] ]);