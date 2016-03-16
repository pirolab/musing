angular.module('starter.services', [])

.factory('User', function($http) {

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
	
	//Let's test a post http call
	var posttest = function(){
		var data = {
			name: 'prova',
			pass: 'test'
		};
		$http.post('http://www.musingshow.com/it/api/rest/test',data).then(function(resp) {
			console.log('Success', resp);
			// For JSON responses, resp.data contains the result
		  }, function(err) {
			console.error('ERR', err);
			// err.status will contain the status code
		});
	}

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
			posttest();
		}
	};

});