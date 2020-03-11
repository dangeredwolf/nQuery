export default (objects, value) => {

	objects.forEach(obj => obj.outerHTML = value);

	return objects;

}
