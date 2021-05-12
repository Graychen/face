Object.defineProperty(exports, "__esModule", {
    value: !0
}), String.prototype.endWith = function(n) {
    var e = this.length - n.length;
    return e >= 0 && this.lastIndexOf(n) == e;
};

var n = {
    toast: function(n, e, t) {
        uni.showToast({
            title: n,
            icon: t ? "success" : "none",
            duration: e || 2e3
        });
    },
    constNum: function() {
        return "android" == uni.getSystemInfoSync().platform.toLocaleLowerCase() ? 300 : 0;
    },
    px: function(n) {
        return uni.upx2px(n) + "px";
    },
    interfaceUrl: function() {
        return "https://face.moive.vip/api.php/emoji/";
    },
    request: function(n, e, t, o, i) {
        var a = this;
        return i || uni.showLoading({
            mask: !0,
            title: "请稍候..."
        }), new Promise(function(r, s) {
            uni.request({
                url: a.interfaceUrl() + n,
                data: e,
                header: {
                    "content-type": o ? "application/x-www-form-urlencoded" : "application/json",
                    token: a.getToken(),
                    platform: "tt"
                },
                method: t,
                dataType: "json",
                success: function(n) {
                    !i && uni.hideLoading(), 401 === n.data.code ? a.loginModel() : r(n.data);
                },
                fail: function(n) {
                    i || a.toast("网络不给力，请稍后再试~"), s(n);
                }
            });
        });
    },
    uploadFile: function(n) {
        var e = this, t = this;
        return uni.showLoading({
            title: "请稍候..."
        }), new Promise(function(o, i) {
            uni.uploadFile({
                url: e.interfaceUrl() + "Common/upload",
                filePath: n,
                name: "file",
                header: {
                    "content-type": "multipart/form-data",
                    token: e.getToken()
                },
                formData: {},
                success: function(n) {
                    uni.hideLoading();
                    var e = JSON.parse(n.data);
                    1 === e.code ? o(e.data) : t.toast(e.msg);
                },
                fail: function(n) {
                    uni.hideLoading(), this.toast("网络不给力，请稍后再试~"), i(n);
                }
            });
        });
    },
    getSetting: function(n) {
        var e = this;
        return new Promise(function(t, o) {
            uni.getSetting({
                success: function(o) {
                    var i = o.authSetting;
                    i.hasOwnProperty([ "scope.userInfo" ]) && (i["scope.userInfo"] ? n && i.hasOwnProperty([ "scope.album" ]) ? i["scope.album"] ? t(!0) : uni.showModal({
                        title: "提示",
                        content: "请在设置页中，开启-相册-权限",
                        showCancel: !1,
                        confirmText: "确定",
                        success: function() {
                            uni.openSetting({
                                success: function(n) {
                                    n.authSetting["scope.album"] ? e.toast("授权成功", 2e3, "success") : e.toast("授权失败");
                                }
                            });
                        }
                    }) : t(!0) : uni.showModal({
                        title: "提示",
                        content: "请在设置页中，开启-用户信息-权限",
                        showCancel: !1,
                        confirmText: "确定",
                        success: function() {
                            uni.openSetting({
                                success: function(n) {
                                    n.authSetting["scope.userInfo"] ? e.toast("再次点击登录", 2e3, "success") : e.toast("授权失败");
                                }
                            });
                        }
                    }));
                }
            });
        });
    },
    downloadDyImage: function(n) {
        var e = this;
        this.getSetting(!0).then(function(t) {
            var o = [];
            if ("string" == typeof n) o.push(n); else {
                var i = !0, a = !1, r = void 0;
                try {
                    for (var s, u = n[Symbol.iterator](); !(i = (s = u.next()).done); i = !0) {
                        var c = s.value;
                        o.push(c.cdnurl);
                    }
                } catch (n) {
                    a = !0, r = n;
                } finally {
                    try {
                        !i && u.return && u.return();
                    } finally {
                        if (a) throw r;
                    }
                }
            }
            t && e.__saveImg(o, 0, !0);
        });
    },
    compressImage: function(n) {
        return new Promise(function(e, t) {
            Array.isArray(n) && function() {
                var t = [], o = !0, i = !1, a = void 0;
                try {
                    for (var r, s = n[Symbol.iterator](); !(o = (r = s.next()).done); o = !0) {
                        var u = r.value;
                        uni.compressImage({
                            src: u,
                            quality: 70,
                            success: function(o) {
                                var i = o.tempFilePath;
                                i.indexOf("?") > 0 ? t.push(i.substring(0, i.indexOf("?"))) : t.push(i), t.length == n.length && e(t);
                            }
                        });
                    }
                } catch (n) {
                    i = !0, a = n;
                } finally {
                    try {
                        !o && s.return && s.return();
                    } finally {
                        if (i) throw a;
                    }
                }
            }();
        });
    },
    __saveImg: function(n, e, t) {
        var o = this;
        t && n.length != e && this.saveImage(n[e]).then(function(t) {
            return o.__saveImg(n, ++e, t);
        });
    },
    saveImage: function(n) {
        return uni.showLoading({
            title: "请稍候..."
        }), new Promise(function(e, t) {
            uni.downloadFile({
                url: n,
                success: function(n) {
                    uni.saveImageToPhotosAlbum({
                        filePath: n.tempFilePath,
                        success: function(n) {
                            uni.hideLoading(), uni.showToast({
                                title: "已保存到相册~"
                            }), e(!0);
                        },
                        fail: function(n) {
                            uni.hideLoading(), "saveImageToPhotosAlbum:fail authorize no response" !== n.errMsg && "saveImageToPhotosAlbum:fail auth deny" !== n.errMsg && "saveImageToPhotosAlbum:fail auth denied" !== n.errMsg || (e(!1), 
                            uni.showModal({
                                title: "提示",
                                content: "需要您授权保存相册",
                                showCancel: !1,
                                success: function(n) {
                                    uni.openSetting({
                                        success: function(n) {
                                            n.authSetting["scope.writePhotosAlbum"] ? uni.showToast({
                                                title: "授权成功",
                                                icon: "success"
                                            }) : uni.showToast({
                                                title: "获取权限失败，\r\n将无法保存到相册哦~",
                                                icon: "none",
                                                duration: 2e3
                                            });
                                        }
                                    });
                                }
                            }));
                        }
                    });
                }
            });
        });
    },
    setToken: function(n) {
        uni.setStorageSync("token", n);
    },
    getToken: function() {
        return uni.getStorageSync("token");
    },
    isLogin: function() {
        return !!uni.getStorageSync("token");
    },
    setScore: function(n, e) {
        var t = this;
        return new Promise(function(o, i) {
            uni.request({
                url: t.interfaceUrl() + "User/setScore",
                data: {
                    score: n,
                    memo: e
                },
                header: {
                    "content-type": "application/x-www-form-urlencoded",
                    token: t.getToken()
                },
                method: "POST",
                dataType: "json",
                success: function(n) {
                    401 === n.data.code ? t.loginModel() : o(n.data);
                }
            });
        });
    },
    getScore: function() {
        var n = this;
        return new Promise(function(e, t) {
            n.isLogin() ? uni.request({
                url: n.interfaceUrl() + "User/getScore",
                header: {
                    token: n.getToken()
                },
                method: "POST",
                dataType: "json",
                success: function(n) {
                    e(n.data);
                }
            }) : e(!1);
        });
    },
    makeShow: function(n, e) {
        var t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "android", o = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
        "android" != t || o ? n ? uni.previewImage({
            urls: [ e ]
        }) : uni.navigateTo({
            url: "/pages/make/show?src=" + encodeURIComponent(e)
        }) : this.saveImage(e);
    },
    loginModel: function() {
        uni.showModal({
            title: "登录",
            content: "您尚未登录，请先登录",
            showCancel: !1,
            confirmColor: "#5677FC",
            confirmText: "确定",
            success: function(n) {
                uni.clearStorageSync(), uni.switchTab({
                    url: "/pages/user/user"
                });
            }
        });
    },
    preViewImage: function(n, e) {
        var t = [];
        if ("string" == typeof n) t.push(n); else {
            var o = !0, i = !1, a = void 0;
            try {
                for (var r, s = n[Symbol.iterator](); !(o = (r = s.next()).done); o = !0) {
                    var u = r.value;
                    t.push(u.src);
                }
            } catch (n) {
                i = !0, a = n;
            } finally {
                try {
                    !o && s.return && s.return();
                } finally {
                    if (i) throw a;
                }
            }
        }
        uni.previewImage({
            urls: t,
            current: e
        });
    },
    setMessageNum: function(n) {
        if (n > 0) {
            var e = n > 99 ? "99+" : String(n);
            uni.setTabBarBadge({
                index: 4,
                text: e
            });
        } else uni.removeTabBarBadge({
            index: 4
        });
    },
    checkMsg: function(n) {
        uni.showModal({
            content: n,
            showCancel: !1,
            confirmColor: "#5677FC",
            confirmText: "知道了"
        });
    },
    sendLogin: function() {
        var n = this, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
        this.getSetting();
        return new Promise(function(t, o) {
            uni.login({
                provider: "baidu",
                success: function(i) {
                    uni.getUserInfo({
                        provider: "baidu",
                        success: function(a) {
                            var r = {
                                code: i.code,
                                nickName: a.userInfo.nickName,
                                avatarUrl: a.userInfo.avatarUrl,
                                gender: a.userInfo.gender,
                                parentid: e,
                                platform: "baidu"
                            };
                            n.request("User/appLogin", r, "POST", !0, !1).then(function(n) {
                                1 == n.code && t(n.data);
                            }).catch(function(n) {
                                o(n);
                            });
                        }
                    });
                }
            });
        });
    },
    guid: function() {
        var n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 32, e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1], t = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null, o = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split(""), i = [];
        if (t = t || o.length, n) for (var a = 0; a < n; a++) i[a] = o[0 | Math.random() * t]; else {
            var r = void 0;
            i[8] = i[13] = i[18] = i[23] = "-", i[14] = "4";
            for (var s = 0; s < 36; s++) i[s] || (r = 0 | 16 * Math.random(), i[s] = o[19 == s ? 3 & r | 8 : r]);
        }
        return e ? (i.shift(), "u" + i.join("")) : i.join("");
    },
    setClipboard: function(n) {
        var e = this;
        uni.setClipboardData({
            data: String(n),
            success: function() {
                e.toast("复制成功", "success");
            },
            fail: function() {
                e.toast("复制失败");
            }
        });
    },
    toApp: function(n, e, t) {
        uni.navigateToMiniProgram({
            appId: n,
            path: e,
            extraData: t
        });
    },
    isAndroid: function() {
        return "android" === uni.getSystemInfoSync().platform;
    }
};

exports.default = n;