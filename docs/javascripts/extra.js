/* ============================================================
   Rukmi's Notes — extra.js
   MkDocs Material 9.x
   ============================================================ */

document$.subscribe(function () {
  injectBreadcrumb();
  injectReadingTime();
  setupTocProgress();
  setupResizableSidebars();
});

/* -----------------------------------------------------------
   Breadcrumb
----------------------------------------------------------- */
function injectBreadcrumb() {
  const article = document.querySelector('.md-content__inner');
  const h1      = article && article.querySelector('h1');
  if (!h1) return;

  const active = Array.from(
    document.querySelectorAll('.md-nav--primary .md-nav__link--active')
  ).map(el => el.textContent.trim()).filter(Boolean);

  if (active.length < 2) return;

  const crumbs = active.slice(0, -1);

  const bar = document.createElement('nav');
  bar.setAttribute('aria-label', 'Breadcrumb');
  bar.style.cssText = [
    'display:flex','align-items:center','gap:6px',
    'font-size:0.75rem','color:var(--md-default-fg-color--light)',
    'margin-bottom:0.75rem','flex-wrap:wrap'
  ].join(';');

  crumbs.forEach(function (text, i) {
    const span = document.createElement('span');
    span.textContent = text;
    bar.appendChild(span);
    if (i < crumbs.length - 1) {
      const sep = document.createElement('span');
      sep.textContent = '›';
      sep.setAttribute('aria-hidden', 'true');
      sep.style.opacity = '0.5';
      bar.appendChild(sep);
    }
  });

  h1.parentNode.insertBefore(bar, h1);
}

/* -----------------------------------------------------------
   Reading time
----------------------------------------------------------- */
function injectReadingTime() {
  const article = document.querySelector('.md-content__inner');
  if (!article) return;
  const words = (article.innerText || '').trim().split(/\s+/).length;
  const mins  = Math.max(1, Math.round(words / 200));
  const h1    = article.querySelector('h1');
  if (!h1 || article.querySelector('.rn-meta')) return;
  const meta = document.createElement('p');
  meta.className = 'rn-meta';
  meta.style.cssText = [
    'font-size:0.75rem',
    'color:var(--md-default-fg-color--light)',
    'margin-top:0.2rem','margin-bottom:1.25rem'
  ].join(';');
  meta.textContent = mins + ' min read';
  h1.insertAdjacentElement('afterend', meta);
}

/* -----------------------------------------------------------
   TOC progress bar
----------------------------------------------------------- */
function setupTocProgress() {
  const tocNav  = document.querySelector('.md-nav--secondary');
  if (!tocNav) return;
  const headings = Array.from(
    document.querySelectorAll('.md-content__inner h2, .md-content__inner h3')
  );
  if (headings.length < 2) return;

  const wrap = document.createElement('div');
  wrap.style.cssText = [
    'padding:1rem 0.8rem 0',
    'border-top:1px solid var(--md-default-fg-color--lightest)',
    'margin-top:1rem'
  ].join(';');

  const label = document.createElement('p');
  label.style.cssText = 'font-size:0.68rem;color:var(--md-default-fg-color--light);margin-bottom:6px;text-transform:uppercase;letter-spacing:0.08em;';
  label.textContent = 'Page progress';

  const barOuter = document.createElement('div');
  barOuter.style.cssText = 'height:3px;background:var(--md-default-fg-color--lightest);border-radius:2px;overflow:hidden;';

  const barInner = document.createElement('div');
  barInner.style.cssText = 'height:100%;width:0%;background:var(--md-accent-fg-color);border-radius:2px;transition:width 0.2s;';

  const num = document.createElement('p');
  num.style.cssText = 'font-size:0.68rem;color:var(--md-default-fg-color--light);margin-top:5px;';

  barOuter.appendChild(barInner);
  wrap.appendChild(label);
  wrap.appendChild(barOuter);
  wrap.appendChild(num);
  tocNav.appendChild(wrap);

  function update() {
    const scrollY = window.scrollY + window.innerHeight * 0.4;
    let passed = 0;
    headings.forEach(function (h) {
      if (h.getBoundingClientRect().top + window.scrollY < scrollY) passed++;
    });
    const pct = Math.round((passed / headings.length) * 100);
    barInner.style.width = pct + '%';
    num.textContent = passed + ' / ' + headings.length + ' sections';
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* -----------------------------------------------------------
   Resizable Sidebars — drag handle on both sidebars
   Persists width in localStorage per sidebar.
----------------------------------------------------------- */
function setupResizableSidebars() {
  const STORE_LEFT  = 'rn-sidebar-left-width';
  const STORE_RIGHT = 'rn-sidebar-right-width';

  const leftSidebar  = document.querySelector('.md-sidebar--primary');
  const rightSidebar = document.querySelector('.md-sidebar--secondary');

  // Restore saved widths
  const savedLeft  = localStorage.getItem(STORE_LEFT);
  const savedRight = localStorage.getItem(STORE_RIGHT);

  if (savedLeft  && leftSidebar)  applySidebarWidth('left',  parseInt(savedLeft,  10));
  if (savedRight && rightSidebar) applySidebarWidth('right', parseInt(savedRight, 10));

  // Inject drag handles
  if (leftSidebar)  addHandle(leftSidebar,  'left',  STORE_LEFT);
  if (rightSidebar) addHandle(rightSidebar, 'right', STORE_RIGHT);
}

function applySidebarWidth(side, px) {
  const clamped = Math.min(Math.max(px, 160), 520);
  document.documentElement.style.setProperty(
    side === 'left' ? '--sidebar-left-width' : '--sidebar-right-width',
    clamped + 'px'
  );
}

function addHandle(sidebar, side, storageKey) {
  const handle = document.createElement('div');
  handle.className = 'rn-resize-handle rn-resize-handle--' + side;
  handle.setAttribute('title', 'Drag to resize');
  handle.setAttribute('role', 'separator');
  handle.setAttribute('aria-orientation', 'vertical');
  sidebar.appendChild(handle);

  let startX   = 0;
  let startW   = 0;
  let dragging = false;

  handle.addEventListener('mousedown', function (e) {
    e.preventDefault();
    dragging = true;
    startX   = e.clientX;
    startW   = sidebar.getBoundingClientRect().width;
    handle.classList.add('dragging');
    document.body.style.cursor    = 'col-resize';
    document.body.style.userSelect = 'none';
  });

  document.addEventListener('mousemove', function (e) {
    if (!dragging) return;
    const delta = side === 'left'
      ? e.clientX - startX
      : startX - e.clientX;
    const newW = Math.min(Math.max(startW + delta, 160), 520);
    applySidebarWidth(side, newW);
  });

  document.addEventListener('mouseup', function () {
    if (!dragging) return;
    dragging = false;
    handle.classList.remove('dragging');
    document.body.style.cursor     = '';
    document.body.style.userSelect = '';
    // Persist
    const current = side === 'left'
      ? getComputedStyle(document.documentElement)
          .getPropertyValue('--sidebar-left-width')
      : getComputedStyle(document.documentElement)
          .getPropertyValue('--sidebar-right-width');
    localStorage.setItem(storageKey, parseInt(current, 10));
  });

  // Double-click to reset to default
  handle.addEventListener('dblclick', function () {
    const defaultW = side === 'left' ? 280 : 240;
    applySidebarWidth(side, defaultW);
    localStorage.removeItem(storageKey);
  });
}