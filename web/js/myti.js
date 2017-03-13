jQuery(document).ready(function () {
  //On cache le bloc #mon-espace-admin s'il n'a pas d'entrée 
  if (jQuery("#mon-espace-admin").has( "ul" ).length == 0) {
    jQuery("#mon-espace-admin").hide();
  }
});
