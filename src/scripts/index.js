export default {
  methods: {
    init() {
      const container = document.querySelector('.container');

      this.calculateHeight(container);

      // Set style on body according to container type
      if (container.classList.contains('container--scrollable')) {
        document.body.style.setProperty('position', 'relative');
        document.body.style.setProperty('overflow', 'auto');
      } else {
        document.body.style.setProperty('position', 'fixed');
        document.body.style.setProperty('overflow', 'hidden');
      }
    },

    // Enter page through transition
    enter(container, done) {
      setTimeout(() => {
        container.classList.add('container--ready');
      }, 100);

      setTimeout(() => {
        done();
      }, 300);
    },

    // Leave page through transition
    leave(container, done) {
      container.classList.remove('container--ready');
      setTimeout(() => {
        done();
      }, 300);
    },

    // Workaround for inconsistent height of mobile browsers
    calculateHeight(container) {
      document.body.style.setProperty('--windowHeight', `${window.innerHeight}px`);
      container.style.setProperty('--windowHeight', `${window.innerHeight}px`);
    },
  },
};
