; (function () {
  function FoundItemsDirective() {
    var ddo = {
      restrict: 'E',
      templateUrl: '../module-3/templates/foundItems.html',
      scope: {
        foundMenuItems: '<',
        removeItemAction: '&',
        onBtnClickDesc: '@'
      }
    };

    return ddo;
  }

  angular.module('app')
    .directive('foundItems', FoundItemsDirective);
})();
