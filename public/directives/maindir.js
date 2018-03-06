var app= angular.module('myApp', []).directive('navBar',()=>{

return {
	template: '<div id="draggable1">'+
'<nav class="navbar navbar-toggleable-md  navbar-light bg-faded" >' +
  '<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">'
    +'<span class="navbar-toggler-icon"></span></button>'
 
  +'<a class="navbar-brand" href="#/">Home</a>'
  +'<div class="collapse navbar-collapse" id="navbarSupportedContent" >'
    +'<ul class="navbar-nav mr-auto">'
    + '<li class="nav-item active">'
      + '  <a class="nav-link" href="#/puzle">Puzzle </a></li>'
     + ' <li class="nav-item">'
      + '  <a class="nav-link" ng-click = "addArticle()" href="#">Add Article</a> </li>'
      + '<li class="nav-item">'
     + '  <a class="nav-link disabled" href="#">Disabled</a></li> </ul>'

      
    + '   <md-input-container flex="20">'
      + '    <label>Choose theme</label>'
       + '   <md-select name="type" type="text" ng-model="color">'
        + '    <md-option value="dark-orange" selected>Orange</md-option>'
        + '    <md-option value="dark-grey">Grey</md-option>'
        + '   <md-option value="dark-purple">Purple</md-option>' 
        + '   <md-option value="dark-blue">Blue</md-option>'
        + '   </md-select></md-input-container></div>'
+ '</nav></div>'


}

})