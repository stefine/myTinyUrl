/**
 * Created by 533 on 2017/4/12.
 */
angular.module("tinyurlApp")
    .controller("urlController",["$scope", "$http", "$routeParams",function ($scope, $http, $routeParams) {
        $http.get("/api/v1/urls/" + $routeParams.shortUrl)
            .success(function (data) {
                $scope.shortUrl = data.shortUrl;
                $scope.longUrl = data.longUrl;
                $scope.shortUrlToShow = "http://localhost:3000/" + data.shortUrl;
            });
        $http.get("/api/v1/urls/" + $routeParams.shortUrl + "/totalClicks")
            .success(function (data) {
                $scope.totalClicks = data;
            });
        $scope.showId = function(skillId) {
            console.log(skillId);
        }
    }]);
