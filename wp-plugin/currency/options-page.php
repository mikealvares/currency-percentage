<?php
    add_action('admin_menu', 'lst_add_admin_page');
    function lst_add_admin_page() {
        add_menu_page('Currency Settings', 'FX Rates', 'upload_files', 'plugin', 'lst_options_page','',3);
    }
    
    function lst_options_page() {
?>
	<iframe src="<link to react app>/admin" width="100%" height="600px" style="border:none;"></iframe>
<?php
    }
?>