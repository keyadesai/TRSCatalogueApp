'use strict';
angular.module('main')
.controller('InspirationListCtrl', function ($log, $scope, Product) {
   $scope.inspirations = Product.inspirations;
});
