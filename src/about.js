import navigate from "./index.js";

const content = document.getElementById('content');
const aboutButton = document.getElementById('about');

function aboutSide() {
  const btn1 = document.createElement('button');
  btn1.textContent = 'Buy now!';
  btn1.id = 'btn1Home';
  content.appendChild(btn1);
}

aboutButton.addEventListener('click',() => {
  navigate("about");
});

export default aboutSide;