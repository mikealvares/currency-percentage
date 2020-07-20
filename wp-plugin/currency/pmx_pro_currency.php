<?php
/*
Plugin Name: Currency Percentage Table
Description: Displays a table with percentges charged for FX
Author: Michael Alvares
*/
    defined( 'ABSPATH' ) || exit;
    require_once( __DIR__.'/options-page.php' );

    function pmxcurr_shortcode() {
        $string = '<iframe src="<link to react app>" width="100%" height="600px" style="border:none;"></iframe>';
        return $string;
    }
    
    add_shortcode( 'pmxcurr', 'pmxcurr_shortcode' );
