(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/upload/upload" ], {
    "0a14": function(t, e, i) {
        i.r(e);
        var n = i("cc7d"), a = i("2270");
        for (var o in a) "default" !== o && function(t) {
            i.d(e, t, function() {
                return a[t];
            });
        }(o);
        var s = i("f0c5"), c = Object(s.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = c.exports;
    },
    1905: function(t, e, i) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {
                data: function() {
                    return {
                        userInfo: null,
                        titleText: "",
                        picker: [ "请选择", "表情", "头像", "壁纸" ],
                        index: 0,
                        Category: [],
                        Navs: [ "请选择" ],
                        navKey: 0,
                        navId: 0,
                        navShow: !1,
                        imgList: [],
                        IsAdVideo: this.IsAdVideo
                    };
                },
                onLoad: function() {
                    this.userInfo = this.storage.get("userInfo", null), null == this.userInfo && this.meme.loginModel();
                },
                methods: {
                    inputTitle: function(t) {
                        this.titleText = t.detail.value;
                    },
                    PickerChange: function(t) {
                        var e = this;
                        if (this.index = t.detail.value, this.navId = 0, 1 == this.index) var i = "emoticon"; else i = 2 == this.index ? "headimg" : "wallpaper";
                        this.meme.request("/Wxapp/getCategory", {
                            cat_type: i
                        }, "POST", !0, !1).then(function(t) {
                            if (1 == t.code) {
                                e.Navs = [ "请选择" ];
                                var i = t.data;
                                for (var n in i) e.Navs.push(i[n].name);
                                e.Category = t.data, e.navShow = !0;
                            }
                        }).catch(function(t) {});
                    },
                    NavChange: function(t) {
                        this.navKey = parseInt(t.detail.value);
                        var e = this.navKey - 1;
                        this.Category.hasOwnProperty(e) ? this.navId = this.Category[e].id : this.navId = 0;
                    },
                    ChooseImage: function() {
                        var e = this;
                        t.chooseImage({
                            count: 1,
                            sizeType: [ "original", "compressed" ],
                            sourceType: [ "album" ],
                            success: function(t) {
                                0 != e.imgList.length ? e.imgList = e.imgList.concat(t.tempFilePaths) : e.imgList = t.tempFilePaths;
                            }
                        });
                    },
                    ViewImage: function(e) {
                        t.previewImage({
                            urls: this.imgList,
                            current: e.currentTarget.dataset.url
                        });
                    },
                    DelImg: function(e) {
                        var i = this;
                        t.showModal({
                            title: "提示",
                            content: "确定要删除这张图片吗？？",
                            cancelText: "取消",
                            confirmText: "确定",
                            success: function(t) {
                                t.confirm && i.imgList.splice(e.currentTarget.dataset.index, 1);
                            }
                        });
                    },
                    upLoad: function() {
                        this.titleText ? 0 === this.index ? this.meme.toast("请选择上传类型") : this.imgList.length ? this.__submit(this.imgList) : this.meme.toast("请选择图片") : this.meme.toast("请输入标题");
                    },
                    __submit: function(e) {
                        var i = this;
                        this.meme.uploadFile(e[0]).then(function(e) {
                            var n = {
                                name: i.titleText,
                                category_id: i.navId,
                                user_id: i.userInfo.id,
                                type: i.index,
                                path: e.url,
                                cos_path: e.hasOwnProperty("cos_path") ? e.cos_path : "",
                                media_id: e.hasOwnProperty("media_id") ? e.media_id : "",
                                wechat_id: e.hasOwnProperty("wechat_id") ? e.wechat_id : ""
                            };
                            i.meme.request("Wxapp/uploadImage", n, "POST", !0, !1).then(function(e) {
                                1 == e.code ? t.showModal({
                                    title: "提示",
                                    content: "上传成功，等待审核",
                                    showCancel: !1,
                                    confirmText: "确定",
                                    success: function(e) {
                                        t.redirectTo({
                                            url: "/pages/upload-emoji/upload-emoji"
                                        });
                                    }
                                }) : i.meme.toast(e.msg);
                            }).catch(function(t) {});
                        }).catch(function(t) {});
                    }
                }
            };
            e.default = i;
        }).call(this, i("543d").default);
    },
    2270: function(t, e, i) {
        i.r(e);
        var n = i("1905"), a = i.n(n);
        for (var o in n) "default" !== o && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(o);
        e.default = a.a;
    },
    cc7d: function(t, e, i) {
        i.d(e, "b", function() {
            return n;
        }), i.d(e, "c", function() {
            return a;
        }), i.d(e, "a", function() {});
        var n = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, a = [];
    },
    d004: function(t, e, i) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            i("1c42"), e(i("66fd")), t(e(i("0a14")).default);
        }).call(this, i("543d").createPage);
    }
}, [ [ "d004", "common/runtime", "common/vendor" ] ] ]);