app.controller('buyerDetailsController',function($scope,$http,$uibModal,$state){
    $scope.buyerDetails = JSON.parse(localStorage.getItem("buyerDetails"));
    $scope.logout = function(){
        $state.go("home");
    };
    $scope.buy = function(){
        $state.go("userdashboard");
    }
});