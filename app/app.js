var app = angular.module('mainApp',['ui.router','ui.bootstrap']);

app.config(['$stateProvider', '$urlRouterProvider', '$qProvider' ,function($stateProvider,$urlRouterProvider,$qProvider){
			
			$qProvider.errorOnUnhandledRejections(false);
			$urlRouterProvider.otherwise("/home");

			$stateProvider
            
            .state('home', {
            	url: "/home",
            	templateUrl: 'app/view/home.html',
            	controller: 'homeController'
            })

            .state('userlogin', {
            	url: "/userlogin",
            	templateUrl: 'app/view/userlogin.html',
            	controller: 'userloginController'
            })

            .state('adminlogin', {
                  url: "/adminlogin",
                  templateUrl: 'app/view/adminlogin.html',
                  controller: 'adminloginController'
            })

            .state('admindashboard', {
                  url: "/admindashboard",
                  templateUrl: 'app/view/admindashboard.html',
                  controller: 'admindashboardController'
            })

            .state('userdashboard', {
                  url: "/userdashboard",
                  templateUrl: 'app/view/userdashboard.html',
                  controller: 'userdashboardController'
            })

            .state('buyerDetails', {
                  url: "/buyerDetails",
                  templateUrl: 'app/view/buyerDetails.html',
                  controller: 'buyerDetailsController'
            })

}]);