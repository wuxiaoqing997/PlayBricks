var Paddle = function(game) {
    var o = game.imageByName('paddle')
    o.x = 80
    o.y = 250
    o.speed = 15
    var paddle = o
    o.move = function(x) {
        if (x < 0) {
            x = 0
        }
        if (x > 400 - o.w) {
            x = 400 - o.w
        }
        o.x = x
    }
    o.moveLeft = function() {
        o.move(paddle.x - paddle.speed)
    }
    o.moveRight = function() {
        o.move(paddle.x + paddle.speed)
    }
    var aINb = function(x,x1,x2){
        return x >= x1 && x<= x2 
    }
    o.collide = function(ball) {
        var a = o 
        var b = ball 
        if (aINb(a.x,b.x,b.x+b.w) || aINb(b.x,a.x,a.x + a.w)) {
            if (aINb(a.y,b.y,b.y+b.h) || aINb(b.y,a.y,a.y + a.h)){
                return true
            }
        }
        return false
    }
    return o
}