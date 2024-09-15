import { app } from "../vars";
import { header } from "../common/header";
import { spinner } from "../common/spinner";
import kinoPoisk from "../services/kinoPoisk";
import { cardFilm } from "../common/cardFilm";

export default function serialsPage(auth) {
  spinner();
  kinoPoisk.getSerials().then((data) => {
    setTimeout(() => {
      renderSerialsPage(data, auth);
    }, 1000);
  });
}
function renderSerialsPage(data, auth) {
  app.innerHTML = "";
  header(true, auth);
  app.insertAdjacentHTML(
    "beforeend",
    `<div class="container">
    <div class="film-list">${renderCardFilm(data)}
           </div>
            </div>`
  );
}
function renderCardFilm(films) {
  return films.map((item) => cardFilm(item)).join("");
}
