export const initReturnButton = () => {
    const returnButton = document.querySelector('.return');
    
    const checkScrollPosition = () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollY = window.scrollY;
        
        const maxScroll = documentHeight - windowHeight;

        if (maxScroll <= 0) return;
        
        const scrollPercent = (scrollY / maxScroll) * 100;
        
        if (scrollPercent > 50) {
            returnButton.classList.add('show');
        } else {
            returnButton.classList.remove('show');
        }
    };

    window.addEventListener('scroll', checkScrollPosition);
    document.addEventListener('DOMContentLoaded', checkScrollPosition);
};