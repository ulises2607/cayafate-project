const navbar = document.querySelector('.navbar');
const openButton = document.querySelector('.hamb-icon');
const closeButton = document.querySelector('.close-btn');

openButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
  navbar.classList.toggle('active');
});
