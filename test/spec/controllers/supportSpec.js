/*jshint unused: vars */
define(['angular', 'angular-mocks', 'app'], function(angular, mocks, app) {
  'use strict';

  describe('Controller: SupportCtrl', function () {

    // load the controller's module
    beforeEach(module('gettyApp.controllers.SupportCtrl'));

    var SupportCtrl,
      scope;

    // Initialize the controller and a mock scope
    beforeEach(inject(function ($controller, $rootScope) {
      scope = $rootScope.$new();
      SupportCtrl = $controller('SupportCtrl', {
        $scope: scope
      });
    }));

    // it('should attach a list of awesomeThings to the scope', function () {
    //   expect(scope.awesomeThings.length).toBe(3);
    // });
  });
});
