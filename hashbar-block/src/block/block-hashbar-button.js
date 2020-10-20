//  Import CSS.
import "./editor.scss";
import "./style.scss";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { Button, TextControl, TextareaControl, Dashicon, PanelBody, panelRow, FormToggle, RadioControl, SelectControl }= wp.components;
const { InspectorControls, ColorPalette, RichText} = wp.editor;


/**`
 * Register: a Gutenberg Block.
 *
 */
 
registerBlockType("hashbar/hashbar-button", {
	title: __("Hashbar Button"),
	icon: "editor-bold",
	category: "common",
	keywords: [
		__("hashbar"),
		__("button"),
	],
	attributes: {
		hasbarButton:{
			type:"object",
			default:{
				text:'Button',
				link:'#'
			}
		},
		hashbarBtnRemove:{
			type:"string",
			default:'yes'
		},
		hashbarBtnPosition:{
			type:"string",
			default:"before"
		},
		hashbarContent:{
			type:"string"
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
		hashbarBtnStyle:{
			type:"string",
			default:"style_1"
		},
		hasbarBtnBgColor:{
			type:"string",
		},
		hasbarBtnTxtColor:{
			type:"string",
		}
	},

	edit: ({ attributes, setAttributes, className, isSelected }) => {

		const onChangBtnText = (newBtnText) => {
			const newhasbarButton = {...attributes.hasbarButton};
			newhasbarButton.text = newBtnText;
			setAttributes({hasbarButton:newhasbarButton});
		}

		const ToggelButton = () => {
			let btnState = attributes.hashbarBtnRemove;
			let changeBtnValue = btnState === 'yes' ? 'no' : 'yes';
			setAttributes({hashbarBtnRemove:changeBtnValue})
		}

		const onChangeBtnMarginTop = (newMarginTop) => {
			setAttributes({ BtnMarginTop:newMarginTop });
		}

		const onChangeBtnMarginRight = (newMarginRight) => {
			setAttributes({ BtnMarginRight:newMarginRight });
		}

		const onChangeBtnMarginBottom = (newMarginBottom) => {
			setAttributes({ BtnMarginBottom:newMarginBottom });
		}

		const onChangeBtnMarginLeft = (newMarginLeft) => {
			setAttributes({ BtnMarginLeft:newMarginLeft });
		}

		const onChangeContent = (newContent) => {
			setAttributes({hashbarContent:newContent})
		}

		const onChangePosition = (newBtnPositon) => {
			setAttributes({hashbarBtnPosition:newBtnPositon});
		}

		const onChangeBtnMargin = (newBtnMargin) => {
			setAttributes({hashbarBtnMargin:newBtnMargin})
		}

		const onChangeBtnStyle = (newBtnStyle) => {
			setAttributes({ hashbarBtnStyle:newBtnStyle })
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
							<RadioControl
	                        label="Select Button Positon"
	                        selected={ attributes.hashbarBtnPosition }
	                        options={[
	                            { label: 'Before Content', value: 'before' },
	                            { label: 'After Cotent', value: 'after' },
	                        ]}
	                        onChange={onChangePosition} />
	                    </div>
						<div className="panel-item">
							<TextControl
								label="Button Text"
								placeholder="give button name"
								value={attributes.hasbarButton.text}
								onChange={onChangBtnText}
								style={{ marginBottom: 20}}
							/>
						</div>
						<div className="panel-item">
							<TextControl
								label="Button Link"
								placeholder="Link"
								style={{ marginBottom: 20}}
							/>
						</div>
						<div className="panel-item">
							<p>{__('Button Margin')}</p>
							<div className="btn-margin-set" style={{display:"flex"}}>
								<TextControl
									help="top"
									type="number"
									value={attributes.BtnMarginTop}
									onChange={onChangeBtnMarginTop}
								/>
								<TextControl
									help="right"
									type="number"
									value={attributes.BtnMarginRight}
									onChange={onChangeBtnMarginRight}
								/>
								<TextControl
									help="bottom"
									type="number"
									value={attributes.BtnMarginBottom}
									onChange={onChangeBtnMarginBottom}
								/>
								<TextControl
									help="left"
									type="number"
									value={attributes.BtnMarginLeft}
									onChange={onChangeBtnMarginLeft}
								/>
							</div>
							<div className="panel-item">
								<SelectControl
							        label={__("Button Style")}
							        value={ attributes.hashbarBtnStyle }
							        options={ [
							            { label: 'Style 1', value: 'style_1' },
							            { label: 'Style 2', value: 'style_2' }
							        ] }
							        onChange={ onChangeBtnStyle }
							    />
							</div>
						</div>
						<div className="panel-item">
							<p>
								<strong>
									Button Background Color
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
									Button Text Color
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
				<div className={className}>
					{attributes.hashbarBtnPosition === 'before' ? (
						<div style={{display:"flex"}}>
							{attributes.hashbarBtnRemove == 'yes' ? (
								<a className={"ht_btn " +attributes.hashbarBtnStyle} href={attributes.hasbarButton.link}
									style={{backgroundColor:attributes.hasbarBtnBgColor, 
										color:attributes.hasbarBtnTxtColor,
										marginTop: attributes.BtnMarginTop + "px",
										marginRight: attributes.BtnMarginRight + "px",
										marginBottom: attributes.BtnMarginBottom + "px",
										marginLeft: attributes.BtnMarginLeft + "px"}}>
									{attributes.hasbarButton.text}
								</a>
							):""}

							<RichText
				                tagName="p"
				                className={ className }
				                value={ attributes.hashbarContent } 
				                onChange={ onChangeContent }
				                placeholder={ __( 'Content' ) }
				                style={{margin:"0px",
				                		padding:"0px"}}
				            />
						</div>
					):(
						<div style={{display:"flex"}}>
							<RichText
				                tagName="p"
				                className={ className }
				                value={ attributes.hashbarContent } 
				                onChange={ onChangeContent }
				                placeholder={ __( 'Content' ) }
				                style={{margin:"0px",
				                		padding:"0px"}}
				            />
							{attributes.hashbarBtnRemove === 'yes' ? (
								<a className={"ht_btn "+attributes.hashbarBtnStyle} href={attributes.hasbarButton.link}
									style={{backgroundColor:attributes.hasbarBtnBgColor, 
									color:attributes.hasbarBtnTxtColor,
									marginTop: attributes.BtnMarginTop + "px",
									marginRight: attributes.BtnMarginRight + "px",
									marginBottom: attributes.BtnMarginBottom + "px",
									marginLeft: attributes.BtnMarginLeft + "px"}}>

									{attributes.hasbarButton.text}
								</a>
							):""}
						</div>
					)}
				</div>
			</Fragment>
		);
	},

	save: ({ attributes }) => {
		
		return null;

	},
});
