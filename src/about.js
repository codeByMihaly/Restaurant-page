import imgMap from "./pictures/maps.jpg"
import navigate from "./index.js";

const content = document.getElementById('content');
const aboutButton = document.getElementById('about');

// This is the about side of the webpage

function aboutSide() {

  /* ------ This is the contact side ------- */
const contactData = {
    name: "My Best Restaurant",
    address: "1082, Budapest, Imagine This street 1.",
    phone: "+36 70 XXX 7465",
    email: "reservenow@mybestrestaurant.com",
    hours: "Monday-Friday: 08:00 - 22:00\nSaturday: 07:00 - 23:00\nSunday: 06:00 - 23:30"
  };

  /* ------ Restaurant Name ------- */
  const restaurantName = document.createElement("h1");
  restaurantName.textContent = contactData.name;
   /* ------ Contact para ------- */
  const contactHeader = document.createElement("h4");
  contactHeader.id = "about-contact-para"
  contactHeader.textContent = "Contact:"
   /* ------ Restaurant Address ------- */
  const restaurantAddress = document.createElement("p");
  restaurantAddress.textContent = `Address: ${contactData.address}`;
  /* ------ Restaurant phone number ------- */
  const restaurantPhone = document.createElement("p");
  restaurantPhone.textContent = `Phone number: ${contactData.phone}`;
  /* ------ Restaurant email address ------- */
  const restaurantEmail = document.createElement("p");
  restaurantEmail.textContent = `E-mail: ${contactData.email}`;
  /* ------ Restaurant opening hours ------- */
  const openingHours = document.createElement("p");
  openingHours.textContent = contactData.hours;
  openingHours.style.whiteSpace = "pre-line";

  /* ------ This is the map side ------- */

  /* ------ Restaurant find us para ------- */
  const findUs = document.createElement("p");
  findUs.id = "find-us-para"
  findUs.textContent = "Find us: "
  /* ------ Map about location  ------- */
  const locationImg = document.createElement("img");
  locationImg.src = imgMap;
  locationImg.alt = "A map about the location. Address: 1082, Budapest, Imagine This street 1.";
  locationImg.id = "location-id";

  /* ------ This is the Contact us button side ------- */

  const btn1About = document.createElement('button');
  btn1About.textContent = 'Contact us!';
  btn1About.id = 'btnContactUs';

  /* ------ Made group classes ------- */

  const allAboutContent = document.createElement("div");
  allAboutContent.classList.add("all-about-content");
  const gpsContent = document.createElement("div");
 // gpsContent.classList.add("about-content");
  const onlyContactData = document.createElement("div");
  onlyContactData.classList.add("about-contact");

  /* ------ Appended in group classes each other ------- */
  onlyContactData.append(contactHeader,restaurantAddress, restaurantPhone, restaurantEmail, openingHours);
  gpsContent.append(findUs, locationImg);

  allAboutContent.append(onlyContactData, gpsContent);

  content.append(restaurantName, allAboutContent, btn1About);
}

/* ------ About button function ------- */

aboutButton.addEventListener('click', () => {
  navigate("about");
});


export default aboutSide;