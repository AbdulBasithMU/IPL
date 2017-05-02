app.controller('userdashboardController',function($scope,$http,$uibModal,$state){
	$scope.animationsEnabled = true;
	$scope.bitPlaced = false;
	pageLoad();
	function pageLoad(){
		$scope.value = JSON.parse(localStorage.getItem("dataValue"));
	};
    $scope.logout = function(){
        $state.go("home");
    }
    $scope.open = function (modalValue,index) {
    	$uibModal.open({
            templateUrl: 'myModalContent.html',
            backdrop: true,
            windowClass: 'modal',
            controller: function ($scope, $uibModalInstance, $log, user) {
            	$scope.modalData = modalValue;
            	$scope.valueinput = 0;
                $scope.indexValue = index;
            	$scope.add = function(data){
            		$scope.valueinput = data+1;
            	};
            	$scope.minus = function(data){
            		if(data>0){
            			$scope.valueinput = data-1;}
            	};
            	$scope.bitPlaced = function(data){
            		if(data>0){
            			$scope.bitPlaced = false;
                        $scope.modalData.buyerDetails = localStorage.getItem("userName");
                        localStorage.setItem("buyerDetails",JSON.stringify($scope.modalData));
                        $scope.duplicatevalue = JSON.parse(localStorage.getItem("dataValue"));
                        $scope.duplicatevalue[$scope.indexValue].buyerDetails = $scope.modalData.buyerDetails;
                        localStorage.setItem("dataValue", JSON.stringify($scope.duplicatevalue));
                        $state.go("buyerDetails");
                        $uibModalInstance.dismiss('cancel'); 
            		}
            	}
                $scope.submit = function () {
                    $log.log('Submiting user info.');
                    $log.log(user);
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