// Declarations
let btnStatus
    , numBlocks;
const grid = document.getElementById('grid');
const button = document.getElementById('reset');

// display 16X16 grid if reset button not clicked yet
button.addEventListener('click', () => {
    return btnStatus = "clicked";
})
while ( btnStatus !== "clicked") {
    automaticGrid()
    break;
}

function automaticGrid() {
    for (let i = 0; i < 256; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add('box');
        grid.appendChild(newDiv);
        console.log('created')
        }
    mouseOver()
}

// Deletes old grid, gets number of blocks per line from user, creates new cutom grid, and changes box size css
button.addEventListener('click', () => {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        removeboxes();
    });
    getNumBlocks();
    customGrid();
    changeBoxCss();

})

function getNumBlocks() {
    do {
    numBlocks = prompt("how many blocks per side?")
    } while (numBlocks > 100 || numBlocks == 0)
}

function removeboxes() {
    const box = document.querySelector('.box')
    const parent = box.parentNode;
    parent.removeChild(box)
}

function customGrid() {
    for ( let i = 0 ; i < (numBlocks * numBlocks) ; i++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add('box');
        grid.appendChild(newDiv);
        console.log('created')
    }
    mouseOver()
}

function changeBoxCss() {
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.style.width=(`${800/numBlocks}px`);
        box.style.height=(`${800/numBlocks}px`)
    });
}

function mouseOver(){
    const boxes = document.querySelectorAll('.box');
    boxes.forEach(box => {
        box.addEventListener('mouseenter', () => {
            box.classList.add('hover');
        })
    });
}