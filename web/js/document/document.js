jQuery(document).ready(function() {
    jQuery("#inlineResults .top .right").on("click",function() {
        jQuery("id-rechercher-div").hide();
    });

    // gestion des popins media
    jQuery("a.media-popin").click(function() {
        if (!jQuery("#media-popin").html()) {
            var ui = '<div id="media-popin" role="dialog" style="display:none;z-index:1001;">' + '<iframe sandbox="allow-scripts allow-modals" frameborder="0" style="width:100%;height:98%;" src=""></iframe>' + '</div>';
            jQuery("body").append(ui);
        }
        var top = jQuery(this).offset().top;
        var w = jQuery(window).width() - 150;
        jQuery("#media-popin").dialog({
            modal: true,
            title: jQuery(this).attr("title"),
            width: w,
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
        var margeTop = jQuery(window).height() / 2.5;
        if(top > "420"){
            jQuery("#media-popin").dialog("widget").css("top", top - margeTop);
        }
        else {
            jQuery("#media-popin").dialog("widget").css("top", "50px");
        }

        jQuery("#design-media-popin").css("left", ((jQuery(window).width()-jQuery("#design-media-popin").width())/2));
        jQuery("#design-media-popin").css("height", (jQuery(window).height() - margeTop / 2));
        return false;
    });

    // gestion tooltip ref bibli
    jQuery('[data-title]').each(function() {
        jQuery(this).attr('data-toggle', 'tooltip').attr('data-placement', 'bottom');
    });
    jQuery('[data-toggle="tooltip"]').tooltip({
        delay: {show: 0, hide: 1000}
    });

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

function highlightAndScroll(word) {
    if (word!="") {
        jQuery("#corps-article").highlight(word, true);
        jQuery("#sommaire").highlight(word, true);
        jQuery("#presentation").highlight(word, true);
    }
}