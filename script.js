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

// ===== CLIENTELE DATA =====
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
  return `<div class="clientele__item" data-client="${data.client}"><div class="clientele__card-content"><img src="${data.logo}" alt="${data.name}" loading="lazy" /><span>${data.name}</span><p class="clientele__tagline">${data.tag}</p></div><div class="clientele__overlay"><button class="clientele__btn" data-client="${data.client}">View Work <i class="fas fa-arrow-right"></i></button></div></div>`;
}
function buildClientTrack() { clientTrack.innerHTML = originalClients.map(createClientItem).join('') + originalClients.map(createClientItem).join(''); attachClientListeners(); }
buildClientTrack();
function attachClientListeners() {
  document.querySelectorAll('.clientele__item').forEach(item => {
    item.addEventListener('click', (e) => { if (e.target.closest('.clientele__btn')) return; const id = item.dataset.client; if (clienteleData[id]) { window.location.hash = `clientele-${id}`; renderDetail(id, 'clientele'); } });
  });
  document.querySelectorAll('.clientele__btn').forEach(btn => {
    btn.addEventListener('click', (e) => { e.stopPropagation(); const id = btn.dataset.client; if (clienteleData[id]) { window.location.hash = `clientele-${id}`; renderDetail(id, 'clientele'); } });
  });
}

// ===== RENDER DETAIL VIEW =====
function renderDetail(id, type) {
  const data = type === 'clientele' ? clienteleData[id] : serviceData[id];
  if (!data) return;
  returnSectionId = type === 'clientele' ? '#clientele' : '#services';
  const statsHTML = data.stats.map(s => `<div class="stat"><span>${s.number}</span><label>${s.label}</label></div>`).join('');
  let mainHTML;
  if (data.strategies) {
    mainHTML = `<h2>Our Expertise</h2><div class="strategies-grid">${data.strategies.map((s,i) => `<div class="strategy-item" style="animation-delay:${i*0.08}s"><div class="strategy-number">${String(i+1).padStart(2,'0')}</div><div class="strategy-content"><h4>${s.title}</h4><p>${s.desc}</p></div></div>`).join('')}</div>`;
  } else {
    mainHTML = (data.gallery && data.gallery.length) ? `<h2>Project Gallery</h2><div class="detail-gallery">${data.gallery.map(img => `<div class="gallery-item"><img src="${img}" alt="${data.title}" loading="lazy" onload="this.classList.add('loaded')" /></div>`).join('')}</div>` : '<p style="text-align:center;color:var(--color-gray);">Gallery coming soon.</p>';
  }
  detailContainer.innerHTML = `<div class="detail-hero" style="background-image:url('${data.heroImage}')"><div class="container detail-hero-content"><h1>${data.title}</h1><p>${data.description}</p></div></div><div class="container detail-body"><div class="detail-stats">${statsHTML}</div>${mainHTML}</div>`;
  detailSection.classList.add('active'); mainContent.style.display = 'none'; body.classList.add('detail-active'); window.scrollTo(0,0);
}
function hideDetail() {
  detailSection.classList.remove('active'); mainContent.style.display = 'block'; body.classList.remove('detail-active');
  history.pushState(null,null,' '); const t = document.querySelector(returnSectionId);
  if(t) window.scrollTo({top:t.getBoundingClientRect().top+window.scrollY-80,behavior:'smooth'}); else window.scrollTo(0,0);
}
backBtn.addEventListener('click', hideDetail);
logoLink.addEventListener('click', (e) => { e.preventDefault(); if(detailSection.classList.contains('active')) hideDetail(); else window.scrollTo(0,0); });
function handleHashChange() {
  const h = window.location.hash;
  if(h.startsWith('#service-')){ const id=h.replace('#service-',''); if(serviceData[id]) renderDetail(id,'service'); }
  else if(h.startsWith('#clientele-')){ const id=h.replace('#clientele-',''); if(clienteleData[id]) renderDetail(id,'clientele'); }
  else if(detailSection.classList.contains('active')) hideDetail();
}
window.addEventListener('hashchange', handleHashChange);

// Service cards
document.querySelectorAll('.services__card').forEach(card => {
  card.addEventListener('click', (e) => { if(e.target.closest('.services__card-btn')) return; const id=card.dataset.service; if(serviceData[id]){ window.location.hash=`service-${id}`; renderDetail(id,'service'); } });
});
document.querySelectorAll('.services__card-btn').forEach(btn => {
  btn.addEventListener('click', (e) => { e.stopPropagation(); const id=btn.dataset.service; if(serviceData[id]){ window.location.hash=`service-${id}`; renderDetail(id,'service'); } });
});

// ===== LIGHTBOX =====
(function(){
  const st={images:[],currentIndex:0,isOpen:false,scale:1,minScale:0.5,maxScale:4,translateX:0,translateY:0};
  let lb,imgEl,wrapEl,counterEl,zoomEl;
  function create(){ if(document.getElementById('lightbox')) return;
    const h=`<div class="lightbox" id="lightbox"><div class="lightbox__overlay"></div><button class="lightbox__close" title="Close"><i class="fas fa-times"></i></button><div class="lightbox__counter" id="lightboxCounter"></div><button class="lightbox__prev"><i class="fas fa-chevron-left"></i></button><button class="lightbox__next"><i class="fas fa-chevron-right"></i></button><div class="lightbox__container"><div class="lightbox__image-wrapper" id="lightboxWrapper"><img src="" alt="" id="lightboxImage" /></div></div><div class="lightbox__zoom-controls"><button class="lightbox__zoom-out"><i class="fas fa-minus"></i></button><span class="lightbox__zoom-level" id="lightboxZoomLevel">100%</span><button class="lightbox__zoom-in"><i class="fas fa-plus"></i></button><button class="lightbox__zoom-reset"><i class="fas fa-expand"></i></button></div></div>`;
    document.body.insertAdjacentHTML('beforeend',h);
    lb=document.getElementById('lightbox'); imgEl=document.getElementById('lightboxImage'); wrapEl=document.getElementById('lightboxWrapper'); counterEl=document.getElementById('lightboxCounter'); zoomEl=document.getElementById('lightboxZoomLevel');
    lb.querySelector('.lightbox__close').addEventListener('click',close);
    lb.querySelector('.lightbox__prev').addEventListener('click',()=>go(st.currentIndex-1));
    lb.querySelector('.lightbox__next').addEventListener('click',()=>go(st.currentIndex+1));
    lb.querySelector('.lightbox__zoom-in').addEventListener('click',()=>{st.scale=Math.min(st.scale*1.25,st.maxScale);apply();});
    lb.querySelector('.lightbox__zoom-out').addEventListener('click',()=>{st.scale=Math.max(st.scale/1.25,st.minScale);apply();});
    lb.querySelector('.lightbox__zoom-reset').addEventListener('click',()=>{st.scale=1;st.translateX=0;st.translateY=0;apply();});
    lb.querySelector('.lightbox__overlay').addEventListener('click',close);
    document.addEventListener('keydown',(e)=>{if(!st.isOpen)return; if(e.key==='Escape')close(); if(e.key==='ArrowLeft'){e.preventDefault();go(st.currentIndex-1);} if(e.key==='ArrowRight'){e.preventDefault();go(st.currentIndex+1);}});
    imgEl.addEventListener('load',function(){wrapEl.classList.remove('loading');this.classList.add('loaded');});
  }
  function open(i){ if(!st.images.length)return; create(); st.isOpen=true; st.currentIndex=Math.min(i,st.images.length-1); st.scale=1; st.translateX=0; st.translateY=0; wrapEl.classList.add('loading'); imgEl.src=st.images[st.currentIndex]; updateCounter(); lb.classList.add('active'); document.body.style.overflow='hidden'; }
  function close(){ st.isOpen=false; lb.classList.remove('active'); document.body.style.overflow=''; st.scale=1; imgEl.style.transform=''; wrapEl.classList.remove('loading'); }
  function go(i){ if(i<0)i=st.images.length-1; if(i>=st.images.length)i=0; st.currentIndex=i; st.scale=1; st.translateX=0; st.translateY=0; wrapEl.classList.add('loading'); imgEl.src=st.images[i]; updateCounter(); }
  function updateCounter(){ if(counterEl)counterEl.textContent=`${st.currentIndex+1} / ${st.images.length}`; }
  function apply(){ if(imgEl)imgEl.style.transform=`scale(${st.scale}) translate(${st.translateX}px, ${st.translateY}px)`; if(zoomEl)zoomEl.textContent=Math.round(st.scale*100)+'%'; }
  detailContainer.addEventListener('click',function(e){ const img=e.target.closest('.detail-gallery img'); if(!img)return; const g=img.closest('.detail-gallery'); if(!g)return; const all=Array.from(g.querySelectorAll('img')).map(el=>el.src); const idx=all.indexOf(img.src); if(idx===-1)return; st.images=all; open(idx); });
})();

// ===== FORM =====
const form=document.getElementById('contactForm');
if(form){ form.addEventListener('submit',(e)=>{ e.preventDefault(); const n=document.getElementById('name').value.trim(),em=document.getElementById('email').value.trim(),s=document.getElementById('service').value,m=document.getElementById('message').value.trim(); if(!n||!em||!s||!m)return showToast('Please fill all required fields.','error'); if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em))return showToast('Invalid email address.','error'); showToast('Message sent successfully!','success'); form.reset(); }); }

// ===== COUNTER =====
function animateCounter(el,t){ let c=0; const s=()=>{if(c<t){c++;el.textContent=c+'+';requestAnimationFrame(s);}else el.classList.add('bounced');}; s(); }
const co=new IntersectionObserver((e)=>{e.forEach(en=>{if(en.isIntersecting){const t=parseInt(en.target.dataset.count);animateCounter(en.target,t);co.unobserve(en.target);}})},{threshold:0.5});
document.querySelectorAll('.about__stat-number').forEach(c=>co.observe(c));

// ===== SCROLL REVEAL =====
const rs=new IntersectionObserver((e)=>{e.forEach(en=>{if(en.isIntersecting)en.target.classList.add('section-visible');})},{threshold:0.1});
document.querySelectorAll('.about,.services,.clientele,.testimonials,.contact,.video-showcase').forEach(s=>{s.classList.add('section-hidden');rs.observe(s);});

// ===== SERVICE STAGGER =====
document.querySelectorAll('.services__card').forEach((c,i)=>{const o=new IntersectionObserver((e)=>{e.forEach(en=>{if(en.isIntersecting){setTimeout(()=>en.target.classList.add('visible'),i*80);o.unobserve(en.target);}})},{threshold:0.15});o.observe(c);});

// ===== FILTER =====
document.querySelectorAll('.filter__btn').forEach(b=>{b.addEventListener('click',()=>{document.querySelectorAll('.filter__btn').forEach(x=>x.classList.remove('active'));b.classList.add('active');const f=b.dataset.filter;document.querySelectorAll('.services__card').forEach(c=>{c.classList.toggle('hidden-card',f!=='all'&&c.dataset.category!==f);});});});

// ===== NAV =====
const navToggle=document.getElementById('navToggle'),navList=document.querySelector('.nav__list');
if(navToggle){navToggle.addEventListener('click',()=>{navList.classList.toggle('open');navToggle.classList.toggle('open');navToggle.setAttribute('aria-expanded',navList.classList.contains('open'));});}
document.querySelectorAll('.nav__list a').forEach(l=>{l.addEventListener('click',()=>{navList.classList.remove('open');navToggle.classList.remove('open');if(navToggle)navToggle.setAttribute('aria-expanded','false');});});

// ===== SCROLL TOP =====
const stb=document.getElementById('scrollTop');
window.addEventListener('scroll',()=>{if(stb)stb.classList.toggle('visible',window.scrollY>400);});
if(stb)stb.addEventListener('click',()=>window.scrollTo({top:0,behavior:'smooth'}));

// ===== PRELOADER =====
window.addEventListener('load',()=>{document.getElementById('preloader').classList.add('hidden');if(window.location.hash)handleHashChange();});

// ===== HEADER =====
const header=document.getElementById('header');
window.addEventListener('scroll',()=>header.classList.toggle('scrolled',window.scrollY>80));

// ===== CAROUSEL =====
let cs=0;const slides=document.querySelectorAll('.hero__slide');
setInterval(()=>{slides.forEach((s,i)=>s.classList.toggle('active',i===cs));cs=(cs+1)%slides.length;},5000);

// ===== TOAST =====
function showToast(m,t='success'){const c=document.getElementById('toastContainer');const d=document.createElement('div');d.className=`toast ${t}`;d.innerHTML=`<i class="fas fa-${t==='success'?'check-circle':'exclamation-circle'}"></i> ${m}`;c.appendChild(d);setTimeout(()=>d.remove(),4000);}