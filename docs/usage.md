---
sidebarDepth: 2
---

# Usage

## Install

### Install with npm

```bash
npm install vue-headless
```

### Install with yarn

```bash
yarn add vue-headless
```

### Use CDN

> Currently not available. At this moment, the priority it's to provide the library in a stable way in npm registry. In the future a CDN version will be published.

## Use the components

Include the headless components in your new or existing Vue components it's really easy:

**1.** Import the desired headless component in your JavaScript:
```js
import { SelectHeadless } from 'vue-headless';
```

**2.** Add that component as a mixin:
```js
export default {
  mixins: [SelectHeadless]
  // The rest of your component...
```

**3.** And you can start using the props, computeds an events included in your component.