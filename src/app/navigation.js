export const NAVIGATION_EVENT = 'navigation';

export const NAVIGATION_KEYS = {
  ENTER: 13,
  LEFT: 37,
  RIGHT: 39
};

export class NavigationController {
  /** @ngInject */
  constructor($rootScope) {
    this.rootScope = $rootScope;
  }

  navigate(event) {
    if (this.isNavigationEvent(event.keyCode)) {
      this.rootScope.$broadcast(NAVIGATION_EVENT, event.keyCode);

      // Prevent default scrolling when pressing L/R arrow keys
      event.preventDefault();
    }
  }

  isNavigationEvent(keyCode) {
    let isNavigationKey = false;

    angular.forEach(NAVIGATION_KEYS, code => {
      if (keyCode === code) {
        isNavigationKey = true;
      }
    });

    return isNavigationKey;
  }
}
