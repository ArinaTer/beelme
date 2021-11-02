/**
 * Carousel
 */

(function( $ ) {

    'use strict';

    var $win = $( window );
    var $carousel = $( '.owl-carousel' );

    function update() {
        var wh = $win.height();
        var max = 0;

        $carousel
            .find( '.section' )
            .css( { 'height': wh } );


        if( isMobile() ) {
            $carousel.find( '.section' ).each(function(i, element){
                var h = $(element).height();

                if( h > max ) {
                    max = h;
                }
            });

            $carousel.find( '.section' ).height( max );
        }
    }

    $carousel.owlCarousel({
        items: 1,
        loop: true,
        nav: true,
        navText: false,
        mouseDrag: false,
        animateOut: 'fadeOut'
    });

    $win.on( 'resize', update );

    update();

})( jQuery );