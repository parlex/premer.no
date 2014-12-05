/**
 * Created by premer on 04.12.14.
 */
var app = angular.module('premerApp', []);

app.controller("MainController", ['$scope', function($scope, $http)
    {
        angular.element(document).ready(function () {
            $('.mySelector').funnyText({
                borderColor: 'none',
                activeColor: 'orange',
                direction: 'both'
            });
        });
    }]
);

app.controller("JsonReader", ['$scope','$http', function($scope, $http)
    {
        $http.get('gitlog.json').success (function(data){
            $scope.parsedJson = data;
        });

    }]
);