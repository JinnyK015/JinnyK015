  // -    -   -   -   -  //
 // JAVASCRIPT CARNIVAL //
// -    -   -   -   -  //

const table =  document.querySelector('table');
const boxes = table.querySelectorAll('td');

let randomIndex = getRandomInt(0, 24);
let randomBox = boxes[randomIndex];

randomBox.onclick = whackedMole;

function changeIndex () {
  randomIndex = getRandomInt(0, 24);
  randomBox = boxes[randomIndex];
  randomBox.onclick = whackedMole;
}

function movingAroundMole() {
  randomBox.removeChild(mole);
  changeIndex();
  putInTheMole();
}

setInterval(movingAroundMole, 1000);


function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
} 

function putInTheMole () {
  const mole = document.createElement('img');
  mole.src= "/javascript-carnival/whack-a-mole/mole.png";
  mole.id = "mole";
  mole.style.width = '75px';
  randomBox.appendChild(mole);
}

let moleCounter =0;

function whackedMole() {
  audio.play();
  randomBox.removeChild(mole);
  changeIndex();
  putInTheMole();
  printMoleCounter();
}

function printMoleCounter (){
  moleCounter++
  document.getElementById('recordMole').innerHTML=`you got the
  ${moleCounter} moles!`;
  }

let audio = new Audio();
audio.src = "/javascript-carnival/whack-a-mole/whack-audio.wav";


putInTheMole();
console.log("Whack-a-Mole!")