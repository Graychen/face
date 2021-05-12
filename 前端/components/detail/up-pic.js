(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/detail/up-pic" ], {
    "14dc": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                props: {
                    resdata: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    },
                    initData: {
                        type: Object,
                        default: function() {
                            return {};
                        }
                    }
                },
                methods: {
                    clickAuthor: function() {
                        this.resdata.id && t.navigateTo({
                            url: "/pages/jump-author/jump-author?authorId=" + this.resdata.id
                        });
                    },
                    report: function(e) {
                        t.navigateTo({
                            url: "/pages/report/report?id=" + e
                        });
                    }
                }
            };
            e.default = n;
        }).call(this, n("543d").default);
    },
    "48de": function(t, e, n) {
        n.r(e);
        var a = n("af57"), o = n("e7f6");
        for (var u in o) "default" !== u && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(u);
        var c = n("f0c5"), r = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        e.default = r.exports;
    },
    af57: function(t, e, n) {
        n.d(e, "b", function() {
            return a;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var a = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    },
    e7f6: function(t, e, n) {
        n.r(e);
        var a = n("14dc"), o = n.n(a);
        for (var u in a) "default" !== u && function(t) {
            n.d(e, t, function() {
                return a[t];
            });
        }(u);
        e.default = o.a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/detail/up-pic-create-component", {
    "components/detail/up-pic-create-component": function(t, e, n) {
        n("543d").createComponent(n("48de"));
    }
}, [ [ "components/detail/up-pic-create-component" ] ] ]);