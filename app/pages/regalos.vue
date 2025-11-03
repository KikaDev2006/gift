<script setup>
import confetti from 'canvas-confetti'
import { onMounted } from 'vue'

// 🌍 Lugares (con vista satélite por defecto)
const lugares = [
  {
    nombre: '🌊 Playa Ancón',
    iframe:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3878.796346417045!2d-79.9871943!3d21.7538069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f2b1fc1f26f2e09%3A0x54f918ec62ad8a7a!2sPlaya%20Anc%C3%B3n!5e1!3m2!1ses!2scu!4v1699820112345!5m2!1ses!2scu',
    mensaje:
      'En ese viaje no solo compartimos arena y mar, compartimos partes de nosotras que a veces se quedan guardadas 💙✨'
  },
{
  nombre: '☕ Café El Mago (Trinidad)',
  iframe:
    'https://www.google.com/maps?q=21.807150,-79.984600&hl=es&t=k&z=19&output=embed',
  link: 'https://maps.app.goo.gl/d6JGR3AZVqphNcxA6',
  mensaje:
    'En ese café no solo hablamos: nos encontramos. Hay algo en ti que me hace bajar la guardia sin pensarlo, como si mi historia tuviera espacio en la tuya. Lo que compartimos ese día me recordó que hay vínculos que no se explican, solo se sienten. Y el nuestro, sin duda, es uno de esos.'
}


,

  {
    nombre: '📚 IPU',
    iframe:
      'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3879.438105709771!2d-79.16850422562203!3d21.94416957998998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f2a48ea2de5f45f%3A0x8a65d5e1b87b9d56!2sWRRM%2B3P3%2C%20Juan%20Manuel%20Feij%C3%B3o%2C%20Jatibonico%2062200%2C%20Cuba!5e1!3m2!1ses!2scu!4v1730560200000!5m2!1ses!2scu',
    mensaje:
      'Nadie entendía nuestras ocurrencias, pero nosotros sabíamos que éramos el mejor equipo 🤭💫'
  }
]

// 🎊 Confeti arcoíris al cargar
onMounted(() => {
  confetti({
    particleCount: 300,
    spread: 120,
    origin: { y: 0.6 },
    colors: ['#e40303', '#ff8c00', '#ffed00', '#008026', '#004dff', '#750787']
  })
})
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center rainbow-bg p-6">
    <h1
      class="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-400 via-yellow-400 via-green-500 via-blue-500 to-purple-600 mb-10 drop-shadow-lg text-center animate-pulse"
    >
      🏳️‍🌈 Lugares de Nuestra Amistad 💖
    </h1>

    <div class="grid gap-8 w-full max-w-4xl">
      <div
        v-for="(lugar, index) in lugares"
        :key="index"
        class="bg-white/90 rounded-2xl p-6 shadow-xl backdrop-blur-md border-4 rainbow-border"
      >
        <h2 class="text-2xl font-bold text-purple-700 mb-4 text-center">
          {{ lugar.nombre }}
        </h2>

        <iframe
          :src="lugar.iframe"
          width="100%"
          height="350"
          style="border: 0"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          class="rounded-xl mb-4"
        ></iframe>

        <p class="text-lg bg-white/80 p-4 rounded-lg border border-pink-300 text-gray-800 italic">
          {{ lugar.mensaje }}
        </p>
      </div>
    </div>

    <!-- 🌈 Botones -->
    <div class="flex gap-6 mt-10">
      <NuxtLink
        to="/"
        class="rainbow-btn glow text-white px-6 py-3 rounded-full text-xl font-semibold shadow-lg hover:scale-105 transition"
      >
        ⬅️ Volver a Inicio
      </NuxtLink>

      <NuxtLink
        to="/photos"
        class="rainbow-btn glow text-white px-6 py-3 rounded-full text-xl font-semibold shadow-lg hover:scale-105 transition"
      >
        Ir a Página Siguiente ➡️
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
/* 🌈 Fondo animado arcoíris */
.rainbow-bg {
  background: linear-gradient(270deg, #e40303, #ff8c00, #ffed00, #008026, #004dff, #750787);
  background-size: 1200% 1200%;
  animation: rainbowMove 12s ease infinite;
}

@keyframes rainbowMove {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* 🌈 Marco */
.rainbow-border {
  border-image: linear-gradient(45deg, #e40303, #ff8c00, #ffed00, #008026, #004dff, #750787) 1;
}

/* 🌈 Botón arcoíris */
.rainbow-btn {
  background-image: linear-gradient(to right, #e40303, #ff8c00, #ffed00, #008026, #004dff, #750787);
  background-size: 200% auto;
  transition: background-position 0.4s, transform 0.3s, box-shadow 0.3s;
}

.glow:hover {
  box-shadow: 0 0 20px 4px rgba(255,255,255,0.8),
              0 0 40px 10px rgba(255,0,200,0.6),
              0 0 60px 14px rgba(0,150,255,0.4);
}

.rainbow-btn:hover {
  background-position: right center;
  transform: scale(1.05);
}
</style>
