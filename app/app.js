(function () {
var mycinimaapp = angular.module("mycinima",['ngRoute','ngResource']);
mycinimaapp.config(function ($routeProvider) {
    $routeProvider.when("/",{
        controller :"homecontroller",
        templateUrl : "views/myhomepage.html"
    }).when("/info/:cinimaindex/:filmindex",{
        controller :"infocontroller",
        templateUrl : "views/infopage.html"
    }).when("http://127.0.0.1:52448/index.html#/#postion/info/:cinimaindex/:filmindex",{
        controller :"infocontroller",
        templateUrl : "views/infopage.html"
    }).when("/info/:cinimaindex/:filmindex/checked/:namecust/:day/:party",{
        controller :"checkedcontroller",
        templateUrl : "views/checkedpage.html"
    }).otherwise({
        redirectTo:"/"
    })
	
})
    angular.module("mycinima").controller("myctrl",function ($scope,$location) {
    })
}())