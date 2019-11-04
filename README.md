# Pokedex

_Made in React-Native_ 💻

## Installation

**Step 1:** Clone this repo & run a `cd` into project's folder.

**Step 2:** install node modules as below:

```
npm install
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

That's all! 😎

### Obs on Installation

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
