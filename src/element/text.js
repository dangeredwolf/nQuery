export default (objects, value) => {

	if (typeof value === "undefined") {
		return objects[0] ? objects[0].innerText : undefined;
	}

	objects.forEach(obj => {
		obj.innerText = value;
	});

	return objects;

}
