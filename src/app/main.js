class MainController {
  /** @ngInject */
  constructor($scope) {
    this.hello = 'Hello World!';

    $scope.$on('key', (event, keyPressed) => {
      this.hello = keyPressed;
    });
  }
}

export const main = {
  template: require('./main.html'),
  controller: MainController
};
