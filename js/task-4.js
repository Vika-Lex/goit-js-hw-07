const formEl = document.querySelector(".login-form");
formEl.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  //   console.dir(event.target);
  const emailValue = event.target.elements.email.value.trim();
  //   console.log(emailValue);
  const passwordValue = event.target.elements.password.value.trim();
  // console.log(passwordValue);
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
