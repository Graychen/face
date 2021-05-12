(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/punch-clock/record/record" ], {
    "16b9": function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("1c42"), n(e("66fd")), t(n(e("1fe3")).default);
        }).call(this, e("543d").createPage);
    },
    "1fe3": function(t, n, e) {
        e.r(n);
        var o = e("51c8"), a = e("f5a8");
        for (var c in a) "default" !== c && function(t) {
            e.d(n, t, function() {
                return a[t];
            });
        }(c);
        e("fd42");
        var r = e("f0c5"), u = Object(r.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        n.default = u.exports;
    },
    "51c8": function(t, n, e) {
        e.d(n, "b", function() {
            return o;
        }), e.d(n, "c", function() {
            return a;
        }), e.d(n, "a", function() {});
        var o = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, a = [];
    },
    "8d0b": function(t, n, e) {
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.default = void 0;
        var o = 0, a = {
            components: {
                uniLoadMore: function() {
                    e.e("components/common/uni-load-more/uni-load-more").then(function() {
                        return resolve(e("5208"));
                    }.bind(null, e)).catch(e.oe);
                }
            },
            data: function() {
                return {
                    status: "more",
                    recordData: {}
                };
            },
            onLoad: function() {
                null == this.storage.get("userInfo", null) && this.meme.loginModel(), o = 0, this.getData();
            },
            onReachBottom: function() {
                this.getData();
            },
            methods: {
                getData: function() {
                    var t = this;
                    this.status = "loading", this.meme.request("Daka/record", {
                        page: o
                    }, "POST", !0, !0).then(function(n) {
                        if (1 == n.code) {
                            var e = n.data;
                            t.status = e.data.list.length < 10 ? "noMore" : "more", Object.keys(t.recordData).length ? t.recordData.list = t.recordData.list.concat(e.data.list) : t.recordData = e.data, 
                            e.data.list.length > 0 && (o = e.page);
                        } else t.status = "noMore";
                    }).catch(function(t) {});
                }
            }
        };
        n.default = a;
    },
    f47b: function(t, n, e) {},
    f5a8: function(t, n, e) {
        e.r(n);
        var o = e("8d0b"), a = e.n(o);
        for (var c in o) "default" !== c && function(t) {
            e.d(n, t, function() {
                return o[t];
            });
        }(c);
        n.default = a.a;
    },
    fd42: function(t, n, e) {
        var o = e("f47b");
        e.n(o).a;
    }
}, [ [ "16b9", "common/runtime", "common/vendor" ] ] ]);