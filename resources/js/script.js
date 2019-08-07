$(document).ready(function(){
	// for sticky navgaition
//    $(".js-section-features ").waypoint(function(direction){
// 	   if (direction == "down") {
// 		   $("nav").addClass("sticky");
		   
// 	   } else {
// 		$("nav").removeClass("sticky");
// 	   }
// 	},{
//        offset:"60px;"
//    });

// scrool on buttons 
$(".js--scroll-to-plans").click(function(){
	$('html, body').animate({scrollTop: $('js--section-plans').offset().top}, 1000)
});

   	// $("h1").click(function(){
	// 	$(this).css("color","#ff0000")
	// })
	
});


	