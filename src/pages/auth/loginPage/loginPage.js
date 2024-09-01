import "./loginPage.scss";
import { app } from "../../../vars";

export default function loginPage() {
  const formloginTemplate = `<div class="wrapper-form">
  <form name="login">
    <h1 class="title">Log in to your personal account</h1>
    <div>
      <input type="email" name="email" placeholder="Email">
    </div>
    <div>
      <input type="password" name="password" placeholder="Password">
    </div>
    <div>
      <button>Enter</button>>
    </div>
    <a href="/register">Sign up</a>
  </form>
</div>`;
  app.innerHTML = formloginTemplate;
}
