$ = jQuery;

$(document).ready(function () {
	//On cache le bloc #mon-espace-admin s'il n'a pas d'entrée
	if ($("#mon-espace-admin").has( "ul" ).length > 0) {
		$("#mon-espace-admin").show();
	}

	var j = 0;
	$("#search-subscription-input").keyup(function() {
		//if(j == 0) $(this).parent("div").append('<i class="fa fa-times" aria-hidden="true" style="position:absolute; right:15px; top:calc((100% - 50%)/2); font-size:20px; z-index:99; cursor: pointer;"></i>');
		if(j == 0) {
			$(".reset-search p").show();
			$(".info-search p").show();
		}
		j++;
		var value = this.value;
		$(".subscriptions-list").removeHighlight();
		if (value != "") {
			$(".subscriptions-list").highlight(value, true);
		}
		/*else if(j > 0 && value == "") {
			j = 0;
			$(this).parent("div").find('i.fa-times').remove();
		}*/
		else if(j > 0 && value == "") {
			j = 0;
			i = 0;
			$(".reset-search p").hide();
			$(".info-search p").hide();
		}
	});

	var i = 0;
	$("#search-subscription-input").on("keypress", function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);

		if(keycode == '13'){
			if (i >= $('.highlight').length) i = 0;
			$('body').animate({
				scrollTop: $('.highlight').eq(i).offset().top - 80
			}, 300);
			i++;
		}
	});

	$(".reset-search p span").on("click",function() {
		$('#search-subscription-input').val('');
		$(".reset-search p").hide();
		$(".info-search p").hide();
		$('.highlight').removeClass('highlight'); //Remove old search highlights
		j = 0;
		i = 0;
	});

	if ( $( "#profile-avatar" ).length ) {
		$("#user-bar-avatar").attr("src", $("#profile-avatar").attr('src'));
	}

	$(".supp-ref").on("click", function() {
		$(this).parent("div").remove();
	});
});