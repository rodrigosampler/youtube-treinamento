(function () {
   var indexModule = angular.module('MyApp');

   var indexController = function ($scope) {

   };

   indexController.$inject=['$scope', '$state'];
   indexModule.controller('IndexController', IndexController);
}());