servicesmodule.factory('platformCheck', function( $http ) {
	
	var isIOS = ionic.Platform.isIOS();
	var isAndroid = ionic.Platform.isAndroid();
	var currentPlatform = ionic.Platform.platform();
	var currentPlatformVersion = ionic.Platform.version();
	console.log(isIOS + ' - ' + isAndroid);

	return {
		isIOS: function() {
		  return isIOS;
		},
		isAndroid: function() {
			return isAndroid;
		},
		currentPlatform: function() {
			return currentPlatform;
		},
		currentPlatformVersion: function() {
			return currentPlatformVersion;
		}
	};

});