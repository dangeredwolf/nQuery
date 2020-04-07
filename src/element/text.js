export default (objects, value) => {

	if (typeof value === "undefined") {
		return objects[0]?.innerText;
	}

	objects.forEach(obj => {
		obj.innerText = value;
	});

	return objects;

}
