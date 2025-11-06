const btn = document.getElementById('darkModeBtn');
const BODY_CLASS = 'darkMode';
const STORAGE_KEY = 'prefersDarkMode';

// Restore prior choice (optional)
try {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'true') {
    document.body.classList.add(BODY_CLASS);
    btn.setAttribute('aria-pressed', 'true');
    btn.textContent = 'Light Mode';
  }
} catch { /* ignore storage issues */ }

// Toggle on click
btn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle(BODY_CLASS);
  btn.setAttribute('aria-pressed', String(isDark));
  btn.textContent = isDark ? 'Light Mode' : 'Dark Mode';
  try { localStorage.setItem(STORAGE_KEY, String(isDark)); } catch {}
});
