(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/popup/share" ], {
    "0d50": function(e, t, n) {
        n.r(t);
        var o = n("575d"), a = n("d860");
        for (var c in a) "default" !== c && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(c);
        n("e2b0");
        var u = n("f0c5"), r = Object(u.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = r.exports;
    },
    "575d": function(e, t, n) {
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
    ca0a: function(e, t, n) {},
    d860: function(e, t, n) {
        n.r(t);
        var o = n("ee76"), a = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = a.a;
    },
    e2b0: function(e, t, n) {
        var o = n("ca0a");
        n.n(o).a;
    },
    ee76: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            props: {
                show: {
                    type: Boolean,
                    default: !1
                },
                type: {
                    type: String,
                    default: "share"
                }
            },
            computed: {
                setTitle: function() {
                    var e = {
                        title: "分享红包给好友",
                        text1: "快发给小伙伴，自己也可以领",
                        text2: "看谁的手气最好"
                    };
                    return "lucky" == this.type && (e = {
                        title: "拼手气红包",
                        text1: "红包数量有限，快告诉朋友吧",
                        text2: ""
                    }), e;
                }
            },
            methods: {
                back: function() {
                    this.$emit("click");
                }
            }
        };
        t.default = o;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/popup/share-create-component", {
    "components/popup/share-create-component": function(e, t, n) {
        n("543d").createComponent(n("0d50"));
    }
}, [ [ "components/popup/share-create-component" ] ] ]);