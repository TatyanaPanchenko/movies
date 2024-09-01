import { app, moviesLink, homeLink } from "../vars";
export default function moviesPage() {
  moviesLink.classList.add("underline");
  homeLink.classList.remove("underline");
  app.innerHTML = `
	<h1 style="color:#fff">Movies</h1>
	`;
}
