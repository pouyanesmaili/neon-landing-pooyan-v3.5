// === Typewriter ===
const text = "به دنیای RoG3r Neo V3.5 خوش آمدی ⚡";
let idx = 0;
function type() {
  if (idx < text.length) {
    document.getElementById("typewriter").textContent += text[idx++];
    setTimeout(type, 90);
  }
}
window.addEventListener("load", type);

// === Scroll header glow ===
document.addEventListener("scroll", () => {
  const header = document.querySelector(".cyber-header");
  header.classList.toggle("scrolled", window.scrollY > 50);
});

// === Counters ===
const counters = document.querySelectorAll(".counter");
let started = false;
function runCounters() {
  if (
    !started &&
    window.scrollY + window.innerHeight >
      document.getElementById("stats").offsetTop
  ) {
    counters.forEach((c) => {
      const target = +c.dataset.target;
      let count = 0;
      const update = () => {
        count += Math.ceil(target / 80);
        if (count < target) {
          c.textContent = count;
          requestAnimationFrame(update);
        } else c.textContent = target;
      };
      update();
    });
    started = true;
  }
}
window.addEventListener("scroll", runCounters);

// === Lightbox ===
const galleryImgs = document.querySelectorAll(".gallery-grid img");
galleryImgs.forEach((img) => {
  img.addEventListener("click", () => {
    const box = document.createElement("div");
    box.classList.add("lightbox");
    box.innerHTML = `<img src="${img.src}"><span style="position:absolute;top:20px;right:30px;font-size:2rem;color:white;cursor:pointer;">×</span>`;
    document.body.appendChild(box);
    box.querySelector("span").onclick = () => box.remove();
  });
});

// === Slider ===
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
function showSlides() {
  slides.forEach((s) => s.classList.remove("active"));
  slides[slideIndex].classList.add("active");
  slideIndex = (slideIndex + 1) % slides.length;
}
setInterval(showSlides, 3000);

// === Form ===
const form = document.getElementById("contactForm");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("formMessage").textContent = "درحال ارسال...";
  setTimeout(() => {
    document.getElementById("formMessage").textContent =
      "پیام شما با موفقیت ارسال شد 💌";
    form.reset();
  }, 1200);
});

// === Particles (Optimized for Mobile) ===
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight * 0.8;
}
resizeCanvas();

let particles = [];
class Particle {
  constructor() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = Math.random() - 0.5;
    this.speedY = Math.random() - 0.5;
  }
  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }
  draw() {
    ctx.fillStyle = "#22d3ee";
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

const particleCount = window.innerWidth < 768 ? 22 : 80;
for (let i = 0; i < particleCount; i++) particles.push(new Particle());

window.addEventListener("resize", resizeCanvas);

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach((p) => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}
animate();


