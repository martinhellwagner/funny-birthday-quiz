import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import Mixins from './scripts/index';

import App from './App.vue';

import Answers from './views/Answers.vue';
import FourOhFour from './views/FourOhFour.vue';
import Home from './views/Home.vue';
import Questions from './views/Questions.vue';
import Results from './views/Results.vue';
import Teams from './views/Teams.vue';
import Thanks from './views/Thanks.vue';

Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(Vuex);

Vue.mixin(Mixins);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/antworten',
      name: 'answers',
      component: Answers,
    },
    {
      path: '/sicha-ned',
      name: 'four-oh-four',
      component: FourOhFour,
    },
    {
      path: '/fragen',
      name: 'questions',
      component: Questions,
    },
    {
      path: '/ergebnisse',
      name: 'results',
      component: Results,
    },
    {
      path: '/teams',
      name: 'teams',
      component: Teams,
    },
    {
      path: '/danke',
      name: 'thanks',
      component: Thanks,
    },
    {
      path: '*',
      redirect: '/sicha-ned',
    },
  ],
});

const store = new Vuex.Store({
  state: {
    attendees: [
      'Name 1',
      'Hilde',
      'Name 2',
      'Jasmin',
      'Name 3',
      'Johanna',
      'Name 4',
      'Martin',
      'Name 5',
      'Phillipp',
      'Name 6',
      'Stavros',
      'Name 7',
    ],

    numberOfTeams: 4,

    teams: [
      // Empty at the beginning
    ],

    winningTeams: [
      // Empty at the beginning
    ],

    quizPool: [
      {
        question: 'Wie viele Haare hat Johanna am Kopf?',
        answer: '1 Milliarde',
      },
      {
        question: 'Welchen Buchstaben hatte Johannas Oberstufen-Klasse?',
        answer: 'A',
      },
      {
        question: 'Mit welchem Unternehmen hat Johanna ihre Maturareise gebucht?',
        answer: 'Mission2beach',
      },
      {
        question: 'Welche Adresse hatten Johanna und Phillipp in Enschede?',
        answer: 'Tollenstraat 5',
      },
      {
        question: 'In welcher Stadt in Mexiko hat Johanna ihr Auslandssemester gemacht?',
        answer: 'Guadalajara',
      },
    ],
  },
});

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
