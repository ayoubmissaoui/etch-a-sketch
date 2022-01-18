// create 16x16 grid
const gridContainer = document.querySelector('#grid');

function makeCells (){
    for (let i = 0 ; i < 256 ; i ++) {
        const newDiv = document.createElement('div');
        gridContainer.appendChild(newDiv);
        console.log("added");
    }
}

makeCells()

