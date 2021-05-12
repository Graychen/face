(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/common/u-skeleton/u-skeleton" ], {
    "016e": function(e, t, n) {
        n.r(t);
        var o = n("e673"), l = n("4d97");
        for (var c in l) "default" !== c && function(e) {
            n.d(t, e, function() {
                return l[e];
            });
        }(c);
        n("fd3f");
        var i = n("f0c5"), u = Object(i.a)(l.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = u.exports;
    },
    "4d97": function(e, t, n) {
        n.r(t);
        var o = n("644c"), l = n.n(o);
        for (var c in o) "default" !== c && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(c);
        t.default = l.a;
    },
    "644c": function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                name: "u-skeleton",
                props: {
                    elColor: {
                        type: String,
                        default: "#e5e5e5"
                    },
                    bgColor: {
                        type: String,
                        default: "#ffffff"
                    },
                    animation: {
                        type: Boolean,
                        default: !1
                    },
                    borderRadius: {
                        type: [ String, Number ],
                        default: "10"
                    },
                    loading: {
                        type: Boolean,
                        default: !0
                    }
                },
                data: function() {
                    return {
                        windowWinth: 750,
                        windowHeight: 1500,
                        filletNodes: [],
                        circleNodes: [],
                        RectNodes: [],
                        top: 0,
                        left: 0
                    };
                },
                methods: {
                    selecterQueryInfo: function() {
                        var t = this;
                        e.createSelectorQuery().selectAll(".u-skeleton").boundingClientRect().exec(function(e) {
                            t.windowHeight = e[0][0].height, t.windowWinth = e[0][0].width, t.top = e[0][0].bottom - e[0][0].height, 
                            t.left = e[0][0].left;
                        }), this.getRectEls(), this.getCircleEls(), this.getFilletEls();
                    },
                    getRectEls: function() {
                        var t = this;
                        e.createSelectorQuery().selectAll(".u-skeleton-rect").boundingClientRect().exec(function(e) {
                            t.RectNodes = e[0];
                        });
                    },
                    getFilletEls: function() {
                        var t = this;
                        e.createSelectorQuery().selectAll(".u-skeleton-fillet").boundingClientRect().exec(function(e) {
                            t.filletNodes = e[0];
                        });
                    },
                    getCircleEls: function() {
                        var t = this;
                        e.createSelectorQuery().selectAll(".u-skeleton-circle").boundingClientRect().exec(function(e) {
                            t.circleNodes = e[0];
                        });
                    }
                },
                mounted: function() {
                    var t = e.getSystemInfoSync();
                    this.windowHeight = t.windowHeight, this.windowWinth = t.windowWidth, this.selecterQueryInfo();
                }
            };
            t.default = n;
        }).call(this, n("543d").default);
    },
    "70f2": function(e, t, n) {},
    e673: function(e, t, n) {
        n.d(t, "b", function() {
            return o;
        }), n.d(t, "c", function() {
            return l;
        }), n.d(t, "a", function() {});
        var o = function() {
            var e = this, t = (e.$createElement, e._self._c, e.meme.guid()), n = e.meme.guid(), o = e.meme.guid();
            e.$mp.data = Object.assign({}, {
                $root: {
                    g0: t,
                    g1: n,
                    g2: o
                }
            });
        }, l = [];
    },
    fd3f: function(e, t, n) {
        var o = n("70f2");
        n.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/common/u-skeleton/u-skeleton-create-component", {
    "components/common/u-skeleton/u-skeleton-create-component": function(e, t, n) {
        n("543d").createComponent(n("016e"));
    }
}, [ [ "components/common/u-skeleton/u-skeleton-create-component" ] ] ]);