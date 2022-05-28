class GoldRush extends Matrix{
    constructor(numRows, numColumns){
        super(numRows, numColumns)
        this.player1 = new Player(1)
        this.player2 = new Player(2)
        this.player1.location(0,0)
        this.player2.location(numRows-1,numColumns-1)
        this.currentPlayer = this.player1
        this.otherPlayer = this.player2
        this.winner = null
        this.generateCoins()
        this.generateWalls()
    }

    generateMatrix(numRows, numColumns){
        let matrix = []
        
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push('.')
            }
        }
        matrix[0][0] = 1
        matrix[numRows-1][numColumns-1] = 2
        return matrix
    }

    generateCoins(){
        let coinsNum = this.matrix.length * this.matrix[0].length / 4
        while(coinsNum > 0){
            let x = Math.floor(Math.random() * this.matrix.length)
            let y = Math.floor(Math.random() * this.matrix[0].length)
            if(this.matrix[x][y] === "."){
                this.matrix[x][y] = "c"
                coinsNum--
            }
        }
    }

    generateWalls(){
        let wallsNum = this.matrix.length * this.matrix[0].length / 5
        while(wallsNum > 0){
            let x = Math.floor(Math.random() * this.matrix.length)
            let y = Math.floor(Math.random() * this.matrix[0].length)
            if(this.matrix[x][y] === "."){
                this.matrix[x][y] = "w"
                wallsNum--
            }
        }
    }

    movePlayer(playerNum, direction){
        playerNum === 1 ? (this.currentPlayer = this.player1,  this.otherPlayer = this.player2): 
        (this.currentPlayer = this.player2, this.otherPlayer = this.player1)

        direction === "down" ? this.moveDown() : 
        (direction === "up" ? this.moveUp() : 
        (direction === "left" ? this.moveLeft() : this.moveRight()))

        
        if(this.matrix[this.currentPlayer.x][this.currentPlayer.y] === "c"){
            this.currentPlayer.addScore()
            if(this.currentPlayer.score >= (this.matrix.length * this.matrix[0].length / 4)*10/3){
                this.winner = this.currentPlayer
            }
        }

        this.matrix[this.currentPlayer.x][this.currentPlayer.y] = this.currentPlayer.num
    }

    moveDown(){
        if(this.currentPlayer.x !== this.matrix[0].length-1){
            this.currentPlayer.x++
            let currentCell = this.matrix[this.currentPlayer.x][this.currentPlayer.y] 
            if(currentCell === this.otherPlayer.num || currentCell === "w"){
                this.currentPlayer.x--
            }else{
                this.matrix[this.currentPlayer.x-1][this.currentPlayer.y] = "."
            }
        }
    }

    moveUp(){
        if(this.currentPlayer.x !== 0){
            this.currentPlayer.x--
            let currentCell = this.matrix[this.currentPlayer.x][this.currentPlayer.y] 
            if(currentCell === this.otherPlayer.num || currentCell === "w"){
                this.currentPlayer.x++
            }else{
                this.matrix[this.currentPlayer.x+1][this.currentPlayer.y] = "."
            }
        }
    }

    moveLeft(){
        if(this.currentPlayer.y !== 0){
            this.currentPlayer.y--
            let currentCell = this.matrix[this.currentPlayer.x][this.currentPlayer.y] 
            if(currentCell === this.otherPlayer.num || currentCell === "w"){
                this.currentPlayer.y++
            }else{
                this.matrix[this.currentPlayer.x][this.currentPlayer.y+1] = "."
            }
       }
    }

    moveRight(){
        if(this.currentPlayer.y !== this.matrix.length-1){
            this.currentPlayer.y++
            let currentCell = this.matrix[this.currentPlayer.x][this.currentPlayer.y] 
            if(currentCell === this.otherPlayer.num || currentCell === "w"){
                this.currentPlayer.y--
            }else{
                this.matrix[this.currentPlayer.x][this.currentPlayer.y-1] = "."
            }
        }
    }
}
