import "./home.js";
import "./menu.js";
import "./about.js";
import "./styles.css";
import "./template.html";

function navigate(page) {
    content.innerHTML = "";
  if (page === "home") {
    homeSide();
  } else if (page === "menu") {
    menuSide();
  } else if (page === "about") {
    aboutSide();
  }
}

export default navigate;
