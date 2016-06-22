'use strict';
angular.module('main')
.controller('FavoriteCtrl', function ($log, $scope, Product, lodash) {

    $scope.getFavorites = function () {
          $scope.offers = Product.getFavorites();     
    };

    $scope.removeFromFavorite = function(product){
    	console.log('clicked', product);
    	Product.removeFromFavorite(product);
    }

    $scope.getFavorites();
});
