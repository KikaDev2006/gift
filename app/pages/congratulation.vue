<template>
  <div
    class="rainbow-bg flex flex-col items-center justify-center min-h-screen relative overflow-hidden text-center"
  >
    <!-- 🎈 Emojis rojos flotando debajo del texto -->
    <div class="floating-icons">🎈🎁❤️🎊🎁🎈🎉❤️🎈🎁🎊</div>

    <h1
      class="text-6xl md:text-7xl font-extrabold text-white drop-shadow-lg mb-8 relative z-10"
    >
      🎉 HAPPY BIRTHDAY ALINA! 🎉
    </h1>

    <!-- 🎁 Botón de regalos -->
    <NuxtLink
      to="/regalos"
      class="px-6 py-3 bg-white/20 border-2 border-white text-white text-xl font-semibold rounded-2xl backdrop-blur-md hover:bg-white hover:text-pink-600 transition-all duration-300 shadow-lg relative z-10"
    >
      🎁 Descubre tus regalos
    </NuxtLink>
    
  </div>
</template>

<style scoped>
/* 🌈 Fondo arcoíris animado */
.rainbow-bg {
  background: linear-gradient(
    270deg,
    #e40303,
    #ff8c00,
    #ffed00,
    #008026,
    #004dff,
    #750787
  );
  background-size: 1200% 1200%;
  animation: rainbow 12s ease infinite;
  position: relative;
  overflow: hidden;
}

@keyframes rainbow {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

/* 🎈 Emojis flotantes rojos */
.floating-icons {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  font-size: 3rem;
  opacity: 0.25;
  color: red;
  white-space: pre-wrap;
  animation: floatIcons 25s linear infinite;
  z-index: 1; /* 🔻 Debajo del texto */
  pointer-events: none;
}

@keyframes floatIcons {
  0% {
    transform: translateY(100%);
  }
  100% {
    transform: translateY(-100%);
  }
}

/* ✨ Texto principal blanco */
h1 {
  color: white;
}

/* 💫 Animación sutil en texto */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
