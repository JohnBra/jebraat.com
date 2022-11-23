---
title: How to Build a Chrome Extension in 5 Minutes
date: '2022-11-21'
lastmod: '2022-11-21'
tags: ['react', 'tech', 'typescript', 'tailwindcss']
draft: true
featured: true
summary: Learn how to build a Google Chrome web extension with React, TypeScript and TailwindCSS in less than 5 minutes. Includes a free template.
---

I have been building a Chrome extension for a while now.

Supatabs is a an extension to reduce tab clutter and improve your computer's performance.
By reducing the amount of open tabs you can save up to 95% of your RAM.

In this article I want to show you how you can build a production ready extension in only
4 minutes.

## Starting from a template

One of the byproducts of Supatabs is an extension template I built.

The template is setup and ready to go with Manifest V3, React, TailwindCSS and TypeScript.
Instead of webpack I used vite. In my opinion it's easier to maintain.

Follow these steps to set up your new chrome extension:

1. Go to the [template repository](https://github.com/JohnBra/vite-web-extension)
2. Click the **"Use this template"** button to create your own project in your GitHub.
If you aren't using GitHub just clone the repository
3. Go back to the template repository and give it a star 😜

## Setting up the development environment

Follow these steps to start your dev environment:

1. Change the `name`, `displayName` and `description` in the `package.json`. These properties will be 
used in the build step to name your extension for the store
2. `yarn install` to install the dependencies
3. `yarn dev` to start the development server
4. [Load the extension in Chrome](https://developer.chrome.com/docs/extensions/mv2/getstarted/#manifest):
    1. Open your Chrome browser
    2. Enter `chrome://extensions` in the address bar and hit enter
    3. Turn on developer mode
    4. Load unpacked extension: Use the generated `dist` directory in your project folder. This will be 
    generated and updated when you use `yarn dev` or `yarn build`

That's all you need to do.

**A manifest with version 3 will be generated automatically for you.**

Whenever you save changes and the `dev` command is running, the `dist` directory will automatically be 
updated thanks to `nodemon`. This means you don't have to do step 4 more than once.


## Implement some functionality

To get a feel for how extension development works, we will implement a simple button in the extension 
popup to open a new tab.

As we won't need most of the different Chrome extension pages, we will remove the irrelevant pages from the 
project. This is so they won't be included in the final build.

**Stop the development server** and then delete the following directories including content:
- `src/pages/content/`
- `src/pages/devtools`
- `src/pages/newtab`
- `src/pages/options`
- `src/pages/panel`
- `src/pages/background`

Then we will modify the `vite.config.ts` to look like the following:
```ts:vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import makeManifest from './utils/plugins/make-manifest';
import copyContentStyle from './utils/plugins/copy-content-style';

const root = resolve(__dirname, 'src');
const pagesDir = resolve(root, 'pages');
const assetsDir = resolve(root, 'assets');
const outDir = resolve(__dirname, 'dist');
const publicDir = resolve(__dirname, 'public');

export default defineConfig({
  resolve: {
    alias: {
      "@src": root,
      "@assets": assetsDir,
      "@pages": pagesDir,
    },
  },
  plugins: [react(), makeManifest(), copyContentStyle()],
  publicDir,
  build: {
    outDir,
    sourcemap: process.env.__DEV__ === "true",
    rollupOptions: {
      input: {
        popup: resolve(pagesDir, 'popup', 'index.html'),
      },
      output: {
        entryFileNames: (chunk) => `src/pages/${chunk.name}/index.js`,
      },
    },
  },
});

```

Now we need to cleanup `src/manifest.ts` accordingly:

```ts:src/manifest.ts
import pkg from '../package.json';
import { ManifestType } from '@src/manifest-type';

const manifest: ManifestType = {
  manifest_version: 3,
  name: pkg.displayName,
  version: pkg.version,
  description: pkg.description,
  action: {
    default_popup: 'src/pages/popup/index.html',
    default_icon: 'icon-34.png',
  },
  icons: {
    "128": 'icon-128.png',
  },
  web_accessible_resources: [
    {
      resources: ['icon-128.png', 'icon-34.png'],
      matches: [],
    },
  ],
};

export default manifest;

```


## Publishing

To publish stop the dev server

Yarn build 

Zip the build folder

Upload your package
