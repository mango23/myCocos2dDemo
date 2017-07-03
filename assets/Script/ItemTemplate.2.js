cc.Class({
    extends: cc.Component,
    properties: {
        id: 0,
        icon: cc.Sprite,
        itemName: cc.Label,
        itemPrice: cc.Label,
        img: cc.SpriteFrame,
        url: {
            default: "",
            url: cc.Texture2D
        },
        // textureURL: {
        //     default: "",
        //     url: cc.Texture2D
        // }

    },
    init: function(data) {
        var that = this
        this.id = data.id;
        console.log(this.icon)
        console.log(this.url)
        console.log('data.iconSF')
        console.log(data.iconSF)
            // this.icon.spriteFrame = data.iconSF
        this.itemName.string = data.itemName;
        this.itemPrice.string = data.itemPrice;
        console.log(this.icon.SpriteFrame)
        var remoteUrl = "http://ttnba.teamcrushsport.com/pub_media/card_v1/446.png";
        cc.loader.load(remoteUrl, function(err, texture) {
            console.log(remoteUrl)
            console.log(texture)
            let sp = new cc.SpriteFrame(texture)
            console.log(that.node.getComponent(cc.Sprite))
                // sprite = that.node.getComponent('ItemTemplate')
            console.log(that.node)
                // sprite.spriteFrame = sp;
                // this.img(texture)
            that.icon.spriteFrame = sp
            console.log('1--------------------------1')
                // this.icon.SpriteFrame(texture)
                // console.log(this.icon.spriteFrame(texture))
            console.log('1--------------------------1')
            console.log(sp)

        });
        //     cc.loader.load({
        //         url: "http://ttnba.teamcrushsport.com/pub_media/card_v1/446.png",
        //         type: 'jpg'
        //     }, function(err, texture) {
        //         if (err) {
        //             cc.error(err);
        //             return;
        //         } else {
        //             let sp = new cc.SpriteFrame(texture),
        //                 // sprite = node.getComponent(cc.Sprite),
        //                 // w = sprite.node.width,
        //                 // h = sprite.node.height;

        //                 this.icon.spriteFrame = sp;
        //             // sprite.node.width = w;
        //             // sprite.node.height = h;
        //         }
        //     });
        //     console.log(data.iconSF)
        //     var spriteFrame = this.iconS   
        //     var textureURL = this.textureURL;
        //     spriteFrame.setTexture(textureURL);
        //     this.textureURL = 'http://ttnba.teamcrushsport.com/pub_media/card_v1/446.png'
    }
});