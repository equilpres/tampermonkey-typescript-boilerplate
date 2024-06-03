### Tampermonkey TypeScript Boilerplate

Minimalistic boilerplate for Tampermonkey userscripts in TypeScript.

> 🌟 Svelte is included here as a small bonus. If you don't need it, delete all files in `src` folder except `app.ts` and `meta.*`.

#### Prerequisites

- [Tampermonkey](https://www.tampermonkey.net/) extension
- [Node.js](https://nodejs.org/) (^18.18)
- [pnpm](https://pnpm.io/) (^8.15)

#### Getting Started

1. Clone repo:

      ```bash
      git clone https://github.com/equilpres/tampermonkey-typescript-boilerplate.git
      ```

2. Go to project dir:

      ```bash
      cd tampermonkey-typescript-boilerplate
      ```

3. Install deps:

      ```bash
      pnpm install
      ```

#### Scripts

- `build`: Build userscript.

     ```bash
     pnpm build
     ```

- `build::watch`: Build userscript and watch for changes.

     ```bash
     pnpm build::watch
     ```

- `svelte-check`: Check Svelte files.

     ```bash
     pnpm svelte-check
     ```

- `lint`: Lint code.

     ```bash
     pnpm lint
     ```

- `fmt`: Format code.

     ```bash
     pnpm fmt
     ```

- `bump`: Update deps.

     ```bash
     pnpm bump
     ```

#### License

This project is under the MIT License. See [LICENSE](LICENSE) for details.
