/* =============================================
   Derek Mendez Portfolio - main.js
   ============================================= */

//Nav background appears after scrolling down
const nav = document.querySelector('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

//Highlight the active nav link based on current page
const currentPage = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .mobile-menu a').forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.classList.add('active');
  }
});

//Hamburger menu toggle for mobile
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileMenu.classList.toggle('open');
    document.body.style.overflow = mobileMenu.classList.contains('open') ? 'hidden' : '';
  });

  //Close mobile menu when a link is clicked
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('open');
      mobileMenu.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

//Smooth scroll for anchor links like #projects
document.querySelectorAll('a[href*="#"]').forEach(link => {
  link.addEventListener('click', (e) => {
    const href = link.getAttribute('href');
    const hashIndex = href.indexOf('#');
    if (hashIndex === -1) return;

    const hash = href.slice(hashIndex);
    const target = document.querySelector(hash);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

//Scroll-triggered fade-in for .reveal elements and project rows
const reveals = document.querySelectorAll('.reveal, .project-row');
if (reveals.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  reveals.forEach(el => observer.observe(el));
}

//Contact form validation and submission
const form = document.getElementById('contact-form');
if (form) {
  const nameInput    = document.getElementById('name');
  const emailInput   = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const successMsg   = document.getElementById('form-success');

  function setError(input, errorId, show) {
    const errEl = document.getElementById(errorId);
    if (show) {
      input.classList.add('error');
      errEl.classList.add('show');
    } else {
      input.classList.remove('error');
      errEl.classList.remove('show');
    }
  }

  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  //Clear error state as user types
  [nameInput, emailInput, messageInput].forEach(input => {
    input.addEventListener('input', () => {
      input.classList.remove('error');
      const errEl = document.getElementById(input.id + '-error');
      if (errEl) errEl.classList.remove('show');
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;

    if (!nameInput.value.trim()) {
      setError(nameInput, 'name-error', true);
      valid = false;
    }

    if (!validateEmail(emailInput.value.trim())) {
      setError(emailInput, 'email-error', true);
      valid = false;
    }

    if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
      setError(messageInput, 'message-error', true);
      valid = false;
    }

    if (valid) {
      form.style.display = 'none';
      successMsg.classList.add('show');
    }
  });
}
