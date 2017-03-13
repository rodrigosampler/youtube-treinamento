(function() {

    var myAppModule = angular.module('MyApp');

    var HttpService = function($http) {

        this.getMovies = function() {
            return $http.get('components/mocks/movies.json');
        };

        this.getCategories = function () {
          return $http.get('components/mocks/movies.json');
        };
    };

    HttpService.$inject = ['$http'];
    myAppModule.service('HttpService', HttpService);

}());