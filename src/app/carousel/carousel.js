const ENTER = 13;
const LEFT = 37;
const RIGHT = 39;

class CarouselController {
  /** @ngInject */
  constructor($scope) {
    this.movies = [1, 2, 3, 4];
    this.$scope = $scope;
    this.enableKeyboardNavigation();
  }

  enableKeyboardNavigation() {
    this.$scope.$on('key_pressed', (event, keyPressed) => {
      this.selectMovie(keyPressed);
    });
  }

  selectMovie(keyPressed) {
    if (keyPressed === ENTER) {
      this.playMovie();
      return;
    }
    if (keyPressed === LEFT) {
      this.selectLeft();
      return;
    }
    if (keyPressed === RIGHT) {
      this.selectRight();
      return;
    }
  }

  playMovie() {
    console.log('play');
  }

  selectLeft() {
    console.log('selectLeft');
  }

  selectRight() {
    console.log('selectRight');
  }
}

export const carousel = {
  template: require('./carousel.html'),
  controller: CarouselController,
  controllerAs: 'carouselCtrl'
};
