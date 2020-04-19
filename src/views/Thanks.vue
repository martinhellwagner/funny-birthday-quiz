<!-- TEMPLATE -->
<template>
  <div class="container">
    <div class="description">
      <div>
        <img src="../images/thanking.png">
      </div>

      <p>
        Danke fürs Mitmachen!<br>
        Ihr wart großartig!
      </p>
    </div>

    <div class="buttons">
      <!-- eslint-disable-next-line max-len -->
      <router-link :to="{ name: 'home' }"><button class="button button--green">Back home please.</button></router-link>
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Thanks',

  mounted() {
    this.init();

    this.$root.$store.state.teams = [];
    this.$root.$store.state.winningTeams = [];
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/index.scss";
</style>
