export function initUI() {
  // To Top Button
  const toTopBtn = document.getElementById('to-top-btn') as HTMLButtonElement | null;
  const mainContainer = document.querySelector('.main-content') as HTMLElement | null;

  function updateToTop() {
    if (!toTopBtn) return;
    const scrollValue = (window.innerWidth > 860) ? (mainContainer?.scrollTop || 0) : window.scrollY;
    toTopBtn.style.display = scrollValue > 400 ? 'flex' : 'none';
  }

  if (mainContainer) mainContainer.addEventListener('scroll', updateToTop);
  window.addEventListener('scroll', updateToTop);

  toTopBtn?.addEventListener('click', () => {
    const options: ScrollToOptions = { top: 0, behavior: 'smooth' };
    if (window.innerWidth > 860) {
      mainContainer?.scrollTo(options);
    } else {
      window.scrollTo(options);
    }
  });

  // PWA Service Worker
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker.register('./sw.js')
        .then(() => console.log('PWA Registered!'))
        .catch(err => console.error('PWA Registration failed: ', err));
    });
  }
}
