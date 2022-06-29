; (function () {

  MainController.$inject = [
    '$scope'
  ];

  function MainController($scope) {
    $scope.vm = {};

    $scope.messages = {
      emptyImput: 'Please, enter data first!',
      lunchItemsExceeded: 'Too much!',
      lunchItemsNormal: 'Enjoy your lunch!'
    };

    $scope.showMessage = function (lunchItems) {
      if (lunchItems === undefined || lunchItems.length === 0) {
        $scope.vm.message = $scope.messages.emptyImput
      } else if (lunchItems.length <= 3) {
        $scope.vm.message = $scope.messages.lunchItemsNormal;
      } else {
        $scope.vm.message = $scope.messages.lunchItemsExceeded;
      }
    }

    $scope.checkLunchItems = function () {
      var lunchItems = $scope.vm.lunchItems;

      if (angular.isArray(lunchItems)) {
        lunchItems = lunchItems.filter(Boolean);
      }

      $scope.showMessage(lunchItems);
    };
  }

  angular.module('app', []).controller('MainController', MainController);
})();
