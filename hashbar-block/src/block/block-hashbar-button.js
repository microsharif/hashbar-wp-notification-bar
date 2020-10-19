//  Import CSS.
import "./editor.scss";
import "./style.scss";

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { Fragment } = wp.element;
const { Button, TextControl, TextareaControl, Dashicon, PanelBody  }     = wp.components;
const { InspectorControls, ColorPalette} = wp.editor;


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
			type:"boolean"
		},
		hashbarContent:{
			type:"string"
		},
		hashbarBtnMargin:{
			type:"string"
		},
		hasbarBtnBgColor:{
			type:"string",
			default:"#e3e3e3"
		},
		hasbarBtnTxtColor:{
			type:"string",
			default:"#00000"
		}
	},

	edit: ({ attributes, setAttributes, className, isSelected }) => {
		console.log(attributes.hasbarButton.text)
		const onChangBtnText = (newBtnText) => {
			const newhasbarButton = {...attributes.hasbarButton};
			newhasbarButton.text = newBtnText;
			setAttributes({hasbarButton:newhasbarButton});
		}

		const onChangeContent = (newContent) => {
			setAttributes({hashbarContent:newContent})
		}

		const onChangeBtnMargin = (NewBtnMargin) => {
			setAttributes({hashbarBtnMargin:NewBtnMargin})
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
						<div className="panel-item">
							<TextControl
								label="Button Text"
								placeholder="give button name"
								value={attributes.hasbarButton.text}
								onChange={onChangBtnText}
								style={{ marginBottom: 20}}
							/>
							<TextControl
								label="Button Link"
								placeholder="Link"
								style={{ marginBottom: 20}}
							/>
							<TextControl
								label="Margin Right"
								placeholder="0px"
								value={attributes.hashbarBtnMargin}
								onChange={onChangeContent}
								style={{ marginBottom: 20}}
							/>
							<TextareaControl
								label="Hashbar content"
								help="Enter Notification Content"
								value={attributes.hashbarContent}
								onChange={onChangeBtnMargin}
								style={{ color: attributes.contentColor }}
							/>
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
					<div style={{ display:"flex" }}>
						<a href={attributes.hasbarButton.link}><button style={{backgroundColor:attributes.hasbarBtnBgColor, color:attributes.hasbarBtnTxtColor,marginRight:attributes.hashbarBtnMargin}}>{attributes.hasbarButton.text}</button></a>
						<p style={{margin:"0px", padding:"0px;"}}>{attributes.hashbarContent}</p>
					</div>
				</div>
			</Fragment>
		);
	},

	save: ({ attributes }) => {
		
		return null;
	},
});
