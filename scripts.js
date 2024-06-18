const mobileMenu = document.querySelector('#mobile-menu');
const navbarMenu = document.querySelector('.navbar-menu');

mobileMenu.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
});
