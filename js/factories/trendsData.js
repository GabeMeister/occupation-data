app.factory("TrendsDataFactory", function () {
    var factory = {};

    factory.getYearRange = function (startYear, endYear) {
        if (startYear > endYear) {
            throw "TrendsDataFactory.getYearRange(): start year must be greater than end year";
        }

        years = [];
        for (var i = startYear; i <= endYear; i++) {
            years.push(i);
        }

        return years;
    };

    factory.getPercentChanges = function (numJobsArr) {
        // Always initialize with 0, because there is no 
        // data before the first point to calculate the percent
        // change on
        let percentChangeArr = [0];

        if (numJobsArr.length > 1) {
            let numJobsFirstYear = numJobsArr[0];

            for (var currIndex = 1; currIndex < numJobsArr.length; currIndex++) {
                // Calculated based off previous year
                // let prevIndex = currIndex - 1;
                // let prevJobs = numJobsArr[prevIndex];
                // let currJobs = numJobsArr[currIndex];
                // let difference = currJobs - prevJobs;
                // let percentChange = (difference * 100) / prevJobs;

                // Calculated based off of first year
                let currJobs = numJobsArr[currIndex];
                let difference = currJobs - numJobsFirstYear;
                let percentChange = (difference * 100) / numJobsFirstYear;

                // Round to nearest hundreths
                percentChange = Math.round(100 * percentChange) / 100;
                
                percentChangeArr.push(percentChange);
            }
        }

        return percentChangeArr;
    };

    return factory;
})