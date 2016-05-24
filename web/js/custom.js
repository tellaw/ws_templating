// Home javascript

$( window ).resize(function() {
    if ($( "#sub-menu" ).hasClass( "fxd" )) {
        $('#sub-menu').css('margin-top', $('#main-header').height());
    } else if (!$( "#sub-menu" ).hasClass( "fxd" )) {
    }
});

$( window ).ready(function() {
    if ($( "#sub-menu" ).hasClass( "fxd" )) {
        $('#sub-menu').css('margin-top', $('#main-header').height());
    } else if (!$( "#sub-menu" ).hasClass( "fxd" )) {
    }
});

jQuery(document).ready(function() {
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
            $("#button-menu-header").css('cssText', 'display: block !important');
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

    $('#sticky-menu-phone').on('click', function() {
        $('#sticky-menu-slide-phone').animate({
            right:"40px"
        }, 500);

        var hiddenField = $('#sticky-menu-phone'),
            val = hiddenField.val();
        hiddenField.val(val === "true" ? "false" : "true");

        if (hiddenField.val() == "true") {
            $('#sticky-menu-slide-share').animate({
                right:"-220px"
            }, 500);
            $('#sticky-menu-slide-plane').animate({
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

    $('#sticky-menu-share').on('click', function() {
        $('#sticky-menu-slide-share').animate({
            right:"40px"
        }, 500);

        var hiddenField = $('#sticky-menu-share'),
            val = hiddenField.val();
        hiddenField.val(val === "true" ? "false" : "true");

        if (hiddenField.val() == "true") {
            $('#sticky-menu-slide-phone').animate({
                right:"-220px"
            }, 500);
            $('#sticky-menu-slide-plane').animate({
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

    $('#sticky-menu-plane').on('click', function() {
        $('#sticky-menu-slide-plane').animate({
            right:"40px"
        }, 500);

        var hiddenField = $('#sticky-menu-plane'),
            val = hiddenField.val();
        hiddenField.val(val === "true" ? "false" : "true");

        if (hiddenField.val() == "true") {
            $('#sticky-menu-slide-phone').animate({
                right:"-220px"
            }, 500);
            $('#sticky-menu-slide-share').animate({
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