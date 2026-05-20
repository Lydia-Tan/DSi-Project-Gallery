// ── BUBBLE BACKGROUND ──
(function initBubbles() {
  const container = document.getElementById('bgBubbles');
  for (let i = 0; i < 18; i++) {
    const b = document.createElement('div');
    b.className = 'bubble';
    const size = 30 + Math.random() * 120;
    b.style.cssText = `
      width:${size}px;
      height:${size}px;
      left:${Math.random() * 100}%;
      animation-duration:${12 + Math.random() * 20}s;
      animation-delay:${-Math.random() * 20}s;
    `;
    container.appendChild(b);
  }
})();

// ── PROJECT DATA ──
const projects = [
  {
    title: "VIRAL LIVE PHOTOBOOTH DRAWING",
    tag: "Interactive Art",
    year: "2025",
    desc: "Designed and ran a pop-up where I drew strangers in real time, giving them a hand-drawn 'photo booth' portrait. I wanted to create a playful experience for people where they can take home something handmade and personal. The next day I had my first taste of virality: 6.8M views and 592K likes on Twitter of people discovering my art account, resulting in over 1k+ followers overnight.",
    details: ["LINKS: MY ART, THE VIRAL POST","PHOTOS: 'PRINTED'", "BOGOS: BINTED"],
    cartBg: ["#ffd8a8", "#ffeecc"],
    cartAccent: "#cc6600",
    labelBg: ["#fff0cc", "#ffe4a0"],
    labelText: "#7a3a00",
    images: [
      { placeholder: true, bg: "#fce0b0", accent: "#cc6600", text: "THERMAL I" },
      { placeholder: true, bg: "#f8d4a0", accent: "#bb5500", text: "THERMAL II" },
    ]
  },
  {
    title: "VALENTINE'S DAY WEBSITE",
    tag: "Frontend Web Dev",
    year: "2024",
    desc: "Built a website for lovebugs to ask the very essential question: 'Will you be my valentine?' It was designed and coded from scratch with a very subtle, silly twist. Focused on making something that was simple yet humorous.",
    details: ["BUILT WITH: HTML/CSS/JS", "VALENTINE: SECURED"],
    cartBg: ["#ffd8a8", "#ffeecc"],
    cartAccent: "#cc6600",
    labelBg: ["#fff0cc", "#ffe4a0"],
    labelText: "#7a3a00",
    images: [
      { placeholder: true, bg: "#fce0b0", accent: "#cc6600", text: "THERMAL I" },
      { placeholder: true, bg: "#f8d4a0", accent: "#bb5500", text: "THERMAL II" },
    ]
  },
  {
    title: "IPOD CLASSIC MOD",
    tag: "Electronics Modding",
    year: "2025",
    desc: "Wanted to own my music again, inspiring me to purchase and mod a 60GB 5th gen iPod Classic where I upgraded the battery, swapped the HDD for an SSD, replaced the shell, changed the OS to Rockbox, and added Bluetooth capabilities.",
    details: ["CURRENTLY LISTENING TO: oklou, Glass Beach, Racing Mount Pleasant, Raveena, Sonic Adventure 2 OST", "COMPLETED MODS: IPod Classic, DSi", "UPCOMING MODS: Circuit bending cameras, PSP, Gamecube"],
    cartBg: ["#b8f0d0", "#d8fce8"],
    cartAccent: "#1a8a4a",
    labelBg: ["#d0f8e4", "#b4f0cc"],
    labelText: "#0a5a2a",
    images: [
      { placeholder: true, bg: "#c4f0d8", accent: "#1a8a4a", text: "GRID POEMS I" },
      { placeholder: true, bg: "#b4e8c8", accent: "#148040", text: "GRID POEMS II" },
    ]
  },
  {
    title: "CUSTOM OCTOPUS RING",
    tag: "Metalworking and Jewelrymaking",
    year: "2024",
    desc: "Took on my first 'client' (my dad) in the jewelry world, consulting, designing, and fabricating a piece that aligned with his style and interests -- I created a custom octopus signet ring with my family name on the top. Along the way, I designed and created a few other pieces: a Howl's Moving Castle-inspired ring for myself, some wedding bands for my parents, Pokemon earrings for my sister, and many, many jumprings.",
    details: ["MATERIALS: COPPER, NICKEL, BRASS, SILVER"],
    cartBg: ["#a8f4f0", "#ccfcf8"],
    cartAccent: "#009988",
    labelBg: ["#c4fcf8", "#a8f4ee"],
    labelText: "#006655",
    images: [
      { placeholder: true, bg: "#b8f8f4", accent: "#009988", text: "FREQUENCY I" },
      { placeholder: true, bg: "#a8f4f0", accent: "#008877", text: "FREQUENCY II" },
    ]
  },
  {
    title: "TAMAGOTCHI BAG HOOK",
    tag: "Industrial Design",
    year: "2025",
    desc: "A fully functional bag hook made from metal and wood...and a nostalgic loveletter to the game of my childhood. Taking influence from shadowboxes, I designed each layer to be modular, allowing me to change out the screen design anytime.",
    details: ["MATERIALS: METAL + WOOD", "TOOLS: PLASMA CUTTER, WELDER, BANDSAW, DRILL PRESS", "CONCEPT: CREATIVITY IN THE ORDINARY"],
    cartBg: ["#a8d8f8", "#c8eeff"],
    cartAccent: "#2a88cc",
    labelBg: ["#d0eeff", "#b8dcf8"],
    labelText: "#1a4a7a",
    images: [
      { placeholder: true, bg: "#c0dcf4", accent: "#2a78bc", text: "VOID ATLAS I" },
      { placeholder: true, bg: "#b0d0ec", accent: "#1a68ac", text: "VOID ATLAS II" },
      { placeholder: true, bg: "#c8e4f8", accent: "#3a88cc", text: "VOID ATLAS III" },
    ]
  },
  {
    title: "PERSIMMON PILLOW",
    tag: "Textile Design",
    year: "2024",
    desc: "Needed a decorative couch pillow and craved whimsy in my space. Designed a fabric pattern from scratch for the first time, then cut, constructed, and sewed a 14-inch persimmon pillow.",
    details: ["PROS: VERY HUGGABLE, PLAYFUL DESIGN, COLORFUL", "CONS: CONSTANT PERSIMMON CRAVINGS"],
    cartBg: ["#f0f4f8", "#e8eef4"],
    cartAccent: "#6688aa",
    labelBg: ["#f4f8fc", "#e8eef8"],
    labelText: "#3a5a7a",
    images: [
      { placeholder: true, bg: "#eef2f8", accent: "#6688aa", text: "SALT FLAT I" },
      { placeholder: true, bg: "#e8ecf4", accent: "#5a7898", text: "SALT FLAT II" },
      { placeholder: true, bg: "#f0f4fa", accent: "#7898b8", text: "SALT FLAT III" },
    ]
  },
  {
    title: "SKETCHBOOK/ART STUDIES",
    tag: "Illustration",
    year: "2014-PRESENT",
    desc: "A decade-long practice of observation and visual study. I draw constantly — sketchbooks, notes app, whatever's nearby — not just to create, but to train how I see and think. The goal is both honing technical skills alongside developing a sharper eye. I strive to combine what is visible (objects, proportions) and what is invisible (atmosphere, feelings) to create a visual story.",
    details: ["MEDIUMS: PEN, COLORED PENCILS, WATERCOLORS, DIGITAL", "SUBJECTS: LIFE AND COLOR STUDIES, GESTURE AND FIGURE DRAWINGS, TRANSLATING MEMORIES, EMOTIONS, AND IDEAS VISUALLY"],
    cartBg: ["#e8c8f8", "#f4e0ff"],
    cartAccent: "#8840cc",
    labelBg: ["#f0dcff", "#e4c8f8"],
    labelText: "#5a2a8a",
    images: [
      { placeholder: true, bg: "#ecdcf8", accent: "#8840cc", text: "MINOR KEY I" },
      { placeholder: true, bg: "#e4d0f4", accent: "#7830bc", text: "MINOR KEY II" },
    ]
  },
];

// ── CARTRIDGE LABEL PATTERNS ──
const patterns = [
  (l1, l2, a) => `<svg viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg" class="cart-label-art"><defs><linearGradient id="g0" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${l1}"/><stop offset="100%" stop-color="${l2}"/></linearGradient></defs><rect width="80" height="90" fill="url(#g0)"/><circle cx="40" cy="45" r="28" fill="none" stroke="${a}" stroke-width="1" opacity="0.4"/><circle cx="40" cy="45" r="16" fill="${a}" opacity="0.12"/><circle cx="40" cy="45" r="6" fill="${a}" opacity="0.2"/></svg>`,
  (l1, l2, a) => `<svg viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg" class="cart-label-art"><defs><linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${l1}"/><stop offset="100%" stop-color="${l2}"/></linearGradient></defs><rect width="80" height="90" fill="url(#g1)"/>${[...Array(5)].map((_,i)=>`<rect x="${5+i*14}" y="${10+i*8}" width="${50-i*8}" height="${60-i*10}" rx="4" fill="none" stroke="${a}" stroke-width="0.8" opacity="${0.15+i*0.07}"/>`).join('')}</svg>`,
  (l1, l2, a) => `<svg viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg" class="cart-label-art"><defs><linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${l1}"/><stop offset="100%" stop-color="${l2}"/></linearGradient></defs><rect width="80" height="90" fill="url(#g2)"/><polygon points="40,12 64,56 16,56" fill="none" stroke="${a}" stroke-width="1" opacity="0.35"/><polygon points="40,24 56,52 24,52" fill="${a}" opacity="0.1"/></svg>`,
  (l1, l2, a) => `<svg viewBox="0 0 80 90" xmlns="http://www.w3.org/2000/svg" class="cart-label-art"><defs><linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stop-color="${l1}"/><stop offset="100%" stop-color="${l2}"/></linearGradient></defs><rect width="80" height="90" fill="url(#g3)"/>${[...Array(7)].map((_,i)=>`<line x1="0" y1="${i*15}" x2="80" y2="${i*15+30}" stroke="${a}" stroke-width="0.7" opacity="0.2"/>`).join('')}<circle cx="40" cy="45" r="12" fill="${a}" opacity="0.1"/></svg>`,
];

// ── BUILD CARTRIDGE GRID ──
const grid = document.getElementById('cartGrid');
let activeIndex = null, currentSlide = 0, slides = [];

projects.forEach((p, i) => {
  const el = document.createElement('div');
  el.className = 'cartridge';
  el.dataset.index = i;
  const pat = patterns[i % patterns.length](p.labelBg[0], p.labelBg[1], p.cartAccent);

  el.innerHTML = `
    <div class="cart-tooltip">${p.title}</div>
    <div class="cart-body" style="background:linear-gradient(160deg,${p.cartBg[0]},${p.cartBg[1]});">
      <div class="cart-notch"></div>
      <div class="cart-label" style="background:linear-gradient(160deg,${p.labelBg[0]},${p.labelBg[1]});">
        ${pat}
        <div class="cart-label-text" style="color:${p.labelText};">${p.title}</div>
        <div class="cart-category" style="color:${p.cartAccent};">${p.tag}</div>
      </div>
      <div class="cart-connector">
        ${Array(9).fill('<div class="cart-pin"></div>').join('')}
      </div>
      <div class="cart-gloss"></div>
    </div>`;

  el.addEventListener('click', () => insertCartridge(i, el));
  grid.appendChild(el);
});

// ── DS ELEMENT REFERENCES ──
const dsClosed    = document.getElementById('dsClosed');
const dsOpen      = document.getElementById('dsOpen');
const screenOff   = document.getElementById('screenOff');
const bootScreen  = document.getElementById('bootScreen');
const bootBar     = document.getElementById('bootBar');
const bootTitle   = document.getElementById('bootTitle');
const bootSub     = document.getElementById('bootSub');
const imageGallery  = document.getElementById('imageGallery');
const galleryDots   = document.getElementById('galleryDots');
const galleryPrev   = document.getElementById('galleryPrev');
const galleryNext   = document.getElementById('galleryNext');
const bottomIdle    = document.getElementById('bottomIdle');
const bottomContent = document.getElementById('bottomContent');
const bcTitle  = document.getElementById('bcTitle');
const bcTag    = document.getElementById('bcTag');
const bcDesc   = document.getElementById('bcDesc');
const bcMeta   = document.getElementById('bcMeta');
const powerLed = document.getElementById('powerLed');
const ejectBtn = document.getElementById('ejectBtn');
const slotPeek = document.getElementById('slotPeek');
const instructions = document.getElementById('instructions');

galleryPrev.addEventListener('click', () => changeSlide(-1));
galleryNext.addEventListener('click', () => changeSlide(1));
ejectBtn.addEventListener('click', ejectCartridge);

// ── CARTRIDGE LOGIC ──
function insertCartridge(index, el) {
  if (activeIndex === index) return;
  if (activeIndex !== null) {
    grid.children[activeIndex].classList.remove('active');
  }
  activeIndex = index;
  const p = projects[index];

  el.classList.add('inserting', 'active');
  setTimeout(() => el.classList.remove('inserting'), 550);

  slotPeek.style.background = `linear-gradient(to bottom, ${p.cartBg[0]}, ${p.cartBg[1]})`;
  instructions.textContent = '✦ Eject the cartridge to switch games ✦';

  // Swap closed → open
  dsClosed.style.display = 'none';
  dsOpen.style.display = 'flex';
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      dsOpen.classList.add('visible');
    });
  });

  setTimeout(() => {
    powerLed.classList.add('on');
    screenOff.classList.add('hidden');
    bootTitle.textContent = p.title;
    bootSub.textContent = p.tag + ' · ' + p.year;
    bootScreen.classList.add('visible');
    animateBoot(() => {
      bootScreen.classList.remove('visible');
      loadProject(p);
    });
  }, 280);
}

function animateBoot(cb) {
  bootBar.style.transition = 'none';
  bootBar.style.width = '0%';
  setTimeout(() => {
    bootBar.style.transition = 'width 1.5s cubic-bezier(0.4,0,0.6,1)';
    bootBar.style.width = '100%';
    setTimeout(cb, 1700);
  }, 60);
}

function loadProject(p) {
  bcTitle.textContent = p.title;
  bcTag.textContent = p.tag + ' · ' + p.year;
  bcDesc.textContent = p.desc;
  bcMeta.innerHTML = p.details.map(d => `▸ ${d}`).join('<br>');
  bottomIdle.style.display = 'none';
  bottomContent.classList.add('visible');
  buildGallery(p);
}

function buildGallery(p) {
  imageGallery.querySelectorAll('.gallery-slide').forEach(s => s.remove());
  galleryDots.innerHTML = '';
  slides = p.images;
  currentSlide = 0;

  slides.forEach((img, i) => {
    const slide = document.createElement('div');
    slide.className = 'gallery-slide' + (i === 0 ? ' active' : '');

    if (img.url) {
      slide.innerHTML = `<img class="slide-img" src="${img.url}" alt="">`;
    } else {
      slide.innerHTML = `<svg width="100%" height="100%" viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="rg${i}" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stop-color="${img.bg}" stop-opacity="1"/>
            <stop offset="100%" stop-color="${lighten(img.bg, -15)}" stop-opacity="1"/>
          </radialGradient>
        </defs>
        <rect width="320" height="200" fill="url(#rg${i})"/>
        <circle cx="160" cy="100" r="55" fill="none" stroke="${img.accent}" stroke-width="1.5" opacity="0.35"/>
        <circle cx="160" cy="100" r="32" fill="${img.accent}" opacity="0.1"/>
        <circle cx="160" cy="100" r="10" fill="${img.accent}" opacity="0.2"/>
        <text x="160" y="104" font-family="'Fredoka One',cursive" font-size="11" fill="${img.accent}" opacity="0.6" text-anchor="middle" letter-spacing="3">${img.text}</text>
        <text x="160" y="120" font-family="Nunito,sans-serif" font-size="7" fill="${img.accent}" opacity="0.4" text-anchor="middle" letter-spacing="1" font-weight="700">[ ADD YOUR IMAGE HERE ]</text>
      </svg>`;
    }

    imageGallery.insertBefore(slide, galleryPrev);

    const dot = document.createElement('button');
    dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    galleryDots.appendChild(dot);
  });
}

function changeSlide(dir) {
  goToSlide((currentSlide + dir + slides.length) % slides.length);
}

function goToSlide(n) {
  const allSlides = imageGallery.querySelectorAll('.gallery-slide');
  const allDots = galleryDots.querySelectorAll('.gallery-dot');
  allSlides[currentSlide].classList.remove('active');
  allDots[currentSlide].classList.remove('active');
  currentSlide = n;
  allSlides[currentSlide].classList.add('active');
  allDots[currentSlide].classList.add('active');
}

function ejectCartridge() {
  if (activeIndex === null) return;
  const el = grid.children[activeIndex];
  el.classList.remove('active');
  el.classList.add('ejecting');
  setTimeout(() => el.classList.remove('ejecting'), 450);

  bottomContent.classList.remove('visible');
  imageGallery.querySelectorAll('.gallery-slide').forEach(s => s.remove());
  galleryDots.innerHTML = '';

  setTimeout(() => {
    screenOff.classList.remove('hidden');
    powerLed.classList.remove('on');
    slotPeek.style.background = '';
    bottomIdle.style.display = '';
  }, 250);

  // Swap open → closed
  setTimeout(() => {
    dsOpen.classList.remove('visible');
    setTimeout(() => {
      dsOpen.style.display = 'none';
      dsClosed.style.display = '';
    }, 460);
    instructions.textContent = '✦ Click a cartridge to play! ✦';
  }, 550);

  activeIndex = null;
}

// ── UTILITY ──
function lighten(hex, amt) {
  const n = parseInt(hex.replace('#', ''), 16);
  const r = Math.max(0, Math.min(255, (n >> 16) + amt));
  const g = Math.max(0, Math.min(255, ((n >> 8) & 0xff) + amt));
  const b = Math.max(0, Math.min(255, (n & 0xff) + amt));
  return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, '0')}`;
}
