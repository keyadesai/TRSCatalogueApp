'use strict';
angular.module('main')
.controller('ListsCtrl', function ($log, $scope, Product, lodash, $ionicPopup) {
 
    $scope.fetchOffersFromServer = function () {

        Product.fetchOffersFromServer()
        .then(function (response) {

          var x2js = new X2JS();
          var jsonObj = x2js.xml_str2json( response.data );
          $scope.offers = jsonObj.Query.SearchResult.Offer;
        });
    };

    $scope.addToFavorite = function(product){
      Product.addToFavorites(product);
      $scope.showFavoritePopup();
    }

   $scope.random = Math.floor((Math.random() * 10) + 1);


  $scope.showSharePopup = function() {
      $scope.data = {}
    
      // Custom popup
      var myPopup = $ionicPopup.show({
         template: '',
         title: 'Work in progress.',
         subTitle: 'Thank you for your interest.',
         scope: $scope,
      
         buttons: [
            { text: 'OK' }
         ]
      });

      myPopup.then(function(res) {
         console.log('Tapped!', res);
      });    
   };

   $scope.showNotificationPopup = function() {
      $scope.data = {}
    
      // Custom popup
      var myPopup = $ionicPopup.show({
         template: '',
         title: 'You will be notified when product is available.',
         subTitle: 'Thank you for your interest.',
         scope: $scope,
      
         buttons: [
            { text: 'OK' }
         ]
      });

      myPopup.then(function(res) {
         console.log('Tapped!', res);
      });    
   };


   $scope.showFavoritePopup = function() {
      $scope.data = {}
    
      // Custom popup
      var myPopup = $ionicPopup.show({
         template: '',
         title: 'Product has been added to favorites successfully.',
         scope: $scope,
      
         buttons: [
            { text: 'OK' }
         ]
      });

      myPopup.then(function(res) {
         console.log('Tapped!', res);
      });    
   };

    $scope.fetchOffersFromServer();
});
