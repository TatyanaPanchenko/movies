import { app, header } from "../vars";
export default function moviesPage() {
  header.classList.add("none");
  app.innerHTML = `
	<h1 style="color:#fff">Movies</h1>
	`;
}
