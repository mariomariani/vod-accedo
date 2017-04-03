export const NAVIGATION_KEYS = [13, 37, 39];

export class NavigationController {
  /** @ngInject */
  constructor($rootScope) {
    this.rootScope = $rootScope;
  }

  navigate(event) {
    if (this.isNavigationEvent(event.keyCode)) {
      this.rootScope.$broadcast('key_pressed', event.keyCode);
    }
  }

  isNavigationEvent(keyCode) {
    return NAVIGATION_KEYS.indexOf(keyCode) !== -1;
  }
}
