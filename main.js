document.addEventListener('DOMContentLoaded', () => {
 
  // DAYS SINCE LEAK COUNTER
  const counterEl = document.getElementById('days-counter');
  if (counterEl) {
    const diff = Math.floor((new Date() - new Date('2013-06-05')) / 86400000);
    let count = 0;
    const step = Math.ceil(diff / 80);
    const interval = setInterval(() => {
      count = Math.min(count + step, diff);
      counterEl.textContent = count.toLocaleString();
      if (count >= diff) clearInterval(interval);
    }, 16);
  }
 
  // REDACTED TEXT REVEAL
  document.querySelectorAll('.redacted').forEach(el => {
    el.addEventListener('click', () => el.classList.toggle('revealed'));
  });
 
  // THEME TOGGLE
  const themeBtn = document.getElementById('theme-toggle');
  if (themeBtn) {
    let isDark = true;
    themeBtn.addEventListener('click', () => {
      isDark = !isDark;
      document.body.classList.toggle('light-mode', !isDark);
      themeBtn.textContent = isDark ? '☀ DECLASSIFIED VIEW' : '⬛ CLASSIFIED VIEW';
    });
  }
 
  // BACK TO TOP
  const topBtn = document.getElementById('back-to-top');
  if (topBtn) {
    window.addEventListener('scroll', () => {
      topBtn.classList.toggle('visible', window.scrollY > 400);
    });
    topBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
 
});