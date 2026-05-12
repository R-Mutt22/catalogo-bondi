import { defineConfig } from 'astro/config';

export default defineConfig({
  //  Modo estático (SSG)
  output: 'static',
  
  //  Configuración de imágenes (sin 'format')
  image: {
    domains: [],
    cacheDir: './.astro/cache/image',
  },

  //  Configuración para optimización
  vite: {
    ssr: {
      external: ['sharp']
    }
  }
});