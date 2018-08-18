/*global $*/

var mylocalhost =  [];
$(function (){
	"use stricit"
	$(window).one("load",function() {
		mylocalhost.push(window.location.href);
		console.log(mylocalhost);
	})
	
	/*the view 1 hover the film poster*/
	$(window).load(function () {
		$(".thcinima .thefilms .film .thetest").hover(function(){
		var h = $(this).innerHeight();
		$(this).find("div.myhiddenhover").css("height",h + "px").fadeIn(800);
		},function() {
            $(this).find("div.myhiddenhover").fadeOut(800);
		})
		var myratelength = $("#some_id").val()
		for(var i =0 ;i<myratelength;i++){
			$(".rating-input i").eq(i).css("color","gold");
		}
		
	});
	//hover
	$(".thcinima .thefilms .film .thetest").hover(function(){
		var h = $(this).innerHeight();
		$(this).find("div.myhiddenhover").css("height",h + "px").fadeIn(800);
	},function() {
        $(this).find("div.myhiddenhover").fadeOut(800)
	});
   
   $("#secnd").click(function (e) {
	   e.preventDefault();
	   
	   window.location.href = mylocalhost[0] + "#postion"; 
	   
   })
   $("#first").click(function (e) {
	   e.preventDefault();
	   window.location.href = mylocalhost[0] + "#booked";
   })
});