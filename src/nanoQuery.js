import mod from "./modules.js";
import {normalizeElementArray, assert} from "./utils.js";

console.log(mod)

export function jQuery(object) {

	if (typeof object === "string") {
		object = document.querySelectorAll(object);
	}

	object = normalizeElementArray(object);

	let m = jQuery.fn;

	for (let i in m) {
		assert(m[i], "Module array contains invalid value");
		assert(typeof m[i] === "function", "Module is not function");
		if (m[i].name) {
			object[m[i].name] = function(...args) {
				return m[i](object, ...args);
			};
		}
	}

	return object;

}

jQuery._internal__readyFuncs = [];

jQuery.fn = mod;
jQuery.fn.extend = function(...arg) { jQuery.fn.push(...arg) }
jQuery.ready = function(func) {
	jQuery._internal__readyFuncs.push(func);
}

document.addEventListener("DOMContentLoaded", () => {
	jQuery._internal__readyFuncs.forEach((f) => {
		f();
	})
});

window.$ = jQuery;
window.jQuery = jQuery;
