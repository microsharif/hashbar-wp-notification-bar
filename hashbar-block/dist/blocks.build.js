/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_block_hashbar_button_js__ = __webpack_require__(/*! ./block/block-hashbar-button.js */ 1);\n/**\r\n * Gutenberg Blocks\r\n *\r\n * All blocks related JavaScript files should be imported here.\r\n * You can create a new block folder in this dir and include code\r\n * for that block here as well.\r\n *\r\n * All blocks should be included here since this is the file that\r\n * Webpack is compiling as the input file.\r\n */\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogR3V0ZW5iZXJnIEJsb2Nrc1xyXG4gKlxyXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cclxuICogWW91IGNhbiBjcmVhdGUgYSBuZXcgYmxvY2sgZm9sZGVyIGluIHRoaXMgZGlyIGFuZCBpbmNsdWRlIGNvZGVcclxuICogZm9yIHRoYXQgYmxvY2sgaGVyZSBhcyB3ZWxsLlxyXG4gKlxyXG4gKiBBbGwgYmxvY2tzIHNob3VsZCBiZSBpbmNsdWRlZCBoZXJlIHNpbmNlIHRoaXMgaXMgdGhlIGZpbGUgdGhhdFxyXG4gKiBXZWJwYWNrIGlzIGNvbXBpbGluZyBhcyB0aGUgaW5wdXQgZmlsZS5cclxuICovXG5pbXBvcnQgXCIuL2Jsb2NrL2Jsb2NrLWhhc2hiYXItYnV0dG9uLmpzXCI7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2tzLmpzXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*******************************************!*\
  !*** ./src/block/block-hashbar-button.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__;\nvar registerBlockType = wp.blocks.registerBlockType;\nvar Fragment = wp.element.Fragment;\nvar _wp$components = wp.components,\n    Button = _wp$components.Button,\n    TextControl = _wp$components.TextControl,\n    TextareaControl = _wp$components.TextareaControl,\n    Dashicon = _wp$components.Dashicon,\n    PanelBody = _wp$components.PanelBody;\nvar _wp$editor = wp.editor,\n    InspectorControls = _wp$editor.InspectorControls,\n    ColorPalette = _wp$editor.ColorPalette;\n\n/**`\r\n * Register: a Gutenberg Block.\r\n *\r\n */\n\nregisterBlockType(\"hashbar/hashbar-button\", {\n\ttitle: __(\"Hashbar Button\"),\n\ticon: \"editor-bold\",\n\tcategory: \"common\",\n\tkeywords: [__(\"hashbar\"), __(\"button\")],\n\tattributes: {\n\t\thasbarButton: {\n\t\t\ttype: \"object\",\n\t\t\tdefault: {\n\t\t\t\ttext: 'Button',\n\t\t\t\tlink: '#'\n\t\t\t}\n\t\t},\n\t\thashbarBtnRemove: {\n\t\t\ttype: \"boolean\"\n\t\t},\n\t\thashbarContent: {\n\t\t\ttype: \"string\"\n\t\t},\n\t\thashbarBtnMargin: {\n\t\t\ttype: \"string\"\n\t\t},\n\t\thasbarBtnBgColor: {\n\t\t\ttype: \"string\",\n\t\t\tdefault: \"#e3e3e3\"\n\t\t},\n\t\thasbarBtnTxtColor: {\n\t\t\ttype: \"string\",\n\t\t\tdefault: \"#00000\"\n\t\t}\n\t},\n\n\tedit: function edit(_ref) {\n\t\tvar attributes = _ref.attributes,\n\t\t    setAttributes = _ref.setAttributes,\n\t\t    className = _ref.className,\n\t\t    isSelected = _ref.isSelected;\n\n\t\tconsole.log(attributes.hasbarButton.text);\n\t\tvar onChangBtnText = function onChangBtnText(newBtnText) {\n\t\t\tvar newhasbarButton = Object.assign({}, attributes.hasbarButton);\n\t\t\tnewhasbarButton.text = newBtnText;\n\t\t\tsetAttributes({ hasbarButton: newhasbarButton });\n\t\t};\n\n\t\tvar onChangeContent = function onChangeContent(newContent) {\n\t\t\tsetAttributes({ hashbarContent: newContent });\n\t\t};\n\n\t\tvar onChangeBtnMargin = function onChangeBtnMargin(NewBtnMargin) {\n\t\t\tsetAttributes({ hashbarBtnMargin: NewBtnMargin });\n\t\t};\n\n\t\tvar onChangeButnBgColor = function onChangeButnBgColor(newBtnBgColor) {\n\t\t\tsetAttributes({ hasbarBtnBgColor: newBtnBgColor });\n\t\t};\n\n\t\tvar onCnangeBtnTxtColor = function onCnangeBtnTxtColor(newBtnTxtColor) {\n\t\t\tsetAttributes({ hasbarBtnTxtColor: newBtnTxtColor });\n\t\t};\n\n\t\tvar styles = {\n\t\t\tselectedColorDisplay: {\n\t\t\t\twidth: 30,\n\t\t\t\theight: 12,\n\t\t\t\tdisplay: \"inline-block\",\n\t\t\t\tmarginLeft: 10,\n\t\t\t\tverticalAlign: \"middle\"\n\t\t\t}\n\t\t};\n\n\t\treturn wp.element.createElement(\n\t\t\tFragment,\n\t\t\tnull,\n\t\t\twp.element.createElement(\n\t\t\t\tInspectorControls,\n\t\t\t\tnull,\n\t\t\t\twp.element.createElement(\n\t\t\t\t\tPanelBody,\n\t\t\t\t\t{ title: \"Button Settings\" },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\"div\",\n\t\t\t\t\t\t{ className: \"panel-item\" },\n\t\t\t\t\t\twp.element.createElement(TextControl, {\n\t\t\t\t\t\t\tlabel: \"Button Text\",\n\t\t\t\t\t\t\tplaceholder: \"give button name\",\n\t\t\t\t\t\t\tvalue: attributes.hasbarButton.text,\n\t\t\t\t\t\t\tonChange: onChangBtnText,\n\t\t\t\t\t\t\tstyle: { marginBottom: 20 }\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(TextControl, {\n\t\t\t\t\t\t\tlabel: \"Button Link\",\n\t\t\t\t\t\t\tplaceholder: \"Link\",\n\t\t\t\t\t\t\tstyle: { marginBottom: 20 }\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(TextControl, {\n\t\t\t\t\t\t\tlabel: \"Margin Right\",\n\t\t\t\t\t\t\tplaceholder: \"0px\",\n\t\t\t\t\t\t\tvalue: attributes.hashbarBtnMargin,\n\t\t\t\t\t\t\tonChange: onChangeContent,\n\t\t\t\t\t\t\tstyle: { marginBottom: 20 }\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(TextareaControl, {\n\t\t\t\t\t\t\tlabel: \"Hashbar content\",\n\t\t\t\t\t\t\thelp: \"Enter Notification Content\",\n\t\t\t\t\t\t\tvalue: attributes.hashbarContent,\n\t\t\t\t\t\t\tonChange: onChangeBtnMargin,\n\t\t\t\t\t\t\tstyle: { color: attributes.contentColor }\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\"p\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\"strong\",\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\"Button Background Color\",\n\t\t\t\t\t\t\t\twp.element.createElement(\"span\", {\n\t\t\t\t\t\t\t\t\tstyle: Object.assign({}, styles.selectedColorDisplay, {\n\t\t\t\t\t\t\t\t\t\tbackgroundColor: attributes.hasbarBtnBgColor\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\twp.element.createElement(ColorPalette, {\n\t\t\t\t\t\t\tvalue: attributes.hasbarBtnBgColor,\n\t\t\t\t\t\t\tonChange: onChangeButnBgColor\n\t\t\t\t\t\t}),\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\"p\",\n\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\t\"strong\",\n\t\t\t\t\t\t\t\tnull,\n\t\t\t\t\t\t\t\t\"Button Text Color\",\n\t\t\t\t\t\t\t\twp.element.createElement(\"span\", {\n\t\t\t\t\t\t\t\t\tstyle: Object.assign({}, styles.hasbarBtnTxtColor, {\n\t\t\t\t\t\t\t\t\t\tbackgroundColor: attributes.hasbarBtnTxtColor\n\t\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t\t})\n\t\t\t\t\t\t\t)\n\t\t\t\t\t\t),\n\t\t\t\t\t\twp.element.createElement(ColorPalette, {\n\t\t\t\t\t\t\tvalue: attributes.hasbarBtnTxtColor,\n\t\t\t\t\t\t\tonChange: onCnangeBtnTxtColor\n\t\t\t\t\t\t})\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t),\n\t\t\twp.element.createElement(\n\t\t\t\t\"div\",\n\t\t\t\t{ className: className },\n\t\t\t\twp.element.createElement(\n\t\t\t\t\t\"div\",\n\t\t\t\t\t{ style: { display: \"flex\" } },\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\"a\",\n\t\t\t\t\t\t{ href: attributes.hasbarButton.link },\n\t\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\t\"button\",\n\t\t\t\t\t\t\t{ style: { backgroundColor: attributes.hasbarBtnBgColor, color: attributes.hasbarBtnTxtColor, marginRight: attributes.hashbarBtnMargin } },\n\t\t\t\t\t\t\tattributes.hasbarButton.text\n\t\t\t\t\t\t)\n\t\t\t\t\t),\n\t\t\t\t\twp.element.createElement(\n\t\t\t\t\t\t\"p\",\n\t\t\t\t\t\t{ style: { margin: \"0px\", padding: \"0px;\" } },\n\t\t\t\t\t\tattributes.hashbarContent\n\t\t\t\t\t)\n\t\t\t\t)\n\t\t\t)\n\t\t);\n\t},\n\n\tsave: function save(_ref2) {\n\t\tvar attributes = _ref2.attributes;\n\n\n\t\treturn null;\n\t}\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9ibG9jay1oYXNoYmFyLWJ1dHRvbi5qcz9lMDNiIl0sInNvdXJjZXNDb250ZW50IjpbIi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0IFwiLi9lZGl0b3Iuc2Nzc1wiO1xuaW1wb3J0IFwiLi9zdHlsZS5zY3NzXCI7XG5cbnZhciBfXyA9IHdwLmkxOG4uX187XG52YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XG52YXIgRnJhZ21lbnQgPSB3cC5lbGVtZW50LkZyYWdtZW50O1xudmFyIF93cCRjb21wb25lbnRzID0gd3AuY29tcG9uZW50cyxcbiAgICBCdXR0b24gPSBfd3AkY29tcG9uZW50cy5CdXR0b24sXG4gICAgVGV4dENvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5UZXh0Q29udHJvbCxcbiAgICBUZXh0YXJlYUNvbnRyb2wgPSBfd3AkY29tcG9uZW50cy5UZXh0YXJlYUNvbnRyb2wsXG4gICAgRGFzaGljb24gPSBfd3AkY29tcG9uZW50cy5EYXNoaWNvbixcbiAgICBQYW5lbEJvZHkgPSBfd3AkY29tcG9uZW50cy5QYW5lbEJvZHk7XG52YXIgX3dwJGVkaXRvciA9IHdwLmVkaXRvcixcbiAgICBJbnNwZWN0b3JDb250cm9scyA9IF93cCRlZGl0b3IuSW5zcGVjdG9yQ29udHJvbHMsXG4gICAgQ29sb3JQYWxldHRlID0gX3dwJGVkaXRvci5Db2xvclBhbGV0dGU7XG5cbi8qKmBcclxuICogUmVnaXN0ZXI6IGEgR3V0ZW5iZXJnIEJsb2NrLlxyXG4gKlxyXG4gKi9cblxucmVnaXN0ZXJCbG9ja1R5cGUoXCJoYXNoYmFyL2hhc2hiYXItYnV0dG9uXCIsIHtcblx0dGl0bGU6IF9fKFwiSGFzaGJhciBCdXR0b25cIiksXG5cdGljb246IFwiZWRpdG9yLWJvbGRcIixcblx0Y2F0ZWdvcnk6IFwiY29tbW9uXCIsXG5cdGtleXdvcmRzOiBbX18oXCJoYXNoYmFyXCIpLCBfXyhcImJ1dHRvblwiKV0sXG5cdGF0dHJpYnV0ZXM6IHtcblx0XHRoYXNiYXJCdXR0b246IHtcblx0XHRcdHR5cGU6IFwib2JqZWN0XCIsXG5cdFx0XHRkZWZhdWx0OiB7XG5cdFx0XHRcdHRleHQ6ICdCdXR0b24nLFxuXHRcdFx0XHRsaW5rOiAnIydcblx0XHRcdH1cblx0XHR9LFxuXHRcdGhhc2hiYXJCdG5SZW1vdmU6IHtcblx0XHRcdHR5cGU6IFwiYm9vbGVhblwiXG5cdFx0fSxcblx0XHRoYXNoYmFyQ29udGVudDoge1xuXHRcdFx0dHlwZTogXCJzdHJpbmdcIlxuXHRcdH0sXG5cdFx0aGFzaGJhckJ0bk1hcmdpbjoge1xuXHRcdFx0dHlwZTogXCJzdHJpbmdcIlxuXHRcdH0sXG5cdFx0aGFzYmFyQnRuQmdDb2xvcjoge1xuXHRcdFx0dHlwZTogXCJzdHJpbmdcIixcblx0XHRcdGRlZmF1bHQ6IFwiI2UzZTNlM1wiXG5cdFx0fSxcblx0XHRoYXNiYXJCdG5UeHRDb2xvcjoge1xuXHRcdFx0dHlwZTogXCJzdHJpbmdcIixcblx0XHRcdGRlZmF1bHQ6IFwiIzAwMDAwXCJcblx0XHR9XG5cdH0sXG5cblx0ZWRpdDogZnVuY3Rpb24gZWRpdChfcmVmKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmLmF0dHJpYnV0ZXMsXG5cdFx0ICAgIHNldEF0dHJpYnV0ZXMgPSBfcmVmLnNldEF0dHJpYnV0ZXMsXG5cdFx0ICAgIGNsYXNzTmFtZSA9IF9yZWYuY2xhc3NOYW1lLFxuXHRcdCAgICBpc1NlbGVjdGVkID0gX3JlZi5pc1NlbGVjdGVkO1xuXG5cdFx0Y29uc29sZS5sb2coYXR0cmlidXRlcy5oYXNiYXJCdXR0b24udGV4dCk7XG5cdFx0dmFyIG9uQ2hhbmdCdG5UZXh0ID0gZnVuY3Rpb24gb25DaGFuZ0J0blRleHQobmV3QnRuVGV4dCkge1xuXHRcdFx0dmFyIG5ld2hhc2JhckJ1dHRvbiA9IE9iamVjdC5hc3NpZ24oe30sIGF0dHJpYnV0ZXMuaGFzYmFyQnV0dG9uKTtcblx0XHRcdG5ld2hhc2JhckJ1dHRvbi50ZXh0ID0gbmV3QnRuVGV4dDtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBoYXNiYXJCdXR0b246IG5ld2hhc2JhckJ1dHRvbiB9KTtcblx0XHR9O1xuXG5cdFx0dmFyIG9uQ2hhbmdlQ29udGVudCA9IGZ1bmN0aW9uIG9uQ2hhbmdlQ29udGVudChuZXdDb250ZW50KSB7XG5cdFx0XHRzZXRBdHRyaWJ1dGVzKHsgaGFzaGJhckNvbnRlbnQ6IG5ld0NvbnRlbnQgfSk7XG5cdFx0fTtcblxuXHRcdHZhciBvbkNoYW5nZUJ0bk1hcmdpbiA9IGZ1bmN0aW9uIG9uQ2hhbmdlQnRuTWFyZ2luKE5ld0J0bk1hcmdpbikge1xuXHRcdFx0c2V0QXR0cmlidXRlcyh7IGhhc2hiYXJCdG5NYXJnaW46IE5ld0J0bk1hcmdpbiB9KTtcblx0XHR9O1xuXG5cdFx0dmFyIG9uQ2hhbmdlQnV0bkJnQ29sb3IgPSBmdW5jdGlvbiBvbkNoYW5nZUJ1dG5CZ0NvbG9yKG5ld0J0bkJnQ29sb3IpIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBoYXNiYXJCdG5CZ0NvbG9yOiBuZXdCdG5CZ0NvbG9yIH0pO1xuXHRcdH07XG5cblx0XHR2YXIgb25DbmFuZ2VCdG5UeHRDb2xvciA9IGZ1bmN0aW9uIG9uQ25hbmdlQnRuVHh0Q29sb3IobmV3QnRuVHh0Q29sb3IpIHtcblx0XHRcdHNldEF0dHJpYnV0ZXMoeyBoYXNiYXJCdG5UeHRDb2xvcjogbmV3QnRuVHh0Q29sb3IgfSk7XG5cdFx0fTtcblxuXHRcdHZhciBzdHlsZXMgPSB7XG5cdFx0XHRzZWxlY3RlZENvbG9yRGlzcGxheToge1xuXHRcdFx0XHR3aWR0aDogMzAsXG5cdFx0XHRcdGhlaWdodDogMTIsXG5cdFx0XHRcdGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsXG5cdFx0XHRcdG1hcmdpbkxlZnQ6IDEwLFxuXHRcdFx0XHR2ZXJ0aWNhbEFsaWduOiBcIm1pZGRsZVwiXG5cdFx0XHR9XG5cdFx0fTtcblxuXHRcdHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRGcmFnbWVudCxcblx0XHRcdG51bGwsXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdEluc3BlY3RvckNvbnRyb2xzLFxuXHRcdFx0XHRudWxsLFxuXHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0UGFuZWxCb2R5LFxuXHRcdFx0XHRcdHsgdGl0bGU6IFwiQnV0dG9uIFNldHRpbmdzXCIgfSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcImRpdlwiLFxuXHRcdFx0XHRcdFx0eyBjbGFzc05hbWU6IFwicGFuZWwtaXRlbVwiIH0sXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dENvbnRyb2wsIHtcblx0XHRcdFx0XHRcdFx0bGFiZWw6IFwiQnV0dG9uIFRleHRcIixcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI6IFwiZ2l2ZSBidXR0b24gbmFtZVwiLFxuXHRcdFx0XHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5oYXNiYXJCdXR0b24udGV4dCxcblx0XHRcdFx0XHRcdFx0b25DaGFuZ2U6IG9uQ2hhbmdCdG5UZXh0LFxuXHRcdFx0XHRcdFx0XHRzdHlsZTogeyBtYXJnaW5Cb3R0b206IDIwIH1cblx0XHRcdFx0XHRcdH0pLFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFRleHRDb250cm9sLCB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBcIkJ1dHRvbiBMaW5rXCIsXG5cdFx0XHRcdFx0XHRcdHBsYWNlaG9sZGVyOiBcIkxpbmtcIixcblx0XHRcdFx0XHRcdFx0c3R5bGU6IHsgbWFyZ2luQm90dG9tOiAyMCB9XG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChUZXh0Q29udHJvbCwge1xuXHRcdFx0XHRcdFx0XHRsYWJlbDogXCJNYXJnaW4gUmlnaHRcIixcblx0XHRcdFx0XHRcdFx0cGxhY2Vob2xkZXI6IFwiMHB4XCIsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmhhc2hiYXJCdG5NYXJnaW4sXG5cdFx0XHRcdFx0XHRcdG9uQ2hhbmdlOiBvbkNoYW5nZUNvbnRlbnQsXG5cdFx0XHRcdFx0XHRcdHN0eWxlOiB7IG1hcmdpbkJvdHRvbTogMjAgfVxuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoVGV4dGFyZWFDb250cm9sLCB7XG5cdFx0XHRcdFx0XHRcdGxhYmVsOiBcIkhhc2hiYXIgY29udGVudFwiLFxuXHRcdFx0XHRcdFx0XHRoZWxwOiBcIkVudGVyIE5vdGlmaWNhdGlvbiBDb250ZW50XCIsXG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmhhc2hiYXJDb250ZW50LFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VCdG5NYXJnaW4sXG5cdFx0XHRcdFx0XHRcdHN0eWxlOiB7IGNvbG9yOiBhdHRyaWJ1dGVzLmNvbnRlbnRDb2xvciB9XG5cdFx0XHRcdFx0XHR9KSxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XCJwXCIsXG5cdFx0XHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XHRcInN0cm9uZ1wiLFxuXHRcdFx0XHRcdFx0XHRcdG51bGwsXG5cdFx0XHRcdFx0XHRcdFx0XCJCdXR0b24gQmFja2dyb3VuZCBDb2xvclwiLFxuXHRcdFx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuXHRcdFx0XHRcdFx0XHRcdFx0c3R5bGU6IE9iamVjdC5hc3NpZ24oe30sIHN0eWxlcy5zZWxlY3RlZENvbG9yRGlzcGxheSwge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRiYWNrZ3JvdW5kQ29sb3I6IGF0dHJpYnV0ZXMuaGFzYmFyQnRuQmdDb2xvclxuXHRcdFx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0XHQpLFxuXHRcdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KENvbG9yUGFsZXR0ZSwge1xuXHRcdFx0XHRcdFx0XHR2YWx1ZTogYXR0cmlidXRlcy5oYXNiYXJCdG5CZ0NvbG9yLFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogb25DaGFuZ2VCdXRuQmdDb2xvclxuXHRcdFx0XHRcdFx0fSksXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFwicFwiLFxuXHRcdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcdFx0XCJzdHJvbmdcIixcblx0XHRcdFx0XHRcdFx0XHRudWxsLFxuXHRcdFx0XHRcdFx0XHRcdFwiQnV0dG9uIFRleHQgQ29sb3JcIixcblx0XHRcdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcblx0XHRcdFx0XHRcdFx0XHRcdHN0eWxlOiBPYmplY3QuYXNzaWduKHt9LCBzdHlsZXMuaGFzYmFyQnRuVHh0Q29sb3IsIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0YmFja2dyb3VuZENvbG9yOiBhdHRyaWJ1dGVzLmhhc2JhckJ0blR4dENvbG9yXG5cdFx0XHRcdFx0XHRcdFx0XHR9KVxuXHRcdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdClcblx0XHRcdFx0XHRcdCksXG5cdFx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoQ29sb3JQYWxldHRlLCB7XG5cdFx0XHRcdFx0XHRcdHZhbHVlOiBhdHRyaWJ1dGVzLmhhc2JhckJ0blR4dENvbG9yLFxuXHRcdFx0XHRcdFx0XHRvbkNoYW5nZTogb25DbmFuZ2VCdG5UeHRDb2xvclxuXHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHQpXG5cdFx0XHRcdClcblx0XHRcdCksXG5cdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcblx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFwiZGl2XCIsXG5cdFx0XHRcdFx0eyBzdHlsZTogeyBkaXNwbGF5OiBcImZsZXhcIiB9IH0sXG5cdFx0XHRcdFx0d3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuXHRcdFx0XHRcdFx0XCJhXCIsXG5cdFx0XHRcdFx0XHR7IGhyZWY6IGF0dHJpYnV0ZXMuaGFzYmFyQnV0dG9uLmxpbmsgfSxcblx0XHRcdFx0XHRcdHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChcblx0XHRcdFx0XHRcdFx0XCJidXR0b25cIixcblx0XHRcdFx0XHRcdFx0eyBzdHlsZTogeyBiYWNrZ3JvdW5kQ29sb3I6IGF0dHJpYnV0ZXMuaGFzYmFyQnRuQmdDb2xvciwgY29sb3I6IGF0dHJpYnV0ZXMuaGFzYmFyQnRuVHh0Q29sb3IsIG1hcmdpblJpZ2h0OiBhdHRyaWJ1dGVzLmhhc2hiYXJCdG5NYXJnaW4gfSB9LFxuXHRcdFx0XHRcdFx0XHRhdHRyaWJ1dGVzLmhhc2JhckJ1dHRvbi50ZXh0XG5cdFx0XHRcdFx0XHQpXG5cdFx0XHRcdFx0KSxcblx0XHRcdFx0XHR3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG5cdFx0XHRcdFx0XHRcInBcIixcblx0XHRcdFx0XHRcdHsgc3R5bGU6IHsgbWFyZ2luOiBcIjBweFwiLCBwYWRkaW5nOiBcIjBweDtcIiB9IH0sXG5cdFx0XHRcdFx0XHRhdHRyaWJ1dGVzLmhhc2hiYXJDb250ZW50XG5cdFx0XHRcdFx0KVxuXHRcdFx0XHQpXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHRzYXZlOiBmdW5jdGlvbiBzYXZlKF9yZWYyKSB7XG5cdFx0dmFyIGF0dHJpYnV0ZXMgPSBfcmVmMi5hdHRyaWJ1dGVzO1xuXG5cblx0XHRyZXR1cm4gbnVsbDtcblx0fVxufSk7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svYmxvY2staGFzaGJhci1idXR0b24uanNcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!*******************************!*\
  !*** ./src/block/editor.scss ***!
  \*******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9lZGl0b3Iuc2Nzcz80OWQyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2svZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!******************************!*\
  !*** ./src/block/style.scss ***!
  \******************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay9zdHlsZS5zY3NzPzgwZjMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///3\n");

/***/ })
/******/ ]);