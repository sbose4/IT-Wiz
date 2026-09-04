// Mobile nav toggle
  const navToggle = document.getElementById('navToggle');
  const mobileMenu = document.getElementById('mobileMenu');
  navToggle.addEventListener('click', () => {
    const isHidden = mobileMenu.classList.toggle('hidden');
    navToggle.setAttribute('aria-expanded', String(!isHidden));
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    navToggle.setAttribute('aria-expanded', 'false');
  }));

  // Active link highlight on scroll
  const sections = document.querySelectorAll('main section, .hero');
  const navAnchors = document.querySelectorAll('.nav-links a, .mobile-menu a');
  const setActive = (id) => {
    navAnchors.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === '#' + id);
    });
  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) setActive(entry.target.id);
    });
  }, { rootMargin: '-45% 0px -50% 0px' });
  sections.forEach(s => s.id && observer.observe(s));

  // Contact form — replace FORM_ENDPOINT with your own Formspree (or similar) endpoint
  const FORM_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID';
  const contactForm = document.getElementById('contactForm');
  const formMsg = document.getElementById('formMsg');

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    formMsg.textContent = '';
    formMsg.className = 'form-msg';

    const data = new FormData(contactForm);
    if (!data.get('name') || !data.get('email') || !data.get('message')) {
      formMsg.textContent = 'Please fill in every field.';
      formMsg.classList.add('err');
      return;
    }

    const submitBtn = contactForm.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending…';

    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: data
      });
      if (res.ok) {
        formMsg.textContent = 'Thanks — we\u2019ll be in touch within one business day.';
        formMsg.classList.add('ok');
        contactForm.reset();
      } else {
        throw new Error('Request failed');
      }
    } catch (err) {
      formMsg.textContent = 'Something went wrong. Email us directly at info@itwizservices.com.';
      formMsg.classList.add('err');
    } finally {
      submitBtn.disabled = false;
      submitBtn.textContent = 'Send message';
    }
  });

  // Newsletter form (same pattern — wire to your own endpoint)
  const newsletterForm = document.getElementById('newsletterForm');
  const newsMsg = document.getElementById('newsMsg');
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    newsMsg.textContent = 'Subscribed — thanks for joining.';
    newsMsg.classList.add('ok');
    newsletterForm.reset();
  });
