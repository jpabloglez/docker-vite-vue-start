# Vue3+Vite webpack base template
Template with the base components to develop a Vite-Vue project with Docker

* Reference: [Starting up a new Vue 3 project with Vite and Docker](https://dev.to/jiprochazka/starting-up-a-new-vue-3-project-with-vite-and-docker-3355)

## Docker instructions
Bring up container
```
docker-compose up -d
```
In order to update the code of your project inside the docker container configure the volume to map the path of the source repository and grant writting permissions for your user:

```
(sudo) touch frontend && sudo chown -R USER:USER frontend/* && ls -la
```

# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.