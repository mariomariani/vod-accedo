import {NAVIGATION_KEYS} from '../navigation';

class CarouselController {
  /** @ngInject */
  constructor($scope, $http) {
    this.$scope = $scope;
    this.$http = $http;

    this.loadMovies()
      .then(() => {
        this.enableKeyboardNavigation();
        this.selectFirstMovie();
      });
  }

  loadMovies() {
    const url = 'https://demo2697834.mockable.io/movies';
    return this.$http.get(url)
      .then(response => {
        this.movies = response.data.entries;
      });
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
