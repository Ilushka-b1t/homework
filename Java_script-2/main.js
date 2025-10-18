const button = document.querySelector('.btn');
const modal = document.querySelector('.block');
const body = document.querySelector('.body');


const openModel = () => {
    modal.classList.add('block--open');
    body.classList.add('body--fixed');
}


const closeModel = () => {
    modal.classList.remove('block--open');
    body.classList.remove('body--fixed');
}


button.addEventListener('click', openModel)


modal.addEventListener('click', event => {
    const target = event.target;
    if (target === modal || target.classList.contains('block__cross')) {
        closeModel();
    }
})

document.addEventListener('keydown', event => {
    if (event.code === 'Escape' && modal.classList.contains('block--open')) {
        closeModel();
    }
})