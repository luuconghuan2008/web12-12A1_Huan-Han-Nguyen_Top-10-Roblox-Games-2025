document.addEventListener("DOMContentLoaded", () => {
      const elements = document.querySelectorAll(".game, .section, .contact, .hero-text");

      const revealOnScroll = () => {
        const windowHeight = window.innerHeight;
        elements.forEach(el => {
          const rect = el.getBoundingClientRect();
          if (rect.top < windowHeight - 100) {
            el.classList.add("visible");
            el.classList.remove("hidden");
          } else {
            el.classList.add("hidden");
            el.classList.remove("visible");
          }
        });
      };

      // Run once and on scroll
      revealOnScroll();
      window.addEventListener("scroll", revealOnScroll);


    });

document.querySelectorAll('.scroll-link').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});