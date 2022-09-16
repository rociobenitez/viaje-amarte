
$(document).ready(function(){ 
	$('#menu_on').click(function(){
		$('.container').toggleClass('visibleMenu');
	});
	var nav = $('.navPrincipal').html();
	var year = (new Date).getFullYear();
	year = "<p><small>Copyright © " + year + ". Viaje aMarte. All Rights Reserved<small></p>";
	$('.year').html(year);
});



