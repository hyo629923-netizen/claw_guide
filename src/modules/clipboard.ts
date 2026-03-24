export function initClipboard() {
  // Move specific components into page header addon if needed
  const addon = document.getElementById('page-header-addon');
  const contentArea = document.getElementById('content-area');
  const introBtn = contentArea?.querySelector('#copy-intro-btn');
  if (addon) {
    addon.innerHTML = '';
    if (introBtn) addon.appendChild(introBtn);
  }

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
  const introText = document.getElementById('intro-text') as HTMLElement | null;
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
