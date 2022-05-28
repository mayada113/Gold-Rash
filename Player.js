class Player{
    constructor(num){
        this.num = num
        this.score = 0
        this.x = 0
        this.y = 0
    }

    addScore(){
        this.score += 10
    }

    location(x, y){
        this.x = x
        this.y = y
    }
}

