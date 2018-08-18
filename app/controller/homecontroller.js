(function () {

    /**************************************************************/
    var homecontroller = function ($scope,$http) {
        $scope.cinimadata = [];
        $scope.showhide = function () {
            $scope.checked = false;

        }
        $http.get("app/data/cinima.json").then(function(response) {
            $scope.cinimadata = response.data
            $scope.cinima1 = $scope.cinimadata[0];
            $scope.cinima2 = $scope.cinimadata[1];
            $scope.cinima3 = $scope.cinimadata[2];
            $scope.cinima4 = $scope.cinimadata[4];
            $scope.cinima5 = $scope.cinimadata[3];
        },function (response) {
            $scope.cinimadata = "no";
        })

    }

    angular.module("mycinima").controller("homecontroller",homecontroller);
    
}())