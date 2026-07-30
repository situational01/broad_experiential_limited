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
      'images/car_branding/carbranding2.webp', 'images/car_branding/carbranding4.jpg',
      'images/car_branding/carbranding5.jpg', 'images/car_branding/carbranding6.jpg',
      'images/car_branding/tvs.jpeg', 'images/car_branding/tvs1.jpeg',
      'images/car_branding/tvs2.jpeg', 'images/car_branding/tvs3.jpeg',
      'images/car_branding/van.jpeg', 'images/car_branding/van1.jpeg',
      'images/car_branding/van2.jpeg', 'images/car_branding/van3.jpeg',
      'images/car_branding/shell_1.jpeg', 'images/car_branding/lorrybranding.jpeg',
      'images/car_branding/pepsi.jpeg', 'images/car_branding/pepsi1.jpeg',
      'images/car_branding/pepsi2.jpeg'
    ]
  },
  'shop-branding': {
    title: 'Shop Branding',
    description: 'Transform your retail space into an immersive brand experience.',
    heroImage: 'images/shop_branding/sunking_shopbranding.jfif',
    stats: [{ number: '30+', label: 'Shops Transformed' }, { number: '20+', label: 'Retail Partners' }],
    gallery: ['images/shop_branding/sunking_shopbranding.jfif']
  },
  'signages': {
    title: 'Signages',
    description: 'Make a lasting impression with high-impact indoor and outdoor signage.',
    heroImage: 'https://images.unsplash.com/photo-1553531384-cc0ac1ae1f0d?w=1200&q=80',
    stats: [{ number: '200+', label: 'Signs Installed' }],
    gallery: ['https://images.unsplash.com/photo-1553531384-cc0ac1ae1f0d?w=600&q=80']
  },
  'wall-branding': {
    title: 'Wall Branding',
    description: 'Turn blank walls into powerful brand statements.',
    heroImage: 'images/wall_branding/vihiga_wallbranding.jfif',
    stats: [{ number: '100+', label: 'Walls Transformed' }],
    gallery: ['images/wall_branding/vihiga_wallbranding.jfif', 'images/wall_branding/wallbranding1.jpeg']
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
    gallery: ['images/merch/merch_4.jpg', 'images/merch/merch_3.jpg', 'images/merch/merch_1.jpg']
  },
  'experiential-promotions': {
    title: 'Experiential Promotions',
    description: 'Immersive brand activations that create unforgettable connections.',
    heroImage: 'images/experiential_promotions/captain_morgan.jpg',
    stats: [{ number: '80+', label: 'Events Executed' }],
    gallery: [
      'images/experiential_promotions/tusker_1.jpg', 'images/experiential_promotions/tusker_2.jpg',
      'images/experiential_promotions/tusker_3.jpg', 'images/experiential_promotions/exp_1.jpg',
      'images/experiential_promotions/exp_2.jpg', 'images/experiential_promotions/exp_3.jpg',
      'images/experiential_promotions/exp_4.jpg', 'images/experiential_promotions/kc_1.jpg',
      'images/experiential_promotions/capt_1.jpg', 'images/experiential_promotions/stch_1.jpg',
      'images/experiential_promotions/captain_morgan1.jpg', 'images/experiential_promotions/gordons_1.jpg'
    ]
  },
  'branding-strategy': {
    title: 'Branding Strategy',
    description: 'We handle the heavy lifting so you can focus on your business.',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&q=80',
    stats: [
      { number: '60+', label: 'Brands Built' },
      { number: '47', label: 'Counties' },
      { number: '5', label: 'EA Countries' }
    ],
    strategies: [
      { title: 'County & Municipal Licensing', desc: 'Full negotiation and acquisition of all county-level branding permits across Kenya.' },
      { title: 'Outdoor Advertising Compliance', desc: 'NCCG, KCAA, KENHA, and KURA regulatory approvals for billboards and signage.' },
      { title: 'Cross-Border Brand Compliance', desc: 'Ensuring your brand meets regulations in Uganda, Tanzania, Rwanda, and Ethiopia.' },
      { title: 'Site & Location Scouting', desc: 'Finding and securing prime high-traffic locations in Nairobi, Mombasa, Kisumu, and across East Africa.' },
      { title: 'Community Entry & Relations', desc: 'Working with local authorities and community leaders before brand activation in new areas.' },
      { title: 'Competitor Analysis', desc: 'Studying market gaps and positioning your brand for maximum visibility and impact.' },
      { title: 'Vendor Sourcing & Management', desc: 'Finding reliable printers, installers, and suppliers in every region.' },
      { title: 'Multi-County Coordination', desc: 'Managing simultaneous branding projects across all 47 Kenyan counties.' }
    ]
  }
};

const clienteleData = {
  'sunking': { title: 'Sunking', description: 'Sunking is a leader in affordable solar systems.', heroImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80', stats: [{ number: '12+', label: 'Branding Assets' }], gallery: [] },
  'world-vision': { title: 'World Vision', description: 'World Vision has grown in Kenya, helping children and communities.', heroImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80', stats: [{ number: '20+', label: 'Branding Assets' }], gallery: [] },
  'fresh-life': { title: 'Fresh Life', description: 'Fresh Life provides clean and safe sanitation solutions.', heroImage: 'https://images.unsplash.com/photo-1532996122725-e3c354a0b15b?w=1200&q=80', stats: [{ number: '8+', label: 'Campaigns' }], gallery: [] },
  'mgas': { title: 'M-Gas', description: 'M-Gas empowers you with affordable and clean cooking solutions.', heroImage: 'images/clients/m_gas_logo.jfif', stats: [{ number: '40+', label: 'Projects' }], gallery: ['images/mgas.webp','images/mgas1.webp','images/mgas2.webp','images/mgas3.webp','images/mgas4.webp','images/mgas5.webp'] },
  'telkom': { title: 'Telkom', description: "Kenya's leading telecommunications provider.", heroImage: 'images/clients/telkom-kenya.webp', stats: [{ number: '50+', label: 'Outlets' }], gallery: [] },
  'uip-real-estate': { title: 'UIP Real Estate', description: "Kenya's trusted real estate company.", heroImage: 'images/clients/uip_real_estate.jfif', stats: [{ number: '100+', label: 'Branches' }], gallery: [] },
  'rachier-and-amollo': { title: 'Rachier and Amollo LLP', description: 'Nationally recognized law firm.', heroImage: 'images/clients/rachier_and_amollo.png', stats: [{ number: '40+', label: 'Projects' }], gallery: [] },
  'sistema-bio': { title: 'Sistema Bio', description: 'Prefabricated modular biodigester solutions.', heroImage: 'images/clients/sistema_bio.png', stats: [{ number: '60+', label: 'Activations' }], gallery: [] }
};

// ===== DOM ELEMENTS =====
const detailSection = document.getElementById('serviceDetail');
const detailContainer = document.getElementById('detailContainer');
const mainContent = document.getElementById('mainContent');
const body = document.body;
const logoLink = document.getElementById('logoLink');
const backBtn = document.getElementById('detailBackBtn');
let returnSectionId = '#services';

// ===== CLIENTELE CAROUSEL =====
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
  return `<div class="clientele__item" data-client="${data.client}">
    <div class="clientele__card-content">
      <img src="${data.logo}" alt="${data.name}" loading="lazy" />
      <span>${data.name}</span>
      <p class="clientele__tagline">${data.tag}</p>
    </div>
    <div class="clientele__overlay">
      <button class="clientele__btn" data-client="${data.client}">View Work <i class="fas fa-arrow-right"></i></button>
    </div>
  </div>`;
}

function buildClientTrack() {
  if (!clientTrack) return;
  clientTrack.innerHTML = originalClients.map(createClientItem).join('') + 
                          originalClients.map(createClientItem).join('');
  attachClientListeners();
}

function attachClientListeners() {
  document.querySelectorAll('.clientele__item').forEach(item => {
    item.addEventListener('click', (e) => {
      if (e.target.closest('.clientele__btn')) return;
      const id = item.dataset.client;
      if (clienteleData[id]) {
        window.location.hash = `clientele-${id}`;
        renderDetail(id, 'clientele');
      }
    });
  });
  
  document.querySelectorAll('.clientele__btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = btn.dataset.client;
      if (clienteleData[id]) {
        window.location.hash = `clientele-${id}`;
        renderDetail(id, 'clientele');
      }
    });
  });
}

// ===== DETAIL VIEW =====
function renderDetail(id, type) {
  const data = type === 'clientele' ? clienteleData[id] : serviceData[id];
  if (!data) return;
  
  returnSectionId = type === 'clientele' ? '#clientele' : '#services';
  
  const statsHTML = data.stats.map(s => 
    `<div class="stat"><span>${s.number}</span><label>${s.label}</label></div>`
  ).join('');
  
  let mainHTML;
  if (data.strategies) {
    mainHTML = `
      <h2>Our Expertise</h2>
      <div class="strategies-grid">
        ${data.strategies.map((s, i) => `
          <div class="strategy-item" style="animation-delay:${i * 0.08}s">
            <div class="strategy-number">${String(i + 1).padStart(2, '0')}</div>
            <div class="strategy-content">
              <h4>${s.title}</h4>
              <p>${s.desc}</p>
            </div>
          </div>
        `).join('')}
      </div>`;
  } else {
    mainHTML = (data.gallery && data.gallery.length) 
      ? `<h2>Project Gallery</h2>
         <div class="detail-gallery">
           ${data.gallery.map(img => `
             <div class="gallery-item">
               <img src="${img}" alt="${data.title}" loading="lazy" onload="this.classList.add('loaded')" />
             </div>
           `).join('')}
         </div>`
      : '<p style="text-align:center;color:var(--color-gray);">Gallery coming soon.</p>';
  }
  
  detailContainer.innerHTML = `
    <div class="detail-hero" style="background-image:url('${data.heroImage}')">
      <div class="container detail-hero-content">
        <h1>${data.title}</h1>
        <p>${data.description}</p>
      </div>
    </div>
    <div class="container detail-body">
      <div class="detail-stats">${statsHTML}</div>
      ${mainHTML}
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
  if (detailSection.classList.contains('active')) {
    hideDetail();
  } else {
    window.scrollTo(0, 0);
  }
  closeMobileMenu();
});

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

// ===== ACTIVE NAV LINK ON SCROLL =====
function updateActiveNavLink() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link');
  const scrollPosition = window.scrollY + 150;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    const sectionId = section.getAttribute('id');

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${sectionId}`) {
          link.classList.add('active');
        }
      });
    }
  });

  if (window.scrollY < 100) {
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === '#home') {
        link.classList.add('active');
      }
    });
  }
}

window.addEventListener('scroll', updateActiveNavLink);

// ===== LIGHTBOX =====
(function() {
  const st = {
    images: [],
    currentIndex: 0,
    isOpen: false,
    scale: 1,
    minScale: 0.5,
    maxScale: 4,
    translateX: 0,
    translateY: 0
  };
  
  let lb, imgEl, wrapEl, counterEl, zoomEl;
  
  function create() {
    if (document.getElementById('lightbox')) return;
    
    const html = `
      <div class="lightbox" id="lightbox">
        <button class="lightbox__close" title="Close"><i class="fas fa-times"></i></button>
        <div class="lightbox__counter" id="lightboxCounter"></div>
        <button class="lightbox__prev"><i class="fas fa-chevron-left"></i></button>
        <button class="lightbox__next"><i class="fas fa-chevron-right"></i></button>
        <div class="lightbox__container">
          <div class="lightbox__image-wrapper" id="lightboxWrapper">
            <img src="" alt="" id="lightboxImage" />
          </div>
        </div>
        <div class="lightbox__zoom-controls">
          <button class="lightbox__zoom-out"><i class="fas fa-minus"></i></button>
          <span class="lightbox__zoom-level" id="lightboxZoomLevel">100%</span>
          <button class="lightbox__zoom-in"><i class="fas fa-plus"></i></button>
          <button class="lightbox__zoom-reset"><i class="fas fa-expand"></i></button>
        </div>
      </div>`;
    
    document.body.insertAdjacentHTML('beforeend', html);
    
    lb = document.getElementById('lightbox');
    imgEl = document.getElementById('lightboxImage');
    wrapEl = document.getElementById('lightboxWrapper');
    counterEl = document.getElementById('lightboxCounter');
    zoomEl = document.getElementById('lightboxZoomLevel');
    
    lb.querySelector('.lightbox__close').addEventListener('click', close);
    lb.querySelector('.lightbox__prev').addEventListener('click', () => go(st.currentIndex - 1));
    lb.querySelector('.lightbox__next').addEventListener('click', () => go(st.currentIndex + 1));
    lb.querySelector('.lightbox__zoom-in').addEventListener('click', () => {
      st.scale = Math.min(st.scale * 1.25, st.maxScale);
      apply();
    });
    lb.querySelector('.lightbox__zoom-out').addEventListener('click', () => {
      st.scale = Math.max(st.scale / 1.25, st.minScale);
      apply();
    });
    lb.querySelector('.lightbox__zoom-reset').addEventListener('click', () => {
      st.scale = 1;
      st.translateX = 0;
      st.translateY = 0;
      apply();
    });
    
    document.addEventListener('keydown', (e) => {
      if (!st.isOpen) return;
      if (e.key === 'Escape') close();
      if (e.key === 'ArrowLeft') { e.preventDefault(); go(st.currentIndex - 1); }
      if (e.key === 'ArrowRight') { e.preventDefault(); go(st.currentIndex + 1); }
    });
    
    imgEl.addEventListener('load', function() {
      wrapEl.classList.remove('loading');
      this.classList.add('loaded');
    });
  }
  
  function open(index) {
    if (!st.images.length) return;
    create();
    st.isOpen = true;
    st.currentIndex = Math.min(index, st.images.length - 1);
    st.scale = 1;
    st.translateX = 0;
    st.translateY = 0;
    wrapEl.classList.add('loading');
    imgEl.src = st.images[st.currentIndex];
    updateCounter();
    lb.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  
  function close() {
    st.isOpen = false;
    lb.classList.remove('active');
    document.body.style.overflow = '';
    st.scale = 1;
    imgEl.style.transform = '';
    wrapEl.classList.remove('loading');
  }
  
  function go(index) {
    if (index < 0) index = st.images.length - 1;
    if (index >= st.images.length) index = 0;
    st.currentIndex = index;
    st.scale = 1;
    st.translateX = 0;
    st.translateY = 0;
    wrapEl.classList.add('loading');
    imgEl.src = st.images[index];
    updateCounter();
  }
  
  function updateCounter() {
    if (counterEl) counterEl.textContent = `${st.currentIndex + 1} / ${st.images.length}`;
  }
  
  function apply() {
    if (imgEl) imgEl.style.transform = `scale(${st.scale}) translate(${st.translateX}px, ${st.translateY}px)`;
    if (zoomEl) zoomEl.textContent = Math.round(st.scale * 100) + '%';
  }
  
  detailContainer.addEventListener('click', function(e) {
    const img = e.target.closest('.detail-gallery img');
    if (!img) return;
    const gallery = img.closest('.detail-gallery');
    if (!gallery) return;
    const allImages = Array.from(gallery.querySelectorAll('img')).map(el => el.src);
    const index = allImages.indexOf(img.src);
    if (index === -1) return;
    st.images = allImages;
    open(index);
  });
})();

// ===== CONTACT FORM =====
const form = document.getElementById('contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const service = document.getElementById('service').value;
    const message = document.getElementById('message').value.trim();
    
    if (!name || !email || !service || !message) {
      return showToast('Please fill all required fields.', 'error');
    }
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return showToast('Invalid email address.', 'error');
    }
    
    showToast('Message sent successfully!', 'success');
    form.reset();
  });
}

// ===== TOAST =====
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i> ${message}`;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(100%)';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ===== COUNTER ANIMATION =====
function animateCounter(el, target) {
  let count = 0;
  const step = () => {
    if (count < target) {
      count++;
      el.textContent = count + '+';
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
      const target = parseInt(entry.target.dataset.count);
      animateCounter(entry.target, target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.about__stat-number').forEach(counter => {
  counterObserver.observe(counter);
});

// ===== SECTION REVEAL =====
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.about, .services, .clientele, .testimonials, .faq, .contact, .video-showcase').forEach(section => {
  section.classList.add('section-hidden');
  revealObserver.observe(section);
});

// ===== SERVICE CARD REVEAL =====
document.querySelectorAll('.services__card').forEach((card, i) => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add('visible');
        }, i * 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });
  observer.observe(card);
});

// ===== FILTER BUTTONS =====
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

// ===== FAQ ACCORDION =====
document.querySelectorAll('.faq__question').forEach(button => {
  button.addEventListener('click', () => {
    const faqItem = button.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    document.querySelectorAll('.faq__item').forEach(item => {
      item.classList.remove('active');
      item.querySelector('.faq__question').setAttribute('aria-expanded', 'false');
    });
    
    if (!isActive) {
      faqItem.classList.add('active');
      button.setAttribute('aria-expanded', 'true');
    }
  });
});

// ===== MOBILE NAVIGATION =====
const navToggle = document.getElementById('navToggle');
const navList = document.querySelector('.nav__list');

let navOverlay = document.querySelector('.nav__overlay');
if (!navOverlay) {
  navOverlay = document.createElement('div');
  navOverlay.className = 'nav__overlay';
  document.body.appendChild(navOverlay);
}

function openMobileMenu() {
  navList.classList.add('open');
  navToggle.classList.add('open');
  navToggle.setAttribute('aria-expanded', 'true');
  navOverlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeMobileMenu() {
  navList.classList.remove('open');
  navToggle.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  navOverlay.classList.remove('open');
  document.body.style.overflow = '';
}

if (navToggle) {
  navToggle.addEventListener('click', () => {
    if (navList.classList.contains('open')) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  });
}

navOverlay.addEventListener('click', closeMobileMenu);

document.querySelectorAll('.nav__list a').forEach(link => {
  link.addEventListener('click', () => {
    closeMobileMenu();
  });
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 768 && navList.classList.contains('open')) {
    closeMobileMenu();
  }
});

// ===== SCROLL TO TOP =====
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  if (scrollTopBtn) {
    scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
  }
});

if (scrollTopBtn) {
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// ===== SCROLL PROGRESS =====
const scrollProgress = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  if (scrollProgress) {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    scrollProgress.style.width = scrollPercent + '%';
  }
});

// ===== HERO SLIDER =====
let currentSlide = 0;
const slides = document.querySelectorAll('.hero__slide');
if (slides.length > 0) {
  setInterval(() => {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === currentSlide);
    });
    currentSlide = (currentSlide + 1) % slides.length;
  }, 5000);
}

// ===== INITIALIZATION =====
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    setTimeout(() => {
      preloader.classList.add('hidden');
    }, 500);
  }
  
  buildClientTrack();
  updateActiveNavLink();
  
  if (window.location.hash) {
    handleHashChange();
  }
});