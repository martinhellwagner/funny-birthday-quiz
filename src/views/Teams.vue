<!-- TEMPLATE -->
<template>
  <div class="container">
    <!-- eslint-disable max-len -->
    <transition name="transition" mode="out-in" appear v-on:enter="enter" v-on:leave="leave">
      <div key="step1" v-if="step === 1">
        <div class="attendees description">
          <div class="attendee" v-for="(attendee, index) in attendees" :key="index">
            {{ attendee }}
          </div>
        </div>

        <div class="buttons">
          <button class="button button--green button--jumpHorizontal" @click="createTeams">Teams! Machen!</button>
        </div>
      </div>

      <div key="step2" v-if="step === 2">
        <div class="description">
          <span>Every day I'm shuffling...</span><br>
          <div>
            <img src="../images/system/shuffling.gif">
          </div>
        </div>
      </div>

      <div key="step3" v-if="step === 3">
        <div class="teams description">
          <div class="team description" v-for="(team, index) in teams" :key="index">
            <input type="text" class="input">
            <p><b>Team {{ index + 1 }}</b></p>
            <div class="teamMember" v-for="(teamMember, index) in team.members" :key="index">
              {{ teamMember }}
            </div>
          </div>
        </div>

        <div class="buttons">
          <button class="button button--green button--jumpHorizontal" @click="nameTeams">Gib uns Namen!</button>
        </div>
      </div>

      <div key="step2" v-if="step === 4">
        <div class="description">
          <span>Ich verinnerliche die Namen...</span><br>
          <div>
            <img src="../images/system/writing.gif">
          </div>
        </div>
      </div>

      <div key="step5" v-if="step === 5">
        <div class="teams description">
          <div class="team description" v-for="(team, index) in teams" :key="index">
            <p><b>{{ team.name }} </b></p>
            <div class="teamMember" v-for="(teamMember, index) in team.members" :key="index">
              {{ teamMember }}
            </div>
          </div>
        </div>

        <div class="buttons">
          <router-link :to="{ name: 'questions' }"><button class="button button--green button--skew">Ich will endlich Fragen!</button></router-link>
          <button class="button button--red button--disappear">Der Scheiß is fad!</button>
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
      const attendees = [...this.$root.$store.state.attendees];
      let attendeesCopy = [...this.$root.$store.state.attendees];
      // eslint-disable-next-line max-len
      const numberOfAttendeesPerTeam = Math.ceil(attendees.length / this.$root.$store.state.numberOfTeams);

      // Shuffle attendees
      let currentIndex = attendees.length;
      let temporaryValue;
      let randomIndex;

      while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = attendees[currentIndex];
        attendees[currentIndex] = attendees[randomIndex];
        attendees[randomIndex] = temporaryValue;
      }

      attendeesCopy = [...attendees];

      // Put shuffled attendees into teams
      for (let i = 0; i < this.$root.$store.state.numberOfTeams; i += 1) {
        const attendee = attendees.splice(0, numberOfAttendeesPerTeam);

        this.$root.$store.state.teams[i] = {};
        this.$root.$store.state.teams[i].members = attendee;
      }

      // Distribute members evenly across teams
      const lastTeam = this.$root.$store.state.teams[this.$root.$store.state.numberOfTeams - 1];
      let teamIndex = 0;

      // eslint-disable-next-line max-len
      while (lastTeam.members.length < Math.floor(this.$root.$store.state.attendees.length / this.$root.$store.state.numberOfTeams)) {
        const memberOfRandomTeam = this.$root.$store.state.teams[teamIndex].members.pop();
        lastTeam.members.push(memberOfRandomTeam);
        teamIndex += 1;
      }

      this.$root.$store.state.attendees = [...attendeesCopy];

      this.step = 2;

      setTimeout(() => {
        this.step = 3;
      }, 2000);
    },

    nameTeams() {
      const inputs = document.querySelectorAll('.input');
      let error = false;

      for (let i = 0; i < inputs.length; i += 1) {
        inputs[i].addEventListener('click', () => {
          inputs[i].classList.remove('error');
        });

        if (inputs[i].value === '') {
          inputs[i].classList.add('error');
          error = true;
        } else {
          this.$root.$store.state.teams[i].name = inputs[i].value;
        }
      }

      if (!error) {
        this.step = 4;

        setTimeout(() => {
          this.step = 5;
        }, 2000);
      }
    },
  },
};
</script>

<!-- STYLE-->
<style lang="scss">
  @import "../styles/index.scss";
</style>
