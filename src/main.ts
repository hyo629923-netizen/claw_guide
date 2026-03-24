import './style.css';

interface Titles {
  [key: string]: string;
}

const titles: Titles = {
  'tab-github': '取得 GitHub ID、建立 Repo 與 PAT',
  'tab-cloudflare': '取得 Cloudflare Account ID 與 API Token',
  'tab-telegram': '建立 Telegram Bot 並取得 Chat ID',
  'tab-tool': '設定工具 API Key (Felo / Gemini)'
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

// Init theme
const savedTheme = localStorage.getItem('theme');
const prefersLight = window.matchMedia('(prefers-color-scheme: light)').matches;
setTheme(savedTheme === 'light' || (!savedTheme && prefersLight));

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
    if (pageTitle && target in titles) {
      pageTitle.innerText = titles[target as keyof typeof titles];
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
    navigator.serviceWorker.register('/sw.js')
      .then(() => console.log('PWA SW Registered!'))
      .catch(err => console.log('SW Registration failed: ', err));
  });
}
