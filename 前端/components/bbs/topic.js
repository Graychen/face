(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/bbs/topic" ], {
    "0133": function(n, t, e) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            props: {
                resdata: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                all_show: {
                    type: Boolean,
                    default: function() {
                        return !1;
                    }
                }
            }
        };
        t.default = o;
    },
    "121c": function(n, t, e) {
        var o = e("c0f9");
        e.n(o).a;
    },
    1301: function(n, t, e) {
        e.d(t, "b", function() {
            return o;
        }), e.d(t, "c", function() {
            return c;
        }), e.d(t, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
    },
    "5fe2": function(n, t, e) {
        e.r(t);
        var o = e("0133"), c = e.n(o);
        for (var a in o) "default" !== a && function(n) {
            e.d(t, n, function() {
                return o[n];
            });
        }(a);
        t.default = c.a;
    },
    c0f9: function(n, t, e) {},
    e9f5: function(n, t, e) {
        e.r(t);
        var o = e("1301"), c = e("5fe2");
        for (var a in c) "default" !== a && function(n) {
            e.d(t, n, function() {
                return c[n];
            });
        }(a);
        e("121c");
        var u = e("f0c5"), r = Object(u.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = r.exports;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/bbs/topic-create-component", {
    "components/bbs/topic-create-component": function(n, t, e) {
        e("543d").createComponent(e("e9f5"));
    }
}, [ [ "components/bbs/topic-create-component" ] ] ]);