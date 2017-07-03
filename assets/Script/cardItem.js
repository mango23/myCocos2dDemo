cc.Class({
    extends: cc.Component,

    properties: {
        // img: 'http://ttnba.teamcrushsport.com/pub_media/card_v1/446.png',
        count: cc.Label,
        cardtype: cc.Label,
        id: 1,
        icon: cc.Sprite,
        button: cc.Button,
        // textureURL: {
        //     default: "",
        //     url: cc.Texture2D
        // }
    },
    init: function(data) {
        // this.id = data.id;
        // this.icon.SpriteFrame = data.iconSF;
        this.count.string = data.count
        this.cardtype.string = data.cardtype
        let that = this
        var remoteUrl = data.url
            // var remoteUrl = "http://ttnba.teamcrushsport.com/pub_media/card_v1/446.png";
        cc.loader.load(remoteUrl, function(err, texture) {
            let sp = new cc.SpriteFrame(texture)
            that.icon.spriteFrame = sp
        });
    },
    // use this for initialization
    onLoad: function() {
        // let that = this
        // var remoteUrl = data.url
        //     // var remoteUrl = "http://ttnba.teamcrushsport.com/pub_media/card_v1/446.png";
        // cc.loader.load(remoteUrl, function(err, texture) {
        //     let sp = new cc.SpriteFrame(texture)
        //     that.icon.spriteFrame = sp
        // });
        // console.log(this.count)
        // this.count.hide()
        this.node.getChildByName("checked").active = false;
        // this.node.getComponent("checked").active = false;
    },
    showInfo() {
        let info = this.cardtype.string
        this.node.getChildByName("checked").active = !this.node.getChildByName("checked").active
        console.log(info)

        // console.log(this)
        // this.node.getChildByName("checked").active = true;
    }
});