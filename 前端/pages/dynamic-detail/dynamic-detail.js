(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/dynamic-detail/dynamic-detail" ], {
    3190: function(t, e, i) {
        var n = i("429e");
        i.n(n).a;
    },
    "429e": function(t, e, i) {},
    5945: function(t, e, i) {
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
    "88dd": function(t, e, i) {
        i.r(e);
        var n = i("eec7"), a = i.n(n);
        for (var o in n) "default" !== o && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(o);
        e.default = a.a;
    },
    "9e54": function(t, e, i) {
        i.r(e);
        var n = i("5945"), a = i("88dd");
        for (var o in a) "default" !== o && function(t) {
            i.d(e, t, function() {
                return a[t];
            });
        }(o);
        i("3190");
        var s = i("f0c5"), c = Object(s.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = c.exports;
    },
    a7b9: function(t, e, i) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            i("1c42"), e(i("66fd")), t(e(i("9e54")).default);
        }).call(this, i("543d").createPage);
    },
    eec7: function(t, e, i) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var n = {
                components: {
                    bbsHeadName: function() {
                        i.e("components/bbs/bbs-head-name").then(function() {
                            return resolve(i("9a53"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    openMenu: function() {
                        i.e("components/bbs/open-menu").then(function() {
                            return resolve(i("4198"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    bbsPic: function() {
                        i.e("components/bbs/bbs-pic").then(function() {
                            return resolve(i("a47e"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    topic: function() {
                        i.e("components/bbs/topic").then(function() {
                            return resolve(i("e9f5"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    commentsMore: function() {
                        i.e("components/bbs/comments-more").then(function() {
                            return resolve(i("2956"));
                        }.bind(null, i)).catch(i.oe);
                    },
                    adsVideo: function() {
                        i.e("components/common/ads-video").then(function() {
                            return resolve(i("233e"));
                        }.bind(null, i)).catch(i.oe);
                    }
                },
                data: function() {
                    return {
                        tiemr: null,
                        userInfo: this.storage.get("userInfo", null),
                        safeAreaHeight: this.SafeAreaHeight,
                        safeAreaBottom: 0,
                        status: "loading",
                        InputBottom: 0,
                        inputVal: "",
                        inputShow: !1,
                        current_index: "",
                        defaultPlaceholder: {
                            pid: 0,
                            uid: "",
                            fid: 0,
                            name: "评论"
                        },
                        image: null,
                        cos_image: null,
                        dynamicDetailData: {},
                        loadAd: !1,
                        showAd: !1,
                        adClick: !1
                    };
                },
                onLoad: function(e) {
                    this.SafeAreaHeight ? (this.safeAreaHeight = this.safeAreaHeight - 15, this.safeAreaBottom = this.safeAreaHeight + t.upx2px(90)) : this.safeAreaBottom = t.upx2px(90), 
                    this.getData(e.id);
                },
                onHide: function() {
                    this.timer && (clearTimeout(this.timer), this.timer = null);
                },
                onShareAppMessage: function() {
                    var t = this, e = "", i = this.userInfo ? this.userInfo.id : 0, n = this.dynamicDetailData.content;
                    return this.dynamicDetailData.images.length > 0 && (e = this.dynamicDetailData.images[0].src), 
                    this.meme.request("News/addShare", {
                        id: this.dynamicDetailData.id
                    }, "POST", !0, !0).then(function(e) {
                        1 == e.code && (t.dynamicDetailData.share += 1);
                    }).catch(function(t) {}), {
                        title: n.substring(0, 18),
                        path: "/pages/dynamic-detail/dynamic-detail?id=" + this.dynamicDetailData.id + "&uid=" + i,
                        imageUrl: e
                    };
                },
                onShareTimeline: function() {
                    var t = this, e = "", i = this.userInfo ? this.userInfo.id : 0, n = this.dynamicDetailData.content;
                    return this.dynamicDetailData.images.length > 0 && (e = this.dynamicDetailData.images[0].src), 
                    this.meme.request("News/addShare", {
                        id: this.dynamicDetailData.id
                    }, "POST", !0, !0).then(function(e) {
                        1 == e.code && (t.dynamicDetailData.share += 1);
                    }).catch(function(t) {}), {
                        title: n.substring(0, 18),
                        path: "/pages/dynamic-detail/dynamic-detail?id=" + this.dynamicDetailData.id + "&uid=" + i,
                        imageUrl: e
                    };
                },
                methods: {
                    getData: function(t) {
                        var e = this;
                        this.meme.request("News/getNewsDetail", {
                            id: t
                        }, "POST", !0, !1).then(function(t) {
                            1 == t.code && (e.adClick = t.data.adclick, e.dynamicDetailData = t.data);
                        }).catch(function(t) {});
                    },
                    like: function(t) {
                        var e = this.dynamicDetailData;
                        this.meme.request("News/addNewsLike", {
                            id: e.id
                        }, "POST", !0, !0).then(function(i) {
                            1 == i.code && (t ? e.like -= 1 : e.like += 1, e.is_like = !t);
                        }).catch(function(t) {});
                    },
                    preview: function(t) {
                        this.meme.preViewImage(t);
                    },
                    InputFocus: function(t) {
                        this.InputBottom = t.detail.height;
                    },
                    InputBlur: function(t) {
                        this.InputBottom = 0, this.inputShow = !1, this.current_index = "";
                    },
                    InputChange: function(t) {
                        this.inputVal = t.detail.value;
                    },
                    hideBoard: function() {
                        this.defaultPlaceholder = {
                            pid: 0,
                            uid: "",
                            fid: 0,
                            name: "评论"
                        }, t.hideKeyboard(), this.InputBlur();
                    },
                    openBoard: function() {
                        this.inputShow = !0;
                    },
                    chooseImg: function() {
                        var e = this;
                        this.InputBlur(), t.chooseImage({
                            count: 1,
                            sizeType: [ "compressed" ],
                            sourceType: [ "album" ],
                            success: function(t) {
                                e.__upLoadimg(t.tempFilePaths);
                            },
                            fail: function() {
                                e.timer = setTimeout(function() {
                                    e.inputShow = !0;
                                }, 600);
                            }
                        });
                    },
                    __upLoadimg: function(t) {
                        var e = this;
                        this.meme.uploadFile(t[0]).then(function(t) {
                            e.image = t.url, t.hasOwnProperty("cos_path") && (e.cos_image = t.cos_path), e.inputShow = !0;
                        }).catch(function(t) {});
                    },
                    close: function() {
                        this.image = null, this.cos_image = null;
                    },
                    openinput: function(t) {
                        var e = t.currentTarget.dataset.info;
                        this.current_index = "current" + t.currentTarget.dataset.index, this.defaultPlaceholder = {
                            pid: e.id,
                            uid: e.uid,
                            fid: e.id,
                            name: "回复" + e.uname
                        }, this.inputShow = !0;
                    },
                    __generateComments: function(t, e, i) {
                        return {
                            news_id: this.dynamicDetailData.id,
                            parent_id: t,
                            fid: i,
                            reply_user_id: e,
                            content: this.inputVal,
                            image: this.image ? this.image : "",
                            cos_image: this.cos_image ? this.cos_image : ""
                        };
                    },
                    sendComment: function() {
                        var t = this;
                        if (this.inputVal || this.image) {
                            var e = this.__generateComments(this.defaultPlaceholder.pid, this.defaultPlaceholder.uid, this.defaultPlaceholder.fid);
                            this.meme.request("News/addNewsComment", e, "POST", !0, !1).then(function(e) {
                                1 == e.code ? (t.dynamicDetailData.commentnum = e.data.commentnum, t.dynamicDetailData.comments = e.data.comments, 
                                t.inputVal = "", t.image = null, t.cos_image = null, t.InputBottom = 0, t.inputShow = !1, 
                                t.defaultPlaceholder = {
                                    pid: 0,
                                    uid: "",
                                    fid: 0,
                                    name: "评论"
                                }, t.$refs[t.current_index][0].openMore(), t.current_index = "") : t.meme.toast(e.msg);
                            }).catch(function(t) {});
                        } else this.meme.toast("请先输入内容");
                    },
                    callBackOpenInput: function(t) {
                        this.defaultPlaceholder = t.data, this.current_index = "current" + t.index, this.inputShow = !0;
                    },
                    delBbs: function(e) {
                        var i = this;
                        t.showModal({
                            title: "提示",
                            content: "确认删除此条动态吗？",
                            success: function(n) {
                                n.confirm && i.meme.request("News/delNews", {
                                    id: e.sid
                                }, "POST", !0, !1).then(function(e) {
                                    1 == e.code ? t.navigateBack() : i.meme.toast("删除失败，请重试");
                                }).catch(function(t) {});
                            }
                        });
                    },
                    changeAd: function(t) {
                        this.loadAd = !1, this.showAd = !1, this.meme.preViewImage(this.dynamicDetailData.images);
                    },
                    addCommission: function(t) {
                        var e = {
                            user_id: this.dynamicDetailData.uid,
                            news_id: this.dynamicDetailData.id,
                            detailid: this.detailid,
                            memo: "动态收益"
                        };
                        this.meme.request("User/addCommission", e, "POST", !0, !0), this.adClick = t;
                    },
                    videoAdShow: function(t) {
                        this.loadAd = t, this.showAd = t;
                    },
                    updateUserInfo: function(t) {
                        this.userInfo = t;
                    }
                }
            };
            e.default = n;
        }).call(this, i("543d").default);
    }
}, [ [ "a7b9", "common/runtime", "common/vendor" ] ] ]);