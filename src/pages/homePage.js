import { app, header } from "../vars";
export default function homePage() {
  header.classList.add("none");
  app.innerHTML = `
	<h1 style="color:#fff">Home</h1>
		`;
}
