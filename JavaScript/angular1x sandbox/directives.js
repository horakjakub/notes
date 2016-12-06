'use strict';

app.controller('DirectiveExcerciceController', ['$scope', function ThirdViewController($scope){
  $scope.optimus = { haircut: "Slayer" };

  $scope.kotek = 'Kotek Puszek';

  $scope.firstWindow = {
      title: 'first window title',
      okButton: 'save settings'
  };

}]); 

app.directive('transformer', function() {
  return {
    restrict: 'E',
    template: '<div style="color: red;">His haircut name is on {{ transformer.haircut }} style!</div>',
    scope: {
    	transformer: '=info'
    }, 
   	link: function(scope, element, attr){
	    scope.$on('$destroy', function() {
	    });
   	} 
  };
});

app.directive('myWindow', function() {
  return {
    restrict: 'E',
    transclude: true,
    templateUrl: 'directives_templates/myWindow.html',
    scope: false //{ window: '=options'},  
    controller: ['$scope', function MyWindowController($scope) {
      $scope.windowController = function(){

      }; 
      
      $scope.tadam = 'kotek'; 

      var lokal = "aha"; 
    }],
    link: function(scope, element, attrs, ctrl){
      debugger;
    }
  }; 

});