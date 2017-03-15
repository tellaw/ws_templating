jQuery(document).ready(function () {
  //On cache le bloc #mon-espace-admin s'il n'a pas d'entrée
  if (jQuery("#mon-espace-admin").has( "ul" ).length > 0) {
    jQuery("#mon-espace-admin").show();
  }

  jQuery("#search-subscription-input").keyup(function() {
		var value = this.value;
		jQuery("#search-subscription-div").removeHighlight();
		if (value != "") {
			jQuery("#search-subscription-div").highlight(value, true);
		}
	});

  if ( jQuery( "#profile-avatar" ).length ) {
		jQuery("#user-bar-avatar").attr("src", jQuery("#profile-avatar").attr('src'));
	}
});
