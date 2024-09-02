import "../auth.scss";
import { app, header } from "../../../vars";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function loginPage(auth) {
  const formLoginTemplate = `<div class="wrapper-form">
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
  app.innerHTML = formLoginTemplate;
  const formLogin = document.form.login;
  const { email, password } = formLogin;
  const err = document.querySelector(".err");

  formLogin.addEventListener("submit", (event) => {
    event.preventDefault();
    if (email.value == "" || password.value == "") {
      err.classList.remove("none");
      err.textContent = "Заполните все поля";
      return;
    }
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        window.location.pathname = "/";
      })
      .catch((errText) => {
        err.classList.remove("none");
        err.textContent = "Неверный";
      });
  });
}
