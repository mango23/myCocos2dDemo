cc.Class({
    extends: cc.Component,

    properties: {
        foo: {
            default: null, // The default value will be used only when the component attaching
            url: cc.Texture2D, // optional, default is typeof default
            serializable: true, // optional, default is true
            visible: true, // optional, default is true
            displayName: 'Foo', // optional
            readonly: false, // optional, default is false
        },
        // ...
    },

    // use this for initialization
    onLoad: function() {
        var remoteUrl = "http://ttnba.teamcrushsport.com/pub_media/card_v1/446.png";
        cc.loader.load(remoteUrl, function(err, texture) {
            console.log(remoteUrl)
            console.log(texture)
            let sp = new cc.SpriteFrame(texture)
            console.log('1--------------------------1')
                // this.icon.SpriteFrame(texture)
                // console.log(this.icon.spriteFrame(texture))
            console.log('1--------------------------1')
            console.log(sp)
        });
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});