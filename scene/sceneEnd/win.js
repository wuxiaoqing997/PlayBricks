class Win extends mainScene {
	constructor(game) {
		super(game)
		game.registerAction('r', function() {
			var s = SceneTitle.new(game)
			game.replaceScene(s)
		})
	}
	draw() {
		this.game.context.fillText(' You win ! Press r to restart!', 200, 200)
	}
	update() {}

}