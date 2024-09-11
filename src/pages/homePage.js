import { app } from "../vars";
import { header } from "../common/header";
import { spinner } from "../common/spinner";
import kinoPoisk from "../services/kinoPoisk";
import { cardFilm } from "../common/cardFilm";
import "./homePage.scss";
export default function homePage(auth) {
  spinner();
  kinoPoisk.getMoviePopular().then((data) => {
    const arrFilms = data.items;
    setTimeout(() => {
      renderHomePage(arrFilms, auth);
    }, 1000);
  });

  function renderHomePage(data, auth) {
    let searchFlag = false;
    app.innerHTML = "";
    header(true, auth);
    app.insertAdjacentHTML(
      "beforeend",
      `<div class="search-wrapper"> <form name="searchForm">
        <input type="text" name="search" />
        <button>
          <img src="./assets/search.png" alt="search" />
        </button>
      </form></div><div class="film-list">
           ${renderCardFilm(data)}</div>`
    );
    const form = document.forms.searchForm;
    const { search } = form.elements;
    const filmList = document.querySelector(".film-list");

    search.addEventListener("input", (event) => {
      if (search.value.length > 2) {
        searchFilm(search.value, data, filmList);
        searchFlag = true;
      } else if (searchFlag) {
        filmList.innerHTML = "";
        filmList.insertAdjacentHTML("beforeend", renderCardFilm(data));
      }
    });
  }
  function renderCardFilm(films) {
    return films.map((item) => cardFilm(item));
  }
  function searchFilm(string, arr, container) {
    const arrFilms = arr.filter((item) => {
      return item.nameRu.toLowerCase().includes(string.toLowerCase());
    });
    container.innerHTML = "";
    container.insertAdjacentHTML("beforeend", renderCardFilm(arrFilms));
  }
}
