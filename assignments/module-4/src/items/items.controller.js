; (function () {
  ItemsController.$inject = ['item'];
  function ItemsController(item) {
    var $ctrl = this;
    $ctrl.item = item.data;
  }

  angular.module('MenuApp.components').controller('ItemsController', ItemsController);
})();
