app.controller('admindashboardController',function($scope,$state,$http,$uibModal){
	$scope.animationsEnabled = true;
	pageLoad();
	function pageLoad(){
		$http.get("app/json/player.json").then(function(result){
			$scope.value = result.data;
		});
	};
    $scope.logout = function(){
        $state.go("home");
    }
    $scope.open = function (modalValue) {
    	$uibModal.open({
            templateUrl: 'myModalContent.html',
            backdrop: true,
            windowClass: 'modal',
            controller: function ($scope, $uibModalInstance, $log, user) {
            	$scope.modalData = modalValue;
            	$scope.valueinput = 0;
                $scope.submit = function () {
                    $log.log('Submiting user info.');
                    $log.log(user); 
                    $uibModalInstance.dismiss('cancel');
                }
                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel'); 
                };
            },
            resolve: {
                user: function () {
                    return $scope.user;
                }
            }
        });
    };
});