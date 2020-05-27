<!-- TEMPLATE -->
<template>
  <div class="container">
    <div class="description">
      <!-- eslint-disable max-len -->
      <transition name="transition" mode="out-in" appear v-on:enter="enter" v-on:leave="leave" v-bind:css="false">
        <div class="container-inner" key="step1" v-if="step === 1">
          <div class="teams teams--bottom description">
            <div class="team description" v-for="(team, index) in teams" :key="index">
              <p><b>{{ team.name }} </b></p>
              <input type="text" class="input">
            </div>
          </div>

          <div class="buttons">
            <button class="button button--green button--scaleBig" @click="determineWinners">And the winner is...</button>
          </div>
        </div>

        <div class="container-inner" key="step2" v-if="step === 2">
          <div class="description">
            <span>Spannung, Spannung!</span><br>
            <div>
              <img src="../images/system/winning.gif">
            </div>
          </div>
        </div>

        <div class="container-inner" key="step3" v-if="step === 3">
          <div class="winningTeams description">
            <div>
              <img src="../images/system/partying.png">
            </div>

            <div class="winningTeam" v-for="(winningTeam, index) in winningTeams" :key="index">
              <span class="description--largeFont"><b>{{ winningTeam.name }}</b></span><br>

              <span>Gratulation an </span>
              <span class="winningTeamMember" v-for="(winningTeamMember, index) in winningTeam.members" :key="index">
                <span v-if="index !== 0"> und </span>
                <span>{{ winningTeamMember }}</span>
                <span v-if="index === Object.keys(winningTeam.members).length - 1">!</span>
              </span>
            </div>
          </div>

          <div class="buttons">
            <router-link :to="{ name: 'thanks' }"><button class="button button--green button--jumpHorizontal">Das war toll!</button></router-link>
            <router-link :to="{ name: 'thanks' }"><button class="button button--red button--jumpVertical">Endlich aus!</button></router-link>
          </div>
        </div>
      </transition>
      <!-- eslint-enable max-len -->
    </div>
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Results',

  mounted() {
    this.init();
  },

  computed: {
    teams() {
      return this.$root.$store.state.teams;
    },

    winningTeams() {
      return this.$root.$store.state.winningTeams;
    },
  },

  data() {
    return {
      step: 1,
    };
  },

  methods: {
    determineWinners() {
      const inputs = document.querySelectorAll('.input');
      let error = false;
      let maximumPoints = 0;

      for (let i = 0; i < inputs.length; i += 1) {
        if (inputs[i].value === '') {
          inputs[i].classList.add('error');
          error = true;
        } else {
          maximumPoints = Math.max(maximumPoints, parseInt(inputs[i].value, 10));
        }
      }

      if (!error) {
        for (let i = 0; i < inputs.length; i += 1) {
          if (maximumPoints === parseInt(inputs[i].value, 10)) {
            this.$root.$store.state.winningTeams.push(this.$root.$store.state.teams[i]);
          }
        }

        this.step = 2;

        setTimeout(() => {
          this.step = 3;
        }, 5000);
      }
    },
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/index.scss";
</style>
