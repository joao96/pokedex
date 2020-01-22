<h1 align="center">
    <img alt="Pokedex" src="https://beta.adalab.es/f-online-pokemon-veronicabautista/static/media/logo.799db9c7.png" />
    <br>
    Pokedex
</h1>

<h4 align="center">
  A Pokedex application with geolocation interaction made with React Native.
</h4>
<p align="center">
  <img alt="GitHub top language" src="https://img.shields.io/badge/objective--c-28.6%25-blue">
  <img alt="GitHub important language" src="https://img.shields.io/badge/javascript-17.9%25-yellow">

  <img alt="GitHub language count" src="https://img.shields.io/badge/languages-5-blue">

  <a href="https://www.codacy.com/manual/joao96/pokedex?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=joao96/pokedex&amp;utm_campaign=Badge_Grade">
    <img alt="Codacy grade" src="https://img.shields.io/badge/code%20quality-B-green">
  </a>
</p>

<p align="center">
  <a href="#checkered_flag-technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-use">How To Use</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rotating_light-attetion">Attetion</a>
</p>

## :checkered_flag: Technologies

This project was developed using the following technologies:

-   [Axios](https://github.com/axios/axios)
-   [React Native](https://facebook.github.io/react-native/)
-   [React Native Geolocation Service](https://github.com/react-native-community/react-native-geolocation)
-   [Prop-Types](https://www.npmjs.com/package/prop-types)
-   [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## :information_source: How To Use

In order to run this application, it's required that you install [Git](https://git-scm.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

**Step 1:** Clone this repo & run a `cd` into project's folder.

**Step 2:** install node modules as below:

```
npm install
```
if you prefer:
```
yarn
```

_Before run android build, setup [Android Studio](https://facebook.github.io/react-native/docs/android-setup.html)_

**Step 3:**

### If Android

```
react-native run-android
```

_Before running iOS build, Install [Xcode](https://developer.apple.com/xcode/download/)_

### If iOS

```
pod install
```

```
Open a Pokedex.xcworkspace and build
```

## :rotating_light: Attetion
In order to make the plugins work properly, you must install ESlint plugin: `npm install --save-dev eslint` and add the following lines in your user settings on VScode:

```
/* ESLint */
// let editor format using prettier for all other files
"editor.formatOnSave": true,
// disable editor formatting, so eslint can handle it
"[javascript]": {
    "editor.formatOnSave": false,
},
// available through eslint plugin in vscode
"eslint.autoFixOnSave": true,
"eslint.alwaysShowStatus": true
```
---
## That's all! 😎

[Get in touch!](https://www.linkedin.com/in/jvpoletti/)

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
