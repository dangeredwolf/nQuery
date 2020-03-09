
export function normalizeElementArray(obj) {
	// don't forget that nQueryObject is an instance of Array

	// https://stackoverflow.com/questions/22289727/difference-between-using-array-isarray-and-instanceof-array
	if (obj instanceof Array || obj instanceof NodeList || obj instanceof HTMLCollection) {
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
	let r = [];
	a.forEach(i => {
		if (typeof i === "string")
			r = i.split(" ");
		else if (i instanceof Array)
			i.forEach(j => r.push(j))
	});
	return r;
}
