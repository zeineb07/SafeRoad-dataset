/* ── Active nav link via IntersectionObserver ── */
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-list a');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const id = '#' + entry.target.id;
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === id);
            });
        }
    });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));

/* ── Hamburger menu ── */
const hamburger = document.querySelector('.hamburger');
const navbar    = document.querySelector('.navbar');

function openMenu() {
    navbar.classList.add('is-open');
    hamburger.setAttribute('aria-expanded', 'true');
}

function closeMenu() {
    navbar.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
}

hamburger.addEventListener('click', () => {
    navbar.classList.contains('is-open') ? closeMenu() : openMenu();
});

/* Close on nav link click */
navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

/* Close on outside click */
document.addEventListener('click', (e) => {
    if (navbar.classList.contains('is-open') &&
        !navbar.contains(e.target) &&
        !hamburger.contains(e.target)) {
        closeMenu();
    }
});

/* Close on Escape key */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navbar.classList.contains('is-open')) {
        closeMenu();
        hamburger.focus();
    }
});
