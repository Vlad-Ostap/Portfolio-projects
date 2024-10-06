const header = document.querySelector('.header');
const intro = document.querySelector('.intro');
const burgerMenu = document.querySelector('.burger');
const nav = document.querySelector('.nav');

const fixedHeader = () => {
    if (window.scrollY >= intro.offsetHeight) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
}

const openBurgerMenu = () => {
    nav.classList.toggle('active')
}

document.addEventListener('scroll', fixedHeader);
burgerMenu.addEventListener('click', openBurgerMenu);