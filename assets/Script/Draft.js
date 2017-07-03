cc.Class({
    extends: cc.Component,

    properties: {
        scoreDisplay: {
            default: null,
            type: cc.Label
        },
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
        // this.getComponent(cc.Label).string = 'hello';
        // this.Label.string = 'hello';
        // var action = cc.moveTo(2, 100, 100);
        // // 执行动作
        // node.runAction(action);
        // // 停止一个动作
        // node.stopAction(action);
        // // 停止所有动作
        // node.stopAllActions();
    },

    // called every frame, uncomment this function to activate update callback
    update: function(dt) {
        // this.scoreDisplay.string = 'this.score.toString()';
    },
});