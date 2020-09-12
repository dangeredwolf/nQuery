import nQueryElement from "./class/nQueryElement.js";

export function normalizeElementArray(obj) {
	// don't forget that nQueryObject is an instance of Array

	// https://stackoverflow.com/questions/22289727/difference-between-using-array-isarray-and-instanceof-array
	if (obj === null) {
		return [];
	} else if (obj instanceof Array || obj instanceof NodeList || obj instanceof HTMLCollection || obj instanceof nQueryElement) {
		if (typeof obj[0] === "string") {
			return document.querySelectorAll(obj[0]);
		}

		return obj;
	} else if (obj instanceof HTMLElement) {
		return [obj];
	} else if (typeof obj === "string") {
		if (obj.match(/<.+>/g) === null) {
			try {
				return document.querySelectorAll(obj);
			} catch(e) {
				console.error(e);
				return []
			}
		} else {
			return renderHTML(obj);
		}
	} else if (typeof obj !== "undefined") {
		console.warn("nQuery Warning: nQuery was passed an unrecognised data type. The data we received is output using console.info.");
		console.info(obj);
		return [obj];
	}
	return [];
}

export function filter(statement, obj) {
	if (typeof statement === "string") {
		return obj.filter(a => a.matches(statement))
	}
}

export function assert(statement, customErr) {
	if (!statement)
		throw (customErr || "Assertion failed")
	return true
}

export function splitCSSClasses(...a) {
	let result = [];

	for (let i in a) {
		if (typeof a[i] === "string")
			a[i].split(" ").forEach(cssClass => result.push(cssClass));
		else if (a[i] instanceof Array)
			for (let j in a[i]) {
				a[i][j].split(" ").forEach(cssClass => result.push(cssClass))
			}
	}
	return result;
}

export function renderHTML(html) {
	let temp = document.createElement("div");
	temp.innerHTML = html;

	let object = temp.children;

	temp.remove();

	return object;
}
