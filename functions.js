const navbar = document.querySelector('.navbar');
const openButton = document.querySelector('.hamb-icon');
const closeButton = document.querySelector('.close-btn');

openButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

// var mediaquery = window.matchMedia('(min-width: 769px');
// let actButton = document.querySelector('.act-btn');
// if(mediaquery.matches) {
//   actButton.addEventListener('click', () => {
//     console.log('clickeando' , mediaquery);
//   })
// }else{
//   actButton.addEventListener('click', () => {
//     console.log('chico' , mediaquery);
//   })
// }
