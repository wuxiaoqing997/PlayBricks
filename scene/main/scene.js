var Scene = function(game) {
    var s = {
        game: game,
    }

    var paddle = Paddle(game)
    var ball = Ball(game)

    var score = 0

    var blocks = loadLevel(game, 1)
    var num = blocks.length
    log(num)
    var enableDrag = false

    game.registerAction('a', function() {
        paddle.moveLeft()
    })
    game.registerAction('d', function() {
        paddle.moveRight()
    })
    game.registerAction('f', function() {
        ball.fire()
    })


    s.draw = function() {
        game.context.fillStyle = 'pink'
        game.context.fillRect(0, 0, 400, 300)
        game.drawImage(paddle)
        game.drawImage(ball)
            // draw blocks
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.alive) {
                game.drawImage(block)
            }
        }
    }


    s.update = function() {
        if (window.paused) {
            return
        }
        ball.move()

        if (ball.y > paddle.y) {
            // 跳转到 游戏结束 的场景
            var end = SceneEnd.new(game)
            game.replaceScene(end)
        }
        // 判断相撞
        if (paddle.collide(ball)) {
            // 这里应该调用一个 ball.反弹() 来实现
            ball.back()
        }
        // 判断 ball 和 blocks 相撞
        for (var i = 0; i < blocks.length; i++) {
            var block = blocks[i]
            if (block.collide(ball)) {
                // log('block 相撞')
                block.kill()
                ball.back()
                score += 10
                log('ok')
                num--
                log(num)
            }

        }
        if (num == 0) {
           var restart = Win.new(game)
            game.replaceScene(restart)
        }

    }

    game.canvas.addEventListener('mousedown', function(event) {
        var x = event.offsetX
        var y = event.offsetY

        if (ball.hasPoint(x, y)) {
            enableDrag = true
        }
    })

    game.canvas.addEventListener('click', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        blocks.push(Block(game, [x, y]))
        num = blocks.length
    })

    game.canvas.addEventListener('mousemove', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        if (enableDrag) {
            ball.x = x
            ball.y = y
        }

    })
    game.canvas.addEventListener('mouseup', function(event) {
        var x = event.offsetX
        var y = event.offsetY
        enableDrag = false
    })
    return s
}