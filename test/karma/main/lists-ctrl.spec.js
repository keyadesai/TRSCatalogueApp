'use strict';

describe('module: main, controller: ListsCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var ListsCtrl;
  beforeEach(inject(function ($controller) {
    ListsCtrl = $controller('ListsCtrl');
  }));

  it('should do something', function () {
    expect(!!ListsCtrl).toBe(true);
  });

});
