/**
 * ============================================================
 *  CyberpunkID — main.js
 *  File ini berisi logika website.
 *  JANGAN edit file ini untuk mengubah teks.
 *  Edit content.js untuk mengubah teks.
 * ============================================================
 */

// Bahasa default: Indonesia
let currentLang = localStorage.getItem('cpid-lang') || 'id';

// ── TERAPKAN BAHASA ───────────────────────────────────────────
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('cpid-lang', lang);
  document.documentElement.lang = lang;

  const isID = lang === 'id';
  const C = SITE; // dari content.js

  // Helper: set innerHTML ke semua elemen dengan data-i18n
  function set(key, val) {
    document.querySelectorAll('[data-i18n="' + key + '"]')
      .forEach(el => { el.innerHTML = val; });
  }

  // Logo
  const logos = document.querySelectorAll('.nav-logo-text');
  logos.forEach(el => {
    el.innerHTML = C.logo.prefix + '<span>_</span>' + C.logo.suffix;
  });

  // Navbar
  const nav = isID ? C.nav.id : C.nav.en;
  set('nav_home',  nav.home);
  set('nav_works', nav.works);
  set('nav_about', nav.about);

  // Home
  const home = isID ? C.home.id : C.home.en;
  set('home_eyebrow',   home.eyebrow);
  set('home_role',      home.role);
  set('home_desc',      home.desc);
  set('home_btn_works', home.btn_works);
  set('home_btn_about', home.btn_about);

  // Works
  const works = isID ? C.works.id : C.works.en;
  set('works_tag',    works.section_tag);
  set('works_title',  works.section_title);
  set('filter_all',   works.filter_all);
  set('filter_know',  works.filter_know);
  set('filter_tips',  works.filter_tips);
  set('filter_guide', works.filter_guide);

  // About
  const about = isID ? C.about.id : C.about.en;
  set('about_tag',      about.section_tag);
  set('about_title',    about.section_title);
  set('about_name',     about.name);
  set('about_role',     about.role);
  set('about_bio',      about.bio);
  set('skills_label',   about.skills_label);
  set('social_label',   about.social_label);
  set('contact_label',  about.contact_label);
  set('status_txt',     about.status);

  // Skill tags — render ulang dari array
  const skillsContainer = document.querySelector('.skills-tags');
  if (skillsContainer) {
    skillsContainer.innerHTML = about.skills
      .map(s => `<span class="skill-tag">${s}</span>`)
      .join('');
  }

  // Sosial media links — isi href dari content.js
  const social = C.social;
  document.querySelectorAll('[data-social="github"]').forEach(el => { el.href = social.github; });
  document.querySelectorAll('[data-social="instagram"]').forEach(el => { el.href = social.instagram; });
  document.querySelectorAll('[data-social="email"]').forEach(el => { el.href = 'mailto:' + social.email; });
  document.querySelectorAll('[data-social="reddit"]').forEach(el => { el.href = social.reddit; });
  document.querySelectorAll('.contact-email-text').forEach(el => { el.textContent = social.email; });

  // Render kartu artikel (works.html)
  const grid = document.getElementById('works-grid');
  if (grid) renderArticleCards(lang);

  // Update tombol toggle
  document.querySelectorAll('.lang-toggle span[data-lang]').forEach(s => {
    s.classList.toggle('lang-active', s.dataset.lang === lang);
  });
}

// ── RENDER KARTU ARTIKEL ──────────────────────────────────────
function renderArticleCards(lang) {
  const grid = document.getElementById('works-grid');
  if (!grid) return;
  const isID = lang === 'id';
  const W = isID ? SITE.works.id : SITE.works.en;
  grid.innerHTML = '';

  SITE.articles.forEach(art => {
    const t = isID ? art.id_text : art.en_text;
    const isActive  = art.active;
    const isFeatured = art.featured;
    const readLabel = isFeatured ? W.read_more : W.read;

    const card = document.createElement('div');
    card.className = 'work-card' + (isFeatured ? ' featured-card' : '');
    card.dataset.category = art.category;

    const readLink = isActive
      ? `<a href="${art.url}" class="card-read">${readLabel}</a>`
      : `<a href="${art.url}" class="card-read disabled">${W.read} <span style="font-size:9px">${W.coming_soon}</span></a>`;

    const featuredBadge = isFeatured
      ? `<div class="featured-badge">${isID ? 'Unggulan' : 'Featured'}</div>` : '';

    const featuredVisual = isFeatured ? `
      <div class="featured-visual">
        <svg width="180" height="120" viewBox="0 0 180 120">
          <polygon points="90,15 160,100 20,100" fill="none" stroke="#00f5ff" stroke-width="0.8" stroke-dasharray="4 3"/>
          <polygon points="90,35 140,95 40,95" fill="none" stroke="#8b5cf6" stroke-width="0.5"/>
          <circle cx="90" cy="62" r="12" fill="rgba(0,245,255,0.15)" stroke="#00f5ff" stroke-width="1"/>
          <line x1="90" y1="50" x2="90" y2="58" stroke="#00f5ff" stroke-width="2" stroke-linecap="round"/>
          <circle cx="90" cy="68" r="2" fill="#00f5ff"/>
          <circle cx="90" cy="15" r="3" fill="#00f5ff"/>
          <circle cx="160" cy="100" r="3" fill="#8b5cf6"/>
          <circle cx="20" cy="100" r="3" fill="#8b5cf6"/>
        </svg>
      </div>` : '';

    card.innerHTML = `
      <div class="card-corner"></div>
      ${featuredBadge}
      <div>
        <div class="card-category">▸ <span class="card-category-text">${t.cat}</span></div>
        <div class="card-title">${t.title}</div>
        <div class="card-excerpt">${t.excerpt}</div>
        <div class="card-meta">
          <span class="card-date">${t.date}</span>
          ${readLink}
        </div>
      </div>
      ${featuredVisual}
    `;
    grid.appendChild(card);
  });
}

// ── TOGGLE BAHASA ─────────────────────────────────────────────
function toggleLang() {
  applyLang(currentLang === 'id' ? 'en' : 'id');
}

// ── FILTER WORKS ──────────────────────────────────────────────
function filterWorks(cat, btn) {
  document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.work-card').forEach(card => {
    card.style.display = (cat === 'all' || card.dataset.category === cat) ? '' : 'none';
  });
}

// ── CUSTOM CURSOR ─────────────────────────────────────────────
function initCursor() {
  const cursor = document.getElementById('cursor');
  const ring   = document.getElementById('cursor-ring');
  if (!cursor || !ring) return;
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e => {
    mx=e.clientX; my=e.clientY;
    cursor.style.left=mx+'px'; cursor.style.top=my+'px';
  });
  (function ar(){
    rx+=(mx-rx)*0.15; ry+=(my-ry)*0.15;
    ring.style.left=rx+'px'; ring.style.top=ry+'px';
    requestAnimationFrame(ar);
  })();
  document.addEventListener('mouseover', e => {
    const t = e.target.closest('a,button,.work-card,.skill-tag,.lang-toggle');
    if (t) {
      cursor.style.width='20px'; cursor.style.height='20px';
      ring.style.width='50px';  ring.style.height='50px';
      ring.style.borderColor='rgba(0,245,255,0.8)';
    }
  });
  document.addEventListener('mouseout', e => {
    const t = e.target.closest('a,button,.work-card,.skill-tag,.lang-toggle');
    if (t) {
      cursor.style.width='12px'; cursor.style.height='12px';
      ring.style.width='36px';  ring.style.height='36px';
      ring.style.borderColor='rgba(0,245,255,0.5)';
    }
  });
}

// ── STARFIELD ─────────────────────────────────────────────────
function initStarfield() {
  const canvas = document.getElementById('starfield');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let stars=[], nebula=[];
  function rc(){ canvas.width=window.innerWidth; canvas.height=window.innerHeight; }
  rc(); window.addEventListener('resize', rc);
  for(let i=0;i<200;i++) stars.push({
    x:Math.random()*canvas.width, y:Math.random()*canvas.height,
    r:Math.random()*1.5, opacity:0.2+Math.random()*0.8, twinkle:Math.random()*Math.PI*2
  });
  for(let i=0;i<4;i++) nebula.push({
    x:Math.random()*canvas.width, y:Math.random()*canvas.height,
    r:200+Math.random()*300,
    color:i%2===0?'rgba(0,245,255,':'rgba(139,92,246,',
    opacity:0.02+Math.random()*0.04
  });
  (function ds(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    nebula.forEach(n=>{
      const g=ctx.createRadialGradient(n.x,n.y,0,n.x,n.y,n.r);
      g.addColorStop(0,n.color+n.opacity+')');
      g.addColorStop(1,n.color+'0)');
      ctx.fillStyle=g; ctx.beginPath();
      ctx.arc(n.x,n.y,n.r,0,Math.PI*2); ctx.fill();
    });
    stars.forEach(s=>{
      s.twinkle+=0.02;
      const op=s.opacity*(0.7+0.3*Math.sin(s.twinkle));
      ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
      ctx.fillStyle=`rgba(255,255,255,${op})`; ctx.fill();
    });
    requestAnimationFrame(ds);
  })();
}

// ── ACTIVE NAV ────────────────────────────────────────────────
function initActiveNav() {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a[data-page]').forEach(a => {
    if (a.dataset.page === page || (page==='' && a.dataset.page==='index.html'))
      a.classList.add('active');
  });
}

// ── READING PROGRESS ──────────────────────────────────────────
function initReadingProgress() {
  const bar = document.getElementById('reading-progress');
  if (!bar) return;
  window.addEventListener('scroll', () => {
    const d = document.documentElement;
    bar.style.width = (d.scrollTop / (d.scrollHeight - d.clientHeight) * 100) + '%';
  });
}

// ── INIT ──────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initCursor();
  initStarfield();
  initActiveNav();
  initReadingProgress();
  applyLang(currentLang);
});
