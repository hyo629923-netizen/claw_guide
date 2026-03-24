import { tabContents, tabTitles } from './constants.js';
import { initClipboard } from './clipboard.js';

export function initTabs() {
  const contentArea = document.getElementById('content-area');

  document.querySelectorAll<HTMLAnchorElement>('.tabs .tab').forEach(tab => {
    tab.addEventListener('click', e => {
      e.preventDefault();
      const target = tab.getAttribute('data-target');
      if (!target || !contentArea) return;

      // Update active tab UI
      document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      // Load content
      const html = tabContents[target] || '<div>內容正在建設中...</div>';
      contentArea.innerHTML = html;
      
      // Smooth transition
      contentArea.style.opacity = '0';
      setTimeout(() => {
        contentArea.style.opacity = '1';
      }, 50);

      // Init hooks for loaded content
      initClipboard();

      // Close accordions on mobile
      if (window.innerWidth <= 860) {
        document.querySelectorAll('.sidebar-group').forEach(sg => sg.classList.add('collapsed'));
      }

      // Scroll top
      const mainContentArea = document.querySelector('.main-content');
      if (window.innerWidth > 860) {
        if (mainContentArea) mainContentArea.scrollTop = 0;
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      // Update Title & Visibility
      const pageTitle = document.getElementById('page-title');
      const pageHeader = document.querySelector('.page-header') as HTMLElement | null;
      if (pageTitle) {
        pageTitle.innerText = tabTitles[target] ?? '設定';
      }
      if (pageHeader) {
        pageHeader.style.display = target === 'tab-welcome' ? 'none' : 'flex';
      }
    });
  });

  // Initial load
  if (contentArea) {
    contentArea.innerHTML = tabContents['tab-welcome'] || '';
    const pageHeader = document.querySelector('.page-header') as HTMLElement | null;
    if (pageHeader) pageHeader.style.display = 'none';
    initClipboard();
  }
}
