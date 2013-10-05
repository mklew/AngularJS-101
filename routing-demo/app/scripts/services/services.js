'use strict';

angular.module('app.services', [])
	.service('BasicService', function($http, $q){
    // Angular creates this service calling new on passed in function

    this.getPeople = function() {
      return $http.get('rest/people')
    }
    
    this.addPerson = function(person) {
      return $http.post('rest/people', person);
    }

    this.getPerson = function(id) {
      var deferred = $q.defer();
      $http.get('rest/people/' + id).then(function(response){
        deferred.resolve(response.data);
      });
      return deferred.promise;
    }

    this.updatePerson = function(person) {
      return $http.put('rest/people', person);
    }
  })
  .factory('PersonServiceFactory', [function(){
    function PersonService(person) {
      this.person = person;
    }

    PersonService.prototype.fullName = function(){
      return this.person.name + ' ' + this.person.last;
    }

    return {
      getPersonService : function(person) {
        return new PersonService(person);
      }
    }
  }])
  .provider('PersonFullNamePrinterService', function(){
    var separator = ' ';

    this.setSeparator = function(str) {
      separator = str;
    }

    this.$get = function() {
      return function fullName(person) {
        return person.name + separator + person.last;
      };
    }
  });