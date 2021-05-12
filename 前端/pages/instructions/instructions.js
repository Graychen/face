(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/instructions/instructions" ], {
    "2e43": function(t, n, e) {
        e.r(n);
        var c = e("60a2"), u = e.n(c);
        for (var a in c) "default" !== a && function(t) {
            e.d(n, t, function() {
                return c[t];
            });
        }(a);
        n.default = u.a;
    },
    "3c77": function(t, n, e) {
        var c = e("9c41");
        e.n(c).a;
    },
    "60a2": function(t, n, e) {
        (function(t) {
            Object.defineProperty(n, "__esModule", {
                value: !0
            }), n.default = void 0;
            var e = {
                data: function() {
                    return {
                        data: [ {
                            text: "如需保存或发送表情包，请点击图片预览表情，或者点击「保存」按钮",
                            src: "1.jpg"
                        }, {
                            text: "长按图片选择「发送给朋友」或「保存图片」",
                            src: "2.jpg"
                        }, {
                            text: "如需收藏到表情收藏夹，发送给好友后，在聊天界面长按表情即可",
                            src: "3.jpg"
                        }, {
                            text: "如需收藏，请点击表情包下方的「收藏」",
                            src: "4.jpg"
                        }, {
                            text: "表情将会收藏到您小程序个人中心的「收藏」中，您给他人点赞和评论的相关动态则在「喜欢」中",
                            src: "5.jpg"
                        }, {
                            text: "有人给您的动态或评论点赞时，会在消息按钮上提示，您可以点击按钮看到他人具体互动信息",
                            src: "6.jpg"
                        }, {
                            text: "在公众号中，您也可以直接回复关键词，如：‘哈哈哈’，获取相关表情包",
                            src: "7.gif"
                        }, {
                            text: "在聊天列表下拉，即可找到「棒棒糖表情包」小程序",
                            src: "8.gif"
                        }, {
                            text: "关注「棒棒糖表情包图片大全」公众号，通过菜单栏可以随时打开小程序",
                            src: ""
                        }, {
                            text: "关注「棒棒糖表情包图片大全」公众号，我们给您推送更多最火最新的表情包",
                            src: ""
                        } ]
                    };
                },
                methods: {
                    btnBack: function() {
                        t.navigateBack();
                    }
                }
            };
            n.default = e;
        }).call(this, e("543d").default);
    },
    "70ef": function(t, n, e) {
        e.r(n);
        var c = e("70fb"), u = e("2e43");
        for (var a in u) "default" !== a && function(t) {
            e.d(n, t, function() {
                return u[t];
            });
        }(a);
        e("3c77");
        var r = e("f0c5"), f = Object(r.a)(u.default, c.b, c.c, !1, null, null, null, !1, c.a, void 0);
        n.default = f.exports;
    },
    "70fb": function(t, n, e) {
        e.d(n, "b", function() {
            return c;
        }), e.d(n, "c", function() {
            return u;
        }), e.d(n, "a", function() {});
        var c = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, u = [];
    },
    "9c41": function(t, n, e) {},
    b837: function(t, n, e) {
        (function(t) {
            function n(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            e("1c42"), n(e("66fd")), t(n(e("70ef")).default);
        }).call(this, e("543d").createPage);
    }
}, [ [ "b837", "common/runtime", "common/vendor" ] ] ]);