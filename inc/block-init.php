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

function hashbar_block_render ($attr){
	//var_dump($attr);
	$btn_style_class = $attr['hashbarBtnStyle'] ? $attr['hashbarBtnStyle'] : 'style_1';
	$style = "<style>";
	ob_start()
	?>
		<?php if(isset($attr['hashbarBtnPosition'])): ?>
			<p>
				<?php if(isset($attr['hashbarContent']) && !empty($attr['hashbarContent'])): 
					echo esc_html($attr['hashbarContent']); 
				 endif; ?>
				<?php if($attr['hashbarBtnRemove'] === 'yes'): ?>
					<a class="ht_btn <?php echo esc_attr($btn_style_class); ?>" href="<?php echo $attr['hasbarButton'] ? esc_url($attr['hasbarButton']['link']):'#'; ?>"><?php echo esc_html($attr['hasbarButton']['text']); ?></a>
				<?php endif; ?>
			</p>
		<?php else: ?>
			<p>
				<?php if($attr['hashbarBtnRemove'] === 'yes'): ?>
					<a class="ht_btn <?php echo esc_attr($btn_style_class); ?>" href="<?php echo $attr['hasbarButton'] ? esc_url($attr['hasbarButton']['link']):'#'; ?>"><?php echo esc_html($attr['hasbarButton']['text']); ?></a>
				<?php endif; ?>
				<?php if(isset($attr['hashbarContent']) && !empty($attr['hashbarContent'])): 
					echo esc_html($attr['hashbarContent']); 
				 endif; ?>
			</p>
		<?php endif; ?>
	<?php

	if(isset($attr['BtnMarginTop']) || isset($attr['BtnMarginRight']) || isset($attr['BtnMarginBottom']) || isset($attr['BtnMarginLeft'])){

		$margin_top 	= isset($attr['BtnMarginTop'])? $attr['BtnMarginTop']:'0';
		$margin_right   = isset($attr['BtnMarginRight'])? $attr['BtnMarginRight']:'10';
		$margin_bottom  = isset($attr['BtnMarginBottom'])? $attr['BtnMarginBottom']:'0';
		$margin_left 	= isset($attr['BtnMarginLeft'])? $attr['BtnMarginLeft']:'10';

		$style.= ".ht-notification-text .ht_btn.".$btn_style_class."{margin:".$margin_top."px ".$margin_right."px ".$margin_bottom."px ".$margin_left."px; }";
	}

	if(isset($attr['BtnPaddingTop']) || isset($attr['BtnPaddingRight']) || isset($attr['BtnPaddingBottom']) || isset($attr['BtnPaddingLeft'])){

		$padding_top 	= isset($attr['BtnPaddingTop'])? $attr['BtnPaddingTop']:'4';
		$padding_right   = isset($attr['BtnPaddingRight'])? $attr['BtnPaddingRight']:'10';
		$padding_bottom  = isset($attr['BtnPaddingBottom'])? $attr['BtnPaddingBottom']:'4';
		$padding_left 	= isset($attr['BtnPaddingLeft'])? $attr['BtnPaddingLeft']:'10';

		$style.= ".ht-notification-text .ht_btn.".$btn_style_class."{padding:".$padding_top."px ".$padding_right."px ".$padding_bottom."px ".$padding_left."px; }";
	}

	if(isset($attr['hasbarBtnBgColor']) && !empty($attr['hasbarBtnBgColor'])){
		$style.= ".ht-notification-text .ht_btn.".$btn_style_class."{background-color:".$attr['hasbarBtnBgColor']."; }";
	}

	if(isset($attr['hasbarBtnTxtColor']) && !empty($attr['hasbarBtnTxtColor'])){
		$style.= ".ht-notification-text .ht_btn.".$btn_style_class."{color:".$attr['hasbarBtnTxtColor']."; }";
	}

	$style.="</style>";
	echo $style;
	return ob_get_clean();
}

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

	// Register Bootstrap styles
	wp_enqueue_style('bootstrap-style',  'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/css/bootstrap-grid.min.css');

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
			//render block from server
			'render_callback' => 'hashbar_block_render',
			'attributes' => array(
				'hasbarButton' => array(
					'type'    => 'string',
					'default' => array(
									'text' => 'Button',
									'link' => '#'
								),
				),
				'hashbarBtnStyle' => array(
					'type' => 'string',
					'default' => 'style_1'
				),
				'hashbarBtnRemove' => array(
					'type' => 'string',
					'default' => 'yes'
				),
				/*'BtnMarginTop' => array(
					'type' => 'string',
					'default' => '0'
				),
				'BtnMarginRight' => array(
					'type' => 'string',
					'default' => '10'
				),
				'BtnMarginBottom' => array(
					'type' => 'string',
					'default' => '0'
				),
				'BtnMarginLeft' => array(
					'type' => 'string',
					'default' => '10'
				)*/
			)
		)
	);
}

// Hook: Block assets.
add_action( 'init', 'hashbar_block_assets' );
