import { getAuth, signOut } from "firebase/auth";
export function exitProfileUser(auth) {}
signOut(auth)
  .then(() => {
    window.location.pathname = "/login";
  })
  .catch((error) => {});
