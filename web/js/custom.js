// Home javascript
jQuery( window ).resize(function() {
    if (jQuery( "#sub-menu" ).hasClass( "fxd" )) {
        jQuery('#sub-menu').css('margin-top', jQuery('#main-header').height());
    } else if (!jQuery( "#sub-menu" ).hasClass( "fxd" )) {
    }
});

jQuery( window ).ready(function() {
    if (jQuery( "#sub-menu" ).hasClass( "fxd" )) {
        jQuery('#sub-menu').css('margin-top', jQuery('#main-header').height());
    } else if (!jQuery( "#sub-menu" ).hasClass( "fxd" )) {
    }
});

jQuery(document).ready(function() {
    if ((jQuery(window).width() >= 992) && (jQuery(window).scrollTop() == 0)) {
        jQuery("#navbar-x").addClass("in");
        jQuery("#button-menu-header").css('cssText', 'display: none !important');
    }

    if ((jQuery(window).width() >= 992) && (jQuery(window).scrollTop() == 0)) {
        jQuery("#navbar-x").addClass("in");
        jQuery("#button-menu-header").css('cssText', 'display: none !important');
    }

    jQuery(window).scroll(function(){
        if ((jQuery(window).width() >= 992) && (jQuery(window).scrollTop() == 0)) {
            jQuery("#navbar-x").addClass("in");
            jQuery("#advanced-search-box").css('cssText', 'display: block !important');
            jQuery("#button-menu-header").css('cssText', 'display: none !important');
            jQuery("#div-menu-header").css('cssText', 'display: none !important');

        } else if ((jQuery(window).width() >= 992) && (jQuery(window).scrollTop() != 0)) {
            jQuery("#navbar-x").removeClass("in");
            jQuery("#advanced-search-box").hide();
            jQuery("#button-menu-header").css('cssText', 'display: inline-block !important');
            jQuery("#div-menu-header").css('cssText', 'display: block !important');

        }
    });

    if ( jQuery( ".subMenu" ).length ) {
        jQuery('.subMenu').smint({
            'scrollSpeed' : 1000,
            'mySelector'     : 'section'
        });

        jQuery('body').scrollspy({target: ".subMenu", offset: 50});
    }


    jQuery(".btn-xpnd-smint").click(function(){

        if (jQuery(this).text() == "+") {
            jQuery(this).text('-');
            jQuery(this).css("background-color", "#697277");
            jQuery(this).css("color", "#fff");

        } else if (jQuery(this).text() == "-") {
            jQuery(this).text('+');
            jQuery(this).css("background-color", "#fff");
            jQuery(this).css("color", "#697277");
        }

    });

    App.init();
    //StyleSwitcher.initStyleSwitcher();
    jQuery('.your-class').slick({
        dots: true,
        arrows: false,
        //autoplay: true,
        //autoplaySpeed: 3000
    });

    jQuery(".owl-carousel").owlCarousel({
        loop: false,
        responsiveClass: true,
        slideBy: 2,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            426: {
                items: 2,
                nav: true
            }
        },
        navText: [
            "<i class='fa fa-angle-left'></i>",
            "<i class='fa fa-angle-right'></i>"
        ],
        navClass: [
            "owl-custom-left",
            "owl-custom-right"
        ],
        controlsClass: "owl-custom-controls"
    });

    var eventStick;
    if (jQuery(window).width() < 1024) {eventStick='click'} else {eventStick='mouseenter'};

    jQuery('#sticky-menu-phone').on(eventStick, function() {

        var hiddenField = jQuery('#sticky-menu-phone'),
            val = hiddenField.val();
        hiddenField.val(val === "true" ? "false" : "true");

        if (hiddenField.val() == "true") {
            jQuery('#sticky-menu-slide-phone').stop().animate({
                right:"40px"
            }, 500);
            jQuery('#sticky-menu-slide-share').stop().animate({
                right:"-220px"
            }, 500);
            jQuery('#sticky-menu-slide-plane').stop().animate({
                right:"-220px"
            }, 500);

            var hiddenFieldd = jQuery('#sticky-menu-share'),
                val = hiddenFieldd.val();
            hiddenFieldd.val("false");

            var hiddenFielddd = jQuery('#sticky-menu-plane'),
                val = hiddenFielddd.val();
            hiddenFielddd.val("false");

        }
        else if (hiddenField.val() == "false"){
            jQuery('#sticky-menu-slide-phone').animate({
                right:"-220px"
            }, 500);
        }
    });

    jQuery('#sticky-menu-share').on(eventStick, function() {

        var hiddenField = jQuery('#sticky-menu-share'),
            val = hiddenField.val();
        hiddenField.val(val === "true" ? "false" : "true");

        if (hiddenField.val() == "true") {
            jQuery('#sticky-menu-slide-share').stop().animate({
                right:"40px"
            }, 500);
            jQuery('#sticky-menu-slide-phone').stop().animate({
                right:"-220px"
            }, 500);
            jQuery('#sticky-menu-slide-plane').stop().animate({
                right:"-220px"
            }, 500);

            var hiddenFieldd = jQuery('#sticky-menu-phone'),
                val = hiddenFieldd.val();
            hiddenFieldd.val("false");

            var hiddenFielddd = jQuery('#sticky-menu-plane'),
                val = hiddenFielddd.val();
            hiddenFielddd.val("false");


        }
        else if (hiddenField.val() == "false"){
            jQuery('#sticky-menu-slide-share').animate({
                right:"-220px"
            }, 500);
        }
    });

    jQuery('#sticky-menu-plane').on(eventStick, function() {

        var hiddenField = jQuery('#sticky-menu-plane'),
            val = hiddenField.val();
        hiddenField.val(val === "true" ? "false" : "true");

        if (hiddenField.val() == "true") {
            jQuery('#sticky-menu-slide-plane').stop().animate({
                right:"40px"
            }, 500);
            jQuery('#sticky-menu-slide-phone').stop().animate({
                right:"-220px"
            }, 500);
            jQuery('#sticky-menu-slide-share').stop().animate({
                right:"-220px"
            }, 500);

            var hiddenFieldd = jQuery('#sticky-menu-phone'),
                val = hiddenFieldd.val();
            hiddenFieldd.val("false");

            var hiddenFielddd = jQuery('#sticky-menu-share'),
                val = hiddenFielddd.val();
            hiddenFielddd.val("false");


        }
        else if (hiddenField.val() == "false"){
            jQuery('#sticky-menu-slide-plane').animate({
                right:"-220px"
            }, 500);
        }
    });

    jQuery("#sticky").on('mouseleave', function() {
        jQuery('#sticky-menu-slide-plane').stop().animate({
            right:"-220px"
        }, 500);
        jQuery('#sticky-menu-slide-phone').stop().animate({
            right:"-220px"
        }, 500);
        jQuery('#sticky-menu-slide-share').stop().animate({
            right:"-220px"
        }, 500);

        var hiddenField = jQuery('#sticky-menu-plane'),
            val = hiddenField.val();
        hiddenField.val("false");

        var hiddenFieldd = jQuery('#sticky-menu-phone'),
            val = hiddenFieldd.val();
        hiddenFieldd.val("false");

        var hiddenFielddd = jQuery('#sticky-menu-share'),
            val = hiddenFielddd.val();
        hiddenFielddd.val("false");
    });

    // gestion des ancres pour les onglets
    if (window.location.href.indexOf("#") > 0) {
        var anchor = window.location.href.substring(window.location.href.indexOf("#")+1, window.location.href.length);
        anchor = anchor.substring(anchor.indexOf("?"), anchor.length);
        jQuery("#"+anchor+"_link").click();
        if (anchor != "documents" && anchor != "presentation" && anchor != "expert") {
            jQuery(".col-droite div.pub-bloc div.freezone").hide();
            jQuery(".col-droite-2").hide();
        }
    }
    jQuery(".nav-tabs a").on("click", function(){
        var link = window.location.href;
        var anchor = jQuery(this).attr("href");
        console.log(anchor);
        //affichage ou non de la freezone en col de droite
        if (anchor != "#documents" && anchor != "#presentation" && anchor != "#expert") {
            jQuery(".col-droite div.pub-bloc div.freezone").hide();
            jQuery(".col-droite-2").hide();
        }
        else {
            jQuery(".col-droite div.pub-bloc div.freezone").show();
            jQuery(".col-droite-2").show();
        }
        //ajout de l'ancre dans l'url
        if (window.location.href.indexOf("#") > 0) {
            link = window.location.href.substring(0, window.location.href.indexOf("#"));
        }
        window.location.href= link + anchor;
    });

    var nbOnglets = jQuery(".nav-tabs li").length;
    jQuery(".nav-tabs li").css("width", ((jQuery(".nav-tabs").width()/jQuery(".nav-tabs li").length)*100)/jQuery(".nav-tabs").width()+"%");

    // gestion erreur formulaire
    jQuery('#newsletter-form').ready(function(jQuery){
        var form = jQuery('#newsletter-form');
        var inputField = form.find('.newsletter-input');
        form.submit(function(e){
            var email = inputField.val();
            if(email.indexOf("@",1) == -1 || email.indexOf(".", email.indexOf("@",1)+1) == -1 || email.length <= 5){
                inputField.siblings('.form-error').remove();
                inputField.after('<p class="form-error color-red-eti padding-left-10">Veuillez saisir une adresse email valide.</p>');
                e.preventDefault();
            }
        });
    });

    // gestion des popins
    jQuery("a.services-popin").click(function() {
        if (!jQuery("#services-popin").html()) {
            var ui = '<div id="services-popin" role="dialog" style="display:none;z-index:1001;">' + '<iframe frameborder="0" style="width:100%;height:98%;" src=""></iframe>' + '</div>';
            jQuery("body").append(ui);
        }
        window.scrollTo(0, 0);
        jQuery("#services-popin").dialog({
            modal: true,
            title: jQuery(this).attr("title"),
            width: 920,
            top: 100,
            closeText: "Fermer X",
            open: function() {
                window.scrollTo(0, 0);
                return false;
            },
            close: function() {
                jQuery("#services-popin").remove();
                return false;
            }
        });
        jQuery("#services-popin").dialog("widget").attr("id", "design-services-popin").css("position", "fixed");
        jQuery("#services-popin iframe").attr("src", jQuery(this).attr("href"));
        jQuery("#services-popin").dialog("widget").css("top", "70px");

        jQuery("#design-services-popin").css("left", ((jQuery(window).width()-jQuery("#design-services-popin").width())/2));
        jQuery("#design-services-popin").css("height", "295px");
        return false;
    });

    jQuery('.visiteur.panel-title a').click(function(event) {

        jQuery('#accordion-1').children().each(function(index, element){
            var elem = jQuery(element).find('a').attr('id') == event.currentTarget.id;
            console.log(elem);
            if (jQuery(element).find('i').hasClass('fa-angle-up') && !(elem)) {
                jQuery(jQuery(element).find('span')).removeClass('color-red');
                jQuery(jQuery(element).find('i')).toggleClass('fa-angle-up fa-angle-down');
                console.log('toto1');
            }
        });

        if(jQuery(event.target).hasClass("accordion-toggle") ) {
            jQuery(event.target).addClass('disabled');
            jQuery(event.target.childNodes[1]).toggleClass('color-red');
            jQuery(event.target.childNodes[2]).toggleClass('fa-angle-up fa-angle-down');
            setTimeout(function(){ jQuery(event.target).removeClass('disabled'); }, 1000);
            console.log('toto2');
        }

        if(jQuery(event.target).hasClass("title-element")) {
            jQuery(event.target).addClass('disabled');
            jQuery(event.target).toggleClass('color-red');
            jQuery(event.target).next().toggleClass('fa-angle-up fa-angle-down');
            setTimeout(function(){ jQuery(event.target).closest('a').removeClass('disabled'); }, 1000);
            console.log('toto3');
        }

        if(jQuery(event.target).hasClass("fa")) {
            jQuery(event.target).addClass('disabled');
            jQuery(event.target).prev().toggleClass('color-red');
            jQuery(event.target).toggleClass('fa-angle-up fa-angle-down');
            setTimeout(function(){ jQuery(event.target).closest('a').removeClass('disabled'); }, 1000);
            console.log('toto4');
        }
    });

    jQuery('.offres.panel-title a').click(function(event) {

        jQuery('#accordion-1').children().each(function(index, element){
            var elem = jQuery(element).find('a').attr('id') == event.currentTarget.id;
            if (jQuery(element).find('i').hasClass('fa-angle-up') && !(elem)) {
                jQuery(jQuery(element).find('span')).removeClass('color-red');
                jQuery(jQuery(element).find('i')).toggleClass('fa-angle-up fa-angle-down');
            }
        });

        if(jQuery(event.target).hasClass("accordion-toggle") ) {
            jQuery(event.target).addClass('disabled');
            jQuery(event.target.childNodes[1]).toggleClass('color-red');
            jQuery(event.target.childNodes[2]).toggleClass('fa-angle-up fa-angle-down');
            setTimeout(function(){ jQuery(event.target).closest('a').removeClass('disabled'); }, 1000);
        }

        if(jQuery(event.target).hasClass("title-element") ) {
            jQuery(event.target).closest('a').addClass('disabled');
            jQuery(event.target).toggleClass('color-green');
            jQuery(event.target).next().toggleClass('fa-angle-up fa-angle-down');
            setTimeout(function(){ jQuery(event.target).closest('a').removeClass('disabled'); }, 1000);
        }

        if(jQuery(event.target).hasClass("fa") ) {
            jQuery(event.target).closest('a').addClass('disabled');
            jQuery(event.target).prev().toggleClass('color-red');
            jQuery(event.target).toggleClass('fa-angle-up fa-angle-down');
            setTimeout(function(){ jQuery(event.target).closest('a').removeClass('disabled'); }, 1000);
        }
    });

    jQuery('.tout-ouvrir').toggle(function() {
        jQuery('.panel-collapse:not(".in")').collapse('show');
        jQuery('#accordion-1').children().each(function(index, element){
            if (jQuery(element).find('i').hasClass('fa-angle-up')) {
                jQuery(jQuery(element).find('span')).removeClass('color-red');
                jQuery(jQuery(element).find('i')).toggleClass('fa-angle-up fa-angle-down');
            }
        });
        jQuery('.panel-title a i').each(function(index, element) {
            jQuery( element ).toggleClass('fa-angle-down fa-angle-up');
        });
        jQuery('.tout-ouvrir').text('Tout fermer');
    }, function() {
        jQuery('.panel-collapse.in').collapse('hide');
        jQuery('.panel-title a i').each(function(index, element) {
            jQuery( element ).toggleClass('fa-angle-down fa-angle-up');
        });
        jQuery('.tout-ouvrir').text('Tout ouvrir');
    });

    jQuery(".zoning")
        .click(
            function(a){
                if(jQuery(this).find("a").attr("href")!=undefined)
                    window.location=jQuery(this).find("a").attr("href")
                return false;
            }
        );

    jQuery(".tab-content .documents-smint").css({"minHeight" : jQuery(".tab-content .col-droite").height() + 86});

    jQuery(".tab-content .presentation-smint").css({"minHeight" : jQuery(".tab-content .col-droite-2").height() + 60});
    jQuery(".tab-content .expert-smint").css({"minHeight" : jQuery(".tab-content .col-droite-2").height() + 60});

});

(function() {
    var v = document.getElementsByClassName("youtube-player");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = labnolThumb(v[n].dataset.id);
        p.onclick = labnolIframe;
        v[n].appendChild(p);
    }
})();

function labnolThumb(id) {
    return '<img class="youtube-thumb" src="//i.ytimg.com/vi/' + id + '/hqdefault.jpg"><div class="play-button"></div>';
}

function labnolIframe() {
    var iframe = document.createElement("iframe");
    iframe.setAttribute("src", "//www.youtube.com/embed/" + this.parentNode.dataset.id + "?autoplay=1&autohide=2&border=0&wmode=opaque&enablejsapi=1&controls=0&showinfo=0");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("id", "youtube-iframe");
    this.parentNode.replaceChild(iframe, this);
}

function simulationOnglets(lien){
    var link = window.location.href;
    var anchor = lien;

    //affichage ou non de la freezone en col de droite
    if (anchor != "#documents" && anchor != "#presentation" && anchor != "#expert") {
        jQuery(".col-droite div.pub-bloc div.freezone").hide();
        jQuery(".col-droite-2").hide();
    }
    else {
        jQuery(".col-droite div.pub-bloc div.freezone").show();
        jQuery(".col-droite-2").show();
    }
    //ajout de l'ancre dans l'url
    if (window.location.href.indexOf("#") > 0) {
        link = window.location.href.substring(0, window.location.href.indexOf("#"));
    }
    console.log(link);
    jQuery(anchor+"_link").click();
}