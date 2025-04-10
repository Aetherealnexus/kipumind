// ===== Typewriter Effect =====
const headerTagline = document.querySelector('.header-content p:first-of-type');
const taglineText = "Woven Intelligence, Unraveled Potential";
let index = 0;

function typeWriter() {
    if (index < taglineText.length) {
        headerTagline.textContent += taglineText.charAt(index);
        index++;
        setTimeout(typeWriter, 50);
    }
}

// Delay typing for smoother entrance
setTimeout(typeWriter, 600);


// ===== Scroll Reveal Animation =====
const revealSections = document.querySelectorAll('section');

const revealOnScroll = () => {
    const triggerPoint = window.innerHeight * 0.85;
    revealSections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < triggerPoint) {
            section.classList.add('revealed');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


// ===== Icon Pulse Hover Effect =====
const icons = document.querySelectorAll('i');

icons.forEach(icon => {
    icon.addEventListener('mouseenter', () => {
        icon.classList.add('pulse');
    });
    icon.addEventListener('mouseleave', () => {
        icon.classList.remove('pulse');
    });
});
