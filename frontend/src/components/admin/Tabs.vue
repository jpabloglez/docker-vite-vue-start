<!-- 
    Reference: https://medium.com/notonlycss/how-to-create-a-tab-component-in-vue-js-2812c75807f9
-->
<template>
  <div class="bg-gradient-to-r from-blue-300 to-blue-500 min-h-screen">
    <h1 class="text-xl font-bold text-white mb-4 w-11/12 lg:w-10/12 mx-auto">
      Variant: Vertical(default)
    </h1>

    <app-tabs class="w-11/12 lg:w-10/12 mx-auto mb-16" :tabList="tabList">
      <template v-slot:tabPanel-1> Content 1 </template>
      <template v-slot:tabPanel-2> Content 2 </template>
      <template v-slot:tabPanel-3> Content 3 </template>
      <template v-slot:tabPanel-4> Content 4 </template>
    </app-tabs>

    <h1 class="text-xl font-bold text-white mb-4 w-11/12 lg:w-10/12 mx-auto">
      Variant: Horizontal
    </h1>

    <app-tabs
      class="w-11/12 lg:w-10/12 mx-auto"
      :tabList="tabList"
      variant="horizontal"
    >
      <template v-slot:tabPanel-1> Content 1 </template>
      <template v-slot:tabPanel-2> Content 2 </template>
      <template v-slot:tabPanel-3> Content 3 </template>
      <template v-slot:tabPanel-4> Content 4 </template>
    </app-tabs>

    <div class="text-center py-12">
      <a
        href="https://lucaspezzano.medium.com/subscribe"
        target="_blank"
        rel="noopener noreferrer"
        class="text-white font-semibold underline"
      >
        Get straight to your email next time I post a demo or article
      </a>
    </div>
  </div>
</template>

<script>
import AppTabs from "./AppTabs.vue";

export default {
  components: {
    AppTabs,
  },
  data() {
    return {
      tabList: ["Tab 1", "Tab 2", "Tab 3", "Tab 4"],
    };
  },
};
</script>
