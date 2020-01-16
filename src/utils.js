
export function normalizeElementArray(o) {
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
