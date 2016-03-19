controllersmodule.controller('AppCtrl', function($scope, $timeout, User, Loader) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.userinfo = User.userdata;

  // Form data for the login modal
  $scope.loginData = {};

  // Perform the login action when the user submits the login form
  $scope.doLogin = function(){		
		User.login($scope.loginData).then(function (response) {
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
  
  $scope.logout = function() {
	console.log('Doing logout', $scope.user);
	User.logout();
	User.userdata = '';
	$scope.userinfo = User.userdata;
  };
  
});
