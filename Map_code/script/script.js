// JavaScript Document


$(function(){
	$('.button_nav').on('click', function(){
		if($(this).hasClass('selectedHigh')) {
     $(this).removeClass ('selectedHigh', 50 );
    } else {
      $(this).addClass('selectedHigh' , 50 );
      
    }
	});
	
});