# Introduction

La inclusión en el mundo del front-end de frameworks como Vue han revolucionado la forma en las que trabajamos en las aplicaciones web. Pero nos seguimos encontrando con un problema que arrastramos desde el pasado, y es que es difícil que encontremos en la comunidad soluciones especificas para los componentes que necesitamos en nuestra aplicación, por lo que pasamos horas tratando de cambiar los estilos de una tabla, añadiendo mas código para que el componente se comporten como queramos, o forkeando ese código para crear una version de la que luego nos tendremos que ocupar nosotros. Todo lo contrario de una base de código sana.

**vue-headless** nace con la idea de crear una serie de componentes headless para proveer la funcionalidad, y tu te ocupes te hacer una gran aplicación.

## ¿Que es un componente headless?

Un componente headless es aquel que provee funcionalidad, pero no interfaz. Suena un poco contradictorio que un componente no tenga interfaz, pero la idea se que tu construyas esa UI, que es lo que realmente le da valor a tu producto. Esta librería se ocupara del trabajo sucio, incluyendo en tus componentes a través de [mixins](https://es.vuejs.org/v2/guide/mixins.html) los métodos, datos y props necesarios para que tu solo tengas que concetrarte que ocuparte del UX/UI.

> Rule of Separation: Separate policy from mechanism; separate interfaces from engines.
> - Eric S. Raymond

## Robusto