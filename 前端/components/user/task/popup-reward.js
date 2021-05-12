(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/user/task/popup-reward" ], {
    "6c60": function(e, t, n) {},
    b61b: function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return a;
        }), n.d(t, "a", function() {});
        var o = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, a = [];
    },
    be9e: function(e, t, n) {
        n.r(t);
        var o = n("b61b"), a = n("c965");
        for (var u in a) "default" !== u && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(u);
        n("e9ce");
        var c = n("f0c5"), r = Object(c.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = r.exports;
    },
    c965: function(e, t, n) {
        n.r(t);
        var o = n("d20f"), a = n.n(o);
        for (var u in o) "default" !== u && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(u);
        t.default = a.a;
    },
    d20f: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            props: {
                dataVal: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                popupKey: {
                    type: Boolean,
                    default: !1
                },
                rewardKey: {
                    type: Boolean,
                    default: !1
                },
                rewardVal: {
                    type: Number,
                    default: 0
                }
            },
            data: function() {
                return {
                    IsAdVideo: this.IsAdVideo
                };
            },
            methods: {
                close: function(e) {
                    this.$emit("closePopup", e);
                },
                watchAd: function() {
                    this.$emit("watchAd");
                }
            }
        };
        t.default = o;
    },
    e9ce: function(e, t, n) {
        var o = n("6c60");
        n.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/user/task/popup-reward-create-component", {
    "components/user/task/popup-reward-create-component": function(e, t, n) {
        n("543d").createComponent(n("be9e"));
    }
}, [ [ "components/user/task/popup-reward-create-component" ] ] ]);