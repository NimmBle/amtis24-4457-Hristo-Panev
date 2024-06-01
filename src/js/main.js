// Продължи с твоя vanilla JavaScript код тук.


async function getAllData() {
  const response = await fetch("http://localhost:4000/desserts");
  const desserts = await response.json();

  var allDesesrtNames = document.querySelectorAll('.dessert-name'); 
  var allShortDescriptions = document.querySelectorAll('.description--showcase');
  var allIngridiens = document.querySelectorAll('.ingridientsToChange');
  var allImagesShowcase = document.querySelectorAll('.sourceOfImageToChangeShowcase');
  var allImagesDetails = document.querySelectorAll('.sourceOfImageToChange');


  // console.log(allImages[0].srcset);
  for (let index = 0; index < allDesesrtNames.length; index++) {
    allDesesrtNames[index].innerHTML = desserts[index].name;
    allShortDescriptions[index].innerHTML = desserts[index].description_short;
    allIngridiens[index].innerHTML = desserts[index].ingredients_text;
    allImagesShowcase[index].srcset = allImagesShowcase[index].srcset + desserts[index].image;
    allImagesDetails[index].srcset = allImagesDetails[index].srcset + desserts[index].image;
  }

}
getAllData();


const hamburger = document.querySelector('.icon-hamburger');
const navLinks = document.querySelector(".primary-navigation");
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("Active");
    hamburger.classList.toggle("open");
});