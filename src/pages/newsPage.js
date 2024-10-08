import { app } from "../vars";
import { header } from "../common/header";
import { spinner } from "../common/spinner";
import kinoPoisk from "../services/kinoPoisk";
import { cardNews } from "../common/cardNews";

export default function newsPage(auth) {
  spinner();
  kinoPoisk.getNews().then((data) => {
    setTimeout(() => {
      renderNewsPage(data, auth);
    }, 1000);
  });
}
function renderNewsPage(data, auth) {
  app.innerHTML = "";
  header(true, auth);
  console.log(data);
  app.insertAdjacentHTML(
    "beforeend",
    `<div class="container">
    <div class="news-list">${renderCardNews(data)}
           </div>
            </div>`
  );
}
function renderCardNews(news) {
  return news.map((item) => cardNews(item)).join("");
}
