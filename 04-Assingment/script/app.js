(function() {
    'use strict';

    const lunchApp = angular.module('lunchApp', []);

    const LunchController = function($scope) {
        
        $scope.result = '';

        const getWordCount = function(words) {
            let wordCount = 0;

            words.forEach(word => {
                if (word.trim().length !== 0) wordCount++;
            });

            return wordCount;
        }

        const assignResult = function(counter) {
            const enjoyableLunchItems = 3

            return counter <= enjoyableLunchItems
                ? 'Enjoy!'
                : 'Too much';
        }

        const splitInput = function(input) {
            return input.split(',');
        }

        $scope.getResult = function() {
            if (!$scope.lunchText) {
                return $scope.result = 'Please enter data first';
            }

            let result = splitInput($scope.lunchText);
            let wordCount = getWordCount(result);

            $scope.result = assignResult(wordCount);
            $scope.lunchText = '';
        };

    };
    
    LunchController.$inject = ['$scope'];

    lunchApp.controller('LunchController', LunchController);

})();