(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/user/user-info" ], {
    "0f61": function(n, e, t) {
        var o = t("9da8");
        t.n(o).a;
    },
    "5f8b": function(n, e, t) {
        t.r(e);
        var o = t("6a27"), a = t("ebc1");
        for (var u in a) "default" !== u && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(u);
        t("0f61");
        var s = t("f0c5"), c = Object(s.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = c.exports;
    },
    "6a27": function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return a;
        }), t.d(e, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
    },
    "9da8": function(n, e, t) {},
    b461: function(n, e, t) {
        (function(n) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var t = {
                props: {
                    resdata: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    messageTotal: {
                        type: Number,
                        default: 0
                    },
                    userInfo: null
                },
                methods: {
                    Login: function() {
                        var n = this;
                        this.$api.autoLogin().then(function(e) {
                            n.$emit("setUserInfo", e);
                        });
                    },
                    toPage: function(e) {
                        n.navigateTo({
                            url: "/pages/focus-fans/focus-fans?num=" + e
                        });
                    },
                    message: function() {
                        n.navigateTo({
                            url: "/pages/news-message/news-message"
                        });
                    },
                    toTask: function() {
                        n.navigateTo({
                            url: "/pages/user/task/task"
                        });
                    }
                }
            };
            e.default = t;
        }).call(this, t("543d").default);
    },
    ebc1: function(n, e, t) {
        t.r(e);
        var o = t("b461"), a = t.n(o);
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        e.default = a.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/user/user-info-create-component", {
    "components/user/user-info-create-component": function(n, e, t) {
        t("543d").createComponent(t("5f8b"));
    }
}, [ [ "components/user/user-info-create-component" ] ] ]);