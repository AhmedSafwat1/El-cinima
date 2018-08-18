(function () {
    var infocontroller = function ( $scope,$http,$routeParams,$interval) {
        var dayindex = 0
		$scope.mytime = new Date()
        $interval(function () {
            $scope.mytime = new Date()
        }, 1000);

        $scope.cid= $routeParams.cinimaindex;
        $scope.fid = $routeParams.filmindex;
        $http.get("app/data/cinima.json").then(function(response) {
            $scope.cinimadata = response.data;
           $scope.infocinima =$scope.cinimadata[$scope.cid];
           $scope.infofilm = $scope.infocinima[$scope.fid];
           $scope.inputs = $scope.infofilm.rate;
           $scope.day =  $scope.infofilm.day;
            $scope.chosenday = function () {
                dayindex = $scope.myselectedday
                console.log(dayindex);
                $scope.seclectedday =  $scope.day[dayindex - 1].party;

            };
            $scope.mybane = ""
            $scope.chos = function () {

                if($scope.mybane !== "" && $scope.myselectedday != 0 && $scope.mybane != undefined )
                {

                    $scope.thecondit = false;

                    console.log($scope.mybane)
                }
                else {
                    $scope.thecondit = true;

                }
            }
            $scope.showchecked = function () {
                console.log($scope.mybane)
                if($scope.mybane === "")
                {
                    $scope.thecondit = true;

                } else
                {
                    if(isNaN($scope.mybane)){
                        $scope.thecondit = false;

                    }
                }

            }
        },function (response) {
            $scope.cinimadata = "no";
        })
    }
    angular.module("mycinima").controller("infocontroller",infocontroller);
}())