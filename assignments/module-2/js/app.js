; (function () {

  ToBuyController.$inject = ['ShoppingListDataProvider', 'ShoppingListCheckOffService'];
  function ToBuyController(ShoppingListDataProvider, ShoppingListCheckOffService) {
    var toBuyList = this;

    ShoppingListDataProvider.getBuyingItemsList().then(function (data) {
      toBuyList.itemsCollection = data;
      ShoppingListCheckOffService.setInitialItemsCollection(data);
    }, function (error) {
      console.error('Request failed. Status code: ' + error.status);
    });

    toBuyList.checkOffItem = function(index, item) {
      ShoppingListCheckOffService.checkOffItem(index, item);
    };
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var checkedOffList = this;
    checkedOffList.boughtItemsCollection = ShoppingListCheckOffService.getBoughtItemsCollection();
  }

  angular.module('app', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
})();
