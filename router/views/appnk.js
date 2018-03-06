var myApp = angular.module("myApp",[])

myApp.controller('mycontroller', ['$scope,$state,$http', function($scope){
	
	$http.get('/').then((response)=>{

		localStorage.setItem('User-Data', json.stringify(response));
		console.log("cool");
	})

}])