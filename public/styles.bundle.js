webpackJsonp([2,4],{

/***/ 11:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 149:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(326);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(385)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js??ref--9-1!../node_modules/postcss-loader/index.js??postcss!./styles.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 326:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(11)(false);
// imports


// module
exports.push([module.i, "/* You can add global styles to this file, and also import other style files */\r\n/*@import url('./app/components/navbar/navbar.component.css');*/\r\n\r\n\r\n/*body{\r\n    background: white;\r\n}*/\r\n\r\n#logo{\r\n    width: 200px;\r\n    height: 150px;\r\n    text-align: center;\r\n}\r\n\r\n#print-section{\r\n    display:none;\r\n}\r\n\r\ninput{\r\n    color: #2aa198\r\n}\r\n\r\n.navbar{\r\n    border-radius: 0px !important;\r\n}\r\n\r\n.controls{\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: row;\r\n            flex-direction: row;\r\n    -webkit-box-pack: end;\r\n        -ms-flex-pack: end;\r\n            justify-content: flex-end;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    padding-bottom: 20px;\r\n}\r\n\r\n.control{\r\n    margin-right: 10px;\r\n}\r\n\r\n.control:last-child{\r\n    margin-right: 0;\r\n}\r\n\r\n.form-container{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    margin-bottom: 100px;\r\n}\r\n\r\n.list-group-item{\r\n    cursor: pointer;\r\n}\r\n\r\n.list-group-item > a:hover{\r\n    text-decoration: none;\r\n    font-weight: 500;\r\n}\r\n\r\n.list-group-item-details{\r\n    /*text-indent: 10px;*/\r\n    font-size: 10px;\r\n    margin-top: 5px;\r\n}\r\n\r\n#login{\r\n    height: 96vh;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n}\r\n\r\n/*#login > h2{\r\n    margin-bottom: 40px;\r\n    font-size: 30px;\r\n}*/\r\n\r\n.site-title{\r\n    font-size: 6.8vw;\r\n}\r\n\r\n.login-form{\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-direction: column;\r\n            flex-direction: column;\r\n    /*max-width: 70vw;*/\r\n    width: 65vw;\r\n}\r\n\r\n.login-form-input{\r\n    margin: 10px 0;\r\n    height: 30px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.login-form-input:focus{\r\n    outline: none;\r\n    border: 2px solid #2aa198;\r\n}\r\n\r\ninput:focus{\r\n    outline: none;\r\n    border: 2px solid #2aa198;\r\n}\r\n\r\n.login-form-button{\r\n    background: #2aa198;\r\n    height: 35px;\r\n    /*color: white;*/\r\n    border: none;\r\n    border-radius: 4px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.form-submit{\r\n    width: 100%\r\n}\r\n\r\n#register{\r\n    height:70vh;\r\n    display:-webkit-box;\r\n    display:-ms-flexbox;\r\n    display:flex;\r\n    -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n        -ms-flex-pack: center;\r\n            justify-content: center;\r\n}\r\n\r\n.well{\r\n    min-width:100%;\r\n}\r\n\r\n.form-header{\r\n    margin-bottom: 30px;\r\n}\r\n\r\n.alerts{\r\n    /*position:absolute;*/\r\n    padding-top: 2vh;\r\n\r\n}\r\n\r\n.register-back{\r\n    margin-top: 20px;\r\n}\r\n\r\n.pad-left{\r\n    padding: 20px;\r\n}\r\n\r\n.text-lg{\r\n    height: 150px;\r\n}\r\n\r\n.padded-form{\r\n    padding: 30px;\r\n}\r\n\r\n.full{\r\n    color:red;\r\n}\r\n\r\n@media screen and (min-width:450px){\r\n    .site-title{\r\n        font-size: 30px;\r\n    }\r\n\r\n    .login-form{\r\n        width: 400px;\r\n    }\r\n}\r\n\r\n/*.site-title{\r\n    font-size: ;\r\n}*/\r\n\r\n/*.detail-container{\r\n    background: rgba(11,50,50,1);\r\n}*/\r\n\r\n/*\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n    \r\n}\r\n\r\nbody{\r\n    font-family: 'Open Sans', sans-serif;\r\n    position: relative;\r\n}\r\n\r\n.container{\r\n    margin-top: 6vh;\r\n    position: relative;\r\n    padding: 2% 8%;\r\n}\r\n\r\n.alert-success{\r\n    background-color: green;\r\n    color:white;\r\n    font-size: 18px;\r\n    padding:15px 25px;\r\n}\r\n\r\n.alert-danger{\r\n    background-color: red;\r\n    color: white;\r\n    font-size: 18px;\r\n    padding:15px 25px;\r\n}\r\n\r\n.section-header{\r\n    font-size: 26px;\r\n\r\n}\r\n\r\nnav{\r\n  display: flex;\r\n  width: 100vw;\r\n  height: 6vh;\r\n  justify-content: space-between;\r\n  background: rgba(11,50,50,1);\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 100;\r\n}\r\n\r\nnav li {\r\n    display: inline-block;\r\n    \r\n}\r\n\r\n.nav-group-main{\r\n    display: flex;\r\n    align-items: center;\r\n    list-style: none;\r\n    margin-left: 8%; \r\n}\r\n\r\n.nav-group-right{\r\n    display: flex;\r\n    align-items: center;\r\n    list-style: none;\r\n    margin-right: 8%; \r\n}\r\n\r\n.nav-item{\r\n  list-style: none;\r\n  text-decoration: none;\r\n  color:white;\r\n  margin-right: 10px;\r\n  \r\n}\r\n\r\n.nav-item:hover{\r\n  color: #c1c1c1;\r\n}\r\n\r\n.active{\r\n    text-decoration: underline;\r\n}\r\n\r\n#login{\r\n    height: 96vh;\r\n    display:flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n}\r\n\r\n#login > h2{\r\n    margin-bottom: 40px;\r\n    font-size: 30px;\r\n}\r\n\r\n.login-form{\r\n    display:flex;\r\n    flex-direction: column;\r\n    width: 25vw;\r\n}\r\n\r\n.login-form-input{\r\n    margin: 10px 0;\r\n    height: 30px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.login-form-input:focus{\r\n    outline: none;\r\n    border: 2px solid rgba(11,50,50,1);\r\n}\r\n\r\n.login-form-button{\r\n    background: rgba(11,50,50,1);\r\n    height: 35px;\r\n    color: white;\r\n    border: rgba(11,50,50,1);\r\n    margin-top: 10px;\r\n}\r\n\r\n.parent-container{\r\n    position:relative;\r\n    height:86vh;\r\n\r\n}\r\n\r\n.child-container{\r\n    width: 100%;\r\n    position: absolute;\r\n    top: 0;\r\n    left: 100vw;\r\n    padding: 2% 0;\r\n}\r\n\r\n.form-container{\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n}\r\n\r\n\r\n.controls{\r\n    display: flex;\r\n    justify-content: flex-end;\r\n\r\n    margin: 25px 0;\r\n}\r\n\r\n.list-group{\r\n    list-style:none;\r\n    border: 1px solid black;\r\n    margin-bottom: 6%;\r\n}\r\n\r\n.list-group > li{\r\n    border-bottom: 1px solid black;\r\n    padding: 10px 0 10px 20px;\r\n    cursor: pointer;\r\n}\r\n\r\n.list-group > li:last-child{\r\n    border-bottom: none\r\n}\r\n\r\n.list-group-item{\r\n    font-size: 18px;\r\n    text-decoration: none;\r\n    color:black;\r\n}\r\n\r\n.list-group-item-details{\r\n    text-indent: 10px;\r\n    font-size: 10px;\r\n    color:gray;\r\n}\r\n\r\n.btn{\r\n    height: 35px;\r\n    width: 100px;\r\n    border-radius: 10px;\r\n    box-shadow: none;\r\n    margin: 0 5px;\r\n    border: none;\r\n}\r\n\r\n.btn-primary{\r\n    background-color: rgba(11,50,50,1);\r\n    font-size: 16px;\r\n    color: white; \r\n}\r\n\r\n.btn-success{\r\n    background-color: green;\r\n    font-size: 16px;\r\n    color: white; \r\n}\r\n\r\n.btn-danger{\r\n    background-color: red;\r\n    font-size: 16px;\r\n    color: white; \r\n}\r\n\r\n*/\r\n\r\n\r\n", ""]);

// exports


/***/ }),

/***/ 385:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function createLinkElement(options) {
	var linkElement = document.createElement("link");
	linkElement.rel = "stylesheet";
	insertStyleElement(options, linkElement);
	return linkElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else if(obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function") {
		styleElement = createLinkElement(options);
		update = updateLink.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
			if(styleElement.href)
				URL.revokeObjectURL(styleElement.href);
		};
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		styleElement.setAttribute("media", media)
	}

	if(styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}

function updateLink(linkElement, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	if(sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = linkElement.href;

	linkElement.href = URL.createObjectURL(blob);

	if(oldSrc)
		URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ 389:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(149);


/***/ })

},[389]);
//# sourceMappingURL=styles.bundle.js.map