export function initTheme() {
  const themeBtn = document.getElementById('theme-btn') as HTMLButtonElement | null;
  const sunIcon = themeBtn?.querySelector('.sun') as SVGElement | null;
  const moonIcon = themeBtn?.querySelector('.moon') as SVGElement | null;

  function setTheme(isLight: boolean) {
    if (isLight) {
      document.documentElement.classList.add('light');
      if (sunIcon) sunIcon.style.display = 'block';
      if (moonIcon) moonIcon.style.display = 'none';
    } else {
      document.documentElement.classList.remove('light');
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'block';
    }
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  }

  themeBtn?.addEventListener('click', () => {
    const isLight = !document.documentElement.classList.contains('light');
    setTheme(isLight);
  });

  // Init theme (Default to Dark)
  const savedTheme = localStorage.getItem('theme');
  setTheme(savedTheme === 'light');
}
