// Продължи с твоя vanilla JavaScript код тук.


// async function getAllData() {

//   const 
// }

// const mobileToggle = document.querySelector('.mobile-nav-toggle');
// const iconHamburger = document.querySelector('.icon-hamburger');
// const iconClose = document.querySelector('.icon-close');
// mobileToggle.addEventListener('click', () => {

// })

const hamburger = document.querySelector('.icon-hamburger');
const navLinks = document.querySelector(".primary-navigation");
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle("hidden");
    hamburger.classList.toggle("open");
});