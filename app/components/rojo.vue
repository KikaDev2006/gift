<script setup>
import { ref, onMounted } from 'vue'
import confetti from 'canvas-confetti'
import { Gift, Cookie, Sparkles } from 'lucide-vue-next'

// Íconos que van a flotar
const icons = [Gift, Cookie, Sparkles]
const items = ref([])

// 🎨 Colores de la bandera LGBT
const prideColors = [
  '#E40303', // Rojo
  '#FF8C00', // Naranja
  '#FFED00', // Amarillo
  '#008026', // Verde
  '#004DFF', // Azul
  '#750787'  // Violeta
]

onMounted(() => {
  const count = 30
  const screenW = window.innerWidth
  const screenH = window.innerHeight

  // Generar íconos aleatorios
  for (let i = 0; i < count; i++) {
    items.value.push({
      id: i,
      x: Math.random() * screenW,
      y: Math.random() * screenH,
      icon: icons[Math.floor(Math.random() * icons.length)],
      size: 24 + Math.random() * 32,
      color: prideColors[Math.floor(Math.random() * prideColors.length)],
      rotation: Math.random() * 360
    })
  }

  // 💥 Explosión inicial de confeti
  launchConfetti()
})

// Función de confeti
function launchConfetti() {
  // Disparo central
  confetti({
    particleCount: 300,
    spread: 120,
    origin: { y: 0.6 },
    colors: prideColors
  })

  // Pequeñas explosiones laterales
  setTimeout(() => {
    confetti({
      particleCount: 150,
      spread: 100,
      startVelocity: 50,
      origin: { x: 0.2, y: 0.7 },
      colors: prideColors
    })
  }, 300)

  setTimeout(() => {
    confetti({
      particleCount: 150,
      spread: 100,
      startVelocity: 50,
      origin: { x: 0.8, y: 0.7 },
      colors: prideColors
    })
  }, 600)
}
</script>

<template>
  <!-- Contenedor que ocupa toda la pantalla -->
  <div class="fixed inset-0 overflow-hidden pointer-events-none">
    <component
      v-for="item in items"
      :key="item.id"
      :is="item.icon"
      class="absolute animate-float"
      :style="{
        left: item.x + 'px',
        top: item.y + 'px',
        transform: `rotate(${item.rotation}deg)`,
      }"
      :size="item.size"
      :color="item.color"
    />
  </div>
</template>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateY(-25px) scale(1.05);
    opacity: 0.9;
  }
  100% {
    transform: translateY(0) scale(1);
    opacity: 1;
  }
}

.animate-float {
  animation: float 3.5s ease-in-out infinite;
  transition: transform 0.5s;
}
</style>
