/**
 * Created by premer on 04.12.14.
 */
var app = angular.module('premerApp', []);

app.controller("JsonReader", ['$scope','$http', function($scope, $http)
    {
        $http.get('gitlog.json').success (function(data){
            $scope.parsedJson = data;
        });

    }]
);