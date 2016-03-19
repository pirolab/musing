controllersmodule.controller('ProfiloCtrl', function($scope, User, Loader) {
	$scope.userinfo = User.userdata;

	$scope.gettest = function(){
		return User.gettest();
	}

	$scope.login = function(){		
		User.login('').then(function (response) {
			Loader.loaderhide();
			console.log('resp', response);
			if(response.data.account.isPasswordOk === true){
		      //$scope.userinfo = response.data;
			  User.userdata = response.data;
			  $scope.userinfo = User.userdata;
		    }
		}, function(err) {
			console.error('ERR', err);
			// err.status will contain the status code
		});
	}
});
