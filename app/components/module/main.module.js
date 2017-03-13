(function () {
    
    var configFunction = function ($stateProvider, $urlRouterProvider) {
        var empty = {
            name: 'empty',
            url: '/',
            templateUrl: 'components/templates/empty.html'
        };

        var detailMovie = {
            name: 'detailMovie',
            url:'/movie',
            templateUrl: 'components/templates/detailMovie.html',
            controller: 'DetailMovieController',
            params:{
                movie: {}
            }
        };

        var detailSection = {
            name:'detailSection',
            url:'/section',
            templateUrl:'components/templates/detailSection.html',
            controller: 'DetailSectionController',
            params:{
                section:{}
            }
        };

        $stateProvider.state(empty);
        $stateProvider.state(detailMovie);
        $stateProvider.state(detailSection);
    };

    angular
        .module('MyApp', ['ui.router', 'ngMaterial'])
        .config(configFunction);

}());