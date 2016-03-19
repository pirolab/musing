controllersmodule.controller('MusicistiCtrl', function($scope, User) {

  $scope.$on('$ionicView.enter', function(e) {
	$scope.userinfo = User.userdata;
  });


  $scope.musicisti = [
    { title: 'Band 1', id: 1 },
    { title: 'Band 2', id: 2 },
    { title: 'Band 3', id: 3 }
  ];

});
