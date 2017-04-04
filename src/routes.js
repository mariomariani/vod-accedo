export default routesConfig;

/** @ngInject */
function routesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true).hashPrefix('!');
  $urlRouterProvider.otherwise('/');

  $stateProvider
    .state('main', {
      url: '/',
      component: 'main',
      resolve: {
        movies: movieService => {
          return movieService.loadMovies();
        }
      }
    })
    .state('player', {
      url: '/play/{movieId}',
      component: 'player',
      params: {
        movie: null
      }
    });
}
