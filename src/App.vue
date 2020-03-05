<template>
  <v-app style="background-color: rgba(16, 78, 251, 0.06);">
    <v-content transition="slide-x-transition">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",
  components: {}
};
</script>


