import angular from 'angular';
import 'angular-mocks';
import {navbar} from './navbar';

describe('navbar component', () => {
  beforeEach(() => {
    angular
      .module('navbar', ['app/navbar/navbar.html'])
      .component('navbar', navbar);
    angular.mock.module('navbar');
  });

  it('should render navbar', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<navbar>Loading...</navbar>')($rootScope);
    $rootScope.$digest();
    const result = element[0].querySelectorAll('.navbar');
    expect(result.length).toEqual(1);
  }));
});
