// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js


angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {

    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });

})

.config(function($ionicConfigProvider, $stateProvider, $urlRouterProvider) {
 $ionicConfigProvider.backButton.previousTitleText(false).text(' ');
 $ionicConfigProvider.navBar.alignTitle('left')
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })
  
  .state('app.login', {
    url: '/login',
    views: {
      'menuContent': {
        templateUrl: 'templates/login.html',
		controller: 'loginCtrl'
      }
    }
  })
  
  .state('app.profilo', {
    url: '/profilo',
    views: {
      'menuContent': {
        templateUrl: 'templates/profilo.html',
		controller: 'ProfiloCtrl'
      }
    }
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.concerti', {
      url: '/concerti',
      views: {
        'menuContent': {
          templateUrl: 'templates/concerti.html',
		  controller: 'ConcertiCtrl'
        }
      }
    })
	.state('app.concerto', {
    url: '/concerti/:concertoId',
    views: {
      'menuContent': {
        templateUrl: 'templates/concerto.html',
        controller: 'ConcertoCtrl'
      }
     }
    })
	.state('app.locali', {
      url: '/locali',
      views: {
        'menuContent': {
          templateUrl: 'templates/locali.html',
		  controller: 'LocaliCtrl'
        }
      }
    })
	.state('app.locale', {
    url: '/locali/:localeId',
    views: {
      'menuContent': {
        templateUrl: 'templates/locale.html',
        controller: 'LocaleCtrl'
      }
     }
    })
	.state('app.followers', {
      url: '/followers',
      views: {
        'menuContent': {
          templateUrl: 'templates/followers.html',
		  controller: 'FollowersCtrl'
        }
      }
    })
	.state('app.follower', {
    url: '/followers/:followerId',
    views: {
      'menuContent': {
        templateUrl: 'templates/follower.html',
        controller: 'FollowerCtrl'
      }
     }
    })
    .state('app.musicisti', {
      url: '/musicisti',
      views: {
        'menuContent': {
          templateUrl: 'templates/musicisti.html',
          controller: 'MusicistiCtrl'
        }
      }
    })

  .state('app.musicista', {
    url: '/musicisti/:musicistaId',
    views: {
      'menuContent': {
        templateUrl: 'templates/musicista.html',
        controller: 'MusicistaCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/login');
})
.directive('dragBack', function($ionicGesture, $state) {
  return {
    restrict : 'EAC',
    link : function(scope, elem, attr) {
      $ionicGesture.on('swiperight', function(event) {
        event.preventDefault();
        window.history.back();
      }, elem);
      
    }
  }  
})


