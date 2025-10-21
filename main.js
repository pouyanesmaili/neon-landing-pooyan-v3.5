// تایپ نئونی
const text = "به دنیای RoG3r Neo V3.5 خوش آمدی ⚡";
let idx = 0;
function type() {
  if (idx < text.length) {
    document.getElementById("typewriter").textContent += text[idx++];
    setTimeout(type, 90);
  }
}
window.addEventListener("load", type);

// اسکرول هدر نئونی
window.addEventListener('scroll', () => {
  const header = document.querySelector('.cyber-header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// شمارنده‌ها
const counters = document.querySelectorAll(".counter");
let started = false;
function runCounters(){
  if(!started && window.scrollY + innerHeight > document.getElementById("stats").offsetTop){
    counters.forEach(c=>{
      const target = +c.dataset.target;
      let count = 0;
      const update = ()=>{
        count += Math.ceil(target/80);
        if(count < target){ c.textContent = count; requestAnimationFrame(update); }
        else c.textContent = target;
      };
      update();
    });
    started = true;
  }
}
window.addEventListener("scroll", runCounters);

// اسلایدر نظرات
let slideIndex = 0;
const slides = document.querySelectorAll(".slide");
function showSlides(){
  slides.forEach(s=>s.classList.remove("active"));
  slides[slideIndex].classList.add("active");
  slideIndex = (slideIndex+1)%slides.length;
}
setInterval(showSlides, 3000);

// فرم تماس
const form = document.getElementById("contactForm");
form.addEventListener("submit", e=>{
  e.preventDefault();
  document.getElementById("formMessage").textContent="درحال ارسال...";
  setTimeout(()=>{
    form.reset();
    document.getElementById("formMessage").textContent="پیام شما با موفقیت ارسال شد 💌";
  },1200);
});

// ذرات پس‌زمینه
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");
function resizeCanvas(){
  canvas.width = innerWidth;
  canvas.height = innerHeight * 0.9; // رفع برش موبایل
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const particles=[];
const particleCount = innerWidth < 768 ? 25 : 80;
class Particle{
  constructor(){
    this.x = Math.random()*canvas.width;
    this.y = Math.random()*canvas.height;
    this.size = Math.random()*2+1;
    this.speedX = Math.random()-.5;
    this.speedY = Math.random()-.5;
  }
  update(){
    this.x+=this.speedX;this.y+=this.speedY;
    if(this.x<0||this.x>canvas.width)this.speedX*=-1;
    if(this.y<0||this.y>canvas.height)this.speedY*=-1;
  }
  draw(){
    ctx.fillStyle="#22d3ee";
    ctx.beginPath();
    ctx.arc(this.x,this.y,this.size,0,Math.PI*2);
    ctx.fill();
  }
}
for(let i=0;i<particleCount;i++) particles.push(new Particle());
function animate(){
  ctx.clearRect(0,0,canvas.width,canvas.height);
  particles.forEach(p=>{p.update();p.draw();});
  requestAnimationFrame(animate);
}
animate();






