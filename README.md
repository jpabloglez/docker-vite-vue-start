# Vue3+Vite webpack fresh install
We are preparing the base components to develop our project

* Reference: [Starting up a new Vue 3 project with Vite and Docker](https://dev.to/jiprochazka/starting-up-a-new-vue-3-project-with-vite-and-docker-3355)

## Webpack with docker
Follow next steps:
```
docker-compose up -d
```
Create a new Vite project inside container
``` 
docker exec -it frontend /bin/bash
npm init @vitejs/app
```
When prompted select Vue as your favourite framework. Then, edit the vite.config.js by adding the server object:
```js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8000
  },
  plugins: [vue()]
})
```
Also edit the started package.json file to add the host parameter
```js
...
"scripts": {
    "dev": "vite --host",
...
```

You can now install de JS dependencies in your project
```
npm install
```
And you are ready to go:
```
npm run dev
```

Check OS
```
cat /etc/os-release
```
wich results in => PRETTY_NAME="Debian GNU/Linux 10 (buster)"

## Updating code
In order to update the code of your project inside the docker container configure the volume to map the path of the source repository and grant writting permissions for your user:

```
(sudo) touch frontend && sudo chown -R USER:USER frontend/* && ls -la
```
