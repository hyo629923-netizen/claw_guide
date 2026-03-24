import './style.css';
import { initTheme } from './modules/theme.js';
import { initSidebar } from './modules/sidebar.js';
import { initTabs } from './modules/tabs.js';
import { initUI } from './modules/ui.js';

// Initialize all modules
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initSidebar();
  initTabs();
  initUI();
});
