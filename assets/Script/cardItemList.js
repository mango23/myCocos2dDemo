import { authLogin } from './actions/games'
import config from './Config'
import Utils from './util/api'
let _server_path = config.DEBUG ? config.TEST_SERVER_PATH : config.SERVER_PATH
let api = Utils.Utils
var myCardItem = cc.Class({
    name: 'myCardItem',
    properties: {
        // img: 'http://ttnba.teamcrushsport.com/pub_media/card_v1/446.png',
        count: 20,
        id: 0,
        cardtype: ''
            // icon: cc.Sprite
            // textureURL: {
            //     default: "",
            //     url: cc.Texture2D
            // }
    }
});
cc.Class({
    //
    extends: cc.Component,
    properties: {
        items: {
            default: [],
            type: myCardItem
        },
        itemPrefab: cc.Prefab
    },

    // use this for initialization
    onLoad: function() {
        window.openid = config.DEBUG ? config.OPENID : window.OPEN_DATA.openid
        window.openkey = config.DEBUG ? config.OPENKEY : window.OPEN_DATA.openkey
        window.ttsid = 'aaaaaaaaaa'
        this.getData()
            // this.items = [{ count: 2, id: 2, iconSF: '' }, { count: 3, id: 2, iconSF: '' }, { count: 4, id: 11, iconSF: '' }, { count: 5, id: 12, iconSF: '' }]
            // console.log(this.items)

    },
    getData() {
        // console.log(11222)
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
                this.items = data
                this.node.height = 70 * data.length
                    // console.log(this.node)
                for (var i = 0; i < this.items.length; ++i) {
                    // var ccc = cc.find("scrollCont/view/content")

                    // this.node.getChildByName("item")
                    var item = cc.instantiate(this.itemPrefab);
                    // var data = this.items[i].card;
                    this.node.addChild(item);
                    // cardItem.TouchListener
                    var data = this.items[i]
                        // console.log(this.items[i])
                        // console.log(data)
                    item.getComponent('cardItem').init({
                        // id: data.id,
                        count: data.count,
                        cardtype: data.card.player.cn_name,
                        url: 'http://ttnba.teamcrushsport.com/pub_media/card_v1/' + data.card.id + '.png'
                            // iconSF: data.iconSF
                    });
                }
            }
        })
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});