import './style.css';

interface Titles {
  [key: string]: string;
}

const titles: Titles = {
  'tab-github': 'GitHub 設定',
  'tab-cloudflare': 'Cloudflare 設定',
  'tab-telegram': 'Telegram 設定',
  'tab-tool': 'Tool 設定'
};

// Theme Toggle
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
setTheme(savedTheme === 'light'); // If no saved theme, it will be false (Dark)

// Tab switching
document.querySelectorAll<HTMLAnchorElement>('.tabs .tab').forEach(tab => {
  tab.addEventListener('click', e => {
    e.preventDefault();
    const target = tab.getAttribute('data-target');
    if (!target) return;

    // Update active tab
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    // Show panel
    document.querySelectorAll<HTMLElement>('.tab-panel').forEach(p => p.style.display = 'none');
    const panel = document.getElementById(target);
    if (panel) panel.style.display = 'block';

    // Scroll to top of content
    const mainContent = document.querySelector('.main-content');
    if (window.innerWidth > 860) {
      if (mainContent) mainContent.scrollTop = 0;
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Update UI Text
    const pageTitle = document.getElementById('page-title');
    const titleText = target ? (titles[target as keyof typeof titles]) : null;
    if (pageTitle && titleText) {
      pageTitle.innerText = titleText;
    }
  });
});

// To Top Button
const toTopBtn = document.getElementById('to-top-btn') as HTMLButtonElement | null;
const mainContent = document.querySelector('.main-content') as HTMLElement | null;

function updateToTop() {
  if (!toTopBtn) return;
  const scrollValue = (window.innerWidth > 860) ? (mainContent?.scrollTop || 0) : window.scrollY;
  toTopBtn.style.display = scrollValue > 400 ? 'flex' : 'none';
}

if (mainContent) mainContent.addEventListener('scroll', updateToTop);
window.addEventListener('scroll', updateToTop);

toTopBtn?.addEventListener('click', () => {
  const options: ScrollToOptions = { top: 0, behavior: 'smooth' };
  if (window.innerWidth > 860) {
    mainContent?.scrollTo(options);
  } else {
    window.scrollTo(options);
  }
});

// Copy to Clipboard Suggestion
document.querySelectorAll<HTMLElement>('code').forEach(code => {
  code.style.cursor = 'pointer';
  code.title = '點擊複製';
  code.addEventListener('click', () => {
    navigator.clipboard.writeText(code.innerText).then(() => {
      const original = code.innerText;
      code.innerText = '已複製！';
      const originalColor = code.style.color;
      code.style.color = '#10b981';
      setTimeout(() => {
        code.innerText = original;
        code.style.color = originalColor;
      }, 1000);
    });
  });
});

// PWA Service Worker Registration
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log('PWA SW Registered!'))
      .catch(err => console.log('SW Registration failed: ', err));
  });
}
