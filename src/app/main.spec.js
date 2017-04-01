import angular from 'angular';
import 'angular-mocks';
import {main} from './main';

describe('main component', () => {
  beforeEach(() => {
    angular
      .module('main', ['app/main.html'])
      .component('main', main);
    angular.mock.module('main');
  });
  it('should render main world', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<main>Loading...</main>')($rootScope);
    $rootScope.$digest();
    const result = element[0].querySelectorAll('.main');
    expect(result.length).toEqual(1);
  }));
});
