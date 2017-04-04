class MovieController {
  folderUrl() {
    return this.movie.images[0].url;
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
