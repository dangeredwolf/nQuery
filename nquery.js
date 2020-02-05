(function (exports) {
	'use strict';

	var ready = (func) => {
		nQuery.__internal_r.push(func);
	};

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

	var eventHandler = (eventName, o, ...a) => {
		o.forEach(i => a.length === 0 ? i.dispatchEvent(new Event(eventName, ...a)) : i.addEventListener(eventName, ...a));
		return o;
	};

	var data = (o, tag, v) => {

		if (typeof v === "undefined") {
			return o[0] ? o[0].getAttribute("data-" + tag) : undefined;
		}

		o.forEach(i => i.setAttribute("data-" + tag, v));

		return o;

	};

	var each = (o, f) => {
		o.forEach((a, i) => {f(i);});
		return o;
	};

	var first = o => nQuery$1([o[0]]);

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

	var text = (o, v) => {

		if (typeof v === "undefined") {
			return o[0] ? o[0].innerText : undefined;
		}

		o.forEach(i => {
			i.innerText = v;
		});

		return o;

	};

	var toggleClass = (o, ...a) => {
		o.forEach(i => splitCSSClasses(a).forEach(c => i.classList.toggle(c)));
		return o;
	};

	let m_window = [];
	let m_document = [];
	let m = [];
	m.push(ready);
	m.push(addClass);
	m.push(append);
	m.push(attr);

	let blur = (...a) => eventHandler("blur", ...a);
	m.push(blur);

	let click = (...a) => eventHandler("click", ...a);
	m.push(click);

	let change = (...a) => eventHandler("change", ...a);
	m.push(change);

	let contextmenu = (...a) => eventHandler("contextmenu", ...a);
	m.push(contextmenu);
	m.push(data);

	let dblclick = (...a) => eventHandler("dblclick", ...a);
	m.push(dblclick);
	m.push(each);
	m.push(first);
	m.push(hasClass);
	m.push(height);
	m.push(hide);

	let hover = (...a) => eventHandler("mouseover", ...a);
	m.push(hover);
	m.push(html);

	let mousedown = (...a) => eventHandler("mousedown", ...a);
	m.push(mousedown);

	let mouseenter = (...a) => eventHandler("mouseenter", ...a);
	m.push(mouseenter);

	let mouseleave = (...a) => eventHandler("mouseleave", ...a);
	m.push(mouseleave);

	let mousemove = (...a) => eventHandler("mousemove", ...a);
	m.push(mousemove);

	let mouseout = (...a) => eventHandler("mouseout", ...a);
	m.push(mouseout);

	let mouseover = (...a) => eventHandler("mouseover", ...a);
	m.push(mouseover);

	let mouseup = (...a) => eventHandler("mouseup", ...a);
	m.push(mouseup);
	m.push(on);
	m.push(one);
	m.push(off);

	let resize = (...a) => eventHandler("resize", ...a);
	m.push(resize);
	m_window.push(resize); // also should work on window
	m.push(remove);
	m.push(removeClass);

	let scroll = (...a) => eventHandler("scroll", ...a);
	m.push(scroll);
	m_window.push(scroll); // also should work on window
	m.push(show);
	m.push(text);
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

	class nQueryObject extends Array {
		constructor(a) {
			super();
			// for X in Y loops are somehow unbelievably slow here.. it's kinda amazing... so instead we use a fast incremental loop
			for (var i = 0; i < a.length; i++) {
				this[i] = a[i];
			}
		}
	}

	class nQueryElement extends nQueryObject {
		constructor(a) {
			super(a);
		}
	}

	class nQueryWindow extends nQueryObject {
		constructor(a) {
			super(a);
		}
	}

	class nQueryDocument extends nQueryObject {
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

	function nQuery$1(object) {

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

	nQuery$1.__internal_r = [];

	nQuery$1.ajax = ajax;
	nQuery$1.type = (a => { return typeof a } );
	nQuery$1.now = (a => { return Date.now() } );
	nQuery$1.fn = {};
	nQuery$1.fn.extend = exts => { for (let i in exts) { nQueryObject.prototype[i] = exts[i]; } };
	nQuery$1.ready = func => {
		nQuery$1.__internal_r.push(func);
	};

	document.addEventListener("DOMContentLoaded", () => {
		nQuery$1.__internal_r.forEach(f => {
			f();
		});
	});

	window.$ = nQuery$1;
	// window.jQuery = nQuery;
	window.nQuery = nQuery$1;

	window.nQueryObject = nQueryObject;

	window.nQueryDocument = nQueryDocument;
	window.nQueryElement = nQueryElement;
	window.nQueryWindow = nQueryWindow;

	exports.nQuery = nQuery$1;
	exports.nQueryDocument = nQueryDocument;
	exports.nQueryElement = nQueryElement;
	exports.nQueryObject = nQueryObject;
	exports.nQueryWindow = nQueryWindow;

	return exports;

}({}));
//# sourceMappingURL=nquery.js.map
