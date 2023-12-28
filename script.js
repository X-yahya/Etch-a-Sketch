const grid = document.querySelector(".container");
let cells = 16;
let newValue = document.querySelector(".cellnum") ; 
console.log(newValue.value) ;


for (let i = 0; i < cells; i++) {
    let newgridcell = document.createElement("div");
    newgridcell.classList.add("gridcell");

    for (let j = 0; j < cells; j++) {
        let newdiv = document.createElement("div");
        newdiv.style.border = "1px solid black";
        newdiv.classList.add("row");
        newgridcell.appendChild(newdiv);
    }

    grid.appendChild(newgridcell);
}