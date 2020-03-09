export default (objects, attr, value) => {
	if (value) {
		objects.forEach(obj => obj.setAttribute(attr, value));
		return objects;
	} else {
		if (objects[0]) {
			return objects[0].getAttribute(attr) || undefined;
		}
	}



}
