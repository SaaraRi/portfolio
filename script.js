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
    const isMobile = window.matchMedia('(max-width: 820px)').matches;

    gridItems.forEach(item => {
        if (isMobile) {
            if (item.id === 'item10') {
                const link = item.querySelector('a');
                if (link) {
                    link.addEventListener('click', (e) => {
                        e.stopPropagation();
                    });
                }
            } else {
                const links = item.querySelectorAll('a');
                links.forEach(link => {
                    link.addEventListener('click', (e) => {
                        e.preventDefault();
                    });
                });
                
                item.addEventListener('click', () => {
                    item.classList.toggle('flipped');
                });
            }
        }
    });
});

item.addEventListener('click', () => {
    if (!item.classList.contains('flipping')) {
        item.classList.add('flipping');
        item.classList.toggle('flipped');
        setTimeout(() => item.classList.remove('flipping'), 1000);
    }
});