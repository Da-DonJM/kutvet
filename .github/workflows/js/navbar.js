// navbar.js

const navLinks = document.querySelectorAll('.navbar .nav-link');
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
  // Set active based on current page
  if (link.getAttribute('href') === currentPage) {
    link.classList.add('active');
  }

  // Update active on click
  link.addEventListener('click', function() {
    navLinks.forEach(l => l.classList.remove('active'));
    this.classList.add('active');
  });
});