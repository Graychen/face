(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/common/sticky" ], {
    "199c": function(t, e, n) {
        n.r(e);
        var o = n("50c5"), c = n.n(o);
        for (var i in o) "default" !== i && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(i);
        e.default = c.a;
    },
    "3e65": function(t, e, n) {
        n.r(e);
        var o = n("bca5"), c = n("199c");
        for (var i in c) "default" !== i && function(t) {
            n.d(e, t, function() {
                return c[t];
            });
        }(i);
        n("5007");
        var a = n("f0c5"), u = Object(a.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = u.exports;
    },
    "4aca": function(t, e, n) {},
    5007: function(t, e, n) {
        var o = n("4aca");
        n.n(o).a;
    },
    "50c5": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                name: "tuiSticky",
                props: {
                    scrollTop: {
                        type: Number
                    },
                    stickyTop: {
                        type: [ Number, String ],
                        default: 0
                    },
                    stickyHeight: {
                        type: String,
                        default: "auto"
                    },
                    bgColor: {
                        type: String,
                        default: "none"
                    },
                    index: {
                        type: [ Number, String ],
                        default: 0
                    }
                },
                watch: {
                    scrollTop: function(t, e) {
                        this.updateStickyChange();
                    }
                },
                onReady: function() {
                    this.updateScrollChange();
                },
                data: function() {
                    return {
                        timer: null,
                        top: 0,
                        height: 0,
                        isFixed: !1
                    };
                },
                methods: {
                    updateStickyChange: function() {
                        var t = this.top, e = (this.height, this.scrollTop), n = this.stickyTop;
                        this.isFixed = e + n >= t;
                    },
                    updateScrollChange: function() {
                        var e = this;
                        this.timer && (clearTimeout(this.timer), this.timer = null), this.timer = setTimeout(function() {
                            t.createSelectorQuery().in(e).select(".tui-sticky-class").boundingClientRect(function(t) {
                                t && (e.top = t.top + (e.scrollTop || 0), e.height = t.height, e.$emit("change", {
                                    index: Number(e.index),
                                    top: e.top
                                }));
                            }).exec();
                        }, 0);
                    }
                }
            };
            e.default = n;
        }).call(this, n("543d").default);
    },
    bca5: function(t, e, n) {
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
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/common/sticky-create-component", {
    "components/common/sticky-create-component": function(t, e, n) {
        n("543d").createComponent(n("3e65"));
    }
}, [ [ "components/common/sticky-create-component" ] ] ]);