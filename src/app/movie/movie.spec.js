import angular from 'angular';
import 'angular-mocks';
import {movie} from './movie';

describe('movie component', () => {
  beforeEach(() => {
    angular
      .module('movie', ['app/movie/movie.html'])
      .component('movie', movie);
    angular.mock.module('movie');
  });

  it('should render movie', angular.mock.inject(($rootScope, $compile) => {
    const $scope = $rootScope.$new();
    $scope.fixture = {
      images: [{url: 'http://lorempixel.com/214/317/?t=1'}]
    };

    const element = $compile('<movie movie=fixture>Loading...</movie>')($scope);
    $scope.$digest();
    const result = element[0].querySelectorAll('.movie');
    expect(result.length).toEqual(1);
  }));
});
