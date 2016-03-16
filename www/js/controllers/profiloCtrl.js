controllersmodule.controller('ProfiloCtrl', function($scope, User) {
	$scope.gettest = function(){
		return User.gettest();
	}
	$scope.posttest = function(){
		return User.posttest();
	}
});
