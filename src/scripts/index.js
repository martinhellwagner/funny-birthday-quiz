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
      this.checkImagesLoaded(container, () => {
        container.classList.add('container--ready');
        setTimeout(() => {
          done();
        }, 300);
      });
    },

    // Leave page through transition
    leave(container, done) {
      container.classList.remove('container--ready');
      setTimeout(() => {
        done();
      }, 300);
    },

    // Check if images are loaded
    checkImagesLoaded(container, loaded) {
      const images = container.getElementsByTagName('img');
      let imagesToLoad = images.length;

      for (let i = 0; i < images.length; i += 1) {
        if (images[i].complete) {
          imagesToLoad -= 1;
        } else {
          // eslint-disable-next-line
          images[i].addEventListener('load', () => {
            imagesToLoad -= 1;
            if (imagesToLoad === 0) {
              loaded();
            }
          });
        }
        if (imagesToLoad === 0) {
          loaded();
        }
      }
    },

    // Workaround for inconsistent height of mobile browsers
    calculateHeight(container) {
      document.body.style.setProperty('--windowHeight', `${window.innerHeight}px`);
      container.style.setProperty('--windowHeight', `${window.innerHeight}px`);
    },
  },
};
