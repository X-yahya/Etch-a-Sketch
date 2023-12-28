const grid = document.querySelector(".container");
let cells = 16;

function createGrid(cells) {
    for (let i = 0; i < cells; i++) {
        let newGridCell = document.createElement("div");
        newGridCell.classList.add("gridcell");

        for (let j = 0; j < cells; j++) {
            let newDiv = document.createElement("div");
            newDiv.style.border = "1px solid black";
            newDiv.classList.add("row");
            newGridCell.appendChild(newDiv);
        }

        grid.appendChild(newGridCell);
    }
}
createGrid(cells);
const elements = document.querySelectorAll(".row");
const clear = document.querySelector(".clear") ; 
const white = document.querySelector(".white") ; 
const black = document.querySelector(".black") ; 
const rgb = document.querySelector(".Rgb") ; 
let current_color = "";
white.addEventListener("click",()=>{current_color= "white";}) ; 
black.addEventListener("click",()=>{current_color="black";});  
rgb.addEventListener("click",()=>{current_color = "rgb";});
elements.forEach((elem) => {
    elem.addEventListener("mouseover", () => {
        if (current_color==="rgb")
        {
            elem.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})` ;
        }
        else{
       elem.style.background  = current_color ; }
    })
    
    clear.addEventListener("click",()=>{
        elem.style.background = "white" ;
    });

    
    
});



