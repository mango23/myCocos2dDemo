cc.Class({
    extends: cc.Component,

    properties: {
        UserInfo: { // user Info
            default: null,
            figureurl: "http://thirdapp2.qlogo.cn/qzopenapp/79cbb2c24e1465a90f763758dda88ecd6b034783543d2e834c23cc31058950a8/50",
            nickname: '小布哟'
        },
        Currency: { // user Currency
            default: null,
            diamond: 0,
            gold: 0
        }
    },

    // use this for initialization
    onLoad: function () {

    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});
