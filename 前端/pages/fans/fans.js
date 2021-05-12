(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/fans/fans" ], {
    "0010": function(n, t, o) {
        (function(n) {
            function t(n) {
                return n && n.__esModule ? n : {
                    default: n
                };
            }
            o("1c42"), t(o("66fd")), n(t(o("3b5d")).default);
        }).call(this, o("543d").createPage);
    },
    "3b5d": function(n, t, o) {
        o.r(t);
        var e = o("cbba"), a = o("3bcb");
        for (var c in a) "default" !== c && function(n) {
            o.d(t, n, function() {
                return a[n];
            });
        }(c);
        o("8727");
        var u = o("f0c5"), i = Object(u.a)(a.default, e.b, e.c, !1, null, null, null, !1, e.a, void 0);
        t.default = i.exports;
    },
    "3bcb": function(n, t, o) {
        o.r(t);
        var e = o("6f8a"), a = o.n(e);
        for (var c in e) "default" !== c && function(n) {
            o.d(t, n, function() {
                return e[n];
            });
        }(c);
        t.default = a.a;
    },
    "6f8a": function(n, t, o) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var e = {
            components: {
                fansList: function() {
                    o.e("components/team-fans/fans-list").then(function() {
                        return resolve(o("a0c8"));
                    }.bind(null, o)).catch(o.oe);
                },
                backTop: function() {
                    o.e("components/common/back-top").then(function() {
                        return resolve(o("54c8"));
                    }.bind(null, o)).catch(o.oe);
                },
                uniLoadMore: function() {
                    o.e("components/common/uni-load-more/uni-load-more").then(function() {
                        return resolve(o("5208"));
                    }.bind(null, o)).catch(o.oe);
                }
            },
            data: function() {
                return {
                    status: "more",
                    scrollTop: 0,
                    page: 0,
                    total: 0,
                    Fans: []
                };
            },
            onLoad: function() {
                this.getList();
            },
            onPageScroll: function(n) {
                this.scrollTop = n.scrollTop;
            },
            onReachBottom: function() {
                this.getList();
            },
            methods: {
                getList: function() {
                    var n = this;
                    this.status = "loading", this.meme.request("User/getParent", {
                        page: this.page
                    }, "POST", !0, !1).then(function(t) {
                        n.page = t.data.page, n.Fans = t.data.list, n.total = t.data.total, t.data.list.length < 10 ? n.status = "noMore" : n.status = "more";
                    }).catch(function(n) {});
                }
            }
        };
        t.default = e;
    },
    "797d": function(n, t, o) {},
    8727: function(n, t, o) {
        var e = o("797d");
        o.n(e).a;
    },
    cbba: function(n, t, o) {
        o.d(t, "b", function() {
            return e;
        }), o.d(t, "c", function() {
            return a;
        }), o.d(t, "a", function() {});
        var e = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, a = [];
    }
}, [ [ "0010", "common/runtime", "common/vendor" ] ] ]);