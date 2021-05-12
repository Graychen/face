Object.defineProperty(exports, "__esModule", {
    value: !0
});

var e = {
    userListData: function() {
        return [ {
            icon: "pick",
            title: "上传表情",
            path: "/pages/upload/upload"
        }, {
            icon: "file",
            title: "我的上传",
            path: "/pages/upload-emoji/upload-emoji"
        }, {
            icon: "mail",
            title: "我的消息",
            path: "/pages/news-message/news-message"
        }, {
            icon: "weixin",
            title: "公众号",
            path: "/pages/public-num/public-num"
        }, {
            icon: "service",
            title: "联系客服",
            path: ""
        }, {
            icon: "warn",
            title: "用户协议",
            path: "/pages/user-agreement/user-agreement"
        }, {
            icon: "settings",
            title: "清除缓存",
            path: "settings"
        } ];
    },
    ruleData: function() {
        return [ {
            icon: "refund",
            title: "积分提现",
            path: "/pages/cash-withdrawal/cash-withdrawal"
        }, {
            icon: "form",
            title: "积分明细",
            path: "/pages/income-statement/income-statement"
        }, {
            icon: "link",
            title: "我的推荐",
            path: "/pages/fans/fans"
        }, {
            icon: "text",
            title: "积分规则",
            path: "/pages/integral-rule/integral-rule"
        } ];
    },
    courseData: function() {
        return {
            title: "三步赚取打卡积分",
            data: [ {
                imgUrl: "/static/images/other/today.jpg",
                name: "参与打卡",
                desc: "报名比赛"
            }, {
                imgUrl: "/static/images/other/twoday.jpg",
                name: "打卡(05:00-10:00)",
                desc: "获得瓜分资格"
            }, {
                imgUrl: "/static/images/other/twoday_over.jpg",
                name: "瓜分积分",
                desc: "12点前积分结算"
            } ]
        };
    },
    mallInitData: function() {
        return {
            pageindex: 1,
            data: [ {
                goods_img: "/static/images/index.png",
                goods_name: "德国平底锅不粘锅煎锅",
                goods_content: "德国平底锅不粘锅煎锅德国平底锅不粘锅煎锅德国平底锅不粘锅煎锅德国平",
                coupon_price: "35.00",
                is_like: !0
            }, {
                goods_img: "/static/images/index.png",
                goods_name: "德国平底锅不粘锅煎锅",
                goods_content: "德国平底锅不粘锅煎锅德国平底锅不粘锅煎锅德国平底锅不粘锅煎锅德国平",
                coupon_price: "35.00",
                is_like: !0
            }, {
                goods_img: "/static/images/index.png",
                goods_name: "德国平底锅不粘锅煎锅",
                goods_content: "德国平底锅不粘锅煎锅德国平底锅不粘锅煎锅德国平底锅不粘锅煎锅德国平",
                coupon_price: "35.00",
                is_like: !0
            }, {
                goods_img: "/static/images/index.png",
                goods_name: "德国平底锅不粘锅煎锅",
                goods_content: "德国平底锅不粘锅煎锅德国平底锅不粘锅煎锅德国平底锅不粘锅煎锅德国平",
                coupon_price: "35.00",
                is_like: !0
            } ]
        };
    },
    orderStateData: function() {
        return [ {
            state_num: 0,
            name: "全部"
        }, {
            state_num: 1,
            name: "已付款"
        }, {
            state_num: 2,
            name: "已收货"
        }, {
            state_num: 3,
            name: "已结算"
        }, {
            state_num: 4,
            name: "已失效"
        } ];
    }
};

exports.default = e;