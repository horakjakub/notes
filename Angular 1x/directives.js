
'use strict';

app.controller('DirectiveExcerciceController', ['$scope', function ThirdViewController($scope){
  $scope.optimus = { haircut: "Slayer" };

  $scope.kotek = 'Kotek Puszek';

  $scope.firstWindow = {
      title: 'first window title',
      okButton: 'save settings'
  };

  $scope.firstContent = {
      lala: 2, 
      brubrum: {} 
  }; 

  $scope.footerInfo = {
    lestium: 300, 
    kastorium: 'hohoho'
  };

  $scope.primitiveValue = 12349;  

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
    scope: { 
      window: '=options',
      content: '@options2',
      footer: '<options3',
      tadAm: '<'
    }, 
    controller: ['$scope', function MyWindowController($scope) {
      $scope.windowController = function(){

      }; 
      this.bumbum = 'aha';

      $scope.tadam = 'kotek'; 

      var lokal = "aha"; 
    }],
    link: function(scope, element, attrs, ctrl){
      scope.footer.lestium = "zmienony!";
      scope.window.title = "zmienony!";
      scope.tadAm = 'someNewValue';

      element.on('click', function(){
        scope.$parent.primitiveValue = 'someOtherNewValue'; 
        var blub = scope.tadAm; 
      });

      
 
    }
  }; 

});