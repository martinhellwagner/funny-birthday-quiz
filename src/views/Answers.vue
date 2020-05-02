<!-- TEMPLATE -->
<template>
  <div class="container">
    <!-- eslint-disable max-len -->
    <transition name="transition" mode="out-in">
      <div :key="answerIndex">
        <div class="answer description">
          <p>
            <b>Antwort {{ answerIndex }}</b><br>
            ({{ points }})
          </p>
          <span v-html="answer"></span>
          <div v-if="image !== undefined">
            <img :src="require(`../images/quizPool/${image}`)">
          </div>
        </div>

        <div class="buttons">
          <button class="button button--green button--scaleSmall" @click="goToNextAnswer" v-if="answerIndex < numberOfAnswers">Weiter zur nächsten Antwort</button>
          <router-link :to="{ name: 'results' }" v-if="answerIndex == numberOfAnswers"><button class="button button--green button--rotateCounterClockwise">Ergebnisse bitte!</button></router-link>
          <button class="button button--red button--moveAwayRight" v-if="answerIndex == numberOfAnswers">Ich brauch noch ein Bier.</button>
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

    image() {
      return this.$root.$store.state.quizPool[this.answerIndex - 1].image;
    },

    points() {
      const numberOfPoints = this.$root.$store.state.quizPool[this.answerIndex - 1].points;

      if (numberOfPoints === 1) {
        return `${numberOfPoints} Punkt`;
      }

      return `${numberOfPoints} Punkte`;
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
