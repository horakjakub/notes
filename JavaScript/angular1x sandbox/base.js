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

app.controller('FirstViewController', ['$scope', 'transformer', 'kotek', function FirstViewController($scope, transformer, kotek){

	var optimusPrime = {
		name: 'Optimus'
	}; 

	$scope.tadam = "TADAM!";

	$scope.checkScope = function checkScope(){
		var $scope = this; 
		debugger;
	};

	transformer.transformAutobot(optimusPrime);
	kotek.transformDesepticon(optimusPrime); 

	//$scope.piesek = 'complete idiot';
 
}]);

app.controller('SecondViewController', ['$scope', function SecondViewController($scope){

 	$scope.counts = 0;
 	
 	$scope.$on('executiveCounter', function(){
		$scope.piesek = 'tadam';
		$scope.counts++;
	});
	//$scope.counts = 0;

	$scope.transformer = { name: 'complete idiot' };
	$scope.piesek = { haircut: 'complete idiot' };

	$scope.showDirective = true;

}]);

app.controller('ThirdViewController', ['$scope', function ThirdViewController($scope){
	$scope.autobot = {};

	$scope.autobot.name = 'Opitmus';

	$scope.autobot.transormationsModule = {};
	$scope.autobot.transormationsModule.transform = 'on';
	$scope.autobot.transormationsModule.transformCounts = 1;

	$scope.$watch('autobot', function(old, ne){
		debugger;
	});

	$scope.$watch('autobot', function(old, ne){
		debugger;
	}, true); 

	$scope.$watchCollection('autobot', function(old, ne){
		debugger;
	}); 

	$scope.func = function(){
		debugger
	};
	

}]);
