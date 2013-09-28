'use strict';

angular.module('app.communication', [])
  .service('CommunicationService', function(){
    var messages = [];

    this.postMessage = function(msg) {
      messages.unshift(msg);
    }

    this.getMessages = function() {
      return messages;
    }
  })
  .controller('PostingCtrl', function($scope, CommunicationService){
    var blankMessage = {
      text : ''
    }
    $scope.message = angular.copy(blankMessage);

    $scope.postMessage = function(msg) {
      CommunicationService.postMessage(msg);
      $scope.message = angular.copy(blankMessage);
    }

    $scope.log = function(evt) {
      console.log(evt);
    }
  })
  .controller('ReadingCtrl', function($scope, CommunicationService){
    $scope.messages = CommunicationService.getMessages();
  });