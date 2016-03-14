angular.module('starter.services', [])

.factory('User', function() {

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
		}
	};

});