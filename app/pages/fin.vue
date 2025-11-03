<template>
  <div class="fin-container">
    <!-- 🎇 Canvas de fuegos artificiales -->
    <canvas ref="canvas" class="fireworks"></canvas>

    <!-- 🎂 Contenido central -->
    <div class="content" v-if="!showFinalMessage">
      <img class="cake-img" :src="cakeUrl" alt="Pastel de cumpleaños" />
      <p class="message">
        No es todo lo que quisiera darte,<br />
        pero es todo lo que tengo.
      </p>
    </div>

    <!-- 🎉 Mensaje final -->
    <div v-if="showFinalMessage" class="final-message">
      <h1>🎬 Fin 🎂</h1>
      <h2>¡Feliz cumpleaños! 🎉💖</h2>
      <h3>hecho con 💖 por kika, siempre juntas</h3>
    </div>

    <!-- 🎈 Emojis flotando -->
    <div class="emoji-layer">🎉🎁🎂💖🎈🎊🎁🎂🎉💝🎈🎂🎉</div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import confetti from "canvas-confetti"; // 🎊 efecto confeti

// ✅ Imagen del pastel
const cakeFile = import.meta.glob("~/assets/images/cookie/*.{png,jpg,jpeg,gif,webp}", { eager: true });
const cakeUrl = Object.values(cakeFile)[0]?.default || "";

// ✅ Canción
const songFile = import.meta.glob("~/assets/sounds/music_happy/*.{mp3,ogg,wav}", { eager: true });
const songUrl = Object.values(songFile)[0]?.default || "";
const song = new Audio(songUrl);
song.volume = 0.5;

// 🔥 Fuegos artificiales
const canvas = ref(null);
let ctx;
let particles = [];
let fireworkInterval;
const showFinalMessage = ref(false);

class Particle {
  constructor(x, y, color, speedX, speedY) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.speedX = speedX;
    this.speedY = speedY;
    this.alpha = 1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;
    this.speedY += 0.02;
    this.alpha -= 0.015;
  }

  draw() {
    ctx.globalAlpha = this.alpha;
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2);
    ctx.fillStyle = this.color;
    ctx.fill();
  }
}

function createFirework() {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * (window.innerHeight / 2);
  const colors = ["#ff0040", "#ff8000", "#ffea00", "#00ff80", "#00bfff", "#c300ff"];
  const color = colors[Math.floor(Math.random() * colors.length)];
  for (let i = 0; i < 30; i++) {
    const angle = Math.random() * 2 * Math.PI;
    const speed = Math.random() * 4 + 2;
    particles.push(
      new Particle(x, y, color, Math.cos(angle) * speed, Math.sin(angle) * speed)
    );
  }
}

function animate() {
  ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
  ctx.fillRect(0, 0, canvas.value.width, canvas.value.height);

  particles.forEach((p, i) => {
    p.update();
    p.draw();
    if (p.alpha <= 0) particles.splice(i, 1);
  });

  requestAnimationFrame(animate);
}

function launchConfetti() {
  const duration = 3 * 1000;
  const end = Date.now() + duration;

  (function frame() {
    confetti({
      particleCount: 8,
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      origin: { x: Math.random(), y: Math.random() - 0.2 },
    });
    if (Date.now() < end) requestAnimationFrame(frame);
  })();
}

onMounted(() => {
  const c = canvas.value;
  c.width = window.innerWidth;
  c.height = window.innerHeight;
  ctx = c.getContext("2d");

  animate();
  song.play();
  fireworkInterval = setInterval(createFirework, 1000);

  // 🔇 Cuando termina la canción
  song.addEventListener("ended", () => {
    clearInterval(fireworkInterval);
    showFinalMessage.value = true;
    launchConfetti();
  });
});
</script>

<style scoped>
.fin-container {
  position: relative;
  width: 100%;
  height: 100vh;
  background: #ffffff;
  overflow: hidden;
}

/* Canvas */
.fireworks {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

/* Emojis flotando */
.emoji-layer {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 3rem;
  opacity: 0.12;
  white-space: pre-wrap;
  animation: floatEmojis 25s linear infinite;
  z-index: 2;
  pointer-events: none;
}

@keyframes floatEmojis {
  0% { transform: translateY(0); }
  100% { transform: translateY(-100%); }
}

/* Contenido central */
.content {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 3;
}

.cake-img {
  width: 340px;
  animation: bounceCake 2s ease-in-out infinite alternate;
}

@keyframes bounceCake {
  from { transform: translateY(0); }
  to { transform: translateY(-15px); }
}

.message {
  margin-top: 1.8rem;
  font-size: 1.6rem;
  color: #333;
  font-weight: bold;
  font-style: italic;
}

/* 🎬 Mensaje final */
.final-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 5;
  color: #ff0080;
  text-shadow: 2px 2px 10px rgba(0, 0, 0, 0.3);
  animation: fadeIn 2s ease forwards;
}

.final-message h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.final-message h2 {
  font-size: 2rem;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translate(-50%, -60%); }
  to { opacity: 1; transform: translate(-50%, -50%); }
}
</style>
