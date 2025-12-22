const content = document.getElementById('content');
const homeButton = document.getElementById('home');
const menuButton = document.getElementById('menu');
const aboutButton = document.getElementById('about');

function homeSide() {
  const header1 = document.createElement('h1');
  header1.textContent = 'Welcome to our best restaurant!';
  header1.id = 'header1Home';
  content.appendChild(header1);

 

  const img1 = document.createElement('img');
  img1.src = 'kepek/kepek.jpg';
  img1.alt = 'A photo about the restaruant';
  img1.id = 'imgHome';
  content.appendChild(img1);

 

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

 

function menuSide() {
  const para1 = document.createElement('p');
  para1.textContent ='Until the expiration date of your pass, get ready for a weekly feast! Once a week, on the day of your choice, dive into an all-you-can-eat and all-you-can-drink extravaganza for a full three hours—unleash your appetite and make it a blast!';
  para1.id = 'para1Home';
  content.appendChild(para1);
}

 

function aboutSide() {
  const btn1 = document.createElement('button');
  btn1.textContent = 'Buy now!';
  btn1.id = 'btn1Home';
  content.appendChild(btn1);
}


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

homeButton.addEventListener('click', () => {
  navigate("home")});

menuButton.addEventListener('click', () => {
  navigate("menu")});

aboutButton.addEventListener('click',() => {
  navigate("about");
});

window.onload = () => {
  navigate("home");
}