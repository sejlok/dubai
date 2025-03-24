// JavaScript for Mobile Navigation Toggle
const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

mobileMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth Scrolling for In-Page Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Close mobile nav after clicking (if open)
    if(navLinks.classList.contains('active')){
      navLinks.classList.remove('active');
    }
    
    // Smooth scroll to the target element
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});
