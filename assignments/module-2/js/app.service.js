; (function () {

  ShoppingListDataProvider.$inject = ['$http'];
  function ShoppingListDataProvider($http) {
    var service = this;

    service.getBuyingItemsList = function () {
      var url = '../module-2/data/shoppingList.json';

      return $http.get(url).then(function (response) {
        return response.data;
      });
    };

    return service;
  };

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyItemsCollection = [], boughtItemsCollection = [];

    service.checkOffItem = function(index, item) {
      toBuyItemsCollection.splice(index, 1);
      boughtItemsCollection.push({ name: item.name, quantity: item.quantity });
    };

    service.setInitialItemsCollection = function(collection) {
      toBuyItemsCollection = collection;
    };

    service.getBoughtItemsCollection = function() {
      return boughtItemsCollection;
    };

    return service;
  }

  angular.module('app')
    .factory('ShoppingListDataProvider', ShoppingListDataProvider)
    .factory('ShoppingListCheckOffService', ShoppingListCheckOffService);
})();
