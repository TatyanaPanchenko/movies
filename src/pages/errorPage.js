import { app } from "../vars";
export default function errorPage() {
  app.innerHTML = `<div class="container"><div class="error-wrapper"><h1>Ошибка</h1><p>Страница, которую вы запришиваете, не существует. Возможно она устарела, была удалена или был введен неверный адрес в адресной строке.</p></div></div>`;
}
