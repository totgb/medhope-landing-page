// Fade-in animation on scroll
document.addEventListener('DOMContentLoaded', () => {
  const faders = document.querySelectorAll('.fade-in');
  const appearOptions = { threshold: 0.2 };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  // Simple contact form handler
  const form = document.getElementById('contactForm');
  const formMessage = document.getElementById('formMessage');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      formMessage.textContent = "Thank you for reaching out! We'll get back to you soon.";
      form.reset();
    });
  }

  // Smooth scroll for nav links
  document.querySelectorAll('a.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
      if (this.hash) {
        e.preventDefault();
        const target = document.querySelector(this.hash);
        if (target) {
          window.scrollTo({
            top: target.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
    });
  });

  // Form submission alert for Join Us section
  const joinForm = document.getElementById('contactForm');
  if (joinForm) {
    joinForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for reaching out! We will get back to you soon.');
      joinForm.reset();
    });
  }

  // Scrollspy highlight (Bootstrap handles this, but ensure nav-link active class)
  const mainNavbar = document.getElementById('mainNavbar');
  if (mainNavbar) {
    new bootstrap.ScrollSpy(document.body, {
      target: '#mainNavbar',
      offset: 80
    });
  }
});

// Theme toggle logic
function setTheme(isDark) {
  document.body.classList.toggle('dark-theme', isDark);
  const topIcon = document.getElementById('themeIconTop');
  const bottomIcon = document.getElementById('themeIconBottom');
  if (topIcon) topIcon.textContent = isDark ? '☀️' : '🌙';
  if (bottomIcon) bottomIcon.textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('medhope-theme', isDark ? 'dark' : 'light');
}

function toggleTheme() {
  const isDark = !document.body.classList.contains('dark-theme');
  setTheme(isDark);
}

// Restore theme on load
const savedTheme = localStorage.getItem('medhope-theme');
if (savedTheme === 'dark') setTheme(true);

// Top and bottom theme toggle buttons
window.addEventListener('DOMContentLoaded', () => {
  const themeToggleTop = document.getElementById('themeToggleTop');
  const themeToggleBottom = document.getElementById('themeToggleBottom');
  if (themeToggleTop) themeToggleTop.addEventListener('click', toggleTheme);
  if (themeToggleBottom) themeToggleBottom.addEventListener('click', toggleTheme);
});