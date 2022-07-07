; (function () {
  CategoriesController.$inject = ['categories'];
  function CategoriesController(categories) {
    var $ctrl = this;
    $ctrl.categories = categories.data;
  }

  angular.module('MenuApp.components').controller('CategoriesController', CategoriesController);
})();
