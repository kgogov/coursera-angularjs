; (function () {

  MenuDataService.$inject = ['baseURL', '$http'];
  function MenuDataService(baseURL, $http) {
    var service = {};

    service.getAllCategories = function () {
      return $http.get(baseURL + '/categories.json');
    };

    service.getItemsForCategory = function (categoryShortName) {
      var config = { params: { category: categoryShortName } };
      return $http.get(baseURL + '/menu_items.json', config);
    };

    return service;
  }

  angular.module('MenuApp.data')
    .constant('baseURL', 'https://davids-restaurant.herokuapp.com')
    .factory('MenuDataService', MenuDataService);
})();
