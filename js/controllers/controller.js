app.controller("OccupationController", function ($scope, $http, TrendsFactory) {

    $scope.aboveOrBelow = function (num1, num2) {
        text = "above";
        if (num1 < num2) {
            text = "below";
        }

        return text;
    }

    $scope.plusOrMinus = function (num1) {
        var symbol = "+";
        if (num1 < 0) {
            symbol = "-";
        }

        return symbol;
    }

    $scope.fetchData = function () {
        $scope.dataLoaded = false;
        var dataFileName = "data/" + $scope.occupationID + "_" + $scope.areaType + "_" + $scope.areaCode + ".json";
        $http.get(dataFileName).then(handleData, handleError);
    }

    function handleData(response) {
        var data = response.data;
        $scope.occupation = data.occupation;
        $scope.region = data.region;
        $scope.summary = data.summary;
        $scope.trendComparison = data.trend_comparison;
        $scope.employingIndustries = data.employing_industries;

        buildChart();

        $scope.dataLoaded = true;
    }

    function handleError(response) {
        console.error("Unable to correctly fetch data");
        console.error(response);
    }

    function buildChart() {
        let canvasContext = document.getElementById("trends");

        let trendsChart = new Chart(canvasContext, {
            type: "line",
            data: {
                labels: ["2013", "2014", "2015", "2016", "2017", "2018",],
                datasets: [
                    TrendsFactory.regional(),
                    TrendsFactory.state(),
                    TrendsFactory.nation()
                ]
            }
        });
    }

    function init() {
        $scope.dataLoaded = false;
        $scope.occupationID = "15-1131";
        $scope.areaType = "msa";
        $scope.areaCode = "42660";

        // TODO: remove this
        $scope.fetchData();
    }

    init();
});