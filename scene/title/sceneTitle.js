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
        this.game.context.fillText('Press K Ready', 200, 200)
    }
    update() {}

}