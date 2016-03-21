servicesmodule.factory('Loader', function($http ,  $ionicLoading) {
	

	var loadershow = function() {
		if(currentPlatform === 'android'){
			$ionicLoading.show({
				noBackdrop: false,
			  template: '<p class="item-icon-left">Un attimo!!<ion-spinner icon="android" class="spinner-royal"></ion-spinner></p>'
			});
		} else if(currentPlatform === 'ios'){
			$ionicLoading.show({
				noBackdrop: false,
			  template: '<p class="item-icon-left">Un attimo!!<ion-spinner icon="lines"></ion-spinner></p>'
			});
		}
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