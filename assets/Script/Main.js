import config from './Config'
import { authLogin } from './actions/games'
cc.Class({
    extends: cc.Component,

    properties: {
        // ttsid: null
    },

    // use this for initialization
    onLoad: function() {
        window.openid = config.DEBUG ? config.OPENID : window.OPEN_DATA.openid
        window.openkey = config.DEBUG ? config.OPENKEY : window.OPEN_DATA.openkey

        this.callLogin()
    },

    // called every frame
    update: function(dt) {
        // console.log(dt)
    },

    // to index scene
    toScene: function() {
        // cc.director.loadScene('Index')
        cc.director.loadScene('Play')
    },
    callLogin() {
        authLogin()
    },
    getUserInfo() {
        // Utils.Utils.get()
    }
});