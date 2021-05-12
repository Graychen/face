(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/bbs/text-shrink" ], {
    "5f07": function(t, e, n) {
        n.d(e, "b", function() {
            return o;
        }), n.d(e, "c", function() {
            return i;
        }), n.d(e, "a", function() {});
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, i = [];
    },
    "8c26": function(t, e, n) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                props: {
                    line: {
                        type: Number,
                        default: 2
                    },
                    text: {
                        type: String,
                        default: ""
                    },
                    size: {
                        type: Number,
                        default: 28
                    },
                    btnSize: {
                        type: Number,
                        default: 28
                    },
                    ellipsisBack: {
                        type: String,
                        default: "#fff"
                    },
                    hideEllips: {
                        type: Boolean,
                        default: !1
                    }
                },
                data: function() {
                    return {
                        oldText: this.text,
                        borderHeight: 0,
                        contentHeight: 0,
                        isShowBtn: !1,
                        openStauts: !1
                    };
                },
                updated: function() {
                    this.oldText != this.text && (this.oldText = this.text, this.initBtnShowStauts());
                },
                mounted: function() {
                    this.oldText = this.text, this.initBtnShowStauts();
                },
                methods: {
                    initBtnShowStauts: function() {
                        var e = this, n = t.createSelectorQuery().in(this), o = new Promise(function(t) {
                            e.$nextTick(function() {
                                n.select(".content-borderbox").fields({
                                    size: !0,
                                    scrollOffset: !0
                                }, function(e) {
                                    t(e.height);
                                }).exec();
                            });
                        }), i = new Promise(function(t) {
                            e.$nextTick(function() {
                                n.select(".content-text").fields({
                                    size: !0,
                                    scrollOffset: !0
                                }, function(e) {
                                    t(e.height);
                                }).exec();
                            });
                        });
                        Promise.all([ o, i ]).then(function(t) {
                            e.borderHeight = t[0], e.contentHeight = t[1], e.isShowBtn = e.borderHeight < e.contentHeight;
                        });
                    },
                    showAll: function() {
                        this.openStauts = !this.openStauts;
                    }
                }
            };
            e.default = n;
        }).call(this, n("543d").default);
    },
    b430: function(t, e, n) {},
    bc3f: function(t, e, n) {
        n.r(e);
        var o = n("8c26"), i = n.n(o);
        for (var c in o) "default" !== c && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(c);
        e.default = i.a;
    },
    bd68: function(t, e, n) {
        n.r(e);
        var o = n("5f07"), i = n("bc3f");
        for (var c in i) "default" !== c && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(c);
        n("f7a4");
        var u = n("f0c5"), s = Object(u.a)(i.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = s.exports;
    },
    f7a4: function(t, e, n) {
        var o = n("b430");
        n.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/bbs/text-shrink-create-component", {
    "components/bbs/text-shrink-create-component": function(t, e, n) {
        n("543d").createComponent(n("bd68"));
    }
}, [ [ "components/bbs/text-shrink-create-component" ] ] ]);