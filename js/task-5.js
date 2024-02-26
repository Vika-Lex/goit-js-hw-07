const buttonEl = document.querySelector(".change-color");
const bodyEl = document.querySelector("body");
const spanEl = document.querySelector(".color");

buttonEl.addEventListener("click", onButton);

function onButton(event) {
  bodyEl.style = `background-color: ${getRandomHexColor()}`;
  spanEl.textContent = getRandomHexColor();
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

buttonEl.classList.add("change-color");
bodyEl.classList.add("widget");
spanEl.classList.add("text-parag");
