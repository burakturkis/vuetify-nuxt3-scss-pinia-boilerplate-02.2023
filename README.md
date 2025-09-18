# Nuxt 3 Minimal Starter (Typescript) / Vuetify 3.10.2

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Version Updates & Recent Changes

### Latest Version (September 2025)
- **Nuxt**: Updated to v4.1.2
- **Vuetify**: Updated to v3.10.2
- **Pinia**: v3.0.3 (core package added)
- **@pinia/nuxt**: v0.11.2
- **Node.js**: Required version updated to >=22.0.0
- **Sass**: Updated to v1.92.1

### Recent Fixes & Improvements
- ✅ **Fixed Pinia dependency issue**: Added missing core `pinia` package
- ✅ **Modernized Sass syntax**: Replaced deprecated `@import` with `@use` statements
- ✅ **Updated color functions**: Replaced deprecated `lighten()` with modern `color.adjust()`
- ✅ **Added compatibility date**: Enhanced Nuxt configuration for better stability
- ✅ **Eliminated all deprecation warnings**: Future-proof SCSS implementation

- You can find prisma and basic authentication version on withPrisma branch

## Setup

Make sure to install the dependencies:

Required node version: >=22.0.0

Basic middleware was added to project for auth. You can use it as a template for your own middleware.

Auth middleware control in /composables/useAuth

Pinia was implemented in /store folder.

2 Layouts added (default, auth).

Vuetify v3.10.2 was implemented with modern configuration.

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Changelog

### v1.2.0 (September 18, 2025)
- **Major Updates:**
  - Upgraded Nuxt to v4.1.2
  - Upgraded Vuetify to v3.10.2
  - Updated Node.js requirement to >=22.0.0
  - Added Pinia v3.0.3 core package

- **Bug Fixes:**
  - Fixed "Cannot find package 'pinia'" error
  - Resolved all Sass deprecation warnings
  - Improved SCSS module system with @use syntax

- **Code Quality:**
  - Modernized SCSS with future-proof syntax
  - Enhanced color function usage
  - Added compatibility date for Nuxt stability
  - Clean development console (no warnings)

### v1.1.0 (Previous)
- Initial implementation with Nuxt 3, Vuetify 3.1.3, and Pinia
- Basic auth middleware and layouts
- SCSS styling system

## Tech Stack

- **Framework**: Nuxt 3 (v4.1.2)
- **UI Library**: Vuetify 3 (v3.10.2)
- **State Management**: Pinia (v3.0.3)
- **Styling**: SCSS with modern syntax
- **Icons**: Material Design Icons
- **TypeScript**: Full TypeScript support

## Any questions?
Reach out to me on [ugur@burakturkis.com](mailto:ugur@burakturkis.com)

## Buy me a coffee
[![Buy me a Coffee](https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png)](https://www.buymeacoffee.com/burakturkis)

*** Happy Coding ***
