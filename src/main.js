import Vue from 'vue';
import VueRouter from 'vue-router';
import Vuex from 'vuex';

import Mixins from './scripts/index';

import App from './App.vue';

import Answers from './views/Answers.vue';
import Evaluation from './views/Evaluation.vue';
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
      path: '/auswertung',
      name: 'evaluation',
      component: Evaluation,
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
      'Angie',
      'Anna',
      'Jasmin',
      'Leni',
      'Matthias',
      'Matyas',
      'Natascha',
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
        question: 'Welche der folgenden Intro-Lieder von beliebten Anime-Serien ist immer noch einer von Johannas Lieblingssongs?<br><br>a) Mila Superstar<br>b) Heidi<br>c) Sailor Moon<br>d) Pokémon',
        answer: 'c) Sailor Moon',
        points: 1,
      },
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
        question: 'Johanna war in ihren Teenager-Jahren abhängig nach eigenen Angaben abhängig von einem Online-Rollenspiel. Was war der Name dieses Videospiels?<br><br>a) Everquest<br>b) RuneScape<br>c) Ragnarok Online<br>d) World of Warcraft',
        answer: 'c) Ragnarok Online',
        points: 1,
      },
      {
        question: 'Welchen Buchstaben hatte Johannas Oberstufen-Klasse?',
        answer: 'A',
        points: 1,
      },
      {
        question: 'In ihren wilden Jahren hatte Johanna ein Faible für sogenannte Indie-Rock-Bands. Welche dieser typischen Gruppen aus diesem Genre findet sie überschätzt?<br><br>a) The Killers<br>b) Arctic Monkeys<br>c) Mando Diao<br>d) Franz Ferdinand',
        answer: 'd) Franz Ferdinand',
        points: 1,
      },
      {
        question: 'Johanna hat sich in der Schulzeit – so wie die meisten Teenie-Girls – genau ein Mal eine Haarsträhne gefärbt. Welche Farbe hatte diese Haarsträhne?<br><br>a) blond<br>b) rot<br>c) blau<br>d) grün',
        answer: 'b) rot',
        points: 1,
      },
      {
        question: '1) Was war Hildes Geschenk zu Johannas Matura, das den ganzen Tag versteckt war?<br>2) Aus welcher Stadt kam es?<br>3) Warum war Hilde an diesem Tag nicht zu Hause?<br>4) Wo war sie?',
        answer: '1) Ohrringe<br>2) Las Vegas<br>3) Fortbildung mit den Schuldirektorinnen und -inspektorinnen<br>4) Mistelbach, NÖ',
        points: 4,
      },
      {
        question: 'Mit welchem Unternehmen hat Johanna ihre Maturareise gebucht?',
        answer: 'Mission2beach',
        points: 1,
      },
      {
        question: 'Johanna spricht gerne Spanisch. Welche andere Sprache wurde von Spanisch quasi überschrieben und fiel dieser Leidenschaft zum Opfer?<br><br>a) Ungarisch<br>b) Slowenisch<br>c) Französisch',
        answer: 'c) Französisch',
        points: 1,
      },
      {
        question: 'Johanna ist zur einer Party eingeladen, das Thema ist "Game of Thrones". Welches Kostüm wird sie wählen?<br><br>a) Kahleesi<br>b) Sansa<br>c) Cersei<br>d) Melisandre',
        answer: 'a) Kahleesi',
        points: 1,
        image: '001.png',
      },
      {
        question: 'Johanna hat fast alle Kontinente bereist. Welcher fehlt ihr noch?<br><br>a) Südamerika<br>b) Asien<br>c) Afrika<br>d) Australien',
        answer: 'd) Australien',
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
        question: 'Wie heisst Johannas Lieblingsbuch?<br><br>a) Sleeping Chinese<br>b) Beautiful Goats<br>c) Gerichte mit Mett',
        answer: 'b) Beautiful Goats',
        points: 1,
        image: '002.png',
      },
      {
        question: 'Welche Adresse hatten Johanna und Phillipp in Enschede?',
        answer: 'Tollenstraat 5',
        points: 2,
      },
      {
        question: 'Wo haben sich Johanna und Phillipp verlobt?<br><br>a) Auf einem Schiff in Österreich<br>b) Auf einem Berg in Italien<br>c) An einem Strand in Portugal<br>d) Auf einer Insel in Griechenland',
        answer: 'c) An einem Strand in Portugal',
        points: 1,
        image: '003.png',
      },
      {
        question: 'Johanna arbeitet in der Sprachwissenschaft. Was ist ihr Fachgebiet?<br><br>a) Phonetik<br>b) Lexik<br>c) Pragmatik',
        answer: 'c) Pragmatik',
        points: 1,
      },
      {
        question: 'Johanna liebt Babytiere. Welches Babytier hat sie am liebsten?<br><br>a) Babyzebresel<br>b) Babyozelot<br>c) Babykoala<br>d) Babyfaultier',
        answer: 'Alle Antworten sind natürlich richtig.',
        points: 1,
      },
      {
        question: 'Welches der folgenden exotischen Tiere findet Johanna am <i>wenigsten</i> niedlich?<br><br>a) Tarsier<br>b) Lamas<br>c) Lemuren<br>d) Alpakas',
        answer: 'a) Tarsier',
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
