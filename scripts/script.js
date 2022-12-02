const createGrid = () => {
    const boxes = document.getElementsByClassName('box')
    for (var i = 0; i < boxes.length; i++) {
        const box = boxes[i]
        var cell1 = document.createElement('div')
        cell1.id = `cell1`
        cell1.className = 'cell top-left'
        box.appendChild(cell1)

        var cell2 = document.createElement('div')
        cell2.id = `cell2`
        cell2.className = 'cell top-center'
        box.appendChild(cell2)

        var cell3 = document.createElement('div')
        cell3.id = `cell3`
        cell3.className = 'cell top-right'
        box.appendChild(cell3)

        var cell4 = document.createElement('div')
        cell4.id = `cell4`
        cell4.className = 'cell center-left'
        box.appendChild(cell4)
        
        var cell5 = document.createElement('div')
        cell5.id = `cell5`
        cell5.className = 'cell center-center'
        box.appendChild(cell5)

        var cell6 = document.createElement('div')
        cell6.id = `cell6`
        cell6.className = 'cell center-right'
        box.appendChild(cell6)

        var cell7 = document.createElement('div')
        cell7.id = `cell7`
        cell7.className = 'cell bottom-left'
        box.appendChild(cell7)

        var cell8 = document.createElement('div')
        cell8.id = `cell8`
        cell8.className = 'cell bottom-center'
        box.appendChild(cell8)

        var cell9 = document.createElement('div')
        cell9.id = `cell9`
        cell9.className = 'cell bottom-right'
        box.appendChild(cell9)

       
    }
}

createGrid()