app.controller("OccupationController", function($scope, $http) {
    
    
    $scope.fetchData = function() {
        $http.get("data/15-1131.json").then(
            function(response) {
                var data = response.data;
                $scope.occupation = data.occupation;
                $scope.region = data.region;
                $scope.summary = data.summary;
                $scope.trendComparison = data.trend_comparison;
                $scope.employingIndustries = data.employing_industries;

                $scope.dataLoaded = true;
            }, 
            function(response) {
                console.error("Unable to correctly fetch data");
                console.error(response);
            });
    }

    function init() {
        $scope.dataLoaded = false;

        // TODO: remove this
        $scope.fetchData();
    }

    init();
});