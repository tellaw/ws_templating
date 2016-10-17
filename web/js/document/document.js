jQuery(document).ready(function() {
    jQuery("#inlineResults .top .right").on("click",function() {
        jQuery("id-rechercher-div").hide();
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