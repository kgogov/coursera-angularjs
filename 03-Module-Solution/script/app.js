(function() {
    "use strict";

    var appModule = angular.module('NarrowItDownApp', []);

    function FoundItemsDirective() {
        //* TODO... 
        return {
            templateUrl: 'foundItems.html',
            scope: {
                found: '<',
                onRemove: ''
            },
        };
    }


    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {

        var narrowCtrl  = this;

        var getMatchedCollection = function() {

            MenuSearchService.getMatchedMenuItems(narrowCtrl.searchTerm)
            .then(response => {
                narrowCtrl.found = response;
            })
            .catch(function (error) {
                console.log(`Something went wrong! Error: ${error}`);
            });
        };
    }; 


    MenuSearchService.$inject = ['$http', 'ApiBaseUrlPath'];
    function MenuSearchService($http, ApiBaseUrlPath) {

        var service = this;

        var searchMatchedMenuItems = function(response, searchTerm) {
            var collection = response.data;
            var foundItems = [];

            for (let i = 0; i < collection.menu_items.length; i++) {
                var itemDescription = collection.menu_items[i].description;
                var itemShortName   = collection.menu_items[i].short_name;

                if (itemDescription.toLowerCase().indexOf(searchTerm) !== -1) {
                    var item = {
                        name        : itemShortName,
                        description : itemDescription
                    };

                    foundItems.push(item);
                }
            }

            return foundItems;
        };
        
        service.getMatchedMenuItems = function(searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBaseUrlPath + "/menu_items.json")
            })
            .then(function (response) {
                return searchMatchedMenuItems(response, searchTerm);
            })
            .catch(function (error) {
                console.log(`Something went wrong! Error: ${error}`);
            });
        };
    };


    appModule.constant('ApiBaseUrlPath', 'https://davids-restaurant.herokuapp.com');
    appModule.service('MenuSearchService', MenuSearchService);
    appModule.controller('NarrowItDownController', NarrowItDownController);

})();