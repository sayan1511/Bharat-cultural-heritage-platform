// Function to add 'visible' class to sections as they come into view
function handleScroll() {
    const sections = document.querySelectorAll('.tour-section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 150) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
}

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initial call to handle scroll animation
handleScroll();

// Event listener for scroll
window.addEventListener('scroll', handleScroll);
