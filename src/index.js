import homeSide from "./home.js";
import menuSide from "./menu.js";
import aboutSide from "./about.js";
import "./styles.css";
import "./template.html";

export default function navigate(page) {
    content.innerHTML = "";
  if (page === "home") {
    menuSide();
  } else if (page === "menu") {
    homeSide();
  } else if (page === "about") {
    aboutSide();
  }
}