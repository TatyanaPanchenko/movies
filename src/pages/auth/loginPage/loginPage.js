import "../auth.scss";
import { app } from "../../../vars";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function loginPage(auth) {
  app.innerHTML = `<div class="wrapper-form">
  <form name="login">
    <h1 class="title">Log in to your personal account</h1>
    <h3 class="err none"></h3>
    <div>
      <input type="email" name="email" placeholder="Email">
    </div>
    <div>
      <input type="password" name="password" placeholder="Password">
    </div>
    <div class="wrapper-btn">
      <button>Enter</button>>
    </div>
    <a href="/registration">Sign up</a>
  </form>
</div>`;
  const formLogin = document.forms.login;
  const { email, password } = formLogin;
  const err = document.querySelector(".err");

  formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    if (email.value == "" || password.value == "") {
      err.classList.remove("none");
      err.textContent = "Fill in all fields";
      return;
    }
    err.classList.add("none");
    signInWithEmailAndPassword(auth, email.value, password.value)
      .then(() => {
        window.location.pathname = "/";
      })
      .catch((errText) => {
        err.classList.remove("none");
        err.textContent = "Incorrect login or password";
      });
  });
}
