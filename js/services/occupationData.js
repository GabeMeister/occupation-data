app.service("OccupationDataService", function($http, $q) {
    var deferred;

    function handleData(response) {
        deferred.resolve(response);
    }

    function handleError(response) {
        console.error("Unable to correctly fetch data");
        console.error(response);
    }

    this.getOccupationData = function(dataFileName) {
        deferred = $q.defer();
        $http.get(dataFileName).then(handleData, handleError);
        return deferred.promise;
    };
    
});