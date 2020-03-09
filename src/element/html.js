export default (objects, value) => {

	if (typeof value === "undefined") {
		return objects[0] ? objects[0].innerHTML : undefined;
	}

	objects.forEach(obj => {
		obj.innerHTML = value;
	});

	return objects;

}
