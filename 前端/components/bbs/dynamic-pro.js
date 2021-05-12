(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/bbs/dynamic-pro" ], {
    "5a1f": function(n, e, t) {
        t.r(e);
        var o = t("7d73"), c = t("871d");
        for (var u in c) "default" !== u && function(n) {
            t.d(e, n, function() {
                return c[n];
            });
        }(u);
        t("bec3");
        var a = t("f0c5"), r = Object(a.a)(c.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        e.default = r.exports;
    },
    "7d73": function(n, e, t) {
        t.d(e, "b", function() {
            return o;
        }), t.d(e, "c", function() {
            return c;
        }), t.d(e, "a", function() {});
        var o = function() {
            var n = this;
            n.$createElement;
            n._self._c;
        }, c = [];
    },
    "871d": function(n, e, t) {
        t.r(e);
        var o = t("98ec"), c = t.n(o);
        for (var u in o) "default" !== u && function(n) {
            t.d(e, n, function() {
                return o[n];
            });
        }(u);
        e.default = c.a;
    },
    "98ec": function(n, e, t) {
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.default = void 0;
        var o = {
            components: {
                textShrink: function() {
                    t.e("components/bbs/text-shrink").then(function() {
                        return resolve(t("bd68"));
                    }.bind(null, t)).catch(t.oe);
                },
                topic: function() {
                    t.e("components/bbs/topic").then(function() {
                        return resolve(t("e9f5"));
                    }.bind(null, t)).catch(t.oe);
                },
                bbsHeadName: function() {
                    t.e("components/bbs/bbs-head-name").then(function() {
                        return resolve(t("9a53"));
                    }.bind(null, t)).catch(t.oe);
                },
                openMenu: function() {
                    t.e("components/bbs/open-menu").then(function() {
                        return resolve(t("4198"));
                    }.bind(null, t)).catch(t.oe);
                },
                bbsPic: function() {
                    t.e("components/bbs/bbs-pic").then(function() {
                        return resolve(t("a47e"));
                    }.bind(null, t)).catch(t.oe);
                }
            },
            props: {
                resdata: {
                    type: Array,
                    default: function() {
                        return [];
                    }
                }
            },
            data: function() {
                return {
                    userInfo: this.storage.get("userInfo", null)
                };
            },
            methods: {
                like: function(n) {
                    this.$emit("callBackIsLike", n);
                },
                delBbs: function(n) {
                    this.$emit("callBackDelBbs", n);
                }
            }
        };
        e.default = o;
    },
    bec3: function(n, e, t) {
        var o = t("de4d");
        t.n(o).a;
    },
    de4d: function(n, e, t) {}
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/bbs/dynamic-pro-create-component", {
    "components/bbs/dynamic-pro-create-component": function(n, e, t) {
        t("543d").createComponent(t("5a1f"));
    }
}, [ [ "components/bbs/dynamic-pro-create-component" ] ] ]);