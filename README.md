## Electron + TypeScript + React

Boilerplate for a project using Electron, React and Typescript

## Installation

Use a package manager of your choice (npm, yarn, etc.) in order to install all dependencies

```bash
npm install
```

```bash
yarn install
```

## Usage

In order to run this project 2 scripts will need to be executed `dev:react` and `dev:electron`, run each one in a different terminal and always run `dev:react` before `dev:electron`, or `dev` to run them in order automatically

```bash
npm run dev:react
```

```bash
npm run dev:electron
```

or

```bash
npm run dev
```

## Add Sqlite3

```bash
npm install sqlite3 knex
```

or

```bash
yarn add sqlite3 knex
```

### Add script to rebuild sqlite3

Add in the package.json scripts
"postinstall":"electron-builder install-app-deps"

#### run the script then add the following line to the electron webpack

externals : {sqlite3: 'commonjs sqlite3', knex: 'commonjs knex'},

## Packaging

To generate a project package run `package`

```bash
npm run package
```

## Contributing

Pull requests are always welcome 😃.

## License

[MIT](https://choosealicense.com/licenses/mit/)
