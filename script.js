// set up variables
const size = 720;
let currentDimensions = 16;
// selecting the container object
const container = document.querySelector(".container");
// adding button to DOM
const button = document.createElement("button");
button.textContent = "New grid";
document.body.insertBefore(button, container);

// add button listener, prompts user for a number and creates a grid with that number as gridsize
button.addEventListener('click', (event) => {
    const rows = document.querySelectorAll(".row");
    for (let i = 0; i < currentDimensions; i++) {
        container.removeChild(rows[i]);
    }
    
    let newDimensions;
    do {
        newDimensions = prompt("Enter dimensions of new grid");
    } while (newDimensions > 100)
    
    currentDimensions = newDimensions;
    createGrid(currentDimensions);
})

// creates the initial grid
createGrid(currentDimensions);

// the create grid function
function createGrid(dimensions) {
    for (let i = 0; i < dimensions; i++) {
        const row = document.createElement("div");
        row.setAttribute("class", "row");
        container.appendChild(row);
        
        for (let j = 0; j < dimensions; j++) {
            const div = document.createElement("div");
            div.setAttribute("class", "box");
            div.setAttribute("style", "width: " + size/dimensions + "px; height: " + size/dimensions + "px;");
            row.appendChild(div);

            div.addEventListener('mouseover', (event) => {
                div.style["background-color"] = 'red';
            });
        }
    }
}