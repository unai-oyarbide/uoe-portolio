# Portafolio - Unai Oyarbide Errazquien

## Detalles del Proyecto

- **Nombre:** Unai Oyarbide Portfolio
- **Tipo de Aplicación:** Web-App (Single Page Application con Zona de Login Privada)
- **Framework:** React (Vite) con TypeScript.
- **Estética:** Brutalismo digital, minimalista, estilo Balenciaga (alto contraste, fuentes grandes grotescas, espacios vacíos, monocromático).

## Estructura de la Web-App

La web-app estará estructurada principalmente en una experiencia continua (Scroll Dynamics) para mostrar el portafolio de manera impactante, y una ruta secundaria para el área de clientes.

### 1. Single Page Experience (Público)
- **Hero Section:** Nombre gigante que desborda la pantalla, tipografía audaz, fondo de alto contraste (negro/gris oscuro), con el **logo en mármol (UOE)** destacado en el centro o como marca de agua arquitectónica.
- **Manifiesto:** Un texto breve y contundente sobre la filosofía de diseño interior de Unai que aparece de forma dramática al hacer scroll.
- **Galería de Proyectos (Scroll Paralaje):** Las fotografías de los proyectos irán apareciendo con efectos asimétricos, de forma escalonada y a distintas velocidades para aportar dinamismo.
- **Contacto:** Footer minimalista y crudo con email, teléfono y acceso a redes sociales profesionales.

### 2. Zona de Login Privada (Clientes)
- **Ruta:** `/login` o `/client-area`
- **Diseño:** Un formulario brutalista, simple y directo. Input lines muy delgadas, tipografía grande.
- **Propósito:** Permitir a los clientes acceder al seguimiento de sus proyectos privados.

## Decisiones Técnicas y Librerías (Stack)

- `Vite + React`: Renderizado rápido y entorno de desarrollo ultra-veloz.
- `GSAP (GreenSock)`: Motor principal para las animaciones complejas (apariciones, paralaje y movimiento sincronizado con el scroll).
- `@studio-freight/lenis`: Utilizado para lograr el **smooth scrolling** (desplazamiento suave) que es obligatorio para dar sensación de lujo y alta costura.
- `lucide-react`: Iconos minimalistas en formato vectorial (SVG).
- `react-router-dom`: Para manejar la navegación entre el portafolio público y la zona de login de clientes de forma instantánea, sin recargar la página.

## Elementos Visuales Disponibles

1. **Logo Principal:** Logotipo UOE esculpido en mármol (ya provisto por el usuario, ubicar en `/public/logo-uoe.png`).
2. **Imágenes de Placeholder:** 3 fotografías generadas por IA de arquitectura de interiores contemporánea, brutalista y elegante para usar mientras se incorporan las fotos de proyectos reales.

---
*Este documento sirve como base arquitectónica y de diseño para la fase de desarrollo.*
