'use strict';

describe('module: main, controller: FavoriteCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var FavoriteCtrl;
  beforeEach(inject(function ($controller) {
    FavoriteCtrl = $controller('FavoriteCtrl');
  }));

  it('should do something', function () {
    expect(!!FavoriteCtrl).toBe(true);
  });

});
