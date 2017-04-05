jQuery(document).ready(function () {

  //Les services => reliés aux fonctions
  jQuery('#leadDepartment').change(function(evt){
		ajaxOnChangedLeadDepartment(jQuery(this).val());
  });

  //Zipcode relié aux villes
  jQuery("#zipCode").keyup(function() {
	  var value = this.value;
	  if (/^[0-9]{5}$/.test(value)) {
	    ajaxGetCityByZipcode(value);
	  } else {
	  	jQuery('#city').empty();
	  }
	});

  //Photo de profil
	function initPictureForm () {

		var navigatorName;
		navigatorName = navigator.appName.toLowerCase();

		if (navigatorName.indexOf("internet explorer") == -1) {

			jQuery("#picture-button").click(function () {
				jQuery('#picture-input').click();
			});

			var fileInput = document.getElementById("picture-input");
			fileInput.onchange = function () {changeListenerOnFileInput()};
		}
		else {
			jQuery('#picture-input').css("display", "block");
			jQuery("#picture-button").css("display", "none");
			jQuery("#picture-button-ie").css("display","block");
			jQuery("#picture-form-submit").css("display", "block");
			jQuery('p.red').css("display", "block");
		}
	}

	function changeListenerOnFileInput () {

		var pictureForm, pictureInput, file, iSize, mbSize;
		pictureForm = document.forms["picture-form"];
		pictureInput = pictureForm.elements["picture"];
		file = pictureInput.files[0];
		if (file) {
			iSize = file.size / 1024;
			mbSize = (Math.round((iSize / 1024) * 100) / 100);

			if (mbSize > 2){
				jQuery("#picture-input-size span").html("Le fichier est trop volumineux. Veuillez en choisir un autre");
				jQuery("#picture-input-size").css("display", "block");
				jQuery("#picture-input").attr("value","");
		     } else {
				jQuery("#picture-input-size").html("");
				jQuery("#picture-form-submit").click();
				jQuery("#picture-input-size").css("display", "none");
			}
		}
	}

	initPictureForm ();

});

function ajaxOnChangedLeadDepartment(departmentId) {
  	jQuery.ajax({
  		url : '/ajax/lucy/myti/profile/ajaxOnChangedLeadService?leadDepartmentId=' + encodeURIComponent(departmentId),
  		success : function (data) {
  			var leadFunction = jQuery('#leadFunction');
        leadFunction.empty();
        for (var i = 0; i < data.length; i++) {
            leadFunction.append('<option value=' + data[i].value + '>' + data[i].name + '</option>');
        }
  		}
  	});
	return false;
}

function ajaxGetCityByZipcode(zipcode) {
  	jQuery.ajax({
  		url : '/ajax/lucy/myti/profile/ajaxGetCityByZipcode?zipcode=' + encodeURIComponent(zipcode),
  		success : function (data) {
  			var citySelect = jQuery('#city');
	        citySelect.empty();
	        for (var i = 0; i < data.length; i++) {
	            citySelect.append('<option value=' + data[i].value + '>' + data[i].name + '</option>');
	        }
  		}
  	});
	return false;
}
