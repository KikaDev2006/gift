<template>
  <div class="album-container">
    <h1 class="title rainbow-text">📸 Álbum Fotográfico 🌈</h1>

    <!-- 🖼️ Galería -->
    <div class="photos-grid">
      <div
        v-for="(photo, index) in limitedPhotos"
        :key="index"
        class="photo-card"
        :style="{ borderColor: getColor(index) }"
      >
        <img :src="photo.url" :alt="'Foto ' + (index + 1)" class="photo-img" />

        <!-- ⭐ Calificación (solo lectura) -->
        <div class="rating-section">
          <label>Calificación:</label>
          <div class="stars">
            <span
              v-for="n in 5"
              :key="n"
              class="star"
              :class="{ filled: n <= photo.rating }"
            >
              ★
            </span>
          </div>
        </div>
      </div>
    </div>

    <!-- ✅ Botones de navegación -->
    <div class="nav-buttons-container">
      <button class="rainbow-btn" @click="goPreviousPage">
        ⬅️ Página anterior
      </button>

      <button class="rainbow-btn" @click="goNextPage">
        Siguiente página ➡️
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from "vue";
import { navigateTo } from "#app";

// Lista reactiva de fotos
const photos = ref([]);

// ✅ Importa todas las imágenes del directorio assets/images
const imageFiles = import.meta.glob("~/assets/images/*.{jpg,jpeg,png,gif,webp}", {
  eager: true,
});

// 🚀 Cargar imágenes automáticamente
onMounted(() => {
  photos.value = Object.keys(imageFiles).map((path) => ({
    url: imageFiles[path].default,
    rating: 5 // 🔹 Genera calificación aleatoria (1–5)
  }));
});

// ✅ Limitar a 10 fotos
const limitedPhotos = computed(() => photos.value.slice(0, 100));

// 🚀 Navegación entre páginas
const goNextPage = () => {
  navigateTo("/ritmo");
};
const goPreviousPage = () => {
  navigateTo("/regalos");
};

// 🎨 Colores para los marcos
const colors = [
  "#FF6B6B",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#FFB6C1",
  "#9B5DE5",
  "#00BBF9",
  "#F15BB5",
  "#FFA500",
  "#8A2BE2",
];
const getColor = (index) => colors[index % colors.length];
</script>

<style scoped>
.album-container {
  background-color: #ffffff;
  min-height: 100vh;
  padding: 2rem;
  text-align: center;
}

.title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #333;
}

/* 🌈 Botones arcoíris reutilizables */
.rainbow-btn {
  display: inline-block;
  background: linear-gradient(
    90deg,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  background-size: 400% 400%;
  color: white;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border-radius: 9999px;
  cursor: pointer;
  transition: transform 0.3s ease, opacity 0.3s ease;
  animation: rainbow 6s linear infinite;
  border: none;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  margin: 0.5rem;
}

.rainbow-btn:hover {
  transform: scale(1.08);
}

/* 📷 Galería */
.photos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 1.5rem;
  justify-items: center;
}

.photo-card {
  border: 5px solid;
  border-radius: 16px;
  overflow: hidden;
  width: 220px;
  background-color: #fafafa;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: relative;
}

.photo-img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.rating-section {
  padding: 0.5rem;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
}

.rating-section label {
  font-weight: 500;
  color: #333;
}

/* ⭐ Estrellas (solo lectura) */
.stars {
  display: flex;
  justify-content: center;
  gap: 0.25rem;
  pointer-events: none; /* Desactiva clics */
}

.star {
  font-size: 1.4rem;
  color: #ccc;
}

.star.filled {
  color: gold;
}

.nav-buttons-container {
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}
</style>

