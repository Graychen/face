(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/waimai/waimai" ], {
    "1e12": function(t, n, e) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var i = null, o = null, a = {
                components: {
                    tiShare: function() {
                        e.e("components/popup/share").then(function() {
                            return resolve(e("0d50"));
                        }.bind(null, e)).catch(e.oe);
                    }
                },
                data: function() {
                    return {
                        custom_right: 30,
                        show_tip: !0,
                        show: !1,
                        scroll: !1,
                        selectCurrent: 0,
                        menu: [ {
                            name: "外卖红包",
                            type: 1,
                            src: "/static/image/icon/wm.gif"
                        }, {
                            name: "出行优惠",
                            type: 2,
                            src: "/static/image/icon/cx.gif"
                        }, {
                            name: "美食娱乐",
                            type: 3,
                            src: "/static/image/icon/ms.png"
                        }, {
                            name: "酒店购物",
                            type: 4,
                            src: "/static/image/icon/gw.png"
                        } ],
                        data: []
                    };
                },
                onLoad: function() {
                    this.getData();
                },
                onUnload: function() {
                    i && (clearTimeout(i), i = null), o && (clearTimeout(o), o = null);
                },
                onReady: function() {
                    var n = t.getSystemInfoSync(), e = t.getMenuButtonBoundingClientRect();
                    this.custom_right = n.screenWidth - e.right + e.width / 2;
                },
                onPageScroll: function(t) {
                    var n = this;
                    this.scroll || (this.scroll = !0), i && (clearTimeout(i), i = null), i = setTimeout(function() {
                        n.scroll = !1;
                    }, 1e3);
                },
                onShow: function(){
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
                onShareAppMessage: function(t) {
                    return "button" == t.from && "popup" == t.target.id && (this.show = !1), {
                        title: "美团、饿了么最高领56元无门槛外卖红包",
                        path: "/pages/waimai/waimai"
                    };
                },
                onShareTimeline: function(t) {
                    return "button" == t.from && "popup" == t.target.id && (this.show = !1), {
                        title: "美团、饿了么最高领56元无门槛外卖红包",
                        path: "/pages/waimai/waimai"
                    };
                },
                methods: {
                    getData: function() {
                        var t = this, n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        this.meme.request("Fuli/getData", {
                            type: n
                        }, "POST", !0, !1).then(function(n) {
                            1 == n.code && (t.data = n.data);
                        });
                    },
                    receive: function(n) {
                        var e = this;
                        t.navigateToMiniProgram({
                            appId: n.appId,
                            path: n.path,
                            success: function(t) {
                                o = setTimeout(function() {
                                    e.show = !0;
                                }, 1e3);
                            }
                        });
                    },
                    touchMenu: function(t) {
                        this.selectCurrent != t && (this.selectCurrent = t, this.data = [], this.getData(this.menu[t].type));
                    },
                    changeShow: function() {
                        this.show = !1;
                    },
                    closeTip: function() {
                        this.show_tip = !1;
                    }
                }
            };
            n.default = a;
        }).call(this, e("543d").default);
    },
    4785: function(t, n, e) {
        var i = e("d88b");
        e.n(i).a;
    },
    "4c79": function(t, n, e) {
        e.r(n);
        var i = e("1e12"), o = e.n(i);
        for (var a in i) "default" !== a && function(t) {
            e.d(n, t, function() {
                return i[t];
            });
        }(a);
        n.default = o.a;
    },
    "4f54": function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("1c42"), n(e("66fd")), t(n(e("e0bd")).default);
        }).call(this, e("543d").createPage);
    },
    d88b: function(t, n, e) {},
    e0bd: function(t, n, e) {
        e.r(n);
        var i = e("e610"), o = e("4c79");
        for (var a in o) "default" !== a && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(a);
        e("4785");
        var c = e("f0c5"), u = Object(c.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        n.default = u.exports;
    },
    e610: function(t, n, e) {
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
    }
}, [ [ "4f54", "common/runtime", "common/vendor" ] ] ]);