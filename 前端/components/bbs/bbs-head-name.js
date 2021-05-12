(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/bbs/bbs-head-name" ], {
    3723: function(n, e, t) {
        t.d(e, "b", function() {
            return a;
        }), t.d(e, "c", function() {
            return o;
        }), t.d(e, "a", function() {});
        var a = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, o = [];
    },
    7849: function(n, e, t) {},
    "7c45": function(n, e, t) {
        t.r(e);
        var a = t("b547"), o = t.n(a);
        for (var u in a) "default" !== u && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(u);
        e.default = o.a;
    },
    "9a53": function(n, e, t) {
        t.r(e);
        var a = t("3723"), o = t("7c45");
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        t("aaf9");
        var c = t("f0c5"), r = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = r.exports;
    },
    aaf9: function(n, e, t) {
        var a = t("7849");
        t.n(a).a;
    },
    b547: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var a = {
            props: {
                pic: {
                    type: String,
                    default: ""
                },
                uname: {
                    type: String,
                    default: ""
                },
                uid: {
                    type: Number,
                    default: 0
                },
                topKey: {
                    type: Boolean,
                    default: !0
                },
                size: {
                    type: Number,
                    default: 32
                }
            }
        };
        e.default = a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/bbs/bbs-head-name-create-component", {
    "components/bbs/bbs-head-name-create-component": function(n, e, t) {
        t("543d").createComponent(t("9a53"));
    }
}, [ [ "components/bbs/bbs-head-name-create-component" ] ] ]);