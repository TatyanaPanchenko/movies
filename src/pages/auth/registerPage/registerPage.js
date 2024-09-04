import { app, header } from "../../../vars";
export default function registerPage(auth) {
  const formRegTemplate = `<div class="wrapper-form">
  <form name="register">
    <h1 class="title">Create your personal account</h1>
    <h3 class="err none"></h3>
    <div>
      <input type="email" name="email" placeholder="Email">
    </div>
		   <div>
      <input type="text" name="lastName" placeholder="Last name">
    </div>
		   <div>
      <input type="text" name="firstName" placeholder="First Name">
    </div>
    <div>
      <input type="password" name="password" placeholder="Password">
    </div>
		  <div>
      <input type="password" name="confirfPassword" placeholder="Confirm password">
    </div>
    <div class="wrapper-btn">
      <button>Enter</button>>
    </div>
    <a href="/login">Sign in</a>
  </form>
</div>`;
  app.innerHTML = formRegTemplate;
  const formReg = document.form.register;
  const { email, password, lastName, firstName, confirmPassword } = formReg;
  const err = document.querySelector(".err");
  formReg.addEventListener("submit", (event) => {
    event.preventDefault();
    if (
      email.value === "" ||
      lastName.value === "" ||
      firstName.value === "" ||
      password.value === ""
    ) {
      err.innerHTML = "Fill in all fields";
      err.classList.remove("none");
      return;
    }
    if (password.value.length < 7 || confirmPassword.value.length > 20) {
      err.innerHTML = "Password contains less than 7 characters";
      err.classList.remove("none");
      return;
    }
    if (password.value !== confirmPassword.value) {
      err.innerHTML = "Passwords don't match";
      err.classList.remove("none");
      return;
    }
    err.classList.add("none");
    createUserWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        window.location.pathname = "/login";
      })
      .catch((error) => {
        err.innerHTML = "User already exists";
        err.classList.remove("none");
      });
  });
}
