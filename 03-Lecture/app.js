(function () {
    'use strict';

    const ImageController = function($scope) {
        $scope.showCats = function() {
            return 'http://placekitten.com/200/300';
        }
    };
    
    ImageController.$inject = ['$scope'];

    angular.module('app', [])
        .controller('ImageController', ImageController);
})();