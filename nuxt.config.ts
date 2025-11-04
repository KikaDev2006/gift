import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  css: ["./app/assets/css/main.css"],

  ssr: false, // 👈 Desactiva SSR (solo frontend, tipo SPA)
  
  nitro: {
    preset: "static", // 👈 Genera una versión estática al hacer `nuxi generate`
  },

  vite: {
    plugins: [tailwindcss()],
  },
});
