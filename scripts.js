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
    details: [
      "PHOTOS: 'PRINTED",
      "BOGOS: BINTED",
      { label: "SEE MORE OF MY ART ↗", url: "https://www.instagram.com/lyd.tart/" },
      {label: "THE VIRAL POST ↗", url: "https://x.com/sexylesbianbf/status/1924329089026134041"}
    ],
    cartBg: ["#ffd8a8", "#ffeecc"],
    cartAccent: "#cc6600",
    labelBg: ["#fff0cc", "#ffe4a0"],
    labelText: "#7a3a00",
    images: [
      "imgs/photobooth/0.jpg",
      "imgs/photobooth/1.jpg",
      "imgs/photobooth/2.jpg",
      "imgs/photobooth/3.jpg",
      "imgs/photobooth/4.jpg",
      "imgs/photobooth/5.jpg",
      "imgs/photobooth/6.jpg",
    ],

  },
  {
    title: "VALENTINE'S DAY WEBSITE",
    tag: "Frontend Web Dev",
    year: "2024",
    desc: "Built a website for lovebugs to ask the very essential question: 'Will you be my valentine?' It was designed and coded from scratch with a very subtle, silly twist. Focused on making something that was simple yet humorous.",
    details: [
      "BUILT WITH · HTML, CSS, JS",
      "FOCUS · INTERACTION + FEEL",
      "TYPE · PERSONAL PROJECT",
      { label: "TRY IT YOURSELF ↗", url: "https://lydia-tan.github.io/be_mine/" }
    ],
    // details: ["BUILT WITH: HTML/CSS/JS", "VALENTINE: SECURED"],
    cartBg: ["#ffd8a8", "#ffeecc"],
    cartAccent: "#cc6600",
    labelBg: ["#fff0cc", "#ffe4a0"],
    labelText: "#7a3a00",
    images: [
      "imgs/valentines/valentine.gif",
    ],
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
      "imgs/ipodmod/0.jpg",
      "imgs/ipodmod/1.jpg",
      "imgs/ipodmod/2.jpg",
    ],
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
      "imgs/jewelrymaking/0.jpg",
      "imgs/jewelrymaking/1.jpg",
      "imgs/jewelrymaking/2.jpg",
      "imgs/jewelrymaking/3.jpg",
      "imgs/jewelrymaking/4.jpg",
      "imgs/jewelrymaking/5.jpg",
      "imgs/jewelrymaking/6.jpg",
      "imgs/jewelrymaking/7.jpg",
      "imgs/jewelrymaking/8.jpg",
    ],
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
      "imgs/tamagotchi/0.jpg",
      "imgs/tamagotchi/1.jpg",
      "imgs/tamagotchi/2.jpg",
      "imgs/tamagotchi/3.jpg",
      "imgs/tamagotchi/4.jpg",
    ],
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
      "imgs/persimmon/0.jpg",
      "imgs/persimmon/1.jpg",
      "imgs/persimmon/2.jpg",
    ],
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
      "imgs/sketchbook/0.jpg",
      "imgs/sketchbook/1.jpg",
      "imgs/sketchbook/2.jpg",
      "imgs/sketchbook/3.jpg",
    ],
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
const galleryTrack  = document.getElementById('galleryTrack');
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

// Each insertCartridge call gets its own session object. Every async step
// checks session.cancelled, so clicking a new cartridge at any point during
// the boot sequence always stops the old one cleanly.
let currentSession = null;

function insertCartridge(index, el) {
  if (activeIndex === index) return;

  // Cancel the previous boot at whatever stage it is currently in.
  if (currentSession) currentSession.cancelled = true;
  const session = { cancelled: false };
  currentSession = session;

  // Hide gallery and reset boot UI immediately.
  imageGallery.style.display = 'none';
  bootScreen.classList.remove('visible');
  bootBar.style.transition = 'none';
  bootBar.style.width = '0%';

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
  requestAnimationFrame(() => requestAnimationFrame(() => dsOpen.classList.add('visible')));

  setTimeout(() => {
    if (session.cancelled) return;
    powerLed.classList.add('on');
    screenOff.classList.add('hidden');
    bootTitle.textContent = p.title;
    bootSub.textContent = p.tag + ' · ' + p.year;
    bootScreen.classList.add('visible');

    setTimeout(() => {
      if (session.cancelled) return;
      bootBar.style.transition = 'width 1.5s cubic-bezier(0.4,0,0.6,1)';
      bootBar.style.width = '100%';

      setTimeout(() => {
        if (session.cancelled) return;
        bootScreen.classList.remove('visible');
        loadProject(p);
      }, 1700);
    }, 60);
  }, 280);
}

function loadProject(p) {
  bcTitle.textContent = p.title;
  bcTag.textContent = p.tag + ' · ' + p.year;
  bcDesc.textContent = p.desc;
  // bcMeta.innerHTML = p.details.map(d => `▸ ${d}`).join('<br>');
  bcMeta.innerHTML = p.details.map(d => {
    if (typeof d === 'object' && d.url) {
      return `▸ <a href="${d.url}" target="_blank" rel="noopener" style="color:inherit;text-decoration:underline;text-underline-offset:2px;">${d.label}</a>`;
    }
    return `▸ ${d}`;
  }).join('<br>');
  bottomIdle.style.display = 'none';
  bottomContent.classList.add('visible');
  buildGallery(p);
  // Reveal gallery only after boot is done so it never covers the boot screen.
  imageGallery.style.display = '';
}

let galleryToken = 0;

function buildGallery(p) {
  const myToken = ++galleryToken;
  galleryTrack.innerHTML = '';
  galleryDots.innerHTML = '';
  currentSlide = 0;
  slides = p.images || [];

  if (slides.length === 0) {
    const slide = document.createElement('div');
    slide.className = 'gallery-slide active';
    slide.innerHTML = `<div style="font-family:'Fredoka One',cursive;font-size:0.8rem;color:rgba(0,120,120,0.5);text-align:center;line-height:2;">NO IMAGES YET</div>`;
    galleryTrack.appendChild(slide);
    const dot = document.createElement('button');
    dot.className = 'gallery-dot active';
    galleryDots.appendChild(dot);
    return;
  }

  slides.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'gallery-slide' + (i === 0 ? ' active' : '');
    galleryTrack.appendChild(slide);

    const dot = document.createElement('button');
    dot.className = 'gallery-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => goToSlide(i));
    galleryDots.appendChild(dot);

    const img = document.createElement('img');
    img.alt = src;
    // Default to contain — shows the full image centred without cropping.
    // Switch to cover only if the image is wide enough to fill the screen
    // without heavy cropping (ratio close to or wider than the screen).
    img.className = 'slide-img slide-img--contain';
    img.onload = () => {
      if (myToken !== galleryToken) return;
      const SCREEN_RATIO = 4 / 2.8;
      const imgRatio = img.naturalWidth / img.naturalHeight;
      // Use cover only when the image ratio is within 25% of the screen ratio
      // (landscape-ish images that won't lose much to cropping).
      if (imgRatio >= SCREEN_RATIO * 0.75) {
        img.classList.remove('slide-img--contain');
      }
    };
    img.src = src;
    slide.appendChild(img);
  });
}

function changeSlide(dir) {
  goToSlide((currentSlide + dir + slides.length) % slides.length);
}

function goToSlide(n) {
  const allSlides = galleryTrack.querySelectorAll('.gallery-slide');
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
  galleryTrack.innerHTML = '';
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