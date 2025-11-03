<template>
  <div class="home-container">
    <div class="overlay">
      <h1 class="title">🎂 ¡Feliz Cumpleaños! 🎉</h1>
      <p class="subtitle">Un pequeño regalo hecho con mucho cariño 💖</p>

      <NuxtLink to="/congratulation" class="start-button">
        Ver Sorpresa 🎁
      </NuxtLink>
    </div>

    <!-- ✨ Emojis flotantes -->
    <div class="floating-emojis">🎈🎊🎁🎂💖🎉🎈🎊🎁🎂💖🎉</div>
  </div>
</template>

<script setup>
// no logic needed — simple landing page
</script>

<style scoped>
/* 🌈 Fondo arcoíris animado */
.home-container {
  height: 100vh;
  width: 100%;
  background: linear-gradient(
    -45deg,
    #ff6ec7,
    #ffa751,
    #ffd700,
    #7fffd4,
    #6a5acd,
    #ff69b4
  );
  background-size: 400% 400%;
  animation: gradientMove 12s ease infinite;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  position: relative;
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* 🎉 Capa central con texto */
.overlay {
  text-align: center;
  color: #fff;
  z-index: 2;
  text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.3);
}

.title {
  font-size: 4rem;
  margin-bottom: 0.8rem;
  animation: fadeIn 2s ease;
}

.subtitle {
  font-size: 1.6rem;
  margin-bottom: 2rem;
  font-style: italic;
}

/* 🎁 Botón principal */
.start-button {
  display: inline-block;
  padding: 0.9rem 2.2rem;
  font-size: 1.2rem;
  font-weight: bold;
  color: #fff;
  background-color: #ff0080;
  border-radius: 2rem;
  text-decoration: none;
  box-shadow: 0 4px 15px rgba(255, 0, 128, 0.4);
  transition: all 0.3s ease;
}

.start-button:hover {
  background-color: #ff4db8;
  transform: scale(1.08);
}

/* 🎈 Emojis flotando */
.floating-emojis {
  position: absolute;
  bottom: 0;
  width: 100%;
  text-align: center;
  font-size: 3rem;
  opacity: 0.25;
  animation: floatEmojis 30s linear infinite;
}

@keyframes floatEmojis {
  0% { transform: translateY(0); }
  100% { transform: translateY(-150%); }
}

/* ✨ Animación del texto */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>
