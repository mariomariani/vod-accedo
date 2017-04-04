export default class MovieService {
  /** @ngInject */
  constructor($http) {
    this.$http = $http;
  }

  loadMovies() {
    const url = 'https://demo2697834.mockable.io/movies';
    return this.$http.get(url)
      .then(response => {
        return response.data.entries;
      });
  }
}
