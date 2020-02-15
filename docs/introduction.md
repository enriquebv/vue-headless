---
sidebarDepth: 2
---


# Introduction

The inclusion in the front-end world of frameworks like Vue have revolutionized the way we work in web applications. But we keep finding a problem, it is difficult to find in the community components that fit our requirements, so we spend hours trying to change the styles, or adding more code to make the component behave as we want, or forking that code to create a version that then we will have to take care of. The opposite of a healthy code base.

**vue-headless** has been created with the idea of creating a series of headless components to provide the functionality, and you only have to worry about creating a great application.

## What's a headless component?

A headless component is one that provides functionality, but no interface. It sounds a bit contradictory that a component has no interface, but the idea is that you build that UI, which is what really gives value to your product. This library will take care of the dirty work, including in your components through [mixins](https://es.vuejs.org/v2/guide/mixins.html) the methods, data and props needed so that you only have to concentrate on taking care of the UX/UI.

> Rule of Separation: Separate policy from mechanism; separate interfaces from engines.
> - Eric S. Raymond

## Robust

From its base, the components of this library are built in TypeScript, to provide code robustness, and unit tests with Jest using TDD. vue-headless uses these tools to provide consistent components.

> **TDD** is a software engineering practice that consists (explained very briefly) of translating requirements into tests, and creating code that passes those tests. The components are tested from the concept.

### Do I need TypeScript?

**No**, this library is perfectly compatible with JavaScript and TypeScript ecosystems.

## I can't find the functionality I need

If you don't find something you need in this library, either a new component or a feature within an existing one, you can leave your suggestion at [GitHub](https://github.com/enriquebv/vue-headless/issues) or [Discord](https://discord.gg/nFfxX5B) to see if we should include it, and help us create a complete library.