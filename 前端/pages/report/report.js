(global.webpackJsonp = global.webpackJsonp || []).push([ [ "pages/report/report" ], {
    "0134": function(t, e, i) {
        (function(t) {
            function e(t) {
                return t && t.__esModule ? t : {
                    default: t
                };
            }
            i("1c42"), e(i("66fd")), t(e(i("55e1")).default);
        }).call(this, i("543d").createPage);
    },
    "2b60": function(t, e, i) {
        (function(t) {
            Object.defineProperty(e, "__esModule", {
                value: !0
            }), e.default = void 0;
            var i = {
                data: function() {
                    return {
                        timer: null,
                        radio: 0,
                        id: null,
                        type: null,
                        textareaAValue: "",
                        reportPro: [ {
                            title: "低俗色情",
                            radio: 0
                        }, {
                            title: "政治敏感",
                            radio: 1
                        }, {
                            title: "血腥暴力",
                            radio: 2
                        }, {
                            title: "赌博",
                            radio: 3
                        }, {
                            title: "广告",
                            radio: 4
                        }, {
                            title: "违法犯罪",
                            radio: 5
                        }, {
                            title: "侵权",
                            radio: 6
                        }, {
                            title: "其他",
                            radio: 7
                        } ]
                    };
                },
                onLoad: function(t) {
                    this.id = t.id, this.type = t.type;
                },
                onHide: function() {
                    this.timer && (clearTimeout(this.timer), this.timer = null);
                },
                methods: {
                    RadioChange: function(t) {
                        this.radio = t.detail.value;
                    },
                    textareaAInput: function(t) {
                        this.textareaAValue = t.detail.value;
                    },
                    clickButton: function() {
                        var e = this;
                        if ("news" == this.type) var i = {
                            news_id: this.id,
                            title: this.reportPro[this.radio].title,
                            reason: this.textareaAValue
                        }, n = "News/report"; else i = {
                            emoticon_id: this.id,
                            title: this.reportPro[this.radio].title,
                            reason: this.textareaAValue
                        }, n = "Wxapp/report";
                        this.meme.request(n, i, "POST", !0, !1).then(function(i) {
                            1 == i.code && (e.meme.toast("反馈成功，等待审核"), e.timer = setTimeout(function() {
                                t.navigateBack({});
                            }, 600));
                        }).catch(function(t) {});
                    }
                }
            };
            e.default = i;
        }).call(this, i("543d").default);
    },
    "55e1": function(t, e, i) {
        i.r(e);
        var n = i("8002"), a = i("6bea");
        for (var o in a) "default" !== o && function(t) {
            i.d(e, t, function() {
                return a[t];
            });
        }(o);
        i("9bcb");
        var r = i("f0c5"), u = Object(r.a)(a.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        e.default = u.exports;
    },
    "6bea": function(t, e, i) {
        i.r(e);
        var n = i("2b60"), a = i.n(n);
        for (var o in n) "default" !== o && function(t) {
            i.d(e, t, function() {
                return n[t];
            });
        }(o);
        e.default = a.a;
    },
    "743d": function(t, e, i) {},
    8002: function(t, e, i) {
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
    "9bcb": function(t, e, i) {
        var n = i("743d");
        i.n(n).a;
    }
}, [ [ "0134", "common/runtime", "common/vendor" ] ] ]);