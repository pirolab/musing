angular.module('starter.services', [])

.factory('User', function($http ,  $ionicLoading) {

	//Let's test a get http call
	var gettest = function(){
		$http.get('http://www.musingshow.com/it/api/rest/test').then(function(resp) {
			console.log('Success', resp);
			// For JSON responses, resp.data contains the result
		  }, function(err) {
			console.error('ERR', err);
			// err.status will contain the status code
		});
	}


	var loadershow = function() {
		$ionicLoading.show({
			noBackdrop: false,
		  template: '<p class="item-icon-left">Aspetta.. sto caricando!!<ion-spinner icon="lines"/></p>'
		});
	  };
	  
	var loaderhide = function(){
		$ionicLoading.hide();
	  };
	
	var posttest = function(){
		loadershow();
		var user = {
			name: 'pirolab',
			pass: 'samah_2012'
		};

		var promise = $http({
			method: 'POST',
			url: 'http://www.musingshow.com/it/api/rest/get/userInfo/json?name='+user.name+'&pass='+user.pass,
			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
		});
		return promise;
	}
	
	/* Altro Approccio usando Object in POST e sembra funzionare */
//	var posttest = function(){
//		data_obj = { email: 'diegovalobra@gmail.com',password:'bella_zio' };        
//		Object.toparams = function ObjecttoParams(obj) {
//		  var p = [];
//		  for (var key in obj) {
//			p.push(key + '=' + encodeURIComponent(obj[key]));
//		  }
//		  return p.join('&');
//		};
//		
//		var req = {
//			method: 'POST',
//			url: "http://www.musingshow.com/it/api/rest/test",
//			data: Object.toparams(data_obj),
//			headers: {'Content-Type': 'application/x-www-form-urlencoded'}
//		}
//		$http(req).
//		success(function(data, status, headers, config) 
//		{
//			console.log('Success, Dati mandati: '+ data +' staus: '+status)
//		}).
//		error(function(data, status, headers, config) 
//		{
//			console.log('faild '+ status)
//		});
//	}


	var usertype = 'follower';
	var user = 'testuser';
	
	var logout = function() {
		usertype = '';
		user = '';
	}
	
	var login = function(logindata) {
		user = logindata.username;
		usertype = 'follower';
	}

	return {
		userinfo: function() {
		  return user;
		},
		usertype: function() {
		  return usertype;
		},
		logout: function() {
			logout();
			return user;
		},
		login: function(userdata) {
			login(userdata);
			return user;
		},
		gettest: function() {
			gettest();
		},
		posttest: function() {
			return posttest();
		},
		loaderhide: function() {
			return loaderhide();
		},
	};

});