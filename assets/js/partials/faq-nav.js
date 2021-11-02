/**
 * FAQ Nav
 */

(function( $ ) {

    'use strict';

    if( isMobile() ) return;

    var $links = $( '.faq_nav a' );

    function handleClick( e ) {
        var target = $(this.hash);

        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

         if (target.length) {
            e.preventDefault();

            $('html, body').animate({

                scrollTop: target.offset().top - 115

            }, 1000);
         }

    }

    $links.on( 'click', handleClick );

})( jQuery );