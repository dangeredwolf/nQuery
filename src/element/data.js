export default (objects, tag, value) => {

	if (typeof value === "undefined") {
		return objects[0]?.getAttribute("data-" + tag);
	}

	for (let i = 0; i < objects.length; i++) {
		objects[i].setAttribute("data-" + tag, value)
	}

	return objects;

}
