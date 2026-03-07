export const initSwiper = (selector, prevButton, nextButton) => {
    if (typeof Swiper === 'undefined') {
        console.error('Swiper не загружен!');
        return null;
    }
    
    if (!document.querySelector(selector)) {
        console.log(`Слайдер ${selector} не найден`);
        return null;
    }
    
    return new Swiper(selector, {
        slidesPerView: 1,
        spaceBetween: 15,
        slidesPerGroup: 1,
        loop: false,
        navigation: {
            prevEl: prevButton,
            nextEl: nextButton,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 15,
            },
            568: {
                slidesPerView: 2,
                spaceBetween: 20,
            },
            1200: {
                slidesPerView: 3,
                spaceBetween: 25,
            },
        },
    });
};

export const initAllSliders = () => {
    initSwiper(
        '.announcement__swiper', 
        '.announcement__slider-button--prev', 
        '.announcement__slider-button--next'
    );
    
    initSwiper(
        '.vacancies__swiper', 
        '.vacancies__slider-button--prev', 
        '.vacancies__slider-button--next'
    );
};