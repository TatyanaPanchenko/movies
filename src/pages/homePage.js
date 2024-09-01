import { app, moviesLink, homeLink } from "../vars";
export default function homePage() {
  moviesLink.classList.remove("underline");
  homeLink.classList.add("underline");
  app.innerHTML = `
	<h1 style="color:#fff">Home</h1>
		`;
}
