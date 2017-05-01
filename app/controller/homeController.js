app.controller('homeController',function($scope,$state){
	$scope.reDirectto = function(){
		$state.go("userlogin");
	};
	$scope.reDirecttoAdmin = function(){
		$state.go("adminlogin");
	}	
});