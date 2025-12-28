import navigate from "./index.js";
import food1 from "./pictures/firstFood.jpg"
import food2 from "./pictures/secondFood.jpg"
import food3 from "./pictures/thirdFood.jpg"
import food4 from "./pictures/fourthFood.jpg"

const content = document.getElementById('content');
const menuButton = document.getElementById('menu');

function menuSide() {
  const firstDiv = document.createElement('div');
  firstDiv.classList.add("firstGroup")
  content.appendChild(firstDiv);

  let firstFoodName = document.createElement("h4");
  firstFoodName.textContent = "Grilled Salmon with Vegetables";
  firstFoodName.classList.add("foodName");
  let firstDetail = document.createElement("p");
  firstDetail.textContent = "A tender grilled salmon fillet served with fresh seasonal vegetables for a light, flavorful dish.";
  firstDetail.classList.add("foodDetails");
  let firstCost = document.createElement("p");
  firstCost.textContent = "Cost: 20$";
  firstCost.classList.add("costs")
  let firstImg = document.createElement("img");
  firstImg.src = food1;
  firstImg.alt = "A photo about a grilled salmon with vegetables."
  firstImg.classList.add("imgMenu")
  firstDiv.append(firstFoodName, firstDetail, firstCost, firstImg);

  let secondFoodName = document.createElement("h4");
  secondFoodName.textContent = "Avocado Breakfast Plate";
  secondFoodName.classList.add("foodName");
  let secondDetail = document.createElement("p");
  secondDetail.textContent = "A tender grilled salmon fillet served with fresh seasonal vegetables for a light, flavorful dish.";
  secondDetail.classList.add("foodDetails");
  let secondCost = document.createElement("p");
  secondCost.textContent = "Cost: 15$";
  secondCost.classList.add("costs")
  let secondImg = document.createElement("img");
  secondImg.src = food2;
  secondImg.alt = "A photo about an avocado breakfast plate."
  secondImg.classList.add("imgMenu")
  firstDiv.append(secondFoodName, secondDetail, secondCost, secondImg);

  let thirdFoodName = document.createElement("h4");
  thirdFoodName.textContent = "Savory Chicken with Roasted Vegetables";
  thirdFoodName.classList.add("foodName");
  let thirdDetail = document.createElement("p");
  thirdDetail.textContent = "Tender chicken simmered in a savory sauce, served with roasted peppers, onions, and fresh herbs. A vibrant, aromatic dish that blends warmth and depth with colorful presentation.";
  thirdDetail.classList.add("foodDetails");
  let thirdCost = document.createElement("p");
  thirdCost.textContent = "Cost: 17$";
  thirdCost.classList.add("costs")
  let thirdImg = document.createElement("img");
  thirdImg.src = food3;
  thirdImg.alt = "A photo about a savory chicken with roasted vegetables."
  thirdImg.classList.add("imgMenu")
  firstDiv.append(thirdFoodName, thirdDetail, thirdCost, thirdImg);

  let fourthFoodName = document.createElement("h4");
  fourthFoodName.textContent = "Grilled Steak with Rice and Vegetables";
  fourthFoodName.classList.add("foodName");
  let fourthDetail = document.createElement("p");
  fourthDetail.textContent = "Juicy grilled steak topped with herbs and almonds, served with molded white rice and sautéed vegetables in a rich brown sauce.";
  fourthDetail.classList.add("foodDetails");
  let fourthCost = document.createElement("p");
  fourthCost.textContent = "Cost: 18$";
  fourthCost.classList.add("costs")
  let fourthImg = document.createElement("img");
  fourthImg.src = food4;
  fourthImg.alt = "A photo about a grilled steak with rice and vegetables ."
  fourthImg.classList.add("imgMenu")
  firstDiv.append(fourthFoodName, fourthDetail, fourthCost, fourthImg);
} 

menuButton.addEventListener('click', () => {
  navigate("menu")});

  export default menuSide;