import { app } from "../vars";
import imgLogo from "../../assets/logo.png";
import { exitProfileUser } from "./exitProfileUser";
import { navLinks } from "../vars";

export function header(paste, auth) {
  const template = `<header id="header">
    <div class="logo">
      <a href="/">
        <img src=${imgLogo} alt="logo" />
      </a>
    </div>
    <div class="interface">
      <nav>
        <a href="/" id="home-link">Главная</a>
        <a href="/movies" id="movies-link">Фильмы</a>
        <a href="/serials" id="serials-link">Сериалы</a>
        <a href="/news" id="news-link">Новости</a>
           </nav>
          </div>
    <div class="profile"><img src="../../assets/exit.png" alt="exit"></div> 
  </header>`;

  if (paste) {
    app.insertAdjacentHTML("afterbegin", template);
    const homeLink = document.getElementById("home-link");
    const moviesLink = document.getElementById("movies-link");
    const header = document.querySelector("#header");
    const profile = document.querySelector(".profile");

    profile.addEventListener("click", () => exitProfileUser(auth));
  }
}
