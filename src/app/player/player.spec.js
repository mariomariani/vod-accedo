import angular from 'angular';
import 'angular-mocks';
import {player} from './player';

describe('player component', () => {
  const movie = {
    id: 1,
    contents: [{
      url: 'http://lorempixel.com/214/317/?t=1'
    }]
  };

  class MockVideojs {
  }

  class MockStateService {
  }

  class MockStateParamsService {
    get movie() {
      return movie;
    }
  }

  beforeEach(() => {
    angular
      .module('player', ['app/player/player.html'])
      .service('$state', MockStateService)
      .service('$stateParams', MockStateParamsService)
      .service('videojs', MockVideojs)
      .component('player', player);
    angular.mock.module('player');
  });

  it('should render player', angular.mock.inject(($rootScope, $compile) => {
    const element = $compile('<player>Loading...</player>')($rootScope);
    $rootScope.$digest();
    const result = element[0].querySelectorAll('.player');
    expect(result.length).toEqual(1);
  }));
});
