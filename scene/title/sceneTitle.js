class SceneTitle extends mainScene {
    constructor(game) {
        super(game)
        game.registerAction('k', function() {
            var s = new Scene(game)
            game.replaceScene(s)
            log('title')
        })
    }
    draw() {
        this.game.context.fillText('按k开始游戏，按f发射，a、d是左右移动，鼠标左键可增加砖块', 100, 200)
    }
    update() {}

}