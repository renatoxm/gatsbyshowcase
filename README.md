# Gatsby Sample Page

![gatsby](https://img.shields.io/badge/Gatsby-663399?style=for-the-badge&logo=gatsby&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Bootstrap](https://img.shields.io/badge/Bootstrap-563D7C?style=for-the-badge&logo=bootstrap&logoColor=white)
![GraphQL](https://img.shields.io/badge/-GraphQL-E10098?style=for-the-badge&logo=graphql&logoColor=white)

This is a sample Gatsby landing page in Typescript with Bootstrap 5, GraphQL and MongoDB for presentation purposes only.

This project was created only as a portfolio showcase, just the landing page works.

## Features

- [x] Gatsby 5
- [x] React 18
- [x] TypeScript
- [x] Bootstrap 5
- [x] ESLint
- [x] Prettier — Code Formatter for consistent style
- [x] Husky
- [x] Commitlint
- [x] lint-staged
- [x] Path Mapping — Import components or images using the `@` prefix
- [x] Pnpm
- [x] PR Workflow — Run Type Check & Linters on Pull Requests
- [ ] Jest unit testing <https://www.gatsbyjs.com/docs/how-to/testing/unit-testing/>
- [ ] Cypress
- [ ] DataDog

## Gatsby Features

- [x] Blog contents
- [x] Blog Pagination
- [x] Responsive Images (static & dynamic) <https://www.gatsbyjs.com/plugins/gatsby-plugin-image>
- [x] Blog Search using JS Search (In 'posts' page)
- [ ] Responsive Background Images
- [ ] Forms

## Scripts

- `pnpm start` — Starts the application in development mode at `http://localhost:8000`.
- `pnpm build` — Compile your application and make it ready for deployment.
- `pnpm serve` — Serve the production build of your site
- `pnpm clean` — Wipe out the cache (`.cache` folder).
- `pnpm type-check` — Validate code using TypeScript compiler.
- `pnpm lint` — Runs ESLint for all files in the `src` directory.
- `pnpm format` — Runs Prettier for all files in the `src` directory.
- `pnpm test` — Run tests with Vitest.
- `pnpm test:watch` — Run tests on watch mode.

### Path Mapping

TypeScript are pre-configured with custom path mappings. To import components or files, use the `@` prefix.

```tsx
import { Button } from '@/components/Button'

// To import images or other files from the static folder
import avatar from '@/static/avatar.png'
```

## Install the project

```sh
# npm
pnpm i
```

## Starting the project

To start the project locally, run:

```sh
pnpm develop
```

Open `http://localhost:8000` with your browser to see the result.
