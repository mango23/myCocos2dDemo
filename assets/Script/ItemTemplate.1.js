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

        // var img = new Image();
        // img.src = 'http://ttnba.teamcrushsport.com/pub_media/card_v1/446.png';
        // texture.initWithElement(img);
        // texture.handleLoadedTexture();
        // this.icon.spriteFrame = 'db://assets/Texture/img/BLUE_badge';
        this.icon.spriteFrame = data.iconSF
        this.itemName.string = data.itemName;
        this.itemPrice.string = data.itemPrice;
        // var realUrl = cc.url.raw("http://ttnba.teamcrushsport.com/pub_media/card_v1/446.png");
        // var texture = cc.textureCache.addImage(realUrl);
        // this.url = 'http://ttnba.teamcrushsport.com/pub_media/card_v1/446.png'
        console.log(this.icon.SpriteFrame)
        var remoteUrl = "http://ttnba.teamcrushsport.com/pub_media/card_v1/446.png";
        cc.loader.load(remoteUrl, function(err, texture) {
            // var sprite2 = cc.instantiate(this.node.getChildByName('cocos'));
            // sprite2.getComponent(cc.Sprite).spriteFrame.setTexture(texture2);
            console.log(remoteUrl)
            console.log(texture)
            let sp = new cc.SpriteFrame(texture)
            sprite = that.node.getComponent(cc.Sprite)
            console.log(that.node)
                // sprite.spriteFrame = sp;
                // this.img(texture)
            console.log('1--------------------------1')
                // this.icon.SpriteFrame(texture)
            console.log(this.icon.spriteFrame(texture))
            console.log('1--------------------------1')
            console.log(sp)
                // this.icon.spriteFrame = sp
                // this.icon.spriteFrame.Texture(texture);
                // this.url.spriteFrame = texture
                // let sp = new cc.SpriteFrame(texture),
                //     sprite = node.getComponent(cc.Sprite),
                //     w = sprite.node.width,
                //     h = sprite.node.height;

            // sprite.spriteFrame = sp;
            // sprite.node.width = w;
            // sprite.node.height = h;
            // this.icon.spriteFrame(texture)
            // this.icon.spriteFrame = remoteUrl
            // Use texture to create sprite frame
        });
        // cc.loader.load({
        //     url: "http://ttnba.teamcrushsport.com/pub_media/card_v1/446.png",
        //     type: 'jpg'
        // }, function(err, texture) {
        //     if (err) {
        //         cc.error(err);
        //         return;
        //     } else {
        //         let sp = new cc.SpriteFrame(texture),
        //             // sprite = node.getComponent(cc.Sprite),
        //             // w = sprite.node.width,
        //             // h = sprite.node.height;

        //             this.icon.spriteFrame = sp;
        //         // sprite.node.width = w;
        //         // sprite.node.height = h;
        //     }
        // });
        // console.log(data.iconSF)
        // var spriteFrame = this.iconS   
        // var textureURL = this.textureURL;
        // spriteFrame.setTexture(textureURL);
        // this.textureURL = 'http://ttnba.teamcrushsport.com/pub_media/card_v1/446.png'
    }
});