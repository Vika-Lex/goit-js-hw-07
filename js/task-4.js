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
formEl.classList.add("login-form");
formEl.elements.email.classList.add("inp-class");
formEl.elements.password.classList.add("inp-class");
formEl.querySelector("button[type='submit']").classList.add("btn-login");
