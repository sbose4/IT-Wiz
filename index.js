// Mobile navigation
const menuButton = document.querySelector('.menu');
const navigation = document.querySelector('#navigation');

function closeMenu() {
  navigation.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}

menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation.classList.contains('open')) {
    closeMenu();
    menuButton.focus();
  }
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('header')) {
    closeMenu();
  }
});

window.matchMedia('(min-width: 741px)').addEventListener('change', closeMenu);

// Carry the service selection over from the Services page.
const contactForm = document.querySelector('#contactForm');
const serviceSelect = document.querySelector('#service');
const requestedService = new URLSearchParams(window.location.search).get('service');

if (serviceSelect) {
  const hasMatchingService = [...serviceSelect.options].some(
    (option) => option.value === requestedService
  );

  if (hasMatchingService) {
    serviceSelect.value = requestedService;
  }
}

// Messages are sent by the visitor's email app, not by the website.
contactForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!contactForm.reportValidity()) {
    return;
  }

  const formData = new FormData(contactForm);
  const subject = 'IT-Wiz consultation: ' + formData.get('service');
  const message = [
    `Name: ${formData.get('name')}`,
    `Email: ${formData.get('email')}`,
    `Company: ${formData.get('company') || 'Not provided'}`,
    `Service: ${formData.get('service')}`,
    '',
    formData.get('message'),
  ].join('\n');

  window.location.href =
    `mailto:info@itwizservices.com?subject=${encodeURIComponent(subject)}` +
    `&body=${encodeURIComponent(message)}`;

  document.querySelector('#formMsg').textContent =
    'Your email app has been requested. Review and send the draft there. ' +
    'If it does not open, email info@itwizservices.com directly. ' +
    'Your message has not been sent by this website.';
});

const newsletterForm = document.querySelector('#newsletterForm');

newsletterForm?.addEventListener('submit', (event) => {
  event.preventDefault();

  if (!newsletterForm.reportValidity()) {
    return;
  }

  const email = new FormData(newsletterForm).get('email');
  const message = 'Please subscribe this email address to IT-Wiz updates: ' + email;

  window.location.href =
    'mailto:info@itwizservices.com?subject=Newsletter%20subscription%20request' +
    `&body=${encodeURIComponent(message)}`;

  document.querySelector('#newsMsg').textContent =
    'Send the request in your email app to ask to subscribe. ' +
    'You are not subscribed yet.';
});
