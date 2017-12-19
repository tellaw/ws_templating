// Home javascript
$ = jQuery;

$(window).resize(function () {
    if ($("#sub-menu").hasClass("fxd")) {
        $('#sub-menu').css('margin-top', $('#main-header').height());
    }
    //    else if (!$("#sub-menu").hasClass("fxd")) {}

    // Menu mobile
    if(navigator.userAgent.match(/(iPhone|Android|BlackBerry|iPad)/i) && (window.matchMedia("(max-width:1024px)").matches)){
        $("#button-menu-header").show();
        $("#navbar-x").removeClass("in");
    }
    window.addEventListener("orientationchange", function() {
        if(window.matchMedia("(max-width:1024px)").matches){
            $("#button-menu-header").show();
            $("#navbar-x").removeClass("in");
        }
        else {
            $("#button-menu-header").hide();
            $("#navbar-x").addClass("in");
        }
    }, false);
});
$(window).ready(function () {
    if ($("#sub-menu").hasClass("fxd")) {
        $('#sub-menu').css('margin-top', $('#main-header').height());
    }
    if(navigator.userAgent.match(/(iPhone|Android|BlackBerry|iPad)/i) && (window.matchMedia("(min-width:1025px)").matches)){
        $("#ti_actu_submenu_container").show();
    }
    //    else if (!$("#sub-menu").hasClass("fxd")) {}
});

//gestion back des onglets page domaines/secteurs/offres
$(document).ready(function () {
    // add a hash to the URL when the user clicks on a tab
    $('a[data-toggle="tab"]').on('click', function (e) {
        history.pushState(null, null, $(this).attr('href'));
    });
    // navigate to a tab when the history changes
    window.addEventListener("popstate", function (e) {
        if (location.hash !== "") {
            var activeTab = $('[href=' + location.hash + ']');
            if (activeTab.length) {
                activeTab.tab('show');
            }
            else {
                $('.nav-tabs a:first').tab('show');
            }
        }
    });
    $('li.ressources-doc').append($('#ressources-doc').removeClass('hide'));
    $('li.magazine-actualite').append($('#magazine-actualite').removeClass('hide'));

    $('ul[id^="menu-footer-"] > li > a').after('<div class="eti-footer-devider margin-bottom-15 margin-top-10"></div>');

    $(function () {
        $("#query").autocomplete({
            delay: 100
            , minLength: 3
            , source: function (request, response) {
                request_term = request.term;
                var params = {
                    q: request_term
                };
                $.ajax({
                    type: "POST"
                    , async: true
                    , dataType: "json"
                    , url: '/suggest-ajax.do'
                    , data: params
                    , success: function (data) {
                        response(data);
                    }
                });
                return false;
            }
        });
        $("#query").autocomplete( "widget" ).css({ top: $("#query").offset().top + 26, position: "fixed" });

        if ($("#query-2").length) {
            $("#query-2").autocomplete({
                delay: 100
                , minLength: 3
                , source: function (request, response) {
                    var scopes = $("#searchCommand2 input[name='scope']");
                    var scope = scopes !== undefined && scopes.length > 0 ? scopes[0].value : "";
                    request_term = request.term;
                    var params = {
                        q: request_term
                    };
                    if (scope && scope != "") {params = {q:request_term,scope:scope};}
                    $.ajax({
                        type: "POST"
                        , async: true
                        , dataType: "json"
                        , url: '/suggest-ajax.do'
                        , data: params
                        , success: function (data) {
                            response(data);
                        }
                    });
                    return false;
                }
            });
            $("#query-2").autocomplete( "widget" ).css({ top: $("#query-2").offset().top + 40,position: "absolute" });
        }

        if ($("#query-3").length) {
            $("#query-3").autocomplete({
                delay: 100
                , minLength: 3
                , source: function (request, response) {
                    var scopes = $("#searchCommand3 input[name='scope']");
                    var scope = scopes !== undefined && scopes.length > 0 ? scopes[0].value : "";
                    request_term = request.term;
                    var params = {
                        q: request_term
                    };
                    if (scope && scope != "") {params = {q:request_term,scope:scope};}
                    $.ajax({
                        type: "POST"
                        , async: true
                        , dataType: "json"
                        , url: '/suggest-ajax.do'
                        , data: params
                        , success: function (data) {
                            response(data);
                        }
                    });
                    return false;
                }
            });
            $("#query-3").autocomplete( "widget" ).css({ top: $("#query-3").offset().top + 280, position: "absolute" })
                .mouseover(function() {
                    $("#ressources-doc").show();
                    if(!$("li.ressources-doc").hasClass("bg-active")){
                        $("li.ressources-doc").addClass("bg-active");
                    };
                })
                .mouseleave(function() {
                    $("#ressources-doc").removeAttr("style");

                    var url = window.location.href;
                    if(url.indexOf('/ressources-documentaires') == -1 && url.indexOf('/base-documentaire') == -1){
                        $("li.ressources-doc").removeClass("bg-active");
                        return false;
                    }
                });
        }
    });

    if (($(window).width() > 1024) && ($(window).scrollTop() == 0)) {
        $("#navbar-x").addClass("in");
        $("#button-menu-header").css('cssText', 'display: none !important');
    }

    $(window).scroll(function () {
        if (($(window).width() > 1024) && ($(window).scrollTop() == 0)) {
            var logo = $("#logo-header").attr("src");
            logo=logo.replace("/images/logo-eti-small.png","/images/logo-eti.png");
            $("#navbar-x").addClass("in");
            $(".navbar-fixed-top .container > div").addClass("margin-bottom-10");
            $("#logo-header").attr("src", logo);
            $("#advanced-search-box").css('cssText', 'display: block !important');
            $("#button-menu-header, #div-menu-header").css('cssText', 'display: none !important');
            $(".navbar-fixed-top .md-margin-top-35").css({
                marginTop: "35px"
            });
            $(".login-box-border").css({
                top: "30px"
            });
        }
        else if (($(window).width() > 1024) && ($(window).scrollTop() != 0)) {
            var logo = $("#logo-header").attr("src");
            logo=logo.replace("/images/logo-eti.png","/images/logo-eti-small.png");
            $("#navbar-x").removeClass("in");
            $("#advanced-search-box").hide();
            $("#button-menu-header, #div-menu-header").css('cssText', 'display: inline-block !important');
            $(".navbar-fixed-top .md-margin-top-35").css({
                marginTop: "25px"
            });
            $("#logo-header").attr("src", logo);
            $(".navbar-fixed-top .container > div").removeClass("margin-bottom-10");
            $(".login-box-border").css({
                top: "20px"
            });
        }
        $("#button-menu-header i").css({color: "#697277"});
    });

    $( ".block-link-hover a.ad" ).hover(
        function() {
            var picto_ad = $(".block-link-hover a .picto-article-decouverte").attr("src");
            picto_ad=picto_ad.replace("/images/article-decouverte-prospect.png", "/images/article-decouverte-abo-white.png");
            $(".block-link-hover a .picto-article-decouverte").attr("src",picto_ad);
        }, function() {
            var picto_ad = $(".block-link-hover a .picto-article-decouverte").attr("src");
            picto_ad=picto_ad.replace("/images/article-decouverte-abo-white.png", "/images/article-decouverte-prospect.png");
            $(".block-link-hover a .picto-article-decouverte").attr("src",picto_ad);
        }
    );

    if($(".sidebar-nav-v1 li ul li.article-dec").hasClass("actif")) {
        var picto_ad = $(".sidebar-nav-v1 li ul li.article-dec a .picto-article-decouverte").attr("src");
        picto_ad=picto_ad.replace("/images/article-decouverte-abo.png", "/images/article-decouverte-abo-white.png");
        $(".sidebar-nav-v1 li ul li.article-dec a .picto-article-decouverte").attr("src",picto_ad);
    }

    if($(".sidebar-nav-v1 li ul li.riskev").hasClass("actif")) {
        var picto_ad = $(".sidebar-nav-v1 li ul li.riskev a img").attr("src");
        picto_ad=picto_ad.replace("/images/picto-riskev-abo.png", "/images/picto-riskev-abo-white.png");
        $(".sidebar-nav-v1 li ul li.riskev a img").attr("src",picto_ad);
    }

    if($(".sidebar-nav-v1 li ul li.toxev").hasClass("actif")) {
        var picto_ad = $(".sidebar-nav-v1 li ul li.toxev a img").attr("src");
        picto_ad=picto_ad.replace("/images/picto-toxev-abo.png", "/images/picto-toxev-abo-white.png");
        $(".sidebar-nav-v1 li ul li.toxev a img").attr("src",picto_ad);
    }

    $(".delete-cross").on("click", function() {
        $(this).parent().remove();
    })

    if ($(".subMenu").length) {
        $('.subMenu').smint({
            'scrollSpeed': 1000
            , 'mySelector': 'section'
        });
        $('body').scrollspy({
            target: ".subMenu"
            , offset: 50
        });
    }
    $(".btn-xpnd-smint").click(function () {
        if ($(this).text() == "+") {
            $(this).text('-');
            $(this).css("background-color", "#697277");
            $(this).css("color", "#fff");
        }
        else if ($(this).text() == "-") {
            $(this).text('+');
            $(this).css("background-color", "#fff");
            $(this).css("color", "#697277");
        }
    });
    App.init();
    //StyleSwitcher.initStyleSwitcher();
    $('.your-class').slick({
        dots: true
        , arrows: false
        , autoplay: true
        , autoplaySpeed: 10000
    });
    $(".les-plus span").on("click", function () {
        $(".les-plus span").removeClass("actif");
        $(this).addClass("actif");
        $(".les-plus .box-colors > div").hide();
        var list = $(this).attr("id");
        $(".les-plus .box-colors div." + list).show();
    });
    $(".owl-carousel").owlCarousel({
        loop: true
        , responsiveClass: true
        , slideBy: 2
        , responsive: {
            0: {
                items: 1
                , nav: false
            }
            , 426: {
                items: 2
                , nav: true
            }
        }
        , navText: [
            "<i class='fa fa-angle-left'></i>"
            , "<i class='fa fa-angle-right'></i>"
        ]
        , navClass: [
            "owl-custom-left"
            , "owl-custom-right"
        ]
        , controlsClass: "owl-custom-controls"
    });
    /*var eventStick;
    if ($(window).width() < 1024) {
        eventStick = 'click'
    }
    else {
        eventStick = 'mouseenter'
    };
    $('#sticky-menu-phone').on(eventStick, function () {
        var hiddenField = $('#sticky-menu-phone')
            , val = hiddenField.val();
        hiddenField.val(val === "true" ? "false" : "true");
        if (hiddenField.val() == "true") {
            $('#sticky-menu-slide-phone').stop().animate({
                right: "40px"
            }, 500);
            $('#sticky-menu-slide-share').stop().animate({
                right: "-220px"
            }, 500);
            $('#sticky-menu-slide-plane').stop().animate({
                right: "-220px"
            }, 500);
            var hiddenFieldd = $('#sticky-menu-share')
                , val = hiddenFieldd.val();
            hiddenFieldd.val("false");
            var hiddenFielddd = $('#sticky-menu-plane')
                , val = hiddenFielddd.val();
            hiddenFielddd.val("false");
        }
        else if (hiddenField.val() == "false") {
            $('#sticky-menu-slide-phone').animate({
                right: "-220px"
            }, 500);
        }
    });
    $('#sticky-menu-share').on(eventStick, function () {
        var hiddenField = $('#sticky-menu-share')
            , val = hiddenField.val();
        hiddenField.val(val === "true" ? "false" : "true");
        if (hiddenField.val() == "true") {
            $('#sticky-menu-slide-share').stop().animate({
                right: "40px"
            }, 500);
            $('#sticky-menu-slide-phone').stop().animate({
                right: "-220px"
            }, 500);
            $('#sticky-menu-slide-plane').stop().animate({
                right: "-220px"
            }, 500);
            var hiddenFieldd = $('#sticky-menu-phone')
                , val = hiddenFieldd.val();
            hiddenFieldd.val("false");
            var hiddenFielddd = $('#sticky-menu-plane')
                , val = hiddenFielddd.val();
            hiddenFielddd.val("false");
        }
        else if (hiddenField.val() == "false") {
            $('#sticky-menu-slide-share').animate({
                right: "-220px"
            }, 500);
        }
    });
    $('#sticky-menu-plane').on(eventStick, function () {
        var hiddenField = $('#sticky-menu-plane')
            , val = hiddenField.val();
        hiddenField.val(val === "true" ? "false" : "true");
        if (hiddenField.val() == "true") {
            $('#sticky-menu-slide-plane').stop().animate({
                right: "40px"
            }, 500);
            $('#sticky-menu-slide-phone').stop().animate({
                right: "-220px"
            }, 500);
            $('#sticky-menu-slide-share').stop().animate({
                right: "-220px"
            }, 500);
            var hiddenFieldd = $('#sticky-menu-phone')
                , val = hiddenFieldd.val();
            hiddenFieldd.val("false");
            var hiddenFielddd = $('#sticky-menu-share')
                , val = hiddenFielddd.val();
            hiddenFielddd.val("false");
        }
        else if (hiddenField.val() == "false") {
            $('#sticky-menu-slide-plane').animate({
                right: "-220px"
            }, 500);
        }
    });
    $("#sticky").on('mouseleave', function () {
        $('#sticky-menu-slide-plane').stop().animate({
            right: "-220px"
        }, 500);
        $('#sticky-menu-slide-phone').stop().animate({
            right: "-220px"
        }, 500);
        $('#sticky-menu-slide-share').stop().animate({
            right: "-220px"
        }, 500);
        var hiddenField = $('#sticky-menu-plane')
            , val = hiddenField.val();
        hiddenField.val("false");
        var hiddenFieldd = $('#sticky-menu-phone')
            , val = hiddenFieldd.val();
        hiddenFieldd.val("false");
        var hiddenFielddd = $('#sticky-menu-share')
            , val = hiddenFielddd.val();
        hiddenFielddd.val("false");
    });
    if ($(window).width() >= 1024) {
        $('#sticky-menu-phone').wrap('<a class="switch-popin" href="/switch.html"></a>');
    };
    // !!!! ATTENTION / À MODIFIER LORS DU CHANGEMENT DE HEADER !!!!!
    if ($(window).width() >= 1024) {
        var link;
        if ($("#register_link-connected").hasClass("no-connect-header")) {
            link = "/newsletter.html"
        }
        else {
            link = "/myti/newsletter.html"
        };
        $('#sticky-menu-plane').wrap('<a href=' + link + '></a>');
    };*/
    // gestion des ancres pour les onglets
    if (window.location.href.indexOf("#") > -1) {
        var anchor = window.location.href.substring(window.location.href.indexOf("#") + 1, window.location.href.length);
        anchor = anchor.substring(anchor.indexOf("?"), anchor.length);
        var anchorFiche = anchor.substring(0, anchor.indexOf("_"));
        $("#" + anchor + "_link").click();
        if (anchor != "documents" && anchor != "presentation" && anchor != "expert" && anchor != "" && anchor != "details" && anchor != "corps-article" && anchor != "pub" && anchorFiche != "corps-article" && anchor.indexOf('niv-') == -1 ) {
            $(".col-droite div.pub-bloc div.freezone").hide();
            $(".col-droite-2").hide();
            $(".barre-top").hide();
            $("#sticky-menu-document").show();
            if (anchor == "auteurs" || anchor == "meme-sujet" || anchor == "biblio" || anchor == "outils") {
                $("section#" + anchor).css({
                    margin: "25px 0 0 0"
                });
            }
        }
        else if (anchor == "details") {
            $(".col-droite-4").hide();
            $("#sticky-menu-document").hide();
        }
        if (anchor != "presentation") {
            $(".barre-top .btn-nav").show();
        }
        else {
            $(".barre-top .btn-nav").hide();
        }
    }
    else if (window.location.href.indexOf("#") == -1 && window.location.href.indexOf(".html") == -1) {
        $("#corps-article").removeClass("active");
    }
    $("#menu-smint > .nav-tabs a").on("click", function () {
        var link = window.location.href;
        var anchor = $(this).attr("href");
        if (anchor.indexOf("#") > -1) {
            //affichage ou non de la freezone en col de droite
            if (anchor == "#offre-commerciale" || anchor == "#details") {
                $(".col-droite-3").hide();
                $(".col-droite-4").hide();
                $(".barre-top").hide();
                $("#sticky-menu-document").hide();
                $("section#details").css({
                    margin: "0"
                });
            }
            else if (anchor == "#auteurs" || anchor == "#meme-sujet" || anchor == "#biblio" || anchor == "#outils") {
                $(".col-droite-4").show();
                $(".barre-top").hide();
                $("section" + anchor).css({
                    margin: "25px 0 0 0"
                });
                $("#sticky-menu-document").show();
            }
            else if (anchor != "#documents" && anchor != "#presentation" && anchor != "#expert") {
                $(".col-droite div.pub-bloc div.freezone").hide();
                $(".col-droite-2").hide();
                $(".col-droite-4").show();
                $(".barre-top").show();
                $("#sticky-menu-document").show();
            }
            else {
                $(".col-droite div.pub-bloc div.freezone").show();
                $(".col-droite-2").show();
                $(".col-droite-4").show();
                $(".barre-top").show();
                $("#sticky-menu-document").show();
            }
            if (anchor != "#presentation") {
                $(".barre-top .btn-nav").show();
            }
            else {
                $(".barre-top .btn-nav").hide();
            }
            //ajout de l'ancre dans l'url
            if (window.location.href.indexOf("#") > 0) {
                link = window.location.href.substring(0, window.location.href.indexOf("#"));
            }
            window.location.href = link + anchor;
        }
    });
    var nbOnglets = $("#menu-smint > .nav-tabs li").length;
    $("#menu-smint > .nav-tabs li").css("width", (($("#menu-smint > .nav-tabs").width() / $("#menu-smint > .nav-tabs li").length) * 100) / $("#menu-smint > .nav-tabs").width() + "%");
    var nbOnglets = $(".sommaire-col-dim .nav-tabs li").length;
    $(".sommaire-col-dim .nav-tabs li").css("width", (($(".sommaire-col-dim .nav-tabs").width() / $(".sommaire-col-dim .nav-tabs li").length) * 100) / $(".sommaire-col-dim .nav-tabs").width() + "%");
    // gestion erreur formulaire
    $('#newsletter-form').ready(function ($) {
        var form = $('#newsletter-form');
        var inputField = form.find('.newsletter-input');
        form.submit(function (e) {
            var email = inputField.val();
            if (email.indexOf("@", 1) == -1 || email.indexOf(".", email.indexOf("@", 1) + 1) == -1 || email.length <= 5) {
                inputField.siblings('.form-error').remove();
                inputField.after('<p class="form-error color-red-eti padding-left-10">Veuillez saisir une adresse email valide.</p>');
                e.preventDefault();
            }
        });
    });
    // gestion des popins services
    $("a.services-popin").click(function () {
        if (!$("#services-popin").html()) {
            var ui = '<div id="services-popin" role="dialog" style="display:none;z-index:1001;">' + '<iframe frameborder="0" style="width:100%;height:98%;" src=""></iframe>' + '</div>';
            $("body").append(ui);
        }
        var top = $(this).offset().top;
        $("#services-popin").dialog({
            modal: true
            , title: $(this).attr("title")
            , width: 780
            , closeText: "X"
            , open: function () {
                window.scrollTo(0, 0);
                return false;
            }
            , close: function () {
                $("#services-popin").remove();
                //parent.location.reload();
                return false;
            }
        });
        $("#services-popin").dialog("widget").attr("id", "design-services-popin").css("position", "absolute");
        $("#services-popin iframe").attr("src", $(this).attr("href"));
        $("#services-popin").dialog("widget").css("top", "150px");
        $("#design-services-popin").css("left", (($(window).width() - $("#design-services-popin").width()) / 2));
        $("#design-services-popin").css("height", "295px");
        return false;
    });
    // gestion de popin switch
    $("a.switch-popin").click(function () {
        if (!$("#switch-popin").html()) {
            var ui = '<div id="switch-popin" role="dialog" style="display:none;z-index:1001;">' + '<iframe frameborder="0" style="width:100%;height:98%;" src=""></iframe>' + '</div>';
            $("body").append(ui);
        }
        var top = $(this).offset().top;
        $("#switch-popin").dialog({
            modal: true
            , title: $(this).attr("title")
            , width: 600
            , closeText: "X"
            , open: function () {
                return false;
            }
            , close: function () {
                $("#switch-popin").remove();
                return false;
            }
        });
        $("#switch-popin").dialog("widget").attr("id", "design-switch-popin").css("position", "absolute");
        $("#switch-popin iframe").attr("src", $(this).attr("href"));
        if (top > "420") {
            $("#switch-popin").dialog("widget").css("top", "150px" );
        }
        else {
            $("#switch-popin").dialog("widget").css("top", "150px");
        }
        $("#design-switch-popin").css("left", (($(window).width() - $("#design-switch-popin").width()) / 2));
        $("#design-switch-popin").css("height", "295px");
        return false;
    });
    //harmoniser hauteur colonne col-droite-actu et content-article
    if ($(window).width() >= 1024) {$(".content-article").css("minHeight" , $(".col-droite-actu").height());}

    $('.panel-title a').click(function (event) {
        if ($(event.target).hasClass("accordion-toggle")) {
            $(event.target).addClass('disabled');
            $(event.target.childNodes[1]).toggleClass('color-red');
            $(event.target.childNodes[2]).toggleClass('fa-angle-up fa-angle-down');
            setTimeout(function () {
                $(event.target).removeClass('disabled');
            }, 1000);
        }
        if ($(event.target).hasClass("title-element")) {
            $(event.target).addClass('disabled');
            $(event.target).toggleClass('color-red');
            $(event.target).next().toggleClass('fa-angle-up fa-angle-down');
            setTimeout(function () {
                $(event.target).closest('a').removeClass('disabled');
            }, 1000);
        }
        if ($(event.target).hasClass("fa")) {
            $(event.target).addClass('disabled');
            $(event.target).prev().toggleClass('color-red');
            $(event.target).toggleClass('fa-angle-up fa-angle-down');
            setTimeout(function () {
                $(event.target).closest('a').removeClass('disabled');
            }, 1000);
        }
    });
    var active = true;
    $('.tout-ouvrir').click(function () {
        if (active) {
            active = false;
            $('.panel-collapse').collapse('show');
            $('#accordion-1 .panel-title a').each(function (index, element) {
                if ($(this).find('i').hasClass('fa-angle-down')) {
                    $(this).find('i').toggleClass('fa-angle-down fa-angle-up');
                    $(this).find('span').addClass('color-red');
                }
            });
            $('.tout-ouvrir').text('Tout fermer');
        }
        else {
            active = true;
            $('.panel-collapse').collapse('hide');
            $('#accordion-1 .panel-title a').each(function (index, element) {
                if ($(this).find('i').hasClass('fa-angle-up')) {
                    $(this).find('i').toggleClass('fa-angle-up fa-angle-down');
                    $(this).find('span').removeClass('color-red');
                }
            });
            $('.tout-ouvrir').text('Tout ouvrir');
        }
    });
    $(function () {
        $('#menuSearch').on('shown.bs.collapse', function () {
            $('#fleche-search').removeClass('fa-angle-down').addClass('fa-angle-up');
        })
        $('#menuSearch').on('hidden.bs.collapse', function () {
            $('#fleche-search').removeClass('fa-angle-up').addClass('fa-angle-down');
        })
    });
    $(function () {
        $('#menuFiltre').on('shown.bs.collapse', function () {
            $('#fleche-search').removeClass('fa-angle-down').addClass('fa-angle-up');
        })
        $('#menuFiltre').on('hidden.bs.collapse', function () {
            $('#fleche-search').removeClass('fa-angle-up').addClass('fa-angle-down');
        })
    });
    $("#header-rubrique .zoning").on("click", function (a) {
        if ($(this).find("a").attr("href") != undefined) window.location = $(this).find("a").attr("href")
        return false;
    })
    $(".owl-carousel .zoning").on("click", function (a) {
        if ($(this).find("a").attr("href") != undefined) window.location = $(this).find("a").attr("href")
        return false;
    })
    if ($(window).width() <= 1024) {
        $(".zoning").click(function (a) {
            if ($(this).find("a").attr("href") != undefined) window.location = $(this).find("a").attr("href")
            return false;
        }).css({
            cursor: "pointer"
        });
    }

    if(navigator.userAgent.match(/(iPhone|Android|BlackBerry|iPad)/i) && (window.matchMedia("(max-width:1024px)").matches)){
        $("#navbar-x").css({maxHeight: $(window).height() - 70, overflow: "scroll"});
        $(".navbar-nav > li").each(function () {
            $(this).addClass("clearfix").find("div.dropdown-menu").show().css({position : "relative"});
        });
    }
    $("#menu-account").on("click", function() {
        $("#sidebar-nav").toggle();
    });

    $("#menu-account").click(function() {
        $(this).toggleClass("active");
    });

    $(".title-collapse").click(function() {
        $(this).toggleClass("active");
    });

    if ($(window).width() >= 1024) {
        $(".tab-content .documents-smint").css({
            "minHeight": $(".tab-content .col-droite").height() + 86
        });
        $(".tab-content-domaine .presentation-smint, .tab-content-domaine .expert-smint").css({
            "minHeight": $(".tab-content .col-droite-2").height() + 60
        });
        $(".tab-content-rubrique .presentation-smint, .tab-content-rubrique .expert-smint").css({
            "minHeight": $(".tab-content .col-droite-3").height() + 60
        });
        $(".tab-content-article .presentation-smint, .tab-content-article .corps-article-smint, .tab-content-article .auteurs-smint, .tab-content-article .biblio-smint, .tab-content-article .outils-smint, .tab-content-article .meme-sujet-smint").css({
            "minHeight": $(".tab-content .col-droite-4").height() - 60
        });
    }
    // gestion du sommaire
    $('#detailledSummaryLink').on("click", function () {
        detailledSummaryLink();
        return false;
    });
    $('#normalSummaryLink').on("click", function () {
        normalSummaryLink();
        return false;
    });
    /* Correction des ancres */
    var anchor = location.hash.substring(1);
    if (anchor.length > 0) {
        var elems = $('[data-anchor="' + anchor + '"]');
        if (elems.length > 0) {
            var offsetCorrection = 50;
            var branding = $('#branding');
            if (branding.length > 0 && branding.css('position') === 'fixed') {
                offsetCorrection += branding.height();
            }
            $('html, body').animate({
                scrollTop: elems.offset().top - offsetCorrection
            }, 200);
        }
    }
    // gérer les warning dans les listing rubrique
    $(".zoning.warning").parents('.panel-default').find(".my-warning-to-display").css("display", "inline");
    // lecture facile
    $('.lecture-facile, .bt-lf').on("click", function () {
        // quitter la lecture facile
        if ($('body').hasClass('lecture_facile')) {
            $('body').removeClass('lecture_facile');
            location.reload();
            window.location.href = window.location.href.replace('?lectureFacile=true', '').replace('&lectureFacile=true', '').replace('&sommaireDetaille=true', '?sommaireDetaille=true');
        }
        // ouvrir la lecture facile
        else {
            $('body').addClass("lecture_facile");
            lectureFacileEnableLinks();
            window.scrollTo(0, 0);
        }
        return false;
    });
    if ($('body').hasClass('lecture_facile')) {
        lectureFacileEnableLinks();
    }
    if ($(".sommaire .displayDetailledSummary").length == 0) {
        $(".tab1-sommaire-detaille").hide();
    }
    // shadow module interception
    $(".module-interception .fade-out").css({
        bottom: $(".module-interception").height() + 61
    });
    $(window).resize(function () {
        var positionnement = $('#sticky-menu-document').css("position");
        if ($(window).width() >= 1270 && positionnement == "fixed") {
            stickyRight = ($(window).width() - 1140) / 2 - 55;
            $('#sticky-menu-document').css("left", stickyRight).show();
        }
    });

    /** Highlight thématique **/
    // On récupère l'URL de la thématique principale
    var url_principal_thematic = $('.thematic_url').text();
    if(url_principal_thematic != '') {
        // On cible le lien en question dans le sous-menu actu
        var tag_link_thematic = $('#ti_actu_submenu_container a[href="'+url_principal_thematic+'"]');
        // On enlève la classe "actif" sur tous les 'li'
        var tags_li = $(tag_link_thematic.parents('ul')[0]).children('li');
        $(tags_li).each(function(index) {
            $(this).removeClass('actif');
        });
        // Highlight sur la thématique principale
        tag_link_thematic.parent().addClass('actif');
    }

    //picto up down login box
    $(".cross-close i").hover(function(){
        $(this).toggleClass('fa-angle-down fa-angle-up');
    },function(){
        $(this).toggleClass('fa-angle-up fa-angle-down');
    });

    // Menu mobile
    if(navigator.userAgent.match(/(iPhone|Android|BlackBerry|iPad)/i) || (window.matchMedia("(max-width:1024px)").matches)){
        var menuActualite = $("#ti_actu_submenu_container");
        $( ".menu-actualite" ).append(menuActualite);

        $(".menu-actualite #ti_actu_submenu_container #menu-menu-ti-actu>li").each(function(){
            if($(this).find("ul").length){
                $(this).prepend('<div class="arrow-bottom"></div>');
            }
        });

        $(".menu-actualite #ti_actu_submenu_container #menu-menu-ti-actu>li").click(function(){
            if($(".menu-actualite #ti_actu_submenu_container #menu-menu-ti-actu>li>ul").is(":visible")) {
                $(".menu-actualite #ti_actu_submenu_container #menu-menu-ti-actu>li>ul").hide();
            }
            else {
                $(this).children("ul").show();
            }
        });
    }

    var word = "actualite";
    var reg = new RegExp('\\b' + window.location.pathname + '\\b', "g");
    var resultat = word.match(reg);
    if (resultat == null) {
        $("#poussemenu .menu-general").hide();
        $("#poussemenu .menu-actualite").show();
    }

    $(".pdf-added").delay(5000).hide(0);
    $(".search-added").delay(5000).hide(0);

    $(".erreur-vide").delay(5000).slideUp("slow");
    //annotation
    $(".id_annotation").on("click", function () {
        $(this).next(".id_annotation_box").show();
        if ($(this).parents(".barre-top").parent().prev("section").attr("id") == "rien") {
            $(this).next(".id_annotation_box").css({
                top: "-390px"
            });
        };
    });
    $('.form-erreur-di').find('b').each(function () {
        $(this).parent().show();
    });
    //manage error on input
    $(".form-group input").on('input', function () {
        if (!$(this).val().length) {
            $(this).addClass('has-error');
            $(this).siblings('span').show().text('champs requis');
        }
        else {
            $(this).removeClass('has-error');
            $(this).next('span').hide();
        }
    });

    /**
     * Sélection d'une thématique dans l'espace livres blancs
     */
    $('#select-thematiques').change(function(evt){
        switch($(this).val()){
            case 'les-plus-telecharges':
                var url = baseUrl+'/livre-blanc/'+$(this).val();
                break;
            case '':
                var url = baseUrl+'/livre-blanc/tous-les-livres-blancs';
                break;
            default:
                var url = baseUrl+'/livre-blanc/thematique/'+$(this).val();
        }

        $(location).attr('href', url);
    });

    /**
     * Sélection d'une thématique dans l'espace webinar
     */
    $('#select-evt-thematiques').change(function(evt){
        switch($(this).val()){
            case '':
                var url = baseUrl+'/conferences-en-ligne/';
                break;
            default:
                var url = baseUrl+'/conferences-en-ligne/thematique/'+$(this).val();
        }

        $(location).attr('href', url);
    });

    //placement toolbar selection texte dans article
    $('.corps-article article').click(function() {
        var sel = getSelection().toString();

        var a2a_config = a2a_config || {};
        a2a_config.linkname = 'Bla';

        if(sel){
            document.getElementById("myFloatingMenu").style.display="block";

            var range = window.getSelection().getRangeAt(0);

            var coords = getSelectionCoords();
            var posX = coords.x ;
            var posY = coords.y + window.pageYOffset - 40;

            $("#myFloatingMenu").css({ top: posY, left: posX });
            $('#selectionSharerPopover').css({ top: 0, left: 151 });
            $('.selectionSharer').appendTo("#myFloatingMenu li.reseau");
            return false;
        }
        else {
            $("body").click(function(event) {
                if($("#myFloatingMenu").css('display') == 'block') {
                    document.getElementById("myFloatingMenu").style.display="none";
                }
            })
        }
    });

    $("#button-menu-header").hover(function() {
        $(this).find("i").css({color: "#EC1625"});
    }, function(){
        if($("#navbar-x").css('display') == 'none'){
            $(this).find("i").css({color: "#697277"});
        }
    }).on("click", function(){
        if($("#navbar-x").css('display') == 'block'){
            $(this).find("i").css({color: "#697277"});
        }
        else {
            $(this).find("i").css({color: "#EC1625"});
        }
    });

    var url = window.location.href;
    if(url.indexOf('/contenus-gratuits') != -1){
        jQuery('.navbar-nav .contenu-gratuit').addClass('bg-active');
        return false;
    }
    else if(url.indexOf('/edito/mieux-nous-connaitre') != -1){
        jQuery('.navbar-nav .a-propos').addClass('bg-active');
        return false;
    }
    else if(url.indexOf('/edito/contact') != -1){
        jQuery('.navbar-nav .contact').addClass('bg-active');
        return false;
    }
    else if(url.indexOf('/actualite/edito') != -1){
        return false;
    }
    else if(url.indexOf('/actualite') != -1){
        jQuery('.navbar-nav .magazine-actualite').addClass('bg-active');
        return false;
    }
    else if(url.indexOf('/ressources-documentaires') != -1 || url.indexOf('/base-documentaire') != -1 || url.indexOf('/fiche-pratique') != -1){
        jQuery('.navbar-nav .ressources-doc').addClass('bg-active');
        return false;
    }
    else if(url.indexOf('/glossaire') != -1){
        jQuery('.navbar-nav .magazine-actualite').addClass('bg-active');
        return false;
    }
    else if(url == "https://preprod.techniques-ingenieur.fr/" || url == "http://preprod.techniques-ingenieur.fr/"){
        jQuery('.navbar-nav .accueil').addClass('bg-active');
        return false;
    }

    // ajout class et attributs sur les liens du menu
    $("#menu-menu-generique-ti > li").each(function(){
        $("#menu-menu-generique-ti > li > a").addClass("dropdown-toggle").attr("data-toggle","dropdown");
    });

    var pageNumber = 1;
    $('.fil-actu').scroll(function(){
        var $this = $(this);
        var height = this.scrollHeight - $this.innerHeight() - $('#tweet-welcome').height(); // Get the height of the div
        var scroll = $this.scrollTop(); // Get the vertical scroll position

        var isScrolledToEnd = (scroll >= height);

        if (isScrolledToEnd) {
            //On lance la fonction ajax
            $.ajax({
                type:"GET",
                url:'/dashboard-tweet-ajax?pageNumber='+pageNumber,
                success: function(data) {
                    $("#tweet-list").append(data);
                    load=false;
                    pageNumber++;
                }
            });
        }
    });

    $('#timeline > p > a.my-questions').on('click', function(){
        if($(this).parent('p').hasClass('active')) {
            $(this).html('Masquer les questions');
        }
        else {
            $(this).html('Afficher les questions');
        }
    });

    $(".mode-list").click(function() {
        $("#mode-list").show();
        $("#mode-bloc").hide();
    });

    $(".mode-bloc").click(function() {
        $("#mode-bloc").show();
        $("#mode-list").hide();
    });

    $("#sticky .close-sticky").click(function() {
        $(this).find("i").toggleClass("fa-angle-right fa-comment");
        /*$(this).find("i").toggleClass("fa-angle-right fa-angle-left");*/
        $("#sticky-menu").toggleClass("sticky-show sticky-hide");
    });

    // ouvrir-fermer resultats recherche colonne gauche
    if(navigator.userAgent.match(/(iPhone|Android|BlackBerry|iPad)/i) || (window.matchMedia("(max-width:991px)").matches)) {
        $('.ttre_holder>.ttre').click(function () {
            if ($(this).hasClass("accordion-toggle")) {
                $(this).siblings(".search-box").removeClass('unshow');
                $(this).find("i").toggleClass('fa-angle-up fa-angle-down');
                $(this).removeClass("accordion-toggle");
            }
            else {
                $(this).siblings(".search-box").addClass('unshow');
                $(this).find("i").toggleClass('fa-angle-up fa-angle-down');
                $(this).addClass("accordion-toggle");
            }
        });
    };

    // ADV functions
    $("a.sendCampaign-popin").click(function() {

        if( ! $("#myti-actions-services-popin").html() ) {
            var ui =
                '<div id="myti-actions-services-popin" role="dialog" style="display:none;z-index:1001;">'
                + '<iframe frameborder="0" style="width:100%;height:98%;" src=""></iframe>'
                + '</div>';
            $("body").append(ui);
        }

        window.scrollTo(0,0);
        $("#myti-actions-services-popin").dialog( {
            modal: true,
            title: $(this).attr("title"),
            width: 800,
            closeText: "X",
            open: function(){
                window.scrollTo(0,0);
                $(".boxPub").each(function(){$(this).hide();});
                $("#module_bottom").hide();
                $(".banner").each(function(){$(this).hide();$("#header").css("margin-top", "100px");});
            },
            close: function(){
                $(".boxPub").each(function(){$(this).show();});
                $(".banner").each(function(){$(this).show();$("#header").css("margin-top", "0");});

                $('div.ui-dialog').remove();
                location.reload(true);

            }
        });

        $("#myti-actions-services-popin").dialog("widget").attr("id","design-myti-actions-services-popin").css("position", "absolute");
        $("#myti-actions-services-popin iframe").attr("src", $(this).attr("href"));
        $("#myti-actions-services-popin").dialog("widget").css("top", "150px" );
        $("#myti-actions-services-popin").css("height", "500px");

        $("#design-myti-actions-services-popin").css("left", (($(window).width() - $("#design-myti-actions-services-popin").width()) / 2));
        return false;
    });

    $("img.mode-list").click(function() {
        $("#mode-list").show();
        $("#mode-bloc").hide();
    });

    $("img.mode-bloc").click(function() {
        $("#mode-bloc").show();
        $("#mode-list").hide();
    });
});
(function () {
    var v = document.getElementsByClassName("youtube-player");
    for (var n = 0; n < v.length; n++) {
        var p = document.createElement("div");
        p.innerHTML = labnolThumb(v[n].dataset.id);
        p.onclick = labnolIframe;
        v[n].appendChild(p);
    }
})();

function addParameterToURL(url, param){
    if (!url.includes('?'+param) && !url.includes('&'+param)) {
        url += (url.split('?')[1] ? '&':'?') + param;
    }
    return url;
}

function refresh(owner) {
    // Peu importe les parametres c'est uniquement pour que ca rafraichisse a
    // tous les coups et que ca ne reaffiche pas l'image en cache.
    owner.setAttribute("src", owner.getAttribute("src") + "?action=refresh");
}

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

function simulationOnglets(lien) {
    var link = window.location.href;
    var anchor = lien;
    //affichage ou non de la freezone en col de droite
    if (anchor != "#documents" && anchor != "#presentation" && anchor != "#expert") {
        $(".col-droite div.pub-bloc div.freezone, .col-droite-2").hide();
    }
    else $(".col-droite div.pub-bloc div.freezone, .col-droite-2").show();
    //ajout de l'ancre dans l'url
    if (window.location.href.indexOf("#") > 0) link = window.location.href.substring(0, window.location.href.indexOf("#"));
    $(anchor + "_link").click();
}
<!--  Toggle DIV JS -->
function toggle_div(bouton, id) {
    var div = document.getElementById(id).style.display;
    if (div == "none") div = "block";
    else div = "none";
    return false;
}
function getSelectionCoords() {
    var sel = document.selection, range;
    var x = 0, y = 0;
    if (sel) {
        if (sel.type != "Control") {
            range = sel.createRange();

            range.collapse(true);
            x = range.boundingLeft;
            y = range.boundingTop;
            r = range.boundingRight;
        }
    } else if (window.getSelection) {

        sel = window.getSelection();
        if (sel.rangeCount) {
            range = sel.getRangeAt(0).cloneRange();

            if (range.getClientRects()) {
                range.collapse(true);
                var rect = range.getClientRects()[0];

                x = rect.left;
                y = rect.top;
                r = rect.right;
            }
        }
    }
    return { x: x, y: y, r :r};
}
function verticalToolbarPosition() {
    var topMenuVertical = $("#masthead").height();
    var menu = $("#sticky-menu-document");
    var fixedLimit = menu.offset().top - 122;
    var posHide = $(document).height() - topMenuVertical;
    $(window).scroll(function (event) {
        // Valeur de défilement lors du chargement de la page
        windowScroll = $(window).scrollTop();
        posLeft = ($(window).width() - $(".container").width()) / 2 - 55;
        // Mise à jour du positionnement en fonction du scroll
        if (windowScroll >= fixedLimit) {
            menu.css({
                position: 'fixed'
                , top: topMenuVertical
                , left: posLeft
            });
        }
        else {
            $("#sticky-menu-document").css({
                position: "absolute"
                , top: "65px"
                , left: "-55px"
            });
        }
    });
}
var taille = 14;
var augmentation = 1;
var tailleMax = 18;
var tailleMin = 10;

function increaseFontSize() {
    taille += 1;
    if (taille >= tailleMax) {
        taille = tailleMax;
    }
    $('.tab-content-article section *').stop().animate({
        fontSize: taille + "px"
    }, 300);
    $('.corps-article article *').stop().animate({
        fontSize: taille + "px"
    }, 300);
}

function decreaseFontSize() {
    taille -= 1;
    if (taille <= tailleMin) {
        taille = tailleMin;
    }
    $('.tab-content-article section *').stop().animate({
        fontSize: taille + "px"
    }, 300);
    $('.corps-article article *').stop().animate({
        fontSize: taille + "px"
    }, 300);
}

function lectureFacileEnableLinks() {
    $('.tab-content-article a').each(function () {
        if (this.href.indexOf('javascript:') == 0) {
            return;
        }
        if (this.href.indexOf('#biblio') >= 0) {
            return;
        }
        if (this.href.indexOf('#') >= 0) {
            return;
        }
        if (this.href == "") {
            return;
        }
        this.href = addParamToLink(this.href, 'lectureFacile', 'true');
    });
    $('.nav-rubrique a').each(function () {
        if (this.href.indexOf('javascript:') == 0) {
            return;
        }
        if (this.href.indexOf('#biblio') >= 0) {
            return;
        }
        this.href = addParamToLink(this.href, 'lectureFacile', 'true');
    });
}
// Ajoute un paramètre (param) avec sa valeur (value) dans une url (link)
// Tient compte de la query string et de l'ancre si elles existent.
function addParamToLink(link, param, value) {
    var anchor;
    var queryString;
    var newQueryString = '?';
    var paramInQueryString = false;
    var parts = link.split('#');
    if (parts.length > 1) anchor = parts[1];
    var _parts = parts[0].split('?');
    if (_parts.length > 1) queryString = _parts[1];
    if (typeof queryString === 'undefined') newQueryString += encodeURIComponent(param) + '=' + encodeURIComponent(value);
    else {
        var __parts = queryString.split('&');
        for (var i = 0; i < __parts.length; ++i) {
            var paramValue = __parts[i];
            if (i > 0) {
                newQueryString += '&';
            }
            if (paramValue.indexOf('=') === -1) {
                newQueryString += paramValue;
            }
            else {
                var _paramValue = paramValue.split('=');
                if (_paramValue[0] === param) {
                    newQueryString += encodeURIComponent(param) + '=' + encodeURIComponent(value);
                    paramInQueryString = true;
                }
                else {
                    newQueryString += paramValue;
                }
            }
        }
        if (!paramInQueryString) {
            if (newQueryString !== '?') {
                newQueryString += '&';
            }
            newQueryString += encodeURIComponent(param) + '=' + encodeURIComponent(value);
        }
    }
    if (typeof anchor === 'undefined') {
        return _parts[0] + newQueryString;
    }
    return _parts[0] + newQueryString + '#' + anchor;
}

function switchBox(id_1, id_2, styles_default, styles_clicked) {
    // id_1 : ID de l'élément qui est cliqué pour ouvrir/fermer la box
    // id_2 : ID de l'élément qui se cache/s'affiche
    // styles_default : styles de id_1 quand id_2 est caché
    // styles_clicked : styles de id_1 quand id_2 est affiché
    if (id_1) {
        var ar = document.getElementById(id_1);
    }
    var arf = document.getElementById(id_2);
    if (arf.style.display == 'block') {
        arf.style.display = 'none';
        if (ar && styles_default) {
            ar.className = styles_default;
        }
    }
    else {
        arf.style.display = 'block';
        if (ar && styles_default) {
            ar.className = styles_clicked;
        }
    }
}
//CAS
index = 1;

function differedLoginIframeLoad(iframe, url) {
    if (typeof firstLoginIframeLoaded != 'undefined' && firstLoginIframeLoaded == true) {
        document.getElementById(iframe).src = url;
    }
    else {
        setTimeout("differedLoginIframeLoad('" + iframe + "','" + url + "')", 500);
    }
}

function standardIframeLoadWithRedirect(iframe, baseUrl, encodeUrl, params) {
    document.getElementById(iframe).src = baseUrl + '?service=' + encodeURI(encodeUrl + escapeQuoteFragment(params));
}

function differedIframeLoadWithRedirect(iframe, baseUrl, encodeUrl, params) {
    if (typeof firstLoginIframeLoaded != 'undefined' && firstLoginIframeLoaded == true) {
        standardIframeLoadWithRedirect(iframe, baseUrl, encodeUrl, params);
    }
    else {
        setTimeout("differedIframeLoadWithRedirect('" + iframe + "','" + escapeQuoteFragment(baseUrl) + "','" + escapeQuoteFragment(encodeUrl) + "','" + escapeQuoteFragment(params) + "')", 500);
    }
}

function differedIframeLoadWithRedirectWithIndex(iframe, baseUrl, encodeUrl, params, myIndex) {
    if (typeof firstLoginIframeLoaded != 'undefined' && firstLoginIframeLoaded == true && index == myIndex) {
        standardIframeLoadWithRedirect(iframe, baseUrl, encodeUrl, params);
        index++;
    }
    else {
        setTimeout("differedIframeLoadWithRedirectWithIndex('" + iframe + "','" + escapeQuoteFragment(baseUrl) + "','" + escapeQuoteFragment(encodeUrl) + "','" + escapeQuoteFragment(params) + "','" + myIndex + "')", 500);
    }
}

function escapeQuoteFragment(fragment) {
    return fragment.replace("'", "\'");
}

function checkEmail(frm, alertMessage) {
    email = frm.email.value;

    var indexOfAt = email.indexOf("@", 1);
    var indexOfPoint = email.indexOf(".", indexOfAt + 1);

    if ((email.length > 5) && (indexOfAt > -1) && (indexOfPoint > 1)) {
        return true;
    } else {
        alert(alertMessage);
        return false;
    }
}

function goToDesinscription(){
    var checked = checkEmail(document.getElementById("newsletter-form"), 'Veuillez saisir une\nadresse e-mail valide !\nMerci');
    if (checked) {
        var email = document.getElementById('email').value;
        location.href='/desinscription-globale.html?email=' + email;
    }
}

function setCookieCnil() {
    var domain = '';
    var d = document.domain.split('.');

    if (d.length == 1) {
        domain = d[0];
    } else {
        domain = d[d.length - 2] + '.' + d[d.length - 1];
    }

    var date = new Date();
    date.setTime(date.getTime() + 6 * 30 * 24 * 3600 * 1000); // 6 mois

    document.cookie = 'cookie_cnil=1; expires=' + date.toUTCString() + '; domain=' + domain + '; path=/';
    jQuery('#bandeau-cookie').hide();
}

function detailledSummaryLink() {
    $(".menu-link img[data-url]").filter(function (e) {
        return $(e).data("url") !== "#";
    }).each(function (i, e) {
        var img = $(e);
        var imgSrc = img.data("url");
        if (imgSrc !== "#") {
            img.attr("src", imgSrc).removeAttr("data-url")
        }
    });
    $('.displayDetailledSummary').css('display', 'block');
    $('body').addClass("summary_detailled");
    $('.sommaire-light').removeClass("active");
    $('.sommaire-media').addClass("active");
    var minheightcol = $(".tab-content .col-droite-4").height() - 60;
    $(".tab-content-article .presentation-smint, .tab-content-article .corps-article-smint, .tab-content-article .auteurs-smint, .tab-content-article .biblio-smint, .tab-content-article .outils-smint, .tab-content-article .meme-sujet-smint").css({
        "minHeight": minheightcol
    });

    $(".summary-link").each(function( index ) {
        var link = $(this).attr('href');

        var hash = "";
        var linkWithoutHash = "";

        if (link.indexOf("#") != -1) {
            hash = link.substring(link.indexOf("#"));
            linkWithoutHash = link.substring(0, link.indexOf("#"));
        } else {
            linkWithoutHash = link;
        }

        link = addParameterToURL(linkWithoutHash, "summary=true") + hash;
        $(this).prop("href", link);
    });
}

function normalSummaryLink() {
    $('.displayDetailledSummary').css('display', 'none');
    $('body').removeClass("summary_detailled");
    $('.sommaire-light').addClass("active");
    $('.sommaire-media').removeClass("active");
    var minheightcol = $(".tab-content .col-droite-4").height() - 60;
    $(".tab-content-article .presentation-smint, .tab-content-article .corps-article-smint, .tab-content-article .auteurs-smint, .tab-content-article .biblio-smint, .tab-content-article .outils-smint, .tab-content-article .meme-sujet-smint").css({
        "minHeight": minheightcol
    });
    $(".summary-link").each(function( index ) {
        var link = $(this).attr('href');

        var hash = "";
        var linkWithoutHash = "";

        if (link.indexOf("#") != -1) {
            hash = link.substring(link.indexOf("#"));
            linkWithoutHash = link.substring(0, link.indexOf("#"));
        } else {
            linkWithoutHash = link;
        }

        link = removeParameterToURL(linkWithoutHash, "summary=true") + hash;
        $(this).prop("href", link)
    });
}

function removeParameterToURL(url, param){
    if (url.includes('?'+param)) {
        url = url.replace('?'+param, "");
    } else if (url.includes('&'+param)) {
        url = url.replace('&'+param, "");
    }
    return url;
}

var timeoutDlZip;

function startTimeoutForDownloadZip(zipLocation) {
    timeoutDlZip = setTimeout("downloadZip('"+zipLocation+"')",4000);
}

function downloadZip(location) {
    clearTimeout(timeoutDlZip);
    document.location = location;
}

function submitAddPdfToCartForm(id) {
    var form = document.getElementById(id);
    form.submit();
}

function submitTagForm(formId, paramName, paramValue) {
 	var form = document.forms[formId];
 	form.elements[paramName].value = paramValue;
 	form.submit();
}

function addTagToFilter(form, tag) {
    var filter = document.getElementById(form).elements['tags'].value;
    if ((filter.length==0) || (filter==null)) {
        filter = tag;
    } else {
        filter = filter + ", " + tag;
    }
    document.getElementById(form).elements['tags'].value = filter;
    document.getElementById(form).submit();
}

function removeTagToFilter(form, tag) {
	var filter = document.getElementById(form).elements['tags'].value;
	var result = filter.split(", ");
	var index = result.indexOf(tag);
	if (index != -1) {
		result.splice(index, 1);
	}
	document.getElementById('annotation').elements['tags'].value = result.join(", ");
	document.getElementById(form).submit();
}

function ajaxDeleteAnnotationNote(type, id, noteId) {
	jQuery.ajax({
		url : '/ajax/myti/box/deleteNote?type=' + encodeURIComponent(type) + '&id=' + encodeURIComponent(id) + '&noteId=' + encodeURIComponent(noteId),
		'complete': function (data) {
			jQuery('#' + noteId).remove();
		}
	});
	return false;
}

function clearFilter(form) {
    document.getElementById(form).elements['tags'].value = "";
    document.getElementById(form).submit();
}

function showHelp ( idObj ) {

    if ( $(idObj).style.display != "none") {
        Effect.Fade($(idObj));
    } else {
        Effect.Appear($(idObj));
    }
}

function cartDownload() {
    if (jQuery('.g-recaptcha').length > 0) {
        if (jQuery('.g-recaptcha').css('display') === 'none') {
            jQuery('.g-recaptcha').css('display', 'block');
            return false;
        }
    };

    return true;
}

function newsletterActionCheck(parent) {

    if (jQuery(parent).prop("checked")) {
        var mustCheck=true;
    } else {
        var mustCheck=false;
    }

    jQuery('input[parent-checkbox='+parent.id+']').each(function(index, element) {
        jQuery(element).attr("checked", mustCheck);
        if (parent.id == "rootThemes") {
            newsletterActionCheck(element);
        }
    });
}
