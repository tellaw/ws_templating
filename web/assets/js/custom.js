// Home javascript

$( window ).resize(function() {
	if ($( "#sub-menu" ).hasClass( "fxd" )) {
		$('#sub-menu').css('margin-top', $('#main-header').height());
	} else if (!$( "#sub-menu" ).hasClass( "fxd" )) {
	}	
});

$( window ).ready(function() {
	if ($( "#sub-menu" ).hasClass( "fxd" )) {
		$('#sub-menu').css('margin-top', $('#main-header').height());
	} else if (!$( "#sub-menu" ).hasClass( "fxd" )) {
	}
});