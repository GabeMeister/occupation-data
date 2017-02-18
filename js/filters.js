app.filter('percentage', ['$filter', function($filter) {
    return function(value, numDecimals) {
        return $filter('number')(value * 100, numDecimals) + '%';
    };
}]);