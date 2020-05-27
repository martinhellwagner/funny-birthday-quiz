<!-- TEMPLATE -->
<template>
  <div class="container">
    <!-- eslint-disable max-len -->
    <transition name="transition" mode="out-in" appear v-on:enter="enter" v-on:leave="leave">
      <div :key="questionIndex">
        <div class="question description">
          <p>
            <b>Frage {{ questionIndex }}</b><br>
            ({{ points }})
          </p>
          <span v-html="question"></span>
        </div>

        <div class="buttons">
          <button class="button button--green button--scaleSmall" @click="goToNextQuestion" v-if="questionIndex < numberOfQuestions">Weiter zur nächsten Frage</button>
          <router-link :to="{ name: 'answers' }" v-if="questionIndex == numberOfQuestions"><button class="button button--green button--rotateCounterClockwise">Antworten, hop hop hop!</button></router-link>
          <router-link :to="{ name: 'questions' }"><button class="button button--red button--jumpVertical" v-if="questionIndex == numberOfQuestions">Please kill me now.</button></router-link>
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

    points() {
      const numberOfPoints = this.$root.$store.state.quizPool[this.questionIndex - 1].points;

      if (numberOfPoints === 1) {
        return `${numberOfPoints} Punkt`;
      }

      return `${numberOfPoints} Punkte`;
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
