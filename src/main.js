import firebaseConfig from "./services/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import homePage from "./pages/homePage";
import moviesPage from "./pages/moviesPage";
import errorPage from "./pages/errorPage";
import loginPage from "./pages/auth/loginPage/loginPage";
initializeApp(firebaseConfig);
const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  validateUrl(user);
  switch (window.location.pathname) {
    case "/":
      homePage();
      break;
    case "/movies":
      moviesPage();
      break;
    case "/login":
      loginPage();
      break;
    default:
      errorPage();
  }
});

function validateUrl(user) {
  if (!user && window.location.pathname == "/") {
    window.location.pathname = "/login";
    return;
  }
}
