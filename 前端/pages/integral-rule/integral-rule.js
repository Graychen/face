(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/integral-rule/integral-rule" ], {
    "219c": function(t, n, a) {
        a.d(n, "b", function() {
            return e;
        }), a.d(n, "c", function() {
            return u;
        }), a.d(n, "a", function() {});
        var e = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, u = [];
    },
    "23ee": function(t, n, a) {
        a.r(n);
        var e = a("219c"), u = a("8801");
        for (var i in u) "default" !== i && function(t) {
            a.d(n, t, function() {
                return u[t];
            });
        }(i);
        a("8d49");
        var d = a("f0c5"), o = Object(d.a)(u.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        n.default = o.exports;
    },
    5615: function(t, n, a) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            a("1c42"), n(a("66fd")), t(n(a("23ee")).default);
        }).call(this, a("543d").createPage);
    },
    8801: function(t, n, a) {
        a.r(n);
        var e = a("b481"), u = a.n(e);
        for (var i in e) "default" !== i && function(t) {
            a.d(n, t, function() {
                return e[t];
            });
        }(i);
        n.default = u.a;
    },
    "8d49": function(t, n, a) {
        var e = a("e849");
        a.n(e).a;
    },
    b481: function(t, n, a) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var e = {
            data: function() {
                return {
                    data: [ {
                        title: "获取积分",
                        data: [ "每日签到可获得0.2积分；", "连续签到七天以上可获得0.5积分；", "观看视频广告赚积分每次可获得1积分；", "通过分享表情包、图片等，用户通过您分享的小程序进入，并保存对应的图片后可获得0.5积分；", "通过您推荐的用户在以后的使用过程中，如保存表情包、看广告视频等，可获得0.2积分；", "通过个人中心进行表情包、图片上传，用户保存您上传的图片，可获得0.5积分；", "通过发表动态，用户保存您动态内发表的表情包、图片等，可获得0.5积分；" ]
                    }, {
                        title: "关于积分",
                        data: [ "100积分等于1元整；", "积分提现最低100积分起提；", "积分可用于表情解锁、制作表情，积分提现等；", "每天看广告次数超过20次将无法继续获得积分；", "看广告频率5分钟/次，频繁观看无法获得积分；" ]
                    } ]
                };
            },
            onLoad: function() {
                this.IsAdVideo || (this.data[0].data = this.data[0].data.splice(0, 2), this.data[1].data = this.data[1].data.splice(0, 3));
            }
        };
        n.default = e;
    },
    e849: function(t, n, a) {}
}, [ [ "5615", "common/runtime", "common/vendor" ] ] ]);