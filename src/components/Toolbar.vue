<template>
  <div>
    <v-toolbar app class="info" dark>
      <v-app-bar-nav-icon @click="menu = !menu"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-btn icon @click="buttonUnlogin">
        <v-icon>mdi-export</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="menu" absolute bottom temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item :to="{ path: '/home' }">
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/about' }">
            <v-list-item-title>about</v-list-item-title>
          </v-list-item>
          <v-list-item :to="{ path: '/login' }">
            <v-list-item-title>Login</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "Toolbar",
  data() {
    return {
      menu: false,
      items: [
        { title: "Home", icon: "mdi-view-dashboard" },
        { title: "About", icon: "mdi-forum" },
      ],
    };
  },
  methods: {
    buttonUnlogin() {
      this.$store.dispatch("unlogCurrentUser");
       this.$router.push("/login");
    },
  },
};
</script>

<style></style>
