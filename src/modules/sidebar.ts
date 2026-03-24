export function initSidebar() {
  // Sidebar Accordion Toggle
  document.querySelectorAll('.group-header').forEach(header => {
    header.addEventListener('click', () => {
      const group = header.parentElement;
      if (!group) return;

      if (group.classList.contains('collapsed')) {
        document.querySelectorAll('.sidebar-group').forEach(sg => sg.classList.add('collapsed'));
        group.classList.remove('collapsed');
        
        // Auto-trigger the first tab
        const firstTab = group.querySelector<HTMLAnchorElement>('.tab');
        if (firstTab) firstTab.click();
      } else {
        group.classList.add('collapsed');
      }
    });
  });
}
