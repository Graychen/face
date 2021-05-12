(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/common/tips/tips" ], {
    1128: function(t, e, n) {},
    "49ee": function(t, e, n) {
        var o = n("1128");
        n.n(o).a;
    },
    5704: function(t, e, n) {
        n.r(e);
        var o = n("e6e3"), c = n("7c18");
        for (var i in c) "default" !== i && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(i);
        n("49ee");
        var u = n("f0c5"), a = Object(u.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = a.exports;
    },
    "7c18": function(t, e, n) {
        n.r(e);
        var o = n("c949"), c = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = c.a;
    },
    c949: function(t, e, n) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            name: "tuiTips",
            props: {
                fixed: {
                    type: Boolean,
                    default: !0
                },
                imgUrl: {
                    type: String,
                    default: ""
                },
                imgWidth: {
                    type: Number,
                    default: 200
                },
                imgHeight: {
                    type: Number,
                    default: 200
                },
                btnWidth: {
                    type: Number,
                    default: 200
                },
                btnText: {
                    type: String,
                    default: ""
                }
            },
            methods: {
                handleClick: function(t) {
                    this.$emit("click", {});
                }
            }
        };
        e.default = o;
    },
    e6e3: function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return c;
        }), n.d(e, "a", function() {});
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, c = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/common/tips/tips-create-component", {
    "components/common/tips/tips-create-component": function(t, e, n) {
        n("543d").createComponent(n("5704"));
    }
}, [ [ "components/common/tips/tips-create-component" ] ] ]);