<!-- TEMPLATE -->
<template>
  <div class="container">
    <!-- eslint-disable max-len -->
    <transition name="transition" mode="out-in">
      <div :key="questionIndex">
        <div class="question description">
          <p><b>Frage {{ questionIndex }}</b></p>
          <span>{{ question }}</span>
        </div>

        <div class="buttons">
          <button class="button button--green button--scaleSmall" @click="goToNextQuestion" v-if="questionIndex < numberOfQuestions">Weiter zur nächsten Frage</button>
          <router-link :to="{ name: 'answers' }" v-if="questionIndex == numberOfQuestions"><button class="button button--green button--rotateCounterClockwise">Antworten, hop hop hop!</button></router-link>
          <button class="button button--red button--moveAwayRight" v-if="questionIndex == numberOfQuestions">Please kill me now.</button>
        </div>
      </div>
    </transition>
    <!-- eslint-enable max-len -->
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Questions',

  mounted() {
    this.init();
  },

  computed: {
    question() {
      return this.$root.$store.state.quizPool[this.questionIndex - 1].question;
    },
  },

  data() {
    return {
      numberOfQuestions: this.$root.$store.state.quizPool.length,
      questionIndex: 1,
    };
  },

  methods: {
    goToNextQuestion() {
      this.questionIndex += 1;
    },
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/index.scss";
</style>
