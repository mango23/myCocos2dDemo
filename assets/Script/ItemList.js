var Item = cc.Class({
    name: 'Item',
    properties: {
        id: 0,
        itemName: '',
        itemPrice: 0,
        iconSF: cc.SpriteFrame,
        // textureURL: {
        //     default: "",
        //     url: cc.Texture2D
        // }

    }
});

cc.Class({
    extends: cc.Component,
    properties: {
        items: {
            default: [],
            type: Item
        },
        itemPrefab: cc.Prefab
    },
    // http://s.qzone.ttnbalite.com/thumb/pa/player_avatar/4758.png?w=137&h=99
    onLoad() {
        // console.log(111111)
        // this.items = [{ id: '1', itemName: '1', itemPrice: '1', iconSF: 'http://ttnba.teamcrushsport.com/pub_media/card_v1/446.png' },
        //     { id: '1', itemName: '4', itemPrice: '4', iconSF: 'http://ttnba.teamcrushsport.com/pub_media/card_v1/446.png' },
        //     { id: '1', itemName: '5', itemPrice: '5', iconSF: 'http://ttnba.teamcrushsport.com/pub_media/card_v1/446.png' }
        // ]
        console.log(this.items)
        for (var i = 0; i < this.items.length; ++i) {
            var item = cc.instantiate(this.itemPrefab);
            var data = this.items[i];
            this.node.addChild(item);

            // console.log(this.items[i])
            // var spriteFrame = this.iconSF;
            // var textureURL = this.textureURL;
            // spriteFrame.setTexture(textureURL);
            item.getComponent('ItemTemplate').init({
                id: data.id,
                itemName: data.itemName,
                itemPrice: data.itemPrice,
                iconSF: data.iconSF,
                url: 'http://s.qzone.ttnbalite.com/thumb/pa/player_avatar/4758.png?w=137&h=99'
                    // textureURL: data.url
            });
        }
    }

});