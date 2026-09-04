# DoubleTek — Landing site

Sitio institucional bilingüe de DoubleTek, construido para proyectar una firma tecnológica mexicana de alto calibre con alcance global. Se genera como un sitio 100% estático, sin servidor ni base de datos, y está optimizado para un despliegue de costo operativo mínimo.

## Características

- Astro con salida estática: HTML, CSS y JavaScript precompilados.
- Español e inglés con cambio instantáneo y preferencia de idioma persistente en el navegador.
- Canvas interactivo de partículas y malla tecnológica, con una textura visual estática como respaldo para navegadores con movimiento reducido.
- Diseño responsive, dark mode, glassmorphism, animaciones progresivas y soporte para `prefers-reduced-motion`.
- Formulario sin backend: abre el cliente de correo con una solicitud dirigida a `contacto@doubletek.vip`.
- Sin analítica, trackers ni cookies de terceros.

## Stack

| Área | Elección |
| --- | --- |
| Framework | [Astro](https://astro.build/) 7.3 |
| Bundler | Vite 8, integrado por Astro |
| Lenguaje | TypeScript 6 / JavaScript del navegador |
| Estilos | CSS moderno, sin framework de runtime |
| Hosting | Cloudflare Pages o GCP Cloud Storage + Cloudflare CDN |

## Requisitos

- Node.js 26.0 o superior (el proyecto se fija a 26.8.1 mediante `.nvmrc`)
- npm 12.0 o superior

## Desarrollo local

```bash
npm ci
npm run dev
```

Astro mostrará la URL local de desarrollo, normalmente `http://localhost:4321`.

## Verificación y build de producción

```bash
npm run check
npm run build
npm run preview
```

`npm run build` ejecuta la comprobación de Astro y genera el artefacto de publicación en `dist/`. Ese directorio es deliberadamente ignorado por Git: se vuelve a crear en cada compilación.

## Despliegue

### Cloudflare Pages

1. Conecta el repositorio a Cloudflare Pages.
2. Selecciona Node.js 26 o superior.
3. Configura `npm run build` como **Build command**.
4. Configura `dist` como **Build output directory**.
5. Asocia `doubletek.vip` cuando el dominio esté listo.

### Google Cloud Storage + Cloudflare

1. Ejecuta `npm run build`.
2. Sube el contenido de `dist/` —no la carpeta contenedora— a un bucket configurado para servir sitio web estático.
3. Apunta Cloudflare al bucket y habilita HTTPS, compresión y caché de activos estáticos.
4. Define una regla de fallback a `index.html` solo si en el futuro se incorporan rutas del lado del cliente.

## Estructura del proyecto

```text
src/
├── i18n/          # Contenido ES y EN
├── layouts/       # Estructura HTML, metadatos y fuentes
├── pages/          # Ruta estática principal
└── styles/         # Sistema visual y reglas responsive
public/             # Archivos públicos sin transformación
```

## Personalización antes de lanzar

- Actualiza las URLs de LinkedIn e Instagram en `src/pages/index.astro`.
- Revisa el contenido comercial en `src/i18n/es.json` y `src/i18n/en.json`; ambos archivos deben cambiarse en conjunto.
- El formulario no transmite datos a un servicio externo. Si se requiere captura de leads sin cliente de correo, integra Formspree, Resend o una función segura y conserva las credenciales exclusivamente en variables de entorno.
- Mantén `package-lock.json` versionado para instalaciones reproducibles. Nunca subas `node_modules/`, `dist/` ni archivos `.env`.
- TypeScript 6 se mantiene de forma intencional: la versión actual de `@astrojs/check` solo declara compatibilidad con TypeScript 5 y 6. Actualizar a TypeScript 7 se evaluará cuando Astro Check añada soporte oficial, para no perder la comprobación de componentes `.astro`.

## Calidad y accesibilidad

El sitio está diseñado para una experiencia de alto contraste, navegación por anclas, controles accesibles y reducción automática de animación cuando el sistema operativo del visitante lo solicita. Valida el build antes de cada publicación con `npm run build`.

## Licencia

© 2026 DoubleTek. Todos los derechos reservados.
