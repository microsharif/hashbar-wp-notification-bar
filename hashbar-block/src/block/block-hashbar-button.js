//  Import CSS.
import "./editor.scss";
import "./style.scss";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { Button, TextControl, TextareaControl, Dashicon, PanelBody, panelRow, FormToggle, RadioControl, SelectControl }= wp.components;
const { InspectorControls, ColorPalette, RichText, AlignmentToolbar, BlockControls} = wp.editor;


/**`
 * Register: a Gutenberg Block.
 *
 */
 
registerBlockType("hashbar/hashbar-button", {
	title: __("Hashbar Button","hashbar"),
	icon: "editor-bold",
	category: "common",
	keywords: [
		__("hashbar", "hashbar"),
		__("button", "hashbar"),
	],
	example: {
		attributes: {
			value: __( 'Hashbar Button', 'hashbar' )
		},
	},
	attributes: {
		textAlignment: {
			type: 'string',
		},
		hasbarButton:{
			type:"object",
			default:{
				text:'Button',
				link:'#'
			}
		},
		hasbarBtnFontSize:{
			type:"number",
			default:18
		},
		hashbarBtnRemove:{
			type:"string",
			default:'yes'
		},
		hashbarContent:{
			type:"string"
		},
		BtnBorderRadius:{
			type:"number",
			default:3
		},
		BtnMarginTop:{
			type: "number",
			default: 0
		},
		BtnMarginRight:{
			type:"number",
			default:10
		},
		BtnMarginBottom:{
			type:"number",
			default:0
		},
		BtnMarginLeft:{
			type:"number",
			default:10
		},
		BtnPaddingTop:{
			type: "number",
			default: 10
		},
		BtnPaddingRight:{
			type:"number",
			default:30
		},
		BtnPaddingBottom:{
			type:"number",
			default:10
		},
		BtnPaddingLeft:{
			type:"number",
			default:30
		},
		hasbarBtnBgColor:{
			type:"string",
			default:"#fdd835"
		},
		hasbarBtnTxtColor:{
			type:"string",
		}
	},

	edit: ({ attributes, setAttributes, className, isSelected }) => {

		const alignmentClass = (attributes.textAlignment != null) ? 'has-text-align-' + attributes.textAlignment : '';

		const onChangBtnText = (newBtnText) => {
			const newhasbarButton = {...attributes.hasbarButton};
			newhasbarButton.text = newBtnText;
			setAttributes({hasbarButton:newhasbarButton});
		}

		const onChangBtnLink = (newBtnLink) => {
			const newhasbarButton = {...attributes.hasbarButton};
			newhasbarButton.link = newBtnLink;
			setAttributes({hasbarButton:newhasbarButton});
		}

		const ToggelButton = () => {
			let btnState = attributes.hashbarBtnRemove;
			let changeBtnValue = btnState === 'yes' ? 'no' : 'yes';
			setAttributes({hashbarBtnRemove:changeBtnValue})
		}

		const onChangeBtnFontSize = (newFontSize) => {
			setAttributes({hasbarBtnFontSize:parseInt(newFontSize)});
		}

		const onChangeBtnBordeRadius = (newBorderRadius) => {
			setAttributes({BtnBorderRadius:parseInt(newBorderRadius)});
		}

		const onChangeBtnMarginTop = (newMarginTop) => {
			setAttributes({ BtnMarginTop:parseInt(newMarginTop) });
		}

		const onChangeBtnMarginRight = (newMarginRight) => {
			setAttributes({ BtnMarginRight:parseInt(newMarginRight) });
		}

		const onChangeBtnMarginBottom = (newMarginBottom) => {
			setAttributes({ BtnMarginBottom:parseInt(newMarginBottom) });
		}

		const onChangeBtnMarginLeft = (newMarginLeft) => {
			setAttributes({ BtnMarginLeft:parseInt(newMarginLeft) });
		}

		const onChangeBtnPaddingTop = (newPaddingTop) => {
			setAttributes({ BtnPaddingTop:parseInt(newPaddingTop) });
		}

		const onChangeBtnPaddingRight = (newPaddingRight) => {
			setAttributes({ BtnPaddingRight:parseInt(newPaddingRight) });
		}

		const onChangeBtnPaddingBottom = (newPaddingBottom) => {
			setAttributes({ BtnPaddingBottom:parseInt(newPaddingBottom) });
		}

		const onChangeBtnPaddingLeft = (newPaddingLeft) => {
			setAttributes({ BtnPaddingLeft:parseInt(newPaddingLeft) });
		}

		const onChangeContent = (newContent) => {
			setAttributes({hashbarContent:newContent})
		}

		const onChangeBtnMargin = (newBtnMargin) => {
			setAttributes({hashbarBtnMargin:newBtnMargin})
		}

		const onChangeButnBgColor = (newBtnBgColor) => {
			setAttributes({hasbarBtnBgColor:newBtnBgColor})
		}

		const onCnangeBtnTxtColor = (newBtnTxtColor) => {
			setAttributes({hasbarBtnTxtColor:newBtnTxtColor})
		}

		const styles = {
			selectedColorDisplay: {
				width: 30,
				height: 12,
				display: "inline-block",
				marginLeft: 10,
				verticalAlign: "middle",
			},
		};

		return (
			<Fragment>
				<InspectorControls>
					<PanelBody title="Button Settings">
						<div className="panel-item btn-appear-wrap" style={{marginBottom:30}}>
							<label htmlFor="switch-btn-enable">
								Button Enable
							</label>
							<FormToggle id='switch-btn-enable' 
							checked={attributes.hashbarBtnRemove === 'yes'} 
							onChange={ToggelButton}/>
						</div>
						<div className="panel-item">
							<TextControl
								label={__("Button Text", "hashbar")}
								placeholder={__("give button name", "hashbar")}
								value={attributes.hasbarButton.text}
								onChange={onChangBtnText}
								style={{ marginBottom: 20}}
							/>
						</div>
						<div className="panel-item">
							<TextControl
								label={__("Button Link", "hashbar")}
								placeholder={__("Link", "hashbar")}
								value={attributes.hasbarButton.link}
								onChange={onChangBtnLink}
								style={{ marginBottom: 20}}
							/>
						</div>
						<div className="panel-item">
							<p>{__("Button Margin", "hashbar")}</p>
							<div className="btn-margin-set" style={{display:"flex"}}>
								<TextControl
									help={__("top", "hashbar")}
									type="number"
									value={attributes.BtnMarginTop}
									onChange={onChangeBtnMarginTop}
								/>
								<TextControl
									help={__("right", "hashbar")}
									type="number"
									value={attributes.BtnMarginRight}
									onChange={onChangeBtnMarginRight}
								/>
								<TextControl
									help={__("bottom", "hashbar")}
									type="number"
									value={attributes.BtnMarginBottom}
									onChange={onChangeBtnMarginBottom}
								/>
								<TextControl
									help={__("left", "hashbar")}
									type="number"
									value={attributes.BtnMarginLeft}
									onChange={onChangeBtnMarginLeft}
								/>
							</div>
							<div className="panel-item">
								<p>{__("Button Padding", "hashbar")}</p>
								<div className="btn-margin-set" style={{display:"flex"}}>
									<TextControl
										help="top"
										type="number"
										value={attributes.BtnPaddingTop}
										onChange={onChangeBtnPaddingTop}
									/>
									<TextControl
										help="right"
										type="number"
										value={attributes.BtnPaddingRight}
										onChange={onChangeBtnPaddingRight}
									/>
									<TextControl
										help="bottom"
										type="number"
										value={attributes.BtnPaddingBottom}
										onChange={onChangeBtnPaddingBottom}
									/>
									<TextControl
										help="left"
										type="number"
										value={attributes.BtnPaddingLeft}
										onChange={onChangeBtnPaddingLeft}
									/>
								</div>
							</div>
							<div className="panel-item">
								<p>Button Border Radius</p>
								<TextControl
									type={__("number", "hashbar")}
									value={attributes.BtnBorderRadius}
									onChange={onChangeBtnBordeRadius}
									style={{width: "60px"}}
								/>
							</div>
							<div className="panel-item">
								<p>{__("Button Font Size", "hashbar")}</p>
								<TextControl
									type={__("number", "hashbar")}
									value={attributes.hasbarBtnFontSize}
									onChange={onChangeBtnFontSize}
									style={{width: "60px"}}
								/>
							</div>
						</div>
						<div className="panel-item">
							<p>
								<strong>
									{__("Button Background Color", "hashbar")}
									<span
										style={{
											...styles.selectedColorDisplay,
											backgroundColor: attributes.hasbarBtnBgColor,
										}}
									/>
								</strong>
							</p>
							<ColorPalette
								value={attributes.hasbarBtnBgColor}
								onChange={onChangeButnBgColor}
							/>
						</div>
						<div className="panel-item">
							<p>
								<strong>
									{__("Button Text Color", "hashbar")}
									<span
										style={{
											...styles.hasbarBtnTxtColor,
											backgroundColor:attributes.hasbarBtnTxtColor
										}}
									/>
								</strong>
							</p>
							<ColorPalette
								value={attributes.hasbarBtnTxtColor}
								onChange={onCnangeBtnTxtColor}
							/>
						</div>
					</PanelBody>
				</InspectorControls>
				<BlockControls>
					<AlignmentToolbar
						value={attributes.textAlignment}
						onChange={(newalign) => setAttributes({ textAlignment: newalign })}
					/>
				</BlockControls>
				<div className={alignmentClass}>
					<RichText
		                className={ className }
		                value={ attributes.hashbarContent } 
		                onChange={ onChangeContent }
		                placeholder={ __( 'Content', "hashbar") }
		                keepPlaceholderOnFocus={true}
		                style={{margin  :"0px",
		                		padding :"0px",
		                		display :"inline-block"}}
		            />
					{attributes.hashbarBtnRemove === 'yes' ? (
						<a className="ht_btn" href={attributes.hasbarButton.link}
							style={{backgroundColor:attributes.hasbarBtnBgColor, 
							color        : attributes.hasbarBtnTxtColor,
							marginTop    : attributes.BtnMarginTop + "px",
							marginRight  : attributes.BtnMarginRight + "px",
							marginBottom : attributes.BtnMarginBottom + "px",
							marginLeft   : attributes.BtnMarginLeft + "px",
							paddingTop   : attributes.BtnPaddingTop + "px",
							paddingRight : attributes.BtnPaddingRight + "px",
							paddingBottom: attributes.BtnPaddingBottom + "px",
							paddingLeft  : attributes.BtnPaddingLeft + "px",
							borderRadius : attributes.BtnBorderRadius + "px",
							fontSize     : attributes.hasbarBtnFontSize + "px"}}
						>

							{attributes.hasbarButton.text}
						</a>
					):""}
				</div>
			</Fragment>
		);
	},

	save: ({ attributes }) => {
		const alignmentClass = (attributes.textAlignment != null) ? 'has-text-align-' + attributes.textAlignment : '';
		return(
			<div className={alignmentClass+" hashbar-free-wraper"}>
				<RichText.Content tagName="p" value={ attributes.hashbarContent } />
				{attributes.hashbarBtnRemove === 'yes' ? (
					<a className="ht_btn" href={attributes.hasbarButton.link}
						style={{backgroundColor:attributes.hasbarBtnBgColor, 
						color        : attributes.hasbarBtnTxtColor,
						marginTop    : attributes.BtnMarginTop + "px",
						marginRight  : attributes.BtnMarginRight + "px",
						marginBottom : attributes.BtnMarginBottom + "px",
						marginLeft   : attributes.BtnMarginLeft + "px",
						paddingTop   : attributes.BtnPaddingTop + "px",
						paddingRight : attributes.BtnPaddingRight + "px",
						paddingBottom: attributes.BtnPaddingBottom + "px",
						paddingLeft  : attributes.BtnPaddingLeft + "px",
						borderRadius : attributes.BtnBorderRadius + "px",
						fontSize     : attributes.hasbarBtnFontSize + "px"}}
					>

						{attributes.hasbarButton.text}
					</a>
				):""}
			</div>
		)

	},
});
