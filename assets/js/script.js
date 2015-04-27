$(document).ready(function() {
	$("#welcome").click(function() {
	alert("Welcome to Susan Ridgeway Law!");
});
	$(".circles").hover(function() {
		$(this).addClass("opacity");
	}, function(){
		$(this).removeClass("opacity");
	});
	$("#homeBar").hover(function() {
		$("#homeBar").css("color: black;")
	},
		function(){

		});

});
