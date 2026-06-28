# Estrategia de Despliegue y Alojamiento - Portfolio Unai Oyarbide

Este documento detalla la hoja de ruta sugerida para publicar la web-app de forma profesional, asegurando alta disponibilidad, seguridad y un coste mínimo o nulo.

## 1. Alojamiento (Hosting) Gratuito

Dado que la aplicación es una **Single Page Application (SPA)** construida con Vite y React, se puede alojar en plataformas de vanguardia sin coste mensual.

### Opciones Recomendadas:
- **Vercel / Netlify:** 
  - **Ventajas:** Alojamiento 100% gratuito. Despliegue continuo automático (cada vez que se actualiza el código en GitHub, la web se actualiza en minutos).
  - **Uso:** Ideal para la parte visual del portafolio.
- **Firebase Hosting (Google):**
  - **Ventajas:** Alojamiento gratuito y muy robusto.
  - **Uso:** Altamente recomendado si en el futuro se va a implementar la funcionalidad real de la *Zona de Clientes*, ya que todo el ecosistema (hosting, base de datos, usuarios) estará en la misma plataforma.

## 2. Dominio Personalizado (Inversión Recomendada)

Para mantener la estética profesional y de alto standing ("Balenciaga esthetic"), es fundamental evitar los subdominios gratuitos (como `unai.vercel.app` o `unai.netlify.app`).

- **Sugerencias de Dominio:** `unai-oyarbide.com`, `unai.design`, o `uoe.studio`.
- **Coste:** Aproximadamente **10€ - 20€ al año**, dependiendo de la extensión (`.com`, `.es`, `.design`).
- **Certificado de Seguridad (SSL/HTTPS):** Todas las plataformas de alojamiento sugeridas (Vercel, Netlify, Firebase) configuran el "candadito de seguridad" (HTTPS) de forma completamente gratuita al vincular el dominio.

## 3. Implementación de la "Zona de Clientes" (Futuro)

Actualmente, el acceso de clientes es una maqueta (Frontend). Para que funcione como un sistema real donde los clientes ingresen con un código y vean información privada de sus proyectos:

- **Autenticación:** Utilizaremos **Firebase Authentication**, que permite gestionar accesos y contraseñas de forma segura y gratuita para bajo volumen de usuarios.
- **Base de Datos:** Utilizaremos **Firestore**, una base de datos en tiempo real donde se guardará la información de los proyectos de cada cliente (planos, presupuestos, estado de la obra).

## 4. Hoja de Ruta de Publicación

1. **Revisión Local:** Terminar de afinar textos, fotos reales de los proyectos de Unai y el logo definitivo.
2. **Control de Versiones:** Crear un repositorio en GitHub para salvaguardar el código.
3. **Conexión de Hosting:** Conectar el repositorio de GitHub con Vercel o Firebase Hosting.
4. **Vinculación de Dominio:** Comprar el dominio en un registrador (ej. Google Domains, Namecheap, Cloudflare) y configurar los DNS para que apunten al nuevo hosting.
