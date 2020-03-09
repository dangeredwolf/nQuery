export default (objects, tag, value) => {

	if (typeof value === "undefined") {
		return objects[0] ? objects[0].getAttribute("data-" + tag) : undefined;
	}

	objects.forEach(obj => obj.setAttribute("data-" + tag, value));

	return objects;

}
