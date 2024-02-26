const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();

  const emailValue = event.target.elements.email.value.trim();

  const passwordValue = event.target.elements.password.value.trim();

  if (!emailValue || !passwordValue) {
    return alert("All form fields must be filled in");
  } else {
    const dataForm = {
      email: emailValue,
      password: passwordValue,
    };
    console.log(dataForm);
    formEl.reset();
  }
}
