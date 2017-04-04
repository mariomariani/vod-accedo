export default class MovieService {
  /** @ngInject */
  constructor($http, $cookies, $q) {
    this.$http = $http;
    this.$cookies = $cookies;
    this.$q = $q;
  }

  loadMovies() {
    return this.resolveMovies()
      .then(movies => {
        this.movies = movies;
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
    const url = 'https://demo2697834.mockable.io/movies';

    return this.$q(resolve => {
      if (this.movies) {
        return resolve(this.movies);
      }

      this.$http.get(url)
        .then(response => {
          return resolve(response.data.entries);
        });
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
