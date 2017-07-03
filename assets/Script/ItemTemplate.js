cc.Class({
    extends: cc.Component,
    properties: {
        id: 0,
        icon: cc.Sprite,
        itemName: cc.Label,
        itemPrice: cc.Label,
        img: cc.Sprite,
        // url: {
        //     default: "",
        //     url: cc.Texture2D
        // },
        // textureURL: {
        //     default: "",
        //     url: cc.Texture2D
        // }

    },
    init: function(data) {
        var that = this
        this.id = data.id;
        this.icon.spriteFrame = data.iconSF
        this.itemName.string = data.itemName;
        this.itemPrice.string = data.itemPrice;
        var remoteUrl = data.url;
        // var remoteUrl = "http://ttnba.teamcrushsport.com/pub_media/card_v1/446.png";
        cc.loader.load(remoteUrl, function(err, texture) {
            let sp = new cc.SpriteFrame(texture)
            that.img.spriteFrame = sp
        });
    }
});