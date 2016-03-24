servicesmodule.factory('Loader', function($http ,  $ionicLoading, platformCheck) {
	

	var loadershow = function() {
		if(platformCheck.isAndroid()){
			$ionicLoading.show({
				noBackdrop: false,
			  template: '<p class="item-icon-left">Un attimo!!<ion-spinner icon="android" class="spinner-royal"></ion-spinner></p>'
			});
		} else if(platformCheck.isIOS()){
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