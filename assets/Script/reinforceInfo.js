import { authLogin } from './actions/games'
import config from './Config'
import Utils from './util/api'
let _server_path = config.DEBUG ? config.TEST_SERVER_PATH : config.SERVER_PATH
let api = Utils.Utils
cc.Class({
    extends: cc.Component,
    properties: {
        lv: {
            default: null,
            type: cc.Label
        },
        needCount: {
            default: null,
            type: cc.Label
        },
        coin: {
            default: null,
            type: cc.Label
        }
    },

    // use this for initialization
    onLoad: function() {
        window.openid = config.DEBUG ? config.OPENID : window.OPEN_DATA.openid
        window.openkey = config.DEBUG ? config.OPENKEY : window.OPEN_DATA.openkey
        window.ttsid = 'aaaaaaaaaa'
        this.getUserCard()
    },
    getUserCard() {
        let opt = {}
        api.get({
            root: _server_path,
            url: '/ttraffle/api/slot/user/slots/query/',
            data: opt,
            success: ({ data }) => {
                console.log(data)
                this.userCardData = data
                this.cardBoxInfo = data['SUPER']
                this.lv.string = 'Lv' + this.userCardData['SUPER'].slot_level.level
                this.needCount.string = 'X' + this.userCardData['SUPER'].lvlup_condition['BENCH'].need_count
                this.coin.string = this.userCardData['SUPER'].slot_level.need_nb
                    // console.log(this.needCount)
                    // console.log(this.node)
                    // this.setType()
                    // this.cardTypeName = this.playerCategory[this.focusIndex]
                    // this.needCount = this.userCardData[this.cardType].lvlup_condition[this.focusIndex].need_count
            },
            error: ({ reason }) => {}
        })
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});