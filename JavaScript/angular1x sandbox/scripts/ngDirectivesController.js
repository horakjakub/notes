app.controller('ngDirectivesController', ['$scope', function ngDirectivesController($scope){



	$scope.tadam = 'Hello Tadam!';

	// -----------------// one time bindings

	$scope.oneTimeDataBiding  = 'oneTimeDataBiding'; 

	$scope.changOneTimeDataBidingValue = function changOoneTimeDataBidingValue(){
		$scope.oneTimeDataBiding  = 'changed Value'; 
	};

	// -----------------// ng-href 

	$scope.ngHrefAdress = 'google.com';

	// ---------------- // ng-form 


	$scope.firstFormSubmitFuntion = function firstFormSubmitFuntion(){
		debugger; 
	};
	
	$scope.secondFormSubmitFuntion = function secondFormSubmitFuntion(){
		debugger; 
	};

}]);