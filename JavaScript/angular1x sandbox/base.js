'use strict';

var appToInject = angular.module('additionalModule', []);

appToInject.service('kotek', function(){ 
	this.transformDesepticon = function transformDesepticon(selectedAutobot){

	}; 
}); 


var app = angular.module('sandBoxApp', ['additionalModule']);

app.service('transformer', ['kotek', function(kotek){ 

	this.transformAutobot = function transformAutobot(selectedAutobot){

	}; 
}]); 

app.controller('FirstViewController', ['$scope', 'transformer', function FirstViewController($scope, transformer){

	var optimusPrime = {
		name: 'Optimus'
	}; 

	$scope.tadam = "TADAM!";

	$scope.checkScope = function checkScope(){
		var $scope = $scope; 
	};

	transformer.transformAutobot(optimusPrime);
	debugger;
}]);