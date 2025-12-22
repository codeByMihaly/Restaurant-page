import img1 from './pictures/restaurant.jpg';
import navigate from "./index.js";

const content = document.getElementById('content');
const homeButton = document.getElementById('home');

function homeSide() {
  const header1 = document.createElement('h1');
  header1.textContent = 'Welcome to our best restaurant!';
  header1.id = 'header1Home';
  content.appendChild(header1);

  const img1Home = document.createElement('img');
  img1Home.src = img1;
  img1Home.alt = 'A photo about the restaurant';
  img1Home.id = 'imgHome';
  content.appendChild(img1Home);

  const header3 = document.createElement('h3');
  header3.textContent = 'You can buy monthly/yearly pass here!';
  header3.id = 'header3Home';
  content.appendChild(header3);

  const para1 = document.createElement('p');
  para1.textContent ='Until the expiration date of your pass, get ready for a weekly feast! Once a week, on the day of your choice, dive into an all-you-can-eat and all-you-can-drink extravaganza for a full three hours—unleash your appetite and make it a blast!';
  para1.id = 'para1Home';
  content.appendChild(para1);
  const btn1 = document.createElement('button');
  btn1.textContent = 'Buy now!';
  btn1.id = 'btn1Home';
  content.appendChild(btn1);
};

homeButton.addEventListener('click', () => {
  navigate("home")});

window.onload = () => {
  navigate("home");
}

export default homeSide;