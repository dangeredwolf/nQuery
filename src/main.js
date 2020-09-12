import {m, m_document, m_window, m_properties, m_global} from "./modules.js";
import {normalizeElementArray, renderHTML, splitCSSClasses} from "./utils.js"; // splitCSSClasses is only used for __debugMethods
import nQueryObject from "./class/nQueryObject.js";
import nQueryDocument from "./class/nQueryDocument.js";
import nQueryElement from "./class/nQueryElement.js";
import nQueryWindow from "./class/nQueryWindow.js";
import nQueryPromise from "./class/nQueryPromise.js";


for (let i in m_properties) {
	nQueryObject.prototype[i] = m_properties[i];
}

for (let i in m_global) {
	nQuery[i] = function(...args){return m_global[i].call(this, ...args)};
}

for (let i in m) {
	nQueryElement.prototype[i] = function(...args){return m[i].call(this, this, ...args)};
}

for (let i in m_document) {
	nQueryDocument.prototype[i] = function(...args){return m_document[i].call(this, this, ...args)};
}

for (let i in m_window) {
	nQueryWindow.prototype[i] = function(...args){return m_window[i].call(this, this, ...args)};
}

let nQueryInit = (...args) => nQuery(...args);

export function nQuery(object) {

	if (typeof object === "string") {
		if (object.match(/<.+>/g) === null) {
			object = document.querySelectorAll(object);
		} else {
			object = renderHTML(object);
		}
	}

	if (typeof object === "function" && typeof nQuery.ready === "function") {
		nQuery.ready(object);
		return;
	}

	if (object instanceof nQueryObject) {
		return object;
	} else if (object instanceof Document) {
		return new nQueryDocument(object);
	} else if (object instanceof Window) {
		return new nQueryWindow(object);
	} else {
		return new nQueryElement(normalizeElementArray(object));

	}

}

nQueryInit.__debugMethods = {
	normalizeElementArray:normalizeElementArray,
	renderHTML:renderHTML,
	splitCSSClasses:splitCSSClasses
}

nQueryInit.__internal_r = [];

// nQuery.fn = {};

// nQuery.fn.extend = function(exts) {
// 	for (let ext in exts) {
// 		nQueryObject.prototype[ext] = function() {
// 			exts[ext].apply(this, arguments)
// 		}
// 	}
// }

document.addEventListener("DOMContentLoaded", () => {
	for (let i = 0; i < window.nQuery.__internal_r.length; i++) {
		(nQuery.__internal_r[i])();
	}
	nQuery.__ready = true;
});

// window.$ = nQuery;
// if (!window.jQuery) {
// 	window.jQuery = nQuery;
// }
window.nQuery = nQueryInit;

window.nQueryObject = nQueryObject;

window.nQueryDocument = nQueryDocument;
window.nQueryElement = nQueryElement;
window.nQueryWindow = nQueryWindow;
window.nQueryPromise = nQueryPromise;
