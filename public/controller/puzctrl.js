angular.module('myApp')
	.controller('puzController',['$scope' ,function($scope){
$scope.solved = false;
$scope.switch1;
$scope.switch2;
$scope.switch3;
$scope.switch4;

$scope.switchr1 = Math.round(Math.random());
$scope.switchr2 = Math.round(Math.random());
$scope.switchr3 = Math.round(Math.random());
$scope.switchr4 = Math.round(Math.random());

$scope.restart = ()=>{


$scope.switchr1 = Math.round(Math.random());
$scope.switchr2 = Math.round(Math.random());
$scope.switchr3 = Math.round(Math.random());
$scope.switchr4 = Math.round(Math.random());
console.log('scope vale' +$scope.switchr1+$scope.switchr2+$scope.switchr3+$scope.switchr4);

$scope.solved = false;
}


console.log('scope vale' +$scope.switchr1+$scope.switchr2+$scope.switchr3+$scope.switchr4);

$( function() {
     $("#draggable2").draggable();
     $("#draggable3").draggable();
     
  } );
 }]);



