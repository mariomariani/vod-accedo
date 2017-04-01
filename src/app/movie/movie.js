class MovieController {
  /** @ngInject */
  constructor() {
    console.log(this.movie);
  }
}

export const movie = {
  template: require('./movie.html'),
  controller: MovieController,
  controllerAs: 'movieCtrl',
  bindings: {
    movie: '<'
  }
};
