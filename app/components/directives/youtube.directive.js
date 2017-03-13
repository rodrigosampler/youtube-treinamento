var app = angular.module('MyApp');

app.directive('youtubeIframe', function($sce) {
    return {
        restrict: 'EA',
        scope: { videoid:'=' },
        replace: true,
        template: '<div style="margin-right:50px; width:0px;"><iframe width="420" height="315" src="{{url}}" frameborder="0" allowfullscreen></iframe></div>',
        link: function (scope) {
            scope.$watch('videoid', function (value) {
                if (value) {
                    scope.url = $sce.trustAsResourceUrl("http://www.youtube.com/embed/" + value);
                }
            });
        }
    };
});