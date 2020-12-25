(function () {

    const app = angular.module('ShoppingListCheckOff', []);

    const ShoppingListCheckOffService = function() {

        const service = this;

        const toBuyItemsCollection = [
            { name: "Oats", quantity: 2},
            { name: "Milk", quantity: 1},
            { name: "Protein Powder", quantity: 1},
            { name: "Cookies", quantity: 1},
            { name: "Almonds", quantity: 1},
            { name: "Apples", quantity: 5},
            { name: "Bananas", quantity: 2},
        ];

        const boughtItemsCollection = [];

        const addItem = function(itemIndex) {

            //! AngularJS dynamically adjusts list indexes 
            if (toBuyItemsCollection[itemIndex]) {
                return boughtItemsCollection.push(toBuyItemsCollection[itemIndex]);
            }

            console.log('Have to solve this problem - app is not working properly!');
        };

        const removeItem = function(itemIndex) {
            toBuyItemsCollection.splice(itemIndex, 1);
        };

        service.checkItem = function(itemIndex) {
            removeItem(itemIndex);
            addItem(itemIndex);
            console.log(boughtItemsCollection.length);
        };

        service.getItems = function() {
            return toBuyItemsCollection;
        };

        service.getBoughtItems = function() {
            return boughtItemsCollection;
        }
    };

    const ToBuyController = function(ShoppingListCheckOffService) {
        
        const toBuyList = this;
        const toBuyMessage = 'Everything is bought!';
        
        toBuyList.items = ShoppingListCheckOffService.getItems();
        
        const checkToBuyCollectionSize = function() {
            if (toBuyList.items.length === 0) {
                toBuyList.message = toBuyMessage;
            }
        };

        toBuyList.checkItem = function(itemIndex) {
            ShoppingListCheckOffService.checkItem(itemIndex);
            checkToBuyCollectionSize();
        };
    };

    const AlreadyBoughtController = function(ShoppingListCheckOffService) {

        const boughtList = this;
        const boughtMessage = 'Nothing here yet!';

        boughtList.items = ShoppingListCheckOffService.getBoughtItems();

        boughtList.getMessage = function() {
            if (boughtList.items.length === 0) {
                return boughtList.message = boughtMessage;
            }

            return boughtList.message = '';
        };
    };


    ToBuyController.$inject         = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    app.controller('ToBuyController', ToBuyController);
    app.controller('AlreadyBoughtController', AlreadyBoughtController);
    app.service('ShoppingListCheckOffService', ShoppingListCheckOffService);
})();