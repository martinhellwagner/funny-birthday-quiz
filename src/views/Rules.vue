<!-- TEMPLATE -->
<template>
  <div class="container">
    <div class="description">
      <p><b>Regeln</b></p>
    </div>

    <!-- eslint-disable max-len -->
    <div class="description description--smallFont">
      <p>
        § 1. Die Gesamtanzahl der Punkte beträgt 30 (= Johannas Alter).<br>
        § 2. Johanna muss das Quiz co-moderieren, sprich durch die Webseite klicken und die Fragen stellen.<br>
        § 3. Jedes Team darf ein Mal den "Johanna-Joker" benutzen, mit dem sie Johannas Hilfe in Anspruch nehmen darf.<br>
        § 4. Mehrere Teams können bei einer Frage den Joker in Anspruch nehmen.<br>
        § 5. Der Joker kann nur in Anspruch genommen werden, nachdem das Team in einem österreichischen Dialekt ihrer Wahl die Worte "Hilf mir bitte" gerufen hat.
      </p>
    </div>
    <!-- eslint-enable max-len -->

    <div class="buttons">
      <!-- eslint-disable-next-line max-len -->
      <router-link :to="{ name: 'teams' }"><button class="button button--green button--rotateCounterClockwise">Weida, hob i gsogt!</button></router-link>
      <button class="button button--red button--disappear">Speck-Wappler!</button>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Rules',

  mounted() {
    this.init();
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/index.scss";
</style>
