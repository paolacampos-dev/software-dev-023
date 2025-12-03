# npm set-up

## Step 1: initialise npm in our app

```bash
npm init -y
```

- Add "type": "module" to your package.json --> this way we tell our app to accept ES6 syntax

## Step 2: install packages

- Check docs to know exactly how to install a package

```bash
npm i packageName
```

- To uninstall a package:

```bash
npm uninstall packageName
```

## STEP 3: Add a .gitignore file

- This file will contain the names of those files or folders you DON'T want to push to GitHub
- We will always add `node_modules` to the .gitignore
- Other files added include files with secret information (passwords, tokens, keys...)

## Extra step: add new scripts to your package.json

- Add a script to your package.json

```json
 "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "cowsay": "node cowsay.js",
    "super-secret": "node super-secret.js",
    "dev": "node index.js"
  },
```

- To run a script, use `npm run scriptName` in the terminal
