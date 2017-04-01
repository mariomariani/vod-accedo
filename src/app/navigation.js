export class NavigationController {
  /** @ngInject */
  constructor($rootScope) {
    this.rootScope = $rootScope;
  }

  navigate(event) {
    if (this.isNavigationEvent(event.keyCode)) {
      this.rootScope.$broadcast('key', event.keyCode);
    }
  }

  isNavigationEvent(keyCode) {
    const NAVIGATION_EVENTS = [13, 37, 39];
    return NAVIGATION_EVENTS.indexOf(keyCode) !== -1;
  }
}
