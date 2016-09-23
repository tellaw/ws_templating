jQuery(document).ready(function ($) {
	
	/*affichage box favoris en hover sur "favoris de recherche" dans la page de recherche"*/
	$("#wrap-favoris").hover(function() {
		$("#boxFavoris").show();
	},function(){ 
		$("#boxFavoris").hide();
	});
	
	$("#boxFavoris").hover(function() {
		$(this).show();
	},function(){ 
		$(this).hide();
	});

	/*affichage box historique en hover sur "historique récente" dans la page de recherche"*/
	$("#wrap-history").hover(function() {
		$("#boxHistory").show();
	},function(){ 
		$("#boxHistory").hide();
	});
	
	$("#boxHistory").hover(function() {
		$(this).show();
	},function(){ 
		$(this).hide();
	});
	
	function displayStateForFacetCheckbox(facetName) {
		var isOneChecked=false;
		var isAllChecked=true;

		$( "#" + facetName + "-all" ).closest("li").find("input[data-"+facetName+"-filter]").each(function(index) {
			isOneChecked |= $(this).prop("checked");
			isAllChecked &= $(this).prop("checked");
		});
		
		if (isOneChecked) {
			$( "#" + facetName + "-all").prop('checked', true);
		} else {
			$( "#" + facetName + "-all").prop('unchecked', true);
		}
	}
	
	$("input[data-filter-all]").on("click", function() {
		var paramName = $(this).data("filter-all");
		$(this).prop("checked", function (i, old) {
			if (!old) {
				$("input[data-"+paramName+"-filter-group").click();
				$(this).closest("li").find("input[data-"+paramName+"-filter]:checked").each(function (i, box) {
					$(box).click();
				});
			} else {
				$("input[data-"+paramName+"-filter-group").each(function (i, box) {
					if (!$(box).prop("checked")) {
						$(box).click();
					}
				});
				$(this).closest("li").find("input[data-"+paramName+"-filter]").each(function (i, box) {
					if (!$(box).prop("checked")) {
						$(box).click();
					}
				});
			}
		});
		
	});
	
	$("input[data-filter-all]").each(function (i, box) {
		var paramName = $(box).data("filter-all");
		displayStateForFacetCheckbox(paramName);
		$("input[data-"+paramName+"-filter]").on("click", function() {
			$(this).prop("checked", function(i, old) {
				var mask = $(this).data(paramName+"-filter");
				var tt = $("#"+paramName+"-total");
				var ttMask = parseInt(tt.val(), 16);
				var m = parseInt(mask, 16);
				
				if ((ttMask & m) > 0) {
					ttMask &= ~m ;
				} else {
					ttMask |= m;
				}
				tt.val((ttMask).toString(16));
			});
		});
		
		$("input[data-"+paramName+"-filter-group").on("click", function() {
			$(this).prop("checked", function (i, old) {
				if (!old) {
					$(this).parent("li").find("input[data-"+paramName+"-filter]:checked").each(function (i, box) {
						$(box).click();
					});
				} else {
					$(this).parent("li").find("input[data-"+paramName+"-filter]").each(function (i, box) {
						if (!$(box).prop("checked")) {
							$(box).click();
						}
					});
				}
			});
			displayStateForFacetCheckbox(paramName);
		});

	});
	
	$("input[data-ignore-if-empty]").on("change", function() {
		if ($(this).val().trim() === "") {
			$(this).removeAttr("name");
		} else {
			$(this).attr("name", $(this).data("field-name"));
		}
	});
	
	// Date range
	
	// gestion datepicker
    // Date range
	$.datepicker.setDefaults( $.datepicker.regional[ "fr" ] );	
    $('#avant-picker').datepicker({
        altField: "#avant",
        altFormat: 'dd/mm/yy',
        prevText: "<i class='fa fa-angle-left font-size-25'></i>",
        nextText: "<i class='fa fa-angle-right font-size-25'></i>",
        changeYear: true,
        onSelect: function( selectedDate ) {
            $('#apres-picker').datepicker('option', 'minDate', selectedDate);
            $("#avant").change(); // to have input name set
        }
    });
    $('#apres-picker').datepicker({
        altField: "#apres",
        altFormat: 'dd/mm/yy',
        prevText: "<i class='fa fa-angle-left font-size-25'></i>",
        nextText: "<i class='fa fa-angle-right font-size-25'></i>",
        changeYear: true,
        onSelect: function( selectedDate ) {
            $('#avant-picker').datepicker('option', 'maxDate', selectedDate);
            $("#apres").change(); // to have input name set
        }
    });
})