// Javascript file Ali site rev_1



const open = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");
const exit = document.querySelector(".close-nav");

open.addEventListener('click', () => {
    nav.classList.add('open-nav');
});

exit.addEventListener('click', () => {
    nav.classList.remove('open-nav');
});
