import { initBurger } from "./burger-phone.js";
import { initReturnButton } from "./scroll-header.js";         
import { initModal } from "./modal.js";
import { initAllSliders } from './slider.js';  

document.addEventListener('DOMContentLoaded', () => { 
    initReturnButton();
    initModal();
    initBurger();
    initAllSliders();
});