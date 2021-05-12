(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/make/popup-private" ], {
    "1b6f": function(e, t, n) {
        var a = n("adca");
        n.n(a).a;
    },
    "3e9f": function(e, t, n) {
        n.r(t);
        var a = n("ff94"), o = n.n(a);
        for (var i in a) "default" !== i && function(e) {
            n.d(t, e, function() {
                return a[e];
            });
        }(i);
        t.default = o.a;
    },
    adca: function(e, t, n) {},
    f189: function(e, t, n) {
        n.r(t);
        var a = n("fe6e"), o = n("3e9f");
        for (var i in o) "default" !== i && function(e) {
            n.d(t, e, function() {
                return o[e];
            });
        }(i);
        n("1b6f");
        var c = n("f0c5"), r = Object(c.a)(o.default, a.b, a.c, !1, null, null, null, !1, a.a, void 0);
        t.default = r.exports;
    },
    fe6e: function(e, t, n) {
        n.d(t, "b", function() {
            return a;
        }), n.d(t, "c", function() {
            return o;
        }), n.d(t, "a", function() {});
        var a = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, o = [];
    },
    ff94: function(e, t, n) {
        (function(e) {
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = void 0;
            var n = {
                props: {
                    privateKey: {
                        type: Boolean,
                        default: function() {
                            return !1;
                        }
                    }
                },
                data: function() {
                    return {
                        imgList: []
                    };
                },
                methods: {
                    ChooseImage: function() {
                        var t = this;
                        e.chooseImage({
                            count: 1,
                            sizeType: [ "compressed" ],
                            sourceType: [ "album" ],
                            success: function(e) {
                                t.imgList = e.tempFilePaths;
                            }
                        });
                    },
                    ViewImage: function(t) {
                        e.previewImage({
                            urls: this.imgList,
                            current: t.currentTarget.dataset.url
                        });
                    },
                    DelImg: function(t) {
                        var n = this;
                        e.showModal({
                            title: "提示",
                            content: "确定要删除这张图片吗？",
                            cancelText: "取消",
                            confirmText: "确定",
                            success: function(e) {
                                e.confirm && n.imgList.splice(t.currentTarget.dataset.index, 1);
                            }
                        });
                    },
                    close: function() {
                        this.imgList = [], this.$emit("closePrivate", !1);
                    },
                    make: function() {
                        var t = this;
                        if (this.imgList.length) {
                            var n = this.storage.get("userInfo", null);
                            if (null == n) return void e.showModal({
                                title: "登录",
                                content: "您尚未登录，请先登录",
                                showCancel: !1,
                                confirmColor: "#5677FC",
                                confirmText: "确定",
                                success: function(t) {
                                    e.switchTab({
                                        url: "/pages/user/user"
                                    });
                                }
                            });
                            this.meme.uploadFile(this.imgList[0]).then(function(a) {
                                if (a.hasOwnProperty("url")) {
                                    var o = {
                                        name: "私密表情制作",
                                        user_id: n ? n.id : 0,
                                        type: 1,
                                        path: a.url,
                                        cos_path: a.hasOwnProperty("cos_path") ? a.cos_path : "",
                                        media_id: a.hasOwnProperty("media_id") ? a.media_id : "",
                                        wechat_id: a.hasOwnProperty("wechat_id") ? a.wechat_id : "",
                                        is_private: 1
                                    };
                                    t.meme.request("Wxapp/uploadImage", o, "POST", !0, !1).then(function(n) {
                                        1 == n.code ? (t.$emit("closePrivate", !1), e.navigateTo({
                                            url: "/pages/add-text/add-text?id=" + n.data
                                        })) : t.meme.toast("上传失败，请重试");
                                    }).catch(function(e) {});
                                }
                            }).catch(function(e) {});
                        } else this.meme.toast("请先选择图片~");
                    }
                }
            };
            t.default = n;
        }).call(this, n("543d").default);
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/make/popup-private-create-component", {
    "components/make/popup-private-create-component": function(e, t, n) {
        n("543d").createComponent(n("f189"));
    }
}, [ [ "components/make/popup-private-create-component" ] ] ]);