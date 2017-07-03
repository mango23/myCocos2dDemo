import { authLogin } from './actions/games'
import config from './Config'
import Utils from './util/api'
let _server_path = config.DEBUG ? config.TEST_SERVER_PATH : config.SERVER_PATH
let api = Utils.Utils
cc.Class({
    extends: cc.Component,
    properties: {
        // raffle_list: null,
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
        this.getData()
        this.callLogin()
    },
    callLogin() {
        authLogin()
    },
    getData() {
        console.log(11222)
        api.get({
            root: _server_path,
            url: '/ttraffle/api/userpack/list/',
            data: {
                ttsid: 'aaaaaaaaaa',
                check: true,
                ajax: true
            },
            success: ({ data }) => {
                // console.log(data)
            }
        })
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});