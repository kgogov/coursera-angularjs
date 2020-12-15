(function(){
    'use strict';

    const DIController = function($scope, $filter, $injector) {
        $scope.name = 'Konstantin';

        $scope.upper = function() {
            let upCase  = $filter('uppercase');
            $scope.name = upCase($scope.name);
        };

        // The "magic" of AngularJS - $injector is the service who does this
        // console.log($injector.annotate(DIController));
    };

    DIController.$inject = ['$scope', '$filter'];

    angular.module('DIApp', [])
        .controller('DIController', DIController);

}());

// https://javascript-minifier.com/
// !function(){"use strict";const n=function(n,e,t){n.name="Konstantin",n.upper=function(){let t=e("uppercase");n.name=t(n.name)}};n.$inject=["$scope","$filter"],angular.module("DIApp",[]).controller("DIController",n)}();