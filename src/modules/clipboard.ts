import { introStyle1, introStyle2 } from './constants.js';

export function initClipboard() {
  const introTexts: Record<string, string> = {
    style1: introStyle1,
    style2: introStyle2
  };

  // Move controls into page header addon
  const addon = document.getElementById('page-header-addon');
  const contentArea = document.getElementById('content-area');
  const lobsterControls = contentArea?.querySelector('#lobster-controls');
  if (addon) {
    addon.innerHTML = '';
    if (lobsterControls) addon.appendChild(lobsterControls);
  }

  // Handle Style Switcher Tabs
  const btnStyle1 = document.getElementById('btn-style1') as HTMLButtonElement | null;
  const btnStyle2 = document.getElementById('btn-style2') as HTMLButtonElement | null;
  const introText = document.getElementById('intro-text') as HTMLElement | null;

  function setStyle(styleKey: string) {
    if (!introText) return;
    const content = (introTexts as any)[styleKey] || introTexts['style1'];
    introText.innerText = content;



    // UI Feedback for buttons
    if (btnStyle1 && btnStyle2) {
      const activeStyle = "padding: 6px 14px; font-size: 13px; border-radius: 7px; border: none; background: rgba(255,138,61,0.15); color: var(--accent); cursor: pointer; transition: all 0.3s ease; font-weight: 600;";
      const inactiveStyle = "padding: 6px 14px; font-size: 13px; border-radius: 7px; border: none; background: transparent; color: var(--muted); cursor: pointer; transition: all 0.3s ease; font-weight: 500;";
      
      const isStyle1 = styleKey === 'style1';
      btnStyle1.style.cssText = isStyle1 ? activeStyle : inactiveStyle;
      btnStyle2.style.cssText = isStyle1 ? inactiveStyle : activeStyle;
    }
  }

  if (btnStyle1) btnStyle1.onclick = () => setStyle('style1');
  if (btnStyle2) btnStyle2.onclick = () => setStyle('style2');


  // Ensure current display matches Style 2 if the user already saw Style 2
  // Or just default to Style 1 (current default in HTML)


  // Copy to Clipboard logic for <code> tags
  document.querySelectorAll<HTMLElement>('code').forEach(code => {
    code.style.cursor = 'pointer';
    code.title = '點擊複製';
    code.onclick = () => {
      navigator.clipboard.writeText(code.innerText).then(() => {
        const originalText = code.innerText;
        code.innerText = '已複製！';
        const originalColor = code.style.color;
        code.style.color = '#10b981';
        setTimeout(() => {
          code.innerText = originalText;
          code.style.color = originalColor;
        }, 1000);
      });
    };
  });

  // Lobster tab copy button
  const copyIntroBtn = document.getElementById('copy-intro-btn') as HTMLButtonElement | null;
  if (copyIntroBtn && introText) {
    copyIntroBtn.onclick = () => {
      const textToCopy = introText.innerText;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const btnText = copyIntroBtn.querySelector('span');
        if (btnText) {
          const original = btnText.innerText;
          btnText.innerText = '已複製！';
          copyIntroBtn.style.background = 'rgba(16, 185, 129, 0.1)';
          copyIntroBtn.style.color = '#10b981';
          setTimeout(() => {
            btnText.innerText = original;
            copyIntroBtn.style.background = '';
            copyIntroBtn.style.color = '';
          }, 1500);
        }
      });
    };
  }
}
