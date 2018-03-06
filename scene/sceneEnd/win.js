class Win extends mainScene {
	constructor(game) {
		super(game)
		game.registerAction('r', function() {
			var s = SceneTitle.new(game)
			game.replaceScene(s)
		})
	}
	draw() {
		this.game.context.fillText('你赢了！按r开始新的游戏！', 200, 200)
	}
	update() {}

}