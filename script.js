// ...existing code...
document.addEventListener('DOMContentLoaded', () => {
    // Menu Toggle
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Close menu when clicking on a link inside the nav
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    } else {
        // Fallback: attach to any .nav-links a if markup differs
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                const nb = document.getElementById('navLinks');
                if (nb) nb.classList.remove('active');
            });
        });
    }

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    if (navbar) {
        const onScroll = () => {
            if (window.scrollY > 100) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        };
        onScroll();
        window.addEventListener('scroll', onScroll);
    }

    // Smooth scrolling for hash links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (!target) return;
            e.preventDefault();
            // Use smooth scroll; offset handling (fixed header) can be added if needed
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = (document.getElementById('name') || {}).value || '';
            const phone = (document.getElementById('phone') || {}).value || '';
            const email = (document.getElementById('email') || {}).value || '';
            const message = (document.getElementById('message') || {}).value || '';

            alert(`Merci ${name} !\n\nVotre message a été bien reçu. Nous vous contacterons très bientôt au ${phone}.\n\nÀ très bientôt !`);

            contactForm.reset();
        });
    }
});
// ...existing code...