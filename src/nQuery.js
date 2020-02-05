import {m, m_document, m_window} from "./modules.js";
import {normalizeElementArray} from "./utils.js";
import ajax from "./misc/ajax.mjs";

export class nQueryObject extends Array {
	constructor(a) {
		super();
		// for X in Y loops are somehow unbelievably slow here.. it's kinda amazing... so instead we use a fast incremental loop
		for (var i = 0; i < a.length; i++) {
			this[i] = a[i];
		}
	}
}

export class nQueryElement extends nQueryObject {
	constructor(a) {
		super(a);
	}
}

export class nQueryWindow extends nQueryObject {
	constructor(a) {
		super(a);
	}
}

export class nQueryDocument extends nQueryObject {
	constructor(a) {
		super(a);
	}
}

for (let i in m) {
	nQueryElement.prototype[m[i].name] = function(...a){return m[i](this, ...a)};
}
for (let i in m_document) {
	nQueryDocument.prototype[m_document[i].name] = function(...a){return m_document[i](this, ...a)};
}
for (let i in m_window) {
	nQueryWindow.prototype[m_window[i].name] = function(...a){return m_window[i](this, ...a)};
}

export function nQuery(object) {

	if (typeof object === "string") {
		object = document.querySelectorAll(object);
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

nQuery.ajax = ajax;
nQuery.type = (a => { return typeof a } );
nQuery.now = (a => { return Date.now() } );
nQuery.fn = {};
nQuery.fn.extend = exts => { for (let i in exts) { nQueryObject.prototype[i] = exts[i] } }
nQuery.ready = func => {
	nQuery.__internal_r.push(func);
}

document.addEventListener("DOMContentLoaded", () => {
	nQuery.__internal_r.forEach(f => {
		f();
	});
});

window.$ = nQuery;
// window.jQuery = nQuery;
window.nQuery = nQuery;

window.nQueryObject = nQueryObject;

window.nQueryDocument = nQueryDocument;
window.nQueryElement = nQueryElement;
window.nQueryWindow = nQueryWindow;
