This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

Below you will find some information on how to perform common tasks.<br>
You can find the most recent version of this guide [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


Primero realizar un git clone desde el repositorio <br>
https://github.com/pauloski/react-init.git <br>

crear proyecto react <br>
npm install -g create-react-app <br>
create-react-app my—app <br>
cd my-app <br>
npm start <br>
cuando la carpeta ya esta creada realizar el mismo procedimiento con el nombre de la carpeta. <br>

instalar sass a react - scss<br>
video https://www.youtube.com/watch?v=2QaI5ajg4Hw<br>
passos<br>
npm i -S node-sass-chokidar<br>
npm install --save npm-run-all<br>
en el package.json cambiar script :build-css  watch-css  start-js  start  build<br>

  "scripts": {
    "build-css": "node-sass-chokidar --include-path ./src --include-path .node_modules src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar --include-path ./src --include-path .node_modules src/ -o src/ --watch --recursive",
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build": "npm run build-css && react-scripts build",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject"
  }

