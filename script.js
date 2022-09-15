let board = document.querySelector('#board')
let pieceRow = [1,2,3,6,7,8]
let initialRow = ''
let initialColumn = ''
let idPiece = ''

function createBoard (){
    let table = document.createElement('table')
    let tbody = document.createElement('tbody')
    table.appendChild(tbody)
    for(let i=1; i<9;i++){
        let row = document.createElement('tr')
        row.id = `row-${i}`
        tbody.appendChild(row)
        for(let j=1; j<9;j++){
            let column = document.createElement('td')
            column.id = `row-${i}-column-${j}`
            row.appendChild(column)
            if(i % 2 == 0 && j % 2 == 0){
                column.classList.add('white-square')
                column.addEventListener('dragover', (e) => dropPiece(e))
            }
            else if(i % 2 != 0 && j % 2 != 0){
                column.classList.add('white-square')
                column.addEventListener('dragover',(e) => dropPiece(e))
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
    initialRow = this.parentNode.parentNode.id
    initialColumn = this.parentNode
}

function dropPiece(event){
    let piece = document.querySelector(`#${idPiece}`)
    let startRow = parseInt(initialRow.split('-')[1])
    let targetRowId = parseInt(event.path[1].id.split('-')[1])
    let targetColumnId = parseInt(event.target.id.split('-')[3])
    let targetColumn = document.querySelector(`#row-${targetRowId}-column-${targetColumnId}`)
    if(piece.id.includes('preta')){
        if(targetColumn.querySelectorAll('img').length == 0 && targetRowId == startRow - 1){
            targetColumn.appendChild(piece)
        }
        else{
            let aux = document.querySelector(`#row-${targetRowId+1}-column-${targetColumnId-1
            }`)
            if(aux.querySelectorAll('img').length > 0){
                targetColumn.appendChild(piece)
                aux.querySelector('img').style.display = 'none'
            } else{
                aux = document.querySelector(`#row-${targetRowId+1}-column-${targetColumnId+1}`)
                    if(aux.querySelectorAll('img').length > 0){
                        targetColumn.appendChild(piece)
                        aux.querySelector('img').style.display = 'none'
                    }
            
            }
        }
    } 
    else{
        if(targetColumn.querySelectorAll('img').length == 0 && targetRowId == startRow + 1){
            targetColumn.appendChild(piece)
        }
        else{
            let aux = document.querySelector(`#row-${targetRowId-1}-column-${targetColumnId+1
            }`)
            if(aux.querySelectorAll('img').length > 0){
                targetColumn.appendChild(piece)
                aux.querySelector('img').style.display = 'none'
            } else{
                aux = document.querySelector(`#row-${targetRowId+1}-column-${targetColumnId-1}`)
                    if(aux.querySelectorAll('img').length > 0){
                        targetColumn.appendChild(piece)
                        aux.querySelector('img').style.display = 'none'
                    }
            
            }
        }
    }
}
