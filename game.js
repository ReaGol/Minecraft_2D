//creat game matrix
const gameMatrix = [
    ['','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','cloud','cloud','','',''],
    ['','','','','','','','','','','','','cloud','cloud','cloud','cloud','',''],
    ['','','','','','','','','','','','','','','','','',''],
    ['cloud','cloud','','','','','','','','','','','','','','','',''],
    ['cloud','','','','','','','','','','','','','','','','',''],
    ['','','','','','','','','','','','','','','','','',''],
    ['','','','','','','leaves','leaves','leaves','','','','','','','','',''],
    ['','','','','','','leaves','leaves','leaves','','','','','','','','',''],
    ['','','','','','','leaves','leaves','leaves','','','','','','','','',''],
    ['','','','','','','','trunk','','','','','','','','','',''],
    ['','','','','','','','trunk','','','','','','','','','',''],
    ['','','rock','rock','','','','trunk','','','','','','rock','rock','rock','',''],
    ['','rock','rock','rock','','','','trunk','','','','','','rock','rock','rock','',''],
    ['grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass','grass'],
    ['ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground'],
    ['ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground'],
    ['ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground','ground']

]
const gridSize = 18;

//create materials object
const materials = {
  ground: { className: "ground", img: 'url("imgs/ground.png")' },
  grass: { className: "grass", img: 'url("imgs/grass.png")' },
  rock: { className: "rock", img: 'url("imgs/rock.png")' },
  trunk: { className: "trunk", img: 'url("imgs/Oak_log.webp")' },
  leaves: { className: "leaves", img: 'url("imgs/leaves.png")' },
  sky: { className: "sky" },
  cloud: { className: "cloud" }
  // grass, rock, trunk, leaves
};
// //create tools object
// const tools = {axe, pickaxe, shovel}

//selectors
const gameBoard = document.querySelector("#game-board");
gameBoard.style.gridColumnStart = `repeat(${gridSize}, 1fr)`;
gameBoard.style.gridRowStart = `repeat(${gridSize}, 1fr)`;

//event listeners
gameBoard.addEventListener("click", (e) => {
    if (e.target === gameBoard) return;
  console.log(e);
});


const createWorld = () => {
  gameMatrix.forEach((row, rowIndex, arr) => {
    row.forEach((col, colIndex, arr) => {
      const cell = document.createElement("div");
      const currentCol = col === '' ? 'sky': col;
      cell.classList.add(materials[currentCol].className);
      gameBoard.appendChild(cell);
      console.log(col);
    });
  });
};
createWorld();

