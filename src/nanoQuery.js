import mod from "./modules.js";
import {normalizeElementArray, assert} from "./utils.js";

console.log(mod)

export function nQuery(object) {

	if (typeof object === "string") {
		object = document.querySelectorAll(object);
	}

	object = normalizeElementArray(object);

	let m = nQuery.fn;

	for (let i in m) {
		if (m[i].name) {
			object[m[i].name] = function(...args) {
				return m[i](object, ...args);
			};
		}
	}

	return object;

}

nQuery._internal__readyFuncs = [];

nQuery.fn = mod;
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
// window.jQuery = nQuery;
window.nQuery = nQuery;
