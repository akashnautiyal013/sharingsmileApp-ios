// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers'])

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

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.home', {
    url: '/home',
    views: {
      'menuContent': {
        templateUrl: 'templates/home.html'
      }
    }
  })
  .state('app.donate', {
    url: '/donate',
    views: {
      'menuContent': {
        templateUrl: 'templates/donate.html',
        controller:'donateCtrl'
      }
    }
  })
  .state('app.volunteer', {
    url: '/volunteer',
    views: {
      'menuContent': {
        templateUrl: 'templates/volunteer.html'
      }
    }
  })
  .state('app.ngomicrosite', {
    url: '/ngomicrosite',
    views: {
      'menuContent': {
        templateUrl: 'templates/ngomicrosite.html'
      }
    }
  })
  .state('app.goodnews', {
    url: '/goodnews',
    views: {
      'menuContent': {
        templateUrl: 'templates/goodnews.html'
      }
    }
  })
  .state('app.signup', {
    url: '/signup',
    views: {
      'menuContent': {
        templateUrl: 'templates/signup.html'
       
      }
    }
  })

  .state('app.myproject', {
      url: '/myproject',
      views: {
        'menuContent': {
          templateUrl: 'templates/myproject.html'
        }
      }
    })
  .state('app.postexperience', {
      url: '/postexperience',
      views: {
        'menuContent': {
          templateUrl: 'templates/postexperience.html'
        }
      }
    })
    .state('app.setting', {
      url: '/setting',
      views: {
        'menuContent': {
          templateUrl: 'templates/setting.html'
        }
      }
    })
    .state('app.policie', {
      url: '/policies',
      views: {
        'menuContent': {
          templateUrl: 'templates/policies.html',
          controller: 'policiesCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/policies/:policieId',
    views: {
      'menuContent': {
        templateUrl: 'templates/policie.html',
        controller: 'policieCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
