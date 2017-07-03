import { pkData, raffle, startPk, authLogin } from './actions/games'
import config from './Config'
import Utils from './util/api'
let _server_path = config.DEBUG ? config.TEST_SERVER_PATH : config.SERVER_PATH
let api = Utils.Utils
cc.Class({
    extends: cc.Component,
    properties: {
        raffle_list: null,
        type: cc.Node
            // foo: {
            //    default: null,      // The default value will be used only when the component attaching
            //                           to a node for the first time
            //    url: cc.Texture2D,  // optional, default is typeof default
            //    serializable: true, // optional, default is true
            //    visible: true,      // optional, default is true
            //    displayName: 'Foo', // optional
            //    readonly: false,    // optional, default is false
            // },
            // ...
    },

    // use this for initialization
    onLoad: function() {
        console.log('hello')
        window.openid = config.DEBUG ? config.OPENID : window.OPEN_DATA.openid
        window.openkey = config.DEBUG ? config.OPENKEY : window.OPEN_DATA.openkey
        window.ttsid = 'aaaaaaaaaa'

        // this.getPkData()
        // this.getData()
        // this.pkStart()
        // this.getPkData1()
        this.callLogin()
        var anim = this.getComponent(cc.Animation);
        // console.log('this.getComponent(cc.Animation)')
        // console.log(this.getComponent(cc.Animation))
        // this.getComponent(cc.Animation).play('bomb_high');
        // 如果没有指定播放哪个动画，并且有设置 defaultClip 的话，则会播放 defaultClip 动画
        // this.getComponent(cc.Animation).play('pkStage');

        // this.properties.raffle_list = this.getRaffe().raffle_list
        // console.log('22222222222222222222222222')
        //     // console.log(this.properties.raffle_list)
        // console.log('111111111111111111111111111')
        // console.log(this.getRaffe())

    },
    startAnimate() {
        // this.node.active = false;
        console.log(this.node.getChildByName("right-card"))
        cc.find("right-card", this.node);
        var seq = cc.repeat(
            cc.sequence(
                //  cc.moveBy(2, 200, 0), 
                //  cc.moveBy(2, -200, 0),
                cc.jumpBy(2, cc.p(300, 0), 50, 4),
                cc.jumpBy(2, cc.p(-300, 0), 50, 4)
            ), 5);
        this.node.getChildByName("right-card").runAction(seq);
        //  var action = cc.moveTo(2, 100, 100);
        // // 执行动作
        // this.node.runAction(action);
        // console.log(this.getComponent(cc.Animation))
        // this.getComponent(cc.Animation)
        // var anim = this.getComponent(cc.Animation);

        // // 播放第一个动画
        // anim.playAdditive('pkStage');
    },
    callLogin() {
        authLogin()
    },
    getPkData1() {
        pkData()
    },
    getRaffe() {
        raffle()
    },
    pkStart() {
        console.log(1111222333444)
        startPk()
    },
    getData() {
        console.log(11222)
        api.get({
            root: _server_path,
            // url: 'http://qzone.ttnbalite.com/ttapp/api/task/list/daily/?openid=C2511CF6DB8A5D63B02F4A0A84A6CD6F&openkey=7EBD184ECC233438598593805762D261&ttsid=6fd312a948364773b9a295c933874f75',
            url: '/ttraffle/api/raffle/list/',
            data: {
                check: true,
                ajax: true
            },
            success: ({ data }) => {
                console.log(data)
                this.raffle_list = data.raffle_list
                    // this.getComponent(cc.Label).string = JSON.stringify(this.raffle_list[0], null, 4);
                console.log(this)
            }
        })
    },
    getPkData() {
        console.log('pkdata')
        api.get({
            root: _server_path,
            // url: 'http://qzone.ttnbalite.com/ttapp/api/task/list/daily/?openid=C2511CF6DB8A5D63B02F4A0A84A6CD6F&openkey=7EBD184ECC233438598593805762D261&ttsid=6fd312a948364773b9a295c933874f75',
            url: '/ttraffle/api/pk/user/pk/',
            data: {
                user_id: '17',
                competitor_id: '16',
                type: '1',
                ajax: true,
            },
            // data: {
            //     'user_id':'17',
            //     'competitor_id':'17',
            //     'type':'1'
            // },
            success: ({ data }) => {
                console.log(data)
                    // this.raffle_list = data.raffle_list
                    // this.getComponent(cc.Label).string = JSON.stringify(this.raffle_list[0], null, 4);
                console.log(this)
            }
        })
    },
    judgeWinner: function() {
        console.log('hello 113')
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});