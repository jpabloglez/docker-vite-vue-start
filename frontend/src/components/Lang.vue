

<template>
<div>
  <button class="bn-primary" v-on:click="switch"> Switch to es</button>
   <div> <p style="color: black">{{ $t("message.hello") }} </p> </div>
  </div>
</template>

<script>

//import i18n from '../i18n.js';

export default {
  name: "App",
  methods: {
    switch() {
      // $i18n is reactively
      this.$i18n.locale = "es";
    },
  },
};
</script>