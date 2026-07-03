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
      { number: '99%', label: 'On-Time Delivery' },
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
      { number: '98%', label: 'Employee Satisfaction' },
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
      { number: '99.9%', label: 'Quality Accuracy' },
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
      { number: '4.9/5', label: 'Client Rating' },
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

// ===== CLIENTELE DATA (New!) =====
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
    title: 'SimpliDelivered',
    description: 'SimpliDelivered promises "Goodness Guaranteed". We helped them build a cohesive brand identity that emphasizes reliability, freshness, and customer trust across their delivery network.',
    heroImage: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=1200&q=80',
    stats: [
      { number: '20+', label: 'Branded Vehicles' },
      { number: '15+', label: 'Storefronts' },
      { number: '98%', label: 'Brand Recall' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&q=80',
      'https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600&q=80',
      'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&q=80',
      'https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=600&q=80',
    ]
  },
  'fresh-life': {
    title: 'Fresh Life',
    description: 'Dimension Data challenged us to brand their corporate environments with a "Let\'s Do More" ethos. We delivered modern, tech-forward office branding that inspires innovation and collaboration.',
    heroImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80',
    stats: [
      { number: '8+', label: 'Offices Branded' },
      { number: '50+', label: 'Meeting Rooms' },
      { number: '100%', label: 'Employee Approval' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80',
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80',
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
  description: "Kenya's leading telecommunications provider trusted by millions. We partnered with Safaricom to deliver premium branding solutions across their expansive network and retail presence.",
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
  description: 'Sistema.bio is a prefabricated modular biodigester package that includes a full suite of biogas appliances and connections',
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

let returnSectionId = '#services'; // Default to Services

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

  // Show detail, hide main content
  detailSection.classList.add('active');
  mainContent.style.display = 'none';
  body.classList.add('detail-active');
  detailSection.scrollTop = 0;
  window.scrollTo(0, 0);
}

// ===== HIDE DETAIL VIEW (Smart Return) =====
function hideDetail() {
  detailSection.classList.remove('active');
  mainContent.style.display = 'block';
  body.classList.remove('detail-active');

  // Remove hash to prevent re-trigger
  if (window.location.hash) {
    history.pushState(null, null, ' ');
  }

  // Scroll back to where the user was (Services or Clientele section)
  const targetElement = document.querySelector(returnSectionId);
  if (targetElement) {
    const offset = 80; // Account for fixed header
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  } else {
    window.scrollTo(0, 0);
  }
}

// ===== BACK BUTTON CLICK =====
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

// ===== HASH CHANGE ROUTING =====
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
  // If hash doesn't match any detail, ensure main content is shown
  if (detailSection.classList.contains('active')) {
    hideDetail();
  }
}

window.addEventListener('hashchange', handleHashChange);

// ===== CLICK HANDLERS =====
// Services
document.querySelectorAll('.services__card').forEach(card => {
  card.addEventListener('click', () => {
    const serviceId = card.dataset.service;
    if (serviceId && serviceData[serviceId]) {
      window.location.hash = `service-${serviceId}`;
      renderDetail(serviceId, 'service');
    }
  });
});

// Clientele (New!)
document.querySelectorAll('.clientele__item').forEach(item => {
  item.addEventListener('click', () => {
    const clientId = item.dataset.client;
    if (clientId && clienteleData[clientId]) {
      window.location.hash = `clientele-${clientId}`;
      renderDetail(clientId, 'clientele');
    }
  });
});

// ===== PRELOADER =====
window.addEventListener('load', () => {
  document.getElementById('preloader').classList.add('hidden');
  // Check initial hash
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

// ===== COUNTERS =====
const counters = document.querySelectorAll('.hero__stat-number');
const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = entry.target;
      const count = parseInt(target.dataset.count);
      let current = 0;
      const increment = Math.ceil(count / 50);
      const timer = setInterval(() => {
        current += increment;
        if (current >= count) {
          target.textContent = count + '+';
          clearInterval(timer);
        } else {
          target.textContent = current + '+';
        }
      }, 25);
      counterObserver.unobserve(target);
    }
  });
}, { threshold: 0.5 });
counters.forEach(c => counterObserver.observe(c));

// ===== SCROLL REVEAL =====
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
const status = document.getElementById('formStatus');

// Service labels for readable output
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

  // Validation
  if (!name || !email || !service || !message) {
    showToast('Please fill in all required fields.', 'error');
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    showToast('Please enter a valid email address.', 'error');
    return;
  }

  const serviceName = serviceLabels[service] || service;

  // Log the full message (replace with API call later)
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
      `✅ Thank you ${name}! We've received your inquiry about ${serviceName}. We'll get back to you soon.`,
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

// ===== SERVICE CARD & BUTTON CLICK HANDLERS =====
// Handle card click (entire card)
document.querySelectorAll('.services__card').forEach(card => {
  card.addEventListener('click', (e) => {
    // If the click target is the button itself, let the button handler take over
    if (e.target.closest('.services__card-btn')) return;
    
    const serviceId = card.dataset.service;
    if (serviceId && serviceData[serviceId]) {
      window.location.hash = `service-${serviceId}`;
      renderDetail(serviceId, 'service');
    }
  });
});

// Handle button click (separate, with stopPropagation to avoid double-trigger)
document.querySelectorAll('.services__card-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent card click from firing
    const serviceId = btn.dataset.service;
    if (serviceId && serviceData[serviceId]) {
      window.location.hash = `service-${serviceId}`;
      renderDetail(serviceId, 'service');
    }
  });
});

// ===== CLIENTELE CLICK HANDLERS =====
document.querySelectorAll('.clientele__item').forEach(item => {
  item.addEventListener('click', () => {
    const clientId = item.dataset.client;
    if (clientId && clienteleData[clientId]) {
      window.location.hash = `clientele-${clientId}`;
      renderDetail(clientId, 'clientele');
    }
  });
});

// ===== CLIENTELE CLICK HANDLERS =====
// Card click (entire card)
document.querySelectorAll('.clientele__item').forEach(item => {
  item.addEventListener('click', (e) => {
    // If the click is on the button itself, let the button handler take over
    if (e.target.closest('.clientele__btn')) return;

    const clientId = item.dataset.client;
    if (clientId && clienteleData[clientId]) {
      window.location.hash = `clientele-${clientId}`;
      renderDetail(clientId, 'clientele');
    }
  });
});

// Button click (separate, prevents double-trigger)
document.querySelectorAll('.clientele__btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.stopPropagation(); // Prevent card click from firing
    const clientId = btn.dataset.client;
    if (clientId && clienteleData[clientId]) {
      window.location.hash = `clientele-${clientId}`;
      renderDetail(clientId, 'clientele');
    }
  });
});


// Cookies
// ===== COOKIE PREFERENCES - NO RELOAD =====
const preferencesLink = document.getElementById('cookiePreferencesLink');

if (preferencesLink) {
  preferencesLink.addEventListener('click', function(e) {
    e.preventDefault(); // Prevent any default behavior
    e.stopPropagation(); // Stop event bubbling

    // Revoke consent
    revokeConsent();

    // Show a confirmation toast (optional)
    if (typeof showToast === 'function') {
      showToast('🍪 Cookie preferences reset. Please make your choice.', 'success');
    }

    // Smooth scroll to top so user sees the banner
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

