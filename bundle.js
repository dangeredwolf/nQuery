(function (exports) {
	'use strict';

	function normalizeElementArray(obj) {
		// https://stackoverflow.com/questions/22289727/difference-between-using-array-isarray-and-instanceof-array
		if (obj instanceof Array || obj instanceof NodeList) {
			return obj;
		} else if (obj instanceof HTMLElement) {
			obj = [obj];
			return obj;
		} else {
			console.warn("Someone passed me a non-element object?");
			console.info(obj);
			return obj;
		}
	}

	function assert(statement, customErr) {
		if (!statement) {
			throw customErr || "Assertion failed";
		} else {
			return true;
		}
	}

	function splitCSSClasses(...args) {
		let arr = [];
		args.forEach((i) => {
			if (typeof i === "string") {
				i.split(" ").forEach(j => arr.push(j));
			} else if (i instanceof Array) {
				i.forEach(j => arr.push(j));
			}
		});
		return arr;
	}

	function addClass(obj, ...args) {
		obj.forEach(i => {
			splitCSSClasses(args).forEach(cssClass => i.classList.add(cssClass));
		});
		return obj;
	}

	function append(obj, ...args) {
		obj.forEach(i => {
			args.forEach(j => {
				normalizeElementArray(j).forEach(k => i.appendChild(k));
			});
		});
		return obj;
	}

	function click(obj, ...args) {

		obj.forEach(i => {
			if (args.length === 0) {
				i.dispatchEvent(new Event("click"));
			} else {
				i.addEventListener("click", ...args);
			}
		});
		return obj;
	}

	function first(obj, ...args) {
		return jQuery(obj[0]);
	}

	function on(obj, ...args) {
		obj.forEach(i => {
			i.addEventListener(...args);
		});
		return obj;
	}

	function one(obj, ...args) {
		obj.forEach(i => {
			i.addEventListener(args[0], () => {
				args[1]();
				i.removeEventListener(args[0]);
			}, args[2]);
		});
		return obj;
	}

	function off(obj, ...args) {
		obj.forEach(i => {
			i.removeEventListener(...args);
		});
		return obj;
	}

	function remove(obj) {
		obj.forEach(i => i.remove()); // i.parentElement.removeChild(i)
		return obj;
	}

	function removeClass(obj, ...args) {
		obj.forEach(i => {
			splitCSSClasses(args).forEach(cssClass => i.classList.remove(cssClass));
		});
		return obj;
	}

	let m = [];
	m.push(addClass);
	m.push(append);
	m.push(click);
	m.push(first);
	m.push(on);
	m.push(one);
	m.push(off);
	m.push(remove);
	m.push(removeClass);

	console.log(m);

	function jQuery(object) {

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

	jQuery.fn = m;
	jQuery.fn.extend = function(...arg) { jQuery.fn.push(...arg); };
	jQuery.ready = function(func) {
		jQuery._internal__readyFuncs.push(func);
	};

	document.addEventListener("DOMContentLoaded", () => {
		jQuery._internal__readyFuncs.forEach((f) => {
			f();
		});
	});

	window.$ = jQuery;
	window.jQuery = jQuery;

	exports.jQuery = jQuery;

	return exports;

}({}));
//# sourceMappingURL=bundle.js.map
