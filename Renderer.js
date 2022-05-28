class Renderer{
    render(board){
        if(!board.winner){
            this.renderBoard(board.matrix)
            this.renderScores(board.player1.score, board.player2.score) 
        }else{
            this.renderWinner(board.winner.num)
        }
    }

    renderStart(){
        $('#game').empty()
        const source = $("#start-template").html()
        const template = Handlebars.compile(source) 
        const newHtml = template()
        $('#game').append(newHtml)
    }

    renderBoard(board){
        $('#game').empty()
        const source = $("#board-template").html()
        const template = Handlebars.compile(source) 
        const newHtml = template({board})
        $('#game').append(newHtml)
    }
    
    renderScores1(score){
        $('#scores-container').empty()
        const source = $("#scores1-template").html()
        const template = Handlebars.compile(source) 
        const newHtml = template(score)
        $('#game').append($('#scores-container')).append(newHtml)
    }

    renderScores2(score){
        const source = $("#scores2-template").html()
        const template = Handlebars.compile(source) 
        const newHtml = template(score)
        $('#game').append(newHtml)
    }

    renderScores(scores1, scores2){
        this.renderScores1(scores1)
        this.renderScores2(scores2)
    }

    renderWinner(num){
        $('#game').empty()
        const source = $("#winner-template").html()
        const template = Handlebars.compile(source) 
        const newHtml = template(num)
        $('#game').append(newHtml)
    }
}