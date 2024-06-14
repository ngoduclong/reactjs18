# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
};
```

### Requirements

- Node.js 20+ and yarn/npm

### Tech Stack

- React v18, React router dom, Vite, Typescript
- Redux, Redux toolkit, Axios
- Ant Design, SCSS

### Getting started

Run the following command on your local environment

```shell
yarn
```

Then, you can run the project locally in development mode with live reload by executing:

```shell
yarn dev
```

## Project structure

```shell
.
├── README.md                       # README file
├── .husky                          # Husky configuration
├── public                          # Public assets folder
├── src
│   ├── assets                      # Include images, icons, and fonts
│   ├── components                  # Shared base components
│   ├── containers                  # Containers as modal, form, section,...
│   ├── configs                     # Configs
│   ├── interfaces                  # Declare types/interfaces
│   ├── layouts                     # Layouts
│   ├── pages                       # Pages
│   ├── routes                      # Define routes
│   └── services                    # Services
│   └── stores                      # Stores
│   └── themes                      # Declare css variables, common css
│   └── utils                       # Utils
│   └── variables                   # Variables (enums, constants)
│   └── services                    # Services
└── tsconfig.json                   # TypeScript configuration
```
