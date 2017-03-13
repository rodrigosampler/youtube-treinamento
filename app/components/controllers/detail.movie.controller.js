(function () {
    var detailMovieModule = angular.module('MyApp');

    var DetailMovieController = function ($scope, $state, $stateParams) {
        if (!$stateParams.movie.name) {
            $state.go('empty');
        }
        $scope.movie = $stateParams.movie;
        console.log($scope.movie);

    };

    DetailMovieController.$inject = ['$scope', '$state', '$stateParams'];
    detailMovieModule.controller('DetailMovieController', DetailMovieController);
}());