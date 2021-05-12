(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/bbs/comments-more" ], {
    2956: function(n, e, t) {
        t.r(e);
        var o = t("5902"), a = t("bcc5");
        for (var c in a) "default" !== c && function(n) {
            t.d(e, n, function() {
                return a[n];
            });
        }(c);
        t("ec6a");
        var u = t("f0c5"), r = Object(u.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = r.exports;
    },
    "4abd": function(n, e, t) {},
    5902: function(n, e, t) {
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
    bcc5: function(n, e, t) {
        t.r(e);
        var o = t("df67"), a = t.n(o);
        for (var c in o) "default" !== c && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(c);
        e.default = a.a;
    },
    df67: function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            components: {
                bbsHeadName: function() {
                    t.e("components/bbs/bbs-head-name").then(function() {
                        return resolve(t("9a53"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            props: {
                resdata: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                },
                pid: {
                    type: Number,
                    default: 0
                },
                ins: {
                    type: Number,
                    default: 0
                }
            },
            computed: {
                changeData: function() {
                    return this.show ? [ this.resdata[0] ] : this.resdata;
                }
            },
            data: function() {
                return {
                    show: !0
                };
            },
            methods: {
                openMore: function() {
                    this.show = !1;
                },
                preview: function(n) {
                    this.meme.preViewImage(n);
                },
                openinput: function(n, e, t, o) {
                    this.$emit("callBackOpenInput", {
                        data: {
                            pid: n,
                            uid: e,
                            fid: o,
                            name: "回复" + t
                        },
                        index: this.ins
                    });
                }
            }
        };
        e.default = o;
    },
    ec6a: function(n, e, t) {
        var o = t("4abd");
        t.n(o).a;
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/bbs/comments-more-create-component", {
    "components/bbs/comments-more-create-component": function(n, e, t) {
        t("543d").createComponent(t("2956"));
    }
}, [ [ "components/bbs/comments-more-create-component" ] ] ]);