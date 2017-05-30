angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('https://api.totallister.net/hello').
        then(function(response) {
            $scope.contact = response.data;
        })
        .catch(function (data) {
            $scope.err_message = data;
    	});
});

