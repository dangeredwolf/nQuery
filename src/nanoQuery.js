import mod from "./modules.js";
import {normalizeElementArray} from "./utils.js";
import ajax from "./modules/ajax.mjs";

console.log(mod)

export class nQueryObject extends Array {

	constructor(a) {
		super();
		for (var i = 0; i < a.length; i++) {
			this[i] = a[i];
		}
	}


}

for (let i in mod) {
	console.log(mod[i]);
		console.log(mod[i].name);
	nQueryObject.prototype[mod[i].name] = function(...a){return mod[i](this, ...a)};
}

export function nQuery(object) {

	if (typeof object === "string") {
		object = document.querySelectorAll(object);
	}

	if (object instanceof Document) {
		object.ready = function(func) {
			nQuery.__internal_r.push(func);
		}
	}

	object = normalizeElementArray(object);

	// let m = nQuery.fn;
	//
	// for (let i in m) {
	// 	if (m[i].name) {
	// 		object[m[i].name] = (...args) => {
	// 			return m[i](object, ...args);
	// 		};
	// 	} else {
	// 		object[i] = (...args) => {
	// 			return m[i](object, ...args);
	// 		};
	// 	}
	// }

	let newObject = new nQueryObject(object);

	return newObject;

}

nQuery.__internal_r = [];

nQuery.ajax = ajax;
nQuery.type = (a => { return typeof a } );
nQuery.now = (_ => { return Date.now() } );
nQuery.fn = {};
nQuery.fn.extend = () => { arguments.forEach(i => {nQueryObject[i.name] = i}) }
nQuery.ready = (func) => {
	nQuery.__internal_r.push(func);
}

document.addEventListener("DOMContentLoaded", () => {
	nQuery.__internal_r.forEach(f => {
		f();
	})
});

window.$ = nQuery;
// window.jQuery = nQuery;
window.nQuery = nQuery;
window.__nQueryObject = nQueryObject;
