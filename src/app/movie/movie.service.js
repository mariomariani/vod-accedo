export default class MovieService {
  /** @ngInject */
  constructor($http, $cookies, $q) {
    this.$http = $http;
    this.$cookies = $cookies;
    this.$q = $q;
  }

  loadMovies() {
    return this.$q(resolve => {
      // return this.movies if it's already been loaded
      if (this.movies) {
        return resolve(this.movies);
      }

      return this.loadMoviesFromApi(resolve);
    });
  }

  loadHistory() {
    return this.loadMovies()
      .then(() => {
        this.history = this.getHistory();
        return this.getMoviesFromHistory(this.history).reverse();
      });
  }

  loadMoviesFromApi(resolve) {
    const url = 'https://demo2697834.mockable.io/movies';

    this.$http.get(url)
      .then(response => {
        this.movies = response.data.entries;
        return resolve(this.movies);
      });
  }

  getHistory() {
    const key = 'history';
    return this.$cookies.getObject(key) || [];
  }

  getMoviesFromHistory() {
    const historyMovies = [];

    angular.forEach(this.history, movieId => {
      angular.forEach(this.movies, movie => {
        if (movie.id === movieId) {
          historyMovies.push(angular.copy(movie));
          return;
        }
      });
    });

    return historyMovies;
  }

  pushToHistory(movieId) {
    const cookieName = 'history';
    const history = this.$cookies.getObject(cookieName) || [];

    // if (history.indexOf)
    history.push(movieId);
    this.$cookies.putObject(cookieName, history);
  }
}
