export default function(obj, attribute, value) {
	if (typeof value === "undefined") {
		if (obj[0]) {
			return obj[0].getAttribute(attribute);
		} else {
			return undefined;
		}
	}

	obj.forEach(i => {
		i.setAttribute(attribute, value);
	});

	return obj;
}
