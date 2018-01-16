// JavaScript Document

//Changes a color of the button1
$(function () {
	$('#button1').on('click', function () {
		if ($(this).hasClass('pressed-highlights')) {} else {
			$('#button1').removeClass('button_nav_grey');
			rem_color();
			$(this).addClass('pressed-highlights');
			$('#popup').addClass('pressed-highlights');
			map_change();
			$('#map').addClass("highlights");
			$('#content').html(' <div id="images-highlights"><img src="images/high_3.jpg" class="images waze"  alt="red-figure pottery from Athens c. 440 BC, exported to Nola"><img src="images/high_1.jpg" class="images" alt="image of Pedimental sculptures from the Athena Aphaiatempel in Aegina "> <img src="images/high_2.jpg" class="images" alt="Bluebeard, sculpture from the Acropolis in Athens made by Anne-Marie Carl Nielsen. ">  </div>');
			$('#title').html('Highlights');
			location.reload();
		}
	});

});

//Changes a color of the button2
$(function () {
	$('#button2').on('click', function () {
		if ($(this).hasClass('pressed-bronzealder')) {} else {
			$('#button2').removeClass('button_nav_grey');
			rem_color();
			$(this).addClass('pressed-bronzealder');
			$('#popup').addClass('pressed-bronzealder');
			map_change();
			$('#map').addClass('bronzealder');
			$('#content').html('Bronze Age: 2nd millennium BC with Minoan and Mycenean cultures in Crete and the Mainland');
			$('#title').html('Bronze Age');
		}
	});

});

//Changes a color of the button3
$(function () {
	$('#button3').on('click', function () {
		if ($(this).hasClass('pressed-geometrisk')) {} else {
			$('#button3').removeClass('button_nav_grey');
			rem_color();
			$(this).addClass('pressed-geometrisk');
			$('#popup').addClass('pressed-geometrisk');
			map_change();
			$('#map').addClass("geometrisk");
			$('#content').html('Geometric Period, 900-700 BC. The period of the formation of the Greek city states. Named after the pottery that is decorated with geometric patterns');
			$('#title').html('Geometric Period');
		}
	});

});


//Changes a color of the button4
$(function () {
	$('#button4').on('click', function () {
		if ($(this).hasClass('pressed-arkaisk')) {} else {
			$('#button4').removeClass('button_nav_grey');
			rem_color();
			$(this).addClass('pressed-arkaisk');
			$('#popup').addClass('pressed-arkaisk');
			map_change();
			$('#map').addClass("arkaisk");
			$('#content').html('Archaic Greece – 700-480 BC, the period of development of the Greek city states, monumentalisation of sanctuaries through large stone temples, the development of large free-standing sculpture in marble and of high quality figure-decorated pottery');
			$('#title').html('Archaic Greece');
		}
	});

});


//Changes a color of the button5
$(function () {
	$('#button5').on('click', function () {
		if ($(this).hasClass('pressed-klassisk')) {} else {
			$('#button5').removeClass('button_nav_grey');
			rem_color();
			$(this).addClass('pressed-klassisk');
			$('#popup').addClass('pressed-klassisk');
			map_change();
			$('#map').addClass("klassisk");
			$('#content').html('Classical Greece – Athens in the Classical period with special emphasis on the Acropolis of Athens, the temples and sculptures of the sanctuary of Zeus in Olympia, and the late Classical period 400-323 when individuality became more important and the new group of monuments, portraits, developed.');
			$('#title').html('Classical Greece');
		}
	});

});

//Changes a color of the button6
$(function () {
	$('#button6').on('click', function () {
		if ($(this).hasClass('pressed-hellenistisk')) {} else {
			$('#button6').removeClass('button_nav_grey');
			rem_color();
			$(this).addClass('pressed-hellenistisk');
			$('#popup').addClass('pressed-hellenistisk');
			map_change();
			$('#map').addClass("hellenistisk");
			$('#content').html('The Hellenistic period – the time after Alexander the Great where the Eastern Mediterranean was divided in new kingdoms, for instance Pergamon where the great altar for Zeus was build.');
			$('#title').html('Hellenistic Period');
		}
	});

});


//Changes a color of the button7
$(function () {
	$('#button7').on('click', function () {
		if ($(this).hasClass('pressed-romersk')) {} else {
			$('#button7').removeClass('button_nav_grey');
			rem_color();
			$(this).addClass('pressed-romersk');
			$('#popup').addClass('pressed-romersk');
			map_change();
			$('#map').addClass("romersk");
			$('#content').html('Roman covers both Republican Rome from 509-31 BC and Imperial Rome that begins with Augustus’ victory over Marcus Antonius and Cleopatra in 31 BC.');
			$('#title').html('Roman');
		}
	});

});

//Changes a color of the button8
$(function () {
	$('#button8').on('click', function () {
		if ($(this).hasClass('pressed-syditalisk')) {} else {
			$('#button8').removeClass('button_nav_grey');
			rem_color();
			$(this).addClass('pressed-syditalisk');
			$('#popup').addClass('pressed-syditalisk');
			map_change();
			$('#map').addClass("syditalisk");
			$('#content').html('South Italian – the Greek cities in Southern Italy produced a large amount of pottery mainly from 400-300 BC');
			$('#title').html('South Italian');


		}
	});

});

//Removes color from the already clicked button and adds default color to it
function rem_color() {
	$('#button1').removeClass('pressed-highlights').addClass('button_nav_grey');
	$('#button2').removeClass('pressed-bronzealder').addClass('button_nav_grey');
	$('#button3').removeClass('pressed-geometrisk').addClass('button_nav_grey');
	$('#button4').removeClass('pressed-arkaisk').addClass('button_nav_grey');
	$('#button5').removeClass('pressed-klassisk').addClass('button_nav_grey');
	$('#button6').removeClass('pressed-hellenistisk').addClass('button_nav_grey');
	$('#button7').removeClass('pressed-romersk').addClass('button_nav_grey');
	$('#button8').removeClass('pressed-syditalisk').addClass('button_nav_grey');
	$('#popup').removeClass();

}


function map_change() {
	$('#map').removeClass();
}




$('.vase').on('click', function () {
	if ($('#popupWin').hasClass('popupVis')) {
		$('#popupWin').removeClass().addClass('popup');
	} else {
		$('#popupWin').removeClass().addClass('popupVis');
		$('#popupWin').html('<div class="close" onclick="closing()"></div><img src="images/high_3_vert.jpg"><p>Red-figure neckamphora with Hermes and a bearded man, perhaps Zeus, on one side, a young man with himation on the other: example of important red-figure pottery from Athens c. 440 BC, exported to Nola.</p></div>');
	}
});


$('.sculpt').on('click', function () {
	if ($('#popupWin').hasClass('popupVis')) {
		$('#popupWin').removeClass().addClass('popup');
	} else {
		$('#popupWin').removeClass().addClass('popupVis');
		$('#popupWin').html('<div class="close" onclick="closing()"></div><img src="images/high_1_vert.jpg"><p>Pedimental sculptures from the Athena Aphaiatempel in Aegina: important sculpture group that was restored by Thorvaldsen. It also has a history in the university life as it decorated the first large auditorium.</p></div>');
	}
});



$('.bluebeard').on('click', function () {
	if ($('#popupWin').hasClass('popupVis')) {
		$('#popupWin').removeClass().addClass('popup');
	} else {
		$('#popupWin').removeClass().addClass('popupVis');
		$('#popupWin').html('<div class="close" onclick="closing()"></div><img src="images/high_2_vert.jpg"><p>Bluebeard, sculpture from the Acropolis in Athens made by Anne-Marie Carl Nielsen. It shows how ancient sculptures were originally painted in bright colors. The Danish artist was able to make her own copy of the sculpture, showing the coloring of the original, which is in Athens</p></div>');
	}
});

function closing (){
	$('#popupWin').removeClass().addClass('popup');
}
		