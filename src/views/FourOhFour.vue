<!-- TEMPLATE -->
<template>
  <div class="container">
    <!-- eslint-disable max-len -->
    <div class="description">
      <b>Four-Oh-Four!</b>
      Tut mir leid, als moralisch korrekte Webseite kann ich Cheating leider nicht unterstützen.
      Deswegen musst du leider wieder von <router-link :to="{ name: 'home' }">vorne</router-link> anfangen.
    </div>
    <!-- eslint-enable max-len -->
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'FourOhFour',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/index.scss";
</style>
