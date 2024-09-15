import firebaseConfig from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import homePage from "./pages/homePage";
import loginPage from "./pages/auth/loginPage/loginPage";
import registrationPage from "./pages/auth/registrationPage/registrationPage";
import moviesPage from "./pages/moviesPage";
import serialsPage from "./pages/serialsPage";
import filmPage from "./pages/filmPage";
import newsPage from "./pages/newsPage";
import errorPage from "./pages/errorPage";

initializeApp(firebaseConfig);
export const auth = getAuth();

onAuthStateChanged(auth, (user) => {
  const arr = window.location.pathname.split("/");
  switch (window.location.pathname) {
    case "/":
      homePage(auth);
      break;
    case "/login":
      loginPage(auth);
      break;
    case "/registration":
      registrationPage(auth);
      break;
    case "/movies":
      moviesPage(auth);
      break;
    case "/serials":
      serialsPage(auth);
      break;
    case `/movies/${arr[2]}`:
      filmPage(auth, arr[2]);
      break;
    case "/news":
      newsPage(auth);
      break;
    default:
      errorPage();
  }
});
function validateUrl(user) {
  if (!user && window.location.pathname !== "/login") {
    if (!user && window.location.pathname !== "/regisration") {
      window.location.pathname = "/login";
      return;
    }
    return;
  }
}
