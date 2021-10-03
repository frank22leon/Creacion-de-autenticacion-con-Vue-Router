<template>
  <v-app>
    <v-main>
      <Toolbar />
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import Toolbar from "../src/components/Toolbar.vue";

export default {
  name: "App",

  components: {
    Toolbar,
  },
};
</script>
