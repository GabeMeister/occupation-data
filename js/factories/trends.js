app.factory('TrendsFactory', function () {
    var factory = {};

    factory.regional = function () {
        console.log('getting regional');
        return {
            label: "Regional",
            fill: false,
            lineTension: 0.1,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "rgba(0,0,0,1)",
            borderCapStyle: 'butt',
            borderDash: [5, 10],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(0,0,0,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(0,0,0,1)",
            pointHoverBorderColor: "rgba(0,0,0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [
                30, 31, 31.2, 34, 36, 38
            ],
            spanGaps: false,
        };
    };

    factory.state = function () {
        return {
            label: "State",
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "rgba(17,133,196,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(17,133,196,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(17,133,196,1)",
            pointHoverBorderColor: "rgba(17,133,196,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [
                25, 25.6, 26, 27.2, 29, 30
            ],
            spanGaps: false,
        };
    };

    factory.nation = function () {
        return {
            label: "Nation",
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,0,0)",
            borderColor: "rgba(175,219,292,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(175,219,292,1)",
            pointBackgroundColor: "#fff",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(175,219,292,1)",
            pointHoverBorderColor: "rgba(175,219,292,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [
                12.3, 12.6, 12.7, 12.9, 13, 14
            ],
            spanGaps: false,
        };
    };

    return factory;
});