import angular from 'angular';
import 'angular-mocks';
import {carousel} from './carousel';

describe('carousel component', () => {
  class MockMovieService {
  }

  class MockStateService {
  }

  beforeEach(() => {
    angular
      .module('carousel', ['app/carousel/carousel.html'])
      .service('$state', MockStateService)
      .service('movieService', MockMovieService)
      .component('carousel', carousel);
    angular.mock.module('carousel');
  });

  it('should render carousel', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<carousel>Loading...</carousel>')($rootScope);
    $rootScope.$digest();
    const result = element[0].querySelectorAll('.carousel');
    expect(result.length).toEqual(1);
  }));
});
