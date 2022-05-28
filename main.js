const renderer = new Renderer()
renderer.renderStart()
let board

const start = function(){
    let rows = $('#rows').val()
    let cols = $('#cols').val()
    board = new GoldRush(rows, cols)
    renderer.render(board)
}

$(document).keypress(function (e) {
    switch(e.which){
        case 119:
            board.movePlayer(1, "up")
            renderer.render(board)
            break
    
      case 97:
          board.movePlayer(1, "left")
          renderer.render(board)
          break

      case 115:
          board.movePlayer(1, "down")
          renderer.render(board)
          break

      case 100:
          board.movePlayer(1, "right")
          renderer.render(board)
          break
          
      case 105:
          board.movePlayer(2, "up")
          renderer.render(board)
          break
      
      case 106:
        board.movePlayer(2, "left")
        renderer.render(board)
        break

      case 107:
        board.movePlayer(2, "down")
        renderer.render(board)
        break

      case 108:
        board.movePlayer(2, "right")
        renderer.render(board)
        break
    }
})

const again = function(){
    renderer.renderStart()
}

Handlebars.registerHelper('isOne', function (cell) {
    return cell === 1;
})
Handlebars.registerHelper('isTwo', function (cell) {
    return cell === 2;
})
Handlebars.registerHelper('isWall', function (cell) {
    return cell === "w";
})
Handlebars.registerHelper('isCoin', function (cell) {
    return cell === "c";
})