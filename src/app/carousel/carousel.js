class CarouselController {
  /** @ngInject */
  constructor() {
    this.movies = [1, 2, 3, 4];
  }
}

export const carousel = {
  template: require('./carousel.html'),
  controller: CarouselController,
  controllerAs: 'carouselCtrl'
};
