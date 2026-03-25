import './style.css';
import { initSidebar } from './modules/sidebar.js';
import { initTabs } from './modules/tabs.js';
import { initUI } from './modules/ui.js';
import { initTheme } from './modules/theme.js';
import { initAuth, login } from './modules/auth.js';
import loginHtml from './tabs/login.html?raw';

function showLoginScreen(isUnauthorized = false) {
  // Ensure we don't duplicate
  if (document.getElementById('login-overlay')) return;

  // Insert login HTML
  document.body.insertAdjacentHTML('afterbegin', loginHtml);

  // Hide the main wrap
  const wrap = document.querySelector('.wrap') as HTMLElement;
  if (wrap) wrap.style.display = 'none';

  // Attach login event
  const loginBtn = document.getElementById('google-login-btn');
  if (loginBtn) {
    loginBtn.addEventListener('click', () => {
      login();
    });
  }

  // Handle Unauthorized Message
  if (isUnauthorized) {
    const p = document.querySelector('#login-overlay p');
    if (p) {
      p.innerHTML = '<span style="color: #ff4d4d; font-weight: bold;">🚫 存取遭拒：您的 Email 不在授權名單內。</span><br>請更換帳號再試。';
    }
  }
}

function unlockApp() {
  const overlay = document.getElementById('login-overlay');
  if (overlay) overlay.remove();

  const wrap = document.querySelector('.wrap') as HTMLElement;
  if (wrap) {
    wrap.style.display = 'flex';
    wrap.style.opacity = '0';
    setTimeout(() => {
      wrap.style.transition = 'opacity 0.8s ease';
      wrap.style.opacity = '1';
    }, 50);
  }

  // Initialize App Modules
  initTheme();
  initSidebar();
  initTabs();
  initUI();
}

function initLanding() {
  const enterBtn = document.getElementById('enter-btn');
  const landingScreen = document.getElementById('landing-screen');
  
  if (enterBtn && landingScreen) {
    enterBtn.addEventListener('click', () => {
      landingScreen.classList.add('hidden');
      setTimeout(() => {
        unlockApp();
        landingScreen.remove(); // Clean up from DOM
      }, 1000); // Wait for transition
    });
  } else {
    unlockApp(); // Fallback if landing is missing
  }
}

// MAIN PROTECTION ENTRY - Commented out for development
// initAuth((user, isAuthorized) => {
//   if (user && isAuthorized) {
//     initLanding();
//   } else if (user && !isAuthorized) {
//     showLoginScreen(true);
//   } else {
//     showLoginScreen(false);
//   }
// });

initLanding(); // Start with landing for development

