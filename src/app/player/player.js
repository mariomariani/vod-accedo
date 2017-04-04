class PlayerController {
  /** @ngInject */
  constructor($state, $stateParams) {
    if ($stateParams.movie === null) {
      // $state.go('main');
    }

    this.movie = $stateParams.movie ||
      {title: 'The most amazing title ever'};
  }

  movieUrl() {
    return 'http://d2bqeap5aduv6p.cloudfront.net/project_coderush_640x360_521kbs_56min.mp4';
    // return this.movie.contents[0].url;
  }
}

export const player = {
  template: require('./player.html'),
  controller: PlayerController,
  controllerAs: 'playerCtrl'
};
