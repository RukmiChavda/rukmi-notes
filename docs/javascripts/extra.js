/* ============================================================
   Rukmi's Notes — extra.js
   Runs after Material for MkDocs bootstraps the page.
   ============================================================ */

document$.subscribe(function () {

  /* ── 1. Breadcrumb injector ──────────────────────────────── */
  injectBreadcrumb();

  /* ── 2. Reading-time estimate in page meta ───────────────── */
  injectReadingTime();

  /* ── 3. TOC progress indicator ──────────────────────────── */
  setupTocProgress();

});

/* -----------------------------------------------------------
   Breadcrumb
   Reads the active nav path and injects a breadcrumb bar
   just above the H1 of every page.
----------------------------------------------------------- */
function injectBreadcrumb() {
  const article = document.querySelector('.md-content__inner');
  const h1      = article && article.querySelector('h1');
  if (!h1) return;

  // Gather active nav links from the primary sidebar
  const active = Array.from(
    document.querySelectorAll('.md-nav--primary .md-nav__link--active')
  ).map(el => el.textContent.trim()).filter(Boolean);

  if (active.length < 2) return;   // nothing useful to show

  const crumbs = active.slice(0, -1);  // drop the current page (H1 handles it)

  const bar = document.createElement('nav');
  bar.setAttribute('aria-label', 'Breadcrumb');
  bar.style.cssText = [
    'display:flex', 'align-items:center', 'gap:6px',
    'font-size:0.75rem', 'color:var(--md-default-fg-color--light)',
    'margin-bottom:0.75rem', 'flex-wrap:wrap'
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
   Reading-time estimate
   Appends "· N min read" after the H1 subtitle / first para.
----------------------------------------------------------- */
function injectReadingTime() {
  const article = document.querySelector('.md-content__inner');
  if (!article) return;

  const text  = article.innerText || '';
  const words = text.trim().split(/\s+/).length;
  const mins  = Math.max(1, Math.round(words / 200));

  const h1 = article.querySelector('h1');
  if (!h1) return;

  // Only inject once
  if (article.querySelector('.rn-meta')) return;

  const meta = document.createElement('p');
  meta.className = 'rn-meta';
  meta.style.cssText = [
    'font-size:0.75rem',
    'color:var(--md-default-fg-color--light)',
    'margin-top:0.2rem',
    'margin-bottom:1.25rem'
  ].join(';');
  meta.textContent = mins + ' min read';

  h1.insertAdjacentElement('afterend', meta);
}

/* -----------------------------------------------------------
   TOC progress
   Shows how many headings the user has scrolled past.
----------------------------------------------------------- */
function setupTocProgress() {
  const tocNav = document.querySelector('.md-nav--secondary');
  if (!tocNav) return;

  const headings = Array.from(
    document.querySelectorAll('.md-content__inner h2, .md-content__inner h3')
  );
  if (headings.length < 2) return;

  // Build progress element
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
    const scrollY  = window.scrollY + window.innerHeight * 0.4;
    let   passed   = 0;
    headings.forEach(function (h) {
      if (h.getBoundingClientRect().top + window.scrollY < scrollY) passed++;
    });
    const pct = Math.round((passed / headings.length) * 100);
    barInner.style.width = pct + '%';
    num.textContent      = passed + ' / ' + headings.length + ' sections';
  }

  window.addEventListener('scroll', update, { passive: true });
  update();
}
