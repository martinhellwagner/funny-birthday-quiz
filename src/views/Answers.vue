<!-- TEMPLATE -->
<template>
  <div class="container">
    <!-- eslint-disable max-len -->
    <transition name="transition" mode="out-in">
      <div :key="answerIndex">
        <div class="answer description">
          {{ answer }}
        </div>

        <div class="buttons">
          <button class="button button--green" @click="goToNextAnswer" v-if="answerIndex < numberOfAnswers">Weiter zur nächsten Antwort</button>
          <router-link :to="{ name: 'results' }" v-if="answerIndex == numberOfAnswers"><button class="button button--green">Ergebnisse bitte!</button></router-link>
          <button class="button button--red" v-if="answerIndex == numberOfAnswers">Ich brauch noch ein Bier.</button>
        </div>
      </div>
    </transition>
    <!-- eslint-enable max-len -->
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Answers',

  mounted() {
    this.init();
  },

  computed: {
    answer() {
      return this.$root.$store.state.quizPool[this.answerIndex - 1].answer;
    },
  },

  data() {
    return {
      numberOfAnswers: this.$root.$store.state.quizPool.length,
      answerIndex: 1,
    };
  },

  methods: {
    goToNextAnswer() {
      this.answerIndex += 1;
    },
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/index.scss";
</style>
