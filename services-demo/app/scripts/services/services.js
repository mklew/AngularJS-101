'use strict';

angular.module('app.services', [])
	.service('BasicService', function(){
    // Angular creates this service calling new on passed in function
    var model = {
      people : [
        {id : 1, name : 'Kate', last : 'Smith', job : 'Finance'},
        {id : 2, name : 'Tom', last : 'Brown', job : 'IT'},
        {id : 3, name : 'John', last : 'Lock', job : 'Lost'},
        {id : 4, name : 'Paul', last : 'Alien', job : 'Entertainment'}
      ]
    };

    this.getPeople = function() {
      return model.people;
    }

    this.countPeople = function() {
      return model.people.length;
    }
  })
  .factory('PersonService', [function(){
    function Service(person) {
      this.person = person;
    }

    Service.prototype.fullName = function(){
      return this.person.name + ' ' + this.person.last;
    }

    return {
      getPersonService : function(person) {
        return new Service(person);
      }
    }
  }])
  .provider('PersonFullNamePrinterService', function(){
    var separator = ' ';

    this.setSeparator = function(str) {
      separator = str;
    }

    this.$get = function() {
      return function(person) {
        return person.name + separator + person.last;
      };
    }
  });