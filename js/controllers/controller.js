app.controller("OccupationController", function ($scope, $http, TrendsFormatterFactory, TrendsDataFactory, OccupationDataService) {

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

        var promise = OccupationDataService.getOccupationData(dataFileName);
        promise.then(function (response) {
            var data = response.data;

            $scope.occupation = data.occupation;
            $scope.region = data.region;
            $scope.summary = data.summary;
            $scope.trendComparison = data.trend_comparison;
            $scope.employingIndustries = data.employing_industries;

            buildTrendsChart();

            $scope.dataLoaded = true;
        });


    }

    function buildTrendsChart() {
        let yearRangeArr = TrendsDataFactory.getYearRange($scope.trendComparison.start_year, $scope.trendComparison.end_year);

        let regionalData = TrendsDataFactory.getPercentChanges($scope.trendComparison.regional);
        let stateData = TrendsDataFactory.getPercentChanges($scope.trendComparison.state);
        let nationData = TrendsDataFactory.getPercentChanges($scope.trendComparison.nation);

        if ($scope.trendsChart != null) {
            $scope.trendsChart.destroy();
        }

        let canvasContext = document.getElementById("trends");
        $scope.trendsChart = new Chart(canvasContext, {
            type: "line",
            data: {
                labels: yearRangeArr.map(String),
                datasets: [
                    TrendsFormatterFactory.regional(regionalData),
                    TrendsFormatterFactory.state(stateData),
                    TrendsFormatterFactory.nation(nationData)
                ]
            },
            options: {
                scales: {
                    yAxes: [
                        {
                            gridLines: {
                                display: false
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Percent Change'
                            }
                        }
                    ]
                }
            }
        });

    }

    function init() {
        $scope.dataLoaded = false;

        // Computer Programmers
        $scope.occupationID = "15-1131";
        $scope.areaType = "msa";
        $scope.areaCode = "42660";

        // Graphic Designers
        // $scope.occupationID = "14-2567";
        // $scope.areaType = "msa";
        // $scope.areaCode = "35204";

        $scope.trendsChart = null;

        $scope.fetchData();
    }

    init();
});