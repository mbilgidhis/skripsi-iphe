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
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
    document.addEventListener("deviceready", onDeviceReady, false);
    function onDeviceReady(){
      document.addEventListener('backbutton', onBackKeyDown, false);
    }
    
    function onBackKeyDown(){
      alert("hello");
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.informasi', {
    url: "/informasi",
    views: {
      'menuContent': {
        templateUrl: "templates/informasi.html",
        controller: "InformasiCtrl"
      }
    }
  })

  .state('app.prodi', {
    url: "/informasi/prodi",
    views: {
      'menuContent': {
        templateUrl: 'templates/prodi.html',
        controller: 'ProdiCtrl'
      }
    }
  })

  .state('app.jadwal', {
    url: '/informasi/jadwal',
    views: {
      'menuContent': {
        templateUrl: 'templates/jadwal.html',
        controller: 'JadwalCtrl'
      }
    }
  })

  .state('app.biaya', {
    url: "/informasi/biaya",
    views: {
      'menuContent': {
        templateUrl: 'templates/biaya.html',
        controller: 'BiayaCtrl'
      }
    }
  })

  .state('app.pendaftaran1', {
    url: "/pendaftaran1",
    views: {
      'menuContent': {
        templateUrl: "templates/pendaftaran1.html",
        controller: "PendaftaranCtrl"
      }
    }
  })

  .state('app.pendaftaran2', {
    url: "/pendaftaran2",
    views: {
      'menuContent': {
        templateUrl: 'templates/pendaftaran2.html',
        controller: 'PendaftaranCtrl'
      }
    }
  })

  .state('app.pendaftaran3', {
    url: "/pendaftaran3",
    views: {
      'menuContent': {
        templateUrl: 'templates/pendaftaran3.html',
        controller: 'PendaftaranCtrl'
      }
    }
  })

  .state('app.hasil', {
    url: "/hasil",
    views: {
      'menuContent': {
        templateUrl: "templates/hasil.html",
        controller: 'HasilCtrl'
      }
    }
  })
  .state('app.kontak', {
    url: "/kontak",
    views: {
      'menuContent': {
        templateUrl: "templates/kontak.html",
        controller: "KontakCtrl"
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/informasi');
});
