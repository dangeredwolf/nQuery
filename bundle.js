(function (exports) {
	'use strict';

	function normalizeElementArray(o) {
		// https://stackoverflow.com/questions/22289727/difference-between-using-array-isarray-and-instanceof-array
		if (o instanceof Array || o instanceof NodeList) {
			return o;
		} else if (o instanceof HTMLElement) {
			o = [o];
			return o;
		} else {
			console.warn("Someone passed me a non-element object?");
			console.info(o);
			return o;
		}
	}

	function splitCSSClasses(...a) {
		let r = [];
		a.forEach(i => {
			if (typeof i === "string")
				r = i.split(" ");
			else if (i instanceof Array)
				i.forEach(j => r.push(j));
		});
		return r;
	}

	var eventHandler = (eventName, o, ...a) => {
		o.forEach(i => a.length === 0 ? i.dispatchEvent(new Event(eventName, ...a)) : i.addEventListener(eventName, ...a));
		return o;
	};

	var addClass = (o, ...a) => {
		o.forEach(i => splitCSSClasses(a).forEach(c => i.classList.add(c)));
		return o;
	};

	var append = (o, ...a) => {
		o.forEach(i => a.forEach(j => normalizeElementArray(j).forEach(k => i.appendChild(k))));
		return o;
	};

	var attr = (o, attr, v) => {
		return o[0] ? o[0].getAttribute(attr) : undefined;
	};

	var data = (o, tag, v) => {

		if (typeof v === "undefined") {
			return o[0] ? o[0].getAttribute("data-" + tag) : undefined;
		}

		o.forEach(i => i.setAttribute("data-" + tag, v));

		return o;

	};

	var first = o => new nQueryObject([o[0]]);

	var hasClass = (o, ...a) => {
		let r = false;
		o.forEach(i => splitCSSClasses(a).forEach(c => r = r || i.classList.contains(c)));
		return r;
	};

	var height = o => o[0] ? o[0].offsetHeight : o;

	var hide = o => {
		o.forEach(i => i.style.display = "none");
		return o;
	};

	var html = (o, v) => {

		if (typeof v === "undefined") {
			return o[0] ? o[0].innerHTML : undefined;
		}

		o.forEach(i => {
			i.innerHTML = v;
		});

		return o;

	};

	var on = (o, eventName, ...a) => {
		o.forEach(i => {
			i.addEventListener(eventName, ...a);
		});
		return o;
	};

	var one = (o, eventName, func, ...args) => {
		o.forEach(i => {
			i.addEventListener(eventName, e => {
				i.removeEventListener(eventName);
				func(e);
			}, ...args);
		});
		return o;
	};

	var off = (o, eventName, ...a) => {
		o.forEach(i => {
			i.removeEventListener(eventName, ...a);
		});
		return o;
	};

	var remove = o => {
		o.forEach(i => i.remove());
		return o;
	};

	var removeClass = (o, ...a) => {
		o.forEach(i => splitCSSClasses(a).forEach(c => i.classList.remove(c)));
		return o;
	};

	var show = o => {
		o.forEach(i => i.style.display = null);
		return o;
	};

	var toggleClass = (o, ...a) => {
		o.forEach(i => splitCSSClasses(a).forEach(c => i.classList.toggle(c)));
		return o;
	};

	let m = [];
	m.push(addClass);
	m.push(append);
	m.push(attr);

	let blur = (...a) => eventHandler("blur", ...a);
	m.push(blur);

	let click = (...a) => eventHandler("click", ...a);
	m.push(click);

	let change = (...a) => eventHandler("change", ...a);
	m.push(change);
	m.push(data);

	let dblclick = (...a) => eventHandler("dblclick", ...a);
	m.push(dblclick);
	m.push(first);
	m.push(hasClass);
	m.push(height);
	m.push(hide);
	m.push(html);
	m.push(on);
	m.push(one);
	m.push(off);
	m.push(remove);
	m.push(removeClass);
	m.push(show);
	m.push(toggleClass);

	var ajax = () => {
		let a = arguments;
		let settings = a[1] ? a[1] : a[0];

		if (typeof a[0] === "string") {
			if (typeof a[1] !== "object") {
				settings = {url:a[0]};
			} else {
				a[1].url = a[0];
			}
		}
		var request = new XMLHttpRequest;

		request.open(settings.method || "GET", settings.url, typeof settings.async === "undefined" ? true : settings.async, settings.username, settings.password);

		if (settings.dataType)
			settings.overrideMimeType(settings.dataType);

		return {
			done: (func) => {
				request.addEventListener("load", () => {
					var res = request.responseText;

					try {
						res = JSON.parse(res);
					} catch(e) {}

					func(res);
				});
				let str;

				if (request.body) {
					try {
						str = JSON.stringify(request.body);
					} catch(e) {}
				}

				request.send(str);
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
	};

	console.log(m);

	class nQueryObject extends Array {

		constructor(a) {
			super();
			for (var i = 0; i < a.length; i++) {
				this[i] = a[i];
			}
		}


	}

	for (let i in m) {
		console.log(m[i]);
			console.log(m[i].name);
		nQueryObject.prototype[m[i].name] = function(...a){return m[i](this, ...a)};
	}

	function nQuery(object) {

		if (typeof object === "string") {
			object = document.querySelectorAll(object);
		}

		if (object instanceof Document) {
			object.ready = function(func) {
				nQuery.__internal_r.push(func);
			};
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
	nQuery.fn.extend = () => { arguments.forEach(i => {nQueryObject[i.name] = i;}); };
	nQuery.ready = (func) => {
		nQuery.__internal_r.push(func);
	};

	document.addEventListener("DOMContentLoaded", () => {
		nQuery.__internal_r.forEach(f => {
			f();
		});
	});

	window.$ = nQuery;
	// window.jQuery = nQuery;
	window.nQuery = nQuery;
	window.__nQueryObject = nQueryObject;

	exports.nQuery = nQuery;
	exports.nQueryObject = nQueryObject;

	return exports;

}({}));
//# sourceMappingURL=bundle.js.map
