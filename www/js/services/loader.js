servicesmodule.factory('Loader', function($http ,  $ionicLoading) {

	var loadershow = function() {
		$ionicLoading.show({
			noBackdrop: false,
		  template: '<p class="item-icon-left">Aspetta.. sto caricando!!<ion-spinner icon="lines"/></p>'
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