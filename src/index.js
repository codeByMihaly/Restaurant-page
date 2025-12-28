import homeSide from "./home.js";
import menuSide from "./menu.js";
import aboutSide from "./about.js";
import "./styles.css";
import "./template.html";

export default function navigate(page) {
    content.innerHTML = "";
  if (page === "home") {
    homeSide();
  } else if (page === "menu") {
    menuSide();
  } else if (page === "about") {
    aboutSide();
  }
}