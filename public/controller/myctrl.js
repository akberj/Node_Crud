

 angular.module('myApp').controller('myController', function($scope, $timeout, $http, $mdDialog, $interval, $timeout, article, Notification)
{

/*$(function() {
    (".draggable1").draggable();
         
  } );*/

$scope.count;
$scope.color;

$interval(()=>{
$scope.count= Math.floor((Math.random() * 5) + 1);
console.log('Count Value' +$scope.count)

$scope.count === 1 ? $scope.color = 'dark-grey': 'blue';
$scope.count === 2 ? $scope.color = 'dark-orange': 'blue';
$scope.count === 3 ? $scope.color = 'dark-purple': 'blue';
$scope.count === 4 ? $scope.color = 'dark-blue': 'blue';
$scope.count === 5 ? $scope.color = 'green': 'blue';

},100000)


	$timeout( function() {
		var drag = document.getElementsByClassName('drag');
    $(drag).draggable();
         
  });
	
$scope.id;
$scope.cid = 'draggable1';



	$scope.primary = function() { Notification('asasa  Primary notification'); };
  $scope.res = ()=>{$http.get('/articles').then((response)=>{
			
			$scope.users ='';
		if(response.data.length != $scope.users.length || !localStorage){ 

		localStorage.setItem('User-Data', JSON.stringify(response.data));
}
		console.log(response);
      
		$scope.users = JSON.parse(localStorage.getItem('User-Data'));
		//$scope.users = response.data;
	}) ; }
  //
article.res = ()=>{
  
  $scope.res(); }
$scope.res();

	$scope.deluser = (id)=>{
       var confirm = $mdDialog.confirm()
          .title('Would you really like to delete this Article?')
          .textContent('Article will be deleted for good.')
          .ariaLabel('Lucky day')
          //.targetEvent(ev)
          .ok('Please do it!')
          .cancel('Pressed it by mistake');
          console.log(confirm.ok)


 $mdDialog.show(confirm).then(function() {
      $http.post('/article/delete/'+id).then((response)=>{
        console.log(response);
        $scope.res();	
        article.delete();	
	}); 
    }, function() {
      console.log("nothing deleted")
      	article.notdelete();
    });
  };

      /* if(confirm("are you sure")){
         $http.post('/article/delete/'+id).then((response)=>{
        console.log(response);
        $scope.res();	
        article.delete();	
	}); }
      else{
      	console.log("nothing deleted")
      	article.notdelete();
      }

	}
*/






	//  angular dialog

	/*  $scope.theme = 'blue';
	 

  $timeout(function () {
  var isThemeRed= true;

    $scope.theme  ? 'red' : 'blue';

   isThemeRed = false;

    console.log($scope.theme)
  }, 2000);*/

  $scope.showAdvanced = function(ev) {

  	article.id = ev;

    $mdDialog.show({
      controller: DialogController,
      templateUrl: 'dialog.html',
      parent: angular.element(document.body),
      //targetEvent: ev,
      clickOutsideToClose:true
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  }

  function DialogController($scope, $mdDialog, $http, article) {

 $http.get('/article/edit/'+article.id).then((response)=>{
  	 		article.article = response.data;
        
        $scope.article = article.article;
        $scope.author = $scope.article.author;
    	$scope.title = $scope.article.title;
    	$scope.body = $scope.article.body;
        console.log( $scope.article);
	}); 

    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
    	article.canupdated();
      $mdDialog.cancel();
      
    };

    $scope.answer = function(answer) {
    	

/// update article
    	$http.post('/article/update/'+answer,{
    		author:$scope.author,
    		title:$scope.title,
    		body:$scope.body
    	}).then((response)=>{
  	 		//article.article = response.data;
        
        //$scope.article = article.article;
       article.updated();
       article.res();

	}); 



      $mdDialog.hide(answer);
    };
  }







//add Article
$scope.addArticle = function() {

   $mdDialog.show({
      controller: addController,
      templateUrl: 'add.html',
      parent: angular.element(document.body),
      //targetEvent: ev,
      clickOutsideToClose:true
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
 
}
  function addController($scope, $mdDialog, $http, article) {

    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
    	article.canupdated();
      $mdDialog.cancel();
      
    };

    $scope.answer = function(answer) {
    	

/// update article
    	$http.post('/articles/add',{
    		author:$scope.author,
    		title:$scope.title,
    		body:$scope.body
    	}).then((response)=>{
  	 		//article.article = response.data;
        
        //$scope.article = article.article;
       article.added();
       article.res();

	}); 



      $mdDialog.hide(answer);
    };
  
}
});



