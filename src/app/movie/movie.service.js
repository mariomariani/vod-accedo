export default class MovieService {
  /** @ngInject */
  constructor($http, $cookies, $q) {
    this.$http = $http;
    this.$cookies = $cookies;
    this.$q = $q;
  }

  loadMovies() {
    const url = 'https://demo2697834.mockable.io/movies';
    return this.$http.get(url)
      .then(response => {
        this.movies = response.data.entries;
        return this.movies;
      });
  }

  loadHistory() {
    return this.resolveMovies()
      .then(() => {
        this.history = this.getHistory();
        return this.getMoviesFromHistory(this.history).reverse();
      });
  }

  resolveMovies() {
    return this.$q(resolve => {
      if (this.movies) {
        return resolve(this.movies);
      }
      return resolve(this.loadMovies());
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
          historyMovies.push(movie);
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
