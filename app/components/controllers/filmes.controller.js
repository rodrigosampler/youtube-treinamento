(function () {
    var filmesModule = angular.module('MyApp');

    var FilmesController = function ($scope, $state, HttpService) {

        $scope.categories = [{name: 'Carregando...'}];

        HttpService.getMovies().then(function(response) {
            $scope.categories = response.data;
        }, function(error) {
            alert('error');
        });

        this.search = function () {
            var test = $scope.categories.items;
            var filmes
            console.log(test+"1");
            $state.go('detailMovie', {movie: test});
        };

        this.showDetail = function (movie) {
            $state.go('detailMovie', {movie: movie});
        };

        this.showDetailSection = function(category){
            $state.go('detailSection', {section: category});
        };

    };
    FilmesController.$inject = ['$scope', '$state', 'HttpService'];
    filmesModule.controller('FilmesController', FilmesController);
}());