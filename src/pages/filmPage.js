import { app } from "../vars.js";
import { header } from "../common/header";
import { spinner } from "../common/spinner";
import kinoPoisk from "../services/kinoPoisk";
import "./filmPage.scss";

export default function filmPage(auth, idFilm) {
  spinner();
  kinoPoisk.getFilmInfo(idFilm).then((data) => {
    setTimeout(() => {
      renderFilmPage(data, auth);
    }, 1000);
  });

  function renderFilmPage(data, auth) {
    app.innerHTML = "";
    header(true, auth);
    app.insertAdjacentHTML(
      "beforeend",
      ` <div class="film-wrapper">
      <div class="film-about"><div class="film-name">${data.nameRu}</div>
<div class="film-slogan">${data.slogan == null ? "" : data.slogan} </div>
      <div class="film-inner">
      <div class="film-left-part">

<div class="film-poster"><img src="${data.posterUrl}" alt="${
        data.nameRu
      }-poster"><div class="film-age-limit">${data.ratingAgeLimits.slice(
        3
      )}+</div></div>

</div>
<div class="film-right-part">
<div class="film-year">Год выхода: ${data.year}</div>
<div class="film-genres">Жанры: ${data.genres
        .map((item) => item.genre)
        .join(", ")}</div>
        <div class="film-countries">Страны: ${data.countries
          .map((item) => item.country)
          .join(", ")}</div>
          <div class="film-rating">Рейтинг: ${data.ratingKinopoisk}</div>
<div class="film-description">${data.description}</div>
<div class="film-link"><a href="${
        data.webUrl
      }" target="_blank">Смотреть на Кинопоиске</a></div>
</div></div></div></div>`
    );
  }
}
