export const initModal = () => {
    const buttons_opened = document.querySelectorAll('.button-opened'); 
    const modal = document.querySelector('.modal');
    const body = document.querySelector('.page');

    const openModal = () => { 
        modal.classList.add('modal-open');
        body.classList.add('page-modal--open');
    };

    const closeModal = () => { 
        modal.classList.remove('modal-open');
        body.classList.remove('page-modal--open');
    };

    buttons_opened.forEach(button => {
        button.addEventListener("click", openModal);
    });

    modal.addEventListener("click", event => {
        if (event.target.closest('.modal__cross')) {
            closeModal();
        }
    });

    document.addEventListener("keydown", event => {
        if (event.key === "Escape" && modal.classList.contains('modal-open')) {
            closeModal();
        }
    });
};