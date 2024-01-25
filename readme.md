# TS Declaration Merge

This repo demonstrates the solution of merging dependency declarations in TypeScript, where one declaration is in a `node_modules` package and the other is in source.

The `upstream` folder and `downstream` folder are two separate NPM projects. `downstream` depends on `upstream`.

## Setup

1. In `upstream`:
    ```sh
    npm install
    npm run build
    ```
2. Then in `downstream`:
    ```sh
    npm install
    ```
3. Open `downstream/src/index.ts`, you'should see no error. Accessing `propertyDeclaredAtUpstream` and `propertyDeclaredAtDownstream` should work fine.

## How it works

1. In `upstream/src/index.ts`, declare the `NamespaceForMerge` namespace under `global`
1. In `upstream/src/index.ts`, declare the the property as `interface` to take advantage of TS declaration merging
1. In `downstream/src/global.d.ts`, also declare namespace of the same name in `global` and merge it with upstream's declaration
