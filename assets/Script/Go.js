cc.Class({
    extends: cc.Component,

    properties: {
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
        var manager = cc.director.getCollisionManager();
        manager.enabled = true;
        cc.eventManager.addListener({
            event: cc.EventListener.TOUCH_ONE_BY_ONE,
            onTouchBegan: (touch, event) => {
                var touchLoc = touch.getLocation();

                // 获取多边形碰撞组件的世界坐标系下的点来进行点击测试
                // 如果是其他类型的碰撞组件，也可以在 cc.Intersection 中找到相应的测试函数
                if (cc.Intersection.pointInPolygon(touchLoc, this.polygonCollider.world.points)) {
                    this.title.string = 'Hit';
                } else {
                    this.title.string = 'Not hit';
                }

                return true;
            },
        }, this.node);
    },
    onCollisionEnter: function(other, self) {
        console.log('on collision enter');
    },
    onCollisionExit: function(other, self) {
        console.log('on collision exit');
    },

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});