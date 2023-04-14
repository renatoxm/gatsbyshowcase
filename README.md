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

## Testing / Observability

- [x] Jest - JavaScript testing framework
- [x] Cypress - e2e (end to end) testing
- [ ] Cypress axe accessibility testing API
- [ ] Storybook - UI development, testing, and documentation
- [ ] DataDog -monitoring & security

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
- `pnpm test` — Run tests with Jest.
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

## Running Cypress on WSL2

<https://nickymeuleman.netlify.app/blog/gui-on-wsl2-cypress>

### For good measure, update that linux install (on your shell root)

```sh
sudo apt update
sudo apt upgrade
```

### Install X-server

<https://sourceforge.net/projects/vcxsrv/>

**Important:** On the page that lets you enable extra settings, be sure to disable access control.

### Add dependencies to your linux distro

<https://docs.cypress.io/guides/continuous-integration/introduction#Dependencies>

For ubuntu

```sh
sudo apt install libgtk-3-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2
```

I had issues trying to install on ubuntu 22 inside wsl2 so i fixed with:

```sh
sudo apt-get install libpcre3=2:8.39-13ubuntu0.22.04.
```

<https://github.com/TablePlus/TablePlus-Linux/issues/164>

### Add in your .bashrc

```sh
# set DISPLAY variable to the IP automatically assigned to WSL2
export DISPLAY=$(cat /etc/resolv.conf | grep nameserver | awk '{print $2; exit;}'):0.0
sudo /etc/init.d/dbus start &> /dev/null
```

### Grant passwordless access for dbus

```sh
sudo visudo -f /etc/sudoers.d/dbus
```

Press CTRL+O to save, then press Enter to confirm. Finally, press CTRL+X to close the editor.

### Go back to your project and launch Cypress

```sh
pnpm cy:open
```
