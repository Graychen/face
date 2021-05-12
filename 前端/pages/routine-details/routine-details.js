(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/routine-details/routine-details" ], {
    "04de": function(t, n, e) {
        e.r(n);
        var i = e("5fba"), o = e.n(i);
        for (var a in i) "default" !== a && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(a);
        n.default = o.a;
    },
    "31d8": function(t, n, e) {
        var i = e("e1b7");
        e.n(i).a;
    },
    "4bd2": function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("1c42"), n(e("66fd")), t(n(e("8cb8")).default);
        }).call(this, e("543d").createPage);
    },
    "5ca6": function(t, n, e) {
        e.d(n, "b", function() {
            return i;
        }), e.d(n, "c", function() {
            return o;
        }), e.d(n, "a", function() {});
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    },
    "5fba": function(t, n, e) {
        (function(t) {
            function i(t, n) {
                var e;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (e = o(t)) || n && t && "number" == typeof t.length) {
                        e && (t = e);
                        var i = 0, a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return i >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[i++]
                                };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: a
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var r, s = !0, u = !1;
                return {
                    s: function() {
                        e = t[Symbol.iterator]();
                    },
                    n: function() {
                        var t = e.next();
                        return s = t.done, t;
                    },
                    e: function(t) {
                        u = !0, r = t;
                    },
                    f: function() {
                        try {
                            s || null == e.return || e.return();
                        } finally {
                            if (u) throw r;
                        }
                    }
                };
            }
            function o(t, n) {
                if (t) {
                    if ("string" == typeof t) return a(t, n);
                    var e = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === e && t.constructor && (e = t.constructor.name), "Map" === e || "Set" === e ? Array.from(t) : "Arguments" === e || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e) ? a(t, n) : void 0;
                }
            }
            function a(t, n) {
                (null == n || n > t.length) && (n = t.length);
                for (var e = 0, i = new Array(n); e < n; e++) i[e] = t[e];
                return i;
            }
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var r = {
                components: {
                    ads: function() {
                        e.e("components/common/ads").then(function() {
                            return resolve(e("46ba"));
                        }.bind(null, e)).catch(e.oe);
                    },
                    adsVideo: function() {
                        e.e("components/common/ads-video").then(function() {
                            return resolve(e("233e"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                data: function() {
                    return {
                        sid: 0,
                        list: [],
                        title: "聊天套路表情包",
                        loadAd: !1,
                        showAd: !1,
                        adClick: this.storage.get("adClick", !1),
                        userInfo: this.storage.get("userInfo", null),
                        showLogin: !1
                    };
                },
                onLoad: function(n) {
                    n.hasOwnProperty("title") && (this.title = n.title, t.setNavigationBarTitle({
                        title: this.title
                    })), this.sid = n.id, this.getData(n.id);
                },
                onShow: function() {
                    this.adClick = this.storage.get("adClick", !1);
                },
                onShareAppMessage: function(t) {
                    return {
                        title: this.title,
                        path: "/pages/routine-details/routine-details?id=" + this.sid + "&uid=" + (this.userInfo ? this.userInfo.id : 0)
                    };
                },
                methods: {
                    getData: function(t) {
                        var n = this, e = {
                            type: 1,
                            is_make: 0,
                            group_id: t
                        };
                        this.meme.request("Wxapp/list", e, "POST", !0, !1).then(function(t) {
                            1 == t.code && (n.list = t.data.list);
                        }).catch(function(t) {});
                    },
                    pullDown: function() {
                        if (null == this.userInfo) this.showLogin = !0; else if (this.adClick || 0 == this.IsAdVideo || 1 == this.userInfo.is_vip) if ("Douyin" == this.appName) this.meme.downloadDyImage(this.list); else if (this.storage.get("makeShow", !1)) if ("android" == this.platform) {
                            var n, e = [], o = i(this.list);
                            try {
                                for (o.s(); !(n = o.n()).done; ) {
                                    var a = n.value;
                                    e.push(a.src);
                                }
                            } catch (t) {
                                o.e(t);
                            } finally {
                                o.f();
                            }
                            this.meme.__saveImg(e, 0, !0);
                        } else this.meme.preViewImage(this.list); else t.navigateTo({
                            url: "/pages/make/show?obj=" + encodeURIComponent(JSON.stringify(this.list))
                        }); else this.loadAd = !0, this.showAd = !0;
                    },
                    changeAd: function(t) {
                        this.loadAd = !1, this.showAd = !1, this.adClick = t, this.pullDown();
                    },
                    addCommission: function(t) {
                        this.adClick = t;
                    },
                    videoAdShow: function(t) {
                        this.loadAd = t, this.showAd = t;
                    },
                    updateUserInfo: function(t) {
                        this.userInfo = t;
                    },
                    handleClick: function(t) {
                        var n = this;
                        this.showLogin = !1, 1 == t.index && this.$api.autoLogin().then(function(t) {
                            n.userInfo = t;
                        });
                    }
                }
            };
            n.default = r;
        }).call(this, e("543d").default);
    },
    "8cb8": function(t, n, e) {
        e.r(n);
        var i = e("5ca6"), o = e("04de");
        for (var a in o) "default" !== a && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        e("31d8");
        var r = e("f0c5"), s = Object(r.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        n.default = s.exports;
    },
    e1b7: function(t, n, e) {}
}, [ [ "4bd2", "common/runtime", "common/vendor" ] ] ]);