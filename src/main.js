import firebaseConfig from "./services/firebaseConfig";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { navLinks } from "./vars";
import homePage from "./pages/homePage";
import moviesPage from "./pages/moviesPage";
import errorPage from "./pages/errorPage";
import loginPage from "./pages/auth/loginPage/loginPage";
import registerPage from "./pages/auth/registerPage/registerPage";
initializeApp(firebaseConfig);
import { profile } from "./vars";
export const auth = getAuth();
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
    case "/registration":
      registerPage();
      break;
    default:
      errorPage();
  }
});

function validateUrl(user) {
  if (!user && window.location.pathname != "/login") {
    if (!user && window.location.pathname != "/regisration") {
      window.location.pathname = "/login";
      return;
    }
  }
}
navLinks.addEventListener("click", (event) => {
  event.preventDefault();
  for (let i = 0; i < navLinks.children.length; i++) {
    navLinks.children[i].classList.remove("underline");
  }
  event.target.classList.add("underline");
});
