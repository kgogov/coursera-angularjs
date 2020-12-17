(function() {
    'use strict';

    const lunchApp = angular.module('lunchApp', []);

    const LunchController = function($scope) {

        const messageTooMuch = 'Too much!';
        const messageWarning = 'Please enter data first'
        const messageEnjoy   = 'Enjoy!';
        
        
        const getWordCount = function(words) {
            let wordCount = 0;
            
            words.forEach(word => {
                if (word.trim().length !== 0) wordCount++;
            });
            
            return wordCount;
        }
        
        const assignResult = function(counter) {
            const enjoyableLunchItems = 3;
            
            return counter <= enjoyableLunchItems
            ? messageEnjoy
            : messageTooMuch;
        }

        const splitInput = function(input) {
            return input.split(',');
        }
        
        const setFontColor = function(str) {
            if (str === messageWarning) $scope.messageStyle  = { 'color' : 'orange' };
            if (str === messageTooMuch) $scope.messageStyle  = { 'color' : 'red' };
            if (str === messageEnjoy)   $scope.messageStyle  = { 'color' : 'green' };
        }

        
        $scope.result = '';

        $scope.getResult = function() {

            if (!$scope.lunchText) {
                $scope.result = 'Please enter data first';
                return setFontColor($scope.result);
            }

            let result = splitInput($scope.lunchText);
            let wordCount = getWordCount(result);

            $scope.result = assignResult(wordCount);

            setFontColor($scope.result);
            
            $scope.lunchText = '';
        };

    };
    
    LunchController.$inject = ['$scope'];

    lunchApp.controller('LunchController', LunchController);

})();