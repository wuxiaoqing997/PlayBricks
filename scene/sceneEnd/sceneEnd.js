class SceneEnd extends mainScene {
	constructor(game) {
		super(game)
		game.registerAction('r', function() {
			var s = SceneTitle.new(game)
			game.replaceScene(s)
		})
	}
	draw() {
		this.game.context.fillText('游戏结束，按r回到首页！', 200, 200)
	}
	update() {}

}