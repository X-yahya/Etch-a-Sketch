const grid = document.querySelector(".container");

let rows = 16;
let cells = 16;

for (let i = 0; i < cells; i++) {
 let newdiv = document.createElement("div");
 
 newdiv.classList.add("row");

 for (let j = 0; j < rows; j++) {
    let newrow = document.createElement("div");
    newrow.style.border = "1px solid black";
    newrow.classList.add("cell");
    newdiv.appendChild(newrow);
 }

 grid.appendChild(newdiv);
}