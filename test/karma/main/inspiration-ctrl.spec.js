'use strict';

describe('module: main, controller: InspirationCtrl', function () {

  // load the controller's module
  beforeEach(module('main'));
  // load all the templates to prevent unexpected $http requests from ui-router
  beforeEach(module('ngHtml2Js'));

  // instantiate controller
  var InspirationCtrl;
  beforeEach(inject(function ($controller) {
    InspirationCtrl = $controller('InspirationCtrl');
  }));

  it('should do something', function () {
    expect(!!InspirationCtrl).toBe(true);
  });

});
