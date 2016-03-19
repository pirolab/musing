controllersmodule.controller('ProfiloCtrl', function($scope, User, Loader) {
	$scope.userinfo = {};
	$scope.gettest = function(){
		return User.gettest();
	}
	$scope.posttest = function(){		
		User.posttest().then(function (response) {
			Loader.loaderhide();
			console.log('resp', response);
			if(response.data.account.isPasswordOk === true){
		      $scope.userinfo = response.data;
		    }
		}, function(err) {
			console.error('ERR', err);
			// err.status will contain the status code
		});
	}
});
