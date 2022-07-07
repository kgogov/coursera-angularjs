; (function () {

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider, $locationProvider) {
    // Redirect to home page if no other URL matches
    $urlRouterProvider.otherwise('/');
    // Change default hash prefix (!)
    $locationProvider.hashPrefix('');

    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: '../module-4/src/home.template.html'
      })

      .state('categories', {
        url: '/categories',
        templateUrl: '../module-4/src/categories/categories.template.html',
        controller: 'CategoriesController as $ctrl',
        resolve: {
          categories: ['MenuDataService', function (MenuDataService) {
            return MenuDataService.getAllCategories();
          }]
        }
      })

      .state('items', {
        url: '/items/{shortName}',
        templateUrl: '../module-4/src/items/items.template.html',
        controller: 'ItemsController as $ctrl',
        resolve: {
          item: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
            return MenuDataService.getItemsForCategory($stateParams.shortName);
          }]
        }
      })
  }

  angular.module('MenuApp').config(RoutesConfig);
})();
