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
    $scope.open = function (modalValue,totalValue,index) {
    	$uibModal.open({
            templateUrl: 'myModalContent.html',
            backdrop: true,
            windowClass: 'modal',
            controller: function ($scope, $uibModalInstance, $log, user) {
            	$scope.modalData = modalValue;
                $scope.indexValue = index;
            	$scope.valueinput = 0;
                $scope.totalValue = totalValue;
                $scope.submit = function () {
                    $log.log('Submiting user info.');
                    $log.log(user); 
                    $uibModalInstance.dismiss('cancel');
                }
                $scope.cancel = function () {
                    $uibModalInstance.dismiss('cancel'); 
                };
                $scope.setAmount = function(amountdata,indexdata){
                    $scope.totalValue[indexdata].amount = amountdata;
                    localStorage.setItem("dataValue", JSON.stringify($scope.totalValue));
                    $uibModalInstance.dismiss('cancel');
                }
            },
            resolve: {
                user: function () {
                    return $scope.user;
                }
            }
        });
    };
});