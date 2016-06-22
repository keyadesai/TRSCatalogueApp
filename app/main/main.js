'use strict';
angular.module('main', [
  'ionic',
  'ionic-material',
  'ngCordova',
  'ui.router',
  'ionic-ratings',
  'ngLodash'
  // TODO: load other modules selected during generation
])
.config(function ($stateProvider, $urlRouterProvider) {

  // ROUTING with ui.router
  $urlRouterProvider.otherwise('/main/product-list');
  $stateProvider
    // this state is placed in the <ion-nav-view> in the index.html
    .state('main', {
      url: '/main',
      abstract: true,
      templateUrl: 'main/templates/tabs.html'
    })
      .state('main.list', {
        url: '/product-list',
        views: {
          'tab-list': {
            templateUrl: 'main/templates/product-list.html',
            controller: 'ListsCtrl as ctrl'
          }
        }
      })
      .state('main.favorite', {
        url: '/favorite',
        views: {
          'tab-favorite': {
            templateUrl: 'main/templates/favorite.html',
            controller: 'FavoriteCtrl as ctrl'
          }
        }
      })
      .state('main.inspirationList', {
        url: '/inspiration-list',
        views: {
          'tab-inspirationList': {
            templateUrl: 'main/templates/inspiration-list.html',
            controller: 'InspirationListCtrl as ctrl'
          }
        }
      });
});
