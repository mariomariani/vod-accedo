import {NAVIGATION_KEYS} from '../navigation';

class CarouselController {
  /** @ngInject */
  constructor($scope) {
    this.movies = [
      {
        title: 0,
        selected: false
      },
      {
        title: 1,
        selected: false
      },
      {
        title: 2,
        selected: false
      },
      {
        title: 3,
        selected: false
      }
    ];
    this.$scope = $scope;

    this.enableKeyboardNavigation();
    this.selectFirstMovie();
  }

  enableKeyboardNavigation() {
    this.$scope.$on('navigation', (event, keyPressed) => {
      this.navigate(keyPressed);
    });
  }

  navigate(keyPressed) {
    if (keyPressed === NAVIGATION_KEYS.ENTER) {
      this.playMovie();
      return;
    }
    if (keyPressed === NAVIGATION_KEYS.LEFT) {
      this.selectLeft();
      return;
    }
    if (keyPressed === NAVIGATION_KEYS.RIGHT) {
      this.selectRight();
      return;
    }
  }

  playMovie() {
    console.log('play ' + this.selected);
  }

  selectLeft() {
    if (this.selected === 0) {
      return;
    }

    this.selected = this.selected - 1;
    this.selectMovie();
  }

  selectRight() {
    if (this.selected === this.movies.length - 1) {
      return;
    }

    this.selected = this.selected + 1;
    this.selectMovie();
  }

  selectFirstMovie() {
    this.selected = 0;
    this.selectMovie();
  }

  selectMovie() {
    angular.forEach(this.movies, movie => {
      movie.selected = false;
    });

    this.movies[this.selected].selected = true;
  }
}

export const carousel = {
  template: require('./carousel.html'),
  controller: CarouselController,
  controllerAs: 'carouselCtrl'
};
