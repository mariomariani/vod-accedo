export const hello = {
  template: require('./hello.html'),
  controller($scope) {
    this.hello = 'Hello World!';

    $scope.$on('key', (event, keyPressed) => {
      this.hello = keyPressed;
    });
  }
};
