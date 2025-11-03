<template>
  <div class="ritmo-container">
    <!-- 🎶 Reproductor -->
    <div class="player-container">
      <h1 class="title">🎵 Nuestra Canción 💖</h1>
      <audio ref="audioRef" :src="songUrl"></audio>

      <div class="controls">
        <button class="music-btn" @click="togglePlay">
          {{ isPlaying ? "⏸ Pausar" : "▶️ Reproducir" }}
        </button>
      </div>
    </div>

    <!-- ✨ Poema -->
    <div class="poema-container">
      <p class="poema-text" v-html="poema"></p>
    </div>

    <!-- 🔘 Navegación -->
    <div class="nav-buttons-container">
      <button class="nav-btn" @click="goPreviousPage">⬅️ Volver a Fotos</button>
      <button class="nav-btn" @click="goNextPage">Ir a la Sorpresa 🎁 ➡️</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { navigateTo } from "#app";

// 🎵 Cargar canción desde assets/sounds
const songFile = import.meta.glob("~/assets/sounds/*.{mp3,ogg,wav}", {
  eager: true,
});

// ✅ Si solo tienes una canción, la obtenemos:
const songUrl = Object.values(songFile)[0]?.default || "";

// Estado de reproducción
const audioRef = ref(null);
const isPlaying = ref(false);

const togglePlay = () => {
  const audio = audioRef.value;
  if (!audio) return;
  if (isPlaying.value) {
    audio.pause();
  } else {
    audio.play();
  }
  isPlaying.value = !isPlaying.value;
};

// ✍️ Texto (poema)
const poema = `
  Mi Respuesta (Desde la Peregrina)

Yo sé
que el reloj no se detiene,
y a mí también me duelen los años que pasan sin poder estar junto a ti.
Pero en cada nuevo paisaje,en cada cielo distinto que miro,
llevo tu recuerdo fijo,como un faro que me guía desde allí.

La distancia también me atraviesa el alma,
pero se quebró en el eco de tu canción,que se volvió mi mapa y mi calmante.
Porque llevo tu amistad tatuada en cada paso,
y es el equipaje más valioso de esta peregrina itinerante.

El mundo a veces se reduce a una pantalla y a la espera de tu mensaje,
pero en ese espacio caben el mar,la risa y toda nuestra historia de amistad.
A tu salud levanto mi tristeza convertida en fe,
porque tu cariño es el país al que siempre vuelvo,mi más segura realidad.

Seguiré acumulando kilómetros y sellos en el pasaporte,
esta condena de las huidas la cargo con tu fuerza en el pecho.
Y no solo pidas fortuna para mi vida,
pídele al mundo que me prepare el camino, que yo soy inquebrantable mientras sepa que tú me esperas.

No solo te llevé pedacitos de tu Habana,
me llevé la certeza de tu abrazo,la luz de tu mirada clara.
Los derrumbes no son solo en las fachadas,lo sé,
pero nuestro cariño es la casa que se niega a caer.

Ahora la marea me arrastra, es verdad,
pero en cada ola escucho los susurros de nuestro ayer.
La sangre nunca se olvida,y la amistad como la nuestra es otro tipo de linaje,
raíces compartidas que no entienden de fronteras ni de viajes.

Tú montaña, yo ciudad... por ahora.
Tú mi verso,yo tu postal... en este instante.
Pero las aves con su vuelo siempre traen noticias,
y mi soledad se llena cuando sé que en tu corazón tengo raíces y no cicatrices.

No necesito nuevas promesas para sanar,
con la promesa tácita de tu amistad me basta y me sobra.
Seguimos adelante,cada una en su trinchera,
hasta que el día se abra y volvamos a compartir la misma tierra.
`;

// 🚀 Navegación
const goPreviousPage = () => {
  navigateTo("/photos");
};
const goNextPage = () => {
  navigateTo("/fin");
};
</script>

<style scoped>
/* 🌈 Fondo arcoíris animado con emojis */
.ritmo-container {
  position: relative;
  min-height: 100vh;
  text-align: center;
  padding: 2rem;
  overflow: hidden;
  background: linear-gradient(
    120deg,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  background-size: 800% 800%;
  animation: rainbowShift 15s linear infinite;
}

/* 💫 Emojis flotando sobre el fondo */
.ritmo-container::before {
  content: "💖🎶🎂💞🎵💘🎼🎉💓";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  font-size: 3rem;
  opacity: 0.1;
  white-space: pre-wrap;
  animation: emojiFloat 30s linear infinite;
  pointer-events: none;
}

@keyframes rainbowShift {
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

@keyframes emojiFloat {
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(-100%);
  }
}

.title {
  font-size: 2rem;
  color: #fff;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  margin-bottom: 1rem;
}

/* 🎧 Botones del reproductor */
.music-btn {
  background: linear-gradient(90deg, #ff6b6b, #f06595, #f783ac);
  color: white;
  border: none;
  border-radius: 9999px;
  padding: 0.8rem 1.5rem;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.25);
  transition: transform 0.2s ease;
}

.music-btn:hover {
  transform: scale(1.05);
}

.controls {
  margin-top: 1rem;
}

/* 📜 Caja blanca para el poema */
.poema-container {
  margin-top: 3rem;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 24px;
  padding: 2rem;
  max-width: 650px;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.15);
  position: relative;
  z-index: 2;
}

.poema-text {
  font-size: 1.3rem;
  color: #333;
  line-height: 1.8;
  font-style: italic;
  text-align: center;
}

/* 🔘 Botones de navegación */
.nav-buttons-container {
  margin-top: 2.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 2;
}

.nav-btn {
  background: linear-gradient(90deg, #ff9a9e, #fad0c4);
  color: #fff;
  font-weight: bold;
  padding: 0.8rem 1.6rem;
  border: none;
  border-radius: 9999px;
  cursor: pointer;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease, background 0.3s ease;
}

.nav-btn:hover {
  transform: scale(1.05);
  background: linear-gradient(90deg, #fbc2eb, #a6c1ee);
}
</style>
