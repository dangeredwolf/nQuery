export default (objects, value) => {

	if (typeof value === "undefined") {
		return objects[0]?.innerHTML
	}

	objects.forEach(obj => {
		obj.innerHTML = value;
	});

	return objects;

}
