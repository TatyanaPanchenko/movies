import { app } from "../vars";
import { header } from "../common/header";
export default function moviesPage(auth) {
  header(true, auth);
  app.insertAdjacentHTML("beforeend", `<h1 style="color:#fff">Movies</h1>`);
}
