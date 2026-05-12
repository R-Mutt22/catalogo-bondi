# Catálogo El Bondi Colectivo

Catálogo El Bondi Colectivo es una plataforma web diseñada para explorar y descubrir obras de arte y sus artistas. Este proyecto utiliza Astro para ofrecer una experiencia rápida y moderna, permitiendo a los usuarios navegar la galerías, conocer a los artistas y explorar colecciones de arte.

## 🚀 Estructura del Proyecto

El proyecto está organizado de la siguiente manera:

```text
/
├── public/                # Archivos estáticos como imágenes y fuentes
├── src/
│   ├── assets/           # Recursos como imágenes y estilos
│   ├── components/       # Componentes reutilizables de la interfaz
│   ├── data/             # Archivos JSON con datos de obras y artistas
│   ├── layouts/          # Diseños base para las páginas
│   ├── pages/            # Páginas del sitio web
│   ├── styles/           # Archivos CSS globales
│   └── utils/            # Funciones y constantes reutilizables
├── package.json          # Dependencias y scripts del proyecto
└── tsconfig.json         # Configuración de TypeScript
```

## 🖼️ Funcionalidades

- **Explorar Obras de Arte:** Navega por una galería de obras destacadas.
- **Conocer Artistas:** Descubre información sobre artistas y sus trayectorias.
- **Búsqueda Dinámica:** Encuentra obras y artistas rápidamente.
- **Diseño Responsivo:** Optimizado para dispositivos móviles y de escritorio.

## 🛠️ Comandos Disponibles

Ejecuta los siguientes comandos desde la raíz del proyecto:

| Comando                  | Acción                                           |
| :----------------------- | :----------------------------------------------- |
| `npm install`            | Instala las dependencias                        |
| `npm run dev`            | Inicia el servidor de desarrollo en `localhost:4321` |
| `npm run build`          | Construye el sitio para producción en `./dist/` |
| `npm run preview`        | Previsualiza el sitio construido localmente     |
| `npm run astro ...`      | Ejecuta comandos CLI como `astro add`, `astro check` |
| `npm run astro -- --help`| Obtén ayuda sobre Astro CLI                     |

## 📄 Documentación

### Datos de Obras y Artistas
Los datos de las obras y artistas se encuentran en el archivo `src/data/artworks.json`. Este archivo sigue el siguiente formato:

```json
[
  {
    "id": "1",
    "title": "Obra de Ejemplo",
    "artist": "Artista Ejemplo",
    "year": 2023,
    "image": "/assets/images/artworks/ejemplo.jpg"
  }
]
```

### Estructura de Componentes
Los componentes reutilizables, como la navegación y el pie de página, se encuentran en `src/components/`.

### Estilos
Los estilos globales están definidos en `src/styles/global.css`. Puedes agregar estilos específicos para componentes según sea necesario.

## 🌐 Despliegue

Para desplegar el proyecto, construye el sitio con `npm run build` y sube el contenido de la carpeta `./dist/` a tu servidor o plataforma de hosting preferida.

---

¡Explora las obras de arte con Catálogo El Bondi Colectivo!
