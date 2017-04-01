export const main = {
  template: require('./main.html'),
  controller($scope) {
    this.hello = 'Hello World!';

    $scope.$on('key', (event, keyPressed) => {
      this.hello = keyPressed;
    });
  }
};
