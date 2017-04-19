/**
 * Created by 533 on 2017/4/12.
 */
var app = angular.module("tinyurlApp",["ngRoute", "ngResource"]);
// var app = angular.module("tinyurlApp",[]);
app.config(function($routeProvider) {
    $routeProvider
        .when("/", {
            templateUrl: "./public/views/home.html",
            // templateUrl: "../views/home.html",
            controller: "homeController"
        })
        .when("/urls/:shortUrl", {
            templateUrl: "./public/views/url.html",
            controller: "urlController"
        });
});

