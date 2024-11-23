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

document.addEventListener('DOMContentLoaded', () => {
    const gridItems = document.querySelectorAll('.grid-item');
    const isMobile = window.matchMedia('(max-width: 480px)').matches;

    gridItems.forEach(item => {
        // Check for mobile view
        if (isMobile) {
            // Remove links from being clickable
            const links = item.querySelectorAll('a');
            links.forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                });
            });

            // Add tap-to-flip functionality
            item.addEventListener('click', () => {
                // Toggle the 'flipped' class on tap
                item.classList.toggle('flipped');
            });
        }
    });
});