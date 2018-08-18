
(function () {
    var checkedcontroller = function ($scope,$routeParams,$http) {

    	var mycheckedpostion = []
        $scope.cid= $routeParams.cinimaindex;
        $scope.fid = $routeParams.filmindex;
        $scope.namecustmer = $routeParams.namecust;
		$scope.dayparty  = $routeParams.day;
		$scope.partytime = $routeParams.party;
        $http.get("app/data/cinima.json").then(function(response) {
            $scope.cinimadata = response.data
            $scope.mycinima = $scope.cinimadata[$scope.cid][ $scope.fid];

        },function (response) {
            $scope.cinimadata = "no";
        })
		/**********************************************/
		$scope.datachecked = [
			[//cinima1
			[//films
				[//film day1
					[ //party1
						{
						idcinima :0,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :0,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				],
				[ //film day2
										[ //party1
						{
						idcinima :0,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :0,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				]
			]
		]/**************end cinima1*********/,
			[//cinima2
			[//films
				[//film day1
					[ //party1
						{
						idcinima :1,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :1,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				],
				[ //film day2
										[ //party1
						{
						idcinima :1,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :1,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				]
			]
		]/**************end cinima3*********/,
			[//cinima3
			[//film1
				[//film day1
					[ //party1
						{
						idcinima :2,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :2,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				],
				[ //film day2
										[ //party1
						{
						idcinima :2,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :2,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				]
			],
                [//film2
                    [//film day1
                        [ //party1
                            {
                                idcinima :2,
                                idfilm : 1,
                                checked : [
                                    {
                                        name : "ahmedsafwat",
                                        thechecked : [5,7]
                                    }
                                ]

                            }],
                        [//film party2
                            {
                                idcinima :2,
                                idfilm : 1,
                                checked : [
                                    {
                                        name : "ahmedsafwat",
                                        thechecked : [5,7]
                                    }
                                ]

                            }
                        ]
                    ],
                    [ //film day2
                        [ //party1
                            {
                                idcinima :2,
                                idfilm : 1,
                                checked : [
                                    {
                                        name : "ahmedsafwat",
                                        thechecked : [5,7]
                                    }
                                ]

                            }],
                        [//film party2
                            {
                                idcinima :2,
                                idfilm : 1,
                                checked : [
                                    {
                                        name : "ahmedsafwat",
                                        thechecked : [5,7]
                                    }
                                ]

                            }
                        ]
                    ]
                ]
		]/**************end cinima34********/,
			[//cinima5
			[//film1
				[//film day1
					[ //party1
						{
						idcinima :4,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :4,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				],
				[ //film day2
										[ //party1
						{
						idcinima :4,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :4,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				]
			],
				[//film2
				[//film day1
					[ //party1
						{
						idcinima :4,
						idfilm : 1,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :4,
						idfilm : 1,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				],
				[ //film day2
										[ //party1
						{
						idcinima :4,
						idfilm : 1,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :4,
						idfilm : 1,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				]
			],
				[//film3
				[//film day1
					[ //party1
						{
						idcinima :4,
						idfilm : 2,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :4,
						idfilm : 2,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				],
				[ //film day2
										[ //party1
						{
						idcinima :4,
						idfilm : 2,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :4,
						idfilm : 2,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				]
			],
				[//film4
				[//film day1
					[ //party1
						{
						idcinima :4,
						idfilm : 3,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :4,
						idfilm : 3,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				],
				[ //film day2
										[ //party1
						{
						idcinima :4,
						idfilm : 3,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :4,
						idfilm : 3,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				]
			],
				[//film5
				[//film day1
					[ //party1
						{
						idcinima :4,
						idfilm : 4,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :4,
						idfilm : 4,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				],
				[ //film day2
					[ //party1
						{
						idcinima :4,
						idfilm : 4,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :4,
						idfilm : 4,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				]
			]
		]/**************end cinima5*********/,
			[//cinima4
			[//film1
				[//film day1
					[ //party1
						{
						idcinima :3,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :3,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				],
				[ //film day2
										[ //party1
						{
						idcinima :3,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :3,
						idfilm : 0,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				]
			],
				[//film2
				[//film day1
					[ //party1
						{
						idcinima :3,
						idfilm : 1,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :3,
						idfilm : 1,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				],
				[ //film day2
										[ //party1
						{
						idcinima :3,
						idfilm : 1,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :3,
						idfilm : 1,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				]
			],
				[//film3
				[//film day1
					[ //party1
						{
						idcinima :3,
						idfilm : 2,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :3,
						idfilm : 2,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				],
				[ //film day2
										[ //party1
						{
						idcinima :3,
						idfilm : 2,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :3,
						idfilm : 2,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				]
			],
				[//film4
				[//film day1
					[ //party1
						{
						idcinima :3,
						idfilm : 3,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :3,
						idfilm : 3,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				],
				[ //film day2
										[ //party1
						{
						idcinima :3,
						idfilm : 3,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :3,
						idfilm : 3,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				]
			],
				[//film5
				[//film day1
					[ //party1
						{
						idcinima :3,
						idfilm : 4,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :3,
						idfilm : 4,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				],
				[ //film day2
										[ //party1
						{
						idcinima :3,
						idfilm : 4,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :3,
						idfilm : 4,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				]
			],
				[//film6
				[//film day1
					[ //party1
						{
						idcinima :3,
						idfilm : 5,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :3,
						idfilm : 5,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				],
				[ //film day2
										[ //party1
						{
						idcinima :3,
						idfilm : 5,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}],
					[//film party2
						{
						idcinima :3,
						idfilm : 5,
						checked : [
							{
								name : "ahmedsafwat",
								thechecked : [5,7]
							}
						]
						
					}
					]
				]
			]
		]/**************end cinima4*********/
		]
		/*********************************************/
		$scope.filmchecked = $scope.datachecked[$scope.cid][$scope.fid];
		$scope.daypartychecked = $scope.filmchecked[$scope.dayparty];
		$scope.daypartytimechecked = $scope.daypartychecked[$scope.partytime];
		$scope.mychecked = $scope.daypartytimechecked[0].checked
        console.log($scope.mychecked);
		console.log($scope.datachecked[$scope.cid]);
		for(var i =0 ,k=0;i< $scope.mychecked.length;i++){
        	for (var j = 0;j<$scope.mychecked[i].thechecked.length;j++){
                mycheckedpostion[k] =$scope.mychecked[i].thechecked[j]
				k = k+1
			}

		}
		console.log(mycheckedpostion);
		var myelment = document.getElementById("mychair");
		for (var i = 0;i<76 ;i++){
			var chair = document.createElement("div"),
				number = document.createTextNode(i+ "");
			    chair.className = "chair";
                 chair.setAttribute("data-value",i+"");
                 chair.appendChild(number);
                    myelment.appendChild(chair);
		}
		console.log(mycheckedpostion);
		$scope.myerror = function () {
			alert("this chair checked selected other");
        }
		var checked = document.getElementsByClassName("chair")
		for(var i =0 ;i<mycheckedpostion.length;i++){
			checked[mycheckedpostion[i]].classList.add("disabled");
            checked[mycheckedpostion[i]].setAttribute("ng-click","myerror()");
            checked[mycheckedpostion[i]].onclick = function () {
                alert("this chair checked selected other");
            }
		}
        /**********************************************click to check******************/

		var mypos = [];
        $scope.numticket = 0
        setTimeout(function () {

            $(".chair:not(.disabled)").click(function () {
                $(this).toggleClass("myselected");
                if($(this).hasClass("myselected")){
                    $scope.numticket += 1
					$("#summary_tickets").html( $scope.numticket)
					var numpos= parseInt($(this).attr('data-value'));
					mypos.push(numpos);
					console.log($scope.numticket);
				} else {
                    $scope.numticket =  $scope.numticket - 1
                    $("#summary_tickets").html( $scope.numticket)
					mypos.indexOf($(this).attr('data-value'));
                    mypos.splice(mypos.indexOf(parseInt($(this).attr('data-value'))),1)
                    console.log( mypos.indexOf($(this).attr('data-value')));
				}
				console.log( mypos);
            })
        },400)

     $(".fotterview .btton:first-of-type .btn").click(function (e) {
		 e.preventDefault();
		window.location.href = "#";
		 console.log($location.href);
         mypos = [];
         $scope.numticket = 0;
         $("#summary_tickets").html( $scope.numticket)
         $(".myselected").removeClass("myselected")
     })
        $scope.products = []
        $(".fotterview .btton:last-of-type .btn").click(function (e) {
            e.preventDefault();
            if($scope.numticket == 0 ){
            	alert("اختر اماكن للحجز");
			} else
			{
                var mynewselected = {}
                alert("عزيزى العميل تم حجز " +  $scope.numticket +" تزكره بمبلغ" +  $scope.numticket  *20+"جنيها" );
               // window.location.href = "#";
                mynewselected.name = $scope.namecustmer;
                mynewselected.thechecked = mypos;
                $scope.mychecked.push(mynewselected);
                console.log($scope.mychecked);
                // *******************************************************88
                //  $http.post("app/data/package.json", {"ahmed":55}).then(
                //      function (response) {
                //          alert('ok')
                //          $scope.products.push(response.data);
                //          console.log(response)
                //          console.log($scope.products)
                //      }, function () { }
                //  )
                // $http.get('app/data/package.json').success(function (data){
                //     $scope.employees = data
					// alert("hello")
                // }
                //     );
                //
                // $scope.employee={"name":'ali',"city":'city',"state":'state'};
                //
                // $http.post('app/data/package.json', {"employee": $scope.employee})
                //     .success(function(response,  status, headers, config){
                //         $scope.employees.push($scope.employee);
                //         alert("ok")
                //     });

                /***********************************************************/
                console.log($scope.mychecked);
                mypos = [];
                $scope.numticket = 0;
                $("#summary_tickets").html( $scope.numticket);
                $(".myselected").removeClass("myselected").addClass("disabled");
                console.log($scope.daypartytimechecked);
			}

        })
    }
    angular.module("mycinima").controller("checkedcontroller",checkedcontroller)
}())