/* ================= PREVIEW ================= */
const cards = document.querySelectorAll(".card");
const previewSection = document.getElementById("previewSection");
const previewSlider = document.getElementById("previewSlider");
const dotsContainer = document.getElementById("dots");

const nextPreview = document.querySelector(".preview-btn.next");
const prevPreview = document.querySelector(".preview-btn.prev");

let currentIndex = 0;
let images = [];

/* ================= DATA GAMBAR ================= */
const isMobile = window.matchMedia("(max-width: 768px)").matches;

/* ================= DATA DESKTOP ================= */
const dataDesktop = {
  0: [
    "img/web/web1.jpg",
    "img/web/web2.jpg",
    "img/web/web3.jpg",
    "img/web/web4.jpg"
  ],

  1: [
    "img/sosmed/sosmed1.jpg",
    "img/sosmed/sosmed2.jpg",
    "img/sosmed/sosmed3.jpg",
    "img/sosmed/sosmed4.jpg",
    "img/sosmed/sosmed5.jpg",
    "img/sosmed/sosmed6.jpg",
    "img/sosmed/sosmed7.jpg",
    "img/sosmed/sosmed8.jpg",
    "img/sosmed/sosmed9.jpg",
  ],

  2: [
    "img/logo/logo1.jpg",
    "img/logo/logo2.jpg",
    "img/logo/logo3.jpg",
    "img/logo/logo4.jpg",
  ],

  3: [
    "img/print/print1.jpg",
    "img/print/print2.jpg",
    "img/print/print3.jpg",
  ]
};

/* ================= DATA MOBILE ================= */
const dataMobile = {
  0: [
    "img/web-mobile/web1.jpg",
    "img/web-mobile/web2.jpg",
    "img/web-mobile/web3.jpg",
    "img/web-mobile/web4.jpg",
  ],

  1: [
    "img/sosmed-mobile/sosmed1.jpg",
    "img/sosmed-mobile/sosmed2.jpg",
    "img/sosmed-mobile/sosmed3.jpg",
    "img/sosmed-mobile/sosmed4.jpg",
    "img/sosmed-mobile/sosmed5.jpg",
    "img/sosmed-mobile/sosmed6.jpg",
    "img/sosmed-mobile/sosmed7.jpg",
    "img/sosmed-mobile/sosmed8.jpg",
    "img/sosmed-mobile/sosmed9.jpg",
  ],

  2: [
    "img/logo-mobile/logo1.jpg",
    "img/logo-mobile/logo2.jpg",
    "img/logo-mobile/logo3.jpg",
    "img/logo-mobile/logo4.jpg",
  ],

  3: [
    "img/print-mobile/print1.jpg",
    "img/print-mobile/print2.jpg",
    "img/print-mobile/print3.jpg",
  ]
};

/* ================= FINAL DATA ================= */
const data = isMobile ? dataMobile : dataDesktop;
/* ================= CLICK CARD ================= */
cards.forEach((card, i) => {
  card.addEventListener("click", () => {

    // aktifkan warna kuning
    cards.forEach(c => c.classList.remove("active"));
    card.classList.add("active");

    // ambil data gambar
    images = data[i];
    currentIndex = 0;

    renderPreview();
    previewSection.classList.add("active");
  });
});

/* ================= RENDER PREVIEW ================= */
function renderPreview() {
  previewSlider.innerHTML = "";
  dotsContainer.innerHTML = "";

  images.forEach((src, i) => {
    const img = document.createElement("img");
    img.src = src;
    previewSlider.appendChild(img);

    const dot = document.createElement("span");
    if (i === 0) dot.classList.add("active");

    dot.addEventListener("click", () => {
      currentIndex = i;
      updatePreview();
    });

    dotsContainer.appendChild(dot);
  });

  updatePreview();
}

/* ================= UPDATE ================= */
function updatePreview() {
  previewSlider.style.transform = `translateX(-${currentIndex * 100}%)`;

  document.querySelectorAll(".dots span").forEach((d, i) => {
    d.classList.toggle("active", i === currentIndex);
  });
}

/* ================= NAV PREVIEW ================= */
nextPreview.addEventListener("click", () => {
  if (currentIndex < images.length - 1) {
    currentIndex++;
    updatePreview();
  }
});

prevPreview.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
    updatePreview();
  }
});

/* ================= CONTACT ================= */
function wa(){
  window.open("https://wa.me/627724026611");
}

function email(){
  window.location.href = "mailto:in.arifrochman@gmail.com";
}

/* ================= SWIPE MOBILE ================= */
let startX = 0;
let endX = 0;

previewSlider.addEventListener("touchstart", (e) => {
  startX = e.touches[0].clientX;
});

previewSlider.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  handleSwipe();
});

function handleSwipe() {
  const diff = startX - endX;

  // swipe kiri (next)
  if (diff > 50) {
    if (currentIndex < images.length - 1) {
      currentIndex++;
      updatePreview();
    }
  }

  // swipe kanan (prev)
  if (diff < -50) {
    if (currentIndex > 0) {
      currentIndex--;
      updatePreview();
    }
  }
}
