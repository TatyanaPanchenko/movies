import { app } from "../vars";
import { header } from "../common/header";
import { spinner } from "../common/spinner";
import kinoPoisk from "../services/kinoPoisk";
import { cardFilm } from "../common/cardFilm";
import "./homePage.scss";
export default function homePage(auth) {
  spinner();
  kinoPoisk.getMoviePremiere().then((data) => {
    setTimeout(() => {
      renderHomePage(data, auth);
    }, 1000);
  });

  function renderHomePage(data, auth) {
    let searchFlag = false;
    let currentPage = 0;
    let quantityCards = 18;
    app.innerHTML = "";
    header(true, auth);
    app.insertAdjacentHTML(
      "beforeend",
      `<div class="container"><div class="search-wrapper">  <h1 class="title-page">Новинки августа 2024</h1><form name="searchForm">
        <input type="text" name="search" />
        <button>
          <img src="./assets/search.png" alt="search" />
        </button>
      </form>
           </div><div class="film-list">
           ${renderCardFilm(data)}</div><div class="pagination-wrapper">
            </div></div>`
    );
    const form = document.forms.searchForm;
    const { search } = form.elements;
    const filmList = document.querySelector(".film-list");
    const paginationWrapper = document.querySelector(".pagination-wrapper");
    paginationPage(data, paginationWrapper, currentPage, quantityCards);
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
    return films
      .slice(0, 18)
      .map((item) => cardFilm(item))
      .join("");
  }
  function searchFilm(string, arr, container) {
    const arrFilms = arr.filter((item) => {
      return item.nameRu.toLowerCase().includes(string.toLowerCase());
    });
    container.innerHTML = "";
    container.insertAdjacentHTML("beforeend", renderCardFilm(arrFilms));
  }
  function paginationPage(
    elements,
    paginationWrapper,
    currentPage,
    quantityCards
  ) {
    const quantityButtons = Math.ceil(elements.length / quantityCards);
    for (let i = 0; i < quantityButtons; i++) {
      const btnPage = document.createElement("button");
      btnPage.textContent = i + 1;
      paginationWrapper.appendChild(btnPage);
    }
    paginationWrapper.addEventListener("click", (event) => {
      console.log(paginationWrapper.children);
      for (let i = 0; i < paginationWrapper.children.length; i++) {
        paginationWrapper.children[i].classList.remove("active");
      }
      event.target.classList.toggle("active");
      currentPage = event.target.textContent - 1;
      showPage(elements, currentPage, quantityCards);
    });
  }
  function showPage(elements, currentPage, quantityCards) {
    const startIndex = currentPage * quantityCards;
    const endIndex = startIndex + quantityCards;
    const elementsForPage = elements.slice(startIndex, endIndex);
    console.log(elementsForPage);
    const filmList = document.querySelector(".film-list");
    filmList.innerHTML = "";
    filmList.insertAdjacentHTML("beforeend", renderCardFilm(elementsForPage));
  }
}
