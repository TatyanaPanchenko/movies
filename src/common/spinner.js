import { app } from "../vars";
import "./spinner.scss";
export function spinner() {
  app.innerHTML = `
	<div class="wrapper-spinner"><div class="spinner">
</div><h2>Loading...</h2></div>`;
}
