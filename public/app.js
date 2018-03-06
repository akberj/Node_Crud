

$( function() {

    $('#draggable1').draggable();
  } );

var app = angular.module('myApp',['ngRoute','ngMaterial','ui-notification']);


// theme option
 app.config(function ($mdThemingProvider) {
  $mdThemingProvider.theme(`dark-grey`).backgroundPalette('grey').dark();
  $mdThemingProvider.theme('dark-orange').backgroundPalette('orange').dark();
  $mdThemingProvider.theme('dark-purple').backgroundPalette('deep-purple').dark();
  $mdThemingProvider.theme('dark-blue').backgroundPalette('blue').dark();
  $mdThemingProvider.theme('green').primaryPalette('purple')
    .accentPalette('green');
  

  });

// Route set up for single Page App
app.config(function($routeProvider){
$routeProvider
.when('/', {
  templateUrl: './view/main.html',
  controller: 'myController'
})
.when('/puzle', {
  templateUrl: "./view/puzle.html",
  controller: 'puzController'
})  });


// Service set up for value to move around

 app.service('article', function(Notification){
 	this.id='';
 	this.article='';
 	this.res;
 	this.delete = success = function() {
    Notification.success('Article Deleted');
  };
  this.notdelete = warning = function() {
    Notification.warning('Action was Cancelled!');
  };
  this.updated= success = function() {
    Notification.success('Article was Successfully Updated!');
    };
     this.added= success = function() {
    Notification.success('Article was Successfully Added!');
  };
  this.canupdated = warning = function() {
    Notification.warning('Action was Cancelled by user!');
  };
 });

