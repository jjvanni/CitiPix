$(document).ready(function(){

// ------- input submission ------
	$('#submit-btn').click(function(event) {
		event.preventDefault();
    	var cityName = $('#city-type').val();
    	$('#city-type').val('');
    	cityName = cityName.toLowerCase().trim();

// ----- changing background ------
	if (cityName == "new york" || cityName == "new york city" || cityName == "nyc") {
		$('body').attr('class','nyc'); 
	} else if (cityName == "san francisco" || cityName == "bay area"|| cityName == "sf" ) {
		$('body').attr('class','sf');
	} else if (cityName == "los angeles" || cityName == "lax" || cityName == "la") {
		$('body').attr('class','la');
	} else if (cityName == "austin" || cityName == "atx") {
		$('body').attr('class','austin');
	} else if (cityName == "sydney", cityName == "syd"){
		$('body').attr('class', 'sydney');
	}
  });
});	