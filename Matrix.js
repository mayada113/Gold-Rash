class Matrix{
    constructor(r, c){
        this.matrix = this.generateMatrix(r,c)
    }

    generateMatrix(numRows, numColumns) {
        let matrix = []
        let num = 1
        
        for (let r = 0; r < numRows; r++) {
            matrix.push([])
            for (let c = 0; c < numColumns; c++) {
                matrix[r].push(num++)
            }
        }
        return matrix
    }

    get(rowNum, colNum){
        return this.matrix[rowNum][colNum]
    }

    print(){
        let row = ""
        for(let i=0; i<this.matrix.length; i++){
            for(let j=0; j<this.matrix[i].length; j++){
                row += this.matrix[i][j] + "\t"
            }
            console.log(row)
            row = ""
        }
    }

    printColumn(colNum) {
        for (let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][colNum])
        }
    }
    
    printRow(rowNum){
        let row =""
        for (let i = 0; i < this.matrix[rowNum].length; i++) {
            row += this.matrix[rowNum][i] + "\t"
        }
        console.log(row)
    }
        
    alter(rowNum, colNum, value){
        this.matrix[rowNum][colNum] = value
    }

    findCoordinate(value){
        for(let i=0; i<this.matrix.length; i++){
            for(let j=0; j<this.matrix[i].length; j++){
                if(this.get(i,j) === value){
                    return {x:j, y:i}
                }
            }
        }
        return null
    }

}



