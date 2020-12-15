(function () {
    'use strict';

    angular
        .module('NameCalculator', [])
        .controller('NameCalculatorController', function ($scope) {
            $scope.name       = '';
            $scope.totalValue = 0;

            $scope.displayNumeric = function () {
                let totalNameValue = calculateNumericForString($scope.name);
                $scope.totalValue  = totalNameValue;
            };

            const calculateNumericForString = (str) => {
                let totalStringValue = 0;

                for (let i = 0; i < str.length; i++) {
                    totalStringValue += str.charCodeAt(i);
                }

                return totalStringValue;
            };
        });
})();