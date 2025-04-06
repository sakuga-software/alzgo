# Alzgo Menu

This project is a React-based menu component for the Alzgo application. It includes multiple modules that are deployed and used on the alzgo.fr website, utilizing Vite for the build process and Tailwind CSS for styling.

## Project Structure

- `src/`: Contains the source code for the project.
  - `modules/`: React modules for different web islands.
  - `utils/`: Utility functions used across the project.
  - `index.css`: Global CSS file.
  - `types.ts`: TypeScript type definitions.
- `public/`: Static files that are served directly.
  - `assets/`: SVG assets for various menu icons.
  - `icons/`: PNG icons for navigation.
- `pages/`: HTML mockups that are used in development.
- `vite.config.ts`: Vite configuration file.
- `tsconfig.json`: TypeScript configuration file.
- `eslint.config.js`: ESLint configuration file.
- `vercel.json`: Vercel deployment configuration.

## Scripts

- `dev`: Start the development server.
- `build`: Build the project for production.
- `lint`: Run TypeScript, Prettier, and ESLint checks.
- `lint:prettier`: Run Prettier checks.
- `preview`: Preview the production build.

## Environment Variables

The project uses Vite for environment variable management. Environment variables are defined in `.env` files and can be accessed using imports from 'utils/env'.
You can use the model from '.env.example' to create your own `.env` file.

### Common Configuration

- `VITE_BASE_URL`: Base URL for the application.

### Menu Configuration

- `VITE_MENU_SELECTOR`: CSS selector for the main menu element.
- `VITE_MENU_ROOT_ID`: ID for the main menu root element.

### Mobile Menu Configuration

- `VITE_MENU_MOBILE_SELECTOR`: CSS selector for the mobile menu element.
- `VITE_MENU_MOBILE_ROOT_ID`: ID for the mobile menu root element.

## DOM Parsing Mechanism

The menu items are parsed from the DOM using a custom utility function. The `parseMenu` function takes the HTML content of the navigation element and converts it into a JSON structure. This JSON structure is then enhanced with additional properties like `id`, `to`, and `img` using the `enhanceMenuWithCustomKeys` function.

### Example

```typescript
import parseMenu from './utils/dom-parser';
import { enhanceMenuWithCustomKeys } from './utils/compute-menu-items';

const menuEl = document.querySelector('nav');
const menuJSON = parseMenu(menuEl?.outerHTML || '');
const navbarData = enhanceMenuWithCustomKeys(menuJSON);

console.log(navbarData);
```

This mechanism allows for dynamic generation of the menu structure based on the HTML content, making it easy to update the menu without changing the code.

## Deployment

This project is deployed on Vercel. The `main` branch is used for development, and the `production` branch is used for production deployments.

### Branching Strategy

- `main`: Development branch. All new features and bug fixes are merged here.
- `production`: Production branch. Only stable and tested code is merged here for deployment.

### Deployment Steps

1. Push changes to the `main` branch for development.
2. Once the changes are tested and stable, create a pull request to merge `main` into `production`.
3. After the pull request is approved and merged, Vercel will automatically deploy the changes to the production environment.

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/sakuga-software/alzgo.git
   ```
2. Navigate to the project directory:
   ```sh
   cd alzgo
   ```
3. Install dependencies:
   ```sh
   pnpm install
   ```
4. Create a `.env` file based on the `.env.example` file:
   ```sh
   cp .env.example .env
   ```

## Usage

1. Start the development server:
   ```sh
   pnpm dev
   ```
2. Build the project for production:
   ```sh
   pnpm build
   ```
3. Preview the production build:
   ```sh
   pnpm preview
   ```
