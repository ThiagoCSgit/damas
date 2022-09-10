let board = document.querySelector('#board')
let pieceRow = [1,2,3,6,7,8]
let idPiece = ''

function createBoard (){
    let table = document.createElement('table')
    let tbody = document.createElement('tbody')
    table.appendChild(tbody)
    for(let i=1; i<9;i++){
        let row = document.createElement('tr')
        tbody.appendChild(row)
        for(let j=1; j<9;j++){
            let column = document.createElement('td')
            row.appendChild(column)
            if(i % 2 == 0 && j % 2 == 0){
                column.classList.add('white-square')
                column.addEventListener('dragover', dropPiece)
            }
            else if(i % 2 != 0 && j % 2 != 0){
                column.classList.add('white-square')
                column.addEventListener('dragover', dropPiece)
            }
            if(pieceRow.includes(i)){
                let img = document.createElement('img')
                img.addEventListener('dragstart', startDrag)
                if(i < 4){
                    img.setAttribute('id', `peca_branca_${i}_${j}`)
                    if(i % 2 != 0 && j %2 != 0){
                        img.src = 'peca_branca.png'
                        column.appendChild(img)
                    }
                    else if(i % 2 == 0 && j %2 == 0){
                        img.src = 'peca_branca.png'
                        column.appendChild(img)
                    }
                }
                else{
                    img.setAttribute('id', `peca_preta_${i}_${j}`)
                    if(i % 2 != 0 && j %2 != 0){
                        img.src = 'peca_preta.png'
                        column.appendChild(img)
                    }
                    else if(i % 2 == 0 && j %2 == 0){
                        img.src = 'peca_preta.png'
                        column.appendChild(img)
                    }
                }
            }
        }
    }
    board.appendChild(table)
}

createBoard()

function startDrag(){
    idPiece = this.id
}

function dropPiece(){
    let piece = document.querySelector(`#${idPiece}`)
    if(this.querySelectorAll('img').length == 0){
        this.appendChild(piece)
    }
    else{
        console.log('Está casa já tem uma peça')
    }
}
