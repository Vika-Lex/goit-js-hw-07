const inputName = document.querySelector("#name-input");
// console.log(userName);
const span = document.querySelector("#name-output");
// console.log(span);
inputName.addEventListener("input", onInput);

function onInput(event) {
  const inputValue = event.currentTarget.value.trim();
  if (inputValue === "") {
    span.textContent = "Anonymous";
  } else {
    span.textContent = inputValue;
  }
  //   console.log(event.currentTarget.value);
  //   console.log(event.currentTarget.value.trim());
}
