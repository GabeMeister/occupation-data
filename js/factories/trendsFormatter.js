app.factory("TrendsFormatterFactory", function () {
    var factory = {};

    factory.regional = function (numJobsArr) {
        return {
            label: "Regional",
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "rgba(0,0,0,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            pointStyle: "circle",
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(0,0,0,1)",
            pointBackgroundColor: "rgba(0,0,0,1)",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(0,0,0,1)",
            pointHoverBorderColor: "rgba(0,0,0,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 2,
            pointHitRadius: 10,
            data: numJobsArr,
            spanGaps: false
        };
    };

    factory.state = function (numJobsArr) {
        return {
            label: "State",
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "rgba(17,133,196,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointStyle: "rect",
            pointBorderColor: "rgba(17,133,196,1)",
            pointBackgroundColor: "rgba(17,133,196,1)",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(17,133,196,1)",
            pointHoverBorderColor: "rgba(17,133,196,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: numJobsArr,
            spanGaps: false
        };
    };

    factory.nation = function (numJobsArr) {
        return {
            label: "Nation",
            fill: false,
            lineTension: 0,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "rgba(175,219,292,1)",
            borderCapStyle: 'butt',
            borderDash: [],
            pointStyle: "triangle",
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: "rgba(175,219,292,1)",
            pointBackgroundColor: "rgba(175,219,292,1)",
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: "rgba(175,219,292,1)",
            pointHoverBorderColor: "rgba(175,219,292,1)",
            pointHoverBorderWidth: 2,
            pointRadius: 4,
            pointHitRadius: 10,
            data: numJobsArr,
            spanGaps: false
        };
    };
    
    return factory;
});