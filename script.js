// 16x16 grid that you can play with 

const divContainer = document.querySelector("#grid");

function makeDefaultGrid() {
    for ( let i = 0 ; i < 256 ; i ++) {
        const newDiv = document.createElement("div");
        newDiv.classList.add("box");
        divContainer.appendChild(newDiv);
        }
}

makeDefaultGrid();