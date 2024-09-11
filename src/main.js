import firebaseConfig from "./firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import homePage from "./pages/homePage";
import moviesPage from "./pages/moviesPage";
import errorPage from "./pages/errorPage";
import loginPage from "./pages/auth/loginPage/loginPage";
import registrationPage from "./pages/auth/registrationPage/registrationPage";
import filmPage from "./pages/filmPage";
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
    case `/movies/${arr[2]}`:
      filmPage(auth, arr[2]);
      break;
    default:
      errorPage();
  }
});
