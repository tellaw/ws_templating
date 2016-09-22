jQuery(document).ready(function ($) {
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
		});

	});
})