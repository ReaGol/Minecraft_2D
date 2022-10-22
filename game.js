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
  ground: { className: "ground", count: 0, img: 'url("imgs/ground.png")' },
  grass: { className: "grass", count: 0, img: 'url("imgs/grass.png")' },
  rock: { className: "rock", count: 0, img: 'url("imgs/rock.png")' },
  trunk: { className: "trunk", count: 0, img: 'url("imgs/Oak_log.webp")' },
  leaves: { className: "leaves", count: 0, img: 'url("imgs/leaves.png")' },
  sky: { className: "sky" },
  cloud: { className: "cloud" },
};

//create tools object
const tools = {
  axe: { className: 'axe', img: 'url("imgs/axe.png")'}, 
  pickaxe: { className: 'pickaxe', img: 'url("imgs/pickaxe.png")'}, 
  shovel: { className: 'shovel', img: 'url("imgs/shovel.png")'} 
}

//selectors
const gameBoard = document.querySelector("#game-board");
const toolBox = document.querySelector("#tool-box");
gameBoard.style.gridColumnStart = `repeat(${gridSize}, 1fr)`;
gameBoard.style.gridRowStart = `repeat(${gridSize}, 1fr)`;

//event listeners
gameBoard.addEventListener("click", (e) => {
    if (e.target === gameBoard) return;
  console.log(e.target.className);
  pickUpMaterial(e)
});

toolBox.addEventListener("click", (e) => {
  chooseTool(e)
})

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

//startGame function that shows the start screen?

let currentTool = '';
let lastHarvested = {}
const mappingToolToMaterial = {
  axe: ['trunk', 'leaves'],
  pickaxe: ['rock'],
  shovel: ['ground', 'grass']
}

function chooseTool(e) {
   console.log(e.target.getAttribute('name'))
   currentTool = e.target.getAttribute('name')
}

function pickUpMaterial(e){
  const material = e.target.className;
  let counter;
  // console.log(material)
  if (mappingToolToMaterial[currentTool].includes(material)){
   lastHarvested[material] = e.target
      e.target.classList.remove(material);
      e.target.classList.add("sky");
      materials[material].count++;
      // console.log(materials[material].count);
  
  } else {
    console.log('cannot harvest')
  }
}




function returnMaterial(){

}

function resetGame() {
  
}