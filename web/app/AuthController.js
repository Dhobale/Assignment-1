app.run(function($rootScope){
	$rootScope.menubars=false;
	$rootScope.login=true;
});


app.controller('AuthController', function($scope, CalcService,$location,$rootScope) {

        $scope.check = function() {
        	$scope.result = CalcService.check($scope.email,$scope.password);
        }
    });
	
    app.factory('AuthenticationService', function($location,$rootScope) {   
		var factory = {};  
        factory.Authentication = function(user, pass) {
		
		var login = ([{
						"email": "shailesh@gmail.com",
						"password": "shailesh"
						},
						{
						"email": "suraj@gmail.com",
						"password": "suraj"
						},
						{
						"email": "admin@gmail.com",
						"password": "admin"
						}]);
		var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		var flag=0;
		if(re.test(user)){
            var i=0;
			for(i=0;i<login.length;i++)
			{
				if(user == login[i].email && pass == login[i].password)
					flag=1;
			}
			if(flag==1)
			{
			
				$rootScope.menubars=true;
				$rootScope.login=false;
				$location.url('/home');
            }
			else
				alert("Login Failed");
        }
		else{
			alert("Invalid Email Id.....!");
		}
    }
        return factory;
    }); 

    app.service('CalcService', function(AuthenticationService,$rootScope){
        this.check = function(user,pass) { 
        return AuthenticationService.Authentication(user,pass); 
        }
    });