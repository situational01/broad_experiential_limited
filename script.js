// ===== SERVICE DATA =====
const serviceData = {
  'vehicle-branding': {
    title: 'Vehicle Branding',
    description: 'We turn your fleet into powerful, moving billboards that capture attention across East Africa.',
    heroImage: 'images/car_branding/carbranding1.jpg',
    stats: [
      { number: '50+', label: 'Fleets Branded' },
      { number: '15+', label: 'Happy Clients' },
      { number: '100%', label: 'Satisfaction Rate' }
    ],
    gallery: [
      'images/car_branding/carbranding2.webp',
      'images/car_branding/carbranding4.jpg',
      'images/car_branding/carbranding5.jpg',
      'images/car_branding/carbranding6.jpg',
      'images/car_branding/tvs.jpeg',
      'images/car_branding/tvs1.jpeg',
      'images/car_branding/tvs2.jpeg',
      'images/car_branding/tvs3.jpeg',
      'images/car_branding/van.jpeg',
      'images/car_branding/van1.jpeg',
      'images/car_branding/van2.jpeg',
      'images/car_branding/van3.jpeg',
      'images/car_branding/shell_1.jpeg',
      'images/car_branding/lorrybranding.jpeg',
      'images/car_branding/pepsi.jpeg',
      'images/car_branding/pepsi1.jpeg',
      'images/car_branding/pepsi2.jpeg',
    ]
  },
  'shop-branding': {
    title: 'Shop Branding',
    description: 'Transform your retail space into an immersive brand experience.',
    heroImage: 'images/shop_branding/sunking_shopbranding.jfif',
    stats: [
      { number: '30+', label: 'Shops Transformed' },
      { number: '20+', label: 'Retail Partners' }
    ],
    gallery: [
      'images/shop_branding/sunking_shopbranding.jfif',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80'
    ]
  },
  'signages': {
    title: 'Signages',
    description: 'Make a lasting impression with high-impact indoor and outdoor signage.',
    heroImage: 'https://images.unsplash.com/photo-1553531384-cc0ac1ae1f0d?w=1200&q=80',
    stats: [{ number: '200+', label: 'Signs Installed' }],
    gallery: [
      'https://images.unsplash.com/photo-1553531384-cc0ac1ae1f0d?w=600&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80'
    ]
  },
  'wall-branding': {
    title: 'Wall Branding',
    description: 'Turn blank walls into powerful brand statements.',
    heroImage: 'images/wall_branding/vihiga_wallbranding.jfif',
    stats: [{ number: '100+', label: 'Walls Transformed' }],
    gallery: [
      'images/wall_branding/vihiga_wallbranding.jfif',
      'images/wall_branding/wallbranding1.jpeg'
    ]
  },
  'office-branding': {
    title: 'Office Branding',
    description: 'Create a professional environment that reflects your brand culture.',
    heroImage: 'images/offficebranding2.jpg',
    stats: [{ number: '40+', label: 'Offices Branded' }],
    gallery: ['images/office_branding.jpg']
  },
  'printing-design': {
    title: 'Printing & Design',
    description: 'High-quality printing and design services for all your marketing collateral.',
    heroImage: 'images/print/print1.webp',
    stats: [{ number: '1M+', label: 'Prints Delivered' }],
    gallery: ['images/print/print1.webp']
  },
  'merchandise-branding': {
    title: 'Merchandise Branding',
    description: 'Custom-branded merchandise that keeps your brand top-of-mind.',
    heroImage: 'images/merch/merch_2.jpg',
    stats: [{ number: '50k+', label: 'Items Produced' }],
    gallery: ['images/merch/merch_4.jpg',
      'images/merch/merch_3.jpg',
      'images/merch/merch_1.jpg',
    ]
  },
  'experiential-promotions': {
    title: 'Experiential Promotions',
    description: 'Immersive brand activations that create unforgettable connections.',
    heroImage: 'images/experiential_promotions/captain_morgan.jpg',
    stats: [{ number: '80+', label: 'Events Executed' }],
    gallery: ['images/experiential_promotions/tusker_1.jpg',
      'images/experiential_promotions/tusker_2.jpg',
      'images/experiential_promotions/tusker_3.jpg',
      'images/experiential_promotions/exp_1.jpg',
      'images/experiential_promotions/exp_2.jpg',
      'images/experiential_promotions/exp_3.jpg',
      'images/experiential_promotions/exp_4.jpg',
      'images/experiential_promotions/kc_1.jpg',
      'images/experiential_promotions/capt_1.jpg',
      'images/experiential_promotions/stch_1.jpg',
      'images/experiential_promotions/captain_morgan1.jpg',
      'images/experiential_promotions/gordons_1.jpg',
    ]
  },
  'branding-strategy': {
    title: 'Branding Strategy',
    description: 'Strategic brand identity development that captures your essence.',
    heroImage: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80',
    stats: [{ number: '60+', label: 'Brands Built' }],
    gallery: ['https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80']
  }
};

// ===== CLIENTELE DATA =====
const clienteleData = {
  'sunking': {
    title: 'Sunking',
    description: 'Sunking is a leader in affordable solar systems.',
    heroImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80',
    stats: [{ number: '12+', label: 'Branding Assets' }],
    gallery: []
  },
  'world-vision': {
    title: 'World Vision',
    description: 'World Vision has grown in Kenya, helping children and communities.',
    heroImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80',
    stats: [{ number: '20+', label: 'Branding Assets' }],
    gallery: []
  },
  'fresh-life': {
    title: 'Fresh Life',
    description: 'Fresh Life provides clean and safe sanitation solutions.',
    heroImage: 'https://images.unsplash.com/photo-1532996122725-e3c354a0b15b?w=1200&q=80',
    stats: [{ number: '8+', label: 'Campaigns' }],
    gallery: []
  },
  'mgas': {
    title: 'M-Gas',
    description: 'M-Gas empowers you with affordable and clean cooking solutions.',
    heroImage: 'images/clients/m_gas_logo.jfif',
    stats: [{ number: '40+', label: 'Projects' }],
    gallery: ['images/mgas.webp',
      'images/mgas1.webp',
      'images/mgas2.webp',
      'images/mgas3.webp',
      'images/mgas4.webp',
      'images/mgas5.webp'
    ]
  },
  'telkom': {
    title: 'Telkom',
    description: "Kenya's leading telecommunications provider.",
    heroImage: 'images/clients/telkom-kenya.webp',
    stats: [{ number: '50+', label: 'Outlets' }],
    gallery: []
  },
  'uip-real-estate': {
    title: 'UIP Real Estate',
    description: "Kenya's trusted real estate company.",
    heroImage: 'images/clients/uip_real_estate.jfif',
    stats: [{ number: '100+', label: 'Branches' }],
    gallery: []
  },
  'rachier-and-amollo': {
    title: 'Rachier and Amollo LLP',
    description: 'Nationally recognized law firm.',
    heroImage: 'images/clients/rachier_and_amollo.png',
    stats: [{ number: '40+', label: 'Projects' }],
    gallery: []
  },
  'sistema-bio': {
    title: 'Sistema Bio',
    description: 'Prefabricated modular biodigester solutions.',
    heroImage: 'images/clients/sistema_bio.png',
    stats: [{ number: '60+', label: 'Activations' }],
    gallery: []
  }
};

// ===== DOM REFERENCES =====
const detailSection = document.getElementById('serviceDetail');
const detailContainer = document.getElementById('detailContainer');
const mainContent = document.getElementById('mainContent');
const body = document.body;
const logoLink = document.getElementById('logoLink');
const backBtn = document.getElementById('detailBackBtn');
let returnSectionId = '#services';

// ===== CLIENTELE INFINITE SCROLL =====
const clientTrack = document.getElementById('clienteleTrack');
const originalClients = [
  { client: 'sunking', logo: 'images/clients/sunking.png', name: 'Sunking', tag: 'Affordable Solar Systems' },
  { client: 'world-vision', logo: 'images/clients/world_vision.png', name: 'World Vision', tag: 'Helping children in 37 counties' },
  { client: 'fresh-life', logo: 'images/clients/freshlife.jfif', name: 'Fresh Life', tag: "Let's Do More" },
  { client: 'mgas', logo: 'images/clients/m_gas_logo.jfif', name: 'M-Gas', tag: 'Clean cooking solutions' },
  { client: 'telkom', logo: 'images/clients/telkom-kenya.webp', name: 'Telkom Kenya', tag: 'Leading telecommunications' },
  { client: 'uip-real-estate', logo: 'images/clients/uip_real_estate.jfif', name: 'UIP Real Estate', tag: 'Trusted real estate' },
  { client: 'rachier-and-amollo', logo: 'images/clients/rachier_and_amollo.png', name: 'Rachier & Amollo', tag: 'Result‑oriented law firm' },
  { client: 'sistema-bio', logo: 'images/clients/sistema_bio.png', name: 'Sistema Bio', tag: 'Biodigester solutions' }
];

function createClientItem(data) {
  return `
    <div class="clientele__item" data-client="${data.client}">
      <div class="clientele__card-content">
        <img src="${data.logo}" alt="${data.name} logo" loading="lazy" />
        <span>${data.name}</span>
        <p class="clientele__tagline">${data.tag}</p>
      </div>
      <div class="clientele__overlay">
        <button class="clientele__btn" data-client="${data.client}">View Work <i class="fas fa-arrow-right"></i></button>
      </div>
    </div>`;
}

function buildClientTrack() {
  const items = originalClients.map(createClientItem).join('');
  clientTrack.innerHTML = items + items;
  attachClientListeners();
}
buildClientTrack();

function attachClientListeners() {
  document.querySelectorAll('.clientele__item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.clientele__btn')) return;
      const clientId = item.dataset.client;
      if (clientId && clienteleData[clientId]) {
        window.location.hash = `clientele-${clientId}`;
        renderDetail(clientId, 'clientele');
      }
    });
  });
  document.querySelectorAll('.clientele__btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const clientId = btn.dataset.client;
      if (clientId && clienteleData[clientId]) {
        window.location.hash = `clientele-${clientId}`;
        renderDetail(clientId, 'clientele');
      }
    });
  });
}

// ===== RENDER DETAIL VIEW =====
function renderDetail(id, type) {
  const data = type === 'clientele' ? clienteleData[id] : serviceData[id];
  if (!data) return;
  returnSectionId = type === 'clientele' ? '#clientele' : '#services';

  const statsHTML = data.stats
    .map(s => `<div class="stat"><span>${s.number}</span><label>${s.label}</label></div>`)
    .join('');

  const galleryHTML = (data.gallery && data.gallery.length > 0)
    ? data.gallery.map(img => `
        <div class="gallery-item">
          <div class="gallery-shimmer"></div>
          <img src="${img}" alt="${data.title}" loading="lazy" onload="this.classList.add('loaded')" />
        </div>`).join('')
    : '<p style="text-align:center;color:var(--color-gray);">Gallery coming soon.</p>';

  detailContainer.innerHTML = `
    <div class="detail-hero" style="background-image:url('${data.heroImage}')">
      <div class="container detail-hero-content">
        <h1>${data.title}</h1>
        <p>${data.description}</p>
      </div>
    </div>
    <div class="container detail-body">
      <div class="detail-stats">${statsHTML}</div>
      <h2>Project Gallery</h2>
      <div class="detail-gallery">${galleryHTML}</div>
    </div>`;

  detailSection.classList.add('active');
  mainContent.style.display = 'none';
  body.classList.add('detail-active');
  window.scrollTo(0, 0);
}

function hideDetail() {
  detailSection.classList.remove('active');
  mainContent.style.display = 'block';
  body.classList.remove('detail-active');
  history.pushState(null, null, ' ');
  const target = document.querySelector(returnSectionId);
  if (target) {
    window.scrollTo({
      top: target.getBoundingClientRect().top + window.scrollY - 80,
      behavior: 'smooth'
    });
  } else {
    window.scrollTo(0, 0);
  }
}

backBtn.addEventListener('click', hideDetail);
logoLink.addEventListener('click', (e) => {
  e.preventDefault();
  if (detailSection.classList.contains('active')) hideDetail();
  else window.scrollTo(0, 0);
});

// ===== HASH ROUTING =====
function handleHashChange() {
  const hash = window.location.hash;
  if (hash.startsWith('#service-')) {
    const id = hash.replace('#service-', '');
    if (serviceData[id]) renderDetail(id, 'service');
  } else if (hash.startsWith('#clientele-')) {
    const id = hash.replace('#clientele-', '');
    if (clienteleData[id]) renderDetail(id, 'clientele');
  } else if (detailSection.classList.contains('active')) {
    hideDetail();
  }
}
window.addEventListener('hashchange', handleHashChange);

// ===== SERVICE CARD CLICKS =====
document.querySelectorAll('.services__card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('.services__card-btn')) return;
    const id = card.dataset.service;
    if (serviceData[id]) {
      window.location.hash = `service-${id}`;
      renderDetail(id, 'service');
    }
  });
});
document.querySelectorAll('.services__card-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const id = btn.dataset.service;
    if (serviceData[id]) {
      window.location.hash = `service-${id}`;
      renderDetail(id, 'service');
    }
  });
});

// ===== LIGHTBOX GALLERY =====
(function() {
  const state = {
    images: [],
    currentIndex: 0,
    isOpen: false,
    scale: 1,
    minScale: 0.5,
    maxScale: 4,
    translateX: 0,
    translateY: 0,
    isDragging: false,
    startX: 0,
    startY: 0,
    startTranslateX: 0,
    startTranslateY: 0,
    startScale: 1,
    lastTouchDist: 0
  };
  let lightbox, imageEl, wrapperEl, counterEl, zoomLevelEl;

  function createLightbox() {
    if (document.getElementById('lightbox')) return;
    const html = `
      <div class="lightbox" id="lightbox">
        <div class="lightbox__overlay"></div>
        <button class="lightbox__close" title="Close (ESC)"><i class="fas fa-times"></i></button>
        <div class="lightbox__counter" id="lightboxCounter"></div>
        <button class="lightbox__prev" title="Previous (←)"><i class="fas fa-chevron-left"></i></button>
        <button class="lightbox__next" title="Next (→)"><i class="fas fa-chevron-right"></i></button>
        <div class="lightbox__container">
          <div class="lightbox__image-wrapper" id="lightboxWrapper">
            <img src="" alt="Gallery image" id="lightboxImage" />
          </div>
        </div>
        <div class="lightbox__zoom-controls">
          <button class="lightbox__zoom-out" title="Zoom out"><i class="fas fa-minus"></i></button>
          <span class="lightbox__zoom-level" id="lightboxZoomLevel">100%</span>
          <button class="lightbox__zoom-in" title="Zoom in"><i class="fas fa-plus"></i></button>
          <button class="lightbox__zoom-reset" title="Reset zoom"><i class="fas fa-expand"></i></button>
        </div>
        <div class="lightbox__dots" id="lightboxDots"></div>
      </div>`;
    document.body.insertAdjacentHTML('beforeend', html);
    lightbox = document.getElementById('lightbox');
    imageEl = document.getElementById('lightboxImage');
    wrapperEl = document.getElementById('lightboxWrapper');
    counterEl = document.getElementById('lightboxCounter');
    zoomLevelEl = document.getElementById('lightboxZoomLevel');

    lightbox.querySelector('.lightbox__close').addEventListener('click', close);
    lightbox.querySelector('.lightbox__prev').addEventListener('click', () => goTo(state.currentIndex - 1));
    lightbox.querySelector('.lightbox__next').addEventListener('click', () => goTo(state.currentIndex + 1));
    lightbox.querySelector('.lightbox__zoom-in').addEventListener('click', zoomIn);
    lightbox.querySelector('.lightbox__zoom-out').addEventListener('click', zoomOut);
    lightbox.querySelector('.lightbox__zoom-reset').addEventListener('click', resetZoom);
    lightbox.querySelector('.lightbox__overlay').addEventListener('click', close);

    document.addEventListener('keydown', (e) => {
      if (!state.isOpen) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') { e.preventDefault(); goTo(state.currentIndex - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); goTo(state.currentIndex + 1); }
    });

    wrapperEl.addEventListener('wheel', (e) => {
      e.preventDefault();
      state.scale = Math.min(Math.max(state.scale * (e.deltaY > 0 ? 0.9 : 1.1), state.minScale), state.maxScale);
      applyTransform();
    });

    imageEl.addEventListener('load', function() {
      wrapperEl.classList.remove('loading');
      this.classList.add('loaded');
    });
    imageEl.addEventListener('error', function() {
      wrapperEl.classList.remove('loading');
    });

    lightbox.addEventListener('click', function(e) {
      const dot = e.target.closest('.lightbox__dot');
      if (dot) goTo(parseInt(dot.dataset.index));
    });
  }

  function open(index) {
    if (!state.images.length) return;
    createLightbox();
    state.isOpen = true;
    state.currentIndex = Math.min(index, state.images.length - 1);
    state.scale = 1;
    state.translateX = 0;
    state.translateY = 0;
    wrapperEl.classList.add('loading');
    imageEl.src = state.images[state.currentIndex];
    imageEl.alt = 'Gallery image ' + (state.currentIndex + 1);
    updateCounter();
    updateDots();
    updateZoomLevel();
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function close() {
    state.isOpen = false;
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
    state.scale = 1;
    imageEl.style.transform = '';
    wrapperEl.classList.remove('loading');
  }

  function goTo(index) {
    if (index < 0) index = state.images.length - 1;
    if (index >= state.images.length) index = 0;
    state.currentIndex = index;
    state.scale = 1;
    state.translateX = 0;
    state.translateY = 0;
    wrapperEl.classList.add('loading');
    imageEl.src = state.images[index];
    imageEl.alt = 'Gallery image ' + (index + 1);
    updateCounter();
    updateDots();
    updateZoomLevel();
  }

  function updateCounter() {
    if (counterEl) counterEl.textContent = `${state.currentIndex + 1} / ${state.images.length}`;
  }

  function updateDots() {
    const dotsContainer = document.getElementById('lightboxDots');
    if (!dotsContainer || state.images.length <= 1) {
      if (dotsContainer) dotsContainer.innerHTML = '';
      return;
    }
    dotsContainer.innerHTML = state.images
      .map((_, i) => `<span class="lightbox__dot ${i === state.currentIndex ? 'active' : ''}" data-index="${i}"></span>`)
      .join('');
  }

  function updateZoomLevel() {
    if (zoomLevelEl) zoomLevelEl.textContent = Math.round(state.scale * 100) + '%';
  }

  function applyTransform() {
    if (imageEl) imageEl.style.transform = `scale(${state.scale}) translate(${state.translateX}px, ${state.translateY}px)`;
    updateZoomLevel();
  }

  function zoomIn() {
    state.scale = Math.min(state.scale * 1.25, state.maxScale);
    applyTransform();
  }

  function zoomOut() {
    state.scale = Math.max(state.scale / 1.25, state.minScale);
    applyTransform();
  }

  function resetZoom() {
    state.scale = 1;
    state.translateX = 0;
    state.translateY = 0;
    applyTransform();
  }

  // Attach lightbox to gallery images
  detailContainer.addEventListener('click', function(e) {
    const img = e.target.closest('.detail-gallery img');
    if (!img) return;
    const gallery = img.closest('.detail-gallery');
    if (!gallery) return;
    const allImages = Array.from(gallery.querySelectorAll('img')).map(el => el.src);
    const index = allImages.indexOf(img.src);
    if (index === -1) return;
    state.images = allImages;
    open(index);
  });
})();

// ===== FORM VALIDATION =====
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !service || !message) return showToast('Please fill all required fields.', 'error');
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return showToast('Invalid email address.', 'error');
    showToast('Message sent successfully!', 'success');
    form.reset();
  });
}

// ===== COUNTER ANIMATION =====
function animateCounter(el, target) {
  let current = 0;
  const step = () => {
    if (current < target) {
      current++;
      el.textContent = current + '+';
      requestAnimationFrame(step);
    } else {
      el.classList.add('bounced');
    }
  };
  step();
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const count = parseInt(entry.target.dataset.count);
      animateCounter(entry.target, count);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.about__stat-number').forEach(c => counterObserver.observe(c));

// ===== SCROLL REVEAL =====
const revealSections = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('section-visible');
  });
}, { threshold: 0.1 });

document.querySelectorAll('.about, .services, .clientele, .testimonials, .contact').forEach(s => {
  s.classList.add('section-hidden');
  revealSections.observe(s);
});

// ===== SERVICE CARD STAGGER =====
document.querySelectorAll('.services__card').forEach((card, i) => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  obs.observe(card);
});

// ===== FILTER =====
document.querySelectorAll('.filter__btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter__btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    document.querySelectorAll('.services__card').forEach(card => {
      card.classList.toggle('hidden-card', filter !== 'all' && card.dataset.category !== filter);
    });
  });
});

// ===== NAV TOGGLE (FIXED) =====
const navToggle = document.getElementById('navToggle');
const navList = document.querySelector('.nav__list');

// Toggle menu open/close when hamburger is clicked
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navList.classList.toggle('open');
    navToggle.classList.toggle('open');
    const isExpanded = navList.classList.contains('open');
    navToggle.setAttribute('aria-expanded', isExpanded);
  });
}

// Close the mobile menu when ANY link inside it is clicked
document.querySelectorAll('.nav__list a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    navToggle.classList.remove('open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ===== SCROLL TOP =====
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (scrollTopBtn) scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
});
if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

// ===== PRELOADER =====
window.addEventListener('load', () => {
  document.getElementById('preloader').classList.add('hidden');
  if (window.location.hash) handleHashChange();
});

// ===== HEADER SCROLL =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => header.classList.toggle('scrolled', window.scrollY > 80));

// ===== HERO CAROUSEL =====
let currentSlide = 0;
const slides = document.querySelectorAll('.hero__slide');
setInterval(() => {
  slides.forEach((s, i) => s.classList.toggle('active', i === currentSlide));
  currentSlide = (currentSlide + 1) % slides.length;
}, 5000);

// ===== TOAST =====
function showToast(msg, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${msg}`;
  container.appendChild(toast);
  setTimeout(() => toast.remove(), 4000);
}

