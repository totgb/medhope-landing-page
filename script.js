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
});


// Theme toggle logic
function setTheme(isDark) {
  document.body.classList.toggle('dark-theme', isDark);
  document.getElementById('themeIconTop').textContent = isDark ? '☀️' : '🌙';
  document.getElementById('themeIconBottom').textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('medhope-theme', isDark ? 'dark' : 'light');
}

function toggleTheme() {
  const isDark = !document.body.classList.contains('dark-theme');
  setTheme(isDark);
}

document.addEventListener('DOMContentLoaded', () => {
  // ...existing code...

  // Theme toggle event listeners
  document.getElementById('themeToggleTop').addEventListener('click', toggleTheme);
  document.getElementById('themeToggleBottom').addEventListener('click', toggleTheme);

  // Load theme from localStorage
  const savedTheme = localStorage.getItem('medhope-theme');
  if (savedTheme === 'dark') setTheme(true);
  else setTheme(false);
});