app.controller('adminloginController',function($scope,$state,$http){
	$scope.userSubmit = function(){
		$http.get("app/json/adminlogin.json").then(function(result){
			var value = result.data;
			var keepGoing = true;
			angular.forEach(value, function(data){
				if(data.email === $scope.email && data.password === $scope.password){
					$state.go("admindashboard");
					keepGoing = false;
				}
			});
			if(keepGoing){
				alert("Worng");
			}
		});
	}
});