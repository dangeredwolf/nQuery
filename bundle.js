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

	function eventHandler(eventName, obj, ...args) {

		obj.forEach(i => {
			if (arguments.length === 0) {
				i.dispatchEvent(new Event(eventName, ...args));
			} else {
				i.addEventListener(eventName, ...args);
			}
		});
		return obj;
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

	function attr(obj, attribute, value) {
		var returnMe = obj;
		obj.forEach(i => {
			if (typeof value === "undefined") {
				returnMe = i.getAttribute(attribute);
			} else {
				i.setAttribute(attribute, value);
			}
		});
		return obj;
	}

	function data(obj, attribute, value) {
		var returnMe = obj;
		obj.forEach(i => {
			if (typeof value === "undefined") {
				returnMe = i.getAttribute("data-" + attribute);
			} else {
				i.setAttribute("data-" + attribute, value);
			}
		});
		return obj;
	}

	function first(obj) {
		return nQuery(obj[0]);
	}

	function hasClass(obj, ...args) {
		let result = false;
		obj.forEach(i => {
			splitCSSClasses(args).forEach(cssClass => result = result || i.classList.contains(cssClass));
		});
		return result;
	}

	function on(obj, eventName, ...args) {
		obj.forEach(i => {
			i.addEventListener(eventName, ...args);
		});
		return obj;
	}

	function one(obj, eventName, func, ...args) {
		obj.forEach(i => {
			i.addEventListener(eventName, () => {
				i.removeEventListener(eventName);
			}, ...args);
		});
		return obj;
	}

	function off(obj, eventName, ...args) {
		obj.forEach(i => {
			i.removeEventListener(eventName, ...args);
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
	m.push(attr);

	let blur = function(){ eventHandler("blur", arguments[0], arguments[1], arguments[2]); };
	m.push(blur);

	let click = function(){ eventHandler("click", arguments[0], arguments[1], arguments[2]); };
	m.push(click);

	let change = function(){ eventHandler("change", arguments[0], arguments[1], arguments[2]); };
	m.push(change);
	m.push(data);

	let dblclick = function(){ eventHandler("dblclick", arguments[0], arguments[1], arguments[2]); };
	m.push(dblclick);
	m.push(first);
	m.push(hasClass);
	m.push(on);
	m.push(one);
	m.push(off);
	m.push(remove);
	m.push(removeClass);

	function ajax() {
		let settings = arguments[1] ? arguments[1] : arguments[0];

		if (typeof arguments[0] === "string") {
			if (typeof arguments[1] !== "object") {
				settings = {url:arguments[0]};
			} else {
				arguments[1].url = arguments[0];
			}
		}
		var request = new XMLHttpRequest;

		request.open(settings.method || "GET", settings.url, typeof settings.async === "undefined" ? true : settings.async, settings.username, settings.password);

		if (settings.dataType) {
			settings.overrideMimeType(settings.dataType);
		}

		return {
			done: (func) => {
				request.addEventListener("load", () => {
					var res = request.responseText;

					try {
						res = JSON.parse(res);
					} catch(e) {}

					func(res);
				});
				request.send();
			},
			fail:(func) => {
				request.addEventListener("error", func);
				request.addEventListener("abort", func);
			},
			always:(func) => {
				request.addEventListener("load", func);
				request.addEventListener("error", func);
				request.addEventListener("abort", func);
			}
		}
	}

	console.log(m);

	function nQuery(object) {

		if (typeof object === "string") {
			object = document.querySelectorAll(object);
		}

		if (object instanceof Document) {
			object.ready = function(func) {
				nQuery._internal__readyFuncs.push(func);
			};
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

	nQuery.fn = m;
	nQuery.ajax = ajax;
	nQuery.type = (a => { return typeof a } );
	nQuery.now = (_ => { return Date.now() } );
	nQuery.fn.extend = function() { arguments.forEach(i => nQuery.fn.push(i)); };
	nQuery.ready = function(func) {
		nQuery._internal__readyFuncs.push(func);
	};

	document.addEventListener("DOMContentLoaded", () => {
		nQuery._internal__readyFuncs.forEach(f => {
			f();
		});
	});

	window.$ = nQuery;
	window.jQuery = nQuery;
	window.nQuery = nQuery;

	exports.nQuery = nQuery;

	return exports;

}({}));
//# sourceMappingURL=bundle.js.map
