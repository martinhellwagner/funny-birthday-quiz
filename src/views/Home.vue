<!-- TEMPLATE -->
<template>
  <div class="container">
    <div class="description">
      <p>
        Hallo, ich bin eine Webseite.<br>
        Und du, Johanna, wirst heute 30 Jahre alt!<br>
        Wollen wir ein kleines Spiel spielen?
      </p>
    </div>

    <div class="buttons">
      <!-- eslint-disable-next-line max-len -->
      <router-link :to="{ name: 'teams' }"><button class="button button--green button--rotateClockwise">Ja, unbedingt!</button></router-link>
      <button class="button button--red button--disable">Na, schleich di!</button>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Home',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/index.scss";
</style>
