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

//gestion back des onglets page domaines/secteurs/offres
jQuery(document).ready(function() {
    // add a hash to the URL when the user clicks on a tab
    jQuery('a[data-toggle="tab"]').on('click', function(e) {
        history.pushState(null, null, jQuery(this).attr('href'));
    });
    // navigate to a tab when the history changes
    window.addEventListener("popstate", function(e) {
        var activeTab = jQuery('[href=' + location.hash + ']');
        if (activeTab.length) {
            activeTab.tab('show');
        } else {
            jQuery('.nav-tabs a:first').tab('show');
        }
    });
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
        loop: true,
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

    if (jQuery(window).width() >= 1024) {
        jQuery('#sticky-menu-phone').wrap('<a class="switch-popin" href="/switch.html"></a>');
    };

    // !!!! ATTENTION / À MODIFIER LORS DU CHANGEMENT DE HEADER !!!!!
    if (jQuery(window).width() >= 1024) {
        var link;
        if(jQuery("#register_link-connected").hasClass("no-connect-header")){link = "/newsletter.html"}else{link = "/myti/newsletter.html"};
        jQuery('#sticky-menu-plane').wrap('<a href='+link+'></a>');
    };

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
    jQuery("#menu-smint > .nav-tabs a").on("click", function(){
        var link = window.location.href;
        var anchor = jQuery(this).attr("href");

        //affichage ou non de la freezone en col de droite
        if (anchor == "#offre-commerciale" || anchor == "#details") {
            jQuery(".col-droite-3").hide();
            jQuery(".col-droite-4").hide();
        }
        else if (anchor != "#documents" && anchor != "#presentation" && anchor != "#expert") {
            jQuery(".col-droite div.pub-bloc div.freezone").hide();
            jQuery(".col-droite-2").hide();
            jQuery(".col-droite-4").show();
        }
        else {
            console.log("ici");
            jQuery(".col-droite div.pub-bloc div.freezone").show();
            jQuery(".col-droite-2").show();
            jQuery(".col-droite-4").show();
        }
        //ajout de l'ancre dans l'url
        if (window.location.href.indexOf("#") > 0) {
            link = window.location.href.substring(0, window.location.href.indexOf("#"));
        }
        window.location.href= link + anchor;
    });

    var nbOnglets = jQuery("#menu-smint > .nav-tabs li").length;
    jQuery("#menu-smint > .nav-tabs li").css("width", ((jQuery("#menu-smint > .nav-tabs").width()/jQuery("#menu-smint > .nav-tabs li").length)*100)/jQuery("#menu-smint > .nav-tabs").width()+"%");

    var nbOnglets = jQuery(".sommaire-col-dim .nav-tabs li").length;
    jQuery(".sommaire-col-dim .nav-tabs li").css("width", ((jQuery(".sommaire-col-dim .nav-tabs").width()/jQuery(".sommaire-col-dim .nav-tabs li").length)*100)/jQuery(".sommaire-col-dim .nav-tabs").width()+"%");

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

    // gestion des popins services
    jQuery("a.services-popin").click(function() {
        if (!jQuery("#services-popin").html()) {
            var ui = '<div id="services-popin" role="dialog" style="display:none;z-index:1001;">' + '<iframe frameborder="0" style="width:100%;height:98%;" src=""></iframe>' + '</div>';
            jQuery("body").append(ui);
        }
        var top = jQuery(this).offset().top;
        jQuery("#services-popin").dialog({
            modal: true,
            title: jQuery(this).attr("title"),
            width: 920,
            closeText: "X",
            open: function() {
                window.scrollTo(0, top - jQuery(window).height() / 2);
                return false;
            },
            close: function() {
                jQuery("#services-popin").remove();
                return false;
            }
        });
        jQuery("#services-popin").dialog("widget").attr("id", "design-services-popin").css("position", "absolute");
        jQuery("#services-popin iframe").attr("src", jQuery(this).attr("href"));
        if(top > "420"){
            jQuery("#services-popin").dialog("widget").css("top", top - jQuery(window).height() / 3);
        }
        else {
            jQuery("#services-popin").dialog("widget").css("top", "150px");
        }

        jQuery("#design-services-popin").css("left", ((jQuery(window).width()-jQuery("#design-services-popin").width())/2));
        jQuery("#design-services-popin").css("height", "295px");
        return false;
    });

    // gestion de popin switch
    jQuery("a.switch-popin").click(function() {
        if (!jQuery("#switch-popin").html()) {
            var ui = '<div id="switch-popin" role="dialog" style="display:none;z-index:1001;">' + '<iframe frameborder="0" style="width:100%;height:98%;" src=""></iframe>' + '</div>';
            jQuery("body").append(ui);
        }
        var top = jQuery(this).offset().top;
        jQuery("#switch-popin").dialog({
            modal: true,
            title: jQuery(this).attr("title"),
            width: 600,
            closeText: "X",
            open: function() {
                window.scrollTo(0, top - jQuery(window).height() / 2);
                return false;
            },
            close: function() {
                jQuery("#switch-popin").remove();
                return false;
            }
        });
        jQuery("#switch-popin").dialog("widget").attr("id", "design-switch-popin").css("position", "absolute");
        jQuery("#switch-popin iframe").attr("src", jQuery(this).attr("href"));
        if(top > "420"){
            jQuery("#switch-popin").dialog("widget").css("top", top - jQuery(window).height() / 3);
        }
        else {
            jQuery("#switch-popin").dialog("widget").css("top", "150px");
        }

        jQuery("#design-switch-popin").css("left", ((jQuery(window).width()-jQuery("#design-switch-popin").width())/2));
        jQuery("#design-switch-popin").css("height", "295px");
        return false;
    });

    jQuery('.panel-title a').click(function(event) {

        if(jQuery(event.target).hasClass("accordion-toggle") ) {
            jQuery(event.target).addClass('disabled');
            jQuery(event.target.childNodes[1]).toggleClass('color-red');
            jQuery(event.target.childNodes[2]).toggleClass('fa-angle-up fa-angle-down');
            setTimeout(function(){ jQuery(event.target).removeClass('disabled'); }, 1000);
        }

        if(jQuery(event.target).hasClass("title-element")) {
            jQuery(event.target).addClass('disabled');
            jQuery(event.target).toggleClass('color-red');
            jQuery(event.target).next().toggleClass('fa-angle-up fa-angle-down');
            setTimeout(function(){ jQuery(event.target).closest('a').removeClass('disabled'); }, 1000);
        }

        if(jQuery(event.target).hasClass("fa")) {
            jQuery(event.target).addClass('disabled');
            jQuery(event.target).prev().toggleClass('color-red');
            jQuery(event.target).toggleClass('fa-angle-up fa-angle-down');
            setTimeout(function(){ jQuery(event.target).closest('a').removeClass('disabled'); }, 1000);
        }
    });

    var active = true;
    jQuery('.tout-ouvrir').click(function () {
        if (active) {
            active = false;
            jQuery('.panel-collapse').collapse('show');
            jQuery('#accordion-1 .panel-title a').each(function(index, element) {
                if (jQuery(this).find('i').hasClass('fa-angle-down')) {
                    jQuery(this).find('i').toggleClass('fa-angle-down fa-angle-up');
                    jQuery(this).find('span').addClass('color-red');
                }
            });
            jQuery('.tout-ouvrir').text('Tout fermer');
        } else {
            active = true;
            jQuery('.panel-collapse').collapse('hide');
            jQuery('#accordion-1 .panel-title a').each(function(index, element) {
                if (jQuery(this).find('i').hasClass('fa-angle-up')) {
                    jQuery(this).find('i').toggleClass('fa-angle-up fa-angle-down');
                    jQuery(this).find('span').removeClass('color-red');
                }
            });
            jQuery('.tout-ouvrir').text('Tout ouvrir');
        }
    });

    /*jQuery('#accordion-1').on('shown.bs.collapse', function (e) {
        var offset = jQuery(this).find('.collapse.in').prev('.panel-heading');
        if(offset) {
            jQuery('html,body').animate({
                scrollTop: jQuery(offset).offset().top -180
            }, 500);
        }
        if (active) $('#accordion .in').collapse('hide');
    });*/

    jQuery(".zoning")
        .click(
            function(a){
                if(jQuery(this).find("a").attr("href")!=undefined)
                    window.location=jQuery(this).find("a").attr("href")
                return false;
            }
        );

    if (jQuery(window).width() >= 1024) {
        jQuery(".tab-content .documents-smint").css({"minHeight": jQuery(".tab-content .col-droite").height() + 86});

        jQuery(".tab-content-domaine .presentation-smint").css({"minHeight": jQuery(".tab-content .col-droite-2").height() + 60});
        jQuery(".tab-content-domaine .expert-smint").css({"minHeight": jQuery(".tab-content .col-droite-2").height() + 60});

        jQuery(".tab-content-rubrique .presentation-smint").css({"minHeight": jQuery(".tab-content .col-droite-3").height() + 60});
        jQuery(".tab-content-rubrique .expert-smint").css({"minHeight": jQuery(".tab-content .col-droite-3").height() + 60});
    }

    /* Correction des ancres */
    var anchor = location.hash.substring(1);
    if (anchor.length > 0) {
        var elems = jQuery('[data-anchor="' + anchor + '"]');

        if (elems.length > 0) {
            var offsetCorrection = 50;

            var branding = jQuery('#branding');

            if (branding.length > 0 && branding.css('position') === 'fixed') {
                offsetCorrection += branding.height();
            }

            jQuery('html, body').animate({ scrollTop: elems.offset().top - offsetCorrection }, 200 );
        }
    }

    // gérer les warning dans les listing rubrique
    jQuery( ".zoning.warning" ).parents('.panel-default').find(".my-warning-to-display").css("display", "inline");

    // gestion datepicker
    // Date range
    jQuery('#avant').datepicker({
        altField: "#datepicker",
        closeText: 'Fermer',
        prevText: 'Précédent',
        nextText: 'Suivant',
        currentText: 'Aujourd\'hui',
        monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
        dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        weekHeader: 'Sem.',
        firstDay: 1 ,
        dateFormat: 'dd/mm/yy',
        prevText: "<i class='fa fa-angle-left font-size-25'></i>",
        nextText: "<i class='fa fa-angle-right font-size-25'></i>",
        onSelect: function( selectedDate )
        {
            jQuery('#apres').datepicker('option', 'minDate', selectedDate);
        }
    });
    jQuery('#apres').datepicker({
        altField: "#datepicker",
        closeText: 'Fermer',
        prevText: 'Précédent',
        nextText: 'Suivant',
        currentText: 'Aujourd\'hui',
        monthNames: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        monthNamesShort: ['Janv.', 'Févr.', 'Mars', 'Avril', 'Mai', 'Juin', 'Juil.', 'Août', 'Sept.', 'Oct.', 'Nov.', 'Déc.'],
        dayNames: ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'],
        dayNamesShort: ['Dim.', 'Lun.', 'Mar.', 'Mer.', 'Jeu.', 'Ven.', 'Sam.'],
        dayNamesMin: ['D', 'L', 'M', 'M', 'J', 'V', 'S'],
        weekHeader: 'Sem.',
        firstDay: 1 ,
        dateFormat: 'dd/mm/yy',
        prevText: "<i class='fa fa-angle-left font-size-25'></i>",
        nextText: "<i class='fa fa-angle-right font-size-25'></i>",
        onSelect: function( selectedDate )
        {
            jQuery('#avant').datepicker('option', 'maxDate', selectedDate);
        }
    });

    $('#sticky-menu-eye').hover( function() {
        $('#sticky-menu-slide-eye').animate({
            left: "42px"
        }, 300);

        var hiddenField = $('#sticky-menu-eye'),
            val = hiddenField.val();
        hiddenField.val(val === "true" ? "false" : "true");

        if (hiddenField.val() == "true") {
            $('#sticky-menu-slide-aplus').animate({
                left: "-155px"
            }, 300);
            $('#sticky-menu-slide-amoins').animate({
                left: "-155px"
            }, 300);

            var hiddenFieldd = $('#sticky-menu-aplus'),
                val = hiddenFieldd.val();
            hiddenFieldd.val("false");

            var hiddenFielddd = $('#sticky-menu-amoins'),
                val = hiddenFielddd.val();
            hiddenFielddd.val("false");

        } else if (hiddenField.val() == "false") {
            $('#sticky-menu-slide-eye').animate({
                left: "-155px"
            }, 300);
        }
    });

    $('#sticky-menu-aplus').hover(function() {
        $('#sticky-menu-slide-aplus').animate({
            left: "42px"
        }, 300);

        var hiddenField = $('#sticky-menu-aplus'),
            val = hiddenField.val();
        hiddenField.val(val === "true" ? "false" : "true");

        if (hiddenField.val() == "true") {
            $('#sticky-menu-slide-eye').animate({
                left: "-155px"
            }, 300);
            $('#sticky-menu-slide-amoins').animate({
                left: "-155px"
            }, 300);

            var hiddenFieldd = $('#sticky-menu-eye'),
                val = hiddenFieldd.val();
            hiddenFieldd.val("false");

            var hiddenFielddd = $('#sticky-menu-amoins'),
                val = hiddenFielddd.val();
            hiddenFielddd.val("false");


        } else if (hiddenField.val() == "false") {
            $('#sticky-menu-slide-aplus').animate({
                left: "-155px"
            }, 300);
        }
    });

    $('#sticky-menu-amoins').hover( function() {
        $('#sticky-menu-slide-amoins').animate({
            left: "42px"
        }, 300);

        var hiddenField = $('#sticky-menu-amoins'),
            val = hiddenField.val();
        hiddenField.val(val === "true" ? "false" : "true");

        if (hiddenField.val() == "true") {
            $('#sticky-menu-slide-eye').animate({
                left: "-155px"
            }, 300);
            $('#sticky-menu-slide-aplus').animate({
                left: "-155px"
            }, 300);

            var hiddenFieldd = $('#sticky-menu-eye'),
                val = hiddenFieldd.val();
            hiddenFieldd.val("false");

            var hiddenFielddd = $('#sticky-menu-aplus'),
                val = hiddenFielddd.val();
            hiddenFielddd.val("false");


        } else if (hiddenField.val() == "false") {
            $('#sticky-menu-slide-amoins').animate({
                left: "-155px"
            }, 300);
        }
    });

    $('#sticky-menu-eye').on('click', function() {
        window.open("http://preprod.techniques-ingenieur.fr");
    });

    $('#sticky-menu-slide-eye').on('click', function() {
        window.open("http://preprod.techniques-ingenieur.fr");
    });
    var currentZoom = 1;
    $('#sticky-menu-amoins').on('click', function() {  currentZoom -= 0.1;
        $('body').css({
            zoom: currentZoom,
            '-moz-transform': 'scale(' + currentZoom + ')'
        });
    });
    $('#sticky-menu-aplus').on('click', function() {  currentZoom += 0.1;
        $('body').css({
            zoom: currentZoom,
            '-moz-transform': 'scale(' + currentZoom + ')'
        });
    });
    $('#sticky-menu-slide-amoins').on('click', function() {  currentZoom += 0.1;
        $('body').css({
            zoom: currentZoom,
            '-moz-transform': 'scale(' + currentZoom + ')'
        });
    });
    $('#sticky-menu-slide-aplus').on('click', function() {  currentZoom -= 0.1;
        $('body').css({
            zoom: currentZoom,
            '-moz-transform': 'scale(' + currentZoom + ')'
        });
    });
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
    jQuery(anchor+"_link").click();
}

<!--  Toggle DIV JS -->
function toggle_div(bouton, id) {
    var div = document.getElementById(id);
    if(div.style.display=="none") {
        div.style.display = "block";
    } else {
        div.style.display = "none";
    }
}
