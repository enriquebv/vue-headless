# Introducción

La inclusión en el mundo del front-end de frameworks como Vue han revolucionado la forma en las que trabajamos en las aplicaciones web. Pero nos seguimos encontrando con un problema, es difícil encontrar en la comunidad componentes que se ajusten a nuestros requisitos, por lo que pasamos horas tratando de cambiar los estilos, o añadiendo mas código para que el componente se comporten como queramos, o forkeando ese código para crear una version de la que luego nos tendremos que ocupar nosotros. Todo lo contrario de una base de código sana.

**vue-headless** se ha creado con la idea de crear una serie de componentes headless para proveer la funcionalidad, y tu solo tengas que preocuparte de crear una gran aplicación.

## ¿Que es un componente headless?

Un componente headless es aquel que provee funcionalidad, pero no interfaz. Suena un poco contradictorio que un componente no tenga interfaz, pero la idea se que tu construyas esa UI, que es lo que realmente le da valor a tu producto. Esta librería se ocupara del trabajo sucio, incluyendo en tus componentes a través de [mixins](https://es.vuejs.org/v2/guide/mixins.html) los métodos, datos y props necesarios para que tu solo tengas que concetrarte que ocuparte del UX/UI.

> Rule of Separation: Separate policy from mechanism; separate interfaces from engines.
> - Eric S. Raymond

## Robusto

Desde su base, los componentes de esta librería se construyen en TypeScript, para proveer robustez en el código, y tests unitarios con Jest usando TDD. vue-headless usa estas herramientas para proveer unos componentes consistentes.

> **TDD** es una practica de ingeniería de software que consta (explicado muy resumido) de traducir los requisitos a pruebas, y crear un código que pase esas pruebas. Los componentes están probados desde el concepto.

### ¿Necesito TypeScript?

**No**, esta librería es perfectamente compatible con ecosistemas JavaScript y TypeScript.

## No encuentro la funcionalidad que necesito

Si no encuentras en esta librería algo que necesitas, ya sea un nuevo componente o una funcionalidad dentro de uno existente, puedes dejar tu sugerencia en [GitHub](https://github.com/enriquebv/vue-headless/issues) o [Discord](https://discord.gg/nFfxX5B) para que estudiemos si seria conveniente incluirla, y ayudarnos a crear una librería completa.