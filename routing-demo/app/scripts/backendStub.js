/**
 *  Stubbing backend. Original idea with ?nobackend belongs to SoftwareMill.
 *
 *  Backend stub. Enable it by adding "?nobackend" at the end of the url
 **/

(function (angular) {

    // if (!document.URL.match(/\?nobackend$/)) {
    //     return;
    // } else {
    //     console.log('======== BEWARE!!! USING STUBBED BACKEND ========');
    //     initialize();
    // }
    console.log('= USING STUBBED BACKEND =)');
    initialize();

    function initialize() {
    	var uniqueId = function() {
    		var uniqueId = 100;
    		return function() {
    			uniqueId = uniqueId + 1;
    			return uniqueId;
    		}	
    	}();
    	
    	function parseDataAndThen(fn) {
    		return function(method, url, data, headers) {
    			return fn(method, url, JSON.parse(data), headers);
    		}
    	}

        function stubPeople($httpBackend) {

        	var people = [
		        {id : 1, name : 'Kate', last : 'Smith', job : 'Finance'},
		        {id : 2, name : 'Tom', last : 'Brown', job : 'IT'},
		        {id : 3, name : 'John', last : 'Lock', job : 'Lost'},
		        {id : 4, name : 'Paul', last : 'Alien', job : 'Entertainment'}
		    ]

        	$httpBackend.whenGET('rest/people').respond(people);

        	$httpBackend.whenPOST('rest/people').respond(parseDataAndThen(function(method, url, data, headers){
				console.log('Got post to rest/people method:', method, ' url ', url, ' data ', data, ' headers ', headers);
				var obj = angular.copy(data);
				obj.id = uniqueId();
				people.push(obj);
        		return [201, '', {}];
        	}));

        	var restPeopleIdRegex = /rest\/people\/(\d*)/
        	$httpBackend.whenGET(restPeopleIdRegex).respond(function(method, url, data, headers){
        		console.log('Got GET to rest/people/:id method:', method, ' url ', url, ' data ', data, ' headers ', headers);
    			var id = parseInt(restPeopleIdRegex.exec(url)[1]);
        		var found = people.filter(function(person){
        			return person.id === id;
        		});
        		if(found.length === 1) {
        			return [200, found[0], {}];	
        		}
        		else {
        			return [404, '', {}];
        		}
        	});

        	$httpBackend.whenPUT('rest/people').respond(parseDataAndThen(function(method, url, data, headers){
        		console.log('Got PUT to rest/people/ method:', method, ' url ', url, ' data ', data, ' headers ', headers);
        		var originalIdx;
        		angular.forEach(people, function(person, idx){
        			if(person.id === data.id) 
        				originalIdx = idx;
        		})
        		people[originalIdx].job = data.job;
        		return [204, '', {}];
        	}));
        }

        angular.module('app')
            .config(function ($provide) {
                $provide.decorator('$httpBackend', angular.mock.e2e.$httpBackendDecorator);
            })
            .run(function ($httpBackend) {
                $httpBackend.whenGET(/views\/.*/).passThrough();
                $httpBackend.whenGET(/scripts\/.*/).passThrough();
                stubPeople($httpBackend);
            });
    }

}(angular));
