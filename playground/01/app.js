; (function () {
  'use strict';

  function MainController($scope) {
    $scope.model = {};
    $scope.vm = {};

    $scope.model.firstName = 'Konstantin';
    $scope.model.lastName = 'Gogov';
  }

  MainController.$inject = [
    '$scope'
  ];

  angular.module('app', [])
    .controller('MainController', MainController)
})();
