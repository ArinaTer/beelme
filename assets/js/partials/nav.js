/**
 * Nav
 */

(function( $ ) {

    'use strict';

    var opened = false;
    var classes = {
        btn: '__on',
        container: '__visible'
    }

    var $btn = $( '[data-navbar="toggle"]' );
    var $container = $( '[data-navbar="container"]' );

    function toggle( state ) {
        var method = state ? $.fn.addClass : $.fn.removeClass;

        method.call( $btn, classes.btn );
        method.call( $container, classes.container );
    }

    function handleClick() {
        opened = !opened;
        toggle( opened );
    }

    $btn.on( 'click', handleClick );

})( jQuery );