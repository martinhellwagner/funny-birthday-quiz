<!-- TEMPLATE -->
<template>
  <div class="container">
    <!-- eslint-disable max-len -->
    <transition name="transition" mode="out-in">
      <div key="step1" v-if="step === 1">
        <div class="attendees">
          <div class="attendee" v-for="attendee in attendees" :key="attendee">
            {{ attendee }}
          </div>
        </div>

        <div class="buttons">
          <button class="button button--green" @click="createTeams">Teams! Machen!</button>
        </div>
      </div>

      <div key="step2" v-if="step === 2">
        <div class="description">
          <span>Every day I'm shuffling...</span><br>
          <div>
            <img src="../images/shuffling.gif">
          </div>
        </div>
      </div>

      <div key="step3" v-if="step === 3">
        <div class="teams">
          <div class="team" v-for="(team, index) in teams" :key="index">
            <input type="text" class="input">
            <p><b>Team {{ index + 1 }}</b></p>
            <div class="teamMember" v-for="(teamMember, index) in team.members" :key="index">
              {{ teamMember }}
            </div>
          </div>
        </div>

        <div class="buttons">
          <button class="button button--green" @click="nameTeams">Gib uns Namen!</button>
        </div>
      </div>

      <div key="step2" v-if="step === 4">
        <div class="description">
          <span>Ich verinnerliche die Namen...</span><br>
          <div>
            <img src="../images/writing.gif">
          </div>
        </div>
      </div>

      <div key="step5" v-if="step === 5">
        <div class="teams">
          <div class="team" v-for="(team, index) in teams" :key="index">
            <p><b>{{ team.name }} </b></p>
            <div class="teamMember" v-for="(teamMember, index) in team.members" :key="index">
              {{ teamMember }}
            </div>
          </div>
        </div>

        <div class="buttons">
          <router-link :to="{ name: 'questions' }"><button class="button button--green">Ich will endlich Fragen!</button></router-link>
          <button class="button button--red">Der Scheiß is fad!</button>
        </div>
      </div>
    </transition>
    <!-- eslint-enable max-len -->
  </div>
</template>

<!-- SCRIPT -->
<script>
export default {
  name: 'Teams',

  mounted() {
    this.init();

    // eslint-disable-next-line max-len
    const numberOfAttendeesPerTeam = Math.ceil(this.$root.$store.state.attendees.length / this.$root.$store.state.numberOfTeams);
    document.body.style.setProperty('--attendeesPerTeam', numberOfAttendeesPerTeam);
  },

  computed: {
    attendees() {
      return this.$root.$store.state.attendees;
    },

    teams() {
      return this.$root.$store.state.teams;
    },
  },

  data() {
    return {
      step: 1,
    };
  },

  methods: {
    createTeams() {
      this.step = 2;
      this.$root.$store.dispatch('createTeams');

      setTimeout(() => {
        this.step = 3;
      }, 2000);
    },

    nameTeams() {
      this.step = 4;
      this.$root.$store.dispatch('nameTeams');

      setTimeout(() => {
        this.step = 5;
      }, 2000);
    },
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/index.scss";
</style>
