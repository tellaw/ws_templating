// Home javascript

jQuery( window ).resize(function($) {
    if (jQuery( "#sub-menu" ).hasClass( "fxd" )) {
        jQuery('#sub-menu').css('margin-top', $('#main-header').height());
    } else if (!jQuery( "#sub-menu" ).hasClass( "fxd" )) {
    }
});

jQuery( window ).ready(function($) {
    if (jQuery( "#sub-menu" ).hasClass( "fxd" )) {
        jQuery('#sub-menu').css('margin-top', $('#main-header').height());
    } else if (!jQuery( "#sub-menu" ).hasClass( "fxd" )) {
    }
});

jQuery(document).ready(function($) {
    if (($(window).width() >= 992) && ($(window).scrollTop() == 0)) {
        $("#navbar-x").addClass("in");
        $("#button-menu-header").css('cssText', 'display: none !important');
    }

    if (($(window).width() >= 992) && ($(window).scrollTop() == 0)) {
        $("#navbar-x").addClass("in");
        $("#button-menu-header").css('cssText', 'display: none !important');
    }

    $(window).scroll(function(){
        if (($(window).width() >= 992) && ($(window).scrollTop() == 0)) {
            $("#navbar-x").addClass("in");
            $("#advanced-search-box").css('cssText', 'display: block !important');
            $("#button-menu-header").css('cssText', 'display: none !important');
            $("#div-menu-header").css('cssText', 'display: none !important');

        } else if (($(window).width() >= 992) && ($(window).scrollTop() != 0)) {
            $("#navbar-x").removeClass("in");
            $("#advanced-search-box").hide();
            $("#button-menu-header").css('cssText', 'display: inline-block !important');
            $("#div-menu-header").css('cssText', 'display: block !important');

        }
    });

    $('.subMenu').smint({
        'scrollSpeed' : 1000
    });

    $('body').scrollspy({target: ".subMenu", offset: 50});

    $(".btn-xpnd-smint").click(function(){

        if ($(this).text() == "+") {
            $(this).text('-');
            $(this).css("background-color", "#9EB504");
            $(this).css("color", "#fff");

        } else if ($(this).text() == "-") {
            $(this).text('+');
            $(this).css("background-color", "#fff");
            $(this).css("color", "#9EB504");
        }

    });

    App.init();
    //StyleSwitcher.initStyleSwitcher();
    $('.your-class').slick({
        dots: true,
        arrows: false,
        //autoplay: true,
        //autoplaySpeed: 3000
    });

    $(".owl-carousel").owlCarousel({
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
    if ($(window).width() < 1024) {eventStick='click'} else {eventStick='mouseenter'};

    $('#sticky-menu-phone').on(eventStick, function() {

        var hiddenField = $('#sticky-menu-phone'),
            val = hiddenField.val();
        hiddenField.val(val === "true" ? "false" : "true");

        if (hiddenField.val() == "true") {
            $('#sticky-menu-slide-phone').stop().animate({
                right:"40px"
            }, 500);
            $('#sticky-menu-slide-share').stop().animate({
                right:"-220px"
            }, 500);
            $('#sticky-menu-slide-plane').stop().animate({
                right:"-220px"
            }, 500);

            var hiddenFieldd = $('#sticky-menu-share'),
                val = hiddenFieldd.val();
            hiddenFieldd.val("false");

            var hiddenFielddd = $('#sticky-menu-plane'),
                val = hiddenFielddd.val();
            hiddenFielddd.val("false");

        }
        else if (hiddenField.val() == "false"){
            $('#sticky-menu-slide-phone').animate({
                right:"-220px"
            }, 500);
        }
    });

    $('#sticky-menu-share').on(eventStick, function() {

        var hiddenField = $('#sticky-menu-share'),
            val = hiddenField.val();
        hiddenField.val(val === "true" ? "false" : "true");

        if (hiddenField.val() == "true") {
            $('#sticky-menu-slide-share').stop().animate({
                right:"40px"
            }, 500);
            $('#sticky-menu-slide-phone').stop().animate({
                right:"-220px"
            }, 500);
            $('#sticky-menu-slide-plane').stop().animate({
                right:"-220px"
            }, 500);

            var hiddenFieldd = $('#sticky-menu-phone'),
                val = hiddenFieldd.val();
            hiddenFieldd.val("false");

            var hiddenFielddd = $('#sticky-menu-plane'),
                val = hiddenFielddd.val();
            hiddenFielddd.val("false");


        }
        else if (hiddenField.val() == "false"){
            $('#sticky-menu-slide-share').animate({
                right:"-220px"
            }, 500);
        }
    });

    $('#sticky-menu-plane').on(eventStick, function() {

        var hiddenField = $('#sticky-menu-plane'),
            val = hiddenField.val();
        hiddenField.val(val === "true" ? "false" : "true");

        if (hiddenField.val() == "true") {
            $('#sticky-menu-slide-plane').stop().animate({
                right:"40px"
            }, 500);
            $('#sticky-menu-slide-phone').stop().animate({
                right:"-220px"
            }, 500);
            $('#sticky-menu-slide-share').stop().animate({
                right:"-220px"
            }, 500);

            var hiddenFieldd = $('#sticky-menu-phone'),
                val = hiddenFieldd.val();
            hiddenFieldd.val("false");

            var hiddenFielddd = $('#sticky-menu-share'),
                val = hiddenFielddd.val();
            hiddenFielddd.val("false");


        }
        else if (hiddenField.val() == "false"){
            $('#sticky-menu-slide-plane').animate({
                right:"-220px"
            }, 500);
        }
    });

    $("#sticky").on('mouseleave', function() {
        $('#sticky-menu-slide-plane').stop().animate({
            right:"-220px"
        }, 500);
        $('#sticky-menu-slide-phone').stop().animate({
            right:"-220px"
        }, 500);
        $('#sticky-menu-slide-share').stop().animate({
            right:"-220px"
        }, 500);

        var hiddenField = $('#sticky-menu-plane'),
            val = hiddenField.val();
        hiddenField.val("false");

        var hiddenFieldd = $('#sticky-menu-phone'),
            val = hiddenFieldd.val();
        hiddenFieldd.val("false");

        var hiddenFielddd = $('#sticky-menu-share'),
            val = hiddenFielddd.val();
        hiddenFielddd.val("false");
    });

    // gestion des ancres pour les onglets
    if (window.location.href.indexOf("#") > 0) {
        var anchor = window.location.href.substring(window.location.href.indexOf("#")+1, window.location.href.length);
        anchor = anchor.substring(anchor.indexOf("?"), anchor.length);
        jQuery("#"+anchor+"_link").click();
    }
    $(".nav-tabs a").on("click", function(){
        var link = window.location.href;
        var anchor = $(this).attr("href");
        if (window.location.href.indexOf("#") > 0) {
            link = window.location.href.substring(0, window.location.href.indexOf("#"));
        }
        window.location.href= link + anchor;
    })

    // gestion erreur formulaire
    $('#newsletter-form').ready(function($){
        var form = $('#newsletter-form');
        var inputField = form.find('.newsletter-input');
        form.submit(function(e){
            var email = inputField.val();
            if(email.indexOf("@",1) == -1 || email.indexOf(".", email.indexOf("@",1)+1) == -1 || email.length <= 5){
                inputField.siblings('.form-error').remove();
                inputField.after('<p class="form-error color-red-eti padding-left-10">Veuillez saisir une adresse e-mail valide.</p>');
                e.preventDefault();
            }
        });
    });

    // gestion des popins
    $("a.services-popin").click(function() {
        if (!$("#services-popin").html()) {
            var ui = '<div id="services-popin" role="dialog" style="display:none;z-index:1001;">' + '<iframe frameborder="0" style="width:100%;height:98%;" src=""></iframe>' + '</div>';
            $("body").append(ui);
        }
        window.scrollTo(0, 0);
        $("#services-popin").dialog({
            modal: true,
            title: $(this).attr("title"),
            width: 920,
            top: 100,
            closeText: "Fermer X",
            open: function() {
                window.scrollTo(0, 0);
                return false;
            },
            close: function() {
                $("#services-popin").remove();
                return false;
            }
        });
        $("#services-popin").dialog("widget").attr("id", "design-services-popin").css("position", "fixed");
        $("#services-popin iframe").attr("src", $(this).attr("href"));
        $("#services-popin").dialog("widget").css("top", "70px");

        $("#design-services-popin").css("left", (($(window).width()-$("#design-services-popin").width())/2));
        $("#design-services-popin").css("height", "295px");
        return false;
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