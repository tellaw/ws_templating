/*
 JS principale de la Cartographie.
 Les fonctions sont initialisé dans js/components.
 Elle sont ensuite exécuté ici.

 Les fonctions qui non récurentes sont actuellement initialisé et et executé ici meme.

 */


jQuery(document).ready(function($){

    var backdropIsOpen = false;
    var $backdrop      = $('<div />').addClass('backdrop');


    // When iframe is loaded, add zoom event
    $('.iframeContainer iframe').load(function(){
        var $iframe = this;
        // display zoom
        $('.iframeContainer .zoom').addClass('visible');

        // add event on zoom
        $('.iframeContainer .zoom').on('click', function (e) {
            e.preventDefault();
            toggleIframe($iframe);
        });
        $('.backdrop').on('click', function (e) {
            e.preventDefault();
            toggleIframe($iframe);
        });
    });

    // toggle classes for iframe state
    var toggleIframe = function (iframe) {
        if (!backdropIsOpen){
            backdropIsOpen = true;
            $('body').addClass('fullscreen');
            $('.zoom').addClass('close');
            $backdrop.insertAfter('.iframeContainer');
            resizeIframeContent(iframe);
        } else {
            backdropIsOpen = false;
            $('body').removeClass('fullscreen');
            $('.zoom').removeClass('close');
            $backdrop.remove();
        }
    }

    function iframeRef( frameRef ) {
        return frameRef.contentWindow
            ? frameRef.contentWindow.document
            : frameRef.contentDocument
    }

    var resizeIframeContent = function (iframe) {
        var $iframeDoc = iframeRef(iframe);

        $svgContainer = $(iframe).find('.dataviz');

        $svg = $(iframe).find('svg');

        $svg.width($svgContainer.width());
    }


});