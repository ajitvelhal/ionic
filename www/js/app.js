// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// Original angular.module('starter', ['ionic'])
var example = angular.module('starter', ['ionic', 'ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

example.controller("ExampleController", function($scope, $cordovaMedia, $ionicLoading) {
                   
                   $scope.play = function(src) {
                   var media = new Media(src, null, null, mediaStatusCallback);
                   //$cordovaMedia.play(media);
                   /*$cordovaMedia.play(media,
                   { playAudioWhenScreenIsLocked : true });
                   }*/
                   
                   media.play();
                   
                   
                   var mediaStatusCallback = function(status) {
                   if(status == 1) {
                   $ionicLoading.show({template: 'Loading...'});
                   } else {
                   //$ionicLoading.hide();
                   $ionicLoading.show({template: 'Loading...'});
                   }
                   }
                   
                   
                   var mediaSuccessCallback = function(success) {
                   if(status == 1) {
                   $ionicLoading.show({template: 'Loading...'});
                   } else {
                   $ionicLoading.show({template: 'Loading...'});
                   //$ionicLoading.hide();
                   }
                   }
                   
                   });
