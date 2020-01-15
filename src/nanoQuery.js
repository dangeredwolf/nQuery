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
		console.log(m[i]);
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

jQuery.fn = mod;
jQuery.fn.extend = function(...arg) { jQuery.fn.push(...arg) }

window.$ = jQuery;
window.jQuery = jQuery;
