/*

SMINT V1.0 by Robert McCracken
SMINT V2.0 by robert McCracken with some awesome help from Ryan Clarke (@clarkieryan) and mcpacosy â€(@mcpacosy)
SMINT V3.0 by robert McCracken with some awesome help from Ryan Clarke (@clarkieryan) and mcpacosy â€(@mcpacosy)

SMINT is my first dabble into jQuery plugins!

http://www.outyear.co.uk/smint/

If you like Smint, or have suggestions on how it could be improved, send me a tweet @rabmyself

*/


(function(){


	jQuery.fn.smint = function( options ) {

		var settings = jQuery.extend({
			'scrollSpeed'  : 500,
			'mySelector'     : 'div'
		}, options);

		// adding a class to users div
		jQuery(this).addClass('smint');


				
		
		//Set the variables needed
		var optionLocs = new Array(),
			lastScrollTop = 0,
			menuHeight = jQuery(".smint").height(),
			smint = jQuery('.smint'),
        	smintA = jQuery('.smint a.subNavBtn'),
        	myOffset = smint.height(),
			footerHeight = jQuery(".bottom-bloc").height() - jQuery(".blocs").height() + jQuery("#footer").height(),
			headerHeight = jQuery('.navbar-fixed-top').height() + jQuery('#main-menu').height();

      



		if ( settings.scrollSpeed ) {
				var scrollSpeed = settings.scrollSpeed
			}

		if ( settings.mySelector ) {
				var mySelector = settings.mySelector
		};



		return smintA.each( function(index) {
            
			var id = jQuery(this).attr('href').split('#')[1];

			if (!jQuery(this).hasClass("extLink")) {
				jQuery(this).attr('id', id);
			}

			//Fill the menu
			optionLocs.push(Array(
				jQuery(mySelector+"."+id).position().top-menuHeight, 
				jQuery(mySelector+"."+id).height()+jQuery(mySelector+"."+id).position().top, id)
			);
			///////////////////////////////////

			// get initial top offset for the menu 
			var stickyTop = smint.offset().top;	

			// check position and make sticky if needed
			var stickyMenu = function(direction){

				// current distance top
				var scrollTop = jQuery(window).scrollTop()+myOffset;

				// if we scroll more than the navigation, change its position to fixed and add class 'fxd', otherwise change it back to absolute and remove the class
				if (scrollTop > stickyTop+myOffset && jQuery(window).width() < 992) {
					smint.css({ 'position': 'fixed', 'top':0 }).addClass('fxd');
					jQuery('#sub-menu').css('margin-top', jQuery('.navbar-fixed-top').height() + jQuery('#main-menu').height());

					// add padding to the body to make up for the loss in heigt when the menu goes to a fixed position.
					// When an item is fixed, its removed from the flow so its height doesnt impact the other items on the page
					jQuery('body').css('padding-top', menuHeight );
				} else {
					smint.css( 'position', 'relative').removeClass('fxd');
					smint.css( 'margin-top', '0'); 
					//remove the padding we added.
					jQuery('body').css('padding-top', '0' );	
				}   

				// Check if the position is inside then change the menu
				// Courtesy of Ryan Clarke (@clarkieryan)
				if(optionLocs[index][0] <= scrollTop && scrollTop <= optionLocs[index][1]){
					if(direction == "up"){
						jQuery("#"+id).addClass("active");
						jQuery("#d-"+id).addClass("active");
						jQuery("#"+optionLocs[index+1][2]).removeClass("active");
						jQuery("#d-"+optionLocs[index+1][2]).removeClass("active");
					} else if(index > 0 && index < optionLocs.length -1) {
						jQuery("#"+id).addClass("active");
						jQuery("#d-"+id).addClass("active");
						jQuery("#"+optionLocs[index-1][2]).removeClass("active");
						jQuery("#d-"+optionLocs[index-1][2]).removeClass("active");
					} else if(direction == undefined){
						jQuery("#"+id).addClass("active");
						jQuery("#d-"+id).addClass("active");
					}
					jQuery.each(optionLocs, function(i){
						if(id != optionLocs[i][2]){
							jQuery("#"+optionLocs[i][2]).removeClass("active");
						}
					});
				}
			};

			// run functions
			stickyMenu();

			// run function every time you scroll
			jQuery(window).scroll(function() {
				//Get the direction of scroll
				var st = jQuery(this).scrollTop()+myOffset;
				if (st > lastScrollTop) {
				    direction = "down";
				} else if (st < lastScrollTop ){
				    direction = "up";
				}
				lastScrollTop = st;
				stickyMenu(direction);

				// Check if at bottom of page, if so, add class to last <a> as sometimes the last div
				// isnt long enough to scroll to the top of the page and trigger the active state.

				if(jQuery(window).scrollTop() + jQuery(window).height() >= jQuery(document).height() - footerHeight + headerHeight + menuHeight) {
	       			smintA.removeClass('active')
	       			jQuery(".smint a:not('.extLink'):last").addClass('active')
					smint.hide();
   				} else {
   					smintA.last().removeClass('active')
					smint.show();
   				}
			});

			///////////////////////////////////////
        
        	jQuery(this).on('click', function(e){
				// gets the height of the users div. This is used for off-setting the scroll so the menu doesnt overlap any content in the div they jst scrolled to
				var myOffset = smint.height();   

        		// stops hrefs making the page jump when clicked
				e.preventDefault();
				
				// get the hash of the button you just clicked
				var hash = jQuery(this).attr('href').split('#')[1];

				

				var goTo =  jQuery(mySelector+'.'+ hash).offset().top-myOffset;
				
				// Scroll the page to the desired position!
				jQuery("html, body").stop().animate({ scrollTop: goTo }, scrollSpeed);
				
				// if the link has the '.extLink' class it will be ignored 
		 		// Courtesy of mcpacosy â€(@mcpacosy)
				if (jQuery(this).hasClass("extLink"))
                {
                    return false;
                }

			});	


			//This lets yo use links in body text to scroll. Just add the class 'intLink' to your button and it will scroll

			jQuery('.intLink').on('click', function(e){
				var myOffset = smint.height();   

				e.preventDefault();
				
				var hash = jQuery(this).attr('href').split('#')[1];

				if (smint.hasClass('fxd')) {
					var goTo =  jQuery(mySelector+'.'+ hash).position().top-myOffset;
				} else {
					var goTo =  jQuery(mySelector+'.'+ hash).position().top-myOffset*2;
				}
				
				jQuery("html, body").stop().animate({ scrollTop: goTo }, scrollSpeed);

				if (jQuery(this).hasClass("extLink"))
                {
                    return false;
                }

			});	
		});

	};

	jQuery.fn.smint.defaults = { 'scrollSpeed': 500, 'mySelector': 'div'};
})(jQuery);