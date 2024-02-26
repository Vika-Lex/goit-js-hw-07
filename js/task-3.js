const inputName = document.querySelector("#name-input");
const span = document.querySelector("#name-output");

inputName.classList.add("my-input-class");
span.classList.add("my-span-class");

inputName.addEventListener("input", onInput);

function onInput(event) {
  const inputValue = event.currentTarget.value.trim();
  if (inputValue === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = inputValue;
  }
}
