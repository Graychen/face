(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/detail/wallpaper-pic" ], {
    "046b": function(e, t, n) {
        var o = n("62e6");
        n.n(o).a;
    },
    "5d8e": function(e, t, n) {
        n.r(t);
        var o = n("7306"), a = n.n(o);
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        t.default = a.a;
    },
    "62e6": function(e, t, n) {},
    7306: function(e, t, n) {
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0;
        var o = {
            props: {
                resdata: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                timeData: {
                    type: Object,
                    default: function() {
                        return {};
                    }
                },
                timeShow: {
                    type: Boolean,
                    default: function() {
                        return !0;
                    }
                },
                NewHei: {
                    type: Number,
                    default: 0
                },
                swiperShow: {
                    type: Boolean,
                    default: function() {
                        return !0;
                    }
                },
                adClick: {
                    type: Boolean,
                    default: !1
                },
                userInfo: null
            },
            data: function() {
                return {
                    timerId: 0
                };
            },
            methods: {
                preview: function(e) {
                    null != this.userInfo ? 0 == this.adClick && this.IsAdVideo && this.userInfo.id != e.authorId && 0 == this.userInfo.is_vip ? this.$emit("videoAdShow", !0) : "Douyin" == this.appName ? this.meme.downloadDyImage(e.cdnurl) : this.meme.makeShow(this.storage.get("makeShow", !1), e.src, this.platform, !0) : this.$emit("changeLogin", !0);
                }
            }
        };
        t.default = o;
    },
    8713: function(e, t, n) {
        n.r(t);
        var o = n("dec3"), a = n("5d8e");
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        n("046b");
        var u = n("f0c5"), r = Object(u.a)(a.default, o.b, o.c, !1, null, null, null, !1, o.a, void 0);
        t.default = r.exports;
    },
    dec3: function(e, t, n) {
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
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/detail/wallpaper-pic-create-component", {
    "components/detail/wallpaper-pic-create-component": function(e, t, n) {
        n("543d").createComponent(n("8713"));
    }
}, [ [ "components/detail/wallpaper-pic-create-component" ] ] ]);