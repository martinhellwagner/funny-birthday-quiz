<!-- TEMPLATE -->
<template>
  <div class="container">
    <div class="description">
      Hallo, ich bin eine Website.<br>
      Und du, Johanna, wirst heute 30 Jahre alt!<br>
      Wollen wir ein kleines Spiel spielen?
    </div>

    <div class="buttons">
      <!-- eslint-disable-next-line max-len -->
      <router-link :to="{ name: 'teams' }"><button class="button button--green">Ja, unbedingt!</button></router-link>
      <button class="button button--red">Na, schleich di!</button>
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
