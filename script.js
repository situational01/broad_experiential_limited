// ===== SERVICE DATA =====
const serviceData = {
  'vehicle-branding': {
    title: 'Vehicle Branding',
    description: 'We turn your fleet into powerful, moving billboards that capture attention across East Africa. Our full-wrap solutions ensure your brand travels everywhere.',
    heroImage: 'images/car_branding/carbranding1.jpg',
    stats: [
      { number: '50+', label: 'Fleets Branded' },
      { number: '15+', label: 'Happy Clients' },
      { number: '100%', label: 'Satisfaction Rate' },
    ],
    gallery: [
      'images/car_branding/carbranding2.webp',
      'images/car_branding/carbranding4.jpg',
      'images/car_branding/carbranding5.jpg',
      'images/car_branding/carbranding6.jpg',
    ]
  },
  'shop-branding': {
    title: 'Shop Branding',
    description: 'Transform your retail space into an immersive brand experience. From storefronts to interiors, we create environments that attract and retain customers.',
    heroImage: 'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=1200&q=80',
    stats: [
      { number: '30+', label: 'Shops Transformed' },
      { number: '20+', label: 'Retail Partners' },
      { number: '95%', label: 'Client Retention' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1604719312566-8912e9227c6a?w=600&q=80',
      'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80',
      'https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=600&q=80',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&q=80',
    ]
  },
  'signages': {
    title: 'Signages',
    description: 'Make a lasting impression with high-impact indoor and outdoor signage. We design, fabricate, and install signs that command attention.',
    heroImage: 'https://images.unsplash.com/photo-1553531384-cc0ac1ae1f0d?w=1200&q=80',
    stats: [
      { number: '200+', label: 'Signs Installed' },
      { number: '50+', label: 'Corporate Clients' },
      { number: '100%', label: 'On-Time Delivery' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1553531384-cc0ac1ae1f0d?w=600&q=80',
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
      'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80',
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80',
    ]
  },
  'wall-branding': {
    title: 'Wall Branding',
    description: 'Turn blank walls into powerful brand statements. Our large-scale murals and graphics transform spaces and captivate audiences.',
    heroImage: 'images/wall_branding/vihiga_wallbranding.jfif',
    stats: [
      { number: '100+', label: 'Walls Transformed' },
      { number: '40+', label: 'Corporate Spaces' },
      { number: '100%', label: 'Visual Impact' },
    ],
    gallery: [
      'images/wall_branding/vihiga_wallbranding2.jfif',
      'images/wall_branding/itel_wallbranding1.jfif',
      'images/wall_branding/itel_wallbranding.jfif',
      'images/wall_branding/vihiga_wallbranding.jfif',
    ]
  },
  'office-branding': {
    title: 'Office Branding',
    description: 'Create a professional environment that reflects your brand culture. We design inspiring workspaces that impress clients and motivate employees.',
    heroImage: 'images/offficebranding2.jpg',
    stats: [
      { number: '40+', label: 'Offices Branded' },
      { number: '25+', label: 'Corporate Clients' },
      { number: '100%', label: 'Employee Satisfaction' },
    ],
    gallery: [
      'images/slide_1.jpg',
      'images/office_branding.jpg',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
      'https://images.unsplash.com/photo-1497366858526-0766cadbe8fa?w=600&q=80',
    ]
  },
  'printing-design': {
    title: 'Printing & Design',
    description: 'High-quality printing and design services for all your marketing collateral. From digital to screen printing, we bring your ideas to life.',
    heroImage: 'images/print/print1.webp',
    stats: [
      { number: '1M+', label: 'Prints Delivered' },
      { number: '100+', label: 'Design Projects' },
      { number: '100%', label: 'Quality Accuracy' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=600&q=80',
      'https://images.unsplash.com/photo-1586339949916-3e9457bef6d3?w=600&q=80',
      'https://images.unsplash.com/photo-1531834823707-a2f15777c8e7?w=600&q=80',
      'https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?w=600&q=80',
    ]
  },
  'merchandise-branding': {
    title: 'Merchandise Branding',
    description: 'Custom-branded merchandise that keeps your brand top-of-mind. Premium T-shirts, caps, mugs, and promotional items for every occasion.',
    heroImage: 'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=1200&q=80',
    stats: [
      { number: '50k+', label: 'Items Produced' },
      { number: '30+', label: 'Product Types' },
      { number: '100%', label: 'Customizable' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1577223625816-7546f13df25d?w=600&q=80',
      'https://images.unsplash.com/photo-1585499629798-8fbc9d8c49e?w=600&q=80',
      'https://images.unsplash.com/photo-1554342872-034a06341eee?w=600&q=80',
      'https://images.unsplash.com/photo-1526178613552-2b45c6c302f0?w=600&q=80',
    ]
  },
  'experiential-promotions': {
    title: 'Experiential Promotions',
    description: 'Immersive brand activations that create unforgettable connections. We design and execute events that engage audiences and drive results.',
    heroImage: 'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1200&q=80',
    stats: [
      { number: '80+', label: 'Events Executed' },
      { number: '50k+', label: 'People Reached' },
      { number: '5/5', label: 'Client Rating' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1531058020387-3be344556be6?w=600&q=80',
      'https://images.unsplash.com/photo-1478147427282-58a87a120781?w=600&q=80',
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=600&q=80',
      'https://images.unsplash.com/photo-1528605248644-14dd04022da1?w=600&q=80',
    ]
  },
  'branding-strategy': {
    title: 'Branding Strategy',
    description: 'Strategic brand identity development that captures your essence and differentiates you from competitors. We build brands that resonate.',
    heroImage: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=1200&q=80',
    stats: [
      { number: '60+', label: 'Brands Built' },
      { number: '40+', label: 'Strategy Sessions' },
      { number: '100%', label: 'Client Commitment' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&q=80',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80',
      'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
      'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&q=80',
    ]
  }
};

// ===== CLIENTELE DATA =====
const clienteleData = {
  'sunking': {
    title: 'Sunking',
    description: 'Sunking is a leader in affordable solar systems, providing clean energy solutions for communities across Kenya. We partnered with them to create impactful branding that communicates their mission and drives community engagement.',
    heroImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=1200&q=80',
    stats: [
      { number: '12+', label: 'Branding Assets' },
      { number: '5+', label: 'Campaigns Launched' },
      { number: '100k+', label: 'People Reached' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=80',
      'https://images.unsplash.com/photo-1532996122725-e3c354a0b15b?w=600&q=80',
      'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80',
    ]
  },
  'world-vision': {
    title: 'World Vision',
    description: 'World Vision started in 1974 and has grown in Kenya, helping children and communities in 37 out of 47 counties.',
    heroImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&q=80',
    stats: [
      { number: '20+', label: 'Branding Assets' },
      { number: '10+', label: 'Campaigns Launched' },
      { number: '500k+', label: 'People Reached' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&q=80',
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?w=600&q=80',
      'https://images.unsplash.com/photo-1593113630400-ea4288922497?w=600&q=80',
      'https://images.unsplash.com/photo-1532622785990-d2c36a76f5a6?w=600&q=80',
    ]
  },
  'fresh-life': {
    title: 'Fresh Life',
    description: 'Fresh Life provides clean and safe sanitation solutions across Kenya. We helped them build a brand identity that communicates hygiene, dignity, and innovation.',
    heroImage: 'https://images.unsplash.com/photo-1532996122725-e3c354a0b15b?w=1200&q=80',
    stats: [
      { number: '8+', label: 'Campaigns' },
      { number: '50+', label: 'Installations' },
      { number: '100%', label: 'Brand Recognition' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1532996122725-e3c354a0b15b?w=600&q=80',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=600&q=80',
      'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=600&q=80',
      'https://images.unsplash.com/photo-1531834823707-a2f15777c8e7?w=600&q=80',
    ]
  },
  'mgas': {
    title: 'M-Gas',
    description: 'M-Gas empowers you with affordable and clean cooking solutions, to help you enjoy your cooking experience.',
    heroImage: 'images/clients/m_gas_logo.jfif',
    stats: [
      { number: '200+', label: 'Enterprise Partners' },
      { number: '150+', label: 'SME Clients' },
      { number: '4.9/5', label: 'Client Rating' },
    ],
    gallery: [
      'images/clients/mgas/mgas1.webp',
      'images/clients/mgas/mgas2.webp',
      'images/clients/mgas/mgas3.webp',
      'images/clients/mgas/mgas4.webp',
      'images/clients/mgas/mgas5.webp',
    ]
  },
  'telkom': {
    title: 'Telkom',
    description: "Kenya's leading telecommunications provider trusted by millions. We partnered with Telkom to deliver premium branding solutions across their expansive network and retail presence.",
    heroImage: 'images/clients/telkom-kenya.webp',
    stats: [
      { number: '50+', label: 'Retail Outlets' },
      { number: '30+', label: 'Branding Projects' },
      { number: '100%', label: 'Client Satisfaction' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80',
    ]
  },
  'uip-real-estate': {
    title: 'UIP Real Estate',
    description: "Kenya's trusted real estate company. Browse affordable land, residential, commercial & industrial properties.",
    heroImage: 'images/clients/uip_real_estate.jfif',
    stats: [
      { number: '100+', label: 'Branches Branded' },
      { number: '20+', label: 'Corporate Projects' },
      { number: '99%', label: 'Quality Rating' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
    ]
  },
  'rachier-and-amollo': {
    title: 'Rachier and Amollo LLP',
    description: 'Nationally recognized, dynamic and result oriented law firm.',
    heroImage: 'images/clients/rachier_and_amollo.png',
    stats: [
      { number: '40+', label: 'Projects Complete' },
      { number: '15+', label: 'Lounge Projects' },
      { number: '100%', label: 'Quality Assurance' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=600&q=80',
      'https://images.unsplash.com/photo-1542296332-2e4473faf563?w=600&q=80',
      'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=600&q=80',
      'https://images.unsplash.com/photo-1542818219-3daa53ab5d5b?w=600&q=80',
    ]
  },
  'sistema-bio': {
    title: 'Sistema Bio',
    description: 'Sistema.bio is a prefabricated modular biodigester package that includes a full suite of biogas appliances and connections.',
    heroImage: 'images/clients/sistema_bio.png',
    stats: [
      { number: '60+', label: 'Retail Activations' },
      { number: '25+', label: 'Branding Projects' },
      { number: '98%', label: 'Consumer Engagement' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&q=80',
      'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&q=80',
      'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&q=80',
      'https://images.unsplash.com/photo-1554866585-cd94860890b7?w=600&q=80',
    ]
  }
};

// ===== DOM REFS =====
const detailSection = document.getElementById('serviceDetail');
const detailContainer = document.getElementById('detailContainer');
const mainContent = document.getElementById('mainContent');
const body = document.body;
const logoLink = document.getElementById('logoLink');
const backBtn = document.getElementById('detailBackBtn');

let returnSectionId = '#services';

// ===== RENDER DETAIL VIEW =====
function renderDetail(id, type) {
  let data;
  let backSection = '#services';

  if (type === 'clientele') {
    data = clienteleData[id];
    backSection = '#clientele';
  } else {
    data = serviceData[id];
    backSection = '#services';
  }

  if (!data) {
    console.warn('No data found for:', id);
    return;
  }

  returnSectionId = backSection;

  const statsHTML = data.stats.map(stat =>
    `<div class="stat"><span>${stat.number}</span><label>${stat.label}</label></div>`
  ).join('');

  const galleryHTML = data.gallery.map(img =>
    `<img src="${img}" alt="${data.title} project" loading="lazy" />`
  ).join('');

  detailContainer.innerHTML = `
    <div class="detail-hero" style="background-image: url('${data.heroImage}')">
      <div class="detail-hero-overlay"></div>
      <div class="container detail-hero-content">
        <h1>${data.title}</h1>
        <p>${data.description}</p>
      </div>
    </div>
    <div class="container detail-body">
      <div class="detail-stats">
        ${statsHTML}
      </div>
      <h2>Project Gallery</h2>
      <div class="detail-gallery">
        ${galleryHTML}
      </div>
    </div>
  `;

  detailSection.classList.add('active');
  mainContent.style.display = 'none';
  body.classList.add('detail-active');
  detailSection.scrollTop = 0;
  window.scrollTo(0, 0);
}

// ===== HIDE DETAIL VIEW =====
function hideDetail() {
  detailSection.classList.remove('active');
  mainContent.style.display = 'block';
  body.classList.remove('detail-active');

  if (window.location.hash) {
    history.pushState(null, null, ' ');
  }

  const targetElement = document.querySelector(returnSectionId);
  if (targetElement) {
    const offset = 80;
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  } else {
    window.scrollTo(0, 0);
  }
}

// ===== BACK BUTTON =====
backBtn.addEventListener('click', hideDetail);

// ===== LOGO CLICK =====
logoLink.addEventListener('click', (e) => {
  e.preventDefault();
  if (detailSection.classList.contains('active')) {
    hideDetail();
  } else {
    window.scrollTo(0, 0);
    window.location.hash = '';
  }
});

// ===== HASH ROUTING =====
function handleHashChange() {
  const hash = window.location.hash;
  if (hash.startsWith('#service-')) {
    const id = hash.replace('#service-', '');
    if (serviceData[id]) {
      renderDetail(id, 'service');
      return;
    }
  } else if (hash.startsWith('#clientele-')) {
    const id = hash.replace('#clientele-', '');
    if (clienteleData[id]) {
      renderDetail(id, 'clientele');
      return;
    }
  }
  if (detailSection.classList.contains('active')) {
    hideDetail();
  }
}

window.addEventListener('hashchange', handleHashChange);

// ===== CLICK HANDLERS =====
// Services – card click
document.querySelectorAll('.services__card').forEach(card => {
  card.addEventListener('click', (e) => {
    if (e.target.closest('.services__card-btn')) return;
    const serviceId = card.dataset.service;
    if (serviceId && serviceData[serviceId]) {
      window.location.hash = `service-${serviceId}`;
      renderDetail(serviceId, 'service');
    }
  });
});

// Services – button click
document.querySelectorAll('.services__card-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const serviceId = btn.dataset.service;
    if (serviceId && serviceData[serviceId]) {
      window.location.hash = `service-${serviceId}`;
      renderDetail(serviceId, 'service');
    }
  });
});

// Clientele – card click
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

// Clientele – button click
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

// ===== PRELOADER =====
window.addEventListener('load', () => {
  document.getElementById('preloader').classList.add('hidden');
  if (window.location.hash) {
    handleHashChange();
  }
});

// ===== SCROLL PROGRESS =====
const progressBar = document.getElementById('scrollProgress');
window.addEventListener('scroll', () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  progressBar.style.width = (scrollTop / docHeight) * 100 + '%';
});

// ===== HEADER SCROLL =====
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 80);
});

// ===== ACTIVE NAV LINK =====
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__link');

function updateActiveLink() {
  let current = '';
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + current) {
      link.classList.add('active');
    }
  });
}

window.addEventListener('scroll', updateActiveLink);
window.addEventListener('load', updateActiveLink);
window.addEventListener('hashchange', updateActiveLink);

// ===== NAV TOGGLE =====
const navToggle = document.getElementById('navToggle');
const navList = document.querySelector('.nav__list');
navToggle.addEventListener('click', () => {
  navList.classList.toggle('open');
  navToggle.classList.toggle('open');
});
document.querySelectorAll('.nav__link').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    navToggle.classList.remove('open');
  });
});

// ===== THEME TOGGLE =====
const themeToggle = document.getElementById('themeToggle');
const themeIcon = document.getElementById('themeIcon');
const htmlRoot = document.getElementById('htmlRoot');
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlRoot.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener('click', () => {
  const current = htmlRoot.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  htmlRoot.setAttribute('data-theme', next);
  localStorage.setItem('theme', next);
  updateThemeIcon(next);
});

function updateThemeIcon(theme) {
  themeIcon.className = theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun';
}

// ===== TYPING =====
const typedElement = document.getElementById('typedText');
const words = ['Experiential Marketing Agency', 'Out of Home Experts', 'Branding Solution Providers'];
let wordIndex = 0, charIndex = 0, isDeleting = false, typingSpeed = 100;

function typeEffect() {
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typedElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typedElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 120;
  }
  if (!isDeleting && charIndex === currentWord.length) { isDeleting = true;
    typingSpeed = 2000; } else if (isDeleting && charIndex === 0) { isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typingSpeed = 500; }
  setTimeout(typeEffect, typingSpeed);
}
typeEffect();

// ===== CAROUSEL =====
let currentSlide = 0;
const slides = document.querySelectorAll('.hero__slide');
const dots = document.querySelectorAll('.hero__dots .dot');

function showSlide(index) {
  slides.forEach((s, i) => s.classList.toggle('active', i === index));
  dots.forEach((d, i) => d.classList.toggle('active', i === index));
}
dots.forEach(dot => {
  dot.addEventListener('click', () => {
    currentSlide = parseInt(dot.dataset.slide);
    showSlide(currentSlide);
  });
});
setInterval(() => {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}, 5000);

// ===== ENHANCED COUNTER WITH SMOOTH ANIMATION =====
function animateCounter(element, target, duration = 2500) {
  const start = 0;
  const startTime = performance.now();

  function updateCounter(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    const current = Math.floor(eased * target);
    element.textContent = current + '+';
    if (progress < 1) {
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + '+';
    }
  }
  requestAnimationFrame(updateCounter);
}

const counterObserverNew = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const count = parseInt(target.dataset.count);
      animateCounter(target, count, 2500);
      counterObserverNew.unobserve(target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.hero__stat-number').forEach(c => {
  counterObserverNew.observe(c);
});

// ===== SCROLL REVEAL (Section fade-in) =====
const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.about, .services, .clientele, .testimonials, .contact').forEach(section => {
  section.classList.add('section-hidden');
  sectionObserver.observe(section);
});

// ===== SERVICE CARD REVEAL (Staggered) =====
const serviceCards = document.querySelectorAll('.services__card');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), index * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: '0px 0px -50px 0px' });
serviceCards.forEach(card => revealObserver.observe(card));

// ===== FILTER =====
const filterBtns = document.querySelectorAll('.filter__btn');
const servicesGrid = document.getElementById('servicesGrid');
filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    const cards = servicesGrid.querySelectorAll('.services__card');
    cards.forEach(card => {
      const category = card.dataset.category;
      if (filter === 'all' || category === filter) {
        card.classList.remove('hidden-card');
        card.classList.remove('visible');
        setTimeout(() => card.classList.add('visible'), 50);
      } else {
        card.classList.add('hidden-card');
        card.classList.remove('visible');
      }
    });
  });
});

// ===== 3D TILT =====
document.querySelectorAll('.services__card, .clientele__item').forEach(el => {
  el.addEventListener('mousemove', (e) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left, y = e.clientY - rect.top;
    const rotateX = (y - rect.height / 2) / 20, rotateY = (rect.width / 2 - x) / 20;
    el.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)';
  });
});

// ===== PARALLAX ON HERO =====
window.addEventListener('scroll', function() {
  const scrollY = window.scrollY;
  const heroSlides = document.querySelectorAll('.hero__slide');
  if (heroSlides.length > 0 && scrollY < window.innerHeight) {
    const offset = scrollY * 0.15;
    heroSlides.forEach(slide => {
      slide.style.transform = `translateY(${offset * 0.3}px) scale(1.05)`;
    });
  }
});

// ===== FLOATING CTA HIDE/SHOW ON SCROLL =====
let lastScrollY = window.scrollY;
const cta = document.getElementById('floatingCta');

window.addEventListener('scroll', function() {
  const currentScrollY = window.scrollY;
  if (currentScrollY > lastScrollY && currentScrollY > 300) {
    cta.style.transform = 'translateY(80px)';
    cta.style.opacity = '0';
  } else {
    cta.style.transform = 'translateY(0)';
    cta.style.opacity = '1';
  }
  lastScrollY = currentScrollY;
});

// ===== SMOOTH SCROLL FOR FLOATING CTA =====
if (cta) {
  cta.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const offset = 80;
      const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({ top: targetPosition, behavior: 'smooth' });
    }
  });
}

// ===== TESTIMONIALS AUTO-SCROLL (Mobile) =====
const testimonialCards = document.querySelectorAll('.testimonial__card');
if (window.innerWidth <= 768 && testimonialCards.length > 1) {
  let testimonialIndex = 0;
  testimonialCards.forEach((card, i) => {
    if (i !== 0) card.style.display = 'none';
  });
  setInterval(() => {
    testimonialIndex = (testimonialIndex + 1) % testimonialCards.length;
    testimonialCards.forEach((card, i) => {
      card.style.display = i === testimonialIndex ? 'block' : 'none';
    });
  }, 5000);
}

// ===== KEYBOARD SUPPORT =====
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape' && detailSection.classList.contains('active')) {
    hideDetail();
  }
});

// ===== LAZY LOAD IMAGES =====
document.addEventListener('DOMContentLoaded', function() {
  const lazyImages = document.querySelectorAll('img[loading="lazy"]');
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.classList.add('loaded');
          imageObserver.unobserve(img);
        }
      });
    });
    lazyImages.forEach(img => {
      img.classList.add('lazy');
      imageObserver.observe(img);
    });
  }
});

// ===== TOAST =====
function showToast(message, type = 'success') {
  const container = document.getElementById('toastContainer');
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';
  toast.innerHTML = `<i class="fas ${icon}"></i> ${message}`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ===== CONTACT FORM =====
const form = document.getElementById('contactForm');
const serviceLabels = {
  'vehicle-branding': 'Vehicle Branding',
  'shop-branding': 'Shop Branding',
  'signages': 'Signages',
  'wall-branding': 'Wall Branding',
  'office-branding': 'Office Branding',
  'printing-design': 'Printing & Design',
  'merchandise-branding': 'Merchandise Branding',
  'experiential-promotions': 'Experiential Promotions',
  'branding-strategy': 'Branding Strategy',
  'general-inquiry': 'General Inquiry'
};

form.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const service = document.getElementById('service').value;
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !service || !message) {
    showToast('Please fill in all required fields.', 'error');
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    showToast('Please enter a valid email address.', 'error');
    return;
  }

  const serviceName = serviceLabels[service] || service;

  console.log('=== New Inquiry ===');
  console.log(`Name: ${name}`);
  console.log(`Email: ${email}`);
  console.log(`Phone: ${phone || 'Not provided'}`);
  console.log(`Service: ${serviceName}`);
  console.log(`Message: ${message}`);
  console.log('===================');

  showToast('Sending your message...', 'success');

  setTimeout(() => {
    showToast(
      `Thank you ${name}! We've received your inquiry about ${serviceName}. We'll get back to you soon.`,
      'success'
    );
    form.reset();
  }, 1500);
});

// ===== SCROLL TOP =====
const scrollTopBtn = document.getElementById('scrollTop');
window.addEventListener('scroll', () => {
  scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
});
scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// ===== COOKIE CONSENT =====
const CONSENT_COOKIE = 'cookie_consent';

function setCookie(name, value, days = 365) {
  const expiry = new Date();
  expiry.setDate(expiry.getDate() + days);
  document.cookie = `${name}=${value}; expires=${expiry.toUTCString()}; path=/; SameSite=Lax; Secure`;
}

function getCookie(name) {
  const decoded = decodeURIComponent(document.cookie);
  const arr = decoded.split('; ');
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].indexOf(`${name}=`) === 0) {
      return arr[i].substring(name.length + 1);
    }
  }
  return null;
}

function deleteCookie(name) {
  document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
}

function getConsentStatus() {
  const cookieVal = getCookie(CONSENT_COOKIE);
  if (cookieVal) return cookieVal;
  const localVal = localStorage.getItem(CONSENT_COOKIE);
  if (localVal) {
    setCookie(CONSENT_COOKIE, localVal);
    return localVal;
  }
  return null;
}

function saveConsent(status) {
  setCookie(CONSENT_COOKIE, status);
  localStorage.setItem(CONSENT_COOKIE, status);
}

function acceptAll() {
  saveConsent('accepted');
  document.getElementById('cookieBanner').classList.remove('active');
  console.log('✅ Cookies accepted.');
  if (typeof showToast === 'function') {
    showToast('✅ Cookies accepted.', 'success');
  }
}

function decline() {
  saveConsent('declined');
  document.getElementById('cookieBanner').classList.remove('active');
  console.log('❌ Cookies declined.');
  if (typeof showToast === 'function') {
    showToast('Cookies declined.', 'success');
  }
}

function showBanner() {
  setTimeout(() => {
    document.getElementById('cookieBanner').classList.add('active');
  }, 800);
}

function revokeConsent() {
  deleteCookie(CONSENT_COOKIE);
  localStorage.removeItem(CONSENT_COOKIE);
  showBanner();
  console.log('🔄 Consent revoked.');
}

const consentStatus = getConsentStatus();
if (!consentStatus) {
  showBanner();
} else if (consentStatus === 'accepted') {
  console.log('🔁 Consent already accepted.');
} else {
  console.log('🚫 Consent declined.');
}

document.getElementById('cookieAccept').addEventListener('click', acceptAll);
document.getElementById('cookieDecline').addEventListener('click', decline);

const preferencesLink = document.getElementById('cookiePreferencesLink');
if (preferencesLink) {
  preferencesLink.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    revokeConsent();
    if (typeof showToast === 'function') {
      showToast('Cookie preferences reset. Please make your choice.', 'success');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

document.getElementById('cookieLearnMore').addEventListener('click', function(e) {
  e.preventDefault();
  if (typeof showToast === 'function') {
    showToast('Privacy Policy: We use cookies to improve your experience.', 'success');
  }
});