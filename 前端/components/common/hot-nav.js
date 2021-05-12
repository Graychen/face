(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/common/hot-nav" ], {
    "16f6": function(n, t, e) {
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return r;
        }), e.d(t, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, r = [];
    },
    "3f33": function(n, t, e) {
        e.r(t);
        var o = e("4175"), r = e.n(o);
        for (var a in o) "default" !== a && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(a);
        t.default = r.a;
    },
    4175: function(n, t, e) {
        (function(n) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var e = {
                props: {
                    icon: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    title: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    more: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    },
                    type: {
                        type: [ String, Number ],
                        default: ""
                    },
                    order: {
                        type: String,
                        default: function() {
                            return "";
                        }
                    }
                },
                methods: {
                    clickMore: function(t, e, o) {
                        "routine" == t ? n.navigateTo({
                            url: "/pages/routine/routine"
                        }) : 3 == t ? n.navigateTo({
                            url: "/pages/detail/more-wallpaper?order=" + e
                        }) : n.navigateTo({
                            url: "/pages/detail/suit-code?type=" + t + "&order=" + e + "&title=" + o
                        });
                    }
                }
            };
            t.default = e;
        }).call(this, e("543d").default);
    },
    d487: function(n, t, e) {
        e.r(t);
        var o = e("16f6"), r = e("3f33");
        for (var a in r) "default" !== a && function(n) {
            e.d(t, n, function() {
                return r[n];
            });
        }(a);
        var u = e("f0c5"), c = Object(u.a)(r.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = c.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/common/hot-nav-create-component", {
    "components/common/hot-nav-create-component": function(n, t, e) {
        e("543d").createComponent(e("d487"));
    }
}, [ [ "components/common/hot-nav-create-component" ] ] ]);