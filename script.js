
const burgerMenu = document.getElementById('burgerMenu');
const mainNav = document.getElementById('mainNav');

// Burger Menu
if (burgerMenu && mainNav) {
    burgerMenu.addEventListener('click', () => {
        burgerMenu.classList.toggle('active');
        mainNav.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = mainNav.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            burgerMenu.classList.remove('active');
            mainNav.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!burgerMenu.contains(e.target) && !mainNav.contains(e.target)) {
            burgerMenu.classList.remove('active');
            mainNav.classList.remove('active');
        }
    });
}
