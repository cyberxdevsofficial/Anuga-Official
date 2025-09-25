// Smooth scroll for nav links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
});

// Toggle menu on mobile
const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('show');
});

// WhatsApp form submission
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent actual form submission
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const phone = "+94710695082"; // Your WhatsApp number
    const text = `Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const url = `https://wa.me/${phone}?text=${text}`;

    window.open(url, '_blank'); // Open WhatsApp with prefilled message
});
