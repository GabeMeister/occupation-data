app.service("OccupationDataService", function($http, $q) {
    var deferred = $q.defer();

    function handleData(response) {
        console.log("handling data");
        deferred.resolve(response);
    }

    function handleError(response) {
        console.error("Unable to correctly fetch data");
        console.error(response);
    }

    this.getOccupationData = function(dataFileName) {
        $http.get(dataFileName).then(handleData, handleError);
        return deferred.promise;
    };
    
});