import {config, elementModules, documentModules, windowModules, objectModules, globalModules} from "./../nquery.config.js";
import {normalizeElementArray, renderHTML, splitCSSClasses} from "./utils.js"; // splitCSSClasses is only used for __debugMethods
import nQueryObject from "./class/nQueryObject.js";
import nQueryDocument from "./class/nQueryDocument.js";
import nQueryElement from "./class/nQueryElement.js";
import nQueryWindow from "./class/nQueryWindow.js";
import nQueryPromise from "./class/nQueryPromise.js";
import nQueryPlugins from "./class/nQueryPlugins.js";
import version from "./version.js";

for (let i in objectModules) {
	nQueryObject.prototype[i] = objectModules[i];
}

for (let i in globalModules) {
	nQuery[i] = function(...args){return globalModules[i].call(this, ...args)};
}

for (let i in elementModules) {
	nQueryElement.prototype[i] = function(...args){return elementModules[i].call(this, this, ...args)};
}

for (let i in documentModules) {
	nQueryDocument.prototype[i] = function(...args){return documentModules[i].call(this, this, ...args)};
}

for (let i in windowModules) {
	nQueryWindow.prototype[i] = function(...args){return windowModules[i].call(this, this, ...args)};
}

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

	if (object instanceof window.nQueryObject) {
		return object;
	} else if (object instanceof Document) {
		return new window.nQueryDocument([object]);
	} else if (object instanceof Window) {
		return new window.nQueryWindow([object]);
	} else {
		return new window.nQueryElement(normalizeElementArray(object));

	}

}

nQuery.toString = () => "nQuery " + version;

nQuery.__debugMethods = {
	normalizeElementArray:normalizeElementArray,
	renderHTML:renderHTML,
	splitCSSClasses:splitCSSClasses
}

nQuery.__internal_r = [];

nQuery.fn = new nQueryPlugins;

document.addEventListener("DOMContentLoaded", () => {
	for (let i = 0; i < window.nQuery.__internal_r.length; i++) {
		(window.nQuery.__internal_r[i])();
	}
	window.nQuery.__ready = true;
});

if (config.use$ && !window.$) {
	window.$ = nQuery;
}

if (config.usejQuery && !window.jQuery) {
	window.jQuery = nQuery;
}

window.nQuery = nQuery;

window.nQueryObject = nQueryObject;

window.nQueryDocument = nQueryDocument;
window.nQueryElement = nQueryElement;
window.nQueryWindow = nQueryWindow;
window.nQueryPromise = nQueryPromise;
