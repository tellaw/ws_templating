jQuery(document).ready(function() {
    jQuery("#inlineResults .top .right").on("click",function() {
        jQuery("id-rechercher-div").hide();
    });

    // gestion des popins media
    jQuery("a.media-popin").click(function() {
        if (!jQuery("#media-popin").html()) {
            var ui = '<div id="media-popin" role="dialog" style="display:none;z-index:1001;">' + '<iframe frameborder="0" style="width:100%;height:98%;" src=""></iframe>' + '</div>';
            jQuery("body").append(ui);
        }
        var top = jQuery(this).offset().top;
        jQuery("#media-popin").dialog({
            modal: true,
            title: jQuery(this).attr("title"),
            width: 960,
            closeText: "X",
            open: function() {
                window.scrollTo(0, top - jQuery(window).height() / 2);
                return false;
            },
            close: function() {
                jQuery("#media-popin").remove();
                return false;
            }
        });
        jQuery("#media-popin").dialog("widget").attr("id", "design-media-popin").css("position", "absolute");
        jQuery("#media-popin iframe").attr("src", jQuery(this).attr("href"));
        if(top > "420"){
            jQuery("#media-popin").dialog("widget").css("top", top - jQuery(window).height() / 3);
        }
        else {
            jQuery("#media-popin").dialog("widget").css("top", "150px");
        }

        jQuery("#design-media-popin").css("left", ((jQuery(window).width()-jQuery("#design-media-popin").width())/2));
        jQuery("#design-media-popin").css("height", "295px");
        return false;
    });
});

function highlightInTableau(area,word) {
    jQuery(area).removeHighlight();

    if (word!="") {
        jQuery(area).highlight(word, true);

        jQuery("html, body").animate({
            scrollTop: (jQuery(area + " .highlight").offset().top - 100)
        },500);
    }
}

function inlineSearch(word) {
    jQuery("#corps-article").removeHighlight();
    jQuery.get( "/lucy-recherche-inline-ajax.do?uid=${pageData.encyclopedia.uid}&ref=${pageData.encyclopedia.uid.id}&version=${pageData.encyclopedia.uid.version!0}&query="+encodeURIComponent(word), function( data ) {
        jQuery( "#inlineResults" ).html( data );
        jQuery( "#id-rechercher-div" ).show();
    });
}

function highlightAndScroll(word) {
    if (word!="") {
        jQuery("#corps-article").highlight(word, true);
        jQuery("#sommaire").highlight(word, true);
    }
}