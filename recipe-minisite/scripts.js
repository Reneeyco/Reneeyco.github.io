// Toggle main menu (mobile)
const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Toggle submenus
document.querySelectorAll('.submenu__toggle').forEach(btn => {
  const submenu = btn.nextElementSibling;
  btn.addEventListener('click', () => {
    const nowOpen = submenu.classList.toggle('is-open');
    btn.setAttribute('aria-expanded', String(nowOpen));
  });

  // Close submenu with Escape key
  btn.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      submenu.classList.remove('is-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.focus();
    }
  });
});

// Auto-update footer year if <span id="year"> exists
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
