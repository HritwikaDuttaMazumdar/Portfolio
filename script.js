// Highlight active navigation link based on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;
  
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector('.nav__link[href*=' + sectionId + ']');
  
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLink.classList.add('active-link');
      } else {
        navLink.classList.remove('active-link');
      }
    });
  });
  