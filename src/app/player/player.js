class PlayerController {
  /** @ngInject */
  constructor($state, $stateParams, $timeout, videojs) {
    this.$state = $state;
    this.$timeout = $timeout;
    this.videojs = videojs;

    if ($stateParams.movie === null) {
      this.redirectToHome();
      return;
    }

    this.movie = $stateParams.movie;
    this.getPlayer();
  }

  redirectToHome() {
    this.$state.go('main');
  }

  getPlayer() {
    const playerId = this.movie.id;

    // Wait for player to be loaded
    return this.$timeout(() => {
      this.player = this.videojs(playerId);
      this.player.requestFullscreen();
      this.onMovieEnd();
    });
  }

  onMovieEnd() {
    this.player.on('ended', () => {
      this.redirectToHome();
    });
  }

  movieUrl() {
    if (this.movie) {
      return this.movie.contents[0].url;
    }
  }
}

export const player = {
  template: require('./player.html'),
  controller: PlayerController,
  controllerAs: 'playerCtrl'
};
