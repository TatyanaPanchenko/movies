import { app } from "../vars";
import { header } from "../common/header";
import { spinner } from "../common/spinner";
import kinoPoisk from "../services/kinoPoisk";
import { cardFilm } from "../common/cardFilm";
import "./moviesPage.scss";
export default function moviesPage(auth) {
  spinner();
  kinoPoisk.getFilmGenres("POPULAR_SERIES").then((data) => {
    setTimeout(() => {
      renderMoviesPage(data, auth);
    }, 1000);
  });
}
function renderMoviesPage(data, auth) {
  app.innerHTML = "";
  header(true, auth);
  app.insertAdjacentHTML(
    "beforeend",
    `<div class="container">
      <div class="filter-wrapper">
        <button class="filter-item">Комедии</button>
        <button class="filter-item">Мелодрамы</button>
        <button class="filter-item">Семейные</button>
        <button class="filter-item">Детские</button>
        <button class="filter-item">Ужасы</button>
      </div>
    <div class="film-list">${renderCardFilm(data)}
           </div>
            </div>`
  );
  const filterWrapper = document.querySelector(".filter-wrapper");
  filterWrapper.addEventListener("click", (event) => {
    switch (event.target.textContent) {
      case "Комедии":
        kinoPoisk.getFilmGenres("COMICS_THEME").then((data) => {
          spinner();
          setTimeout(() => {
            renderMoviesPage(data, auth);
          }, 1000);
        });
        break;
      case "Мелодрамы":
        kinoPoisk.getFilmGenres("POPULAR_SERIES").then((data) => {
          spinner();
          setTimeout(() => {
            renderMoviesPage(data, auth);
          }, 1000);
        });
        break;
      case "Семейные":
        kinoPoisk.getFilmGenres("FAMILY").then((data) => {
          spinner();
          setTimeout(() => {
            renderMoviesPage(data, auth);
          }, 1000);
        });
        break;
      case "Детские":
        kinoPoisk.getFilmGenres("KIDS_ANIMATION_THEME").then((data) => {
          spinner();
          setTimeout(() => {
            renderMoviesPage(data, auth);
          }, 1000);
        });
        break;
      case "Ужасы":
        kinoPoisk.getFilmGenres("VAMPIRE_THEME").then((data) => {
          spinner();
          setTimeout(() => {
            renderMoviesPage(data, auth);
          }, 1000);
        });
        break;
      default:
        errorPage();
    }
    console.log(event.target.textContent);
  });
  console.log(data);
}
function renderCardFilm(films) {
  return films.map((item) => cardFilm(item)).join("");
}
