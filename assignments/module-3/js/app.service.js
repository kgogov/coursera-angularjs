; (function () {

  MenuSearchService.$inject = ['$http', 'baseAPIpath'];
  function MenuSearchService($http, baseAPIpath) {
    var service = this;

    service.getMenuItems = function () {
      var menuItems = 'menu_items.json';

      return $http.get(baseAPIpath + menuItems).then(function (response) {
        return response;
      })
    };

    service.getNarrowedDownMenuItems = function (menuItems, searchTerm) {
      var narrowedDownMenuItems = [];

      if (!searchTerm) searchTerm = null;

      angular.forEach(menuItems, function (value, key, obj) {
        if (value.description.toLowerCase().indexOf(searchTerm) > -1) {
          narrowedDownMenuItems.push(value);
        }
      });

      return narrowedDownMenuItems;
    };

    return service;
  }

  angular.module('app')
    .constant('baseAPIpath', 'https://davids-restaurant.herokuapp.com/')
    .factory('MenuSearchService', MenuSearchService);
})();
