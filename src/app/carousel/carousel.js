import {NAVIGATION_KEYS} from '../navigation';

class CarouselController {
  /** @ngInject */
  constructor($scope, $http, $element, $state) {
    this.$scope = $scope;
    this.$http = $http;
    this.$element = $element;
    this.$state = $state;

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
    const movie = this.movies[this.selected];

    this.$state.go('player', {
      movieId: movie.id,
      movie
    });
  }

  selectLeft() {
    // First movie is selected, can't move left
    if (this.selected === 0) {
      return;
    }

    this.selectMovie(this.selected - 1);
  }

  selectRight() {
    // Last movie is selected, can't move right
    if (this.selected === this.movies.length - 1) {
      return;
    }

    this.selectMovie(this.selected + 1);
  }

  selectFirstMovie() {
    this.selectMovie(0);
  }

  selectMovie(index) {
    this.selected = index;

    angular.forEach(this.movies, movie => {
      movie.selected = false;
    });

    this.movies[this.selected].selected = true;
    this.setFocus();
  }

  // Focus on selected element to scroll movies
  setFocus() {
    const movies = this.$element[0].querySelectorAll('.movie .folder');
    if (movies[this.selected]) {
      movies[this.selected].focus();
    }
  }
}

export const carousel = {
  template: require('./carousel.html'),
  controller: CarouselController,
  controllerAs: 'carouselCtrl'
};
