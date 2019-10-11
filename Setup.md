# Project Build Steps
Create a bootstrap react app using create-react-app
```
npx create-react-app mythril.web.mui
```

## Install Generic Dependencies
```
npm i react-router-dom
npm i prop-types
npm i -D @types/prop-types
npm i -D prettier
```

### Prettier run script
```
"prettier": "prettier --single-quote --write \"src/**/*.{js,jsx,json,css}\""
```

## Material UI packages and Roboto font
https://material.io
```
npm i @material-ui/core
npm i @material-ui/icons
npm i @material-ui/styles
npm i typeface-roboto
```
Find material ui icons here: https://material-ui.com/components/material-icons/

## Material kit react dependencies 
```
npm i node-sass
```

## Use absolute path for import
In jsconfig.json
```
{
  "compilerOptions": {
    "baseUrl": "src",
    "paths": {
    "*": ["src/*"]
    }
  }
}
```
