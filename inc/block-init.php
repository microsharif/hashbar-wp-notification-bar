<?php
/**
 * Blocks Initializer
 *
 * Enqueue CSS/JS of all the blocks.
 *
 * @since   1.0.0
 * @package CGB
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Enqueue Gutenberg block assets for both frontend + backend.
 *
 * Assets enqueued:
 * 1. blocks.style.build.css - Frontend + Backend.
 * 2. blocks.build.js - Backend.
 * 3. blocks.editor.build.css - Backend.
 *
 * @uses {wp-blocks} for block type registration & related functions.
 * @uses {wp-element} for WP Element abstraction — structure of blocks.
 * @uses {wp-i18n} to internationalize the block's text.
 * @uses {wp-editor} for WP editor styles.
 * @since 1.0.0
 */

function hashbar_wpnb_check_post(){

    if(isset($_GET['post'])){
        $get_custom_post = get_post($_GET['post']);
        $get_custom_post_type = $get_custom_post->post_type;
    }

    if((isset($_GET['post_type']) && $_GET['post_type'] == 'wphash_ntf_bar') || $get_custom_post_type == 'wphash_ntf_bar'){

        return true;
    }

    return false;
}

/*function hashbar_block_render ($attr){
	$post_id = (string) get_the_id();
	$classes = sprintf("hash-post-%s",$post_id);
	$btn_text = isset($attr['hasbarButton']) ? $attr['hasbarButton']['text'] : __("Button","hashbar");
	$btn_link = isset($attr['hasbarButton']) ? $attr['hasbarButton']['link'] : "#";

	$style ="";

	ob_start()
	?>
		<?php if($attr['hashbarBtnPosition'] === 'before'): ?>
			<p>
				<?php if($attr['hashbarBtnRemove'] === 'yes'): ?>
					<a class="ht_btn style_1 <?php echo esc_attr($classes); ?>" href="<?php echo esc_url($btn_link); ?>"><?php echo esc_html($btn_text); ?></a>
				<?php endif; ?>
				<?php if(isset($attr['hashbarContent']) && !empty($attr['hashbarContent'])): 
					echo esc_html($attr['hashbarContent']); 
				 endif; ?>
			</p>
		<?php else: ?>
			<p>
				<?php if(isset($attr['hashbarContent']) && !empty($attr['hashbarContent'])): 
					echo esc_html($attr['hashbarContent']); 
				endif; ?>
				<?php if($attr['hashbarBtnRemove'] === 'yes'): ?>
					<a class="ht_btn style_1 <?php echo esc_attr($classes); ?>" href="<?php echo esc_url($btn_link); ?>"><?php echo esc_html($btn_text); ?></a>
				<?php endif; ?>
			</p>
		<?php endif; ?>
	<?php

	if(isset($attr['BtnMarginTop']) || isset($attr['BtnMarginRight']) || isset($attr['BtnMarginBottom']) || isset($attr['BtnMarginLeft'])){

		$margin_top 	= isset($attr['BtnMarginTop'])? $attr['BtnMarginTop']:'0';
		$margin_right   = isset($attr['BtnMarginRight'])? $attr['BtnMarginRight']:'10';
		$margin_bottom  = isset($attr['BtnMarginBottom'])? $attr['BtnMarginBottom']:'0';
		$margin_left 	= isset($attr['BtnMarginLeft'])? $attr['BtnMarginLeft']:'10';

		$style.= ".ht-notification-text .ht_btn.hash-post-".$post_id."{margin:".$margin_top."px ".$margin_right."px ".$margin_bottom."px ".$margin_left."px; }";
	}

	if(isset($attr['BtnPaddingTop']) || isset($attr['BtnPaddingRight']) || isset($attr['BtnPaddingBottom']) || isset($attr['BtnPaddingLeft'])){

		$padding_top 	= isset($attr['BtnPaddingTop'])? $attr['BtnPaddingTop']:'10';
		$padding_right   = isset($attr['BtnPaddingRight'])? $attr['BtnPaddingRight']:'30';
		$padding_bottom  = isset($attr['BtnPaddingBottom'])? $attr['BtnPaddingBottom']:'10';
		$padding_left 	= isset($attr['BtnPaddingLeft'])? $attr['BtnPaddingLeft']:'30';

		$style.= ".ht-notification-text .ht_btn.hash-post-".$post_id."{padding:".$padding_top."px ".$padding_right."px ".$padding_bottom."px ".$padding_left."px; }";
	}

	if(isset($attr['hasbarBtnBgColor']) && !empty($attr['hasbarBtnBgColor'])){
		$style.= ".ht-notification-text .ht_btn.hash-post-".$post_id."{background-color:".$attr['hasbarBtnBgColor']."; }";
	}

	if(isset($attr['hasbarBtnTxtColor']) && !empty($attr['hasbarBtnTxtColor'])){
		$style.= ".ht-notification-text .ht_btn.hash-post-".$post_id."{color:".$attr['hasbarBtnTxtColor']."; }";
	}

	if(isset($attr['BtnBorderRadius']) && !empty($attr['BtnBorderRadius'])){
		$style.= ".ht-notification-text .ht_btn.hash-post-".$post_id."{border-radius:".$attr['BtnBorderRadius']."px; }";
	}

	if(isset($attr['hasbarBtnFontSize']) && !empty($attr['hasbarBtnFontSize'])){
		$style.= ".ht-notification-text .ht_btn.hash-post-".$post_id."{font-size:".$attr['hasbarBtnFontSize']."px; }";
	}

	if(strlen($style) > 0){
		?>
			<style type="text/css">
				<?php echo $style; ?>
			</style>
		<?php
	}

	return ob_get_clean();
}*/

function hashbar_block_assets() {
	// Register block styles for both frontend + backend.
	wp_register_style(
		'hashbar-block-style-css',
		plugins_url( 'hashbar-block/dist/blocks.style.build.css', HASHBAR_WPNB_ROOT ),
		is_admin() ? array( 'wp-editor' ) : null,
		null
	);

	// Register block editor styles for backend.
	wp_register_style(
		'hashbar-block-editor-css', // Handle.
		plugins_url( 'hashbar-block/dist/blocks.editor.build.css', HASHBAR_WPNB_ROOT ),
		array( 'wp-edit-blocks' ),
		null
	);

	// Register block editor script for backend.
	wp_register_script(
		'hashbar-block-js',
		plugins_url( 'hashbar-block/dist/blocks.build.js', HASHBAR_WPNB_ROOT ), 
		array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ), 
		null, 
		true
	);

	// WP Localized globals. Use dynamic PHP stuff in JavaScript via `rocketGlobal` object.
	wp_localize_script(
		'hashbar-block-js',
		'hashbarGlobal',
		[
			'pluginDirPath'   	=> plugin_dir_path( __DIR__ ),
			'pluginDirUrl'    	=> plugin_dir_url( __DIR__ )
		]
	);

	/**
	 * Register Gutenberg block on server-side.
	 *
	 * Register the block on server-side to ensure that the block
	 * scripts and styles for both frontend and backend are
	 * enqueued when the editor loads.
	 *
	 * @link https://wordpress.org/gutenberg/handbook/blocks/writing-your-first-block-type#enqueuing-block-scripts
	 * @since 1.16.0
	 */
	register_block_type(
		'hashbar/hashbar-button', array(
			// Enqueue blocks.style.build.css on both frontend & backend.
			'style'         => 'hashbar-block-style-css',
			'bootstrap'     => 'bootstrap-style',
			// Enqueue blocks.build.js in the editor only.
			'editor_script' => 'hashbar-block-js',
			// Enqueue blocks.editor.build.css in the editor only.
			'editor_style'  => 'hashbar-block-editor-css',
		)
	);
}

// Hook: Block assets.
if(is_admin()){
	if(hashbar_wpnb_check_post()){
		add_action( 'init', 'hashbar_block_assets' );
	}
}else{
	add_action( 'init', 'hashbar_block_assets' );
}
