; (function () {
  function FoundItemsDirective() {
    function FoundItemsController() {
      var $ctrl = this;

      $ctrl.removeItem = function(index) {
        $ctrl.onBtnClick({index: index});
      };
    }

    var ddo = {
      restrict: 'E',
      templateUrl: '../module-3/templates/foundItems.html',
      controller: FoundItemsController,
      controllerAs: '$ctrl',
      bindToController: true,
      scope: {
        foundMenuItems: '<',
        onBtnClick: '&',
        onBtnClickDesc: '@'
      }
    };

    return ddo;
  }

  angular.module('app')
    .directive('foundItems', FoundItemsDirective);
})();
