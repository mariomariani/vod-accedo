import {NAVIGATION_EVENT, NAVIGATION_KEYS} from '../navigation';

class CarouselController {
  /** @ngInject */
  constructor($scope, $element, $state, movieService) {
    this.$scope = $scope;
    this.$element = $element;
    this.$state = $state;
    this.movieService = movieService;
  }

  $onInit() {
    this.enableKeyboardNavigation();
    this.selectFirstMovie();
  }

  enableKeyboardNavigation() {
    this.$scope.$on(NAVIGATION_EVENT, (event, keyPressed) => {
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

  playMovie(index = this.selected) {
    const movie = this.movies[index];
    this.movieService.pushToHistory(movie.id);

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
    this.scrollMoviesList(this.selected - 1);
  }

  selectRight() {
    // Last movie is selected, can't move right
    if (this.selected === this.movies.length - 1) {
      return;
    }

    this.selectMovie(this.selected + 1);
    this.scrollMoviesList(this.selected + 1);
  }

  selectFirstMovie() {
    this.selectMovie(0);
  }

  selectMovie(index) {
    if (!this.movies || this.movies.length === 0) {
      return;
    }

    this.selected = index;

    angular.forEach(this.movies, movie => {
      movie.selected = false;
    });

    this.movies[this.selected].selected = true;
  }

  scrollMoviesList(position) {
    const movies = this.$element[0].querySelectorAll('.movie');
    if (movies[position]) {
      movies[position].scrollIntoView();
    }
  }
}

export const carousel = {
  template: require('./carousel.html'),
  controller: CarouselController,
  controllerAs: 'carouselCtrl',
  bindings: {
    movies: '<'
  }
};
