# YouLookGreat-App
# Welcome To Your Fashion Store !
## 1. Introduction
We are trying to have the first fashion online store in Egypt that sells 100% Egyptian products.

Technologies used:
  - React 
  - Semantic UI React
  - Less
  - HTML & CSS

## 2. Requirements

- `Node v6.11.5`
- `npm v5.5.1`
- `React v16.2.0`
- `Semantic UI v2.2.13`
- `Gulp v3.9.1`

### 2.1 Dependencies

  - `react-router v4.3.1` 👉 &nbsp; [React Router ](https://www.npmjs.com/package/react-router)
  - `semantic-ui-react v0.82.0` 👉 &nbsp; [Semantic UI React ](https://react.semantic-ui.com)

  ## 3. Installation

The folder structure of the app contains 2 important folders:
```
1. app/src/
```
where the React part is installed and 
```
2. styling/semantic/
```

where Semantic UI React is installed and where the custom theme is developed and all CSS changes happen.

Steps:

1. In the `styling` folder, run the `npm install` command.
2. In the `app` folder, run the `npm install` command.
3. `npm start` the whole project.

Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

## 6. DockerFile
Contains the node version. Creates a directory and copies the dependencies of our manifest files [ package.json, package-lock.json] then runs the program and exposing it to port 3000 on our virtual machine so we can run our server.

## 7.Docker-Compose
Contains the docker version which is " 2.1", in addition, to setting our services to read the dockerfile and to have our backing service which is node while screening the docker port to port 3000.
