// JavaScript Document


$(function(){
	$('#button1').on('click', function(){
		if($(this).hasClass('pressed-highlights')) {} 
		else {
		$('#button1').removeClass ('.button_nav_grey' );
			rem_color();
      $(this).addClass('pressed-highlights');
        $('#popup').addClass('pressed-highlights');
		map_change();
		$('#map').addClass("highlights");
    }
	});
	
});



$(function(){
	$('#button2').on('click', function(){
		if($(this).hasClass('pressed-bronzealder')) {} 
		else {
		$('#button2').removeClass ('.button_nav_grey' );
			 rem_color(); 
      $(this).addClass('pressed-bronzealder' );
      $('#popup').addClass('pressed-bronzealder');
			map_change();
		$('#map').addClass('bronzealder');
    }
	});
	
});


$(function(){
	$('#button3').on('click', function(){
		if($(this).hasClass('pressed-geometrisk')) {} 
		else {
		$('#button3').removeClass ('.button_nav_grey' );
			 rem_color(); 
      $(this).addClass('pressed-geometrisk' );
     $('#popup').addClass('pressed-geometrisk');
			map_change();
		$('#map').addClass("geometrisk");
    }
	});
	
});

$(function(){
	$('#button4').on('click', function(){
		if($(this).hasClass('pressed-arkaisk')) {} 
		else {
		$('#button4').removeClass ('.button_nav_grey' );
			 rem_color(); 
      $(this).addClass('pressed-arkaisk' );
     $('#popup').addClass('pressed-arkaisk');
			map_change();
		$('#map').addClass("arkaisk");
    }
	});
	
});



$(function(){
	$('#button5').on('click', function(){
		if($(this).hasClass('pressed-klassisk')) {} 
		else {
		$('#button5').removeClass ('.button_nav_grey' );
			 rem_color(); 
      $(this).addClass('pressed-klassisk' );
     $('#popup').addClass('pressed-klassisk');
			map_change();
		$('#map').addClass("klassisk");
    }
	});
	
});


$(function(){
	$('#button6').on('click', function(){
		if($(this).hasClass('pressed-hellenistisk')) {} 
		else {
		$('#button6').removeClass ('.button_nav_grey' );
			 rem_color(); 
      $(this).addClass('pressed-hellenistisk' );
     $('#popup').addClass('pressed-hellenistisk');
			map_change();
		$('#map').addClass("hellenistisk");
    }
	});
	
});

$(function(){
	$('#button7').on('click', function(){
		if($(this).hasClass('pressed-romersk')) {} 
		else {
		$('#button7').removeClass ('.button_nav_grey' );
			 rem_color(); 
      $(this).addClass('pressed-romersk' );
     $('#popup').addClass('pressed-romersk');
			map_change();
		$('#map').addClass("romersk");
    }
	});
	
});

$(function(){
	$('#button8').on('click', function(){
		if($(this).hasClass('pressed-syditalisk')) {} 
		else {
		$('#button8').removeClass ('.button_nav_grey' );
			 rem_color(); 
      $(this).addClass('pressed-syditalisk' );
			$('#popup').addClass('pressed-syditalisk');
			map_change();
		$('#map').addClass("syditalisk");
	
     
    }
	});
	
});

function rem_color(){
	$('#button1').removeClass('pressed-highlights').addClass('button_nav_grey');
	$('#button2').removeClass('pressed-bronzealder');
	$('#button3').removeClass('pressed-geometrisk');
	$('#button4').removeClass('pressed-arkaisk');
	$('#button5').removeClass('pressed-klassisk');
	$('#button6').removeClass('pressed-hellenistisk');
	$('#button7').removeClass('pressed-romersk');
	$('#button8').removeClass('pressed-syditalisk');
	$('#popup').removeClass();
	
}

function map_change(){
	$('#map').removeClass();
}












