
export function normalizeElementArray(obj) {
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

export function assert(statement, customErr) {
	if (!statement) {
		throw customErr || "Assertion failed";
	} else {
		return true;
	}
}

export function splitCSSClasses(...args) {
	let arr = [];
	args.forEach((i) => {
		if (typeof i === "string") {
			arr = i.split(" ");
		} else if (i instanceof Array) {
			i.forEach(j => arr.push(j))
		}
	});
	return arr;
}
