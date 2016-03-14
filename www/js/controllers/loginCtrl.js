controllersmodule.controller('AppCtrl', function($scope, $timeout, User) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.user = User.userinfo();
  $scope.usertype = User.usertype();

  // Form data for the login modal
  $scope.loginData = {};

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
	User.login($scope.loginData);
	$scope.user = User.userinfo();
    $scope.usertype = User.usertype();
    console.log('Doing login', $scope.loginData);
  };
  
  $scope.logout = function() {
	console.log('Doing logout', $scope.user);
	User.logout();
	$scope.user = User.userinfo();
    $scope.usertype = User.usertype();
  };
  
});
