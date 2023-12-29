let grid = 600;
const sketchArea = document.querySelector("#sketch-area");
sketchArea.style.width = `${grid}px`;
sketchArea.style.height = `${grid}px`;
let cells = 16;
const cell_num = document.querySelector("#cell-num");
const dim = document.querySelector("#dim");

const clear = document.querySelector(".clear");
const white = document.querySelector(".white");
const black = document.querySelector(".black");
const rgb = document.querySelector(".Rgb");

function destgrid() {
  sketchArea.innerHTML = "";
}

function creategrid() {
  for (let i = 0; i < cells * cells; i++) {
    const gridSquare = document.createElement("div");
    gridSquare.style.width = gridSquare.style.height = `${(grid / cells) - 2}px`;
    gridSquare.classList.add("cell");
    sketchArea.appendChild(gridSquare);
  }

  listener();
}

creategrid();

cell_num.addEventListener("input", () => {
  cells = cell_num.value;
  dim.textContent = cell_num.value + " x " + cell_num.value;
  destgrid();
  creategrid();
});

function listener() {
  let current_color = "";
  white.addEventListener("click", () => { current_color = "white"; });
  black.addEventListener("click", () => { current_color = "black"; });
  rgb.addEventListener("click", () => { current_color = "rgb"; });

  const elements = document.querySelectorAll(".cell");
  elements.forEach((elem) => {
    elem.addEventListener("mouseover", () => {
      if (current_color === "rgb") {
        elem.style.background = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
      } else {
        elem.style.background = current_color;
      }
    });

    clear.addEventListener("click", () => {
      elem.style.background = "white";
    });
  });
}
