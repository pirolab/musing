servicesmodule.factory('Loader', function($http ,  $ionicLoading) {

	var loadershow = function() {
		$ionicLoading.show({
			noBackdrop: false,
		  template: '<p class="item-icon-left">Un attimo!!<ion-spinner icon="android" class="spinner-royal"></ion-spinner></p>'
		});
	  };
	  
	var loaderhide = function(){
		$ionicLoading.hide();
	  };

	return {
		loadershow: function() {
		  return loadershow();
		},
		loaderhide: function() {
			return loaderhide();
		}
	};

});