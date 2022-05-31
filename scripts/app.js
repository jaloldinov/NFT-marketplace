const menu = document.querySelector('.menu-container');
const menuButton = document.querySelector('.menu-btn');

menuButton.addEventListener('click', () => {
    menu.classList.toggle('menu-open');
})