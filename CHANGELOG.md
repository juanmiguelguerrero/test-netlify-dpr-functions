# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

---

## [Unreleased]


## [0.4.2] - 2021-05-27

### Changed
- Actualización dependencias npm (npm audit fix)


## [0.4.1] - 2021-04-06

### Changed
- Actualización TailwindCSS 2.1.1 (JIT mode)


## [0.4.0] - 2021-01-30

### Added
- Webpack para generación de bundle js y vue
- Postcss para procesar css Tailwind y personalizao

### Changed
- Configuración Eleventy para gestionar assets css
- Optimizada configuración de Tailwindcss para mejorar tiempo preprocesado
- Se actualiza la configuración de los scripts para `build` y `dev`

### Removed
- Se ha eliminado Parceljs
- Se elimina el punto de entrada `/src/bundle.js`


## [0.3.1] - 2021-01-13

### Changed
- Actualización a TailwindCss 2.0.2


## [0.3.0] - 2021-01-13

### Fixed
- Condicinar Google TM para producción (#1)

### Changed
- Cambio nombre variable config.locale a config.locales (#2)


## [0.2.1] - 2020-10-19

### Changed
- Configuración `purge` de Tailwindcss para reducción bundle

### Fixed
- Error en rutas contenido PurgeCSS en build
- Activada opción `--no-cache` en Parcel Build


## [0.2.0] - 2020-10-17

### Added
- Configuración de TailWindCSS como framework por defecto
- Carga scripts desde `_data/config.js` en default layout 

### Changed
- Creación de `bundle.js` como punto de entrada único para Parceljs
- Actualización `README.md` incluyendo TailwindCSS

### Removed
- Estilos en componente Vue de prueba


## [0.1.0] - 2020-09-01

### Added
- Archivo datos de configuracón `_data/config.js`
- Programación title, lang, base, link, meta y OpenGraph en default layout
- Archivos sitemap.xml y robots.txt
- Programación alternate, canonical, description, keywords en default layout
- Programación noindex y nofollow en default layout
- Variable siteURL en '_data/config.js'
- Programación script en default layout
- Shortcuts icons (favicons por defecto)
- Código Google Tag Manager en default layout

### Changed
- Optimizado de openGraph y twitter en default layout
- Optimización carga de metas y links en default layout


## [0.0.1] - 2020-08-24

### Added
- Configuración 11ty
- Configuración Parceljs
- Script comandos de producción y desarrollo
- Configuración entorno desarrollo Netlify Dev
- Instalación forzada de dependencias Netlify Functions
- Archivo CHANGELOG.md
- Archivo README.md