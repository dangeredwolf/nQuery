export default (objects, attr, value) => {
	let attrObject = {};
	let useValue = typeof value !== "undefined";

	if (typeof attr === "object") {
		attrObject = attr;
		useValue = true;
	} else {
		attrObject[attr] = value;
	}

	if (useValue) {
		for (let i in attrObject) {
			console.log(i);
			objects.forEach(obj => obj.setAttribute(i, attrObject[i]));
		}
	} else {
		if (objects[0]) {
			return objects[0].getAttribute(attr) || undefined;
		}
	}

	console.log(objects);

	return objects;
}
