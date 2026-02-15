/* ============================================================
   MAIN.JS — Interactive behaviors & animations
   ============================================================ */

(function() {
  'use strict';

  // ── NAVBAR SCROLL ─────────────────────────────────────────
  const navbar = document.getElementById('navbar');
  const mobileMenuEl = document.getElementById('mobile-menu');
  const hamburger = document.getElementById('hamburger');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    updateActiveNav();
  });

  if (hamburger && mobileMenuEl) {
    hamburger.addEventListener('click', () => {
      mobileMenuEl.classList.toggle('open');
    });
    // Close on link click
    mobileMenuEl.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileMenuEl.classList.remove('open'));
    });
  }

  function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 100) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.remove('active');
      if (a.getAttribute('href') === '#' + current) a.classList.add('active');
    });
  }

  // ── SMOOTH SCROLL ─────────────────────────────────────────
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // ── HERO PARTICLES ─────────────────────────────────────────
  function createParticles() {
    const container = document.querySelector('.hero-particles');
    if (!container) return;
    for (let i = 0; i < 18; i++) {
      const p = document.createElement('div');
      p.className = 'particle';
      const size = Math.random() * 8 + 3;
      p.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${Math.random() * 100}%;
        animation-duration: ${Math.random() * 12 + 8}s;
        animation-delay: ${Math.random() * 8}s;
      `;
      container.appendChild(p);
    }
  }
  createParticles();

  // ── CIRCUIT BOARD SVG ANIMATION ───────────────────────────
  function initCircuitAnim() {
    const canvas = document.querySelector('.circuit-canvas');
    if (!canvas) return;
    // Chart bars
    const bars = canvas.querySelectorAll('.chart-bar');
    const heights = [35, 55, 45, 70, 60, 80, 65, 90, 75, 85, 70, 95];
    bars.forEach((bar, i) => {
      bar.style.setProperty('--h', (heights[i % heights.length] || 50) + '%');
    });
  }
  initCircuitAnim();

  // ── SCROLL REVEAL ──────────────────────────────────────────
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  revealElements.forEach(el => observer.observe(el));

  // ── COUNTER ANIMATION ─────────────────────────────────────
  function animateCounter(el) {
    const target = parseFloat(el.dataset.count);
    const isDecimal = el.dataset.count.includes('.');
    const duration = 2000;
    const start = performance.now();
    const suffix = el.dataset.suffix || '';
    const prefix = el.dataset.prefix || '';
    function update(now) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const val = target * ease;
      el.textContent = prefix + (isDecimal ? val.toFixed(1) : Math.floor(val).toLocaleString()) + suffix;
      if (progress < 1) requestAnimationFrame(update);
    }
    requestAnimationFrame(update);
  }

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !entry.target.dataset.animated) {
        entry.target.dataset.animated = 'true';
        animateCounter(entry.target);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('[data-count]').forEach(el => counterObserver.observe(el));

  // ── PLATFORM FEATURE TABS ─────────────────────────────────
  const featItems = document.querySelectorAll('.feat-item');
  featItems.forEach(item => {
    item.addEventListener('click', () => {
      featItems.forEach(f => f.classList.remove('active'));
      item.classList.add('active');
    });
  });

  // ── PROCESS STEPS ANIMATION ───────────────────────────────
  const stepObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        setTimeout(() => entry.target.classList.remove('active'), 2000);
      }
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.process-step').forEach(el => stepObserver.observe(el));

  // ── FORM HANDLING ─────────────────────────────────────────
  const forms = document.querySelectorAll('form');
  forms.forEach(form => {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      if (!btn) return;
      const orig = btn.textContent;
      btn.textContent = 'Submitting...';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = '✓ Message Sent';
        btn.style.background = '#16A34A';
        setTimeout(() => {
          btn.textContent = orig;
          btn.style.background = '';
          btn.disabled = false;
          form.reset();
        }, 3000);
      }, 1400);
    });
  });

  // ── DASHBOARD LIVE UPDATES ────────────────────────────────
  function updateDashboard() {
    const vals = document.querySelectorAll('.live-metric');
    vals.forEach(el => {
      const base = parseInt(el.dataset.base || '0');
      const range = parseInt(el.dataset.range || '10');
      const val = base + Math.floor(Math.random() * range);
      el.textContent = el.dataset.prefix + val.toLocaleString() + (el.dataset.suffix || '');
    });
  }
  setInterval(updateDashboard, 3000);

  // ── RIPPLE EFFECT ON BUTTONS ─────────────────────────────
  document.querySelectorAll('.btn-primary').forEach(btn => {
    btn.addEventListener('click', function(e) {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const ripple = document.createElement('span');
      ripple.style.cssText = `
        position:absolute;left:${x}px;top:${y}px;
        width:0;height:0;border-radius:50%;
        background:rgba(255,255,255,0.3);
        transform:translate(-50%,-50%);
        animation: rippleAnim 0.6s ease-out forwards;
        pointer-events:none;
      `;
      // Inject ripple keyframes once
      if (!document.getElementById('ripple-style')) {
        const style = document.createElement('style');
        style.id = 'ripple-style';
        style.textContent = '@keyframes rippleAnim{to{width:300px;height:300px;opacity:0;}}';
        document.head.appendChild(style);
      }
      btn.style.position = 'relative';
      btn.style.overflow = 'hidden';
      btn.appendChild(ripple);
      setTimeout(() => ripple.remove(), 700);
    });
  });

  // ── FLOATING CARDS PARALLAX ───────────────────────────────
  document.addEventListener('mousemove', (e) => {
    const cards = document.querySelectorAll('.hero-float-card');
    const cx = e.clientX / window.innerWidth - 0.5;
    const cy = e.clientY / window.innerHeight - 0.5;
    cards.forEach((c, i) => {
      const factor = (i + 1) * 8;
      c.style.transform = `translate(${cx * factor}px, ${cy * factor}px)`;
    });
  });

  // ── PAGE TRANSITIONS ──────────────────────────────────────
  document.querySelectorAll('a:not([href^="#"]):not([target="_blank"])').forEach(a => {
    if (a.href && a.href.includes('.html')) {
      a.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.href;
        document.body.style.opacity = '0';
        document.body.style.transition = 'opacity 0.25s ease';
        setTimeout(() => { window.location.href = href; }, 260);
      });
    }
  });
  // Fade in on load
  window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.4s ease';
    requestAnimationFrame(() => {
      document.body.style.opacity = '1';
    });
  });

})();