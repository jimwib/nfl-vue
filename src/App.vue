<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Nav />
    <router-view />
  </div>
</template>
<script>
export default {
  name: "App",
  components: {
    Nav: () => import("@/components/Nav.vue")
  }
};
</script>
<style lang="scss">
@import "@/scss/_reset";
* {
  box-sizing: border-box;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  text-transform: uppercase;
  font-family: "Oswald", sans-serif;
  letter-spacing: 0.5em;
  line-height: 1.5;
}
</style>
