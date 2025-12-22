import navigate from "./index.js";

const content = document.getElementById('content');
const menuButton = document.getElementById('menu');

function menuSide() {
  const para1 = document.createElement('p');
  para1.textContent ='Until the expiration date of your pass, get ready for a weekly feast! Once a week, on the day of your choice, dive into an all-you-can-eat and all-you-can-drink extravaganza for a full three hours—unleash your appetite and make it a blast!';
  para1.id = 'para1Home';
  content.appendChild(para1);
} 


menuButton.addEventListener('click', () => {
  navigate("menu")});