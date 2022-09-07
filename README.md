## Getting started

**Requirements:**

- Node.js version 16.14.0 or higher.
- [yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) or npm.

**Additional Materials:**

[Hydrogen](https://shopify.dev/api/hydrogen/components) components are pre-renders components built by shopify that can be dropped into the store for easy usage.

Preview [GraphQL](http://localhost:3000/graphql) queries before implementation while the server is running on defaul port (3000). If port is not running on port 3000 then update port to the correct implementation.

## Environment setup

Update `hydrogen.config.ts` with your shop's domain and Storefront API tokens.

This project contains a .prettierrc file which defines how code will look once it has been saved.

## In Development

In order to run the development environment you will need to run:

```bash
yarn dev
```

Tailwind has be setup to run automatically during development mode.

## Building for production

This command will build the TypeScript files into a distribution [dist] file which can be used for production.

```bash
yarn build
```

## Previewing a production build

To run a local preview of your Hydrogen app in an environment similar to Oxygen, build your Hydrogen app and then run `yarn preview`:

```bash
yarn build
yarn preview
```
