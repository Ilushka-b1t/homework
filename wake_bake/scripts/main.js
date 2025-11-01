function burgerBlock(event){
    const burgerIcon = event.target.closest('.burger-icon');
    const navLinksInBurger = event.target.closest('.nav__link');
    const body = document.querySelector('.body')

    if (!burgerIcon && !navLinksInBurger) return;

    if (document.documentElement.clientWidth > 1060) return;
    

    if (!body.classList.contains('body--opened-menu')){
        body.classList.add('body--opened-menu');
    }
    else{
        body.classList.remove('body--opened-menu');
    }

}


document.addEventListener('click', burgerBlock);