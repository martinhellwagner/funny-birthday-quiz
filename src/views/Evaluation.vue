<!-- TEMPLATE -->
<template>
  <div class="container">
    <div class="description">
      <p>
        <b>Grab a beer!</b><br>
        Wir nehmen jetzt die Auswertung vor...
      </p>
    </div>

    <div class="buttons">
      <!-- eslint-disable-next-line max-len -->
      <router-link :to="{ name: 'answers' }"><button class="button button--green button--rotateCounterClockwise">Antworten, hop hop hop!</button></router-link>
      <router-link :to="{ name: 'questions' }"><button class="button button--red button--rotateClockwise">Nochmal die Fragen bitte.</button></router-link>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Evaluation',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/index.scss";
</style>
