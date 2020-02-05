import {m, m_document, m_window, m_properties, m_global} from "./modules.js";
import {normalizeElementArray} from "./utils.js";
import nQueryObject from "./class/nQueryObject.mjs";
import nQueryDocument from "./class/nQueryDocument.mjs";
import nQueryElement from "./class/nQueryElement.mjs";
import nQueryWindow from "./class/nQueryWindow.mjs";


for (let i in m_properties) {
	nQueryObject.prototype[i] = m_properties[i];
}

for (let i in m_global) {
	nQuery[m_global[i].name] = function(...a){return m_global[i].call(this, ...a)};
}

for (let i in m) {
	nQueryElement.prototype[m[i].name] = function(...a){return m[i].call(this, this, ...a)};
}

for (let i in m_document) {
	nQueryDocument.prototype[m_document[i].name] = function(...a){return m_document[i].call(this, this, ...a)};
}

for (let i in m_window) {
	nQueryWindow.prototype[m_window[i].name] = function(...a){return m_window[i].call(this, this, ...a)};
}

export function nQuery(object) {

	if (typeof object === "string") {
		if (object.match(/<.+>/g) === null) {
			object = document.querySelectorAll(object);
		} else {
			let temp = document.createElement("div");
			temp.innerHTML = object;
			object = temp.children;
		}
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

nQuery.__internal_r = [];

nQuery.fn = {};

nQuery.fn.extend = function(exts) {
	for (let i in exts) {
		nQueryObject.prototype[i] = function() {
			console.log(this);
			exts[i].apply(this, arguments)
		}
	}
}

document.addEventListener("DOMContentLoaded", () => {
	nQuery.__internal_r.forEach(f => {
		f();
	});
	nQuery.__ready = true;
});

window.$ = nQuery;
// window.jQuery = nQuery;
window.nQuery = nQuery;

window.nQueryObject = nQueryObject;

window.nQueryDocument = nQueryDocument;
window.nQueryElement = nQueryElement;
window.nQueryWindow = nQueryWindow;
