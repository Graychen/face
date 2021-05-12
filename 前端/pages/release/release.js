(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/release/release" ], {
    3513: function(t, e, n) {
        var i = n("cdff");
        n.n(i).a;
    },
    "5cd4": function(t, e, n) {
        n.r(e);
        var i = n("9bb1"), o = n.n(i);
        for (var a in i) "default" !== a && function(t) {
            n.d(e, t, function() {
                return i[t];
            });
        }(a);
        e.default = o.a;
    },
    6478: function(t, e, n) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            n("1c42"), e(n("66fd")), t(e(n("b0c1")).default);
        }).call(this, n("543d").createPage);
    },
    "9bb1": function(t, e, n) {
        (function(t) {
            function n(t, e) {
                var n;
                if ("undefined" == typeof Symbol || null == t[Symbol.iterator]) {
                    if (Array.isArray(t) || (n = i(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var o = 0, a = function() {};
                        return {
                            s: a,
                            n: function() {
                                return o >= t.length ? {
                                    done: !0
                                } : {
                                    done: !1,
                                    value: t[o++]
                                };
                            },
                            e: function(t) {
                                throw t;
                            },
                            f: a
                        };
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
                }
                var r, u = !0, c = !1;
                return {
                    s: function() {
                        n = t[Symbol.iterator]();
                    },
                    n: function() {
                        var t = n.next();
                        return u = t.done, t;
                    },
                    e: function(t) {
                        c = !0, r = t;
                    },
                    f: function() {
                        try {
                            u || null == n.return || n.return();
                        } finally {
                            if (c) throw r;
                        }
                    }
                };
            }
            function i(t, e) {
                if (t) {
                    if ("string" == typeof t) return o(t, e);
                    var n = Object.prototype.toString.call(t).slice(8, -1);
                    return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0;
                }
            }
            function o(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, i = new Array(e); n < e; n++) i[n] = t[n];
                return i;
            }
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var a = {
                data: function() {
                    return {
                        timer: null,
                        status: "more",
                        modalName: null,
                        areaName: null,
                        page: 0,
                        topic: [],
                        more_topic: [],
                        activeTopic: [],
                        imgurl: [],
                        imgList: [],
                        textareaAValue: "",
                        IsAdVideo: this.IsAdVideo
                    };
                },
                onLoad: function(t) {
                    var e = this;
                    this.userInfo = this.storage.get("userInfo", null), null == this.userInfo && this.meme.loginModel(), 
                    t.hasOwnProperty("id") ? (this.topic = [ {
                        id: t.id,
                        name: t.name
                    } ], this.activeTopic.push(t.id)) : this.meme.request("News/getTopic", {}, "POST", !0, !0).then(function(t) {
                        1 == t.code && (e.topic = e.topic.concat(t.data));
                    }).catch(function(t) {});
                },
                onHide: function() {
                    this.timer && (clearTimeout(this.timer), this.timer = null);
                },
                computed: {
                    sendColor: function() {
                        return this.textareaAValue || this.imgList.length ? "bg-gradual-green" : "bg-f5 text-color-b2";
                    },
                    activeColor: function() {
                        return this.activeTopic.length ? "active-color" : "text-black";
                    },
                    noActive: function() {
                        return 2 == this.activeTopic.length ? "no-active" : "text-color-b2";
                    }
                },
                methods: {
                    getList: function() {
                        var t = this;
                        this.status = "loading", this.meme.request("News/getTopicList", {
                            page: this.page,
                            limit: 100
                        }, "POST", !0, !1).then(function(e) {
                            1 == e.code ? (t.page = e.data.page, t.more_topic = e.data.list, t.status = "more") : t.status = "noMore";
                        }).catch(function(t) {});
                    },
                    showModal: function(t) {
                        this.modalName = t.currentTarget.dataset.target, 0 == this.more_topic.length && this.getList();
                    },
                    hideModal: function(t) {
                        this.page = 0, this.modalName = null;
                    },
                    tabSelect: function(t) {
                        this.TabCur = t.currentTarget.dataset.id, this.scrollLeft = 60 * (t.currentTarget.dataset.id - 1);
                    },
                    textareaAInput: function(t) {
                        this.textareaAValue = t.detail.value;
                    },
                    ViewImage: function(e) {
                        t.previewImage({
                            urls: this.imgurl,
                            current: e
                        });
                    },
                    DelImg: function(t, e) {
                        this.imgurl.splice(e, 1), this.imgList.splice(e, 1), this.meme.request("Common/uploadDelete", t, "POST", !0, !0);
                    },
                    ChooseImage: function() {
                        this.__ChooseImg();
                    },
                    __ChooseImg: function() {
                        var e = this;
                        t.chooseImage({
                            count: 9 - this.imgList.length,
                            sourceType: [ "album" ],
                            sizeType: [ "compressed" ],
                            success: function(t) {
                                e.__upLoadImg(t.tempFilePaths);
                            }
                        });
                    },
                    __upLoadImg: function(t) {
                        var e, i = this, o = n(t);
                        try {
                            for (o.s(); !(e = o.n()).done; ) {
                                var a = e.value;
                                this.meme.uploadFile(a).then(function(t) {
                                    i.imgList.push(t), i.imgurl.push(t.url);
                                }).catch(function(t) {});
                            }
                        } catch (t) {
                            o.e(t);
                        } finally {
                            o.f();
                        }
                    },
                    chooseTopic: function(t) {
                        var e = this.activeTopic;
                        -1 == e.indexOf(t) ? e.length < 2 && e.push(t) : e.splice(e.indexOf(t), 1);
                    },
                    send: function() {
                        var e = this;
                        if (this.textareaAValue || this.imgList.length) {
                            var n = {
                                content: this.textareaAValue,
                                topic_id: this.activeTopic,
                                images: this.imgList
                            };
                            this.meme.request("News/addNews", n, "POST", !1, !1).then(function(n) {
                                1 == n.code ? (e.meme.toast("发布成功，等待审核"), e.timer = setTimeout(function() {
                                    t.switchTab({
                                        url: "/pages/bbs/bbs"
                                    });
                                }, 300)) : e.meme.toast(n.msg);
                            }).catch(function(t) {});
                        } else this.meme.toast("请先输入内容或图片");
                    }
                }
            };
            e.default = a;
        }).call(this, n("543d").default);
    },
    b0c1: function(t, e, n) {
        n.r(e);
        var i = n("f5b5"), o = n("5cd4");
        for (var a in o) "default" !== a && function(t) {
            n.d(e, t, function() {
                return o[t];
            });
        }(a);
        n("3513");
        var r = n("f0c5"), u = Object(r.a)(o.default, i.b, i.c, !1, null, null, null, !1, i.a, void 0);
        e.default = u.exports;
    },
    cdff: function(t, e, n) {},
    f5b5: function(t, e, n) {
        n.d(e, "b", function() {
            return i;
        }), n.d(e, "c", function() {
            return o;
        }), n.d(e, "a", function() {});
        var i = function() {
            var t = this;
            t.$createElement;
            t._self._c;
        }, o = [];
    }
}, [ [ "6478", "common/runtime", "common/vendor" ] ] ]);