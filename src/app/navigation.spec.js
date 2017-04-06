import angular from 'angular';
import 'angular-mocks';
import {NavigationController} from './navigation';

describe('navigation controller', () => {
  const keyCodes = {
    LEFT: 37,
    RIGHT: 39,
    ENTER: 13,
    UP: 40
  };

  beforeEach(() => {
    angular
      .module('navigation', [])
      .controller('NavigationController', NavigationController);
    angular.mock.module('navigation');
  });

  describe('checks navigation key', () => {
    it('should identify left arrow as navigation key',
      angular.mock.inject($controller => {
        const navigation = $controller('NavigationController');
        expect(navigation.isNavigationEvent(keyCodes.LEFT)).toBe(true);
      }
    ));

    it('should identify right arrow as navigation key',
      angular.mock.inject($controller => {
        const navigation = $controller('NavigationController');
        expect(navigation.isNavigationEvent(keyCodes.RIGHT)).toBe(true);
      }
    ));

    it('should identify enter as navigation key',
      angular.mock.inject($controller => {
        const navigation = $controller('NavigationController');
        expect(navigation.isNavigationEvent(keyCodes.ENTER)).toBe(true);
      }
    ));

    it('should not identify up arrow as navigation key',
      angular.mock.inject($controller => {
        const navigation = $controller('NavigationController');
        expect(navigation.isNavigationEvent(keyCodes.UP)).toBe(false);
      }
    ));
  });
});
