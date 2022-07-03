; (function () {

  MainController.$inject = ['MenuSearchService'];
  function MainController(MenuSearchService) {
    var $ctrl = this;

    $ctrl.getMatchedMenuItems = function () {
      var promise = MenuSearchService.getMenuItems();

      promise.then(function (response) {
        var menuItems = response.data.menu_items;
        var searchTerm = $ctrl.searchTerm && $ctrl.searchTerm.toLowerCase();
        $ctrl.narrowedDownMenuItems = MenuSearchService.getNarrowedDownMenuItems(menuItems, searchTerm);
      },
        function (error) {
          console.error('Request failed. Status code: '
            + error.status + '. Status text: ' + error.statusText);
        });
    };

    $ctrl.removeMenuItem = function (itemIndex) {
      $ctrl.narrowedDownMenuItems.splice(itemIndex, 1);
    };
  }

  angular.module('app', [])
    .controller('MainController', MainController);
})();
