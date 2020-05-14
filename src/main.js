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
import Rules from './views/Rules.vue';
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
      path: '/regeln',
      name: 'rules',
      component: Rules,
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
      'Agnes',
      'Anna',
      'Jasmin',
      'Leni',
      'Matyas',
      'Paze',
      'Phillipp',
      'Stavros',
    ],

    numberOfTeams: 3,

    teams: [
      // Empty at the beginning
    ],

    winningTeams: [
      // Empty at the beginning
    ],

    quizPool: [
      {
        question: 'Aus welchen beiden Tieren schuf Johanna ein neues Wort, das bis dato unbekannt, aber entzückend war?',
        answer: 'Aus Katze und Zebra entstand "zebra cat", es war der Tiger.',
        points: 2,
      },
      {
        question: 'In welchen Städten war Johanna mit<br><br>1) drei bzw. vier Jahren<br>2) mit 13 Jahren<br>3) mit 20 Jahren<br>4) mit 24 Jahren?',
        answer: '1) Kansas City, Debrecen<br>2) Belo Horizonte<br>3) Guadalajara<br>4) NYC, San Francisco, Mendocino, Oxnard, Los Angeles, Henderson, Las Vegas',
        points: 4,
      },
      {
        question: 'Johanna hat viele Leibspeisen. Eine davon nimmt aber einen besonderen Platz in ihrem Herzen ein. Welche?<br><br>A) Gulasch<br>B) Lasagne<br>C) Risotto<br>D) Garnelen mit Knoblauch',
        answer: 'C) Risotto',
        points: 1,
      },
      {
        question: 'Welchen Buchstaben hatte Johannas Oberstufen-Klasse?',
        answer: 'A',
        points: 1,
      },
      {
        question: 'Mit welchem Unternehmen hat Johanna ihre Maturareise gebucht?',
        answer: 'Mission2beach',
        points: 1,
      },
      {
        question: '1) Was war Hildes Geschenk zu Johannas Matura, das den ganzen Tag versteckt war?<br>2) Aus welcher Stadt kam es?<br>3) Warum war Hilde an diesem Tag nicht zu Hause?<br>4) Wo war sie?',
        answer: '1) Ohrringe<br>2) Las Vegas<br>3) Fortbildung mit den Schuldirektorinnen und -inspektorinnen<br>4) Mistelbach, NÖ',
        points: 4,
      },
      {
        question: 'Johanna spricht gerne Spanisch. Welche andere Sprache wurde von Spanisch quasi überschrieben und fiel dieser Leidenschaft zum Opfer?<br><br>A) Ungarisch<br>B) Slowenisch<br>C) Französisch',
        answer: 'C) Französisch',
        points: 1,
      },
      {
        question: 'Johanna ist zur einer Party eingeladen, das Thema ist "Game of Thrones". Welches Kostüm wird sie wählen?<br><br>A) Kahleesi<br>B) Sansa<br>C) Cersei<br>D) Melisandre',
        answer: 'A) Kahleesi',
        points: 1,
        image: '001.png',
      },
      {
        question: 'Johanna hat fast alle Kontinente bereist. Welcher fehlt ihr noch?<br><br>A) Südamerika<br>B) Asien<br>C) Afrika<br>D) Australien',
        answer: 'D) Australien',
        points: 1,
      },
      {
        question: 'In welcher Stadt in Mexiko hat Johanna ihr Auslandssemester gemacht?',
        answer: 'Guadalajara',
        points: 1,
      },
      {
        question: 'Welche zwei Professorinnen wollten, dass Johanna ihre Diplomarbeit bei ihnen schreibt?',
        answer: 'Sabine Schmölzer-Eibinger und Petra Ernst-Kühr',
        points: 2,
      },
      {
        question: 'Wie heisst Johannas Lieblingsbuch?<br><br>A) Sleeping Chinese<br>B) Beautiful Goats<br>C) Gerichte mit Mett',
        answer: 'B) Beautiful Goats',
        points: 1,
        image: '002.png',
      },
      {
        question: 'Welche Adresse hatten Johanna und Phillipp in Enschede?',
        answer: 'Tollenstraat 5',
        points: 2,
      },
      {
        question: 'Wo haben sich Johanna und Phillipp verlobt?<br><br>A) Auf einem Schiff in Österreich<br>B) Auf einem Berg in Italien<br>C) An einem Strand in Portugal<br>D) Auf einer Insel in Griechenland',
        answer: 'C) An einem Strand in Portugal',
        points: 1,
        image: '003.png',
      },
      {
        question: 'Johanna arbeitet in der Sprachwissenschaft. Was ist ihr Fachgebiet?<br><br>A) Phonetik<br>B) Lexik<br>C) Pragmatik',
        answer: 'C) Pragmatik',
        points: 1,
      },
      {
        question: 'Johanna liebt Babytiere. Welches Babytier hat sie am liebsten?<br><br>A) Babyzebresel<br>B) Babyozelot<br>C) Babykoala<br>D) Babyfaultier',
        answer: 'Alle Antworten sind natürlich richtig.',
        points: 1,
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
