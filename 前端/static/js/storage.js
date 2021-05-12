var e = "_deadtime";

module.exports = {
    put: function(n, t, r) {
        uni.setStorageSync(n, t);
        var a = parseInt(r);
        if (a > 0) {
            var o = Date.parse(new Date());
            o = o / 1e3 + a, uni.setStorageSync(n + e, o + "");
        } else uni.removeStorageSync(n + e);
    },
    get: function(n, t) {
        var r = parseInt(uni.getStorageSync(n + e));
        if (r && parseInt(r) < Date.parse(new Date()) / 1e3) return t;
        var a = uni.getStorageSync(n);
        return a || t;
    },
    remove: function(n) {
        uni.removeStorageSync(n), uni.removeStorageSync(n + e);
    },
    clear: function() {
        uni.clearStorageSync();
    }
};