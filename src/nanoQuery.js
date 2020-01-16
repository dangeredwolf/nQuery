import mod from "./modules.js";
import {normalizeElementArray, assert} from "./utils.js";
import ajax from "./modules/ajax.mjs";

console.log(mod)

export function nQuery(object) {

	if (typeof object === "string") {
		object = document.querySelectorAll(object);
	}

	if (object instanceof Document) {
		object.ready = function(func) {
			nQuery._internal__readyFuncs.push(func);
		}
	}

	object = normalizeElementArray(object);

	// if (typeof object === "undefined" || object.length <= 0) {
	//
	// }

	let m = nQuery.fn;

	for (let i in m) {
		if (m[i].name) {
			object[m[i].name] = function(...args) {
				return m[i](object, ...args);
			};
		} else {
			object[i] = function(...args) {
				return m[i](object, ...args);
			};
		}
	}


	return object;

}

nQuery._internal__readyFuncs = [];

nQuery.fn = mod;
nQuery.ajax = ajax;
nQuery.type = (a => { return typeof a } );
nQuery.now = (_ => { return Date.now() } );
nQuery.fn.extend = function() { arguments.forEach(i => nQuery.fn.push(i)) }
nQuery.ready = function(func) {
	nQuery._internal__readyFuncs.push(func);
}

document.addEventListener("DOMContentLoaded", () => {
	nQuery._internal__readyFuncs.forEach(f => {
		f();
	})
});

window.$ = nQuery;
window.jQuery = nQuery;
window.nQuery = nQuery;
