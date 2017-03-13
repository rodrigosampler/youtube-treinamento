(function () {
    var detailmodule = angular.module('MyApp');

    var DetailSectionController = function($scope, $state, $stateParams){
        if (!$stateParams.section.name) {
            $state.go('empty');
        }
        $scope.section = $stateParams.section;

        this.showMovie = function (movie) {
            $state.go('detailMovie', {movie: movie});
        };
    };

    DetailSectionController.$inject=['$scope', '$state', '$stateParams'];

    detailmodule.controller('DetailSectionController', DetailSectionController);
}());