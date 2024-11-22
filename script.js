const backToTop = document.querySelector("#backTopBtn");
const mobButton = document.querySelector('.mobile');
const navList = document.querySelector('nav ul');

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector('header').style.backgroundColor = "var(--color-yellow)";
    } else {
        document.querySelector('header').style.backgroundColor = "transparent";
    }
}

const toggleMenu = () => {
    navList.classList.toggle('responsive');
}

mobButton.addEventListener('click', toggleMenu);

backToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

window.addEventListener('scroll', scrollFunction);