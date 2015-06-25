var app = angular.module('app',['ngRoute', 'ui.bootstrap', 'ngAnimate']);
app.config(['$routeProvider',
   function($routeProvider) {
    $routeProvider.
    when('/', {
        title: 'Login',
        templateUrl: 'views/login.html',
        controller: 'AuthController'
    }).
    when('/home/', {
       templateUrl: 'views/home.html' ,
       controller: ''
    }).
    when('/home/category', {
       templateUrl: 'views/Category.html' ,
       controller: ''
    }).
    when('/home/subcategory', {
       templateUrl: 'views/SubCategory.html' ,
       controller: ''
    });
}]);