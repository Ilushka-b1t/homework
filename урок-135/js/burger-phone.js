export const initBurger = () => {
    const menuBurger = document.querySelector('.menu');
    const burgerCross = document.querySelector('.menu__cross');
    const burgerOpenButton = document.querySelector('.header__phone-mobile--image');

    const openBurger = () => {
        menuBurger.classList.add('menu--open');
    };

    const closeBurger = () => {
        menuBurger.classList.remove('menu--open');
    };


    if (burgerOpenButton) {
        burgerOpenButton.addEventListener('click', openBurger);
    }


    if (burgerCross) {
        burgerCross.addEventListener('click', closeBurger);
    }
}
