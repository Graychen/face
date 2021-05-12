(global.webpackJsonp = global.webpackJsonp || []).push([ [ "components/common/ads-video" ], {
    "233e": function(e, o, t) {
        t.r(o);
        var n = t("bb8d"), d = t("80fe");
        for (var i in d) "default" !== i && function(e) {
            t.d(o, e, function() {
                return d[e];
            });
        }(i);
        var a = t("f0c5"), s = Object(a.a)(d.default, n.b, n.c, !1, null, null, null, !1, n.a, void 0);
        o.default = s.exports;
    },
    "57af": function(e, o, t) {
        (function(e) {
            Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.default = void 0;
            var t = {
                props: {
                    loadAd: {
                        type: Boolean,
                        default: !1
                    },
                    adType: {
                        type: Number,
                        default: 0
                    },
                    showAd: !1,
                    userInfo: null
                },
                data: function() {
                    return {
                        isVip: !(!this.userInfo || 1 != this.userInfo.is_vip),
                        title: "createRewardedVideoAd",
                        rewardedVideoAd: null
                    };
                },
                watch: {
                    loadAd: function(e, o) {
                        e && null == this.rewardedVideoAd && this.createRewardedVideoAd();
                    },
                    showAd: function(o, t) {
                        var n = this;
                        if (o && this.rewardedVideoAd) {
                            var d = !1;
                            this.IsPayment && (this.IsAudit || !this.meme.isAndroid() || this.isVip || 2 != this.adType && 4 != this.adType || (d = !0)), 
                            e.showModal({
                                content: this.IsAdVideo ? this.modalConetnt(this.adType, "show") : "暂未开放，敬请期待",
                                cancelText: d ? "免除广告" : "取消",
                                success: function(e) {
                                    e.confirm && n.IsAdVideo ? n.videoAdShow() : (d && n.payVip(), n.$emit("videoAdShow", !1));
                                }
                            });
                        }
                    }
                },
                methods: {
                    createRewardedVideoAd: function() {
                        var o = this;
                        e.createRewardedVideoAd && this.userInfo && (this.rewardedVideoAd = e.createRewardedVideoAd({
                            adUnitId: this.Ads.videoId
                        }), this.rewardedVideoAd.onLoad(function() {
                            console.log("onLoad ad enevt");
                        }), this.rewardedVideoAd.onError(function(e) {
                            console.log("onLoad ad error");
                        }), this.rewardedVideoAd.onClose(function(e) {
                            e && e.isEnded ? o.yourClose() : o.yourCancel();
                        }));
                    },
                    videoAdShow: function() {
                        var o = this;
                        this.rewardedVideoAd && this.rewardedVideoAd.show().catch(function() {
                            o.rewardedVideoAd.load().then(function() {
                                return o.rewardedVideoAd.show();
                            }).catch(function(t) {
                                e.showModal({
                                    content: o.modalConetnt(o.adType, "noad"),
                                    showCancel: !1,
                                    success: function(e) {
                                        e.confirm && o.$emit("changeAd", !0);
                                    }
                                });
                            });
                        });
                    },
                    addVideoAdScore: function() {
                        var e = this;
                        this.meme.setScore(1, "视频广告收益").then(function(o) {
                            1 == o.code ? (e.$emit("newScore", o.data), e.meme.toast("积分+1", 2e3, "success")) : e.meme.toast(o.msg);
                        });
                    },
                    emojiUnlock: function() {
                        4 != this.adType && this.storage.put("adClick", !0, this.Ads.time), this.$emit("addCommission", !0), 
                        this.meme.toast("解锁成功", 2e3, "success");
                    },
                    modalConetnt: function(e, o) {
                        var t = {};
                        return 1 == e || 3 == e ? (t.show = !0 === this.showAd ? "观看广告视频可获得1积分" : "积分不足，马上观看广告赚积分", 
                        t.noad = 1 == e ? "操作频繁，请稍后重试" : "本次免广告，请重新制作保存", t.close = "视频未播放完毕\r\n无法获得积分哦") : 2 == e || 4 == e ? (t.show = 4 == e ? "观看广告解锁才能保存" : this.Ads.msg, 
                        t.noad = "本次获得免广告保存机会", t.close = "视频未播放完毕\r\n没有解锁成功哦") : 5 == e && (t.show = "观看广告视频，参与早起打卡活动", 
                        t.noad = "操作频繁，请稍后重试", t.close = "视频未播放完毕\r\n没有报名成功哦"), t[o];
                    },
                    yourClose: function() {
                        1 == this.adType || 3 == this.adType ? this.addVideoAdScore() : 2 == this.adType || 4 == this.adType ? this.emojiUnlock() : 5 == this.adType && this.$emit("changeClock", !0), 
                        this.$emit("videoAdShow", !1);
                    },
                    yourCancel: function() {
                        var o = this;
                        e.showModal({
                            content: this.modalConetnt(this.adType, "close"),
                            confirmColor: "#39b54a",
                            confirmText: "继续观看",
                            success: function(e) {
                                e.confirm ? o.videoAdShow() : o.$emit("videoAdShow", !1);
                            }
                        });
                    },
                    payVip: function() {
                        var o = this;
                        e.showModal({
                            content: "支付5.88元开通VIP\r\n获得永久免广告保存特权\r\n海量表情包等你分享和下载",
                            success: function(t) {
                                t.confirm && o.meme.request("User/vip", {}, "POST", !0, !1).then(function(t) {
                                    1 == t.code && e.requestPayment({
                                        provider: "wxpay",
                                        timeStamp: t.data.timeStamp,
                                        nonceStr: t.data.nonceStr,
                                        package: t.data.package,
                                        signType: t.data.signType,
                                        paySign: t.data.paySign,
                                        success: function(e) {
                                            o.isVip = !0, o.meme.request("User/getUserinfo", {}, "POST", !0, !0).then(function(e) {
                                                o.storage.put("userInfo", e.data), o.storage.put("token", e.data.token, 2505600), 
                                                o.$emit("updateUserInfo", e.data);
                                            }), o.meme.toast("开通成功", 2e3, "success");
                                        }
                                    });
                                });
                            }
                        });
                    }
                }
            };
            o.default = t;
        }).call(this, t("543d").default);
    },
    "80fe": function(e, o, t) {
        t.r(o);
        var n = t("57af"), d = t.n(n);
        for (var i in n) "default" !== i && function(e) {
            t.d(o, e, function() {
                return n[e];
            });
        }(i);
        o.default = d.a;
    },
    bb8d: function(e, o, t) {
        t.d(o, "b", function() {
            return n;
        }), t.d(o, "c", function() {
            return d;
        }), t.d(o, "a", function() {});
        var n = function() {
            var e = this;
            e.$createElement;
            e._self._c;
        }, d = [];
    }
} ]), (global.webpackJsonp = global.webpackJsonp || []).push([ "components/common/ads-video-create-component", {
    "components/common/ads-video-create-component": function(e, o, t) {
        t("543d").createComponent(t("233e"));
    }
}, [ [ "components/common/ads-video-create-component" ] ] ]);