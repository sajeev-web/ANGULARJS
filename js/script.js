(function() {

	"use strict";
	var Script = (function() {

	var CONSTANTS = 
                {
        	ID_SELECTORS:
        	{
        		
        	}  
        }  

        return {
        	main: function() {
        		var myApp = angular.module("mainApp", []);

                myApp.controller("mainController", function($scope){
                    $scope.name = "Sajeev Kumar R";
                });

                console.log("Mile stone");
        	}
        }
	})();

	Script.main();
})();