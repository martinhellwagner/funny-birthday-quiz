<!-- TEMPLATE -->
<template>
  <div class="container">
    <!-- eslint-disable max-len -->
    <div class="description description--smallSize">
      <p>
        <b>Sicha ned!</b>
      </p>
      <p>
        Tut mir leid, als moralisch korrekte Webseite kann ich Cheating nicht unterstützen.
        Deswegen musst du leider wieder von <router-link :to="{ name: 'home' }">vorne</router-link> anfangen.
      </p>
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
