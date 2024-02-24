const inputEl = document.querySelector('input[type="number"]');
const createBtn = document.querySelector("button[data-create]");
const destroyBtn = document.querySelector("button[data-destroy]");
const containerDiv = document.querySelector("#boxes");

createBtn.addEventListener("click", onCreate);

function createBoxes(amount) {
  const arrBox = [];
  let boxSize = 30;
  for (let index = 0; index < amount; index++) {
    const box = document.createElement("div");
    box.style.width = `${boxSize}px`;
    box.style.height = `${boxSize}px`;
    box.style.backgroundColor = getRandomHexColor();
    arrBox.push(box);
    boxSize += 10;
  }
  containerDiv.append(...arrBox);
  console.log(arrBox);
}
function onCreate(event) {
  if (inputEl.value >= 1 && inputEl.value <= 100) {
    createBoxes(inputEl.value);
  }
  console.log(inputEl.value);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
