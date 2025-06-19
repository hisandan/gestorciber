
### Comands used:




### Important file changes:

- **vite.config.ts**
```ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/gestorciber", 
  ...
})
```


- **package.json**
```json
"name": "gestorciber",
  "private": true,
  "version": "0.0.0",
  "homepage": "https://hisandan.github.io/gestorciber/",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "deploy": "tsc -b && vite build && gh-pages -d dist"
  },
  ....
```


